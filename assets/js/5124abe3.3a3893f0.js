"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[3350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=o(n),m=r,d=s["".concat(u,".").concat(m)]||s[m]||c[m]||a;return n?l.createElement(d,p(p({ref:t},k),{},{components:n})):l.createElement(d,p({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<a;o++)p[o]=n[o];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var l=n(7462),r=(n(7294),n(3905));const a={title:"TCP",tags:["\u8ba1\u7b97\u673a\u7f51\u7edc","TCP"]},p="TCP&UDP",i={unversionedId:"network/tcp",id:"network/tcp",title:"TCP",description:"TCP&UDP \u662f\u8fd0\u8f93\u5c42\u4e24\u4e2a\u4e3b\u8981\u534f\u8bae\u3002\u6839\u636e\u6240\u4f7f\u7528\u7684\u7684\u534f\u8bae\u662f TCP \u6216 UDP\uff0c\u5206\u522b\u79f0\u4e4b\u4e3a TCP \u62a5\u6587\u6bb5\u6216 UDP \u7528\u6237\u6570\u636e\u62a5",source:"@site/docs/network/tcp.mdx",sourceDirName:"network",slug:"/network/tcp",permalink:"/docs/network/tcp",draft:!1,tags:[{label:"\u8ba1\u7b97\u673a\u7f51\u7edc",permalink:"/docs/tags/\u8ba1\u7b97\u673a\u7f51\u7edc"},{label:"TCP",permalink:"/docs/tags/tcp"}],version:"current",frontMatter:{title:"TCP",tags:["\u8ba1\u7b97\u673a\u7f51\u7edc","TCP"]},sidebar:"docs",previous:{title:"\u7f51\u7edc\u6a21\u578b\uff08OSI \u4e03\u5c42\u6a21\u578b\uff09",permalink:"/docs/network"},next:{title:"HTTP",permalink:"/docs/network/http"}},u={},o=[{value:"UDP",id:"udp",level:2},{value:"TCP",id:"tcp",level:2},{value:"\u91cd\u4f20\u673a\u5236",id:"\u91cd\u4f20\u673a\u5236",level:3},{value:"\u6ed1\u52a8\u7a97\u53e3",id:"\u6ed1\u52a8\u7a97\u53e3",level:3},{value:"\u6d41\u91cf\u63a7\u5236",id:"\u6d41\u91cf\u63a7\u5236",level:3},{value:"\u62e5\u585e\u63a7\u5236",id:"\u62e5\u585e\u63a7\u5236",level:3},{value:"\u8fde\u63a5\u7ba1\u7406",id:"\u8fde\u63a5\u7ba1\u7406",level:3},{value:"TCP \u8fde\u63a5\u7684\u5efa\u7acb\uff08\u4e09\u6b21\u63e1\u624b\uff09",id:"tcp-\u8fde\u63a5\u7684\u5efa\u7acb\u4e09\u6b21\u63e1\u624b",level:4},{value:"\u4e09\u6b21\u63e1\u624b\u7684\u539f\u56e0",id:"\u4e09\u6b21\u63e1\u624b\u7684\u539f\u56e0",level:5},{value:"TCP \u8fde\u63a5\u65ad\u5f00",id:"tcp-\u8fde\u63a5\u65ad\u5f00",level:4},{value:"\u56db\u6b21\u6325\u624b\u7684\u539f\u56e0",id:"\u56db\u6b21\u6325\u624b\u7684\u539f\u56e0",level:5}],k={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tcpudp"},"TCP&UDP"),(0,r.kt)("p",null,"TCP&UDP \u662f\u8fd0\u8f93\u5c42\u4e24\u4e2a\u4e3b\u8981\u534f\u8bae\u3002\u6839\u636e\u6240\u4f7f\u7528\u7684\u7684\u534f\u8bae\u662f TCP \u6216 UDP\uff0c\u5206\u522b\u79f0\u4e4b\u4e3a TCP \u62a5\u6587\u6bb5\u6216 UDP \u7528\u6237\u6570\u636e\u62a5"),(0,r.kt)("h2",{id:"udp"},"UDP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae UDP"),"\uff1a\u5728\u4f20\u9001\u6570\u636e\u4e4b\u524d\u4e0d\u9700\u8981\u5148\u5efa\u7acb\u8fde\u63a5\u3002\u7279\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65e0\u8fde\u63a5\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u6700\u5927\u52aa\u529b\u4ea4\u4ed8"),(0,r.kt)("li",{parentName:"ul"},"\u9762\u5411\u62a5\u6587"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u62e5\u585e\u63a7\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e00\u5bf9\u4e00\u3001\u4e00\u5bf9\u591a\u3001\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a\u7684\u4ea4\u4e92\u901a\u4fe1"),(0,r.kt)("li",{parentName:"ul"},"\u9996\u90e8\u5f00\u9500\u5c0f\uff0c\u53ea\u6709 8 \u4e2a\u5b57\u8282\uff0c\u6bd4 TCP \u7684 20 \u4e2a\u5b57\u8282\u7684\u9996\u90e8\u8981\u65ad")),(0,r.kt)("h2",{id:"tcp"},"TCP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f20\u8f93\u63a7\u5236\u534f\u8bae TCP"),": \u63d0\u4f9b\u9762\u5411\u8fde\u63a5\u7684\u670d\u52a1\u3002\u7279\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9762\u5411\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u5bf9\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9760\u4ea4\u4ed8"),(0,r.kt)("li",{parentName:"ul"},"\u53cc\u5168\u5de5\u901a\u4fe1"),(0,r.kt)("li",{parentName:"ul"},"\u9762\u5411\u5b57\u8282\u6d41")),(0,r.kt)("h3",{id:"\u91cd\u4f20\u673a\u5236"},"\u91cd\u4f20\u673a\u5236"),(0,r.kt)("p",null,"\u5728 TCP \u4e2d\uff0c\u5f53\u53d1\u9001\u7aef\u7684\u6570\u636e\u5230\u8fbe\u63a5\u6536\u4e3b\u673a\u662f\uff0c\u63a5\u6536\u7aef\u4e3b\u673a\u4f1a\u8fd4\u56de\u4e00\u4e2a\u786e\u8ba4\u5e94\u7b54\u7684\u6d88\u606f\uff0c\u8868\u793a\u5df2\u6536\u5230\u6d88\u606f\u3002\u5982\u4f55\u5728\u9519\u7efc\u590d\u6742\u7684\u7f51\u7edc\uff0c\u4fdd\u8bc1\u6b63\u5e38\u7684\u6570\u636e\u4f20\u8f93\uff1f\nTCP \u9488\u5bf9\u6570\u636e\u5305\u4e22\u5931\u7684\u60c5\u51b5\uff0c\u4f1a\u7528\u91cd\u4f20\u673a\u5236\u89e3\u51b3\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d85\u65f6\u91cd\u4f20\uff1a\u5728\u53d1\u9001\u6570\u636e\u662f\uff0c\u8bbe\u5b9a\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u5f53\u8d85\u8fc7\u6307\u5b9a\u65f6\u95f4\u540e\uff0c\u6ca1\u6709\u6536\u5230\u5bf9\u65b9\u7684 ACK \u786e\u8ba4\u5e94\u7b54\u62a5\u6587\uff0c\u5c31\u4f1a\u91cd\u53d1\u8be5\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u91cd\u4f20\uff1a\u5f53\u6536\u5230\u4e09\u4e2a\u76f8\u540c\u7684 ACK \u62a5\u6587\u65f6\uff0c\u4f1a\u5728\u5b9a\u65f6\u5668\u8fc7\u671f\u4e4b\u524d\uff0c\u91cd\u4f20\u4e22\u5931\u7684\u62a5\u6587"),(0,r.kt)("li",{parentName:"ul"},"SACK\uff1a\u5728 TCP \u5934\u90e8\u9009\u9879\u5b57\u6bb5\u91cc\u52a0\u4e00\u4e2a SACK\uff0c\u5b83\u53ef\u4ee5\u7f13\u5b58\u7684\u5730\u56fe\u53d1\u9001\u7ed9\u53d1\u9001\u65b9\uff0c\u8fd9\u6837\u53d1\u9001\u65b9\u5c31\u77e5\u9053\u90a3\u4e9b\u6570\u636e\u6ca1\u63a5\u5230\uff0c\u5c31\u53ef\u4ee5\u91cd\u4f20\u4e22\u5931\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"D-SACK\uff1a\u4e3b\u8981\u4f7f\u7528\u4e86 SACK \u544a\u8bc9\u53d1\u9001\u65b9\u6709\u54ea\u4e9b\u6570\u636e\u88ab\u91cd\u590d\u63a5\u6536\u4e86")),(0,r.kt)("h3",{id:"\u6ed1\u52a8\u7a97\u53e3"},"\u6ed1\u52a8\u7a97\u53e3"),(0,r.kt)("p",null,"TCP \u662f\u5168\u53cc\u5de5\u7684\uff0c\u6240\u6709\u53d1\u9001\u7aef\u6709\u53d1\u9001\u7f13\u5b58\u533a\uff0c\u63a5\u6536\u7aef\u6709\u63a5\u6536\u7f13\u5b58\u533a\u3002\u53d1\u9001\u65b9\u5728\u7b49\u5230\u786e\u8ba4\u5e94\u7b54\u8fd4\u56de\u4e4b\u524d\uff0c\u5fc5\u987b\u5728\u7f13\u51b2\u533a\u4fdd\u7559\u5df2\u53d1\u9001\u7684\u6570\u636e\u3002\u5982\u679c\u6309\u671f\u6536\u5230\u5e94\u7b54\uff0c\u6b64\u65f6\u6570\u636e\u5c31\u53ef\u4ee5\u4ece\u7f13\u5b58\u533a\u6e05\u9664"),(0,r.kt)("h3",{id:"\u6d41\u91cf\u63a7\u5236"},"\u6d41\u91cf\u63a7\u5236"),(0,r.kt)("p",null,"\u8ba9\u53d1\u9001\u65b9\u7684\u53d1\u9001\u901f\u7387\u4e0d\u8981\u592a\u5feb\uff0c\u8981\u8ba9\u63a5\u6536\u65b9\u6765\u5f97\u53ca\u63a5\u6536\u3002TCP \u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\u53ef\u4ee5\u8ba9\u53d1\u9001\u65b9\u6839\u636e\u63a5\u6536\u65b9\u7684\u5b9e\u9645\u63a5\u6536\u80fd\u529b\u63a7\u5236\u53d1\u9001\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("p",null,"\u5728\u5efa\u7acb\u8fde\u63a5\u65f6\uff0c\u63a5\u6536\u7aef\u4f1a\u544a\u8bc9\u53d1\u9001\u7aef\u81ea\u5df1\u7684\u7a97\u53e3\u5927\u5c0f(rwnd)\uff0c\u6bcf\u6b21\u63a5\u6536\u7aef\u6536\u5230\u6570\u636e\u540e\u90fd\u4f1a\u518d\u6b21\u786e\u8ba4(rwnd)\u5927\u5c0f\u3002\u5982\u679c\u503c\u4e3a 0\uff0c\u505c\u6b62\u53d1\u9001\u6570\u636e\u3002\u6b64\u65f6\u4f1a\u51fa\u73b0\u6b7b\u9501\u73b0\u8c61\u3002\u4e3a\u907f\u514d\u6b64\u95ee\u9898\uff0cTCP \u4f1a\u4e3a\u6bcf\u4e2a\u8fde\u63a5\u8bbe\u6709\u4e00\u4e2a\u6301\u7eed\u5b9a\u65f6\u5668\uff0c\u53ea\u8981 TCP \u8fde\u63a5\u4e00\u65b9\u6536\u5230\u5bf9\u65b9\u7684\u96f6\u7a97\u53e3\u901a\u77e5\uff0c\u5c31\u542f\u52a8\u6301\u7eed\u8ba1\u65f6\u5668\u3002\u5982\u679c\u6301\u7eed\u8ba1\u65f6\u5668\u8d85\u65f6\uff0c\u5c31\u4f1a\u53d1\u9001\u7a97\u53e3\u63a2\u6d4b\u62a5\u6587\u3002"),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," \u5982\u679c\u63a5\u6536\u65b9\u817e\u51fa\u51e0\u4e2a\u5b57\u8282\u5e76\u544a\u8bc9\u53d1\u9001\u65b9\u73b0\u5728\u6709\u51e0\u4e2a\u5b57\u8282\u7684\u7a97\u53e3\uff0c\u800c\u53d1\u9001\u65b9\u4f1a\u4e49\u65e0\u53cd\u987e\u7684\u53d1\u9001\u8fd9\u51e0\u4e2a\u5b57\u8282\uff0c\u8fd9\u5c31\u662f\u7cca\u6d82\u7a97\u53e3\u7efc\u5408\u75c7\u3002 "),"/}"),(0,r.kt)("h3",{id:"\u62e5\u585e\u63a7\u5236"},"\u62e5\u585e\u63a7\u5236"),(0,r.kt)("p",null,"\u9632\u6b62\u8fc7\u591a\u7684\u6570\u636e\u6ce8\u5165\u7f51\u7edc\u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u4f7f\u7f51\u7edc\u6c47\u603b\u7684\u8def\u7531\u5668\u6216\u94fe\u8def\u4e0d\u81f3\u8fc7\u8f7d\u3002"),(0,r.kt)("p",null,"\u62e5\u585e\u7a97\u53e3 cwnd\uff1a\u53d1\u9001\u65b9\u7ef4\u62a4\u7684\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\uff0c\u6839\u636e\u7f51\u7edc\u7684\u62e5\u585e\u7a0b\u5ea6\u52a8\u6001\u53d8\u5316\u7684\uff0c\u53ea\u8981\u53d1\u9001\u65b9\u6ca1\u6709\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u63a5\u6536\u5230 ACK \u5e94\u7b54\u62a5\u6587\uff0c\u4e5f\u5c31\u662f\u53d1\u9001\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u91cd\u4f20"),"\uff0c\u5c31\u4f1a\u8ba4\u4e3a\u7f51\u7edc\u51fa\u73b0\u4e86\u62e5\u585e\u3002\u5c06\u7a97\u53e3\u53d8\u5c0f\u3002",(0,r.kt)("strong",{parentName:"p"},"\u53d1\u9001\u65b9\u8ba9\u81ea\u5df1\u7684\u53d1\u9001\u7a97\u53e3\u7b49\u4e8e\u62e5\u585e\u7a97\u53e3")),(0,r.kt)("p",null,"\u62e5\u585e\u63a7\u5236\u4e3b\u8981\u56db\u4e2a\u7b97\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6162\u542f\u52a8\uff1a\u5f53\u53d1\u9001\u65b9\u5f00\u59cb\u53d1\u9001\u6570\u636e\u65f6\uff0c\u7531\u5c0f\u5230\u5927\u9010\u6e10\u589e\u5927\u53d1\u9001\u7a97\u53e3\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u7531\u5c0f\u5230\u5927\u9010\u6e10\u589e\u5927\u62e5\u585e\u7a97\u53e3\u6570\u503c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u53d1\u9001\u65b9\u6bcf\u6536\u5230\u4e00\u4e2a ACK\uff0c\u62e5\u585e\u7a97\u53e3 cwnd \u7684\u5927\u5c0f\u5c31\u4f1a\u52a0 1"))),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u585e\u907f\u514d\uff1a\u5f53\u62e5\u585e\u7a97\u53e3 cwnd \u8d85\u8fc7\u6162\u542f\u52a8\u95e8\u9650 ssthresh \u5c31\u4f1a\u8fdb\u884c\u62e5\u585e\u907f\u514d\u7b97\u6cd5\u3002\u5c06\u539f\u672c\u7684\u6162\u542f\u52a8\u7b97\u6cd5\u7684\u6307\u6570\u589e\u957f\u53d8\u6210\u4e86\u7ebf\u6027\u589e\u957f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u63a5\u6536\u4e00\u4e2a ACK \u65f6\uff0ccwnd \u589e\u52a0 1/cwnd"))),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u585e\u53d1\u751f\uff1a\u5f53\u7f51\u7edc\u51fa\u73b0\u62e5\u585e\uff0c\u4e5f\u5c31\u662f\u53d1\u751f\u6570\u636e\u5305\u91cd\u4f20\uff0c\u91cd\u4f20\u673a\u5236\u4e3b\u8981\u6709\u4e24\u79cd\uff1a\u8d85\u65f6\u91cd\u4f20\u3001\u5feb\u901f\u91cd\u4f20",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d1\u751f\u8d85\u65f6\u91cd\u4f20\uff0c\u5c06 ssthresh \u8bbe\u4e3a cwnd/2 cwnd \u91cd\u7f6e\u4e3a 1"))),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u6062\u590d\uff1a\u4e00\u822c\u4e0e\u5feb\u901f\u91cd\u4f20\u540c\u65f6\u4f7f\u7528\uff0c\u5feb\u901f\u6062\u590d\u7b97\u6cd5\u8ba4\u4e3a\uff0c\u8fd8\u80fd\u6536\u5230\u4e09\u4e2a\u91cd\u590d ACK \u8bf4\u660e\u7f51\u7edc\u6ca1\u6709\u90a3\u4e48\u7cdf\u7cd5\uff0c\u6240\u4ee5\u6ca1\u6709\u5fc5\u8981\u5411\u8d85\u65f6\u90a3\u4e48\u5f3a\u70c8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cwnd \u8bbe\u7f6e cwnd/2\uff0c ssthresh = cwnd")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ssthresh \u6162\u542f\u52a8\u95e8\u9650")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cwnd < ssthresh(\u6162\u542f\u52a8\u95e8\u9650) \u4f7f\u7528\u6162\u5f00\u59cb\u7b97\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"cwnd > ssthresh \u4f7f\u7528\u62e5\u585e\u907f\u514d\u7b97\u6cd5")),(0,r.kt)("h3",{id:"\u8fde\u63a5\u7ba1\u7406"},"\u8fde\u63a5\u7ba1\u7406"),(0,r.kt)("p",null,"TCP \u662f\u9762\u5411\u8fde\u63a5\u7684\u534f\u8bae\u3002TCP \u8fd0\u8f93\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u91ca\u653e\u662f\u6bcf\u4e00\u6b21\u9762\u5411\u8fde\u63a5\u7684\u901a\u4fe1\u5fc5\u4e0d\u53ef\u5c11\u7684\u8fc7\u7a0b\u3002\u56e0\u6b64\uff0c\u8fd0\u8f93\u8fde\u63a5\u5c31\u6709\u4e09\u4e2a\u9636\u6bb5\uff0c\u5373\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u5efa\u7acb"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u4f20\u9001"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u91ca\u653e"),"\u3002"),(0,r.kt)("h4",{id:"tcp-\u8fde\u63a5\u7684\u5efa\u7acb\u4e09\u6b21\u63e1\u624b"},"TCP \u8fde\u63a5\u7684\u5efa\u7acb\uff08\u4e09\u6b21\u63e1\u624b\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6435).Z,width:"1124",height:"614"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u521d\uff0c\u5ba2\u6237\u7aef A \u548c\u670d\u52a1\u7aef B \u7684 TCP \u8fdb\u7a0b\u90fd\u662f\u5904\u4e8e CLOSE(\u5173\u95ed)\u72b6\u6001\u3002\u4e00\u5f00\u59cb\u670d\u52a1\u7aef B \u51c6\u5907\u63a5\u6536\u5ba2\u6237\u8fdb\u7a0b\u7684\u8fde\u63a5\u8bf7\u6c42\uff0c\u5904\u4e8e LISTEN(\u6536\u542c)\u72b6\u6001\uff0c\u7b49\u5f85\u5ba2\u6237\u7684\u8fde\u63a5\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef A \u5411 B \u53d1\u51fa\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\uff0c\u8fd9\u662f\u9996\u90e8\u4e2d\u7684\u540c\u6b65\u4f4d SYN = 1\uff0c\u540c\u65f6\u9009\u62e9\u4e00\u4e2a\u521d\u59cb\u5e8f\u53f7 seq=x\u3002\u5ba2\u6237\u8fdb\u7a0b\u8fdb\u5165 SYN-SENT(\u540c\u6b65\u5df2\u53d1\u9001)\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"B \u6536\u5230\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u540e\uff0c\u5982\u540c\u610f\u8fde\u63a5\uff0c\u5219\u5411 A \u53d1\u9001\u786e\u8ba4\u3002\u5728\u786e\u8ba4\u62a5\u6587\u6bb5\u4e2d\u5e94\u628a SYN \u4f4d\u548c ACK \u4f4d\u90fd\u7f6e 1\uff0c\u786e\u8ba4\u53f7\u662f ack = x + 1\uff0c\u540c\u65f6\u4e5f\u4e3a\u81ea\u5df1\u9009\u62e9\u4e00\u4e2a\u521d\u59cb\u5e8f\u53f7 seq=y\u3002\u670d\u52a1\u7aef\u8fdb\u7a0b\u8fdb\u5165 SYN-RCVD(\u540c\u6b65\u6536\u5230)\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"A \u6536\u5230 B \u7684\u786e\u8ba4\u540e\uff0c\u8fd8\u8981\u5411 B \u7ed9\u51fa\u786e\u8ba4\u3002\u786e\u8ba4\u62a5\u6587\u6bb5\u7684 ACK \u7f6e 1\uff0c\u786e\u8ba4\u53f7 ack = y +1\uff0c\u800c\u81ea\u5df1\u7684\u5e8f\u53f7 seq = x + 1\u3002\u8fd9\u662f TCP \u8fde\u63a5\u5df2\u5efa\u7acb\uff0cA \u4e5f\u8fdb\u5165 ESTABLISHED(\u5df2\u5efa\u7acb\u8fde\u63a5)\u72b6\u6001\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"TCP \u89c4\u5b9a\uff0cSYN \u62a5\u6587\u6bb5(\u5373 SYN=1 \u7684\u62a5\u6587\u6bb5)\u4e0d\u80fd\u643a\u5e26\u6570\u636e\u3002\u56e0\u6b64\u524d\u4e24\u6b21\u63e1\u624b\u662f\u4e0d\u5141\u8bb8\u643a\u5e26\u6570\u636e\u3002\u7b2c\u4e09\u6b21\u63e1\u624b\u53ef\u4ee5\u643a\u5e26\u6570\u636e")),(0,r.kt)("h5",{id:"\u4e09\u6b21\u63e1\u624b\u7684\u539f\u56e0"},"\u4e09\u6b21\u63e1\u624b\u7684\u539f\u56e0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u9632\u6b62\u65e7\u7684\u91cd\u590d\u8fde\u63a5\u521d\u59cb\u9020\u6210\u6df7\u4e71\u662f",(0,r.kt)("strong",{parentName:"li"},"\u9996\u8981\u539f\u56e0")),(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u8d44\u6e90\u6d6a\u8d39"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u6b65\u53cc\u53d1\u521d\u59cb\u5316\u5e8f\u5217\u53f7")),(0,r.kt)("h4",{id:"tcp-\u8fde\u63a5\u65ad\u5f00"},"TCP \u8fde\u63a5\u65ad\u5f00"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3014).Z,width:"1144",height:"755"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u4f20\u8f93\u7ed3\u675f\u540e\uff0c\u53cc\u65b9\u90fd\u53ef\u4ee5\u91ca\u653e\u8fde\u63a5\u3002\u5ba2\u6237\u7aef A \u6253\u7b97\u5173\u95ed\uff0c\u53d1\u9001\u62a5\u6587\u6bb5 FIN=1 seq=u\uff0c\u8fdb\u5165 FIN-WAIT-1 \u72b6\u6001\uff0c\u7b49\u5f85 B \u786e\u8ba4"),(0,r.kt)("li",{parentName:"ul"},"B \u6536\u5230\u65ad\u5f00\u62a5\u6587\u540e\u53d1\u51fa\u786e\u8ba4\uff0cack = u + 1\uff0c\u8fdb\u5165 CLOSE-WATI \u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"A \u6536\u5230 B \u7684\u786e\u8ba4\uff0c\u8fdb\u5165 FIN-WAIT-2 \u72b6\u6001\uff0c\u7b49\u5f85 B \u53d1\u51fa\u7684\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u82e5 B \u6ca1\u6709\u8981\u5411 A \u53d1\u9001\u7684\u6570\u636e\uff0c\u53d1\u9001\u62a5\u6587\u6bb5 FIN=1\uff0cack = u + 1\uff0c\u8fdb\u5165 LSAT-ACK \u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"A \u6536\u5230 B \u7684\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\u540e\uff0c\u5bf9\u6b64\u53d1\u53bb\u786e\u8ba4\u3002ACK=1,seq=w+1,seq=u+1\u3002\u8fdb\u5165 TIME-WAIT \u72b6\u6001\u3002\u7b49\u5f85 2MSL \u8ba1\u65f6\u5668"),(0,r.kt)("li",{parentName:"ul"},"B \u6536\u5230\u4e86 A \u7684\u786e\u8ba4\uff0c\u8fdb\u5165 CLOSE \u72b6\u6001")),(0,r.kt)("h5",{id:"\u56db\u6b21\u6325\u624b\u7684\u539f\u56e0"},"\u56db\u6b21\u6325\u624b\u7684\u539f\u56e0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u8fde\u63a5\u662f\uff0c\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u9001 FIN \u65f6\uff0c\u4ec5\u4ec5\u8868\u793a\u5ba2\u6237\u7aef\u4e0d\u5728\u53d1\u9001\u6570\u636e\u4e86\u4f46\u662f\u8fd8\u80fd\u63a5\u53d7\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u63a5\u6536\u5ba2\u6237\u7aef\u7684 FIN \u62a5\u6587\u65f6\uff0c\u5148\u56de\u4e00\u4e2a ACK \u5e94\u7b54\u62a5\u6587\uff0c\u800c\u670d\u52a1\u7aef\u53ef\u80fd\u8fd8\u6709\u6570\u636e\u9700\u8981\u5904\u7406\u548c\u53d1\u9001\uff0c\u7b49\u670d\u52a1\u7aef\u4e0d\u5728\u53d1\u9001\u6570\u636e\u65f6\uff0c\u624d\u53d1\u9001 FIN \u62a5\u6587\u7ed9\u5ba2\u6237\u7aef\u6765\u8868\u793a\u540c\u610f\u73b0\u5728\u5173\u95ed\u8fde\u63a5")))}c.isMDXComponent=!0},3014:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/tcp-four-9842fe2130693fd4c147b2d833e598b9.png"},6435:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/tcp-three-83858df4b827dccfc60f805b8dfc2eea.png"}}]);