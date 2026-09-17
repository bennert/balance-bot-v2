'use strict';

// Hermetic verification for bybit-id-shim.js.
// Safe to run with leftover BYBIT_* variables in your shell: they are cleared
// for the in-process suite, and the env-driven scenarios run in child processes
// with an explicitly controlled environment.

const assert = require('assert');
const { execFileSync } = require('child_process');
const path = require('path');

const leaked = ['BYBIT_HOSTNAME', 'BYBIT_ID_REGISTER', 'BYBIT_SHIM_ALLOW_BOTH']
    .filter((k) => process.env[k]);
if (leaked.length) {
    console.log('note: ignoring leftover shell vars for the in-process suite:', leaked.join(', '));
    for (const k of leaked) delete process.env[k];
}
process.env.BYBIT_SHIM_NO_AUTOINSTALL = '1';

const ccxt = require('ccxt');
const shim = require('./bybit-id-shim.js');

let failures = 0;
function check (label, fn) {
    return Promise.resolve().then(fn).then((detail) => {
        console.log('  PASS  ' + label + (detail ? '  -> ' + detail : ''));
    }).catch((e) => {
        failures++;
        console.log('  FAIL  ' + label + '  -> ' + String(e.message).split('\n')[0]);
    });
}

// Mimics bot.js: supportedExchanges() filters ccxt.pro.exchanges on capabilities,
// then instantiates via ccxt.pro[name.toLowerCase()].
const REQUIRED = ['ws', 'fetchTicker', 'fetchBalance', 'watchOrders', 'createOrder', 'cancelOrder'];
function botSupportedExchanges () {
    const supported = [];
    for (const id of ccxt.pro.exchanges) {
        try {
            const ex = new ccxt.pro[id]();
            if (REQUIRED.every((c) => c in ex.has && ex.has[c])) supported.push(id);
        } catch (e) { /* ignore, same as bot.js */ }
    }
    return supported;
}

function runChild (env, expectFail) {
    const script = path.join(__dirname, 'scenario.js');
    try {
        const out = execFileSync(process.execPath, [script], {
            env: Object.assign({}, process.env, { BYBIT_SHIM_NO_AUTOINSTALL: '' }, env),
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'pipe'],
        });
        if (expectFail) throw new Error('expected child to fail but it succeeded');
        return JSON.parse(out.trim().split('\n').pop());
    } catch (e) {
        if (expectFail) return { error: (e.stderr || e.message).toString() };
        throw new Error((e.stderr || e.message).toString().split('\n')[0]);
    }
}

