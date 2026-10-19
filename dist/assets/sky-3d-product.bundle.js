var ho="186",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,Wl=1,_h=2;var as=1,xh=2,qs=3,Vi=0,Rn=1,Ue=2,li=0,Zs=1,zr=2,Xl=3,Yl=4,yh=5;var os=100,vh=101,Mh=102,Sh=103,bh=104,Eh=200,Th=201,wh=202,Ah=203,ql=204,Zl=205,Rh=206,Ch=207,Ph=208,Ih=209,Lh=210,Dh=211,Nh=212,Fh=213,Uh=214,Ra=0,Ca=1,Pa=2,Ds=3,Ia=4,La=5,Da=6,Na=7,Jl=0,Oh=1,Bh=2,ti=0,Kl=1,$l=2,jl=3,kr=4,Ql=5,tc=6,ec=7;var nc=300,Gi=301,ls=302,uo=303,fo=304,Vr=306,Fa=1e3,ri=1001,Ua=1002,fn=1003,Hh=1004;var Gr=1005;var sn=1006,po=1007;var Wi=1008;var In=1009,ic=1010,sc=1011,Js=1012,mo=1013,ei=1014,ni=1015,ii=1016,go=1017,_o=1018,Ks=1020,rc=35902,ac=35899,oc=1021,lc=1022,Yn=1023,ai=1026,Xi=1027,cc=1028,xo=1029,Yi=1030,yo=1031;var vo=1033,Wr=33776,Xr=33777,Yr=33778,qr=33779,Mo=35840,So=35841,bo=35842,Eo=35843,To=36196,wo=37492,Ao=37496,Ro=37488,Co=37489,Zr=37490,Po=37491,Io=37808,Lo=37809,Do=37810,No=37811,Fo=37812,Uo=37813,Oo=37814,Bo=37815,Ho=37816,zo=37817,ko=37818,Vo=37819,Go=37820,Wo=37821,Xo=36492,Yo=36494,qo=36495,Zo=36283,Jo=36284,Jr=36285,Ko=36286;var gr=2300,Oa=2301,wa=2302,Fl=2303,Ul=2400,Ol=2401,Bl=2402;var zh=3200;var $o=0,kh=1,Ti="",Bn="srgb",_r="srgb-linear",xr="linear",Le="srgb";var Aa=7680;var Vh=519,Gh=512,Wh=513,Xh=514,jo=515,Yh=516,qh=517,Qo=518,Zh=519,hc=35044;var uc="300 es",jn=2e3,Ns=2001;function ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){let i=yr("canvas");return i.style.display="block",i}var Bc={},Fs=null;function vr(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function Kh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Kh(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=Kh(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ns(...i){let t=i.join(" ");t in Bc||(Bc[t]=!0,Kt(...i))}function $h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var jh={[Ra]:Ca,[Pa]:Da,[Ia]:Na,[Ds]:La,[Ca]:Ra,[Da]:Pa,[Na]:Ia,[La]:Ds},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=1234567,pr=Math.PI/180,Us=180/Math.PI;function vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ed(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function nd(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function id(i,t=1){return t-Math.abs(dc(i,t*2)-t)}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ad(i,t){return i+Math.floor(Math.random()*(t-i+1))}function od(i,t){return i+Math.random()*(t-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(Hc=i);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(i){return i*pr}function ud(i){return i*Us}function dd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),f=a((t+n)/2),g=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(l*f,c*g,c*d,l*h);break;case"YZY":i.set(c*d,l*f,c*g,l*h);break;case"ZXZ":i.set(c*g,c*d,l*f,l*h);break;case"XZX":i.set(l*f,c*v,c*m,l*h);break;case"YXY":i.set(c*m,l*f,c*v,l*h);break;case"ZYZ":i.set(c*v,c*m,l*f,l*h);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fc={DEG2RAD:pr,RAD2DEG:Us,generateUUID:vi,clamp:ge,euclideanModulo:dc,mapLinear:td,inverseLerp:ed,lerp:mr,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:ad,randFloat:od,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:Fe,denormalize:$n},Wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],f=n[s+2],g=n[s+3],d=r[a+0],m=r[a+1],v=r[a+2],E=r[a+3];if(g!==E||c!==d||h!==m||f!==v){let _=c*d+h*m+f*v+g*E;_<0&&(d=-d,m=-m,v=-v,E=-E,_=-_);let p=1-l;if(_<.9995){let R=Math.acos(_),L=Math.sin(R);p=Math.sin(p*R)/L,l=Math.sin(l*R)/L,c=c*p+d*l,h=h*p+m*l,f=f*p+v*l,g=g*p+E*l}else{c=c*p+d*l,h=h*p+m*l,f=f*p+v*l,g=g*p+E*l;let R=1/Math.sqrt(c*c+h*h+f*f+g*g);c*=R,h*=R,f*=R,g*=R}}t[e]=c,t[e+1]=h,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],f=n[s+3],g=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return t[e]=l*v+f*g+c*m-h*d,t[e+1]=c*v+f*d+h*g-l*m,t[e+2]=h*v+f*m+l*d-c*g,t[e+3]=f*v-l*g-c*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),f=l(s/2),g=l(r/2),d=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*f*g+h*m*v,this._y=h*m*g-d*f*v,this._z=h*f*v+d*m*g,this._w=h*f*g-d*m*v;break;case"YXZ":this._x=d*f*g+h*m*v,this._y=h*m*g-d*f*v,this._z=h*f*v-d*m*g,this._w=h*f*g+d*m*v;break;case"ZXY":this._x=d*f*g-h*m*v,this._y=h*m*g+d*f*v,this._z=h*f*v+d*m*g,this._w=h*f*g-d*m*v;break;case"ZYX":this._x=d*f*g-h*m*v,this._y=h*m*g+d*f*v,this._z=h*f*v-d*m*g,this._w=h*f*g+d*m*v;break;case"YZX":this._x=d*f*g+h*m*v,this._y=h*m*g+d*f*v,this._z=h*f*v-d*m*g,this._w=h*f*g-d*m*v;break;case"XZY":this._x=d*f*g-h*m*v,this._y=h*m*g-d*f*v,this._z=h*f*v+d*m*g,this._w=h*f*g+d*m*v;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],f=e[6],g=e[10],d=n+l+g;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>l&&n>g){let m=2*Math.sqrt(1+n-l-g);this._w=(f-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(l>g){let m=2*Math.sqrt(1+l-n-g);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+f)/m}else{let m=2*Math.sqrt(1+g-n-l);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,f=e._w;return this._x=n*f+a*l+s*h-r*c,this._y=s*f+a*c+r*l-n*h,this._z=r*f+a*h+n*c-s*l,this._w=a*f-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),f=Math.sin(h);c=Math.sin(c*h)/f,e=Math.sin(e*h)/f,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),f=2*(l*e-r*s),g=2*(r*n-a*e);return this.x=e+c*h+a*g-l*f,this.y=n+c*f+l*h-r*g,this.z=s+c*g+r*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new O,zc=new zn,re=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],f=n[4],g=n[7],d=n[2],m=n[5],v=n[8],E=s[0],_=s[3],p=s[6],R=s[1],L=s[4],T=s[7],o=s[2],w=s[5],I=s[8];return r[0]=a*E+l*R+c*o,r[3]=a*_+l*L+c*w,r[6]=a*p+l*T+c*I,r[1]=h*E+f*R+g*o,r[4]=h*_+f*L+g*w,r[7]=h*p+f*T+g*I,r[2]=d*E+m*R+v*o,r[5]=d*_+m*L+v*w,r[8]=d*p+m*T+v*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-n*r*f+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=f*a-l*h,d=l*c-f*r,m=h*r-a*c,v=e*g+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/v;return t[0]=g*E,t[1]=(s*h-f*n)*E,t[2]=(l*n-s*a)*E,t[3]=d*E,t[4]=(f*e-s*c)*E,t[5]=(s*r-l*e)*E,t[6]=m*E,t[7]=(n*c-h*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(t,e)),this}rotate(t){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fl=new re,kc=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){let i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Le&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Le&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:kc,fromXYZ:Vc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:kc,fromXYZ:Vc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),i}var Me=gd();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,Ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=yr("canvas")),ms.width=t.width,ms.height=t.height;let s=ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,Os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(pl(s[a].image)):r.push(pl(s[a]))}else r=pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var xd=0,ml=new O,An=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=sn,a=Wi,l=Yn,c=In,h=i.DEFAULT_ANISOTROPY,f=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=vi(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=nc;An.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],f=c[4],g=c[8],d=c[1],m=c[5],v=c[9],E=c[2],_=c[6],p=c[10];if(Math.abs(f-d)<.01&&Math.abs(g-E)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(g+E)<.1&&Math.abs(v+_)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(h+1)/2,T=(m+1)/2,o=(p+1)/2,w=(f+d)/4,I=(g+E)/4,S=(v+_)/4;return L>T&&L>o?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=w/n,r=I/n):T>o?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=S/s):o<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(o),n=I/r,s=S/r),this.set(n,s,r,e),this}let R=Math.sqrt((_-v)*(_-v)+(g-E)*(g-E)+(d-f)*(d-f));return Math.abs(R)<.001&&(R=1),this.x=(_-v)/R,this.y=(g-E)/R,this.z=(d-f)/R,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new An(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mr=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,f,g,d,m,v,E,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,f,g,d,m,v,E,_)}set(t,e,n,s,r,a,l,c,h,f,g,d,m,v,E,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=h,p[6]=f,p[10]=g,p[14]=d,p[3]=m,p[7]=v,p[11]=E,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),f=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*f,m=a*g,v=l*f,E=l*g;e[0]=c*f,e[4]=-c*g,e[8]=h,e[1]=m+v*h,e[5]=d-E*h,e[9]=-l*c,e[2]=E-d*h,e[6]=v+m*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*f,m=c*g,v=h*f,E=h*g;e[0]=d+E*l,e[4]=v*l-m,e[8]=a*h,e[1]=a*g,e[5]=a*f,e[9]=-l,e[2]=m*l-v,e[6]=E+d*l,e[10]=a*c}else if(t.order==="ZXY"){let d=c*f,m=c*g,v=h*f,E=h*g;e[0]=d-E*l,e[4]=-a*g,e[8]=v+m*l,e[1]=m+v*l,e[5]=a*f,e[9]=E-d*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let d=a*f,m=a*g,v=l*f,E=l*g;e[0]=c*f,e[4]=v*h-m,e[8]=d*h+E,e[1]=c*g,e[5]=E*h+d,e[9]=m*h-v,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,m=a*h,v=l*c,E=l*h;e[0]=c*f,e[4]=E-d*g,e[8]=v*g+m,e[1]=g,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=m*g+v,e[10]=d-E*g}else if(t.order==="XZY"){let d=a*c,m=a*h,v=l*c,E=l*h;e[0]=c*f,e[4]=-g,e[8]=h*f,e[1]=d*g+E,e[5]=a*f,e[9]=m*g-v,e[2]=v*g-m,e[6]=l*f,e[10]=E*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,vd)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ri.crossVectors(n,Un),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ri.crossVectors(n,Un)),Ri.normalize(),ta.crossVectors(Un,Ri),s[0]=Ri.x,s[4]=ta.x,s[8]=Un.x,s[1]=Ri.y,s[5]=ta.y,s[9]=Un.y,s[2]=Ri.z,s[6]=ta.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],f=n[1],g=n[5],d=n[9],m=n[13],v=n[2],E=n[6],_=n[10],p=n[14],R=n[3],L=n[7],T=n[11],o=n[15],w=s[0],I=s[4],S=s[8],u=s[12],M=s[1],B=s[5],k=s[9],G=s[13],N=s[2],W=s[6],$=s[10],J=s[14],rt=s[3],K=s[7],nt=s[11],st=s[15];return r[0]=a*w+l*M+c*N+h*rt,r[4]=a*I+l*B+c*W+h*K,r[8]=a*S+l*k+c*$+h*nt,r[12]=a*u+l*G+c*J+h*st,r[1]=f*w+g*M+d*N+m*rt,r[5]=f*I+g*B+d*W+m*K,r[9]=f*S+g*k+d*$+m*nt,r[13]=f*u+g*G+d*J+m*st,r[2]=v*w+E*M+_*N+p*rt,r[6]=v*I+E*B+_*W+p*K,r[10]=v*S+E*k+_*$+p*nt,r[14]=v*u+E*G+_*J+p*st,r[3]=R*w+L*M+T*N+o*rt,r[7]=R*I+L*B+T*W+o*K,r[11]=R*S+L*k+T*$+o*nt,r[15]=R*u+L*G+T*J+o*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],f=t[2],g=t[6],d=t[10],m=t[14],v=t[3],E=t[7],_=t[11],p=t[15],R=c*m-h*d,L=l*m-h*g,T=l*d-c*g,o=a*m-h*f,w=a*d-c*f,I=a*g-l*f;return e*(E*R-_*L+p*T)-n*(v*R-_*o+p*w)+s*(v*L-E*o+p*I)-r*(v*T-E*w+_*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10];return e*(a*f-l*h)-n*(r*f-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=t[9],d=t[10],m=t[11],v=t[12],E=t[13],_=t[14],p=t[15],R=e*l-n*a,L=e*c-s*a,T=e*h-r*a,o=n*c-s*l,w=n*h-r*l,I=s*h-r*c,S=f*E-g*v,u=f*_-d*v,M=f*p-m*v,B=g*_-d*E,k=g*p-m*E,G=d*p-m*_,N=R*G-L*k+T*B+o*M-w*u+I*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return t[0]=(l*G-c*k+h*B)*W,t[1]=(s*k-n*G-r*B)*W,t[2]=(E*I-_*w+p*o)*W,t[3]=(d*w-g*I-m*o)*W,t[4]=(c*M-a*G-h*u)*W,t[5]=(e*G-s*M+r*u)*W,t[6]=(_*T-v*I-p*L)*W,t[7]=(f*I-d*T+m*L)*W,t[8]=(a*k-l*M+h*S)*W,t[9]=(n*M-e*k-r*S)*W,t[10]=(v*w-E*T+p*R)*W,t[11]=(g*T-f*w-m*R)*W,t[12]=(l*u-a*B-c*S)*W,t[13]=(e*B-n*u+s*S)*W,t[14]=(E*L-v*o-_*R)*W,t[15]=(f*o-g*L+d*R)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,f=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,f*l+n,f*c-s*a,0,h*c-s*l,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,f=a+a,g=l+l,d=r*h,m=r*f,v=r*g,E=a*f,_=a*g,p=l*g,R=c*h,L=c*f,T=c*g,o=n.x,w=n.y,I=n.z;return s[0]=(1-(E+p))*o,s[1]=(m+T)*o,s[2]=(v-L)*o,s[3]=0,s[4]=(m-T)*w,s[5]=(1-(d+p))*w,s[6]=(_+R)*w,s[7]=0,s[8]=(v+L)*I,s[9]=(_-R)*I,s[10]=(1-(d+E))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),l=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let h=1/a,f=1/l,g=1/c;return Zn.elements[0]*=h,Zn.elements[1]*=h,Zn.elements[2]*=h,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=g,Zn.elements[9]*=g,Zn.elements[10]*=g,e.setFromRotationMatrix(Zn),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=jn,c=!1){let h=this.elements,f=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),v,E;if(c)v=r/(a-r),E=a*r/(a-r);else if(l===jn)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(l===Ns)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=g,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=jn,c=!1){let h=this.elements,f=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s),v,E;if(c)v=1/(a-r),E=a/(a-r);else if(l===jn)v=-2/(a-r),E=-(a+r)/(a-r);else if(l===Ns)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=g,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new O,Zn=new ze,yd=new O(0,0,0),vd=new O(1,1,1),Ri=new O,ta=new O,Un=new O,Gc=new ze,Wc=new zn,Si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],f=s[9],g=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,Xc=new O,_s=new zn,pi=new ze,ea=new O,ar=new O,Sd=new O,bd=new zn,Yc=new O(1,0,0),qc=new O(0,1,0),Zc=new O(0,0,1),Jc={type:"added"},Ed={type:"removed"},xs={type:"childadded",child:null},gl={type:"childremoved",child:null},pn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Si,n=new zn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new re}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ar,ea,this.up):pi.lookAt(ea,ar,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(pi),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),xs.child=t,this.dispatchEvent(xs),xs.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){let g=c[h];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),f=a(t.images),g=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(l){let c=[];for(let h in l){let f=l[h];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new O(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let E of t.hand.values()){let _=e.getJointPose(E,n),p=this._getHandJoint(h,E);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=f.position.distanceTo(g.position),m=.02,v=.005;h.inputState.pinching&&d>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},na={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=dc(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_l(a,r,t+1/3),this.g=_l(a,r,t),this.b=_l(a,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=Bn){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){let n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return Me.workingToColorSpace(Sn.copy(this),t),Math.round(ge(Sn.r*255,0,255))*65536+Math.round(ge(Sn.g*255,0,255))*256+Math.round(ge(Sn.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,f=(l+a)/2;if(l===a)c=0,h=0;else{let g=a-l;switch(h=f<=.5?g/(a+l):g/(2-a-l),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=f,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Bn){Me.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(na);let n=mr(Ci.h,na.h,e),s=mr(Ci.s,na.s,e),r=mr(Ci.l,na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new ee;ee.NAMES=Qh;var Sr=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Jn=new O,mi=new O,xl=new O,gi=new O,ys=new O,vs=new O,Kc=new O,yl=new O,vl=new O,Ml=new O,Sl=new We,bl=new We,El=new We,yi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Jn.subVectors(s,e),mi.subVectors(n,e),xl.subVectors(t,e);let a=Jn.dot(Jn),l=Jn.dot(mi),c=Jn.dot(xl),h=mi.dot(mi),f=mi.dot(xl),g=a*h-l*l;if(g===0)return r.set(0,0,0),null;let d=1/g,m=(h*c-l*f)*d,v=(a*f-l*c)*d;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(l,gi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Sl.setScalar(0),bl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(t,e),bl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(bl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),mi.subVectors(t,e),Jn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Jn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ys.subVectors(s,n),vs.subVectors(r,n),yl.subVectors(t,n);let c=ys.dot(yl),h=vs.dot(yl);if(c<=0&&h<=0)return e.copy(n);vl.subVectors(t,s);let f=ys.dot(vl),g=vs.dot(vl);if(f>=0&&g<=f)return e.copy(s);let d=c*g-f*h;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(ys,a);Ml.subVectors(t,r);let m=ys.dot(Ml),v=vs.dot(Ml);if(v>=0&&m<=v)return e.copy(r);let E=m*h-c*v;if(E<=0&&h>=0&&v<=0)return l=h/(h-v),e.copy(n).addScaledVector(vs,l);let _=f*v-m*g;if(_<=0&&g-f>=0&&m-v>=0)return Kc.subVectors(r,s),l=(g-f)/(g-f+(m-v)),e.copy(s).addScaledVector(Kc,l);let p=1/(_+E+d);return a=E*p,l=d*p,e.copy(n).addScaledVector(ys,a).addScaledVector(vs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),sa.subVectors(this.max,or),Ms.subVectors(t.a,or),Ss.subVectors(t.b,or),bs.subVectors(t.c,or),Pi.subVectors(Ss,Ms),Ii.subVectors(bs,Ss),ji.subVectors(Ms,bs);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!Tl(e,Ms,Ss,bs,sa)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,Ms,Ss,bs,sa))?!1:(ra.crossVectors(Pi,Ii),e=[ra.x,ra.y,ra.z],Tl(e,Ms,Ss,bs,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new O,new O,new O,new O,new O,new O,new O,new O],Kn=new O,ia=new oi,Ms=new O,Ss=new O,bs=new O,Pi=new O,Ii=new O,ji=new O,or=new O,sa=new O,ra=new O,Qi=new O;function Tl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);let l=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),h=e.dot(Qi),f=n.dot(Qi);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>l)return!1}return!0}var en=new O,aa=new Wt,wd=0,En=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var br=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Er=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ze=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=new oi,lr=new O,wl=new O,Di=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(wl)),this.expandByPoint(lr.copy(t.center).sub(wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rd=0,Wn=new ze,Al=new pn,Es=new O,On=new oi,cr=new oi,dn=new O,mn=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Er:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];cr.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(On.min,cr.min),On.expandByPoint(dn),dn.addVectors(On.max,cr.max),On.expandByPoint(dn)):(On.expandByPoint(cr.min),On.expandByPoint(cr.max))}On.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)dn.fromBufferAttribute(l,h),c&&(Es.fromBufferAttribute(t,h),dn.add(Es)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let S=0;S<n.count;S++)l[S]=new O,c[S]=new O;let h=new O,f=new O,g=new O,d=new Wt,m=new Wt,v=new Wt,E=new O,_=new O;function p(S,u,M){h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,u),g.fromBufferAttribute(n,M),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,u),v.fromBufferAttribute(r,M),f.sub(h),g.sub(h),m.sub(d),v.sub(d);let B=1/(m.x*v.y-v.x*m.y);isFinite(B)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(g,-m.y).multiplyScalar(B),_.copy(g).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(B),l[S].add(E),l[u].add(E),l[M].add(E),c[S].add(_),c[u].add(_),c[M].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let S=0,u=R.length;S<u;++S){let M=R[S],B=M.start,k=M.count;for(let G=B,N=B+k;G<N;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let L=new O,T=new O,o=new O,w=new O;function I(S){o.fromBufferAttribute(s,S),w.copy(o);let u=l[S];L.copy(u),L.sub(o.multiplyScalar(o.dot(u))).normalize(),T.crossVectors(w,u);let B=T.dot(c[S])<0?-1:1;a.setXYZW(S,L.x,L.y,L.z,B)}for(let S=0,u=R.length;S<u;++S){let M=R[S],B=M.start,k=M.count;for(let G=B,N=B+k;G<N;G+=3)I(t.getX(G+0)),I(t.getX(G+1)),I(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,l=new O,c=new O,h=new O,f=new O,g=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){let v=t.getX(d+0),E=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,_),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,_),l.add(f),c.add(f),h.add(f),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(l,c){let h=l.array,f=l.itemSize,g=l.normalized,d=new h.constructor(c.length*f),m=0,v=0;for(let E=0,_=c.length;E<_;E++){l.isInterleavedBufferAttribute?m=c[E]*l.data.stride+l.offset:m=c[E]*f;for(let p=0;p<f;p++)d[v++]=h[m++]}return new En(d,f,g)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let f=0,g=h.length;f<g;f++){let d=h[f],m=t(d,n);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],f=[];for(let g=0,d=h.length;g<d;g++){let m=h[g];f.push(m.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],g=r[h];for(let d=0,m=g.length;d<m;d++)f.push(g[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,f=a.length;h<f;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new O,Tr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rl=new O,Cd=new O,Pd=new re,Hn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rl.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Id=0,Xn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Zs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Zl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zs=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,hr=new O,ws=new O,As=new O,Rs=new Wt,ur=new Wt,tu=new ze,oa=new O,dr=new O,la=new O,$c=new Wt,Cl=new Wt,jc=new Wt,wr=class extends pn{constructor(t=new zs){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new mn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ka(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Tr(n,3,0,!1)),Ts.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new Wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ca(oa.set(-.5,-.5,0),As,a,ws,s,r),ca(dr.set(.5,-.5,0),As,a,ws,s,r),ca(la.set(.5,.5,0),As,a,ws,s,r),$c.set(0,0),Cl.set(1,0),jc.set(1,1);let l=t.ray.intersectTriangle(oa,dr,la,!1,hr);if(l===null&&(ca(dr.set(-.5,.5,0),As,a,ws,s,r),Cl.set(0,1),l=t.ray.intersectTriangle(oa,la,dr,!1,hr),l===null))return;let c=t.ray.origin.distanceTo(hr);c<t.near||c>t.far||e.push({distance:c,point:hr.clone(),uv:yi.getInterpolation(hr,oa,dr,la,$c,Cl,jc,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ca(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Rs.x-s*Rs.y,ur.y=s*Rs.x+r*Rs.y):ur.copy(Rs),i.copy(t),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(tu)}var xi=new O,Pl=new O,ha=new O,ua=new O,bi=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pl.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ha),l=ua.dot(this.direction),c=-ua.dot(ha),h=ua.lengthSq(),f=Math.abs(1-a*a),g,d,m,v;if(f>0)if(g=a*c-l,d=a*l-c,v=r*f,g>=0)if(d>=-v)if(d<=v){let E=1/f;g*=E,d*=E,m=g*(g+a*d+2*l)+d*(a*g+d+2*c)+h}else d=r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;else d=-r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;else d<=-v?(g=Math.max(0,-(-a*r+l)),d=g>0?-r:Math.min(Math.max(-r,-c),r),m=-g*g+d*(d+2*c)+h):d<=v?(g=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+h):(g=Math.max(0,-(a*r+l)),d=g>0?r:Math.min(Math.max(-r,-c),r),m=-g*g+d*(d+2*c)+h);else d=a>0?-r:r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Pl).addScaledVector(ha,d),m}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),f>=0?(r=(t.min.y-d.y)*f,a=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,a=(t.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(l=(t.min.z-d.z)*g,c=(t.max.z-d.z)*g):(l=(t.max.z-d.z)*g,c=(t.min.z-d.z)*g),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,f=l.z,g=t.x-a.x,d=t.y-a.y,m=t.z-a.z,v=e.x-a.x,E=e.y-a.y,_=e.z-a.z,p=n.x-a.x,R=n.y-a.y,L=n.z-a.z,T=Math.abs(c),o=Math.abs(h),w=Math.abs(f),I,S,u,M,B,k,G,N,W,$,J,rt;if(T>=o&&T>=w?(u=c,k=g,W=v,rt=p,c>=0?(I=h,S=f,M=d,B=m,G=E,N=_,$=R,J=L):(I=f,S=h,M=m,B=d,G=_,N=E,$=L,J=R)):o>=w?(u=h,k=d,W=E,rt=R,h>=0?(I=f,S=c,M=m,B=g,G=_,N=v,$=L,J=p):(I=c,S=f,M=g,B=m,G=v,N=_,$=p,J=L)):(u=f,k=m,W=_,rt=L,f>=0?(I=c,S=h,M=g,B=d,G=v,N=E,$=p,J=R):(I=h,S=c,M=d,B=g,G=E,N=v,$=R,J=p)),u===0)return null;let K=I/u,nt=S/u,st=1/u,qt=M-K*k,Gt=B-nt*k,Be=G-K*W,ve=N-nt*W,Se=$-K*rt,X=J-nt*rt,Q=Se*ve-X*Be,Nt=qt*X-Gt*Se,ne=Be*Gt-ve*qt;if(s){if(Q<0||Nt<0||ne<0)return null}else if((Q<0||Nt<0||ne<0)&&(Q>0||Nt>0||ne>0))return null;let Lt=Q+Nt+ne;if(Lt===0)return null;let ae=st*(Q*k+Nt*W+ne*rt);return(Lt>0?ae<0:ae>0)?null:this.at(ae/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ni=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qc=new ze,ts=new bi,da=new Di,th=new O,fa=new O,pa=new O,ma=new O,Il=new O,ga=new O,eh=new O,_a=new O,Xe=class extends pn{constructor(t=new mn,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){ga.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let f=l[c],g=r[c];f!==0&&(Il.fromBufferAttribute(g,t),a?ga.addScaledVector(Il,f):ga.addScaledVector(Il.sub(e),f))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(da.containsPoint(ts.origin)===!1&&(ts.intersectSphere(da,th)===null||ts.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,g=r.attributes.normal,d=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){let _=d[v],p=a[_.materialIndex],R=Math.max(_.start,m.start),L=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let T=R,o=L;T<o;T+=3){let w=l.getX(T),I=l.getX(T+1),S=l.getX(T+2);s=xa(this,p,t,n,h,f,g,w,I,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let _=v,p=E;_<p;_+=3){let R=l.getX(_),L=l.getX(_+1),T=l.getX(_+2);s=xa(this,a,t,n,h,f,g,R,L,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){let _=d[v],p=a[_.materialIndex],R=Math.max(_.start,m.start),L=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let T=R,o=L;T<o;T+=3){let w=T,I=T+1,S=T+2;s=xa(this,p,t,n,h,f,g,w,I,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let _=v,p=E;_<p;_+=3){let R=_,L=_+1,T=_+2;s=xa(this,a,t,n,h,f,g,R,L,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Ld(i,t,e,n,s,r,a,l){let c;if(t.side===Rn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===Vi,l),c===null)return null;_a.copy(l),_a.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(_a);return h<e.near||h>e.far?null:{distance:h,point:_a.clone(),object:i}}function xa(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,fa),i.getVertexPosition(c,pa),i.getVertexPosition(h,ma);let f=Ld(i,t,e,n,fa,pa,ma,eh);if(f){let g=new O;yi.getBarycoord(eh,fa,pa,ma,g),s&&(f.uv=yi.getInterpolatedAttribute(s,l,c,h,g,new Wt)),r&&(f.uv1=yi.getInterpolatedAttribute(r,l,c,h,g,new Wt)),a&&(f.normal=yi.getInterpolatedAttribute(a,l,c,h,g,new O),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a:l,b:c,c:h,normal:new O,materialIndex:0};yi.getNormal(fa,pa,ma,d.normal),f.face=d,f.barycoord=g}return f}var Va=class extends An{constructor(t=null,e=1,n=1,s,r,a,l,c,h=fn,f=fn,g,d){super(null,a,l,c,h,f,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=new Di,Dd=new Wt(.5,.5),ya=new O,ks=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],f=r[4],g=r[5],d=r[6],m=r[7],v=r[8],E=r[9],_=r[10],p=r[11],R=r[12],L=r[13],T=r[14],o=r[15];if(s[0].setComponents(h-a,m-f,p-v,o-R).normalize(),s[1].setComponents(h+a,m+f,p+v,o+R).normalize(),s[2].setComponents(h+l,m+g,p+E,o+L).normalize(),s[3].setComponents(h-l,m-g,p-E,o-L).normalize(),n)s[4].setComponents(c,d,_,T).normalize(),s[5].setComponents(h-c,m-d,p-_,o-T).normalize();else if(s[4].setComponents(h-c,m-d,p-_,o-T).normalize(),e===jn)s[5].setComponents(h+c,m+d,p+_,o+T).normalize();else if(e===Ns)s[5].setComponents(c,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=Dd.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new O,Wa=new O,nh=new ze,fr=new bi,va=new Di,Ll=new O,ih=new O,Xa=class extends pn{constructor(t=new mn,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),Wa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Wa);t.setAttribute("lineDistance",new Ze(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;nh.copy(s).invert(),fr.copy(t.ray).applyMatrix4(nh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){let m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let E=m,_=v-1;E<_;E+=h){let p=f.getX(E),R=f.getX(E+1),L=Ma(this,t,fr,c,p,R,E);L&&e.push(L)}if(this.isLineLoop){let E=f.getX(v-1),_=f.getX(m),p=Ma(this,t,fr,c,E,_,v-1);p&&e.push(p)}}else{let m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let E=m,_=v-1;E<_;E+=h){let p=Ma(this,t,fr,c,E,E+1,E);p&&e.push(p)}if(this.isLineLoop){let E=Ma(this,t,fr,c,v-1,m,v-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ma(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Ga.fromBufferAttribute(l,s),Wa.fromBufferAttribute(l,r),e.distanceSqToSegment(Ga,Wa,Ll,ih)>n)return;Ll.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Ll);if(!(h<t.near||h>t.far))return{distance:h,point:ih.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var sh=new O,rh=new O,Ya=class extends Xa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)sh.fromBufferAttribute(e,s),rh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sh.distanceTo(rh);t.setAttribute("lineDistance",new Ze(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vs=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ah=new ze,Hl=new bi,Sa=new Di,ba=new O,Rr=class extends pn{constructor(t=new mn,e=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;ah.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(ah);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,g=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,E=m;v<E;v++){let _=h.getX(v);ba.fromBufferAttribute(g,_),oh(ba,_,c,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let v=d,E=m;v<E;v++)ba.fromBufferAttribute(g,v),oh(ba,v,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function oh(i,t,e,n,s,r,a){let l=Hl.distanceSqToPoint(i);if(l<e){let c=new O;Hl.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Cr=class extends An{constructor(t=[],e=Gi,n,s,r,a,l,c,h,f){super(t,e,n,s,r,a,l,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gs=class extends An{constructor(t,e,n,s,r,a,l,c,h){super(t,e,n,s,r,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends An{constructor(t,e,n=ei,s,r,a,l=fn,c=fn,h,f=ai,g=1){if(f!==ai&&f!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,l,c,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qa=class extends Fi{constructor(t,e=ei,n=Gi,s,r,a=fn,l=fn,c,h=ai){let f={width:t,height:t,depth:1},g=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,l,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Pr=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ui=class i extends mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],f=[],g=[],d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(g,2));function v(E,_,p,R,L,T,o,w,I,S,u){let M=T/I,B=o/S,k=T/2,G=o/2,N=w/2,W=I+1,$=S+1,J=0,rt=0,K=new O;for(let nt=0;nt<$;nt++){let st=nt*B-G;for(let qt=0;qt<W;qt++){let Gt=qt*M-k;K[E]=Gt*R,K[_]=st*L,K[p]=N,h.push(K.x,K.y,K.z),K[E]=0,K[_]=0,K[p]=w>0?1:-1,f.push(K.x,K.y,K.z),g.push(qt/I),g.push(1-nt/S),J+=1}}for(let nt=0;nt<S;nt++)for(let st=0;st<I;st++){let qt=d+st+W*nt,Gt=d+st+W*(nt+1),Be=d+(st+1)+W*(nt+1),ve=d+(st+1)+W*nt;c.push(qt,Gt,ve),c.push(Gt,Be,ve),rt+=6}l.addGroup(m,rt,u),m+=rt,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var is=class i extends mn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],g=[],d=[],m=[],v=0,E=[],_=n/2,p=0;R(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(m,2));function R(){let T=new O,o=new O,w=0,I=(e-t)/n;for(let S=0;S<=r;S++){let u=[],M=S/r,B=M*(e-t)+t;for(let k=0;k<=s;k++){let G=k/s,N=G*c+l,W=Math.sin(N),$=Math.cos(N);o.x=B*W,o.y=-M*n+_,o.z=B*$,g.push(o.x,o.y,o.z),T.set(W,I,$).normalize(),d.push(T.x,T.y,T.z),m.push(G,1-M),u.push(v++)}E.push(u)}for(let S=0;S<s;S++)for(let u=0;u<r;u++){let M=E[u][S],B=E[u+1][S],k=E[u+1][S+1],G=E[u][S+1];(t>0||u!==0)&&(f.push(M,B,G),w+=3),(e>0||u!==r-1)&&(f.push(B,k,G),w+=3)}h.addGroup(p,w,0),p+=w}function L(T){let o=v,w=new Wt,I=new O,S=0,u=T===!0?t:e,M=T===!0?1:-1;for(let k=1;k<=s;k++)g.push(0,_*M,0),d.push(0,M,0),m.push(.5,.5),v++;let B=v;for(let k=0;k<=s;k++){let N=k/s*c+l,W=Math.cos(N),$=Math.sin(N);I.x=u*$,I.y=_*M,I.z=u*W,g.push(I.x,I.y,I.z),d.push(0,M,0),w.x=W*.5+.5,w.y=$*.5*M+.5,m.push(w.x,w.y),v++}for(let k=0;k<s;k++){let G=o+k,N=B+k;T===!0?f.push(N,N+1,G):f.push(N+1,N,G),S+=3}h.addGroup(p,S,T===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class i extends is{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ss=class i extends mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,f=c+1,g=t/l,d=e/c,m=[],v=[],E=[],_=[];for(let p=0;p<f;p++){let R=p*d-a;for(let L=0;L<h;L++){let T=L*g-r;v.push(T,-R,0),E.push(0,0,1),_.push(L/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<l;R++){let L=R+h*p,T=R+h*(p+1),o=R+1+h*(p+1),w=R+1+h*p;m.push(L,T,w),m.push(T,o,w)}this.setIndex(m),this.setAttribute("position",new Ze(v,3)),this.setAttribute("normal",new Ze(E,3)),this.setAttribute("uv",new Ze(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ws=class i extends mn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],f=[],g=[],d=new O,m=new O,v=new O;for(let E=0;E<=n;E++){let _=a+E/n*l;for(let p=0;p<=s;p++){let R=p/s*r;m.x=(t+e*Math.cos(_))*Math.cos(R),m.y=(t+e*Math.cos(_))*Math.sin(R),m.z=e*Math.sin(_),h.push(m.x,m.y,m.z),d.x=t*Math.cos(R),d.y=t*Math.sin(R),v.subVectors(m,d).normalize(),f.push(v.x,v.y,v.z),g.push(p/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let _=1;_<=s;_++){let p=(s+1)*E+_-1,R=(s+1)*(E-1)+_-1,L=(s+1)*(E-1)+_,T=(s+1)*E+_;c.push(p,R,T),c.push(R,L,T)}this.setIndex(c),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ir=class extends Xn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ee(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(lh(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function lh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var eu={clone:cs,merge:Tn},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Za=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Lr=class extends He{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ja=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Cs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends Oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ol:r=t,l=2*e-n;break;case Bl:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ol:a=t,c=2*n-e;break;case Bl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,f=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),E=v*v,_=E*v,p=-d*_+2*d*E-d*v,R=(1+d)*_+(-1.5-2*d)*E+(-.5+d)*v+1,L=(-1-m)*_+(1.5+m)*E+.5*v,T=m*_-m*E;for(let o=0;o!==l;++o)r[o]=p*a[f+o]+R*a[h+o]+L*a[c+o]+T*a[g+o];return r}},ja=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=(n-e)/(s-e),g=1-f;for(let d=0;d!==l;++d)r[d]=a[h+d]*g+a[c+d]*f;return r}},Qa=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},to=class extends Oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=this.inTangents,g=this.outTangents;if(!f||!g){let v=(n-e)/(s-e),E=1-v;for(let _=0;_!==l;++_)r[_]=a[h+_]*E+a[c+_]*v;return r}let d=l*2,m=t-1;for(let v=0;v!==l;++v){let E=a[h+v],_=a[c+v],p=m*d+v*2,R=g[p],L=g[p+1],T=t*d+v*2,o=f[T],w=f[T+1],I=Bd(n,e,R,o,s);r[v]=nu(I,E,L,w,_)}return r}};function nu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Od(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Bd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=nu(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Od(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cs(e,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Cs(t.times,Array),values:Cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Dl(t.settings)&&(n.settings={inTangents:Cs(t.settings.inTangents,Array),outTangents:Cs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new to(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break;case Fl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Dl(this.settings)&&(ch(this.settings.inTangents,t),ch(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){$t("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){$t("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&Qu(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){$t("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],f=t[l+1];if(h!==f&&(l!==1||h!==t[0]))if(s)c=!0;else{let g=l*n,d=g-n,m=g+n;for(let v=0;v!==n;++v){let E=e[g+v];if(E!==e[d+v]||E!==e[m+v]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let g=l*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[g+m]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Dl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ch(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Oa;var Bi=class extends Vn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=gr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="color";var no=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};no.prototype.ValueTypeName="number";var io=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let f=h+l;h!==f;h+=4)zn.slerpFlat(r,0,a,h-l,a,h,c);return r}},Dr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Vn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=gr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="vector";var ro=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,l),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,g){return h.push(f,g),this},this.removeHandler=function(f){let g=h.indexOf(f);return g!==-1&&h.splice(g,2),this},this.getHandler=function(f){for(let g=0,d=h.length;g<d;g+=2){let m=h[g],v=h[g+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},iu=new ro,ao=class{constructor(t){this.manager=t!==void 0?t:iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Nl=new ze,hh=new O,uh=new O,oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ea=new O,Ta=new zn,si=new O,Fr=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,Ta,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ea,Ta,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new O,dh=new Wt,fh=new Wt,bn=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,dh,fh),e.subVectors(fh,dh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xs=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zl=class extends oo{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ur=class extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ps=-90,Is=1,lo=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(Ps,Is,t,e);s.layers=this.layers,this.add(s);let r=new bn(Ps,Is,t,e);r.layers=this.layers,this.add(r);let a=new bn(Ps,Is,t,e);a.layers=this.layers,this.add(a);let l=new bn(Ps,Is,t,e);l.layers=this.layers,this.add(l);let c=new bn(Ps,Is,t,e);c.layers=this.layers,this.add(c);let h=new bn(Ps,Is,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,f]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(g,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},co=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mc="\\[\\]\\.:\\/",Hd=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",zd="[^"+mc.replace("\\.","")+"]",kd=/((?:WC+[\/:])*)/.source.replace("WC",gc),Vd=/(WCOD+)?/.source.replace("WCOD",zd),Gd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),Wd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Xd=new RegExp("^"+kd+Vd+Gd+Wd+"$"),Yd=["material","materials","bones","map"],kl=class{constructor(t,e,n){let s=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hd,"")}static parseTrackName(t){let e=Xd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=kl;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);var ph=new ze,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new bi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vl(t[s],this,n,e);return n.sort(mh),n}};function mh(i,t){return i.distance-t.distance}function Vl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Vl(r[a],t,e,!0)}}var Ys=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Gl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Br=class extends Ya{constructor(t=10,e=10,n=4473924,s=8947848){n=new ee(n),s=new ee(s);let r=e/2,a=t/e,l=t/2,c=[],h=[];for(let d=0,m=0,v=-l;d<=e;d++,v+=a){c.push(-l,0,v,l,0,v),c.push(v,0,-l,v,0,l);let E=d===r?n:s;E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3}let f=new mn;f.setAttribute("position",new Ze(c,3)),f.setAttribute("color",new Ze(h,3));let g=new Ar({vertexColors:!0,toneMapped:!1});super(f,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Hr=class extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function _c(i,t,e,n){let s=qd(n);switch(e){case oc:return i*t;case cc:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case Yi:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case lc:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case Mo:case bo:return Math.max(i,8)*Math.max(t,8)/2;case To:case wo:case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Zr:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xo:case Yo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(i){switch(i){case In:case ic:return{byteLength:1,components:1};case Js:case sc:case ii:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case ei:case mo:case ni:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function Tu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){let t=new WeakMap;function e(l,c){let h=l.array,f=l.usage,g=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,f),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,h){let f=c.array,g=c.updateRanges;if(i.bindBuffer(h,l),g.length===0)i.bufferSubData(h,0,f);else{g.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<g.length;m++){let v=g[d],E=g[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++d,g[d]=E)}g.length=d+1;for(let m=0,v=g.length;m<v;m++){let E=g[m];i.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yf=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Zf=`uniform sampler2D dfgLUT;
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
}`,Jf=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,$p=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,r0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define MATCAP
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
}`,m0=`#define MATCAP
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
}`,g0=`#define NORMAL
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
}`,_0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,v0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,b0=`#define TOON
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
}`,E0=`uniform float size;
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
}`,T0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,A0=`uniform vec3 color;
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
}`,R0=`uniform float rotation;
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
}`,C0=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Jd,alphahash_pars_fragment:Kd,alphamap_fragment:$d,alphamap_pars_fragment:jd,alphatest_fragment:Qd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:yf,cube_uv_reflection_fragment:vf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Tf,colorspace_fragment:wf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:If,envmap_physical_pars_fragment:Vf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:Nf,fog_fragment:Ff,fog_pars_fragment:Uf,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:zf,lights_pars_begin:kf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Kf,lights_fragment_end:$f,lightprobes_pars_fragment:jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:bp,opaque_fragment:Ep,packing:Tp,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Up,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:Hp,specularmap_fragment:zp,specularmap_pars_fragment:kp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:Yp,uv_pars_vertex:qp,uv_vertex:Zp,worldpos_vertex:Jp,background_vert:Kp,background_frag:$p,backgroundCube_vert:jp,backgroundCube_frag:Qp,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distance_vert:s0,distance_frag:r0,equirect_vert:a0,equirect_frag:o0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:h0,meshbasic_frag:u0,meshlambert_vert:d0,meshlambert_frag:f0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:_0,meshphong_vert:x0,meshphong_frag:y0,meshphysical_vert:v0,meshphysical_frag:M0,meshtoon_vert:S0,meshtoon_frag:b0,points_vert:E0,points_frag:T0,shadow_vert:w0,shadow_frag:A0,sprite_vert:R0,sprite_frag:C0},Rt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},hi={basic:{uniforms:Tn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Tn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Tn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Tn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Tn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Tn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Tn([Rt.points,Rt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Tn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Tn([Rt.common,Rt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Tn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Tn([Rt.sprite,Rt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Tn([Rt.common,Rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Tn([Rt.lights,Rt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};hi.physical={uniforms:Tn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var tl={r:0,b:0,g:0},P0=new ze,wu=new re;wu.set(-1,0,0,0,1,0,0,0,1);function I0(i,t,e,n,s,r){let a=new ee(0),l=s===!0?0:1,c,h,f=null,g=0,d=null;function m(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){let T=R.backgroundBlurriness>0;L=t.get(L,T)}return L}function v(R){let L=!1,T=m(R);T===null?_(a,l):T&&T.isColor&&(_(T,1),L=!0);let o=i.xr.getEnvironmentBlendMode();o==="additive"?e.buffers.color.setClear(0,0,0,1,r):o==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(R,L){let T=m(L);T&&(T.isCubeTexture||T.mapping===Vr)?(h===void 0&&(h=new Xe(new Ui(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:cs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(o,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(wu),h.material.toneMapped=Me.getTransfer(T.colorSpace)!==Le,(f!==T||g!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,g=T.version,d=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Xe(new ss(2,2),new kn({name:"BackgroundMaterial",uniforms:cs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=Me.getTransfer(T.colorSpace)!==Le,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||g!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,g=T.version,d=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function _(R,L){R.getRGB(tl,pc(i)),e.buffers.color.setClear(tl.r,tl.g,tl.b,L,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,L=1){a.set(R),l=L,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,_(a,l)},render:v,addToRenderList:E,dispose:p}}function L0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function l(B,k,G,N,W){let $=!1,J=g(B,N,G,k);r!==J&&(r=J,h(r.object)),$=m(B,N,G,W),$&&v(B,N,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(B,k,G,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function h(B){return i.bindVertexArray(B)}function f(B){return i.deleteVertexArray(B)}function g(B,k,G,N){let W=N.wireframe===!0,$=n[k.id];$===void 0&&($={},n[k.id]=$);let J=B.isInstancedMesh===!0?B.id:0,rt=$[J];rt===void 0&&(rt={},$[J]=rt);let K=rt[G.id];K===void 0&&(K={},rt[G.id]=K);let nt=K[W];return nt===void 0&&(nt=d(c()),K[W]=nt),nt}function d(B){let k=[],G=[],N=[];for(let W=0;W<e;W++)k[W]=0,G[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:N,object:B,attributes:{},index:null}}function m(B,k,G,N){let W=r.attributes,$=k.attributes,J=0,rt=G.getAttributes();for(let K in rt)if(rt[K].location>=0){let st=W[K],qt=$[K];if(qt===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(qt=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(qt=B.instanceColor)),st===void 0||st.attribute!==qt||qt&&st.data!==qt.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function v(B,k,G,N){let W={},$=k.attributes,J=0,rt=G.getAttributes();for(let K in rt)if(rt[K].location>=0){let st=$[K];st===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(st=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(st=B.instanceColor));let qt={};qt.attribute=st,st&&st.data&&(qt.data=st.data),W[K]=qt,J++}r.attributes=W,r.attributesNum=J,r.index=N}function E(){let B=r.newAttributes;for(let k=0,G=B.length;k<G;k++)B[k]=0}function _(B){p(B,0)}function p(B,k){let G=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;G[B]=1,N[B]===0&&(i.enableVertexAttribArray(B),N[B]=1),W[B]!==k&&(i.vertexAttribDivisor(B,k),W[B]=k)}function R(){let B=r.newAttributes,k=r.enabledAttributes;for(let G=0,N=k.length;G<N;G++)k[G]!==B[G]&&(i.disableVertexAttribArray(G),k[G]=0)}function L(B,k,G,N,W,$,J){J===!0?i.vertexAttribIPointer(B,k,G,W,$):i.vertexAttribPointer(B,k,G,N,W,$)}function T(B,k,G,N){E();let W=N.attributes,$=G.getAttributes(),J=k.defaultAttributeValues;for(let rt in $){let K=$[rt];if(K.location>=0){let nt=W[rt];if(nt===void 0&&(rt==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),rt==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor)),nt!==void 0){let st=nt.normalized,qt=nt.itemSize,Gt=t.get(nt);if(Gt===void 0)continue;let Be=Gt.buffer,ve=Gt.type,Se=Gt.bytesPerElement,X=ve===i.INT||ve===i.UNSIGNED_INT||nt.gpuType===mo;if(nt.isInterleavedBufferAttribute){let Q=nt.data,Nt=Q.stride,ne=nt.offset;if(Q.isInstancedInterleavedBuffer){for(let Lt=0;Lt<K.locationSize;Lt++)p(K.location+Lt,Q.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Lt=0;Lt<K.locationSize;Lt++)_(K.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Lt=0;Lt<K.locationSize;Lt++)L(K.location+Lt,qt/K.locationSize,ve,st,Nt*Se,(ne+qt/K.locationSize*Lt)*Se,X)}else{if(nt.isInstancedBufferAttribute){for(let Q=0;Q<K.locationSize;Q++)p(K.location+Q,nt.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Q=0;Q<K.locationSize;Q++)_(K.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Q=0;Q<K.locationSize;Q++)L(K.location+Q,qt/K.locationSize,ve,st,qt*Se,qt/K.locationSize*Q*Se,X)}}else if(J!==void 0){let st=J[rt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(K.location,st);break;case 3:i.vertexAttrib3fv(K.location,st);break;case 4:i.vertexAttrib4fv(K.location,st);break;default:i.vertexAttrib1fv(K.location,st)}}}}R()}function o(){u();for(let B in n){let k=n[B];for(let G in k){let N=k[G];for(let W in N){let $=N[W];for(let J in $)f($[J].object),delete $[J];delete N[W]}}delete n[B]}}function w(B){if(n[B.id]===void 0)return;let k=n[B.id];for(let G in k){let N=k[G];for(let W in N){let $=N[W];for(let J in $)f($[J].object),delete $[J];delete N[W]}}delete n[B.id]}function I(B){for(let k in n){let G=n[k];for(let N in G){let W=G[N];if(W[B.id]===void 0)continue;let $=W[B.id];for(let J in $)f($[J].object),delete $[J];delete W[B.id]}}}function S(B){for(let k in n){let G=n[k],N=B.isInstancedMesh===!0?B.id:0,W=G[N];if(W!==void 0){for(let $ in W){let J=W[$];for(let rt in J)f(J[rt].object),delete J[rt];delete W[$]}delete G[N],Object.keys(G).length===0&&delete n[k]}}}function u(){M(),a=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:u,resetDefaultState:M,dispose:o,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:_,disableUnusedAttributes:R}}function D0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function l(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function N0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Yn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){let S=I===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==In&&I!==ni&&!S&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=c(h);f!==h&&(Kt("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),o=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:T,maxSamples:o,samples:w}}function F0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,l=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let m=g.length!==0||d||n!==0||s;return s=d,n=g.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=f(g,d,0)},this.setState=function(g,d,m){let v=g.clippingPlanes,E=g.clipIntersection,_=g.clipShadows,p=i.get(g);if(!s||v===null||v.length===0||r&&!_)r?f(null):h();else{let R=r?0:n,L=R*4,T=p.clippingState||null;c.value=T,T=f(v,d,L,m);for(let o=0;o!==L;++o)T[o]=e[o];p.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(g,d,m,v){let E=g!==null?g.length:0,_=null;if(E!==0){if(_=c.value,v!==!0||_===null){let p=m+E*4,R=d.matrixWorldInverse;l.getNormalMatrix(R),(_===null||_.length<p)&&(_=new Float32Array(p));for(let L=0,T=m;L!==E;++L,T+=4)a.copy(g[L]).applyMatrix4(R,l),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,_}}var js=4,U0=6,O0=20,B0=256,Kr=new Xs,su=new ee,xc=null,yc=0,vc=0,Mc=!1,H0=new O,hs=new O,nl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=H0}=r;xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,yc,vc),this._renderer.xr.enabled=Mc,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ii,format:Yn,colorSpace:_r,depthBuffer:!1},s=ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z0(r)),this._blurMaterial=V0(r,t,e),this._ggxMaterial=k0(r,t,e)}return s}_compileMaterial(t){let e=new Xe(new mn,t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,s,r){let c=new bn(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,m=g.toneMapping;g.getClearColor(su),g.toneMapping=ti,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Ui,new Ni({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,_=E.material,p=!1,R=t.background;R?R.isColor&&(_.color.copy(R),t.background=null,p=!0):(_.color.copy(su),p=!0);for(let L=0;L<6;L++){let T=L%3;T===0?(c.up.set(0,h[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[L],r.y,r.z)):T===1?(c.up.set(0,0,h[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[L],r.z)):(c.up.set(0,h[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[L]));let o=this._cubeSize;$s(s,T*o,L>2?o:0,o,o),g.setRenderTarget(s),p&&g.render(E,c),g.render(t,c)}g.toneMapping=m,g.autoClear=d,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;$s(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-f*f),d=h*1.25,m=g*d,{_lodMax:v}=this,E=this._sizeLods[n],_=3*E*(n>v-js?n-v+js:0),p=4*(this._cubeSize-E);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=v-e,$s(r,_,p,3*E,2*E),s.setRenderTarget(r),s.render(l,Kr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,$s(t,_,p,3*E,2*E),s.setRenderTarget(t),s.render(l,Kr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],g=3*f*(s>this._lodMax-js?s-this._lodMax+js:0),d=4*(this._cubeSize-f);$s(e,g,d,3*f,2*f),a.setRenderTarget(e),a.render(c,Kr)}};function z0(i){let t=[],e=[],n=i,s=i-js+1+U0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,d=6,m=3,v=new Float32Array(m*d*g),E=new Float32Array(m*d*g);for(let p=0;p<g;p++){let R=p%3*2/3-1,L=p>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(T,m*d*p);for(let o=0;o<d;o++){let w=f[o*2]*2-1,I=f[o*2+1]*2-1;p===0?hs.set(1,I,w):p===1?hs.set(-w,1,-I):p===2?hs.set(-w,I,1):p===3?hs.set(-1,I,-w):p===4?hs.set(-w,-1,I):hs.set(w,I,-1),hs.toArray(E,(p*d+o)*m)}}let _=new mn;_.setAttribute("position",new En(v,m)),_.setAttribute("outputDirection",new En(E,m)),e.push(new Xe(_,null)),n>js&&n--}return{lodMeshes:e,sizeLods:t}}function ru(i,t,e){let n=new Pn(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function k0(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function V0(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function au(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function ou(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var il=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:li});r.uniforms.tEquirect.value=e;let a=new Xe(s,r),l=e.minFilter;return e.minFilter===Wi&&(e.minFilter=sn),new lo(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function G0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===uo||m===fo)if(t.has(d)){let v=t.get(d).texture;return l(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let E=new il(v.height);return E.fromEquirectangularTexture(i,d),t.set(d,E),d.addEventListener("dispose",h),l(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,v=m===uo||m===fo,E=m===Gi||m===ls;if(v||E){let _=e.get(d),p=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new nl(i)),_=v?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let R=d.image;return v&&R&&R.height>0||E&&R&&c(R)?(n===null&&(n=new nl(i)),_=v?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function l(d,m){return m===uo?d.mapping=Gi:m===fo&&(d.mapping=ls),d}function c(d){let m=0,v=6;for(let E=0;E<v;E++)d[E]!==void 0&&m++;return m===v}function h(d){let m=d.target;m.removeEventListener("dispose",h);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function f(d){let m=d.target;m.removeEventListener("dispose",f);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function W0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,t,e,n){let s={},r=new WeakMap;function a(g){let d=g.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(g,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(g){let d=g.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER)}function h(g){let d=[],m=g.index,v=g.attributes.position,E=0;if(v===void 0)return;if(m!==null){let R=m.array;E=m.version;for(let L=0,T=R.length;L<T;L+=3){let o=R[L+0],w=R[L+1],I=R[L+2];d.push(o,w,w,I,I,o)}}else{let R=v.array;E=v.version;for(let L=0,T=R.length/3-1;L<T;L+=3){let o=L+0,w=L+1,I=L+2;d.push(o,w,w,I,I,o)}}let _=new(v.count>=65535?Er:br)(d,1);_.version=E;let p=r.get(g);p&&t.remove(p),r.set(g,_)}function f(g){let d=r.get(g);if(d){let m=g.index;m!==null&&d.version<m.version&&h(g)}else h(g);return r.get(g)}return{get:l,update:c,getWireframeAttribute:f}}function Y0(i,t,e){let n;function s(g){n=g}let r,a;function l(g){r=g.type,a=g.bytesPerElement}function c(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function h(g,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,g*a,m),e.update(d,n,m))}function f(g,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,m);let E=0;for(let _=0;_<m;_++)E+=d[_];e.update(E,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Z0(i,t,e){let n=new WeakMap,s=new We;function r(a,l,c){let h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0,d=n.get(l);if(d===void 0||d.count!==g){let u=function(){I.dispose(),n.delete(l),l.removeEventListener("dispose",u)};d!==void 0&&d.texture.dispose();let m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],R=l.morphAttributes.color||[],L=0;m===!0&&(L=1),v===!0&&(L=2),E===!0&&(L=3);let T=l.attributes.position.count*L,o=1;T>t.maxTextureSize&&(o=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*o*4*g),I=new Mr(w,T,o,g);I.type=ni,I.needsUpdate=!0;let S=L*4;for(let M=0;M<g;M++){let B=_[M],k=p[M],G=R[M],N=T*o*4*M;for(let W=0;W<B.count;W++){let $=W*S;m===!0&&(s.fromBufferAttribute(B,W),w[N+$+0]=s.x,w[N+$+1]=s.y,w[N+$+2]=s.z,w[N+$+3]=0),v===!0&&(s.fromBufferAttribute(k,W),w[N+$+4]=s.x,w[N+$+5]=s.y,w[N+$+6]=s.z,w[N+$+7]=0),E===!0&&(s.fromBufferAttribute(G,W),w[N+$+8]=s.x,w[N+$+9]=s.y,w[N+$+10]=s.z,w[N+$+11]=G.itemSize===4?s.w:1)}}d={count:g,texture:I,size:new Wt(T,o)},n.set(l,d),l.addEventListener("dispose",u)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let E=0;E<h.length;E++)m+=h[E];let v=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function J0(i,t,e,n,s){let r=new WeakMap;function a(h){let f=s.render.frame,g=h.geometry,d=t.get(h,g);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==f&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){let m=h.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return d}function l(){r=new WeakMap}function c(h){let f=h.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var K0={[Kl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[kr]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function $0(i,t,e,n,s,r){let a=new Pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new mn;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let f=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Xe(h,f),d=new Xs(-1,1,1,-1,0,1),m=null,v=null,E=!1,_,p=null,R=[],L=!1;this.setSize=function(T,o){a.setSize(T,o),l!==null&&l.setSize(T,o),c!==null&&c.setSize(T,o);for(let w=0;w<R.length;w++){let I=R[w];I.setSize&&I.setSize(T,o)}},this.setEffects=function(T){R=T,L=R.length>0&&R[0].isRenderPass===!0;let o=a.width,w=a.height;R.length>0&&l===null&&(l=new Pn(o,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new Pn(o,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<R.length;I++){let S=R[I];S.setSize&&S.setSize(o,w)}},this.begin=function(T,o){if(E||T.toneMapping===ti&&R.length===0)return!1;if(p=o,o!==null){let w=o.width,I=o.height;(a.width!==w||a.height!==I)&&this.setSize(w,I)}return L===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=ti,!0},this.hasRenderPass=function(){return L},this.end=function(T,o){T.toneMapping=_,E=!0;let w=a,I=l;for(let S=0;S<R.length;S++){let u=R[S];u.enabled!==!1&&(u.render(T,I,w,o),u.needsSwap!==!1&&(w=I,I=I===l?c:l))}if(m!==T.outputColorSpace||v!==T.toneMapping){m=T.outputColorSpace,v=T.toneMapping,f.defines={},Me.getTransfer(m)===Le&&(f.defines.SRGB_TRANSFER="");let S=K0[v];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(p),T.render(g,d),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Au=new An,Ec=new Fi(1,1),Ru=new Mr,Cu=new za,Pu=new Cr,lu=[],cu=[],hu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lu[s];if(r===void 0&&(r=new Float32Array(s),lu[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function al(i,t){let e=cu[t];e===void 0&&(e=new Int32Array(t),cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),an(e,n)}}function im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),an(e,n)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),an(e,n)}}function rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=e.isReversedDepthBuffer()?Qo:jo,r=Ec):r=Au,e.setTexture2D(t||r,s)}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cu,s)}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pu,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ru,s)}function _m(i){switch(i){case 5126:return j0;case 35664:return Q0;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(i,t){i.uniform1fv(this.addr,t)}function ym(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function vm(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Mm(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Sm(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bm(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Em(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tm(i,t){i.uniform1iv(this.addr,t)}function wm(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function Rm(i,t){i.uniform4iv(this.addr,t)}function Cm(i,t){i.uniform1uiv(this.addr,t)}function Pm(i,t){i.uniform2uiv(this.addr,t)}function Im(i,t){i.uniform3uiv(this.addr,t)}function Lm(i,t){i.uniform4uiv(this.addr,t)}function Dm(i,t,e){let n=this.cache,s=t.length,r=al(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ec:a=Au;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Nm(i,t,e){let n=this.cache,s=t.length,r=al(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cu,r[a])}function Fm(i,t,e){let n=this.cache,s=t.length,r=al(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pu,r[a])}function Um(i,t,e){let n=this.cache,s=t.length,r=al(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ru,r[a])}function Om(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return vm;case 35666:return Mm;case 35674:return Sm;case 35675:return bm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Im;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Um}}var Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}},wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function fu(i,t){i.seq.push(t),i.map[t.id]=t}function Bm(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){fu(e,h===void 0?new Tc(l,i,t):new wc(l,i,t));break}else{let g=e.map[l];g===void 0&&(g=new Ac(l),fu(e,g)),e=g}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);Bm(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hm=37297,zm=0;function km(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var mu=new re;function Vm(i){Me._getMatrix(mu,Me.workingColorSpace,i);let t=`mat3( ${mu.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(t),l)}else return r}function Gm(i,t){let e=Vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wm={[Kl]:"Linear",[$l]:"Reinhard",[jl]:"Cineon",[kr]:"ACESFilmic",[tc]:"AgX",[ec]:"Neutral",[Ql]:"Custom"};function Xm(i,t){let e=Wm[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var el=new O;function Ym(){Me.getLuminanceCoefficients(el);let i=el.x.toFixed(4),t=el.y.toFixed(4),e=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function Zm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function jr(i){return i!==""}function _u(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(Km,jm)}var $m=new Map;function jm(i,t){let e=me[t];if(e===void 0){let n=$m.get(t);if(n!==void 0)e=me[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rc(e)}var Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(Qm,tg)}function tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var eg={[as]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function ng(i){return eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ig={[Gi]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE_UV"};function sg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ig[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rg={[ls]:"ENVMAP_MODE_REFRACTION"};function ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var og={[Jl]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function lg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":og[i.combine]||"ENVMAP_BLENDING_NONE"}function cg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=ng(e),h=sg(e),f=ag(e),g=lg(e),d=cg(e),m=qm(e),v=Zm(r),E=s.createProgram(),_,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(jr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(_=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?me.tonemapping_pars_fragment:"",e.toneMapping!==ti?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Gm("linearToOutputTexel",e.outputColorSpace),Ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),a=Rc(a),a=_u(a,e),a=xu(a,e),l=Rc(l),l=_u(l,e),l=xu(l,e),a=yu(a),l=yu(l),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let L=R+_+a,T=R+p+l,o=pu(s,s.VERTEX_SHADER,L),w=pu(s,s.FRAGMENT_SHADER,T);s.attachShader(E,o),s.attachShader(E,w),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(B){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(E)||"",G=s.getShaderInfoLog(o)||"",N=s.getShaderInfoLog(w)||"",W=k.trim(),$=G.trim(),J=N.trim(),rt=!0,K=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,o,w);else{let nt=gu(s,o,"vertex"),st=gu(s,w,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+nt+`
`+st)}else W!==""?Kt("WebGLProgram: Program Info Log:",W):($===""||J==="")&&(K=!1);K&&(B.diagnostics={runnable:rt,programLog:W,vertexShader:{log:$,prefix:_},fragmentShader:{log:J,prefix:p}})}s.deleteShader(o),s.deleteShader(w),S=new Qs(s,E),u=Jm(s,E)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let u;this.getAttributes=function(){return u===void 0&&I(this),u};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(E,Hm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zm++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=o,this.fragmentShader=w,this}var ug=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pc(t),e.set(t,n)),n}},Pc=class{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}};function dg(i){return i===Yi||i===Zr||i===Jr}function fg(i,t,e,n,s,r){let a=new Bs,l=new Cc,c=new Set,h=[],f=new Map,g=n.logarithmicDepthBuffer,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function E(S,u,M,B,k,G){let N=B.fog,W=k.geometry,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,rt=t.get(S.envMap||$,J),K=rt&&rt.mapping===Vr?rt.image.height:null,nt=m[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&Kt("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,qt=st!==void 0?st.length:0,Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let Be,ve,Se,X;if(nt){let Pe=hi[nt];Be=Pe.vertexShader,ve=Pe.fragmentShader}else{Be=S.vertexShader,ve=S.fragmentShader;let Pe=l.getVertexShaderStage(S),we=l.getFragmentShaderStage(S);l.update(S,Pe,we),Se=Pe.id,X=we.id}let Q=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),ne=k.isInstancedMesh===!0,Lt=k.isBatchedMesh===!0,ae=!!S.map,qe=!!S.matcap,ce=!!rt,ye=!!S.aoMap,De=!!S.lightMap,he=!!S.bumpMap&&S.wireframe===!1,Te=!!S.normalMap,Je=!!S.displacementMap,xn=!!S.emissiveMap,Re=!!S.metalnessMap,Ye=!!S.roughnessMap,U=S.anisotropy>0,je=S.clearcoat>0,be=S.dispersion>0,A=S.retroreflectivity>0,x=S.iridescence>0,z=S.sheen>0,V=S.transmission>0,q=U&&!!S.anisotropyMap,ft=je&&!!S.clearcoatMap,pt=je&&!!S.clearcoatNormalMap,Z=je&&!!S.clearcoatRoughnessMap,et=x&&!!S.iridescenceMap,_t=x&&!!S.iridescenceThicknessMap,kt=z&&!!S.sheenColorMap,Et=z&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,zt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,ie=V&&!!S.transmissionMap,D=V&&!!S.thicknessMap,yt=!!S.gradientMap,tt=!!S.alphaMap,vt=S.alphaTest>0,Ct=!!S.alphaHash,it=!!S.extensions,Vt=ti;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:ve,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Lt,batchingColor:Lt&&k._colorsTexture!==null,instancing:ne,instancingColor:ne&&k.instanceColor!==null,instancingMorph:ne&&k.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:qe,envMap:ce,envMapMode:ce&&rt.mapping,envMapCubeUVHeight:K,aoMap:ye,lightMap:De,bumpMap:he,normalMap:Te,displacementMap:Je,emissiveMap:xn,normalMapObjectSpace:Te&&S.normalMapType===kh,normalMapTangentSpace:Te&&S.normalMapType===$o,packedNormalMap:Te&&S.normalMapType===$o&&dg(S.normalMap.format),metalnessMap:Re,roughnessMap:Ye,anisotropy:U,anisotropyMap:q,clearcoat:je,clearcoatMap:ft,clearcoatNormalMap:pt,clearcoatRoughnessMap:Z,dispersion:be,retroreflection:A,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:_t,sheen:z,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:Mt,specularColorMap:zt,specularIntensityMap:Zt,transmission:V,transmissionMap:ie,thicknessMap:D,gradientMap:yt,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:vt,alphaHash:Ct,combine:S.combine,mapUv:ae&&v(S.map.channel),aoMapUv:ye&&v(S.aoMap.channel),lightMapUv:De&&v(S.lightMap.channel),bumpMapUv:he&&v(S.bumpMap.channel),normalMapUv:Te&&v(S.normalMap.channel),displacementMapUv:Je&&v(S.displacementMap.channel),emissiveMapUv:xn&&v(S.emissiveMap.channel),metalnessMapUv:Re&&v(S.metalnessMap.channel),roughnessMapUv:Ye&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:ft&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(S.sheenRoughnessMap.channel),specularMapUv:Mt&&v(S.specularMap.channel),specularColorMapUv:zt&&v(S.specularColorMap.channel),specularIntensityMapUv:Zt&&v(S.specularIntensityMap.channel),transmissionMapUv:ie&&v(S.transmissionMap.channel),thicknessMapUv:D&&v(S.thicknessMap.channel),alphaMapUv:tt&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Te||U),vertexNormals:!!W.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(ae||tt),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&Te===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Nt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Gt,numSunLights:u.sun.length,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numSunLightShadows:u.sunShadowMap.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&Me.getTransfer(S.map.colorSpace)===Le,decodeVideoTextureEmissive:xn&&S.emissiveMap.isVideoTexture===!0&&Me.getTransfer(S.emissiveMap.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===Rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:it&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&S.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function _(S){let u=[];if(S.shaderID?u.push(S.shaderID):(u.push(S.customVertexShaderID),u.push(S.customFragmentShaderID)),S.defines!==void 0)for(let M in S.defines)u.push(M),u.push(S.defines[M]);return S.isRawShaderMaterial===!1&&(p(u,S),R(u,S),u.push(i.outputColorSpace)),u.push(S.customProgramCacheKey),u.join()}function p(S,u){S.push(u.precision),S.push(u.outputColorSpace),S.push(u.envMapMode),S.push(u.envMapCubeUVHeight),S.push(u.mapUv),S.push(u.alphaMapUv),S.push(u.lightMapUv),S.push(u.aoMapUv),S.push(u.bumpMapUv),S.push(u.normalMapUv),S.push(u.displacementMapUv),S.push(u.emissiveMapUv),S.push(u.metalnessMapUv),S.push(u.roughnessMapUv),S.push(u.anisotropyMapUv),S.push(u.clearcoatMapUv),S.push(u.clearcoatNormalMapUv),S.push(u.clearcoatRoughnessMapUv),S.push(u.iridescenceMapUv),S.push(u.iridescenceThicknessMapUv),S.push(u.sheenColorMapUv),S.push(u.sheenRoughnessMapUv),S.push(u.specularMapUv),S.push(u.specularColorMapUv),S.push(u.specularIntensityMapUv),S.push(u.transmissionMapUv),S.push(u.thicknessMapUv),S.push(u.combine),S.push(u.fogExp2),S.push(u.sizeAttenuation),S.push(u.morphTargetsCount),S.push(u.morphAttributeCount),S.push(u.numSunLights),S.push(u.numDirLights),S.push(u.numPointLights),S.push(u.numSpotLights),S.push(u.numSpotLightMaps),S.push(u.numHemiLights),S.push(u.numRectAreaLights),S.push(u.numSunLightShadows),S.push(u.numDirLightShadows),S.push(u.numPointLightShadows),S.push(u.numSpotLightShadows),S.push(u.numSpotLightShadowsWithMaps),S.push(u.numLightProbes),S.push(u.shadowMapType),S.push(u.toneMapping),S.push(u.numClippingPlanes),S.push(u.numClipIntersection),S.push(u.depthPacking)}function R(S,u){a.disableAll(),u.instancing&&a.enable(0),u.instancingColor&&a.enable(1),u.instancingMorph&&a.enable(2),u.matcap&&a.enable(3),u.envMap&&a.enable(4),u.normalMapObjectSpace&&a.enable(5),u.normalMapTangentSpace&&a.enable(6),u.clearcoat&&a.enable(7),u.iridescence&&a.enable(8),u.alphaTest&&a.enable(9),u.vertexColors&&a.enable(10),u.vertexAlphas&&a.enable(11),u.vertexUv1s&&a.enable(12),u.vertexUv2s&&a.enable(13),u.vertexUv3s&&a.enable(14),u.vertexTangents&&a.enable(15),u.anisotropy&&a.enable(16),u.alphaHash&&a.enable(17),u.batching&&a.enable(18),u.dispersion&&a.enable(19),u.retroreflection&&a.enable(24),u.batchingColor&&a.enable(20),u.gradientMap&&a.enable(21),u.packedNormalMap&&a.enable(22),u.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),u.fog&&a.enable(0),u.useFog&&a.enable(1),u.flatShading&&a.enable(2),u.logarithmicDepthBuffer&&a.enable(3),u.reversedDepthBuffer&&a.enable(4),u.skinning&&a.enable(5),u.morphTargets&&a.enable(6),u.morphNormals&&a.enable(7),u.morphColors&&a.enable(8),u.premultipliedAlpha&&a.enable(9),u.shadowMapEnabled&&a.enable(10),u.doubleSided&&a.enable(11),u.flipSided&&a.enable(12),u.useDepthPacking&&a.enable(13),u.dithering&&a.enable(14),u.transmission&&a.enable(15),u.sheen&&a.enable(16),u.opaque&&a.enable(17),u.pointsUvs&&a.enable(18),u.decodeVideoTexture&&a.enable(19),u.decodeVideoTextureEmissive&&a.enable(20),u.alphaToCoverage&&a.enable(21),u.numLightProbeGrids>0&&a.enable(22),u.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function L(S){let u=m[S.type],M;if(u){let B=hi[u];M=eu.clone(B.uniforms)}else M=S.uniforms;return M}function T(S,u){let M=f.get(u);return M!==void 0?++M.usedTimes:(M=new hg(i,u,S,s),h.push(M),f.set(u,M)),M}function o(S){if(--S.usedTimes===0){let u=h.indexOf(S);h[u]=h[h.length-1],h.pop(),f.delete(S.cacheKey),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:L,acquireProgram:T,releaseProgram:o,releaseShaderCache:w,programs:h,dispose:I}}function pg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Su(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function l(d,m,v,E,_,p){let R=i[t];return R===void 0?(R={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:_,group:p},i[t]=R):(R.id=d.id,R.object=d,R.geometry=m,R.material=v,R.materialVariant=a(d),R.groupOrder=E,R.renderOrder=d.renderOrder,R.z=_,R.group=p),t++,R}function c(d,m,v,E,_,p,R){R.reversedDepth===!0&&(_=-_);let L=l(d,m,v,E,_,p);v.transmission>0?n.push(L):v.transparent===!0?s.push(L):e.push(L)}function h(d,m,v,E,_,p){let R=l(d,m,v,E,_,p);v.transmission>0?n.unshift(R):v.transparent===!0?s.unshift(R):e.unshift(R)}function f(d,m){e.length>1&&e.sort(d||mg),n.length>1&&n.sort(m||Mu),s.length>1&&s.sort(m||Mu)}function g(){for(let d=t,m=i.length;d<m;d++){let v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:f}}function gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Su,i.set(n,[a])):s>=r.length?(a=new Su,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new ee};break;case"SpotLight":e={position:new O,direction:new O,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yg=0;function vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mg(i){let t=new _g,e=xg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);let s=new O,r=new ze,a=new ze;function l(h){let f=0,g=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,v=0,E=0,_=0,p=0,R=0,L=0,T=0,o=0,w=0,I=0,S=0,u=0,M=0;h.sort(vg);for(let k=0,G=h.length;k<G;k++){let N=h[k],W=N.color,$=N.intensity,J=N.distance,rt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Yi?rt=N.shadow.map.texture:rt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=W.r*$,g+=W.g*$,d+=W.b*$;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],$);M++}else if(N.isSunLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,st=e.get(N);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[v]=st,n.sunShadowMap[v]=rt;let qt=nt.getViewportCount();for(let Gt=0;Gt<qt;Gt++)n.sunShadowMatrix[E+Gt]=nt.getMatrix(Gt),n.sunShadowCascade[E+Gt]=nt._cascadeData[Gt];E+=qt,v++}n.sun[m]=K,m++}else if(N.isDirectionalLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,st=e.get(N);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[_]=st,n.directionalShadowMap[_]=rt,n.directionalShadowMatrix[_]=N.shadow.matrix,o++}n.directional[_]=K,_++}else if(N.isSpotLight){let K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(W).multiplyScalar($),K.distance=J,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[R]=K;let nt=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,nt.updateMatrices(N),N.castShadow&&u++),n.spotLightMatrix[R]=nt.matrix,N.castShadow){let st=e.get(N);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[R]=st,n.spotShadowMap[R]=rt,I++}R++}else if(N.isRectAreaLight){let K=t.get(N);K.color.copy(W).multiplyScalar($),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[L]=K,L++}else if(N.isPointLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let nt=N.shadow,st=e.get(N);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[p]=st,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=K,p++}else if(N.isHemisphereLight){let K=t.get(N);K.skyColor.copy(N.color).multiplyScalar($),K.groundColor.copy(N.groundColor).multiplyScalar($),n.hemi[T]=K,T++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=d;let B=n.hash;(B.sunLength!==m||B.directionalLength!==_||B.pointLength!==p||B.spotLength!==R||B.rectAreaLength!==L||B.hemiLength!==T||B.numSunShadows!==v||B.numDirectionalShadows!==o||B.numPointShadows!==w||B.numSpotShadows!==I||B.numSpotMaps!==S||B.numLightProbes!==M)&&(n.sun.length=m,n.directional.length=_,n.spot.length=R,n.rectArea.length=L,n.point.length=p,n.hemi.length=T,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=o,n.directionalShadowMap.length=o,n.directionalShadowMatrix.length=o,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+S-u,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=M,B.sunLength=m,B.directionalLength=_,B.pointLength=p,B.spotLength=R,B.rectAreaLength=L,B.hemiLength=T,B.numSunShadows=v,B.numDirectionalShadows=o,B.numPointShadows=w,B.numSpotShadows=I,B.numSpotMaps=S,B.numLightProbes=M,n.version=yg++)}function c(h,f){let g=0,d=0,m=0,v=0,E=0,_=0,p=f.matrixWorldInverse;for(let R=0,L=h.length;R<L;R++){let T=h[R];if(T.isSunLight){let o=n.sun[g];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),g++}else if(T.isDirectionalLight){let o=n.directional[d];o.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(s),o.direction.transformDirection(p),d++}else if(T.isSpotLight){let o=n.spot[v];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),o.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(s),o.direction.transformDirection(p),v++}else if(T.isRectAreaLight){let o=n.rectArea[E];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),o.halfWidth.set(T.width*.5,0,0),o.halfHeight.set(0,T.height*.5,0),o.halfWidth.applyMatrix4(a),o.halfHeight.applyMatrix4(a),E++}else if(T.isPointLight){let o=n.point[m];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){let o=n.hemi[_];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),_++}}}return{setup:l,setupView:c,state:n}}function bu(i){let t=new Mg(i),e=[],n=[],s=[];function r(d){g.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function l(d){n.push(d)}function c(d){s.push(d)}function h(){t.setup(e)}function f(d){t.setupView(e,d)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:f,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Sg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new bu(i),t.set(s,[l])):r>=a.length?(l=new bu(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`,Tg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],wg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Eu=new ze,$r=new O,bc=new O;function Ag(i,t,e){let n=new ks,s=new Wt,r=new Wt,a=new We,l=new Ja,c=new Ka,h={},f=e.maxTextureSize,g={[Vi]:Rn,[Rn]:Vi,[Ue]:Ue},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:bg,fragmentShader:Eg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new mn;v.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Xe(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let p=this.type;this.render=function(w,I,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===xh&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let u=i.getRenderTarget(),M=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),k=i.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=p!==this.type;G&&I.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=w.length;N<W;N++){let $=w[N],J=$.shadow;if(J===void 0){Kt("WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let rt=J.getFrameExtents();s.multiply(rt),r.copy(J.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/rt.x),s.x=r.x*rt.x,J.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/rt.y),s.y=r.y*rt.y,J.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=K,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===qs){if($.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Pn(s.x,s.y,{format:Yi,type:ii,minFilter:sn,magFilter:sn,generateMipmaps:!1}),J.map.texture.name=$.name+".shadowMap",J.map.depthTexture=new Fi(s.x,s.y,ni),J.map.depthTexture.name=$.name+".shadowMapDepth",J.map.depthTexture.format=ai,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=fn,J.map.depthTexture.magFilter=fn}else $.isPointLight?(J.map=new il(s.x),J.map.depthTexture=new qa(s.x,ei)):(J.map=new Pn(s.x,s.y),J.map.depthTexture=new Fi(s.x,s.y,ei)),J.map.depthTexture.name=$.name+".shadowMap",J.map.depthTexture.format=ai,this.type===as?(J.map.depthTexture.compareFunction=K?Qo:jo,J.map.depthTexture.minFilter=sn,J.map.depthTexture.magFilter=sn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=fn,J.map.depthTexture.magFilter=fn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let nt=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();$.isPointLight!==!0&&J.updateMatrices($,S);for(let st=0;st<nt;st++){let qt=J.getCamera(st);if($.isPointLight){let Gt=J.camera,Be=J.matrix,ve=$.distance||Gt.far;ve!==Gt.far&&(Gt.far=ve,Gt.updateProjectionMatrix()),$r.setFromMatrixPosition($.matrixWorld),Gt.position.copy($r),bc.copy(Gt.position),bc.add(Tg[st]),Gt.up.copy(wg[st]),Gt.lookAt(bc),Gt.updateMatrixWorld(),Be.makeTranslation(-$r.x,-$r.y,-$r.z),Eu.multiplyMatrices(Gt.projectionMatrix,Gt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Eu,Gt.coordinateSystem,Gt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,st),i.clear();else{st===0&&(i.setRenderTarget(J.map),i.clear());let Gt=J.getViewport(st);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),k.viewport(a)}n=J.getFrustum(st),T(I,S,qt,$,this.type)}J.isPointLightShadow!==!0&&this.type===qs&&R(J,S),J.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(u,M,B)};function R(w,I){let S=t.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Pn(s.x,s.y,{format:Yi,type:ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,S,d,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,S,m,E,null)}function L(w,I,S,u){let M=null,B=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)M=B;else if(M=S.isPointLight===!0?c:l,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=M.uuid,G=I.uuid,N=h[k];N===void 0&&(N={},h[k]=N);let W=N[G];W===void 0&&(W=M.clone(),N[G]=W,I.addEventListener("dispose",o)),M=W}if(M.visible=I.visible,M.wireframe=I.wireframe,u===qs?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:g[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=S}return M}function T(w,I,S,u,M){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===qs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let G=t.update(w),N=w.material;if(Array.isArray(N)){let W=G.groups;for(let $=0,J=W.length;$<J;$++){let rt=W[$],K=N[rt.materialIndex];if(K&&K.visible){let nt=L(w,K,u,M);w.onBeforeShadow(i,w,I,S,G,nt,rt),i.renderBufferDirect(S,null,G,nt,w,rt),w.onAfterShadow(i,w,I,S,G,nt,rt)}}}else if(N.visible){let W=L(w,N,u,M);w.onBeforeShadow(i,w,I,S,G,W,null),i.renderBufferDirect(S,null,G,W,w,null),w.onAfterShadow(i,w,I,S,G,W,null)}}let k=w.children;for(let G=0,N=k.length;G<N;G++)T(k[G],I,S,u,M)}function o(w){w.target.removeEventListener("dispose",o);for(let S in h){let u=h[S],M=w.target.uuid;M in u&&(u[M].dispose(),delete u[M])}}}function Rg(i,t){function e(){let D=!1,yt=new We,tt=null,vt=new We(0,0,0,0);return{setMask:function(Ct){tt!==Ct&&!D&&(i.colorMask(Ct,Ct,Ct,Ct),tt=Ct)},setLocked:function(Ct){D=Ct},setClear:function(Ct,it,Vt,Bt,Pe){Pe===!0&&(Ct*=Bt,it*=Bt,Vt*=Bt),yt.set(Ct,it,Vt,Bt),vt.equals(yt)===!1&&(i.clearColor(Ct,it,Vt,Bt),vt.copy(yt))},reset:function(){D=!1,tt=null,vt.set(-1,0,0,0)}}}function n(){let D=!1,yt=!1,tt=null,vt=null,Ct=null;return{setReversed:function(it){if(yt!==it){let Vt=t.get("EXT_clip_control");it?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),yt=it;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return yt},setTest:function(it){it?Q(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(it){tt!==it&&!D&&(i.depthMask(it),tt=it)},setFunc:function(it){if(yt&&(it=jh[it]),vt!==it){switch(it){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=it}},setLocked:function(it){D=it},setClear:function(it){Ct!==it&&(Ct=it,yt&&(it=1-it),i.clearDepth(it))},reset:function(){D=!1,tt=null,vt=null,Ct=null,yt=!1}}}function s(){let D=!1,yt=null,tt=null,vt=null,Ct=null,it=null,Vt=null,Bt=null,Pe=null;return{setTest:function(we){D||(we?Q(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(we){yt!==we&&!D&&(i.stencilMask(we),yt=we)},setFunc:function(we,Ce,Dn){(tt!==we||vt!==Ce||Ct!==Dn)&&(i.stencilFunc(we,Ce,Dn),tt=we,vt=Ce,Ct=Dn)},setOp:function(we,Ce,Dn){(it!==we||Vt!==Ce||Bt!==Dn)&&(i.stencilOp(we,Ce,Dn),it=we,Vt=Ce,Bt=Dn)},setLocked:function(we){D=we},setClear:function(we){Pe!==we&&(i.clearStencil(we),Pe=we)},reset:function(){D=!1,yt=null,tt=null,vt=null,Ct=null,it=null,Vt=null,Bt=null,Pe=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,f={},g={},d={},m=new WeakMap,v=[],E=null,_=!1,p=null,R=null,L=null,T=null,o=null,w=null,I=null,S=new ee(0,0,0),u=0,M=!1,B=null,k=null,G=null,N=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,rt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=rt>=2);let nt=null,st={},qt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Be=new We().fromArray(qt),ve=new We().fromArray(Gt);function Se(D,yt,tt,vt){let Ct=new Uint8Array(4),it=i.createTexture();i.bindTexture(D,it),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<tt;Vt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(yt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return it}let X={};X[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ds),he(!1),Te(Wl),Q(i.CULL_FACE),ye(li);function Q(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Nt(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function ne(D,yt){return d[D]!==yt?(i.bindFramebuffer(D,yt),d[D]=yt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=yt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function Lt(D,yt){let tt=v,vt=!1;if(D){tt=m.get(yt),tt===void 0&&(tt=[],m.set(yt,tt));let Ct=D.textures;if(tt.length!==Ct.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Vt=Ct.length;it<Vt;it++)tt[it]=i.COLOR_ATTACHMENT0+it;tt.length=Ct.length,vt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(tt)}function ae(D){return E!==D?(i.useProgram(D),E=D,!0):!1}let qe={[os]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};qe[Sh]=i.MIN,qe[bh]=i.MAX;let ce={[Eh]:i.ZERO,[Th]:i.ONE,[wh]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(D,yt,tt,vt,Ct,it,Vt,Bt,Pe,we){if(D===li){_===!0&&(Nt(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),D!==yh){if(D!==p||we!==M){if((R!==os||o!==os)&&(i.blendEquation(i.FUNC_ADD),R=os,o=os),we)switch(D){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zr:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",D);break}else switch(D){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",D);break}L=null,T=null,w=null,I=null,S.set(0,0,0),u=0,p=D,M=we}return}Ct=Ct||yt,it=it||tt,Vt=Vt||vt,(yt!==R||Ct!==o)&&(i.blendEquationSeparate(qe[yt],qe[Ct]),R=yt,o=Ct),(tt!==L||vt!==T||it!==w||Vt!==I)&&(i.blendFuncSeparate(ce[tt],ce[vt],ce[it],ce[Vt]),L=tt,T=vt,w=it,I=Vt),(Bt.equals(S)===!1||Pe!==u)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Pe),S.copy(Bt),u=Pe),p=D,M=!1}function De(D,yt){D.side===Ue?Nt(i.CULL_FACE):Q(i.CULL_FACE);let tt=D.side===Rn;yt&&(tt=!tt),he(tt),D.blending===Zs&&D.transparent===!1?ye(li):ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let vt=D.stencilWrite;l.setTest(vt),vt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function Te(D){D!==gh?(Q(i.CULL_FACE),D!==k&&(D===Wl?i.cullFace(i.BACK):D===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),k=D}function Je(D){D!==G&&(J&&i.lineWidth(D),G=D)}function xn(D,yt,tt){D?(Q(i.POLYGON_OFFSET_FILL),(N!==yt||W!==tt)&&(N=yt,W=tt,a.getReversed()&&(yt=-yt),i.polygonOffset(yt,tt))):Nt(i.POLYGON_OFFSET_FILL)}function Re(D){D?Q(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function Ye(D){D===void 0&&(D=i.TEXTURE0+$-1),nt!==D&&(i.activeTexture(D),nt=D)}function U(D,yt,tt){tt===void 0&&(nt===null?tt=i.TEXTURE0+$-1:tt=nt);let vt=st[tt];vt===void 0&&(vt={type:void 0,texture:void 0},st[tt]=vt),(vt.type!==D||vt.texture!==yt)&&(nt!==tt&&(i.activeTexture(tt),nt=tt),i.bindTexture(D,yt||X[D]),vt.type=D,vt.texture=yt)}function je(){let D=st[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(D){$t("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){$t("WebGLState:",D)}}function x(){try{i.texSubImage2D(...arguments)}catch(D){$t("WebGLState:",D)}}function z(){try{i.texSubImage3D(...arguments)}catch(D){$t("WebGLState:",D)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(D){$t("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){$t("WebGLState:",D)}}function ft(){try{i.texStorage2D(...arguments)}catch(D){$t("WebGLState:",D)}}function pt(){try{i.texStorage3D(...arguments)}catch(D){$t("WebGLState:",D)}}function Z(){try{i.texImage2D(...arguments)}catch(D){$t("WebGLState:",D)}}function et(){try{i.texImage3D(...arguments)}catch(D){$t("WebGLState:",D)}}function _t(D){return g[D]!==void 0?g[D]:i.getParameter(D)}function kt(D,yt){g[D]!==yt&&(i.pixelStorei(D,yt),g[D]=yt)}function Et(D){Be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function Mt(D){ve.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function zt(D,yt){let tt=h.get(yt);tt===void 0&&(tt=new WeakMap,h.set(yt,tt));let vt=tt.get(D);vt===void 0&&(vt=i.getUniformBlockIndex(yt,D.name),tt.set(D,vt))}function Zt(D,yt){let vt=h.get(yt).get(D);c.get(yt)!==vt&&(i.uniformBlockBinding(yt,vt,D.__bindingPointIndex),c.set(yt,vt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},nt=null,st={},d={},m=new WeakMap,v=[],E=null,_=!1,p=null,R=null,L=null,T=null,o=null,w=null,I=null,S=new ee(0,0,0),u=0,M=!1,B=null,k=null,G=null,N=null,W=null,Be.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Q,disable:Nt,bindFramebuffer:ne,drawBuffers:Lt,useProgram:ae,setBlending:ye,setMaterial:De,setFlipSided:he,setCullFace:Te,setLineWidth:Je,setPolygonOffset:xn,setScissorTest:Re,activeTexture:Ye,bindTexture:U,unbindTexture:je,compressedTexImage2D:be,compressedTexImage3D:A,texImage2D:Z,texImage3D:et,pixelStorei:kt,getParameter:_t,updateUBOMapping:zt,uniformBlockBinding:Zt,texStorage2D:ft,texStorage3D:pt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:Et,viewport:Mt,reset:ie}}function Cg(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,f=new WeakMap,g=new Set,d,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return v?new OffscreenCanvas(A,x):yr("canvas")}function _(A,x,z){let V=1,q=be(A);if((q.width>z||q.height>z)&&(V=z/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ft=Math.floor(V*q.width),pt=Math.floor(V*q.height);d===void 0&&(d=E(ft,pt));let Z=x?E(ft,pt):d;return Z.width=ft,Z.height=pt,Z.getContext("2d").drawImage(A,0,0,ft,pt),Kt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ft+"x"+pt+")."),Z}else return"data"in A&&Kt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function R(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,z,V,q,ft=!1){if(A!==null){if(i[A]!==void 0)return i[A];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;V&&(pt=t.get("EXT_texture_norm16"),pt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.R16_EXT),z===i.SHORT&&pt&&(Z=pt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RG16_EXT),z===i.SHORT&&pt&&(Z=pt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGB16_EXT),z===i.SHORT&&pt&&(Z=pt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let et=ft?xr:Me.getTransfer(q);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=et===Le?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGBA16_EXT),z===i.SHORT&&pt&&(Z=pt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function o(A,x){let z;return A?x===null||x===ei||x===Ks?z=i.DEPTH24_STENCIL8:x===ni?z=i.DEPTH32F_STENCIL8:x===Js&&(z=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===Ks?z=i.DEPTH_COMPONENT24:x===ni?z=i.DEPTH_COMPONENT32F:x===Js&&(z=i.DEPTH_COMPONENT16),z}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function I(A){let x=A.target;x.removeEventListener("dispose",I),u(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&g.delete(x)}function S(A){let x=A.target;x.removeEventListener("dispose",S),B(x)}function u(A){let x=n.get(A);if(x.__webglInit===void 0)return;let z=A.source,V=m.get(z);if(V){let q=V[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&M(A),Object.keys(V).length===0&&m.delete(z)}n.remove(A)}function M(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let z=A.source,V=m.get(z);delete V[x.__cacheKey],a.memory.textures--}function B(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let q=0;q<x.__webglFramebuffer[V].length;q++)i.deleteFramebuffer(x.__webglFramebuffer[V][q]);else i.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)i.deleteFramebuffer(x.__webglFramebuffer[V]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let V=0,q=z.length;V<q;V++){let ft=n.get(z[V]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(z[V])}n.remove(A)}let k=0;function G(){k=0}function N(){return k}function W(A){k=A}function $(){let A=k;return A>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function rt(A,x){let z=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let V=A.image;if(V===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function K(A,x){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Nt(z,A,x);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function nt(A,x){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Nt(z,A,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function st(A,x){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){ne(z,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let qt={[Fa]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},Gt={[fn]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Be={[Gh]:i.NEVER,[Zh]:i.ALWAYS,[Wh]:i.LESS,[jo]:i.LEQUAL,[Xh]:i.EQUAL,[Qo]:i.GEQUAL,[Yh]:i.GREATER,[qh]:i.NOTEQUAL};function ve(A,x){if(x.type===ni&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===po||x.magFilter===Gr||x.magFilter===Wi||x.minFilter===sn||x.minFilter===po||x.minFilter===Gr||x.minFilter===Wi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,qt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,qt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,qt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Gt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Gt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Be[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==Gr&&x.minFilter!==Wi||x.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Se(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",I));let V=x.source,q=m.get(V);q===void 0&&(q={},m.set(V,q));let ft=J(x);if(ft!==A.__cacheKey){q[ft]===void 0&&(q[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),q[ft].usedTimes++;let pt=q[A.__cacheKey];pt!==void 0&&(q[A.__cacheKey].usedTimes--,pt.usedTimes===0&&M(x)),A.__cacheKey=ft,A.__webglTexture=q[ft].texture}return z}function X(A,x,z){return Math.floor(Math.floor(A/z)/x)}function Q(A,x,z,V){let ft=A.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,V,x.data);else{ft.sort((kt,Et)=>kt.start-Et.start);let pt=0;for(let kt=1;kt<ft.length;kt++){let Et=ft[pt],Mt=ft[kt],zt=Et.start+Et.count,Zt=X(Mt.start,x.width,4),ie=X(Et.start,x.width,4);Mt.start<=zt+1&&Zt===ie&&X(Mt.start+Mt.count-1,x.width,4)===Zt?Et.count=Math.max(Et.count,Mt.start+Mt.count-Et.start):(++pt,ft[pt]=Mt)}ft.length=pt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let kt=0,Et=ft.length;kt<Et;kt++){let Mt=ft[kt],zt=Math.floor(Mt.start/4),Zt=Math.ceil(Mt.count/4),ie=zt%x.width,D=Math.floor(zt/x.width),yt=Zt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,ie,D,yt,tt,z,V,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Nt(A,x,z){let V=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=i.TEXTURE_3D);let q=Se(A,x),ft=x.source;e.bindTexture(V,A.__webglTexture,i.TEXTURE0+z);let pt=n.get(ft);if(ft.version!==pt.__version||q===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=Me.getPrimaries(Me.workingColorSpace),vt=x.colorSpace===Ti?null:Me.getPrimaries(x.colorSpace),Ct=x.colorSpace===Ti||tt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=_(x.image,!1,s.maxTextureSize);et=je(x,et);let _t=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),Et=T(x.internalFormat,_t,kt,x.normalized,x.colorSpace,x.isVideoTexture);ve(V,x);let Mt,zt=x.mipmaps,Zt=x.isVideoTexture!==!0,ie=pt.__version===void 0||q===!0,D=ft.dataReady,yt=w(x,et);if(x.isDepthTexture)Et=o(x.format===Xi,x.type),ie&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,_t,kt,null));else if(x.isDataTexture)if(zt.length>0){Zt&&ie&&e.texStorage2D(i.TEXTURE_2D,yt,Et,zt[0].width,zt[0].height);for(let tt=0,vt=zt.length;tt<vt;tt++)Mt=zt[tt],Zt?D&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Mt.width,Mt.height,_t,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,tt,Et,Mt.width,Mt.height,0,_t,kt,Mt.data);x.generateMipmaps=!1}else Zt?(ie&&e.texStorage2D(i.TEXTURE_2D,yt,Et,et.width,et.height),D&&Q(x,et,_t,kt)):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,_t,kt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Et,zt[0].width,zt[0].height,et.depth);for(let tt=0,vt=zt.length;tt<vt;tt++)if(Mt=zt[tt],x.format!==Yn)if(_t!==null)if(Zt){if(D)if(x.layerUpdates.size>0){let Ct=_c(Mt.width,Mt.height,x.format,x.type);for(let it of x.layerUpdates){let Vt=Mt.data.subarray(it*Ct/Mt.data.BYTES_PER_ELEMENT,(it+1)*Ct/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,it,Mt.width,Mt.height,1,_t,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Mt.width,Mt.height,et.depth,_t,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Et,Mt.width,Mt.height,et.depth,0,Mt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Mt.width,Mt.height,et.depth,_t,kt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Et,Mt.width,Mt.height,et.depth,0,_t,kt,Mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Zt&&ie&&e.texStorage2D(i.TEXTURE_2D,yt,Et,zt[0].width,zt[0].height);for(let tt=0,vt=zt.length;tt<vt;tt++)Mt=zt[tt],x.format!==Yn?_t!==null?Zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Et,Mt.width,Mt.height,0,Mt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?D&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Mt.width,Mt.height,_t,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,tt,Et,Mt.width,Mt.height,0,_t,kt,Mt.data)}else if(x.isDataArrayTexture)if(Zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Et,et.width,et.height,et.depth),D)if(x.layerUpdates.size>0){let tt=_c(et.width,et.height,x.format,x.type);for(let vt of x.layerUpdates){let Ct=et.data.subarray(vt*tt/et.data.BYTES_PER_ELEMENT,(vt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,et.width,et.height,1,_t,kt,Ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,kt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,_t,kt,et.data);else if(x.isData3DTexture)Zt?(ie&&e.texStorage3D(i.TEXTURE_3D,yt,Et,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,kt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,_t,kt,et.data);else if(x.isFramebufferTexture){if(ie)if(Zt)e.texStorage2D(i.TEXTURE_2D,yt,Et,et.width,et.height);else{let tt=et.width,vt=et.height;for(let Ct=0;Ct<yt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Et,tt,vt,0,_t,kt,null),tt>>=1,vt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),g.add(x),tt.onpaint=vt=>{let Ct=vt.changedElements;for(let it of g)Ct.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let Ct=i.RGBA,it=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,it,Vt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Zt&&ie){let tt=be(zt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Et,tt.width,tt.height)}for(let tt=0,vt=zt.length;tt<vt;tt++)Mt=zt[tt],Zt?D&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,_t,kt,Mt):e.texImage2D(i.TEXTURE_2D,tt,Et,_t,kt,Mt);x.generateMipmaps=!1}else if(Zt){if(ie){let tt=be(et);e.texStorage2D(i.TEXTURE_2D,yt,Et,tt.width,tt.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,kt,et)}else e.texImage2D(i.TEXTURE_2D,0,Et,_t,kt,et);p(x)&&R(V),pt.__version=ft.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ne(A,x,z){if(x.image.length!==6)return;let V=Se(A,x),q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let ft=n.get(q);if(q.version!==ft.__version||V===!0){e.activeTexture(i.TEXTURE0+z);let pt=Me.getPrimaries(Me.workingColorSpace),Z=x.colorSpace===Ti?null:Me.getPrimaries(x.colorSpace),et=x.colorSpace===Ti||pt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let _t=x.isCompressedTexture||x.image[0].isCompressedTexture,kt=x.image[0]&&x.image[0].isDataTexture,Et=[];for(let it=0;it<6;it++)!_t&&!kt?Et[it]=_(x.image[it],!0,s.maxCubemapSize):Et[it]=kt?x.image[it].image:x.image[it],Et[it]=je(x,Et[it]);let Mt=Et[0],zt=r.convert(x.format,x.colorSpace),Zt=r.convert(x.type),ie=T(x.internalFormat,zt,Zt,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,yt=ft.__version===void 0||V===!0,tt=q.dataReady,vt=w(x,Mt);ve(i.TEXTURE_CUBE_MAP,x);let Ct;if(_t){D&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,Mt.width,Mt.height);for(let it=0;it<6;it++){Ct=Et[it].mipmaps;for(let Vt=0;Vt<Ct.length;Vt++){let Bt=Ct[Vt];x.format!==Yn?zt!==null?D?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt,0,0,Bt.width,Bt.height,zt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt,ie,Bt.width,Bt.height,0,Bt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt,0,0,Bt.width,Bt.height,zt,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt,ie,Bt.width,Bt.height,0,zt,Zt,Bt.data)}}}else{if(Ct=x.mipmaps,D&&yt){Ct.length>0&&vt++;let it=be(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,it.width,it.height)}for(let it=0;it<6;it++)if(kt){D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Et[it].width,Et[it].height,zt,Zt,Et[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ie,Et[it].width,Et[it].height,0,zt,Zt,Et[it].data);for(let Vt=0;Vt<Ct.length;Vt++){let Pe=Ct[Vt].image[it].image;D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt+1,0,0,Pe.width,Pe.height,zt,Zt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt+1,ie,Pe.width,Pe.height,0,zt,Zt,Pe.data)}}else{D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,zt,Zt,Et[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ie,zt,Zt,Et[it]);for(let Vt=0;Vt<Ct.length;Vt++){let Bt=Ct[Vt];D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt+1,0,0,zt,Zt,Bt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt+1,ie,zt,Zt,Bt.image[it])}}}p(x)&&R(i.TEXTURE_CUBE_MAP),ft.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Lt(A,x,z,V,q,ft){let pt=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),et=T(z.internalFormat,pt,Z,z.normalized,z.colorSpace),_t=n.get(x),kt=n.get(z);if(kt.__renderTarget=x,!_t.__hasExternalTextures){let Et=Math.max(1,x.width>>ft),Mt=Math.max(1,x.height>>ft);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,ft,et,Et,Mt,x.depth,0,pt,Z,null):e.texImage2D(q,ft,et,Et,Mt,0,pt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ye(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,q,kt.__webglTexture,0,Re(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,q,kt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let V=x.depthTexture,q=V&&V.isDepthTexture?V.type:null,ft=o(x.stencilBuffer,q),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(x),ft,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,A)}else{let V=x.textures;for(let q=0;q<V.length;q++){let ft=V[q],pt=r.convert(ft.format,ft.colorSpace),Z=r.convert(ft.type),et=T(ft.internalFormat,pt,Z,ft.normalized,ft.colorSpace);Ye(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(x),et,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(A,x,z){let V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,x.depthTexture);let _t=r.convert(x.depthTexture.format),kt=r.convert(x.depthTexture.type),Et;x.depthTexture.format===ai?Et=i.DEPTH_COMPONENT24:x.depthTexture.format===Xi&&(Et=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Et,x.width,x.height,0,_t,kt,null)}}else rt(x.depthTexture,0);let ft=q.__webglTexture,pt=Re(x),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,et=x.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ai)Ye(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Z,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,et,Z,ft,0);else if(x.depthTexture.format===Xi)Ye(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Z,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,et,Z,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(A){let x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)qe(x.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?qe(x.__webglFramebuffer[0],A,0):qe(x.__webglFramebuffer,A,0)}else if(z){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=i.createRenderbuffer(),ae(x.__webglDepthbuffer[V],A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ft)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ae(x.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(A,x,z){let V=n.get(A);x!==void 0&&Lt(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ce(A)}function De(A){let x=A.texture,z=n.get(A),V=n.get(x);A.addEventListener("dispose",S);let q=A.textures,ft=A.isWebGLCubeRenderTarget===!0,pt=q.length>1;if(pt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,a.memory.textures++),ft){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let et=0;et<x.mipmaps.length;et++)z.__webglFramebuffer[Z][et]=i.createFramebuffer()}else z.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)z.__webglFramebuffer[Z]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let Z=0,et=q.length;Z<et;Z++){let _t=n.get(q[Z]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ye(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){let et=q[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let _t=r.convert(et.format,et.colorSpace),kt=r.convert(et.type),Et=T(et.internalFormat,_t,kt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),Mt=Re(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ve(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Lt(z.__webglFramebuffer[Z][et],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et);else Lt(z.__webglFramebuffer[Z],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(x)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Z=0,et=q.length;Z<et;Z++){let _t=q[Z],kt=n.get(_t),Et=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,kt.__webglTexture),ve(Et,_t),Lt(z.__webglFramebuffer,A,_t,i.COLOR_ATTACHMENT0+Z,Et,0),p(_t)&&R(Et)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),ve(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Lt(z.__webglFramebuffer[et],A,x,i.COLOR_ATTACHMENT0,Z,et);else Lt(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Z,0);p(x)&&R(Z),e.unbindTexture()}A.depthBuffer&&ce(A)}function he(A){let x=A.textures;for(let z=0,V=x.length;z<V;z++){let q=x[z];if(p(q)){let ft=L(A),pt=n.get(q).__webglTexture;e.bindTexture(ft,pt),R(ft),e.unbindTexture()}}}let Te=[],Je=[];function xn(A){if(A.samples>0){if(Ye(A)===!1){let x=A.textures,z=A.width,V=A.height,q=i.COLOR_BUFFER_BIT,ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),Z=x.length>1;if(Z)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);let kt=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,z,V,0,0,z,V,q,i.NEAREST),c===!0&&(Te.length=0,Je.length=0,Te.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Te.push(ft),Je.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);let kt=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Re(A){return Math.min(s.maxSamples,A.samples)}function Ye(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(A){let x=a.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function je(A,x){let z=A.colorSpace,V=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==_r&&z!==Ti&&(Me.getTransfer(z)===Le?(V!==Yn||q!==In)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",z)),x}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=W,this.setTexture2D=rt,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=ye,this.setupRenderTarget=De,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pg(i,t){function e(n,s=Ti){let r,a=Me.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ic)return i.BYTE;if(n===sc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===oc)return i.ALPHA;if(n===lc)return i.RGB;if(n===Yn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===Yr||n===qr)if(a===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===bo||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Ao||n===Ro||n===Co||n===Zr||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===wo)return a===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ro)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Io||n===Lo||n===Do||n===No||n===Fo||n===Uo||n===Oo||n===Bo||n===Ho||n===zo||n===ko||n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===Yo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Jo||n===Jr||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Pr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:Ig,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,f=null,g=null,d=null,m=null,v=null,E=typeof XRWebGLBinding<"u",_=new Ic,p={},R=e.getContextAttributes(),L=null,T=null,o=[],w=[],I=new Wt,S=null,u=null,M=new bn;M.viewport=new We;let B=new bn;B.viewport=new We;let k=[M,B],G=new co,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=o[X];return Q===void 0&&(Q=new Hs,o[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=o[X];return Q===void 0&&(Q=new Hs,o[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=o[X];return Q===void 0&&(Q=new Hs,o[X]=Q),Q.getHandSpace()};function $(X){let Q=w.indexOf(X.inputSource);if(Q===-1)return;let Nt=o[Q];Nt!==void 0&&(Nt.update(X.inputSource,X.frame,h||a),Nt.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",rt);for(let X=0;X<o.length;X++){let Q=w[X];Q!==null&&(w[X]=null,o[X].disconnect(Q))}N=null,W=null,_.reset();for(let X in p)delete p[X];if(t.setRenderTarget(L),m=null,d=null,g=null,s=null,T=null,Se.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(I.width,I.height,!1),u!==null){let X=u.camera;X.fov=u.fov,X.zoom=u.zoom,X.updateProjectionMatrix(),u=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",rt),R.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,ne=null,Lt=null;R.depth&&(Lt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=R.stencil?Xi:ai,ne=R.stencil?Ks:ei);let ae={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Pn(d.textureWidth,d.textureHeight,{format:Yn,type:In,depthTexture:new Fi(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Nt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Pn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(X){for(let Q=0;Q<X.removed.length;Q++){let Nt=X.removed[Q],ne=w.indexOf(Nt);ne>=0&&(w[ne]=null,o[ne].disconnect(Nt))}for(let Q=0;Q<X.added.length;Q++){let Nt=X.added[Q],ne=w.indexOf(Nt);if(ne===-1){for(let ae=0;ae<o.length;ae++)if(ae>=w.length){w.push(Nt),ne=ae;break}else if(w[ae]===null){w[ae]=Nt,ne=ae;break}if(ne===-1)break}let Lt=o[ne];Lt&&Lt.connect(Nt)}}let K=new O,nt=new O;function st(X,Q,Nt){K.setFromMatrixPosition(Q.matrixWorld),nt.setFromMatrixPosition(Nt.matrixWorld);let ne=K.distanceTo(nt),Lt=Q.projectionMatrix.elements,ae=Nt.projectionMatrix.elements,qe=Lt[14]/(Lt[10]-1),ce=Lt[14]/(Lt[10]+1),ye=(Lt[9]+1)/Lt[5],De=(Lt[9]-1)/Lt[5],he=(Lt[8]-1)/Lt[0],Te=(ae[8]+1)/ae[0],Je=qe*he,xn=qe*Te,Re=ne/(-he+Te),Ye=Re*-he;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ye),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Lt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let U=qe+Re,je=ce+Re,be=Je-Ye,A=xn+(ne-Ye),x=ye*ce/je*U,z=De*ce/je*U;X.projectionMatrix.makePerspective(be,A,x,z,U,je),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function qt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,Nt=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(Nt=_.depthFar)),G.near=B.near=M.near=Q,G.far=B.far=M.far=Nt,(N!==G.near||W!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,W=G.far),G.layers.mask=X.layers.mask|6,M.layers.mask=G.layers.mask&-5,B.layers.mask=G.layers.mask&-3;let ne=X.parent,Lt=G.cameras;qt(G,ne);for(let ae=0;ae<Lt.length;ae++)qt(Lt[ae],ne);Lt.length===2?st(G,M,B):G.projectionMatrix.copy(M.projectionMatrix),u===null&&X.isPerspectiveCamera&&(u={camera:X,fov:X.fov,zoom:X.zoom}),Gt(X,G,ne)};function Gt(X,Q,Nt){Nt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(Nt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Us*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(X){return p[X]};let Be=null;function ve(X,Q){if(f=Q.getViewerPose(h||a),v=Q,f!==null){let Nt=f.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let ne=!1;Nt.length!==G.cameras.length&&(G.cameras.length=0,ne=!0);for(let ce=0;ce<Nt.length;ce++){let ye=Nt[ce],De=null;if(m!==null)De=m.getViewport(ye);else{let Te=g.getViewSubImage(d,ye);De=Te.viewport,ce===0&&(t.setRenderTargetTextures(T,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(T))}let he=k[ce];he===void 0&&(he=new bn,he.layers.enable(ce),he.viewport=new We,k[ce]=he),he.matrix.fromArray(ye.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ye.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(De.x,De.y,De.width,De.height),ce===0&&(G.matrix.copy(he.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ne===!0&&G.cameras.push(he)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let ce=g.getDepthInformation(Nt[0]);ce&&ce.isValid&&ce.texture&&_.init(ce,s.renderState)}if(Lt&&Lt.includes("camera-access")&&E){t.state.unbindTexture(),g=n.getBinding();for(let ce=0;ce<Nt.length;ce++){let ye=Nt[ce].camera;if(ye){let De=p[ye];De||(De=new Pr,p[ye]=De);let he=g.getCameraImage(ye);De.sourceTexture=he}}}}for(let Nt=0;Nt<o.length;Nt++){let ne=w[Nt],Lt=o[Nt];ne!==null&&Lt!==void 0&&Lt.update(ne,Q,h||a)}Be&&Be(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}let Se=new Tu;Se.setAnimationLoop(ve),this.setAnimationLoop=function(X){Be=X},this.dispose=function(){}}},Dg=new ze,Iu=new re;Iu.set(-1,0,0,0,1,0,0,0,1);function Ng(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,pc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,R,L,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(_,p):p.isMeshLambertMaterial?(r(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(_,p),g(_,p)):p.isMeshPhongMaterial?(r(_,p),f(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(_,p),d(_,p),p.isMeshPhysicalMaterial&&m(_,p,T)):p.isMeshMatcapMaterial?(r(_,p),v(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),E(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,R,L):p.isSpriteMaterial?h(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Rn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Rn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let R=t.get(p),L=R.envMap,T=R.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Iu),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,R,L){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*R,_.scale.value=L*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function g(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,R){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.retroreflectivity>0&&(_.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function E(_,p){let R=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,o){let w=o.program;n.uniformBlockBinding(T,w)}function h(T,o){let w=s[T.id];w===void 0&&(_(T),w=f(T),s[T.id]=w,T.addEventListener("dispose",R));let I=o.program;n.updateUBOMapping(T,I);let S=t.render.frame;r[T.id]!==S&&(d(T),r[T.id]=S)}function f(T){let o=g();T.__bindingPointIndex=o;let w=i.createBuffer(),I=T.__size,S=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,o,w),w}function g(){for(let T=0;T<l;T++)if(a.indexOf(T)===-1)return a.push(T),T;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let o=s[T.id],w=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,o);for(let S=0,u=w.length;S<u;S++){let M=w[S];if(Array.isArray(M))for(let B=0,k=M.length;B<k;B++)m(M[B],S,B,I);else m(M,S,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,o,w,I){if(E(T,o,w,I)===!0){let S=T.__offset,u=T.value;if(Array.isArray(u)){let M=0;for(let B=0;B<u.length;B++){let k=u[B],G=p(k);v(k,T.__data,M),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(M+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(u,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,T.__data)}}function v(T,o,w){typeof T=="number"||typeof T=="boolean"?o[0]=T:T.isMatrix3?(o[0]=T.elements[0],o[1]=T.elements[1],o[2]=T.elements[2],o[3]=0,o[4]=T.elements[3],o[5]=T.elements[4],o[6]=T.elements[5],o[7]=0,o[8]=T.elements[6],o[9]=T.elements[7],o[10]=T.elements[8],o[11]=0):ArrayBuffer.isView(T)?o.set(new T.constructor(T.buffer,T.byteOffset,o.length)):T.toArray(o,w)}function E(T,o,w,I){let S=T.value,u=o+"_"+w;if(I[u]===void 0)return typeof S=="number"||typeof S=="boolean"?I[u]=S:ArrayBuffer.isView(S)?I[u]=S.slice():I[u]=S.clone(),!0;{let M=I[u];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return I[u]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(M.equals(S)===!1)return M.copy(S),!0}}return!1}function _(T){let o=T.uniforms,w=0,I=16;for(let u=0,M=o.length;u<M;u++){let B=Array.isArray(o[u])?o[u]:[o[u]];for(let k=0,G=B.length;k<G;k++){let N=B[k],W=Array.isArray(N.value)?N.value:[N.value];for(let $=0,J=W.length;$<J;$++){let rt=W[$],K=p(rt),nt=w%I,st=nt%K.boundary,qt=nt+st;w+=st,qt!==0&&I-qt<K.storage&&(w+=I-qt),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=K.storage}}}let S=w%I;return S>0&&(w+=I-S),T.__size=w,T.__cache={},this}function p(T){let o={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(o.boundary=4,o.storage=4):T.isVector2?(o.boundary=8,o.storage=8):T.isVector3||T.isColor?(o.boundary=16,o.storage=12):T.isVector4?(o.boundary=16,o.storage=16):T.isMatrix3?(o.boundary=48,o.storage=48):T.isMatrix4?(o.boundary=64,o.storage=64):T.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(o.boundary=16,o.storage=T.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",T),o}function R(T){let o=T.target;o.removeEventListener("dispose",R);let w=a.indexOf(o.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[o.id]),delete s[o.id],delete r[o.id]}function L(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:h,dispose:L}}var Ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function Og(){return ci===null&&(ci=new Va(Ug,16,16,Yi,ii),ci.name="DFG_LUT",ci.minFilter=sn,ci.magFilter=sn,ci.wrapS=ri,ci.wrapT=ri,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var sl=class{constructor(t={}){let{canvas:e=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:m=In}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let E=m,_=new Set([vo,yo,xo]),p=new Set([In,ei,Js,Ks,go,_o]),R=new Uint32Array(4),L=new Int32Array(4),T=new O,o=null,w=null,I=[],S=[],u=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,B=!1,k=null,G=null,N=null,W=null;this._outputColorSpace=Bn;let $=0,J=0,rt=null,K=-1,nt=null,st=new We,qt=new We,Gt=null,Be=new ee(0),ve=0,Se=e.width,X=e.height,Q=1,Nt=null,ne=null,Lt=new We(0,0,Se,X),ae=new We(0,0,Se,X),qe=!1,ce=new ks,ye=!1,De=!1,he=new ze,Te=new O,Je=new We,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ye(){return rt===null?Q:1}let U=n;function je(b,C){return e.getContext(b,C)}let be,A,x,z,V,q,ft,pt,Z,et,_t,kt,Et,Mt,zt,Zt,ie,D,yt,tt,vt,Ct,it;try{let b={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),U===null){let C="webgl2";if(U=je(C,b),U===null)throw je(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(b){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),$t("WebGLRenderer: "+b.message),b}function Vt(){be=new W0(U),be.init(),vt=new Pg(U,be),A=new N0(U,be,t,vt),x=new Rg(U,be),A.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),G=U.createFramebuffer(),N=U.createFramebuffer(),W=U.createFramebuffer(),z=new q0(U),V=new pg,q=new Cg(U,be,x,V,A,vt,z),ft=new G0(M),pt=new Zd(U),Ct=new L0(U,pt),Z=new X0(U,pt,z,Ct),et=new J0(U,Z,pt,Ct,z),D=new Z0(U,A,q),zt=new F0(V),_t=new fg(M,ft,be,A,Ct,zt),kt=new Ng(M,V),Et=new gg,Mt=new Sg(be),ie=new I0(M,ft,x,et,v,c),Zt=new Ag(M,et,A),it=new Fg(U,z,A,x),yt=new D0(U,be,z),tt=new Y0(U,be,z),z.programs=_t.programs,M.capabilities=A,M.extensions=be,M.properties=V,M.renderLists=Et,M.shadowMap=Zt,M.state=x,M.info=z}E!==In&&(u=new $0(E,e.width,e.height,l,s,r));let Bt=new Lc(M,U);this.xr=Bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(Se,X,!1))},this.getSize=function(b){return b.set(Se,X)},this.setSize=function(b,C,H=!0){if(Bt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=b,X=C,e.width=Math.floor(b*Q),e.height=Math.floor(C*Q),H===!0&&(e.style.width=b+"px",e.style.height=C+"px"),u!==null&&u.setSize(e.width,e.height),this.setViewport(0,0,b,C)},this.getDrawingBufferSize=function(b){return b.set(Se*Q,X*Q).floor()},this.setDrawingBufferSize=function(b,C,H){Se=b,X=C,Q=H,e.width=Math.floor(b*H),e.height=Math.floor(C*H),this.setViewport(0,0,b,C)},this.setEffects=function(b){if(E===In){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let C=0;C<b.length;C++)if(b[C].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}u.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(Lt)},this.setViewport=function(b,C,H,F){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,C,H,F),x.viewport(st.copy(Lt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,C,H,F){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,C,H,F),x.scissor(qt.copy(ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){x.setScissorTest(qe=b)},this.setOpaqueSort=function(b){Nt=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(b=!0,C=!0,H=!0){let F=0;if(b){let P=!1;if(rt!==null){let ct=rt.texture.format;P=_.has(ct)}if(P){let ct=rt.texture.type,mt=p.has(ct),ot=ie.getClearColor(),St=ie.getClearAlpha(),ht=ot.r,lt=ot.g,Dt=ot.b;mt?(R[0]=ht,R[1]=lt,R[2]=Dt,R[3]=St,U.clearBufferuiv(U.COLOR,0,R)):(L[0]=ht,L[1]=lt,L[2]=Dt,L[3]=St,U.clearBufferiv(U.COLOR,0,L))}else F|=U.COLOR_BUFFER_BIT}C&&(F|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),ie.dispose(),Et.dispose(),Mt.dispose(),V.dispose(),ft.dispose(),et.dispose(),Ct.dispose(),it.dispose(),_t.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",xt),Bt.removeEventListener("sessionend",At),Ft.stop()};function Pe(b){b.preventDefault(),vr("WebGLRenderer: Context Lost."),B=!0}function we(){vr("WebGLRenderer: Context Restored."),B=!1;let b=z.autoReset,C=Zt.enabled,H=Zt.autoUpdate,F=Zt.needsUpdate,P=Zt.type;Vt(),z.autoReset=b,Zt.enabled=C,Zt.autoUpdate=H,Zt.needsUpdate=F,Zt.type=P}function Ce(b){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dn(b){let C=b.target;C.removeEventListener("dispose",Dn),Qr(C)}function Qr(b){er(b),V.remove(b)}function er(b){let C=V.get(b).programs;C!==void 0&&(C.forEach(function(H){_t.releaseProgram(H)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,C,H,F,P,ct){C===null&&(C=xn);let mt=P.isMesh&&P.matrixWorld.determinantAffine()<0,ot=Qe(b,C,H,F,P);x.setMaterial(F,mt);let St=H.index,ht=1;if(F.wireframe===!0){if(St=Z.getWireframeAttribute(H),St===void 0)return;ht=2}let lt=H.drawRange,Dt=H.attributes.position,gt=lt.start*ht,Xt=(lt.start+lt.count)*ht;ct!==null&&(gt=Math.max(gt,ct.start*ht),Xt=Math.min(Xt,(ct.start+ct.count)*ht)),St!==null?(gt=Math.max(gt,0),Xt=Math.min(Xt,St.count)):Dt!=null&&(gt=Math.max(gt,0),Xt=Math.min(Xt,Dt.count));let ue=Xt-gt;if(ue<0||ue===1/0)return;Ct.setup(P,F,ot,H,St);let oe,jt=yt;if(St!==null&&(oe=pt.get(St),jt=tt,jt.setIndex(oe)),P.isMesh)F.wireframe===!0?(x.setLineWidth(F.wireframeLinewidth*Ye()),jt.setMode(U.LINES)):jt.setMode(U.TRIANGLES);else if(P.isLine){let Ee=F.linewidth;Ee===void 0&&(Ee=1),x.setLineWidth(Ee*Ye()),P.isLineSegments?jt.setMode(U.LINES):P.isLineLoop?jt.setMode(U.LINE_LOOP):jt.setMode(U.LINE_STRIP)}else P.isPoints?jt.setMode(U.POINTS):P.isSprite&&jt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(be.get("WEBGL_multi_draw"))jt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ee=P._multiDrawStarts,bt=P._multiDrawCounts,Ie=P._multiDrawCount,Qt=St?pt.get(St).bytesPerElement:1,Ke=V.get(F).currentProgram.getUniforms();for(let $e=0;$e<Ie;$e++)Ke.setValue(U,"_gl_DrawID",$e),jt.render(Ee[$e]/Qt,bt[$e])}else if(P.isInstancedMesh)jt.renderInstances(gt,ue,P.count);else if(H.isInstancedBufferGeometry){let Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bt=Math.min(H.instanceCount,Ee);jt.renderInstances(gt,ue,bt)}else jt.render(gt,ue)};function y(b,C,H,F){k!==null&&b.isNodeMaterial&&k.setObject(F,b),ye===!0&&zt.setState(b,H,!1),b.transparent===!0&&b.side===Ue&&b.forceSinglePass===!1?(b.side=Rn,b.needsUpdate=!0,Ht(b,C,F),b.side=Vi,b.needsUpdate=!0,Ht(b,C,F),b.side=Ue):Ht(b,C,F)}this.compile=function(b,C,H=null){H===null&&(H=b),k!==null&&k.renderStart(b,C,H),w=Mt.get(H),w.init(C),S.push(w),H.traverseVisible(function(P){P.isLight&&P.layers.test(C.layers)&&(w.pushLight(P),P.castShadow&&w.pushShadow(P))}),b!==H&&b.traverseVisible(function(P){P.isLight&&P.layers.test(C.layers)&&(w.pushLight(P),P.castShadow&&w.pushShadow(P))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),De=this.localClippingEnabled,ye=zt.init(this.clippingPlanes,De),ye===!0&&zt.setGlobalState(this.clippingPlanes,C),k!==null&&Zt.render(w.state.shadowsArray,H,C);let F=new Set;return b.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let ct=P.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){let ot=ct[mt];y(ot,H,C,P),F.add(ot)}else y(ct,H,C,P),F.add(ct)}),w=S.pop(),k!==null&&k.renderEnd(),F},this.compileAsync=function(b,C,H=null){let F=this.compile(b,C,H);return new Promise(P=>{function ct(){if(F.forEach(function(mt){let St=V.get(mt).currentProgram;(St===void 0||St.isReady())&&F.delete(mt)}),F.size===0){P(b);return}setTimeout(ct,10)}be.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Y=null;function j(b){Y&&Y(b)}function xt(){Ft.stop()}function At(){Ft.start()}let Ft=new Tu;Ft.setAnimationLoop(j),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(b){Y=b,Bt.setAnimationLoop(b),b===null?Ft.stop():Ft.start()},Bt.addEventListener("sessionstart",xt),Bt.addEventListener("sessionend",At),this.render=function(b,C){if(C!==void 0&&C.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;k!==null&&k.renderStart(b,C);let H=Bt.enabled===!0&&Bt.isPresenting===!0,F=u!==null&&(rt===null||H)&&u.begin(M,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(u===null||u.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(C),C=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,C,rt),w=Mt.get(b,S.length),w.init(C),w.state.textureUnits=q.getTextureUnits(),S.push(w),he.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ce.setFromProjectionMatrix(he,jn,C.reversedDepth),De=this.localClippingEnabled,ye=zt.init(this.clippingPlanes,De),o=Et.get(b,I.length),o.init(),I.push(o),Bt.enabled===!0&&Bt.isPresenting===!0){let mt=M.xr.getDepthSensingMesh();mt!==null&&Tt(mt,C,-1/0,M.sortObjects)}Tt(b,C,0,M.sortObjects),o.finish(),k!==null&&k.updateLights(w.state.lightsArray),M.sortObjects===!0&&o.sort(Nt,ne),Re=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Re&&ie.addToRenderList(o,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&zt.beginShadows();let P=w.state.shadowsArray;if(Zt.render(P,b,C),ye===!0&&zt.endShadows(),(F&&u.hasRenderPass())===!1){let mt=o.opaque,ot=o.transmissive;if(w.setupLights(),C.isArrayCamera){let St=C.cameras;if(ot.length>0)for(let ht=0,lt=St.length;ht<lt;ht++){let Dt=St[ht];at(mt,ot,b,Dt)}Re&&ie.render(b);for(let ht=0,lt=St.length;ht<lt;ht++){let Dt=St[ht];Ot(o,b,Dt,Dt.viewport)}}else ot.length>0&&at(mt,ot,b,C),Re&&ie.render(b),Ot(o,b,C)}rt!==null&&J===0&&(q.updateMultisampleRenderTarget(rt),q.updateRenderTargetMipmap(rt)),F&&u.end(M),b.isScene===!0&&b.onAfterRender(M,b,C),Ct.resetDefaultState(),K=-1,nt=null,S.pop(),S.length>0?(w=S[S.length-1],q.setTextureUnits(w.state.textureUnits),ye===!0&&zt.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?o=I[I.length-1]:o=null,k!==null&&k.renderEnd()};function Tt(b,C,H,F){if(b.visible===!1)return;if(b.layers.test(C.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(C);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ce)){F&&Je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);let mt=et.update(b),ot=b.material;ot.visible&&o.push(b,mt,ot,H,Je.z,null,C)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ce))){let mt=et.update(b),ot=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Je.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Je.copy(mt.boundingSphere.center)),Je.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(ot)){let St=mt.groups;for(let ht=0,lt=St.length;ht<lt;ht++){let Dt=St[ht],gt=ot[Dt.materialIndex];gt&&gt.visible&&o.push(b,mt,gt,H,Je.z,Dt,C)}}else ot.visible&&o.push(b,mt,ot,H,Je.z,null,C)}}let ct=b.children;for(let mt=0,ot=ct.length;mt<ot;mt++)Tt(ct[mt],C,H,F)}function Ot(b,C,H,F){let{opaque:P,transmissive:ct,transparent:mt}=b;w.setupLightsView(H),ye===!0&&zt.setGlobalState(M.clippingPlanes,H),F&&x.viewport(st.copy(F)),P.length>0&&Pt(P,C,H),ct.length>0&&Pt(ct,C,H),mt.length>0&&Pt(mt,C,H),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function at(b,C,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let gt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new Pn(1,1,{generateMipmaps:!0,type:gt?ii:In,minFilter:Wi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let ct=w.state.transmissionRenderTarget[F.id],mt=F.viewport||st;ct.setSize(mt.z*M.transmissionResolutionScale,mt.w*M.transmissionResolutionScale);let ot=M.getRenderTarget(),St=M.getActiveCubeFace(),ht=M.getActiveMipmapLevel();M.setRenderTarget(ct),M.getClearColor(Be),ve=M.getClearAlpha(),ve<1&&M.setClearColor(16777215,.5),M.clear(),Re&&ie.render(H);let lt=M.toneMapping;M.toneMapping=ti;let Dt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),ye===!0&&zt.setGlobalState(M.clippingPlanes,F),Pt(b,H,F),q.updateMultisampleRenderTarget(ct),q.updateRenderTargetMipmap(ct),be.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Xt=0,ue=C.length;Xt<ue;Xt++){let oe=C[Xt],{object:jt,geometry:Ee,material:bt,group:Ie}=oe;if(bt.side===Ue&&jt.layers.test(F.layers)){let Qt=bt.side;bt.side=Rn,bt.needsUpdate=!0,ut(jt,H,F,Ee,bt,Ie),bt.side=Qt,bt.needsUpdate=!0,gt=!0}}gt===!0&&(q.updateMultisampleRenderTarget(ct),q.updateRenderTargetMipmap(ct))}M.setRenderTarget(ot,St,ht),M.setClearColor(Be,ve),Dt!==void 0&&(F.viewport=Dt),M.toneMapping=lt}function Pt(b,C,H){let F=C.isScene===!0?C.overrideMaterial:null;for(let P=0,ct=b.length;P<ct;P++){let mt=b[P],{object:ot,geometry:St,group:ht}=mt,lt=mt.material;lt.allowOverride===!0&&F!==null&&(lt=F),ot.layers.test(H.layers)&&ut(ot,C,H,St,lt,ht)}}function ut(b,C,H,F,P,ct){k!==null&&P.isNodeMaterial&&k.setObject(b,P),b.onBeforeRender(M,C,H,F,P,ct),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),P.onBeforeRender(M,C,H,F,b,ct),P.transparent===!0&&P.side===Ue&&P.forceSinglePass===!1?(P.side=Rn,P.needsUpdate=!0,M.renderBufferDirect(H,C,F,P,b,ct),P.side=Vi,P.needsUpdate=!0,M.renderBufferDirect(H,C,F,P,b,ct),P.side=Ue):M.renderBufferDirect(H,C,F,P,b,ct),b.onAfterRender(M,C,H,F,P,ct)}function Ht(b,C,H){C.isScene!==!0&&(C=xn);let F=V.get(b),P=w.state.lights,ct=w.state.shadowsArray,mt=P.state.version,ot=_t.getParameters(b,P.state,ct,C,H,w.state.lightProbeGridArray),St=_t.getProgramCacheKey(ot),ht=F.programs;F.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;let lt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;F.envMap=ft.get(b.envMap||F.environment,lt),F.envMapRotation=F.environment!==null&&b.envMap===null?C.environmentRotation:b.envMapRotation,ht===void 0&&(b.addEventListener("dispose",Dn),ht=new Map,F.programs=ht);let Dt=ht.get(St);if(Dt!==void 0){if(F.currentProgram===Dt&&F.lightsStateVersion===mt)return Ne(b,ot),Dt}else ot.uniforms=_t.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,H,ot),b.onBeforeCompile(ot,M),Dt=_t.acquireProgram(ot,St),ht.set(St,Dt),F.uniforms=ot.uniforms;let gt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(gt.clippingPlanes=zt.uniform),Ne(b,ot),F.needsLights=ln(b),F.lightsStateVersion=mt,F.needsLights&&(gt.ambientLightColor.value=P.state.ambient,gt.lightProbe.value=P.state.probe,gt.sunLights.value=P.state.sun,gt.sunLightShadows.value=P.state.sunShadow,gt.directionalLights.value=P.state.directional,gt.directionalLightShadows.value=P.state.directionalShadow,gt.spotLights.value=P.state.spot,gt.spotLightShadows.value=P.state.spotShadow,gt.rectAreaLights.value=P.state.rectArea,gt.ltc_1.value=P.state.rectAreaLTC1,gt.ltc_2.value=P.state.rectAreaLTC2,gt.pointLights.value=P.state.point,gt.pointLightShadows.value=P.state.pointShadow,gt.hemisphereLights.value=P.state.hemi,gt.sunShadowMatrix.value=P.state.sunShadowMatrix,gt.sunShadowCascade.value=P.state.sunShadowCascade,gt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,gt.spotLightMatrix.value=P.state.spotLightMatrix,gt.spotLightMap.value=P.state.spotLightMap,gt.pointShadowMatrix.value=P.state.pointShadowMatrix),F.lightProbeGrid=w.state.lightProbeGridArray.length>0,F.currentProgram=Dt,F.uniformsList=null,Dt}function dt(b){if(b.uniformsList===null){let C=b.currentProgram.getUniforms();b.uniformsList=Qs.seqWithValue(C.seq,b.uniforms)}return b.uniformsList}function Ne(b,C){let H=V.get(b);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function ke(b,C){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;T.setFromMatrixPosition(C.matrixWorld);for(let H=0,F=b.length;H<F;H++){let P=b[H];if(P.texture!==null&&P.boundingBox.containsPoint(T))return P}return null}function Qe(b,C,H,F,P){C.isScene!==!0&&(C=xn),q.resetTextureUnits();let ct=C.fog,mt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,ot=rt===null?M.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Me.workingColorSpace,St=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,ht=ft.get(F.envMap||mt,St),lt=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),gt=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color,oe=ti;F.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(oe=M.toneMapping);let jt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=jt!==void 0?jt.length:0,bt=V.get(F),Ie=w.state.lights;if(ye===!0&&(De===!0||b!==nt)){let Jt=b===nt&&F.id===K;zt.setState(F,b,Jt)}let Qt=!1;F.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ie.state.version||bt.outputColorSpace!==ot||P.isBatchedMesh&&bt.batching===!1||!P.isBatchedMesh&&bt.batching===!0||P.isBatchedMesh&&bt.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&bt.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&bt.instancing===!1||!P.isInstancedMesh&&bt.instancing===!0||P.isSkinnedMesh&&bt.skinning===!1||!P.isSkinnedMesh&&bt.skinning===!0||P.isInstancedMesh&&bt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&bt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&bt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&bt.instancingMorph===!1&&P.morphTexture!==null||bt.envMap!==ht||F.fog===!0&&bt.fog!==ct||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==zt.numPlanes||bt.numIntersection!==zt.numIntersection)||bt.vertexAlphas!==lt||bt.vertexTangents!==Dt||bt.morphTargets!==gt||bt.morphNormals!==Xt||bt.morphColors!==ue||bt.toneMapping!==oe||bt.morphTargetsCount!==Ee||!!bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,bt.__version=F.version);let Ke=bt.currentProgram;Qt===!0&&(Ke=Ht(F,C,P),k&&F.isNodeMaterial&&k.onUpdateProgram(F,Ke,bt));let $e=!1,vn=!1,cn=!1,de=Ke.getUniforms(),Yt=bt.uniforms;if(x.useProgram(Ke.program)&&($e=!0,vn=!0,cn=!0),F.id!==K&&(K=F.id,vn=!0),bt.needsLights){let Jt=ke(w.state.lightProbeGridArray,P);bt.lightProbeGrid!==Jt&&(bt.lightProbeGrid=Jt,vn=!0)}if($e||nt!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),de.setValue(U,"projectionMatrix",b.projectionMatrix),de.setValue(U,"viewMatrix",b.matrixWorldInverse);let _e=de.map.cameraPosition;_e!==void 0&&_e.setValue(U,Te.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&de.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),nt!==b&&(nt=b,vn=!0,cn=!0)}if(bt.needsLights&&(Ie.state.sunShadowMap.length>0&&de.setValue(U,"sunShadowMap",Ie.state.sunShadowMap,q),Ie.state.directionalShadowMap.length>0&&de.setValue(U,"directionalShadowMap",Ie.state.directionalShadowMap,q),Ie.state.spotShadowMap.length>0&&de.setValue(U,"spotShadowMap",Ie.state.spotShadowMap,q),Ie.state.pointShadowMap.length>0&&de.setValue(U,"pointShadowMap",Ie.state.pointShadowMap,q)),P.isSkinnedMesh){de.setOptional(U,P,"bindMatrix"),de.setOptional(U,P,"bindMatrixInverse");let Jt=P.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),de.setValue(U,"boneTexture",Jt.boneTexture,q))}P.isBatchedMesh&&(de.setOptional(U,P,"batchingTexture"),de.setValue(U,"batchingTexture",P._matricesTexture,q),de.setOptional(U,P,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",P._indirectTexture,q),de.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",P._colorsTexture,q));let Ae=H.morphAttributes;if((Ae.position!==void 0||Ae.normal!==void 0||Ae.color!==void 0)&&D.update(P,H,Ke),(vn||bt.receiveShadow!==P.receiveShadow)&&(bt.receiveShadow=P.receiveShadow,de.setValue(U,"receiveShadow",P.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(Yt.envMapIntensity.value=C.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Og()),vn){if(de.setValue(U,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&se(Yt,cn),ct&&F.fog===!0&&kt.refreshFogUniforms(Yt,ct),kt.refreshMaterialUniforms(Yt,F,Q,X,w.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.lightProbeGrid){let Jt=bt.lightProbeGrid;Yt.probesSH.value=Jt.texture,Yt.probesMin.value.copy(Jt.boundingBox.min),Yt.probesMax.value.copy(Jt.boundingBox.max),Yt.probesResolution.value.copy(Jt.resolution)}Qs.upload(U,dt(bt),Yt,q)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qs.upload(U,dt(bt),Yt,q),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&de.setValue(U,"center",P.center),de.setValue(U,"modelViewMatrix",P.modelViewMatrix),de.setValue(U,"normalMatrix",P.normalMatrix),de.setValue(U,"modelMatrix",P.matrixWorld),F.uniformsGroups!==void 0){let Jt=F.uniformsGroups;for(let _e=0,tn=Jt.length;_e<tn;_e++){let hn=Jt[_e];it.update(hn,Ke),it.bind(hn,Ke)}}return Ke}function se(b,C){b.ambientLightColor.needsUpdate=C,b.lightProbe.needsUpdate=C,b.sunLights.needsUpdate=C,b.sunLightShadows.needsUpdate=C,b.directionalLights.needsUpdate=C,b.directionalLightShadows.needsUpdate=C,b.pointLights.needsUpdate=C,b.pointLightShadows.needsUpdate=C,b.spotLights.needsUpdate=C,b.spotLightShadows.needsUpdate=C,b.rectAreaLights.needsUpdate=C,b.hemisphereLights.needsUpdate=C}function ln(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,C,H){let F=V.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=C,V.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,C){let H=V.get(b);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(b,C=0,H=0){rt=b,$=C,J=H;let F=null,P=!1,ct=!1;if(b){let ot=V.get(b);if(ot.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,ot.__webglFramebuffer),st.copy(b.viewport),qt.copy(b.scissor),Gt=b.scissorTest,x.viewport(st),x.scissor(qt),x.setScissorTest(Gt),K=-1;return}else if(ot.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(ot.__hasExternalTextures)q.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let lt=b.depthTexture;if(ot.__boundDepthTexture!==lt){if(lt!==null&&V.has(lt)&&(b.width!==lt.image.width||b.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}let St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ct=!0);let ht=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ht[C])?F=ht[C][H]:F=ht[C],P=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?F=V.get(b).__webglMultisampledFramebuffer:Array.isArray(ht)?F=ht[H]:F=ht,st.copy(b.viewport),qt.copy(b.scissor),Gt=b.scissorTest}else st.copy(Lt).multiplyScalar(Q).floor(),qt.copy(ae).multiplyScalar(Q).floor(),Gt=qe;if(H!==0&&(F=G),x.bindFramebuffer(U.FRAMEBUFFER,F)&&x.drawBuffers(b,F),x.viewport(st),x.scissor(qt),x.setScissorTest(Gt),P){let ot=V.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+C,ot.__webglTexture,H)}else if(ct){let ot=C;for(let St=0;St<b.textures.length;St++){let ht=V.get(b.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,ht.__webglTexture,H,ot)}}else if(b!==null&&H!==0){let ot=V.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ot.__webglTexture,H)}K=-1};function yn(b){let C=V.get(b);return(C.__readFormat!==b.format||C.__readType!==b.type)&&(C.__readFormat=b.format,C.__readType=b.type,C.__formatReadable=A.textureFormatReadable(b.format),C.__typeReadable=A.textureTypeReadable(b.type)),C}this.readRenderTargetPixels=function(b,C,H,F,P,ct,mt,ot=0){if(!(b&&b.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){x.bindFramebuffer(U.FRAMEBUFFER,St);try{let ht=b.textures[ot],lt=ht.format,Dt=ht.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ot);let gt=yn(ht);if(gt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(gt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=b.width-F&&H>=0&&H<=b.height-P&&U.readPixels(C,H,F,P,vt.convert(lt),vt.convert(Dt),ct)}finally{let ht=rt!==null?V.get(rt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(b,C,H,F,P,ct,mt,ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St)if(C>=0&&C<=b.width-F&&H>=0&&H<=b.height-P){x.bindFramebuffer(U.FRAMEBUFFER,St);let ht=b.textures[ot],lt=ht.format,Dt=ht.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ot);let gt=yn(ht);if(gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(C,H,F,P,vt.convert(lt),vt.convert(Dt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ue=rt!==null?V.get(rt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,ue);let oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $h(U,oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Xt),U.deleteSync(oe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,C=null,H=0){let F=Math.pow(2,-H),P=Math.floor(b.image.width*F),ct=Math.floor(b.image.height*F),mt=C!==null?C.x:0,ot=C!==null?C.y:0;q.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,mt,ot,P,ct),x.unbindTexture()},this.copyTextureToTexture=function(b,C,H=null,F=null,P=0,ct=0){let mt,ot,St,ht,lt,Dt,gt,Xt,ue,oe=b.isCompressedTexture?b.mipmaps[ct]:b.image;if(H!==null)mt=H.max.x-H.min.x,ot=H.max.y-H.min.y,St=H.isBox3?H.max.z-H.min.z:1,ht=H.min.x,lt=H.min.y,Dt=H.isBox3?H.min.z:0;else{let Yt=Math.pow(2,-P);mt=Math.floor(oe.width*Yt),ot=Math.floor(oe.height*Yt),b.isDataArrayTexture?St=oe.depth:b.isData3DTexture?St=Math.floor(oe.depth*Yt):St=1,ht=0,lt=0,Dt=0}F!==null?(gt=F.x,Xt=F.y,ue=F.z):(gt=0,Xt=0,ue=0);let jt=vt.convert(C.format),Ee=vt.convert(C.type),bt;C.isData3DTexture?(q.setTexture3D(C,0),bt=U.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(q.setTexture2DArray(C,0),bt=U.TEXTURE_2D_ARRAY):(q.setTexture2D(C,0),bt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,C.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,C.unpackAlignment);let Ie=x.getParameter(U.UNPACK_ROW_LENGTH),Qt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=x.getParameter(U.UNPACK_SKIP_PIXELS),$e=x.getParameter(U.UNPACK_SKIP_ROWS),vn=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,ht),x.pixelStorei(U.UNPACK_SKIP_ROWS,lt),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Dt);let cn=b.isDataArrayTexture||b.isData3DTexture,de=C.isDataArrayTexture||C.isData3DTexture;if(b.isDepthTexture){let Yt=V.get(b),Ae=V.get(C),Jt=V.get(Yt.__renderTarget),_e=V.get(Ae.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Jt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let tn=0;tn<St;tn++)cn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(b).__webglTexture,P,Dt+tn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(C).__webglTexture,ct,ue+tn)),U.blitFramebuffer(ht,lt,mt,ot,gt,Xt,mt,ot,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(P!==0||b.isRenderTargetTexture||V.has(b)){let Yt=V.get(b),Ae=V.get(C);x.bindFramebuffer(U.READ_FRAMEBUFFER,N),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Jt=0;Jt<St;Jt++)cn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,P,Dt+Jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,P),de?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,ct,ue+Jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,ct),P!==0?U.blitFramebuffer(ht,lt,mt,ot,gt,Xt,mt,ot,U.COLOR_BUFFER_BIT,U.NEAREST):de?U.copyTexSubImage3D(bt,ct,gt,Xt,ue+Jt,ht,lt,mt,ot):U.copyTexSubImage2D(bt,ct,gt,Xt,ht,lt,mt,ot);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(bt,ct,gt,Xt,ue,mt,ot,St,jt,Ee,oe.data):C.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,ct,gt,Xt,ue,mt,ot,St,jt,oe.data):U.texSubImage3D(bt,ct,gt,Xt,ue,mt,ot,St,jt,Ee,oe):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ct,gt,Xt,mt,ot,jt,Ee,oe.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ct,gt,Xt,oe.width,oe.height,jt,oe.data):U.texSubImage2D(U.TEXTURE_2D,ct,gt,Xt,mt,ot,jt,Ee,oe);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),x.pixelStorei(U.UNPACK_SKIP_ROWS,$e),x.pixelStorei(U.UNPACK_SKIP_IMAGES,vn),ct===0&&C.generateMipmaps&&U.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){$=0,J=0,rt=null,x.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var Lu={type:"change"},Nc={type:"start"},Nu={type:"end"},ol=new bi,Du=new Hn,Hg=Math.cos(70*fc.DEG2RAD),on=new O,Ln=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dc=1e-6,ll=class extends Hr{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new zn,this._lastTargetPosition=new O,this._quat=new zn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ys,this._sphericalDelta=new Ys,this._scale=1,this._panOffset=new O,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new O,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kg.bind(this),this._onPointerDown=zg.bind(this),this._onPointerUp=Vg.bind(this),this._onContextMenu=Jg.bind(this),this._onMouseWheel=Xg.bind(this),this._onKeyDown=Yg.bind(this),this._onTouchStart=qg.bind(this),this._onTouchMove=Zg.bind(this),this._onMouseDown=Gg.bind(this),this._onMouseMove=Wg.bind(this),this._interceptControlDown=Kg.bind(this),this._interceptControlUp=$g.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lu),this.update(),this.state=Oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let l=on.length();a=this._clampDistance(l*this._scale);let c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<Hg?this.object.lookAt(this.target):(Du.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(Du,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dc||this._lastTargetPosition.distanceToSquared(this.target)>Dc?(this.dispatchEvent(Lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nu),this.state=Oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Oe.DOLLY;break;case zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Oe.ROTATE}break;case zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Nc)}function Wg(i){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(i.preventDefault(),this.dispatchEvent(Nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nu))}function Yg(i){this.enabled!==!1&&this._handleKeyDown(i)}function qg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Oe.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Oe.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Nc)}function Zg(i){switch(this._trackPointer(i),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Oe.NONE}}function Jg(i){this.enabled!==!1&&i.preventDefault()}function Kg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $g(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fu(i="sky-product-3d-canvas"){let t=document.getElementById(i);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let e=t.getAttribute("data-product")||"tks",n=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[e]||{id:e,title:"Sky Group M\xFChendislik \xDCr\xFCn\xFC",hotspots:[]},s=new Sr;s.background=new ee(16777215);let r=t.clientWidth||900,a=t.clientHeight||480,l=new bn(35,r/a,.1,100);l.position.set(8.5,4.2,7.5);let c=new sl({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setSize(r,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=kr,c.toneMappingExposure=1.15,c.shadowMap.enabled=!0,c.shadowMap.type=as,t.appendChild(c.domElement);let h=new ll(l,c.domElement);h.enableDamping=!0,h.dampingFactor=.05,h.maxPolarAngle=Math.PI/2-.05,h.minDistance=2,h.maxDistance=28,h.target.set(0,0,0),h.autoRotate=!0,h.autoRotateSpeed=.6;let f=!1,g=null,d=()=>{f=!0,h.autoRotate=!1,clearTimeout(g),g=setTimeout(()=>{f=!1,Ce.autoRotate&&(h.autoRotate=!0)},6e3)};c.domElement.addEventListener("pointerdown",d),c.domElement.addEventListener("wheel",d,{passive:!0}),c.domElement.addEventListener("touchstart",d,{passive:!0});let m=new Ur(16777215,.9);s.add(m);let v=new rs(16777215,1.25);v.position.set(12,16,14),v.castShadow=!0,v.shadow.mapSize.width=1024,v.shadow.mapSize.height=1024,v.shadow.bias=-5e-4,s.add(v);let E=new rs(14412542,.7);E.position.set(-14,8,-10),s.add(E);let _=new rs(15793652,.6);_.position.set(0,18,0),s.add(_);let p=new ss(30,30),R=new Ir({opacity:.12}),L=new Xe(p,R);L.rotation.x=-Math.PI/2,L.position.y=-1.65,L.receiveShadow=!0,s.add(L);let T=new Br(24,24,14870768,15857145);T.position.y=-1.64,s.add(T);let o={aluFrame:new He({color:13949149,metalness:.8,roughness:.25,side:Ue}),galvSteel:new He({color:12897749,metalness:.65,roughness:.45,side:Ue}),stainless:new He({color:14476266,metalness:.55,roughness:.35,side:Ue}),baseSkid:new He({color:9741240,metalness:.75,roughness:.35,side:Ue}),panelSolid:new He({color:16317180,metalness:.15,roughness:.35,side:Ue}),panelCutaway:new Lr({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:Ue}),fanHousing:new He({color:165063,metalness:.6,roughness:.3,side:Ue}),fanImpeller:new He({color:3718648,metalness:.75,roughness:.25,side:Ue}),motorCast:new He({color:1976635,metalness:.85,roughness:.3,side:Ue}),copperPipe:new He({color:12730636,metalness:.9,roughness:.2,side:Ue}),coolingFin:new He({color:3718648,metalness:.55,roughness:.35,side:Ue}),heatingFin:new He({color:16281969,metalness:.55,roughness:.35,side:Ue}),rotorWheel:new He({color:6583435,metalness:.7,roughness:.4,side:Ue}),filterCloth:new He({color:16317180,roughness:.95,metalness:.05,side:Ue}),filterG4:new He({color:14870768,roughness:.9,metalness:.05,side:Ue}),damperBlade:new He({color:9741240,metalness:.8,roughness:.25,side:Ue}),actuatorOrange:new He({color:15357964,metalness:.2,roughness:.4}),drainPan:new He({color:14476266,metalness:.55,roughness:.35,side:Ue}),doorHandle:new He({color:988970,metalness:.8,roughness:.3}),rubberBlack:new He({color:988970,roughness:.85,metalness:.1,side:Ue}),brassGold:new He({color:14251782,metalness:.85,roughness:.25}),springSilver:new He({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new He({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new He({color:16777215,roughness:.2}),touchscreen:new Ni({color:165063})},w=[],I=[],S=new Ge;s.add(S);function u(y,Y,j,xt,At=0,Ft=0,Tt=0,Ot=!0,at=!0){let Pt=new Ui(y,Y,j),ut=new Xe(Pt,xt);return ut.position.set(At,Ft,Tt),ut.castShadow=Ot,ut.receiveShadow=at,ut}function M(y,Y,j,xt,At,Ft=0,Tt=0,Ot=0,at=0,Pt=0,ut=!1,Ht=0,dt=Math.PI*2){let Ne=new is(y,Y,j,xt,1,ut,Ht,dt),ke=new Xe(Ne,At);return ke.position.set(Ft,Tt,Ot),at&&(ke.rotation.x=at),Pt&&(ke.rotation.z=Pt),ke.castShadow=!0,ke.receiveShadow=!0,ke}function B(y,Y=o.panelSolid,j=o.panelCutaway){return y.userData.solidMat=Y,y.userData.cutawayMat=j,I.push(y),y}function k(y){let at=-1.4100000000000001,Pt=u(8.4+.2,.22,.1,o.baseSkid,0,at,1-.05),ut=u(8.4+.2,.22,.1,o.baseSkid,0,at,-1+.05);y.add(Pt,ut);let Ht=[-4.2,-2.5,-.8,.8,2.5,4.2];Ht.forEach(wt=>{y.add(u(.12,.22,2-.2,o.baseSkid,wt,at,0))}),[-2.5,.8].forEach(wt=>{y.add(u(.28,.12,.12,o.aluFrame,wt,at,1-.04)),y.add(u(.28,.12,.12,o.aluFrame,wt,at,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([wt,le])=>{y.add(u(.08,.18,.08,o.yellowSafety,wt,at+.06,le))});let dt=.08;y.add(u(8.4,dt,dt,o.aluFrame,0,-1.3+dt/2,1-dt/2),u(8.4,dt,dt,o.aluFrame,0,-1.3+dt/2,-1+dt/2),u(8.4,dt,dt,o.aluFrame,0,1.3-dt/2,1-dt/2),u(8.4,dt,dt,o.aluFrame,0,1.3-dt/2,-1+dt/2)),Ht.forEach(wt=>{y.add(u(dt,2.6,dt,o.aluFrame,wt,0,1-dt/2),u(dt,2.6,dt,o.aluFrame,wt,0,-1+dt/2),u(dt,dt,2-dt*2,o.aluFrame,wt,1.3-dt/2,0),u(dt,dt,2-dt*2,o.aluFrame,wt,-1.3+dt/2,0))});let Ne=5,ke=u(Ne,.05,2-.16,o.galvSteel,-4.2+Ne/2,0,0);y.add(ke),y.add(u(8.4-.1,2.6-.1,.05,o.panelSolid,0,0,-1+.04)),y.add(u(8.4-.1,.05,2-.16,o.galvSteel,0,-1.3+.03,0)),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,4.2-.03,0,0));let Qe=u(.18,1.2,1.2,o.galvSteel,4.2+.09,-.2,0);y.add(Qe),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,-4.2+.03,0,0));let se=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],ln=[1.7,1.7,1.6,1.7,1.7];se.forEach((wt,le)=>{let te=ln[le]-.08,un=u(te,.04,2-.16,o.panelCutaway,wt,1.3-.02,0,!1,!1);y.add(un),B(un,o.panelSolid,o.panelCutaway);let ds=u(te,2.6-.18,.03,o.panelCutaway,wt,0,1-.02,!1,!1);y.add(ds),B(ds,o.panelSolid,o.panelCutaway);let qn=.04;y.add(u(te,qn,.02,o.aluFrame,wt,(2.6-.18)/2,1),u(te,qn,.02,o.aluFrame,wt,-(2.6-.18)/2,1),u(qn,2.6-.18,.02,o.aluFrame,wt-te/2,0,1),u(qn,2.6-.18,.02,o.aluFrame,wt+te/2,0,1)),[-.45,.45].forEach(rr=>{y.add(u(.04,.14,.05,o.doorHandle,wt+te/2-.1,rr,1+.02))}),[-.55,.55].forEach(rr=>{y.add(u(.03,.1,.03,o.aluFrame,wt-te/2+.04,rr,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([wt,le])=>{let te=M(.14,.14,.04,24,o.aluFrame,wt,le,1,Math.PI/2),un=M(.11,.11,.045,20,o.panelCutaway,wt,le,1,Math.PI/2);y.add(te,un)}),[[-1.65,.1],[3.35,.35]].forEach(([wt,le])=>{let te=M(.08,.08,.03,20,o.aluFrame,wt,le,1.015,Math.PI/2),un=M(.07,.07,.035,20,o.gaugeFace,wt,le,1+.015,Math.PI/2);y.add(te,un),y.add(M(.008,.008,.22,8,o.panelCutaway,wt-.03,le-.12,1+.01)),y.add(M(.008,.008,.22,8,o.panelCutaway,wt+.03,le-.12,1+.01))});let yn=.48,b=.68,C=.18,H=u(yn,b,C,o.galvSteel,2.75,.45,1+C/2),F=u(.24,.16,.01,o.touchscreen,2.75,.56,1+C+.005),P=M(.014,.014,.02,10,o.coolingFin,2.65,.42,1+C+.01,Math.PI/2),ct=M(.014,.014,.02,10,o.yellowSafety,2.75,.42,1+C+.01,Math.PI/2),mt=M(.014,.014,.02,10,o.heatingFin,2.85,.42,1+C+.01,Math.PI/2),ot=u(.08,.08,.01,o.yellowSafety,2.75,.3,1+C+.005),St=u(.04,.06,.03,o.heatingFin,2.75,.3,1+C+.02);y.add(H,F,P,ct,mt,ot,St);let ht=-1.3/2-.05,lt=2-.35,Dt=.85,gt=u(.12,Dt,lt,o.aluFrame,-4.2-.06,ht,0);y.add(gt);for(let wt=0;wt<5;wt++){let le=ht-Dt/2+.1+wt*((Dt-.2)/4),te=u(.08,.015,lt-.06,o.damperBlade,-4.2-.06,le,0);te.rotation.z=.55,y.add(te)}let Xt=u(.16,.2,.14,o.actuatorOrange,-4.2-.06,ht,1+.06);y.add(Xt);let ue=u(.1,1.3-.35,2-.35,o.aluFrame,-3.7,ht,0),oe=u(.08,1.3-.4,2-.4,o.filterG4,-3.7,ht,0);y.add(ue,oe);let jt=1.3/2-.05,Ee=u(.12,Dt,lt,o.aluFrame,-4.2-.06,jt,0);y.add(Ee);for(let wt=0;wt<5;wt++){let le=jt-Dt/2+.1+wt*((Dt-.2)/4),te=u(.08,.015,lt-.06,o.damperBlade,-4.2-.06,le,0);te.rotation.z=-.55,y.add(te)}let bt=u(.16,.2,.14,o.actuatorOrange,-4.2-.06,jt,1+.06);y.add(bt);let Ie=new Ge;Ie.position.set(-2.85,jt,0),y.add(Ie);let Qt=M(.38,.3,.12,24,o.aluFrame,.2,0,0,0,Math.PI/2),Ke=M(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);Ie.add(Qt,Ke);let $e=M(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);Ie.add($e);let vn=M(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);Ie.add(vn),w.push(()=>{Ke.rotation.x+=.14});let cn=u(.1,1.3-.35,2-.35,o.aluFrame,-2.4,ht,0);y.add(cn);for(let wt=0;wt<2;wt++)for(let le=0;le<3;le++){let te=ht-.22+wt*.44,un=-1+.35+le*((2-.7)/2),ds=new Ei(.18,.85,4),qn=new Xe(ds,o.filterCloth);qn.position.set(-1.9,te,un),qn.rotation.z=-Math.PI/2,qn.scale.set(.9,1.2,.7),y.add(qn)}let de=new Ge;de.position.set(0,0,0),y.add(de);let Yt=u(.38,2.6-.2,2-.2,o.aluFrame,0,0,0);y.add(Yt);let Ae=M(1.12,1.12,.32,36,o.aluFrame,0,0,0,0,Math.PI/2),Jt=M(1.08,1.08,.3,32,o.rotorWheel,0,0,0,0,Math.PI/2);de.add(Ae,Jt);for(let wt=0;wt<12;wt++){let le=wt/12*Math.PI*2,te=u(.025,2.12,.02,o.aluFrame,0,0,0);te.rotation.x=le,de.add(te)}let _e=M(.09,.09,.22,12,o.motorCast,.22,1.05,.75,0,Math.PI/2),tn=M(.02,.02,.3,8,o.doorHandle,.22,.95,.75);y.add(_e,tn),w.push(()=>{de.rotation.x+=.01});let hn=2-.35,nn=1.3-.35,qi=u(.24,nn,hn,o.coolingFin,1.15,ht,0);y.add(qi),[-.5,.5].forEach(wt=>{let le=M(.045,.045,nn+.1,14,o.copperPipe,1.15,ht,wt);y.add(le)});for(let wt=0;wt<8;wt++){let le=ht-nn/2+.1+wt*((nn-.2)/7),te=new Xe(new Ws(.032,.012,8,12,Math.PI),o.copperPipe);te.position.set(1.15,le,1-.18),te.rotation.y=Math.PI/2,te.rotation.x=Math.PI/2,y.add(te)}let Zi=u(1.3,.09,hn+.1,o.drainPan,1.5,-1.3+.1,0);y.add(Zi);let Nn=M(.02,.02,.18,10,o.stainless,1.8,-1.3+.06,1-.05,0,0);y.add(Nn);let nr=u(.12,nn,hn,o.aluFrame,1.45,ht,0);y.add(nr);for(let wt=0;wt<12;wt++){let le=-.7+wt*((hn-.2)/11),te=u(.08,nn-.05,.012,o.aluFrame,1.45,ht,le);te.rotation.y=.35,y.add(te)}let ui=u(.18,nn,hn,o.heatingFin,1.85,ht,0);y.add(ui),[-.4,.4].forEach(wt=>{let le=M(.04,.04,nn+.1,14,o.copperPipe,1.85,ht,wt);y.add(le)});let Cn=new Ge;Cn.position.set(2.85,ht,0),y.add(Cn);let Ji=M(.48,.38,.18,28,o.aluFrame,-.4,0,0,0,Math.PI/2),ir=M(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);Cn.add(Ji,ir);let us=M(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),sr=M(.14,.05,.16,16,o.aluFrame,-.25,0,0,0,Math.PI/2);Cn.add(us,sr),w.push(()=>{us.rotation.x+=.15});let Fn=M(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),Gn=u(.14,.12,.14,o.motorCast,.32,.26,0);Cn.add(Fn,Gn);let Ai=u(1.1,.08,.8,o.baseSkid,.05,-nn/2+.08,0);Cn.add(Ai),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([wt,le])=>{let te=u(.12,.03,.12,o.motorCast,wt,-nn/2+.02,le),un=M(.04,.04,.12,10,o.springSilver,wt,-nn/2+.08,le);Cn.add(te,un)});let Ut=u(.1,nn,hn,o.rubberBlack,2.35,ht,0);y.add(Ut);let fe=u(1.2,.03,.03,o.yellowSafety,2.9,ht+.4,1-.25),xe=u(1.2,.03,.03,o.yellowSafety,2.9,ht,1-.25);y.add(fe,xe);for(let wt=-1;wt<=1;wt++){let le=wt*.45,te=u(.65,nn-.1,.22,o.galvSteel,3.8,ht,le),un=M(.11,.11,nn-.1,16,o.aluFrame,3.47,ht,le);y.add(te,un)}}function G(y){let at=-1.4100000000000001,Pt=u(8.6+.2,.22,.1,o.baseSkid,0,at,1-.05),ut=u(8.6+.2,.22,.1,o.baseSkid,0,at,-1+.05);y.add(Pt,ut);let Ht=[-4.3,-2.6,-.9,.8,2.6,4.3];Ht.forEach(Ut=>{y.add(u(.12,.22,2-.2,o.baseSkid,Ut,at,0))}),[-2.6,.8].forEach(Ut=>{y.add(u(.28,.12,.12,o.stainless,Ut,at,1-.04)),y.add(u(.28,.12,.12,o.stainless,Ut,at,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([Ut,fe])=>{y.add(u(.08,.18,.08,o.yellowSafety,Ut,at+.06,fe))});let dt=.08;y.add(u(8.6,dt,dt,o.stainless,0,-1.3+dt/2,1-dt/2),u(8.6,dt,dt,o.stainless,0,-1.3+dt/2,-1+dt/2),u(8.6,dt,dt,o.stainless,0,1.3-dt/2,1-dt/2),u(8.6,dt,dt,o.stainless,0,1.3-dt/2,-1+dt/2)),Ht.forEach(Ut=>{y.add(u(dt,2.6,dt,o.stainless,Ut,0,1-dt/2),u(dt,2.6,dt,o.stainless,Ut,0,-1+dt/2),u(dt,dt,2-dt*2,o.stainless,Ut,1.3-dt/2,0),u(dt,dt,2-dt*2,o.stainless,Ut,-1.3+dt/2,0))});let Ne=5.1,ke=u(Ne,.05,2-.16,o.stainless,-4.3+Ne/2,0,0);y.add(ke),y.add(u(8.6-.1,2.6-.1,.04,o.panelSolid,0,0,-1+.03)),y.add(u(8.6-.12,2.6-.12,.01,o.stainless,0,0,-1+.055)),y.add(u(8.6-.1,.05,2-.16,o.stainless,0,-1.3+.03,0));let Qe=M(.04,.04,8.6-.2,12,o.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);y.add(Qe),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,4.3-.03,0,0));let se=u(.18,1.2,1.2,o.stainless,4.3+.09,-.2,0);y.add(se),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,-4.3+.03,0,0));let ln=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],yn=[1.7,1.7,1.7,1.8,1.7];ln.forEach((Ut,fe)=>{let xe=yn[fe]-.08,wt=u(xe,.04,2-.16,o.panelCutaway,Ut,1.3-.02,0,!1,!1);y.add(wt),B(wt,o.panelSolid,o.panelCutaway);let le=u(xe,2.6-.18,.03,o.panelCutaway,Ut,0,1-.02,!1,!1);y.add(le),B(le,o.panelSolid,o.panelCutaway);let te=.04;y.add(u(xe,te,.02,o.stainless,Ut,(2.6-.18)/2,1),u(xe,te,.02,o.stainless,Ut,-(2.6-.18)/2,1),u(te,2.6-.18,.02,o.stainless,Ut-xe/2,0,1),u(te,2.6-.18,.02,o.stainless,Ut+xe/2,0,1)),[-.45,.45].forEach(un=>{y.add(u(.04,.14,.05,o.doorHandle,Ut+xe/2-.1,un,1+.02))}),[-.55,.55].forEach(un=>{y.add(u(.03,.1,.03,o.stainless,Ut-xe/2+.04,un,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([Ut,fe])=>{let xe=M(.14,.14,.04,24,o.stainless,Ut,fe,1,Math.PI/2),wt=M(.11,.11,.045,20,o.panelCutaway,Ut,fe,1,Math.PI/2);y.add(xe,wt)}),[[-1.75,.1],[3.45,.35]].forEach(([Ut,fe])=>{let xe=M(.08,.08,.03,20,o.stainless,Ut,fe,1.015,Math.PI/2),wt=M(.07,.07,.035,20,o.gaugeFace,Ut,fe,1+.015,Math.PI/2);y.add(xe,wt),y.add(M(.008,.008,.22,8,o.panelCutaway,Ut-.03,fe-.12,1+.01)),y.add(M(.008,.008,.22,8,o.panelCutaway,Ut+.03,fe-.12,1+.01))});let b=.48,C=.68,H=.18,F=u(b,C,H,o.stainless,2.85,.45,1+H/2),P=u(.24,.16,.01,o.touchscreen,2.85,.56,1+H+.005),ct=M(.014,.014,.02,10,o.coolingFin,2.75,.42,1+H+.01,Math.PI/2),mt=M(.014,.014,.02,10,o.yellowSafety,2.85,.42,1+H+.01,Math.PI/2),ot=M(.014,.014,.02,10,o.heatingFin,2.95,.42,1+H+.01,Math.PI/2),St=u(.08,.08,.01,o.yellowSafety,2.85,.3,1+H+.005),ht=u(.04,.06,.03,o.heatingFin,2.85,.3,1+H+.02);y.add(F,P,ct,mt,ot,St,ht);let lt=-1.3/2-.05,Dt=2-.35,gt=.85,Xt=u(.12,gt,Dt,o.stainless,-4.3-.06,lt,0);y.add(Xt);for(let Ut=0;Ut<5;Ut++){let fe=lt-gt/2+.1+Ut*((gt-.2)/4),xe=u(.08,.015,Dt-.06,o.damperBlade,-4.3-.06,fe,0);xe.rotation.z=.55,y.add(xe)}let ue=u(.16,.2,.14,o.actuatorOrange,-4.3-.06,lt,1+.06);y.add(ue);let oe=u(.1,1.3-.35,2-.35,o.stainless,-3.8,lt,0),jt=u(.08,1.3-.4,2-.4,o.filterG4,-3.8,lt,0);y.add(oe,jt);let Ee=1.3/2-.05,bt=u(.12,gt,Dt,o.stainless,-4.3-.06,Ee,0);y.add(bt);for(let Ut=0;Ut<5;Ut++){let fe=Ee-gt/2+.1+Ut*((gt-.2)/4),xe=u(.08,.015,Dt-.06,o.damperBlade,-4.3-.06,fe,0);xe.rotation.z=-.55,y.add(xe)}let Ie=u(.16,.2,.14,o.actuatorOrange,-4.3-.06,Ee,1+.06);y.add(Ie);let Qt=new Ge;Qt.position.set(-2.95,Ee,0),y.add(Qt);let Ke=M(.38,.3,.12,24,o.stainless,.2,0,0,0,Math.PI/2),$e=M(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);Qt.add(Ke,$e);let vn=M(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);Qt.add(vn);let cn=M(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);Qt.add(cn),w.push(()=>{$e.rotation.x+=.14});let de=u(.1,1.3-.35,2-.35,o.stainless,-2.5,lt,0);y.add(de);for(let Ut=0;Ut<2;Ut++)for(let fe=0;fe<3;fe++){let xe=lt-.22+Ut*.44,wt=-1+.35+fe*((2-.7)/2),le=new Ei(.18,.85,4),te=new Xe(le,o.filterCloth);te.position.set(-2,xe,wt),te.rotation.z=-Math.PI/2,te.scale.set(.9,1.2,.7),y.add(te)}let Yt=u(1.5,1.4,2-.35,o.stainless,-.05,0,0);Yt.rotation.z=Math.PI/4,y.add(Yt);let Ae=u(2.2,.04,2-.3,o.stainless,-.05,0,0);Ae.rotation.z=-Math.PI/4,y.add(Ae);let Jt=2-.35,_e=1.3-.35;for(let Ut=0;Ut<3;Ut++){let fe=lt-.25+Ut*.25,xe=M(.02,.02,Jt-.1,12,o.coolingFin,.95,fe,0,Math.PI/2);y.add(xe),y.add(u(.04,.04,.04,o.stainless,.95,fe,1-.2)),y.add(u(.04,.04,.04,o.stainless,.95,fe,-1+.2))}let tn=u(.24,_e,Jt,o.coolingFin,1.25,lt,0);y.add(tn),[-.5,.5].forEach(Ut=>{let fe=M(.045,.045,_e+.1,14,o.copperPipe,1.25,lt,Ut);y.add(fe)});for(let Ut=0;Ut<8;Ut++){let fe=lt-_e/2+.1+Ut*((_e-.2)/7),xe=new Xe(new Ws(.032,.012,8,12,Math.PI),o.copperPipe);xe.position.set(1.25,fe,1-.18),xe.rotation.y=Math.PI/2,xe.rotation.x=Math.PI/2,y.add(xe)}let hn=u(1.3,.09,Jt+.1,o.stainless,1.6,-1.3+.1,0);y.add(hn);let nn=M(.025,.025,.2,12,o.stainless,1.9,-1.3+.06,1-.05);y.add(nn);let qi=u(.12,_e,Jt,o.stainless,1.55,lt,0);y.add(qi);for(let Ut=0;Ut<12;Ut++){let fe=-.7+Ut*((Jt-.2)/11),xe=u(.08,_e-.05,.012,o.stainless,1.55,lt,fe);xe.rotation.y=.35,y.add(xe)}let Zi=u(.18,_e,Jt,o.heatingFin,1.95,lt,0);y.add(Zi),[-.4,.4].forEach(Ut=>{let fe=M(.04,.04,_e+.1,14,o.copperPipe,1.95,lt,Ut);y.add(fe)});let Nn=new Ge;Nn.position.set(2.85,lt,0),y.add(Nn);let nr=M(.48,.38,.18,28,o.stainless,-.4,0,0,0,Math.PI/2),ui=M(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);Nn.add(nr,ui);let Cn=M(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Ji=M(.14,.05,.16,16,o.stainless,-.25,0,0,0,Math.PI/2);Nn.add(Cn,Ji),w.push(()=>{Cn.rotation.x+=.15});let ir=M(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),us=u(.14,.12,.14,o.motorCast,.32,.26,0);Nn.add(ir,us);let sr=u(1.1,.08,.8,o.stainless,.05,-_e/2+.08,0);Nn.add(sr),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ut,fe])=>{let xe=u(.12,.03,.12,o.motorCast,Ut,-_e/2+.02,fe),wt=M(.04,.04,.12,10,o.springSilver,Ut,-_e/2+.08,fe);Nn.add(xe,wt)});let Fn=u(.1,_e,Jt,o.rubberBlack,2.35,lt,0);y.add(Fn);let Gn=u(.2,_e-.1,Jt-.1,o.stainless,3.65,lt,0),Ai=u(.16,_e-.15,Jt-.15,o.filterCloth,3.65,lt,0);y.add(Gn,Ai);for(let Ut=-1;Ut<=1;Ut+=2){let fe=Ut*.4,xe=u(.42,_e-.1,.2,o.stainless,4.05,lt,fe);y.add(xe)}}function N(y){let at=-1.2750000000000001,Pt=6.2+.2,ut=2.2+.2,Ht=u(Pt,.45,.08,o.baseSkid,0,at,1.1+.06),dt=u(Pt,.45,.08,o.baseSkid,0,at,-1.1-.06),Ne=u(.08,.45,ut-.16,o.baseSkid,-3.1-.06,at,0),ke=u(.08,.45,ut-.16,o.baseSkid,3.1+.06,at,0);y.add(Ht,dt,Ne,ke);let Qe=u(Pt+.08,.04,.14,o.aluFrame,0,-1.05-.02,1.1+.05),se=u(Pt+.08,.04,.14,o.aluFrame,0,-1.05-.02,-1.1-.05);y.add(Qe,se);let ln=u(Pt,.02,.04,o.rubberBlack,0,-1.05+.01,1.1),yn=u(Pt,.02,.04,o.rubberBlack,0,-1.05+.01,-1.1);y.add(ln,yn),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([It,pe])=>{let gn=u(.14,.25,.14,o.yellowSafety,It,at+.1,pe),_n=M(.035,.035,.16,16,o.motorCast,It,at+.16,pe,0,Math.PI/2);y.add(gn,_n)});let b=u(.9,.18,.9,o.galvSteel,-.1,at-.14,0),C=u(.82,.19,.82,o.motorCast,-.1,at-.14,0),H=u(.9,.18,.9,o.galvSteel,2.3,at-.14,0),F=u(.82,.19,.82,o.motorCast,2.3,at-.14,0);y.add(b,C,H,F);let P=.08;y.add(u(6.2,P,P,o.aluFrame,0,-1.05+P/2,1.1-P/2),u(6.2,P,P,o.aluFrame,0,-1.05+P/2,-1.1+P/2),u(6.2,P,P,o.aluFrame,0,1.05-P/2,1.1-P/2),u(6.2,P,P,o.aluFrame,0,1.05-P/2,-1.1+P/2)),[-3.1+P/2,-.7,.6,1.8,3.1-P/2].forEach(It=>{y.add(u(P,2.1-2*P,P,o.aluFrame,It,0,1.1-P/2),u(P,2.1-2*P,P,o.aluFrame,It,0,-1.1+P/2))}),[-3.1+P/2,-.7,.6,1.8,3.1-P/2].forEach(It=>{y.add(u(P,P,2.2-2*P,o.aluFrame,It,-1.05+P/2,0),u(P,P,2.2-2*P,o.aluFrame,It,1.05-P/2,0))}),y.add(u(6.2-.1,2.1-.1,.05,o.panelSolid,0,0,-1.1+.04)),y.add(u(6.2-.1,.05,2.2-.1,o.galvSteel,0,-1.05+.04,0)),y.add(u(.05,2.1-.1,2.2-.1,o.panelSolid,3.1-.03,0,0));let ct=u(3.8,.06,2.2+.1,o.panelSolid,1.15,1.05+.03,0);y.add(ct),y.add(u(3.84,.04,.04,o.aluFrame,1.15,1.05+.01,1.1+.06),u(3.84,.04,.04,o.aluFrame,1.15,1.05+.01,-1.1-.06));let mt=u(.06,2.1-.12,2.2-.12,o.galvSteel,-.7,0,0);y.add(mt);let ot=u(2.2,2.1-.25,.12,o.coolingFin,-1.85,.02,-1.1+.15),St=u(.12,2.1-.25,2.2-.3,o.coolingFin,-3.1+.15,.02,0);y.add(ot,St);for(let It=-.8;It<=.8;It+=.2){let pe=u(2.25,.02,.02,o.aluFrame,-1.85,It,-1.05);y.add(pe)}[-.8,-.2,.4].forEach(It=>{let pe=M(.035,.035,2.1,14,o.copperPipe,-1.85,It,-.8600000000000001,0,Math.PI/2);y.add(pe)}),[-2.2,-1.2].forEach((It,pe)=>{let _n=M(.48,.46,.22,28,o.motorCast,It,1.1600000000000001,0,0,0,!0),di=M(.51,.51,.04,28,o.aluFrame,It,1.05+.22,0);y.add(_n,di);let fs=M(.46,.46,.02,24,o.galvSteel,It,1.05+.22+.01,0,0,0,!0);y.add(fs);for(let $i=0;$i<4;$i++){let ps=u(.9,.015,.015,o.galvSteel,It,1.285,0);ps.rotation.y=$i/4*Math.PI,y.add(ps)}let fi=new Ge;fi.position.set(It,1.05+.12,0),y.add(fi);let cl=M(.12,.12,.08,16,o.aluFrame,0,0,0);fi.add(cl);for(let $i=0;$i<5;$i++){let ps=new Ge;ps.rotation.y=$i/5*Math.PI*2;let Oc=u(.34,.02,.11,o.fanImpeller,.24,0,0);Oc.rotation.x=.35,ps.add(Oc),fi.add(ps)}let hl=pe===0?.18:.17;w.push(()=>{fi.rotation.y+=hl});let ul=M(.15,.15,.3,16,o.motorCast,It,1.05-.12,0);y.add(ul)});let lt=u(1.5,.06,.6,o.baseSkid,-1.8,-1.05+.1,.1);y.add(lt),[-2.15,-1.45].forEach(It=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([fs,fi])=>{y.add(M(.04,.04,.04,12,o.rubberBlack,It+fs,-1.05+.14,.1+fi))});let pe=M(.16,.16,.58,24,o.motorCast,It,-1.05+.45,.1),gn=M(.14,.16,.08,20,o.motorCast,It,-1.05+.76,.1),_n=u(.1,.14,.08,o.motorCast,It+.14,-1.05+.5,.1),di=M(.165,.165,.05,20,o.heatingFin,It,-1.05+.22,.1);y.add(pe,gn,_n,di)});let gt=M(.12,.12,.52,20,o.motorCast,-.95,-1.05+.42,.25),Xt=M(.09,.12,.06,16,o.motorCast,-.95,-1.05+.7,.25);y.add(gt,Xt);let ue=M(.04,.04,.8,14,o.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),oe=M(.04,.04,.6,14,o.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);y.add(ue,oe);let jt=M(.03,.03,1.1,14,o.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),Ee=M(.045,.045,.22,16,o.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);y.add(jt,Ee);let bt=M(.06,.06,.24,16,o.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),Ie=M(.03,.03,.34,14,o.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),Qt=u(.09,.12,.09,o.brassGold,-.95,-1.05+.45,-.3),Ke=M(.01,.01,.2,8,o.rubberBlack,-.95,-1.05+.54,-.3);y.add(bt,Ie,Qt,Ke),[-.15,.15].forEach(It=>{let pe=M(.045,.045,.02,16,o.gaugeFace,-.73,-.4,It,0,Math.PI/2);y.add(pe)});let $e=1.1,vn=.8,cn=.35,de=u($e,vn,cn,o.galvSteel,-.1,.2,-1.1-cn/2+.04),Yt=u($e+.06,.03,cn+.08,o.aluFrame,-.1,.2+vn/2+.02,-1.1-cn/2);Yt.rotation.x=-.12,y.add(de,Yt);for(let It=-.3;It<=.3;It+=.12){let pe=u($e-.06,.02,.18,o.damperBlade,-.1,.2+It,-1.1-cn/2);pe.rotation.x=.45,y.add(pe)}let Ae=1,_e=u(Ae,.75,.08,o.aluFrame,-.1,.2,-1.1+.25);y.add(_e);for(let It=-.25;It<=.25;It+=.14){let pe=u(Ae-.06,.11,.015,o.damperBlade,-.1,.2+It,-.8500000000000001);pe.rotation.x=.3,y.add(pe)}let tn=.9,nn=u(tn,.08,.9,o.aluFrame,-.1,-1.05+.15,0);y.add(nn);for(let It=-.3;It<=.3;It+=.15){let pe=u(tn-.06,.015,.12,o.damperBlade,-.1,-.9,It);pe.rotation.z=.25,y.add(pe)}let qi=u(.16,.22,.14,o.actuatorOrange,-.1,.35,1.1-.2),Zi=M(.04,.04,.06,16,o.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),Nn=u(.03,.14,.02,o.motorCast,-.1,.42,1.1-.1);y.add(qi,Zi,Nn);let nr=M(.015,.015,.35,10,o.stainless,.25,.2,0);y.add(nr);let ui=.6,Cn=2.1-.3,Ji=2.2-.3,ir=u(.18,Cn,Ji,o.galvSteel,ui,0,0);y.add(ir);for(let It=-Ji/2+.3;It<=Ji/2-.2;It+=.5){let pe=u(.05,Cn-.1,.44,o.filterG4,ui-.05,0,It),gn=u(.07,Cn-.1,.44,o.filterCloth,ui+.05,0,It);y.add(pe,gn)}let us=M(.01,.01,.2,8,o.copperPipe,ui-.14,.3,1.1-.15),sr=M(.01,.01,.2,8,o.copperPipe,ui+.14,.3,1.1-.15);y.add(us,sr);let Fn=1.25,Gn=2.1-.35,Ai=2.2-.35,Ut=u(.32,Gn,Ai,o.coolingFin,Fn,.02,0);y.add(Ut);for(let It=0;It<4;It++)for(let pe=0;pe<3;pe++){let gn=-Gn/2+.2+pe*(Gn/3.2),_n=Fn-.12+It*.08,di=M(.025,.025,.04,12,o.copperPipe,_n,gn,1.1-.18,Math.PI/2,0);y.add(di)}let fe=M(.035,.035,.08,14,o.brassGold,Fn-.15,-.2,1.1-.22);y.add(fe);for(let It=0;It<4;It++){let pe=M(.008,.008,.28,8,o.copperPipe,Fn-.08,-.2+It*.1,.8800000000000001,0,Math.PI/4);y.add(pe)}let xe=Ai+.15,wt=.85,le=.09,te=u(wt,le,xe,o.drainPan,Fn,-1.05+le/2+.05,0);y.add(te);let un=M(.03,.03,.35,12,o.stainless,Fn+.1,-1.05-.05,1.1+.02),ds=M(.03,.03,.22,12,o.stainless,Fn+.22,-1.05-.12,1.1+.02),qn=M(.03,.03,.14,12,o.stainless,Fn+.16,-1.05-.22,1.1+.02,0,Math.PI/2);y.add(un,ds,qn);let rr=u(.12,Gn-.05,Ai,o.aluFrame,Fn+.24,.02,0);y.add(rr);let Fc=1.8,Uu=Gn,Ou=Ai;for(let It=-.5;It<=.5;It+=.25){let pe=M(.045,.045,Ou-.2,16,o.stainless,Fc,It,0,Math.PI/2,0);y.add(pe)}let Bu=u(.25,Uu-.2,.3,o.galvSteel,Fc,0,-1.1+.2);y.add(Bu);let Ki=new Ge;Ki.position.set(2.45,.05,0),y.add(Ki);let Hu=M(.48,.38,.18,28,o.aluFrame,-.38,0,0,0,Math.PI/2),zu=M(.44,.44,.03,24,o.copperPipe,-.36,0,0,0,Math.PI/2,!0);Ki.add(Hu,zu);let Uc=M(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),ku=M(.14,.05,.16,16,o.aluFrame,-.24,0,0,0,Math.PI/2);Ki.add(Uc,ku),w.push(()=>{Uc.rotation.x+=.15});let Vu=M(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),Gu=u(.14,.12,.14,o.motorCast,.32,.26,0);Ki.add(Vu,Gu);let Wu=u(1.1,.08,.8,o.baseSkid,.05,-Gn/2+.1,0);Ki.add(Wu),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([It,pe])=>{let gn=u(.12,.03,.12,o.motorCast,It,-Gn/2+.04,pe),_n=M(.04,.04,.12,10,o.springSilver,It,-Gn/2+.1,pe);Ki.add(gn,_n)});let Xu=u(.85,.6,.85,o.galvSteel,2.3,-1.05+.3,0),Yu=u(.9,.1,.9,o.rubberBlack,2.3,-1.05+.05,0);y.add(Xu,Yu),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((It,pe)=>{let gn=It.maxX-It.minX,_n=(It.minX+It.maxX)/2,di=2.1-.22,fs=u(gn-.04,di,.04,o.panelCutaway,_n,0,1.1-.02,!1,!1);y.add(fs),B(fs,o.panelSolid,o.panelCutaway);let fi=u(.04,.14,.04,o.doorHandle,_n+gn*.42,0,1.1+.01),cl=u(.03,.08,.03,o.stainless,_n-gn*.45,di*.35,1.1+.01),hl=u(.03,.08,.03,o.stainless,_n-gn*.45,-di*.35,1.1+.01);if(y.add(fi,cl,hl),pe===1||pe===2||pe===3){let ul=M(.12,.12,.04,20,o.aluFrame,_n,.22,1.1,Math.PI/2);y.add(ul)}});let qu=u(.42,.65,.18,o.panelSolid,.6,.3,1.1+.08),Zu=u(.38,.6,.02,o.aluFrame,.6,.3,1.1+.17),Ju=u(.24,.16,.01,o.touchscreen,.6,.4,1.1+.18),Ku=u(.09,.09,.02,o.yellowSafety,.6,.18,1.1+.18),$u=M(.035,.035,.05,12,o.heatingFin,.6,.18,1.1+.2,Math.PI/2);y.add(qu,Zu,Ju,Ku,$u),[-.15,.15].forEach(It=>{let pe=M(.065,.065,.035,20,o.aluFrame,.6,-.25,1.1800000000000002+It,Math.PI/2),gn=M(.055,.055,.037,20,o.gaugeFace,.6,-.25,1.1+.08+It,Math.PI/2),_n=M(.008,.008,.3,8,o.panelCutaway,.6,-.42,1.1+.08+It);y.add(pe,gn,_n)})}function W(y,Y){if(Y==="tks"){k(y);return}if(Y==="thks"){G(y);return}if(Y==="rooftop"){N(y);return}let j=Y==="thks",xt=Y==="thrv-dx",At=Y==="hrv",Ft=Y==="rooftop",Tt=At?4.8:Ft?6.2:7.6,Ot=At?1.9:2.6,at=At?1.8:2,Pt=Tt/2,ut=Ot/2,Ht=at/2,dt=.22,Ne=-ut-dt/2,ke=u(Tt+.3,dt,.12,o.baseSkid,0,Ne,Ht-.06),Qe=u(Tt+.3,dt,.12,o.baseSkid,0,Ne,-Ht+.06);y.add(ke,Qe),[-Pt,-Pt*.5,0,Pt*.5,Pt].forEach(H=>{y.add(u(.12,dt,at-.24,o.baseSkid,H,Ne,0))});let se=.08,ln=j?o.stainless:o.aluFrame;y.add(u(Tt,se,se,ln,0,-ut+se/2,Ht-se/2),u(Tt,se,se,ln,0,-ut+se/2,-Ht+se/2),u(Tt,se,se,ln,0,ut-se/2,Ht-se/2),u(Tt,se,se,ln,0,ut-se/2,-Ht+se/2));let yn=j?o.stainless:o.galvSteel;y.add(u(Tt-.1,Ot-.1,.05,o.panelSolid,0,0,-Ht+.04),u(Tt-.1,.05,at-.1,o.panelSolid,0,ut-.03,0),u(Tt-.1,.05,at-.1,yn,0,-ut+.03,0),u(.05,Ot-.1,at-.1,o.panelSolid,Pt-.03,0,0));let b=At?3:4,C=(Tt-.2)/b;for(let H=0;H<b;H++){let F=-Pt+.1+(H+.5)*C,P=u(C-.04,Ot-.18,.03,o.panelCutaway,F,0,Ht-.02,!1,!1);y.add(P),I.push(P),y.add(u(.04,.12,.04,o.doorHandle,F+C*.4,0,Ht+.01)),y.add(M(.11,.11,.04,16,o.aluFrame,F,.2,Ht,Math.PI/2))}if(At){let H=u(1.5,1.4,at-.35,o.aluFrame,0,0,0);H.rotation.z=Math.PI/4,y.add(H),[-1.4,1.4].forEach((F,P)=>{let ct=P===0?-.35:.35,mt=M(.35,.35,.25,20,o.fanHousing,F,ct,0,0,Math.PI/2);y.add(mt),w.push(()=>{mt.rotation.x+=.1})}),[-1.9,1.9].forEach(F=>{y.add(u(.06,Ot-.4,at-.4,o.filterCloth,F,0,0))}),[[-Pt-.1,.4],[Pt+.1,-.4]].forEach(([F,P])=>{y.add(M(.32,.32,.22,24,o.galvSteel,F,P,0,0,Math.PI/2,!0))})}else if(Ft){[-1.2,1.2].forEach(F=>{let P=M(.55,.55,.18,24,o.motorCast,F,ut+.09,0,0,0,!0),ct=M(.48,.48,.04,4,o.fanImpeller,F,ut+.12,0);y.add(P,ct),w.push(()=>{ct.rotation.y+=.15})}),[-1.8,-1].forEach(F=>{let P=M(.2,.2,.7,16,o.motorCast,F,-ut+.5,-Ht+.5);y.add(P)});let H=M(.45,.45,.35,20,o.fanHousing,1.8,-.2,0,0,Math.PI/2);y.add(H),w.push(()=>{H.rotation.x+=.12}),y.add(u(.3,Ot-.5,at-.4,o.coolingFin,.5,-.1,0))}else{let H=new Ge;H.position.set(0,0,0),y.add(H);let F=M(1.05,1.05,.28,32,o.aluFrame,0,0,0,0,Math.PI/2),P=M(1.01,1.01,.26,28,o.rotorWheel,0,0,0,0,Math.PI/2);H.add(F,P);for(let ot=0;ot<12;ot++){let St=ot/12*Math.PI*2,ht=u(.03,1.98,.02,o.aluFrame,0,0,0);ht.rotation.x=St,H.add(ht)}w.push(()=>{H.rotation.x+=.008});let ct=M(.42,.42,.35,24,o.fanHousing,2.8,-ut/2+.1,0,0,Math.PI/2),mt=M(.36,.36,.3,24,o.fanHousing,-1.3,ut/2-.05,0,0,Math.PI/2);y.add(ct,mt),w.push(()=>{ct.rotation.x+=.12,mt.rotation.x+=.12}),y.add(u(.28,ut-.3,at-.35,j?o.stainless:o.coolingFin,1.35,-ut/2,0)),y.add(u(.22,ut-.3,at-.35,o.heatingFin,1.85,-ut/2,0)),y.add(u(.95,.08,at-.25,o.drainPan,1.6,-ut+.12,0)),y.add(u(.06,ut-.25,at-.3,j?o.stainless:o.aluFrame,-2.1,-ut/2,0));for(let ot=0;ot<4;ot++){let St=-Ht+.25+(ot+.5)*((at-.4)/4),ht=new Xe(new Ei(.2,.75,4),o.filterCloth);ht.rotateZ(-Math.PI/2),ht.position.set(-1.7,-ut/2,St),ht.scale.set(1,1.4,.8),y.add(ht)}if(j){y.add(u(.18,ut-.3,at-.35,o.stainless,2.15,-ut/2,0));let ot=M(.03,.03,at-.5,12,o.coolingFin,1.1,-ut/2+.2,0,Math.PI/2);y.add(ot)}[-ut/2,ut/2].forEach(ot=>{y.add(u(.08,ut-.25,at-.3,o.aluFrame,-Pt-.04,ot,0)),y.add(u(.14,.18,.12,o.actuatorOrange,-Pt-.04,ot,Ht+.05))}),xt&&y.add(M(.2,.2,.65,16,o.motorCast,2.5,-ut/2,-Ht+.5)),y.add(u(.32,.55,.18,o.motorCast,2.3,.35,Ht+.09))}}function $(y,Y){if(Y==="tdf"){y.add(u(3.2,.04,2,o.galvSteel,0,2/2,0),u(3.2,.04,2,o.galvSteel,0,-2/2,0),u(3.2,2,.04,o.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(at=>{y.add(u(.08,.12,2+.2,o.aluFrame,at,2/2+.04,0),u(.08,.12,2+.2,o.aluFrame,at,-2/2-.04,0),u(.08,2,.12,o.aluFrame,at,0,2/2+.04),u(.08,2,.12,o.aluFrame,at,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(Pt=>{[-2/2-.04,2/2+.04].forEach(ut=>{y.add(u(.1,.14,.14,o.baseSkid,at,Pt,ut))})})});let Ft=u(3.2-.1,2-.1,.03,o.panelCutaway,0,0,2/2,!1,!1);y.add(Ft),I.push(Ft),[-.8,.8].forEach(at=>{y.add(u(.08,.12,.04,o.doorHandle,at,2/2-.1,2/2+.02))});let Tt=M(.78,.78,.45,24,o.fanImpeller,0,0,0,0,Math.PI/2),Ot=M(.28,.28,.35,16,o.motorCast,.25,0,0,0,Math.PI/2);y.add(Tt,Ot),w.push(()=>{Tt.rotation.x+=.14}),y.add(u(.24,.18,.16,o.fanHousing,-.6,2/2+.1,.4))}else if(Y==="yangin-fani"){let At=M(1.25,1.25,4.2,32,o.galvSteel,0,0,0,0,Math.PI/2,!0);y.add(At),[-4.2/2,4.2/2].forEach(Pt=>{let ut=M(1.43,1.43,.06,32,o.baseSkid,Pt,0,0,0,Math.PI/2,!0);y.add(ut);for(let Ht=0;Ht<12;Ht++){let dt=Ht/12*Math.PI*2;y.add(u(.08,.04,.04,o.doorHandle,Pt,Math.sin(dt)*(1.25+.09),Math.cos(dt)*(1.25+.09)))}});let Ft=M(.46,.46,2,24,o.motorCast,.1,0,0,0,Math.PI/2),Tt=new Xe(new Ei(.46,.6,20),o.motorCast);Tt.rotateZ(-Math.PI/2),Tt.position.set(-1.2,0,0),y.add(Ft,Tt);let Ot=new Ge;Ot.position.set(-.6,0,0),y.add(Ot);let at=M(.48,.48,.2,20,o.fanImpeller,0,0,0,0,Math.PI/2);Ot.add(at);for(let Pt=0;Pt<8;Pt++){let ut=Pt/8*Math.PI*2,Ht=u(.04,.7,.16,o.fanImpeller,0,Math.sin(ut)*.78,Math.cos(ut)*.78);Ht.rotation.x=ut+.35,Ot.add(Ht)}w.push(()=>{Ot.rotation.x+=.15});for(let Pt=0;Pt<4;Pt++){let ut=Pt/4*Math.PI*2,Ht=u(.03,1.25-.46,.1,o.baseSkid,.4,Math.sin(ut)*(1.25+.46)/2,Math.cos(ut)*(1.25+.46)/2);Ht.rotation.x=ut,y.add(Ht)}y.add(u(2.8,.12,.35,o.baseSkid,0,-1.25-.1,.9),u(2.8,.12,.35,o.baseSkid,0,-1.25-.1,-.9)),y.add(u(.24,.24,.16,o.actuatorOrange,0,1.25+.1,0))}else{let At=M(.62,.62,5.2,28,o.galvSteel,0,0,0,0,Math.PI/2,!0);y.add(At),[-1.7,1.7].forEach(Ot=>{y.add(M(.62+.12,.62+.12,1.5,28,o.aluFrame,Ot,0,0,0,Math.PI/2,!0))});let Ft=M(.28,.28,1.2,16,o.motorCast,0,0,0,0,Math.PI/2),Tt=M(.62-.05,.62-.05,.12,8,o.fanImpeller,0,0,0,0,Math.PI/2);y.add(Ft,Tt),w.push(()=>{Tt.rotation.x+=.16});for(let Ot=-.3;Ot<=.3;Ot+=.2){let at=u(.08,.04,.8,o.damperBlade,2.62,Ot,0);at.rotation.z=-.2,y.add(at)}[-5.2/2-.02,5.2/2+.02].forEach(Ot=>{y.add(M(.62+.02,.62+.02,.04,16,o.aluFrame,Ot,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(Ot=>{y.add(u(.08,.55,.25,o.baseSkid,Ot,.62+.35,0))})}}function J(y){let Ot=u(3,.03,1.3,o.galvSteel,-1.1,.45,0),at=u(3,.03,1.3,o.galvSteel,-1.1,-.45,0),Pt=u(3,.9,.03,o.galvSteel,-1.1,0,-.65);y.add(Ot,at,Pt);let ut=.6,Ht=u(ut,.9,.03,o.galvSteel,-2.6+ut/2,0,.65),dt=u(ut,.9,.03,o.galvSteel,.4-ut/2,0,.65),Ne=3-2*ut,ke=u(Ne,.9-.08,.03,o.panelCutaway,-1.1,0,.65,!1,!1);y.add(Ht,dt,ke),B(ke,o.galvSteel,o.panelCutaway),[-2.1,-1.6,-1.1,-.6,-.1].forEach(Yt=>{let Ae=u(.04,.025,1.22,o.aluFrame,Yt,.47000000000000003,0),Jt=u(.04,.025,1.3-.08,o.aluFrame,Yt,-.45-.02,0);y.add(Ae,Jt)}),[[-1.85,-1.35],[-1.35,-.85],[-.85,-.35]].forEach(([Yt,Ae])=>{let Jt=(Yt+Ae)/2,_e=u(.015,.015,1.3-.12,o.aluFrame,Jt,.45+.015,0);_e.rotation.y=.35;let tn=u(.015,.015,1.3-.12,o.aluFrame,Jt,.45+.015,0);tn.rotation.y=-.35,y.add(_e,tn)});let se=.035,ln=u(3,se,se,o.aluFrame,-1.1,.45+se/2,.65+se/2),yn=u(3,se,se,o.aluFrame,-1.1,.45+se/2,-.65-se/2),b=u(3,se,se,o.aluFrame,-1.1,-.45-se/2,.65+se/2),C=u(3,se,se,o.aluFrame,-1.1,-.45-se/2,-.65-se/2);y.add(ln,yn,b,C);let H=u(3,.012,.012,o.rubberBlack,-1.1,.45,.65);y.add(H);let F=u(Ne-.05,.9-.12,.06,o.motorCast,-1.1,0,-.65+.05),P=u(Ne-.05,.06,1.3-.12,o.motorCast,-1.1,-.45+.05,0);y.add(F,P);let ct=u(Ne-.06,.9-.14,.015,o.galvSteel,-1.1,0,-.65+.08),mt=u(Ne-.06,.015,1.3-.14,o.galvSteel,-1.1,-.45+.08,0);y.add(ct,mt);for(let Yt=-1.1-.6;Yt<=-1.1+.6;Yt+=.4)for(let Ae=-.25;Ae<=.25;Ae+=.25){let Jt=M(.005,.005,.08,8,o.copperPipe,Yt,Ae,-.6,Math.PI/2),_e=M(.03,.03,.005,12,o.aluFrame,Yt,Ae,-.65+.09,Math.PI/2);y.add(Jt,_e)}let ot=-2.1,St=M(.24,.24,.04,24,o.aluFrame,ot,0,.65+.02,Math.PI/2),ht=M(.22,.22,.05,24,o.galvSteel,ot,0,.65+.03,Math.PI/2);y.add(St,ht),[-.1,.1].forEach(Yt=>{let Ae=u(.04,.08,.05,o.doorHandle,ot+Yt,0,.72);y.add(Ae)}),rt(y,-2.6,.9,1.3,o),K(y,.4,.9,1.3,o);let lt=1.35,Dt=1.8,gt=u(Dt,.03,1.3,o.galvSteel,lt,.45,0),Xt=u(Dt,.03,1.3,o.galvSteel,lt,-.45,0),ue=u(Dt,.9,.03,o.galvSteel,lt,0,-.65);y.add(gt,Xt,ue);let oe=u(.4,.9,.03,o.galvSteel,.6,0,.65),jt=u(.4,.9,.03,o.galvSteel,2.05,0,.65),Ee=u(1.05,.9-.08,.03,o.panelCutaway,1.32,0,.65,!1,!1);y.add(oe,jt,Ee),B(Ee,o.galvSteel,o.panelCutaway);for(let Yt=0;Yt<4;Yt++){let Ae=.9+Yt*.28,Jt=new Ge;Jt.position.set(Ae,0,-.15+Yt*.1);let _e=M(.35,.35,.9-.14,16,o.aluFrame,0,0,0,0,0,!0);_e.scale.set(.25,1,.55),Jt.add(_e);let tn=u(.04,.02,.18,o.galvSteel,0,.45-.08,0),hn=u(.04,.02,.18,o.galvSteel,0,-.45+.08,0);Jt.add(tn,hn),y.add(Jt)}let bt=.55,Ie=.45,Qt=.45,Ke=u(bt,Ie,Qt,o.galvSteel,1.35,.15,-.65-Qt/2),$e=u(bt+.1,Ie+.1,.04,o.aluFrame,1.35,.15,-.65-Qt);y.add(Ke,$e),rt(y,2.24,.9,1.3,o),[-1.8,1].forEach(Yt=>{let Jt=u(.06,.05,1.65,o.baseSkid,Yt,-.49,0),_e=u(.06,.015,.15,o.rubberBlack,Yt,-.45-.01,.65-.1),tn=u(.06,.015,.15,o.rubberBlack,Yt,-.45-.01,-.65+.1);y.add(Jt,_e,tn),[-1.65/2+.04,1.65/2-.04].forEach(hn=>{let qi=M(.012,.012,1.35,10,o.stainless,Yt,.20500000000000004,hn),Zi=M(.024,.024,.03,6,o.aluFrame,Yt,-.45-.07,hn),Nn=M(.024,.024,.03,6,o.aluFrame,Yt,-.45+1.35-.04,hn);y.add(qi,Zi,Nn)})}),[-.5,-.3].forEach(Yt=>{let Ae=M(.018,.018,.04,12,o.brassGold,Yt,.47000000000000003,.2);y.add(Ae)});let cn=u(.22,.14,.01,o.aluFrame,-.4,.15,.65+.02),de=u(.18,.1,.012,o.touchscreen,-.4,.15,.65+.022);y.add(cn,de)}function rt(y,Y,j,xt,At){let Ot=u(.04,.06,xt+.14,At.aluFrame,Y,j/2+.03,0),at=u(.04,.06,xt+.14,At.aluFrame,Y,-j/2-.06/2,0),Pt=u(.04,j+.14,.06,At.aluFrame,Y,0,xt/2+.06/2),ut=u(.04,j+.14,.06,At.aluFrame,Y,0,-xt/2-.06/2);y.add(Ot,at,Pt,ut),[[j/2+.06/2,xt/2+.06/2],[j/2+.06/2,-xt/2-.06/2],[-j/2-.06/2,xt/2+.06/2],[-j/2-.06/2,-xt/2-.06/2]].forEach(([dt,Ne])=>{let ke=u(.05,.09,.09,At.galvSteel,Y,dt,Ne),Qe=M(.012,.012,.04+.02,8,At.doorHandle,Y,dt,Ne,0,Math.PI/2);y.add(ke,Qe)})}function K(y,Y,j,xt,At){rt(y,Y-.025,j,xt,At),rt(y,Y+.025,j,xt,At);let Ft=u(.015,j+.08,xt+.08,At.rubberBlack,Y,0,0);y.add(Ft),[[j/2+.03,xt/2+.03],[j/2+.03,-xt/2-.03],[-j/2-.03,xt/2+.03],[-j/2-.03,-xt/2-.03]].forEach(([at,Pt])=>{let ut=M(.014,.014,.12,10,At.stainless,Y,at,Pt,0,Math.PI/2),Ht=M(.022,.022,.03,6,At.doorHandle,Y+.05,at,Pt,0,Math.PI/2);y.add(ut,Ht)}),[[j/2+.05,0],[-j/2-.05,0],[0,xt/2+.05],[0,-xt/2-.05]].forEach(([at,Pt])=>{let ut=u(.08,.04,.04,At.doorHandle,Y,at,Pt),Ht=M(.01,.01,.06,8,At.stainless,Y,at+(at!==0?Math.sign(at)*.025:0),Pt+(Pt!==0?Math.sign(Pt)*.025:0));y.add(ut,Ht)})}function nt(y){let Ft=M(.75,.75,1.8,36,o.stainless,-1.5,0,0,0,Math.PI/2,!0);y.add(Ft);let Tt=1.8,Ot=M(.75,.75,Tt,36,o.stainless,2.4-Tt/2,0,0,0,Math.PI/2,!0);y.add(Ot);let at=1.2,Pt=M(.75,.75,at,28,o.stainless,0,0,0,0,Math.PI/2,!0,Math.PI/3,4*Math.PI/3);y.add(Pt);let ut=M(.75+.002,.75+.002,at,24,o.panelCutaway,0,0,0,0,Math.PI/2,!0,-Math.PI/3,2*Math.PI/3);y.add(ut),B(ut,o.stainless,o.panelCutaway);let Ht=u(at,.02,.45,o.stainless,0,-.75+.03,0),dt=u(.015,.35,.7,o.stainless,0,-.75+.2,0);y.add(Ht,dt),[-.58,.58].forEach(lt=>{let Dt=M(.745,.745,.02,32,o.aluFrame,lt,0,0,0,Math.PI/2,!0);y.add(Dt)});let Ne=u(4.8-.2,.02,.5,o.stainless,0,-.75+.02,0);y.add(Ne);let ke=u(4.8-.02,.02,.035,o.aluFrame,0,.75+.009,0);y.add(ke);for(let lt=-2.4+.2;lt<=2.4-.2;lt+=.25){let Dt=u(.015,.024,.042,o.stainless,lt,.761,0);y.add(Dt)}[-2.4+.06,2.4-.06].forEach(lt=>{let Dt=M(.762,.762,.03,32,o.aluFrame,lt,0,0,0,Math.PI/2,!0);y.add(Dt)}),[-2.4,2.4].forEach(lt=>{let Dt=M(.9299999999999999,.9299999999999999,.08,36,o.stainless,lt,0,0,0,Math.PI/2,!0),gt=M(.75+.18,.75-.02,.06,36,o.aluFrame,lt,0,0,0,Math.PI/2);y.add(Dt,gt);let Xt=M(.75+.12,.75,.02,32,o.rubberBlack,lt+(lt<0?-.045:.045),0,0,0,Math.PI/2);y.add(Xt);for(let ue=0;ue<12;ue++){let oe=ue/12*Math.PI*2,jt=Math.sin(oe)*(.75+.09),Ee=Math.cos(oe)*(.75+.09),bt=M(.014,.014,.12,10,o.stainless,lt,jt,Ee,0,Math.PI/2),Ie=M(.022,.022,.035,6,o.doorHandle,lt+(lt<0?.05:-.05),jt,Ee,0,Math.PI/2);y.add(bt,Ie)}});let Qe=-1.2,se=M(.05,.05,.08,16,o.stainless,Qe,-.75-.04,0),ln=M(.03,.03,.08,14,o.stainless,Qe,-.75-.11,0),yn=u(.09,.09,.08,o.brassGold,Qe,-.75-.18,0),b=M(.015,.015,.06,10,o.stainless,Qe,-.75-.18,.06,Math.PI/2,0),C=u(.18,.025,.015,o.heatingFin,Qe+.08,-.75-.18,.09),H=M(.025,.025,.06,12,o.brassGold,Qe,-.75-.25,0);y.add(se,ln,yn,b,C,H);let F=1.3,P=M(.28,.28,.05,24,o.aluFrame,F,0,.75+.02,Math.PI/2),ct=M(.25,.25,.06,24,o.stainless,F,0,.75+.03,Math.PI/2),mt=M(.26,.26,.02,24,o.rubberBlack,F,0,.75+.01,Math.PI/2);y.add(P,ct,mt),[-.11,.11].forEach(lt=>{let Dt=M(.01,.01,.06,8,o.stainless,F+lt,0,.81,Math.PI/2),gt=M(.045,.045,.03,12,o.doorHandle,F+lt,0,.75+.08,Math.PI/2);y.add(Dt,gt)});let ot=M(.004,.004,.25,6,o.aluFrame,F,-.16,.75+.03);y.add(ot),[-1.8,1.7].forEach(lt=>{let Dt=M(.81,.81,.08,36,o.baseSkid,lt,0,0,0,Math.PI/2,!0),gt=u(.08,.08,.04,o.baseSkid,lt,.75+.06,0),Xt=u(.08,.08,.04,o.baseSkid,lt,-.75-.06,0);y.add(Dt,gt,Xt);let ue=.75,oe=M(.012,.012,ue,10,o.stainless,lt,.75+.06+ue/2,0),jt=M(.025,.025,.035,6,o.aluFrame,lt,.75+.1,0);y.add(oe,jt)});let St=u(.2,.12,.01,o.aluFrame,-1.2,.2,.75+.02),ht=u(.16,.08,.012,o.touchscreen,-1.2,.2,.75+.022);y.add(St,ht)}function st(y){let At=M(.75,.75,1.8,36,o.galvSteel,-1.5,0,0,0,Math.PI/2,!0);y.add(At);let Tt=M(.75,.75,.6,36,o.galvSteel,.9,0,0,0,Math.PI/2,!0);y.add(Tt);let Ot=1.2,at=M(.75,.75,Ot,28,o.galvSteel,0,0,0,0,Math.PI/2,!0,Math.PI/3,4*Math.PI/3);y.add(at);let Pt=M(.75+.002,.75+.002,Ot,24,o.panelCutaway,0,0,0,0,Math.PI/2,!0,-Math.PI/3,2*Math.PI/3);y.add(Pt),B(Pt,o.galvSteel,o.panelCutaway),[-2.2,-1.75,-1.3,-.85,-.4,.05,.5,.95].forEach(Xt=>{let ue=M(.766,.766,.038,36,o.aluFrame,Xt,0,0,0,Math.PI/2,!0),oe=M(.75+.024,.75+.024,.014,36,o.galvSteel,Xt+.008,0,0,0,Math.PI/2,!0);y.add(ue,oe)});let Ht=M(.75+.02,.75+.02,.22,36,o.aluFrame,1.31,0,0,0,Math.PI/2,!0),dt=M(.75+.038,.75+.038,.035,36,o.galvSteel,1.21,0,0,0,Math.PI/2,!0);y.add(Ht,dt);let Ne=M(.75+.032,.75+.032,.028,36,o.rubberBlack,1.33,0,0,0,Math.PI/2,!0),ke=M(.75+.032,.75+.032,.028,36,o.rubberBlack,1.39,0,0,0,Math.PI/2,!0);y.add(Ne,ke);for(let Xt=0;Xt<8;Xt++){let ue=Xt/8*Math.PI*2,oe=Math.sin(ue)*(.75+.028),jt=Math.cos(ue)*(.75+.028),Ee=M(.009,.009,.025,8,o.stainless,1.36,oe,jt,0,Math.PI/2);y.add(Ee)}[{cx:1.6,cy:.12,rotZ:.19},{cx:1.88,cy:.42,rotZ:.58},{cx:2.05,cy:.82,rotZ:.98},{cx:2.12,cy:1.28,rotZ:1.37}].forEach(Xt=>{let oe=M(.745,.745,.46,28,o.galvSteel,Xt.cx,Xt.cy,0,0,Math.PI/2-Xt.rotZ,!0),jt=M(.75+.018,.75+.018,.025,28,o.aluFrame,Xt.cx,Xt.cy,0,0,Math.PI/2-Xt.rotZ,!0);y.add(oe,jt)});let se=M(.75-.005,.75-.005,.45,32,o.galvSteel,2.15,1.7,0,0,0,!0),ln=M(.75+.018,.75+.018,.03,32,o.aluFrame,2.15,1.92,0,0,0,!0);y.add(se,ln);let yn=u(.02,.45,.8,o.aluFrame,1.25,.1,0);y.add(yn);let b=M(.75+.018,.75+.018,.22,36,o.motorTeal,-2.25,0,0,0,Math.PI/2,!0),C=M(.75+.025,.75+.025,.02,36,o.aluFrame,-2.36,0,0,0,Math.PI/2,!0),H=M(.75+.025,.75+.025,.02,36,o.aluFrame,-2.14,0,0,0,Math.PI/2,!0);y.add(b,C,H);let F=u(.24,.15,.01,o.aluFrame,-1.2,.25,.75+.02),P=u(.2,.11,.012,o.touchscreen,-1.2,.25,.75+.022);y.add(F,P);let ct=-1.2,mt=M(.75+.05,.75+.05,.08,36,o.baseSkid,ct,0,0,0,Math.PI/2,!0),ot=M(.75+.022,.75+.022,.07,36,o.rubberBlack,ct,0,0,0,Math.PI/2,!0),St=u(.08,.08,.05,o.baseSkid,ct,.75+.05,0),ht=u(.08,.08,.05,o.baseSkid,ct,-.75-.05,0);y.add(mt,ot,St,ht);let lt=.75,Dt=M(.012,.012,lt,10,o.stainless,ct,.75+.05+lt/2,0),gt=M(.025,.025,.035,6,o.aluFrame,ct,.75+.09,0);y.add(Dt,gt)}function qt(y,Y){if(Y==="galvaniz-kanal"){J(y);return}if(Y==="paslanmaz-kanal"){nt(y);return}if(Y==="spiral-kanal"){st(y);return}J(y)}function Gt(y,Y){if(Y==="menfez"){y.add(u(.24,.14,3.4+.2,o.aluFrame,0,2.2/2+.05,0),u(.24,.14,3.4+.2,o.aluFrame,0,-2.2/2-.05,0),u(.24,2.2,.14,o.aluFrame,0,0,3.4/2+.05),u(.24,2.2,.14,o.aluFrame,0,0,-3.4/2-.05));for(let Ft=-2.2/2+.2;Ft<=2.2/2-.15;Ft+=.24){let Tt=u(.08,.02,3.3,o.damperBlade,.09,Ft,0);Tt.rotation.z=.22,y.add(Tt)}for(let Ft=-3.4/2+.25;Ft<=3.4/2-.2;Ft+=.28){let Tt=u(.06,2.1500000000000004,.02,o.damperBlade,0,0,Ft);Tt.rotation.y=.2,y.add(Tt)}y.add(u(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,2.2/2-.04,0),u(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,-2.2/2+.04,0)),y.add(u(.08,.12,.08,o.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(Y==="difuzor"){y.add(u(3.4,.03,1.5,o.galvSteel,0,1.3/2+.3,0),u(3.4,1.3,.03,o.galvSteel,0,.3,-1.5/2),u(3.4,1.3,.03,o.galvSteel,0,.3,1.5/2)),y.add(M(.42,.42,.35,24,o.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),y.add(u(3.4+.2,.06,1.5+.2,o.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(Tt=>{y.add(u(3.4-.1,.04,.06,o.doorHandle,0,-1.3/2+.26,Tt))});let Ft=u(1.8,.04,1.8,o.panelSolid,0,-1,0);y.add(Ft);for(let Tt=0;Tt<16;Tt++){let Ot=Tt/16*Math.PI*2,at=u(.03,.02,.36,o.doorHandle,Math.sin(Ot)*.55,-.98,Math.cos(Ot)*.55);at.rotation.y=Ot+.5,y.add(at)}}else{y.add(u(1.4,.04,2.4,o.galvSteel,0,2.2/2,0),u(1.4,.04,2.4,o.galvSteel,0,-2.2/2,0),u(1.4,2.2,.04,o.galvSteel,0,0,-2.4/2),u(1.4,2.2,.04,o.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(Tt=>{y.add(u(.08,.14,2.4+.2,o.aluFrame,Tt,2.2/2+.05,0),u(.08,.14,2.4+.2,o.aluFrame,Tt,-2.2/2-.05,0),u(.08,2.2,.14,o.aluFrame,Tt,0,2.4/2+.05),u(.08,2.2,.14,o.aluFrame,Tt,0,-2.4/2-.05))});for(let Tt=-2.2/2+.35;Tt<=2.2/2-.25;Tt+=.5){let Ot=u(.35,.04,2.28,o.damperBlade,0,Tt,0);Ot.rotation.z=.35,y.add(Ot)}y.add(u(.03,2.2-.4,.03,o.brassGold,.15,0,2.4/2-.08));let Ft=u(.22,.34,.18,o.actuatorOrange,.1,.2,2.4/2+.14);y.add(Ft),y.add(M(.025,.025,.15,12,o.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),y.add(M(.03,.03,.12,12,o.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function Be(y){y.add(u(4.4,.04,2.2,o.galvSteel,0,2.4/2,0),u(4.4,.04,2.2,o.galvSteel,0,-2.4/2,0),u(4.4,2.4,.04,o.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(ut=>{y.add(u(.08,.12,2.2+.2,o.aluFrame,ut,2.4/2+.04,0),u(.08,.12,2.2+.2,o.aluFrame,ut,-2.4/2-.04,0),u(.08,2.4,.12,o.aluFrame,ut,0,2.2/2+.04),u(.08,2.4,.12,o.aluFrame,ut,0,-2.2/2-.04))});let At=u(4.4-.1,2.4-.1,.03,o.panelCutaway,0,0,2.2/2,!1,!1);y.add(At),I.push(At);let Ft=u(.12,2.4-.2,2.2-.2,o.aluFrame,-1.4,0,0),Tt=u(.1,2.4-.25,2.2-.25,o.filterCloth,-1.4,0,0);y.add(Ft,Tt),y.add(u(.1,2.4-.2,2.2-.2,o.aluFrame,-.2,0,0));for(let ut=0;ut<4;ut++){let Ht=-.7+ut*.46,dt=new Xe(new Ei(.2,1.1,4),o.filterCloth);dt.rotateZ(-Math.PI/2),dt.position.set(.4,0,Ht),dt.scale.set(1,1.3,.75),y.add(dt)}let Ot=u(.25,2.4-.2,2.2-.2,o.aluFrame,1.4,0,0),at=u(.22,2.4-.26,2.2-.26,o.filterCloth,1.4,0,0),Pt=u(.26,2.4-.18,.04,o.coolingFin,1.4,0,2.2/2-.1);y.add(Ot,at,Pt),[-1,.6].forEach(ut=>{y.add(M(.09,.09,.04,16,o.aluFrame,ut,.6,2.2/2+.03,Math.PI/2))})}function ve(y,Y){if(Y==="vrf-dis"){y.add(u(3.2,3.6,.04,o.panelSolid,0,0,-2/2),u(3.2,.04,2,o.panelSolid,0,3.6/2,0),u(3.2,.12,2,o.baseSkid,0,-3.6/2,0),u(.04,3.6-.2,2-.1,o.coolingFin,-3.2/2,.05,0),u(.04,3.6-.2,2-.1,o.coolingFin,3.2/2,.05,0));let Ft=u(3.2-.1,3.6-.2,.03,o.panelCutaway,0,.05,2/2,!1,!1);y.add(Ft),I.push(Ft);let Tt=M(.82,.82,.22,28,o.fanHousing,0,3.6/2+.11,0,0,0,!0),Ot=M(.72,.72,.05,4,o.fanImpeller,0,3.6/2+.14,0);y.add(Tt,Ot),w.push(()=>{Ot.rotation.y+=.16}),[-.6,.6].forEach(at=>{y.add(M(.26,.26,.9,16,o.motorCast,at,-3.6/2+.6,-.2))}),y.add(M(.22,.22,1.1,16,o.motorCast,-1.1,-3.6/2+.7,.2)),y.add(u(3.2-.2,2.6,.1,o.coolingFin,0,.2,-2/2+.08)),y.add(u(.22,.18,.14,o.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(Y==="vrf-ic"){let j=new Ge;j.rotation.x=-Math.PI+.55,y.add(j);let xt=u(2.8,.8,2.8,o.galvSteel,0,.5,0),At=u(3.2,.08,3.2,o.panelSolid,0,.05,0);j.add(xt,At);let Ft=u(1.6,.02,1.6,o.filterCloth,0,.02,0);j.add(Ft),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([Ot,at,Pt])=>{let ut=u(1.7,.03,.16,o.doorHandle,Ot,.01,at);ut.rotation.y=Pt,j.add(ut)});let Tt=M(.65,.65,.35,20,o.fanImpeller,0,.5,0);j.add(Tt),w.push(()=>{Tt.rotation.y+=.14}),j.add(u(.18,.22,.18,o.actuatorOrange,1.3,.5,.8)),j.add(M(.04,.04,.3,12,o.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let Ft=u(4.6,.04,2,o.stainless,0,.8,-.3),Tt=u(4.6,1.6,.04,o.stainless,0,0,-2.6/2),Ot=u(.04,1.6,2.6,o.stainless,-4.6/2,0,0),at=u(.04,1.6,2.6,o.stainless,4.6/2,0,0),Pt=u(4.6,.9,.04,o.stainless,0,.25,2.6/2-.2);Pt.rotation.x=.5,y.add(Ft,Tt,Ot,at,Pt),y.add(M(.55,.55,.3,24,o.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let ut=-4.6/2+.6;ut<=4.6/2-.6;ut+=.75){let Ht=u(.68,.04,1.3,o.aluFrame,ut,-.2,.1);Ht.rotation.x=-.4,y.add(Ht)}y.add(M(.1,.08,.18,16,o.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),y.add(M(.02,.02,4.6-.6,12,o.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(ut=>{let Ht=M(.035,.02,.09,10,o.brassGold,ut,-.12,.85);y.add(Ht)}),y.add(u(.14,.2,.08,o.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}e==="tks"?k(S):e==="thks"?G(S):e==="rooftop"?N(S):e==="galvaniz-kanal"?J(S):e==="paslanmaz-kanal"?nt(S):e==="spiral-kanal"?st(S):["thrv-dx","hrv"].includes(e)?W(S,e):["tdf","yangin-fani","jet-fan"].includes(e)?$(S,e):["menfez","difuzor","damper"].includes(e)?Gt(S,e):e==="filtre"?Be(S):["vrf-dis","vrf-ic","davlumbaz"].includes(e)?ve(S,e):k(S),S.updateMatrixWorld(!0);let Se=new oi().setFromObject(S),X=Se.getSize(new O),Q=Se.getCenter(new O);S.position.sub(Q);let Nt=-X.y/2;L.position.y=Nt-.05,T.position.y=Nt-.04;let ne=Math.max(X.x,X.y,X.z),Lt=l.fov*(Math.PI/180),ae=Math.abs(ne/2/Math.tan(Lt/2))*1.05;ae=Math.max(ae,3.8);let qe=new O(ae*.72,ae*.38,ae*.74),ce=new O(0,0,0);l.position.copy(qe),l.lookAt(ce),h.target.copy(ce),h.update();let ye=null;function De(y,Y,j=650){let xt=l.position.clone(),At=h.target.clone(),Ft=performance.now();ye={update:Tt=>{let Ot=Tt-Ft,at=Math.min(1,Ot/j),Pt=at*at*(3-2*at);l.position.lerpVectors(xt,y,Pt),h.target.lerpVectors(At,Y,Pt),h.update(),at>=1&&(ye=null)}}}let he=new Ge;s.add(he);let Te=80,Je=[],xn=new Float32Array(Te*3),Re=new Float32Array(Te*3),Ye=e==="tks",U=e==="thks",je=e==="rooftop",be=e==="galvaniz-kanal",A=e==="paslanmaz-kanal",x=e==="spiral-kanal",z=Ye||U,V=Math.max(2,X.x/2+.4),q=Math.max(1,X.y*.45),ft=Math.max(1,X.z*.45);for(let y=0;y<Te;y++){let Y=z?y<Te*.7:je?y<Te*.6:y<Te*.65;Je.push({isSupply:Y,progress:Math.random(),speed:(z?.006:be||A||x?.009:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(z?.35:q),offsetZ:(Math.random()-.5)*(z?.7:ft)}),Y?(Re[y*3]=.02,Re[y*3+1]=.65,Re[y*3+2]=.98):(Re[y*3]=.95,Re[y*3+1]=.45,Re[y*3+2]=.12)}let pt=new mn;pt.setAttribute("position",new En(xn,3)),pt.setAttribute("color",new En(Re,3));let Z=document.createElement("canvas");Z.width=32,Z.height=32;let et=Z.getContext("2d"),_t=et.createRadialGradient(16,16,0,16,16,16);_t.addColorStop(0,"rgba(255, 255, 255, 1)"),_t.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),_t.addColorStop(1,"rgba(0, 0, 0, 0)"),et.fillStyle=_t,et.fillRect(0,0,32,32);let kt=new Gs(Z),Et=new Vs({size:.15,map:kt,transparent:!0,opacity:.85,vertexColors:!0,blending:zr,depthWrite:!1}),Mt=new Rr(pt,Et);he.add(Mt),w.push(()=>{if(!Ce.cfdEnabled){he.visible=!1;return}he.visible=!0;let y=pt.attributes.position.array;for(let Y=0;Y<Te;Y++){let j=Je[Y];if(j.progress+=j.speed,j.progress>1&&(j.progress=0),z)j.isSupply?(y[Y*3]=-4.3+j.progress*8.6,y[Y*3+1]=-.65+Math.sin(j.progress*Math.PI*4)*.08+j.offsetY,y[Y*3+2]=j.offsetZ):(y[Y*3]=1.2-j.progress*5.5,y[Y*3+1]=.65+j.offsetY,y[Y*3+2]=j.offsetZ);else if(je)if(j.isSupply){let xt=-.4+j.progress*2.8;if(y[Y*3]=xt,j.progress>.8){let At=(j.progress-.8)/.2;y[Y*3+1]=.05-At*1.35+j.offsetY*.4}else y[Y*3+1]=.05+Math.sin(j.progress*Math.PI*3)*.06+j.offsetY*.6;y[Y*3+2]=j.offsetZ*.7}else{let xt=Y%2===0?-2.2:-1.2;y[Y*3]=xt+Math.sin(Y*1.5+j.progress*6.28)*.22,y[Y*3+1]=-.2+j.progress*2.1,y[Y*3+2]=Math.cos(Y*1.5+j.progress*6.28)*.22}else if(be){let xt=-2.7+j.progress*5.1;y[Y*3]=xt,y[Y*3+1]=Math.sin(j.progress*Math.PI*2+Y)*.06+j.offsetY*.5,y[Y*3+2]=j.progress>.7&&Y%3===0?-.3-(j.progress-.7)*1.5:j.offsetZ*.75}else if(A){let xt=-2.5+j.progress*5;y[Y*3]=xt,y[Y*3+1]=-Q.y+Math.sin(j.progress*Math.PI*2+Y)*.035+j.offsetY*.22,y[Y*3+2]=j.offsetZ*.45}else if(x)if(j.progress<.68){let xt=j.progress/.68;y[Y*3]=-2.5+xt*3.7,y[Y*3+1]=-Q.y+Math.sin(xt*Math.PI*2+Y)*.03+j.offsetY*.2,y[Y*3+2]=j.offsetZ*.4}else{let At=(j.progress-.68)/.32*(Math.PI/2);y[Y*3]=1.2+Math.sin(At)*.95,y[Y*3+1]=-Q.y+(1-Math.cos(At))*1.7+j.offsetY*.15,y[Y*3+2]=j.offsetZ*.35}else y[Y*3]=-V+j.progress*(V*2),y[Y*3+1]=(j.isSupply?-.2:.2)+j.offsetY,y[Y*3+2]=j.offsetZ}pt.attributes.position.needsUpdate=!0});let zt=new Ge;s.add(zt);function Zt(y){let Y=document.createElement("canvas");Y.width=64,Y.height=64;let j=Y.getContext("2d");j.fillStyle="#0284c7",j.beginPath(),j.arc(32,32,28,0,Math.PI*2),j.fill(),j.lineWidth=4,j.strokeStyle="#ffffff",j.stroke(),j.fillStyle="#ffffff",j.font="bold 26px sans-serif",j.textAlign="center",j.textBaseline="middle",j.fillText(y,32,33);let xt=new Gs(Y);return xt.minFilter=sn,xt}let ie=n&&n.hotspots&&n.hotspots.length>0?n.hotspots:[{num:"01",title:"G\xF6vde & Ta\u015F\u0131y\u0131c\u0131 Mimarisi",desc:"Eurovent ve TSE standartlar\u0131nda y\xFCksek mukavemetli karkas."},{num:"02",title:"Y\xFCksek Verimli \u0130\xE7 Aksam",desc:"Optimize edilmi\u015F aerodinamik komponentler ve d\xFC\u015F\xFCk enerji t\xFCketimi."},{num:"03",title:"Hava Da\u011F\u0131t\u0131m & Kontrol",desc:"Hassas debi kalibrasyonu ve s\u0131zd\u0131rmaz ba\u011Flant\u0131 elemanlar\u0131."}],D=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],yt=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],tt=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],vt=[[1.35,.15,.75],[.4,.52,.75],[-.8,.48,.75],[-1.6,.48,.75]],Ct=[[-1.2,-Q.y+.35,.85],[0,-Q.y+.82,0],[-1.2,-Q.y-.98,.2]],it=[[-.85,-Q.y+.82,0],[1.36,-Q.y+.85,0],[0,-Q.y+.15,.85],[-2.25,-Q.y+.82,0]],Vt=[];ie.forEach((y,Y)=>{let j=new Ge,xt,At,Ft;if(Ye&&D[Y])[xt,At,Ft]=D[Y];else if(U&&yt[Y])[xt,At,Ft]=yt[Y];else if(je&&tt[Y])[xt,At,Ft]=tt[Y];else if(be&&vt[Y])[xt,At,Ft]=vt[Y];else if(A&&Ct[Y])[xt,At,Ft]=Ct[Y];else if(x&&it[Y])[xt,At,Ft]=it[Y];else{let Pt=ie.length,ut=X.z>X.x,Ht=ut?X.z:X.x,dt=-Ht/2+.4+Y/Math.max(1,Pt-1)*(Ht-.8);xt=ut?X.x/2+.4:dt,At=Y%2===0?-.2:.4,Ft=ut?dt:X.z/2+.4}j.position.set(xt,At,Ft);let Tt=new Xe(new is(.012,.012,.25,8),new Ni({color:165063}));Tt.position.y=-.12;let Ot=new zs({map:Zt(y.num||`0${Y+1}`),depthTest:!1}),at=new wr(Ot);at.scale.set(.42,.42,1),at.position.y=.05,at.userData={hotspot:y,pos:[xt,At,Ft]},j.add(Tt,at),zt.add(j),j.userData={hotspot:y,pos:[xt,At,Ft]},Vt.push(at)});let Bt=new Or,Pe=new Wt;function we(y){let Y=c.domElement.getBoundingClientRect();Pe.x=(y.clientX-Y.left)/Y.width*2-1,Pe.y=-((y.clientY-Y.top)/Y.height)*2+1,Bt.setFromCamera(Pe,l);let j=Bt.intersectObjects(Vt,!0);if(j.length>0){let xt=j[0].object;for(;xt.parent&&!xt.userData.hotspot;)xt=xt.parent;if(xt&&xt.userData.hotspot){showHotspotCard(xt.userData.hotspot);let At=xt.userData.pos;if(At){let Ft=new O(At[0],At[1],At[2]),Tt=new O(At[0]*.8+1.2,At[1]+.5,At[2]+2.8);De(Tt,Ft,700)}}}}c.domElement.addEventListener("click",we);let Ce={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};jg(),Qg(t,n,{onToggleRotate:()=>{Ce.autoRotate=!Ce.autoRotate,h.autoRotate=Ce.autoRotate,wi("btn-rotate",Ce.autoRotate)},onToggleCfd:()=>{Ce.cfdEnabled=!Ce.cfdEnabled,wi("btn-cfd",Ce.cfdEnabled)},onToggleCutaway:()=>{Ce.cutawayEnabled=!Ce.cutawayEnabled,I.forEach(y=>{let Y=y.userData.solidMat||o.panelSolid,j=y.userData.cutawayMat||o.panelCutaway;y.material=Ce.cutawayEnabled?j:Y}),wi("btn-cutaway",Ce.cutawayEnabled)},onToggleView:()=>{let Y=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),j=Y&&window.getComputedStyle(Y).display!=="none";Y&&(j?(Y.style.display="none",t.style.display="block",Ce.viewMode="3d",wi("btn-view",!1),er()):(Y.style.display="flex",t.style.display="none",Ce.viewMode="2d",wi("btn-view",!0)))},onResetCamera:()=>{De(qe,ce,650),window.closeHotspotCard()}}),wi("btn-rotate",Ce.autoRotate),wi("btn-cfd",Ce.cfdEnabled),wi("btn-cutaway",Ce.cutawayEnabled),wi("btn-view",Ce.viewMode==="2d");let Dn=null;function Qr(){Dn=requestAnimationFrame(Qr),ye?ye.update(performance.now()):h.update();for(let y=0;y<w.length;y++)w[y]();c.render(s,l)}Qr();function er(){if(!t)return;let y=t.clientWidth,Y=t.clientHeight||480;y>0&&Y>0&&(l.aspect=y/Y,l.updateProjectionMatrix(),c.setSize(y,Y))}return window.addEventListener("resize",er),{destroy:()=>{cancelAnimationFrame(Dn),window.removeEventListener("resize",er),c.dispose()}}}function jg(){if(document.getElementById("sky-3d-hud-styles"))return;let i=document.createElement("style");i.id="sky-3d-hud-styles",i.textContent=`
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
  `,document.head.appendChild(i)}function Qg(i,t,e){let n=i.closest(".sky-vlog-hero")||i.parentElement||i,s=n.querySelector(".sky-3d-hud-container");s&&s.remove(),s=document.createElement("div"),s.className="sky-3d-hud-container",s.innerHTML=`
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
  `,n.appendChild(r),document.getElementById("btn-rotate").addEventListener("click",e.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",e.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",e.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",e.onToggleView),document.getElementById("btn-reset").addEventListener("click",e.onResetCamera)}function wi(i,t){let e=document.getElementById(i);e&&(t?e.classList.add("active"):e.classList.remove("active"))}window.showHotspotCard=function(i){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=i.num||"01",document.getElementById("sky-card-title").textContent=i.title||"",document.getElementById("sky-card-desc").textContent=i.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let i=document.getElementById("sky-3d-hotspot-card");i&&(i.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Fu()):Fu();export{Fu as initSky3DProduct};
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
