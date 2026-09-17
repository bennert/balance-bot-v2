'use strict';

// Isolates a Bybit 10004 "Error sign" without involving Balance Bot.
// Reads credentials from the environment so nothing lands in your shell history
// or in this file. The secret is never printed.
//
//   PowerShell:
//     $env:BYBIT_KEY="your-key"
//     $env:BYBIT_SECRET="your-secret"
//     node diag-auth.js
//
//   Optional: $env:BYBIT_DIAG_HOST="bybit.com"   (default: bybit.id)

const crypto = require('crypto');
const https = require('https');

const key = process.env.BYBIT_KEY;
const secret = process.env.BYBIT_SECRET;
const host = 'api.' + (process.env.BYBIT_DIAG_HOST || 'bybit.id');

if (!key || !secret) {
    console.error('Set BYBIT_KEY and BYBIT_SECRET first. See the header of this file.');
    process.exit(2);
}

function mask (s) {
    if (s.length <= 6) return '*'.repeat(s.length);
    return s.slice(0, 3) + '*'.repeat(Math.max(0, s.length - 6)) + s.slice(-3);
}

function get (url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let body = '';
            res.on('data', (c) => { body += c; });
            res.on('end', () => resolve(body));
        }).on('error', reject);
    });
}

function signedGet (path, query, ts, recv) {
    const payload = ts + key + recv + query;
    const sign = crypto.createHmac('sha256', secret).update(payload).digest('hex');
    return new Promise((resolve, reject) => {
        const req = https.request({
            host,
            path: path + (query ? '?' + query : ''),
            method: 'GET',
            headers: {
                'X-BAPI-API-KEY': key,
                'X-BAPI-TIMESTAMP': ts,
                'X-BAPI-RECV-WINDOW': recv,
                'X-BAPI-SIGN': sign,
            },
        }, (res) => {
            let body = '';
            res.on('data', (c) => { body += c; });
            res.on('end', () => {
                try { resolve(JSON.parse(body)); } catch (e) { resolve({ raw: body }); }
            });
        });
        req.on('error', reject);
        req.end();
    });
}

(async () => {
    console.log('host                :', host);
    console.log('api key             :', mask(key), '(' + key.length + ' chars)');
    console.log('secret              :', mask(secret), '(' + secret.length + ' chars)');

    // --- shape checks, the usual causes of 10004 -------------------------------
    const problems = [];
    if (key !== key.trim()) problems.push('API key has leading/trailing whitespace');
    if (secret !== secret.trim()) problems.push('API secret has leading/trailing whitespace');
    if (/\s/.test(secret)) problems.push('API secret contains whitespace or a newline');
    if (/BEGIN [A-Z ]*PRIVATE KEY/.test(secret)) {
        problems.push('secret looks like an RSA private key (PEM). Bybit RSA keys need '
            + 'RSA_SHA256 signing; Balance Bot signs with HMAC, so use a system-generated '
            + 'HMAC key instead.');
    }
    if (secret.length !== 36 && !/PRIVATE KEY/.test(secret)) {
        problems.push('HMAC secrets from Bybit are normally 36 characters - yours is '
            + secret.length + ', which often means it was truncated or double-pasted');
    }
    if (problems.length) {
        console.log('\nshape warnings:');
        for (const p of problems) console.log('  ! ' + p);
    } else {
        console.log('shape               : looks normal');
    }

    // --- clock skew ------------------------------------------------------------
    const t0 = Date.now();
    const timeResp = JSON.parse(await get('https://' + host + '/v5/market/time'));
    const serverMs = Number(timeResp.time);
    const skew = serverMs - (t0 + Date.now()) / 2;
    console.log('clock skew          :', Math.round(skew) + ' ms',
        Math.abs(skew) > 5000 ? '<-- EXCEEDS recv_window, this alone causes auth errors' : '(fine)');

    // --- the actual signed call ------------------------------------------------
    const ts = String(Date.now());
    const res = await signedGet('/v5/account/wallet-balance', 'accountType=UNIFIED', ts, '5000');
    console.log('\nsigned call         : GET /v5/account/wallet-balance');
    if (res.retCode === undefined) {
        console.log('unexpected response :', JSON.stringify(res).slice(0, 300));
        console.log('\nverdict             : no retCode in response - check the host and your network');
        process.exit(1);
    }
    console.log('retCode             :', res.retCode);
    console.log('retMsg              :', res.retMsg);

    const verdict = {
        0: 'SUCCESS - key, secret and signing are all correct on this host.',
        10003: 'Key does not exist on this host. It belongs to a different Bybit region.',
        10004: 'Signature mismatch. The key exists here, but the SECRET does not match it.',
        10005: 'Permissions missing. Key is valid; enable the needed scopes.',
        10010: 'IP not whitelisted for this key.',
        10002: 'Timestamp outside recv_window - clock problem.',
    }[res.retCode];
    console.log('\nverdict             :', verdict || 'see retMsg above');

    if (res.retCode === 10004) {
        console.log('\nMost likely, in order:');
        console.log('  1. The secret is mistyped, truncated, or has a stray space.');
        console.log('  2. The secret belongs to a different API key than the one above.');
        console.log('  3. The key is RSA-type; Balance Bot only does HMAC.');
        console.log('  Bybit only shows the secret once - if unsure, generate a new key pair.');
    }
    process.exit(res.retCode === 0 ? 0 : 1);
})().catch((e) => {
    console.error('diagnostic failed:', e.message);
    process.exit(3);
});
