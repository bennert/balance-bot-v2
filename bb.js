function _0xdb9b(){const _0x414546=['(((.+)+)+)+$','3963050rZvMCn','717388tEmckZ','Error:\x20Invalid\x20argument\x20','410796NcohYU','-----------------------------------------------------------------------------------','split','toString','kill','host','bb/','test','slice','existsSync','push','fork','message','inherit','8AxAQjH','child_process','error','exit','log','1316xITkpJ','--host','940953XcfkOs','apply','2335284sWDnxZ','\x20or\x20above\x20is\x20required','restore','158xMEMaq','port',',\x20must\x20be\x20a\x204\x20digit\x20number','user','Balance\x20Bot\x20>\x20','332334NtWtVE','versions','Unexpected\x20error:','keys','The\x20installed\x20Node.js\x20version\x20is\x20','--port','argv','bm.js','ipc'];_0xdb9b=function(){return _0x414546;};return _0xdb9b();}const _0x546c8=_0x38d1;(function(_0x122fc9,_0x1af98a){const _0x14c30e=_0x38d1,_0x289967=_0x122fc9();while(!![]){try{const _0x3f4230=-parseInt(_0x14c30e(0x1d8))/0x1*(-parseInt(_0x14c30e(0x1d1))/0x2)+parseInt(_0x14c30e(0x1d3))/0x3+parseInt(_0x14c30e(0x1d5))/0x4+-parseInt(_0x14c30e(0x1bb))/0x5+parseInt(_0x14c30e(0x1be))/0x6+parseInt(_0x14c30e(0x1bc))/0x7+-parseInt(_0x14c30e(0x1cc))/0x8*(-parseInt(_0x14c30e(0x1b1))/0x9);if(_0x3f4230===_0x1af98a)break;else _0x289967['push'](_0x289967['shift']());}catch(_0x2b3859){_0x289967['push'](_0x289967['shift']());}}}(_0xdb9b,0x65bbe));const fs=require('fs'),argv=require('yargs/yargs')(process['argv'][_0x546c8(0x1c6)](0x2))[_0x546c8(0x1b7)],childProcess=require(_0x546c8(0x1cd)),nodeversion=process[_0x546c8(0x1b2)]['node'],minversion=0x10;nodeversion[_0x546c8(0x1c0)]('.')[0x0]<minversion&&(console[_0x546c8(0x1d0)](),console['log'](_0x546c8(0x1bf)),console[_0x546c8(0x1d0)](_0x546c8(0x1b5)+nodeversion+',\x20but\x20version\x20'+minversion+_0x546c8(0x1d6)),console[_0x546c8(0x1d0)]('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console['log'](_0x546c8(0x1bf)),console['log'](),process['exit'](0x1));if(argv['port']){const pattern=/^[0-9]{2,4}$/;!pattern[_0x546c8(0x1c5)](argv[_0x546c8(0x1d9)])&&(console[_0x546c8(0x1d0)](_0x546c8(0x1bd)+argv[_0x546c8(0x1d9)]+_0x546c8(0x1ae)),process[_0x546c8(0x1cf)](0x1));}let args=[];argv[_0x546c8(0x1d9)]&&(args[_0x546c8(0x1c8)](_0x546c8(0x1b6)),args['push'](argv[_0x546c8(0x1d9)]));argv[_0x546c8(0x1c3)]&&(args[_0x546c8(0x1c8)](_0x546c8(0x1d2)),args[_0x546c8(0x1c8)](argv[_0x546c8(0x1c3)]));argv[_0x546c8(0x1af)]&&(args[_0x546c8(0x1c8)]('--user'),args[_0x546c8(0x1c8)](argv['user']));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x546c8(0x1c8)]('-d');let bmpath=_0x546c8(0x1c4);const bmfile=_0x546c8(0x1b8),updatefile='install.js';!fs[_0x546c8(0x1c7)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x3f3e9a=_0x546c8,_0x14e6a6=function(){let _0xb41cbe=!![];return function(_0x5b30b1,_0x25b9d4){const _0x560728=_0xb41cbe?function(){const _0x453abd=_0x38d1;if(_0x25b9d4){const _0x3ab42d=_0x25b9d4[_0x453abd(0x1d4)](_0x5b30b1,arguments);return _0x25b9d4=null,_0x3ab42d;}}:function(){};return _0xb41cbe=![],_0x560728;};}(),_0x2d0acf=_0x14e6a6(this,function(){const _0x44d4a0=_0x38d1;return _0x2d0acf[_0x44d4a0(0x1c1)]()['search'](_0x44d4a0(0x1ba))['toString']()['constructor'](_0x2d0acf)['search'](_0x44d4a0(0x1ba));});_0x2d0acf();let _0x46d5db=![];const _0x551552={'cwd':'','stdio':[_0x3f3e9a(0x1cb),_0x3f3e9a(0x1cb),_0x3f3e9a(0x1cb),_0x3f3e9a(0x1b9)]};pid1=childProcess[_0x3f3e9a(0x1c9)](bmpath+bmfile,args,_0x551552),pid1['on'](_0x3f3e9a(0x1ca),_0x456ce0=>{const _0x477b3d=_0x3f3e9a;switch(Object[_0x477b3d(0x1b4)](_0x456ce0)[0x0]){case'update':startUpdate('2');break;case'reinstall':startUpdate('3');break;case _0x477b3d(0x1d7):handleRestore();break;}}),pid1['on'](_0x3f3e9a(0x1ce),function(_0xb43790){const _0x1a7791=_0x3f3e9a;if(_0x46d5db)return;_0x46d5db=!![],logging(_0x1a7791(0x1b3),_0xb43790);}),pid1['on'](_0x3f3e9a(0x1cf),function(_0x2bd0e1){if(_0x46d5db)return;_0x46d5db=!![];if(!updating)startBM();});}function _0x38d1(_0x294ecb,_0x59db6a){const _0x13b3a3=_0xdb9b();return _0x38d1=function(_0x5b2bca,_0x52c737){_0x5b2bca=_0x5b2bca-0x1ae;let _0xdb9bd2=_0x13b3a3[_0x5b2bca];return _0xdb9bd2;},_0x38d1(_0x294ecb,_0x59db6a);}function startUpdate(_0x4140d7){const _0xd806bf=_0x546c8;updating=!![];if(pid1)pid1[_0xd806bf(0x1c2)]();let _0x3ecb30=![];const _0xd2e950={'cwd':'','stdio':[_0xd806bf(0x1cb),_0xd806bf(0x1cb),_0xd806bf(0x1cb),_0xd806bf(0x1b9)]};let _0x3b1e0f=[];if(staging)_0x3b1e0f[_0xd806bf(0x1c8)](_0x4140d7+'s');else _0x3b1e0f[_0xd806bf(0x1c8)](_0x4140d7);pid2=childProcess[_0xd806bf(0x1c9)](updatefile,_0x3b1e0f,_0xd2e950),pid2['on'](_0xd806bf(0x1ce),function(_0x3ba5c2){updating=![];if(_0x3ecb30)return;_0x3ecb30=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x3ba5c2);}),pid2['on'](_0xd806bf(0x1cf),function(_0x32454f){updating=![];if(_0x3ecb30)return;_0x3ecb30=!![],startBM();});}function handleRestore(){const _0x297fab=_0x546c8;if(pid1)pid1[_0x297fab(0x1c2)]();}function logging(_0x221eb5){const _0x4971f5=_0x546c8;console['log'](_0x4971f5(0x1b0)+_0x221eb5);}