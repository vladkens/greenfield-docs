"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=s(r),u=i,p=f["".concat(l,".").concat(u)]||f[u]||g[u]||o;return r?n.createElement(p,a(a({ref:t},d),{},{components:r})):n.createElement(p,a({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={title:"Getting Test BNB",order:3},a="Getting your test BNB",c={unversionedId:"guide/getting-started/get-test-bnb",id:"guide/getting-started/get-test-bnb",title:"Getting Test BNB",description:"You can claim the test BNB on BSC Testnet by the faucet, and bridge it to Greenfield Testnet.",source:"@site/docs/guide/getting-started/get-test-bnb.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/get-test-bnb",permalink:"/greenfield-docs/docs/guide/getting-started/get-test-bnb",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/getting-started/get-test-bnb.md",tags:[],version:"current",frontMatter:{title:"Getting Test BNB",order:3},sidebar:"guideSidebar",previous:{title:"Wallet Configuration",permalink:"/greenfield-docs/docs/guide/getting-started/wallet-onfiguration"},next:{title:"Interact with Greenfield",permalink:"/greenfield-docs/docs/guide/getting-started/interact-with-greenfield"}},l={},s=[{value:"Bridge to Greenfield",id:"bridge-to-greenfield",level:2}],d={toc:s},f="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-your-test-bnb"},"Getting your test BNB"),(0,i.kt)("p",null,"You can claim the test BNB on BSC Testnet by the faucet, and bridge it to Greenfield Testnet."),(0,i.kt)("h1",{id:"claim-tbnb-from-faucet"},"Claim tBNB from Faucet"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There are two ways to claim testing tBNB token, please refer to the BSC ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/bsc-faucet"},"faucet doc"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch to the BNB smart chain testnet in your wallet and check your balance. "))),(0,i.kt)("h2",{id:"bridge-to-greenfield"},"Bridge to Greenfield"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://dcellar.io"},"DCellar")," builds a bridge for transferring BNB from BSC to Greenfield and vice versa. You can follow\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/dcellar-get-started#transfer-in"},"How to Transfer In")," to bridge tBNBs from Greenfield Testnet to\nBSC Testnet.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-contracts/tree/verify-contracts#cross-chain-transfer-to-greenfield"},"How to Transfer Out")," to bridge tBNBs from BSC Testnet to\nGreenfield Testnet."))}g.isMDXComponent=!0}}]);