"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[4497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},c="JSX",l={unversionedId:"react/jsx",id:"react/jsx",title:"JSX",description:"\u5b98\u65b9\u89e3\u91ca",source:"@site/docs/react/1.jsx.md",sourceDirName:"react",slug:"/react/jsx",permalink:"/docs/react/jsx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/1.jsx.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"react",previous:{title:"React",permalink:"/docs/react/"},next:{title:"Virtual-DOM",permalink:"/docs/react/virtualDOM"}},i={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jsx"},"JSX"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/introducing-jsx.html"},(0,a.kt)("strong",{parentName:"a"},"\u5b98\u65b9\u89e3\u91ca"))),(0,a.kt)("p",null,"\u6982\u5ff5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSX \u662f JavaScript \u7684\u8bed\u6cd5\u6269\u5c55\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u63cf\u8ff0 UI \u5e94\u8be5\u5448\u73b0\u51fa\u5e94\u7528\u7684\u4ea4\u4e92\u672c\u8d28"),(0,a.kt)("li",{parentName:"ul"},"JSX \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"React.createElement(component, props, ...children)")," \u8bed\u6cd5\u7cd6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const element = <h1 className='greeting'>Hello, world!</h1>;\n")),(0,a.kt)("p",null,"Babel \u4f1a\u628a JSX \u8f6c\u8bd1\u6210\u4e00\u4e2a\u540d\u4e3a React.createElement() \u51fd\u6570\u8c03\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const element = React.createElement(\n  'h1',\n  { className: 'greeting' },\n  'Hello, world!'\n);\n")))}u.isMDXComponent=!0}}]);