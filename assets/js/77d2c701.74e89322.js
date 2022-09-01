"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):T(T({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},P={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(r),k=l,s=c["".concat(i,".").concat(k)]||c[k]||P[k]||a;return r?n.createElement(s,T(T({ref:t},u),{},{components:r})):n.createElement(s,T({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,T=new Array(a);T[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,T[1]=p;for(var o=2;o<a;o++)T[o]=r[o];return n.createElement.apply(null,T)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>T,default:()=>P,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var n=r(7462),l=(r(7294),r(3905));const a={title:"HTTP",tags:["\u8ba1\u7b97\u673a\u7f51\u7edc","HTTP"]},T="HTTP",p={unversionedId:"network/http",id:"network/http",title:"HTTP",description:"HTTP \u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae(HyperText Transfer Protocol)\uff0c\u662f\u4e00\u4e2a\u5ba2\u6237\u7aef(\u7528\u6237)\u548c\u670d\u52a1\u7aef(\u7f51\u7ad9)\u4e4b\u95f4\u7684\u8bf7\u6c42\u548c\u5e94\u7b54\u7684\u6807\u51c6\uff0c\u901a\u5e38\u4f7f\u7528 TCP \u534f\u8bae\u3002\u901a\u8fc7\u4f7f\u7528\u7f51\u9875\u6d4f\u89c8\u5668\u3001\u7f51\u7edc\u722c\u866b\u6216\u8005\u5176\u4ed6\u5de5\u5177\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTP \u8bf7\u6c42\u5230\u670d\u52a1\u5668\u4e0a\u6307\u5b9a\u7aef\u53e3(\u9ed8\u8ba4\u7aef\u53e3 80)\u3002",source:"@site/docs/network/http.mdx",sourceDirName:"network",slug:"/network/http",permalink:"/docs/network/http",draft:!1,tags:[{label:"\u8ba1\u7b97\u673a\u7f51\u7edc",permalink:"/docs/tags/\u8ba1\u7b97\u673a\u7f51\u7edc"},{label:"HTTP",permalink:"/docs/tags/http"}],version:"current",frontMatter:{title:"HTTP",tags:["\u8ba1\u7b97\u673a\u7f51\u7edc","HTTP"]},sidebar:"docs",previous:{title:"TCP",permalink:"/docs/network/tcp"},next:{title:"DNS",permalink:"/docs/network/dns"}},i={},o=[{value:"\u7248\u672c\u53d1\u5c55\u5386\u7a0b",id:"\u7248\u672c\u53d1\u5c55\u5386\u7a0b",level:2},{value:"HTTP/1.1",id:"http11",level:3},{value:"HTTP/2",id:"http2",level:3},{value:"HTTP/3",id:"http3",level:3},{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",level:2},{value:"\u8de8\u57df",id:"\u8de8\u57df",level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:2},{value:"HTTPS",id:"https",level:2}],u={toc:o};function P(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http"},"HTTP"),(0,l.kt)("p",null,"HTTP \u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae(HyperText Transfer Protocol)\uff0c\u662f\u4e00\u4e2a\u5ba2\u6237\u7aef(\u7528\u6237)\u548c\u670d\u52a1\u7aef(\u7f51\u7ad9)\u4e4b\u95f4\u7684\u8bf7\u6c42\u548c\u5e94\u7b54\u7684\u6807\u51c6\uff0c\u901a\u5e38\u4f7f\u7528 TCP \u534f\u8bae\u3002\u901a\u8fc7\u4f7f\u7528\u7f51\u9875\u6d4f\u89c8\u5668\u3001\u7f51\u7edc\u722c\u866b\u6216\u8005\u5176\u4ed6\u5de5\u5177\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTP \u8bf7\u6c42\u5230\u670d\u52a1\u5668\u4e0a\u6307\u5b9a\u7aef\u53e3(\u9ed8\u8ba4\u7aef\u53e3 80)\u3002"),(0,l.kt)("p",null,"\u5c3d\u7ba1 TCP/IP \u534f\u8bae\u534f\u8bae\u662f\u4e92\u8054\u7f51\u4e0a\u6700\u6d41\u884c\u7684\u5e94\u7528\uff0c\u4f46\u662f\u5728 HTTP \u534f\u8bae\u4e2d\u5e76\u6ca1\u6709\u89c4\u5b9a\u5b83\u5fc5\u987b\u4f7f\u7528\u6216\u8005\u5b83\u652f\u6301\u7684\u5c42\u3002\u4e8b\u5b9e\u4e0a HTTP \u53ef\u4ee5\u5728\u4efb\u4f55\u4e92\u8054\u7f51\u534f\u8bae\u6216\u5176\u4ed6\u7f51\u7edc\u4e0a\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u7248\u672c\u53d1\u5c55\u5386\u7a0b"},"\u7248\u672c\u53d1\u5c55\u5386\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP/0.9\uff1a\u4e3a\u4e86\u4fbf\u4e8e\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u5904\u7406\uff0c\u91c7\u7528\u4e86\u7eaf\u6587\u672c\u683c\u5f0f\uff0c\u53ea\u80fd\u7528 get \u8bf7\u6c42\uff0c\u5728\u54cd\u5e94\u8bf7\u6c42\u4e4b\u540e\u4f1a\u7acb\u5373\u5173\u95ed\u8fde\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"HTTP/1.0\uff1a\u589e\u52a0\u4e86 0.9 \u7248\u672c\uff0c\u5f15\u5165\u4e86 HTTP Header \u7684\u6982\u5ff5\uff0c\u4f20\u8f93\u7684\u6570\u636e\u4e0d\u5728\u4ec5\u9650\u4e8e\u6587\u672c\uff0c\u53ef\u4ee5\u89e3\u6790\u56fe\u7247\u97f3\u4e50\u7b49\uff0c\u589e\u52a0\u4e86\u54cd\u5e94\u72b6\u6001\u7801\u548c post\u3001head \u7b49\u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"HTTP/1.1\uff1a\u6b63\u5f0f\u6807\u51c6\uff0c\u5141\u8bb8\u6301\u4e45\u94fe\u63a5\uff0c\u5141\u8bb8\u54cd\u5e94\u6570\u636e\u5206\u5757\uff0c\u589e\u52a0\u4e86\u7f13\u5b58\u7ba1\u7406\u548c\u63a7\u5236\uff0c\u589e\u52a0\u4e86 put\u3001delete \u7b49\u65b0\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"HTTP/2\uff1a\u4f7f\u7528 Hpack \u7b97\u6cd5\u538b\u7f29\u5934\u90e8\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002\u5141\u8bb8\u670d\u52a1\u7aef\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6570\u636e\uff0c\u4e8c\u8fdb\u5236\u534f\u8bae\u53ef\u4ee5\u53d1\u8d77\u591a\u4e2a\u8bf7\u6c42\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5bf9\u8bf7\u6c42\u52a0\u5bc6\u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"HTTP/3\uff1a\u57fa\u4e8e UDP \u7684 QUIC \u534f\u8bae")),(0,l.kt)("h3",{id:"http11"},"HTTP/1.1"),(0,l.kt)("p",null,"HTTP/1.1 \u6d88\u9664\u4e86\u5927\u91cf\u6b67\u4e49\u5185\u5bb9\u5e76\u5f15\u5165\u591a\u9879\u6539\u8fdb\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u53ef\u4ee5\u590d\u7528\uff0c\u8282\u7701\u4e86\u591a\u6b21\u6253\u5f00 TCP \u8fde\u63a5\u52a0\u8f7d\u7f51\u9875\u6587\u6863\u8d44\u6e90\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u7ba1\u7ebf\u5316\u6280\u672f\uff0c\u5141\u8bb8\u5728\u7b2c\u4e00\u4e2a\u5e94\u7b54\u88ab\u5b8c\u5168\u53d1\u9001\u4e4b\u524d\u5c31\u53d1\u9001\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\uff0c\u4ee5\u964d\u4f4e\u901a\u4fe1\u5ef6\u8fdf"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u54cd\u5e94\u5206\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u5165\u989d\u5916\u7684\u7f13\u5b58\u63a7\u5236\u673a\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5185\u5bb9\u534f\u5546\u673a\u5236\uff0c\u5305\u62ec\u8bed\u8a00\uff0c\u7f16\u7801\uff0c\u7c7b\u578b\u7b49\uff0c\u5e76\u5141\u8bb8\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7ea6\u5b9a\u4ee5\u6700\u5408\u9002\u7684\u5185\u5bb9\u8fdb\u884c\u4ea4\u6362"),(0,l.kt)("li",{parentName:"ul"},"\u51ed\u501f Host \u5934\uff0c\u80fd\u591f\u662f\u4e0d\u540c\u57df\u540d\u914d\u7f6e\u5728\u540c\u4e00\u4e2a IP \u5730\u5740\u7684\u670d\u52a1\u5668\u4e0a")),(0,l.kt)("p",null,"HTTP/1.1 \u5b58\u5728\u7684\u6027\u80fd\u74f6\u9888\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42/\u54cd\u5e94\u5934\u90e8(Header)\u672a\u7ecf\u538b\u7f29\u5c31\u53d1\u9001\uff0c\u9996\u90e8\u4fe1\u606f\u8d8a\u591a\u5ef6\u8fdf\u8d8a\u5927\u3002\u53ea\u80fd\u538b\u7f29 body \u90e8\u5206"),(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5197\u2ed3\u7684\u2fb8\u90e8\u3002\u6bcf\u6b21\u4e92\u76f8\u53d1\u9001\u76f8\u540c\u7684\u2fb8\u90e8\u9020\u6210\u7684\u6d6a\u8d39\u8f83\u591a"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u662f\u6309\u8bf7\u6c42\u987a\u5e8f\u54cd\u5e94\u7684\uff0c\u5982\u679c\u670d\u52a1\u5668\u54cd\u5e94\u6162\uff0c\u4f1a\u5bfc\u81f4\u5ba2\u6237\u7aef\u4e00\u76f4\u8bf7\u6c42\u4e0d\u5230\u6570\u636e\uff0c\u961f\u5934\u963b\u585e"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8bf7\u6c42\u4f18\u5148\u7ea7\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u53ea\u80fd\u4ece\u5ba2\u6237\u7aef\u5f00\u59cb\uff0c\u670d\u52a1\u7aef\u53ea\u80fd\u88ab\u52a8\u54cd\u5e94")),(0,l.kt)("h3",{id:"http2"},"HTTP/2"),(0,l.kt)("p",null,"HTTP/2 \u534f\u8bae\u662f\u57fa\u4e8e HTTPS \u7684\uff0c\u6240\u4ee5 HTTP/2 \u7684\u5b89\u5168\u6027\u4e5f\u662f\u6709\u4fdd\u969c\u7684"),(0,l.kt)("p",null,"\u76f8\u6bd4\u8f83 HTTP/1.x \u6027\u80fd\u4e0a\u7684\u6539\u8fdb\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u534f\u8bae\uff1a\u91c7\u7528\u4e8c\u8fdb\u5236\u534f\u8bae\u800c\u4e0d\u662f\u6587\u672c\u534f\u8bae\uff0c\u5934\u4fe1\u606f\u548c\u6570\u636e\u4f53\u90fd\u662f\u4e8c\u8fdb\u5236\uff0c\u5e76\u4e14\u7edf\u79f0\u4e3a\u5e27\uff1a",(0,l.kt)("strong",{parentName:"li"},"\u5934\u90e8\u4fe1\u606f\u5e27"),"\u548c",(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e27")),(0,l.kt)("li",{parentName:"ul"},"\u5934\u90e8\u538b\u7f29\uff1a\u56e0\u4e3a\u5728 headers \u5728\u4e00\u7cfb\u5217\u8bf7\u6c42\u4e2d\u5e38\u5e38\u662f\u76f8\u4f3c\u7684\uff0c\u5176\u79fb\u9664\u4e86\u91cd\u590d\u548c\u4f20\u8f93\u91cd\u590d\u6570\u636e\u7684\u6210\u672c\u3002\uff08HPACK \u7b97\u6cd5\uff1a\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u540c\u65f6\u7ef4\u62a4\u4e00\u5f20\u5934\u4fe1\u606f\u8868\uff0c\u6240\u6709\u5b57\u6bb5\u90fd\u4f1a\u5b58\u5165\u8fd9\u4e2a\u8868\uff0c\u751f\u6210\u4e00\u4e2a\u7d22\u5f15\u53f7\uff0c\u4ee5\u540e\u5c31\u4e0d\u7528\u53d1\u9001\u540c\u6837\u5b57\u6bb5\uff0c\u53ea\u53d1\u9001\u7d22\u5f15\u53f7\u5373\u53ef\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u8def\u590d\u7528\uff1a\u590d\u7528\u534f\u8bae\uff0c\u5e76\u884c\u7684\u8bf7\u6c42\u80fd\u5728\u540c\u4e00\u4e2a\u8fde\u63a5\u4e2d\u5904\u7406\uff0c\u79fb\u9664\u4e86 HTTP/1.x \u4e2d\u987a\u5e8f\u548c\u963b\u585e\u7684\u7ea6\u675f"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u63a8\u9001\uff1a\u5141\u8bb8\u670d\u52a1\u5668\u76f4\u63a5\u63d0\u4f9b\u6d4f\u89c8\u5668\u6e32\u67d3\u9875\u9762\u6240\u9700\u8d44\u6e90\uff0c\u800c\u65e0\u987b\u6d4f\u89c8\u5668\u5728\u6536\u5230\u3001\u89e3\u6790\u9875\u9762\u540e\u518d\u63d0\u8d77\u4e00\u8f6e\u8bf7\u6c42\uff0c\u8282\u7ea6\u4e86\u52a0\u8f7d\u65f6\u95f4")),(0,l.kt)("p",null,"\u8fd8\u5b58\u5728\u54ea\u4e9b\u7f3a\u9677\uff1a"),(0,l.kt)("p",null,"\u591a\u4e2a HTTP \u8bf7\u6c42\u5728\u590d\u7528\u4e00\u4e2a TCP \u8fde\u63a5\uff0c\u4e0b\u5c42\u7684 TCP \u534f\u8bae\u662f\u4e0d\u77e5\u9053\u6709\u591a\u5c11\u4e2a HTTP \u8bf7\u6c42\u7684\u3002\u6240\u4ee5\u4e00\u65e6\u53d1\u751f\u4e22\u5305\u73b0\u8c61\uff0c\u5c31\u4f1a\u89e6\u53d1 TCP \u7684\u91cd\u4f20\u673a\u5236\uff0c\u8fd9\u6837\u5728\u4e00\u4e2a TCP \u8fde\u63a5\u7684\u6240\u6709 HTTP \u8bf7\u6c42\u90fd\u5fc5\u987b\u7b49\u5f85\u8fd9\u4e2a\u4e22\u4e86\u7684\u5305\u88ab\u91cd\u4f20\u56de\u6765\u3002"),(0,l.kt)("h3",{id:"http3"},"HTTP/3"),(0,l.kt)("p",null,"\u5728 HTTP/3 \u4e2d\uff0c\u5f03\u7528 TCP \u534f\u8bae\uff0c\u6539\u4e3a\u4f7f\u7528 UDP \u534f\u8bae\u7684 QUIC \u534f\u8bae\u5b9e\u73b0\u3002\u6b64\u53d8\u5316\u4e3b\u8981\u4e3a\u4e86\u89e3\u51b3 HTTP/2 \u5b58\u5728\u7684\u961f\u5934\u963b\u585e\u95ee\u9898\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP/1.1 \u4e2d\u7684\u7ba1\u9053\u4f20\u8f93\u4e2d\u5982\u679c\u4e00\u4e2a\u8bf7\u6c42\u963b\u585e\u4e86\uff0c\u90a3\u4e48\u961f\u5217\u540e\u8bf7\u6c42\u4e5f\u7edf\u7edf\u88ab\u963b\u585e\u4f4f"),(0,l.kt)("li",{parentName:"ul"},"HTTP/2 \u591a\u4e2a\u8bf7\u6c42\u590d\u7528\u4e00\u4e2a TCP \u8fde\u63a5\uff0c\u53d7\u5230 TCP \u62e5\u585e\u63a7\u5236\u7684\u5f71\u54cd\uff0c\u5c11\u91cf\u7684\u4e22\u5305\u5c31\u53ef\u80fd\u5bfc\u81f4\u6574\u4e2a TCP \u8fde\u63a5\u4e0a\u7684\u6240\u6709\u6d41\u88ab\u963b\u585e")),(0,l.kt)("p",null,"\u8fd9\u90fd\u662f\u57fa\u4e8e TCP \u4f20\u8f93\u5c42\u7684\u95ee\u9898\uff0c\u6240\u4ee5 HTTP/3 \u628a\u4e0b\u5c42\u7684 TCP \u534f\u8bae\u6539\u6210\u4e86 UDP"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(1038).Z,width:"1118",height:"555"})),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u6cd5"},"\u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("p",null,"HTTP \u5b9a\u4e49\u4e86\u4e00\u7ec4\u8bf7\u6c42\u65b9\u6cd5\uff0c\u4ee5\u8868\u660e\u8981\u5bf9\u7ed9\u5b9a\u8d44\u6e90\u6267\u884c\u7684\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET\uff1a\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u4e00\u4efd\u6587\u6863\nHEAD\uff1a\u53ea\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u6587\u6863\u9996\u90e8\nPOST\uff1a\u5411\u670d\u52a1\u5668\u53d1\u9001\u9700\u8981\u5904\u7406\u7684\u6570\u636e\nPUT\uff1a\u5411\u670d\u52a1\u5668\u53d1\u9001\u9700\u8981\u5904\u7406\u7684\u6570\u636e\nDELETE\uff1a\u4ece\u670d\u52a1\u5668\u5220\u9664\u4e00\u4efd\u6587\u6863\nCONNECT\uff1aSever Error(\u670d\u52a1\u7aef\u9519\u8bef\u72b6\u6001\u7801)\nOPTIONS\uff1a\u51b3\u5b9a\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u4e0a\u6267\u884c\u90a3\u4e9b\u65b9\u6cd5\nTRACE\uff1a\u5bf9\u53ef\u80fd\u7ecf\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u4f20\u9001\u5230\u670d\u52a1\u5668\u4e0a\u53bb\u7684\u62a5\u6587\u8fdb\u884c\u8ffd\u8e2a\n")),(0,l.kt)("p",null,"GET \u548c POST \u7684\u533a\u522b\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET \u8bf7\u6c42\u4f1a\u88ab\u6d4f\u89c8\u5668\u4e3b\u52a8\u7f13\u5b58\u4e0b\u6765\uff0cPOST \u4e0d\u4f1a"),(0,l.kt)("li",{parentName:"ul"},"GET \u8bf7\u6c42\u53c2\u6570\u653e\u5728 URL \u4e2d\uff0cPOST \u653e\u5728\u8bf7\u6c42\u4f53\uff08\u6d4f\u89c8\u5668\u5b58\u5728 URL \u957f\u5ea6\u9650\u5236\uff09"),(0,l.kt)("li",{parentName:"ul"},"GET \u662f\u5e42\u7b49\u7684\uff0cPOST \u4e0d\u662f")),(0,l.kt)("h2",{id:"\u8de8\u57df"},"\u8de8\u57df"),(0,l.kt)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,l.kt)("h2",{id:"https"},"HTTPS"))}P.isMDXComponent=!0},1038:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/http-d6d61eb196dad832fa552a2ca2355db1.png"}}]);