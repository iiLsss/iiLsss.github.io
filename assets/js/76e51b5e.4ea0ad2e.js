"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[3475],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),g=o,d=f["".concat(s,".").concat(g)]||f[g]||u[g]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},c="\u5355\u4f8b\u6a21\u5f0f\uff08Singleton Pattern\uff09",i={unversionedId:"design-patterns/singleton-pattern",id:"design-patterns/singleton-pattern",title:"\u5355\u4f8b\u6a21\u5f0f\uff08Singleton Pattern\uff09",description:"\u5355\u4f8b\u6a21\u5f0f\uff08Singleton Pattern\uff09\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u786e\u4fdd\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u5168\u5c40\u8bbf\u95ee\u70b9\u3002\u5355\u4f8b\u6a21\u5f0f\u901a\u5e38\u7528\u4e8e\u9700\u8981\u5168\u5c40\u5171\u4eab\u7684\u8d44\u6e90\uff0c\u5982\u6570\u636e\u5e93\u8fde\u63a5\u3001\u914d\u7f6e\u6587\u4ef6\u3001\u65e5\u5fd7\u8bb0\u5f55\u7b49\u3002",source:"@site/docs/design-patterns/singleton-pattern.md",sourceDirName:"design-patterns",slug:"/design-patterns/singleton-pattern",permalink:"/docs/design-patterns/singleton-pattern",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5355\u4f8b\u6a21\u5f0fsingleton-pattern"},"\u5355\u4f8b\u6a21\u5f0f\uff08Singleton Pattern\uff09"),(0,o.kt)("p",null,"\u5355\u4f8b\u6a21\u5f0f\uff08Singleton Pattern\uff09\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u786e\u4fdd\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u5168\u5c40\u8bbf\u95ee\u70b9\u3002\u5355\u4f8b\u6a21\u5f0f\u901a\u5e38\u7528\u4e8e\u9700\u8981\u5168\u5c40\u5171\u4eab\u7684\u8d44\u6e90\uff0c\u5982\u6570\u636e\u5e93\u8fde\u63a5\u3001\u914d\u7f6e\u6587\u4ef6\u3001\u65e5\u5fd7\u8bb0\u5f55\u7b49\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a\u95ed\u5305\u548c\u7acb\u5373\u6267\u884c\u51fd\u6570\uff08IIFE\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// IIFE\nconst Singleton = (function(){\n  let instance \n  \n  function createInstance() {\n    const object = new Object('I am this instance')\n    return object\n  }\n\n  return {\n    getInstance: function(){\n      if (!instance) {\n        instance = createInstance()\n      }\n    }\n  }\n})()\n\nconst instance1 = Singleton.getInstance()\nconst instance2 = Singleton.getInstance()\n\nconsole.log(instance1 === instance2) // true\n")))}u.isMDXComponent=!0}}]);