const _0x2ac32a=_0x55a7;(function(_0x5a0a9c,_0x33c9a4){const _0x4dfa4a=_0x55a7,_0x5b26eb=_0x5a0a9c();while(!![]){try{const _0x3cf693=-parseInt(_0x4dfa4a(0x1d9))/0x1+parseInt(_0x4dfa4a(0x1e1))/0x2+-parseInt(_0x4dfa4a(0x1d0))/0x3*(-parseInt(_0x4dfa4a(0x1d1))/0x4)+-parseInt(_0x4dfa4a(0x1f0))/0x5+parseInt(_0x4dfa4a(0x1f6))/0x6+-parseInt(_0x4dfa4a(0x1fe))/0x7*(parseInt(_0x4dfa4a(0x1d8))/0x8)+-parseInt(_0x4dfa4a(0x1fc))/0x9*(parseInt(_0x4dfa4a(0x1d7))/0xa);if(_0x3cf693===_0x33c9a4)break;else _0x5b26eb['push'](_0x5b26eb['shift']());}catch(_0xb3e358){_0x5b26eb['push'](_0x5b26eb['shift']());}}}(_0x3997,0x4ee58));function _0x3997(){const _0x519a6b=['fork','2634310zYkDFe','child_process','toString','Balance\x20Bot\x20>\x20','--host','reinstall','3581772PLozgo','Error:\x20Invalid\x20argument\x20','inherit','exit','log','keys','1446867GyWIMN','yargs/yargs','2769270yJDzRO','265647XTSxlA','20vIiVLI','--port','port','slice','existsSync',',\x20but\x20version\x20','20yTLBzl','8WUiJjU','65335FGeEkQ','kill','message','host','argv','apply','bb/','--user','1185572TruNYl','ipc','-----------------------------------------------------------------------------------','error',',\x20must\x20be\x20a\x204\x20digit\x20number','push','(((.+)+)+)+$','bm.js','\x20or\x20above\x20is\x20required','constructor','The\x20installed\x20Node.js\x20version\x20is\x20','user','search','node'];_0x3997=function(){return _0x519a6b;};return _0x3997();}const fs=require('fs'),argv=require(_0x2ac32a(0x1fd))(process[_0x2ac32a(0x1dd)][_0x2ac32a(0x1d4)](0x2))[_0x2ac32a(0x1dd)],childProcess=require(_0x2ac32a(0x1f1)),nodeversion=process['versions'][_0x2ac32a(0x1ee)],minversion=0xe;nodeversion['split']('.')[0x0]<minversion&&(console[_0x2ac32a(0x1fa)](),console[_0x2ac32a(0x1fa)](_0x2ac32a(0x1e3)),console[_0x2ac32a(0x1fa)](_0x2ac32a(0x1eb)+nodeversion+_0x2ac32a(0x1d6)+minversion+_0x2ac32a(0x1e9)),console['log']('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console['log'](_0x2ac32a(0x1e3)),console['log'](),process['exit'](0x1));if(argv[_0x2ac32a(0x1d3)]){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv[_0x2ac32a(0x1d3)])&&(console[_0x2ac32a(0x1fa)](_0x2ac32a(0x1f7)+argv['port']+_0x2ac32a(0x1e5)),process['exit'](0x1));}let args=[];argv[_0x2ac32a(0x1d3)]&&(args[_0x2ac32a(0x1e6)](_0x2ac32a(0x1d2)),args['push'](argv[_0x2ac32a(0x1d3)]));argv[_0x2ac32a(0x1dc)]&&(args[_0x2ac32a(0x1e6)](_0x2ac32a(0x1f4)),args['push'](argv['host']));function _0x55a7(_0x5193b9,_0x265ad2){const _0x1bc768=_0x3997();return _0x55a7=function(_0xf83ed0,_0x50cda9){_0xf83ed0=_0xf83ed0-0x1d0;let _0x39972d=_0x1bc768[_0xf83ed0];return _0x39972d;},_0x55a7(_0x5193b9,_0x265ad2);}argv[_0x2ac32a(0x1ec)]&&(args[_0x2ac32a(0x1e6)](_0x2ac32a(0x1e0)),args[_0x2ac32a(0x1e6)](argv[_0x2ac32a(0x1ec)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x2ac32a(0x1e6)]('-d');let bmpath=_0x2ac32a(0x1df);const bmfile=_0x2ac32a(0x1e8),updatefile='install.js';!fs[_0x2ac32a(0x1d5)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0xe9e8d3=_0x2ac32a,_0x1c58f8=function(){let _0x4a39f6=!![];return function(_0x11b892,_0x351eac){const _0x3bb630=_0x4a39f6?function(){const _0x53227b=_0x55a7;if(_0x351eac){const _0x196cc9=_0x351eac[_0x53227b(0x1de)](_0x11b892,arguments);return _0x351eac=null,_0x196cc9;}}:function(){};return _0x4a39f6=![],_0x3bb630;};}(),_0x14699e=_0x1c58f8(this,function(){const _0x262a51=_0x55a7;return _0x14699e[_0x262a51(0x1f2)]()[_0x262a51(0x1ed)](_0x262a51(0x1e7))[_0x262a51(0x1f2)]()[_0x262a51(0x1ea)](_0x14699e)['search'](_0x262a51(0x1e7));});_0x14699e();let _0x42ec6a=![];const _0x381c29={'cwd':'','stdio':['inherit',_0xe9e8d3(0x1f8),_0xe9e8d3(0x1f8),'ipc']};pid1=childProcess[_0xe9e8d3(0x1ef)](bmpath+bmfile,args,_0x381c29),pid1['on'](_0xe9e8d3(0x1db),_0x27d4e1=>{const _0x1ff166=_0xe9e8d3;switch(Object[_0x1ff166(0x1fb)](_0x27d4e1)[0x0]){case'update':startUpdate('2');break;case _0x1ff166(0x1f5):startUpdate('3');break;case'restore':handleRestore();break;}}),pid1['on'](_0xe9e8d3(0x1e4),function(_0x418046){if(_0x42ec6a)return;_0x42ec6a=!![],logging('Unexpected\x20error:',_0x418046);}),pid1['on']('exit',function(_0x215f8e){if(_0x42ec6a)return;_0x42ec6a=!![];if(!updating)startBM();});}function startUpdate(_0x288682){const _0x333188=_0x2ac32a;updating=!![];if(pid1)pid1[_0x333188(0x1da)]();let _0x19e413=![];const _0x1146cb={'cwd':'','stdio':[_0x333188(0x1f8),_0x333188(0x1f8),_0x333188(0x1f8),_0x333188(0x1e2)]};let _0x158a1f=[];if(staging)_0x158a1f[_0x333188(0x1e6)](_0x288682+'s');else _0x158a1f[_0x333188(0x1e6)](_0x288682);pid2=childProcess[_0x333188(0x1ef)](updatefile,_0x158a1f,_0x1146cb),pid2['on'](_0x333188(0x1e4),function(_0x56282b){updating=![];if(_0x19e413)return;_0x19e413=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x56282b);}),pid2['on'](_0x333188(0x1f9),function(_0x14aef8){updating=![];if(_0x19e413)return;_0x19e413=!![],startBM();});}function handleRestore(){if(pid1)pid1['kill']();}function logging(_0x10fc82){const _0x481eef=_0x2ac32a;console['log'](_0x481eef(0x1f3)+_0x10fc82);}