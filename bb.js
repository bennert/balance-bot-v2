const _0x4ef406=_0x4b23;(function(_0x28c7c7,_0x32a219){const _0x2219ca=_0x4b23,_0x530840=_0x28c7c7();while(!![]){try{const _0x604bbc=-parseInt(_0x2219ca(0xa1))/0x1+-parseInt(_0x2219ca(0xa0))/0x2+-parseInt(_0x2219ca(0xb1))/0x3*(-parseInt(_0x2219ca(0xa5))/0x4)+parseInt(_0x2219ca(0xb3))/0x5+parseInt(_0x2219ca(0x98))/0x6+-parseInt(_0x2219ca(0x95))/0x7*(-parseInt(_0x2219ca(0xb0))/0x8)+-parseInt(_0x2219ca(0xa4))/0x9;if(_0x604bbc===_0x32a219)break;else _0x530840['push'](_0x530840['shift']());}catch(_0x9d44f0){_0x530840['push'](_0x530840['shift']());}}}(_0x36a6,0x1ace7));const fs=require('fs'),argv=require('yargs/yargs')(process['argv'][_0x4ef406(0xac)](0x2))['argv'],childProcess=require('child_process');if(argv['port']){const pattern=/^[0-9]{2,4}$/;!pattern[_0x4ef406(0xa3)](argv[_0x4ef406(0x9f)])&&(console['log'](_0x4ef406(0xb8)+argv[_0x4ef406(0x9f)]+_0x4ef406(0xb6)),process[_0x4ef406(0x9b)](0x1));}function _0x4b23(_0x5b70a5,_0x4b1e6d){const _0x117d20=_0x36a6();return _0x4b23=function(_0x55f608,_0x2dd3e8){_0x55f608=_0x55f608-0x95;let _0x36a689=_0x117d20[_0x55f608];return _0x36a689;},_0x4b23(_0x5b70a5,_0x4b1e6d);}let args=[];argv[_0x4ef406(0x9f)]&&(args['push']('--port'),args[_0x4ef406(0x9d)](argv[_0x4ef406(0x9f)]));argv[_0x4ef406(0x9e)]&&(args[_0x4ef406(0x9d)](_0x4ef406(0xb7)),args[_0x4ef406(0x9d)](argv[_0x4ef406(0x9e)]));function _0x36a6(){const _0x251c0f=['382428HfxIwG','2876EpEyJX','user','message','toString','Error\x20while\x20updating\x20Balance\x20Bot:','search','inherit','slice','bb/','update','Unexpected\x20error:','87704WYBygh','51vsOdYw','(((.+)+)+)+$','233845KMQvGz','Balance\x20Bot\x20>\x20','install.js',',\x20must\x20be\x20a\x204\x20digit\x20number','--host','Error:\x20Invalid\x20argument\x20','7PzNXwJ','kill','log','725430khXuUl','ipc','constructor','exit','bm.js','push','host','port','13758AbWUSx','31690rkHgAU','apply','test'];_0x36a6=function(){return _0x251c0f;};return _0x36a6();}argv['user']&&(args[_0x4ef406(0x9d)]('--user'),args[_0x4ef406(0x9d)](argv[_0x4ef406(0xa6)]));let bmpath=_0x4ef406(0xad);const bmfile=_0x4ef406(0x9c),updatefile=_0x4ef406(0xb5);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x2283cf=_0x4ef406,_0x3988bc=function(){let _0x4eb09e=!![];return function(_0xdb398b,_0xf45dab){const _0x5aae8b=_0x4eb09e?function(){const _0x35e563=_0x4b23;if(_0xf45dab){const _0x492ba7=_0xf45dab[_0x35e563(0xa2)](_0xdb398b,arguments);return _0xf45dab=null,_0x492ba7;}}:function(){};return _0x4eb09e=![],_0x5aae8b;};}(),_0x29be51=_0x3988bc(this,function(){const _0x5d8920=_0x4b23;return _0x29be51[_0x5d8920(0xa8)]()[_0x5d8920(0xaa)](_0x5d8920(0xb2))[_0x5d8920(0xa8)]()[_0x5d8920(0x9a)](_0x29be51)['search']('(((.+)+)+)+$');});_0x29be51();let _0xe06666=![];const _0x135ea7={'cwd':'','stdio':[_0x2283cf(0xab),_0x2283cf(0xab),_0x2283cf(0xab),_0x2283cf(0x99)]};pid1=childProcess['fork'](bmpath+bmfile,args,_0x135ea7),pid1['on'](_0x2283cf(0xa7),_0x5bac2a=>{const _0x34a099=_0x2283cf;switch(Object['keys'](_0x5bac2a)[0x0]){case _0x34a099(0xae):startUpdate();break;}}),pid1['on']('error',function(_0x3a8c6b){const _0x3abd2c=_0x2283cf;if(_0xe06666)return;_0xe06666=!![],logging(_0x3abd2c(0xaf),_0x3a8c6b);}),pid1['on']('exit',function(_0x57a2cf){if(_0xe06666)return;_0xe06666=!![];if(!updating)startBM();});}function startUpdate(){const _0x5e9253=_0x4ef406;updating=!![];if(pid1)pid1[_0x5e9253(0x96)]();let _0x5d9b8b=![];const _0x298c60={'cwd':'','stdio':[_0x5e9253(0xab),_0x5e9253(0xab),_0x5e9253(0xab),_0x5e9253(0x99)]};let _0x3fab8a=[];if(argv['s'])_0x3fab8a[_0x5e9253(0x9d)]('2s');else _0x3fab8a[_0x5e9253(0x9d)]('2');pid2=childProcess['fork'](updatefile,_0x3fab8a,_0x298c60),pid2['on']('error',function(_0x566519){const _0xe7d117=_0x5e9253;updating=![];if(_0x5d9b8b)return;_0x5d9b8b=!![],logging(_0xe7d117(0xa9),_0x566519);}),pid2['on']('exit',function(_0x30307e){updating=![];if(_0x5d9b8b)return;_0x5d9b8b=!![],startBM();});}function logging(_0x570be4){const _0x493c59=_0x4ef406;console[_0x493c59(0x97)](_0x493c59(0xb4)+_0x570be4);}