const _0x191b4b=_0xaecd;(function(_0x399777,_0x3db7d9){const _0x44aa7c=_0xaecd,_0x3bd7c2=_0x399777();while(!![]){try{const _0x349c51=-parseInt(_0x44aa7c(0x134))/0x1+parseInt(_0x44aa7c(0x112))/0x2+parseInt(_0x44aa7c(0x11c))/0x3+parseInt(_0x44aa7c(0x125))/0x4+-parseInt(_0x44aa7c(0x121))/0x5+-parseInt(_0x44aa7c(0x133))/0x6+parseInt(_0x44aa7c(0x128))/0x7;if(_0x349c51===_0x3db7d9)break;else _0x3bd7c2['push'](_0x3bd7c2['shift']());}catch(_0x3a4052){_0x3bd7c2['push'](_0x3bd7c2['shift']());}}}(_0x4777,0x3ab67));const fs=require('fs'),argv=require(_0x191b4b(0x11a))(process[_0x191b4b(0x12f)][_0x191b4b(0x126)](0x2))['argv'],childProcess=require(_0x191b4b(0x115));if(argv[_0x191b4b(0x132)]){const pattern=/^[0-9]{2,4}$/;if(!pattern[_0x191b4b(0x117)](argv['port']))return console[_0x191b4b(0x130)](_0x191b4b(0x12d)+argv[_0x191b4b(0x132)]+_0x191b4b(0x116)),process[_0x191b4b(0x113)](0x1);}let args=[];argv['port']&&(args['push']('--port'),args[_0x191b4b(0x118)](argv[_0x191b4b(0x132)]));argv[_0x191b4b(0x127)]&&(args['push'](_0x191b4b(0x124)),args[_0x191b4b(0x118)](argv['host']));argv[_0x191b4b(0x11d)]&&(args['push']('--user'),args[_0x191b4b(0x118)](argv[_0x191b4b(0x11d)]));let bmpath=_0x191b4b(0x11e);const bmfile=_0x191b4b(0x120),updatefile=_0x191b4b(0x12b);function _0xaecd(_0x1fad62,_0x4919e4){const _0x227379=_0x4777();return _0xaecd=function(_0xfde5fa,_0x3f42f6){_0xfde5fa=_0xfde5fa-0x111;let _0x477700=_0x227379[_0xfde5fa];return _0x477700;},_0xaecd(_0x1fad62,_0x4919e4);}!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function _0x4777(){const _0x586c21=['port','2372004aLEmsJ','404509fAhGco','search','563300uCQDkk','exit','error','child_process',',\x20must\x20be\x20a\x204\x20digit\x20number','test','push','Balance\x20Bot\x20>\x20','yargs/yargs','apply','1428753ScpLSl','user','bb/','message','bm.js','607810DArwZm','constructor','ipc','--host','342980otTUdH','slice','host','2227722UNuaue','fork','kill','install.js','update','Error:\x20Invalid\x20argument\x20','toString','argv','log','inherit'];_0x4777=function(){return _0x586c21;};return _0x4777();}function startBM(){const _0x25e7e4=_0x191b4b,_0x4e2778=function(){let _0x50ffee=!![];return function(_0x28d051,_0x348014){const _0x989fa4=_0x50ffee?function(){const _0x109c8d=_0xaecd;if(_0x348014){const _0xe81bcc=_0x348014[_0x109c8d(0x11b)](_0x28d051,arguments);return _0x348014=null,_0xe81bcc;}}:function(){};return _0x50ffee=![],_0x989fa4;};}(),_0x18dfa7=_0x4e2778(this,function(){const _0x1b0295=_0xaecd;return _0x18dfa7[_0x1b0295(0x12e)]()[_0x1b0295(0x111)]('(((.+)+)+)+$')[_0x1b0295(0x12e)]()[_0x1b0295(0x122)](_0x18dfa7)[_0x1b0295(0x111)]('(((.+)+)+)+$');});_0x18dfa7();let _0x1c88b3=![];const _0x482c60={'cwd':'','stdio':[_0x25e7e4(0x131),_0x25e7e4(0x131),_0x25e7e4(0x131),'ipc']};pid1=childProcess[_0x25e7e4(0x129)](bmpath+bmfile,args,_0x482c60),pid1['on'](_0x25e7e4(0x11f),_0x4544d9=>{const _0x21fd4c=_0x25e7e4;switch(Object['keys'](_0x4544d9)[0x0]){case _0x21fd4c(0x12c):startUpdate();break;}}),pid1['on'](_0x25e7e4(0x114),function(_0x5b8554){if(_0x1c88b3)return;_0x1c88b3=!![],logging('Unexpected\x20error:',_0x5b8554);}),pid1['on'](_0x25e7e4(0x113),function(_0x237fba){if(_0x1c88b3)return;_0x1c88b3=!![];if(!updating)startBM();});}function startUpdate(){const _0x7ae035=_0x191b4b;updating=!![];if(pid1)pid1[_0x7ae035(0x12a)]();let _0x3db197=![];const _0x55b546={'cwd':'','stdio':['inherit',_0x7ae035(0x131),_0x7ae035(0x131),_0x7ae035(0x123)]};let _0x1b6220=[];if(argv['s'])_0x1b6220['push']('2s');else _0x1b6220[_0x7ae035(0x118)]('2');pid2=childProcess[_0x7ae035(0x129)](updatefile,_0x1b6220,_0x55b546),pid2['on'](_0x7ae035(0x114),function(_0x46c63a){updating=![];if(_0x3db197)return;_0x3db197=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x46c63a);}),pid2['on']('exit',function(_0xd58176){updating=![];if(_0x3db197)return;_0x3db197=!![],startBM();});}function logging(_0x42f139){const _0x140b1d=_0x191b4b;console['log'](_0x140b1d(0x119)+_0x42f139);}