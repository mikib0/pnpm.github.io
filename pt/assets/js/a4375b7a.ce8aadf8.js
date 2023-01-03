"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9951],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),c=l,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=t(2962),l=t(2742),r=(t(9496),t(9613)),o=["components"],p={id:"installation",title:"Instala\xe7\xe3o"},i=void 0,s={unversionedId:"installation",id:"installation",title:"Instala\xe7\xe3o",description:"Usando um script",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pt/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"installation",title:"Instala\xe7\xe3o"},sidebar:"docs",previous:{title:"Motiva\xe7\xe3o",permalink:"/pt/next/motivation"},next:{title:"pnpm CLI",permalink:"/pt/next/pnpm-cli"}},d={},m=[{value:"Usando um script",id:"usando-um-script",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On POSIX systems",id:"on-posix-systems",level:3},{value:"On Alpine Linux",id:"on-alpine-linux",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Usando Corepack",id:"usando-corepack",level:2},{value:"Usando npm",id:"usando-npm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilidade",id:"compatibilidade",level:2},{value:"Solu\xe7\xe3o de Problemas",id:"solu\xe7\xe3o-de-problemas",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Adding a permanent alias on POSIX systems",id:"adding-a-permanent-alias-on-posix-systems",level:4},{value:"Adding a permanent alias in Powershell (Windows):",id:"adding-a-permanent-alias-in-powershell-windows",level:4},{value:"Desinstalando o pnpm",id:"desinstalando-o-pnpm",level:2}],u={toc:m};function c(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usando-um-script"},"Usando um script"),(0,r.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,r.kt)("h3",{id:"on-windows"},"On Windows"),(0,r.kt)("p",null,"Using PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"on-posix-systems"},"On POSIX systems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Se voc\xea n\xe3o tiver curl instalado, poder\xe1 usar wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"on-alpine-linux"},"On Alpine Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm\n')),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"If you don't use the standalone script to install pnpm, then you need to have Node.js (at least v14) to be installed on your system."),(0,r.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,r.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ent\xe3o, voc\xea pode utilizar o comando ",(0,r.kt)("a",{parentName:"p",href:"/pt/next/cli/env"},"pnpm env")," para instalar Node.js.")),(0,r.kt)("h2",{id:"usando-corepack"},"Usando Corepack"),(0,r.kt)("p",null,"Desde a vers\xe3o v16.13, Node.js inclui ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," para controlar a instala\xe7\xe3o de gerenciadores de pacotes. Esta \xe9 uma ferramenta experimental, ent\xe3o voc\xea precisa habilit\xe1-la com o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,r.kt)("p",null,"Isso ir\xe1 automaticamente instalar pnpm no seu sistema. Entretanto, provavelmente n\xe3o ser\xe1 a vers\xe3o mais recente do pnpm. To upgrade it, check what is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,r.kt)("p",null,"Se voc\xea tiver o Homebrew instalado, poder\xe1 instalar pnpm usando o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,r.kt)("p",null,"Se voc\xea tiver Scoop instalado, poder\xe1 instalar pnpm usando o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Voc\xea gostaria de utilizar o pnpm em servidores de Integra\xe7\xe3o Cont\xednua (CI)? Veja: ",(0,r.kt)("a",{parentName:"p",href:"/pt/next/continuous-integration"},"Integra\xe7\xe3o Cont\xednua"),".")),(0,r.kt)("h2",{id:"compatibilidade"},"Compatibilidade"),(0,r.kt)("p",null,"Aqui est\xe1 uma lista de vers\xf5es anteriores do pnpm com suas respectivas vers\xf5es do Node.js suportadas."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"solu\xe7\xe3o-de-problemas"},"Solu\xe7\xe3o de Problemas"),(0,r.kt)("p",null,"Se o pnpm falhar, e n\xe3o for resolvido por meio de uma reinstala\xe7\xe3o, voc\xea pode precisar remov\xea-lo manualmente do PATH."),(0,r.kt)("p",null,"Assumindo que voc\xea t\xeam o seguinte erro ao rodar ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"Primeiro, tente encontrar a localiza\xe7\xe3o do pnpm rodando: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se voc\xea usar Windows, execute este comando no Git Bash. Voc\xea ir\xe1 ver a localiza\xe7\xe3o do comando pnpm, como:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Arquivos de Programas/nodejs/pnpm\n")),(0,r.kt)("p",null,"Agora que voc\xea sabe onde est\xe1 localizado o pnpm, abra este diret\xf3rio e remova qualquer arquivo relacionado ao pnpm (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Ent\xe3o, instale o pnpm novamente, e ele deve funcionar como esperado."),(0,r.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,r.kt)("h4",{id:"adding-a-permanent-alias-on-posix-systems"},"Adding a permanent alias on POSIX systems"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"adding-a-permanent-alias-in-powershell-windows"},"Adding a permanent alias in Powershell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"desinstalando-o-pnpm"},"Desinstalando o pnpm"),(0,r.kt)("p",null,"Se voc\xea precisar remover a CLI do pnpm de seu sistema operacional, assim como quaisquer arquivos que ele tenha gravado em seu disco, consulte ",(0,r.kt)("a",{parentName:"p",href:"/pt/next/uninstall"},"Desinstalando o pnpm"),"."))}c.isMDXComponent=!0}}]);