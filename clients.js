function _0x2df6(){const _0x29a852=['starting','55xqFcXl','bot','disconnected','4745NzVXgD','(((.+)+)+)+$','22290EjMWxn','filter','constructor','40XEEQQE','11694xGPaXJ','server','exports','toString','4332951pnNjMc','uuid','push','3800lUYQAF','9398840NDNVSq','forEach','findIndex','64284OhKFaT','15768nkNPPR','find','1580264aujIVX'];_0x2df6=function(){return _0x29a852;};return _0x2df6();}const _0x48f4bf=_0x36ac;function _0x36ac(_0x1d88a5,_0x329461){const _0xdaf75=_0x2df6();return _0x36ac=function(_0xdfac28,_0x3c89d3){_0xdfac28=_0xdfac28-0x19f;let _0x2df647=_0xdaf75[_0xdfac28];return _0x2df647;},_0x36ac(_0x1d88a5,_0x329461);}(function(_0x4e2a30,_0x1e2985){const _0x536c6a=_0x36ac,_0x5309b7=_0x4e2a30();while(!![]){try{const _0x3b992c=parseInt(_0x536c6a(0x1a7))/0x1*(parseInt(_0x536c6a(0x1a2))/0x2)+parseInt(_0x536c6a(0x1ac))/0x3*(-parseInt(_0x536c6a(0x1af))/0x4)+parseInt(_0x536c6a(0x1aa))/0x5*(-parseInt(_0x536c6a(0x1b0))/0x6)+-parseInt(_0x536c6a(0x1b4))/0x7+parseInt(_0x536c6a(0x1a5))/0x8+-parseInt(_0x536c6a(0x1a3))/0x9*(-parseInt(_0x536c6a(0x1b7))/0xa)+parseInt(_0x536c6a(0x19f))/0xb;if(_0x3b992c===_0x1e2985)break;else _0x5309b7['push'](_0x5309b7['shift']());}catch(_0x5e282a){_0x5309b7['push'](_0x5309b7['shift']());}}}(_0x2df6,0xe6239));const _0x3c89d3=function(){let _0x1447bb=!![];return function(_0x27f8ea,_0x5354df){const _0x42a9b5=_0x1447bb?function(){if(_0x5354df){const _0xe7af47=_0x5354df['apply'](_0x27f8ea,arguments);return _0x5354df=null,_0xe7af47;}}:function(){};return _0x1447bb=![],_0x42a9b5;};}(),_0xdfac28=_0x3c89d3(this,function(){const _0x2251eb=_0x36ac;return _0xdfac28[_0x2251eb(0x1b3)]()['search']('(((.+)+)+)+$')['toString']()[_0x2251eb(0x1ae)](_0xdfac28)['search'](_0x2251eb(0x1ab));});_0xdfac28();const clients=[],addClient=(_0x18c2e8,_0x4168cd,_0x1bbaca)=>{const _0x26829e=_0x36ac;let _0x4c701c;const _0x197f64=existsClient(_0x4168cd,_0x1bbaca);return _0x197f64?_0x4c701c=updateClient(_0x197f64['id'],{'id':_0x18c2e8,'server':'connected'}):(_0x4c701c={'id':_0x18c2e8,'uuid':_0x4168cd,'bot':_0x1bbaca,'server':_0x26829e(0x1a6)},clients[_0x26829e(0x1b6)](_0x4c701c)),_0x4c701c;},updateClient=(_0x4867f3,_0xe43d10)=>{const _0x3acf2f=_0x36ac;let _0x20aa3b=clients[_0x3acf2f(0x1a1)](_0x4cbb00=>_0x4cbb00['id']==_0x4867f3);return _0x20aa3b!=-0x1&&(clients[_0x20aa3b]={...clients[_0x20aa3b],..._0xe43d10}),clients[_0x20aa3b];},existsClient=(_0x42d026,_0x41f1e4)=>{const _0xc48ffa=_0x36ac;let _0x28f799=![];return clients[_0xc48ffa(0x1a0)](_0x56e4da=>{const _0x539232=_0xc48ffa;_0x56e4da[_0x539232(0x1b5)]===_0x42d026&&_0x56e4da[_0x539232(0x1a8)]===_0x41f1e4&&(_0x28f799=_0x56e4da);}),_0x28f799;},removeClient=_0x519413=>{const _0x47c61d=_0x36ac;let _0x36cbb9=clients[_0x47c61d(0x1a4)](_0x5cb3c4=>_0x5cb3c4['id']===_0x519413);if(_0x36cbb9)return _0x36cbb9[_0x47c61d(0x1b1)]=_0x47c61d(0x1a9),clients;},getClient=_0x1b6795=>{const _0x5ea4a2=_0x36ac;return clients[_0x5ea4a2(0x1a4)](_0x4b41b8=>_0x4b41b8['id']===_0x1b6795&&_0x4b41b8[_0x5ea4a2(0x1b1)]!==_0x5ea4a2(0x1a9));},getAllClients=(_0x643645=![])=>{if(_0x643645)return clients;else return clients['filter'](_0x90b62e=>_0x90b62e['server']!=='disconnected');},getClientsWithBotID=_0x4cbc31=>{const _0x23c3f8=_0x36ac;return clients[_0x23c3f8(0x1ad)](_0x4ffb2e=>_0x4ffb2e[_0x23c3f8(0x1a8)]===_0x4cbc31&&_0x4ffb2e[_0x23c3f8(0x1b1)]!=='disconnected');},getClientsWithUuid=_0x198329=>{const _0x50a580=_0x36ac;return clients[_0x50a580(0x1ad)](_0x402399=>_0x402399[_0x50a580(0x1b5)]===_0x198329&&_0x402399['server']!=='disconnected');};module[_0x48f4bf(0x1b2)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};