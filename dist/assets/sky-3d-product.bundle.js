var so="186",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hh=0,Bl=1,uh=2;var is=1,dh=2,Ws=3,ki=0,wn=1,Le=2,li=0,Xs=1,Fr=2,Hl=3,zl=4,fh=5;var ss=100,ph=101,mh=102,gh=103,_h=104,xh=200,yh=201,vh=202,Mh=203,kl=204,Vl=205,Sh=206,bh=207,Eh=208,Th=209,wh=210,Ah=211,Ch=212,Rh=213,Ph=214,Sa=0,ba=1,Ea=2,Ps=3,Ta=4,wa=5,Aa=6,Ca=7,Gl=0,Ih=1,Lh=2,ti=0,Wl=1,Xl=2,Yl=3,Ur=4,ql=5,Zl=6,Jl=7;var Kl=300,Vi=301,rs=302,ro=303,ao=304,Or=306,Ra=1e3,ri=1001,Pa=1002,cn=1003,Dh=1004;var Br=1005;var en=1006,oo=1007;var Gi=1008;var Rn=1009,$l=1010,jl=1011,Ys=1012,lo=1013,ei=1014,ni=1015,ii=1016,co=1017,ho=1018,qs=1020,Ql=35902,tc=35899,ec=1021,nc=1022,Yn=1023,ai=1026,Wi=1027,ic=1028,uo=1029,Xi=1030,fo=1031;var po=1033,Hr=33776,zr=33777,kr=33778,Vr=33779,mo=35840,go=35841,_o=35842,xo=35843,yo=36196,vo=37492,Mo=37496,So=37488,bo=37489,Gr=37490,Eo=37491,To=37808,wo=37809,Ao=37810,Co=37811,Ro=37812,Po=37813,Io=37814,Lo=37815,Do=37816,No=37817,Fo=37818,Uo=37819,Oo=37820,Bo=37821,Ho=36492,zo=36494,ko=36495,Vo=36283,Go=36284,Wr=36285,Wo=36286;var ur=2300,Ia=2301,va=2302,Rl=2303,Pl=2400,Il=2401,Ll=2402;var Nh=3200;var Xo=0,Fh=1,Ei="",Fn="srgb",dr="srgb-linear",fr="linear",Re="srgb";var Ma=7680;var Uh=519,Oh=512,Bh=513,Hh=514,Yo=515,zh=516,kh=517,qo=518,Vh=519,sc=35044;var rc="300 es",jn=2e3,Is=2001;function Yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gh(){let i=pr("canvas");return i.style.display="block",i}var Lc={},Ls=null;function mr(...i){let t="THREE."+i.shift();Ls?Ls("log",t,...i):console.log(t,...i)}function Wh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=Wh(i);let t="THREE."+i.shift();if(Ls)Ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Wh(i);let t="THREE."+i.shift();if(Ls)Ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qi(...i){let t=i.join(" ");t in Lc||(Lc[t]=!0,qt(...i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yh={[Sa]:ba,[Ea]:Aa,[Ta]:Ca,[Ps]:wa,[ba]:Sa,[Aa]:Ea,[Ca]:Ta,[wa]:Ps},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,cr=Math.PI/180,Ds=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function ac(i,t){return(i%t+t)%t}function Zu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ju(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function Ku(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function $u(i,t=1){return t-Math.abs(ac(i,t*2)-t)}function ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function td(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ed(i,t){return i+Math.random()*(t-i)}function nd(i){return i*(.5-Math.random())}function id(i){i!==void 0&&(Dc=i);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sd(i){return i*cr}function rd(i){return i*Ds}function ad(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cd(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),f=a((t+n)/2),g=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(l*f,c*g,c*d,l*h);break;case"YZY":i.set(c*d,l*f,c*g,l*h);break;case"ZXZ":i.set(c*g,c*d,l*f,l*h);break;case"XZX":i.set(l*f,c*v,c*m,l*h);break;case"YXY":i.set(c*m,l*f,c*v,l*h);break;case"ZYZ":i.set(c*v,c*m,l*f,l*h);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oc={DEG2RAD:cr,RAD2DEG:Ds,generateUUID:yi,clamp:pe,euclideanModulo:ac,mapLinear:Zu,inverseLerp:Ju,lerp:hr,damp:Ku,pingpong:$u,smoothstep:ju,smootherstep:Qu,randInt:td,randFloat:ed,randFloatSpread:nd,seededRandom:id,degToRad:sd,radToDeg:rd,isPowerOfTwo:ad,ceilPowerOfTwo:od,floorPowerOfTwo:ld,setQuaternionFromProperEuler:cd,normalize:Ie,denormalize:$n},Gt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],f=n[s+2],g=n[s+3],d=r[a+0],m=r[a+1],v=r[a+2],E=r[a+3];if(g!==E||c!==d||h!==m||f!==v){let _=c*d+h*m+f*v+g*E;_<0&&(d=-d,m=-m,v=-v,E=-E,_=-_);let p=1-l;if(_<.9995){let C=Math.acos(_),I=Math.sin(C);p=Math.sin(p*C)/I,l=Math.sin(l*C)/I,c=c*p+d*l,h=h*p+m*l,f=f*p+v*l,g=g*p+E*l}else{c=c*p+d*l,h=h*p+m*l,f=f*p+v*l,g=g*p+E*l;let C=1/Math.sqrt(c*c+h*h+f*f+g*g);c*=C,h*=C,f*=C,g*=C}}t[e]=c,t[e+1]=h,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],f=n[s+3],g=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return t[e]=l*v+f*g+c*m-h*d,t[e+1]=c*v+f*d+h*g-l*m,t[e+2]=h*v+f*m+l*d-c*g,t[e+3]=f*v-l*g-c*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),f=l(s/2),g=l(r/2),d=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*f*g+h*m*v,this._y=h*m*g-d*f*v,this._z=h*f*v+d*m*g,this._w=h*f*g-d*m*v;break;case"YXZ":this._x=d*f*g+h*m*v,this._y=h*m*g-d*f*v,this._z=h*f*v-d*m*g,this._w=h*f*g+d*m*v;break;case"ZXY":this._x=d*f*g-h*m*v,this._y=h*m*g+d*f*v,this._z=h*f*v+d*m*g,this._w=h*f*g-d*m*v;break;case"ZYX":this._x=d*f*g-h*m*v,this._y=h*m*g+d*f*v,this._z=h*f*v-d*m*g,this._w=h*f*g+d*m*v;break;case"YZX":this._x=d*f*g+h*m*v,this._y=h*m*g+d*f*v,this._z=h*f*v-d*m*g,this._w=h*f*g-d*m*v;break;case"XZY":this._x=d*f*g-h*m*v,this._y=h*m*g-d*f*v,this._z=h*f*v+d*m*g,this._w=h*f*g+d*m*v;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],f=e[6],g=e[10],d=n+l+g;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>l&&n>g){let m=2*Math.sqrt(1+n-l-g);this._w=(f-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(l>g){let m=2*Math.sqrt(1+l-n-g);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+f)/m}else{let m=2*Math.sqrt(1+g-n-l);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,f=e._w;return this._x=n*f+a*l+s*h-r*c,this._y=s*f+a*c+r*l-n*h,this._z=r*f+a*h+n*c-s*l,this._w=a*f-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),f=Math.sin(h);c=Math.sin(c*h)/f,e=Math.sin(e*h)/f,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),f=2*(l*e-r*s),g=2*(r*n-a*e);return this.x=e+c*h+a*g-l*f,this.y=n+c*f+l*h-r*g,this.z=s+c*g+r*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new O,Nc=new On,ne=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],f=n[4],g=n[7],d=n[2],m=n[5],v=n[8],E=s[0],_=s[3],p=s[6],C=s[1],I=s[4],T=s[7],o=s[2],w=s[5],P=s[8];return r[0]=a*E+l*C+c*o,r[3]=a*_+l*I+c*w,r[6]=a*p+l*T+c*P,r[1]=h*E+f*C+g*o,r[4]=h*_+f*I+g*w,r[7]=h*p+f*T+g*P,r[2]=d*E+m*C+v*o,r[5]=d*_+m*I+v*w,r[8]=d*p+m*T+v*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-n*r*f+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=f*a-l*h,d=l*c-f*r,m=h*r-a*c,v=e*g+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/v;return t[0]=g*E,t[1]=(s*h-f*n)*E,t[2]=(l*n-s*a)*E,t[3]=d*E,t[4]=(f*e-s*c)*E,t[5]=(s*r-l*e)*E,t[6]=m*E,t[7]=(n*c-h*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(t,e)),this}rotate(t){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ol=new ne,Fc=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){let i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Re&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Re&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:Fc,fromXYZ:Uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Fc,fromXYZ:Uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),i}var Me=hd();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,La=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=pr("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ud=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ll(s[a].image)):r.push(ll(s[a]))}else r=ll(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var dd=0,cl=new O,Tn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=en,a=Gi,l=Yn,c=Rn,h=i.DEFAULT_ANISOTROPY,f=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=yi(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Kl;Tn.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],f=c[4],g=c[8],d=c[1],m=c[5],v=c[9],E=c[2],_=c[6],p=c[10];if(Math.abs(f-d)<.01&&Math.abs(g-E)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(g+E)<.1&&Math.abs(v+_)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,T=(m+1)/2,o=(p+1)/2,w=(f+d)/4,P=(g+E)/4,M=(v+_)/4;return I>T&&I>o?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=w/n,r=P/n):T>o?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=M/s):o<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(o),n=P/r,s=M/r),this.set(n,s,r,e),this}let C=Math.sqrt((_-v)*(_-v)+(g-E)*(g-E)+(d-f)*(d-f));return Math.abs(C)<.001&&(C=1),this.x=(_-v)/C,this.y=(g-E)/C,this.z=(d-f)/C,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Tn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,f,g,d,m,v,E,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,f,g,d,m,v,E,_)}set(t,e,n,s,r,a,l,c,h,f,g,d,m,v,E,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=h,p[6]=f,p[10]=g,p[14]=d,p[3]=m,p[7]=v,p[11]=E,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),a=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),f=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*f,m=a*g,v=l*f,E=l*g;e[0]=c*f,e[4]=-c*g,e[8]=h,e[1]=m+v*h,e[5]=d-E*h,e[9]=-l*c,e[2]=E-d*h,e[6]=v+m*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*f,m=c*g,v=h*f,E=h*g;e[0]=d+E*l,e[4]=v*l-m,e[8]=a*h,e[1]=a*g,e[5]=a*f,e[9]=-l,e[2]=m*l-v,e[6]=E+d*l,e[10]=a*c}else if(t.order==="ZXY"){let d=c*f,m=c*g,v=h*f,E=h*g;e[0]=d-E*l,e[4]=-a*g,e[8]=v+m*l,e[1]=m+v*l,e[5]=a*f,e[9]=E-d*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let d=a*f,m=a*g,v=l*f,E=l*g;e[0]=c*f,e[4]=v*h-m,e[8]=d*h+E,e[1]=c*g,e[5]=E*h+d,e[9]=m*h-v,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,m=a*h,v=l*c,E=l*h;e[0]=c*f,e[4]=E-d*g,e[8]=v*g+m,e[1]=g,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=m*g+v,e[10]=d-E*g}else if(t.order==="XZY"){let d=a*c,m=a*h,v=l*c,E=l*h;e[0]=c*f,e[4]=-g,e[8]=h*f,e[1]=d*g+E,e[5]=a*f,e[9]=m*g-v,e[2]=v*g-m,e[6]=l*f,e[10]=E*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,pd)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ai.crossVectors(n,Dn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ai.crossVectors(n,Dn)),Ai.normalize(),Zr.crossVectors(Dn,Ai),s[0]=Ai.x,s[4]=Zr.x,s[8]=Dn.x,s[1]=Ai.y,s[5]=Zr.y,s[9]=Dn.y,s[2]=Ai.z,s[6]=Zr.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],f=n[1],g=n[5],d=n[9],m=n[13],v=n[2],E=n[6],_=n[10],p=n[14],C=n[3],I=n[7],T=n[11],o=n[15],w=s[0],P=s[4],M=s[8],u=s[12],b=s[1],B=s[5],z=s[9],G=s[13],D=s[2],W=s[6],$=s[10],J=s[14],rt=s[3],q=s[7],nt=s[11],st=s[15];return r[0]=a*w+l*b+c*D+h*rt,r[4]=a*P+l*B+c*W+h*q,r[8]=a*M+l*z+c*$+h*nt,r[12]=a*u+l*G+c*J+h*st,r[1]=f*w+g*b+d*D+m*rt,r[5]=f*P+g*B+d*W+m*q,r[9]=f*M+g*z+d*$+m*nt,r[13]=f*u+g*G+d*J+m*st,r[2]=v*w+E*b+_*D+p*rt,r[6]=v*P+E*B+_*W+p*q,r[10]=v*M+E*z+_*$+p*nt,r[14]=v*u+E*G+_*J+p*st,r[3]=C*w+I*b+T*D+o*rt,r[7]=C*P+I*B+T*W+o*q,r[11]=C*M+I*z+T*$+o*nt,r[15]=C*u+I*G+T*J+o*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],f=t[2],g=t[6],d=t[10],m=t[14],v=t[3],E=t[7],_=t[11],p=t[15],C=c*m-h*d,I=l*m-h*g,T=l*d-c*g,o=a*m-h*f,w=a*d-c*f,P=a*g-l*f;return e*(E*C-_*I+p*T)-n*(v*C-_*o+p*w)+s*(v*I-E*o+p*P)-r*(v*T-E*w+_*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10];return e*(a*f-l*h)-n*(r*f-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],f=t[8],g=t[9],d=t[10],m=t[11],v=t[12],E=t[13],_=t[14],p=t[15],C=e*l-n*a,I=e*c-s*a,T=e*h-r*a,o=n*c-s*l,w=n*h-r*l,P=s*h-r*c,M=f*E-g*v,u=f*_-d*v,b=f*p-m*v,B=g*_-d*E,z=g*p-m*E,G=d*p-m*_,D=C*G-I*z+T*B+o*b-w*u+P*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return t[0]=(l*G-c*z+h*B)*W,t[1]=(s*z-n*G-r*B)*W,t[2]=(E*P-_*w+p*o)*W,t[3]=(d*w-g*P-m*o)*W,t[4]=(c*b-a*G-h*u)*W,t[5]=(e*G-s*b+r*u)*W,t[6]=(_*T-v*P-p*I)*W,t[7]=(f*P-d*T+m*I)*W,t[8]=(a*z-l*b+h*M)*W,t[9]=(n*b-e*z-r*M)*W,t[10]=(v*w-E*T+p*C)*W,t[11]=(g*T-f*w-m*C)*W,t[12]=(l*u-a*B-c*M)*W,t[13]=(e*B-n*u+s*M)*W,t[14]=(E*I-v*o-_*C)*W,t[15]=(f*o-g*I+d*C)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,f=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,f*l+n,f*c-s*a,0,h*c-s*l,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,f=a+a,g=l+l,d=r*h,m=r*f,v=r*g,E=a*f,_=a*g,p=l*g,C=c*h,I=c*f,T=c*g,o=n.x,w=n.y,P=n.z;return s[0]=(1-(E+p))*o,s[1]=(m+T)*o,s[2]=(v-I)*o,s[3]=0,s[4]=(m-T)*w,s[5]=(1-(d+p))*w,s[6]=(_+C)*w,s[7]=0,s[8]=(v+I)*P,s[9]=(_-C)*P,s[10]=(1-(d+E))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=fs.set(s[0],s[1],s[2]).length(),l=fs.set(s[4],s[5],s[6]).length(),c=fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let h=1/a,f=1/l,g=1/c;return Zn.elements[0]*=h,Zn.elements[1]*=h,Zn.elements[2]*=h,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=g,Zn.elements[9]*=g,Zn.elements[10]*=g,e.setFromRotationMatrix(Zn),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=jn,c=!1){let h=this.elements,f=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),v,E;if(c)v=r/(a-r),E=a*r/(a-r);else if(l===jn)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(l===Is)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=g,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=jn,c=!1){let h=this.elements,f=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s),v,E;if(c)v=1/(a-r),E=a/(a-r);else if(l===jn)v=-2/(a-r),E=-(a+r)/(a-r);else if(l===Is)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=g,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fs=new O,Zn=new Ue,fd=new O(0,0,0),pd=new O(1,1,1),Ai=new O,Zr=new O,Dn=new O,Oc=new Ue,Bc=new On,Mi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],f=s[9],g=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},md=0,Hc=new O,ps=new On,fi=new Ue,Jr=new O,er=new O,gd=new O,_d=new On,zc=new O(1,0,0),kc=new O(0,1,0),Vc=new O(0,0,1),Gc={type:"added"},xd={type:"removed"},ms={type:"childadded",child:null},hl={type:"childremoved",child:null},hn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Mi,n=new On,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(er,Jr,this.up):fi.lookAt(Jr,er,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(fi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gc),ms.child=t,this.dispatchEvent(ms),ms.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gc),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){let g=c[h];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),f=a(t.images),g=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(l){let c=[];for(let h in l){let f=l[h];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new O(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yd={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let E of t.hand.values()){let _=e.getJointPose(E,n),p=this._getHandJoint(h,E);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=f.position.distanceTo(g.position),m=.02,v=.005;h.inputState.pinching&&d>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(yd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=ac(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ul(a,r,t+1/3),this.g=ul(a,r,t),this.b=ul(a,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return Me.workingToColorSpace(xn.copy(this),t),Math.round(pe(xn.r*255,0,255))*65536+Math.round(pe(xn.g*255,0,255))*256+Math.round(pe(xn.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,f=(l+a)/2;if(l===a)c=0,h=0;else{let g=a-l;switch(h=f<=.5?g/(a+l):g/(2-a-l),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=f,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Fn){Me.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Kr);let n=hr(Ci.h,Kr.h,e),s=hr(Ci.s,Kr.s,e),r=hr(Ci.l,Kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new te;te.NAMES=qh;var _r=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Jn=new O,pi=new O,dl=new O,mi=new O,gs=new O,_s=new O,Wc=new O,fl=new O,pl=new O,ml=new O,gl=new Ye,_l=new Ye,xl=new Ye,xi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Jn.subVectors(s,e),pi.subVectors(n,e),dl.subVectors(t,e);let a=Jn.dot(Jn),l=Jn.dot(pi),c=Jn.dot(dl),h=pi.dot(pi),f=pi.dot(dl),g=a*h-l*l;if(g===0)return r.set(0,0,0),null;let d=1/g,m=(h*c-l*f)*d,v=(a*f-l*c)*d;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(l,mi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return gl.setScalar(0),_l.setScalar(0),xl.setScalar(0),gl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),xl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(xl,r.z),a}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),pi.subVectors(t,e),Jn.cross(pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Jn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;gs.subVectors(s,n),_s.subVectors(r,n),fl.subVectors(t,n);let c=gs.dot(fl),h=_s.dot(fl);if(c<=0&&h<=0)return e.copy(n);pl.subVectors(t,s);let f=gs.dot(pl),g=_s.dot(pl);if(f>=0&&g<=f)return e.copy(s);let d=c*g-f*h;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(gs,a);ml.subVectors(t,r);let m=gs.dot(ml),v=_s.dot(ml);if(v>=0&&m<=v)return e.copy(r);let E=m*h-c*v;if(E<=0&&h>=0&&v<=0)return l=h/(h-v),e.copy(n).addScaledVector(_s,l);let _=f*v-m*g;if(_<=0&&g-f>=0&&m-v>=0)return Wc.subVectors(r,s),l=(g-f)/(g-f+(m-v)),e.copy(s).addScaledVector(Wc,l);let p=1/(_+E+d);return a=E*p,l=d*p,e.copy(n).addScaledVector(gs,a).addScaledVector(_s,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),jr.subVectors(this.max,nr),xs.subVectors(t.a,nr),ys.subVectors(t.b,nr),vs.subVectors(t.c,nr),Ri.subVectors(ys,xs),Pi.subVectors(vs,ys),Ji.subVectors(xs,vs);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Ji.y,Ji.x,0];return!yl(e,xs,ys,vs,jr)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,xs,ys,vs,jr))?!1:(Qr.crossVectors(Ri,Pi),e=[Qr.x,Qr.y,Qr.z],yl(e,xs,ys,vs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gi=[new O,new O,new O,new O,new O,new O,new O,new O],Kn=new O,$r=new oi,xs=new O,ys=new O,vs=new O,Ri=new O,Pi=new O,Ji=new O,nr=new O,jr=new O,Qr=new O,Ki=new O;function yl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let l=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),h=e.dot(Ki),f=n.dot(Ki);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>l)return!1}return!0}var tn=new O,ta=new Gt,vd=0,vn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $e=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Md=new oi,ir=new O,vl=new O,Li=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(vl)),this.expandByPoint(ir.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sd=0,Wn=new Ue,Ml=new hn,Ms=new O,Nn=new oi,sr=new oi,ln=new O,un=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?yr:xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];sr.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(Nn.min,sr.min),Nn.expandByPoint(ln),ln.addVectors(Nn.max,sr.max),Nn.expandByPoint(ln)):(Nn.expandByPoint(sr.min),Nn.expandByPoint(sr.max))}Nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ln));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)ln.fromBufferAttribute(l,h),c&&(Ms.fromBufferAttribute(t,h),ln.add(Ms)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let M=0;M<n.count;M++)l[M]=new O,c[M]=new O;let h=new O,f=new O,g=new O,d=new Gt,m=new Gt,v=new Gt,E=new O,_=new O;function p(M,u,b){h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,u),g.fromBufferAttribute(n,b),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,u),v.fromBufferAttribute(r,b),f.sub(h),g.sub(h),m.sub(d),v.sub(d);let B=1/(m.x*v.y-v.x*m.y);isFinite(B)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(g,-m.y).multiplyScalar(B),_.copy(g).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(B),l[M].add(E),l[u].add(E),l[b].add(E),c[M].add(_),c[u].add(_),c[b].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let M=0,u=C.length;M<u;++M){let b=C[M],B=b.start,z=b.count;for(let G=B,D=B+z;G<D;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let I=new O,T=new O,o=new O,w=new O;function P(M){o.fromBufferAttribute(s,M),w.copy(o);let u=l[M];I.copy(u),I.sub(o.multiplyScalar(o.dot(u))).normalize(),T.crossVectors(w,u);let B=T.dot(c[M])<0?-1:1;a.setXYZW(M,I.x,I.y,I.z,B)}for(let M=0,u=C.length;M<u;++M){let b=C[M],B=b.start,z=b.count;for(let G=B,D=B+z;G<D;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,l=new O,c=new O,h=new O,f=new O,g=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){let v=t.getX(d+0),E=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,_),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,_),l.add(f),c.add(f),h.add(f),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(l,c){let h=l.array,f=l.itemSize,g=l.normalized,d=new h.constructor(c.length*f),m=0,v=0;for(let E=0,_=c.length;E<_;E++){l.isInterleavedBufferAttribute?m=c[E]*l.data.stride+l.offset:m=c[E]*f;for(let p=0;p<f;p++)d[v++]=h[m++]}return new vn(d,f,g)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let f=0,g=h.length;f<g;f++){let d=h[f],m=t(d,n);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],f=[];for(let g=0,d=h.length;g<d;g++){let m=h[g];f.push(m.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],g=r[h];for(let d=0,m=g.length;d<m;d++)f.push(g[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,f=a.length;h<f;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new O,vr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sl=new O,bd=new O,Ed=new ne,Un=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sl.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ed.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Td=0,Xn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Xs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Vl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Os=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,rr=new O,bs=new O,Es=new O,Ts=new Gt,ar=new Gt,Zh=new Ue,ea=new O,or=new O,na=new O,Xc=new Gt,bl=new Gt,Yc=new Gt,Mr=class extends hn{constructor(t=new Os){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new un;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fa(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new vr(n,3,0,!1)),Ss.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new Gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ia(ea.set(-.5,-.5,0),Es,a,bs,s,r),ia(or.set(.5,-.5,0),Es,a,bs,s,r),ia(na.set(.5,.5,0),Es,a,bs,s,r),Xc.set(0,0),bl.set(1,0),Yc.set(1,1);let l=t.ray.intersectTriangle(ea,or,na,!1,rr);if(l===null&&(ia(or.set(-.5,.5,0),Es,a,bs,s,r),bl.set(0,1),l=t.ray.intersectTriangle(ea,na,or,!1,rr),l===null))return;let c=t.ray.origin.distanceTo(rr);c<t.near||c>t.far||e.push({distance:c,point:rr.clone(),uv:xi.getInterpolation(rr,ea,or,na,Xc,bl,Yc,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ia(i,t,e,n,s,r){Ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ar.x=r*Ts.x-s*Ts.y,ar.y=s*Ts.x+r*Ts.y):ar.copy(Ts),i.copy(t),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(Zh)}var _i=new O,El=new O,sa=new O,ra=new O,Si=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),ra.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sa),l=ra.dot(this.direction),c=-ra.dot(sa),h=ra.lengthSq(),f=Math.abs(1-a*a),g,d,m,v;if(f>0)if(g=a*c-l,d=a*l-c,v=r*f,g>=0)if(d>=-v)if(d<=v){let E=1/f;g*=E,d*=E,m=g*(g+a*d+2*l)+d*(a*g+d+2*c)+h}else d=r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;else d=-r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;else d<=-v?(g=Math.max(0,-(-a*r+l)),d=g>0?-r:Math.min(Math.max(-r,-c),r),m=-g*g+d*(d+2*c)+h):d<=v?(g=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+h):(g=Math.max(0,-(a*r+l)),d=g>0?r:Math.min(Math.max(-r,-c),r),m=-g*g+d*(d+2*c)+h);else d=a>0?-r:r,g=Math.max(0,-(a*d+l)),m=-g*g+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(El).addScaledVector(sa,d),m}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),f>=0?(r=(t.min.y-d.y)*f,a=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,a=(t.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(l=(t.min.z-d.z)*g,c=(t.max.z-d.z)*g):(l=(t.max.z-d.z)*g,c=(t.min.z-d.z)*g),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,f=l.z,g=t.x-a.x,d=t.y-a.y,m=t.z-a.z,v=e.x-a.x,E=e.y-a.y,_=e.z-a.z,p=n.x-a.x,C=n.y-a.y,I=n.z-a.z,T=Math.abs(c),o=Math.abs(h),w=Math.abs(f),P,M,u,b,B,z,G,D,W,$,J,rt;if(T>=o&&T>=w?(u=c,z=g,W=v,rt=p,c>=0?(P=h,M=f,b=d,B=m,G=E,D=_,$=C,J=I):(P=f,M=h,b=m,B=d,G=_,D=E,$=I,J=C)):o>=w?(u=h,z=d,W=E,rt=C,h>=0?(P=f,M=c,b=m,B=g,G=_,D=v,$=I,J=p):(P=c,M=f,b=g,B=m,G=v,D=_,$=p,J=I)):(u=f,z=m,W=_,rt=I,f>=0?(P=c,M=h,b=g,B=d,G=v,D=E,$=p,J=C):(P=h,M=c,b=d,B=g,G=E,D=v,$=C,J=p)),u===0)return null;let q=P/u,nt=M/u,st=1/u,Xt=b-q*z,Vt=B-nt*z,Pe=G-q*W,jt=D-nt*W,Ae=$-q*rt,Z=J-nt*rt,et=Ae*jt-Z*Pe,Nt=Xt*Z-Vt*Ae,Jt=Pe*Vt-jt*Xt;if(s){if(et<0||Nt<0||Jt<0)return null}else if((et<0||Nt<0||Jt<0)&&(et>0||Nt>0||Jt>0))return null;let Rt=et+Nt+Jt;if(Rt===0)return null;let ae=st*(et*z+Nt*W+Jt*rt);return(Rt>0?ae<0:ae>0)?null:this.at(ae/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Di=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qc=new Ue,$i=new Si,aa=new Li,Zc=new O,oa=new O,la=new O,ca=new O,Tl=new O,ha=new O,Jc=new O,ua=new O,qe=class extends hn{constructor(t=new un,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){ha.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let f=l[c],g=r[c];f!==0&&(Tl.fromBufferAttribute(g,t),a?ha.addScaledVector(Tl,f):ha.addScaledVector(Tl.sub(e),f))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(aa.containsPoint($i.origin)===!1&&($i.intersectSphere(aa,Zc)===null||$i.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),$i.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,g=r.attributes.normal,d=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){let _=d[v],p=a[_.materialIndex],C=Math.max(_.start,m.start),I=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let T=C,o=I;T<o;T+=3){let w=l.getX(T),P=l.getX(T+1),M=l.getX(T+2);s=da(this,p,t,n,h,f,g,w,P,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let _=v,p=E;_<p;_+=3){let C=l.getX(_),I=l.getX(_+1),T=l.getX(_+2);s=da(this,a,t,n,h,f,g,C,I,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=d.length;v<E;v++){let _=d[v],p=a[_.materialIndex],C=Math.max(_.start,m.start),I=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let T=C,o=I;T<o;T+=3){let w=T,P=T+1,M=T+2;s=da(this,p,t,n,h,f,g,w,P,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let _=v,p=E;_<p;_+=3){let C=_,I=_+1,T=_+2;s=da(this,a,t,n,h,f,g,C,I,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function wd(i,t,e,n,s,r,a,l){let c;if(t.side===wn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===ki,l),c===null)return null;ua.copy(l),ua.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ua);return h<e.near||h>e.far?null:{distance:h,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,oa),i.getVertexPosition(c,la),i.getVertexPosition(h,ca);let f=wd(i,t,e,n,oa,la,ca,Jc);if(f){let g=new O;xi.getBarycoord(Jc,oa,la,ca,g),s&&(f.uv=xi.getInterpolatedAttribute(s,l,c,h,g,new Gt)),r&&(f.uv1=xi.getInterpolatedAttribute(r,l,c,h,g,new Gt)),a&&(f.normal=xi.getInterpolatedAttribute(a,l,c,h,g,new O),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a:l,b:c,c:h,normal:new O,materialIndex:0};xi.getNormal(oa,la,ca,d.normal),f.face=d,f.barycoord=g}return f}var Ua=class extends Tn{constructor(t=null,e=1,n=1,s,r,a,l,c,h=cn,f=cn,g,d){super(null,a,l,c,h,f,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=new Li,Ad=new Gt(.5,.5),fa=new O,Bs=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],f=r[4],g=r[5],d=r[6],m=r[7],v=r[8],E=r[9],_=r[10],p=r[11],C=r[12],I=r[13],T=r[14],o=r[15];if(s[0].setComponents(h-a,m-f,p-v,o-C).normalize(),s[1].setComponents(h+a,m+f,p+v,o+C).normalize(),s[2].setComponents(h+l,m+g,p+E,o+I).normalize(),s[3].setComponents(h-l,m-g,p-E,o-I).normalize(),n)s[4].setComponents(c,d,_,T).normalize(),s[5].setComponents(h-c,m-d,p-_,o-T).normalize();else if(s[4].setComponents(h-c,m-d,p-_,o-T).normalize(),e===jn)s[5].setComponents(h+c,m+d,p+_,o+T).normalize();else if(e===Is)s[5].setComponents(c,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=Ad.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sr=class extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oa=new O,Ba=new O,Kc=new Ue,lr=new Si,pa=new Li,wl=new O,$c=new O,Ha=class extends hn{constructor(t=new un,e=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Oa.fromBufferAttribute(e,s-1),Ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Oa.distanceTo(Ba);t.setAttribute("lineDistance",new $e(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;Kc.copy(s).invert(),lr.copy(t.ray).applyMatrix4(Kc);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){let m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let E=m,_=v-1;E<_;E+=h){let p=f.getX(E),C=f.getX(E+1),I=ma(this,t,lr,c,p,C,E);I&&e.push(I)}if(this.isLineLoop){let E=f.getX(v-1),_=f.getX(m),p=ma(this,t,lr,c,E,_,v-1);p&&e.push(p)}}else{let m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let E=m,_=v-1;E<_;E+=h){let p=ma(this,t,lr,c,E,E+1,E);p&&e.push(p)}if(this.isLineLoop){let E=ma(this,t,lr,c,v-1,m,v-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function ma(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Oa.fromBufferAttribute(l,s),Ba.fromBufferAttribute(l,r),e.distanceSqToSegment(Oa,Ba,wl,$c)>n)return;wl.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(wl);if(!(h<t.near||h>t.far))return{distance:h,point:$c.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var jc=new O,Qc=new O,za=class extends Ha{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jc.fromBufferAttribute(e,s),Qc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jc.distanceTo(Qc);t.setAttribute("lineDistance",new $e(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hs=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},th=new Ue,Dl=new Si,ga=new Li,_a=new O,br=class extends hn{constructor(t=new un,e=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;th.copy(s).invert(),Dl.copy(t.ray).applyMatrix4(th);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,g=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,E=m;v<E;v++){let _=h.getX(v);_a.fromBufferAttribute(g,_),eh(_a,_,c,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let v=d,E=m;v<E;v++)_a.fromBufferAttribute(g,v),eh(_a,v,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function eh(i,t,e,n,s,r,a){let l=Dl.distanceSqToPoint(i);if(l<e){let c=new O;Dl.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Er=class extends Tn{constructor(t=[],e=Vi,n,s,r,a,l,c,h,f){super(t,e,n,s,r,a,l,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zs=class extends Tn{constructor(t,e,n,s,r,a,l,c,h){super(t,e,n,s,r,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends Tn{constructor(t,e,n=ei,s,r,a,l=cn,c=cn,h,f=ai,g=1){if(f!==ai&&f!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,l,c,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ka=class extends Ni{constructor(t,e=ei,n=Vi,s,r,a=cn,l=cn,c,h=ai){let f={width:t,height:t,depth:1},g=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,l,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Tr=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fi=class i extends un{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],f=[],g=[],d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(g,2));function v(E,_,p,C,I,T,o,w,P,M,u){let b=T/P,B=o/M,z=T/2,G=o/2,D=w/2,W=P+1,$=M+1,J=0,rt=0,q=new O;for(let nt=0;nt<$;nt++){let st=nt*B-G;for(let Xt=0;Xt<W;Xt++){let Vt=Xt*b-z;q[E]=Vt*C,q[_]=st*I,q[p]=D,h.push(q.x,q.y,q.z),q[E]=0,q[_]=0,q[p]=w>0?1:-1,f.push(q.x,q.y,q.z),g.push(Xt/P),g.push(1-nt/M),J+=1}}for(let nt=0;nt<M;nt++)for(let st=0;st<P;st++){let Xt=d+st+W*nt,Vt=d+st+W*(nt+1),Pe=d+(st+1)+W*(nt+1),jt=d+(st+1)+W*nt;c.push(Xt,Vt,jt),c.push(Vt,Pe,jt),rt+=6}l.addGroup(m,rt,u),m+=rt,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ts=class i extends un{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],g=[],d=[],m=[],v=0,E=[],_=n/2,p=0;C(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(m,2));function C(){let T=new O,o=new O,w=0,P=(e-t)/n;for(let M=0;M<=r;M++){let u=[],b=M/r,B=b*(e-t)+t;for(let z=0;z<=s;z++){let G=z/s,D=G*c+l,W=Math.sin(D),$=Math.cos(D);o.x=B*W,o.y=-b*n+_,o.z=B*$,g.push(o.x,o.y,o.z),T.set(W,P,$).normalize(),d.push(T.x,T.y,T.z),m.push(G,1-b),u.push(v++)}E.push(u)}for(let M=0;M<s;M++)for(let u=0;u<r;u++){let b=E[u][M],B=E[u+1][M],z=E[u+1][M+1],G=E[u][M+1];(t>0||u!==0)&&(f.push(b,B,G),w+=3),(e>0||u!==r-1)&&(f.push(B,z,G),w+=3)}h.addGroup(p,w,0),p+=w}function I(T){let o=v,w=new Gt,P=new O,M=0,u=T===!0?t:e,b=T===!0?1:-1;for(let z=1;z<=s;z++)g.push(0,_*b,0),d.push(0,b,0),m.push(.5,.5),v++;let B=v;for(let z=0;z<=s;z++){let D=z/s*c+l,W=Math.cos(D),$=Math.sin(D);P.x=u*$,P.y=_*b,P.z=u*W,g.push(P.x,P.y,P.z),d.push(0,b,0),w.x=W*.5+.5,w.y=$*.5*b+.5,m.push(w.x,w.y),v++}for(let z=0;z<s;z++){let G=o+z,D=B+z;T===!0?f.push(D,D+1,G):f.push(D+1,D,G),M+=3}h.addGroup(p,M,T===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bi=class i extends ts{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var es=class i extends un{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,f=c+1,g=t/l,d=e/c,m=[],v=[],E=[],_=[];for(let p=0;p<f;p++){let C=p*d-a;for(let I=0;I<h;I++){let T=I*g-r;v.push(T,-C,0),E.push(0,0,1),_.push(I/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<l;C++){let I=C+h*p,T=C+h*(p+1),o=C+1+h*(p+1),w=C+1+h*p;m.push(I,T,w),m.push(T,o,w)}this.setIndex(m),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ks=class i extends un{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],f=[],g=[],d=new O,m=new O,v=new O;for(let E=0;E<=n;E++){let _=a+E/n*l;for(let p=0;p<=s;p++){let C=p/s*r;m.x=(t+e*Math.cos(_))*Math.cos(C),m.y=(t+e*Math.cos(_))*Math.sin(C),m.z=e*Math.sin(_),h.push(m.x,m.y,m.z),d.x=t*Math.cos(C),d.y=t*Math.sin(C),v.subVectors(m,d).normalize(),f.push(v.x,v.y,v.z),g.push(p/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let _=1;_<=s;_++){let p=(s+1)*E+_-1,C=(s+1)*(E-1)+_-1,I=(s+1)*(E-1)+_,T=(s+1)*E+_;c.push(p,C,T),c.push(C,I,T)}this.setIndex(c),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var wr=class extends Xn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new te(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function as(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nh(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=as(i[e]);for(let s in n)t[s]=n[s]}return t}function nh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var Jh={clone:as,merge:Mn},Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Va=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ar=class extends Ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ga=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wa=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Al(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Il:r=t,l=2*e-n;break;case Ll:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,c=2*n-e;break;case Ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,f=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),E=v*v,_=E*v,p=-d*_+2*d*E-d*v,C=(1+d)*_+(-1.5-2*d)*E+(-.5+d)*v+1,I=(-1-m)*_+(1.5+m)*E+.5*v,T=m*_-m*E;for(let o=0;o!==l;++o)r[o]=p*a[f+o]+C*a[h+o]+I*a[c+o]+T*a[g+o];return r}},Ya=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=(n-e)/(s-e),g=1-f;for(let d=0;d!==l;++d)r[d]=a[h+d]*g+a[c+d]*f;return r}},qa=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Za=class extends Ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,f=this.inTangents,g=this.outTangents;if(!f||!g){let v=(n-e)/(s-e),E=1-v;for(let _=0;_!==l;++_)r[_]=a[h+_]*E+a[c+_]*v;return r}let d=l*2,m=t-1;for(let v=0;v!==l;++v){let E=a[h+v],_=a[c+v],p=m*d+v*2,C=g[p],I=g[p+1],T=t*d+v*2,o=f[T],w=f[T+1],P=Ld(n,e,C,o,s);r[v]=Kh(P,E,I,w,_)}return r}};function Kh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Id(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ld(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=Kh(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Id(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Al(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Za(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Al(this.settings)&&(ih(this.settings.inTangents,t),ih(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Kt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){Kt("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&qu(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){Kt("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],f=t[l+1];if(h!==f&&(l!==1||h!==t[0]))if(s)c=!0;else{let g=l*n,d=g-n,m=g+n;for(let v=0;v!==n;++v){let E=e[g+v];if(E!==e[d+v]||E!==e[m+v]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let g=l*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[g+m]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ih(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Ia;var Oi=class extends Hn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ur;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};Ja.prototype.ValueTypeName="color";var Ka=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";var $a=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let f=h+l;h!==f;h+=4)On.slerpFlat(r,0,a,h-l,a,h,c);return r}},Cr=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Hn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ur;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="vector";var Qa=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,l),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,g){return h.push(f,g),this},this.removeHandler=function(f){let g=h.indexOf(f);return g!==-1&&h.splice(g,2),this},this.getHandler=function(f){for(let g=0,d=h.length;g<d;g+=2){let m=h[g],v=h[g+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$h=new Qa,to=class{constructor(t){this.manager=t!==void 0?t:$h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};to.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Cl=new Ue,sh=new O,rh=new O,eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Is||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new O,ya=new On,si=new O,Pr=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,ya,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,ya,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new O,ah=new Gt,oh=new Gt,yn=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,ah,oh),e.subVectors(oh,ah)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vs=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nl=class extends eo{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Nl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ir=class extends Rr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var As=-90,Cs=1,no=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(As,Cs,t,e);s.layers=this.layers,this.add(s);let r=new yn(As,Cs,t,e);r.layers=this.layers,this.add(r);let a=new yn(As,Cs,t,e);a.layers=this.layers,this.add(a);let l=new yn(As,Cs,t,e);l.layers=this.layers,this.add(l);let c=new yn(As,Cs,t,e);c.layers=this.layers,this.add(c);let h=new yn(As,Cs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,f]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(g,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},io=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var cc="\\[\\]\\.:\\/",Dd=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",Nd="[^"+cc.replace("\\.","")+"]",Fd=/((?:WC+[\/:])*)/.source.replace("WC",hc),Ud=/(WCOD+)?/.source.replace("WCOD",Nd),Od=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),Bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),Hd=new RegExp("^"+Fd+Ud+Od+Bd+"$"),zd=["material","materials","bones","map"],Fl=class{constructor(t,e,n){let s=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dd,"")}static parseTrackName(t){let e=Hd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Fl;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jg=new Float32Array(1);var lh=new Ue,Lr=class{constructor(t,e,n=0,s=1/0){this.ray=new Si(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lh),this}intersectObject(t,e=!0,n=[]){return Ul(t,this,n,e),n.sort(ch),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ul(t[s],this,n,e);return n.sort(ch),n}};function ch(i,t){return i.distance-t.distance}function Ul(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Ul(r[a],t,e,!0)}}var Gs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ol=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Dr=class extends za{constructor(t=10,e=10,n=4473924,s=8947848){n=new te(n),s=new te(s);let r=e/2,a=t/e,l=t/2,c=[],h=[];for(let d=0,m=0,v=-l;d<=e;d++,v+=a){c.push(-l,0,v,l,0,v),c.push(v,0,-l,v,0,l);let E=d===r?n:s;E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3}let f=new un;f.setAttribute("position",new $e(c,3)),f.setAttribute("color",new $e(h,3));let g=new Sr({vertexColors:!0,toneMapped:!1});super(f,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Nr=class extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function uc(i,t,e,n){let s=kd(n);switch(e){case ec:return i*t;case ic:return i*t/s.components*s.byteLength;case uo:return i*t/s.components*s.byteLength;case Xi:return i*t*2/s.components*s.byteLength;case fo:return i*t*2/s.components*s.byteLength;case nc:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case po:return i*t*4/s.components*s.byteLength;case Hr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case yo:case vo:case So:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case Gr:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ho:case zo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wr:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kd(i){switch(i){case Rn:case $l:return{byteLength:1,components:1};case Ys:case jl:case ii:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case ei:case lo:case ni:return{byteLength:4,components:1};case Ql:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);function yu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vd(i){let t=new WeakMap;function e(l,c){let h=l.array,f=l.usage,g=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,f),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,h){let f=c.array,g=c.updateRanges;if(i.bindBuffer(h,l),g.length===0)i.bufferSubData(h,0,f);else{g.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<g.length;m++){let v=g[d],E=g[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++d,g[d]=E)}g.length=d+1;for(let m=0,v=g.length;m<v;m++){let E=g[m];i.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,Vf=`uniform sampler2D dfgLUT;
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,_0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,M0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Gd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:Yd,alphatest_fragment:qd,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:Kd,batching_pars_vertex:$d,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:tf,bsdfs:ef,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:vf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Ef,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Uf,envmap_vertex:wf,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Pf,gradientmap_pars_fragment:If,lightmap_pars_fragment:Lf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:Hf,lights_phong_pars_fragment:zf,lights_physical_fragment:kf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,lightprobes_pars_fragment:Yf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Kf,map_fragment:$f,map_pars_fragment:jf,map_particle_fragment:Qf,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:xp,packing:yp,premultiplied_alpha_fragment:vp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:bp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:Up,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:Hp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:Yp,backgroundCube_frag:qp,cube_vert:Zp,cube_frag:Jp,depth_vert:Kp,depth_frag:$p,distance_vert:jp,distance_frag:Qp,equirect_vert:t0,equirect_frag:e0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:s0,meshbasic_frag:r0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:x0,points_frag:y0,shadow_vert:v0,shadow_frag:M0,sprite_vert:S0,sprite_frag:b0},Et={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},hi={basic:{uniforms:Mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Mn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Mn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Mn([Et.points,Et.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Mn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Mn([Et.common,Et.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Mn([Et.sprite,Et.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Mn([Et.common,Et.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Mn([Et.lights,Et.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};hi.physical={uniforms:Mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Zo={r:0,b:0,g:0},E0=new Ue,vu=new ne;vu.set(-1,0,0,0,1,0,0,0,1);function T0(i,t,e,n,s,r){let a=new te(0),l=s===!0?0:1,c,h,f=null,g=0,d=null;function m(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){let T=C.backgroundBlurriness>0;I=t.get(I,T)}return I}function v(C){let I=!1,T=m(C);T===null?_(a,l):T&&T.isColor&&(_(T,1),I=!0);let o=i.xr.getEnvironmentBlendMode();o==="additive"?e.buffers.color.setClear(0,0,0,1,r):o==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(C,I){let T=m(I);T&&(T.isCubeTexture||T.mapping===Or)?(h===void 0&&(h=new qe(new Fi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:as(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(o,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(I.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(vu),h.material.toneMapped=Me.getTransfer(T.colorSpace)!==Re,(f!==T||g!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,g=T.version,d=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new qe(new es(2,2),new Bn({name:"BackgroundMaterial",uniforms:as(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Me.getTransfer(T.colorSpace)!==Re,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||g!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,g=T.version,d=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function _(C,I){C.getRGB(Zo,lc(i)),e.buffers.color.setClear(Zo.r,Zo.g,Zo.b,I,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,I=1){a.set(C),l=I,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,_(a,l)},render:v,addToRenderList:E,dispose:p}}function w0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function l(B,z,G,D,W){let $=!1,J=g(B,D,G,z);r!==J&&(r=J,h(r.object)),$=m(B,D,G,W),$&&v(B,D,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(B,z,G,D),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function h(B){return i.bindVertexArray(B)}function f(B){return i.deleteVertexArray(B)}function g(B,z,G,D){let W=D.wireframe===!0,$=n[z.id];$===void 0&&($={},n[z.id]=$);let J=B.isInstancedMesh===!0?B.id:0,rt=$[J];rt===void 0&&(rt={},$[J]=rt);let q=rt[G.id];q===void 0&&(q={},rt[G.id]=q);let nt=q[W];return nt===void 0&&(nt=d(c()),q[W]=nt),nt}function d(B){let z=[],G=[],D=[];for(let W=0;W<e;W++)z[W]=0,G[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:D,object:B,attributes:{},index:null}}function m(B,z,G,D){let W=r.attributes,$=z.attributes,J=0,rt=G.getAttributes();for(let q in rt)if(rt[q].location>=0){let st=W[q],Xt=$[q];if(Xt===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(Xt=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(Xt=B.instanceColor)),st===void 0||st.attribute!==Xt||Xt&&st.data!==Xt.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function v(B,z,G,D){let W={},$=z.attributes,J=0,rt=G.getAttributes();for(let q in rt)if(rt[q].location>=0){let st=$[q];st===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(st=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(st=B.instanceColor));let Xt={};Xt.attribute=st,st&&st.data&&(Xt.data=st.data),W[q]=Xt,J++}r.attributes=W,r.attributesNum=J,r.index=D}function E(){let B=r.newAttributes;for(let z=0,G=B.length;z<G;z++)B[z]=0}function _(B){p(B,0)}function p(B,z){let G=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;G[B]=1,D[B]===0&&(i.enableVertexAttribArray(B),D[B]=1),W[B]!==z&&(i.vertexAttribDivisor(B,z),W[B]=z)}function C(){let B=r.newAttributes,z=r.enabledAttributes;for(let G=0,D=z.length;G<D;G++)z[G]!==B[G]&&(i.disableVertexAttribArray(G),z[G]=0)}function I(B,z,G,D,W,$,J){J===!0?i.vertexAttribIPointer(B,z,G,W,$):i.vertexAttribPointer(B,z,G,D,W,$)}function T(B,z,G,D){E();let W=D.attributes,$=G.getAttributes(),J=z.defaultAttributeValues;for(let rt in $){let q=$[rt];if(q.location>=0){let nt=W[rt];if(nt===void 0&&(rt==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),rt==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor)),nt!==void 0){let st=nt.normalized,Xt=nt.itemSize,Vt=t.get(nt);if(Vt===void 0)continue;let Pe=Vt.buffer,jt=Vt.type,Ae=Vt.bytesPerElement,Z=jt===i.INT||jt===i.UNSIGNED_INT||nt.gpuType===lo;if(nt.isInterleavedBufferAttribute){let et=nt.data,Nt=et.stride,Jt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let Rt=0;Rt<q.locationSize;Rt++)p(q.location+Rt,et.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)_(q.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Rt=0;Rt<q.locationSize;Rt++)I(q.location+Rt,Xt/q.locationSize,jt,st,Nt*Ae,(Jt+Xt/q.locationSize*Rt)*Ae,Z)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,nt.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<q.locationSize;et++)_(q.location+et);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let et=0;et<q.locationSize;et++)I(q.location+et,Xt/q.locationSize,jt,st,Xt*Ae,Xt/q.locationSize*et*Ae,Z)}}else if(J!==void 0){let st=J[rt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(q.location,st);break;case 3:i.vertexAttrib3fv(q.location,st);break;case 4:i.vertexAttrib4fv(q.location,st);break;default:i.vertexAttrib1fv(q.location,st)}}}}C()}function o(){u();for(let B in n){let z=n[B];for(let G in z){let D=z[G];for(let W in D){let $=D[W];for(let J in $)f($[J].object),delete $[J];delete D[W]}}delete n[B]}}function w(B){if(n[B.id]===void 0)return;let z=n[B.id];for(let G in z){let D=z[G];for(let W in D){let $=D[W];for(let J in $)f($[J].object),delete $[J];delete D[W]}}delete n[B.id]}function P(B){for(let z in n){let G=n[z];for(let D in G){let W=G[D];if(W[B.id]===void 0)continue;let $=W[B.id];for(let J in $)f($[J].object),delete $[J];delete W[B.id]}}}function M(B){for(let z in n){let G=n[z],D=B.isInstancedMesh===!0?B.id:0,W=G[D];if(W!==void 0){for(let $ in W){let J=W[$];for(let rt in J)f(J[rt].object),delete J[rt];delete W[$]}delete G[D],Object.keys(G).length===0&&delete n[z]}}}function u(){b(),a=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:u,resetDefaultState:b,dispose:o,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:_,disableUnusedAttributes:C}}function A0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function l(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function C0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let M=P===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Rn&&P!==ni&&!M&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=c(h);f!==h&&(qt("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),o=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:T,maxSamples:o,samples:w}}function R0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Un,l=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let m=g.length!==0||d||n!==0||s;return s=d,n=g.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=f(g,d,0)},this.setState=function(g,d,m){let v=g.clippingPlanes,E=g.clipIntersection,_=g.clipShadows,p=i.get(g);if(!s||v===null||v.length===0||r&&!_)r?f(null):h();else{let C=r?0:n,I=C*4,T=p.clippingState||null;c.value=T,T=f(v,d,I,m);for(let o=0;o!==I;++o)T[o]=e[o];p.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(g,d,m,v){let E=g!==null?g.length:0,_=null;if(E!==0){if(_=c.value,v!==!0||_===null){let p=m+E*4,C=d.matrixWorldInverse;l.getNormalMatrix(C),(_===null||_.length<p)&&(_=new Float32Array(p));for(let I=0,T=m;I!==E;++I,T+=4)a.copy(g[I]).applyMatrix4(C,l),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,_}}var Js=4,P0=6,I0=20,L0=256,Xr=new Vs,jh=new te,dc=null,fc=0,pc=0,mc=!1,D0=new O,os=new O,Ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=D0}=r;dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ii,format:Yn,colorSpace:dr,depthBuffer:!1},s=Qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N0(r)),this._blurMaterial=U0(r,t,e),this._ggxMaterial=F0(r,t,e)}return s}_compileMaterial(t){let e=new qe(new un,t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s,r){let c=new yn(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,m=g.toneMapping;g.getClearColor(jh),g.toneMapping=ti,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new Fi,new Di({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,_=E.material,p=!1,C=t.background;C?C.isColor&&(_.color.copy(C),t.background=null,p=!0):(_.color.copy(jh),p=!0);for(let I=0;I<6;I++){let T=I%3;T===0?(c.up.set(0,h[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[I],r.y,r.z)):T===1?(c.up.set(0,0,h[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[I],r.z)):(c.up.set(0,h[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[I]));let o=this._cubeSize;Zs(s,T*o,I>2?o:0,o,o),g.setRenderTarget(s),p&&g.render(E,c),g.render(t,c)}g.toneMapping=m,g.autoClear=d,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vi||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-f*f),d=h*1.25,m=g*d,{_lodMax:v}=this,E=this._sizeLods[n],_=3*E*(n>v-Js?n-v+Js:0),p=4*(this._cubeSize-E);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=v-e,Zs(r,_,p,3*E,2*E),s.setRenderTarget(r),s.render(l,Xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,Zs(t,_,p,3*E,2*E),s.setRenderTarget(t),s.render(l,Xr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],g=3*f*(s>this._lodMax-Js?s-this._lodMax+Js:0),d=4*(this._cubeSize-f);Zs(e,g,d,3*f,2*f),a.setRenderTarget(e),a.render(c,Xr)}};function N0(i){let t=[],e=[],n=i,s=i-Js+1+P0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,d=6,m=3,v=new Float32Array(m*d*g),E=new Float32Array(m*d*g);for(let p=0;p<g;p++){let C=p%3*2/3-1,I=p>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(T,m*d*p);for(let o=0;o<d;o++){let w=f[o*2]*2-1,P=f[o*2+1]*2-1;p===0?os.set(1,P,w):p===1?os.set(-w,1,-P):p===2?os.set(-w,P,1):p===3?os.set(-1,P,-w):p===4?os.set(-w,-1,P):os.set(w,P,-1),os.toArray(E,(p*d+o)*m)}}let _=new un;_.setAttribute("position",new vn(v,m)),_.setAttribute("outputDirection",new vn(E,m)),e.push(new qe(_,null)),n>Js&&n--}return{lodMeshes:e,sizeLods:t}}function Qh(i,t,e){let n=new Cn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function F0(i,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function U0(i,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:I0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function tu(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function eu(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $o=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:li});r.uniforms.tEquirect.value=e;let a=new qe(s,r),l=e.minFilter;return e.minFilter===Gi&&(e.minFilter=en),new no(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function O0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===ro||m===ao)if(t.has(d)){let v=t.get(d).texture;return l(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let E=new $o(v.height);return E.fromEquirectangularTexture(i,d),t.set(d,E),d.addEventListener("dispose",h),l(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,v=m===ro||m===ao,E=m===Vi||m===rs;if(v||E){let _=e.get(d),p=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ko(i)),_=v?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let C=d.image;return v&&C&&C.height>0||E&&C&&c(C)?(n===null&&(n=new Ko(i)),_=v?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function l(d,m){return m===ro?d.mapping=Vi:m===ao&&(d.mapping=rs),d}function c(d){let m=0,v=6;for(let E=0;E<v;E++)d[E]!==void 0&&m++;return m===v}function h(d){let m=d.target;m.removeEventListener("dispose",h);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function f(d){let m=d.target;m.removeEventListener("dispose",f);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function B0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Qi("WebGLRenderer: "+n+" extension not supported."),s}}}function H0(i,t,e,n){let s={},r=new WeakMap;function a(g){let d=g.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(g,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(g){let d=g.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER)}function h(g){let d=[],m=g.index,v=g.attributes.position,E=0;if(v===void 0)return;if(m!==null){let C=m.array;E=m.version;for(let I=0,T=C.length;I<T;I+=3){let o=C[I+0],w=C[I+1],P=C[I+2];d.push(o,w,w,P,P,o)}}else{let C=v.array;E=v.version;for(let I=0,T=C.length/3-1;I<T;I+=3){let o=I+0,w=I+1,P=I+2;d.push(o,w,w,P,P,o)}}let _=new(v.count>=65535?yr:xr)(d,1);_.version=E;let p=r.get(g);p&&t.remove(p),r.set(g,_)}function f(g){let d=r.get(g);if(d){let m=g.index;m!==null&&d.version<m.version&&h(g)}else h(g);return r.get(g)}return{get:l,update:c,getWireframeAttribute:f}}function z0(i,t,e){let n;function s(g){n=g}let r,a;function l(g){r=g.type,a=g.bytesPerElement}function c(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function h(g,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,g*a,m),e.update(d,n,m))}function f(g,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,m);let E=0;for(let _=0;_<m;_++)E+=d[_];e.update(E,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function k0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,t,e){let n=new WeakMap,s=new Ye;function r(a,l,c){let h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0,d=n.get(l);if(d===void 0||d.count!==g){let u=function(){P.dispose(),n.delete(l),l.removeEventListener("dispose",u)};d!==void 0&&d.texture.dispose();let m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],C=l.morphAttributes.color||[],I=0;m===!0&&(I=1),v===!0&&(I=2),E===!0&&(I=3);let T=l.attributes.position.count*I,o=1;T>t.maxTextureSize&&(o=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*o*4*g),P=new gr(w,T,o,g);P.type=ni,P.needsUpdate=!0;let M=I*4;for(let b=0;b<g;b++){let B=_[b],z=p[b],G=C[b],D=T*o*4*b;for(let W=0;W<B.count;W++){let $=W*M;m===!0&&(s.fromBufferAttribute(B,W),w[D+$+0]=s.x,w[D+$+1]=s.y,w[D+$+2]=s.z,w[D+$+3]=0),v===!0&&(s.fromBufferAttribute(z,W),w[D+$+4]=s.x,w[D+$+5]=s.y,w[D+$+6]=s.z,w[D+$+7]=0),E===!0&&(s.fromBufferAttribute(G,W),w[D+$+8]=s.x,w[D+$+9]=s.y,w[D+$+10]=s.z,w[D+$+11]=G.itemSize===4?s.w:1)}}d={count:g,texture:P,size:new Gt(T,o)},n.set(l,d),l.addEventListener("dispose",u)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let E=0;E<h.length;E++)m+=h[E];let v=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function G0(i,t,e,n,s){let r=new WeakMap;function a(h){let f=s.render.frame,g=h.geometry,d=t.get(h,g);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==f&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){let m=h.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return d}function l(){r=new WeakMap}function c(h){let f=h.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var W0={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ur]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function X0(i,t,e,n,s,r){let a=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new un;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let f=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new qe(h,f),d=new Vs(-1,1,1,-1,0,1),m=null,v=null,E=!1,_,p=null,C=[],I=!1;this.setSize=function(T,o){a.setSize(T,o),l!==null&&l.setSize(T,o),c!==null&&c.setSize(T,o);for(let w=0;w<C.length;w++){let P=C[w];P.setSize&&P.setSize(T,o)}},this.setEffects=function(T){C=T,I=C.length>0&&C[0].isRenderPass===!0;let o=a.width,w=a.height;C.length>0&&l===null&&(l=new Cn(o,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}),c=new Cn(o,w,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<C.length;P++){let M=C[P];M.setSize&&M.setSize(o,w)}},this.begin=function(T,o){if(E||T.toneMapping===ti&&C.length===0)return!1;if(p=o,o!==null){let w=o.width,P=o.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return I===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=ti,!0},this.hasRenderPass=function(){return I},this.end=function(T,o){T.toneMapping=_,E=!0;let w=a,P=l;for(let M=0;M<C.length;M++){let u=C[M];u.enabled!==!1&&(u.render(T,P,w,o),u.needsSwap!==!1&&(w=P,P=P===l?c:l))}if(m!==T.outputColorSpace||v!==T.toneMapping){m=T.outputColorSpace,v=T.toneMapping,f.defines={},Me.getTransfer(m)===Re&&(f.defines.SRGB_TRANSFER="");let M=W0[v];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(p),T.render(g,d),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Mu=new Tn,xc=new Ni(1,1),Su=new gr,bu=new Na,Eu=new Er,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),au=new Float32Array(4);function $s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tl(i,t){let e=iu[t];e===void 0&&(e=new Int32Array(t),iu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),sn(e,n)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),sn(e,n)}}function j0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),sn(e,n)}}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xc.compareFunction=e.isReversedDepthBuffer()?qo:Yo,r=xc):r=Mu,e.setTexture2D(t||r,s)}function lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bu,s)}function cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eu,s)}function hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Su,s)}function um(i){switch(i){case 5126:return Y0;case 35664:return q0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return $0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(i,t){i.uniform1fv(this.addr,t)}function fm(i,t){let e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function pm(i,t){let e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function mm(i,t){let e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function gm(i,t){let e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _m(i,t){let e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xm(i,t){let e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ym(i,t){i.uniform1iv(this.addr,t)}function vm(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function Sm(i,t){i.uniform4iv(this.addr,t)}function bm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function Tm(i,t){i.uniform3uiv(this.addr,t)}function wm(i,t){i.uniform4uiv(this.addr,t)}function Am(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xc:a=Mu;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Cm(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bu,r[a])}function Rm(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Eu,r[a])}function Pm(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Su,r[a])}function Im(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return Em;case 36295:return Tm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}var yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=um(e.type)}},vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Im(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function ou(i,t){i.seq.push(t),i.map[t.id]=t}function Lm(i,t,e){let n=i.name,s=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),a=gc.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){ou(e,h===void 0?new yc(l,i,t):new vc(l,i,t));break}else{let g=e.map[l];g===void 0&&(g=new Mc(l),ou(e,g)),e=g}}}var Ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);Lm(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dm=37297,Nm=0;function Fm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var cu=new ne;function Um(i){Me._getMatrix(cu,Me.workingColorSpace,i);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fm(i.getShaderSource(t),l)}else return r}function Om(i,t){let e=Um(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Bm={[Wl]:"Linear",[Xl]:"Reinhard",[Yl]:"Cineon",[Ur]:"ACESFilmic",[Zl]:"AgX",[Jl]:"Neutral",[ql]:"Custom"};function Hm(i,t){let e=Bm[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jo=new O;function zm(){Me.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Vm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function qr(i){return i!==""}function uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(Wm,Ym)}var Xm=new Map;function Ym(i,t){let e=de[t];if(e===void 0){let n=Xm.get(t);if(n!==void 0)e=de[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sc(e)}var qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(qm,Zm)}function Zm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Jm={[is]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function Km(i){return Jm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $m={[Vi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE_UV"};function jm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$m[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qm={[rs]:"ENVMAP_MODE_REFRACTION"};function tg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eg={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[Ih]:"ENVMAP_BLENDING_MIX",[Lh]:"ENVMAP_BLENDING_ADD"};function ng(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eg[i.combine]||"ENVMAP_BLENDING_NONE"}function ig(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=Km(e),h=jm(e),f=tg(e),g=ng(e),d=ig(e),m=km(e),v=Vm(r),E=s.createProgram(),_,p,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(qr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(_=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?de.tonemapping_pars_fragment:"",e.toneMapping!==ti?Hm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Om("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),a=Sc(a),a=uu(a,e),a=du(a,e),l=Sc(l),l=uu(l,e),l=du(l,e),a=fu(a),l=fu(l),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=C+_+a,T=C+p+l,o=lu(s,s.VERTEX_SHADER,I),w=lu(s,s.FRAGMENT_SHADER,T);s.attachShader(E,o),s.attachShader(E,w),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(B){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(E)||"",G=s.getShaderInfoLog(o)||"",D=s.getShaderInfoLog(w)||"",W=z.trim(),$=G.trim(),J=D.trim(),rt=!0,q=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,o,w);else{let nt=hu(s,o,"vertex"),st=hu(s,w,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+nt+`
`+st)}else W!==""?qt("WebGLProgram: Program Info Log:",W):($===""||J==="")&&(q=!1);q&&(B.diagnostics={runnable:rt,programLog:W,vertexShader:{log:$,prefix:_},fragmentShader:{log:J,prefix:p}})}s.deleteShader(o),s.deleteShader(w),M=new Ks(s,E),u=Gm(s,E)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let u;this.getAttributes=function(){return u===void 0&&P(this),u};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,Dm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=o,this.fragmentShader=w,this}var rg=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ec(t),e.set(t,n)),n}},Ec=class{constructor(t){this.id=rg++,this.code=t,this.usedTimes=0}};function ag(i){return i===Xi||i===Gr||i===Wr}function og(i,t,e,n,s,r){let a=new Fs,l=new bc,c=new Set,h=[],f=new Map,g=n.logarithmicDepthBuffer,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function E(M,u,b,B,z,G){let D=B.fog,W=z.geometry,$=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,rt=t.get(M.envMap||$,J),q=rt&&rt.mapping===Or?rt.image.height:null,nt=m[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&qt("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=st!==void 0?st.length:0,Vt=0;W.morphAttributes.position!==void 0&&(Vt=1),W.morphAttributes.normal!==void 0&&(Vt=2),W.morphAttributes.color!==void 0&&(Vt=3);let Pe,jt,Ae,Z;if(nt){let y=hi[nt];Pe=y.vertexShader,jt=y.fragmentShader}else{Pe=M.vertexShader,jt=M.fragmentShader;let y=l.getVertexShaderStage(M),X=l.getFragmentShaderStage(M);l.update(M,y,X),Ae=y.id,Z=X.id}let et=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Jt=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,ae=!!M.map,Ve=!!M.matcap,ce=!!rt,xe=!!M.aoMap,Se=!!M.lightMap,fe=!!M.bumpMap&&M.wireframe===!1,Oe=!!M.normalMap,Be=!!M.displacementMap,dn=!!M.emissiveMap,He=!!M.metalnessMap,Ge=!!M.roughnessMap,N=M.anisotropy>0,Je=M.clearcoat>0,Ce=M.dispersion>0,A=M.retroreflectivity>0,x=M.iridescence>0,H=M.sheen>0,k=M.transmission>0,Y=N&&!!M.anisotropyMap,ht=Je&&!!M.clearcoatMap,mt=Je&&!!M.clearcoatNormalMap,K=Je&&!!M.clearcoatRoughnessMap,tt=x&&!!M.iridescenceMap,gt=x&&!!M.iridescenceThicknessMap,zt=H&&!!M.sheenColorMap,St=H&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Bt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,ee=k&&!!M.transmissionMap,L=k&&!!M.thicknessMap,xt=!!M.gradientMap,Q=!!M.alphaMap,yt=M.alphaTest>0,ct=!!M.alphaHash,it=!!M.extensions,kt=ti;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Ot={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:jt,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&z.instanceColor!==null,instancingMorph:Jt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:Ve,envMap:ce,envMapMode:ce&&rt.mapping,envMapCubeUVHeight:q,aoMap:xe,lightMap:Se,bumpMap:fe,normalMap:Oe,displacementMap:Be,emissiveMap:dn,normalMapObjectSpace:Oe&&M.normalMapType===Fh,normalMapTangentSpace:Oe&&M.normalMapType===Xo,packedNormalMap:Oe&&M.normalMapType===Xo&&ag(M.normalMap.format),metalnessMap:He,roughnessMap:Ge,anisotropy:N,anisotropyMap:Y,clearcoat:Je,clearcoatMap:ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:K,dispersion:Ce,retroreflection:A,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:gt,sheen:H,sheenColorMap:zt,sheenRoughnessMap:St,specularMap:_t,specularColorMap:Bt,specularIntensityMap:Yt,transmission:k,transmissionMap:ee,thicknessMap:L,gradientMap:xt,opaque:M.transparent===!1&&M.blending===Xs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:yt,alphaHash:ct,combine:M.combine,mapUv:ae&&v(M.map.channel),aoMapUv:xe&&v(M.aoMap.channel),lightMapUv:Se&&v(M.lightMap.channel),bumpMapUv:fe&&v(M.bumpMap.channel),normalMapUv:Oe&&v(M.normalMap.channel),displacementMapUv:Be&&v(M.displacementMap.channel),emissiveMapUv:dn&&v(M.emissiveMap.channel),metalnessMapUv:He&&v(M.metalnessMap.channel),roughnessMapUv:Ge&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:ht&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:mt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(M.sheenRoughnessMap.channel),specularMapUv:_t&&v(M.specularMap.channel),specularColorMapUv:Bt&&v(M.specularColorMap.channel),specularIntensityMapUv:Yt&&v(M.specularIntensityMap.channel),transmissionMapUv:ee&&v(M.transmissionMap.channel),thicknessMapUv:L&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Oe||N),vertexNormals:!!W.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(ae||Q),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||W.attributes.normal===void 0&&Oe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Nt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Vt,numSunLights:u.sun.length,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numSunLightShadows:u.sunShadowMap.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&Me.getTransfer(M.map.colorSpace)===Re,decodeVideoTextureEmissive:dn&&M.emissiveMap.isVideoTexture===!0&&Me.getTransfer(M.emissiveMap.colorSpace)===Re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Le,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function _(M){let u=[];if(M.shaderID?u.push(M.shaderID):(u.push(M.customVertexShaderID),u.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)u.push(b),u.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(p(u,M),C(u,M),u.push(i.outputColorSpace)),u.push(M.customProgramCacheKey),u.join()}function p(M,u){M.push(u.precision),M.push(u.outputColorSpace),M.push(u.envMapMode),M.push(u.envMapCubeUVHeight),M.push(u.mapUv),M.push(u.alphaMapUv),M.push(u.lightMapUv),M.push(u.aoMapUv),M.push(u.bumpMapUv),M.push(u.normalMapUv),M.push(u.displacementMapUv),M.push(u.emissiveMapUv),M.push(u.metalnessMapUv),M.push(u.roughnessMapUv),M.push(u.anisotropyMapUv),M.push(u.clearcoatMapUv),M.push(u.clearcoatNormalMapUv),M.push(u.clearcoatRoughnessMapUv),M.push(u.iridescenceMapUv),M.push(u.iridescenceThicknessMapUv),M.push(u.sheenColorMapUv),M.push(u.sheenRoughnessMapUv),M.push(u.specularMapUv),M.push(u.specularColorMapUv),M.push(u.specularIntensityMapUv),M.push(u.transmissionMapUv),M.push(u.thicknessMapUv),M.push(u.combine),M.push(u.fogExp2),M.push(u.sizeAttenuation),M.push(u.morphTargetsCount),M.push(u.morphAttributeCount),M.push(u.numSunLights),M.push(u.numDirLights),M.push(u.numPointLights),M.push(u.numSpotLights),M.push(u.numSpotLightMaps),M.push(u.numHemiLights),M.push(u.numRectAreaLights),M.push(u.numSunLightShadows),M.push(u.numDirLightShadows),M.push(u.numPointLightShadows),M.push(u.numSpotLightShadows),M.push(u.numSpotLightShadowsWithMaps),M.push(u.numLightProbes),M.push(u.shadowMapType),M.push(u.toneMapping),M.push(u.numClippingPlanes),M.push(u.numClipIntersection),M.push(u.depthPacking)}function C(M,u){a.disableAll(),u.instancing&&a.enable(0),u.instancingColor&&a.enable(1),u.instancingMorph&&a.enable(2),u.matcap&&a.enable(3),u.envMap&&a.enable(4),u.normalMapObjectSpace&&a.enable(5),u.normalMapTangentSpace&&a.enable(6),u.clearcoat&&a.enable(7),u.iridescence&&a.enable(8),u.alphaTest&&a.enable(9),u.vertexColors&&a.enable(10),u.vertexAlphas&&a.enable(11),u.vertexUv1s&&a.enable(12),u.vertexUv2s&&a.enable(13),u.vertexUv3s&&a.enable(14),u.vertexTangents&&a.enable(15),u.anisotropy&&a.enable(16),u.alphaHash&&a.enable(17),u.batching&&a.enable(18),u.dispersion&&a.enable(19),u.retroreflection&&a.enable(24),u.batchingColor&&a.enable(20),u.gradientMap&&a.enable(21),u.packedNormalMap&&a.enable(22),u.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),u.fog&&a.enable(0),u.useFog&&a.enable(1),u.flatShading&&a.enable(2),u.logarithmicDepthBuffer&&a.enable(3),u.reversedDepthBuffer&&a.enable(4),u.skinning&&a.enable(5),u.morphTargets&&a.enable(6),u.morphNormals&&a.enable(7),u.morphColors&&a.enable(8),u.premultipliedAlpha&&a.enable(9),u.shadowMapEnabled&&a.enable(10),u.doubleSided&&a.enable(11),u.flipSided&&a.enable(12),u.useDepthPacking&&a.enable(13),u.dithering&&a.enable(14),u.transmission&&a.enable(15),u.sheen&&a.enable(16),u.opaque&&a.enable(17),u.pointsUvs&&a.enable(18),u.decodeVideoTexture&&a.enable(19),u.decodeVideoTextureEmissive&&a.enable(20),u.alphaToCoverage&&a.enable(21),u.numLightProbeGrids>0&&a.enable(22),u.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function I(M){let u=m[M.type],b;if(u){let B=hi[u];b=Jh.clone(B.uniforms)}else b=M.uniforms;return b}function T(M,u){let b=f.get(u);return b!==void 0?++b.usedTimes:(b=new sg(i,u,M,s),h.push(b),f.set(u,b)),b}function o(M){if(--M.usedTimes===0){let u=h.indexOf(M);h[u]=h[h.length-1],h.pop(),f.delete(M.cacheKey),M.destroy()}}function w(M){l.remove(M)}function P(){l.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:I,acquireProgram:T,releaseProgram:o,releaseShaderCache:w,programs:h,dispose:P}}function lg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function l(d,m,v,E,_,p){let C=i[t];return C===void 0?(C={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:_,group:p},i[t]=C):(C.id=d.id,C.object=d,C.geometry=m,C.material=v,C.materialVariant=a(d),C.groupOrder=E,C.renderOrder=d.renderOrder,C.z=_,C.group=p),t++,C}function c(d,m,v,E,_,p,C){C.reversedDepth===!0&&(_=-_);let I=l(d,m,v,E,_,p);v.transmission>0?n.push(I):v.transparent===!0?s.push(I):e.push(I)}function h(d,m,v,E,_,p){let C=l(d,m,v,E,_,p);v.transmission>0?n.unshift(C):v.transparent===!0?s.unshift(C):e.unshift(C)}function f(d,m){e.length>1&&e.sort(d||cg),n.length>1&&n.sort(m||mu),s.length>1&&s.sort(m||mu)}function g(){for(let d=t,m=i.length;d<m;d++){let v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:f}}function hg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gu,i.set(n,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new te};break;case"SpotLight":e={position:new O,direction:new O,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function dg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fg=0;function pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mg(i){let t=new ug,e=dg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);let s=new O,r=new Ue,a=new Ue;function l(h){let f=0,g=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,v=0,E=0,_=0,p=0,C=0,I=0,T=0,o=0,w=0,P=0,M=0,u=0,b=0;h.sort(pg);for(let z=0,G=h.length;z<G;z++){let D=h[z],W=D.color,$=D.intensity,J=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Xi?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=W.r*$,g+=W.g*$,d+=W.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],$);b++}else if(D.isSunLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[v]=st,n.sunShadowMap[v]=rt;let Xt=nt.getViewportCount();for(let Vt=0;Vt<Xt;Vt++)n.sunShadowMatrix[E+Vt]=nt.getMatrix(Vt),n.sunShadowCascade[E+Vt]=nt._cascadeData[Vt];E+=Xt,v++}n.sun[m]=q,m++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[_]=st,n.directionalShadowMap[_]=rt,n.directionalShadowMatrix[_]=D.shadow.matrix,o++}n.directional[_]=q,_++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(W).multiplyScalar($),q.distance=J,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[C]=q;let nt=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,nt.updateMatrices(D),D.castShadow&&u++),n.spotLightMatrix[C]=nt.matrix,D.castShadow){let st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[C]=st,n.spotShadowMap[C]=rt,P++}C++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(W).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=q,I++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let nt=D.shadow,st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[p]=st,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=q,p++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[T]=q,T++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=d;let B=n.hash;(B.sunLength!==m||B.directionalLength!==_||B.pointLength!==p||B.spotLength!==C||B.rectAreaLength!==I||B.hemiLength!==T||B.numSunShadows!==v||B.numDirectionalShadows!==o||B.numPointShadows!==w||B.numSpotShadows!==P||B.numSpotMaps!==M||B.numLightProbes!==b)&&(n.sun.length=m,n.directional.length=_,n.spot.length=C,n.rectArea.length=I,n.point.length=p,n.hemi.length=T,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=o,n.directionalShadowMap.length=o,n.directionalShadowMatrix.length=o,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+M-u,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=b,B.sunLength=m,B.directionalLength=_,B.pointLength=p,B.spotLength=C,B.rectAreaLength=I,B.hemiLength=T,B.numSunShadows=v,B.numDirectionalShadows=o,B.numPointShadows=w,B.numSpotShadows=P,B.numSpotMaps=M,B.numLightProbes=b,n.version=fg++)}function c(h,f){let g=0,d=0,m=0,v=0,E=0,_=0,p=f.matrixWorldInverse;for(let C=0,I=h.length;C<I;C++){let T=h[C];if(T.isSunLight){let o=n.sun[g];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),g++}else if(T.isDirectionalLight){let o=n.directional[d];o.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(s),o.direction.transformDirection(p),d++}else if(T.isSpotLight){let o=n.spot[v];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),o.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(s),o.direction.transformDirection(p),v++}else if(T.isRectAreaLight){let o=n.rectArea[E];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),o.halfWidth.set(T.width*.5,0,0),o.halfHeight.set(0,T.height*.5,0),o.halfWidth.applyMatrix4(a),o.halfHeight.applyMatrix4(a),E++}else if(T.isPointLight){let o=n.point[m];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){let o=n.hemi[_];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),_++}}}return{setup:l,setupView:c,state:n}}function _u(i){let t=new mg(i),e=[],n=[],s=[];function r(d){g.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function l(d){n.push(d)}function c(d){s.push(d)}function h(){t.setup(e)}function f(d){t.setupView(e,d)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:f,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function gg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new _u(i),t.set(s,[l])):r>=a.length?(l=new _u(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`,yg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],vg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],xu=new Ue,Yr=new O,_c=new O;function Mg(i,t,e){let n=new Bs,s=new Gt,r=new Gt,a=new Ye,l=new Ga,c=new Wa,h={},f=e.maxTextureSize,g={[ki]:wn,[wn]:ki,[Le]:Le},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new un;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new qe(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let p=this.type;this.render=function(w,P,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===dh&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);let u=i.getRenderTarget(),b=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),z=i.state;z.setBlending(li),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=p!==this.type;G&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=w.length;D<W;D++){let $=w[D],J=$.shadow;if(J===void 0){qt("WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let rt=J.getFrameExtents();s.multiply(rt),r.copy(J.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/rt.x),s.x=r.x*rt.x,J.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/rt.y),s.y=r.y*rt.y,J.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=q,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ws){if($.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Cn(s.x,s.y,{format:Xi,type:ii,minFilter:en,magFilter:en,generateMipmaps:!1}),J.map.texture.name=$.name+".shadowMap",J.map.depthTexture=new Ni(s.x,s.y,ni),J.map.depthTexture.name=$.name+".shadowMapDepth",J.map.depthTexture.format=ai,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=cn,J.map.depthTexture.magFilter=cn}else $.isPointLight?(J.map=new $o(s.x),J.map.depthTexture=new ka(s.x,ei)):(J.map=new Cn(s.x,s.y),J.map.depthTexture=new Ni(s.x,s.y,ei)),J.map.depthTexture.name=$.name+".shadowMap",J.map.depthTexture.format=ai,this.type===is?(J.map.depthTexture.compareFunction=q?qo:Yo,J.map.depthTexture.minFilter=en,J.map.depthTexture.magFilter=en):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=cn,J.map.depthTexture.magFilter=cn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let nt=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();$.isPointLight!==!0&&J.updateMatrices($,M);for(let st=0;st<nt;st++){let Xt=J.getCamera(st);if($.isPointLight){let Vt=J.camera,Pe=J.matrix,jt=$.distance||Vt.far;jt!==Vt.far&&(Vt.far=jt,Vt.updateProjectionMatrix()),Yr.setFromMatrixPosition($.matrixWorld),Vt.position.copy(Yr),_c.copy(Vt.position),_c.add(yg[st]),Vt.up.copy(vg[st]),Vt.lookAt(_c),Vt.updateMatrixWorld(),Pe.makeTranslation(-Yr.x,-Yr.y,-Yr.z),xu.multiplyMatrices(Vt.projectionMatrix,Vt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(xu,Vt.coordinateSystem,Vt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,st),i.clear();else{st===0&&(i.setRenderTarget(J.map),i.clear());let Vt=J.getViewport(st);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),z.viewport(a)}n=J.getFrustum(st),T(P,M,Xt,$,this.type)}J.isPointLightShadow!==!0&&this.type===Ws&&C(J,M),J.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(u,b,B)};function C(w,P){let M=t.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Cn(s.x,s.y,{format:Xi,type:ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,M,d,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,M,m,E,null)}function I(w,P,M,u){let b=null,B=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)b=B;else if(b=M.isPointLight===!0?c:l,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=b.uuid,G=P.uuid,D=h[z];D===void 0&&(D={},h[z]=D);let W=D[G];W===void 0&&(W=b.clone(),D[G]=W,P.addEventListener("dispose",o)),b=W}if(b.visible=P.visible,b.wireframe=P.wireframe,u===Ws?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:g[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=M}return b}function T(w,P,M,u,b){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Ws)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let G=t.update(w),D=w.material;if(Array.isArray(D)){let W=G.groups;for(let $=0,J=W.length;$<J;$++){let rt=W[$],q=D[rt.materialIndex];if(q&&q.visible){let nt=I(w,q,u,b);w.onBeforeShadow(i,w,P,M,G,nt,rt),i.renderBufferDirect(M,null,G,nt,w,rt),w.onAfterShadow(i,w,P,M,G,nt,rt)}}}else if(D.visible){let W=I(w,D,u,b);w.onBeforeShadow(i,w,P,M,G,W,null),i.renderBufferDirect(M,null,G,W,w,null),w.onAfterShadow(i,w,P,M,G,W,null)}}let z=w.children;for(let G=0,D=z.length;G<D;G++)T(z[G],P,M,u,b)}function o(w){w.target.removeEventListener("dispose",o);for(let M in h){let u=h[M],b=w.target.uuid;b in u&&(u[b].dispose(),delete u[b])}}}function Sg(i,t){function e(){let L=!1,xt=new Ye,Q=null,yt=new Ye(0,0,0,0);return{setMask:function(ct){Q!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),Q=ct)},setLocked:function(ct){L=ct},setClear:function(ct,it,kt,Ot,y){y===!0&&(ct*=Ot,it*=Ot,kt*=Ot),xt.set(ct,it,kt,Ot),yt.equals(xt)===!1&&(i.clearColor(ct,it,kt,Ot),yt.copy(xt))},reset:function(){L=!1,Q=null,yt.set(-1,0,0,0)}}}function n(){let L=!1,xt=!1,Q=null,yt=null,ct=null;return{setReversed:function(it){if(xt!==it){let kt=t.get("EXT_clip_control");it?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),xt=it;let Ot=ct;ct=null,this.setClear(Ot)}},getReversed:function(){return xt},setTest:function(it){it?et(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!L&&(i.depthMask(it),Q=it)},setFunc:function(it){if(xt&&(it=Yh[it]),yt!==it){switch(it){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=it}},setLocked:function(it){L=it},setClear:function(it){ct!==it&&(ct=it,xt&&(it=1-it),i.clearDepth(it))},reset:function(){L=!1,Q=null,yt=null,ct=null,xt=!1}}}function s(){let L=!1,xt=null,Q=null,yt=null,ct=null,it=null,kt=null,Ot=null,y=null;return{setTest:function(X){L||(X?et(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(X){xt!==X&&!L&&(i.stencilMask(X),xt=X)},setFunc:function(X,j,dt){(Q!==X||yt!==j||ct!==dt)&&(i.stencilFunc(X,j,dt),Q=X,yt=j,ct=dt)},setOp:function(X,j,dt){(it!==X||kt!==j||Ot!==dt)&&(i.stencilOp(X,j,dt),it=X,kt=j,Ot=dt)},setLocked:function(X){L=X},setClear:function(X){y!==X&&(i.clearStencil(X),y=X)},reset:function(){L=!1,xt=null,Q=null,yt=null,ct=null,it=null,kt=null,Ot=null,y=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,f={},g={},d={},m=new WeakMap,v=[],E=null,_=!1,p=null,C=null,I=null,T=null,o=null,w=null,P=null,M=new te(0,0,0),u=0,b=!1,B=null,z=null,G=null,D=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,rt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=rt>=2);let nt=null,st={},Xt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Pe=new Ye().fromArray(Xt),jt=new Ye().fromArray(Vt);function Ae(L,xt,Q,yt){let ct=new Uint8Array(4),it=i.createTexture();i.bindTexture(L,it),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Q;kt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(xt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return it}let Z={};Z[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ps),fe(!1),Oe(Bl),et(i.CULL_FACE),xe(li);function et(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Nt(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Jt(L,xt){return d[L]!==xt?(i.bindFramebuffer(L,xt),d[L]=xt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Rt(L,xt){let Q=v,yt=!1;if(L){Q=m.get(xt),Q===void 0&&(Q=[],m.set(xt,Q));let ct=L.textures;if(Q.length!==ct.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,kt=ct.length;it<kt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=ct.length,yt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,yt=!0);yt&&i.drawBuffers(Q)}function ae(L){return E!==L?(i.useProgram(L),E=L,!0):!1}let Ve={[ss]:i.FUNC_ADD,[ph]:i.FUNC_SUBTRACT,[mh]:i.FUNC_REVERSE_SUBTRACT};Ve[gh]=i.MIN,Ve[_h]=i.MAX;let ce={[xh]:i.ZERO,[yh]:i.ONE,[vh]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[Sh]:i.DST_ALPHA,[Mh]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[bh]:i.ONE_MINUS_DST_ALPHA,[Ah]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ph]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(L,xt,Q,yt,ct,it,kt,Ot,y,X){if(L===li){_===!0&&(Nt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),L!==fh){if(L!==p||X!==b){if((C!==ss||o!==ss)&&(i.blendEquation(i.FUNC_ADD),C=ss,o=ss),X)switch(L){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",L);break}else switch(L){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hl:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",L);break}I=null,T=null,w=null,P=null,M.set(0,0,0),u=0,p=L,b=X}return}ct=ct||xt,it=it||Q,kt=kt||yt,(xt!==C||ct!==o)&&(i.blendEquationSeparate(Ve[xt],Ve[ct]),C=xt,o=ct),(Q!==I||yt!==T||it!==w||kt!==P)&&(i.blendFuncSeparate(ce[Q],ce[yt],ce[it],ce[kt]),I=Q,T=yt,w=it,P=kt),(Ot.equals(M)===!1||y!==u)&&(i.blendColor(Ot.r,Ot.g,Ot.b,y),M.copy(Ot),u=y),p=L,b=!1}function Se(L,xt){L.side===Le?Nt(i.CULL_FACE):et(i.CULL_FACE);let Q=L.side===wn;xt&&(Q=!Q),fe(Q),L.blending===Xs&&L.transparent===!1?xe(li):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let yt=L.stencilWrite;l.setTest(yt),yt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(L){B!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),B=L)}function Oe(L){L!==hh?(et(i.CULL_FACE),L!==z&&(L===Bl?i.cullFace(i.BACK):L===uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),z=L}function Be(L){L!==G&&(J&&i.lineWidth(L),G=L)}function dn(L,xt,Q){L?(et(i.POLYGON_OFFSET_FILL),(D!==xt||W!==Q)&&(D=xt,W=Q,a.getReversed()&&(xt=-xt),i.polygonOffset(xt,Q))):Nt(i.POLYGON_OFFSET_FILL)}function He(L){L?et(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function Ge(L){L===void 0&&(L=i.TEXTURE0+$-1),nt!==L&&(i.activeTexture(L),nt=L)}function N(L,xt,Q){Q===void 0&&(nt===null?Q=i.TEXTURE0+$-1:Q=nt);let yt=st[Q];yt===void 0&&(yt={type:void 0,texture:void 0},st[Q]=yt),(yt.type!==L||yt.texture!==xt)&&(nt!==Q&&(i.activeTexture(Q),nt=Q),i.bindTexture(L,xt||Z[L]),yt.type=L,yt.texture=xt)}function Je(){let L=st[nt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ce(){try{i.compressedTexImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function H(){try{i.texSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function ht(){try{i.texStorage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function mt(){try{i.texStorage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function K(){try{i.texImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function tt(){try{i.texImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function gt(L){return g[L]!==void 0?g[L]:i.getParameter(L)}function zt(L,xt){g[L]!==xt&&(i.pixelStorei(L,xt),g[L]=xt)}function St(L){Pe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function _t(L){jt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),jt.copy(L))}function Bt(L,xt){let Q=h.get(xt);Q===void 0&&(Q=new WeakMap,h.set(xt,Q));let yt=Q.get(L);yt===void 0&&(yt=i.getUniformBlockIndex(xt,L.name),Q.set(L,yt))}function Yt(L,xt){let yt=h.get(xt).get(L);c.get(xt)!==yt&&(i.uniformBlockBinding(xt,yt,L.__bindingPointIndex),c.set(xt,yt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},nt=null,st={},d={},m=new WeakMap,v=[],E=null,_=!1,p=null,C=null,I=null,T=null,o=null,w=null,P=null,M=new te(0,0,0),u=0,b=!1,B=null,z=null,G=null,D=null,W=null,Pe.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:et,disable:Nt,bindFramebuffer:Jt,drawBuffers:Rt,useProgram:ae,setBlending:xe,setMaterial:Se,setFlipSided:fe,setCullFace:Oe,setLineWidth:Be,setPolygonOffset:dn,setScissorTest:He,activeTexture:Ge,bindTexture:N,unbindTexture:Je,compressedTexImage2D:Ce,compressedTexImage3D:A,texImage2D:K,texImage3D:tt,pixelStorei:zt,getParameter:gt,updateUBOMapping:Bt,uniformBlockBinding:Yt,texStorage2D:ht,texStorage3D:mt,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:St,viewport:_t,reset:ee}}function bg(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Gt,f=new WeakMap,g=new Set,d,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return v?new OffscreenCanvas(A,x):pr("canvas")}function _(A,x,H){let k=1,Y=Ce(A);if((Y.width>H||Y.height>H)&&(k=H/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(k*Y.width),mt=Math.floor(k*Y.height);d===void 0&&(d=E(ht,mt));let K=x?E(ht,mt):d;return K.width=ht,K.height=mt,K.getContext("2d").drawImage(A,0,0,ht,mt),qt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ht+"x"+mt+")."),K}else return"data"in A&&qt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function C(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,H,k,Y,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;k&&(mt=t.get("EXT_texture_norm16"),mt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8),H===i.UNSIGNED_SHORT&&mt&&(K=mt.R16_EXT),H===i.SHORT&&mt&&(K=mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),x===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8),H===i.UNSIGNED_SHORT&&mt&&(K=mt.RG16_EXT),H===i.SHORT&&mt&&(K=mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&mt&&(K=mt.RGB16_EXT),H===i.SHORT&&mt&&(K=mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let tt=ht?fr:Me.getTransfer(Y);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=tt===Re?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&mt&&(K=mt.RGBA16_EXT),H===i.SHORT&&mt&&(K=mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function o(A,x){let H;return A?x===null||x===ei||x===qs?H=i.DEPTH24_STENCIL8:x===ni?H=i.DEPTH32F_STENCIL8:x===Ys&&(H=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===qs?H=i.DEPTH_COMPONENT24:x===ni?H=i.DEPTH_COMPONENT32F:x===Ys&&(H=i.DEPTH_COMPONENT16),H}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){let x=A.target;x.removeEventListener("dispose",P),u(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&g.delete(x)}function M(A){let x=A.target;x.removeEventListener("dispose",M),B(x)}function u(A){let x=n.get(A);if(x.__webglInit===void 0)return;let H=A.source,k=m.get(H);if(k){let Y=k[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(A),Object.keys(k).length===0&&m.delete(H)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let H=A.source,k=m.get(H);delete k[x.__cacheKey],a.memory.textures--}function B(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let Y=0;Y<x.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let k=0,Y=H.length;k<Y;k++){let ht=n.get(H[k]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(H[k])}n.remove(A)}let z=0;function G(){z=0}function D(){return z}function W(A){z=A}function $(){let A=z;return A>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function rt(A,x){let H=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let k=A.image;if(k===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function q(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Nt(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function nt(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Nt(H,A,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function st(A,x){let H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Jt(H,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let Xt={[Ra]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},Vt={[cn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},Pe={[Oh]:i.NEVER,[Vh]:i.ALWAYS,[Bh]:i.LESS,[Yo]:i.LEQUAL,[Hh]:i.EQUAL,[qo]:i.GEQUAL,[zh]:i.GREATER,[kh]:i.NOTEQUAL};function jt(A,x){if(x.type===ni&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===oo||x.magFilter===Br||x.magFilter===Gi||x.minFilter===en||x.minFilter===oo||x.minFilter===Br||x.minFilter===Gi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Xt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Xt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Xt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Vt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Vt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Br&&x.minFilter!==Gi||x.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));let k=x.source,Y=m.get(k);Y===void 0&&(Y={},m.set(k,Y));let ht=J(x);if(ht!==A.__cacheKey){Y[ht]===void 0&&(Y[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Y[ht].usedTimes++;let mt=Y[A.__cacheKey];mt!==void 0&&(Y[A.__cacheKey].usedTimes--,mt.usedTimes===0&&b(x)),A.__cacheKey=ht,A.__webglTexture=Y[ht].texture}return H}function Z(A,x,H){return Math.floor(Math.floor(A/H)/x)}function et(A,x,H,k){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,k,x.data);else{ht.sort((zt,St)=>zt.start-St.start);let mt=0;for(let zt=1;zt<ht.length;zt++){let St=ht[mt],_t=ht[zt],Bt=St.start+St.count,Yt=Z(_t.start,x.width,4),ee=Z(St.start,x.width,4);_t.start<=Bt+1&&Yt===ee&&Z(_t.start+_t.count-1,x.width,4)===Yt?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++mt,ht[mt]=_t)}ht.length=mt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let zt=0,St=ht.length;zt<St;zt++){let _t=ht[zt],Bt=Math.floor(_t.start/4),Yt=Math.ceil(_t.count/4),ee=Bt%x.width,L=Math.floor(Bt/x.width),xt=Yt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,ee,L,xt,Q,H,k,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function Nt(A,x,H){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);let Y=Ae(A,x),ht=x.source;e.bindTexture(k,A.__webglTexture,i.TEXTURE0+H);let mt=n.get(ht);if(ht.version!==mt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Q=Me.getPrimaries(Me.workingColorSpace),yt=x.colorSpace===Ei?null:Me.getPrimaries(x.colorSpace),ct=x.colorSpace===Ei||Q===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=_(x.image,!1,s.maxTextureSize);tt=Je(x,tt);let gt=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),St=T(x.internalFormat,gt,zt,x.normalized,x.colorSpace,x.isVideoTexture);jt(k,x);let _t,Bt=x.mipmaps,Yt=x.isVideoTexture!==!0,ee=mt.__version===void 0||Y===!0,L=ht.dataReady,xt=w(x,tt);if(x.isDepthTexture)St=o(x.format===Wi,x.type),ee&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,gt,zt,null));else if(x.isDataTexture)if(Bt.length>0){Yt&&ee&&e.texStorage2D(i.TEXTURE_2D,xt,St,Bt[0].width,Bt[0].height);for(let Q=0,yt=Bt.length;Q<yt;Q++)_t=Bt[Q],Yt?L&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,_t.width,_t.height,gt,zt,_t.data):e.texImage2D(i.TEXTURE_2D,Q,St,_t.width,_t.height,0,gt,zt,_t.data);x.generateMipmaps=!1}else Yt?(ee&&e.texStorage2D(i.TEXTURE_2D,xt,St,tt.width,tt.height),L&&et(x,tt,gt,zt)):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,gt,zt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Yt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,Bt[0].width,Bt[0].height,tt.depth);for(let Q=0,yt=Bt.length;Q<yt;Q++)if(_t=Bt[Q],x.format!==Yn)if(gt!==null)if(Yt){if(L)if(x.layerUpdates.size>0){let ct=uc(_t.width,_t.height,x.format,x.type);for(let it of x.layerUpdates){let kt=_t.data.subarray(it*ct/_t.data.BYTES_PER_ELEMENT,(it+1)*ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,_t.width,_t.height,1,gt,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_t.width,_t.height,tt.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,St,_t.width,_t.height,tt.depth,0,_t.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_t.width,_t.height,tt.depth,gt,zt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,St,_t.width,_t.height,tt.depth,0,gt,zt,_t.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Yt&&ee&&e.texStorage2D(i.TEXTURE_2D,xt,St,Bt[0].width,Bt[0].height);for(let Q=0,yt=Bt.length;Q<yt;Q++)_t=Bt[Q],x.format!==Yn?gt!==null?Yt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,St,_t.width,_t.height,0,_t.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?L&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,_t.width,_t.height,gt,zt,_t.data):e.texImage2D(i.TEXTURE_2D,Q,St,_t.width,_t.height,0,gt,zt,_t.data)}else if(x.isDataArrayTexture)if(Yt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){let Q=uc(tt.width,tt.height,x.format,x.type);for(let yt of x.layerUpdates){let ct=tt.data.subarray(yt*Q/tt.data.BYTES_PER_ELEMENT,(yt+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,tt.width,tt.height,1,gt,zt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,zt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,gt,zt,tt.data);else if(x.isData3DTexture)Yt?(ee&&e.texStorage3D(i.TEXTURE_3D,xt,St,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,zt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,gt,zt,tt.data);else if(x.isFramebufferTexture){if(ee)if(Yt)e.texStorage2D(i.TEXTURE_2D,xt,St,tt.width,tt.height);else{let Q=tt.width,yt=tt.height;for(let ct=0;ct<xt;ct++)e.texImage2D(i.TEXTURE_2D,ct,St,Q,yt,0,gt,zt,null),Q>>=1,yt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),g.add(x),Q.onpaint=yt=>{let ct=yt.changedElements;for(let it of g)ct.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let ct=i.RGBA,it=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ct,it,kt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Yt&&ee){let Q=Ce(Bt[0]);e.texStorage2D(i.TEXTURE_2D,xt,St,Q.width,Q.height)}for(let Q=0,yt=Bt.length;Q<yt;Q++)_t=Bt[Q],Yt?L&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,gt,zt,_t):e.texImage2D(i.TEXTURE_2D,Q,St,gt,zt,_t);x.generateMipmaps=!1}else if(Yt){if(ee){let Q=Ce(tt);e.texStorage2D(i.TEXTURE_2D,xt,St,Q.width,Q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,zt,tt)}else e.texImage2D(i.TEXTURE_2D,0,St,gt,zt,tt);p(x)&&C(k),mt.__version=ht.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Jt(A,x,H){if(x.image.length!==6)return;let k=Ae(A,x),Y=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let ht=n.get(Y);if(Y.version!==ht.__version||k===!0){e.activeTexture(i.TEXTURE0+H);let mt=Me.getPrimaries(Me.workingColorSpace),K=x.colorSpace===Ei?null:Me.getPrimaries(x.colorSpace),tt=x.colorSpace===Ei||mt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,zt=x.image[0]&&x.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!gt&&!zt?St[it]=_(x.image[it],!0,s.maxCubemapSize):St[it]=zt?x.image[it].image:x.image[it],St[it]=Je(x,St[it]);let _t=St[0],Bt=r.convert(x.format,x.colorSpace),Yt=r.convert(x.type),ee=T(x.internalFormat,Bt,Yt,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,xt=ht.__version===void 0||k===!0,Q=Y.dataReady,yt=w(x,_t);jt(i.TEXTURE_CUBE_MAP,x);let ct;if(gt){L&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ee,_t.width,_t.height);for(let it=0;it<6;it++){ct=St[it].mipmaps;for(let kt=0;kt<ct.length;kt++){let Ot=ct[kt];x.format!==Yn?Bt!==null?L?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt,0,0,Ot.width,Ot.height,Bt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt,ee,Ot.width,Ot.height,0,Ot.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt,0,0,Ot.width,Ot.height,Bt,Yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt,ee,Ot.width,Ot.height,0,Bt,Yt,Ot.data)}}}else{if(ct=x.mipmaps,L&&xt){ct.length>0&&yt++;let it=Ce(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ee,it.width,it.height)}for(let it=0;it<6;it++)if(zt){L?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,Bt,Yt,St[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ee,St[it].width,St[it].height,0,Bt,Yt,St[it].data);for(let kt=0;kt<ct.length;kt++){let y=ct[kt].image[it].image;L?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt+1,0,0,y.width,y.height,Bt,Yt,y.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt+1,ee,y.width,y.height,0,Bt,Yt,y.data)}}else{L?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Bt,Yt,St[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ee,Bt,Yt,St[it]);for(let kt=0;kt<ct.length;kt++){let Ot=ct[kt];L?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt+1,0,0,Bt,Yt,Ot.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt+1,ee,Bt,Yt,Ot.image[it])}}}p(x)&&C(i.TEXTURE_CUBE_MAP),ht.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Rt(A,x,H,k,Y,ht){let mt=r.convert(H.format,H.colorSpace),K=r.convert(H.type),tt=T(H.internalFormat,mt,K,H.normalized,H.colorSpace),gt=n.get(x),zt=n.get(H);if(zt.__renderTarget=x,!gt.__hasExternalTextures){let St=Math.max(1,x.width>>ht),_t=Math.max(1,x.height>>ht);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ht,tt,St,_t,x.depth,0,mt,K,null):e.texImage2D(Y,ht,tt,St,_t,0,mt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,zt.__webglTexture,0,He(x)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,zt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(A,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let k=x.depthTexture,Y=k&&k.isDepthTexture?k.type:null,ht=o(x.stencilBuffer,Y),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),ht,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let k=x.textures;for(let Y=0;Y<k.length;Y++){let ht=k[Y],mt=r.convert(ht.format,ht.colorSpace),K=r.convert(ht.type),tt=T(ht.internalFormat,mt,K,ht.normalized,ht.colorSpace);Ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),tt,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(A,x,H){let k=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),jt(i.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),zt=r.convert(x.depthTexture.type),St;x.depthTexture.format===ai?St=i.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(St=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,x.width,x.height,0,gt,zt,null)}}else rt(x.depthTexture,0);let ht=Y.__webglTexture,mt=He(x),K=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,tt=x.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ai)Ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,ht,0);else if(x.depthTexture.format===Wi)Ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,ht,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(A){let x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=k}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let k=0;k<6;k++)Ve(x.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?Ve(x.__webglFramebuffer[0],A,0):Ve(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),ae(x.__webglDepthbuffer[k],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ht)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ae(x.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(A,x,H){let k=n.get(A);x!==void 0&&Rt(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ce(A)}function Se(A){let x=A.texture,H=n.get(A),k=n.get(x);A.addEventListener("dispose",M);let Y=A.textures,ht=A.isWebGLCubeRenderTarget===!0,mt=Y.length>1;if(mt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,a.memory.textures++),ht){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let tt=0;tt<x.mipmaps.length;tt++)H.__webglFramebuffer[K][tt]=i.createFramebuffer()}else H.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)H.__webglFramebuffer[K]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(mt)for(let K=0,tt=Y.length;K<tt;K++){let gt=n.get(Y[K]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ge(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let tt=Y[K];H.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let gt=r.convert(tt.format,tt.colorSpace),zt=r.convert(tt.type),St=T(tt.internalFormat,gt,zt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),_t=He(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,H.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),jt(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Rt(H.__webglFramebuffer[K][tt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else Rt(H.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let K=0,tt=Y.length;K<tt;K++){let gt=Y[K],zt=n.get(gt),St=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,zt.__webglTexture),jt(St,gt),Rt(H.__webglFramebuffer,A,gt,i.COLOR_ATTACHMENT0+K,St,0),p(gt)&&C(St)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,k.__webglTexture),jt(K,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Rt(H.__webglFramebuffer[tt],A,x,i.COLOR_ATTACHMENT0,K,tt);else Rt(H.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&C(K),e.unbindTexture()}A.depthBuffer&&ce(A)}function fe(A){let x=A.textures;for(let H=0,k=x.length;H<k;H++){let Y=x[H];if(p(Y)){let ht=I(A),mt=n.get(Y).__webglTexture;e.bindTexture(ht,mt),C(ht),e.unbindTexture()}}}let Oe=[],Be=[];function dn(A){if(A.samples>0){if(Ge(A)===!1){let x=A.textures,H=A.width,k=A.height,Y=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),K=x.length>1;if(K)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let zt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,H,k,0,0,H,k,Y,i.NEAREST),c===!0&&(Oe.length=0,Be.length=0,Oe.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Oe.push(ht),Be.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let zt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(A){return Math.min(s.maxSamples,A.samples)}function Ge(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){let x=a.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function Je(A,x){let H=A.colorSpace,k=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==dr&&H!==Ei&&(Me.getTransfer(H)===Re?(k!==Yn||Y!==Rn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",H)),x}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=W,this.setTexture2D=rt,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Eg(i,t){function e(n,s=Ei){let r,a=Me.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===jl)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===ec)return i.ALPHA;if(n===nc)return i.RGB;if(n===Yn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Xi)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===Hr||n===zr||n===kr||n===Vr)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===vo||n===Mo||n===So||n===bo||n===Gr||n===Eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===vo)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===To||n===wo||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Fo||n===Uo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===zo||n===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Go||n===Wr||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`,Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Bn({vertexShader:Tg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,f=null,g=null,d=null,m=null,v=null,E=typeof XRWebGLBinding<"u",_=new Tc,p={},C=e.getContextAttributes(),I=null,T=null,o=[],w=[],P=new Gt,M=null,u=null,b=new yn;b.viewport=new Ye;let B=new yn;B.viewport=new Ye;let z=[b,B],G=new io,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=o[Z];return et===void 0&&(et=new Us,o[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=o[Z];return et===void 0&&(et=new Us,o[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=o[Z];return et===void 0&&(et=new Us,o[Z]=et),et.getHandSpace()};function $(Z){let et=w.indexOf(Z.inputSource);if(et===-1)return;let Nt=o[et];Nt!==void 0&&(Nt.update(Z.inputSource,Z.frame,h||a),Nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",rt);for(let Z=0;Z<o.length;Z++){let et=w[Z];et!==null&&(w[Z]=null,o[Z].disconnect(et))}D=null,W=null,_.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(I),m=null,d=null,g=null,s=null,T=null,Ae.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(P.width,P.height,!1),u!==null){let Z=u.camera;Z.fov=u.fov,Z.zoom=u.zoom,Z.updateProjectionMatrix(),u=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",rt),C.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Jt=null,Rt=null;C.depth&&(Rt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=C.stencil?Wi:ai,Jt=C.stencil?qs:ei);let ae={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Cn(d.textureWidth,d.textureHeight,{format:Yn,type:Rn,depthTexture:new Ni(d.textureWidth,d.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Nt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(Z){for(let et=0;et<Z.removed.length;et++){let Nt=Z.removed[et],Jt=w.indexOf(Nt);Jt>=0&&(w[Jt]=null,o[Jt].disconnect(Nt))}for(let et=0;et<Z.added.length;et++){let Nt=Z.added[et],Jt=w.indexOf(Nt);if(Jt===-1){for(let ae=0;ae<o.length;ae++)if(ae>=w.length){w.push(Nt),Jt=ae;break}else if(w[ae]===null){w[ae]=Nt,Jt=ae;break}if(Jt===-1)break}let Rt=o[Jt];Rt&&Rt.connect(Nt)}}let q=new O,nt=new O;function st(Z,et,Nt){q.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(Nt.matrixWorld);let Jt=q.distanceTo(nt),Rt=et.projectionMatrix.elements,ae=Nt.projectionMatrix.elements,Ve=Rt[14]/(Rt[10]-1),ce=Rt[14]/(Rt[10]+1),xe=(Rt[9]+1)/Rt[5],Se=(Rt[9]-1)/Rt[5],fe=(Rt[8]-1)/Rt[0],Oe=(ae[8]+1)/ae[0],Be=Ve*fe,dn=Ve*Oe,He=Jt/(-fe+Oe),Ge=He*-fe;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ge),Z.translateZ(He),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=Ve+He,Je=ce+He,Ce=Be-Ge,A=dn+(Jt-Ge),x=xe*ce/Je*N,H=Se*ce/Je*N;Z.projectionMatrix.makePerspective(Ce,A,x,H,N,Je),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Xt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,Nt=Z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(Nt=_.depthFar)),G.near=B.near=b.near=et,G.far=B.far=b.far=Nt,(D!==G.near||W!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,W=G.far),G.layers.mask=Z.layers.mask|6,b.layers.mask=G.layers.mask&-5,B.layers.mask=G.layers.mask&-3;let Jt=Z.parent,Rt=G.cameras;Xt(G,Jt);for(let ae=0;ae<Rt.length;ae++)Xt(Rt[ae],Jt);Rt.length===2?st(G,b,B):G.projectionMatrix.copy(b.projectionMatrix),u===null&&Z.isPerspectiveCamera&&(u={camera:Z,fov:Z.fov,zoom:Z.zoom}),Vt(Z,G,Jt)};function Vt(Z,et,Nt){Nt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(Nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let Pe=null;function jt(Z,et){if(f=et.getViewerPose(h||a),v=et,f!==null){let Nt=f.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let Jt=!1;Nt.length!==G.cameras.length&&(G.cameras.length=0,Jt=!0);for(let ce=0;ce<Nt.length;ce++){let xe=Nt[ce],Se=null;if(m!==null)Se=m.getViewport(xe);else{let Oe=g.getViewSubImage(d,xe);Se=Oe.viewport,ce===0&&(t.setRenderTargetTextures(T,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(T))}let fe=z[ce];fe===void 0&&(fe=new yn,fe.layers.enable(ce),fe.viewport=new Ye,z[ce]=fe),fe.matrix.fromArray(xe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(xe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Se.x,Se.y,Se.width,Se.height),ce===0&&(G.matrix.copy(fe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Jt===!0&&G.cameras.push(fe)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let ce=g.getDepthInformation(Nt[0]);ce&&ce.isValid&&ce.texture&&_.init(ce,s.renderState)}if(Rt&&Rt.includes("camera-access")&&E){t.state.unbindTexture(),g=n.getBinding();for(let ce=0;ce<Nt.length;ce++){let xe=Nt[ce].camera;if(xe){let Se=p[xe];Se||(Se=new Tr,p[xe]=Se);let fe=g.getCameraImage(xe);Se.sourceTexture=fe}}}}for(let Nt=0;Nt<o.length;Nt++){let Jt=w[Nt],Rt=o[Nt];Jt!==null&&Rt!==void 0&&Rt.update(Jt,et,h||a)}Pe&&Pe(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),v=null}let Ae=new yu;Ae.setAnimationLoop(jt),this.setAnimationLoop=function(Z){Pe=Z},this.dispose=function(){}}},Ag=new Ue,Tu=new ne;Tu.set(-1,0,0,0,1,0,0,0,1);function Cg(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,lc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,C,I,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(_,p):p.isMeshLambertMaterial?(r(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(_,p),g(_,p)):p.isMeshPhongMaterial?(r(_,p),f(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(_,p),d(_,p),p.isMeshPhysicalMaterial&&m(_,p,T)):p.isMeshMatcapMaterial?(r(_,p),v(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),E(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,C,I):p.isSpriteMaterial?h(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===wn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===wn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let C=t.get(p),I=C.envMap,T=C.envMapRotation;I&&(_.envMap.value=I,_.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(T)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Tu),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,C,I){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*C,_.scale.value=I*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function g(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,C){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.retroreflectivity>0&&(_.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function E(_,p){let C=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rg(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,o){let w=o.program;n.uniformBlockBinding(T,w)}function h(T,o){let w=s[T.id];w===void 0&&(_(T),w=f(T),s[T.id]=w,T.addEventListener("dispose",C));let P=o.program;n.updateUBOMapping(T,P);let M=t.render.frame;r[T.id]!==M&&(d(T),r[T.id]=M)}function f(T){let o=g();T.__bindingPointIndex=o;let w=i.createBuffer(),P=T.__size,M=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,o,w),w}function g(){for(let T=0;T<l;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let o=s[T.id],w=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,o);for(let M=0,u=w.length;M<u;M++){let b=w[M];if(Array.isArray(b))for(let B=0,z=b.length;B<z;B++)m(b[B],M,B,P);else m(b,M,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,o,w,P){if(E(T,o,w,P)===!0){let M=T.__offset,u=T.value;if(Array.isArray(u)){let b=0;for(let B=0;B<u.length;B++){let z=u[B],G=p(z);v(z,T.__data,b),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(b+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(u,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,T.__data)}}function v(T,o,w){typeof T=="number"||typeof T=="boolean"?o[0]=T:T.isMatrix3?(o[0]=T.elements[0],o[1]=T.elements[1],o[2]=T.elements[2],o[3]=0,o[4]=T.elements[3],o[5]=T.elements[4],o[6]=T.elements[5],o[7]=0,o[8]=T.elements[6],o[9]=T.elements[7],o[10]=T.elements[8],o[11]=0):ArrayBuffer.isView(T)?o.set(new T.constructor(T.buffer,T.byteOffset,o.length)):T.toArray(o,w)}function E(T,o,w,P){let M=T.value,u=o+"_"+w;if(P[u]===void 0)return typeof M=="number"||typeof M=="boolean"?P[u]=M:ArrayBuffer.isView(M)?P[u]=M.slice():P[u]=M.clone(),!0;{let b=P[u];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return P[u]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function _(T){let o=T.uniforms,w=0,P=16;for(let u=0,b=o.length;u<b;u++){let B=Array.isArray(o[u])?o[u]:[o[u]];for(let z=0,G=B.length;z<G;z++){let D=B[z],W=Array.isArray(D.value)?D.value:[D.value];for(let $=0,J=W.length;$<J;$++){let rt=W[$],q=p(rt),nt=w%P,st=nt%q.boundary,Xt=nt+st;w+=st,Xt!==0&&P-Xt<q.storage&&(w+=P-Xt),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=q.storage}}}let M=w%P;return M>0&&(w+=P-M),T.__size=w,T.__cache={},this}function p(T){let o={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(o.boundary=4,o.storage=4):T.isVector2?(o.boundary=8,o.storage=8):T.isVector3||T.isColor?(o.boundary=16,o.storage=12):T.isVector4?(o.boundary=16,o.storage=16):T.isMatrix3?(o.boundary=48,o.storage=48):T.isMatrix4?(o.boundary=64,o.storage=64):T.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(o.boundary=16,o.storage=T.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",T),o}function C(T){let o=T.target;o.removeEventListener("dispose",C);let w=a.indexOf(o.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[o.id]),delete s[o.id],delete r[o.id]}function I(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:h,dispose:I}}var Pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function Ig(){return ci===null&&(ci=new Ua(Pg,16,16,Xi,ii),ci.name="DFG_LUT",ci.minFilter=en,ci.magFilter=en,ci.wrapS=ri,ci.wrapT=ri,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var jo=class{constructor(t={}){let{canvas:e=Gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Rn}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let E=m,_=new Set([po,fo,uo]),p=new Set([Rn,ei,Ys,qs,co,ho]),C=new Uint32Array(4),I=new Int32Array(4),T=new O,o=null,w=null,P=[],M=[],u=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,B=!1,z=null,G=null,D=null,W=null;this._outputColorSpace=Fn;let $=0,J=0,rt=null,q=-1,nt=null,st=new Ye,Xt=new Ye,Vt=null,Pe=new te(0),jt=0,Ae=e.width,Z=e.height,et=1,Nt=null,Jt=null,Rt=new Ye(0,0,Ae,Z),ae=new Ye(0,0,Ae,Z),Ve=!1,ce=new Bs,xe=!1,Se=!1,fe=new Ue,Oe=new O,Be=new Ye,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Ge(){return rt===null?et:1}let N=n;function Je(S,R){return e.getContext(S,R)}let Ce,A,x,H,k,Y,ht,mt,K,tt,gt,zt,St,_t,Bt,Yt,ee,L,xt,Q,yt,ct,it;try{let S={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${so}`),e.addEventListener("webglcontextlost",y,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",j,!1),N===null){let R="webgl2";if(N=Je(R,S),N===null)throw Je(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(S){throw e.removeEventListener("webglcontextlost",y,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",j,!1),Kt("WebGLRenderer: "+S.message),S}function kt(){Ce=new B0(N),Ce.init(),yt=new Eg(N,Ce),A=new C0(N,Ce,t,yt),x=new Sg(N,Ce),A.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),G=N.createFramebuffer(),D=N.createFramebuffer(),W=N.createFramebuffer(),H=new k0(N),k=new lg,Y=new bg(N,Ce,x,k,A,yt,H),ht=new O0(b),mt=new Vd(N),ct=new w0(N,mt),K=new H0(N,mt,H,ct),tt=new G0(N,K,mt,ct,H),L=new V0(N,A,Y),Bt=new R0(k),gt=new og(b,ht,Ce,A,ct,Bt),zt=new Cg(b,k),St=new hg,_t=new gg(Ce),ee=new T0(b,ht,x,tt,v,c),Yt=new Mg(b,tt,A),it=new Rg(N,H,A,x),xt=new A0(N,Ce,H),Q=new z0(N,Ce,H),H.programs=gt.programs,b.capabilities=A,b.extensions=Ce,b.properties=k,b.renderLists=St,b.shadowMap=Yt,b.state=x,b.info=H}E!==Rn&&(u=new X0(E,e.width,e.height,l,s,r));let Ot=new wc(b,N);this.xr=Ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(Ae,Z,!1))},this.getSize=function(S){return S.set(Ae,Z)},this.setSize=function(S,R,V=!0){if(Ot.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=S,Z=R,e.width=Math.floor(S*et),e.height=Math.floor(R*et),V===!0&&(e.style.width=S+"px",e.style.height=R+"px"),u!==null&&u.setSize(e.width,e.height),this.setViewport(0,0,S,R)},this.getDrawingBufferSize=function(S){return S.set(Ae*et,Z*et).floor()},this.setDrawingBufferSize=function(S,R,V){Ae=S,Z=R,et=V,e.width=Math.floor(S*V),e.height=Math.floor(R*V),this.setViewport(0,0,S,R)},this.setEffects=function(S){if(E===Rn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let R=0;R<S.length;R++)if(S[R].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}u.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(Rt)},this.setViewport=function(S,R,V,F){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,R,V,F),x.viewport(st.copy(Rt).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(ae)},this.setScissor=function(S,R,V,F){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,R,V,F),x.scissor(Xt.copy(ae).multiplyScalar(et).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(S){x.setScissorTest(Ve=S)},this.setOpaqueSort=function(S){Nt=S},this.setTransparentSort=function(S){Jt=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(S=!0,R=!0,V=!0){let F=0;if(S){let U=!1;if(rt!==null){let ut=rt.texture.format;U=_.has(ut)}if(U){let ut=rt.texture.type,vt=p.has(ut),ft=ee.getClearColor(),At=ee.getClearAlpha(),It=ft.r,Zt=ft.g,$t=ft.b;vt?(C[0]=It,C[1]=Zt,C[2]=$t,C[3]=At,N.clearBufferuiv(N.COLOR,0,C)):(I[0]=It,I[1]=Zt,I[2]=$t,I[3]=At,N.clearBufferiv(N.COLOR,0,I))}else F|=N.COLOR_BUFFER_BIT}R&&(F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",y,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",j,!1),ee.dispose(),St.dispose(),_t.dispose(),k.dispose(),ht.dispose(),tt.dispose(),ct.dispose(),it.dispose(),gt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Pt),Ot.removeEventListener("sessionend",lt),Ht.stop()};function y(S){S.preventDefault(),mr("WebGLRenderer: Context Lost."),B=!0}function X(){mr("WebGLRenderer: Context Restored."),B=!1;let S=H.autoReset,R=Yt.enabled,V=Yt.autoUpdate,F=Yt.needsUpdate,U=Yt.type;kt(),H.autoReset=S,Yt.enabled=R,Yt.autoUpdate=V,Yt.needsUpdate=F,Yt.type=U}function j(S){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function dt(S){let R=S.target;R.removeEventListener("dispose",dt),Tt(R)}function Tt(S){Ut(S),k.remove(S)}function Ut(S){let R=k.get(S).programs;R!==void 0&&(R.forEach(function(V){gt.releaseProgram(V)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,R,V,F,U,ut){R===null&&(R=dn);let vt=U.isMesh&&U.matrixWorld.determinantAffine()<0,ft=be(S,R,V,F,U);x.setMaterial(F,vt);let At=V.index,It=1;if(F.wireframe===!0){if(At=K.getWireframeAttribute(V),At===void 0)return;It=2}let Zt=V.drawRange,$t=V.attributes.position,wt=Zt.start*It,se=(Zt.start+Zt.count)*It;ut!==null&&(wt=Math.max(wt,ut.start*It),se=Math.min(se,(ut.start+ut.count)*It)),At!==null?(wt=Math.max(wt,0),se=Math.min(se,At.count)):$t!=null&&(wt=Math.max(wt,0),se=Math.min(se,$t.count));let Ee=se-wt;if(Ee<0||Ee===1/0)return;ct.setup(U,F,ft,V,At);let Te,me=xt;if(At!==null&&(Te=mt.get(At),me=Q,me.setIndex(Te)),U.isMesh)F.wireframe===!0?(x.setLineWidth(F.wireframeLinewidth*Ge()),me.setMode(N.LINES)):me.setMode(N.TRIANGLES);else if(U.isLine){let We=F.linewidth;We===void 0&&(We=1),x.setLineWidth(We*Ge()),U.isLineSegments?me.setMode(N.LINES):U.isLineLoop?me.setMode(N.LINE_LOOP):me.setMode(N.LINE_STRIP)}else U.isPoints?me.setMode(N.POINTS):U.isSprite&&me.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))me.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let We=U._multiDrawStarts,Mt=U._multiDrawCounts,Fe=U._multiDrawCount,Lt=At?mt.get(At).bytesPerElement:1,ve=k.get(F).currentProgram.getUniforms();for(let ye=0;ye<Fe;ye++)ve.setValue(N,"_gl_DrawID",ye),me.render(We[ye]/Lt,Mt[ye])}else if(U.isInstancedMesh)me.renderInstances(wt,Ee,U.count);else if(V.isInstancedBufferGeometry){let We=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mt=Math.min(V.instanceCount,We);me.renderInstances(wt,Ee,Mt)}else me.render(wt,Ee)};function pt(S,R,V,F){z!==null&&S.isNodeMaterial&&z.setObject(F,S),xe===!0&&Bt.setState(S,V,!1),S.transparent===!0&&S.side===Le&&S.forceSinglePass===!1?(S.side=wn,S.needsUpdate=!0,fn(S,R,F),S.side=ki,S.needsUpdate=!0,fn(S,R,F),S.side=Le):fn(S,R,F)}this.compile=function(S,R,V=null){V===null&&(V=S),z!==null&&z.renderStart(S,R,V),w=_t.get(V),w.init(R),M.push(w),V.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(w.pushLight(U),U.castShadow&&w.pushShadow(U))}),S!==V&&S.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(w.pushLight(U),U.castShadow&&w.pushShadow(U))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Se=this.localClippingEnabled,xe=Bt.init(this.clippingPlanes,Se),xe===!0&&Bt.setGlobalState(this.clippingPlanes,R),z!==null&&Yt.render(w.state.shadowsArray,V,R);let F=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ut=U.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){let ft=ut[vt];pt(ft,V,R,U),F.add(ft)}else pt(ut,V,R,U),F.add(ut)}),w=M.pop(),z!==null&&z.renderEnd(),F},this.compileAsync=function(S,R,V=null){let F=this.compile(S,R,V);return new Promise(U=>{function ut(){if(F.forEach(function(vt){let At=k.get(vt).currentProgram;(At===void 0||At.isReady())&&F.delete(vt)}),F.size===0){U(S);return}setTimeout(ut,10)}Ce.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ft=null;function at(S){Ft&&Ft(S)}function Pt(){Ht.stop()}function lt(){Ht.start()}let Ht=new yu;Ht.setAnimationLoop(at),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(S){Ft=S,Ot.setAnimationLoop(S),S===null?Ht.stop():Ht.start()},Ot.addEventListener("sessionstart",Pt),Ot.addEventListener("sessionend",lt),this.render=function(S,R){if(R!==void 0&&R.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(S,R);let V=Ot.enabled===!0&&Ot.isPresenting===!0,F=u!==null&&(rt===null||V)&&u.begin(b,rt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(u===null||u.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(R),R=Ot.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,R,rt),w=_t.get(S,M.length),w.init(R),w.state.textureUnits=Y.getTextureUnits(),M.push(w),fe.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ce.setFromProjectionMatrix(fe,jn,R.reversedDepth),Se=this.localClippingEnabled,xe=Bt.init(this.clippingPlanes,Se),o=St.get(S,P.length),o.init(),P.push(o),Ot.enabled===!0&&Ot.isPresenting===!0){let vt=b.xr.getDepthSensingMesh();vt!==null&&ot(vt,R,-1/0,b.sortObjects)}ot(S,R,0,b.sortObjects),o.finish(),z!==null&&z.updateLights(w.state.lightsArray),b.sortObjects===!0&&o.sort(Nt,Jt),He=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,He&&ee.addToRenderList(o,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Bt.beginShadows();let U=w.state.shadowsArray;if(Yt.render(U,S,R),xe===!0&&Bt.endShadows(),(F&&u.hasRenderPass())===!1){let vt=o.opaque,ft=o.transmissive;if(w.setupLights(),R.isArrayCamera){let At=R.cameras;if(ft.length>0)for(let It=0,Zt=At.length;It<Zt;It++){let $t=At[It];Sn(vt,ft,S,$t)}He&&ee.render(S);for(let It=0,Zt=At.length;It<Zt;It++){let $t=At[It];Ze(o,S,$t,$t.viewport)}}else ft.length>0&&Sn(vt,ft,S,R),He&&ee.render(S),Ze(o,S,R)}rt!==null&&J===0&&(Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt)),F&&u.end(b),S.isScene===!0&&S.onAfterRender(b,S,R),ct.resetDefaultState(),q=-1,nt=null,M.pop(),M.length>0?(w=M[M.length-1],Y.setTextureUnits(w.state.textureUnits),xe===!0&&Bt.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?o=P[P.length-1]:o=null,z!==null&&z.renderEnd()};function ot(S,R,V,F){if(S.visible===!1)return;if(S.layers.test(R.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(R);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ce)){F&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);let vt=tt.update(S),ft=S.material;ft.visible&&o.push(S,vt,ft,V,Be.z,null,R)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ce))){let vt=tt.update(S),ft=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Be.copy(vt.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(ft)){let At=vt.groups;for(let It=0,Zt=At.length;It<Zt;It++){let $t=At[It],wt=ft[$t.materialIndex];wt&&wt.visible&&o.push(S,vt,wt,V,Be.z,$t,R)}}else ft.visible&&o.push(S,vt,ft,V,Be.z,null,R)}}let ut=S.children;for(let vt=0,ft=ut.length;vt<ft;vt++)ot(ut[vt],R,V,F)}function Ze(S,R,V,F){let{opaque:U,transmissive:ut,transparent:vt}=S;w.setupLightsView(V),xe===!0&&Bt.setGlobalState(b.clippingPlanes,V),F&&x.viewport(st.copy(F)),U.length>0&&bn(U,R,V),ut.length>0&&bn(ut,R,V),vt.length>0&&bn(vt,R,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Sn(S,R,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let wt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new Cn(1,1,{generateMipmaps:!0,type:wt?ii:Rn,minFilter:Gi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let ut=w.state.transmissionRenderTarget[F.id],vt=F.viewport||st;ut.setSize(vt.z*b.transmissionResolutionScale,vt.w*b.transmissionResolutionScale);let ft=b.getRenderTarget(),At=b.getActiveCubeFace(),It=b.getActiveMipmapLevel();b.setRenderTarget(ut),b.getClearColor(Pe),jt=b.getClearAlpha(),jt<1&&b.setClearColor(16777215,.5),b.clear(),He&&ee.render(V);let Zt=b.toneMapping;b.toneMapping=ti;let $t=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),xe===!0&&Bt.setGlobalState(b.clippingPlanes,F),bn(S,V,F),Y.updateMultisampleRenderTarget(ut),Y.updateRenderTargetMipmap(ut),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let se=0,Ee=R.length;se<Ee;se++){let Te=R[se],{object:me,geometry:We,material:Mt,group:Fe}=Te;if(Mt.side===Le&&me.layers.test(F.layers)){let Lt=Mt.side;Mt.side=wn,Mt.needsUpdate=!0,oe(me,V,F,We,Mt,Fe),Mt.side=Lt,Mt.needsUpdate=!0,wt=!0}}wt===!0&&(Y.updateMultisampleRenderTarget(ut),Y.updateRenderTargetMipmap(ut))}b.setRenderTarget(ft,At,It),b.setClearColor(Pe,jt),$t!==void 0&&(F.viewport=$t),b.toneMapping=Zt}function bn(S,R,V){let F=R.isScene===!0?R.overrideMaterial:null;for(let U=0,ut=S.length;U<ut;U++){let vt=S[U],{object:ft,geometry:At,group:It}=vt,Zt=vt.material;Zt.allowOverride===!0&&F!==null&&(Zt=F),ft.layers.test(V.layers)&&oe(ft,R,V,At,Zt,It)}}function oe(S,R,V,F,U,ut){z!==null&&U.isNodeMaterial&&z.setObject(S,U),S.onBeforeRender(b,R,V,F,U,ut),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(b,R,V,F,S,ut),U.transparent===!0&&U.side===Le&&U.forceSinglePass===!1?(U.side=wn,U.needsUpdate=!0,b.renderBufferDirect(V,R,F,U,S,ut),U.side=ki,U.needsUpdate=!0,b.renderBufferDirect(V,R,F,U,S,ut),U.side=Le):b.renderBufferDirect(V,R,F,U,S,ut),S.onAfterRender(b,R,V,F,U,ut)}function fn(S,R,V){R.isScene!==!0&&(R=dn);let F=k.get(S),U=w.state.lights,ut=w.state.shadowsArray,vt=U.state.version,ft=gt.getParameters(S,U.state,ut,R,V,w.state.lightProbeGridArray),At=gt.getProgramCacheKey(ft),It=F.programs;F.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?R.environment:null,F.fog=R.fog;let Zt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;F.envMap=ht.get(S.envMap||F.environment,Zt),F.envMapRotation=F.environment!==null&&S.envMap===null?R.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",dt),It=new Map,F.programs=It);let $t=It.get(At);if($t!==void 0){if(F.currentProgram===$t&&F.lightsStateVersion===vt)return In(S,ft),$t}else ft.uniforms=gt.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,V,ft),S.onBeforeCompile(ft,b),$t=gt.acquireProgram(ft,At),It.set(At,$t),F.uniforms=ft.uniforms;let wt=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=Bt.uniform),In(S,ft),F.needsLights=Wt(S),F.lightsStateVersion=vt,F.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.sunLights.value=U.state.sun,wt.sunLightShadows.value=U.state.sunShadow,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.sunShadowMatrix.value=U.state.sunShadowMatrix,wt.sunShadowCascade.value=U.state.sunShadowCascade,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),F.lightProbeGrid=w.state.lightProbeGridArray.length>0,F.currentProgram=$t,F.uniformsList=null,$t}function zn(S){if(S.uniformsList===null){let R=S.currentProgram.getUniforms();S.uniformsList=Ks.seqWithValue(R.seq,S.uniforms)}return S.uniformsList}function In(S,R){let V=k.get(S);V.outputColorSpace=R.outputColorSpace,V.batching=R.batching,V.batchingColor=R.batchingColor,V.instancing=R.instancing,V.instancingColor=R.instancingColor,V.instancingMorph=R.instancingMorph,V.skinning=R.skinning,V.morphTargets=R.morphTargets,V.morphNormals=R.morphNormals,V.morphColors=R.morphColors,V.morphTargetsCount=R.morphTargetsCount,V.numClippingPlanes=R.numClippingPlanes,V.numIntersection=R.numClipIntersection,V.vertexAlphas=R.vertexAlphas,V.vertexTangents=R.vertexTangents,V.toneMapping=R.toneMapping}function je(S,R){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;T.setFromMatrixPosition(R.matrixWorld);for(let V=0,F=S.length;V<F;V++){let U=S[V];if(U.texture!==null&&U.boundingBox.containsPoint(T))return U}return null}function be(S,R,V,F,U){R.isScene!==!0&&(R=dn),Y.resetTextureUnits();let ut=R.fog,vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?R.environment:null,ft=rt===null?b.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Me.workingColorSpace,At=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,It=ht.get(F.envMap||vt,At),Zt=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$t=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color,Te=ti;F.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Te=b.toneMapping);let me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,We=me!==void 0?me.length:0,Mt=k.get(F),Fe=w.state.lights;if(xe===!0&&(Se===!0||S!==nt)){let we=S===nt&&F.id===q;Bt.setState(F,S,we)}let Lt=!1;F.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Fe.state.version||Mt.outputColorSpace!==ft||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U._colorsTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U._colorsTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==It||F.fog===!0&&Mt.fog!==ut||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Bt.numPlanes||Mt.numIntersection!==Bt.numIntersection)||Mt.vertexAlphas!==Zt||Mt.vertexTangents!==$t||Mt.morphTargets!==wt||Mt.morphNormals!==se||Mt.morphColors!==Ee||Mt.toneMapping!==Te||Mt.morphTargetsCount!==We||!!Mt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Mt.__version=F.version);let ve=Mt.currentProgram;Lt===!0&&(ve=fn(F,R,U),z&&F.isNodeMaterial&&z.onUpdateProgram(F,ve,Mt));let ye=!1,ge=!1,Qe=!1,ie=ve.getUniforms(),le=Mt.uniforms;if(x.useProgram(ve.program)&&(ye=!0,ge=!0,Qe=!0),F.id!==q&&(q=F.id,ge=!0),Mt.needsLights){let we=je(w.state.lightProbeGridArray,U);Mt.lightProbeGrid!==we&&(Mt.lightProbeGrid=we,ge=!0)}if(ye||nt!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ie.setValue(N,"projectionMatrix",S.projectionMatrix),ie.setValue(N,"viewMatrix",S.matrixWorldInverse);let Ke=ie.map.cameraPosition;Ke!==void 0&&Ke.setValue(N,Oe.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ie.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ie.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),nt!==S&&(nt=S,ge=!0,Qe=!0)}if(Mt.needsLights&&(Fe.state.sunShadowMap.length>0&&ie.setValue(N,"sunShadowMap",Fe.state.sunShadowMap,Y),Fe.state.directionalShadowMap.length>0&&ie.setValue(N,"directionalShadowMap",Fe.state.directionalShadowMap,Y),Fe.state.spotShadowMap.length>0&&ie.setValue(N,"spotShadowMap",Fe.state.spotShadowMap,Y),Fe.state.pointShadowMap.length>0&&ie.setValue(N,"pointShadowMap",Fe.state.pointShadowMap,Y)),U.isSkinnedMesh){ie.setOptional(N,U,"bindMatrix"),ie.setOptional(N,U,"bindMatrixInverse");let we=U.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ie.setValue(N,"boneTexture",we.boneTexture,Y))}U.isBatchedMesh&&(ie.setOptional(N,U,"batchingTexture"),ie.setValue(N,"batchingTexture",U._matricesTexture,Y),ie.setOptional(N,U,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",U._indirectTexture,Y),ie.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ie.setValue(N,"batchingColorTexture",U._colorsTexture,Y));let gn=V.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&L.update(U,V,ve),(ge||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,ie.setValue(N,"receiveShadow",U.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&R.environment!==null&&(le.envMapIntensity.value=R.environmentIntensity),le.dfgLUT!==void 0&&(le.dfgLUT.value=Ig()),ge){if(ie.setValue(N,"toneMappingExposure",b.toneMappingExposure),Mt.needsLights&&ze(le,Qe),ut&&F.fog===!0&&zt.refreshFogUniforms(le,ut),zt.refreshMaterialUniforms(le,F,et,Z,w.state.transmissionRenderTarget[S.id]),Mt.needsLights&&Mt.lightProbeGrid){let we=Mt.lightProbeGrid;le.probesSH.value=we.texture,le.probesMin.value.copy(we.boundingBox.min),le.probesMax.value.copy(we.boundingBox.max),le.probesResolution.value.copy(we.resolution)}Ks.upload(N,zn(Mt),le,Y)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ks.upload(N,zn(Mt),le,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ie.setValue(N,"center",U.center),ie.setValue(N,"modelViewMatrix",U.modelViewMatrix),ie.setValue(N,"normalMatrix",U.normalMatrix),ie.setValue(N,"modelMatrix",U.matrixWorld),F.uniformsGroups!==void 0){let we=F.uniformsGroups;for(let Ke=0,kn=we.length;Ke<kn;Ke++){let Vn=we[Ke];it.update(Vn,ve),it.bind(Vn,ve)}}return ve}function ze(S,R){S.ambientLightColor.needsUpdate=R,S.lightProbe.needsUpdate=R,S.sunLights.needsUpdate=R,S.sunLightShadows.needsUpdate=R,S.directionalLights.needsUpdate=R,S.directionalLightShadows.needsUpdate=R,S.pointLights.needsUpdate=R,S.pointLightShadows.needsUpdate=R,S.spotLights.needsUpdate=R,S.spotLightShadows.needsUpdate=R,S.rectAreaLights.needsUpdate=R,S.hemisphereLights.needsUpdate=R}function Wt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(S,R,V){let F=k.get(S);F.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=R,k.get(S.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,R){let V=k.get(S);V.__webglFramebuffer=R,V.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(S,R=0,V=0){rt=S,$=R,J=V;let F=null,U=!1,ut=!1;if(S){let ft=k.get(S);if(ft.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,ft.__webglFramebuffer),st.copy(S.viewport),Xt.copy(S.scissor),Vt=S.scissorTest,x.viewport(st),x.scissor(Xt),x.setScissorTest(Vt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ft.__hasExternalTextures)Y.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Zt=S.depthTexture;if(ft.__boundDepthTexture!==Zt){if(Zt!==null&&k.has(Zt)&&(S.width!==Zt.image.width||S.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ut=!0);let It=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[R])?F=It[R][V]:F=It[R],U=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?F=k.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?F=It[V]:F=It,st.copy(S.viewport),Xt.copy(S.scissor),Vt=S.scissorTest}else st.copy(Rt).multiplyScalar(et).floor(),Xt.copy(ae).multiplyScalar(et).floor(),Vt=Ve;if(V!==0&&(F=G),x.bindFramebuffer(N.FRAMEBUFFER,F)&&x.drawBuffers(S,F),x.viewport(st),x.scissor(Xt),x.setScissorTest(Vt),U){let ft=k.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+R,ft.__webglTexture,V)}else if(ut){let ft=R;for(let At=0;At<S.textures.length;At++){let It=k.get(S.textures[At]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+At,It.__webglTexture,V,ft)}}else if(S!==null&&V!==0){let ft=k.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,V)}q=-1};function an(S){let R=k.get(S);return(R.__readFormat!==S.format||R.__readType!==S.type)&&(R.__readFormat=S.format,R.__readType=S.type,R.__formatReadable=A.textureFormatReadable(S.format),R.__typeReadable=A.textureTypeReadable(S.type)),R}this.readRenderTargetPixels=function(S,R,V,F,U,ut,vt,ft=0){if(!(S&&S.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){x.bindFramebuffer(N.FRAMEBUFFER,At);try{let It=S.textures[ft],Zt=It.format,$t=It.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft);let wt=an(It);if(wt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=S.width-F&&V>=0&&V<=S.height-U&&N.readPixels(R,V,F,U,yt.convert(Zt),yt.convert($t),ut)}finally{let It=rt!==null?k.get(rt).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,R,V,F,U,ut,vt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At)if(R>=0&&R<=S.width-F&&V>=0&&V<=S.height-U){x.bindFramebuffer(N.FRAMEBUFFER,At);let It=S.textures[ft],Zt=It.format,$t=It.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft);let wt=an(It);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,se),N.bufferData(N.PIXEL_PACK_BUFFER,ut.byteLength,N.STREAM_READ),N.readPixels(R,V,F,U,yt.convert(Zt),yt.convert($t),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ee=rt!==null?k.get(rt).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Ee);let Te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xh(N,Te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ut),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(se),N.deleteSync(Te),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,R=null,V=0){let F=Math.pow(2,-V),U=Math.floor(S.image.width*F),ut=Math.floor(S.image.height*F),vt=R!==null?R.x:0,ft=R!==null?R.y:0;Y.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,vt,ft,U,ut),x.unbindTexture()},this.copyTextureToTexture=function(S,R,V=null,F=null,U=0,ut=0){let vt,ft,At,It,Zt,$t,wt,se,Ee,Te=S.isCompressedTexture?S.mipmaps[ut]:S.image;if(V!==null)vt=V.max.x-V.min.x,ft=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,It=V.min.x,Zt=V.min.y,$t=V.isBox3?V.min.z:0;else{let le=Math.pow(2,-U);vt=Math.floor(Te.width*le),ft=Math.floor(Te.height*le),S.isDataArrayTexture?At=Te.depth:S.isData3DTexture?At=Math.floor(Te.depth*le):At=1,It=0,Zt=0,$t=0}F!==null?(wt=F.x,se=F.y,Ee=F.z):(wt=0,se=0,Ee=0);let me=yt.convert(R.format),We=yt.convert(R.type),Mt;R.isData3DTexture?(Y.setTexture3D(R,0),Mt=N.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(Y.setTexture2DArray(R,0),Mt=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(R,0),Mt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,R.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,R.unpackAlignment);let Fe=x.getParameter(N.UNPACK_ROW_LENGTH),Lt=x.getParameter(N.UNPACK_IMAGE_HEIGHT),ve=x.getParameter(N.UNPACK_SKIP_PIXELS),ye=x.getParameter(N.UNPACK_SKIP_ROWS),ge=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Te.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Te.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,It),x.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,$t);let Qe=S.isDataArrayTexture||S.isData3DTexture,ie=R.isDataArrayTexture||R.isData3DTexture;if(S.isDepthTexture){let le=k.get(S),gn=k.get(R),we=k.get(le.__renderTarget),Ke=k.get(gn.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,we.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let kn=0;kn<At;kn++)Qe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(S).__webglTexture,U,$t+kn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(R).__webglTexture,ut,Ee+kn)),N.blitFramebuffer(It,Zt,vt,ft,wt,se,vt,ft,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||k.has(S)){let le=k.get(S),gn=k.get(R);x.bindFramebuffer(N.READ_FRAMEBUFFER,D),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let we=0;we<At;we++)Qe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,le.__webglTexture,U,$t+we):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,le.__webglTexture,U),ie?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gn.__webglTexture,ut,Ee+we):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gn.__webglTexture,ut),U!==0?N.blitFramebuffer(It,Zt,vt,ft,wt,se,vt,ft,N.COLOR_BUFFER_BIT,N.NEAREST):ie?N.copyTexSubImage3D(Mt,ut,wt,se,Ee+we,It,Zt,vt,ft):N.copyTexSubImage2D(Mt,ut,wt,se,It,Zt,vt,ft);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ie?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Mt,ut,wt,se,Ee,vt,ft,At,me,We,Te.data):R.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,ut,wt,se,Ee,vt,ft,At,me,Te.data):N.texSubImage3D(Mt,ut,wt,se,Ee,vt,ft,At,me,We,Te):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ut,wt,se,vt,ft,me,We,Te.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ut,wt,se,Te.width,Te.height,me,Te.data):N.texSubImage2D(N.TEXTURE_2D,ut,wt,se,vt,ft,me,We,Te);x.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt),x.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),x.pixelStorei(N.UNPACK_SKIP_ROWS,ye),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ge),ut===0&&R.generateMipmaps&&N.generateMipmap(Mt),x.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){$=0,J=0,rt=null,x.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var wu={type:"change"},Cc={type:"start"},Cu={type:"end"},el=new Si,Au=new Un,Dg=Math.cos(70*oc.DEG2RAD),rn=new O,Pn=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6,nl=class extends Nr{constructor(t,e=null){super(t,e),this.state=De.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new On,this._lastTargetPosition=new O,this._quat=new On().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gs,this._sphericalDelta=new Gs,this._scale=1,this._panOffset=new O,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new O,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fg.bind(this),this._onPointerDown=Ng.bind(this),this._onPointerUp=Ug.bind(this),this._onContextMenu=Gg.bind(this),this._onMouseWheel=Hg.bind(this),this._onKeyDown=zg.bind(this),this._onTouchStart=kg.bind(this),this._onTouchMove=Vg.bind(this),this._onMouseDown=Og.bind(this),this._onMouseMove=Bg.bind(this),this._interceptControlDown=Wg.bind(this),this._interceptControlUp=Xg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=De.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wu),this.update(),this.state=De.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;rn.copy(e).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),e.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let l=rn.length();a=this._clampDistance(l*this._scale);let c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(el.origin.copy(this.object.position),el.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(el.direction))<Dg?this.object.lookAt(this.target):(Au.setFromNormalAndCoplanarPoint(this.object.up,this.target),el.intersectPlane(Au,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){rn.setFromMatrixColumn(e,0),rn.multiplyScalar(-t),this._panOffset.add(rn)}_panUp(t,e){this.screenSpacePanning===!0?rn.setFromMatrixColumn(e,1):(rn.setFromMatrixColumn(e,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(t),this._panOffset.add(rn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;rn.copy(s).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ng(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Fg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ug(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=De.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Og(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=De.DOLLY;break;case Hi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}break;case Hi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Cc)}function Bg(i){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hg(i){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(i.preventDefault(),this.dispatchEvent(Cc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cu))}function zg(i){this.enabled!==!1&&this._handleKeyDown(i)}function kg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=De.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=De.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Cc)}function Vg(i){switch(this._trackPointer(i),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=De.NONE}}function Gg(i){this.enabled!==!1&&i.preventDefault()}function Wg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ru(i="sky-product-3d-canvas"){let t=document.getElementById(i);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let e=t.getAttribute("data-product")||"tks",n=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[e]||{id:e,title:"Sky Group M\xFChendislik \xDCr\xFCn\xFC",hotspots:[]},s=new _r;s.background=new te(16777215);let r=t.clientWidth||900,a=t.clientHeight||480,l=new yn(35,r/a,.1,100);l.position.set(8.5,4.2,7.5);let c=new jo({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setSize(r,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=Ur,c.toneMappingExposure=1.15,c.shadowMap.enabled=!0,c.shadowMap.type=is,t.appendChild(c.domElement);let h=new nl(l,c.domElement);h.enableDamping=!0,h.dampingFactor=.05,h.maxPolarAngle=Math.PI/2-.05,h.minDistance=2,h.maxDistance=28,h.target.set(0,0,0),h.autoRotate=!0,h.autoRotateSpeed=.6;let f=!1,g=null,d=()=>{f=!0,h.autoRotate=!1,clearTimeout(g),g=setTimeout(()=>{f=!1,ct.autoRotate&&(h.autoRotate=!0)},6e3)};c.domElement.addEventListener("pointerdown",d),c.domElement.addEventListener("wheel",d,{passive:!0}),c.domElement.addEventListener("touchstart",d,{passive:!0});let m=new Ir(16777215,.9);s.add(m);let v=new ns(16777215,1.25);v.position.set(12,16,14),v.castShadow=!0,v.shadow.mapSize.width=1024,v.shadow.mapSize.height=1024,v.shadow.bias=-5e-4,s.add(v);let E=new ns(14412542,.7);E.position.set(-14,8,-10),s.add(E);let _=new ns(15793652,.6);_.position.set(0,18,0),s.add(_);let p=new es(30,30),C=new wr({opacity:.12}),I=new qe(p,C);I.rotation.x=-Math.PI/2,I.position.y=-1.65,I.receiveShadow=!0,s.add(I);let T=new Dr(24,24,14870768,15857145);T.position.y=-1.64,s.add(T);let o={aluFrame:new Ne({color:13949149,metalness:.8,roughness:.25,side:Le}),galvSteel:new Ne({color:12897749,metalness:.65,roughness:.45,side:Le}),stainless:new Ne({color:14870768,metalness:.95,roughness:.15,side:Le}),baseSkid:new Ne({color:9741240,metalness:.75,roughness:.35,side:Le}),panelSolid:new Ne({color:16317180,metalness:.15,roughness:.35,side:Le}),panelCutaway:new Ar({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:Le}),fanHousing:new Ne({color:165063,metalness:.6,roughness:.3,side:Le}),fanImpeller:new Ne({color:3718648,metalness:.75,roughness:.25,side:Le}),motorCast:new Ne({color:1976635,metalness:.85,roughness:.3,side:Le}),copperPipe:new Ne({color:12730636,metalness:.9,roughness:.2,side:Le}),coolingFin:new Ne({color:3718648,metalness:.55,roughness:.35,side:Le}),heatingFin:new Ne({color:16281969,metalness:.55,roughness:.35,side:Le}),rotorWheel:new Ne({color:6583435,metalness:.7,roughness:.4,side:Le}),filterCloth:new Ne({color:16317180,roughness:.95,metalness:.05,side:Le}),filterG4:new Ne({color:14870768,roughness:.9,metalness:.05,side:Le}),damperBlade:new Ne({color:9741240,metalness:.8,roughness:.25,side:Le}),actuatorOrange:new Ne({color:15357964,metalness:.2,roughness:.4}),drainPan:new Ne({color:14870768,metalness:.95,roughness:.15,side:Le}),doorHandle:new Ne({color:988970,metalness:.8,roughness:.3}),rubberBlack:new Ne({color:988970,roughness:.85,metalness:.1,side:Le}),brassGold:new Ne({color:14251782,metalness:.85,roughness:.25}),springSilver:new Ne({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new Ne({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new Ne({color:16777215,roughness:.2}),touchscreen:new Di({color:165063})},w=[],P=[],M=new Xe;s.add(M);function u(y,X,j,dt,Tt=0,Ut=0,pt=0,Ft=!0,at=!0){let Pt=new Fi(y,X,j),lt=new qe(Pt,dt);return lt.position.set(Tt,Ut,pt),lt.castShadow=Ft,lt.receiveShadow=at,lt}function b(y,X,j,dt,Tt,Ut=0,pt=0,Ft=0,at=0,Pt=0,lt=!1){let Ht=new ts(y,X,j,dt,1,lt),ot=new qe(Ht,Tt);return ot.position.set(Ut,pt,Ft),at&&(ot.rotation.x=at),Pt&&(ot.rotation.z=Pt),ot.castShadow=!0,ot.receiveShadow=!0,ot}function B(y,X=o.panelSolid,j=o.panelCutaway){return y.userData.solidMat=X,y.userData.cutawayMat=j,P.push(y),y}function z(y){let at=-1.4100000000000001,Pt=u(8.4+.2,.22,.1,o.baseSkid,0,at,1-.05),lt=u(8.4+.2,.22,.1,o.baseSkid,0,at,-1+.05);y.add(Pt,lt);let Ht=[-4.2,-2.5,-.8,.8,2.5,4.2];Ht.forEach(bt=>{y.add(u(.12,.22,2-.2,o.baseSkid,bt,at,0))}),[-2.5,.8].forEach(bt=>{y.add(u(.28,.12,.12,o.aluFrame,bt,at,1-.04)),y.add(u(.28,.12,.12,o.aluFrame,bt,at,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([bt,re])=>{y.add(u(.08,.18,.08,o.yellowSafety,bt,at+.06,re))});let ot=.08;y.add(u(8.4,ot,ot,o.aluFrame,0,-1.3+ot/2,1-ot/2),u(8.4,ot,ot,o.aluFrame,0,-1.3+ot/2,-1+ot/2),u(8.4,ot,ot,o.aluFrame,0,1.3-ot/2,1-ot/2),u(8.4,ot,ot,o.aluFrame,0,1.3-ot/2,-1+ot/2)),Ht.forEach(bt=>{y.add(u(ot,2.6,ot,o.aluFrame,bt,0,1-ot/2),u(ot,2.6,ot,o.aluFrame,bt,0,-1+ot/2),u(ot,ot,2-ot*2,o.aluFrame,bt,1.3-ot/2,0),u(ot,ot,2-ot*2,o.aluFrame,bt,-1.3+ot/2,0))});let Ze=5,Sn=u(Ze,.05,2-.16,o.galvSteel,-4.2+Ze/2,0,0);y.add(Sn),y.add(u(8.4-.1,2.6-.1,.05,o.panelSolid,0,0,-1+.04)),y.add(u(8.4-.1,.05,2-.16,o.galvSteel,0,-1.3+.03,0)),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,4.2-.03,0,0));let bn=u(.18,1.2,1.2,o.galvSteel,4.2+.09,-.2,0);y.add(bn),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,-4.2+.03,0,0));let oe=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],fn=[1.7,1.7,1.6,1.7,1.7];oe.forEach((bt,re)=>{let Qt=fn[re]-.08,on=u(Qt,.04,2-.16,o.panelCutaway,bt,1.3-.02,0,!1,!1);y.add(on),B(on,o.panelSolid,o.panelCutaway);let cs=u(Qt,2.6-.18,.03,o.panelCutaway,bt,0,1-.02,!1,!1);y.add(cs),B(cs,o.panelSolid,o.panelCutaway);let qn=.04;y.add(u(Qt,qn,.02,o.aluFrame,bt,(2.6-.18)/2,1),u(Qt,qn,.02,o.aluFrame,bt,-(2.6-.18)/2,1),u(qn,2.6-.18,.02,o.aluFrame,bt-Qt/2,0,1),u(qn,2.6-.18,.02,o.aluFrame,bt+Qt/2,0,1)),[-.45,.45].forEach(tr=>{y.add(u(.04,.14,.05,o.doorHandle,bt+Qt/2-.1,tr,1+.02))}),[-.55,.55].forEach(tr=>{y.add(u(.03,.1,.03,o.aluFrame,bt-Qt/2+.04,tr,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([bt,re])=>{let Qt=b(.14,.14,.04,24,o.aluFrame,bt,re,1,Math.PI/2),on=b(.11,.11,.045,20,o.panelCutaway,bt,re,1,Math.PI/2);y.add(Qt,on)}),[[-1.65,.1],[3.35,.35]].forEach(([bt,re])=>{let Qt=b(.08,.08,.03,20,o.aluFrame,bt,re,1.015,Math.PI/2),on=b(.07,.07,.035,20,o.gaugeFace,bt,re,1+.015,Math.PI/2);y.add(Qt,on),y.add(b(.008,.008,.22,8,o.panelCutaway,bt-.03,re-.12,1+.01)),y.add(b(.008,.008,.22,8,o.panelCutaway,bt+.03,re-.12,1+.01))});let zn=.48,In=.68,je=.18,be=u(zn,In,je,o.galvSteel,2.75,.45,1+je/2),ze=u(.24,.16,.01,o.touchscreen,2.75,.56,1+je+.005),Wt=b(.014,.014,.02,10,o.coolingFin,2.65,.42,1+je+.01,Math.PI/2),an=b(.014,.014,.02,10,o.yellowSafety,2.75,.42,1+je+.01,Math.PI/2),S=b(.014,.014,.02,10,o.heatingFin,2.85,.42,1+je+.01,Math.PI/2),R=u(.08,.08,.01,o.yellowSafety,2.75,.3,1+je+.005),V=u(.04,.06,.03,o.heatingFin,2.75,.3,1+je+.02);y.add(be,ze,Wt,an,S,R,V);let F=-1.3/2-.05,U=2-.35,ut=.85,vt=u(.12,ut,U,o.aluFrame,-4.2-.06,F,0);y.add(vt);for(let bt=0;bt<5;bt++){let re=F-ut/2+.1+bt*((ut-.2)/4),Qt=u(.08,.015,U-.06,o.damperBlade,-4.2-.06,re,0);Qt.rotation.z=.55,y.add(Qt)}let ft=u(.16,.2,.14,o.actuatorOrange,-4.2-.06,F,1+.06);y.add(ft);let At=u(.1,1.3-.35,2-.35,o.aluFrame,-3.7,F,0),It=u(.08,1.3-.4,2-.4,o.filterG4,-3.7,F,0);y.add(At,It);let Zt=1.3/2-.05,$t=u(.12,ut,U,o.aluFrame,-4.2-.06,Zt,0);y.add($t);for(let bt=0;bt<5;bt++){let re=Zt-ut/2+.1+bt*((ut-.2)/4),Qt=u(.08,.015,U-.06,o.damperBlade,-4.2-.06,re,0);Qt.rotation.z=-.55,y.add(Qt)}let wt=u(.16,.2,.14,o.actuatorOrange,-4.2-.06,Zt,1+.06);y.add(wt);let se=new Xe;se.position.set(-2.85,Zt,0),y.add(se);let Ee=b(.38,.3,.12,24,o.aluFrame,.2,0,0,0,Math.PI/2),Te=b(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);se.add(Ee,Te);let me=b(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);se.add(me);let We=b(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);se.add(We),w.push(()=>{Te.rotation.x+=.14});let Mt=u(.1,1.3-.35,2-.35,o.aluFrame,-2.4,F,0);y.add(Mt);for(let bt=0;bt<2;bt++)for(let re=0;re<3;re++){let Qt=F-.22+bt*.44,on=-1+.35+re*((2-.7)/2),cs=new bi(.18,.85,4),qn=new qe(cs,o.filterCloth);qn.position.set(-1.9,Qt,on),qn.rotation.z=-Math.PI/2,qn.scale.set(.9,1.2,.7),y.add(qn)}let Fe=new Xe;Fe.position.set(0,0,0),y.add(Fe);let Lt=u(.38,2.6-.2,2-.2,o.aluFrame,0,0,0);y.add(Lt);let ve=b(1.12,1.12,.32,36,o.aluFrame,0,0,0,0,Math.PI/2),ye=b(1.08,1.08,.3,32,o.rotorWheel,0,0,0,0,Math.PI/2);Fe.add(ve,ye);for(let bt=0;bt<12;bt++){let re=bt/12*Math.PI*2,Qt=u(.025,2.12,.02,o.aluFrame,0,0,0);Qt.rotation.x=re,Fe.add(Qt)}let ge=b(.09,.09,.22,12,o.motorCast,.22,1.05,.75,0,Math.PI/2),Qe=b(.02,.02,.3,8,o.doorHandle,.22,.95,.75);y.add(ge,Qe),w.push(()=>{Fe.rotation.x+=.01});let ie=2-.35,le=1.3-.35,gn=u(.24,le,ie,o.coolingFin,1.15,F,0);y.add(gn),[-.5,.5].forEach(bt=>{let re=b(.045,.045,le+.1,14,o.copperPipe,1.15,F,bt);y.add(re)});for(let bt=0;bt<8;bt++){let re=F-le/2+.1+bt*((le-.2)/7),Qt=new qe(new ks(.032,.012,8,12,Math.PI),o.copperPipe);Qt.position.set(1.15,re,1-.18),Qt.rotation.y=Math.PI/2,Qt.rotation.x=Math.PI/2,y.add(Qt)}let we=u(1.3,.09,ie+.1,o.drainPan,1.5,-1.3+.1,0);y.add(we);let Ke=b(.02,.02,.18,10,o.stainless,1.8,-1.3+.06,1-.05,0,0);y.add(Ke);let kn=u(.12,le,ie,o.aluFrame,1.45,F,0);y.add(kn);for(let bt=0;bt<12;bt++){let re=-.7+bt*((ie-.2)/11),Qt=u(.08,le-.05,.012,o.aluFrame,1.45,F,re);Qt.rotation.y=.35,y.add(Qt)}let Vn=u(.18,le,ie,o.heatingFin,1.85,F,0);y.add(Vn),[-.4,.4].forEach(bt=>{let re=b(.04,.04,le+.1,14,o.copperPipe,1.85,F,bt);y.add(re)});let An=new Xe;An.position.set(2.85,F,0),y.add(An);let Yi=b(.48,.38,.18,28,o.aluFrame,-.4,0,0,0,Math.PI/2),js=b(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);An.add(Yi,js);let ls=b(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Qs=b(.14,.05,.16,16,o.aluFrame,-.25,0,0,0,Math.PI/2);An.add(ls,Qs),w.push(()=>{ls.rotation.x+=.15});let Ln=b(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),Gn=u(.14,.12,.14,o.motorCast,.32,.26,0);An.add(Ln,Gn);let wi=u(1.1,.08,.8,o.baseSkid,.05,-le/2+.08,0);An.add(wi),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([bt,re])=>{let Qt=u(.12,.03,.12,o.motorCast,bt,-le/2+.02,re),on=b(.04,.04,.12,10,o.springSilver,bt,-le/2+.08,re);An.add(Qt,on)});let Dt=u(.1,le,ie,o.rubberBlack,2.35,F,0);y.add(Dt);let he=u(1.2,.03,.03,o.yellowSafety,2.9,F+.4,1-.25),_e=u(1.2,.03,.03,o.yellowSafety,2.9,F,1-.25);y.add(he,_e);for(let bt=-1;bt<=1;bt++){let re=bt*.45,Qt=u(.65,le-.1,.22,o.galvSteel,3.8,F,re),on=b(.11,.11,le-.1,16,o.aluFrame,3.47,F,re);y.add(Qt,on)}}function G(y){let at=-1.4100000000000001,Pt=u(8.6+.2,.22,.1,o.baseSkid,0,at,1-.05),lt=u(8.6+.2,.22,.1,o.baseSkid,0,at,-1+.05);y.add(Pt,lt);let Ht=[-4.3,-2.6,-.9,.8,2.6,4.3];Ht.forEach(Dt=>{y.add(u(.12,.22,2-.2,o.baseSkid,Dt,at,0))}),[-2.6,.8].forEach(Dt=>{y.add(u(.28,.12,.12,o.stainless,Dt,at,1-.04)),y.add(u(.28,.12,.12,o.stainless,Dt,at,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([Dt,he])=>{y.add(u(.08,.18,.08,o.yellowSafety,Dt,at+.06,he))});let ot=.08;y.add(u(8.6,ot,ot,o.stainless,0,-1.3+ot/2,1-ot/2),u(8.6,ot,ot,o.stainless,0,-1.3+ot/2,-1+ot/2),u(8.6,ot,ot,o.stainless,0,1.3-ot/2,1-ot/2),u(8.6,ot,ot,o.stainless,0,1.3-ot/2,-1+ot/2)),Ht.forEach(Dt=>{y.add(u(ot,2.6,ot,o.stainless,Dt,0,1-ot/2),u(ot,2.6,ot,o.stainless,Dt,0,-1+ot/2),u(ot,ot,2-ot*2,o.stainless,Dt,1.3-ot/2,0),u(ot,ot,2-ot*2,o.stainless,Dt,-1.3+ot/2,0))});let Ze=5.1,Sn=u(Ze,.05,2-.16,o.stainless,-4.3+Ze/2,0,0);y.add(Sn),y.add(u(8.6-.1,2.6-.1,.04,o.panelSolid,0,0,-1+.03)),y.add(u(8.6-.12,2.6-.12,.01,o.stainless,0,0,-1+.055)),y.add(u(8.6-.1,.05,2-.16,o.stainless,0,-1.3+.03,0));let bn=b(.04,.04,8.6-.2,12,o.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);y.add(bn),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,4.3-.03,0,0));let oe=u(.18,1.2,1.2,o.stainless,4.3+.09,-.2,0);y.add(oe),y.add(u(.05,2.6-.1,2-.16,o.panelSolid,-4.3+.03,0,0));let fn=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],zn=[1.7,1.7,1.7,1.8,1.7];fn.forEach((Dt,he)=>{let _e=zn[he]-.08,bt=u(_e,.04,2-.16,o.panelCutaway,Dt,1.3-.02,0,!1,!1);y.add(bt),B(bt,o.panelSolid,o.panelCutaway);let re=u(_e,2.6-.18,.03,o.panelCutaway,Dt,0,1-.02,!1,!1);y.add(re),B(re,o.panelSolid,o.panelCutaway);let Qt=.04;y.add(u(_e,Qt,.02,o.stainless,Dt,(2.6-.18)/2,1),u(_e,Qt,.02,o.stainless,Dt,-(2.6-.18)/2,1),u(Qt,2.6-.18,.02,o.stainless,Dt-_e/2,0,1),u(Qt,2.6-.18,.02,o.stainless,Dt+_e/2,0,1)),[-.45,.45].forEach(on=>{y.add(u(.04,.14,.05,o.doorHandle,Dt+_e/2-.1,on,1+.02))}),[-.55,.55].forEach(on=>{y.add(u(.03,.1,.03,o.stainless,Dt-_e/2+.04,on,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([Dt,he])=>{let _e=b(.14,.14,.04,24,o.stainless,Dt,he,1,Math.PI/2),bt=b(.11,.11,.045,20,o.panelCutaway,Dt,he,1,Math.PI/2);y.add(_e,bt)}),[[-1.75,.1],[3.45,.35]].forEach(([Dt,he])=>{let _e=b(.08,.08,.03,20,o.stainless,Dt,he,1.015,Math.PI/2),bt=b(.07,.07,.035,20,o.gaugeFace,Dt,he,1+.015,Math.PI/2);y.add(_e,bt),y.add(b(.008,.008,.22,8,o.panelCutaway,Dt-.03,he-.12,1+.01)),y.add(b(.008,.008,.22,8,o.panelCutaway,Dt+.03,he-.12,1+.01))});let In=.48,je=.68,be=.18,ze=u(In,je,be,o.stainless,2.85,.45,1+be/2),Wt=u(.24,.16,.01,o.touchscreen,2.85,.56,1+be+.005),an=b(.014,.014,.02,10,o.coolingFin,2.75,.42,1+be+.01,Math.PI/2),S=b(.014,.014,.02,10,o.yellowSafety,2.85,.42,1+be+.01,Math.PI/2),R=b(.014,.014,.02,10,o.heatingFin,2.95,.42,1+be+.01,Math.PI/2),V=u(.08,.08,.01,o.yellowSafety,2.85,.3,1+be+.005),F=u(.04,.06,.03,o.heatingFin,2.85,.3,1+be+.02);y.add(ze,Wt,an,S,R,V,F);let U=-1.3/2-.05,ut=2-.35,vt=.85,ft=u(.12,vt,ut,o.stainless,-4.3-.06,U,0);y.add(ft);for(let Dt=0;Dt<5;Dt++){let he=U-vt/2+.1+Dt*((vt-.2)/4),_e=u(.08,.015,ut-.06,o.damperBlade,-4.3-.06,he,0);_e.rotation.z=.55,y.add(_e)}let At=u(.16,.2,.14,o.actuatorOrange,-4.3-.06,U,1+.06);y.add(At);let It=u(.1,1.3-.35,2-.35,o.stainless,-3.8,U,0),Zt=u(.08,1.3-.4,2-.4,o.filterG4,-3.8,U,0);y.add(It,Zt);let $t=1.3/2-.05,wt=u(.12,vt,ut,o.stainless,-4.3-.06,$t,0);y.add(wt);for(let Dt=0;Dt<5;Dt++){let he=$t-vt/2+.1+Dt*((vt-.2)/4),_e=u(.08,.015,ut-.06,o.damperBlade,-4.3-.06,he,0);_e.rotation.z=-.55,y.add(_e)}let se=u(.16,.2,.14,o.actuatorOrange,-4.3-.06,$t,1+.06);y.add(se);let Ee=new Xe;Ee.position.set(-2.95,$t,0),y.add(Ee);let Te=b(.38,.3,.12,24,o.stainless,.2,0,0,0,Math.PI/2),me=b(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);Ee.add(Te,me);let We=b(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);Ee.add(We);let Mt=b(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);Ee.add(Mt),w.push(()=>{me.rotation.x+=.14});let Fe=u(.1,1.3-.35,2-.35,o.stainless,-2.5,U,0);y.add(Fe);for(let Dt=0;Dt<2;Dt++)for(let he=0;he<3;he++){let _e=U-.22+Dt*.44,bt=-1+.35+he*((2-.7)/2),re=new bi(.18,.85,4),Qt=new qe(re,o.filterCloth);Qt.position.set(-2,_e,bt),Qt.rotation.z=-Math.PI/2,Qt.scale.set(.9,1.2,.7),y.add(Qt)}let Lt=u(1.5,1.4,2-.35,o.stainless,-.05,0,0);Lt.rotation.z=Math.PI/4,y.add(Lt);let ve=u(2.2,.04,2-.3,o.stainless,-.05,0,0);ve.rotation.z=-Math.PI/4,y.add(ve);let ye=2-.35,ge=1.3-.35;for(let Dt=0;Dt<3;Dt++){let he=U-.25+Dt*.25,_e=b(.02,.02,ye-.1,12,o.coolingFin,.95,he,0,Math.PI/2);y.add(_e),y.add(u(.04,.04,.04,o.stainless,.95,he,1-.2)),y.add(u(.04,.04,.04,o.stainless,.95,he,-1+.2))}let Qe=u(.24,ge,ye,o.coolingFin,1.25,U,0);y.add(Qe),[-.5,.5].forEach(Dt=>{let he=b(.045,.045,ge+.1,14,o.copperPipe,1.25,U,Dt);y.add(he)});for(let Dt=0;Dt<8;Dt++){let he=U-ge/2+.1+Dt*((ge-.2)/7),_e=new qe(new ks(.032,.012,8,12,Math.PI),o.copperPipe);_e.position.set(1.25,he,1-.18),_e.rotation.y=Math.PI/2,_e.rotation.x=Math.PI/2,y.add(_e)}let ie=u(1.3,.09,ye+.1,o.stainless,1.6,-1.3+.1,0);y.add(ie);let le=b(.025,.025,.2,12,o.stainless,1.9,-1.3+.06,1-.05);y.add(le);let gn=u(.12,ge,ye,o.stainless,1.55,U,0);y.add(gn);for(let Dt=0;Dt<12;Dt++){let he=-.7+Dt*((ye-.2)/11),_e=u(.08,ge-.05,.012,o.stainless,1.55,U,he);_e.rotation.y=.35,y.add(_e)}let we=u(.18,ge,ye,o.heatingFin,1.95,U,0);y.add(we),[-.4,.4].forEach(Dt=>{let he=b(.04,.04,ge+.1,14,o.copperPipe,1.95,U,Dt);y.add(he)});let Ke=new Xe;Ke.position.set(2.85,U,0),y.add(Ke);let kn=b(.48,.38,.18,28,o.stainless,-.4,0,0,0,Math.PI/2),Vn=b(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);Ke.add(kn,Vn);let An=b(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Yi=b(.14,.05,.16,16,o.stainless,-.25,0,0,0,Math.PI/2);Ke.add(An,Yi),w.push(()=>{An.rotation.x+=.15});let js=b(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),ls=u(.14,.12,.14,o.motorCast,.32,.26,0);Ke.add(js,ls);let Qs=u(1.1,.08,.8,o.stainless,.05,-ge/2+.08,0);Ke.add(Qs),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Dt,he])=>{let _e=u(.12,.03,.12,o.motorCast,Dt,-ge/2+.02,he),bt=b(.04,.04,.12,10,o.springSilver,Dt,-ge/2+.08,he);Ke.add(_e,bt)});let Ln=u(.1,ge,ye,o.rubberBlack,2.35,U,0);y.add(Ln);let Gn=u(.2,ge-.1,ye-.1,o.stainless,3.65,U,0),wi=u(.16,ge-.15,ye-.15,o.filterCloth,3.65,U,0);y.add(Gn,wi);for(let Dt=-1;Dt<=1;Dt+=2){let he=Dt*.4,_e=u(.42,ge-.1,.2,o.stainless,4.05,U,he);y.add(_e)}}function D(y){let at=-1.2750000000000001,Pt=6.2+.2,lt=2.2+.2,Ht=u(Pt,.45,.08,o.baseSkid,0,at,1.1+.06),ot=u(Pt,.45,.08,o.baseSkid,0,at,-1.1-.06),Ze=u(.08,.45,lt-.16,o.baseSkid,-3.1-.06,at,0),Sn=u(.08,.45,lt-.16,o.baseSkid,3.1+.06,at,0);y.add(Ht,ot,Ze,Sn);let bn=u(Pt+.08,.04,.14,o.aluFrame,0,-1.05-.02,1.1+.05),oe=u(Pt+.08,.04,.14,o.aluFrame,0,-1.05-.02,-1.1-.05);y.add(bn,oe);let fn=u(Pt,.02,.04,o.rubberBlack,0,-1.05+.01,1.1),zn=u(Pt,.02,.04,o.rubberBlack,0,-1.05+.01,-1.1);y.add(fn,zn),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([Ct,ue])=>{let pn=u(.14,.25,.14,o.yellowSafety,Ct,at+.1,ue),mn=b(.035,.035,.16,16,o.motorCast,Ct,at+.16,ue,0,Math.PI/2);y.add(pn,mn)});let In=u(.9,.18,.9,o.galvSteel,-.1,at-.14,0),je=u(.82,.19,.82,o.motorCast,-.1,at-.14,0),be=u(.9,.18,.9,o.galvSteel,2.3,at-.14,0),ze=u(.82,.19,.82,o.motorCast,2.3,at-.14,0);y.add(In,je,be,ze);let Wt=.08;y.add(u(6.2,Wt,Wt,o.aluFrame,0,-1.05+Wt/2,1.1-Wt/2),u(6.2,Wt,Wt,o.aluFrame,0,-1.05+Wt/2,-1.1+Wt/2),u(6.2,Wt,Wt,o.aluFrame,0,1.05-Wt/2,1.1-Wt/2),u(6.2,Wt,Wt,o.aluFrame,0,1.05-Wt/2,-1.1+Wt/2)),[-3.1+Wt/2,-.7,.6,1.8,3.1-Wt/2].forEach(Ct=>{y.add(u(Wt,2.1-2*Wt,Wt,o.aluFrame,Ct,0,1.1-Wt/2),u(Wt,2.1-2*Wt,Wt,o.aluFrame,Ct,0,-1.1+Wt/2))}),[-3.1+Wt/2,-.7,.6,1.8,3.1-Wt/2].forEach(Ct=>{y.add(u(Wt,Wt,2.2-2*Wt,o.aluFrame,Ct,-1.05+Wt/2,0),u(Wt,Wt,2.2-2*Wt,o.aluFrame,Ct,1.05-Wt/2,0))}),y.add(u(6.2-.1,2.1-.1,.05,o.panelSolid,0,0,-1.1+.04)),y.add(u(6.2-.1,.05,2.2-.1,o.galvSteel,0,-1.05+.04,0)),y.add(u(.05,2.1-.1,2.2-.1,o.panelSolid,3.1-.03,0,0));let an=u(3.8,.06,2.2+.1,o.panelSolid,1.15,1.05+.03,0);y.add(an),y.add(u(3.84,.04,.04,o.aluFrame,1.15,1.05+.01,1.1+.06),u(3.84,.04,.04,o.aluFrame,1.15,1.05+.01,-1.1-.06));let S=u(.06,2.1-.12,2.2-.12,o.galvSteel,-.7,0,0);y.add(S);let R=u(2.2,2.1-.25,.12,o.coolingFin,-1.85,.02,-1.1+.15),V=u(.12,2.1-.25,2.2-.3,o.coolingFin,-3.1+.15,.02,0);y.add(R,V);for(let Ct=-.8;Ct<=.8;Ct+=.2){let ue=u(2.25,.02,.02,o.aluFrame,-1.85,Ct,-1.05);y.add(ue)}[-.8,-.2,.4].forEach(Ct=>{let ue=b(.035,.035,2.1,14,o.copperPipe,-1.85,Ct,-.8600000000000001,0,Math.PI/2);y.add(ue)}),[-2.2,-1.2].forEach((Ct,ue)=>{let mn=b(.48,.46,.22,28,o.motorCast,Ct,1.1600000000000001,0,0,0,!0),ui=b(.51,.51,.04,28,o.aluFrame,Ct,1.05+.22,0);y.add(mn,ui);let hs=b(.46,.46,.02,24,o.galvSteel,Ct,1.05+.22+.01,0,0,0,!0);y.add(hs);for(let Zi=0;Zi<4;Zi++){let us=u(.9,.015,.015,o.galvSteel,Ct,1.285,0);us.rotation.y=Zi/4*Math.PI,y.add(us)}let di=new Xe;di.position.set(Ct,1.05+.12,0),y.add(di);let il=b(.12,.12,.08,16,o.aluFrame,0,0,0);di.add(il);for(let Zi=0;Zi<5;Zi++){let us=new Xe;us.rotation.y=Zi/5*Math.PI*2;let Ic=u(.34,.02,.11,o.fanImpeller,.24,0,0);Ic.rotation.x=.35,us.add(Ic),di.add(us)}let sl=ue===0?.18:.17;w.push(()=>{di.rotation.y+=sl});let rl=b(.15,.15,.3,16,o.motorCast,Ct,1.05-.12,0);y.add(rl)});let U=u(1.5,.06,.6,o.baseSkid,-1.8,-1.05+.1,.1);y.add(U),[-2.15,-1.45].forEach(Ct=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([hs,di])=>{y.add(b(.04,.04,.04,12,o.rubberBlack,Ct+hs,-1.05+.14,.1+di))});let ue=b(.16,.16,.58,24,o.motorCast,Ct,-1.05+.45,.1),pn=b(.14,.16,.08,20,o.motorCast,Ct,-1.05+.76,.1),mn=u(.1,.14,.08,o.motorCast,Ct+.14,-1.05+.5,.1),ui=b(.165,.165,.05,20,o.heatingFin,Ct,-1.05+.22,.1);y.add(ue,pn,mn,ui)});let vt=b(.12,.12,.52,20,o.motorCast,-.95,-1.05+.42,.25),ft=b(.09,.12,.06,16,o.motorCast,-.95,-1.05+.7,.25);y.add(vt,ft);let At=b(.04,.04,.8,14,o.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),It=b(.04,.04,.6,14,o.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);y.add(At,It);let Zt=b(.03,.03,1.1,14,o.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),$t=b(.045,.045,.22,16,o.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);y.add(Zt,$t);let wt=b(.06,.06,.24,16,o.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),se=b(.03,.03,.34,14,o.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),Ee=u(.09,.12,.09,o.brassGold,-.95,-1.05+.45,-.3),Te=b(.01,.01,.2,8,o.rubberBlack,-.95,-1.05+.54,-.3);y.add(wt,se,Ee,Te),[-.15,.15].forEach(Ct=>{let ue=b(.045,.045,.02,16,o.gaugeFace,-.73,-.4,Ct,0,Math.PI/2);y.add(ue)});let me=1.1,We=.8,Mt=.35,Fe=u(me,We,Mt,o.galvSteel,-.1,.2,-1.1-Mt/2+.04),Lt=u(me+.06,.03,Mt+.08,o.aluFrame,-.1,.2+We/2+.02,-1.1-Mt/2);Lt.rotation.x=-.12,y.add(Fe,Lt);for(let Ct=-.3;Ct<=.3;Ct+=.12){let ue=u(me-.06,.02,.18,o.damperBlade,-.1,.2+Ct,-1.1-Mt/2);ue.rotation.x=.45,y.add(ue)}let ve=1,ge=u(ve,.75,.08,o.aluFrame,-.1,.2,-1.1+.25);y.add(ge);for(let Ct=-.25;Ct<=.25;Ct+=.14){let ue=u(ve-.06,.11,.015,o.damperBlade,-.1,.2+Ct,-.8500000000000001);ue.rotation.x=.3,y.add(ue)}let Qe=.9,le=u(Qe,.08,.9,o.aluFrame,-.1,-1.05+.15,0);y.add(le);for(let Ct=-.3;Ct<=.3;Ct+=.15){let ue=u(Qe-.06,.015,.12,o.damperBlade,-.1,-.9,Ct);ue.rotation.z=.25,y.add(ue)}let gn=u(.16,.22,.14,o.actuatorOrange,-.1,.35,1.1-.2),we=b(.04,.04,.06,16,o.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),Ke=u(.03,.14,.02,o.motorCast,-.1,.42,1.1-.1);y.add(gn,we,Ke);let kn=b(.015,.015,.35,10,o.stainless,.25,.2,0);y.add(kn);let Vn=.6,An=2.1-.3,Yi=2.2-.3,js=u(.18,An,Yi,o.galvSteel,Vn,0,0);y.add(js);for(let Ct=-Yi/2+.3;Ct<=Yi/2-.2;Ct+=.5){let ue=u(.05,An-.1,.44,o.filterG4,Vn-.05,0,Ct),pn=u(.07,An-.1,.44,o.filterCloth,Vn+.05,0,Ct);y.add(ue,pn)}let ls=b(.01,.01,.2,8,o.copperPipe,Vn-.14,.3,1.1-.15),Qs=b(.01,.01,.2,8,o.copperPipe,Vn+.14,.3,1.1-.15);y.add(ls,Qs);let Ln=1.25,Gn=2.1-.35,wi=2.2-.35,Dt=u(.32,Gn,wi,o.coolingFin,Ln,.02,0);y.add(Dt);for(let Ct=0;Ct<4;Ct++)for(let ue=0;ue<3;ue++){let pn=-Gn/2+.2+ue*(Gn/3.2),mn=Ln-.12+Ct*.08,ui=b(.025,.025,.04,12,o.copperPipe,mn,pn,1.1-.18,Math.PI/2,0);y.add(ui)}let he=b(.035,.035,.08,14,o.brassGold,Ln-.15,-.2,1.1-.22);y.add(he);for(let Ct=0;Ct<4;Ct++){let ue=b(.008,.008,.28,8,o.copperPipe,Ln-.08,-.2+Ct*.1,.8800000000000001,0,Math.PI/4);y.add(ue)}let _e=wi+.15,bt=.85,re=.09,Qt=u(bt,re,_e,o.drainPan,Ln,-1.05+re/2+.05,0);y.add(Qt);let on=b(.03,.03,.35,12,o.stainless,Ln+.1,-1.05-.05,1.1+.02),cs=b(.03,.03,.22,12,o.stainless,Ln+.22,-1.05-.12,1.1+.02),qn=b(.03,.03,.14,12,o.stainless,Ln+.16,-1.05-.22,1.1+.02,0,Math.PI/2);y.add(on,cs,qn);let tr=u(.12,Gn-.05,wi,o.aluFrame,Ln+.24,.02,0);y.add(tr);let Rc=1.8,Pu=Gn,Iu=wi;for(let Ct=-.5;Ct<=.5;Ct+=.25){let ue=b(.045,.045,Iu-.2,16,o.stainless,Rc,Ct,0,Math.PI/2,0);y.add(ue)}let Lu=u(.25,Pu-.2,.3,o.galvSteel,Rc,0,-1.1+.2);y.add(Lu);let qi=new Xe;qi.position.set(2.45,.05,0),y.add(qi);let Du=b(.48,.38,.18,28,o.aluFrame,-.38,0,0,0,Math.PI/2),Nu=b(.44,.44,.03,24,o.copperPipe,-.36,0,0,0,Math.PI/2,!0);qi.add(Du,Nu);let Pc=b(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Fu=b(.14,.05,.16,16,o.aluFrame,-.24,0,0,0,Math.PI/2);qi.add(Pc,Fu),w.push(()=>{Pc.rotation.x+=.15});let Uu=b(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),Ou=u(.14,.12,.14,o.motorCast,.32,.26,0);qi.add(Uu,Ou);let Bu=u(1.1,.08,.8,o.baseSkid,.05,-Gn/2+.1,0);qi.add(Bu),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ct,ue])=>{let pn=u(.12,.03,.12,o.motorCast,Ct,-Gn/2+.04,ue),mn=b(.04,.04,.12,10,o.springSilver,Ct,-Gn/2+.1,ue);qi.add(pn,mn)});let Hu=u(.85,.6,.85,o.galvSteel,2.3,-1.05+.3,0),zu=u(.9,.1,.9,o.rubberBlack,2.3,-1.05+.05,0);y.add(Hu,zu),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((Ct,ue)=>{let pn=Ct.maxX-Ct.minX,mn=(Ct.minX+Ct.maxX)/2,ui=2.1-.22,hs=u(pn-.04,ui,.04,o.panelCutaway,mn,0,1.1-.02,!1,!1);y.add(hs),B(hs,o.panelSolid,o.panelCutaway);let di=u(.04,.14,.04,o.doorHandle,mn+pn*.42,0,1.1+.01),il=u(.03,.08,.03,o.stainless,mn-pn*.45,ui*.35,1.1+.01),sl=u(.03,.08,.03,o.stainless,mn-pn*.45,-ui*.35,1.1+.01);if(y.add(di,il,sl),ue===1||ue===2||ue===3){let rl=b(.12,.12,.04,20,o.aluFrame,mn,.22,1.1,Math.PI/2);y.add(rl)}});let ku=u(.42,.65,.18,o.panelSolid,.6,.3,1.1+.08),Vu=u(.38,.6,.02,o.aluFrame,.6,.3,1.1+.17),Gu=u(.24,.16,.01,o.touchscreen,.6,.4,1.1+.18),Wu=u(.09,.09,.02,o.yellowSafety,.6,.18,1.1+.18),Xu=b(.035,.035,.05,12,o.heatingFin,.6,.18,1.1+.2,Math.PI/2);y.add(ku,Vu,Gu,Wu,Xu),[-.15,.15].forEach(Ct=>{let ue=b(.065,.065,.035,20,o.aluFrame,.6,-.25,1.1800000000000002+Ct,Math.PI/2),pn=b(.055,.055,.037,20,o.gaugeFace,.6,-.25,1.1+.08+Ct,Math.PI/2),mn=b(.008,.008,.3,8,o.panelCutaway,.6,-.42,1.1+.08+Ct);y.add(ue,pn,mn)})}function W(y,X){if(X==="tks"){z(y);return}if(X==="thks"){G(y);return}if(X==="rooftop"){D(y);return}let j=X==="thks",dt=X==="thrv-dx",Tt=X==="hrv",Ut=X==="rooftop",pt=Tt?4.8:Ut?6.2:7.6,Ft=Tt?1.9:2.6,at=Tt?1.8:2,Pt=pt/2,lt=Ft/2,Ht=at/2,ot=.22,Ze=-lt-ot/2,Sn=u(pt+.3,ot,.12,o.baseSkid,0,Ze,Ht-.06),bn=u(pt+.3,ot,.12,o.baseSkid,0,Ze,-Ht+.06);y.add(Sn,bn),[-Pt,-Pt*.5,0,Pt*.5,Pt].forEach(be=>{y.add(u(.12,ot,at-.24,o.baseSkid,be,Ze,0))});let oe=.08,fn=j?o.stainless:o.aluFrame;y.add(u(pt,oe,oe,fn,0,-lt+oe/2,Ht-oe/2),u(pt,oe,oe,fn,0,-lt+oe/2,-Ht+oe/2),u(pt,oe,oe,fn,0,lt-oe/2,Ht-oe/2),u(pt,oe,oe,fn,0,lt-oe/2,-Ht+oe/2));let zn=j?o.stainless:o.galvSteel;y.add(u(pt-.1,Ft-.1,.05,o.panelSolid,0,0,-Ht+.04),u(pt-.1,.05,at-.1,o.panelSolid,0,lt-.03,0),u(pt-.1,.05,at-.1,zn,0,-lt+.03,0),u(.05,Ft-.1,at-.1,o.panelSolid,Pt-.03,0,0));let In=Tt?3:4,je=(pt-.2)/In;for(let be=0;be<In;be++){let ze=-Pt+.1+(be+.5)*je,Wt=u(je-.04,Ft-.18,.03,o.panelCutaway,ze,0,Ht-.02,!1,!1);y.add(Wt),P.push(Wt),y.add(u(.04,.12,.04,o.doorHandle,ze+je*.4,0,Ht+.01)),y.add(b(.11,.11,.04,16,o.aluFrame,ze,.2,Ht,Math.PI/2))}if(Tt){let be=u(1.5,1.4,at-.35,o.aluFrame,0,0,0);be.rotation.z=Math.PI/4,y.add(be),[-1.4,1.4].forEach((ze,Wt)=>{let an=Wt===0?-.35:.35,S=b(.35,.35,.25,20,o.fanHousing,ze,an,0,0,Math.PI/2);y.add(S),w.push(()=>{S.rotation.x+=.1})}),[-1.9,1.9].forEach(ze=>{y.add(u(.06,Ft-.4,at-.4,o.filterCloth,ze,0,0))}),[[-Pt-.1,.4],[Pt+.1,-.4]].forEach(([ze,Wt])=>{y.add(b(.32,.32,.22,24,o.galvSteel,ze,Wt,0,0,Math.PI/2,!0))})}else if(Ut){[-1.2,1.2].forEach(ze=>{let Wt=b(.55,.55,.18,24,o.motorCast,ze,lt+.09,0,0,0,!0),an=b(.48,.48,.04,4,o.fanImpeller,ze,lt+.12,0);y.add(Wt,an),w.push(()=>{an.rotation.y+=.15})}),[-1.8,-1].forEach(ze=>{let Wt=b(.2,.2,.7,16,o.motorCast,ze,-lt+.5,-Ht+.5);y.add(Wt)});let be=b(.45,.45,.35,20,o.fanHousing,1.8,-.2,0,0,Math.PI/2);y.add(be),w.push(()=>{be.rotation.x+=.12}),y.add(u(.3,Ft-.5,at-.4,o.coolingFin,.5,-.1,0))}else{let be=new Xe;be.position.set(0,0,0),y.add(be);let ze=b(1.05,1.05,.28,32,o.aluFrame,0,0,0,0,Math.PI/2),Wt=b(1.01,1.01,.26,28,o.rotorWheel,0,0,0,0,Math.PI/2);be.add(ze,Wt);for(let R=0;R<12;R++){let V=R/12*Math.PI*2,F=u(.03,1.98,.02,o.aluFrame,0,0,0);F.rotation.x=V,be.add(F)}w.push(()=>{be.rotation.x+=.008});let an=b(.42,.42,.35,24,o.fanHousing,2.8,-lt/2+.1,0,0,Math.PI/2),S=b(.36,.36,.3,24,o.fanHousing,-1.3,lt/2-.05,0,0,Math.PI/2);y.add(an,S),w.push(()=>{an.rotation.x+=.12,S.rotation.x+=.12}),y.add(u(.28,lt-.3,at-.35,j?o.stainless:o.coolingFin,1.35,-lt/2,0)),y.add(u(.22,lt-.3,at-.35,o.heatingFin,1.85,-lt/2,0)),y.add(u(.95,.08,at-.25,o.drainPan,1.6,-lt+.12,0)),y.add(u(.06,lt-.25,at-.3,j?o.stainless:o.aluFrame,-2.1,-lt/2,0));for(let R=0;R<4;R++){let V=-Ht+.25+(R+.5)*((at-.4)/4),F=new qe(new bi(.2,.75,4),o.filterCloth);F.rotateZ(-Math.PI/2),F.position.set(-1.7,-lt/2,V),F.scale.set(1,1.4,.8),y.add(F)}if(j){y.add(u(.18,lt-.3,at-.35,o.stainless,2.15,-lt/2,0));let R=b(.03,.03,at-.5,12,o.coolingFin,1.1,-lt/2+.2,0,Math.PI/2);y.add(R)}[-lt/2,lt/2].forEach(R=>{y.add(u(.08,lt-.25,at-.3,o.aluFrame,-Pt-.04,R,0)),y.add(u(.14,.18,.12,o.actuatorOrange,-Pt-.04,R,Ht+.05))}),dt&&y.add(b(.2,.2,.65,16,o.motorCast,2.5,-lt/2,-Ht+.5)),y.add(u(.32,.55,.18,o.motorCast,2.3,.35,Ht+.09))}}function $(y,X){if(X==="tdf"){y.add(u(3.2,.04,2,o.galvSteel,0,2/2,0),u(3.2,.04,2,o.galvSteel,0,-2/2,0),u(3.2,2,.04,o.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(at=>{y.add(u(.08,.12,2+.2,o.aluFrame,at,2/2+.04,0),u(.08,.12,2+.2,o.aluFrame,at,-2/2-.04,0),u(.08,2,.12,o.aluFrame,at,0,2/2+.04),u(.08,2,.12,o.aluFrame,at,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(Pt=>{[-2/2-.04,2/2+.04].forEach(lt=>{y.add(u(.1,.14,.14,o.baseSkid,at,Pt,lt))})})});let Ut=u(3.2-.1,2-.1,.03,o.panelCutaway,0,0,2/2,!1,!1);y.add(Ut),P.push(Ut),[-.8,.8].forEach(at=>{y.add(u(.08,.12,.04,o.doorHandle,at,2/2-.1,2/2+.02))});let pt=b(.78,.78,.45,24,o.fanImpeller,0,0,0,0,Math.PI/2),Ft=b(.28,.28,.35,16,o.motorCast,.25,0,0,0,Math.PI/2);y.add(pt,Ft),w.push(()=>{pt.rotation.x+=.14}),y.add(u(.24,.18,.16,o.fanHousing,-.6,2/2+.1,.4))}else if(X==="yangin-fani"){let Tt=b(1.25,1.25,4.2,32,o.galvSteel,0,0,0,0,Math.PI/2,!0);y.add(Tt),[-4.2/2,4.2/2].forEach(Pt=>{let lt=b(1.43,1.43,.06,32,o.baseSkid,Pt,0,0,0,Math.PI/2,!0);y.add(lt);for(let Ht=0;Ht<12;Ht++){let ot=Ht/12*Math.PI*2;y.add(u(.08,.04,.04,o.doorHandle,Pt,Math.sin(ot)*(1.25+.09),Math.cos(ot)*(1.25+.09)))}});let Ut=b(.46,.46,2,24,o.motorCast,.1,0,0,0,Math.PI/2),pt=new qe(new bi(.46,.6,20),o.motorCast);pt.rotateZ(-Math.PI/2),pt.position.set(-1.2,0,0),y.add(Ut,pt);let Ft=new Xe;Ft.position.set(-.6,0,0),y.add(Ft);let at=b(.48,.48,.2,20,o.fanImpeller,0,0,0,0,Math.PI/2);Ft.add(at);for(let Pt=0;Pt<8;Pt++){let lt=Pt/8*Math.PI*2,Ht=u(.04,.7,.16,o.fanImpeller,0,Math.sin(lt)*.78,Math.cos(lt)*.78);Ht.rotation.x=lt+.35,Ft.add(Ht)}w.push(()=>{Ft.rotation.x+=.15});for(let Pt=0;Pt<4;Pt++){let lt=Pt/4*Math.PI*2,Ht=u(.03,1.25-.46,.1,o.baseSkid,.4,Math.sin(lt)*(1.25+.46)/2,Math.cos(lt)*(1.25+.46)/2);Ht.rotation.x=lt,y.add(Ht)}y.add(u(2.8,.12,.35,o.baseSkid,0,-1.25-.1,.9),u(2.8,.12,.35,o.baseSkid,0,-1.25-.1,-.9)),y.add(u(.24,.24,.16,o.actuatorOrange,0,1.25+.1,0))}else{let Tt=b(.62,.62,5.2,28,o.galvSteel,0,0,0,0,Math.PI/2,!0);y.add(Tt),[-1.7,1.7].forEach(Ft=>{y.add(b(.62+.12,.62+.12,1.5,28,o.aluFrame,Ft,0,0,0,Math.PI/2,!0))});let Ut=b(.28,.28,1.2,16,o.motorCast,0,0,0,0,Math.PI/2),pt=b(.62-.05,.62-.05,.12,8,o.fanImpeller,0,0,0,0,Math.PI/2);y.add(Ut,pt),w.push(()=>{pt.rotation.x+=.16});for(let Ft=-.3;Ft<=.3;Ft+=.2){let at=u(.08,.04,.8,o.damperBlade,2.62,Ft,0);at.rotation.z=-.2,y.add(at)}[-5.2/2-.02,5.2/2+.02].forEach(Ft=>{y.add(b(.62+.02,.62+.02,.04,16,o.aluFrame,Ft,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(Ft=>{y.add(u(.08,.55,.25,o.baseSkid,Ft,.62+.35,0))})}}function J(y){let Ft=u(3,.03,1.3,o.galvSteel,-1.1,.45,0),at=u(3,.03,1.3,o.galvSteel,-1.1,-.45,0),Pt=u(3,.9,.03,o.galvSteel,-1.1,0,-.65);y.add(Ft,at,Pt);let lt=.6,Ht=u(lt,.9,.03,o.galvSteel,-2.6+lt/2,0,.65),ot=u(lt,.9,.03,o.galvSteel,.4-lt/2,0,.65),Ze=3-2*lt,Sn=u(Ze,.9-.08,.03,o.panelCutaway,-1.1,0,.65,!1,!1);y.add(Ht,ot,Sn),B(Sn,o.galvSteel,o.panelCutaway),[-2.1,-1.6,-1.1,-.6,-.1].forEach(Lt=>{let ve=u(.04,.025,1.22,o.aluFrame,Lt,.47000000000000003,0),ye=u(.04,.025,1.3-.08,o.aluFrame,Lt,-.45-.02,0);y.add(ve,ye)}),[[-1.85,-1.35],[-1.35,-.85],[-.85,-.35]].forEach(([Lt,ve])=>{let ye=(Lt+ve)/2,ge=u(.015,.015,1.3-.12,o.aluFrame,ye,.45+.015,0);ge.rotation.y=.35;let Qe=u(.015,.015,1.3-.12,o.aluFrame,ye,.45+.015,0);Qe.rotation.y=-.35,y.add(ge,Qe)});let oe=.035,fn=u(3,oe,oe,o.aluFrame,-1.1,.45+oe/2,.65+oe/2),zn=u(3,oe,oe,o.aluFrame,-1.1,.45+oe/2,-.65-oe/2),In=u(3,oe,oe,o.aluFrame,-1.1,-.45-oe/2,.65+oe/2),je=u(3,oe,oe,o.aluFrame,-1.1,-.45-oe/2,-.65-oe/2);y.add(fn,zn,In,je);let be=u(3,.012,.012,o.rubberBlack,-1.1,.45,.65);y.add(be);let ze=u(Ze-.05,.9-.12,.06,o.motorCast,-1.1,0,-.65+.05),Wt=u(Ze-.05,.06,1.3-.12,o.motorCast,-1.1,-.45+.05,0);y.add(ze,Wt);let an=u(Ze-.06,.9-.14,.015,o.galvSteel,-1.1,0,-.65+.08),S=u(Ze-.06,.015,1.3-.14,o.galvSteel,-1.1,-.45+.08,0);y.add(an,S);for(let Lt=-1.1-.6;Lt<=-1.1+.6;Lt+=.4)for(let ve=-.25;ve<=.25;ve+=.25){let ye=b(.005,.005,.08,8,o.copperPipe,Lt,ve,-.6,Math.PI/2),ge=b(.03,.03,.005,12,o.aluFrame,Lt,ve,-.65+.09,Math.PI/2);y.add(ye,ge)}let R=-2.1,V=b(.24,.24,.04,24,o.aluFrame,R,0,.65+.02,Math.PI/2),F=b(.22,.22,.05,24,o.galvSteel,R,0,.65+.03,Math.PI/2);y.add(V,F),[-.1,.1].forEach(Lt=>{let ve=u(.04,.08,.05,o.doorHandle,R+Lt,0,.72);y.add(ve)}),rt(y,-2.6,.9,1.3,o),q(y,.4,.9,1.3,o);let U=1.35,ut=1.8,vt=u(ut,.03,1.3,o.galvSteel,U,.45,0),ft=u(ut,.03,1.3,o.galvSteel,U,-.45,0),At=u(ut,.9,.03,o.galvSteel,U,0,-.65);y.add(vt,ft,At);let It=u(.4,.9,.03,o.galvSteel,.6,0,.65),Zt=u(.4,.9,.03,o.galvSteel,2.05,0,.65),$t=u(1.05,.9-.08,.03,o.panelCutaway,1.32,0,.65,!1,!1);y.add(It,Zt,$t),B($t,o.galvSteel,o.panelCutaway);for(let Lt=0;Lt<4;Lt++){let ve=.9+Lt*.28,ye=new Xe;ye.position.set(ve,0,-.15+Lt*.1);let ge=b(.35,.35,.9-.14,16,o.aluFrame,0,0,0,0,0,!0);ge.scale.set(.25,1,.55),ye.add(ge);let Qe=u(.04,.02,.18,o.galvSteel,0,.45-.08,0),ie=u(.04,.02,.18,o.galvSteel,0,-.45+.08,0);ye.add(Qe,ie),y.add(ye)}let wt=.55,se=.45,Ee=.45,Te=u(wt,se,Ee,o.galvSteel,1.35,.15,-.65-Ee/2),me=u(wt+.1,se+.1,.04,o.aluFrame,1.35,.15,-.65-Ee);y.add(Te,me),rt(y,2.24,.9,1.3,o),[-1.8,1].forEach(Lt=>{let ye=u(.06,.05,1.65,o.baseSkid,Lt,-.49,0),ge=u(.06,.015,.15,o.rubberBlack,Lt,-.45-.01,.65-.1),Qe=u(.06,.015,.15,o.rubberBlack,Lt,-.45-.01,-.65+.1);y.add(ye,ge,Qe),[-1.65/2+.04,1.65/2-.04].forEach(ie=>{let gn=b(.012,.012,1.35,10,o.stainless,Lt,.20500000000000004,ie),we=b(.024,.024,.03,6,o.aluFrame,Lt,-.45-.07,ie),Ke=b(.024,.024,.03,6,o.aluFrame,Lt,-.45+1.35-.04,ie);y.add(gn,we,Ke)})}),[-.5,-.3].forEach(Lt=>{let ve=b(.018,.018,.04,12,o.brassGold,Lt,.47000000000000003,.2);y.add(ve)});let Mt=u(.22,.14,.01,o.aluFrame,-.4,.15,.65+.02),Fe=u(.18,.1,.012,o.touchscreen,-.4,.15,.65+.022);y.add(Mt,Fe)}function rt(y,X,j,dt,Tt){let Ft=u(.04,.06,dt+.14,Tt.aluFrame,X,j/2+.03,0),at=u(.04,.06,dt+.14,Tt.aluFrame,X,-j/2-.06/2,0),Pt=u(.04,j+.14,.06,Tt.aluFrame,X,0,dt/2+.06/2),lt=u(.04,j+.14,.06,Tt.aluFrame,X,0,-dt/2-.06/2);y.add(Ft,at,Pt,lt),[[j/2+.06/2,dt/2+.06/2],[j/2+.06/2,-dt/2-.06/2],[-j/2-.06/2,dt/2+.06/2],[-j/2-.06/2,-dt/2-.06/2]].forEach(([ot,Ze])=>{let Sn=u(.05,.09,.09,Tt.galvSteel,X,ot,Ze),bn=b(.012,.012,.04+.02,8,Tt.doorHandle,X,ot,Ze,0,Math.PI/2);y.add(Sn,bn)})}function q(y,X,j,dt,Tt){rt(y,X-.025,j,dt,Tt),rt(y,X+.025,j,dt,Tt);let Ut=u(.015,j+.08,dt+.08,Tt.rubberBlack,X,0,0);y.add(Ut),[[j/2+.03,dt/2+.03],[j/2+.03,-dt/2-.03],[-j/2-.03,dt/2+.03],[-j/2-.03,-dt/2-.03]].forEach(([at,Pt])=>{let lt=b(.014,.014,.12,10,Tt.stainless,X,at,Pt,0,Math.PI/2),Ht=b(.022,.022,.03,6,Tt.doorHandle,X+.05,at,Pt,0,Math.PI/2);y.add(lt,Ht)}),[[j/2+.05,0],[-j/2-.05,0],[0,dt/2+.05],[0,-dt/2-.05]].forEach(([at,Pt])=>{let lt=u(.08,.04,.04,Tt.doorHandle,X,at,Pt),Ht=b(.01,.01,.06,8,Tt.stainless,X,at+(at!==0?Math.sign(at)*.025:0),Pt+(Pt!==0?Math.sign(Pt)*.025:0));y.add(lt,Ht)})}function nt(y,X){if(X==="galvaniz-kanal"){J(y);return}if(X==="spiral-kanal"){let Tt=b(.75,.75,4.4,32,o.galvSteel,-.6,0,0,0,Math.PI/2,!0);y.add(Tt);for(let pt=-2.6;pt<=1.2;pt+=.45)y.add(b(.75+.015,.75+.015,.025,32,o.aluFrame,pt,0,0,0,Math.PI/2,!0));y.add(b(.75+.025,.75+.025,.12,32,o.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let Ut=b(.75-.01,.75-.01,1.8,28,o.galvSteel,2.2,.9,0,0,0,!0);y.add(Ut),y.add(b(.75+.06,.75+.06,.08,32,o.baseSkid,-.8,0,0,0,Math.PI/2,!0)),y.add(b(.02,.02,1.4,8,o.baseSkid,-.8,.75+.7,0))}else if(X==="paslanmaz-kanal"){let Tt=b(.85,.85,4.6,32,o.stainless,0,0,0,0,Math.PI/2,!0);y.add(Tt),y.add(u(4.6-.02,.02,.03,o.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(Ut=>{y.add(b(.85+.2,.85+.2,.08,32,o.stainless,Ut,0,0,0,Math.PI/2,!0));for(let pt=0;pt<8;pt++){let Ft=pt/8*Math.PI*2;y.add(u(.12,.04,.04,o.doorHandle,Ut,Math.sin(Ft)*(.85+.1),Math.cos(Ft)*(.85+.1)))}}),y.add(b(.32,.32,.06,16,o.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(Ut=>{y.add(u(.04,.08,.06,o.doorHandle,Ut,0,.85+.07))})}else{y.add(u(4.6,.04,2.4,o.galvSteel,0,2/2,0),u(4.6,.04,2.4,o.galvSteel,0,-2/2,0),u(4.6,2,.04,o.galvSteel,0,0,-2.4/2));let Ut=u(.9,2,.04,o.galvSteel,-4.6/2+.45,0,2.4/2),pt=u(.9,2,.04,o.galvSteel,4.6/2-.45,0,2.4/2),Ft=u(4.6-1.8,2-.3,.03,o.panelCutaway,0,0,2.4/2,!1,!1);y.add(Ut,pt,Ft),P.push(Ft),y.add(u(4.6-1.9,2-.4,.08,o.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(at=>{y.add(u(.08,.14,2.4+.24,o.aluFrame,at,2/2+.05,0),u(.08,.14,2.4+.24,o.aluFrame,at,-2/2-.05,0),u(.08,2,.14,o.aluFrame,at,0,2.4/2+.05),u(.08,2,.14,o.aluFrame,at,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(Pt=>{[-2.4/2-.05,2.4/2+.05].forEach(lt=>{y.add(u(.1,.16,.16,o.baseSkid,at,Pt,lt))})})}),y.add(u(4.6-.8,.02,.02,o.aluFrame,0,2/2+.02,0))}}function st(y,X){if(X==="menfez"){y.add(u(.24,.14,3.4+.2,o.aluFrame,0,2.2/2+.05,0),u(.24,.14,3.4+.2,o.aluFrame,0,-2.2/2-.05,0),u(.24,2.2,.14,o.aluFrame,0,0,3.4/2+.05),u(.24,2.2,.14,o.aluFrame,0,0,-3.4/2-.05));for(let Ut=-2.2/2+.2;Ut<=2.2/2-.15;Ut+=.24){let pt=u(.08,.02,3.3,o.damperBlade,.09,Ut,0);pt.rotation.z=.22,y.add(pt)}for(let Ut=-3.4/2+.25;Ut<=3.4/2-.2;Ut+=.28){let pt=u(.06,2.1500000000000004,.02,o.damperBlade,0,0,Ut);pt.rotation.y=.2,y.add(pt)}y.add(u(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,2.2/2-.04,0),u(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,-2.2/2+.04,0)),y.add(u(.08,.12,.08,o.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(X==="difuzor"){y.add(u(3.4,.03,1.5,o.galvSteel,0,1.3/2+.3,0),u(3.4,1.3,.03,o.galvSteel,0,.3,-1.5/2),u(3.4,1.3,.03,o.galvSteel,0,.3,1.5/2)),y.add(b(.42,.42,.35,24,o.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),y.add(u(3.4+.2,.06,1.5+.2,o.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(pt=>{y.add(u(3.4-.1,.04,.06,o.doorHandle,0,-1.3/2+.26,pt))});let Ut=u(1.8,.04,1.8,o.panelSolid,0,-1,0);y.add(Ut);for(let pt=0;pt<16;pt++){let Ft=pt/16*Math.PI*2,at=u(.03,.02,.36,o.doorHandle,Math.sin(Ft)*.55,-.98,Math.cos(Ft)*.55);at.rotation.y=Ft+.5,y.add(at)}}else{y.add(u(1.4,.04,2.4,o.galvSteel,0,2.2/2,0),u(1.4,.04,2.4,o.galvSteel,0,-2.2/2,0),u(1.4,2.2,.04,o.galvSteel,0,0,-2.4/2),u(1.4,2.2,.04,o.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(pt=>{y.add(u(.08,.14,2.4+.2,o.aluFrame,pt,2.2/2+.05,0),u(.08,.14,2.4+.2,o.aluFrame,pt,-2.2/2-.05,0),u(.08,2.2,.14,o.aluFrame,pt,0,2.4/2+.05),u(.08,2.2,.14,o.aluFrame,pt,0,-2.4/2-.05))});for(let pt=-2.2/2+.35;pt<=2.2/2-.25;pt+=.5){let Ft=u(.35,.04,2.28,o.damperBlade,0,pt,0);Ft.rotation.z=.35,y.add(Ft)}y.add(u(.03,2.2-.4,.03,o.brassGold,.15,0,2.4/2-.08));let Ut=u(.22,.34,.18,o.actuatorOrange,.1,.2,2.4/2+.14);y.add(Ut),y.add(b(.025,.025,.15,12,o.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),y.add(b(.03,.03,.12,12,o.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function Xt(y){y.add(u(4.4,.04,2.2,o.galvSteel,0,2.4/2,0),u(4.4,.04,2.2,o.galvSteel,0,-2.4/2,0),u(4.4,2.4,.04,o.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(lt=>{y.add(u(.08,.12,2.2+.2,o.aluFrame,lt,2.4/2+.04,0),u(.08,.12,2.2+.2,o.aluFrame,lt,-2.4/2-.04,0),u(.08,2.4,.12,o.aluFrame,lt,0,2.2/2+.04),u(.08,2.4,.12,o.aluFrame,lt,0,-2.2/2-.04))});let Tt=u(4.4-.1,2.4-.1,.03,o.panelCutaway,0,0,2.2/2,!1,!1);y.add(Tt),P.push(Tt);let Ut=u(.12,2.4-.2,2.2-.2,o.aluFrame,-1.4,0,0),pt=u(.1,2.4-.25,2.2-.25,o.filterCloth,-1.4,0,0);y.add(Ut,pt),y.add(u(.1,2.4-.2,2.2-.2,o.aluFrame,-.2,0,0));for(let lt=0;lt<4;lt++){let Ht=-.7+lt*.46,ot=new qe(new bi(.2,1.1,4),o.filterCloth);ot.rotateZ(-Math.PI/2),ot.position.set(.4,0,Ht),ot.scale.set(1,1.3,.75),y.add(ot)}let Ft=u(.25,2.4-.2,2.2-.2,o.aluFrame,1.4,0,0),at=u(.22,2.4-.26,2.2-.26,o.filterCloth,1.4,0,0),Pt=u(.26,2.4-.18,.04,o.coolingFin,1.4,0,2.2/2-.1);y.add(Ft,at,Pt),[-1,.6].forEach(lt=>{y.add(b(.09,.09,.04,16,o.aluFrame,lt,.6,2.2/2+.03,Math.PI/2))})}function Vt(y,X){if(X==="vrf-dis"){y.add(u(3.2,3.6,.04,o.panelSolid,0,0,-2/2),u(3.2,.04,2,o.panelSolid,0,3.6/2,0),u(3.2,.12,2,o.baseSkid,0,-3.6/2,0),u(.04,3.6-.2,2-.1,o.coolingFin,-3.2/2,.05,0),u(.04,3.6-.2,2-.1,o.coolingFin,3.2/2,.05,0));let Ut=u(3.2-.1,3.6-.2,.03,o.panelCutaway,0,.05,2/2,!1,!1);y.add(Ut),P.push(Ut);let pt=b(.82,.82,.22,28,o.fanHousing,0,3.6/2+.11,0,0,0,!0),Ft=b(.72,.72,.05,4,o.fanImpeller,0,3.6/2+.14,0);y.add(pt,Ft),w.push(()=>{Ft.rotation.y+=.16}),[-.6,.6].forEach(at=>{y.add(b(.26,.26,.9,16,o.motorCast,at,-3.6/2+.6,-.2))}),y.add(b(.22,.22,1.1,16,o.motorCast,-1.1,-3.6/2+.7,.2)),y.add(u(3.2-.2,2.6,.1,o.coolingFin,0,.2,-2/2+.08)),y.add(u(.22,.18,.14,o.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(X==="vrf-ic"){let j=new Xe;j.rotation.x=-Math.PI+.55,y.add(j);let dt=u(2.8,.8,2.8,o.galvSteel,0,.5,0),Tt=u(3.2,.08,3.2,o.panelSolid,0,.05,0);j.add(dt,Tt);let Ut=u(1.6,.02,1.6,o.filterCloth,0,.02,0);j.add(Ut),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([Ft,at,Pt])=>{let lt=u(1.7,.03,.16,o.doorHandle,Ft,.01,at);lt.rotation.y=Pt,j.add(lt)});let pt=b(.65,.65,.35,20,o.fanImpeller,0,.5,0);j.add(pt),w.push(()=>{pt.rotation.y+=.14}),j.add(u(.18,.22,.18,o.actuatorOrange,1.3,.5,.8)),j.add(b(.04,.04,.3,12,o.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let Ut=u(4.6,.04,2,o.stainless,0,.8,-.3),pt=u(4.6,1.6,.04,o.stainless,0,0,-2.6/2),Ft=u(.04,1.6,2.6,o.stainless,-4.6/2,0,0),at=u(.04,1.6,2.6,o.stainless,4.6/2,0,0),Pt=u(4.6,.9,.04,o.stainless,0,.25,2.6/2-.2);Pt.rotation.x=.5,y.add(Ut,pt,Ft,at,Pt),y.add(b(.55,.55,.3,24,o.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let lt=-4.6/2+.6;lt<=4.6/2-.6;lt+=.75){let Ht=u(.68,.04,1.3,o.aluFrame,lt,-.2,.1);Ht.rotation.x=-.4,y.add(Ht)}y.add(b(.1,.08,.18,16,o.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),y.add(b(.02,.02,4.6-.6,12,o.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(lt=>{let Ht=b(.035,.02,.09,10,o.brassGold,lt,-.12,.85);y.add(Ht)}),y.add(u(.14,.2,.08,o.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}e==="tks"?z(M):e==="thks"?G(M):e==="rooftop"?D(M):e==="galvaniz-kanal"?J(M):["thrv-dx","hrv"].includes(e)?W(M,e):["tdf","yangin-fani","jet-fan"].includes(e)?$(M,e):["spiral-kanal","paslanmaz-kanal"].includes(e)?nt(M,e):["menfez","difuzor","damper"].includes(e)?st(M,e):e==="filtre"?Xt(M):["vrf-dis","vrf-ic","davlumbaz"].includes(e)?Vt(M,e):z(M),M.updateMatrixWorld(!0);let Pe=new oi().setFromObject(M),jt=Pe.getSize(new O),Ae=Pe.getCenter(new O);M.position.sub(Ae);let Z=-jt.y/2;I.position.y=Z-.05,T.position.y=Z-.04;let et=Math.max(jt.x,jt.y,jt.z),Nt=l.fov*(Math.PI/180),Jt=Math.abs(et/2/Math.tan(Nt/2))*1.05;Jt=Math.max(Jt,3.8);let Rt=new O(Jt*.72,Jt*.38,Jt*.74),ae=new O(0,0,0);l.position.copy(Rt),l.lookAt(ae),h.target.copy(ae),h.update();let Ve=null;function ce(y,X,j=650){let dt=l.position.clone(),Tt=h.target.clone(),Ut=performance.now();Ve={update:pt=>{let Ft=pt-Ut,at=Math.min(1,Ft/j),Pt=at*at*(3-2*at);l.position.lerpVectors(dt,y,Pt),h.target.lerpVectors(Tt,X,Pt),h.update(),at>=1&&(Ve=null)}}}let xe=new Xe;s.add(xe);let Se=80,fe=[],Oe=new Float32Array(Se*3),Be=new Float32Array(Se*3),dn=e==="tks",He=e==="thks",Ge=e==="rooftop",N=e==="galvaniz-kanal",Je=dn||He,Ce=Math.max(2,jt.x/2+.4),A=Math.max(1,jt.y*.45),x=Math.max(1,jt.z*.45);for(let y=0;y<Se;y++){let X=Je?y<Se*.7:Ge?y<Se*.6:y<Se*.65;fe.push({isSupply:X,progress:Math.random(),speed:(Je?.006:N?.009:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(Je?.35:A),offsetZ:(Math.random()-.5)*(Je?.7:x)}),X?(Be[y*3]=.02,Be[y*3+1]=.65,Be[y*3+2]=.98):(Be[y*3]=.95,Be[y*3+1]=.45,Be[y*3+2]=.12)}let H=new un;H.setAttribute("position",new vn(Oe,3)),H.setAttribute("color",new vn(Be,3));let k=document.createElement("canvas");k.width=32,k.height=32;let Y=k.getContext("2d"),ht=Y.createRadialGradient(16,16,0,16,16,16);ht.addColorStop(0,"rgba(255, 255, 255, 1)"),ht.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),ht.addColorStop(1,"rgba(0, 0, 0, 0)"),Y.fillStyle=ht,Y.fillRect(0,0,32,32);let mt=new zs(k),K=new Hs({size:.15,map:mt,transparent:!0,opacity:.85,vertexColors:!0,blending:Fr,depthWrite:!1}),tt=new br(H,K);xe.add(tt),w.push(()=>{if(!ct.cfdEnabled){xe.visible=!1;return}xe.visible=!0;let y=H.attributes.position.array;for(let X=0;X<Se;X++){let j=fe[X];if(j.progress+=j.speed,j.progress>1&&(j.progress=0),Je)j.isSupply?(y[X*3]=-4.3+j.progress*8.6,y[X*3+1]=-.65+Math.sin(j.progress*Math.PI*4)*.08+j.offsetY,y[X*3+2]=j.offsetZ):(y[X*3]=1.2-j.progress*5.5,y[X*3+1]=.65+j.offsetY,y[X*3+2]=j.offsetZ);else if(Ge)if(j.isSupply){let dt=-.4+j.progress*2.8;if(y[X*3]=dt,j.progress>.8){let Tt=(j.progress-.8)/.2;y[X*3+1]=.05-Tt*1.35+j.offsetY*.4}else y[X*3+1]=.05+Math.sin(j.progress*Math.PI*3)*.06+j.offsetY*.6;y[X*3+2]=j.offsetZ*.7}else{let dt=X%2===0?-2.2:-1.2;y[X*3]=dt+Math.sin(X*1.5+j.progress*6.28)*.22,y[X*3+1]=-.2+j.progress*2.1,y[X*3+2]=Math.cos(X*1.5+j.progress*6.28)*.22}else if(N){let dt=-2.7+j.progress*5.1;y[X*3]=dt,y[X*3+1]=Math.sin(j.progress*Math.PI*2+X)*.06+j.offsetY*.5,y[X*3+2]=j.progress>.7&&X%3===0?-.3-(j.progress-.7)*1.5:j.offsetZ*.75}else y[X*3]=-Ce+j.progress*(Ce*2),y[X*3+1]=(j.isSupply?-.2:.2)+j.offsetY,y[X*3+2]=j.offsetZ}H.attributes.position.needsUpdate=!0});let gt=new Xe;s.add(gt);function zt(y){let X=document.createElement("canvas");X.width=64,X.height=64;let j=X.getContext("2d");j.fillStyle="#0284c7",j.beginPath(),j.arc(32,32,28,0,Math.PI*2),j.fill(),j.lineWidth=4,j.strokeStyle="#ffffff",j.stroke(),j.fillStyle="#ffffff",j.font="bold 26px sans-serif",j.textAlign="center",j.textBaseline="middle",j.fillText(y,32,33);let dt=new zs(X);return dt.minFilter=en,dt}let St=n&&n.hotspots&&n.hotspots.length>0?n.hotspots:[{num:"01",title:"G\xF6vde & Ta\u015F\u0131y\u0131c\u0131 Mimarisi",desc:"Eurovent ve TSE standartlar\u0131nda y\xFCksek mukavemetli karkas."},{num:"02",title:"Y\xFCksek Verimli \u0130\xE7 Aksam",desc:"Optimize edilmi\u015F aerodinamik komponentler ve d\xFC\u015F\xFCk enerji t\xFCketimi."},{num:"03",title:"Hava Da\u011F\u0131t\u0131m & Kontrol",desc:"Hassas debi kalibrasyonu ve s\u0131zd\u0131rmaz ba\u011Flant\u0131 elemanlar\u0131."}],_t=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],Bt=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],Yt=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],ee=[[1.35,.15,.75],[.4,.52,.75],[-.8,.48,.75],[-1.6,.48,.75]],L=[];St.forEach((y,X)=>{let j=new Xe,dt,Tt,Ut;if(dn&&_t[X])[dt,Tt,Ut]=_t[X];else if(He&&Bt[X])[dt,Tt,Ut]=Bt[X];else if(Ge&&Yt[X])[dt,Tt,Ut]=Yt[X];else if(N&&ee[X])[dt,Tt,Ut]=ee[X];else{let Pt=St.length,lt=jt.z>jt.x,Ht=lt?jt.z:jt.x,ot=-Ht/2+.4+X/Math.max(1,Pt-1)*(Ht-.8);dt=lt?jt.x/2+.4:ot,Tt=X%2===0?-.2:.4,Ut=lt?ot:jt.z/2+.4}j.position.set(dt,Tt,Ut);let pt=new qe(new ts(.012,.012,.25,8),new Di({color:165063}));pt.position.y=-.12;let Ft=new Os({map:zt(y.num||`0${X+1}`),depthTest:!1}),at=new Mr(Ft);at.scale.set(.42,.42,1),at.position.y=.05,at.userData={hotspot:y,pos:[dt,Tt,Ut]},j.add(pt,at),gt.add(j),j.userData={hotspot:y,pos:[dt,Tt,Ut]},L.push(at)});let xt=new Lr,Q=new Gt;function yt(y){let X=c.domElement.getBoundingClientRect();Q.x=(y.clientX-X.left)/X.width*2-1,Q.y=-((y.clientY-X.top)/X.height)*2+1,xt.setFromCamera(Q,l);let j=xt.intersectObjects(L,!0);if(j.length>0){let dt=j[0].object;for(;dt.parent&&!dt.userData.hotspot;)dt=dt.parent;if(dt&&dt.userData.hotspot){showHotspotCard(dt.userData.hotspot);let Tt=dt.userData.pos;if(Tt){let Ut=new O(Tt[0],Tt[1],Tt[2]),pt=new O(Tt[0]*.8+1.2,Tt[1]+.5,Tt[2]+2.8);ce(pt,Ut,700)}}}}c.domElement.addEventListener("click",yt);let ct={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};Yg(),qg(t,n,{onToggleRotate:()=>{ct.autoRotate=!ct.autoRotate,h.autoRotate=ct.autoRotate,Ti("btn-rotate",ct.autoRotate)},onToggleCfd:()=>{ct.cfdEnabled=!ct.cfdEnabled,Ti("btn-cfd",ct.cfdEnabled)},onToggleCutaway:()=>{ct.cutawayEnabled=!ct.cutawayEnabled,P.forEach(y=>{let X=y.userData.solidMat||o.panelSolid,j=y.userData.cutawayMat||o.panelCutaway;y.material=ct.cutawayEnabled?j:X}),Ti("btn-cutaway",ct.cutawayEnabled)},onToggleView:()=>{let X=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),j=X&&window.getComputedStyle(X).display!=="none";X&&(j?(X.style.display="none",t.style.display="block",ct.viewMode="3d",Ti("btn-view",!1),Ot()):(X.style.display="flex",t.style.display="none",ct.viewMode="2d",Ti("btn-view",!0)))},onResetCamera:()=>{ce(Rt,ae,650),window.closeHotspotCard()}}),Ti("btn-rotate",ct.autoRotate),Ti("btn-cfd",ct.cfdEnabled),Ti("btn-cutaway",ct.cutawayEnabled),Ti("btn-view",ct.viewMode==="2d");let it=null;function kt(){it=requestAnimationFrame(kt),Ve?Ve.update(performance.now()):h.update();for(let y=0;y<w.length;y++)w[y]();c.render(s,l)}kt();function Ot(){if(!t)return;let y=t.clientWidth,X=t.clientHeight||480;y>0&&X>0&&(l.aspect=y/X,l.updateProjectionMatrix(),c.setSize(y,X))}return window.addEventListener("resize",Ot),{destroy:()=>{cancelAnimationFrame(it),window.removeEventListener("resize",Ot),c.dispose()}}}function Yg(){if(document.getElementById("sky-3d-hud-styles"))return;let i=document.createElement("style");i.id="sky-3d-hud-styles",i.textContent=`
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
  `,document.head.appendChild(i)}function qg(i,t,e){let n=i.closest(".sky-vlog-hero")||i.parentElement||i,s=n.querySelector(".sky-3d-hud-container");s&&s.remove(),s=document.createElement("div"),s.className="sky-3d-hud-container",s.innerHTML=`
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
  `,n.appendChild(r),document.getElementById("btn-rotate").addEventListener("click",e.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",e.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",e.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",e.onToggleView),document.getElementById("btn-reset").addEventListener("click",e.onResetCamera)}function Ti(i,t){let e=document.getElementById(i);e&&(t?e.classList.add("active"):e.classList.remove("active"))}window.showHotspotCard=function(i){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=i.num||"01",document.getElementById("sky-card-title").textContent=i.title||"",document.getElementById("sky-card-desc").textContent=i.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let i=document.getElementById("sky-3d-hotspot-card");i&&(i.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Ru()):Ru();export{Ru as initSky3DProduct};
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
