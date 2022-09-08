"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[1841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"interview",title:"\u624b\u5199\u7cfb\u5217",tags:["\u9762\u8bd5","\u624b\u5199\u7cfb\u5217"]},l="\u624b\u5199\u7cfb\u5217",c={unversionedId:"interview/interview",id:"interview/interview",title:"\u624b\u5199\u7cfb\u5217",description:"1. call \u7684\u5b9e\u73b0",source:"@site/docs/interview/handwriting.md",sourceDirName:"interview",slug:"/interview/interview",permalink:"/docs/interview/interview",draft:!1,tags:[{label:"\u9762\u8bd5",permalink:"/docs/tags/\u9762\u8bd5"},{label:"\u624b\u5199\u7cfb\u5217",permalink:"/docs/tags/\u624b\u5199\u7cfb\u5217"}],version:"current",frontMatter:{id:"interview",title:"\u624b\u5199\u7cfb\u5217",tags:["\u9762\u8bd5","\u624b\u5199\u7cfb\u5217"]},sidebar:"interview",previous:{title:"function",permalink:"/docs/interview/function"},next:{title:"this",permalink:"/docs/interview/this"}},o={},u=[{value:"1. call \u7684\u5b9e\u73b0",id:"1-call-\u7684\u5b9e\u73b0",level:2},{value:"2. apply \u7684\u5b9e\u73b0",id:"2-apply-\u7684\u5b9e\u73b0",level:2},{value:"3. bind \u7684\u5b9e\u73b0",id:"3-bind-\u7684\u5b9e\u73b0",level:2},{value:"4. \u51fd\u6570\u67ef\u91cc\u5316",id:"4-\u51fd\u6570\u67ef\u91cc\u5316",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u624b\u5199\u7cfb\u5217"},"\u624b\u5199\u7cfb\u5217"),(0,a.kt)("h2",{id:"1-call-\u7684\u5b9e\u73b0"},"1. call \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function call(context, ...args) {\n  context = context || window;\n  let fn = Symbol('_fn');\n  context[fn] = this;\n  let result = context[fn](...args);\n  delete context[fn];\n  return result;\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5b9e\u73b0\u601d\u8def"),"1."),(0,a.kt)("h2",{id:"2-apply-\u7684\u5b9e\u73b0"},"2. apply \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function apply(context, args) {\n  context = context || window;\n  let fn = Symbol('_fn');\n  context[fn] = this;\n  let result = context[fn](...args);\n  delete context[fn];\n  return result;\n}\n")),(0,a.kt)("h2",{id:"3-bind-\u7684\u5b9e\u73b0"},"3. bind \u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function bind(context, ...args) {\n  let that = this;\n  return function newFn(...newFnArgs) {\n    if (this instanceof newFn) {\n      return newFn(...args, ...newFnArgs);\n    }\n    return that.apply(context, [...args, ...newFnArgs]);\n  };\n}\n")),(0,a.kt)("h2",{id:"4-\u51fd\u6570\u67ef\u91cc\u5316"},"4. \u51fd\u6570\u67ef\u91cc\u5316"),(0,a.kt)("p",null,"\u53ea\u4f20\u9012\u51fd\u6570\u4e00\u4e2a\u90e8\u5206\u53c2\u6570\u6765\u8c03\u7528\u5b83\uff0c\u8ba9\u4ed6\u5b83\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u53bb\u5904\u7406\u5269\u4f59\u7684\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function curry(func) {\n  let curried = (...args) =>{\n    if (...args.length < func.length) {\n      return (...reset) => curried(...args, ...reset)\n    }\n    return func(...args)\n  }\n  return curried\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5b9e\u73b0\u601d\u8def"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var abc = function (a, b, c) {\n  return [a, b, c];\n};\nvar curried = curry(abc);\n\ncurried(1)(2)(3); // => [1, 2, 3]\n\ncurried(1, 2)(3); // => [1, 2, 3]\n\ncurried(1, 2, 3); // => [1, 2, 3]\n\ncurried(1)(_, 3)(2); // => [1, 2, 3]\n"))))}p.isMDXComponent=!0}}]);