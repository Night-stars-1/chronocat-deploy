"use strict";(self.webpackChunk_chronocat_docs=self.webpackChunk_chronocat_docs||[]).push([[7159],{5571:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(2322),t=i(5392),c=i(9254);const r={title:"\u5b98\u65b9\u955c\u50cf"},s=void 0,l={unversionedId:"install/docker/official/index",id:"install/docker/official/index",title:"\u5b98\u65b9\u955c\u50cf",description:"chronoc/at \u662f\u7531 Chrononeko \u56e2\u961f\u5f00\u53d1\u548c\u7ef4\u62a4\u7684 Chronocat \u5b98\u65b9\u955c\u50cf\u3002",source:"@site/docs/install/docker/official/index.mdx",sourceDirName:"install/docker/official",slug:"/install/docker/official/",permalink:"/install/docker/official/",draft:!1,unlisted:!1,editUrl:"https://github.com/chrononeko/chronocat/tree/master/packages/docs/docs/install/docker/official/index.mdx",tags:[],version:"current",frontMatter:{title:"\u5b98\u65b9\u955c\u50cf"},sidebar:"guide",previous:{title:"Docker \u5b89\u88c5",permalink:"/install/docker/"},next:{title:"\u53c2\u8003",permalink:"/install/docker/official/reference"}},a={},d=[{value:"\u7acb\u5373\u5c1d\u8bd5",id:"\u7acb\u5373\u5c1d\u8bd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u7aef\u53e3\u6620\u5c04",id:"\u7aef\u53e3\u6620\u5c04",level:3},{value:"\u6301\u4e45\u5316",id:"\u6301\u4e45\u5316",level:3}];function h(n){const e=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,t.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.F,{}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"chronoc/at"})," \u662f\u7531 Chrononeko \u56e2\u961f\u5f00\u53d1\u548c\u7ef4\u62a4\u7684 Chronocat \u5b98\u65b9\u955c\u50cf\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u7acb\u5373\u5c1d\u8bd5",children:"\u7acb\u5373\u5c1d\u8bd5"}),"\n",(0,o.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u4f5c\u4e3a Chronocat \u7684\u6570\u636e\u76ee\u5f55\uff0c\u5e76\u5728\u76ee\u5f55\u5185\u6267\u884c\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"docker run -it \\\n  --name chronocat \\\n  -p 16530:16530 \\\n  -p 5500:5500 \\\n  -p 16340:16340 \\\n  -v ./config:/chrono/.chronocat/config \\\n  -v ./qq:/chrono/.config/QQ \\\n  chronoc/at\n"})}),"\n",(0,o.jsx)(e.p,{children:"Chronocat \u4f1a\u968f\u5373\u542f\u52a8\u5e76\u6253\u5370\u8fdc\u7a0b\u767b\u5f55\u7684\u94fe\u63a5\uff0c\u70b9\u51fb\u94fe\u63a5\u5373\u53ef\u767b\u5f55\nQQ\u3002\u4e4b\u540e\uff0c\u5373\u53ef\u7acb\u5373\u5f00\u59cb\u4f7f\u7528 Satori \u548c Red \u670d\u52a1\u4e86\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,o.jsx)(e.p,{children:"\u4e0b\u9762\u89e3\u91ca\u4e86\u5404\u4e2a\u53c2\u6570\u7684\u610f\u4e49\u3002\u63a8\u8350\u914d\u7f6e\u7684\u53c2\u6570\u5747\u5df2\u5305\u542b\u5728\u4e0a\u65b9\u7684\u547d\u4ee4\u91cc\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u7aef\u53e3\u6620\u5c04",children:"\u7aef\u53e3\u6620\u5c04"}),"\n",(0,o.jsx)(e.p,{children:"\u66b4\u9732 Chronocat \u767b\u5f55\u670d\u52a1\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"-p 16340:16340\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u66b4\u9732 Chronocat Red \u670d\u52a1\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"-p 16530:16530\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u66b4\u9732 Chronocat Satori \u670d\u52a1\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"-p 5500:5500\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u6301\u4e45\u5316",children:"\u6301\u4e45\u5316"}),"\n",(0,o.jsx)(e.p,{children:"\u4e0b\u6587\u4e2d\u63d0\u4f9b\u7684\u547d\u4ee4\u90fd\u5c06\u5728\u5de5\u4f5c\u76ee\u5f55\uff08\u5f53\u524d\u6587\u4ef6\u5939\uff09\u521b\u5efa\u6301\u4e45\u5316\u76ee\u5f55\uff0c\u56e0\u6b64\u8bf7\u5148\u8bbe\u5b9a\u597d\u7528\u4e8e\nChronocat \u7684\u5de5\u4f5c\u76ee\u5f55\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u6301\u4e45\u5316 Chronocat \u914d\u7f6e\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"-v ./config:/chrono/.chronocat/config\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bb9\u5668\u505c\u6b62\u540e\u767b\u5f55\u4fe1\u606f\u4f1a\u88ab\u4fdd\u7559\uff0c\u4f46\u9500\u6bc1\u5bb9\u5668\u540e\u767b\u5f55\u4fe1\u606f\u4f1a\u88ab\u4e00\u5e76\u9500\u6bc1\u3002\u56e0\u6b64\uff0c\u63a8\u8350\u5bf9\u5bb9\u5668\u8fdb\u884c\u6301\u4e45\u5316\u914d\u7f6e\uff0c\u4ee5\u4fdd\u7559\nQQ \u7684\u767b\u5f55\u4fe1\u606f\uff0c\u6216\u662f\u76f4\u63a5\u4fdd\u7559\u6240\u6709 QQ \u6570\u636e\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u82e5\u8981\u6301\u4e45\u5316\u767b\u5f55\u4fe1\u606f\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"-v ./nt_db:/chrono/.config/QQ/global/nt_db\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u82e5\u8981\u6301\u4e45\u5316 QQ \u7684\u6240\u6709\u6570\u636e\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"-v ./qq:/chrono/.config/QQ\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(h,n)})):h(n)}},4445:(n,e,i)=>{i.d(e,{Z:()=>w});var o=i(2784),t=i(2322);function c(n){const{mdxAdmonitionTitle:e,rest:i}=function(n){const e=o.Children.toArray(n),i=e.find((n=>o.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),c=e.filter((n=>n!==i)),r=i?.props.children;return{mdxAdmonitionTitle:r,rest:c.length>0?(0,t.jsx)(t.Fragment,{children:c}):null}}(n.children),c=n.title??e;return{...n,...c&&{title:c},children:i}}var r=i(6277),s=i(1077),l=i(211);const a={admonition:"admonition_IZjC",admonitionHeading:"admonitionHeading_uVvU",admonitionIcon:"admonitionIcon_HiR3",admonitionContent:"admonitionContent_bl22"};function d(n){let{type:e,className:i,children:o}=n;return(0,t.jsx)("div",{className:(0,r.Z)(l.k.common.admonition,l.k.common.admonitionType(e),a.admonition,i),children:o})}function h(n){let{icon:e,title:i}=n;return(0,t.jsxs)("div",{className:a.admonitionHeading,children:[(0,t.jsx)("span",{className:a.admonitionIcon,children:e}),i]})}function u(n){let{children:e}=n;return e?(0,t.jsx)("div",{className:a.admonitionContent,children:e}):null}function x(n){const{type:e,icon:i,title:o,children:c,className:r}=n;return(0,t.jsxs)(d,{type:e,className:r,children:[(0,t.jsx)(h,{title:o,icon:i}),(0,t.jsx)(u,{children:c})]})}function m(n){return(0,t.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,t.jsx)(m,{}),title:(0,t.jsx)(s.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(n){return(0,t.jsx)(x,{...f,...n,className:(0,r.Z)("alert alert--secondary",n.className),children:n.children})}function p(n){return(0,t.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,t.jsx)(p,{}),title:(0,t.jsx)(s.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(n){return(0,t.jsx)(x,{...v,...n,className:(0,r.Z)("alert alert--success",n.className),children:n.children})}function C(n){return(0,t.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,t.jsx)(C,{}),title:(0,t.jsx)(s.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(n){return(0,t.jsx)(x,{...N,...n,className:(0,r.Z)("alert alert--info",n.className),children:n.children})}function b(n){return(0,t.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Z={icon:(0,t.jsx)(b,{}),title:(0,t.jsx)(s.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};function y(n){return(0,t.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const z={icon:(0,t.jsx)(y,{}),title:(0,t.jsx)(s.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function Q(n){return(0,t.jsx)(x,{...z,...n,className:(0,r.Z)("alert alert--danger",n.className),children:n.children})}const M={...{note:j,tip:g,info:k,caution:function(n){return(0,t.jsx)(x,{...Z,...n,className:(0,r.Z)("alert alert--warning",n.className),children:n.children})},danger:Q},...{secondary:n=>(0,t.jsx)(j,{title:"secondary",...n}),important:n=>(0,t.jsx)(k,{title:"important",...n}),success:n=>(0,t.jsx)(g,{title:"success",...n}),warning:n=>(0,t.jsx)(Q,{title:"warning",...n})}};function w(n){const e=c(n),i=(o=e.type,M[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),M.info));var o;return(0,t.jsx)(i,{...e})}},9254:(n,e,i)=>{i.d(e,{F:()=>r});var o=i(9817),t=i(4445),c=i(2322);const r=()=>(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{type:"node",children:(0,c.jsxs)("p",{children:["\u6b64\u9875\u9762\u4ecd\u5728\u65bd\u5de5\u4e2d\uff01",(0,c.jsx)("br",{}),"\u5982\u679c\u4f60\u5e0c\u671b\u6211\u4eec\u5c3d\u5feb\u5b8c\u6210\u6b64\u9875\u9762\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,c.jsx)(o.Z,{to:"/more/community",children:"\u793e\u533a"}),"\u9014\u5f84\u53cd\u9988\u7ed9\u6211\u4eec\uff0c\u6211\u4eec\u4f1a\u4f18\u5148\u7f16\u5199\u4f60\u9700\u8981\u7684\u5185\u5bb9\uff01"]})})})},5392:(n,e,i)=>{i.d(e,{Zo:()=>s,ah:()=>c});var o=i(2784);const t=o.createContext({});function c(n){const e=o.useContext(t);return o.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function s({components:n,children:e,disableParentContext:i}){let s;return s=i?"function"==typeof n?n({}):n||r:c(n),o.createElement(t.Provider,{value:s},e)}}}]);