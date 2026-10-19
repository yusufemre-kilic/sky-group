import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                                 */const Wc="modulepreload",Xc=function(e,t){return new URL(e,t).href},yo={},jc=function(t,i,r){let a=Promise.resolve();if(i&&i.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(i.map(c=>{if(c=Xc(c,r),c in yo)return;yo[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!r)for(let M=s.length-1;M>=0;M--){const g=s[M];if(g.href===c&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Wc,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((M,g)=>{m.addEventListener("load",M),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};globalThis.process??(globalThis.process={});const Yc=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),qc=function(e){return"/"+e},bo={},Kc=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let n=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=n(t.map(l=>{if(l=qc(l),l in bo)return;bo[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Yc,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return r.then(n=>{for(const s of n||[])s.status==="rejected"&&a(s.reason);return e().catch(a)})};globalThis.process??(globalThis.process={});const Zc=50,$c=7e6,Jc=()=>{const e=navigator.connection;return e?e.saveData===!0||/^(slow-2g|2g|3g)$/.test(e.effectiveType??""):!1},Qc=(e,t="adaptive")=>`https://videodelivery.net/${e}/manifest/video.m3u8${t==="max"?`?clientBandwidthHint=${Zc}`:""}`;async function Wl(e,t,i="adaptive"){const r=Qc(t,i==="max"&&Jc()?"adaptive":i);if(e.preload==="none"&&(e.preload="auto"),e.canPlayType("application/vnd.apple.mpegurl"))return e.src=r,null;const{default:a}=await Kc(async()=>{const{default:s}=await jc(async()=>{const{default:o}=await import("./hls.CqiKejYU-8rp1h7En.js");return{default:o}},[],import.meta.url);return{default:s}},[]);if(!a.isSupported())return e.src=r,null;const n=new a({testBandwidth:!1,abrEwmaDefaultEstimate:$c,capLevelToPlayerSize:!0});return n.loadSource(r),n.attachMedia(e),n}globalThis.process??(globalThis.process={});const vi=document.querySelector("[data-bcc-hero-video]"),Eo=vi==null?void 0:vi.dataset.streamUid;var zl;if(vi&&Eo){const e=document.querySelector(".bcc"),t=window.matchMedia("(prefers-reduced-motion: reduce)"),i=document.querySelector("[data-bcc-seasons-video]"),r=document.querySelector("[data-bcc-seasons-egg]");let a=!1,n=!1;const s=h=>vi.classList.toggle("bcc-hero-video-live",h);vi.addEventListener("playing",()=>s(!0));const o=h=>{(h==null?void 0:h.name)!=="AbortError"&&s(!1)},l=()=>!t.matches&&(e==null?void 0:e.dataset.heroOut)!=="true",c=async()=>{if(l()&&!n&&!a&&(a=!0,await Wl(vi,Eo,"max")),!l()){vi.pause(),i==null||i.pause();return}const h=i?parseFloat(getComputedStyle(i).opacity||"0"):0;n&&i?(i.play().then(()=>i.classList.add("bcc-hero-seasons-live")).catch(()=>{}),h>=.999?vi.pause():vi.play().catch(o)):(vi.play().catch(o),i&&h<=.001&&i.pause())};i==null||i.addEventListener("transitionend",h=>{h.propertyName==="opacity"&&c()});let u=0;const f=h=>{var m;n=h,(m=r==null?void 0:r.closest(".bcc-stage-hero"))==null||m.classList.toggle("bcc-hero-seasons",h),h&&i&&!i.src&&i.dataset.src&&(i.src=i.dataset.src),clearTimeout(u),u=window.setTimeout(()=>{c()},2500),c()};r==null||r.addEventListener("click",()=>{t.matches||!i||f(!n)}),c(),(zl=t.addEventListener)==null||zl.call(t,"change",h=>{h.matches&&n?f(!1):c()}),e&&new MutationObserver(()=>{c()}).observe(e,{attributeFilter:["data-hero-out"]})}globalThis.process??(globalThis.process={});const St=document.querySelector(".bcc-fact"),An=St==null?void 0:St.querySelector(".bcc-fact-media"),wo=St==null?void 0:St.querySelector(".bcc-fact-box"),Be=St==null?void 0:St.querySelector("[data-bcc-fact-video]"),Rn=St==null?void 0:St.querySelector("[data-bcc-fact-sound]"),yr=St==null?void 0:St.querySelector("[data-bcc-fact-replay]"),Cn=St==null?void 0:St.querySelector("[data-bcc-fact-fs]"),rt=St==null?void 0:St.querySelector("[data-bcc-fact-pip]"),Ra=St==null?void 0:St.querySelector("[data-bcc-pip-replay]"),di=document.querySelector("[data-bcc-pip-open]");var kl,Hl,Gl,Vl;if(St&&An&&wo&&Be&&Rn&&yr&&Cn&&rt&&Ra&&Be.dataset.streamUid){const e=Be.dataset.streamUid,t=window.matchMedia("(prefers-reduced-motion: reduce)");let i=null,r=!1,a="auto",n=!1,s=!1,o=0;const l=()=>i??(i=Wl(Be,e,"max")),c=()=>St.hasAttribute("data-bcc-live"),u=()=>c()&&(St.hasAttribute("data-bcc-cued")?!t.matches:r);Be.addEventListener("playing",()=>Be.classList.add("bcc-fact-video-on"),{once:!0});const f=()=>Rn.setAttribute("aria-pressed",String(!Be.muted));let h=!1;const m=()=>{const te=Be.duration;if(!Number.isFinite(te)||te<=0){yr.style.setProperty("--bcc-prog","0");return}yr.style.setProperty("--bcc-prog",String(Be.currentTime/te)),!h&&Be.currentTime>=te-.75&&(h=!0,rt.classList.add("bcc-pip-seen"))};Be.addEventListener("timeupdate",m),Be.addEventListener("loadedmetadata",m);const M=te=>{Be.currentTime=0,m(),te.classList.remove("bcc-fact-replay-spin"),te.offsetWidth,te.classList.add("bcc-fact-replay-spin")};for(const te of[yr,Ra])te.addEventListener("animationend",()=>te.classList.remove("bcc-fact-replay-spin"));const g=async()=>{if(!(n||s)){if(c()&&!i&&!t.matches&&l(),!u()){Be.pause();return}if(await l(),!(n||s)){if(!u()){Be.pause();return}a!=="off"&&(Be.muted=!1),f();try{await Be.play()}catch{Be.muted||(Be.muted=!0,f(),Be.play().catch(()=>{}))}}}},p=te=>{var ze,Ie;(Ie=(ze=te.target)==null?void 0:ze.closest)!=null&&Ie.call(ze,".bcc-fact-controls, .bcc-fact-pip")||a==="off"||!Be.muted||Be.paused||(Be.muted=!1,f(),Be.play().catch(()=>{Be.muted=!0,f(),Be.play().catch(()=>{})}))};document.addEventListener("pointerdown",p,{passive:!0}),document.addEventListener("keydown",p);let d=0,R=0,P=0,y=0;const T=()=>{rt.style.left=`${Math.round(d)}px`,rt.style.top=`${Math.round(R)}px`,rt.style.width=`${Math.round(P)}px`,rt.style.height=`${Math.round(y)}px`},C=20,A=44,v=()=>Math.round(Math.min(560,Math.max(240,window.innerWidth*.38))),b=te=>Math.min(Math.max(te,16),window.innerHeight-y-16),Y=te=>{var Ie;if(!((Ie=document.querySelector(".bcc"))!=null&&Ie.classList.contains("bcc-x"))||te.metaKey||te.ctrlKey||te.shiftKey||n||s)return;te.preventDefault(),n=!0,o=0;const ze=di.getBoundingClientRect();d=ze.left,R=ze.top,P=ze.width,y=ze.height,rt.classList.remove("bcc-pip-anim","bcc-pip-closing"),T(),rt.classList.add("bcc-pip-on"),rt.insertBefore(Be,rt.firstChild),di.classList.add("bcc-pip-holder"),rt.offsetWidth,rt.classList.add("bcc-pip-anim"),P=v(),y=Math.round(P*9/16),d=window.innerWidth-P-C,R=window.innerHeight-y-C,T(),rt.focus({preventScroll:!0}),(async()=>{if(await l(),!!n){a="on",Be.muted=!1,f();try{await Be.play()}catch{Be.muted=!0,f(),Be.play().catch(()=>{})}}})()},O=()=>{!n||s||(n=!1,o=0,Be.pause(),Be.muted=!0,f(),rt.classList.add("bcc-pip-closing"),window.setTimeout(()=>{rt.classList.remove("bcc-pip-on","bcc-pip-closing","bcc-pip-anim","bcc-pip-tucked","bcc-pip-tucked-l","bcc-pip-tucked-r","bcc-pip-controls"),An.appendChild(Be),di==null||di.classList.remove("bcc-pip-holder")},240))},L=()=>{s=!0,o=0,rt.classList.remove("bcc-pip-anim","bcc-pip-tucked","bcc-pip-tucked-l","bcc-pip-tucked-r","bcc-pip-controls"),rt.classList.add("bcc-pip-morphing");const te={x:d,y:R,w:P,h:y,r:14},ze=performance.now(),Ie=480,K=oe=>{const ce=Math.min(1,(oe-ze)/Ie),Ce=ce*ce*(3-2*ce),Oe=wo.getBoundingClientRect();if(d=te.x+(Oe.left-te.x)*Ce,R=te.y+(Oe.top-te.y)*Ce,P=te.w+(Oe.width-te.w)*Ce,y=te.h+(Oe.height-te.h)*Ce,rt.style.borderRadius=`${te.r+(24-te.r)*Ce}px`,T(),ce<1){requestAnimationFrame(K);return}An.appendChild(Be),rt.classList.remove("bcc-pip-on","bcc-pip-morphing"),rt.style.borderRadius="",di==null||di.classList.remove("bcc-pip-holder"),n=!1,s=!1,f(),g()};requestAnimationFrame(K)};new MutationObserver(()=>{if(n&&!s&&St.hasAttribute("data-bcc-cued")){L();return}g()}).observe(St,{attributeFilter:["data-bcc-cued","data-bcc-live"]}),(kl=t.addEventListener)==null||kl.call(t,"change",()=>{t.matches&&O(),g()}),g();let W=null;rt.addEventListener("pointerdown",te=>{s||(W={id:te.pointerId,px:te.clientX,py:te.clientY,ox:d,oy:R,moved:!1,onButton:!!te.target.closest("button")})}),rt.addEventListener("pointermove",te=>{if(!W)return;const ze=te.clientX-W.px,Ie=te.clientY-W.py;if(!W.moved){if(Math.abs(ze)+Math.abs(Ie)<=6)return;W.moved=!0,rt.setPointerCapture(W.id),rt.classList.remove("bcc-pip-anim")}d=W.ox+ze,R=W.oy+Ie,T()});const U=()=>{rt.classList.add("bcc-pip-anim");const te=window.innerWidth;d<-P*.33?(o=-1,d=A-P):d>te-P*.67?(o=1,d=te-A):(o=0,d=d+P/2<te/2?C:te-P-C),R=b(R),T(),rt.classList.toggle("bcc-pip-tucked",o!==0),rt.classList.toggle("bcc-pip-tucked-l",o===-1),rt.classList.toggle("bcc-pip-tucked-r",o===1)},k=()=>{o=0,rt.classList.add("bcc-pip-anim"),rt.classList.remove("bcc-pip-tucked","bcc-pip-tucked-l","bcc-pip-tucked-r"),d=d<window.innerWidth/2?C:window.innerWidth-P-C,R=b(R),T()},Q=()=>{W&&(W.moved?U():W.onButton||(o?k():rt.classList.toggle("bcc-pip-controls")),W=null)};rt.addEventListener("pointerup",Q),rt.addEventListener("pointercancel",Q),window.addEventListener("resize",()=>{if(!n||s)return;const te=window.innerWidth;P=Math.min(P,te-2*C),y=Math.round(P*9/16),o?d=o<0?A-P:te-A:d=Math.min(Math.max(d,C),te-P-C),R=b(R),T()}),window.addEventListener("keydown",te=>{te.key==="Escape"&&O()}),di==null||di.addEventListener("click",Y),(Hl=rt.querySelector(".bcc-pip-pause"))==null||Hl.addEventListener("click",O),(Gl=rt.querySelector(".bcc-pip-close"))==null||Gl.addEventListener("click",O),(Vl=rt.querySelector(".bcc-pip-tab"))==null||Vl.addEventListener("click",k),Ra.addEventListener("click",()=>{M(Ra),Be.paused&&Be.play().catch(()=>{})}),Rn.addEventListener("click",()=>{const te=Be.muted;Be.muted=!te,a=te?"on":"off",f(),Be.paused&&(r=!0,g())}),yr.addEventListener("click",()=>{M(yr),Be.paused&&(r=!0,g())});const V=Be,ue=typeof Be.requestFullscreen=="function"&&document.fullscreenEnabled!==!1;(ue||typeof V.webkitEnterFullscreen=="function")&&Cn.classList.add("bcc-fact-fs-ok");const $=()=>{var te;if(ue){Be.requestFullscreen().catch(()=>{var ze;return(ze=V.webkitEnterFullscreen)==null?void 0:ze.call(V)});return}try{(te=V.webkitEnterFullscreen)==null||te.call(V)}catch{}},J=()=>{c()&&(Be.muted=!1,f(),Be.play().catch(()=>{Be.muted=!0,f(),Be.play().catch(()=>{})}),$())};let re=!1;Cn.addEventListener("click",()=>{s||(r=!0,a="on",l(),Be.readyState>=HTMLMediaElement.HAVE_METADATA?J():re||(re=!0,Be.addEventListener("loadedmetadata",()=>{re=!1,J()},{once:!0})))});const Ue=()=>{if(Be.controls=!1,n){Be.play().catch(()=>{});return}g()};Be.addEventListener("webkitendfullscreen",Ue),document.addEventListener("fullscreenchange",()=>{if(document.fullscreenElement===Be){Be.controls=!0;return}Ue()})}globalThis.process??(globalThis.process={});const br="./_bpc/assets/base-core-concept",mr=[`${br}/core-back-profile.avif`,`${br}/core-front-hero.avif`,`${br}/core-front.avif`,`${br}/core-right.avif`,`${br}/core-hero-profile.avif`,`${br}/core-back.avif`],sr=(e,t,i)=>e+(t-e)*i();function eh(e,t=Math.random){const i=e<478,r=!i&&e<768,a=i?10:r?14:20,n=i?44:r?52:60,s=i?92:r?112:140,o=Math.floor(t()*mr.length);return Array.from({length:a},(l,c)=>{const u=sr(n,s,t),f=(u-n)/(s-n),h=sr(-18,18,t),m=t()>=.5?1:-1;return{asset:mr[(c+o)%mr.length],delay:Math.round(620+c/a*920+sr(0,120,t)),drift:Number(sr(-8,8,t).toFixed(2)),duration:Math.round(3400-f*850+sr(0,250,t)),rotationEnd:Math.round(h+m*sr(60,220,t)),rotationStart:Math.round(h),size:Math.round(u),x:Number(sr(3,97,t).toFixed(2))}})}function th(e){const t=e<478?76:104;return[{asset:mr[4],x:20,y:24,size:t,rotation:-7},{asset:mr[2],x:51,y:61,size:Math.round(t*.9),rotation:5},{asset:mr[0],x:82,y:31,size:Math.round(t*1.05),rotation:8}]}function pi(e,t,i){e.style.setProperty(t,i)}function ih(e=document){const t=e.querySelector("[data-bcc-core-rain]"),i=t==null?void 0:t.querySelector("[data-bcc-core-rain-trigger]"),r=t==null?void 0:t.querySelector("[data-bcc-core-rain-overlay]"),a=t==null?void 0:t.querySelector("[data-bcc-core-rain-status]");if(!t||!i||!r||!a||t.dataset.bccCoreRainReady)return()=>{};t.dataset.bccCoreRainReady="true";const n=new AbortController,s=window.matchMedia("(prefers-reduced-motion: reduce)");let o=0,l,c=[];const u=()=>{window.clearTimeout(o),o=0,r.replaceChildren(),a.textContent="",delete t.dataset.bccCoreRainActive,delete t.dataset.bccCoreRainMode},f=()=>{c.length||(c=mr.map(g=>{const p=new Image(512,512);return p.decoding="async",p.src=g,p}),l==null||l.disconnect())};"IntersectionObserver"in window&&(l=new IntersectionObserver(g=>{g.some(p=>p.isIntersecting)&&f()},{rootMargin:"600px 0px"}),l.observe(i)),i.addEventListener("pointerenter",f,{once:!0,signal:n.signal}),i.addEventListener("focus",f,{once:!0,signal:n.signal});const h=g=>{const p=document.createElement("img");return p.alt="",p.className="bcc-core-rain-drop",p.dataset.bccCoreRainDrop="falling",p.decoding="async",p.draggable=!1,p.height=512,p.loading="eager",p.src=g.asset,p.width=512,pi(p,"--core-delay",`${g.delay}ms`),pi(p,"--core-drift",`${g.drift}vw`),pi(p,"--core-duration",`${g.duration}ms`),pi(p,"--core-rotation-end",`${g.rotationEnd}deg`),pi(p,"--core-rotation-start",`${g.rotationStart}deg`),pi(p,"--core-size",`${g.size}px`),pi(p,"--core-x",`${g.x}vw`),p},m=g=>{const p=document.createElement("img");return p.alt="",p.className="bcc-core-rain-drop bcc-core-rain-drop-static",p.dataset.bccCoreRainDrop="static",p.decoding="async",p.draggable=!1,p.height=512,p.loading="eager",p.src=g.asset,p.width=512,pi(p,"--core-rotation-static",`${g.rotation}deg`),pi(p,"--core-size",`${g.size}px`),pi(p,"--core-x",`${g.x}vw`),pi(p,"--core-y",`${g.y}vh`),p},M=()=>{if(t.dataset.bccCoreRainActive){const R=t.dataset.bccCoreRainMode==="falling";u(),R&&t.offsetWidth}f(),t.dataset.bccCoreRainActive="true";const g=s.matches;if(t.dataset.bccCoreRainMode=g?"static":"falling",a.textContent=g?"Base Core constellation.":"Base Core shower.",g){r.replaceChildren(...th(window.innerWidth).map(m)),o=window.setTimeout(u,1200);return}const p=eh(window.innerWidth);r.replaceChildren(...p.map(h));const d=Math.max(...p.map(R=>R.delay+R.duration));o=window.setTimeout(u,d+300)};return r.addEventListener("animationend",g=>{const p=g.target;!(p instanceof HTMLElement)||p.dataset.bccCoreRainDrop!=="falling"||(p.remove(),r.children.length||u())},{signal:n.signal}),i.addEventListener("click",M,{signal:n.signal}),s.addEventListener("change",()=>{t.dataset.bccCoreRainActive&&u()},{signal:n.signal}),window.addEventListener("pagehide",u,{signal:n.signal}),()=>{n.abort(),l==null||l.disconnect(),c=[],u(),delete t.dataset.bccCoreRainReady}}ih();var no="186",Gr={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rh=0,To=1,ah=2,sn=1,nh=2,ha=3,vr=0,ti=1,_i=2,Vi=0,da=1,pa=2,Ao=3,Ro=4,sh=5,Fr=100,oh=101,lh=102,ch=103,hh=104,uh=200,dh=201,ph=202,fh=203,Xl=204,jl=205,mh=206,gh=207,vh=208,_h=209,Mh=210,Sh=211,xh=212,yh=213,bh=214,ms=0,gs=1,vs=2,_a=3,_s=4,Ms=5,Ss=6,xs=7,Yl=0,Eh=1,wh=2,Ri=0,ql=1,Kl=2,Zl=3,so=4,$l=5,Jl=6,Ql=7,ec=300,_r=301,Zr=302,Ln=303,Pn=304,En=306,ys=1e3,Gi=1001,bs=1002,Wt=1003,Th=1004,Ca=1005,Xt=1006,Dn=1007,pr=1008,hi=1009,tc=1010,ic=1011,Ma=1012,oo=1013,Ci=1014,Ti=1015,Li=1016,lo=1017,co=1018,Sa=1020,rc=35902,ac=35899,nc=1021,sc=1022,Mi=1023,Xi=1026,fr=1027,oc=1028,ho=1029,Mr=1030,uo=1031,po=1033,on=33776,ln=33777,cn=33778,hn=33779,Es=35840,ws=35841,Ts=35842,As=35843,Rs=36196,Cs=37492,Ls=37496,Ps=37488,Ds=37489,gn=37490,Us=37491,Is=37808,Ns=37809,Os=37810,Fs=37811,Bs=37812,zs=37813,ks=37814,Hs=37815,Gs=37816,Vs=37817,Ws=37818,Xs=37819,js=37820,Ys=37821,qs=36492,Ks=36494,Zs=36495,$s=36283,Js=36284,vn=36285,Qs=36286,Ah=3200,Co=0,Rh=1,ir="",li="srgb",_n="srgb-linear",Mn="linear",_t="srgb",Un=7680,Ch=519,Lh=512,Ph=513,Dh=514,fo=515,Uh=516,Ih=517,mo=518,Nh=519,Oh=35044,Lo="300 es",Ai=2e3,Sn=2001;function Fh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Bh(){let e=xn("canvas");return e.style.display="block",e}var Po={};function Do(...e){let t="THREE."+e.shift();console.log(t,...e)}function lc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ge(...e){e=lc(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function ut(...e){e=lc(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Vr(...e){let t=e.join(" ");t in Po||(Po[t]=!0,Ge(...e))}function zh(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var kh={[ms]:gs,[vs]:Ss,[_s]:xs,[_a]:Ms,[gs]:ms,[Ss]:vs,[xs]:_s,[Ms]:_a},ar=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,eo=180/Math.PI;function Ea(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[e&255]+jt[e>>8&255]+jt[e>>16&255]+jt[e>>24&255]+"-"+jt[t&255]+jt[t>>8&255]+"-"+jt[t>>16&15|64]+jt[t>>24&255]+"-"+jt[i&63|128]+jt[i>>8&255]+"-"+jt[i>>16&255]+jt[i>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function Je(e,t,i){return Math.max(t,Math.min(i,e))}function Hh(e,t){return(e%t+t)%t}function In(e,t,i){return(1-i)*e+i*t}function ia(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gh={DEG2RAD:fa},Xr,De=(Xr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Je(this.x,t.x,i.x),this.y=Je(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Je(this.x,t,i),this.y=Je(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Je(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xr.prototype.isVector2=!0,Xr),rr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],u=i[r+3],f=a[n+0],h=a[n+1],m=a[n+2],M=a[n+3];if(u!==M||o!==f||l!==h||c!==m){let g=o*f+l*h+c*m+u*M;g<0&&(f=-f,h=-h,m=-m,M=-M,g=-g);let p=1-s;if(g<.9995){let d=Math.acos(g),R=Math.sin(d);p=Math.sin(p*d)/R,s=Math.sin(s*d)/R,o=o*p+f*s,l=l*p+h*s,c=c*p+m*s,u=u*p+M*s}else{o=o*p+f*s,l=l*p+h*s,c=c*p+m*s,u=u*p+M*s;let d=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=d,l*=d,c*=d,u*=d}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],u=a[n],f=a[n+1],h=a[n+2],m=a[n+3];return e[t]=s*m+c*u+o*h-l*f,e[t+1]=o*m+c*f+l*u-s*h,e[t+2]=l*m+c*h+s*f-o*u,e[t+3]=c*m-s*u-o*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),u=s(a/2),f=o(i/2),h=o(r/2),m=o(a/2);switch(n){case"XYZ":this._x=f*c*u+l*h*m,this._y=l*h*u-f*c*m,this._z=l*c*m+f*h*u,this._w=l*c*u-f*h*m;break;case"YXZ":this._x=f*c*u+l*h*m,this._y=l*h*u-f*c*m,this._z=l*c*m-f*h*u,this._w=l*c*u+f*h*m;break;case"ZXY":this._x=f*c*u-l*h*m,this._y=l*h*u+f*c*m,this._z=l*c*m+f*h*u,this._w=l*c*u-f*h*m;break;case"ZYX":this._x=f*c*u-l*h*m,this._y=l*h*u+f*c*m,this._z=l*c*m-f*h*u,this._w=l*c*u+f*h*m;break;case"YZX":this._x=f*c*u+l*h*m,this._y=l*h*u+f*c*m,this._z=l*c*m-f*h*u,this._w=l*c*u-f*h*m;break;case"XZY":this._x=f*c*u-l*h*m,this._y=l*h*u-f*c*m,this._z=l*c*m+f*h*u,this._w=l*c*u+f*h*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10],f=i+s+u;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-o)*h,this._y=(a-l)*h,this._z=(n-r)*h}else if(i>s&&i>u){let h=2*Math.sqrt(1+i-s-u);this._w=(c-o)/h,this._x=.25*h,this._y=(r+n)/h,this._z=(a+l)/h}else if(s>u){let h=2*Math.sqrt(1+s-i-u);this._w=(a-l)/h,this._x=(r+n)/h,this._y=.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-i-s);this._w=(n-r)/h,this._x=(a+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jr,x=(jr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Uo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Uo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),u=2*(o*i-n*a),f=2*(n*r-s*i);return this.x=i+l*c+s*f-o*u,this.y=r+l*u+o*c-n*f,this.z=a+l*f+n*u-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Je(this.x,t.x,i.x),this.y=Je(this.y,t.y,i.y),this.z=Je(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Je(this.x,t,i),this.y=Je(this.y,t,i),this.z=Je(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Nn.copy(this).projectOnVector(t),this.sub(Nn)}reflect(t){return this.sub(Nn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Je(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jr.prototype.isVector3=!0,jr),Nn=new x,Uo=new rr,Yr,Xe=(Yr=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],m=r[5],M=r[8],g=a[0],p=a[3],d=a[6],R=a[1],P=a[4],y=a[7],T=a[2],C=a[5],A=a[8];return n[0]=s*g+o*R+l*T,n[3]=s*p+o*P+l*C,n[6]=s*d+o*y+l*A,n[1]=c*g+u*R+f*T,n[4]=c*p+u*P+f*C,n[7]=c*d+u*y+f*A,n[2]=h*g+m*R+M*T,n[5]=h*p+m*P+M*C,n[8]=h*d+m*y+M*A,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return i*s*u-i*o*c-r*n*u+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*s-o*c,h=o*l-u*n,m=c*n-s*l,M=i*f+r*h+a*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/M;return t[0]=f*g,t[1]=(a*c-u*r)*g,t[2]=(o*r-a*s)*g,t[3]=h*g,t[4]=(u*i-a*l)*g,t[5]=(a*n-o*i)*g,t[6]=m*g,t[7]=(r*l-c*i)*g,t[8]=(s*i-r*n)*g,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(On.makeScale(t,i)),this}rotate(t){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(On.makeRotation(-t)),this}translate(t,i){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(On.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yr.prototype.isMatrix3=!0,Yr),On=new Xe,Io=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){let e={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===_t&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(a.r=Wr(a.r),a.g=Wr(a.g),a.b=Wr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ir?Mn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[_n]:{primaries:t,whitePoint:r,transfer:Mn,toXYZ:Io,fromXYZ:No,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:_t,toXYZ:Io,fromXYZ:No,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),e}var st=Vh();function Wi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Wr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Er,Wh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=xn("canvas")),Er.width=e.width,Er.height=e.height;let r=Er.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Wi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xh=0,go=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Fn(r[n].image)):a.push(Fn(r[n]))}else a=Fn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Fn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var jh=0,Bn=new x,ui=class un extends ar{constructor(t=un.DEFAULT_IMAGE,i=un.DEFAULT_MAPPING,r=Gi,a=Gi,n=Xt,s=pr,o=Mi,l=hi,c=un.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Ea(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bn).x}get height(){return this.source.getSize(Bn).y}get depth(){return this.source.getSize(Bn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ge(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=ec;ui.DEFAULT_ANISOTROPY=1;var qr,Ot=(qr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],u=s[1],f=s[5],h=s[9],m=s[2],M=s[6],g=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(h-M)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(h+M)<.1&&Math.abs(o+f+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,R=(f+1)/2,P=(g+1)/2,y=(l+u)/4,T=(c+m)/4,C=(h+M)/4;return d>R&&d>P?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=y/r,n=T/r):R>P?R<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(R),r=y/a,n=C/a):P<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(P),r=T/n,a=C/n),this.set(r,a,n,i),this}let p=Math.sqrt((M-h)*(M-h)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(p)<.001&&(p=1),this.x=(M-h)/p,this.y=(c-m)/p,this.z=(u-l)/p,this.w=Math.acos((o+f+g-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Je(this.x,t.x,i.x),this.y=Je(this.y,t.y,i.y),this.z=Je(this.z,t.z,i.z),this.w=Je(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Je(this.x,t,i),this.y=Je(this.y,t,i),this.z=Je(this.z,t,i),this.w=Je(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qr.prototype.isVector4=!0,qr),Yh=class extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new ui(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new go(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Yh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},cc=class extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},qh=class extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},gr,Lt=(gr=class{constructor(t,i,r,a,n,s,o,l,c,u,f,h,m,M,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,u,f,h,m,M,g,p)}set(t,i,r,a,n,s,o,l,c,u,f,h,m,M,g,p){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=M,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/wr.setFromMatrixColumn(t,0).length(),n=1/wr.setFromMatrixColumn(t,1).length(),s=1/wr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),u=Math.cos(n),f=Math.sin(n);if(t.order==="XYZ"){let h=s*u,m=s*f,M=o*u,g=o*f;i[0]=l*u,i[4]=-l*f,i[8]=c,i[1]=m+M*c,i[5]=h-g*c,i[9]=-o*l,i[2]=g-h*c,i[6]=M+m*c,i[10]=s*l}else if(t.order==="YXZ"){let h=l*u,m=l*f,M=c*u,g=c*f;i[0]=h+g*o,i[4]=M*o-m,i[8]=s*c,i[1]=s*f,i[5]=s*u,i[9]=-o,i[2]=m*o-M,i[6]=g+h*o,i[10]=s*l}else if(t.order==="ZXY"){let h=l*u,m=l*f,M=c*u,g=c*f;i[0]=h-g*o,i[4]=-s*f,i[8]=M+m*o,i[1]=m+M*o,i[5]=s*u,i[9]=g-h*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let h=s*u,m=s*f,M=o*u,g=o*f;i[0]=l*u,i[4]=M*c-m,i[8]=h*c+g,i[1]=l*f,i[5]=g*c+h,i[9]=m*c-M,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let h=s*l,m=s*c,M=o*l,g=o*c;i[0]=l*u,i[4]=g-h*f,i[8]=M*f+m,i[1]=f,i[5]=s*u,i[9]=-o*u,i[2]=-c*u,i[6]=m*f+M,i[10]=h-g*f}else if(t.order==="XZY"){let h=s*l,m=s*c,M=o*l,g=o*c;i[0]=l*u,i[4]=-f,i[8]=c*u,i[1]=h*f+g,i[5]=s*u,i[9]=m*f-M,i[2]=M*f-m,i[6]=o*u,i[10]=g*f+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Zh)}lookAt(t,i,r){let a=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Zi.crossVectors(r,ii),Zi.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Zi.crossVectors(r,ii)),Zi.normalize(),La.crossVectors(ii,Zi),a[0]=Zi.x,a[4]=La.x,a[8]=ii.x,a[1]=Zi.y,a[5]=La.y,a[9]=ii.y,a[2]=Zi.z,a[6]=La.z,a[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],m=r[13],M=r[2],g=r[6],p=r[10],d=r[14],R=r[3],P=r[7],y=r[11],T=r[15],C=a[0],A=a[4],v=a[8],b=a[12],Y=a[1],O=a[5],L=a[9],W=a[13],U=a[2],k=a[6],Q=a[10],V=a[14],ue=a[3],$=a[7],J=a[11],re=a[15];return n[0]=s*C+o*Y+l*U+c*ue,n[4]=s*A+o*O+l*k+c*$,n[8]=s*v+o*L+l*Q+c*J,n[12]=s*b+o*W+l*V+c*re,n[1]=u*C+f*Y+h*U+m*ue,n[5]=u*A+f*O+h*k+m*$,n[9]=u*v+f*L+h*Q+m*J,n[13]=u*b+f*W+h*V+m*re,n[2]=M*C+g*Y+p*U+d*ue,n[6]=M*A+g*O+p*k+d*$,n[10]=M*v+g*L+p*Q+d*J,n[14]=M*b+g*W+p*V+d*re,n[3]=R*C+P*Y+y*U+T*ue,n[7]=R*A+P*O+y*k+T*$,n[11]=R*v+P*L+y*Q+T*J,n[15]=R*b+P*W+y*V+T*re,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],M=t[3],g=t[7],p=t[11],d=t[15],R=l*m-c*h,P=o*m-c*f,y=o*h-l*f,T=s*m-c*u,C=s*h-l*u,A=s*f-o*u;return i*(g*R-p*P+d*y)-r*(M*R-p*T+d*C)+a*(M*P-g*T+d*A)-n*(M*y-g*C+p*A)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return i*(s*u-o*c)-r*(n*u-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],M=t[12],g=t[13],p=t[14],d=t[15],R=i*o-r*s,P=i*l-a*s,y=i*c-n*s,T=r*l-a*o,C=r*c-n*o,A=a*c-n*l,v=u*g-f*M,b=u*p-h*M,Y=u*d-m*M,O=f*p-h*g,L=f*d-m*g,W=h*d-m*p,U=R*W-P*L+y*O+T*Y-C*b+A*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/U;return t[0]=(o*W-l*L+c*O)*k,t[1]=(a*L-r*W-n*O)*k,t[2]=(g*A-p*C+d*T)*k,t[3]=(h*C-f*A-m*T)*k,t[4]=(l*Y-s*W-c*b)*k,t[5]=(i*W-a*Y+n*b)*k,t[6]=(p*y-M*A-d*P)*k,t[7]=(u*A-h*y+m*P)*k,t[8]=(s*L-o*Y+c*v)*k,t[9]=(r*Y-i*L-n*v)*k,t[10]=(M*C-g*y+d*R)*k,t[11]=(f*y-u*C-m*R)*k,t[12]=(o*b-s*O-l*v)*k,t[13]=(i*O-r*b+a*v)*k,t[14]=(g*P-M*T-p*R)*k,t[15]=(u*T-f*P+h*R)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,u=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+r,u*l-a*s,0,c*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,u=s+s,f=o+o,h=n*c,m=n*u,M=n*f,g=s*u,p=s*f,d=o*f,R=l*c,P=l*u,y=l*f,T=r.x,C=r.y,A=r.z;return a[0]=(1-(g+d))*T,a[1]=(m+y)*T,a[2]=(M-P)*T,a[3]=0,a[4]=(m-y)*C,a[5]=(1-(h+d))*C,a[6]=(p+R)*C,a[7]=0,a[8]=(M+P)*A,a[9]=(p-R)*A,a[10]=(1-(h+g))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=wr.set(a[0],a[1],a[2]).length(),o=wr.set(a[4],a[5],a[6]).length(),l=wr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),fi.copy(this);let c=1/s,u=1/o,f=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,i.setFromRotationMatrix(fi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=Ai,l=!1){let c=this.elements,u=2*n/(i-t),f=2*n/(r-a),h=(i+t)/(i-t),m=(r+a)/(r-a),M,g;if(l)M=n/(s-n),g=s*n/(s-n);else if(o===Ai)M=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===Sn)M=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Ai,l=!1){let c=this.elements,u=2/(i-t),f=2/(r-a),h=-(i+t)/(i-t),m=-(r+a)/(r-a),M,g;if(l)M=1/(s-n),g=s/(s-n);else if(o===Ai)M=-2/(s-n),g=-(s+n)/(s-n);else if(o===Sn)M=-1/(s-n),g=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=M,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},gr.prototype.isMatrix4=!0,gr),wr=new x,fi=new Lt,Kh=new x(0,0,0),Zh=new x(1,1,1),Zi=new x,La=new x,ii=new x,Oo=new Lt,Fo=new rr,xa=class hc{constructor(t=0,i=0,r=0,a=hc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],f=a[2],h=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xa.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$h=0,Bo=new x,Tr=new rr,Ii=new Lt,Pa=new x,ra=new x,Jh=new x,Qh=new rr,zo=new x(1,0,0),ko=new x(0,1,0),Ho=new x(0,0,1),Go={type:"added"},eu={type:"removed"},Ar={type:"childadded",child:null},zn={type:"childremoved",child:null},xi=class dn extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();let t=new x,i=new xa,r=new rr,a=new x(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Xe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,i){return Bo.copy(t).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Pa.copy(t):Pa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ra,Pa,this.up):Ii.lookAt(Pa,ra,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Tr.setFromRotationMatrix(Ii),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Go),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(eu),zn.child=t,this.dispatchEvent(zn),zn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Go),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,Jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];n(t.shapes,f)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),f=s(t.shapes),h=s(t.skeletons),m=s(t.animations),M=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),M.length>0&&(r.nodes=M)}return r.object=a,r;function s(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xi.DEFAULT_UP=new x(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}},tu={type:"move"},kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,i),p=this._getHandJoint(l,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=.02,m=.005;l.inputState.pinching&&f>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Hn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Hh(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Hn(n,a,e+1/3),this.g=Hn(n,a,e),this.b=Hn(n,a,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=li){function i(a){a!==void 0&&parseFloat(a)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){let i=uc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return st.workingToColorSpace(Yt.copy(this),e),Math.round(Je(Yt.r*255,0,255))*65536+Math.round(Je(Yt.g*255,0,255))*256+Math.round(Je(Yt.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,a=Yt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=c<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=li){st.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Da);let i=In($i.h,Da.h,t),r=In($i.s,Da.s,t),a=In($i.l,Da.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new He;He.NAMES=uc;var iu=class dc{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(t),this.density=i}clone(){return new dc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ru=class extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mi=new x,Ni=new x,Gn=new x,Oi=new x,Rr=new x,Cr=new x,Vo=new x,Vn=new x,Wn=new x,Xn=new x,jn=new Ot,Yn=new Ot,qn=new Ot,Br=class zr{constructor(t=new x,i=new x,r=new x){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),mi.subVectors(t,i),a.cross(mi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){mi.subVectors(a,i),Ni.subVectors(r,i),Gn.subVectors(t,i);let s=mi.dot(mi),o=mi.dot(Ni),l=mi.dot(Gn),c=Ni.dot(Ni),u=Ni.dot(Gn),f=s*c-o*o;if(f===0)return n.set(0,0,0),null;let h=1/f,m=(c*l-o*u)*h,M=(s*u-o*l)*h;return n.set(1-m-M,M,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Oi.x),l.addScaledVector(s,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return jn.setScalar(0),Yn.setScalar(0),qn.setScalar(0),jn.fromBufferAttribute(t,i),Yn.fromBufferAttribute(t,r),qn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(jn,n.x),s.addScaledVector(Yn,n.y),s.addScaledVector(qn,n.z),s}static isFrontFacing(t,i,r,a){return mi.subVectors(r,i),Ni.subVectors(t,i),mi.cross(Ni).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),mi.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return zr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return zr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Rr.subVectors(a,r),Cr.subVectors(n,r),Vn.subVectors(t,r);let l=Rr.dot(Vn),c=Cr.dot(Vn);if(l<=0&&c<=0)return i.copy(r);Wn.subVectors(t,a);let u=Rr.dot(Wn),f=Cr.dot(Wn);if(u>=0&&f<=u)return i.copy(a);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(Rr,s);Xn.subVectors(t,n);let m=Rr.dot(Xn),M=Cr.dot(Xn);if(M>=0&&m<=M)return i.copy(n);let g=m*c-l*M;if(g<=0&&c>=0&&M<=0)return o=c/(c-M),i.copy(r).addScaledVector(Cr,o);let p=u*M-m*f;if(p<=0&&f-u>=0&&m-M>=0)return Vo.subVectors(n,a),o=(f-u)/(f-u+(m-M)),i.copy(a).addScaledVector(Vo,o);let d=1/(p+g+h);return s=g*d,o=h*d,i.copy(r).addScaledVector(Rr,s).addScaledVector(Cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wa=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,gi):gi.fromBufferAttribute(a,n),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Ia.subVectors(this.max,aa),Lr.subVectors(e.a,aa),Pr.subVectors(e.b,aa),Dr.subVectors(e.c,aa),Ji.subVectors(Pr,Lr),Qi.subVectors(Dr,Pr),or.subVectors(Lr,Dr);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-or.z,or.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,or.z,0,-or.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-or.y,or.x,0];return!Kn(t,Lr,Pr,Dr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,Lr,Pr,Dr,Ia))?!1:(Na.crossVectors(Ji,Qi),t=[Na.x,Na.y,Na.z],Kn(t,Lr,Pr,Dr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new x,new x,new x,new x,new x,new x,new x,new x],gi=new x,Ua=new wa,Lr=new x,Pr=new x,Dr=new x,Ji=new x,Qi=new x,or=new x,aa=new x,Ia=new x,Na=new x,lr=new x;function Kn(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){lr.fromArray(e,n);let o=a.x*Math.abs(lr.x)+a.y*Math.abs(lr.y)+a.z*Math.abs(lr.z),l=t.dot(lr),c=i.dot(lr),u=r.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Nt=new x,Oa=new De,au=0,ai=class extends ar{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:au++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),a=Qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},pc=class extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}},fc=class extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}},mt=class extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}},nu=new wa,na=new x,Zn=new x,Ta=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):nu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Zn)),this.expandByPoint(na.copy(e.center).sub(Zn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},su=0,si=new Lt,$n=new xi,Ur=new x,ri=new wa,sa=new wa,Vt=new x,zt=class mc extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?fc:pc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Xe().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return $n.lookAt(t),$n.updateMatrix(),this.applyMatrix4($n.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new mt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];ri.setFromBufferAttribute(n),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(t){let r=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(ri.min,sa.min),ri.expandByPoint(Vt),Vt.addVectors(ri.max,sa.max),ri.expandByPoint(Vt)):(ri.expandByPoint(sa.min),ri.expandByPoint(sa.max))}ri.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Vt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Vt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(t,c),Vt.add(Ur)),a=Math.max(a,r.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ai(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let v=0;v<r.count;v++)o[v]=new x,l[v]=new x;let c=new x,u=new x,f=new x,h=new De,m=new De,M=new De,g=new x,p=new x;function d(v,b,Y){c.fromBufferAttribute(r,v),u.fromBufferAttribute(r,b),f.fromBufferAttribute(r,Y),h.fromBufferAttribute(n,v),m.fromBufferAttribute(n,b),M.fromBufferAttribute(n,Y),u.sub(c),f.sub(c),m.sub(h),M.sub(h);let O=1/(m.x*M.y-M.x*m.y);isFinite(O)&&(g.copy(u).multiplyScalar(M.y).addScaledVector(f,-m.y).multiplyScalar(O),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-M.x).multiplyScalar(O),o[v].add(g),o[b].add(g),o[Y].add(g),l[v].add(p),l[b].add(p),l[Y].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let v=0,b=R.length;v<b;++v){let Y=R[v],O=Y.start,L=Y.count;for(let W=O,U=O+L;W<U;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let P=new x,y=new x,T=new x,C=new x;function A(v){T.fromBufferAttribute(a,v),C.copy(T);let b=o[v];P.copy(b),P.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(C,b);let Y=y.dot(l[v])<0?-1:1;s.setXYZW(v,P.x,P.y,P.z,Y)}for(let v=0,b=R.length;v<b;++v){let Y=R[v],O=Y.start,L=Y.count;for(let W=O,U=O+L;W<U;W+=3)A(t.getX(W+0)),A(t.getX(W+1)),A(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);let a=new x,n=new x,s=new x,o=new x,l=new x,c=new x,u=new x,f=new x;if(t)for(let h=0,m=t.count;h<m;h+=3){let M=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);a.fromBufferAttribute(i,M),n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,p),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),o.fromBufferAttribute(r,M),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,p),o.add(u),l.add(u),c.add(u),r.setXYZ(M,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=i.count;h<m;h+=3)a.fromBufferAttribute(i,h+0),n.fromBufferAttribute(i,h+1),s.fromBufferAttribute(i,h+2),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Vt.fromBufferAttribute(t,i),Vt.normalize(),t.setXYZ(i,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),m=0,M=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let d=0;d<u;d++)h[M++]=c[m++]}return new ai(h,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new mc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=t(h,r);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let u=a[c];this.setAttribute(c,u.clone(i))}let n=t.morphAttributes;for(let c in n){let u=[],f=n[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(i));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,u=s.length;c<u;c++){let f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=new x,ou=new x,lu=new Xe,ki=class{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Jn.subVectors(i,t).cross(ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Jn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lu.getNormalMatrix(e),r=this.coplanarPoint(Jn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cu=0,Jr=class extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=da,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=jl,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Un,this.stencilZFail=Un,this.stencilZPass=Un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ki().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=new x,Qn=new x,Fa=new x,Ba=new x,Aa=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qn.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Ba.copy(this.origin).sub(Qn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Fa),s=Ba.dot(this.direction),o=-Ba.dot(Fa),l=Ba.lengthSq(),c=Math.abs(1-n*n),u,f,h,m;if(c>0)if(u=n*o-s,f=n*s-o,m=a*c,u>=0)if(f>=-m)if(f<=m){let M=1/c;u*=M,f*=M,h=u*(u+n*f+2*s)+f*(n*u+f+2*o)+l}else f=a,u=Math.max(0,-(n*f+s)),h=-u*u+f*(f+2*o)+l;else f=-a,u=Math.max(0,-(n*f+s)),h=-u*u+f*(f+2*o)+l;else f<=-m?(u=Math.max(0,-(-n*a+s)),f=u>0?-a:Math.min(Math.max(-a,-o),a),h=-u*u+f*(f+2*o)+l):f<=m?(u=0,f=Math.min(Math.max(-a,-o),a),h=f*(f+2*o)+l):(u=Math.max(0,-(n*a+s)),f=u>0?a:Math.min(Math.max(-a,-o),a),h=-u*u+f*(f+2*o)+l);else f=n>0?-a:a,u=Math.max(0,-(n*f+s)),h=-u*u+f*(f+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qn).addScaledVector(Fa,f),h}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),c>=0?(a=(e.min.y-f.y)*c,n=(e.max.y-f.y)*c):(a=(e.max.y-f.y)*c,n=(e.min.y-f.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-f.z)*u,o=(e.max.z-f.z)*u):(s=(e.max.z-f.z)*u,o=(e.min.z-f.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,u=e.x-n.x,f=e.y-n.y,h=e.z-n.z,m=t.x-n.x,M=t.y-n.y,g=t.z-n.z,p=i.x-n.x,d=i.y-n.y,R=i.z-n.z,P=Math.abs(o),y=Math.abs(l),T=Math.abs(c),C,A,v,b,Y,O,L,W,U,k,Q,V;if(P>=y&&P>=T?(v=o,O=u,U=m,V=p,o>=0?(C=l,A=c,b=f,Y=h,L=M,W=g,k=d,Q=R):(C=c,A=l,b=h,Y=f,L=g,W=M,k=R,Q=d)):y>=T?(v=l,O=f,U=M,V=d,l>=0?(C=c,A=o,b=h,Y=u,L=g,W=m,k=R,Q=p):(C=o,A=c,b=u,Y=h,L=m,W=g,k=p,Q=R)):(v=c,O=h,U=g,V=R,c>=0?(C=o,A=l,b=u,Y=f,L=m,W=M,k=p,Q=d):(C=l,A=o,b=f,Y=u,L=M,W=m,k=d,Q=p)),v===0)return null;let ue=C/v,$=A/v,J=1/v,re=b-ue*O,Ue=Y-$*O,te=L-ue*U,ze=W-$*U,Ie=k-ue*V,K=Q-$*V,oe=Ie*ze-K*te,ce=re*K-Ue*Ie,Ce=te*Ue-ze*re;if(r){if(oe<0||ce<0||Ce<0)return null}else if((oe<0||ce<0||Ce<0)&&(oe>0||ce>0||Ce>0))return null;let Oe=oe+ce+Ce;if(Oe===0)return null;let ve=J*(oe*O+ce*U+Ce*V);return(Oe>0?ve<0:ve>0)?null:this.at(ve/Oe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wo=new Lt,cr=new Aa,za=new Ta,Xo=new x,ka=new x,Ha=new x,Ga=new x,es=new x,Va=new x,jo=new x,Wa=new x,Bt=class extends xi{constructor(t=new zt,i=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){let s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(t,i){let r=this.geometry,a=r.attributes.position,n=r.morphAttributes.position,s=r.morphTargetsRelative;i.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(n&&o){Va.set(0,0,0);for(let l=0,c=n.length;l<c;l++){let u=o[l],f=n[l];u!==0&&(es.fromBufferAttribute(f,t),s?Va.addScaledVector(es,u):Va.addScaledVector(es.sub(i),u))}i.add(Va)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){let r=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),za.copy(r.boundingSphere),za.applyMatrix4(n),cr.copy(t.ray).recast(t.near),!(za.containsPoint(cr.origin)===!1&&(cr.intersectSphere(za,Xo)===null||cr.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(Wo.copy(n).invert(),cr.copy(t.ray).applyMatrix4(Wo),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,cr)))}_computeIntersections(t,i,r){let a,n=this.geometry,s=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,f=n.attributes.normal,h=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(s))for(let M=0,g=h.length;M<g;M++){let p=h[M],d=s[p.materialIndex],R=Math.max(p.start,m.start),P=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=R,T=P;y<T;y+=3){let C=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);a=Xa(this,d,t,r,c,u,f,C,A,v),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,i.push(a))}}else{let M=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=M,d=g;p<d;p+=3){let R=o.getX(p),P=o.getX(p+1),y=o.getX(p+2);a=Xa(this,s,t,r,c,u,f,R,P,y),a&&(a.faceIndex=Math.floor(p/3),i.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let M=0,g=h.length;M<g;M++){let p=h[M],d=s[p.materialIndex],R=Math.max(p.start,m.start),P=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=R,T=P;y<T;y+=3){let C=y,A=y+1,v=y+2;a=Xa(this,d,t,r,c,u,f,C,A,v),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,i.push(a))}}else{let M=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=M,d=g;p<d;p+=3){let R=p,P=p+1,y=p+2;a=Xa(this,s,t,r,c,u,f,R,P,y),a&&(a.faceIndex=Math.floor(p/3),i.push(a))}}}};function hu(e,t,i,r,a,n,s,o){let l;if(t.side===ti?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===vr,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Wa);return c<i.near||c>i.far?null:{distance:c,point:Wa.clone(),object:e}}function Xa(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,ka),e.getVertexPosition(l,Ha),e.getVertexPosition(c,Ga);let u=hu(e,t,i,r,ka,Ha,Ga,jo);if(u){let f=new x;Br.getBarycoord(jo,ka,Ha,Ga,f),a&&(u.uv=Br.getInterpolatedAttribute(a,o,l,c,f,new De)),n&&(u.uv1=Br.getInterpolatedAttribute(n,o,l,c,f,new De)),s&&(u.normal=Br.getInterpolatedAttribute(s,o,l,c,f,new x),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new x,materialIndex:0};Br.getNormal(ka,Ha,Ga,h.normal),u.face=h,u.barycoord=f}return u}var uu=class extends ui{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Wt,c=Wt,u,f){super(null,n,s,o,l,c,r,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hr=new Ta,du=new De(.5,.5),ja=new x,gc=class{constructor(e=new ki,t=new ki,i=new ki,r=new ki,a=new ki,n=new ki){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],f=a[6],h=a[7],m=a[8],M=a[9],g=a[10],p=a[11],d=a[12],R=a[13],P=a[14],y=a[15];if(r[0].setComponents(l-n,h-c,p-m,y-d).normalize(),r[1].setComponents(l+n,h+c,p+m,y+d).normalize(),r[2].setComponents(l+s,h+u,p+M,y+R).normalize(),r[3].setComponents(l-s,h-u,p-M,y-R).normalize(),i)r[4].setComponents(o,f,g,P).normalize(),r[5].setComponents(l-o,h-f,p-g,y-P).normalize();else if(r[4].setComponents(l-o,h-f,p-g,y-P).normalize(),t===Ai)r[5].setComponents(l+o,h+f,p+g,y+P).normalize();else if(t===Sn)r[5].setComponents(o,f,g,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);let t=du.distanceTo(e.center);return hr.radius=.7071067811865476+t,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ma=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yn=new x,bn=new x,Yo=new Lt,oa=new Aa,Ya=new Ta,ts=new x,qo=new x,pu=class extends xi{constructor(e=new zt,t=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)yn.fromBufferAttribute(t,r-1),bn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=yn.distanceTo(bn);e.setAttribute("lineDistance",new mt(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=a,e.ray.intersectsSphere(Ya)===!1)return;Yo.copy(r).invert(),oa.copy(e.ray).applyMatrix4(Yo);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,n.start),h=Math.min(c.count,n.start+n.count);for(let m=f,M=h-1;m<M;m+=l){let g=c.getX(m),p=c.getX(m+1),d=qa(this,e,oa,o,g,p,m);d&&t.push(d)}if(this.isLineLoop){let m=c.getX(h-1),M=c.getX(f),g=qa(this,e,oa,o,m,M,h-1);g&&t.push(g)}}else{let f=Math.max(0,n.start),h=Math.min(u.count,n.start+n.count);for(let m=f,M=h-1;m<M;m+=l){let g=qa(this,e,oa,o,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){let m=qa(this,e,oa,o,h-1,f,h-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function qa(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(yn.fromBufferAttribute(o,a),bn.fromBufferAttribute(o,n),i.distanceSqToSegment(yn,bn,ts,qo)>r)return;ts.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(ts);if(!(l<t.near||l>t.far))return{distance:l,point:qo.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Ko=new x,Zo=new x,pn=class extends pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Ko.fromBufferAttribute(t,r),Zo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ko.distanceTo(Zo);e.setAttribute("lineDistance",new mt(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fn=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$o=new Lt,to=new Aa,Ka=new Ta,Za=new x,is=class extends xi{constructor(e=new zt,t=new fn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=a,e.ray.intersectsSphere(Ka)===!1)return;$o.copy(r).invert(),to.copy(e.ray).applyMatrix4($o);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),f=Math.min(l.count,n.start+n.count);for(let h=u,m=f;h<m;h++){let M=l.getX(h);Za.fromBufferAttribute(c,M),Jo(Za,M,o,r,e,t,this)}}else{let u=Math.max(0,n.start),f=Math.min(c.count,n.start+n.count);for(let h=u,m=f;h<m;h++)Za.fromBufferAttribute(c,h),Jo(Za,h,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Jo(e,t,i,r,a,n,s){let o=to.distanceSqToPoint(e);if(o<i){let l=new x;to.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var vc=class extends ui{constructor(e=[],t=_r,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fu=class extends ui{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ya=class extends ui{constructor(e,t,i=Ci,r,a,n,s=Wt,o=Wt,l,c=Xi,u=1){if(c!==Xi&&c!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},mu=class extends ya{constructor(e,t=Ci,i=_r,r,a,n=Wt,s=Wt,o,l=Xi){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_c=class extends ui{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hi=class Mc extends zt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=0,m=0;M("z","y","x",-1,-1,r,i,t,s,n,0),M("z","y","x",1,-1,r,i,-t,s,n,1),M("x","z","y",1,1,t,r,i,a,s,2),M("x","z","y",1,-1,t,r,-i,a,s,3),M("x","y","z",1,-1,t,i,r,a,n,4),M("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function M(g,p,d,R,P,y,T,C,A,v,b){let Y=y/A,O=T/v,L=y/2,W=T/2,U=C/2,k=A+1,Q=v+1,V=0,ue=0,$=new x;for(let J=0;J<Q;J++){let re=J*O-W;for(let Ue=0;Ue<k;Ue++){let te=Ue*Y-L;$[g]=te*R,$[p]=re*P,$[d]=U,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[d]=C>0?1:-1,u.push($.x,$.y,$.z),f.push(Ue/A),f.push(1-J/v),V+=1}}for(let J=0;J<v;J++)for(let re=0;re<A;re++){let Ue=h+re+k*J,te=h+re+k*(J+1),ze=h+(re+1)+k*(J+1),Ie=h+(re+1)+k*J;l.push(Ue,te,Ie),l.push(te,ze,Ie),ue+=6}o.addGroup(m,ue,b),m+=ue,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qo=class Sc extends zt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let u=[],f=[],h=[],m=[],M=0,g=[],p=r/2,d=0;R(),s===!1&&(t>0&&P(!0),i>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(m,2));function R(){let y=new x,T=new x,C=0,A=(i-t)/r;for(let v=0;v<=n;v++){let b=[],Y=v/n,O=Y*(i-t)+t;for(let L=0;L<=a;L++){let W=L/a,U=W*l+o,k=Math.sin(U),Q=Math.cos(U);T.x=O*k,T.y=-Y*r+p,T.z=O*Q,f.push(T.x,T.y,T.z),y.set(k,A,Q).normalize(),h.push(y.x,y.y,y.z),m.push(W,1-Y),b.push(M++)}g.push(b)}for(let v=0;v<a;v++)for(let b=0;b<n;b++){let Y=g[b][v],O=g[b+1][v],L=g[b+1][v+1],W=g[b][v+1];(t>0||b!==0)&&(u.push(Y,O,W),C+=3),(i>0||b!==n-1)&&(u.push(O,L,W),C+=3)}c.addGroup(d,C,0),d+=C}function P(y){let T=M,C=new De,A=new x,v=0,b=y===!0?t:i,Y=y===!0?1:-1;for(let L=1;L<=a;L++)f.push(0,p*Y,0),h.push(0,Y,0),m.push(.5,.5),M++;let O=M;for(let L=0;L<=a;L++){let W=L/a*l+o,U=Math.cos(W),k=Math.sin(W);A.x=b*k,A.y=p*Y,A.z=b*U,f.push(A.x,A.y,A.z),h.push(0,Y,0),C.x=U*.5+.5,C.y=k*.5*Y+.5,m.push(C.x,C.y),M++}for(let L=0;L<a;L++){let W=T+L,U=O+L;y===!0?u.push(U,U+1,W):u.push(U+1,U,W),v+=3}c.addGroup(d,v,y===!0?1:2),d+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$a=new x,Ja=new x,rs=new x,Qa=new Br,as=class extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(fa*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),u={},f=[];for(let h=0;h<s;h+=3){a?(o[0]=a.getX(h),o[1]=a.getX(h+1),o[2]=a.getX(h+2)):(o[0]=h,o[1]=h+1,o[2]=h+2);let{a:m,b:M,c:g}=Qa;if(m.fromBufferAttribute(n,o[0]),M.fromBufferAttribute(n,o[1]),g.fromBufferAttribute(n,o[2]),Qa.getNormal(rs),c[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,c[1]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,c[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let p=0;p<3;p++){let d=(p+1)%3,R=c[p],P=c[d],y=Qa[l[p]],T=Qa[l[d]],C=`${R}_${P}`,A=`${P}_${R}`;A in u&&u[A]?(rs.dot(u[A].normal)<=r&&(f.push(y.x,y.y,y.z),f.push(T.x,T.y,T.z)),u[A]=null):C in u||(u[C]={index0:o[p],index1:o[d],normal:rs.clone()})}}for(let h in u)if(u[h]){let{index0:m,index1:M}=u[h];$a.fromBufferAttribute(n,m),Ja.fromBufferAttribute(n,M),f.push($a.x,$a.y,$a.z),f.push(Ja.x,Ja.y,Ja.z)}this.setAttribute("position",new mt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ji=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let c=i[r],u=i[r+1]-c,f=(n-c)/u;return(r+f)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new De:new x);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new x,r=[],a=[],n=[],s=new x,o=new Lt;for(let h=0;h<=e;h++){let m=h/e;r[h]=this.getTangentAt(m,new x)}a[0]=new x,n[0]=new x;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let h=1;h<=e;h++){if(a[h]=a[h-1].clone(),n[h]=n[h-1].clone(),s.crossVectors(r[h-1],r[h]),s.length()>Number.EPSILON){s.normalize();let m=Math.acos(Je(r[h-1].dot(r[h]),-1,1));a[h].applyMatrix4(o.makeRotationAxis(s,m))}n[h].crossVectors(r[h],a[h])}if(t===!0){let h=Math.acos(Je(a[0].dot(a[e]),-1,1));h/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(h=-h);for(let m=1;m<=e;m++)a[m].applyMatrix4(o.makeRotationAxis(r[m],h*m)),n[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xc=class extends ji{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new De){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=o-this.aX,h=l-this.aY;o=f*c-h*u+this.aX,l=f*u+h*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gu=class extends xc{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function _o(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){a(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,u,f){let h=(s-n)/c-(o-n)/(c+u)+(o-s)/u,m=(o-s)/u-(l-s)/(u+f)+(l-o)/f;h*=u,m*=u,a(s,o,h,m)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var el=new x,tl=new x,ns=new _o,ss=new _o,os=new _o,tr=class extends ji{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new x){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,c;this.closed||s>0?l=r[(s-1)%a]:(tl.subVectors(r[0],r[1]).add(r[0]),l=tl);let u=r[s%a],f=r[(s+1)%a];if(this.closed||s+2<a?c=r[(s+2)%a]:(el.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=el),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),h),M=Math.pow(u.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(c),h);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),ns.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,m,M,g),ss.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,m,M,g),os.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,m,M,g)}else this.curveType==="catmullrom"&&(ns.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),ss.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),os.initCatmullRom(l.z,u.z,f.z,c.z,this.tension));return i.set(ns.calc(o),ss.calc(o),os.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new x().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function il(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function vu(e,t){let i=1-e;return i*i*t}function _u(e,t){return 2*(1-e)*e*t}function Mu(e,t){return e*e*t}function ga(e,t,i,r){return vu(e,t)+_u(e,i)+Mu(e,r)}function Su(e,t){let i=1-e;return i*i*i*t}function xu(e,t){let i=1-e;return 3*i*i*e*t}function yu(e,t){return 3*(1-e)*e*e*t}function bu(e,t){return e*e*e*t}function va(e,t,i,r,a){return Su(e,t)+xu(e,i)+yu(e,r)+bu(e,a)}var Eu=class extends ji{constructor(e=new De,t=new De,i=new De,r=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new De){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(va(e,r.x,a.x,n.x,s.x),va(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wu=class extends ji{constructor(e=new x,t=new x,i=new x,r=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new x){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(va(e,r.x,a.x,n.x,s.x),va(e,r.y,a.y,n.y,s.y),va(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tu=class extends ji{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Au=class extends ji{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ru=class extends ji{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ga(e,r.x,a.x,n.x),ga(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends ji{constructor(e=new x,t=new x,i=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new x){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ga(e,r.x,a.x,n.x),ga(e,r.y,a.y,n.y),ga(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cu=class extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],c=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(il(s,o.x,l.x,c.x,u.x),il(s,o.y,l.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new De().fromArray(r))}return this}},Lu=Object.freeze({__proto__:null,ArcCurve:gu,CatmullRomCurve3:tr,CubicBezierCurve:Eu,CubicBezierCurve3:wu,EllipseCurve:xc,LineCurve:Tu,LineCurve3:Au,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:yc,SplineCurve:Cu}),bc=class Ec extends zt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,u=l+1,f=t/o,h=i/l,m=[],M=[],g=[],p=[];for(let d=0;d<u;d++){let R=d*h-s;for(let P=0;P<c;P++){let y=P*f-n;M.push(y,-R,0),g.push(0,0,1),p.push(P/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){let P=R+c*d,y=R+c*(d+1),T=R+1+c*(d+1),C=R+1+c*d;m.push(P,y,C),m.push(y,T,C)}this.setIndex(m),this.setAttribute("position",new mt(M,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.width,t.height,t.widthSegments,t.heightSegments)}},rl=class wc extends zt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],c=[],u=[],f=t,h=(i-t)/a,m=new x,M=new De;for(let g=0;g<=a;g++){for(let p=0;p<=r;p++){let d=n+p/r*s;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),M.x=(m.x/i+1)/2,M.y=(m.y/i+1)/2,u.push(M.x,M.y)}f+=h}for(let g=0;g<a;g++){let p=g*(r+1);for(let d=0;d<r;d++){let R=d+p,P=R,y=R+r+1,T=R+r+2,C=R+1;o.push(P,y,C),o.push(y,T,C)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Pu=class Tc extends zt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,u=[],f=new x,h=new x,m=[],M=[],g=[],p=[];for(let d=0;d<=r;d++){let R=[],P=d/r,y=s+P*o,T=t*Math.cos(y),C=Math.sqrt(t*t-T*T),A=0;d===0&&s===0?A=.5/i:d===r&&l===Math.PI&&(A=-.5/i);for(let v=0;v<=i;v++){let b=v/i,Y=a+b*n;f.x=-C*Math.cos(Y),f.y=T,f.z=C*Math.sin(Y),M.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(b+A,1-P),R.push(c++)}u.push(R)}for(let d=0;d<r;d++)for(let R=0;R<i;R++){let P=u[d][R+1],y=u[d][R],T=u[d+1][R],C=u[d+1][R+1];(d!==0||s>0)&&m.push(P,y,C),(d!==r-1||l<Math.PI)&&m.push(y,T,C)}this.setIndex(m),this.setAttribute("position",new mt(M,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Du=class Ac extends zt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=new x,m=new x,M=new x;for(let g=0;g<=r;g++){let p=s+g/r*o;for(let d=0;d<=a;d++){let R=d/a*n;m.x=(t+i*Math.cos(p))*Math.cos(R),m.y=(t+i*Math.cos(p))*Math.sin(R),m.z=i*Math.sin(p),c.push(m.x,m.y,m.z),h.x=t*Math.cos(R),h.y=t*Math.sin(R),M.subVectors(m,h).normalize(),u.push(M.x,M.y,M.z),f.push(d/a),f.push(g/r)}}for(let g=1;g<=r;g++)for(let p=1;p<=a;p++){let d=(a+1)*g+p-1,R=(a+1)*(g-1)+p-1,P=(a+1)*(g-1)+p,y=(a+1)*g+p;l.push(d,R,y),l.push(R,P,y)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Uu=class Rc extends zt{constructor(t=new yc(new x(-1,-1,0),new x(-1,1,0),new x(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new x,l=new x,c=new De,u=new x,f=[],h=[],m=[],M=[];g(),this.setIndex(M),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(m,2));function g(){for(let P=0;P<i;P++)p(P);p(n===!1?i:0),R(),d()}function p(P){u=t.getPointAt(P/i,u);let y=s.normals[P],T=s.binormals[P];for(let C=0;C<=a;C++){let A=C/a*Math.PI*2,v=Math.sin(A),b=-Math.cos(A);l.x=b*y.x+v*T.x,l.y=b*y.y+v*T.y,l.z=b*y.z+v*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,f.push(o.x,o.y,o.z)}}function d(){for(let P=1;P<=i;P++)for(let y=1;y<=a;y++){let T=(a+1)*(P-1)+(y-1),C=(a+1)*P+(y-1),A=(a+1)*P+y,v=(a+1)*(P-1)+y;M.push(T,C,v),M.push(C,A,v)}}function R(){for(let P=0;P<=i;P++)for(let y=0;y<=a;y++)c.x=P/i,c.y=y/a,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Rc(new Lu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function $r(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(al(a))a.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(al(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Jt(e){let t={};for(let i=0;i<e.length;i++){let r=$r(e[i]);for(let a in r)t[a]=r[a]}return t}function al(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Iu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Cc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:st.workingColorSpace}var Nu={clone:$r,merge:Jt},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(r.value);break;case"v2":this.uniforms[i].value=new De().fromArray(r.value);break;case"v3":this.uniforms[i].value=new x().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bu=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zu=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ku=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},en=new x,tn=new rr,bi=new x,Lc=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(en,tn,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(en,tn,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(en,tn,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(en,tn,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new x,nl=new De,sl=new De,ci=class extends Lc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,t){return this.getViewBounds(e,nl,sl),t.subVectors(sl,nl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pc=class extends Lc{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ir=-90,Nr=1,Hu=class extends xi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ci(Ir,Nr,e,t);r.layers=this.layers,this.add(r);let a=new ci(Ir,Nr,e,t);a.layers=this.layers,this.add(a);let n=new ci(Ir,Nr,e,t);n.layers=this.layers,this.add(n);let s=new ci(Ir,Nr,e,t);s.layers=this.layers,this.add(s);let o=new ci(Ir,Nr,e,t);o.layers=this.layers,this.add(o);let l=new ci(Ir,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Sn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(u,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Gu=class extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Dc="\\[\\]\\.:\\/",Mo="[^"+Dc+"]",Vu="[^"+Dc.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Mo);/(WCOD+)?/.source.replace("WCOD",Vu);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mo);var ol=new Lt,Wu=class{constructor(e,t,i=0,r=1/0){this.ray=new Aa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ol),this}intersectObject(e,t=!0,i=[]){return io(e,this,i,t),i.sort(ll),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)io(e[r],this,i,t);return i.sort(ll),i}};function ll(e,t){return e.distance-t.distance}function io(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)io(n[s],t,i,!0)}}var Xu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},cl=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Kr;Kr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Kr.prototype.isMatrix2=!0;var hl=class extends pn{constructor(e=10,t=10,i=4473924,r=8947848){i=new He(i),r=new He(r);let a=t/2,n=e/t,s=e/2,o=[],l=[];for(let f=0,h=0,m=-s;f<=t;f++,m+=n){o.push(-s,0,m,s,0,m),o.push(m,0,-s,m,0,s);let M=f===a?i:r;M.toArray(l,h),h+=3,M.toArray(l,h),h+=3,M.toArray(l,h),h+=3,M.toArray(l,h),h+=3}let c=new zt;c.setAttribute("position",new mt(o,3)),c.setAttribute("color",new mt(l,3));let u=new ma({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},ju=class extends ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ul(e,t,i,r){let a=Yu(r);switch(i){case nc:return e*t;case oc:return e*t/a.components*a.byteLength;case ho:return e*t/a.components*a.byteLength;case Mr:return e*t*2/a.components*a.byteLength;case uo:return e*t*2/a.components*a.byteLength;case sc:return e*t*3/a.components*a.byteLength;case Mi:return e*t*4/a.components*a.byteLength;case po:return e*t*4/a.components*a.byteLength;case on:case ln:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cn:case hn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ws:case As:return Math.max(e,16)*Math.max(t,8)/4;case Es:case Ts:return Math.max(e,8)*Math.max(t,8)/2;case Rs:case Cs:case Ps:case Ds:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ls:case gn:case Us:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Is:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ns:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Os:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Fs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Bs:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case zs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ks:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Hs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Gs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Vs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ws:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Xs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case js:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ys:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qs:case Ks:case Zs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $s:case Js:return Math.ceil(e/4)*Math.ceil(t/4)*8;case vn:case Qs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yu(e){switch(e){case hi:case tc:return{byteLength:1,components:1};case Ma:case ic:case Li:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case Ci:case oo:case Ti:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);function Uc(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function qu(e){let t=new WeakMap;function i(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){let u=l.array,f=l.updateRanges;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,u);else{f.sort((m,M)=>m.start-M.start);let h=0;for(let m=1;m<f.length;m++){let M=f[h],g=f[m];g.start<=M.start+M.count+1?M.count=Math.max(M.count,g.start+g.count-M.start):(++h,f[h]=g)}f.length=h+1;for(let m=0,M=f.length;m<M;m++){let g=f[m];e.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ld=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$d=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Ku,alphahash_pars_fragment:Zu,alphamap_fragment:$u,alphamap_pars_fragment:Ju,alphatest_fragment:Qu,alphatest_pars_fragment:ed,aomap_fragment:td,aomap_pars_fragment:id,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:nd,beginnormal_vertex:sd,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:fd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:vd,common:_d,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:xd,displacementmap_vertex:yd,emissivemap_fragment:bd,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Hd,envmap_vertex:Pd,fog_vertex:Dd,fog_pars_vertex:Ud,fog_fragment:Id,fog_pars_fragment:Nd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Fd,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:jd,lights_physical_pars_fragment:Yd,lights_fragment_begin:qd,lights_fragment_maps:Kd,lights_fragment_end:Zd,lightprobes_pars_fragment:$d,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:ap,map_particle_pars_fragment:np,metalnessmap_fragment:sp,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:fp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:vp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:yp,opaque_fragment:bp,packing:Ep,premultiplied_alpha_fragment:wp,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Up,shadowmask_pars_fragment:Ip,skinbase_vertex:Np,skinning_pars_vertex:Op,skinning_vertex:Fp,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:kp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Gp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:jp,uv_vertex:Yp,worldpos_vertex:qp,background_vert:Kp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:Jp,cube_vert:Qp,cube_frag:ef,depth_vert:tf,depth_frag:rf,distance_vert:af,distance_frag:nf,equirect_vert:sf,equirect_frag:of,linedashed_vert:lf,linedashed_frag:cf,meshbasic_vert:hf,meshbasic_frag:uf,meshlambert_vert:df,meshlambert_frag:pf,meshmatcap_vert:ff,meshmatcap_frag:mf,meshnormal_vert:gf,meshnormal_frag:vf,meshphong_vert:_f,meshphong_frag:Mf,meshphysical_vert:Sf,meshphysical_frag:xf,meshtoon_vert:yf,meshtoon_frag:bf,points_vert:Ef,points_frag:wf,shadow_vert:Tf,shadow_frag:Af,sprite_vert:Rf,sprite_frag:Cf},Ee={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wi={basic:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Jt([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Jt([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Jt([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Jt([Ee.lights,Ee.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};wi.physical={uniforms:Jt([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var rn={r:0,b:0,g:0},Lf=new Lt,Ic=new Xe;Ic.set(-1,0,0,0,1,0,0,0,1);function Pf(e,t,i,r,a,n){let s=new He(0),o=a===!0?0:1,l,c,u=null,f=0,h=null;function m(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){let y=R.backgroundBlurriness>0;P=t.get(P,y)}return P}function M(R){let P=!1,y=m(R);y===null?p(s,o):y&&y.isColor&&(p(y,1),P=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(R,P){let y=m(P);y&&(y.isCubeTexture||y.mapping===En)?(c===void 0&&(c=new Bt(new Hi(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:$r(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lf.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ic),c.material.toneMapped=st.getTransfer(y.colorSpace)!==_t,(u!==y||f!==y.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=e.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Bt(new bc(2,2),new Pi({name:"BackgroundMaterial",uniforms:$r(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=e.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,P){R.getRGB(rn,Cc(e)),i.buffers.color.setClear(rn.r,rn.g,rn.b,P,n)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(R,P=1){s.set(R),o=P,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,p(s,o)},render:M,addToRenderList:g,dispose:d}}function Df(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=h(null),n=a,s=!1;function o(O,L,W,U,k){let Q=!1,V=f(O,U,W,L);n!==V&&(n=V,c(n.object)),Q=m(O,U,W,k),Q&&M(O,U,W,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,y(O,L,W,U),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(O){return e.bindVertexArray(O)}function u(O){return e.deleteVertexArray(O)}function f(O,L,W,U){let k=U.wireframe===!0,Q=r[L.id];Q===void 0&&(Q={},r[L.id]=Q);let V=O.isInstancedMesh===!0?O.id:0,ue=Q[V];ue===void 0&&(ue={},Q[V]=ue);let $=ue[W.id];$===void 0&&($={},ue[W.id]=$);let J=$[k];return J===void 0&&(J=h(l()),$[k]=J),J}function h(O){let L=[],W=[],U=[];for(let k=0;k<i;k++)L[k]=0,W[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:U,object:O,attributes:{},index:null}}function m(O,L,W,U){let k=n.attributes,Q=L.attributes,V=0,ue=W.getAttributes();for(let $ in ue)if(ue[$].location>=0){let J=k[$],re=Q[$];if(re===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;V++}return n.attributesNum!==V||n.index!==U}function M(O,L,W,U){let k={},Q=L.attributes,V=0,ue=W.getAttributes();for(let $ in ue)if(ue[$].location>=0){let J=Q[$];J===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let re={};re.attribute=J,J&&J.data&&(re.data=J.data),k[$]=re,V++}n.attributes=k,n.attributesNum=V,n.index=U}function g(){let O=n.newAttributes;for(let L=0,W=O.length;L<W;L++)O[L]=0}function p(O){d(O,0)}function d(O,L){let W=n.newAttributes,U=n.enabledAttributes,k=n.attributeDivisors;W[O]=1,U[O]===0&&(e.enableVertexAttribArray(O),U[O]=1),k[O]!==L&&(e.vertexAttribDivisor(O,L),k[O]=L)}function R(){let O=n.newAttributes,L=n.enabledAttributes;for(let W=0,U=L.length;W<U;W++)L[W]!==O[W]&&(e.disableVertexAttribArray(W),L[W]=0)}function P(O,L,W,U,k,Q,V){V===!0?e.vertexAttribIPointer(O,L,W,k,Q):e.vertexAttribPointer(O,L,W,U,k,Q)}function y(O,L,W,U){g();let k=U.attributes,Q=W.getAttributes(),V=L.defaultAttributeValues;for(let ue in Q){let $=Q[ue];if($.location>=0){let J=k[ue];if(J===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){let re=J.normalized,Ue=J.itemSize,te=t.get(J);if(te===void 0)continue;let ze=te.buffer,Ie=te.type,K=te.bytesPerElement,oe=Ie===e.INT||Ie===e.UNSIGNED_INT||J.gpuType===oo;if(J.isInterleavedBufferAttribute){let ce=J.data,Ce=ce.stride,Oe=J.offset;if(ce.isInstancedInterleavedBuffer){for(let ve=0;ve<$.locationSize;ve++)d($.location+ve,ce.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<$.locationSize;ve++)p($.location+ve);e.bindBuffer(e.ARRAY_BUFFER,ze);for(let ve=0;ve<$.locationSize;ve++)P($.location+ve,Ue/$.locationSize,Ie,re,Ce*K,(Oe+Ue/$.locationSize*ve)*K,oe)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)d($.location+ce,J.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<$.locationSize;ce++)p($.location+ce);e.bindBuffer(e.ARRAY_BUFFER,ze);for(let ce=0;ce<$.locationSize;ce++)P($.location+ce,Ue/$.locationSize,Ie,re,Ue*K,Ue/$.locationSize*ce*K,oe)}}else if(V!==void 0){let re=V[ue];if(re!==void 0)switch(re.length){case 2:e.vertexAttrib2fv($.location,re);break;case 3:e.vertexAttrib3fv($.location,re);break;case 4:e.vertexAttrib4fv($.location,re);break;default:e.vertexAttrib1fv($.location,re)}}}}R()}function T(){b();for(let O in r){let L=r[O];for(let W in L){let U=L[W];for(let k in U){let Q=U[k];for(let V in Q)u(Q[V].object),delete Q[V];delete U[k]}}delete r[O]}}function C(O){if(r[O.id]===void 0)return;let L=r[O.id];for(let W in L){let U=L[W];for(let k in U){let Q=U[k];for(let V in Q)u(Q[V].object),delete Q[V];delete U[k]}}delete r[O.id]}function A(O){for(let L in r){let W=r[L];for(let U in W){let k=W[U];if(k[O.id]===void 0)continue;let Q=k[O.id];for(let V in Q)u(Q[V].object),delete Q[V];delete k[O.id]}}}function v(O){for(let L in r){let W=r[L],U=O.isInstancedMesh===!0?O.id:0,k=W[U];if(k!==void 0){for(let Q in k){let V=k[Q];for(let ue in V)u(V[ue].object),delete V[ue];delete k[Q]}delete W[U],Object.keys(W).length===0&&delete r[L]}}}function b(){Y(),s=!0,n!==a&&(n=a,c(n.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:Y,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:R}}function Uf(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,u){u!==0&&(e.drawArraysInstanced(r,l,c,u),i.update(c,r,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];i.update(f,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function If(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Mi&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&A!==Ti&&!v&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),R=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),P=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:M,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:y,maxSamples:T,samples:C}}function Nf(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ki,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||r!==0||a;return a=h,r=f.length,m},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,h){i=u(f,h,0)},this.setState=function(f,h,m){let M=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=e.get(f);if(!a||M===null||M.length===0||n&&!p)n?u(null):c();else{let R=n?0:r,P=R*4,y=d.clippingState||null;l.value=y,y=u(M,h,P,m);for(let T=0;T!==P;++T)y[T]=i[T];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(f,h,m,M){let g=f!==null?f.length:0,p=null;if(g!==0){if(p=l.value,M!==!0||p===null){let d=m+g*4,R=h.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<d)&&(p=new Float32Array(d));for(let P=0,y=m;P!==g;++P,y+=4)s.copy(f[P]).applyMatrix4(R,o),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}var Hr=4,Of=6,Ff=20,Bf=256,la=new Pc,dl=new He,ls=null,cs=0,hs=0,us=!1,zf=new x,ur=new x,pl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=zf}=a;ls=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ls,cs,hs),this._renderer.xr.enabled=us,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ls=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Li,format:Mi,colorSpace:_n,depthBuffer:!1},r=fl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kf(a)),this._blurMaterial=Gf(a,e,t),this._ggxMaterial=Hf(a,e,t)}return r}_compileMaterial(e){let t=new Bt(new zt,e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,i,r,a){let n=new ci(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(dl),l.toneMapping=Ri,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Hi,new oi({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,h=f.material,m=!1,M=e.background;M?M.isColor&&(h.color.copy(M),e.background=null,m=!0):(h.color.copy(dl),m=!0);for(let g=0;g<6;g++){let p=g%3;p===0?(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[g],a.y,a.z)):p===1?(n.up.set(0,0,s[g]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[g],a.z)):(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[g]));let d=this._cubeSize;Or(r,p*d,g>2?d:0,d,d),l.setRenderTarget(r),m&&l.render(f,n),l.render(e,n)}l.toneMapping=u,l.autoClear=c,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===_r||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Or(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,la)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),f=l*1.25,h=u*f,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-Hr?i-m+Hr:0),p=4*(this._cubeSize-M);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=m-t,Or(a,g,p,3*M,2*M),r.setRenderTarget(a),r.render(s,la),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=m-i,Or(e,g,p,3*M,2*M),r.setRenderTarget(e),r.render(s,la)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],u=3*c*(r>this._lodMax-Hr?r-this._lodMax+Hr:0),f=4*(this._cubeSize-c);Or(t,u,f,3*c,2*c),n.setRenderTarget(t),n.render(o,la)}};function kf(e){let t=[],i=[],r=e,a=e-Hr+1+Of;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,m=3,M=new Float32Array(m*h*f),g=new Float32Array(m*h*f);for(let d=0;d<f;d++){let R=d%3*2/3-1,P=d>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(y,m*h*d);for(let T=0;T<h;T++){let C=u[T*2]*2-1,A=u[T*2+1]*2-1;d===0?ur.set(1,A,C):d===1?ur.set(-C,1,-A):d===2?ur.set(-C,A,1):d===3?ur.set(-1,A,-C):d===4?ur.set(-C,-1,A):ur.set(C,A,-1),ur.toArray(g,(d*h+T)*m)}}let p=new zt;p.setAttribute("position",new ai(M,m)),p.setAttribute("outputDirection",new ai(g,m)),i.push(new Bt(p,null)),r>Hr&&r--}return{lodMeshes:i,sizeLods:t}}function fl(e,t,i){let r=new Si(e,t,i);return r.texture.mapping=En,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Or(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Hf(e,t,i){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Gf(e,t,i){return new Pi({name:"SphericalGaussianBlur",defines:{SAMPLES:Ff,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ml(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gl(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function wn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nc=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hi(5,5,5),a=new Pi({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Vi});a.uniforms.tEquirect.value=t;let n=new Bt(r,a),s=t.minFilter;return t.minFilter===pr&&(t.minFilter=Xt),new Hu(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Vf(e){let t=new WeakMap,i=new WeakMap,r=null;function a(h,m=!1){return h==null?null:m?s(h):n(h)}function n(h){if(h&&h.isTexture){let m=h.mapping;if(m===Ln||m===Pn)if(t.has(h)){let M=t.get(h).texture;return o(M,h.mapping)}else{let M=h.image;if(M&&M.height>0){let g=new Nc(M.height);return g.fromEquirectangularTexture(e,h),t.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let m=h.mapping,M=m===Ln||m===Pn,g=m===_r||m===Zr;if(M||g){let p=i.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return r===null&&(r=new pl(e)),p=M?r.fromEquirectangular(h,p):r.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),p.texture;if(p!==void 0)return p.texture;{let R=h.image;return M&&R&&R.height>0||g&&R&&l(R)?(r===null&&(r=new pl(e)),p=M?r.fromEquirectangular(h):r.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===Ln?h.mapping=_r:m===Pn&&(h.mapping=Zr),h}function l(h){let m=0,M=6;for(let g=0;g<M;g++)h[g]!==void 0&&m++;return m===M}function c(h){let m=h.target;m.removeEventListener("dispose",c);let M=t.get(m);M!==void 0&&(t.delete(m),M.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let M=i.get(m);M!==void 0&&(i.delete(m),M.dispose())}function f(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:f}}function Wf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Vr("WebGLRenderer: "+r+" extension not supported."),a}}}function Xf(e,t,i,r){let a={},n=new WeakMap;function s(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let M in h.attributes)t.remove(h.attributes[M]);h.removeEventListener("dispose",s),delete a[h.id];let m=n.get(h);m&&(t.remove(m),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,i.memory.geometries++),h}function l(f){let h=f.attributes;for(let m in h)t.update(h[m],e.ARRAY_BUFFER)}function c(f){let h=[],m=f.index,M=f.attributes.position,g=0;if(M===void 0)return;if(m!==null){let R=m.array;g=m.version;for(let P=0,y=R.length;P<y;P+=3){let T=R[P+0],C=R[P+1],A=R[P+2];h.push(T,C,C,A,A,T)}}else{let R=M.array;g=M.version;for(let P=0,y=R.length/3-1;P<y;P+=3){let T=P+0,C=P+1,A=P+2;h.push(T,C,C,A,A,T)}}let p=new(M.count>=65535?fc:pc)(h,1);p.version=g;let d=n.get(f);d&&t.remove(d),n.set(f,p)}function u(f){let h=n.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return n.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function jf(e,t,i){let r;function a(f){r=f}let n,s;function o(f){n=f.type,s=f.bytesPerElement}function l(f,h){e.drawElements(r,h,n,f*s),i.update(h,r,1)}function c(f,h,m){m!==0&&(e.drawElementsInstanced(r,h,n,f*s,m),i.update(h,r,m))}function u(f,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,n,f,0,m);let M=0;for(let g=0;g<m;g++)M+=h[g];i.update(M,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Yf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:ut("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function qf(e,t,i){let r=new WeakMap,a=new Ot;function n(s,o,l){let c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=r.get(o);if(h===void 0||h.count!==f){let m=function(){v.dispose(),r.delete(o),o.removeEventListener("dispose",m)};h!==void 0&&h.texture.dispose();let M=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],P=o.morphAttributes.color||[],y=0;M===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let T=o.attributes.position.count*y,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let A=new Float32Array(T*C*4*f),v=new cc(A,T,C,f);v.type=Ti,v.needsUpdate=!0;let b=y*4;for(let Y=0;Y<f;Y++){let O=d[Y],L=R[Y],W=P[Y],U=T*C*4*Y;for(let k=0;k<O.count;k++){let Q=k*b;M===!0&&(a.fromBufferAttribute(O,k),A[U+Q+0]=a.x,A[U+Q+1]=a.y,A[U+Q+2]=a.z,A[U+Q+3]=0),g===!0&&(a.fromBufferAttribute(L,k),A[U+Q+4]=a.x,A[U+Q+5]=a.y,A[U+Q+6]=a.z,A[U+Q+7]=0),p===!0&&(a.fromBufferAttribute(W,k),A[U+Q+8]=a.x,A[U+Q+9]=a.y,A[U+Q+10]=a.z,A[U+Q+11]=W.itemSize===4?a.w:1)}}h={count:f,texture:v,size:new De(T,C)},r.set(o,h),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:n}}function Kf(e,t,i,r,a){let n=new WeakMap;function s(c){let u=a.render.frame,f=c.geometry,h=t.get(c,f);if(n.get(h)!==u&&(t.update(h),n.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==u&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;n.get(m)!==u&&(m.update(),n.set(m,u))}return h}function o(){n=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}var Zf={[ql]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[so]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function $f(e,t,i,r,a,n){let s=new Si(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new zt;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));let u=new Bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(c,u),h=new Pc(-1,1,1,-1,0,1),m=null,M=null,g=!1,p,d=null,R=[],P=!1;this.setSize=function(y,T){s.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let C=0;C<R.length;C++){let A=R[C];A.setSize&&A.setSize(y,T)}},this.setEffects=function(y){R=y,P=R.length>0&&R[0].isRenderPass===!0;let T=s.width,C=s.height;R.length>0&&o===null&&(o=new Si(T,C,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new Si(T,C,{type:Li,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<R.length;A++){let v=R[A];v.setSize&&v.setSize(T,C)}},this.begin=function(y,T){if(g||y.toneMapping===Ri&&R.length===0)return!1;if(d=T,T!==null){let C=T.width,A=T.height;(s.width!==C||s.height!==A)&&this.setSize(C,A)}return P===!1&&y.setRenderTarget(s),p=y.toneMapping,y.toneMapping=Ri,!0},this.hasRenderPass=function(){return P},this.end=function(y,T){y.toneMapping=p,g=!0;let C=s,A=o;for(let v=0;v<R.length;v++){let b=R[v];b.enabled!==!1&&(b.render(y,A,C,T),b.needsSwap!==!1&&(C=A,A=A===o?l:o))}if(m!==y.outputColorSpace||M!==y.toneMapping){m=y.outputColorSpace,M=y.toneMapping,u.defines={},st.getTransfer(m)===_t&&(u.defines.SRGB_TRANSFER="");let v=Zf[M];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,y.setRenderTarget(d),y.render(f,h),d=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Oc=new ui,ro=new ya(1,1),Fc=new cc,Bc=new qh,zc=new vc,vl=[],_l=[],Ml=new Float32Array(16),Sl=new Float32Array(9),xl=new Float32Array(4);function Qr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=vl[a];if(n===void 0&&(n=new Float32Array(a),vl[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function kt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ht(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Tn(e,t){let i=_l[t];i===void 0&&(i=new Int32Array(t),_l[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Jf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Qf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(kt(i,t))return;e.uniform2fv(this.addr,t),Ht(i,t)}}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(kt(i,t))return;e.uniform3fv(this.addr,t),Ht(i,t)}}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(kt(i,t))return;e.uniform4fv(this.addr,t),Ht(i,t)}}function im(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(kt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ht(i,t)}else{if(kt(i,r))return;xl.set(r),e.uniformMatrix2fv(this.addr,!1,xl),Ht(i,r)}}function rm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(kt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ht(i,t)}else{if(kt(i,r))return;Sl.set(r),e.uniformMatrix3fv(this.addr,!1,Sl),Ht(i,r)}}function am(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(kt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ht(i,t)}else{if(kt(i,r))return;Ml.set(r),e.uniformMatrix4fv(this.addr,!1,Ml),Ht(i,r)}}function nm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function sm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(kt(i,t))return;e.uniform2iv(this.addr,t),Ht(i,t)}}function om(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(kt(i,t))return;e.uniform3iv(this.addr,t),Ht(i,t)}}function lm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(kt(i,t))return;e.uniform4iv(this.addr,t),Ht(i,t)}}function cm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function hm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(kt(i,t))return;e.uniform2uiv(this.addr,t),Ht(i,t)}}function um(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(kt(i,t))return;e.uniform3uiv(this.addr,t),Ht(i,t)}}function dm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(kt(i,t))return;e.uniform4uiv(this.addr,t),Ht(i,t)}}function pm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(ro.compareFunction=i.isReversedDepthBuffer()?mo:fo,n=ro):n=Oc,i.setTexture2D(t||n,a)}function fm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Bc,a)}function mm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||zc,a)}function gm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Fc,a)}function vm(e){switch(e){case 5126:return Jf;case 35664:return Qf;case 35665:return em;case 35666:return tm;case 35674:return im;case 35675:return rm;case 35676:return am;case 5124:case 35670:return nm;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function _m(e,t){e.uniform1fv(this.addr,t)}function Mm(e,t){let i=Qr(t,this.size,2);e.uniform2fv(this.addr,i)}function Sm(e,t){let i=Qr(t,this.size,3);e.uniform3fv(this.addr,i)}function xm(e,t){let i=Qr(t,this.size,4);e.uniform4fv(this.addr,i)}function ym(e,t){let i=Qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function bm(e,t){let i=Qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Em(e,t){let i=Qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function wm(e,t){e.uniform1iv(this.addr,t)}function Tm(e,t){e.uniform2iv(this.addr,t)}function Am(e,t){e.uniform3iv(this.addr,t)}function Rm(e,t){e.uniform4iv(this.addr,t)}function Cm(e,t){e.uniform1uiv(this.addr,t)}function Lm(e,t){e.uniform2uiv(this.addr,t)}function Pm(e,t){e.uniform3uiv(this.addr,t)}function Dm(e,t){e.uniform4uiv(this.addr,t)}function Um(e,t,i){let r=this.cache,a=t.length,n=Tn(i,a);kt(r,n)||(e.uniform1iv(this.addr,n),Ht(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=ro:s=Oc;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Im(e,t,i){let r=this.cache,a=t.length,n=Tn(i,a);kt(r,n)||(e.uniform1iv(this.addr,n),Ht(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Bc,n[s])}function Nm(e,t,i){let r=this.cache,a=t.length,n=Tn(i,a);kt(r,n)||(e.uniform1iv(this.addr,n),Ht(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||zc,n[s])}function Om(e,t,i){let r=this.cache,a=t.length,n=Tn(i,a);kt(r,n)||(e.uniform1iv(this.addr,n),Ht(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Fc,n[s])}function Fm(e){switch(e){case 5126:return _m;case 35664:return Mm;case 35665:return Sm;case 35666:return xm;case 35674:return ym;case 35675:return bm;case 35676:return Em;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Lm;case 36295:return Pm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Om}}var Bm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vm(t.type)}},zm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fm(t.type)}},km=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},ds=/(\w+)(\])?(\[|\.)?/g;function yl(e,t){e.seq.push(t),e.map[t.id]=t}function Hm(e,t,i){let r=e.name,a=r.length;for(ds.lastIndex=0;;){let n=ds.exec(r),s=ds.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){yl(i,c===void 0?new Bm(o,e,t):new zm(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new km(o),yl(i,u)),i=u}}}var mn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Hm(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function bl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Gm=37297,Vm=0;function Wm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var El=new Xe;function Xm(e){st._getMatrix(El,st.workingColorSpace,e);let t=`mat3( ${El.elements.map(i=>i.toFixed(4))} )`;switch(st.getTransfer(e)){case Mn:return[t,"LinearTransferOETF"];case _t:return[t,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function wl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Wm(e.getShaderSource(t),s)}else return a}function jm(e,t){let i=Xm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Ym={[ql]:"Linear",[Kl]:"Reinhard",[Zl]:"Cineon",[so]:"ACESFilmic",[Jl]:"AgX",[Ql]:"Neutral",[$l]:"Custom"};function qm(e,t){let i=Ym[t];return i===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var an=new x;function Km(){st.getLuminanceCoefficients(an);let e=an.x.toFixed(4),t=an.y.toFixed(4),i=an.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function $m(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Jm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function ua(e){return e!==""}function Tl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(e){return e.replace(Qm,tg)}var eg=new Map;function tg(e,t){let i=Ke[t];if(i===void 0){let r=eg.get(t);if(r!==void 0)i=Ke[r],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ao(i)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(e){return e.replace(ig,rg)}function rg(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Cl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ag={[sn]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function ng(e){return ag[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sg={[_r]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[En]:"ENVMAP_TYPE_CUBE_UV"};function og(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":sg[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var lg={[Zr]:"ENVMAP_MODE_REFRACTION"};function cg(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":lg[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hg={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[wh]:"ENVMAP_BLENDING_ADD"};function ug(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":hg[e.combine]||"ENVMAP_BLENDING_NONE"}function dg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function pg(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=ng(i),c=og(i),u=cg(i),f=ug(i),h=dg(i),m=Zm(i),M=$m(n),g=a.createProgram(),p,d,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(ua).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(ua).join(`
`),d.length>0&&(d+=`
`)):(p=[Cl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),d=[Cl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ri?"#define TONE_MAPPING":"",i.toneMapping!==Ri?Ke.tonemapping_pars_fragment:"",i.toneMapping!==Ri?qm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,jm("linearToOutputTexel",i.outputColorSpace),Km(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ua).join(`
`)),s=ao(s),s=Tl(s,i),s=Al(s,i),o=ao(o),o=Tl(o,i),o=Al(o,i),s=Rl(s),o=Rl(o),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",i.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=R+p+s,y=R+d+o,T=bl(a,a.VERTEX_SHADER,P),C=bl(a,a.FRAGMENT_SHADER,y);a.attachShader(g,T),a.attachShader(g,C),i.index0AttributeName!==void 0?a.bindAttribLocation(g,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function A(O){if(e.debug.checkShaderErrors){let L=a.getProgramInfoLog(g)||"",W=a.getShaderInfoLog(T)||"",U=a.getShaderInfoLog(C)||"",k=L.trim(),Q=W.trim(),V=U.trim(),ue=!0,$=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(ue=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,T,C);else{let J=wl(a,T,"vertex"),re=wl(a,C,"fragment");ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+J+`
`+re)}else k!==""?Ge("WebGLProgram: Program Info Log:",k):(Q===""||V==="")&&($=!1);$&&(O.diagnostics={runnable:ue,programLog:k,vertexShader:{log:Q,prefix:p},fragmentShader:{log:V,prefix:d}})}a.deleteShader(T),a.deleteShader(C),v=new mn(a,g),b=Jm(a,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(g,Gm)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}var fg=0,mg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gg(e),t.set(e,i)),i}},gg=class{constructor(e){this.id=fg++,this.code=e,this.usedTimes=0}};function vg(e){return e===Mr||e===gn||e===vn}function _g(e,t,i,r,a,n){let s=new vo,o=new mg,l=new Set,c=[],u=new Map,f=r.logarithmicDepthBuffer,h=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,Y,O,L,W){let U=O.fog,k=L.geometry,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ue=t.get(v.envMap||Q,V),$=ue&&ue.mapping===En?ue.image.height:null,J=m[v.type];v.precision!==null&&(h=r.getMaxPrecision(v.precision),h!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ue=re!==void 0?re.length:0,te=0;k.morphAttributes.position!==void 0&&(te=1),k.morphAttributes.normal!==void 0&&(te=2),k.morphAttributes.color!==void 0&&(te=3);let ze,Ie,K,oe;if(J){let wt=wi[J];ze=wt.vertexShader,Ie=wt.fragmentShader}else{ze=v.vertexShader,Ie=v.fragmentShader;let wt=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,wt,tt),K=wt.id,oe=tt.id}let ce=e.getRenderTarget(),Ce=e.state.buffers.depth.getReversed(),Oe=L.isInstancedMesh===!0,ve=L.isBatchedMesh===!0,Ze=!!v.map,Qe=!!v.matcap,Ve=!!ue,vt=!!v.aoMap,Pt=!!v.lightMap,Ut=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,It=!!v.displacementMap,dt=!!v.emissiveMap,Tt=!!v.metalnessMap,I=!!v.roughnessMap,Gt=v.anisotropy>0,et=v.clearcoat>0,gt=v.dispersion>0,E=v.retroreflectivity>0,_=v.iridescence>0,N=v.sheen>0,q=v.transmission>0,ie=Gt&&!!v.anisotropyMap,pe=et&&!!v.clearcoatMap,Se=et&&!!v.clearcoatNormalMap,B=et&&!!v.clearcoatRoughnessMap,he=_&&!!v.iridescenceMap,ge=_&&!!v.iridescenceThicknessMap,Ae=N&&!!v.sheenColorMap,ne=N&&!!v.sheenRoughnessMap,Re=!!v.specularMap,Ne=!!v.specularColorMap,ke=!!v.specularIntensityMap,je=q&&!!v.transmissionMap,F=q&&!!v.thicknessMap,ee=!!v.gradientMap,se=!!v.alphaMap,me=v.alphaTest>0,xe=!!v.alphaHash,ae=!!v.extensions,Me=Ri;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Le={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:ze,fragmentShader:Ie,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ve,batchingColor:ve&&L._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&L.instanceColor!==null,instancingMorph:Oe&&L.morphTexture!==null,outputColorSpace:ce===null?e.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:Qe,envMap:Ve,envMapMode:Ve&&ue.mapping,envMapCubeUVHeight:$,aoMap:vt,lightMap:Pt,bumpMap:Ut,normalMap:at,displacementMap:It,emissiveMap:dt,normalMapObjectSpace:at&&v.normalMapType===Rh,normalMapTangentSpace:at&&v.normalMapType===Co,packedNormalMap:at&&v.normalMapType===Co&&vg(v.normalMap.format),metalnessMap:Tt,roughnessMap:I,anisotropy:Gt,anisotropyMap:ie,clearcoat:et,clearcoatMap:pe,clearcoatNormalMap:Se,clearcoatRoughnessMap:B,dispersion:gt,retroreflection:E,iridescence:_,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:N,sheenColorMap:Ae,sheenRoughnessMap:ne,specularMap:Re,specularColorMap:Ne,specularIntensityMap:ke,transmission:q,transmissionMap:je,thicknessMap:F,gradientMap:ee,opaque:v.transparent===!1&&v.blending===da&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:xe,combine:v.combine,mapUv:Ze&&M(v.map.channel),aoMapUv:vt&&M(v.aoMap.channel),lightMapUv:Pt&&M(v.lightMap.channel),bumpMapUv:Ut&&M(v.bumpMap.channel),normalMapUv:at&&M(v.normalMap.channel),displacementMapUv:It&&M(v.displacementMap.channel),emissiveMapUv:dt&&M(v.emissiveMap.channel),metalnessMapUv:Tt&&M(v.metalnessMap.channel),roughnessMapUv:I&&M(v.roughnessMap.channel),anisotropyMapUv:ie&&M(v.anisotropyMap.channel),clearcoatMapUv:pe&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:Se&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:ne&&M(v.sheenRoughnessMap.channel),specularMapUv:Re&&M(v.specularMap.channel),specularColorMapUv:Ne&&M(v.specularColorMap.channel),specularIntensityMapUv:ke&&M(v.specularIntensityMap.channel),transmissionMapUv:je&&M(v.transmissionMap.channel),thicknessMapUv:F&&M(v.thicknessMap.channel),alphaMapUv:se&&M(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(at||Gt),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Ze||se),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&Y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:dt&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_i,flipSided:v.side===ti,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let Y in v.defines)b.push(Y),b.push(v.defines[Y]);return v.isRawShaderMaterial===!1&&(d(b,v),R(b,v),b.push(e.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function R(v,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function P(v){let b=m[v.type],Y;if(b){let O=wi[b];Y=Nu.clone(O.uniforms)}else Y=v.uniforms;return Y}function y(v,b){let Y=u.get(b);return Y!==void 0?++Y.usedTimes:(Y=new pg(e,b,v,a),c.push(Y),u.set(b,Y)),Y}function T(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:P,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:A}}function Mg(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Sg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ll(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Pl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,M,g,p,d){let R=e[t];return R===void 0?(R={id:h.id,object:h,geometry:m,material:M,materialVariant:s(h),groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},e[t]=R):(R.id=h.id,R.object=h,R.geometry=m,R.material=M,R.materialVariant=s(h),R.groupOrder=g,R.renderOrder=h.renderOrder,R.z=p,R.group=d),t++,R}function l(h,m,M,g,p,d,R){R.reversedDepth===!0&&(p=-p);let P=o(h,m,M,g,p,d);M.transmission>0?r.push(P):M.transparent===!0?a.push(P):i.push(P)}function c(h,m,M,g,p,d){let R=o(h,m,M,g,p,d);M.transmission>0?r.unshift(R):M.transparent===!0?a.unshift(R):i.unshift(R)}function u(h,m){i.length>1&&i.sort(h||Sg),r.length>1&&r.sort(m||Ll),a.length>1&&a.sort(m||Ll)}function f(){for(let h=t,m=e.length;h<m;h++){let M=e[h];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:f,sort:u}}function xg(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Pl,e.set(r,[s])):a>=n.length?(s=new Pl,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function yg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new x,color:new He};break;case"SpotLight":i={position:new x,direction:new x,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new x,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new x,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new x,halfWidth:new x,halfHeight:new x};break}return e[t.id]=i,i}}}function bg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Eg=0;function wg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Tg(e){let t=new yg,i=bg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new x);let a=new x,n=new Lt,s=new Lt;function o(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let m=0,M=0,g=0,p=0,d=0,R=0,P=0,y=0,T=0,C=0,A=0,v=0,b=0,Y=0;c.sort(wg);for(let L=0,W=c.length;L<W;L++){let U=c[L],k=U.color,Q=U.intensity,V=U.distance,ue=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Mr?ue=U.shadow.map.texture:ue=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=k.r*Q,f+=k.g*Q,h+=k.b*Q;else if(U.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(U.sh.coefficients[$],Q);Y++}else if(U.isSunLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,re=i.get(U);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[M]=re,r.sunShadowMap[M]=ue;let Ue=J.getViewportCount();for(let te=0;te<Ue;te++)r.sunShadowMatrix[g+te]=J.getMatrix(te),r.sunShadowCascade[g+te]=J._cascadeData[te];g+=Ue,M++}r.sun[m]=$,m++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,re=i.get(U);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.directionalShadow[p]=re,r.directionalShadowMap[p]=ue,r.directionalShadowMatrix[p]=U.shadow.matrix,T++}r.directional[p]=$,p++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(k).multiplyScalar(Q),$.distance=V,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,r.spot[R]=$;let J=U.shadow;if(U.map&&(r.spotLightMap[v]=U.map,v++,J.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[R]=J.matrix,U.castShadow){let re=i.get(U);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.spotShadow[R]=re,r.spotShadowMap[R]=ue,A++}R++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(k).multiplyScalar(Q),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),r.rectArea[P]=$,P++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let J=U.shadow,re=i.get(U);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,r.pointShadow[d]=re,r.pointShadowMap[d]=ue,r.pointShadowMatrix[d]=U.shadow.matrix,C++}r.point[d]=$,d++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(Q),$.groundColor.copy(U.groundColor).multiplyScalar(Q),r.hemi[y]=$,y++}}P>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;let O=r.hash;(O.sunLength!==m||O.directionalLength!==p||O.pointLength!==d||O.spotLength!==R||O.rectAreaLength!==P||O.hemiLength!==y||O.numSunShadows!==M||O.numDirectionalShadows!==T||O.numPointShadows!==C||O.numSpotShadows!==A||O.numSpotMaps!==v||O.numLightProbes!==Y)&&(r.sun.length=m,r.directional.length=p,r.spot.length=R,r.rectArea.length=P,r.point.length=d,r.hemi.length=y,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=g,r.sunShadowCascade.length=g,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.pointShadowMatrix.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+v-b,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=Y,O.sunLength=m,O.directionalLength=p,O.pointLength=d,O.spotLength=R,O.rectAreaLength=P,O.hemiLength=y,O.numSunShadows=M,O.numDirectionalShadows=T,O.numPointShadows=C,O.numSpotShadows=A,O.numSpotMaps=v,O.numLightProbes=Y,r.version=Eg++)}function l(c,u){let f=0,h=0,m=0,M=0,g=0,p=0,d=u.matrixWorldInverse;for(let R=0,P=c.length;R<P;R++){let y=c[R];if(y.isSunLight){let T=r.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),h++}else if(y.isSpotLight){let T=r.spot[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),M++}else if(y.isRectAreaLight){let T=r.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),s.identity(),n.copy(y.matrixWorld),n.premultiply(d),s.extractRotation(n),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){let T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){let T=r.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:r}}function Dl(e){let t=new Tg(e),i=[],r=[],a=[];function n(h){f.camera=h,i.length=0,r.length=0,a.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){a.push(h)}function c(){t.setup(i)}function u(h){t.setupView(i,h)}let f={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Ag(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Dl(e),t.set(a,[o])):n>=s.length?(o=new Dl(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lg=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],Pg=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],Ul=new Lt,ca=new x,ps=new x;function Dg(e,t,i){let r=new gc,a=new De,n=new De,s=new Ot,o=new zu,l=new ku,c={},u=i.maxTextureSize,f={[vr]:ti,[ti]:vr,[_i]:_i},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Rg,fragmentShader:Cg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let M=new zt;M.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Bt(M,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sn;let d=this.type;this.render=function(C,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===nh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sn);let b=e.getRenderTarget(),Y=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),L=e.state;L.setBlending(Vi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let W=d!==this.type;W&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=C.length;U<k;U++){let Q=C[U],V=Q.shadow;if(V===void 0){Ge("WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);let ue=V.getFrameExtents();a.multiply(ue),n.copy(V.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/ue.x),a.x=n.x*ue.x,V.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/ue.y),a.y=n.y*ue.y,V.mapSize.y=n.y));let $=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ha){if(Q.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Si(a.x,a.y,{format:Mr,type:Li,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),V.map.texture.name=Q.name+".shadowMap",V.map.depthTexture=new ya(a.x,a.y,Ti),V.map.depthTexture.name=Q.name+".shadowMapDepth",V.map.depthTexture.format=Xi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else Q.isPointLight?(V.map=new Nc(a.x),V.map.depthTexture=new mu(a.x,Ci)):(V.map=new Si(a.x,a.y),V.map.depthTexture=new ya(a.x,a.y,Ci)),V.map.depthTexture.name=Q.name+".shadowMap",V.map.depthTexture.format=Xi,this.type===sn?(V.map.depthTexture.compareFunction=$?mo:fo,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==a.x||V.map.height!==a.y)&&V.map.setSize(a.x,a.y);let J=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Q.isPointLight!==!0&&V.updateMatrices(Q,v);for(let re=0;re<J;re++){let Ue=V.getCamera(re);if(Q.isPointLight){let te=V.camera,ze=V.matrix,Ie=Q.distance||te.far;Ie!==te.far&&(te.far=Ie,te.updateProjectionMatrix()),ca.setFromMatrixPosition(Q.matrixWorld),te.position.copy(ca),ps.copy(te.position),ps.add(Lg[re]),te.up.copy(Pg[re]),te.lookAt(ps),te.updateMatrixWorld(),ze.makeTranslation(-ca.x,-ca.y,-ca.z),Ul.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ul,te.coordinateSystem,te.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,re),e.clear();else{re===0&&(e.setRenderTarget(V.map),e.clear());let te=V.getViewport(re);s.set(n.x*te.x,n.y*te.y,n.x*te.z,n.y*te.w),L.viewport(s)}r=V.getFrustum(re),y(A,v,Ue,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ha&&R(V,v),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,e.setRenderTarget(b,Y,O)};function R(C,A){let v=t.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new Si(a.x,a.y,{format:Mr,type:Li}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(A,null,v,h,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(A,null,v,m,g,null)}function P(C,A,v,b){let Y=null,O=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)Y=O;else if(Y=v.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=Y.uuid,W=A.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let k=U[W];k===void 0&&(k=Y.clone(),U[W]=k,A.addEventListener("dispose",T)),Y=k}if(Y.visible=A.visible,Y.wireframe=A.wireframe,b===ha?Y.side=A.shadowSide!==null?A.shadowSide:A.side:Y.side=A.shadowSide!==null?A.shadowSide:f[A.side],Y.alphaMap=A.alphaMap,Y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,Y.map=A.map,Y.clipShadows=A.clipShadows,Y.clippingPlanes=A.clippingPlanes,Y.clipIntersection=A.clipIntersection,Y.displacementMap=A.displacementMap,Y.displacementScale=A.displacementScale,Y.displacementBias=A.displacementBias,Y.wireframeLinewidth=A.wireframeLinewidth,Y.linewidth=A.linewidth,v.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){let L=e.properties.get(Y);L.light=v}return Y}function y(C,A,v,b,Y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&Y===ha)&&(!C.frustumCulled||C.intersectsFrustum(r))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let L=t.update(C),W=C.material;if(Array.isArray(W)){let U=L.groups;for(let k=0,Q=U.length;k<Q;k++){let V=U[k],ue=W[V.materialIndex];if(ue&&ue.visible){let $=P(C,ue,b,Y);C.onBeforeShadow(e,C,A,v,L,$,V),e.renderBufferDirect(v,null,L,$,C,V),C.onAfterShadow(e,C,A,v,L,$,V)}}}else if(W.visible){let U=P(C,W,b,Y);C.onBeforeShadow(e,C,A,v,L,U,null),e.renderBufferDirect(v,null,L,U,C,null),C.onAfterShadow(e,C,A,v,L,U,null)}}let O=C.children;for(let L=0,W=O.length;L<W;L++)y(O[L],A,v,b,Y)}function T(C){C.target.removeEventListener("dispose",T);for(let A in c){let v=c[A],b=C.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Ug(e,t){function i(){let F=!1,ee=new Ot,se=null,me=new Ot(0,0,0,0);return{setMask:function(xe){se!==xe&&!F&&(e.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ae,Me,Le,wt){wt===!0&&(xe*=Le,ae*=Le,Me*=Le),ee.set(xe,ae,Me,Le),me.equals(ee)===!1&&(e.clearColor(xe,ae,Me,Le),me.copy(ee))},reset:function(){F=!1,se=null,me.set(-1,0,0,0)}}}function r(){let F=!1,ee=!1,se=null,me=null,xe=null;return{setReversed:function(ae){if(ee!==ae){let Me=t.get("EXT_clip_control");ae?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ee=ae;let Le=xe;xe=null,this.setClear(Le)}},getReversed:function(){return ee},setTest:function(ae){ae?ce(e.DEPTH_TEST):Ce(e.DEPTH_TEST)},setMask:function(ae){se!==ae&&!F&&(e.depthMask(ae),se=ae)},setFunc:function(ae){if(ee&&(ae=kh[ae]),me!==ae){switch(ae){case ms:e.depthFunc(e.NEVER);break;case gs:e.depthFunc(e.ALWAYS);break;case vs:e.depthFunc(e.LESS);break;case _a:e.depthFunc(e.LEQUAL);break;case _s:e.depthFunc(e.EQUAL);break;case Ms:e.depthFunc(e.GEQUAL);break;case Ss:e.depthFunc(e.GREATER);break;case xs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=ae}},setLocked:function(ae){F=ae},setClear:function(ae){xe!==ae&&(xe=ae,ee&&(ae=1-ae),e.clearDepth(ae))},reset:function(){F=!1,se=null,me=null,xe=null,ee=!1}}}function a(){let F=!1,ee=null,se=null,me=null,xe=null,ae=null,Me=null,Le=null,wt=null;return{setTest:function(tt){F||(tt?ce(e.STENCIL_TEST):Ce(e.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!F&&(e.stencilMask(tt),ee=tt)},setFunc:function(tt,Kt,Zt){(se!==tt||me!==Kt||xe!==Zt)&&(e.stencilFunc(tt,Kt,Zt),se=tt,me=Kt,xe=Zt)},setOp:function(tt,Kt,Zt){(ae!==tt||Me!==Kt||Le!==Zt)&&(e.stencilOp(tt,Kt,Zt),ae=tt,Me=Kt,Le=Zt)},setLocked:function(tt){F=tt},setClear:function(tt){wt!==tt&&(e.clearStencil(tt),wt=tt)},reset:function(){F=!1,ee=null,se=null,me=null,xe=null,ae=null,Me=null,Le=null,wt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,c=new WeakMap,u={},f={},h={},m=new WeakMap,M=[],g=null,p=!1,d=null,R=null,P=null,y=null,T=null,C=null,A=null,v=new He(0,0,0),b=0,Y=!1,O=null,L=null,W=null,U=null,k=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ue=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec($)[1]),V=ue>=1):$.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=ue>=2);let J=null,re={},Ue=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ze=new Ot().fromArray(Ue),Ie=new Ot().fromArray(te);function K(F,ee,se,me){let xe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(F,ae),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<se;Me++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,xe):e.texImage2D(ee+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return ae}let oe={};oe[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(e.DEPTH_TEST),s.setFunc(_a),Ut(!1),at(To),ce(e.CULL_FACE),vt(Vi);function ce(F){u[F]!==!0&&(e.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(e.disable(F),u[F]=!1)}function Oe(F,ee){return h[F]!==ee?(e.bindFramebuffer(F,ee),h[F]=ee,F===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=ee),F===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function ve(F,ee){let se=M,me=!1;if(F){se=m.get(ee),se===void 0&&(se=[],m.set(ee,se));let xe=F.textures;if(se.length!==xe.length||se[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Me=xe.length;ae<Me;ae++)se[ae]=e.COLOR_ATTACHMENT0+ae;se.length=xe.length,me=!0}}else se[0]!==e.BACK&&(se[0]=e.BACK,me=!0);me&&e.drawBuffers(se)}function Ze(F){return g!==F?(e.useProgram(F),g=F,!0):!1}let Qe={[Fr]:e.FUNC_ADD,[oh]:e.FUNC_SUBTRACT,[lh]:e.FUNC_REVERSE_SUBTRACT};Qe[ch]=e.MIN,Qe[hh]=e.MAX;let Ve={[uh]:e.ZERO,[dh]:e.ONE,[ph]:e.SRC_COLOR,[Xl]:e.SRC_ALPHA,[Mh]:e.SRC_ALPHA_SATURATE,[vh]:e.DST_COLOR,[mh]:e.DST_ALPHA,[fh]:e.ONE_MINUS_SRC_COLOR,[jl]:e.ONE_MINUS_SRC_ALPHA,[_h]:e.ONE_MINUS_DST_COLOR,[gh]:e.ONE_MINUS_DST_ALPHA,[Sh]:e.CONSTANT_COLOR,[xh]:e.ONE_MINUS_CONSTANT_COLOR,[yh]:e.CONSTANT_ALPHA,[bh]:e.ONE_MINUS_CONSTANT_ALPHA};function vt(F,ee,se,me,xe,ae,Me,Le,wt,tt){if(F===Vi){p===!0&&(Ce(e.BLEND),p=!1);return}if(p===!1&&(ce(e.BLEND),p=!0),F!==sh){if(F!==d||tt!==Y){if((R!==Fr||T!==Fr)&&(e.blendEquation(e.FUNC_ADD),R=Fr,T=Fr),tt)switch(F){case da:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pa:e.blendFunc(e.ONE,e.ONE);break;case Ao:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ro:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ut("WebGLState: Invalid blending: ",F);break}else switch(F){case da:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ao:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ro:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",F);break}P=null,y=null,C=null,A=null,v.set(0,0,0),b=0,d=F,Y=tt}return}xe=xe||ee,ae=ae||se,Me=Me||me,(ee!==R||xe!==T)&&(e.blendEquationSeparate(Qe[ee],Qe[xe]),R=ee,T=xe),(se!==P||me!==y||ae!==C||Me!==A)&&(e.blendFuncSeparate(Ve[se],Ve[me],Ve[ae],Ve[Me]),P=se,y=me,C=ae,A=Me),(Le.equals(v)===!1||wt!==b)&&(e.blendColor(Le.r,Le.g,Le.b,wt),v.copy(Le),b=wt),d=F,Y=!1}function Pt(F,ee){F.side===_i?Ce(e.CULL_FACE):ce(e.CULL_FACE);let se=F.side===ti;ee&&(se=!se),Ut(se),F.blending===da&&F.transparent===!1?vt(Vi):vt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),n.setMask(F.colorWrite);let me=F.stencilWrite;o.setTest(me),me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):Ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(F){O!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),O=F)}function at(F){F!==rh?(ce(e.CULL_FACE),F!==L&&(F===To?e.cullFace(e.BACK):F===ah?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ce(e.CULL_FACE),L=F}function It(F){F!==W&&(V&&e.lineWidth(F),W=F)}function dt(F,ee,se){F?(ce(e.POLYGON_OFFSET_FILL),(U!==ee||k!==se)&&(U=ee,k=se,s.getReversed()&&(ee=-ee),e.polygonOffset(ee,se))):Ce(e.POLYGON_OFFSET_FILL)}function Tt(F){F?ce(e.SCISSOR_TEST):Ce(e.SCISSOR_TEST)}function I(F){F===void 0&&(F=e.TEXTURE0+Q-1),J!==F&&(e.activeTexture(F),J=F)}function Gt(F,ee,se){se===void 0&&(J===null?se=e.TEXTURE0+Q-1:se=J);let me=re[se];me===void 0&&(me={type:void 0,texture:void 0},re[se]=me),(me.type!==F||me.texture!==ee)&&(J!==se&&(e.activeTexture(se),J=se),e.bindTexture(F,ee||oe[F]),me.type=F,me.texture=ee)}function et(){let F=re[J];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function gt(){try{e.compressedTexImage2D(...arguments)}catch(F){ut("WebGLState:",F)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(F){ut("WebGLState:",F)}}function _(){try{e.texSubImage2D(...arguments)}catch(F){ut("WebGLState:",F)}}function N(){try{e.texSubImage3D(...arguments)}catch(F){ut("WebGLState:",F)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(F){ut("WebGLState:",F)}}function ie(){try{e.compressedTexSubImage3D(...arguments)}catch(F){ut("WebGLState:",F)}}function pe(){try{e.texStorage2D(...arguments)}catch(F){ut("WebGLState:",F)}}function Se(){try{e.texStorage3D(...arguments)}catch(F){ut("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){ut("WebGLState:",F)}}function he(){try{e.texImage3D(...arguments)}catch(F){ut("WebGLState:",F)}}function ge(F){return f[F]!==void 0?f[F]:e.getParameter(F)}function Ae(F,ee){f[F]!==ee&&(e.pixelStorei(F,ee),f[F]=ee)}function ne(F){ze.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function Re(F){Ie.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Ie.copy(F))}function Ne(F,ee){let se=c.get(ee);se===void 0&&(se=new WeakMap,c.set(ee,se));let me=se.get(F);me===void 0&&(me=e.getUniformBlockIndex(ee,F.name),se.set(F,me))}function ke(F,ee){let se=c.get(ee).get(F);l.get(ee)!==se&&(e.uniformBlockBinding(ee,se,F.__bindingPointIndex),l.set(ee,se))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},J=null,re={},h={},m=new WeakMap,M=[],g=null,p=!1,d=null,R=null,P=null,y=null,T=null,C=null,A=null,v=new He(0,0,0),b=0,Y=!1,O=null,L=null,W=null,U=null,k=null,ze.set(0,0,e.canvas.width,e.canvas.height),Ie.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ce,disable:Ce,bindFramebuffer:Oe,drawBuffers:ve,useProgram:Ze,setBlending:vt,setMaterial:Pt,setFlipSided:Ut,setCullFace:at,setLineWidth:It,setPolygonOffset:dt,setScissorTest:Tt,activeTexture:I,bindTexture:Gt,unbindTexture:et,compressedTexImage2D:gt,compressedTexImage3D:E,texImage2D:B,texImage3D:he,pixelStorei:Ae,getParameter:ge,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:pe,texStorage3D:Se,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:ie,scissor:ne,viewport:Re,reset:je}}function Ig(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap,f=new Set,h,m=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return M?new OffscreenCanvas(E,_):xn("canvas")}function p(E,_,N){let q=1,ie=gt(E);if((ie.width>N||ie.height>N)&&(q=N/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let pe=Math.floor(q*ie.width),Se=Math.floor(q*ie.height);h===void 0&&(h=g(pe,Se));let B=_?g(pe,Se):h;return B.width=pe,B.height=Se,B.getContext("2d").drawImage(E,0,0,pe,Se),Ge("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+pe+"x"+Se+")."),B}else return"data"in E&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function d(E){return E.generateMipmaps}function R(E){e.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(E,_,N,q,ie,pe=!1){if(E!==null){if(e[E]!==void 0)return e[E];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Se;q&&(Se=t.get("EXT_texture_norm16"),Se||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=_;if(_===e.RED&&(N===e.FLOAT&&(B=e.R32F),N===e.HALF_FLOAT&&(B=e.R16F),N===e.UNSIGNED_BYTE&&(B=e.R8),N===e.UNSIGNED_SHORT&&Se&&(B=Se.R16_EXT),N===e.SHORT&&Se&&(B=Se.R16_SNORM_EXT)),_===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.R8UI),N===e.UNSIGNED_SHORT&&(B=e.R16UI),N===e.UNSIGNED_INT&&(B=e.R32UI),N===e.BYTE&&(B=e.R8I),N===e.SHORT&&(B=e.R16I),N===e.INT&&(B=e.R32I)),_===e.RG&&(N===e.FLOAT&&(B=e.RG32F),N===e.HALF_FLOAT&&(B=e.RG16F),N===e.UNSIGNED_BYTE&&(B=e.RG8),N===e.UNSIGNED_SHORT&&Se&&(B=Se.RG16_EXT),N===e.SHORT&&Se&&(B=Se.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.RG8UI),N===e.UNSIGNED_SHORT&&(B=e.RG16UI),N===e.UNSIGNED_INT&&(B=e.RG32UI),N===e.BYTE&&(B=e.RG8I),N===e.SHORT&&(B=e.RG16I),N===e.INT&&(B=e.RG32I)),_===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.RGB8UI),N===e.UNSIGNED_SHORT&&(B=e.RGB16UI),N===e.UNSIGNED_INT&&(B=e.RGB32UI),N===e.BYTE&&(B=e.RGB8I),N===e.SHORT&&(B=e.RGB16I),N===e.INT&&(B=e.RGB32I)),_===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),N===e.UNSIGNED_INT&&(B=e.RGBA32UI),N===e.BYTE&&(B=e.RGBA8I),N===e.SHORT&&(B=e.RGBA16I),N===e.INT&&(B=e.RGBA32I)),_===e.RGB&&(N===e.UNSIGNED_SHORT&&Se&&(B=Se.RGB16_EXT),N===e.SHORT&&Se&&(B=Se.RGB16_SNORM_EXT),N===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),_===e.RGBA){let he=pe?Mn:st.getTransfer(ie);N===e.FLOAT&&(B=e.RGBA32F),N===e.HALF_FLOAT&&(B=e.RGBA16F),N===e.UNSIGNED_BYTE&&(B=he===_t?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT&&Se&&(B=Se.RGBA16_EXT),N===e.SHORT&&Se&&(B=Se.RGBA16_SNORM_EXT),N===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function T(E,_){let N;return E?_===null||_===Ci||_===Sa?N=e.DEPTH24_STENCIL8:_===Ti?N=e.DEPTH32F_STENCIL8:_===Ma&&(N=e.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===Sa?N=e.DEPTH_COMPONENT24:_===Ti?N=e.DEPTH_COMPONENT32F:_===Ma&&(N=e.DEPTH_COMPONENT16),N}function C(E,_){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==Wt&&E.minFilter!==Xt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){let _=E.target;_.removeEventListener("dispose",A),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(E){let _=E.target;_.removeEventListener("dispose",v),O(_)}function b(E){let _=r.get(E);if(_.__webglInit===void 0)return;let N=E.source,q=m.get(N);if(q){let ie=q[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&Y(E),Object.keys(q).length===0&&m.delete(N)}r.remove(E)}function Y(E){let _=r.get(E);e.deleteTexture(_.__webglTexture);let N=E.source,q=m.get(N);delete q[_.__cacheKey],s.memory.textures--}function O(E){let _=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let ie=0;ie<_.__webglFramebuffer[q].length;ie++)e.deleteFramebuffer(_.__webglFramebuffer[q][ie]);else e.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)e.deleteFramebuffer(_.__webglFramebuffer[q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=E.textures;for(let q=0,ie=N.length;q<ie;q++){let pe=r.get(N[q]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(N[q])}r.remove(E)}let L=0;function W(){L=0}function U(){return L}function k(E){L=E}function Q(){let E=L;return E>=a.maxTextures&&Ge("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),L+=1,E}function V(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ue(E,_){let N=r.get(E);if(E.isVideoTexture&&Gt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let q=E.image;if(q===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+_)}function $(E,_){let N=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ce(N,E,_);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+_)}function J(E,_){let N=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ce(N,E,_);return}i.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+_)}function re(E,_){let N=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Oe(N,E,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+_)}let Ue={[ys]:e.REPEAT,[Gi]:e.CLAMP_TO_EDGE,[bs]:e.MIRRORED_REPEAT},te={[Wt]:e.NEAREST,[Th]:e.NEAREST_MIPMAP_NEAREST,[Ca]:e.NEAREST_MIPMAP_LINEAR,[Xt]:e.LINEAR,[Dn]:e.LINEAR_MIPMAP_NEAREST,[pr]:e.LINEAR_MIPMAP_LINEAR},ze={[Lh]:e.NEVER,[Nh]:e.ALWAYS,[Ph]:e.LESS,[fo]:e.LEQUAL,[Dh]:e.EQUAL,[mo]:e.GEQUAL,[Uh]:e.GREATER,[Ih]:e.NOTEQUAL};function Ie(E,_){if(_.type===Ti&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Xt||_.magFilter===Dn||_.magFilter===Ca||_.magFilter===pr||_.minFilter===Xt||_.minFilter===Dn||_.minFilter===Ca||_.minFilter===pr)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Ue[_.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Ue[_.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Ue[_.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,te[_.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,te[_.minFilter]),_.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,ze[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==Ca&&_.minFilter!==pr||_.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function K(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let q=_.source,ie=m.get(q);ie===void 0&&(ie={},m.set(q,ie));let pe=V(_);if(pe!==E.__cacheKey){ie[pe]===void 0&&(ie[pe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,N=!0),ie[pe].usedTimes++;let Se=ie[E.__cacheKey];Se!==void 0&&(ie[E.__cacheKey].usedTimes--,Se.usedTimes===0&&Y(_)),E.__cacheKey=pe,E.__webglTexture=ie[pe].texture}return N}function oe(E,_,N){return Math.floor(Math.floor(E/N)/_)}function ce(E,_,N,q){let ie=E.updateRanges;if(ie.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,N,q,_.data);else{ie.sort((ge,Ae)=>ge.start-Ae.start);let pe=0;for(let ge=1;ge<ie.length;ge++){let Ae=ie[pe],ne=ie[ge],Re=Ae.start+Ae.count,Ne=oe(ne.start,_.width,4),ke=oe(Ae.start,_.width,4);ne.start<=Re+1&&Ne===ke&&oe(ne.start+ne.count-1,_.width,4)===Ne?Ae.count=Math.max(Ae.count,ne.start+ne.count-Ae.start):(++pe,ie[pe]=ne)}ie.length=pe+1;let Se=i.getParameter(e.UNPACK_ROW_LENGTH),B=i.getParameter(e.UNPACK_SKIP_PIXELS),he=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let ge=0,Ae=ie.length;ge<Ae;ge++){let ne=ie[ge],Re=Math.floor(ne.start/4),Ne=Math.ceil(ne.count/4),ke=Re%_.width,je=Math.floor(Re/_.width),F=Ne;i.pixelStorei(e.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(e.UNPACK_SKIP_ROWS,je),i.texSubImage2D(e.TEXTURE_2D,0,ke,je,F,1,N,q,_.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Se),i.pixelStorei(e.UNPACK_SKIP_PIXELS,B),i.pixelStorei(e.UNPACK_SKIP_ROWS,he)}}function Ce(E,_,N){let q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=e.TEXTURE_3D);let ie=K(E,_),pe=_.source;i.bindTexture(q,E.__webglTexture,e.TEXTURE0+N);let Se=r.get(pe);if(pe.version!==Se.__version||ie===!0){if(i.activeTexture(e.TEXTURE0+N),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let ee=st.getPrimaries(st.workingColorSpace),se=_.colorSpace===ir?null:st.getPrimaries(_.colorSpace),me=_.colorSpace===ir||ee===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let B=p(_.image,!1,a.maxTextureSize);B=et(_,B);let he=n.convert(_.format,_.colorSpace),ge=n.convert(_.type),Ae=y(_.internalFormat,he,ge,_.normalized,_.colorSpace,_.isVideoTexture);Ie(q,_);let ne,Re=_.mipmaps,Ne=_.isVideoTexture!==!0,ke=Se.__version===void 0||ie===!0,je=pe.dataReady,F=C(_,B);if(_.isDepthTexture)Ae=T(_.format===fr,_.type),ke&&(Ne?i.texStorage2D(e.TEXTURE_2D,1,Ae,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,Ae,B.width,B.height,0,he,ge,null));else if(_.isDataTexture)if(Re.length>0){Ne&&ke&&i.texStorage2D(e.TEXTURE_2D,F,Ae,Re[0].width,Re[0].height);for(let ee=0,se=Re.length;ee<se;ee++)ne=Re[ee],Ne?je&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,ne.width,ne.height,he,ge,ne.data):i.texImage2D(e.TEXTURE_2D,ee,Ae,ne.width,ne.height,0,he,ge,ne.data);_.generateMipmaps=!1}else Ne?(ke&&i.texStorage2D(e.TEXTURE_2D,F,Ae,B.width,B.height),je&&ce(_,B,he,ge)):i.texImage2D(e.TEXTURE_2D,0,Ae,B.width,B.height,0,he,ge,B.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&ke&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Ae,Re[0].width,Re[0].height,B.depth);for(let ee=0,se=Re.length;ee<se;ee++)if(ne=Re[ee],_.format!==Mi)if(he!==null)if(Ne){if(je)if(_.layerUpdates.size>0){let me=ul(ne.width,ne.height,_.format,_.type);for(let xe of _.layerUpdates){let ae=ne.data.subarray(xe*me/ne.data.BYTES_PER_ELEMENT,(xe+1)*me/ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,xe,ne.width,ne.height,1,he,ae)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,ne.width,ne.height,B.depth,he,ne.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,Ae,ne.width,ne.height,B.depth,0,ne.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?je&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,ne.width,ne.height,B.depth,he,ge,ne.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ee,Ae,ne.width,ne.height,B.depth,0,he,ge,ne.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ne&&ke&&i.texStorage2D(e.TEXTURE_2D,F,Ae,Re[0].width,Re[0].height);for(let ee=0,se=Re.length;ee<se;ee++)ne=Re[ee],_.format!==Mi?he!==null?Ne?je&&i.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,ne.width,ne.height,he,ne.data):i.compressedTexImage2D(e.TEXTURE_2D,ee,Ae,ne.width,ne.height,0,ne.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?je&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,ne.width,ne.height,he,ge,ne.data):i.texImage2D(e.TEXTURE_2D,ee,Ae,ne.width,ne.height,0,he,ge,ne.data)}else if(_.isDataArrayTexture)if(Ne){if(ke&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,Ae,B.width,B.height,B.depth),je)if(_.layerUpdates.size>0){let ee=ul(B.width,B.height,_.format,_.type);for(let se of _.layerUpdates){let me=B.data.subarray(se*ee/B.data.BYTES_PER_ELEMENT,(se+1)*ee/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,B.width,B.height,1,he,ge,me)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,he,ge,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ae,B.width,B.height,B.depth,0,he,ge,B.data);else if(_.isData3DTexture)Ne?(ke&&i.texStorage3D(e.TEXTURE_3D,F,Ae,B.width,B.height,B.depth),je&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,he,ge,B.data)):i.texImage3D(e.TEXTURE_3D,0,Ae,B.width,B.height,B.depth,0,he,ge,B.data);else if(_.isFramebufferTexture){if(ke)if(Ne)i.texStorage2D(e.TEXTURE_2D,F,Ae,B.width,B.height);else{let ee=B.width,se=B.height;for(let me=0;me<F;me++)i.texImage2D(e.TEXTURE_2D,me,Ae,ee,se,0,he,ge,null),ee>>=1,se>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let ee=e.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),B.parentNode!==ee){ee.appendChild(B),f.add(_),ee.onpaint=se=>{let me=se.changedElements;for(let xe of f)me.includes(xe.image)&&(xe.needsUpdate=!0)},ee.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{let se=e.RGBA,me=e.RGBA,xe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,se,me,xe,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ne&&ke){let ee=gt(Re[0]);i.texStorage2D(e.TEXTURE_2D,F,Ae,ee.width,ee.height)}for(let ee=0,se=Re.length;ee<se;ee++)ne=Re[ee],Ne?je&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,he,ge,ne):i.texImage2D(e.TEXTURE_2D,ee,Ae,he,ge,ne);_.generateMipmaps=!1}else if(Ne){if(ke){let ee=gt(B);i.texStorage2D(e.TEXTURE_2D,F,Ae,ee.width,ee.height)}je&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,he,ge,B)}else i.texImage2D(e.TEXTURE_2D,0,Ae,he,ge,B);d(_)&&R(q),Se.__version=pe.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Oe(E,_,N){if(_.image.length!==6)return;let q=K(E,_),ie=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+N);let pe=r.get(ie);if(ie.version!==pe.__version||q===!0){i.activeTexture(e.TEXTURE0+N);let Se=st.getPrimaries(st.workingColorSpace),B=_.colorSpace===ir?null:st.getPrimaries(_.colorSpace),he=_.colorSpace===ir||Se===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let ae=0;ae<6;ae++)!ge&&!Ae?ne[ae]=p(_.image[ae],!0,a.maxCubemapSize):ne[ae]=Ae?_.image[ae].image:_.image[ae],ne[ae]=et(_,ne[ae]);let Re=ne[0],Ne=n.convert(_.format,_.colorSpace),ke=n.convert(_.type),je=y(_.internalFormat,Ne,ke,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,ee=pe.__version===void 0||q===!0,se=ie.dataReady,me=C(_,Re);Ie(e.TEXTURE_CUBE_MAP,_);let xe;if(ge){F&&ee&&i.texStorage2D(e.TEXTURE_CUBE_MAP,me,je,Re.width,Re.height);for(let ae=0;ae<6;ae++){xe=ne[ae].mipmaps;for(let Me=0;Me<xe.length;Me++){let Le=xe[Me];_.format!==Mi?Ne!==null?F?se&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,Le.width,Le.height,Ne,Le.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,je,Le.width,Le.height,0,Le.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,Le.width,Le.height,Ne,ke,Le.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,je,Le.width,Le.height,0,Ne,ke,Le.data)}}}else{if(xe=_.mipmaps,F&&ee){xe.length>0&&me++;let ae=gt(ne[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,me,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ae){F?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ne[ae].width,ne[ae].height,Ne,ke,ne[ae].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,ne[ae].width,ne[ae].height,0,Ne,ke,ne[ae].data);for(let Me=0;Me<xe.length;Me++){let Le=xe[Me].image[ae].image;F?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Le.width,Le.height,Ne,ke,Le.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,je,Le.width,Le.height,0,Ne,ke,Le.data)}}else{F?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,ke,ne[ae]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Ne,ke,ne[ae]);for(let Me=0;Me<xe.length;Me++){let Le=xe[Me];F?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Ne,ke,Le.image[ae]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,je,Ne,ke,Le.image[ae])}}}d(_)&&R(e.TEXTURE_CUBE_MAP),pe.__version=ie.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ve(E,_,N,q,ie,pe){let Se=n.convert(N.format,N.colorSpace),B=n.convert(N.type),he=y(N.internalFormat,Se,B,N.normalized,N.colorSpace),ge=r.get(_),Ae=r.get(N);if(Ae.__renderTarget=_,!ge.__hasExternalTextures){let ne=Math.max(1,_.width>>pe),Re=Math.max(1,_.height>>pe);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?i.texImage3D(ie,pe,he,ne,Re,_.depth,0,Se,B,null):i.texImage2D(ie,pe,he,ne,Re,0,Se,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),I(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,ie,Ae.__webglTexture,0,Tt(_)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,ie,Ae.__webglTexture,pe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ze(E,_,N){if(e.bindRenderbuffer(e.RENDERBUFFER,E),_.depthBuffer){let q=_.depthTexture,ie=q&&q.isDepthTexture?q.type:null,pe=T(_.stencilBuffer,ie),Se=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt(_),pe,_.width,_.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt(_),pe,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,pe,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,E)}else{let q=_.textures;for(let ie=0;ie<q.length;ie++){let pe=q[ie],Se=n.convert(pe.format,pe.colorSpace),B=n.convert(pe.type),he=y(pe.internalFormat,Se,B,pe.normalized,pe.colorSpace);I(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt(_),he,_.width,_.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt(_),he,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,he,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Qe(E,_,N){let q=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=r.get(_.depthTexture);if(ie.__renderTarget=_,(!ie.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,_.depthTexture);let ge=n.convert(_.depthTexture.format),Ae=n.convert(_.depthTexture.type),ne;_.depthTexture.format===Xi?ne=e.DEPTH_COMPONENT24:_.depthTexture.format===fr&&(ne=e.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ne,_.width,_.height,0,ge,Ae,null)}}else ue(_.depthTexture,0);let pe=ie.__webglTexture,Se=Tt(_),B=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,he=_.depthTexture.format===fr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xi)I(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,B,pe,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,he,B,pe,0);else if(_.depthTexture.format===fr)I(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,B,pe,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,he,B,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(E){let _=r.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Qe(_.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?Qe(_.__webglFramebuffer[0],E,0):Qe(_.__webglFramebuffer,E,0)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=e.createRenderbuffer(),Ze(_.__webglDepthbuffer[q],E,!1);else{let ie=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,pe)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ze(_.__webglDepthbuffer,E,!1);else{let ie=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,pe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function vt(E,_,N){let q=r.get(E);_!==void 0&&ve(q.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Ve(E)}function Pt(E){let _=E.texture,N=r.get(E),q=r.get(_);E.addEventListener("dispose",v);let ie=E.textures,pe=E.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=_.version,s.memory.textures++),pe){N.__webglFramebuffer=[];for(let B=0;B<6;B++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[B]=[];for(let he=0;he<_.mipmaps.length;he++)N.__webglFramebuffer[B][he]=e.createFramebuffer()}else N.__webglFramebuffer[B]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let B=0;B<_.mipmaps.length;B++)N.__webglFramebuffer[B]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(Se)for(let B=0,he=ie.length;B<he;B++){let ge=r.get(ie[B]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&I(E)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let B=0;B<ie.length;B++){let he=ie[B];N.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[B]);let ge=n.convert(he.format,he.colorSpace),Ae=n.convert(he.type),ne=y(he.internalFormat,ge,Ae,he.normalized,he.colorSpace,E.isXRRenderTarget===!0),Re=Tt(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,ne,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,N.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),Ze(N.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pe){i.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,_);for(let B=0;B<6;B++)if(_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ve(N.__webglFramebuffer[B][he],E,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,he);else ve(N.__webglFramebuffer[B],E,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);d(_)&&R(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Se){for(let B=0,he=ie.length;B<he;B++){let ge=ie[B],Ae=r.get(ge),ne=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ne,Ae.__webglTexture),Ie(ne,ge),ve(N.__webglFramebuffer,E,ge,e.COLOR_ATTACHMENT0+B,ne,0),d(ge)&&R(ne)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(B=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,q.__webglTexture),Ie(B,_),_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ve(N.__webglFramebuffer[he],E,_,e.COLOR_ATTACHMENT0,B,he);else ve(N.__webglFramebuffer,E,_,e.COLOR_ATTACHMENT0,B,0);d(_)&&R(B),i.unbindTexture()}E.depthBuffer&&Ve(E)}function Ut(E){let _=E.textures;for(let N=0,q=_.length;N<q;N++){let ie=_[N];if(d(ie)){let pe=P(E),Se=r.get(ie).__webglTexture;i.bindTexture(pe,Se),R(pe),i.unbindTexture()}}}let at=[],It=[];function dt(E){if(E.samples>0){if(I(E)===!1){let _=E.textures,N=E.width,q=E.height,ie=e.COLOR_BUFFER_BIT,pe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=r.get(E),B=_.length>1;if(B)for(let ge=0;ge<_.length;ge++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let he=E.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);let Ae=r.get(_[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ae,0)}e.blitFramebuffer(0,0,N,q,0,0,N,q,ie,e.NEAREST),l===!0&&(at.length=0,It.length=0,at.push(e.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(at.push(pe),It.push(pe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,It)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let ge=0;ge<_.length;ge++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);let Ae=r.get(_[ge]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,Ae,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Tt(E){return Math.min(a.maxSamples,E.samples)}function I(E){let _=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Gt(E){let _=s.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function et(E,_){let N=E.colorSpace,q=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==_n&&N!==ir&&(st.getTransfer(N)===_t?(q!==Mi||ie!==hi)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",N)),_}function gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=ue,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=re,this.rebindTextures=vt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Ng(e,t){function i(r,a=ir){let n,s=st.getTransfer(a);if(r===hi)return e.UNSIGNED_BYTE;if(r===lo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===co)return e.UNSIGNED_SHORT_5_5_5_1;if(r===rc)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===ac)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===tc)return e.BYTE;if(r===ic)return e.SHORT;if(r===Ma)return e.UNSIGNED_SHORT;if(r===oo)return e.INT;if(r===Ci)return e.UNSIGNED_INT;if(r===Ti)return e.FLOAT;if(r===Li)return e.HALF_FLOAT;if(r===nc)return e.ALPHA;if(r===sc)return e.RGB;if(r===Mi)return e.RGBA;if(r===Xi)return e.DEPTH_COMPONENT;if(r===fr)return e.DEPTH_STENCIL;if(r===oc)return e.RED;if(r===ho)return e.RED_INTEGER;if(r===Mr)return e.RG;if(r===uo)return e.RG_INTEGER;if(r===po)return e.RGBA_INTEGER;if(r===on||r===ln||r===cn||r===hn)if(s===_t)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===on)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ln)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===on)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ln)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Es||r===ws||r===Ts||r===As)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Es)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ws)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ts)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===As)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rs||r===Cs||r===Ls||r===Ps||r===Ds||r===gn||r===Us)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Rs||r===Cs)return s===_t?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ls)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ps)return n.COMPRESSED_R11_EAC;if(r===Ds)return n.COMPRESSED_SIGNED_R11_EAC;if(r===gn)return n.COMPRESSED_RG11_EAC;if(r===Us)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Is||r===Ns||r===Os||r===Fs||r===Bs||r===zs||r===ks||r===Hs||r===Gs||r===Vs||r===Ws||r===Xs||r===js||r===Ys)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Is)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ns)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Os)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ks)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ws)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xs)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===js)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ys)return s===_t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qs||r===Ks||r===Zs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===qs)return s===_t?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ks)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$s||r===Js||r===vn||r===Qs)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===$s)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Js)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pi({vertexShader:Og,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new bc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zg=class extends ar{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,u=null,f=null,h=null,m=null,M=typeof XRWebGLBinding<"u",g=new Bg,p={},d=t.getContextAttributes(),R=null,P=null,y=[],T=[],C=new De,A=null,v=null,b=new ci;b.viewport=new Ot;let Y=new ci;Y.viewport=new Ot;let O=[b,Y],L=new Gu,W=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=y[K];return oe===void 0&&(oe=new kn,y[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=y[K];return oe===void 0&&(oe=new kn,y[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=y[K];return oe===void 0&&(oe=new kn,y[K]=oe),oe.getHandSpace()};function k(K){let oe=T.indexOf(K.inputSource);if(oe===-1)return;let ce=y[oe];ce!==void 0&&(ce.update(K.inputSource,K.frame,l||n),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",V);for(let K=0;K<y.length;K++){let oe=T[K];oe!==null&&(T[K]=null,y[K].disconnect(oe))}W=null,U=null,g.reset();for(let K in p)delete p[K];if(e.setRenderTarget(R),h=null,f=null,u=null,r=null,P=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),v!==null){let K=v.camera;K.fov=v.fov,K.zoom=v.zoom,K.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ce=null,Ce=null;d.depth&&(Ce=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=d.stencil?fr:Xi,ce=d.stencil?Sa:Ci);let Oe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),P=new Si(f.textureWidth,f.textureHeight,{format:Mi,type:hi,depthTexture:new ya(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let oe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),P=new Si(h.framebufferWidth,h.framebufferHeight,{format:Mi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(K){for(let oe=0;oe<K.removed.length;oe++){let ce=K.removed[oe],Ce=T.indexOf(ce);Ce>=0&&(T[Ce]=null,y[Ce].disconnect(ce))}for(let oe=0;oe<K.added.length;oe++){let ce=K.added[oe],Ce=T.indexOf(ce);if(Ce===-1){for(let ve=0;ve<y.length;ve++)if(ve>=T.length){T.push(ce),Ce=ve;break}else if(T[ve]===null){T[ve]=ce,Ce=ve;break}if(Ce===-1)break}let Oe=y[Ce];Oe&&Oe.connect(ce)}}let ue=new x,$=new x;function J(K,oe,ce){ue.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);let Ce=ue.distanceTo($),Oe=oe.projectionMatrix.elements,ve=ce.projectionMatrix.elements,Ze=Oe[14]/(Oe[10]-1),Qe=Oe[14]/(Oe[10]+1),Ve=(Oe[9]+1)/Oe[5],vt=(Oe[9]-1)/Oe[5],Pt=(Oe[8]-1)/Oe[0],Ut=(ve[8]+1)/ve[0],at=Ze*Pt,It=Ze*Ut,dt=Ce/(-Pt+Ut),Tt=dt*-Pt;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Oe[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let I=Ze+dt,Gt=Qe+dt,et=at-Tt,gt=It+(Ce-Tt),E=Ve*Qe/Gt*I,_=vt*Qe/Gt*I;K.projectionMatrix.makePerspective(et,gt,E,_,I,Gt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let oe=K.near,ce=K.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),L.near=Y.near=b.near=oe,L.far=Y.far=b.far=ce,(W!==L.near||U!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),W=L.near,U=L.far),L.layers.mask=K.layers.mask|6,b.layers.mask=L.layers.mask&-5,Y.layers.mask=L.layers.mask&-3;let Ce=K.parent,Oe=L.cameras;re(L,Ce);for(let ve=0;ve<Oe.length;ve++)re(Oe[ve],Ce);Oe.length===2?J(L,b,Y):L.projectionMatrix.copy(b.projectionMatrix),v===null&&K.isPerspectiveCamera&&(v={camera:K,fov:K.fov,zoom:K.zoom}),Ue(K,L,Ce)};function Ue(K,oe,ce){ce===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=eo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return o},this.setFoveation=function(K){o=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let te=null;function ze(K,oe){if(c=oe.getViewerPose(l||n),m=oe,c!==null){let ce=c.views;h!==null&&(e.setRenderTargetFramebuffer(P,h.framebuffer),e.setRenderTarget(P));let Ce=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let ve=0;ve<ce.length;ve++){let Ze=ce[ve],Qe=null;if(h!==null)Qe=h.getViewport(Ze);else{let vt=u.getViewSubImage(f,Ze);Qe=vt.viewport,ve===0&&(e.setRenderTargetTextures(P,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(P))}let Ve=O[ve];Ve===void 0&&(Ve=new ci,Ve.layers.enable(ve),Ve.viewport=new Ot,O[ve]=Ve),Ve.matrix.fromArray(Ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ve===0&&(L.matrix.copy(Ve.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(Ve)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let ve=u.getDepthInformation(ce[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,r.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),u=i.getBinding();for(let ve=0;ve<ce.length;ve++){let Ze=ce[ve].camera;if(Ze){let Qe=p[Ze];Qe||(Qe=new _c,p[Ze]=Qe);let Ve=u.getCameraImage(Ze);Qe.sourceTexture=Ve}}}}for(let ce=0;ce<y.length;ce++){let Ce=T[ce],Oe=y[ce];Ce!==null&&Oe!==void 0&&Oe.update(Ce,oe,l||n)}te&&te(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),m=null}let Ie=new Uc;Ie.setAnimationLoop(ze),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}},kg=new Lt,kc=new Xe;kc.set(-1,0,0,0,1,0,0,0,1);function Hg(e,t){function i(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function r(p,d){d.color.getRGB(p.fogColor.value,Cc(e)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,R,P,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(p,d):d.isMeshLambertMaterial?(n(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(p,d),f(p,d)):d.isMeshPhongMaterial?(n(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(n(p,d),M(p,d)):d.isMeshDepthMaterial?n(p,d):d.isMeshDistanceMaterial?(n(p,d),g(p,d)):d.isMeshNormalMaterial?n(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,R,P):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,i(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,i(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,i(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ti&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,i(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ti&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,i(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,i(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let R=t.get(d),P=R.envMap,y=R.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kc),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,i(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,R,P){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*R,p.scale.value=P*.5,d.map&&(p.map.value=d.map,i(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,i(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,i(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,i(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,R){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ti&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){let R=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Gg(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let C=T.program;r.uniformBlockBinding(y,C)}function c(y,T){let C=a[y.id];C===void 0&&(p(y),C=u(y),a[y.id]=C,y.addEventListener("dispose",R));let A=T.program;r.updateUBOMapping(y,A);let v=t.render.frame;n[y.id]!==v&&(h(y),n[y.id]=v)}function u(y){let T=f();y.__bindingPointIndex=T;let C=e.createBuffer(),A=y.__size,v=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,C),e.bufferData(e.UNIFORM_BUFFER,A,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,C),C}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=a[y.id],C=y.uniforms,A=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let v=0,b=C.length;v<b;v++){let Y=C[v];if(Array.isArray(Y))for(let O=0,L=Y.length;O<L;O++)m(Y[O],v,O,A);else m(Y,v,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(y,T,C,A){if(g(y,T,C,A)===!0){let v=y.__offset,b=y.value;if(Array.isArray(b)){let Y=0;for(let O=0;O<b.length;O++){let L=b[O],W=d(L);M(L,y.__data,Y),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(b,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,y.__data)}}function M(y,T,C){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,C)}function g(y,T,C,A){let v=y.value,b=T+"_"+C;if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{let Y=A[b];if(typeof v=="number"||typeof v=="boolean"){if(Y!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(Y.equals(v)===!1)return Y.copy(v),!0}}return!1}function p(y){let T=y.uniforms,C=0,A=16;for(let b=0,Y=T.length;b<Y;b++){let O=Array.isArray(T[b])?T[b]:[T[b]];for(let L=0,W=O.length;L<W;L++){let U=O[L],k=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,V=k.length;Q<V;Q++){let ue=k[Q],$=d(ue),J=C%A,re=J%$.boundary,Ue=J+re;C+=re,Ue!==0&&A-Ue<$.storage&&(C+=A-Ue),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=C,C+=$.storage}}}let v=C%A;return v>0&&(C+=A-v),y.__size=C,y.__cache={},this}function d(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",y),T}function R(y){let T=y.target;T.removeEventListener("dispose",R);let C=s.indexOf(T.__bindingPointIndex);s.splice(C,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function P(){for(let y in a)e.deleteBuffer(a[y]);s=[],a={},n={}}return{bind:l,update:c,dispose:P}}var Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Wg(){return Ei===null&&(Ei=new uu(Vg,16,16,Mr,Li),Ei.name="DFG_LUT",Ei.minFilter=Xt,Ei.magFilter=Xt,Ei.wrapS=Gi,Ei.wrapT=Gi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Xg=class{constructor(e={}){let{canvas:t=Bh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=hi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=n;let M=h,g=new Set([po,uo,ho]),p=new Set([hi,Ci,Ma,Sa,lo,co]),d=new Uint32Array(4),R=new Int32Array(4),P=new x,y=null,T=null,C=[],A=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,Y=!1,O=null,L=null,W=null,U=null;this._outputColorSpace=li;let k=0,Q=0,V=null,ue=-1,$=null,J=new Ot,re=new Ot,Ue=null,te=new He(0),ze=0,Ie=t.width,K=t.height,oe=1,ce=null,Ce=null,Oe=new Ot(0,0,Ie,K),ve=new Ot(0,0,Ie,K),Ze=!1,Qe=new gc,Ve=!1,vt=!1,Pt=new Lt,Ut=new x,at=new Ot,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function Tt(){return V===null?oe:1}let I=i;function Gt(S,D){return t.getContext(S,D)}let et,gt,E,_,N,q,ie,pe,Se,B,he,ge,Ae,ne,Re,Ne,ke,je,F,ee,se,me,xe;try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",tt,!1),I===null){let D="webgl2";if(I=Gt(D,S),I===null)throw Gt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(S){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),ut("WebGLRenderer: "+S.message),S}function ae(){et=new Wf(I),et.init(),se=new Ng(I,et),gt=new If(I,et,e,se),E=new Ug(I,et),gt.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),L=I.createFramebuffer(),W=I.createFramebuffer(),U=I.createFramebuffer(),_=new Yf(I),N=new Mg,q=new Ig(I,et,E,N,gt,se,_),ie=new Vf(b),pe=new qu(I),me=new Df(I,pe),Se=new Xf(I,pe,_,me),B=new Kf(I,Se,pe,me,_),je=new qf(I,gt,q),Re=new Nf(N),he=new _g(b,ie,et,gt,me,Re),ge=new Hg(b,N),Ae=new xg,ne=new Ag(et),ke=new Pf(b,ie,E,B,m,o),Ne=new Dg(b,B,gt),xe=new Gg(I,_,gt,E),F=new Uf(I,et,_),ee=new jf(I,et,_),_.programs=he.programs,b.capabilities=gt,b.extensions=et,b.properties=N,b.renderLists=Ae,b.shadowMap=Ne,b.state=E,b.info=_}M!==hi&&(v=new $f(M,t.width,t.height,s,r,a));let Me=new zg(b,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(S){S!==void 0&&(oe=S,this.setSize(Ie,K,!1))},this.getSize=function(S){return S.set(Ie,K)},this.setSize=function(S,D,G=!0){if(Me.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=S,K=D,t.width=Math.floor(S*oe),t.height=Math.floor(D*oe),G===!0&&(t.style.width=S+"px",t.style.height=D+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Ie*oe,K*oe).floor()},this.setDrawingBufferSize=function(S,D,G){Ie=S,K=D,oe=G,t.width=Math.floor(S*G),t.height=Math.floor(D*G),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===hi){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(Oe)},this.setViewport=function(S,D,G,z){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,D,G,z),E.viewport(J.copy(Oe).multiplyScalar(oe).round())},this.getScissor=function(S){return S.copy(ve)},this.setScissor=function(S,D,G,z){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,D,G,z),E.scissor(re.copy(ve).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){E.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){ce=S},this.setTransparentSort=function(S){Ce=S},this.getClearColor=function(S){return S.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,G=!0){let z=0;if(S){let H=!1;if(V!==null){let le=V.texture.format;H=g.has(le)}if(H){let le=V.texture.type,fe=p.has(le),be=ke.getClearColor(),Te=ke.getClearAlpha(),Fe=be.r,We=be.g,$e=be.b;fe?(d[0]=Fe,d[1]=We,d[2]=$e,d[3]=Te,I.clearBufferuiv(I.COLOR,0,d)):(R[0]=Fe,R[1]=We,R[2]=$e,R[3]=Te,I.clearBufferiv(I.COLOR,0,R))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),ke.dispose(),Ae.dispose(),ne.dispose(),N.dispose(),ie.dispose(),B.dispose(),me.dispose(),xe.dispose(),he.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",j),Me.removeEventListener("sessionend",w),X.stop()};function Le(S){S.preventDefault(),Do("WebGLRenderer: Context Lost."),Y=!0}function wt(){Do("WebGLRenderer: Context Restored."),Y=!1;let S=_.autoReset,D=Ne.enabled,G=Ne.autoUpdate,z=Ne.needsUpdate,H=Ne.type;ae(),_.autoReset=S,Ne.enabled=D,Ne.autoUpdate=G,Ne.needsUpdate=z,Ne.type=H}function tt(S){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Kt(S){let D=S.target;D.removeEventListener("dispose",Kt),Zt(D)}function Zt(S){ea(S),N.remove(S)}function ea(S){let D=N.get(S).programs;D!==void 0&&(D.forEach(function(G){he.releaseProgram(G)}),S.isShaderMaterial&&he.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,G,z,H,le){D===null&&(D=It);let fe=H.isMesh&&H.matrixWorld.determinantAffine()<0,be=xt(S,D,G,z,H);E.setMaterial(z,fe);let Te=G.index,Fe=1;if(z.wireframe===!0){if(Te=Se.getWireframeAttribute(G),Te===void 0)return;Fe=2}let We=G.drawRange,$e=G.attributes.position,Pe=We.start*Fe,ht=(We.start+We.count)*Fe;le!==null&&(Pe=Math.max(Pe,le.start*Fe),ht=Math.min(ht,(le.start+le.count)*Fe)),Te!==null?(Pe=Math.max(Pe,0),ht=Math.min(ht,Te.count)):$e!=null&&(Pe=Math.max(Pe,0),ht=Math.min(ht,$e.count));let Ct=ht-Pe;if(Ct<0||Ct===1/0)return;me.setup(H,z,be,G,Te);let ft,lt=F;if(Te!==null&&(ft=pe.get(Te),lt=ee,lt.setIndex(ft)),H.isMesh)z.wireframe===!0?(E.setLineWidth(z.wireframeLinewidth*Tt()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(H.isLine){let it=z.linewidth;it===void 0&&(it=1),E.setLineWidth(it*Tt()),H.isLineSegments?lt.setMode(I.LINES):H.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else H.isPoints?lt.setMode(I.POINTS):H.isSprite&&lt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let it=H._multiDrawStarts,ye=H._multiDrawCounts,$t=H._multiDrawCount,nr=Te?pe.get(Te).bytesPerElement:1,ni=N.get(z).currentProgram.getUniforms();for(let yi=0;yi<$t;yi++)ni.setValue(I,"_gl_DrawID",yi),lt.render(it[yi]/nr,ye[yi])}else if(H.isInstancedMesh)lt.renderInstances(Pe,Ct,H.count);else if(G.isInstancedBufferGeometry){let it=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ye=Math.min(G.instanceCount,it);lt.renderInstances(Pe,Ct,ye)}else lt.render(Pe,Ct)};function Di(S,D,G,z){O!==null&&S.isNodeMaterial&&O.setObject(z,S),Ve===!0&&Re.setState(S,G,!1),S.transparent===!0&&S.side===_i&&S.forceSinglePass===!1?(S.side=ti,S.needsUpdate=!0,ot(S,D,z),S.side=vr,S.needsUpdate=!0,ot(S,D,z),S.side=_i):ot(S,D,z)}this.compile=function(S,D,G=null){G===null&&(G=S),O!==null&&O.renderStart(S,D,G),T=ne.get(G),T.init(D),A.push(T),G.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==G&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),vt=this.localClippingEnabled,Ve=Re.init(this.clippingPlanes,vt),Ve===!0&&Re.setGlobalState(this.clippingPlanes,D),O!==null&&Ne.render(T.state.shadowsArray,G,D);let z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let le=H.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){let be=le[fe];Di(be,G,D,H),z.add(be)}else Di(le,G,D,H),z.add(le)}),T=A.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(S,D,G=null){let z=this.compile(S,D,G);return new Promise(H=>{function le(){if(z.forEach(function(fe){let be=N.get(fe).currentProgram;(be===void 0||be.isReady())&&z.delete(fe)}),z.size===0){H(S);return}setTimeout(le,10)}et.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Yi=null;function Ui(S){Yi&&Yi(S)}function j(){X.stop()}function w(){X.start()}let X=new Uc;X.setAnimationLoop(Ui),typeof self<"u"&&X.setContext(self),this.setAnimationLoop=function(S){Yi=S,Me.setAnimationLoop(S),S===null?X.stop():X.start()},Me.addEventListener("sessionstart",j),Me.addEventListener("sessionend",w),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;O!==null&&O.renderStart(S,D);let G=Me.enabled===!0&&Me.isPresenting===!0,z=v!==null&&(V===null||G)&&v.begin(b,V);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(D),D=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,D,V),T=ne.get(S,A.length),T.init(D),T.state.textureUnits=q.getTextureUnits(),A.push(T),Pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(Pt,Ai,D.reversedDepth),vt=this.localClippingEnabled,Ve=Re.init(this.clippingPlanes,vt),y=Ae.get(S,C.length),y.init(),C.push(y),Me.enabled===!0&&Me.isPresenting===!0){let le=b.xr.getDepthSensingMesh();le!==null&&Z(le,D,-1/0,b.sortObjects)}Z(S,D,0,b.sortObjects),y.finish(),O!==null&&O.updateLights(T.state.lightsArray),b.sortObjects===!0&&y.sort(ce,Ce),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&ke.addToRenderList(y,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Re.beginShadows();let H=T.state.shadowsArray;if(Ne.render(H,S,D),Ve===!0&&Re.endShadows(),(z&&v.hasRenderPass())===!1){let le=y.opaque,fe=y.transmissive;if(T.setupLights(),D.isArrayCamera){let be=D.cameras;if(fe.length>0)for(let Te=0,Fe=be.length;Te<Fe;Te++){let We=be[Te];_e(le,fe,S,We)}dt&&ke.render(S);for(let Te=0,Fe=be.length;Te<Fe;Te++){let We=be[Te];de(y,S,We,We.viewport)}}else fe.length>0&&_e(le,fe,S,D),dt&&ke.render(S),de(y,S,D)}V!==null&&Q===0&&(q.updateMultisampleRenderTarget(V),q.updateRenderTargetMipmap(V)),z&&v.end(b),S.isScene===!0&&S.onAfterRender(b,S,D),me.resetDefaultState(),ue=-1,$=null,A.pop(),A.length>0?(T=A[A.length-1],q.setTextureUnits(T.state.textureUnits),Ve===!0&&Re.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,O!==null&&O.renderEnd()};function Z(S,D,G,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Qe)){z&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);let le=B.update(S),fe=S.material;fe.visible&&y.push(S,le,fe,G,at.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Qe))){let le=B.update(S),fe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),at.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),at.copy(le.boundingSphere.center)),at.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(fe)){let be=le.groups;for(let Te=0,Fe=be.length;Te<Fe;Te++){let We=be[Te],$e=fe[We.materialIndex];$e&&$e.visible&&y.push(S,le,$e,G,at.z,We,D)}}else fe.visible&&y.push(S,le,fe,G,at.z,null,D)}}let H=S.children;for(let le=0,fe=H.length;le<fe;le++)Z(H[le],D,G,z)}function de(S,D,G,z){let{opaque:H,transmissive:le,transparent:fe}=S;T.setupLightsView(G),Ve===!0&&Re.setGlobalState(b.clippingPlanes,G),z&&E.viewport(J.copy(z)),H.length>0&&we(H,D,G),le.length>0&&we(le,D,G),fe.length>0&&we(fe,D,G),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function _e(S,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let $e=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Si(1,1,{generateMipmaps:!0,type:$e?Li:hi,minFilter:pr,samples:Math.max(4,gt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let H=T.state.transmissionRenderTarget[z.id],le=z.viewport||J;H.setSize(le.z*b.transmissionResolutionScale,le.w*b.transmissionResolutionScale);let fe=b.getRenderTarget(),be=b.getActiveCubeFace(),Te=b.getActiveMipmapLevel();b.setRenderTarget(H),b.getClearColor(te),ze=b.getClearAlpha(),ze<1&&b.setClearColor(16777215,.5),b.clear(),dt&&ke.render(G);let Fe=b.toneMapping;b.toneMapping=Ri;let We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ve===!0&&Re.setGlobalState(b.clippingPlanes,z),we(S,G,z),q.updateMultisampleRenderTarget(H),q.updateRenderTargetMipmap(H),et.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Pe=0,ht=D.length;Pe<ht;Pe++){let Ct=D[Pe],{object:ft,geometry:lt,material:it,group:ye}=Ct;if(it.side===_i&&ft.layers.test(z.layers)){let $t=it.side;it.side=ti,it.needsUpdate=!0,Ye(ft,G,z,lt,it,ye),it.side=$t,it.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(H),q.updateRenderTargetMipmap(H))}b.setRenderTarget(fe,be,Te),b.setClearColor(te,ze),We!==void 0&&(z.viewport=We),b.toneMapping=Fe}function we(S,D,G){let z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,le=S.length;H<le;H++){let fe=S[H],{object:be,geometry:Te,group:Fe}=fe,We=fe.material;We.allowOverride===!0&&z!==null&&(We=z),be.layers.test(G.layers)&&Ye(be,D,G,Te,We,Fe)}}function Ye(S,D,G,z,H,le){O!==null&&H.isNodeMaterial&&O.setObject(S,H),S.onBeforeRender(b,D,G,z,H,le),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(b,D,G,z,S,le),H.transparent===!0&&H.side===_i&&H.forceSinglePass===!1?(H.side=ti,H.needsUpdate=!0,b.renderBufferDirect(G,D,z,H,S,le),H.side=vr,H.needsUpdate=!0,b.renderBufferDirect(G,D,z,H,S,le),H.side=_i):b.renderBufferDirect(G,D,z,H,S,le),S.onAfterRender(b,D,G,z,H,le)}function ot(S,D,G){D.isScene!==!0&&(D=It);let z=N.get(S),H=T.state.lights,le=T.state.shadowsArray,fe=H.state.version,be=he.getParameters(S,H.state,le,D,G,T.state.lightProbeGridArray),Te=he.getProgramCacheKey(be),Fe=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let We=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=ie.get(S.envMap||z.environment,We),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Kt),Fe=new Map,z.programs=Fe);let $e=Fe.get(Te);if($e!==void 0){if(z.currentProgram===$e&&z.lightsStateVersion===fe)return pt(S,be),$e}else be.uniforms=he.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,G,be),S.onBeforeCompile(be,b),$e=he.acquireProgram(be,Te),Fe.set(Te,$e),z.uniforms=be.uniforms;let Pe=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Re.uniform),pt(S,be),z.needsLights=nt(S),z.lightsStateVersion=fe,z.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.sunLights.value=H.state.sun,Pe.sunLightShadows.value=H.state.sunShadow,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.sunShadowMatrix.value=H.state.sunShadowMatrix,Pe.sunShadowCascade.value=H.state.sunShadowCascade,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=$e,z.uniformsList=null,$e}function qe(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=mn.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function pt(S,D){let G=N.get(S);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function ct(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;P.setFromMatrixPosition(D.matrixWorld);for(let G=0,z=S.length;G<z;G++){let H=S[G];if(H.texture!==null&&H.boundingBox.containsPoint(P))return H}return null}function xt(S,D,G,z,H){D.isScene!==!0&&(D=It),q.resetTextureUnits();let le=D.fog,fe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,be=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:st.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Fe=ie.get(z.envMap||fe,Te),We=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$e=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!G.morphAttributes.position,ht=!!G.morphAttributes.normal,Ct=!!G.morphAttributes.color,ft=Ri;z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ft=b.toneMapping);let lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=lt!==void 0?lt.length:0,ye=N.get(z),$t=T.state.lights;if(Ve===!0&&(vt===!0||S!==$)){let bt=S===$&&z.id===ue;Re.setState(z,S,bt)}let nr=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==$t.state.version||ye.outputColorSpace!==be||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Fe||z.fog===!0&&ye.fog!==le||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Re.numPlanes||ye.numIntersection!==Re.numIntersection)||ye.vertexAlphas!==We||ye.vertexTangents!==$e||ye.morphTargets!==Pe||ye.morphNormals!==ht||ye.morphColors!==Ct||ye.toneMapping!==ft||ye.morphTargetsCount!==it||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(nr=!0):(nr=!0,ye.__version=z.version);let ni=ye.currentProgram;nr===!0&&(ni=ot(z,D,H),O&&z.isNodeMaterial&&O.onUpdateProgram(z,ni,ye));let yi=!1,qi=!1,Sr=!1,yt=ni.getUniforms(),Dt=ye.uniforms;if(E.useProgram(ni.program)&&(yi=!0,qi=!0,Sr=!0),z.id!==ue&&(ue=z.id,qi=!0),ye.needsLights){let bt=ct(T.state.lightProbeGridArray,H);ye.lightProbeGrid!==bt&&(ye.lightProbeGrid=bt,qi=!0)}if(yi||$!==S){E.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),yt.setValue(I,"projectionMatrix",S.projectionMatrix),yt.setValue(I,"viewMatrix",S.matrixWorldInverse);let bt=yt.map.cameraPosition;bt!==void 0&&bt.setValue(I,Ut.setFromMatrixPosition(S.matrixWorld)),gt.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,qi=!0,Sr=!0)}if(ye.needsLights&&($t.state.sunShadowMap.length>0&&yt.setValue(I,"sunShadowMap",$t.state.sunShadowMap,q),$t.state.directionalShadowMap.length>0&&yt.setValue(I,"directionalShadowMap",$t.state.directionalShadowMap,q),$t.state.spotShadowMap.length>0&&yt.setValue(I,"spotShadowMap",$t.state.spotShadowMap,q),$t.state.pointShadowMap.length>0&&yt.setValue(I,"pointShadowMap",$t.state.pointShadowMap,q)),H.isSkinnedMesh){yt.setOptional(I,H,"bindMatrix"),yt.setOptional(I,H,"bindMatrixInverse");let bt=H.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),yt.setValue(I,"boneTexture",bt.boneTexture,q))}H.isBatchedMesh&&(yt.setOptional(I,H,"batchingTexture"),yt.setValue(I,"batchingTexture",H._matricesTexture,q),yt.setOptional(I,H,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",H._indirectTexture,q),yt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",H._colorsTexture,q));let Ki=G.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&je.update(H,G,ni),(qi||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,yt.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Dt.envMapIntensity.value=D.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Wg()),qi){if(yt.setValue(I,"toneMappingExposure",b.toneMappingExposure),ye.needsLights&&At(Dt,Sr),le&&z.fog===!0&&ge.refreshFogUniforms(Dt,le),ge.refreshMaterialUniforms(Dt,z,oe,K,T.state.transmissionRenderTarget[S.id]),ye.needsLights&&ye.lightProbeGrid){let bt=ye.lightProbeGrid;Dt.probesSH.value=bt.texture,Dt.probesMin.value.copy(bt.boundingBox.min),Dt.probesMax.value.copy(bt.boundingBox.max),Dt.probesResolution.value.copy(bt.resolution)}mn.upload(I,qe(ye),Dt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mn.upload(I,qe(ye),Dt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(I,"center",H.center),yt.setValue(I,"modelViewMatrix",H.modelViewMatrix),yt.setValue(I,"normalMatrix",H.normalMatrix),yt.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let bt=z.uniformsGroups;for(let ta=0,xr=bt.length;ta<xr;ta++){let xo=bt[ta];xe.update(xo,ni),xe.bind(xo,ni)}}return ni}function At(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function nt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(S,D,G){let z=N.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),N.get(S.texture).__webglTexture=D,N.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let G=N.get(S);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,G=0){V=S,k=D,Q=G;let z=null,H=!1,le=!1;if(S){let fe=N.get(S);if(fe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),J.copy(S.viewport),re.copy(S.scissor),Ue=S.scissorTest,E.viewport(J),E.scissor(re),E.setScissorTest(Ue),ue=-1;return}else if(fe.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(fe.__hasExternalTextures)q.rebindTextures(S,N.get(S.texture).__webglTexture,N.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Fe=S.depthTexture;if(fe.__boundDepthTexture!==Fe){if(Fe!==null&&N.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}let be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);let Te=N.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?z=Te[D][G]:z=Te[D],H=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?z=N.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[G]:z=Te,J.copy(S.viewport),re.copy(S.scissor),Ue=S.scissorTest}else J.copy(Oe).multiplyScalar(oe).floor(),re.copy(ve).multiplyScalar(oe).floor(),Ue=Ze;if(G!==0&&(z=L),E.bindFramebuffer(I.FRAMEBUFFER,z)&&E.drawBuffers(S,z),E.viewport(J),E.scissor(re),E.setScissorTest(Ue),H){let fe=N.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,G)}else if(le){let fe=D;for(let be=0;be<S.textures.length;be++){let Te=N.get(S.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,Te.__webglTexture,G,fe)}}else if(S!==null&&G!==0){let fe=N.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,G)}ue=-1};function Et(S){let D=N.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=gt.textureFormatReadable(S.format),D.__typeReadable=gt.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,G,z,H,le,fe,be=0){if(!(S&&S.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=N.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Te=Te[fe]),Te){E.bindFramebuffer(I.FRAMEBUFFER,Te);try{let Fe=S.textures[be],We=Fe.format,$e=Fe.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be);let Pe=Et(Fe);if(Pe.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&G>=0&&G<=S.height-H&&I.readPixels(D,G,z,H,se.convert(We),se.convert($e),le)}finally{let Fe=V!==null?N.get(V).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,D,G,z,H,le,fe,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=N.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Te=Te[fe]),Te)if(D>=0&&D<=S.width-z&&G>=0&&G<=S.height-H){E.bindFramebuffer(I.FRAMEBUFFER,Te);let Fe=S.textures[be],We=Fe.format,$e=Fe.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be);let Pe=Et(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(D,G,z,H,se.convert(We),se.convert($e),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ct=V!==null?N.get(V).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,Ct);let ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await zh(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ht),I.deleteSync(ft),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,G=0){let z=Math.pow(2,-G),H=Math.floor(S.image.width*z),le=Math.floor(S.image.height*z),fe=D!==null?D.x:0,be=D!==null?D.y:0;q.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,fe,be,H,le),E.unbindTexture()},this.copyTextureToTexture=function(S,D,G=null,z=null,H=0,le=0){let fe,be,Te,Fe,We,$e,Pe,ht,Ct,ft=S.isCompressedTexture?S.mipmaps[le]:S.image;if(G!==null)fe=G.max.x-G.min.x,be=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Fe=G.min.x,We=G.min.y,$e=G.isBox3?G.min.z:0;else{let Dt=Math.pow(2,-H);fe=Math.floor(ft.width*Dt),be=Math.floor(ft.height*Dt),S.isDataArrayTexture?Te=ft.depth:S.isData3DTexture?Te=Math.floor(ft.depth*Dt):Te=1,Fe=0,We=0,$e=0}z!==null?(Pe=z.x,ht=z.y,Ct=z.z):(Pe=0,ht=0,Ct=0);let lt=se.convert(D.format),it=se.convert(D.type),ye;D.isData3DTexture?(q.setTexture3D(D,0),ye=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),ye=I.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),ye=I.TEXTURE_2D),E.activeTexture(I.TEXTURE0),E.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let $t=E.getParameter(I.UNPACK_ROW_LENGTH),nr=E.getParameter(I.UNPACK_IMAGE_HEIGHT),ni=E.getParameter(I.UNPACK_SKIP_PIXELS),yi=E.getParameter(I.UNPACK_SKIP_ROWS),qi=E.getParameter(I.UNPACK_SKIP_IMAGES);E.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),E.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),E.pixelStorei(I.UNPACK_SKIP_ROWS,We),E.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);let Sr=S.isDataArrayTexture||S.isData3DTexture,yt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Dt=N.get(S),Ki=N.get(D),bt=N.get(Dt.__renderTarget),ta=N.get(Ki.__renderTarget);E.bindFramebuffer(I.READ_FRAMEBUFFER,bt.__webglFramebuffer),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let xr=0;xr<Te;xr++)Sr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,N.get(S).__webglTexture,H,$e+xr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,N.get(D).__webglTexture,le,Ct+xr)),I.blitFramebuffer(Fe,We,fe,be,Pe,ht,fe,be,I.DEPTH_BUFFER_BIT,I.NEAREST);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||N.has(S)){let Dt=N.get(S),Ki=N.get(D);E.bindFramebuffer(I.READ_FRAMEBUFFER,W),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let bt=0;bt<Te;bt++)Sr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,H,$e+bt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,H),yt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ki.__webglTexture,le,Ct+bt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ki.__webglTexture,le),H!==0?I.blitFramebuffer(Fe,We,fe,be,Pe,ht,fe,be,I.COLOR_BUFFER_BIT,I.NEAREST):yt?I.copyTexSubImage3D(ye,le,Pe,ht,Ct+bt,Fe,We,fe,be):I.copyTexSubImage2D(ye,le,Pe,ht,Fe,We,fe,be);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(ye,le,Pe,ht,Ct,fe,be,Te,lt,it,ft.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,le,Pe,ht,Ct,fe,be,Te,lt,ft.data):I.texSubImage3D(ye,le,Pe,ht,Ct,fe,be,Te,lt,it,ft):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,Pe,ht,fe,be,lt,it,ft.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,Pe,ht,ft.width,ft.height,lt,ft.data):I.texSubImage2D(I.TEXTURE_2D,le,Pe,ht,fe,be,lt,it,ft);E.pixelStorei(I.UNPACK_ROW_LENGTH,$t),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nr),E.pixelStorei(I.UNPACK_SKIP_PIXELS,ni),E.pixelStorei(I.UNPACK_SKIP_ROWS,yi),E.pixelStorei(I.UNPACK_SKIP_IMAGES,qi),le===0&&D.generateMipmaps&&I.generateMipmap(ye),E.unbindTexture()},this.initRenderTarget=function(S){N.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){k=0,Q=0,V=null,E.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}},Il={type:"change"},So={type:"start"},Hc={type:"end"},nn=new Aa,Nl=new ki,jg=Math.cos(70*Gh.DEG2RAD),Ft=new x,ei=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fs=1e-6,Yg=class extends ju{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new rr,this._lastTargetPosition=new x,this._quat=new rr().setFromUnitVectors(e.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cl,this._sphericalDelta=new cl,this._scale=1,this._panOffset=new x,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new x,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kg.bind(this),this._onPointerDown=qg.bind(this),this._onPointerUp=Zg.bind(this),this._onContextMenu=rv.bind(this),this._onMouseWheel=Qg.bind(this),this._onKeyDown=ev.bind(this),this._onTouchStart=tv.bind(this),this._onTouchMove=iv.bind(this),this._onMouseDown=$g.bind(this),this._onMouseMove=Jg.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=nv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Il),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ei:i>Math.PI&&(i-=ei),r<-Math.PI?r+=ei:r>Math.PI&&(r-=ei),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=Ft.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new x(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new x(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(s),this.object.updateMatrixWorld(),n=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(nn.origin.copy(this.object.position),nn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nn.direction))<jg?this.object.lookAt(this.target):(Nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),nn.intersectPlane(Nl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>fs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fs||this._lastTargetPosition.distanceToSquared(this.target)>fs?(this.dispatchEvent(Il),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ft.copy(r).sub(this.target);let a=Ft.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function qg(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Kg(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Zg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hc),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $g(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Mt.DOLLY;break;case Gr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Mt.ROTATE}break;case Gr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(So)}function Jg(e){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Qg(e){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(e.preventDefault(),this.dispatchEvent(So),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Hc))}function ev(e){this.enabled!==!1&&this._handleKeyDown(e)}function tv(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Mt.TOUCH_ROTATE;break;case kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Mt.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(So)}function iv(e){switch(this._trackPointer(e),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Mt.NONE}}function rv(e){this.enabled!==!1&&e.preventDefault()}function av(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nv(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ol(){let e=document.getElementById("sky-3d-hero-container");if(!e)return;for(;e.firstChild;)e.removeChild(e.firstChild);function t(){let w=document.createElement("canvas");w.width=64,w.height=64;let X=w.getContext("2d"),Z=X.createRadialGradient(32,32,0,32,32,32);Z.addColorStop(0,"rgba(255, 255, 255, 1)"),Z.addColorStop(.18,"rgba(0, 240, 255, 0.95)"),Z.addColorStop(.45,"rgba(9, 189, 227, 0.5)"),Z.addColorStop(.75,"rgba(2, 132, 199, 0.16)"),Z.addColorStop(1,"rgba(0, 0, 0, 0)"),X.fillStyle=Z,X.fillRect(0,0,64,64);let de=new fu(w);return de.generateMipmaps=!1,de.minFilter=Xt,de}let i=t(),r=new ru;r.fog=new iu(133139,.012);let a=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight,s=new ci(40,a/n,.1,1e3);s.position.set(34,22,36);let o=new Xg({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(a,n),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=so,o.toneMappingExposure=1.38,e.appendChild(o.domElement);let l=new Yg(s,o.domElement);l.enableDamping=!0,l.dampingFactor=.045,l.maxPolarAngle=Math.PI/2-.02,l.minDistance=8,l.maxDistance=85,l.target.set(1,5.5,0),l.autoRotate=!0,l.autoRotateSpeed=.35;let c=null,u=()=>{l.autoRotate=!1,clearTimeout(c),c=setTimeout(()=>{tt!=="hotspot"&&(l.autoRotate=!0)},8e3)};o.domElement.addEventListener("pointerdown",u),o.domElement.addEventListener("wheel",u,{passive:!0}),o.domElement.addEventListener("touchstart",u,{passive:!0});let f=new Rt;f.position.set(2,0,0),r.add(f);let h=new Rt,m=new Rt,M=new Rt,g=new Rt,p=new Rt,d=new Rt,R=new Rt;f.add(h),f.add(m),f.add(M),f.add(g),f.add(p),f.add(d),f.add(R);let P=[],y={pos:[],col:[]},T={pos:[],col:[]},C={pos:[],col:[]},A={pos:[],col:[]},v={pos:[],col:[]};function b(w,X,Z,de,_e,we,Ye,ot,qe,pt,ct){let xt=_e/2,At=we/2,nt=Ye/2,Et=Math.floor(ot*(_e*we+_e*Ye+we*Ye));for(let S=0;S<Et;S++){let D=Math.floor(Math.random()*6),G=0,z=0,H=0;switch(D){case 0:G=xt,z=(Math.random()-.5)*we,H=(Math.random()-.5)*Ye;break;case 1:G=-xt,z=(Math.random()-.5)*we,H=(Math.random()-.5)*Ye;break;case 2:z=At,G=(Math.random()-.5)*_e,H=(Math.random()-.5)*Ye;break;case 3:z=-At,G=(Math.random()-.5)*_e,H=(Math.random()-.5)*Ye;break;case 4:H=nt,G=(Math.random()-.5)*_e,z=(Math.random()-.5)*we;break;case 5:H=-nt,G=(Math.random()-.5)*_e,z=(Math.random()-.5)*we;break}w.pos.push(X+G,Z+z,de+H);let le=.82+Math.random()*.35;w.col.push(Math.min(1,qe*le),Math.min(1,pt*le),Math.min(1,ct*le))}}function Y(w,X,Z,de,_e,we,Ye,ot,qe,pt,ct){let xt=Math.floor(ot*_e*we*Math.PI*2);for(let At=0;At<xt;At++){let nt=Math.random()*Math.PI*2,Et=(Math.random()-.5)*we,S=0,D=0,G=0;Ye==="x"?(S=Et,D=Math.cos(nt)*_e,G=Math.sin(nt)*_e):Ye==="y"?(D=Et,S=Math.cos(nt)*_e,G=Math.sin(nt)*_e):(G=Et,S=Math.cos(nt)*_e,D=Math.sin(nt)*_e),w.pos.push(X+S,Z+D,de+G);let z=.85+Math.random()*.3;w.col.push(Math.min(1,qe*z),Math.min(1,pt*z),Math.min(1,ct*z))}}function O(w,X,Z,de,_e,we,Ye,ot=80,qe=8){let pt=Math.max(3,Math.floor(qe*de));for(let ct=0;ct<=ot;ct++){let xt=ct/ot,At=X.getPointAt(xt),nt=X.getTangentAt(xt).normalize(),Et=Math.abs(nt.y)<.95?new x(0,1,0):new x(1,0,0),S=new x().crossVectors(nt,Et).normalize(),D=new x().crossVectors(nt,S).normalize();for(let G=0;G<pt;G++){let z=G/pt*Math.PI*2+(Math.random()-.5)*.25,H=Math.cos(z),le=Math.sin(z),fe=At.x+(S.x*H+D.x*le)*Z,be=At.y+(S.y*H+D.y*le)*Z,Te=At.z+(S.z*H+D.z*le)*Z;w.pos.push(fe,be,Te);let Fe=.85+Math.random()*.35;w.col.push(Math.min(1,_e*Fe),Math.min(1,we*Fe),Math.min(1,Ye*Fe))}}}function L(w,X,Z,de,_e,we,Ye,ot=638435,qe=.6){let pt=new Hi(_e,we,Ye),ct=new as(pt),xt=new pn(ct,new ma({color:ot,transparent:!0,opacity:qe}));return xt.position.set(X,Z,de),w.add(xt),xt}function W(w,X,Z,de,_e,we,Ye,ot,qe=638435,pt=.5,ct=0,xt=0){let At=new Qo(_e,we,Ye,ot,1,!0),nt=new as(At),Et=new pn(nt,new ma({color:qe,transparent:!0,opacity:pt}));return Et.position.set(X,Z,de),ct&&(Et.rotation.x=ct),xt&&(Et.rotation.z=xt),w.add(Et),Et}function U(w,X,Z,de,_e,we,Ye,ot,qe=1,pt=8){let ct=new tr(Z),xt=ct.getLength(),At=Math.max(20,Math.floor(xt*8)),nt=new Uu(ct,At,de,pt,!1),Et=new as(nt),S=new pn(Et,new ma({color:_e,transparent:!0,opacity:.65}));w.add(S);let D=Math.max(25,Math.floor(xt*14));return O(X,ct,de,qe,we,Ye,ot,D,pt),{curve:ct,tubeLine:S}}function k(w,X,Z,de,_e,we,Ye,ot,qe,pt=1,ct=.2,xt=.15){let At=we==="z"?Math.PI/2:0,nt=we==="x"?Math.PI/2:0;W(w,Z,de,_e,ot,ot,qe,14,15680580,.8,At,nt),W(w,Z,de,_e,ot*1.35,ot*1.35,qe*.35,14,16347926,.9,At,nt),Y(X,Z,de,_e,ot,qe,we,22,pt,ct,xt),Y(X,Z,de,_e,ot*1.35,qe*.35,we,26,1,.55,.1)}function Q(w,X,Z,de,_e,we,Ye,ot,qe,pt,ct,xt,At,nt,Et){let S=_e-Z,D=we-de,G=Math.hypot(S,D),z=Math.atan2(D,S),H=(Z+_e)/2,le=(de+we)/2,fe=ot-Ye,be=Ye+fe/2,Te=Math.min(ct,G*.45),Fe=Math.min(xt,fe*.88),We=(pt-.5)*G,$e=G/2+We-Te/2;if($e>.25){let lt=-G/2+$e/2,it=new x(lt,0,0).applyAxisAngle(new x(0,1,0),-z),ye=new Rt;ye.position.set(H+it.x,be,le+it.z),ye.rotation.y=-z,L(ye,0,0,0,$e,fe,qe,638435,.35),b(X,H+it.x,be,le+it.z,$e,fe,qe,9,At,nt,Et),w.add(ye)}let Pe=G/2-We-Te/2;if(Pe>.25){let lt=G/2-Pe/2,it=new x(lt,0,0).applyAxisAngle(new x(0,1,0),-z),ye=new Rt;ye.position.set(H+it.x,be,le+it.z),ye.rotation.y=-z,L(ye,0,0,0,Pe,fe,qe,638435,.35),b(X,H+it.x,be,le+it.z,Pe,fe,qe,9,At,nt,Et),w.add(ye)}let ht=fe-Fe;if(ht>.1){let lt=fe/2-ht/2,it=new x(We,lt,0).applyAxisAngle(new x(0,1,0),-z),ye=new Rt;ye.position.set(H+it.x,be+lt,le+it.z),ye.rotation.y=-z,L(ye,0,0,0,Te,ht,qe,638435,.45),b(X,H+it.x,be+lt,le+it.z,Te,ht,qe,9,At,nt,Et),w.add(ye)}let Ct=new x(We,-fe/2+Fe/2,0).applyAxisAngle(new x(0,1,0),-z),ft=new Rt;ft.position.set(H+Ct.x,Ye+Fe/2,le+Ct.z),ft.rotation.y=-z,L(ft,0,0,0,Te,Fe,qe*1.25,61695,.85),w.add(ft)}function V(w,X,Z,de,_e,we,Ye,ot,qe){let pt=new x().subVectors(de,Z),ct=pt.length(),xt=new x().addVectors(Z,de).multiplyScalar(.5),At=Math.atan2(pt.z,pt.x),nt=new Rt;nt.position.copy(xt),nt.rotation.y=-At;let Et=_e/2;[-Et,Et].forEach(G=>{L(nt,0,0,G,ct,we,.04,61695,.7),b(X,xt.x,xt.y,xt.z+G,ct,we,.04,14,Ye,ot,qe)});let S=Math.floor(ct/.7);for(let G=0;G<=S;G++){let z=-ct/2+G/Math.max(1,S)*ct;L(nt,z,-we/2,0,.04,.02,_e,638435,.6)}let D=Math.floor(ct/2.4);for(let G=0;G<=D;G++){let z=-ct/2+G/Math.max(1,D)*ct;W(nt,z,we/2+.45,-Et,.015,.015,.9,6,638435,.5),W(nt,z,we/2+.45,Et,.015,.015,.9,6,638435,.5)}[-.1,0,.1].forEach((G,z)=>{let H=z===0?16096779:z===1?61695:1096065;W(nt,0,-we/2+.03,G,.025,.025,ct,8,H,.8,0,Math.PI/2)}),w.add(nt)}let ue=new hl(80,80,61695,468800);ue.position.y=-3.5,ue.material.opacity=.35,ue.material.transparent=!0,h.add(ue);let $=3e3,J=new Float32Array($*3),re=new Float32Array($*3);for(let w=0;w<$;w++){let X=(Math.random()-.5)*76,Z=(Math.random()-.5)*76,de=-3.52+Math.random()*.04;J[w*3]=X,J[w*3+1]=de,J[w*3+2]=Z;let _e=Math.sqrt(X*X+Z*Z),we=_e<18?new He(61695):_e<35?new He(638435):new He(140605);re[w*3]=we.r,re[w*3+1]=we.g,re[w*3+2]=we.b}let Ue=new zt;Ue.setAttribute("position",new ai(J,3)),Ue.setAttribute("color",new ai(re,3)),h.add(new is(Ue,new fn({size:.22,map:i,vertexColors:!0,transparent:!0,opacity:.65,blending:pa,depthWrite:!1})));let te=26,ze=17,Ie=[{id:"b1",name:"B1: OTOPARK & POMPA DAİRESİ",y:-3,slabH:.35},{id:"1f",name:"1F: GİRİŞ LOBİ & ATRİYUM",y:0,slabH:.35},{id:"2f",name:"2F: TEMİZ ODA & AR-GE",y:3.8,slabH:.35},{id:"3f",name:"3F: PLAZA OFİS KAT",y:7.6,slabH:.35},{id:"roof",name:"ROOF: ÇATI MEKANİK TERASI",y:11.4,slabH:.45}];Ie.forEach((w,X)=>{b(y,0,w.y,0,te,w.slabH,ze,10,.04,.3,.55),L(h,0,w.y,0,te,w.slabH,ze,638435,.45);let Z=new hl(te,12,638435,206912);Z.position.set(0,w.y+w.slabH/2+.01,0),Z.material.opacity=.25,Z.material.transparent=!0,h.add(Z)}),[[-12.5,-8],[-4.2,-8],[4.2,-8],[12.5,-8],[-12.5,0],[12.5,0],[-12.5,8],[-4.2,8],[4.2,8],[12.5,8]].forEach(([w,X])=>{b(y,w,4.5,X,.5,15,.5,12,.04,.45,.7),L(h,w,4.5,X,.5,15,.5,165063,.4),L(h,w,-3,X,.9,.2,.9,61695,.7)});for(let w=0;w<4;w++){let X=Ie[w].y+.35,Z=Ie[w+1].y-X,de=X+Z/2;[-8,8].forEach(_e=>{L(h,0,de,_e,te,Z,.05,599616,.25);for(let we=-10;we<=10;we+=4)L(h,we,de,_e,.12,Z,.15,165063,.35)})}Q(h,y,-11.5,1.8,-4.5,1.8,7.6,10.4,.16,.5,1.2,2.3,.04,.42,.65),Q(h,y,-4.5,1.8,2.5,1.8,7.6,10.4,.16,.5,1.2,2.3,.04,.42,.65),Q(h,y,-4.5,1.8,-4.5,7.8,7.6,10.4,.16,.45,1.1,2.3,.04,.42,.65),L(h,2.4,9,0,.14,2.8,3.6,165063,.4),b(y,2.4,9,0,.14,2.8,3.6,10,.04,.45,.7),Q(h,y,-2,-6.5,-2,6.5,3.8,6.8,.14,.5,2,2.4,.05,.6,.85),Q(h,y,-11.5,1.8,-2,1.8,3.8,6.8,.14,.4,1.2,2.3,.05,.6,.85),L(h,-3.75,1.4,-2.8,5.5,2.8,.22,61695,.55),b(y,-3.75,1.4,-2.8,5.5,2.8,.22,14,0,.75,.95),L(h,6,1.4,-3.2,3.8,2.8,.25,165063,.4),b(y,6,1.4,-3.2,3.8,2.8,.25,12,.04,.45,.7),L(h,7.9,1.4,0,.25,2.8,6.4,165063,.4),b(y,7.9,1.4,0,.25,2.8,6.4,12,.04,.45,.7),[-1.5,1.5].forEach(w=>{L(h,4.1,1.2,w,.08,2.4,1.4,61695,.8)}),Q(h,y,-12,-2,2,-2,-3,0,.25,.75,1.4,2.4,.03,.35,.6);let K=4.5,oe=0,ce=16.5,Ce=5.25;L(h,K,Ce,oe,4.2,ce,3.6,61695,.4);let Oe=1.8,ve=1.6;b(C,K-.8,Ce,oe,Oe,ce,ve,16,0,.8,1),L(M,K-.8,Ce,oe,Oe,ce,ve,61695,.75),b(C,K+1.1,Ce,oe,1.4,ce,ve,14,.9,.6,.1),L(M,K+1.1,Ce,oe,1.4,ce,ve,16096779,.6),[-.6,.6].forEach(w=>{W(M,K+.1,Ce,oe+w,.15,.15,ce,12,3718648,.85)}),[0,3.8,7.6,11.4].forEach(w=>{L(M,K-.8,w+.2,oe,2.1,.4,1.9,15680580,.9),L(M,K-.8+1.15,w+.2,oe+.7,.3,.3,.3,16347926,.95)}),b(T,-4,11.6,0,14.5,.5,7.5,16,.08,.5,.85),L(m,-4,11.6,0,14.5,.5,7.5,638435,.6);let Ze=12;[{id:"intake",name:"Taze Hava Emiş & Damper",x:-8.8,w:2.4,h:3.4,d:3.2,color:61695},{id:"filter",name:"G4 + F7 + H14 HEPA Filtre",x:-6.5,w:2,h:3.4,d:3.2,color:638435},{id:"rotor",name:"Döner Isı Geri Kazanım",x:-4.2,w:2.4,h:3.4,d:3.2,color:3718648},{id:"coil",name:"Isıtma/Soğutma Serpantin",x:-1.9,w:2,h:3.4,d:3.2,color:165063},{id:"fan",name:"EC Plug Fan & VFD Motor",x:.6,w:2.8,h:3.4,d:3.2,color:61695}].forEach(w=>{let X=Ze+w.h/2,Z=new He(w.color);b(T,w.x,X,0,w.w,w.h,w.d,22,Z.r,Z.g,Z.b),L(m,w.x,X,0,w.w,w.h,w.d,638435,.75),L(m,w.x,X,0,w.w*.95,w.h*.95,w.d*.95,165063,.4),L(m,w.x,X,w.d/2+.02,w.w*.75,w.h*.8,.04,3718648,.6);let de=new Bt(new rl(.24,.32,18),new oi({color:61695,side:_i,transparent:!0,opacity:.85}));de.position.set(w.x,X+.4,w.d/2+.04),m.add(de)});let Qe=new Rt;Qe.position.set(-4.2,Ze+1.7,0),m.add(Qe);let Ve=new Bt(new Qo(1.4,1.4,.6,28,2,!0),new oi({color:638435,wireframe:!0,transparent:!0,opacity:.45}));Ve.rotation.z=Math.PI/2,Qe.add(Ve);for(let w=0;w<10;w++){let X=w/10*Math.PI*2,Z=new Bt(new Hi(.58,.04,2.7),new oi({color:61695,wireframe:!0,transparent:!0,opacity:.65}));Z.rotation.x=X,Qe.add(Z)}P.push({obj:Qe,axis:"x",speed:.007});let vt=new Rt;vt.position.set(.6,Ze+1.7,0),m.add(vt);let Pt=new Bt(new Du(1.3,.25,14,28),new oi({color:165063,wireframe:!0,transparent:!0,opacity:.45}));Pt.rotation.y=Math.PI/2,vt.add(Pt);let Ut=new Rt;vt.add(Ut);for(let w=0;w<14;w++){let X=w/14*Math.PI*2,Z=new Bt(new Hi(.1,.9,.4),new oi({color:61695,wireframe:!0,transparent:!0,opacity:.85}));Z.position.set(0,Math.cos(X)*.85,Math.sin(X)*.85),Z.rotation.x=X+.38,Ut.add(Z)}P.push({obj:Ut,axis:"x",speed:.08}),L(m,2.5,Ze+1.7,0,1.8,1.6,1.6,61695,.8),[-6.5,-3.5].forEach(w=>{b(T,w,13,5.2,2.2,2.6,2,20,0,.75,1),L(m,w,13,5.2,2.2,2.6,2,61695,.8),W(m,w,14.4,5.2,.8,.8,.3,16,638435,.85);let X=new Rt;X.position.set(w,14.4,5.2),m.add(X);for(let Z=0;Z<3;Z++){let de=Z/3*Math.PI*2,_e=new Bt(new Hi(.65,.03,.18),new oi({color:61695,wireframe:!0,transparent:!0,opacity:.9}));_e.position.set(Math.cos(de)*.35,0,Math.sin(de)*.35),_e.rotation.y=de,X.add(_e)}P.push({obj:X,axis:"y",speed:.12})}),b(T,-5,12.8,-5.2,4.2,2.4,2.4,18,.02,.6,.9),L(m,-5,12.8,-5.2,4.2,2.4,2.4,165063,.75),[-6,-4].forEach(w=>{W(m,w,14.1,-5.2,.7,.7,.25,14,61695,.8);let X=new Rt;X.position.set(w,14.1,-5.2),m.add(X);for(let Z=0;Z<3;Z++){let de=Z/3*Math.PI*2,_e=new Bt(new Hi(.55,.03,.15),new oi({color:61695,wireframe:!0,transparent:!0,opacity:.85}));_e.position.set(Math.cos(de)*.3,0,Math.sin(de)*.3),_e.rotation.y=de,X.add(_e)}P.push({obj:X,axis:"y",speed:.09})});let at=10.4;b(C,-2.5,at,0,9.5,.9,1.2,16,.05,.8,1),L(M,-2.5,at,0,9.5,.9,1.2,638435,.75),[-4.5,4.5].forEach(w=>{L(M,-4,at,w/2,.8,.8,Math.abs(w),638435,.6),W(M,-4,at,w,.35,.35,8,14,61695,.7,0,Math.PI/2),[-7,-4,-1].forEach(X=>{W(M,X,at-.5,w,.15,.15,.7,10,638435,.5),L(M,X,at-.9,w,1,.1,1,61695,.9)})}),[-8,1].forEach(w=>{L(M,w,at-.2,0,1.6,.35,1.6,61695,.85)});let It=3.8,dt=6.6;b(C,-2.5,dt,0,9.5,.9,1.2,16,.05,.8,1),L(M,-2.5,dt,0,9.5,.9,1.2,638435,.75),L(M,-5,dt-.4,0,8,.15,10,61695,.5);for(let w=-8;w<=-2;w+=2)for(let X=-4;X<=4;X+=2.5)L(M,w,dt-.45,X,1.6,.1,2,3718648,.75);[-8.5,-1.5].forEach(w=>{L(M,w,It+.6,5,1.2,.8,.1,16096779,.8)});let Tt=2.9;W(M,-3.5,Tt,0,.45,.45,12,16,61695,.8,0,Math.PI/2),[-8,-5,-2,1].forEach(w=>{W(M,w,Tt-.4,0,.18,.18,.6,10,638435,.6),W(M,w,Tt-.75,0,.55,.55,.08,18,61695,.9)});let I=-3;[-8.5,-6.5].forEach(w=>{Y(v,w,I+.8,-4,.48,.5,"z",22,0,.85,1),W(p,w,I+.8,-4,.48,.48,.5,16,61695,.85,Math.PI/2),W(p,w,I+1.6,-4,.32,.32,.9,12,638435,.75),L(p,w,I+.8,-4.7,.35,.35,.15,61695,.9),L(p,w,I+.8,-3.3,.35,.35,.15,61695,.9)}),Y(v,-4.5,I+1.2,-4,.55,1.8,"y",20,0,.7,1),W(p,-4.5,I+1.2,-4,.55,.55,1.8,16,61695,.85),[-3,3].forEach(w=>{let X=I+2.3;Y(v,w,X,3.5,.42,2.6,"x",24,1,.3,.1),W(p,w,X,3.5,.42,.42,2.6,18,15680580,.85,0,Math.PI/2),W(p,w-1.3,X,3.5,.54,.42,.35,16,16347926,.9,0,Math.PI/2),W(p,w+1.3,X,3.5,.42,.54,.35,16,16347926,.9,0,Math.PI/2);let Z=new Rt;Z.position.set(w,X,3.5),p.add(Z);for(let de=0;de<8;de++){let _e=de/8*Math.PI*2,we=new Bt(new Hi(.04,.38,.15),new oi({color:15680580,wireframe:!0,transparent:!0,opacity:.85}));we.position.set(0,Math.cos(_e)*.2,Math.sin(_e)*.2),we.rotation.x=_e,Z.add(we)}P.push({obj:Z,axis:"x",speed:.14})});let Gt=[new x(-5,12.8,-5.2),new x(-2.8,12.2,-5.2),new x(-.5,12.2,-4),new x(2,12.2,-2.2),new x(3.6,12.2,-.6),new x(3.6,11.4,-.6),new x(3.6,7.6,-.6),new x(3.6,6.6,-.6),new x(2.4,6.6,-.6),new x(2.4,5.6,-.6),new x(3.6,5.6,-.6),new x(3.6,3.8,-.6),new x(3.6,0,-.6),new x(3.6,-1.2,-.6),new x(.5,-1.2,-2.2),new x(-3.5,-1.5,-3.8),new x(-7.5,-2.2,-3.8)];U(g,A,Gt,.16,61695,0,.95,1,1.2);let et=[new x(-5,12.8,-4.6),new x(-2.8,12.2,-4.6),new x(-.5,12.2,-3.5),new x(2,12.2,-1.8),new x(3.6,12.2,-.2),new x(3.6,11.4,-.2),new x(3.6,7.6,-.2),new x(3.6,6.5,-.2),new x(2.5,6.5,-.2),new x(2.5,5.7,-.2),new x(3.6,5.7,-.2),new x(3.6,3.8,-.2),new x(3.6,0,-.2),new x(3.6,-1.5,-.2),new x(.5,-1.5,-1.8),new x(-3.5,-1.8,-4.2),new x(-7.5,-2.2,-4.2)];U(g,A,et,.16,165063,.08,.52,.85,1.1);let gt=[new x(-5,13.5,5.2),new x(-1.5,12.2,5.4),new x(2,12.2,4.2),new x(3.8,11.4,.8),new x(3.8,10.5,.8),new x(.5,10.5,.8)];U(g,A,gt,.09,1096065,.1,.85,.5,1.2);let E=[new x(.5,10.5,.8),new x(1,10.5,.8),new x(1,10.2,0)];U(g,A,E,.06,3462041,.2,.9,.6,1);let _=[new x(.5,10.5,.8),new x(-3.8,10.5,.8)];U(g,A,_,.08,1096065,.1,.85,.5,1.1);let N=[new x(-3.8,10.5,.8),new x(-3.5,10.5,2.5),new x(-3.5,10.2,3.8)];U(g,A,N,.06,3462041,.2,.9,.6,1);let q=[new x(-3.8,10.5,.8),new x(-6.5,10.5,.8),new x(-8,10.5,0),new x(-8,10.2,0)];U(g,A,q,.06,3462041,.2,.9,.6,1);let ie=[new x(5.2,-2.5,-1),new x(5.2,0,-1),new x(5.2,3.8,-1),new x(5.2,7.6,-1),new x(5.2,10.8,-1),new x(5.2,11.4,-1)];U(g,A,ie,.14,15680580,1,.2,.2,1.3),L(g,5.2,-1.8,-1,.5,.7,.5,15680580,.9),W(g,5.2,-1.8,-.6,.25,.25,.12,12,16347926,.95);let pe=[new x(5.2,10.8,-1),new x(2.5,10.8,-1),new x(-3,10.8,-1),new x(-11,10.8,-1)];U(g,A,pe,.09,15680580,1,.2,.2,1.2),[-10,-6.5,-3,.5].forEach(w=>{let X=[new x(w,10.8,-5.5),new x(w,10.8,-1),new x(w,10.8,5.5)];U(g,A,X,.05,15680580,1,.2,.2,.8),[-4.5,-1.8,1.8,4.5].forEach(Z=>{W(g,w,10.6,Z,.02,.02,.35,6,15680580,.85),W(g,w,10.42,Z,.06,.06,.03,10,16096779,.95),Y(A,w,10.42,Z,.06,.03,"y",20,1,.7,.1)})});let Se=[new x(5.2,7,-1),new x(2,7,-1),new x(-9,7,-1)];U(g,A,Se,.08,15680580,1,.2,.2,1.1),V(g,A,new x(-11.5,10.5,2.2),new x(2.5,10.5,2.2),.5,.12,0,.9,1),V(g,A,new x(-9.5,3.1,-1.5),new x(3.2,3.1,-1.5),.45,.1,0,.8,1);let B=[new x(-1.9,12,1.5),new x(-1.9,11.7,1.5),new x(-1.9,11.45,1.6),new x(-1.9,11.58,1.75),new x(.5,11.52,1.75),new x(3.6,11.45,1.75),new x(3.6,0,1.75)];U(g,A,B,.06,3718648,.2,.75,1,1),k(g,A,3.6,11.4,-.6,"y",.16,.24,.55),k(g,A,3.6,11.4,-.2,"y",.16,.24,.55),k(g,A,3.8,11.4,.8,"y",.1,.18,.55),k(g,A,5.2,11.4,-1,"y",.14,.22,.55),k(g,A,3.6,7.6,-.6,"y",.16,.24,.5),k(g,A,3.6,7.6,-.2,"y",.16,.24,.5),k(g,A,5.2,7.6,-1,"y",.14,.22,.5),k(g,A,-4,10.4,1.8,"z",.35,.42,.3),k(g,A,2.5,10.8,1.8,"z",.09,.15,.25),k(g,A,.5,10.5,1.8,"z",.09,.15,.25),k(g,A,3.6,3.8,-.6,"y",.16,.24,.5),k(g,A,3.6,3.8,-.2,"y",.16,.24,.5),k(g,A,5.2,3.8,-1,"y",.14,.22,.5),k(g,A,-2,6.6,0,"x",.4,.48,.25),k(g,A,-2,7,-1,"x",.08,.14,.25),k(g,A,3.6,0,-.6,"y",.16,.24,.5),k(g,A,3.6,0,-.2,"y",.16,.24,.5),k(g,A,5.2,0,-1,"y",.14,.22,.5),k(g,A,-3.5,-1.5,-2,"z",.16,.26,.45),k(g,A,-3.5,-1.8,-2,"z",.16,.26,.45);function he(w,X,Z){let de=new zt;return de.setAttribute("position",new mt(w.pos,3)),de.setAttribute("color",new mt(w.col,3)),new is(de,new fn({size:X,map:i,vertexColors:!0,transparent:!0,opacity:Z,blending:pa,depthWrite:!1}))}h.add(he(y,.22,.65)),m.add(he(T,.2,.88)),M.add(he(C,.2,.88)),g.add(he(A,.19,.92)),p.add(he(v,.2,.88));let ge=[{curve:new tr([new x(-8.8,13.7,0),new x(-4.2,13.7,0),new x(.6,13.7,0),new x(3.7,13.7,0),new x(3.7,11.4,0),new x(3.7,7.6,0),new x(3.7,3.8,0),new x(3.7,0,0)]),colorStart:new He(61695),colorEnd:new He(3718648),particleCount:4200,speedBase:.0034},{curve:new tr([new x(3.7,10.4,0),new x(-2,10.4,0),new x(-4,10.4,4.5),new x(-7,9.5,4.5),new x(-7,8,4.5),new x(-9,7.7,5.5)]),colorStart:new He(61695),colorEnd:new He(3718648),particleCount:2600,speedBase:.0028},{curve:new tr([new x(3.7,6.6,0),new x(-2,6.6,0),new x(-5,6.2,0),new x(-5,4.8,0),new x(-5,3.9,0)]),colorStart:new He(638435),colorEnd:new He(61695),particleCount:2600,speedBase:.0026},{curve:new tr([new x(3.7,2.9,0),new x(-2,2.9,0),new x(-5,2.9,0),new x(-5,2.1,0),new x(-5,.8,0),new x(-7.5,.2,1.5)]),colorStart:new He(61695),colorEnd:new He(3718648),particleCount:2400,speedBase:.0024},{curve:new tr([new x(-8.5,4.4,5),new x(5.6,4.4,0),new x(5.6,8,0),new x(5.6,12,0),new x(-4.2,13.7,0)]),colorStart:new He(16096779),colorEnd:new He(16347926),particleCount:2200,speedBase:.0022},{curve:new tr([new x(-5,-.7,3.5),new x(-3,-.7,3.5),new x(3,-.7,3.5),new x(8,-.8,3.5),new x(12,-1,3.5)]),colorStart:new He(15680580),colorEnd:new He(16096779),particleCount:2e3,speedBase:.0068}],Ae=0;ge.forEach(w=>Ae+=w.particleCount);let ne=new Float32Array(Ae*3),Re=new Float32Array(Ae*3),Ne=[],ke=0;ge.forEach(w=>{for(let X=0;X<w.particleCount;X++){let Z=ke+X,de=Math.random(),_e=w.speedBase*(.8+Math.random()*.4),we=(Math.random()-.5)*.5,Ye=(Math.random()-.5)*.5,ot=(Math.random()-.5)*.5;Ne.push({spline:w.curve,progress:de,speed:_e,jx:we,jy:Ye,jz:ot});let qe=w.curve.getPointAt(de);ne[Z*3]=qe.x+we,ne[Z*3+1]=qe.y+Ye,ne[Z*3+2]=qe.z+ot;let pt=w.colorStart.clone().lerp(w.colorEnd,de);Re[Z*3]=pt.r,Re[Z*3+1]=pt.g,Re[Z*3+2]=pt.b}ke+=w.particleCount});let je=new zt;je.setAttribute("position",new ai(ne,3)),je.setAttribute("color",new ai(Re,3));let F=new is(je,new fn({size:.24,map:i,vertexColors:!0,transparent:!0,opacity:.95,blending:pa,depthWrite:!1}));d.add(F);let ee=[{id:"ahu_roof",name:"Rooftop Merkezi AHU & EC Plug Fan",level:"Çatı Katı (Roof)",target:new x(.6,13.7,0),camPos:new x(14,18,12),specs:[{label:"Toplam Debi",val:"148.500 m³/h • Çift Cidarlı Taşyünü"},{label:"Fan Verimi",val:"IE5 Sabit Mıknatıslı EC Plug Fan"},{label:"Isı Geri Kazanım",val:"%82 Termal Verimli Döner Rotor"},{label:"Standart",val:"TSE EN 1886 D1/L1 • Eurovent"}]},{id:"vrf_roof",name:"Modüler VRF / VRV Dış Ünite Grubu",level:"Çatı Katı (Roof)",target:new x(-5,13.5,5.2),camPos:new x(3,17.5,14.5),specs:[{label:"Kompresör",val:"DC Inverter Twin-Rotary & Scroll"},{label:"Soğutucu Akışkan",val:"R410A / R32 Çevre Dostu Gaz"},{label:"Sezonsal Verim",val:"SEER: 8.2 • SCOP: 4.88"},{label:"Boru Dağıtımı",val:"Refnet Y-Branşman Bakır Hatları"}]},{id:"riser_shaft",name:"Merkezi Dikey MEP Riser & Yangın Damperi",level:"Tüm Katlar (Şaft)",target:new x(3.7,7.6,0),camPos:new x(15,10.5,8),specs:[{label:"Hava Kanalı",val:"EN 1507 Class C Sıfır Kaçak Galvaniz"},{label:"Yangın Güvenliği",val:"Kat Geçişlerinde Belimo Yangın Damperleri"},{label:"Hidronik Hatlar",val:"Dikişsiz Çelik Boru + Taş Yünü İzolasyon"},{label:"Servis",val:"Her Katta Akustik Müdahale Kapağı"}]},{id:"floor3_office",name:"3F Ofis Dağıtımı & 4 Yönlü Anemostadlar",level:"3. Kat (Plaza Ofis)",target:new x(-4,9.8,4.5),camPos:new x(5,13,14),specs:[{label:"Dağıtım Tipi",val:"Spiromatic Dairesel Spiral & Prizmatik"},{label:"Difüzörler",val:"4 Yönlü Tavan Anemostadları + VAV Box"},{label:"İklimlendirme",val:"VRF 4 Yönlü Kaset Tipi İç Üniteler"},{label:"Konfor Standart",val:"ASHRAE 55 • ISO 7730 Termal Konfor"}]},{id:"floor2_cleanroom",name:"2F Temiz Oda & H14 HEPA Laminer Tavan",level:"2. Kat (AR-GE & Lab)",target:new x(-5,5.5,0),camPos:new x(4,8.5,9),specs:[{label:"Filtrasyon Sınıfı",val:"H14 (%99.995 MPPS) Terminal Tavan"},{label:"Akış Karakteri",val:"Laminer Düşey Tek Yönlü Hava Akımı"},{label:"Basınçlandırma",val:"+25 Pa Pozitif Mahal Fark Basıncı"},{label:"Standart",val:"ISO 14644-1 Class 5 • DIN 1946-4"}]},{id:"floor1_atrium",name:"1F Atriyum Lobi & Girdaplı Swirl Difüzör",level:"1. Kat (Giriş & Lobi)",target:new x(-3.5,2.2,0),camPos:new x(6,5,9),specs:[{label:"Mimari Entegrasyon",val:"Görünür (Açıkta) Spiromatic Çift Contalı Kanal"},{label:"Hava Dağılımı",val:"Yüksek İndüksiyonlu Girdaplı (Swirl) Menfez"},{label:"Hava Hızı",val:"< 0.18 m/s Mahal İçi Cereyansız Konfor"},{label:"Standart",val:"EN 13779 IDA 1 Yüksek İç Hava Kalitesi"}]},{id:"base_pumps",name:"B1 Hidronik Pompa İstasyonu & Chiller",level:"Bodrum Katı (B1)",target:new x(-7.5,-2,-4),camPos:new x(2,1.5,3.5),specs:[{label:"Yapılandırma",val:"1 Asıl + 1 Yedek İkiz Frekans İnvertörlü Pompa"},{label:"Vana Grubu",val:"GG25 Döküm Salyangoz • PN16 Kelebek Vanalar"},{label:"Genleşme Tankı",val:"Membranlı Kapalı Tip • 10 Bar Emniyet"},{label:"Otomasyon",val:"BMS Scada Diferansiyel Basınç Modülasyonu"}]},{id:"base_jetfan",name:"400°C/2h Otopark Duman Tahliye Jet Fanı",level:"Bodrum Katı (B1)",target:new x(0,-.7,3.5),camPos:new x(8,2.5,11.5),specs:[{label:"Yangın Dayanımı",val:"400°C / 120 Dakika Kesintisiz Tahliye"},{label:"İtme Gücü",val:"55 N Çift Yönlü Aerodinamik İtme"},{label:"Nozullar",val:"Her İki Uçta Akustik Susturucu Koni"},{label:"Standart",val:"EN 12101-3 F400 • CE Yangın Onaylı"}]},{id:"bim_hydronic",name:"Pinnacl-Seviye Hidronik Borulama & U-Lir",level:"Merkezi Şaft & Kat Geçişleri",target:new x(3,6.2,-.6),camPos:new x(12,7.5,6),specs:[{label:"Hidronik Hatlar",val:"DN100 / DN80 Gidiş-Dönüş (7°C / 12°C)"},{label:"Genleşme Liri",val:"Termal Gerilme Yutucu U-Loop Kompansatör"},{label:"Geçiş Kovanları",val:"Döşeme & Duvar Yangın Yalıtımlı Manşonlar"},{label:"Pinnacl Standart",val:"Lazer LiDAR Taramalı Hassas BIM Modelleme"}]},{id:"bim_sprinkler",name:"NFPA 13 Yangın Sprinkler Şebekesi & Kablo Tavası",level:"3. Kat & Koridor Tavanı",target:new x(-4,10.6,-1),camPos:new x(4,12.5,6),specs:[{label:"Sprinkler Sistemi",val:"Islak Borulu Yangın Söndürme Ağı • NFPA 13"},{label:"Nozullar",val:"Pendant Pirinç Sprinkler Başlıkları (K-Faktör 80)"},{label:"Kablo Tavaları",val:"Delikli Galvaniz Merdiven Tava + Yangına Dayanıklı Hat"},{label:"Duvar Geçişi",val:"Yangın Kompartımanı İntümesan Mastik Kovan"}]}],se=[];ee.forEach(w=>{let X=new Rt;X.position.copy(w.target);let Z=new Bt(new Pu(.32,16,16),new oi({color:61695}));Z.userData={hotspot:w},X.add(Z);let de=new Bt(new rl(.48,.62,24),new oi({color:638435,side:_i,transparent:!0,opacity:.85}));de.rotation.x=Math.PI/2,X.add(de),R.add(X),se.push(X)});let me=null,xe=null,ae=!1;function Me(w){me=w.camPos.clone().add(f.position),xe=w.target.clone().add(f.position),ae=!0,l.autoRotate=!1;let X=document.getElementById("sky-3d-info-card");X&&(X.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <span class="sky-3d-card-sys">${w.level}</span>
            <h4 class="sky-3d-card-title">${w.name}</h4>
          </div>
          <button type="button" onclick="window.closeSky3DInfo()" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer; padding: 0 4px; line-height: 1;">&times;</button>
        </div>
        <div style="margin: 8px 0; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          ${w.specs.map(Z=>`
            <div class="sky-3d-card-spec-row">
              <span class="sky-3d-card-spec-label">${Z.label}:</span>
              <span class="sky-3d-card-spec-val">${Z.val}</span>
            </div>
          `).join("")}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <a href="#sky-quote-modal" data-sky-modal-trigger="kesif" class="sky-3d-card-cta" style="flex: 1;">
            Teklif &amp; Projelendir
          </a>
          <button type="button" onclick="window.resetSky3DCamera()" style="padding: 7px 12px; border-radius: 6px; background: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 11px; font-weight: 700; cursor: pointer;">
            Genel Bakış
          </button>
        </div>
      `,X.classList.remove("hidden"))}window.closeSky3DInfo=function(){let w=document.getElementById("sky-3d-info-card");w&&w.classList.add("hidden")},window.resetSky3DCamera=function(){me=new x(34,22,36),xe=new x(1,5.5,0),ae=!0,l.autoRotate=!0,window.closeSky3DInfo()};let Le=new Wu,wt=new De;o.domElement.addEventListener("click",w=>{var _e;let X=o.domElement.getBoundingClientRect();wt.x=(w.clientX-X.left)/X.width*2-1,wt.y=-((w.clientY-X.top)/X.height)*2+1,Le.setFromCamera(wt,s);let Z=se.map(we=>we.children[0]),de=Le.intersectObjects(Z,!1);if(de.length>0){let we=de[0].object;(_e=we.userData)!=null&&_e.hotspot&&Me(we.userData.hotspot)}});let tt="all";window.setSky3DMode=function(w){tt=w,document.querySelectorAll(".sky-3d-mode-btn").forEach(X=>{X.getAttribute("data-mode")===w?X.classList.add("active"):X.classList.remove("active")}),h.visible=!0,m.visible=!0,M.visible=!0,g.visible=!0,p.visible=!0,d.visible=!0,w==="roof"?(M.visible=!1,p.visible=!1,g.visible=!0,me=new x(22,22,24),xe=new x(0,13,0),ae=!0):w==="floors"?(m.visible=!1,p.visible=!1,g.visible=!0,me=new x(26,12,26),xe=new x(-1,6,0),ae=!0):w==="basement"?(m.visible=!1,M.visible=!1,g.visible=!0,me=new x(18,4,20),xe=new x(-1,-1.5,0),ae=!0):w==="pipes"?(m.visible=!0,M.visible=!1,p.visible=!0,g.visible=!0,me=new x(16,8.5,17),xe=new x(0,6,0),ae=!0):w==="cfd"?(h.visible=!0,m.visible=!0,M.visible=!0,g.visible=!1,p.visible=!0,d.visible=!0,me=new x(34,22,36),xe=new x(1,5.5,0),ae=!0):w==="all"&&(me=new x(34,22,36),xe=new x(1,5.5,0),ae=!0)};let Kt=new Xu;function Zt(){requestAnimationFrame(Zt);let w=Kt.getElapsedTime();P.forEach(Z=>{Z.axis==="x"?Z.obj.rotation.x+=Z.speed:Z.axis==="y"?Z.obj.rotation.y+=Z.speed:Z.axis==="z"&&(Z.obj.rotation.z+=Z.speed)});let X=je.attributes.position;for(let Z=0;Z<Ae;Z++){let de=Ne[Z];de.progress+=de.speed,de.progress>=1&&(de.progress=0);let _e=de.spline.getPointAt(de.progress),we=Math.sin(w*5.5+Z)*.035;X.setXYZ(Z,_e.x+de.jx+we,_e.y+de.jy+we,_e.z+de.jz+we)}X.needsUpdate=!0,se.forEach((Z,de)=>{let _e=Z.children[1];if(_e){let we=1+Math.sin(w*3.5+de*1.2)*.28;_e.scale.set(we,we,we)}}),ae&&me&&xe&&(s.position.lerp(me,.045),l.target.lerp(xe,.045),s.position.distanceTo(me)<.08&&l.target.distanceTo(xe)<.08&&(ae=!1)),l.update(),o.render(r,s)}Zt();function ea(){if(!e)return;let w=e.clientWidth||window.innerWidth,X=e.clientHeight||window.innerHeight;s.aspect=w/X,s.updateProjectionMatrix(),o.setSize(w,X)}window.addEventListener("resize",ea);let Di=document.getElementById("sky-telemetry-flow"),Yi=document.getElementById("sky-telemetry-press"),Ui=document.getElementById("sky-telemetry-temp"),j=document.getElementById("sky-telemetry-cop");setInterval(()=>{if(Di){let w=Math.floor(Math.sin(Date.now()/2e3)*320);Di.innerText=(148500+w).toLocaleString("tr-TR")}if(Yi){let w=Math.floor(Math.sin(Date.now()/1500)*14);Yi.innerText=460+w}if(Ui){let w=(Math.sin(Date.now()/3e3)*.3).toFixed(1);Ui.innerText=(parseFloat(16.2)+parseFloat(w)).toFixed(1)}if(j){let w=(Math.sin(Date.now()/2500)*.08).toFixed(2);j.innerText=(parseFloat(4.88)+parseFloat(w)).toFixed(2)}},1e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ol):Ol();/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/globalThis.process??(globalThis.process={});const sv=620,qt=e=>+(e*420/sv).toFixed(4),Gc=.535,Vc=(1-Gc)/.4,dr=e=>+(Gc+(e-.6)*Vc).toFixed(4),zi=e=>+(e*Vc).toFixed(4),ba={wordDur:qt(.05),strokeDur:qt(.08),heroOutAt:qt(.2),heroBackAt:qt(.17),macro:{soft:[qt(.05),qt(.08)],chrome:[qt(.08),qt(.07)],heroOut:[qt(.13),qt(.08)],scaleEnd:qt(.21),stressOut:[dr(.615),zi(.05)],stressOutSm:[dr(.6),zi(.05)]},stress:{wordStart:qt(.13),stagger:qt(.022),chips:[qt(.47),qt(.49)],doodleLag:qt(.02)},grid:{tileDur:zi(.035),wave1:dr(.6),wave2:dr(.685),tileStagger:zi(.011),lock:[dr(.84),zi(.08)],final:[dr(.88),zi(.035)],title:[dr(.9),zi(.05)],titleLag:zi(.008),subLag:zi(.022)}},ov=ba.stress.chips[0],Fl=.55,Bl=6e3,lv=[{p:ov,dwell:1100,speed:.5},{p:1,dwell:1500,speed:.5},{sel:".bcc-meet",p:.88,focus:".bcc-meet-inner",dwell:1800,speed:.5},{sel:".bcc-bp",p:.125,dwell:900,speed:.5},{sel:".bcc-bp",p:.375,dwell:900,speed:.45},{sel:".bcc-bp",p:.625,dwell:900,speed:.45},{sel:".bcc-bp",p:.875,dwell:1e3,speed:.45},{sel:".bcc-witness",p:.5,dwell:900},{sel:".bcc-witness",p:.93,dwell:1300,speed:.4},{sel:".bcc-how",p:.06,dwell:500},{sel:".bcc-how",p:.98,dwell:1400,speed:.34},{sel:".bcc-fact",p:.5,film:"[data-bcc-fact-video]",dwell:1200,speed:.5},{sel:".bcc-crew",p:.5,dwell:1e3},{sel:".bcc-pricing",p:.5,dwell:1200},{sel:".bcc-say",p:.45,dwell:2600,speed:.5},{sel:".bcc-specs",p:.3,dwell:1100},{sel:".bcc-faq",p:.3,dwell:1100},{sel:".bcc-nf",p:1,dwell:0,speed:.4}],cv=[0,ba.heroOutAt,ba.macro.stressOut[0],1],hv=[{label:"Hero",dark:[0,1]},{label:"Energy demand is increasing"},{label:"The grid finale — Meet Base Core™",dark:[.55,1]},{sel:".bcc-meet",label:"A Texas-sized home battery"},{sel:".bcc-bp",label:"Better power starts with Core"},{sel:".bcc-witness",label:"Good energy, day and night",dark:[.34,.8]},{sel:".bcc-how",label:"How to sign up"},{sel:".bcc-fact",label:"Peek into the factory",dark:[.17,.45]},{sel:".bcc-crew",label:"Built by world-class engineers"},{sel:".bcc-pricing",label:"See pricing for your home"},{sel:".bcc-say",label:"What members are saying",dark:[0,1]},{sel:".bcc-specs",label:"Base Core specs"},{sel:".bcc-faq",label:"FAQ"},{sel:".bcc-nf",label:"Goodbye, grid anxiety",dark:[0,1]}];function uv({railChapters:e,railRunwayEdges:t,tourBeats:i,heroOutAt:r,heroBackAt:a}){var c,u,f,h,m,M,g;const n=document.querySelector(".bcc"),s=document.querySelector(".bcc-runway"),o=window.matchMedia("(prefers-reduced-motion: reduce)");if(n&&s){let p=!1,d=!0,R=-1,P=0,y=1;const T=j=>{const w=j.querySelector("[data-bcc-screen]");return w?w.offsetHeight:window.innerHeight},C=()=>{P=s.getBoundingClientRect().top+window.scrollY,y=Math.max(1,s.offsetHeight-T(s)),R=-1},A=()=>{const j=Math.min(1,Math.max(0,(window.scrollY-P)/y));Math.abs(j-R)<.001||(R=j,n.style.setProperty("--bcc-p",j.toFixed(4)),j>=r?n.dataset.heroOut="true":j<=a&&delete n.dataset.heroOut)};(c=document.querySelector("[data-bcc-learn-more]"))==null||c.addEventListener("click",j=>{p&&(j.preventDefault(),Pt())});let v=!1,b=0;const Y=()=>{v=!1,clearTimeout(b)},O=()=>{v=!0,clearTimeout(b),b=window.setTimeout(Y,2500),ae()};window.addEventListener("scrollend",Y,{passive:!0});for(const j of document.querySelectorAll("[data-bcc-goto]"))j.addEventListener("click",w=>{if(!p||w.metaKey||w.ctrlKey||w.shiftKey)return;const X=document.querySelector(j.hash);if(!X)return;w.preventDefault();const Z=X.getBoundingClientRect().top+window.scrollY-24;O(),window.scrollTo({top:Z,behavior:"smooth"}),X.focus({preventScroll:!0})});const L=["wheel","touchstart","pointerdown","keydown"];let W=!1,U=0,k=0,Q=null,V=null,ue=0,$=null,J=!1,re=0,Ue=null,te=0,ze=0,Ie=0;const K=j=>{const w=window.innerHeight;let X;if(!j.sel)X=P+j.p*y;else{const Z=document.querySelector(j.sel);if(!Z)return null;const de=Q==null?void 0:Q(Z,j.p);if(de!=null)X=de;else{const _e=Z.getBoundingClientRect().top+window.scrollY,we=j.focus?Z.querySelector(j.focus):null;if(we){const Ye=we.getBoundingClientRect();X=Ye.top+window.scrollY+Ye.height/2-w/2}else{const Ye=Z.offsetHeight-w;X=Ye>0?_e+j.p*Ye:_e+Ye/2}}}return Math.max(0,Math.min(X,document.documentElement.scrollHeight-w))},oe=j=>.5-.5*Math.cos(Math.PI*j),ce=(j,w)=>{$=w,Ue=w.film?document.querySelector(w.film):null,te=w.dwell,ue=j+(Ue?0:w.dwell),Ue&&(Ue.currentTime>.05&&(Ue.currentTime=0),ze=Ue.currentTime,Ie=j+Bl)},Ce=j=>{if(!Ue)return!1;const w=Ue.currentTime,X=Ue.duration;return Number.isFinite(X)&&X>0&&(w>=X-.25||w<ze-.5)||w<=ze&&j>=Ie?(Ue=null,ue=j+te):w>ze&&(ze=w,Ie=j+Bl),!0},Oe=()=>{document.hidden&&Ze()},ve=()=>{J=!1,clearTimeout(re),ae()},Ze=j=>{if(W){W=!1,cancelAnimationFrame(U),Ue=null,$=null;for(const w of L)window.removeEventListener(w,Ze);document.removeEventListener("visibilitychange",Oe),j&&L.includes(j.type)&&(J=!0,clearTimeout(re),re=window.setTimeout(ve,1500)),Ui()}},Qe=j=>{for($=null;k<i.length;){const w=i[k++],X=K(w);if(X==null)continue;const Z=window.scrollY,de=Math.abs(X-Z);if(de<2)return ce(j,w),V=null,!0;const _e=(w.speed??Fl)*window.innerHeight,we=Math.min(9e3,Math.max(650,de/_e*1e3));return V={from:Z,to:X,start:j,dur:we,beat:w},!0}return!1},Ve=()=>{if(!W)return;if(!V){if(!$)return;const _e=K($);_e!=null&&Math.abs(_e-window.scrollY)>2&&window.scrollTo({top:_e,behavior:"instant"});return}const j=K(V.beat);if(j==null)return;const w=performance.now(),X=window.scrollY,Z=Math.abs(j-X);if(Z<2){ce(w,V.beat),V=null;return}const de=(V.beat.speed??Fl)*window.innerHeight;V={...V,from:X,to:j,start:w,dur:Math.min(9e3,Math.max(650,Z/de*1e3))}},vt=j=>{if(W){if(V){const w=Math.min(1,(j-V.start)/V.dur);window.scrollTo({top:V.from+(V.to-V.from)*oe(w),behavior:"instant"}),w>=1&&(ce(j,V.beat),V=null)}else if(j>=ue&&!Ce(j)&&!Qe(j)){Ze();return}U=requestAnimationFrame(vt)}},Pt=()=>{if(!p||W)return;C(),ve(),k=0;const j=window.scrollY+4;for(;k<i.length;){const w=K(i[k]);if(w!=null&&w>j)break;k++}if(!(k>=i.length)){W=!0,V=null,Ue=null,$=null,ue=0,ae();for(const w of L)window.addEventListener(w,Ze,{passive:!0});document.addEventListener("visibilitychange",Oe),U=requestAnimationFrame(vt)}};window.addEventListener("keydown",j=>{if(W||j.key!=="p"||j.metaKey||j.ctrlKey||j.altKey)return;const w=j.target;w&&(w.isContentEditable||/^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(w.tagName))||document.querySelector('[role="dialog"][aria-modal="true"]')||Pt()});const Ut=j=>{p=j,n.classList.toggle("bcc-x",j),j?(C(),A()):(Ze(),n.style.removeProperty("--bcc-p"),delete n.dataset.heroOut,delete n.dataset.navHidden),ea(j),Kt(),Zt()};new IntersectionObserver(j=>{for(const w of j)d=w.isIntersecting,d&&Ui()}).observe(s);const at=()=>{C(),Ae(),ie(),xe(),Kt(),Ve(),Ui()};let It=0;const dt=()=>{It||(It=requestAnimationFrame(()=>{It=0,at()}))},Tt=160;let I=window.scrollY;const Gt=()=>{if(!p)return;const j=window.scrollY;if(j<Tt){delete n.dataset.navHidden,I=j;return}const w=j-I;w>8?(n.dataset.navHidden="true",I=j):w<-28&&(delete n.dataset.navHidden,I=j)},et=window.matchMedia("(min-width: 768px)"),gt=window.matchMedia("(min-width: 1024px)"),E=j=>(j.closest("[data-bcc-wide]")?gt:et).matches,_=[...document.querySelectorAll("[data-bcc-scrub]")].map(j=>({el:j,base:0,span:1,last:-1,live:!1,flipAt:Number(j.dataset.bccFlip)||0,flipEl:j.dataset.bccFlip?j.querySelector("input[type='checkbox']"):null,flipSide:-1,steps:Number(j.dataset.bccSteps)||0,stepNow:-1,cueAt:j.dataset.bccCue===void 0?-1:Number(j.dataset.bccCue),cueOn:!1})),N=new Map(_.map(j=>[j.el,j])),q=j=>!E(j)&&j.dataset.bccScrubSm||j.dataset.bccScrub,ie=()=>{const j=window.innerHeight;for(const w of _){const X=!E(w.el)&&w.el.dataset.bccCueSm||w.el.dataset.bccCue;w.cueAt=X===void 0?-1:Number(X);const Z=w.el.getBoundingClientRect().top+window.scrollY;q(w.el)==="runway"?(w.base=Z,w.span=Math.max(1,w.el.offsetHeight-T(w.el)),w.el.style.removeProperty("--sv")):(w.base=Z-j,w.span=Math.max(1,Math.min(w.el.offsetHeight+j,document.documentElement.scrollHeight-Z)),w.el.style.setProperty("--sv",(j/w.span).toFixed(4))),w.last=-1}};Q=(j,w)=>{const X=j.matches("[data-bcc-scrub]")?j:j.querySelector("[data-bcc-scrub]")??j.closest("[data-bcc-scrub]"),Z=X?N.get(X):void 0;return Z&&q(Z.el)==="runway"?Z.base+Math.min(1,Math.max(0,w))*Z.span:null};const pe=j=>{const w=Math.min(1,Math.max(0,(window.scrollY-j.base)/j.span));if(!(Math.abs(w-j.last)<.001)){if(j.last=w,j.el.style.setProperty("--sp",w.toFixed(4)),j.flipEl){const X=w>=j.flipAt?1:0;X!==j.flipSide&&(j.flipSide=X,j.flipEl.checked=X===0)}if(j.steps){const X=Math.min(j.steps-1,Math.floor(w*j.steps));X!==j.stepNow&&(j.stepNow=X,j.el.dataset.bccStep=String(X))}if(j.cueAt>=0){const X=w>=j.cueAt;X!==j.cueOn&&(j.cueOn=X,j.el.toggleAttribute("data-bcc-cued",X))}}},Se=()=>{if(p)for(const j of _)j.live&&pe(j)},B=new IntersectionObserver(j=>{for(const w of j){const X=N.get(w.target);X&&(X.live=w.isIntersecting,X.el.toggleAttribute("data-bcc-live",X.live),X.last=-1,p&&pe(X))}},{rootMargin:"12% 0px 12% 0px"});for(const j of _)B.observe(j.el);const he=[...document.querySelectorAll("[data-bcc-gather]")],ge=j=>{j.style.removeProperty("--gh"),j.style.removeProperty("--vh");for(const w of j.querySelectorAll("[data-bcc-gather-item]"))w.style.removeProperty("--gx"),w.style.removeProperty("--gy")},Ae=()=>{for(const j of he){const w=[...j.querySelectorAll("[data-bcc-gather-item]")],X=E(j)?j.dataset.bccGather:j.dataset.bccGatherSm;if(!w.length||!X){ge(j);continue}const Z=X.split(" "),de=Number(Z[0])||0,_e=Number(Z[1])||0,we=j.offsetWidth/2,Ye=Z[2]==="tail"?j.offsetHeight-window.innerHeight/2:j.offsetHeight/2;j.style.setProperty("--gh",String(j.offsetHeight)),j.style.setProperty("--vh",String(window.innerHeight));const ot=(w.length-1)/2;w.forEach((qe,pt)=>{qe.style.setProperty("--gx",(we+de*(pt-ot)-qe.offsetLeft-qe.offsetWidth/2).toFixed(1)),qe.style.setProperty("--gy",(Ye+_e*(pt-ot)-qe.offsetTop-qe.offsetHeight/2).toFixed(1))})}},ne=document.querySelector("[data-bcc-snap]"),Re=ne!=null&&ne.dataset.bccSnapOff?window.matchMedia(ne.dataset.bccSnapOff):null;let Ne=0,ke=-1,je=!1;const F=document.querySelector("[data-bcc-snap-soft]");let ee=0,se=-1,me=!1;const xe=()=>{if(ne){const j=ne.getBoundingClientRect().top+window.scrollY;Ne=j-window.innerHeight-2,ke=j+Math.max(0,ne.offsetHeight-window.innerHeight)+2}if(F){const j=F.getBoundingClientRect().top+window.scrollY;ee=j-window.innerHeight*.5,se=j+window.innerHeight*.6}},ae=()=>{const j=window.scrollY;if(ne){const w=!(Re!=null&&Re.matches),X=p&&!W&&!J&&!v&&w&&ke>Ne&&j>=Ne&&j<=ke;X!==je&&(je=X,document.documentElement.classList.toggle("bcc-snap",X))}if(F){const w=p&&!W&&!J&&!v&&!je&&se>ee&&j>=ee&&j<=se;w!==me&&(me=w,document.documentElement.classList.toggle("bcc-snap-soft",w))}},Me=document.querySelector(".bcc-rail"),Le=[];let wt=!1,tt=-1;const Kt=()=>{if(!(!Me||wt)){if(document.documentElement.classList.add("bcc-hide-scrollbar"),Le.length=0,p){const j=s.getBoundingClientRect().top+window.scrollY,w=Math.max(1,s.offsetHeight-T(s));for(const X of t.slice(0,-1))Le.push(j+X*w)}else for(const j of s.querySelectorAll(".bcc-stage"))Le.push(j.getBoundingClientRect().top+window.scrollY);for(const j of e){if(!j.sel)continue;const w=document.querySelector(j.sel);w&&Le.push(w.getBoundingClientRect().top+window.scrollY)}Le.push(document.documentElement.scrollHeight-window.innerHeight),Le.length!==e.length+1&&(Le.length=0,wt=!0,document.documentElement.classList.remove("bcc-hide-scrollbar")),tt=-1}},Zt=()=>{if(!Me||!Le.length)return;const j=window.scrollY;let w=0;for(;w<Le.length-2&&j>=Le[w+1];)w++;const X=Math.min(1,Math.max(0,(j-Le[w])/Math.max(1,Le[w+1]-Le[w]))),Z=Math.min(e.length-.5,Math.max(0,w+X-.5));if(Math.abs(Z-tt)<.002)return;tt=Z,Me.style.setProperty("--bcc-ai",Z.toFixed(3));const de=e[w].dark;Me.style.setProperty("--bcc-rail-ink",de&&X>=de[0]&&X<de[1]?"1":"0")},ea=j=>{if(j){Ae(),ie(),xe();for(const w of _)pe(w)}else{for(const w of _)w.el.style.removeProperty("--sp"),w.el.style.removeProperty("--sv"),w.el.removeAttribute("data-bcc-live"),delete w.el.dataset.bccStep,w.el.removeAttribute("data-bcc-cued"),w.last=-1,w.flipSide=-1,w.stepNow=-1,w.cueOn=!1;for(const w of he)ge(w);je=!1,me=!1,document.documentElement.classList.remove("bcc-snap"),document.documentElement.classList.remove("bcc-snap-soft")}};let Di=!1;const Yi=()=>{Di=!1,p&&d&&A(),Gt(),Se(),ae(),Zt()},Ui=()=>{Di||(Di=!0,requestAnimationFrame(Yi))};window.addEventListener("scroll",Ui,{passive:!0}),window.addEventListener("resize",dt,{passive:!0}),window.addEventListener("scrollend",ve,{passive:!0}),(u=window.visualViewport)==null||u.addEventListener("resize",dt,{passive:!0}),(f=et.addEventListener)==null||f.call(et,"change",dt),(h=gt.addEventListener)==null||h.call(gt,"change",dt),(m=Re==null?void 0:Re.addEventListener)==null||m.call(Re,"change",dt),(M=document.fonts)==null||M.ready.then(dt),new ResizeObserver(dt).observe(document.body),Ut(!o.matches),(g=o.addEventListener)==null||g.call(o,"change",j=>Ut(!j.matches))}const l=document.querySelectorAll("[data-bcc-reveal]");if(l.length){const p=new IntersectionObserver(d=>{for(const R of d)R.isIntersecting&&(R.target.classList.add("bcc-in"),p.unobserve(R.target))},{threshold:.15,rootMargin:"0px 0px -8% 0px"});for(const d of l)p.observe(d)}}globalThis.process??(globalThis.process={});uv({railChapters:hv,railRunwayEdges:cv,tourBeats:lv,heroOutAt:ba.heroOutAt,heroBackAt:ba.heroBackAt});
