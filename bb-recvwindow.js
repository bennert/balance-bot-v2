// Launcher that widens Bybit's recv_window before starting Balance Bot.
//
// Why: Bybit rejects a signed request when it arrives more than recv_window
// milliseconds after the timestamp was generated (retCode 10002). ccxt defaults
// to 5000 ms. On a high-latency link to api.bybit.id a slow request exceeds that
// and the bot reports it as "your machine's internal clock may be out of sync",
// even when the clock is accurate.
//
// Balance Bot exposes no setting for this, so this file patches the ccxt
// describe() defaults and re-execs the normal entrypoint with NODE_OPTIONS set,
// so the bot's child processes (bm.js -> bot.js) inherit the patch.
//
// Usage:  node bb-recvwindow.js            (default 20000 ms)
//         BB_RECV_WINDOW=30000 node bb-recvwindow.js
//
// Plain `node bb.js` is unaffected.

const path = require('path');

const RECV_WINDOW = Number(process.env.BB_RECV_WINDOW || 20000);

function patchCcxt() {
    let ccxt;
    try {
        ccxt = require('ccxt');
    } catch (err) {
        console.error('[recv-window] ccxt not found, patch skipped:', err.message);
        return;
    }

    const targets = [];
    for (const name of ['bybit', 'bybitid', 'bybiteu']) {
        if (ccxt[name]) targets.push(ccxt[name]);
        if (ccxt.pro && ccxt.pro[name]) targets.push(ccxt.pro[name]);
    }

    let patched = 0;
    for (const Cls of targets) {
        const proto = Cls.prototype;
        if (!proto || typeof proto.describe !== 'function') continue;
        // Only wrap a describe() this class declares itself; inherited ones are
        // already covered through the prototype chain.
        if (!Object.prototype.hasOwnProperty.call(proto, 'describe')) continue;
        if (Object.prototype.hasOwnProperty.call(proto, '__recvWindowPatched')) continue;
        Object.defineProperty(proto, '__recvWindowPatched', { value: true });
        const original = proto.describe;
        proto.describe = function () {
            const described = original.call(this);
            if (described && described.options) {
                described.options.recvWindow = RECV_WINDOW;
            }
            return described;
        };
        patched++;
    }

    if (patched > 0) {
        console.log(`[recv-window] ccxt ${ccxt.version}: recv_window set to ${RECV_WINDOW} ms on ${patched} exchange classes`);
    }
}

if (process.env.BB_RECV_WINDOW_PRELOAD === '1') {
    // Loaded through NODE_OPTIONS=--require in this process and every child.
    patchCcxt();
} else {
    // Launcher: re-exec bb.js with the patch preloaded for the whole process tree.
    const { spawn } = require('child_process');
    // Node's NODE_OPTIONS parser treats backslashes inside quotes as escapes, so
    // hand it a forward-slash path. Windows accepts those fine.
    const self = path.resolve(__dirname, 'bb-recvwindow.js').replace(/\\/g, '/');
    const entry = path.resolve(__dirname, 'bb.js');

    const nodeOptions = [process.env.NODE_OPTIONS, `--require "${self}"`]
        .filter(Boolean)
        .join(' ');

    const child = spawn(process.execPath, [entry], {
        stdio: 'inherit',
        env: {
            ...process.env,
            NODE_OPTIONS: nodeOptions,
            BB_RECV_WINDOW_PRELOAD: '1',
            BB_RECV_WINDOW: String(RECV_WINDOW),
        },
    });

    child.on('exit', (code, signal) => {
        if (signal) process.kill(process.pid, signal);
        else process.exit(code ?? 0);
    });
}
