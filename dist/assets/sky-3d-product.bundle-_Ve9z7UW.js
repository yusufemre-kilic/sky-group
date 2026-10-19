var Zs="186",Br={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,po=1,Mh=2,ca=1,Sh=2,ha=3,pr=0,ti=1,mt=2,Wi=0,da=1,is=2,fo=3,mo=4,yh=5,Ir=100,Eh=101,bh=102,Th=103,wh=104,Rh=200,Ah=201,Ch=202,Ph=203,El=204,bl=205,Lh=206,Dh=207,Ih=208,Uh=209,Nh=210,Oh=211,Fh=212,Bh=213,zh=214,rs=0,as=1,ns=2,pa=3,ss=4,os=5,ls=6,hs=7,Tl=0,Hh=1,Gh=2,Ci=0,wl=1,Rl=2,Al=3,Ks=4,Cl=5,Pl=6,Ll=7,Dl=300,fr=301,jr=302,Mn=303,Sn=304,mn=306,us=1e3,ki=1001,cs=1002,Bt=1003,Vh=1004,Sa=1005,zt=1006,yn=1007,ur=1008,ni=1009,Il=1010,Ul=1011,fa=1012,Js=1013,Pi=1014,Ri=1015,Li=1016,$s=1017,Qs=1018,ma=1020,Nl=35902,Ol=35899,Fl=1021,Bl=1022,vi=1023,ji=1026,cr=1027,zl=1028,eo=1029,mr=1030,to=1031,io=1033,Ja=33776,$a=33777,Qa=33778,en=33779,ds=35840,ps=35841,fs=35842,ms=35843,gs=36196,_s=37492,vs=37496,xs=37488,Ms=37489,sn=37490,Ss=37491,ys=37808,Es=37809,bs=37810,Ts=37811,ws=37812,Rs=37813,As=37814,Cs=37815,Ps=37816,Ls=37817,Ds=37818,Is=37819,Us=37820,Ns=37821,Os=36492,Fs=36494,Bs=36495,zs=36283,Hs=36284,on=36285,Gs=36286,kh=3200,Vs=0,Wh=1,tr="",hi="srgb",ln="srgb-linear",hn="linear",ht="srgb",En=7680,Xh=519,jh=512,qh=513,Yh=514,ro=515,Zh=516,Kh=517,ao=518,Jh=519,Hl=35044,go="300 es",Ai=2e3,ga=2001;function $h(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function un(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Qh(){let e=un("canvas");return e.style.display="block",e}var _o={};function cn(...e){let t="THREE."+e.shift();console.log(t,...e)}function Gl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ze(...e){e=Gl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function et(...e){e=Gl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function zr(...e){let t=e.join(" ");t in _o||(_o[t]=!0,ze(...e))}function eu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var tu={[rs]:as,[ns]:ls,[ss]:hs,[pa]:os,[as]:rs,[ls]:ns,[hs]:ss,[os]:pa},ar=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tn=Math.PI/180,ks=180/Math.PI;function ir(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wt[e&255]+Wt[e>>8&255]+Wt[e>>16&255]+Wt[e>>24&255]+"-"+Wt[t&255]+Wt[t>>8&255]+"-"+Wt[t>>16&15|64]+Wt[t>>24&255]+"-"+Wt[i&63|128]+Wt[i>>8&255]+"-"+Wt[i>>16&255]+Wt[i>>24&255]+Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]).toLowerCase()}function Ke(e,t,i){return Math.max(t,Math.min(i,e))}function iu(e,t){return(e%t+t)%t}function bn(e,t,i){return(1-i)*e+i*t}function wi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ru={DEG2RAD:tn},Gr,Ue=(Gr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ke(this.x,t.x,i.x),this.y=Ke(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ke(this.x,t,i),this.y=Ke(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ke(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ke(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gr.prototype.isVector2=!0,Gr),rr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],m=a[n+0],d=a[n+1],_=a[n+2],S=a[n+3];if(f!==S||l!==m||u!==d||c!==_){let E=l*m+u*d+c*_+f*S;E<0&&(m=-m,d=-d,_=-_,S=-S,E=-E);let v=1-s;if(E<.9995){let p=Math.acos(E),C=Math.sin(p);v=Math.sin(v*p)/C,s=Math.sin(s*p)/C,l=l*v+m*s,u=u*v+d*s,c=c*v+_*s,f=f*v+S*s}else{l=l*v+m*s,u=u*v+d*s,c=c*v+_*s,f=f*v+S*s;let p=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=p,u*=p,c*=p,f*=p}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=a[n],m=a[n+1],d=a[n+2],_=a[n+3];return e[t]=s*_+c*f+l*d-u*m,e[t+1]=l*_+c*m+u*f-s*d,e[t+2]=u*_+c*d+s*m-l*f,e[t+3]=c*_-s*f-l*m-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),f=s(a/2),m=l(i/2),d=l(r/2),_=l(a/2);switch(n){case"XYZ":this._x=m*c*f+u*d*_,this._y=u*d*f-m*c*_,this._z=u*c*_+m*d*f,this._w=u*c*f-m*d*_;break;case"YXZ":this._x=m*c*f+u*d*_,this._y=u*d*f-m*c*_,this._z=u*c*_-m*d*f,this._w=u*c*f+m*d*_;break;case"ZXY":this._x=m*c*f-u*d*_,this._y=u*d*f+m*c*_,this._z=u*c*_+m*d*f,this._w=u*c*f-m*d*_;break;case"ZYX":this._x=m*c*f-u*d*_,this._y=u*d*f+m*c*_,this._z=u*c*_-m*d*f,this._w=u*c*f+m*d*_;break;case"YZX":this._x=m*c*f+u*d*_,this._y=u*d*f+m*c*_,this._z=u*c*_-m*d*f,this._w=u*c*f-m*d*_;break;case"XZY":this._x=m*c*f-u*d*_,this._y=u*d*f-m*c*_,this._z=u*c*_+m*d*f,this._w=u*c*f+m*d*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],l=t[9],u=t[2],c=t[6],f=t[10],m=i+s+f;if(m>0){let d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(c-l)*d,this._y=(a-u)*d,this._z=(n-r)*d}else if(i>s&&i>f){let d=2*Math.sqrt(1+i-s-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+u)/d}else if(s>f){let d=2*Math.sqrt(1+s-i-f);this._w=(a-u)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(l+c)/d}else{let d=2*Math.sqrt(1+f-i-s);this._w=(n-r)/d,this._x=(a+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+n*s+r*u-a*l,this._y=r*c+n*l+a*s-i*u,this._z=a*c+n*u+i*l-r*s,this._w=n*c-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let l=1-t;if(s<.9995){let u=Math.acos(s),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+n*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vr,z=(Vr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,l=t.z,u=t.w,c=2*(s*a-l*r),f=2*(l*i-n*a),m=2*(n*r-s*i);return this.x=i+u*c+s*m-l*f,this.y=r+u*f+l*c-n*m,this.z=a+u*m+n*f-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ke(this.x,t.x,i.x),this.y=Ke(this.y,t.y,i.y),this.z=Ke(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ke(this.x,t,i),this.y=Ke(this.y,t,i),this.z=Ke(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ke(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,l=i.y,u=i.z;return this.x=a*u-n*l,this.y=n*s-r*u,this.z=r*l-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Tn.copy(this).projectOnVector(t),this.sub(Tn)}reflect(t){return this.sub(Tn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ke(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vr.prototype.isVector3=!0,Vr),Tn=new z,vo=new rr,kr,Ye=(kr=class{constructor(t,i,r,a,n,s,l,u,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,l,u,c)}set(t,i,r,a,n,s,l,u,c){let f=this.elements;return f[0]=t,f[1]=a,f[2]=l,f[3]=i,f[4]=n,f[5]=u,f[6]=r,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],l=r[3],u=r[6],c=r[1],f=r[4],m=r[7],d=r[2],_=r[5],S=r[8],E=a[0],v=a[3],p=a[6],C=a[1],H=a[4],o=a[7],T=a[2],A=a[5],R=a[8];return n[0]=s*E+l*C+u*T,n[3]=s*v+l*H+u*A,n[6]=s*p+l*o+u*R,n[1]=c*E+f*C+m*T,n[4]=c*v+f*H+m*A,n[7]=c*p+f*o+m*R,n[2]=d*E+_*C+S*T,n[5]=d*v+_*H+S*A,n[8]=d*p+_*o+S*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8];return i*s*f-i*l*c-r*n*f+r*l*u+a*n*c-a*s*u}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8],m=f*s-l*c,d=l*u-f*n,_=c*n-s*u,S=i*m+r*d+a*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=m*E,t[1]=(a*c-f*r)*E,t[2]=(l*r-a*s)*E,t[3]=d*E,t[4]=(f*i-a*u)*E,t[5]=(a*n-l*i)*E,t[6]=_*E,t[7]=(r*u-c*i)*E,t[8]=(s*i-r*n)*E,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,l){let u=Math.cos(n),c=Math.sin(n);return this.set(r*u,r*c,-r*(u*s+c*l)+s+t,-a*c,a*u,-a*(-c*s+u*l)+l+i,0,0,1),this}scale(t,i){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wn.makeScale(t,i)),this}rotate(t){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wn.makeRotation(-t)),this}translate(t,i){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kr.prototype.isMatrix3=!0,kr),wn=new Ye,xo=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mo=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function au(){let e={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===ht&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ht&&(a.r=Hr(a.r),a.g=Hr(a.g),a.b=Hr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===tr?hn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ln]:{primaries:t,whitePoint:r,transfer:hn,toXYZ:xo,fromXYZ:Mo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:ht,toXYZ:xo,fromXYZ:Mo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),e}var Qe=au();function Xi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Hr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var gr,nu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=un("canvas")),gr.width=e.width,gr.height=e.height;let r=gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=un("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Xi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},su=0,no=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Rn(r[n].image)):a.push(Rn(r[n]))}else a=Rn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Rn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?nu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var ou=0,An=new z,di=class rn extends ar{constructor(t=rn.DEFAULT_IMAGE,i=rn.DEFAULT_MAPPING,r=ki,a=ki,n=zt,s=ur,l=vi,u=ni,c=rn.DEFAULT_ANISOTROPY,f=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ir(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(An).x}get height(){return this.source.getSize(An).y}get depth(){return this.source.getSize(An).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){ze(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){ze(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case cs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case cs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=Dl;di.DEFAULT_ANISOTROPY=1;var Wr,Et=(Wr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,l=s[0],u=s[4],c=s[8],f=s[1],m=s[5],d=s[9],_=s[2],S=s[6],E=s[10];if(Math.abs(u-f)<.01&&Math.abs(c-_)<.01&&Math.abs(d-S)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+_)<.1&&Math.abs(d+S)<.1&&Math.abs(l+m+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(l+1)/2,C=(m+1)/2,H=(E+1)/2,o=(u+f)/4,T=(c+_)/4,A=(d+S)/4;return p>C&&p>H?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=o/r,n=T/r):C>H?C<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(C),r=o/a,n=A/a):H<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(H),r=T/n,a=A/n),this.set(r,a,n,i),this}let v=Math.sqrt((S-d)*(S-d)+(c-_)*(c-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(S-d)/v,this.y=(c-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+m+E-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ke(this.x,t.x,i.x),this.y=Ke(this.y,t.y,i.y),this.z=Ke(this.z,t.z,i.z),this.w=Ke(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ke(this.x,t,i),this.y=Ke(this.y,t,i),this.z=Ke(this.z,t,i),this.w=Ke(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ke(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wr.prototype.isVector4=!0,Wr),lu=class extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new di(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new no(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends lu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vl=class extends di{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hu=class extends di{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},dr,Mt=(dr=class{constructor(t,i,r,a,n,s,l,u,c,f,m,d,_,S,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,l,u,c,f,m,d,_,S,E,v)}set(t,i,r,a,n,s,l,u,c,f,m,d,_,S,E,v){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=l,p[13]=u,p[2]=c,p[6]=f,p[10]=m,p[14]=d,p[3]=_,p[7]=S,p[11]=E,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/_r.setFromMatrixColumn(t,0).length(),n=1/_r.setFromMatrixColumn(t,1).length(),s=1/_r.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),l=Math.sin(r),u=Math.cos(a),c=Math.sin(a),f=Math.cos(n),m=Math.sin(n);if(t.order==="XYZ"){let d=s*f,_=s*m,S=l*f,E=l*m;i[0]=u*f,i[4]=-u*m,i[8]=c,i[1]=_+S*c,i[5]=d-E*c,i[9]=-l*u,i[2]=E-d*c,i[6]=S+_*c,i[10]=s*u}else if(t.order==="YXZ"){let d=u*f,_=u*m,S=c*f,E=c*m;i[0]=d+E*l,i[4]=S*l-_,i[8]=s*c,i[1]=s*m,i[5]=s*f,i[9]=-l,i[2]=_*l-S,i[6]=E+d*l,i[10]=s*u}else if(t.order==="ZXY"){let d=u*f,_=u*m,S=c*f,E=c*m;i[0]=d-E*l,i[4]=-s*m,i[8]=S+_*l,i[1]=_+S*l,i[5]=s*f,i[9]=E-d*l,i[2]=-s*c,i[6]=l,i[10]=s*u}else if(t.order==="ZYX"){let d=s*f,_=s*m,S=l*f,E=l*m;i[0]=u*f,i[4]=S*c-_,i[8]=d*c+E,i[1]=u*m,i[5]=E*c+d,i[9]=_*c-S,i[2]=-c,i[6]=l*u,i[10]=s*u}else if(t.order==="YZX"){let d=s*u,_=s*c,S=l*u,E=l*c;i[0]=u*f,i[4]=E-d*m,i[8]=S*m+_,i[1]=m,i[5]=s*f,i[9]=-l*f,i[2]=-c*f,i[6]=_*m+S,i[10]=d-E*m}else if(t.order==="XZY"){let d=s*u,_=s*c,S=l*u,E=l*c;i[0]=u*f,i[4]=-m,i[8]=c*f,i[1]=d*m+E,i[5]=s*f,i[9]=_*m-S,i[2]=S*m-_,i[6]=l*f,i[10]=E*m+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uu,t,cu)}lookAt(t,i,r){let a=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ki.crossVectors(r,ri),Ki.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ki.crossVectors(r,ri)),Ki.normalize(),ya.crossVectors(ri,Ki),a[0]=Ki.x,a[4]=ya.x,a[8]=ri.x,a[1]=Ki.y,a[5]=ya.y,a[9]=ri.y,a[2]=Ki.z,a[6]=ya.z,a[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],l=r[4],u=r[8],c=r[12],f=r[1],m=r[5],d=r[9],_=r[13],S=r[2],E=r[6],v=r[10],p=r[14],C=r[3],H=r[7],o=r[11],T=r[15],A=a[0],R=a[4],h=a[8],g=a[12],X=a[1],U=a[5],F=a[9],ee=a[13],N=a[2],W=a[6],re=a[10],q=a[14],fe=a[3],J=a[7],$=a[11],se=a[15];return n[0]=s*A+l*X+u*N+c*fe,n[4]=s*R+l*U+u*W+c*J,n[8]=s*h+l*F+u*re+c*$,n[12]=s*g+l*ee+u*q+c*se,n[1]=f*A+m*X+d*N+_*fe,n[5]=f*R+m*U+d*W+_*J,n[9]=f*h+m*F+d*re+_*$,n[13]=f*g+m*ee+d*q+_*se,n[2]=S*A+E*X+v*N+p*fe,n[6]=S*R+E*U+v*W+p*J,n[10]=S*h+E*F+v*re+p*$,n[14]=S*g+E*ee+v*q+p*se,n[3]=C*A+H*X+o*N+T*fe,n[7]=C*R+H*U+o*W+T*J,n[11]=C*h+H*F+o*re+T*$,n[15]=C*g+H*ee+o*q+T*se,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],l=t[5],u=t[9],c=t[13],f=t[2],m=t[6],d=t[10],_=t[14],S=t[3],E=t[7],v=t[11],p=t[15],C=u*_-c*d,H=l*_-c*m,o=l*d-u*m,T=s*_-c*f,A=s*d-u*f,R=s*m-l*f;return i*(E*C-v*H+p*o)-r*(S*C-v*T+p*A)+a*(S*H-E*T+p*R)-n*(S*o-E*A+v*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],l=t[9],u=t[2],c=t[6],f=t[10];return i*(s*f-l*c)-r*(n*f-l*u)+a*(n*c-s*u)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8],m=t[9],d=t[10],_=t[11],S=t[12],E=t[13],v=t[14],p=t[15],C=i*l-r*s,H=i*u-a*s,o=i*c-n*s,T=r*u-a*l,A=r*c-n*l,R=a*c-n*u,h=f*E-m*S,g=f*v-d*S,X=f*p-_*S,U=m*v-d*E,F=m*p-_*E,ee=d*p-_*v,N=C*ee-H*F+o*U+T*X-A*g+R*h;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return t[0]=(l*ee-u*F+c*U)*W,t[1]=(a*F-r*ee-n*U)*W,t[2]=(E*R-v*A+p*T)*W,t[3]=(d*A-m*R-_*T)*W,t[4]=(u*X-s*ee-c*g)*W,t[5]=(i*ee-a*X+n*g)*W,t[6]=(v*o-S*R-p*H)*W,t[7]=(f*R-d*o+_*H)*W,t[8]=(s*F-l*X+c*h)*W,t[9]=(r*X-i*F-n*h)*W,t[10]=(S*A-E*o+p*C)*W,t[11]=(m*o-f*A-_*C)*W,t[12]=(l*g-s*U-u*h)*W,t[13]=(i*U-r*g+a*h)*W,t[14]=(E*H-S*T-v*C)*W,t[15]=(f*T-m*H+d*C)*W,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,l=t.y,u=t.z,c=n*s,f=n*l;return this.set(c*s+r,c*l-a*u,c*u+a*l,0,c*l+a*u,f*l+r,f*u-a*s,0,c*u-a*l,f*u+a*s,n*u*u+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,l=i._z,u=i._w,c=n+n,f=s+s,m=l+l,d=n*c,_=n*f,S=n*m,E=s*f,v=s*m,p=l*m,C=u*c,H=u*f,o=u*m,T=r.x,A=r.y,R=r.z;return a[0]=(1-(E+p))*T,a[1]=(_+o)*T,a[2]=(S-H)*T,a[3]=0,a[4]=(_-o)*A,a[5]=(1-(d+p))*A,a[6]=(v+C)*A,a[7]=0,a[8]=(S+H)*R,a[9]=(v-C)*R,a[10]=(1-(d+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=_r.set(a[0],a[1],a[2]).length(),l=_r.set(a[4],a[5],a[6]).length(),u=_r.set(a[8],a[9],a[10]).length();n<0&&(s=-s),mi.copy(this);let c=1/s,f=1/l,m=1/u;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=f,mi.elements[5]*=f,mi.elements[6]*=f,mi.elements[8]*=m,mi.elements[9]*=m,mi.elements[10]*=m,i.setFromRotationMatrix(mi),r.x=s,r.y=l,r.z=u,this}makePerspective(t,i,r,a,n,s,l=Ai,u=!1){let c=this.elements,f=2*n/(i-t),m=2*n/(r-a),d=(i+t)/(i-t),_=(r+a)/(r-a),S,E;if(u)S=n/(s-n),E=s*n/(s-n);else if(l===Ai)S=-(s+n)/(s-n),E=-2*s*n/(s-n);else if(l===ga)S=-s/(s-n),E=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,l=Ai,u=!1){let c=this.elements,f=2/(i-t),m=2/(r-a),d=-(i+t)/(i-t),_=-(r+a)/(r-a),S,E;if(u)S=1/(s-n),E=s/(s-n);else if(l===Ai)S=-2/(s-n),E=-(s+n)/(s-n);else if(l===ga)S=-1/(s-n),E=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=S,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},dr.prototype.isMatrix4=!0,dr),_r=new z,mi=new Mt,uu=new z(0,0,0),cu=new z(1,1,1),Ki=new z,ya=new z,ri=new z,So=new Mt,yo=new rr,qr=class kl{constructor(t=0,i=0,r=0,a=kl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],l=a[8],u=a[1],c=a[5],f=a[9],m=a[2],d=a[6],_=a[10];switch(i){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-m,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,n));break;case"ZYX":this._y=Math.asin(-Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(u,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,n)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,n)):(this._x=Math.atan2(-f,_),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return So.makeRotationFromQuaternion(t),this.setFromRotationMatrix(So,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return yo.setFromEuler(this),this.setFromQuaternion(yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qr.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},du=0,Eo=new z,vr=new rr,Oi=new Mt,Ea=new z,$r=new z,pu=new z,fu=new rr,bo=new z(1,0,0),To=new z(0,1,0),wo=new z(0,0,1),Ro={type:"added"},mu={type:"removed"},xr={type:"childadded",child:null},Cn={type:"childremoved",child:null},Kt=class an extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();let t=new z,i=new qr,r=new rr,a=new z(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(bo,t)}rotateY(t){return this.rotateOnAxis(To,t)}rotateZ(t){return this.rotateOnAxis(wo,t)}translateOnAxis(t,i){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bo,t)}translateY(t){return this.translateOnAxis(To,t)}translateZ(t){return this.translateOnAxis(wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ea.copy(t):Ea.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt($r,Ea,this.up):Oi.lookAt(Ea,$r,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),vr.setFromRotationMatrix(Oi),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ro),xr.child=t,this.dispatchEvent(xr),xr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mu),Cn.child=t,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ro),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>({...l})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){let m=u[c];n(t.shapes,m)}else n(t.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,c=this.material.length;u<c;u++)l.push(n(t.materials,this.material[u]));a.material=l}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];a.animations.push(n(t.animations,u))}}if(i){let l=s(t.geometries),u=s(t.materials),c=s(t.textures),f=s(t.images),m=s(t.shapes),d=s(t.skeletons),_=s(t.animations),S=s(t.nodes);l.length>0&&(r.geometries=l),u.length>0&&(r.materials=u),c.length>0&&(r.textures=c),f.length>0&&(r.images=f),m.length>0&&(r.shapes=m),d.length>0&&(r.skeletons=d),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=a,r;function s(l){let u=[];for(let c in l){let f=l[c];delete f.metadata,u.push(f)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new z(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gu={type:"move"},Pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){n=!0;for(let S of e.hand.values()){let E=t.getJointPose(S,i),v=this._getHandJoint(u,S);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}let c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],m=c.position.distanceTo(f.position),d=.02,_=.005;u.inputState.pinching&&m>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Ln(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=iu(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ln(n,a,e+1/3),this.g=Ln(n,a,e),this.b=Ln(n,a,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=hi){function i(a){a!==void 0&&parseFloat(a)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){let i=Wl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Qe.workingToColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,a=Xt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),l,u,c=(s+n)/2;if(s===n)l=0,u=0;else{let f=n-s;switch(u=c<=.5?f/(n+s):f/(2-n-s),n){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=hi){Qe.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ba);let i=bn(Ji.h,ba.h,t),r=bn(Ji.s,ba.s,t),a=bn(Ji.l,ba.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new qe;qe.NAMES=Wl;var _u=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gi=new z,Fi=new z,Dn=new z,Bi=new z,Mr=new z,Sr=new z,Ao=new z,In=new z,Un=new z,Nn=new z,On=new Et,Fn=new Et,Bn=new Et,Ur=class Nr{constructor(t=new z,i=new z,r=new z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),gi.subVectors(t,i),a.cross(gi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){gi.subVectors(a,i),Fi.subVectors(r,i),Dn.subVectors(t,i);let s=gi.dot(gi),l=gi.dot(Fi),u=gi.dot(Dn),c=Fi.dot(Fi),f=Fi.dot(Dn),m=s*c-l*l;if(m===0)return n.set(0,0,0),null;let d=1/m,_=(c*u-l*f)*d,S=(s*f-l*u)*d;return n.set(1-_-S,S,_)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,i,r,a,n,s,l,u){return this.getBarycoord(t,i,r,a,Bi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(n,Bi.x),u.addScaledVector(s,Bi.y),u.addScaledVector(l,Bi.z),u)}static getInterpolatedAttribute(t,i,r,a,n,s){return On.setScalar(0),Fn.setScalar(0),Bn.setScalar(0),On.fromBufferAttribute(t,i),Fn.fromBufferAttribute(t,r),Bn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(On,n.x),s.addScaledVector(Fn,n.y),s.addScaledVector(Bn,n.z),s}static isFrontFacing(t,i,r,a){return gi.subVectors(r,i),Fi.subVectors(t,i),gi.cross(Fi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),gi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Nr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Nr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Nr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,l;Mr.subVectors(a,r),Sr.subVectors(n,r),In.subVectors(t,r);let u=Mr.dot(In),c=Sr.dot(In);if(u<=0&&c<=0)return i.copy(r);Un.subVectors(t,a);let f=Mr.dot(Un),m=Sr.dot(Un);if(f>=0&&m<=f)return i.copy(a);let d=u*m-f*c;if(d<=0&&u>=0&&f<=0)return s=u/(u-f),i.copy(r).addScaledVector(Mr,s);Nn.subVectors(t,n);let _=Mr.dot(Nn),S=Sr.dot(Nn);if(S>=0&&_<=S)return i.copy(n);let E=_*c-u*S;if(E<=0&&c>=0&&S<=0)return l=c/(c-S),i.copy(r).addScaledVector(Sr,l);let v=f*S-_*m;if(v<=0&&m-f>=0&&_-S>=0)return Ao.subVectors(n,a),l=(m-f)/(m-f+(_-S)),i.copy(a).addScaledVector(Ao,l);let p=1/(v+E+d);return s=E*p,l=d*p,i.copy(r).addScaledVector(Mr,s).addScaledVector(Sr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,_i):_i.fromBufferAttribute(a,n),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),wa.subVectors(this.max,Qr),yr.subVectors(e.a,Qr),Er.subVectors(e.b,Qr),br.subVectors(e.c,Qr),$i.subVectors(Er,yr),Qi.subVectors(br,Er),nr.subVectors(yr,br);let t=[0,-$i.z,$i.y,0,-Qi.z,Qi.y,0,-nr.z,nr.y,$i.z,0,-$i.x,Qi.z,0,-Qi.x,nr.z,0,-nr.x,-$i.y,$i.x,0,-Qi.y,Qi.x,0,-nr.y,nr.x,0];return!zn(t,yr,Er,br,wa)||(t=[1,0,0,0,1,0,0,0,1],!zn(t,yr,Er,br,wa))?!1:(Ra.crossVectors($i,Qi),t=[Ra.x,Ra.y,Ra.z],zn(t,yr,Er,br,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new z,new z,new z,new z,new z,new z,new z,new z],_i=new z,Ta=new Zr,yr=new z,Er=new z,br=new z,$i=new z,Qi=new z,nr=new z,Qr=new z,wa=new z,Ra=new z,sr=new z;function zn(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){sr.fromArray(e,n);let l=a.x*Math.abs(sr.x)+a.y*Math.abs(sr.y)+a.z*Math.abs(sr.z),u=t.dot(sr),c=i.dot(sr),f=r.dot(sr);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>l)return!1}return!0}var bt=new z,Aa=new Ue,vu=0,ci=class extends ar{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hl,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),a=pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=class extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}},jl=class extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Dt=class extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}},xu=new Zr,ea=new z,Hn=new z,va=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Hn)),this.expandByPoint(ea.copy(e.center).sub(Hn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mu=0,li=new Mt,Gn=new Kt,Tr=new z,ai=new Zr,ta=new Zr,Ft=new z,ii=class ql extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?jl:Xl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ye().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return Gn.lookAt(t),Gn.updateMatrix(),this.applyMatrix4(Gn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Dt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];ai.setFromBufferAttribute(n),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let l=i[n];ta.setFromBufferAttribute(l),this.morphTargetsRelative?(Ft.addVectors(ai.min,ta.min),ai.expandByPoint(Ft),Ft.addVectors(ai.max,ta.max),ai.expandByPoint(Ft)):(ai.expandByPoint(ta.min),ai.expandByPoint(ta.max))}ai.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Ft.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Ft));if(i)for(let n=0,s=i.length;n<s;n++){let l=i[n],u=this.morphTargetsRelative;for(let c=0,f=l.count;c<f;c++)Ft.fromBufferAttribute(l,c),u&&(Tr.fromBufferAttribute(t,c),Ft.add(Tr)),a=Math.max(a,r.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ci(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let l=[],u=[];for(let h=0;h<r.count;h++)l[h]=new z,u[h]=new z;let c=new z,f=new z,m=new z,d=new Ue,_=new Ue,S=new Ue,E=new z,v=new z;function p(h,g,X){c.fromBufferAttribute(r,h),f.fromBufferAttribute(r,g),m.fromBufferAttribute(r,X),d.fromBufferAttribute(n,h),_.fromBufferAttribute(n,g),S.fromBufferAttribute(n,X),f.sub(c),m.sub(c),_.sub(d),S.sub(d);let U=1/(_.x*S.y-S.x*_.y);isFinite(U)&&(E.copy(f).multiplyScalar(S.y).addScaledVector(m,-_.y).multiplyScalar(U),v.copy(m).multiplyScalar(_.x).addScaledVector(f,-S.x).multiplyScalar(U),l[h].add(E),l[g].add(E),l[X].add(E),u[h].add(v),u[g].add(v),u[X].add(v))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let h=0,g=C.length;h<g;++h){let X=C[h],U=X.start,F=X.count;for(let ee=U,N=U+F;ee<N;ee+=3)p(t.getX(ee+0),t.getX(ee+1),t.getX(ee+2))}let H=new z,o=new z,T=new z,A=new z;function R(h){T.fromBufferAttribute(a,h),A.copy(T);let g=l[h];H.copy(g),H.sub(T.multiplyScalar(T.dot(g))).normalize(),o.crossVectors(A,g);let X=o.dot(u[h])<0?-1:1;s.setXYZW(h,H.x,H.y,H.z,X)}for(let h=0,g=C.length;h<g;++h){let X=C[h],U=X.start,F=X.count;for(let ee=U,N=U+F;ee<N;ee+=3)R(t.getX(ee+0)),R(t.getX(ee+1)),R(t.getX(ee+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,_=r.count;d<_;d++)r.setXYZ(d,0,0,0);let a=new z,n=new z,s=new z,l=new z,u=new z,c=new z,f=new z,m=new z;if(t)for(let d=0,_=t.count;d<_;d+=3){let S=t.getX(d+0),E=t.getX(d+1),v=t.getX(d+2);a.fromBufferAttribute(i,S),n.fromBufferAttribute(i,E),s.fromBufferAttribute(i,v),f.subVectors(s,n),m.subVectors(a,n),f.cross(m),l.fromBufferAttribute(r,S),u.fromBufferAttribute(r,E),c.fromBufferAttribute(r,v),l.add(f),u.add(f),c.add(f),r.setXYZ(S,l.x,l.y,l.z),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,_=i.count;d<_;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),f.subVectors(s,n),m.subVectors(a,n),f.cross(m),r.setXYZ(d+0,f.x,f.y,f.z),r.setXYZ(d+1,f.x,f.y,f.z),r.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Ft.fromBufferAttribute(t,i),Ft.normalize(),t.setXYZ(i,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function t(l,u){let c=l.array,f=l.itemSize,m=l.normalized,d=new c.constructor(u.length*f),_=0,S=0;for(let E=0,v=u.length;E<v;E++){l.isInterleavedBufferAttribute?_=u[E]*l.data.stride+l.offset:_=u[E]*f;for(let p=0;p<f;p++)d[S++]=c[_++]}return new ci(d,f,m)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new ql,r=this.index.array,a=this.attributes;for(let l in a){let u=a[l],c=t(u,r);i.setAttribute(l,c)}let n=this.morphAttributes;for(let l in n){let u=[],c=n[l];for(let f=0,m=c.length;f<m;f++){let d=c[f],_=t(d,r);u.push(_)}i.morphAttributes[l]=u}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let l=0,u=s.length;l<u;l++){let c=s[l];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let u in r){let c=r[u];t.data.attributes[u]=c.toJSON(t.data)}let a={},n=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],f=[];for(let m=0,d=c.length;m<d;m++){let _=c[m];f.push(_.toJSON(t.data))}f.length>0&&(a[u]=f,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let f=a[c];this.setAttribute(c,f.clone(i))}let n=t.morphAttributes;for(let c in n){let f=[],m=n[c];for(let d=0,_=m.length;d<_;d++)f.push(m[d].clone(i));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,f=s.length;c<f;c++){let m=s[c];this.addGroup(m.start,m.count,m.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Yt=new z,Co=class Yl{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Yt.fromBufferAttribute(this,i),Yt.applyMatrix4(t),this.setXYZ(i,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Yt.fromBufferAttribute(this,i),Yt.applyNormalMatrix(t),this.setXYZ(i,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Yt.fromBufferAttribute(this,i),Yt.transformDirection(t),this.setXYZ(i,Yt.x,Yt.y,Yt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=pt(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=pt(i,this.array),r=pt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=pt(i,this.array),r=pt(r,this.array),a=pt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=pt(i,this.array),r=pt(r,this.array),a=pt(a,this.array),n=pt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){cn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new ci(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vn=new z,yu=new z,Eu=new Ye,Vi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Vn.subVectors(i,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Vn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Eu.getNormalMatrix(e),r=this.coplanarPoint(Vn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bu=0,qi=class extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=da,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=bl,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=En,this.stencilZFail=En,this.stencilZPass=En,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let l=a[s];delete l.metadata,n.push(l)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Vi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zl=class extends qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wr,ia=new z,Rr=new z,Ar=new z,Cr=new Ue,ra=new Ue,Kl=new Mt,Ca=new z,aa=new z,Pa=new z,Po=new Ue,kn=new Ue,Lo=new Ue,Tu=class extends Kt{constructor(e=new Zl){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new ii;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Su(t,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new Co(i,3,0,!1)),wr.setAttribute("uv",new Co(i,2,3,!1))}this.geometry=wr,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),Kl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Ar.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;La(Ca.set(-.5,-.5,0),Ar,n,Rr,r,a),La(aa.set(.5,-.5,0),Ar,n,Rr,r,a),La(Pa.set(.5,.5,0),Ar,n,Rr,r,a),Po.set(0,0),kn.set(1,0),Lo.set(1,1);let s=e.ray.intersectTriangle(Ca,aa,Pa,!1,ia);if(s===null&&(La(aa.set(-.5,.5,0),Ar,n,Rr,r,a),kn.set(0,1),s=e.ray.intersectTriangle(Ca,Pa,aa,!1,ia),s===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Ur.getInterpolation(ia,Ca,aa,Pa,Po,kn,Lo,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function La(e,t,i,r,a,n){Cr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(ra.x=n*Cr.x-a*Cr.y,ra.y=a*Cr.x+n*Cr.y):ra.copy(Cr),e.copy(t),e.x+=ra.x,e.y+=ra.y,e.applyMatrix4(Kl)}var Hi=new z,Wn=new z,Da=new z,Ia=new z,xa=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wn.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(Wn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Da),s=Ia.dot(this.direction),l=-Ia.dot(Da),u=Ia.lengthSq(),c=Math.abs(1-n*n),f,m,d,_;if(c>0)if(f=n*l-s,m=n*s-l,_=a*c,f>=0)if(m>=-_)if(m<=_){let S=1/c;f*=S,m*=S,d=f*(f+n*m+2*s)+m*(n*f+m+2*l)+u}else m=a,f=Math.max(0,-(n*m+s)),d=-f*f+m*(m+2*l)+u;else m=-a,f=Math.max(0,-(n*m+s)),d=-f*f+m*(m+2*l)+u;else m<=-_?(f=Math.max(0,-(-n*a+s)),m=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+m*(m+2*l)+u):m<=_?(f=0,m=Math.min(Math.max(-a,-l),a),d=m*(m+2*l)+u):(f=Math.max(0,-(n*a+s)),m=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+m*(m+2*l)+u);else m=n>0?-a:a,f=Math.max(0,-(n*m+s)),d=-f*f+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wn).addScaledVector(Da,m),d}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,l=i+n;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,l,u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),c>=0?(a=(e.min.y-m.y)*c,n=(e.max.y-m.y)*c):(a=(e.max.y-m.y)*c,n=(e.min.y-m.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),f>=0?(s=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(s=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,l=s.x,u=s.y,c=s.z,f=e.x-n.x,m=e.y-n.y,d=e.z-n.z,_=t.x-n.x,S=t.y-n.y,E=t.z-n.z,v=i.x-n.x,p=i.y-n.y,C=i.z-n.z,H=Math.abs(l),o=Math.abs(u),T=Math.abs(c),A,R,h,g,X,U,F,ee,N,W,re,q;if(H>=o&&H>=T?(h=l,U=f,N=_,q=v,l>=0?(A=u,R=c,g=m,X=d,F=S,ee=E,W=p,re=C):(A=c,R=u,g=d,X=m,F=E,ee=S,W=C,re=p)):o>=T?(h=u,U=m,N=S,q=p,u>=0?(A=c,R=l,g=d,X=f,F=E,ee=_,W=C,re=v):(A=l,R=c,g=f,X=d,F=_,ee=E,W=v,re=C)):(h=c,U=d,N=E,q=C,c>=0?(A=l,R=u,g=f,X=m,F=_,ee=S,W=v,re=p):(A=u,R=l,g=m,X=f,F=S,ee=_,W=p,re=v)),h===0)return null;let fe=A/h,J=R/h,$=1/h,se=g-fe*U,Xe=X-J*U,Ce=F-fe*N,ft=ee-J*N,He=W-fe*q,Q=re-J*q,le=He*ft-Q*Ce,de=se*Q-Xe*He,Le=Ce*Xe-ft*se;if(r){if(le<0||de<0||Le<0)return null}else if((le<0||de<0||Le<0)&&(le>0||de>0||Le>0))return null;let Ie=le+de+Le;if(Ie===0)return null;let Me=$*(le*U+de*N+Le*q);return(Ie>0?Me<0:Me>0)?null:this.at(Me/Ie,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Do=new Mt,or=new xa,Ua=new va,Io=new z,Na=new z,Oa=new z,Fa=new z,Xn=new z,Ba=new z,Uo=new z,za=new z,Tt=class extends Kt{constructor(e=new ii,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ba.set(0,0,0);for(let l=0,u=a.length;l<u;l++){let c=s[l],f=a[l];c!==0&&(Xn.fromBufferAttribute(f,e),n?Ba.addScaledVector(Xn,c):Ba.addScaledVector(Xn.sub(t),c))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(Ua.containsPoint(or.origin)===!1&&(or.intersectSphere(Ua,Io)===null||or.origin.distanceToSquared(Io)>(e.far-e.near)**2))&&(Do.copy(a).invert(),or.copy(e.ray).applyMatrix4(Do),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,f=a.attributes.normal,m=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let _=0,S=m.length;_<S;_++){let E=m[_],v=n[E.materialIndex],p=Math.max(E.start,d.start),C=Math.min(s.count,Math.min(E.start+E.count,d.start+d.count));for(let H=p,o=C;H<o;H+=3){let T=s.getX(H),A=s.getX(H+1),R=s.getX(H+2);r=Ha(this,v,e,i,u,c,f,T,A,R),r&&(r.faceIndex=Math.floor(H/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{let _=Math.max(0,d.start),S=Math.min(s.count,d.start+d.count);for(let E=_,v=S;E<v;E+=3){let p=s.getX(E),C=s.getX(E+1),H=s.getX(E+2);r=Ha(this,n,e,i,u,c,f,p,C,H),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let _=0,S=m.length;_<S;_++){let E=m[_],v=n[E.materialIndex],p=Math.max(E.start,d.start),C=Math.min(l.count,Math.min(E.start+E.count,d.start+d.count));for(let H=p,o=C;H<o;H+=3){let T=H,A=H+1,R=H+2;r=Ha(this,v,e,i,u,c,f,T,A,R),r&&(r.faceIndex=Math.floor(H/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{let _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let E=_,v=S;E<v;E+=3){let p=E,C=E+1,H=E+2;r=Ha(this,n,e,i,u,c,f,p,C,H),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}};function wu(e,t,i,r,a,n,s,l){let u;if(t.side===ti?u=r.intersectTriangle(s,n,a,!0,l):u=r.intersectTriangle(a,n,s,t.side===pr,l),u===null)return null;za.copy(l),za.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(za);return c<i.near||c>i.far?null:{distance:c,point:za.clone(),object:e}}function Ha(e,t,i,r,a,n,s,l,u,c){e.getVertexPosition(l,Na),e.getVertexPosition(u,Oa),e.getVertexPosition(c,Fa);let f=wu(e,t,i,r,Na,Oa,Fa,Uo);if(f){let m=new z;Ur.getBarycoord(Uo,Na,Oa,Fa,m),a&&(f.uv=Ur.getInterpolatedAttribute(a,l,u,c,m,new Ue)),n&&(f.uv1=Ur.getInterpolatedAttribute(n,l,u,c,m,new Ue)),s&&(f.normal=Ur.getInterpolatedAttribute(s,l,u,c,m,new z),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));let d={a:l,b:u,c,normal:new z,materialIndex:0};Ur.getNormal(Na,Oa,Fa,d.normal),f.face=d,f.barycoord=m}return f}var Ru=class extends di{constructor(e=null,t=1,i=1,r,a,n,s,l,u=Bt,c=Bt,f,m){super(null,n,s,l,u,c,r,a,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lr=new va,Au=new Ue(.5,.5),Ga=new z,oo=class{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,a=new Vi,n=new Vi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],l=a[2],u=a[3],c=a[4],f=a[5],m=a[6],d=a[7],_=a[8],S=a[9],E=a[10],v=a[11],p=a[12],C=a[13],H=a[14],o=a[15];if(r[0].setComponents(u-n,d-c,v-_,o-p).normalize(),r[1].setComponents(u+n,d+c,v+_,o+p).normalize(),r[2].setComponents(u+s,d+f,v+S,o+C).normalize(),r[3].setComponents(u-s,d-f,v-S,o-C).normalize(),i)r[4].setComponents(l,m,E,H).normalize(),r[5].setComponents(u-l,d-m,v-E,o-H).normalize();else if(r[4].setComponents(u-l,d-m,v-E,o-H).normalize(),t===Ai)r[5].setComponents(u+l,d+m,v+E,o+H).normalize();else if(t===ga)r[5].setComponents(l,m,E,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);let t=Au.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jl=class extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pn=new z,fn=new z,No=new Mt,na=new xa,Va=new va,jn=new z,Oo=new z,Cu=class extends Kt{constructor(e=new ii,t=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)pn.fromBufferAttribute(t,r-1),fn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pn.distanceTo(fn);e.setAttribute("lineDistance",new Dt(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=a,e.ray.intersectsSphere(Va)===!1)return;No.copy(r).invert(),na.copy(e.ray).applyMatrix4(No);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let m=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let _=m,S=d-1;_<S;_+=u){let E=c.getX(_),v=c.getX(_+1),p=ka(this,e,na,l,E,v,_);p&&t.push(p)}if(this.isLineLoop){let _=c.getX(d-1),S=c.getX(m),E=ka(this,e,na,l,_,S,d-1);E&&t.push(E)}}else{let m=Math.max(0,n.start),d=Math.min(f.count,n.start+n.count);for(let _=m,S=d-1;_<S;_+=u){let E=ka(this,e,na,l,_,_+1,_);E&&t.push(E)}if(this.isLineLoop){let _=ka(this,e,na,l,d-1,m,d-1);_&&t.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function ka(e,t,i,r,a,n,s){let l=e.geometry.attributes.position;if(pn.fromBufferAttribute(l,a),fn.fromBufferAttribute(l,n),i.distanceSqToSegment(pn,fn,jn,Oo)>r)return;jn.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(jn);if(!(u<t.near||u>t.far))return{distance:u,point:Oo.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Fo=new z,Bo=new z,Pu=class extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Fo.fromBufferAttribute(t,r),Bo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fo.distanceTo(Bo);e.setAttribute("lineDistance",new Dt(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$l=class extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zo=new Mt,Ws=new xa,Wa=new va,Xa=new z,Lu=class extends Kt{constructor(e=new ii,t=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=a,e.ray.intersectsSphere(Wa)===!1)return;zo.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(zo);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=i.index,c=i.attributes.position;if(u!==null){let f=Math.max(0,n.start),m=Math.min(u.count,n.start+n.count);for(let d=f,_=m;d<_;d++){let S=u.getX(d);Xa.fromBufferAttribute(c,S),Ho(Xa,S,l,r,e,t,this)}}else{let f=Math.max(0,n.start),m=Math.min(c.count,n.start+n.count);for(let d=f,_=m;d<_;d++)Xa.fromBufferAttribute(c,d),Ho(Xa,d,l,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Ho(e,t,i,r,a,n,s){let l=Ws.distanceSqToPoint(e);if(l<i){let u=new z;Ws.closestPointToPoint(e,u),u.applyMatrix4(r);let c=a.ray.origin.distanceTo(u);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Ql=class extends di{constructor(e=[],t=fr,i,r,a,n,s,l,u,c){super(e,t,i,r,a,n,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Go=class extends di{constructor(e,t,i,r,a,n,s,l,u){super(e,t,i,r,a,n,s,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},_a=class extends di{constructor(e,t,i=Pi,r,a,n,s=Bt,l=Bt,u,c=ji,f=1){if(c!==ji&&c!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:f};super(m,r,a,n,s,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Du=class extends _a{constructor(e,t=Pi,i=fr,r,a,n=Bt,s=Bt,l,u=ji){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},eh=class extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gn=class th extends ii{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let l=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let u=[],c=[],f=[],m=[],d=0,_=0;S("z","y","x",-1,-1,r,i,t,s,n,0),S("z","y","x",1,-1,r,i,-t,s,n,1),S("x","z","y",1,1,t,r,i,a,s,2),S("x","z","y",1,-1,t,r,-i,a,s,3),S("x","y","z",1,-1,t,i,r,a,n,4),S("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(u),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(m,2));function S(E,v,p,C,H,o,T,A,R,h,g){let X=o/R,U=T/h,F=o/2,ee=T/2,N=A/2,W=R+1,re=h+1,q=0,fe=0,J=new z;for(let $=0;$<re;$++){let se=$*U-ee;for(let Xe=0;Xe<W;Xe++){let Ce=Xe*X-F;J[E]=Ce*C,J[v]=se*H,J[p]=N,c.push(J.x,J.y,J.z),J[E]=0,J[v]=0,J[p]=A>0?1:-1,f.push(J.x,J.y,J.z),m.push(Xe/R),m.push(1-$/h),q+=1}}for(let $=0;$<h;$++)for(let se=0;se<R;se++){let Xe=d+se+W*$,Ce=d+se+W*($+1),ft=d+(se+1)+W*($+1),He=d+(se+1)+W*$;u.push(Xe,Ce,He),u.push(Ce,ft,He),fe+=6}l.addGroup(_,fe,g),_+=fe,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xs=class ih extends ii{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:l,thetaLength:u};let c=this;a=Math.floor(a),n=Math.floor(n);let f=[],m=[],d=[],_=[],S=0,E=[],v=r/2,p=0;C(),s===!1&&(t>0&&H(!0),i>0&&H(!1)),this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(_,2));function C(){let o=new z,T=new z,A=0,R=(i-t)/r;for(let h=0;h<=n;h++){let g=[],X=h/n,U=X*(i-t)+t;for(let F=0;F<=a;F++){let ee=F/a,N=ee*u+l,W=Math.sin(N),re=Math.cos(N);T.x=U*W,T.y=-X*r+v,T.z=U*re,m.push(T.x,T.y,T.z),o.set(W,R,re).normalize(),d.push(o.x,o.y,o.z),_.push(ee,1-X),g.push(S++)}E.push(g)}for(let h=0;h<a;h++)for(let g=0;g<n;g++){let X=E[g][h],U=E[g+1][h],F=E[g+1][h+1],ee=E[g][h+1];(t>0||g!==0)&&(f.push(X,U,ee),A+=3),(i>0||g!==n-1)&&(f.push(U,F,ee),A+=3)}c.addGroup(p,A,0),p+=A}function H(o){let T=S,A=new Ue,R=new z,h=0,g=o===!0?t:i,X=o===!0?1:-1;for(let F=1;F<=a;F++)m.push(0,v*X,0),d.push(0,X,0),_.push(.5,.5),S++;let U=S;for(let F=0;F<=a;F++){let ee=F/a*u+l,N=Math.cos(ee),W=Math.sin(ee);R.x=g*W,R.y=v*X,R.z=g*N,m.push(R.x,R.y,R.z),d.push(0,X,0),A.x=N*.5+.5,A.y=W*.5*X+.5,_.push(A.x,A.y),S++}for(let F=0;F<a;F++){let ee=T+F,N=U+F;o===!0?f.push(N,N+1,ee):f.push(N+1,N,ee),h+=3}c.addGroup(p,h,o===!0?1:2),p+=h}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class rh extends Xs{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,l=Math.PI*2){super(0,t,i,r,a,n,s,l),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:l}}static fromJSON(t){return new rh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lo=class ah extends ii{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,l=Math.floor(r),u=Math.floor(a),c=l+1,f=u+1,m=t/l,d=i/u,_=[],S=[],E=[],v=[];for(let p=0;p<f;p++){let C=p*d-s;for(let H=0;H<c;H++){let o=H*m-n;S.push(o,-C,0),E.push(0,0,1),v.push(H/l),v.push(1-p/u)}}for(let p=0;p<u;p++)for(let C=0;C<l;C++){let H=C+c*p,o=C+c*(p+1),T=C+1+c*(p+1),A=C+1+c*p;_.push(H,o,A),_.push(o,T,A)}this.setIndex(_),this.setAttribute("position",new Dt(S,3)),this.setAttribute("normal",new Dt(E,3)),this.setAttribute("uv",new Dt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.width,t.height,t.widthSegments,t.heightSegments)}},Vo=class nh extends ii{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:l},r=Math.floor(r),a=Math.floor(a);let u=[],c=[],f=[],m=[],d=new z,_=new z,S=new z;for(let E=0;E<=r;E++){let v=s+E/r*l;for(let p=0;p<=a;p++){let C=p/a*n;_.x=(t+i*Math.cos(v))*Math.cos(C),_.y=(t+i*Math.cos(v))*Math.sin(C),_.z=i*Math.sin(v),c.push(_.x,_.y,_.z),d.x=t*Math.cos(C),d.y=t*Math.sin(C),S.subVectors(_,d).normalize(),f.push(S.x,S.y,S.z),m.push(p/a),m.push(E/r)}}for(let E=1;E<=r;E++)for(let v=1;v<=a;v++){let p=(a+1)*E+v-1,C=(a+1)*(E-1)+v-1,H=(a+1)*(E-1)+v,o=(a+1)*E+v;u.push(p,C,o),u.push(C,H,o)}this.setIndex(u),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Iu=class extends qi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Yr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(ko(a))a.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(ko(a[0])){let n=[];for(let s=0,l=a.length;s<l;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Zt(e){let t={};for(let i=0;i<e.length;i++){let r=Yr(e[i]);for(let a in r)t[a]=r[a]}return t}function ko(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Uu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function sh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}var Nu={clone:Yr,merge:Zt},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bu=class extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vs,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zu=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Hu=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gu=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},oh=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qn=new Mt,Wo=new z,Xo=new z,Vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){qn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(qn,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,l=r?r.x/a.x:0,u=r?r.y/a.y:0;e.coordinateSystem===ga||e.reversedDepth?t.set(.5*n,0,0,.5*n+l,0,.5*s,0,.5*s+u,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+l,0,.5*s,0,.5*s+u,0,0,.5,.5,0,0,0,1),t.multiply(qn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ja=new z,qa=new rr,Ei=new z,lh=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,qa,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,qa,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ja,qa,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,qa,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new z,jo=new Ue,qo=new Ue,ui=class extends lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(tn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,t){return this.getViewBounds(e,jo,qo),t.subVectors(qo,jo)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let l=n.fullWidth,u=n.fullHeight;a+=n.offsetX*r/l,t-=n.offsetY*i/u,r*=n.width/l,i*=n.height/u}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ho=class extends lh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,n=a+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ku=class extends Vu{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yn=class extends oh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wu=class extends oh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Pr=-90,Lr=1,Xu=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ui(Pr,Lr,e,t);r.layers=this.layers,this.add(r);let a=new ui(Pr,Lr,e,t);a.layers=this.layers,this.add(a);let n=new ui(Pr,Lr,e,t);n.layers=this.layers,this.add(n);let s=new ui(Pr,Lr,e,t);s.layers=this.layers,this.add(s);let l=new ui(Pr,Lr,e,t);l.layers=this.layers,this.add(l);let u=new ui(Pr,Lr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,l]=t;for(let u of t)this.remove(u);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,l,u,c]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(f,m,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ju=class extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hh="\\[\\]\\.:\\/",uo="[^"+hh+"]",qu="[^"+hh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",uo);/(WCOD+)?/.source.replace("WCOD",qu);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo);var Yo=new Mt,Yu=class{constructor(e,t,i=0,r=1/0){this.ray=new xa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yo),this}intersectObject(e,t=!0,i=[]){return js(e,this,i,t),i.sort(Zo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)js(e[r],this,i,t);return i.sort(Zo),i}};function Zo(e,t){return e.distance-t.distance}function js(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,l=n.length;s<l;s++)js(n[s],t,i,!0)}}var Ko=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Xr;Xr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Xr.prototype.isMatrix2=!0;var Zu=class extends Pu{constructor(e=10,t=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);let a=t/2,n=e/t,s=e/2,l=[],u=[];for(let m=0,d=0,_=-s;m<=t;m++,_+=n){l.push(-s,0,_,s,0,_),l.push(_,0,-s,_,0,s);let S=m===a?i:r;S.toArray(u,d),d+=3,S.toArray(u,d),d+=3,S.toArray(u,d),d+=3,S.toArray(u,d),d+=3}let c=new ii;c.setAttribute("position",new Dt(l,3)),c.setAttribute("color",new Dt(u,3));let f=new Jl({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ku=class extends ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Jo(e,t,i,r){let a=Ju(r);switch(i){case Fl:return e*t;case zl:return e*t/a.components*a.byteLength;case eo:return e*t/a.components*a.byteLength;case mr:return e*t*2/a.components*a.byteLength;case to:return e*t*2/a.components*a.byteLength;case Bl:return e*t*3/a.components*a.byteLength;case vi:return e*t*4/a.components*a.byteLength;case io:return e*t*4/a.components*a.byteLength;case Ja:case $a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qa:case en:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ps:case ms:return Math.max(e,16)*Math.max(t,8)/4;case ds:case fs:return Math.max(e,8)*Math.max(t,8)/2;case gs:case _s:case xs:case Ms:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vs:case sn:case Ss:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ys:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Es:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case bs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ts:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ws:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Rs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case As:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ps:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ls:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ds:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Is:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Us:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ns:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Os:case Fs:case Bs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case zs:case Hs:return Math.ceil(e/4)*Math.ceil(t/4)*8;case on:case Gs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ju(e){switch(e){case ni:case Il:return{byteLength:1,components:1};case fa:case Ul:case Li:return{byteLength:2,components:1};case $s:case Qs:return{byteLength:2,components:4};case Pi:case Js:case Ri:return{byteLength:4,components:1};case Nl:case Ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zs}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zs);function uh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function $u(e){let t=new WeakMap;function i(l,u){let c=l.array,f=l.usage,m=c.byteLength,d=e.createBuffer();e.bindBuffer(u,d),e.bufferData(u,c,f),l.onUploadCallback();let _;if(c instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=e.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=e.SHORT;else if(c instanceof Uint32Array)_=e.UNSIGNED_INT;else if(c instanceof Int32Array)_=e.INT;else if(c instanceof Int8Array)_=e.BYTE;else if(c instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,c){let f=u.array,m=u.updateRanges;if(e.bindBuffer(c,l),m.length===0)e.bufferSubData(c,0,f);else{m.sort((_,S)=>_.start-S.start);let d=0;for(let _=1;_<m.length;_++){let S=m[d],E=m[_];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++d,m[d]=E)}m.length=d+1;for(let _=0,S=m.length;_<S;_++){let E=m[_];e.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function n(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=t.get(l);u&&(e.deleteBuffer(u.buffer),t.delete(l))}function s(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let c=t.get(l);if(c===void 0)t.set(l,i(l,u));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,l,u),c.version=l.version}}return{get:a,remove:n,update:s}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ec=`#ifdef USE_ALPHAHASH
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
#endif`,tc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ac=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nc=`#ifdef USE_AOMAP
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
#endif`,sc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oc=`#ifdef USE_BATCHING
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
#endif`,lc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dc=`#ifdef USE_IRIDESCENCE
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
#endif`,pc=`#ifdef USE_BUMPMAP
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
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yc=`#define PI 3.141592653589793
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
} // validated`,Ec=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bc=`vec3 transformedNormal = objectNormal;
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
#endif`,Tc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lc=`#ifdef USE_ENVMAP
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
#endif`,Dc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ic=`#ifdef USE_ENVMAP
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
#endif`,Uc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nc=`#ifdef USE_ENVMAP
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
#endif`,Oc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hc=`#ifdef USE_GRADIENTMAP
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
}`,Gc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wc=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xc=`#ifdef USE_ENVMAP
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
#endif`,jc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kc=`PhysicalMaterial material;
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
#endif`,Jc=`uniform sampler2D dfgLUT;
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
}`,$c=`
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
#endif`,Qc=`#if defined( RE_IndirectDiffuse )
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yd=`#ifdef USE_NORMALMAP
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
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bd=`float getShadowMask() {
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
}`,zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,lp=`#define DISTANCE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,bp=`#define STANDARD
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
}`,Tp=`#define TOON
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
}`,wp=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Qu,alphahash_pars_fragment:ec,alphamap_fragment:tc,alphamap_pars_fragment:ic,alphatest_fragment:rc,alphatest_pars_fragment:ac,aomap_fragment:nc,aomap_pars_fragment:sc,batching_pars_vertex:oc,batching_vertex:lc,begin_vertex:hc,beginnormal_vertex:uc,bsdfs:cc,iridescence_fragment:dc,bumpmap_pars_fragment:pc,clipping_planes_fragment:fc,clipping_planes_pars_fragment:mc,clipping_planes_pars_vertex:gc,clipping_planes_vertex:_c,color_fragment:vc,color_pars_fragment:xc,color_pars_vertex:Mc,color_vertex:Sc,common:yc,cube_uv_reflection_fragment:Ec,defaultnormal_vertex:bc,displacementmap_pars_vertex:Tc,displacementmap_vertex:wc,emissivemap_fragment:Rc,emissivemap_pars_fragment:Ac,colorspace_fragment:Cc,colorspace_pars_fragment:Pc,envmap_fragment:Lc,envmap_common_pars_fragment:Dc,envmap_pars_fragment:Ic,envmap_pars_vertex:Uc,envmap_physical_pars_fragment:Xc,envmap_vertex:Nc,fog_vertex:Oc,fog_pars_vertex:Fc,fog_fragment:Bc,fog_pars_fragment:zc,gradientmap_pars_fragment:Hc,lightmap_pars_fragment:Gc,lights_lambert_fragment:Vc,lights_lambert_pars_fragment:kc,lights_pars_begin:Wc,lights_toon_fragment:jc,lights_toon_pars_fragment:qc,lights_phong_fragment:Yc,lights_phong_pars_fragment:Zc,lights_physical_fragment:Kc,lights_physical_pars_fragment:Jc,lights_fragment_begin:$c,lights_fragment_maps:Qc,lights_fragment_end:ed,lightprobes_pars_fragment:td,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:nd,map_fragment:sd,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:cd,morphinstance_vertex:dd,morphcolor_vertex:pd,morphnormal_vertex:fd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:_d,normal_fragment_maps:vd,normal_pars_fragment:xd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:yd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:Td,iridescence_pars_fragment:wd,opaque_fragment:Rd,packing:Ad,premultiplied_alpha_fragment:Cd,project_vertex:Pd,dithering_fragment:Ld,dithering_pars_fragment:Dd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Ud,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Od,shadowmap_vertex:Fd,shadowmask_pars_fragment:Bd,skinbase_vertex:zd,skinning_pars_vertex:Hd,skinning_vertex:Gd,skinnormal_vertex:Vd,specularmap_fragment:kd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:jd,transmission_fragment:qd,transmission_pars_fragment:Yd,uv_pars_fragment:Zd,uv_pars_vertex:Kd,uv_vertex:Jd,worldpos_vertex:$d,background_vert:Qd,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:ip,cube_vert:rp,cube_frag:ap,depth_vert:np,depth_frag:sp,distance_vert:op,distance_frag:lp,equirect_vert:hp,equirect_frag:up,linedashed_vert:cp,linedashed_frag:dp,meshbasic_vert:pp,meshbasic_frag:fp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:yp,meshphysical_vert:Ep,meshphysical_frag:bp,meshtoon_vert:Tp,meshtoon_frag:wp,points_vert:Rp,points_frag:Ap,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Dp},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ti={basic:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Zt([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Zt([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ti.physical={uniforms:Zt([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Ya={r:0,b:0,g:0},Ip=new Mt,ch=new Ye;ch.set(-1,0,0,0,1,0,0,0,1);function Up(e,t,i,r,a,n){let s=new qe(0),l=a===!0?0:1,u,c,f=null,m=0,d=null;function _(C){let H=C.isScene===!0?C.background:null;if(H&&H.isTexture){let o=C.backgroundBlurriness>0;H=t.get(H,o)}return H}function S(C){let H=!1,o=_(C);o===null?v(s,l):o&&o.isColor&&(v(o,1),H=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(C,H){let o=_(H);o&&(o.isCubeTexture||o.mapping===mn)?(c===void 0&&(c=new Tt(new gn(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Yr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=o,c.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(H.backgroundRotation)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ch),c.material.toneMapped=Qe.getTransfer(o.colorSpace)!==ht,(f!==o||m!==o.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,f=o,m=o.version,d=e.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):o&&o.isTexture&&(u===void 0&&(u=new Tt(new lo(2,2),new Di({name:"BackgroundMaterial",uniforms:Yr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=o,u.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(o.colorSpace)!==ht,o.matrixAutoUpdate===!0&&o.updateMatrix(),u.material.uniforms.uvTransform.value.copy(o.matrix),(f!==o||m!==o.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,f=o,m=o.version,d=e.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function v(C,H){C.getRGB(Ya,sh(e)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,H,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return s},setClearColor:function(C,H=1){s.set(C),l=H,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,v(s,l)},render:S,addToRenderList:E,dispose:p}}function Np(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function l(U,F,ee,N,W){let re=!1,q=m(U,N,ee,F);n!==q&&(n=q,c(n.object)),re=_(U,N,ee,W),re&&S(U,N,ee,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,o(U,F,ee,N),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function u(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function f(U){return e.deleteVertexArray(U)}function m(U,F,ee,N){let W=N.wireframe===!0,re=r[F.id];re===void 0&&(re={},r[F.id]=re);let q=U.isInstancedMesh===!0?U.id:0,fe=re[q];fe===void 0&&(fe={},re[q]=fe);let J=fe[ee.id];J===void 0&&(J={},fe[ee.id]=J);let $=J[W];return $===void 0&&($=d(u()),J[W]=$),$}function d(U){let F=[],ee=[],N=[];for(let W=0;W<i;W++)F[W]=0,ee[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ee,attributeDivisors:N,object:U,attributes:{},index:null}}function _(U,F,ee,N){let W=n.attributes,re=F.attributes,q=0,fe=ee.getAttributes();for(let J in fe)if(fe[J].location>=0){let $=W[J],se=re[J];if(se===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;q++}return n.attributesNum!==q||n.index!==N}function S(U,F,ee,N){let W={},re=F.attributes,q=0,fe=ee.getAttributes();for(let J in fe)if(fe[J].location>=0){let $=re[J];$===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&($=U.instanceColor));let se={};se.attribute=$,$&&$.data&&(se.data=$.data),W[J]=se,q++}n.attributes=W,n.attributesNum=q,n.index=N}function E(){let U=n.newAttributes;for(let F=0,ee=U.length;F<ee;F++)U[F]=0}function v(U){p(U,0)}function p(U,F){let ee=n.newAttributes,N=n.enabledAttributes,W=n.attributeDivisors;ee[U]=1,N[U]===0&&(e.enableVertexAttribArray(U),N[U]=1),W[U]!==F&&(e.vertexAttribDivisor(U,F),W[U]=F)}function C(){let U=n.newAttributes,F=n.enabledAttributes;for(let ee=0,N=F.length;ee<N;ee++)F[ee]!==U[ee]&&(e.disableVertexAttribArray(ee),F[ee]=0)}function H(U,F,ee,N,W,re,q){q===!0?e.vertexAttribIPointer(U,F,ee,W,re):e.vertexAttribPointer(U,F,ee,N,W,re)}function o(U,F,ee,N){E();let W=N.attributes,re=ee.getAttributes(),q=F.defaultAttributeValues;for(let fe in re){let J=re[fe];if(J.location>=0){let $=W[fe];if($===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let se=$.normalized,Xe=$.itemSize,Ce=t.get($);if(Ce===void 0)continue;let ft=Ce.buffer,He=Ce.type,Q=Ce.bytesPerElement,le=He===e.INT||He===e.UNSIGNED_INT||$.gpuType===Js;if($.isInterleavedBufferAttribute){let de=$.data,Le=de.stride,Ie=$.offset;if(de.isInstancedInterleavedBuffer){for(let Me=0;Me<J.locationSize;Me++)p(J.location+Me,de.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Me=0;Me<J.locationSize;Me++)v(J.location+Me);e.bindBuffer(e.ARRAY_BUFFER,ft);for(let Me=0;Me<J.locationSize;Me++)H(J.location+Me,Xe/J.locationSize,He,se,Le*Q,(Ie+Xe/J.locationSize*Me)*Q,le)}else{if($.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)p(J.location+de,$.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<J.locationSize;de++)v(J.location+de);e.bindBuffer(e.ARRAY_BUFFER,ft);for(let de=0;de<J.locationSize;de++)H(J.location+de,Xe/J.locationSize,He,se,Xe*Q,Xe/J.locationSize*de*Q,le)}}else if(q!==void 0){let se=q[fe];if(se!==void 0)switch(se.length){case 2:e.vertexAttrib2fv(J.location,se);break;case 3:e.vertexAttrib3fv(J.location,se);break;case 4:e.vertexAttrib4fv(J.location,se);break;default:e.vertexAttrib1fv(J.location,se)}}}}C()}function T(){g();for(let U in r){let F=r[U];for(let ee in F){let N=F[ee];for(let W in N){let re=N[W];for(let q in re)f(re[q].object),delete re[q];delete N[W]}}delete r[U]}}function A(U){if(r[U.id]===void 0)return;let F=r[U.id];for(let ee in F){let N=F[ee];for(let W in N){let re=N[W];for(let q in re)f(re[q].object),delete re[q];delete N[W]}}delete r[U.id]}function R(U){for(let F in r){let ee=r[F];for(let N in ee){let W=ee[N];if(W[U.id]===void 0)continue;let re=W[U.id];for(let q in re)f(re[q].object),delete re[q];delete W[U.id]}}}function h(U){for(let F in r){let ee=r[F],N=U.isInstancedMesh===!0?U.id:0,W=ee[N];if(W!==void 0){for(let re in W){let q=W[re];for(let fe in q)f(q[fe].object),delete q[fe];delete W[re]}delete ee[N],Object.keys(ee).length===0&&delete r[F]}}}function g(){X(),s=!0,n!==a&&(n=a,c(n.object))}function X(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:g,resetDefaultState:X,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:h,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:v,disableUnusedAttributes:C}}function Op(e,t,i){let r;function a(u){r=u}function n(u,c){e.drawArrays(r,u,c),i.update(c,r,1)}function s(u,c,f){f!==0&&(e.drawArraysInstanced(r,u,c,f),i.update(c,r,f))}function l(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,c,0,f);let m=0;for(let d=0;d<f;d++)m+=c[d];i.update(m,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=l}function Fp(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==vi&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let h=R===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&R!==Ri&&!h&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function u(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=u(c);f!==c&&(ze("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let m=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),C=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),H=e.getParameter(e.MAX_VARYING_VECTORS),o=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:u,textureFormatReadable:s,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:C,maxVaryings:H,maxFragmentUniforms:o,maxSamples:T,samples:A}}function Bp(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Vi,l=new Ye,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let _=m.length!==0||d||r!==0||a;return a=d,r=m.length,_},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(m,d){i=f(m,d,0)},this.setState=function(m,d,_){let S=m.clippingPlanes,E=m.clipIntersection,v=m.clipShadows,p=e.get(m);if(!a||S===null||S.length===0||n&&!v)n?f(null):c();else{let C=n?0:r,H=C*4,o=p.clippingState||null;u.value=o,o=f(S,d,H,_);for(let T=0;T!==H;++T)o[T]=i[T];p.clippingState=o,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function c(){u.value!==i&&(u.value=i,u.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function f(m,d,_,S){let E=m!==null?m.length:0,v=null;if(E!==0){if(v=u.value,S!==!0||v===null){let p=_+E*4,C=d.matrixWorldInverse;l.getNormalMatrix(C),(v===null||v.length<p)&&(v=new Float32Array(p));for(let H=0,o=_;H!==E;++H,o+=4)s.copy(m[H]).applyMatrix4(C,l),s.normal.toArray(v,o),v[o+3]=s.constant}u.value=v,u.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,v}}var Fr=4,zp=6,Hp=20,Gp=256,oa=new ho,$o=new qe,Zn=null,Kn=0,Jn=0,$n=!1,Vp=new z,hr=new z,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Vp}=a;Zn=this._renderer.getRenderTarget(),Kn=this._renderer.getActiveCubeFace(),Jn=this._renderer.getActiveMipmapLevel(),$n=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,s),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zn,Kn,Jn),this._renderer.xr.enabled=$n,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zn=this._renderer.getRenderTarget(),Kn=this._renderer.getActiveCubeFace(),Jn=this._renderer.getActiveMipmapLevel(),$n=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Li,format:vi,colorSpace:ln,depthBuffer:!1},r=el(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kp(a)),this._blurMaterial=Xp(a,e,t),this._ggxMaterial=Wp(a,e,t)}return r}_compileMaterial(e){let t=new Tt(new ii,e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r,a){let n=new ui(90,1,t,i),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor($o),u.toneMapping=Ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new gn,new dn({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let m=this._backgroundBox,d=m.material,_=!1,S=e.background;S?S.isColor&&(d.color.copy(S),e.background=null,_=!0):(d.color.copy($o),_=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(n.up.set(0,s[E],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+l[E],a.y,a.z)):v===1?(n.up.set(0,0,s[E]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+l[E],a.z)):(n.up.set(0,s[E],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+l[E]));let p=this._cubeSize;Dr(r,v*p,E>2?p:0,p,p),u.setRenderTarget(r),_&&u.render(m,n),u.render(e,n)}u.toneMapping=f,u.autoClear=c,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(n,oa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let l=n.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),m=u*1.25,d=f*m,{_lodMax:_}=this,S=this._sizeLods[i],E=3*S*(i>_-Fr?i-_+Fr:0),v=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Dr(a,E,v,3*S,2*S),r.setRenderTarget(a),r.render(s,oa),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,Dr(e,E,v,3*S,2*S),r.setRenderTarget(e),r.render(s,oa)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,l=this._lodMeshes[r];l.material=s;let u=s.uniforms;u.envMap.value=e.texture,u.sigma.value=a,u.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],f=3*c*(r>this._lodMax-Fr?r-this._lodMax+Fr:0),m=4*(this._cubeSize-c);Dr(t,f,m,3*c,2*c),n.setRenderTarget(t),n.render(l,oa)}};function kp(e){let t=[],i=[],r=e,a=e-Fr+1+zp;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let l=1/(s-2),u=-l,c=1+l,f=[u,u,c,u,c,c,u,u,c,c,u,c],m=6,d=6,_=3,S=new Float32Array(_*d*m),E=new Float32Array(_*d*m);for(let p=0;p<m;p++){let C=p%3*2/3-1,H=p>2?0:-1,o=[C,H,0,C+2/3,H,0,C+2/3,H+1,0,C,H,0,C+2/3,H+1,0,C,H+1,0];S.set(o,_*d*p);for(let T=0;T<d;T++){let A=f[T*2]*2-1,R=f[T*2+1]*2-1;p===0?hr.set(1,R,A):p===1?hr.set(-A,1,-R):p===2?hr.set(-A,R,1):p===3?hr.set(-1,R,-A):p===4?hr.set(-A,-1,R):hr.set(A,R,-1),hr.toArray(E,(p*d+T)*_)}}let v=new ii;v.setAttribute("position",new ci(S,_)),v.setAttribute("outputDirection",new ci(E,_)),i.push(new Tt(v,null)),r>Fr&&r--}return{lodMeshes:i,sizeLods:t}}function el(e,t,i){let r=new xi(e,t,i);return r.texture.mapping=mn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Wp(e,t,i){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_n(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Xp(e,t,i){return new Di({name:"SphericalGaussianBlur",defines:{SAMPLES:Hp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_n(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function tl(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_n(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function il(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_n(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _n(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dh=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ql(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gn(5,5,5),a=new Di({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Wi});a.uniforms.tEquirect.value=t;let n=new Tt(r,a),s=t.minFilter;return t.minFilter===ur&&(t.minFilter=zt),new Xu(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function jp(e){let t=new WeakMap,i=new WeakMap,r=null;function a(d,_=!1){return d==null?null:_?s(d):n(d)}function n(d){if(d&&d.isTexture){let _=d.mapping;if(_===Mn||_===Sn)if(t.has(d)){let S=t.get(d).texture;return l(S,d.mapping)}else{let S=d.image;if(S&&S.height>0){let E=new dh(S.height);return E.fromEquirectangularTexture(e,d),t.set(d,E),d.addEventListener("dispose",c),l(E.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let _=d.mapping,S=_===Mn||_===Sn,E=_===fr||_===jr;if(S||E){let v=i.get(d),p=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return r===null&&(r=new Qo(e)),v=S?r.fromEquirectangular(d,v):r.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,i.set(d,v),v.texture;if(v!==void 0)return v.texture;{let C=d.image;return S&&C&&C.height>0||E&&C&&u(C)?(r===null&&(r=new Qo(e)),v=S?r.fromEquirectangular(d):r.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,i.set(d,v),d.addEventListener("dispose",f),v.texture):null}}}return d}function l(d,_){return _===Mn?d.mapping=fr:_===Sn&&(d.mapping=jr),d}function u(d){let _=0,S=6;for(let E=0;E<S;E++)d[E]!==void 0&&_++;return _===S}function c(d){let _=d.target;_.removeEventListener("dispose",c);let S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function f(d){let _=d.target;_.removeEventListener("dispose",f);let S=i.get(_);S!==void 0&&(i.delete(_),S.dispose())}function m(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:m}}function qp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&zr("WebGLRenderer: "+r+" extension not supported."),a}}}function Yp(e,t,i,r){let a={},n=new WeakMap;function s(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let S in d.attributes)t.remove(d.attributes[S]);d.removeEventListener("dispose",s),delete a[d.id];let _=n.get(d);_&&(t.remove(_),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function l(m,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function u(m){let d=m.attributes;for(let _ in d)t.update(d[_],e.ARRAY_BUFFER)}function c(m){let d=[],_=m.index,S=m.attributes.position,E=0;if(S===void 0)return;if(_!==null){let C=_.array;E=_.version;for(let H=0,o=C.length;H<o;H+=3){let T=C[H+0],A=C[H+1],R=C[H+2];d.push(T,A,A,R,R,T)}}else{let C=S.array;E=S.version;for(let H=0,o=C.length/3-1;H<o;H+=3){let T=H+0,A=H+1,R=H+2;d.push(T,A,A,R,R,T)}}let v=new(S.count>=65535?jl:Xl)(d,1);v.version=E;let p=n.get(m);p&&t.remove(p),n.set(m,v)}function f(m){let d=n.get(m);if(d){let _=m.index;_!==null&&d.version<_.version&&c(m)}else c(m);return n.get(m)}return{get:l,update:u,getWireframeAttribute:f}}function Zp(e,t,i){let r;function a(m){r=m}let n,s;function l(m){n=m.type,s=m.bytesPerElement}function u(m,d){e.drawElements(r,d,n,m*s),i.update(d,r,1)}function c(m,d,_){_!==0&&(e.drawElementsInstanced(r,d,n,m*s,_),i.update(d,r,_))}function f(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,m,0,_);let S=0;for(let E=0;E<_;E++)S+=d[E];i.update(S,r,1)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=f}function Kp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,l){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=l*(n/3);break;case e.LINES:i.lines+=l*(n/2);break;case e.LINE_STRIP:i.lines+=l*(n-1);break;case e.LINE_LOOP:i.lines+=l*n;break;case e.POINTS:i.points+=l*n;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Jp(e,t,i){let r=new WeakMap,a=new Et;function n(s,l,u){let c=s.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0,d=r.get(l);if(d===void 0||d.count!==m){let _=function(){h.dispose(),r.delete(l),l.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let S=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],C=l.morphAttributes.normal||[],H=l.morphAttributes.color||[],o=0;S===!0&&(o=1),E===!0&&(o=2),v===!0&&(o=3);let T=l.attributes.position.count*o,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let R=new Float32Array(T*A*4*m),h=new Vl(R,T,A,m);h.type=Ri,h.needsUpdate=!0;let g=o*4;for(let X=0;X<m;X++){let U=p[X],F=C[X],ee=H[X],N=T*A*4*X;for(let W=0;W<U.count;W++){let re=W*g;S===!0&&(a.fromBufferAttribute(U,W),R[N+re+0]=a.x,R[N+re+1]=a.y,R[N+re+2]=a.z,R[N+re+3]=0),E===!0&&(a.fromBufferAttribute(F,W),R[N+re+4]=a.x,R[N+re+5]=a.y,R[N+re+6]=a.z,R[N+re+7]=0),v===!0&&(a.fromBufferAttribute(ee,W),R[N+re+8]=a.x,R[N+re+9]=a.y,R[N+re+10]=a.z,R[N+re+11]=ee.itemSize===4?a.w:1)}}d={count:m,texture:h,size:new Ue(T,A)},r.set(l,d),l.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)u.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let _=0;for(let E=0;E<c.length;E++)_+=c[E];let S=l.morphTargetsRelative?1:1-_;u.getUniforms().setValue(e,"morphTargetBaseInfluence",S),u.getUniforms().setValue(e,"morphTargetInfluences",c)}u.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function $p(e,t,i,r,a){let n=new WeakMap;function s(c){let f=a.render.frame,m=c.geometry,d=t.get(c,m);if(n.get(d)!==f&&(t.update(d),n.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),n.get(c)!==f&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,f))),c.isSkinnedMesh){let _=c.skeleton;n.get(_)!==f&&(_.update(),n.set(_,f))}return d}function l(){n=new WeakMap}function u(c){let f=c.target;f.removeEventListener("dispose",u),r.releaseStatesOfObject(f),i.remove(f.instanceMatrix),f.instanceColor!==null&&i.remove(f.instanceColor)}return{update:s,dispose:l}}var Qp={[wl]:"LINEAR_TONE_MAPPING",[Rl]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[Ks]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[Ll]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function ef(e,t,i,r,a,n){let s=new xi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,u=null,c=new ii;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let f=new Bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Tt(c,f),d=new ho(-1,1,1,-1,0,1),_=null,S=null,E=!1,v,p=null,C=[],H=!1;this.setSize=function(o,T){s.setSize(o,T),l!==null&&l.setSize(o,T),u!==null&&u.setSize(o,T);for(let A=0;A<C.length;A++){let R=C[A];R.setSize&&R.setSize(o,T)}},this.setEffects=function(o){C=o,H=C.length>0&&C[0].isRenderPass===!0;let T=s.width,A=s.height;C.length>0&&l===null&&(l=new xi(T,A,{type:Li,depthBuffer:!1,stencilBuffer:!1}),u=new xi(T,A,{type:Li,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<C.length;R++){let h=C[R];h.setSize&&h.setSize(T,A)}},this.begin=function(o,T){if(E||o.toneMapping===Ci&&C.length===0)return!1;if(p=T,T!==null){let A=T.width,R=T.height;(s.width!==A||s.height!==R)&&this.setSize(A,R)}return H===!1&&o.setRenderTarget(s),v=o.toneMapping,o.toneMapping=Ci,!0},this.hasRenderPass=function(){return H},this.end=function(o,T){o.toneMapping=v,E=!0;let A=s,R=l;for(let h=0;h<C.length;h++){let g=C[h];g.enabled!==!1&&(g.render(o,R,A,T),g.needsSwap!==!1&&(A=R,R=R===l?u:l))}if(_!==o.outputColorSpace||S!==o.toneMapping){_=o.outputColorSpace,S=o.toneMapping,f.defines={},Qe.getTransfer(_)===ht&&(f.defines.SRGB_TRANSFER="");let h=Qp[S];h&&(f.defines[h]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=A.texture,o.setRenderTarget(p),o.render(m,d),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){s.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),c.dispose(),f.dispose()}}var ph=new di,qs=new _a(1,1),fh=new Vl,mh=new hu,gh=new Ql,rl=[],al=[],nl=new Float32Array(16),sl=new Float32Array(9),ol=new Float32Array(4);function Kr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=rl[a];if(n===void 0&&(n=new Float32Array(a),rl[a]=n),t!==0){r.toArray(n,0);for(let s=1,l=0;s!==t;++s)l+=i,e[s].toArray(n,l)}return n}function It(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ut(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function vn(e,t){let i=al[t];i===void 0&&(i=new Int32Array(t),al[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function tf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function rf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(It(i,t))return;e.uniform2fv(this.addr,t),Ut(i,t)}}function af(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(It(i,t))return;e.uniform3fv(this.addr,t),Ut(i,t)}}function nf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(It(i,t))return;e.uniform4fv(this.addr,t),Ut(i,t)}}function sf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(It(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ut(i,t)}else{if(It(i,r))return;ol.set(r),e.uniformMatrix2fv(this.addr,!1,ol),Ut(i,r)}}function of(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(It(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ut(i,t)}else{if(It(i,r))return;sl.set(r),e.uniformMatrix3fv(this.addr,!1,sl),Ut(i,r)}}function lf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(It(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ut(i,t)}else{if(It(i,r))return;nl.set(r),e.uniformMatrix4fv(this.addr,!1,nl),Ut(i,r)}}function hf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function uf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(It(i,t))return;e.uniform2iv(this.addr,t),Ut(i,t)}}function cf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(It(i,t))return;e.uniform3iv(this.addr,t),Ut(i,t)}}function df(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(It(i,t))return;e.uniform4iv(this.addr,t),Ut(i,t)}}function pf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function ff(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(It(i,t))return;e.uniform2uiv(this.addr,t),Ut(i,t)}}function mf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(It(i,t))return;e.uniform3uiv(this.addr,t),Ut(i,t)}}function gf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(It(i,t))return;e.uniform4uiv(this.addr,t),Ut(i,t)}}function _f(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(qs.compareFunction=i.isReversedDepthBuffer()?ao:ro,n=qs):n=ph,i.setTexture2D(t||n,a)}function vf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||mh,a)}function xf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||gh,a)}function Mf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||fh,a)}function Sf(e){switch(e){case 5126:return tf;case 35664:return rf;case 35665:return af;case 35666:return nf;case 35674:return sf;case 35675:return of;case 35676:return lf;case 5124:case 35670:return hf;case 35667:case 35671:return uf;case 35668:case 35672:return cf;case 35669:case 35673:return df;case 5125:return pf;case 36294:return ff;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Mf}}function yf(e,t){e.uniform1fv(this.addr,t)}function Ef(e,t){let i=Kr(t,this.size,2);e.uniform2fv(this.addr,i)}function bf(e,t){let i=Kr(t,this.size,3);e.uniform3fv(this.addr,i)}function Tf(e,t){let i=Kr(t,this.size,4);e.uniform4fv(this.addr,i)}function wf(e,t){let i=Kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Rf(e,t){let i=Kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Af(e,t){let i=Kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Cf(e,t){e.uniform1iv(this.addr,t)}function Pf(e,t){e.uniform2iv(this.addr,t)}function Lf(e,t){e.uniform3iv(this.addr,t)}function Df(e,t){e.uniform4iv(this.addr,t)}function If(e,t){e.uniform1uiv(this.addr,t)}function Uf(e,t){e.uniform2uiv(this.addr,t)}function Nf(e,t){e.uniform3uiv(this.addr,t)}function Of(e,t){e.uniform4uiv(this.addr,t)}function Ff(e,t,i){let r=this.cache,a=t.length,n=vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Ut(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=qs:s=ph;for(let l=0;l!==a;++l)i.setTexture2D(t[l]||s,n[l])}function Bf(e,t,i){let r=this.cache,a=t.length,n=vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Ut(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||mh,n[s])}function zf(e,t,i){let r=this.cache,a=t.length,n=vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Ut(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||gh,n[s])}function Hf(e,t,i){let r=this.cache,a=t.length,n=vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Ut(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||fh,n[s])}function Gf(e){switch(e){case 5126:return yf;case 35664:return Ef;case 35665:return bf;case 35666:return Tf;case 35674:return wf;case 35675:return Rf;case 35676:return Af;case 5124:case 35670:return Cf;case 35667:case 35671:return Pf;case 35668:case 35672:return Lf;case 35669:case 35673:return Df;case 5125:return If;case 36294:return Uf;case 36295:return Nf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Hf}}var Vf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sf(t.type)}},kf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gf(t.type)}},Wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Qn=/(\w+)(\])?(\[|\.)?/g;function ll(e,t){e.seq.push(t),e.map[t.id]=t}function Xf(e,t,i){let r=e.name,a=r.length;for(Qn.lastIndex=0;;){let n=Qn.exec(r),s=Qn.lastIndex,l=n[1],u=n[2]==="]",c=n[3];if(u&&(l=l|0),c===void 0||c==="["&&s+2===a){ll(i,c===void 0?new Vf(l,e,t):new kf(l,e,t));break}else{let f=i.map[l];f===void 0&&(f=new Wf(l),ll(i,f)),i=f}}}var nn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),l=e.getUniformLocation(t,s.name);Xf(s,l,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function hl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var jf=37297,qf=0;function Yf(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let l=s+1;r.push(`${l===t?">":" "} ${l}: ${i[s]}`)}return r.join(`
`)}var ul=new Ye;function Zf(e){Qe._getMatrix(ul,Qe.workingColorSpace,e);let t=`mat3( ${ul.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(e)){case hn:return[t,"LinearTransferOETF"];case ht:return[t,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function cl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Yf(e.getShaderSource(t),s)}else return a}function Kf(e,t){let i=Zf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Jf={[wl]:"Linear",[Rl]:"Reinhard",[Al]:"Cineon",[Ks]:"ACESFilmic",[Pl]:"AgX",[Ll]:"Neutral",[Cl]:"Custom"};function $f(e,t){let i=Jf[t];return i===void 0?(ze("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Za=new z;function Qf(){Qe.getLuminanceCoefficients(Za);let e=Za.x.toFixed(4),t=Za.y.toFixed(4),i=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function tm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function im(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,l=1;n.type===e.FLOAT_MAT2&&(l=2),n.type===e.FLOAT_MAT3&&(l=3),n.type===e.FLOAT_MAT4&&(l=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:l}}return i}function ua(e){return e!==""}function dl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(e){return e.replace(rm,nm)}var am=new Map;function nm(e,t){let i=Ze[t];if(i===void 0){let r=am.get(t);if(r!==void 0)i=Ze[r],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ys(i)}var sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(e){return e.replace(sm,om)}function om(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function ml(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var lm={[ca]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function hm(e){return lm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var um={[fr]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[mn]:"ENVMAP_TYPE_CUBE_UV"};function cm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":um[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var dm={[jr]:"ENVMAP_MODE_REFRACTION"};function pm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":dm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fm={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function mm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":fm[e.combine]||"ENVMAP_BLENDING_NONE"}function gm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function _m(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,l=i.fragmentShader,u=hm(i),c=cm(i),f=pm(i),m=mm(i),d=gm(i),_=em(i),S=tm(n),E=a.createProgram(),v,p,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(ua).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(ua).join(`
`),p.length>0&&(p+=`
`)):(v=[ml(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),p=[ml(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ci?"#define TONE_MAPPING":"",i.toneMapping!==Ci?Ze.tonemapping_pars_fragment:"",i.toneMapping!==Ci?$f("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Kf("linearToOutputTexel",i.outputColorSpace),Qf(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ua).join(`
`)),s=Ys(s),s=dl(s,i),s=pl(s,i),l=Ys(l),l=dl(l,i),l=pl(l,i),s=fl(s),l=fl(l),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,v=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",i.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let H=C+v+s,o=C+p+l,T=hl(a,a.VERTEX_SHADER,H),A=hl(a,a.FRAGMENT_SHADER,o);a.attachShader(E,T),a.attachShader(E,A),i.index0AttributeName!==void 0?a.bindAttribLocation(E,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(U){if(e.debug.checkShaderErrors){let F=a.getProgramInfoLog(E)||"",ee=a.getShaderInfoLog(T)||"",N=a.getShaderInfoLog(A)||"",W=F.trim(),re=ee.trim(),q=N.trim(),fe=!0,J=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(fe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,T,A);else{let $=cl(a,T,"vertex"),se=cl(a,A,"fragment");et("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+$+`
`+se)}else W!==""?ze("WebGLProgram: Program Info Log:",W):(re===""||q==="")&&(J=!1);J&&(U.diagnostics={runnable:fe,programLog:W,vertexShader:{log:re,prefix:v},fragmentShader:{log:q,prefix:p}})}a.deleteShader(T),a.deleteShader(A),h=new nn(a,E),g=im(a,E)}let h;this.getUniforms=function(){return h===void 0&&R(this),h};let g;this.getAttributes=function(){return g===void 0&&R(this),g};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=a.getProgramParameter(E,jf)),X},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qf++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=A,this}var vm=0,xm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Mm(e),t.set(e,i)),i}},Mm=class{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}};function Sm(e){return e===mr||e===sn||e===on}function ym(e,t,i,r,a,n){let s=new so,l=new xm,u=new Set,c=[],f=new Map,m=r.logarithmicDepthBuffer,d=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(h){return u.add(h),h===0?"uv":`uv${h}`}function E(h,g,X,U,F,ee){let N=U.fog,W=F.geometry,re=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?U.environment:null,q=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,fe=t.get(h.envMap||re,q),J=fe&&fe.mapping===mn?fe.image.height:null,$=_[h.type];h.precision!==null&&(d=r.getMaxPrecision(h.precision),d!==h.precision&&ze("WebGLProgram.getParameters:",h.precision,"not supported, using",d,"instead."));let se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xe=se!==void 0?se.length:0,Ce=0;W.morphAttributes.position!==void 0&&(Ce=1),W.morphAttributes.normal!==void 0&&(Ce=2),W.morphAttributes.color!==void 0&&(Ce=3);let ft,He,Q,le;if($){let Te=Ti[$];ft=Te.vertexShader,He=Te.fragmentShader}else{ft=h.vertexShader,He=h.fragmentShader;let Te=l.getVertexShaderStage(h),ge=l.getFragmentShaderStage(h);l.update(h,Te,ge),Q=Te.id,le=ge.id}let de=e.getRenderTarget(),Le=e.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Me=F.isBatchedMesh===!0,at=!!h.map,it=!!h.matcap,Oe=!!fe,vt=!!h.aoMap,Nt=!!h.lightMap,wt=!!h.bumpMap&&h.wireframe===!1,ct=!!h.normalMap,Ht=!!h.displacementMap,yt=!!h.emissiveMap,gt=!!h.metalnessMap,I=!!h.roughnessMap,Ot=h.anisotropy>0,Je=h.clearcoat>0,_t=h.dispersion>0,y=h.retroreflectivity>0,x=h.iridescence>0,D=h.sheen>0,Y=h.transmission>0,ae=Ot&&!!h.anisotropyMap,pe=Je&&!!h.clearcoatMap,Se=Je&&!!h.clearcoatNormalMap,O=Je&&!!h.clearcoatRoughnessMap,ue=x&&!!h.iridescenceMap,_e=x&&!!h.iridescenceThicknessMap,be=D&&!!h.sheenColorMap,ie=D&&!!h.sheenRoughnessMap,Ae=!!h.specularMap,Pe=!!h.specularColorMap,Be=!!h.specularIntensityMap,b=Y&&!!h.transmissionMap,w=Y&&!!h.thicknessMap,P=!!h.gradientMap,V=!!h.alphaMap,K=h.alphaTest>0,B=!!h.alphaHash,Z=!!h.extensions,te=Ci;h.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(te=e.toneMapping);let ne={shaderID:$,shaderType:h.type,shaderName:h.name,vertexShader:ft,fragmentShader:He,defines:h.defines,customVertexShaderID:Q,customFragmentShaderID:le,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:d,batching:Me,batchingColor:Me&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:de===null?e.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!h.alphaToCoverage,map:at,matcap:it,envMap:Oe,envMapMode:Oe&&fe.mapping,envMapCubeUVHeight:J,aoMap:vt,lightMap:Nt,bumpMap:wt,normalMap:ct,displacementMap:Ht,emissiveMap:yt,normalMapObjectSpace:ct&&h.normalMapType===Wh,normalMapTangentSpace:ct&&h.normalMapType===Vs,packedNormalMap:ct&&h.normalMapType===Vs&&Sm(h.normalMap.format),metalnessMap:gt,roughnessMap:I,anisotropy:Ot,anisotropyMap:ae,clearcoat:Je,clearcoatMap:pe,clearcoatNormalMap:Se,clearcoatRoughnessMap:O,dispersion:_t,retroreflection:y,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:D,sheenColorMap:be,sheenRoughnessMap:ie,specularMap:Ae,specularColorMap:Pe,specularIntensityMap:Be,transmission:Y,transmissionMap:b,thicknessMap:w,gradientMap:P,opaque:h.transparent===!1&&h.blending===da&&h.alphaToCoverage===!1,alphaMap:V,alphaTest:K,alphaHash:B,combine:h.combine,mapUv:at&&S(h.map.channel),aoMapUv:vt&&S(h.aoMap.channel),lightMapUv:Nt&&S(h.lightMap.channel),bumpMapUv:wt&&S(h.bumpMap.channel),normalMapUv:ct&&S(h.normalMap.channel),displacementMapUv:Ht&&S(h.displacementMap.channel),emissiveMapUv:yt&&S(h.emissiveMap.channel),metalnessMapUv:gt&&S(h.metalnessMap.channel),roughnessMapUv:I&&S(h.roughnessMap.channel),anisotropyMapUv:ae&&S(h.anisotropyMap.channel),clearcoatMapUv:pe&&S(h.clearcoatMap.channel),clearcoatNormalMapUv:Se&&S(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&S(h.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&S(h.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&S(h.iridescenceThicknessMap.channel),sheenColorMapUv:be&&S(h.sheenColorMap.channel),sheenRoughnessMapUv:ie&&S(h.sheenRoughnessMap.channel),specularMapUv:Ae&&S(h.specularMap.channel),specularColorMapUv:Pe&&S(h.specularColorMap.channel),specularIntensityMapUv:Be&&S(h.specularIntensityMap.channel),transmissionMapUv:b&&S(h.transmissionMap.channel),thicknessMapUv:w&&S(h.thicknessMap.channel),alphaMapUv:V&&S(h.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ct||Ot),vertexNormals:!!W.attributes.normal,vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(at||V),fog:!!N,useFog:h.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:h.wireframe===!1&&(h.flatShading===!0||W.attributes.normal===void 0&&ct===!1&&(h.isMeshLambertMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isMeshPhysicalMaterial)),sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:Ce,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&X.length>0,shadowMapType:e.shadowMap.type,toneMapping:te,decodeVideoTexture:at&&h.map.isVideoTexture===!0&&Qe.getTransfer(h.map.colorSpace)===ht,decodeVideoTextureEmissive:yt&&h.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(h.emissiveMap.colorSpace)===ht,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===mt,flipSided:h.side===ti,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:Z&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&h.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return ne.vertexUv1s=u.has(1),ne.vertexUv2s=u.has(2),ne.vertexUv3s=u.has(3),u.clear(),ne}function v(h){let g=[];if(h.shaderID?g.push(h.shaderID):(g.push(h.customVertexShaderID),g.push(h.customFragmentShaderID)),h.defines!==void 0)for(let X in h.defines)g.push(X),g.push(h.defines[X]);return h.isRawShaderMaterial===!1&&(p(g,h),C(g,h),g.push(e.outputColorSpace)),g.push(h.customProgramCacheKey),g.join()}function p(h,g){h.push(g.precision),h.push(g.outputColorSpace),h.push(g.envMapMode),h.push(g.envMapCubeUVHeight),h.push(g.mapUv),h.push(g.alphaMapUv),h.push(g.lightMapUv),h.push(g.aoMapUv),h.push(g.bumpMapUv),h.push(g.normalMapUv),h.push(g.displacementMapUv),h.push(g.emissiveMapUv),h.push(g.metalnessMapUv),h.push(g.roughnessMapUv),h.push(g.anisotropyMapUv),h.push(g.clearcoatMapUv),h.push(g.clearcoatNormalMapUv),h.push(g.clearcoatRoughnessMapUv),h.push(g.iridescenceMapUv),h.push(g.iridescenceThicknessMapUv),h.push(g.sheenColorMapUv),h.push(g.sheenRoughnessMapUv),h.push(g.specularMapUv),h.push(g.specularColorMapUv),h.push(g.specularIntensityMapUv),h.push(g.transmissionMapUv),h.push(g.thicknessMapUv),h.push(g.combine),h.push(g.fogExp2),h.push(g.sizeAttenuation),h.push(g.morphTargetsCount),h.push(g.morphAttributeCount),h.push(g.numSunLights),h.push(g.numDirLights),h.push(g.numPointLights),h.push(g.numSpotLights),h.push(g.numSpotLightMaps),h.push(g.numHemiLights),h.push(g.numRectAreaLights),h.push(g.numSunLightShadows),h.push(g.numDirLightShadows),h.push(g.numPointLightShadows),h.push(g.numSpotLightShadows),h.push(g.numSpotLightShadowsWithMaps),h.push(g.numLightProbes),h.push(g.shadowMapType),h.push(g.toneMapping),h.push(g.numClippingPlanes),h.push(g.numClipIntersection),h.push(g.depthPacking)}function C(h,g){s.disableAll(),g.instancing&&s.enable(0),g.instancingColor&&s.enable(1),g.instancingMorph&&s.enable(2),g.matcap&&s.enable(3),g.envMap&&s.enable(4),g.normalMapObjectSpace&&s.enable(5),g.normalMapTangentSpace&&s.enable(6),g.clearcoat&&s.enable(7),g.iridescence&&s.enable(8),g.alphaTest&&s.enable(9),g.vertexColors&&s.enable(10),g.vertexAlphas&&s.enable(11),g.vertexUv1s&&s.enable(12),g.vertexUv2s&&s.enable(13),g.vertexUv3s&&s.enable(14),g.vertexTangents&&s.enable(15),g.anisotropy&&s.enable(16),g.alphaHash&&s.enable(17),g.batching&&s.enable(18),g.dispersion&&s.enable(19),g.retroreflection&&s.enable(24),g.batchingColor&&s.enable(20),g.gradientMap&&s.enable(21),g.packedNormalMap&&s.enable(22),g.vertexNormals&&s.enable(23),h.push(s.mask),s.disableAll(),g.fog&&s.enable(0),g.useFog&&s.enable(1),g.flatShading&&s.enable(2),g.logarithmicDepthBuffer&&s.enable(3),g.reversedDepthBuffer&&s.enable(4),g.skinning&&s.enable(5),g.morphTargets&&s.enable(6),g.morphNormals&&s.enable(7),g.morphColors&&s.enable(8),g.premultipliedAlpha&&s.enable(9),g.shadowMapEnabled&&s.enable(10),g.doubleSided&&s.enable(11),g.flipSided&&s.enable(12),g.useDepthPacking&&s.enable(13),g.dithering&&s.enable(14),g.transmission&&s.enable(15),g.sheen&&s.enable(16),g.opaque&&s.enable(17),g.pointsUvs&&s.enable(18),g.decodeVideoTexture&&s.enable(19),g.decodeVideoTextureEmissive&&s.enable(20),g.alphaToCoverage&&s.enable(21),g.numLightProbeGrids>0&&s.enable(22),g.hasPositionAttribute&&s.enable(23),h.push(s.mask)}function H(h){let g=_[h.type],X;if(g){let U=Ti[g];X=Nu.clone(U.uniforms)}else X=h.uniforms;return X}function o(h,g){let X=f.get(g);return X!==void 0?++X.usedTimes:(X=new _m(e,g,h,a),c.push(X),f.set(g,X)),X}function T(h){if(--h.usedTimes===0){let g=c.indexOf(h);c[g]=c[c.length-1],c.pop(),f.delete(h.cacheKey),h.destroy()}}function A(h){l.remove(h)}function R(){l.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:H,acquireProgram:o,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function Em(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let l=e.get(s);return l===void 0&&(l={},e.set(s,l)),l}function r(s){e.delete(s)}function a(s,l,u){e.get(s)[l]=u}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function bm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function gl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function _l(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function l(d,_,S,E,v,p){let C=e[t];return C===void 0?(C={id:d.id,object:d,geometry:_,material:S,materialVariant:s(d),groupOrder:E,renderOrder:d.renderOrder,z:v,group:p},e[t]=C):(C.id=d.id,C.object=d,C.geometry=_,C.material=S,C.materialVariant=s(d),C.groupOrder=E,C.renderOrder=d.renderOrder,C.z=v,C.group=p),t++,C}function u(d,_,S,E,v,p,C){C.reversedDepth===!0&&(v=-v);let H=l(d,_,S,E,v,p);S.transmission>0?r.push(H):S.transparent===!0?a.push(H):i.push(H)}function c(d,_,S,E,v,p){let C=l(d,_,S,E,v,p);S.transmission>0?r.unshift(C):S.transparent===!0?a.unshift(C):i.unshift(C)}function f(d,_){i.length>1&&i.sort(d||bm),r.length>1&&r.sort(_||gl),a.length>1&&a.sort(_||gl)}function m(){for(let d=t,_=e.length;d<_;d++){let S=e[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:u,unshift:c,finish:m,sort:f}}function Tm(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new _l,e.set(r,[s])):a>=n.length?(s=new _l,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function wm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new z,color:new qe};break;case"SpotLight":i={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":i={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=i,i}}}function Rm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Am=0;function Cm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Pm(e){let t=new wm,i=Rm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new z);let a=new z,n=new Mt,s=new Mt;function l(c){let f=0,m=0,d=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,S=0,E=0,v=0,p=0,C=0,H=0,o=0,T=0,A=0,R=0,h=0,g=0,X=0;c.sort(Cm);for(let F=0,ee=c.length;F<ee;F++){let N=c[F],W=N.color,re=N.intensity,q=N.distance,fe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===mr?fe=N.shadow.map.texture:fe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=W.r*re,m+=W.g*re,d+=W.b*re;else if(N.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(N.sh.coefficients[J],re);X++}else if(N.isSunLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,se=i.get(N);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[S]=se,r.sunShadowMap[S]=fe;let Xe=$.getViewportCount();for(let Ce=0;Ce<Xe;Ce++)r.sunShadowMatrix[E+Ce]=$.getMatrix(Ce),r.sunShadowCascade[E+Ce]=$._cascadeData[Ce];E+=Xe,S++}r.sun[_]=J,_++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,se=i.get(N);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize=$.mapSize,r.directionalShadow[v]=se,r.directionalShadowMap[v]=fe,r.directionalShadowMatrix[v]=N.shadow.matrix,T++}r.directional[v]=J,v++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(W).multiplyScalar(re),J.distance=q,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,r.spot[C]=J;let $=N.shadow;if(N.map&&(r.spotLightMap[h]=N.map,h++,$.updateMatrices(N),N.castShadow&&g++),r.spotLightMatrix[C]=$.matrix,N.castShadow){let se=i.get(N);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize=$.mapSize,r.spotShadow[C]=se,r.spotShadowMap[C]=fe,R++}C++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(W).multiplyScalar(re),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),r.rectArea[H]=J,H++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let $=N.shadow,se=i.get(N);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize=$.mapSize,se.shadowCameraNear=$.camera.near,se.shadowCameraFar=$.camera.far,r.pointShadow[p]=se,r.pointShadowMap[p]=fe,r.pointShadowMatrix[p]=N.shadow.matrix,A++}r.point[p]=J,p++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(re),J.groundColor.copy(N.groundColor).multiplyScalar(re),r.hemi[o]=J,o++}}H>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=d;let U=r.hash;(U.sunLength!==_||U.directionalLength!==v||U.pointLength!==p||U.spotLength!==C||U.rectAreaLength!==H||U.hemiLength!==o||U.numSunShadows!==S||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==R||U.numSpotMaps!==h||U.numLightProbes!==X)&&(r.sun.length=_,r.directional.length=v,r.spot.length=C,r.rectArea.length=H,r.point.length=p,r.hemi.length=o,r.sunShadow.length=S,r.sunShadowMap.length=S,r.sunShadowMatrix.length=E,r.sunShadowCascade.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+h-g,r.spotLightMap.length=h,r.numSpotLightShadowsWithMaps=g,r.numLightProbes=X,U.sunLength=_,U.directionalLength=v,U.pointLength=p,U.spotLength=C,U.rectAreaLength=H,U.hemiLength=o,U.numSunShadows=S,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=R,U.numSpotMaps=h,U.numLightProbes=X,r.version=Am++)}function u(c,f){let m=0,d=0,_=0,S=0,E=0,v=0,p=f.matrixWorldInverse;for(let C=0,H=c.length;C<H;C++){let o=c[C];if(o.isSunLight){let T=r.sun[m];T.direction.setFromMatrixPosition(o.matrixWorld),T.direction.transformDirection(p),m++}else if(o.isDirectionalLight){let T=r.directional[d];T.direction.setFromMatrixPosition(o.matrixWorld),a.setFromMatrixPosition(o.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),d++}else if(o.isSpotLight){let T=r.spot[S];T.position.setFromMatrixPosition(o.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(o.matrixWorld),a.setFromMatrixPosition(o.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),S++}else if(o.isRectAreaLight){let T=r.rectArea[E];T.position.setFromMatrixPosition(o.matrixWorld),T.position.applyMatrix4(p),s.identity(),n.copy(o.matrixWorld),n.premultiply(p),s.extractRotation(n),T.halfWidth.set(o.width*.5,0,0),T.halfHeight.set(0,o.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),E++}else if(o.isPointLight){let T=r.point[_];T.position.setFromMatrixPosition(o.matrixWorld),T.position.applyMatrix4(p),_++}else if(o.isHemisphereLight){let T=r.hemi[v];T.direction.setFromMatrixPosition(o.matrixWorld),T.direction.transformDirection(p),v++}}}return{setup:l,setupView:u,state:r}}function vl(e){let t=new Pm(e),i=[],r=[],a=[];function n(d){m.camera=d,i.length=0,r.length=0,a.length=0}function s(d){i.push(d)}function l(d){r.push(d)}function u(d){a.push(d)}function c(){t.setup(i)}function f(d){t.setupView(i,d)}let m={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:m,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:l,pushLightProbeGrid:u}}function Lm(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),l;return s===void 0?(l=new vl(e),t.set(a,[l])):n>=s.length?(l=new vl(e),s.push(l)):l=s[n],l}function r(){t=new WeakMap}return{get:i,dispose:r}}var Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
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
}`,Um=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Nm=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],xl=new Mt,la=new z,es=new z;function Om(e,t,i){let r=new oo,a=new Ue,n=new Ue,s=new Et,l=new Hu,u=new Gu,c={},f=i.maxTextureSize,m={[pr]:ti,[ti]:pr,[mt]:mt},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Dm,fragmentShader:Im}),_=d.clone();_.defines.HORIZONTAL_PASS=1;let S=new ii;S.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Tt(S,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca;let p=this.type;this.render=function(A,R,h){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===Sh&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ca);let g=e.getRenderTarget(),X=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Wi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let ee=p!==this.type;ee&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=A.length;N<W;N++){let re=A[N],q=re.shadow;if(q===void 0){ze("WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);let fe=q.getFrameExtents();a.multiply(fe),n.copy(q.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(n.x=Math.floor(f/fe.x),a.x=n.x*fe.x,q.mapSize.x=n.x),a.y>f&&(n.y=Math.floor(f/fe.y),a.y=n.y*fe.y,q.mapSize.y=n.y));let J=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=J,q.map===null||ee===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ha){if(re.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new xi(a.x,a.y,{format:mr,type:Li,minFilter:zt,magFilter:zt,generateMipmaps:!1}),q.map.texture.name=re.name+".shadowMap",q.map.depthTexture=new _a(a.x,a.y,Ri),q.map.depthTexture.name=re.name+".shadowMapDepth",q.map.depthTexture.format=ji,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Bt,q.map.depthTexture.magFilter=Bt}else re.isPointLight?(q.map=new dh(a.x),q.map.depthTexture=new Du(a.x,Pi)):(q.map=new xi(a.x,a.y),q.map.depthTexture=new _a(a.x,a.y,Pi)),q.map.depthTexture.name=re.name+".shadowMap",q.map.depthTexture.format=ji,this.type===ca?(q.map.depthTexture.compareFunction=J?ao:ro,q.map.depthTexture.minFilter=zt,q.map.depthTexture.magFilter=zt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Bt,q.map.depthTexture.magFilter=Bt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);let $=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();re.isPointLight!==!0&&q.updateMatrices(re,h);for(let se=0;se<$;se++){let Xe=q.getCamera(se);if(re.isPointLight){let Ce=q.camera,ft=q.matrix,He=re.distance||Ce.far;He!==Ce.far&&(Ce.far=He,Ce.updateProjectionMatrix()),la.setFromMatrixPosition(re.matrixWorld),Ce.position.copy(la),es.copy(Ce.position),es.add(Um[se]),Ce.up.copy(Nm[se]),Ce.lookAt(es),Ce.updateMatrixWorld(),ft.makeTranslation(-la.x,-la.y,-la.z),xl.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),q._frustum.setFromProjectionMatrix(xl,Ce.coordinateSystem,Ce.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,se),e.clear();else{se===0&&(e.setRenderTarget(q.map),e.clear());let Ce=q.getViewport(se);s.set(n.x*Ce.x,n.y*Ce.y,n.x*Ce.z,n.y*Ce.w),F.viewport(s)}r=q.getFrustum(se),o(R,h,Xe,re,this.type)}q.isPointLightShadow!==!0&&this.type===ha&&C(q,h),q.needsUpdate=!1}p=this.type,v.needsUpdate=!1,e.setRenderTarget(g,X,U)};function C(A,R){let h=t.update(E);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null?A.mapPass=new xi(a.x,a.y,{format:mr,type:Li}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,h,d,E,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value.set(A.map.width,A.map.height),_.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,h,_,E,null)}function H(A,R,h,g){let X=null,U=h.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)X=U;else if(X=h.isPointLight===!0?u:l,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=X.uuid,ee=R.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let W=N[ee];W===void 0&&(W=X.clone(),N[ee]=W,R.addEventListener("dispose",T)),X=W}if(X.visible=R.visible,X.wireframe=R.wireframe,g===ha?X.side=R.shadowSide!==null?R.shadowSide:R.side:X.side=R.shadowSide!==null?R.shadowSide:m[R.side],X.alphaMap=R.alphaMap,X.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,X.map=R.map,X.clipShadows=R.clipShadows,X.clippingPlanes=R.clippingPlanes,X.clipIntersection=R.clipIntersection,X.displacementMap=R.displacementMap,X.displacementScale=R.displacementScale,X.displacementBias=R.displacementBias,X.wireframeLinewidth=R.wireframeLinewidth,X.linewidth=R.linewidth,h.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let F=e.properties.get(X);F.light=h}return X}function o(A,R,h,g,X){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&X===ha)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,A.matrixWorld);let F=t.update(A),ee=A.material;if(Array.isArray(ee)){let N=F.groups;for(let W=0,re=N.length;W<re;W++){let q=N[W],fe=ee[q.materialIndex];if(fe&&fe.visible){let J=H(A,fe,g,X);A.onBeforeShadow(e,A,R,h,F,J,q),e.renderBufferDirect(h,null,F,J,A,q),A.onAfterShadow(e,A,R,h,F,J,q)}}}else if(ee.visible){let N=H(A,ee,g,X);A.onBeforeShadow(e,A,R,h,F,N,null),e.renderBufferDirect(h,null,F,N,A,null),A.onAfterShadow(e,A,R,h,F,N,null)}}let U=A.children;for(let F=0,ee=U.length;F<ee;F++)o(U[F],R,h,g,X)}function T(A){A.target.removeEventListener("dispose",T);for(let R in c){let h=c[R],g=A.target.uuid;g in h&&(h[g].dispose(),delete h[g])}}}function Fm(e,t){function i(){let w=!1,P=new Et,V=null,K=new Et(0,0,0,0);return{setMask:function(B){V!==B&&!w&&(e.colorMask(B,B,B,B),V=B)},setLocked:function(B){w=B},setClear:function(B,Z,te,ne,Te){Te===!0&&(B*=ne,Z*=ne,te*=ne),P.set(B,Z,te,ne),K.equals(P)===!1&&(e.clearColor(B,Z,te,ne),K.copy(P))},reset:function(){w=!1,V=null,K.set(-1,0,0,0)}}}function r(){let w=!1,P=!1,V=null,K=null,B=null;return{setReversed:function(Z){if(P!==Z){let te=t.get("EXT_clip_control");Z?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),P=Z;let ne=B;B=null,this.setClear(ne)}},getReversed:function(){return P},setTest:function(Z){Z?de(e.DEPTH_TEST):Le(e.DEPTH_TEST)},setMask:function(Z){V!==Z&&!w&&(e.depthMask(Z),V=Z)},setFunc:function(Z){if(P&&(Z=tu[Z]),K!==Z){switch(Z){case rs:e.depthFunc(e.NEVER);break;case as:e.depthFunc(e.ALWAYS);break;case ns:e.depthFunc(e.LESS);break;case pa:e.depthFunc(e.LEQUAL);break;case ss:e.depthFunc(e.EQUAL);break;case os:e.depthFunc(e.GEQUAL);break;case ls:e.depthFunc(e.GREATER);break;case hs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=Z}},setLocked:function(Z){w=Z},setClear:function(Z){B!==Z&&(B=Z,P&&(Z=1-Z),e.clearDepth(Z))},reset:function(){w=!1,V=null,K=null,B=null,P=!1}}}function a(){let w=!1,P=null,V=null,K=null,B=null,Z=null,te=null,ne=null,Te=null;return{setTest:function(ge){w||(ge?de(e.STENCIL_TEST):Le(e.STENCIL_TEST))},setMask:function(ge){P!==ge&&!w&&(e.stencilMask(ge),P=ge)},setFunc:function(ge,$e,dt){(V!==ge||K!==$e||B!==dt)&&(e.stencilFunc(ge,$e,dt),V=ge,K=$e,B=dt)},setOp:function(ge,$e,dt){(Z!==ge||te!==$e||ne!==dt)&&(e.stencilOp(ge,$e,dt),Z=ge,te=$e,ne=dt)},setLocked:function(ge){w=ge},setClear:function(ge){Te!==ge&&(e.clearStencil(ge),Te=ge)},reset:function(){w=!1,P=null,V=null,K=null,B=null,Z=null,te=null,ne=null,Te=null}}}let n=new i,s=new r,l=new a,u=new WeakMap,c=new WeakMap,f={},m={},d={},_=new WeakMap,S=[],E=null,v=!1,p=null,C=null,H=null,o=null,T=null,A=null,R=null,h=new qe(0,0,0),g=0,X=!1,U=null,F=null,ee=null,N=null,W=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,fe=0,J=e.getParameter(e.VERSION);J.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=fe>=1):J.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=fe>=2);let $=null,se={},Xe=e.getParameter(e.SCISSOR_BOX),Ce=e.getParameter(e.VIEWPORT),ft=new Et().fromArray(Xe),He=new Et().fromArray(Ce);function Q(w,P,V,K){let B=new Uint8Array(4),Z=e.createTexture();e.bindTexture(w,Z),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let te=0;te<V;te++)w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY?e.texImage3D(P,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,B):e.texImage2D(P+te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,B);return Z}let le={};le[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),l.setClear(0),de(e.DEPTH_TEST),s.setFunc(pa),wt(!1),ct(po),de(e.CULL_FACE),vt(Wi);function de(w){f[w]!==!0&&(e.enable(w),f[w]=!0)}function Le(w){f[w]!==!1&&(e.disable(w),f[w]=!1)}function Ie(w,P){return d[w]!==P?(e.bindFramebuffer(w,P),d[w]=P,w===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=P),w===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=P),!0):!1}function Me(w,P){let V=S,K=!1;if(w){V=_.get(P),V===void 0&&(V=[],_.set(P,V));let B=w.textures;if(V.length!==B.length||V[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,te=B.length;Z<te;Z++)V[Z]=e.COLOR_ATTACHMENT0+Z;V.length=B.length,K=!0}}else V[0]!==e.BACK&&(V[0]=e.BACK,K=!0);K&&e.drawBuffers(V)}function at(w){return E!==w?(e.useProgram(w),E=w,!0):!1}let it={[Ir]:e.FUNC_ADD,[Eh]:e.FUNC_SUBTRACT,[bh]:e.FUNC_REVERSE_SUBTRACT};it[Th]=e.MIN,it[wh]=e.MAX;let Oe={[Rh]:e.ZERO,[Ah]:e.ONE,[Ch]:e.SRC_COLOR,[El]:e.SRC_ALPHA,[Nh]:e.SRC_ALPHA_SATURATE,[Ih]:e.DST_COLOR,[Lh]:e.DST_ALPHA,[Ph]:e.ONE_MINUS_SRC_COLOR,[bl]:e.ONE_MINUS_SRC_ALPHA,[Uh]:e.ONE_MINUS_DST_COLOR,[Dh]:e.ONE_MINUS_DST_ALPHA,[Oh]:e.CONSTANT_COLOR,[Fh]:e.ONE_MINUS_CONSTANT_COLOR,[Bh]:e.CONSTANT_ALPHA,[zh]:e.ONE_MINUS_CONSTANT_ALPHA};function vt(w,P,V,K,B,Z,te,ne,Te,ge){if(w===Wi){v===!0&&(Le(e.BLEND),v=!1);return}if(v===!1&&(de(e.BLEND),v=!0),w!==yh){if(w!==p||ge!==X){if((C!==Ir||T!==Ir)&&(e.blendEquation(e.FUNC_ADD),C=Ir,T=Ir),ge)switch(w){case da:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case is:e.blendFunc(e.ONE,e.ONE);break;case fo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:et("WebGLState: Invalid blending: ",w);break}else switch(w){case da:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case is:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fo:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mo:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",w);break}H=null,o=null,A=null,R=null,h.set(0,0,0),g=0,p=w,X=ge}return}B=B||P,Z=Z||V,te=te||K,(P!==C||B!==T)&&(e.blendEquationSeparate(it[P],it[B]),C=P,T=B),(V!==H||K!==o||Z!==A||te!==R)&&(e.blendFuncSeparate(Oe[V],Oe[K],Oe[Z],Oe[te]),H=V,o=K,A=Z,R=te),(ne.equals(h)===!1||Te!==g)&&(e.blendColor(ne.r,ne.g,ne.b,Te),h.copy(ne),g=Te),p=w,X=!1}function Nt(w,P){w.side===mt?Le(e.CULL_FACE):de(e.CULL_FACE);let V=w.side===ti;P&&(V=!V),wt(V),w.blending===da&&w.transparent===!1?vt(Wi):vt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),n.setMask(w.colorWrite);let K=w.stencilWrite;l.setTest(K),K&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),yt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):Le(e.SAMPLE_ALPHA_TO_COVERAGE)}function wt(w){U!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),U=w)}function ct(w){w!==xh?(de(e.CULL_FACE),w!==F&&(w===po?e.cullFace(e.BACK):w===Mh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Le(e.CULL_FACE),F=w}function Ht(w){w!==ee&&(q&&e.lineWidth(w),ee=w)}function yt(w,P,V){w?(de(e.POLYGON_OFFSET_FILL),(N!==P||W!==V)&&(N=P,W=V,s.getReversed()&&(P=-P),e.polygonOffset(P,V))):Le(e.POLYGON_OFFSET_FILL)}function gt(w){w?de(e.SCISSOR_TEST):Le(e.SCISSOR_TEST)}function I(w){w===void 0&&(w=e.TEXTURE0+re-1),$!==w&&(e.activeTexture(w),$=w)}function Ot(w,P,V){V===void 0&&($===null?V=e.TEXTURE0+re-1:V=$);let K=se[V];K===void 0&&(K={type:void 0,texture:void 0},se[V]=K),(K.type!==w||K.texture!==P)&&($!==V&&(e.activeTexture(V),$=V),e.bindTexture(w,P||le[w]),K.type=w,K.texture=P)}function Je(){let w=se[$];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _t(){try{e.compressedTexImage2D(...arguments)}catch(w){et("WebGLState:",w)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(w){et("WebGLState:",w)}}function x(){try{e.texSubImage2D(...arguments)}catch(w){et("WebGLState:",w)}}function D(){try{e.texSubImage3D(...arguments)}catch(w){et("WebGLState:",w)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(w){et("WebGLState:",w)}}function ae(){try{e.compressedTexSubImage3D(...arguments)}catch(w){et("WebGLState:",w)}}function pe(){try{e.texStorage2D(...arguments)}catch(w){et("WebGLState:",w)}}function Se(){try{e.texStorage3D(...arguments)}catch(w){et("WebGLState:",w)}}function O(){try{e.texImage2D(...arguments)}catch(w){et("WebGLState:",w)}}function ue(){try{e.texImage3D(...arguments)}catch(w){et("WebGLState:",w)}}function _e(w){return m[w]!==void 0?m[w]:e.getParameter(w)}function be(w,P){m[w]!==P&&(e.pixelStorei(w,P),m[w]=P)}function ie(w){ft.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),ft.copy(w))}function Ae(w){He.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),He.copy(w))}function Pe(w,P){let V=c.get(P);V===void 0&&(V=new WeakMap,c.set(P,V));let K=V.get(w);K===void 0&&(K=e.getUniformBlockIndex(P,w.name),V.set(w,K))}function Be(w,P){let V=c.get(P).get(w);u.get(P)!==V&&(e.uniformBlockBinding(P,V,w.__bindingPointIndex),u.set(P,V))}function b(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},m={},$=null,se={},d={},_=new WeakMap,S=[],E=null,v=!1,p=null,C=null,H=null,o=null,T=null,A=null,R=null,h=new qe(0,0,0),g=0,X=!1,U=null,F=null,ee=null,N=null,W=null,ft.set(0,0,e.canvas.width,e.canvas.height),He.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),l.reset()}return{buffers:{color:n,depth:s,stencil:l},enable:de,disable:Le,bindFramebuffer:Ie,drawBuffers:Me,useProgram:at,setBlending:vt,setMaterial:Nt,setFlipSided:wt,setCullFace:ct,setLineWidth:Ht,setPolygonOffset:yt,setScissorTest:gt,activeTexture:I,bindTexture:Ot,unbindTexture:Je,compressedTexImage2D:_t,compressedTexImage3D:y,texImage2D:O,texImage3D:ue,pixelStorei:be,getParameter:_e,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:pe,texStorage3D:Se,texSubImage2D:x,texSubImage3D:D,compressedTexSubImage2D:Y,compressedTexSubImage3D:ae,scissor:ie,viewport:Ae,reset:b}}function Bm(e,t,i,r,a,n,s){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,f=new WeakMap,m=new Set,d,_=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(y,x){return S?new OffscreenCanvas(y,x):un("canvas")}function v(y,x,D){let Y=1,ae=_t(y);if((ae.width>D||ae.height>D)&&(Y=D/Math.max(ae.width,ae.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let pe=Math.floor(Y*ae.width),Se=Math.floor(Y*ae.height);d===void 0&&(d=E(pe,Se));let O=x?E(pe,Se):d;return O.width=pe,O.height=Se,O.getContext("2d").drawImage(y,0,0,pe,Se),ze("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+pe+"x"+Se+")."),O}else return"data"in y&&ze("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),y;return y}function p(y){return y.generateMipmaps}function C(y){e.generateMipmap(y)}function H(y){return y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?e.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function o(y,x,D,Y,ae,pe=!1){if(y!==null){if(e[y]!==void 0)return e[y];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Se;Y&&(Se=t.get("EXT_texture_norm16"),Se||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=x;if(x===e.RED&&(D===e.FLOAT&&(O=e.R32F),D===e.HALF_FLOAT&&(O=e.R16F),D===e.UNSIGNED_BYTE&&(O=e.R8),D===e.UNSIGNED_SHORT&&Se&&(O=Se.R16_EXT),D===e.SHORT&&Se&&(O=Se.R16_SNORM_EXT)),x===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.R8UI),D===e.UNSIGNED_SHORT&&(O=e.R16UI),D===e.UNSIGNED_INT&&(O=e.R32UI),D===e.BYTE&&(O=e.R8I),D===e.SHORT&&(O=e.R16I),D===e.INT&&(O=e.R32I)),x===e.RG&&(D===e.FLOAT&&(O=e.RG32F),D===e.HALF_FLOAT&&(O=e.RG16F),D===e.UNSIGNED_BYTE&&(O=e.RG8),D===e.UNSIGNED_SHORT&&Se&&(O=Se.RG16_EXT),D===e.SHORT&&Se&&(O=Se.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.RG8UI),D===e.UNSIGNED_SHORT&&(O=e.RG16UI),D===e.UNSIGNED_INT&&(O=e.RG32UI),D===e.BYTE&&(O=e.RG8I),D===e.SHORT&&(O=e.RG16I),D===e.INT&&(O=e.RG32I)),x===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.RGB8UI),D===e.UNSIGNED_SHORT&&(O=e.RGB16UI),D===e.UNSIGNED_INT&&(O=e.RGB32UI),D===e.BYTE&&(O=e.RGB8I),D===e.SHORT&&(O=e.RGB16I),D===e.INT&&(O=e.RGB32I)),x===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),D===e.UNSIGNED_INT&&(O=e.RGBA32UI),D===e.BYTE&&(O=e.RGBA8I),D===e.SHORT&&(O=e.RGBA16I),D===e.INT&&(O=e.RGBA32I)),x===e.RGB&&(D===e.UNSIGNED_SHORT&&Se&&(O=Se.RGB16_EXT),D===e.SHORT&&Se&&(O=Se.RGB16_SNORM_EXT),D===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),D===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),x===e.RGBA){let ue=pe?hn:Qe.getTransfer(ae);D===e.FLOAT&&(O=e.RGBA32F),D===e.HALF_FLOAT&&(O=e.RGBA16F),D===e.UNSIGNED_BYTE&&(O=ue===ht?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT&&Se&&(O=Se.RGBA16_EXT),D===e.SHORT&&Se&&(O=Se.RGBA16_SNORM_EXT),D===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function T(y,x){let D;return y?x===null||x===Pi||x===ma?D=e.DEPTH24_STENCIL8:x===Ri?D=e.DEPTH32F_STENCIL8:x===fa&&(D=e.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pi||x===ma?D=e.DEPTH_COMPONENT24:x===Ri?D=e.DEPTH_COMPONENT32F:x===fa&&(D=e.DEPTH_COMPONENT16),D}function A(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==zt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function R(y){let x=y.target;x.removeEventListener("dispose",R),g(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&m.delete(x)}function h(y){let x=y.target;x.removeEventListener("dispose",h),U(x)}function g(y){let x=r.get(y);if(x.__webglInit===void 0)return;let D=y.source,Y=_.get(D);if(Y){let ae=Y[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&X(y),Object.keys(Y).length===0&&_.delete(D)}r.remove(y)}function X(y){let x=r.get(y);e.deleteTexture(x.__webglTexture);let D=y.source,Y=_.get(D);delete Y[x.__cacheKey],s.memory.textures--}function U(y){let x=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ae=0;ae<x.__webglFramebuffer[Y].length;ae++)e.deleteFramebuffer(x.__webglFramebuffer[Y][ae]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=y.textures;for(let Y=0,ae=D.length;Y<ae;Y++){let pe=r.get(D[Y]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(D[Y])}r.remove(y)}let F=0;function ee(){F=0}function N(){return F}function W(y){F=y}function re(){let y=F;return y>=a.maxTextures&&ze("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,y}function q(y){let x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function fe(y,x){let D=r.get(y);if(y.isVideoTexture&&Ot(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&D.__version!==y.version){let Y=y.image;if(Y===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(D,y,x);return}}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+x)}function J(y,x){let D=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Le(D,y,x);return}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+x)}function $(y,x){let D=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Le(D,y,x);return}i.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+x)}function se(y,x){let D=r.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&D.__version!==y.version){Ie(D,y,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+x)}let Xe={[us]:e.REPEAT,[ki]:e.CLAMP_TO_EDGE,[cs]:e.MIRRORED_REPEAT},Ce={[Bt]:e.NEAREST,[Vh]:e.NEAREST_MIPMAP_NEAREST,[Sa]:e.NEAREST_MIPMAP_LINEAR,[zt]:e.LINEAR,[yn]:e.LINEAR_MIPMAP_NEAREST,[ur]:e.LINEAR_MIPMAP_LINEAR},ft={[jh]:e.NEVER,[Jh]:e.ALWAYS,[qh]:e.LESS,[ro]:e.LEQUAL,[Yh]:e.EQUAL,[ao]:e.GEQUAL,[Zh]:e.GREATER,[Kh]:e.NOTEQUAL};function He(y,x){if(x.type===Ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===zt||x.magFilter===yn||x.magFilter===Sa||x.magFilter===ur||x.minFilter===zt||x.minFilter===yn||x.minFilter===Sa||x.minFilter===ur)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,Xe[x.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,Xe[x.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,Xe[x.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,Ce[x.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==Sa&&x.minFilter!==ur||x.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function Q(y,x){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",R));let Y=x.source,ae=_.get(Y);ae===void 0&&(ae={},_.set(Y,ae));let pe=q(x);if(pe!==y.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,D=!0),ae[pe].usedTimes++;let Se=ae[y.__cacheKey];Se!==void 0&&(ae[y.__cacheKey].usedTimes--,Se.usedTimes===0&&X(x)),y.__cacheKey=pe,y.__webglTexture=ae[pe].texture}return D}function le(y,x,D){return Math.floor(Math.floor(y/D)/x)}function de(y,x,D,Y){let ae=y.updateRanges;if(ae.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,D,Y,x.data);else{ae.sort((_e,be)=>_e.start-be.start);let pe=0;for(let _e=1;_e<ae.length;_e++){let be=ae[pe],ie=ae[_e],Ae=be.start+be.count,Pe=le(ie.start,x.width,4),Be=le(be.start,x.width,4);ie.start<=Ae+1&&Pe===Be&&le(ie.start+ie.count-1,x.width,4)===Pe?be.count=Math.max(be.count,ie.start+ie.count-be.start):(++pe,ae[pe]=ie)}ae.length=pe+1;let Se=i.getParameter(e.UNPACK_ROW_LENGTH),O=i.getParameter(e.UNPACK_SKIP_PIXELS),ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let _e=0,be=ae.length;_e<be;_e++){let ie=ae[_e],Ae=Math.floor(ie.start/4),Pe=Math.ceil(ie.count/4),Be=Ae%x.width,b=Math.floor(Ae/x.width),w=Pe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(e.UNPACK_SKIP_ROWS,b),i.texSubImage2D(e.TEXTURE_2D,0,Be,b,w,1,D,Y,x.data)}y.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Se),i.pixelStorei(e.UNPACK_SKIP_PIXELS,O),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function Le(y,x,D){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);let ae=Q(y,x),pe=x.source;i.bindTexture(Y,y.__webglTexture,e.TEXTURE0+D);let Se=r.get(pe);if(pe.version!==Se.__version||ae===!0){if(i.activeTexture(e.TEXTURE0+D),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let P=Qe.getPrimaries(Qe.workingColorSpace),V=x.colorSpace===tr?null:Qe.getPrimaries(x.colorSpace),K=x.colorSpace===tr||P===V?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let O=v(x.image,!1,a.maxTextureSize);O=Je(x,O);let ue=n.convert(x.format,x.colorSpace),_e=n.convert(x.type),be=o(x.internalFormat,ue,_e,x.normalized,x.colorSpace,x.isVideoTexture);He(Y,x);let ie,Ae=x.mipmaps,Pe=x.isVideoTexture!==!0,Be=Se.__version===void 0||ae===!0,b=pe.dataReady,w=A(x,O);if(x.isDepthTexture)be=T(x.format===cr,x.type),Be&&(Pe?i.texStorage2D(e.TEXTURE_2D,1,be,O.width,O.height):i.texImage2D(e.TEXTURE_2D,0,be,O.width,O.height,0,ue,_e,null));else if(x.isDataTexture)if(Ae.length>0){Pe&&Be&&i.texStorage2D(e.TEXTURE_2D,w,be,Ae[0].width,Ae[0].height);for(let P=0,V=Ae.length;P<V;P++)ie=Ae[P],Pe?b&&i.texSubImage2D(e.TEXTURE_2D,P,0,0,ie.width,ie.height,ue,_e,ie.data):i.texImage2D(e.TEXTURE_2D,P,be,ie.width,ie.height,0,ue,_e,ie.data);x.generateMipmaps=!1}else Pe?(Be&&i.texStorage2D(e.TEXTURE_2D,w,be,O.width,O.height),b&&de(x,O,ue,_e)):i.texImage2D(e.TEXTURE_2D,0,be,O.width,O.height,0,ue,_e,O.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,w,be,Ae[0].width,Ae[0].height,O.depth);for(let P=0,V=Ae.length;P<V;P++)if(ie=Ae[P],x.format!==vi)if(ue!==null)if(Pe){if(b)if(x.layerUpdates.size>0){let K=Jo(ie.width,ie.height,x.format,x.type);for(let B of x.layerUpdates){let Z=ie.data.subarray(B*K/ie.data.BYTES_PER_ELEMENT,(B+1)*K/ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,B,ie.width,ie.height,1,ue,Z)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,ie.width,ie.height,O.depth,ue,ie.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,P,be,ie.width,ie.height,O.depth,0,ie.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?b&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,ie.width,ie.height,O.depth,ue,_e,ie.data):i.texImage3D(e.TEXTURE_2D_ARRAY,P,be,ie.width,ie.height,O.depth,0,ue,_e,ie.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Pe&&Be&&i.texStorage2D(e.TEXTURE_2D,w,be,Ae[0].width,Ae[0].height);for(let P=0,V=Ae.length;P<V;P++)ie=Ae[P],x.format!==vi?ue!==null?Pe?b&&i.compressedTexSubImage2D(e.TEXTURE_2D,P,0,0,ie.width,ie.height,ue,ie.data):i.compressedTexImage2D(e.TEXTURE_2D,P,be,ie.width,ie.height,0,ie.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?b&&i.texSubImage2D(e.TEXTURE_2D,P,0,0,ie.width,ie.height,ue,_e,ie.data):i.texImage2D(e.TEXTURE_2D,P,be,ie.width,ie.height,0,ue,_e,ie.data)}else if(x.isDataArrayTexture)if(Pe){if(Be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,w,be,O.width,O.height,O.depth),b)if(x.layerUpdates.size>0){let P=Jo(O.width,O.height,x.format,x.type);for(let V of x.layerUpdates){let K=O.data.subarray(V*P/O.data.BYTES_PER_ELEMENT,(V+1)*P/O.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,V,O.width,O.height,1,ue,_e,K)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ue,_e,O.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,be,O.width,O.height,O.depth,0,ue,_e,O.data);else if(x.isData3DTexture)Pe?(Be&&i.texStorage3D(e.TEXTURE_3D,w,be,O.width,O.height,O.depth),b&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ue,_e,O.data)):i.texImage3D(e.TEXTURE_3D,0,be,O.width,O.height,O.depth,0,ue,_e,O.data);else if(x.isFramebufferTexture){if(Be)if(Pe)i.texStorage2D(e.TEXTURE_2D,w,be,O.width,O.height);else{let P=O.width,V=O.height;for(let K=0;K<w;K++)i.texImage2D(e.TEXTURE_2D,K,be,P,V,0,ue,_e,null),P>>=1,V>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let P=e.canvas;if(P.hasAttribute("layoutsubtree")||P.setAttribute("layoutsubtree","true"),O.parentNode!==P){P.appendChild(O),m.add(x),P.onpaint=V=>{let K=V.changedElements;for(let B of m)K.includes(B.image)&&(B.needsUpdate=!0)},P.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,O);else{let V=e.RGBA,K=e.RGBA,B=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,V,K,B,O)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&Be){let P=_t(Ae[0]);i.texStorage2D(e.TEXTURE_2D,w,be,P.width,P.height)}for(let P=0,V=Ae.length;P<V;P++)ie=Ae[P],Pe?b&&i.texSubImage2D(e.TEXTURE_2D,P,0,0,ue,_e,ie):i.texImage2D(e.TEXTURE_2D,P,be,ue,_e,ie);x.generateMipmaps=!1}else if(Pe){if(Be){let P=_t(O);i.texStorage2D(e.TEXTURE_2D,w,be,P.width,P.height)}b&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,_e,O)}else i.texImage2D(e.TEXTURE_2D,0,be,ue,_e,O);p(x)&&C(Y),Se.__version=pe.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Ie(y,x,D){if(x.image.length!==6)return;let Y=Q(y,x),ae=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+D);let pe=r.get(ae);if(ae.version!==pe.__version||Y===!0){i.activeTexture(e.TEXTURE0+D);let Se=Qe.getPrimaries(Qe.workingColorSpace),O=x.colorSpace===tr?null:Qe.getPrimaries(x.colorSpace),ue=x.colorSpace===tr||Se===O?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,be=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let Z=0;Z<6;Z++)!_e&&!be?ie[Z]=v(x.image[Z],!0,a.maxCubemapSize):ie[Z]=be?x.image[Z].image:x.image[Z],ie[Z]=Je(x,ie[Z]);let Ae=ie[0],Pe=n.convert(x.format,x.colorSpace),Be=n.convert(x.type),b=o(x.internalFormat,Pe,Be,x.normalized,x.colorSpace),w=x.isVideoTexture!==!0,P=pe.__version===void 0||Y===!0,V=ae.dataReady,K=A(x,Ae);He(e.TEXTURE_CUBE_MAP,x);let B;if(_e){w&&P&&i.texStorage2D(e.TEXTURE_CUBE_MAP,K,b,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){B=ie[Z].mipmaps;for(let te=0;te<B.length;te++){let ne=B[te];x.format!==vi?Pe!==null?w?V&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te,0,0,ne.width,ne.height,Pe,ne.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te,b,ne.width,ne.height,0,ne.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?V&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te,0,0,ne.width,ne.height,Pe,Be,ne.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te,b,ne.width,ne.height,0,Pe,Be,ne.data)}}}else{if(B=x.mipmaps,w&&P){B.length>0&&K++;let Z=_t(ie[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,K,b,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(be){w?V&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ie[Z].width,ie[Z].height,Pe,Be,ie[Z].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,b,ie[Z].width,ie[Z].height,0,Pe,Be,ie[Z].data);for(let te=0;te<B.length;te++){let ne=B[te].image[Z].image;w?V&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te+1,0,0,ne.width,ne.height,Pe,Be,ne.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te+1,b,ne.width,ne.height,0,Pe,Be,ne.data)}}else{w?V&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,Be,ie[Z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,b,Pe,Be,ie[Z]);for(let te=0;te<B.length;te++){let ne=B[te];w?V&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te+1,0,0,Pe,Be,ne.image[Z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te+1,b,Pe,Be,ne.image[Z])}}}p(x)&&C(e.TEXTURE_CUBE_MAP),pe.__version=ae.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Me(y,x,D,Y,ae,pe){let Se=n.convert(D.format,D.colorSpace),O=n.convert(D.type),ue=o(D.internalFormat,Se,O,D.normalized,D.colorSpace),_e=r.get(x),be=r.get(D);if(be.__renderTarget=x,!_e.__hasExternalTextures){let ie=Math.max(1,x.width>>pe),Ae=Math.max(1,x.height>>pe);ae===e.TEXTURE_3D||ae===e.TEXTURE_2D_ARRAY?i.texImage3D(ae,pe,ue,ie,Ae,x.depth,0,Se,O,null):i.texImage2D(ae,pe,ue,ie,Ae,0,Se,O,null)}i.bindFramebuffer(e.FRAMEBUFFER,y),I(x)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,ae,be.__webglTexture,0,gt(x)):(ae===e.TEXTURE_2D||ae>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,ae,be.__webglTexture,pe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function at(y,x,D){if(e.bindRenderbuffer(e.RENDERBUFFER,y),x.depthBuffer){let Y=x.depthTexture,ae=Y&&Y.isDepthTexture?Y.type:null,pe=T(x.stencilBuffer,ae),Se=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(x)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,gt(x),pe,x.width,x.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,gt(x),pe,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,pe,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,y)}else{let Y=x.textures;for(let ae=0;ae<Y.length;ae++){let pe=Y[ae],Se=n.convert(pe.format,pe.colorSpace),O=n.convert(pe.type),ue=o(pe.internalFormat,Se,O,pe.normalized,pe.colorSpace);I(x)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,gt(x),ue,x.width,x.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,gt(x),ue,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ue,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function it(y,x,D){let Y=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=r.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),ae.__webglTexture===void 0){ae.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),He(e.TEXTURE_CUBE_MAP,x.depthTexture);let _e=n.convert(x.depthTexture.format),be=n.convert(x.depthTexture.type),ie;x.depthTexture.format===ji?ie=e.DEPTH_COMPONENT24:x.depthTexture.format===cr&&(ie=e.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ie,x.width,x.height,0,_e,be,null)}}else fe(x.depthTexture,0);let pe=ae.__webglTexture,Se=gt(x),O=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+D:e.TEXTURE_2D,ue=x.depthTexture.format===cr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===ji)I(x)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,O,pe,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,ue,O,pe,0);else if(x.depthTexture.format===cr)I(x)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,O,pe,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,ue,O,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(y){let x=r.get(y),D=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){let Y=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ae)};Y.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=Y}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let Y=0;Y<6;Y++)it(x.__webglFramebuffer[Y],y,Y);else{let Y=y.texture.mipmaps;Y&&Y.length>0?it(x.__webglFramebuffer[0],y,0):it(x.__webglFramebuffer,y,0)}else if(D){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),at(x.__webglDepthbuffer[Y],y,!1);else{let ae=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,pe)}}else{let Y=y.texture.mipmaps;if(Y&&Y.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),at(x.__webglDepthbuffer,y,!1);else{let ae=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,pe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function vt(y,x,D){let Y=r.get(y);x!==void 0&&Me(Y.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Oe(y)}function Nt(y){let x=y.texture,D=r.get(y),Y=r.get(x);y.addEventListener("dispose",h);let ae=y.textures,pe=y.isWebGLCubeRenderTarget===!0,Se=ae.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,s.memory.textures++),pe){D.__webglFramebuffer=[];for(let O=0;O<6;O++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[O]=[];for(let ue=0;ue<x.mipmaps.length;ue++)D.__webglFramebuffer[O][ue]=e.createFramebuffer()}else D.__webglFramebuffer[O]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let O=0;O<x.mipmaps.length;O++)D.__webglFramebuffer[O]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(Se)for(let O=0,ue=ae.length;O<ue;O++){let _e=r.get(ae[O]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(y.samples>0&&I(y)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let O=0;O<ae.length;O++){let ue=ae[O];D.__webglColorRenderbuffer[O]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[O]);let _e=n.convert(ue.format,ue.colorSpace),be=n.convert(ue.type),ie=o(ue.internalFormat,_e,be,ue.normalized,ue.colorSpace,y.isXRRenderTarget===!0),Ae=gt(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,ie,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+O,e.RENDERBUFFER,D.__webglColorRenderbuffer[O])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),at(D.__webglDepthRenderbuffer,y,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pe){i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),He(e.TEXTURE_CUBE_MAP,x);for(let O=0;O<6;O++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Me(D.__webglFramebuffer[O][ue],y,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ue);else Me(D.__webglFramebuffer[O],y,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(x)&&C(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Se){for(let O=0,ue=ae.length;O<ue;O++){let _e=ae[O],be=r.get(_e),ie=e.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ie=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ie,be.__webglTexture),He(ie,_e),Me(D.__webglFramebuffer,y,_e,e.COLOR_ATTACHMENT0+O,ie,0),p(_e)&&C(ie)}i.unbindTexture()}else{let O=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(O=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(O,Y.__webglTexture),He(O,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Me(D.__webglFramebuffer[ue],y,x,e.COLOR_ATTACHMENT0,O,ue);else Me(D.__webglFramebuffer,y,x,e.COLOR_ATTACHMENT0,O,0);p(x)&&C(O),i.unbindTexture()}y.depthBuffer&&Oe(y)}function wt(y){let x=y.textures;for(let D=0,Y=x.length;D<Y;D++){let ae=x[D];if(p(ae)){let pe=H(y),Se=r.get(ae).__webglTexture;i.bindTexture(pe,Se),C(pe),i.unbindTexture()}}}let ct=[],Ht=[];function yt(y){if(y.samples>0){if(I(y)===!1){let x=y.textures,D=y.width,Y=y.height,ae=e.COLOR_BUFFER_BIT,pe=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=r.get(y),O=x.length>1;if(O)for(let _e=0;_e<x.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ue=y.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ae|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ae|=e.STENCIL_BUFFER_BIT)),O){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);let be=r.get(x[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,be,0)}e.blitFramebuffer(0,0,D,Y,0,0,D,Y,ae,e.NEAREST),u===!0&&(ct.length=0,Ht.length=0,ct.push(e.COLOR_ATTACHMENT0+_e),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(ct.push(pe),Ht.push(pe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ct))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),O)for(let _e=0;_e<x.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);let be=r.get(x[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,be,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&u){let x=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function gt(y){return Math.min(a.maxSamples,y.samples)}function I(y){let x=r.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ot(y){let x=s.render.frame;f.get(y)!==x&&(f.set(y,x),y.update())}function Je(y,x){let D=y.colorSpace,Y=y.format,ae=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==ln&&D!==tr&&(Qe.getTransfer(D)===ht?(Y!==vi||ae!==ni)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",D)),x}function _t(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.getTextureUnits=N,this.setTextureUnits=W,this.setTexture2D=fe,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=se,this.rebindTextures=vt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zm(e,t){function i(r,a=tr){let n,s=Qe.getTransfer(a);if(r===ni)return e.UNSIGNED_BYTE;if(r===$s)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Qs)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Nl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ol)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Il)return e.BYTE;if(r===Ul)return e.SHORT;if(r===fa)return e.UNSIGNED_SHORT;if(r===Js)return e.INT;if(r===Pi)return e.UNSIGNED_INT;if(r===Ri)return e.FLOAT;if(r===Li)return e.HALF_FLOAT;if(r===Fl)return e.ALPHA;if(r===Bl)return e.RGB;if(r===vi)return e.RGBA;if(r===ji)return e.DEPTH_COMPONENT;if(r===cr)return e.DEPTH_STENCIL;if(r===zl)return e.RED;if(r===eo)return e.RED_INTEGER;if(r===mr)return e.RG;if(r===to)return e.RG_INTEGER;if(r===io)return e.RGBA_INTEGER;if(r===Ja||r===$a||r===Qa||r===en)if(s===ht)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Ja)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$a)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===en)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Ja)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$a)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===en)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ds||r===ps||r===fs||r===ms)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ds)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ps)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fs)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ms)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gs||r===_s||r===vs||r===xs||r===Ms||r===sn||r===Ss)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===gs||r===_s)return s===ht?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===vs)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===xs)return n.COMPRESSED_R11_EAC;if(r===Ms)return n.COMPRESSED_SIGNED_R11_EAC;if(r===sn)return n.COMPRESSED_RG11_EAC;if(r===Ss)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ys||r===Es||r===bs||r===Ts||r===ws||r===Rs||r===As||r===Cs||r===Ps||r===Ls||r===Ds||r===Is||r===Us||r===Ns)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===ys)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Es)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bs)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ts)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ws)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rs)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===As)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cs)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ps)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ls)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ds)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Is)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Us)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ns)return s===ht?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Os||r===Fs||r===Bs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Os)return s===ht?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zs||r===Hs||r===on||r===Gs)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===zs)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Hs)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===on)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ma?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gm=`
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

}`,Vm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Di({vertexShader:Hm,fragmentShader:Gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},km=class extends ar{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",l=1,u=null,c=null,f=null,m=null,d=null,_=null,S=typeof XRWebGLBinding<"u",E=new Vm,v={},p=t.getContextAttributes(),C=null,H=null,o=[],T=[],A=new Ue,R=null,h=null,g=new ui;g.viewport=new Et;let X=new ui;X.viewport=new Et;let U=[g,X],F=new ju,ee=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=o[Q];return le===void 0&&(le=new Pn,o[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=o[Q];return le===void 0&&(le=new Pn,o[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=o[Q];return le===void 0&&(le=new Pn,o[Q]=le),le.getHandSpace()};function W(Q){let le=T.indexOf(Q.inputSource);if(le===-1)return;let de=o[le];de!==void 0&&(de.update(Q.inputSource,Q.frame,u||n),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",q);for(let Q=0;Q<o.length;Q++){let le=T[Q];le!==null&&(T[Q]=null,o[Q].disconnect(le))}ee=null,N=null,E.reset();for(let Q in v)delete v[Q];if(e.setRenderTarget(C),d=null,m=null,f=null,r=null,H=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),h!==null){let Q=h.camera;Q.fov=h.fov,Q.zoom=h.zoom,Q.updateProjectionMatrix(),h=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){s=Q,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||n},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",re),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,Le=null;p.depth&&(Le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?cr:ji,de=p.stencil?ma:Pi);let Ie={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};f=this.getBinding(),m=f.createProjectionLayer(Ie),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),H=new xi(m.textureWidth,m.textureHeight,{format:vi,type:ni,depthTexture:new _a(m.textureWidth,m.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),H=new xi(d.framebufferWidth,d.framebufferHeight,{format:vi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(l),u=null,n=await r.requestReferenceSpace(s),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function q(Q){for(let le=0;le<Q.removed.length;le++){let de=Q.removed[le],Le=T.indexOf(de);Le>=0&&(T[Le]=null,o[Le].disconnect(de))}for(let le=0;le<Q.added.length;le++){let de=Q.added[le],Le=T.indexOf(de);if(Le===-1){for(let Me=0;Me<o.length;Me++)if(Me>=T.length){T.push(de),Le=Me;break}else if(T[Me]===null){T[Me]=de,Le=Me;break}if(Le===-1)break}let Ie=o[Le];Ie&&Ie.connect(de)}}let fe=new z,J=new z;function $(Q,le,de){fe.setFromMatrixPosition(le.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);let Le=fe.distanceTo(J),Ie=le.projectionMatrix.elements,Me=de.projectionMatrix.elements,at=Ie[14]/(Ie[10]-1),it=Ie[14]/(Ie[10]+1),Oe=(Ie[9]+1)/Ie[5],vt=(Ie[9]-1)/Ie[5],Nt=(Ie[8]-1)/Ie[0],wt=(Me[8]+1)/Me[0],ct=at*Nt,Ht=at*wt,yt=Le/(-Nt+wt),gt=yt*-Nt;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ie[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let I=at+yt,Ot=it+yt,Je=ct-gt,_t=Ht+(Le-gt),y=Oe*it/Ot*I,x=vt*it/Ot*I;Q.projectionMatrix.makePerspective(Je,_t,y,x,I,Ot),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let le=Q.near,de=Q.far;E.texture!==null&&(E.depthNear>0&&(le=E.depthNear),E.depthFar>0&&(de=E.depthFar)),F.near=X.near=g.near=le,F.far=X.far=g.far=de,(ee!==F.near||N!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),ee=F.near,N=F.far),F.layers.mask=Q.layers.mask|6,g.layers.mask=F.layers.mask&-5,X.layers.mask=F.layers.mask&-3;let Le=Q.parent,Ie=F.cameras;se(F,Le);for(let Me=0;Me<Ie.length;Me++)se(Ie[Me],Le);Ie.length===2?$(F,g,X):F.projectionMatrix.copy(g.projectionMatrix),h===null&&Q.isPerspectiveCamera&&(h={camera:Q,fov:Q.fov,zoom:Q.zoom}),Xe(Q,F,Le)};function Xe(Q,le,de){de===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ks*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(m===null&&d===null))return l},this.setFoveation=function(Q){l=Q,m!==null&&(m.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(F)},this.getCameraTexture=function(Q){return v[Q]};let Ce=null;function ft(Q,le){if(c=le.getViewerPose(u||n),_=le,c!==null){let de=c.views;d!==null&&(e.setRenderTargetFramebuffer(H,d.framebuffer),e.setRenderTarget(H));let Le=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Me=0;Me<de.length;Me++){let at=de[Me],it=null;if(d!==null)it=d.getViewport(at);else{let vt=f.getViewSubImage(m,at);it=vt.viewport,Me===0&&(e.setRenderTargetTextures(H,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(H))}let Oe=U[Me];Oe===void 0&&(Oe=new ui,Oe.layers.enable(Me),Oe.viewport=new Et,U[Me]=Oe),Oe.matrix.fromArray(at.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(at.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(it.x,it.y,it.width,it.height),Me===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Oe)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();let Me=f.getDepthInformation(de[0]);Me&&Me.isValid&&Me.texture&&E.init(Me,r.renderState)}if(Ie&&Ie.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let Me=0;Me<de.length;Me++){let at=de[Me].camera;if(at){let it=v[at];it||(it=new eh,v[at]=it);let Oe=f.getCameraImage(at);it.sourceTexture=Oe}}}}for(let de=0;de<o.length;de++){let Le=T[de],Ie=o[de];Le!==null&&Ie!==void 0&&Ie.update(Le,le,u||n)}Ce&&Ce(Q,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}let He=new uh;He.setAnimationLoop(ft),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}},Wm=new Mt,_h=new Ye;_h.set(-1,0,0,0,1,0,0,0,1);function Xm(e,t){function i(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function r(v,p){p.color.getRGB(v.fogColor.value,sh(e)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function a(v,p,C,H,o){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(v,p):p.isMeshLambertMaterial?(n(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(v,p),m(v,p)):p.isMeshPhongMaterial?(n(v,p),f(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(v,p),d(v,p),p.isMeshPhysicalMaterial&&_(v,p,o)):p.isMeshMatcapMaterial?(n(v,p),S(v,p)):p.isMeshDepthMaterial?n(v,p):p.isMeshDistanceMaterial?(n(v,p),E(v,p)):p.isMeshNormalMaterial?n(v,p):p.isLineBasicMaterial?(s(v,p),p.isLineDashedMaterial&&l(v,p)):p.isPointsMaterial?u(v,p,C,H):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,i(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,i(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,i(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===ti&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,i(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===ti&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,i(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,i(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let C=t.get(p),H=C.envMap,o=C.envMapRotation;H&&(v.envMap.value=H,v.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(o)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(_h),v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,v.aoMapTransform))}function s(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,i(p.map,v.mapTransform))}function l(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function u(v,p,C,H){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*C,v.scale.value=H*.5,p.map&&(v.map.value=p.map,i(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,i(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,i(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,i(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function f(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function m(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function _(v,p,C){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.retroreflectivity>0&&(v.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,p){p.matcap&&(v.matcap.value=p.matcap)}function E(v,p){let C=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jm(e,t,i,r){let a={},n={},s=[],l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function u(o,T){let A=T.program;r.uniformBlockBinding(o,A)}function c(o,T){let A=a[o.id];A===void 0&&(v(o),A=f(o),a[o.id]=A,o.addEventListener("dispose",C));let R=T.program;r.updateUBOMapping(o,R);let h=t.render.frame;n[o.id]!==h&&(d(o),n[o.id]=h)}function f(o){let T=m();o.__bindingPointIndex=T;let A=e.createBuffer(),R=o.__size,h=o.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,h),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function m(){for(let o=0;o<l;o++)if(s.indexOf(o)===-1)return s.push(o),o;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(o){let T=a[o.id],A=o.uniforms,R=o.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let h=0,g=A.length;h<g;h++){let X=A[h];if(Array.isArray(X))for(let U=0,F=X.length;U<F;U++)_(X[U],h,U,R);else _(X,h,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(o,T,A,R){if(E(o,T,A,R)===!0){let h=o.__offset,g=o.value;if(Array.isArray(g)){let X=0;for(let U=0;U<g.length;U++){let F=g[U],ee=p(F);S(F,o.__data,X),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(g,o.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,h,o.__data)}}function S(o,T,A){typeof o=="number"||typeof o=="boolean"?T[0]=o:o.isMatrix3?(T[0]=o.elements[0],T[1]=o.elements[1],T[2]=o.elements[2],T[3]=0,T[4]=o.elements[3],T[5]=o.elements[4],T[6]=o.elements[5],T[7]=0,T[8]=o.elements[6],T[9]=o.elements[7],T[10]=o.elements[8],T[11]=0):ArrayBuffer.isView(o)?T.set(new o.constructor(o.buffer,o.byteOffset,T.length)):o.toArray(T,A)}function E(o,T,A,R){let h=o.value,g=T+"_"+A;if(R[g]===void 0)return typeof h=="number"||typeof h=="boolean"?R[g]=h:ArrayBuffer.isView(h)?R[g]=h.slice():R[g]=h.clone(),!0;{let X=R[g];if(typeof h=="number"||typeof h=="boolean"){if(X!==h)return R[g]=h,!0}else{if(ArrayBuffer.isView(h))return!0;if(X.equals(h)===!1)return X.copy(h),!0}}return!1}function v(o){let T=o.uniforms,A=0,R=16;for(let g=0,X=T.length;g<X;g++){let U=Array.isArray(T[g])?T[g]:[T[g]];for(let F=0,ee=U.length;F<ee;F++){let N=U[F],W=Array.isArray(N.value)?N.value:[N.value];for(let re=0,q=W.length;re<q;re++){let fe=W[re],J=p(fe),$=A%R,se=$%J.boundary,Xe=$+se;A+=se,Xe!==0&&R-Xe<J.storage&&(A+=R-Xe),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=J.storage}}}let h=A%R;return h>0&&(A+=R-h),o.__size=A,o.__cache={},this}function p(o){let T={boundary:0,storage:0};return typeof o=="number"||typeof o=="boolean"?(T.boundary=4,T.storage=4):o.isVector2?(T.boundary=8,T.storage=8):o.isVector3||o.isColor?(T.boundary=16,T.storage=12):o.isVector4?(T.boundary=16,T.storage=16):o.isMatrix3?(T.boundary=48,T.storage=48):o.isMatrix4?(T.boundary=64,T.storage=64):o.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(o)?(T.boundary=16,T.storage=o.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",o),T}function C(o){let T=o.target;T.removeEventListener("dispose",C);let A=s.indexOf(T.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function H(){for(let o in a)e.deleteBuffer(a[o]);s=[],a={},n={}}return{bind:u,update:c,dispose:H}}var qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function Ym(){return bi===null&&(bi=new Ru(qm,16,16,mr,Li),bi.name="DFG_LUT",bi.minFilter=zt,bi.magFilter=zt,bi.wrapS=ki,bi.wrapT=ki,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Zm=class{constructor(e={}){let{canvas:t=Qh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:d=ni}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=n;let S=d,E=new Set([io,to,eo]),v=new Set([ni,Pi,fa,ma,$s,Qs]),p=new Uint32Array(4),C=new Int32Array(4),H=new z,o=null,T=null,A=[],R=[],h=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,X=!1,U=null,F=null,ee=null,N=null;this._outputColorSpace=hi;let W=0,re=0,q=null,fe=-1,J=null,$=new Et,se=new Et,Xe=null,Ce=new qe(0),ft=0,He=t.width,Q=t.height,le=1,de=null,Le=null,Ie=new Et(0,0,He,Q),Me=new Et(0,0,He,Q),at=!1,it=new oo,Oe=!1,vt=!1,Nt=new Mt,wt=new z,ct=new Et,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function gt(){return q===null?le:1}let I=i;function Ot(M,L){return t.getContext(M,L)}let Je,_t,y,x,D,Y,ae,pe,Se,O,ue,_e,be,ie,Ae,Pe,Be,b,w,P,V,K,B;try{let M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zs}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){let L="webgl2";if(I=Ot(L,M),I===null)throw Ot(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Z()}catch(M){throw t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),et("WebGLRenderer: "+M.message),M}function Z(){Je=new qp(I),Je.init(),V=new zm(I,Je),_t=new Fp(I,Je,e,V),y=new Fm(I,Je),_t.reversedDepthBuffer&&m&&y.buffers.depth.setReversed(!0),F=I.createFramebuffer(),ee=I.createFramebuffer(),N=I.createFramebuffer(),x=new Kp(I),D=new Em,Y=new Bm(I,Je,y,D,_t,V,x),ae=new jp(g),pe=new $u(I),K=new Np(I,pe),Se=new Yp(I,pe,x,K),O=new $p(I,Se,pe,K,x),b=new Jp(I,_t,Y),Ae=new Bp(D),ue=new ym(g,ae,Je,_t,K,Ae),_e=new Xm(g,D),be=new Tm,ie=new Lm(Je),Be=new Up(g,ae,y,O,_,l),Pe=new Om(g,O,_t),B=new jm(I,x,_t,y),w=new Op(I,Je,x),P=new Zp(I,Je,x),x.programs=ue.programs,g.capabilities=_t,g.extensions=Je,g.properties=D,g.renderLists=be,g.shadowMap=Pe,g.state=y,g.info=x}S!==ni&&(h=new ef(S,t.width,t.height,s,r,a));let te=new km(g,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(M){M!==void 0&&(le=M,this.setSize(He,Q,!1))},this.getSize=function(M){return M.set(He,Q)},this.setSize=function(M,L,j=!0){if(te.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}He=M,Q=L,t.width=Math.floor(M*le),t.height=Math.floor(L*le),j===!0&&(t.style.width=M+"px",t.style.height=L+"px"),h!==null&&h.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(He*le,Q*le).floor()},this.setDrawingBufferSize=function(M,L,j){He=M,Q=L,le=j,t.width=Math.floor(M*j),t.height=Math.floor(L*j),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(S===ni){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}h.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,L,j,k){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,L,j,k),y.viewport($.copy(Ie).multiplyScalar(le).round())},this.getScissor=function(M){return M.copy(Me)},this.setScissor=function(M,L,j,k){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,L,j,k),y.scissor(se.copy(Me).multiplyScalar(le).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(M){y.setScissorTest(at=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){Le=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,j=!0){let k=0;if(M){let G=!1;if(q!==null){let ce=q.texture.format;G=E.has(ce)}if(G){let ce=q.texture.type,xe=v.has(ce),ve=Be.getClearColor(),me=Be.getClearAlpha(),De=ve.r,Ge=ve.g,Fe=ve.b;xe?(p[0]=De,p[1]=Ge,p[2]=Fe,p[3]=me,I.clearBufferuiv(I.COLOR,0,p)):(C[0]=De,C[1]=Ge,C[2]=Fe,C[3]=me,I.clearBufferiv(I.COLOR,0,C))}else k|=I.COLOR_BUFFER_BIT}L&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Be.dispose(),be.dispose(),ie.dispose(),D.dispose(),ae.dispose(),O.dispose(),K.dispose(),B.dispose(),ue.dispose(),te.dispose(),te.removeEventListener("sessionstart",pi),te.removeEventListener("sessionend",Yi),Jt.stop()};function ne(M){M.preventDefault(),cn("WebGLRenderer: Context Lost."),X=!0}function Te(){cn("WebGLRenderer: Context Restored."),X=!1;let M=x.autoReset,L=Pe.enabled,j=Pe.autoUpdate,k=Pe.needsUpdate,G=Pe.type;Z(),x.autoReset=M,Pe.enabled=L,Pe.autoUpdate=j,Pe.needsUpdate=k,Pe.type=G}function ge(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $e(M){let L=M.target;L.removeEventListener("dispose",$e),dt(L)}function dt(M){Gt(M),D.remove(M)}function Gt(M){let L=D.get(M).programs;L!==void 0&&(L.forEach(function(j){ue.releaseProgram(j)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,j,k,G,ce){L===null&&(L=Ht);let xe=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=Zi(M,L,j,k,G);y.setMaterial(k,xe);let me=j.index,De=1;if(k.wireframe===!0){if(me=Se.getWireframeAttribute(j),me===void 0)return;De=2}let Ge=j.drawRange,Fe=j.attributes.position,we=Ge.start*De,rt=(Ge.start+Ge.count)*De;ce!==null&&(we=Math.max(we,ce.start*De),rt=Math.min(rt,(ce.start+ce.count)*De)),me!==null?(we=Math.max(we,0),rt=Math.min(rt,me.count)):Fe!=null&&(we=Math.max(we,0),rt=Math.min(rt,Fe.count));let nt=rt-we;if(nt<0||nt===1/0)return;K.setup(G,k,ve,j,me);let st,ot=w;if(me!==null&&(st=pe.get(me),ot=P,ot.setIndex(st)),G.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*gt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(G.isLine){let tt=k.linewidth;tt===void 0&&(tt=1),y.setLineWidth(tt*gt()),G.isLineSegments?ot.setMode(I.LINES):G.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else G.isPoints?ot.setMode(I.POINTS):G.isSprite&&ot.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let tt=G._multiDrawStarts,Ee=G._multiDrawCounts,Ct=G._multiDrawCount,si=me?pe.get(me).bytesPerElement:1,kt=D.get(k).currentProgram.getUniforms();for(let Qt=0;Qt<Ct;Qt++)kt.setValue(I,"_gl_DrawID",Qt),ot.render(tt[Qt]/si,Ee[Qt])}else if(G.isInstancedMesh)ot.renderInstances(we,nt,G.count);else if(j.isInstancedBufferGeometry){let tt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ee=Math.min(j.instanceCount,tt);ot.renderInstances(we,nt,Ee)}else ot.render(we,nt)};function qt(M,L,j,k){U!==null&&M.isNodeMaterial&&U.setObject(k,M),Oe===!0&&Ae.setState(M,j,!1),M.transparent===!0&&M.side===mt&&M.forceSinglePass===!1?(M.side=ti,M.needsUpdate=!0,$t(M,L,k),M.side=pr,M.needsUpdate=!0,$t(M,L,k),M.side=mt):$t(M,L,k)}this.compile=function(M,L,j=null){j===null&&(j=M),U!==null&&U.renderStart(M,L,j),T=ie.get(j),T.init(L),R.push(T),j.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),M!==j&&M.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),vt=this.localClippingEnabled,Oe=Ae.init(this.clippingPlanes,vt),Oe===!0&&Ae.setGlobalState(this.clippingPlanes,L),U!==null&&Pe.render(T.state.shadowsArray,j,L);let k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ce=G.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){let ve=ce[xe];qt(ve,j,L,G),k.add(ve)}else qt(ce,j,L,G),k.add(ce)}),T=R.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(M,L,j=null){let k=this.compile(M,L,j);return new Promise(G=>{function ce(){if(k.forEach(function(xe){let ve=D.get(xe).currentProgram;(ve===void 0||ve.isReady())&&k.delete(xe)}),k.size===0){G(M);return}setTimeout(ce,10)}Je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ii=null;function St(M){Ii&&Ii(M)}function pi(){Jt.stop()}function Yi(){Jt.start()}let Jt=new uh;Jt.setAnimationLoop(St),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(M){Ii=M,te.setAnimationLoop(M),M===null?Jt.stop():Jt.start()},te.addEventListener("sessionstart",pi),te.addEventListener("sessionend",Yi),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;U!==null&&U.renderStart(M,L);let j=te.enabled===!0&&te.isPresenting===!0,k=h!==null&&(q===null||j)&&h.begin(g,q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(h===null||h.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,L,q),T=ie.get(M,R.length),T.init(L),T.state.textureUnits=Y.getTextureUnits(),R.push(T),Nt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),it.setFromProjectionMatrix(Nt,Ai,L.reversedDepth),vt=this.localClippingEnabled,Oe=Ae.init(this.clippingPlanes,vt),o=be.get(M,A.length),o.init(),A.push(o),te.enabled===!0&&te.isPresenting===!0){let ce=g.xr.getDepthSensingMesh();ce!==null&&fi(ce,L,-1/0,g.sortObjects)}fi(M,L,0,g.sortObjects),o.finish(),U!==null&&U.updateLights(T.state.lightsArray),g.sortObjects===!0&&o.sort(de,Le),yt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,yt&&Be.addToRenderList(o,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ae.beginShadows();let G=T.state.shadowsArray;if(Pe.render(G,M,L),Oe===!0&&Ae.endShadows(),(k&&h.hasRenderPass())===!1){let ce=o.opaque,xe=o.transmissive;if(T.setupLights(),L.isArrayCamera){let ve=L.cameras;if(xe.length>0)for(let me=0,De=ve.length;me<De;me++){let Ge=ve[me];ke(ce,xe,M,Ge)}yt&&Be.render(M);for(let me=0,De=ve.length;me<De;me++){let Ge=ve[me];je(o,M,Ge,Ge.viewport)}}else xe.length>0&&ke(ce,xe,M,L),yt&&Be.render(M),je(o,M,L)}q!==null&&re===0&&(Y.updateMultisampleRenderTarget(q),Y.updateRenderTargetMipmap(q)),k&&h.end(g),M.isScene===!0&&M.onAfterRender(g,M,L),K.resetDefaultState(),fe=-1,J=null,R.pop(),R.length>0?(T=R[R.length-1],Y.setTextureUnits(T.state.textureUnits),Oe===!0&&Ae.setGlobalState(g.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?o=A[A.length-1]:o=null,U!==null&&U.renderEnd()};function fi(M,L,j,k){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(it)){k&&ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Nt);let ce=O.update(M),xe=M.material;xe.visible&&o.push(M,ce,xe,j,ct.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(it))){let ce=O.update(M),xe=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ct.copy(M.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ct.copy(ce.boundingSphere.center)),ct.applyMatrix4(M.matrixWorld).applyMatrix4(Nt)),Array.isArray(xe)){let ve=ce.groups;for(let me=0,De=ve.length;me<De;me++){let Ge=ve[me],Fe=xe[Ge.materialIndex];Fe&&Fe.visible&&o.push(M,ce,Fe,j,ct.z,Ge,L)}}else xe.visible&&o.push(M,ce,xe,j,ct.z,null,L)}}let G=M.children;for(let ce=0,xe=G.length;ce<xe;ce++)fi(G[ce],L,j,k)}function je(M,L,j,k){let{opaque:G,transmissive:ce,transparent:xe}=M;T.setupLightsView(j),Oe===!0&&Ae.setGlobalState(g.clippingPlanes,j),k&&y.viewport($.copy(k)),G.length>0&&lt(G,L,j),ce.length>0&&lt(ce,L,j),xe.length>0&&lt(xe,L,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ke(M,L,j,k){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Fe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new xi(1,1,{generateMipmaps:!0,type:Fe?Li:ni,minFilter:ur,samples:Math.max(4,_t.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let G=T.state.transmissionRenderTarget[k.id],ce=k.viewport||$;G.setSize(ce.z*g.transmissionResolutionScale,ce.w*g.transmissionResolutionScale);let xe=g.getRenderTarget(),ve=g.getActiveCubeFace(),me=g.getActiveMipmapLevel();g.setRenderTarget(G),g.getClearColor(Ce),ft=g.getClearAlpha(),ft<1&&g.setClearColor(16777215,.5),g.clear(),yt&&Be.render(j);let De=g.toneMapping;g.toneMapping=Ci;let Ge=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Oe===!0&&Ae.setGlobalState(g.clippingPlanes,k),lt(M,j,k),Y.updateMultisampleRenderTarget(G),Y.updateRenderTargetMipmap(G),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let we=0,rt=L.length;we<rt;we++){let nt=L[we],{object:st,geometry:ot,material:tt,group:Ee}=nt;if(tt.side===mt&&st.layers.test(k.layers)){let Ct=tt.side;tt.side=ti,tt.needsUpdate=!0,Rt(st,j,k,ot,tt,Ee),tt.side=Ct,tt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Y.updateMultisampleRenderTarget(G),Y.updateRenderTargetMipmap(G))}g.setRenderTarget(xe,ve,me),g.setClearColor(Ce,ft),Ge!==void 0&&(k.viewport=Ge),g.toneMapping=De}function lt(M,L,j){let k=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ce=M.length;G<ce;G++){let xe=M[G],{object:ve,geometry:me,group:De}=xe,Ge=xe.material;Ge.allowOverride===!0&&k!==null&&(Ge=k),ve.layers.test(j.layers)&&Rt(ve,L,j,me,Ge,De)}}function Rt(M,L,j,k,G,ce){U!==null&&G.isNodeMaterial&&U.setObject(M,G),M.onBeforeRender(g,L,j,k,G,ce),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(g,L,j,k,M,ce),G.transparent===!0&&G.side===mt&&G.forceSinglePass===!1?(G.side=ti,G.needsUpdate=!0,g.renderBufferDirect(j,L,k,G,M,ce),G.side=pr,G.needsUpdate=!0,g.renderBufferDirect(j,L,k,G,M,ce),G.side=mt):g.renderBufferDirect(j,L,k,G,M,ce),M.onAfterRender(g,L,j,k,G,ce)}function $t(M,L,j){L.isScene!==!0&&(L=Ht);let k=D.get(M),G=T.state.lights,ce=T.state.shadowsArray,xe=G.state.version,ve=ue.getParameters(M,G.state,ce,L,j,T.state.lightProbeGridArray),me=ue.getProgramCacheKey(ve),De=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Ge=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=ae.get(M.envMap||k.environment,Ge),k.envMapRotation=k.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",$e),De=new Map,k.programs=De);let Fe=De.get(me);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===xe)return Mi(M,ve),Fe}else ve.uniforms=ue.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,j,ve),M.onBeforeCompile(ve,g),Fe=ue.acquireProgram(ve,me),De.set(me,Fe),k.uniforms=ve.uniforms;let we=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Ae.uniform),Mi(M,ve),k.needsLights=Ui(M),k.lightsStateVersion=xe,k.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.sunLights.value=G.state.sun,we.sunLightShadows.value=G.state.sunShadow,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.sunShadowMatrix.value=G.state.sunShadowMatrix,we.sunShadowCascade.value=G.state.sunShadowCascade,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Fe,k.uniformsList=null,Fe}function At(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=nn.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Mi(M,L){let j=D.get(M);j.outputColorSpace=L.outputColorSpace,j.batching=L.batching,j.batchingColor=L.batchingColor,j.instancing=L.instancing,j.instancingColor=L.instancingColor,j.instancingMorph=L.instancingMorph,j.skinning=L.skinning,j.morphTargets=L.morphTargets,j.morphNormals=L.morphNormals,j.morphColors=L.morphColors,j.morphTargetsCount=L.morphTargetsCount,j.numClippingPlanes=L.numClippingPlanes,j.numIntersection=L.numClipIntersection,j.vertexAlphas=L.vertexAlphas,j.vertexTangents=L.vertexTangents,j.toneMapping=L.toneMapping}function Vt(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;H.setFromMatrixPosition(L.matrixWorld);for(let j=0,k=M.length;j<k;j++){let G=M[j];if(G.texture!==null&&G.boundingBox.containsPoint(H))return G}return null}function Zi(M,L,j,k,G){L.isScene!==!0&&(L=Ht),Y.resetTextureUnits();let ce=L.fog,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,ve=q===null?g.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qe.workingColorSpace,me=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,De=ae.get(k.envMap||xe,me),Ge=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!j.morphAttributes.position,rt=!!j.morphAttributes.normal,nt=!!j.morphAttributes.color,st=Ci;k.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(st=g.toneMapping);let ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=ot!==void 0?ot.length:0,Ee=D.get(k),Ct=T.state.lights;if(Oe===!0&&(vt===!0||M!==J)){let oe=M===J&&k.id===fe;Ae.setState(k,M,oe)}let si=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ct.state.version||Ee.outputColorSpace!==ve||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==De||k.fog===!0&&Ee.fog!==ce||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ae.numPlanes||Ee.numIntersection!==Ae.numIntersection)||Ee.vertexAlphas!==Ge||Ee.vertexTangents!==Fe||Ee.morphTargets!==we||Ee.morphNormals!==rt||Ee.morphColors!==nt||Ee.toneMapping!==st||Ee.morphTargetsCount!==tt||!!Ee.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(si=!0):(si=!0,Ee.__version=k.version);let kt=Ee.currentProgram;si===!0&&(kt=$t(k,L,G),U&&k.isNodeMaterial&&U.onUpdateProgram(k,kt,Ee));let Qt=!1,oi=!1,yi=!1,he=kt.getUniforms(),Re=Ee.uniforms;if(y.useProgram(kt.program)&&(Qt=!0,oi=!0,yi=!0),k.id!==fe&&(fe=k.id,oi=!0),Ee.needsLights){let oe=Vt(T.state.lightProbeGridArray,G);Ee.lightProbeGrid!==oe&&(Ee.lightProbeGrid=oe,oi=!0)}if(Qt||J!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(I,"projectionMatrix",M.projectionMatrix),he.setValue(I,"viewMatrix",M.matrixWorldInverse);let oe=he.map.cameraPosition;oe!==void 0&&oe.setValue(I,wt.setFromMatrixPosition(M.matrixWorld)),_t.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,oi=!0,yi=!0)}if(Ee.needsLights&&(Ct.state.sunShadowMap.length>0&&he.setValue(I,"sunShadowMap",Ct.state.sunShadowMap,Y),Ct.state.directionalShadowMap.length>0&&he.setValue(I,"directionalShadowMap",Ct.state.directionalShadowMap,Y),Ct.state.spotShadowMap.length>0&&he.setValue(I,"spotShadowMap",Ct.state.spotShadowMap,Y),Ct.state.pointShadowMap.length>0&&he.setValue(I,"pointShadowMap",Ct.state.pointShadowMap,Y)),G.isSkinnedMesh){he.setOptional(I,G,"bindMatrix"),he.setOptional(I,G,"bindMatrixInverse");let oe=G.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),he.setValue(I,"boneTexture",oe.boneTexture,Y))}G.isBatchedMesh&&(he.setOptional(I,G,"batchingTexture"),he.setValue(I,"batchingTexture",G._matricesTexture,Y),he.setOptional(I,G,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",G._indirectTexture,Y),he.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",G._colorsTexture,Y));let We=j.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0)&&b.update(G,j,kt),(oi||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,he.setValue(I,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Re.envMapIntensity.value=L.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Ym()),oi){if(he.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&Jr(Re,yi),ce&&k.fog===!0&&_e.refreshFogUniforms(Re,ce),_e.refreshMaterialUniforms(Re,k,le,Q,T.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){let oe=Ee.lightProbeGrid;Re.probesSH.value=oe.texture,Re.probesMin.value.copy(oe.boundingBox.min),Re.probesMax.value.copy(oe.boundingBox.max),Re.probesResolution.value.copy(oe.resolution)}nn.upload(I,At(Ee),Re,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(nn.upload(I,At(Ee),Re,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(I,"center",G.center),he.setValue(I,"modelViewMatrix",G.modelViewMatrix),he.setValue(I,"normalMatrix",G.normalMatrix),he.setValue(I,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let oe=k.uniformsGroups;for(let Ve=0,Ne=oe.length;Ve<Ne;Ve++){let Pt=oe[Ve];B.update(Pt,kt),B.bind(Pt,kt)}}return kt}function Jr(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Ui(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(M,L,j){let k=D.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),D.get(M.texture).__webglTexture=L,D.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:j,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let j=D.get(M);j.__webglFramebuffer=L,j.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,j=0){q=M,W=L,re=j;let k=null,G=!1,ce=!1;if(M){let xe=D.get(M);if(xe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),$.copy(M.viewport),se.copy(M.scissor),Xe=M.scissorTest,y.viewport($),y.scissor(se),y.setScissorTest(Xe),fe=-1;return}else if(xe.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(xe.__hasExternalTextures)Y.rebindTextures(M,D.get(M.texture).__webglTexture,D.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let De=M.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&D.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}let ve=M.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ce=!0);let me=D.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(me[L])?k=me[L][j]:k=me[L],G=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?k=D.get(M).__webglMultisampledFramebuffer:Array.isArray(me)?k=me[j]:k=me,$.copy(M.viewport),se.copy(M.scissor),Xe=M.scissorTest}else $.copy(Ie).multiplyScalar(le).floor(),se.copy(Me).multiplyScalar(le).floor(),Xe=at;if(j!==0&&(k=F),y.bindFramebuffer(I.FRAMEBUFFER,k)&&y.drawBuffers(M,k),y.viewport($),y.scissor(se),y.setScissorTest(Xe),G){let xe=D.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,j)}else if(ce){let xe=L;for(let ve=0;ve<M.textures.length;ve++){let me=D.get(M.textures[ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ve,me.__webglTexture,j,xe)}}else if(M!==null&&j!==0){let xe=D.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,j)}fe=-1};function Si(M){let L=D.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=_t.textureFormatReadable(M.format),L.__typeReadable=_t.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,j,k,G,ce,xe,ve=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=D.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(me=me[xe]),me){y.bindFramebuffer(I.FRAMEBUFFER,me);try{let De=M.textures[ve],Ge=De.format,Fe=De.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);let we=Si(De);if(we.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-k&&j>=0&&j<=M.height-G&&I.readPixels(L,j,k,G,V.convert(Ge),V.convert(Fe),ce)}finally{let De=q!==null?D.get(q).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,L,j,k,G,ce,xe,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=D.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(me=me[xe]),me)if(L>=0&&L<=M.width-k&&j>=0&&j<=M.height-G){y.bindFramebuffer(I.FRAMEBUFFER,me);let De=M.textures[ve],Ge=De.format,Fe=De.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);let we=Si(De);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(L,j,k,G,V.convert(Ge),V.convert(Fe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let nt=q!==null?D.get(q).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,nt);let st=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await eu(I,st,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(rt),I.deleteSync(st),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,j=0){let k=Math.pow(2,-j),G=Math.floor(M.image.width*k),ce=Math.floor(M.image.height*k),xe=L!==null?L.x:0,ve=L!==null?L.y:0;Y.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,xe,ve,G,ce),y.unbindTexture()},this.copyTextureToTexture=function(M,L,j=null,k=null,G=0,ce=0){let xe,ve,me,De,Ge,Fe,we,rt,nt,st=M.isCompressedTexture?M.mipmaps[ce]:M.image;if(j!==null)xe=j.max.x-j.min.x,ve=j.max.y-j.min.y,me=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Ge=j.min.y,Fe=j.isBox3?j.min.z:0;else{let Re=Math.pow(2,-G);xe=Math.floor(st.width*Re),ve=Math.floor(st.height*Re),M.isDataArrayTexture?me=st.depth:M.isData3DTexture?me=Math.floor(st.depth*Re):me=1,De=0,Ge=0,Fe=0}k!==null?(we=k.x,rt=k.y,nt=k.z):(we=0,rt=0,nt=0);let ot=V.convert(L.format),tt=V.convert(L.type),Ee;L.isData3DTexture?(Y.setTexture3D(L,0),Ee=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Y.setTexture2DArray(L,0),Ee=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(L,0),Ee=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let Ct=y.getParameter(I.UNPACK_ROW_LENGTH),si=y.getParameter(I.UNPACK_IMAGE_HEIGHT),kt=y.getParameter(I.UNPACK_SKIP_PIXELS),Qt=y.getParameter(I.UNPACK_SKIP_ROWS),oi=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,De),y.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe);let yi=M.isDataArrayTexture||M.isData3DTexture,he=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Re=D.get(M),We=D.get(L),oe=D.get(Re.__renderTarget),Ve=D.get(We.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,oe.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<me;Ne++)yi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,D.get(M).__webglTexture,G,Fe+Ne),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,D.get(L).__webglTexture,ce,nt+Ne)),I.blitFramebuffer(De,Ge,xe,ve,we,rt,xe,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||D.has(M)){let Re=D.get(M),We=D.get(L);y.bindFramebuffer(I.READ_FRAMEBUFFER,ee),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let oe=0;oe<me;oe++)yi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,G,Fe+oe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re.__webglTexture,G),he?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,ce,nt+oe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,ce),G!==0?I.blitFramebuffer(De,Ge,xe,ve,we,rt,xe,ve,I.COLOR_BUFFER_BIT,I.NEAREST):he?I.copyTexSubImage3D(Ee,ce,we,rt,nt+oe,De,Ge,xe,ve):I.copyTexSubImage2D(Ee,ce,we,rt,De,Ge,xe,ve);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Ee,ce,we,rt,nt,xe,ve,me,ot,tt,st.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,ce,we,rt,nt,xe,ve,me,ot,st.data):I.texSubImage3D(Ee,ce,we,rt,nt,xe,ve,me,ot,tt,st):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ce,we,rt,xe,ve,ot,tt,st.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ce,we,rt,st.width,st.height,ot,st.data):I.texSubImage2D(I.TEXTURE_2D,ce,we,rt,xe,ve,ot,tt,st);y.pixelStorei(I.UNPACK_ROW_LENGTH,Ct),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,si),y.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),y.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),y.pixelStorei(I.UNPACK_SKIP_IMAGES,oi),ce===0&&L.generateMipmaps&&I.generateMipmap(Ee),y.unbindTexture()},this.initRenderTarget=function(M){D.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){W=0,re=0,q=null,y.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}},Ml={type:"change"},co={type:"start"},vh={type:"end"},Ka=new xa,Sl=new Vi,Km=Math.cos(70*ru.DEG2RAD),Lt=new z,ei=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ts=1e-6,Jm=class extends Ku{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new rr,this._lastTargetPosition=new z,this._quat=new rr().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ko,this._sphericalDelta=new Ko,this._scale=1,this._panOffset=new z,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new z,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qm.bind(this),this._onPointerDown=$m.bind(this),this._onPointerUp=eg.bind(this),this._onContextMenu=og.bind(this),this._onMouseWheel=rg.bind(this),this._onKeyDown=ag.bind(this),this._onTouchStart=ng.bind(this),this._onTouchMove=sg.bind(this),this._onMouseDown=tg.bind(this),this._onMouseMove=ig.bind(this),this._interceptControlDown=lg.bind(this),this._interceptControlUp=hg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ml),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ei:i>Math.PI&&(i-=ei),r<-Math.PI?r+=ei:r>Math.PI&&(r-=ei),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=Lt.length();n=this._clampDistance(s*this._scale);let l=s-n;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let s=new z(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let u=new z(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(s),this.object.updateMatrixWorld(),n=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<Km?this.object.lookAt(this.target):(Sl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(Sl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ts||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ts||this._lastTargetPosition.distanceToSquared(this.target)>ts?(this.dispatchEvent(Ml),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Lt.copy(r).sub(this.target);let a=Lt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function $m(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qm(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function eg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vh),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function tg(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ut.DOLLY;break;case Br.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ut.ROTATE}break;case Br.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(co)}function ig(e){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function rg(e){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(e.preventDefault(),this.dispatchEvent(co),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(vh))}function ag(e){this.enabled!==!1&&this._handleKeyDown(e)}function ng(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ut.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ut.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(co)}function sg(e){switch(this._trackPointer(e),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ut.NONE}}function og(e){this.enabled!==!1&&e.preventDefault()}function lg(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yl(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new _u;a.background=new qe(16777215);let n=t.clientWidth||900,s=t.clientHeight||480,l=new ui(35,n/s,.1,100);l.position.set(8.5,4.2,7.5);let u=new Zm({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setSize(n,s),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=Ks,u.toneMappingExposure=1.15,u.shadowMap.enabled=!0,u.shadowMap.type=ca,t.appendChild(u.domElement);let c=new Jm(l,u.domElement);c.enableDamping=!0,c.dampingFactor=.05,c.maxPolarAngle=Math.PI/2-.05,c.minDistance=2,c.maxDistance=28,c.target.set(0,0,0),c.autoRotate=!0,c.autoRotateSpeed=.6;let f=null,m=()=>{c.autoRotate=!1,clearTimeout(f),f=setTimeout(()=>{ie.autoRotate&&(c.autoRotate=!0)},6e3)};u.domElement.addEventListener("pointerdown",m),u.domElement.addEventListener("wheel",m,{passive:!0}),u.domElement.addEventListener("touchstart",m,{passive:!0});let d=new Wu(16777215,.9);a.add(d);let _=new Yn(16777215,1.25);_.position.set(12,16,14),_.castShadow=!0,_.shadow.mapSize.width=1024,_.shadow.mapSize.height=1024,_.shadow.bias=-5e-4,a.add(_);let S=new Yn(14412542,.7);S.position.set(-14,8,-10),a.add(S);let E=new Yn(15793652,.6);E.position.set(0,18,0),a.add(E);let v=new lo(30,30),p=new Iu({opacity:.12}),C=new Tt(v,p);C.rotation.x=-Math.PI/2,C.position.y=-1.65,C.receiveShadow=!0,a.add(C);let H=new Zu(24,24,14870768,15857145);H.position.y=-1.64,a.add(H);let o={aluFrame:new xt({color:13949149,metalness:.8,roughness:.25,side:mt}),galvSteel:new xt({color:12897749,metalness:.65,roughness:.45,side:mt}),stainless:new xt({color:14870768,metalness:.95,roughness:.15,side:mt}),baseSkid:new xt({color:9741240,metalness:.75,roughness:.35,side:mt}),panelSolid:new xt({color:16317180,metalness:.15,roughness:.35,side:mt}),panelCutaway:new zu({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:mt}),fanHousing:new xt({color:165063,metalness:.6,roughness:.3,side:mt}),fanImpeller:new xt({color:3718648,metalness:.75,roughness:.25,side:mt}),motorCast:new xt({color:1976635,metalness:.85,roughness:.3,side:mt}),copperPipe:new xt({color:12730636,metalness:.9,roughness:.2,side:mt}),coolingFin:new xt({color:3718648,metalness:.55,roughness:.35,side:mt}),heatingFin:new xt({color:16281969,metalness:.55,roughness:.35,side:mt}),rotorWheel:new xt({color:6583435,metalness:.7,roughness:.4,side:mt}),filterCloth:new xt({color:16317180,roughness:.95,metalness:.05,side:mt}),filterG4:new xt({color:14870768,roughness:.9,metalness:.05,side:mt}),damperBlade:new xt({color:9741240,metalness:.8,roughness:.25,side:mt}),actuatorOrange:new xt({color:15357964,metalness:.2,roughness:.4}),drainPan:new xt({color:14870768,metalness:.95,roughness:.15,side:mt}),doorHandle:new xt({color:988970,metalness:.8,roughness:.3}),rubberBlack:new xt({color:988970,roughness:.85,metalness:.1,side:mt}),brassGold:new xt({color:14251782,metalness:.85,roughness:.25}),springSilver:new xt({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new xt({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new xt({color:16777215,roughness:.2}),touchscreen:new dn({color:165063})},T=[],A=[],R=new jt;a.add(R);function h(b,w,P,V,K=0,B=0,Z=0,te=!0,ne=!0){let Te=new gn(b,w,P),ge=new Tt(Te,V);return ge.position.set(K,B,Z),ge.castShadow=te,ge.receiveShadow=ne,ge}function g(b,w,P,V,K,B=0,Z=0,te=0,ne=0,Te=0,ge=!1){let $e=new Xs(b,w,P,V,1,ge),dt=new Tt($e,K);return dt.position.set(B,Z,te),ne&&(dt.rotation.x=ne),Te&&(dt.rotation.z=Te),dt.castShadow=!0,dt.receiveShadow=!0,dt}function X(b,w=o.panelSolid,P=o.panelCutaway){return b.userData.solidMat=w,b.userData.cutawayMat=P,A.push(b),b}function U(b){let w=-1.4100000000000001,P=h(8.4+.2,.22,.1,o.baseSkid,0,w,1-.05),V=h(8.4+.2,.22,.1,o.baseSkid,0,w,-1+.05);b.add(P,V);let K=[-4.2,-2.5,-.8,.8,2.5,4.2];K.forEach(oe=>{b.add(h(.12,.22,2-.2,o.baseSkid,oe,w,0))}),[-2.5,.8].forEach(oe=>{b.add(h(.28,.12,.12,o.aluFrame,oe,w,1-.04)),b.add(h(.28,.12,.12,o.aluFrame,oe,w,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([oe,Ve])=>{b.add(h(.08,.18,.08,o.yellowSafety,oe,w+.06,Ve))});let B=.08;b.add(h(8.4,B,B,o.aluFrame,0,-1.3+B/2,1-B/2),h(8.4,B,B,o.aluFrame,0,-1.3+B/2,-1+B/2),h(8.4,B,B,o.aluFrame,0,1.3-B/2,1-B/2),h(8.4,B,B,o.aluFrame,0,1.3-B/2,-1+B/2)),K.forEach(oe=>{b.add(h(B,2.6,B,o.aluFrame,oe,0,1-B/2),h(B,2.6,B,o.aluFrame,oe,0,-1+B/2),h(B,B,2-B*2,o.aluFrame,oe,1.3-B/2,0),h(B,B,2-B*2,o.aluFrame,oe,-1.3+B/2,0))});let Z=5,te=h(Z,.05,2-.16,o.galvSteel,-4.2+Z/2,0,0);b.add(te),b.add(h(8.4-.1,2.6-.1,.05,o.panelSolid,0,0,-1+.04)),b.add(h(8.4-.1,.05,2-.16,o.galvSteel,0,-1.3+.03,0)),b.add(h(.05,2.6-.1,2-.16,o.panelSolid,4.2-.03,0,0));let ne=h(.18,1.2,1.2,o.galvSteel,4.2+.09,-.2,0);b.add(ne),b.add(h(.05,2.6-.1,2-.16,o.panelSolid,-4.2+.03,0,0));let Te=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],ge=[1.7,1.7,1.6,1.7,1.7];Te.forEach((oe,Ve)=>{let Ne=ge[Ve]-.08,Pt=h(Ne,.04,2-.16,o.panelCutaway,oe,1.3-.02,0,!1,!1);b.add(Pt),X(Pt,o.panelSolid,o.panelCutaway);let Ma=h(Ne,2.6-.18,.03,o.panelCutaway,oe,0,1-.02,!1,!1);b.add(Ma),X(Ma,o.panelSolid,o.panelCutaway);let Ni=.04;b.add(h(Ne,Ni,.02,o.aluFrame,oe,(2.6-.18)/2,1),h(Ne,Ni,.02,o.aluFrame,oe,-2.42/2,1),h(Ni,2.6-.18,.02,o.aluFrame,oe-Ne/2,0,1),h(Ni,2.6-.18,.02,o.aluFrame,oe+Ne/2,0,1)),[-.45,.45].forEach(xn=>{b.add(h(.04,.14,.05,o.doorHandle,oe+Ne/2-.1,xn,1+.02))}),[-.55,.55].forEach(xn=>{b.add(h(.03,.1,.03,o.aluFrame,oe-Ne/2+.04,xn,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([oe,Ve])=>{let Ne=g(.14,.14,.04,24,o.aluFrame,oe,Ve,1,Math.PI/2),Pt=g(.11,.11,.045,20,o.panelCutaway,oe,Ve,1,Math.PI/2);b.add(Ne,Pt)}),[[-1.65,.1],[3.35,.35]].forEach(([oe,Ve])=>{let Ne=g(.08,.08,.03,20,o.aluFrame,oe,Ve,1.015,Math.PI/2),Pt=g(.07,.07,.035,20,o.gaugeFace,oe,Ve,1+.015,Math.PI/2);b.add(Ne,Pt),b.add(g(.008,.008,.22,8,o.panelCutaway,oe-.03,Ve-.12,1+.01)),b.add(g(.008,.008,.22,8,o.panelCutaway,oe+.03,Ve-.12,1+.01))});let $e=.48,dt=.68,Gt=.18,qt=h($e,dt,Gt,o.galvSteel,2.75,.45,1+Gt/2),Ii=h(.24,.16,.01,o.touchscreen,2.75,.56,1+Gt+.005),St=g(.014,.014,.02,10,o.coolingFin,2.65,.42,1+Gt+.01,Math.PI/2),pi=g(.014,.014,.02,10,o.yellowSafety,2.75,.42,1+Gt+.01,Math.PI/2),Yi=g(.014,.014,.02,10,o.heatingFin,2.85,.42,1+Gt+.01,Math.PI/2),Jt=h(.08,.08,.01,o.yellowSafety,2.75,.3,1+Gt+.005),fi=h(.04,.06,.03,o.heatingFin,2.75,.3,1+Gt+.02);b.add(qt,Ii,St,pi,Yi,Jt,fi);let je=-1.3/2-.05,ke=2-.35,lt=.85,Rt=h(.12,lt,ke,o.aluFrame,-4.2-.06,je,0);b.add(Rt);for(let oe=0;oe<5;oe++){let Ve=je-lt/2+.1+oe*((lt-.2)/4),Ne=h(.08,.015,ke-.06,o.damperBlade,-4.2-.06,Ve,0);Ne.rotation.z=.55,b.add(Ne)}let $t=h(.16,.2,.14,o.actuatorOrange,-4.2-.06,je,1+.06);b.add($t);let At=h(.1,1.3-.35,2-.35,o.aluFrame,-3.7,je,0),Mi=h(.08,1.3-.4,2-.4,o.filterG4,-3.7,je,0);b.add(At,Mi);let Vt=1.3/2-.05,Zi=h(.12,lt,ke,o.aluFrame,-4.2-.06,Vt,0);b.add(Zi);for(let oe=0;oe<5;oe++){let Ve=Vt-lt/2+.1+oe*((lt-.2)/4),Ne=h(.08,.015,ke-.06,o.damperBlade,-4.2-.06,Ve,0);Ne.rotation.z=-.55,b.add(Ne)}let Jr=h(.16,.2,.14,o.actuatorOrange,-4.2-.06,Vt,1+.06);b.add(Jr);let Ui=new jt;Ui.position.set(-2.85,Vt,0),b.add(Ui);let Si=g(.38,.3,.12,24,o.aluFrame,.2,0,0,0,Math.PI/2),M=g(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);Ui.add(Si,M);let L=g(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);Ui.add(L);let j=g(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);Ui.add(j),T.push(()=>{M.rotation.x+=.14});let k=h(.1,1.3-.35,2-.35,o.aluFrame,-2.4,je,0);b.add(k);for(let oe=0;oe<2;oe++)for(let Ve=0;Ve<3;Ve++){let Ne=je-.22+oe*.44,Pt=-1+.35+Ve*((2-.7)/2),Ma=new sa(.18,.85,4),Ni=new Tt(Ma,o.filterCloth);Ni.position.set(-1.9,Ne,Pt),Ni.rotation.z=-Math.PI/2,Ni.scale.set(.9,1.2,.7),b.add(Ni)}let G=new jt;G.position.set(0,0,0),b.add(G);let ce=h(.38,2.6-.2,2-.2,o.aluFrame,0,0,0);b.add(ce);let xe=g(1.12,1.12,.32,36,o.aluFrame,0,0,0,0,Math.PI/2),ve=g(1.08,1.08,.3,32,o.rotorWheel,0,0,0,0,Math.PI/2);G.add(xe,ve);for(let oe=0;oe<12;oe++){let Ve=oe/12*Math.PI*2,Ne=h(.025,2.12,.02,o.aluFrame,0,0,0);Ne.rotation.x=Ve,G.add(Ne)}let me=g(.09,.09,.22,12,o.motorCast,.22,1.05,.75,0,Math.PI/2),De=g(.02,.02,.3,8,o.doorHandle,.22,.95,.75);b.add(me,De),T.push(()=>{G.rotation.x+=.01});let Ge=2-.35,Fe=1.3-.35,we=h(.24,Fe,Ge,o.coolingFin,1.15,je,0);b.add(we),[-.5,.5].forEach(oe=>{let Ve=g(.045,.045,Fe+.1,14,o.copperPipe,1.15,je,oe);b.add(Ve)});for(let oe=0;oe<8;oe++){let Ve=je-Fe/2+.1+oe*((Fe-.2)/7),Ne=new Tt(new Vo(.032,.012,8,12,Math.PI),o.copperPipe);Ne.position.set(1.15,Ve,1-.18),Ne.rotation.y=Math.PI/2,Ne.rotation.x=Math.PI/2,b.add(Ne)}let rt=h(1.3,.09,Ge+.1,o.drainPan,1.5,-1.3+.1,0);b.add(rt);let nt=g(.02,.02,.18,10,o.stainless,1.8,-1.3+.06,1-.05,0,0);b.add(nt);let st=h(.12,Fe,Ge,o.aluFrame,1.45,je,0);b.add(st);for(let oe=0;oe<12;oe++){let Ve=-.7+oe*((Ge-.2)/11),Ne=h(.08,Fe-.05,.012,o.aluFrame,1.45,je,Ve);Ne.rotation.y=.35,b.add(Ne)}let ot=h(.18,Fe,Ge,o.heatingFin,1.85,je,0);b.add(ot),[-.4,.4].forEach(oe=>{let Ve=g(.04,.04,Fe+.1,14,o.copperPipe,1.85,je,oe);b.add(Ve)});let tt=new jt;tt.position.set(2.85,je,0),b.add(tt);let Ee=g(.48,.38,.18,28,o.aluFrame,-.4,0,0,0,Math.PI/2),Ct=g(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);tt.add(Ee,Ct);let si=g(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),kt=g(.14,.05,.16,16,o.aluFrame,-.25,0,0,0,Math.PI/2);tt.add(si,kt),T.push(()=>{si.rotation.x+=.15});let Qt=g(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),oi=h(.14,.12,.14,o.motorCast,.32,.26,0);tt.add(Qt,oi);let yi=h(1.1,.08,.8,o.baseSkid,.05,-Fe/2+.08,0);tt.add(yi),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([oe,Ve])=>{let Ne=h(.12,.03,.12,o.motorCast,oe,-Fe/2+.02,Ve),Pt=g(.04,.04,.12,10,o.springSilver,oe,-Fe/2+.08,Ve);tt.add(Ne,Pt)});let he=h(.1,Fe,Ge,o.rubberBlack,2.35,je,0);b.add(he);let Re=h(1.2,.03,.03,o.yellowSafety,2.9,je+.4,1-.25),We=h(1.2,.03,.03,o.yellowSafety,2.9,je,1-.25);b.add(Re,We);for(let oe=-1;oe<=1;oe++){let Ve=oe*.45,Ne=h(.65,Fe-.1,.22,o.galvSteel,3.8,je,Ve),Pt=g(.11,.11,Fe-.1,16,o.aluFrame,3.47,je,Ve);b.add(Ne,Pt)}}function F(b){let w=-1.4100000000000001,P=h(8.6+.2,.22,.1,o.baseSkid,0,w,1-.05),V=h(8.6+.2,.22,.1,o.baseSkid,0,w,-1+.05);b.add(P,V);let K=[-4.3,-2.6,-.9,.8,2.6,4.3];K.forEach(he=>{b.add(h(.12,.22,2-.2,o.baseSkid,he,w,0))}),[-2.6,.8].forEach(he=>{b.add(h(.28,.12,.12,o.stainless,he,w,1-.04)),b.add(h(.28,.12,.12,o.stainless,he,w,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([he,Re])=>{b.add(h(.08,.18,.08,o.yellowSafety,he,w+.06,Re))});let B=.08;b.add(h(8.6,B,B,o.stainless,0,-1.3+B/2,1-B/2),h(8.6,B,B,o.stainless,0,-1.3+B/2,-1+B/2),h(8.6,B,B,o.stainless,0,1.3-B/2,1-B/2),h(8.6,B,B,o.stainless,0,1.3-B/2,-1+B/2)),K.forEach(he=>{b.add(h(B,2.6,B,o.stainless,he,0,1-B/2),h(B,2.6,B,o.stainless,he,0,-1+B/2),h(B,B,2-B*2,o.stainless,he,1.3-B/2,0),h(B,B,2-B*2,o.stainless,he,-1.3+B/2,0))});let Z=5.1,te=h(Z,.05,2-.16,o.stainless,-4.3+Z/2,0,0);b.add(te),b.add(h(8.6-.1,2.6-.1,.04,o.panelSolid,0,0,-1+.03)),b.add(h(8.6-.12,2.6-.12,.01,o.stainless,0,0,-1+.055)),b.add(h(8.6-.1,.05,2-.16,o.stainless,0,-1.3+.03,0));let ne=g(.04,.04,8.6-.2,12,o.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);b.add(ne),b.add(h(.05,2.6-.1,2-.16,o.panelSolid,4.3-.03,0,0));let Te=h(.18,1.2,1.2,o.stainless,4.3+.09,-.2,0);b.add(Te),b.add(h(.05,2.6-.1,2-.16,o.panelSolid,-4.3+.03,0,0));let ge=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],$e=[1.7,1.7,1.7,1.8,1.7];ge.forEach((he,Re)=>{let We=$e[Re]-.08,oe=h(We,.04,2-.16,o.panelCutaway,he,1.3-.02,0,!1,!1);b.add(oe),X(oe,o.panelSolid,o.panelCutaway);let Ve=h(We,2.6-.18,.03,o.panelCutaway,he,0,1-.02,!1,!1);b.add(Ve),X(Ve,o.panelSolid,o.panelCutaway);let Ne=.04;b.add(h(We,Ne,.02,o.stainless,he,(2.6-.18)/2,1),h(We,Ne,.02,o.stainless,he,-2.42/2,1),h(Ne,2.6-.18,.02,o.stainless,he-We/2,0,1),h(Ne,2.6-.18,.02,o.stainless,he+We/2,0,1)),[-.45,.45].forEach(Pt=>{b.add(h(.04,.14,.05,o.doorHandle,he+We/2-.1,Pt,1+.02))}),[-.55,.55].forEach(Pt=>{b.add(h(.03,.1,.03,o.stainless,he-We/2+.04,Pt,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([he,Re])=>{let We=g(.14,.14,.04,24,o.stainless,he,Re,1,Math.PI/2),oe=g(.11,.11,.045,20,o.panelCutaway,he,Re,1,Math.PI/2);b.add(We,oe)}),[[-1.75,.1],[3.45,.35]].forEach(([he,Re])=>{let We=g(.08,.08,.03,20,o.stainless,he,Re,1.015,Math.PI/2),oe=g(.07,.07,.035,20,o.gaugeFace,he,Re,1+.015,Math.PI/2);b.add(We,oe),b.add(g(.008,.008,.22,8,o.panelCutaway,he-.03,Re-.12,1+.01)),b.add(g(.008,.008,.22,8,o.panelCutaway,he+.03,Re-.12,1+.01))});let dt=.48,Gt=.68,qt=.18,Ii=h(dt,Gt,qt,o.stainless,2.85,.45,1+qt/2),St=h(.24,.16,.01,o.touchscreen,2.85,.56,1+qt+.005),pi=g(.014,.014,.02,10,o.coolingFin,2.75,.42,1+qt+.01,Math.PI/2),Yi=g(.014,.014,.02,10,o.yellowSafety,2.85,.42,1+qt+.01,Math.PI/2),Jt=g(.014,.014,.02,10,o.heatingFin,2.95,.42,1+qt+.01,Math.PI/2),fi=h(.08,.08,.01,o.yellowSafety,2.85,.3,1+qt+.005),je=h(.04,.06,.03,o.heatingFin,2.85,.3,1+qt+.02);b.add(Ii,St,pi,Yi,Jt,fi,je);let ke=-1.3/2-.05,lt=2-.35,Rt=.85,$t=h(.12,Rt,lt,o.stainless,-4.3-.06,ke,0);b.add($t);for(let he=0;he<5;he++){let Re=ke-Rt/2+.1+he*((Rt-.2)/4),We=h(.08,.015,lt-.06,o.damperBlade,-4.3-.06,Re,0);We.rotation.z=.55,b.add(We)}let At=h(.16,.2,.14,o.actuatorOrange,-4.3-.06,ke,1+.06);b.add(At);let Mi=h(.1,1.3-.35,2-.35,o.stainless,-3.8,ke,0),Vt=h(.08,1.3-.4,2-.4,o.filterG4,-3.8,ke,0);b.add(Mi,Vt);let Zi=1.3/2-.05,Jr=h(.12,Rt,lt,o.stainless,-4.3-.06,Zi,0);b.add(Jr);for(let he=0;he<5;he++){let Re=Zi-Rt/2+.1+he*((Rt-.2)/4),We=h(.08,.015,lt-.06,o.damperBlade,-4.3-.06,Re,0);We.rotation.z=-.55,b.add(We)}let Ui=h(.16,.2,.14,o.actuatorOrange,-4.3-.06,Zi,1+.06);b.add(Ui);let Si=new jt;Si.position.set(-2.95,Zi,0),b.add(Si);let M=g(.38,.3,.12,24,o.stainless,.2,0,0,0,Math.PI/2),L=g(.42,.42,.28,20,o.fanImpeller,0,0,0,0,Math.PI/2);Si.add(M,L);let j=g(.18,.18,.34,16,o.motorCast,-.32,0,0,0,Math.PI/2);Si.add(j);let k=g(.46,.46,.1,16,o.yellowSafety,.28,0,0,0,Math.PI/2,!0);Si.add(k),T.push(()=>{L.rotation.x+=.14});let G=h(.1,1.3-.35,2-.35,o.stainless,-2.5,ke,0);b.add(G);for(let he=0;he<2;he++)for(let Re=0;Re<3;Re++){let We=ke-.22+he*.44,oe=-1+.35+Re*((2-.7)/2),Ve=new sa(.18,.85,4),Ne=new Tt(Ve,o.filterCloth);Ne.position.set(-2,We,oe),Ne.rotation.z=-Math.PI/2,Ne.scale.set(.9,1.2,.7),b.add(Ne)}let ce=h(1.5,1.4,2-.35,o.stainless,-.05,0,0);ce.rotation.z=Math.PI/4,b.add(ce);let xe=h(2.2,.04,2-.3,o.stainless,-.05,0,0);xe.rotation.z=-Math.PI/4,b.add(xe);let ve=2-.35,me=1.3-.35;for(let he=0;he<3;he++){let Re=ke-.25+he*.25,We=g(.02,.02,ve-.1,12,o.coolingFin,.95,Re,0,Math.PI/2);b.add(We),b.add(h(.04,.04,.04,o.stainless,.95,Re,1-.2)),b.add(h(.04,.04,.04,o.stainless,.95,Re,-1+.2))}let De=h(.24,me,ve,o.coolingFin,1.25,ke,0);b.add(De),[-.5,.5].forEach(he=>{let Re=g(.045,.045,me+.1,14,o.copperPipe,1.25,ke,he);b.add(Re)});for(let he=0;he<8;he++){let Re=ke-me/2+.1+he*((me-.2)/7),We=new Tt(new Vo(.032,.012,8,12,Math.PI),o.copperPipe);We.position.set(1.25,Re,1-.18),We.rotation.y=Math.PI/2,We.rotation.x=Math.PI/2,b.add(We)}let Ge=h(1.3,.09,ve+.1,o.stainless,1.6,-1.3+.1,0);b.add(Ge);let Fe=g(.025,.025,.2,12,o.stainless,1.9,-1.3+.06,1-.05);b.add(Fe);let we=h(.12,me,ve,o.stainless,1.55,ke,0);b.add(we);for(let he=0;he<12;he++){let Re=-.7+he*((ve-.2)/11),We=h(.08,me-.05,.012,o.stainless,1.55,ke,Re);We.rotation.y=.35,b.add(We)}let rt=h(.18,me,ve,o.heatingFin,1.95,ke,0);b.add(rt),[-.4,.4].forEach(he=>{let Re=g(.04,.04,me+.1,14,o.copperPipe,1.95,ke,he);b.add(Re)});let nt=new jt;nt.position.set(2.85,ke,0),b.add(nt);let st=g(.48,.38,.18,28,o.stainless,-.4,0,0,0,Math.PI/2),ot=g(.44,.44,.03,24,o.copperPipe,-.38,0,0,0,Math.PI/2,!0);nt.add(st,ot);let tt=g(.52,.52,.36,24,o.fanHousing,-.05,0,0,0,Math.PI/2),Ee=g(.14,.05,.16,16,o.stainless,-.25,0,0,0,Math.PI/2);nt.add(tt,Ee),T.push(()=>{tt.rotation.x+=.15});let Ct=g(.24,.24,.45,18,o.motorCast,.32,0,0,0,Math.PI/2),si=h(.14,.12,.14,o.motorCast,.32,.26,0);nt.add(Ct,si);let kt=h(1.1,.08,.8,o.stainless,.05,-me/2+.08,0);nt.add(kt),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([he,Re])=>{let We=h(.12,.03,.12,o.motorCast,he,-me/2+.02,Re),oe=g(.04,.04,.12,10,o.springSilver,he,-me/2+.08,Re);nt.add(We,oe)});let Qt=h(.1,me,ve,o.rubberBlack,2.35,ke,0);b.add(Qt);let oi=h(.2,me-.1,ve-.1,o.stainless,3.65,ke,0),yi=h(.16,me-.15,ve-.15,o.filterCloth,3.65,ke,0);b.add(oi,yi);for(let he=-1;he<=1;he+=2){let Re=he*.4,We=h(.42,me-.1,.2,o.stainless,4.05,ke,Re);b.add(We)}}function ee(b,w){if(w==="tks"){U(b);return}if(w==="thks"){F(b);return}let P=w==="thks",V=w==="thrv-dx",K=w==="hrv",B=w==="rooftop",Z=K?4.8:B?6.2:7.6,te=K?1.9:2.6,ne=K?1.8:2,Te=Z/2,ge=te/2,$e=ne/2,dt=.22,Gt=-ge-dt/2,qt=h(Z+.3,dt,.12,o.baseSkid,0,Gt,$e-.06),Ii=h(Z+.3,dt,.12,o.baseSkid,0,Gt,-$e+.06);b.add(qt,Ii),[-Te,-Te*.5,0,Te*.5,Te].forEach(je=>{b.add(h(.12,dt,ne-.24,o.baseSkid,je,Gt,0))});let St=.08,pi=P?o.stainless:o.aluFrame;b.add(h(Z,St,St,pi,0,-ge+St/2,$e-St/2),h(Z,St,St,pi,0,-ge+St/2,-$e+St/2),h(Z,St,St,pi,0,ge-St/2,$e-St/2),h(Z,St,St,pi,0,ge-St/2,-$e+St/2));let Yi=P?o.stainless:o.galvSteel;b.add(h(Z-.1,te-.1,.05,o.panelSolid,0,0,-$e+.04),h(Z-.1,.05,ne-.1,o.panelSolid,0,ge-.03,0),h(Z-.1,.05,ne-.1,Yi,0,-ge+.03,0),h(.05,te-.1,ne-.1,o.panelSolid,Te-.03,0,0));let Jt=K?3:4,fi=(Z-.2)/Jt;for(let je=0;je<Jt;je++){let ke=-Te+.1+(je+.5)*fi,lt=h(fi-.04,te-.18,.03,o.panelCutaway,ke,0,$e-.02,!1,!1);b.add(lt),A.push(lt),b.add(h(.04,.12,.04,o.doorHandle,ke+fi*.4,0,$e+.01)),b.add(g(.11,.11,.04,16,o.aluFrame,ke,.2,$e,Math.PI/2))}if(K){let je=h(1.5,1.4,ne-.35,o.aluFrame,0,0,0);je.rotation.z=Math.PI/4,b.add(je),[-1.4,1.4].forEach((ke,lt)=>{let Rt=lt===0?-.35:.35,$t=g(.35,.35,.25,20,o.fanHousing,ke,Rt,0,0,Math.PI/2);b.add($t),T.push(()=>{$t.rotation.x+=.1})}),[-1.9,1.9].forEach(ke=>{b.add(h(.06,te-.4,ne-.4,o.filterCloth,ke,0,0))}),[[-Te-.1,.4],[Te+.1,-.4]].forEach(([ke,lt])=>{b.add(g(.32,.32,.22,24,o.galvSteel,ke,lt,0,0,Math.PI/2,!0))})}else if(B){[-1.2,1.2].forEach(ke=>{let lt=g(.55,.55,.18,24,o.motorCast,ke,ge+.09,0,0,0,!0),Rt=g(.48,.48,.04,4,o.fanImpeller,ke,ge+.12,0);b.add(lt,Rt),T.push(()=>{Rt.rotation.y+=.15})}),[-1.8,-1].forEach(ke=>{let lt=g(.2,.2,.7,16,o.motorCast,ke,-ge+.5,-$e+.5);b.add(lt)});let je=g(.45,.45,.35,20,o.fanHousing,1.8,-.2,0,0,Math.PI/2);b.add(je),T.push(()=>{je.rotation.x+=.12}),b.add(h(.3,te-.5,ne-.4,o.coolingFin,.5,-.1,0))}else{let je=new jt;je.position.set(0,0,0),b.add(je);let ke=g(1.05,1.05,.28,32,o.aluFrame,0,0,0,0,Math.PI/2),lt=g(1.01,1.01,.26,28,o.rotorWheel,0,0,0,0,Math.PI/2);je.add(ke,lt);for(let At=0;At<12;At++){let Mi=At/12*Math.PI*2,Vt=h(.03,1.98,.02,o.aluFrame,0,0,0);Vt.rotation.x=Mi,je.add(Vt)}T.push(()=>{je.rotation.x+=.008});let Rt=g(.42,.42,.35,24,o.fanHousing,2.8,-ge/2+.1,0,0,Math.PI/2),$t=g(.36,.36,.3,24,o.fanHousing,-1.3,ge/2-.05,0,0,Math.PI/2);b.add(Rt,$t),T.push(()=>{Rt.rotation.x+=.12,$t.rotation.x+=.12}),b.add(h(.28,ge-.3,ne-.35,P?o.stainless:o.coolingFin,1.35,-ge/2,0)),b.add(h(.22,ge-.3,ne-.35,o.heatingFin,1.85,-ge/2,0)),b.add(h(.95,.08,ne-.25,o.drainPan,1.6,-ge+.12,0)),b.add(h(.06,ge-.25,ne-.3,P?o.stainless:o.aluFrame,-2.1,-ge/2,0));for(let At=0;At<4;At++){let Mi=-$e+.25+(At+.5)*((ne-.4)/4),Vt=new Tt(new sa(.2,.75,4),o.filterCloth);Vt.rotateZ(-Math.PI/2),Vt.position.set(-1.7,-ge/2,Mi),Vt.scale.set(1,1.4,.8),b.add(Vt)}if(P){b.add(h(.18,ge-.3,ne-.35,o.stainless,2.15,-ge/2,0));let At=g(.03,.03,ne-.5,12,o.coolingFin,1.1,-ge/2+.2,0,Math.PI/2);b.add(At)}[-ge/2,ge/2].forEach(At=>{b.add(h(.08,ge-.25,ne-.3,o.aluFrame,-Te-.04,At,0)),b.add(h(.14,.18,.12,o.actuatorOrange,-Te-.04,At,$e+.05))}),V&&b.add(g(.2,.2,.65,16,o.motorCast,2.5,-ge/2,-$e+.5)),b.add(h(.32,.55,.18,o.motorCast,2.3,.35,$e+.09))}}function N(b,w){if(w==="tdf"){b.add(h(3.2,.04,2,o.galvSteel,0,2/2,0),h(3.2,.04,2,o.galvSteel,0,-2/2,0),h(3.2,2,.04,o.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(B=>{b.add(h(.08,.12,2+.2,o.aluFrame,B,2/2+.04,0),h(.08,.12,2+.2,o.aluFrame,B,-2/2-.04,0),h(.08,2,.12,o.aluFrame,B,0,2/2+.04),h(.08,2,.12,o.aluFrame,B,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(Z=>{[-2/2-.04,2/2+.04].forEach(te=>{b.add(h(.1,.14,.14,o.baseSkid,B,Z,te))})})});let P=h(3.2-.1,2-.1,.03,o.panelCutaway,0,0,2/2,!1,!1);b.add(P),A.push(P),[-.8,.8].forEach(B=>{b.add(h(.08,.12,.04,o.doorHandle,B,2/2-.1,2/2+.02))});let V=g(.78,.78,.45,24,o.fanImpeller,0,0,0,0,Math.PI/2),K=g(.28,.28,.35,16,o.motorCast,.25,0,0,0,Math.PI/2);b.add(V,K),T.push(()=>{V.rotation.x+=.14}),b.add(h(.24,.18,.16,o.fanHousing,-.6,2/2+.1,.4))}else if(w==="yangin-fani"){let P=g(1.25,1.25,4.2,32,o.galvSteel,0,0,0,0,Math.PI/2,!0);b.add(P),[-4.2/2,4.2/2].forEach(te=>{let ne=g(1.43,1.43,.06,32,o.baseSkid,te,0,0,0,Math.PI/2,!0);b.add(ne);for(let Te=0;Te<12;Te++){let ge=Te/12*Math.PI*2;b.add(h(.08,.04,.04,o.doorHandle,te,Math.sin(ge)*(1.25+.09),Math.cos(ge)*(1.25+.09)))}});let V=g(.46,.46,2,24,o.motorCast,.1,0,0,0,Math.PI/2),K=new Tt(new sa(.46,.6,20),o.motorCast);K.rotateZ(-Math.PI/2),K.position.set(-1.2,0,0),b.add(V,K);let B=new jt;B.position.set(-.6,0,0),b.add(B);let Z=g(.48,.48,.2,20,o.fanImpeller,0,0,0,0,Math.PI/2);B.add(Z);for(let te=0;te<8;te++){let ne=te/8*Math.PI*2,Te=h(.04,.7,.16,o.fanImpeller,0,Math.sin(ne)*.78,Math.cos(ne)*.78);Te.rotation.x=ne+.35,B.add(Te)}T.push(()=>{B.rotation.x+=.15});for(let te=0;te<4;te++){let ne=te/4*Math.PI*2,Te=h(.03,1.25-.46,.1,o.baseSkid,.4,Math.sin(ne)*(1.25+.46)/2,Math.cos(ne)*(1.25+.46)/2);Te.rotation.x=ne,b.add(Te)}b.add(h(2.8,.12,.35,o.baseSkid,0,-1.25-.1,.9),h(2.8,.12,.35,o.baseSkid,0,-1.25-.1,-.9)),b.add(h(.24,.24,.16,o.actuatorOrange,0,1.25+.1,0))}else{let P=g(.62,.62,5.2,28,o.galvSteel,0,0,0,0,Math.PI/2,!0);b.add(P),[-1.7,1.7].forEach(B=>{b.add(g(.62+.12,.62+.12,1.5,28,o.aluFrame,B,0,0,0,Math.PI/2,!0))});let V=g(.28,.28,1.2,16,o.motorCast,0,0,0,0,Math.PI/2),K=g(.62-.05,.62-.05,.12,8,o.fanImpeller,0,0,0,0,Math.PI/2);b.add(V,K),T.push(()=>{K.rotation.x+=.16});for(let B=-.3;B<=.3;B+=.2){let Z=h(.08,.04,.8,o.damperBlade,2.62,B,0);Z.rotation.z=-.2,b.add(Z)}[-5.2/2-.02,5.2/2+.02].forEach(B=>{b.add(g(.62+.02,.62+.02,.04,16,o.aluFrame,B,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(B=>{b.add(h(.08,.55,.25,o.baseSkid,B,.62+.35,0))})}}function W(b,w){if(w==="spiral-kanal"){let P=g(.75,.75,4.4,32,o.galvSteel,-.6,0,0,0,Math.PI/2,!0);b.add(P);for(let K=-2.6;K<=1.2;K+=.45)b.add(g(.75+.015,.75+.015,.025,32,o.aluFrame,K,0,0,0,Math.PI/2,!0));b.add(g(.75+.025,.75+.025,.12,32,o.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let V=g(.75-.01,.75-.01,1.8,28,o.galvSteel,2.2,.9,0,0,0,!0);b.add(V),b.add(g(.75+.06,.75+.06,.08,32,o.baseSkid,-.8,0,0,0,Math.PI/2,!0)),b.add(g(.02,.02,1.4,8,o.baseSkid,-.8,.75+.7,0))}else if(w==="paslanmaz-kanal"){let P=g(.85,.85,4.6,32,o.stainless,0,0,0,0,Math.PI/2,!0);b.add(P),b.add(h(4.6-.02,.02,.03,o.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(V=>{b.add(g(.85+.2,.85+.2,.08,32,o.stainless,V,0,0,0,Math.PI/2,!0));for(let K=0;K<8;K++){let B=K/8*Math.PI*2;b.add(h(.12,.04,.04,o.doorHandle,V,Math.sin(B)*(.85+.1),Math.cos(B)*(.85+.1)))}}),b.add(g(.32,.32,.06,16,o.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(V=>{b.add(h(.04,.08,.06,o.doorHandle,V,0,.85+.07))})}else{b.add(h(4.6,.04,2.4,o.galvSteel,0,2/2,0),h(4.6,.04,2.4,o.galvSteel,0,-2/2,0),h(4.6,2,.04,o.galvSteel,0,0,-2.4/2));let P=h(.9,2,.04,o.galvSteel,-4.6/2+.45,0,2.4/2),V=h(.9,2,.04,o.galvSteel,4.6/2-.45,0,2.4/2),K=h(4.6-1.8,2-.3,.03,o.panelCutaway,0,0,2.4/2,!1,!1);b.add(P,V,K),A.push(K),b.add(h(4.6-1.9,2-.4,.08,o.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(B=>{b.add(h(.08,.14,2.4+.24,o.aluFrame,B,2/2+.05,0),h(.08,.14,2.4+.24,o.aluFrame,B,-2/2-.05,0),h(.08,2,.14,o.aluFrame,B,0,2.4/2+.05),h(.08,2,.14,o.aluFrame,B,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(Z=>{[-2.4/2-.05,2.4/2+.05].forEach(te=>{b.add(h(.1,.16,.16,o.baseSkid,B,Z,te))})})}),b.add(h(4.6-.8,.02,.02,o.aluFrame,0,2/2+.02,0))}}function re(b,w){if(w==="menfez"){b.add(h(.24,.14,3.4+.2,o.aluFrame,0,2.2/2+.05,0),h(.24,.14,3.4+.2,o.aluFrame,0,-2.2/2-.05,0),h(.24,2.2,.14,o.aluFrame,0,0,3.4/2+.05),h(.24,2.2,.14,o.aluFrame,0,0,-3.4/2-.05));for(let P=-2.2/2+.2;P<=2.2/2-.15;P+=.24){let V=h(.08,.02,3.3,o.damperBlade,.09,P,0);V.rotation.z=.22,b.add(V)}for(let P=-3.4/2+.25;P<=3.4/2-.2;P+=.28){let V=h(.06,2.1500000000000004,.02,o.damperBlade,0,0,P);V.rotation.y=.2,b.add(V)}b.add(h(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,2.2/2-.04,0),h(.12,.08,3.4-.1,o.motorCast,-.24/2-.04,-2.2/2+.04,0)),b.add(h(.08,.12,.08,o.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(w==="difuzor"){b.add(h(3.4,.03,1.5,o.galvSteel,0,1.3/2+.3,0),h(3.4,1.3,.03,o.galvSteel,0,.3,-1.5/2),h(3.4,1.3,.03,o.galvSteel,0,.3,1.5/2)),b.add(g(.42,.42,.35,24,o.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),b.add(h(3.4+.2,.06,1.5+.2,o.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(V=>{b.add(h(3.4-.1,.04,.06,o.doorHandle,0,-1.3/2+.26,V))});let P=h(1.8,.04,1.8,o.panelSolid,0,-1,0);b.add(P);for(let V=0;V<16;V++){let K=V/16*Math.PI*2,B=h(.03,.02,.36,o.doorHandle,Math.sin(K)*.55,-.98,Math.cos(K)*.55);B.rotation.y=K+.5,b.add(B)}}else{b.add(h(1.4,.04,2.4,o.galvSteel,0,2.2/2,0),h(1.4,.04,2.4,o.galvSteel,0,-2.2/2,0),h(1.4,2.2,.04,o.galvSteel,0,0,-2.4/2),h(1.4,2.2,.04,o.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(V=>{b.add(h(.08,.14,2.4+.2,o.aluFrame,V,2.2/2+.05,0),h(.08,.14,2.4+.2,o.aluFrame,V,-2.2/2-.05,0),h(.08,2.2,.14,o.aluFrame,V,0,2.4/2+.05),h(.08,2.2,.14,o.aluFrame,V,0,-2.4/2-.05))});for(let V=-2.2/2+.35;V<=2.2/2-.25;V+=.5){let K=h(.35,.04,2.28,o.damperBlade,0,V,0);K.rotation.z=.35,b.add(K)}b.add(h(.03,2.2-.4,.03,o.brassGold,.15,0,2.4/2-.08));let P=h(.22,.34,.18,o.actuatorOrange,.1,.2,2.4/2+.14);b.add(P),b.add(g(.025,.025,.15,12,o.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),b.add(g(.03,.03,.12,12,o.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function q(b){b.add(h(4.4,.04,2.2,o.galvSteel,0,2.4/2,0),h(4.4,.04,2.2,o.galvSteel,0,-2.4/2,0),h(4.4,2.4,.04,o.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(te=>{b.add(h(.08,.12,2.2+.2,o.aluFrame,te,2.4/2+.04,0),h(.08,.12,2.2+.2,o.aluFrame,te,-2.4/2-.04,0),h(.08,2.4,.12,o.aluFrame,te,0,2.2/2+.04),h(.08,2.4,.12,o.aluFrame,te,0,-2.2/2-.04))});let w=h(4.4-.1,2.4-.1,.03,o.panelCutaway,0,0,2.2/2,!1,!1);b.add(w),A.push(w);let P=h(.12,2.4-.2,2.2-.2,o.aluFrame,-1.4,0,0),V=h(.1,2.4-.25,2.2-.25,o.filterCloth,-1.4,0,0);b.add(P,V),b.add(h(.1,2.4-.2,2.2-.2,o.aluFrame,-.2,0,0));for(let te=0;te<4;te++){let ne=-.7+te*.46,Te=new Tt(new sa(.2,1.1,4),o.filterCloth);Te.rotateZ(-Math.PI/2),Te.position.set(.4,0,ne),Te.scale.set(1,1.3,.75),b.add(Te)}let K=h(.25,2.4-.2,2.2-.2,o.aluFrame,1.4,0,0),B=h(.22,2.4-.26,2.2-.26,o.filterCloth,1.4,0,0),Z=h(.26,2.4-.18,.04,o.coolingFin,1.4,0,2.2/2-.1);b.add(K,B,Z),[-1,.6].forEach(te=>{b.add(g(.09,.09,.04,16,o.aluFrame,te,.6,2.2/2+.03,Math.PI/2))})}function fe(b,w){if(w==="vrf-dis"){b.add(h(3.2,3.6,.04,o.panelSolid,0,0,-2/2),h(3.2,.04,2,o.panelSolid,0,3.6/2,0),h(3.2,.12,2,o.baseSkid,0,-3.6/2,0),h(.04,3.6-.2,2-.1,o.coolingFin,-3.2/2,.05,0),h(.04,3.6-.2,2-.1,o.coolingFin,3.2/2,.05,0));let P=h(3.2-.1,3.6-.2,.03,o.panelCutaway,0,.05,2/2,!1,!1);b.add(P),A.push(P);let V=g(.82,.82,.22,28,o.fanHousing,0,3.6/2+.11,0,0,0,!0),K=g(.72,.72,.05,4,o.fanImpeller,0,3.6/2+.14,0);b.add(V,K),T.push(()=>{K.rotation.y+=.16}),[-.6,.6].forEach(B=>{b.add(g(.26,.26,.9,16,o.motorCast,B,-3.6/2+.6,-.2))}),b.add(g(.22,.22,1.1,16,o.motorCast,-1.1,-3.6/2+.7,.2)),b.add(h(3.2-.2,2.6,.1,o.coolingFin,0,.2,-2/2+.08)),b.add(h(.22,.18,.14,o.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(w==="vrf-ic"){let P=new jt;P.rotation.x=-Math.PI+.55,b.add(P);let V=h(2.8,.8,2.8,o.galvSteel,0,.5,0),K=h(3.2,.08,3.2,o.panelSolid,0,.05,0);P.add(V,K);let B=h(1.6,.02,1.6,o.filterCloth,0,.02,0);P.add(B),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([te,ne,Te])=>{let ge=h(1.7,.03,.16,o.doorHandle,te,.01,ne);ge.rotation.y=Te,P.add(ge)});let Z=g(.65,.65,.35,20,o.fanImpeller,0,.5,0);P.add(Z),T.push(()=>{Z.rotation.y+=.14}),P.add(h(.18,.22,.18,o.actuatorOrange,1.3,.5,.8)),P.add(g(.04,.04,.3,12,o.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let P=h(4.6,.04,2,o.stainless,0,.8,-.3),V=h(4.6,1.6,.04,o.stainless,0,0,-2.6/2),K=h(.04,1.6,2.6,o.stainless,-4.6/2,0,0),B=h(.04,1.6,2.6,o.stainless,4.6/2,0,0),Z=h(4.6,.9,.04,o.stainless,0,.25,2.6/2-.2);Z.rotation.x=.5,b.add(P,V,K,B,Z),b.add(g(.55,.55,.3,24,o.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let te=-4.6/2+.6;te<=4.6/2-.6;te+=.75){let ne=h(.68,.04,1.3,o.aluFrame,te,-.2,.1);ne.rotation.x=-.4,b.add(ne)}b.add(g(.1,.08,.18,16,o.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),b.add(g(.02,.02,4.6-.6,12,o.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(te=>{let ne=g(.035,.02,.09,10,o.brassGold,te,-.12,.85);b.add(ne)}),b.add(h(.14,.2,.08,o.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}i==="tks"?U(R):i==="thks"?F(R):["thrv-dx","hrv","rooftop"].includes(i)?ee(R,i):["tdf","yangin-fani","jet-fan"].includes(i)?N(R,i):["galvaniz-kanal","spiral-kanal","paslanmaz-kanal"].includes(i)?W(R,i):["menfez","difuzor","damper"].includes(i)?re(R,i):i==="filtre"?q(R):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?fe(R,i):U(R),R.updateMatrixWorld(!0);let J=new Zr().setFromObject(R),$=J.getSize(new z),se=J.getCenter(new z);R.position.sub(se);let Xe=-$.y/2;C.position.y=Xe-.05,H.position.y=Xe-.04;let Ce=Math.max($.x,$.y,$.z),ft=l.fov*(Math.PI/180),He=Math.abs(Ce/2/Math.tan(ft/2))*1.05;He=Math.max(He,3.8);let Q=new z(He*.72,He*.38,He*.74),le=new z(0,0,0);l.position.copy(Q),l.lookAt(le),c.target.copy(le),c.update();let de=null;function Le(b,w,P=650){let V=l.position.clone(),K=c.target.clone(),B=performance.now();de={update:Z=>{let te=Z-B,ne=Math.min(1,te/P),Te=ne*ne*(3-2*ne);l.position.lerpVectors(V,b,Te),c.target.lerpVectors(K,w,Te),c.update(),ne>=1&&(de=null)}}}let Ie=new jt;a.add(Ie);let Me=80,at=[],it=new Float32Array(Me*3),Oe=new Float32Array(Me*3),vt=i==="tks",Nt=i==="thks",wt=vt||Nt,ct=Math.max(2,$.x/2+.4),Ht=Math.max(1,$.y*.45),yt=Math.max(1,$.z*.45);for(let b=0;b<Me;b++){let w=wt?b<Me*.7:b<Me*.65;at.push({isSupply:w,progress:Math.random(),speed:(wt?.006:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(wt?.35:Ht),offsetZ:(Math.random()-.5)*(wt?.7:yt)}),w?(Oe[b*3]=.02,Oe[b*3+1]=.65,Oe[b*3+2]=.98):(Oe[b*3]=.95,Oe[b*3+1]=.45,Oe[b*3+2]=.12)}let gt=new ii;gt.setAttribute("position",new ci(it,3)),gt.setAttribute("color",new ci(Oe,3));let I=document.createElement("canvas");I.width=32,I.height=32;let Ot=I.getContext("2d"),Je=Ot.createRadialGradient(16,16,0,16,16,16);Je.addColorStop(0,"rgba(255, 255, 255, 1)"),Je.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),Je.addColorStop(1,"rgba(0, 0, 0, 0)"),Ot.fillStyle=Je,Ot.fillRect(0,0,32,32);let _t=new Go(I),y=new $l({size:.15,map:_t,transparent:!0,opacity:.85,vertexColors:!0,blending:is,depthWrite:!1}),x=new Lu(gt,y);Ie.add(x),T.push(()=>{if(!ie.cfdEnabled){Ie.visible=!1;return}Ie.visible=!0;let b=gt.attributes.position.array;for(let w=0;w<Me;w++){let P=at[w];P.progress+=P.speed,P.progress>1&&(P.progress=0),wt?P.isSupply?(b[w*3]=-4.3+P.progress*8.6,b[w*3+1]=-.65+Math.sin(P.progress*Math.PI*4)*.08+P.offsetY,b[w*3+2]=P.offsetZ):(b[w*3]=1.2-P.progress*5.5,b[w*3+1]=.65+P.offsetY,b[w*3+2]=P.offsetZ):(b[w*3]=-ct+P.progress*(ct*2),b[w*3+1]=(P.isSupply?-.2:.2)+P.offsetY,b[w*3+2]=P.offsetZ)}gt.attributes.position.needsUpdate=!0});let D=new jt;a.add(D);function Y(b){let w=document.createElement("canvas");w.width=64,w.height=64;let P=w.getContext("2d");P.fillStyle="#0284c7",P.beginPath(),P.arc(32,32,28,0,Math.PI*2),P.fill(),P.lineWidth=4,P.strokeStyle="#ffffff",P.stroke(),P.fillStyle="#ffffff",P.font="bold 26px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText(b,32,33);let V=new Go(w);return V.minFilter=zt,V}let ae=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],pe=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],Se=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],O=[];ae.forEach((b,w)=>{let P=new jt,V,K,B;if(vt&&pe[w])[V,K,B]=pe[w];else if(Nt&&Se[w])[V,K,B]=Se[w];else{let Te=ae.length,ge=$.z>$.x,$e=ge?$.z:$.x,dt=-$e/2+.4+w/Math.max(1,Te-1)*($e-.8);V=ge?$.x/2+.4:dt,K=w%2===0?-.2:.4,B=ge?dt:$.z/2+.4}P.position.set(V,K,B);let Z=new Tt(new Xs(.012,.012,.25,8),new dn({color:165063}));Z.position.y=-.12;let te=new Zl({map:Y(b.num||`0${w+1}`),depthTest:!1}),ne=new Tu(te);ne.scale.set(.42,.42,1),ne.position.y=.05,ne.userData={hotspot:b,pos:[V,K,B]},P.add(Z,ne),D.add(P),P.userData={hotspot:b,pos:[V,K,B]},O.push(ne)});let ue=new Yu,_e=new Ue;function be(b){let w=u.domElement.getBoundingClientRect();_e.x=(b.clientX-w.left)/w.width*2-1,_e.y=-((b.clientY-w.top)/w.height)*2+1,ue.setFromCamera(_e,l);let P=ue.intersectObjects(O,!0);if(P.length>0){let V=P[0].object;for(;V.parent&&!V.userData.hotspot;)V=V.parent;if(V&&V.userData.hotspot){showHotspotCard(V.userData.hotspot);let K=V.userData.pos;if(K){let B=new z(K[0],K[1],K[2]),Z=new z(K[0]*.8+1.2,K[1]+.5,K[2]+2.8);Le(Z,B,700)}}}}u.domElement.addEventListener("click",be);let ie={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};ug(),cg(t,r,{onToggleRotate:()=>{ie.autoRotate=!ie.autoRotate,c.autoRotate=ie.autoRotate,Gi("btn-rotate",ie.autoRotate)},onToggleCfd:()=>{ie.cfdEnabled=!ie.cfdEnabled,Gi("btn-cfd",ie.cfdEnabled)},onToggleCutaway:()=>{ie.cutawayEnabled=!ie.cutawayEnabled,A.forEach(b=>{let w=b.userData.solidMat||o.panelSolid,P=b.userData.cutawayMat||o.panelCutaway;b.material=ie.cutawayEnabled?P:w}),Gi("btn-cutaway",ie.cutawayEnabled)},onToggleView:()=>{let b=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),w=b&&window.getComputedStyle(b).display!=="none";b&&(w?(b.style.display="none",t.style.display="block",ie.viewMode="3d",Gi("btn-view",!1),Be()):(b.style.display="flex",t.style.display="none",ie.viewMode="2d",Gi("btn-view",!0)))},onResetCamera:()=>{Le(Q,le,650),window.closeHotspotCard()}}),Gi("btn-rotate",ie.autoRotate),Gi("btn-cfd",ie.cfdEnabled),Gi("btn-cutaway",ie.cutawayEnabled),Gi("btn-view",ie.viewMode==="2d");let Ae=null;function Pe(){Ae=requestAnimationFrame(Pe),de?de.update(performance.now()):c.update();for(let b=0;b<T.length;b++)T[b]();u.render(a,l)}Pe();function Be(){if(!t)return;let b=t.clientWidth,w=t.clientHeight||480;b>0&&w>0&&(l.aspect=b/w,l.updateProjectionMatrix(),u.setSize(b,w))}return window.addEventListener("resize",Be),{destroy:()=>{cancelAnimationFrame(Ae),window.removeEventListener("resize",Be),u.dispose()}}}function ug(){if(document.getElementById("sky-3d-hud-styles"))return;let e=document.createElement("style");e.id="sky-3d-hud-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function cg(e,t,i){let r=e.closest(".sky-vlog-hero")||e.parentElement||e,a=r.querySelector(".sky-3d-hud-container");a&&a.remove(),a=document.createElement("div"),a.className="sky-3d-hud-container",a.innerHTML=`
    <div class="sky-3d-hud-left">
      <div class="sky-3d-badge">
        <span class="sky-3d-badge-dot"></span>
        <span id="sky-product-tag">${t.title||"3D CAD Dijital İkiz"}</span>
      </div>
      <div class="sky-3d-badge" style="font-weight: 500; font-size: 11px; color: #64748b;">
        360° Çevir • Yakınlaştır • İncele
      </div>
    </div>
    <div class="sky-3d-hud-right">
      <button id="btn-rotate" class="sky-3d-btn" title="Otomatik Döndürmeyi Aç/Kapat">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
        Döndür
      </button>
      <button id="btn-cfd" class="sky-3d-btn" title="Aerodinamik Hava Akışını Aç/Kapat">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Hava Akışı
      </button>
      <button id="btn-cutaway" class="sky-3d-btn" title="Gövdeyi Şeffaf / Katı Yap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
        Şeffaf Gövde
      </button>
      <button id="btn-view" class="sky-3d-btn" title="2D Şema ile 3D Model Arasında Geçiş Yap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        2D Çizim
      </button>
      <button id="btn-reset" class="sky-3d-btn" title="Varsayılan Kamera Açısına Dön">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        Sıfırla
      </button>
    </div>
  `,r.appendChild(a);let n=r.querySelector("#sky-3d-hotspot-card");n&&n.remove(),n=document.createElement("div"),n.id="sky-3d-hotspot-card",n.className="sky-3d-callout-card",n.style.display="none",n.innerHTML=`
    <button class="sky-3d-callout-close" onclick="window.closeHotspotCard()">&times;</button>
    <span id="sky-card-num" class="sky-3d-callout-num">01</span>
    <div id="sky-card-title" class="sky-3d-callout-title">Bileşen Adı</div>
    <div id="sky-card-desc" class="sky-3d-callout-desc">Bileşen teknik detay açıklaması.</div>
  `,r.appendChild(n),document.getElementById("btn-rotate").addEventListener("click",i.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",i.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",i.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",i.onToggleView),document.getElementById("btn-reset").addEventListener("click",i.onResetCamera)}function Gi(e,t){let i=document.getElementById(e);i&&(t?i.classList.add("active"):i.classList.remove("active"))}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>yl()):yl();/*! Bundled license information:

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
