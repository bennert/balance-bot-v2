'use strict';

// Alternative entrypoint: loads the Bybit Indonesia shim, then hands off to bb.js.
// Use this instead of `node bb.js`.
//
//   Test the regional endpoint as "Bybit" (recommended):
//     PowerShell:  $env:BYBIT_HOSTNAME="bybit.id"; node bb-bybitid.js
//     bash:        BYBIT_HOSTNAME=bybit.id node bb-bybitid.js
//
//   Expose a separate "Bybitid" exchange alongside global Bybit:
//     PowerShell:  $env:BYBIT_HOSTNAME=$null; $env:BYBIT_ID_REGISTER="1"; node bb-bybitid.js
//     bash:        BYBIT_ID_REGISTER=1 node bb-bybitid.js
//
// Why NODE_OPTIONS: Balance Bot is multi-process. bb.js starts bm.js, which
// starts bot.js as a *separate* node process - and bot.js is the one that
// actually talks to the exchange. Patching ccxt only in this process would do
// nothing. Injecting --require via NODE_OPTIONS makes every child node process
// load the shim too, because NODE_OPTIONS is inherited through the env.

const path = require('path');

// NODE_OPTIONS treats a backslash inside double quotes as an escape character,
// which mangles Windows paths ("C:\Users\..." becomes "C:Users..."). Node accepts
// forward slashes on Windows, so normalise before quoting.
const shimPath = path.join(__dirname, 'bybit-id-shim.js');
const requireFlag = '--require "' + shimPath.replace(/\\/g, '/') + '"';

const modeRequested = Boolean(process.env.BYBIT_HOSTNAME) || process.env.BYBIT_ID_REGISTER === '1';

try {
    require('./bybit-id-shim.js');
} catch (e) {
    console.error('\n[bybit-id-shim] refusing to start:\n');
    console.error(e.message + '\n');
    process.exit(1);
}

if (!modeRequested) {
    console.warn('[bybit-id-shim] no BYBIT_HOSTNAME or BYBIT_ID_REGISTER set - running unmodified');
} else {
    // Only inject once a mode is actually active, so an unmodified run stays clean.
    if (!(process.env.NODE_OPTIONS || '').includes('bybit-id-shim.js')) {
        process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, requireFlag]
            .filter(Boolean)
            .join(' ');
    }
    console.log('[bybit-id-shim] child node processes inherit: ' + requireFlag);
}

require('./bb.js');
