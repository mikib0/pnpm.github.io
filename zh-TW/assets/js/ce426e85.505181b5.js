"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5209],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,u=m["".concat(d,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(u,p(p({ref:t},s),{},{components:n})):a.createElement(u,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>k});var a=n(2081),r=n(4604),l=(n(9496),n(9613)),p=["components"],i={id:"add",title:"pnpm add <pkg>"},d=void 0,o={unversionedId:"cli/add",id:"version-6.x/cli/add",title:"pnpm add <pkg>",description:"\u5b89\u88dd\u4e00\u500b\u5957\u4ef6\u8207\u5176\u6240\u6709\u4f9d\u8cf4\u7684\u5957\u4ef6\u3002 \u9810\u8a2d\u72c0\u6cc1\u4e0b\uff0c\u65b0\u5b89\u88dd\u7684\u5957\u4ef6\u5c07\u88ab\u8996\u70ba\u751f\u7522\u74b0\u5883\u4f9d\u8cf4\u5957\u4ef6\u5b89\u88dd\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/zh-TW/6.x/cli/add",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-6.x/docs",previous:{title:"Scripts",permalink:"/zh-TW/6.x/scripts"},next:{title:"pnpm install",permalink:"/zh-TW/6.x/cli/install"}},s={},k=[{value:"\u547d\u4ee4\u7c21\u8981",id:"\u547d\u4ee4\u7c21\u8981",level:2},{value:"\u652f\u63f4\u7684\u5957\u4ef6\u4f4d\u7f6e",id:"\u652f\u63f4\u7684\u5957\u4ef6\u4f4d\u7f6e",level:2},{value:"\u5f9e npm registry \u5b89\u88dd",id:"\u5f9e-npm-registry-\u5b89\u88dd",level:3},{value:"\u5f9e\u5de5\u4f5c\u5340\u5b89\u88dd",id:"\u5f9e\u5de5\u4f5c\u5340\u5b89\u88dd",level:3},{value:"\u5f9e\u672c\u6a5f\u6a94\u6848\u7cfb\u7d71\u5b89\u88dd",id:"\u5f9e\u672c\u6a5f\u6a94\u6848\u7cfb\u7d71\u5b89\u88dd",level:3},{value:"\u5f9e\u9060\u7aef\u4f3a\u670d\u5668\u7684 Tar \u58d3\u7e2e\u6a94\u5b89\u88dd",id:"\u5f9e\u9060\u7aef\u4f3a\u670d\u5668\u7684-tar-\u58d3\u7e2e\u6a94\u5b89\u88dd",level:3},{value:"\u5f9e Git \u5132\u5b58\u5eab\u5b89\u88dd",id:"\u5f9e-git-\u5132\u5b58\u5eab\u5b89\u88dd",level:3},{value:"Options",id:"options",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:k};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b89\u88dd\u4e00\u500b\u5957\u4ef6\u8207\u5176\u6240\u6709\u4f9d\u8cf4\u7684\u5957\u4ef6\u3002 \u9810\u8a2d\u72c0\u6cc1\u4e0b\uff0c\u65b0\u5b89\u88dd\u7684\u5957\u4ef6\u5c07\u88ab\u8996\u70ba\u751f\u7522\u74b0\u5883\u4f9d\u8cf4\u5957\u4ef6\u5b89\u88dd\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u7c21\u8981"},"\u547d\u4ee4\u7c21\u8981"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88dd\u8a72\u5957\u4ef6\u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88dd\u8a72\u5957\u4ef6\u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88dd\u8a72\u5957\u4ef6\u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u57df\u5b89\u88dd\u8a72\u5957\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88dd\u6a19\u7c64\u70ba ",(0,l.kt)("inlineCode",{parentName:"td"},"next")," \u7684\u5957\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88dd\u7248\u672c\u70ba ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0")," \u7684\u5957\u4ef6")))),(0,l.kt)("h2",{id:"\u652f\u63f4\u7684\u5957\u4ef6\u4f4d\u7f6e"},"\u652f\u63f4\u7684\u5957\u4ef6\u4f4d\u7f6e"),(0,l.kt)("h3",{id:"\u5f9e-npm-registry-\u5b89\u88dd"},"\u5f9e npm registry \u5b89\u88dd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," \u9810\u8a2d\u5c07\u5f9e ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," \u5b89\u88dd\u6700\u65b0\u7248\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," \u5957\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u5de5\u4f5c\u5340\u5167\u57f7\u884c\u6b64\u547d\u4ee4\uff0c\u6b64\u547d\u4ee4\u6703\u5148\u78ba\u8a8d\u5de5\u4f5c\u5340\u4e2d\u662f\u5426\u6709\u5176\u4ed6\u5c08\u6848\u4e5f\u4f7f\u7528\u6307\u5b9a\u5957\u4ef6\u3002 \u5982\u679c\u662f\uff0c\u5c07\u6703\u6309\u5df2\u4f7f\u7528\u7684\u7248\u672c\u7bc4\u570d\u9032\u884c\u5b89\u88dd\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u7528\u4e0b\u5217\u65b9\u5f0f\u5b89\u88dd\u5957\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u6a19\u7c64\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u7248\u672c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u7248\u672c\u7bc4\u570d\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"\u5f9e\u5de5\u4f5c\u5340\u5b89\u88dd"},"\u5f9e\u5de5\u4f5c\u5340\u5b89\u88dd"),(0,l.kt)("p",null,"Note that when adding dependencies and working within a ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"\u5f9e\u672c\u6a5f\u6a94\u6848\u7cfb\u7d71\u5b89\u88dd"},"\u5f9e\u672c\u6a5f\u6a94\u6848\u7cfb\u7d71\u5b89\u88dd"),(0,l.kt)("p",null,"\u6709\u5169\u7a2e\u65b9\u5f0f\u53ef\u8b93\u60a8\u5f9e\u672c\u6a5f\u7684\u6a94\u6848\u7cfb\u7d71\u9032\u884c\u5b89\u88dd\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f9e Tar \u683c\u5f0f\u58d3\u7e2e\u6a94\uff08",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),"\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5f9e\u4e00\u500b\u8cc7\u6599\u593e")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"\u7576\u60a8\u5f9e\u8cc7\u6599\u593e\u9032\u884c\u5b89\u88dd\u6642\uff0c\u6703\u5728\u76ee\u524d\u5c08\u6848\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u8cc7\u6599\u593e\u4e0b\u5efa\u7acb\u8edf\u9023\u7d50\uff0c\u6240\u4ee5\u7d50\u679c\u548c\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link")," \u547d\u4ee4\u7684\u6548\u679c\u662f\u4e00\u6a23\u7684\u3002"),(0,l.kt)("h3",{id:"\u5f9e\u9060\u7aef\u4f3a\u670d\u5668\u7684-tar-\u58d3\u7e2e\u6a94\u5b89\u88dd"},"\u5f9e\u9060\u7aef\u4f3a\u670d\u5668\u7684 Tar \u58d3\u7e2e\u6a94\u5b89\u88dd"),(0,l.kt)("p",null,'\u6b64\u53c3\u6578\u5fc5\u9808\u662f\u4e00\u500b\u4ee5 "http://" \u6216 "https://" \u958b\u982d\u4e26\u4e14\u53ef\u4ee5\u88ab\u64f7\u53d6\u7684\u9023\u7d50\u3002'),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"\u5f9e-git-\u5132\u5b58\u5eab\u5b89\u88dd"},"\u5f9e Git \u5132\u5b58\u5eab\u5b89\u88dd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"\u4f7f\u7528 Git \u5f9e\u4ee3\u7ba1\u7684 Git \u5e73\u53f0\u4e0a\u8907\u88fd\u4e26\u5b89\u88dd\u5957\u4ef6\u3002 \u60a8\u53ef\u4ee5\u7528\u7279\u6b8a\u683c\u5f0f\u4f86\u6307\u5b9a\u5e73\u53f0\u3001\u5e33\u865f\u53ca\u5132\u5b58\u5eab\u3002 \u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u7528\u4e0b\u5217\u65b9\u5f0f\u81ea Git \u5b89\u88dd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"master \u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u67d0\u4e00\u6b21\u63d0\u4ea4\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5206\u652f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u7248\u672c\u7bc4\u570d\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"\u5b89\u88dd\u5957\u4ef6\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"\u5b89\u88dd\u5957\u4ef6\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"\u5b89\u88dd\u5957\u4ef6\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"\u5b89\u88dd\u5957\u4ef6\u4e26\u9396\u5b9a\u70ba\u6307\u5b9a\u7248\u672c\uff0c\u800c\u4e0d\u6703\u4f7f\u7528 pnpm \u9810\u8a2d\u7684 semver \u7bc4\u570d"),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Added in: v3.2.0"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"Added in: v3.6.0"),(0,l.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-W")," flag is used."),(0,l.kt)("p",null,"For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"Install a package globally."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0}}]);