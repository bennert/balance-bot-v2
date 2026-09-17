'use strict';
// Reproduces the real process chain: bb.js -> bm.js -> bot.js (separate processes).
// Level 0 = this file (like bb.js), it spawns level 1 (like bm.js),
// which spawns level 2 (like bot.js). Only level 2 does the real ccxt work.
const { spawn } = require('child_process');
const path = require('path');

const level = parseInt(process.env.CHAIN_LEVEL || '0', 10);

function report (tag) {
    const ccxt = require('ccxt');
    const name = process.env.SCENARIO_EXCHANGE || 'bybit';
    const Klass = ccxt.pro[name.toLowerCase()];
    if (!Klass) {
        console.log(JSON.stringify({ tag, error: 'exchange ' + name + ' not registered' }));
        return;
    }
    const ex = new Klass({ apiKey: 'x', secret: 'y' });
    console.log(JSON.stringify({
        tag,
        id: ex.id,
        name: ex.name,
        hostname: ex.hostname,
        rest: ex.implodeHostname(ex.urls.api.public),
    }));
}

if (level >= 2) {
    // This is "bot.js" - the process that actually talks to the exchange.
    report('bot.js');
} else {
    const child = spawn(process.execPath, [path.join(__dirname, 'chain.js')], {
        env: Object.assign({}, process.env, { CHAIN_LEVEL: String(level + 1) }),
        stdio: 'inherit',
    });
    child.on('exit', (code) => process.exit(code));
}
