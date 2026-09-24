# BALANCE BOT

Automate your crypto balancing - for free

Please visit [hodlerhacks.com](https://www.hodlerhacks.com) for more information.

## Bybit Indonesia (api.bybit.id)

Bybit Indonesia is supported natively by ccxt as of 4.5.82 (see [ccxt/ccxt#30501](https://github.com/ccxt/ccxt/pull/30501)),
both in REST (`ccxt.bybitid`) and WebSocket (`ccxt.pro.bybitid`). It runs the same Bybit v5 API on
`api.bybit.id` / `stream.bybit.id`, with its own listing universe, accounts and API keys.

Just pick **Bybitid** from the exchange list when configuring a bot. No `NODE_OPTIONS`, launcher
script or runtime shim is needed; start the bot with `node bb.js` as usual.

### False "clock out of sync" warnings on a high-latency link

Bybit rejects a signed request that arrives more than `recv_window` milliseconds after its
timestamp was generated (`retCode 10002`). ccxt defaults to 5000 ms. `api.bybit.id` is roughly
190 ms away from Europe and its heavier authenticated endpoints (such as
`/v5/asset/coin/query-info`) can take seconds, so a slow request blows through that window.
Balance Bot reports this as:

```
Your machine's internal clock may be out of sync (see: hodlerhacks.com/fix/3)
Failed to connect to the exchange - bot not started
```

The clock is not actually wrong — check it before assuming so. If the offset against the
exchange is small (well under a second) but the warning keeps coming back, it is latency, not
the clock.

`bb-recvwindow.js` starts the bot with a wider window. It patches the ccxt defaults and sets
`NODE_OPTIONS=--require` so the bot's child processes (`bm.js` → `bot.js`) inherit it:

```bash
node bb-recvwindow.js                  # 20000 ms
BB_RECV_WINDOW=30000 node bb-recvwindow.js
```

Plain `node bb.js` is unaffected. Note that Bybit also rejects timestamps more than ~1 s in the
future, so the bot's `timeshift` setting cannot solve this.
