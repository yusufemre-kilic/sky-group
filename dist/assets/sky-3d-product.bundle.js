var oo="186",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,kl=1,ph=2;var rs=1,mh=2,Ys=3,Gi=0,wn=1,Le=2,ci=0,qs=1,Br=2,Vl=3,Gl=4,gh=5;var as=100,_h=101,xh=102,yh=103,vh=104,Mh=200,Sh=201,bh=202,Eh=203,Wl=204,Xl=205,Th=206,wh=207,Ah=208,Rh=209,Ch=210,Ph=211,Ih=212,Lh=213,Dh=214,Ta=0,wa=1,Aa=2,Ls=3,Ra=4,Ca=5,Pa=6,Ia=7,Yl=0,Nh=1,Fh=2,ti=0,ql=1,Zl=2,Jl=3,Hr=4,Kl=5,$l=6,jl=7;var Ql=300,Wi=301,os=302,lo=303,co=304,zr=306,La=1e3,ai=1001,Da=1002,dn=1003,Uh=1004;var kr=1005;var an=1006,ho=1007;var Xi=1008;var In=1009,tc=1010,ec=1011,Zs=1012,uo=1013,ei=1014,ni=1015,ii=1016,fo=1017,po=1018,Js=1020,nc=35902,ic=35899,sc=1021,rc=1022,Yn=1023,oi=1026,Yi=1027,ac=1028,mo=1029,qi=1030,go=1031;var _o=1033,Vr=33776,Gr=33777,Wr=33778,Xr=33779,xo=35840,yo=35841,vo=35842,Mo=35843,So=36196,bo=37492,Eo=37496,To=37488,wo=37489,Yr=37490,Ao=37491,Ro=37808,Co=37809,Po=37810,Io=37811,Lo=37812,Do=37813,No=37814,Fo=37815,Uo=37816,Oo=37817,Bo=37818,Ho=37819,zo=37820,ko=37821,Vo=36492,Go=36494,Wo=36495,Xo=36283,Yo=36284,qr=36285,qo=36286;var pr=2300,Na=2301,ba=2302,Ll=2303,Dl=2400,Nl=2401,Fl=2402;var Oh=3200;var Zo=0,Bh=1,wi="",Bn="srgb",mr="srgb-linear",gr="linear",Ce="srgb";var Ea=7680;var Hh=519,zh=512,kh=513,Vh=514,Jo=515,Gh=516,Wh=517,Ko=518,Xh=519,oc=35044;var lc="300 es",jn=2e3,Ds=2001;function Ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ku(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yh(){let i=_r("canvas");return i.style.display="block",i}var Fc={},Ns=null;function xr(...i){let t="THREE."+i.shift();Ns?Ns("log",t,...i):console.log(t,...i)}function qh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=qh(i);let t="THREE."+i.shift();if(Ns)Ns("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=qh(i);let t="THREE."+i.shift();if(Ns)Ns("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function es(...i){let t=i.join(" ");t in Fc||(Fc[t]=!0,Zt(...i))}function Zh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Jh={[Ta]:wa,[Aa]:Pa,[Ra]:Ia,[Ls]:Ca,[wa]:Ta,[Pa]:Aa,[Ia]:Ra,[Ca]:Ls},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=1234567,dr=Math.PI/180,Fs=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function $u(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ju(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function Qu(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function ad(i){i!==void 0&&(Uc=i);let t=Uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(i){return i*dr}function ld(i){return i*Fs}function cd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),f=a((t+n)/2),g=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),M=a((n-t)/2);switch(s){case"XYX":i.set(l*f,c*g,c*d,l*h);break;case"YZY":i.set(c*d,l*f,c*g,l*h);break;case"ZXZ":i.set(c*g,c*d,l*f,l*h);break;case"XZX":i.set(l*f,c*M,c*m,l*h);break;case"YXY":i.set(c*m,l*f,c*M,l*h);break;case"ZYZ":i.set(c*M,c*m,l*f,l*h);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hc={DEG2RAD:dr,RAD2DEG:Fs,generateUUID:Mi,clamp:ge,euclideanModulo:cc,mapLinear:$u,inverseLerp:ju,lerp:fr,damp:Qu,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:ad,degToRad:od,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:Ie,denormalize:$n},kt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],f=n[s+2],g=n[s+3],d=r[a+0],m=r[a+1],M=r[a+2],E=r[a+3];if(g!==E||c!==d||h!==m||f!==M){let _=c*d+h*m+f*M+g*E;_<0&&(d=-d,m=-m,M=-M,E=-E,_=-_);let p=1-l;if(_<.9995){let C=Math.acos(_),I=Math.sin(C);p=Math.sin(p*C)/I,l=Math.sin(l*C)/I,c=c*p+d*l,h=h*p+m*l,f=f*p+M*l,g=g*p+E*l}else{c=c*p+d*l,h=h*p+m*l,f=f*p+M*l,g=g*p+E*l;let C=1/Math.sqrt(c*c+h*h+f*f+g*g);c*=C,h*=C,f*=C,g*=C}}t[e]=c,t[e+1]=h,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],f=n[s+3],g=r[a],d=r[a+1],m=r[a+2],M=r[a+3];return t[e]=l*M+f*g+c*m-h*d,t[e+1]=c*M+f*d+h*g-l*m,t[e+2]=h*M+f*m+l*d-c*g,t[e+3]=f*M-l*g-c*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),f=l(s/2),g=l(r/2),d=c(n/2),m=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=d*f*g+h*m*M,this._y=h*m*g-d*f*M,this._z=h*f*M+d*m*g,this._w=h*f*g-d*m*M;break;case"YXZ":this._x=d*f*g+h*m*M,this._y=h*m*g-d*f*M,this._z=h*f*M-d*m*g,this._w=h*f*g+d*m*M;break;case"ZXY":this._x=d*f*g-h*m*M,this._y=h*m*g+d*f*M,this._z=h*f*M+d*m*g,this._w=h*f*g-d*m*M;break;case"ZYX":this._x=d*f*g-h*m*M,this._y=h*m*g+d*f*M,this._z=h*f*M-d*m*g,this._w=h*f*g+d*m*M;break;case"YZX":this._x=d*f*g+h*m*M,this._y=h*m*g+d*f*M,this._z=h*f*M-d*m*g,this._w=h*f*g-d*m*M;break;case"XZY":this._x=d*f*g-h*m*M,this._y=h*m*g-d*f*M,this._z=h*f*M+d*m*g,this._w=h*f*g+d*m*M;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],f=e[6],g=e[10],d=n+l+g;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>l&&n>g){let m=2*Math.sqrt(1+n-l-g);this._w=(f-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(l>g){let m=2*Math.sqrt(1+l-n-g);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+f)/m}else{let m=2*Math.sqrt(1+g-n-l);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,f=e._w;return this._x=n*f+a*l+s*h-r*c,this._y=s*f+a*c+r*l-n*h,this._z=r*f+a*h+n*c-s*l,this._w=a*f-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),f=Math.sin(h);c=Math.sin(c*h)/f,e=Math.sin(e*h)/f,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),f=2*(l*e-r*s),g=2*(r*n-a*e);return this.x=e+c*h+a*g-l*f,this.y=n+c*f+l*h-r*g,this.z=s+c*g+r*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cl=new F,Oc=new zn,ie=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],f=n[4],g=n[7],d=n[2],m=n[5],M=n[8],E=s[0],_=s[3],p=s[6],C=s[1],I=s[4],T=s[7],o=s[2],w=s[5],P=s[8];return r[0]=a*E+l*C+c*o,r[3]=a*_+l*I+c*w,r[6]=a*p+l*T+c*P,r[1]=h*E+f*C+g*o,r[4]=h*_+f*I+g*w,r[7]=h*p+f*T+g*P,r[2]=d*E+m*C+M*o,r[5]=d*_+m*I+M*w,r[8]=d*p+m*T+M*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-n*r*f+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=f*a-l*h,d=l*c-f*r,m=h*r-a*c,M=e*g+n*d+s*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/M;return t[0]=g*E,t[1]=(s*h-f*n)*E,t[2]=(l*n-s*a)*E,t[3]=d*E,t[4]=(f*e-s*c)*E,t[5]=(s*r-l*e)*E,t[6]=m*E,t[7]=(n*c-h*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hl=new ie,Bc=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){let i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ce&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ce&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:t,whitePoint:n,transfer:gr,toXYZ:Bc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Bc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),i}var Me=fd();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=_r("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pd=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ul(s[a].image)):r.push(ul(s[a]))}else r=ul(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var md=0,dl=new F,Tn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ai,s=ai,r=an,a=Xi,l=Yn,c=In,h=i.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Mi(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Ql;Tn.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],f=c[4],g=c[8],d=c[1],m=c[5],M=c[9],E=c[2],_=c[6],p=c[10];if(Math.abs(f-d)<.01&&Math.abs(g-E)<.01&&Math.abs(M-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(g+E)<.1&&Math.abs(M+_)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,T=(m+1)/2,o=(p+1)/2,w=(f+d)/4,P=(g+E)/4,S=(M+_)/4;return I>T&&I>o?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=w/n,r=P/n):T>o?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=S/s):o<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(o),n=P/r,s=S/r),this.set(n,s,r,e),this}let C=Math.sqrt((_-M)*(_-M)+(g-E)*(g-E)+(d-f)*(d-f));return Math.abs(C)<.001&&(C=1),this.x=(_-M)/C,this.y=(g-E)/C,this.z=(d-f)/C,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ua=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Tn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yr=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,f,g,d,m,M,E,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,f,g,d,m,M,E,_)}set(t,e,n,s,r,a,l,c,h,f,g,d,m,M,E,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=h,p[6]=f,p[10]=g,p[14]=d,p[3]=m,p[7]=M,p[11]=E,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),f=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*f,m=a*g,M=l*f,E=l*g;e[0]=c*f,e[4]=-c*g,e[8]=h,e[1]=m+M*h,e[5]=d-E*h,e[9]=-l*c,e[2]=E-d*h,e[6]=M+m*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*f,m=c*g,M=h*f,E=h*g;e[0]=d+E*l,e[4]=M*l-m,e[8]=a*h,e[1]=a*g,e[5]=a*f,e[9]=-l,e[2]=m*l-M,e[6]=E+d*l,e[10]=a*c}else if(t.order==="ZXY"){let d=c*f,m=c*g,M=h*f,E=h*g;e[0]=d-E*l,e[4]=-a*g,e[8]=M+m*l,e[1]=m+M*l,e[5]=a*f,e[9]=E-d*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let d=a*f,m=a*g,M=l*f,E=l*g;e[0]=c*f,e[4]=M*h-m,e[8]=d*h+E,e[1]=c*g,e[5]=E*h+d,e[9]=m*h-M,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,m=a*h,M=l*c,E=l*h;e[0]=c*f,e[4]=E-d*g,e[8]=M*g+m,e[1]=g,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=m*g+M,e[10]=d-E*g}else if(t.order==="XZY"){let d=a*c,m=a*h,M=l*c,E=l*h;e[0]=c*f,e[4]=-g,e[8]=h*f,e[1]=d*g+E,e[5]=a*f,e[9]=m*g-M,e[2]=M*g-m,e[6]=l*f,e[10]=E*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,_d)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ci.crossVectors(n,Un),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ci.crossVectors(n,Un)),Ci.normalize(),$r.crossVectors(Un,Ci),s[0]=Ci.x,s[4]=$r.x,s[8]=Un.x,s[1]=Ci.y,s[5]=$r.y,s[9]=Un.y,s[2]=Ci.z,s[6]=$r.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],f=n[1],g=n[5],d=n[9],m=n[13],M=n[2],E=n[6],_=n[10],p=n[14],C=n[3],I=n[7],T=n[11],o=n[15],w=s[0],P=s[4],S=s[8],u=s[12],b=s[1],U=s[5],z=s[9],V=s[13],D=s[2],W=s[6],$=s[10],J=s[14],ot=s[3],Z=s[7],it=s[11],at=s[15];return r[0]=a*w+l*b+c*D+h*ot,r[4]=a*P+l*U+c*W+h*Z,r[8]=a*S+l*z+c*$+h*it,r[12]=a*u+l*V+c*J+h*at,r[1]=f*w+g*b+d*D+m*ot,r[5]=f*P+g*U+d*W+m*Z,r[9]=f*S+g*z+d*$+m*it,r[13]=f*u+g*V+d*J+m*at,r[2]=M*w+E*b+_*D+p*ot,r[6]=M*P+E*U+_*W+p*Z,r[10]=M*S+E*z+_*$+p*it,r[14]=M*u+E*V+_*J+p*at,r[3]=C*w+I*b+T*D+o*ot,r[7]=C*P+I*U+T*W+o*Z,r[11]=C*S+I*z+T*$+o*it,r[15]=C*u+I*V+T*J+o*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],f=t[2],g=t[6],d=t[10],m=t[14],M=t[3],E=t[7],_=t[11],p=t[15],C=c*m-h*d,I=l*m-h*g,T=l*d-c*g,o=a*m-h*f,w=a*d-c*f,P=a*g-l*f;return e*(E*C-_*I+p*T)-n*(M*C-_*o+p*w)+s*(M*I-E*o+p*P)-r*(M*T-E*w+_*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10];return e*(a*f-l*h)-n*(r*f-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=t[9],d=t[10],m=t[11],M=t[12],E=t[13],_=t[14],p=t[15],C=e*l-n*a,I=e*c-s*a,T=e*h-r*a,o=n*c-s*l,w=n*h-r*l,P=s*h-r*c,S=f*E-g*M,u=f*_-d*M,b=f*p-m*M,U=g*_-d*E,z=g*p-m*E,V=d*p-m*_,D=C*V-I*z+T*U+o*b-w*u+P*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return t[0]=(l*V-c*z+h*U)*W,t[1]=(s*z-n*V-r*U)*W,t[2]=(E*P-_*w+p*o)*W,t[3]=(d*w-g*P-m*o)*W,t[4]=(c*b-a*V-h*u)*W,t[5]=(e*V-s*b+r*u)*W,t[6]=(_*T-M*P-p*I)*W,t[7]=(f*P-d*T+m*I)*W,t[8]=(a*z-l*b+h*S)*W,t[9]=(n*b-e*z-r*S)*W,t[10]=(M*w-E*T+p*C)*W,t[11]=(g*T-f*w-m*C)*W,t[12]=(l*u-a*U-c*S)*W,t[13]=(e*U-n*u+s*S)*W,t[14]=(E*I-M*o-_*C)*W,t[15]=(f*o-g*I+d*C)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,f=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,f*l+n,f*c-s*a,0,h*c-s*l,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,f=a+a,g=l+l,d=r*h,m=r*f,M=r*g,E=a*f,_=a*g,p=l*g,C=c*h,I=c*f,T=c*g,o=n.x,w=n.y,P=n.z;return s[0]=(1-(E+p))*o,s[1]=(m+T)*o,s[2]=(M-I)*o,s[3]=0,s[4]=(m-T)*w,s[5]=(1-(d+p))*w,s[6]=(_+C)*w,s[7]=0,s[8]=(M+I)*P,s[9]=(_-C)*P,s[10]=(1-(d+E))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),l=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let h=1/a,f=1/l,g=1/c;return Zn.elements[0]*=h,Zn.elements[1]*=h,Zn.elements[2]*=h,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=g,Zn.elements[9]*=g,Zn.elements[10]*=g,e.setFromRotationMatrix(Zn),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=jn,c=!1){let h=this.elements,f=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),M,E;if(c)M=r/(a-r),E=a*r/(a-r);else if(l===jn)M=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(l===Ds)M=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=g,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=jn,c=!1){let h=this.elements,f=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s),M,E;if(c)M=1/(a-r),E=a/(a-r);else if(l===jn)M=-2/(a-r),E=-(a+r)/(a-r);else if(l===Ds)M=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=g,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new F,Zn=new He,gd=new F(0,0,0),_d=new F(1,1,1),Ci=new F,$r=new F,Un=new F,zc=new He,kc=new zn,bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],f=s[9],g=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xd=0,Vc=new F,gs=new zn,mi=new He,jr=new F,sr=new F,yd=new F,vd=new zn,Gc=new F(1,0,0),Wc=new F(0,1,0),Xc=new F(0,0,1),Yc={type:"added"},Md={type:"removed"},_s={type:"childadded",child:null},fl={type:"childremoved",child:null},fn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new bi,n=new zn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new ie}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(sr,jr,this.up):mi.lookAt(jr,sr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(mi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),_s.child=t,this.dispatchEvent(_s),_s.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){let g=c[h];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),f=a(t.images),g=a(t.shapes),d=a(t.skeletons),m=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(l){let c=[];for(let h in l){let f=l[h];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new F(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let E of t.hand.values()){let _=e.getJointPose(E,n),p=this._getHandJoint(h,E);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=f.position.distanceTo(g.position),m=.02,M=.005;h.inputState.pinching&&d>m+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function pl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=cc(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pl(a,r,t+1/3),this.g=pl(a,r,t),this.b=pl(a,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=Bn){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){let n=Kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return Me.workingToColorSpace(yn.copy(this),t),Math.round(ge(yn.r*255,0,255))*65536+Math.round(ge(yn.g*255,0,255))*256+Math.round(ge(yn.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(yn.copy(this),e);let n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,f=(l+a)/2;if(l===a)c=0,h=0;else{let g=a-l;switch(h=f<=.5?g/(a+l):g/(2-a-l),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=f,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Bn){Me.workingToColorSpace(yn.copy(this),t);let e=yn.r,n=yn.g,s=yn.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Qr);let n=fr(Pi.h,Qr.h,e),s=fr(Pi.s,Qr.s,e),r=fr(Pi.l,Qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new jt;jt.NAMES=Kh;var vr=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Jn=new F,gi=new F,ml=new F,_i=new F,xs=new F,ys=new F,qc=new F,gl=new F,_l=new F,xl=new F,yl=new Ye,vl=new Ye,Ml=new Ye,vi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Jn.subVectors(s,e),gi.subVectors(n,e),ml.subVectors(t,e);let a=Jn.dot(Jn),l=Jn.dot(gi),c=Jn.dot(ml),h=gi.dot(gi),f=gi.dot(ml),g=a*h-l*l;if(g===0)return r.set(0,0,0),null;let d=1/g,m=(h*c-l*f)*d,M=(a*f-l*c)*d;return r.set(1-m-M,M,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(l,_i.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return yl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,n),Ml.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yl,r.x),a.addScaledVector(vl,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),gi.subVectors(t,e),Jn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Jn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;xs.subVectors(s,n),ys.subVectors(r,n),gl.subVectors(t,n);let c=xs.dot(gl),h=ys.dot(gl);if(c<=0&&h<=0)return e.copy(n);_l.subVectors(t,s);let f=xs.dot(_l),g=ys.dot(_l);if(f>=0&&g<=f)return e.copy(s);let d=c*g-f*h;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(xs,a);xl.subVectors(t,r);let m=xs.dot(xl),M=ys.dot(xl);if(M>=0&&m<=M)return e.copy(r);let E=m*h-c*M;if(E<=0&&h>=0&&M<=0)return l=h/(h-M),e.copy(n).addScaledVector(ys,l);let _=f*M-m*g;if(_<=0&&g-f>=0&&m-M>=0)return qc.subVectors(r,s),l=(g-f)/(g-f+(m-M)),e.copy(s).addScaledVector(qc,l);let p=1/(_+E+d);return a=E*p,l=d*p,e.copy(n).addScaledVector(xs,a).addScaledVector(ys,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),ea.subVectors(this.max,rr),vs.subVectors(t.a,rr),Ms.subVectors(t.b,rr),Ss.subVectors(t.c,rr),Ii.subVectors(Ms,vs),Li.subVectors(Ss,Ms),$i.subVectors(vs,Ss);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-$i.z,$i.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,$i.z,0,-$i.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-$i.y,$i.x,0];return!Sl(e,vs,Ms,Ss,ea)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,vs,Ms,Ss,ea))?!1:(na.crossVectors(Ii,Li),e=[na.x,na.y,na.z],Sl(e,vs,Ms,Ss,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new F,new F,new F,new F,new F,new F,new F,new F],Kn=new F,ta=new li,vs=new F,Ms=new F,Ss=new F,Ii=new F,Li=new F,$i=new F,rr=new F,ea=new F,na=new F,ji=new F;function Sl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ji.fromArray(i,r);let l=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=t.dot(ji),h=e.dot(ji),f=n.dot(ji);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>l)return!1}return!0}var rn=new F,ia=new kt,bd=0,Mn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Mr=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var tn=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ed=new li,ar=new F,bl=new F,Ni=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(bl)),this.expandByPoint(ar.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Td=0,Wn=new He,El=new fn,bs=new F,On=new li,or=new li,un=new F,pn=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ju(t)?Sr:Mr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];or.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(On.min,or.min),On.expandByPoint(un),un.addVectors(On.max,or.max),On.expandByPoint(un)):(On.expandByPoint(or.min),On.expandByPoint(or.max))}On.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)un.fromBufferAttribute(l,h),c&&(bs.fromBufferAttribute(t,h),un.add(bs)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let S=0;S<n.count;S++)l[S]=new F,c[S]=new F;let h=new F,f=new F,g=new F,d=new kt,m=new kt,M=new kt,E=new F,_=new F;function p(S,u,b){h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,u),g.fromBufferAttribute(n,b),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,u),M.fromBufferAttribute(r,b),f.sub(h),g.sub(h),m.sub(d),M.sub(d);let U=1/(m.x*M.y-M.x*m.y);isFinite(U)&&(E.copy(f).multiplyScalar(M.y).addScaledVector(g,-m.y).multiplyScalar(U),_.copy(g).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(U),l[S].add(E),l[u].add(E),l[b].add(E),c[S].add(_),c[u].add(_),c[b].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let S=0,u=C.length;S<u;++S){let b=C[S],U=b.start,z=b.count;for(let V=U,D=U+z;V<D;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let I=new F,T=new F,o=new F,w=new F;function P(S){o.fromBufferAttribute(s,S),w.copy(o);let u=l[S];I.copy(u),I.sub(o.multiplyScalar(o.dot(u))).normalize(),T.crossVectors(w,u);let U=T.dot(c[S])<0?-1:1;a.setXYZW(S,I.x,I.y,I.z,U)}for(let S=0,u=C.length;S<u;++S){let b=C[S],U=b.start,z=b.count;for(let V=U,D=U+z;V<D;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,l=new F,c=new F,h=new F,f=new F,g=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){let M=t.getX(d+0),E=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,_),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,_),l.add(f),c.add(f),h.add(f),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(l,c){let h=l.array,f=l.itemSize,g=l.normalized,d=new h.constructor(c.length*f),m=0,M=0;for(let E=0,_=c.length;E<_;E++){l.isInterleavedBufferAttribute?m=c[E]*l.data.stride+l.offset:m=c[E]*f;for(let p=0;p<f;p++)d[M++]=h[m++]}return new Mn(d,f,g)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let f=0,g=h.length;f<g;f++){let d=h[f],m=t(d,n);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],f=[];for(let g=0,d=h.length;g<d;g++){let m=h[g];f.push(m.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],g=r[h];for(let d=0,m=g.length;d<m;d++)f.push(g[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,f=a.length;h<f;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ba=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new F,br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tl=new F,wd=new F,Ad=new ie,Hn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tl.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ad.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rd=0,Xn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=qs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Hs=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Es,lr=new F,Ts=new F,ws=new F,As=new kt,cr=new kt,$h=new He,sa=new F,hr=new F,ra=new F,Zc=new kt,wl=new kt,Jc=new kt,Er=class extends fn{constructor(t=new Hs){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new pn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ba(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new br(n,3,0,!1)),Es.setAttribute("uv",new br(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new kt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),$h.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;aa(sa.set(-.5,-.5,0),ws,a,Ts,s,r),aa(hr.set(.5,-.5,0),ws,a,Ts,s,r),aa(ra.set(.5,.5,0),ws,a,Ts,s,r),Zc.set(0,0),wl.set(1,0),Jc.set(1,1);let l=t.ray.intersectTriangle(sa,hr,ra,!1,lr);if(l===null&&(aa(hr.set(-.5,.5,0),ws,a,Ts,s,r),wl.set(0,1),l=t.ray.intersectTriangle(sa,ra,hr,!1,lr),l===null))return;let c=t.ray.origin.distanceTo(lr);c<t.near||c>t.far||e.push({distance:c,point:lr.clone(),uv:vi.getInterpolation(lr,sa,hr,ra,Zc,wl,Jc,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function aa(i,t,e,n,s,r){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cr.x=r*As.x-s*As.y,cr.y=s*As.x+r*As.y):cr.copy(As),i.copy(t),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4($h)}var yi=new F,Al=new F,oa=new F,la=new F,Ei=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Al.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),la.copy(this.origin).sub(Al);let r=t.distanceTo(e)*.5,a=-this.direction.dot(oa),l=la.dot(this.direction),c=-la.dot(oa),h=la.lengthSq(),f=Math.abs(1-a*a),g,d,m,M;if(f>0)if(g=a*c-l,d=a*l-c,M=r*f,g>=0)if(d>=-M)if(d<=M){let E=1/f;g*=E,d*=E,m=g*(g+a*d+2*l)+d*(a*g+d+2*c)+h}else d=r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;else d=-r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;else d<=-M?(g=Math.max(0,-(-a*r+l)),d=g>0?-r:Math.min(Math.max(-r,-c),r),m=-g*g+d*(d+2*c)+h):d<=M?(g=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+h):(g=Math.max(0,-(a*r+l)),d=g>0?r:Math.min(Math.max(-r,-c),r),m=-g*g+d*(d+2*c)+h);else d=a>0?-r:r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Al).addScaledVector(oa,d),m}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),f>=0?(r=(t.min.y-d.y)*f,a=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,a=(t.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(l=(t.min.z-d.z)*g,c=(t.max.z-d.z)*g):(l=(t.max.z-d.z)*g,c=(t.min.z-d.z)*g),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,f=l.z,g=t.x-a.x,d=t.y-a.y,m=t.z-a.z,M=e.x-a.x,E=e.y-a.y,_=e.z-a.z,p=n.x-a.x,C=n.y-a.y,I=n.z-a.z,T=Math.abs(c),o=Math.abs(h),w=Math.abs(f),P,S,u,b,U,z,V,D,W,$,J,ot;if(T>=o&&T>=w?(u=c,z=g,W=M,ot=p,c>=0?(P=h,S=f,b=d,U=m,V=E,D=_,$=C,J=I):(P=f,S=h,b=m,U=d,V=_,D=E,$=I,J=C)):o>=w?(u=h,z=d,W=E,ot=C,h>=0?(P=f,S=c,b=m,U=g,V=_,D=M,$=I,J=p):(P=c,S=f,b=g,U=m,V=M,D=_,$=p,J=I)):(u=f,z=m,W=_,ot=I,f>=0?(P=c,S=h,b=g,U=d,V=M,D=E,$=p,J=C):(P=h,S=c,b=d,U=g,V=E,D=M,$=C,J=p)),u===0)return null;let Z=P/u,it=S/u,at=1/u,Gt=b-Z*z,Ht=U-it*z,Ne=V-Z*W,xe=D-it*W,ee=$-Z*ot,K=J-it*ot,nt=ee*xe-K*Ne,Ut=Gt*K-Ht*ee,Qt=Ne*Ht-xe*Gt;if(s){if(nt<0||Ut<0||Qt<0)return null}else if((nt<0||Ut<0||Qt<0)&&(nt>0||Ut>0||Qt>0))return null;let Pt=nt+Ut+Qt;if(Pt===0)return null;let ue=at*(nt*z+Ut*W+Qt*ot);return(Pt>0?ue<0:ue>0)?null:this.at(ue/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kc=new He,Qi=new Ei,ca=new Ni,$c=new F,ha=new F,ua=new F,da=new F,Rl=new F,fa=new F,jc=new F,pa=new F,qe=class extends fn{constructor(t=new pn,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){fa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let f=l[c],g=r[c];f!==0&&(Rl.fromBufferAttribute(g,t),a?fa.addScaledVector(Rl,f):fa.addScaledVector(Rl.sub(e),f))}e.add(fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(ca.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ca,$c)===null||Qi.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,g=r.attributes.normal,d=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,E=d.length;M<E;M++){let _=d[M],p=a[_.materialIndex],C=Math.max(_.start,m.start),I=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let T=C,o=I;T<o;T+=3){let w=l.getX(T),P=l.getX(T+1),S=l.getX(T+2);s=ma(this,p,t,n,h,f,g,w,P,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let M=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let _=M,p=E;_<p;_+=3){let C=l.getX(_),I=l.getX(_+1),T=l.getX(_+2);s=ma(this,a,t,n,h,f,g,C,I,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,E=d.length;M<E;M++){let _=d[M],p=a[_.materialIndex],C=Math.max(_.start,m.start),I=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let T=C,o=I;T<o;T+=3){let w=T,P=T+1,S=T+2;s=ma(this,p,t,n,h,f,g,w,P,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let M=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let _=M,p=E;_<p;_+=3){let C=_,I=_+1,T=_+2;s=ma(this,a,t,n,h,f,g,C,I,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Cd(i,t,e,n,s,r,a,l){let c;if(t.side===wn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===Gi,l),c===null)return null;pa.copy(l),pa.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(pa);return h<e.near||h>e.far?null:{distance:h,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,ha),i.getVertexPosition(c,ua),i.getVertexPosition(h,da);let f=Cd(i,t,e,n,ha,ua,da,jc);if(f){let g=new F;vi.getBarycoord(jc,ha,ua,da,g),s&&(f.uv=vi.getInterpolatedAttribute(s,l,c,h,g,new kt)),r&&(f.uv1=vi.getInterpolatedAttribute(r,l,c,h,g,new kt)),a&&(f.normal=vi.getInterpolatedAttribute(a,l,c,h,g,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a:l,b:c,c:h,normal:new F,materialIndex:0};vi.getNormal(ha,ua,da,d.normal),f.face=d,f.barycoord=g}return f}var Ha=class extends Tn{constructor(t=null,e=1,n=1,s,r,a,l,c,h=dn,f=dn,g,d){super(null,a,l,c,h,f,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=new Ni,Pd=new kt(.5,.5),ga=new F,zs=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],f=r[4],g=r[5],d=r[6],m=r[7],M=r[8],E=r[9],_=r[10],p=r[11],C=r[12],I=r[13],T=r[14],o=r[15];if(s[0].setComponents(h-a,m-f,p-M,o-C).normalize(),s[1].setComponents(h+a,m+f,p+M,o+C).normalize(),s[2].setComponents(h+l,m+g,p+E,o+I).normalize(),s[3].setComponents(h-l,m-g,p-E,o-I).normalize(),n)s[4].setComponents(c,d,_,T).normalize(),s[5].setComponents(h-c,m-d,p-_,o-T).normalize();else if(s[4].setComponents(h-c,m-d,p-_,o-T).normalize(),e===jn)s[5].setComponents(h+c,m+d,p+_,o+T).normalize();else if(e===Ds)s[5].setComponents(c,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);let e=Pd.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},za=new F,ka=new F,Qc=new He,ur=new Ei,_a=new Ni,Cl=new F,th=new F,Va=class extends fn{constructor(t=new pn,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)za.fromBufferAttribute(e,s-1),ka.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=za.distanceTo(ka);t.setAttribute("lineDistance",new tn(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;Qc.copy(s).invert(),ur.copy(t.ray).applyMatrix4(Qc);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){let m=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let E=m,_=M-1;E<_;E+=h){let p=f.getX(E),C=f.getX(E+1),I=xa(this,t,ur,c,p,C,E);I&&e.push(I)}if(this.isLineLoop){let E=f.getX(M-1),_=f.getX(m),p=xa(this,t,ur,c,E,_,M-1);p&&e.push(p)}}else{let m=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let E=m,_=M-1;E<_;E+=h){let p=xa(this,t,ur,c,E,E+1,E);p&&e.push(p)}if(this.isLineLoop){let E=xa(this,t,ur,c,M-1,m,M-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function xa(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(za.fromBufferAttribute(l,s),ka.fromBufferAttribute(l,r),e.distanceSqToSegment(za,ka,Cl,th)>n)return;Cl.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Cl);if(!(h<t.near||h>t.far))return{distance:h,point:th.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var eh=new F,nh=new F,Ga=class extends Va{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)eh.fromBufferAttribute(e,s),nh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eh.distanceTo(nh);t.setAttribute("lineDistance",new tn(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ks=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ih=new He,Ul=new Ei,ya=new Ni,va=new F,wr=class extends fn{constructor(t=new pn,e=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;ih.copy(s).invert(),Ul.copy(t.ray).applyMatrix4(ih);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,g=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=d,E=m;M<E;M++){let _=h.getX(M);va.fromBufferAttribute(g,_),sh(va,_,c,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let M=d,E=m;M<E;M++)va.fromBufferAttribute(g,M),sh(va,M,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function sh(i,t,e,n,s,r,a){let l=Ul.distanceSqToPoint(i);if(l<e){let c=new F;Ul.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ar=class extends Tn{constructor(t=[],e=Wi,n,s,r,a,l,c,h,f){super(t,e,n,s,r,a,l,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vs=class extends Tn{constructor(t,e,n,s,r,a,l,c,h){super(t,e,n,s,r,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends Tn{constructor(t,e,n=ei,s,r,a,l=dn,c=dn,h,f=oi,g=1){if(f!==oi&&f!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,l,c,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wa=class extends Ui{constructor(t,e=ei,n=Wi,s,r,a=dn,l=dn,c,h=oi){let f={width:t,height:t,depth:1},g=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,l,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rr=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Oi=class i extends pn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],f=[],g=[],d=0,m=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(g,2));function M(E,_,p,C,I,T,o,w,P,S,u){let b=T/P,U=o/S,z=T/2,V=o/2,D=w/2,W=P+1,$=S+1,J=0,ot=0,Z=new F;for(let it=0;it<$;it++){let at=it*U-V;for(let Gt=0;Gt<W;Gt++){let Ht=Gt*b-z;Z[E]=Ht*C,Z[_]=at*I,Z[p]=D,h.push(Z.x,Z.y,Z.z),Z[E]=0,Z[_]=0,Z[p]=w>0?1:-1,f.push(Z.x,Z.y,Z.z),g.push(Gt/P),g.push(1-it/S),J+=1}}for(let it=0;it<S;it++)for(let at=0;at<P;at++){let Gt=d+at+W*it,Ht=d+at+W*(it+1),Ne=d+(at+1)+W*(it+1),xe=d+(at+1)+W*it;c.push(Gt,Ht,xe),c.push(Ht,Ne,xe),ot+=6}l.addGroup(m,ot,u),m+=ot,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ns=class i extends pn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],g=[],d=[],m=[],M=0,E=[],_=n/2,p=0;C(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(f),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(m,2));function C(){let T=new F,o=new F,w=0,P=(e-t)/n;for(let S=0;S<=r;S++){let u=[],b=S/r,U=b*(e-t)+t;for(let z=0;z<=s;z++){let V=z/s,D=V*c+l,W=Math.sin(D),$=Math.cos(D);o.x=U*W,o.y=-b*n+_,o.z=U*$,g.push(o.x,o.y,o.z),T.set(W,P,$).normalize(),d.push(T.x,T.y,T.z),m.push(V,1-b),u.push(M++)}E.push(u)}for(let S=0;S<s;S++)for(let u=0;u<r;u++){let b=E[u][S],U=E[u+1][S],z=E[u+1][S+1],V=E[u][S+1];(t>0||u!==0)&&(f.push(b,U,V),w+=3),(e>0||u!==r-1)&&(f.push(U,z,V),w+=3)}h.addGroup(p,w,0),p+=w}function I(T){let o=M,w=new kt,P=new F,S=0,u=T===!0?t:e,b=T===!0?1:-1;for(let z=1;z<=s;z++)g.push(0,_*b,0),d.push(0,b,0),m.push(.5,.5),M++;let U=M;for(let z=0;z<=s;z++){let D=z/s*c+l,W=Math.cos(D),$=Math.sin(D);P.x=u*$,P.y=_*b,P.z=u*W,g.push(P.x,P.y,P.z),d.push(0,b,0),w.x=W*.5+.5,w.y=$*.5*b+.5,m.push(w.x,w.y),M++}for(let z=0;z<s;z++){let V=o+z,D=U+z;T===!0?f.push(D,D+1,V):f.push(D+1,D,V),S+=3}h.addGroup(p,S,T===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class i extends ns{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var is=class i extends pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,f=c+1,g=t/l,d=e/c,m=[],M=[],E=[],_=[];for(let p=0;p<f;p++){let C=p*d-a;for(let I=0;I<h;I++){let T=I*g-r;M.push(T,-C,0),E.push(0,0,1),_.push(I/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<l;C++){let I=C+h*p,T=C+h*(p+1),o=C+1+h*(p+1),w=C+1+h*p;m.push(I,T,w),m.push(T,o,w)}this.setIndex(m),this.setAttribute("position",new tn(M,3)),this.setAttribute("normal",new tn(E,3)),this.setAttribute("uv",new tn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Gs=class i extends pn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],f=[],g=[],d=new F,m=new F,M=new F;for(let E=0;E<=n;E++){let _=a+E/n*l;for(let p=0;p<=s;p++){let C=p/s*r;m.x=(t+e*Math.cos(_))*Math.cos(C),m.y=(t+e*Math.cos(_))*Math.sin(C),m.z=e*Math.sin(_),h.push(m.x,m.y,m.z),d.x=t*Math.cos(C),d.y=t*Math.sin(C),M.subVectors(m,d).normalize(),f.push(M.x,M.y,M.z),g.push(p/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let _=1;_<=s;_++){let p=(s+1)*E+_-1,C=(s+1)*(E-1)+_-1,I=(s+1)*(E-1)+_,T=(s+1)*E+_;c.push(p,C,T),c.push(C,I,T)}this.setIndex(c),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Cr=class extends Xn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rh(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function rh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var jh={clone:ls,merge:Sn},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xa=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ue=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pr=class extends Ue{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ya=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,l=2*e-n;break;case Fl:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,c=2*n-e;break;case Fl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,f=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,m=this._weightNext,M=(n-e)/(s-e),E=M*M,_=E*M,p=-d*_+2*d*E-d*M,C=(1+d)*_+(-1.5-2*d)*E+(-.5+d)*M+1,I=(-1-m)*_+(1.5+m)*E+.5*M,T=m*_-m*E;for(let o=0;o!==l;++o)r[o]=p*a[f+o]+C*a[h+o]+I*a[c+o]+T*a[g+o];return r}},Ja=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=(n-e)/(s-e),g=1-f;for(let d=0;d!==l;++d)r[d]=a[h+d]*g+a[c+d]*f;return r}},Ka=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends Bi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=this.inTangents,g=this.outTangents;if(!f||!g){let M=(n-e)/(s-e),E=1-M;for(let _=0;_!==l;++_)r[_]=a[h+_]*E+a[c+_]*M;return r}let d=l*2,m=t-1;for(let M=0;M!==l;++M){let E=a[h+M],_=a[c+M],p=m*d+M*2,C=g[p],I=g[p+1],T=t*d+M*2,o=f[T],w=f[T+1],P=Fd(n,e,C,o,s);r[M]=Qh(P,E,I,w,_)}return r}};function Qh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Nd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=Qh(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Nd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pl(t.settings)&&(n.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case Na:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break;case Ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pl(this.settings)&&(ah(this.settings.inTangents,t),ah(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Kt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){Kt("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&Ku(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){Kt("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],f=t[l+1];if(h!==f&&(l!==1||h!==t[0]))if(s)c=!0;else{let g=l*n,d=g-n,m=g+n;for(let M=0;M!==n;++M){let E=e[g+M];if(E!==e[d+M]||E!==e[m+M]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let g=l*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[g+m]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ah(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Na;var Hi=class extends Vn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=pr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";var Qa=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var to=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let f=h+l;h!==f;h+=4)zn.slerpFlat(r,0,a,h-l,a,h,c);return r}},Ir=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Vn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=pr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="vector";var no=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,l),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,g){return h.push(f,g),this},this.removeHandler=function(f){let g=h.indexOf(f);return g!==-1&&h.splice(g,2),this},this.getHandler=function(f){for(let g=0,d=h.length;g<d;g+=2){let m=h[g],M=h[g+1];if(m.global&&(m.lastIndex=0),m.test(f))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tu=new no,io=class{constructor(t){this.manager=t!==void 0?t:tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Il=new He,oh=new F,lh=new F,so=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ma=new F,Sa=new zn,ri=new F,Dr=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,Sa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ma,Sa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new F,ch=new kt,hh=new kt,vn=class extends Dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ws=class extends Dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ol=class extends so{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Ol}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Nr=class extends Lr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cs=-90,Ps=1,ro=class extends fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Cs,Ps,t,e);s.layers=this.layers,this.add(s);let r=new vn(Cs,Ps,t,e);r.layers=this.layers,this.add(r);let a=new vn(Cs,Ps,t,e);a.layers=this.layers,this.add(a);let l=new vn(Cs,Ps,t,e);l.layers=this.layers,this.add(l);let c=new vn(Cs,Ps,t,e);c.layers=this.layers,this.add(c);let h=new vn(Cs,Ps,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,f]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(g,d,m),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},ao=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dc="\\[\\]\\.:\\/",Ud=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Od="[^"+dc.replace("\\.","")+"]",Bd=/((?:WC+[\/:])*)/.source.replace("WC",fc),Hd=/(WCOD+)?/.source.replace("WCOD",Od),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Vd=new RegExp("^"+Bd+Hd+zd+kd+"$"),Gd=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ud,"")}static parseTrackName(t){let e=Vd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Bl;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var uh=new He,Fr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ei(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uh),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,n,e);return n.sort(dh),n}};function dh(i,t){return i.distance-t.distance}function Hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Hl(r[a],t,e,!0)}}var Xs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Ur=class extends Ga{constructor(t=10,e=10,n=4473924,s=8947848){n=new jt(n),s=new jt(s);let r=e/2,a=t/e,l=t/2,c=[],h=[];for(let d=0,m=0,M=-l;d<=e;d++,M+=a){c.push(-l,0,M,l,0,M),c.push(M,0,-l,M,0,l);let E=d===r?n:s;E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3}let f=new pn;f.setAttribute("position",new tn(c,3)),f.setAttribute("color",new tn(h,3));let g=new Tr({vertexColors:!0,toneMapped:!1});super(f,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Or=class extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function pc(i,t,e,n){let s=Wd(n);switch(e){case sc:return i*t;case ac:return i*t/s.components*s.byteLength;case mo:return i*t/s.components*s.byteLength;case qi:return i*t*2/s.components*s.byteLength;case go:return i*t*2/s.components*s.byteLength;case rc:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case _o:return i*t*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:case Mo:return Math.max(i,16)*Math.max(t,8)/4;case xo:case vo:return Math.max(i,8)*Math.max(t,8)/2;case So:case bo:case To:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case Yr:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Go:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qr:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wd(i){switch(i){case In:case tc:return{byteLength:1,components:1};case Zs:case ec:case ii:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case ei:case uo:case ni:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);function Su(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){let t=new WeakMap;function e(l,c){let h=l.array,f=l.usage,g=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,f),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,h){let f=c.array,g=c.updateRanges;if(i.bindBuffer(h,l),g.length===0)i.bufferSubData(h,0,f);else{g.sort((m,M)=>m.start-M.start);let d=0;for(let m=1;m<g.length;m++){let M=g[d],E=g[m];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++d,g[d]=E)}g.length=d+1;for(let m=0,M=g.length;m<M;m++){let E=g[m];i.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`uniform sampler2D dfgLUT;
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
}`,Yf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,n0=`#define DISTANCE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,p0=`#define NORMAL
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
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,v0=`#define TOON
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
}`,M0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,T0=`uniform float rotation;
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
}`,w0=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Yd,alphahash_pars_fragment:qd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Kd,alphatest_pars_fragment:$d,aomap_fragment:jd,aomap_pars_fragment:Qd,batching_pars_vertex:tf,batching_vertex:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:yf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:bf,colorspace_pars_fragment:Ef,envmap_fragment:Tf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Hf,envmap_vertex:Cf,fog_vertex:Pf,fog_pars_vertex:If,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:zf,lights_toon_pars_fragment:kf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:Yf,lights_fragment_maps:qf,lights_fragment_end:Zf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Fp,skinnormal_vertex:Up,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:Hp,tonemapping_pars_fragment:zp,transmission_fragment:kp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:Yp,background_vert:qp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Kp,cube_vert:$p,cube_frag:jp,depth_vert:Qp,depth_frag:t0,distance_vert:e0,distance_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:v0,points_vert:M0,points_frag:S0,shadow_vert:b0,shadow_frag:E0,sprite_vert:T0,sprite_frag:w0},Rt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ui={basic:{uniforms:Sn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Sn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Sn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Sn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Sn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new jt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Sn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Sn([Rt.points,Rt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Sn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Sn([Rt.common,Rt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Sn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Sn([Rt.sprite,Rt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Sn([Rt.common,Rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Sn([Rt.lights,Rt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ui.physical={uniforms:Sn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var $o={r:0,b:0,g:0},A0=new He,bu=new ie;bu.set(-1,0,0,0,1,0,0,0,1);function R0(i,t,e,n,s,r){let a=new jt(0),l=s===!0?0:1,c,h,f=null,g=0,d=null;function m(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){let T=C.backgroundBlurriness>0;I=t.get(I,T)}return I}function M(C){let I=!1,T=m(C);T===null?_(a,l):T&&T.isColor&&(_(T,1),I=!0);let o=i.xr.getEnvironmentBlendMode();o==="additive"?e.buffers.color.setClear(0,0,0,1,r):o==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(C,I){let T=m(I);T&&(T.isCubeTexture||T.mapping===zr)?(h===void 0&&(h=new qe(new Oi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ls(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(o,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(I.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(bu),h.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ce,(f!==T||g!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,g=T.version,d=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new qe(new is(2,2),new kn({name:"BackgroundMaterial",uniforms:ls(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||g!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,g=T.version,d=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function _(C,I){C.getRGB($o,uc(i)),e.buffers.color.setClear($o.r,$o.g,$o.b,I,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,I=1){a.set(C),l=I,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,_(a,l)},render:M,addToRenderList:E,dispose:p}}function C0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function l(U,z,V,D,W){let $=!1,J=g(U,D,V,z);r!==J&&(r=J,h(r.object)),$=m(U,D,V,W),$&&M(U,D,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(U,z,V,D),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function h(U){return i.bindVertexArray(U)}function f(U){return i.deleteVertexArray(U)}function g(U,z,V,D){let W=D.wireframe===!0,$=n[z.id];$===void 0&&($={},n[z.id]=$);let J=U.isInstancedMesh===!0?U.id:0,ot=$[J];ot===void 0&&(ot={},$[J]=ot);let Z=ot[V.id];Z===void 0&&(Z={},ot[V.id]=Z);let it=Z[W];return it===void 0&&(it=d(c()),Z[W]=it),it}function d(U){let z=[],V=[],D=[];for(let W=0;W<e;W++)z[W]=0,V[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:D,object:U,attributes:{},index:null}}function m(U,z,V,D){let W=r.attributes,$=z.attributes,J=0,ot=V.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let at=W[Z],Gt=$[Z];if(Gt===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Gt=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Gt=U.instanceColor)),at===void 0||at.attribute!==Gt||Gt&&at.data!==Gt.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function M(U,z,V,D){let W={},$=z.attributes,J=0,ot=V.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let at=$[Z];at===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));let Gt={};Gt.attribute=at,at&&at.data&&(Gt.data=at.data),W[Z]=Gt,J++}r.attributes=W,r.attributesNum=J,r.index=D}function E(){let U=r.newAttributes;for(let z=0,V=U.length;z<V;z++)U[z]=0}function _(U){p(U,0)}function p(U,z){let V=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;V[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),W[U]!==z&&(i.vertexAttribDivisor(U,z),W[U]=z)}function C(){let U=r.newAttributes,z=r.enabledAttributes;for(let V=0,D=z.length;V<D;V++)z[V]!==U[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function I(U,z,V,D,W,$,J){J===!0?i.vertexAttribIPointer(U,z,V,W,$):i.vertexAttribPointer(U,z,V,D,W,$)}function T(U,z,V,D){E();let W=D.attributes,$=V.getAttributes(),J=z.defaultAttributeValues;for(let ot in $){let Z=$[ot];if(Z.location>=0){let it=W[ot];if(it===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(it=U.instanceColor)),it!==void 0){let at=it.normalized,Gt=it.itemSize,Ht=t.get(it);if(Ht===void 0)continue;let Ne=Ht.buffer,xe=Ht.type,ee=Ht.bytesPerElement,K=xe===i.INT||xe===i.UNSIGNED_INT||it.gpuType===uo;if(it.isInterleavedBufferAttribute){let nt=it.data,Ut=nt.stride,Qt=it.offset;if(nt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Z.locationSize;Pt++)p(Z.location+Pt,nt.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Pt=0;Pt<Z.locationSize;Pt++)_(Z.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Pt=0;Pt<Z.locationSize;Pt++)I(Z.location+Pt,Gt/Z.locationSize,xe,at,Ut*ee,(Qt+Gt/Z.locationSize*Pt)*ee,K)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<Z.locationSize;nt++)p(Z.location+nt,it.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<Z.locationSize;nt++)_(Z.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let nt=0;nt<Z.locationSize;nt++)I(Z.location+nt,Gt/Z.locationSize,xe,at,Gt*ee,Gt/Z.locationSize*nt*ee,K)}}else if(J!==void 0){let at=J[ot];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(Z.location,at);break;case 3:i.vertexAttrib3fv(Z.location,at);break;case 4:i.vertexAttrib4fv(Z.location,at);break;default:i.vertexAttrib1fv(Z.location,at)}}}}C()}function o(){u();for(let U in n){let z=n[U];for(let V in z){let D=z[V];for(let W in D){let $=D[W];for(let J in $)f($[J].object),delete $[J];delete D[W]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let V in z){let D=z[V];for(let W in D){let $=D[W];for(let J in $)f($[J].object),delete $[J];delete D[W]}}delete n[U.id]}function P(U){for(let z in n){let V=n[z];for(let D in V){let W=V[D];if(W[U.id]===void 0)continue;let $=W[U.id];for(let J in $)f($[J].object),delete $[J];delete W[U.id]}}}function S(U){for(let z in n){let V=n[z],D=U.isInstancedMesh===!0?U.id:0,W=V[D];if(W!==void 0){for(let $ in W){let J=W[$];for(let ot in J)f(J[ot].object),delete J[ot];delete W[$]}delete V[D],Object.keys(V).length===0&&delete n[z]}}}function u(){b(),a=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:u,resetDefaultState:b,dispose:o,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:_,disableUnusedAttributes:C}}function P0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function l(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function I0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let S=P===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==In&&P!==ni&&!S&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=c(h);f!==h&&(Zt("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),o=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:T,maxSamples:o,samples:w}}function L0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,l=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let m=g.length!==0||d||n!==0||s;return s=d,n=g.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=f(g,d,0)},this.setState=function(g,d,m){let M=g.clippingPlanes,E=g.clipIntersection,_=g.clipShadows,p=i.get(g);if(!s||M===null||M.length===0||r&&!_)r?f(null):h();else{let C=r?0:n,I=C*4,T=p.clippingState||null;c.value=T,T=f(M,d,I,m);for(let o=0;o!==I;++o)T[o]=e[o];p.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(g,d,m,M){let E=g!==null?g.length:0,_=null;if(E!==0){if(_=c.value,M!==!0||_===null){let p=m+E*4,C=d.matrixWorldInverse;l.getNormalMatrix(C),(_===null||_.length<p)&&(_=new Float32Array(p));for(let I=0,T=m;I!==E;++I,T+=4)a.copy(g[I]).applyMatrix4(C,l),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,_}}var $s=4,D0=6,N0=20,F0=256,Zr=new Ws,eu=new jt,mc=null,gc=0,_c=0,xc=!1,U0=new F,cs=new F,Qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=U0}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=xc,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:ii,format:Yn,colorSpace:mr,depthBuffer:!1},s=nu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=O0(r)),this._blurMaterial=H0(r,t,e),this._ggxMaterial=B0(r,t,e)}return s}_compileMaterial(t){let e=new qe(new pn,t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,s,r){let c=new vn(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,m=g.toneMapping;g.getClearColor(eu),g.toneMapping=ti,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new Oi,new Fi({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,_=E.material,p=!1,C=t.background;C?C.isColor&&(_.color.copy(C),t.background=null,p=!0):(_.color.copy(eu),p=!0);for(let I=0;I<6;I++){let T=I%3;T===0?(c.up.set(0,h[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[I],r.y,r.z)):T===1?(c.up.set(0,0,h[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[I],r.z)):(c.up.set(0,h[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[I]));let o=this._cubeSize;Ks(s,T*o,I>2?o:0,o,o),g.setRenderTarget(s),p&&g.render(E,c),g.render(t,c)}g.toneMapping=m,g.autoClear=d,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-f*f),d=h*1.25,m=g*d,{_lodMax:M}=this,E=this._sizeLods[n],_=3*E*(n>M-$s?n-M+$s:0),p=4*(this._cubeSize-E);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=M-e,Ks(r,_,p,3*E,2*E),s.setRenderTarget(r),s.render(l,Zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,Ks(t,_,p,3*E,2*E),s.setRenderTarget(t),s.render(l,Zr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],g=3*f*(s>this._lodMax-$s?s-this._lodMax+$s:0),d=4*(this._cubeSize-f);Ks(e,g,d,3*f,2*f),a.setRenderTarget(e),a.render(c,Zr)}};function O0(i){let t=[],e=[],n=i,s=i-$s+1+D0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,d=6,m=3,M=new Float32Array(m*d*g),E=new Float32Array(m*d*g);for(let p=0;p<g;p++){let C=p%3*2/3-1,I=p>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(T,m*d*p);for(let o=0;o<d;o++){let w=f[o*2]*2-1,P=f[o*2+1]*2-1;p===0?cs.set(1,P,w):p===1?cs.set(-w,1,-P):p===2?cs.set(-w,P,1):p===3?cs.set(-1,P,-w):p===4?cs.set(-w,-1,P):cs.set(w,P,-1),cs.toArray(E,(p*d+o)*m)}}let _=new pn;_.setAttribute("position",new Mn(M,m)),_.setAttribute("outputDirection",new Mn(E,m)),e.push(new qe(_,null)),n>$s&&n--}return{lodMeshes:e,sizeLods:t}}function nu(i,t,e){let n=new Pn(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function B0(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function H0(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:N0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function iu(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function su(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tl=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:ci});r.uniforms.tEquirect.value=e;let a=new qe(s,r),l=e.minFilter;return e.minFilter===Xi&&(e.minFilter=an),new ro(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function z0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===lo||m===co)if(t.has(d)){let M=t.get(d).texture;return l(M,d.mapping)}else{let M=d.image;if(M&&M.height>0){let E=new tl(M.height);return E.fromEquirectangularTexture(i,d),t.set(d,E),d.addEventListener("dispose",h),l(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,M=m===lo||m===co,E=m===Wi||m===os;if(M||E){let _=e.get(d),p=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Qo(i)),_=M?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let C=d.image;return M&&C&&C.height>0||E&&C&&c(C)?(n===null&&(n=new Qo(i)),_=M?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function l(d,m){return m===lo?d.mapping=Wi:m===co&&(d.mapping=os),d}function c(d){let m=0,M=6;for(let E=0;E<M;E++)d[E]!==void 0&&m++;return m===M}function h(d){let m=d.target;m.removeEventListener("dispose",h);let M=t.get(m);M!==void 0&&(t.delete(m),M.dispose())}function f(d){let m=d.target;m.removeEventListener("dispose",f);let M=e.get(m);M!==void 0&&(e.delete(m),M.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function k0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function V0(i,t,e,n){let s={},r=new WeakMap;function a(g){let d=g.target;d.index!==null&&t.remove(d.index);for(let M in d.attributes)t.remove(d.attributes[M]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(g,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(g){let d=g.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER)}function h(g){let d=[],m=g.index,M=g.attributes.position,E=0;if(M===void 0)return;if(m!==null){let C=m.array;E=m.version;for(let I=0,T=C.length;I<T;I+=3){let o=C[I+0],w=C[I+1],P=C[I+2];d.push(o,w,w,P,P,o)}}else{let C=M.array;E=M.version;for(let I=0,T=C.length/3-1;I<T;I+=3){let o=I+0,w=I+1,P=I+2;d.push(o,w,w,P,P,o)}}let _=new(M.count>=65535?Sr:Mr)(d,1);_.version=E;let p=r.get(g);p&&t.remove(p),r.set(g,_)}function f(g){let d=r.get(g);if(d){let m=g.index;m!==null&&d.version<m.version&&h(g)}else h(g);return r.get(g)}return{get:l,update:c,getWireframeAttribute:f}}function G0(i,t,e){let n;function s(g){n=g}let r,a;function l(g){r=g.type,a=g.bytesPerElement}function c(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function h(g,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,g*a,m),e.update(d,n,m))}function f(g,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,m);let E=0;for(let _=0;_<m;_++)E+=d[_];e.update(E,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function W0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function X0(i,t,e){let n=new WeakMap,s=new Ye;function r(a,l,c){let h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0,d=n.get(l);if(d===void 0||d.count!==g){let u=function(){P.dispose(),n.delete(l),l.removeEventListener("dispose",u)};d!==void 0&&d.texture.dispose();let m=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],C=l.morphAttributes.color||[],I=0;m===!0&&(I=1),M===!0&&(I=2),E===!0&&(I=3);let T=l.attributes.position.count*I,o=1;T>t.maxTextureSize&&(o=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*o*4*g),P=new yr(w,T,o,g);P.type=ni,P.needsUpdate=!0;let S=I*4;for(let b=0;b<g;b++){let U=_[b],z=p[b],V=C[b],D=T*o*4*b;for(let W=0;W<U.count;W++){let $=W*S;m===!0&&(s.fromBufferAttribute(U,W),w[D+$+0]=s.x,w[D+$+1]=s.y,w[D+$+2]=s.z,w[D+$+3]=0),M===!0&&(s.fromBufferAttribute(z,W),w[D+$+4]=s.x,w[D+$+5]=s.y,w[D+$+6]=s.z,w[D+$+7]=0),E===!0&&(s.fromBufferAttribute(V,W),w[D+$+8]=s.x,w[D+$+9]=s.y,w[D+$+10]=s.z,w[D+$+11]=V.itemSize===4?s.w:1)}}d={count:g,texture:P,size:new kt(T,o)},n.set(l,d),l.addEventListener("dispose",u)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let E=0;E<h.length;E++)m+=h[E];let M=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Y0(i,t,e,n,s){let r=new WeakMap;function a(h){let f=s.render.frame,g=h.geometry,d=t.get(h,g);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==f&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){let m=h.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return d}function l(){r=new WeakMap}function c(h){let f=h.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var q0={[ql]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Hr]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[jl]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function Z0(i,t,e,n,s,r){let a=new Pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new pn;h.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tn([0,2,0,0,2,0],2));let f=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new qe(h,f),d=new Ws(-1,1,1,-1,0,1),m=null,M=null,E=!1,_,p=null,C=[],I=!1;this.setSize=function(T,o){a.setSize(T,o),l!==null&&l.setSize(T,o),c!==null&&c.setSize(T,o);for(let w=0;w<C.length;w++){let P=C[w];P.setSize&&P.setSize(T,o)}},this.setEffects=function(T){C=T,I=C.length>0&&C[0].isRenderPass===!0;let o=a.width,w=a.height;C.length>0&&l===null&&(l=new Pn(o,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new Pn(o,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<C.length;P++){let S=C[P];S.setSize&&S.setSize(o,w)}},this.begin=function(T,o){if(E||T.toneMapping===ti&&C.length===0)return!1;if(p=o,o!==null){let w=o.width,P=o.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return I===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=ti,!0},this.hasRenderPass=function(){return I},this.end=function(T,o){T.toneMapping=_,E=!0;let w=a,P=l;for(let S=0;S<C.length;S++){let u=C[S];u.enabled!==!1&&(u.render(T,P,w,o),u.needsSwap!==!1&&(w=P,P=P===l?c:l))}if(m!==T.outputColorSpace||M!==T.toneMapping){m=T.outputColorSpace,M=T.toneMapping,f.defines={},Me.getTransfer(m)===Ce&&(f.defines.SRGB_TRANSFER="");let S=q0[M];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(p),T.render(g,d),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Eu=new Tn,Mc=new Ui(1,1),Tu=new yr,wu=new Oa,Au=new Ar,ru=[],au=[],ou=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function il(i,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function Q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),ln(e,n)}}function tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),ln(e,n)}}function em(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),ln(e,n)}}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=e.isReversedDepthBuffer()?Ko:Jo,r=Mc):r=Eu,e.setTexture2D(t||r,s)}function um(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function dm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Au,s)}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tu,s)}function pm(i){switch(i){case 5126:return J0;case 35664:return K0;case 35665:return $0;case 35666:return j0;case 35674:return Q0;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(i,t){i.uniform1fv(this.addr,t)}function gm(i,t){let e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function _m(i,t){let e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function xm(i,t){let e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function ym(i,t){let e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vm(i,t){let e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mm(i,t){let e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sm(i,t){i.uniform1iv(this.addr,t)}function bm(i,t){i.uniform2iv(this.addr,t)}function Em(i,t){i.uniform3iv(this.addr,t)}function Tm(i,t){i.uniform4iv(this.addr,t)}function wm(i,t){i.uniform1uiv(this.addr,t)}function Am(i,t){i.uniform2uiv(this.addr,t)}function Rm(i,t){i.uniform3uiv(this.addr,t)}function Cm(i,t){i.uniform4uiv(this.addr,t)}function Pm(i,t,e){let n=this.cache,s=t.length,r=il(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mc:a=Eu;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Im(i,t,e){let n=this.cache,s=t.length,r=il(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||wu,r[a])}function Lm(i,t,e){let n=this.cache,s=t.length,r=il(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Au,r[a])}function Dm(i,t,e){let n=this.cache,s=t.length,r=il(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tu,r[a])}function Nm(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return bm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Dm}}var Sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pm(e.type)}},bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nm(e.type)}},Ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function hu(i,t){i.seq.push(t),i.map[t.id]=t}function Fm(i,t,e){let n=i.name,s=n.length;for(yc.lastIndex=0;;){let r=yc.exec(n),a=yc.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){hu(e,h===void 0?new Sc(l,i,t):new bc(l,i,t));break}else{let g=e.map[l];g===void 0&&(g=new Ec(l),hu(e,g)),e=g}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);Fm(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function uu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Um=37297,Om=0;function Bm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var du=new ie;function Hm(i){Me._getMatrix(du,Me.workingColorSpace,i);let t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bm(i.getShaderSource(t),l)}else return r}function zm(i,t){let e=Hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var km={[ql]:"Linear",[Zl]:"Reinhard",[Jl]:"Cineon",[Hr]:"ACESFilmic",[$l]:"AgX",[jl]:"Neutral",[Kl]:"Custom"};function Vm(i,t){let e=km[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jo=new F;function Gm(){Me.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),t=jo.y.toFixed(4),e=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Xm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ym(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Kr(i){return i!==""}function pu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(qm,Jm)}var Zm=new Map;function Jm(i,t){let e=me[t];if(e===void 0){let n=Zm.get(t);if(n!==void 0)e=me[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tc(e)}var Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(Km,$m)}function $m(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jm={[rs]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Qm(i){return jm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tg={[Wi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function eg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ng={[os]:"ENVMAP_MODE_REFRACTION"};function ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sg={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Fh]:"ENVMAP_BLENDING_ADD"};function rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sg[i.combine]||"ENVMAP_BLENDING_NONE"}function ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function og(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=Qm(e),h=eg(e),f=ig(e),g=rg(e),d=ag(e),m=Wm(e),M=Xm(r),E=s.createProgram(),_,p,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Kr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(_=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?me.tonemapping_pars_fragment:"",e.toneMapping!==ti?Vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,zm("linearToOutputTexel",e.outputColorSpace),Gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Tc(a),a=pu(a,e),a=mu(a,e),l=Tc(l),l=pu(l,e),l=mu(l,e),a=gu(a),l=gu(l),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=C+_+a,T=C+p+l,o=uu(s,s.VERTEX_SHADER,I),w=uu(s,s.FRAGMENT_SHADER,T);s.attachShader(E,o),s.attachShader(E,w),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(E)||"",V=s.getShaderInfoLog(o)||"",D=s.getShaderInfoLog(w)||"",W=z.trim(),$=V.trim(),J=D.trim(),ot=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,o,w);else{let it=fu(s,o,"vertex"),at=fu(s,w,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+it+`
`+at)}else W!==""?Zt("WebGLProgram: Program Info Log:",W):($===""||J==="")&&(Z=!1);Z&&(U.diagnostics={runnable:ot,programLog:W,vertexShader:{log:$,prefix:_},fragmentShader:{log:J,prefix:p}})}s.deleteShader(o),s.deleteShader(w),S=new js(s,E),u=Ym(s,E)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let u;this.getAttributes=function(){return u===void 0&&P(this),u};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,Um)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Om++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=o,this.fragmentShader=w,this}var lg=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ac(t),e.set(t,n)),n}},Ac=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function cg(i){return i===qi||i===Yr||i===qr}function hg(i,t,e,n,s,r){let a=new Os,l=new wc,c=new Set,h=[],f=new Map,g=n.logarithmicDepthBuffer,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function E(S,u,b,U,z,V){let D=U.fog,W=z.geometry,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ot=t.get(S.envMap||$,J),Z=ot&&ot.mapping===zr?ot.image.height:null,it=m[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&Zt("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=at!==void 0?at.length:0,Ht=0;W.morphAttributes.position!==void 0&&(Ht=1),W.morphAttributes.normal!==void 0&&(Ht=2),W.morphAttributes.color!==void 0&&(Ht=3);let Ne,xe,ee,K;if(it){let Pe=ui[it];Ne=Pe.vertexShader,xe=Pe.fragmentShader}else{Ne=S.vertexShader,xe=S.fragmentShader;let Pe=l.getVertexShaderStage(S),Te=l.getFragmentShaderStage(S);l.update(S,Pe,Te),ee=Pe.id,K=Te.id}let nt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Qt=z.isInstancedMesh===!0,Pt=z.isBatchedMesh===!0,ue=!!S.map,Ze=!!S.matcap,oe=!!ot,Se=!!S.aoMap,we=!!S.lightMap,se=!!S.bumpMap&&S.wireframe===!1,Oe=!!S.normalMap,en=!!S.displacementMap,Ke=!!S.emissiveMap,ze=!!S.metalnessMap,Je=!!S.roughnessMap,N=S.anisotropy>0,nn=S.clearcoat>0,Ee=S.dispersion>0,A=S.retroreflectivity>0,x=S.iridescence>0,H=S.sheen>0,G=S.transmission>0,X=N&&!!S.anisotropyMap,dt=nn&&!!S.clearcoatMap,mt=nn&&!!S.clearcoatNormalMap,Y=nn&&!!S.clearcoatRoughnessMap,et=x&&!!S.iridescenceMap,yt=x&&!!S.iridescenceThicknessMap,Bt=H&&!!S.sheenColorMap,Mt=H&&!!S.sheenRoughnessMap,vt=!!S.specularMap,Ot=!!S.specularColorMap,Xt=!!S.specularIntensityMap,ne=G&&!!S.transmissionMap,L=G&&!!S.thicknessMap,gt=!!S.gradientMap,j=!!S.alphaMap,_t=S.alphaTest>0,Ct=!!S.alphaHash,rt=!!S.extensions,zt=ti;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(zt=i.toneMapping);let xt={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Ne,fragmentShader:xe,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Pt,batchingColor:Pt&&z._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&z.instanceColor!==null,instancingMorph:Qt&&z.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:Ze,envMap:oe,envMapMode:oe&&ot.mapping,envMapCubeUVHeight:Z,aoMap:Se,lightMap:we,bumpMap:se,normalMap:Oe,displacementMap:en,emissiveMap:Ke,normalMapObjectSpace:Oe&&S.normalMapType===Bh,normalMapTangentSpace:Oe&&S.normalMapType===Zo,packedNormalMap:Oe&&S.normalMapType===Zo&&cg(S.normalMap.format),metalnessMap:ze,roughnessMap:Je,anisotropy:N,anisotropyMap:X,clearcoat:nn,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Y,dispersion:Ee,retroreflection:A,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:yt,sheen:H,sheenColorMap:Bt,sheenRoughnessMap:Mt,specularMap:vt,specularColorMap:Ot,specularIntensityMap:Xt,transmission:G,transmissionMap:ne,thicknessMap:L,gradientMap:gt,opaque:S.transparent===!1&&S.blending===qs&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:Ct,combine:S.combine,mapUv:ue&&M(S.map.channel),aoMapUv:Se&&M(S.aoMap.channel),lightMapUv:we&&M(S.lightMap.channel),bumpMapUv:se&&M(S.bumpMap.channel),normalMapUv:Oe&&M(S.normalMap.channel),displacementMapUv:en&&M(S.displacementMap.channel),emissiveMapUv:Ke&&M(S.emissiveMap.channel),metalnessMapUv:ze&&M(S.metalnessMap.channel),roughnessMapUv:Je&&M(S.roughnessMap.channel),anisotropyMapUv:X&&M(S.anisotropyMap.channel),clearcoatMapUv:dt&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:mt&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&M(S.sheenRoughnessMap.channel),specularMapUv:vt&&M(S.specularMap.channel),specularColorMapUv:Ot&&M(S.specularColorMap.channel),specularIntensityMapUv:Xt&&M(S.specularIntensityMap.channel),transmissionMapUv:ne&&M(S.transmissionMap.channel),thicknessMapUv:L&&M(S.thicknessMap.channel),alphaMapUv:j&&M(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Oe||N),vertexNormals:!!W.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(ue||j),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&Oe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ut,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:Ht,numSunLights:u.sun.length,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numSunLightShadows:u.sunShadowMap.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&Me.getTransfer(S.map.colorSpace)===Ce,decodeVideoTextureEmissive:Ke&&S.emissiveMap.isVideoTexture===!0&&Me.getTransfer(S.emissiveMap.colorSpace)===Ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Le,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:rt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&S.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function _(S){let u=[];if(S.shaderID?u.push(S.shaderID):(u.push(S.customVertexShaderID),u.push(S.customFragmentShaderID)),S.defines!==void 0)for(let b in S.defines)u.push(b),u.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(p(u,S),C(u,S),u.push(i.outputColorSpace)),u.push(S.customProgramCacheKey),u.join()}function p(S,u){S.push(u.precision),S.push(u.outputColorSpace),S.push(u.envMapMode),S.push(u.envMapCubeUVHeight),S.push(u.mapUv),S.push(u.alphaMapUv),S.push(u.lightMapUv),S.push(u.aoMapUv),S.push(u.bumpMapUv),S.push(u.normalMapUv),S.push(u.displacementMapUv),S.push(u.emissiveMapUv),S.push(u.metalnessMapUv),S.push(u.roughnessMapUv),S.push(u.anisotropyMapUv),S.push(u.clearcoatMapUv),S.push(u.clearcoatNormalMapUv),S.push(u.clearcoatRoughnessMapUv),S.push(u.iridescenceMapUv),S.push(u.iridescenceThicknessMapUv),S.push(u.sheenColorMapUv),S.push(u.sheenRoughnessMapUv),S.push(u.specularMapUv),S.push(u.specularColorMapUv),S.push(u.specularIntensityMapUv),S.push(u.transmissionMapUv),S.push(u.thicknessMapUv),S.push(u.combine),S.push(u.fogExp2),S.push(u.sizeAttenuation),S.push(u.morphTargetsCount),S.push(u.morphAttributeCount),S.push(u.numSunLights),S.push(u.numDirLights),S.push(u.numPointLights),S.push(u.numSpotLights),S.push(u.numSpotLightMaps),S.push(u.numHemiLights),S.push(u.numRectAreaLights),S.push(u.numSunLightShadows),S.push(u.numDirLightShadows),S.push(u.numPointLightShadows),S.push(u.numSpotLightShadows),S.push(u.numSpotLightShadowsWithMaps),S.push(u.numLightProbes),S.push(u.shadowMapType),S.push(u.toneMapping),S.push(u.numClippingPlanes),S.push(u.numClipIntersection),S.push(u.depthPacking)}function C(S,u){a.disableAll(),u.instancing&&a.enable(0),u.instancingColor&&a.enable(1),u.instancingMorph&&a.enable(2),u.matcap&&a.enable(3),u.envMap&&a.enable(4),u.normalMapObjectSpace&&a.enable(5),u.normalMapTangentSpace&&a.enable(6),u.clearcoat&&a.enable(7),u.iridescence&&a.enable(8),u.alphaTest&&a.enable(9),u.vertexColors&&a.enable(10),u.vertexAlphas&&a.enable(11),u.vertexUv1s&&a.enable(12),u.vertexUv2s&&a.enable(13),u.vertexUv3s&&a.enable(14),u.vertexTangents&&a.enable(15),u.anisotropy&&a.enable(16),u.alphaHash&&a.enable(17),u.batching&&a.enable(18),u.dispersion&&a.enable(19),u.retroreflection&&a.enable(24),u.batchingColor&&a.enable(20),u.gradientMap&&a.enable(21),u.packedNormalMap&&a.enable(22),u.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),u.fog&&a.enable(0),u.useFog&&a.enable(1),u.flatShading&&a.enable(2),u.logarithmicDepthBuffer&&a.enable(3),u.reversedDepthBuffer&&a.enable(4),u.skinning&&a.enable(5),u.morphTargets&&a.enable(6),u.morphNormals&&a.enable(7),u.morphColors&&a.enable(8),u.premultipliedAlpha&&a.enable(9),u.shadowMapEnabled&&a.enable(10),u.doubleSided&&a.enable(11),u.flipSided&&a.enable(12),u.useDepthPacking&&a.enable(13),u.dithering&&a.enable(14),u.transmission&&a.enable(15),u.sheen&&a.enable(16),u.opaque&&a.enable(17),u.pointsUvs&&a.enable(18),u.decodeVideoTexture&&a.enable(19),u.decodeVideoTextureEmissive&&a.enable(20),u.alphaToCoverage&&a.enable(21),u.numLightProbeGrids>0&&a.enable(22),u.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function I(S){let u=m[S.type],b;if(u){let U=ui[u];b=jh.clone(U.uniforms)}else b=S.uniforms;return b}function T(S,u){let b=f.get(u);return b!==void 0?++b.usedTimes:(b=new og(i,u,S,s),h.push(b),f.set(u,b)),b}function o(S){if(--S.usedTimes===0){let u=h.indexOf(S);h[u]=h[h.length-1],h.pop(),f.delete(S.cacheKey),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:I,acquireProgram:T,releaseProgram:o,releaseShaderCache:w,programs:h,dispose:P}}function ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function l(d,m,M,E,_,p){let C=i[t];return C===void 0?(C={id:d.id,object:d,geometry:m,material:M,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:_,group:p},i[t]=C):(C.id=d.id,C.object=d,C.geometry=m,C.material=M,C.materialVariant=a(d),C.groupOrder=E,C.renderOrder=d.renderOrder,C.z=_,C.group=p),t++,C}function c(d,m,M,E,_,p,C){C.reversedDepth===!0&&(_=-_);let I=l(d,m,M,E,_,p);M.transmission>0?n.push(I):M.transparent===!0?s.push(I):e.push(I)}function h(d,m,M,E,_,p){let C=l(d,m,M,E,_,p);M.transmission>0?n.unshift(C):M.transparent===!0?s.unshift(C):e.unshift(C)}function f(d,m){e.length>1&&e.sort(d||dg),n.length>1&&n.sort(m||xu),s.length>1&&s.sort(m||xu)}function g(){for(let d=t,m=i.length;d<m;d++){let M=i[d];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:f}}function fg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new yu,i.set(n,[a])):s>=r.length?(a=new yu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new jt};break;case"SpotLight":e={position:new F,direction:new F,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gg=0;function _g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i){let t=new pg,e=mg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);let s=new F,r=new He,a=new He;function l(h){let f=0,g=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,M=0,E=0,_=0,p=0,C=0,I=0,T=0,o=0,w=0,P=0,S=0,u=0,b=0;h.sort(_g);for(let z=0,V=h.length;z<V;z++){let D=h[z],W=D.color,$=D.intensity,J=D.distance,ot=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===qi?ot=D.shadow.map.texture:ot=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=W.r*$,g+=W.g*$,d+=W.b*$;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],$);b++}else if(D.isSunLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,at=e.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[M]=at,n.sunShadowMap[M]=ot;let Gt=it.getViewportCount();for(let Ht=0;Ht<Gt;Ht++)n.sunShadowMatrix[E+Ht]=it.getMatrix(Ht),n.sunShadowCascade[E+Ht]=it._cascadeData[Ht];E+=Gt,M++}n.sun[m]=Z,m++}else if(D.isDirectionalLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,at=e.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.directionalShadow[_]=at,n.directionalShadowMap[_]=ot,n.directionalShadowMatrix[_]=D.shadow.matrix,o++}n.directional[_]=Z,_++}else if(D.isSpotLight){let Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(W).multiplyScalar($),Z.distance=J,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[C]=Z;let it=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,it.updateMatrices(D),D.castShadow&&u++),n.spotLightMatrix[C]=it.matrix,D.castShadow){let at=e.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.spotShadow[C]=at,n.spotShadowMap[C]=ot,P++}C++}else if(D.isRectAreaLight){let Z=t.get(D);Z.color.copy(W).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=Z,I++}else if(D.isPointLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let it=D.shadow,at=e.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=Z,p++}else if(D.isHemisphereLight){let Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar($),Z.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[T]=Z,T++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=d;let U=n.hash;(U.sunLength!==m||U.directionalLength!==_||U.pointLength!==p||U.spotLength!==C||U.rectAreaLength!==I||U.hemiLength!==T||U.numSunShadows!==M||U.numDirectionalShadows!==o||U.numPointShadows!==w||U.numSpotShadows!==P||U.numSpotMaps!==S||U.numLightProbes!==b)&&(n.sun.length=m,n.directional.length=_,n.spot.length=C,n.rectArea.length=I,n.point.length=p,n.hemi.length=T,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=o,n.directionalShadowMap.length=o,n.directionalShadowMatrix.length=o,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+S-u,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=b,U.sunLength=m,U.directionalLength=_,U.pointLength=p,U.spotLength=C,U.rectAreaLength=I,U.hemiLength=T,U.numSunShadows=M,U.numDirectionalShadows=o,U.numPointShadows=w,U.numSpotShadows=P,U.numSpotMaps=S,U.numLightProbes=b,n.version=gg++)}function c(h,f){let g=0,d=0,m=0,M=0,E=0,_=0,p=f.matrixWorldInverse;for(let C=0,I=h.length;C<I;C++){let T=h[C];if(T.isSunLight){let o=n.sun[g];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),g++}else if(T.isDirectionalLight){let o=n.directional[d];o.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(s),o.direction.transformDirection(p),d++}else if(T.isSpotLight){let o=n.spot[M];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),o.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(s),o.direction.transformDirection(p),M++}else if(T.isRectAreaLight){let o=n.rectArea[E];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),o.halfWidth.set(T.width*.5,0,0),o.halfHeight.set(0,T.height*.5,0),o.halfWidth.applyMatrix4(a),o.halfHeight.applyMatrix4(a),E++}else if(T.isPointLight){let o=n.point[m];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){let o=n.hemi[_];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),_++}}}return{setup:l,setupView:c,state:n}}function vu(i){let t=new xg(i),e=[],n=[],s=[];function r(d){g.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function l(d){n.push(d)}function c(d){s.push(d)}function h(){t.setup(e)}function f(d){t.setupView(e,d)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:f,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function yg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new vu(i),t.set(s,[l])):r>=a.length?(l=new vu(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`,Sg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],bg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Mu=new He,Jr=new F,vc=new F;function Eg(i,t,e){let n=new zs,s=new kt,r=new kt,a=new Ye,l=new Ya,c=new qa,h={},f=e.maxTextureSize,g={[Gi]:wn,[wn]:Gi,[Le]:Le},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:vg,fragmentShader:Mg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let M=new pn;M.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new qe(M,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let p=this.type;this.render=function(w,P,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===mh&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let u=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ci),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==this.type;V&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=w.length;D<W;D++){let $=w[D],J=$.shadow;if(J===void 0){Zt("WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ot=J.getFrameExtents();s.multiply(ot),r.copy(J.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ot.x),s.x=r.x*ot.x,J.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ot.y),s.y=r.y*ot.y,J.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Z,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ys){if($.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Pn(s.x,s.y,{format:qi,type:ii,minFilter:an,magFilter:an,generateMipmaps:!1}),J.map.texture.name=$.name+".shadowMap",J.map.depthTexture=new Ui(s.x,s.y,ni),J.map.depthTexture.name=$.name+".shadowMapDepth",J.map.depthTexture.format=oi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=dn,J.map.depthTexture.magFilter=dn}else $.isPointLight?(J.map=new tl(s.x),J.map.depthTexture=new Wa(s.x,ei)):(J.map=new Pn(s.x,s.y),J.map.depthTexture=new Ui(s.x,s.y,ei)),J.map.depthTexture.name=$.name+".shadowMap",J.map.depthTexture.format=oi,this.type===rs?(J.map.depthTexture.compareFunction=Z?Ko:Jo,J.map.depthTexture.minFilter=an,J.map.depthTexture.magFilter=an):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=dn,J.map.depthTexture.magFilter=dn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let it=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();$.isPointLight!==!0&&J.updateMatrices($,S);for(let at=0;at<it;at++){let Gt=J.getCamera(at);if($.isPointLight){let Ht=J.camera,Ne=J.matrix,xe=$.distance||Ht.far;xe!==Ht.far&&(Ht.far=xe,Ht.updateProjectionMatrix()),Jr.setFromMatrixPosition($.matrixWorld),Ht.position.copy(Jr),vc.copy(Ht.position),vc.add(Sg[at]),Ht.up.copy(bg[at]),Ht.lookAt(vc),Ht.updateMatrixWorld(),Ne.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Mu.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Mu,Ht.coordinateSystem,Ht.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,at),i.clear();else{at===0&&(i.setRenderTarget(J.map),i.clear());let Ht=J.getViewport(at);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(a)}n=J.getFrustum(at),T(P,S,Gt,$,this.type)}J.isPointLightShadow!==!0&&this.type===Ys&&C(J,S),J.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(u,b,U)};function C(w,P){let S=t.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Pn(s.x,s.y,{format:qi,type:ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,S,d,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,S,m,E,null)}function I(w,P,S,u){let b=null,U=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)b=U;else if(b=S.isPointLight===!0?c:l,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=b.uuid,V=P.uuid,D=h[z];D===void 0&&(D={},h[z]=D);let W=D[V];W===void 0&&(W=b.clone(),D[V]=W,P.addEventListener("dispose",o)),b=W}if(b.visible=P.visible,b.wireframe=P.wireframe,u===Ys?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:g[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=S}return b}function T(w,P,S,u,b){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Ys)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let V=t.update(w),D=w.material;if(Array.isArray(D)){let W=V.groups;for(let $=0,J=W.length;$<J;$++){let ot=W[$],Z=D[ot.materialIndex];if(Z&&Z.visible){let it=I(w,Z,u,b);w.onBeforeShadow(i,w,P,S,V,it,ot),i.renderBufferDirect(S,null,V,it,w,ot),w.onAfterShadow(i,w,P,S,V,it,ot)}}}else if(D.visible){let W=I(w,D,u,b);w.onBeforeShadow(i,w,P,S,V,W,null),i.renderBufferDirect(S,null,V,W,w,null),w.onAfterShadow(i,w,P,S,V,W,null)}}let z=w.children;for(let V=0,D=z.length;V<D;V++)T(z[V],P,S,u,b)}function o(w){w.target.removeEventListener("dispose",o);for(let S in h){let u=h[S],b=w.target.uuid;b in u&&(u[b].dispose(),delete u[b])}}}function Tg(i,t){function e(){let L=!1,gt=new Ye,j=null,_t=new Ye(0,0,0,0);return{setMask:function(Ct){j!==Ct&&!L&&(i.colorMask(Ct,Ct,Ct,Ct),j=Ct)},setLocked:function(Ct){L=Ct},setClear:function(Ct,rt,zt,xt,Pe){Pe===!0&&(Ct*=xt,rt*=xt,zt*=xt),gt.set(Ct,rt,zt,xt),_t.equals(gt)===!1&&(i.clearColor(Ct,rt,zt,xt),_t.copy(gt))},reset:function(){L=!1,j=null,_t.set(-1,0,0,0)}}}function n(){let L=!1,gt=!1,j=null,_t=null,Ct=null;return{setReversed:function(rt){if(gt!==rt){let zt=t.get("EXT_clip_control");rt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let xt=Ct;Ct=null,this.setClear(xt)}},getReversed:function(){return gt},setTest:function(rt){rt?nt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(rt){j!==rt&&!L&&(i.depthMask(rt),j=rt)},setFunc:function(rt){if(gt&&(rt=Jh[rt]),_t!==rt){switch(rt){case Ta:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=rt}},setLocked:function(rt){L=rt},setClear:function(rt){Ct!==rt&&(Ct=rt,gt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){L=!1,j=null,_t=null,Ct=null,gt=!1}}}function s(){let L=!1,gt=null,j=null,_t=null,Ct=null,rt=null,zt=null,xt=null,Pe=null;return{setTest:function(Te){L||(Te?nt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Te){gt!==Te&&!L&&(i.stencilMask(Te),gt=Te)},setFunc:function(Te,bn,y){(j!==Te||_t!==bn||Ct!==y)&&(i.stencilFunc(Te,bn,y),j=Te,_t=bn,Ct=y)},setOp:function(Te,bn,y){(rt!==Te||zt!==bn||xt!==y)&&(i.stencilOp(Te,bn,y),rt=Te,zt=bn,xt=y)},setLocked:function(Te){L=Te},setClear:function(Te){Pe!==Te&&(i.clearStencil(Te),Pe=Te)},reset:function(){L=!1,gt=null,j=null,_t=null,Ct=null,rt=null,zt=null,xt=null,Pe=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,f={},g={},d={},m=new WeakMap,M=[],E=null,_=!1,p=null,C=null,I=null,T=null,o=null,w=null,P=null,S=new jt(0,0,0),u=0,b=!1,U=null,z=null,V=null,D=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ot=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=ot>=2);let it=null,at={},Gt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Ne=new Ye().fromArray(Gt),xe=new Ye().fromArray(Ht);function ee(L,gt,j,_t){let Ct=new Uint8Array(4),rt=i.createTexture();i.bindTexture(L,rt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<j;zt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(gt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return rt}let K={};K[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Ls),se(!1),Oe(kl),nt(i.CULL_FACE),Se(ci);function nt(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Ut(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Qt(L,gt){return d[L]!==gt?(i.bindFramebuffer(L,gt),d[L]=gt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Pt(L,gt){let j=M,_t=!1;if(L){j=m.get(gt),j===void 0&&(j=[],m.set(gt,j));let Ct=L.textures;if(j.length!==Ct.length||j[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,zt=Ct.length;rt<zt;rt++)j[rt]=i.COLOR_ATTACHMENT0+rt;j.length=Ct.length,_t=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,_t=!0);_t&&i.drawBuffers(j)}function ue(L){return E!==L?(i.useProgram(L),E=L,!0):!1}let Ze={[as]:i.FUNC_ADD,[_h]:i.FUNC_SUBTRACT,[xh]:i.FUNC_REVERSE_SUBTRACT};Ze[yh]=i.MIN,Ze[vh]=i.MAX;let oe={[Mh]:i.ZERO,[Sh]:i.ONE,[bh]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Ch]:i.SRC_ALPHA_SATURATE,[Ah]:i.DST_COLOR,[Th]:i.DST_ALPHA,[Eh]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Rh]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Ph]:i.CONSTANT_COLOR,[Ih]:i.ONE_MINUS_CONSTANT_COLOR,[Lh]:i.CONSTANT_ALPHA,[Dh]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(L,gt,j,_t,Ct,rt,zt,xt,Pe,Te){if(L===ci){_===!0&&(Ut(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),L!==gh){if(L!==p||Te!==b){if((C!==as||o!==as)&&(i.blendEquation(i.FUNC_ADD),C=as,o=as),Te)switch(L){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",L);break}else switch(L){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",L);break}I=null,T=null,w=null,P=null,S.set(0,0,0),u=0,p=L,b=Te}return}Ct=Ct||gt,rt=rt||j,zt=zt||_t,(gt!==C||Ct!==o)&&(i.blendEquationSeparate(Ze[gt],Ze[Ct]),C=gt,o=Ct),(j!==I||_t!==T||rt!==w||zt!==P)&&(i.blendFuncSeparate(oe[j],oe[_t],oe[rt],oe[zt]),I=j,T=_t,w=rt,P=zt),(xt.equals(S)===!1||Pe!==u)&&(i.blendColor(xt.r,xt.g,xt.b,Pe),S.copy(xt),u=Pe),p=L,b=!1}function we(L,gt){L.side===Le?Ut(i.CULL_FACE):nt(i.CULL_FACE);let j=L.side===wn;gt&&(j=!j),se(j),L.blending===qs&&L.transparent===!1?Se(ci):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let _t=L.stencilWrite;l.setTest(_t),_t&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function Oe(L){L!==fh?(nt(i.CULL_FACE),L!==z&&(L===kl?i.cullFace(i.BACK):L===ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),z=L}function en(L){L!==V&&(J&&i.lineWidth(L),V=L)}function Ke(L,gt,j){L?(nt(i.POLYGON_OFFSET_FILL),(D!==gt||W!==j)&&(D=gt,W=j,a.getReversed()&&(gt=-gt),i.polygonOffset(gt,j))):Ut(i.POLYGON_OFFSET_FILL)}function ze(L){L?nt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Je(L){L===void 0&&(L=i.TEXTURE0+$-1),it!==L&&(i.activeTexture(L),it=L)}function N(L,gt,j){j===void 0&&(it===null?j=i.TEXTURE0+$-1:j=it);let _t=at[j];_t===void 0&&(_t={type:void 0,texture:void 0},at[j]=_t),(_t.type!==L||_t.texture!==gt)&&(it!==j&&(i.activeTexture(j),it=j),i.bindTexture(L,gt||K[L]),_t.type=L,_t.texture=gt)}function nn(){let L=at[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ee(){try{i.compressedTexImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function H(){try{i.texSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function dt(){try{i.texStorage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function mt(){try{i.texStorage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function et(){try{i.texImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function yt(L){return g[L]!==void 0?g[L]:i.getParameter(L)}function Bt(L,gt){g[L]!==gt&&(i.pixelStorei(L,gt),g[L]=gt)}function Mt(L){Ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ne.copy(L))}function vt(L){xe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function Ot(L,gt){let j=h.get(gt);j===void 0&&(j=new WeakMap,h.set(gt,j));let _t=j.get(L);_t===void 0&&(_t=i.getUniformBlockIndex(gt,L.name),j.set(L,_t))}function Xt(L,gt){let _t=h.get(gt).get(L);c.get(gt)!==_t&&(i.uniformBlockBinding(gt,_t,L.__bindingPointIndex),c.set(gt,_t))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},it=null,at={},d={},m=new WeakMap,M=[],E=null,_=!1,p=null,C=null,I=null,T=null,o=null,w=null,P=null,S=new jt(0,0,0),u=0,b=!1,U=null,z=null,V=null,D=null,W=null,Ne.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:nt,disable:Ut,bindFramebuffer:Qt,drawBuffers:Pt,useProgram:ue,setBlending:Se,setMaterial:we,setFlipSided:se,setCullFace:Oe,setLineWidth:en,setPolygonOffset:Ke,setScissorTest:ze,activeTexture:Je,bindTexture:N,unbindTexture:nn,compressedTexImage2D:Ee,compressedTexImage3D:A,texImage2D:Y,texImage3D:et,pixelStorei:Bt,getParameter:yt,updateUBOMapping:Ot,uniformBlockBinding:Xt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:Mt,viewport:vt,reset:ne}}function wg(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,f=new WeakMap,g=new Set,d,m=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return M?new OffscreenCanvas(A,x):_r("canvas")}function _(A,x,H){let G=1,X=Ee(A);if((X.width>H||X.height>H)&&(G=H/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let dt=Math.floor(G*X.width),mt=Math.floor(G*X.height);d===void 0&&(d=E(dt,mt));let Y=x?E(dt,mt):d;return Y.width=dt,Y.height=mt,Y.getContext("2d").drawImage(A,0,0,dt,mt),Zt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+dt+"x"+mt+")."),Y}else return"data"in A&&Zt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function p(A){return A.generateMipmaps}function C(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,H,G,X,dt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;G&&(mt=t.get("EXT_texture_norm16"),mt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8),H===i.UNSIGNED_SHORT&&mt&&(Y=mt.R16_EXT),H===i.SHORT&&mt&&(Y=mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),x===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8),H===i.UNSIGNED_SHORT&&mt&&(Y=mt.RG16_EXT),H===i.SHORT&&mt&&(Y=mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&mt&&(Y=mt.RGB16_EXT),H===i.SHORT&&mt&&(Y=mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let et=dt?gr:Me.getTransfer(X);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=et===Ce?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&mt&&(Y=mt.RGBA16_EXT),H===i.SHORT&&mt&&(Y=mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function o(A,x){let H;return A?x===null||x===ei||x===Js?H=i.DEPTH24_STENCIL8:x===ni?H=i.DEPTH32F_STENCIL8:x===Zs&&(H=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===Js?H=i.DEPTH_COMPONENT24:x===ni?H=i.DEPTH_COMPONENT32F:x===Zs&&(H=i.DEPTH_COMPONENT16),H}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){let x=A.target;x.removeEventListener("dispose",P),u(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&g.delete(x)}function S(A){let x=A.target;x.removeEventListener("dispose",S),U(x)}function u(A){let x=n.get(A);if(x.__webglInit===void 0)return;let H=A.source,G=m.get(H);if(G){let X=G[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(A),Object.keys(G).length===0&&m.delete(H)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let H=A.source,G=m.get(H);delete G[x.__cacheKey],a.memory.textures--}function U(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let X=0;X<x.__webglFramebuffer[G].length;X++)i.deleteFramebuffer(x.__webglFramebuffer[G][X]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let G=0,X=H.length;G<X;G++){let dt=n.get(H[G]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(H[G])}n.remove(A)}let z=0;function V(){z=0}function D(){return z}function W(A){z=A}function $(){let A=z;return A>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ot(A,x){let H=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let G=A.image;if(G===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function Z(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ut(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function it(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ut(H,A,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function at(A,x){let H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Qt(H,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let Gt={[La]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},Ht={[dn]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Ne={[zh]:i.NEVER,[Xh]:i.ALWAYS,[kh]:i.LESS,[Jo]:i.LEQUAL,[Vh]:i.EQUAL,[Ko]:i.GEQUAL,[Gh]:i.GREATER,[Wh]:i.NOTEQUAL};function xe(A,x){if(x.type===ni&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===ho||x.magFilter===kr||x.magFilter===Xi||x.minFilter===an||x.minFilter===ho||x.minFilter===kr||x.minFilter===Xi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Gt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Gt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Gt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ht[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ht[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==kr&&x.minFilter!==Xi||x.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));let G=x.source,X=m.get(G);X===void 0&&(X={},m.set(G,X));let dt=J(x);if(dt!==A.__cacheKey){X[dt]===void 0&&(X[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),X[dt].usedTimes++;let mt=X[A.__cacheKey];mt!==void 0&&(X[A.__cacheKey].usedTimes--,mt.usedTimes===0&&b(x)),A.__cacheKey=dt,A.__webglTexture=X[dt].texture}return H}function K(A,x,H){return Math.floor(Math.floor(A/H)/x)}function nt(A,x,H,G){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,G,x.data);else{dt.sort((Bt,Mt)=>Bt.start-Mt.start);let mt=0;for(let Bt=1;Bt<dt.length;Bt++){let Mt=dt[mt],vt=dt[Bt],Ot=Mt.start+Mt.count,Xt=K(vt.start,x.width,4),ne=K(Mt.start,x.width,4);vt.start<=Ot+1&&Xt===ne&&K(vt.start+vt.count-1,x.width,4)===Xt?Mt.count=Math.max(Mt.count,vt.start+vt.count-Mt.start):(++mt,dt[mt]=vt)}dt.length=mt+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Bt=0,Mt=dt.length;Bt<Mt;Bt++){let vt=dt[Bt],Ot=Math.floor(vt.start/4),Xt=Math.ceil(vt.count/4),ne=Ot%x.width,L=Math.floor(Ot/x.width),gt=Xt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,ne,L,gt,j,H,G,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Ut(A,x,H){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let X=ee(A,x),dt=x.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+H);let mt=n.get(dt);if(dt.version!==mt.__version||X===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=Me.getPrimaries(Me.workingColorSpace),_t=x.colorSpace===wi?null:Me.getPrimaries(x.colorSpace),Ct=x.colorSpace===wi||j===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=_(x.image,!1,s.maxTextureSize);et=nn(x,et);let yt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),Mt=T(x.internalFormat,yt,Bt,x.normalized,x.colorSpace,x.isVideoTexture);xe(G,x);let vt,Ot=x.mipmaps,Xt=x.isVideoTexture!==!0,ne=mt.__version===void 0||X===!0,L=dt.dataReady,gt=w(x,et);if(x.isDepthTexture)Mt=o(x.format===Yi,x.type),ne&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Mt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Mt,et.width,et.height,0,yt,Bt,null));else if(x.isDataTexture)if(Ot.length>0){Xt&&ne&&e.texStorage2D(i.TEXTURE_2D,gt,Mt,Ot[0].width,Ot[0].height);for(let j=0,_t=Ot.length;j<_t;j++)vt=Ot[j],Xt?L&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,vt.width,vt.height,0,yt,Bt,vt.data);x.generateMipmaps=!1}else Xt?(ne&&e.texStorage2D(i.TEXTURE_2D,gt,Mt,et.width,et.height),L&&nt(x,et,yt,Bt)):e.texImage2D(i.TEXTURE_2D,0,Mt,et.width,et.height,0,yt,Bt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Mt,Ot[0].width,Ot[0].height,et.depth);for(let j=0,_t=Ot.length;j<_t;j++)if(vt=Ot[j],x.format!==Yn)if(yt!==null)if(Xt){if(L)if(x.layerUpdates.size>0){let Ct=pc(vt.width,vt.height,x.format,x.type);for(let rt of x.layerUpdates){let zt=vt.data.subarray(rt*Ct/vt.data.BYTES_PER_ELEMENT,(rt+1)*Ct/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,rt,vt.width,vt.height,1,yt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,et.depth,yt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Mt,vt.width,vt.height,et.depth,0,vt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,et.depth,yt,Bt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Mt,vt.width,vt.height,et.depth,0,yt,Bt,vt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Xt&&ne&&e.texStorage2D(i.TEXTURE_2D,gt,Mt,Ot[0].width,Ot[0].height);for(let j=0,_t=Ot.length;j<_t;j++)vt=Ot[j],x.format!==Yn?yt!==null?Xt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Mt,vt.width,vt.height,0,vt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?L&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,vt.width,vt.height,0,yt,Bt,vt.data)}else if(x.isDataArrayTexture)if(Xt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Mt,et.width,et.height,et.depth),L)if(x.layerUpdates.size>0){let j=pc(et.width,et.height,x.format,x.type);for(let _t of x.layerUpdates){let Ct=et.data.subarray(_t*j/et.data.BYTES_PER_ELEMENT,(_t+1)*j/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,et.width,et.height,1,yt,Bt,Ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,yt,Bt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,et.width,et.height,et.depth,0,yt,Bt,et.data);else if(x.isData3DTexture)Xt?(ne&&e.texStorage3D(i.TEXTURE_3D,gt,Mt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,yt,Bt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,et.width,et.height,et.depth,0,yt,Bt,et.data);else if(x.isFramebufferTexture){if(ne)if(Xt)e.texStorage2D(i.TEXTURE_2D,gt,Mt,et.width,et.height);else{let j=et.width,_t=et.height;for(let Ct=0;Ct<gt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Mt,j,_t,0,yt,Bt,null),j>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),et.parentNode!==j){j.appendChild(et),g.add(x),j.onpaint=_t=>{let Ct=_t.changedElements;for(let rt of g)Ct.includes(rt.image)&&(rt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let Ct=i.RGBA,rt=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,rt,zt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Xt&&ne){let j=Ee(Ot[0]);e.texStorage2D(i.TEXTURE_2D,gt,Mt,j.width,j.height)}for(let j=0,_t=Ot.length;j<_t;j++)vt=Ot[j],Xt?L&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,yt,Bt,vt):e.texImage2D(i.TEXTURE_2D,j,Mt,yt,Bt,vt);x.generateMipmaps=!1}else if(Xt){if(ne){let j=Ee(et);e.texStorage2D(i.TEXTURE_2D,gt,Mt,j.width,j.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Bt,et)}else e.texImage2D(i.TEXTURE_2D,0,Mt,yt,Bt,et);p(x)&&C(G),mt.__version=dt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Qt(A,x,H){if(x.image.length!==6)return;let G=ee(A,x),X=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let dt=n.get(X);if(X.version!==dt.__version||G===!0){e.activeTexture(i.TEXTURE0+H);let mt=Me.getPrimaries(Me.workingColorSpace),Y=x.colorSpace===wi?null:Me.getPrimaries(x.colorSpace),et=x.colorSpace===wi||mt===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let yt=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!yt&&!Bt?Mt[rt]=_(x.image[rt],!0,s.maxCubemapSize):Mt[rt]=Bt?x.image[rt].image:x.image[rt],Mt[rt]=nn(x,Mt[rt]);let vt=Mt[0],Ot=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),ne=T(x.internalFormat,Ot,Xt,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,gt=dt.__version===void 0||G===!0,j=X.dataReady,_t=w(x,vt);xe(i.TEXTURE_CUBE_MAP,x);let Ct;if(yt){L&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,ne,vt.width,vt.height);for(let rt=0;rt<6;rt++){Ct=Mt[rt].mipmaps;for(let zt=0;zt<Ct.length;zt++){let xt=Ct[zt];x.format!==Yn?Ot!==null?L?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,0,0,xt.width,xt.height,Ot,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,ne,xt.width,xt.height,0,xt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,0,0,xt.width,xt.height,Ot,Xt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,ne,xt.width,xt.height,0,Ot,Xt,xt.data)}}}else{if(Ct=x.mipmaps,L&&gt){Ct.length>0&&_t++;let rt=Ee(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,ne,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Bt){L?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Ot,Xt,Mt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,Mt[rt].width,Mt[rt].height,0,Ot,Xt,Mt[rt].data);for(let zt=0;zt<Ct.length;zt++){let Pe=Ct[zt].image[rt].image;L?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,0,0,Pe.width,Pe.height,Ot,Xt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,ne,Pe.width,Pe.height,0,Ot,Xt,Pe.data)}}else{L?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Xt,Mt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,Ot,Xt,Mt[rt]);for(let zt=0;zt<Ct.length;zt++){let xt=Ct[zt];L?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,0,0,Ot,Xt,xt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,ne,Ot,Xt,xt.image[rt])}}}p(x)&&C(i.TEXTURE_CUBE_MAP),dt.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Pt(A,x,H,G,X,dt){let mt=r.convert(H.format,H.colorSpace),Y=r.convert(H.type),et=T(H.internalFormat,mt,Y,H.normalized,H.colorSpace),yt=n.get(x),Bt=n.get(H);if(Bt.__renderTarget=x,!yt.__hasExternalTextures){let Mt=Math.max(1,x.width>>dt),vt=Math.max(1,x.height>>dt);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,dt,et,Mt,vt,x.depth,0,mt,Y,null):e.texImage2D(X,dt,et,Mt,vt,0,mt,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Je(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,X,Bt.__webglTexture,0,ze(x)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,X,Bt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(A,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let G=x.depthTexture,X=G&&G.isDepthTexture?G.type:null,dt=o(x.stencilBuffer,X),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(x),dt,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(x),dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let G=x.textures;for(let X=0;X<G.length;X++){let dt=G[X],mt=r.convert(dt.format,dt.colorSpace),Y=r.convert(dt.type),et=T(dt.internalFormat,mt,Y,dt.normalized,dt.colorSpace);Je(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(x),et,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(A,x,H){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),xe(i.TEXTURE_CUBE_MAP,x.depthTexture);let yt=r.convert(x.depthTexture.format),Bt=r.convert(x.depthTexture.type),Mt;x.depthTexture.format===oi?Mt=i.DEPTH_COMPONENT24:x.depthTexture.format===Yi&&(Mt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Mt,x.width,x.height,0,yt,Bt,null)}}else ot(x.depthTexture,0);let dt=X.__webglTexture,mt=ze(x),Y=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,et=x.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)Je(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Y,dt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,et,Y,dt,0);else if(x.depthTexture.format===Yi)Je(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Y,dt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,et,Y,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(A){let x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=G}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let G=0;G<6;G++)Ze(x.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?Ze(x.__webglFramebuffer[0],A,0):Ze(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),ue(x.__webglDepthbuffer[G],A,!1);else{let X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,dt)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ue(x.__webglDepthbuffer,A,!1);else{let X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(A,x,H){let G=n.get(A);x!==void 0&&Pt(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&oe(A)}function we(A){let x=A.texture,H=n.get(A),G=n.get(x);A.addEventListener("dispose",S);let X=A.textures,dt=A.isWebGLCubeRenderTarget===!0,mt=X.length>1;if(mt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),dt){H.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[Y]=[];for(let et=0;et<x.mipmaps.length;et++)H.__webglFramebuffer[Y][et]=i.createFramebuffer()}else H.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)H.__webglFramebuffer[Y]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Y=0,et=X.length;Y<et;Y++){let yt=n.get(X[Y]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Je(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let et=X[Y];H.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Y]);let yt=r.convert(et.format,et.colorSpace),Bt=r.convert(et.type),Mt=T(et.internalFormat,yt,Bt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),vt=ze(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,H.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),xe(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Pt(H.__webglFramebuffer[Y][et],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et);else Pt(H.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Y=0,et=X.length;Y<et;Y++){let yt=X[Y],Bt=n.get(yt),Mt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Bt.__webglTexture),xe(Mt,yt),Pt(H.__webglFramebuffer,A,yt,i.COLOR_ATTACHMENT0+Y,Mt,0),p(yt)&&C(Mt)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,G.__webglTexture),xe(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Pt(H.__webglFramebuffer[et],A,x,i.COLOR_ATTACHMENT0,Y,et);else Pt(H.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&C(Y),e.unbindTexture()}A.depthBuffer&&oe(A)}function se(A){let x=A.textures;for(let H=0,G=x.length;H<G;H++){let X=x[H];if(p(X)){let dt=I(A),mt=n.get(X).__webglTexture;e.bindTexture(dt,mt),C(dt),e.unbindTexture()}}}let Oe=[],en=[];function Ke(A){if(A.samples>0){if(Je(A)===!1){let x=A.textures,H=A.width,G=A.height,X=i.COLOR_BUFFER_BIT,dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),Y=x.length>1;if(Y)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let Bt=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,H,G,0,0,H,G,X,i.NEAREST),c===!0&&(Oe.length=0,en.length=0,Oe.push(i.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Oe.push(dt),en.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,en)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let Bt=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ze(A){return Math.min(s.maxSamples,A.samples)}function Je(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){let x=a.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function nn(A,x){let H=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==mr&&H!==wi&&(Me.getTransfer(H)===Ce?(G!==Yn||X!==In)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",H)),x}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=W,this.setTexture2D=ot,this.setTexture2DArray=Z,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=Se,this.setupRenderTarget=we,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ag(i,t){function e(n,s=wi){let r,a=Me.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===uo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===Yn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===go)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===Vr||n===Gr||n===Wr||n===Xr)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===yo||n===vo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===bo||n===Eo||n===To||n===wo||n===Yr||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===bo)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yr)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===No||n===Fo||n===Uo||n===Oo||n===Bo||n===Ho||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Go||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===Yo||n===qr||n===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,f=null,g=null,d=null,m=null,M=null,E=typeof XRWebGLBinding<"u",_=new Rc,p={},C=e.getContextAttributes(),I=null,T=null,o=[],w=[],P=new kt,S=null,u=null,b=new vn;b.viewport=new Ye;let U=new vn;U.viewport=new Ye;let z=[b,U],V=new ao,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=o[K];return nt===void 0&&(nt=new Bs,o[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=o[K];return nt===void 0&&(nt=new Bs,o[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=o[K];return nt===void 0&&(nt=new Bs,o[K]=nt),nt.getHandSpace()};function $(K){let nt=w.indexOf(K.inputSource);if(nt===-1)return;let Ut=o[nt];Ut!==void 0&&(Ut.update(K.inputSource,K.frame,h||a),Ut.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ot);for(let K=0;K<o.length;K++){let nt=w[K];nt!==null&&(w[K]=null,o[K].disconnect(nt))}D=null,W=null,_.reset();for(let K in p)delete p[K];if(t.setRenderTarget(I),m=null,d=null,g=null,s=null,T=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),u!==null){let K=u.camera;K.fov=u.fov,K.zoom=u.zoom,K.updateProjectionMatrix(),u=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ot),C.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Qt=null,Pt=null;C.depth&&(Pt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=C.stencil?Yi:oi,Qt=C.stencil?Js:ei);let ue={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(ue),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Pn(d.textureWidth,d.textureHeight,{format:Yn,type:In,depthTexture:new Ui(d.textureWidth,d.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ut={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Pn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ot(K){for(let nt=0;nt<K.removed.length;nt++){let Ut=K.removed[nt],Qt=w.indexOf(Ut);Qt>=0&&(w[Qt]=null,o[Qt].disconnect(Ut))}for(let nt=0;nt<K.added.length;nt++){let Ut=K.added[nt],Qt=w.indexOf(Ut);if(Qt===-1){for(let ue=0;ue<o.length;ue++)if(ue>=w.length){w.push(Ut),Qt=ue;break}else if(w[ue]===null){w[ue]=Ut,Qt=ue;break}if(Qt===-1)break}let Pt=o[Qt];Pt&&Pt.connect(Ut)}}let Z=new F,it=new F;function at(K,nt,Ut){Z.setFromMatrixPosition(nt.matrixWorld),it.setFromMatrixPosition(Ut.matrixWorld);let Qt=Z.distanceTo(it),Pt=nt.projectionMatrix.elements,ue=Ut.projectionMatrix.elements,Ze=Pt[14]/(Pt[10]-1),oe=Pt[14]/(Pt[10]+1),Se=(Pt[9]+1)/Pt[5],we=(Pt[9]-1)/Pt[5],se=(Pt[8]-1)/Pt[0],Oe=(ue[8]+1)/ue[0],en=Ze*se,Ke=Ze*Oe,ze=Qt/(-se+Oe),Je=ze*-se;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let N=Ze+ze,nn=oe+ze,Ee=en-Je,A=Ke+(Qt-Je),x=Se*oe/nn*N,H=we*oe/nn*N;K.projectionMatrix.makePerspective(Ee,A,x,H,N,nn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Gt(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let nt=K.near,Ut=K.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Ut=_.depthFar)),V.near=U.near=b.near=nt,V.far=U.far=b.far=Ut,(D!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,W=V.far),V.layers.mask=K.layers.mask|6,b.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Qt=K.parent,Pt=V.cameras;Gt(V,Qt);for(let ue=0;ue<Pt.length;ue++)Gt(Pt[ue],Qt);Pt.length===2?at(V,b,U):V.projectionMatrix.copy(b.projectionMatrix),u===null&&K.isPerspectiveCamera&&(u={camera:K,fov:K.fov,zoom:K.zoom}),Ht(K,V,Qt)};function Ht(K,nt,Ut){Ut===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(Ut.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let Ne=null;function xe(K,nt){if(f=nt.getViewerPose(h||a),M=nt,f!==null){let Ut=f.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let Qt=!1;Ut.length!==V.cameras.length&&(V.cameras.length=0,Qt=!0);for(let oe=0;oe<Ut.length;oe++){let Se=Ut[oe],we=null;if(m!==null)we=m.getViewport(Se);else{let Oe=g.getViewSubImage(d,Se);we=Oe.viewport,oe===0&&(t.setRenderTargetTextures(T,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(T))}let se=z[oe];se===void 0&&(se=new vn,se.layers.enable(oe),se.viewport=new Ye,z[oe]=se),se.matrix.fromArray(Se.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Se.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),oe===0&&(V.matrix.copy(se.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Qt===!0&&V.cameras.push(se)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let oe=g.getDepthInformation(Ut[0]);oe&&oe.isValid&&oe.texture&&_.init(oe,s.renderState)}if(Pt&&Pt.includes("camera-access")&&E){t.state.unbindTexture(),g=n.getBinding();for(let oe=0;oe<Ut.length;oe++){let Se=Ut[oe].camera;if(Se){let we=p[Se];we||(we=new Rr,p[Se]=we);let se=g.getCameraImage(Se);we.sourceTexture=se}}}}for(let Ut=0;Ut<o.length;Ut++){let Qt=w[Ut],Pt=o[Ut];Qt!==null&&Pt!==void 0&&Pt.update(Qt,nt,h||a)}Ne&&Ne(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),M=null}let ee=new Su;ee.setAnimationLoop(xe),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}},Pg=new He,Ru=new ie;Ru.set(-1,0,0,0,1,0,0,0,1);function Ig(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,uc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,C,I,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(_,p):p.isMeshLambertMaterial?(r(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(_,p),g(_,p)):p.isMeshPhongMaterial?(r(_,p),f(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(_,p),d(_,p),p.isMeshPhysicalMaterial&&m(_,p,T)):p.isMeshMatcapMaterial?(r(_,p),M(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),E(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,C,I):p.isSpriteMaterial?h(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===wn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===wn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let C=t.get(p),I=C.envMap,T=C.envMapRotation;I&&(_.envMap.value=I,_.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(T)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Ru),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,C,I){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*C,_.scale.value=I*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function g(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,C){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.retroreflectivity>0&&(_.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,p){p.matcap&&(_.matcap.value=p.matcap)}function E(_,p){let C=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,o){let w=o.program;n.uniformBlockBinding(T,w)}function h(T,o){let w=s[T.id];w===void 0&&(_(T),w=f(T),s[T.id]=w,T.addEventListener("dispose",C));let P=o.program;n.updateUBOMapping(T,P);let S=t.render.frame;r[T.id]!==S&&(d(T),r[T.id]=S)}function f(T){let o=g();T.__bindingPointIndex=o;let w=i.createBuffer(),P=T.__size,S=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,o,w),w}function g(){for(let T=0;T<l;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let o=s[T.id],w=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,o);for(let S=0,u=w.length;S<u;S++){let b=w[S];if(Array.isArray(b))for(let U=0,z=b.length;U<z;U++)m(b[U],S,U,P);else m(b,S,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,o,w,P){if(E(T,o,w,P)===!0){let S=T.__offset,u=T.value;if(Array.isArray(u)){let b=0;for(let U=0;U<u.length;U++){let z=u[U],V=p(z);M(z,T.__data,b),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(b+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(u,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,T.__data)}}function M(T,o,w){typeof T=="number"||typeof T=="boolean"?o[0]=T:T.isMatrix3?(o[0]=T.elements[0],o[1]=T.elements[1],o[2]=T.elements[2],o[3]=0,o[4]=T.elements[3],o[5]=T.elements[4],o[6]=T.elements[5],o[7]=0,o[8]=T.elements[6],o[9]=T.elements[7],o[10]=T.elements[8],o[11]=0):ArrayBuffer.isView(T)?o.set(new T.constructor(T.buffer,T.byteOffset,o.length)):T.toArray(o,w)}function E(T,o,w,P){let S=T.value,u=o+"_"+w;if(P[u]===void 0)return typeof S=="number"||typeof S=="boolean"?P[u]=S:ArrayBuffer.isView(S)?P[u]=S.slice():P[u]=S.clone(),!0;{let b=P[u];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return P[u]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function _(T){let o=T.uniforms,w=0,P=16;for(let u=0,b=o.length;u<b;u++){let U=Array.isArray(o[u])?o[u]:[o[u]];for(let z=0,V=U.length;z<V;z++){let D=U[z],W=Array.isArray(D.value)?D.value:[D.value];for(let $=0,J=W.length;$<J;$++){let ot=W[$],Z=p(ot),it=w%P,at=it%Z.boundary,Gt=it+at;w+=at,Gt!==0&&P-Gt<Z.storage&&(w+=P-Gt),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=Z.storage}}}let S=w%P;return S>0&&(w+=P-S),T.__size=w,T.__cache={},this}function p(T){let o={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(o.boundary=4,o.storage=4):T.isVector2?(o.boundary=8,o.storage=8):T.isVector3||T.isColor?(o.boundary=16,o.storage=12):T.isVector4?(o.boundary=16,o.storage=16):T.isMatrix3?(o.boundary=48,o.storage=48):T.isMatrix4?(o.boundary=64,o.storage=64):T.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(o.boundary=16,o.storage=T.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",T),o}function C(T){let o=T.target;o.removeEventListener("dispose",C);let w=a.indexOf(o.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[o.id]),delete s[o.id],delete r[o.id]}function I(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:h,dispose:I}}var Dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function Ng(){return hi===null&&(hi=new Ha(Dg,16,16,qi,ii),hi.name="DFG_LUT",hi.minFilter=an,hi.magFilter=an,hi.wrapS=ai,hi.wrapT=ai,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var el=class{constructor(t={}){let{canvas:e=Yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:m=In}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let E=m,_=new Set([_o,go,mo]),p=new Set([In,ei,Zs,Js,fo,po]),C=new Uint32Array(4),I=new Int32Array(4),T=new F,o=null,w=null,P=[],S=[],u=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,U=!1,z=null,V=null,D=null,W=null;this._outputColorSpace=Bn;let $=0,J=0,ot=null,Z=-1,it=null,at=new Ye,Gt=new Ye,Ht=null,Ne=new jt(0),xe=0,ee=e.width,K=e.height,nt=1,Ut=null,Qt=null,Pt=new Ye(0,0,ee,K),ue=new Ye(0,0,ee,K),Ze=!1,oe=new zs,Se=!1,we=!1,se=new He,Oe=new F,en=new Ye,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function Je(){return ot===null?nt:1}let N=n;function nn(v,R){return e.getContext(v,R)}let Ee,A,x,H,G,X,dt,mt,Y,et,yt,Bt,Mt,vt,Ot,Xt,ne,L,gt,j,_t,Ct,rt;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",bn,!1),N===null){let R="webgl2";if(N=nn(R,v),N===null)throw nn(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(v){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Kt("WebGLRenderer: "+v.message),v}function zt(){Ee=new k0(N),Ee.init(),_t=new Ag(N,Ee),A=new I0(N,Ee,t,_t),x=new Tg(N,Ee),A.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),V=N.createFramebuffer(),D=N.createFramebuffer(),W=N.createFramebuffer(),H=new W0(N),G=new ug,X=new wg(N,Ee,x,G,A,_t,H),dt=new z0(b),mt=new Xd(N),Ct=new C0(N,mt),Y=new V0(N,mt,H,Ct),et=new Y0(N,Y,mt,Ct,H),L=new X0(N,A,X),Ot=new L0(G),yt=new hg(b,dt,Ee,A,Ct,Ot),Bt=new Ig(b,G),Mt=new fg,vt=new yg(Ee),ne=new R0(b,dt,x,et,M,c),Xt=new Eg(b,et,A),rt=new Lg(N,H,A,x),gt=new P0(N,Ee,H),j=new G0(N,Ee,H),H.programs=yt.programs,b.capabilities=A,b.extensions=Ee,b.properties=G,b.renderLists=Mt,b.shadowMap=Xt,b.state=x,b.info=H}E!==In&&(u=new Z0(E,e.width,e.height,l,s,r));let xt=new Cc(b,N);this.xr=xt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=Ee.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ee.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(v){v!==void 0&&(nt=v,this.setSize(ee,K,!1))},this.getSize=function(v){return v.set(ee,K)},this.setSize=function(v,R,k=!0){if(xt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=v,K=R,e.width=Math.floor(v*nt),e.height=Math.floor(R*nt),k===!0&&(e.style.width=v+"px",e.style.height=R+"px"),u!==null&&u.setSize(e.width,e.height),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(ee*nt,K*nt).floor()},this.setDrawingBufferSize=function(v,R,k){ee=v,K=R,nt=k,e.width=Math.floor(v*k),e.height=Math.floor(R*k),this.setViewport(0,0,v,R)},this.setEffects=function(v){if(E===In){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let R=0;R<v.length;R++)if(v[R].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}u.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(at)},this.getViewport=function(v){return v.copy(Pt)},this.setViewport=function(v,R,k,B){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,R,k,B),x.viewport(at.copy(Pt).multiplyScalar(nt).round())},this.getScissor=function(v){return v.copy(ue)},this.setScissor=function(v,R,k,B){v.isVector4?ue.set(v.x,v.y,v.z,v.w):ue.set(v,R,k,B),x.scissor(Gt.copy(ue).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){x.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){Ut=v},this.setTransparentSort=function(v){Qt=v},this.getClearColor=function(v){return v.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(v=!0,R=!0,k=!0){let B=0;if(v){let O=!1;if(ot!==null){let ft=ot.texture.format;O=_.has(ft)}if(O){let ft=ot.texture.type,lt=p.has(ft),q=ne.getClearColor(),ut=ne.getClearAlpha(),bt=q.r,Yt=q.g,qt=q.b;lt?(C[0]=bt,C[1]=Yt,C[2]=qt,C[3]=ut,N.clearBufferuiv(N.COLOR,0,C)):(I[0]=bt,I[1]=Yt,I[2]=qt,I[3]=ut,N.clearBufferiv(N.COLOR,0,I))}else B|=N.COLOR_BUFFER_BIT}R&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),ne.dispose(),Mt.dispose(),vt.dispose(),G.dispose(),dt.dispose(),et.dispose(),Ct.dispose(),rt.dispose(),yt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",pt),xt.removeEventListener("sessionend",Nt),st.stop()};function Pe(v){v.preventDefault(),xr("WebGLRenderer: Context Lost."),U=!0}function Te(){xr("WebGLRenderer: Context Restored."),U=!1;let v=H.autoReset,R=Xt.enabled,k=Xt.autoUpdate,B=Xt.needsUpdate,O=Xt.type;zt(),H.autoReset=v,Xt.enabled=R,Xt.autoUpdate=k,Xt.needsUpdate=B,Xt.type=O}function bn(v){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function y(v){let R=v.target;R.removeEventListener("dispose",y),Q(R)}function Q(v){tt(v),G.remove(v)}function tt(v){let R=G.get(v).programs;R!==void 0&&(R.forEach(function(k){yt.releaseProgram(k)}),v.isShaderMaterial&&yt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,k,B,O,ft){R===null&&(R=Ke);let lt=O.isMesh&&O.matrixWorld.determinantAffine()<0,q=Dn(v,R,k,B,O);x.setMaterial(B,lt);let ut=k.index,bt=1;if(B.wireframe===!0){if(ut=Y.getWireframeAttribute(k),ut===void 0)return;bt=2}let Yt=k.drawRange,qt=k.attributes.position,At=Yt.start*bt,te=(Yt.start+Yt.count)*bt;ft!==null&&(At=Math.max(At,ft.start*bt),te=Math.min(te,(ft.start+ft.count)*bt)),ut!==null?(At=Math.max(At,0),te=Math.min(te,ut.count)):qt!=null&&(At=Math.max(At,0),te=Math.min(te,qt.count));let be=te-At;if(be<0||be===1/0)return;Ct.setup(O,B,q,k,ut);let ve,le=gt;if(ut!==null&&(ve=mt.get(ut),le=j,le.setIndex(ve)),O.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Je()),le.setMode(N.LINES)):le.setMode(N.TRIANGLES);else if(O.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),x.setLineWidth(Ae*Je()),O.isLineSegments?le.setMode(N.LINES):O.isLineLoop?le.setMode(N.LINE_LOOP):le.setMode(N.LINE_STRIP)}else O.isPoints?le.setMode(N.POINTS):O.isSprite&&le.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ae=O._multiDrawStarts,Et=O._multiDrawCounts,Ve=O._multiDrawCount,de=ut?mt.get(ut).bytesPerElement:1,We=G.get(B).currentProgram.getUniforms();for(let je=0;je<Ve;je++)We.setValue(N,"_gl_DrawID",je),le.render(Ae[je]/de,Et[je])}else if(O.isInstancedMesh)le.renderInstances(At,be,O.count);else if(k.isInstancedBufferGeometry){let Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Et=Math.min(k.instanceCount,Ae);le.renderInstances(At,be,Et)}else le.render(At,be)};function St(v,R,k,B){z!==null&&v.isNodeMaterial&&z.setObject(B,v),Se===!0&&Ot.setState(v,k,!1),v.transparent===!0&&v.side===Le&&v.forceSinglePass===!1?(v.side=wn,v.needsUpdate=!0,ke(v,R,B),v.side=Gi,v.needsUpdate=!0,ke(v,R,B),v.side=Le):ke(v,R,B)}this.compile=function(v,R,k=null){k===null&&(k=v),z!==null&&z.renderStart(v,R,k),w=vt.get(k),w.init(R),S.push(w),k.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),v!==k&&v.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),we=this.localClippingEnabled,Se=Ot.init(this.clippingPlanes,we),Se===!0&&Ot.setGlobalState(this.clippingPlanes,R),z!==null&&Xt.render(w.state.shadowsArray,k,R);let B=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ft=O.material;if(ft)if(Array.isArray(ft))for(let lt=0;lt<ft.length;lt++){let q=ft[lt];St(q,k,R,O),B.add(q)}else St(ft,k,R,O),B.add(ft)}),w=S.pop(),z!==null&&z.renderEnd(),B},this.compileAsync=function(v,R,k=null){let B=this.compile(v,R,k);return new Promise(O=>{function ft(){if(B.forEach(function(lt){let ut=G.get(lt).currentProgram;(ut===void 0||ut.isReady())&&B.delete(lt)}),B.size===0){O(v);return}setTimeout(ft,10)}Ee.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let wt=null;function Dt(v){wt&&wt(v)}function pt(){st.stop()}function Nt(){st.start()}let st=new Su;st.setAnimationLoop(Dt),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(v){wt=v,xt.setAnimationLoop(v),v===null?st.stop():st.start()},xt.addEventListener("sessionstart",pt),xt.addEventListener("sessionend",Nt),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(v,R);let k=xt.enabled===!0&&xt.isPresenting===!0,B=u!==null&&(ot===null||k)&&u.begin(b,ot);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(u===null||u.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(R),R=xt.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,R,ot),w=vt.get(v,S.length),w.init(R),w.state.textureUnits=X.getTextureUnits(),S.push(w),se.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),oe.setFromProjectionMatrix(se,jn,R.reversedDepth),we=this.localClippingEnabled,Se=Ot.init(this.clippingPlanes,we),o=Mt.get(v,P.length),o.init(),P.push(o),xt.enabled===!0&&xt.isPresenting===!0){let lt=b.xr.getDepthSensingMesh();lt!==null&&It(lt,R,-1/0,b.sortObjects)}It(v,R,0,b.sortObjects),o.finish(),z!==null&&z.updateLights(w.state.lightsArray),b.sortObjects===!0&&o.sort(Ut,Qt),ze=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,ze&&ne.addToRenderList(o,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ot.beginShadows();let O=w.state.shadowsArray;if(Xt.render(O,v,R),Se===!0&&Ot.endShadows(),(B&&u.hasRenderPass())===!1){let lt=o.opaque,q=o.transmissive;if(w.setupLights(),R.isArrayCamera){let ut=R.cameras;if(q.length>0)for(let bt=0,Yt=ut.length;bt<Yt;bt++){let qt=ut[bt];Vt(lt,q,v,qt)}ze&&ne.render(v);for(let bt=0,Yt=ut.length;bt<Yt;bt++){let qt=ut[bt];ct(o,v,qt,qt.viewport)}}else q.length>0&&Vt(lt,q,v,R),ze&&ne.render(v),ct(o,v,R)}ot!==null&&J===0&&(X.updateMultisampleRenderTarget(ot),X.updateRenderTargetMipmap(ot)),B&&u.end(b),v.isScene===!0&&v.onAfterRender(b,v,R),Ct.resetDefaultState(),Z=-1,it=null,S.pop(),S.length>0?(w=S[S.length-1],X.setTextureUnits(w.state.textureUnits),Se===!0&&Ot.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?o=P[P.length-1]:o=null,z!==null&&z.renderEnd()};function It(v,R,k,B){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLightProbeGrid)w.pushLightProbeGrid(v);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(oe)){B&&en.setFromMatrixPosition(v.matrixWorld).applyMatrix4(se);let lt=et.update(v),q=v.material;q.visible&&o.push(v,lt,q,k,en.z,null,R)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(oe))){let lt=et.update(v),q=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),en.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),en.copy(lt.boundingSphere.center)),en.applyMatrix4(v.matrixWorld).applyMatrix4(se)),Array.isArray(q)){let ut=lt.groups;for(let bt=0,Yt=ut.length;bt<Yt;bt++){let qt=ut[bt],At=q[qt.materialIndex];At&&At.visible&&o.push(v,lt,At,k,en.z,qt,R)}}else q.visible&&o.push(v,lt,q,k,en.z,null,R)}}let ft=v.children;for(let lt=0,q=ft.length;lt<q;lt++)It(ft[lt],R,k,B)}function ct(v,R,k,B){let{opaque:O,transmissive:ft,transparent:lt}=v;w.setupLightsView(k),Se===!0&&Ot.setGlobalState(b.clippingPlanes,k),B&&x.viewport(at.copy(B)),O.length>0&&ht(O,R,k),ft.length>0&&ht(ft,R,k),lt.length>0&&ht(lt,R,k),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Vt(v,R,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let At=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Pn(1,1,{generateMipmaps:!0,type:At?ii:In,minFilter:Xi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let ft=w.state.transmissionRenderTarget[B.id],lt=B.viewport||at;ft.setSize(lt.z*b.transmissionResolutionScale,lt.w*b.transmissionResolutionScale);let q=b.getRenderTarget(),ut=b.getActiveCubeFace(),bt=b.getActiveMipmapLevel();b.setRenderTarget(ft),b.getClearColor(Ne),xe=b.getClearAlpha(),xe<1&&b.setClearColor(16777215,.5),b.clear(),ze&&ne.render(k);let Yt=b.toneMapping;b.toneMapping=ti;let qt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),Se===!0&&Ot.setGlobalState(b.clippingPlanes,B),ht(v,k,B),X.updateMultisampleRenderTarget(ft),X.updateRenderTargetMipmap(ft),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let te=0,be=R.length;te<be;te++){let ve=R[te],{object:le,geometry:Ae,material:Et,group:Ve}=ve;if(Et.side===Le&&le.layers.test(B.layers)){let de=Et.side;Et.side=wn,Et.needsUpdate=!0,Be(le,k,B,Ae,Et,Ve),Et.side=de,Et.needsUpdate=!0,At=!0}}At===!0&&(X.updateMultisampleRenderTarget(ft),X.updateRenderTargetMipmap(ft))}b.setRenderTarget(q,ut,bt),b.setClearColor(Ne,xe),qt!==void 0&&(B.viewport=qt),b.toneMapping=Yt}function ht(v,R,k){let B=R.isScene===!0?R.overrideMaterial:null;for(let O=0,ft=v.length;O<ft;O++){let lt=v[O],{object:q,geometry:ut,group:bt}=lt,Yt=lt.material;Yt.allowOverride===!0&&B!==null&&(Yt=B),q.layers.test(k.layers)&&Be(q,R,k,ut,Yt,bt)}}function Be(v,R,k,B,O,ft){z!==null&&O.isNodeMaterial&&z.setObject(v,O),v.onBeforeRender(b,R,k,B,O,ft),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(b,R,k,B,v,ft),O.transparent===!0&&O.side===Le&&O.forceSinglePass===!1?(O.side=wn,O.needsUpdate=!0,b.renderBufferDirect(k,R,B,O,v,ft),O.side=Gi,O.needsUpdate=!0,b.renderBufferDirect(k,R,B,O,v,ft),O.side=Le):b.renderBufferDirect(k,R,B,O,v,ft),v.onAfterRender(b,R,k,B,O,ft)}function ke(v,R,k){R.isScene!==!0&&(R=Ke);let B=G.get(v),O=w.state.lights,ft=w.state.shadowsArray,lt=O.state.version,q=yt.getParameters(v,O.state,ft,R,k,w.state.lightProbeGridArray),ut=yt.getProgramCacheKey(q),bt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;let Yt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=dt.get(v.envMap||B.environment,Yt),B.envMapRotation=B.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",y),bt=new Map,B.programs=bt);let qt=bt.get(ut);if(qt!==void 0){if(B.currentProgram===qt&&B.lightsStateVersion===lt)return re(v,q),qt}else q.uniforms=yt.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,k,q),v.onBeforeCompile(q,b),qt=yt.acquireProgram(q,ut),bt.set(ut,qt),B.uniforms=q.uniforms;let At=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=Ot.uniform),re(v,q),B.needsLights=$e(v),B.lightsStateVersion=lt,B.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.sunLights.value=O.state.sun,At.sunLightShadows.value=O.state.sunShadow,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.sunShadowMatrix.value=O.state.sunShadowMatrix,At.sunShadowCascade.value=O.state.sunShadowCascade,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=qt,B.uniformsList=null,qt}function sn(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=js.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function re(v,R){let k=G.get(v);k.outputColorSpace=R.outputColorSpace,k.batching=R.batching,k.batchingColor=R.batchingColor,k.instancing=R.instancing,k.instancingColor=R.instancingColor,k.instancingMorph=R.instancingMorph,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function _n(v,R){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;T.setFromMatrixPosition(R.matrixWorld);for(let k=0,B=v.length;k<B;k++){let O=v[k];if(O.texture!==null&&O.boundingBox.containsPoint(T))return O}return null}function Dn(v,R,k,B,O){R.isScene!==!0&&(R=Ke),X.resetTextureUnits();let ft=R.fog,lt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,q=ot===null?b.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Me.workingColorSpace,ut=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,bt=dt.get(B.envMap||lt,ut),Yt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,qt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!k.morphAttributes.position,te=!!k.morphAttributes.normal,be=!!k.morphAttributes.color,ve=ti;B.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ve=b.toneMapping);let le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ae=le!==void 0?le.length:0,Et=G.get(B),Ve=w.state.lights;if(Se===!0&&(we===!0||v!==it)){let he=v===it&&B.id===Z;Ot.setState(B,v,he)}let de=!1;B.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ve.state.version||Et.outputColorSpace!==q||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==bt||B.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ot.numPlanes||Et.numIntersection!==Ot.numIntersection)||Et.vertexAlphas!==Yt||Et.vertexTangents!==qt||Et.morphTargets!==At||Et.morphNormals!==te||Et.morphColors!==be||Et.toneMapping!==ve||Et.morphTargetsCount!==Ae||!!Et.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Et.__version=B.version);let We=Et.currentProgram;de===!0&&(We=ke(B,R,O),z&&B.isNodeMaterial&&z.onUpdateProgram(B,We,Et));let je=!1,ce=!1,Re=!1,Wt=We.getUniforms(),Jt=Et.uniforms;if(x.useProgram(We.program)&&(je=!0,ce=!0,Re=!0),B.id!==Z&&(Z=B.id,ce=!0),Et.needsLights){let he=_n(w.state.lightProbeGridArray,O);Et.lightProbeGrid!==he&&(Et.lightProbeGrid=he,ce=!0)}if(je||it!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Wt.setValue(N,"projectionMatrix",v.projectionMatrix),Wt.setValue(N,"viewMatrix",v.matrixWorldInverse);let Fe=Wt.map.cameraPosition;Fe!==void 0&&Fe.setValue(N,Oe.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&Wt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Wt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),it!==v&&(it=v,ce=!0,Re=!0)}if(Et.needsLights&&(Ve.state.sunShadowMap.length>0&&Wt.setValue(N,"sunShadowMap",Ve.state.sunShadowMap,X),Ve.state.directionalShadowMap.length>0&&Wt.setValue(N,"directionalShadowMap",Ve.state.directionalShadowMap,X),Ve.state.spotShadowMap.length>0&&Wt.setValue(N,"spotShadowMap",Ve.state.spotShadowMap,X),Ve.state.pointShadowMap.length>0&&Wt.setValue(N,"pointShadowMap",Ve.state.pointShadowMap,X)),O.isSkinnedMesh){Wt.setOptional(N,O,"bindMatrix"),Wt.setOptional(N,O,"bindMatrixInverse");let he=O.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),Wt.setValue(N,"boneTexture",he.boneTexture,X))}O.isBatchedMesh&&(Wt.setOptional(N,O,"batchingTexture"),Wt.setValue(N,"batchingTexture",O._matricesTexture,X),Wt.setOptional(N,O,"batchingIdTexture"),Wt.setValue(N,"batchingIdTexture",O._indirectTexture,X),Wt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&Wt.setValue(N,"batchingColorTexture",O._colorsTexture,X));let Qe=k.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&L.update(O,k,We),(ce||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,Wt.setValue(N,"receiveShadow",O.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(Jt.envMapIntensity.value=R.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Ng()),ce){if(Wt.setValue(N,"toneMappingExposure",b.toneMappingExposure),Et.needsLights&&An(Jt,Re),ft&&B.fog===!0&&Bt.refreshFogUniforms(Jt,ft),Bt.refreshMaterialUniforms(Jt,B,nt,K,w.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.lightProbeGrid){let he=Et.lightProbeGrid;Jt.probesSH.value=he.texture,Jt.probesMin.value.copy(he.boundingBox.min),Jt.probesMax.value.copy(he.boundingBox.max),Jt.probesResolution.value.copy(he.resolution)}js.upload(N,sn(Et),Jt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(js.upload(N,sn(Et),Jt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Wt.setValue(N,"center",O.center),Wt.setValue(N,"modelViewMatrix",O.modelViewMatrix),Wt.setValue(N,"normalMatrix",O.normalMatrix),Wt.setValue(N,"modelMatrix",O.matrixWorld),B.uniformsGroups!==void 0){let he=B.uniformsGroups;for(let Fe=0,Rn=he.length;Fe<Rn;Fe++){let si=he[Fe];rt.update(si,We),rt.bind(si,We)}}return We}function An(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.sunLights.needsUpdate=R,v.sunLightShadows.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function $e(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(v,R,k){let B=G.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=R,G.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,R){let k=G.get(v);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,k=0){ot=v,$=R,J=k;let B=null,O=!1,ft=!1;if(v){let q=G.get(v);if(q.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,q.__webglFramebuffer),at.copy(v.viewport),Gt.copy(v.scissor),Ht=v.scissorTest,x.viewport(at),x.scissor(Gt),x.setScissorTest(Ht),Z=-1;return}else if(q.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(q.__hasExternalTextures)X.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Yt=v.depthTexture;if(q.__boundDepthTexture!==Yt){if(Yt!==null&&G.has(Yt)&&(v.width!==Yt.image.width||v.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let ut=v.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(ft=!0);let bt=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[R])?B=bt[R][k]:B=bt[R],O=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?B=bt[k]:B=bt,at.copy(v.viewport),Gt.copy(v.scissor),Ht=v.scissorTest}else at.copy(Pt).multiplyScalar(nt).floor(),Gt.copy(ue).multiplyScalar(nt).floor(),Ht=Ze;if(k!==0&&(B=V),x.bindFramebuffer(N.FRAMEBUFFER,B)&&x.drawBuffers(v,B),x.viewport(at),x.scissor(Gt),x.setScissorTest(Ht),O){let q=G.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+R,q.__webglTexture,k)}else if(ft){let q=R;for(let ut=0;ut<v.textures.length;ut++){let bt=G.get(v.textures[ut]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ut,bt.__webglTexture,k,q)}}else if(v!==null&&k!==0){let q=G.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,q.__webglTexture,k)}Z=-1};function ye(v){let R=G.get(v);return(R.__readFormat!==v.format||R.__readType!==v.type)&&(R.__readFormat=v.format,R.__readType=v.type,R.__formatReadable=A.textureFormatReadable(v.format),R.__typeReadable=A.textureTypeReadable(v.type)),R}this.readRenderTargetPixels=function(v,R,k,B,O,ft,lt,q=0){if(!(v&&v.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){x.bindFramebuffer(N.FRAMEBUFFER,ut);try{let bt=v.textures[q],Yt=bt.format,qt=bt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+q);let At=ye(bt);if(At.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-B&&k>=0&&k<=v.height-O&&N.readPixels(R,k,B,O,_t.convert(Yt),_t.convert(qt),ft)}finally{let bt=ot!==null?G.get(ot).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,R,k,B,O,ft,lt,q=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut)if(R>=0&&R<=v.width-B&&k>=0&&k<=v.height-O){x.bindFramebuffer(N.FRAMEBUFFER,ut);let bt=v.textures[q],Yt=bt.format,qt=bt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+q);let At=ye(bt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(R,k,B,O,_t.convert(Yt),_t.convert(qt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let be=ot!==null?G.get(ot).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,be);let ve=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zh(N,ve,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(te),N.deleteSync(ve),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,k=0){let B=Math.pow(2,-k),O=Math.floor(v.image.width*B),ft=Math.floor(v.image.height*B),lt=R!==null?R.x:0,q=R!==null?R.y:0;X.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,lt,q,O,ft),x.unbindTexture()},this.copyTextureToTexture=function(v,R,k=null,B=null,O=0,ft=0){let lt,q,ut,bt,Yt,qt,At,te,be,ve=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(k!==null)lt=k.max.x-k.min.x,q=k.max.y-k.min.y,ut=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Yt=k.min.y,qt=k.isBox3?k.min.z:0;else{let Jt=Math.pow(2,-O);lt=Math.floor(ve.width*Jt),q=Math.floor(ve.height*Jt),v.isDataArrayTexture?ut=ve.depth:v.isData3DTexture?ut=Math.floor(ve.depth*Jt):ut=1,bt=0,Yt=0,qt=0}B!==null?(At=B.x,te=B.y,be=B.z):(At=0,te=0,be=0);let le=_t.convert(R.format),Ae=_t.convert(R.type),Et;R.isData3DTexture?(X.setTexture3D(R,0),Et=N.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(X.setTexture2DArray(R,0),Et=N.TEXTURE_2D_ARRAY):(X.setTexture2D(R,0),Et=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,R.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,R.unpackAlignment);let Ve=x.getParameter(N.UNPACK_ROW_LENGTH),de=x.getParameter(N.UNPACK_IMAGE_HEIGHT),We=x.getParameter(N.UNPACK_SKIP_PIXELS),je=x.getParameter(N.UNPACK_SKIP_ROWS),ce=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,ve.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),x.pixelStorei(N.UNPACK_SKIP_ROWS,Yt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,qt);let Re=v.isDataArrayTexture||v.isData3DTexture,Wt=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){let Jt=G.get(v),Qe=G.get(R),he=G.get(Jt.__renderTarget),Fe=G.get(Qe.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,he.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Rn=0;Rn<ut;Rn++)Re&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(v).__webglTexture,O,qt+Rn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(R).__webglTexture,ft,be+Rn)),N.blitFramebuffer(bt,Yt,lt,q,At,te,lt,q,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||G.has(v)){let Jt=G.get(v),Qe=G.get(R);x.bindFramebuffer(N.READ_FRAMEBUFFER,D),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let he=0;he<ut;he++)Re?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,O,qt+he):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,O),Wt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qe.__webglTexture,ft,be+he):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qe.__webglTexture,ft),O!==0?N.blitFramebuffer(bt,Yt,lt,q,At,te,lt,q,N.COLOR_BUFFER_BIT,N.NEAREST):Wt?N.copyTexSubImage3D(Et,ft,At,te,be+he,bt,Yt,lt,q):N.copyTexSubImage2D(Et,ft,At,te,bt,Yt,lt,q);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Wt?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Et,ft,At,te,be,lt,q,ut,le,Ae,ve.data):R.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,ft,At,te,be,lt,q,ut,le,ve.data):N.texSubImage3D(Et,ft,At,te,be,lt,q,ut,le,Ae,ve):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ft,At,te,lt,q,le,Ae,ve.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ft,At,te,ve.width,ve.height,le,ve.data):N.texSubImage2D(N.TEXTURE_2D,ft,At,te,lt,q,le,Ae,ve);x.pixelStorei(N.UNPACK_ROW_LENGTH,Ve),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de),x.pixelStorei(N.UNPACK_SKIP_PIXELS,We),x.pixelStorei(N.UNPACK_SKIP_ROWS,je),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ce),ft===0&&R.generateMipmaps&&N.generateMipmap(Et),x.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){$=0,J=0,ot=null,x.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var Cu={type:"change"},Ic={type:"start"},Iu={type:"end"},sl=new Ei,Pu=new Hn,Ug=Math.cos(70*hc.DEG2RAD),cn=new F,Ln=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pc=1e-6,rl=class extends Or{constructor(t,e=null){super(t,e),this.state=De.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new zn,this._lastTargetPosition=new F,this._quat=new zn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xs,this._sphericalDelta=new Xs,this._scale=1,this._panOffset=new F,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new F,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bg.bind(this),this._onPointerDown=Og.bind(this),this._onPointerUp=Hg.bind(this),this._onContextMenu=Yg.bind(this),this._onMouseWheel=Vg.bind(this),this._onKeyDown=Gg.bind(this),this._onTouchStart=Wg.bind(this),this._onTouchMove=Xg.bind(this),this._onMouseDown=zg.bind(this),this._onMouseMove=kg.bind(this),this._interceptControlDown=qg.bind(this),this._interceptControlUp=Zg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=De.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cu),this.update(),this.state=De.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;cn.copy(e).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),e.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let l=cn.length();a=this._clampDistance(l*this._scale);let c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sl.origin.copy(this.object.position),sl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sl.direction))<Ug?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),sl.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pc||this._lastTargetPosition.distanceToSquared(this.target)>Pc?(this.dispatchEvent(Cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){cn.setFromMatrixColumn(e,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,e){this.screenSpacePanning===!0?cn.setFromMatrixColumn(e,1):(cn.setFromMatrixColumn(e,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;cn.copy(s).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Og(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Bg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Iu),this.state=De.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=De.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Ic)}function kg(i){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vg(i){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(i.preventDefault(),this.dispatchEvent(Ic),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Iu))}function Gg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Wg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=De.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=De.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Ic)}function Xg(i){switch(this._trackPointer(i),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=De.NONE}}function Yg(i){this.enabled!==!1&&i.preventDefault()}function qg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lu(i="sky-product-3d-canvas"){let t=document.getElementById(i);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let e=t.getAttribute("data-product")||"tks",n=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[e]||{id:e,title:"Sky Group M\xFChendislik \xDCr\xFCn\xFC",hotspots:[]},s=new vr;s.background=new jt(16777215);let r=t.clientWidth||900,a=t.clientHeight||480,l=new vn(35,r/a,.1,100);l.position.set(8.5,4.2,7.5);let c=new el({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setSize(r,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=Hr,c.toneMappingExposure=1.15,c.shadowMap.enabled=!0,c.shadowMap.type=rs,t.appendChild(c.domElement);let h=new rl(l,c.domElement);h.enableDamping=!0,h.dampingFactor=.05,h.maxPolarAngle=Math.PI/2-.05,h.minDistance=2,h.maxDistance=28,h.target.set(0,0,0),h.autoRotate=!0,h.autoRotateSpeed=.6;let f=!1,g=null,d=()=>{f=!0,h.autoRotate=!1,clearTimeout(g),g=setTimeout(()=>{f=!1,xt.autoRotate&&(h.autoRotate=!0)},6e3)};c.domElement.addEventListener("pointerdown",d),c.domElement.addEventListener("wheel",d,{passive:!0}),c.domElement.addEventListener("touchstart",d,{passive:!0});let m=new Nr(16777215,.9);s.add(m);let M=new ss(16777215,1.25);M.position.set(12,16,14),M.castShadow=!0,M.shadow.mapSize.width=1024,M.shadow.mapSize.height=1024,M.shadow.bias=-5e-4,s.add(M);let E=new ss(14412542,.7);E.position.set(-14,8,-10),s.add(E);let _=new ss(15793652,.6);_.position.set(0,18,0),s.add(_);let p=new is(30,30),C=new Cr({opacity:.12}),I=new qe(p,C);I.rotation.x=-Math.PI/2,I.position.y=-1.65,I.receiveShadow=!0,s.add(I);let T=new Ur(24,24,14870768,15857145);T.position.y=-1.64,s.add(T);let o={aluFrame:new Ue({color:13949149,metalness:.8,roughness:.25,side:Le}),galvSteel:new Ue({color:12897749,metalness:.65,roughness:.45,side:Le}),stainless:new Ue({color:14476266,metalness:.55,roughness:.35,side:Le}),baseSkid:new Ue({color:9741240,metalness:.75,roughness:.35,side:Le}),panelSolid:new Ue({color:16317180,metalness:.15,roughness:.35,side:Le}),panelCutaway:new Pr({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:Le}),fanHousing:new Ue({color:165063,metalness:.6,roughness:.3,side:Le}),fanImpeller:new Ue({color:3718648,metalness:.75,roughness:.25,side:Le}),motorCast:new Ue({color:1976635,metalness:.85,roughness:.3,side:Le}),copperPipe:new Ue({color:12730636,metalness:.9,roughness:.2,side:Le}),coolingFin:new Ue({color:3718648,metalness:.55,roughness:.35,side:Le}),heatingFin:new Ue({color:16281969,metalness:.55,roughness:.35,side:Le}),rotorWheel:new Ue({color:6583435,metalness:.7,roughness:.4,side:Le}),filterCloth:new Ue({color:16317180,roughness:.95,metalness:.05,side:Le}),filterG4:new Ue({color:14870768,roughness:.9,metalness:.05,side:Le}),damperBlade:new Ue({color:9741240,metalness:.8,roughness:.25,side:Le}),actuatorOrange:new Ue({color:15357964,metalness:.2,roughness:.4}),drainPan:new Ue({color:14476266,metalness:.55,roughness:.35,side:Le}),doorHandle:new Ue({color:988970,metalness:.8,roughness:.3}),rubberBlack:new Ue({color:988970,roughness:.85,metalness:.1,side:Le}),brassGold:new Ue({color:14251782,metalness:.85,roughness:.25}),springSilver:new Ue({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new Ue({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new Ue({color:16777215,roughness:.2}),touchscreen:new Fi({color:165063})},w=[],P=[],S=new Xe;s.add(S);function u(y,Q,tt,St,wt=0,Dt=0,pt=0,Nt=!0,st=!0){let It=new Oi(y,Q,tt),ct=new qe(It,St);return ct.position.set(wt,Dt,pt),ct.castShadow=Nt,ct.receiveShadow=st,ct}function b(y,Q,tt,St,wt,Dt=0,pt=0,Nt=0,st=0,It=0,ct=!1,Vt=0,ht=Math.PI*2){let Be=new ns(y,Q,tt,St,1,ct,Vt,ht),ke=new qe(Be,wt);return ke.position.set(Dt,pt,Nt),st&&(ke.rotation.x=st),It&&(ke.rotation.z=It),ke.castShadow=!0,ke.receiveShadow=!0,ke}function U(y,Q=o.panelSolid,tt=o.panelCutaway){return y.userData.solidMat=Q,y.userData.cutawayMat=tt,P.push(y),y}function z(y){let st=-1.4100000000000001,It=u(8.4+.2,.22,.1,o.baseSkid,0,st,1-.05),ct=u(8.4+.2,.22,.1,o.baseSkid,0,st,-1+.05);y.add(It,ct);let Vt=[-4.2,-2.5,-.8,.8,2.5,4.2];Vt.forEach(Tt=>{y.add(u(.12,.22,2-.2,o.baseSkid,Tt,st,0))}),[-2.5,.8].forEach(Tt=>{y.add(u(.28,.12,.12,o.aluFrame,Tt,st,1-.04)),y.add(u(.28,.12,.12,o.aluFrame,Tt,st,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([Tt,ae])=>{y.add(u(.08,.18,.08,o.yellowSafety,Tt,st+.06,ae))});let ht=.08;y.add(u(8.4,ht,ht,o.aluFrame,0,-1.3+ht/2,1-ht/2),u(8.4,ht,ht,o.aluFrame,0,-1.3+ht/2,-1+ht/2),u(8.4,ht,ht,o.aluFrame,0,1.3-ht/2,1-ht/2),u(8.4,ht,ht,o.aluFrame,0,1.3-ht/2,-1+ht/2)),Vt.forEach(Tt=>{y.add(u(ht,2.6,ht,o.aluFrame,Tt,0,1-ht/2),u(ht,2.6,ht,o.aluFrame,Tt,0,-1+ht/2),u(ht,ht,2-ht*2,o.aluFrame,Tt,1.3-ht/2,0),u(ht,ht,2-ht*2,o.aluFrame,Tt,-1.3+ht/2,0))});let Be=5,ke=u(Be,.05,2-.16,o.galvSteel,-4.2+Be/2,0,0);y.add(ke),y.add(u(8.4-.1,2.6-.1,.05,o.panelSolid,0,0,-1+.04)),y.add(u(8.4-.1,.05,2-.16,o.galvSteel,0,-1.3+.03,0)),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,4.2-.03,0,0));let sn=u(.18,1.2,1.2,o.galvSteel,4.2+.09,-.2,0);y.add(sn),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,-4.2+.03,0,0));let re=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],_n=[1.7,1.7,1.6,1.7,1.7];re.forEach((Tt,ae)=>{let $t=_n[ae]-.08,hn=u($t,.04,2-.16,o.panelCutaway,Tt,1.3-.02,0,!1,!1);y.add(hn),U(hn,o.panelSolid,o.panelCutaway);let us=u($t,2.6-.18,.03,o.panelCutaway,Tt,0,1-.02,!1,!1);y.add(us),U(us,o.panelSolid,o.panelCutaway);let qn=.04;y.add(u($t,qn,.02,o.aluFrame,Tt,(2.6-.18)/2,1),u($t,qn,.02,o.aluFrame,Tt,-(2.6-.18)/2,1),u(qn,2.6-.18,.02,o.aluFrame,Tt-$t/2,0,1),u(qn,2.6-.18,.02,o.aluFrame,Tt+$t/2,0,1)),[-.45,.45].forEach(ir=>{y.add(u(.04,.14,.05,o.doorHandle,Tt+$t/2-.1,ir,1+.02))}),[-.55,.55].forEach(ir=>{y.add(u(.03,.1,.03,o.aluFrame,Tt-$t/2+.04,ir,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([Tt,ae])=>{let $t=b(.14,.14,.04,24,o.aluFrame,Tt,ae,1,Math.PI/2),hn=b(.11,.11,.045,20,o.panelCutaway,Tt,ae,1,Math.PI/2);y.add($t,hn)}),[[-1.65,.1],[3.35,.35]].forEach(([Tt,ae])=>{let $t=b(.08,.08,.03,20,o.aluFrame,Tt,ae,1.015,Math.PI/2),hn=b(.07,.07,.035,20,o.gaugeFace,Tt,ae,1+.015,Math.PI/2);y.add($t,hn),y.add(b(.008,.008,.22,8,o.panelCutaway,Tt-.03,ae-.12,1+.01)),y.add(b(.008,.008,.22,8,o.panelCutaway,Tt+.03,ae-.12,1+.01))});let Dn=.48,An=.68,$e=.18,ye=u(Dn,An,$e,o.galvSteel,2.75,.45,1+$e/2),v=u(.24,.16,.01,o.touchscreen,2.75,.56,1+$e+.005),R=b(.014,.014,.02,10,o.coolingFin,2.65,.42,1+$e+.01,Math.PI/2),k=b(.014,.014,.02,10,o.yellowSafety,2.75,.42,1+$e+.01,Math.PI/2),B=b(.014,.014,.02,10,o.heatingFin,2.85,.42,1+$e+.01,Math.PI/2),O=u(.08,.08,.01,o.yellowSafety,2.75,.3,1+$e+.005),ft=u(.04,.06,.03,o.heatingFin,2.75,.3,1+$e+.02);y.add(ye,v,R,k,B,O,ft);let lt=-1.3/2-.05,q=2-.35,ut=.85,bt=u(.12,ut,q,o.aluFrame,-4.2-.06,lt,0);y.add(bt);for(let Tt=0;Tt<5;Tt++){let ae=lt-ut/2+.1+Tt*((ut-.2)/4),$t=u(.08,.015,q-.06,o.damperBlade,-4.2-.06,ae,0);$t.rotation.z=.55,y.add($t)}let Yt=u(.16,.2,.14,o.actuatorOrange,-4.2-.06,lt,1+.06);y.add(Yt);let qt=u(.1,1.3-.35,2-.35,o.aluFrame,-3.7,lt,0),At=u(.08,1.3-.4,2-.4,o.filterG4,-3.7,lt,0);y.add(qt,At);let te=1.3/2-.05,be=u(.12,ut,q,o.aluFrame,-4.2-.06,te,0);y.add(be);for(let Tt=0;Tt<5;Tt++){let ae=te-ut/2+.1+Tt*((ut-.2)/4),$t=u(.08,.015,q-.06,o.damperBlade,-4.2-.06,ae,0);$t.rotation.z=-.55,y.add($t)}let ve=u(.16,.2,.14,o.actuatorOrange,-4.2-.06,te,1+.06);y.add(ve);let le=new Xe;le.position.set(-2.85,te,0),y.add(le);let Ae=b(.38,.3,.12,24,o.aluFrame,.2,0,0,0,Math.PI/2),Et=b(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);le.add(Ae,Et);let Ve=b(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);le.add(Ve);let de=b(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);le.add(de),w.push(()=>{Et.rotation.x+=.14});let We=u(.1,1.3-.35,2-.35,o.aluFrame,-2.4,lt,0);y.add(We);for(let Tt=0;Tt<2;Tt++)for(let ae=0;ae<3;ae++){let $t=lt-.22+Tt*.44,hn=-1+.35+ae*((2-.7)/2),us=new Ti(.18,.85,4),qn=new qe(us,o.filterCloth);qn.position.set(-1.9,$t,hn),qn.rotation.z=-Math.PI/2,qn.scale.set(.9,1.2,.7),y.add(qn)}let je=new Xe;je.position.set(0,0,0),y.add(je);let ce=u(.38,2.6-.2,2-.2,o.aluFrame,0,0,0);y.add(ce);let Re=b(1.12,1.12,.32,36,o.aluFrame,0,0,0,0,Math.PI/2),Wt=b(1.08,1.08,.3,32,o.rotorWheel,0,0,0,0,Math.PI/2);je.add(Re,Wt);for(let Tt=0;Tt<12;Tt++){let ae=Tt/12*Math.PI*2,$t=u(.025,2.12,.02,o.aluFrame,0,0,0);$t.rotation.x=ae,je.add($t)}let Jt=b(.09,.09,.22,12,o.motorCast,.22,1.05,.75,0,Math.PI/2),Qe=b(.02,.02,.3,8,o.doorHandle,.22,.95,.75);y.add(Jt,Qe),w.push(()=>{je.rotation.x+=.01});let he=2-.35,Fe=1.3-.35,Rn=u(.24,Fe,he,o.coolingFin,1.15,lt,0);y.add(Rn),[-.5,.5].forEach(Tt=>{let ae=b(.045,.045,Fe+.1,14,o.copperPipe,1.15,lt,Tt);y.add(ae)});for(let Tt=0;Tt<8;Tt++){let ae=lt-Fe/2+.1+Tt*((Fe-.2)/7),$t=new qe(new Gs(.032,.012,8,12,Math.PI),o.copperPipe);$t.position.set(1.15,ae,1-.18),$t.rotation.y=Math.PI/2,$t.rotation.x=Math.PI/2,y.add($t)}let si=u(1.3,.09,he+.1,o.drainPan,1.5,-1.3+.1,0);y.add(si);let Nn=b(.02,.02,.18,10,o.stainless,1.8,-1.3+.06,1-.05,0,0);y.add(Nn);let tr=u(.12,Fe,he,o.aluFrame,1.45,lt,0);y.add(tr);for(let Tt=0;Tt<12;Tt++){let ae=-.7+Tt*((he-.2)/11),$t=u(.08,Fe-.05,.012,o.aluFrame,1.45,lt,ae);$t.rotation.y=.35,y.add($t)}let di=u(.18,Fe,he,o.heatingFin,1.85,lt,0);y.add(di),[-.4,.4].forEach(Tt=>{let ae=b(.04,.04,Fe+.1,14,o.copperPipe,1.85,lt,Tt);y.add(ae)});let Cn=new Xe;Cn.position.set(2.85,lt,0),y.add(Cn);let Zi=b(.48,.38,.18,28,o.aluFrame,-.4,0,0,0,Math.PI/2),er=b(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);Cn.add(Zi,er);let hs=b(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),nr=b(.14,.05,.16,16,o.aluFrame,-.25,0,0,0,Math.PI/2);Cn.add(hs,nr),w.push(()=>{hs.rotation.x+=.15});let Fn=b(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),Gn=u(.14,.12,.14,o.motorCast,.32,.26,0);Cn.add(Fn,Gn);let Ri=u(1.1,.08,.8,o.baseSkid,.05,-Fe/2+.08,0);Cn.add(Ri),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Tt,ae])=>{let $t=u(.12,.03,.12,o.motorCast,Tt,-Fe/2+.02,ae),hn=b(.04,.04,.12,10,o.springSilver,Tt,-Fe/2+.08,ae);Cn.add($t,hn)});let Ft=u(.1,Fe,he,o.rubberBlack,2.35,lt,0);y.add(Ft);let fe=u(1.2,.03,.03,o.yellowSafety,2.9,lt+.4,1-.25),_e=u(1.2,.03,.03,o.yellowSafety,2.9,lt,1-.25);y.add(fe,_e);for(let Tt=-1;Tt<=1;Tt++){let ae=Tt*.45,$t=u(.65,Fe-.1,.22,o.galvSteel,3.8,lt,ae),hn=b(.11,.11,Fe-.1,16,o.aluFrame,3.47,lt,ae);y.add($t,hn)}}function V(y){let st=-1.4100000000000001,It=u(8.6+.2,.22,.1,o.baseSkid,0,st,1-.05),ct=u(8.6+.2,.22,.1,o.baseSkid,0,st,-1+.05);y.add(It,ct);let Vt=[-4.3,-2.6,-.9,.8,2.6,4.3];Vt.forEach(Ft=>{y.add(u(.12,.22,2-.2,o.baseSkid,Ft,st,0))}),[-2.6,.8].forEach(Ft=>{y.add(u(.28,.12,.12,o.stainless,Ft,st,1-.04)),y.add(u(.28,.12,.12,o.stainless,Ft,st,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([Ft,fe])=>{y.add(u(.08,.18,.08,o.yellowSafety,Ft,st+.06,fe))});let ht=.08;y.add(u(8.6,ht,ht,o.stainless,0,-1.3+ht/2,1-ht/2),u(8.6,ht,ht,o.stainless,0,-1.3+ht/2,-1+ht/2),u(8.6,ht,ht,o.stainless,0,1.3-ht/2,1-ht/2),u(8.6,ht,ht,o.stainless,0,1.3-ht/2,-1+ht/2)),Vt.forEach(Ft=>{y.add(u(ht,2.6,ht,o.stainless,Ft,0,1-ht/2),u(ht,2.6,ht,o.stainless,Ft,0,-1+ht/2),u(ht,ht,2-ht*2,o.stainless,Ft,1.3-ht/2,0),u(ht,ht,2-ht*2,o.stainless,Ft,-1.3+ht/2,0))});let Be=5.1,ke=u(Be,.05,2-.16,o.stainless,-4.3+Be/2,0,0);y.add(ke),y.add(u(8.6-.1,2.6-.1,.04,o.panelSolid,0,0,-1+.03)),y.add(u(8.6-.12,2.6-.12,.01,o.stainless,0,0,-1+.055)),y.add(u(8.6-.1,.05,2-.16,o.stainless,0,-1.3+.03,0));let sn=b(.04,.04,8.6-.2,12,o.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);y.add(sn),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,4.3-.03,0,0));let re=u(.18,1.2,1.2,o.stainless,4.3+.09,-.2,0);y.add(re),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,-4.3+.03,0,0));let _n=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],Dn=[1.7,1.7,1.7,1.8,1.7];_n.forEach((Ft,fe)=>{let _e=Dn[fe]-.08,Tt=u(_e,.04,2-.16,o.panelCutaway,Ft,1.3-.02,0,!1,!1);y.add(Tt),U(Tt,o.panelSolid,o.panelCutaway);let ae=u(_e,2.6-.18,.03,o.panelCutaway,Ft,0,1-.02,!1,!1);y.add(ae),U(ae,o.panelSolid,o.panelCutaway);let $t=.04;y.add(u(_e,$t,.02,o.stainless,Ft,(2.6-.18)/2,1),u(_e,$t,.02,o.stainless,Ft,-(2.6-.18)/2,1),u($t,2.6-.18,.02,o.stainless,Ft-_e/2,0,1),u($t,2.6-.18,.02,o.stainless,Ft+_e/2,0,1)),[-.45,.45].forEach(hn=>{y.add(u(.04,.14,.05,o.doorHandle,Ft+_e/2-.1,hn,1+.02))}),[-.55,.55].forEach(hn=>{y.add(u(.03,.1,.03,o.stainless,Ft-_e/2+.04,hn,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([Ft,fe])=>{let _e=b(.14,.14,.04,24,o.stainless,Ft,fe,1,Math.PI/2),Tt=b(.11,.11,.045,20,o.panelCutaway,Ft,fe,1,Math.PI/2);y.add(_e,Tt)}),[[-1.75,.1],[3.45,.35]].forEach(([Ft,fe])=>{let _e=b(.08,.08,.03,20,o.stainless,Ft,fe,1.015,Math.PI/2),Tt=b(.07,.07,.035,20,o.gaugeFace,Ft,fe,1+.015,Math.PI/2);y.add(_e,Tt),y.add(b(.008,.008,.22,8,o.panelCutaway,Ft-.03,fe-.12,1+.01)),y.add(b(.008,.008,.22,8,o.panelCutaway,Ft+.03,fe-.12,1+.01))});let An=.48,$e=.68,ye=.18,v=u(An,$e,ye,o.stainless,2.85,.45,1+ye/2),R=u(.24,.16,.01,o.touchscreen,2.85,.56,1+ye+.005),k=b(.014,.014,.02,10,o.coolingFin,2.75,.42,1+ye+.01,Math.PI/2),B=b(.014,.014,.02,10,o.yellowSafety,2.85,.42,1+ye+.01,Math.PI/2),O=b(.014,.014,.02,10,o.heatingFin,2.95,.42,1+ye+.01,Math.PI/2),ft=u(.08,.08,.01,o.yellowSafety,2.85,.3,1+ye+.005),lt=u(.04,.06,.03,o.heatingFin,2.85,.3,1+ye+.02);y.add(v,R,k,B,O,ft,lt);let q=-1.3/2-.05,ut=2-.35,bt=.85,Yt=u(.12,bt,ut,o.stainless,-4.3-.06,q,0);y.add(Yt);for(let Ft=0;Ft<5;Ft++){let fe=q-bt/2+.1+Ft*((bt-.2)/4),_e=u(.08,.015,ut-.06,o.damperBlade,-4.3-.06,fe,0);_e.rotation.z=.55,y.add(_e)}let qt=u(.16,.2,.14,o.actuatorOrange,-4.3-.06,q,1+.06);y.add(qt);let At=u(.1,1.3-.35,2-.35,o.stainless,-3.8,q,0),te=u(.08,1.3-.4,2-.4,o.filterG4,-3.8,q,0);y.add(At,te);let be=1.3/2-.05,ve=u(.12,bt,ut,o.stainless,-4.3-.06,be,0);y.add(ve);for(let Ft=0;Ft<5;Ft++){let fe=be-bt/2+.1+Ft*((bt-.2)/4),_e=u(.08,.015,ut-.06,o.damperBlade,-4.3-.06,fe,0);_e.rotation.z=-.55,y.add(_e)}let le=u(.16,.2,.14,o.actuatorOrange,-4.3-.06,be,1+.06);y.add(le);let Ae=new Xe;Ae.position.set(-2.95,be,0),y.add(Ae);let Et=b(.38,.3,.12,24,o.stainless,.2,0,0,0,Math.PI/2),Ve=b(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);Ae.add(Et,Ve);let de=b(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);Ae.add(de);let We=b(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);Ae.add(We),w.push(()=>{Ve.rotation.x+=.14});let je=u(.1,1.3-.35,2-.35,o.stainless,-2.5,q,0);y.add(je);for(let Ft=0;Ft<2;Ft++)for(let fe=0;fe<3;fe++){let _e=q-.22+Ft*.44,Tt=-1+.35+fe*((2-.7)/2),ae=new Ti(.18,.85,4),$t=new qe(ae,o.filterCloth);$t.position.set(-2,_e,Tt),$t.rotation.z=-Math.PI/2,$t.scale.set(.9,1.2,.7),y.add($t)}let ce=u(1.5,1.4,2-.35,o.stainless,-.05,0,0);ce.rotation.z=Math.PI/4,y.add(ce);let Re=u(2.2,.04,2-.3,o.stainless,-.05,0,0);Re.rotation.z=-Math.PI/4,y.add(Re);let Wt=2-.35,Jt=1.3-.35;for(let Ft=0;Ft<3;Ft++){let fe=q-.25+Ft*.25,_e=b(.02,.02,Wt-.1,12,o.coolingFin,.95,fe,0,Math.PI/2);y.add(_e),y.add(u(.04,.04,.04,o.stainless,.95,fe,1-.2)),y.add(u(.04,.04,.04,o.stainless,.95,fe,-1+.2))}let Qe=u(.24,Jt,Wt,o.coolingFin,1.25,q,0);y.add(Qe),[-.5,.5].forEach(Ft=>{let fe=b(.045,.045,Jt+.1,14,o.copperPipe,1.25,q,Ft);y.add(fe)});for(let Ft=0;Ft<8;Ft++){let fe=q-Jt/2+.1+Ft*((Jt-.2)/7),_e=new qe(new Gs(.032,.012,8,12,Math.PI),o.copperPipe);_e.position.set(1.25,fe,1-.18),_e.rotation.y=Math.PI/2,_e.rotation.x=Math.PI/2,y.add(_e)}let he=u(1.3,.09,Wt+.1,o.stainless,1.6,-1.3+.1,0);y.add(he);let Fe=b(.025,.025,.2,12,o.stainless,1.9,-1.3+.06,1-.05);y.add(Fe);let Rn=u(.12,Jt,Wt,o.stainless,1.55,q,0);y.add(Rn);for(let Ft=0;Ft<12;Ft++){let fe=-.7+Ft*((Wt-.2)/11),_e=u(.08,Jt-.05,.012,o.stainless,1.55,q,fe);_e.rotation.y=.35,y.add(_e)}let si=u(.18,Jt,Wt,o.heatingFin,1.95,q,0);y.add(si),[-.4,.4].forEach(Ft=>{let fe=b(.04,.04,Jt+.1,14,o.copperPipe,1.95,q,Ft);y.add(fe)});let Nn=new Xe;Nn.position.set(2.85,q,0),y.add(Nn);let tr=b(.48,.38,.18,28,o.stainless,-.4,0,0,0,Math.PI/2),di=b(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);Nn.add(tr,di);let Cn=b(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Zi=b(.14,.05,.16,16,o.stainless,-.25,0,0,0,Math.PI/2);Nn.add(Cn,Zi),w.push(()=>{Cn.rotation.x+=.15});let er=b(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),hs=u(.14,.12,.14,o.motorCast,.32,.26,0);Nn.add(er,hs);let nr=u(1.1,.08,.8,o.stainless,.05,-Jt/2+.08,0);Nn.add(nr),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ft,fe])=>{let _e=u(.12,.03,.12,o.motorCast,Ft,-Jt/2+.02,fe),Tt=b(.04,.04,.12,10,o.springSilver,Ft,-Jt/2+.08,fe);Nn.add(_e,Tt)});let Fn=u(.1,Jt,Wt,o.rubberBlack,2.35,q,0);y.add(Fn);let Gn=u(.2,Jt-.1,Wt-.1,o.stainless,3.65,q,0),Ri=u(.16,Jt-.15,Wt-.15,o.filterCloth,3.65,q,0);y.add(Gn,Ri);for(let Ft=-1;Ft<=1;Ft+=2){let fe=Ft*.4,_e=u(.42,Jt-.1,.2,o.stainless,4.05,q,fe);y.add(_e)}}function D(y){let st=-1.2750000000000001,It=6.2+.2,ct=2.2+.2,Vt=u(It,.45,.08,o.baseSkid,0,st,1.1+.06),ht=u(It,.45,.08,o.baseSkid,0,st,-1.1-.06),Be=u(.08,.45,ct-.16,o.baseSkid,-3.1-.06,st,0),ke=u(.08,.45,ct-.16,o.baseSkid,3.1+.06,st,0);y.add(Vt,ht,Be,ke);let sn=u(It+.08,.04,.14,o.aluFrame,0,-1.05-.02,1.1+.05),re=u(It+.08,.04,.14,o.aluFrame,0,-1.05-.02,-1.1-.05);y.add(sn,re);let _n=u(It,.02,.04,o.rubberBlack,0,-1.05+.01,1.1),Dn=u(It,.02,.04,o.rubberBlack,0,-1.05+.01,-1.1);y.add(_n,Dn),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([Lt,pe])=>{let mn=u(.14,.25,.14,o.yellowSafety,Lt,st+.1,pe),gn=b(.035,.035,.16,16,o.motorCast,Lt,st+.16,pe,0,Math.PI/2);y.add(mn,gn)});let An=u(.9,.18,.9,o.galvSteel,-.1,st-.14,0),$e=u(.82,.19,.82,o.motorCast,-.1,st-.14,0),ye=u(.9,.18,.9,o.galvSteel,2.3,st-.14,0),v=u(.82,.19,.82,o.motorCast,2.3,st-.14,0);y.add(An,$e,ye,v);let R=.08;y.add(u(6.2,R,R,o.aluFrame,0,-1.05+R/2,1.1-R/2),u(6.2,R,R,o.aluFrame,0,-1.05+R/2,-1.1+R/2),u(6.2,R,R,o.aluFrame,0,1.05-R/2,1.1-R/2),u(6.2,R,R,o.aluFrame,0,1.05-R/2,-1.1+R/2)),[-3.1+R/2,-.7,.6,1.8,3.1-R/2].forEach(Lt=>{y.add(u(R,2.1-2*R,R,o.aluFrame,Lt,0,1.1-R/2),u(R,2.1-2*R,R,o.aluFrame,Lt,0,-1.1+R/2))}),[-3.1+R/2,-.7,.6,1.8,3.1-R/2].forEach(Lt=>{y.add(u(R,R,2.2-2*R,o.aluFrame,Lt,-1.05+R/2,0),u(R,R,2.2-2*R,o.aluFrame,Lt,1.05-R/2,0))}),y.add(u(6.2-.1,2.1-.1,.05,o.panelSolid,0,0,-1.1+.04)),y.add(u(6.2-.1,.05,2.2-.1,o.galvSteel,0,-1.05+.04,0)),y.add(u(.05,2.1-.1,2.2-.1,o.panelSolid,3.1-.03,0,0));let k=u(3.8,.06,2.2+.1,o.panelSolid,1.15,1.05+.03,0);y.add(k),y.add(u(3.84,.04,.04,o.aluFrame,1.15,1.05+.01,1.1+.06),u(3.84,.04,.04,o.aluFrame,1.15,1.05+.01,-1.1-.06));let B=u(.06,2.1-.12,2.2-.12,o.galvSteel,-.7,0,0);y.add(B);let O=u(2.2,2.1-.25,.12,o.coolingFin,-1.85,.02,-1.1+.15),ft=u(.12,2.1-.25,2.2-.3,o.coolingFin,-3.1+.15,.02,0);y.add(O,ft);for(let Lt=-.8;Lt<=.8;Lt+=.2){let pe=u(2.25,.02,.02,o.aluFrame,-1.85,Lt,-1.05);y.add(pe)}[-.8,-.2,.4].forEach(Lt=>{let pe=b(.035,.035,2.1,14,o.copperPipe,-1.85,Lt,-.8600000000000001,0,Math.PI/2);y.add(pe)}),[-2.2,-1.2].forEach((Lt,pe)=>{let gn=b(.48,.46,.22,28,o.motorCast,Lt,1.1600000000000001,0,0,0,!0),fi=b(.51,.51,.04,28,o.aluFrame,Lt,1.05+.22,0);y.add(gn,fi);let ds=b(.46,.46,.02,24,o.galvSteel,Lt,1.05+.22+.01,0,0,0,!0);y.add(ds);for(let Ki=0;Ki<4;Ki++){let fs=u(.9,.015,.015,o.galvSteel,Lt,1.285,0);fs.rotation.y=Ki/4*Math.PI,y.add(fs)}let pi=new Xe;pi.position.set(Lt,1.05+.12,0),y.add(pi);let al=b(.12,.12,.08,16,o.aluFrame,0,0,0);pi.add(al);for(let Ki=0;Ki<5;Ki++){let fs=new Xe;fs.rotation.y=Ki/5*Math.PI*2;let Nc=u(.34,.02,.11,o.fanImpeller,.24,0,0);Nc.rotation.x=.35,fs.add(Nc),pi.add(fs)}let ol=pe===0?.18:.17;w.push(()=>{pi.rotation.y+=ol});let ll=b(.15,.15,.3,16,o.motorCast,Lt,1.05-.12,0);y.add(ll)});let q=u(1.5,.06,.6,o.baseSkid,-1.8,-1.05+.1,.1);y.add(q),[-2.15,-1.45].forEach(Lt=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([ds,pi])=>{y.add(b(.04,.04,.04,12,o.rubberBlack,Lt+ds,-1.05+.14,.1+pi))});let pe=b(.16,.16,.58,24,o.motorCast,Lt,-1.05+.45,.1),mn=b(.14,.16,.08,20,o.motorCast,Lt,-1.05+.76,.1),gn=u(.1,.14,.08,o.motorCast,Lt+.14,-1.05+.5,.1),fi=b(.165,.165,.05,20,o.heatingFin,Lt,-1.05+.22,.1);y.add(pe,mn,gn,fi)});let bt=b(.12,.12,.52,20,o.motorCast,-.95,-1.05+.42,.25),Yt=b(.09,.12,.06,16,o.motorCast,-.95,-1.05+.7,.25);y.add(bt,Yt);let qt=b(.04,.04,.8,14,o.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),At=b(.04,.04,.6,14,o.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);y.add(qt,At);let te=b(.03,.03,1.1,14,o.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),be=b(.045,.045,.22,16,o.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);y.add(te,be);let ve=b(.06,.06,.24,16,o.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),le=b(.03,.03,.34,14,o.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),Ae=u(.09,.12,.09,o.brassGold,-.95,-1.05+.45,-.3),Et=b(.01,.01,.2,8,o.rubberBlack,-.95,-1.05+.54,-.3);y.add(ve,le,Ae,Et),[-.15,.15].forEach(Lt=>{let pe=b(.045,.045,.02,16,o.gaugeFace,-.73,-.4,Lt,0,Math.PI/2);y.add(pe)});let Ve=1.1,de=.8,We=.35,je=u(Ve,de,We,o.galvSteel,-.1,.2,-1.1-We/2+.04),ce=u(Ve+.06,.03,We+.08,o.aluFrame,-.1,.2+de/2+.02,-1.1-We/2);ce.rotation.x=-.12,y.add(je,ce);for(let Lt=-.3;Lt<=.3;Lt+=.12){let pe=u(Ve-.06,.02,.18,o.damperBlade,-.1,.2+Lt,-1.1-We/2);pe.rotation.x=.45,y.add(pe)}let Re=1,Jt=u(Re,.75,.08,o.aluFrame,-.1,.2,-1.1+.25);y.add(Jt);for(let Lt=-.25;Lt<=.25;Lt+=.14){let pe=u(Re-.06,.11,.015,o.damperBlade,-.1,.2+Lt,-.8500000000000001);pe.rotation.x=.3,y.add(pe)}let Qe=.9,Fe=u(Qe,.08,.9,o.aluFrame,-.1,-1.05+.15,0);y.add(Fe);for(let Lt=-.3;Lt<=.3;Lt+=.15){let pe=u(Qe-.06,.015,.12,o.damperBlade,-.1,-.9,Lt);pe.rotation.z=.25,y.add(pe)}let Rn=u(.16,.22,.14,o.actuatorOrange,-.1,.35,1.1-.2),si=b(.04,.04,.06,16,o.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),Nn=u(.03,.14,.02,o.motorCast,-.1,.42,1.1-.1);y.add(Rn,si,Nn);let tr=b(.015,.015,.35,10,o.stainless,.25,.2,0);y.add(tr);let di=.6,Cn=2.1-.3,Zi=2.2-.3,er=u(.18,Cn,Zi,o.galvSteel,di,0,0);y.add(er);for(let Lt=-Zi/2+.3;Lt<=Zi/2-.2;Lt+=.5){let pe=u(.05,Cn-.1,.44,o.filterG4,di-.05,0,Lt),mn=u(.07,Cn-.1,.44,o.filterCloth,di+.05,0,Lt);y.add(pe,mn)}let hs=b(.01,.01,.2,8,o.copperPipe,di-.14,.3,1.1-.15),nr=b(.01,.01,.2,8,o.copperPipe,di+.14,.3,1.1-.15);y.add(hs,nr);let Fn=1.25,Gn=2.1-.35,Ri=2.2-.35,Ft=u(.32,Gn,Ri,o.coolingFin,Fn,.02,0);y.add(Ft);for(let Lt=0;Lt<4;Lt++)for(let pe=0;pe<3;pe++){let mn=-Gn/2+.2+pe*(Gn/3.2),gn=Fn-.12+Lt*.08,fi=b(.025,.025,.04,12,o.copperPipe,gn,mn,1.1-.18,Math.PI/2,0);y.add(fi)}let fe=b(.035,.035,.08,14,o.brassGold,Fn-.15,-.2,1.1-.22);y.add(fe);for(let Lt=0;Lt<4;Lt++){let pe=b(.008,.008,.28,8,o.copperPipe,Fn-.08,-.2+Lt*.1,.8800000000000001,0,Math.PI/4);y.add(pe)}let _e=Ri+.15,Tt=.85,ae=.09,$t=u(Tt,ae,_e,o.drainPan,Fn,-1.05+ae/2+.05,0);y.add($t);let hn=b(.03,.03,.35,12,o.stainless,Fn+.1,-1.05-.05,1.1+.02),us=b(.03,.03,.22,12,o.stainless,Fn+.22,-1.05-.12,1.1+.02),qn=b(.03,.03,.14,12,o.stainless,Fn+.16,-1.05-.22,1.1+.02,0,Math.PI/2);y.add(hn,us,qn);let ir=u(.12,Gn-.05,Ri,o.aluFrame,Fn+.24,.02,0);y.add(ir);let Lc=1.8,Du=Gn,Nu=Ri;for(let Lt=-.5;Lt<=.5;Lt+=.25){let pe=b(.045,.045,Nu-.2,16,o.stainless,Lc,Lt,0,Math.PI/2,0);y.add(pe)}let Fu=u(.25,Du-.2,.3,o.galvSteel,Lc,0,-1.1+.2);y.add(Fu);let Ji=new Xe;Ji.position.set(2.45,.05,0),y.add(Ji);let Uu=b(.48,.38,.18,28,o.aluFrame,-.38,0,0,0,Math.PI/2),Ou=b(.44,.44,.03,24,o.copperPipe,-.36,0,0,0,Math.PI/2,!0);Ji.add(Uu,Ou);let Dc=b(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Bu=b(.14,.05,.16,16,o.aluFrame,-.24,0,0,0,Math.PI/2);Ji.add(Dc,Bu),w.push(()=>{Dc.rotation.x+=.15});let Hu=b(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),zu=u(.14,.12,.14,o.motorCast,.32,.26,0);Ji.add(Hu,zu);let ku=u(1.1,.08,.8,o.baseSkid,.05,-Gn/2+.1,0);Ji.add(ku),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Lt,pe])=>{let mn=u(.12,.03,.12,o.motorCast,Lt,-Gn/2+.04,pe),gn=b(.04,.04,.12,10,o.springSilver,Lt,-Gn/2+.1,pe);Ji.add(mn,gn)});let Vu=u(.85,.6,.85,o.galvSteel,2.3,-1.05+.3,0),Gu=u(.9,.1,.9,o.rubberBlack,2.3,-1.05+.05,0);y.add(Vu,Gu),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((Lt,pe)=>{let mn=Lt.maxX-Lt.minX,gn=(Lt.minX+Lt.maxX)/2,fi=2.1-.22,ds=u(mn-.04,fi,.04,o.panelCutaway,gn,0,1.1-.02,!1,!1);y.add(ds),U(ds,o.panelSolid,o.panelCutaway);let pi=u(.04,.14,.04,o.doorHandle,gn+mn*.42,0,1.1+.01),al=u(.03,.08,.03,o.stainless,gn-mn*.45,fi*.35,1.1+.01),ol=u(.03,.08,.03,o.stainless,gn-mn*.45,-fi*.35,1.1+.01);if(y.add(pi,al,ol),pe===1||pe===2||pe===3){let ll=b(.12,.12,.04,20,o.aluFrame,gn,.22,1.1,Math.PI/2);y.add(ll)}});let Wu=u(.42,.65,.18,o.panelSolid,.6,.3,1.1+.08),Xu=u(.38,.6,.02,o.aluFrame,.6,.3,1.1+.17),Yu=u(.24,.16,.01,o.touchscreen,.6,.4,1.1+.18),qu=u(.09,.09,.02,o.yellowSafety,.6,.18,1.1+.18),Zu=b(.035,.035,.05,12,o.heatingFin,.6,.18,1.1+.2,Math.PI/2);y.add(Wu,Xu,Yu,qu,Zu),[-.15,.15].forEach(Lt=>{let pe=b(.065,.065,.035,20,o.aluFrame,.6,-.25,1.1800000000000002+Lt,Math.PI/2),mn=b(.055,.055,.037,20,o.gaugeFace,.6,-.25,1.1+.08+Lt,Math.PI/2),gn=b(.008,.008,.3,8,o.panelCutaway,.6,-.42,1.1+.08+Lt);y.add(pe,mn,gn)})}function W(y,Q){if(Q==="tks"){z(y);return}if(Q==="thks"){V(y);return}if(Q==="rooftop"){D(y);return}let tt=Q==="thks",St=Q==="thrv-dx",wt=Q==="hrv",Dt=Q==="rooftop",pt=wt?4.8:Dt?6.2:7.6,Nt=wt?1.9:2.6,st=wt?1.8:2,It=pt/2,ct=Nt/2,Vt=st/2,ht=.22,Be=-ct-ht/2,ke=u(pt+.3,ht,.12,o.baseSkid,0,Be,Vt-.06),sn=u(pt+.3,ht,.12,o.baseSkid,0,Be,-Vt+.06);y.add(ke,sn),[-It,-It*.5,0,It*.5,It].forEach(ye=>{y.add(u(.12,ht,st-.24,o.baseSkid,ye,Be,0))});let re=.08,_n=tt?o.stainless:o.aluFrame;y.add(u(pt,re,re,_n,0,-ct+re/2,Vt-re/2),u(pt,re,re,_n,0,-ct+re/2,-Vt+re/2),u(pt,re,re,_n,0,ct-re/2,Vt-re/2),u(pt,re,re,_n,0,ct-re/2,-Vt+re/2));let Dn=tt?o.stainless:o.galvSteel;y.add(u(pt-.1,Nt-.1,.05,o.panelSolid,0,0,-Vt+.04),u(pt-.1,.05,st-.1,o.panelSolid,0,ct-.03,0),u(pt-.1,.05,st-.1,Dn,0,-ct+.03,0),u(.05,Nt-.1,st-.1,o.panelSolid,It-.03,0,0));let An=wt?3:4,$e=(pt-.2)/An;for(let ye=0;ye<An;ye++){let v=-It+.1+(ye+.5)*$e,R=u($e-.04,Nt-.18,.03,o.panelCutaway,v,0,Vt-.02,!1,!1);y.add(R),P.push(R),y.add(u(.04,.12,.04,o.doorHandle,v+$e*.4,0,Vt+.01)),y.add(b(.11,.11,.04,16,o.aluFrame,v,.2,Vt,Math.PI/2))}if(wt){let ye=u(1.5,1.4,st-.35,o.aluFrame,0,0,0);ye.rotation.z=Math.PI/4,y.add(ye),[-1.4,1.4].forEach((v,R)=>{let k=R===0?-.35:.35,B=b(.35,.35,.25,20,o.fanHousing,v,k,0,0,Math.PI/2);y.add(B),w.push(()=>{B.rotation.x+=.1})}),[-1.9,1.9].forEach(v=>{y.add(u(.06,Nt-.4,st-.4,o.filterCloth,v,0,0))}),[[-It-.1,.4],[It+.1,-.4]].forEach(([v,R])=>{y.add(b(.32,.32,.22,24,o.galvSteel,v,R,0,0,Math.PI/2,!0))})}else if(Dt){[-1.2,1.2].forEach(v=>{let R=b(.55,.55,.18,24,o.motorCast,v,ct+.09,0,0,0,!0),k=b(.48,.48,.04,4,o.fanImpeller,v,ct+.12,0);y.add(R,k),w.push(()=>{k.rotation.y+=.15})}),[-1.8,-1].forEach(v=>{let R=b(.2,.2,.7,16,o.motorCast,v,-ct+.5,-Vt+.5);y.add(R)});let ye=b(.45,.45,.35,20,o.fanHousing,1.8,-.2,0,0,Math.PI/2);y.add(ye),w.push(()=>{ye.rotation.x+=.12}),y.add(u(.3,Nt-.5,st-.4,o.coolingFin,.5,-.1,0))}else{let ye=new Xe;ye.position.set(0,0,0),y.add(ye);let v=b(1.05,1.05,.28,32,o.aluFrame,0,0,0,0,Math.PI/2),R=b(1.01,1.01,.26,28,o.rotorWheel,0,0,0,0,Math.PI/2);ye.add(v,R);for(let O=0;O<12;O++){let ft=O/12*Math.PI*2,lt=u(.03,1.98,.02,o.aluFrame,0,0,0);lt.rotation.x=ft,ye.add(lt)}w.push(()=>{ye.rotation.x+=.008});let k=b(.42,.42,.35,24,o.fanHousing,2.8,-ct/2+.1,0,0,Math.PI/2),B=b(.36,.36,.3,24,o.fanHousing,-1.3,ct/2-.05,0,0,Math.PI/2);y.add(k,B),w.push(()=>{k.rotation.x+=.12,B.rotation.x+=.12}),y.add(u(.28,ct-.3,st-.35,tt?o.stainless:o.coolingFin,1.35,-ct/2,0)),y.add(u(.22,ct-.3,st-.35,o.heatingFin,1.85,-ct/2,0)),y.add(u(.95,.08,st-.25,o.drainPan,1.6,-ct+.12,0)),y.add(u(.06,ct-.25,st-.3,tt?o.stainless:o.aluFrame,-2.1,-ct/2,0));for(let O=0;O<4;O++){let ft=-Vt+.25+(O+.5)*((st-.4)/4),lt=new qe(new Ti(.2,.75,4),o.filterCloth);lt.rotateZ(-Math.PI/2),lt.position.set(-1.7,-ct/2,ft),lt.scale.set(1,1.4,.8),y.add(lt)}if(tt){y.add(u(.18,ct-.3,st-.35,o.stainless,2.15,-ct/2,0));let O=b(.03,.03,st-.5,12,o.coolingFin,1.1,-ct/2+.2,0,Math.PI/2);y.add(O)}[-ct/2,ct/2].forEach(O=>{y.add(u(.08,ct-.25,st-.3,o.aluFrame,-It-.04,O,0)),y.add(u(.14,.18,.12,o.actuatorOrange,-It-.04,O,Vt+.05))}),St&&y.add(b(.2,.2,.65,16,o.motorCast,2.5,-ct/2,-Vt+.5)),y.add(u(.32,.55,.18,o.motorCast,2.3,.35,Vt+.09))}}function $(y,Q){if(Q==="tdf"){y.add(u(3.2,.04,2,o.galvSteel,0,2/2,0),u(3.2,.04,2,o.galvSteel,0,-2/2,0),u(3.2,2,.04,o.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(st=>{y.add(u(.08,.12,2+.2,o.aluFrame,st,2/2+.04,0),u(.08,.12,2+.2,o.aluFrame,st,-2/2-.04,0),u(.08,2,.12,o.aluFrame,st,0,2/2+.04),u(.08,2,.12,o.aluFrame,st,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(It=>{[-2/2-.04,2/2+.04].forEach(ct=>{y.add(u(.1,.14,.14,o.baseSkid,st,It,ct))})})});let Dt=u(3.2-.1,2-.1,.03,o.panelCutaway,0,0,2/2,!1,!1);y.add(Dt),P.push(Dt),[-.8,.8].forEach(st=>{y.add(u(.08,.12,.04,o.doorHandle,st,2/2-.1,2/2+.02))});let pt=b(.78,.78,.45,24,o.fanImpeller,0,0,0,0,Math.PI/2),Nt=b(.28,.28,.35,16,o.motorCast,.25,0,0,0,Math.PI/2);y.add(pt,Nt),w.push(()=>{pt.rotation.x+=.14}),y.add(u(.24,.18,.16,o.fanHousing,-.6,2/2+.1,.4))}else if(Q==="yangin-fani"){let wt=b(1.25,1.25,4.2,32,o.galvSteel,0,0,0,0,Math.PI/2,!0);y.add(wt),[-4.2/2,4.2/2].forEach(It=>{let ct=b(1.43,1.43,.06,32,o.baseSkid,It,0,0,0,Math.PI/2,!0);y.add(ct);for(let Vt=0;Vt<12;Vt++){let ht=Vt/12*Math.PI*2;y.add(u(.08,.04,.04,o.doorHandle,It,Math.sin(ht)*(1.25+.09),Math.cos(ht)*(1.25+.09)))}});let Dt=b(.46,.46,2,24,o.motorCast,.1,0,0,0,Math.PI/2),pt=new qe(new Ti(.46,.6,20),o.motorCast);pt.rotateZ(-Math.PI/2),pt.position.set(-1.2,0,0),y.add(Dt,pt);let Nt=new Xe;Nt.position.set(-.6,0,0),y.add(Nt);let st=b(.48,.48,.2,20,o.fanImpeller,0,0,0,0,Math.PI/2);Nt.add(st);for(let It=0;It<8;It++){let ct=It/8*Math.PI*2,Vt=u(.04,.7,.16,o.fanImpeller,0,Math.sin(ct)*.78,Math.cos(ct)*.78);Vt.rotation.x=ct+.35,Nt.add(Vt)}w.push(()=>{Nt.rotation.x+=.15});for(let It=0;It<4;It++){let ct=It/4*Math.PI*2,Vt=u(.03,1.25-.46,.1,o.baseSkid,.4,Math.sin(ct)*(1.25+.46)/2,Math.cos(ct)*(1.25+.46)/2);Vt.rotation.x=ct,y.add(Vt)}y.add(u(2.8,.12,.35,o.baseSkid,0,-1.25-.1,.9),u(2.8,.12,.35,o.baseSkid,0,-1.25-.1,-.9)),y.add(u(.24,.24,.16,o.actuatorOrange,0,1.25+.1,0))}else{let wt=b(.62,.62,5.2,28,o.galvSteel,0,0,0,0,Math.PI/2,!0);y.add(wt),[-1.7,1.7].forEach(Nt=>{y.add(b(.62+.12,.62+.12,1.5,28,o.aluFrame,Nt,0,0,0,Math.PI/2,!0))});let Dt=b(.28,.28,1.2,16,o.motorCast,0,0,0,0,Math.PI/2),pt=b(.62-.05,.62-.05,.12,8,o.fanImpeller,0,0,0,0,Math.PI/2);y.add(Dt,pt),w.push(()=>{pt.rotation.x+=.16});for(let Nt=-.3;Nt<=.3;Nt+=.2){let st=u(.08,.04,.8,o.damperBlade,2.62,Nt,0);st.rotation.z=-.2,y.add(st)}[-5.2/2-.02,5.2/2+.02].forEach(Nt=>{y.add(b(.62+.02,.62+.02,.04,16,o.aluFrame,Nt,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(Nt=>{y.add(u(.08,.55,.25,o.baseSkid,Nt,.62+.35,0))})}}function J(y){let Nt=u(3,.03,1.3,o.galvSteel,-1.1,.45,0),st=u(3,.03,1.3,o.galvSteel,-1.1,-.45,0),It=u(3,.9,.03,o.galvSteel,-1.1,0,-.65);y.add(Nt,st,It);let ct=.6,Vt=u(ct,.9,.03,o.galvSteel,-2.6+ct/2,0,.65),ht=u(ct,.9,.03,o.galvSteel,.4-ct/2,0,.65),Be=3-2*ct,ke=u(Be,.9-.08,.03,o.panelCutaway,-1.1,0,.65,!1,!1);y.add(Vt,ht,ke),U(ke,o.galvSteel,o.panelCutaway),[-2.1,-1.6,-1.1,-.6,-.1].forEach(ce=>{let Re=u(.04,.025,1.22,o.aluFrame,ce,.47000000000000003,0),Wt=u(.04,.025,1.3-.08,o.aluFrame,ce,-.45-.02,0);y.add(Re,Wt)}),[[-1.85,-1.35],[-1.35,-.85],[-.85,-.35]].forEach(([ce,Re])=>{let Wt=(ce+Re)/2,Jt=u(.015,.015,1.3-.12,o.aluFrame,Wt,.45+.015,0);Jt.rotation.y=.35;let Qe=u(.015,.015,1.3-.12,o.aluFrame,Wt,.45+.015,0);Qe.rotation.y=-.35,y.add(Jt,Qe)});let re=.035,_n=u(3,re,re,o.aluFrame,-1.1,.45+re/2,.65+re/2),Dn=u(3,re,re,o.aluFrame,-1.1,.45+re/2,-.65-re/2),An=u(3,re,re,o.aluFrame,-1.1,-.45-re/2,.65+re/2),$e=u(3,re,re,o.aluFrame,-1.1,-.45-re/2,-.65-re/2);y.add(_n,Dn,An,$e);let ye=u(3,.012,.012,o.rubberBlack,-1.1,.45,.65);y.add(ye);let v=u(Be-.05,.9-.12,.06,o.motorCast,-1.1,0,-.65+.05),R=u(Be-.05,.06,1.3-.12,o.motorCast,-1.1,-.45+.05,0);y.add(v,R);let k=u(Be-.06,.9-.14,.015,o.galvSteel,-1.1,0,-.65+.08),B=u(Be-.06,.015,1.3-.14,o.galvSteel,-1.1,-.45+.08,0);y.add(k,B);for(let ce=-1.1-.6;ce<=-1.1+.6;ce+=.4)for(let Re=-.25;Re<=.25;Re+=.25){let Wt=b(.005,.005,.08,8,o.copperPipe,ce,Re,-.6,Math.PI/2),Jt=b(.03,.03,.005,12,o.aluFrame,ce,Re,-.65+.09,Math.PI/2);y.add(Wt,Jt)}let O=-2.1,ft=b(.24,.24,.04,24,o.aluFrame,O,0,.65+.02,Math.PI/2),lt=b(.22,.22,.05,24,o.galvSteel,O,0,.65+.03,Math.PI/2);y.add(ft,lt),[-.1,.1].forEach(ce=>{let Re=u(.04,.08,.05,o.doorHandle,O+ce,0,.72);y.add(Re)}),ot(y,-2.6,.9,1.3,o),Z(y,.4,.9,1.3,o);let q=1.35,ut=1.8,bt=u(ut,.03,1.3,o.galvSteel,q,.45,0),Yt=u(ut,.03,1.3,o.galvSteel,q,-.45,0),qt=u(ut,.9,.03,o.galvSteel,q,0,-.65);y.add(bt,Yt,qt);let At=u(.4,.9,.03,o.galvSteel,.6,0,.65),te=u(.4,.9,.03,o.galvSteel,2.05,0,.65),be=u(1.05,.9-.08,.03,o.panelCutaway,1.32,0,.65,!1,!1);y.add(At,te,be),U(be,o.galvSteel,o.panelCutaway);for(let ce=0;ce<4;ce++){let Re=.9+ce*.28,Wt=new Xe;Wt.position.set(Re,0,-.15+ce*.1);let Jt=b(.35,.35,.9-.14,16,o.aluFrame,0,0,0,0,0,!0);Jt.scale.set(.25,1,.55),Wt.add(Jt);let Qe=u(.04,.02,.18,o.galvSteel,0,.45-.08,0),he=u(.04,.02,.18,o.galvSteel,0,-.45+.08,0);Wt.add(Qe,he),y.add(Wt)}let ve=.55,le=.45,Ae=.45,Et=u(ve,le,Ae,o.galvSteel,1.35,.15,-.65-Ae/2),Ve=u(ve+.1,le+.1,.04,o.aluFrame,1.35,.15,-.65-Ae);y.add(Et,Ve),ot(y,2.24,.9,1.3,o),[-1.8,1].forEach(ce=>{let Wt=u(.06,.05,1.65,o.baseSkid,ce,-.49,0),Jt=u(.06,.015,.15,o.rubberBlack,ce,-.45-.01,.65-.1),Qe=u(.06,.015,.15,o.rubberBlack,ce,-.45-.01,-.65+.1);y.add(Wt,Jt,Qe),[-1.65/2+.04,1.65/2-.04].forEach(he=>{let Rn=b(.012,.012,1.35,10,o.stainless,ce,.20500000000000004,he),si=b(.024,.024,.03,6,o.aluFrame,ce,-.45-.07,he),Nn=b(.024,.024,.03,6,o.aluFrame,ce,-.45+1.35-.04,he);y.add(Rn,si,Nn)})}),[-.5,-.3].forEach(ce=>{let Re=b(.018,.018,.04,12,o.brassGold,ce,.47000000000000003,.2);y.add(Re)});let We=u(.22,.14,.01,o.aluFrame,-.4,.15,.65+.02),je=u(.18,.1,.012,o.touchscreen,-.4,.15,.65+.022);y.add(We,je)}function ot(y,Q,tt,St,wt){let Nt=u(.04,.06,St+.14,wt.aluFrame,Q,tt/2+.03,0),st=u(.04,.06,St+.14,wt.aluFrame,Q,-tt/2-.06/2,0),It=u(.04,tt+.14,.06,wt.aluFrame,Q,0,St/2+.06/2),ct=u(.04,tt+.14,.06,wt.aluFrame,Q,0,-St/2-.06/2);y.add(Nt,st,It,ct),[[tt/2+.06/2,St/2+.06/2],[tt/2+.06/2,-St/2-.06/2],[-tt/2-.06/2,St/2+.06/2],[-tt/2-.06/2,-St/2-.06/2]].forEach(([ht,Be])=>{let ke=u(.05,.09,.09,wt.galvSteel,Q,ht,Be),sn=b(.012,.012,.04+.02,8,wt.doorHandle,Q,ht,Be,0,Math.PI/2);y.add(ke,sn)})}function Z(y,Q,tt,St,wt){ot(y,Q-.025,tt,St,wt),ot(y,Q+.025,tt,St,wt);let Dt=u(.015,tt+.08,St+.08,wt.rubberBlack,Q,0,0);y.add(Dt),[[tt/2+.03,St/2+.03],[tt/2+.03,-St/2-.03],[-tt/2-.03,St/2+.03],[-tt/2-.03,-St/2-.03]].forEach(([st,It])=>{let ct=b(.014,.014,.12,10,wt.stainless,Q,st,It,0,Math.PI/2),Vt=b(.022,.022,.03,6,wt.doorHandle,Q+.05,st,It,0,Math.PI/2);y.add(ct,Vt)}),[[tt/2+.05,0],[-tt/2-.05,0],[0,St/2+.05],[0,-St/2-.05]].forEach(([st,It])=>{let ct=u(.08,.04,.04,wt.doorHandle,Q,st,It),Vt=b(.01,.01,.06,8,wt.stainless,Q,st+(st!==0?Math.sign(st)*.025:0),It+(It!==0?Math.sign(It)*.025:0));y.add(ct,Vt)})}function it(y){let Dt=b(.75,.75,1.8,36,o.stainless,-1.5,0,0,0,Math.PI/2,!0);y.add(Dt);let pt=1.8,Nt=b(.75,.75,pt,36,o.stainless,2.4-pt/2,0,0,0,Math.PI/2,!0);y.add(Nt);let st=1.2,It=b(.75,.75,st,28,o.stainless,0,0,0,0,Math.PI/2,!0,Math.PI/3,4*Math.PI/3);y.add(It);let ct=b(.75+.002,.75+.002,st,24,o.panelCutaway,0,0,0,0,Math.PI/2,!0,-Math.PI/3,2*Math.PI/3);y.add(ct),U(ct,o.stainless,o.panelCutaway);let Vt=u(st,.02,.45,o.stainless,0,-.75+.03,0),ht=u(.015,.35,.7,o.stainless,0,-.75+.2,0);y.add(Vt,ht),[-.58,.58].forEach(q=>{let ut=b(.745,.745,.02,32,o.aluFrame,q,0,0,0,Math.PI/2,!0);y.add(ut)});let Be=u(4.8-.2,.02,.5,o.stainless,0,-.75+.02,0);y.add(Be);let ke=u(4.8-.02,.02,.035,o.aluFrame,0,.75+.009,0);y.add(ke);for(let q=-2.4+.2;q<=2.4-.2;q+=.25){let ut=u(.015,.024,.042,o.stainless,q,.761,0);y.add(ut)}[-2.4+.06,2.4-.06].forEach(q=>{let ut=b(.762,.762,.03,32,o.aluFrame,q,0,0,0,Math.PI/2,!0);y.add(ut)}),[-2.4,2.4].forEach(q=>{let ut=b(.9299999999999999,.9299999999999999,.08,36,o.stainless,q,0,0,0,Math.PI/2,!0),bt=b(.75+.18,.75-.02,.06,36,o.aluFrame,q,0,0,0,Math.PI/2);y.add(ut,bt);let Yt=b(.75+.12,.75,.02,32,o.rubberBlack,q+(q<0?-.045:.045),0,0,0,Math.PI/2);y.add(Yt);for(let qt=0;qt<12;qt++){let At=qt/12*Math.PI*2,te=Math.sin(At)*(.75+.09),be=Math.cos(At)*(.75+.09),ve=b(.014,.014,.12,10,o.stainless,q,te,be,0,Math.PI/2),le=b(.022,.022,.035,6,o.doorHandle,q+(q<0?.05:-.05),te,be,0,Math.PI/2);y.add(ve,le)}});let sn=-1.2,re=b(.05,.05,.08,16,o.stainless,sn,-.75-.04,0),_n=b(.03,.03,.08,14,o.stainless,sn,-.75-.11,0),Dn=u(.09,.09,.08,o.brassGold,sn,-.75-.18,0),An=b(.015,.015,.06,10,o.stainless,sn,-.75-.18,.06,Math.PI/2,0),$e=u(.18,.025,.015,o.heatingFin,sn+.08,-.75-.18,.09),ye=b(.025,.025,.06,12,o.brassGold,sn,-.75-.25,0);y.add(re,_n,Dn,An,$e,ye);let v=1.3,R=b(.28,.28,.05,24,o.aluFrame,v,0,.75+.02,Math.PI/2),k=b(.25,.25,.06,24,o.stainless,v,0,.75+.03,Math.PI/2),B=b(.26,.26,.02,24,o.rubberBlack,v,0,.75+.01,Math.PI/2);y.add(R,k,B),[-.11,.11].forEach(q=>{let ut=b(.01,.01,.06,8,o.stainless,v+q,0,.81,Math.PI/2),bt=b(.045,.045,.03,12,o.doorHandle,v+q,0,.75+.08,Math.PI/2);y.add(ut,bt)});let O=b(.004,.004,.25,6,o.aluFrame,v,-.16,.75+.03);y.add(O),[-1.8,1.7].forEach(q=>{let ut=b(.81,.81,.08,36,o.baseSkid,q,0,0,0,Math.PI/2,!0),bt=u(.08,.08,.04,o.baseSkid,q,.75+.06,0),Yt=u(.08,.08,.04,o.baseSkid,q,-.75-.06,0);y.add(ut,bt,Yt);let qt=1.4,At=b(.012,.012,qt,10,o.stainless,q,.75+.06+qt/2,0),te=b(.025,.025,.035,6,o.aluFrame,q,.75+.1,0);y.add(At,te)});let ft=u(.2,.12,.01,o.aluFrame,-1.2,.2,.75+.02),lt=u(.16,.08,.012,o.touchscreen,-1.2,.2,.75+.022);y.add(ft,lt)}function at(y,Q){if(Q==="galvaniz-kanal"){J(y);return}if(Q==="paslanmaz-kanal"){it(y);return}if(Q==="spiral-kanal"){let wt=b(.75,.75,4.4,32,o.galvSteel,-.6,0,0,0,Math.PI/2,!0);y.add(wt);for(let pt=-2.6;pt<=1.2;pt+=.45)y.add(b(.75+.015,.75+.015,.025,32,o.aluFrame,pt,0,0,0,Math.PI/2,!0));y.add(b(.75+.025,.75+.025,.12,32,o.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let Dt=b(.75-.01,.75-.01,1.8,28,o.galvSteel,2.2,.9,0,0,0,!0);y.add(Dt),y.add(b(.75+.06,.75+.06,.08,32,o.baseSkid,-.8,0,0,0,Math.PI/2,!0)),y.add(b(.02,.02,1.4,8,o.baseSkid,-.8,.75+.7,0))}else if(Q==="paslanmaz-kanal"){let wt=b(.85,.85,4.6,32,o.stainless,0,0,0,0,Math.PI/2,!0);y.add(wt),y.add(u(4.6-.02,.02,.03,o.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(Dt=>{y.add(b(.85+.2,.85+.2,.08,32,o.stainless,Dt,0,0,0,Math.PI/2,!0));for(let pt=0;pt<8;pt++){let Nt=pt/8*Math.PI*2;y.add(u(.12,.04,.04,o.doorHandle,Dt,Math.sin(Nt)*(.85+.1),Math.cos(Nt)*(.85+.1)))}}),y.add(b(.32,.32,.06,16,o.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(Dt=>{y.add(u(.04,.08,.06,o.doorHandle,Dt,0,.85+.07))})}else{y.add(u(4.6,.04,2.4,o.galvSteel,0,2/2,0),u(4.6,.04,2.4,o.galvSteel,0,-2/2,0),u(4.6,2,.04,o.galvSteel,0,0,-2.4/2));let Dt=u(.9,2,.04,o.galvSteel,-4.6/2+.45,0,2.4/2),pt=u(.9,2,.04,o.galvSteel,4.6/2-.45,0,2.4/2),Nt=u(4.6-1.8,2-.3,.03,o.panelCutaway,0,0,2.4/2,!1,!1);y.add(Dt,pt,Nt),P.push(Nt),y.add(u(4.6-1.9,2-.4,.08,o.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(st=>{y.add(u(.08,.14,2.4+.24,o.aluFrame,st,2/2+.05,0),u(.08,.14,2.4+.24,o.aluFrame,st,-2/2-.05,0),u(.08,2,.14,o.aluFrame,st,0,2.4/2+.05),u(.08,2,.14,o.aluFrame,st,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(It=>{[-2.4/2-.05,2.4/2+.05].forEach(ct=>{y.add(u(.1,.16,.16,o.baseSkid,st,It,ct))})})}),y.add(u(4.6-.8,.02,.02,o.aluFrame,0,2/2+.02,0))}}function Gt(y,Q){if(Q==="menfez"){y.add(u(.24,.14,3.4+.2,o.aluFrame,0,2.2/2+.05,0),u(.24,.14,3.4+.2,o.aluFrame,0,-2.2/2-.05,0),u(.24,2.2,.14,o.aluFrame,0,0,3.4/2+.05),u(.24,2.2,.14,o.aluFrame,0,0,-3.4/2-.05));for(let Dt=-2.2/2+.2;Dt<=2.2/2-.15;Dt+=.24){let pt=u(.08,.02,3.3,o.damperBlade,.09,Dt,0);pt.rotation.z=.22,y.add(pt)}for(let Dt=-3.4/2+.25;Dt<=3.4/2-.2;Dt+=.28){let pt=u(.06,2.1500000000000004,.02,o.damperBlade,0,0,Dt);pt.rotation.y=.2,y.add(pt)}y.add(u(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,2.2/2-.04,0),u(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,-2.2/2+.04,0)),y.add(u(.08,.12,.08,o.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(Q==="difuzor"){y.add(u(3.4,.03,1.5,o.galvSteel,0,1.3/2+.3,0),u(3.4,1.3,.03,o.galvSteel,0,.3,-1.5/2),u(3.4,1.3,.03,o.galvSteel,0,.3,1.5/2)),y.add(b(.42,.42,.35,24,o.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),y.add(u(3.4+.2,.06,1.5+.2,o.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(pt=>{y.add(u(3.4-.1,.04,.06,o.doorHandle,0,-1.3/2+.26,pt))});let Dt=u(1.8,.04,1.8,o.panelSolid,0,-1,0);y.add(Dt);for(let pt=0;pt<16;pt++){let Nt=pt/16*Math.PI*2,st=u(.03,.02,.36,o.doorHandle,Math.sin(Nt)*.55,-.98,Math.cos(Nt)*.55);st.rotation.y=Nt+.5,y.add(st)}}else{y.add(u(1.4,.04,2.4,o.galvSteel,0,2.2/2,0),u(1.4,.04,2.4,o.galvSteel,0,-2.2/2,0),u(1.4,2.2,.04,o.galvSteel,0,0,-2.4/2),u(1.4,2.2,.04,o.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(pt=>{y.add(u(.08,.14,2.4+.2,o.aluFrame,pt,2.2/2+.05,0),u(.08,.14,2.4+.2,o.aluFrame,pt,-2.2/2-.05,0),u(.08,2.2,.14,o.aluFrame,pt,0,2.4/2+.05),u(.08,2.2,.14,o.aluFrame,pt,0,-2.4/2-.05))});for(let pt=-2.2/2+.35;pt<=2.2/2-.25;pt+=.5){let Nt=u(.35,.04,2.28,o.damperBlade,0,pt,0);Nt.rotation.z=.35,y.add(Nt)}y.add(u(.03,2.2-.4,.03,o.brassGold,.15,0,2.4/2-.08));let Dt=u(.22,.34,.18,o.actuatorOrange,.1,.2,2.4/2+.14);y.add(Dt),y.add(b(.025,.025,.15,12,o.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),y.add(b(.03,.03,.12,12,o.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function Ht(y){y.add(u(4.4,.04,2.2,o.galvSteel,0,2.4/2,0),u(4.4,.04,2.2,o.galvSteel,0,-2.4/2,0),u(4.4,2.4,.04,o.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(ct=>{y.add(u(.08,.12,2.2+.2,o.aluFrame,ct,2.4/2+.04,0),u(.08,.12,2.2+.2,o.aluFrame,ct,-2.4/2-.04,0),u(.08,2.4,.12,o.aluFrame,ct,0,2.2/2+.04),u(.08,2.4,.12,o.aluFrame,ct,0,-2.2/2-.04))});let wt=u(4.4-.1,2.4-.1,.03,o.panelCutaway,0,0,2.2/2,!1,!1);y.add(wt),P.push(wt);let Dt=u(.12,2.4-.2,2.2-.2,o.aluFrame,-1.4,0,0),pt=u(.1,2.4-.25,2.2-.25,o.filterCloth,-1.4,0,0);y.add(Dt,pt),y.add(u(.1,2.4-.2,2.2-.2,o.aluFrame,-.2,0,0));for(let ct=0;ct<4;ct++){let Vt=-.7+ct*.46,ht=new qe(new Ti(.2,1.1,4),o.filterCloth);ht.rotateZ(-Math.PI/2),ht.position.set(.4,0,Vt),ht.scale.set(1,1.3,.75),y.add(ht)}let Nt=u(.25,2.4-.2,2.2-.2,o.aluFrame,1.4,0,0),st=u(.22,2.4-.26,2.2-.26,o.filterCloth,1.4,0,0),It=u(.26,2.4-.18,.04,o.coolingFin,1.4,0,2.2/2-.1);y.add(Nt,st,It),[-1,.6].forEach(ct=>{y.add(b(.09,.09,.04,16,o.aluFrame,ct,.6,2.2/2+.03,Math.PI/2))})}function Ne(y,Q){if(Q==="vrf-dis"){y.add(u(3.2,3.6,.04,o.panelSolid,0,0,-2/2),u(3.2,.04,2,o.panelSolid,0,3.6/2,0),u(3.2,.12,2,o.baseSkid,0,-3.6/2,0),u(.04,3.6-.2,2-.1,o.coolingFin,-3.2/2,.05,0),u(.04,3.6-.2,2-.1,o.coolingFin,3.2/2,.05,0));let Dt=u(3.2-.1,3.6-.2,.03,o.panelCutaway,0,.05,2/2,!1,!1);y.add(Dt),P.push(Dt);let pt=b(.82,.82,.22,28,o.fanHousing,0,3.6/2+.11,0,0,0,!0),Nt=b(.72,.72,.05,4,o.fanImpeller,0,3.6/2+.14,0);y.add(pt,Nt),w.push(()=>{Nt.rotation.y+=.16}),[-.6,.6].forEach(st=>{y.add(b(.26,.26,.9,16,o.motorCast,st,-3.6/2+.6,-.2))}),y.add(b(.22,.22,1.1,16,o.motorCast,-1.1,-3.6/2+.7,.2)),y.add(u(3.2-.2,2.6,.1,o.coolingFin,0,.2,-2/2+.08)),y.add(u(.22,.18,.14,o.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(Q==="vrf-ic"){let tt=new Xe;tt.rotation.x=-Math.PI+.55,y.add(tt);let St=u(2.8,.8,2.8,o.galvSteel,0,.5,0),wt=u(3.2,.08,3.2,o.panelSolid,0,.05,0);tt.add(St,wt);let Dt=u(1.6,.02,1.6,o.filterCloth,0,.02,0);tt.add(Dt),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([Nt,st,It])=>{let ct=u(1.7,.03,.16,o.doorHandle,Nt,.01,st);ct.rotation.y=It,tt.add(ct)});let pt=b(.65,.65,.35,20,o.fanImpeller,0,.5,0);tt.add(pt),w.push(()=>{pt.rotation.y+=.14}),tt.add(u(.18,.22,.18,o.actuatorOrange,1.3,.5,.8)),tt.add(b(.04,.04,.3,12,o.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let Dt=u(4.6,.04,2,o.stainless,0,.8,-.3),pt=u(4.6,1.6,.04,o.stainless,0,0,-2.6/2),Nt=u(.04,1.6,2.6,o.stainless,-4.6/2,0,0),st=u(.04,1.6,2.6,o.stainless,4.6/2,0,0),It=u(4.6,.9,.04,o.stainless,0,.25,2.6/2-.2);It.rotation.x=.5,y.add(Dt,pt,Nt,st,It),y.add(b(.55,.55,.3,24,o.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let ct=-4.6/2+.6;ct<=4.6/2-.6;ct+=.75){let Vt=u(.68,.04,1.3,o.aluFrame,ct,-.2,.1);Vt.rotation.x=-.4,y.add(Vt)}y.add(b(.1,.08,.18,16,o.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),y.add(b(.02,.02,4.6-.6,12,o.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(ct=>{let Vt=b(.035,.02,.09,10,o.brassGold,ct,-.12,.85);y.add(Vt)}),y.add(u(.14,.2,.08,o.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}e==="tks"?z(S):e==="thks"?V(S):e==="rooftop"?D(S):e==="galvaniz-kanal"?J(S):e==="paslanmaz-kanal"?it(S):["thrv-dx","hrv"].includes(e)?W(S,e):["tdf","yangin-fani","jet-fan"].includes(e)?$(S,e):["spiral-kanal"].includes(e)?at(S,e):["menfez","difuzor","damper"].includes(e)?Gt(S,e):e==="filtre"?Ht(S):["vrf-dis","vrf-ic","davlumbaz"].includes(e)?Ne(S,e):z(S),S.updateMatrixWorld(!0);let xe=new li().setFromObject(S),ee=xe.getSize(new F),K=xe.getCenter(new F);S.position.sub(K);let nt=-ee.y/2;I.position.y=nt-.05,T.position.y=nt-.04;let Ut=Math.max(ee.x,ee.y,ee.z),Qt=l.fov*(Math.PI/180),Pt=Math.abs(Ut/2/Math.tan(Qt/2))*1.05;Pt=Math.max(Pt,3.8);let ue=new F(Pt*.72,Pt*.38,Pt*.74),Ze=new F(0,0,0);l.position.copy(ue),l.lookAt(Ze),h.target.copy(Ze),h.update();let oe=null;function Se(y,Q,tt=650){let St=l.position.clone(),wt=h.target.clone(),Dt=performance.now();oe={update:pt=>{let Nt=pt-Dt,st=Math.min(1,Nt/tt),It=st*st*(3-2*st);l.position.lerpVectors(St,y,It),h.target.lerpVectors(wt,Q,It),h.update(),st>=1&&(oe=null)}}}let we=new Xe;s.add(we);let se=80,Oe=[],en=new Float32Array(se*3),Ke=new Float32Array(se*3),ze=e==="tks",Je=e==="thks",N=e==="rooftop",nn=e==="galvaniz-kanal",Ee=e==="paslanmaz-kanal",A=ze||Je,x=Math.max(2,ee.x/2+.4),H=Math.max(1,ee.y*.45),G=Math.max(1,ee.z*.45);for(let y=0;y<se;y++){let Q=A?y<se*.7:N?y<se*.6:y<se*.65;Oe.push({isSupply:Q,progress:Math.random(),speed:(A?.006:nn||Ee?.009:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(A?.35:H),offsetZ:(Math.random()-.5)*(A?.7:G)}),Q?(Ke[y*3]=.02,Ke[y*3+1]=.65,Ke[y*3+2]=.98):(Ke[y*3]=.95,Ke[y*3+1]=.45,Ke[y*3+2]=.12)}let X=new pn;X.setAttribute("position",new Mn(en,3)),X.setAttribute("color",new Mn(Ke,3));let dt=document.createElement("canvas");dt.width=32,dt.height=32;let mt=dt.getContext("2d"),Y=mt.createRadialGradient(16,16,0,16,16,16);Y.addColorStop(0,"rgba(255, 255, 255, 1)"),Y.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),Y.addColorStop(1,"rgba(0, 0, 0, 0)"),mt.fillStyle=Y,mt.fillRect(0,0,32,32);let et=new Vs(dt),yt=new ks({size:.15,map:et,transparent:!0,opacity:.85,vertexColors:!0,blending:Br,depthWrite:!1}),Bt=new wr(X,yt);we.add(Bt),w.push(()=>{if(!xt.cfdEnabled){we.visible=!1;return}we.visible=!0;let y=X.attributes.position.array;for(let Q=0;Q<se;Q++){let tt=Oe[Q];if(tt.progress+=tt.speed,tt.progress>1&&(tt.progress=0),A)tt.isSupply?(y[Q*3]=-4.3+tt.progress*8.6,y[Q*3+1]=-.65+Math.sin(tt.progress*Math.PI*4)*.08+tt.offsetY,y[Q*3+2]=tt.offsetZ):(y[Q*3]=1.2-tt.progress*5.5,y[Q*3+1]=.65+tt.offsetY,y[Q*3+2]=tt.offsetZ);else if(N)if(tt.isSupply){let St=-.4+tt.progress*2.8;if(y[Q*3]=St,tt.progress>.8){let wt=(tt.progress-.8)/.2;y[Q*3+1]=.05-wt*1.35+tt.offsetY*.4}else y[Q*3+1]=.05+Math.sin(tt.progress*Math.PI*3)*.06+tt.offsetY*.6;y[Q*3+2]=tt.offsetZ*.7}else{let St=Q%2===0?-2.2:-1.2;y[Q*3]=St+Math.sin(Q*1.5+tt.progress*6.28)*.22,y[Q*3+1]=-.2+tt.progress*2.1,y[Q*3+2]=Math.cos(Q*1.5+tt.progress*6.28)*.22}else if(nn){let St=-2.7+tt.progress*5.1;y[Q*3]=St,y[Q*3+1]=Math.sin(tt.progress*Math.PI*2+Q)*.06+tt.offsetY*.5,y[Q*3+2]=tt.progress>.7&&Q%3===0?-.3-(tt.progress-.7)*1.5:tt.offsetZ*.75}else if(Ee){let St=-2.5+tt.progress*5;y[Q*3]=St,y[Q*3+1]=Math.sin(tt.progress*Math.PI*2+Q)*.05+tt.offsetY*.45,y[Q*3+2]=tt.offsetZ*.65}else y[Q*3]=-x+tt.progress*(x*2),y[Q*3+1]=(tt.isSupply?-.2:.2)+tt.offsetY,y[Q*3+2]=tt.offsetZ}X.attributes.position.needsUpdate=!0});let Mt=new Xe;s.add(Mt);function vt(y){let Q=document.createElement("canvas");Q.width=64,Q.height=64;let tt=Q.getContext("2d");tt.fillStyle="#0284c7",tt.beginPath(),tt.arc(32,32,28,0,Math.PI*2),tt.fill(),tt.lineWidth=4,tt.strokeStyle="#ffffff",tt.stroke(),tt.fillStyle="#ffffff",tt.font="bold 26px sans-serif",tt.textAlign="center",tt.textBaseline="middle",tt.fillText(y,32,33);let St=new Vs(Q);return St.minFilter=an,St}let Ot=n&&n.hotspots&&n.hotspots.length>0?n.hotspots:[{num:"01",title:"G\xF6vde & Ta\u015F\u0131y\u0131c\u0131 Mimarisi",desc:"Eurovent ve TSE standartlar\u0131nda y\xFCksek mukavemetli karkas."},{num:"02",title:"Y\xFCksek Verimli \u0130\xE7 Aksam",desc:"Optimize edilmi\u015F aerodinamik komponentler ve d\xFC\u015F\xFCk enerji t\xFCketimi."},{num:"03",title:"Hava Da\u011F\u0131t\u0131m & Kontrol",desc:"Hassas debi kalibrasyonu ve s\u0131zd\u0131rmaz ba\u011Flant\u0131 elemanlar\u0131."}],Xt=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],ne=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],L=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],gt=[[1.35,.15,.75],[.4,.52,.75],[-.8,.48,.75],[-1.6,.48,.75]],j=[[-1.2,.45,.85],[0,.88,0],[-1.2,-.98,.2]],_t=[];Ot.forEach((y,Q)=>{let tt=new Xe,St,wt,Dt;if(ze&&Xt[Q])[St,wt,Dt]=Xt[Q];else if(Je&&ne[Q])[St,wt,Dt]=ne[Q];else if(N&&L[Q])[St,wt,Dt]=L[Q];else if(nn&&gt[Q])[St,wt,Dt]=gt[Q];else if(Ee&&j[Q])[St,wt,Dt]=j[Q];else{let It=Ot.length,ct=ee.z>ee.x,Vt=ct?ee.z:ee.x,ht=-Vt/2+.4+Q/Math.max(1,It-1)*(Vt-.8);St=ct?ee.x/2+.4:ht,wt=Q%2===0?-.2:.4,Dt=ct?ht:ee.z/2+.4}tt.position.set(St,wt,Dt);let pt=new qe(new ns(.012,.012,.25,8),new Fi({color:165063}));pt.position.y=-.12;let Nt=new Hs({map:vt(y.num||`0${Q+1}`),depthTest:!1}),st=new Er(Nt);st.scale.set(.42,.42,1),st.position.y=.05,st.userData={hotspot:y,pos:[St,wt,Dt]},tt.add(pt,st),Mt.add(tt),tt.userData={hotspot:y,pos:[St,wt,Dt]},_t.push(st)});let Ct=new Fr,rt=new kt;function zt(y){let Q=c.domElement.getBoundingClientRect();rt.x=(y.clientX-Q.left)/Q.width*2-1,rt.y=-((y.clientY-Q.top)/Q.height)*2+1,Ct.setFromCamera(rt,l);let tt=Ct.intersectObjects(_t,!0);if(tt.length>0){let St=tt[0].object;for(;St.parent&&!St.userData.hotspot;)St=St.parent;if(St&&St.userData.hotspot){showHotspotCard(St.userData.hotspot);let wt=St.userData.pos;if(wt){let Dt=new F(wt[0],wt[1],wt[2]),pt=new F(wt[0]*.8+1.2,wt[1]+.5,wt[2]+2.8);Se(pt,Dt,700)}}}}c.domElement.addEventListener("click",zt);let xt={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};Jg(),Kg(t,n,{onToggleRotate:()=>{xt.autoRotate=!xt.autoRotate,h.autoRotate=xt.autoRotate,Ai("btn-rotate",xt.autoRotate)},onToggleCfd:()=>{xt.cfdEnabled=!xt.cfdEnabled,Ai("btn-cfd",xt.cfdEnabled)},onToggleCutaway:()=>{xt.cutawayEnabled=!xt.cutawayEnabled,P.forEach(y=>{let Q=y.userData.solidMat||o.panelSolid,tt=y.userData.cutawayMat||o.panelCutaway;y.material=xt.cutawayEnabled?tt:Q}),Ai("btn-cutaway",xt.cutawayEnabled)},onToggleView:()=>{let Q=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),tt=Q&&window.getComputedStyle(Q).display!=="none";Q&&(tt?(Q.style.display="none",t.style.display="block",xt.viewMode="3d",Ai("btn-view",!1),bn()):(Q.style.display="flex",t.style.display="none",xt.viewMode="2d",Ai("btn-view",!0)))},onResetCamera:()=>{Se(ue,Ze,650),window.closeHotspotCard()}}),Ai("btn-rotate",xt.autoRotate),Ai("btn-cfd",xt.cfdEnabled),Ai("btn-cutaway",xt.cutawayEnabled),Ai("btn-view",xt.viewMode==="2d");let Pe=null;function Te(){Pe=requestAnimationFrame(Te),oe?oe.update(performance.now()):h.update();for(let y=0;y<w.length;y++)w[y]();c.render(s,l)}Te();function bn(){if(!t)return;let y=t.clientWidth,Q=t.clientHeight||480;y>0&&Q>0&&(l.aspect=y/Q,l.updateProjectionMatrix(),c.setSize(y,Q))}return window.addEventListener("resize",bn),{destroy:()=>{cancelAnimationFrame(Pe),window.removeEventListener("resize",bn),c.dispose()}}}function Jg(){if(document.getElementById("sky-3d-hud-styles"))return;let i=document.createElement("style");i.id="sky-3d-hud-styles",i.textContent=`
    .sky-3d-hud-container {
      position: absolute;
      top: 12px;
      left: 14px;
      right: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
      z-index: 10;
      flex-wrap: wrap;
      gap: 8px;
    }
    .sky-3d-hud-left, .sky-3d-hud-right {
      display: flex;
      gap: 6px;
      align-items: center;
      pointer-events: auto;
    }
    .sky-3d-badge {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border: 1px solid #e2e8f0;
      border-radius: 9999px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .sky-3d-badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #0284c7;
    }
    .sky-3d-btn {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      color: #334155;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .sky-3d-btn:hover {
      background: #f8fafc;
      border-color: #0284c7;
      color: #0284c7;
    }
    .sky-3d-btn.active {
      background: #0284c7;
      border-color: #0284c7;
      color: #ffffff;
    }
    .sky-3d-callout-card {
      position: absolute;
      bottom: 20px;
      right: 20px;
      max-width: 320px;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      border: 1px solid #e2e8f0;
      border-left: 4px solid #0284c7;
      border-radius: 10px;
      padding: 12px 16px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
      z-index: 30;
      pointer-events: auto;
      animation: fadeIn 0.2s ease;
    }
    .sky-3d-callout-num {
      display: inline-block;
      font-size: 11px;
      font-weight: 800;
      color: #0284c7;
      background: #e0f2fe;
      padding: 2px 6px;
      border-radius: 4px;
      margin-bottom: 4px;
    }
    .sky-3d-callout-title {
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .sky-3d-callout-desc {
      font-size: 12px;
      color: #64748b;
      line-height: 1.45;
    }
    .sky-3d-callout-close {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #94a3b8;
    }
    .sky-3d-callout-close:hover {
      color: #0f172a;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(i)}function Kg(i,t,e){let n=i.closest(".sky-vlog-hero")||i.parentElement||i,s=n.querySelector(".sky-3d-hud-container");s&&s.remove(),s=document.createElement("div"),s.className="sky-3d-hud-container",s.innerHTML=`
    <div class="sky-3d-hud-left">
      <div class="sky-3d-badge">
        <span class="sky-3d-badge-dot"></span>
        <span id="sky-product-tag">${t.title||"3D CAD Dijital \u0130kiz"}</span>
      </div>
      <div class="sky-3d-badge" style="font-weight: 500; font-size: 11px; color: #64748b;">
        360\xB0 \xC7evir \u2022 Yak\u0131nla\u015Ft\u0131r \u2022 \u0130ncele
      </div>
    </div>
    <div class="sky-3d-hud-right">
      <button id="btn-rotate" class="sky-3d-btn" title="Otomatik D\xF6nd\xFCrmeyi A\xE7/Kapat">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
        D\xF6nd\xFCr
      </button>
      <button id="btn-cfd" class="sky-3d-btn" title="Aerodinamik Hava Ak\u0131\u015F\u0131n\u0131 A\xE7/Kapat">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Hava Ak\u0131\u015F\u0131
      </button>
      <button id="btn-cutaway" class="sky-3d-btn" title="G\xF6vdeyi \u015Eeffaf / Kat\u0131 Yap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
        \u015Eeffaf G\xF6vde
      </button>
      <button id="btn-view" class="sky-3d-btn" title="2D \u015Eema ile 3D Model Aras\u0131nda Ge\xE7i\u015F Yap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        2D \xC7izim
      </button>
      <button id="btn-reset" class="sky-3d-btn" title="Varsay\u0131lan Kamera A\xE7\u0131s\u0131na D\xF6n">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        S\u0131f\u0131rla
      </button>
    </div>
  `,n.appendChild(s);let r=n.querySelector("#sky-3d-hotspot-card");r&&r.remove(),r=document.createElement("div"),r.id="sky-3d-hotspot-card",r.className="sky-3d-callout-card",r.style.display="none",r.innerHTML=`
    <button class="sky-3d-callout-close" onclick="window.closeHotspotCard()">&times;</button>
    <span id="sky-card-num" class="sky-3d-callout-num">01</span>
    <div id="sky-card-title" class="sky-3d-callout-title">Bile\u015Fen Ad\u0131</div>
    <div id="sky-card-desc" class="sky-3d-callout-desc">Bile\u015Fen teknik detay a\xE7\u0131klamas\u0131.</div>
  `,n.appendChild(r),document.getElementById("btn-rotate").addEventListener("click",e.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",e.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",e.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",e.onToggleView),document.getElementById("btn-reset").addEventListener("click",e.onResetCamera)}function Ai(i,t){let e=document.getElementById(i);e&&(t?e.classList.add("active"):e.classList.remove("active"))}window.showHotspotCard=function(i){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=i.num||"01",document.getElementById("sky-card-title").textContent=i.title||"",document.getElementById("sky-card-desc").textContent=i.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let i=document.getElementById("sky-3d-hotspot-card");i&&(i.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Lu()):Lu();export{Lu as initSky3DProduct};
/*! Bundled license information:

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
*/
