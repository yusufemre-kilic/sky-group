var As="186",gr={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ph=0,to=1,fh=2,Gr=1,mh=2,zr=3,ki=0,Nt=1,mi=2,vi=0,Vr=1,Nn=2,io=3,ro=4,gh=5,ur=100,_h=101,vh=102,xh=103,Mh=104,Sh=200,yh=201,Eh=202,Th=203,dl=204,pl=205,bh=206,wh=207,Ah=208,Rh=209,Ch=210,Ph=211,Dh=212,Lh=213,Uh=214,In=0,On=1,Fn=2,kr=3,Bn=4,zn=5,Hn=6,Gn=7,fl=0,Nh=1,Ih=2,ai=0,ml=1,gl=2,_l=3,Rs=4,vl=5,xl=6,Ml=7,Sl=300,Wi=301,Tr=302,Ja=303,$a=304,Xa=306,Vn=1e3,_i=1001,kn=1002,yt=1003,Oh=1004,Qr=1005,Et=1006,Qa=1007,Hi=1008,Ft=1009,yl=1010,El=1011,Wr=1012,Cs=1013,ni=1014,ii=1015,si=1016,Ps=1017,Ds=1018,Xr=1020,Tl=35902,bl=35899,wl=1021,Al=1022,qt=1023,Mi=1026,Gi=1027,Rl=1028,Ls=1029,Xi=1030,Us=1031,Ns=1033,Ca=33776,Pa=33777,Da=33778,La=33779,Wn=35840,Xn=35841,jn=35842,Yn=35843,qn=36196,Zn=37492,Kn=37496,Jn=37488,$n=37489,Fa=37490,Qn=37491,es=37808,ts=37809,is=37810,rs=37811,as=37812,ns=37813,ss=37814,os=37815,ls=37816,hs=37817,cs=37818,us=37819,ds=37820,ps=37821,fs=36492,ms=36494,gs=36495,_s=36283,vs=36284,Ba=36285,xs=36286,Fh=3200,Ms=0,Bh=1,Ci="",Gt="srgb",za="srgb-linear",Ha="linear",Ke="srgb",en=7680,zh=519,Hh=512,Gh=513,Vh=514,Is=515,kh=516,Wh=517,Os=518,Xh=519,Cl=35044,ao="300 es",ri=2e3,jr=2001;function jh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ga(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Yh(){let e=Ga("canvas");return e.style.display="block",e}var no={};function Va(...e){let t="THREE."+e.shift();console.log(t,...e)}function Pl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Le(...e){e=Pl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Xe(...e){e=Pl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function _r(...e){let t=e.join(" ");t in no||(no[t]=!0,Le(...e))}function qh(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Zh={[In]:On,[Fn]:Hn,[Bn]:Gn,[kr]:zn,[On]:In,[Hn]:Fn,[Gn]:Bn,[zn]:kr},Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,Ss=180/Math.PI;function Pi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[e&255]+Tt[e>>8&255]+Tt[e>>16&255]+Tt[e>>24&255]+"-"+Tt[t&255]+Tt[t>>8&255]+"-"+Tt[t>>16&15|64]+Tt[t>>24&255]+"-"+Tt[i&63|128]+Tt[i>>8&255]+"-"+Tt[i>>16&255]+Tt[i>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toLowerCase()}function He(e,t,i){return Math.max(t,Math.min(i,e))}function Kh(e,t){return(e%t+t)%t}function tn(e,t,i){return(1-i)*e+i*t}function ti(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jh={DEG2RAD:Ua},xr,Ce=(xr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(He(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xr.prototype.isVector2=!0,xr),Di=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],h=i[r+1],l=i[r+2],d=i[r+3],g=a[n+0],c=a[n+1],_=a[n+2],E=a[n+3];if(d!==E||o!==g||h!==c||l!==_){let T=o*g+h*c+l*_+d*E;T<0&&(g=-g,c=-c,_=-_,E=-E,T=-T);let v=1-s;if(T<.9995){let p=Math.acos(T),P=Math.sin(p);v=Math.sin(v*p)/P,s=Math.sin(s*p)/P,o=o*v+g*s,h=h*v+c*s,l=l*v+_*s,d=d*v+E*s}else{o=o*v+g*s,h=h*v+c*s,l=l*v+_*s,d=d*v+E*s;let p=1/Math.sqrt(o*o+h*h+l*l+d*d);o*=p,h*=p,l*=p,d*=p}}e[t]=o,e[t+1]=h,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],h=i[r+2],l=i[r+3],d=a[n],g=a[n+1],c=a[n+2],_=a[n+3];return e[t]=s*_+l*d+o*c-h*g,e[t+1]=o*_+l*g+h*d-s*c,e[t+2]=h*_+l*c+s*g-o*d,e[t+3]=l*_-s*d-o*g-h*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,h=s(i/2),l=s(r/2),d=s(a/2),g=o(i/2),c=o(r/2),_=o(a/2);switch(n){case"XYZ":this._x=g*l*d+h*c*_,this._y=h*c*d-g*l*_,this._z=h*l*_+g*c*d,this._w=h*l*d-g*c*_;break;case"YXZ":this._x=g*l*d+h*c*_,this._y=h*c*d-g*l*_,this._z=h*l*_-g*c*d,this._w=h*l*d+g*c*_;break;case"ZXY":this._x=g*l*d-h*c*_,this._y=h*c*d+g*l*_,this._z=h*l*_+g*c*d,this._w=h*l*d-g*c*_;break;case"ZYX":this._x=g*l*d-h*c*_,this._y=h*c*d+g*l*_,this._z=h*l*_-g*c*d,this._w=h*l*d+g*c*_;break;case"YZX":this._x=g*l*d+h*c*_,this._y=h*c*d+g*l*_,this._z=h*l*_-g*c*d,this._w=h*l*d-g*c*_;break;case"XZY":this._x=g*l*d-h*c*_,this._y=h*c*d-g*l*_,this._z=h*l*_+g*c*d,this._w=h*l*d+g*c*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],h=t[2],l=t[6],d=t[10],g=i+s+d;if(g>0){let c=.5/Math.sqrt(g+1);this._w=.25/c,this._x=(l-o)*c,this._y=(a-h)*c,this._z=(n-r)*c}else if(i>s&&i>d){let c=2*Math.sqrt(1+i-s-d);this._w=(l-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+h)/c}else if(s>d){let c=2*Math.sqrt(1+s-i-d);this._w=(a-h)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+l)/c}else{let c=2*Math.sqrt(1+d-i-s);this._w=(n-r)/c,this._x=(a+h)/c,this._y=(o+l)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,h=t._z,l=t._w;return this._x=i*l+n*s+r*h-a*o,this._y=r*l+n*o+a*s-i*h,this._z=a*l+n*h+i*o-r*s,this._w=n*l-i*s-r*o-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let h=Math.acos(s),l=Math.sin(h);o=Math.sin(o*h)/l,t=Math.sin(t*h)/l,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mr,F=(Mr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(so.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(so.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,h=t.w,l=2*(s*a-o*r),d=2*(o*i-n*a),g=2*(n*r-s*i);return this.x=i+h*l+s*g-o*d,this.y=r+h*d+o*l-n*g,this.z=a+h*g+n*d-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this.z=He(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this.z=He(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,h=i.z;return this.x=a*h-n*o,this.y=n*s-r*h,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return rn.copy(this).projectOnVector(t),this.sub(rn)}reflect(t){return this.sub(rn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(He(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mr.prototype.isVector3=!0,Mr),rn=new F,so=new Di,Sr,Be=(Sr=class{constructor(t,i,r,a,n,s,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,h,l)}set(t,i,r,a,n,s,o,h,l){let d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=i,d[4]=n,d[5]=h,d[6]=r,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],h=r[6],l=r[1],d=r[4],g=r[7],c=r[2],_=r[5],E=r[8],T=a[0],v=a[3],p=a[6],P=a[1],O=a[4],m=a[7],b=a[2],A=a[5],R=a[8];return n[0]=s*T+o*P+h*b,n[3]=s*v+o*O+h*A,n[6]=s*p+o*m+h*R,n[1]=l*T+d*P+g*b,n[4]=l*v+d*O+g*A,n[7]=l*p+d*m+g*R,n[2]=c*T+_*P+E*b,n[5]=c*v+_*O+E*A,n[8]=c*p+_*m+E*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],h=t[6],l=t[7],d=t[8];return i*s*d-i*o*l-r*n*d+r*o*h+a*n*l-a*s*h}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],h=t[6],l=t[7],d=t[8],g=d*s-o*l,c=o*h-d*n,_=l*n-s*h,E=i*g+r*c+a*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=g*T,t[1]=(a*l-d*r)*T,t[2]=(o*r-a*s)*T,t[3]=c*T,t[4]=(d*i-a*h)*T,t[5]=(a*n-o*i)*T,t[6]=_*T,t[7]=(r*h-l*i)*T,t[8]=(s*i-r*n)*T,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let h=Math.cos(n),l=Math.sin(n);return this.set(r*h,r*l,-r*(h*s+l*o)+s+t,-a*l,a*h,-a*(-l*s+h*o)+o+i,0,0,1),this}scale(t,i){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(an.makeScale(t,i)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(an.makeRotation(-t)),this}translate(t,i){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(an.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sr.prototype.isMatrix3=!0,Sr),an=new Be,oo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){let e={enabled:!0,workingColorSpace:za,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Ke&&(a.r=xi(a.r),a.g=xi(a.g),a.b=xi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ke&&(a.r=vr(a.r),a.g=vr(a.g),a.b=vr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ci?Ha:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[za]:{primaries:t,whitePoint:r,transfer:Ha,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var Ve=$h();function xi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function vr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var qi,Qh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qi===void 0&&(qi=Ga("canvas")),qi.width=e.width,qi.height=e.height;let r=qi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ga("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=xi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ec=0,Fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(nn(r[n].image)):a.push(nn(r[n]))}else a=nn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function nn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Qh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var tc=0,sn=new F,Wt=class Na extends Li{constructor(t=Na.DEFAULT_IMAGE,i=Na.DEFAULT_MAPPING,r=_i,a=_i,n=Et,s=Hi,o=qt,h=Ft,l=Na.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=Pi(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sn).x}get height(){return this.source.getSize(sn).y}get depth(){return this.source.getSize(sn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Le(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vn:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case kn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vn:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case kn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Sl;Wt.DEFAULT_ANISOTROPY=1;var yr,pt=(yr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],h=s[4],l=s[8],d=s[1],g=s[5],c=s[9],_=s[2],E=s[6],T=s[10];if(Math.abs(h-d)<.01&&Math.abs(l-_)<.01&&Math.abs(c-E)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+_)<.1&&Math.abs(c+E)<.1&&Math.abs(o+g+T-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,P=(g+1)/2,O=(T+1)/2,m=(h+d)/4,b=(l+_)/4,A=(c+E)/4;return p>P&&p>O?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=m/r,n=b/r):P>O?P<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(P),r=m/a,n=A/a):O<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(O),r=b/n,a=A/n),this.set(r,a,n,i),this}let v=Math.sqrt((E-c)*(E-c)+(l-_)*(l-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(E-c)/v,this.y=(l-_)/v,this.z=(d-h)/v,this.w=Math.acos((o+g+T-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this.z=He(this.z,t.z,i.z),this.w=He(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this.z=He(this.z,t,i),this.w=He(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yr.prototype.isVector4=!0,yr),ic=class extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Wt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends ic{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Dl=class extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},rc=class extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Vi,st=(Vi=class{constructor(t,i,r,a,n,s,o,h,l,d,g,c,_,E,T,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,h,l,d,g,c,_,E,T,v)}set(t,i,r,a,n,s,o,h,l,d,g,c,_,E,T,v){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=h,p[2]=l,p[6]=d,p[10]=g,p[14]=c,p[3]=_,p[7]=E,p[11]=T,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vi().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Zi.setFromMatrixColumn(t,0).length(),n=1/Zi.setFromMatrixColumn(t,1).length(),s=1/Zi.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),h=Math.cos(a),l=Math.sin(a),d=Math.cos(n),g=Math.sin(n);if(t.order==="XYZ"){let c=s*d,_=s*g,E=o*d,T=o*g;i[0]=h*d,i[4]=-h*g,i[8]=l,i[1]=_+E*l,i[5]=c-T*l,i[9]=-o*h,i[2]=T-c*l,i[6]=E+_*l,i[10]=s*h}else if(t.order==="YXZ"){let c=h*d,_=h*g,E=l*d,T=l*g;i[0]=c+T*o,i[4]=E*o-_,i[8]=s*l,i[1]=s*g,i[5]=s*d,i[9]=-o,i[2]=_*o-E,i[6]=T+c*o,i[10]=s*h}else if(t.order==="ZXY"){let c=h*d,_=h*g,E=l*d,T=l*g;i[0]=c-T*o,i[4]=-s*g,i[8]=E+_*o,i[1]=_+E*o,i[5]=s*d,i[9]=T-c*o,i[2]=-s*l,i[6]=o,i[10]=s*h}else if(t.order==="ZYX"){let c=s*d,_=s*g,E=o*d,T=o*g;i[0]=h*d,i[4]=E*l-_,i[8]=c*l+T,i[1]=h*g,i[5]=T*l+c,i[9]=_*l-E,i[2]=-l,i[6]=o*h,i[10]=s*h}else if(t.order==="YZX"){let c=s*h,_=s*l,E=o*h,T=o*l;i[0]=h*d,i[4]=T-c*g,i[8]=E*g+_,i[1]=g,i[5]=s*d,i[9]=-o*d,i[2]=-l*d,i[6]=_*g+E,i[10]=c-T*g}else if(t.order==="XZY"){let c=s*h,_=s*l,E=o*h,T=o*l;i[0]=h*d,i[4]=-g,i[8]=l*d,i[1]=c*g+T,i[5]=s*d,i[9]=_*g-E,i[2]=E*g-_,i[6]=o*d,i[10]=T*g+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ac,t,nc)}lookAt(t,i,r){let a=this.elements;return It.subVectors(t,i),It.lengthSq()===0&&(It.z=1),It.normalize(),Ti.crossVectors(r,It),Ti.lengthSq()===0&&(Math.abs(r.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Ti.crossVectors(r,It)),Ti.normalize(),ea.crossVectors(It,Ti),a[0]=Ti.x,a[4]=ea.x,a[8]=It.x,a[1]=Ti.y,a[5]=ea.y,a[9]=It.y,a[2]=Ti.z,a[6]=ea.z,a[10]=It.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],h=r[8],l=r[12],d=r[1],g=r[5],c=r[9],_=r[13],E=r[2],T=r[6],v=r[10],p=r[14],P=r[3],O=r[7],m=r[11],b=r[15],A=a[0],R=a[4],u=a[8],y=a[12],k=a[1],N=a[5],I=a[9],Z=a[13],U=a[2],H=a[6],J=a[10],V=a[14],ce=a[3],Y=a[7],K=a[11],Q=a[15];return n[0]=s*A+o*k+h*U+l*ce,n[4]=s*R+o*N+h*H+l*Y,n[8]=s*u+o*I+h*J+l*K,n[12]=s*y+o*Z+h*V+l*Q,n[1]=d*A+g*k+c*U+_*ce,n[5]=d*R+g*N+c*H+_*Y,n[9]=d*u+g*I+c*J+_*K,n[13]=d*y+g*Z+c*V+_*Q,n[2]=E*A+T*k+v*U+p*ce,n[6]=E*R+T*N+v*H+p*Y,n[10]=E*u+T*I+v*J+p*K,n[14]=E*y+T*Z+v*V+p*Q,n[3]=P*A+O*k+m*U+b*ce,n[7]=P*R+O*N+m*H+b*Y,n[11]=P*u+O*I+m*J+b*K,n[15]=P*y+O*Z+m*V+b*Q,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],h=t[9],l=t[13],d=t[2],g=t[6],c=t[10],_=t[14],E=t[3],T=t[7],v=t[11],p=t[15],P=h*_-l*c,O=o*_-l*g,m=o*c-h*g,b=s*_-l*d,A=s*c-h*d,R=s*g-o*d;return i*(T*P-v*O+p*m)-r*(E*P-v*b+p*A)+a*(E*O-T*b+p*R)-n*(E*m-T*A+v*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],h=t[2],l=t[6],d=t[10];return i*(s*d-o*l)-r*(n*d-o*h)+a*(n*l-s*h)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],h=t[6],l=t[7],d=t[8],g=t[9],c=t[10],_=t[11],E=t[12],T=t[13],v=t[14],p=t[15],P=i*o-r*s,O=i*h-a*s,m=i*l-n*s,b=r*h-a*o,A=r*l-n*o,R=a*l-n*h,u=d*T-g*E,y=d*v-c*E,k=d*p-_*E,N=g*v-c*T,I=g*p-_*T,Z=c*p-_*v,U=P*Z-O*I+m*N+b*k-A*y+R*u;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/U;return t[0]=(o*Z-h*I+l*N)*H,t[1]=(a*I-r*Z-n*N)*H,t[2]=(T*R-v*A+p*b)*H,t[3]=(c*A-g*R-_*b)*H,t[4]=(h*k-s*Z-l*y)*H,t[5]=(i*Z-a*k+n*y)*H,t[6]=(v*m-E*R-p*O)*H,t[7]=(d*R-c*m+_*O)*H,t[8]=(s*I-o*k+l*u)*H,t[9]=(r*k-i*I-n*u)*H,t[10]=(E*A-T*m+p*P)*H,t[11]=(g*m-d*A-_*P)*H,t[12]=(o*y-s*N-h*u)*H,t[13]=(i*N-r*y+a*u)*H,t[14]=(T*O-E*b-v*P)*H,t[15]=(d*b-g*O+c*P)*H,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,h=t.z,l=n*s,d=n*o;return this.set(l*s+r,l*o-a*h,l*h+a*o,0,l*o+a*h,d*o+r,d*h-a*s,0,l*h-a*o,d*h+a*s,n*h*h+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,h=i._w,l=n+n,d=s+s,g=o+o,c=n*l,_=n*d,E=n*g,T=s*d,v=s*g,p=o*g,P=h*l,O=h*d,m=h*g,b=r.x,A=r.y,R=r.z;return a[0]=(1-(T+p))*b,a[1]=(_+m)*b,a[2]=(E-O)*b,a[3]=0,a[4]=(_-m)*A,a[5]=(1-(c+p))*A,a[6]=(v+P)*A,a[7]=0,a[8]=(E+O)*R,a[9]=(v-P)*R,a[10]=(1-(c+T))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Zi.set(a[0],a[1],a[2]).length(),o=Zi.set(a[4],a[5],a[6]).length(),h=Zi.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Xt.copy(this);let l=1/s,d=1/o,g=1/h;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=d,Xt.elements[5]*=d,Xt.elements[6]*=d,Xt.elements[8]*=g,Xt.elements[9]*=g,Xt.elements[10]*=g,i.setFromRotationMatrix(Xt),r.x=s,r.y=o,r.z=h,this}makePerspective(t,i,r,a,n,s,o=ri,h=!1){let l=this.elements,d=2*n/(i-t),g=2*n/(r-a),c=(i+t)/(i-t),_=(r+a)/(r-a),E,T;if(h)E=n/(s-n),T=s*n/(s-n);else if(o===ri)E=-(s+n)/(s-n),T=-2*s*n/(s-n);else if(o===jr)E=-s/(s-n),T=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=g,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=E,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ri,h=!1){let l=this.elements,d=2/(i-t),g=2/(r-a),c=-(i+t)/(i-t),_=-(r+a)/(r-a),E,T;if(h)E=1/(s-n),T=s/(s-n);else if(o===ri)E=-2/(s-n),T=-(s+n)/(s-n);else if(o===jr)E=-1/(s-n),T=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=g,l[9]=0,l[13]=_,l[2]=0,l[6]=0,l[10]=E,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Vi.prototype.isMatrix4=!0,Vi),Zi=new F,Xt=new st,ac=new F(0,0,0),nc=new F(1,1,1),Ti=new F,ea=new F,It=new F,ho=new st,co=new Di,br=class Ll{constructor(t=0,i=0,r=0,a=Ll.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],h=a[1],l=a[5],d=a[9],g=a[2],c=a[6],_=a[10];switch(i){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-g,n),this._z=0);break;case"ZXY":this._x=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(h,n));break;case"ZYX":this._y=Math.asin(-He(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(c,_),this._z=Math.atan2(h,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-g,n)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-He(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-d,_),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ho,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return co.setFromEuler(this),this.setFromQuaternion(co,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};br.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sc=0,uo=new F,Ki=new Di,hi=new st,ta=new F,Cr=new F,oc=new F,lc=new Di,po=new F(1,0,0),fo=new F(0,1,0),mo=new F(0,0,1),go={type:"added"},hc={type:"removed"},Ji={type:"childadded",child:null},on={type:"childremoved",child:null},Lt=class Ia extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ia.DEFAULT_UP.clone();let t=new F,i=new br,r=new Di,a=new F(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new st},normalMatrix:{value:new Be}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Ia.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ia.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ki.setFromAxisAngle(t,i),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,i){return Ki.setFromAxisAngle(t,i),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(po,t)}rotateY(t){return this.rotateOnAxis(fo,t)}rotateZ(t){return this.rotateOnAxis(mo,t)}translateOnAxis(t,i){return uo.copy(t).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(po,t)}translateY(t){return this.translateOnAxis(fo,t)}translateZ(t){return this.translateOnAxis(mo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ta.copy(t):ta.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Cr,ta,this.up):hi.lookAt(ta,Cr,this.up),this.quaternion.setFromRotationMatrix(hi),a&&(hi.extractRotation(a.matrixWorld),Ki.setFromRotationMatrix(hi),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(go),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hc),on.child=t,this.dispatchEvent(on),on.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(go),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,oc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,lc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let l=0,d=h.length;l<d;l++){let g=h[l];n(t.shapes,g)}else n(t.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(n(t.materials,this.material[h]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];a.animations.push(n(t.animations,h))}}if(i){let o=s(t.geometries),h=s(t.materials),l=s(t.textures),d=s(t.images),g=s(t.shapes),c=s(t.skeletons),_=s(t.animations),E=s(t.nodes);o.length>0&&(r.geometries=o),h.length>0&&(r.materials=h),l.length>0&&(r.textures=l),d.length>0&&(r.images=d),g.length>0&&(r.shapes=g),c.length>0&&(r.skeletons=c),_.length>0&&(r.animations=_),E.length>0&&(r.nodes=E)}return r.object=a,r;function s(o){let h=[];for(let l in o){let d=o[l];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new F(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cc={type:"move"},ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){n=!0;for(let E of e.hand.values()){let T=t.getJointPose(E,i),v=this._getHandJoint(h,E);T!==null&&(v.matrix.fromArray(T.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=T.radius),v.visible=T!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],g=l.position.distanceTo(d.position),c=.02,_=.005;h.inputState.pinching&&g>c+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=c-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(cc)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),h!==null&&(h.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function hn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ve.workingColorSpace){if(e=Kh(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=hn(n,a,e+1/3),this.g=hn(n,a,e),this.b=hn(n,a,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(a){a!==void 0&&parseFloat(a)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Ul[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ve.workingToColorSpace(bt.copy(this),e),Math.round(He(bt.r*255,0,255))*65536+Math.round(He(bt.g*255,0,255))*256+Math.round(He(bt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(bt.copy(this),t);let i=bt.r,r=bt.g,a=bt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,h,l=(s+n)/2;if(s===n)o=0,h=0;else{let d=n-s;switch(h=l<=.5?d/(n+s):d/(2-n-s),n){case i:o=(r-a)/d+(r<a?6:0);break;case r:o=(a-i)/d+2;break;case a:o=(i-r)/d+4;break}o/=6}return e.h=o,e.s=h,e.l=l,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Gt){Ve.workingToColorSpace(bt.copy(this),e);let t=bt.r,i=bt.g,r=bt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ia);let i=tn(bi.h,ia.h,t),r=tn(bi.s,ia.s,t),a=tn(bi.l,ia.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bt=new Fe;Fe.NAMES=Ul;var uc=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jt=new F,ci=new F,cn=new F,ui=new F,$i=new F,Qi=new F,_o=new F,un=new F,dn=new F,pn=new F,fn=new pt,mn=new pt,gn=new pt,dr=class pr{constructor(t=new F,i=new F,r=new F){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),jt.subVectors(t,i),a.cross(jt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){jt.subVectors(a,i),ci.subVectors(r,i),cn.subVectors(t,i);let s=jt.dot(jt),o=jt.dot(ci),h=jt.dot(cn),l=ci.dot(ci),d=ci.dot(cn),g=s*l-o*o;if(g===0)return n.set(0,0,0),null;let c=1/g,_=(l*h-o*d)*c,E=(s*d-o*h)*c;return n.set(1-_-E,E,_)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,i,r,a,n,s,o,h){return this.getBarycoord(t,i,r,a,ui)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(n,ui.x),h.addScaledVector(s,ui.y),h.addScaledVector(o,ui.z),h)}static getInterpolatedAttribute(t,i,r,a,n,s){return fn.setScalar(0),mn.setScalar(0),gn.setScalar(0),fn.fromBufferAttribute(t,i),mn.fromBufferAttribute(t,r),gn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(fn,n.x),s.addScaledVector(mn,n.y),s.addScaledVector(gn,n.z),s}static isFrontFacing(t,i,r,a){return jt.subVectors(r,i),ci.subVectors(t,i),jt.cross(ci).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jt.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),jt.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return pr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return pr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;$i.subVectors(a,r),Qi.subVectors(n,r),un.subVectors(t,r);let h=$i.dot(un),l=Qi.dot(un);if(h<=0&&l<=0)return i.copy(r);dn.subVectors(t,a);let d=$i.dot(dn),g=Qi.dot(dn);if(d>=0&&g<=d)return i.copy(a);let c=h*g-d*l;if(c<=0&&h>=0&&d<=0)return s=h/(h-d),i.copy(r).addScaledVector($i,s);pn.subVectors(t,n);let _=$i.dot(pn),E=Qi.dot(pn);if(E>=0&&_<=E)return i.copy(n);let T=_*l-h*E;if(T<=0&&l>=0&&E<=0)return o=l/(l-E),i.copy(r).addScaledVector(Qi,o);let v=d*E-_*g;if(v<=0&&g-d>=0&&_-E>=0)return _o.subVectors(n,a),o=(g-d)/(g-d+(_-E)),i.copy(a).addScaledVector(_o,o);let p=1/(v+T+c);return s=T*p,o=c*p,i.copy(r).addScaledVector($i,s).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Yt):Yt.fromBufferAttribute(a,n),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),aa.subVectors(this.max,Pr),er.subVectors(e.a,Pr),tr.subVectors(e.b,Pr),ir.subVectors(e.c,Pr),wi.subVectors(tr,er),Ai.subVectors(ir,tr),Ii.subVectors(er,ir);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Ii.z,Ii.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Ii.z,0,-Ii.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Ii.y,Ii.x,0];return!_n(t,er,tr,ir,aa)||(t=[1,0,0,0,1,0,0,0,1],!_n(t,er,tr,ir,aa))?!1:(na.crossVectors(wi,Ai),t=[na.x,na.y,na.z],_n(t,er,tr,ir,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new F,new F,new F,new F,new F,new F,new F,new F],Yt=new F,ra=new qr,er=new F,tr=new F,ir=new F,wi=new F,Ai=new F,Ii=new F,Pr=new F,aa=new F,na=new F,Oi=new F;function _n(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Oi.fromArray(e,n);let o=a.x*Math.abs(Oi.x)+a.y*Math.abs(Oi.y)+a.z*Math.abs(Oi.z),h=t.dot(Oi),l=i.dot(Oi),d=r.dot(Oi);if(Math.max(-Math.max(h,l,d),Math.min(h,l,d))>o)return!1}return!0}var mt=new F,sa=new Ce,dc=0,kt=class extends Li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Nl=class extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Il=class extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},wt=class extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},pc=new qr,Dr=new F,vn=new F,Zr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):pc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(vn)),this.expandByPoint(Dr.copy(e.center).sub(vn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fc=0,Ht=new st,xn=new Lt,rr=new F,Ot=new qr,Lr=new qr,Mt=new F,Bt=class Ol extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?Il:Nl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Be().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ht.makeRotationFromQuaternion(t),this.applyMatrix4(Ht),this}rotateX(t){return Ht.makeRotationX(t),this.applyMatrix4(Ht),this}rotateY(t){return Ht.makeRotationY(t),this.applyMatrix4(Ht),this}rotateZ(t){return Ht.makeRotationZ(t),this.applyMatrix4(Ht),this}translate(t,i,r){return Ht.makeTranslation(t,i,r),this.applyMatrix4(Ht),this}scale(t,i,r){return Ht.makeScale(t,i,r),this.applyMatrix4(Ht),this}lookAt(t){return xn.lookAt(t),xn.updateMatrix(),this.applyMatrix4(xn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new wt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ot.setFromBufferAttribute(n),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let r=this.boundingSphere.center;if(Ot.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Lr.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Lr.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Lr.min),Ot.expandByPoint(Lr.max))}Ot.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Mt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Mt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],h=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Mt.fromBufferAttribute(o,l),h&&(rr.fromBufferAttribute(t,l),Mt.add(rr)),a=Math.max(a,r.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new kt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],h=[];for(let u=0;u<r.count;u++)o[u]=new F,h[u]=new F;let l=new F,d=new F,g=new F,c=new Ce,_=new Ce,E=new Ce,T=new F,v=new F;function p(u,y,k){l.fromBufferAttribute(r,u),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,k),c.fromBufferAttribute(n,u),_.fromBufferAttribute(n,y),E.fromBufferAttribute(n,k),d.sub(l),g.sub(l),_.sub(c),E.sub(c);let N=1/(_.x*E.y-E.x*_.y);isFinite(N)&&(T.copy(d).multiplyScalar(E.y).addScaledVector(g,-_.y).multiplyScalar(N),v.copy(g).multiplyScalar(_.x).addScaledVector(d,-E.x).multiplyScalar(N),o[u].add(T),o[y].add(T),o[k].add(T),h[u].add(v),h[y].add(v),h[k].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let u=0,y=P.length;u<y;++u){let k=P[u],N=k.start,I=k.count;for(let Z=N,U=N+I;Z<U;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let O=new F,m=new F,b=new F,A=new F;function R(u){b.fromBufferAttribute(a,u),A.copy(b);let y=o[u];O.copy(y),O.sub(b.multiplyScalar(b.dot(y))).normalize(),m.crossVectors(A,y);let k=m.dot(h[u])<0?-1:1;s.setXYZW(u,O.x,O.y,O.z,k)}for(let u=0,y=P.length;u<y;++u){let k=P[u],N=k.start,I=k.count;for(let Z=N,U=N+I;Z<U;Z+=3)R(t.getX(Z+0)),R(t.getX(Z+1)),R(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new kt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,_=r.count;c<_;c++)r.setXYZ(c,0,0,0);let a=new F,n=new F,s=new F,o=new F,h=new F,l=new F,d=new F,g=new F;if(t)for(let c=0,_=t.count;c<_;c+=3){let E=t.getX(c+0),T=t.getX(c+1),v=t.getX(c+2);a.fromBufferAttribute(i,E),n.fromBufferAttribute(i,T),s.fromBufferAttribute(i,v),d.subVectors(s,n),g.subVectors(a,n),d.cross(g),o.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),l.fromBufferAttribute(r,v),o.add(d),h.add(d),l.add(d),r.setXYZ(E,o.x,o.y,o.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(v,l.x,l.y,l.z)}else for(let c=0,_=i.count;c<_;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),d.subVectors(s,n),g.subVectors(a,n),d.cross(g),r.setXYZ(c+0,d.x,d.y,d.z),r.setXYZ(c+1,d.x,d.y,d.z),r.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mt.fromBufferAttribute(t,i),Mt.normalize(),t.setXYZ(i,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function t(o,h){let l=o.array,d=o.itemSize,g=o.normalized,c=new l.constructor(h.length*d),_=0,E=0;for(let T=0,v=h.length;T<v;T++){o.isInterleavedBufferAttribute?_=h[T]*o.data.stride+o.offset:_=h[T]*d;for(let p=0;p<d;p++)c[E++]=l[_++]}return new kt(c,d,g)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Ol,r=this.index.array,a=this.attributes;for(let o in a){let h=a[o],l=t(h,r);i.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let h=[],l=n[o];for(let d=0,g=l.length;d<g;d++){let c=l[d],_=t(c,r);h.push(_)}i.morphAttributes[o]=h}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,h=s.length;o<h;o++){let l=s[o];i.addGroup(l.start,l.count,l.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let h in r){let l=r[h];t.data.attributes[h]=l.toJSON(t.data)}let a={},n=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],d=[];for(let g=0,c=l.length;g<c;g++){let _=l[g];d.push(_.toJSON(t.data))}d.length>0&&(a[h]=d,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let l in a){let d=a[l];this.setAttribute(l,d.clone(i))}let n=t.morphAttributes;for(let l in n){let d=[],g=n[l];for(let c=0,_=g.length;c<_;c++)d.push(g[c].clone(i));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,d=s.length;l<d;l++){let g=s[l];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ct=new F,vo=class Fl{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Ct.fromBufferAttribute(this,i),Ct.applyMatrix4(t),this.setXYZ(i,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Ct.fromBufferAttribute(this,i),Ct.applyNormalMatrix(t),this.setXYZ(i,Ct.x,Ct.y,Ct.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Ct.fromBufferAttribute(this,i),Ct.transformDirection(t),this.setXYZ(i,Ct.x,Ct.y,Ct.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=ti(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=tt(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ti(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ti(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ti(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ti(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=tt(i,this.array),r=tt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array),n=tt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new kt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mn=new F,gc=new F,_c=new Be,fi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Mn.subVectors(i,t).cross(gc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Mn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_c.getNormalMatrix(e),r=this.coplanarPoint(Mn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vc=0,Si=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Vr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=en,this.stencilZFail=en,this.stencilZPass=en,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bl=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,Ur=new F,nr=new F,sr=new F,or=new Ce,Nr=new Ce,zl=new st,oa=new F,Ir=new F,la=new F,xo=new Ce,Sn=new Ce,Mo=new Ce,xc=class extends Lt{constructor(e=new Bl){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mc(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new vo(i,3,0,!1)),ar.setAttribute("uv",new vo(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),zl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-sr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;ha(oa.set(-.5,-.5,0),sr,n,nr,r,a),ha(Ir.set(.5,-.5,0),sr,n,nr,r,a),ha(la.set(.5,.5,0),sr,n,nr,r,a),xo.set(0,0),Sn.set(1,0),Mo.set(1,1);let s=e.ray.intersectTriangle(oa,Ir,la,!1,Ur);if(s===null&&(ha(Ir.set(-.5,.5,0),sr,n,nr,r,a),Sn.set(0,1),s=e.ray.intersectTriangle(oa,la,Ir,!1,Ur),s===null))return;let o=e.ray.origin.distanceTo(Ur);o<e.near||o>e.far||t.push({distance:o,point:Ur.clone(),uv:dr.getInterpolation(Ur,oa,Ir,la,xo,Sn,Mo,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(e,t,i,r,a,n){or.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(Nr.x=n*or.x-a*or.y,Nr.y=a*or.x+n*or.y):Nr.copy(or),e.copy(t),e.x+=Nr.x,e.y+=Nr.y,e.applyMatrix4(zl)}var pi=new F,yn=new F,ca=new F,ua=new F,Kr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yn.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ua.copy(this.origin).sub(yn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ca),s=ua.dot(this.direction),o=-ua.dot(ca),h=ua.lengthSq(),l=Math.abs(1-n*n),d,g,c,_;if(l>0)if(d=n*o-s,g=n*s-o,_=a*l,d>=0)if(g>=-_)if(g<=_){let E=1/l;d*=E,g*=E,c=d*(d+n*g+2*s)+g*(n*d+g+2*o)+h}else g=a,d=Math.max(0,-(n*g+s)),c=-d*d+g*(g+2*o)+h;else g=-a,d=Math.max(0,-(n*g+s)),c=-d*d+g*(g+2*o)+h;else g<=-_?(d=Math.max(0,-(-n*a+s)),g=d>0?-a:Math.min(Math.max(-a,-o),a),c=-d*d+g*(g+2*o)+h):g<=_?(d=0,g=Math.min(Math.max(-a,-o),a),c=g*(g+2*o)+h):(d=Math.max(0,-(n*a+s)),g=d>0?a:Math.min(Math.max(-a,-o),a),c=-d*d+g*(g+2*o)+h);else g=n>0?-a:a,d=Math.max(0,-(n*g+s)),c=-d*d+g*(g+2*o)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yn).addScaledVector(ca,g),c}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),r=pi.dot(pi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),l>=0?(a=(e.min.y-g.y)*l,n=(e.max.y-g.y)*l):(a=(e.max.y-g.y)*l,n=(e.min.y-g.y)*l),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),d>=0?(s=(e.min.z-g.z)*d,o=(e.max.z-g.z)*d):(s=(e.max.z-g.z)*d,o=(e.min.z-g.z)*d),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,h=s.y,l=s.z,d=e.x-n.x,g=e.y-n.y,c=e.z-n.z,_=t.x-n.x,E=t.y-n.y,T=t.z-n.z,v=i.x-n.x,p=i.y-n.y,P=i.z-n.z,O=Math.abs(o),m=Math.abs(h),b=Math.abs(l),A,R,u,y,k,N,I,Z,U,H,J,V;if(O>=m&&O>=b?(u=o,N=d,U=_,V=v,o>=0?(A=h,R=l,y=g,k=c,I=E,Z=T,H=p,J=P):(A=l,R=h,y=c,k=g,I=T,Z=E,H=P,J=p)):m>=b?(u=h,N=g,U=E,V=p,h>=0?(A=l,R=o,y=c,k=d,I=T,Z=_,H=P,J=v):(A=o,R=l,y=d,k=c,I=_,Z=T,H=v,J=P)):(u=l,N=c,U=T,V=P,l>=0?(A=o,R=h,y=d,k=g,I=_,Z=E,H=v,J=p):(A=h,R=o,y=g,k=d,I=E,Z=_,H=p,J=v)),u===0)return null;let ce=A/u,Y=R/u,K=1/u,Q=y-ce*N,Ne=k-Y*N,Te=I-ce*U,qe=Z-Y*U,Oe=H-ce*V,q=J-Y*V,ne=Oe*qe-q*Te,oe=Q*q-Ne*Oe,Ae=Te*Ne-qe*Q;if(r){if(ne<0||oe<0||Ae<0)return null}else if((ne<0||oe<0||Ae<0)&&(ne>0||oe>0||Ae>0))return null;let Pe=ne+oe+Ae;if(Pe===0)return null;let ge=K*(ne*N+oe*U+Ae*V);return(Pe>0?ge<0:ge>0)?null:this.at(ge/Pe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zs=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},So=new st,Fi=new Kr,da=new Zr,yo=new F,pa=new F,fa=new F,ma=new F,En=new F,ga=new F,Eo=new F,_a=new F,Dt=class extends Lt{constructor(e=new Bt,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){ga.set(0,0,0);for(let o=0,h=a.length;o<h;o++){let l=s[o],d=a[o];l!==0&&(En.fromBufferAttribute(d,e),n?ga.addScaledVector(En,l):ga.addScaledVector(En.sub(t),l))}t.add(ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(a),Fi.copy(e.ray).recast(e.near),!(da.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(da,yo)===null||Fi.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(So.copy(a).invert(),Fi.copy(e.ray).applyMatrix4(So),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,h=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,g=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let _=0,E=g.length;_<E;_++){let T=g[_],v=n[T.materialIndex],p=Math.max(T.start,c.start),P=Math.min(s.count,Math.min(T.start+T.count,c.start+c.count));for(let O=p,m=P;O<m;O+=3){let b=s.getX(O),A=s.getX(O+1),R=s.getX(O+2);r=va(this,v,e,i,h,l,d,b,A,R),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{let _=Math.max(0,c.start),E=Math.min(s.count,c.start+c.count);for(let T=_,v=E;T<v;T+=3){let p=s.getX(T),P=s.getX(T+1),O=s.getX(T+2);r=va(this,n,e,i,h,l,d,p,P,O),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let _=0,E=g.length;_<E;_++){let T=g[_],v=n[T.materialIndex],p=Math.max(T.start,c.start),P=Math.min(o.count,Math.min(T.start+T.count,c.start+c.count));for(let O=p,m=P;O<m;O+=3){let b=O,A=O+1,R=O+2;r=va(this,v,e,i,h,l,d,b,A,R),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{let _=Math.max(0,c.start),E=Math.min(o.count,c.start+c.count);for(let T=_,v=E;T<v;T+=3){let p=T,P=T+1,O=T+2;r=va(this,n,e,i,h,l,d,p,P,O),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}}};function Mc(e,t,i,r,a,n,s,o){let h;if(t.side===Nt?h=r.intersectTriangle(s,n,a,!0,o):h=r.intersectTriangle(a,n,s,t.side===ki,o),h===null)return null;_a.copy(o),_a.applyMatrix4(e.matrixWorld);let l=i.ray.origin.distanceTo(_a);return l<i.near||l>i.far?null:{distance:l,point:_a.clone(),object:e}}function va(e,t,i,r,a,n,s,o,h,l){e.getVertexPosition(o,pa),e.getVertexPosition(h,fa),e.getVertexPosition(l,ma);let d=Mc(e,t,i,r,pa,fa,ma,Eo);if(d){let g=new F;dr.getBarycoord(Eo,pa,fa,ma,g),a&&(d.uv=dr.getInterpolatedAttribute(a,o,h,l,g,new Ce)),n&&(d.uv1=dr.getInterpolatedAttribute(n,o,h,l,g,new Ce)),s&&(d.normal=dr.getInterpolatedAttribute(s,o,h,l,g,new F),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));let c={a:o,b:h,c:l,normal:new F,materialIndex:0};dr.getNormal(pa,fa,ma,c.normal),d.face=c,d.barycoord=g}return d}var Sc=class extends Wt{constructor(e=null,t=1,i=1,r,a,n,s,o,h=yt,l=yt,d,g){super(null,n,s,o,h,l,r,a,d,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bi=new Zr,yc=new Ce(.5,.5),xa=new F,Hs=class{constructor(e=new fi,t=new fi,i=new fi,r=new fi,a=new fi,n=new fi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],h=a[3],l=a[4],d=a[5],g=a[6],c=a[7],_=a[8],E=a[9],T=a[10],v=a[11],p=a[12],P=a[13],O=a[14],m=a[15];if(r[0].setComponents(h-n,c-l,v-_,m-p).normalize(),r[1].setComponents(h+n,c+l,v+_,m+p).normalize(),r[2].setComponents(h+s,c+d,v+E,m+P).normalize(),r[3].setComponents(h-s,c-d,v-E,m-P).normalize(),i)r[4].setComponents(o,g,T,O).normalize(),r[5].setComponents(h-o,c-g,v-T,m-O).normalize();else if(r[4].setComponents(h-o,c-g,v-T,m-O).normalize(),t===ri)r[5].setComponents(h+o,c+g,v+T,m+O).normalize();else if(t===jr)r[5].setComponents(o,g,T,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);let t=yc.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hl=class extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ka=new F,Wa=new F,To=new st,Or=new Kr,Ma=new Zr,Tn=new F,bo=new F,Ec=class extends Lt{constructor(e=new Bt,t=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ka.fromBufferAttribute(t,r-1),Wa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ka.distanceTo(Wa);e.setAttribute("lineDistance",new wt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=a,e.ray.intersectsSphere(Ma)===!1)return;To.copy(r).invert(),Or.copy(e.ray).applyMatrix4(To);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,h=this.isLineSegments?2:1,l=i.index,d=i.attributes.position;if(l!==null){let g=Math.max(0,n.start),c=Math.min(l.count,n.start+n.count);for(let _=g,E=c-1;_<E;_+=h){let T=l.getX(_),v=l.getX(_+1),p=Sa(this,e,Or,o,T,v,_);p&&t.push(p)}if(this.isLineLoop){let _=l.getX(c-1),E=l.getX(g),T=Sa(this,e,Or,o,_,E,c-1);T&&t.push(T)}}else{let g=Math.max(0,n.start),c=Math.min(d.count,n.start+n.count);for(let _=g,E=c-1;_<E;_+=h){let T=Sa(this,e,Or,o,_,_+1,_);T&&t.push(T)}if(this.isLineLoop){let _=Sa(this,e,Or,o,c-1,g,c-1);_&&t.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Sa(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(ka.fromBufferAttribute(o,a),Wa.fromBufferAttribute(o,n),i.distanceSqToSegment(ka,Wa,Tn,bo)>r)return;Tn.applyMatrix4(e.matrixWorld);let h=t.ray.origin.distanceTo(Tn);if(!(h<t.near||h>t.far))return{distance:h,point:bo.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var wo=new F,Ao=new F,Tc=class extends Ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)wo.fromBufferAttribute(t,r),Ao.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wo.distanceTo(Ao);e.setAttribute("lineDistance",new wt(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gl=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ro=new st,ys=new Kr,ya=new Zr,Ea=new F,bc=class extends Lt{constructor(e=new Bt,t=new Gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),ya.radius+=a,e.ray.intersectsSphere(ya)===!1)return;Ro.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Ro);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,h=i.index,l=i.attributes.position;if(h!==null){let d=Math.max(0,n.start),g=Math.min(h.count,n.start+n.count);for(let c=d,_=g;c<_;c++){let E=h.getX(c);Ea.fromBufferAttribute(l,E),Co(Ea,E,o,r,e,t,this)}}else{let d=Math.max(0,n.start),g=Math.min(l.count,n.start+n.count);for(let c=d,_=g;c<_;c++)Ea.fromBufferAttribute(l,c),Co(Ea,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Co(e,t,i,r,a,n,s){let o=ys.distanceSqToPoint(e);if(o<i){let h=new F;ys.closestPointToPoint(e,h),h.applyMatrix4(r);let l=a.ray.origin.distanceTo(h);if(l<a.near||l>a.far)return;n.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Vl=class extends Wt{constructor(e=[],t=Wi,i,r,a,n,s,o,h,l){super(e,t,i,r,a,n,s,o,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Po=class extends Wt{constructor(e,t,i,r,a,n,s,o,h){super(e,t,i,r,a,n,s,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yr=class extends Wt{constructor(e,t,i=ni,r,a,n,s=yt,o=yt,h,l=Mi,d=1){if(l!==Mi&&l!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:e,height:t,depth:d};super(g,r,a,n,s,o,l,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wc=class extends Yr{constructor(e,t=ni,i=Wi,r,a,n=yt,s=yt,o,h=Mi){let l={width:e,height:e,depth:1},d=[l,l,l,l,l,l];super(e,e,t,i,r,a,n,s,o,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},kl=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ja=class Wl extends Bt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let h=[],l=[],d=[],g=[],c=0,_=0;E("z","y","x",-1,-1,r,i,t,s,n,0),E("z","y","x",1,-1,r,i,-t,s,n,1),E("x","z","y",1,1,t,r,i,a,s,2),E("x","z","y",1,-1,t,r,-i,a,s,3),E("x","y","z",1,-1,t,i,r,a,n,4),E("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(h),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(g,2));function E(T,v,p,P,O,m,b,A,R,u,y){let k=m/R,N=b/u,I=m/2,Z=b/2,U=A/2,H=R+1,J=u+1,V=0,ce=0,Y=new F;for(let K=0;K<J;K++){let Q=K*N-Z;for(let Ne=0;Ne<H;Ne++){let Te=Ne*k-I;Y[T]=Te*P,Y[v]=Q*O,Y[p]=U,l.push(Y.x,Y.y,Y.z),Y[T]=0,Y[v]=0,Y[p]=A>0?1:-1,d.push(Y.x,Y.y,Y.z),g.push(Ne/R),g.push(1-K/u),V+=1}}for(let K=0;K<u;K++)for(let Q=0;Q<R;Q++){let Ne=c+Q+H*K,Te=c+Q+H*(K+1),qe=c+(Q+1)+H*(K+1),Oe=c+(Q+1)+H*K;h.push(Ne,Te,Oe),h.push(Te,qe,Oe),ce+=6}o.addGroup(_,ce,y),_+=ce,c+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Es=class Xl extends Bt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:h};let l=this;a=Math.floor(a),n=Math.floor(n);let d=[],g=[],c=[],_=[],E=0,T=[],v=r/2,p=0;P(),s===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(_,2));function P(){let m=new F,b=new F,A=0,R=(i-t)/r;for(let u=0;u<=n;u++){let y=[],k=u/n,N=k*(i-t)+t;for(let I=0;I<=a;I++){let Z=I/a,U=Z*h+o,H=Math.sin(U),J=Math.cos(U);b.x=N*H,b.y=-k*r+v,b.z=N*J,g.push(b.x,b.y,b.z),m.set(H,R,J).normalize(),c.push(m.x,m.y,m.z),_.push(Z,1-k),y.push(E++)}T.push(y)}for(let u=0;u<a;u++)for(let y=0;y<n;y++){let k=T[y][u],N=T[y+1][u],I=T[y+1][u+1],Z=T[y][u+1];(t>0||y!==0)&&(d.push(k,N,Z),A+=3),(i>0||y!==n-1)&&(d.push(N,I,Z),A+=3)}l.addGroup(p,A,0),p+=A}function O(m){let b=E,A=new Ce,R=new F,u=0,y=m===!0?t:i,k=m===!0?1:-1;for(let I=1;I<=a;I++)g.push(0,v*k,0),c.push(0,k,0),_.push(.5,.5),E++;let N=E;for(let I=0;I<=a;I++){let Z=I/a*h+o,U=Math.cos(Z),H=Math.sin(Z);R.x=y*H,R.y=v*k,R.z=y*U,g.push(R.x,R.y,R.z),c.push(0,k,0),A.x=U*.5+.5,A.y=H*.5*k+.5,_.push(A.x,A.y),E++}for(let I=0;I<a;I++){let Z=b+I,U=N+I;m===!0?d.push(U,U+1,Z):d.push(U+1,U,Z),u+=3}l.addGroup(p,u,m===!0?1:2),p+=u}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Do=class jl extends Es{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new jl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gs=class Yl extends Bt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),h=Math.floor(a),l=o+1,d=h+1,g=t/o,c=i/h,_=[],E=[],T=[],v=[];for(let p=0;p<d;p++){let P=p*c-s;for(let O=0;O<l;O++){let m=O*g-n;E.push(m,-P,0),T.push(0,0,1),v.push(O/o),v.push(1-p/h)}}for(let p=0;p<h;p++)for(let P=0;P<o;P++){let O=P+l*p,m=P+l*(p+1),b=P+1+l*(p+1),A=P+1+l*p;_.push(O,m,A),_.push(m,b,A)}this.setIndex(_),this.setAttribute("position",new wt(E,3)),this.setAttribute("normal",new wt(T,3)),this.setAttribute("uv",new wt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.width,t.height,t.widthSegments,t.heightSegments)}},Ac=class extends Si{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function wr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Lo(a))a.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Lo(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Pt(e){let t={};for(let i=0;i<e.length;i++){let r=wr(e[i]);for(let a in r)t[a]=r[a]}return t}function Lo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ql(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}var Cc={clone:wr,merge:Pt},Pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pc,this.fragmentShader=Dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Rc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new st().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lc=class extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gt=class extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ms,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uc=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Nc=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zl=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},bn=new st,Uo=new F,No=new F,Oc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uo),No.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(No),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){bn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bn,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,h=r?r.y/a.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+h,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+h,0,0,.5,.5,0,0,0,1),t.multiply(bn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ta=new F,ba=new Di,$t=new F,Kl=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ta,ba,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,ba,$t.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ta,ba,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,ba,$t.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new F,Io=new Ce,Oo=new Ce,Vt=class extends Kl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Io,Oo),t.subVectors(Oo,Io)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,h=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/h,r*=n.width/o,i*=n.height/h}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=class extends Kl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,n=a+h*this.view.width,s-=l*this.view.offsetY,o=s-l*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fc=class extends Oc{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wn=class extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Fc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Bc=class extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},lr=-90,hr=1,zc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(lr,hr,e,t);r.layers=this.layers,this.add(r);let a=new Vt(lr,hr,e,t);a.layers=this.layers,this.add(a);let n=new Vt(lr,hr,e,t);n.layers=this.layers,this.add(n);let s=new Vt(lr,hr,e,t);s.layers=this.layers,this.add(s);let o=new Vt(lr,hr,e,t);o.layers=this.layers,this.add(o);let h=new Vt(lr,hr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let h of t)this.remove(h);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,h,l]=this.children,d=e.getRenderTarget(),g=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(d,g,c),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Hc=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Jl="\\[\\]\\.:\\/",ks="[^"+Jl+"]",Gc="[^"+Jl.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",ks);/(WCOD+)?/.source.replace("WCOD",Gc);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ks);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ks);var Fo=new st,Vc=class{constructor(e,t,i=0,r=1/0){this.ray=new Kr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fo),this}intersectObject(e,t=!0,i=[]){return Ts(e,this,i,t),i.sort(Bo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Ts(e[r],this,i,t);return i.sort(Bo),i}};function Bo(e,t){return e.distance-t.distance}function Ts(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Ts(n[s],t,i,!0)}}var zo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Er;Er=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Er.prototype.isMatrix2=!0;var kc=class extends Tc{constructor(e=10,t=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);let a=t/2,n=e/t,s=e/2,o=[],h=[];for(let g=0,c=0,_=-s;g<=t;g++,_+=n){o.push(-s,0,_,s,0,_),o.push(_,0,-s,_,0,s);let E=g===a?i:r;E.toArray(h,c),c+=3,E.toArray(h,c),c+=3,E.toArray(h,c),c+=3,E.toArray(h,c),c+=3}let l=new Bt;l.setAttribute("position",new wt(o,3)),l.setAttribute("color",new wt(h,3));let d=new Hl({vertexColors:!0,toneMapped:!1});super(l,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Wc=class extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ho(e,t,i,r){let a=Xc(r);switch(i){case wl:return e*t;case Rl:return e*t/a.components*a.byteLength;case Ls:return e*t/a.components*a.byteLength;case Xi:return e*t*2/a.components*a.byteLength;case Us:return e*t*2/a.components*a.byteLength;case Al:return e*t*3/a.components*a.byteLength;case qt:return e*t*4/a.components*a.byteLength;case Ns:return e*t*4/a.components*a.byteLength;case Ca:case Pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Da:case La:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xn:case Yn:return Math.max(e,16)*Math.max(t,8)/4;case Wn:case jn:return Math.max(e,8)*Math.max(t,8)/2;case qn:case Zn:case Jn:case $n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Kn:case Fa:case Qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case es:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ts:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case is:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case rs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case as:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ns:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ss:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case os:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ls:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case hs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case cs:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case us:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ds:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ps:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fs:case ms:case gs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case _s:case vs:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ba:case xs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Xc(e){switch(e){case Ft:case yl:return{byteLength:1,components:1};case Wr:case El:case si:return{byteLength:2,components:1};case Ps:case Ds:return{byteLength:2,components:4};case ni:case Cs:case ii:return{byteLength:4,components:1};case Tl:case bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);function $l(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function jc(e){let t=new WeakMap;function i(o,h){let l=o.array,d=o.usage,g=l.byteLength,c=e.createBuffer();e.bindBuffer(h,c),e.bufferData(h,l,d),o.onUploadCallback();let _;if(l instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=e.SHORT;else if(l instanceof Uint32Array)_=e.UNSIGNED_INT;else if(l instanceof Int32Array)_=e.INT;else if(l instanceof Int8Array)_=e.BYTE;else if(l instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function r(o,h,l){let d=h.array,g=h.updateRanges;if(e.bindBuffer(l,o),g.length===0)e.bufferSubData(l,0,d);else{g.sort((_,E)=>_.start-E.start);let c=0;for(let _=1;_<g.length;_++){let E=g[c],T=g[_];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++c,g[c]=T)}g.length=c+1;for(let _=0,E=g.length;_<E;_++){let T=g[_];e.bufferSubData(l,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(e.deleteBuffer(h.buffer),t.delete(o))}function s(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,i(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,h),l.version=o.version}}return{get:a,remove:n,update:s}}var Yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qc=`#ifdef USE_ALPHAHASH
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
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$c=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qc=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
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
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,ou=`#ifdef USE_BUMPMAP
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gu=`#define PI 3.141592653589793
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
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vu=`vec3 transformedNormal = objectNormal;
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
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
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
#endif`,Xu=`uniform sampler2D dfgLUT;
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
}`,ju=`
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rd=`#if defined( USE_POINTS_UV )
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
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
}`,ep=`#if DEPTH_PACKING == 3200
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
}`,tp=`#define DISTANCE
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
}`,ip=`#define DISTANCE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,cp=`#define LAMBERT
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
}`,up=`#define MATCAP
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
}`,dp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,fp=`#define NORMAL
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
}`,mp=`#define PHONG
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
}`,gp=`#define PHONG
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
}`,_p=`#define STANDARD
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
}`,vp=`#define STANDARD
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
}`,xp=`#define TOON
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
}`,Mp=`#define TOON
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
}`,Sp=`uniform float size;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,bp=`uniform float rotation;
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
}`,wp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Yc,alphahash_pars_fragment:qc,alphamap_fragment:Zc,alphamap_pars_fragment:Kc,alphatest_fragment:Jc,alphatest_pars_fragment:$c,aomap_fragment:Qc,aomap_pars_fragment:eu,batching_pars_vertex:tu,batching_vertex:iu,begin_vertex:ru,beginnormal_vertex:au,bsdfs:nu,iridescence_fragment:su,bumpmap_pars_fragment:ou,clipping_planes_fragment:lu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:pu,color_pars_vertex:fu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:vu,displacementmap_pars_vertex:xu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:yu,colorspace_fragment:Eu,colorspace_pars_fragment:Tu,envmap_fragment:bu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:zu,envmap_vertex:Cu,fog_vertex:Pu,fog_pars_vertex:Du,fog_fragment:Lu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Nu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Fu,lights_pars_begin:Bu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Gu,lights_phong_fragment:Vu,lights_phong_pars_fragment:ku,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:ju,lights_fragment_maps:Yu,lights_fragment_end:qu,lightprobes_pars_fragment:Zu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Qu,map_fragment:ed,map_pars_fragment:td,map_particle_fragment:id,map_particle_pars_fragment:rd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:nd,morphinstance_vertex:sd,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:hd,morphtarget_vertex:cd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:pd,normal_pars_vertex:fd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:yd,premultiplied_alpha_fragment:Ed,project_vertex:Td,dithering_fragment:bd,dithering_pars_fragment:wd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Dd,shadowmask_pars_fragment:Ld,skinbase_vertex:Ud,skinning_pars_vertex:Nd,skinning_vertex:Id,skinnormal_vertex:Od,specularmap_fragment:Fd,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:Hd,transmission_fragment:Gd,transmission_pars_fragment:Vd,uv_pars_fragment:kd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:jd,background_vert:Yd,background_frag:qd,backgroundCube_vert:Zd,backgroundCube_frag:Kd,cube_vert:Jd,cube_frag:$d,depth_vert:Qd,depth_frag:ep,distance_vert:tp,distance_frag:ip,equirect_vert:rp,equirect_frag:ap,linedashed_vert:np,linedashed_frag:sp,meshbasic_vert:op,meshbasic_frag:lp,meshlambert_vert:hp,meshlambert_frag:cp,meshmatcap_vert:up,meshmatcap_frag:dp,meshnormal_vert:pp,meshnormal_frag:fp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:vp,meshtoon_vert:xp,meshtoon_frag:Mp,points_vert:Sp,points_frag:yp,shadow_vert:Ep,shadow_frag:Tp,sprite_vert:bp,sprite_frag:wp},fe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ei={basic:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Pt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Pt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Pt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Pt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Pt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Pt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Pt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Pt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Pt([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Pt([fe.lights,fe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ei.physical={uniforms:Pt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var wa={r:0,b:0,g:0},Ap=new st,Ql=new Be;Ql.set(-1,0,0,0,1,0,0,0,1);function Rp(e,t,i,r,a,n){let s=new Fe(0),o=a===!0?0:1,h,l,d=null,g=0,c=null;function _(P){let O=P.isScene===!0?P.background:null;if(O&&O.isTexture){let m=P.backgroundBlurriness>0;O=t.get(O,m)}return O}function E(P){let O=!1,m=_(P);m===null?v(s,o):m&&m.isColor&&(v(m,1),O=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(P,O){let m=_(O);m&&(m.isCubeTexture||m.mapping===Xa)?(l===void 0&&(l=new Dt(new ja(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:wr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(O.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ql),l.material.toneMapped=Ve.getTransfer(m.colorSpace)!==Ke,(d!==m||g!==m.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,d=m,g=m.version,c=e.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(h===void 0&&(h=new Dt(new Gs(2,2),new oi({name:"BackgroundMaterial",uniforms:wr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=m,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=Ve.getTransfer(m.colorSpace)!==Ke,m.matrixAutoUpdate===!0&&m.updateMatrix(),h.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||g!==m.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,d=m,g=m.version,c=e.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function v(P,O){P.getRGB(wa,ql(e)),i.buffers.color.setClear(wa.r,wa.g,wa.b,O,n)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return s},setClearColor:function(P,O=1){s.set(P),o=O,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(P){o=P,v(s,o)},render:E,addToRenderList:T,dispose:p}}function Cp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,s=!1;function o(N,I,Z,U,H){let J=!1,V=g(N,U,Z,I);n!==V&&(n=V,l(n.object)),J=_(N,U,Z,H),J&&E(N,U,Z,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,m(N,I,Z,U),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return e.createVertexArray()}function l(N){return e.bindVertexArray(N)}function d(N){return e.deleteVertexArray(N)}function g(N,I,Z,U){let H=U.wireframe===!0,J=r[I.id];J===void 0&&(J={},r[I.id]=J);let V=N.isInstancedMesh===!0?N.id:0,ce=J[V];ce===void 0&&(ce={},J[V]=ce);let Y=ce[Z.id];Y===void 0&&(Y={},ce[Z.id]=Y);let K=Y[H];return K===void 0&&(K=c(h()),Y[H]=K),K}function c(N){let I=[],Z=[],U=[];for(let H=0;H<i;H++)I[H]=0,Z[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:U,object:N,attributes:{},index:null}}function _(N,I,Z,U){let H=n.attributes,J=I.attributes,V=0,ce=Z.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let K=H[Y],Q=J[Y];if(Q===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;V++}return n.attributesNum!==V||n.index!==U}function E(N,I,Z,U){let H={},J=I.attributes,V=0,ce=Z.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let K=J[Y];K===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),H[Y]=Q,V++}n.attributes=H,n.attributesNum=V,n.index=U}function T(){let N=n.newAttributes;for(let I=0,Z=N.length;I<Z;I++)N[I]=0}function v(N){p(N,0)}function p(N,I){let Z=n.newAttributes,U=n.enabledAttributes,H=n.attributeDivisors;Z[N]=1,U[N]===0&&(e.enableVertexAttribArray(N),U[N]=1),H[N]!==I&&(e.vertexAttribDivisor(N,I),H[N]=I)}function P(){let N=n.newAttributes,I=n.enabledAttributes;for(let Z=0,U=I.length;Z<U;Z++)I[Z]!==N[Z]&&(e.disableVertexAttribArray(Z),I[Z]=0)}function O(N,I,Z,U,H,J,V){V===!0?e.vertexAttribIPointer(N,I,Z,H,J):e.vertexAttribPointer(N,I,Z,U,H,J)}function m(N,I,Z,U){T();let H=U.attributes,J=Z.getAttributes(),V=I.defaultAttributeValues;for(let ce in J){let Y=J[ce];if(Y.location>=0){let K=H[ce];if(K===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let Q=K.normalized,Ne=K.itemSize,Te=t.get(K);if(Te===void 0)continue;let qe=Te.buffer,Oe=Te.type,q=Te.bytesPerElement,ne=Oe===e.INT||Oe===e.UNSIGNED_INT||K.gpuType===Cs;if(K.isInterleavedBufferAttribute){let oe=K.data,Ae=oe.stride,Pe=K.offset;if(oe.isInstancedInterleavedBuffer){for(let ge=0;ge<Y.locationSize;ge++)p(Y.location+ge,oe.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<Y.locationSize;ge++)v(Y.location+ge);e.bindBuffer(e.ARRAY_BUFFER,qe);for(let ge=0;ge<Y.locationSize;ge++)O(Y.location+ge,Ne/Y.locationSize,Oe,Q,Ae*q,(Pe+Ne/Y.locationSize*ge)*q,ne)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)p(Y.location+oe,K.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<Y.locationSize;oe++)v(Y.location+oe);e.bindBuffer(e.ARRAY_BUFFER,qe);for(let oe=0;oe<Y.locationSize;oe++)O(Y.location+oe,Ne/Y.locationSize,Oe,Q,Ne*q,Ne/Y.locationSize*oe*q,ne)}}else if(V!==void 0){let Q=V[ce];if(Q!==void 0)switch(Q.length){case 2:e.vertexAttrib2fv(Y.location,Q);break;case 3:e.vertexAttrib3fv(Y.location,Q);break;case 4:e.vertexAttrib4fv(Y.location,Q);break;default:e.vertexAttrib1fv(Y.location,Q)}}}}P()}function b(){y();for(let N in r){let I=r[N];for(let Z in I){let U=I[Z];for(let H in U){let J=U[H];for(let V in J)d(J[V].object),delete J[V];delete U[H]}}delete r[N]}}function A(N){if(r[N.id]===void 0)return;let I=r[N.id];for(let Z in I){let U=I[Z];for(let H in U){let J=U[H];for(let V in J)d(J[V].object),delete J[V];delete U[H]}}delete r[N.id]}function R(N){for(let I in r){let Z=r[I];for(let U in Z){let H=Z[U];if(H[N.id]===void 0)continue;let J=H[N.id];for(let V in J)d(J[V].object),delete J[V];delete H[N.id]}}}function u(N){for(let I in r){let Z=r[I],U=N.isInstancedMesh===!0?N.id:0,H=Z[U];if(H!==void 0){for(let J in H){let V=H[J];for(let ce in V)d(V[ce].object),delete V[ce];delete H[J]}delete Z[U],Object.keys(Z).length===0&&delete r[I]}}}function y(){k(),s=!0,n!==a&&(n=a,l(n.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:y,resetDefaultState:k,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:u,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:v,disableUnusedAttributes:P}}function Pp(e,t,i){let r;function a(h){r=h}function n(h,l){e.drawArrays(r,h,l),i.update(l,r,1)}function s(h,l,d){d!==0&&(e.drawArraysInstanced(r,h,l,d),i.update(l,r,d))}function o(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,l,0,d);let g=0;for(let c=0;c<d;c++)g+=l[c];i.update(g,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Dp(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==qt&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let u=R===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ft&&R!==ii&&!u&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function h(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=i.precision!==void 0?i.precision:"highp",d=h(l);d!==l&&(Le("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let g=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),P=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),O=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:h,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:g,reversedDepthBuffer:c,maxTextures:_,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:m,maxSamples:b,samples:A}}function Lp(e){let t=this,i=null,r=0,a=!1,n=!1,s=new fi,o=new Be,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,c){let _=g.length!==0||c||r!==0||a;return a=c,r=g.length,_},this.beginShadows=function(){n=!0,d(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(g,c){i=d(g,c,0)},this.setState=function(g,c,_){let E=g.clippingPlanes,T=g.clipIntersection,v=g.clipShadows,p=e.get(g);if(!a||E===null||E.length===0||n&&!v)n?d(null):l();else{let P=n?0:r,O=P*4,m=p.clippingState||null;h.value=m,m=d(E,c,O,_);for(let b=0;b!==O;++b)m[b]=i[b];p.clippingState=m,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function l(){h.value!==i&&(h.value=i,h.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(g,c,_,E){let T=g!==null?g.length:0,v=null;if(T!==0){if(v=h.value,E!==!0||v===null){let p=_+T*4,P=c.matrixWorldInverse;o.getNormalMatrix(P),(v===null||v.length<p)&&(v=new Float32Array(p));for(let O=0,m=_;O!==T;++O,m+=4)s.copy(g[O]).applyMatrix4(P,o),s.normal.toArray(v,m),v[m+3]=s.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,v}}var mr=4,Up=6,Np=20,Ip=256,Fr=new Vs,Go=new Fe,An=null,Rn=0,Cn=0,Pn=!1,Op=new F,zi=new F,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Op}=a;An=this._renderer.getRenderTarget(),Rn=this._renderer.getActiveCubeFace(),Cn=this._renderer.getActiveMipmapLevel(),Pn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(An,Rn,Cn),this._renderer.xr.enabled=Pn,e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),An=this._renderer.getRenderTarget(),Rn=this._renderer.getActiveCubeFace(),Cn=this._renderer.getActiveMipmapLevel(),Pn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:si,format:qt,colorSpace:za,depthBuffer:!1},r=ko(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fp(a)),this._blurMaterial=zp(a,e,t),this._ggxMaterial=Bp(a,e,t)}return r}_compileMaterial(e){let t=new Dt(new Bt,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,i,r,a){let n=new Vt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Go),h.toneMapping=ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new ja,new zs({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,c=g.material,_=!1,E=e.background;E?E.isColor&&(c.color.copy(E),e.background=null,_=!0):(c.color.copy(Go),_=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(n.up.set(0,s[T],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[T],a.y,a.z)):v===1?(n.up.set(0,0,s[T]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[T],a.z)):(n.up.set(0,s[T],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[T]));let p=this._cubeSize;cr(r,v*p,T>2?p:0,p,p),h.setRenderTarget(r),_&&h.render(g,n),h.render(e,n)}h.toneMapping=d,h.autoClear=l,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wi||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;cr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Fr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,h=i/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),d=Math.sqrt(h*h-l*l),g=h*1.25,c=d*g,{_lodMax:_}=this,E=this._sizeLods[i],T=3*E*(i>_-mr?i-_+mr:0),v=4*(this._cubeSize-E);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=_-t,cr(a,T,v,3*E,2*E),r.setRenderTarget(a),r.render(s,Fr),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=_-i,cr(e,T,v,3*E,2*E),r.setRenderTarget(e),r.render(s,Fr)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let h=s.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-i;let l=this._sizeLods[r],d=3*l*(r>this._lodMax-mr?r-this._lodMax+mr:0),g=4*(this._cubeSize-l);cr(t,d,g,3*l,2*l),n.setRenderTarget(t),n.render(o,Fr)}};function Fp(e){let t=[],i=[],r=e,a=e-mr+1+Up;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),h=-o,l=1+o,d=[h,h,l,h,l,l,h,h,l,l,h,l],g=6,c=6,_=3,E=new Float32Array(_*c*g),T=new Float32Array(_*c*g);for(let p=0;p<g;p++){let P=p%3*2/3-1,O=p>2?0:-1,m=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];E.set(m,_*c*p);for(let b=0;b<c;b++){let A=d[b*2]*2-1,R=d[b*2+1]*2-1;p===0?zi.set(1,R,A):p===1?zi.set(-A,1,-R):p===2?zi.set(-A,R,1):p===3?zi.set(-1,R,-A):p===4?zi.set(-A,-1,R):zi.set(A,R,-1),zi.toArray(T,(p*c+b)*_)}}let v=new Bt;v.setAttribute("position",new kt(E,_)),v.setAttribute("outputDirection",new kt(T,_)),i.push(new Dt(v,null)),r>mr&&r--}return{lodMeshes:i,sizeLods:t}}function ko(e,t,i){let r=new Zt(e,t,i);return r.texture.mapping=Xa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Bp(e,t,i){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ip,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function zp(e,t,i){return new oi({name:"SphericalGaussianBlur",defines:{SAMPLES:Np,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Wo(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Xo(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eh=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ja(5,5,5),a=new oi({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:vi});a.uniforms.tEquirect.value=t;let n=new Dt(r,a),s=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Et),new zc(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Hp(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,_=!1){return c==null?null:_?s(c):n(c)}function n(c){if(c&&c.isTexture){let _=c.mapping;if(_===Ja||_===$a)if(t.has(c)){let E=t.get(c).texture;return o(E,c.mapping)}else{let E=c.image;if(E&&E.height>0){let T=new eh(E.height);return T.fromEquirectangularTexture(e,c),t.set(c,T),c.addEventListener("dispose",l),o(T.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let _=c.mapping,E=_===Ja||_===$a,T=_===Wi||_===Tr;if(E||T){let v=i.get(c),p=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return r===null&&(r=new Vo(e)),v=E?r.fromEquirectangular(c,v):r.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,i.set(c,v),v.texture;if(v!==void 0)return v.texture;{let P=c.image;return E&&P&&P.height>0||T&&P&&h(P)?(r===null&&(r=new Vo(e)),v=E?r.fromEquirectangular(c):r.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,i.set(c,v),c.addEventListener("dispose",d),v.texture):null}}}return c}function o(c,_){return _===Ja?c.mapping=Wi:_===$a&&(c.mapping=Tr),c}function h(c){let _=0,E=6;for(let T=0;T<E;T++)c[T]!==void 0&&_++;return _===E}function l(c){let _=c.target;_.removeEventListener("dispose",l);let E=t.get(_);E!==void 0&&(t.delete(_),E.dispose())}function d(c){let _=c.target;_.removeEventListener("dispose",d);let E=i.get(_);E!==void 0&&(i.delete(_),E.dispose())}function g(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:g}}function Gp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&_r("WebGLRenderer: "+r+" extension not supported."),a}}}function Vp(e,t,i,r){let a={},n=new WeakMap;function s(g){let c=g.target;c.index!==null&&t.remove(c.index);for(let E in c.attributes)t.remove(c.attributes[E]);c.removeEventListener("dispose",s),delete a[c.id];let _=n.get(c);_&&(t.remove(_),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(g,c){return a[c.id]===!0||(c.addEventListener("dispose",s),a[c.id]=!0,i.memory.geometries++),c}function h(g){let c=g.attributes;for(let _ in c)t.update(c[_],e.ARRAY_BUFFER)}function l(g){let c=[],_=g.index,E=g.attributes.position,T=0;if(E===void 0)return;if(_!==null){let P=_.array;T=_.version;for(let O=0,m=P.length;O<m;O+=3){let b=P[O+0],A=P[O+1],R=P[O+2];c.push(b,A,A,R,R,b)}}else{let P=E.array;T=E.version;for(let O=0,m=P.length/3-1;O<m;O+=3){let b=O+0,A=O+1,R=O+2;c.push(b,A,A,R,R,b)}}let v=new(E.count>=65535?Il:Nl)(c,1);v.version=T;let p=n.get(g);p&&t.remove(p),n.set(g,v)}function d(g){let c=n.get(g);if(c){let _=g.index;_!==null&&c.version<_.version&&l(g)}else l(g);return n.get(g)}return{get:o,update:h,getWireframeAttribute:d}}function kp(e,t,i){let r;function a(g){r=g}let n,s;function o(g){n=g.type,s=g.bytesPerElement}function h(g,c){e.drawElements(r,c,n,g*s),i.update(c,r,1)}function l(g,c,_){_!==0&&(e.drawElementsInstanced(r,c,n,g*s,_),i.update(c,r,_))}function d(g,c,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,g,0,_);let E=0;for(let T=0;T<_;T++)E+=c[T];i.update(E,r,1)}this.setMode=a,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=d}function Wp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Xe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Xp(e,t,i){let r=new WeakMap,a=new pt;function n(s,o,h){let l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=d!==void 0?d.length:0,c=r.get(o);if(c===void 0||c.count!==g){let _=function(){u.dispose(),r.delete(o),o.removeEventListener("dispose",_)};c!==void 0&&c.texture.dispose();let E=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],P=o.morphAttributes.normal||[],O=o.morphAttributes.color||[],m=0;E===!0&&(m=1),T===!0&&(m=2),v===!0&&(m=3);let b=o.attributes.position.count*m,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*A*4*g),u=new Dl(R,b,A,g);u.type=ii,u.needsUpdate=!0;let y=m*4;for(let k=0;k<g;k++){let N=p[k],I=P[k],Z=O[k],U=b*A*4*k;for(let H=0;H<N.count;H++){let J=H*y;E===!0&&(a.fromBufferAttribute(N,H),R[U+J+0]=a.x,R[U+J+1]=a.y,R[U+J+2]=a.z,R[U+J+3]=0),T===!0&&(a.fromBufferAttribute(I,H),R[U+J+4]=a.x,R[U+J+5]=a.y,R[U+J+6]=a.z,R[U+J+7]=0),v===!0&&(a.fromBufferAttribute(Z,H),R[U+J+8]=a.x,R[U+J+9]=a.y,R[U+J+10]=a.z,R[U+J+11]=Z.itemSize===4?a.w:1)}}c={count:g,texture:u,size:new Ce(b,A)},r.set(o,c),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let _=0;for(let T=0;T<l.length;T++)_+=l[T];let E=o.morphTargetsRelative?1:1-_;h.getUniforms().setValue(e,"morphTargetBaseInfluence",E),h.getUniforms().setValue(e,"morphTargetInfluences",l)}h.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),h.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function jp(e,t,i,r,a){let n=new WeakMap;function s(l){let d=a.render.frame,g=l.geometry,c=t.get(l,g);if(n.get(c)!==d&&(t.update(c),n.set(c,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),n.get(l)!==d&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),n.set(l,d))),l.isSkinnedMesh){let _=l.skeleton;n.get(_)!==d&&(_.update(),n.set(_,d))}return c}function o(){n=new WeakMap}function h(l){let d=l.target;d.removeEventListener("dispose",h),r.releaseStatesOfObject(d),i.remove(d.instanceMatrix),d.instanceColor!==null&&i.remove(d.instanceColor)}return{update:s,dispose:o}}var Yp={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[Rs]:"ACES_FILMIC_TONE_MAPPING",[xl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function qp(e,t,i,r,a,n){let s=new Zt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,l=new Bt;l.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new wt([0,2,0,0,2,0],2));let d=new Lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Dt(l,d),c=new Vs(-1,1,1,-1,0,1),_=null,E=null,T=!1,v,p=null,P=[],O=!1;this.setSize=function(m,b){s.setSize(m,b),o!==null&&o.setSize(m,b),h!==null&&h.setSize(m,b);for(let A=0;A<P.length;A++){let R=P[A];R.setSize&&R.setSize(m,b)}},this.setEffects=function(m){P=m,O=P.length>0&&P[0].isRenderPass===!0;let b=s.width,A=s.height;P.length>0&&o===null&&(o=new Zt(b,A,{type:si,depthBuffer:!1,stencilBuffer:!1}),h=new Zt(b,A,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<P.length;R++){let u=P[R];u.setSize&&u.setSize(b,A)}},this.begin=function(m,b){if(T||m.toneMapping===ai&&P.length===0)return!1;if(p=b,b!==null){let A=b.width,R=b.height;(s.width!==A||s.height!==R)&&this.setSize(A,R)}return O===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=ai,!0},this.hasRenderPass=function(){return O},this.end=function(m,b){m.toneMapping=v,T=!0;let A=s,R=o;for(let u=0;u<P.length;u++){let y=P[u];y.enabled!==!1&&(y.render(m,R,A,b),y.needsSwap!==!1&&(A=R,R=R===o?h:o))}if(_!==m.outputColorSpace||E!==m.toneMapping){_=m.outputColorSpace,E=m.toneMapping,d.defines={},Ve.getTransfer(_)===Ke&&(d.defines.SRGB_TRANSFER="");let u=Yp[E];u&&(d.defines[u]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,m.setRenderTarget(p),m.render(g,c),p=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),l.dispose(),d.dispose()}}var th=new Wt,bs=new Yr(1,1),ih=new Dl,rh=new rc,ah=new Vl,jo=[],Yo=[],qo=new Float32Array(16),Zo=new Float32Array(9),Ko=new Float32Array(4);function Ar(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=jo[a];if(n===void 0&&(n=new Float32Array(a),jo[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function vt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function xt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function qa(e,t){let i=Yo[t];i===void 0&&(i=new Int32Array(t),Yo[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Zp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Kp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vt(i,t))return;e.uniform2fv(this.addr,t),xt(i,t)}}function Jp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vt(i,t))return;e.uniform3fv(this.addr,t),xt(i,t)}}function $p(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vt(i,t))return;e.uniform4fv(this.addr,t),xt(i,t)}}function Qp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(vt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),xt(i,t)}else{if(vt(i,r))return;Ko.set(r),e.uniformMatrix2fv(this.addr,!1,Ko),xt(i,r)}}function ef(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(vt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),xt(i,t)}else{if(vt(i,r))return;Zo.set(r),e.uniformMatrix3fv(this.addr,!1,Zo),xt(i,r)}}function tf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(vt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),xt(i,t)}else{if(vt(i,r))return;qo.set(r),e.uniformMatrix4fv(this.addr,!1,qo),xt(i,r)}}function rf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function af(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vt(i,t))return;e.uniform2iv(this.addr,t),xt(i,t)}}function nf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vt(i,t))return;e.uniform3iv(this.addr,t),xt(i,t)}}function sf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vt(i,t))return;e.uniform4iv(this.addr,t),xt(i,t)}}function of(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function lf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vt(i,t))return;e.uniform2uiv(this.addr,t),xt(i,t)}}function hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vt(i,t))return;e.uniform3uiv(this.addr,t),xt(i,t)}}function cf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vt(i,t))return;e.uniform4uiv(this.addr,t),xt(i,t)}}function uf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(bs.compareFunction=i.isReversedDepthBuffer()?Os:Is,n=bs):n=th,i.setTexture2D(t||n,a)}function df(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||rh,a)}function pf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||ah,a)}function ff(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||ih,a)}function mf(e){switch(e){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return $p;case 35674:return Qp;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return rf;case 35667:case 35671:return af;case 35668:case 35672:return nf;case 35669:case 35673:return sf;case 5125:return of;case 36294:return lf;case 36295:return hf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return ff}}function gf(e,t){e.uniform1fv(this.addr,t)}function _f(e,t){let i=Ar(t,this.size,2);e.uniform2fv(this.addr,i)}function vf(e,t){let i=Ar(t,this.size,3);e.uniform3fv(this.addr,i)}function xf(e,t){let i=Ar(t,this.size,4);e.uniform4fv(this.addr,i)}function Mf(e,t){let i=Ar(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Sf(e,t){let i=Ar(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function yf(e,t){let i=Ar(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Ef(e,t){e.uniform1iv(this.addr,t)}function Tf(e,t){e.uniform2iv(this.addr,t)}function bf(e,t){e.uniform3iv(this.addr,t)}function wf(e,t){e.uniform4iv(this.addr,t)}function Af(e,t){e.uniform1uiv(this.addr,t)}function Rf(e,t){e.uniform2uiv(this.addr,t)}function Cf(e,t){e.uniform3uiv(this.addr,t)}function Pf(e,t){e.uniform4uiv(this.addr,t)}function Df(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);vt(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=bs:s=th;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Lf(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);vt(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||rh,n[s])}function Uf(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);vt(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||ah,n[s])}function Nf(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);vt(r,n)||(e.uniform1iv(this.addr,n),xt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||ih,n[s])}function If(e){switch(e){case 5126:return gf;case 35664:return _f;case 35665:return vf;case 35666:return xf;case 35674:return Mf;case 35675:return Sf;case 35676:return yf;case 5124:case 35670:return Ef;case 35667:case 35671:return Tf;case 35668:case 35672:return bf;case 35669:case 35673:return wf;case 5125:return Af;case 36294:return Rf;case 36295:return Cf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}var Of=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mf(t.type)}},Ff=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=If(t.type)}},Bf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Dn=/(\w+)(\])?(\[|\.)?/g;function Jo(e,t){e.seq.push(t),e.map[t.id]=t}function zf(e,t,i){let r=e.name,a=r.length;for(Dn.lastIndex=0;;){let n=Dn.exec(r),s=Dn.lastIndex,o=n[1],h=n[2]==="]",l=n[3];if(h&&(o=o|0),l===void 0||l==="["&&s+2===a){Jo(i,l===void 0?new Of(o,e,t):new Ff(o,e,t));break}else{let d=i.map[o];d===void 0&&(d=new Bf(o),Jo(i,d)),i=d}}}var Oa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);zf(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function $o(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Hf=37297,Gf=0;function Vf(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Qo=new Be;function kf(e){Ve._getMatrix(Qo,Ve.workingColorSpace,e);let t=`mat3( ${Qo.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(e)){case Ha:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function el(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Vf(e.getShaderSource(t),s)}else return a}function Wf(e,t){let i=kf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Xf={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[Rs]:"ACESFilmic",[xl]:"AgX",[Ml]:"Neutral",[vl]:"Custom"};function jf(e,t){let i=Xf[t];return i===void 0?(Le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Aa=new F;function Yf(){Ve.getLuminanceCoefficients(Aa);let e=Aa.x.toFixed(4),t=Aa.y.toFixed(4),i=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Zf(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Kf(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Hr(e){return e!==""}function tl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(e){return e.replace(Jf,Qf)}var $f=new Map;function Qf(e,t){let i=ze[t];if(i===void 0){let r=$f.get(t);if(r!==void 0)i=ze[r],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ws(i)}var em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(e){return e.replace(em,tm)}function tm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function al(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var im={[Gr]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function rm(e){return im[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var am={[Wi]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function nm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":am[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var sm={[Tr]:"ENVMAP_MODE_REFRACTION"};function om(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":sm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lm={[fl]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function hm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":lm[e.combine]||"ENVMAP_BLENDING_NONE"}function cm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function um(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,h=rm(i),l=nm(i),d=om(i),g=hm(i),c=cm(i),_=qf(i),E=Zf(n),T=a.createProgram(),v,p,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Hr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(v=[al(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[al(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ai?"#define TONE_MAPPING":"",i.toneMapping!==ai?ze.tonemapping_pars_fragment:"",i.toneMapping!==ai?jf("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Wf("linearToOutputTexel",i.outputColorSpace),Yf(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Hr).join(`
`)),s=ws(s),s=tl(s,i),s=il(s,i),o=ws(o),o=tl(o,i),o=il(o,i),s=rl(s),o=rl(o),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",i.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let O=P+v+s,m=P+p+o,b=$o(a,a.VERTEX_SHADER,O),A=$o(a,a.FRAGMENT_SHADER,m);a.attachShader(T,b),a.attachShader(T,A),i.index0AttributeName!==void 0?a.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function R(N){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(T)||"",Z=a.getShaderInfoLog(b)||"",U=a.getShaderInfoLog(A)||"",H=I.trim(),J=Z.trim(),V=U.trim(),ce=!0,Y=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ce=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,T,b,A);else{let K=el(a,b,"vertex"),Q=el(a,A,"fragment");Xe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+K+`
`+Q)}else H!==""?Le("WebGLProgram: Program Info Log:",H):(J===""||V==="")&&(Y=!1);Y&&(N.diagnostics={runnable:ce,programLog:H,vertexShader:{log:J,prefix:v},fragmentShader:{log:V,prefix:p}})}a.deleteShader(b),a.deleteShader(A),u=new Oa(a,T),y=Kf(a,T)}let u;this.getUniforms=function(){return u===void 0&&R(this),u};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(T,Hf)),k},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Gf++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=A,this}var dm=0,pm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fm(e),t.set(e,i)),i}},fm=class{constructor(e){this.id=dm++,this.code=e,this.usedTimes=0}};function mm(e){return e===Xi||e===Fa||e===Ba}function gm(e,t,i,r,a,n){let s=new Bs,o=new pm,h=new Set,l=[],d=new Map,g=r.logarithmicDepthBuffer,c=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(u){return h.add(u),u===0?"uv":`uv${u}`}function T(u,y,k,N,I,Z){let U=N.fog,H=I.geometry,J=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?N.environment:null,V=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap,ce=t.get(u.envMap||J,V),Y=ce&&ce.mapping===Xa?ce.image.height:null,K=_[u.type];u.precision!==null&&(c=r.getMaxPrecision(u.precision),c!==u.precision&&Le("WebGLProgram.getParameters:",u.precision,"not supported, using",c,"instead."));let Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ne=Q!==void 0?Q.length:0,Te=0;H.morphAttributes.position!==void 0&&(Te=1),H.morphAttributes.normal!==void 0&&(Te=2),H.morphAttributes.color!==void 0&&(Te=3);let qe,Oe,q,ne;if(K){let rt=ei[K];qe=rt.vertexShader,Oe=rt.fragmentShader}else{qe=u.vertexShader,Oe=u.fragmentShader;let rt=o.getVertexShaderStage(u),Ze=o.getFragmentShaderStage(u);o.update(u,rt,Ze),q=rt.id,ne=Ze.id}let oe=e.getRenderTarget(),Ae=e.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,ge=I.isBatchedMesh===!0,Ye=!!u.map,ke=!!u.matcap,Ie=!!ce,ot=!!u.aoMap,ut=!!u.lightMap,At=!!u.bumpMap&&u.wireframe===!1,it=!!u.normalMap,St=!!u.displacementMap,ht=!!u.emissiveMap,lt=!!u.metalnessMap,S=!!u.roughnessMap,ve=u.anisotropy>0,te=u.clearcoat>0,le=u.dispersion>0,x=u.retroreflectivity>0,f=u.iridescence>0,w=u.sheen>0,B=u.transmission>0,X=ve&&!!u.anisotropyMap,re=te&&!!u.clearcoatMap,ee=te&&!!u.clearcoatNormalMap,C=te&&!!u.clearcoatRoughnessMap,se=f&&!!u.iridescenceMap,de=f&&!!u.iridescenceThicknessMap,Se=w&&!!u.sheenColorMap,ae=w&&!!u.sheenRoughnessMap,me=!!u.specularMap,be=!!u.specularColorMap,Ue=!!u.specularIntensityMap,je=B&&!!u.transmissionMap,L=B&&!!u.thicknessMap,j=!!u.gradientMap,$=!!u.alphaMap,pe=u.alphaTest>0,xe=!!u.alphaHash,ie=!!u.extensions,ue=ai;u.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ue=e.toneMapping);let Re={shaderID:K,shaderType:u.type,shaderName:u.name,vertexShader:qe,fragmentShader:Oe,defines:u.defines,customVertexShaderID:q,customFragmentShaderID:ne,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:c,batching:ge,batchingColor:ge&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!u.alphaToCoverage,map:Ye,matcap:ke,envMap:Ie,envMapMode:Ie&&ce.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:ut,bumpMap:At,normalMap:it,displacementMap:St,emissiveMap:ht,normalMapObjectSpace:it&&u.normalMapType===Bh,normalMapTangentSpace:it&&u.normalMapType===Ms,packedNormalMap:it&&u.normalMapType===Ms&&mm(u.normalMap.format),metalnessMap:lt,roughnessMap:S,anisotropy:ve,anisotropyMap:X,clearcoat:te,clearcoatMap:re,clearcoatNormalMap:ee,clearcoatRoughnessMap:C,dispersion:le,retroreflection:x,iridescence:f,iridescenceMap:se,iridescenceThicknessMap:de,sheen:w,sheenColorMap:Se,sheenRoughnessMap:ae,specularMap:me,specularColorMap:be,specularIntensityMap:Ue,transmission:B,transmissionMap:je,thicknessMap:L,gradientMap:j,opaque:u.transparent===!1&&u.blending===Vr&&u.alphaToCoverage===!1,alphaMap:$,alphaTest:pe,alphaHash:xe,combine:u.combine,mapUv:Ye&&E(u.map.channel),aoMapUv:ot&&E(u.aoMap.channel),lightMapUv:ut&&E(u.lightMap.channel),bumpMapUv:At&&E(u.bumpMap.channel),normalMapUv:it&&E(u.normalMap.channel),displacementMapUv:St&&E(u.displacementMap.channel),emissiveMapUv:ht&&E(u.emissiveMap.channel),metalnessMapUv:lt&&E(u.metalnessMap.channel),roughnessMapUv:S&&E(u.roughnessMap.channel),anisotropyMapUv:X&&E(u.anisotropyMap.channel),clearcoatMapUv:re&&E(u.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&E(u.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&E(u.iridescenceMap.channel),iridescenceThicknessMapUv:de&&E(u.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&E(u.sheenColorMap.channel),sheenRoughnessMapUv:ae&&E(u.sheenRoughnessMap.channel),specularMapUv:me&&E(u.specularMap.channel),specularColorMapUv:be&&E(u.specularColorMap.channel),specularIntensityMapUv:Ue&&E(u.specularIntensityMap.channel),transmissionMapUv:je&&E(u.transmissionMap.channel),thicknessMapUv:L&&E(u.thicknessMap.channel),alphaMapUv:$&&E(u.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(it||ve),vertexNormals:!!H.attributes.normal,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Ye||$),fog:!!U,useFog:u.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:u.wireframe===!1&&(u.flatShading===!0||H.attributes.normal===void 0&&it===!1&&(u.isMeshLambertMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isMeshPhysicalMaterial)),sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ae,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Te,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:u.dithering,shadowMapEnabled:e.shadowMap.enabled&&k.length>0,shadowMapType:e.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ye&&u.map.isVideoTexture===!0&&Ve.getTransfer(u.map.colorSpace)===Ke,decodeVideoTextureEmissive:ht&&u.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(u.emissiveMap.colorSpace)===Ke,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===mi,flipSided:u.side===Nt,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:ie&&u.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&u.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function v(u){let y=[];if(u.shaderID?y.push(u.shaderID):(y.push(u.customVertexShaderID),y.push(u.customFragmentShaderID)),u.defines!==void 0)for(let k in u.defines)y.push(k),y.push(u.defines[k]);return u.isRawShaderMaterial===!1&&(p(y,u),P(y,u),y.push(e.outputColorSpace)),y.push(u.customProgramCacheKey),y.join()}function p(u,y){u.push(y.precision),u.push(y.outputColorSpace),u.push(y.envMapMode),u.push(y.envMapCubeUVHeight),u.push(y.mapUv),u.push(y.alphaMapUv),u.push(y.lightMapUv),u.push(y.aoMapUv),u.push(y.bumpMapUv),u.push(y.normalMapUv),u.push(y.displacementMapUv),u.push(y.emissiveMapUv),u.push(y.metalnessMapUv),u.push(y.roughnessMapUv),u.push(y.anisotropyMapUv),u.push(y.clearcoatMapUv),u.push(y.clearcoatNormalMapUv),u.push(y.clearcoatRoughnessMapUv),u.push(y.iridescenceMapUv),u.push(y.iridescenceThicknessMapUv),u.push(y.sheenColorMapUv),u.push(y.sheenRoughnessMapUv),u.push(y.specularMapUv),u.push(y.specularColorMapUv),u.push(y.specularIntensityMapUv),u.push(y.transmissionMapUv),u.push(y.thicknessMapUv),u.push(y.combine),u.push(y.fogExp2),u.push(y.sizeAttenuation),u.push(y.morphTargetsCount),u.push(y.morphAttributeCount),u.push(y.numSunLights),u.push(y.numDirLights),u.push(y.numPointLights),u.push(y.numSpotLights),u.push(y.numSpotLightMaps),u.push(y.numHemiLights),u.push(y.numRectAreaLights),u.push(y.numSunLightShadows),u.push(y.numDirLightShadows),u.push(y.numPointLightShadows),u.push(y.numSpotLightShadows),u.push(y.numSpotLightShadowsWithMaps),u.push(y.numLightProbes),u.push(y.shadowMapType),u.push(y.toneMapping),u.push(y.numClippingPlanes),u.push(y.numClipIntersection),u.push(y.depthPacking)}function P(u,y){s.disableAll(),y.instancing&&s.enable(0),y.instancingColor&&s.enable(1),y.instancingMorph&&s.enable(2),y.matcap&&s.enable(3),y.envMap&&s.enable(4),y.normalMapObjectSpace&&s.enable(5),y.normalMapTangentSpace&&s.enable(6),y.clearcoat&&s.enable(7),y.iridescence&&s.enable(8),y.alphaTest&&s.enable(9),y.vertexColors&&s.enable(10),y.vertexAlphas&&s.enable(11),y.vertexUv1s&&s.enable(12),y.vertexUv2s&&s.enable(13),y.vertexUv3s&&s.enable(14),y.vertexTangents&&s.enable(15),y.anisotropy&&s.enable(16),y.alphaHash&&s.enable(17),y.batching&&s.enable(18),y.dispersion&&s.enable(19),y.retroreflection&&s.enable(24),y.batchingColor&&s.enable(20),y.gradientMap&&s.enable(21),y.packedNormalMap&&s.enable(22),y.vertexNormals&&s.enable(23),u.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reversedDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.decodeVideoTextureEmissive&&s.enable(20),y.alphaToCoverage&&s.enable(21),y.numLightProbeGrids>0&&s.enable(22),y.hasPositionAttribute&&s.enable(23),u.push(s.mask)}function O(u){let y=_[u.type],k;if(y){let N=ei[y];k=Cc.clone(N.uniforms)}else k=u.uniforms;return k}function m(u,y){let k=d.get(y);return k!==void 0?++k.usedTimes:(k=new um(e,y,u,a),l.push(k),d.set(y,k)),k}function b(u){if(--u.usedTimes===0){let y=l.indexOf(u);l[y]=l[l.length-1],l.pop(),d.delete(u.cacheKey),u.destroy()}}function A(u){o.remove(u)}function R(){o.dispose()}return{getParameters:T,getProgramCacheKey:v,getUniforms:O,acquireProgram:m,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:R}}function _m(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,h){e.get(s)[o]=h}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function vm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function nl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function sl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(c){let _=0;return c.isInstancedMesh&&(_+=2),c.isSkinnedMesh&&(_+=1),_}function o(c,_,E,T,v,p){let P=e[t];return P===void 0?(P={id:c.id,object:c,geometry:_,material:E,materialVariant:s(c),groupOrder:T,renderOrder:c.renderOrder,z:v,group:p},e[t]=P):(P.id=c.id,P.object=c,P.geometry=_,P.material=E,P.materialVariant=s(c),P.groupOrder=T,P.renderOrder=c.renderOrder,P.z=v,P.group=p),t++,P}function h(c,_,E,T,v,p,P){P.reversedDepth===!0&&(v=-v);let O=o(c,_,E,T,v,p);E.transmission>0?r.push(O):E.transparent===!0?a.push(O):i.push(O)}function l(c,_,E,T,v,p){let P=o(c,_,E,T,v,p);E.transmission>0?r.unshift(P):E.transparent===!0?a.unshift(P):i.unshift(P)}function d(c,_){i.length>1&&i.sort(c||vm),r.length>1&&r.sort(_||nl),a.length>1&&a.sort(_||nl)}function g(){for(let c=t,_=e.length;c<_;c++){let E=e[c];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:h,unshift:l,finish:g,sort:d}}function xm(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new sl,e.set(r,[s])):a>=n.length?(s=new sl,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Mm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new Fe};break;case"SpotLight":i={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=i,i}}}function Sm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var ym=0;function Em(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Tm(e){let t=new Mm,i=Sm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new F);let a=new F,n=new st,s=new st;function o(l){let d=0,g=0,c=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let _=0,E=0,T=0,v=0,p=0,P=0,O=0,m=0,b=0,A=0,R=0,u=0,y=0,k=0;l.sort(Em);for(let I=0,Z=l.length;I<Z;I++){let U=l[I],H=U.color,J=U.intensity,V=U.distance,ce=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Xi?ce=U.shadow.map.texture:ce=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=H.r*J,g+=H.g*J,c+=H.b*J;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(U.sh.coefficients[Y],J);k++}else if(U.isSunLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,Q=i.get(U);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[E]=Q,r.sunShadowMap[E]=ce;let Ne=K.getViewportCount();for(let Te=0;Te<Ne;Te++)r.sunShadowMatrix[T+Te]=K.getMatrix(Te),r.sunShadowCascade[T+Te]=K._cascadeData[Te];T+=Ne,E++}r.sun[_]=Y,_++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,Q=i.get(U);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=ce,r.directionalShadowMatrix[v]=U.shadow.matrix,b++}r.directional[v]=Y,v++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(H).multiplyScalar(J),Y.distance=V,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,r.spot[P]=Y;let K=U.shadow;if(U.map&&(r.spotLightMap[u]=U.map,u++,K.updateMatrices(U),U.castShadow&&y++),r.spotLightMatrix[P]=K.matrix,U.castShadow){let Q=i.get(U);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.spotShadow[P]=Q,r.spotShadowMap[P]=ce,R++}P++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(H).multiplyScalar(J),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),r.rectArea[O]=Y,O++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let K=U.shadow,Q=i.get(U);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=ce,r.pointShadowMatrix[p]=U.shadow.matrix,A++}r.point[p]=Y,p++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(J),Y.groundColor.copy(U.groundColor).multiplyScalar(J),r.hemi[m]=Y,m++}}O>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=c;let N=r.hash;(N.sunLength!==_||N.directionalLength!==v||N.pointLength!==p||N.spotLength!==P||N.rectAreaLength!==O||N.hemiLength!==m||N.numSunShadows!==E||N.numDirectionalShadows!==b||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==u||N.numLightProbes!==k)&&(r.sun.length=_,r.directional.length=v,r.spot.length=P,r.rectArea.length=O,r.point.length=p,r.hemi.length=m,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+u-y,r.spotLightMap.length=u,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=k,N.sunLength=_,N.directionalLength=v,N.pointLength=p,N.spotLength=P,N.rectAreaLength=O,N.hemiLength=m,N.numSunShadows=E,N.numDirectionalShadows=b,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=u,N.numLightProbes=k,r.version=ym++)}function h(l,d){let g=0,c=0,_=0,E=0,T=0,v=0,p=d.matrixWorldInverse;for(let P=0,O=l.length;P<O;P++){let m=l[P];if(m.isSunLight){let b=r.sun[g];b.direction.setFromMatrixPosition(m.matrixWorld),b.direction.transformDirection(p),g++}else if(m.isDirectionalLight){let b=r.directional[c];b.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),c++}else if(m.isSpotLight){let b=r.spot[E];b.position.setFromMatrixPosition(m.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),E++}else if(m.isRectAreaLight){let b=r.rectArea[T];b.position.setFromMatrixPosition(m.matrixWorld),b.position.applyMatrix4(p),s.identity(),n.copy(m.matrixWorld),n.premultiply(p),s.extractRotation(n),b.halfWidth.set(m.width*.5,0,0),b.halfHeight.set(0,m.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),T++}else if(m.isPointLight){let b=r.point[_];b.position.setFromMatrixPosition(m.matrixWorld),b.position.applyMatrix4(p),_++}else if(m.isHemisphereLight){let b=r.hemi[v];b.direction.setFromMatrixPosition(m.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:h,state:r}}function ol(e){let t=new Tm(e),i=[],r=[],a=[];function n(c){g.camera=c,i.length=0,r.length=0,a.length=0}function s(c){i.push(c)}function o(c){r.push(c)}function h(c){a.push(c)}function l(){t.setup(i)}function d(c){t.setupView(i,c)}let g={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:g,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:h}}function bm(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new ol(e),t.set(a,[o])):n>=s.length?(o=new ol(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
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
}`,Rm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Cm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ll=new st,Br=new F,Ln=new F;function Pm(e,t,i){let r=new Hs,a=new Ce,n=new Ce,s=new pt,o=new Nc,h=new Ic,l={},d=i.maxTextureSize,g={[ki]:Nt,[Nt]:ki,[mi]:mi},c=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:wm,fragmentShader:Am}),_=c.clone();_.defines.HORIZONTAL_PASS=1;let E=new Bt;E.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Dt(E,c),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(A,R,u){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===mh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);let y=e.getRenderTarget(),k=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),I=e.state;I.setBlending(vi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let Z=p!==this.type;Z&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(H=>H.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,H=A.length;U<H;U++){let J=A[U],V=J.shadow;if(V===void 0){Le("WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);let ce=V.getFrameExtents();a.multiply(ce),n.copy(V.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(n.x=Math.floor(d/ce.x),a.x=n.x*ce.x,V.mapSize.x=n.x),a.y>d&&(n.y=Math.floor(d/ce.y),a.y=n.y*ce.y,V.mapSize.y=n.y));let Y=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zr){if(J.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Zt(a.x,a.y,{format:Xi,type:si,minFilter:Et,magFilter:Et,generateMipmaps:!1}),V.map.texture.name=J.name+".shadowMap",V.map.depthTexture=new Yr(a.x,a.y,ii),V.map.depthTexture.name=J.name+".shadowMapDepth",V.map.depthTexture.format=Mi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=yt,V.map.depthTexture.magFilter=yt}else J.isPointLight?(V.map=new eh(a.x),V.map.depthTexture=new wc(a.x,ni)):(V.map=new Zt(a.x,a.y),V.map.depthTexture=new Yr(a.x,a.y,ni)),V.map.depthTexture.name=J.name+".shadowMap",V.map.depthTexture.format=Mi,this.type===Gr?(V.map.depthTexture.compareFunction=Y?Os:Is,V.map.depthTexture.minFilter=Et,V.map.depthTexture.magFilter=Et):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=yt,V.map.depthTexture.magFilter=yt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==a.x||V.map.height!==a.y)&&V.map.setSize(a.x,a.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();J.isPointLight!==!0&&V.updateMatrices(J,u);for(let Q=0;Q<K;Q++){let Ne=V.getCamera(Q);if(J.isPointLight){let Te=V.camera,qe=V.matrix,Oe=J.distance||Te.far;Oe!==Te.far&&(Te.far=Oe,Te.updateProjectionMatrix()),Br.setFromMatrixPosition(J.matrixWorld),Te.position.copy(Br),Ln.copy(Te.position),Ln.add(Rm[Q]),Te.up.copy(Cm[Q]),Te.lookAt(Ln),Te.updateMatrixWorld(),qe.makeTranslation(-Br.x,-Br.y,-Br.z),ll.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ll,Te.coordinateSystem,Te.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,Q),e.clear();else{Q===0&&(e.setRenderTarget(V.map),e.clear());let Te=V.getViewport(Q);s.set(n.x*Te.x,n.y*Te.y,n.x*Te.z,n.y*Te.w),I.viewport(s)}r=V.getFrustum(Q),m(R,u,Ne,J,this.type)}V.isPointLightShadow!==!0&&this.type===zr&&P(V,u),V.needsUpdate=!1}p=this.type,v.needsUpdate=!1,e.setRenderTarget(y,k,N)};function P(A,R){let u=t.update(T);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null?A.mapPass=new Zt(a.x,a.y,{format:Xi,type:si}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,u,c,T,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value.set(A.map.width,A.map.height),_.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,u,_,T,null)}function O(A,R,u,y){let k=null,N=u.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)k=N;else if(k=u.isPointLight===!0?h:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=k.uuid,Z=R.uuid,U=l[I];U===void 0&&(U={},l[I]=U);let H=U[Z];H===void 0&&(H=k.clone(),U[Z]=H,R.addEventListener("dispose",b)),k=H}if(k.visible=R.visible,k.wireframe=R.wireframe,y===zr?k.side=R.shadowSide!==null?R.shadowSide:R.side:k.side=R.shadowSide!==null?R.shadowSide:g[R.side],k.alphaMap=R.alphaMap,k.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,k.map=R.map,k.clipShadows=R.clipShadows,k.clippingPlanes=R.clippingPlanes,k.clipIntersection=R.clipIntersection,k.displacementMap=R.displacementMap,k.displacementScale=R.displacementScale,k.displacementBias=R.displacementBias,k.wireframeLinewidth=R.wireframeLinewidth,k.linewidth=R.linewidth,u.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let I=e.properties.get(k);I.light=u}return k}function m(A,R,u,y,k){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===zr)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,A.matrixWorld);let I=t.update(A),Z=A.material;if(Array.isArray(Z)){let U=I.groups;for(let H=0,J=U.length;H<J;H++){let V=U[H],ce=Z[V.materialIndex];if(ce&&ce.visible){let Y=O(A,ce,y,k);A.onBeforeShadow(e,A,R,u,I,Y,V),e.renderBufferDirect(u,null,I,Y,A,V),A.onAfterShadow(e,A,R,u,I,Y,V)}}}else if(Z.visible){let U=O(A,Z,y,k);A.onBeforeShadow(e,A,R,u,I,U,null),e.renderBufferDirect(u,null,I,U,A,null),A.onAfterShadow(e,A,R,u,I,U,null)}}let N=A.children;for(let I=0,Z=N.length;I<Z;I++)m(N[I],R,u,y,k)}function b(A){A.target.removeEventListener("dispose",b);for(let R in l){let u=l[R],y=A.target.uuid;y in u&&(u[y].dispose(),delete u[y])}}}function Dm(e,t){function i(){let L=!1,j=new pt,$=null,pe=new pt(0,0,0,0);return{setMask:function(xe){$!==xe&&!L&&(e.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){L=xe},setClear:function(xe,ie,ue,Re,rt){rt===!0&&(xe*=Re,ie*=Re,ue*=Re),j.set(xe,ie,ue,Re),pe.equals(j)===!1&&(e.clearColor(xe,ie,ue,Re),pe.copy(j))},reset:function(){L=!1,$=null,pe.set(-1,0,0,0)}}}function r(){let L=!1,j=!1,$=null,pe=null,xe=null;return{setReversed:function(ie){if(j!==ie){let ue=t.get("EXT_clip_control");ie?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),j=ie;let Re=xe;xe=null,this.setClear(Re)}},getReversed:function(){return j},setTest:function(ie){ie?oe(e.DEPTH_TEST):Ae(e.DEPTH_TEST)},setMask:function(ie){$!==ie&&!L&&(e.depthMask(ie),$=ie)},setFunc:function(ie){if(j&&(ie=Zh[ie]),pe!==ie){switch(ie){case In:e.depthFunc(e.NEVER);break;case On:e.depthFunc(e.ALWAYS);break;case Fn:e.depthFunc(e.LESS);break;case kr:e.depthFunc(e.LEQUAL);break;case Bn:e.depthFunc(e.EQUAL);break;case zn:e.depthFunc(e.GEQUAL);break;case Hn:e.depthFunc(e.GREATER);break;case Gn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=ie}},setLocked:function(ie){L=ie},setClear:function(ie){xe!==ie&&(xe=ie,j&&(ie=1-ie),e.clearDepth(ie))},reset:function(){L=!1,$=null,pe=null,xe=null,j=!1}}}function a(){let L=!1,j=null,$=null,pe=null,xe=null,ie=null,ue=null,Re=null,rt=null;return{setTest:function(Ze){L||(Ze?oe(e.STENCIL_TEST):Ae(e.STENCIL_TEST))},setMask:function(Ze){j!==Ze&&!L&&(e.stencilMask(Ze),j=Ze)},setFunc:function(Ze,Kt,li){($!==Ze||pe!==Kt||xe!==li)&&(e.stencilFunc(Ze,Kt,li),$=Ze,pe=Kt,xe=li)},setOp:function(Ze,Kt,li){(ie!==Ze||ue!==Kt||Re!==li)&&(e.stencilOp(Ze,Kt,li),ie=Ze,ue=Kt,Re=li)},setLocked:function(Ze){L=Ze},setClear:function(Ze){rt!==Ze&&(e.clearStencil(Ze),rt=Ze)},reset:function(){L=!1,j=null,$=null,pe=null,xe=null,ie=null,ue=null,Re=null,rt=null}}}let n=new i,s=new r,o=new a,h=new WeakMap,l=new WeakMap,d={},g={},c={},_=new WeakMap,E=[],T=null,v=!1,p=null,P=null,O=null,m=null,b=null,A=null,R=null,u=new Fe(0,0,0),y=0,k=!1,N=null,I=null,Z=null,U=null,H=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ce=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=ce>=2);let K=null,Q={},Ne=e.getParameter(e.SCISSOR_BOX),Te=e.getParameter(e.VIEWPORT),qe=new pt().fromArray(Ne),Oe=new pt().fromArray(Te);function q(L,j,$,pe){let xe=new Uint8Array(4),ie=e.createTexture();e.bindTexture(L,ie),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<$;ue++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,xe):e.texImage2D(j+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return ie}let ne={};ne[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(e.DEPTH_TEST),s.setFunc(kr),At(!1),it(to),oe(e.CULL_FACE),ot(vi);function oe(L){d[L]!==!0&&(e.enable(L),d[L]=!0)}function Ae(L){d[L]!==!1&&(e.disable(L),d[L]=!1)}function Pe(L,j){return c[L]!==j?(e.bindFramebuffer(L,j),c[L]=j,L===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=j),L===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=j),!0):!1}function ge(L,j){let $=E,pe=!1;if(L){$=_.get(j),$===void 0&&($=[],_.set(j,$));let xe=L.textures;if($.length!==xe.length||$[0]!==e.COLOR_ATTACHMENT0){for(let ie=0,ue=xe.length;ie<ue;ie++)$[ie]=e.COLOR_ATTACHMENT0+ie;$.length=xe.length,pe=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,pe=!0);pe&&e.drawBuffers($)}function Ye(L){return T!==L?(e.useProgram(L),T=L,!0):!1}let ke={[ur]:e.FUNC_ADD,[_h]:e.FUNC_SUBTRACT,[vh]:e.FUNC_REVERSE_SUBTRACT};ke[xh]=e.MIN,ke[Mh]=e.MAX;let Ie={[Sh]:e.ZERO,[yh]:e.ONE,[Eh]:e.SRC_COLOR,[dl]:e.SRC_ALPHA,[Ch]:e.SRC_ALPHA_SATURATE,[Ah]:e.DST_COLOR,[bh]:e.DST_ALPHA,[Th]:e.ONE_MINUS_SRC_COLOR,[pl]:e.ONE_MINUS_SRC_ALPHA,[Rh]:e.ONE_MINUS_DST_COLOR,[wh]:e.ONE_MINUS_DST_ALPHA,[Ph]:e.CONSTANT_COLOR,[Dh]:e.ONE_MINUS_CONSTANT_COLOR,[Lh]:e.CONSTANT_ALPHA,[Uh]:e.ONE_MINUS_CONSTANT_ALPHA};function ot(L,j,$,pe,xe,ie,ue,Re,rt,Ze){if(L===vi){v===!0&&(Ae(e.BLEND),v=!1);return}if(v===!1&&(oe(e.BLEND),v=!0),L!==gh){if(L!==p||Ze!==k){if((P!==ur||b!==ur)&&(e.blendEquation(e.FUNC_ADD),P=ur,b=ur),Ze)switch(L){case Vr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Nn:e.blendFunc(e.ONE,e.ONE);break;case io:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ro:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Nn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case io:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}O=null,m=null,A=null,R=null,u.set(0,0,0),y=0,p=L,k=Ze}return}xe=xe||j,ie=ie||$,ue=ue||pe,(j!==P||xe!==b)&&(e.blendEquationSeparate(ke[j],ke[xe]),P=j,b=xe),($!==O||pe!==m||ie!==A||ue!==R)&&(e.blendFuncSeparate(Ie[$],Ie[pe],Ie[ie],Ie[ue]),O=$,m=pe,A=ie,R=ue),(Re.equals(u)===!1||rt!==y)&&(e.blendColor(Re.r,Re.g,Re.b,rt),u.copy(Re),y=rt),p=L,k=!1}function ut(L,j){L.side===mi?Ae(e.CULL_FACE):oe(e.CULL_FACE);let $=L.side===Nt;j&&($=!$),At($),L.blending===Vr&&L.transparent===!1?ot(vi):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):Ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function At(L){N!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),N=L)}function it(L){L!==ph?(oe(e.CULL_FACE),L!==I&&(L===to?e.cullFace(e.BACK):L===fh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ae(e.CULL_FACE),I=L}function St(L){L!==Z&&(V&&e.lineWidth(L),Z=L)}function ht(L,j,$){L?(oe(e.POLYGON_OFFSET_FILL),(U!==j||H!==$)&&(U=j,H=$,s.getReversed()&&(j=-j),e.polygonOffset(j,$))):Ae(e.POLYGON_OFFSET_FILL)}function lt(L){L?oe(e.SCISSOR_TEST):Ae(e.SCISSOR_TEST)}function S(L){L===void 0&&(L=e.TEXTURE0+J-1),K!==L&&(e.activeTexture(L),K=L)}function ve(L,j,$){$===void 0&&(K===null?$=e.TEXTURE0+J-1:$=K);let pe=Q[$];pe===void 0&&(pe={type:void 0,texture:void 0},Q[$]=pe),(pe.type!==L||pe.texture!==j)&&(K!==$&&(e.activeTexture($),K=$),e.bindTexture(L,j||ne[L]),pe.type=L,pe.texture=j)}function te(){let L=Q[K];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{e.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function x(){try{e.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function f(){try{e.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function w(){try{e.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function B(){try{e.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function X(){try{e.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function re(){try{e.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ee(){try{e.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function C(){try{e.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function se(){try{e.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function de(L){return g[L]!==void 0?g[L]:e.getParameter(L)}function Se(L,j){g[L]!==j&&(e.pixelStorei(L,j),g[L]=j)}function ae(L){qe.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function me(L){Oe.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function be(L,j){let $=l.get(j);$===void 0&&($=new WeakMap,l.set(j,$));let pe=$.get(L);pe===void 0&&(pe=e.getUniformBlockIndex(j,L.name),$.set(L,pe))}function Ue(L,j){let $=l.get(j).get(L);h.get(j)!==$&&(e.uniformBlockBinding(j,$,L.__bindingPointIndex),h.set(j,$))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},g={},K=null,Q={},c={},_=new WeakMap,E=[],T=null,v=!1,p=null,P=null,O=null,m=null,b=null,A=null,R=null,u=new Fe(0,0,0),y=0,k=!1,N=null,I=null,Z=null,U=null,H=null,qe.set(0,0,e.canvas.width,e.canvas.height),Oe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:oe,disable:Ae,bindFramebuffer:Pe,drawBuffers:ge,useProgram:Ye,setBlending:ot,setMaterial:ut,setFlipSided:At,setCullFace:it,setLineWidth:St,setPolygonOffset:ht,setScissorTest:lt,activeTexture:S,bindTexture:ve,unbindTexture:te,compressedTexImage2D:le,compressedTexImage3D:x,texImage2D:C,texImage3D:se,pixelStorei:Se,getParameter:de,updateUBOMapping:be,uniformBlockBinding:Ue,texStorage2D:re,texStorage3D:ee,texSubImage2D:f,texSubImage3D:w,compressedTexSubImage2D:B,compressedTexSubImage3D:X,scissor:ae,viewport:me,reset:je}}function Lm(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,d=new WeakMap,g=new Set,c,_=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(x,f){return E?new OffscreenCanvas(x,f):Ga("canvas")}function v(x,f,w){let B=1,X=le(x);if((X.width>w||X.height>w)&&(B=w/Math.max(X.width,X.height)),B<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let re=Math.floor(B*X.width),ee=Math.floor(B*X.height);c===void 0&&(c=T(re,ee));let C=f?T(re,ee):c;return C.width=re,C.height=ee,C.getContext("2d").drawImage(x,0,0,re,ee),Le("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+ee+")."),C}else return"data"in x&&Le("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),x;return x}function p(x){return x.generateMipmaps}function P(x){e.generateMipmap(x)}function O(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(x,f,w,B,X,re=!1){if(x!==null){if(e[x]!==void 0)return e[x];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ee;B&&(ee=t.get("EXT_texture_norm16"),ee||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=f;if(f===e.RED&&(w===e.FLOAT&&(C=e.R32F),w===e.HALF_FLOAT&&(C=e.R16F),w===e.UNSIGNED_BYTE&&(C=e.R8),w===e.UNSIGNED_SHORT&&ee&&(C=ee.R16_EXT),w===e.SHORT&&ee&&(C=ee.R16_SNORM_EXT)),f===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.R8UI),w===e.UNSIGNED_SHORT&&(C=e.R16UI),w===e.UNSIGNED_INT&&(C=e.R32UI),w===e.BYTE&&(C=e.R8I),w===e.SHORT&&(C=e.R16I),w===e.INT&&(C=e.R32I)),f===e.RG&&(w===e.FLOAT&&(C=e.RG32F),w===e.HALF_FLOAT&&(C=e.RG16F),w===e.UNSIGNED_BYTE&&(C=e.RG8),w===e.UNSIGNED_SHORT&&ee&&(C=ee.RG16_EXT),w===e.SHORT&&ee&&(C=ee.RG16_SNORM_EXT)),f===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.RG8UI),w===e.UNSIGNED_SHORT&&(C=e.RG16UI),w===e.UNSIGNED_INT&&(C=e.RG32UI),w===e.BYTE&&(C=e.RG8I),w===e.SHORT&&(C=e.RG16I),w===e.INT&&(C=e.RG32I)),f===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.RGB8UI),w===e.UNSIGNED_SHORT&&(C=e.RGB16UI),w===e.UNSIGNED_INT&&(C=e.RGB32UI),w===e.BYTE&&(C=e.RGB8I),w===e.SHORT&&(C=e.RGB16I),w===e.INT&&(C=e.RGB32I)),f===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(C=e.RGBA16UI),w===e.UNSIGNED_INT&&(C=e.RGBA32UI),w===e.BYTE&&(C=e.RGBA8I),w===e.SHORT&&(C=e.RGBA16I),w===e.INT&&(C=e.RGBA32I)),f===e.RGB&&(w===e.UNSIGNED_SHORT&&ee&&(C=ee.RGB16_EXT),w===e.SHORT&&ee&&(C=ee.RGB16_SNORM_EXT),w===e.UNSIGNED_INT_5_9_9_9_REV&&(C=e.RGB9_E5),w===e.UNSIGNED_INT_10F_11F_11F_REV&&(C=e.R11F_G11F_B10F)),f===e.RGBA){let se=re?Ha:Ve.getTransfer(X);w===e.FLOAT&&(C=e.RGBA32F),w===e.HALF_FLOAT&&(C=e.RGBA16F),w===e.UNSIGNED_BYTE&&(C=se===Ke?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT&&ee&&(C=ee.RGBA16_EXT),w===e.SHORT&&ee&&(C=ee.RGBA16_SNORM_EXT),w===e.UNSIGNED_SHORT_4_4_4_4&&(C=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(C=e.RGB5_A1)}return(C===e.R16F||C===e.R32F||C===e.RG16F||C===e.RG32F||C===e.RGBA16F||C===e.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function b(x,f){let w;return x?f===null||f===ni||f===Xr?w=e.DEPTH24_STENCIL8:f===ii?w=e.DEPTH32F_STENCIL8:f===Wr&&(w=e.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===ni||f===Xr?w=e.DEPTH_COMPONENT24:f===ii?w=e.DEPTH_COMPONENT32F:f===Wr&&(w=e.DEPTH_COMPONENT16),w}function A(x,f){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==yt&&x.minFilter!==Et?Math.log2(Math.max(f.width,f.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?f.mipmaps.length:1}function R(x){let f=x.target;f.removeEventListener("dispose",R),y(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&g.delete(f)}function u(x){let f=x.target;f.removeEventListener("dispose",u),N(f)}function y(x){let f=r.get(x);if(f.__webglInit===void 0)return;let w=x.source,B=_.get(w);if(B){let X=B[f.__cacheKey];X.usedTimes--,X.usedTimes===0&&k(x),Object.keys(B).length===0&&_.delete(w)}r.remove(x)}function k(x){let f=r.get(x);e.deleteTexture(f.__webglTexture);let w=x.source,B=_.get(w);delete B[f.__cacheKey],s.memory.textures--}function N(x){let f=r.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),r.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(f.__webglFramebuffer[B]))for(let X=0;X<f.__webglFramebuffer[B].length;X++)e.deleteFramebuffer(f.__webglFramebuffer[B][X]);else e.deleteFramebuffer(f.__webglFramebuffer[B]);f.__webglDepthbuffer&&e.deleteRenderbuffer(f.__webglDepthbuffer[B])}else{if(Array.isArray(f.__webglFramebuffer))for(let B=0;B<f.__webglFramebuffer.length;B++)e.deleteFramebuffer(f.__webglFramebuffer[B]);else e.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&e.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&e.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let B=0;B<f.__webglColorRenderbuffer.length;B++)f.__webglColorRenderbuffer[B]&&e.deleteRenderbuffer(f.__webglColorRenderbuffer[B]);f.__webglDepthRenderbuffer&&e.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let w=x.textures;for(let B=0,X=w.length;B<X;B++){let re=r.get(w[B]);re.__webglTexture&&(e.deleteTexture(re.__webglTexture),s.memory.textures--),r.remove(w[B])}r.remove(x)}let I=0;function Z(){I=0}function U(){return I}function H(x){I=x}function J(){let x=I;return x>=a.maxTextures&&Le("WebGLTextures: Trying to use "+(x+1)+" texture units while this GPU supports only "+a.maxTextures),I+=1,x}function V(x){let f=[];return f.push(x.wrapS),f.push(x.wrapT),f.push(x.wrapR||0),f.push(x.magFilter),f.push(x.minFilter),f.push(x.anisotropy),f.push(x.internalFormat),f.push(x.format),f.push(x.type),f.push(x.generateMipmaps),f.push(x.premultiplyAlpha),f.push(x.flipY),f.push(x.unpackAlignment),f.push(x.colorSpace),f.join()}function ce(x,f){let w=r.get(x);if(x.isVideoTexture&&ve(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&w.__version!==x.version){let B=x.image;if(B===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(w,x,f);return}}else x.isExternalTexture&&(w.__webglTexture=x.sourceTexture?x.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+f)}function Y(x,f){let w=r.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&w.__version!==x.version){Ae(w,x,f);return}else x.isExternalTexture&&(w.__webglTexture=x.sourceTexture?x.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+f)}function K(x,f){let w=r.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&w.__version!==x.version){Ae(w,x,f);return}i.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+f)}function Q(x,f){let w=r.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&w.__version!==x.version){Pe(w,x,f);return}i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+f)}let Ne={[Vn]:e.REPEAT,[_i]:e.CLAMP_TO_EDGE,[kn]:e.MIRRORED_REPEAT},Te={[yt]:e.NEAREST,[Oh]:e.NEAREST_MIPMAP_NEAREST,[Qr]:e.NEAREST_MIPMAP_LINEAR,[Et]:e.LINEAR,[Qa]:e.LINEAR_MIPMAP_NEAREST,[Hi]:e.LINEAR_MIPMAP_LINEAR},qe={[Hh]:e.NEVER,[Xh]:e.ALWAYS,[Gh]:e.LESS,[Is]:e.LEQUAL,[Vh]:e.EQUAL,[Os]:e.GEQUAL,[kh]:e.GREATER,[Wh]:e.NOTEQUAL};function Oe(x,f){if(f.type===ii&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===Et||f.magFilter===Qa||f.magFilter===Qr||f.magFilter===Hi||f.minFilter===Et||f.minFilter===Qa||f.minFilter===Qr||f.minFilter===Hi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,Ne[f.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,Ne[f.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,Ne[f.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,Te[f.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,Te[f.minFilter]),f.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,qe[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===yt||f.minFilter!==Qr&&f.minFilter!==Hi||f.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||r.get(f).__currentAnisotropy){let w=t.get("EXT_texture_filter_anisotropic");e.texParameterf(x,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,a.getMaxAnisotropy())),r.get(f).__currentAnisotropy=f.anisotropy}}}function q(x,f){let w=!1;x.__webglInit===void 0&&(x.__webglInit=!0,f.addEventListener("dispose",R));let B=f.source,X=_.get(B);X===void 0&&(X={},_.set(B,X));let re=V(f);if(re!==x.__cacheKey){X[re]===void 0&&(X[re]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,w=!0),X[re].usedTimes++;let ee=X[x.__cacheKey];ee!==void 0&&(X[x.__cacheKey].usedTimes--,ee.usedTimes===0&&k(f)),x.__cacheKey=re,x.__webglTexture=X[re].texture}return w}function ne(x,f,w){return Math.floor(Math.floor(x/w)/f)}function oe(x,f,w,B){let X=x.updateRanges;if(X.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,f.width,f.height,w,B,f.data);else{X.sort((de,Se)=>de.start-Se.start);let re=0;for(let de=1;de<X.length;de++){let Se=X[re],ae=X[de],me=Se.start+Se.count,be=ne(ae.start,f.width,4),Ue=ne(Se.start,f.width,4);ae.start<=me+1&&be===Ue&&ne(ae.start+ae.count-1,f.width,4)===be?Se.count=Math.max(Se.count,ae.start+ae.count-Se.start):(++re,X[re]=ae)}X.length=re+1;let ee=i.getParameter(e.UNPACK_ROW_LENGTH),C=i.getParameter(e.UNPACK_SKIP_PIXELS),se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,f.width);for(let de=0,Se=X.length;de<Se;de++){let ae=X[de],me=Math.floor(ae.start/4),be=Math.ceil(ae.count/4),Ue=me%f.width,je=Math.floor(me/f.width),L=be;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(e.UNPACK_SKIP_ROWS,je),i.texSubImage2D(e.TEXTURE_2D,0,Ue,je,L,1,w,B,f.data)}x.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ee),i.pixelStorei(e.UNPACK_SKIP_PIXELS,C),i.pixelStorei(e.UNPACK_SKIP_ROWS,se)}}function Ae(x,f,w){let B=e.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(B=e.TEXTURE_2D_ARRAY),f.isData3DTexture&&(B=e.TEXTURE_3D);let X=q(x,f),re=f.source;i.bindTexture(B,x.__webglTexture,e.TEXTURE0+w);let ee=r.get(re);if(re.version!==ee.__version||X===!0){if(i.activeTexture(e.TEXTURE0+w),!(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)){let j=Ve.getPrimaries(Ve.workingColorSpace),$=f.colorSpace===Ci?null:Ve.getPrimaries(f.colorSpace),pe=f.colorSpace===Ci||j===$?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}i.pixelStorei(e.UNPACK_ALIGNMENT,f.unpackAlignment);let C=v(f.image,!1,a.maxTextureSize);C=te(f,C);let se=n.convert(f.format,f.colorSpace),de=n.convert(f.type),Se=m(f.internalFormat,se,de,f.normalized,f.colorSpace,f.isVideoTexture);Oe(B,f);let ae,me=f.mipmaps,be=f.isVideoTexture!==!0,Ue=ee.__version===void 0||X===!0,je=re.dataReady,L=A(f,C);if(f.isDepthTexture)Se=b(f.format===Gi,f.type),Ue&&(be?i.texStorage2D(e.TEXTURE_2D,1,Se,C.width,C.height):i.texImage2D(e.TEXTURE_2D,0,Se,C.width,C.height,0,se,de,null));else if(f.isDataTexture)if(me.length>0){be&&Ue&&i.texStorage2D(e.TEXTURE_2D,L,Se,me[0].width,me[0].height);for(let j=0,$=me.length;j<$;j++)ae=me[j],be?je&&i.texSubImage2D(e.TEXTURE_2D,j,0,0,ae.width,ae.height,se,de,ae.data):i.texImage2D(e.TEXTURE_2D,j,Se,ae.width,ae.height,0,se,de,ae.data);f.generateMipmaps=!1}else be?(Ue&&i.texStorage2D(e.TEXTURE_2D,L,Se,C.width,C.height),je&&oe(f,C,se,de)):i.texImage2D(e.TEXTURE_2D,0,Se,C.width,C.height,0,se,de,C.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){be&&Ue&&i.texStorage3D(e.TEXTURE_2D_ARRAY,L,Se,me[0].width,me[0].height,C.depth);for(let j=0,$=me.length;j<$;j++)if(ae=me[j],f.format!==qt)if(se!==null)if(be){if(je)if(f.layerUpdates.size>0){let pe=Ho(ae.width,ae.height,f.format,f.type);for(let xe of f.layerUpdates){let ie=ae.data.subarray(xe*pe/ae.data.BYTES_PER_ELEMENT,(xe+1)*pe/ae.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,xe,ae.width,ae.height,1,se,ie)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ae.width,ae.height,C.depth,se,ae.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,Se,ae.width,ae.height,C.depth,0,ae.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?je&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ae.width,ae.height,C.depth,se,de,ae.data):i.texImage3D(e.TEXTURE_2D_ARRAY,j,Se,ae.width,ae.height,C.depth,0,se,de,ae.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{be&&Ue&&i.texStorage2D(e.TEXTURE_2D,L,Se,me[0].width,me[0].height);for(let j=0,$=me.length;j<$;j++)ae=me[j],f.format!==qt?se!==null?be?je&&i.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ae.width,ae.height,se,ae.data):i.compressedTexImage2D(e.TEXTURE_2D,j,Se,ae.width,ae.height,0,ae.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?je&&i.texSubImage2D(e.TEXTURE_2D,j,0,0,ae.width,ae.height,se,de,ae.data):i.texImage2D(e.TEXTURE_2D,j,Se,ae.width,ae.height,0,se,de,ae.data)}else if(f.isDataArrayTexture)if(be){if(Ue&&i.texStorage3D(e.TEXTURE_2D_ARRAY,L,Se,C.width,C.height,C.depth),je)if(f.layerUpdates.size>0){let j=Ho(C.width,C.height,f.format,f.type);for(let $ of f.layerUpdates){let pe=C.data.subarray($*j/C.data.BYTES_PER_ELEMENT,($+1)*j/C.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,C.width,C.height,1,se,de,pe)}f.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,se,de,C.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,C.width,C.height,C.depth,0,se,de,C.data);else if(f.isData3DTexture)be?(Ue&&i.texStorage3D(e.TEXTURE_3D,L,Se,C.width,C.height,C.depth),je&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,se,de,C.data)):i.texImage3D(e.TEXTURE_3D,0,Se,C.width,C.height,C.depth,0,se,de,C.data);else if(f.isFramebufferTexture){if(Ue)if(be)i.texStorage2D(e.TEXTURE_2D,L,Se,C.width,C.height);else{let j=C.width,$=C.height;for(let pe=0;pe<L;pe++)i.texImage2D(e.TEXTURE_2D,pe,Se,j,$,0,se,de,null),j>>=1,$>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),C.parentNode!==j){j.appendChild(C),g.add(f),j.onpaint=$=>{let pe=$.changedElements;for(let xe of g)pe.includes(xe.image)&&(xe.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,C);else{let $=e.RGBA,pe=e.RGBA,xe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,$,pe,xe,C)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(me.length>0){if(be&&Ue){let j=le(me[0]);i.texStorage2D(e.TEXTURE_2D,L,Se,j.width,j.height)}for(let j=0,$=me.length;j<$;j++)ae=me[j],be?je&&i.texSubImage2D(e.TEXTURE_2D,j,0,0,se,de,ae):i.texImage2D(e.TEXTURE_2D,j,Se,se,de,ae);f.generateMipmaps=!1}else if(be){if(Ue){let j=le(C);i.texStorage2D(e.TEXTURE_2D,L,Se,j.width,j.height)}je&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,se,de,C)}else i.texImage2D(e.TEXTURE_2D,0,Se,se,de,C);p(f)&&P(B),ee.__version=re.version,f.onUpdate&&f.onUpdate(f)}x.__version=f.version}function Pe(x,f,w){if(f.image.length!==6)return;let B=q(x,f),X=f.source;i.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+w);let re=r.get(X);if(X.version!==re.__version||B===!0){i.activeTexture(e.TEXTURE0+w);let ee=Ve.getPrimaries(Ve.workingColorSpace),C=f.colorSpace===Ci?null:Ve.getPrimaries(f.colorSpace),se=f.colorSpace===Ci||ee===C?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let de=f.isCompressedTexture||f.image[0].isCompressedTexture,Se=f.image[0]&&f.image[0].isDataTexture,ae=[];for(let ie=0;ie<6;ie++)!de&&!Se?ae[ie]=v(f.image[ie],!0,a.maxCubemapSize):ae[ie]=Se?f.image[ie].image:f.image[ie],ae[ie]=te(f,ae[ie]);let me=ae[0],be=n.convert(f.format,f.colorSpace),Ue=n.convert(f.type),je=m(f.internalFormat,be,Ue,f.normalized,f.colorSpace),L=f.isVideoTexture!==!0,j=re.__version===void 0||B===!0,$=X.dataReady,pe=A(f,me);Oe(e.TEXTURE_CUBE_MAP,f);let xe;if(de){L&&j&&i.texStorage2D(e.TEXTURE_CUBE_MAP,pe,je,me.width,me.height);for(let ie=0;ie<6;ie++){xe=ae[ie].mipmaps;for(let ue=0;ue<xe.length;ue++){let Re=xe[ue];f.format!==qt?be!==null?L?$&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue,0,0,Re.width,Re.height,be,Re.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue,je,Re.width,Re.height,0,Re.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue,0,0,Re.width,Re.height,be,Ue,Re.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue,je,Re.width,Re.height,0,be,Ue,Re.data)}}}else{if(xe=f.mipmaps,L&&j){xe.length>0&&pe++;let ie=le(ae[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,pe,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Se){L?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ae[ie].width,ae[ie].height,be,Ue,ae[ie].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,ae[ie].width,ae[ie].height,0,be,Ue,ae[ie].data);for(let ue=0;ue<xe.length;ue++){let Re=xe[ue].image[ie].image;L?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue+1,0,0,Re.width,Re.height,be,Ue,Re.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue+1,je,Re.width,Re.height,0,be,Ue,Re.data)}}else{L?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,Ue,ae[ie]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,be,Ue,ae[ie]);for(let ue=0;ue<xe.length;ue++){let Re=xe[ue];L?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue+1,0,0,be,Ue,Re.image[ie]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue+1,je,be,Ue,Re.image[ie])}}}p(f)&&P(e.TEXTURE_CUBE_MAP),re.__version=X.version,f.onUpdate&&f.onUpdate(f)}x.__version=f.version}function ge(x,f,w,B,X,re){let ee=n.convert(w.format,w.colorSpace),C=n.convert(w.type),se=m(w.internalFormat,ee,C,w.normalized,w.colorSpace),de=r.get(f),Se=r.get(w);if(Se.__renderTarget=f,!de.__hasExternalTextures){let ae=Math.max(1,f.width>>re),me=Math.max(1,f.height>>re);X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY?i.texImage3D(X,re,se,ae,me,f.depth,0,ee,C,null):i.texImage2D(X,re,se,ae,me,0,ee,C,null)}i.bindFramebuffer(e.FRAMEBUFFER,x),S(f)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,B,X,Se.__webglTexture,0,lt(f)):(X===e.TEXTURE_2D||X>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,B,X,Se.__webglTexture,re),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ye(x,f,w){if(e.bindRenderbuffer(e.RENDERBUFFER,x),f.depthBuffer){let B=f.depthTexture,X=B&&B.isDepthTexture?B.type:null,re=b(f.stencilBuffer,X),ee=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;S(f)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt(f),re,f.width,f.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt(f),re,f.width,f.height):e.renderbufferStorage(e.RENDERBUFFER,re,f.width,f.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,x)}else{let B=f.textures;for(let X=0;X<B.length;X++){let re=B[X],ee=n.convert(re.format,re.colorSpace),C=n.convert(re.type),se=m(re.internalFormat,ee,C,re.normalized,re.colorSpace);S(f)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt(f),se,f.width,f.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt(f),se,f.width,f.height):e.renderbufferStorage(e.RENDERBUFFER,se,f.width,f.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ke(x,f,w){let B=f.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,x),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=r.get(f.depthTexture);if(X.__renderTarget=f,(!X.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),B){if(X.__webglInit===void 0&&(X.__webglInit=!0,f.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,f.depthTexture);let de=n.convert(f.depthTexture.format),Se=n.convert(f.depthTexture.type),ae;f.depthTexture.format===Mi?ae=e.DEPTH_COMPONENT24:f.depthTexture.format===Gi&&(ae=e.DEPTH24_STENCIL8);for(let me=0;me<6;me++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,f.width,f.height,0,de,Se,null)}}else ce(f.depthTexture,0);let re=X.__webglTexture,ee=lt(f),C=B?e.TEXTURE_CUBE_MAP_POSITIVE_X+w:e.TEXTURE_2D,se=f.depthTexture.format===Gi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(f.depthTexture.format===Mi)S(f)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,C,re,0,ee):e.framebufferTexture2D(e.FRAMEBUFFER,se,C,re,0);else if(f.depthTexture.format===Gi)S(f)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,C,re,0,ee):e.framebufferTexture2D(e.FRAMEBUFFER,se,C,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(x){let f=r.get(x),w=x.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==x.depthTexture){let B=x.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),B){let X=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,B.removeEventListener("dispose",X)};B.addEventListener("dispose",X),f.__depthDisposeCallback=X}f.__boundDepthTexture=B}if(x.depthTexture&&!f.__autoAllocateDepthBuffer)if(w)for(let B=0;B<6;B++)ke(f.__webglFramebuffer[B],x,B);else{let B=x.texture.mipmaps;B&&B.length>0?ke(f.__webglFramebuffer[0],x,0):ke(f.__webglFramebuffer,x,0)}else if(w){f.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(i.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer[B]),f.__webglDepthbuffer[B]===void 0)f.__webglDepthbuffer[B]=e.createRenderbuffer(),Ye(f.__webglDepthbuffer[B],x,!1);else{let X=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=f.__webglDepthbuffer[B];e.bindRenderbuffer(e.RENDERBUFFER,re),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,re)}}else{let B=x.texture.mipmaps;if(B&&B.length>0?i.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=e.createRenderbuffer(),Ye(f.__webglDepthbuffer,x,!1);else{let X=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=f.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,re),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,re)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(x,f,w){let B=r.get(x);f!==void 0&&ge(B.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&Ie(x)}function ut(x){let f=x.texture,w=r.get(x),B=r.get(f);x.addEventListener("dispose",u);let X=x.textures,re=x.isWebGLCubeRenderTarget===!0,ee=X.length>1;if(ee||(B.__webglTexture===void 0&&(B.__webglTexture=e.createTexture()),B.__version=f.version,s.memory.textures++),re){w.__webglFramebuffer=[];for(let C=0;C<6;C++)if(f.mipmaps&&f.mipmaps.length>0){w.__webglFramebuffer[C]=[];for(let se=0;se<f.mipmaps.length;se++)w.__webglFramebuffer[C][se]=e.createFramebuffer()}else w.__webglFramebuffer[C]=e.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){w.__webglFramebuffer=[];for(let C=0;C<f.mipmaps.length;C++)w.__webglFramebuffer[C]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(ee)for(let C=0,se=X.length;C<se;C++){let de=r.get(X[C]);de.__webglTexture===void 0&&(de.__webglTexture=e.createTexture(),s.memory.textures++)}if(x.samples>0&&S(x)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let C=0;C<X.length;C++){let se=X[C];w.__webglColorRenderbuffer[C]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[C]);let de=n.convert(se.format,se.colorSpace),Se=n.convert(se.type),ae=m(se.internalFormat,de,Se,se.normalized,se.colorSpace,x.isXRRenderTarget===!0),me=lt(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,me,ae,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,w.__webglColorRenderbuffer[C])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),Ye(w.__webglDepthRenderbuffer,x,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(re){i.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,f);for(let C=0;C<6;C++)if(f.mipmaps&&f.mipmaps.length>0)for(let se=0;se<f.mipmaps.length;se++)ge(w.__webglFramebuffer[C][se],x,f,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,se);else ge(w.__webglFramebuffer[C],x,f,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);p(f)&&P(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){for(let C=0,se=X.length;C<se;C++){let de=X[C],Se=r.get(de),ae=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ae,Se.__webglTexture),Oe(ae,de),ge(w.__webglFramebuffer,x,de,e.COLOR_ATTACHMENT0+C,ae,0),p(de)&&P(ae)}i.unbindTexture()}else{let C=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(C=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(C,B.__webglTexture),Oe(C,f),f.mipmaps&&f.mipmaps.length>0)for(let se=0;se<f.mipmaps.length;se++)ge(w.__webglFramebuffer[se],x,f,e.COLOR_ATTACHMENT0,C,se);else ge(w.__webglFramebuffer,x,f,e.COLOR_ATTACHMENT0,C,0);p(f)&&P(C),i.unbindTexture()}x.depthBuffer&&Ie(x)}function At(x){let f=x.textures;for(let w=0,B=f.length;w<B;w++){let X=f[w];if(p(X)){let re=O(x),ee=r.get(X).__webglTexture;i.bindTexture(re,ee),P(re),i.unbindTexture()}}}let it=[],St=[];function ht(x){if(x.samples>0){if(S(x)===!1){let f=x.textures,w=x.width,B=x.height,X=e.COLOR_BUFFER_BIT,re=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=r.get(x),C=f.length>1;if(C)for(let de=0;de<f.length;de++)i.bindFramebuffer(e.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);let se=x.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let de=0;de<f.length;de++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(X|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(X|=e.STENCIL_BUFFER_BIT)),C){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ee.__webglColorRenderbuffer[de]);let Se=r.get(f[de]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Se,0)}e.blitFramebuffer(0,0,w,B,0,0,w,B,X,e.NEAREST),h===!0&&(it.length=0,St.length=0,it.push(e.COLOR_ATTACHMENT0+de),x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&(it.push(re),St.push(re),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,St)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),C)for(let de=0;de<f.length;de++){i.bindFramebuffer(e.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,ee.__webglColorRenderbuffer[de]);let Se=r.get(f[de]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,Se,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&h){let f=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[f])}}}function lt(x){return Math.min(a.maxSamples,x.samples)}function S(x){let f=r.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function ve(x){let f=s.render.frame;d.get(x)!==f&&(d.set(x,f),x.update())}function te(x,f){let w=x.colorSpace,B=x.format,X=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||w!==za&&w!==Ci&&(Ve.getTransfer(w)===Ke?(B!==qt||X!==Ft)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",w)),f}function le(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.getTextureUnits=U,this.setTextureUnits=H,this.setTexture2D=ce,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=ot,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=S,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Um(e,t){function i(r,a=Ci){let n,s=Ve.getTransfer(a);if(r===Ft)return e.UNSIGNED_BYTE;if(r===Ps)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ds)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Tl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===bl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===yl)return e.BYTE;if(r===El)return e.SHORT;if(r===Wr)return e.UNSIGNED_SHORT;if(r===Cs)return e.INT;if(r===ni)return e.UNSIGNED_INT;if(r===ii)return e.FLOAT;if(r===si)return e.HALF_FLOAT;if(r===wl)return e.ALPHA;if(r===Al)return e.RGB;if(r===qt)return e.RGBA;if(r===Mi)return e.DEPTH_COMPONENT;if(r===Gi)return e.DEPTH_STENCIL;if(r===Rl)return e.RED;if(r===Ls)return e.RED_INTEGER;if(r===Xi)return e.RG;if(r===Us)return e.RG_INTEGER;if(r===Ns)return e.RGBA_INTEGER;if(r===Ca||r===Pa||r===Da||r===La)if(s===Ke)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Ca)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===La)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Ca)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Da)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===La)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wn||r===Xn||r===jn||r===Yn)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Wn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qn||r===Zn||r===Kn||r===Jn||r===$n||r===Fa||r===Qn)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===qn||r===Zn)return s===Ke?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Kn)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Jn)return n.COMPRESSED_R11_EAC;if(r===$n)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Fa)return n.COMPRESSED_RG11_EAC;if(r===Qn)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===es||r===ts||r===is||r===rs||r===as||r===ns||r===ss||r===os||r===ls||r===hs||r===cs||r===us||r===ds||r===ps)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===es)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ts)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===is)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rs)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===as)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ns)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ss)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===os)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ls)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hs)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cs)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===us)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ds)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ps)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fs||r===ms||r===gs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===fs)return s===Ke?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ms)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_s||r===vs||r===Ba||r===xs)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===_s)return n.COMPRESSED_RED_RGTC1_EXT;if(r===vs)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ba)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
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

}`,Om=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new oi({vertexShader:Nm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fm=class extends Li{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,h=null,l=null,d=null,g=null,c=null,_=null,E=typeof XRWebGLBinding<"u",T=new Om,v={},p=t.getContextAttributes(),P=null,O=null,m=[],b=[],A=new Ce,R=null,u=null,y=new Vt;y.viewport=new pt;let k=new Vt;k.viewport=new pt;let N=[y,k],I=new Hc,Z=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=m[q];return ne===void 0&&(ne=new ln,m[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=m[q];return ne===void 0&&(ne=new ln,m[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=m[q];return ne===void 0&&(ne=new ln,m[q]=ne),ne.getHandSpace()};function H(q){let ne=b.indexOf(q.inputSource);if(ne===-1)return;let oe=m[ne];oe!==void 0&&(oe.update(q.inputSource,q.frame,h||n),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",V);for(let q=0;q<m.length;q++){let ne=b[q];ne!==null&&(b[q]=null,m[q].disconnect(ne))}Z=null,U=null,T.reset();for(let q in v)delete v[q];if(e.setRenderTarget(P),c=null,g=null,d=null,r=null,O=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),u!==null){let q=u.camera;q.fov=u.fov,q.zoom=u.zoom,q.updateProjectionMatrix(),u=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||n},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return g!==null?g:c},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,oe=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?Gi:Mi,oe=p.stencil?Xr:ni);let Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};d=this.getBinding(),g=d.createProjectionLayer(Pe),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),O=new Zt(g.textureWidth,g.textureHeight,{format:qt,type:Ft,depthTexture:new Yr(g.textureWidth,g.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),O=new Zt(c.framebufferWidth,c.framebufferHeight,{format:qt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(o),h=null,n=await r.requestReferenceSpace(s),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function V(q){for(let ne=0;ne<q.removed.length;ne++){let oe=q.removed[ne],Ae=b.indexOf(oe);Ae>=0&&(b[Ae]=null,m[Ae].disconnect(oe))}for(let ne=0;ne<q.added.length;ne++){let oe=q.added[ne],Ae=b.indexOf(oe);if(Ae===-1){for(let ge=0;ge<m.length;ge++)if(ge>=b.length){b.push(oe),Ae=ge;break}else if(b[ge]===null){b[ge]=oe,Ae=ge;break}if(Ae===-1)break}let Pe=m[Ae];Pe&&Pe.connect(oe)}}let ce=new F,Y=new F;function K(q,ne,oe){ce.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);let Ae=ce.distanceTo(Y),Pe=ne.projectionMatrix.elements,ge=oe.projectionMatrix.elements,Ye=Pe[14]/(Pe[10]-1),ke=Pe[14]/(Pe[10]+1),Ie=(Pe[9]+1)/Pe[5],ot=(Pe[9]-1)/Pe[5],ut=(Pe[8]-1)/Pe[0],At=(ge[8]+1)/ge[0],it=Ye*ut,St=Ye*At,ht=Ae/(-ut+At),lt=ht*-ut;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(lt),q.translateZ(ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let S=Ye+ht,ve=ke+ht,te=it-lt,le=St+(Ae-lt),x=Ie*ke/ve*S,f=ot*ke/ve*S;q.projectionMatrix.makePerspective(te,le,x,f,S,ve),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,oe=q.far;T.texture!==null&&(T.depthNear>0&&(ne=T.depthNear),T.depthFar>0&&(oe=T.depthFar)),I.near=k.near=y.near=ne,I.far=k.far=y.far=oe,(Z!==I.near||U!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),Z=I.near,U=I.far),I.layers.mask=q.layers.mask|6,y.layers.mask=I.layers.mask&-5,k.layers.mask=I.layers.mask&-3;let Ae=q.parent,Pe=I.cameras;Q(I,Ae);for(let ge=0;ge<Pe.length;ge++)Q(Pe[ge],Ae);Pe.length===2?K(I,y,k):I.projectionMatrix.copy(y.projectionMatrix),u===null&&q.isPerspectiveCamera&&(u={camera:q,fov:q.fov,zoom:q.zoom}),Ne(q,I,Ae)};function Ne(q,ne,oe){oe===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(g===null&&c===null))return o},this.setFoveation=function(q){o=q,g!==null&&(g.fixedFoveation=q),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(I)},this.getCameraTexture=function(q){return v[q]};let Te=null;function qe(q,ne){if(l=ne.getViewerPose(h||n),_=ne,l!==null){let oe=l.views;c!==null&&(e.setRenderTargetFramebuffer(O,c.framebuffer),e.setRenderTarget(O));let Ae=!1;oe.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let ge=0;ge<oe.length;ge++){let Ye=oe[ge],ke=null;if(c!==null)ke=c.getViewport(Ye);else{let ot=d.getViewSubImage(g,Ye);ke=ot.viewport,ge===0&&(e.setRenderTargetTextures(O,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(O))}let Ie=N[ge];Ie===void 0&&(Ie=new Vt,Ie.layers.enable(ge),Ie.viewport=new pt,N[ge]=Ie),Ie.matrix.fromArray(Ye.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ye.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ke.x,ke.y,ke.width,ke.height),ge===0&&(I.matrix.copy(Ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(Ie)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();let ge=d.getDepthInformation(oe[0]);ge&&ge.isValid&&ge.texture&&T.init(ge,r.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let ge=0;ge<oe.length;ge++){let Ye=oe[ge].camera;if(Ye){let ke=v[Ye];ke||(ke=new kl,v[Ye]=ke);let Ie=d.getCameraImage(Ye);ke.sourceTexture=Ie}}}}for(let oe=0;oe<m.length;oe++){let Ae=b[oe],Pe=m[oe];Ae!==null&&Pe!==void 0&&Pe.update(Ae,ne,h||n)}Te&&Te(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}let Oe=new $l;Oe.setAnimationLoop(qe),this.setAnimationLoop=function(q){Te=q},this.dispose=function(){}}},Bm=new st,nh=new Be;nh.set(-1,0,0,0,1,0,0,0,1);function zm(e,t){function i(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function r(v,p){p.color.getRGB(v.fogColor.value,ql(e)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function a(v,p,P,O,m){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(v,p):p.isMeshLambertMaterial?(n(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(v,p),g(v,p)):p.isMeshPhongMaterial?(n(v,p),d(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(v,p),c(v,p),p.isMeshPhysicalMaterial&&_(v,p,m)):p.isMeshMatcapMaterial?(n(v,p),E(v,p)):p.isMeshDepthMaterial?n(v,p):p.isMeshDistanceMaterial?(n(v,p),T(v,p)):p.isMeshNormalMaterial?n(v,p):p.isLineBasicMaterial?(s(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?h(v,p,P,O):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,i(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,i(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,i(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Nt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,i(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Nt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,i(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,i(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let P=t.get(p),O=P.envMap,m=P.envMapRotation;O&&(v.envMap.value=O,v.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(m)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(nh),v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,v.aoMapTransform))}function s(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,i(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function h(v,p,P,O){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*P,v.scale.value=O*.5,p.map&&(v.map.value=p.map,i(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,i(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,i(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,i(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function d(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function g(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function c(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function _(v,p,P){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.retroreflectivity>0&&(v.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,p){p.matcap&&(v.matcap.value=p.matcap)}function T(v,p){let P=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Hm(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(m,b){let A=b.program;r.uniformBlockBinding(m,A)}function l(m,b){let A=a[m.id];A===void 0&&(v(m),A=d(m),a[m.id]=A,m.addEventListener("dispose",P));let R=b.program;r.updateUBOMapping(m,R);let u=t.render.frame;n[m.id]!==u&&(c(m),n[m.id]=u)}function d(m){let b=g();m.__bindingPointIndex=b;let A=e.createBuffer(),R=m.__size,u=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,u),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,A),A}function g(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(m){let b=a[m.id],A=m.uniforms,R=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let u=0,y=A.length;u<y;u++){let k=A[u];if(Array.isArray(k))for(let N=0,I=k.length;N<I;N++)_(k[N],u,N,R);else _(k,u,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(m,b,A,R){if(T(m,b,A,R)===!0){let u=m.__offset,y=m.value;if(Array.isArray(y)){let k=0;for(let N=0;N<y.length;N++){let I=y[N],Z=p(I);E(I,m.__data,k),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(y,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,u,m.__data)}}function E(m,b,A){typeof m=="number"||typeof m=="boolean"?b[0]=m:m.isMatrix3?(b[0]=m.elements[0],b[1]=m.elements[1],b[2]=m.elements[2],b[3]=0,b[4]=m.elements[3],b[5]=m.elements[4],b[6]=m.elements[5],b[7]=0,b[8]=m.elements[6],b[9]=m.elements[7],b[10]=m.elements[8],b[11]=0):ArrayBuffer.isView(m)?b.set(new m.constructor(m.buffer,m.byteOffset,b.length)):m.toArray(b,A)}function T(m,b,A,R){let u=m.value,y=b+"_"+A;if(R[y]===void 0)return typeof u=="number"||typeof u=="boolean"?R[y]=u:ArrayBuffer.isView(u)?R[y]=u.slice():R[y]=u.clone(),!0;{let k=R[y];if(typeof u=="number"||typeof u=="boolean"){if(k!==u)return R[y]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(k.equals(u)===!1)return k.copy(u),!0}}return!1}function v(m){let b=m.uniforms,A=0,R=16;for(let y=0,k=b.length;y<k;y++){let N=Array.isArray(b[y])?b[y]:[b[y]];for(let I=0,Z=N.length;I<Z;I++){let U=N[I],H=Array.isArray(U.value)?U.value:[U.value];for(let J=0,V=H.length;J<V;J++){let ce=H[J],Y=p(ce),K=A%R,Q=K%Y.boundary,Ne=K+Q;A+=Q,Ne!==0&&R-Ne<Y.storage&&(A+=R-Ne),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=Y.storage}}}let u=A%R;return u>0&&(A+=R-u),m.__size=A,m.__cache={},this}function p(m){let b={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(b.boundary=4,b.storage=4):m.isVector2?(b.boundary=8,b.storage=8):m.isVector3||m.isColor?(b.boundary=16,b.storage=12):m.isVector4?(b.boundary=16,b.storage=16):m.isMatrix3?(b.boundary=48,b.storage=48):m.isMatrix4?(b.boundary=64,b.storage=64):m.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(b.boundary=16,b.storage=m.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",m),b}function P(m){let b=m.target;b.removeEventListener("dispose",P);let A=s.indexOf(b.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function O(){for(let m in a)e.deleteBuffer(a[m]);s=[],a={},n={}}return{bind:h,update:l,dispose:O}}var Gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qt=null;function Vm(){return Qt===null&&(Qt=new Sc(Gm,16,16,Xi,si),Qt.name="DFG_LUT",Qt.minFilter=Et,Qt.magFilter=Et,Qt.wrapS=_i,Qt.wrapT=_i,Qt.generateMipmaps=!1,Qt.needsUpdate=!0),Qt}var km=class{constructor(e={}){let{canvas:t=Yh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:g=!1,outputBufferType:c=Ft}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=n;let E=c,T=new Set([Ns,Us,Ls]),v=new Set([Ft,ni,Wr,Xr,Ps,Ds]),p=new Uint32Array(4),P=new Int32Array(4),O=new F,m=null,b=null,A=[],R=[],u=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,k=!1,N=null,I=null,Z=null,U=null;this._outputColorSpace=Gt;let H=0,J=0,V=null,ce=-1,Y=null,K=new pt,Q=new pt,Ne=null,Te=new Fe(0),qe=0,Oe=t.width,q=t.height,ne=1,oe=null,Ae=null,Pe=new pt(0,0,Oe,q),ge=new pt(0,0,Oe,q),Ye=!1,ke=new Hs,Ie=!1,ot=!1,ut=new st,At=new F,it=new pt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function lt(){return V===null?ne:1}let S=i;function ve(M,D){return t.getContext(M,D)}let te,le,x,f,w,B,X,re,ee,C,se,de,Se,ae,me,be,Ue,je,L,j,$,pe,xe;try{let M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),S===null){let D="webgl2";if(S=ve(D,M),S===null)throw ve(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(M){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),Xe("WebGLRenderer: "+M.message),M}function ie(){te=new Gp(S),te.init(),$=new Um(S,te),le=new Dp(S,te,e,$),x=new Dm(S,te),le.reversedDepthBuffer&&g&&x.buffers.depth.setReversed(!0),I=S.createFramebuffer(),Z=S.createFramebuffer(),U=S.createFramebuffer(),f=new Wp(S),w=new _m,B=new Lm(S,te,x,w,le,$,f),X=new Hp(y),re=new jc(S),pe=new Cp(S,re),ee=new Vp(S,re,f,pe),C=new jp(S,ee,re,pe,f),je=new Xp(S,le,B),me=new Lp(w),se=new gm(y,X,te,le,pe,me),de=new zm(y,w),Se=new xm,ae=new bm(te),Ue=new Rp(y,X,x,C,_,o),be=new Pm(y,C,le),xe=new Hm(S,f,le,x),L=new Pp(S,te,f),j=new kp(S,te,f),f.programs=se.programs,y.capabilities=le,y.extensions=te,y.properties=w,y.renderLists=Se,y.shadowMap=be,y.state=x,y.info=f}E!==Ft&&(u=new qp(E,t.width,t.height,s,r,a));let ue=new Fm(y,S);this.xr=ue,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(Oe,q,!1))},this.getSize=function(M){return M.set(Oe,q)},this.setSize=function(M,D,W=!0){if(ue.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=M,q=D,t.width=Math.floor(M*ne),t.height=Math.floor(D*ne),W===!0&&(t.style.width=M+"px",t.style.height=D+"px"),u!==null&&u.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Oe*ne,q*ne).floor()},this.setDrawingBufferSize=function(M,D,W){Oe=M,q=D,ne=W,t.width=Math.floor(M*W),t.height=Math.floor(D*W),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(E===Ft){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}u.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,D,W,G){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,D,W,G),x.viewport(K.copy(Pe).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,D,W,G){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,D,W,G),x.scissor(Q.copy(ge).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){x.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,W=!0){let G=0;if(M){let z=!1;if(V!==null){let he=V.texture.format;z=T.has(he)}if(z){let he=V.texture.type,_e=v.has(he),Me=Ue.getClearColor(),ye=Ue.getClearAlpha(),De=Me.r,Ge=Me.g,We=Me.b;_e?(p[0]=De,p[1]=Ge,p[2]=We,p[3]=ye,S.clearBufferuiv(S.COLOR,0,p)):(P[0]=De,P[1]=Ge,P[2]=We,P[3]=ye,S.clearBufferiv(S.COLOR,0,P))}else G|=S.COLOR_BUFFER_BIT}D&&(G|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&S.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),Ue.dispose(),Se.dispose(),ae.dispose(),w.dispose(),X.dispose(),C.dispose(),pe.dispose(),xe.dispose(),se.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",js),ue.removeEventListener("sessionend",Ys),Ui.stop()};function Re(M){M.preventDefault(),Va("WebGLRenderer: Context Lost."),k=!0}function rt(){Va("WebGLRenderer: Context Restored."),k=!1;let M=f.autoReset,D=be.enabled,W=be.autoUpdate,G=be.needsUpdate,z=be.type;ie(),f.autoReset=M,be.enabled=D,be.autoUpdate=W,be.needsUpdate=G,be.type=z}function Ze(M){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Kt(M){let D=M.target;D.removeEventListener("dispose",Kt),li(D)}function li(M){oh(M),w.remove(M)}function oh(M){let D=w.get(M).programs;D!==void 0&&(D.forEach(function(W){se.releaseProgram(W)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,W,G,z,he){D===null&&(D=St);let _e=z.isMesh&&z.matrixWorld.determinantAffine()<0,Me=ch(M,D,W,G,z);x.setMaterial(G,_e);let ye=W.index,De=1;if(G.wireframe===!0){if(ye=ee.getWireframeAttribute(W),ye===void 0)return;De=2}let Ge=W.drawRange,We=W.attributes.position,we=Ge.start*De,$e=(Ge.start+Ge.count)*De;he!==null&&(we=Math.max(we,he.start*De),$e=Math.min($e,(he.start+he.count)*De)),ye!==null?(we=Math.max(we,0),$e=Math.min($e,ye.count)):We!=null&&(we=Math.max(we,0),$e=Math.min($e,We.count));let ft=$e-we;if(ft<0||ft===1/0)return;pe.setup(z,G,Me,W,ye);let at,nt=L;if(ye!==null&&(at=re.get(ye),nt=j,nt.setIndex(at)),z.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*lt()),nt.setMode(S.LINES)):nt.setMode(S.TRIANGLES);else if(z.isLine){let ct=G.linewidth;ct===void 0&&(ct=1),x.setLineWidth(ct*lt()),z.isLineSegments?nt.setMode(S.LINES):z.isLineLoop?nt.setMode(S.LINE_LOOP):nt.setMode(S.LINE_STRIP)}else z.isPoints?nt.setMode(S.POINTS):z.isSprite&&nt.setMode(S.TRIANGLES);if(z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ct=z._multiDrawStarts,Ee=z._multiDrawCounts,Rt=z._multiDrawCount,Ni=ye?re.get(ye).bytesPerElement:1,zt=w.get(G).currentProgram.getUniforms();for(let Jt=0;Jt<Rt;Jt++)zt.setValue(S,"_gl_DrawID",Jt),nt.render(ct[Jt]/Ni,Ee[Jt])}else if(z.isInstancedMesh)nt.renderInstances(we,ft,z.count);else if(W.isInstancedBufferGeometry){let ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,ct);nt.renderInstances(we,ft,Ee)}else nt.render(we,ft)};function Xs(M,D,W,G){N!==null&&M.isNodeMaterial&&N.setObject(G,M),Ie===!0&&me.setState(M,W,!1),M.transparent===!0&&M.side===mi&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,$r(M,D,G),M.side=ki,M.needsUpdate=!0,$r(M,D,G),M.side=mi):$r(M,D,G)}this.compile=function(M,D,W=null){W===null&&(W=M),N!==null&&N.renderStart(M,D,W),b=ae.get(W),b.init(D),R.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),M!==W&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ot=this.localClippingEnabled,Ie=me.init(this.clippingPlanes,ot),Ie===!0&&me.setGlobalState(this.clippingPlanes,D),N!==null&&be.render(b.state.shadowsArray,W,D);let G=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let he=z.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let Me=he[_e];Xs(Me,W,D,z),G.add(Me)}else Xs(he,W,D,z),G.add(he)}),b=R.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(M,D,W=null){let G=this.compile(M,D,W);return new Promise(z=>{function he(){if(G.forEach(function(_e){let Me=w.get(_e).currentProgram;(Me===void 0||Me.isReady())&&G.delete(_e)}),G.size===0){z(M);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Za=null;function lh(M){Za&&Za(M)}function js(){Ui.stop()}function Ys(){Ui.start()}let Ui=new $l;Ui.setAnimationLoop(lh),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(M){Za=M,ue.setAnimationLoop(M),M===null?Ui.stop():Ui.start()},ue.addEventListener("sessionstart",js),ue.addEventListener("sessionend",Ys),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;N!==null&&N.renderStart(M,D);let W=ue.enabled===!0&&ue.isPresenting===!0,G=u!==null&&(V===null||W)&&u.begin(y,V);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(u===null||u.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(D),D=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,D,V),b=ae.get(M,R.length),b.init(D),b.state.textureUnits=B.getTextureUnits(),R.push(b),ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ke.setFromProjectionMatrix(ut,ri,D.reversedDepth),ot=this.localClippingEnabled,Ie=me.init(this.clippingPlanes,ot),m=Se.get(M,A.length),m.init(),A.push(m),ue.enabled===!0&&ue.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&Ka(he,D,-1/0,y.sortObjects)}Ka(M,D,0,y.sortObjects),m.finish(),N!==null&&N.updateLights(b.state.lightsArray),y.sortObjects===!0&&m.sort(oe,Ae),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&Ue.addToRenderList(m,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ie===!0&&me.beginShadows();let z=b.state.shadowsArray;if(be.render(z,M,D),Ie===!0&&me.endShadows(),(G&&u.hasRenderPass())===!1){let he=m.opaque,_e=m.transmissive;if(b.setupLights(),D.isArrayCamera){let Me=D.cameras;if(_e.length>0)for(let ye=0,De=Me.length;ye<De;ye++){let Ge=Me[ye];Zs(he,_e,M,Ge)}ht&&Ue.render(M);for(let ye=0,De=Me.length;ye<De;ye++){let Ge=Me[ye];qs(m,M,Ge,Ge.viewport)}}else _e.length>0&&Zs(he,_e,M,D),ht&&Ue.render(M),qs(m,M,D)}V!==null&&J===0&&(B.updateMultisampleRenderTarget(V),B.updateRenderTargetMipmap(V)),G&&u.end(y),M.isScene===!0&&M.onAfterRender(y,M,D),pe.resetDefaultState(),ce=-1,Y=null,R.pop(),R.length>0?(b=R[R.length-1],B.setTextureUnits(b.state.textureUnits),Ie===!0&&me.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,N!==null&&N.renderEnd()};function Ka(M,D,W,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ke)){G&&it.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);let he=C.update(M),_e=M.material;_e.visible&&m.push(M,he,_e,W,it.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ke))){let he=C.update(M),_e=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),it.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),it.copy(he.boundingSphere.center)),it.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(_e)){let Me=he.groups;for(let ye=0,De=Me.length;ye<De;ye++){let Ge=Me[ye],We=_e[Ge.materialIndex];We&&We.visible&&m.push(M,he,We,W,it.z,Ge,D)}}else _e.visible&&m.push(M,he,_e,W,it.z,null,D)}}let z=M.children;for(let he=0,_e=z.length;he<_e;he++)Ka(z[he],D,W,G)}function qs(M,D,W,G){let{opaque:z,transmissive:he,transparent:_e}=M;b.setupLightsView(W),Ie===!0&&me.setGlobalState(y.clippingPlanes,W),G&&x.viewport(K.copy(G)),z.length>0&&Jr(z,D,W),he.length>0&&Jr(he,D,W),_e.length>0&&Jr(_e,D,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Zs(M,D,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let We=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Zt(1,1,{generateMipmaps:!0,type:We?si:Ft,minFilter:Hi,samples:Math.max(4,le.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let z=b.state.transmissionRenderTarget[G.id],he=G.viewport||K;z.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);let _e=y.getRenderTarget(),Me=y.getActiveCubeFace(),ye=y.getActiveMipmapLevel();y.setRenderTarget(z),y.getClearColor(Te),qe=y.getClearAlpha(),qe<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Ue.render(W);let De=y.toneMapping;y.toneMapping=ai;let Ge=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Ie===!0&&me.setGlobalState(y.clippingPlanes,G),Jr(M,W,G),B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z),te.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let we=0,$e=D.length;we<$e;we++){let ft=D[we],{object:at,geometry:nt,material:ct,group:Ee}=ft;if(ct.side===mi&&at.layers.test(G.layers)){let Rt=ct.side;ct.side=Nt,ct.needsUpdate=!0,Ks(at,W,G,nt,ct,Ee),ct.side=Rt,ct.needsUpdate=!0,We=!0}}We===!0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z))}y.setRenderTarget(_e,Me,ye),y.setClearColor(Te,qe),Ge!==void 0&&(G.viewport=Ge),y.toneMapping=De}function Jr(M,D,W){let G=D.isScene===!0?D.overrideMaterial:null;for(let z=0,he=M.length;z<he;z++){let _e=M[z],{object:Me,geometry:ye,group:De}=_e,Ge=_e.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),Me.layers.test(W.layers)&&Ks(Me,D,W,ye,Ge,De)}}function Ks(M,D,W,G,z,he){N!==null&&z.isNodeMaterial&&N.setObject(M,z),M.onBeforeRender(y,D,W,G,z,he),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(y,D,W,G,M,he),z.transparent===!0&&z.side===mi&&z.forceSinglePass===!1?(z.side=Nt,z.needsUpdate=!0,y.renderBufferDirect(W,D,G,z,M,he),z.side=ki,z.needsUpdate=!0,y.renderBufferDirect(W,D,G,z,M,he),z.side=mi):y.renderBufferDirect(W,D,G,z,M,he),M.onAfterRender(y,D,W,G,z,he)}function $r(M,D,W){D.isScene!==!0&&(D=St);let G=w.get(M),z=b.state.lights,he=b.state.shadowsArray,_e=z.state.version,Me=se.getParameters(M,z.state,he,D,W,b.state.lightProbeGridArray),ye=se.getProgramCacheKey(Me),De=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let Ge=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=X.get(M.envMap||G.environment,Ge),G.envMapRotation=G.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",Kt),De=new Map,G.programs=De);let We=De.get(ye);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===_e)return $s(M,Me),We}else Me.uniforms=se.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,W,Me),M.onBeforeCompile(Me,y),We=se.acquireProgram(Me,ye),De.set(ye,We),G.uniforms=Me.uniforms;let we=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=me.uniform),$s(M,Me),G.needsLights=dh(M),G.lightsStateVersion=_e,G.needsLights&&(we.ambientLightColor.value=z.state.ambient,we.lightProbe.value=z.state.probe,we.sunLights.value=z.state.sun,we.sunLightShadows.value=z.state.sunShadow,we.directionalLights.value=z.state.directional,we.directionalLightShadows.value=z.state.directionalShadow,we.spotLights.value=z.state.spot,we.spotLightShadows.value=z.state.spotShadow,we.rectAreaLights.value=z.state.rectArea,we.ltc_1.value=z.state.rectAreaLTC1,we.ltc_2.value=z.state.rectAreaLTC2,we.pointLights.value=z.state.point,we.pointLightShadows.value=z.state.pointShadow,we.hemisphereLights.value=z.state.hemi,we.sunShadowMatrix.value=z.state.sunShadowMatrix,we.sunShadowCascade.value=z.state.sunShadowCascade,we.directionalShadowMatrix.value=z.state.directionalShadowMatrix,we.spotLightMatrix.value=z.state.spotLightMatrix,we.spotLightMap.value=z.state.spotLightMap,we.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=We,G.uniformsList=null,We}function Js(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Oa.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function $s(M,D){let W=w.get(M);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function hh(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;O.setFromMatrixPosition(D.matrixWorld);for(let W=0,G=M.length;W<G;W++){let z=M[W];if(z.texture!==null&&z.boundingBox.containsPoint(O))return z}return null}function ch(M,D,W,G,z){D.isScene!==!0&&(D=St),B.resetTextureUnits();let he=D.fog,_e=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,Me=V===null?y.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ve.workingColorSpace,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=X.get(G.envMap||_e,ye),Ge=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color,at=ai;G.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(at=y.toneMapping);let nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=nt!==void 0?nt.length:0,Ee=w.get(G),Rt=b.state.lights;if(Ie===!0&&(ot===!0||M!==Y)){let et=M===Y&&G.id===ce;me.setState(G,M,et)}let Ni=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Rt.state.version||Ee.outputColorSpace!==Me||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==De||G.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==me.numPlanes||Ee.numIntersection!==me.numIntersection)||Ee.vertexAlphas!==Ge||Ee.vertexTangents!==We||Ee.morphTargets!==we||Ee.morphNormals!==$e||Ee.morphColors!==ft||Ee.toneMapping!==at||Ee.morphTargetsCount!==ct||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ni=!0):(Ni=!0,Ee.__version=G.version);let zt=Ee.currentProgram;Ni===!0&&(zt=$r(G,D,z),N&&G.isNodeMaterial&&N.onUpdateProgram(G,zt,Ee));let Jt=!1,yi=!1,ji=!1,Qe=zt.getUniforms(),dt=Ee.uniforms;if(x.useProgram(zt.program)&&(Jt=!0,yi=!0,ji=!0),G.id!==ce&&(ce=G.id,yi=!0),Ee.needsLights){let et=hh(b.state.lightProbeGridArray,z);Ee.lightProbeGrid!==et&&(Ee.lightProbeGrid=et,yi=!0)}if(Jt||Y!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Qe.setValue(S,"projectionMatrix",M.projectionMatrix),Qe.setValue(S,"viewMatrix",M.matrixWorldInverse);let et=Qe.map.cameraPosition;et!==void 0&&et.setValue(S,At.setFromMatrixPosition(M.matrixWorld)),le.logarithmicDepthBuffer&&Qe.setValue(S,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qe.setValue(S,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,yi=!0,ji=!0)}if(Ee.needsLights&&(Rt.state.sunShadowMap.length>0&&Qe.setValue(S,"sunShadowMap",Rt.state.sunShadowMap,B),Rt.state.directionalShadowMap.length>0&&Qe.setValue(S,"directionalShadowMap",Rt.state.directionalShadowMap,B),Rt.state.spotShadowMap.length>0&&Qe.setValue(S,"spotShadowMap",Rt.state.spotShadowMap,B),Rt.state.pointShadowMap.length>0&&Qe.setValue(S,"pointShadowMap",Rt.state.pointShadowMap,B)),z.isSkinnedMesh){Qe.setOptional(S,z,"bindMatrix"),Qe.setOptional(S,z,"bindMatrixInverse");let et=z.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Qe.setValue(S,"boneTexture",et.boneTexture,B))}z.isBatchedMesh&&(Qe.setOptional(S,z,"batchingTexture"),Qe.setValue(S,"batchingTexture",z._matricesTexture,B),Qe.setOptional(S,z,"batchingIdTexture"),Qe.setValue(S,"batchingIdTexture",z._indirectTexture,B),Qe.setOptional(S,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(S,"batchingColorTexture",z._colorsTexture,B));let Ei=W.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&je.update(z,W,zt),(yi||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Qe.setValue(S,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(dt.envMapIntensity.value=D.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=Vm()),yi){if(Qe.setValue(S,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&uh(dt,ji),he&&G.fog===!0&&de.refreshFogUniforms(dt,he),de.refreshMaterialUniforms(dt,G,ne,q,b.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){let et=Ee.lightProbeGrid;dt.probesSH.value=et.texture,dt.probesMin.value.copy(et.boundingBox.min),dt.probesMax.value.copy(et.boundingBox.max),dt.probesResolution.value.copy(et.resolution)}Oa.upload(S,Js(Ee),dt,B)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Oa.upload(S,Js(Ee),dt,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qe.setValue(S,"center",z.center),Qe.setValue(S,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(S,"normalMatrix",z.normalMatrix),Qe.setValue(S,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){let et=G.uniformsGroups;for(let Rr=0,Yi=et.length;Rr<Yi;Rr++){let eo=et[Rr];xe.update(eo,zt),xe.bind(eo,zt)}}return zt}function uh(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function dh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(M,D,W){let G=w.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),w.get(M.texture).__webglTexture=D,w.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let W=w.get(M);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,W=0){V=M,H=D,J=W;let G=null,z=!1,he=!1;if(M){let _e=w.get(M);if(_e.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(S.FRAMEBUFFER,_e.__webglFramebuffer),K.copy(M.viewport),Q.copy(M.scissor),Ne=M.scissorTest,x.viewport(K),x.scissor(Q),x.setScissorTest(Ne),ce=-1;return}else if(_e.__webglFramebuffer===void 0)B.setupRenderTarget(M);else if(_e.__hasExternalTextures)B.rebindTextures(M,w.get(M.texture).__webglTexture,w.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let De=M.depthTexture;if(_e.__boundDepthTexture!==De){if(De!==null&&w.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(M)}}let Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);let ye=w.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ye[D])?G=ye[D][W]:G=ye[D],z=!0):M.samples>0&&B.useMultisampledRTT(M)===!1?G=w.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?G=ye[W]:G=ye,K.copy(M.viewport),Q.copy(M.scissor),Ne=M.scissorTest}else K.copy(Pe).multiplyScalar(ne).floor(),Q.copy(ge).multiplyScalar(ne).floor(),Ne=Ye;if(W!==0&&(G=I),x.bindFramebuffer(S.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(K),x.scissor(Q),x.setScissorTest(Ne),z){let _e=w.get(M.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,W)}else if(he){let _e=D;for(let Me=0;Me<M.textures.length;Me++){let ye=w.get(M.textures[Me]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Me,ye.__webglTexture,W,_e)}}else if(M!==null&&W!==0){let _e=w.get(M.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,_e.__webglTexture,W)}ce=-1};function Qs(M){let D=w.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=le.textureFormatReadable(M.format),D.__typeReadable=le.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,W,G,z,he,_e,Me=0){if(!(M&&M.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=w.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){x.bindFramebuffer(S.FRAMEBUFFER,ye);try{let De=M.textures[Me],Ge=De.format,We=De.type;M.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Me);let we=Qs(De);if(we.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&W>=0&&W<=M.height-z&&S.readPixels(D,W,G,z,$.convert(Ge),$.convert(We),he)}finally{let De=V!==null?w.get(V).__webglFramebuffer:null;x.bindFramebuffer(S.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,D,W,G,z,he,_e,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=w.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(D>=0&&D<=M.width-G&&W>=0&&W<=M.height-z){x.bindFramebuffer(S.FRAMEBUFFER,ye);let De=M.textures[Me],Ge=De.format,We=De.type;M.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Me);let we=Qs(De);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,$e),S.bufferData(S.PIXEL_PACK_BUFFER,he.byteLength,S.STREAM_READ),S.readPixels(D,W,G,z,$.convert(Ge),$.convert(We),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let ft=V!==null?w.get(V).__webglFramebuffer:null;x.bindFramebuffer(S.FRAMEBUFFER,ft);let at=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await qh(S,at,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,$e),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,he),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer($e),S.deleteSync(at),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,W=0){let G=Math.pow(2,-W),z=Math.floor(M.image.width*G),he=Math.floor(M.image.height*G),_e=D!==null?D.x:0,Me=D!==null?D.y:0;B.setTexture2D(M,0),S.copyTexSubImage2D(S.TEXTURE_2D,W,0,0,_e,Me,z,he),x.unbindTexture()},this.copyTextureToTexture=function(M,D,W=null,G=null,z=0,he=0){let _e,Me,ye,De,Ge,We,we,$e,ft,at=M.isCompressedTexture?M.mipmaps[he]:M.image;if(W!==null)_e=W.max.x-W.min.x,Me=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,Ge=W.min.y,We=W.isBox3?W.min.z:0;else{let dt=Math.pow(2,-z);_e=Math.floor(at.width*dt),Me=Math.floor(at.height*dt),M.isDataArrayTexture?ye=at.depth:M.isData3DTexture?ye=Math.floor(at.depth*dt):ye=1,De=0,Ge=0,We=0}G!==null?(we=G.x,$e=G.y,ft=G.z):(we=0,$e=0,ft=0);let nt=$.convert(D.format),ct=$.convert(D.type),Ee;D.isData3DTexture?(B.setTexture3D(D,0),Ee=S.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(B.setTexture2DArray(D,0),Ee=S.TEXTURE_2D_ARRAY):(B.setTexture2D(D,0),Ee=S.TEXTURE_2D),x.activeTexture(S.TEXTURE0),x.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(S.UNPACK_ALIGNMENT,D.unpackAlignment);let Rt=x.getParameter(S.UNPACK_ROW_LENGTH),Ni=x.getParameter(S.UNPACK_IMAGE_HEIGHT),zt=x.getParameter(S.UNPACK_SKIP_PIXELS),Jt=x.getParameter(S.UNPACK_SKIP_ROWS),yi=x.getParameter(S.UNPACK_SKIP_IMAGES);x.pixelStorei(S.UNPACK_ROW_LENGTH,at.width),x.pixelStorei(S.UNPACK_IMAGE_HEIGHT,at.height),x.pixelStorei(S.UNPACK_SKIP_PIXELS,De),x.pixelStorei(S.UNPACK_SKIP_ROWS,Ge),x.pixelStorei(S.UNPACK_SKIP_IMAGES,We);let ji=M.isDataArrayTexture||M.isData3DTexture,Qe=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let dt=w.get(M),Ei=w.get(D),et=w.get(dt.__renderTarget),Rr=w.get(Ei.__renderTarget);x.bindFramebuffer(S.READ_FRAMEBUFFER,et.__webglFramebuffer),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Yi=0;Yi<ye;Yi++)ji&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,w.get(M).__webglTexture,z,We+Yi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,w.get(D).__webglTexture,he,ft+Yi)),S.blitFramebuffer(De,Ge,_e,Me,we,$e,_e,Me,S.DEPTH_BUFFER_BIT,S.NEAREST);x.bindFramebuffer(S.READ_FRAMEBUFFER,null),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||w.has(M)){let dt=w.get(M),Ei=w.get(D);x.bindFramebuffer(S.READ_FRAMEBUFFER,Z),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,U);for(let et=0;et<ye;et++)ji?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,dt.__webglTexture,z,We+et):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,dt.__webglTexture,z),Qe?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ei.__webglTexture,he,ft+et):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ei.__webglTexture,he),z!==0?S.blitFramebuffer(De,Ge,_e,Me,we,$e,_e,Me,S.COLOR_BUFFER_BIT,S.NEAREST):Qe?S.copyTexSubImage3D(Ee,he,we,$e,ft+et,De,Ge,_e,Me):S.copyTexSubImage2D(Ee,he,we,$e,De,Ge,_e,Me);x.bindFramebuffer(S.READ_FRAMEBUFFER,null),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Qe?M.isDataTexture||M.isData3DTexture?S.texSubImage3D(Ee,he,we,$e,ft,_e,Me,ye,nt,ct,at.data):D.isCompressedArrayTexture?S.compressedTexSubImage3D(Ee,he,we,$e,ft,_e,Me,ye,nt,at.data):S.texSubImage3D(Ee,he,we,$e,ft,_e,Me,ye,nt,ct,at):M.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,he,we,$e,_e,Me,nt,ct,at.data):M.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,he,we,$e,at.width,at.height,nt,at.data):S.texSubImage2D(S.TEXTURE_2D,he,we,$e,_e,Me,nt,ct,at);x.pixelStorei(S.UNPACK_ROW_LENGTH,Rt),x.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ni),x.pixelStorei(S.UNPACK_SKIP_PIXELS,zt),x.pixelStorei(S.UNPACK_SKIP_ROWS,Jt),x.pixelStorei(S.UNPACK_SKIP_IMAGES,yi),he===0&&D.generateMipmaps&&S.generateMipmap(Ee),x.unbindTexture()},this.initRenderTarget=function(M){w.get(M).__webglFramebuffer===void 0&&B.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?B.setTextureCube(M,0):M.isData3DTexture?B.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?B.setTexture2DArray(M,0):B.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){H=0,J=0,V=null,x.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}},hl={type:"change"},Ws={type:"start"},sh={type:"end"},Ra=new Kr,cl=new fi,Wm=Math.cos(70*Jh.DEG2RAD),_t=new F,Ut=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Un=1e-6,Xm=class extends Wc{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Di,this._lastTargetPosition=new F,this._quat=new Di().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zo,this._sphericalDelta=new zo,this._scale=1,this._panOffset=new F,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new F,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ym.bind(this),this._onPointerDown=jm.bind(this),this._onPointerUp=qm.bind(this),this._onContextMenu=tg.bind(this),this._onMouseWheel=Jm.bind(this),this._onKeyDown=$m.bind(this),this._onTouchStart=Qm.bind(this),this._onTouchMove=eg.bind(this),this._onMouseDown=Zm.bind(this),this._onMouseMove=Km.bind(this),this._interceptControlDown=ig.bind(this),this._interceptControlUp=rg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Je.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hl),this.update(),this.state=Je.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ut:i>Math.PI&&(i-=Ut),r<-Math.PI?r+=Ut:r>Math.PI&&(r-=Ut),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=_t.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new F(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(s),this.object.updateMatrixWorld(),n=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Ra.origin.copy(this.object.position),Ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ra.direction))<Wm?this.object.lookAt(this.target):(cl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ra.intersectPlane(cl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Un||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Un||this._lastTargetPosition.distanceToSquared(this.target)>Un?(this.dispatchEvent(hl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;_t.copy(r).sub(this.target);let a=_t.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function jm(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ym(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function qm(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sh),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Zm(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Je.DOLLY;break;case gr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}break;case gr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Ws)}function Km(e){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Jm(e){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(e.preventDefault(),this.dispatchEvent(Ws),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(sh))}function $m(e){this.enabled!==!1&&this._handleKeyDown(e)}function Qm(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Je.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Je.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Ws)}function eg(e){switch(this._trackPointer(e),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Je.NONE}}function tg(e){this.enabled!==!1&&e.preventDefault()}function ig(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ul(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new uc;a.background=new Fe(16777215);let n=t.clientWidth||900,s=t.clientHeight||480,o=new Vt(36,n/s,.1,100);o.position.set(9,4.2,7.5);let h=new km({antialias:!0,alpha:!1,powerPreference:"high-performance"});h.setSize(n,s),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=Rs,h.toneMappingExposure=1.15,h.shadowMap.enabled=!0,h.shadowMap.type=Gr,t.appendChild(h.domElement);let l=new Xm(o,h.domElement);l.enableDamping=!0,l.dampingFactor=.05,l.maxPolarAngle=Math.PI/2-.05,l.minDistance=2.5,l.maxDistance=26,l.target.set(0,0,0),l.autoRotate=!0,l.autoRotateSpeed=.6;let d=null,g=()=>{l.autoRotate=!1,clearTimeout(d),d=setTimeout(()=>{ut.autoRotate&&(l.autoRotate=!0)},6e3)};h.domElement.addEventListener("pointerdown",g),h.domElement.addEventListener("wheel",g,{passive:!0}),h.domElement.addEventListener("touchstart",g,{passive:!0});let c=new Bc(16777215,.85);a.add(c);let _=new wn(16777215,1.25);_.position.set(12,16,14),_.castShadow=!0,_.shadow.mapSize.width=1024,_.shadow.mapSize.height=1024,_.shadow.bias=-5e-4,a.add(_);let E=new wn(14412542,.7);E.position.set(-14,8,-10),a.add(E);let T=new wn(15793652,.6);T.position.set(0,18,0),a.add(T);let v=new Gs(30,30),p=new Ac({opacity:.12}),P=new Dt(v,p);P.rotation.x=-Math.PI/2,P.position.y=-1.65,P.receiveShadow=!0,a.add(P);let O=new kc(24,24,14870768,15857145);O.position.y=-1.64,a.add(O);let m={aluFrame:new gt({color:13949149,metalness:.75,roughness:.3}),galvSteel:new gt({color:12897749,metalness:.65,roughness:.45}),stainless:new gt({color:14870768,metalness:.9,roughness:.2}),baseSkid:new gt({color:9741240,metalness:.8,roughness:.35}),panelSolid:new gt({color:16317180,metalness:.15,roughness:.4}),panelCutaway:new Uc({color:14742270,transparent:!0,opacity:.22,roughness:.08,metalness:.1,transmission:.85,ior:1.45}),fanHousing:new gt({color:165063,metalness:.5,roughness:.35}),fanImpeller:new gt({color:3718648,metalness:.7,roughness:.25}),motorCast:new gt({color:1976635,metalness:.8,roughness:.3}),copperPipe:new gt({color:11817737,metalness:.85,roughness:.25}),coolingFin:new gt({color:3718648,metalness:.55,roughness:.4}),heatingFin:new gt({color:16281969,metalness:.55,roughness:.4}),rotorWheel:new gt({color:9741240,metalness:.7,roughness:.35}),filterCloth:new gt({color:15857145,roughness:.9,metalness:.05}),damperBlade:new gt({color:10592682,metalness:.8,roughness:.3}),actuatorOrange:new gt({color:15357964,metalness:.3,roughness:.4}),drainPan:new gt({color:14870768,metalness:.9,roughness:.2}),doorHandle:new gt({color:988970,metalness:.7,roughness:.3}),rubberBlack:new gt({color:988970,roughness:.8,metalness:.1}),brassGold:new gt({color:14251782,metalness:.85,roughness:.25})},b=[],A=[],R=new gi;a.add(R);function u(S,ve,te,le,x,f,w,B=!0,X=!0){let re=new ja(S,ve,te),ee=new Dt(re,le);return ee.position.set(x,f,w),ee.castShadow=B,ee.receiveShadow=X,ee}function y(S,ve,te,le,x,f,w,B,X=0,re=0){let ee=new Es(S,ve,te,le),C=new Dt(ee,x);return C.position.set(f,w,B),X&&(C.rotation.x=X),re&&(C.rotation.z=re),C.castShadow=!0,C.receiveShadow=!0,C}function k(S,ve){let te=ve==="thks",le=ve==="thrv-dx",x=ve==="hrv",f=ve==="rooftop",w=x?4.8:f?6.2:7.6,B=x?1.9:2.6,X=x?1.8:2,re=w/2,ee=B/2,C=X/2,se=.22,de=-ee-se/2,Se=u(w+.3,se,.12,m.baseSkid,0,de,C-.06),ae=u(w+.3,se,.12,m.baseSkid,0,de,-C+.06);S.add(Se,ae),[-re,-re*.5,0,re*.5,re].forEach(j=>{S.add(u(.12,se,X-.24,m.baseSkid,j,de,0))});let me=.08,be=te?m.stainless:m.aluFrame;S.add(u(w,me,me,be,0,-ee+me/2,C-me/2),u(w,me,me,be,0,-ee+me/2,-C+me/2),u(w,me,me,be,0,ee-me/2,C-me/2),u(w,me,me,be,0,ee-me/2,-C+me/2));let Ue=te?m.stainless:m.galvSteel;S.add(u(w-.1,B-.1,.05,m.panelSolid,0,0,-C+.04),u(w-.1,.05,X-.1,m.panelSolid,0,ee-.03,0),u(w-.1,.05,X-.1,Ue,0,-ee+.03,0),u(.05,B-.1,X-.1,m.panelSolid,re-.03,0,0));let je=x?3:4,L=(w-.2)/je;for(let j=0;j<je;j++){let $=-re+.1+(j+.5)*L,pe=u(L-.04,B-.18,.03,m.panelCutaway,$,0,C-.02,!1,!1);S.add(pe),A.push(pe),S.add(u(.04,.12,.04,m.doorHandle,$+L*.4,0,C+.01)),S.add(y(.11,.11,.04,16,m.aluFrame,$,.2,C,Math.PI/2))}if(x){let j=u(1.5,1.4,X-.35,m.aluFrame,0,0,0);j.rotation.z=Math.PI/4,S.add(j),[-1.4,1.4].forEach(($,pe)=>{let xe=pe===0?-.35:.35,ie=y(.35,.35,.25,20,m.fanHousing,$,xe,0,0,Math.PI/2);S.add(ie),b.push(()=>{ie.rotation.x+=.1})}),[-1.9,1.9].forEach($=>{S.add(u(.06,B-.4,X-.4,m.filterCloth,$,0,0))})}else if(f){[-1.2,1.2].forEach($=>{let pe=y(.55,.55,.18,24,m.motorCast,$,ee+.09,0),xe=y(.48,.48,.04,4,m.fanImpeller,$,ee+.12,0);S.add(pe,xe),b.push(()=>{xe.rotation.y+=.15})}),[-1.8,-1].forEach($=>{let pe=y(.2,.2,.7,16,m.motorCast,$,-ee+.5,-C+.5);S.add(pe)});let j=y(.45,.45,.35,20,m.fanHousing,1.8,-.2,0,0,Math.PI/2);S.add(j),b.push(()=>{j.rotation.x+=.12}),S.add(u(.3,B-.5,X-.4,m.coolingFin,.5,-.1,0))}else{let j=new gi;j.position.set(0,0,0),S.add(j);let $=y(1.05,1.05,.28,32,m.aluFrame,0,0,0,0,Math.PI/2),pe=y(1.01,1.01,.26,28,m.rotorWheel,0,0,0,0,Math.PI/2);j.add($,pe);for(let ue=0;ue<12;ue++){let Re=ue/12*Math.PI*2,rt=u(.03,1.98,.02,m.aluFrame,0,0,0);rt.rotation.x=Re,j.add(rt)}b.push(()=>{j.rotation.x+=.008});let xe=y(.42,.42,.35,24,m.fanHousing,2.8,-ee/2+.1,0,0,Math.PI/2),ie=y(.36,.36,.3,24,m.fanHousing,-1.3,ee/2-.05,0,0,Math.PI/2);S.add(xe,ie),b.push(()=>{xe.rotation.x+=.12,ie.rotation.x+=.12}),S.add(u(.28,ee-.3,X-.35,te?m.stainless:m.coolingFin,1.35,-ee/2,0)),S.add(u(.22,ee-.3,X-.35,m.heatingFin,1.85,-ee/2,0)),S.add(u(.95,.08,X-.25,m.drainPan,1.6,-ee+.12,0)),S.add(u(.06,ee-.25,X-.3,te?m.stainless:m.aluFrame,-2.1,-ee/2,0));for(let ue=0;ue<4;ue++){let Re=-C+.25+(ue+.5)*((X-.4)/4),rt=new Dt(new Do(.2,.75,4),m.filterCloth);rt.rotateZ(-Math.PI/2),rt.position.set(-1.7,-ee/2,Re),rt.scale.set(1,1.4,.8),S.add(rt)}[-ee/2,ee/2].forEach(ue=>{S.add(u(.08,ee-.25,X-.3,m.aluFrame,-re-.04,ue,0)),S.add(u(.14,.18,.12,m.actuatorOrange,-re-.04,ue,C+.05))}),le&&S.add(y(.2,.2,.65,16,m.motorCast,2.5,-ee/2,-C+.5)),S.add(u(.32,.55,.18,m.motorCast,2.3,.35,C+.09))}}function N(S,ve){if(ve==="tdf"){S.add(u(3.4,2.2,.05,m.galvSteel,0,0,-1.08),u(3.4,.05,2.2,m.galvSteel,0,1.08,0),u(3.4,.05,2.2,m.galvSteel,0,-1.08,0),u(.05,2.2,2.2,m.galvSteel,-1.68,0,0),u(.05,2.2,2.2,m.galvSteel,1.68,0,0)),[-1.72,1.72].forEach(f=>{S.add(u(.08,2.4,2.4,m.aluFrame,f,0,0))});let te=u(3.3,2.1,.04,m.panelCutaway,0,0,1.09,!1,!1);S.add(te),A.push(te);let le=y(.85,.85,.55,24,m.fanImpeller,0,0,0,0,Math.PI/2),x=y(.3,.3,.4,16,m.motorCast,.3,0,0,0,Math.PI/2);S.add(le,x),b.push(()=>{le.rotation.x+=.14}),S.add(u(.22,.22,.14,m.fanHousing,-.8,1.15,.6))}else if(ve==="yangin-fani"){let te=y(1.3,1.3,4.2,32,m.galvSteel,0,0,0,0,Math.PI/2);S.add(te),[-2.12,2.12].forEach(f=>{S.add(y(1.48,1.48,.08,32,m.baseSkid,f,0,0,0,Math.PI/2))});let le=y(.5,.5,2.2,24,m.motorCast,.2,0,0,0,Math.PI/2),x=y(1.22,1.22,.14,8,m.fanImpeller,-.6,0,0,0,Math.PI/2);S.add(le,x),b.push(()=>{x.rotation.x+=.15}),S.add(u(2.8,.15,.4,m.baseSkid,0,-1.35,1)),S.add(u(2.8,.15,.4,m.baseSkid,0,-1.35,-1)),S.add(u(.25,.25,.16,m.actuatorOrange,0,1.35,0))}else{let te=y(.65,.65,5.4,28,m.galvSteel,0,0,0,0,Math.PI/2);S.add(te),[-1.8,1.8].forEach(x=>{S.add(y(.78,.78,1.6,28,m.aluFrame,x,0,0,0,Math.PI/2))});let le=y(.6,.6,.12,8,m.fanImpeller,0,0,0,0,Math.PI/2);S.add(le),b.push(()=>{le.rotation.x+=.16}),S.add(u(.12,.6,.5,m.damperBlade,2.75,-.1,0)),[-1.4,1.4].forEach(x=>{S.add(u(.1,.6,.3,m.baseSkid,x,.8,0))})}}function I(S,ve){if(ve==="spiral-kanal"){let te=y(.75,.75,4.6,32,m.galvSteel,-.6,0,0,0,Math.PI/2);S.add(te);for(let x=-2;x<=1.4;x+=.5)S.add(y(.765,.765,.03,32,m.aluFrame,x,0,0,0,Math.PI/2));S.add(y(.78,.78,.12,32,m.rubberBlack,1.75,0,0,0,Math.PI/2));let le=y(.74,.74,1.8,28,m.galvSteel,2.4,.9,0);S.add(le),S.add(y(.82,.82,.08,32,m.baseSkid,-.8,0,0,0,Math.PI/2)),S.add(y(.02,.02,1.4,8,m.baseSkid,-.8,1.1,0))}else if(ve==="paslanmaz-kanal"){let te=y(.85,.85,4.8,32,m.stainless,0,0,0,0,Math.PI/2);S.add(te),S.add(u(4.78,.02,.03,m.aluFrame,0,.85,0)),[-2.38,2.38].forEach(le=>{S.add(y(1.05,1.05,.08,32,m.stainless,le,0,0,0,Math.PI/2));for(let x=0;x<8;x++){let f=x/8*Math.PI*2;S.add(u(.12,.04,.04,m.doorHandle,le,Math.sin(f)*.95,Math.cos(f)*.95))}}),S.add(y(.35,.35,.06,16,m.stainless,0,0,.86,Math.PI/2))}else{let te=u(4.8,2,2.4,m.galvSteel,0,0,0);S.add(te),[-2.42,2.42].forEach(x=>{S.add(u(.08,2.16,2.56,m.aluFrame,x,0,0)),[-1.04,1.04].forEach(f=>{[-1.24,1.24].forEach(w=>{S.add(u(.1,.16,.16,m.baseSkid,x,f,w))})})}),S.add(u(3.6,.02,.02,m.aluFrame,0,1.01,0));let le=u(2.8,1.4,.08,m.filterCloth,0,0,1.21);S.add(le)}}function Z(S,ve){if(ve==="menfez"){let te=u(.12,2.4,3.6,m.aluFrame,0,0,0);S.add(te);for(let le=-.95;le<=.95;le+=.22){let x=u(.08,.03,3.3,m.damperBlade,.03,le,0);x.rotation.x=.25,S.add(x)}for(let le=-1.5;le<=1.5;le+=.3){let x=u(.08,2.1,.03,m.damperBlade,-.04,0,le);x.rotation.y=.2,S.add(x)}S.add(u(.18,2.1,3.3,m.motorCast,-.16,0,0))}else if(ve==="difuzor"){let te=u(1.6,1.4,3.4,m.galvSteel,0,.6,0);S.add(te),S.add(y(.45,.45,.35,24,m.galvSteel,-.85,.6,0,0,Math.PI/2));let le=u(1.8,.06,3.6,m.aluFrame,0,-.13,0);S.add(le),[-.15,0,.15].forEach(f=>{S.add(u(.04,.05,3.3,m.doorHandle,f,-.15,0))});let x=u(1.8,.05,1.8,m.panelSolid,0,-1.1,0);S.add(x);for(let f=0;f<16;f++){let w=f/16*Math.PI*2,B=u(.04,.03,.38,m.doorHandle,Math.sin(w)*.55,-1.07,Math.cos(w)*.55);B.rotation.y=w+.5,S.add(B)}}else{let te=u(1.4,2.4,2.6,m.galvSteel,0,0,0);S.add(te),[-.72,.72].forEach(x=>{S.add(u(.08,2.6,2.8,m.aluFrame,x,0,0))});for(let x=-.75;x<=.75;x+=.5){let f=u(.18,.04,2.35,m.damperBlade,0,x,0);f.rotation.z=Math.PI/5,S.add(f)}let le=u(.2,.32,.18,m.actuatorOrange,.1,.2,1.4);S.add(le),S.add(y(.03,.03,.12,12,m.brassGold,-.2,.2,1.35,Math.PI/2))}}function U(S){let ve=u(4.2,2.4,2.4,m.galvSteel,0,0,0);S.add(ve);let te=u(3.8,2.1,.04,m.panelCutaway,0,0,1.21,!1,!1);S.add(te),A.push(te);let le=u(.12,2,2,m.filterCloth,-1.4,0,0);S.add(le),S.add(u(.1,2,2,m.aluFrame,-.2,0,0));for(let B=0;B<4;B++){let X=-.75+B*.5,re=new Dt(new Do(.22,1.1,4),m.filterCloth);re.rotateZ(-Math.PI/2),re.position.set(.4,0,X),S.add(re)}let x=u(.25,2,2,m.aluFrame,1.4,0,0),f=u(.22,1.9,1.9,m.filterCloth,1.4,0,0),w=u(.26,2.02,.04,m.coolingFin,1.4,0,1);S.add(x,f,w),[-1,.6].forEach(B=>{S.add(y(.09,.09,.04,16,m.aluFrame,B,.5,1.24,Math.PI/2))})}function H(S,ve){if(ve==="vrf-dis"){S.add(u(3.4,3.6,.05,m.panelSolid,0,0,-.98),u(3.4,.05,2,m.panelSolid,0,1.78,0),u(3.4,.12,2,m.baseSkid,0,-1.74,0),u(.05,3.4,1.9,m.coolingFin,-1.68,.05,0),u(.05,3.4,1.9,m.coolingFin,1.68,.05,0));let te=u(3.28,3.38,.04,m.panelCutaway,0,.05,.99,!1,!1);S.add(te),A.push(te);let le=y(.85,.85,.25,28,m.fanHousing,0,1.88,0),x=y(.75,.75,.05,4,m.fanImpeller,0,1.92,0);S.add(le,x),b.push(()=>{x.rotation.y+=.16}),[-.6,.6].forEach(f=>{S.add(y(.26,.26,.9,16,m.motorCast,f,-.9,-.2))}),S.add(y(.22,.22,1.1,16,m.motorCast,-1.1,-.8,.2)),S.add(u(3.3,2.8,.12,m.coolingFin,0,.2,-.9)),S.add(u(.25,.2,.15,m.brassGold,1.2,-1.2,1.05))}else if(ve==="vrf-ic"){let te=u(2.8,.8,2.8,m.galvSteel,0,.5,0),le=u(3.2,.08,3.2,m.panelSolid,0,.05,0);S.add(te,le),[[0,1.4,0],[0,-1.4,0],[1.4,0,Math.PI/2],[-1.4,0,Math.PI/2]].forEach(([f,w,B])=>{let X=u(1.8,.02,.14,m.doorHandle,f,.01,w);X.rotation.y=B,S.add(X)});let x=y(.65,.65,.35,20,m.fanImpeller,0,.5,0);S.add(x),b.push(()=>{x.rotation.y+=.14}),S.add(u(.18,.22,.18,m.actuatorOrange,1.3,.5,.8))}else{let te=u(4.6,1.8,2.8,m.stainless,0,0,0);S.add(te);for(let le=-1.6;le<=1.6;le+=.8){let x=u(.7,.06,1.6,m.stainless,le,-.7,.2);x.rotation.x=-.3,S.add(x)}S.add(y(.12,.09,.18,16,m.stainless,2.1,-.9,.8)),S.add(y(.02,.02,4.2,12,m.stainless,0,-.4,1.1,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(le=>{let x=y(.04,.025,.1,10,m.brassGold,le,-.48,1.1);S.add(x)}),S.add(u(.14,.2,.08,m.actuatorOrange,2.32,-.2,1.2))}}["tks","thks","thrv-dx","hrv","rooftop"].includes(i)?k(R,i):["tdf","yangin-fani","jet-fan"].includes(i)?N(R,i):["galvaniz-kanal","spiral-kanal","paslanmaz-kanal"].includes(i)?I(R,i):["menfez","difuzor","damper"].includes(i)?Z(R,i):i==="filtre"?U(R):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?H(R,i):k(R,"tks");let J=new gi;a.add(J);let V=80,ce=[],Y=new Float32Array(V*3),K=new Float32Array(V*3);for(let S=0;S<V;S++){let ve=S<V*.65;ce.push({isSupply:ve,progress:Math.random(),speed:.005+Math.random()*.004,offsetY:(Math.random()-.5)*.6,offsetZ:(Math.random()-.5)*1}),ve?(K[S*3]=.02,K[S*3+1]=.65,K[S*3+2]=.98):(K[S*3]=.95,K[S*3+1]=.45,K[S*3+2]=.12)}let Q=new Bt;Q.setAttribute("position",new kt(Y,3)),Q.setAttribute("color",new kt(K,3));let Ne=document.createElement("canvas");Ne.width=32,Ne.height=32;let Te=Ne.getContext("2d"),qe=Te.createRadialGradient(16,16,0,16,16,16);qe.addColorStop(0,"rgba(255, 255, 255, 1)"),qe.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),qe.addColorStop(1,"rgba(0, 0, 0, 0)"),Te.fillStyle=qe,Te.fillRect(0,0,32,32);let Oe=new Po(Ne),q=new Gl({size:.15,map:Oe,transparent:!0,opacity:.8,vertexColors:!0,blending:Nn,depthWrite:!1}),ne=new bc(Q,q);J.add(ne),b.push(()=>{if(!ut.cfdEnabled){J.visible=!1;return}J.visible=!0;let S=Q.attributes.position.array;for(let ve=0;ve<V;ve++){let te=ce[ve];te.progress+=te.speed,te.progress>1&&(te.progress=0),S[ve*3]=-3.5+te.progress*7,S[ve*3+1]=(te.isSupply?-.4:.4)+te.offsetY,S[ve*3+2]=te.offsetZ}Q.attributes.position.needsUpdate=!0});let oe=new gi;a.add(oe);function Ae(S){let ve=document.createElement("canvas");ve.width=64,ve.height=64;let te=ve.getContext("2d");te.fillStyle="#0284c7",te.beginPath(),te.arc(32,32,28,0,Math.PI*2),te.fill(),te.lineWidth=4,te.strokeStyle="#ffffff",te.stroke(),te.fillStyle="#ffffff",te.font="bold 26px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText(S,32,33);let le=new Po(ve);return le.minFilter=Et,le}let Pe=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],ge=[];Pe.forEach((S,ve)=>{let te=new gi,le=Pe.length,x=-2.8+ve/Math.max(1,le-1)*5.6,f=ve%2===0?-.2:.5,w=1.35;te.position.set(x,f,w);let B=new Dt(new Es(.012,.012,.25,8),new zs({color:165063}));B.position.y=-.12;let X=new xc(new Bl({map:Ae(S.num||`0${ve+1}`),depthTest:!1}));X.scale.set(.32,.32,1),X.position.y=.05,X.userData={hotspot:S,pos:[x,f,w]},te.add(B,X),te.userData={hotspot:S,pos:[x,f,w]},oe.add(te),ge.push(X)}),b.push(()=>{let S=Date.now()*.003,ve=.32+Math.sin(S)*.025;ge.forEach(te=>te.scale.set(ve,ve,1))});let Ye=new Vc,ke=new Ce;function Ie(S){let ve=h.domElement.getBoundingClientRect();ke.x=(S.clientX-ve.left)/ve.width*2-1,ke.y=-((S.clientY-ve.top)/ve.height)*2+1,Ye.setFromCamera(ke,o);let te=Ye.intersectObjects(oe.children,!0);if(te.length>0){let le=te[0].object;for(;le.parent&&!le.userData.hotspot;)le=le.parent;le&&le.userData.hotspot&&(showHotspotCard(le.userData.hotspot),ot(le.userData.pos))}}h.domElement.addEventListener("click",Ie);function ot(S){l.autoRotate=!1;let ve=new F(S[0]+3,S[1]+1.5,S[2]+4),te=o.position.clone(),le=l.target.clone(),x=new F(S[0],S[1],S[2]),f=0;function w(){f+=.04,f<=1&&(o.position.lerpVectors(te,ve,f),l.target.lerpVectors(le,x,f),requestAnimationFrame(w))}w()}let ut={autoRotate:!0,cfdEnabled:!0,isCutaway:!0};function At(S){ut.isCutaway=S,A.forEach(ve=>{ve.material=S?m.panelCutaway:m.panelSolid})}function it(){l.autoRotate=ut.autoRotate,l.target.set(0,0,0),o.position.set(9,4.2,7.5),hideHotspotCard()}ag(t,{productTitle:r.title,state:ut,controls:l,setCutawayMode:At,resetCamera:it,onResize:lt});let St=null;function ht(){St=requestAnimationFrame(ht),l.update(),b.forEach(S=>S()),h.render(a,o)}ht();function lt(){if(!t)return;let S=t.clientWidth,ve=t.clientHeight;o.aspect=S/ve,o.updateProjectionMatrix(),h.setSize(S,ve)}return window.addEventListener("resize",lt),{scene:a,camera:o,renderer:h,destroy:()=>{for(cancelAnimationFrame(St),window.removeEventListener("resize",lt),h.dispose();t.firstChild;)t.removeChild(t.firstChild)}}}function ag(e,t){if(e.parentElement.querySelector(".sky-3d-hud"))return;let i=document.createElement("div");i.className="sky-3d-hud",i.innerHTML=`
    <!-- Top Left Status Badge -->
    <div class="sky-3d-badge-bar">
      <span class="sky-3d-pill">
        <span class="sky-3d-dot live"></span>
        ${t.productTitle} • 3D CAD İkiz
      </span>
      <span class="sky-3d-pill text-muted">
        360° Çevir • Yakınlaştır • İncele
      </span>
    </div>

    <!-- Top Right Floating Action Controls -->
    <div class="sky-3d-actions-bar">
      <button type="button" id="sky-btn-rotate" class="sky-3d-action-btn active" title="Döndürmeyi Aç/Kapat">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
        <span>Döndür</span>
      </button>

      <button type="button" id="sky-btn-cfd" class="sky-3d-action-btn active" title="Aerodinamik Hava Akışını Göster">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span>Hava Akışı</span>
      </button>

      <button type="button" id="sky-btn-casing" class="sky-3d-action-btn" title="Şeffaf Kesit / Kapalı Gövde">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        <span id="sky-casing-text">Şeffaf Gövde</span>
      </button>

      <button type="button" id="sky-btn-toggle-view" class="sky-3d-action-btn" title="3D Model / 2D Katalog Çizimi Geçişi">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        <span id="sky-view-toggle-text">2D Çizim</span>
      </button>

      <button type="button" id="sky-btn-reset" class="sky-3d-action-btn" title="Görünümü Sıfırla">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
        <span>Sıfırla</span>
      </button>
    </div>

    <!-- Hotspot Callout Card (Floating Bottom Right) -->
    <div id="sky-3d-hotspot-card" class="sky-3d-callout-card" style="display: none;">
      <div class="sky-3d-callout-header">
        <span class="sky-3d-callout-num" id="sky-card-num">01</span>
        <h4 class="sky-3d-callout-title" id="sky-card-title">Bileşen Başlığı</h4>
        <button type="button" class="sky-3d-callout-close" onclick="hideHotspotCard()">&times;</button>
      </div>
      <p class="sky-3d-callout-desc" id="sky-card-desc">Bileşen mühendislik açıklaması.</p>
    </div>
  `,e.parentElement.style.position="relative",e.parentElement.appendChild(i);let r=i.querySelector("#sky-btn-rotate");r.addEventListener("click",()=>{t.state.autoRotate=!t.state.autoRotate,t.controls.autoRotate=t.state.autoRotate,r.classList.toggle("active",t.state.autoRotate)});let a=i.querySelector("#sky-btn-cfd");a.addEventListener("click",()=>{t.state.cfdEnabled=!t.state.cfdEnabled,a.classList.toggle("active",t.state.cfdEnabled)});let n=i.querySelector("#sky-btn-casing"),s=i.querySelector("#sky-casing-text");n.addEventListener("click",()=>{t.state.isCutaway=!t.state.isCutaway,t.setCutawayMode(t.state.isCutaway),s.textContent=t.state.isCutaway?"Şeffaf Gövde":"Kapalı Gövde",n.classList.toggle("active",!t.state.isCutaway)});let o=i.querySelector("#sky-btn-toggle-view"),h=i.querySelector("#sky-view-toggle-text"),l=document.getElementById("sky-product-3d-canvas"),d=document.getElementById("sky-product-2d-view");o.addEventListener("click",()=>{d&&l&&(window.getComputedStyle(d).display!=="none"?(d.style.display="none",l.style.display="block",h.textContent="2D Çizim",o.classList.remove("active"),t.onResize&&t.onResize()):(d.style.display="flex",l.style.display="none",h.textContent="3D Model",o.classList.add("active")))}),i.querySelector("#sky-btn-reset").addEventListener("click",()=>{t.resetCamera()})}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.hideHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>ul()):ul());/*! Bundled license information:

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
