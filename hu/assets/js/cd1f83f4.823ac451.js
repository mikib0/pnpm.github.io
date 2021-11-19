"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6749],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),k=a,u=d["".concat(o,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(u,p(p({ref:t},c),{},{components:n})):r.createElement(u,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8595:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>m,toc:()=>c,default:()=>d});var r=n(2245),a=n(5903),l=(n(9496),n(9613)),p=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-5.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/hu/5.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"5.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-5.x/docs",previous:{title:"Telep\xedt\xe9s",permalink:"/hu/5.x/installation"},next:{title:"pnpx CLI",permalink:"/hu/5.x/pnpx-cli"}},c=[{value:"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest",id:"k\xfcl\xf6nbs\xe9gek-npm-hez-k\xe9pest",children:[],level:2},{value:"Options",id:"options",children:[{value:"-C &lt;\xfat&gt;, --dir &lt;\xfat&gt;",id:"-c-\xfat---dir-\xfat",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Parancsok",id:"parancsok",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"k\xfcl\xf6nbs\xe9gek-npm-hez-k\xe9pest"},"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest"),(0,l.kt)("p",null,"npm-mel ellent\xe9tben pnpm minden opci\xf3t ellen\u0151riz. P\xe9ld\xe1ul ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," sikertelen lesz, mivel ",(0,l.kt)("inlineCode",{parentName:"p"},"--foo")," nem egy l\xe9tez\u0151 opci\xf3ja a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install")," parancsnak."),(0,l.kt)("p",null,"Egyes f\xfcgg\u0151s\xe9gek azonban haszn\xe1lhatj\xe1k a ",(0,l.kt)("inlineCode",{parentName:"p"},"npm_config_")," k\xf6rnyezeti v\xe1ltoz\xf3t, amely a CLI opci\xf3kb\xf3l van \xf6sszerakva. Ebben az esetben a k\xf6vetkez\u0151 megold\xe1sokb\xf3l v\xe1laszthatsz:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"explicit m\xf3don \xe1ll\xedthatod be a k\xf6rnyezeti v\xe1ltoz\xf3t: ",(0,l.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,l.kt)("li",{parentName:"ol"},"k\xe9nyszer\xedtheted az ismeretlen opci\xf3t a ",(0,l.kt)("inlineCode",{parentName:"li"},"--config.")," seg\xedts\xe9g\xe9vel: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"-c-\xfat---dir-\xfat"},"-C ","<","\xfat",">",", --dir ","<","\xfat",">"),(0,l.kt)("p",null,"pnpm \xfagy fut mintha az ",(0,l.kt)("inlineCode",{parentName:"p"},"<\xfat>"),"-ban lenne inditva, vagyis az az akt\xedv mapp\xe1ja."),(0,l.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,l.kt)("p",null,"Hozz\xe1adva: v5.6.0"),(0,l.kt)("p",null,"pnpm akt\xedv mapp\xe1ja a workspace gy\xf6kere lesz."),(0,l.kt)("h2",{id:"parancsok"},"Parancsok"),(0,l.kt)("p",null,"Tov\xe1bbi inform\xe1ci\xf3\xe9rt tekintsed meg az egyes CLI-parancsok dokument\xe1ci\xf3j\xe1t. Itt egy lista n\xe9mely gyakran haszn\xe1lt npm parancsok megfelel\u0151ir\u0151l:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"npm parancs"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm megfel\u0151je"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm install")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/hu/5.x/cli/install"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))))}d.isMDXComponent=!0}}]);