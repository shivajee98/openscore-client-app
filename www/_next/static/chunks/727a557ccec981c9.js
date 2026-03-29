(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},84614,e=>{"use strict";let t=(0,e.i(75254).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>t],84614)},3116,e=>{"use strict";let t=(0,e.i(75254).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",()=>t],3116)},88840,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(95468),s=e.i(63209),i=e.i(37727),o=e.i(39312);function n(e,t,r){let a=new CustomEvent("toast",{detail:{message:e,type:t,duration:r}});window.dispatchEvent(a)}function l(){let[e,n]=(0,r.useState)([]),l=(0,r.useRef)([]);(0,r.useEffect)(()=>{l.current=e},[e]);let c=(0,r.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]);return(0,r.useEffect)(()=>{let e=e=>{let t=e.detail;if(l.current.some(e=>e.message===t.message))return;let r=Date.now(),a={id:r,...t};n(e=>{let t=[...e,a];return t.length>3?t.slice(1):t}),setTimeout(()=>{c(r)},t.duration||3e3)};return window.addEventListener("toast",e),()=>window.removeEventListener("toast",e)},[c]),(0,t.jsx)("div",{className:"fixed top-6 left-1/2 -translate-x-1/2 z-[10000] flex flex-col gap-3 w-full max-w-[360px] px-6 pointer-events-none",children:e.map(e=>(0,t.jsxs)("div",{className:`
                        relative overflow-hidden pointer-events-auto group
                        flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border backdrop-blur-xl 
                        animate-in fade-in zoom-in slide-in-from-top-4 duration-300
                        ${"success"===e.type?"bg-emerald-500/10 border-emerald-500/20 text-emerald-900":""}
                        ${"error"===e.type?"bg-rose-500/10 border-rose-500/20 text-rose-900":""}
                        ${"info"===e.type?"bg-slate-900/90 border-slate-700/50 text-white":""}
                    `,children:[(0,t.jsx)("div",{className:`absolute top-0 left-0 w-1 h-full ${"success"===e.type?"bg-emerald-500":"error"===e.type?"bg-rose-500":"bg-blue-500"}`}),(0,t.jsxs)("div",{className:`p-1.5 rounded-xl ${"success"===e.type?"bg-emerald-500/20 text-emerald-600":"error"===e.type?"bg-rose-500/20 text-rose-600":"bg-white/10 text-white"}`,children:["success"===e.type&&(0,t.jsx)(a.CheckCircle2,{size:18,strokeWidth:2.5}),"error"===e.type&&(0,t.jsx)(s.AlertCircle,{size:18,strokeWidth:2.5}),"info"===e.type&&(0,t.jsx)(o.Zap,{size:18,strokeWidth:2.5,className:"fill-current"})]}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-xs font-black uppercase tracking-widest opacity-40 mb-0.5",children:"success"===e.type?"Confirmed":"error"===e.type?"Attention":"System Alert"}),(0,t.jsx)("p",{className:"text-[13px] font-bold leading-tight tracking-tight",children:e.message})]}),(0,t.jsx)("button",{onClick:()=>c(e.id),className:"p-1 hover:bg-black/5 rounded-lg opacity-40 hover:opacity-100 transition-opacity",children:(0,t.jsx)(i.X,{size:14,strokeWidth:3})}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 h-[2px] w-full bg-black/5",children:(0,t.jsx)("div",{className:`h-full opacity-40 animate-toast-progress ${"success"===e.type?"bg-emerald-500":"error"===e.type?"bg-rose-500":"bg-white"}`,style:{animationDuration:`${e.duration||3e3}ms`}})})]},e.id))})}e.s(["default",()=>l,"toast",0,{success:(e,t=3e3)=>n(e,"success",t),error:(e,t=4e3)=>n(e,"error",t),info:(e,t=3e3)=>n(e,"info",t)}])},95468,e=>{"use strict";let t=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>t],95468)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)},18566,(e,t,r)=>{t.exports=e.r(76562)},75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:n="",children:l,iconNode:c,...d},u)=>(0,t.createElement)("svg",{ref:u,...s,width:a,height:a,stroke:e,strokeWidth:o?24*Number(i)/Number(a):i,className:r("lucide",n),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),o=(e,s)=>{let o=(0,t.forwardRef)(({className:o,...n},l)=>(0,t.createElement)(i,{ref:l,iconNode:s,className:r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...n}));return o.displayName=a(e),o};e.s(["default",()=>o],75254)},9165,e=>{"use strict";let t="https://api.msmeloan.sbs/api",r=!1,a=0,s=async()=>{localStorage.clear(),sessionStorage.clear(),document.cookie.split(";").forEach(e=>{document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")}),a=0,window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"LOGOUT"}))},i=new Map,o=async(e,o={})=>{let{skipAuthCheck:n,...l}=o,c=l.body instanceof FormData,d=e.startsWith("http"),u=l.method||"GET",p={Accept:"application/json",...c?{}:{"Content-Type":"application/json"},...l.headers};{let e=localStorage.getItem("token");e&&(p.Authorization=`Bearer ${e}`)}let h=d?e:e.startsWith("/")?`${t}${e}`:`${t}/${e}`,m=`${u}:${h}`;if("GET"===u&&i.has(m))return i.get(m);let f=(async()=>{try{let e=await fetch(h,{...l,headers:p});if(401===e.status&&!n)throw(()=>{{let e="/"===window.location.pathname||window.location.pathname.startsWith("/auth")||window.location.pathname.startsWith("/privacy-policy");if(r)return;if(++a<3)return console.warn(`Auth failure detected (${a}/3). Retrying...`);console.warn("Handling unauthorized response - clearing state"),s(),e||(r=!0,window.location.replace("/"),setTimeout(()=>{r=!1},5e3))}})(),Error("Session expired. Please login again.");if(!e.ok){let t=await e.json().catch(()=>({}));if(403===e.status&&"ACCOUNT_SUSPENDED"===t.code){let e=localStorage.getItem("user");if(e)try{let t=JSON.parse(e);t.status="SUSPENDED",localStorage.setItem("user",JSON.stringify(t)),window.dispatchEvent(new Event("userStateUpdate"))}catch(e){}}let r=Error(t.error||t.message||(401===e.status?"Unauthorized":`API request failed with status ${e.status}`));throw r.status=e.status,r.code=t.code,r}return e.json()}catch(e){if("Failed to fetch"===e.message||e.message.includes("NetworkError"))throw Error("Network error. Please check your connection.");throw e}finally{"GET"===u&&i.delete(m)}})();return"GET"===u&&i.set(m,f),f};e.s(["API_BASE_URL",0,t,"apiFetch",0,o,"clearAuthState",0,s])},37727,e=>{"use strict";let t=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>t],37727)},63209,e=>{"use strict";let t=(0,e.i(75254).default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>t],63209)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],81418)},23962,e=>{"use strict";let t=(0,e.i(75254).default)("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);e.s(["QrCode",()=>t],23962)},27516,e=>{"use strict";let t=(0,e.i(75254).default)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);e.s(["History",()=>t],27516)},23609,e=>{"use strict";let t=(0,e.i(75254).default)("landmark",[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]]);e.s(["Landmark",()=>t],23609)},70756,e=>{"use strict";let t=(0,e.i(75254).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",()=>t],70756)},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>t],72520)},32549,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(18566),s=e.i(9165),i=e.i(81418);function o(){return(0,t.jsxs)("div",{className:"min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center z-[9999] relative",children:[(0,t.jsx)("div",{className:"w-24 h-24 bg-rose-50 rounded-[2.5rem] flex items-center justify-center text-rose-500 mb-10 shadow-2xl shadow-rose-500/10 border border-rose-100/50",children:(0,t.jsx)(i.ShieldCheck,{size:48,strokeWidth:1.5})}),(0,t.jsx)("h1",{className:"text-4xl font-black text-slate-900 tracking-tight mb-6 uppercase leading-tight",children:"Access Restricted"}),(0,t.jsxs)("div",{className:"max-w-md bg-slate-50 border border-slate-100 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 mb-10",children:[(0,t.jsx)("p",{className:"text-slate-600 font-bold leading-relaxed mb-8 italic",children:'"Your account has been suspended following a review of your recent onboarding/KYC process."'}),(0,t.jsx)("div",{className:"bg-white p-5 rounded-2xl border border-slate-200/60 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] shadow-sm",children:"Please contact our support team to resolve this issue."})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-5 w-full max-w-xs",children:[(0,t.jsx)("button",{onClick:()=>window.location.href="https://wa.me/910000000000",className:"w-full bg-slate-900 text-white font-black text-xs uppercase tracking-[0.25em] py-6 rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all",children:"Contact Support Team"}),(0,t.jsx)("button",{onClick:async()=>{await (0,s.clearAuthState)(),window.location.replace("/")},className:"w-full bg-white text-slate-400 font-bold text-[10px] uppercase tracking-widest py-4 rounded-2xl border border-slate-100 hover:text-rose-500 active:scale-95 transition-all",children:"Logout from Device"})]})]})}function n({children:e}){let i=(0,a.useRouter)(),n=(0,a.usePathname)(),[l,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{console.log("%c OpenScore App Version: 0.1.3 ","background: #0f172a; color: #10b981; font-weight: bold; padding: 4px; border-radius: 4px;")},[]),(0,r.useEffect)(()=>{let e=localStorage.getItem("token"),t=localStorage.getItem("user"),r={};try{r=t?JSON.parse(t):{}}catch(e){console.error("Failed to parse user data",e),localStorage.removeItem("user")}if("SUSPENDED"===r.status){u(!0),c(!0);return}u(!1);let a=(n||"").replace(/\/$/,""),s=""===a||"/"===a||"/login"===a||a.startsWith("/auth"),o=a.startsWith("/public")||a.startsWith("/privacy-policy")||a.startsWith("/qr-update")||"/qr"===a||a.startsWith("/qr?");if(e)if(s){let e=(r.role,"/customer");(!1===r.is_onboarded||0===r.is_onboarded||"0"===r.is_onboarded)&&(e="MERCHANT"===r.role?"/auth/merchant-onboarding":"/auth/onboarding"),a===e?c(!0):i.replace(e)}else c(!0);else s||o?c(!0):window.location.href="/"},[n,i]),(0,r.useEffect)(()=>{let e;if(!d)return;let t=async()=>{try{let e=await (0,s.apiFetch)("/auth/me",{skipAuthCheck:!0});e&&"SUSPENDED"!==e.status&&(localStorage.setItem("user",JSON.stringify(e)),u(!1))}catch(e){403!==e.status&&console.error("Reactivation check failed",e)}};return t(),e=setInterval(t,1e4),()=>clearInterval(e)},[d]),(0,r.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("user");if(e)try{let t=JSON.parse(e);"SUSPENDED"===t.status&&u(!0)}catch(e){}};return window.addEventListener("userStateUpdate",e),()=>window.removeEventListener("userStateUpdate",e)},[]),d)?(0,t.jsx)(o,{}):l?(0,t.jsx)(t.Fragment,{children:e}):(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"})})}e.s(["default",()=>n],32549)},82568,e=>{"use strict";var t,r,a,s,i,o,n,l;let c,d,u,p,h,m;(s=t||(t={})).Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE";class f extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}let g=(c=(o=i="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:e.g).CapacitorCustomPlatform||null,u=(d=o.Capacitor||{}).Plugins=d.Plugins||{},p=()=>{var e,t;return null!==c?c.name:(null==o?void 0:o.androidBridge)?"android":(null==(t=null==(e=null==o?void 0:o.webkit)?void 0:e.messageHandlers)?void 0:t.bridge)?"ios":"web"},h=e=>{var t;return null==(t=d.PluginHeaders)?void 0:t.find(t=>t.name===e)},m=new Map,d.convertFileSrc||(d.convertFileSrc=e=>e),d.getPlatform=p,d.handleError=e=>o.console.error(e),d.isNativePlatform=()=>"web"!==p(),d.isPluginAvailable=e=>{let t=m.get(e);return!!((null==t?void 0:t.platforms.has(p()))||h(e))},d.registerPlugin=(e,r={})=>{let a,s=m.get(e);if(s)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),s.proxy;let i=p(),o=h(e),n=async()=>(!a&&i in r?a=a="function"==typeof r[i]?await r[i]():r[i]:null!==c&&!a&&"web"in r&&(a=a="function"==typeof r.web?await r.web():r.web),a),l=r=>{let a,s=(...s)=>{let l=n().then(n=>{let l=((r,a)=>{var s,n;if(o){let t=null==o?void 0:o.methods.find(e=>a===e.name);if(t)if("promise"===t.rtype)return t=>d.nativePromise(e,a.toString(),t);else return(t,r)=>d.nativeCallback(e,a.toString(),t,r);if(r)return null==(s=r[a])?void 0:s.bind(r)}else if(r)return null==(n=r[a])?void 0:n.bind(r);else throw new f(`"${e}" plugin is not implemented on ${i}`,t.Unimplemented)})(n,r);if(l){let e=l(...s);return a=null==e?void 0:e.remove,e}throw new f(`"${e}.${r}()" is not implemented on ${i}`,t.Unimplemented)});return"addListener"===r&&(l.remove=async()=>a()),l};return s.toString=()=>`${r.toString()}() { [capacitor code] }`,Object.defineProperty(s,"name",{value:r,writable:!1,configurable:!1}),s},g=l("addListener"),y=l("removeListener"),b=(e,t)=>{let r=g({eventName:e},t),a=async()=>{y({eventName:e,callbackId:await r},t)},s=new Promise(e=>r.then(()=>e({remove:a})));return s.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await a()},s},x=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return o?b:g;case"removeListener":return y;default:return l(t)}}});return u[e]=x,m.set(e,{name:e,proxy:x,platforms:new Set([...Object.keys(r),...o?[i]:[]])}),x},d.Exception=f,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,i.Capacitor=d),y=g.registerPlugin;class b{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);let a=this.windowListeners[e];return a&&!a.registered&&this.addWindowListener(a),r&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){for(let e in this.listeners={},this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){let a=this.listeners[e];if(!a){if(r){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}a.forEach(e=>e(t))}hasListeners(e){var t;return!!(null==(t=this.listeners[e])?void 0:t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new g.Exception(e,t.Unimplemented)}unavailable(e="not available"){return new g.Exception(e,t.Unavailable)}async removeListener(e,t){let r=this.listeners[e];if(!r)return;let a=r.indexOf(t);this.listeners[e].splice(a,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}}let x=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);class w extends b{async getCookies(){let e=document.cookie,t={};return e.split(";").forEach(e=>{if(e.length<=0)return;let[r,a]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent).trim(),a=a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent).trim(),t[r]=a}),t}async setCookie(e){try{let t=x(e.key),r=x(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),i=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${a}; path=${s}; ${i};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{for(let e of document.cookie.split(";")||[])document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}y("CapacitorCookies",{web:()=>new w});let v=async e=>new Promise((t,r)=>{let a=new FileReader;a.onload=()=>{let e=a.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},a.onerror=e=>r(e),a.readAsDataURL(e)});class k extends b{async request(e){let t,r,a=((e,t={})=>{let r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=((e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((r,a,s)=>(r[a]=e[t[s]],r),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){let t=new URLSearchParams;for(let[r,a]of Object.entries(e.data||{}))t.set(r,a);r.body=t.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,r)=>{t.append(r,e)});else for(let r of Object.keys(e.data))t.append(r,e.data[r]);r.body=t;let a=new Headers(r.headers);a.delete("content-type"),r.headers=a}else(a.includes("application/json")||"object"==typeof e.data)&&(r.body=JSON.stringify(e.data));return r})(e,e.webFetchExtra),s=((e,t=!0)=>e?Object.entries(e).reduce((e,r)=>{let a,s,[i,o]=r;return Array.isArray(o)?(s="",o.forEach(e=>{a=t?encodeURIComponent(e):e,s+=`${i}=${a}&`}),s.slice(0,-1)):(a=t?encodeURIComponent(o):o,s=`${i}=${a}`),`${e}&${s}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),i=s?`${e.url}?${s}`:e.url,o=await fetch(i,a),n=o.headers.get("content-type")||"",{responseType:l="text"}=o.ok?e:{};switch(n.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":r=await o.blob(),t=await v(r);break;case"json":t=await o.json();break;default:t=await o.text()}let c={};return o.headers.forEach((e,t)=>{c[t]=e}),{data:t,headers:c,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}y("CapacitorHttp",{web:()=>new k}),(n=r||(r={})).Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT",(l=a||(a={})).StatusBar="StatusBar",l.NavigationBar="NavigationBar";class j extends b{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}y("SystemBars",{web:()=>new j}),e.s(["Capacitor",()=>g,"WebPlugin",()=>b,"registerPlugin",()=>y])},43432,e=>{"use strict";let t=(0,e.i(75254).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>t],43432)},51737,e=>{"use strict";let t=(0,e.i(75254).default)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);e.s(["ShieldAlert",()=>t],51737)},90092,e=>{"use strict";let t=(0,e.i(75254).default)("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);e.s(["RefreshCcw",()=>t],90092)},60289,e=>{"use strict";let t=(0,e.i(75254).default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);e.s(["LayoutDashboard",()=>t],60289)},89759,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(18566),s=e.i(22016),i=e.i(39312),o=e.i(84614),n=e.i(60289),l=e.i(23962),c=e.i(23609),d=e.i(27516),u=e.i(9165),p=e.i(92);function h(){let e=(0,a.usePathname)(),h=e.endsWith("/")&&"/"!==e?e.slice(0,-1):e,{data:m,mutate:f}=(0,p.useApi)("/auth/me"),[g,y]=(0,r.useState)(null),[b,x]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{let e=()=>{f()};return window.addEventListener("userStateUpdate",e),()=>window.removeEventListener("userStateUpdate",e)},[f]),(0,r.useEffect)(()=>{if(m?.role==="CUSTOMER"||m?.role==="STUDENT"){let e=`loanStatus_${m.id}`,t=localStorage.getItem(e);if(t)try{let{data:e,timestamp:r}=JSON.parse(t);if(Date.now()-r<3e5){x(e.hasActiveLoan),y(e.activeLoanId);return}}catch(e){console.error("Cache parse error",e)}(0,u.apiFetch)("/loans",{skipAuthCheck:!0}).then(t=>{let r=Array.isArray(t)?t:t?.data||[],a=r?.filter(e=>{if("DISBURSED"!==e.status)return!1;let t=e.calculations?.net_payable_amount||Number(e.amount);return Number(e.paid_amount||0)<t}),s=a?.length>0,i=a?.length===1?a[0].id:null;x(s),y(i),localStorage.setItem(e,JSON.stringify({data:{hasActiveLoan:s,activeLoanId:i},timestamp:Date.now()}))}).catch(()=>{})}},[m?.id]),!["admin","merchant","customer"].includes(h.split("/")[1]))return null;let w=m?.role==="MERCHANT"?"text-emerald-600 bg-emerald-50":"text-blue-600 bg-blue-50",v="/customer"===h,k=h.includes("/customer/loan")&&!h.includes("/repayment")&&!h.includes("/customer/loan/history"),j="/customer/transactions"===h,E="/customer/qr"===h,N="/customer/payout"===h;h.includes("/repayment");let C="/customer/profile"===h;return(0,t.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200 p-1.5 md:hidden z-50 flex justify-around items-center pb-safe ring-1 ring-slate-900/5 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]",children:[(0,t.jsxs)(s.default,{href:"/customer",prefetch:!1,className:`flex flex-col items-center gap-1 p-1.5 min-w-[56px] rounded-xl transition-all duration-300 ${v?w:"text-slate-400 hover:text-slate-600"}`,children:[(0,t.jsx)(n.LayoutDashboard,{size:20,className:v?"scale-110":"",strokeWidth:v?3:2}),(0,t.jsx)("span",{className:"text-[8px] font-black uppercase tracking-widest",children:"Home"})]}),(0,t.jsxs)(s.default,{href:"/customer/loan",prefetch:!1,className:`flex flex-col items-center gap-1 p-1.5 min-w-[48px] rounded-xl transition-all duration-300 ${k?w:"text-slate-400"}`,children:[(0,t.jsx)(i.Zap,{size:20,className:k?"scale-110":"",strokeWidth:3}),(0,t.jsx)("span",{className:"text-[8px] font-black uppercase tracking-widest",children:"Loans"})]}),(0,t.jsxs)(s.default,{href:"/customer/qr",prefetch:!1,className:`flex flex-col items-center gap-1 p-1.5 min-w-[48px] rounded-xl transition-all duration-300 ${E?w:"text-slate-400"}`,children:[(0,t.jsx)(l.QrCode,{size:20,className:E?"scale-110":"",strokeWidth:2}),(0,t.jsx)("span",{className:"text-[8px] font-black uppercase tracking-widest",children:"My QR"})]}),(0,t.jsxs)(s.default,{href:"/customer/payout",prefetch:!1,className:`flex flex-col items-center gap-1 p-1.5 min-w-[48px] rounded-xl transition-all duration-300 ${N?w:"text-slate-400"}`,children:[(0,t.jsx)(c.Landmark,{size:20,className:N?"scale-110":"",strokeWidth:2}),(0,t.jsx)("span",{className:"text-[8px] font-black uppercase tracking-widest",children:"Cred-Out"})]}),(0,t.jsxs)(s.default,{href:"/customer/profile",prefetch:!1,className:`flex flex-col items-center gap-1 p-1.5 min-w-[48px] rounded-xl transition-all duration-300 ${C?w:"text-slate-400"}`,children:[(0,t.jsx)(o.User,{size:20,className:C?"scale-110":"",strokeWidth:C?3:2}),(0,t.jsx)("span",{className:"text-[8px] font-black uppercase tracking-widest",children:"Profile"})]}),(0,t.jsxs)(s.default,{href:"/customer/transactions",prefetch:!1,className:`flex flex-col items-center gap-1 p-1.5 min-w-[48px] rounded-xl transition-all duration-300 ${j?w:"text-slate-400"}`,children:[(0,t.jsx)(d.History,{size:20,className:j?"scale-110":"",strokeWidth:2}),(0,t.jsx)("span",{className:"text-[8px] font-black uppercase tracking-widest",children:"History"})]})]})}e.s(["default",()=>h])},5766,e=>{"use strict";let t,r;var a,s=e.i(71645);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?c(o,i):i+"{"+c(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=c(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},d={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e};function p(e){let t,r,a=this||{},s=e.call?e(a.p):e;return((e,t,r,a,s)=>{var i;let p=u(e),h=d[p]||(d[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!d[h]){let t=p!==e?e:(e=>{let t,r,a=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);d[h]=c(s?{["@keyframes "+h]:t}:t,r?"":"."+h)}let m=r&&d.g?d.g:null;return r&&(d.g=d[h]),i=d[h],m?t.data=t.data.replace(m,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),h})(s.unshift?s.raw?(t=[].slice.call(arguments,1),r=a.p,s.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(a.target),a.g,a.o,a.k)}p.bind({g:1});let h,m,f,g=p.bind({k:1});function y(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:m&&m()},n),r.o=/ *go\d+/.test(l),n.className=p.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),f&&c[0]&&f(n),h(c,n)}return t?t(s):s}}var b=(e,t)=>"function"==typeof e?e(t):e,x=(t=0,()=>(++t).toString()),w="default",v=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return v(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},k=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},N=(e,t=w)=>{E[t]=v(E[t]||j,e),k.forEach(([e,r])=>{e===t&&r(E[t])})},C=e=>Object.keys(E).forEach(t=>N(e,t)),S=(e=w)=>t=>{N(t,e)},L=e=>(t,r)=>{let a,s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||x()}))(t,e,r);return S(s.toasterId||(a=s.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===a))))({type:2,toast:s}),s.id},$=(e,t)=>L("blank")(e,t);$.error=L("error"),$.success=L("success"),$.loading=L("loading"),$.custom=L("custom"),$.dismiss=(e,t)=>{let r={type:3,toastId:e};t?S(t)(r):C(r)},$.dismissAll=e=>$.dismiss(void 0,e),$.remove=(e,t)=>{let r={type:4,toastId:e};t?S(t)(r):C(r)},$.removeAll=e=>$.remove(void 0,e),$.promise=(e,t,r)=>{let a=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?b(t.success,e):void 0;return s?$.success(s,{id:a,...r,...null==r?void 0:r.success}):$.dismiss(a),e}).catch(e=>{let s=t.error?b(t.error,e):void 0;s?$.error(s,{id:a,...r,...null==r?void 0:r.error}):$.dismiss(a)}),e};var A=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,D=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,z=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,I=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,T=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${I} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=y("div")`
  position: absolute;
`,R=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(F,null,t):t:"blank"===r?null:s.createElement(R,null,s.createElement(D,{...a}),"loading"!==r&&s.createElement(W,null,"error"===r?s.createElement(U,{...a}):s.createElement(T,{...a})))},H=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,B=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;s.memo(({toast:e,position:t,style:a,children:i})=>{let o=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[s,i]=(()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=s.createElement(q,{toast:e}),l=s.createElement(B,{...e.ariaProps},b(e.message,e));return s.createElement(H,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof i?i({icon:n,message:l}):s.createElement(s.Fragment,null,n,l))}),a=s.createElement,c.p=void 0,h=a,m=void 0,f=void 0,p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["default",()=>$],5766)},6787,e=>{e.v(t=>Promise.all(["static/chunks/6ca8febb80b7bdfc.js"].map(t=>e.l(t))).then(()=>t(64939)))},33821,e=>{e.v(t=>Promise.all(["static/chunks/b96b9b4f2b5ad227.js"].map(t=>e.l(t))).then(()=>t(25944)))},76207,e=>{e.v(t=>Promise.all(["static/chunks/2382df2003c9bef2.js"].map(t=>e.l(t))).then(()=>t(59141)))},29323,e=>{e.v(t=>Promise.all(["static/chunks/1a7c51087792fc2c.js"].map(t=>e.l(t))).then(()=>t(84583)))}]);