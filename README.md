# BALANCE BOT

Automate your crypto balancing - for free

Please visit [hodlerhacks.com](https://www.hodlerhacks.com) for more information.

## Bybit Indonesia (api.bybit.id)

Bybit Indonesia runs the same Bybit v5 API on `api.bybit.id` / `stream.bybit.id`, but with
its own listing universe and its own accounts and API keys. ccxt 4.5.71 ships `bybit` and
`bybiteu`, but no `bybitid`, so `bybit-id-shim.js` registers it in ccxt at runtime.

### Two modes

- `BYBIT_HOSTNAME=bybit.id` — repoints the existing **Bybit** exchange at the regional
  endpoint. Its id and name stay `bybit` / `Bybit`, so `bot.js`'s hardcoded
  `config.exchange == 'Bybit'` check keeps working and the workaround for Bybit's
  10-symbol `watchTickers` limit still triggers. Recommended.
- `BYBIT_ID_REGISTER=1` — registers a separate **Bybitid** ("Bybit Indonesia") exchange
  next to global Bybit, so both can be configured side by side. The 10-symbol workaround
  matches on the literal string `'Bybit'` and does **not** trigger for this id.

The two modes are mutually exclusive; set `BYBIT_SHIM_ALLOW_BOTH=1` to override that guard.

### Starting the bot

Use `bb-bybitid.js` instead of `bb.js`. It loads the shim and sets
`NODE_OPTIONS=--require <shim>` so every child process inherits it — Balance Bot is
multi-process (`bb.js` starts `bm.js`, which starts `bot.js` as a separate node process),
and `bot.js` is the one that actually talks to the exchange.

PowerShell:

```powershell
$env:BYBIT_HOSTNAME="bybit.id"; node bb-bybitid.js

# or, as a separate exchange:
$env:BYBIT_HOSTNAME=$null; $env:BYBIT_ID_REGISTER="1"; node bb-bybitid.js
```

bash:

```bash
BYBIT_HOSTNAME=bybit.id node bb-bybitid.js

# or, as a separate exchange:
BYBIT_ID_REGISTER=1 node bb-bybitid.js
```

### Verifying

```bash
node verify.js
```

Runs 26 checks — registration, URL resolution, mode guards, multi-process propagation, and
live REST plus WebSocket calls against bybit.id. Expected output: `ALL CHECKS PASSED`.

### Diagnosing auth errors

```bash
BYBIT_KEY=... BYBIT_SECRET=... node diag-auth.js
```

Makes one signed request outside of Balance Bot and reports key/secret shape problems,
clock skew, and the Bybit `retCode` (e.g. `10003` wrong region, `10004` signature
mismatch). The secret is never printed. Set `BYBIT_DIAG_HOST=bybit.com` to test against
global Bybit.

This shim is temporary, and can be removed once `bybitid` is supported in ccxt upstream.