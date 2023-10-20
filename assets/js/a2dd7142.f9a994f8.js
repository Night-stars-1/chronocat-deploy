"use strict";(self.webpackChunk_chronocat_docs=self.webpackChunk_chronocat_docs||[]).push([[6381],{1354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>q,contentTitle:()=>V,default:()=>A,frontMatter:()=>T,metadata:()=>P,toc:()=>E});var o=t(2322),a=t(5392),r=t(9817),s=t(2784),i=t(6277),l=t(4126),c=t(7267),d=t(164),u=t(2424),h=t(2244),m=t(4155);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}(t);return function(e){const n=(0,h.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const o=(0,c.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=f(e),[r,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[l,c]=j({queryString:t,groupId:o}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,m.Nk)(t);return[o,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),p=(()=>{const e=l??u;return x({value:e,tabValues:a})?e:null})();(0,d.Z)((()=>{p&&i(p)}),[p]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var b=t(9741);const g={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function w(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=s[t].value;o!==a&&(d(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...r,className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=v(e);return(0,o.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,o.jsx)(w,{...e,...n}),(0,o.jsx)(k,{...e,...n})]})}function C(e){const n=(0,b.Z)();return(0,o.jsx)(y,{...e,children:p(e.children)},String(n))}const I={tabItem:"tabItem_OMyP"};function Z(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(I.tabItem,a),hidden:t,children:n})}var N=t(3599),S=t(9254);const T={title:"\u5feb\u901f\u8d77\u6b65"},V=void 0,P={unversionedId:"develop/satori/quickstart",id:"develop/satori/quickstart",title:"\u5feb\u901f\u8d77\u6b65",description:"\u672c\u8282\u7b80\u5355\u4ecb\u7ecd\u4e86\u4f7f\u7528 Satori \u53d1\u9001\u6d88\u606f\u548c\u63a5\u6536\u6d88\u606f\u7684\u57fa\u672c\u6b65\u9aa4\u3002\u9605\u8bfb\u672c\u8282\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5b89\u88c5\u5e76\u8fd0\u884c Chronocat\u3002",source:"@site/docs/develop/satori/quickstart.mdx",sourceDirName:"develop/satori",slug:"/develop/satori/quickstart",permalink:"/develop/satori/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/chrononeko/chronocat/tree/master/packages/docs/docs/develop/satori/quickstart.mdx",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u8d77\u6b65"},sidebar:"developSatori",previous:{title:"\u5f00\u59cb",permalink:"/develop/satori/"},next:{title:"\u57fa\u7840",permalink:"/develop/satori/fundamentals"}},q={},E=[{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f",level:2},{value:"\u63a5\u6536\u6d88\u606f",id:"\u63a5\u6536\u6d88\u606f",level:2}];function z(e){const n=Object.assign({p:"p",h2:"h2",img:"img",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N.f,{}),"\n",(0,o.jsx)(n.p,{children:"\u672c\u8282\u7b80\u5355\u4ecb\u7ecd\u4e86\u4f7f\u7528 Satori \u53d1\u9001\u6d88\u606f\u548c\u63a5\u6536\u6d88\u606f\u7684\u57fa\u672c\u6b65\u9aa4\u3002\u9605\u8bfb\u672c\u8282\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5b89\u88c5\u5e76\u8fd0\u884c Chronocat\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u719f\u6089\u7684 API \u6d4b\u8bd5\u5de5\u5177\u6765\u8fdb\u884c API \u7684\u6d4b\u8bd5\uff0c\u6216\u76f4\u63a5\u4f7f\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u8fdb\u884c\u5c1d\u8bd5\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u53d1\u9001\u6d88\u606f",children:"\u53d1\u9001\u6d88\u606f"}),"\n",(0,o.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5148\u4ece\u53d1\u9001\u4e00\u6761\u300c\u4f60\u597d\uff01\u300d\u7684\u6d88\u606f\u5f00\u59cb\u3002"}),"\n",(0,o.jsxs)(C,{groupId:"api-tools",children:[(0,o.jsxs)(Z,{value:"postman",label:"Postman",children:[(0,o.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6253\u5f00 Postman \u4e0a\u7684 Team Chrononeko\u3002"}),(0,o.jsx)(r.Z,{className:"button button--secondary button--lg",to:"https://www.postman.com/chrononeko",children:(0,o.jsx)("span",{children:"Postman \u4e0a\u7684 Team Chrononeko"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u4e0a\u7684 Team Chrononeko",src:t(4960).Z+"",width:"2560",height:"801"})}),(0,o.jsx)(n.p,{children:"\u70b9\u51fb\u300cChronocat Satori\u300d\uff0c\u6253\u5f00 Chronocat Satori \u7684 API \u9875\u9762\u3002"}),(0,o.jsx)(n.p,{children:"\u63a5\u7740\uff0c\u70b9\u51fb\u300cCollections\u300d\uff0c\u70b9\u51fb\u300cChronocat Satori\u300d\uff0c\u7136\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u300cFork\u300d\u6309\u94ae\uff0c\u590d\u523b\u4e00\u4efd\nChronocat Satori \u670d\u52a1\u3002"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u590d\u523b",src:t(5296).Z+"",width:"2560",height:"708"})}),(0,o.jsx)(n.p,{children:"\u590d\u523b\u540e\uff0c\u70b9\u51fb\u9009\u9879\u5361\u4e2d\u7684\u300cVariables\u300d\u3002\u5728\u8fd9\u91cc\u6839\u636e\u4f60\u7684 Satori\n\u670d\u52a1\u6240\u5904\u7684\u4f4d\u7f6e\u586b\u5199\u5404\u4e2a\u53d8\u91cf\uff1b\u5982\u679c\u4f60\u4f7f\u7528\u672c\u673a Chronocat\uff0c\u90a3\u4e48\u65e0\u9700\u4fee\u6539\u8fd9\u91cc\u7684\u914d\u7f6e\u3002"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u53d8\u91cf",src:t(4840).Z+"",width:"2560",height:"620"})}),(0,o.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u6210\u4e4b\u540e\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u300cSave\u300d\u6309\u94ae\uff0c\u4fdd\u5b58\u4f60\u5bf9\u53d8\u91cf\u505a\u51fa\u7684\u4fee\u6539\u3002\u7531\u4e8e\u4f60\u4f7f\u7528\u7684\u662f\u4f60\u81ea\u5df1\u590d\u523b\u540e\u7684\nAPI \u96c6\u5408\uff0c\u4f60\u7684\u53d8\u91cf\u6570\u636e\u4e0d\u4f1a\u6cc4\u6f0f\u3002"}),(0,o.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u70b9\u51fb\u5de6\u4fa7\u680f\u7684\u300c\u53d1\u9001\u6d88\u606f\u300d\uff0c\u7136\u540e\u70b9\u51fb\u9009\u9879\u5361\u4e0a\u7684\u300cBody\u300d\uff0c\u5c06 ",(0,o.jsx)(n.code,{children:"channel_id"}),"\n\u66ff\u6362\u4e3a\u6d4b\u8bd5\u7fa4\u7684\u7fa4\u53f7\uff0c",(0,o.jsx)(n.code,{children:"content"})," \u66ff\u6362\u4e3a ",(0,o.jsx)(n.code,{children:"\u4f60\u597d"}),"\u3002\u70b9\u51fb\u53f3\u4fa7\u7684\u300cSend\u300d\u6309\u94ae\uff0c\u4f60\u4f1a\u770b\u5230\u6d88\u606f\u6210\u529f\u53d1\u9001\u3002"]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u8bf7\u6c42",src:t(6325).Z+"",width:"2560",height:"508"})})]}),(0,o.jsx)(Z,{value:"none",label:"\u4e0d\u4f7f\u7528\u5de5\u5177",children:(0,o.jsx)(S.F,{})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u63a5\u6536\u6d88\u606f",children:"\u63a5\u6536\u6d88\u606f"}),"\n",(0,o.jsx)(n.p,{children:"Satori \u901a\u8fc7 WebSocket \u5b9e\u73b0\u4e8b\u4ef6\u5206\u53d1\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5efa\u7acb WebSocket \u8fde\u63a5\u3002"}),"\n",(0,o.jsxs)(C,{groupId:"api-tools",children:[(0,o.jsxs)(Z,{value:"postman",label:"Postman",children:[(0,o.jsx)(n.p,{children:"\u56de\u5230 Postman \u4e0a\u7684 Team Chrononeko \u9875\u9762\uff0c\u4ecd\u7136\u70b9\u51fb\u300cChronocat Satori\u300d\uff0c\u6253\u5f00\nChronocat Satori \u7684 API \u9875\u9762\u3002"}),(0,o.jsx)(n.p,{children:"\u8fd9\u6b21\uff0c\u70b9\u51fb\u300cCollections\u300d\uff0c\u70b9\u51fb\u300cChronocat Satori \u4e8b\u4ef6\u300d\uff0c\u7136\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u300cFork\u300d\u6309\u94ae\uff0c\u590d\u523b\u4e00\u4efd\nChronocat Satori \u4e8b\u4ef6\u670d\u52a1\u3002"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u590d\u523b",src:t(5296).Z+"",width:"2560",height:"708"})}),(0,o.jsx)(n.p,{children:"\u590d\u523b\u540e\uff0c\u70b9\u51fb\u9009\u9879\u5361\u4e2d\u7684\u300cVariables\u300d\u3002\u5728\u8fd9\u91cc\u6839\u636e\u4f60\u7684 Satori\n\u670d\u52a1\u6240\u5904\u7684\u4f4d\u7f6e\u586b\u5199\u5404\u4e2a\u53d8\u91cf\uff1b\u5982\u679c\u4f60\u4f7f\u7528\u672c\u673a Chronocat\uff0c\u90a3\u4e48\u65e0\u9700\u4fee\u6539\u8fd9\u91cc\u7684\u914d\u7f6e\u3002"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u53d8\u91cf",src:t(4840).Z+"",width:"2560",height:"620"})}),(0,o.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u6210\u4e4b\u540e\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u300cSave\u300d\u6309\u94ae\uff0c\u4fdd\u5b58\u4f60\u5bf9\u53d8\u91cf\u505a\u51fa\u7684\u4fee\u6539\u3002\u7531\u4e8e\u4f60\u4f7f\u7528\u7684\u662f\u4f60\u81ea\u5df1\u590d\u523b\u540e\u7684\nAPI \u96c6\u5408\uff0c\u4f60\u7684\u53d8\u91cf\u6570\u636e\u4e0d\u4f1a\u6cc4\u6f0f\u3002"}),(0,o.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u70b9\u51fb\u5de6\u4fa7\u680f\u7684\u300c\u4e8b\u4ef6\u300d\uff0c\u7136\u540e\u5728\u300cMessage\u300d\u9009\u9879\u5361\u4e2d\u586b\u5199\u4e0b\u9762\u7684\u6d88\u606f\uff1a"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "op": 3,\n  "body": {\n    "token": "<\u4f60\u7684 Token>"\n  }\n}\n'})}),(0,o.jsx)(n.p,{children:"\u70b9\u51fb\u53f3\u4fa7\u7684\u300cConnect\u300d\u6309\u94ae\uff0c\u7d27\u63a5\u7740\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684\u300cSend\u300d\u6309\u94ae\uff0c\u4f60\u4f1a\u770b\u5230 Postman\n\u6210\u529f\u53d1\u9001\u4e86\u8ba4\u8bc1\u6d88\u606f\uff0c\u4e14 Chronocat \u5df2\u7ecf\u6210\u529f\u8ba4\u8bc1\uff0c\u5f00\u59cb\u63a8\u9001\u4e8b\u4ef6\u3002\u4f60\u73b0\u5728\u53ef\u4ee5\u63a5\u6536\u6d88\u606f\u4e86\u3002"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Postman \u8bf7\u6c42",src:t(392).Z+"",width:"2560",height:"986"})})]}),(0,o.jsx)(Z,{value:"none",label:"\u4e0d\u4f7f\u7528\u5de5\u5177",children:(0,o.jsx)(S.F,{})})]})]})}const A=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(z,e)})):z(e)}},4445:(e,n,t)=>{t.d(n,{Z:()=>T});var o=t(2784),a=t(2322);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),s=t?.props.children;return{mdxAdmonitionTitle:s,rest:r.length>0?(0,a.jsx)(a.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var s=t(6277),i=t(1077),l=t(211);const c={admonition:"admonition_IZjC",admonitionHeading:"admonitionHeading_uVvU",admonitionIcon:"admonitionIcon_HiR3",admonitionContent:"admonitionContent_bl22"};function d(e){let{type:n,className:t,children:o}=e;return(0,a.jsx)("div",{className:(0,s.Z)(l.k.common.admonition,l.k.common.admonitionType(n),c.admonition,t),children:o})}function u(e){let{icon:n,title:t}=e;return(0,a.jsxs)("div",{className:c.admonitionHeading,children:[(0,a.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,a.jsx)("div",{className:c.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:o,children:r,className:s}=e;return(0,a.jsxs)(d,{type:n,className:s,children:[(0,a.jsx)(u,{title:o,icon:t}),(0,a.jsx)(h,{children:r})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,a.jsx)(m,{...f,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,a.jsx)(m,{...v,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function g(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,a.jsx)(g,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,a.jsx)(m,{...w,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function y(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};function I(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Z={icon:(0,a.jsx)(I,{}),title:(0,a.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function N(e){return(0,a.jsx)(m,{...Z,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}const S={...{note:x,tip:b,info:k,caution:function(e){return(0,a.jsx)(m,{...C,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:N},...{secondary:e=>(0,a.jsx)(x,{title:"secondary",...e}),important:e=>(0,a.jsx)(k,{title:"important",...e}),success:e=>(0,a.jsx)(b,{title:"success",...e}),warning:e=>(0,a.jsx)(N,{title:"warning",...e})}};function T(e){const n=r(e),t=(o=n.type,S[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),S.info));var o;return(0,a.jsx)(t,{...n})}},3599:(e,n,t)=>{t.d(n,{f:()=>r});var o=t(2784),a=t(2322);const r=()=>((0,o.useEffect)((()=>(window.document.documentElement.dataset.area="develop",()=>{delete window.document.documentElement.dataset.area}))),(0,a.jsx)(a.Fragment,{}))},9254:(e,n,t)=>{t.d(n,{F:()=>s});var o=t(9817),a=t(4445),r=t(2322);const s=()=>(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{type:"node",children:(0,r.jsxs)("p",{children:["\u6b64\u9875\u9762\u4ecd\u5728\u65bd\u5de5\u4e2d\uff01",(0,r.jsx)("br",{}),"\u5982\u679c\u4f60\u5e0c\u671b\u6211\u4eec\u5c3d\u5feb\u5b8c\u6210\u6b64\u9875\u9762\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(o.Z,{to:"/more/community",children:"\u793e\u533a"}),"\u9014\u5f84\u53cd\u9988\u7ed9\u6211\u4eec\uff0c\u6211\u4eec\u4f1a\u4f18\u5148\u7f16\u5199\u4f60\u9700\u8981\u7684\u5185\u5bb9\uff01"]})})})},5296:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/postman-fork-3ff1591fabe1a233f84db908e6c25bc1.png"},6325:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/postman-request-9f15ec40feefe06463d80caaa255afa2.png"},4960:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/postman-team-7cbabee678d46417e444804aaf47c923.png"},4840:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/postman-variables-cc8ce48172e25107525dc707b51f3b94.png"},392:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/postman-websocket-41e116633e64b56588bd5b41ae1e73a7.png"},5392:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var o=t(2784);const a=o.createContext({});function r(e){const n=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||s:r(e),o.createElement(a.Provider,{value:i},n)}}}]);