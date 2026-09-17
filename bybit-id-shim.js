'use strict';

// Registers Bybit Indonesia (api.bybit.id) with ccxt so Balance Bot can use it.
// Must be required BEFORE bot.js, so it shares the same cached ccxt instance.
//
// Two modes, driven by environment variables:
//
//   BYBIT_HOSTNAME=bybit.id
//       Repoints the existing "Bybit" exchange at api.bybit.id / stream.bybit.id.
//       The bot keeps seeing the exchange as "Bybit", which preserves bot.js's
//       hardcoded `config.exchange == 'Bybit'` branch that works around Bybit's
//       10-symbol watchTickers limit. Recommended for testing.
//
//   BYBIT_ID_REGISTER=1
//       Adds a separate "bybitid" exchange next to Bybit, so both can be
//       configured side by side. Note: bot.js's 10-symbol workaround matches on
//       the literal string 'Bybit' and will NOT trigger for this id.
//
// The two modes are mutually exclusive by design: enabling both would silently
// repoint the global "Bybit" exchange at the regional endpoint, which is almost
// always an accident (a leftover BYBIT_HOSTNAME in the shell). Set
// BYBIT_SHIM_ALLOW_BOTH=1 if you really mean it.

const ccxt = require('ccxt');

const REGIONS = {
    'bybit.id': { id: 'bybitid', name: 'Bybit Indonesia', countries: ['ID'] },
};

// Tracks what this process already applied, so repeated install() calls cannot
// stack subclasses on top of each other.
const state = { override: null, registered: [] };

function regionalUrls (hostname) {
    return {
        'api': {
            'ws': {
                'public': {
                    'spot': 'wss://stream.{hostname}/v5/public/spot',
                    'inverse': 'wss://stream.{hostname}/v5/public/inverse',
                    'option': 'wss://stream.{hostname}/v5/public/option',
                    'linear': 'wss://stream.{hostname}/v5/public/linear',
                },
                'private': {
                    'spot': {
                        'unified': 'wss://stream.{hostname}/v5/private',
                        'nonUnified': 'wss://stream.{hostname}/spot/private/v3',
                    },
                    'contract': 'wss://stream.{hostname}/v5/private',
                    'usdc': 'wss://stream.{hostname}/trade/option/usdc/private/v1',
                    // ccxt hardcodes this one upstream; pin it to the region too.
                    'trade': 'wss://stream.' + hostname + '/v5/trade',
                },
            },
        },
    };
}

function makeRegionalClass (BaseClass, hostname, meta, isPro) {
    return class extends BaseClass {
        describe () {
            const overrides = {
                'hostname': hostname,
                'certified': false,
            };
            if (meta.id) overrides['id'] = meta.id;
            if (meta.name) overrides['name'] = meta.name;
            if (meta.countries) overrides['countries'] = meta.countries;
            if (isPro) overrides['urls'] = regionalUrls (hostname);
            return this.deepExtend (super.describe (), overrides);
        }
    };
}

function addToList (list, id) {
    if (Array.isArray (list) && !list.includes (id)) {
        list.push (id);
        list.sort ();
    }
}

function applyHostnameOverride (hostname) {
    if (state.override === hostname) {
        return 'bybit';
    }
    if (state.override) {
        throw new Error ('bybit-id-shim: Bybit is already overridden to ' + state.override
            + ', refusing to re-point it at ' + hostname);
    }
    // Keep id and name as-is so bot.js still recognises the exchange as "Bybit".
    ccxt.pro.bybit = makeRegionalClass (ccxt.pro.bybit, hostname, {}, true);
    ccxt.bybit = makeRegionalClass (ccxt.bybit, hostname, {}, false);
    state.override = hostname;
    return 'bybit';
}

function applyRegistration (hostname) {
    const meta = REGIONS[hostname];
    if (!meta) {
        throw new Error ('bybit-id-shim: no region metadata for hostname ' + hostname
            + ' (known: ' + Object.keys (REGIONS).join (', ') + ')');
    }
    if (state.registered.includes (meta.id)) {
        return meta.id;
    }
    // Derive from pristine base classes so a hostname override cannot leak in.
    ccxt.pro[meta.id] = makeRegionalClass (basePro, hostname, meta, true);
    ccxt[meta.id] = makeRegionalClass (baseRest, hostname, meta, false);
    addToList (ccxt.pro.exchanges, meta.id);
    addToList (ccxt.exchanges, meta.id);
    state.registered.push (meta.id);
    return meta.id;
}

// Captured before any patching, so register mode always extends real Bybit.
const basePro = ccxt.pro.bybit;
const baseRest = ccxt.bybit;

function install (options = {}) {
    const hostname = options.hostname !== undefined ? options.hostname : process.env.BYBIT_HOSTNAME;
    const register = options.register !== undefined
        ? options.register
        : (process.env.BYBIT_ID_REGISTER === '1');
    const allowBoth = options.allowBoth !== undefined
        ? options.allowBoth
        : (process.env.BYBIT_SHIM_ALLOW_BOTH === '1');

    if (hostname && register && !allowBoth) {
        throw new Error ('bybit-id-shim: BYBIT_HOSTNAME (' + hostname + ') and BYBIT_ID_REGISTER '
            + 'are both set. That would repoint the global "Bybit" exchange at ' + hostname
            + ' as well as adding a separate one.\n'
            + '  Pick one mode. In PowerShell, clear the leftover variable with:\n'
            + '    $env:BYBIT_HOSTNAME=$null\n'
            + '  Or set BYBIT_SHIM_ALLOW_BOTH=1 if this is intentional.');
    }

    const applied = [];
    if (hostname) {
        applied.push ('override:' + applyHostnameOverride (hostname) + '@' + hostname);
    }
    if (register) {
        applied.push ('register:' + applyRegistration (options.registerHostname || 'bybit.id'));
    }
    if (applied.length) {
        console.log ('[bybit-id-shim] active ->', applied.join (', '));
    }
    return applied;
}

function status () {
    return { override: state.override, registered: state.registered.slice () };
}

// Only auto-install when loaded as a side-effect import (e.g. from bb-bybitid.js).
// Tests and tooling can require this module and call install() explicitly.
if (require.main !== module && !process.env.BYBIT_SHIM_NO_AUTOINSTALL) {
    install ();
}

module.exports = { install, status, makeRegionalClass, regionalUrls, REGIONS };
