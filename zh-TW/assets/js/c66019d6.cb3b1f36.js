"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3353],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=s(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=a(2962),r=a(2742),l=(a(9496),a(9613)),i=["components"],p={id:"workspaces",title:"Workspace"},o=void 0,s={unversionedId:"workspaces",id:"workspaces",title:"Workspace",description:"pnpm \u5167\u5efa\u4e86\u5c0d Monorepo (\u55ae\u4e00\u5b58\u653e\u5eab\uff0c\u53c8\u7a31\u70ba\u591a\u91cd\u5957\u4ef6\u5b58\u653e\u5eab\u3001\u591a\u91cd\u5c08\u6848\u5b58\u653e\u5eab\u6216\u6574\u5408\u578b\u5b58\u653e\u5eab) \u7684\u652f\u63f4\u3002 \u60a8\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u5de5\u4f5c\u5340\u4f86\u5c07\u591a\u500b\u5c08\u6848\u7d50\u5408\u5728\u55ae\u500b\u5b58\u653e\u5eab\u7684\u5167\u90e8\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh-TW/next/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"workspaces",title:"Workspace"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/zh-TW/next/pnpmfile"},next:{title:"\u5225\u540d\uff08Aliases\uff09",permalink:"/zh-TW/next/aliases"}},d={},m=[{value:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a (workspace:)",id:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a-workspace",level:2},{value:"\u901a\u904e\u5225\u540d\u5f15\u7528\u5de5\u4f5c\u5340\u5957\u4ef6",id:"\u901a\u904e\u5225\u540d\u5f15\u7528\u5de5\u4f5c\u5340\u5957\u4ef6",level:3},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",level:3},{value:"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6",id:"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6",level:3},{value:"\u767c\u5e03\u6d41\u7a0b",id:"\u767c\u5e03\u6d41\u7a0b",level:2},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"\u4f7f\u7528\u7bc4\u4f8b",id:"\u4f7f\u7528\u7bc4\u4f8b",level:2}],k={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm \u5167\u5efa\u4e86\u5c0d Monorepo (\u55ae\u4e00\u5b58\u653e\u5eab\uff0c\u53c8\u7a31\u70ba\u591a\u91cd\u5957\u4ef6\u5b58\u653e\u5eab\u3001\u591a\u91cd\u5c08\u6848\u5b58\u653e\u5eab\u6216\u6574\u5408\u578b\u5b58\u653e\u5eab) \u7684\u652f\u63f4\u3002 \u60a8\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u5de5\u4f5c\u5340\u4f86\u5c07\u591a\u500b\u5c08\u6848\u7d50\u5408\u5728\u55ae\u500b\u5b58\u653e\u5eab\u7684\u5167\u90e8\u3002"),(0,l.kt)("p",null,"\u5de5\u4f5c\u5340\u7684\u6839\u76ee\u9304\u4e2d\u5fc5\u9808\u5177\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/next/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u6a94\u3002 \u5de5\u4f5c\u5340\u7684\u6839\u76ee\u9304\u4e2d\u4e5f\u53ef\u80fd\u6703\u5177\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/next/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc")),"\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u8981\u7814\u7a76 Monorepo \u7ba1\u7406\uff0c\u90a3\u9ebd\u60a8\u9084\u53ef\u80fd\u60f3\u8981\u7814\u7a76 ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit")," (\u82f1\u6587\u7db2\u9801)\u3002 Bit \u5be6\u969b\u4e0a\u4f7f\u7528\u7684\u662f pnpm\uff0c\u4e0d\u904e\u5b83\u6703\u81ea\u52d5\u57f7\u884c\u8a31\u591a\u52d5\u4f5c\uff0c\u76ee\u524d\u5728 pnpm/npm/Yarn \u7ba1\u7406\u7684\u50b3\u7d71\u5de5\u4f5c\u5340\u4e2d\uff0c\u9019\u4e9b\u52d5\u4f5c\u5247\u9700\u8981\u624b\u52d5\u57f7\u884c\u3002 \u6709\u4e00\u7bc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"bit install")," \u65b9\u9762\u7684\u6587\u7ae0\u63d0\u5230\u4e86\u9019\u4e9b\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"\u3008\u7528 Bit \u8f15\u9b06\u7ba1\u7406 Monorepo \u4f9d\u8cf4\u5957\u4ef6\u3009"),"(\u82f1\u6587\u7db2\u9801)\u3002")),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a-workspace"},"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a (workspace:)"),(0,l.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies and ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is in the workspace. However, if ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),(0,l.kt)("p",null,"Luckily, pnpm supports the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol. When this protocol is used, pnpm will refuse to resolve to anything other than a local workspace package. So, if you set ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time installation will fail because ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),(0,l.kt)("p",null,"This protocol is especially useful when the ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/next/npmrc#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,l.kt)("h3",{id:"\u901a\u904e\u5225\u540d\u5f15\u7528\u5de5\u4f5c\u5340\u5957\u4ef6"},"\u901a\u904e\u5225\u540d\u5f15\u7528\u5de5\u4f5c\u5340\u5957\u4ef6"),(0,l.kt)("p",null,"Let's say you have a package in the workspace named ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),". Usually, you would reference it as ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,l.kt)("p",null,"If you want to use a different alias, the following syntax will work too: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,l.kt)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),(0,l.kt)("p",null,"In a workspace with 2 packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),(0,l.kt)("h3",{id:"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6"},"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6"),(0,l.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,l.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,l.kt)("p",null,"So for example, if we have ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," in the workspace and they all are at version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u5c07\u8f49\u63db\u70ba\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,l.kt)("h2",{id:"\u767c\u5e03\u6d41\u7a0b"},"\u767c\u5e03\u6d41\u7a0b"),(0,l.kt)("p",null,"\u5c0d\u5de5\u4f5c\u5340\u5167\u7684\u5305\u9032\u884c\u7248\u672c\u63a7\u5236\u662f\u4e00\u9805\u8907\u96dc\u7684\u4efb\u52d9\uff0cpnpm \u76ee\u524d\u4e0d\u63d0\u4f9b\u5167\u7f6e\u89e3\u6c7a\u65b9\u6848\u3002 \u4f46\u662f\uff0c\u6709 2 \u500b\u7d93\u904e\u5145\u5206\u6e2c\u8a66\u7684\u5de5\u5177\u53ef\u4ee5\u8655\u7406\u7248\u672c\u63a7\u5236\u4e26\u652f\u63f4 pnpm\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"\u6709\u95dc\u5982\u4f55\u4f7f\u7528 Rush \u8a2d\u7f6e repository\uff0c\u8acb\u95b1\u8b80 ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"\u672c\u9801"),"\u3002"),(0,l.kt)("p",null,"\u6709\u95dc\u5982\u4f55\u5c07 Changesets \u8207 pnpm \u914d\u5408\u4f7f\u7528\uff0c\u8acb\u95b1\u8b80 \u672c\u6307\u5357 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/next/using-changesets"}),"\u3002"),(0,l.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,l.kt)("p",null,"pnpm \u7121\u6cd5\u4fdd\u8b49\u5728\u5de5\u4f5c\u5340\u76f8\u4f9d\u95dc\u4fc2\u4e4b\u9593\u6709\u5faa\u74b0\u6642\uff0c\u6703\u4ee5\u62d3\u8e7c\u9806\u5e8f\u57f7\u884c\u6307\u4ee4 \u3002 \u5982\u679c pnpm \u5728\u5b89\u88dd\u671f\u9593\u5075\u6e2c\u5230\u5faa\u74b0\u76f8\u4f9d\u95dc\u4fc2\uff0c\u4ed6\u6703\u7522\u751f\u4e00\u5247\u8b66\u544a\u3002 \u5982\u679c pnpm \u80fd\u5920\u627e\u51fa\u5c0e\u81f4\u5faa\u74b0\u7684\u76f8\u4f9d\u95dc\u4fc2\uff0c\u5247\u5b83\u4e5f\u6703\u986f\u793a\u5b83\u5011\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u770b\u5230\u6d88\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),"\uff0c\u8acb\u6aa2\u67e5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u8072\u660e\u7684\u5de5\u4f5c\u7a7a\u9593\u4f9d\u8cf4\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u7bc4\u4f8b"},"\u4f7f\u7528\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 pnpm \u5de5\u4f5c\u5340\u529f\u80fd\u7684\u5e7e\u500b\u6700\u71b1\u9580\u7684\u958b\u653e\u7a0b\u5f0f\u78bc\u5c08\u6848\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c08\u6848"),(0,l.kt)("th",{parentName:"tr",align:null},"Stars"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9077\u79fb\u65e5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9077\u79fb\u7684Commit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/logto-io/logto"},"Logto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/logto-io/logto",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b002e07850c8e6d09b35d22fab56d3e99d77043"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuepress/vuepress-next"},"VuePress 2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuepress/vuepress-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-04-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b85b1c3b39e80a8de92a7469381061f75ef33623"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/turborepo"},"Turborepo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/turborepo",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fd171519ec02a69c9afafc1bc5d9d1b481fba721"))))))}u.isMDXComponent=!0}}]);