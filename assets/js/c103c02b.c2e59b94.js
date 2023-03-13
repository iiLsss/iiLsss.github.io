"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[6519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,p[1]=r;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={slug:"env-var",title:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u6a21\u5f0f",authors:["iiLsss"],tags:["webpack","create-react-app","vue-cli"]},p="\u73af\u5883\u53d8\u91cf",r={permalink:"/blog/env-var",source:"@site/blog/2022-11-24-custom-env-var/index.mdx",title:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u6a21\u5f0f",description:"\u524d\u7aef\u9879\u76ee\u57fa\u4e8e webpack\u3001vite\u3001rollup \u7b49\u6784\u5efa\u5de5\u5177\u5b9e\u73b0\u5de5\u7a0b\u5316\uff0c\u5de5\u7a0b\u5316\u914d\u7f6e\u4e2d\u5b58\u5728development\u548cproduction\u73af\u5883\u914d\u7f6e\u3002\u4f46\u662f\u6b64\u73af\u5883\u914d\u7f6e\u9488\u5bf9\u6784\u5efa\u5de5\u5177\u4f7f\u7528\u672c\u5730\u5f00\u53d1\u6216\u6253\u5305\u6784\u5efa\u7b49\u529f\u80fd\u3002",date:"2022-11-24T00:00:00.000Z",formattedDate:"2022\u5e7411\u670824\u65e5",tags:[{label:"webpack",permalink:"/blog/tags/webpack"},{label:"create-react-app",permalink:"/blog/tags/create-react-app"},{label:"vue-cli",permalink:"/blog/tags/vue-cli"}],readingTime:5.59,hasTruncateMarker:!0,authors:[{name:"iiLsss",title:"doubi | FE-development-engineer",url:"https://github.com/iiLsss",imageURL:"https://avatars.githubusercontent.com/u/26485866?v=4",key:"iiLsss"}],frontMatter:{slug:"env-var",title:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u6a21\u5f0f",authors:["iiLsss"],tags:["webpack","create-react-app","vue-cli"]},prevItem:{title:"\u5b9e\u73b0\u5927\u91cf\u5f02\u6b65\u4efb\u52a1\u4e32\u884c",permalink:"/blog/2022/12/24/\u5b9e\u73b0\u5927\u91cf\u5f02\u6b65\u4efb\u52a1\u4e32\u884c"},nextItem:{title:"Picturing Architecture",permalink:"/blog/uml"}},o={authorsImageUrls:[void 0]},s=[{value:"\u5b9e\u73b0\u65b9\u6848",id:"\u5b9e\u73b0\u65b9\u6848",level:2},{value:"\u57fa\u4e8e Vue CLI \u7684\u9879\u76ee",id:"\u57fa\u4e8e-vue-cli-\u7684\u9879\u76ee",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:3},{value:"\u5b9e\u9645\u6548\u679c",id:"\u5b9e\u9645\u6548\u679c",level:3},{value:"\u57fa\u4e8e CRA \u7684\u9879\u76ee",id:"\u57fa\u4e8e-cra-\u7684\u9879\u76ee",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879-1",level:3},{value:"\u5b9e\u9645\u6548\u679c",id:"\u5b9e\u9645\u6548\u679c-1",level:3},{value:"\u57fa\u4e8e Vite \u7684\u9879\u76ee",id:"\u57fa\u4e8e-vite-\u7684\u9879\u76ee",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879-2",level:3},{value:"\u5b9e\u9645\u6548\u679c",id:"\u5b9e\u9645\u6548\u679c-2",level:3}],d={toc:s};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u524d\u7aef\u9879\u76ee\u57fa\u4e8e webpack\u3001vite\u3001rollup \u7b49\u6784\u5efa\u5de5\u5177\u5b9e\u73b0\u5de5\u7a0b\u5316\uff0c\u5de5\u7a0b\u5316\u914d\u7f6e\u4e2d\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"development"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"production"),"\u73af\u5883\u914d\u7f6e\u3002\u4f46\u662f\u6b64\u73af\u5883\u914d\u7f6e\u9488\u5bf9\u6784\u5efa\u5de5\u5177\u4f7f\u7528\u672c\u5730\u5f00\u53d1\u6216\u6253\u5305\u6784\u5efa\u7b49\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5e38\u5728\u9879\u76ee\u4e2d\u4e0d\u4ec5\u4ec5",(0,l.kt)("inlineCode",{parentName:"p"},"development"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"production"),"\u4e24\u79cd\u73af\u5883\u3002\u8fd8\u5b58\u5728\u6d4b\u8bd5\u73af\u5883\u548c\u9884\u53d1\u5e03\u73af\u5883\u3002\u6bcf\u4e2a\u73af\u5883\u90fd\u6709\u4e0d\u540c\u7684\u8bf7\u6c42\u63a5\u53e3\u3001\u7b2c\u4e09\u65b9 SDK \u914d\u7f6e\u9879\u3001CDN \u524d\u7f00\u3001\u9879\u76ee\u8df3\u8f6c\u94fe\u63a5\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u73af\u5883\u53d8\u91cf\u53bb\u7edf\u4e00\u7ef4\u62a4\u4ee5\u4e0a\u4fe1\u606f\u3002\u800c\u4e0d\u662f\u9879\u76ee\u4e2d\u6839\u636e\u5f53\u524d\u8bbf\u95ee\u57df\u540d\u6216\u5176\u4ed6\u76f8\u5173\u4fe1\u606f\u6765\u533a\u5206\u73af\u5883\u3002"),(0,l.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff0c\u9879\u76ee\u4e2d\u9700\u8981\u533a\u5206\u73af\u5883\u7684\u5730\u65b9\uff0c\u770b\u8d77\u6765\u773c\u82b1\u7f2d\u4e71\u3002\u5982\u679c\u9879\u76ee\u9047\u5230\u66f4\u6362\u57df\u540d\uff0c\u63a5\u53e3\u66f4\u6362\u5730\u5740\u7b49\u64cd\u4f5c\uff0c\u7ef4\u62a4\u56f0\u96be\u3002\u6839\u672c\u4e0d\u60f3\u78b0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const host = window.location.host\nlet api = 'https://api.domain.com'\nif (host === 'dev-domain.com') {\n  api = 'https://dev-api.domain.com'\n} else if (host === 'test-domain.com' || host === 'test2-domain.com') {\n  api = 'https://test-api.domain.com'\n} else if (host === 'pre-domain.com') {\n  api = 'https://pre-api.domain.com'\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9879\u76ee\u5c31\u7b80\u5355\u7528\u4e00\u53e5\u6765\u8868\u793a\uff0c\u628a\u4e0e\u73af\u5883\u76f8\u5173\u7edf\u4e00\u7ba1\u7406\u662f\u4e0d\u662f\u6e05\u6670\u660e\u786e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const api = process.env.BASE_URL\n")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u65b9\u6848"},"\u5b9e\u73b0\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6839\u76ee\u5f55\u589e\u52a0\u73af\u5883\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500src\n\u251c\u2500\u2500 .env          // \u516c\u5171\u53d8\u91cf\n\u251c\u2500\u2500 .env.dev      // \u672c\u5730\u5f00\u53d1\u574f\u5883\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 .env.test     // \u6d4b\u8bd5\u5f00\u53d1\u574f\u5883\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 .env.prod     // \u7ebf\u4e0a\u5f00\u53d1\u574f\u5883\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n//...\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u9879\u76ee\u5b58\u5728\u66f4\u591a\u73af\u5883\uff0c\u53ef\u4ee5\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},".env.[env-name]"))),(0,l.kt)("h2",{id:"\u57fa\u4e8e-vue-cli-\u7684\u9879\u76ee"},"\u57fa\u4e8e Vue CLI \u7684\u9879\u76ee"),(0,l.kt)("p",null,"\u6587\u6863\u8bf4\u660e Vue CLI",(0,l.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"mode-and-env")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4e0d\u540c\u73af\u5883\u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u76f8\u5e94\u914d\u7f6e\u9879")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.dev")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NODE_ENV = 'development'\n# \u73af\u5883\u53d8\u91cf\nVUE_APP_ENV = 'dev'\n# API-URL\nVUE_APP_API_URL = 'https://dev-api.domain.com'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NODE_ENV = 'production'\n# \u73af\u5883\u53d8\u91cf\nVUE_APP_ENV = 'test'\n# API-URL\nVUE_APP_API_URL = 'https://test-api.domain.com'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.prod")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NODE_ENV = 'production'\n# \u73af\u5883\u53d8\u91cf\nVUE_APP_ENV = 'prod'\n# API-URL\nVUE_APP_API_URL = 'https://api.domain.com'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"package.json \u589e\u52a0\u914d\u7f6e\u9879\u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  // \u4f7f\u7528.env.dev \u6587\u4ef6\u542f\u52a8\u9879\u76ee\n  "dev": "vue-cli-service serve --mode dev",\n  // \u4f7f\u7528.env.dev \u6587\u4ef6\u6253\u5305\u9879\u76ee\n  "build:prod": "vue-cli-service build --mode prod",\n  // \u4f7f\u7528.env.dev \u6587\u4ef6\u6253\u5305\u9879\u76ee\n  "build:test": "vue-cli-service build --mode test",\n},\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u5b58\u5728\u591a\u4e2a\u73af\u5883\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"vue-cli-service [build|serve] --mode [env-name]")),(0,l.kt)("p",{parentName:"admonition"},"\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u9700\u8981\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"VUE_APP"),"\u524d\u7f00"),(0,l.kt)("p",{parentName:"admonition"},"vue-cli \u9700\u8981\u518d\u73af\u5883\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"NODE_ENV"))),(0,l.kt)("h3",{id:"\u5b9e\u9645\u6548\u679c"},"\u5b9e\u9645\u6548\u679c"),(0,l.kt)("p",null,"\u914d\u7f6e\u597d\u4ee5\u4e0a\u5185\u5bb9\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b\u5b9e\u9645\u6548\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run dev"),"\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:8080"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9999).Z,width:"1145",height:"434"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build:test"),"\uff0c\u9879\u76ee\u6253\u5305\u540e\uff0c\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"dist"),"\u542f\u52a8\u670d\u52a1\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(687).Z,width:"1156",height:"426"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build:prod"),"\uff0c\u9879\u76ee\u6253\u5305\u540e\uff0c\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"dist"),"\u542f\u52a8\u670d\u52a1\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3343).Z,width:"1133",height:"450"})),(0,l.kt)("h2",{id:"\u57fa\u4e8e-cra-\u7684\u9879\u76ee"},"\u57fa\u4e8e CRA \u7684\u9879\u76ee"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables"},"cra-env")),(0,l.kt)("p",null,"create-react-app \u9700\u8981\u4f9d\u8d56\u7b2c\u4e09\u65b9\u5de5\u5177\u5e93",(0,l.kt)("a",{parentName:"p",href:"https://github.com/entropitor/dotenv-cli"},(0,l.kt)("inlineCode",{parentName:"a"},"dotenv-cli")),"\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u9879-1"},"\u914d\u7f6e\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56",(0,l.kt)("inlineCode",{parentName:"p"},"npm install dotenv-cli \u2014save-dev"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u73af\u5883\u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u76f8\u5e94\u914d\u7f6e\u9879"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.dev")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n# \u73af\u5883\u53d8\u91cf\nREACT_APP_ENV = dev\n\n# API-URL\nREACT_APP_API_URL = https://dev-api.domain.com\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u73af\u5883\u53d8\u91cf\nREACT_APP_ENV = test\n\n# API-URL\nREACT_APP_API_URL = https://test-api.domain.com\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.prod")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u73af\u5883\u53d8\u91cf\nREACT_APP_ENV = prod\n\n# API-URL\nREACT_APP_API_URL = https://api.domain.com\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"\u589e\u52a0\u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n"script": {\n  "start": "dotenv -e .env.dev react-scripts start",\n  "build:prod": "dotenv -e .env.prod react-scripts build",\n  "build:test": "dotenv -e .env.test react-scripts build",\n}\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u5b58\u5728\u591a\u4e2a\u73af\u5883\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv -e .env.[env-name] xxxx")),(0,l.kt)("p",{parentName:"admonition"},"\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u9700\u8981\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"REACT_APP"),"\u524d\u7f00")),(0,l.kt)("h3",{id:"\u5b9e\u9645\u6548\u679c-1"},"\u5b9e\u9645\u6548\u679c"),(0,l.kt)("p",null,"\u914d\u7f6e\u597d\u4ee5\u4e0a\u5185\u5bb9\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b\u5b9e\u9645\u6548\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm start"),"\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:3000"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1120).Z,width:"1230",height:"454"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build:test"),"\uff0c\u9879\u76ee\u6253\u5305\u540e\uff0c\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"build"),"\u542f\u52a8\u670d\u52a1\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4443).Z,width:"1189",height:"455"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build:prod"),"\uff0c\u9879\u76ee\u6253\u5305\u540e\uff0c\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"build"),"\u542f\u52a8\u670d\u52a1\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8232).Z,width:"1229",height:"441"})),(0,l.kt)("h2",{id:"\u57fa\u4e8e-vite-\u7684\u9879\u76ee"},"\u57fa\u4e8e Vite \u7684\u9879\u76ee"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://vitejs.cn/vite3-cn/guide/env-and-mode.html#env-files"},"\u73af\u5883\u53d8\u91cf\u548c\u6a21\u5f0f")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u9879-2"},"\u914d\u7f6e\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4e0d\u540c\u73af\u5883\u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u76f8\u5e94\u914d\u7f6e\u9879")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.dev")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u73af\u5883\u53d8\u91cf\nVITE_ENV = dev\n\n# API-URL\nVITE_API_URL = https://dev-api.domain.com\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u73af\u5883\u53d8\u91cf\nVITE_ENV = test\n\n# API-URL\nVITE_API_URL = https://test-api.domain.com\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".env.prod")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u73af\u5883\u53d8\u91cf\nVITE_ENV = prod\n\n# API-URL\nVITE_API_URL = https://prod-api.domain.com\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"package.json \u589e\u52a0\u914d\u7f6e\u9879\u547d\u4ee4\u6b64\u914d\u7f6e\u540c Vue-CLI")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "dev": "vite --mode dev",\n  "build:test": "vite build --mode test",\n  "build:prod": "vite build --mode prod",\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528")," \u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u53d6\u503c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env")," \u800c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"import.meta.env")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export const ENV = import.meta.env.VITE_ENV\nexport const API_URL = import.meta.env.VITE_API_URL\n")),(0,l.kt)("h3",{id:"\u5b9e\u9645\u6548\u679c-2"},"\u5b9e\u9645\u6548\u679c"),(0,l.kt)("p",null,"\u914d\u7f6e\u597d\u4ee5\u4e0a\u5185\u5bb9\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b\u5b9e\u9645\u6548\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run dev"),"\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4142).Z,width:"1019",height:"498"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build:test"),"\uff0c\u9879\u76ee\u6253\u5305\u540e\uff0c\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"dist"),"\u542f\u52a8\u670d\u52a1\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7375).Z,width:"1032",height:"499"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build:prod"),"\uff0c\u9879\u76ee\u6253\u5305\u540e\uff0c\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"dist"),"\u542f\u52a8\u670d\u52a1\uff0c\u6253\u5f00\u6d4f\u89c8\u5668")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8473).Z,width:"1043",height:"516"})))}m.isMDXComponent=!0},1120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cra-dev-7321351e00e8c81cd9a86d41837270bb.jpg"},8232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cra-prod-023d07a9033d27d1d7bdb79f7b60c248.jpg"},4443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cra-test-60fce46320733b993fa49d25a8ea74ba.jpg"},4142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vite-dev-77147a0d22bbb6255ba54ac78af35d78.jpg"},8473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vite-prod-fc86813a309b36d984a0efbfb973b47e.jpg"},7375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vite-test-03af1afb53212b7d0c726bb3064903b8.jpg"},9999:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vue-cli-dev-a3cbeb2a6279480045b458ddd024c11e.jpg"},3343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vue-cli-prod-9d61e98b23615d28dc362884c6640413.jpg"},687:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vue-cli-test-b037dd93d74d4b016a00d80ddb53cc9d.jpg"}}]);