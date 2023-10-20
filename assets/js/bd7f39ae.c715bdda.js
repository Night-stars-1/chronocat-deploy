"use strict";(self.webpackChunk_chronocat_docs=self.webpackChunk_chronocat_docs||[]).push([[4156],{702:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>h,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var o=c(2322),r=c(5392),i=c(9817),s=c(5e3);const t="# yaml-language-server: $schema=https://chronocat.vercel.app/config-v0.schema.json\n#\n################################################################\n#                      Chronocat \u914d\u7f6e\u6587\u4ef6\n################################################################\n#\n# \u4f60\u597d\uff01\n#\n# \u8fd9\u662f Chronocat \u7684\u914d\u7f6e\u6587\u4ef6\u3002Chronocat \u7684\u6240\u6709\u914d\u7f6e\u4ee5\u53ca\u6bcf\u4e2a\u8d26\u53f7\n# \u7684\u72ec\u7acb\u914d\u7f6e\u90fd\u5b58\u653e\u5728\u8fd9\u4e2a\u6587\u4ef6\u91cc\u3002\n#\n# \u8fd9\u662f Chronocat \u914d\u7f6e\u7684\u6587\u6863\uff1a\n# https://chronocat.vercel.app/config\n# \u5982\u679c\u8fd8\u6ca1\u6709\u770b\u8fc7\u7684\u8bdd\uff0c\u8bf7\u5148\u770b\u4e00\u4e0b\uff01\n#\n# \u5982\u679c\u4f60\u73b0\u5728\u5e76\u4e0d\u662f\u4f7f\u7528\u5b8c\u6574\u529f\u80fd\u7684\u7f16\u8f91\u5668\u7f16\u8f91\u6b64\u6587\u4ef6\u7684\u8bdd\uff0c\n# \u6211\u4eec\u63a8\u8350\u4f60\u4f7f\u7528\u4e00\u6b3e\u5b8c\u6574\u529f\u80fd\u7684\u7f16\u8f91\u5668\u6765\u7f16\u8f91\uff01\n# \u8fd9\u6837\u7684\u7f16\u8f91\u5668\u5728\u4f60\u4e0d\u5c0f\u5fc3\u6539\u9519\u914d\u7f6e\u7684\u65f6\u5019\u4f1a\u667a\u80fd\u5730\u7ed9\u51fa\u63d0\u793a\u3002\n# \u60f3\u8981\u4e86\u89e3\u66f4\u591a\u8bf7\u67e5\u770b\u4e0a\u9762\u7684\u6587\u6863 \u2191\n#\n################################################################\n#                           \u5168\u5c40\u914d\u7f6e\n################################################################\n#\n# \u4e0b\u9762\u7684\u914d\u7f6e\u662f\u901a\u7528\u7684\uff01\u5982\u679c\u4f60\u53ea\u767b\u5f55\u4e00\u4e2a\u8d26\u53f7\uff0c\n# \u90a3\u4e48\u53ea\u9700\u4fee\u6539\u4e0b\u9762\u8fd9\u90e8\u5206\u914d\u7f6e\u5373\u53ef\uff01\n#\n################################################################\n\n# servers\uff1a\u670d\u52a1\u914d\u7f6e\n#\n# \u914d\u7f6e Chronocat \u5f00\u542f\u7684\u670d\u52a1\u3002\u9700\u8981\u5c24\u5176\u6ce8\u610f\u670d\u52a1\u5217\u8868\u7684\u683c\u5f0f\u54e6~\nservers:\n  # type\uff1a\u670d\u52a1\u7c7b\u578b\n  #\n  # \u5f00\u542f red \u670d\u52a1\u53ea\u9700\u8981\u6307\u5b9a type \u4e3a red \u5373\u53ef\u3002\n  - type: red\n\n    # token\uff1a\u670d\u52a1\u5bc6\u7801\n    #\n    # Chronocat \u5df2\u7ecf\u81ea\u52a8\u751f\u6210\u4e86\u968f\u673a\u5bc6\u7801\u3002\u8981\u59a5\u5584\u4fdd\u5b58\u54e6\uff01\n    # \u5ba2\u6237\u7aef\u4f7f\u7528\u670d\u52a1\u65f6\u9700\u8981\u63d0\u4f9b\u8fd9\u4e2a\u5bc6\u7801\uff01\n    token: DEFINE_CHRONO_TOKEN\n\n    # port\uff1a\u670d\u52a1\u7aef\u53e3\n    #\n    # Chronocat \u5f00\u542f red \u670d\u52a1\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 16530\u3002\n    port: 16530\n\n  # \u5f00\u542f satori \u670d\u52a1\u4e0e\u4e0a\u9762\u76f8\u540c\uff0c\u6307\u5b9a type \u4e3a satori \u5373\u53ef\u3002\n  - type: satori\n\n    # \u8fd9\u91cc\u7684 token \u4e0e\u4e0a\u9762\u7684\u76f8\u540c\uff0c\n    # \u4f46\u4f60\u4e5f\u53ef\u4ee5\u8fdb\u884c\u66f4\u6362\uff0c\u8ba9\u6bcf\u4e2a\u670d\u52a1\u4f7f\u7528\u4e0d\u540c\u7684\u670d\u52a1\u5bc6\u7801\u3002\n    token: DEFINE_CHRONO_TOKEN\n\n    # satori \u670d\u52a1\u7684\u9ed8\u8ba4\u7aef\u53e3\u4e3a 5500\u3002\n    port: 5500\n#\n################################################################\n#                           \u8d26\u53f7\u914d\u7f6e\n################################################################\noverrides:\n  ##############################################################\n  #\n  # \u4e0b\u9762\u7684\u914d\u7f6e\u662f\u6bcf\u4e2a\u8d26\u53f7\u4e13\u5c5e\u7684\uff01\u4fee\u6539\u4e0b\u9762\u7684\u914d\u7f6e\u4f1a\u8986\u76d6\u4e0a\u9762\u7684\u914d\u7f6e\u54e6~\n  # \u4fee\u6539\u7684\u65f6\u5019\u8981\u7279\u522b\u6ce8\u610f\uff1a\u8d26\u53f7\u524d\u7a7a\u4e24\u683c\uff0c\u8d26\u53f7\u5185\u914d\u7f6e\u8981\u7a7a\u56db\u683c\u54e6\uff01\n  #\n  ##############################################################\n\n  10000:\n    servers:\n      - type: red\n        token: DEFINE_CHRONO_TOKEN\n        port: 16531\n      - type: satori\n        token: DEFINE_CHRONO_TOKEN\n        port: 5501\n",l={title:"\u914d\u7f6e"},h=void 0,d={unversionedId:"config/index",id:"config/index",title:"\u914d\u7f6e",description:"Chronocat \u7684\u9ed8\u8ba4\u914d\u7f6e\u5df2\u7ecf\u5b8c\u5168\u80fd\u591f\u6ee1\u8db3\u57fa\u7840\u9700\u6c42\uff0c\u56e0\u6b64\u4e00\u822c\u60c5\u51b5\u4e0b\u65e0\u9700\u4fee\u6539\u3002\u800c\u5982\u679c\u4f60\u5e0c\u671b\u5f00\u542f\u591a\u4e2a",source:"@site/docs/config/index.mdx",sourceDirName:"config",slug:"/config/",permalink:"/config/",draft:!1,unlisted:!1,editUrl:"https://github.com/chrononeko/chronocat/tree/master/packages/docs/docs/config/index.mdx",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e"},sidebar:"guide",previous:{title:"\u63a5\u5165 KiramiBot",permalink:"/connect/kiramibot"},next:{title:"\u53c2\u8003",permalink:"/config/reference"}},a={},x=[{value:"\u4f4d\u7f6e",id:"\u4f4d\u7f6e",level:2},{value:"\u751f\u6210",id:"\u751f\u6210",level:2},{value:"\u81ea\u52a8\u751f\u6210",id:"\u81ea\u52a8\u751f\u6210",level:3},{value:"\u521d\u59cb\u5316\u670d\u52a1\u5bc6\u7801",id:"\u521d\u59cb\u5316\u670d\u52a1\u5bc6\u7801",level:3},{value:"\u624b\u52a8\u521b\u5efa",id:"\u624b\u52a8\u521b\u5efa",level:3},{value:"\u4ece v0.0.45 \u8fc1\u79fb",id:"\u4ece-v0045-\u8fc1\u79fb",level:3},{value:"\u7f16\u8f91",id:"\u7f16\u8f91",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function j(n){const e=Object.assign({p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",ol:"ol",admonition:"admonition",a:"a",strong:"strong"},(0,r.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Chronocat \u7684\u9ed8\u8ba4\u914d\u7f6e\u5df2\u7ecf\u5b8c\u5168\u80fd\u591f\u6ee1\u8db3\u57fa\u7840\u9700\u6c42\uff0c\u56e0\u6b64\u4e00\u822c\u60c5\u51b5\u4e0b\u65e0\u9700\u4fee\u6539\u3002\u800c\u5982\u679c\u4f60\u5e0c\u671b\u5f00\u542f\u591a\u4e2a\nChronocat \u670d\u52a1\u6216\u9700\u8981\u591a\u8d26\u53f7\u767b\u5f55\uff0c\u5219\u53ef\u4ee5\u53c2\u8003\u4e0b\u65b9\u7684\u6307\u5357\u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u4f4d\u7f6e",children:"\u4f4d\u7f6e"}),"\n",(0,o.jsxs)(e.p,{children:["Chronocat \u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,o.jsx)(e.code,{children:"~/.chronocat/config/chronocat.yml"}),"\u3002\u8981\u6253\u5f00\u8fd9\u4e2a\u6587\u4ef6\uff1a"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u5728 Windows \u4e0a\uff0c\u6309\u4e0b ",(0,o.jsx)(e.code,{children:"Win+R"}),"\uff0c\u7136\u540e\u8f93\u5165 ",(0,o.jsx)(e.code,{children:'"%USERPROFILE%/.chronocat/config"'})," \u5e76\u56de\u8f66\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:["\u5728 macOS \u4e0a\uff0c\u5728\u684c\u9762\u6309\u4e0b ",(0,o.jsx)(e.code,{children:"\u2318\u21e7G"}),"\uff0c\u7136\u540e\u8f93\u5165 ",(0,o.jsx)(e.code,{children:"~/Library/Containers/com.tencent.qq/Data/.chronocat/config"})," \u5e76\u56de\u8f66\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:["\u5728 Linux \u4e0a\uff0c\u5728\u684c\u9762\u6309\u4e0b ",(0,o.jsx)(e.code,{children:"Alt+F2"}),"\uff0c\u7136\u540e\u8f93\u5165 ",(0,o.jsx)(e.code,{children:"~/.chronocat/config"})," \u5e76\u56de\u8f66\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u751f\u6210",children:"\u751f\u6210"}),"\n",(0,o.jsx)(e.h3,{id:"\u81ea\u52a8\u751f\u6210",children:"\u81ea\u52a8\u751f\u6210"}),"\n",(0,o.jsx)(e.p,{children:"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cChronocat \u914d\u7f6e\u6587\u4ef6\u662f\u81ea\u52a8\u751f\u6210\u7684\u3002Chronocat\n\u751f\u6210\u914d\u7f6e\u6587\u4ef6\u4f1a\u7ecf\u8fc7\u5982\u4e0b\u4e24\u6b65\uff1a"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u4ece\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u751f\u6210\u4e00\u4efd\u5168\u65b0\u7684\u3001\u5e26\u6ce8\u91ca\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u5728\u672c\u9875\u7684\u5e95\u90e8\u67e5\u770b\uff1b"}),"\n",(0,o.jsxs)(e.li,{children:["\u751f\u6210\u4e00\u4e2a\u9ad8\u5f3a\u5ea6\u5bc6\u7801\uff0c\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u670d\u52a1\u5bc6\u7801\uff08",(0,o.jsx)(e.code,{children:"token"})," \u5b57\u6bb5\uff09\u8bbe\u7f6e\u4e3a\u8be5\u5bc6\u7801\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u81ea\u52a8\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u5df2\u540c\u65f6\u6ee1\u8db3\u5f00\u7bb1\u5373\u7528\u7684\u4fbf\u5229\u6027\u548c\u5b89\u5168\u6027\u4e24\u5927\u8981\u6c42\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u65e0\u9700\u4fee\u6539\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u521d\u59cb\u5316\u670d\u52a1\u5bc6\u7801",children:"\u521d\u59cb\u5316\u670d\u52a1\u5bc6\u7801"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728\u81ea\u52a8\u751f\u6210\u65f6\uff0c\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,o.jsx)(e.code,{children:"--chrono-default-token"})," \u547d\u4ee4\u884c\u53c2\u6570\u6216 ",(0,o.jsx)(e.code,{children:"CHRONO_DEFAULT_TOKEN"}),"\n\u73af\u5883\u53d8\u91cf\uff0c\u5219\u4f1a\u4f7f\u7528\u63d0\u4f9b\u7684\u503c\u8bbe\u7f6e\u670d\u52a1\u5bc6\u7801\u3002\u547d\u4ee4\u884c\u53c2\u6570\u4f18\u5148\u4e8e\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,o.jsx)(e.h3,{id:"\u624b\u52a8\u521b\u5efa",children:"\u624b\u52a8\u521b\u5efa"}),"\n",(0,o.jsx)(e.p,{children:"\u5728\u4e00\u4e9b\u7279\u6b8a\u73af\u5883\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5148\u624b\u52a8\u914d\u7f6e\u597d Chronocat \u914d\u7f6e\u6587\u4ef6\uff0c\u518d\u542f\u52a8\nChronocat\u3002\u5982\u679c\u4f60\u5e0c\u671b\u624b\u52a8\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u7528\u81ea\u52a8\u751f\u6210\u7c7b\u4f3c\u7684\u505a\u6cd5\uff1a"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u4ece\u9875\u9762\u5e95\u90e8\u83b7\u5f97\u4e00\u4efd\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u53c2\u8003\u4e0a\u9762\u7684\u300c\u4f4d\u7f6e\u300d\u4e00\u8282\u5c06\u914d\u7f6e\u6587\u4ef6\u5b58\u50a8\u5230\u6b63\u786e\u7684\u4f4d\u7f6e\uff1b"}),"\n",(0,o.jsxs)(e.li,{children:["\u5c06\u6587\u4ef6\u5185\u7684\u6240\u6709 ",(0,o.jsx)(e.code,{children:"DEFINE_CHRONO_TOKEN"})," \u66ff\u6362\u6210\u81ea\u5df1\u51c6\u5907\u7684\u670d\u52a1\u5bc6\u7801\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{title:"\u5fc5\u987b\u66ff\u6362\u670d\u52a1\u5bc6\u7801",type:"caution",children:(0,o.jsxs)(e.p,{children:["\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6240\u6709\u670d\u52a1\u5bc6\u7801\u5b57\u6bb5\u7684\u503c\u90fd\u662f\n",(0,o.jsx)(e.code,{children:"DEFINE_CHRONO_TOKEN"}),"\u3002\u53ea\u8981\u68c0\u6d4b\u5230\u8fd9\u4e2a\u503c\uff0cChronocat \u5c31\u4e0d\u4f1a\u542f\u52a8\u3002\u5728\u542f\u52a8\nChronocat \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5c06\u6240\u6709 ",(0,o.jsx)(e.code,{children:"DEFINE_CHRONO_TOKEN"}),"\n\u5b57\u6837\u90fd\u66ff\u6362\u6210\u4f60\u81ea\u5df1\u7684\u670d\u52a1\u5bc6\u7801\u3002\u8fd9\u6709\u52a9\u4e8e\u907f\u514d\n",(0,o.jsx)(e.a,{href:"https://owasp.org/www-community/attacks/Password_Spraying_Attack",children:"\u5bc6\u7801\u55b7\u6d12\u653b\u51fb"}),"\u3002"]})}),"\n",(0,o.jsx)(e.h3,{id:"\u4ece-v0045-\u8fc1\u79fb",children:"\u4ece v0.0.45 \u8fc1\u79fb"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4ece Chronocat \u7248\u672c 0.0.45 \u6216\u66f4\u65e9\u8fc1\u79fb\uff0c\u90a3\u4e48\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u65b0\u7684\u9ed8\u8ba4\u914d\u7f6e\u4f1a\u751f\u6210\uff0c\u4e14\u6240\u6709 token \u914d\u7f6e\u9879\u5c06\u4f1a\u4fdd\u6301\u4e0e\u65e7\u7684 ",(0,o.jsx)(e.code,{children:"RED_PROTOCOL_TOKEN"})," \u6587\u4ef6\u4e00\u81f4\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsxs)(e.strong,{children:["\u65e7\u7684 ",(0,o.jsx)(e.code,{children:"RED_PROTOCOL_TOKEN"})," \u6587\u4ef6\u5c06\u4f1a\u5931\u6548\uff0c\u4f46\u5c06\u88ab\u4fdd\u7559\u3002"]})," \u8bf7\u5728\u8fc1\u79fb\u540e\u53ca\u65f6\u5220\u9664\u65e7\u6587\u4ef6\uff0c\u907f\u514d\u9020\u6210\u6df7\u6dc6\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u7f16\u8f91",children:"\u7f16\u8f91"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u4efb\u610f\u4e00\u6b3e\u5e26\u6709 LSP \u529f\u80fd\u7684\u7f16\u8f91\u5668\u6765\u7f16\u8f91 Chronocat \u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml",children:"Visual Studio Code"})," \uff08\u63a8\u8350\uff09"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/emacs-lsp/lsp-mode",children:"Emacs"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/prabirshrestha/vim-lsp",children:"Vim"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://packagecontrol.io/packages/LSP-yaml",children:"Sublime Text"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\uff08\u70b9\u51fb\u7f16\u8f91\u5668\u4ee5\u5b89\u88c5\u6240\u9700\u7684\u63d2\u4ef6\uff09"}),"\n",(0,o.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u6211\u4eec\u63a8\u8350\u4e3a\u7f16\u8f91\u5668\u914d\u7f6e\u4e00\u6b3e\u7b49\u5bbd\u5b57\u4f53\uff0c\u8fd9\u6837\u53ef\u4ee5\u6781\u5927\u5730\u6539\u5584\u914d\u7f6e\u6587\u4ef6\u7684\u7f16\u8f91\u4f53\u9a8c\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,o.jsx)(e.p,{children:"\u53c2\u8003\u9875\u5c55\u793a\u4e86\u5b8c\u6574\u7684 Chronocat \u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u3002"}),"\n",(0,o.jsx)(i.Z,{className:"button button--secondary button--lg button--normal",to:"/config/reference",children:(0,o.jsx)("span",{children:"Chronocat \u914d\u7f6e\u6587\u4ef6\u53c2\u8003"})}),"\n",(0,o.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece\u672c\u7ad9\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\u76f8\u5173\u8d44\u6e90\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Chronocat \u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff1a",(0,o.jsx)(e.a,{href:"https://chronocat.vercel.app/chronocat.yml",children:"https://chronocat.vercel.app/chronocat.yml"})]}),"\n",(0,o.jsxs)(e.li,{children:["Chronocat \u914d\u7f6e\u6587\u4ef6\u67b6\u6784\uff1a",(0,o.jsx)(e.a,{href:"https://chronocat.vercel.app/config-v0.schema.json",children:"https://chronocat.vercel.app/config-v0.schema.json"})]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u8fd9\u91cc\u4e5f\u6709\u4e00\u4efd\u5b8c\u6574\u7684\u3001\u9ed8\u8ba4\u7684 ",(0,o.jsx)(e.code,{children:"chronocat.yml"})," \u6587\u4ef6\u4f9b\u53c2\u8003\uff1a"]}),"\n",(0,o.jsx)(s.Z,{language:"yml",title:"chronocat.yml",children:t})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(j,n)})):j(n)}}}]);