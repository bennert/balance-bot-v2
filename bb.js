const _0x4ba897=_0x45a2;(function(_0x2979e9,_0x226f4d){const _0x8591db=_0x45a2,_0x411d6b=_0x2979e9();while(!![]){try{const _0x273557=parseInt(_0x8591db(0x1df))/0x1*(parseInt(_0x8591db(0x1e7))/0x2)+parseInt(_0x8591db(0x1ef))/0x3*(parseInt(_0x8591db(0x1d8))/0x4)+parseInt(_0x8591db(0x1de))/0x5+-parseInt(_0x8591db(0x1db))/0x6+-parseInt(_0x8591db(0x200))/0x7*(-parseInt(_0x8591db(0x1dd))/0x8)+-parseInt(_0x8591db(0x1f0))/0x9+-parseInt(_0x8591db(0x1da))/0xa;if(_0x273557===_0x226f4d)break;else _0x411d6b['push'](_0x411d6b['shift']());}catch(_0x147b72){_0x411d6b['push'](_0x411d6b['shift']());}}}(_0x3c3e,0xaa12d));const fs=require('fs'),argv=require('yargs/yargs')(process[_0x4ba897(0x1fe)][_0x4ba897(0x1dc)](0x2))['argv'],childProcess=require('child_process');if(argv[_0x4ba897(0x1f3)]){const pattern=/^[0-9]{2,4}$/;if(!pattern[_0x4ba897(0x1e1)](argv[_0x4ba897(0x1f3)]))return console[_0x4ba897(0x1ff)](_0x4ba897(0x1fa)+argv[_0x4ba897(0x1f3)]+_0x4ba897(0x1fd)),process[_0x4ba897(0x1f6)](0x1);}let args=[];argv[_0x4ba897(0x1f3)]&&(args[_0x4ba897(0x1e4)](_0x4ba897(0x1d9)),args[_0x4ba897(0x1e4)](argv[_0x4ba897(0x1f3)]));argv[_0x4ba897(0x1f4)]&&(args['push'](_0x4ba897(0x1f5)),args[_0x4ba897(0x1e4)](argv[_0x4ba897(0x1f4)]));argv[_0x4ba897(0x1e3)]&&(args['push'](_0x4ba897(0x1ea)),args[_0x4ba897(0x1e4)](argv[_0x4ba897(0x1e3)]));let bmpath='bb/';const bmfile='bm.js',updatefile=_0x4ba897(0x1eb);!fs[_0x4ba897(0x1e8)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];function _0x45a2(_0x45605b,_0x404155){const _0x1c4ef9=_0x3c3e();return _0x45a2=function(_0x171f1d,_0x57bc39){_0x171f1d=_0x171f1d-0x1d8;let _0x3c3e32=_0x1c4ef9[_0x171f1d];return _0x3c3e32;},_0x45a2(_0x45605b,_0x404155);}startBM();function startBM(){const _0x16e979=_0x4ba897,_0x4c058c=function(){let _0x4d3b8c=!![];return function(_0xc045b,_0x55896f){const _0x3ab9df=_0x4d3b8c?function(){const _0x5d59b2=_0x45a2;if(_0x55896f){const _0x1f01e3=_0x55896f[_0x5d59b2(0x1f9)](_0xc045b,arguments);return _0x55896f=null,_0x1f01e3;}}:function(){};return _0x4d3b8c=![],_0x3ab9df;};}(),_0x36841f=_0x4c058c(this,function(){const _0xa2a9a8=_0x45a2;return _0x36841f[_0xa2a9a8(0x1f7)]()[_0xa2a9a8(0x1e6)](_0xa2a9a8(0x1ee))[_0xa2a9a8(0x1f7)]()[_0xa2a9a8(0x1fb)](_0x36841f)[_0xa2a9a8(0x1e6)]('(((.+)+)+)+$');});_0x36841f();let _0x4f85d5=![];const _0x5d50c2={'cwd':'','stdio':[_0x16e979(0x1e2),'inherit','inherit',_0x16e979(0x1e0)]};pid1=childProcess[_0x16e979(0x1ec)](bmpath+bmfile,args,_0x5d50c2),pid1['on']('message',_0x91936e=>{const _0x4f1224=_0x16e979;switch(Object[_0x4f1224(0x1f1)](_0x91936e)[0x0]){case _0x4f1224(0x1e9):startUpdate();break;}}),pid1['on']('error',function(_0x18d2cc){const _0x2d6612=_0x16e979;if(_0x4f85d5)return;_0x4f85d5=!![],logging(_0x2d6612(0x1e5),_0x18d2cc);}),pid1['on'](_0x16e979(0x1f6),function(_0x2d379b){if(_0x4f85d5)return;_0x4f85d5=!![];if(!updating)startBM();});}function startUpdate(){const _0x16c91d=_0x4ba897;updating=!![];if(pid1)pid1[_0x16c91d(0x1fc)]();let _0x1572e7=![];const _0x324ca2={'cwd':'','stdio':[_0x16c91d(0x1e2),_0x16c91d(0x1e2),_0x16c91d(0x1e2),_0x16c91d(0x1e0)]};let _0x22a133=[];if(argv['s'])_0x22a133[_0x16c91d(0x1e4)]('2s');else _0x22a133[_0x16c91d(0x1e4)]('2');pid2=childProcess[_0x16c91d(0x1ec)](updatefile,_0x22a133,_0x324ca2),pid2['on'](_0x16c91d(0x1f8),function(_0x5d861c){const _0x3f517a=_0x16c91d;updating=![];if(_0x1572e7)return;_0x1572e7=!![],logging(_0x3f517a(0x1ed),_0x5d861c);}),pid2['on']('exit',function(_0x1e38f3){updating=![];if(_0x1572e7)return;_0x1572e7=!![],startBM();});}function _0x3c3e(){const _0xf9c99b=['464nEGSDJ','4217555whWRol','101fqmXFY','ipc','test','inherit','user','push','Unexpected\x20error:','search','10628xCgWDH','existsSync','update','--user','install.js','fork','Error\x20while\x20updating\x20Balance\x20Bot:','(((.+)+)+)+$','9nSunOx','4997718fKdTfo','keys','Balance\x20Bot\x20>\x20','port','host','--host','exit','toString','error','apply','Error:\x20Invalid\x20argument\x20','constructor','kill',',\x20must\x20be\x20a\x204\x20digit\x20number','argv','log','60018coGpjo','1514156OsCnzH','--port','9574540XrAQvT','4822542foePhE','slice'];_0x3c3e=function(){return _0xf9c99b;};return _0x3c3e();}function logging(_0x1499f4){const _0x16cc61=_0x4ba897;console[_0x16cc61(0x1ff)](_0x16cc61(0x1f2)+_0x1499f4);}