"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[4781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:0,description:"API reference for Docusaurus configuration file."},l="React",o={unversionedId:"react/index",id:"react/index",title:"React",description:"API reference for Docusaurus configuration file.",source:"@site/docs/react/index.md",sourceDirName:"react",slug:"/react/",permalink:"/docs/react/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"API reference for Docusaurus configuration file."},sidebar:"react",next:{title:"JSX",permalink:"/docs/react/jsx"}},c={},u=[{value:"JSX",id:"jsx",level:2},{value:"\u865a\u62df DOM",id:"\u865a\u62df-dom",level:2},{value:"fiber",id:"fiber",level:2},{value:"dom-diff",id:"dom-diff",level:2},{value:"\u5408\u6210\u4e8b\u4ef6",id:"\u5408\u6210\u4e8b\u4ef6",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/"},"https://beta.reactjs.org/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://pomb.us/build-your-own-react/"},"https://pomb.us/build-your-own-react/")),(0,a.kt)("h2",{id:"jsx"},"JSX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSX \u662f JavaScript \u7684\u8bed\u6cd5\u6269\u5c55\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u63cf\u8ff0 UI \u5e94\u8be5\u5448\u73b0\u51fa\u5e94\u7528\u7684\u4ea4\u4e92\u672c\u8d28"),(0,a.kt)("li",{parentName:"ul"},"JSX \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"React.createElement(component, props, ...children)")," \u8bed\u6cd5\u7cd6")),(0,a.kt)("h2",{id:"\u865a\u62df-dom"},"\u865a\u62df DOM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"React.createElement")," \u8fd4\u56de\u7684\u7ed3\u679c\u5c31\u662f\u865a\u62df DOM"),(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u771f\u662f DOM \u7684 js \u5bf9\u8c61")),(0,a.kt)("h2",{id:"fiber"},"fiber"),(0,a.kt)("p",null,"fiber \u662f\u6267\u884c\u5355\u5143\uff0c\u6570\u636e\u7ed3\u6784\u3002\u8282\u70b9\u5bf9\u5e94\u4e00\u4e2a fiber\u3002\u6839\u636e\u865a\u62df DOM \u751f\u6210 Fiber \u94fe\u8868\u7ed3\u6784\u3002"),(0,a.kt)("p",null,"fiber \u53ef\u4ee5\u5bf9\u4efb\u52a1\u5206\u89e3\uff0c\u5f62\u6210\u5de5\u4f5c\u5355\u5143\uff0c\u53ef\u4e2d\u65ad reconcile \u9636\u6bb5\u3002\u4fdd\u5b58\u72b6\u6001\u548c\u66f4\u65b0\u961f\u5217"),(0,a.kt)("h2",{id:"dom-diff"},"dom-diff"),(0,a.kt)("p",null,"dom-diff \u662f\u5f53\u524d fiber \u6811\u548c\u65b0\u7684\u865a\u62df DOM \u5bf9\u6bd4\u751f\u6210\u65b0\u7684 Fiber \u6811\u7684\u8fc7\u7a0b\u3002\n\u5176\u4e2d\u6709\u51e0\u4e2a\u4f18\u5316\u539f\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540c\u5c42\u6bd4\u8f83"),(0,a.kt)("li",{parentName:"ul"},"key \u4e0d\u540c\u76f4\u63a5\u5220\u9664\uff0c\u521b\u5efa\u65b0\u7684"),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"\u5408\u6210\u4e8b\u4ef6"},"\u5408\u6210\u4e8b\u4ef6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9 React \u5408\u6210\u4e8b\u4ef6\u7684\u7406\u89e3\uff1f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"React \u628a\u4e8b\u4ef6\u59d4\u6258\u5230 container \u8282\u70b9\u4e0a \uff08v17 \u4e4b\u524d \u662f document \u8282\u70b9\u4e0a\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5148\u5904\u7406\u539f\u751f\u4e8b\u4ef6 \u5192\u6ce1\u5230 document \u4e0a\u5728\u5904\u7406 react \u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"React \u4e8b\u4ef6\u7ed1\u5b9a\u7684\u65f6\u523b\u662f\u5728 reconciliation \u9636\u6bb5,\u4f1a\u5728\u539f\u751f\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u524d\u6267\u884c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76ee\u7684\u548c\u4f18\u52bf"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u6d4f\u89c8\u5668\u517c\u5bb9,React \u91c7\u7528\u7684\u662f\u9876\u5c42\u4e8b\u4ef6\u4ee3\u7406\u673a\u5236\uff0c\u80fd\u591f\u4fdd\u8bc1\u5192\u6ce1\u4e00\u81f4\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6279\u91cf\u66f4\u65b0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u7cfb\u7edf\u7684\u53d8\u66f4"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u6539\u4e8b\u4ef6\u59d4\u6258",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u7b2c\u4e00\u4e2a\u4fee\u6539\u70b9\u5c31\u662f\u66f4\u6539\u4e86\u4e8b\u4ef6\u59d4\u6258\u7ed1\u5b9a\u8282\u70b9\uff0c\u5728 16 \u7248\u672c\u4e2d\uff0cReact \u90fd\u4f1a\u628a\u4e8b\u4ef6\u7ed1\u5b9a\u5230\u9875\u9762\u7684 document \u5143\u7d20\u4e0a\uff0c\u8fd9\u5728\u591a\u4e2a React \u7248\u672c\u5171\u5b58\u7684\u60c5\u51b5\u4e0b\u5c31\u4f1a\u867d\u7136\u67d0\u4e2a\u8282\u70b9\u4e0a\u7684\u51fd\u6570\u8c03\u7528\u4e86 event.stopPropagation(),\u4f46\u8fd8\u662f\u4f1a\u5bfc\u81f4\u53e6\u5916\u4e00\u4e2a React \u7248\u672c\u4e0a\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u6ca1\u6709\u88ab\u963b\u6b62\u89e6\u53d1\uff0c\u6240\u4ee5\u5728 17 \u7248\u672c\u4e2d\u4f1a\u628a\u4e8b\u4ef6\u7ed1\u5b9a\u5230 render \u51fd\u6570\u7684\u8282\u70b9\u4e0a"))),(0,a.kt)("li",{parentName:"ul"},"\u53bb\u9664\u4e8b\u4ef6\u6c60",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"17 \u7248\u672c\u4e2d\u79fb\u9664\u4e86\u4e8b\u4ef6\u5bf9\u8c61\u6c60\uff0c\u8fd9\u662f\u56e0\u4e3a React \u5728\u65e7\u6d4f\u89c8\u5668\u4e2d\u91cd\u7528\u4e86\u4e0d\u540c\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\uff0c\u5e76\u5c06\u6240\u6709\u4e8b\u4ef6\u5b57\u6bb5\u5728\u5b83\u4eec\u4e4b\u524d\u8bbe\u7f6e\u4e3a null\u3002\u5728 React 16 \u53ca\u66f4\u65e9\u7248\u672c\u4e2d\uff0c\u4f7f\u7528\u8005\u5fc5\u987b\u8c03\u7528 event.persist() \u624d\u80fd\u6b63\u786e\u7684\u4f7f\u7528\u8be5\u4e8b\u4ef6\uff0c\u6216\u8005\u6b63\u786e\u8bfb\u53d6\u9700\u8981\u7684\u5c5e\u6027")))))))}m.isMDXComponent=!0}}]);