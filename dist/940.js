"use strict";(self.webpackChunkweb3_onboard_with_vanilla_js=self.webpackChunkweb3_onboard_with_vanilla_js||[]).push([[940],{42220:(e,t,s)=>{s.d(t,{mb:()=>O,Ao:()=>y,vZ:()=>g,pV:()=>z,D8:()=>q,IN:()=>I,jL:()=>b,lH:()=>ee,dC:()=>se}),Symbol();const o=Symbol(),a=Object.getPrototypeOf,n=new WeakMap,r=(e,t=!0)=>{n.set(e,t)};var i=s(96763);const l=e=>"object"==typeof e&&null!==e,c=new WeakMap,d=new WeakSet,[p]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),i=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),p=new WeakMap,u=((e,t,s=i)=>{const o=p.get(e);if((null==o?void 0:o[0])===t)return o[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(a,!0),p.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(d.has(o))r(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);n.value=u(e,t(),s)}Object.defineProperty(a,t,n)})),Object.preventExtensions(a)}),h=new WeakMap,f=[1,1],m=(r=>{if(!l(r))throw new Error("object required");const i=h.get(r);if(i)return i;let p=f[0];const b=new Set,y=(e,t=++f[0])=>{p!==t&&(p=t,b.forEach((s=>s(e,t))))};let v=f[1];const g=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],y(o,s)},w=new Map,I=e=>{var t;const s=w.get(e);s&&(w.delete(e),null==(t=s[1])||t.call(s))},C=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),O=t(C,{deleteProperty(e,t){const s=Reflect.get(e,t);I(t);const o=Reflect.deleteProperty(e,t);return o&&y(["delete",[t],s]),o},set(t,r,i,p){const u=Reflect.has(t,r),f=Reflect.get(t,r,p);if(u&&(e(f,i)||h.has(i)&&e(f,h.get(i))))return!0;var v;I(r),l(i)&&(i=(e=>e&&(n.has(e)?n.get(e):a(e)===Object.prototype||a(e)===Array.prototype))(v=i)&&v[o]||null||i);let C=i;if(i instanceof Promise)i.then((e=>{i.status="fulfilled",i.value=e,y(["resolve",[r],e])})).catch((e=>{i.status="rejected",i.reason=e,y(["reject",[r],e])}));else{!c.has(i)&&s(i)&&(C=m(i));const e=!d.has(C)&&c.get(C);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(b.size){const s=t[3](g(e));w.set(e,[t,s])}else w.set(e,[t])})(r,e)}return Reflect.set(t,r,C,p),y(["set",[r],i,f]),!0}});h.set(r,O);const W=[C,(e=++f[1])=>(v===e||b.size||(v=e,w.forEach((([t])=>{const s=t[1](e);s>p&&(p=s)}))),p),u,e=>(b.add(e),1===b.size&&w.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const o=e[3](g(s));w.set(s,[e,o])})),()=>{b.delete(e),0===b.size&&w.forEach((([e,t],s)=>{t&&(t(),w.set(s,[e]))}))})];return c.set(O,W),Reflect.ownKeys(r).forEach((e=>{const t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(O[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)})),O}))=>[m,c,d,e,t,s,i,p,u,h,f])();function u(e={}){return p(e)}function h(e,t,s){const o=c.get(e);let a;o||i.warn("Please use proxy object");const n=[],r=o[3];let l=!1;const d=r((e=>{n.push(e),s?t(n.splice(0)):a||(a=Promise.resolve().then((()=>{a=void 0,l&&t(n.splice(0))})))}));return l=!0,()=>{l=!1,d()}}var f=s(96763);const m=u({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),b={state:m,subscribe:e=>h(m,(()=>e(m))),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();const[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},y={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>y.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return y.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(y.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;return o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!y.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;return o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{f.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{f.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE)}catch{f.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(y.WCM_VERSION,"2.6.2")}catch{f.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=b.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},v=u({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),g={state:v,subscribe:e=>h(v.events,(()=>e(function(e,t){const s=c.get(e);s||i.warn("Please use proxy object");const[o,a,n]=s;return n(o,a(),void 0)}(v.events[v.events.length-1])))),initialize(){v.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(v.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){v.connectedWalletId=e},click(e){if(v.enabled){const t={type:"CLICK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},track(e){if(v.enabled){const t={type:"TRACK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},view(e){if(v.enabled){const t={type:"VIEW",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}}},w=u({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe:e=>h(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},C=u({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:C,subscribe:e=>h(C,(()=>e(C))),setConfig(e){var t,s;g.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),y.setModalVersionInStorage(),Object.assign(C,e)}};var W=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,L=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",D="js-2.6.2";async function U(e,t){const s=((e,t)=>{for(var s in t||(t={}))j.call(t,s)&&L(e,s,t[s]);if(E)for(var s of E(t))A.call(t,s)&&L(e,s,t[s]);return e})({sdkType:M,sdkVersion:D},t),o=new URL(e,k);return o.searchParams.append("projectId",O.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const P=async e=>U("/w3m/v1/getDesktopListings",e),S=async e=>U("/w3m/v1/getMobileListings",e),N=async e=>U("/w3m/v1/getAllListings",e),_=e=>`${k}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${D}`,x=e=>`${k}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${D}`;var T=Object.defineProperty,R=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,V=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const B=y.isMobile(),K=u({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),z={state:K,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return K.recomendedWallets;if(y.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await N(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),K.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=e?.join(","),a=y.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:y.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:r}=B?await S(n):await P(n);K.recomendedWallets=Object.values(r)}return K.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))$.call(t,s)&&V(e,s,t[s]);if(R)for(var s of R(t))H.call(t,s)&&V(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=O.state,{recomendedWallets:a}=K;if("ALL"===o)return K.wallets;a.length?t.excludedIds=a.map((e=>e.id)).join(","):y.isArray(s)&&(t.excludedIds=s.join(",")),y.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:n,search:r}=e,{listings:i,total:l}=B?await S(t):await P(t),c=Object.values(i),d=r?"search":"wallets";return K[d]={listings:[...K[d].listings,...c],total:l,page:n??1},{listings:c,total:l}},getWalletImageUrl:e=>_(e),getAssetImageUrl:e=>x(e),resetSearch(){K.search={listings:[],total:0,page:1}}},J=u({open:!1}),q={state:J,subscribe:e=>h(J,(()=>e(J))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(y.removeWalletConnectDeepLink(),I.setWalletConnectUri(e?.uri),I.setChains(e?.chains),b.reset("ConnectWallet"),s&&o)J.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),J.open=!0,t())}),200)}})),close(){J.open=!1}};var Z=Object.defineProperty,F=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,t,s)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const Y=u({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),ee={state:Y,subscribe:e=>h(Y,(()=>e(Y))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(Y.themeMode=t),s&&(Y.themeVariables=((e,t)=>{for(var s in t||(t={}))G.call(t,s)&&X(e,s,t[s]);if(F)for(var s of F(t))Q.call(t,s)&&X(e,s,t[s]);return e})({},s))}},te=u({open:!1,message:"",variant:"success"}),se={state:te,subscribe:e=>h(te,(()=>e(te))),openToast(e,t){te.open=!0,te.message=e,te.variant=t},closeToast(){te.open=!1}}},80940:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>a});var o=s(42220);class a{constructor(e){this.openModal=o.D8.open,this.closeModal=o.D8.close,this.subscribeModal=o.D8.subscribe,this.setTheme=o.lH.setThemeConfig,o.lH.setThemeConfig(e),o.mb.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(3430).then(s.bind(s,3430));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.IN.setIsUiLoaded(!0)}}}}}]);