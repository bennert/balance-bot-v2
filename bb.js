const _0x4785fe=_0x24d6;(function(_0x501059,_0x930aca){const _0xfbc7b8=_0x24d6,_0x54a117=_0x501059();while(!![]){try{const _0x212867=-parseInt(_0xfbc7b8(0x145))/0x1+parseInt(_0xfbc7b8(0x151))/0x2+-parseInt(_0xfbc7b8(0x150))/0x3*(parseInt(_0xfbc7b8(0x12a))/0x4)+-parseInt(_0xfbc7b8(0x129))/0x5*(parseInt(_0xfbc7b8(0x13f))/0x6)+parseInt(_0xfbc7b8(0x137))/0x7+parseInt(_0xfbc7b8(0x14f))/0x8+parseInt(_0xfbc7b8(0x13a))/0x9;if(_0x212867===_0x930aca)break;else _0x54a117['push'](_0x54a117['shift']());}catch(_0x3d7022){_0x54a117['push'](_0x54a117['shift']());}}}(_0x38bd,0x411b1));const fs=require('fs'),argv=require(_0x4785fe(0x14c))(process[_0x4785fe(0x14a)]['slice'](0x2))[_0x4785fe(0x14a)],childProcess=require(_0x4785fe(0x134));function _0x38bd(){const _0x349a9b=['keys','search','4361103SUXOpr','message','error','log','(((.+)+)+)+$','1093458DLNDvj','existsSync','fork','port','test','kill','214945XUVCCN','--host','update','install.js','host','argv','constructor','yargs/yargs','--user','Error:\x20Invalid\x20argument\x20','405128ymwlwO','3qPTBaR','79478qdveGR','5qzwWlX','535488VQfyxo','push','toString','exit','apply','bb/','bm.js','Error\x20while\x20updating\x20Balance\x20Bot:','inherit',',\x20must\x20be\x20a\x204\x20digit\x20number','child_process','ipc','user','1559502EjQdmc'];_0x38bd=function(){return _0x349a9b;};return _0x38bd();}if(argv[_0x4785fe(0x142)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x4785fe(0x143)](argv['port'])&&(console['log'](_0x4785fe(0x14e)+argv[_0x4785fe(0x142)]+_0x4785fe(0x133)),process[_0x4785fe(0x12d)](0x1));}let args=[];argv[_0x4785fe(0x142)]&&(args['push']('--port'),args[_0x4785fe(0x12b)](argv[_0x4785fe(0x142)]));argv[_0x4785fe(0x149)]&&(args[_0x4785fe(0x12b)](_0x4785fe(0x146)),args['push'](argv[_0x4785fe(0x149)]));argv[_0x4785fe(0x136)]&&(args[_0x4785fe(0x12b)](_0x4785fe(0x14d)),args['push'](argv['user']));let bmpath=_0x4785fe(0x12f);const bmfile=_0x4785fe(0x130),updatefile=_0x4785fe(0x148);!fs[_0x4785fe(0x140)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function _0x24d6(_0x15a284,_0xeff291){const _0x319bda=_0x38bd();return _0x24d6=function(_0x40c9fc,_0x4160ae){_0x40c9fc=_0x40c9fc-0x129;let _0x38bd60=_0x319bda[_0x40c9fc];return _0x38bd60;},_0x24d6(_0x15a284,_0xeff291);}function startBM(){const _0x514bb0=_0x4785fe,_0x1954c0=function(){let _0x2e8b88=!![];return function(_0x110433,_0x1055bb){const _0x3b1fbe=_0x2e8b88?function(){const _0x4d6efc=_0x24d6;if(_0x1055bb){const _0x2276d9=_0x1055bb[_0x4d6efc(0x12e)](_0x110433,arguments);return _0x1055bb=null,_0x2276d9;}}:function(){};return _0x2e8b88=![],_0x3b1fbe;};}(),_0x831487=_0x1954c0(this,function(){const _0x3fe4f0=_0x24d6;return _0x831487[_0x3fe4f0(0x12c)]()[_0x3fe4f0(0x139)](_0x3fe4f0(0x13e))[_0x3fe4f0(0x12c)]()[_0x3fe4f0(0x14b)](_0x831487)[_0x3fe4f0(0x139)](_0x3fe4f0(0x13e));});_0x831487();let _0x54d73f=![];const _0xd869ac={'cwd':'','stdio':[_0x514bb0(0x132),_0x514bb0(0x132),_0x514bb0(0x132),_0x514bb0(0x135)]};pid1=childProcess[_0x514bb0(0x141)](bmpath+bmfile,args,_0xd869ac),pid1['on'](_0x514bb0(0x13b),_0x392fdf=>{const _0x39a8d5=_0x514bb0;switch(Object[_0x39a8d5(0x138)](_0x392fdf)[0x0]){case _0x39a8d5(0x147):startUpdate();break;}}),pid1['on'](_0x514bb0(0x13c),function(_0x191404){if(_0x54d73f)return;_0x54d73f=!![],logging('Unexpected\x20error:',_0x191404);}),pid1['on']('exit',function(_0x10d9c6){if(_0x54d73f)return;_0x54d73f=!![];if(!updating)startBM();});}function startUpdate(){const _0x5cd509=_0x4785fe;updating=!![];if(pid1)pid1[_0x5cd509(0x144)]();let _0x1d568e=![];const _0x17b01e={'cwd':'','stdio':[_0x5cd509(0x132),_0x5cd509(0x132),_0x5cd509(0x132),_0x5cd509(0x135)]};let _0x4eb290=[];if(argv['s'])_0x4eb290['push']('2s');else _0x4eb290[_0x5cd509(0x12b)]('2');pid2=childProcess[_0x5cd509(0x141)](updatefile,_0x4eb290,_0x17b01e),pid2['on'](_0x5cd509(0x13c),function(_0x18bdaf){const _0x1240ae=_0x5cd509;updating=![];if(_0x1d568e)return;_0x1d568e=!![],logging(_0x1240ae(0x131),_0x18bdaf);}),pid2['on'](_0x5cd509(0x12d),function(_0x3ef36b){updating=![];if(_0x1d568e)return;_0x1d568e=!![],startBM();});}function logging(_0x2f2ba4){const _0x1cac56=_0x4785fe;console[_0x1cac56(0x13d)]('Balance\x20Bot\x20>\x20'+_0x2f2ba4);}