var co="186",$r={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kh=0,Po=1,Zh=2,wa=1,Jh=2,ba=3,Tr=0,pi=1,bt=2,rr=0,Ra=1,_s=2,Io=3,Do=4,$h=5,Yr=100,Qh=101,ec=102,tc=103,ic=104,rc=200,ac=201,nc=202,sc=203,Hl=204,Gl=205,oc=206,lc=207,hc=208,cc=209,uc=210,dc=211,pc=212,fc=213,mc=214,vs=0,Ms=1,xs=2,Aa=3,Ss=4,Es=5,ys=6,bs=7,kl=0,gc=1,_c=2,Vi=0,Vl=1,Wl=2,Xl=3,uo=4,jl=5,Yl=6,ql=7,Kl=300,wr=301,sa=302,Nn=303,Fn=304,Cn=306,Ts=1e3,ir=1001,ws=1002,ti=1003,vc=1004,Na=1005,ii=1006,On=1007,Er=1008,vi=1009,Zl=1010,Jl=1011,Ca=1012,po=1013,Wi=1014,Gi=1015,Xi=1016,fo=1017,mo=1018,Pa=1020,$l=35902,Ql=35899,eh=1021,th=1022,Di=1023,nr=1026,yr=1027,ih=1028,go=1029,Rr=1030,_o=1031,vo=1033,dn=33776,pn=33777,fn=33778,mn=33779,Rs=35840,As=35841,Cs=35842,Ps=35843,Is=36196,Ds=37492,Ls=37496,Us=37488,Ns=37489,xn=37490,Fs=37491,Os=37808,Bs=37809,zs=37810,Hs=37811,Gs=37812,ks=37813,Vs=37814,Ws=37815,Xs=37816,js=37817,Ys=37818,qs=37819,Ks=37820,Zs=37821,Js=36492,$s=36494,Qs=36495,eo=36283,to=36284,Sn=36285,io=36286,Mc=3200,ro=0,xc=1,dr="",Si="srgb",En="srgb-linear",yn="linear",vt="srgb",Bn=7680,Sc=519,Ec=512,yc=513,bc=514,Mo=515,Tc=516,wc=517,xo=518,Rc=519,rh=35044,Lo="300 es",ki=2e3,Ia=2001;function Ac(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Cc(){let e=bn("canvas");return e.style.display="block",e}var Uo={};function Tn(...e){let t="THREE."+e.shift();console.log(t,...e)}function ah(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ke(...e){e=ah(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function ut(...e){e=ah(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Qr(...e){let t=e.join(" ");t in Uo||(Uo[t]=!0,ke(...e))}function Pc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Ic={[vs]:Ms,[xs]:ys,[Ss]:bs,[Aa]:Es,[Ms]:vs,[ys]:xs,[bs]:Ss,[Es]:Aa},mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gn=Math.PI/180,ao=180/Math.PI;function pr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ai[e&255]+ai[e>>8&255]+ai[e>>16&255]+ai[e>>24&255]+"-"+ai[t&255]+ai[t>>8&255]+"-"+ai[t>>16&15|64]+ai[t>>24&255]+"-"+ai[i&63|128]+ai[i>>8&255]+"-"+ai[i>>16&255]+ai[i>>24&255]+ai[r&255]+ai[r>>8&255]+ai[r>>16&255]+ai[r>>24&255]).toLowerCase()}function rt(e,t,i){return Math.max(t,Math.min(i,e))}function Dc(e,t){return(e%t+t)%t}function zn(e,t,i){return(1-i)*e+i*t}function Hi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lc={DEG2RAD:gn},ta,Oe=(ta=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=rt(this.x,t.x,i.x),this.y=rt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=rt(this.x,t,i),this.y=rt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(rt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,o=this.y-t.y;return this.x=n*r-o*a+t.x,this.y=n*a+o*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ta.prototype.isVector2=!0,ta),fr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,o){let h=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],_=a[n+0],d=a[n+1],v=a[n+2],y=a[n+3];if(f!==y||h!==_||c!==d||u!==v){let b=h*_+c*d+u*v+f*y;b<0&&(_=-_,d=-d,v=-v,y=-y,b=-b);let M=1-o;if(b<.9995){let p=Math.acos(b),A=Math.sin(p);M=Math.sin(M*p)/A,o=Math.sin(o*p)/A,h=h*M+_*o,c=c*M+d*o,u=u*M+v*o,f=f*M+y*o}else{h=h*M+_*o,c=c*M+d*o,u=u*M+v*o,f=f*M+y*o;let p=1/Math.sqrt(h*h+c*c+u*u+f*f);h*=p,c*=p,u*=p,f*=p}}e[t]=h,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,n){let o=i[r],h=i[r+1],c=i[r+2],u=i[r+3],f=a[n],_=a[n+1],d=a[n+2],v=a[n+3];return e[t]=o*v+u*f+h*d-c*_,e[t+1]=h*v+u*_+c*f-o*d,e[t+2]=c*v+u*d+o*_-h*f,e[t+3]=u*v-o*f-h*_-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,o=Math.cos,h=Math.sin,c=o(i/2),u=o(r/2),f=o(a/2),_=h(i/2),d=h(r/2),v=h(a/2);switch(n){case"XYZ":this._x=_*u*f+c*d*v,this._y=c*d*f-_*u*v,this._z=c*u*v+_*d*f,this._w=c*u*f-_*d*v;break;case"YXZ":this._x=_*u*f+c*d*v,this._y=c*d*f-_*u*v,this._z=c*u*v-_*d*f,this._w=c*u*f+_*d*v;break;case"ZXY":this._x=_*u*f-c*d*v,this._y=c*d*f+_*u*v,this._z=c*u*v+_*d*f,this._w=c*u*f-_*d*v;break;case"ZYX":this._x=_*u*f-c*d*v,this._y=c*d*f+_*u*v,this._z=c*u*v-_*d*f,this._w=c*u*f+_*d*v;break;case"YZX":this._x=_*u*f+c*d*v,this._y=c*d*f+_*u*v,this._z=c*u*v-_*d*f,this._w=c*u*f-_*d*v;break;case"XZY":this._x=_*u*f-c*d*v,this._y=c*d*f-_*u*v,this._z=c*u*v+_*d*f,this._w=c*u*f+_*d*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],o=t[5],h=t[9],c=t[2],u=t[6],f=t[10],_=i+o+f;if(_>0){let d=.5/Math.sqrt(_+1);this._w=.25/d,this._x=(u-h)*d,this._y=(a-c)*d,this._z=(n-r)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-h)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(a-c)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(h+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(n-r)/d,this._x=(a+c)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,o=t._x,h=t._y,c=t._z,u=t._w;return this._x=i*u+n*o+r*c-a*h,this._y=r*u+n*h+a*o-i*c,this._z=a*u+n*c+i*h-r*o,this._w=n*u-i*o-r*h-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,n=-n,o=-o);let h=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);h=Math.sin(h*c)/u,t=Math.sin(t*c)/u,this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ia,O=(ia=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(No.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(No.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,o=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*o,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*o,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*o,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,o=t.y,h=t.z,c=t.w,u=2*(o*a-h*r),f=2*(h*i-n*a),_=2*(n*r-o*i);return this.x=i+c*u+o*_-h*f,this.y=r+c*f+h*u-n*_,this.z=a+c*_+n*f-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=rt(this.x,t.x,i.x),this.y=rt(this.y,t.y,i.y),this.z=rt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=rt(this.x,t,i),this.y=rt(this.y,t,i),this.z=rt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,o=i.x,h=i.y,c=i.z;return this.x=a*c-n*h,this.y=n*o-r*c,this.z=r*h-a*o,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Hn.copy(this).projectOnVector(t),this.sub(Hn)}reflect(t){return this.sub(Hn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(rt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ia.prototype.isVector3=!0,ia),Hn=new O,No=new fr,ra,$e=(ra=class{constructor(t,i,r,a,n,o,h,c,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,o,h,c,u)}set(t,i,r,a,n,o,h,c,u){let f=this.elements;return f[0]=t,f[1]=a,f[2]=h,f[3]=i,f[4]=n,f[5]=c,f[6]=r,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,o=r[0],h=r[3],c=r[6],u=r[1],f=r[4],_=r[7],d=r[2],v=r[5],y=r[8],b=a[0],M=a[3],p=a[6],A=a[1],B=a[4],s=a[7],T=a[2],R=a[5],w=a[8];return n[0]=o*b+h*A+c*T,n[3]=o*M+h*B+c*R,n[6]=o*p+h*s+c*w,n[1]=u*b+f*A+_*T,n[4]=u*M+f*B+_*R,n[7]=u*p+f*s+_*w,n[2]=d*b+v*A+y*T,n[5]=d*M+v*B+y*R,n[8]=d*p+v*s+y*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],o=t[4],h=t[5],c=t[6],u=t[7],f=t[8];return i*o*f-i*h*u-r*n*f+r*h*c+a*n*u-a*o*c}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],o=t[4],h=t[5],c=t[6],u=t[7],f=t[8],_=f*o-h*u,d=h*c-f*n,v=u*n-o*c,y=i*_+r*d+a*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=_*b,t[1]=(a*u-f*r)*b,t[2]=(h*r-a*o)*b,t[3]=d*b,t[4]=(f*i-a*c)*b,t[5]=(a*n-h*i)*b,t[6]=v*b,t[7]=(r*c-u*i)*b,t[8]=(o*i-r*n)*b,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,o,h){let c=Math.cos(n),u=Math.sin(n);return this.set(r*c,r*u,-r*(c*o+u*h)+o+t,-a*u,a*c,-a*(-u*o+c*h)+h+i,0,0,1),this}scale(t,i){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gn.makeScale(t,i)),this}rotate(t){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gn.makeRotation(-t)),this}translate(t,i){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra.prototype.isMatrix3=!0,ra),Gn=new $e,Fo=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oo=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uc(){let e={enabled:!0,workingColorSpace:En,spaces:{},convert:function(a,n,o){return this.enabled===!1||n===o||!n||!o||(this.spaces[n].transfer===vt&&(a.r=ar(a.r),a.g=ar(a.g),a.b=ar(a.b)),this.spaces[n].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(a.r=ea(a.r),a.g=ea(a.g),a.b=ea(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===dr?yn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,o){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[En]:{primaries:t,whitePoint:r,transfer:yn,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:r,transfer:vt,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),e}var lt=Uc();function ar(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ea(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Pr,Nc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=bn("canvas")),Pr.width=e.width,Pr.height=e.height;let r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=ar(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fc=0,So=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,o=r.length;n<o;n++)r[n].isDataTexture?a.push(kn(r[n].image)):a.push(kn(r[n]))}else a=kn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function kn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Nc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Oc=0,Vn=new O,bi=class _n extends mr{constructor(t=_n.DEFAULT_IMAGE,i=_n.DEFAULT_MAPPING,r=ir,a=ir,n=ii,o=Er,h=Di,c=vi,u=_n.DEFAULT_ANISOTROPY,f=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=pr(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=o,this.anisotropy=u,this.format=h,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vn).x}get height(){return this.source.getSize(Vn).y}get depth(){return this.source.getSize(Vn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){ke(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){ke(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=Kl;bi.DEFAULT_ANISOTROPY=1;var aa,Ut=(aa=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,o=t.elements;return this.x=o[0]*i+o[4]*r+o[8]*a+o[12]*n,this.y=o[1]*i+o[5]*r+o[9]*a+o[13]*n,this.z=o[2]*i+o[6]*r+o[10]*a+o[14]*n,this.w=o[3]*i+o[7]*r+o[11]*a+o[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,o=t.elements,h=o[0],c=o[4],u=o[8],f=o[1],_=o[5],d=o[9],v=o[2],y=o[6],b=o[10];if(Math.abs(c-f)<.01&&Math.abs(u-v)<.01&&Math.abs(d-y)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+v)<.1&&Math.abs(d+y)<.1&&Math.abs(h+_+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(h+1)/2,A=(_+1)/2,B=(b+1)/2,s=(c+f)/4,T=(u+v)/4,R=(d+y)/4;return p>A&&p>B?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=s/r,n=T/r):A>B?A<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(A),r=s/a,n=R/a):B<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(B),r=T/n,a=R/n),this.set(r,a,n,i),this}let M=Math.sqrt((y-d)*(y-d)+(u-v)*(u-v)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(y-d)/M,this.y=(u-v)/M,this.z=(f-c)/M,this.w=Math.acos((h+_+b-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=rt(this.x,t.x,i.x),this.y=rt(this.y,t.y,i.y),this.z=rt(this.z,t.z,i.z),this.w=rt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=rt(this.x,t,i),this.y=rt(this.y,t,i),this.z=rt(this.z,t,i),this.w=rt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa.prototype.isVector4=!0,aa),Bc=class extends mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new bi(r),n=i.count;for(let o=0;o<n;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new So(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class extends Bc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nh=class extends bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},zc=class extends bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},br,At=(br=class{constructor(t,i,r,a,n,o,h,c,u,f,_,d,v,y,b,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,o,h,c,u,f,_,d,v,y,b,M)}set(t,i,r,a,n,o,h,c,u,f,_,d,v,y,b,M){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=o,p[9]=h,p[13]=c,p[2]=u,p[6]=f,p[10]=_,p[14]=d,p[3]=v,p[7]=y,p[11]=b,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new br().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Ir.setFromMatrixColumn(t,0).length(),n=1/Ir.setFromMatrixColumn(t,1).length(),o=1/Ir.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,o=Math.cos(r),h=Math.sin(r),c=Math.cos(a),u=Math.sin(a),f=Math.cos(n),_=Math.sin(n);if(t.order==="XYZ"){let d=o*f,v=o*_,y=h*f,b=h*_;i[0]=c*f,i[4]=-c*_,i[8]=u,i[1]=v+y*u,i[5]=d-b*u,i[9]=-h*c,i[2]=b-d*u,i[6]=y+v*u,i[10]=o*c}else if(t.order==="YXZ"){let d=c*f,v=c*_,y=u*f,b=u*_;i[0]=d+b*h,i[4]=y*h-v,i[8]=o*u,i[1]=o*_,i[5]=o*f,i[9]=-h,i[2]=v*h-y,i[6]=b+d*h,i[10]=o*c}else if(t.order==="ZXY"){let d=c*f,v=c*_,y=u*f,b=u*_;i[0]=d-b*h,i[4]=-o*_,i[8]=y+v*h,i[1]=v+y*h,i[5]=o*f,i[9]=b-d*h,i[2]=-o*u,i[6]=h,i[10]=o*c}else if(t.order==="ZYX"){let d=o*f,v=o*_,y=h*f,b=h*_;i[0]=c*f,i[4]=y*u-v,i[8]=d*u+b,i[1]=c*_,i[5]=b*u+d,i[9]=v*u-y,i[2]=-u,i[6]=h*c,i[10]=o*c}else if(t.order==="YZX"){let d=o*c,v=o*u,y=h*c,b=h*u;i[0]=c*f,i[4]=b-d*_,i[8]=y*_+v,i[1]=_,i[5]=o*f,i[9]=-h*f,i[2]=-u*f,i[6]=v*_+y,i[10]=d-b*_}else if(t.order==="XZY"){let d=o*c,v=o*u,y=h*c,b=h*u;i[0]=c*f,i[4]=-_,i[8]=u*f,i[1]=d*_+b,i[5]=o*f,i[9]=v*_-y,i[2]=y*_-v,i[6]=h*f,i[10]=b*_+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hc,t,Gc)}lookAt(t,i,r){let a=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),or.crossVectors(r,gi),or.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),or.crossVectors(r,gi)),or.normalize(),Fa.crossVectors(gi,or),a[0]=or.x,a[4]=Fa.x,a[8]=gi.x,a[1]=or.y,a[5]=Fa.y,a[9]=gi.y,a[2]=or.z,a[6]=Fa.z,a[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,o=r[0],h=r[4],c=r[8],u=r[12],f=r[1],_=r[5],d=r[9],v=r[13],y=r[2],b=r[6],M=r[10],p=r[14],A=r[3],B=r[7],s=r[11],T=r[15],R=a[0],w=a[4],l=a[8],g=a[12],Y=a[1],L=a[5],F=a[9],Q=a[13],U=a[2],X=a[6],re=a[10],q=a[14],pe=a[3],$=a[7],ee=a[11],ie=a[15];return n[0]=o*R+h*Y+c*U+u*pe,n[4]=o*w+h*L+c*X+u*$,n[8]=o*l+h*F+c*re+u*ee,n[12]=o*g+h*Q+c*q+u*ie,n[1]=f*R+_*Y+d*U+v*pe,n[5]=f*w+_*L+d*X+v*$,n[9]=f*l+_*F+d*re+v*ee,n[13]=f*g+_*Q+d*q+v*ie,n[2]=y*R+b*Y+M*U+p*pe,n[6]=y*w+b*L+M*X+p*$,n[10]=y*l+b*F+M*re+p*ee,n[14]=y*g+b*Q+M*q+p*ie,n[3]=A*R+B*Y+s*U+T*pe,n[7]=A*w+B*L+s*X+T*$,n[11]=A*l+B*F+s*re+T*ee,n[15]=A*g+B*Q+s*q+T*ie,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],o=t[1],h=t[5],c=t[9],u=t[13],f=t[2],_=t[6],d=t[10],v=t[14],y=t[3],b=t[7],M=t[11],p=t[15],A=c*v-u*d,B=h*v-u*_,s=h*d-c*_,T=o*v-u*f,R=o*d-c*f,w=o*_-h*f;return i*(b*A-M*B+p*s)-r*(y*A-M*T+p*R)+a*(y*B-b*T+p*w)-n*(y*s-b*R+M*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],o=t[5],h=t[9],c=t[2],u=t[6],f=t[10];return i*(o*f-h*u)-r*(n*f-h*c)+a*(n*u-o*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],o=t[4],h=t[5],c=t[6],u=t[7],f=t[8],_=t[9],d=t[10],v=t[11],y=t[12],b=t[13],M=t[14],p=t[15],A=i*h-r*o,B=i*c-a*o,s=i*u-n*o,T=r*c-a*h,R=r*u-n*h,w=a*u-n*c,l=f*b-_*y,g=f*M-d*y,Y=f*p-v*y,L=_*M-d*b,F=_*p-v*b,Q=d*p-v*M,U=A*Q-B*F+s*L+T*Y-R*g+w*l;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/U;return t[0]=(h*Q-c*F+u*L)*X,t[1]=(a*F-r*Q-n*L)*X,t[2]=(b*w-M*R+p*T)*X,t[3]=(d*R-_*w-v*T)*X,t[4]=(c*Y-o*Q-u*g)*X,t[5]=(i*Q-a*Y+n*g)*X,t[6]=(M*s-y*w-p*B)*X,t[7]=(f*w-d*s+v*B)*X,t[8]=(o*F-h*Y+u*l)*X,t[9]=(r*Y-i*F-n*l)*X,t[10]=(y*R-b*s+p*A)*X,t[11]=(_*s-f*R-v*A)*X,t[12]=(h*g-o*L-c*l)*X,t[13]=(i*L-r*g+a*l)*X,t[14]=(b*B-y*T-M*A)*X,t[15]=(f*T-_*B+d*A)*X,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,o=t.x,h=t.y,c=t.z,u=n*o,f=n*h;return this.set(u*o+r,u*h-a*c,u*c+a*h,0,u*h+a*c,f*h+r,f*c-a*o,0,u*c-a*h,f*c+a*o,n*c*c+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,o){return this.set(1,r,n,0,t,1,o,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,o=i._y,h=i._z,c=i._w,u=n+n,f=o+o,_=h+h,d=n*u,v=n*f,y=n*_,b=o*f,M=o*_,p=h*_,A=c*u,B=c*f,s=c*_,T=r.x,R=r.y,w=r.z;return a[0]=(1-(b+p))*T,a[1]=(v+s)*T,a[2]=(y-B)*T,a[3]=0,a[4]=(v-s)*R,a[5]=(1-(d+p))*R,a[6]=(M+A)*R,a[7]=0,a[8]=(y+B)*w,a[9]=(M-A)*w,a[10]=(1-(d+b))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let o=Ir.set(a[0],a[1],a[2]).length(),h=Ir.set(a[4],a[5],a[6]).length(),c=Ir.set(a[8],a[9],a[10]).length();n<0&&(o=-o),Ci.copy(this);let u=1/o,f=1/h,_=1/c;return Ci.elements[0]*=u,Ci.elements[1]*=u,Ci.elements[2]*=u,Ci.elements[4]*=f,Ci.elements[5]*=f,Ci.elements[6]*=f,Ci.elements[8]*=_,Ci.elements[9]*=_,Ci.elements[10]*=_,i.setFromRotationMatrix(Ci),r.x=o,r.y=h,r.z=c,this}makePerspective(t,i,r,a,n,o,h=ki,c=!1){let u=this.elements,f=2*n/(i-t),_=2*n/(r-a),d=(i+t)/(i-t),v=(r+a)/(r-a),y,b;if(c)y=n/(o-n),b=o*n/(o-n);else if(h===ki)y=-(o+n)/(o-n),b=-2*o*n/(o-n);else if(h===Ia)y=-o/(o-n),b=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=_,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,i,r,a,n,o,h=ki,c=!1){let u=this.elements,f=2/(i-t),_=2/(r-a),d=-(i+t)/(i-t),v=-(r+a)/(r-a),y,b;if(c)y=1/(o-n),b=o/(o-n);else if(h===ki)y=-2/(o-n),b=-(o+n)/(o-n);else if(h===Ia)y=-1/(o-n),b=-n/(o-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=_,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=y,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},br.prototype.isMatrix4=!0,br),Ir=new O,Ci=new At,Hc=new O(0,0,0),Gc=new O(1,1,1),or=new O,Fa=new O,gi=new O,Bo=new At,zo=new fr,oa=class sh{constructor(t=0,i=0,r=0,a=sh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],o=a[4],h=a[8],c=a[1],u=a[5],f=a[9],_=a[2],d=a[6],v=a[10];switch(i){case"XYZ":this._y=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-_,n),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-rt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-_,n)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(h,n)):(this._x=Math.atan2(-f,v),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return zo.setFromEuler(this),this.setFromQuaternion(zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oa.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kc=0,Ho=new O,Dr=new fr,Ki=new At,Oa=new O,pa=new O,Vc=new O,Wc=new fr,Go=new O(1,0,0),ko=new O(0,1,0),Vo=new O(0,0,1),Wo={type:"added"},Xc={type:"removed"},Lr={type:"childadded",child:null},Wn={type:"childremoved",child:null},li=class vn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();let t=new O,i=new oa,r=new fr,a=new O(1,1,1);function n(){r.setFromEuler(i,!1)}function o(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new At},normalMatrix:{value:new $e}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(Go,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,i){return Ho.copy(t).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Go,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Oa.copy(t):Oa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(pa,Oa,this.up):Ki.lookAt(Oa,pa,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),Dr.setFromRotationMatrix(Ki),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Xc),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,o=a.length;n<o;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,Vc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Wc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let o=0,h=n.length;o<h;o++)n[o].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(h,c){return h[c.uuid]===void 0&&(h[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let c=h.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){let _=c[u];n(t.shapes,_)}else n(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let c=0,u=this.material.length;c<u;c++)h.push(n(t.materials,this.material[c]));a.material=h}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){let c=this.animations[h];a.animations.push(n(t.animations,c))}}if(i){let h=o(t.geometries),c=o(t.materials),u=o(t.textures),f=o(t.images),_=o(t.shapes),d=o(t.skeletons),v=o(t.animations),y=o(t.nodes);h.length>0&&(r.geometries=h),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),_.length>0&&(r.shapes=_),d.length>0&&(r.skeletons=d),v.length>0&&(r.animations=v),y.length>0&&(r.nodes=y)}return r.object=a,r;function o(h){let c=[];for(let u in h){let f=h[u];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};li.DEFAULT_UP=new O(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}},jc={type:"move"},Xn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(let y of e.hand.values()){let b=t.getJointPose(y,i),M=this._getHandJoint(c,y);b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=b.radius),M.visible=b!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],_=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&_>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&_<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jc)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function jn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Dc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=jn(n,a,e+1/3),this.g=jn(n,a,e),this.b=jn(n,a,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Si){function i(a){a!==void 0&&parseFloat(a)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],o=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){let i=oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return lt.workingToColorSpace(ni.copy(this),e),Math.round(rt(ni.r*255,0,255))*65536+Math.round(rt(ni.g*255,0,255))*256+Math.round(rt(ni.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(ni.copy(this),t);let i=ni.r,r=ni.g,a=ni.b,n=Math.max(i,r,a),o=Math.min(i,r,a),h,c,u=(o+n)/2;if(o===n)h=0,c=0;else{let f=n-o;switch(c=u<=.5?f/(n+o):f/(2-n-o),n){case i:h=(r-a)/f+(r<a?6:0);break;case r:h=(a-i)/f+2;break;case a:h=(i-r)/f+4;break}h/=6}return e.h=h,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Si){lt.workingToColorSpace(ni.copy(this),e);let t=ni.r,i=ni.g,r=ni.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Ba);let i=zn(lr.h,Ba.h,t),r=zn(lr.s,Ba.s,t),a=zn(lr.l,Ba.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new Ke;Ke.NAMES=oh;var Yc=class extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pi=new O,Zi=new O,Yn=new O,Ji=new O,Ur=new O,Nr=new O,Xo=new O,qn=new O,Kn=new O,Zn=new O,Jn=new Ut,$n=new Ut,Qn=new Ut,qr=class Kr{constructor(t=new O,i=new O,r=new O){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Pi.subVectors(t,i),a.cross(Pi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Pi.subVectors(a,i),Zi.subVectors(r,i),Yn.subVectors(t,i);let o=Pi.dot(Pi),h=Pi.dot(Zi),c=Pi.dot(Yn),u=Zi.dot(Zi),f=Zi.dot(Yn),_=o*u-h*h;if(_===0)return n.set(0,0,0),null;let d=1/_,v=(u*c-h*f)*d,y=(o*f-h*c)*d;return n.set(1-v-y,y,v)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,a,n,o,h,c){return this.getBarycoord(t,i,r,a,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,Ji.x),c.addScaledVector(o,Ji.y),c.addScaledVector(h,Ji.z),c)}static getInterpolatedAttribute(t,i,r,a,n,o){return Jn.setScalar(0),$n.setScalar(0),Qn.setScalar(0),Jn.fromBufferAttribute(t,i),$n.fromBufferAttribute(t,r),Qn.fromBufferAttribute(t,a),o.setScalar(0),o.addScaledVector(Jn,n.x),o.addScaledVector($n,n.y),o.addScaledVector(Qn,n.z),o}static isFrontFacing(t,i,r,a){return Pi.subVectors(r,i),Zi.subVectors(t,i),Pi.cross(Zi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Pi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Kr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Kr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Kr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,o,h;Ur.subVectors(a,r),Nr.subVectors(n,r),qn.subVectors(t,r);let c=Ur.dot(qn),u=Nr.dot(qn);if(c<=0&&u<=0)return i.copy(r);Kn.subVectors(t,a);let f=Ur.dot(Kn),_=Nr.dot(Kn);if(f>=0&&_<=f)return i.copy(a);let d=c*_-f*u;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),i.copy(r).addScaledVector(Ur,o);Zn.subVectors(t,n);let v=Ur.dot(Zn),y=Nr.dot(Zn);if(y>=0&&v<=y)return i.copy(n);let b=v*u-c*y;if(b<=0&&u>=0&&y<=0)return h=u/(u-y),i.copy(r).addScaledVector(Nr,h);let M=f*y-v*_;if(M<=0&&_-f>=0&&v-y>=0)return Xo.subVectors(n,a),h=(_-f)/(_-f+(v-y)),i.copy(a).addScaledVector(Xo,h);let p=1/(M+b+d);return o=b*p,h=d*p,i.copy(r).addScaledVector(Ur,o).addScaledVector(Nr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ha=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=a.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,Ii):Ii.fromBufferAttribute(a,n),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Ha.subVectors(this.max,fa),Fr.subVectors(e.a,fa),Or.subVectors(e.b,fa),Br.subVectors(e.c,fa),hr.subVectors(Or,Fr),cr.subVectors(Br,Or),_r.subVectors(Fr,Br);let t=[0,-hr.z,hr.y,0,-cr.z,cr.y,0,-_r.z,_r.y,hr.z,0,-hr.x,cr.z,0,-cr.x,_r.z,0,-_r.x,-hr.y,hr.x,0,-cr.y,cr.x,0,-_r.y,_r.x,0];return!es(t,Fr,Or,Br,Ha)||(t=[1,0,0,0,1,0,0,0,1],!es(t,Fr,Or,Br,Ha))?!1:(Ga.crossVectors(hr,cr),t=[Ga.x,Ga.y,Ga.z],es(t,Fr,Or,Br,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$i=[new O,new O,new O,new O,new O,new O,new O,new O],Ii=new O,za=new ha,Fr=new O,Or=new O,Br=new O,hr=new O,cr=new O,_r=new O,fa=new O,Ha=new O,Ga=new O,vr=new O;function es(e,t,i,r,a){for(let n=0,o=e.length-3;n<=o;n+=3){vr.fromArray(e,n);let h=a.x*Math.abs(vr.x)+a.y*Math.abs(vr.y)+a.z*Math.abs(vr.z),c=t.dot(vr),u=i.dot(vr),f=r.dot(vr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>h)return!1}return!0}var zt=new O,ka=new Oe,qc=0,yi=class extends mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),a=xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},lh=class extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},hh=class extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Wt=class extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Kc=new ha,ma=new O,ts=new O,La=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Kc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(ts)),this.expandByPoint(ma.copy(e.center).sub(ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zc=0,xi=new At,is=new li,zr=new O,_i=new ha,ga=new ha,$t=new O,fi=class ch extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?hh:lh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new $e().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,r){return xi.makeTranslation(t,i,r),this.applyMatrix4(xi),this}scale(t,i,r){return xi.makeScale(t,i,r),this.applyMatrix4(xi),this}lookAt(t){return is.lookAt(t),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let o=t[a];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];_i.setFromBufferAttribute(n),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let r=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let n=0,o=i.length;n<o;n++){let h=i[n];ga.setFromBufferAttribute(h),this.morphTargetsRelative?($t.addVectors(_i.min,ga.min),_i.expandByPoint($t),$t.addVectors(_i.max,ga.max),_i.expandByPoint($t)):(_i.expandByPoint(ga.min),_i.expandByPoint(ga.max))}_i.getCenter(r);let a=0;for(let n=0,o=t.count;n<o;n++)$t.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared($t));if(i)for(let n=0,o=i.length;n<o;n++){let h=i[n],c=this.morphTargetsRelative;for(let u=0,f=h.count;u<f;u++)$t.fromBufferAttribute(h,u),c&&(zr.fromBufferAttribute(t,u),$t.add(zr)),a=Math.max(a,r.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==r.count)&&(o=new yi(new Float32Array(4*r.count),4),this.setAttribute("tangent",o));let h=[],c=[];for(let l=0;l<r.count;l++)h[l]=new O,c[l]=new O;let u=new O,f=new O,_=new O,d=new Oe,v=new Oe,y=new Oe,b=new O,M=new O;function p(l,g,Y){u.fromBufferAttribute(r,l),f.fromBufferAttribute(r,g),_.fromBufferAttribute(r,Y),d.fromBufferAttribute(n,l),v.fromBufferAttribute(n,g),y.fromBufferAttribute(n,Y),f.sub(u),_.sub(u),v.sub(d),y.sub(d);let L=1/(v.x*y.y-y.x*v.y);isFinite(L)&&(b.copy(f).multiplyScalar(y.y).addScaledVector(_,-v.y).multiplyScalar(L),M.copy(_).multiplyScalar(v.x).addScaledVector(f,-y.x).multiplyScalar(L),h[l].add(b),h[g].add(b),h[Y].add(b),c[l].add(M),c[g].add(M),c[Y].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let l=0,g=A.length;l<g;++l){let Y=A[l],L=Y.start,F=Y.count;for(let Q=L,U=L+F;Q<U;Q+=3)p(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let B=new O,s=new O,T=new O,R=new O;function w(l){T.fromBufferAttribute(a,l),R.copy(T);let g=h[l];B.copy(g),B.sub(T.multiplyScalar(T.dot(g))).normalize(),s.crossVectors(R,g);let Y=s.dot(c[l])<0?-1:1;o.setXYZW(l,B.x,B.y,B.z,Y)}for(let l=0,g=A.length;l<g;++l){let Y=A[l],L=Y.start,F=Y.count;for(let Q=L,U=L+F;Q<U;Q+=3)w(t.getX(Q+0)),w(t.getX(Q+1)),w(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,v=r.count;d<v;d++)r.setXYZ(d,0,0,0);let a=new O,n=new O,o=new O,h=new O,c=new O,u=new O,f=new O,_=new O;if(t)for(let d=0,v=t.count;d<v;d+=3){let y=t.getX(d+0),b=t.getX(d+1),M=t.getX(d+2);a.fromBufferAttribute(i,y),n.fromBufferAttribute(i,b),o.fromBufferAttribute(i,M),f.subVectors(o,n),_.subVectors(a,n),f.cross(_),h.fromBufferAttribute(r,y),c.fromBufferAttribute(r,b),u.fromBufferAttribute(r,M),h.add(f),c.add(f),u.add(f),r.setXYZ(y,h.x,h.y,h.z),r.setXYZ(b,c.x,c.y,c.z),r.setXYZ(M,u.x,u.y,u.z)}else for(let d=0,v=i.count;d<v;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),o.fromBufferAttribute(i,d+2),f.subVectors(o,n),_.subVectors(a,n),f.cross(_),r.setXYZ(d+0,f.x,f.y,f.z),r.setXYZ(d+1,f.x,f.y,f.z),r.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)$t.fromBufferAttribute(t,i),$t.normalize(),t.setXYZ(i,$t.x,$t.y,$t.z)}toNonIndexed(){function t(h,c){let u=h.array,f=h.itemSize,_=h.normalized,d=new u.constructor(c.length*f),v=0,y=0;for(let b=0,M=c.length;b<M;b++){h.isInterleavedBufferAttribute?v=c[b]*h.data.stride+h.offset:v=c[b]*f;for(let p=0;p<f;p++)d[y++]=u[v++]}return new yi(d,f,_)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new ch,r=this.index.array,a=this.attributes;for(let h in a){let c=a[h],u=t(c,r);i.setAttribute(h,u)}let n=this.morphAttributes;for(let h in n){let c=[],u=n[h];for(let f=0,_=u.length;f<_;f++){let d=u[f],v=t(d,r);c.push(v)}i.morphAttributes[h]=c}i.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];i.addGroup(u.start,u.count,u.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let c in r){let u=r[c];t.data.attributes[c]=u.toJSON(t.data)}let a={},n=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],f=[];for(let _=0,d=u.length;_<d;_++){let v=u[_];f.push(v.toJSON(t.data))}f.length>0&&(a[c]=f,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let u in a){let f=a[u];this.setAttribute(u,f.clone(i))}let n=t.morphAttributes;for(let u in n){let f=[],_=n[u];for(let d=0,v=_.length;d<v;d++)f.push(_[d].clone(i));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,f=o.length;u<f;u++){let _=o[u];this.addGroup(_.start,_.count,_.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=pr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},si=new O,jo=class uh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)si.fromBufferAttribute(this,i),si.applyMatrix4(t),this.setXYZ(i,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)si.fromBufferAttribute(this,i),si.applyNormalMatrix(t),this.setXYZ(i,si.x,si.y,si.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)si.fromBufferAttribute(this,i),si.transformDirection(t),this.setXYZ(i,si.x,si.y,si.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Hi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=xt(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Hi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Hi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Hi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Hi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=xt(i,this.array),r=xt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=xt(i,this.array),r=xt(r,this.array),a=xt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=xt(i,this.array),r=xt(r,this.array),a=xt(a,this.array),n=xt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Tn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new yi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rs=new O,$c=new O,Qc=new $e,tr=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=rs.subVectors(i,t).cross($c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(rs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qc.getNormalMatrix(e),r=this.coplanarPoint(rs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},eu=0,sr=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=Ra,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Gl,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let o in a){let h=a[o];delete h.metadata,n.push(h)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new tr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dh=class extends sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,_a=new O,Gr=new O,kr=new O,Vr=new Oe,va=new Oe,ph=new At,Va=new O,Ma=new O,Wa=new O,Yo=new Oe,as=new Oe,qo=new Oe,tu=class extends li{constructor(e=new dh){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new fi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jc(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new jo(i,3,0,!1)),Hr.setAttribute("uv",new jo(i,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),ph.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-kr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;Xa(Va.set(-.5,-.5,0),kr,n,Gr,r,a),Xa(Ma.set(.5,-.5,0),kr,n,Gr,r,a),Xa(Wa.set(.5,.5,0),kr,n,Gr,r,a),Yo.set(0,0),as.set(1,0),qo.set(1,1);let o=e.ray.intersectTriangle(Va,Ma,Wa,!1,_a);if(o===null&&(Xa(Ma.set(-.5,.5,0),kr,n,Gr,r,a),as.set(0,1),o=e.ray.intersectTriangle(Va,Wa,Ma,!1,_a),o===null))return;let h=e.ray.origin.distanceTo(_a);h<e.near||h>e.far||t.push({distance:h,point:_a.clone(),uv:qr.getInterpolation(_a,Va,Ma,Wa,Yo,as,qo,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xa(e,t,i,r,a,n){Vr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(va.x=n*Vr.x-a*Vr.y,va.y=a*Vr.x+n*Vr.y):va.copy(Vr),e.copy(t),e.x+=va.x,e.y+=va.y,e.applyMatrix4(ph)}var Qi=new O,ns=new O,ja=new O,Ya=new O,Ua=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ns.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(ns);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ja),o=Ya.dot(this.direction),h=-Ya.dot(ja),c=Ya.lengthSq(),u=Math.abs(1-n*n),f,_,d,v;if(u>0)if(f=n*h-o,_=n*o-h,v=a*u,f>=0)if(_>=-v)if(_<=v){let y=1/u;f*=y,_*=y,d=f*(f+n*_+2*o)+_*(n*f+_+2*h)+c}else _=a,f=Math.max(0,-(n*_+o)),d=-f*f+_*(_+2*h)+c;else _=-a,f=Math.max(0,-(n*_+o)),d=-f*f+_*(_+2*h)+c;else _<=-v?(f=Math.max(0,-(-n*a+o)),_=f>0?-a:Math.min(Math.max(-a,-h),a),d=-f*f+_*(_+2*h)+c):_<=v?(f=0,_=Math.min(Math.max(-a,-h),a),d=_*(_+2*h)+c):(f=Math.max(0,-(n*a+o)),_=f>0?a:Math.min(Math.max(-a,-h),a),d=-f*f+_*(_+2*h)+c);else _=n>0?-a:a,f=Math.max(0,-(n*_+o)),d=-f*f+_*(_+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ns).addScaledVector(ja,_),d}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);let i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),o=i-n,h=i+n;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,o,h,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,_=this.origin;return c>=0?(i=(e.min.x-_.x)*c,r=(e.max.x-_.x)*c):(i=(e.max.x-_.x)*c,r=(e.min.x-_.x)*c),u>=0?(a=(e.min.y-_.y)*u,n=(e.max.y-_.y)*u):(a=(e.max.y-_.y)*u,n=(e.min.y-_.y)*u),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),f>=0?(o=(e.min.z-_.z)*f,h=(e.max.z-_.z)*f):(o=(e.max.z-_.z)*f,h=(e.min.z-_.z)*f),i>h||o>r)||((o>i||i!==i)&&(i=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,o=this.direction,h=o.x,c=o.y,u=o.z,f=e.x-n.x,_=e.y-n.y,d=e.z-n.z,v=t.x-n.x,y=t.y-n.y,b=t.z-n.z,M=i.x-n.x,p=i.y-n.y,A=i.z-n.z,B=Math.abs(h),s=Math.abs(c),T=Math.abs(u),R,w,l,g,Y,L,F,Q,U,X,re,q;if(B>=s&&B>=T?(l=h,L=f,U=v,q=M,h>=0?(R=c,w=u,g=_,Y=d,F=y,Q=b,X=p,re=A):(R=u,w=c,g=d,Y=_,F=b,Q=y,X=A,re=p)):s>=T?(l=c,L=_,U=y,q=p,c>=0?(R=u,w=h,g=d,Y=f,F=b,Q=v,X=A,re=M):(R=h,w=u,g=f,Y=d,F=v,Q=b,X=M,re=A)):(l=u,L=d,U=b,q=A,u>=0?(R=h,w=c,g=f,Y=_,F=v,Q=y,X=M,re=p):(R=c,w=h,g=_,Y=f,F=y,Q=v,X=p,re=M)),l===0)return null;let pe=R/l,$=w/l,ee=1/l,ie=g-pe*L,Ze=Y-$*L,Ie=F-pe*U,St=Q-$*U,qe=X-pe*q,J=re-$*q,oe=qe*St-J*Ie,ce=ie*J-Ze*qe,Le=Ie*Ze-St*ie;if(r){if(oe<0||ce<0||Le<0)return null}else if((oe<0||ce<0||Le<0)&&(oe>0||ce>0||Le>0))return null;let ze=oe+ce+Le;if(ze===0)return null;let xe=ee*(oe*L+ce*U+Le*q);return(ze>0?xe<0:xe>0)?null:this.at(xe/ze,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ko=new At,Mr=new Ua,qa=new La,Zo=new O,Ka=new O,Za=new O,Ja=new O,ss=new O,$a=new O,Jo=new O,Qa=new O,Ht=class extends li{constructor(e=new fi,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){$a.set(0,0,0);for(let h=0,c=a.length;h<c;h++){let u=o[h],f=a[h];u!==0&&(ss.fromBufferAttribute(f,e),n?$a.addScaledVector(ss,u):$a.addScaledVector(ss.sub(t),u))}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(a),Mr.copy(e.ray).recast(e.near),!(qa.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(qa,Zo)===null||Mr.origin.distanceToSquared(Zo)>(e.far-e.near)**2))&&(Ko.copy(a).invert(),Mr.copy(e.ray).applyMatrix4(Ko),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,o=a.index,h=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,_=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(n))for(let v=0,y=_.length;v<y;v++){let b=_[v],M=n[b.materialIndex],p=Math.max(b.start,d.start),A=Math.min(o.count,Math.min(b.start+b.count,d.start+d.count));for(let B=p,s=A;B<s;B+=3){let T=o.getX(B),R=o.getX(B+1),w=o.getX(B+2);r=en(this,M,e,i,c,u,f,T,R,w),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let v=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let b=v,M=y;b<M;b+=3){let p=o.getX(b),A=o.getX(b+1),B=o.getX(b+2);r=en(this,n,e,i,c,u,f,p,A,B),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(n))for(let v=0,y=_.length;v<y;v++){let b=_[v],M=n[b.materialIndex],p=Math.max(b.start,d.start),A=Math.min(h.count,Math.min(b.start+b.count,d.start+d.count));for(let B=p,s=A;B<s;B+=3){let T=B,R=B+1,w=B+2;r=en(this,M,e,i,c,u,f,T,R,w),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let v=Math.max(0,d.start),y=Math.min(h.count,d.start+d.count);for(let b=v,M=y;b<M;b+=3){let p=b,A=b+1,B=b+2;r=en(this,n,e,i,c,u,f,p,A,B),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}}};function iu(e,t,i,r,a,n,o,h){let c;if(t.side===pi?c=r.intersectTriangle(o,n,a,!0,h):c=r.intersectTriangle(a,n,o,t.side===Tr,h),c===null)return null;Qa.copy(h),Qa.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(Qa);return u<i.near||u>i.far?null:{distance:u,point:Qa.clone(),object:e}}function en(e,t,i,r,a,n,o,h,c,u){e.getVertexPosition(h,Ka),e.getVertexPosition(c,Za),e.getVertexPosition(u,Ja);let f=iu(e,t,i,r,Ka,Za,Ja,Jo);if(f){let _=new O;qr.getBarycoord(Jo,Ka,Za,Ja,_),a&&(f.uv=qr.getInterpolatedAttribute(a,h,c,u,_,new Oe)),n&&(f.uv1=qr.getInterpolatedAttribute(n,h,c,u,_,new Oe)),o&&(f.normal=qr.getInterpolatedAttribute(o,h,c,u,_,new O),f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1));let d={a:h,b:c,c:u,normal:new O,materialIndex:0};qr.getNormal(Ka,Za,Ja,d.normal),f.face=d,f.barycoord=_}return f}var ru=class extends bi{constructor(e=null,t=1,i=1,r,a,n,o,h,c=ti,u=ti,f,_){super(null,n,o,h,c,u,r,a,f,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xr=new La,au=new Oe(.5,.5),tn=new O,yo=class{constructor(e=new tr,t=new tr,i=new tr,r=new tr,a=new tr,n=new tr){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki,i=!1){let r=this.planes,a=e.elements,n=a[0],o=a[1],h=a[2],c=a[3],u=a[4],f=a[5],_=a[6],d=a[7],v=a[8],y=a[9],b=a[10],M=a[11],p=a[12],A=a[13],B=a[14],s=a[15];if(r[0].setComponents(c-n,d-u,M-v,s-p).normalize(),r[1].setComponents(c+n,d+u,M+v,s+p).normalize(),r[2].setComponents(c+o,d+f,M+y,s+A).normalize(),r[3].setComponents(c-o,d-f,M-y,s-A).normalize(),i)r[4].setComponents(h,_,b,B).normalize(),r[5].setComponents(c-h,d-_,M-b,s-B).normalize();else if(r[4].setComponents(c-h,d-_,M-b,s-B).normalize(),t===ki)r[5].setComponents(c+h,d+_,M+b,s+B).normalize();else if(t===Ia)r[5].setComponents(h,_,b,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);let t=au.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(tn.x=r.normal.x>0?e.max.x:e.min.x,tn.y=r.normal.y>0?e.max.y:e.min.y,tn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fh=class extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rn=new O,An=new O,$o=new At,xa=new Ua,rn=new La,os=new O,Qo=new O,nu=class extends li{constructor(e=new fi,t=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Rn.fromBufferAttribute(t,r-1),An.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rn.distanceTo(An);e.setAttribute("lineDistance",new Wt(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rn.copy(i.boundingSphere),rn.applyMatrix4(r),rn.radius+=a,e.ray.intersectsSphere(rn)===!1)return;$o.copy(r).invert(),xa.copy(e.ray).applyMatrix4($o);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let _=Math.max(0,n.start),d=Math.min(u.count,n.start+n.count);for(let v=_,y=d-1;v<y;v+=c){let b=u.getX(v),M=u.getX(v+1),p=an(this,e,xa,h,b,M,v);p&&t.push(p)}if(this.isLineLoop){let v=u.getX(d-1),y=u.getX(_),b=an(this,e,xa,h,v,y,d-1);b&&t.push(b)}}else{let _=Math.max(0,n.start),d=Math.min(f.count,n.start+n.count);for(let v=_,y=d-1;v<y;v+=c){let b=an(this,e,xa,h,v,v+1,v);b&&t.push(b)}if(this.isLineLoop){let v=an(this,e,xa,h,d-1,_,d-1);v&&t.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function an(e,t,i,r,a,n,o){let h=e.geometry.attributes.position;if(Rn.fromBufferAttribute(h,a),An.fromBufferAttribute(h,n),i.distanceSqToSegment(Rn,An,os,Qo)>r)return;os.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(os);if(!(c<t.near||c>t.far))return{distance:c,point:Qo.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var el=new O,tl=new O,su=class extends nu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)el.fromBufferAttribute(t,r),tl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+el.distanceTo(tl);e.setAttribute("lineDistance",new Wt(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},mh=class extends sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},il=new At,no=new Ua,nn=new La,sn=new O,ou=class extends li{constructor(e=new fi,t=new mh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nn.copy(i.boundingSphere),nn.applyMatrix4(r),nn.radius+=a,e.ray.intersectsSphere(nn)===!1)return;il.copy(r).invert(),no.copy(e.ray).applyMatrix4(il);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,n.start),_=Math.min(c.count,n.start+n.count);for(let d=f,v=_;d<v;d++){let y=c.getX(d);sn.fromBufferAttribute(u,y),rl(sn,y,h,r,e,t,this)}}else{let f=Math.max(0,n.start),_=Math.min(u.count,n.start+n.count);for(let d=f,v=_;d<v;d++)sn.fromBufferAttribute(u,d),rl(sn,d,h,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function rl(e,t,i,r,a,n,o){let h=no.distanceSqToPoint(e);if(h<i){let c=new O;no.closestPointToPoint(e,c),c.applyMatrix4(r);let u=a.ray.origin.distanceTo(c);if(u<a.near||u>a.far)return;n.push({distance:u,distanceToRay:Math.sqrt(h),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gh=class extends bi{constructor(e=[],t=wr,i,r,a,n,o,h,c,u){super(e,t,i,r,a,n,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},al=class extends bi{constructor(e,t,i,r,a,n,o,h,c){super(e,t,i,r,a,n,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Da=class extends bi{constructor(e,t,i=Wi,r,a,n,o=ti,h=ti,c,u=nr,f=1){if(u!==nr&&u!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:e,height:t,depth:f};super(_,r,a,n,o,h,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new So(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},lu=class extends Da{constructor(e,t=Wi,i=wr,r,a,n=ti,o=ti,h,c=nr){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,a,n,o,h,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_h=class extends bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pn=class vh extends fi{constructor(t=1,i=1,r=1,a=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:o};let h=this;a=Math.floor(a),n=Math.floor(n),o=Math.floor(o);let c=[],u=[],f=[],_=[],d=0,v=0;y("z","y","x",-1,-1,r,i,t,o,n,0),y("z","y","x",1,-1,r,i,-t,o,n,1),y("x","z","y",1,1,t,r,i,a,o,2),y("x","z","y",1,-1,t,r,-i,a,o,3),y("x","y","z",1,-1,t,i,r,a,n,4),y("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(c),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(_,2));function y(b,M,p,A,B,s,T,R,w,l,g){let Y=s/w,L=T/l,F=s/2,Q=T/2,U=R/2,X=w+1,re=l+1,q=0,pe=0,$=new O;for(let ee=0;ee<re;ee++){let ie=ee*L-Q;for(let Ze=0;Ze<X;Ze++){let Ie=Ze*Y-F;$[b]=Ie*A,$[M]=ie*B,$[p]=U,u.push($.x,$.y,$.z),$[b]=0,$[M]=0,$[p]=R>0?1:-1,f.push($.x,$.y,$.z),_.push(Ze/w),_.push(1-ee/l),q+=1}}for(let ee=0;ee<l;ee++)for(let ie=0;ie<w;ie++){let Ze=d+ie+X*ee,Ie=d+ie+X*(ee+1),St=d+(ie+1)+X*(ee+1),qe=d+(ie+1)+X*ee;c.push(Ze,Ie,qe),c.push(Ie,St,qe),pe+=6}h.addGroup(v,pe,g),v+=pe,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},so=class Mh extends fi{constructor(t=1,i=1,r=1,a=32,n=1,o=!1,h=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:o,thetaStart:h,thetaLength:c};let u=this;a=Math.floor(a),n=Math.floor(n);let f=[],_=[],d=[],v=[],y=0,b=[],M=r/2,p=0;A(),o===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(f),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(v,2));function A(){let s=new O,T=new O,R=0,w=(i-t)/r;for(let l=0;l<=n;l++){let g=[],Y=l/n,L=Y*(i-t)+t;for(let F=0;F<=a;F++){let Q=F/a,U=Q*c+h,X=Math.sin(U),re=Math.cos(U);T.x=L*X,T.y=-Y*r+M,T.z=L*re,_.push(T.x,T.y,T.z),s.set(X,w,re).normalize(),d.push(s.x,s.y,s.z),v.push(Q,1-Y),g.push(y++)}b.push(g)}for(let l=0;l<a;l++)for(let g=0;g<n;g++){let Y=b[g][l],L=b[g+1][l],F=b[g+1][l+1],Q=b[g][l+1];(t>0||g!==0)&&(f.push(Y,L,Q),R+=3),(i>0||g!==n-1)&&(f.push(L,F,Q),R+=3)}u.addGroup(p,R,0),p+=R}function B(s){let T=y,R=new Oe,w=new O,l=0,g=s===!0?t:i,Y=s===!0?1:-1;for(let F=1;F<=a;F++)_.push(0,M*Y,0),d.push(0,Y,0),v.push(.5,.5),y++;let L=y;for(let F=0;F<=a;F++){let Q=F/a*c+h,U=Math.cos(Q),X=Math.sin(Q);w.x=g*X,w.y=M*Y,w.z=g*U,_.push(w.x,w.y,w.z),d.push(0,Y,0),R.x=U*.5+.5,R.y=X*.5*Y+.5,v.push(R.x,R.y),y++}for(let F=0;F<a;F++){let Q=T+F,U=L+F;s===!0?f.push(U,U+1,Q):f.push(U+1,U,Q),l+=3}u.addGroup(p,l,s===!0?1:2),p+=l}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class xh extends so{constructor(t=1,i=1,r=32,a=1,n=!1,o=0,h=Math.PI*2){super(0,t,i,r,a,n,o,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:o,thetaLength:h}}static fromJSON(t){return new xh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bo=class Sh extends fi{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,o=i/2,h=Math.floor(r),c=Math.floor(a),u=h+1,f=c+1,_=t/h,d=i/c,v=[],y=[],b=[],M=[];for(let p=0;p<f;p++){let A=p*d-o;for(let B=0;B<u;B++){let s=B*_-n;y.push(s,-A,0),b.push(0,0,1),M.push(B/h),M.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<h;A++){let B=A+u*p,s=A+u*(p+1),T=A+1+u*(p+1),R=A+1+u*p;v.push(B,s,R),v.push(s,T,R)}this.setIndex(v),this.setAttribute("position",new Wt(y,3)),this.setAttribute("normal",new Wt(b,3)),this.setAttribute("uv",new Wt(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.width,t.height,t.widthSegments,t.heightSegments)}},nl=class Eh extends fi{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,o=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:o,thetaLength:h},r=Math.floor(r),a=Math.floor(a);let c=[],u=[],f=[],_=[],d=new O,v=new O,y=new O;for(let b=0;b<=r;b++){let M=o+b/r*h;for(let p=0;p<=a;p++){let A=p/a*n;v.x=(t+i*Math.cos(M))*Math.cos(A),v.y=(t+i*Math.cos(M))*Math.sin(A),v.z=i*Math.sin(M),u.push(v.x,v.y,v.z),d.x=t*Math.cos(A),d.y=t*Math.sin(A),y.subVectors(v,d).normalize(),f.push(y.x,y.y,y.z),_.push(p/a),_.push(b/r)}}for(let b=1;b<=r;b++)for(let M=1;M<=a;M++){let p=(a+1)*b+M-1,A=(a+1)*(b-1)+M-1,B=(a+1)*(b-1)+M,s=(a+1)*b+M;c.push(p,A,s),c.push(A,B,s)}this.setIndex(c),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},hu=class extends sr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function la(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(sl(a))a.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(sl(a[0])){let n=[];for(let o=0,h=a.length;o<h;o++)n[o]=a[o].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function oi(e){let t={};for(let i=0;i<e.length;i++){let r=la(e[i]);for(let a in r)t[a]=r[a]}return t}function sl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function cu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function yh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:lt.workingColorSpace}var uu={clone:la,merge:oi},du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ji=class extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=du,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fu=class extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mu=class extends Rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},gu=class extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_u=class extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bh=class extends li{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ls=new At,ol=new O,ll=new O,vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ls.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ls,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,o=r?r.w/a.y:1,h=r?r.x/a.x:0,c=r?r.y/a.y:0;e.coordinateSystem===Ia||e.reversedDepth?t.set(.5*n,0,0,.5*n+h,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+h,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},on=new O,ln=new fr,Oi=new O,Th=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(on,ln,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(on,ln,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(on,ln,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(on,ln,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ur=new O,hl=new Oe,cl=new Oe,Ei=class extends Th{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(gn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,hl,cl),t.subVectors(cl,hl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let h=n.fullWidth,c=n.fullHeight;a+=n.offsetX*r/h,t-=n.offsetY*i/c,r*=n.width/h,i*=n.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},To=class extends Th{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,o=r+t,h=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,n=a+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,n,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mu=class extends vu{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(li.DEFAULT_UP),this.updateMatrix(),this.target=new li,this.shadow=new Mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xu=class extends bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Wr=-90,Xr=1,Su=class extends li{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ei(Wr,Xr,e,t);r.layers=this.layers,this.add(r);let a=new Ei(Wr,Xr,e,t);a.layers=this.layers,this.add(a);let n=new Ei(Wr,Xr,e,t);n.layers=this.layers,this.add(n);let o=new Ei(Wr,Xr,e,t);o.layers=this.layers,this.add(o);let h=new Ei(Wr,Xr,e,t);h.layers=this.layers,this.add(h);let c=new Ei(Wr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,o,h]=t;for(let c of t)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,o,h,c,u]=this.children,f=e.getRenderTarget(),_=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,_,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Eu=class extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},wh="\\[\\]\\.:\\/",wo="[^"+wh+"]",yu="[^"+wh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",wo);/(WCOD+)?/.source.replace("WCOD",yu);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo);var ul=new At,bu=class{constructor(e,t,i=0,r=1/0){this.ray=new Ua(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ul),this}intersectObject(e,t=!0,i=[]){return oo(e,this,i,t),i.sort(dl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)oo(e[r],this,i,t);return i.sort(dl),i}};function dl(e,t){return e.distance-t.distance}function oo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let o=0,h=n.length;o<h;o++)oo(n[o],t,i,!0)}}var pl=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},na;na=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},na.prototype.isMatrix2=!0;var Tu=class extends su{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ke(i),r=new Ke(r);let a=t/2,n=e/t,o=e/2,h=[],c=[];for(let _=0,d=0,v=-o;_<=t;_++,v+=n){h.push(-o,0,v,o,0,v),h.push(v,0,-o,v,0,o);let y=_===a?i:r;y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3}let u=new fi;u.setAttribute("position",new Wt(h,3)),u.setAttribute("color",new Wt(c,3));let f=new fh({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},wu=class extends mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function fl(e,t,i,r){let a=Ru(r);switch(i){case eh:return e*t;case ih:return e*t/a.components*a.byteLength;case go:return e*t/a.components*a.byteLength;case Rr:return e*t*2/a.components*a.byteLength;case _o:return e*t*2/a.components*a.byteLength;case th:return e*t*3/a.components*a.byteLength;case Di:return e*t*4/a.components*a.byteLength;case vo:return e*t*4/a.components*a.byteLength;case dn:case pn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fn:case mn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case As:case Ps:return Math.max(e,16)*Math.max(t,8)/4;case Rs:case Cs:return Math.max(e,8)*Math.max(t,8)/2;case Is:case Ds:case Us:case Ns:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ls:case xn:case Fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Os:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Gs:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ks:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Vs:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ws:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Xs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case js:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ks:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zs:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Js:case $s:case Qs:return Math.ceil(e/4)*Math.ceil(t/4)*16;case eo:case to:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Sn:case io:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ru(e){switch(e){case vi:case Zl:return{byteLength:1,components:1};case Ca:case Jl:case Xi:return{byteLength:2,components:1};case fo:case mo:return{byteLength:2,components:4};case Wi:case po:case Gi:return{byteLength:4,components:1};case $l:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);function Rh(){let e=null,t=!1,i=null,r=null;function a(n,o){r=e.requestAnimationFrame(a),i(n,o)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Au(e){let t=new WeakMap;function i(h,c){let u=h.array,f=h.usage,_=u.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,u,f),h.onUploadCallback();let v;if(u instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=e.HALF_FLOAT;else if(u instanceof Uint16Array)h.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=e.SHORT;else if(u instanceof Uint32Array)v=e.UNSIGNED_INT;else if(u instanceof Int32Array)v=e.INT;else if(u instanceof Int8Array)v=e.BYTE;else if(u instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,c,u){let f=c.array,_=c.updateRanges;if(e.bindBuffer(u,h),_.length===0)e.bufferSubData(u,0,f);else{_.sort((v,y)=>v.start-y.start);let d=0;for(let v=1;v<_.length;v++){let y=_[d],b=_[v];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++d,_[d]=b)}_.length=d+1;for(let v=0,y=_.length;v<y;v++){let b=_[v];e.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function n(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=t.get(h);c&&(e.deleteBuffer(c.buffer),t.delete(h))}function o(h,c){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let f=t.get(h);(!f||f.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let u=t.get(h);if(u===void 0)t.set(h,i(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,c),u.version=h.version}}return{get:a,remove:n,update:o}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Rd=`uniform sampler2D dfgLUT;
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
}`,Ad=`
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Qp=`#define STANDARD
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
}`,ef=`#define STANDARD
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
}`,tf=`#define TOON
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
}`,rf=`#define TOON
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
}`,af=`uniform float size;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,of=`uniform vec3 color;
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
}`,lf=`uniform float rotation;
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
}`,hf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Iu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Hu,bsdfs:Gu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Yu,color_fragment:qu,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:Ju,common:$u,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:id,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:nd,colorspace_pars_fragment:sd,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:hd,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Sd,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:fd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:xd,lights_toon_fragment:Ed,lights_toon_pars_fragment:yd,lights_phong_fragment:bd,lights_phong_pars_fragment:Td,lights_physical_fragment:wd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Ad,lights_fragment_maps:Cd,lights_fragment_end:Pd,lightprobes_pars_fragment:Id,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Gd,morphinstance_vertex:kd,morphcolor_vertex:Vd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:jd,normal_fragment_begin:Yd,normal_fragment_maps:qd,normal_pars_fragment:Kd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ip,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:np,project_vertex:sp,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:pp,shadowmask_pars_fragment:fp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:xp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:yp,transmission_pars_fragment:bp,uv_pars_fragment:Tp,uv_pars_vertex:wp,uv_vertex:Rp,worldpos_vertex:Ap,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Ip,backgroundCube_frag:Dp,cube_vert:Lp,cube_frag:Up,depth_vert:Np,depth_frag:Fp,distance_vert:Op,distance_frag:Bp,equirect_vert:zp,equirect_frag:Hp,linedashed_vert:Gp,linedashed_frag:kp,meshbasic_vert:Vp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:jp,meshmatcap_vert:Yp,meshmatcap_frag:qp,meshnormal_vert:Kp,meshnormal_frag:Zp,meshphong_vert:Jp,meshphong_frag:$p,meshphysical_vert:Qp,meshphysical_frag:ef,meshtoon_vert:tf,meshtoon_frag:rf,points_vert:af,points_frag:nf,shadow_vert:sf,shadow_frag:of,sprite_vert:lf,sprite_frag:hf},Me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},zi={basic:{uniforms:oi([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:oi([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:oi([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:oi([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:oi([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:oi([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:oi([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:oi([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:oi([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:oi([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:oi([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:oi([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:oi([Me.lights,Me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};zi.physical={uniforms:oi([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var hn={r:0,b:0,g:0},cf=new At,Ah=new $e;Ah.set(-1,0,0,0,1,0,0,0,1);function uf(e,t,i,r,a,n){let o=new Ke(0),h=a===!0?0:1,c,u,f=null,_=0,d=null;function v(A){let B=A.isScene===!0?A.background:null;if(B&&B.isTexture){let s=A.backgroundBlurriness>0;B=t.get(B,s)}return B}function y(A){let B=!1,s=v(A);s===null?M(o,h):s&&s.isColor&&(M(s,1),B=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(A,B){let s=v(B);s&&(s.isCubeTexture||s.mapping===Cn)?(u===void 0&&(u=new Ht(new Pn(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:la(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=s,u.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cf.makeRotationFromEuler(B.backgroundRotation)).transpose(),s.isCubeTexture&&s.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ah),u.material.toneMapped=lt.getTransfer(s.colorSpace)!==vt,(f!==s||_!==s.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,f=s,_=s.version,d=e.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):s&&s.isTexture&&(c===void 0&&(c=new Ht(new bo(2,2),new ji({name:"BackgroundMaterial",uniforms:la(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=s,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=lt.getTransfer(s.colorSpace)!==vt,s.matrixAutoUpdate===!0&&s.updateMatrix(),c.material.uniforms.uvTransform.value.copy(s.matrix),(f!==s||_!==s.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,f=s,_=s.version,d=e.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function M(A,B){A.getRGB(hn,yh(e)),i.buffers.color.setClear(hn.r,hn.g,hn.b,B,n)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,B=1){o.set(A),h=B,M(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,M(o,h)},render:y,addToRenderList:b,dispose:p}}function df(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,o=!1;function h(L,F,Q,U,X){let re=!1,q=_(L,U,Q,F);n!==q&&(n=q,u(n.object)),re=v(L,U,Q,X),re&&y(L,U,Q,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,s(L,F,Q,U),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return e.createVertexArray()}function u(L){return e.bindVertexArray(L)}function f(L){return e.deleteVertexArray(L)}function _(L,F,Q,U){let X=U.wireframe===!0,re=r[F.id];re===void 0&&(re={},r[F.id]=re);let q=L.isInstancedMesh===!0?L.id:0,pe=re[q];pe===void 0&&(pe={},re[q]=pe);let $=pe[Q.id];$===void 0&&($={},pe[Q.id]=$);let ee=$[X];return ee===void 0&&(ee=d(c()),$[X]=ee),ee}function d(L){let F=[],Q=[],U=[];for(let X=0;X<i;X++)F[X]=0,Q[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:U,object:L,attributes:{},index:null}}function v(L,F,Q,U){let X=n.attributes,re=F.attributes,q=0,pe=Q.getAttributes();for(let $ in pe)if(pe[$].location>=0){let ee=X[$],ie=re[$];if(ie===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;q++}return n.attributesNum!==q||n.index!==U}function y(L,F,Q,U){let X={},re=F.attributes,q=0,pe=Q.getAttributes();for(let $ in pe)if(pe[$].location>=0){let ee=re[$];ee===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),X[$]=ie,q++}n.attributes=X,n.attributesNum=q,n.index=U}function b(){let L=n.newAttributes;for(let F=0,Q=L.length;F<Q;F++)L[F]=0}function M(L){p(L,0)}function p(L,F){let Q=n.newAttributes,U=n.enabledAttributes,X=n.attributeDivisors;Q[L]=1,U[L]===0&&(e.enableVertexAttribArray(L),U[L]=1),X[L]!==F&&(e.vertexAttribDivisor(L,F),X[L]=F)}function A(){let L=n.newAttributes,F=n.enabledAttributes;for(let Q=0,U=F.length;Q<U;Q++)F[Q]!==L[Q]&&(e.disableVertexAttribArray(Q),F[Q]=0)}function B(L,F,Q,U,X,re,q){q===!0?e.vertexAttribIPointer(L,F,Q,X,re):e.vertexAttribPointer(L,F,Q,U,X,re)}function s(L,F,Q,U){b();let X=U.attributes,re=Q.getAttributes(),q=F.defaultAttributeValues;for(let pe in re){let $=re[pe];if($.location>=0){let ee=X[pe];if(ee===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){let ie=ee.normalized,Ze=ee.itemSize,Ie=t.get(ee);if(Ie===void 0)continue;let St=Ie.buffer,qe=Ie.type,J=Ie.bytesPerElement,oe=qe===e.INT||qe===e.UNSIGNED_INT||ee.gpuType===po;if(ee.isInterleavedBufferAttribute){let ce=ee.data,Le=ce.stride,ze=ee.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<$.locationSize;xe++)p($.location+xe,ce.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<$.locationSize;xe++)M($.location+xe);e.bindBuffer(e.ARRAY_BUFFER,St);for(let xe=0;xe<$.locationSize;xe++)B($.location+xe,Ze/$.locationSize,qe,ie,Le*J,(ze+Ze/$.locationSize*xe)*J,oe)}else{if(ee.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)p($.location+ce,ee.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<$.locationSize;ce++)M($.location+ce);e.bindBuffer(e.ARRAY_BUFFER,St);for(let ce=0;ce<$.locationSize;ce++)B($.location+ce,Ze/$.locationSize,qe,ie,Ze*J,Ze/$.locationSize*ce*J,oe)}}else if(q!==void 0){let ie=q[pe];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv($.location,ie);break;case 3:e.vertexAttrib3fv($.location,ie);break;case 4:e.vertexAttrib4fv($.location,ie);break;default:e.vertexAttrib1fv($.location,ie)}}}}A()}function T(){g();for(let L in r){let F=r[L];for(let Q in F){let U=F[Q];for(let X in U){let re=U[X];for(let q in re)f(re[q].object),delete re[q];delete U[X]}}delete r[L]}}function R(L){if(r[L.id]===void 0)return;let F=r[L.id];for(let Q in F){let U=F[Q];for(let X in U){let re=U[X];for(let q in re)f(re[q].object),delete re[q];delete U[X]}}delete r[L.id]}function w(L){for(let F in r){let Q=r[F];for(let U in Q){let X=Q[U];if(X[L.id]===void 0)continue;let re=X[L.id];for(let q in re)f(re[q].object),delete re[q];delete X[L.id]}}}function l(L){for(let F in r){let Q=r[F],U=L.isInstancedMesh===!0?L.id:0,X=Q[U];if(X!==void 0){for(let re in X){let q=X[re];for(let pe in q)f(q[pe].object),delete q[pe];delete X[re]}delete Q[U],Object.keys(Q).length===0&&delete r[F]}}}function g(){Y(),o=!0,n!==a&&(n=a,u(n.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:g,resetDefaultState:Y,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:l,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:M,disableUnusedAttributes:A}}function pf(e,t,i){let r;function a(c){r=c}function n(c,u){e.drawArrays(r,c,u),i.update(u,r,1)}function o(c,u,f){f!==0&&(e.drawArraysInstanced(r,c,u,f),i.update(u,r,f))}function h(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let _=0;for(let d=0;d<f;d++)_+=u[d];i.update(_,r,1)}this.setMode=a,this.render=n,this.renderInstances=o,this.renderMultiDraw=h}function ff(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(w){return!(w!==Di&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(w){let l=w===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==vi&&w!==Gi&&!l&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=i.precision!==void 0?i.precision:"highp",f=c(u);f!==u&&(ke("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let _=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),M=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),B=e.getParameter(e.MAX_VARYING_VECTORS),s=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:h,precision:u,logarithmicDepthBuffer:_,reversedDepthBuffer:d,maxTextures:v,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:A,maxVaryings:B,maxFragmentUniforms:s,maxSamples:T,samples:R}}function mf(e){let t=this,i=null,r=0,a=!1,n=!1,o=new tr,h=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,d){let v=_.length!==0||d||r!==0||a;return a=d,r=_.length,v},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(_,d){i=f(_,d,0)},this.setState=function(_,d,v){let y=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,p=e.get(_);if(!a||y===null||y.length===0||n&&!M)n?f(null):u();else{let A=n?0:r,B=A*4,s=p.clippingState||null;c.value=s,s=f(y,d,B,v);for(let T=0;T!==B;++T)s[T]=i[T];p.clippingState=s,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==i&&(c.value=i,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function f(_,d,v,y){let b=_!==null?_.length:0,M=null;if(b!==0){if(M=c.value,y!==!0||M===null){let p=v+b*4,A=d.matrixWorldInverse;h.getNormalMatrix(A),(M===null||M.length<p)&&(M=new Float32Array(p));for(let B=0,s=v;B!==b;++B,s+=4)o.copy(_[B]).applyMatrix4(A,h),o.normal.toArray(M,s),M[s+3]=o.constant}c.value=M,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}var Jr=4,gf=6,_f=20,vf=256,Ea=new To,ml=new Ke,cs=null,us=0,ds=0,ps=!1,Mf=new O,Sr=new O,gl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:o=Mf}=a;cs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,r,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cs,us,ds),this._renderer.xr.enabled=ps,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Xi,format:Di,colorSpace:En,depthBuffer:!1},r=_l(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xf(a)),this._blurMaterial=Ef(a,e,t),this._ggxMaterial=Sf(a,e,t)}return r}_compileMaterial(e){let t=new Ht(new fi,e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,i,r,a){let n=new Ei(90,1,t,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(ml),c.toneMapping=Vi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Pn,new wn({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,d=_.material,v=!1,y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,v=!0):(d.color.copy(ml),v=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(n.up.set(0,o[b],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+h[b],a.y,a.z)):M===1?(n.up.set(0,0,o[b]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+h[b],a.z)):(n.up.set(0,o[b],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+h[b]));let p=this._cubeSize;jr(r,M*p,b>2?p:0,p,p),c.setRenderTarget(r),v&&c.render(_,n),c.render(e,n)}c.toneMapping=f,c.autoClear=u,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===wr||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let o=a.uniforms;o.envMap.value=e;let h=this._cubeSize;jr(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(n,Ea)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,o=this._lodMeshes[i];o.material=n;let h=n.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),_=c*1.25,d=f*_,{_lodMax:v}=this,y=this._sizeLods[i],b=3*y*(i>v-Jr?i-v+Jr:0),M=4*(this._cubeSize-y);h.envMap.value=e.texture,h.roughness.value=d,h.mipInt.value=v-t,jr(a,b,M,3*y,2*y),r.setRenderTarget(a),r.render(o,Ea),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=v-i,jr(e,b,M,3*y,2*y),r.setRenderTarget(e),r.render(o,Ea)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,o=this._blurMaterial,h=this._lodMeshes[r];h.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Jr?r-this._lodMax+Jr:0),_=4*(this._cubeSize-u);jr(t,f,_,3*u,2*u),n.setRenderTarget(t),n.render(h,Ea)}};function xf(e){let t=[],i=[],r=e,a=e-Jr+1+gf;for(let n=0;n<a;n++){let o=Math.pow(2,r);t.push(o);let h=1/(o-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],_=6,d=6,v=3,y=new Float32Array(v*d*_),b=new Float32Array(v*d*_);for(let p=0;p<_;p++){let A=p%3*2/3-1,B=p>2?0:-1,s=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];y.set(s,v*d*p);for(let T=0;T<d;T++){let R=f[T*2]*2-1,w=f[T*2+1]*2-1;p===0?Sr.set(1,w,R):p===1?Sr.set(-R,1,-w):p===2?Sr.set(-R,w,1):p===3?Sr.set(-1,w,-R):p===4?Sr.set(-R,-1,w):Sr.set(R,w,-1),Sr.toArray(b,(p*d+T)*v)}}let M=new fi;M.setAttribute("position",new yi(y,v)),M.setAttribute("outputDirection",new yi(b,v)),i.push(new Ht(M,null)),r>Jr&&r--}return{lodMeshes:i,sizeLods:t}}function _l(e,t,i){let r=new Li(e,t,i);return r.texture.mapping=Cn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Sf(e,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:In(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ef(e,t,i){return new ji({name:"SphericalGaussianBlur",defines:{SAMPLES:_f,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:In(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function vl(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:In(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ml(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:In(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function In(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ch=class extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pn(5,5,5),a=new ji({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pi,blending:rr});a.uniforms.tEquirect.value=t;let n=new Ht(r,a),o=t.minFilter;return t.minFilter===Er&&(t.minFilter=ii),new Su(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function yf(e){let t=new WeakMap,i=new WeakMap,r=null;function a(d,v=!1){return d==null?null:v?o(d):n(d)}function n(d){if(d&&d.isTexture){let v=d.mapping;if(v===Nn||v===Fn)if(t.has(d)){let y=t.get(d).texture;return h(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let b=new Ch(y.height);return b.fromEquirectangularTexture(e,d),t.set(d,b),d.addEventListener("dispose",u),h(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let v=d.mapping,y=v===Nn||v===Fn,b=v===wr||v===sa;if(y||b){let M=i.get(d),p=M!==void 0?M.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return r===null&&(r=new gl(e)),M=y?r.fromEquirectangular(d,M):r.fromCubemap(d,M),M.texture.pmremVersion=d.pmremVersion,i.set(d,M),M.texture;if(M!==void 0)return M.texture;{let A=d.image;return y&&A&&A.height>0||b&&A&&c(A)?(r===null&&(r=new gl(e)),M=y?r.fromEquirectangular(d):r.fromCubemap(d),M.texture.pmremVersion=d.pmremVersion,i.set(d,M),d.addEventListener("dispose",f),M.texture):null}}}return d}function h(d,v){return v===Nn?d.mapping=wr:v===Fn&&(d.mapping=sa),d}function c(d){let v=0,y=6;for(let b=0;b<y;b++)d[b]!==void 0&&v++;return v===y}function u(d){let v=d.target;v.removeEventListener("dispose",u);let y=t.get(v);y!==void 0&&(t.delete(v),y.dispose())}function f(d){let v=d.target;v.removeEventListener("dispose",f);let y=i.get(v);y!==void 0&&(i.delete(v),y.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function bf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Qr("WebGLRenderer: "+r+" extension not supported."),a}}}function Tf(e,t,i,r){let a={},n=new WeakMap;function o(_){let d=_.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete a[d.id];let v=n.get(d);v&&(t.remove(v),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function h(_,d){return a[d.id]===!0||(d.addEventListener("dispose",o),a[d.id]=!0,i.memory.geometries++),d}function c(_){let d=_.attributes;for(let v in d)t.update(d[v],e.ARRAY_BUFFER)}function u(_){let d=[],v=_.index,y=_.attributes.position,b=0;if(y===void 0)return;if(v!==null){let A=v.array;b=v.version;for(let B=0,s=A.length;B<s;B+=3){let T=A[B+0],R=A[B+1],w=A[B+2];d.push(T,R,R,w,w,T)}}else{let A=y.array;b=y.version;for(let B=0,s=A.length/3-1;B<s;B+=3){let T=B+0,R=B+1,w=B+2;d.push(T,R,R,w,w,T)}}let M=new(y.count>=65535?hh:lh)(d,1);M.version=b;let p=n.get(_);p&&t.remove(p),n.set(_,M)}function f(_){let d=n.get(_);if(d){let v=_.index;v!==null&&d.version<v.version&&u(_)}else u(_);return n.get(_)}return{get:h,update:c,getWireframeAttribute:f}}function wf(e,t,i){let r;function a(_){r=_}let n,o;function h(_){n=_.type,o=_.bytesPerElement}function c(_,d){e.drawElements(r,d,n,_*o),i.update(d,r,1)}function u(_,d,v){v!==0&&(e.drawElementsInstanced(r,d,n,_*o,v),i.update(d,r,v))}function f(_,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,_,0,v);let y=0;for(let b=0;b<v;b++)y+=d[b];i.update(y,r,1)}this.setMode=a,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function Rf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,o,h){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=h*(n/3);break;case e.LINES:i.lines+=h*(n/2);break;case e.LINE_STRIP:i.lines+=h*(n-1);break;case e.LINE_LOOP:i.lines+=h*n;break;case e.POINTS:i.points+=h*n;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Af(e,t,i){let r=new WeakMap,a=new Ut;function n(o,h,c){let u=o.morphTargetInfluences,f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0,d=r.get(h);if(d===void 0||d.count!==_){let v=function(){l.dispose(),r.delete(h),h.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],B=h.morphAttributes.color||[],s=0;y===!0&&(s=1),b===!0&&(s=2),M===!0&&(s=3);let T=h.attributes.position.count*s,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*R*4*_),l=new nh(w,T,R,_);l.type=Gi,l.needsUpdate=!0;let g=s*4;for(let Y=0;Y<_;Y++){let L=p[Y],F=A[Y],Q=B[Y],U=T*R*4*Y;for(let X=0;X<L.count;X++){let re=X*g;y===!0&&(a.fromBufferAttribute(L,X),w[U+re+0]=a.x,w[U+re+1]=a.y,w[U+re+2]=a.z,w[U+re+3]=0),b===!0&&(a.fromBufferAttribute(F,X),w[U+re+4]=a.x,w[U+re+5]=a.y,w[U+re+6]=a.z,w[U+re+7]=0),M===!0&&(a.fromBufferAttribute(Q,X),w[U+re+8]=a.x,w[U+re+9]=a.y,w[U+re+10]=a.z,w[U+re+11]=Q.itemSize===4?a.w:1)}}d={count:_,texture:l,size:new Oe(T,R)},r.set(h,d),h.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let v=0;for(let b=0;b<u.length;b++)v+=u[b];let y=h.morphTargetsRelative?1:1-v;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Cf(e,t,i,r,a){let n=new WeakMap;function o(u){let f=a.render.frame,_=u.geometry,d=t.get(u,_);if(n.get(d)!==f&&(t.update(d),n.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),n.get(u)!==f&&(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&i.update(u.instanceColor,e.ARRAY_BUFFER),n.set(u,f))),u.isSkinnedMesh){let v=u.skeleton;n.get(v)!==f&&(v.update(),n.set(v,f))}return d}function h(){n=new WeakMap}function c(u){let f=u.target;f.removeEventListener("dispose",c),r.releaseStatesOfObject(f),i.remove(f.instanceMatrix),f.instanceColor!==null&&i.remove(f.instanceColor)}return{update:o,dispose:h}}var Pf={[Vl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[uo]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[jl]:"CUSTOM_TONE_MAPPING"};function If(e,t,i,r,a,n){let o=new Li(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,c=null,u=new fi;u.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Wt([0,2,0,0,2,0],2));let f=new fu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ht(u,f),d=new To(-1,1,1,-1,0,1),v=null,y=null,b=!1,M,p=null,A=[],B=!1;this.setSize=function(s,T){o.setSize(s,T),h!==null&&h.setSize(s,T),c!==null&&c.setSize(s,T);for(let R=0;R<A.length;R++){let w=A[R];w.setSize&&w.setSize(s,T)}},this.setEffects=function(s){A=s,B=A.length>0&&A[0].isRenderPass===!0;let T=o.width,R=o.height;A.length>0&&h===null&&(h=new Li(T,R,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),c=new Li(T,R,{type:Xi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){let l=A[w];l.setSize&&l.setSize(T,R)}},this.begin=function(s,T){if(b||s.toneMapping===Vi&&A.length===0)return!1;if(p=T,T!==null){let R=T.width,w=T.height;(o.width!==R||o.height!==w)&&this.setSize(R,w)}return B===!1&&s.setRenderTarget(o),M=s.toneMapping,s.toneMapping=Vi,!0},this.hasRenderPass=function(){return B},this.end=function(s,T){s.toneMapping=M,b=!0;let R=o,w=h;for(let l=0;l<A.length;l++){let g=A[l];g.enabled!==!1&&(g.render(s,w,R,T),g.needsSwap!==!1&&(R=w,w=w===h?c:h))}if(v!==s.outputColorSpace||y!==s.toneMapping){v=s.outputColorSpace,y=s.toneMapping,f.defines={},lt.getTransfer(v)===vt&&(f.defines.SRGB_TRANSFER="");let l=Pf[y];l&&(f.defines[l]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=R.texture,s.setRenderTarget(p),s.render(_,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),h!==null&&h.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}var Ph=new bi,lo=new Da(1,1),Ih=new nh,Dh=new zc,Lh=new gh,xl=[],Sl=[],El=new Float32Array(16),yl=new Float32Array(9),bl=new Float32Array(4);function ca(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=xl[a];if(n===void 0&&(n=new Float32Array(a),xl[a]=n),t!==0){r.toArray(n,0);for(let o=1,h=0;o!==t;++o)h+=i,e[o].toArray(n,h)}return n}function Xt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function jt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Dn(e,t){let i=Sl[t];i===void 0&&(i=new Int32Array(t),Sl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Df(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Lf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Xt(i,t))return;e.uniform2fv(this.addr,t),jt(i,t)}}function Uf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Xt(i,t))return;e.uniform3fv(this.addr,t),jt(i,t)}}function Nf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Xt(i,t))return;e.uniform4fv(this.addr,t),jt(i,t)}}function Ff(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Xt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),jt(i,t)}else{if(Xt(i,r))return;bl.set(r),e.uniformMatrix2fv(this.addr,!1,bl),jt(i,r)}}function Of(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Xt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),jt(i,t)}else{if(Xt(i,r))return;yl.set(r),e.uniformMatrix3fv(this.addr,!1,yl),jt(i,r)}}function Bf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Xt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),jt(i,t)}else{if(Xt(i,r))return;El.set(r),e.uniformMatrix4fv(this.addr,!1,El),jt(i,r)}}function zf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Xt(i,t))return;e.uniform2iv(this.addr,t),jt(i,t)}}function Gf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Xt(i,t))return;e.uniform3iv(this.addr,t),jt(i,t)}}function kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Xt(i,t))return;e.uniform4iv(this.addr,t),jt(i,t)}}function Vf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Wf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Xt(i,t))return;e.uniform2uiv(this.addr,t),jt(i,t)}}function Xf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Xt(i,t))return;e.uniform3uiv(this.addr,t),jt(i,t)}}function jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Xt(i,t))return;e.uniform4uiv(this.addr,t),jt(i,t)}}function Yf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(lo.compareFunction=i.isReversedDepthBuffer()?xo:Mo,n=lo):n=Ph,i.setTexture2D(t||n,a)}function qf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Dh,a)}function Kf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Lh,a)}function Zf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Ih,a)}function Jf(e){switch(e){case 5126:return Df;case 35664:return Lf;case 35665:return Uf;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return Hf;case 35668:case 35672:return Gf;case 35669:case 35673:return kf;case 5125:return Vf;case 36294:return Wf;case 36295:return Xf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Zf}}function $f(e,t){e.uniform1fv(this.addr,t)}function Qf(e,t){let i=ca(t,this.size,2);e.uniform2fv(this.addr,i)}function em(e,t){let i=ca(t,this.size,3);e.uniform3fv(this.addr,i)}function tm(e,t){let i=ca(t,this.size,4);e.uniform4fv(this.addr,i)}function im(e,t){let i=ca(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function rm(e,t){let i=ca(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function am(e,t){let i=ca(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function nm(e,t){e.uniform1iv(this.addr,t)}function sm(e,t){e.uniform2iv(this.addr,t)}function om(e,t){e.uniform3iv(this.addr,t)}function lm(e,t){e.uniform4iv(this.addr,t)}function hm(e,t){e.uniform1uiv(this.addr,t)}function cm(e,t){e.uniform2uiv(this.addr,t)}function um(e,t){e.uniform3uiv(this.addr,t)}function dm(e,t){e.uniform4uiv(this.addr,t)}function pm(e,t,i){let r=this.cache,a=t.length,n=Dn(i,a);Xt(r,n)||(e.uniform1iv(this.addr,n),jt(r,n));let o;this.type===e.SAMPLER_2D_SHADOW?o=lo:o=Ph;for(let h=0;h!==a;++h)i.setTexture2D(t[h]||o,n[h])}function fm(e,t,i){let r=this.cache,a=t.length,n=Dn(i,a);Xt(r,n)||(e.uniform1iv(this.addr,n),jt(r,n));for(let o=0;o!==a;++o)i.setTexture3D(t[o]||Dh,n[o])}function mm(e,t,i){let r=this.cache,a=t.length,n=Dn(i,a);Xt(r,n)||(e.uniform1iv(this.addr,n),jt(r,n));for(let o=0;o!==a;++o)i.setTextureCube(t[o]||Lh,n[o])}function gm(e,t,i){let r=this.cache,a=t.length,n=Dn(i,a);Xt(r,n)||(e.uniform1iv(this.addr,n),jt(r,n));for(let o=0;o!==a;++o)i.setTexture2DArray(t[o]||Ih,n[o])}function _m(e){switch(e){case 5126:return $f;case 35664:return Qf;case 35665:return em;case 35666:return tm;case 35674:return im;case 35675:return rm;case 35676:return am;case 5124:case 35670:return nm;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return hm;case 36294:return cm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}var vm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jf(t.type)}},Mm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}},xm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let o=r[a];o.setValue(e,t[o.id],i)}}},fs=/(\w+)(\])?(\[|\.)?/g;function Tl(e,t){e.seq.push(t),e.map[t.id]=t}function Sm(e,t,i){let r=e.name,a=r.length;for(fs.lastIndex=0;;){let n=fs.exec(r),o=fs.lastIndex,h=n[1],c=n[2]==="]",u=n[3];if(c&&(h=h|0),u===void 0||u==="["&&o+2===a){Tl(i,u===void 0?new vm(h,e,t):new Mm(h,e,t));break}else{let f=i.map[h];f===void 0&&(f=new xm(h),Tl(i,f)),i=f}}}var Mn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let o=e.getActiveUniform(t,n),h=e.getUniformLocation(t,o.name);Sm(o,h,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let o=t[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function wl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Em=37297,ym=0;function bm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let o=a;o<n;o++){let h=o+1;r.push(`${h===t?">":" "} ${h}: ${i[o]}`)}return r.join(`
`)}var Rl=new $e;function Tm(e){lt._getMatrix(Rl,lt.workingColorSpace,e);let t=`mat3( ${Rl.elements.map(i=>i.toFixed(4))} )`;switch(lt.getTransfer(e)){case yn:return[t,"LinearTransferOETF"];case vt:return[t,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Al(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let o=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+bm(e.getShaderSource(t),o)}else return a}function wm(e,t){let i=Tm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Rm={[Vl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[uo]:"ACESFilmic",[Yl]:"AgX",[ql]:"Neutral",[jl]:"Custom"};function Am(e,t){let i=Rm[t];return i===void 0?(ke("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var cn=new O;function Cm(){lt.getLuminanceCoefficients(cn);let e=cn.x.toFixed(4),t=cn.y.toFixed(4),i=cn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function Im(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Dm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),o=n.name,h=1;n.type===e.FLOAT_MAT2&&(h=2),n.type===e.FLOAT_MAT3&&(h=3),n.type===e.FLOAT_MAT4&&(h=4),i[o]={type:n.type,location:e.getAttribLocation(t,o),locationSize:h}}return i}function Ta(e){return e!==""}function Cl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(e){return e.replace(Lm,Nm)}var Um=new Map;function Nm(e,t){let i=et[t];if(i===void 0){let r=Um.get(t);if(r!==void 0)i=et[r],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ho(i)}var Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(e){return e.replace(Fm,Om)}function Om(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Dl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Bm={[wa]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function zm(e){return Bm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hm={[wr]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[Cn]:"ENVMAP_TYPE_CUBE_UV"};function Gm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Hm[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var km={[sa]:"ENVMAP_MODE_REFRACTION"};function Vm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":km[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wm={[kl]:"ENVMAP_BLENDING_MULTIPLY",[gc]:"ENVMAP_BLENDING_MIX",[_c]:"ENVMAP_BLENDING_ADD"};function Xm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Wm[e.combine]||"ENVMAP_BLENDING_NONE"}function jm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Ym(e,t,i,r){let a=e.getContext(),n=i.defines,o=i.vertexShader,h=i.fragmentShader,c=zm(i),u=Gm(i),f=Vm(i),_=Xm(i),d=jm(i),v=Pm(i),y=Im(n),b=a.createProgram(),M,p,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Ta).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(M=[Dl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[Dl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",i.envMap?"#define "+_:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?et.tonemapping_pars_fragment:"",i.toneMapping!==Vi?Am("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,wm("linearToOutputTexel",i.outputColorSpace),Cm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ta).join(`
`)),o=ho(o),o=Cl(o,i),o=Pl(o,i),h=ho(h),h=Cl(h,i),h=Pl(h,i),o=Il(o),h=Il(h),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",i.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=A+M+o,s=A+p+h,T=wl(a,a.VERTEX_SHADER,B),R=wl(a,a.FRAGMENT_SHADER,s);a.attachShader(b,T),a.attachShader(b,R),i.index0AttributeName!==void 0?a.bindAttribLocation(b,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function w(L){if(e.debug.checkShaderErrors){let F=a.getProgramInfoLog(b)||"",Q=a.getShaderInfoLog(T)||"",U=a.getShaderInfoLog(R)||"",X=F.trim(),re=Q.trim(),q=U.trim(),pe=!0,$=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(pe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,b,T,R);else{let ee=Al(a,T,"vertex"),ie=Al(a,R,"fragment");ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ee+`
`+ie)}else X!==""?ke("WebGLProgram: Program Info Log:",X):(re===""||q==="")&&($=!1);$&&(L.diagnostics={runnable:pe,programLog:X,vertexShader:{log:re,prefix:M},fragmentShader:{log:q,prefix:p}})}a.deleteShader(T),a.deleteShader(R),l=new Mn(a,b),g=Dm(a,b)}let l;this.getUniforms=function(){return l===void 0&&w(this),l};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(b,Em)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ym++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=R,this}var qm=0,Km=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zm(e),t.set(e,i)),i}},Zm=class{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}};function Jm(e){return e===Rr||e===xn||e===Sn}function $m(e,t,i,r,a,n){let o=new Eo,h=new Km,c=new Set,u=[],f=new Map,_=r.logarithmicDepthBuffer,d=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(l){return c.add(l),l===0?"uv":`uv${l}`}function b(l,g,Y,L,F,Q){let U=L.fog,X=F.geometry,re=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?L.environment:null,q=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,pe=t.get(l.envMap||re,q),$=pe&&pe.mapping===Cn?pe.image.height:null,ee=v[l.type];l.precision!==null&&(d=r.getMaxPrecision(l.precision),d!==l.precision&&ke("WebGLProgram.getParameters:",l.precision,"not supported, using",d,"instead."));let ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ze=ie!==void 0?ie.length:0,Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let St,qe,J,oe;if(ee){let be=zi[ee];St=be.vertexShader,qe=be.fragmentShader}else{St=l.vertexShader,qe=l.fragmentShader;let be=h.getVertexShaderStage(l),ue=h.getFragmentShaderStage(l);h.update(l,be,ue),J=be.id,oe=ue.id}let ce=e.getRenderTarget(),Le=e.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,at=!!l.map,dt=!!l.matcap,Xe=!!pe,ft=!!l.aoMap,Yt=!!l.lightMap,ri=!!l.bumpMap&&l.wireframe===!1,mt=!!l.normalMap,Nt=!!l.displacementMap,Pt=!!l.emissiveMap,It=!!l.metalnessMap,I=!!l.roughnessMap,Ft=l.anisotropy>0,ot=l.clearcoat>0,Et=l.dispersion>0,E=l.retroreflectivity>0,x=l.iridescence>0,P=l.sheen>0,K=l.transmission>0,ae=Ft&&!!l.anisotropyMap,de=ot&&!!l.clearcoatMap,ve=ot&&!!l.clearcoatNormalMap,N=ot&&!!l.clearcoatRoughnessMap,he=x&&!!l.iridescenceMap,ge=x&&!!l.iridescenceThicknessMap,we=P&&!!l.sheenColorMap,ne=P&&!!l.sheenRoughnessMap,Pe=!!l.specularMap,Ue=!!l.specularColorMap,Re=!!l.specularIntensityMap,pt=K&&!!l.transmissionMap,D=K&&!!l.thicknessMap,te=!!l.gradientMap,m=!!l.alphaMap,k=l.alphaTest>0,G=!!l.alphaHash,z=!!l.extensions,Z=Vi;l.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Z=e.toneMapping);let V={shaderID:ee,shaderType:l.type,shaderName:l.name,vertexShader:St,fragmentShader:qe,defines:l.defines,customVertexShaderID:J,customFragmentShaderID:oe,isRawShaderMaterial:l.isRawShaderMaterial===!0,glslVersion:l.glslVersion,precision:d,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,outputColorSpace:ce===null?e.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!l.alphaToCoverage,map:at,matcap:dt,envMap:Xe,envMapMode:Xe&&pe.mapping,envMapCubeUVHeight:$,aoMap:ft,lightMap:Yt,bumpMap:ri,normalMap:mt,displacementMap:Nt,emissiveMap:Pt,normalMapObjectSpace:mt&&l.normalMapType===xc,normalMapTangentSpace:mt&&l.normalMapType===ro,packedNormalMap:mt&&l.normalMapType===ro&&Jm(l.normalMap.format),metalnessMap:It,roughnessMap:I,anisotropy:Ft,anisotropyMap:ae,clearcoat:ot,clearcoatMap:de,clearcoatNormalMap:ve,clearcoatRoughnessMap:N,dispersion:Et,retroreflection:E,iridescence:x,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:P,sheenColorMap:we,sheenRoughnessMap:ne,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:Re,transmission:K,transmissionMap:pt,thicknessMap:D,gradientMap:te,opaque:l.transparent===!1&&l.blending===Ra&&l.alphaToCoverage===!1,alphaMap:m,alphaTest:k,alphaHash:G,combine:l.combine,mapUv:at&&y(l.map.channel),aoMapUv:ft&&y(l.aoMap.channel),lightMapUv:Yt&&y(l.lightMap.channel),bumpMapUv:ri&&y(l.bumpMap.channel),normalMapUv:mt&&y(l.normalMap.channel),displacementMapUv:Nt&&y(l.displacementMap.channel),emissiveMapUv:Pt&&y(l.emissiveMap.channel),metalnessMapUv:It&&y(l.metalnessMap.channel),roughnessMapUv:I&&y(l.roughnessMap.channel),anisotropyMapUv:ae&&y(l.anisotropyMap.channel),clearcoatMapUv:de&&y(l.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(l.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&y(l.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(l.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&y(l.iridescenceThicknessMap.channel),sheenColorMapUv:we&&y(l.sheenColorMap.channel),sheenRoughnessMapUv:ne&&y(l.sheenRoughnessMap.channel),specularMapUv:Pe&&y(l.specularMap.channel),specularColorMapUv:Ue&&y(l.specularColorMap.channel),specularIntensityMapUv:Re&&y(l.specularIntensityMap.channel),transmissionMapUv:pt&&y(l.transmissionMap.channel),thicknessMapUv:D&&y(l.thicknessMap.channel),alphaMapUv:m&&y(l.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(mt||Ft),vertexNormals:!!X.attributes.normal,vertexColors:l.vertexColors,vertexAlphas:l.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(at||m),fog:!!U,useFog:l.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:l.wireframe===!1&&(l.flatShading===!0||X.attributes.normal===void 0&&mt===!1&&(l.isMeshLambertMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isMeshPhysicalMaterial)),sizeAttenuation:l.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:Ie,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:l.dithering,shadowMapEnabled:e.shadowMap.enabled&&Y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Z,decodeVideoTexture:at&&l.map.isVideoTexture===!0&&lt.getTransfer(l.map.colorSpace)===vt,decodeVideoTextureEmissive:Pt&&l.emissiveMap.isVideoTexture===!0&&lt.getTransfer(l.emissiveMap.colorSpace)===vt,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===bt,flipSided:l.side===pi,useDepthPacking:l.depthPacking>=0,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionClipCullDistance:z&&l.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&l.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:l.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function M(l){let g=[];if(l.shaderID?g.push(l.shaderID):(g.push(l.customVertexShaderID),g.push(l.customFragmentShaderID)),l.defines!==void 0)for(let Y in l.defines)g.push(Y),g.push(l.defines[Y]);return l.isRawShaderMaterial===!1&&(p(g,l),A(g,l),g.push(e.outputColorSpace)),g.push(l.customProgramCacheKey),g.join()}function p(l,g){l.push(g.precision),l.push(g.outputColorSpace),l.push(g.envMapMode),l.push(g.envMapCubeUVHeight),l.push(g.mapUv),l.push(g.alphaMapUv),l.push(g.lightMapUv),l.push(g.aoMapUv),l.push(g.bumpMapUv),l.push(g.normalMapUv),l.push(g.displacementMapUv),l.push(g.emissiveMapUv),l.push(g.metalnessMapUv),l.push(g.roughnessMapUv),l.push(g.anisotropyMapUv),l.push(g.clearcoatMapUv),l.push(g.clearcoatNormalMapUv),l.push(g.clearcoatRoughnessMapUv),l.push(g.iridescenceMapUv),l.push(g.iridescenceThicknessMapUv),l.push(g.sheenColorMapUv),l.push(g.sheenRoughnessMapUv),l.push(g.specularMapUv),l.push(g.specularColorMapUv),l.push(g.specularIntensityMapUv),l.push(g.transmissionMapUv),l.push(g.thicknessMapUv),l.push(g.combine),l.push(g.fogExp2),l.push(g.sizeAttenuation),l.push(g.morphTargetsCount),l.push(g.morphAttributeCount),l.push(g.numSunLights),l.push(g.numDirLights),l.push(g.numPointLights),l.push(g.numSpotLights),l.push(g.numSpotLightMaps),l.push(g.numHemiLights),l.push(g.numRectAreaLights),l.push(g.numSunLightShadows),l.push(g.numDirLightShadows),l.push(g.numPointLightShadows),l.push(g.numSpotLightShadows),l.push(g.numSpotLightShadowsWithMaps),l.push(g.numLightProbes),l.push(g.shadowMapType),l.push(g.toneMapping),l.push(g.numClippingPlanes),l.push(g.numClipIntersection),l.push(g.depthPacking)}function A(l,g){o.disableAll(),g.instancing&&o.enable(0),g.instancingColor&&o.enable(1),g.instancingMorph&&o.enable(2),g.matcap&&o.enable(3),g.envMap&&o.enable(4),g.normalMapObjectSpace&&o.enable(5),g.normalMapTangentSpace&&o.enable(6),g.clearcoat&&o.enable(7),g.iridescence&&o.enable(8),g.alphaTest&&o.enable(9),g.vertexColors&&o.enable(10),g.vertexAlphas&&o.enable(11),g.vertexUv1s&&o.enable(12),g.vertexUv2s&&o.enable(13),g.vertexUv3s&&o.enable(14),g.vertexTangents&&o.enable(15),g.anisotropy&&o.enable(16),g.alphaHash&&o.enable(17),g.batching&&o.enable(18),g.dispersion&&o.enable(19),g.retroreflection&&o.enable(24),g.batchingColor&&o.enable(20),g.gradientMap&&o.enable(21),g.packedNormalMap&&o.enable(22),g.vertexNormals&&o.enable(23),l.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),g.numLightProbeGrids>0&&o.enable(22),g.hasPositionAttribute&&o.enable(23),l.push(o.mask)}function B(l){let g=v[l.type],Y;if(g){let L=zi[g];Y=uu.clone(L.uniforms)}else Y=l.uniforms;return Y}function s(l,g){let Y=f.get(g);return Y!==void 0?++Y.usedTimes:(Y=new Ym(e,g,l,a),u.push(Y),f.set(g,Y)),Y}function T(l){if(--l.usedTimes===0){let g=u.indexOf(l);u[g]=u[u.length-1],u.pop(),f.delete(l.cacheKey),l.destroy()}}function R(l){h.remove(l)}function w(){h.dispose()}return{getParameters:b,getProgramCacheKey:M,getUniforms:B,acquireProgram:s,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:w}}function Qm(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let h=e.get(o);return h===void 0&&(h={},e.set(o,h)),h}function r(o){e.delete(o)}function a(o,h,c){e.get(o)[h]=c}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function eg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ll(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ul(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function o(d){let v=0;return d.isInstancedMesh&&(v+=2),d.isSkinnedMesh&&(v+=1),v}function h(d,v,y,b,M,p){let A=e[t];return A===void 0?(A={id:d.id,object:d,geometry:v,material:y,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:M,group:p},e[t]=A):(A.id=d.id,A.object=d,A.geometry=v,A.material=y,A.materialVariant=o(d),A.groupOrder=b,A.renderOrder=d.renderOrder,A.z=M,A.group=p),t++,A}function c(d,v,y,b,M,p,A){A.reversedDepth===!0&&(M=-M);let B=h(d,v,y,b,M,p);y.transmission>0?r.push(B):y.transparent===!0?a.push(B):i.push(B)}function u(d,v,y,b,M,p){let A=h(d,v,y,b,M,p);y.transmission>0?r.unshift(A):y.transparent===!0?a.unshift(A):i.unshift(A)}function f(d,v){i.length>1&&i.sort(d||eg),r.length>1&&r.sort(v||Ll),a.length>1&&a.sort(v||Ll)}function _(){for(let d=t,v=e.length;d<v;d++){let y=e[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:c,unshift:u,finish:_,sort:f}}function tg(){let e=new WeakMap;function t(r,a){let n=e.get(r),o;return n===void 0?(o=new Ul,e.set(r,[o])):a>=n.length?(o=new Ul,n.push(o)):o=n[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function ig(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new O,color:new Ke};break;case"SpotLight":i={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":i={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=i,i}}}function rg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var ag=0;function ng(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function sg(e){let t=new ig,i=rg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);let a=new O,n=new At,o=new At;function h(u){let f=0,_=0,d=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let v=0,y=0,b=0,M=0,p=0,A=0,B=0,s=0,T=0,R=0,w=0,l=0,g=0,Y=0;u.sort(ng);for(let F=0,Q=u.length;F<Q;F++){let U=u[F],X=U.color,re=U.intensity,q=U.distance,pe=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Rr?pe=U.shadow.map.texture:pe=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=X.r*re,_+=X.g*re,d+=X.b*re;else if(U.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(U.sh.coefficients[$],re);Y++}else if(U.isSunLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ee=U.shadow,ie=i.get(U);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[y]=ie,r.sunShadowMap[y]=pe;let Ze=ee.getViewportCount();for(let Ie=0;Ie<Ze;Ie++)r.sunShadowMatrix[b+Ie]=ee.getMatrix(Ie),r.sunShadowCascade[b+Ie]=ee._cascadeData[Ie];b+=Ze,y++}r.sun[v]=$,v++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ee=U.shadow,ie=i.get(U);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,r.directionalShadow[M]=ie,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=U.shadow.matrix,T++}r.directional[M]=$,M++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(X).multiplyScalar(re),$.distance=q,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,r.spot[A]=$;let ee=U.shadow;if(U.map&&(r.spotLightMap[l]=U.map,l++,ee.updateMatrices(U),U.castShadow&&g++),r.spotLightMatrix[A]=ee.matrix,U.castShadow){let ie=i.get(U);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,r.spotShadow[A]=ie,r.spotShadowMap[A]=pe,w++}A++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(X).multiplyScalar(re),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),r.rectArea[B]=$,B++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let ee=U.shadow,ie=i.get(U);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=pe,r.pointShadowMatrix[p]=U.shadow.matrix,R++}r.point[p]=$,p++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(re),$.groundColor.copy(U.groundColor).multiplyScalar(re),r.hemi[s]=$,s++}}B>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=d;let L=r.hash;(L.sunLength!==v||L.directionalLength!==M||L.pointLength!==p||L.spotLength!==A||L.rectAreaLength!==B||L.hemiLength!==s||L.numSunShadows!==y||L.numDirectionalShadows!==T||L.numPointShadows!==R||L.numSpotShadows!==w||L.numSpotMaps!==l||L.numLightProbes!==Y)&&(r.sun.length=v,r.directional.length=M,r.spot.length=A,r.rectArea.length=B,r.point.length=p,r.hemi.length=s,r.sunShadow.length=y,r.sunShadowMap.length=y,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+l-g,r.spotLightMap.length=l,r.numSpotLightShadowsWithMaps=g,r.numLightProbes=Y,L.sunLength=v,L.directionalLength=M,L.pointLength=p,L.spotLength=A,L.rectAreaLength=B,L.hemiLength=s,L.numSunShadows=y,L.numDirectionalShadows=T,L.numPointShadows=R,L.numSpotShadows=w,L.numSpotMaps=l,L.numLightProbes=Y,r.version=ag++)}function c(u,f){let _=0,d=0,v=0,y=0,b=0,M=0,p=f.matrixWorldInverse;for(let A=0,B=u.length;A<B;A++){let s=u[A];if(s.isSunLight){let T=r.sun[_];T.direction.setFromMatrixPosition(s.matrixWorld),T.direction.transformDirection(p),_++}else if(s.isDirectionalLight){let T=r.directional[d];T.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),d++}else if(s.isSpotLight){let T=r.spot[y];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),y++}else if(s.isRectAreaLight){let T=r.rectArea[b];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(p),o.identity(),n.copy(s.matrixWorld),n.premultiply(p),o.extractRotation(n),T.halfWidth.set(s.width*.5,0,0),T.halfHeight.set(0,s.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),b++}else if(s.isPointLight){let T=r.point[v];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(p),v++}else if(s.isHemisphereLight){let T=r.hemi[M];T.direction.setFromMatrixPosition(s.matrixWorld),T.direction.transformDirection(p),M++}}}return{setup:h,setupView:c,state:r}}function Nl(e){let t=new sg(e),i=[],r=[],a=[];function n(d){_.camera=d,i.length=0,r.length=0,a.length=0}function o(d){i.push(d)}function h(d){r.push(d)}function c(d){a.push(d)}function u(){t.setup(i)}function f(d){t.setupView(i,d)}let _={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:_,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:h,pushLightProbeGrid:c}}function og(e){let t=new WeakMap;function i(a,n=0){let o=t.get(a),h;return o===void 0?(h=new Nl(e),t.set(a,[h])):n>=o.length?(h=new Nl(e),o.push(h)):h=o[n],h}function r(){t=new WeakMap}return{get:i,dispose:r}}var lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`,cg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ug=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Fl=new At,ya=new O,ms=new O;function dg(e,t,i){let r=new yo,a=new Oe,n=new Oe,o=new Ut,h=new gu,c=new _u,u={},f=i.maxTextureSize,_={[Tr]:pi,[pi]:Tr,[bt]:bt},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:lg,fragmentShader:hg}),v=d.clone();v.defines.HORIZONTAL_PASS=1;let y=new fi;y.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ht(y,d),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(R,w,l){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||R.length===0)return;this.type===Jh&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);let g=e.getRenderTarget(),Y=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),F=e.state;F.setBlending(rr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Q=p!==this.type;Q&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(X=>X.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,X=R.length;U<X;U++){let re=R[U],q=re.shadow;if(q===void 0){ke("WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);let pe=q.getFrameExtents();a.multiply(pe),n.copy(q.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(n.x=Math.floor(f/pe.x),a.x=n.x*pe.x,q.mapSize.x=n.x),a.y>f&&(n.y=Math.floor(f/pe.y),a.y=n.y*pe.y,q.mapSize.y=n.y));let $=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ba){if(re.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Li(a.x,a.y,{format:Rr,type:Xi,minFilter:ii,magFilter:ii,generateMipmaps:!1}),q.map.texture.name=re.name+".shadowMap",q.map.depthTexture=new Da(a.x,a.y,Gi),q.map.depthTexture.name=re.name+".shadowMapDepth",q.map.depthTexture.format=nr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ti,q.map.depthTexture.magFilter=ti}else re.isPointLight?(q.map=new Ch(a.x),q.map.depthTexture=new lu(a.x,Wi)):(q.map=new Li(a.x,a.y),q.map.depthTexture=new Da(a.x,a.y,Wi)),q.map.depthTexture.name=re.name+".shadowMap",q.map.depthTexture.format=nr,this.type===wa?(q.map.depthTexture.compareFunction=$?xo:Mo,q.map.depthTexture.minFilter=ii,q.map.depthTexture.magFilter=ii):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ti,q.map.depthTexture.magFilter=ti);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);let ee=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();re.isPointLight!==!0&&q.updateMatrices(re,l);for(let ie=0;ie<ee;ie++){let Ze=q.getCamera(ie);if(re.isPointLight){let Ie=q.camera,St=q.matrix,qe=re.distance||Ie.far;qe!==Ie.far&&(Ie.far=qe,Ie.updateProjectionMatrix()),ya.setFromMatrixPosition(re.matrixWorld),Ie.position.copy(ya),ms.copy(Ie.position),ms.add(cg[ie]),Ie.up.copy(ug[ie]),Ie.lookAt(ms),Ie.updateMatrixWorld(),St.makeTranslation(-ya.x,-ya.y,-ya.z),Fl.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Fl,Ie.coordinateSystem,Ie.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,ie),e.clear();else{ie===0&&(e.setRenderTarget(q.map),e.clear());let Ie=q.getViewport(ie);o.set(n.x*Ie.x,n.y*Ie.y,n.x*Ie.z,n.y*Ie.w),F.viewport(o)}r=q.getFrustum(ie),s(w,l,Ze,re,this.type)}q.isPointLightShadow!==!0&&this.type===ba&&A(q,l),q.needsUpdate=!1}p=this.type,M.needsUpdate=!1,e.setRenderTarget(g,Y,L)};function A(R,w){let l=t.update(b);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null?R.mapPass=new Li(a.x,a.y,{format:Rr,type:Xi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,l,d,b,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value.set(R.map.width,R.map.height),v.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,l,v,b,null)}function B(R,w,l,g){let Y=null,L=l.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)Y=L;else if(Y=l.isPointLight===!0?c:h,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=Y.uuid,Q=w.uuid,U=u[F];U===void 0&&(U={},u[F]=U);let X=U[Q];X===void 0&&(X=Y.clone(),U[Q]=X,w.addEventListener("dispose",T)),Y=X}if(Y.visible=w.visible,Y.wireframe=w.wireframe,g===ba?Y.side=w.shadowSide!==null?w.shadowSide:w.side:Y.side=w.shadowSide!==null?w.shadowSide:_[w.side],Y.alphaMap=w.alphaMap,Y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,Y.map=w.map,Y.clipShadows=w.clipShadows,Y.clippingPlanes=w.clippingPlanes,Y.clipIntersection=w.clipIntersection,Y.displacementMap=w.displacementMap,Y.displacementScale=w.displacementScale,Y.displacementBias=w.displacementBias,Y.wireframeLinewidth=w.wireframeLinewidth,Y.linewidth=w.linewidth,l.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){let F=e.properties.get(Y);F.light=l}return Y}function s(R,w,l,g,Y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&Y===ba)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,R.matrixWorld);let F=t.update(R),Q=R.material;if(Array.isArray(Q)){let U=F.groups;for(let X=0,re=U.length;X<re;X++){let q=U[X],pe=Q[q.materialIndex];if(pe&&pe.visible){let $=B(R,pe,g,Y);R.onBeforeShadow(e,R,w,l,F,$,q),e.renderBufferDirect(l,null,F,$,R,q),R.onAfterShadow(e,R,w,l,F,$,q)}}}else if(Q.visible){let U=B(R,Q,g,Y);R.onBeforeShadow(e,R,w,l,F,U,null),e.renderBufferDirect(l,null,F,U,R,null),R.onAfterShadow(e,R,w,l,F,U,null)}}let L=R.children;for(let F=0,Q=L.length;F<Q;F++)s(L[F],w,l,g,Y)}function T(R){R.target.removeEventListener("dispose",T);for(let w in u){let l=u[w],g=R.target.uuid;g in l&&(l[g].dispose(),delete l[g])}}}function pg(e,t){function i(){let D=!1,te=new Ut,m=null,k=new Ut(0,0,0,0);return{setMask:function(G){m!==G&&!D&&(e.colorMask(G,G,G,G),m=G)},setLocked:function(G){D=G},setClear:function(G,z,Z,V,be){be===!0&&(G*=V,z*=V,Z*=V),te.set(G,z,Z,V),k.equals(te)===!1&&(e.clearColor(G,z,Z,V),k.copy(te))},reset:function(){D=!1,m=null,k.set(-1,0,0,0)}}}function r(){let D=!1,te=!1,m=null,k=null,G=null;return{setReversed:function(z){if(te!==z){let Z=t.get("EXT_clip_control");z?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),te=z;let V=G;G=null,this.setClear(V)}},getReversed:function(){return te},setTest:function(z){z?ce(e.DEPTH_TEST):Le(e.DEPTH_TEST)},setMask:function(z){m!==z&&!D&&(e.depthMask(z),m=z)},setFunc:function(z){if(te&&(z=Ic[z]),k!==z){switch(z){case vs:e.depthFunc(e.NEVER);break;case Ms:e.depthFunc(e.ALWAYS);break;case xs:e.depthFunc(e.LESS);break;case Aa:e.depthFunc(e.LEQUAL);break;case Ss:e.depthFunc(e.EQUAL);break;case Es:e.depthFunc(e.GEQUAL);break;case ys:e.depthFunc(e.GREATER);break;case bs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}k=z}},setLocked:function(z){D=z},setClear:function(z){G!==z&&(G=z,te&&(z=1-z),e.clearDepth(z))},reset:function(){D=!1,m=null,k=null,G=null,te=!1}}}function a(){let D=!1,te=null,m=null,k=null,G=null,z=null,Z=null,V=null,be=null;return{setTest:function(ue){D||(ue?ce(e.STENCIL_TEST):Le(e.STENCIL_TEST))},setMask:function(ue){te!==ue&&!D&&(e.stencilMask(ue),te=ue)},setFunc:function(ue,ye,Fe){(m!==ue||k!==ye||G!==Fe)&&(e.stencilFunc(ue,ye,Fe),m=ue,k=ye,G=Fe)},setOp:function(ue,ye,Fe){(z!==ue||Z!==ye||V!==Fe)&&(e.stencilOp(ue,ye,Fe),z=ue,Z=ye,V=Fe)},setLocked:function(ue){D=ue},setClear:function(ue){be!==ue&&(e.clearStencil(ue),be=ue)},reset:function(){D=!1,te=null,m=null,k=null,G=null,z=null,Z=null,V=null,be=null}}}let n=new i,o=new r,h=new a,c=new WeakMap,u=new WeakMap,f={},_={},d={},v=new WeakMap,y=[],b=null,M=!1,p=null,A=null,B=null,s=null,T=null,R=null,w=null,l=new Ke(0,0,0),g=0,Y=!1,L=null,F=null,Q=null,U=null,X=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,pe=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec($)[1]),q=pe>=1):$.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=pe>=2);let ee=null,ie={},Ze=e.getParameter(e.SCISSOR_BOX),Ie=e.getParameter(e.VIEWPORT),St=new Ut().fromArray(Ze),qe=new Ut().fromArray(Ie);function J(D,te,m,k){let G=new Uint8Array(4),z=e.createTexture();e.bindTexture(D,z),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Z=0;Z<m;Z++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,k,0,e.RGBA,e.UNSIGNED_BYTE,G):e.texImage2D(te+Z,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,G);return z}let oe={};oe[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),o.setClear(1),h.setClear(0),ce(e.DEPTH_TEST),o.setFunc(Aa),ri(!1),mt(Po),ce(e.CULL_FACE),ft(rr);function ce(D){f[D]!==!0&&(e.enable(D),f[D]=!0)}function Le(D){f[D]!==!1&&(e.disable(D),f[D]=!1)}function ze(D,te){return d[D]!==te?(e.bindFramebuffer(D,te),d[D]=te,D===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=te),D===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=te),!0):!1}function xe(D,te){let m=y,k=!1;if(D){m=v.get(te),m===void 0&&(m=[],v.set(te,m));let G=D.textures;if(m.length!==G.length||m[0]!==e.COLOR_ATTACHMENT0){for(let z=0,Z=G.length;z<Z;z++)m[z]=e.COLOR_ATTACHMENT0+z;m.length=G.length,k=!0}}else m[0]!==e.BACK&&(m[0]=e.BACK,k=!0);k&&e.drawBuffers(m)}function at(D){return b!==D?(e.useProgram(D),b=D,!0):!1}let dt={[Yr]:e.FUNC_ADD,[Qh]:e.FUNC_SUBTRACT,[ec]:e.FUNC_REVERSE_SUBTRACT};dt[tc]=e.MIN,dt[ic]=e.MAX;let Xe={[rc]:e.ZERO,[ac]:e.ONE,[nc]:e.SRC_COLOR,[Hl]:e.SRC_ALPHA,[uc]:e.SRC_ALPHA_SATURATE,[hc]:e.DST_COLOR,[oc]:e.DST_ALPHA,[sc]:e.ONE_MINUS_SRC_COLOR,[Gl]:e.ONE_MINUS_SRC_ALPHA,[cc]:e.ONE_MINUS_DST_COLOR,[lc]:e.ONE_MINUS_DST_ALPHA,[dc]:e.CONSTANT_COLOR,[pc]:e.ONE_MINUS_CONSTANT_COLOR,[fc]:e.CONSTANT_ALPHA,[mc]:e.ONE_MINUS_CONSTANT_ALPHA};function ft(D,te,m,k,G,z,Z,V,be,ue){if(D===rr){M===!0&&(Le(e.BLEND),M=!1);return}if(M===!1&&(ce(e.BLEND),M=!0),D!==$h){if(D!==p||ue!==Y){if((A!==Yr||T!==Yr)&&(e.blendEquation(e.FUNC_ADD),A=Yr,T=Yr),ue)switch(D){case Ra:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case _s:e.blendFunc(e.ONE,e.ONE);break;case Io:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Do:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ut("WebGLState: Invalid blending: ",D);break}else switch(D){case Ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case _s:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Io:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Do:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",D);break}B=null,s=null,R=null,w=null,l.set(0,0,0),g=0,p=D,Y=ue}return}G=G||te,z=z||m,Z=Z||k,(te!==A||G!==T)&&(e.blendEquationSeparate(dt[te],dt[G]),A=te,T=G),(m!==B||k!==s||z!==R||Z!==w)&&(e.blendFuncSeparate(Xe[m],Xe[k],Xe[z],Xe[Z]),B=m,s=k,R=z,w=Z),(V.equals(l)===!1||be!==g)&&(e.blendColor(V.r,V.g,V.b,be),l.copy(V),g=be),p=D,Y=!1}function Yt(D,te){D.side===bt?Le(e.CULL_FACE):ce(e.CULL_FACE);let m=D.side===pi;te&&(m=!m),ri(m),D.blending===Ra&&D.transparent===!1?ft(rr):ft(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),n.setMask(D.colorWrite);let k=D.stencilWrite;h.setTest(k),k&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):Le(e.SAMPLE_ALPHA_TO_COVERAGE)}function ri(D){L!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),L=D)}function mt(D){D!==Kh?(ce(e.CULL_FACE),D!==F&&(D===Po?e.cullFace(e.BACK):D===Zh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Le(e.CULL_FACE),F=D}function Nt(D){D!==Q&&(q&&e.lineWidth(D),Q=D)}function Pt(D,te,m){D?(ce(e.POLYGON_OFFSET_FILL),(U!==te||X!==m)&&(U=te,X=m,o.getReversed()&&(te=-te),e.polygonOffset(te,m))):Le(e.POLYGON_OFFSET_FILL)}function It(D){D?ce(e.SCISSOR_TEST):Le(e.SCISSOR_TEST)}function I(D){D===void 0&&(D=e.TEXTURE0+re-1),ee!==D&&(e.activeTexture(D),ee=D)}function Ft(D,te,m){m===void 0&&(ee===null?m=e.TEXTURE0+re-1:m=ee);let k=ie[m];k===void 0&&(k={type:void 0,texture:void 0},ie[m]=k),(k.type!==D||k.texture!==te)&&(ee!==m&&(e.activeTexture(m),ee=m),e.bindTexture(D,te||oe[D]),k.type=D,k.texture=te)}function ot(){let D=ie[ee];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Et(){try{e.compressedTexImage2D(...arguments)}catch(D){ut("WebGLState:",D)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(D){ut("WebGLState:",D)}}function x(){try{e.texSubImage2D(...arguments)}catch(D){ut("WebGLState:",D)}}function P(){try{e.texSubImage3D(...arguments)}catch(D){ut("WebGLState:",D)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(D){ut("WebGLState:",D)}}function ae(){try{e.compressedTexSubImage3D(...arguments)}catch(D){ut("WebGLState:",D)}}function de(){try{e.texStorage2D(...arguments)}catch(D){ut("WebGLState:",D)}}function ve(){try{e.texStorage3D(...arguments)}catch(D){ut("WebGLState:",D)}}function N(){try{e.texImage2D(...arguments)}catch(D){ut("WebGLState:",D)}}function he(){try{e.texImage3D(...arguments)}catch(D){ut("WebGLState:",D)}}function ge(D){return _[D]!==void 0?_[D]:e.getParameter(D)}function we(D,te){_[D]!==te&&(e.pixelStorei(D,te),_[D]=te)}function ne(D){St.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),St.copy(D))}function Pe(D){qe.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),qe.copy(D))}function Ue(D,te){let m=u.get(te);m===void 0&&(m=new WeakMap,u.set(te,m));let k=m.get(D);k===void 0&&(k=e.getUniformBlockIndex(te,D.name),m.set(D,k))}function Re(D,te){let m=u.get(te).get(D);c.get(te)!==m&&(e.uniformBlockBinding(te,m,D.__bindingPointIndex),c.set(te,m))}function pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},_={},ee=null,ie={},d={},v=new WeakMap,y=[],b=null,M=!1,p=null,A=null,B=null,s=null,T=null,R=null,w=null,l=new Ke(0,0,0),g=0,Y=!1,L=null,F=null,Q=null,U=null,X=null,St.set(0,0,e.canvas.width,e.canvas.height),qe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),o.reset(),h.reset()}return{buffers:{color:n,depth:o,stencil:h},enable:ce,disable:Le,bindFramebuffer:ze,drawBuffers:xe,useProgram:at,setBlending:ft,setMaterial:Yt,setFlipSided:ri,setCullFace:mt,setLineWidth:Nt,setPolygonOffset:Pt,setScissorTest:It,activeTexture:I,bindTexture:Ft,unbindTexture:ot,compressedTexImage2D:Et,compressedTexImage3D:E,texImage2D:N,texImage3D:he,pixelStorei:we,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:Re,texStorage2D:de,texStorage3D:ve,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:K,compressedTexSubImage3D:ae,scissor:ne,viewport:Pe,reset:pt}}function fg(e,t,i,r,a,n,o){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Oe,f=new WeakMap,_=new Set,d,v=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,x){return y?new OffscreenCanvas(E,x):bn("canvas")}function M(E,x,P){let K=1,ae=Et(E);if((ae.width>P||ae.height>P)&&(K=P/Math.max(ae.width,ae.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let de=Math.floor(K*ae.width),ve=Math.floor(K*ae.height);d===void 0&&(d=b(de,ve));let N=x?b(de,ve):d;return N.width=de,N.height=ve,N.getContext("2d").drawImage(E,0,0,de,ve),ke("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+de+"x"+ve+")."),N}else return"data"in E&&ke("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function p(E){return E.generateMipmaps}function A(E){e.generateMipmap(E)}function B(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function s(E,x,P,K,ae,de=!1){if(E!==null){if(e[E]!==void 0)return e[E];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ve;K&&(ve=t.get("EXT_texture_norm16"),ve||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=x;if(x===e.RED&&(P===e.FLOAT&&(N=e.R32F),P===e.HALF_FLOAT&&(N=e.R16F),P===e.UNSIGNED_BYTE&&(N=e.R8),P===e.UNSIGNED_SHORT&&ve&&(N=ve.R16_EXT),P===e.SHORT&&ve&&(N=ve.R16_SNORM_EXT)),x===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(N=e.R8UI),P===e.UNSIGNED_SHORT&&(N=e.R16UI),P===e.UNSIGNED_INT&&(N=e.R32UI),P===e.BYTE&&(N=e.R8I),P===e.SHORT&&(N=e.R16I),P===e.INT&&(N=e.R32I)),x===e.RG&&(P===e.FLOAT&&(N=e.RG32F),P===e.HALF_FLOAT&&(N=e.RG16F),P===e.UNSIGNED_BYTE&&(N=e.RG8),P===e.UNSIGNED_SHORT&&ve&&(N=ve.RG16_EXT),P===e.SHORT&&ve&&(N=ve.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(N=e.RG8UI),P===e.UNSIGNED_SHORT&&(N=e.RG16UI),P===e.UNSIGNED_INT&&(N=e.RG32UI),P===e.BYTE&&(N=e.RG8I),P===e.SHORT&&(N=e.RG16I),P===e.INT&&(N=e.RG32I)),x===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(N=e.RGB8UI),P===e.UNSIGNED_SHORT&&(N=e.RGB16UI),P===e.UNSIGNED_INT&&(N=e.RGB32UI),P===e.BYTE&&(N=e.RGB8I),P===e.SHORT&&(N=e.RGB16I),P===e.INT&&(N=e.RGB32I)),x===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(N=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(N=e.RGBA16UI),P===e.UNSIGNED_INT&&(N=e.RGBA32UI),P===e.BYTE&&(N=e.RGBA8I),P===e.SHORT&&(N=e.RGBA16I),P===e.INT&&(N=e.RGBA32I)),x===e.RGB&&(P===e.UNSIGNED_SHORT&&ve&&(N=ve.RGB16_EXT),P===e.SHORT&&ve&&(N=ve.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(N=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(N=e.R11F_G11F_B10F)),x===e.RGBA){let he=de?yn:lt.getTransfer(ae);P===e.FLOAT&&(N=e.RGBA32F),P===e.HALF_FLOAT&&(N=e.RGBA16F),P===e.UNSIGNED_BYTE&&(N=he===vt?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ve&&(N=ve.RGBA16_EXT),P===e.SHORT&&ve&&(N=ve.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(N=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(N=e.RGB5_A1)}return(N===e.R16F||N===e.R32F||N===e.RG16F||N===e.RG32F||N===e.RGBA16F||N===e.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function T(E,x){let P;return E?x===null||x===Wi||x===Pa?P=e.DEPTH24_STENCIL8:x===Gi?P=e.DEPTH32F_STENCIL8:x===Ca&&(P=e.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wi||x===Pa?P=e.DEPTH_COMPONENT24:x===Gi?P=e.DEPTH_COMPONENT32F:x===Ca&&(P=e.DEPTH_COMPONENT16),P}function R(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ti&&E.minFilter!==ii?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){let x=E.target;x.removeEventListener("dispose",w),g(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&_.delete(x)}function l(E){let x=E.target;x.removeEventListener("dispose",l),L(x)}function g(E){let x=r.get(E);if(x.__webglInit===void 0)return;let P=E.source,K=v.get(P);if(K){let ae=K[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&Y(E),Object.keys(K).length===0&&v.delete(P)}r.remove(E)}function Y(E){let x=r.get(E);e.deleteTexture(x.__webglTexture);let P=E.source,K=v.get(P);delete K[x.__cacheKey],o.memory.textures--}function L(E){let x=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ae=0;ae<x.__webglFramebuffer[K].length;ae++)e.deleteFramebuffer(x.__webglFramebuffer[K][ae]);else e.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)e.deleteFramebuffer(x.__webglFramebuffer[K]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=E.textures;for(let K=0,ae=P.length;K<ae;K++){let de=r.get(P[K]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),o.memory.textures--),r.remove(P[K])}r.remove(E)}let F=0;function Q(){F=0}function U(){return F}function X(E){F=E}function re(){let E=F;return E>=a.maxTextures&&ke("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,E}function q(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function pe(E,x){let P=r.get(E);if(E.isVideoTexture&&Ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&P.__version!==E.version){let K=E.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(P,E,x);return}}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+x)}function $(E,x){let P=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){Le(P,E,x);return}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+x)}function ee(E,x){let P=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){Le(P,E,x);return}i.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+x)}function ie(E,x){let P=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&P.__version!==E.version){ze(P,E,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+x)}let Ze={[Ts]:e.REPEAT,[ir]:e.CLAMP_TO_EDGE,[ws]:e.MIRRORED_REPEAT},Ie={[ti]:e.NEAREST,[vc]:e.NEAREST_MIPMAP_NEAREST,[Na]:e.NEAREST_MIPMAP_LINEAR,[ii]:e.LINEAR,[On]:e.LINEAR_MIPMAP_NEAREST,[Er]:e.LINEAR_MIPMAP_LINEAR},St={[Ec]:e.NEVER,[Rc]:e.ALWAYS,[yc]:e.LESS,[Mo]:e.LEQUAL,[bc]:e.EQUAL,[xo]:e.GEQUAL,[Tc]:e.GREATER,[wc]:e.NOTEQUAL};function qe(E,x){if(x.type===Gi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ii||x.magFilter===On||x.magFilter===Na||x.magFilter===Er||x.minFilter===ii||x.minFilter===On||x.minFilter===Na||x.minFilter===Er)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Ze[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Ze[x.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Ze[x.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Ie[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Ie[x.minFilter]),x.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ti||x.minFilter!==Na&&x.minFilter!==Er||x.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function J(E,x){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));let K=x.source,ae=v.get(K);ae===void 0&&(ae={},v.set(K,ae));let de=q(x);if(de!==E.__cacheKey){ae[de]===void 0&&(ae[de]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,P=!0),ae[de].usedTimes++;let ve=ae[E.__cacheKey];ve!==void 0&&(ae[E.__cacheKey].usedTimes--,ve.usedTimes===0&&Y(x)),E.__cacheKey=de,E.__webglTexture=ae[de].texture}return P}function oe(E,x,P){return Math.floor(Math.floor(E/P)/x)}function ce(E,x,P,K){let ae=E.updateRanges;if(ae.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,P,K,x.data);else{ae.sort((ge,we)=>ge.start-we.start);let de=0;for(let ge=1;ge<ae.length;ge++){let we=ae[de],ne=ae[ge],Pe=we.start+we.count,Ue=oe(ne.start,x.width,4),Re=oe(we.start,x.width,4);ne.start<=Pe+1&&Ue===Re&&oe(ne.start+ne.count-1,x.width,4)===Ue?we.count=Math.max(we.count,ne.start+ne.count-we.start):(++de,ae[de]=ne)}ae.length=de+1;let ve=i.getParameter(e.UNPACK_ROW_LENGTH),N=i.getParameter(e.UNPACK_SKIP_PIXELS),he=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let ge=0,we=ae.length;ge<we;ge++){let ne=ae[ge],Pe=Math.floor(ne.start/4),Ue=Math.ceil(ne.count/4),Re=Pe%x.width,pt=Math.floor(Pe/x.width),D=Ue;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(e.UNPACK_SKIP_ROWS,pt),i.texSubImage2D(e.TEXTURE_2D,0,Re,pt,D,1,P,K,x.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ve),i.pixelStorei(e.UNPACK_SKIP_PIXELS,N),i.pixelStorei(e.UNPACK_SKIP_ROWS,he)}}function Le(E,x,P){let K=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=e.TEXTURE_3D);let ae=J(E,x),de=x.source;i.bindTexture(K,E.__webglTexture,e.TEXTURE0+P);let ve=r.get(de);if(de.version!==ve.__version||ae===!0){if(i.activeTexture(e.TEXTURE0+P),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let te=lt.getPrimaries(lt.workingColorSpace),m=x.colorSpace===dr?null:lt.getPrimaries(x.colorSpace),k=x.colorSpace===dr||te===m?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,k)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let N=M(x.image,!1,a.maxTextureSize);N=ot(x,N);let he=n.convert(x.format,x.colorSpace),ge=n.convert(x.type),we=s(x.internalFormat,he,ge,x.normalized,x.colorSpace,x.isVideoTexture);qe(K,x);let ne,Pe=x.mipmaps,Ue=x.isVideoTexture!==!0,Re=ve.__version===void 0||ae===!0,pt=de.dataReady,D=R(x,N);if(x.isDepthTexture)we=T(x.format===yr,x.type),Re&&(Ue?i.texStorage2D(e.TEXTURE_2D,1,we,N.width,N.height):i.texImage2D(e.TEXTURE_2D,0,we,N.width,N.height,0,he,ge,null));else if(x.isDataTexture)if(Pe.length>0){Ue&&Re&&i.texStorage2D(e.TEXTURE_2D,D,we,Pe[0].width,Pe[0].height);for(let te=0,m=Pe.length;te<m;te++)ne=Pe[te],Ue?pt&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,ne.width,ne.height,he,ge,ne.data):i.texImage2D(e.TEXTURE_2D,te,we,ne.width,ne.height,0,he,ge,ne.data);x.generateMipmaps=!1}else Ue?(Re&&i.texStorage2D(e.TEXTURE_2D,D,we,N.width,N.height),pt&&ce(x,N,he,ge)):i.texImage2D(e.TEXTURE_2D,0,we,N.width,N.height,0,he,ge,N.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&Re&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,we,Pe[0].width,Pe[0].height,N.depth);for(let te=0,m=Pe.length;te<m;te++)if(ne=Pe[te],x.format!==Di)if(he!==null)if(Ue){if(pt)if(x.layerUpdates.size>0){let k=fl(ne.width,ne.height,x.format,x.type);for(let G of x.layerUpdates){let z=ne.data.subarray(G*k/ne.data.BYTES_PER_ELEMENT,(G+1)*k/ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,G,ne.width,ne.height,1,he,z)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,ne.width,ne.height,N.depth,he,ne.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,te,we,ne.width,ne.height,N.depth,0,ne.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?pt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,ne.width,ne.height,N.depth,he,ge,ne.data):i.texImage3D(e.TEXTURE_2D_ARRAY,te,we,ne.width,ne.height,N.depth,0,he,ge,ne.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&Re&&i.texStorage2D(e.TEXTURE_2D,D,we,Pe[0].width,Pe[0].height);for(let te=0,m=Pe.length;te<m;te++)ne=Pe[te],x.format!==Di?he!==null?Ue?pt&&i.compressedTexSubImage2D(e.TEXTURE_2D,te,0,0,ne.width,ne.height,he,ne.data):i.compressedTexImage2D(e.TEXTURE_2D,te,we,ne.width,ne.height,0,ne.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?pt&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,ne.width,ne.height,he,ge,ne.data):i.texImage2D(e.TEXTURE_2D,te,we,ne.width,ne.height,0,he,ge,ne.data)}else if(x.isDataArrayTexture)if(Ue){if(Re&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,we,N.width,N.height,N.depth),pt)if(x.layerUpdates.size>0){let te=fl(N.width,N.height,x.format,x.type);for(let m of x.layerUpdates){let k=N.data.subarray(m*te/N.data.BYTES_PER_ELEMENT,(m+1)*te/N.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,m,N.width,N.height,1,he,ge,k)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,he,ge,N.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,we,N.width,N.height,N.depth,0,he,ge,N.data);else if(x.isData3DTexture)Ue?(Re&&i.texStorage3D(e.TEXTURE_3D,D,we,N.width,N.height,N.depth),pt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,he,ge,N.data)):i.texImage3D(e.TEXTURE_3D,0,we,N.width,N.height,N.depth,0,he,ge,N.data);else if(x.isFramebufferTexture){if(Re)if(Ue)i.texStorage2D(e.TEXTURE_2D,D,we,N.width,N.height);else{let te=N.width,m=N.height;for(let k=0;k<D;k++)i.texImage2D(e.TEXTURE_2D,k,we,te,m,0,he,ge,null),te>>=1,m>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let te=e.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),N.parentNode!==te){te.appendChild(N),_.add(x),te.onpaint=m=>{let k=m.changedElements;for(let G of _)k.includes(G.image)&&(G.needsUpdate=!0)},te.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,N);else{let m=e.RGBA,k=e.RGBA,G=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,m,k,G,N)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ue&&Re){let te=Et(Pe[0]);i.texStorage2D(e.TEXTURE_2D,D,we,te.width,te.height)}for(let te=0,m=Pe.length;te<m;te++)ne=Pe[te],Ue?pt&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,he,ge,ne):i.texImage2D(e.TEXTURE_2D,te,we,he,ge,ne);x.generateMipmaps=!1}else if(Ue){if(Re){let te=Et(N);i.texStorage2D(e.TEXTURE_2D,D,we,te.width,te.height)}pt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,he,ge,N)}else i.texImage2D(e.TEXTURE_2D,0,we,he,ge,N);p(x)&&A(K),ve.__version=de.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ze(E,x,P){if(x.image.length!==6)return;let K=J(E,x),ae=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+P);let de=r.get(ae);if(ae.version!==de.__version||K===!0){i.activeTexture(e.TEXTURE0+P);let ve=lt.getPrimaries(lt.workingColorSpace),N=x.colorSpace===dr?null:lt.getPrimaries(x.colorSpace),he=x.colorSpace===dr||ve===N?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ge=x.isCompressedTexture||x.image[0].isCompressedTexture,we=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let z=0;z<6;z++)!ge&&!we?ne[z]=M(x.image[z],!0,a.maxCubemapSize):ne[z]=we?x.image[z].image:x.image[z],ne[z]=ot(x,ne[z]);let Pe=ne[0],Ue=n.convert(x.format,x.colorSpace),Re=n.convert(x.type),pt=s(x.internalFormat,Ue,Re,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,te=de.__version===void 0||K===!0,m=ae.dataReady,k=R(x,Pe);qe(e.TEXTURE_CUBE_MAP,x);let G;if(ge){D&&te&&i.texStorage2D(e.TEXTURE_CUBE_MAP,k,pt,Pe.width,Pe.height);for(let z=0;z<6;z++){G=ne[z].mipmaps;for(let Z=0;Z<G.length;Z++){let V=G[Z];x.format!==Di?Ue!==null?D?m&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z,0,0,V.width,V.height,Ue,V.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z,pt,V.width,V.height,0,V.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?m&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z,0,0,V.width,V.height,Ue,Re,V.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z,pt,V.width,V.height,0,Ue,Re,V.data)}}}else{if(G=x.mipmaps,D&&te){G.length>0&&k++;let z=Et(ne[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,k,pt,z.width,z.height)}for(let z=0;z<6;z++)if(we){D?m&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ne[z].width,ne[z].height,Ue,Re,ne[z].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pt,ne[z].width,ne[z].height,0,Ue,Re,ne[z].data);for(let Z=0;Z<G.length;Z++){let V=G[Z].image[z].image;D?m&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z+1,0,0,V.width,V.height,Ue,Re,V.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z+1,pt,V.width,V.height,0,Ue,Re,V.data)}}else{D?m&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ue,Re,ne[z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pt,Ue,Re,ne[z]);for(let Z=0;Z<G.length;Z++){let V=G[Z];D?m&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z+1,0,0,Ue,Re,V.image[z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,Z+1,pt,Ue,Re,V.image[z])}}}p(x)&&A(e.TEXTURE_CUBE_MAP),de.__version=ae.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xe(E,x,P,K,ae,de){let ve=n.convert(P.format,P.colorSpace),N=n.convert(P.type),he=s(P.internalFormat,ve,N,P.normalized,P.colorSpace),ge=r.get(x),we=r.get(P);if(we.__renderTarget=x,!ge.__hasExternalTextures){let ne=Math.max(1,x.width>>de),Pe=Math.max(1,x.height>>de);ae===e.TEXTURE_3D||ae===e.TEXTURE_2D_ARRAY?i.texImage3D(ae,de,he,ne,Pe,x.depth,0,ve,N,null):i.texImage2D(ae,de,he,ne,Pe,0,ve,N,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),I(x)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,ae,we.__webglTexture,0,It(x)):(ae===e.TEXTURE_2D||ae>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,ae,we.__webglTexture,de),i.bindFramebuffer(e.FRAMEBUFFER,null)}function at(E,x,P){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){let K=x.depthTexture,ae=K&&K.isDepthTexture?K.type:null,de=T(x.stencilBuffer,ae),ve=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(x)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,It(x),de,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,It(x),de,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,de,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,E)}else{let K=x.textures;for(let ae=0;ae<K.length;ae++){let de=K[ae],ve=n.convert(de.format,de.colorSpace),N=n.convert(de.type),he=s(de.internalFormat,ve,N,de.normalized,de.colorSpace);I(x)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,It(x),he,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,It(x),he,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,he,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function dt(E,x,P){let K=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=r.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),ae.__webglTexture===void 0){ae.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),qe(e.TEXTURE_CUBE_MAP,x.depthTexture);let ge=n.convert(x.depthTexture.format),we=n.convert(x.depthTexture.type),ne;x.depthTexture.format===nr?ne=e.DEPTH_COMPONENT24:x.depthTexture.format===yr&&(ne=e.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ne,x.width,x.height,0,ge,we,null)}}else pe(x.depthTexture,0);let de=ae.__webglTexture,ve=It(x),N=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,he=x.depthTexture.format===yr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===nr)I(x)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,N,de,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,he,N,de,0);else if(x.depthTexture.format===yr)I(x)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,N,de,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,he,N,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(E){let x=r.get(E),P=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",ae)};K.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=K}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(P)for(let K=0;K<6;K++)dt(x.__webglFramebuffer[K],E,K);else{let K=E.texture.mipmaps;K&&K.length>0?dt(x.__webglFramebuffer[0],E,0):dt(x.__webglFramebuffer,E,0)}else if(P){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=e.createRenderbuffer(),at(x.__webglDepthbuffer[K],E,!1);else{let ae=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,de)}}else{let K=E.texture.mipmaps;if(K&&K.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),at(x.__webglDepthbuffer,E,!1);else{let ae=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,de)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(E,x,P){let K=r.get(E);x!==void 0&&xe(K.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Xe(E)}function Yt(E){let x=E.texture,P=r.get(E),K=r.get(x);E.addEventListener("dispose",l);let ae=E.textures,de=E.isWebGLCubeRenderTarget===!0,ve=ae.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=x.version,o.memory.textures++),de){P.__webglFramebuffer=[];for(let N=0;N<6;N++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[N]=[];for(let he=0;he<x.mipmaps.length;he++)P.__webglFramebuffer[N][he]=e.createFramebuffer()}else P.__webglFramebuffer[N]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let N=0;N<x.mipmaps.length;N++)P.__webglFramebuffer[N]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ve)for(let N=0,he=ae.length;N<he;N++){let ge=r.get(ae[N]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),o.memory.textures++)}if(E.samples>0&&I(E)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let N=0;N<ae.length;N++){let he=ae[N];P.__webglColorRenderbuffer[N]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[N]);let ge=n.convert(he.format,he.colorSpace),we=n.convert(he.type),ne=s(he.internalFormat,ge,we,he.normalized,he.colorSpace,E.isXRRenderTarget===!0),Pe=It(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe,ne,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+N,e.RENDERBUFFER,P.__webglColorRenderbuffer[N])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),at(P.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),qe(e.TEXTURE_CUBE_MAP,x);for(let N=0;N<6;N++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)xe(P.__webglFramebuffer[N][he],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+N,he);else xe(P.__webglFramebuffer[N],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(x)&&A(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ve){for(let N=0,he=ae.length;N<he;N++){let ge=ae[N],we=r.get(ge),ne=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ne,we.__webglTexture),qe(ne,ge),xe(P.__webglFramebuffer,E,ge,e.COLOR_ATTACHMENT0+N,ne,0),p(ge)&&A(ne)}i.unbindTexture()}else{let N=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(N=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(N,K.__webglTexture),qe(N,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)xe(P.__webglFramebuffer[he],E,x,e.COLOR_ATTACHMENT0,N,he);else xe(P.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,N,0);p(x)&&A(N),i.unbindTexture()}E.depthBuffer&&Xe(E)}function ri(E){let x=E.textures;for(let P=0,K=x.length;P<K;P++){let ae=x[P];if(p(ae)){let de=B(E),ve=r.get(ae).__webglTexture;i.bindTexture(de,ve),A(de),i.unbindTexture()}}}let mt=[],Nt=[];function Pt(E){if(E.samples>0){if(I(E)===!1){let x=E.textures,P=E.width,K=E.height,ae=e.COLOR_BUFFER_BIT,de=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=r.get(E),N=x.length>1;if(N)for(let ge=0;ge<x.length;ge++)i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let he=E.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=e.STENCIL_BUFFER_BIT)),N){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let we=r.get(x[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,we,0)}e.blitFramebuffer(0,0,P,K,0,0,P,K,ae,e.NEAREST),c===!0&&(mt.length=0,Nt.length=0,mt.push(e.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(mt.push(de),Nt.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Nt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,mt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),N)for(let ge=0;ge<x.length;ge++){i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let we=r.get(x[ge]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,we,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function It(E){return Math.min(a.maxSamples,E.samples)}function I(E){let x=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ft(E){let x=o.render.frame;f.get(E)!==x&&(f.set(E,x),E.update())}function ot(E,x){let P=E.colorSpace,K=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==En&&P!==dr&&(lt.getTransfer(P)===vt?(K!==Di||ae!==vi)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",P)),x}function Et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=re,this.resetTextureUnits=Q,this.getTextureUnits=U,this.setTextureUnits=X,this.setTexture2D=pe,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ie,this.rebindTextures=ft,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ri,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mg(e,t){function i(r,a=dr){let n,o=lt.getTransfer(a);if(r===vi)return e.UNSIGNED_BYTE;if(r===fo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===mo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===$l)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ql)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Zl)return e.BYTE;if(r===Jl)return e.SHORT;if(r===Ca)return e.UNSIGNED_SHORT;if(r===po)return e.INT;if(r===Wi)return e.UNSIGNED_INT;if(r===Gi)return e.FLOAT;if(r===Xi)return e.HALF_FLOAT;if(r===eh)return e.ALPHA;if(r===th)return e.RGB;if(r===Di)return e.RGBA;if(r===nr)return e.DEPTH_COMPONENT;if(r===yr)return e.DEPTH_STENCIL;if(r===ih)return e.RED;if(r===go)return e.RED_INTEGER;if(r===Rr)return e.RG;if(r===_o)return e.RG_INTEGER;if(r===vo)return e.RGBA_INTEGER;if(r===dn||r===pn||r===fn||r===mn)if(o===vt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===dn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===dn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rs||r===As||r===Cs||r===Ps)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Rs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===As)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cs)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ps)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Is||r===Ds||r===Ls||r===Us||r===Ns||r===xn||r===Fs)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Is||r===Ds)return o===vt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ls)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Us)return n.COMPRESSED_R11_EAC;if(r===Ns)return n.COMPRESSED_SIGNED_R11_EAC;if(r===xn)return n.COMPRESSED_RG11_EAC;if(r===Fs)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Os||r===Bs||r===zs||r===Hs||r===Gs||r===ks||r===Vs||r===Ws||r===Xs||r===js||r===Ys||r===qs||r===Ks||r===Zs)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Os)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ks)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ws)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===js)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ys)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ks)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zs)return o===vt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Js||r===$s||r===Qs)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Js)return o===vt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$s)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===eo||r===to||r===Sn||r===io)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===eo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===to)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===io)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
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

}`,vg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ji({vertexShader:gg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mg=class extends mr{constructor(e,t){super();let i=this,r=null,a=1,n=null,o="local-floor",h=1,c=null,u=null,f=null,_=null,d=null,v=null,y=typeof XRWebGLBinding<"u",b=new vg,M={},p=t.getContextAttributes(),A=null,B=null,s=[],T=[],R=new Oe,w=null,l=null,g=new Ei;g.viewport=new Ut;let Y=new Ei;Y.viewport=new Ut;let L=[g,Y],F=new Eu,Q=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=s[J];return oe===void 0&&(oe=new Xn,s[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=s[J];return oe===void 0&&(oe=new Xn,s[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=s[J];return oe===void 0&&(oe=new Xn,s[J]=oe),oe.getHandSpace()};function X(J){let oe=T.indexOf(J.inputSource);if(oe===-1)return;let ce=s[oe];ce!==void 0&&(ce.update(J.inputSource,J.frame,c||n),ce.dispatchEvent({type:J.type,data:J.inputSource}))}function re(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",q);for(let J=0;J<s.length;J++){let oe=T[J];oe!==null&&(T[J]=null,s[J].disconnect(oe))}Q=null,U=null,b.reset();for(let J in M)delete M[J];if(e.setRenderTarget(A),d=null,_=null,f=null,r=null,B=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),l!==null){let J=l.camera;J.fov=l.fov,J.zoom=l.zoom,J.updateProjectionMatrix(),l=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return _!==null?_:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",re),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ce=null,Le=null;p.depth&&(Le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?yr:nr,ce=p.stencil?Pa:Wi);let ze={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};f=this.getBinding(),_=f.createProjectionLayer(ze),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),B=new Li(_.textureWidth,_.textureHeight,{format:Di,type:vi,depthTexture:new Da(_.textureWidth,_.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),B=new Li(d.framebufferWidth,d.framebufferHeight,{format:Di,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(h),c=null,n=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function q(J){for(let oe=0;oe<J.removed.length;oe++){let ce=J.removed[oe],Le=T.indexOf(ce);Le>=0&&(T[Le]=null,s[Le].disconnect(ce))}for(let oe=0;oe<J.added.length;oe++){let ce=J.added[oe],Le=T.indexOf(ce);if(Le===-1){for(let xe=0;xe<s.length;xe++)if(xe>=T.length){T.push(ce),Le=xe;break}else if(T[xe]===null){T[xe]=ce,Le=xe;break}if(Le===-1)break}let ze=s[Le];ze&&ze.connect(ce)}}let pe=new O,$=new O;function ee(J,oe,ce){pe.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);let Le=pe.distanceTo($),ze=oe.projectionMatrix.elements,xe=ce.projectionMatrix.elements,at=ze[14]/(ze[10]-1),dt=ze[14]/(ze[10]+1),Xe=(ze[9]+1)/ze[5],ft=(ze[9]-1)/ze[5],Yt=(ze[8]-1)/ze[0],ri=(xe[8]+1)/xe[0],mt=at*Yt,Nt=at*ri,Pt=Le/(-Yt+ri),It=Pt*-Yt;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(It),J.translateZ(Pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ze[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let I=at+Pt,Ft=dt+Pt,ot=mt-It,Et=Nt+(Le-It),E=Xe*dt/Ft*I,x=ft*dt/Ft*I;J.projectionMatrix.makePerspective(ot,Et,E,x,I,Ft),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let oe=J.near,ce=J.far;b.texture!==null&&(b.depthNear>0&&(oe=b.depthNear),b.depthFar>0&&(ce=b.depthFar)),F.near=Y.near=g.near=oe,F.far=Y.far=g.far=ce,(Q!==F.near||U!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),Q=F.near,U=F.far),F.layers.mask=J.layers.mask|6,g.layers.mask=F.layers.mask&-5,Y.layers.mask=F.layers.mask&-3;let Le=J.parent,ze=F.cameras;ie(F,Le);for(let xe=0;xe<ze.length;xe++)ie(ze[xe],Le);ze.length===2?ee(F,g,Y):F.projectionMatrix.copy(g.projectionMatrix),l===null&&J.isPerspectiveCamera&&(l={camera:J,fov:J.fov,zoom:J.zoom}),Ze(J,F,Le)};function Ze(J,oe,ce){ce===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ao*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(_===null&&d===null))return h},this.setFoveation=function(J){h=J,_!==null&&(_.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(F)},this.getCameraTexture=function(J){return M[J]};let Ie=null;function St(J,oe){if(u=oe.getViewerPose(c||n),v=oe,u!==null){let ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(B,d.framebuffer),e.setRenderTarget(B));let Le=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let xe=0;xe<ce.length;xe++){let at=ce[xe],dt=null;if(d!==null)dt=d.getViewport(at);else{let ft=f.getViewSubImage(_,at);dt=ft.viewport,xe===0&&(e.setRenderTargetTextures(B,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(B))}let Xe=L[xe];Xe===void 0&&(Xe=new Ei,Xe.layers.enable(xe),Xe.viewport=new Ut,L[xe]=Xe),Xe.matrix.fromArray(at.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(at.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(dt.x,dt.y,dt.width,dt.height),xe===0&&(F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Xe)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let xe=f.getDepthInformation(ce[0]);xe&&xe.isValid&&xe.texture&&b.init(xe,r.renderState)}if(ze&&ze.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let xe=0;xe<ce.length;xe++){let at=ce[xe].camera;if(at){let dt=M[at];dt||(dt=new _h,M[at]=dt);let Xe=f.getCameraImage(at);dt.sourceTexture=Xe}}}}for(let ce=0;ce<s.length;ce++){let Le=T[ce],ze=s[ce];Le!==null&&ze!==void 0&&ze.update(Le,oe,c||n)}Ie&&Ie(J,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}let qe=new Rh;qe.setAnimationLoop(St),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}},xg=new At,Uh=new $e;Uh.set(-1,0,0,0,1,0,0,0,1);function Sg(e,t){function i(M,p){M.matrixAutoUpdate===!0&&M.updateMatrix(),p.value.copy(M.matrix)}function r(M,p){p.color.getRGB(M.fogColor.value,yh(e)),p.isFog?(M.fogNear.value=p.near,M.fogFar.value=p.far):p.isFogExp2&&(M.fogDensity.value=p.density)}function a(M,p,A,B,s){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(M,p):p.isMeshLambertMaterial?(n(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(M,p),_(M,p)):p.isMeshPhongMaterial?(n(M,p),f(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(M,p),d(M,p),p.isMeshPhysicalMaterial&&v(M,p,s)):p.isMeshMatcapMaterial?(n(M,p),y(M,p)):p.isMeshDepthMaterial?n(M,p):p.isMeshDistanceMaterial?(n(M,p),b(M,p)):p.isMeshNormalMaterial?n(M,p):p.isLineBasicMaterial?(o(M,p),p.isLineDashedMaterial&&h(M,p)):p.isPointsMaterial?c(M,p,A,B):p.isSpriteMaterial?u(M,p):p.isShadowMaterial?(M.color.value.copy(p.color),M.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(M,p){M.opacity.value=p.opacity,p.color&&M.diffuse.value.copy(p.color),p.emissive&&M.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(M.map.value=p.map,i(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,i(p.alphaMap,M.alphaMapTransform)),p.bumpMap&&(M.bumpMap.value=p.bumpMap,i(p.bumpMap,M.bumpMapTransform),M.bumpScale.value=p.bumpScale,p.side===pi&&(M.bumpScale.value*=-1)),p.normalMap&&(M.normalMap.value=p.normalMap,i(p.normalMap,M.normalMapTransform),M.normalScale.value.copy(p.normalScale),p.side===pi&&M.normalScale.value.negate()),p.displacementMap&&(M.displacementMap.value=p.displacementMap,i(p.displacementMap,M.displacementMapTransform),M.displacementScale.value=p.displacementScale,M.displacementBias.value=p.displacementBias),p.emissiveMap&&(M.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,M.emissiveMapTransform)),p.specularMap&&(M.specularMap.value=p.specularMap,i(p.specularMap,M.specularMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest);let A=t.get(p),B=A.envMap,s=A.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(s)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Uh),M.reflectivity.value=p.reflectivity,M.ior.value=p.ior,M.refractionRatio.value=p.refractionRatio),p.lightMap&&(M.lightMap.value=p.lightMap,M.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,M.lightMapTransform)),p.aoMap&&(M.aoMap.value=p.aoMap,M.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,M.aoMapTransform))}function o(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,p.map&&(M.map.value=p.map,i(p.map,M.mapTransform))}function h(M,p){M.dashSize.value=p.dashSize,M.totalSize.value=p.dashSize+p.gapSize,M.scale.value=p.scale}function c(M,p,A,B){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.size.value=p.size*A,M.scale.value=B*.5,p.map&&(M.map.value=p.map,i(p.map,M.uvTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,i(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function u(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.rotation.value=p.rotation,p.map&&(M.map.value=p.map,i(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,i(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function f(M,p){M.specular.value.copy(p.specular),M.shininess.value=Math.max(p.shininess,1e-4)}function _(M,p){p.gradientMap&&(M.gradientMap.value=p.gradientMap)}function d(M,p){M.metalness.value=p.metalness,p.metalnessMap&&(M.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,M.metalnessMapTransform)),M.roughness.value=p.roughness,p.roughnessMap&&(M.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,M.roughnessMapTransform)),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)}function v(M,p,A){M.ior.value=p.ior,p.sheen>0&&(M.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),M.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(M.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,M.sheenColorMapTransform)),p.sheenRoughnessMap&&(M.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,M.sheenRoughnessMapTransform))),p.clearcoat>0&&(M.clearcoat.value=p.clearcoat,M.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(M.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,M.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(M.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pi&&M.clearcoatNormalScale.value.negate())),p.dispersion>0&&(M.dispersion.value=p.dispersion),p.retroreflectivity>0&&(M.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(M.iridescence.value=p.iridescence,M.iridescenceIOR.value=p.iridescenceIOR,M.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(M.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,M.iridescenceMapTransform)),p.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),p.transmission>0&&(M.transmission.value=p.transmission,M.transmissionSamplerMap.value=A.texture,M.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(M.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,M.transmissionMapTransform)),M.thickness.value=p.thickness,p.thicknessMap&&(M.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=p.attenuationDistance,M.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(M.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(M.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=p.specularIntensity,M.specularColor.value.copy(p.specularColor),p.specularColorMap&&(M.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,M.specularColorMapTransform)),p.specularIntensityMap&&(M.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,p){p.matcap&&(M.matcap.value=p.matcap)}function b(M,p){let A=t.get(p).light;M.referencePosition.value.setFromMatrixPosition(A.matrixWorld),M.nearDistance.value=A.shadow.camera.near,M.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Eg(e,t,i,r){let a={},n={},o=[],h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(s,T){let R=T.program;r.uniformBlockBinding(s,R)}function u(s,T){let R=a[s.id];R===void 0&&(M(s),R=f(s),a[s.id]=R,s.addEventListener("dispose",A));let w=T.program;r.updateUBOMapping(s,w);let l=t.render.frame;n[s.id]!==l&&(d(s),n[s.id]=l)}function f(s){let T=_();s.__bindingPointIndex=T;let R=e.createBuffer(),w=s.__size,l=s.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,w,l),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,R),R}function _(){for(let s=0;s<h;s++)if(o.indexOf(s)===-1)return o.push(s),s;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(s){let T=a[s.id],R=s.uniforms,w=s.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let l=0,g=R.length;l<g;l++){let Y=R[l];if(Array.isArray(Y))for(let L=0,F=Y.length;L<F;L++)v(Y[L],l,L,w);else v(Y,l,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(s,T,R,w){if(b(s,T,R,w)===!0){let l=s.__offset,g=s.value;if(Array.isArray(g)){let Y=0;for(let L=0;L<g.length;L++){let F=g[L],Q=p(F);y(F,s.__data,Y),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(g,s.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,l,s.__data)}}function y(s,T,R){typeof s=="number"||typeof s=="boolean"?T[0]=s:s.isMatrix3?(T[0]=s.elements[0],T[1]=s.elements[1],T[2]=s.elements[2],T[3]=0,T[4]=s.elements[3],T[5]=s.elements[4],T[6]=s.elements[5],T[7]=0,T[8]=s.elements[6],T[9]=s.elements[7],T[10]=s.elements[8],T[11]=0):ArrayBuffer.isView(s)?T.set(new s.constructor(s.buffer,s.byteOffset,T.length)):s.toArray(T,R)}function b(s,T,R,w){let l=s.value,g=T+"_"+R;if(w[g]===void 0)return typeof l=="number"||typeof l=="boolean"?w[g]=l:ArrayBuffer.isView(l)?w[g]=l.slice():w[g]=l.clone(),!0;{let Y=w[g];if(typeof l=="number"||typeof l=="boolean"){if(Y!==l)return w[g]=l,!0}else{if(ArrayBuffer.isView(l))return!0;if(Y.equals(l)===!1)return Y.copy(l),!0}}return!1}function M(s){let T=s.uniforms,R=0,w=16;for(let g=0,Y=T.length;g<Y;g++){let L=Array.isArray(T[g])?T[g]:[T[g]];for(let F=0,Q=L.length;F<Q;F++){let U=L[F],X=Array.isArray(U.value)?U.value:[U.value];for(let re=0,q=X.length;re<q;re++){let pe=X[re],$=p(pe),ee=R%w,ie=ee%$.boundary,Ze=ee+ie;R+=ie,Ze!==0&&w-Ze<$.storage&&(R+=w-Ze),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=R,R+=$.storage}}}let l=R%w;return l>0&&(R+=w-l),s.__size=R,s.__cache={},this}function p(s){let T={boundary:0,storage:0};return typeof s=="number"||typeof s=="boolean"?(T.boundary=4,T.storage=4):s.isVector2?(T.boundary=8,T.storage=8):s.isVector3||s.isColor?(T.boundary=16,T.storage=12):s.isVector4?(T.boundary=16,T.storage=16):s.isMatrix3?(T.boundary=48,T.storage=48):s.isMatrix4?(T.boundary=64,T.storage=64):s.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(s)?(T.boundary=16,T.storage=s.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",s),T}function A(s){let T=s.target;T.removeEventListener("dispose",A);let R=o.indexOf(T.__bindingPointIndex);o.splice(R,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function B(){for(let s in a)e.deleteBuffer(a[s]);o=[],a={},n={}}return{bind:c,update:u,dispose:B}}var yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function bg(){return Bi===null&&(Bi=new ru(yg,16,16,Rr,Xi),Bi.name="DFG_LUT",Bi.minFilter=ii,Bi.magFilter=ii,Bi.wrapS=ir,Bi.wrapT=ir,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Tg=class{constructor(e={}){let{canvas:t=Cc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:_=!1,outputBufferType:d=vi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=n;let y=d,b=new Set([vo,_o,go]),M=new Set([vi,Wi,Ca,Pa,fo,mo]),p=new Uint32Array(4),A=new Int32Array(4),B=new O,s=null,T=null,R=[],w=[],l=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,Y=!1,L=null,F=null,Q=null,U=null;this._outputColorSpace=Si;let X=0,re=0,q=null,pe=-1,$=null,ee=new Ut,ie=new Ut,Ze=null,Ie=new Ke(0),St=0,qe=t.width,J=t.height,oe=1,ce=null,Le=null,ze=new Ut(0,0,qe,J),xe=new Ut(0,0,qe,J),at=!1,dt=new yo,Xe=!1,ft=!1,Yt=new At,ri=new O,mt=new Ut,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function It(){return q===null?oe:1}let I=i;function Ft(S,C){return t.getContext(S,C)}let ot,Et,E,x,P,K,ae,de,ve,N,he,ge,we,ne,Pe,Ue,Re,pt,D,te,m,k,G;try{let S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){let C="webgl2";if(I=Ft(C,S),I===null)throw Ft(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}z()}catch(S){throw t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ut("WebGLRenderer: "+S.message),S}function z(){ot=new bf(I),ot.init(),m=new mg(I,ot),Et=new ff(I,ot,e,m),E=new pg(I,ot),Et.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),F=I.createFramebuffer(),Q=I.createFramebuffer(),U=I.createFramebuffer(),x=new Rf(I),P=new Qm,K=new fg(I,ot,E,P,Et,m,x),ae=new yf(g),de=new Au(I),k=new df(I,de),ve=new Tf(I,de,x,k),N=new Cf(I,ve,de,k,x),pt=new Af(I,Et,K),Pe=new mf(P),he=new $m(g,ae,ot,Et,k,Pe),ge=new Sg(g,P),we=new tg,ne=new og(ot),Re=new uf(g,ae,E,N,v,h),Ue=new dg(g,N,Et),G=new Eg(I,x,Et,E),D=new pf(I,ot,x),te=new wf(I,ot,x),x.programs=he.programs,g.capabilities=Et,g.extensions=ot,g.properties=P,g.renderLists=we,g.shadowMap=Ue,g.state=E,g.info=x}y!==vi&&(l=new If(y,t.width,t.height,o,r,a));let Z=new Mg(g,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(S){S!==void 0&&(oe=S,this.setSize(qe,J,!1))},this.getSize=function(S){return S.set(qe,J)},this.setSize=function(S,C,j=!0){if(Z.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=S,J=C,t.width=Math.floor(S*oe),t.height=Math.floor(C*oe),j===!0&&(t.style.width=S+"px",t.style.height=C+"px"),l!==null&&l.setSize(t.width,t.height),this.setViewport(0,0,S,C)},this.getDrawingBufferSize=function(S){return S.set(qe*oe,J*oe).floor()},this.setDrawingBufferSize=function(S,C,j){qe=S,J=C,oe=j,t.width=Math.floor(S*j),t.height=Math.floor(C*j),this.setViewport(0,0,S,C)},this.setEffects=function(S){if(y===vi){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let C=0;C<S.length;C++)if(S[C].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}l.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(ze)},this.setViewport=function(S,C,j,W){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,C,j,W),E.viewport(ee.copy(ze).multiplyScalar(oe).round())},this.getScissor=function(S){return S.copy(xe)},this.setScissor=function(S,C,j,W){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,C,j,W),E.scissor(ie.copy(xe).multiplyScalar(oe).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(S){E.setScissorTest(at=S)},this.setOpaqueSort=function(S){ce=S},this.setTransparentSort=function(S){Le=S},this.getClearColor=function(S){return S.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(S=!0,C=!0,j=!0){let W=0;if(S){let H=!1;if(q!==null){let le=q.texture.format;H=b.has(le)}if(H){let le=q.texture.type,fe=M.has(le),_e=Re.getClearColor(),Se=Re.getClearAlpha(),De=_e.r,He=_e.g,Ne=_e.b;fe?(p[0]=De,p[1]=He,p[2]=Ne,p[3]=Se,I.clearBufferuiv(I.COLOR,0,p)):(A[0]=De,A[1]=He,A[2]=Ne,A[3]=Se,I.clearBufferiv(I.COLOR,0,A))}else W|=I.COLOR_BUFFER_BIT}C&&(W|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Re.dispose(),we.dispose(),ne.dispose(),P.dispose(),ae.dispose(),N.dispose(),k.dispose(),G.dispose(),he.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Qt),Z.removeEventListener("sessionend",Ui),Ae.stop()};function V(S){S.preventDefault(),Tn("WebGLRenderer: Context Lost."),Y=!0}function be(){Tn("WebGLRenderer: Context Restored."),Y=!1;let S=x.autoReset,C=Ue.enabled,j=Ue.autoUpdate,W=Ue.needsUpdate,H=Ue.type;z(),x.autoReset=S,Ue.enabled=C,Ue.autoUpdate=j,Ue.needsUpdate=W,Ue.type=H}function ue(S){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ye(S){let C=S.target;C.removeEventListener("dispose",ye),Fe(C)}function Fe(S){Be(S),P.remove(S)}function Be(S){let C=P.get(S).programs;C!==void 0&&(C.forEach(function(j){he.releaseProgram(j)}),S.isShaderMaterial&&he.releaseShaderCache(S))}this.renderBufferDirect=function(S,C,j,W,H,le){C===null&&(C=Nt);let fe=H.isMesh&&H.matrixWorld.determinantAffine()<0,_e=Ot(S,C,j,W,H);E.setMaterial(W,fe);let Se=j.index,De=1;if(W.wireframe===!0){if(Se=ve.getWireframeAttribute(j),Se===void 0)return;De=2}let He=j.drawRange,Ne=j.attributes.position,Ce=He.start*De,tt=(He.start+He.count)*De;le!==null&&(Ce=Math.max(Ce,le.start*De),tt=Math.min(tt,(le.start+le.count)*De)),Se!==null?(Ce=Math.max(Ce,0),tt=Math.min(tt,Se.count)):Ne!=null&&(Ce=Math.max(Ce,0),tt=Math.min(tt,Ne.count));let it=tt-Ce;if(it<0||it===1/0)return;k.setup(H,W,_e,j,Se);let nt,ht=D;if(Se!==null&&(nt=de.get(Se),ht=te,ht.setIndex(nt)),H.isMesh)W.wireframe===!0?(E.setLineWidth(W.wireframeLinewidth*It()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(H.isLine){let st=W.linewidth;st===void 0&&(st=1),E.setLineWidth(st*It()),H.isLineSegments?ht.setMode(I.LINES):H.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else H.isPoints?ht.setMode(I.POINTS):H.isSprite&&ht.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let st=H._multiDrawStarts,Te=H._multiDrawCounts,Lt=H._multiDrawCount,Bt=Se?de.get(Se).bytesPerElement:1,Tt=P.get(W).currentProgram.getUniforms();for(let Ct=0;Ct<Lt;Ct++)Tt.setValue(I,"_gl_DrawID",Ct),ht.render(st[Ct]/Bt,Te[Ct])}else if(H.isInstancedMesh)ht.renderInstances(Ce,it,H.count);else if(j.isInstancedBufferGeometry){let st=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Te=Math.min(j.instanceCount,st);ht.renderInstances(Ce,it,Te)}else ht.render(Ce,it)};function gt(S,C,j,W){L!==null&&S.isNodeMaterial&&L.setObject(W,S),Xe===!0&&Pe.setState(S,j,!1),S.transparent===!0&&S.side===bt&&S.forceSinglePass===!1?(S.side=pi,S.needsUpdate=!0,Ge(S,C,W),S.side=Tr,S.needsUpdate=!0,Ge(S,C,W),S.side=bt):Ge(S,C,W)}this.compile=function(S,C,j=null){j===null&&(j=S),L!==null&&L.renderStart(S,C,j),T=ne.get(j),T.init(C),w.push(T),j.traverseVisible(function(H){H.isLight&&H.layers.test(C.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==j&&S.traverseVisible(function(H){H.isLight&&H.layers.test(C.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ft=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,ft),Xe===!0&&Pe.setGlobalState(this.clippingPlanes,C),L!==null&&Ue.render(T.state.shadowsArray,j,C);let W=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let le=H.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){let _e=le[fe];gt(_e,j,C,H),W.add(_e)}else gt(le,j,C,H),W.add(le)}),T=w.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(S,C,j=null){let W=this.compile(S,C,j);return new Promise(H=>{function le(){if(W.forEach(function(fe){let _e=P.get(fe).currentProgram;(_e===void 0||_e.isReady())&&W.delete(fe)}),W.size===0){H(S);return}setTimeout(le,10)}ot.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let wt=null;function qt(S){wt&&wt(S)}function Qt(){Ae.stop()}function Ui(){Ae.start()}let Ae=new Rh;Ae.setAnimationLoop(qt),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(S){wt=S,Z.setAnimationLoop(S),S===null?Ae.stop():Ae.start()},Z.addEventListener("sessionstart",Qt),Z.addEventListener("sessionend",Ui),this.render=function(S,C){if(C!==void 0&&C.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;L!==null&&L.renderStart(S,C);let j=Z.enabled===!0&&Z.isPresenting===!0,W=l!==null&&(q===null||j)&&l.begin(g,q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(l===null||l.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(C),C=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,C,q),T=ne.get(S,w.length),T.init(C),T.state.textureUnits=K.getTextureUnits(),w.push(T),Yt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),dt.setFromProjectionMatrix(Yt,ki,C.reversedDepth),ft=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,ft),s=we.get(S,R.length),s.init(),R.push(s),Z.enabled===!0&&Z.isPresenting===!0){let le=g.xr.getDepthSensingMesh();le!==null&&hi(le,C,-1/0,g.sortObjects)}hi(S,C,0,g.sortObjects),s.finish(),L!==null&&L.updateLights(T.state.lightsArray),g.sortObjects===!0&&s.sort(ce,Le),Pt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Pt&&Re.addToRenderList(s,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Pe.beginShadows();let H=T.state.shadowsArray;if(Ue.render(H,S,C),Xe===!0&&Pe.endShadows(),(W&&l.hasRenderPass())===!1){let le=s.opaque,fe=s.transmissive;if(T.setupLights(),C.isArrayCamera){let _e=C.cameras;if(fe.length>0)for(let Se=0,De=_e.length;Se<De;Se++){let He=_e[Se];Ti(le,fe,S,He)}Pt&&Re.render(S);for(let Se=0,De=_e.length;Se<De;Se++){let He=_e[Se];Ni(s,S,He,He.viewport)}}else fe.length>0&&Ti(le,fe,S,C),Pt&&Re.render(S),Ni(s,S,C)}q!==null&&re===0&&(K.updateMultisampleRenderTarget(q),K.updateRenderTargetMipmap(q)),W&&l.end(g),S.isScene===!0&&S.onAfterRender(g,S,C),k.resetDefaultState(),pe=-1,$=null,w.pop(),w.length>0?(T=w[w.length-1],K.setTextureUnits(T.state.textureUnits),Xe===!0&&Pe.setGlobalState(g.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?s=R[R.length-1]:s=null,L!==null&&L.renderEnd()};function hi(S,C,j,W){if(S.visible===!1)return;if(S.layers.test(C.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(C);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(dt)){W&&mt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Yt);let le=N.update(S),fe=S.material;fe.visible&&s.push(S,le,fe,j,mt.z,null,C)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(dt))){let le=N.update(S),fe=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),mt.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),mt.copy(le.boundingSphere.center)),mt.applyMatrix4(S.matrixWorld).applyMatrix4(Yt)),Array.isArray(fe)){let _e=le.groups;for(let Se=0,De=_e.length;Se<De;Se++){let He=_e[Se],Ne=fe[He.materialIndex];Ne&&Ne.visible&&s.push(S,le,Ne,j,mt.z,He,C)}}else fe.visible&&s.push(S,le,fe,j,mt.z,null,C)}}let H=S.children;for(let le=0,fe=H.length;le<fe;le++)hi(H[le],C,j,W)}function Ni(S,C,j,W){let{opaque:H,transmissive:le,transparent:fe}=S;T.setupLightsView(j),Xe===!0&&Pe.setGlobalState(g.clippingPlanes,j),W&&E.viewport(ee.copy(W)),H.length>0&&ci(H,C,j),le.length>0&&ci(le,C,j),fe.length>0&&ci(fe,C,j),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ti(S,C,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Ne=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:Ne?Xi:vi,minFilter:Er,samples:Math.max(4,Et.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let H=T.state.transmissionRenderTarget[W.id],le=W.viewport||ee;H.setSize(le.z*g.transmissionResolutionScale,le.w*g.transmissionResolutionScale);let fe=g.getRenderTarget(),_e=g.getActiveCubeFace(),Se=g.getActiveMipmapLevel();g.setRenderTarget(H),g.getClearColor(Ie),St=g.getClearAlpha(),St<1&&g.setClearColor(16777215,.5),g.clear(),Pt&&Re.render(j);let De=g.toneMapping;g.toneMapping=Vi;let He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Xe===!0&&Pe.setGlobalState(g.clippingPlanes,W),ci(S,j,W),K.updateMultisampleRenderTarget(H),K.updateRenderTargetMipmap(H),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ce=0,tt=C.length;Ce<tt;Ce++){let it=C[Ce],{object:nt,geometry:ht,material:st,group:Te}=it;if(st.side===bt&&nt.layers.test(W.layers)){let Lt=st.side;st.side=pi,st.needsUpdate=!0,je(nt,j,W,ht,st,Te),st.side=Lt,st.needsUpdate=!0,Ne=!0}}Ne===!0&&(K.updateMultisampleRenderTarget(H),K.updateRenderTargetMipmap(H))}g.setRenderTarget(fe,_e,Se),g.setClearColor(Ie,St),He!==void 0&&(W.viewport=He),g.toneMapping=De}function ci(S,C,j){let W=C.isScene===!0?C.overrideMaterial:null;for(let H=0,le=S.length;H<le;H++){let fe=S[H],{object:_e,geometry:Se,group:De}=fe,He=fe.material;He.allowOverride===!0&&W!==null&&(He=W),_e.layers.test(j.layers)&&je(_e,C,j,Se,He,De)}}function je(S,C,j,W,H,le){L!==null&&H.isNodeMaterial&&L.setObject(S,H),S.onBeforeRender(g,C,j,W,H,le),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(g,C,j,W,S,le),H.transparent===!0&&H.side===bt&&H.forceSinglePass===!1?(H.side=pi,H.needsUpdate=!0,g.renderBufferDirect(j,C,W,H,S,le),H.side=Tr,H.needsUpdate=!0,g.renderBufferDirect(j,C,W,H,S,le),H.side=bt):g.renderBufferDirect(j,C,W,H,S,le),S.onAfterRender(g,C,j,W,H,le)}function Ge(S,C,j){C.isScene!==!0&&(C=Nt);let W=P.get(S),H=T.state.lights,le=T.state.shadowsArray,fe=H.state.version,_e=he.getParameters(S,H.state,le,C,j,T.state.lightProbeGridArray),Se=he.getProgramCacheKey(_e),De=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,W.fog=C.fog;let He=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=ae.get(S.envMap||W.environment,He),W.envMapRotation=W.environment!==null&&S.envMap===null?C.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",ye),De=new Map,W.programs=De);let Ne=De.get(Se);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===fe)return Dt(S,_e),Ne}else _e.uniforms=he.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,j,_e),S.onBeforeCompile(_e,g),Ne=he.acquireProgram(_e,Se),De.set(Se,Ne),W.uniforms=_e.uniforms;let Ce=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Pe.uniform),Dt(S,_e),W.needsLights=Kt(S),W.lightsStateVersion=fe,W.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.sunLights.value=H.state.sun,Ce.sunLightShadows.value=H.state.sunShadow,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.sunShadowMatrix.value=H.state.sunShadowMatrix,Ce.sunShadowCascade.value=H.state.sunShadowCascade,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=Ne,W.uniformsList=null,Ne}function _t(S){if(S.uniformsList===null){let C=S.currentProgram.getUniforms();S.uniformsList=Mn.seqWithValue(C.seq,S.uniforms)}return S.uniformsList}function Dt(S,C){let j=P.get(S);j.outputColorSpace=C.outputColorSpace,j.batching=C.batching,j.batchingColor=C.batchingColor,j.instancing=C.instancing,j.instancingColor=C.instancingColor,j.instancingMorph=C.instancingMorph,j.skinning=C.skinning,j.morphTargets=C.morphTargets,j.morphNormals=C.morphNormals,j.morphColors=C.morphColors,j.morphTargetsCount=C.morphTargetsCount,j.numClippingPlanes=C.numClippingPlanes,j.numIntersection=C.numClipIntersection,j.vertexAlphas=C.vertexAlphas,j.vertexTangents=C.vertexTangents,j.toneMapping=C.toneMapping}function mi(S,C){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;B.setFromMatrixPosition(C.matrixWorld);for(let j=0,W=S.length;j<W;j++){let H=S[j];if(H.texture!==null&&H.boundingBox.containsPoint(B))return H}return null}function Ot(S,C,j,W,H){C.isScene!==!0&&(C=Nt),K.resetTextureUnits();let le=C.fog,fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?C.environment:null,_e=q===null?g.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:lt.workingColorSpace,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=ae.get(W.envMap||fe,Se),He=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,it=!!j.morphAttributes.color,nt=Vi;W.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(nt=g.toneMapping);let ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=ht!==void 0?ht.length:0,Te=P.get(W),Lt=T.state.lights;if(Xe===!0&&(ft===!0||S!==$)){let se=S===$&&W.id===pe;Pe.setState(W,S,se)}let Bt=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Lt.state.version||Te.outputColorSpace!==_e||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==De||W.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Pe.numPlanes||Te.numIntersection!==Pe.numIntersection)||Te.vertexAlphas!==He||Te.vertexTangents!==Ne||Te.morphTargets!==Ce||Te.morphNormals!==tt||Te.morphColors!==it||Te.toneMapping!==nt||Te.morphTargetsCount!==st||!!Te.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,Te.__version=W.version);let Tt=Te.currentProgram;Bt===!0&&(Tt=Ge(W,C,H),L&&W.isNodeMaterial&&L.onUpdateProgram(W,Tt,Te));let Ct=!1,Zt=!1,Mi=!1,ct=Tt.getUniforms(),yt=Te.uniforms;if(E.useProgram(Tt.program)&&(Ct=!0,Zt=!0,Mi=!0),W.id!==pe&&(pe=W.id,Zt=!0),Te.needsLights){let se=mi(T.state.lightProbeGridArray,H);Te.lightProbeGrid!==se&&(Te.lightProbeGrid=se,Zt=!0)}if(Ct||$!==S){E.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",S.projectionMatrix),ct.setValue(I,"viewMatrix",S.matrixWorldInverse);let se=ct.map.cameraPosition;se!==void 0&&se.setValue(I,ri.setFromMatrixPosition(S.matrixWorld)),Et.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,Zt=!0,Mi=!0)}if(Te.needsLights&&(Lt.state.sunShadowMap.length>0&&ct.setValue(I,"sunShadowMap",Lt.state.sunShadowMap,K),Lt.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Lt.state.directionalShadowMap,K),Lt.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Lt.state.spotShadowMap,K),Lt.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Lt.state.pointShadowMap,K)),H.isSkinnedMesh){ct.setOptional(I,H,"bindMatrix"),ct.setOptional(I,H,"bindMatrixInverse");let se=H.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),ct.setValue(I,"boneTexture",se.boneTexture,K))}H.isBatchedMesh&&(ct.setOptional(I,H,"batchingTexture"),ct.setValue(I,"batchingTexture",H._matricesTexture,K),ct.setOptional(I,H,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",H._indirectTexture,K),ct.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",H._colorsTexture,K));let ui=j.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&pt.update(H,j,Tt),(Zt||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,ct.setValue(I,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&C.environment!==null&&(yt.envMapIntensity.value=C.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=bg()),Zt){if(ct.setValue(I,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&wi(yt,Mi),le&&W.fog===!0&&ge.refreshFogUniforms(yt,le),ge.refreshMaterialUniforms(yt,W,oe,J,T.state.transmissionRenderTarget[S.id]),Te.needsLights&&Te.lightProbeGrid){let se=Te.lightProbeGrid;yt.probesSH.value=se.texture,yt.probesMin.value.copy(se.boundingBox.min),yt.probesMax.value.copy(se.boundingBox.max),yt.probesResolution.value.copy(se.resolution)}Mn.upload(I,_t(Te),yt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Mn.upload(I,_t(Te),yt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(I,"center",H.center),ct.setValue(I,"modelViewMatrix",H.modelViewMatrix),ct.setValue(I,"normalMatrix",H.normalMatrix),ct.setValue(I,"modelMatrix",H.matrixWorld),W.uniformsGroups!==void 0){let se=W.uniformsGroups;for(let We=0,Ye=se.length;We<Ye;We++){let me=se[We];G.update(me,Tt),G.bind(me,Tt)}}return Tt}function wi(S,C){S.ambientLightColor.needsUpdate=C,S.lightProbe.needsUpdate=C,S.sunLights.needsUpdate=C,S.sunLightShadows.needsUpdate=C,S.directionalLights.needsUpdate=C,S.directionalLightShadows.needsUpdate=C,S.pointLights.needsUpdate=C,S.pointLightShadows.needsUpdate=C,S.spotLights.needsUpdate=C,S.spotLightShadows.needsUpdate=C,S.rectAreaLights.needsUpdate=C,S.hemisphereLights.needsUpdate=C}function Kt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(S,C,j){let W=P.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),P.get(S.texture).__webglTexture=C,P.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,C){let j=P.get(S);j.__webglFramebuffer=C,j.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(S,C=0,j=0){q=S,X=C,re=j;let W=null,H=!1,le=!1;if(S){let fe=P.get(S);if(fe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),ee.copy(S.viewport),ie.copy(S.scissor),Ze=S.scissorTest,E.viewport(ee),E.scissor(ie),E.setScissorTest(Ze),pe=-1;return}else if(fe.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(fe.__hasExternalTextures)K.rebindTextures(S,P.get(S.texture).__webglTexture,P.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let De=S.depthTexture;if(fe.__boundDepthTexture!==De){if(De!==null&&P.has(De)&&(S.width!==De.image.width||S.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}let _e=S.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(le=!0);let Se=P.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[C])?W=Se[C][j]:W=Se[C],H=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?W=P.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?W=Se[j]:W=Se,ee.copy(S.viewport),ie.copy(S.scissor),Ze=S.scissorTest}else ee.copy(ze).multiplyScalar(oe).floor(),ie.copy(xe).multiplyScalar(oe).floor(),Ze=at;if(j!==0&&(W=F),E.bindFramebuffer(I.FRAMEBUFFER,W)&&E.drawBuffers(S,W),E.viewport(ee),E.scissor(ie),E.setScissorTest(Ze),H){let fe=P.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,j)}else if(le){let fe=C;for(let _e=0;_e<S.textures.length;_e++){let Se=P.get(S.textures[_e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+_e,Se.__webglTexture,j,fe)}}else if(S!==null&&j!==0){let fe=P.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,j)}pe=-1};function Ri(S){let C=P.get(S);return(C.__readFormat!==S.format||C.__readType!==S.type)&&(C.__readFormat=S.format,C.__readType=S.type,C.__formatReadable=Et.textureFormatReadable(S.format),C.__typeReadable=Et.textureTypeReadable(S.type)),C}this.readRenderTargetPixels=function(S,C,j,W,H,le,fe,_e=0){if(!(S&&S.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){E.bindFramebuffer(I.FRAMEBUFFER,Se);try{let De=S.textures[_e],He=De.format,Ne=De.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e);let Ce=Ri(De);if(Ce.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=S.width-W&&j>=0&&j<=S.height-H&&I.readPixels(C,j,W,H,m.convert(He),m.convert(Ne),le)}finally{let De=q!==null?P.get(q).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,C,j,W,H,le,fe,_e=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se)if(C>=0&&C<=S.width-W&&j>=0&&j<=S.height-H){E.bindFramebuffer(I.FRAMEBUFFER,Se);let De=S.textures[_e],He=De.format,Ne=De.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e);let Ce=Ri(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(C,j,W,H,m.convert(He),m.convert(Ne),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let it=q!==null?P.get(q).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,it);let nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pc(I,nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(tt),I.deleteSync(nt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,C=null,j=0){let W=Math.pow(2,-j),H=Math.floor(S.image.width*W),le=Math.floor(S.image.height*W),fe=C!==null?C.x:0,_e=C!==null?C.y:0;K.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,fe,_e,H,le),E.unbindTexture()},this.copyTextureToTexture=function(S,C,j=null,W=null,H=0,le=0){let fe,_e,Se,De,He,Ne,Ce,tt,it,nt=S.isCompressedTexture?S.mipmaps[le]:S.image;if(j!==null)fe=j.max.x-j.min.x,_e=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,He=j.min.y,Ne=j.isBox3?j.min.z:0;else{let yt=Math.pow(2,-H);fe=Math.floor(nt.width*yt),_e=Math.floor(nt.height*yt),S.isDataArrayTexture?Se=nt.depth:S.isData3DTexture?Se=Math.floor(nt.depth*yt):Se=1,De=0,He=0,Ne=0}W!==null?(Ce=W.x,tt=W.y,it=W.z):(Ce=0,tt=0,it=0);let ht=m.convert(C.format),st=m.convert(C.type),Te;C.isData3DTexture?(K.setTexture3D(C,0),Te=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(K.setTexture2DArray(C,0),Te=I.TEXTURE_2D_ARRAY):(K.setTexture2D(C,0),Te=I.TEXTURE_2D),E.activeTexture(I.TEXTURE0),E.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),E.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),E.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);let Lt=E.getParameter(I.UNPACK_ROW_LENGTH),Bt=E.getParameter(I.UNPACK_IMAGE_HEIGHT),Tt=E.getParameter(I.UNPACK_SKIP_PIXELS),Ct=E.getParameter(I.UNPACK_SKIP_ROWS),Zt=E.getParameter(I.UNPACK_SKIP_IMAGES);E.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),E.pixelStorei(I.UNPACK_SKIP_PIXELS,De),E.pixelStorei(I.UNPACK_SKIP_ROWS,He),E.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne);let Mi=S.isDataArrayTexture||S.isData3DTexture,ct=C.isDataArrayTexture||C.isData3DTexture;if(S.isDepthTexture){let yt=P.get(S),ui=P.get(C),se=P.get(yt.__renderTarget),We=P.get(ui.__renderTarget);E.bindFramebuffer(I.READ_FRAMEBUFFER,se.__webglFramebuffer),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ye=0;Ye<Se;Ye++)Mi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,P.get(S).__webglTexture,H,Ne+Ye),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,P.get(C).__webglTexture,le,it+Ye)),I.blitFramebuffer(De,He,fe,_e,Ce,tt,fe,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||P.has(S)){let yt=P.get(S),ui=P.get(C);E.bindFramebuffer(I.READ_FRAMEBUFFER,Q),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let se=0;se<Se;se++)Mi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,H,Ne+se):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,H),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ui.__webglTexture,le,it+se):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ui.__webglTexture,le),H!==0?I.blitFramebuffer(De,He,fe,_e,Ce,tt,fe,_e,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(Te,le,Ce,tt,it+se,De,He,fe,_e):I.copyTexSubImage2D(Te,le,Ce,tt,De,He,fe,_e);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Te,le,Ce,tt,it,fe,_e,Se,ht,st,nt.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,le,Ce,tt,it,fe,_e,Se,ht,nt.data):I.texSubImage3D(Te,le,Ce,tt,it,fe,_e,Se,ht,st,nt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,Ce,tt,fe,_e,ht,st,nt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,Ce,tt,nt.width,nt.height,ht,nt.data):I.texSubImage2D(I.TEXTURE_2D,le,Ce,tt,fe,_e,ht,st,nt);E.pixelStorei(I.UNPACK_ROW_LENGTH,Lt),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt),E.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),E.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),E.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),le===0&&C.generateMipmaps&&I.generateMipmap(Te),E.unbindTexture()},this.initRenderTarget=function(S){P.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){X=0,re=0,q=null,E.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}},Ol={type:"change"},Ro={type:"start"},Nh={type:"end"},un=new Ua,Bl=new tr,wg=Math.cos(70*Lc.DEG2RAD),kt=new O,di=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gs=1e-6,Rg=class extends wu{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new fr,this._lastTargetPosition=new O,this._quat=new fr().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pl,this._sphericalDelta=new pl,this._scale=1,this._panOffset=new O,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new O,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cg.bind(this),this._onPointerDown=Ag.bind(this),this._onPointerUp=Pg.bind(this),this._onContextMenu=Og.bind(this),this._onMouseWheel=Lg.bind(this),this._onKeyDown=Ug.bind(this),this._onTouchStart=Ng.bind(this),this._onTouchMove=Fg.bind(this),this._onMouseDown=Ig.bind(this),this._onMouseMove=Dg.bind(this),this._interceptControlDown=Bg.bind(this),this._interceptControlUp=zg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ol),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=di:i>Math.PI&&(i-=di),r<-Math.PI?r+=di:r>Math.PI&&(r-=di),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let o=kt.length();n=this._clampDistance(o*this._scale);let h=o-n;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),n=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(un.origin.copy(this.object.position),un.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(un.direction))<wg?this.object.lookAt(this.target):(Bl.setFromNormalAndCoplanarPoint(this.object.up,this.target),un.intersectPlane(Bl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>gs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gs||this._lastTargetPosition.distanceToSquared(this.target)>gs?(this.dispatchEvent(Ol),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?di/60*this.autoRotateSpeed*e:di/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;kt.copy(r).sub(this.target);let a=kt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,o=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(n,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ag(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Cg(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Pg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nh),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Ig(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Mt.DOLLY;break;case $r.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Mt.ROTATE}break;case $r.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ro)}function Dg(e){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Lg(e){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(e.preventDefault(),this.dispatchEvent(Ro),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Nh))}function Ug(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ng(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Mt.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Mt.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ro)}function Fg(e){switch(this._trackPointer(e),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Mt.NONE}}function Og(e){this.enabled!==!1&&e.preventDefault()}function Bg(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zl(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new Yc;a.background=new Ke(16777215);let n=t.clientWidth||900,o=t.clientHeight||480,h=new Ei(35,n/o,.1,100);h.position.set(8.5,4.2,7.5);let c=new Tg({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setSize(n,o),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=uo,c.toneMappingExposure=1.15,c.shadowMap.enabled=!0,c.shadowMap.type=wa,t.appendChild(c.domElement);let u=new Rg(h,c.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.maxPolarAngle=Math.PI/2-.05,u.minDistance=2,u.maxDistance=28,u.target.set(0,0,0),u.autoRotate=!0,u.autoRotateSpeed=.6;let f=null,_=()=>{u.autoRotate=!1,clearTimeout(f),f=setTimeout(()=>{Re.autoRotate&&(u.autoRotate=!0)},6e3)};c.domElement.addEventListener("pointerdown",_),c.domElement.addEventListener("wheel",_,{passive:!0}),c.domElement.addEventListener("touchstart",_,{passive:!0});let d=new xu(16777215,.9);a.add(d);let v=new hs(16777215,1.25);v.position.set(12,16,14),v.castShadow=!0,v.shadow.mapSize.width=1024,v.shadow.mapSize.height=1024,v.shadow.bias=-5e-4,a.add(v);let y=new hs(14412542,.7);y.position.set(-14,8,-10),a.add(y);let b=new hs(15793652,.6);b.position.set(0,18,0),a.add(b);let M=new bo(30,30),p=new hu({opacity:.12}),A=new Ht(M,p);A.rotation.x=-Math.PI/2,A.position.y=-1.65,A.receiveShadow=!0,a.add(A);let B=new Tu(24,24,14870768,15857145);B.position.y=-1.64,a.add(B);let s={aluFrame:new Rt({color:13949149,metalness:.8,roughness:.25,side:bt}),galvSteel:new Rt({color:12897749,metalness:.65,roughness:.45,side:bt}),stainless:new Rt({color:14870768,metalness:.95,roughness:.15,side:bt}),baseSkid:new Rt({color:9741240,metalness:.75,roughness:.35,side:bt}),panelSolid:new Rt({color:16317180,metalness:.15,roughness:.35,side:bt}),panelCutaway:new mu({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:bt}),fanHousing:new Rt({color:165063,metalness:.6,roughness:.3,side:bt}),fanImpeller:new Rt({color:3718648,metalness:.75,roughness:.25,side:bt}),motorCast:new Rt({color:1976635,metalness:.85,roughness:.3,side:bt}),copperPipe:new Rt({color:12730636,metalness:.9,roughness:.2,side:bt}),coolingFin:new Rt({color:3718648,metalness:.55,roughness:.35,side:bt}),heatingFin:new Rt({color:16281969,metalness:.55,roughness:.35,side:bt}),rotorWheel:new Rt({color:6583435,metalness:.7,roughness:.4,side:bt}),filterCloth:new Rt({color:16317180,roughness:.95,metalness:.05,side:bt}),filterG4:new Rt({color:14870768,roughness:.9,metalness:.05,side:bt}),damperBlade:new Rt({color:9741240,metalness:.8,roughness:.25,side:bt}),actuatorOrange:new Rt({color:15357964,metalness:.2,roughness:.4}),drainPan:new Rt({color:14870768,metalness:.95,roughness:.15,side:bt}),doorHandle:new Rt({color:988970,metalness:.8,roughness:.3}),rubberBlack:new Rt({color:988970,roughness:.85,metalness:.1,side:bt}),brassGold:new Rt({color:14251782,metalness:.85,roughness:.25}),springSilver:new Rt({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new Rt({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new Rt({color:16777215,roughness:.2}),touchscreen:new wn({color:165063})},T=[],R=[],w=new Vt;a.add(w);function l(m,k,G,z,Z=0,V=0,be=0,ue=!0,ye=!0){let Fe=new Pn(m,k,G),Be=new Ht(Fe,z);return Be.position.set(Z,V,be),Be.castShadow=ue,Be.receiveShadow=ye,Be}function g(m,k,G,z,Z,V=0,be=0,ue=0,ye=0,Fe=0,Be=!1){let gt=new so(m,k,G,z,1,Be),wt=new Ht(gt,Z);return wt.position.set(V,be,ue),ye&&(wt.rotation.x=ye),Fe&&(wt.rotation.z=Fe),wt.castShadow=!0,wt.receiveShadow=!0,wt}function Y(m,k=s.panelSolid,G=s.panelCutaway){return m.userData.solidMat=k,m.userData.cutawayMat=G,R.push(m),m}function L(m){let k=-1.4100000000000001,G=l(8.4+.2,.22,.1,s.baseSkid,0,k,1-.05),z=l(8.4+.2,.22,.1,s.baseSkid,0,k,-1+.05);m.add(G,z);let Z=[-4.2,-2.5,-.8,.8,2.5,4.2];Z.forEach(me=>{m.add(l(.12,.22,2-.2,s.baseSkid,me,k,0))}),[-2.5,.8].forEach(me=>{m.add(l(.28,.12,.12,s.aluFrame,me,k,1-.04)),m.add(l(.28,.12,.12,s.aluFrame,me,k,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([me,Je])=>{m.add(l(.08,.18,.08,s.yellowSafety,me,k+.06,Je))});let V=.08;m.add(l(8.4,V,V,s.aluFrame,0,-1.3+V/2,1-V/2),l(8.4,V,V,s.aluFrame,0,-1.3+V/2,-1+V/2),l(8.4,V,V,s.aluFrame,0,1.3-V/2,1-V/2),l(8.4,V,V,s.aluFrame,0,1.3-V/2,-1+V/2)),Z.forEach(me=>{m.add(l(V,2.6,V,s.aluFrame,me,0,1-V/2),l(V,2.6,V,s.aluFrame,me,0,-1+V/2),l(V,V,2-V*2,s.aluFrame,me,1.3-V/2,0),l(V,V,2-V*2,s.aluFrame,me,-1.3+V/2,0))});let be=5,ue=l(be,.05,2-.16,s.galvSteel,-4.2+be/2,0,0);m.add(ue),m.add(l(8.4-.1,2.6-.1,.05,s.panelSolid,0,0,-1+.04)),m.add(l(8.4-.1,.05,2-.16,s.galvSteel,0,-1.3+.03,0)),m.add(l(.05,2.6-.1,2-.16,s.panelSolid,4.2-.03,0,0));let ye=l(.18,1.2,1.2,s.galvSteel,4.2+.09,-.2,0);m.add(ye),m.add(l(.05,2.6-.1,2-.16,s.panelSolid,-4.2+.03,0,0));let Fe=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],Be=[1.7,1.7,1.6,1.7,1.7];Fe.forEach((me,Je)=>{let Ve=Be[Je]-.08,Gt=l(Ve,.04,2-.16,s.panelCutaway,me,1.3-.02,0,!1,!1);m.add(Gt),Y(Gt,s.panelSolid,s.panelCutaway);let Ar=l(Ve,2.6-.18,.03,s.panelCutaway,me,0,1-.02,!1,!1);m.add(Ar),Y(Ar,s.panelSolid,s.panelCutaway);let Ai=.04;m.add(l(Ve,Ai,.02,s.aluFrame,me,(2.6-.18)/2,1),l(Ve,Ai,.02,s.aluFrame,me,-2.42/2,1),l(Ai,2.6-.18,.02,s.aluFrame,me-Ve/2,0,1),l(Ai,2.6-.18,.02,s.aluFrame,me+Ve/2,0,1)),[-.45,.45].forEach(ua=>{m.add(l(.04,.14,.05,s.doorHandle,me+Ve/2-.1,ua,1+.02))}),[-.55,.55].forEach(ua=>{m.add(l(.03,.1,.03,s.aluFrame,me-Ve/2+.04,ua,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([me,Je])=>{let Ve=g(.14,.14,.04,24,s.aluFrame,me,Je,1,Math.PI/2),Gt=g(.11,.11,.045,20,s.panelCutaway,me,Je,1,Math.PI/2);m.add(Ve,Gt)}),[[-1.65,.1],[3.35,.35]].forEach(([me,Je])=>{let Ve=g(.08,.08,.03,20,s.aluFrame,me,Je,1.015,Math.PI/2),Gt=g(.07,.07,.035,20,s.gaugeFace,me,Je,1+.015,Math.PI/2);m.add(Ve,Gt),m.add(g(.008,.008,.22,8,s.panelCutaway,me-.03,Je-.12,1+.01)),m.add(g(.008,.008,.22,8,s.panelCutaway,me+.03,Je-.12,1+.01))});let gt=.48,wt=.68,qt=.18,Qt=l(gt,wt,qt,s.galvSteel,2.75,.45,1+qt/2),Ui=l(.24,.16,.01,s.touchscreen,2.75,.56,1+qt+.005),Ae=g(.014,.014,.02,10,s.coolingFin,2.65,.42,1+qt+.01,Math.PI/2),hi=g(.014,.014,.02,10,s.yellowSafety,2.75,.42,1+qt+.01,Math.PI/2),Ni=g(.014,.014,.02,10,s.heatingFin,2.85,.42,1+qt+.01,Math.PI/2),Ti=l(.08,.08,.01,s.yellowSafety,2.75,.3,1+qt+.005),ci=l(.04,.06,.03,s.heatingFin,2.75,.3,1+qt+.02);m.add(Qt,Ui,Ae,hi,Ni,Ti,ci);let je=-1.3/2-.05,Ge=2-.35,_t=.85,Dt=l(.12,_t,Ge,s.aluFrame,-4.2-.06,je,0);m.add(Dt);for(let me=0;me<5;me++){let Je=je-_t/2+.1+me*((_t-.2)/4),Ve=l(.08,.015,Ge-.06,s.damperBlade,-4.2-.06,Je,0);Ve.rotation.z=.55,m.add(Ve)}let mi=l(.16,.2,.14,s.actuatorOrange,-4.2-.06,je,1+.06);m.add(mi);let Ot=l(.1,1.3-.35,2-.35,s.aluFrame,-3.7,je,0),wi=l(.08,1.3-.4,2-.4,s.filterG4,-3.7,je,0);m.add(Ot,wi);let Kt=1.3/2-.05,Ri=l(.12,_t,Ge,s.aluFrame,-4.2-.06,Kt,0);m.add(Ri);for(let me=0;me<5;me++){let Je=Kt-_t/2+.1+me*((_t-.2)/4),Ve=l(.08,.015,Ge-.06,s.damperBlade,-4.2-.06,Je,0);Ve.rotation.z=-.55,m.add(Ve)}let S=l(.16,.2,.14,s.actuatorOrange,-4.2-.06,Kt,1+.06);m.add(S);let C=new Vt;C.position.set(-2.85,Kt,0),m.add(C);let j=g(.38,.3,.12,24,s.aluFrame,.2,0,0,0,Math.PI/2),W=g(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);C.add(j,W);let H=g(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);C.add(H);let le=g(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);C.add(le),T.push(()=>{W.rotation.x+=.14});let fe=l(.1,1.3-.35,2-.35,s.aluFrame,-2.4,je,0);m.add(fe);for(let me=0;me<2;me++)for(let Je=0;Je<3;Je++){let Ve=je-.22+me*.44,Gt=-1+.35+Je*((2-.7)/2),Ar=new Sa(.18,.85,4),Ai=new Ht(Ar,s.filterCloth);Ai.position.set(-1.9,Ve,Gt),Ai.rotation.z=-Math.PI/2,Ai.scale.set(.9,1.2,.7),m.add(Ai)}let _e=new Vt;_e.position.set(0,0,0),m.add(_e);let Se=l(.38,2.6-.2,2-.2,s.aluFrame,0,0,0);m.add(Se);let De=g(1.12,1.12,.32,36,s.aluFrame,0,0,0,0,Math.PI/2),He=g(1.08,1.08,.3,32,s.rotorWheel,0,0,0,0,Math.PI/2);_e.add(De,He);for(let me=0;me<12;me++){let Je=me/12*Math.PI*2,Ve=l(.025,2.12,.02,s.aluFrame,0,0,0);Ve.rotation.x=Je,_e.add(Ve)}let Ne=g(.09,.09,.22,12,s.motorCast,.22,1.05,.75,0,Math.PI/2),Ce=g(.02,.02,.3,8,s.doorHandle,.22,.95,.75);m.add(Ne,Ce),T.push(()=>{_e.rotation.x+=.01});let tt=2-.35,it=1.3-.35,nt=l(.24,it,tt,s.coolingFin,1.15,je,0);m.add(nt),[-.5,.5].forEach(me=>{let Je=g(.045,.045,it+.1,14,s.copperPipe,1.15,je,me);m.add(Je)});for(let me=0;me<8;me++){let Je=je-it/2+.1+me*((it-.2)/7),Ve=new Ht(new nl(.032,.012,8,12,Math.PI),s.copperPipe);Ve.position.set(1.15,Je,1-.18),Ve.rotation.y=Math.PI/2,Ve.rotation.x=Math.PI/2,m.add(Ve)}let ht=l(1.3,.09,tt+.1,s.drainPan,1.5,-1.3+.1,0);m.add(ht);let st=g(.02,.02,.18,10,s.stainless,1.8,-1.3+.06,1-.05,0,0);m.add(st);let Te=l(.12,it,tt,s.aluFrame,1.45,je,0);m.add(Te);for(let me=0;me<12;me++){let Je=-.7+me*((tt-.2)/11),Ve=l(.08,it-.05,.012,s.aluFrame,1.45,je,Je);Ve.rotation.y=.35,m.add(Ve)}let Lt=l(.18,it,tt,s.heatingFin,1.85,je,0);m.add(Lt),[-.4,.4].forEach(me=>{let Je=g(.04,.04,it+.1,14,s.copperPipe,1.85,je,me);m.add(Je)});let Bt=new Vt;Bt.position.set(2.85,je,0),m.add(Bt);let Tt=g(.48,.38,.18,28,s.aluFrame,-.4,0,0,0,Math.PI/2),Ct=g(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);Bt.add(Tt,Ct);let Zt=g(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),Mi=g(.14,.05,.16,16,s.aluFrame,-.25,0,0,0,Math.PI/2);Bt.add(Zt,Mi),T.push(()=>{Zt.rotation.x+=.15});let ct=g(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),yt=l(.14,.12,.14,s.motorCast,.32,.26,0);Bt.add(ct,yt);let ui=l(1.1,.08,.8,s.baseSkid,.05,-it/2+.08,0);Bt.add(ui),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([me,Je])=>{let Ve=l(.12,.03,.12,s.motorCast,me,-it/2+.02,Je),Gt=g(.04,.04,.12,10,s.springSilver,me,-it/2+.08,Je);Bt.add(Ve,Gt)});let se=l(.1,it,tt,s.rubberBlack,2.35,je,0);m.add(se);let We=l(1.2,.03,.03,s.yellowSafety,2.9,je+.4,1-.25),Ye=l(1.2,.03,.03,s.yellowSafety,2.9,je,1-.25);m.add(We,Ye);for(let me=-1;me<=1;me++){let Je=me*.45,Ve=l(.65,it-.1,.22,s.galvSteel,3.8,je,Je),Gt=g(.11,.11,it-.1,16,s.aluFrame,3.47,je,Je);m.add(Ve,Gt)}}function F(m){let k=-1.4100000000000001,G=l(8.6+.2,.22,.1,s.baseSkid,0,k,1-.05),z=l(8.6+.2,.22,.1,s.baseSkid,0,k,-1+.05);m.add(G,z);let Z=[-4.3,-2.6,-.9,.8,2.6,4.3];Z.forEach(se=>{m.add(l(.12,.22,2-.2,s.baseSkid,se,k,0))}),[-2.6,.8].forEach(se=>{m.add(l(.28,.12,.12,s.stainless,se,k,1-.04)),m.add(l(.28,.12,.12,s.stainless,se,k,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([se,We])=>{m.add(l(.08,.18,.08,s.yellowSafety,se,k+.06,We))});let V=.08;m.add(l(8.6,V,V,s.stainless,0,-1.3+V/2,1-V/2),l(8.6,V,V,s.stainless,0,-1.3+V/2,-1+V/2),l(8.6,V,V,s.stainless,0,1.3-V/2,1-V/2),l(8.6,V,V,s.stainless,0,1.3-V/2,-1+V/2)),Z.forEach(se=>{m.add(l(V,2.6,V,s.stainless,se,0,1-V/2),l(V,2.6,V,s.stainless,se,0,-1+V/2),l(V,V,2-V*2,s.stainless,se,1.3-V/2,0),l(V,V,2-V*2,s.stainless,se,-1.3+V/2,0))});let be=5.1,ue=l(be,.05,2-.16,s.stainless,-4.3+be/2,0,0);m.add(ue),m.add(l(8.6-.1,2.6-.1,.04,s.panelSolid,0,0,-1+.03)),m.add(l(8.6-.12,2.6-.12,.01,s.stainless,0,0,-1+.055)),m.add(l(8.6-.1,.05,2-.16,s.stainless,0,-1.3+.03,0));let ye=g(.04,.04,8.6-.2,12,s.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);m.add(ye),m.add(l(.05,2.6-.1,2-.16,s.panelSolid,4.3-.03,0,0));let Fe=l(.18,1.2,1.2,s.stainless,4.3+.09,-.2,0);m.add(Fe),m.add(l(.05,2.6-.1,2-.16,s.panelSolid,-4.3+.03,0,0));let Be=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],gt=[1.7,1.7,1.7,1.8,1.7];Be.forEach((se,We)=>{let Ye=gt[We]-.08,me=l(Ye,.04,2-.16,s.panelCutaway,se,1.3-.02,0,!1,!1);m.add(me),Y(me,s.panelSolid,s.panelCutaway);let Je=l(Ye,2.6-.18,.03,s.panelCutaway,se,0,1-.02,!1,!1);m.add(Je),Y(Je,s.panelSolid,s.panelCutaway);let Ve=.04;m.add(l(Ye,Ve,.02,s.stainless,se,(2.6-.18)/2,1),l(Ye,Ve,.02,s.stainless,se,-2.42/2,1),l(Ve,2.6-.18,.02,s.stainless,se-Ye/2,0,1),l(Ve,2.6-.18,.02,s.stainless,se+Ye/2,0,1)),[-.45,.45].forEach(Gt=>{m.add(l(.04,.14,.05,s.doorHandle,se+Ye/2-.1,Gt,1+.02))}),[-.55,.55].forEach(Gt=>{m.add(l(.03,.1,.03,s.stainless,se-Ye/2+.04,Gt,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([se,We])=>{let Ye=g(.14,.14,.04,24,s.stainless,se,We,1,Math.PI/2),me=g(.11,.11,.045,20,s.panelCutaway,se,We,1,Math.PI/2);m.add(Ye,me)}),[[-1.75,.1],[3.45,.35]].forEach(([se,We])=>{let Ye=g(.08,.08,.03,20,s.stainless,se,We,1.015,Math.PI/2),me=g(.07,.07,.035,20,s.gaugeFace,se,We,1+.015,Math.PI/2);m.add(Ye,me),m.add(g(.008,.008,.22,8,s.panelCutaway,se-.03,We-.12,1+.01)),m.add(g(.008,.008,.22,8,s.panelCutaway,se+.03,We-.12,1+.01))});let wt=.48,qt=.68,Qt=.18,Ui=l(wt,qt,Qt,s.stainless,2.85,.45,1+Qt/2),Ae=l(.24,.16,.01,s.touchscreen,2.85,.56,1+Qt+.005),hi=g(.014,.014,.02,10,s.coolingFin,2.75,.42,1+Qt+.01,Math.PI/2),Ni=g(.014,.014,.02,10,s.yellowSafety,2.85,.42,1+Qt+.01,Math.PI/2),Ti=g(.014,.014,.02,10,s.heatingFin,2.95,.42,1+Qt+.01,Math.PI/2),ci=l(.08,.08,.01,s.yellowSafety,2.85,.3,1+Qt+.005),je=l(.04,.06,.03,s.heatingFin,2.85,.3,1+Qt+.02);m.add(Ui,Ae,hi,Ni,Ti,ci,je);let Ge=-1.3/2-.05,_t=2-.35,Dt=.85,mi=l(.12,Dt,_t,s.stainless,-4.3-.06,Ge,0);m.add(mi);for(let se=0;se<5;se++){let We=Ge-Dt/2+.1+se*((Dt-.2)/4),Ye=l(.08,.015,_t-.06,s.damperBlade,-4.3-.06,We,0);Ye.rotation.z=.55,m.add(Ye)}let Ot=l(.16,.2,.14,s.actuatorOrange,-4.3-.06,Ge,1+.06);m.add(Ot);let wi=l(.1,1.3-.35,2-.35,s.stainless,-3.8,Ge,0),Kt=l(.08,1.3-.4,2-.4,s.filterG4,-3.8,Ge,0);m.add(wi,Kt);let Ri=1.3/2-.05,S=l(.12,Dt,_t,s.stainless,-4.3-.06,Ri,0);m.add(S);for(let se=0;se<5;se++){let We=Ri-Dt/2+.1+se*((Dt-.2)/4),Ye=l(.08,.015,_t-.06,s.damperBlade,-4.3-.06,We,0);Ye.rotation.z=-.55,m.add(Ye)}let C=l(.16,.2,.14,s.actuatorOrange,-4.3-.06,Ri,1+.06);m.add(C);let j=new Vt;j.position.set(-2.95,Ri,0),m.add(j);let W=g(.38,.3,.12,24,s.stainless,.2,0,0,0,Math.PI/2),H=g(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);j.add(W,H);let le=g(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);j.add(le);let fe=g(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);j.add(fe),T.push(()=>{H.rotation.x+=.14});let _e=l(.1,1.3-.35,2-.35,s.stainless,-2.5,Ge,0);m.add(_e);for(let se=0;se<2;se++)for(let We=0;We<3;We++){let Ye=Ge-.22+se*.44,me=-1+.35+We*((2-.7)/2),Je=new Sa(.18,.85,4),Ve=new Ht(Je,s.filterCloth);Ve.position.set(-2,Ye,me),Ve.rotation.z=-Math.PI/2,Ve.scale.set(.9,1.2,.7),m.add(Ve)}let Se=l(1.5,1.4,2-.35,s.stainless,-.05,0,0);Se.rotation.z=Math.PI/4,m.add(Se);let De=l(2.2,.04,2-.3,s.stainless,-.05,0,0);De.rotation.z=-Math.PI/4,m.add(De);let He=2-.35,Ne=1.3-.35;for(let se=0;se<3;se++){let We=Ge-.25+se*.25,Ye=g(.02,.02,He-.1,12,s.coolingFin,.95,We,0,Math.PI/2);m.add(Ye),m.add(l(.04,.04,.04,s.stainless,.95,We,1-.2)),m.add(l(.04,.04,.04,s.stainless,.95,We,-1+.2))}let Ce=l(.24,Ne,He,s.coolingFin,1.25,Ge,0);m.add(Ce),[-.5,.5].forEach(se=>{let We=g(.045,.045,Ne+.1,14,s.copperPipe,1.25,Ge,se);m.add(We)});for(let se=0;se<8;se++){let We=Ge-Ne/2+.1+se*((Ne-.2)/7),Ye=new Ht(new nl(.032,.012,8,12,Math.PI),s.copperPipe);Ye.position.set(1.25,We,1-.18),Ye.rotation.y=Math.PI/2,Ye.rotation.x=Math.PI/2,m.add(Ye)}let tt=l(1.3,.09,He+.1,s.stainless,1.6,-1.3+.1,0);m.add(tt);let it=g(.025,.025,.2,12,s.stainless,1.9,-1.3+.06,1-.05);m.add(it);let nt=l(.12,Ne,He,s.stainless,1.55,Ge,0);m.add(nt);for(let se=0;se<12;se++){let We=-.7+se*((He-.2)/11),Ye=l(.08,Ne-.05,.012,s.stainless,1.55,Ge,We);Ye.rotation.y=.35,m.add(Ye)}let ht=l(.18,Ne,He,s.heatingFin,1.95,Ge,0);m.add(ht),[-.4,.4].forEach(se=>{let We=g(.04,.04,Ne+.1,14,s.copperPipe,1.95,Ge,se);m.add(We)});let st=new Vt;st.position.set(2.85,Ge,0),m.add(st);let Te=g(.48,.38,.18,28,s.stainless,-.4,0,0,0,Math.PI/2),Lt=g(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);st.add(Te,Lt);let Bt=g(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),Tt=g(.14,.05,.16,16,s.stainless,-.25,0,0,0,Math.PI/2);st.add(Bt,Tt),T.push(()=>{Bt.rotation.x+=.15});let Ct=g(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),Zt=l(.14,.12,.14,s.motorCast,.32,.26,0);st.add(Ct,Zt);let Mi=l(1.1,.08,.8,s.stainless,.05,-Ne/2+.08,0);st.add(Mi),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([se,We])=>{let Ye=l(.12,.03,.12,s.motorCast,se,-Ne/2+.02,We),me=g(.04,.04,.12,10,s.springSilver,se,-Ne/2+.08,We);st.add(Ye,me)});let ct=l(.1,Ne,He,s.rubberBlack,2.35,Ge,0);m.add(ct);let yt=l(.2,Ne-.1,He-.1,s.stainless,3.65,Ge,0),ui=l(.16,Ne-.15,He-.15,s.filterCloth,3.65,Ge,0);m.add(yt,ui);for(let se=-1;se<=1;se+=2){let We=se*.4,Ye=l(.42,Ne-.1,.2,s.stainless,4.05,Ge,We);m.add(Ye)}}function Q(m){let k=-1.2750000000000001,G=6.2+.2,z=2.2+.2,Z=l(G,.45,.08,s.baseSkid,0,k,1.1+.06),V=l(G,.45,.08,s.baseSkid,0,k,-1.1-.06),be=l(.08,.45,z-.16,s.baseSkid,-3.1-.06,k,0),ue=l(.08,.45,z-.16,s.baseSkid,3.1+.06,k,0);m.add(Z,V,be,ue);let ye=l(G+.08,.04,.14,s.aluFrame,0,-1.05-.02,1.1+.05),Fe=l(G+.08,.04,.14,s.aluFrame,0,-1.05-.02,-1.1-.05);m.add(ye,Fe);let Be=l(G,.02,.04,s.rubberBlack,0,-1.05+.01,1.1),gt=l(G,.02,.04,s.rubberBlack,0,-1.05+.01,-1.1);m.add(Be,gt),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([Ee,Qe])=>{let Jt=l(.14,.25,.14,s.yellowSafety,Ee,k+.1,Qe),ei=g(.035,.035,.16,16,s.motorCast,Ee,k+.16,Qe,0,Math.PI/2);m.add(Jt,ei)});let wt=l(.9,.18,.9,s.galvSteel,-.1,k-.14,0),qt=l(.82,.19,.82,s.motorCast,-.1,k-.14,0),Qt=l(.9,.18,.9,s.galvSteel,2.3,k-.14,0),Ui=l(.82,.19,.82,s.motorCast,2.3,k-.14,0);m.add(wt,qt,Qt,Ui);let Ae=.08;m.add(l(6.2,Ae,Ae,s.aluFrame,0,-1.05+Ae/2,1.1-Ae/2),l(6.2,Ae,Ae,s.aluFrame,0,-1.05+Ae/2,-1.1+Ae/2),l(6.2,Ae,Ae,s.aluFrame,0,1.05-Ae/2,1.1-Ae/2),l(6.2,Ae,Ae,s.aluFrame,0,1.05-Ae/2,-1.1+Ae/2)),[-3.1+Ae/2,-.7,.6,1.8,3.1-Ae/2].forEach(Ee=>{m.add(l(Ae,2.1-2*Ae,Ae,s.aluFrame,Ee,0,1.1-Ae/2),l(Ae,2.1-2*Ae,Ae,s.aluFrame,Ee,0,-1.1+Ae/2))}),[-3.1+Ae/2,-.7,.6,1.8,3.1-Ae/2].forEach(Ee=>{m.add(l(Ae,Ae,2.2-2*Ae,s.aluFrame,Ee,-1.05+Ae/2,0),l(Ae,Ae,2.2-2*Ae,s.aluFrame,Ee,1.05-Ae/2,0))}),m.add(l(6.2-.1,2.1-.1,.05,s.panelSolid,0,0,-1.1+.04)),m.add(l(6.2-.1,.05,2.2-.1,s.galvSteel,0,-1.05+.04,0)),m.add(l(.05,2.1-.1,2.2-.1,s.panelSolid,3.1-.03,0,0));let hi=l(3.8,.06,2.2+.1,s.panelSolid,1.15,1.05+.03,0);m.add(hi),m.add(l(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,1.1+.06),l(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,-1.1-.06));let Ni=l(.06,2.1-.12,2.2-.12,s.galvSteel,-.7,0,0);m.add(Ni);let Ti=l(2.2,2.1-.25,.12,s.coolingFin,-1.85,.02,-1.1+.15),ci=l(.12,2.1-.25,2.2-.3,s.coolingFin,-3.1+.15,.02,0);m.add(Ti,ci);for(let Ee=-.8;Ee<=.8;Ee+=.2){let Qe=l(2.25,.02,.02,s.aluFrame,-1.85,Ee,-1.05);m.add(Qe)}[-.8,-.2,.4].forEach(Ee=>{let Qe=g(.035,.035,2.1,14,s.copperPipe,-1.85,Ee,-.8600000000000001,0,Math.PI/2);m.add(Qe)}),[-2.2,-1.2].forEach((Ee,Qe)=>{let Jt=g(.48,.46,.22,28,s.motorCast,Ee,1.1600000000000001,0,0,0,!0),ei=g(.51,.51,.04,28,s.aluFrame,Ee,1.05+.22,0);m.add(Jt,ei);let Yi=g(.46,.46,.02,24,s.galvSteel,Ee,1.05+.22+.01,0,0,0,!0);m.add(Yi);for(let qi=0;qi<4;qi++){let Cr=l(.9,.015,.015,s.galvSteel,Ee,1.285,0);Cr.rotation.y=qi/4*Math.PI,m.add(Cr)}let Fi=new Vt;Fi.position.set(Ee,1.05+.12,0),m.add(Fi);let da=g(.12,.12,.08,16,s.aluFrame,0,0,0);Fi.add(da);for(let qi=0;qi<5;qi++){let Cr=new Vt;Cr.rotation.y=qi/5*Math.PI*2;let Co=l(.34,.02,.11,s.fanImpeller,.24,0,0);Co.rotation.x=.35,Cr.add(Co),Fi.add(Cr)}let Ln=Qe===0?.18:.17;T.push(()=>{Fi.rotation.y+=Ln});let Un=g(.15,.15,.3,16,s.motorCast,Ee,1.05-.12,0);m.add(Un)});let je=l(1.5,.06,.6,s.baseSkid,-1.8,-1.05+.1,.1);m.add(je),[-2.15,-1.45].forEach(Ee=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([Fi,da])=>{m.add(g(.04,.04,.04,12,s.rubberBlack,Ee+Fi,-1.05+.14,.1+da))});let Qe=g(.16,.16,.58,24,s.motorCast,Ee,-1.05+.45,.1),Jt=g(.14,.16,.08,20,s.motorCast,Ee,-1.05+.76,.1),ei=l(.1,.14,.08,s.motorCast,Ee+.14,-1.05+.5,.1),Yi=g(.165,.165,.05,20,s.heatingFin,Ee,-1.05+.22,.1);m.add(Qe,Jt,ei,Yi)});let Ge=g(.12,.12,.52,20,s.motorCast,-.95,-1.05+.42,.25),_t=g(.09,.12,.06,16,s.motorCast,-.95,-1.05+.7,.25);m.add(Ge,_t);let Dt=g(.04,.04,.8,14,s.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),mi=g(.04,.04,.6,14,s.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);m.add(Dt,mi);let Ot=g(.03,.03,1.1,14,s.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),wi=g(.045,.045,.22,16,s.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);m.add(Ot,wi);let Kt=g(.06,.06,.24,16,s.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),Ri=g(.03,.03,.34,14,s.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),S=l(.09,.12,.09,s.brassGold,-.95,-1.05+.45,-.3),C=g(.01,.01,.2,8,s.rubberBlack,-.95,-1.05+.54,-.3);m.add(Kt,Ri,S,C),[-.15,.15].forEach(Ee=>{let Qe=g(.045,.045,.02,16,s.gaugeFace,-.73,-.4,Ee,0,Math.PI/2);m.add(Qe)});let j=1.1,W=.8,H=.35,le=l(j,W,H,s.galvSteel,-.1,.2,-1.1-H/2+.04),fe=l(j+.06,.03,H+.08,s.aluFrame,-.1,.2+W/2+.02,-1.1-H/2);fe.rotation.x=-.12,m.add(le,fe);for(let Ee=-.3;Ee<=.3;Ee+=.12){let Qe=l(j-.06,.02,.18,s.damperBlade,-.1,.2+Ee,-1.1-H/2);Qe.rotation.x=.45,m.add(Qe)}let _e=1,Se=l(_e,.75,.08,s.aluFrame,-.1,.2,-1.1+.25);m.add(Se);for(let Ee=-.25;Ee<=.25;Ee+=.14){let Qe=l(_e-.06,.11,.015,s.damperBlade,-.1,.2+Ee,-.8500000000000001);Qe.rotation.x=.3,m.add(Qe)}let De=.9,He=l(De,.08,.9,s.aluFrame,-.1,-1.05+.15,0);m.add(He);for(let Ee=-.3;Ee<=.3;Ee+=.15){let Qe=l(De-.06,.015,.12,s.damperBlade,-.1,-.9,Ee);Qe.rotation.z=.25,m.add(Qe)}let Ne=l(.16,.22,.14,s.actuatorOrange,-.1,.35,1.1-.2),Ce=g(.04,.04,.06,16,s.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),tt=l(.03,.14,.02,s.motorCast,-.1,.42,1.1-.1);m.add(Ne,Ce,tt);let it=g(.015,.015,.35,10,s.stainless,.25,.2,0);m.add(it);let nt=.6,ht=2.1-.3,st=2.2-.3,Te=l(.18,ht,st,s.galvSteel,nt,0,0);m.add(Te);for(let Ee=-st/2+.3;Ee<=st/2-.2;Ee+=.5){let Qe=l(.05,ht-.1,.44,s.filterG4,nt-.05,0,Ee),Jt=l(.07,ht-.1,.44,s.filterCloth,nt+.05,0,Ee);m.add(Qe,Jt)}let Lt=g(.01,.01,.2,8,s.copperPipe,nt-.14,.3,1.1-.15),Bt=g(.01,.01,.2,8,s.copperPipe,nt+.14,.3,1.1-.15);m.add(Lt,Bt);let Tt=1.25,Ct=2.1-.35,Zt=2.2-.35,Mi=l(.32,Ct,Zt,s.coolingFin,Tt,.02,0);m.add(Mi);for(let Ee=0;Ee<4;Ee++)for(let Qe=0;Qe<3;Qe++){let Jt=-Ct/2+.2+Qe*(Ct/3.2),ei=Tt-.12+Ee*.08,Yi=g(.025,.025,.04,12,s.copperPipe,ei,Jt,1.1-.18,Math.PI/2,0);m.add(Yi)}let ct=g(.035,.035,.08,14,s.brassGold,Tt-.15,-.2,1.1-.22);m.add(ct);for(let Ee=0;Ee<4;Ee++){let Qe=g(.008,.008,.28,8,s.copperPipe,Tt-.08,-.2+Ee*.1,.8800000000000001,0,Math.PI/4);m.add(Qe)}let yt=Zt+.15,ui=.85,se=.09,We=l(ui,se,yt,s.drainPan,Tt,-1.05+se/2+.05,0);m.add(We);let Ye=g(.03,.03,.35,12,s.stainless,Tt+.1,-1.05-.05,1.1+.02),me=g(.03,.03,.22,12,s.stainless,Tt+.22,-1.05-.12,1.1+.02),Je=g(.03,.03,.14,12,s.stainless,Tt+.16,-1.05-.22,1.1+.02,0,Math.PI/2);m.add(Ye,me,Je);let Ve=l(.12,Ct-.05,Zt,s.aluFrame,Tt+.24,.02,0);m.add(Ve);let Gt=1.8,Ar=Ct,Ai=Zt;for(let Ee=-.5;Ee<=.5;Ee+=.25){let Qe=g(.045,.045,Ai-.2,16,s.stainless,Gt,Ee,0,Math.PI/2,0);m.add(Qe)}let ua=l(.25,Ar-.2,.3,s.galvSteel,Gt,0,-1.1+.2);m.add(ua);let gr=new Vt;gr.position.set(2.45,.05,0),m.add(gr);let Fh=g(.48,.38,.18,28,s.aluFrame,-.38,0,0,0,Math.PI/2),Oh=g(.44,.44,.03,24,s.copperPipe,-.36,0,0,0,Math.PI/2,!0);gr.add(Fh,Oh);let Ao=g(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),Bh=g(.14,.05,.16,16,s.aluFrame,-.24,0,0,0,Math.PI/2);gr.add(Ao,Bh),T.push(()=>{Ao.rotation.x+=.15});let zh=g(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),Hh=l(.14,.12,.14,s.motorCast,.32,.26,0);gr.add(zh,Hh);let Gh=l(1.1,.08,.8,s.baseSkid,.05,-Ct/2+.1,0);gr.add(Gh),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ee,Qe])=>{let Jt=l(.12,.03,.12,s.motorCast,Ee,-Ct/2+.04,Qe),ei=g(.04,.04,.12,10,s.springSilver,Ee,-Ct/2+.1,Qe);gr.add(Jt,ei)});let kh=l(.85,.6,.85,s.galvSteel,2.3,-1.05+.3,0),Vh=l(.9,.1,.9,s.rubberBlack,2.3,-1.05+.05,0);m.add(kh,Vh),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((Ee,Qe)=>{let Jt=Ee.maxX-Ee.minX,ei=(Ee.minX+Ee.maxX)/2,Yi=2.1-.22,Fi=l(Jt-.04,Yi,.04,s.panelCutaway,ei,0,1.1-.02,!1,!1);m.add(Fi),Y(Fi,s.panelSolid,s.panelCutaway);let da=l(.04,.14,.04,s.doorHandle,ei+Jt*.42,0,1.1+.01),Ln=l(.03,.08,.03,s.stainless,ei-Jt*.45,Yi*.35,1.1+.01),Un=l(.03,.08,.03,s.stainless,ei-Jt*.45,-Yi*.35,1.1+.01);if(m.add(da,Ln,Un),Qe===1||Qe===2||Qe===3){let qi=g(.12,.12,.04,20,s.aluFrame,ei,.22,1.1,Math.PI/2);m.add(qi)}});let Wh=l(.42,.65,.18,s.panelSolid,.6,.3,1.1+.08),Xh=l(.38,.6,.02,s.aluFrame,.6,.3,1.1+.17),jh=l(.24,.16,.01,s.touchscreen,.6,.4,1.1+.18),Yh=l(.09,.09,.02,s.yellowSafety,.6,.18,1.1+.18),qh=g(.035,.035,.05,12,s.heatingFin,.6,.18,1.1+.2,Math.PI/2);m.add(Wh,Xh,jh,Yh,qh),[-.15,.15].forEach(Ee=>{let Qe=g(.065,.065,.035,20,s.aluFrame,.6,-.25,1.1800000000000002+Ee,Math.PI/2),Jt=g(.055,.055,.037,20,s.gaugeFace,.6,-.25,1.1+.08+Ee,Math.PI/2),ei=g(.008,.008,.3,8,s.panelCutaway,.6,-.42,1.1+.08+Ee);m.add(Qe,Jt,ei)})}function U(m,k){if(k==="tks"){L(m);return}if(k==="thks"){F(m);return}if(k==="rooftop"){Q(m);return}let G=k==="thks",z=k==="thrv-dx",Z=k==="hrv",V=k==="rooftop",be=Z?4.8:V?6.2:7.6,ue=Z?1.9:2.6,ye=Z?1.8:2,Fe=be/2,Be=ue/2,gt=ye/2,wt=.22,qt=-Be-wt/2,Qt=l(be+.3,wt,.12,s.baseSkid,0,qt,gt-.06),Ui=l(be+.3,wt,.12,s.baseSkid,0,qt,-gt+.06);m.add(Qt,Ui),[-Fe,-Fe*.5,0,Fe*.5,Fe].forEach(je=>{m.add(l(.12,wt,ye-.24,s.baseSkid,je,qt,0))});let Ae=.08,hi=G?s.stainless:s.aluFrame;m.add(l(be,Ae,Ae,hi,0,-Be+Ae/2,gt-Ae/2),l(be,Ae,Ae,hi,0,-Be+Ae/2,-gt+Ae/2),l(be,Ae,Ae,hi,0,Be-Ae/2,gt-Ae/2),l(be,Ae,Ae,hi,0,Be-Ae/2,-gt+Ae/2));let Ni=G?s.stainless:s.galvSteel;m.add(l(be-.1,ue-.1,.05,s.panelSolid,0,0,-gt+.04),l(be-.1,.05,ye-.1,s.panelSolid,0,Be-.03,0),l(be-.1,.05,ye-.1,Ni,0,-Be+.03,0),l(.05,ue-.1,ye-.1,s.panelSolid,Fe-.03,0,0));let Ti=Z?3:4,ci=(be-.2)/Ti;for(let je=0;je<Ti;je++){let Ge=-Fe+.1+(je+.5)*ci,_t=l(ci-.04,ue-.18,.03,s.panelCutaway,Ge,0,gt-.02,!1,!1);m.add(_t),R.push(_t),m.add(l(.04,.12,.04,s.doorHandle,Ge+ci*.4,0,gt+.01)),m.add(g(.11,.11,.04,16,s.aluFrame,Ge,.2,gt,Math.PI/2))}if(Z){let je=l(1.5,1.4,ye-.35,s.aluFrame,0,0,0);je.rotation.z=Math.PI/4,m.add(je),[-1.4,1.4].forEach((Ge,_t)=>{let Dt=_t===0?-.35:.35,mi=g(.35,.35,.25,20,s.fanHousing,Ge,Dt,0,0,Math.PI/2);m.add(mi),T.push(()=>{mi.rotation.x+=.1})}),[-1.9,1.9].forEach(Ge=>{m.add(l(.06,ue-.4,ye-.4,s.filterCloth,Ge,0,0))}),[[-Fe-.1,.4],[Fe+.1,-.4]].forEach(([Ge,_t])=>{m.add(g(.32,.32,.22,24,s.galvSteel,Ge,_t,0,0,Math.PI/2,!0))})}else if(V){[-1.2,1.2].forEach(Ge=>{let _t=g(.55,.55,.18,24,s.motorCast,Ge,Be+.09,0,0,0,!0),Dt=g(.48,.48,.04,4,s.fanImpeller,Ge,Be+.12,0);m.add(_t,Dt),T.push(()=>{Dt.rotation.y+=.15})}),[-1.8,-1].forEach(Ge=>{let _t=g(.2,.2,.7,16,s.motorCast,Ge,-Be+.5,-gt+.5);m.add(_t)});let je=g(.45,.45,.35,20,s.fanHousing,1.8,-.2,0,0,Math.PI/2);m.add(je),T.push(()=>{je.rotation.x+=.12}),m.add(l(.3,ue-.5,ye-.4,s.coolingFin,.5,-.1,0))}else{let je=new Vt;je.position.set(0,0,0),m.add(je);let Ge=g(1.05,1.05,.28,32,s.aluFrame,0,0,0,0,Math.PI/2),_t=g(1.01,1.01,.26,28,s.rotorWheel,0,0,0,0,Math.PI/2);je.add(Ge,_t);for(let Ot=0;Ot<12;Ot++){let wi=Ot/12*Math.PI*2,Kt=l(.03,1.98,.02,s.aluFrame,0,0,0);Kt.rotation.x=wi,je.add(Kt)}T.push(()=>{je.rotation.x+=.008});let Dt=g(.42,.42,.35,24,s.fanHousing,2.8,-Be/2+.1,0,0,Math.PI/2),mi=g(.36,.36,.3,24,s.fanHousing,-1.3,Be/2-.05,0,0,Math.PI/2);m.add(Dt,mi),T.push(()=>{Dt.rotation.x+=.12,mi.rotation.x+=.12}),m.add(l(.28,Be-.3,ye-.35,G?s.stainless:s.coolingFin,1.35,-Be/2,0)),m.add(l(.22,Be-.3,ye-.35,s.heatingFin,1.85,-Be/2,0)),m.add(l(.95,.08,ye-.25,s.drainPan,1.6,-Be+.12,0)),m.add(l(.06,Be-.25,ye-.3,G?s.stainless:s.aluFrame,-2.1,-Be/2,0));for(let Ot=0;Ot<4;Ot++){let wi=-gt+.25+(Ot+.5)*((ye-.4)/4),Kt=new Ht(new Sa(.2,.75,4),s.filterCloth);Kt.rotateZ(-Math.PI/2),Kt.position.set(-1.7,-Be/2,wi),Kt.scale.set(1,1.4,.8),m.add(Kt)}if(G){m.add(l(.18,Be-.3,ye-.35,s.stainless,2.15,-Be/2,0));let Ot=g(.03,.03,ye-.5,12,s.coolingFin,1.1,-Be/2+.2,0,Math.PI/2);m.add(Ot)}[-Be/2,Be/2].forEach(Ot=>{m.add(l(.08,Be-.25,ye-.3,s.aluFrame,-Fe-.04,Ot,0)),m.add(l(.14,.18,.12,s.actuatorOrange,-Fe-.04,Ot,gt+.05))}),z&&m.add(g(.2,.2,.65,16,s.motorCast,2.5,-Be/2,-gt+.5)),m.add(l(.32,.55,.18,s.motorCast,2.3,.35,gt+.09))}}function X(m,k){if(k==="tdf"){m.add(l(3.2,.04,2,s.galvSteel,0,2/2,0),l(3.2,.04,2,s.galvSteel,0,-2/2,0),l(3.2,2,.04,s.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(V=>{m.add(l(.08,.12,2+.2,s.aluFrame,V,2/2+.04,0),l(.08,.12,2+.2,s.aluFrame,V,-2/2-.04,0),l(.08,2,.12,s.aluFrame,V,0,2/2+.04),l(.08,2,.12,s.aluFrame,V,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(be=>{[-2/2-.04,2/2+.04].forEach(ue=>{m.add(l(.1,.14,.14,s.baseSkid,V,be,ue))})})});let G=l(3.2-.1,2-.1,.03,s.panelCutaway,0,0,2/2,!1,!1);m.add(G),R.push(G),[-.8,.8].forEach(V=>{m.add(l(.08,.12,.04,s.doorHandle,V,2/2-.1,2/2+.02))});let z=g(.78,.78,.45,24,s.fanImpeller,0,0,0,0,Math.PI/2),Z=g(.28,.28,.35,16,s.motorCast,.25,0,0,0,Math.PI/2);m.add(z,Z),T.push(()=>{z.rotation.x+=.14}),m.add(l(.24,.18,.16,s.fanHousing,-.6,2/2+.1,.4))}else if(k==="yangin-fani"){let G=g(1.25,1.25,4.2,32,s.galvSteel,0,0,0,0,Math.PI/2,!0);m.add(G),[-4.2/2,4.2/2].forEach(ue=>{let ye=g(1.43,1.43,.06,32,s.baseSkid,ue,0,0,0,Math.PI/2,!0);m.add(ye);for(let Fe=0;Fe<12;Fe++){let Be=Fe/12*Math.PI*2;m.add(l(.08,.04,.04,s.doorHandle,ue,Math.sin(Be)*(1.25+.09),Math.cos(Be)*(1.25+.09)))}});let z=g(.46,.46,2,24,s.motorCast,.1,0,0,0,Math.PI/2),Z=new Ht(new Sa(.46,.6,20),s.motorCast);Z.rotateZ(-Math.PI/2),Z.position.set(-1.2,0,0),m.add(z,Z);let V=new Vt;V.position.set(-.6,0,0),m.add(V);let be=g(.48,.48,.2,20,s.fanImpeller,0,0,0,0,Math.PI/2);V.add(be);for(let ue=0;ue<8;ue++){let ye=ue/8*Math.PI*2,Fe=l(.04,.7,.16,s.fanImpeller,0,Math.sin(ye)*.78,Math.cos(ye)*.78);Fe.rotation.x=ye+.35,V.add(Fe)}T.push(()=>{V.rotation.x+=.15});for(let ue=0;ue<4;ue++){let ye=ue/4*Math.PI*2,Fe=l(.03,1.25-.46,.1,s.baseSkid,.4,Math.sin(ye)*(1.25+.46)/2,Math.cos(ye)*(1.25+.46)/2);Fe.rotation.x=ye,m.add(Fe)}m.add(l(2.8,.12,.35,s.baseSkid,0,-1.25-.1,.9),l(2.8,.12,.35,s.baseSkid,0,-1.25-.1,-.9)),m.add(l(.24,.24,.16,s.actuatorOrange,0,1.25+.1,0))}else{let G=g(.62,.62,5.2,28,s.galvSteel,0,0,0,0,Math.PI/2,!0);m.add(G),[-1.7,1.7].forEach(V=>{m.add(g(.62+.12,.62+.12,1.5,28,s.aluFrame,V,0,0,0,Math.PI/2,!0))});let z=g(.28,.28,1.2,16,s.motorCast,0,0,0,0,Math.PI/2),Z=g(.62-.05,.62-.05,.12,8,s.fanImpeller,0,0,0,0,Math.PI/2);m.add(z,Z),T.push(()=>{Z.rotation.x+=.16});for(let V=-.3;V<=.3;V+=.2){let be=l(.08,.04,.8,s.damperBlade,2.62,V,0);be.rotation.z=-.2,m.add(be)}[-5.2/2-.02,5.2/2+.02].forEach(V=>{m.add(g(.62+.02,.62+.02,.04,16,s.aluFrame,V,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(V=>{m.add(l(.08,.55,.25,s.baseSkid,V,.62+.35,0))})}}function re(m,k){if(k==="spiral-kanal"){let G=g(.75,.75,4.4,32,s.galvSteel,-.6,0,0,0,Math.PI/2,!0);m.add(G);for(let Z=-2.6;Z<=1.2;Z+=.45)m.add(g(.75+.015,.75+.015,.025,32,s.aluFrame,Z,0,0,0,Math.PI/2,!0));m.add(g(.75+.025,.75+.025,.12,32,s.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let z=g(.75-.01,.75-.01,1.8,28,s.galvSteel,2.2,.9,0,0,0,!0);m.add(z),m.add(g(.75+.06,.75+.06,.08,32,s.baseSkid,-.8,0,0,0,Math.PI/2,!0)),m.add(g(.02,.02,1.4,8,s.baseSkid,-.8,.75+.7,0))}else if(k==="paslanmaz-kanal"){let G=g(.85,.85,4.6,32,s.stainless,0,0,0,0,Math.PI/2,!0);m.add(G),m.add(l(4.6-.02,.02,.03,s.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(z=>{m.add(g(.85+.2,.85+.2,.08,32,s.stainless,z,0,0,0,Math.PI/2,!0));for(let Z=0;Z<8;Z++){let V=Z/8*Math.PI*2;m.add(l(.12,.04,.04,s.doorHandle,z,Math.sin(V)*(.85+.1),Math.cos(V)*(.85+.1)))}}),m.add(g(.32,.32,.06,16,s.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(z=>{m.add(l(.04,.08,.06,s.doorHandle,z,0,.85+.07))})}else{m.add(l(4.6,.04,2.4,s.galvSteel,0,2/2,0),l(4.6,.04,2.4,s.galvSteel,0,-2/2,0),l(4.6,2,.04,s.galvSteel,0,0,-2.4/2));let G=l(.9,2,.04,s.galvSteel,-4.6/2+.45,0,2.4/2),z=l(.9,2,.04,s.galvSteel,4.6/2-.45,0,2.4/2),Z=l(4.6-1.8,2-.3,.03,s.panelCutaway,0,0,2.4/2,!1,!1);m.add(G,z,Z),R.push(Z),m.add(l(4.6-1.9,2-.4,.08,s.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(V=>{m.add(l(.08,.14,2.4+.24,s.aluFrame,V,2/2+.05,0),l(.08,.14,2.4+.24,s.aluFrame,V,-2/2-.05,0),l(.08,2,.14,s.aluFrame,V,0,2.4/2+.05),l(.08,2,.14,s.aluFrame,V,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(be=>{[-2.4/2-.05,2.4/2+.05].forEach(ue=>{m.add(l(.1,.16,.16,s.baseSkid,V,be,ue))})})}),m.add(l(4.6-.8,.02,.02,s.aluFrame,0,2/2+.02,0))}}function q(m,k){if(k==="menfez"){m.add(l(.24,.14,3.4+.2,s.aluFrame,0,2.2/2+.05,0),l(.24,.14,3.4+.2,s.aluFrame,0,-2.2/2-.05,0),l(.24,2.2,.14,s.aluFrame,0,0,3.4/2+.05),l(.24,2.2,.14,s.aluFrame,0,0,-3.4/2-.05));for(let G=-2.2/2+.2;G<=2.2/2-.15;G+=.24){let z=l(.08,.02,3.3,s.damperBlade,.09,G,0);z.rotation.z=.22,m.add(z)}for(let G=-3.4/2+.25;G<=3.4/2-.2;G+=.28){let z=l(.06,2.1500000000000004,.02,s.damperBlade,0,0,G);z.rotation.y=.2,m.add(z)}m.add(l(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,2.2/2-.04,0),l(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,-2.2/2+.04,0)),m.add(l(.08,.12,.08,s.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(k==="difuzor"){m.add(l(3.4,.03,1.5,s.galvSteel,0,1.3/2+.3,0),l(3.4,1.3,.03,s.galvSteel,0,.3,-1.5/2),l(3.4,1.3,.03,s.galvSteel,0,.3,1.5/2)),m.add(g(.42,.42,.35,24,s.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),m.add(l(3.4+.2,.06,1.5+.2,s.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(z=>{m.add(l(3.4-.1,.04,.06,s.doorHandle,0,-1.3/2+.26,z))});let G=l(1.8,.04,1.8,s.panelSolid,0,-1,0);m.add(G);for(let z=0;z<16;z++){let Z=z/16*Math.PI*2,V=l(.03,.02,.36,s.doorHandle,Math.sin(Z)*.55,-.98,Math.cos(Z)*.55);V.rotation.y=Z+.5,m.add(V)}}else{m.add(l(1.4,.04,2.4,s.galvSteel,0,2.2/2,0),l(1.4,.04,2.4,s.galvSteel,0,-2.2/2,0),l(1.4,2.2,.04,s.galvSteel,0,0,-2.4/2),l(1.4,2.2,.04,s.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(z=>{m.add(l(.08,.14,2.4+.2,s.aluFrame,z,2.2/2+.05,0),l(.08,.14,2.4+.2,s.aluFrame,z,-2.2/2-.05,0),l(.08,2.2,.14,s.aluFrame,z,0,2.4/2+.05),l(.08,2.2,.14,s.aluFrame,z,0,-2.4/2-.05))});for(let z=-2.2/2+.35;z<=2.2/2-.25;z+=.5){let Z=l(.35,.04,2.28,s.damperBlade,0,z,0);Z.rotation.z=.35,m.add(Z)}m.add(l(.03,2.2-.4,.03,s.brassGold,.15,0,2.4/2-.08));let G=l(.22,.34,.18,s.actuatorOrange,.1,.2,2.4/2+.14);m.add(G),m.add(g(.025,.025,.15,12,s.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),m.add(g(.03,.03,.12,12,s.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function pe(m){m.add(l(4.4,.04,2.2,s.galvSteel,0,2.4/2,0),l(4.4,.04,2.2,s.galvSteel,0,-2.4/2,0),l(4.4,2.4,.04,s.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(ue=>{m.add(l(.08,.12,2.2+.2,s.aluFrame,ue,2.4/2+.04,0),l(.08,.12,2.2+.2,s.aluFrame,ue,-2.4/2-.04,0),l(.08,2.4,.12,s.aluFrame,ue,0,2.2/2+.04),l(.08,2.4,.12,s.aluFrame,ue,0,-2.2/2-.04))});let k=l(4.4-.1,2.4-.1,.03,s.panelCutaway,0,0,2.2/2,!1,!1);m.add(k),R.push(k);let G=l(.12,2.4-.2,2.2-.2,s.aluFrame,-1.4,0,0),z=l(.1,2.4-.25,2.2-.25,s.filterCloth,-1.4,0,0);m.add(G,z),m.add(l(.1,2.4-.2,2.2-.2,s.aluFrame,-.2,0,0));for(let ue=0;ue<4;ue++){let ye=-.7+ue*.46,Fe=new Ht(new Sa(.2,1.1,4),s.filterCloth);Fe.rotateZ(-Math.PI/2),Fe.position.set(.4,0,ye),Fe.scale.set(1,1.3,.75),m.add(Fe)}let Z=l(.25,2.4-.2,2.2-.2,s.aluFrame,1.4,0,0),V=l(.22,2.4-.26,2.2-.26,s.filterCloth,1.4,0,0),be=l(.26,2.4-.18,.04,s.coolingFin,1.4,0,2.2/2-.1);m.add(Z,V,be),[-1,.6].forEach(ue=>{m.add(g(.09,.09,.04,16,s.aluFrame,ue,.6,2.2/2+.03,Math.PI/2))})}function $(m,k){if(k==="vrf-dis"){m.add(l(3.2,3.6,.04,s.panelSolid,0,0,-2/2),l(3.2,.04,2,s.panelSolid,0,3.6/2,0),l(3.2,.12,2,s.baseSkid,0,-3.6/2,0),l(.04,3.6-.2,2-.1,s.coolingFin,-3.2/2,.05,0),l(.04,3.6-.2,2-.1,s.coolingFin,3.2/2,.05,0));let G=l(3.2-.1,3.6-.2,.03,s.panelCutaway,0,.05,2/2,!1,!1);m.add(G),R.push(G);let z=g(.82,.82,.22,28,s.fanHousing,0,3.6/2+.11,0,0,0,!0),Z=g(.72,.72,.05,4,s.fanImpeller,0,3.6/2+.14,0);m.add(z,Z),T.push(()=>{Z.rotation.y+=.16}),[-.6,.6].forEach(V=>{m.add(g(.26,.26,.9,16,s.motorCast,V,-3.6/2+.6,-.2))}),m.add(g(.22,.22,1.1,16,s.motorCast,-1.1,-3.6/2+.7,.2)),m.add(l(3.2-.2,2.6,.1,s.coolingFin,0,.2,-2/2+.08)),m.add(l(.22,.18,.14,s.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(k==="vrf-ic"){let G=new Vt;G.rotation.x=-Math.PI+.55,m.add(G);let z=l(2.8,.8,2.8,s.galvSteel,0,.5,0),Z=l(3.2,.08,3.2,s.panelSolid,0,.05,0);G.add(z,Z);let V=l(1.6,.02,1.6,s.filterCloth,0,.02,0);G.add(V),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([ue,ye,Fe])=>{let Be=l(1.7,.03,.16,s.doorHandle,ue,.01,ye);Be.rotation.y=Fe,G.add(Be)});let be=g(.65,.65,.35,20,s.fanImpeller,0,.5,0);G.add(be),T.push(()=>{be.rotation.y+=.14}),G.add(l(.18,.22,.18,s.actuatorOrange,1.3,.5,.8)),G.add(g(.04,.04,.3,12,s.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let G=l(4.6,.04,2,s.stainless,0,.8,-.3),z=l(4.6,1.6,.04,s.stainless,0,0,-2.6/2),Z=l(.04,1.6,2.6,s.stainless,-4.6/2,0,0),V=l(.04,1.6,2.6,s.stainless,4.6/2,0,0),be=l(4.6,.9,.04,s.stainless,0,.25,2.6/2-.2);be.rotation.x=.5,m.add(G,z,Z,V,be),m.add(g(.55,.55,.3,24,s.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let ue=-4.6/2+.6;ue<=4.6/2-.6;ue+=.75){let ye=l(.68,.04,1.3,s.aluFrame,ue,-.2,.1);ye.rotation.x=-.4,m.add(ye)}m.add(g(.1,.08,.18,16,s.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),m.add(g(.02,.02,4.6-.6,12,s.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(ue=>{let ye=g(.035,.02,.09,10,s.brassGold,ue,-.12,.85);m.add(ye)}),m.add(l(.14,.2,.08,s.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}i==="tks"?L(w):i==="thks"?F(w):i==="rooftop"?Q(w):["thrv-dx","hrv"].includes(i)?U(w,i):["tdf","yangin-fani","jet-fan"].includes(i)?X(w,i):["galvaniz-kanal","spiral-kanal","paslanmaz-kanal"].includes(i)?re(w,i):["menfez","difuzor","damper"].includes(i)?q(w,i):i==="filtre"?pe(w):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?$(w,i):L(w),w.updateMatrixWorld(!0);let ee=new ha().setFromObject(w),ie=ee.getSize(new O),Ze=ee.getCenter(new O);w.position.sub(Ze);let Ie=-ie.y/2;A.position.y=Ie-.05,B.position.y=Ie-.04;let St=Math.max(ie.x,ie.y,ie.z),qe=h.fov*(Math.PI/180),J=Math.abs(St/2/Math.tan(qe/2))*1.05;J=Math.max(J,3.8);let oe=new O(J*.72,J*.38,J*.74),ce=new O(0,0,0);h.position.copy(oe),h.lookAt(ce),u.target.copy(ce),u.update();let Le=null;function ze(m,k,G=650){let z=h.position.clone(),Z=u.target.clone(),V=performance.now();Le={update:be=>{let ue=be-V,ye=Math.min(1,ue/G),Fe=ye*ye*(3-2*ye);h.position.lerpVectors(z,m,Fe),u.target.lerpVectors(Z,k,Fe),u.update(),ye>=1&&(Le=null)}}}let xe=new Vt;a.add(xe);let at=80,dt=[],Xe=new Float32Array(at*3),ft=new Float32Array(at*3),Yt=i==="tks",ri=i==="thks",mt=i==="rooftop",Nt=Yt||ri,Pt=Math.max(2,ie.x/2+.4),It=Math.max(1,ie.y*.45),I=Math.max(1,ie.z*.45);for(let m=0;m<at;m++){let k=Nt?m<at*.7:mt?m<at*.6:m<at*.65;dt.push({isSupply:k,progress:Math.random(),speed:(Nt?.006:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(Nt?.35:It),offsetZ:(Math.random()-.5)*(Nt?.7:I)}),k?(ft[m*3]=.02,ft[m*3+1]=.65,ft[m*3+2]=.98):(ft[m*3]=.95,ft[m*3+1]=.45,ft[m*3+2]=.12)}let Ft=new fi;Ft.setAttribute("position",new yi(Xe,3)),Ft.setAttribute("color",new yi(ft,3));let ot=document.createElement("canvas");ot.width=32,ot.height=32;let Et=ot.getContext("2d"),E=Et.createRadialGradient(16,16,0,16,16,16);E.addColorStop(0,"rgba(255, 255, 255, 1)"),E.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),E.addColorStop(1,"rgba(0, 0, 0, 0)"),Et.fillStyle=E,Et.fillRect(0,0,32,32);let x=new al(ot),P=new mh({size:.15,map:x,transparent:!0,opacity:.85,vertexColors:!0,blending:_s,depthWrite:!1}),K=new ou(Ft,P);xe.add(K),T.push(()=>{if(!Re.cfdEnabled){xe.visible=!1;return}xe.visible=!0;let m=Ft.attributes.position.array;for(let k=0;k<at;k++){let G=dt[k];if(G.progress+=G.speed,G.progress>1&&(G.progress=0),Nt)G.isSupply?(m[k*3]=-4.3+G.progress*8.6,m[k*3+1]=-.65+Math.sin(G.progress*Math.PI*4)*.08+G.offsetY,m[k*3+2]=G.offsetZ):(m[k*3]=1.2-G.progress*5.5,m[k*3+1]=.65+G.offsetY,m[k*3+2]=G.offsetZ);else if(mt)if(G.isSupply){let z=-.4+G.progress*2.8;if(m[k*3]=z,G.progress>.8){let Z=(G.progress-.8)/.2;m[k*3+1]=.05-Z*1.35+G.offsetY*.4}else m[k*3+1]=.05+Math.sin(G.progress*Math.PI*3)*.06+G.offsetY*.6;m[k*3+2]=G.offsetZ*.7}else{let z=k%2===0?-2.2:-1.2;m[k*3]=z+Math.sin(k*1.5+G.progress*6.28)*.22,m[k*3+1]=-.2+G.progress*2.1,m[k*3+2]=Math.cos(k*1.5+G.progress*6.28)*.22}else m[k*3]=-Pt+G.progress*(Pt*2),m[k*3+1]=(G.isSupply?-.2:.2)+G.offsetY,m[k*3+2]=G.offsetZ}Ft.attributes.position.needsUpdate=!0});let ae=new Vt;a.add(ae);function de(m){let k=document.createElement("canvas");k.width=64,k.height=64;let G=k.getContext("2d");G.fillStyle="#0284c7",G.beginPath(),G.arc(32,32,28,0,Math.PI*2),G.fill(),G.lineWidth=4,G.strokeStyle="#ffffff",G.stroke(),G.fillStyle="#ffffff",G.font="bold 26px sans-serif",G.textAlign="center",G.textBaseline="middle",G.fillText(m,32,33);let z=new al(k);return z.minFilter=ii,z}let ve=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],N=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],he=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],ge=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],we=[];ve.forEach((m,k)=>{let G=new Vt,z,Z,V;if(Yt&&N[k])[z,Z,V]=N[k];else if(ri&&he[k])[z,Z,V]=he[k];else if(mt&&ge[k])[z,Z,V]=ge[k];else{let Fe=ve.length,Be=ie.z>ie.x,gt=Be?ie.z:ie.x,wt=-gt/2+.4+k/Math.max(1,Fe-1)*(gt-.8);z=Be?ie.x/2+.4:wt,Z=k%2===0?-.2:.4,V=Be?wt:ie.z/2+.4}G.position.set(z,Z,V);let be=new Ht(new so(.012,.012,.25,8),new wn({color:165063}));be.position.y=-.12;let ue=new dh({map:de(m.num||`0${k+1}`),depthTest:!1}),ye=new tu(ue);ye.scale.set(.42,.42,1),ye.position.y=.05,ye.userData={hotspot:m,pos:[z,Z,V]},G.add(be,ye),ae.add(G),G.userData={hotspot:m,pos:[z,Z,V]},we.push(ye)});let ne=new bu,Pe=new Oe;function Ue(m){let k=c.domElement.getBoundingClientRect();Pe.x=(m.clientX-k.left)/k.width*2-1,Pe.y=-((m.clientY-k.top)/k.height)*2+1,ne.setFromCamera(Pe,h);let G=ne.intersectObjects(we,!0);if(G.length>0){let z=G[0].object;for(;z.parent&&!z.userData.hotspot;)z=z.parent;if(z&&z.userData.hotspot){showHotspotCard(z.userData.hotspot);let Z=z.userData.pos;if(Z){let V=new O(Z[0],Z[1],Z[2]),be=new O(Z[0]*.8+1.2,Z[1]+.5,Z[2]+2.8);ze(be,V,700)}}}}c.domElement.addEventListener("click",Ue);let Re={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};Hg(),Gg(t,r,{onToggleRotate:()=>{Re.autoRotate=!Re.autoRotate,u.autoRotate=Re.autoRotate,er("btn-rotate",Re.autoRotate)},onToggleCfd:()=>{Re.cfdEnabled=!Re.cfdEnabled,er("btn-cfd",Re.cfdEnabled)},onToggleCutaway:()=>{Re.cutawayEnabled=!Re.cutawayEnabled,R.forEach(m=>{let k=m.userData.solidMat||s.panelSolid,G=m.userData.cutawayMat||s.panelCutaway;m.material=Re.cutawayEnabled?G:k}),er("btn-cutaway",Re.cutawayEnabled)},onToggleView:()=>{let m=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),k=m&&window.getComputedStyle(m).display!=="none";m&&(k?(m.style.display="none",t.style.display="block",Re.viewMode="3d",er("btn-view",!1),te()):(m.style.display="flex",t.style.display="none",Re.viewMode="2d",er("btn-view",!0)))},onResetCamera:()=>{ze(oe,ce,650),window.closeHotspotCard()}}),er("btn-rotate",Re.autoRotate),er("btn-cfd",Re.cfdEnabled),er("btn-cutaway",Re.cutawayEnabled),er("btn-view",Re.viewMode==="2d");let pt=null;function D(){pt=requestAnimationFrame(D),Le?Le.update(performance.now()):u.update();for(let m=0;m<T.length;m++)T[m]();c.render(a,h)}D();function te(){if(!t)return;let m=t.clientWidth,k=t.clientHeight||480;m>0&&k>0&&(h.aspect=m/k,h.updateProjectionMatrix(),c.setSize(m,k))}return window.addEventListener("resize",te),{destroy:()=>{cancelAnimationFrame(pt),window.removeEventListener("resize",te),c.dispose()}}}function Hg(){if(document.getElementById("sky-3d-hud-styles"))return;let e=document.createElement("style");e.id="sky-3d-hud-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function Gg(e,t,i){let r=e.closest(".sky-vlog-hero")||e.parentElement||e,a=r.querySelector(".sky-3d-hud-container");a&&a.remove(),a=document.createElement("div"),a.className="sky-3d-hud-container",a.innerHTML=`
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
  `,r.appendChild(n),document.getElementById("btn-rotate").addEventListener("click",i.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",i.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",i.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",i.onToggleView),document.getElementById("btn-reset").addEventListener("click",i.onResetCamera)}function er(e,t){let i=document.getElementById(e);i&&(t?i.classList.add("active"):i.classList.remove("active"))}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>zl()):zl();/*! Bundled license information:

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
