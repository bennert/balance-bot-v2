function _0x5d38(){const _0x3d5098=['test','Balance\x20Bot\x20>\x20','kill','bb/','yargs/yargs','Error:\x20Invalid\x20argument\x20','17517qoNliL','exit','toString','356468VqJvLz','keys','--user','restore','8wvggzu','fork','ipc','(((.+)+)+)+$','bm.js','slice','inherit','apply','host','--host','1711323jjIAJu','138BTFxTt','--port','search',',\x20must\x20be\x20a\x204\x20digit\x20number','50nIefbt','2744920PMHjbM','argv','Unexpected\x20error:','port','install.js','push','100774UyNzTC','existsSync','4371860byQqhS','user','517060iypHtr'];_0x5d38=function(){return _0x3d5098;};return _0x5d38();}const _0x27162d=_0x319f;function _0x319f(_0x19f2f9,_0x3f4350){const _0x1591b8=_0x5d38();return _0x319f=function(_0x2f186e,_0x48ba4e){_0x2f186e=_0x2f186e-0xa9;let _0x5d382b=_0x1591b8[_0x2f186e];return _0x5d382b;},_0x319f(_0x19f2f9,_0x3f4350);}(function(_0x10ded1,_0x2cca40){const _0x40eb36=_0x319f,_0x14db0d=_0x10ded1();while(!![]){try{const _0x1e4c1c=parseInt(_0x40eb36(0xc9))/0x1+parseInt(_0x40eb36(0xc2))/0x2*(parseInt(_0x40eb36(0xac))/0x3)+-parseInt(_0x40eb36(0xcb))/0x4+parseInt(_0x40eb36(0xcd))/0x5+-parseInt(_0x40eb36(0xbe))/0x6*(-parseInt(_0x40eb36(0xaf))/0x7)+-parseInt(_0x40eb36(0xb3))/0x8*(-parseInt(_0x40eb36(0xbd))/0x9)+parseInt(_0x40eb36(0xc3))/0xa;if(_0x1e4c1c===_0x2cca40)break;else _0x14db0d['push'](_0x14db0d['shift']());}catch(_0x440cbc){_0x14db0d['push'](_0x14db0d['shift']());}}}(_0x5d38,0xda09f));const fs=require('fs'),argv=require(_0x27162d(0xaa))(process[_0x27162d(0xc4)][_0x27162d(0xb8)](0x2))[_0x27162d(0xc4)],childProcess=require('child_process');if(argv['port']){const pattern=/^[0-9]{2,4}$/;!pattern[_0x27162d(0xce)](argv[_0x27162d(0xc6)])&&(console['log'](_0x27162d(0xab)+argv['port']+_0x27162d(0xc1)),process[_0x27162d(0xad)](0x1));}let args=[];argv[_0x27162d(0xc6)]&&(args[_0x27162d(0xc8)](_0x27162d(0xbf)),args[_0x27162d(0xc8)](argv[_0x27162d(0xc6)]));argv[_0x27162d(0xbb)]&&(args[_0x27162d(0xc8)](_0x27162d(0xbc)),args[_0x27162d(0xc8)](argv['host']));argv[_0x27162d(0xcc)]&&(args['push'](_0x27162d(0xb1)),args['push'](argv['user']));let bmpath=_0x27162d(0xa9);const bmfile=_0x27162d(0xb7),updatefile=_0x27162d(0xc7);!fs[_0x27162d(0xca)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x2da5f1=_0x27162d,_0x1972ce=function(){let _0x34ea31=!![];return function(_0xd47050,_0x8b6163){const _0xf0032b=_0x34ea31?function(){const _0x46253b=_0x319f;if(_0x8b6163){const _0x36b03f=_0x8b6163[_0x46253b(0xba)](_0xd47050,arguments);return _0x8b6163=null,_0x36b03f;}}:function(){};return _0x34ea31=![],_0xf0032b;};}(),_0x19e96b=_0x1972ce(this,function(){const _0x4d7d9f=_0x319f;return _0x19e96b['toString']()[_0x4d7d9f(0xc0)](_0x4d7d9f(0xb6))[_0x4d7d9f(0xae)]()['constructor'](_0x19e96b)['search'](_0x4d7d9f(0xb6));});_0x19e96b();let _0x5ac32f=![];const _0xba024f={'cwd':'','stdio':[_0x2da5f1(0xb9),_0x2da5f1(0xb9),'inherit',_0x2da5f1(0xb5)]};pid1=childProcess[_0x2da5f1(0xb4)](bmpath+bmfile,args,_0xba024f),pid1['on']('message',_0x4c4d17=>{const _0x27d242=_0x2da5f1;switch(Object[_0x27d242(0xb0)](_0x4c4d17)[0x0]){case'update':startUpdate();break;case _0x27d242(0xb2):handleRestore();break;}}),pid1['on']('error',function(_0x3924e5){const _0x22206e=_0x2da5f1;if(_0x5ac32f)return;_0x5ac32f=!![],logging(_0x22206e(0xc5),_0x3924e5);}),pid1['on'](_0x2da5f1(0xad),function(_0x980171){if(_0x5ac32f)return;_0x5ac32f=!![];if(!updating)startBM();});}function startUpdate(){const _0x48aeca=_0x27162d;updating=!![];if(pid1)pid1[_0x48aeca(0xd0)]();let _0x40a0a8=![];const _0x19cdd2={'cwd':'','stdio':[_0x48aeca(0xb9),'inherit',_0x48aeca(0xb9),_0x48aeca(0xb5)]};let _0x51c041=[];if(argv['s'])_0x51c041[_0x48aeca(0xc8)]('2s');else _0x51c041[_0x48aeca(0xc8)]('2');pid2=childProcess[_0x48aeca(0xb4)](updatefile,_0x51c041,_0x19cdd2),pid2['on']('error',function(_0x2b58d7){updating=![];if(_0x40a0a8)return;_0x40a0a8=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x2b58d7);}),pid2['on']('exit',function(_0x80d6e8){updating=![];if(_0x40a0a8)return;_0x40a0a8=!![],startBM();});}function handleRestore(){const _0x4c4702=_0x27162d;if(pid1)pid1[_0x4c4702(0xd0)]();}function logging(_0x476b25){const _0x115280=_0x27162d;console['log'](_0x115280(0xcf)+_0x476b25);}