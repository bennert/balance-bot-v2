# BALANCE BOT

Automate your crypto balancing - for free

Please visit [hodlerhacks.com](https://www.hodlerhacks.com) for more information.

## Bybit Indonesia (api.bybit.id)

Bybit Indonesia is supported natively by ccxt as of 4.5.82 (see [ccxt/ccxt#30501](https://github.com/ccxt/ccxt/pull/30501)),
both in REST (`ccxt.bybitid`) and WebSocket (`ccxt.pro.bybitid`). It runs the same Bybit v5 API on
`api.bybit.id` / `stream.bybit.id`, with its own listing universe, accounts and API keys.

Just pick **Bybitid** from the exchange list when configuring a bot. No `NODE_OPTIONS`, launcher
script or runtime shim is needed; start the bot with `node bb.js` as usual.
