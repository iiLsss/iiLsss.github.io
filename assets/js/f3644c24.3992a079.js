"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[9181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},i="FLV",o={unversionedId:"media/FLV",id:"media/FLV",title:"FLV",description:"FLV(Flash Video) \u662fAdobe\u516c\u53f8\u8bbe\u8ba1\u5f00\u53d1\u7684\u4e00\u79cd\u6d41\u884c\u7684\u6d41\u5a92\u4f53\u683c\u5f0f\uff0c\u7531\u4e8e\u5176\u89c6\u9891\u6587\u4ef6\u4f53\u79ef\u8f7b\u5de7\u3001\u5c01\u88c5\u7b80\u5355\u7b49\u7279\u70b9\uff0c\u4f7f\u5176\u5f88\u9002\u5408\u5728\u4e92\u8054\u7f51\u4e0a\u8fdb\u884c\u5e94\u7528\u3002FLV\u5c01\u88c5\u683c\u5f0f\u7684\u6587\u4ef6\u540e\u7f00\u901a\u5e38\u4e3a.flv\u3002",source:"@site/docs/media/FLV.md",sourceDirName:"media",slug:"/media/FLV",permalink:"/docs/media/FLV",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HLS",permalink:"/docs/media/HLS"}},p={},c=[{value:"FLV\u683c\u5f0f\u534f\u8bae",id:"flv\u683c\u5f0f\u534f\u8bae",level:2},{value:"HTTP-FLV",id:"http-flv",level:2},{value:"flv.js",id:"flvjs",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:4}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flv"},"FLV"),(0,l.kt)("p",null,"FLV(Flash Video) \u662fAdobe\u516c\u53f8\u8bbe\u8ba1\u5f00\u53d1\u7684\u4e00\u79cd\u6d41\u884c\u7684\u6d41\u5a92\u4f53\u683c\u5f0f\uff0c\u7531\u4e8e\u5176\u89c6\u9891\u6587\u4ef6\u4f53\u79ef\u8f7b\u5de7\u3001\u5c01\u88c5\u7b80\u5355\u7b49\u7279\u70b9\uff0c\u4f7f\u5176\u5f88\u9002\u5408\u5728\u4e92\u8054\u7f51\u4e0a\u8fdb\u884c\u5e94\u7528\u3002FLV\u5c01\u88c5\u683c\u5f0f\u7684\u6587\u4ef6\u540e\u7f00\u901a\u5e38\u4e3a.flv\u3002"),(0,l.kt)("h2",{id:"flv\u683c\u5f0f\u534f\u8bae"},"FLV\u683c\u5f0f\u534f\u8bae"),(0,l.kt)("p",null,"FLV\u5305\u62ec\u6587\u4ef6\u5934\u548c\u6587\u4ef6\u4f53\u4e24\u90e8\u5206\uff0c\u5176\u4e2d\u6587\u4ef6\u4f53\u7531\u4e00\u7cfb\u5217\u7684Tag\u7ec4\u6210\u3002\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8273).Z,width:"1309",height:"424"})),(0,l.kt)("p",null,"FLV\u6587\u4ef6\u7684\u8be6\u7ec6\u7ed3\u6784\u3002\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4009).Z,width:"613",height:"542"})),(0,l.kt)("h2",{id:"http-flv"},"HTTP-FLV"),(0,l.kt)("p",null,"HTTP-FLV\u5c06\u6d41\u5a92\u4f53\u6570\u636e\u5c01\u88c5\u6210FLV\u683c\u5f0f\uff0c\u7136\u540e\u901a\u8fc7HTTP\u534f\u8bae\u4f20\u8f93\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,"HTTP\u534f\u8bae\u4e2d\u6709\u4e2a\u7ea6\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"content-length"),"\u5b57\u6bb5\uff0cHTTP\u7684body\u90e8\u5206\u7684\u957f\u5ea6\u3002\u8bf7\u6c42\u54cd\u5e94\u5b58\u5728\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u5ba2\u6237\u7aef\u63a5\u6536\u8fd9\u4e2a\u957f\u5ea6\u7684\u6570\u636e\u540e\u5c31\u8ba4\u4e3a\u6570\u636e\u4f20\u8f93\u5b8c\u6210\u4e86\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u5ba2\u6237\u7aef\u5c31\u4e00\u76f4\u63a5\u6536\u6570\u636e\uff0c\u77e5\u9053\u670d\u52a1\u5668\u8ddf\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u65ad\u5f00\u3002"),(0,l.kt)("p",null,"HTTP-FLV\u5229\u7528\u4e86HTTP\u7684\u5206\u5757\u4f20\u8f93\uff0c\u53d1\u9001FLV\u6570\u636e\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u77e5\u9053\u6d41\u957f\u5ea6\uff0c\u6240\u4ee5\u4e0d\u4f1a\u586b\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"content-length"),"\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u6765\u81ea\u864e\u7259\u76f4\u64ad\u6d41\u54cd\u5e94\u5934",title:"\u6765\u81ea\u864e\u7259\u76f4\u64ad\u6d41\u54cd\u5e94\u5934"},"access-control-allow-origin: *\nAccess-Control-Expose-Headers: alt-svc,cdncip,cdnsip\ncdncip: 2409:8a00:dda:9e80:84c5:dfc3:95d7:243e\ncdnsip: 2409:8c20:1834:50d:503::3f8\nConnection: close\nContent-Type: video/x-flv\nDate: Sun, 18 Sep 2022 00:32:33 GMT\nServer: Tengine\nVia: cache10.cn4333[,0]\nX-Tengine-Type: live\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Connection: close"),"\u5b57\u6bb5\uff0c\u8868\u793a\u91c7\u7528\u7684\u77ed\u8fde\u63a5\uff0c\u5219\u76f4\u63a5\u53ef\u4ee5\u901a\u8fc7\u670d\u52a1\u5668\u5173\u95ed\u8fde\u63a5\u6765\u786e\u5b9a\u6d88\u606f\u7684\u4f20\u8f93\u957f\u5ea6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f18\u52bf\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP-FLV\u4f9d\u9760MIME\u7684\u7279\u6027\uff0c\u6839\u636e\u534f\u8bae\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"content-type"),"\u6765\u9009\u62e9\u76f8\u5e94\u7684\u7a0b\u5e8f\u53bb\u5904\u7406\u54cd\u5e94\u7684\u5185\u5bb9\uff0c\u4f7f\u5f97\u6d41\u5a92\u4f53\u53ef\u4ee5\u901a\u8fc7HTTP\u4f20\u8f93\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u8f83\u4e8eRTMP\u534f\u8bae\uff0cHTTP-FLV\u80fd\u591f\u8f83\u597d\u7684\u7a7f\u900f\u9632\u706b\u5899\uff0c\u4ed6\u662f\u57fa\u4e8eHTTP/80\u4f20\u8f93\uff0c\u6709\u6548\u907f\u514d\u88ab\u9632\u706b\u5899\u62e6\u622a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7HTTP302\u8df3\u8f6c\u7075\u6d3b\u8c03\u5ea6/\u8d1f\u8f7d\u5747\u8861\uff0c\u652f\u6301\u4f7f\u7528HTTPS\u52a0\u5bc6\u4f20\u8f93")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u8db3\uff1a")),(0,l.kt)("p",null,"\u7531\u4e8eHTTP-FLV\u7684\u4f20\u8f93\u7279\u6027\uff0c\u4f1a\u8ba9\u6d41\u5a92\u4f53\u8d44\u6e90\u7f13\u5b58\u5728\u672c\u5730\u5ba2\u6237\u7aef\uff0c\u5728\u4fdd\u5bc6\u6027\u65b9\u9762\u4e0d\u591f\u597d\u3002"),(0,l.kt)("h2",{id:"flvjs"},"flv.js"),(0,l.kt)("p",null,"flv.js\u53ef\u4ee5\u89e3\u6790FLV\u6587\u4ef6\uff0c\u4ece\u4e2d\u53d6\u51fa\u97f3\u89c6\u9891\u6570\u636e\u5e76\u8f6c\u6210BMFF\u7247\u6bb5(mp4\u683c\u5f0f)\uff0c\u7136\u540e\u4ea4\u7ed9HTML5\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"<video>"),"\u6807\u7b7e\u8fdb\u884c\u64ad\u653e\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f7f\u5f97\u6d4f\u89c8\u5668\u5728\u4e0d\u501f\u52a9Flash\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u64ad\u653eFLV\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"flv.js\u7684\u5de5\u4f5c\u539f\u7406\u975e\u5e38\u7b80\u5355\uff0c\u5b83\u9996\u5148\u5c06FLV\u6587\u4ef6\u8f6c\u6210ISO BMFF(mp4)\u7247\u6bb5\uff0c\u7136\u540e\u901a\u8fc7\u6d4f\u89c8\u5668\u7684Media Source Extensions \u5c06MP4\u7247\u6bb5\u64ad\u653e\u51fa\u6765\u3002\u5177\u4f53\u7684\u5904\u7406\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3964).Z,width:"1004",height:"1072"})),(0,l.kt)("p",null,"\u4ece\u4e0a\u56fe\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0cflv.js\u64ad\u653e\u5668\u9996\u5148\u901a\u8fc7Fetch Stream Loader\u6a21\u5757\u4ece\u4e91\u7aef\u83b7\u53d6FLV\u6570\u636e\uff1b\u4e4b\u540e\u7531IO Controller\u6a21\u5757\u63a7\u5236\u6570\u636e\u7684\u52a0\u8f7d\uff1b\u6570\u636e\u52a0\u8f7d\u597d\u540e\uff0c\u8c03\u7528FLV Demux\u5c06\u6587\u4ef6\u8fdb\u884c\u89e3\u5c01\u88c5\uff0c\u5f97\u5230\u97f3\u89c6\u9891\u6570\u636e\uff1b\u6700\u540e\uff0c\u5c06\u97f3\u89c6\u9891\u6570\u636e\u4ea4\u7531MP4 Remux\u6a21\u5757\uff0c\u91cd\u65b0\u5bf9\u97f3\u89c6\u9891\u6570\u636e\u5c01\u88c5\u6210MP4\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u5c06\u5c01\u88c5\u597d\u7684MP4\u7247\u6bb5\u4ea4\u7531\u6d4f\u89c8\u5668\u7684Media Source Extensions\u5904\u7406\u540e\uff0c\u6700\u7ec8\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u89c6\u9891\u5e76\u542c\u5230\u58f0\u97f3\u4e86\u3002\u6240\u4ee5\u603b\u4f53\u6765\u8bf4\uff0cflv.js\u6700\u4e3b\u8981\u7684\u5de5\u4f5c\u662f\u505a\u4e86\u5a92\u4f53\u5a92\u4f53\u683c\u5f0f\u7684\u8f6c\u5c01\u88c5\u5de5\u4f5c\uff0c\u5177\u4f53\u7684\u64ad\u653e\u5de5\u4f5c\u5219\u662f\u7531\u6d4f\u89c8\u5668\u6765\u5b8c\u6210\u7684\u3002"),(0,l.kt)("p",null,"flv.js\u7684\u56db\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch Stream Loader \u901a\u8fc7url\u83b7\u53d6http-flv\u5a92\u4f53\u6d41\u3002\u5176\u4e3b\u8981\u5de5\u4f5c\u5c31\u662f\u901a\u8fc7HTTP\u534f\u8bae\u4e0b\u8f7d\u5a92\u4f53\u6570\u636e\uff0c\u7136\u540e\u5c06\u4e0b\u8f7d\u540e\u7684\u6570\u636e\u4ea4\u7ed9IO Controller"),(0,l.kt)("li",{parentName:"ul"},"IO Controller \u63a7\u5236\u6a21\u5757\uff0c\u8d1f\u8d23\u6570\u636e\u7684\u52a0\u8f7d\u3001\u7ba1\u7406\u7b49\u5de5\u4f5c\u3002\u5b83\u4f1a\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u4f20\u7ed9FLV Demux"),(0,l.kt)("li",{parentName:"ul"},"FLV Demux \u8d1f\u8d23\u53bb\u6389FLV\u6587\u4ef6\u5934\u3001TAG\u5934\u7b49\uff0c\u62ff\u5230H264/AAC\u7684\u88f8\u6d41\u3002"),(0,l.kt)("li",{parentName:"ul"},"MP4 Remux \u5c06H264/AAC\u88f8\u6d41\u52a0\u4e0aMP4\u5934\uff0c\u91c7\u7528\u591a\u5a92\u4f53\u683c\u5f0f\u534f\u8bae\u662fBMFF\u3002\u5c06\u5c01\u88c5\u597d\u7684\u4f20\u7ed9\u6d4f\u89c8\u5668Date Source\u5bf9\u8c61")),(0,l.kt)("h4",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://time.geekbang.org/column/article/145000"},"HLS\uff1a\u5b9e\u73b0\u4e00\u5bf9\u591a\u76f4\u64ad\u7cfb\u7edf\u7684\u5fc5\u5907\u534f\u8bae"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/leixiaohua1020/article/details/17934487"},"FLV\u5c01\u88c5\u683c\u5f0f\u5206\u6790\u5668"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/vczf/p/14813438.html"},"HTTP-FLV\u534f\u8bae"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/King_weng/article/details/106080645"},"HTTP-FLV\u534f\u8bae"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1083699"},"HTTP-FLV\u76f4\u64ad\u521d\u63a2")))}u.isMDXComponent=!0},4009:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flv-details-09267d5dd450e12e0038eb8433d4e83e.png"},3964:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flv-source-128b6e700f45a675517a04b71011656c.png"},8273:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flv-383c57c16c7e8e4cef0bc5cfa670d2b9.png"}}]);