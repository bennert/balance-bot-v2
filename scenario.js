'use strict';
// Child-process probe: loads the shim exactly as bb-bybitid.js does (env-driven
// autoinstall), then reports what bot.js would see. Prints one JSON line.
require('./bybit-id-shim.js');
const ccxt = require('ccxt');

const name = process.env.SCENARIO_EXCHANGE || 'bybit';
const ex = new ccxt.pro[name.toLowerCase()]({ apiKey: 'x', secret: 'y', options: { defaultType: 'spot' } });
console.log(JSON.stringify({
    id: ex.id,
    name: ex.name,
    hostname: ex.hostname,
    rest: ex.implodeHostname(ex.urls.api.public),
    ws: ex.implodeHostname(ex.urls.api.ws.public.spot),
}));