(async () => {
    console.log('== baseline (shim loaded, not installed) ==');
    await check('autoinstall suppressed, nothing patched yet', () => {
        assert.deepStrictEqual(shim.status(), { override: null, registered: [] });
        assert.strictEqual(ccxt.pro.bybitid, undefined);
    });
    await check('global bybit is pristine', () => {
        const g = new ccxt.pro.bybit();
        assert.strictEqual(g.hostname, 'bybit.com');
        return g.implodeHostname(g.urls.api.public);
    });
    const before = botSupportedExchanges();
    await check('bybit passes bot capability filter', () => {
        assert.ok(before.includes('bybit'));
        return before.length + ' exchanges supported';
    });

    console.log('== guard rails ==');
    await check('refuses both modes at once (the trap you hit)', () => {
        assert.throws(() => shim.install({ hostname: 'bybit.id', register: true }),
            /both set/);
        assert.deepStrictEqual(shim.status(), { override: null, registered: [] },
            'must not partially apply');
        return 'throws and leaves state clean';
    });
    await check('both modes allowed with explicit opt-in', () => {
        const probe = runChild({ BYBIT_HOSTNAME: 'bybit.id', BYBIT_ID_REGISTER: '1', BYBIT_SHIM_ALLOW_BOTH: '1', SCENARIO_EXCHANGE: 'bybit' });
        assert.strictEqual(probe.hostname, 'bybit.id');
        return 'opt-in honoured';
    });
    await check('unknown region rejected', () => {
        assert.throws(() => shim.install({ register: true, registerHostname: 'bybit.zz' }),
            /no region metadata/);
        return 'throws';
    });

    console.log('== register mode ==');
    shim.install({ register: true });
    await check('ccxt.pro.bybitid registered', () => {
        assert.strictEqual(typeof ccxt.pro.bybitid, 'function');
    });
    await check('bybitid added to ccxt.pro.exchanges', () => {
        assert.ok(ccxt.pro.exchanges.includes('bybitid'));
    });
    await check('bybitid visible to bot supportedExchanges()', () => {
        const after = botSupportedExchanges();
        assert.ok(after.includes('bybitid'), 'not in supported list');
        assert.ok(after.includes('bybit'), 'bybit disappeared');
        return after.length + ' exchanges (was ' + before.length + ')';
    });
    await check('bot lookup pattern ccxt.pro[name.toLowerCase()]', () => {
        assert.strictEqual(typeof ccxt.pro['Bybitid'.toLowerCase()], 'function');
    });

    const id = new ccxt.pro.bybitid();
    await check('identity + hostname', () => {
        assert.strictEqual(id.id, 'bybitid');
        assert.strictEqual(id.name, 'Bybit Indonesia');
        assert.strictEqual(id.hostname, 'bybit.id');
        return id.name;
    });
    await check('REST url resolves to api.bybit.id', () => {
        const url = id.implodeHostname(id.urls.api.public);
        assert.strictEqual(url, 'https://api.bybit.id');
        return url;
    });
    await check('WS public url resolves to stream.bybit.id', () => {
        const url = id.implodeHostname(id.urls.api.ws.public.spot);
        assert.strictEqual(url, 'wss://stream.bybit.id/v5/public/spot');
        return url;
    });
    await check('WS trade url is regional (not stream.bybit.com)', () => {
        const url = id.implodeHostname(id.urls.api.ws.private.trade);
        assert.strictEqual(url, 'wss://stream.bybit.id/v5/trade');
        return url;
    });
    await check('global bybit untouched by register mode', () => {
        const g = new ccxt.pro.bybit();
        assert.strictEqual(g.hostname, 'bybit.com');
        assert.strictEqual(g.name, 'Bybit');
        return g.implodeHostname(g.urls.api.public);
    });
    await check('register is idempotent', () => {
        const Klass = ccxt.pro.bybitid;
        shim.install({ register: true });
        shim.install({ register: true });
        assert.strictEqual(ccxt.pro.bybitid, Klass, 'class was re-wrapped');
        assert.strictEqual(ccxt.pro.exchanges.filter((x) => x === 'bybitid').length, 1,
            'duplicate entry in exchanges list');
        return 'no stacking, no duplicates';
    });

    console.log('== live REST against api.bybit.id ==');
    let idMarkets = 0;
    await check('loadMarkets() on bybitid', async () => {
        idMarkets = Object.keys(await id.loadMarkets()).length;
        assert.ok(idMarkets > 0);
        return idMarkets + ' markets';
    });
    await check('fetchTicker BTC/USDT on bybitid', async () => {
        const t = await id.fetchTicker('BTC/USDT');
        assert.ok(t.last > 0);
        return 'last=' + t.last;
    });
    await check('market universe really differs from global bybit', async () => {
        const g = new ccxt.pro.bybit();
        const globalMarkets = Object.keys(await g.loadMarkets()).length;
        await g.close();
        assert.notStrictEqual(idMarkets, globalMarkets,
            'identical counts suggest both point at the same endpoint');
        return 'bybitid=' + idMarkets + ' vs bybit=' + globalMarkets;
    });

    console.log('== live WebSocket against stream.bybit.id ==');
    await check('watchTicker BTC/USDT over ws', async () => {
        const t = await Promise.race([
            id.watchTicker('BTC/USDT'),
            new Promise((_, rej) => setTimeout(() => rej(new Error('ws timeout 30s')), 30000)),
        ]);
        assert.ok(t && t.last > 0);
        return 'ws last=' + t.last;
    });
    await id.close();

    console.log('== override mode (isolated child process) ==');
    await check('override repoints Bybit itself', () => {
        const p = runChild({ BYBIT_HOSTNAME: 'bybit.id', SCENARIO_EXCHANGE: 'bybit' });
        assert.strictEqual(p.hostname, 'bybit.id');
        assert.strictEqual(p.name, 'Bybit', 'name must stay Bybit for bot.js string match');
        assert.strictEqual(p.id, 'bybit', 'id must stay bybit');
        assert.strictEqual(p.rest, 'https://api.bybit.id');
        assert.strictEqual(p.ws, 'wss://stream.bybit.id/v5/public/spot');
        return p.rest + ' as "' + p.name + '"';
    });
    await check('override keeps bot.js 10-symbol workaround reachable', () => {
        const p = runChild({ BYBIT_HOSTNAME: 'bybit.id', SCENARIO_EXCHANGE: 'bybit' });
        const configExchange = p.id.charAt(0).toUpperCase() + p.id.slice(1);
        assert.strictEqual(configExchange, 'Bybit');
        return 'config.exchange == "Bybit" still true';
    });
    await check('no env vars means no patching at all', () => {
        const p = runChild({ SCENARIO_EXCHANGE: 'bybit' });
        assert.strictEqual(p.hostname, 'bybit.com');
        assert.strictEqual(p.rest, 'https://api.bybit.com');
        return p.rest;
    });

    console.log('== multi-process propagation (bb.js -> bm.js -> bot.js) ==');
    const chain = path.join(__dirname, 'chain.js');
    const shimForNodeOptions = '--require "' + path.join(__dirname, 'bybit-id-shim.js').replace(/\\/g, '/') + '"';

    function runChain (env) {
        const out = execFileSync(process.execPath, [chain], {
            env: Object.assign({}, process.env, { BYBIT_SHIM_NO_AUTOINSTALL: '', CHAIN_LEVEL: '' }, env),
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'pipe'],
        });
        const lines = out.trim().split('\n').filter((l) => l.trim().startsWith('{'));
        return JSON.parse(lines.pop());
    }

    await check('without NODE_OPTIONS the grandchild is NOT patched (the real bug)', () => {
        const p = runChain({ BYBIT_HOSTNAME: 'bybit.id', SCENARIO_EXCHANGE: 'bybit' });
        assert.strictEqual(p.tag, 'bot.js');
        assert.strictEqual(p.hostname, 'bybit.com',
            'grandchild unexpectedly patched - test no longer proves anything');
        return 'confirms bot.js would hit ' + p.rest;
    });
    await check('with NODE_OPTIONS the grandchild IS patched (override)', () => {
        const p = runChain({
            BYBIT_HOSTNAME: 'bybit.id',
            SCENARIO_EXCHANGE: 'bybit',
            NODE_OPTIONS: shimForNodeOptions,
        });
        assert.strictEqual(p.tag, 'bot.js');
        assert.strictEqual(p.hostname, 'bybit.id');
        assert.strictEqual(p.name, 'Bybit');
        return 'bot.js reaches ' + p.rest;
    });
    await check('with NODE_OPTIONS the grandchild IS patched (register)', () => {
        const p = runChain({
            BYBIT_ID_REGISTER: '1',
            SCENARIO_EXCHANGE: 'bybitid',
            NODE_OPTIONS: shimForNodeOptions,
        });
        assert.strictEqual(p.tag, 'bot.js');
        assert.strictEqual(p.id, 'bybitid');
        assert.strictEqual(p.hostname, 'bybit.id');
        return 'bot.js reaches ' + p.rest + ' as ' + p.name;
    });
    await check('NODE_OPTIONS path survives Windows backslash escaping', () => {
        assert.ok(!shimForNodeOptions.includes('\\'),
            'backslashes in NODE_OPTIONS get eaten as escapes - use forward slashes');
        return shimForNodeOptions;
    });

    console.log('\n' + (failures === 0 ? 'ALL CHECKS PASSED' : failures + ' CHECK(S) FAILED'));
    process.exit(failures === 0 ? 0 : 1);
})();
