const _0x1547eb=_0xbc57;(function(_0x314729,_0x286f7a){const _0x50abcb=_0xbc57,_0x336243=_0x314729();while(!![]){try{const _0x91c4a8=parseInt(_0x50abcb(0x15c))/0x1*(-parseInt(_0x50abcb(0x142))/0x2)+-parseInt(_0x50abcb(0x153))/0x3*(parseInt(_0x50abcb(0x167))/0x4)+-parseInt(_0x50abcb(0x164))/0x5+-parseInt(_0x50abcb(0x14c))/0x6+-parseInt(_0x50abcb(0x14e))/0x7+-parseInt(_0x50abcb(0x159))/0x8+parseInt(_0x50abcb(0x157))/0x9;if(_0x91c4a8===_0x286f7a)break;else _0x336243['push'](_0x336243['shift']());}catch(_0x3ac7e7){_0x336243['push'](_0x336243['shift']());}}}(_0x234e,0x6cc28));const fs=require('fs'),argv=require(_0x1547eb(0x155))(process['argv']['slice'](0x2))[_0x1547eb(0x166)],childProcess=require(_0x1547eb(0x154));function _0x234e(){const _0x9551e3=['host','user','404470VDyZzf','constructor','--host','update','ipc','error','fork','port','toString','kill','2897436LoTyQU','keys','2678970GQrshK','log','search','inherit','(((.+)+)+)+$','399CpgqBw','child_process','yargs/yargs','push','25988526NcXVAX','exit','336336lmuEie','test','bm.js','1twHFGc','--user','apply','message','Error:\x20Invalid\x20argument\x20','restore',',\x20must\x20be\x20a\x204\x20digit\x20number','install.js','4164130OUxDkF','existsSync','argv','15020fJxcDP','Balance\x20Bot\x20>\x20'];_0x234e=function(){return _0x9551e3;};return _0x234e();}if(argv[_0x1547eb(0x149)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x1547eb(0x15a)](argv['port'])&&(console[_0x1547eb(0x14f)](_0x1547eb(0x160)+argv[_0x1547eb(0x149)]+_0x1547eb(0x162)),process[_0x1547eb(0x158)](0x1));}let args=[];function _0xbc57(_0x40cfe2,_0x8e5411){const _0xc8572d=_0x234e();return _0xbc57=function(_0x3ea829,_0x2ab342){_0x3ea829=_0x3ea829-0x141;let _0x234e80=_0xc8572d[_0x3ea829];return _0x234e80;},_0xbc57(_0x40cfe2,_0x8e5411);}argv[_0x1547eb(0x149)]&&(args[_0x1547eb(0x156)]('--port'),args[_0x1547eb(0x156)](argv['port']));argv[_0x1547eb(0x169)]&&(args[_0x1547eb(0x156)](_0x1547eb(0x144)),args[_0x1547eb(0x156)](argv[_0x1547eb(0x169)]));argv['user']&&(args[_0x1547eb(0x156)](_0x1547eb(0x15d)),args[_0x1547eb(0x156)](argv[_0x1547eb(0x141)]));let bmpath='bb/';const bmfile=_0x1547eb(0x15b),updatefile=_0x1547eb(0x163);!fs[_0x1547eb(0x165)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x2b9432=_0x1547eb,_0x1b482e=function(){let _0x5877be=!![];return function(_0x8eff8,_0x547121){const _0x3e9878=_0x5877be?function(){const _0x33fba1=_0xbc57;if(_0x547121){const _0x57674b=_0x547121[_0x33fba1(0x15e)](_0x8eff8,arguments);return _0x547121=null,_0x57674b;}}:function(){};return _0x5877be=![],_0x3e9878;};}(),_0x5621c0=_0x1b482e(this,function(){const _0x28cca3=_0xbc57;return _0x5621c0['toString']()[_0x28cca3(0x150)](_0x28cca3(0x152))[_0x28cca3(0x14a)]()[_0x28cca3(0x143)](_0x5621c0)['search']('(((.+)+)+)+$');});_0x5621c0();let _0x4bb741=![];const _0x4ad7bd={'cwd':'','stdio':['inherit',_0x2b9432(0x151),_0x2b9432(0x151),'ipc']};pid1=childProcess[_0x2b9432(0x148)](bmpath+bmfile,args,_0x4ad7bd),pid1['on'](_0x2b9432(0x15f),_0x6f0e77=>{const _0x2223d0=_0x2b9432;switch(Object[_0x2223d0(0x14d)](_0x6f0e77)[0x0]){case _0x2223d0(0x145):startUpdate();break;case _0x2223d0(0x161):handleRestore();break;}}),pid1['on'](_0x2b9432(0x147),function(_0x1021e0){if(_0x4bb741)return;_0x4bb741=!![],logging('Unexpected\x20error:',_0x1021e0);}),pid1['on'](_0x2b9432(0x158),function(_0x10c8a1){if(_0x4bb741)return;_0x4bb741=!![];if(!updating)startBM();});}function startUpdate(){const _0xab336c=_0x1547eb;updating=!![];if(pid1)pid1[_0xab336c(0x14b)]();let _0x478879=![];const _0x1311a1={'cwd':'','stdio':[_0xab336c(0x151),_0xab336c(0x151),_0xab336c(0x151),_0xab336c(0x146)]};let _0x9ed5ba=[];if(argv['s'])_0x9ed5ba[_0xab336c(0x156)]('2s');else _0x9ed5ba[_0xab336c(0x156)]('2');pid2=childProcess[_0xab336c(0x148)](updatefile,_0x9ed5ba,_0x1311a1),pid2['on'](_0xab336c(0x147),function(_0x4dfa01){updating=![];if(_0x478879)return;_0x478879=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x4dfa01);}),pid2['on'](_0xab336c(0x158),function(_0x2a37ea){updating=![];if(_0x478879)return;_0x478879=!![],startBM();});}function handleRestore(){const _0x2a1b54=_0x1547eb;if(pid1)pid1[_0x2a1b54(0x14b)]();}function logging(_0xedbb13){const _0x13667b=_0x1547eb;console[_0x13667b(0x14f)](_0x13667b(0x168)+_0xedbb13);}