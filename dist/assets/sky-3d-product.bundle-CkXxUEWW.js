var Xs="186",Lr={ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mh=0,ho=1,gh=2,ia=1,_h=2,ea=3,ar=0,Yt=1,ht=2,Ui=0,ra=1,$n=2,uo=3,co=4,vh=5,wr=100,Sh=101,xh=102,yh=103,Mh=104,Eh=200,Th=201,bh=202,wh=203,Sl=204,xl=205,Rh=206,Ah=207,Ch=208,Ph=209,Lh=210,Dh=211,Uh=212,Nh=213,Ih=214,Qn=0,es=1,ts=2,aa=3,is=4,rs=5,as=6,ns=7,yl=0,Oh=1,Fh=2,xi=0,Ml=1,El=2,Tl=3,js=4,bl=5,wl=6,Rl=7,Al=300,nr=301,zr=302,gn=303,_n=304,hn=306,ss=1e3,Di=1001,os=1002,Dt=1003,Bh=1004,fa=1005,Ut=1006,vn=1007,tr=1008,$t=1009,Cl=1010,Pl=1011,na=1012,Ys=1013,yi=1014,vi=1015,Mi=1016,Ks=1017,qs=1018,sa=1020,Ll=35902,Dl=35899,Ul=1021,Nl=1022,li=1023,Ii=1026,ir=1027,Il=1028,Zs=1029,sr=1030,Js=1031,$s=1033,Xa=33776,ja=33777,Ya=33778,Ka=33779,ls=35840,hs=35841,us=35842,cs=35843,ds=36196,ps=37492,fs=37496,ms=37488,gs=37489,Qa=37490,_s=37491,vs=37808,Ss=37809,xs=37810,ys=37811,Ms=37812,Es=37813,Ts=37814,bs=37815,ws=37816,Rs=37817,As=37818,Cs=37819,Ps=37820,Ls=37821,Ds=36492,Us=36494,Ns=36495,Is=36283,Os=36284,en=36285,Fs=36286,zh=3200,Bs=0,Gh=1,Xi="",ti="srgb",tn="srgb-linear",rn="linear",rt="srgb",Sn=7680,Vh=519,kh=512,Hh=513,Wh=514,Qs=515,Xh=516,jh=517,eo=518,Yh=519,Ol=35044,po="300 es",Si=2e3,oa=2001;function Kh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function an(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qh(){let e=an("canvas");return e.style.display="block",e}var fo={};function nn(...e){let t="THREE."+e.shift();console.log(t,...e)}function Fl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ie(...e){e=Fl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function qe(...e){e=Fl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Dr(...e){let t=e.join(" ");t in fo||(fo[t]=!0,Ie(...e))}function Zh(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Jh={[Qn]:es,[ts]:as,[is]:ns,[aa]:rs,[es]:Qn,[as]:ts,[ns]:is,[rs]:aa},Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,zs=180/Math.PI;function ji(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(It[e&255]+It[e>>8&255]+It[e>>16&255]+It[e>>24&255]+"-"+It[t&255]+It[t>>8&255]+"-"+It[t>>16&15|64]+It[t>>24&255]+"-"+It[i&63|128]+It[i>>8&255]+"-"+It[i>>16&255]+It[i>>24&255]+It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]).toLowerCase()}function We(e,t,i){return Math.max(t,Math.min(i,e))}function $h(e,t){return(e%t+t)%t}function xn(e,t,i){return(1-i)*e+i*t}function _i(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qh={DEG2RAD:qa},Nr,De=(Nr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nr.prototype.isVector2=!0,Nr),Yi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],m=a[n+0],d=a[n+1],g=a[n+2],y=a[n+3];if(f!==y||o!==m||u!==d||c!==g){let T=o*m+u*d+c*g+f*y;T<0&&(m=-m,d=-d,g=-g,y=-y,T=-T);let _=1-s;if(T<.9995){let p=Math.acos(T),C=Math.sin(p);_=Math.sin(_*p)/C,s=Math.sin(s*p)/C,o=o*_+m*s,u=u*_+d*s,c=c*_+g*s,f=f*_+y*s}else{o=o*_+m*s,u=u*_+d*s,c=c*_+g*s,f=f*_+y*s;let p=1/Math.sqrt(o*o+u*u+c*c+f*f);o*=p,u*=p,c*=p,f*=p}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],u=i[r+2],c=i[r+3],f=a[n],m=a[n+1],d=a[n+2],g=a[n+3];return e[t]=s*g+c*f+o*d-u*m,e[t+1]=o*g+c*m+u*f-s*d,e[t+2]=u*g+c*d+s*m-o*f,e[t+3]=c*g-s*f-o*m-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,u=s(i/2),c=s(r/2),f=s(a/2),m=o(i/2),d=o(r/2),g=o(a/2);switch(n){case"XYZ":this._x=m*c*f+u*d*g,this._y=u*d*f-m*c*g,this._z=u*c*g+m*d*f,this._w=u*c*f-m*d*g;break;case"YXZ":this._x=m*c*f+u*d*g,this._y=u*d*f-m*c*g,this._z=u*c*g-m*d*f,this._w=u*c*f+m*d*g;break;case"ZXY":this._x=m*c*f-u*d*g,this._y=u*d*f+m*c*g,this._z=u*c*g+m*d*f,this._w=u*c*f-m*d*g;break;case"ZYX":this._x=m*c*f-u*d*g,this._y=u*d*f+m*c*g,this._z=u*c*g-m*d*f,this._w=u*c*f+m*d*g;break;case"YZX":this._x=m*c*f+u*d*g,this._y=u*d*f+m*c*g,this._z=u*c*g-m*d*f,this._w=u*c*f-m*d*g;break;case"XZY":this._x=m*c*f-u*d*g,this._y=u*d*f-m*c*g,this._z=u*c*g+m*d*f,this._w=u*c*f+m*d*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],u=t[2],c=t[6],f=t[10],m=i+s+f;if(m>0){let d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(c-o)*d,this._y=(a-u)*d,this._z=(n-r)*d}else if(i>s&&i>f){let d=2*Math.sqrt(1+i-s-f);this._w=(c-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+u)/d}else if(s>f){let d=2*Math.sqrt(1+s-i-f);this._w=(a-u)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+f-i-s);this._w=(n-r)/d,this._x=(a+u)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,u=t._z,c=t._w;return this._x=i*c+n*s+r*u-a*o,this._y=r*c+n*o+a*s-i*u,this._z=a*c+n*u+i*o-r*s,this._w=n*c-i*s-r*o-a*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let u=Math.acos(s),c=Math.sin(u);o=Math.sin(o*u)/c,t=Math.sin(t*u)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ir,F=(Ir=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(mo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(mo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,u=t.w,c=2*(s*a-o*r),f=2*(o*i-n*a),m=2*(n*r-s*i);return this.x=i+u*c+s*m-o*f,this.y=r+u*f+o*c-n*m,this.z=a+u*m+n*f-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,u=i.z;return this.x=a*u-n*o,this.y=n*s-r*u,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yn.copy(this).projectOnVector(t),this.sub(yn)}reflect(t){return this.sub(yn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ir.prototype.isVector3=!0,Ir),yn=new F,mo=new Yi,Or,ze=(Or=class{constructor(t,i,r,a,n,s,o,u,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,u,c)}set(t,i,r,a,n,s,o,u,c){let f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=i,f[4]=n,f[5]=u,f[6]=r,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],u=r[6],c=r[1],f=r[4],m=r[7],d=r[2],g=r[5],y=r[8],T=a[0],_=a[3],p=a[6],C=a[1],B=a[4],l=a[7],w=a[2],R=a[5],A=a[8];return n[0]=s*T+o*C+u*w,n[3]=s*_+o*B+u*R,n[6]=s*p+o*l+u*A,n[1]=c*T+f*C+m*w,n[4]=c*_+f*B+m*R,n[7]=c*p+f*l+m*A,n[2]=d*T+g*C+y*w,n[5]=d*_+g*B+y*R,n[8]=d*p+g*l+y*A,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],u=t[6],c=t[7],f=t[8];return i*s*f-i*o*c-r*n*f+r*o*u+a*n*c-a*s*u}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],u=t[6],c=t[7],f=t[8],m=f*s-o*c,d=o*u-f*n,g=c*n-s*u,y=i*m+r*d+a*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/y;return t[0]=m*T,t[1]=(a*c-f*r)*T,t[2]=(o*r-a*s)*T,t[3]=d*T,t[4]=(f*i-a*u)*T,t[5]=(a*n-o*i)*T,t[6]=g*T,t[7]=(r*u-c*i)*T,t[8]=(s*i-r*n)*T,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let u=Math.cos(n),c=Math.sin(n);return this.set(r*u,r*c,-r*(u*s+c*o)+s+t,-a*c,a*u,-a*(-c*s+u*o)+o+i,0,0,1),this}scale(t,i){return Dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mn.makeScale(t,i)),this}rotate(t){return Dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mn.makeRotation(-t)),this}translate(t,i){return Dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Or.prototype.isMatrix3=!0,Or),Mn=new ze,go=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_o=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let e={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===rt&&(a.r=Ni(a.r),a.g=Ni(a.g),a.b=Ni(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(a.r=Ur(a.r),a.g=Ur(a.g),a.b=Ur(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Xi?rn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[tn]:{primaries:t,whitePoint:r,transfer:rn,toXYZ:go,fromXYZ:_o,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:go,fromXYZ:_o,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),e}var Ye=eu();function Ni(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ur(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var hr,tu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=an("canvas")),hr.width=e.width,hr.height=e.height;let r=hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=an("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ni(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iu=0,to=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(En(r[n].image)):a.push(En(r[n]))}else a=En(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function En(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var ru=0,Tn=new F,ai=class Za extends Ki{constructor(t=Za.DEFAULT_IMAGE,i=Za.DEFAULT_MAPPING,r=Di,a=Di,n=Ut,s=tr,o=li,u=$t,c=Za.DEFAULT_ANISOTROPY,f=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ji(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=u,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tn).x}get height(){return this.source.getSize(Tn).y}get depth(){return this.source.getSize(Tn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ie(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case os:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case os:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Al;ai.DEFAULT_ANISOTROPY=1;var Fr,xt=(Fr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],u=s[4],c=s[8],f=s[1],m=s[5],d=s[9],g=s[2],y=s[6],T=s[10];if(Math.abs(u-f)<.01&&Math.abs(c-g)<.01&&Math.abs(d-y)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+g)<.1&&Math.abs(d+y)<.1&&Math.abs(o+m+T-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,C=(m+1)/2,B=(T+1)/2,l=(u+f)/4,w=(c+g)/4,R=(d+y)/4;return p>C&&p>B?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=l/r,n=w/r):C>B?C<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(C),r=l/a,n=R/a):B<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(B),r=w/n,a=R/n),this.set(r,a,n,i),this}let _=Math.sqrt((y-d)*(y-d)+(c-g)*(c-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(y-d)/_,this.y=(c-g)/_,this.z=(f-u)/_,this.w=Math.acos((o+m+T-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this.w=We(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this.w=We(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fr.prototype.isVector4=!0,Fr),au=class extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new ai(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new to(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends au{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Bl=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nu=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rr,gt=(rr=class{constructor(t,i,r,a,n,s,o,u,c,f,m,d,g,y,T,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,u,c,f,m,d,g,y,T,_)}set(t,i,r,a,n,s,o,u,c,f,m,d,g,y,T,_){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=u,p[2]=c,p[6]=f,p[10]=m,p[14]=d,p[3]=g,p[7]=y,p[11]=T,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/ur.setFromMatrixColumn(t,0).length(),n=1/ur.setFromMatrixColumn(t,1).length(),s=1/ur.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),u=Math.cos(a),c=Math.sin(a),f=Math.cos(n),m=Math.sin(n);if(t.order==="XYZ"){let d=s*f,g=s*m,y=o*f,T=o*m;i[0]=u*f,i[4]=-u*m,i[8]=c,i[1]=g+y*c,i[5]=d-T*c,i[9]=-o*u,i[2]=T-d*c,i[6]=y+g*c,i[10]=s*u}else if(t.order==="YXZ"){let d=u*f,g=u*m,y=c*f,T=c*m;i[0]=d+T*o,i[4]=y*o-g,i[8]=s*c,i[1]=s*m,i[5]=s*f,i[9]=-o,i[2]=g*o-y,i[6]=T+d*o,i[10]=s*u}else if(t.order==="ZXY"){let d=u*f,g=u*m,y=c*f,T=c*m;i[0]=d-T*o,i[4]=-s*m,i[8]=y+g*o,i[1]=g+y*o,i[5]=s*f,i[9]=T-d*o,i[2]=-s*c,i[6]=o,i[10]=s*u}else if(t.order==="ZYX"){let d=s*f,g=s*m,y=o*f,T=o*m;i[0]=u*f,i[4]=y*c-g,i[8]=d*c+T,i[1]=u*m,i[5]=T*c+d,i[9]=g*c-y,i[2]=-c,i[6]=o*u,i[10]=s*u}else if(t.order==="YZX"){let d=s*u,g=s*c,y=o*u,T=o*c;i[0]=u*f,i[4]=T-d*m,i[8]=y*m+g,i[1]=m,i[5]=s*f,i[9]=-o*f,i[2]=-c*f,i[6]=g*m+y,i[10]=d-T*m}else if(t.order==="XZY"){let d=s*u,g=s*c,y=o*u,T=o*c;i[0]=u*f,i[4]=-m,i[8]=c*f,i[1]=d*m+T,i[5]=s*f,i[9]=g*m-y,i[2]=y*m-g,i[6]=o*f,i[10]=T*m+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ou)}lookAt(t,i,r){let a=this.elements;return Zt.subVectors(t,i),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Gi.crossVectors(r,Zt),Gi.lengthSq()===0&&(Math.abs(r.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Gi.crossVectors(r,Zt)),Gi.normalize(),ma.crossVectors(Zt,Gi),a[0]=Gi.x,a[4]=ma.x,a[8]=Zt.x,a[1]=Gi.y,a[5]=ma.y,a[9]=Zt.y,a[2]=Gi.z,a[6]=ma.z,a[10]=Zt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],u=r[8],c=r[12],f=r[1],m=r[5],d=r[9],g=r[13],y=r[2],T=r[6],_=r[10],p=r[14],C=r[3],B=r[7],l=r[11],w=r[15],R=a[0],A=a[4],h=a[8],S=a[12],Y=a[1],N=a[5],O=a[9],Q=a[13],I=a[2],V=a[6],re=a[10],X=a[14],fe=a[3],Z=a[7],te=a[11],ne=a[15];return n[0]=s*R+o*Y+u*I+c*fe,n[4]=s*A+o*N+u*V+c*Z,n[8]=s*h+o*O+u*re+c*te,n[12]=s*S+o*Q+u*X+c*ne,n[1]=f*R+m*Y+d*I+g*fe,n[5]=f*A+m*N+d*V+g*Z,n[9]=f*h+m*O+d*re+g*te,n[13]=f*S+m*Q+d*X+g*ne,n[2]=y*R+T*Y+_*I+p*fe,n[6]=y*A+T*N+_*V+p*Z,n[10]=y*h+T*O+_*re+p*te,n[14]=y*S+T*Q+_*X+p*ne,n[3]=C*R+B*Y+l*I+w*fe,n[7]=C*A+B*N+l*V+w*Z,n[11]=C*h+B*O+l*re+w*te,n[15]=C*S+B*Q+l*X+w*ne,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],u=t[9],c=t[13],f=t[2],m=t[6],d=t[10],g=t[14],y=t[3],T=t[7],_=t[11],p=t[15],C=u*g-c*d,B=o*g-c*m,l=o*d-u*m,w=s*g-c*f,R=s*d-u*f,A=s*m-o*f;return i*(T*C-_*B+p*l)-r*(y*C-_*w+p*R)+a*(y*B-T*w+p*A)-n*(y*l-T*R+_*A)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],u=t[2],c=t[6],f=t[10];return i*(s*f-o*c)-r*(n*f-o*u)+a*(n*c-s*u)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],u=t[6],c=t[7],f=t[8],m=t[9],d=t[10],g=t[11],y=t[12],T=t[13],_=t[14],p=t[15],C=i*o-r*s,B=i*u-a*s,l=i*c-n*s,w=r*u-a*o,R=r*c-n*o,A=a*c-n*u,h=f*T-m*y,S=f*_-d*y,Y=f*p-g*y,N=m*_-d*T,O=m*p-g*T,Q=d*p-g*_,I=C*Q-B*O+l*N+w*Y-R*S+A*h;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(o*Q-u*O+c*N)*V,t[1]=(a*O-r*Q-n*N)*V,t[2]=(T*A-_*R+p*w)*V,t[3]=(d*R-m*A-g*w)*V,t[4]=(u*Y-s*Q-c*S)*V,t[5]=(i*Q-a*Y+n*S)*V,t[6]=(_*l-y*A-p*B)*V,t[7]=(f*A-d*l+g*B)*V,t[8]=(s*O-o*Y+c*h)*V,t[9]=(r*Y-i*O-n*h)*V,t[10]=(y*R-T*l+p*C)*V,t[11]=(m*l-f*R-g*C)*V,t[12]=(o*S-s*N-u*h)*V,t[13]=(i*N-r*S+a*h)*V,t[14]=(T*B-y*w-_*C)*V,t[15]=(f*w-m*B+d*C)*V,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,u=t.z,c=n*s,f=n*o;return this.set(c*s+r,c*o-a*u,c*u+a*o,0,c*o+a*u,f*o+r,f*u-a*s,0,c*u-a*o,f*u+a*s,n*u*u+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,u=i._w,c=n+n,f=s+s,m=o+o,d=n*c,g=n*f,y=n*m,T=s*f,_=s*m,p=o*m,C=u*c,B=u*f,l=u*m,w=r.x,R=r.y,A=r.z;return a[0]=(1-(T+p))*w,a[1]=(g+l)*w,a[2]=(y-B)*w,a[3]=0,a[4]=(g-l)*R,a[5]=(1-(d+p))*R,a[6]=(_+C)*R,a[7]=0,a[8]=(y+B)*A,a[9]=(_-C)*A,a[10]=(1-(d+T))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=ur.set(a[0],a[1],a[2]).length(),o=ur.set(a[4],a[5],a[6]).length(),u=ur.set(a[8],a[9],a[10]).length();n<0&&(s=-s),ni.copy(this);let c=1/s,f=1/o,m=1/u;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=f,ni.elements[5]*=f,ni.elements[6]*=f,ni.elements[8]*=m,ni.elements[9]*=m,ni.elements[10]*=m,i.setFromRotationMatrix(ni),r.x=s,r.y=o,r.z=u,this}makePerspective(t,i,r,a,n,s,o=Si,u=!1){let c=this.elements,f=2*n/(i-t),m=2*n/(r-a),d=(i+t)/(i-t),g=(r+a)/(r-a),y,T;if(u)y=n/(s-n),T=s*n/(s-n);else if(o===Si)y=-(s+n)/(s-n),T=-2*s*n/(s-n);else if(o===oa)y=-s/(s-n),T=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Si,u=!1){let c=this.elements,f=2/(i-t),m=2/(r-a),d=-(i+t)/(i-t),g=-(r+a)/(r-a),y,T;if(u)y=1/(s-n),T=s/(s-n);else if(o===Si)y=-2/(s-n),T=-(s+n)/(s-n);else if(o===oa)y=-1/(s-n),T=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=y,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},rr.prototype.isMatrix4=!0,rr),ur=new F,ni=new gt,su=new F(0,0,0),ou=new F(1,1,1),Gi=new F,ma=new F,Zt=new F,vo=new gt,So=new Yi,Gr=class zl{constructor(t=0,i=0,r=0,a=zl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],u=a[1],c=a[5],f=a[9],m=a[2],d=a[6],g=a[10];switch(i){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-m,n),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,n));break;case"ZYX":this._y=Math.asin(-We(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(u,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,n)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return So.setFromEuler(this),this.setFromQuaternion(So,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gr.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lu=0,xo=new F,cr=new Yi,bi=new gt,ga=new F,Wr=new F,hu=new F,uu=new Yi,yo=new F(1,0,0),Mo=new F(0,1,0),Eo=new F(0,0,1),To={type:"added"},cu={type:"removed"},dr={type:"childadded",child:null},bn={type:"childremoved",child:null},kt=class Ja extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ja.DEFAULT_UP.clone();let t=new F,i=new Gr,r=new Yi,a=new F(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new gt},normalMatrix:{value:new ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ja.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ja.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(yo,t)}rotateY(t){return this.rotateOnAxis(Mo,t)}rotateZ(t){return this.rotateOnAxis(Eo,t)}translateOnAxis(t,i){return xo.copy(t).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yo,t)}translateY(t){return this.translateOnAxis(Mo,t)}translateZ(t){return this.translateOnAxis(Eo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ga.copy(t):ga.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Wr,ga,this.up):bi.lookAt(ga,Wr,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),cr.setFromRotationMatrix(bi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(qe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(To),dr.child=t,this.dispatchEvent(dr),dr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cu),bn.child=t,this.dispatchEvent(bn),bn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(To),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let u=o.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){let m=u[c];n(t.shapes,m)}else n(t.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let u=0,c=this.material.length;u<c;u++)o.push(n(t.materials,this.material[u]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let u=this.animations[o];a.animations.push(n(t.animations,u))}}if(i){let o=s(t.geometries),u=s(t.materials),c=s(t.textures),f=s(t.images),m=s(t.shapes),d=s(t.skeletons),g=s(t.animations),y=s(t.nodes);o.length>0&&(r.geometries=o),u.length>0&&(r.materials=u),c.length>0&&(r.textures=c),f.length>0&&(r.images=f),m.length>0&&(r.shapes=m),d.length>0&&(r.skeletons=d),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=a,r;function s(o){let u=[];for(let c in o){let f=o[c];delete f.metadata,u.push(f)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new F(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},du={type:"move"},wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){n=!0;for(let y of e.hand.values()){let T=t.getJointPose(y,i),_=this._getHandJoint(u,y);T!==null&&(_.matrix.fromArray(T.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=T.radius),_.visible=T!==null}let c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],m=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&m>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(du)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),u!==null&&(u.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Rn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=$h(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Rn(n,a,e+1/3),this.g=Rn(n,a,e),this.b=Rn(n,a,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=ti){function i(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){let i=Gl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ye.workingToColorSpace(Ot.copy(this),e),Math.round(We(Ot.r*255,0,255))*65536+Math.round(We(Ot.g*255,0,255))*256+Math.round(We(Ot.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ot.copy(this),t);let i=Ot.r,r=Ot.g,a=Ot.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,u,c=(s+n)/2;if(s===n)o=0,u=0;else{let f=n-s;switch(u=c<=.5?f/(n+s):f/(2-n-s),n){case i:o=(r-a)/f+(r<a?6:0);break;case r:o=(a-i)/f+2;break;case a:o=(i-r)/f+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=ti){Ye.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,r=Ot.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(_a);let i=xn(Vi.h,_a.h,t),r=xn(Vi.s,_a.s,t),a=xn(Vi.l,_a.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Fe;Fe.NAMES=Gl;var pu=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentIntensity=1,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new F,wi=new F,An=new F,Ri=new F,pr=new F,fr=new F,bo=new F,Cn=new F,Pn=new F,Ln=new F,Dn=new xt,Un=new xt,Nn=new xt,Rr=class Ar{constructor(t=new F,i=new F,r=new F){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),si.subVectors(t,i),a.cross(si);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){si.subVectors(a,i),wi.subVectors(r,i),An.subVectors(t,i);let s=si.dot(si),o=si.dot(wi),u=si.dot(An),c=wi.dot(wi),f=wi.dot(An),m=s*c-o*o;if(m===0)return n.set(0,0,0),null;let d=1/m,g=(c*u-o*f)*d,y=(s*f-o*u)*d;return n.set(1-g-y,y,g)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,i,r,a,n,s,o,u){return this.getBarycoord(t,i,r,a,Ri)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(n,Ri.x),u.addScaledVector(s,Ri.y),u.addScaledVector(o,Ri.z),u)}static getInterpolatedAttribute(t,i,r,a,n,s){return Dn.setScalar(0),Un.setScalar(0),Nn.setScalar(0),Dn.fromBufferAttribute(t,i),Un.fromBufferAttribute(t,r),Nn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Dn,n.x),s.addScaledVector(Un,n.y),s.addScaledVector(Nn,n.z),s}static isFrontFacing(t,i,r,a){return si.subVectors(r,i),wi.subVectors(t,i),si.cross(wi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),si.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ar.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ar.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Ar.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Ar.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ar.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;pr.subVectors(a,r),fr.subVectors(n,r),Cn.subVectors(t,r);let u=pr.dot(Cn),c=fr.dot(Cn);if(u<=0&&c<=0)return i.copy(r);Pn.subVectors(t,a);let f=pr.dot(Pn),m=fr.dot(Pn);if(f>=0&&m<=f)return i.copy(a);let d=u*m-f*c;if(d<=0&&u>=0&&f<=0)return s=u/(u-f),i.copy(r).addScaledVector(pr,s);Ln.subVectors(t,n);let g=pr.dot(Ln),y=fr.dot(Ln);if(y>=0&&g<=y)return i.copy(n);let T=g*c-u*y;if(T<=0&&c>=0&&y<=0)return o=c/(c-y),i.copy(r).addScaledVector(fr,o);let _=f*y-g*m;if(_<=0&&m-f>=0&&g-y>=0)return bo.subVectors(n,a),o=(m-f)/(m-f+(g-y)),i.copy(a).addScaledVector(bo,o);let p=1/(_+T+d);return s=T*p,o=d*p,i.copy(r).addScaledVector(pr,s).addScaledVector(fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,oi):oi.fromBufferAttribute(a,n),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Sa.subVectors(this.max,Xr),mr.subVectors(e.a,Xr),gr.subVectors(e.b,Xr),_r.subVectors(e.c,Xr),ki.subVectors(gr,mr),Hi.subVectors(_r,gr),Zi.subVectors(mr,_r);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-Zi.z,Zi.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,Zi.z,0,-Zi.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-Zi.y,Zi.x,0];return!In(t,mr,gr,_r,Sa)||(t=[1,0,0,0,1,0,0,0,1],!In(t,mr,gr,_r,Sa))?!1:(xa.crossVectors(ki,Hi),t=[xa.x,xa.y,xa.z],In(t,mr,gr,_r,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new F,new F,new F,new F,new F,new F,new F,new F],oi=new F,va=new kr,mr=new F,gr=new F,_r=new F,ki=new F,Hi=new F,Zi=new F,Xr=new F,Sa=new F,xa=new F,Ji=new F;function In(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Ji.fromArray(e,n);let o=a.x*Math.abs(Ji.x)+a.y*Math.abs(Ji.y)+a.z*Math.abs(Ji.z),u=t.dot(Ji),c=i.dot(Ji),f=r.dot(Ji);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>o)return!1}return!0}var yt=new F,ya=new De,fu=0,ri=class extends Ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=class extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}},kl=class extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Tt=class extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}},mu=new kr,jr=new F,On=new F,ha=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(On.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(On)),this.expandByPoint(jr.copy(e.center).sub(On))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gu=0,ei=new gt,Fn=new kt,vr=new F,Jt=new kr,Yr=new kr,Rt=new F,Kt=class Hl extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?kl:Vl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new ze().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,i,r){return ei.makeTranslation(t,i,r),this.applyMatrix4(ei),this}scale(t,i,r){return ei.makeScale(t,i,r),this.applyMatrix4(ei),this}lookAt(t){return Fn.lookAt(t),Fn.updateMatrix(),this.applyMatrix4(Fn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Tt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let r=this.boundingSphere.center;if(Jt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Jt.min,Yr.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,Yr.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(Yr.min),Jt.expandByPoint(Yr.max))}Jt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Rt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Rt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],u=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Rt.fromBufferAttribute(o,c),u&&(vr.fromBufferAttribute(t,c),Rt.add(vr)),a=Math.max(a,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ri(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],u=[];for(let h=0;h<r.count;h++)o[h]=new F,u[h]=new F;let c=new F,f=new F,m=new F,d=new De,g=new De,y=new De,T=new F,_=new F;function p(h,S,Y){c.fromBufferAttribute(r,h),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,Y),d.fromBufferAttribute(n,h),g.fromBufferAttribute(n,S),y.fromBufferAttribute(n,Y),f.sub(c),m.sub(c),g.sub(d),y.sub(d);let N=1/(g.x*y.y-y.x*g.y);isFinite(N)&&(T.copy(f).multiplyScalar(y.y).addScaledVector(m,-g.y).multiplyScalar(N),_.copy(m).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(N),o[h].add(T),o[S].add(T),o[Y].add(T),u[h].add(_),u[S].add(_),u[Y].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let h=0,S=C.length;h<S;++h){let Y=C[h],N=Y.start,O=Y.count;for(let Q=N,I=N+O;Q<I;Q+=3)p(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let B=new F,l=new F,w=new F,R=new F;function A(h){w.fromBufferAttribute(a,h),R.copy(w);let S=o[h];B.copy(S),B.sub(w.multiplyScalar(w.dot(S))).normalize(),l.crossVectors(R,S);let Y=l.dot(u[h])<0?-1:1;s.setXYZW(h,B.x,B.y,B.z,Y)}for(let h=0,S=C.length;h<S;++h){let Y=C[h],N=Y.start,O=Y.count;for(let Q=N,I=N+O;Q<I;Q+=3)A(t.getX(Q+0)),A(t.getX(Q+1)),A(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,g=r.count;d<g;d++)r.setXYZ(d,0,0,0);let a=new F,n=new F,s=new F,o=new F,u=new F,c=new F,f=new F,m=new F;if(t)for(let d=0,g=t.count;d<g;d+=3){let y=t.getX(d+0),T=t.getX(d+1),_=t.getX(d+2);a.fromBufferAttribute(i,y),n.fromBufferAttribute(i,T),s.fromBufferAttribute(i,_),f.subVectors(s,n),m.subVectors(a,n),f.cross(m),o.fromBufferAttribute(r,y),u.fromBufferAttribute(r,T),c.fromBufferAttribute(r,_),o.add(f),u.add(f),c.add(f),r.setXYZ(y,o.x,o.y,o.z),r.setXYZ(T,u.x,u.y,u.z),r.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,g=i.count;d<g;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),f.subVectors(s,n),m.subVectors(a,n),f.cross(m),r.setXYZ(d+0,f.x,f.y,f.z),r.setXYZ(d+1,f.x,f.y,f.z),r.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rt.fromBufferAttribute(t,i),Rt.normalize(),t.setXYZ(i,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function t(o,u){let c=o.array,f=o.itemSize,m=o.normalized,d=new c.constructor(u.length*f),g=0,y=0;for(let T=0,_=u.length;T<_;T++){o.isInterleavedBufferAttribute?g=u[T]*o.data.stride+o.offset:g=u[T]*f;for(let p=0;p<f;p++)d[y++]=c[g++]}return new ri(d,f,m)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Hl,r=this.index.array,a=this.attributes;for(let o in a){let u=a[o],c=t(u,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let u=[],c=n[o];for(let f=0,m=c.length;f<m;f++){let d=c[f],g=t(d,r);u.push(g)}i.morphAttributes[o]=u}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,u=s.length;o<u;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let u in r){let c=r[u];t.data.attributes[u]=c.toJSON(t.data)}let a={},n=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],f=[];for(let m=0,d=c.length;m<d;m++){let g=c[m];f.push(g.toJSON(t.data))}f.length>0&&(a[u]=f,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let f=a[c];this.setAttribute(c,f.clone(i))}let n=t.morphAttributes;for(let c in n){let f=[],m=n[c];for(let d=0,g=m.length;d<g;d++)f.push(m[d].clone(i));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,f=s.length;c<f;c++){let m=s[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_u=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Gt=new F,wo=class Wl{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Gt.fromBufferAttribute(this,i),Gt.applyMatrix4(t),this.setXYZ(i,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Gt.fromBufferAttribute(this,i),Gt.applyNormalMatrix(t),this.setXYZ(i,Gt.x,Gt.y,Gt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Gt.fromBufferAttribute(this,i),Gt.transformDirection(t),this.setXYZ(i,Gt.x,Gt.y,Gt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=_i(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ot(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=_i(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=_i(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=_i(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=_i(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=ot(i,this.array),r=ot(r,this.array),a=ot(a,this.array),n=ot(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){nn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new ri(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){nn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bn=new F,vu=new F,Su=new ze,Li=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Bn.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Bn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Su.getNormalMatrix(e),r=this.coplanarPoint(Bn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xu=0,Oi=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=ra,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=xl,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sn,this.stencilZFail=Sn,this.stencilZPass=Sn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xl=class extends Oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Kr=new F,xr=new F,yr=new F,Mr=new De,qr=new De,jl=new gt,Ma=new F,Zr=new F,Ea=new F,Ro=new De,zn=new De,Ao=new De,yu=class extends kt{constructor(e=new Xl){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _u(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new wo(i,3,0,!1)),Sr.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),jl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-yr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;Ta(Ma.set(-.5,-.5,0),yr,n,xr,r,a),Ta(Zr.set(.5,-.5,0),yr,n,xr,r,a),Ta(Ea.set(.5,.5,0),yr,n,xr,r,a),Ro.set(0,0),zn.set(1,0),Ao.set(1,1);let s=e.ray.intersectTriangle(Ma,Zr,Ea,!1,Kr);if(s===null&&(Ta(Zr.set(-.5,.5,0),yr,n,xr,r,a),zn.set(0,1),s=e.ray.intersectTriangle(Ma,Ea,Zr,!1,Kr),s===null))return;let o=e.ray.origin.distanceTo(Kr);o<e.near||o>e.far||t.push({distance:o,point:Kr.clone(),uv:Rr.getInterpolation(Kr,Ma,Zr,Ea,Ro,zn,Ao,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ta(e,t,i,r,a,n){Mr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(qr.x=n*Mr.x-a*Mr.y,qr.y=a*Mr.x+n*Mr.y):qr.copy(Mr),e.copy(t),e.x+=qr.x,e.y+=qr.y,e.applyMatrix4(jl)}var Ci=new F,Gn=new F,ba=new F,wa=new F,ua=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gn.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),wa.copy(this.origin).sub(Gn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ba),s=wa.dot(this.direction),o=-wa.dot(ba),u=wa.lengthSq(),c=Math.abs(1-n*n),f,m,d,g;if(c>0)if(f=n*o-s,m=n*s-o,g=a*c,f>=0)if(m>=-g)if(m<=g){let y=1/c;f*=y,m*=y,d=f*(f+n*m+2*s)+m*(n*f+m+2*o)+u}else m=a,f=Math.max(0,-(n*m+s)),d=-f*f+m*(m+2*o)+u;else m=-a,f=Math.max(0,-(n*m+s)),d=-f*f+m*(m+2*o)+u;else m<=-g?(f=Math.max(0,-(-n*a+s)),m=f>0?-a:Math.min(Math.max(-a,-o),a),d=-f*f+m*(m+2*o)+u):m<=g?(f=0,m=Math.min(Math.max(-a,-o),a),d=m*(m+2*o)+u):(f=Math.max(0,-(n*a+s)),m=f>0?a:Math.min(Math.max(-a,-o),a),d=-f*f+m*(m+2*o)+u);else m=n>0?-a:a,f=Math.max(0,-(n*m+s)),d=-f*f+m*(m+2*o)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gn).addScaledVector(ba,m),d}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),c>=0?(a=(e.min.y-m.y)*c,n=(e.max.y-m.y)*c):(a=(e.max.y-m.y)*c,n=(e.min.y-m.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),f>=0?(s=(e.min.z-m.z)*f,o=(e.max.z-m.z)*f):(s=(e.max.z-m.z)*f,o=(e.min.z-m.z)*f),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,u=s.y,c=s.z,f=e.x-n.x,m=e.y-n.y,d=e.z-n.z,g=t.x-n.x,y=t.y-n.y,T=t.z-n.z,_=i.x-n.x,p=i.y-n.y,C=i.z-n.z,B=Math.abs(o),l=Math.abs(u),w=Math.abs(c),R,A,h,S,Y,N,O,Q,I,V,re,X;if(B>=l&&B>=w?(h=o,N=f,I=g,X=_,o>=0?(R=u,A=c,S=m,Y=d,O=y,Q=T,V=p,re=C):(R=c,A=u,S=d,Y=m,O=T,Q=y,V=C,re=p)):l>=w?(h=u,N=m,I=y,X=p,u>=0?(R=c,A=o,S=d,Y=f,O=T,Q=g,V=C,re=_):(R=o,A=c,S=f,Y=d,O=g,Q=T,V=_,re=C)):(h=c,N=d,I=T,X=C,c>=0?(R=o,A=u,S=f,Y=m,O=g,Q=y,V=_,re=p):(R=u,A=o,S=m,Y=f,O=y,Q=g,V=p,re=_)),h===0)return null;let fe=R/h,Z=A/h,te=1/h,ne=S-fe*N,Be=Y-Z*N,Ae=O-fe*I,Qe=Q-Z*I,Oe=V-fe*X,$=re-Z*X,oe=Oe*Qe-$*Ae,ce=ne*$-Be*Oe,Ce=Ae*Be-Qe*ne;if(r){if(oe<0||ce<0||Ce<0)return null}else if((oe<0||ce<0||Ce<0)&&(oe>0||ce>0||Ce>0))return null;let Le=oe+ce+Ce;if(Le===0)return null;let xe=te*(oe*N+ce*I+Ce*X);return(Le>0?xe<0:xe>0)?null:this.at(xe/Le,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Co=new gt,$i=new ua,Ra=new ha,Po=new F,Aa=new F,Ca=new F,Pa=new F,Vn=new F,La=new F,Lo=new F,Da=new F,At=class extends kt{constructor(e=new Kt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){La.set(0,0,0);for(let o=0,u=a.length;o<u;o++){let c=s[o],f=a[o];c!==0&&(Vn.fromBufferAttribute(f,e),n?La.addScaledVector(Vn,c):La.addScaledVector(Vn.sub(t),c))}t.add(La)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(a),$i.copy(e.ray).recast(e.near),!(Ra.containsPoint($i.origin)===!1&&($i.intersectSphere(Ra,Po)===null||$i.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Co.copy(a).invert(),$i.copy(e.ray).applyMatrix4(Co),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,f=a.attributes.normal,m=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let g=0,y=m.length;g<y;g++){let T=m[g],_=n[T.materialIndex],p=Math.max(T.start,d.start),C=Math.min(s.count,Math.min(T.start+T.count,d.start+d.count));for(let B=p,l=C;B<l;B+=3){let w=s.getX(B),R=s.getX(B+1),A=s.getX(B+2);r=Ua(this,_,e,i,u,c,f,w,R,A),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),y=Math.min(s.count,d.start+d.count);for(let T=g,_=y;T<_;T+=3){let p=s.getX(T),C=s.getX(T+1),B=s.getX(T+2);r=Ua(this,n,e,i,u,c,f,p,C,B),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let g=0,y=m.length;g<y;g++){let T=m[g],_=n[T.materialIndex],p=Math.max(T.start,d.start),C=Math.min(o.count,Math.min(T.start+T.count,d.start+d.count));for(let B=p,l=C;B<l;B+=3){let w=B,R=B+1,A=B+2;r=Ua(this,_,e,i,u,c,f,w,R,A),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let T=g,_=y;T<_;T+=3){let p=T,C=T+1,B=T+2;r=Ua(this,n,e,i,u,c,f,p,C,B),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}}};function Mu(e,t,i,r,a,n,s,o){let u;if(t.side===Yt?u=r.intersectTriangle(s,n,a,!0,o):u=r.intersectTriangle(a,n,s,t.side===ar,o),u===null)return null;Da.copy(o),Da.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Da);return c<i.near||c>i.far?null:{distance:c,point:Da.clone(),object:e}}function Ua(e,t,i,r,a,n,s,o,u,c){e.getVertexPosition(o,Aa),e.getVertexPosition(u,Ca),e.getVertexPosition(c,Pa);let f=Mu(e,t,i,r,Aa,Ca,Pa,Lo);if(f){let m=new F;Rr.getBarycoord(Lo,Aa,Ca,Pa,m),a&&(f.uv=Rr.getInterpolatedAttribute(a,o,u,c,m,new De)),n&&(f.uv1=Rr.getInterpolatedAttribute(n,o,u,c,m,new De)),s&&(f.normal=Rr.getInterpolatedAttribute(s,o,u,c,m,new F),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));let d={a:o,b:u,c,normal:new F,materialIndex:0};Rr.getNormal(Aa,Ca,Pa,d.normal),f.face=d,f.barycoord=m}return f}var Eu=class extends ai{constructor(e=null,t=1,i=1,r,a,n,s,o,u=Dt,c=Dt,f,m){super(null,n,s,o,u,c,r,a,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qi=new ha,Tu=new De(.5,.5),Na=new F,ro=class{constructor(e=new Li,t=new Li,i=new Li,r=new Li,a=new Li,n=new Li){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],u=a[3],c=a[4],f=a[5],m=a[6],d=a[7],g=a[8],y=a[9],T=a[10],_=a[11],p=a[12],C=a[13],B=a[14],l=a[15];if(r[0].setComponents(u-n,d-c,_-g,l-p).normalize(),r[1].setComponents(u+n,d+c,_+g,l+p).normalize(),r[2].setComponents(u+s,d+f,_+y,l+C).normalize(),r[3].setComponents(u-s,d-f,_-y,l-C).normalize(),i)r[4].setComponents(o,m,T,B).normalize(),r[5].setComponents(u-o,d-m,_-T,l-B).normalize();else if(r[4].setComponents(u-o,d-m,_-T,l-B).normalize(),t===Si)r[5].setComponents(u+o,d+m,_+T,l+B).normalize();else if(t===oa)r[5].setComponents(o,m,T,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=Tu.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yl=class extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},on=new F,ln=new F,Do=new gt,Jr=new ua,Ia=new ha,kn=new F,Uo=new F,bu=class extends kt{constructor(e=new Kt,t=new Yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)on.fromBufferAttribute(t,r-1),ln.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=on.distanceTo(ln);e.setAttribute("lineDistance",new Tt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=a,e.ray.intersectsSphere(Ia)===!1)return;Do.copy(r).invert(),Jr.copy(e.ray).applyMatrix4(Do);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let m=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let g=m,y=d-1;g<y;g+=u){let T=c.getX(g),_=c.getX(g+1),p=Oa(this,e,Jr,o,T,_,g);p&&t.push(p)}if(this.isLineLoop){let g=c.getX(d-1),y=c.getX(m),T=Oa(this,e,Jr,o,g,y,d-1);T&&t.push(T)}}else{let m=Math.max(0,n.start),d=Math.min(f.count,n.start+n.count);for(let g=m,y=d-1;g<y;g+=u){let T=Oa(this,e,Jr,o,g,g+1,g);T&&t.push(T)}if(this.isLineLoop){let g=Oa(this,e,Jr,o,d-1,m,d-1);g&&t.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Oa(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(on.fromBufferAttribute(o,a),ln.fromBufferAttribute(o,n),i.distanceSqToSegment(on,ln,kn,Uo)>r)return;kn.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(kn);if(!(u<t.near||u>t.far))return{distance:u,point:Uo.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var No=new F,Io=new F,wu=class extends bu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)No.fromBufferAttribute(t,r),Io.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+No.distanceTo(Io);e.setAttribute("lineDistance",new Tt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Kl=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Oo=new gt,Gs=new ua,Fa=new ha,Ba=new F,Ru=class extends kt{constructor(e=new Kt,t=new Kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=a,e.ray.intersectsSphere(Fa)===!1)return;Oo.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Oo);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,u=i.index,c=i.attributes.position;if(u!==null){let f=Math.max(0,n.start),m=Math.min(u.count,n.start+n.count);for(let d=f,g=m;d<g;d++){let y=u.getX(d);Ba.fromBufferAttribute(c,y),Fo(Ba,y,o,r,e,t,this)}}else{let f=Math.max(0,n.start),m=Math.min(c.count,n.start+n.count);for(let d=f,g=m;d<g;d++)Ba.fromBufferAttribute(c,d),Fo(Ba,d,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Fo(e,t,i,r,a,n,s){let o=Gs.distanceSqToPoint(e);if(o<i){let u=new F;Gs.closestPointToPoint(e,u),u.applyMatrix4(r);let c=a.ray.origin.distanceTo(u);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ql=class extends ai{constructor(e=[],t=nr,i,r,a,n,s,o,u,c){super(e,t,i,r,a,n,s,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bo=class extends ai{constructor(e,t,i,r,a,n,s,o,u){super(e,t,i,r,a,n,s,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},la=class extends ai{constructor(e,t,i=yi,r,a,n,s=Dt,o=Dt,u,c=Ii,f=1){if(c!==Ii&&c!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:f};super(m,r,a,n,s,o,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Au=class extends la{constructor(e,t=yi,i=nr,r,a,n=Dt,s=Dt,o,u=Ii){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zl=class extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},un=class Jl extends Kt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let u=[],c=[],f=[],m=[],d=0,g=0;y("z","y","x",-1,-1,r,i,t,s,n,0),y("z","y","x",1,-1,r,i,-t,s,n,1),y("x","z","y",1,1,t,r,i,a,s,2),y("x","z","y",1,-1,t,r,-i,a,s,3),y("x","y","z",1,-1,t,i,r,a,n,4),y("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(u),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2));function y(T,_,p,C,B,l,w,R,A,h,S){let Y=l/A,N=w/h,O=l/2,Q=w/2,I=R/2,V=A+1,re=h+1,X=0,fe=0,Z=new F;for(let te=0;te<re;te++){let ne=te*N-Q;for(let Be=0;Be<V;Be++){let Ae=Be*Y-O;Z[T]=Ae*C,Z[_]=ne*B,Z[p]=I,c.push(Z.x,Z.y,Z.z),Z[T]=0,Z[_]=0,Z[p]=R>0?1:-1,f.push(Z.x,Z.y,Z.z),m.push(Be/A),m.push(1-te/h),X+=1}}for(let te=0;te<h;te++)for(let ne=0;ne<A;ne++){let Be=d+ne+V*te,Ae=d+ne+V*(te+1),Qe=d+(ne+1)+V*(te+1),Oe=d+(ne+1)+V*te;u.push(Be,Ae,Oe),u.push(Ae,Qe,Oe),fe+=6}o.addGroup(g,fe,S),g+=fe,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vs=class $l extends Kt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:u};let c=this;a=Math.floor(a),n=Math.floor(n);let f=[],m=[],d=[],g=[],y=0,T=[],_=r/2,p=0;C(),s===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(g,2));function C(){let l=new F,w=new F,R=0,A=(i-t)/r;for(let h=0;h<=n;h++){let S=[],Y=h/n,N=Y*(i-t)+t;for(let O=0;O<=a;O++){let Q=O/a,I=Q*u+o,V=Math.sin(I),re=Math.cos(I);w.x=N*V,w.y=-Y*r+_,w.z=N*re,m.push(w.x,w.y,w.z),l.set(V,A,re).normalize(),d.push(l.x,l.y,l.z),g.push(Q,1-Y),S.push(y++)}T.push(S)}for(let h=0;h<a;h++)for(let S=0;S<n;S++){let Y=T[S][h],N=T[S+1][h],O=T[S+1][h+1],Q=T[S][h+1];(t>0||S!==0)&&(f.push(Y,N,Q),R+=3),(i>0||S!==n-1)&&(f.push(N,O,Q),R+=3)}c.addGroup(p,R,0),p+=R}function B(l){let w=y,R=new De,A=new F,h=0,S=l===!0?t:i,Y=l===!0?1:-1;for(let O=1;O<=a;O++)m.push(0,_*Y,0),d.push(0,Y,0),g.push(.5,.5),y++;let N=y;for(let O=0;O<=a;O++){let Q=O/a*u+o,I=Math.cos(Q),V=Math.sin(Q);A.x=S*V,A.y=_*Y,A.z=S*I,m.push(A.x,A.y,A.z),d.push(0,Y,0),R.x=I*.5+.5,R.y=V*.5*Y+.5,g.push(R.x,R.y),y++}for(let O=0;O<a;O++){let Q=w+O,I=N+O;l===!0?f.push(I,I+1,Q):f.push(I+1,I,Q),h+=3}c.addGroup(p,h,l===!0?1:2),p+=h}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class Ql extends Vs{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Ql(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class eh extends Kt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),u=Math.floor(a),c=o+1,f=u+1,m=t/o,d=i/u,g=[],y=[],T=[],_=[];for(let p=0;p<f;p++){let C=p*d-s;for(let B=0;B<c;B++){let l=B*m-n;y.push(l,-C,0),T.push(0,0,1),_.push(B/o),_.push(1-p/u)}}for(let p=0;p<u;p++)for(let C=0;C<o;C++){let B=C+c*p,l=C+c*(p+1),w=C+1+c*(p+1),R=C+1+c*p;g.push(B,l,R),g.push(l,w,R)}this.setIndex(g),this.setAttribute("position",new Tt(y,3)),this.setAttribute("normal",new Tt(T,3)),this.setAttribute("uv",new Tt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.width,t.height,t.widthSegments,t.heightSegments)}},Cu=class th extends Kt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let u=[],c=[],f=[],m=[],d=new F,g=new F,y=new F;for(let T=0;T<=r;T++){let _=s+T/r*o;for(let p=0;p<=a;p++){let C=p/a*n;g.x=(t+i*Math.cos(_))*Math.cos(C),g.y=(t+i*Math.cos(_))*Math.sin(C),g.z=i*Math.sin(_),c.push(g.x,g.y,g.z),d.x=t*Math.cos(C),d.y=t*Math.sin(C),y.subVectors(g,d).normalize(),f.push(y.x,y.y,y.z),m.push(p/a),m.push(T/r)}}for(let T=1;T<=r;T++)for(let _=1;_<=a;_++){let p=(a+1)*T+_-1,C=(a+1)*(T-1)+_-1,B=(a+1)*(T-1)+_,l=(a+1)*T+_;u.push(p,C,l),u.push(C,B,l)}this.setIndex(u),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Pu=class extends Oi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Vr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(zo(a))a.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(zo(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Vt(e){let t={};for(let i=0;i<e.length;i++){let r=Vr(e[i]);for(let a in r)t[a]=r[a]}return t}function zo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Lu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ih(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}var Du={clone:Vr,merge:Vt},Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new De().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Iu=class extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mt=class extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ou=class extends mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Fu=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bu=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rh=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hn=new gt,Go=new F,Vo=new F,zu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Hn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Hn,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,u=r?r.y/a.y:0;e.coordinateSystem===oa||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+u,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+u,0,0,.5,.5,0,0,0,1),t.multiply(Hn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new F,Va=new Yi,fi=new F,ah=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Va,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ga,Va,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new F,ko=new De,Ho=new De,ii=class extends ah{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,ko,Ho),t.subVectors(Ho,ko)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,u=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/u,r*=n.width/o,i*=n.height/u}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},no=class extends ah{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,n=a+u*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gu=class extends zu{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wn=class extends rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Gu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Vu=class extends rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Er=-90,Tr=1,ku=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ii(Er,Tr,e,t);r.layers=this.layers,this.add(r);let a=new ii(Er,Tr,e,t);a.layers=this.layers,this.add(a);let n=new ii(Er,Tr,e,t);n.layers=this.layers,this.add(n);let s=new ii(Er,Tr,e,t);s.layers=this.layers,this.add(s);let o=new ii(Er,Tr,e,t);o.layers=this.layers,this.add(o);let u=new ii(Er,Tr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let u of t)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,u,c]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(f,m,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hu=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nh="\\[\\]\\.:\\/",so="[^"+nh+"]",Wu="[^"+nh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",so);/(WCOD+)?/.source.replace("WCOD",Wu);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",so);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",so);var Wo=new gt,Xu=class{constructor(e,t,i=0,r=1/0){this.ray=new ua(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wo),this}intersectObject(e,t=!0,i=[]){return ks(e,this,i,t),i.sort(Xo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ks(e[r],this,i,t);return i.sort(Xo),i}};function Xo(e,t){return e.distance-t.distance}function ks(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)ks(n[s],t,i,!0)}}var jo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Br;Br=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Br.prototype.isMatrix2=!0;var ju=class extends wu{constructor(e=10,t=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);let a=t/2,n=e/t,s=e/2,o=[],u=[];for(let m=0,d=0,g=-s;m<=t;m++,g+=n){o.push(-s,0,g,s,0,g),o.push(g,0,-s,g,0,s);let y=m===a?i:r;y.toArray(u,d),d+=3,y.toArray(u,d),d+=3,y.toArray(u,d),d+=3,y.toArray(u,d),d+=3}let c=new Kt;c.setAttribute("position",new Tt(o,3)),c.setAttribute("color",new Tt(u,3));let f=new Yl({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Yu=class extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Yo(e,t,i,r){let a=Ku(r);switch(i){case Ul:return e*t;case Il:return e*t/a.components*a.byteLength;case Zs:return e*t/a.components*a.byteLength;case sr:return e*t*2/a.components*a.byteLength;case Js:return e*t*2/a.components*a.byteLength;case Nl:return e*t*3/a.components*a.byteLength;case li:return e*t*4/a.components*a.byteLength;case $s:return e*t*4/a.components*a.byteLength;case Xa:case ja:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ya:case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hs:case cs:return Math.max(e,16)*Math.max(t,8)/4;case ls:case us:return Math.max(e,8)*Math.max(t,8)/2;case ds:case ps:case ms:case gs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fs:case Qa:case _s:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ss:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case xs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ys:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ms:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Es:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ts:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case bs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ws:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Rs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case As:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Cs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ps:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ls:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ds:case Us:case Ns:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Is:case Os:return Math.ceil(e/4)*Math.ceil(t/4)*8;case en:case Fs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ku(e){switch(e){case $t:case Cl:return{byteLength:1,components:1};case na:case Pl:case Mi:return{byteLength:2,components:1};case Ks:case qs:return{byteLength:2,components:4};case yi:case Ys:case vi:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);function sh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function qu(e){let t=new WeakMap;function i(o,u){let c=o.array,f=o.usage,m=c.byteLength,d=e.createBuffer();e.bindBuffer(u,d),e.bufferData(u,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=e.SHORT;else if(c instanceof Uint32Array)g=e.UNSIGNED_INT;else if(c instanceof Int32Array)g=e.INT;else if(c instanceof Int8Array)g=e.BYTE;else if(c instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function r(o,u,c){let f=u.array,m=u.updateRanges;if(e.bindBuffer(c,o),m.length===0)e.bufferSubData(c,0,f);else{m.sort((g,y)=>g.start-y.start);let d=0;for(let g=1;g<m.length;g++){let y=m[d],T=m[g];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++d,m[d]=T)}m.length=d+1;for(let g=0,y=m.length;g<y;g++){let T=m[g];e.bufferSubData(c,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}u.clearUpdateRanges()}u.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let u=t.get(o);u&&(e.deleteBuffer(u.buffer),t.delete(o))}function s(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,u));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,u),c.version=o.version}}return{get:a,remove:n,update:s}}var Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ec=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ic=`#ifdef USE_AOMAP
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
#endif`,rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ac=`#ifdef USE_BATCHING
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
#endif`,nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hc=`#ifdef USE_IRIDESCENCE
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
#endif`,uc=`#ifdef USE_BUMPMAP
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
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_c=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sc=`#define PI 3.141592653589793
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
} // validated`,xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yc=`vec3 transformedNormal = objectNormal;
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
#endif`,Mc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ac=`#ifdef USE_ENVMAP
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
#endif`,Cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ic=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fc=`#ifdef USE_GRADIENTMAP
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
}`,Bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vc=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kc=`#ifdef USE_ENVMAP
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
#endif`,Hc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yc=`PhysicalMaterial material;
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
#endif`,Kc=`uniform sampler2D dfgLUT;
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
}`,qc=`
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
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$c=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sd=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
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
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Id=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,np=`#define DISTANCE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,fp=`#define MATCAP
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
}`,mp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,xp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,Mp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Rp=`uniform vec3 color;
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
}`,Ap=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:$u,alphamap_pars_fragment:Qu,alphatest_fragment:ec,alphatest_pars_fragment:tc,aomap_fragment:ic,aomap_pars_fragment:rc,batching_pars_vertex:ac,batching_vertex:nc,begin_vertex:sc,beginnormal_vertex:oc,bsdfs:lc,iridescence_fragment:hc,bumpmap_pars_fragment:uc,clipping_planes_fragment:cc,clipping_planes_pars_fragment:dc,clipping_planes_pars_vertex:pc,clipping_planes_vertex:fc,color_fragment:mc,color_pars_fragment:gc,color_pars_vertex:_c,color_vertex:vc,common:Sc,cube_uv_reflection_fragment:xc,defaultnormal_vertex:yc,displacementmap_pars_vertex:Mc,displacementmap_vertex:Ec,emissivemap_fragment:Tc,emissivemap_pars_fragment:bc,colorspace_fragment:wc,colorspace_pars_fragment:Rc,envmap_fragment:Ac,envmap_common_pars_fragment:Cc,envmap_pars_fragment:Pc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:kc,envmap_vertex:Dc,fog_vertex:Uc,fog_pars_vertex:Nc,fog_fragment:Ic,fog_pars_fragment:Oc,gradientmap_pars_fragment:Fc,lightmap_pars_fragment:Bc,lights_lambert_fragment:zc,lights_lambert_pars_fragment:Gc,lights_pars_begin:Vc,lights_toon_fragment:Hc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:jc,lights_physical_fragment:Yc,lights_physical_pars_fragment:Kc,lights_fragment_begin:qc,lights_fragment_maps:Zc,lights_fragment_end:Jc,lightprobes_pars_fragment:$c,logdepthbuf_fragment:Qc,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:td,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:ad,map_particle_fragment:nd,map_particle_pars_fragment:sd,metalnessmap_fragment:od,metalnessmap_pars_fragment:ld,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:cd,morphtarget_pars_vertex:dd,morphtarget_vertex:pd,normal_fragment_begin:fd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:vd,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Md,iridescence_pars_fragment:Ed,opaque_fragment:Td,packing:bd,premultiplied_alpha_fragment:wd,project_vertex:Rd,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Dd,shadowmap_pars_vertex:Ud,shadowmap_vertex:Nd,shadowmask_pars_fragment:Id,skinbase_vertex:Od,skinning_pars_vertex:Fd,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:Gd,specularmap_pars_fragment:Vd,tonemapping_fragment:kd,tonemapping_pars_fragment:Hd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:jd,uv_pars_vertex:Yd,uv_vertex:Kd,worldpos_vertex:qd,background_vert:Zd,background_frag:Jd,backgroundCube_vert:$d,backgroundCube_frag:Qd,cube_vert:ep,cube_frag:tp,depth_vert:ip,depth_frag:rp,distance_vert:ap,distance_frag:np,equirect_vert:sp,equirect_frag:op,linedashed_vert:lp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:cp,meshlambert_vert:dp,meshlambert_frag:pp,meshmatcap_vert:fp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:vp,meshphong_frag:Sp,meshphysical_vert:xp,meshphysical_frag:yp,meshtoon_vert:Mp,meshtoon_frag:Ep,points_vert:Tp,points_frag:bp,shadow_vert:wp,shadow_frag:Rp,sprite_vert:Ap,sprite_frag:Cp},ve={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},gi={basic:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Vt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Vt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Vt([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Vt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Vt([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Vt([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Vt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Vt([ve.lights,ve.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gi.physical={uniforms:Vt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var ka={r:0,b:0,g:0},Pp=new gt,oh=new ze;oh.set(-1,0,0,0,1,0,0,0,1);function Lp(e,t,i,r,a,n){let s=new Fe(0),o=a===!0?0:1,u,c,f=null,m=0,d=null;function g(C){let B=C.isScene===!0?C.background:null;if(B&&B.isTexture){let l=C.backgroundBlurriness>0;B=t.get(B,l)}return B}function y(C){let B=!1,l=g(C);l===null?_(s,o):l&&l.isColor&&(_(l,1),B=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(C,B){let l=g(B);l&&(l.isCubeTexture||l.mapping===hn)?(c===void 0&&(c=new At(new un(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Vr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=l,c.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(B.backgroundRotation)).transpose(),l.isCubeTexture&&l.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(oh),c.material.toneMapped=Ye.getTransfer(l.colorSpace)!==rt,(f!==l||m!==l.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,f=l,m=l.version,d=e.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):l&&l.isTexture&&(u===void 0&&(u=new At(new ao(2,2),new Ei({name:"BackgroundMaterial",uniforms:Vr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=l,u.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(l.colorSpace)!==rt,l.matrixAutoUpdate===!0&&l.updateMatrix(),u.material.uniforms.uvTransform.value.copy(l.matrix),(f!==l||m!==l.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,f=l,m=l.version,d=e.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function _(C,B){C.getRGB(ka,ih(e)),i.buffers.color.setClear(ka.r,ka.g,ka.b,B,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return s},setClearColor:function(C,B=1){s.set(C),o=B,_(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,_(s,o)},render:y,addToRenderList:T,dispose:p}}function Dp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(N,O,Q,I,V){let re=!1,X=m(N,I,Q,O);n!==X&&(n=X,c(n.object)),re=g(N,I,Q,V),re&&y(N,I,Q,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,l(N,O,Q,I),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function u(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function f(N){return e.deleteVertexArray(N)}function m(N,O,Q,I){let V=I.wireframe===!0,re=r[O.id];re===void 0&&(re={},r[O.id]=re);let X=N.isInstancedMesh===!0?N.id:0,fe=re[X];fe===void 0&&(fe={},re[X]=fe);let Z=fe[Q.id];Z===void 0&&(Z={},fe[Q.id]=Z);let te=Z[V];return te===void 0&&(te=d(u()),Z[V]=te),te}function d(N){let O=[],Q=[],I=[];for(let V=0;V<i;V++)O[V]=0,Q[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Q,attributeDivisors:I,object:N,attributes:{},index:null}}function g(N,O,Q,I){let V=n.attributes,re=O.attributes,X=0,fe=Q.getAttributes();for(let Z in fe)if(fe[Z].location>=0){let te=V[Z],ne=re[Z];if(ne===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;X++}return n.attributesNum!==X||n.index!==I}function y(N,O,Q,I){let V={},re=O.attributes,X=0,fe=Q.getAttributes();for(let Z in fe)if(fe[Z].location>=0){let te=re[Z];te===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),V[Z]=ne,X++}n.attributes=V,n.attributesNum=X,n.index=I}function T(){let N=n.newAttributes;for(let O=0,Q=N.length;O<Q;O++)N[O]=0}function _(N){p(N,0)}function p(N,O){let Q=n.newAttributes,I=n.enabledAttributes,V=n.attributeDivisors;Q[N]=1,I[N]===0&&(e.enableVertexAttribArray(N),I[N]=1),V[N]!==O&&(e.vertexAttribDivisor(N,O),V[N]=O)}function C(){let N=n.newAttributes,O=n.enabledAttributes;for(let Q=0,I=O.length;Q<I;Q++)O[Q]!==N[Q]&&(e.disableVertexAttribArray(Q),O[Q]=0)}function B(N,O,Q,I,V,re,X){X===!0?e.vertexAttribIPointer(N,O,Q,V,re):e.vertexAttribPointer(N,O,Q,I,V,re)}function l(N,O,Q,I){T();let V=I.attributes,re=Q.getAttributes(),X=O.defaultAttributeValues;for(let fe in re){let Z=re[fe];if(Z.location>=0){let te=V[fe];if(te===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){let ne=te.normalized,Be=te.itemSize,Ae=t.get(te);if(Ae===void 0)continue;let Qe=Ae.buffer,Oe=Ae.type,$=Ae.bytesPerElement,oe=Oe===e.INT||Oe===e.UNSIGNED_INT||te.gpuType===Ys;if(te.isInterleavedBufferAttribute){let ce=te.data,Ce=ce.stride,Le=te.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<Z.locationSize;xe++)p(Z.location+xe,ce.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<Z.locationSize;xe++)_(Z.location+xe);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let xe=0;xe<Z.locationSize;xe++)B(Z.location+xe,Be/Z.locationSize,Oe,ne,Ce*$,(Le+Be/Z.locationSize*xe)*$,oe)}else{if(te.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)p(Z.location+ce,te.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<Z.locationSize;ce++)_(Z.location+ce);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let ce=0;ce<Z.locationSize;ce++)B(Z.location+ce,Be/Z.locationSize,Oe,ne,Be*$,Be/Z.locationSize*ce*$,oe)}}else if(X!==void 0){let ne=X[fe];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(Z.location,ne);break;case 3:e.vertexAttrib3fv(Z.location,ne);break;case 4:e.vertexAttrib4fv(Z.location,ne);break;default:e.vertexAttrib1fv(Z.location,ne)}}}}C()}function w(){S();for(let N in r){let O=r[N];for(let Q in O){let I=O[Q];for(let V in I){let re=I[V];for(let X in re)f(re[X].object),delete re[X];delete I[V]}}delete r[N]}}function R(N){if(r[N.id]===void 0)return;let O=r[N.id];for(let Q in O){let I=O[Q];for(let V in I){let re=I[V];for(let X in re)f(re[X].object),delete re[X];delete I[V]}}delete r[N.id]}function A(N){for(let O in r){let Q=r[O];for(let I in Q){let V=Q[I];if(V[N.id]===void 0)continue;let re=V[N.id];for(let X in re)f(re[X].object),delete re[X];delete V[N.id]}}}function h(N){for(let O in r){let Q=r[O],I=N.isInstancedMesh===!0?N.id:0,V=Q[I];if(V!==void 0){for(let re in V){let X=V[re];for(let fe in X)f(X[fe].object),delete X[fe];delete V[re]}delete Q[I],Object.keys(Q).length===0&&delete r[O]}}}function S(){Y(),s=!0,n!==a&&(n=a,c(n.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:S,resetDefaultState:Y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:h,releaseStatesOfProgram:A,initAttributes:T,enableAttribute:_,disableUnusedAttributes:C}}function Up(e,t,i){let r;function a(u){r=u}function n(u,c){e.drawArrays(r,u,c),i.update(c,r,1)}function s(u,c,f){f!==0&&(e.drawArraysInstanced(r,u,c,f),i.update(c,r,f))}function o(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,c,0,f);let m=0;for(let d=0;d<f;d++)m+=c[d];i.update(m,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Np(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==li&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let h=A===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==$t&&A!==vi&&!h&&r.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function u(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=u(c);f!==c&&(Ie("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let m=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),C=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),B=e.getParameter(e.MAX_VARYING_VECTORS),l=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:u,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:C,maxVaryings:B,maxFragmentUniforms:l,maxSamples:w,samples:R}}function Ip(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Li,o=new ze,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let g=m.length!==0||d||r!==0||a;return a=d,r=m.length,g},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(m,d){i=f(m,d,0)},this.setState=function(m,d,g){let y=m.clippingPlanes,T=m.clipIntersection,_=m.clipShadows,p=e.get(m);if(!a||y===null||y.length===0||n&&!_)n?f(null):c();else{let C=n?0:r,B=C*4,l=p.clippingState||null;u.value=l,l=f(y,d,B,g);for(let w=0;w!==B;++w)l[w]=i[w];p.clippingState=l,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function c(){u.value!==i&&(u.value=i,u.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function f(m,d,g,y){let T=m!==null?m.length:0,_=null;if(T!==0){if(_=u.value,y!==!0||_===null){let p=g+T*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(_===null||_.length<p)&&(_=new Float32Array(p));for(let B=0,l=g;B!==T;++B,l+=4)s.copy(m[B]).applyMatrix4(C,o),s.normal.toArray(_,l),_[l+3]=s.constant}u.value=_,u.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,_}}var Pr=4,Op=6,Fp=20,Bp=256,$r=new no,Ko=new Fe,Xn=null,jn=0,Yn=0,Kn=!1,zp=new F,er=new F,qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=zp}=a;Xn=this._renderer.getRenderTarget(),jn=this._renderer.getActiveCubeFace(),Yn=this._renderer.getActiveMipmapLevel(),Kn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xn,jn,Yn),this._renderer.xr.enabled=Kn,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xn=this._renderer.getRenderTarget(),jn=this._renderer.getActiveCubeFace(),Yn=this._renderer.getActiveMipmapLevel(),Kn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Mi,format:li,colorSpace:tn,depthBuffer:!1},r=Zo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gp(a)),this._blurMaterial=kp(a,e,t),this._ggxMaterial=Vp(a,e,t)}return r}_compileMaterial(e){let t=new At(new Kt,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,i,r,a){let n=new ii(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(Ko),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new un,new sn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let m=this._backgroundBox,d=m.material,g=!1,y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,g=!0):(d.color.copy(Ko),g=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(n.up.set(0,s[T],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[T],a.y,a.z)):_===1?(n.up.set(0,0,s[T]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[T],a.z)):(n.up.set(0,s[T],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[T]));let p=this._cubeSize;br(r,_*p,T>2?p:0,p,p),u.setRenderTarget(r),g&&u.render(m,n),u.render(e,n)}u.toneMapping=f,u.autoClear=c,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===nr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;br(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,$r)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),m=u*1.25,d=f*m,{_lodMax:g}=this,y=this._sizeLods[i],T=3*y*(i>g-Pr?i-g+Pr:0),_=4*(this._cubeSize-y);o.envMap.value=e.texture,o.roughness.value=d,o.mipInt.value=g-t,br(a,T,_,3*y,2*y),r.setRenderTarget(a),r.render(s,$r),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=g-i,br(e,T,_,3*y,2*y),r.setRenderTarget(e),r.render(s,$r)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let u=s.uniforms;u.envMap.value=e.texture,u.sigma.value=a,u.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],f=3*c*(r>this._lodMax-Pr?r-this._lodMax+Pr:0),m=4*(this._cubeSize-c);br(t,f,m,3*c,2*c),n.setRenderTarget(t),n.render(o,$r)}};function Gp(e){let t=[],i=[],r=e,a=e-Pr+1+Op;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),u=-o,c=1+o,f=[u,u,c,u,c,c,u,u,c,c,u,c],m=6,d=6,g=3,y=new Float32Array(g*d*m),T=new Float32Array(g*d*m);for(let p=0;p<m;p++){let C=p%3*2/3-1,B=p>2?0:-1,l=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];y.set(l,g*d*p);for(let w=0;w<d;w++){let R=f[w*2]*2-1,A=f[w*2+1]*2-1;p===0?er.set(1,A,R):p===1?er.set(-R,1,-A):p===2?er.set(-R,A,1):p===3?er.set(-1,A,-R):p===4?er.set(-R,-1,A):er.set(R,A,-1),er.toArray(T,(p*d+w)*g)}}let _=new Kt;_.setAttribute("position",new ri(y,g)),_.setAttribute("outputDirection",new ri(T,g)),i.push(new At(_,null)),r>Pr&&r--}return{lodMeshes:i,sizeLods:t}}function Zo(e,t,i){let r=new hi(e,t,i);return r.texture.mapping=hn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function br(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Vp(e,t,i){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cn(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function kp(e,t,i){return new Ei({name:"SphericalGaussianBlur",defines:{SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cn(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Jo(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cn(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function $o(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function cn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lh=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ql(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new un(5,5,5),a=new Ei({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Ui});a.uniforms.tEquirect.value=t;let n=new At(r,a),s=t.minFilter;return t.minFilter===tr&&(t.minFilter=Ut),new ku(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Hp(e){let t=new WeakMap,i=new WeakMap,r=null;function a(d,g=!1){return d==null?null:g?s(d):n(d)}function n(d){if(d&&d.isTexture){let g=d.mapping;if(g===gn||g===_n)if(t.has(d)){let y=t.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let T=new lh(y.height);return T.fromEquirectangularTexture(e,d),t.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let g=d.mapping,y=g===gn||g===_n,T=g===nr||g===zr;if(y||T){let _=i.get(d),p=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return r===null&&(r=new qo(e)),_=y?r.fromEquirectangular(d,_):r.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,i.set(d,_),_.texture;if(_!==void 0)return _.texture;{let C=d.image;return y&&C&&C.height>0||T&&C&&u(C)?(r===null&&(r=new qo(e)),_=y?r.fromEquirectangular(d):r.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,i.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function o(d,g){return g===gn?d.mapping=nr:g===_n&&(d.mapping=zr),d}function u(d){let g=0,y=6;for(let T=0;T<y;T++)d[T]!==void 0&&g++;return g===y}function c(d){let g=d.target;g.removeEventListener("dispose",c);let y=t.get(g);y!==void 0&&(t.delete(g),y.dispose())}function f(d){let g=d.target;g.removeEventListener("dispose",f);let y=i.get(g);y!==void 0&&(i.delete(g),y.dispose())}function m(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:m}}function Wp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Dr("WebGLRenderer: "+r+" extension not supported."),a}}}function Xp(e,t,i,r){let a={},n=new WeakMap;function s(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",s),delete a[d.id];let g=n.get(d);g&&(t.remove(g),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(m,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function u(m){let d=m.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER)}function c(m){let d=[],g=m.index,y=m.attributes.position,T=0;if(y===void 0)return;if(g!==null){let C=g.array;T=g.version;for(let B=0,l=C.length;B<l;B+=3){let w=C[B+0],R=C[B+1],A=C[B+2];d.push(w,R,R,A,A,w)}}else{let C=y.array;T=y.version;for(let B=0,l=C.length/3-1;B<l;B+=3){let w=B+0,R=B+1,A=B+2;d.push(w,R,R,A,A,w)}}let _=new(y.count>=65535?kl:Vl)(d,1);_.version=T;let p=n.get(m);p&&t.remove(p),n.set(m,_)}function f(m){let d=n.get(m);if(d){let g=m.index;g!==null&&d.version<g.version&&c(m)}else c(m);return n.get(m)}return{get:o,update:u,getWireframeAttribute:f}}function jp(e,t,i){let r;function a(m){r=m}let n,s;function o(m){n=m.type,s=m.bytesPerElement}function u(m,d){e.drawElements(r,d,n,m*s),i.update(d,r,1)}function c(m,d,g){g!==0&&(e.drawElementsInstanced(r,d,n,m*s,g),i.update(d,r,g))}function f(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,m,0,g);let y=0;for(let T=0;T<g;T++)y+=d[T];i.update(y,r,1)}this.setMode=a,this.setIndex=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=f}function Yp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Kp(e,t,i){let r=new WeakMap,a=new xt;function n(s,o,u){let c=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0,d=r.get(o);if(d===void 0||d.count!==m){let g=function(){h.dispose(),r.delete(o),o.removeEventListener("dispose",g)};d!==void 0&&d.texture.dispose();let y=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],B=o.morphAttributes.color||[],l=0;y===!0&&(l=1),T===!0&&(l=2),_===!0&&(l=3);let w=o.attributes.position.count*l,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let A=new Float32Array(w*R*4*m),h=new Bl(A,w,R,m);h.type=vi,h.needsUpdate=!0;let S=l*4;for(let Y=0;Y<m;Y++){let N=p[Y],O=C[Y],Q=B[Y],I=w*R*4*Y;for(let V=0;V<N.count;V++){let re=V*S;y===!0&&(a.fromBufferAttribute(N,V),A[I+re+0]=a.x,A[I+re+1]=a.y,A[I+re+2]=a.z,A[I+re+3]=0),T===!0&&(a.fromBufferAttribute(O,V),A[I+re+4]=a.x,A[I+re+5]=a.y,A[I+re+6]=a.z,A[I+re+7]=0),_===!0&&(a.fromBufferAttribute(Q,V),A[I+re+8]=a.x,A[I+re+9]=a.y,A[I+re+10]=a.z,A[I+re+11]=Q.itemSize===4?a.w:1)}}d={count:m,texture:h,size:new De(w,R)},r.set(o,d),o.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)u.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let g=0;for(let T=0;T<c.length;T++)g+=c[T];let y=o.morphTargetsRelative?1:1-g;u.getUniforms().setValue(e,"morphTargetBaseInfluence",y),u.getUniforms().setValue(e,"morphTargetInfluences",c)}u.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function qp(e,t,i,r,a){let n=new WeakMap;function s(c){let f=a.render.frame,m=c.geometry,d=t.get(c,m);if(n.get(d)!==f&&(t.update(d),n.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),n.get(c)!==f&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,f))),c.isSkinnedMesh){let g=c.skeleton;n.get(g)!==f&&(g.update(),n.set(g,f))}return d}function o(){n=new WeakMap}function u(c){let f=c.target;f.removeEventListener("dispose",u),r.releaseStatesOfObject(f),i.remove(f.instanceMatrix),f.instanceColor!==null&&i.remove(f.instanceColor)}return{update:s,dispose:o}}var Zp={[Ml]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[js]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[Rl]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function Jp(e,t,i,r,a,n){let s=new hi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,u=null,c=new Kt;c.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let f=new Iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new At(c,f),d=new no(-1,1,1,-1,0,1),g=null,y=null,T=!1,_,p=null,C=[],B=!1;this.setSize=function(l,w){s.setSize(l,w),o!==null&&o.setSize(l,w),u!==null&&u.setSize(l,w);for(let R=0;R<C.length;R++){let A=C[R];A.setSize&&A.setSize(l,w)}},this.setEffects=function(l){C=l,B=C.length>0&&C[0].isRenderPass===!0;let w=s.width,R=s.height;C.length>0&&o===null&&(o=new hi(w,R,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),u=new hi(w,R,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<C.length;A++){let h=C[A];h.setSize&&h.setSize(w,R)}},this.begin=function(l,w){if(T||l.toneMapping===xi&&C.length===0)return!1;if(p=w,w!==null){let R=w.width,A=w.height;(s.width!==R||s.height!==A)&&this.setSize(R,A)}return B===!1&&l.setRenderTarget(s),_=l.toneMapping,l.toneMapping=xi,!0},this.hasRenderPass=function(){return B},this.end=function(l,w){l.toneMapping=_,T=!0;let R=s,A=o;for(let h=0;h<C.length;h++){let S=C[h];S.enabled!==!1&&(S.render(l,A,R,w),S.needsSwap!==!1&&(R=A,A=A===o?u:o))}if(g!==l.outputColorSpace||y!==l.toneMapping){g=l.outputColorSpace,y=l.toneMapping,f.defines={},Ye.getTransfer(g)===rt&&(f.defines.SRGB_TRANSFER="");let h=Zp[y];h&&(f.defines[h]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=R.texture,l.setRenderTarget(p),l.render(m,d),p=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),u!==null&&u.dispose(),c.dispose(),f.dispose()}}var hh=new ai,Hs=new la(1,1),uh=new Bl,ch=new nu,dh=new ql,Qo=[],el=[],tl=new Float32Array(16),il=new Float32Array(9),rl=new Float32Array(4);function Hr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Qo[a];if(n===void 0&&(n=new Float32Array(a),Qo[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function bt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function wt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function dn(e,t){let i=el[t];i===void 0&&(i=new Int32Array(t),el[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function $p(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2fv(this.addr,t),wt(i,t)}}function ef(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bt(i,t))return;e.uniform3fv(this.addr,t),wt(i,t)}}function tf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4fv(this.addr,t),wt(i,t)}}function rf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),wt(i,t)}else{if(bt(i,r))return;rl.set(r),e.uniformMatrix2fv(this.addr,!1,rl),wt(i,r)}}function af(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),wt(i,t)}else{if(bt(i,r))return;il.set(r),e.uniformMatrix3fv(this.addr,!1,il),wt(i,r)}}function nf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),wt(i,t)}else{if(bt(i,r))return;tl.set(r),e.uniformMatrix4fv(this.addr,!1,tl),wt(i,r)}}function sf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function of(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2iv(this.addr,t),wt(i,t)}}function lf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bt(i,t))return;e.uniform3iv(this.addr,t),wt(i,t)}}function hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4iv(this.addr,t),wt(i,t)}}function uf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function cf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2uiv(this.addr,t),wt(i,t)}}function df(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bt(i,t))return;e.uniform3uiv(this.addr,t),wt(i,t)}}function pf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4uiv(this.addr,t),wt(i,t)}}function ff(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Hs.compareFunction=i.isReversedDepthBuffer()?eo:Qs,n=Hs):n=hh,i.setTexture2D(t||n,a)}function mf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||ch,a)}function gf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||dh,a)}function _f(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||uh,a)}function vf(e){switch(e){case 5126:return $p;case 35664:return Qp;case 35665:return ef;case 35666:return tf;case 35674:return rf;case 35675:return af;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return cf;case 36295:return df;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function Sf(e,t){e.uniform1fv(this.addr,t)}function xf(e,t){let i=Hr(t,this.size,2);e.uniform2fv(this.addr,i)}function yf(e,t){let i=Hr(t,this.size,3);e.uniform3fv(this.addr,i)}function Mf(e,t){let i=Hr(t,this.size,4);e.uniform4fv(this.addr,i)}function Ef(e,t){let i=Hr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Tf(e,t){let i=Hr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function bf(e,t){let i=Hr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function wf(e,t){e.uniform1iv(this.addr,t)}function Rf(e,t){e.uniform2iv(this.addr,t)}function Af(e,t){e.uniform3iv(this.addr,t)}function Cf(e,t){e.uniform4iv(this.addr,t)}function Pf(e,t){e.uniform1uiv(this.addr,t)}function Lf(e,t){e.uniform2uiv(this.addr,t)}function Df(e,t){e.uniform3uiv(this.addr,t)}function Uf(e,t){e.uniform4uiv(this.addr,t)}function Nf(e,t,i){let r=this.cache,a=t.length,n=dn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Hs:s=hh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function If(e,t,i){let r=this.cache,a=t.length,n=dn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||ch,n[s])}function Of(e,t,i){let r=this.cache,a=t.length,n=dn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||dh,n[s])}function Ff(e,t,i){let r=this.cache,a=t.length,n=dn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||uh,n[s])}function Bf(e){switch(e){case 5126:return Sf;case 35664:return xf;case 35665:return yf;case 35666:return Mf;case 35674:return Ef;case 35675:return Tf;case 35676:return bf;case 5124:case 35670:return wf;case 35667:case 35671:return Rf;case 35668:case 35672:return Af;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Lf;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}var zf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}},Gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},qn=/(\w+)(\])?(\[|\.)?/g;function al(e,t){e.seq.push(t),e.map[t.id]=t}function kf(e,t,i){let r=e.name,a=r.length;for(qn.lastIndex=0;;){let n=qn.exec(r),s=qn.lastIndex,o=n[1],u=n[2]==="]",c=n[3];if(u&&(o=o|0),c===void 0||c==="["&&s+2===a){al(i,c===void 0?new zf(o,e,t):new Gf(o,e,t));break}else{let f=i.map[o];f===void 0&&(f=new Vf(o),al(i,f)),i=f}}}var $a=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);kf(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function nl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Hf=37297,Wf=0;function Xf(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var sl=new ze;function jf(e){Ye._getMatrix(sl,Ye.workingColorSpace,e);let t=`mat3( ${sl.elements.map(i=>i.toFixed(4))} )`;switch(Ye.getTransfer(e)){case rn:return[t,"LinearTransferOETF"];case rt:return[t,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ol(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Xf(e.getShaderSource(t),s)}else return a}function Yf(e,t){let i=jf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Kf={[Ml]:"Linear",[El]:"Reinhard",[Tl]:"Cineon",[js]:"ACESFilmic",[wl]:"AgX",[Rl]:"Neutral",[bl]:"Custom"};function qf(e,t){let i=Kf[t];return i===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ha=new F;function Zf(){Ye.getLuminanceCoefficients(Ha);let e=Ha.x.toFixed(4),t=Ha.y.toFixed(4),i=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function $f(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Qf(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function ta(e){return e!==""}function ll(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(e){return e.replace(em,im)}var tm=new Map;function im(e,t){let i=Ve[t];if(i===void 0){let r=tm.get(t);if(r!==void 0)i=Ve[r],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ws(i)}var rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(e){return e.replace(rm,am)}function am(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function cl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var nm={[ia]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function sm(e){return nm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var om={[nr]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[hn]:"ENVMAP_TYPE_CUBE_UV"};function lm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":om[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var hm={[zr]:"ENVMAP_MODE_REFRACTION"};function um(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":hm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cm={[yl]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Fh]:"ENVMAP_BLENDING_ADD"};function dm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":cm[e.combine]||"ENVMAP_BLENDING_NONE"}function pm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function fm(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,u=sm(i),c=lm(i),f=um(i),m=dm(i),d=pm(i),g=Jf(i),y=$f(n),T=a.createProgram(),_,p,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(ta).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(_=[cl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[cl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xi?"#define TONE_MAPPING":"",i.toneMapping!==xi?Ve.tonemapping_pars_fragment:"",i.toneMapping!==xi?qf("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Yf("linearToOutputTexel",i.outputColorSpace),Zf(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ta).join(`
`)),s=Ws(s),s=ll(s,i),s=hl(s,i),o=Ws(o),o=ll(o,i),o=hl(o,i),s=ul(s),o=ul(o),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",i.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=C+_+s,l=C+p+o,w=nl(a,a.VERTEX_SHADER,B),R=nl(a,a.FRAGMENT_SHADER,l);a.attachShader(T,w),a.attachShader(T,R),i.index0AttributeName!==void 0?a.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function A(N){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(T)||"",Q=a.getShaderInfoLog(w)||"",I=a.getShaderInfoLog(R)||"",V=O.trim(),re=Q.trim(),X=I.trim(),fe=!0,Z=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(fe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,T,w,R);else{let te=ol(a,w,"vertex"),ne=ol(a,R,"fragment");qe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+te+`
`+ne)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(re===""||X==="")&&(Z=!1);Z&&(N.diagnostics={runnable:fe,programLog:V,vertexShader:{log:re,prefix:_},fragmentShader:{log:X,prefix:p}})}a.deleteShader(w),a.deleteShader(R),h=new $a(a,T),S=Qf(a,T)}let h;this.getUniforms=function(){return h===void 0&&A(this),h};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(T,Hf)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Wf++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=w,this.fragmentShader=R,this}var mm=0,gm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _m(e),t.set(e,i)),i}},_m=class{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}};function vm(e){return e===sr||e===Qa||e===en}function Sm(e,t,i,r,a,n){let s=new io,o=new gm,u=new Set,c=[],f=new Map,m=r.logarithmicDepthBuffer,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(h){return u.add(h),h===0?"uv":`uv${h}`}function T(h,S,Y,N,O,Q){let I=N.fog,V=O.geometry,re=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?N.environment:null,X=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,fe=t.get(h.envMap||re,X),Z=fe&&fe.mapping===hn?fe.image.height:null,te=g[h.type];h.precision!==null&&(d=r.getMaxPrecision(h.precision),d!==h.precision&&Ie("WebGLProgram.getParameters:",h.precision,"not supported, using",d,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Be=ne!==void 0?ne.length:0,Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let Qe,Oe,$,oe;if(te){let $e=gi[te];Qe=$e.vertexShader,Oe=$e.fragmentShader}else{Qe=h.vertexShader,Oe=h.fragmentShader;let $e=o.getVertexShaderStage(h),Ke=o.getFragmentShaderStage(h);o.update(h,$e,Ke),$=$e.id,oe=Ke.id}let ce=e.getRenderTarget(),Ce=e.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,tt=!!h.map,He=!!h.matcap,Ne=!!fe,ct=!!h.aoMap,Ct=!!h.lightMap,Ft=!!h.bumpMap&&h.wireframe===!1,et=!!h.normalMap,Mt=!!h.displacementMap,_t=!!h.emissiveMap,dt=!!h.metalnessMap,U=!!h.roughnessMap,Nt=h.anisotropy>0,Je=h.clearcoat>0,ut=h.dispersion>0,E=h.retroreflectivity>0,v=h.iridescence>0,L=h.sheen>0,j=h.transmission>0,ae=Nt&&!!h.anisotropyMap,pe=Je&&!!h.clearcoatMap,Se=Je&&!!h.clearcoatNormalMap,P=Je&&!!h.clearcoatRoughnessMap,ue=v&&!!h.iridescenceMap,_e=v&&!!h.iridescenceThicknessMap,Me=L&&!!h.sheenColorMap,M=L&&!!h.sheenRoughnessMap,J=!!h.specularMap,H=!!h.specularColorMap,ie=!!h.specularIntensityMap,le=j&&!!h.transmissionMap,b=j&&!!h.thicknessMap,k=!!h.gradientMap,W=!!h.alphaMap,ee=h.alphaTest>0,se=!!h.alphaHash,q=!!h.extensions,he=xi;h.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(he=e.toneMapping);let Ee={shaderID:te,shaderType:h.type,shaderName:h.name,vertexShader:Qe,fragmentShader:Oe,defines:h.defines,customVertexShaderID:$,customFragmentShaderID:oe,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:d,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,outputColorSpace:ce===null?e.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!h.alphaToCoverage,map:tt,matcap:He,envMap:Ne,envMapMode:Ne&&fe.mapping,envMapCubeUVHeight:Z,aoMap:ct,lightMap:Ct,bumpMap:Ft,normalMap:et,displacementMap:Mt,emissiveMap:_t,normalMapObjectSpace:et&&h.normalMapType===Gh,normalMapTangentSpace:et&&h.normalMapType===Bs,packedNormalMap:et&&h.normalMapType===Bs&&vm(h.normalMap.format),metalnessMap:dt,roughnessMap:U,anisotropy:Nt,anisotropyMap:ae,clearcoat:Je,clearcoatMap:pe,clearcoatNormalMap:Se,clearcoatRoughnessMap:P,dispersion:ut,retroreflection:E,iridescence:v,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:L,sheenColorMap:Me,sheenRoughnessMap:M,specularMap:J,specularColorMap:H,specularIntensityMap:ie,transmission:j,transmissionMap:le,thicknessMap:b,gradientMap:k,opaque:h.transparent===!1&&h.blending===ra&&h.alphaToCoverage===!1,alphaMap:W,alphaTest:ee,alphaHash:se,combine:h.combine,mapUv:tt&&y(h.map.channel),aoMapUv:ct&&y(h.aoMap.channel),lightMapUv:Ct&&y(h.lightMap.channel),bumpMapUv:Ft&&y(h.bumpMap.channel),normalMapUv:et&&y(h.normalMap.channel),displacementMapUv:Mt&&y(h.displacementMap.channel),emissiveMapUv:_t&&y(h.emissiveMap.channel),metalnessMapUv:dt&&y(h.metalnessMap.channel),roughnessMapUv:U&&y(h.roughnessMap.channel),anisotropyMapUv:ae&&y(h.anisotropyMap.channel),clearcoatMapUv:pe&&y(h.clearcoatMap.channel),clearcoatNormalMapUv:Se&&y(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&y(h.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(h.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&y(h.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&y(h.sheenColorMap.channel),sheenRoughnessMapUv:M&&y(h.sheenRoughnessMap.channel),specularMapUv:J&&y(h.specularMap.channel),specularColorMapUv:H&&y(h.specularColorMap.channel),specularIntensityMapUv:ie&&y(h.specularIntensityMap.channel),transmissionMapUv:le&&y(h.transmissionMap.channel),thicknessMapUv:b&&y(h.thicknessMap.channel),alphaMapUv:W&&y(h.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(et||Nt),vertexNormals:!!V.attributes.normal,vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(tt||W),fog:!!I,useFog:h.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:h.wireframe===!1&&(h.flatShading===!0||V.attributes.normal===void 0&&et===!1&&(h.isMeshLambertMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isMeshPhysicalMaterial)),sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&Y.length>0,shadowMapType:e.shadowMap.type,toneMapping:he,decodeVideoTexture:tt&&h.map.isVideoTexture===!0&&Ye.getTransfer(h.map.colorSpace)===rt,decodeVideoTextureEmissive:_t&&h.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(h.emissiveMap.colorSpace)===rt,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===ht,flipSided:h.side===Yt,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:q&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&h.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return Ee.vertexUv1s=u.has(1),Ee.vertexUv2s=u.has(2),Ee.vertexUv3s=u.has(3),u.clear(),Ee}function _(h){let S=[];if(h.shaderID?S.push(h.shaderID):(S.push(h.customVertexShaderID),S.push(h.customFragmentShaderID)),h.defines!==void 0)for(let Y in h.defines)S.push(Y),S.push(h.defines[Y]);return h.isRawShaderMaterial===!1&&(p(S,h),C(S,h),S.push(e.outputColorSpace)),S.push(h.customProgramCacheKey),S.join()}function p(h,S){h.push(S.precision),h.push(S.outputColorSpace),h.push(S.envMapMode),h.push(S.envMapCubeUVHeight),h.push(S.mapUv),h.push(S.alphaMapUv),h.push(S.lightMapUv),h.push(S.aoMapUv),h.push(S.bumpMapUv),h.push(S.normalMapUv),h.push(S.displacementMapUv),h.push(S.emissiveMapUv),h.push(S.metalnessMapUv),h.push(S.roughnessMapUv),h.push(S.anisotropyMapUv),h.push(S.clearcoatMapUv),h.push(S.clearcoatNormalMapUv),h.push(S.clearcoatRoughnessMapUv),h.push(S.iridescenceMapUv),h.push(S.iridescenceThicknessMapUv),h.push(S.sheenColorMapUv),h.push(S.sheenRoughnessMapUv),h.push(S.specularMapUv),h.push(S.specularColorMapUv),h.push(S.specularIntensityMapUv),h.push(S.transmissionMapUv),h.push(S.thicknessMapUv),h.push(S.combine),h.push(S.fogExp2),h.push(S.sizeAttenuation),h.push(S.morphTargetsCount),h.push(S.morphAttributeCount),h.push(S.numSunLights),h.push(S.numDirLights),h.push(S.numPointLights),h.push(S.numSpotLights),h.push(S.numSpotLightMaps),h.push(S.numHemiLights),h.push(S.numRectAreaLights),h.push(S.numSunLightShadows),h.push(S.numDirLightShadows),h.push(S.numPointLightShadows),h.push(S.numSpotLightShadows),h.push(S.numSpotLightShadowsWithMaps),h.push(S.numLightProbes),h.push(S.shadowMapType),h.push(S.toneMapping),h.push(S.numClippingPlanes),h.push(S.numClipIntersection),h.push(S.depthPacking)}function C(h,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),h.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),h.push(s.mask)}function B(h){let S=g[h.type],Y;if(S){let N=gi[S];Y=Du.clone(N.uniforms)}else Y=h.uniforms;return Y}function l(h,S){let Y=f.get(S);return Y!==void 0?++Y.usedTimes:(Y=new fm(e,S,h,a),c.push(Y),f.set(S,Y)),Y}function w(h){if(--h.usedTimes===0){let S=c.indexOf(h);c[S]=c[c.length-1],c.pop(),f.delete(h.cacheKey),h.destroy()}}function R(h){o.remove(h)}function A(){o.dispose()}return{getParameters:T,getProgramCacheKey:_,getUniforms:B,acquireProgram:l,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:A}}function xm(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,u){e.get(s)[o]=u}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function ym(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function dl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function pl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,y,T,_,p){let C=e[t];return C===void 0?(C={id:d.id,object:d,geometry:g,material:y,materialVariant:s(d),groupOrder:T,renderOrder:d.renderOrder,z:_,group:p},e[t]=C):(C.id=d.id,C.object=d,C.geometry=g,C.material=y,C.materialVariant=s(d),C.groupOrder=T,C.renderOrder=d.renderOrder,C.z=_,C.group=p),t++,C}function u(d,g,y,T,_,p,C){C.reversedDepth===!0&&(_=-_);let B=o(d,g,y,T,_,p);y.transmission>0?r.push(B):y.transparent===!0?a.push(B):i.push(B)}function c(d,g,y,T,_,p){let C=o(d,g,y,T,_,p);y.transmission>0?r.unshift(C):y.transparent===!0?a.unshift(C):i.unshift(C)}function f(d,g){i.length>1&&i.sort(d||ym),r.length>1&&r.sort(g||dl),a.length>1&&a.sort(g||dl)}function m(){for(let d=t,g=e.length;d<g;d++){let y=e[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:u,unshift:c,finish:m,sort:f}}function Mm(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new pl,e.set(r,[s])):a>=n.length?(s=new pl,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Em(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new Fe};break;case"SpotLight":i={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=i,i}}}function Tm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var bm=0;function wm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Rm(e){let t=new Em,i=Tm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);let a=new F,n=new gt,s=new gt;function o(c){let f=0,m=0,d=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,y=0,T=0,_=0,p=0,C=0,B=0,l=0,w=0,R=0,A=0,h=0,S=0,Y=0;c.sort(wm);for(let O=0,Q=c.length;O<Q;O++){let I=c[O],V=I.color,re=I.intensity,X=I.distance,fe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===sr?fe=I.shadow.map.texture:fe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=V.r*re,m+=V.g*re,d+=V.b*re;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(I.sh.coefficients[Z],re);Y++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ne=i.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),r.sunShadow[y]=ne,r.sunShadowMap[y]=fe;let Be=te.getViewportCount();for(let Ae=0;Ae<Be;Ae++)r.sunShadowMatrix[T+Ae]=te.getMatrix(Ae),r.sunShadowCascade[T+Ae]=te._cascadeData[Ae];T+=Be,y++}r.sun[g]=Z,g++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ne=i.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,r.directionalShadow[_]=ne,r.directionalShadowMap[_]=fe,r.directionalShadowMatrix[_]=I.shadow.matrix,w++}r.directional[_]=Z,_++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(V).multiplyScalar(re),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,r.spot[C]=Z;let te=I.shadow;if(I.map&&(r.spotLightMap[h]=I.map,h++,te.updateMatrices(I),I.castShadow&&S++),r.spotLightMatrix[C]=te.matrix,I.castShadow){let ne=i.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,r.spotShadow[C]=ne,r.spotShadowMap[C]=fe,A++}C++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(V).multiplyScalar(re),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),r.rectArea[B]=Z,B++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let te=I.shadow,ne=i.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,r.pointShadow[p]=ne,r.pointShadowMap[p]=fe,r.pointShadowMatrix[p]=I.shadow.matrix,R++}r.point[p]=Z,p++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(re),Z.groundColor.copy(I.groundColor).multiplyScalar(re),r.hemi[l]=Z,l++}}B>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=d;let N=r.hash;(N.sunLength!==g||N.directionalLength!==_||N.pointLength!==p||N.spotLength!==C||N.rectAreaLength!==B||N.hemiLength!==l||N.numSunShadows!==y||N.numDirectionalShadows!==w||N.numPointShadows!==R||N.numSpotShadows!==A||N.numSpotMaps!==h||N.numLightProbes!==Y)&&(r.sun.length=g,r.directional.length=_,r.spot.length=C,r.rectArea.length=B,r.point.length=p,r.hemi.length=l,r.sunShadow.length=y,r.sunShadowMap.length=y,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+h-S,r.spotLightMap.length=h,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=Y,N.sunLength=g,N.directionalLength=_,N.pointLength=p,N.spotLength=C,N.rectAreaLength=B,N.hemiLength=l,N.numSunShadows=y,N.numDirectionalShadows=w,N.numPointShadows=R,N.numSpotShadows=A,N.numSpotMaps=h,N.numLightProbes=Y,r.version=bm++)}function u(c,f){let m=0,d=0,g=0,y=0,T=0,_=0,p=f.matrixWorldInverse;for(let C=0,B=c.length;C<B;C++){let l=c[C];if(l.isSunLight){let w=r.sun[m];w.direction.setFromMatrixPosition(l.matrixWorld),w.direction.transformDirection(p),m++}else if(l.isDirectionalLight){let w=r.directional[d];w.direction.setFromMatrixPosition(l.matrixWorld),a.setFromMatrixPosition(l.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),d++}else if(l.isSpotLight){let w=r.spot[y];w.position.setFromMatrixPosition(l.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(l.matrixWorld),a.setFromMatrixPosition(l.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),y++}else if(l.isRectAreaLight){let w=r.rectArea[T];w.position.setFromMatrixPosition(l.matrixWorld),w.position.applyMatrix4(p),s.identity(),n.copy(l.matrixWorld),n.premultiply(p),s.extractRotation(n),w.halfWidth.set(l.width*.5,0,0),w.halfHeight.set(0,l.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),T++}else if(l.isPointLight){let w=r.point[g];w.position.setFromMatrixPosition(l.matrixWorld),w.position.applyMatrix4(p),g++}else if(l.isHemisphereLight){let w=r.hemi[_];w.direction.setFromMatrixPosition(l.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:o,setupView:u,state:r}}function fl(e){let t=new Rm(e),i=[],r=[],a=[];function n(d){m.camera=d,i.length=0,r.length=0,a.length=0}function s(d){i.push(d)}function o(d){r.push(d)}function u(d){a.push(d)}function c(){t.setup(i)}function f(d){t.setupView(i,d)}let m={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:m,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:o,pushLightProbeGrid:u}}function Am(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new fl(e),t.set(a,[o])):n>=s.length?(o=new fl(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
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
}`,Lm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Dm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ml=new gt,Qr=new F,Zn=new F;function Um(e,t,i){let r=new ro,a=new De,n=new De,s=new xt,o=new Fu,u=new Bu,c={},f=i.maxTextureSize,m={[ar]:Yt,[Yt]:ar,[ht]:ht},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Cm,fragmentShader:Pm}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let y=new Kt;y.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new At(y,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let p=this.type;this.render=function(R,A,h){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===_h&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);let S=e.getRenderTarget(),Y=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Ui),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Q=p!==this.type;Q&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=R.length;I<V;I++){let re=R[I],X=re.shadow;if(X===void 0){Ie("WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);let fe=X.getFrameExtents();a.multiply(fe),n.copy(X.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(n.x=Math.floor(f/fe.x),a.x=n.x*fe.x,X.mapSize.x=n.x),a.y>f&&(n.y=Math.floor(f/fe.y),a.y=n.y*fe.y,X.mapSize.y=n.y));let Z=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||Q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ea){if(re.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new hi(a.x,a.y,{format:sr,type:Mi,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),X.map.texture.name=re.name+".shadowMap",X.map.depthTexture=new la(a.x,a.y,vi),X.map.depthTexture.name=re.name+".shadowMapDepth",X.map.depthTexture.format=Ii,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Dt,X.map.depthTexture.magFilter=Dt}else re.isPointLight?(X.map=new lh(a.x),X.map.depthTexture=new Au(a.x,yi)):(X.map=new hi(a.x,a.y),X.map.depthTexture=new la(a.x,a.y,yi)),X.map.depthTexture.name=re.name+".shadowMap",X.map.depthTexture.format=Ii,this.type===ia?(X.map.depthTexture.compareFunction=Z?eo:Qs,X.map.depthTexture.minFilter=Ut,X.map.depthTexture.magFilter=Ut):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Dt,X.map.depthTexture.magFilter=Dt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);let te=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();re.isPointLight!==!0&&X.updateMatrices(re,h);for(let ne=0;ne<te;ne++){let Be=X.getCamera(ne);if(re.isPointLight){let Ae=X.camera,Qe=X.matrix,Oe=re.distance||Ae.far;Oe!==Ae.far&&(Ae.far=Oe,Ae.updateProjectionMatrix()),Qr.setFromMatrixPosition(re.matrixWorld),Ae.position.copy(Qr),Zn.copy(Ae.position),Zn.add(Lm[ne]),Ae.up.copy(Dm[ne]),Ae.lookAt(Zn),Ae.updateMatrixWorld(),Qe.makeTranslation(-Qr.x,-Qr.y,-Qr.z),ml.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ml,Ae.coordinateSystem,Ae.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,ne),e.clear();else{ne===0&&(e.setRenderTarget(X.map),e.clear());let Ae=X.getViewport(ne);s.set(n.x*Ae.x,n.y*Ae.y,n.x*Ae.z,n.y*Ae.w),O.viewport(s)}r=X.getFrustum(ne),l(A,h,Be,re,this.type)}X.isPointLightShadow!==!0&&this.type===ea&&C(X,h),X.needsUpdate=!1}p=this.type,_.needsUpdate=!1,e.setRenderTarget(S,Y,N)};function C(R,A){let h=t.update(T);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new hi(a.x,a.y,{format:sr,type:Mi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(A,null,h,d,T,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(A,null,h,g,T,null)}function B(R,A,h,S){let Y=null,N=h.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)Y=N;else if(Y=h.isPointLight===!0?u:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=Y.uuid,Q=A.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let V=I[Q];V===void 0&&(V=Y.clone(),I[Q]=V,A.addEventListener("dispose",w)),Y=V}if(Y.visible=A.visible,Y.wireframe=A.wireframe,S===ea?Y.side=A.shadowSide!==null?A.shadowSide:A.side:Y.side=A.shadowSide!==null?A.shadowSide:m[A.side],Y.alphaMap=A.alphaMap,Y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,Y.map=A.map,Y.clipShadows=A.clipShadows,Y.clippingPlanes=A.clippingPlanes,Y.clipIntersection=A.clipIntersection,Y.displacementMap=A.displacementMap,Y.displacementScale=A.displacementScale,Y.displacementBias=A.displacementBias,Y.wireframeLinewidth=A.wireframeLinewidth,Y.linewidth=A.linewidth,h.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){let O=e.properties.get(Y);O.light=h}return Y}function l(R,A,h,S,Y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&Y===ea)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,R.matrixWorld);let O=t.update(R),Q=R.material;if(Array.isArray(Q)){let I=O.groups;for(let V=0,re=I.length;V<re;V++){let X=I[V],fe=Q[X.materialIndex];if(fe&&fe.visible){let Z=B(R,fe,S,Y);R.onBeforeShadow(e,R,A,h,O,Z,X),e.renderBufferDirect(h,null,O,Z,R,X),R.onAfterShadow(e,R,A,h,O,Z,X)}}}else if(Q.visible){let I=B(R,Q,S,Y);R.onBeforeShadow(e,R,A,h,O,I,null),e.renderBufferDirect(h,null,O,I,R,null),R.onAfterShadow(e,R,A,h,O,I,null)}}let N=R.children;for(let O=0,Q=N.length;O<Q;O++)l(N[O],A,h,S,Y)}function w(R){R.target.removeEventListener("dispose",w);for(let A in c){let h=c[A],S=R.target.uuid;S in h&&(h[S].dispose(),delete h[S])}}}function Nm(e,t){function i(){let b=!1,k=new xt,W=null,ee=new xt(0,0,0,0);return{setMask:function(se){W!==se&&!b&&(e.colorMask(se,se,se,se),W=se)},setLocked:function(se){b=se},setClear:function(se,q,he,Ee,$e){$e===!0&&(se*=Ee,q*=Ee,he*=Ee),k.set(se,q,he,Ee),ee.equals(k)===!1&&(e.clearColor(se,q,he,Ee),ee.copy(k))},reset:function(){b=!1,W=null,ee.set(-1,0,0,0)}}}function r(){let b=!1,k=!1,W=null,ee=null,se=null;return{setReversed:function(q){if(k!==q){let he=t.get("EXT_clip_control");q?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),k=q;let Ee=se;se=null,this.setClear(Ee)}},getReversed:function(){return k},setTest:function(q){q?ce(e.DEPTH_TEST):Ce(e.DEPTH_TEST)},setMask:function(q){W!==q&&!b&&(e.depthMask(q),W=q)},setFunc:function(q){if(k&&(q=Jh[q]),ee!==q){switch(q){case Qn:e.depthFunc(e.NEVER);break;case es:e.depthFunc(e.ALWAYS);break;case ts:e.depthFunc(e.LESS);break;case aa:e.depthFunc(e.LEQUAL);break;case is:e.depthFunc(e.EQUAL);break;case rs:e.depthFunc(e.GEQUAL);break;case as:e.depthFunc(e.GREATER);break;case ns:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ee=q}},setLocked:function(q){b=q},setClear:function(q){se!==q&&(se=q,k&&(q=1-q),e.clearDepth(q))},reset:function(){b=!1,W=null,ee=null,se=null,k=!1}}}function a(){let b=!1,k=null,W=null,ee=null,se=null,q=null,he=null,Ee=null,$e=null;return{setTest:function(Ke){b||(Ke?ce(e.STENCIL_TEST):Ce(e.STENCIL_TEST))},setMask:function(Ke){k!==Ke&&!b&&(e.stencilMask(Ke),k=Ke)},setFunc:function(Ke,Ht,nt){(W!==Ke||ee!==Ht||se!==nt)&&(e.stencilFunc(Ke,Ht,nt),W=Ke,ee=Ht,se=nt)},setOp:function(Ke,Ht,nt){(q!==Ke||he!==Ht||Ee!==nt)&&(e.stencilOp(Ke,Ht,nt),q=Ke,he=Ht,Ee=nt)},setLocked:function(Ke){b=Ke},setClear:function(Ke){$e!==Ke&&(e.clearStencil(Ke),$e=Ke)},reset:function(){b=!1,k=null,W=null,ee=null,se=null,q=null,he=null,Ee=null,$e=null}}}let n=new i,s=new r,o=new a,u=new WeakMap,c=new WeakMap,f={},m={},d={},g=new WeakMap,y=[],T=null,_=!1,p=null,C=null,B=null,l=null,w=null,R=null,A=null,h=new Fe(0,0,0),S=0,Y=!1,N=null,O=null,Q=null,I=null,V=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,fe=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=fe>=1):Z.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=fe>=2);let te=null,ne={},Be=e.getParameter(e.SCISSOR_BOX),Ae=e.getParameter(e.VIEWPORT),Qe=new xt().fromArray(Be),Oe=new xt().fromArray(Ae);function $(b,k,W,ee){let se=new Uint8Array(4),q=e.createTexture();e.bindTexture(b,q),e.texParameteri(b,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(b,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let he=0;he<W;he++)b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY?e.texImage3D(k,0,e.RGBA,1,1,ee,0,e.RGBA,e.UNSIGNED_BYTE,se):e.texImage2D(k+he,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,se);return q}let oe={};oe[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=$(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=$(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(e.DEPTH_TEST),s.setFunc(aa),Ft(!1),et(ho),ce(e.CULL_FACE),ct(Ui);function ce(b){f[b]!==!0&&(e.enable(b),f[b]=!0)}function Ce(b){f[b]!==!1&&(e.disable(b),f[b]=!1)}function Le(b,k){return d[b]!==k?(e.bindFramebuffer(b,k),d[b]=k,b===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=k),b===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=k),!0):!1}function xe(b,k){let W=y,ee=!1;if(b){W=g.get(k),W===void 0&&(W=[],g.set(k,W));let se=b.textures;if(W.length!==se.length||W[0]!==e.COLOR_ATTACHMENT0){for(let q=0,he=se.length;q<he;q++)W[q]=e.COLOR_ATTACHMENT0+q;W.length=se.length,ee=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,ee=!0);ee&&e.drawBuffers(W)}function tt(b){return T!==b?(e.useProgram(b),T=b,!0):!1}let He={[wr]:e.FUNC_ADD,[Sh]:e.FUNC_SUBTRACT,[xh]:e.FUNC_REVERSE_SUBTRACT};He[yh]=e.MIN,He[Mh]=e.MAX;let Ne={[Eh]:e.ZERO,[Th]:e.ONE,[bh]:e.SRC_COLOR,[Sl]:e.SRC_ALPHA,[Lh]:e.SRC_ALPHA_SATURATE,[Ch]:e.DST_COLOR,[Rh]:e.DST_ALPHA,[wh]:e.ONE_MINUS_SRC_COLOR,[xl]:e.ONE_MINUS_SRC_ALPHA,[Ph]:e.ONE_MINUS_DST_COLOR,[Ah]:e.ONE_MINUS_DST_ALPHA,[Dh]:e.CONSTANT_COLOR,[Uh]:e.ONE_MINUS_CONSTANT_COLOR,[Nh]:e.CONSTANT_ALPHA,[Ih]:e.ONE_MINUS_CONSTANT_ALPHA};function ct(b,k,W,ee,se,q,he,Ee,$e,Ke){if(b===Ui){_===!0&&(Ce(e.BLEND),_=!1);return}if(_===!1&&(ce(e.BLEND),_=!0),b!==vh){if(b!==p||Ke!==Y){if((C!==wr||w!==wr)&&(e.blendEquation(e.FUNC_ADD),C=wr,w=wr),Ke)switch(b){case ra:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $n:e.blendFunc(e.ONE,e.ONE);break;case uo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case co:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:qe("WebGLState: Invalid blending: ",b);break}else switch(b){case ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $n:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case uo:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case co:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",b);break}B=null,l=null,R=null,A=null,h.set(0,0,0),S=0,p=b,Y=Ke}return}se=se||k,q=q||W,he=he||ee,(k!==C||se!==w)&&(e.blendEquationSeparate(He[k],He[se]),C=k,w=se),(W!==B||ee!==l||q!==R||he!==A)&&(e.blendFuncSeparate(Ne[W],Ne[ee],Ne[q],Ne[he]),B=W,l=ee,R=q,A=he),(Ee.equals(h)===!1||$e!==S)&&(e.blendColor(Ee.r,Ee.g,Ee.b,$e),h.copy(Ee),S=$e),p=b,Y=!1}function Ct(b,k){b.side===ht?Ce(e.CULL_FACE):ce(e.CULL_FACE);let W=b.side===Yt;k&&(W=!W),Ft(W),b.blending===ra&&b.transparent===!1?ct(Ui):ct(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),n.setMask(b.colorWrite);let ee=b.stencilWrite;o.setTest(ee),ee&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),_t(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):Ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(b){N!==b&&(b?e.frontFace(e.CW):e.frontFace(e.CCW),N=b)}function et(b){b!==mh?(ce(e.CULL_FACE),b!==O&&(b===ho?e.cullFace(e.BACK):b===gh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ce(e.CULL_FACE),O=b}function Mt(b){b!==Q&&(X&&e.lineWidth(b),Q=b)}function _t(b,k,W){b?(ce(e.POLYGON_OFFSET_FILL),(I!==k||V!==W)&&(I=k,V=W,s.getReversed()&&(k=-k),e.polygonOffset(k,W))):Ce(e.POLYGON_OFFSET_FILL)}function dt(b){b?ce(e.SCISSOR_TEST):Ce(e.SCISSOR_TEST)}function U(b){b===void 0&&(b=e.TEXTURE0+re-1),te!==b&&(e.activeTexture(b),te=b)}function Nt(b,k,W){W===void 0&&(te===null?W=e.TEXTURE0+re-1:W=te);let ee=ne[W];ee===void 0&&(ee={type:void 0,texture:void 0},ne[W]=ee),(ee.type!==b||ee.texture!==k)&&(te!==W&&(e.activeTexture(W),te=W),e.bindTexture(b,k||oe[b]),ee.type=b,ee.texture=k)}function Je(){let b=ne[te];b!==void 0&&b.type!==void 0&&(e.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ut(){try{e.compressedTexImage2D(...arguments)}catch(b){qe("WebGLState:",b)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(b){qe("WebGLState:",b)}}function v(){try{e.texSubImage2D(...arguments)}catch(b){qe("WebGLState:",b)}}function L(){try{e.texSubImage3D(...arguments)}catch(b){qe("WebGLState:",b)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(b){qe("WebGLState:",b)}}function ae(){try{e.compressedTexSubImage3D(...arguments)}catch(b){qe("WebGLState:",b)}}function pe(){try{e.texStorage2D(...arguments)}catch(b){qe("WebGLState:",b)}}function Se(){try{e.texStorage3D(...arguments)}catch(b){qe("WebGLState:",b)}}function P(){try{e.texImage2D(...arguments)}catch(b){qe("WebGLState:",b)}}function ue(){try{e.texImage3D(...arguments)}catch(b){qe("WebGLState:",b)}}function _e(b){return m[b]!==void 0?m[b]:e.getParameter(b)}function Me(b,k){m[b]!==k&&(e.pixelStorei(b,k),m[b]=k)}function M(b){Qe.equals(b)===!1&&(e.scissor(b.x,b.y,b.z,b.w),Qe.copy(b))}function J(b){Oe.equals(b)===!1&&(e.viewport(b.x,b.y,b.z,b.w),Oe.copy(b))}function H(b,k){let W=c.get(k);W===void 0&&(W=new WeakMap,c.set(k,W));let ee=W.get(b);ee===void 0&&(ee=e.getUniformBlockIndex(k,b.name),W.set(b,ee))}function ie(b,k){let W=c.get(k).get(b);u.get(k)!==W&&(e.uniformBlockBinding(k,W,b.__bindingPointIndex),u.set(k,W))}function le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},m={},te=null,ne={},d={},g=new WeakMap,y=[],T=null,_=!1,p=null,C=null,B=null,l=null,w=null,R=null,A=null,h=new Fe(0,0,0),S=0,Y=!1,N=null,O=null,Q=null,I=null,V=null,Qe.set(0,0,e.canvas.width,e.canvas.height),Oe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ce,disable:Ce,bindFramebuffer:Le,drawBuffers:xe,useProgram:tt,setBlending:ct,setMaterial:Ct,setFlipSided:Ft,setCullFace:et,setLineWidth:Mt,setPolygonOffset:_t,setScissorTest:dt,activeTexture:U,bindTexture:Nt,unbindTexture:Je,compressedTexImage2D:ut,compressedTexImage3D:E,texImage2D:P,texImage3D:ue,pixelStorei:Me,getParameter:_e,updateUBOMapping:H,uniformBlockBinding:ie,texStorage2D:pe,texStorage3D:Se,texSubImage2D:v,texSubImage3D:L,compressedTexSubImage2D:j,compressedTexSubImage3D:ae,scissor:M,viewport:J,reset:le}}function Im(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,f=new WeakMap,m=new Set,d,g=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,v){return y?new OffscreenCanvas(E,v):an("canvas")}function _(E,v,L){let j=1,ae=ut(E);if((ae.width>L||ae.height>L)&&(j=L/Math.max(ae.width,ae.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let pe=Math.floor(j*ae.width),Se=Math.floor(j*ae.height);d===void 0&&(d=T(pe,Se));let P=v?T(pe,Se):d;return P.width=pe,P.height=Se,P.getContext("2d").drawImage(E,0,0,pe,Se),Ie("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+pe+"x"+Se+")."),P}else return"data"in E&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function p(E){return E.generateMipmaps}function C(E){e.generateMipmap(E)}function B(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function l(E,v,L,j,ae,pe=!1){if(E!==null){if(e[E]!==void 0)return e[E];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Se;j&&(Se=t.get("EXT_texture_norm16"),Se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=v;if(v===e.RED&&(L===e.FLOAT&&(P=e.R32F),L===e.HALF_FLOAT&&(P=e.R16F),L===e.UNSIGNED_BYTE&&(P=e.R8),L===e.UNSIGNED_SHORT&&Se&&(P=Se.R16_EXT),L===e.SHORT&&Se&&(P=Se.R16_SNORM_EXT)),v===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(P=e.R8UI),L===e.UNSIGNED_SHORT&&(P=e.R16UI),L===e.UNSIGNED_INT&&(P=e.R32UI),L===e.BYTE&&(P=e.R8I),L===e.SHORT&&(P=e.R16I),L===e.INT&&(P=e.R32I)),v===e.RG&&(L===e.FLOAT&&(P=e.RG32F),L===e.HALF_FLOAT&&(P=e.RG16F),L===e.UNSIGNED_BYTE&&(P=e.RG8),L===e.UNSIGNED_SHORT&&Se&&(P=Se.RG16_EXT),L===e.SHORT&&Se&&(P=Se.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(P=e.RG8UI),L===e.UNSIGNED_SHORT&&(P=e.RG16UI),L===e.UNSIGNED_INT&&(P=e.RG32UI),L===e.BYTE&&(P=e.RG8I),L===e.SHORT&&(P=e.RG16I),L===e.INT&&(P=e.RG32I)),v===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(P=e.RGB8UI),L===e.UNSIGNED_SHORT&&(P=e.RGB16UI),L===e.UNSIGNED_INT&&(P=e.RGB32UI),L===e.BYTE&&(P=e.RGB8I),L===e.SHORT&&(P=e.RGB16I),L===e.INT&&(P=e.RGB32I)),v===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(P=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(P=e.RGBA16UI),L===e.UNSIGNED_INT&&(P=e.RGBA32UI),L===e.BYTE&&(P=e.RGBA8I),L===e.SHORT&&(P=e.RGBA16I),L===e.INT&&(P=e.RGBA32I)),v===e.RGB&&(L===e.UNSIGNED_SHORT&&Se&&(P=Se.RGB16_EXT),L===e.SHORT&&Se&&(P=Se.RGB16_SNORM_EXT),L===e.UNSIGNED_INT_5_9_9_9_REV&&(P=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(P=e.R11F_G11F_B10F)),v===e.RGBA){let ue=pe?rn:Ye.getTransfer(ae);L===e.FLOAT&&(P=e.RGBA32F),L===e.HALF_FLOAT&&(P=e.RGBA16F),L===e.UNSIGNED_BYTE&&(P=ue===rt?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT&&Se&&(P=Se.RGBA16_EXT),L===e.SHORT&&Se&&(P=Se.RGBA16_SNORM_EXT),L===e.UNSIGNED_SHORT_4_4_4_4&&(P=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(P=e.RGB5_A1)}return(P===e.R16F||P===e.R32F||P===e.RG16F||P===e.RG32F||P===e.RGBA16F||P===e.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function w(E,v){let L;return E?v===null||v===yi||v===sa?L=e.DEPTH24_STENCIL8:v===vi?L=e.DEPTH32F_STENCIL8:v===na&&(L=e.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yi||v===sa?L=e.DEPTH_COMPONENT24:v===vi?L=e.DEPTH_COMPONENT32F:v===na&&(L=e.DEPTH_COMPONENT16),L}function R(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){let v=E.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&m.delete(v)}function h(E){let v=E.target;v.removeEventListener("dispose",h),N(v)}function S(E){let v=r.get(E);if(v.__webglInit===void 0)return;let L=E.source,j=g.get(L);if(j){let ae=j[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&Y(E),Object.keys(j).length===0&&g.delete(L)}r.remove(E)}function Y(E){let v=r.get(E);e.deleteTexture(v.__webglTexture);let L=E.source,j=g.get(L);delete j[v.__cacheKey],s.memory.textures--}function N(E){let v=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ae=0;ae<v.__webglFramebuffer[j].length;ae++)e.deleteFramebuffer(v.__webglFramebuffer[j][ae]);else e.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)e.deleteFramebuffer(v.__webglFramebuffer[j]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=E.textures;for(let j=0,ae=L.length;j<ae;j++){let pe=r.get(L[j]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(L[j])}r.remove(E)}let O=0;function Q(){O=0}function I(){return O}function V(E){O=E}function re(){let E=O;return E>=a.maxTextures&&Ie("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,E}function X(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function fe(E,v){let L=r.get(E);if(E.isVideoTexture&&Nt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){let j=E.image;if(j===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(L,E,v);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+v)}function Z(E,v){let L=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Ce(L,E,v);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+v)}function te(E,v){let L=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Ce(L,E,v);return}i.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+v)}function ne(E,v){let L=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){Le(L,E,v);return}i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+v)}let Be={[ss]:e.REPEAT,[Di]:e.CLAMP_TO_EDGE,[os]:e.MIRRORED_REPEAT},Ae={[Dt]:e.NEAREST,[Bh]:e.NEAREST_MIPMAP_NEAREST,[fa]:e.NEAREST_MIPMAP_LINEAR,[Ut]:e.LINEAR,[vn]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},Qe={[kh]:e.NEVER,[Yh]:e.ALWAYS,[Hh]:e.LESS,[Qs]:e.LEQUAL,[Wh]:e.EQUAL,[eo]:e.GEQUAL,[Xh]:e.GREATER,[jh]:e.NOTEQUAL};function Oe(E,v){if(v.type===vi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ut||v.magFilter===vn||v.magFilter===fa||v.magFilter===tr||v.minFilter===Ut||v.minFilter===vn||v.minFilter===fa||v.minFilter===tr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Be[v.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Be[v.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Be[v.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Ae[v.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Ae[v.minFilter]),v.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Qe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dt||v.minFilter!==fa&&v.minFilter!==tr||v.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function $(E,v){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));let j=v.source,ae=g.get(j);ae===void 0&&(ae={},g.set(j,ae));let pe=X(v);if(pe!==E.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,L=!0),ae[pe].usedTimes++;let Se=ae[E.__cacheKey];Se!==void 0&&(ae[E.__cacheKey].usedTimes--,Se.usedTimes===0&&Y(v)),E.__cacheKey=pe,E.__webglTexture=ae[pe].texture}return L}function oe(E,v,L){return Math.floor(Math.floor(E/L)/v)}function ce(E,v,L,j){let ae=E.updateRanges;if(ae.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,L,j,v.data);else{ae.sort((_e,Me)=>_e.start-Me.start);let pe=0;for(let _e=1;_e<ae.length;_e++){let Me=ae[pe],M=ae[_e],J=Me.start+Me.count,H=oe(M.start,v.width,4),ie=oe(Me.start,v.width,4);M.start<=J+1&&H===ie&&oe(M.start+M.count-1,v.width,4)===H?Me.count=Math.max(Me.count,M.start+M.count-Me.start):(++pe,ae[pe]=M)}ae.length=pe+1;let Se=i.getParameter(e.UNPACK_ROW_LENGTH),P=i.getParameter(e.UNPACK_SKIP_PIXELS),ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let _e=0,Me=ae.length;_e<Me;_e++){let M=ae[_e],J=Math.floor(M.start/4),H=Math.ceil(M.count/4),ie=J%v.width,le=Math.floor(J/v.width),b=H;i.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(e.UNPACK_SKIP_ROWS,le),i.texSubImage2D(e.TEXTURE_2D,0,ie,le,b,1,L,j,v.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Se),i.pixelStorei(e.UNPACK_SKIP_PIXELS,P),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function Ce(E,v,L){let j=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=e.TEXTURE_3D);let ae=$(E,v),pe=v.source;i.bindTexture(j,E.__webglTexture,e.TEXTURE0+L);let Se=r.get(pe);if(pe.version!==Se.__version||ae===!0){if(i.activeTexture(e.TEXTURE0+L),!(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)){let k=Ye.getPrimaries(Ye.workingColorSpace),W=v.colorSpace===Xi?null:Ye.getPrimaries(v.colorSpace),ee=v.colorSpace===Xi||k===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let P=_(v.image,!1,a.maxTextureSize);P=Je(v,P);let ue=n.convert(v.format,v.colorSpace),_e=n.convert(v.type),Me=l(v.internalFormat,ue,_e,v.normalized,v.colorSpace,v.isVideoTexture);Oe(j,v);let M,J=v.mipmaps,H=v.isVideoTexture!==!0,ie=Se.__version===void 0||ae===!0,le=pe.dataReady,b=R(v,P);if(v.isDepthTexture)Me=w(v.format===ir,v.type),ie&&(H?i.texStorage2D(e.TEXTURE_2D,1,Me,P.width,P.height):i.texImage2D(e.TEXTURE_2D,0,Me,P.width,P.height,0,ue,_e,null));else if(v.isDataTexture)if(J.length>0){H&&ie&&i.texStorage2D(e.TEXTURE_2D,b,Me,J[0].width,J[0].height);for(let k=0,W=J.length;k<W;k++)M=J[k],H?le&&i.texSubImage2D(e.TEXTURE_2D,k,0,0,M.width,M.height,ue,_e,M.data):i.texImage2D(e.TEXTURE_2D,k,Me,M.width,M.height,0,ue,_e,M.data);v.generateMipmaps=!1}else H?(ie&&i.texStorage2D(e.TEXTURE_2D,b,Me,P.width,P.height),le&&ce(v,P,ue,_e)):i.texImage2D(e.TEXTURE_2D,0,Me,P.width,P.height,0,ue,_e,P.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){H&&ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,b,Me,J[0].width,J[0].height,P.depth);for(let k=0,W=J.length;k<W;k++)if(M=J[k],v.format!==li)if(ue!==null)if(H){if(le)if(v.layerUpdates.size>0){let ee=Yo(M.width,M.height,v.format,v.type);for(let se of v.layerUpdates){let q=M.data.subarray(se*ee/M.data.BYTES_PER_ELEMENT,(se+1)*ee/M.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,se,M.width,M.height,1,ue,q)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,M.width,M.height,P.depth,ue,M.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,k,Me,M.width,M.height,P.depth,0,M.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?le&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,M.width,M.height,P.depth,ue,_e,M.data):i.texImage3D(e.TEXTURE_2D_ARRAY,k,Me,M.width,M.height,P.depth,0,ue,_e,M.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{H&&ie&&i.texStorage2D(e.TEXTURE_2D,b,Me,J[0].width,J[0].height);for(let k=0,W=J.length;k<W;k++)M=J[k],v.format!==li?ue!==null?H?le&&i.compressedTexSubImage2D(e.TEXTURE_2D,k,0,0,M.width,M.height,ue,M.data):i.compressedTexImage2D(e.TEXTURE_2D,k,Me,M.width,M.height,0,M.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?le&&i.texSubImage2D(e.TEXTURE_2D,k,0,0,M.width,M.height,ue,_e,M.data):i.texImage2D(e.TEXTURE_2D,k,Me,M.width,M.height,0,ue,_e,M.data)}else if(v.isDataArrayTexture)if(H){if(ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,b,Me,P.width,P.height,P.depth),le)if(v.layerUpdates.size>0){let k=Yo(P.width,P.height,v.format,v.type);for(let W of v.layerUpdates){let ee=P.data.subarray(W*k/P.data.BYTES_PER_ELEMENT,(W+1)*k/P.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,W,P.width,P.height,1,ue,_e,ee)}v.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,ue,_e,P.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,P.width,P.height,P.depth,0,ue,_e,P.data);else if(v.isData3DTexture)H?(ie&&i.texStorage3D(e.TEXTURE_3D,b,Me,P.width,P.height,P.depth),le&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,ue,_e,P.data)):i.texImage3D(e.TEXTURE_3D,0,Me,P.width,P.height,P.depth,0,ue,_e,P.data);else if(v.isFramebufferTexture){if(ie)if(H)i.texStorage2D(e.TEXTURE_2D,b,Me,P.width,P.height);else{let k=P.width,W=P.height;for(let ee=0;ee<b;ee++)i.texImage2D(e.TEXTURE_2D,ee,Me,k,W,0,ue,_e,null),k>>=1,W>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let k=e.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),P.parentNode!==k){k.appendChild(P),m.add(v),k.onpaint=W=>{let ee=W.changedElements;for(let se of m)ee.includes(se.image)&&(se.needsUpdate=!0)},k.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,P);else{let W=e.RGBA,ee=e.RGBA,se=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,W,ee,se,P)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(J.length>0){if(H&&ie){let k=ut(J[0]);i.texStorage2D(e.TEXTURE_2D,b,Me,k.width,k.height)}for(let k=0,W=J.length;k<W;k++)M=J[k],H?le&&i.texSubImage2D(e.TEXTURE_2D,k,0,0,ue,_e,M):i.texImage2D(e.TEXTURE_2D,k,Me,ue,_e,M);v.generateMipmaps=!1}else if(H){if(ie){let k=ut(P);i.texStorage2D(e.TEXTURE_2D,b,Me,k.width,k.height)}le&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,_e,P)}else i.texImage2D(e.TEXTURE_2D,0,Me,ue,_e,P);p(v)&&C(j),Se.__version=pe.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Le(E,v,L){if(v.image.length!==6)return;let j=$(E,v),ae=v.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+L);let pe=r.get(ae);if(ae.version!==pe.__version||j===!0){i.activeTexture(e.TEXTURE0+L);let Se=Ye.getPrimaries(Ye.workingColorSpace),P=v.colorSpace===Xi?null:Ye.getPrimaries(v.colorSpace),ue=v.colorSpace===Xi||Se===P?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,M=[];for(let q=0;q<6;q++)!_e&&!Me?M[q]=_(v.image[q],!0,a.maxCubemapSize):M[q]=Me?v.image[q].image:v.image[q],M[q]=Je(v,M[q]);let J=M[0],H=n.convert(v.format,v.colorSpace),ie=n.convert(v.type),le=l(v.internalFormat,H,ie,v.normalized,v.colorSpace),b=v.isVideoTexture!==!0,k=pe.__version===void 0||j===!0,W=ae.dataReady,ee=R(v,J);Oe(e.TEXTURE_CUBE_MAP,v);let se;if(_e){b&&k&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ee,le,J.width,J.height);for(let q=0;q<6;q++){se=M[q].mipmaps;for(let he=0;he<se.length;he++){let Ee=se[he];v.format!==li?H!==null?b?W&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,0,0,Ee.width,Ee.height,H,Ee.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,le,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?W&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,0,0,Ee.width,Ee.height,H,ie,Ee.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,le,Ee.width,Ee.height,0,H,ie,Ee.data)}}}else{if(se=v.mipmaps,b&&k){se.length>0&&ee++;let q=ut(M[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ee,le,q.width,q.height)}for(let q=0;q<6;q++)if(Me){b?W&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,M[q].width,M[q].height,H,ie,M[q].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,le,M[q].width,M[q].height,0,H,ie,M[q].data);for(let he=0;he<se.length;he++){let Ee=se[he].image[q].image;b?W&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,0,0,Ee.width,Ee.height,H,ie,Ee.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,le,Ee.width,Ee.height,0,H,ie,Ee.data)}}else{b?W&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,H,ie,M[q]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,le,H,ie,M[q]);for(let he=0;he<se.length;he++){let Ee=se[he];b?W&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,0,0,H,ie,Ee.image[q]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,le,H,ie,Ee.image[q])}}}p(v)&&C(e.TEXTURE_CUBE_MAP),pe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xe(E,v,L,j,ae,pe){let Se=n.convert(L.format,L.colorSpace),P=n.convert(L.type),ue=l(L.internalFormat,Se,P,L.normalized,L.colorSpace),_e=r.get(v),Me=r.get(L);if(Me.__renderTarget=v,!_e.__hasExternalTextures){let M=Math.max(1,v.width>>pe),J=Math.max(1,v.height>>pe);ae===e.TEXTURE_3D||ae===e.TEXTURE_2D_ARRAY?i.texImage3D(ae,pe,ue,M,J,v.depth,0,Se,P,null):i.texImage2D(ae,pe,ue,M,J,0,Se,P,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),U(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,ae,Me.__webglTexture,0,dt(v)):(ae===e.TEXTURE_2D||ae>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,j,ae,Me.__webglTexture,pe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(E,v,L){if(e.bindRenderbuffer(e.RENDERBUFFER,E),v.depthBuffer){let j=v.depthTexture,ae=j&&j.isDepthTexture?j.type:null,pe=w(v.stencilBuffer,ae),Se=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;U(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,dt(v),pe,v.width,v.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,dt(v),pe,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,pe,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,E)}else{let j=v.textures;for(let ae=0;ae<j.length;ae++){let pe=j[ae],Se=n.convert(pe.format,pe.colorSpace),P=n.convert(pe.type),ue=l(pe.internalFormat,Se,P,pe.normalized,pe.colorSpace);U(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,dt(v),ue,v.width,v.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,dt(v),ue,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ue,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function He(E,v,L){let j=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=r.get(v.depthTexture);if(ae.__renderTarget=v,(!ae.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),ae.__webglTexture===void 0){ae.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,v.depthTexture);let _e=n.convert(v.depthTexture.format),Me=n.convert(v.depthTexture.type),M;v.depthTexture.format===Ii?M=e.DEPTH_COMPONENT24:v.depthTexture.format===ir&&(M=e.DEPTH24_STENCIL8);for(let J=0;J<6;J++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,M,v.width,v.height,0,_e,Me,null)}}else fe(v.depthTexture,0);let pe=ae.__webglTexture,Se=dt(v),P=j?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,ue=v.depthTexture.format===ir?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ii)U(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,P,pe,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,ue,P,pe,0);else if(v.depthTexture.format===ir)U(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,P,pe,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,ue,P,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(E){let v=r.get(E),L=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let j=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){let ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",ae)};j.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=j}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let j=0;j<6;j++)He(v.__webglFramebuffer[j],E,j);else{let j=E.texture.mipmaps;j&&j.length>0?He(v.__webglFramebuffer[0],E,0):He(v.__webglFramebuffer,E,0)}else if(L){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=e.createRenderbuffer(),tt(v.__webglDepthbuffer[j],E,!1);else{let ae=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=v.__webglDepthbuffer[j];e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,pe)}}else{let j=E.texture.mipmaps;if(j&&j.length>0?i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),tt(v.__webglDepthbuffer,E,!1);else{let ae=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,pe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ct(E,v,L){let j=r.get(E);v!==void 0&&xe(j.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&Ne(E)}function Ct(E){let v=E.texture,L=r.get(E),j=r.get(v);E.addEventListener("dispose",h);let ae=E.textures,pe=E.isWebGLCubeRenderTarget===!0,Se=ae.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=e.createTexture()),j.__version=v.version,s.memory.textures++),pe){L.__webglFramebuffer=[];for(let P=0;P<6;P++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[P]=[];for(let ue=0;ue<v.mipmaps.length;ue++)L.__webglFramebuffer[P][ue]=e.createFramebuffer()}else L.__webglFramebuffer[P]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let P=0;P<v.mipmaps.length;P++)L.__webglFramebuffer[P]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(Se)for(let P=0,ue=ae.length;P<ue;P++){let _e=r.get(ae[P]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&U(E)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let P=0;P<ae.length;P++){let ue=ae[P];L.__webglColorRenderbuffer[P]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[P]);let _e=n.convert(ue.format,ue.colorSpace),Me=n.convert(ue.type),M=l(ue.internalFormat,_e,Me,ue.normalized,ue.colorSpace,E.isXRRenderTarget===!0),J=dt(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,J,M,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+P,e.RENDERBUFFER,L.__webglColorRenderbuffer[P])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),tt(L.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pe){i.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,v);for(let P=0;P<6;P++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)xe(L.__webglFramebuffer[P][ue],E,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue);else xe(L.__webglFramebuffer[P],E,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);p(v)&&C(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Se){for(let P=0,ue=ae.length;P<ue;P++){let _e=ae[P],Me=r.get(_e),M=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(M=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(M,Me.__webglTexture),Oe(M,_e),xe(L.__webglFramebuffer,E,_e,e.COLOR_ATTACHMENT0+P,M,0),p(_e)&&C(M)}i.unbindTexture()}else{let P=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(P=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(P,j.__webglTexture),Oe(P,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)xe(L.__webglFramebuffer[ue],E,v,e.COLOR_ATTACHMENT0,P,ue);else xe(L.__webglFramebuffer,E,v,e.COLOR_ATTACHMENT0,P,0);p(v)&&C(P),i.unbindTexture()}E.depthBuffer&&Ne(E)}function Ft(E){let v=E.textures;for(let L=0,j=v.length;L<j;L++){let ae=v[L];if(p(ae)){let pe=B(E),Se=r.get(ae).__webglTexture;i.bindTexture(pe,Se),C(pe),i.unbindTexture()}}}let et=[],Mt=[];function _t(E){if(E.samples>0){if(U(E)===!1){let v=E.textures,L=E.width,j=E.height,ae=e.COLOR_BUFFER_BIT,pe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=r.get(E),P=v.length>1;if(P)for(let _e=0;_e<v.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ue=E.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=e.STENCIL_BUFFER_BIT)),P){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);let Me=r.get(v[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Me,0)}e.blitFramebuffer(0,0,L,j,0,0,L,j,ae,e.NEAREST),u===!0&&(et.length=0,Mt.length=0,et.push(e.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(et.push(pe),Mt.push(pe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Mt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,et))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),P)for(let _e=0;_e<v.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);let Me=r.get(v[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Me,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&u){let v=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function dt(E){return Math.min(a.maxSamples,E.samples)}function U(E){let v=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(E){let v=s.render.frame;f.get(E)!==v&&(f.set(E,v),E.update())}function Je(E,v){let L=E.colorSpace,j=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==tn&&L!==Xi&&(Ye.getTransfer(L)===rt?(j!==li||ae!==$t)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",L)),v}function ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=Q,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=fe,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=ct,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Om(e,t){function i(r,a=Xi){let n,s=Ye.getTransfer(a);if(r===$t)return e.UNSIGNED_BYTE;if(r===Ks)return e.UNSIGNED_SHORT_4_4_4_4;if(r===qs)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Ll)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Dl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cl)return e.BYTE;if(r===Pl)return e.SHORT;if(r===na)return e.UNSIGNED_SHORT;if(r===Ys)return e.INT;if(r===yi)return e.UNSIGNED_INT;if(r===vi)return e.FLOAT;if(r===Mi)return e.HALF_FLOAT;if(r===Ul)return e.ALPHA;if(r===Nl)return e.RGB;if(r===li)return e.RGBA;if(r===Ii)return e.DEPTH_COMPONENT;if(r===ir)return e.DEPTH_STENCIL;if(r===Il)return e.RED;if(r===Zs)return e.RED_INTEGER;if(r===sr)return e.RG;if(r===Js)return e.RG_INTEGER;if(r===$s)return e.RGBA_INTEGER;if(r===Xa||r===ja||r===Ya||r===Ka)if(s===rt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Xa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ja)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ya)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ka)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Xa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ja)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ya)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ka)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ls||r===hs||r===us||r===cs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ls)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===us)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ds||r===ps||r===fs||r===ms||r===gs||r===Qa||r===_s)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===ds||r===ps)return s===rt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===fs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===ms)return n.COMPRESSED_R11_EAC;if(r===gs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Qa)return n.COMPRESSED_RG11_EAC;if(r===_s)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===vs||r===Ss||r===xs||r===ys||r===Ms||r===Es||r===Ts||r===bs||r===ws||r===Rs||r===As||r===Cs||r===Ps||r===Ls)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===vs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ss)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ys)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ms)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Es)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ts)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ws)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===As)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ps)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ls)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ds||r===Us||r===Ns)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Ds)return s===rt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Us)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ns)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Is||r===Os||r===en||r===Fs)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Is)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Os)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===en)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bm=`
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

}`,zm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Zl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ei({vertexShader:Fm,fragmentShader:Bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gm=class extends Ki{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,u=null,c=null,f=null,m=null,d=null,g=null,y=typeof XRWebGLBinding<"u",T=new zm,_={},p=t.getContextAttributes(),C=null,B=null,l=[],w=[],R=new De,A=null,h=null,S=new ii;S.viewport=new xt;let Y=new ii;Y.viewport=new xt;let N=[S,Y],O=new Hu,Q=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=l[$];return oe===void 0&&(oe=new wn,l[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=l[$];return oe===void 0&&(oe=new wn,l[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=l[$];return oe===void 0&&(oe=new wn,l[$]=oe),oe.getHandSpace()};function V($){let oe=w.indexOf($.inputSource);if(oe===-1)return;let ce=l[oe];ce!==void 0&&(ce.update($.inputSource,$.frame,u||n),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function re(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",X);for(let $=0;$<l.length;$++){let oe=w[$];oe!==null&&(w[$]=null,l[$].disconnect(oe))}Q=null,I=null,T.reset();for(let $ in _)delete _[$];if(e.setRenderTarget(C),d=null,m=null,f=null,r=null,B=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),h!==null){let $=h.camera;$.fov=h.fov,$.zoom=h.zoom,$.updateProjectionMatrix(),h=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||n},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",re),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ce=null,Ce=null;p.depth&&(Ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?ir:Ii,ce=p.stencil?sa:yi);let Le={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};f=this.getBinding(),m=f.createProjectionLayer(Le),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),B=new hi(m.textureWidth,m.textureHeight,{format:li,type:$t,depthTexture:new la(m.textureWidth,m.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),B=new hi(d.framebufferWidth,d.framebufferHeight,{format:li,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(o),u=null,n=await r.requestReferenceSpace(s),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function X($){for(let oe=0;oe<$.removed.length;oe++){let ce=$.removed[oe],Ce=w.indexOf(ce);Ce>=0&&(w[Ce]=null,l[Ce].disconnect(ce))}for(let oe=0;oe<$.added.length;oe++){let ce=$.added[oe],Ce=w.indexOf(ce);if(Ce===-1){for(let xe=0;xe<l.length;xe++)if(xe>=w.length){w.push(ce),Ce=xe;break}else if(w[xe]===null){w[xe]=ce,Ce=xe;break}if(Ce===-1)break}let Le=l[Ce];Le&&Le.connect(ce)}}let fe=new F,Z=new F;function te($,oe,ce){fe.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);let Ce=fe.distanceTo(Z),Le=oe.projectionMatrix.elements,xe=ce.projectionMatrix.elements,tt=Le[14]/(Le[10]-1),He=Le[14]/(Le[10]+1),Ne=(Le[9]+1)/Le[5],ct=(Le[9]-1)/Le[5],Ct=(Le[8]-1)/Le[0],Ft=(xe[8]+1)/xe[0],et=tt*Ct,Mt=tt*Ft,_t=Ce/(-Ct+Ft),dt=_t*-Ct;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(dt),$.translateZ(_t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let U=tt+_t,Nt=He+_t,Je=et-dt,ut=Mt+(Ce-dt),E=Ne*He/Nt*U,v=ct*He/Nt*U;$.projectionMatrix.makePerspective(Je,ut,E,v,U,Nt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let oe=$.near,ce=$.far;T.texture!==null&&(T.depthNear>0&&(oe=T.depthNear),T.depthFar>0&&(ce=T.depthFar)),O.near=Y.near=S.near=oe,O.far=Y.far=S.far=ce,(Q!==O.near||I!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Q=O.near,I=O.far),O.layers.mask=$.layers.mask|6,S.layers.mask=O.layers.mask&-5,Y.layers.mask=O.layers.mask&-3;let Ce=$.parent,Le=O.cameras;ne(O,Ce);for(let xe=0;xe<Le.length;xe++)ne(Le[xe],Ce);Le.length===2?te(O,S,Y):O.projectionMatrix.copy(S.projectionMatrix),h===null&&$.isPerspectiveCamera&&(h={camera:$,fov:$.fov,zoom:$.zoom}),Be($,O,Ce)};function Be($,oe,ce){ce===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(m===null&&d===null))return o},this.setFoveation=function($){o=$,m!==null&&(m.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(O)},this.getCameraTexture=function($){return _[$]};let Ae=null;function Qe($,oe){if(c=oe.getViewerPose(u||n),g=oe,c!==null){let ce=c.views;d!==null&&(e.setRenderTargetFramebuffer(B,d.framebuffer),e.setRenderTarget(B));let Ce=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let xe=0;xe<ce.length;xe++){let tt=ce[xe],He=null;if(d!==null)He=d.getViewport(tt);else{let ct=f.getViewSubImage(m,tt);He=ct.viewport,xe===0&&(e.setRenderTargetTextures(B,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(B))}let Ne=N[xe];Ne===void 0&&(Ne=new ii,Ne.layers.enable(xe),Ne.viewport=new xt,N[xe]=Ne),Ne.matrix.fromArray(tt.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(tt.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(He.x,He.y,He.width,He.height),xe===0&&(O.matrix.copy(Ne.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(Ne)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let xe=f.getDepthInformation(ce[0]);xe&&xe.isValid&&xe.texture&&T.init(xe,r.renderState)}if(Le&&Le.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let xe=0;xe<ce.length;xe++){let tt=ce[xe].camera;if(tt){let He=_[tt];He||(He=new Zl,_[tt]=He);let Ne=f.getCameraImage(tt);He.sourceTexture=Ne}}}}for(let ce=0;ce<l.length;ce++){let Ce=w[ce],Le=l[ce];Ce!==null&&Le!==void 0&&Le.update(Ce,oe,u||n)}Ae&&Ae($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Oe=new sh;Oe.setAnimationLoop(Qe),this.setAnimationLoop=function($){Ae=$},this.dispose=function(){}}},Vm=new gt,ph=new ze;ph.set(-1,0,0,0,1,0,0,0,1);function km(e,t){function i(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function r(_,p){p.color.getRGB(_.fogColor.value,ih(e)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function a(_,p,C,B,l){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(_,p):p.isMeshLambertMaterial?(n(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(_,p),m(_,p)):p.isMeshPhongMaterial?(n(_,p),f(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(_,p),d(_,p),p.isMeshPhysicalMaterial&&g(_,p,l)):p.isMeshMatcapMaterial?(n(_,p),y(_,p)):p.isMeshDepthMaterial?n(_,p):p.isMeshDistanceMaterial?(n(_,p),T(_,p)):p.isMeshNormalMaterial?n(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?u(_,p,C,B):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,i(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,i(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Yt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,i(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Yt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,i(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,i(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let C=t.get(p),B=C.envMap,l=C.envMapRotation;B&&(_.envMap.value=B,_.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(l)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(ph),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,i(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function u(_,p,C,B){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*C,_.scale.value=B*.5,p.map&&(_.map.value=p.map,i(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,i(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function m(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,C){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.retroreflectivity>0&&(_.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,p){p.matcap&&(_.matcap.value=p.matcap)}function T(_,p){let C=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Hm(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function u(l,w){let R=w.program;r.uniformBlockBinding(l,R)}function c(l,w){let R=a[l.id];R===void 0&&(_(l),R=f(l),a[l.id]=R,l.addEventListener("dispose",C));let A=w.program;r.updateUBOMapping(l,A);let h=t.render.frame;n[l.id]!==h&&(d(l),n[l.id]=h)}function f(l){let w=m();l.__bindingPointIndex=w;let R=e.createBuffer(),A=l.__size,h=l.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,A,h),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,R),R}function m(){for(let l=0;l<o;l++)if(s.indexOf(l)===-1)return s.push(l),l;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(l){let w=a[l.id],R=l.uniforms,A=l.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let h=0,S=R.length;h<S;h++){let Y=R[h];if(Array.isArray(Y))for(let N=0,O=Y.length;N<O;N++)g(Y[N],h,N,A);else g(Y,h,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(l,w,R,A){if(T(l,w,R,A)===!0){let h=l.__offset,S=l.value;if(Array.isArray(S)){let Y=0;for(let N=0;N<S.length;N++){let O=S[N],Q=p(O);y(O,l.__data,Y),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(S,l.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,h,l.__data)}}function y(l,w,R){typeof l=="number"||typeof l=="boolean"?w[0]=l:l.isMatrix3?(w[0]=l.elements[0],w[1]=l.elements[1],w[2]=l.elements[2],w[3]=0,w[4]=l.elements[3],w[5]=l.elements[4],w[6]=l.elements[5],w[7]=0,w[8]=l.elements[6],w[9]=l.elements[7],w[10]=l.elements[8],w[11]=0):ArrayBuffer.isView(l)?w.set(new l.constructor(l.buffer,l.byteOffset,w.length)):l.toArray(w,R)}function T(l,w,R,A){let h=l.value,S=w+"_"+R;if(A[S]===void 0)return typeof h=="number"||typeof h=="boolean"?A[S]=h:ArrayBuffer.isView(h)?A[S]=h.slice():A[S]=h.clone(),!0;{let Y=A[S];if(typeof h=="number"||typeof h=="boolean"){if(Y!==h)return A[S]=h,!0}else{if(ArrayBuffer.isView(h))return!0;if(Y.equals(h)===!1)return Y.copy(h),!0}}return!1}function _(l){let w=l.uniforms,R=0,A=16;for(let S=0,Y=w.length;S<Y;S++){let N=Array.isArray(w[S])?w[S]:[w[S]];for(let O=0,Q=N.length;O<Q;O++){let I=N[O],V=Array.isArray(I.value)?I.value:[I.value];for(let re=0,X=V.length;re<X;re++){let fe=V[re],Z=p(fe),te=R%A,ne=te%Z.boundary,Be=te+ne;R+=ne,Be!==0&&A-Be<Z.storage&&(R+=A-Be),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=R,R+=Z.storage}}}let h=R%A;return h>0&&(R+=A-h),l.__size=R,l.__cache={},this}function p(l){let w={boundary:0,storage:0};return typeof l=="number"||typeof l=="boolean"?(w.boundary=4,w.storage=4):l.isVector2?(w.boundary=8,w.storage=8):l.isVector3||l.isColor?(w.boundary=16,w.storage=12):l.isVector4?(w.boundary=16,w.storage=16):l.isMatrix3?(w.boundary=48,w.storage=48):l.isMatrix4?(w.boundary=64,w.storage=64):l.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(l)?(w.boundary=16,w.storage=l.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",l),w}function C(l){let w=l.target;w.removeEventListener("dispose",C);let R=s.indexOf(w.__bindingPointIndex);s.splice(R,1),e.deleteBuffer(a[w.id]),delete a[w.id],delete n[w.id]}function B(){for(let l in a)e.deleteBuffer(a[l]);s=[],a={},n={}}return{bind:u,update:c,dispose:B}}var Wm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Xm(){return mi===null&&(mi=new Eu(Wm,16,16,sr,Mi),mi.name="DFG_LUT",mi.minFilter=Ut,mi.magFilter=Ut,mi.wrapS=Di,mi.wrapT=Di,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var jm=class{constructor(e={}){let{canvas:t=qh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:d=$t}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=n;let y=d,T=new Set([$s,Js,Zs]),_=new Set([$t,yi,na,sa,Ks,qs]),p=new Uint32Array(4),C=new Int32Array(4),B=new F,l=null,w=null,R=[],A=[],h=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,Y=!1,N=null,O=null,Q=null,I=null;this._outputColorSpace=ti;let V=0,re=0,X=null,fe=-1,Z=null,te=new xt,ne=new xt,Be=null,Ae=new Fe(0),Qe=0,Oe=t.width,$=t.height,oe=1,ce=null,Ce=null,Le=new xt(0,0,Oe,$),xe=new xt(0,0,Oe,$),tt=!1,He=new ro,Ne=!1,ct=!1,Ct=new gt,Ft=new F,et=new xt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function dt(){return X===null?oe:1}let U=i;function Nt(x,D){return t.getContext(x,D)}let Je,ut,E,v,L,j,ae,pe,Se,P,ue,_e,Me,M,J,H,ie,le,b,k,W,ee,se;try{let x={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xs}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),U===null){let D="webgl2";if(U=Nt(D,x),U===null)throw Nt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}q()}catch(x){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),qe("WebGLRenderer: "+x.message),x}function q(){Je=new Wp(U),Je.init(),W=new Om(U,Je),ut=new Np(U,Je,e,W),E=new Nm(U,Je),ut.reversedDepthBuffer&&m&&E.buffers.depth.setReversed(!0),O=U.createFramebuffer(),Q=U.createFramebuffer(),I=U.createFramebuffer(),v=new Yp(U),L=new xm,j=new Im(U,Je,E,L,ut,W,v),ae=new Hp(S),pe=new qu(U),ee=new Dp(U,pe),Se=new Xp(U,pe,v,ee),P=new qp(U,Se,pe,ee,v),le=new Kp(U,ut,j),J=new Ip(L),ue=new Sm(S,ae,Je,ut,ee,J),_e=new km(S,L),Me=new Mm,M=new Am(Je),ie=new Lp(S,ae,E,P,g,o),H=new Um(S,P,ut),se=new Hm(U,v,ut,E),b=new Up(U,Je,v),k=new jp(U,Je,v),v.programs=ue.programs,S.capabilities=ut,S.extensions=Je,S.properties=L,S.renderLists=Me,S.shadowMap=H,S.state=E,S.info=v}y!==$t&&(h=new Jp(y,t.width,t.height,s,r,a));let he=new Gm(S,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let x=Je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(x){x!==void 0&&(oe=x,this.setSize(Oe,$,!1))},this.getSize=function(x){return x.set(Oe,$)},this.setSize=function(x,D,K=!0){if(he.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=x,$=D,t.width=Math.floor(x*oe),t.height=Math.floor(D*oe),K===!0&&(t.style.width=x+"px",t.style.height=D+"px"),h!==null&&h.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Oe*oe,$*oe).floor()},this.setDrawingBufferSize=function(x,D,K){Oe=x,$=D,oe=K,t.width=Math.floor(x*K),t.height=Math.floor(D*K),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(y===$t){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}h.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(te)},this.getViewport=function(x){return x.copy(Le)},this.setViewport=function(x,D,K,G){x.isVector4?Le.set(x.x,x.y,x.z,x.w):Le.set(x,D,K,G),E.viewport(te.copy(Le).multiplyScalar(oe).round())},this.getScissor=function(x){return x.copy(xe)},this.setScissor=function(x,D,K,G){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,D,K,G),E.scissor(ne.copy(xe).multiplyScalar(oe).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){E.setScissorTest(tt=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){Ce=x},this.getClearColor=function(x){return x.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,K=!0){let G=0;if(x){let z=!1;if(X!==null){let de=X.texture.format;z=T.has(de)}if(z){let de=X.texture.type,ge=_.has(de),me=ie.getClearColor(),Te=ie.getClearAlpha(),Ue=me.r,ke=me.g,Xe=me.b;ge?(p[0]=Ue,p[1]=ke,p[2]=Xe,p[3]=Te,U.clearBufferuiv(U.COLOR,0,p)):(C[0]=Ue,C[1]=ke,C[2]=Xe,C[3]=Te,U.clearBufferiv(U.COLOR,0,C))}else G|=U.COLOR_BUFFER_BIT}D&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),ie.dispose(),Me.dispose(),M.dispose(),L.dispose(),ae.dispose(),P.dispose(),ee.dispose(),se.dispose(),ue.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ge),he.removeEventListener("sessionend",pt),lt.stop()};function Ee(x){x.preventDefault(),nn("WebGLRenderer: Context Lost."),Y=!0}function $e(){nn("WebGLRenderer: Context Restored."),Y=!1;let x=v.autoReset,D=H.enabled,K=H.autoUpdate,G=H.needsUpdate,z=H.type;q(),v.autoReset=x,H.enabled=D,H.autoUpdate=K,H.needsUpdate=G,H.type=z}function Ke(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ht(x){let D=x.target;D.removeEventListener("dispose",Ht),nt(D)}function nt(x){Fi(x),L.remove(x)}function Fi(x){let D=L.get(x).programs;D!==void 0&&(D.forEach(function(K){ue.releaseProgram(K)}),x.isShaderMaterial&&ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,K,G,z,de){D===null&&(D=Mt);let ge=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=da(x,D,K,G,z);E.setMaterial(G,ge);let Te=K.index,Ue=1;if(G.wireframe===!0){if(Te=Se.getWireframeAttribute(K),Te===void 0)return;Ue=2}let ke=K.drawRange,Xe=K.attributes.position,Re=ke.start*Ue,je=(ke.start+ke.count)*Ue;de!==null&&(Re=Math.max(Re,de.start*Ue),je=Math.min(je,(de.start+de.count)*Ue)),Te!==null?(Re=Math.max(Re,0),je=Math.min(je,Te.count)):Xe!=null&&(Re=Math.max(Re,0),je=Math.min(je,Xe.count));let vt=je-Re;if(vt<0||vt===1/0)return;ee.setup(z,G,me,K,Te);let st,it=b;if(Te!==null&&(st=pe.get(Te),it=k,it.setIndex(st)),z.isMesh)G.wireframe===!0?(E.setLineWidth(G.wireframeLinewidth*dt()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(z.isLine){let ft=G.linewidth;ft===void 0&&(ft=1),E.setLineWidth(ft*dt()),z.isLineSegments?it.setMode(U.LINES):z.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else z.isPoints?it.setMode(U.POINTS):z.isSprite&&it.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ft=z._multiDrawStarts,we=z._multiDrawCounts,Lt=z._multiDrawCount,Ti=Te?pe.get(Te).bytesPerElement:1,Wt=L.get(G).currentProgram.getUniforms();for(let Qt=0;Qt<Lt;Qt++)Wt.setValue(U,"_gl_DrawID",Qt),it.render(ft[Qt]/Ti,we[Qt])}else if(z.isInstancedMesh)it.renderInstances(Re,vt,z.count);else if(K.isInstancedBufferGeometry){let ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,ft);it.renderInstances(Re,vt,we)}else it.render(Re,vt)};function or(x,D,K,G){N!==null&&x.isNodeMaterial&&N.setObject(G,x),Ne===!0&&J.setState(x,K,!1),x.transparent===!0&&x.side===ht&&x.forceSinglePass===!1?(x.side=Yt,x.needsUpdate=!0,lr(x,D,G),x.side=ar,x.needsUpdate=!0,lr(x,D,G),x.side=ht):lr(x,D,G)}this.compile=function(x,D,K=null){K===null&&(K=x),N!==null&&N.renderStart(x,D,K),w=M.get(K),w.init(D),A.push(w),K.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),x!==K&&x.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),ct=this.localClippingEnabled,Ne=J.init(this.clippingPlanes,ct),Ne===!0&&J.setGlobalState(this.clippingPlanes,D),N!==null&&H.render(w.state.shadowsArray,K,D);let G=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){let me=de[ge];or(me,K,D,z),G.add(me)}else or(de,K,D,z),G.add(de)}),w=A.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(x,D,K=null){let G=this.compile(x,D,K);return new Promise(z=>{function de(){if(G.forEach(function(ge){let me=L.get(ge).currentProgram;(me===void 0||me.isReady())&&G.delete(ge)}),G.size===0){z(x);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Bi=null;function qi(x){Bi&&Bi(x)}function Ge(){lt.stop()}function pt(){lt.start()}let lt=new sh;lt.setAnimationLoop(qi),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(x){Bi=x,he.setAnimationLoop(x),x===null?lt.stop():lt.start()},he.addEventListener("sessionstart",Ge),he.addEventListener("sessionend",pt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;N!==null&&N.renderStart(x,D);let K=he.enabled===!0&&he.isPresenting===!0,G=h!==null&&(X===null||K)&&h.begin(S,X);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(h===null||h.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,X),w=M.get(x,A.length),w.init(D),w.state.textureUnits=j.getTextureUnits(),A.push(w),Ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),He.setFromProjectionMatrix(Ct,Si,D.reversedDepth),ct=this.localClippingEnabled,Ne=J.init(this.clippingPlanes,ct),l=Me.get(x,R.length),l.init(),R.push(l),he.enabled===!0&&he.isPresenting===!0){let de=S.xr.getDepthSensingMesh();de!==null&&qt(de,D,-1/0,S.sortObjects)}qt(x,D,0,S.sortObjects),l.finish(),N!==null&&N.updateLights(w.state.lightsArray),S.sortObjects===!0&&l.sort(ce,Ce),_t=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,_t&&ie.addToRenderList(l,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&J.beginShadows();let z=w.state.shadowsArray;if(H.render(z,x,D),Ne===!0&&J.endShadows(),(G&&h.hasRenderPass())===!1){let de=l.opaque,ge=l.transmissive;if(w.setupLights(),D.isArrayCamera){let me=D.cameras;if(ge.length>0)for(let Te=0,Ue=me.length;Te<Ue;Te++){let ke=me[Te];Pt(de,ge,x,ke)}_t&&ie.render(x);for(let Te=0,Ue=me.length;Te<Ue;Te++){let ke=me[Te];ui(l,x,ke,ke.viewport)}}else ge.length>0&&Pt(de,ge,x,D),_t&&ie.render(x),ui(l,x,D)}X!==null&&re===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),G&&h.end(S),x.isScene===!0&&x.onAfterRender(S,x,D),ee.resetDefaultState(),fe=-1,Z=null,A.pop(),A.length>0?(w=A[A.length-1],j.setTextureUnits(w.state.textureUnits),Ne===!0&&J.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?l=R[R.length-1]:l=null,N!==null&&N.renderEnd()};function qt(x,D,K,G){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)K=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLightProbeGrid)w.pushLightProbeGrid(x);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(He)){G&&et.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ct);let de=P.update(x),ge=x.material;ge.visible&&l.push(x,de,ge,K,et.z,null,D)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(He))){let de=P.update(x),ge=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),et.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),et.copy(de.boundingSphere.center)),et.applyMatrix4(x.matrixWorld).applyMatrix4(Ct)),Array.isArray(ge)){let me=de.groups;for(let Te=0,Ue=me.length;Te<Ue;Te++){let ke=me[Te],Xe=ge[ke.materialIndex];Xe&&Xe.visible&&l.push(x,de,Xe,K,et.z,ke,D)}}else ge.visible&&l.push(x,de,ge,K,et.z,null,D)}}let z=x.children;for(let de=0,ge=z.length;de<ge;de++)qt(z[de],D,K,G)}function ui(x,D,K,G){let{opaque:z,transmissive:de,transparent:ge}=x;w.setupLightsView(K),Ne===!0&&J.setGlobalState(S.clippingPlanes,K),G&&E.viewport(te.copy(G)),z.length>0&&ci(z,D,K),de.length>0&&ci(de,D,K),ge.length>0&&ci(ge,D,K),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Pt(x,D,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Xe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:Xe?Mi:$t,minFilter:tr,samples:Math.max(4,ut.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let z=w.state.transmissionRenderTarget[G.id],de=G.viewport||te;z.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);let ge=S.getRenderTarget(),me=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(z),S.getClearColor(Ae),Qe=S.getClearAlpha(),Qe<1&&S.setClearColor(16777215,.5),S.clear(),_t&&ie.render(K);let Ue=S.toneMapping;S.toneMapping=xi;let ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Ne===!0&&J.setGlobalState(S.clippingPlanes,G),ci(x,K,G),j.updateMultisampleRenderTarget(z),j.updateRenderTargetMipmap(z),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Re=0,je=D.length;Re<je;Re++){let vt=D[Re],{object:st,geometry:it,material:ft,group:we}=vt;if(ft.side===ht&&st.layers.test(G.layers)){let Lt=ft.side;ft.side=Yt,ft.needsUpdate=!0,Bt(st,K,G,it,ft,we),ft.side=Lt,ft.needsUpdate=!0,Xe=!0}}Xe===!0&&(j.updateMultisampleRenderTarget(z),j.updateRenderTargetMipmap(z))}S.setRenderTarget(ge,me,Te),S.setClearColor(Ae,Qe),ke!==void 0&&(G.viewport=ke),S.toneMapping=Ue}function ci(x,D,K){let G=D.isScene===!0?D.overrideMaterial:null;for(let z=0,de=x.length;z<de;z++){let ge=x[z],{object:me,geometry:Te,group:Ue}=ge,ke=ge.material;ke.allowOverride===!0&&G!==null&&(ke=G),me.layers.test(K.layers)&&Bt(me,D,K,Te,ke,Ue)}}function Bt(x,D,K,G,z,de){N!==null&&z.isNodeMaterial&&N.setObject(x,z),x.onBeforeRender(S,D,K,G,z,de),x.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(S,D,K,G,x,de),z.transparent===!0&&z.side===ht&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,S.renderBufferDirect(K,D,G,z,x,de),z.side=ar,z.needsUpdate=!0,S.renderBufferDirect(K,D,G,z,x,de),z.side=ht):S.renderBufferDirect(K,D,G,z,x,de),x.onAfterRender(S,D,K,G,z,de)}function lr(x,D,K){D.isScene!==!0&&(D=Mt);let G=L.get(x),z=w.state.lights,de=w.state.shadowsArray,ge=z.state.version,me=ue.getParameters(x,z.state,de,D,K,w.state.lightProbeGridArray),Te=ue.getProgramCacheKey(me),Ue=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let ke=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=ae.get(x.envMap||G.environment,ke),G.envMapRotation=G.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",Ht),Ue=new Map,G.programs=Ue);let Xe=Ue.get(Te);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===ge)return zi(x,me),Xe}else me.uniforms=ue.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,K,me),x.onBeforeCompile(me,S),Xe=ue.acquireProgram(me,Te),Ue.set(Te,Xe),G.uniforms=me.uniforms;let Re=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=J.uniform),zi(x,me),G.needsLights=mn(x),G.lightsStateVersion=ge,G.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.sunLights.value=z.state.sun,Re.sunLightShadows.value=z.state.sunShadow,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.sunShadowMatrix.value=z.state.sunShadowMatrix,Re.sunShadowCascade.value=z.state.sunShadowCascade,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Xe,G.uniformsList=null,Xe}function ca(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=$a.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function zi(x,D){let K=L.get(x);K.outputColorSpace=D.outputColorSpace,K.batching=D.batching,K.batchingColor=D.batchingColor,K.instancing=D.instancing,K.instancingColor=D.instancingColor,K.instancingMorph=D.instancingMorph,K.skinning=D.skinning,K.morphTargets=D.morphTargets,K.morphNormals=D.morphNormals,K.morphColors=D.morphColors,K.morphTargetsCount=D.morphTargetsCount,K.numClippingPlanes=D.numClippingPlanes,K.numIntersection=D.numClipIntersection,K.vertexAlphas=D.vertexAlphas,K.vertexTangents=D.vertexTangents,K.toneMapping=D.toneMapping}function pn(x,D){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;B.setFromMatrixPosition(D.matrixWorld);for(let K=0,G=x.length;K<G;K++){let z=x[K];if(z.texture!==null&&z.boundingBox.containsPoint(B))return z}return null}function da(x,D,K,G,z){D.isScene!==!0&&(D=Mt),j.resetTextureUnits();let de=D.fog,ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,me=X===null?S.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ye.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=ae.get(G.envMap||ge,Te),ke=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!K.morphAttributes.position,je=!!K.morphAttributes.normal,vt=!!K.morphAttributes.color,st=xi;G.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(st=S.toneMapping);let it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=it!==void 0?it.length:0,we=L.get(G),Lt=w.state.lights;if(Ne===!0&&(ct===!0||x!==Z)){let Ze=x===Z&&G.id===fe;J.setState(G,x,Ze)}let Ti=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Lt.state.version||we.outputColorSpace!==me||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==Ue||G.fog===!0&&we.fog!==de||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==J.numPlanes||we.numIntersection!==J.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==Xe||we.morphTargets!==Re||we.morphNormals!==je||we.morphColors!==vt||we.toneMapping!==st||we.morphTargetsCount!==ft||!!we.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ti=!0):(Ti=!0,we.__version=G.version);let Wt=we.currentProgram;Ti===!0&&(Wt=lr(G,D,z),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Wt,we));let Qt=!1,di=!1,ye=!1,be=Wt.getUniforms(),Pe=we.uniforms;if(E.useProgram(Wt.program)&&(Qt=!0,di=!0,ye=!0),G.id!==fe&&(fe=G.id,di=!0),we.needsLights){let Ze=pn(w.state.lightProbeGridArray,z);we.lightProbeGrid!==Ze&&(we.lightProbeGrid=Ze,di=!0)}if(Qt||Z!==x){E.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),be.setValue(U,"projectionMatrix",x.projectionMatrix),be.setValue(U,"viewMatrix",x.matrixWorldInverse);let Ze=be.map.cameraPosition;Ze!==void 0&&Ze.setValue(U,Ft.setFromMatrixPosition(x.matrixWorld)),ut.logarithmicDepthBuffer&&be.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),Z!==x&&(Z=x,di=!0,ye=!0)}if(we.needsLights&&(Lt.state.sunShadowMap.length>0&&be.setValue(U,"sunShadowMap",Lt.state.sunShadowMap,j),Lt.state.directionalShadowMap.length>0&&be.setValue(U,"directionalShadowMap",Lt.state.directionalShadowMap,j),Lt.state.spotShadowMap.length>0&&be.setValue(U,"spotShadowMap",Lt.state.spotShadowMap,j),Lt.state.pointShadowMap.length>0&&be.setValue(U,"pointShadowMap",Lt.state.pointShadowMap,j)),z.isSkinnedMesh){be.setOptional(U,z,"bindMatrix"),be.setOptional(U,z,"bindMatrixInverse");let Ze=z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),be.setValue(U,"boneTexture",Ze.boneTexture,j))}z.isBatchedMesh&&(be.setOptional(U,z,"batchingTexture"),be.setValue(U,"batchingTexture",z._matricesTexture,j),be.setOptional(U,z,"batchingIdTexture"),be.setValue(U,"batchingIdTexture",z._indirectTexture,j),be.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&be.setValue(U,"batchingColorTexture",z._colorsTexture,j));let St=K.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&le.update(z,K,Wt),(di||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,be.setValue(U,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(Pe.envMapIntensity.value=D.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=Xm()),di){if(be.setValue(U,"toneMappingExposure",S.toneMappingExposure),we.needsLights&&fn(Pe,ye),de&&G.fog===!0&&_e.refreshFogUniforms(Pe,de),_e.refreshMaterialUniforms(Pe,G,oe,$,w.state.transmissionRenderTarget[x.id]),we.needsLights&&we.lightProbeGrid){let Ze=we.lightProbeGrid;Pe.probesSH.value=Ze.texture,Pe.probesMin.value.copy(Ze.boundingBox.min),Pe.probesMax.value.copy(Ze.boundingBox.max),Pe.probesResolution.value.copy(Ze.resolution)}$a.upload(U,ca(we),Pe,j)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($a.upload(U,ca(we),Pe,j),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(U,"center",z.center),be.setValue(U,"modelViewMatrix",z.modelViewMatrix),be.setValue(U,"normalMatrix",z.normalMatrix),be.setValue(U,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){let Ze=G.uniformsGroups;for(let zt=0,pi=Ze.length;zt<pi;zt++){let lo=Ze[zt];se.update(lo,Wt),se.bind(lo,Wt)}}return Wt}function fn(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function mn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(x,D,K){let G=L.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),L.get(x.texture).__webglTexture=D,L.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let K=L.get(x);K.__webglFramebuffer=D,K.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,K=0){X=x,V=D,re=K;let G=null,z=!1,de=!1;if(x){let ge=L.get(x);if(ge.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(U.FRAMEBUFFER,ge.__webglFramebuffer),te.copy(x.viewport),ne.copy(x.scissor),Be=x.scissorTest,E.viewport(te),E.scissor(ne),E.setScissorTest(Be),fe=-1;return}else if(ge.__webglFramebuffer===void 0)j.setupRenderTarget(x);else if(ge.__hasExternalTextures)j.rebindTextures(x,L.get(x.texture).__webglTexture,L.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ue=x.depthTexture;if(ge.__boundDepthTexture!==Ue){if(Ue!==null&&L.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(x)}}let me=x.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(de=!0);let Te=L.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?G=Te[D][K]:G=Te[D],z=!0):x.samples>0&&j.useMultisampledRTT(x)===!1?G=L.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?G=Te[K]:G=Te,te.copy(x.viewport),ne.copy(x.scissor),Be=x.scissorTest}else te.copy(Le).multiplyScalar(oe).floor(),ne.copy(xe).multiplyScalar(oe).floor(),Be=tt;if(K!==0&&(G=O),E.bindFramebuffer(U.FRAMEBUFFER,G)&&E.drawBuffers(x,G),E.viewport(te),E.scissor(ne),E.setScissorTest(Be),z){let ge=L.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,K)}else if(de){let ge=D;for(let me=0;me<x.textures.length;me++){let Te=L.get(x.textures[me]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+me,Te.__webglTexture,K,ge)}}else if(x!==null&&K!==0){let ge=L.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,K)}fe=-1};function pa(x){let D=L.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=ut.textureFormatReadable(x.format),D.__typeReadable=ut.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,K,G,z,de,ge,me=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=L.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){E.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ue=x.textures[me],ke=Ue.format,Xe=Ue.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me);let Re=pa(Ue);if(Re.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-G&&K>=0&&K<=x.height-z&&U.readPixels(D,K,G,z,W.convert(ke),W.convert(Xe),de)}finally{let Ue=X!==null?L.get(X).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(x,D,K,G,z,de,ge,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=L.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te)if(D>=0&&D<=x.width-G&&K>=0&&K<=x.height-z){E.bindFramebuffer(U.FRAMEBUFFER,Te);let Ue=x.textures[me],ke=Ue.format,Xe=Ue.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me);let Re=pa(Ue);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(D,K,G,z,W.convert(ke),W.convert(Xe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let vt=X!==null?L.get(X).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,vt);let st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zh(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(je),U.deleteSync(st),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,K=0){let G=Math.pow(2,-K),z=Math.floor(x.image.width*G),de=Math.floor(x.image.height*G),ge=D!==null?D.x:0,me=D!==null?D.y:0;j.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,ge,me,z,de),E.unbindTexture()},this.copyTextureToTexture=function(x,D,K=null,G=null,z=0,de=0){let ge,me,Te,Ue,ke,Xe,Re,je,vt,st=x.isCompressedTexture?x.mipmaps[de]:x.image;if(K!==null)ge=K.max.x-K.min.x,me=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,ke=K.min.y,Xe=K.isBox3?K.min.z:0;else{let Pe=Math.pow(2,-z);ge=Math.floor(st.width*Pe),me=Math.floor(st.height*Pe),x.isDataArrayTexture?Te=st.depth:x.isData3DTexture?Te=Math.floor(st.depth*Pe):Te=1,Ue=0,ke=0,Xe=0}G!==null?(Re=G.x,je=G.y,vt=G.z):(Re=0,je=0,vt=0);let it=W.convert(D.format),ft=W.convert(D.type),we;D.isData3DTexture?(j.setTexture3D(D,0),we=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(j.setTexture2DArray(D,0),we=U.TEXTURE_2D_ARRAY):(j.setTexture2D(D,0),we=U.TEXTURE_2D),E.activeTexture(U.TEXTURE0),E.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Lt=E.getParameter(U.UNPACK_ROW_LENGTH),Ti=E.getParameter(U.UNPACK_IMAGE_HEIGHT),Wt=E.getParameter(U.UNPACK_SKIP_PIXELS),Qt=E.getParameter(U.UNPACK_SKIP_ROWS),di=E.getParameter(U.UNPACK_SKIP_IMAGES);E.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),E.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),E.pixelStorei(U.UNPACK_SKIP_ROWS,ke),E.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe);let ye=x.isDataArrayTexture||x.isData3DTexture,be=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let Pe=L.get(x),St=L.get(D),Ze=L.get(Pe.__renderTarget),zt=L.get(St.__renderTarget);E.bindFramebuffer(U.READ_FRAMEBUFFER,Ze.__webglFramebuffer),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let pi=0;pi<Te;pi++)ye&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(x).__webglTexture,z,Xe+pi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(D).__webglTexture,de,vt+pi)),U.blitFramebuffer(Ue,ke,ge,me,Re,je,ge,me,U.DEPTH_BUFFER_BIT,U.NEAREST);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||L.has(x)){let Pe=L.get(x),St=L.get(D);E.bindFramebuffer(U.READ_FRAMEBUFFER,Q),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let Ze=0;Ze<Te;Ze++)ye?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,z,Xe+Ze):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pe.__webglTexture,z),be?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,de,vt+Ze):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,de),z!==0?U.blitFramebuffer(Ue,ke,ge,me,Re,je,ge,me,U.COLOR_BUFFER_BIT,U.NEAREST):be?U.copyTexSubImage3D(we,de,Re,je,vt+Ze,Ue,ke,ge,me):U.copyTexSubImage2D(we,de,Re,je,Ue,ke,ge,me);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else be?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(we,de,Re,je,vt,ge,me,Te,it,ft,st.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(we,de,Re,je,vt,ge,me,Te,it,st.data):U.texSubImage3D(we,de,Re,je,vt,ge,me,Te,it,ft,st):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,Re,je,ge,me,it,ft,st.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,Re,je,st.width,st.height,it,st.data):U.texSubImage2D(U.TEXTURE_2D,de,Re,je,ge,me,it,ft,st);E.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ti),E.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(U.UNPACK_SKIP_ROWS,Qt),E.pixelStorei(U.UNPACK_SKIP_IMAGES,di),de===0&&D.generateMipmaps&&U.generateMipmap(we),E.unbindTexture()},this.initRenderTarget=function(x){L.get(x).__webglFramebuffer===void 0&&j.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?j.setTextureCube(x,0):x.isData3DTexture?j.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?j.setTexture2DArray(x,0):j.setTexture2D(x,0),E.unbindTexture()},this.resetState=function(){V=0,re=0,X=null,E.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}},gl={type:"change"},oo={type:"start"},fh={type:"end"},Wa=new ua,_l=new Li,Ym=Math.cos(70*Qh.DEG2RAD),Et=new F,Xt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jn=1e-6,Km=class extends Yu{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Yi,this._lastTargetPosition=new F,this._quat=new Yi().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jo,this._sphericalDelta=new jo,this._scale=1,this._panOffset=new F,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new F,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zm.bind(this),this._onPointerDown=qm.bind(this),this._onPointerUp=Jm.bind(this),this._onContextMenu=ag.bind(this),this._onMouseWheel=eg.bind(this),this._onKeyDown=tg.bind(this),this._onTouchStart=ig.bind(this),this._onTouchMove=rg.bind(this),this._onMouseDown=$m.bind(this),this._onMouseMove=Qm.bind(this),this._interceptControlDown=ng.bind(this),this._interceptControlUp=sg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=at.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gl),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),r<-Math.PI?r+=Xt:r>Math.PI&&(r-=Xt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=Et.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new F(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let u=new F(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(s),this.object.updateMatrixWorld(),n=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<Ym?this.object.lookAt(this.target):(_l.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(_l,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Jn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jn||this._lastTargetPosition.distanceToSquared(this.target)>Jn?(this.dispatchEvent(gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Et.copy(r).sub(this.target);let a=Et.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function qm(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Zm(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Jm(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fh),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $m(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=at.DOLLY;break;case Lr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=at.ROTATE}break;case Lr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(oo)}function Qm(e){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function eg(e){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(e.preventDefault(),this.dispatchEvent(oo),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(fh))}function tg(e){this.enabled!==!1&&this._handleKeyDown(e)}function ig(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=at.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=at.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(oo)}function rg(e){switch(this._trackPointer(e),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=at.NONE}}function ag(e){this.enabled!==!1&&e.preventDefault()}function ng(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vl(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new pu;a.background=new Fe(16777215);let n=t.clientWidth||900,s=t.clientHeight||480,o=new ii(35,n/s,.1,100);o.position.set(8.5,4.2,7.5);let u=new jm({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setSize(n,s),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=js,u.toneMappingExposure=1.15,u.shadowMap.enabled=!0,u.shadowMap.type=ia,t.appendChild(u.domElement);let c=new Km(o,u.domElement);c.enableDamping=!0,c.dampingFactor=.05,c.maxPolarAngle=Math.PI/2-.05,c.minDistance=2,c.maxDistance=28,c.target.set(0,0,0),c.autoRotate=!0,c.autoRotateSpeed=.6;let f=null,m=()=>{c.autoRotate=!1,clearTimeout(f),f=setTimeout(()=>{P.autoRotate&&(c.autoRotate=!0)},6e3)};u.domElement.addEventListener("pointerdown",m),u.domElement.addEventListener("wheel",m,{passive:!0}),u.domElement.addEventListener("touchstart",m,{passive:!0});let d=new Vu(16777215,.9);a.add(d);let g=new Wn(16777215,1.25);g.position.set(12,16,14),g.castShadow=!0,g.shadow.mapSize.width=1024,g.shadow.mapSize.height=1024,g.shadow.bias=-5e-4,a.add(g);let y=new Wn(14412542,.7);y.position.set(-14,8,-10),a.add(y);let T=new Wn(15793652,.6);T.position.set(0,18,0),a.add(T);let _=new ao(30,30),p=new Pu({opacity:.12}),C=new At(_,p);C.rotation.x=-Math.PI/2,C.position.y=-1.65,C.receiveShadow=!0,a.add(C);let B=new ju(24,24,14870768,15857145);B.position.y=-1.64,a.add(B);let l={aluFrame:new mt({color:13949149,metalness:.8,roughness:.25,side:ht}),galvSteel:new mt({color:12897749,metalness:.65,roughness:.45,side:ht}),stainless:new mt({color:14870768,metalness:.95,roughness:.15,side:ht}),baseSkid:new mt({color:9741240,metalness:.75,roughness:.35,side:ht}),panelSolid:new mt({color:16317180,metalness:.15,roughness:.35,side:ht}),panelCutaway:new Ou({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:ht}),fanHousing:new mt({color:165063,metalness:.6,roughness:.3,side:ht}),fanImpeller:new mt({color:3718648,metalness:.75,roughness:.25,side:ht}),motorCast:new mt({color:1976635,metalness:.85,roughness:.3,side:ht}),copperPipe:new mt({color:12730636,metalness:.9,roughness:.2,side:ht}),coolingFin:new mt({color:3718648,metalness:.55,roughness:.35,side:ht}),heatingFin:new mt({color:16281969,metalness:.55,roughness:.35,side:ht}),rotorWheel:new mt({color:6583435,metalness:.7,roughness:.4,side:ht}),filterCloth:new mt({color:16317180,roughness:.95,metalness:.05,side:ht}),filterG4:new mt({color:14870768,roughness:.9,metalness:.05,side:ht}),damperBlade:new mt({color:9741240,metalness:.8,roughness:.25,side:ht}),actuatorOrange:new mt({color:15357964,metalness:.2,roughness:.4}),drainPan:new mt({color:14870768,metalness:.95,roughness:.15,side:ht}),doorHandle:new mt({color:988970,metalness:.8,roughness:.3}),rubberBlack:new mt({color:988970,roughness:.85,metalness:.1,side:ht}),brassGold:new mt({color:14251782,metalness:.85,roughness:.25}),springSilver:new mt({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new mt({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new mt({color:16777215,roughness:.2}),touchscreen:new sn({color:165063})},w=[],R=[],A=new jt;a.add(A);function h(M,J,H,ie,le=0,b=0,k=0,W=!0,ee=!0){let se=new un(M,J,H),q=new At(se,ie);return q.position.set(le,b,k),q.castShadow=W,q.receiveShadow=ee,q}function S(M,J,H,ie,le,b=0,k=0,W=0,ee=0,se=0,q=!1){let he=new Vs(M,J,H,ie,1,q),Ee=new At(he,le);return Ee.position.set(b,k,W),ee&&(Ee.rotation.x=ee),se&&(Ee.rotation.z=se),Ee.castShadow=!0,Ee.receiveShadow=!0,Ee}function Y(M,J=l.panelSolid,H=l.panelCutaway){return M.userData.solidMat=J,M.userData.cutawayMat=H,R.push(M),M}function N(M){let J=-1.4100000000000001,H=h(8.4+.2,.22,.1,l.baseSkid,0,J,1-.05),ie=h(8.4+.2,.22,.1,l.baseSkid,0,J,-1+.05);M.add(H,ie);let le=[-4.2,-2.5,-.8,.8,2.5,4.2];le.forEach(ye=>{M.add(h(.12,.22,2-.2,l.baseSkid,ye,J,0))}),[-2.5,.8].forEach(ye=>{M.add(h(.28,.12,.12,l.aluFrame,ye,J,1-.04)),M.add(h(.28,.12,.12,l.aluFrame,ye,J,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([ye,be])=>{M.add(h(.08,.18,.08,l.yellowSafety,ye,J+.06,be))});let b=.08;M.add(h(8.4,b,b,l.aluFrame,0,-1.3+b/2,1-b/2),h(8.4,b,b,l.aluFrame,0,-1.3+b/2,-1+b/2),h(8.4,b,b,l.aluFrame,0,1.3-b/2,1-b/2),h(8.4,b,b,l.aluFrame,0,1.3-b/2,-1+b/2)),le.forEach(ye=>{M.add(h(b,2.6,b,l.aluFrame,ye,0,1-b/2),h(b,2.6,b,l.aluFrame,ye,0,-1+b/2),h(b,b,2-b*2,l.aluFrame,ye,1.3-b/2,0),h(b,b,2-b*2,l.aluFrame,ye,-1.3+b/2,0))});let k=5,W=h(k,.05,2-.16,l.galvSteel,-4.2+k/2,0,0);M.add(W),M.add(h(8.4-.1,2.6-.1,.05,l.panelSolid,0,0,-1+.04)),M.add(h(8.4-.1,.05,2-.16,l.galvSteel,0,-1.3+.03,0)),M.add(h(.05,2.6-.1,2-.16,l.panelSolid,4.2-.03,0,0));let ee=h(.18,1.2,1.2,l.galvSteel,4.2+.09,-.2,0);M.add(ee),M.add(h(.05,2.6-.1,2-.16,l.panelSolid,-4.2+.03,0,0));let se=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],q=[1.7,1.7,1.6,1.7,1.7];se.forEach((ye,be)=>{let Pe=q[be]-.08,St=h(Pe,.04,2-.16,l.panelCutaway,ye,1.3-.02,0,!1,!1);M.add(St),Y(St,l.panelSolid,l.panelCutaway);let Ze=h(Pe,2.6-.18,.03,l.panelCutaway,ye,0,1-.02,!1,!1);M.add(Ze),Y(Ze,l.panelSolid,l.panelCutaway);let zt=.04;M.add(h(Pe,zt,.02,l.aluFrame,ye,(2.6-.18)/2,1),h(Pe,zt,.02,l.aluFrame,ye,-2.42/2,1),h(zt,2.6-.18,.02,l.aluFrame,ye-Pe/2,0,1),h(zt,2.6-.18,.02,l.aluFrame,ye+Pe/2,0,1)),[-.45,.45].forEach(pi=>{M.add(h(.04,.14,.05,l.doorHandle,ye+Pe/2-.1,pi,1+.02))}),[-.55,.55].forEach(pi=>{M.add(h(.03,.1,.03,l.aluFrame,ye-Pe/2+.04,pi,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([ye,be])=>{let Pe=S(.14,.14,.04,24,l.aluFrame,ye,be,1,Math.PI/2),St=S(.11,.11,.045,20,l.panelCutaway,ye,be,1,Math.PI/2);M.add(Pe,St)}),[[-1.65,.1],[3.35,.35]].forEach(([ye,be])=>{let Pe=S(.08,.08,.03,20,l.aluFrame,ye,be,1.015,Math.PI/2),St=S(.07,.07,.035,20,l.gaugeFace,ye,be,1+.015,Math.PI/2);M.add(Pe,St),M.add(S(.008,.008,.22,8,l.panelCutaway,ye-.03,be-.12,1+.01)),M.add(S(.008,.008,.22,8,l.panelCutaway,ye+.03,be-.12,1+.01))});let he=.48,Ee=.68,$e=.18,Ke=h(he,Ee,$e,l.galvSteel,2.75,.45,1+$e/2),Ht=h(.24,.16,.01,l.touchscreen,2.75,.56,1+$e+.005),nt=S(.014,.014,.02,10,l.coolingFin,2.65,.42,1+$e+.01,Math.PI/2),Fi=S(.014,.014,.02,10,l.yellowSafety,2.75,.42,1+$e+.01,Math.PI/2),or=S(.014,.014,.02,10,l.heatingFin,2.85,.42,1+$e+.01,Math.PI/2),Bi=h(.08,.08,.01,l.yellowSafety,2.75,.3,1+$e+.005),qi=h(.04,.06,.03,l.heatingFin,2.75,.3,1+$e+.02);M.add(Ke,Ht,nt,Fi,or,Bi,qi);let Ge=-1.3/2-.05,pt=2-.35,lt=.85,qt=h(.12,lt,pt,l.aluFrame,-4.2-.06,Ge,0);M.add(qt);for(let ye=0;ye<5;ye++){let be=Ge-lt/2+.1+ye*((lt-.2)/4),Pe=h(.08,.015,pt-.06,l.damperBlade,-4.2-.06,be,0);Pe.rotation.z=.55,M.add(Pe)}let ui=h(.16,.2,.14,l.actuatorOrange,-4.2-.06,Ge,1+.06);M.add(ui);let Pt=h(.1,1.3-.35,2-.35,l.aluFrame,-3.7,Ge,0),ci=h(.08,1.3-.4,2-.4,l.filterG4,-3.7,Ge,0);M.add(Pt,ci);let Bt=1.3/2-.05,lr=h(.12,lt,pt,l.aluFrame,-4.2-.06,Bt,0);M.add(lr);for(let ye=0;ye<5;ye++){let be=Bt-lt/2+.1+ye*((lt-.2)/4),Pe=h(.08,.015,pt-.06,l.damperBlade,-4.2-.06,be,0);Pe.rotation.z=-.55,M.add(Pe)}let ca=h(.16,.2,.14,l.actuatorOrange,-4.2-.06,Bt,1+.06);M.add(ca);let zi=new jt;zi.position.set(-2.85,Bt,0),M.add(zi);let pn=S(.38,.3,.12,24,l.aluFrame,.2,0,0,0,Math.PI/2),da=S(.42,.42,.28,20,l.fanImpeller,0,0,0,0,Math.PI/2);zi.add(pn,da);let fn=S(.18,.18,.34,16,l.motorCast,-.32,0,0,0,Math.PI/2);zi.add(fn);let mn=S(.46,.46,.1,16,l.yellowSafety,.28,0,0,0,Math.PI/2,!0);zi.add(mn),w.push(()=>{da.rotation.x+=.14});let pa=h(.1,1.3-.35,2-.35,l.aluFrame,-2.4,Ge,0);M.add(pa);for(let ye=0;ye<2;ye++)for(let be=0;be<3;be++){let Pe=Ge-.22+ye*.44,St=-1+.35+be*((2-.7)/2),Ze=new za(.18,.85,4),zt=new At(Ze,l.filterCloth);zt.position.set(-1.9,Pe,St),zt.rotation.z=-Math.PI/2,zt.scale.set(.9,1.2,.7),M.add(zt)}let x=new jt;x.position.set(0,0,0),M.add(x);let D=h(.38,2.6-.2,2-.2,l.aluFrame,0,0,0);M.add(D);let K=S(1.12,1.12,.32,36,l.aluFrame,0,0,0,0,Math.PI/2),G=S(1.08,1.08,.3,32,l.rotorWheel,0,0,0,0,Math.PI/2);x.add(K,G);for(let ye=0;ye<12;ye++){let be=ye/12*Math.PI*2,Pe=h(.025,2.12,.02,l.aluFrame,0,0,0);Pe.rotation.x=be,x.add(Pe)}let z=S(.09,.09,.22,12,l.motorCast,.22,1.05,.75,0,Math.PI/2),de=S(.02,.02,.3,8,l.doorHandle,.22,.95,.75);M.add(z,de),w.push(()=>{x.rotation.x+=.01});let ge=2-.35,me=1.3-.35,Te=h(.24,me,ge,l.coolingFin,1.15,Ge,0);M.add(Te),[-.5,.5].forEach(ye=>{let be=S(.045,.045,me+.1,14,l.copperPipe,1.15,Ge,ye);M.add(be)});for(let ye=0;ye<8;ye++){let be=Ge-me/2+.1+ye*((me-.2)/7),Pe=new At(new Cu(.032,.012,8,12,Math.PI),l.copperPipe);Pe.position.set(1.15,be,1-.18),Pe.rotation.y=Math.PI/2,Pe.rotation.x=Math.PI/2,M.add(Pe)}let Ue=h(1.3,.09,ge+.1,l.drainPan,1.5,-1.3+.1,0);M.add(Ue);let ke=S(.02,.02,.18,10,l.stainless,1.8,-1.3+.06,1-.05,0,0);M.add(ke);let Xe=h(.12,me,ge,l.aluFrame,1.45,Ge,0);M.add(Xe);for(let ye=0;ye<12;ye++){let be=-.7+ye*((ge-.2)/11),Pe=h(.08,me-.05,.012,l.aluFrame,1.45,Ge,be);Pe.rotation.y=.35,M.add(Pe)}let Re=h(.18,me,ge,l.heatingFin,1.85,Ge,0);M.add(Re),[-.4,.4].forEach(ye=>{let be=S(.04,.04,me+.1,14,l.copperPipe,1.85,Ge,ye);M.add(be)});let je=new jt;je.position.set(2.85,Ge,0),M.add(je);let vt=S(.48,.38,.18,28,l.aluFrame,-.4,0,0,0,Math.PI/2),st=S(.44,.44,.03,24,l.copperPipe,-.38,0,0,0,Math.PI/2,!0);je.add(vt,st);let it=S(.52,.52,.36,24,l.fanHousing,-.05,0,0,0,Math.PI/2),ft=S(.14,.05,.16,16,l.aluFrame,-.25,0,0,0,Math.PI/2);je.add(it,ft),w.push(()=>{it.rotation.x+=.15});let we=S(.24,.24,.45,18,l.motorCast,.32,0,0,0,Math.PI/2),Lt=h(.14,.12,.14,l.motorCast,.32,.26,0);je.add(we,Lt);let Ti=h(1.1,.08,.8,l.baseSkid,.05,-me/2+.08,0);je.add(Ti),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([ye,be])=>{let Pe=h(.12,.03,.12,l.motorCast,ye,-me/2+.02,be),St=S(.04,.04,.12,10,l.springSilver,ye,-me/2+.08,be);je.add(Pe,St)});let Wt=h(.1,me,ge,l.rubberBlack,2.35,Ge,0);M.add(Wt);let Qt=h(1.2,.03,.03,l.yellowSafety,2.9,Ge+.4,1-.25),di=h(1.2,.03,.03,l.yellowSafety,2.9,Ge,1-.25);M.add(Qt,di);for(let ye=-1;ye<=1;ye++){let be=ye*.45,Pe=h(.65,me-.1,.22,l.galvSteel,3.8,Ge,be),St=S(.11,.11,me-.1,16,l.aluFrame,3.47,Ge,be);M.add(Pe,St)}}function O(M,J){if(J==="tks"){N(M);return}let H=J==="thks",ie=J==="thrv-dx",le=J==="hrv",b=J==="rooftop",k=le?4.8:b?6.2:7.6,W=le?1.9:2.6,ee=le?1.8:2,se=k/2,q=W/2,he=ee/2,Ee=.22,$e=-q-Ee/2,Ke=h(k+.3,Ee,.12,l.baseSkid,0,$e,he-.06),Ht=h(k+.3,Ee,.12,l.baseSkid,0,$e,-he+.06);M.add(Ke,Ht),[-se,-se*.5,0,se*.5,se].forEach(Ge=>{M.add(h(.12,Ee,ee-.24,l.baseSkid,Ge,$e,0))});let nt=.08,Fi=H?l.stainless:l.aluFrame;M.add(h(k,nt,nt,Fi,0,-q+nt/2,he-nt/2),h(k,nt,nt,Fi,0,-q+nt/2,-he+nt/2),h(k,nt,nt,Fi,0,q-nt/2,he-nt/2),h(k,nt,nt,Fi,0,q-nt/2,-he+nt/2));let or=H?l.stainless:l.galvSteel;M.add(h(k-.1,W-.1,.05,l.panelSolid,0,0,-he+.04),h(k-.1,.05,ee-.1,l.panelSolid,0,q-.03,0),h(k-.1,.05,ee-.1,or,0,-q+.03,0),h(.05,W-.1,ee-.1,l.panelSolid,se-.03,0,0));let Bi=le?3:4,qi=(k-.2)/Bi;for(let Ge=0;Ge<Bi;Ge++){let pt=-se+.1+(Ge+.5)*qi,lt=h(qi-.04,W-.18,.03,l.panelCutaway,pt,0,he-.02,!1,!1);M.add(lt),R.push(lt),M.add(h(.04,.12,.04,l.doorHandle,pt+qi*.4,0,he+.01)),M.add(S(.11,.11,.04,16,l.aluFrame,pt,.2,he,Math.PI/2))}if(le){let Ge=h(1.5,1.4,ee-.35,l.aluFrame,0,0,0);Ge.rotation.z=Math.PI/4,M.add(Ge),[-1.4,1.4].forEach((pt,lt)=>{let qt=lt===0?-.35:.35,ui=S(.35,.35,.25,20,l.fanHousing,pt,qt,0,0,Math.PI/2);M.add(ui),w.push(()=>{ui.rotation.x+=.1})}),[-1.9,1.9].forEach(pt=>{M.add(h(.06,W-.4,ee-.4,l.filterCloth,pt,0,0))}),[[-se-.1,.4],[se+.1,-.4]].forEach(([pt,lt])=>{M.add(S(.32,.32,.22,24,l.galvSteel,pt,lt,0,0,Math.PI/2,!0))})}else if(b){[-1.2,1.2].forEach(pt=>{let lt=S(.55,.55,.18,24,l.motorCast,pt,q+.09,0,0,0,!0),qt=S(.48,.48,.04,4,l.fanImpeller,pt,q+.12,0);M.add(lt,qt),w.push(()=>{qt.rotation.y+=.15})}),[-1.8,-1].forEach(pt=>{let lt=S(.2,.2,.7,16,l.motorCast,pt,-q+.5,-he+.5);M.add(lt)});let Ge=S(.45,.45,.35,20,l.fanHousing,1.8,-.2,0,0,Math.PI/2);M.add(Ge),w.push(()=>{Ge.rotation.x+=.12}),M.add(h(.3,W-.5,ee-.4,l.coolingFin,.5,-.1,0))}else{let Ge=new jt;Ge.position.set(0,0,0),M.add(Ge);let pt=S(1.05,1.05,.28,32,l.aluFrame,0,0,0,0,Math.PI/2),lt=S(1.01,1.01,.26,28,l.rotorWheel,0,0,0,0,Math.PI/2);Ge.add(pt,lt);for(let Pt=0;Pt<12;Pt++){let ci=Pt/12*Math.PI*2,Bt=h(.03,1.98,.02,l.aluFrame,0,0,0);Bt.rotation.x=ci,Ge.add(Bt)}w.push(()=>{Ge.rotation.x+=.008});let qt=S(.42,.42,.35,24,l.fanHousing,2.8,-q/2+.1,0,0,Math.PI/2),ui=S(.36,.36,.3,24,l.fanHousing,-1.3,q/2-.05,0,0,Math.PI/2);M.add(qt,ui),w.push(()=>{qt.rotation.x+=.12,ui.rotation.x+=.12}),M.add(h(.28,q-.3,ee-.35,H?l.stainless:l.coolingFin,1.35,-q/2,0)),M.add(h(.22,q-.3,ee-.35,l.heatingFin,1.85,-q/2,0)),M.add(h(.95,.08,ee-.25,l.drainPan,1.6,-q+.12,0)),M.add(h(.06,q-.25,ee-.3,H?l.stainless:l.aluFrame,-2.1,-q/2,0));for(let Pt=0;Pt<4;Pt++){let ci=-he+.25+(Pt+.5)*((ee-.4)/4),Bt=new At(new za(.2,.75,4),l.filterCloth);Bt.rotateZ(-Math.PI/2),Bt.position.set(-1.7,-q/2,ci),Bt.scale.set(1,1.4,.8),M.add(Bt)}if(H){M.add(h(.18,q-.3,ee-.35,l.stainless,2.15,-q/2,0));let Pt=S(.03,.03,ee-.5,12,l.coolingFin,1.1,-q/2+.2,0,Math.PI/2);M.add(Pt)}[-q/2,q/2].forEach(Pt=>{M.add(h(.08,q-.25,ee-.3,l.aluFrame,-se-.04,Pt,0)),M.add(h(.14,.18,.12,l.actuatorOrange,-se-.04,Pt,he+.05))}),ie&&M.add(S(.2,.2,.65,16,l.motorCast,2.5,-q/2,-he+.5)),M.add(h(.32,.55,.18,l.motorCast,2.3,.35,he+.09))}}function Q(M,J){if(J==="tdf"){M.add(h(3.2,.04,2,l.galvSteel,0,2/2,0),h(3.2,.04,2,l.galvSteel,0,-2/2,0),h(3.2,2,.04,l.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(b=>{M.add(h(.08,.12,2+.2,l.aluFrame,b,2/2+.04,0),h(.08,.12,2+.2,l.aluFrame,b,-2/2-.04,0),h(.08,2,.12,l.aluFrame,b,0,2/2+.04),h(.08,2,.12,l.aluFrame,b,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(k=>{[-2/2-.04,2/2+.04].forEach(W=>{M.add(h(.1,.14,.14,l.baseSkid,b,k,W))})})});let H=h(3.2-.1,2-.1,.03,l.panelCutaway,0,0,2/2,!1,!1);M.add(H),R.push(H),[-.8,.8].forEach(b=>{M.add(h(.08,.12,.04,l.doorHandle,b,2/2-.1,2/2+.02))});let ie=S(.78,.78,.45,24,l.fanImpeller,0,0,0,0,Math.PI/2),le=S(.28,.28,.35,16,l.motorCast,.25,0,0,0,Math.PI/2);M.add(ie,le),w.push(()=>{ie.rotation.x+=.14}),M.add(h(.24,.18,.16,l.fanHousing,-.6,2/2+.1,.4))}else if(J==="yangin-fani"){let H=S(1.25,1.25,4.2,32,l.galvSteel,0,0,0,0,Math.PI/2,!0);M.add(H),[-4.2/2,4.2/2].forEach(W=>{let ee=S(1.43,1.43,.06,32,l.baseSkid,W,0,0,0,Math.PI/2,!0);M.add(ee);for(let se=0;se<12;se++){let q=se/12*Math.PI*2;M.add(h(.08,.04,.04,l.doorHandle,W,Math.sin(q)*(1.25+.09),Math.cos(q)*(1.25+.09)))}});let ie=S(.46,.46,2,24,l.motorCast,.1,0,0,0,Math.PI/2),le=new At(new za(.46,.6,20),l.motorCast);le.rotateZ(-Math.PI/2),le.position.set(-1.2,0,0),M.add(ie,le);let b=new jt;b.position.set(-.6,0,0),M.add(b);let k=S(.48,.48,.2,20,l.fanImpeller,0,0,0,0,Math.PI/2);b.add(k);for(let W=0;W<8;W++){let ee=W/8*Math.PI*2,se=h(.04,.7,.16,l.fanImpeller,0,Math.sin(ee)*.78,Math.cos(ee)*.78);se.rotation.x=ee+.35,b.add(se)}w.push(()=>{b.rotation.x+=.15});for(let W=0;W<4;W++){let ee=W/4*Math.PI*2,se=h(.03,1.25-.46,.1,l.baseSkid,.4,Math.sin(ee)*(1.25+.46)/2,Math.cos(ee)*(1.25+.46)/2);se.rotation.x=ee,M.add(se)}M.add(h(2.8,.12,.35,l.baseSkid,0,-1.25-.1,.9),h(2.8,.12,.35,l.baseSkid,0,-1.25-.1,-.9)),M.add(h(.24,.24,.16,l.actuatorOrange,0,1.25+.1,0))}else{let H=S(.62,.62,5.2,28,l.galvSteel,0,0,0,0,Math.PI/2,!0);M.add(H),[-1.7,1.7].forEach(b=>{M.add(S(.62+.12,.62+.12,1.5,28,l.aluFrame,b,0,0,0,Math.PI/2,!0))});let ie=S(.28,.28,1.2,16,l.motorCast,0,0,0,0,Math.PI/2),le=S(.62-.05,.62-.05,.12,8,l.fanImpeller,0,0,0,0,Math.PI/2);M.add(ie,le),w.push(()=>{le.rotation.x+=.16});for(let b=-.3;b<=.3;b+=.2){let k=h(.08,.04,.8,l.damperBlade,2.62,b,0);k.rotation.z=-.2,M.add(k)}[-5.2/2-.02,5.2/2+.02].forEach(b=>{M.add(S(.62+.02,.62+.02,.04,16,l.aluFrame,b,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(b=>{M.add(h(.08,.55,.25,l.baseSkid,b,.62+.35,0))})}}function I(M,J){if(J==="spiral-kanal"){let H=S(.75,.75,4.4,32,l.galvSteel,-.6,0,0,0,Math.PI/2,!0);M.add(H);for(let le=-2.6;le<=1.2;le+=.45)M.add(S(.75+.015,.75+.015,.025,32,l.aluFrame,le,0,0,0,Math.PI/2,!0));M.add(S(.75+.025,.75+.025,.12,32,l.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let ie=S(.75-.01,.75-.01,1.8,28,l.galvSteel,2.2,.9,0,0,0,!0);M.add(ie),M.add(S(.75+.06,.75+.06,.08,32,l.baseSkid,-.8,0,0,0,Math.PI/2,!0)),M.add(S(.02,.02,1.4,8,l.baseSkid,-.8,.75+.7,0))}else if(J==="paslanmaz-kanal"){let H=S(.85,.85,4.6,32,l.stainless,0,0,0,0,Math.PI/2,!0);M.add(H),M.add(h(4.6-.02,.02,.03,l.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(ie=>{M.add(S(.85+.2,.85+.2,.08,32,l.stainless,ie,0,0,0,Math.PI/2,!0));for(let le=0;le<8;le++){let b=le/8*Math.PI*2;M.add(h(.12,.04,.04,l.doorHandle,ie,Math.sin(b)*(.85+.1),Math.cos(b)*(.85+.1)))}}),M.add(S(.32,.32,.06,16,l.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(ie=>{M.add(h(.04,.08,.06,l.doorHandle,ie,0,.85+.07))})}else{M.add(h(4.6,.04,2.4,l.galvSteel,0,2/2,0),h(4.6,.04,2.4,l.galvSteel,0,-2/2,0),h(4.6,2,.04,l.galvSteel,0,0,-2.4/2));let H=h(.9,2,.04,l.galvSteel,-4.6/2+.45,0,2.4/2),ie=h(.9,2,.04,l.galvSteel,4.6/2-.45,0,2.4/2),le=h(4.6-1.8,2-.3,.03,l.panelCutaway,0,0,2.4/2,!1,!1);M.add(H,ie,le),R.push(le),M.add(h(4.6-1.9,2-.4,.08,l.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(b=>{M.add(h(.08,.14,2.4+.24,l.aluFrame,b,2/2+.05,0),h(.08,.14,2.4+.24,l.aluFrame,b,-2/2-.05,0),h(.08,2,.14,l.aluFrame,b,0,2.4/2+.05),h(.08,2,.14,l.aluFrame,b,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(k=>{[-2.4/2-.05,2.4/2+.05].forEach(W=>{M.add(h(.1,.16,.16,l.baseSkid,b,k,W))})})}),M.add(h(4.6-.8,.02,.02,l.aluFrame,0,2/2+.02,0))}}function V(M,J){if(J==="menfez"){M.add(h(.24,.14,3.4+.2,l.aluFrame,0,2.2/2+.05,0),h(.24,.14,3.4+.2,l.aluFrame,0,-2.2/2-.05,0),h(.24,2.2,.14,l.aluFrame,0,0,3.4/2+.05),h(.24,2.2,.14,l.aluFrame,0,0,-3.4/2-.05));for(let H=-2.2/2+.2;H<=2.2/2-.15;H+=.24){let ie=h(.08,.02,3.3,l.damperBlade,.09,H,0);ie.rotation.z=.22,M.add(ie)}for(let H=-3.4/2+.25;H<=3.4/2-.2;H+=.28){let ie=h(.06,2.1500000000000004,.02,l.damperBlade,0,0,H);ie.rotation.y=.2,M.add(ie)}M.add(h(.12,.08,3.4-.1,l.motorCast,-.24/2-.04,2.2/2-.04,0),h(.12,.08,3.4-.1,l.motorCast,-.24/2-.04,-2.2/2+.04,0)),M.add(h(.08,.12,.08,l.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(J==="difuzor"){M.add(h(3.4,.03,1.5,l.galvSteel,0,1.3/2+.3,0),h(3.4,1.3,.03,l.galvSteel,0,.3,-1.5/2),h(3.4,1.3,.03,l.galvSteel,0,.3,1.5/2)),M.add(S(.42,.42,.35,24,l.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),M.add(h(3.4+.2,.06,1.5+.2,l.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(ie=>{M.add(h(3.4-.1,.04,.06,l.doorHandle,0,-1.3/2+.26,ie))});let H=h(1.8,.04,1.8,l.panelSolid,0,-1,0);M.add(H);for(let ie=0;ie<16;ie++){let le=ie/16*Math.PI*2,b=h(.03,.02,.36,l.doorHandle,Math.sin(le)*.55,-.98,Math.cos(le)*.55);b.rotation.y=le+.5,M.add(b)}}else{M.add(h(1.4,.04,2.4,l.galvSteel,0,2.2/2,0),h(1.4,.04,2.4,l.galvSteel,0,-2.2/2,0),h(1.4,2.2,.04,l.galvSteel,0,0,-2.4/2),h(1.4,2.2,.04,l.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(ie=>{M.add(h(.08,.14,2.4+.2,l.aluFrame,ie,2.2/2+.05,0),h(.08,.14,2.4+.2,l.aluFrame,ie,-2.2/2-.05,0),h(.08,2.2,.14,l.aluFrame,ie,0,2.4/2+.05),h(.08,2.2,.14,l.aluFrame,ie,0,-2.4/2-.05))});for(let ie=-2.2/2+.35;ie<=2.2/2-.25;ie+=.5){let le=h(.35,.04,2.28,l.damperBlade,0,ie,0);le.rotation.z=.35,M.add(le)}M.add(h(.03,2.2-.4,.03,l.brassGold,.15,0,2.4/2-.08));let H=h(.22,.34,.18,l.actuatorOrange,.1,.2,2.4/2+.14);M.add(H),M.add(S(.025,.025,.15,12,l.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),M.add(S(.03,.03,.12,12,l.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function re(M){M.add(h(4.4,.04,2.2,l.galvSteel,0,2.4/2,0),h(4.4,.04,2.2,l.galvSteel,0,-2.4/2,0),h(4.4,2.4,.04,l.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(W=>{M.add(h(.08,.12,2.2+.2,l.aluFrame,W,2.4/2+.04,0),h(.08,.12,2.2+.2,l.aluFrame,W,-2.4/2-.04,0),h(.08,2.4,.12,l.aluFrame,W,0,2.2/2+.04),h(.08,2.4,.12,l.aluFrame,W,0,-2.2/2-.04))});let J=h(4.4-.1,2.4-.1,.03,l.panelCutaway,0,0,2.2/2,!1,!1);M.add(J),R.push(J);let H=h(.12,2.4-.2,2.2-.2,l.aluFrame,-1.4,0,0),ie=h(.1,2.4-.25,2.2-.25,l.filterCloth,-1.4,0,0);M.add(H,ie),M.add(h(.1,2.4-.2,2.2-.2,l.aluFrame,-.2,0,0));for(let W=0;W<4;W++){let ee=-.7+W*.46,se=new At(new za(.2,1.1,4),l.filterCloth);se.rotateZ(-Math.PI/2),se.position.set(.4,0,ee),se.scale.set(1,1.3,.75),M.add(se)}let le=h(.25,2.4-.2,2.2-.2,l.aluFrame,1.4,0,0),b=h(.22,2.4-.26,2.2-.26,l.filterCloth,1.4,0,0),k=h(.26,2.4-.18,.04,l.coolingFin,1.4,0,2.2/2-.1);M.add(le,b,k),[-1,.6].forEach(W=>{M.add(S(.09,.09,.04,16,l.aluFrame,W,.6,2.2/2+.03,Math.PI/2))})}function X(M,J){if(J==="vrf-dis"){M.add(h(3.2,3.6,.04,l.panelSolid,0,0,-2/2),h(3.2,.04,2,l.panelSolid,0,3.6/2,0),h(3.2,.12,2,l.baseSkid,0,-3.6/2,0),h(.04,3.6-.2,2-.1,l.coolingFin,-3.2/2,.05,0),h(.04,3.6-.2,2-.1,l.coolingFin,3.2/2,.05,0));let H=h(3.2-.1,3.6-.2,.03,l.panelCutaway,0,.05,2/2,!1,!1);M.add(H),R.push(H);let ie=S(.82,.82,.22,28,l.fanHousing,0,3.6/2+.11,0,0,0,!0),le=S(.72,.72,.05,4,l.fanImpeller,0,3.6/2+.14,0);M.add(ie,le),w.push(()=>{le.rotation.y+=.16}),[-.6,.6].forEach(b=>{M.add(S(.26,.26,.9,16,l.motorCast,b,-3.6/2+.6,-.2))}),M.add(S(.22,.22,1.1,16,l.motorCast,-1.1,-3.6/2+.7,.2)),M.add(h(3.2-.2,2.6,.1,l.coolingFin,0,.2,-2/2+.08)),M.add(h(.22,.18,.14,l.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(J==="vrf-ic"){let H=new jt;H.rotation.x=-Math.PI+.55,M.add(H);let ie=h(2.8,.8,2.8,l.galvSteel,0,.5,0),le=h(3.2,.08,3.2,l.panelSolid,0,.05,0);H.add(ie,le);let b=h(1.6,.02,1.6,l.filterCloth,0,.02,0);H.add(b),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([W,ee,se])=>{let q=h(1.7,.03,.16,l.doorHandle,W,.01,ee);q.rotation.y=se,H.add(q)});let k=S(.65,.65,.35,20,l.fanImpeller,0,.5,0);H.add(k),w.push(()=>{k.rotation.y+=.14}),H.add(h(.18,.22,.18,l.actuatorOrange,1.3,.5,.8)),H.add(S(.04,.04,.3,12,l.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let H=h(4.6,.04,2,l.stainless,0,.8,-.3),ie=h(4.6,1.6,.04,l.stainless,0,0,-2.6/2),le=h(.04,1.6,2.6,l.stainless,-4.6/2,0,0),b=h(.04,1.6,2.6,l.stainless,4.6/2,0,0),k=h(4.6,.9,.04,l.stainless,0,.25,2.6/2-.2);k.rotation.x=.5,M.add(H,ie,le,b,k),M.add(S(.55,.55,.3,24,l.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let W=-4.6/2+.6;W<=4.6/2-.6;W+=.75){let ee=h(.68,.04,1.3,l.aluFrame,W,-.2,.1);ee.rotation.x=-.4,M.add(ee)}M.add(S(.1,.08,.18,16,l.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),M.add(S(.02,.02,4.6-.6,12,l.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(W=>{let ee=S(.035,.02,.09,10,l.brassGold,W,-.12,.85);M.add(ee)}),M.add(h(.14,.2,.08,l.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}i==="tks"?N(A):["thks","thrv-dx","hrv","rooftop"].includes(i)?O(A,i):["tdf","yangin-fani","jet-fan"].includes(i)?Q(A,i):["galvaniz-kanal","spiral-kanal","paslanmaz-kanal"].includes(i)?I(A,i):["menfez","difuzor","damper"].includes(i)?V(A,i):i==="filtre"?re(A):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?X(A,i):N(A),A.updateMatrixWorld(!0);let fe=new kr().setFromObject(A),Z=fe.getSize(new F),te=fe.getCenter(new F);A.position.sub(te);let ne=-Z.y/2;C.position.y=ne-.05,B.position.y=ne-.04;let Be=Math.max(Z.x,Z.y,Z.z),Ae=o.fov*(Math.PI/180),Qe=Math.abs(Be/2/Math.tan(Ae/2))*1.05;Qe=Math.max(Qe,3.8);let Oe=new F(Qe*.72,Qe*.38,Qe*.74),$=new F(0,0,0);o.position.copy(Oe),o.lookAt($),c.target.copy($),c.update();let oe=null;function ce(M,J,H=650){let ie=o.position.clone(),le=c.target.clone(),b=performance.now();oe={update:k=>{let W=k-b,ee=Math.min(1,W/H),se=ee*ee*(3-2*ee);o.position.lerpVectors(ie,M,se),c.target.lerpVectors(le,J,se),c.update(),ee>=1&&(oe=null)}}}let Ce=new jt;a.add(Ce);let Le=80,xe=[],tt=new Float32Array(Le*3),He=new Float32Array(Le*3),Ne=i==="tks",ct=Math.max(2,Z.x/2+.4),Ct=Math.max(1,Z.y*.45),Ft=Math.max(1,Z.z*.45);for(let M=0;M<Le;M++){let J=Ne?M<Le*.7:M<Le*.65;xe.push({isSupply:J,progress:Math.random(),speed:(Ne?.006:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(Ne?.35:Ct),offsetZ:(Math.random()-.5)*(Ne?.7:Ft)}),J?(He[M*3]=.02,He[M*3+1]=.65,He[M*3+2]=.98):(He[M*3]=.95,He[M*3+1]=.45,He[M*3+2]=.12)}let et=new Kt;et.setAttribute("position",new ri(tt,3)),et.setAttribute("color",new ri(He,3));let Mt=document.createElement("canvas");Mt.width=32,Mt.height=32;let _t=Mt.getContext("2d"),dt=_t.createRadialGradient(16,16,0,16,16,16);dt.addColorStop(0,"rgba(255, 255, 255, 1)"),dt.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),dt.addColorStop(1,"rgba(0, 0, 0, 0)"),_t.fillStyle=dt,_t.fillRect(0,0,32,32);let U=new Bo(Mt),Nt=new Kl({size:.15,map:U,transparent:!0,opacity:.85,vertexColors:!0,blending:$n,depthWrite:!1}),Je=new Ru(et,Nt);Ce.add(Je),w.push(()=>{if(!P.cfdEnabled){Ce.visible=!1;return}Ce.visible=!0;let M=et.attributes.position.array;for(let J=0;J<Le;J++){let H=xe[J];H.progress+=H.speed,H.progress>1&&(H.progress=0),Ne?H.isSupply?(M[J*3]=-4.2+H.progress*8.4,M[J*3+1]=-.65+Math.sin(H.progress*Math.PI*4)*.08+H.offsetY,M[J*3+2]=H.offsetZ):(M[J*3]=1.2-H.progress*5.4,M[J*3+1]=.65+H.offsetY,M[J*3+2]=H.offsetZ):(M[J*3]=-ct+H.progress*(ct*2),M[J*3+1]=(H.isSupply?-.2:.2)+H.offsetY,M[J*3+2]=H.offsetZ)}et.attributes.position.needsUpdate=!0});let ut=new jt;a.add(ut);function E(M){let J=document.createElement("canvas");J.width=64,J.height=64;let H=J.getContext("2d");H.fillStyle="#0284c7",H.beginPath(),H.arc(32,32,28,0,Math.PI*2),H.fill(),H.lineWidth=4,H.strokeStyle="#ffffff",H.stroke(),H.fillStyle="#ffffff",H.font="bold 26px sans-serif",H.textAlign="center",H.textBaseline="middle",H.fillText(M,32,33);let ie=new Bo(J);return ie.minFilter=Ut,ie}let v=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],L=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],j=[];v.forEach((M,J)=>{let H=new jt,ie,le,b;if(Ne&&L[J])[ie,le,b]=L[J];else{let se=v.length,q=Z.z>Z.x,he=q?Z.z:Z.x,Ee=-he/2+.4+J/Math.max(1,se-1)*(he-.8);ie=q?Z.x/2+.4:Ee,le=J%2===0?-.2:.4,b=q?Ee:Z.z/2+.4}H.position.set(ie,le,b);let k=new At(new Vs(.012,.012,.25,8),new sn({color:165063}));k.position.y=-.12;let W=new Xl({map:E(M.num||`0${J+1}`),depthTest:!1}),ee=new yu(W);ee.scale.set(.42,.42,1),ee.position.y=.05,ee.userData={hotspot:M,pos:[ie,le,b]},H.add(k,ee),ut.add(H),H.userData={hotspot:M,pos:[ie,le,b]},j.push(ee)});let ae=new Xu,pe=new De;function Se(M){let J=u.domElement.getBoundingClientRect();pe.x=(M.clientX-J.left)/J.width*2-1,pe.y=-((M.clientY-J.top)/J.height)*2+1,ae.setFromCamera(pe,o);let H=ae.intersectObjects(j,!0);if(H.length>0){let ie=H[0].object;for(;ie.parent&&!ie.userData.hotspot;)ie=ie.parent;if(ie&&ie.userData.hotspot){showHotspotCard(ie.userData.hotspot);let le=ie.userData.pos;if(le){let b=new F(le[0],le[1],le[2]),k=new F(le[0]*.8+1.2,le[1]+.5,le[2]+2.8);ce(k,b,700)}}}}u.domElement.addEventListener("click",Se);let P={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};og(),lg(t,r,{onToggleRotate:()=>{P.autoRotate=!P.autoRotate,c.autoRotate=P.autoRotate,Pi("btn-rotate",P.autoRotate)},onToggleCfd:()=>{P.cfdEnabled=!P.cfdEnabled,Pi("btn-cfd",P.cfdEnabled)},onToggleCutaway:()=>{P.cutawayEnabled=!P.cutawayEnabled,R.forEach(M=>{let J=M.userData.solidMat||l.panelSolid,H=M.userData.cutawayMat||l.panelCutaway;M.material=P.cutawayEnabled?H:J}),Pi("btn-cutaway",P.cutawayEnabled)},onToggleView:()=>{let M=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),J=M&&window.getComputedStyle(M).display!=="none";M&&(J?(M.style.display="none",t.style.display="block",P.viewMode="3d",Pi("btn-view",!1),Me()):(M.style.display="flex",t.style.display="none",P.viewMode="2d",Pi("btn-view",!0)))},onResetCamera:()=>{ce(Oe,$,650),window.closeHotspotCard()}}),Pi("btn-rotate",P.autoRotate),Pi("btn-cfd",P.cfdEnabled),Pi("btn-cutaway",P.cutawayEnabled),Pi("btn-view",P.viewMode==="2d");let ue=null;function _e(){ue=requestAnimationFrame(_e),oe?oe.update(performance.now()):c.update();for(let M=0;M<w.length;M++)w[M]();u.render(a,o)}_e();function Me(){if(!t)return;let M=t.clientWidth,J=t.clientHeight||480;M>0&&J>0&&(o.aspect=M/J,o.updateProjectionMatrix(),u.setSize(M,J))}return window.addEventListener("resize",Me),{destroy:()=>{cancelAnimationFrame(ue),window.removeEventListener("resize",Me),u.dispose()}}}function og(){if(document.getElementById("sky-3d-hud-styles"))return;let e=document.createElement("style");e.id="sky-3d-hud-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function lg(e,t,i){let r=e.closest(".sky-vlog-hero")||e.parentElement||e,a=r.querySelector(".sky-3d-hud-container");a&&a.remove(),a=document.createElement("div"),a.className="sky-3d-hud-container",a.innerHTML=`
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
  `,r.appendChild(n),document.getElementById("btn-rotate").addEventListener("click",i.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",i.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",i.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",i.onToggleView),document.getElementById("btn-reset").addEventListener("click",i.onResetCamera)}function Pi(e,t){let i=document.getElementById(e);i&&(t?i.classList.add("active"):i.classList.remove("active"))}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>vl()):vl();/*! Bundled license information:

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
