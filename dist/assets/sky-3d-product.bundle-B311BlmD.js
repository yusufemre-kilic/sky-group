var xo="186",aa={ROTATE:0,DOLLY:1,PAN:2},ia={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nu=0,ko=1,su=2,Oa=1,ou=2,Ua=3,Lr=0,xi=1,Ot=2,hr=0,Fa=1,Rs=2,Go=3,Ho=4,lu=5,Qr=100,hu=101,uu=102,cu=103,du=104,pu=200,fu=201,mu=202,gu=203,Kl=204,Jl=205,_u=206,vu=207,Mu=208,Su=209,xu=210,Eu=211,yu=212,Tu=213,bu=214,As=0,Cs=1,Ps=2,Ba=3,Ls=4,Is=5,Ds=6,Us=7,$l=0,wu=1,Ru=2,Yi=0,Ql=1,eh=2,th=3,Eo=4,ih=5,rh=6,ah=7,nh=300,Ir=301,da=302,Xn=303,jn=304,zn=306,Ns=1e3,lr=1001,Os=1002,ui=1003,Au=1004,Xa=1005,ci=1006,qn=1007,Ar=1008,Ri=1009,sh=1010,oh=1011,za=1012,yo=1013,Zi=1014,ji=1015,Ki=1016,To=1017,bo=1018,ka=1020,lh=35902,hh=35899,uh=1021,ch=1022,zi=1023,cr=1026,Cr=1027,dh=1028,wo=1029,Dr=1030,Ro=1031,Ao=1033,En=33776,yn=33777,Tn=33778,bn=33779,Fs=35840,Bs=35841,zs=35842,ks=35843,Gs=36196,Hs=37492,Vs=37496,Ws=37488,Xs=37489,Pn=37490,js=37491,qs=37808,Ys=37809,Zs=37810,Ks=37811,Js=37812,$s=37813,Qs=37814,eo=37815,to=37816,io=37817,ro=37818,ao=37819,no=37820,so=37821,oo=36492,lo=36494,ho=36495,uo=36283,co=36284,Ln=36285,po=36286,Cu=3200,fo=0,Pu=1,vr="",Pi="srgb",In="srgb-linear",Dn="linear",Rt="srgb",Yn=7680,Lu=519,Iu=512,Du=513,Uu=514,Co=515,Nu=516,Ou=517,Po=518,Fu=519,ph=35044,Vo="300 es",qi=2e3,Ga=2001;function Bu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Un(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function zu(){let e=Un("canvas");return e.style.display="block",e}var Wo={};function Nn(...e){let t="THREE."+e.shift();console.log(t,...e)}function fh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ze(...e){e=fh(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function St(...e){e=fh(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function na(...e){let t=e.join(" ");t in Wo||(Wo[t]=!0,Ze(...e))}function ku(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Gu={[As]:Cs,[Ps]:Ds,[Ls]:Us,[Ba]:Is,[Cs]:As,[Ds]:Ps,[Us]:Ls,[Is]:Ba},xr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wn=Math.PI/180,mo=180/Math.PI;function Mr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fi[e&255]+fi[e>>8&255]+fi[e>>16&255]+fi[e>>24&255]+"-"+fi[t&255]+fi[t>>8&255]+"-"+fi[t>>16&15|64]+fi[t>>24&255]+"-"+fi[i&63|128]+fi[i>>8&255]+"-"+fi[i>>16&255]+fi[i>>24&255]+fi[r&255]+fi[r>>8&255]+fi[r>>16&255]+fi[r>>24&255]).toLowerCase()}function ct(e,t,i){return Math.max(t,Math.min(i,e))}function Hu(e,t){return(e%t+t)%t}function Zn(e,t,i){return(1-i)*e+i*t}function Xi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vu={DEG2RAD:wn},oa,Xe=(oa=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ct(this.x,t.x,i.x),this.y=ct(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ct(this.x,t,i),this.y=ct(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ct(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,l=this.y-t.y;return this.x=n*r-l*a+t.x,this.y=n*a+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oa.prototype.isVector2=!0,oa),Sr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,l){let h=i[r+0],u=i[r+1],c=i[r+2],m=i[r+3],_=a[n+0],d=a[n+1],v=a[n+2],y=a[n+3];if(m!==y||h!==_||u!==d||c!==v){let T=h*_+u*d+c*v+m*y;T<0&&(_=-_,d=-d,v=-v,y=-y,T=-T);let M=1-l;if(T<.9995){let f=Math.acos(T),C=Math.sin(f);M=Math.sin(M*f)/C,l=Math.sin(l*f)/C,h=h*M+_*l,u=u*M+d*l,c=c*M+v*l,m=m*M+y*l}else{h=h*M+_*l,u=u*M+d*l,c=c*M+v*l,m=m*M+y*l;let f=1/Math.sqrt(h*h+u*u+c*c+m*m);h*=f,u*=f,c*=f,m*=f}}e[t]=h,e[t+1]=u,e[t+2]=c,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,a,n){let l=i[r],h=i[r+1],u=i[r+2],c=i[r+3],m=a[n],_=a[n+1],d=a[n+2],v=a[n+3];return e[t]=l*v+c*m+h*d-u*_,e[t+1]=h*v+c*_+u*m-l*d,e[t+2]=u*v+c*d+l*_-h*m,e[t+3]=c*v-l*m-h*_-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,l=Math.cos,h=Math.sin,u=l(i/2),c=l(r/2),m=l(a/2),_=h(i/2),d=h(r/2),v=h(a/2);switch(n){case"XYZ":this._x=_*c*m+u*d*v,this._y=u*d*m-_*c*v,this._z=u*c*v+_*d*m,this._w=u*c*m-_*d*v;break;case"YXZ":this._x=_*c*m+u*d*v,this._y=u*d*m-_*c*v,this._z=u*c*v-_*d*m,this._w=u*c*m+_*d*v;break;case"ZXY":this._x=_*c*m-u*d*v,this._y=u*d*m+_*c*v,this._z=u*c*v+_*d*m,this._w=u*c*m-_*d*v;break;case"ZYX":this._x=_*c*m-u*d*v,this._y=u*d*m+_*c*v,this._z=u*c*v-_*d*m,this._w=u*c*m+_*d*v;break;case"YZX":this._x=_*c*m+u*d*v,this._y=u*d*m+_*c*v,this._z=u*c*v-_*d*m,this._w=u*c*m-_*d*v;break;case"XZY":this._x=_*c*m-u*d*v,this._y=u*d*m-_*c*v,this._z=u*c*v+_*d*m,this._w=u*c*m+_*d*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],l=t[5],h=t[9],u=t[2],c=t[6],m=t[10],_=i+l+m;if(_>0){let d=.5/Math.sqrt(_+1);this._w=.25/d,this._x=(c-h)*d,this._y=(a-u)*d,this._z=(n-r)*d}else if(i>l&&i>m){let d=2*Math.sqrt(1+i-l-m);this._w=(c-h)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+u)/d}else if(l>m){let d=2*Math.sqrt(1+l-i-m);this._w=(a-u)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(h+c)/d}else{let d=2*Math.sqrt(1+m-i-l);this._w=(n-r)/d,this._x=(a+u)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,l=t._x,h=t._y,u=t._z,c=t._w;return this._x=i*c+n*l+r*u-a*h,this._y=r*c+n*h+a*l-i*u,this._z=a*c+n*u+i*h-r*l,this._w=n*c-i*l-r*h-a*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,a=-a,n=-n,l=-l);let h=1-t;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);h=Math.sin(h*u)/c,t=Math.sin(t*u)/c,this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},la,k=(la=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,l=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*l,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*l,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*l,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,l=t.y,h=t.z,u=t.w,c=2*(l*a-h*r),m=2*(h*i-n*a),_=2*(n*r-l*i);return this.x=i+u*c+l*_-h*m,this.y=r+u*m+h*c-n*_,this.z=a+u*_+n*m-l*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ct(this.x,t.x,i.x),this.y=ct(this.y,t.y,i.y),this.z=ct(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ct(this.x,t,i),this.y=ct(this.y,t,i),this.z=ct(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,l=i.x,h=i.y,u=i.z;return this.x=a*u-n*h,this.y=n*l-r*u,this.z=r*h-a*l,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Kn.copy(this).projectOnVector(t),this.sub(Kn)}reflect(t){return this.sub(Kn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ct(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la.prototype.isVector3=!0,la),Kn=new k,Xo=new Sr,ha,it=(ha=class{constructor(t,i,r,a,n,l,h,u,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,l,h,u,c)}set(t,i,r,a,n,l,h,u,c){let m=this.elements;return m[0]=t,m[1]=a,m[2]=h,m[3]=i,m[4]=n,m[5]=u,m[6]=r,m[7]=l,m[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,l=r[0],h=r[3],u=r[6],c=r[1],m=r[4],_=r[7],d=r[2],v=r[5],y=r[8],T=a[0],M=a[3],f=a[6],C=a[1],G=a[4],s=a[7],b=a[2],A=a[5],R=a[8];return n[0]=l*T+h*C+u*b,n[3]=l*M+h*G+u*A,n[6]=l*f+h*s+u*R,n[1]=c*T+m*C+_*b,n[4]=c*M+m*G+_*A,n[7]=c*f+m*s+_*R,n[2]=d*T+v*C+y*b,n[5]=d*M+v*G+y*A,n[8]=d*f+v*s+y*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],u=t[6],c=t[7],m=t[8];return i*l*m-i*h*c-r*n*m+r*h*u+a*n*c-a*l*u}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],u=t[6],c=t[7],m=t[8],_=m*l-h*c,d=h*u-m*n,v=c*n-l*u,y=i*_+r*d+a*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/y;return t[0]=_*T,t[1]=(a*c-m*r)*T,t[2]=(h*r-a*l)*T,t[3]=d*T,t[4]=(m*i-a*u)*T,t[5]=(a*n-h*i)*T,t[6]=v*T,t[7]=(r*u-c*i)*T,t[8]=(l*i-r*n)*T,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,l,h){let u=Math.cos(n),c=Math.sin(n);return this.set(r*u,r*c,-r*(u*l+c*h)+l+t,-a*c,a*u,-a*(-c*l+u*h)+h+i,0,0,1),this}scale(t,i){return na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jn.makeScale(t,i)),this}rotate(t){return na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jn.makeRotation(-t)),this}translate(t,i){return na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha.prototype.isMatrix3=!0,ha),Jn=new it,jo=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qo=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wu(){let e={enabled:!0,workingColorSpace:In,spaces:{},convert:function(a,n,l){return this.enabled===!1||n===l||!n||!l||(this.spaces[n].transfer===Rt&&(a.r=ur(a.r),a.g=ur(a.g),a.b=ur(a.b)),this.spaces[n].primaries!==this.spaces[l].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Rt&&(a.r=sa(a.r),a.g=sa(a.g),a.b=sa(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===vr?Dn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,l){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[In]:{primaries:t,whitePoint:r,transfer:Dn,toXYZ:jo,fromXYZ:qo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:r,transfer:Rt,toXYZ:jo,fromXYZ:qo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),e}var gt=Wu();function ur(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function sa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Or,Xu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=Un("canvas")),Or.width=e.width,Or.height=e.height;let r=Or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Un("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=ur(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ju=0,Lo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,l=r.length;n<l;n++)r[n].isDataTexture?a.push($n(r[n].image)):a.push($n(r[n]))}else a=$n(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function $n(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Xu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var qu=0,Qn=new k,Di=class Rn extends xr{constructor(t=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,r=lr,a=lr,n=ci,l=Ar,h=zi,u=Ri,c=Rn.DEFAULT_ANISOTROPY,m=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Mr(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=l,this.anisotropy=c,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qn).x}get height(){return this.source.getSize(Qn).y}get depth(){return this.source.getSize(Qn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ze(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ze(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case lr:t.x=t.x<0?0:1;break;case Os:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case lr:t.y=t.y<0?0:1;break;case Os:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=nh;Di.DEFAULT_ANISOTROPY=1;var ua,qt=(ua=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,l=t.elements;return this.x=l[0]*i+l[4]*r+l[8]*a+l[12]*n,this.y=l[1]*i+l[5]*r+l[9]*a+l[13]*n,this.z=l[2]*i+l[6]*r+l[10]*a+l[14]*n,this.w=l[3]*i+l[7]*r+l[11]*a+l[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,l=t.elements,h=l[0],u=l[4],c=l[8],m=l[1],_=l[5],d=l[9],v=l[2],y=l[6],T=l[10];if(Math.abs(u-m)<.01&&Math.abs(c-v)<.01&&Math.abs(d-y)<.01){if(Math.abs(u+m)<.1&&Math.abs(c+v)<.1&&Math.abs(d+y)<.1&&Math.abs(h+_+T-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(h+1)/2,C=(_+1)/2,G=(T+1)/2,s=(u+m)/4,b=(c+v)/4,A=(d+y)/4;return f>C&&f>G?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=s/r,n=b/r):C>G?C<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(C),r=s/a,n=A/a):G<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(G),r=b/n,a=A/n),this.set(r,a,n,i),this}let M=Math.sqrt((y-d)*(y-d)+(c-v)*(c-v)+(m-u)*(m-u));return Math.abs(M)<.001&&(M=1),this.x=(y-d)/M,this.y=(c-v)/M,this.z=(m-u)/M,this.w=Math.acos((h+_+T-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ct(this.x,t.x,i.x),this.y=ct(this.y,t.y,i.y),this.z=ct(this.z,t.z,i.z),this.w=ct(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ct(this.x,t,i),this.y=ct(this.y,t,i),this.z=ct(this.z,t,i),this.w=ct(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ua.prototype.isVector4=!0,ua),Yu=class extends xr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Di(r),n=i.count;for(let l=0;l<n;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Lo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends Yu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mh=class extends Di{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zu=class extends Di{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Pr,kt=(Pr=class{constructor(t,i,r,a,n,l,h,u,c,m,_,d,v,y,T,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,l,h,u,c,m,_,d,v,y,T,M)}set(t,i,r,a,n,l,h,u,c,m,_,d,v,y,T,M){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=l,f[9]=h,f[13]=u,f[2]=c,f[6]=m,f[10]=_,f[14]=d,f[3]=v,f[7]=y,f[11]=T,f[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Fr.setFromMatrixColumn(t,0).length(),n=1/Fr.setFromMatrixColumn(t,1).length(),l=1/Fr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*l,i[9]=r[9]*l,i[10]=r[10]*l,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,l=Math.cos(r),h=Math.sin(r),u=Math.cos(a),c=Math.sin(a),m=Math.cos(n),_=Math.sin(n);if(t.order==="XYZ"){let d=l*m,v=l*_,y=h*m,T=h*_;i[0]=u*m,i[4]=-u*_,i[8]=c,i[1]=v+y*c,i[5]=d-T*c,i[9]=-h*u,i[2]=T-d*c,i[6]=y+v*c,i[10]=l*u}else if(t.order==="YXZ"){let d=u*m,v=u*_,y=c*m,T=c*_;i[0]=d+T*h,i[4]=y*h-v,i[8]=l*c,i[1]=l*_,i[5]=l*m,i[9]=-h,i[2]=v*h-y,i[6]=T+d*h,i[10]=l*u}else if(t.order==="ZXY"){let d=u*m,v=u*_,y=c*m,T=c*_;i[0]=d-T*h,i[4]=-l*_,i[8]=y+v*h,i[1]=v+y*h,i[5]=l*m,i[9]=T-d*h,i[2]=-l*c,i[6]=h,i[10]=l*u}else if(t.order==="ZYX"){let d=l*m,v=l*_,y=h*m,T=h*_;i[0]=u*m,i[4]=y*c-v,i[8]=d*c+T,i[1]=u*_,i[5]=T*c+d,i[9]=v*c-y,i[2]=-c,i[6]=h*u,i[10]=l*u}else if(t.order==="YZX"){let d=l*u,v=l*c,y=h*u,T=h*c;i[0]=u*m,i[4]=T-d*_,i[8]=y*_+v,i[1]=_,i[5]=l*m,i[9]=-h*m,i[2]=-c*m,i[6]=v*_+y,i[10]=d-T*_}else if(t.order==="XZY"){let d=l*u,v=l*c,y=h*u,T=h*c;i[0]=u*m,i[4]=-_,i[8]=c*m,i[1]=d*_+T,i[5]=l*m,i[9]=v*_-y,i[2]=y*_-v,i[6]=h*m,i[10]=T*_+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,Ju)}lookAt(t,i,r){let a=this.elements;return bi.subVectors(t,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),pr.crossVectors(r,bi),pr.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),pr.crossVectors(r,bi)),pr.normalize(),ja.crossVectors(bi,pr),a[0]=pr.x,a[4]=ja.x,a[8]=bi.x,a[1]=pr.y,a[5]=ja.y,a[9]=bi.y,a[2]=pr.z,a[6]=ja.z,a[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,l=r[0],h=r[4],u=r[8],c=r[12],m=r[1],_=r[5],d=r[9],v=r[13],y=r[2],T=r[6],M=r[10],f=r[14],C=r[3],G=r[7],s=r[11],b=r[15],A=a[0],R=a[4],o=a[8],p=a[12],W=a[1],N=a[5],z=a[9],J=a[13],O=a[2],H=a[6],ae=a[10],j=a[14],_e=a[3],K=a[7],Q=a[11],ne=a[15];return n[0]=l*A+h*W+u*O+c*_e,n[4]=l*R+h*N+u*H+c*K,n[8]=l*o+h*z+u*ae+c*Q,n[12]=l*p+h*J+u*j+c*ne,n[1]=m*A+_*W+d*O+v*_e,n[5]=m*R+_*N+d*H+v*K,n[9]=m*o+_*z+d*ae+v*Q,n[13]=m*p+_*J+d*j+v*ne,n[2]=y*A+T*W+M*O+f*_e,n[6]=y*R+T*N+M*H+f*K,n[10]=y*o+T*z+M*ae+f*Q,n[14]=y*p+T*J+M*j+f*ne,n[3]=C*A+G*W+s*O+b*_e,n[7]=C*R+G*N+s*H+b*K,n[11]=C*o+G*z+s*ae+b*Q,n[15]=C*p+G*J+s*j+b*ne,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],l=t[1],h=t[5],u=t[9],c=t[13],m=t[2],_=t[6],d=t[10],v=t[14],y=t[3],T=t[7],M=t[11],f=t[15],C=u*v-c*d,G=h*v-c*_,s=h*d-u*_,b=l*v-c*m,A=l*d-u*m,R=l*_-h*m;return i*(T*C-M*G+f*s)-r*(y*C-M*b+f*A)+a*(y*G-T*b+f*R)-n*(y*s-T*A+M*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],l=t[5],h=t[9],u=t[2],c=t[6],m=t[10];return i*(l*m-h*c)-r*(n*m-h*u)+a*(n*c-l*u)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],u=t[6],c=t[7],m=t[8],_=t[9],d=t[10],v=t[11],y=t[12],T=t[13],M=t[14],f=t[15],C=i*h-r*l,G=i*u-a*l,s=i*c-n*l,b=r*u-a*h,A=r*c-n*h,R=a*c-n*u,o=m*T-_*y,p=m*M-d*y,W=m*f-v*y,N=_*M-d*T,z=_*f-v*T,J=d*f-v*M,O=C*J-G*z+s*N+b*W-A*p+R*o;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/O;return t[0]=(h*J-u*z+c*N)*H,t[1]=(a*z-r*J-n*N)*H,t[2]=(T*R-M*A+f*b)*H,t[3]=(d*A-_*R-v*b)*H,t[4]=(u*W-l*J-c*p)*H,t[5]=(i*J-a*W+n*p)*H,t[6]=(M*s-y*R-f*G)*H,t[7]=(m*R-d*s+v*G)*H,t[8]=(l*z-h*W+c*o)*H,t[9]=(r*W-i*z-n*o)*H,t[10]=(y*A-T*s+f*C)*H,t[11]=(_*s-m*A-v*C)*H,t[12]=(h*p-l*N-u*o)*H,t[13]=(i*N-r*p+a*o)*H,t[14]=(T*G-y*b-M*C)*H,t[15]=(m*b-_*G+d*C)*H,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,l=t.x,h=t.y,u=t.z,c=n*l,m=n*h;return this.set(c*l+r,c*h-a*u,c*u+a*h,0,c*h+a*u,m*h+r,m*u-a*l,0,c*u-a*h,m*u+a*l,n*u*u+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,l){return this.set(1,r,n,0,t,1,l,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,l=i._y,h=i._z,u=i._w,c=n+n,m=l+l,_=h+h,d=n*c,v=n*m,y=n*_,T=l*m,M=l*_,f=h*_,C=u*c,G=u*m,s=u*_,b=r.x,A=r.y,R=r.z;return a[0]=(1-(T+f))*b,a[1]=(v+s)*b,a[2]=(y-G)*b,a[3]=0,a[4]=(v-s)*A,a[5]=(1-(d+f))*A,a[6]=(M+C)*A,a[7]=0,a[8]=(y+G)*R,a[9]=(M-C)*R,a[10]=(1-(d+T))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let l=Fr.set(a[0],a[1],a[2]).length(),h=Fr.set(a[4],a[5],a[6]).length(),u=Fr.set(a[8],a[9],a[10]).length();n<0&&(l=-l),Oi.copy(this);let c=1/l,m=1/h,_=1/u;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=m,Oi.elements[5]*=m,Oi.elements[6]*=m,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,i.setFromRotationMatrix(Oi),r.x=l,r.y=h,r.z=u,this}makePerspective(t,i,r,a,n,l,h=qi,u=!1){let c=this.elements,m=2*n/(i-t),_=2*n/(r-a),d=(i+t)/(i-t),v=(r+a)/(r-a),y,T;if(u)y=n/(l-n),T=l*n/(l-n);else if(h===qi)y=-(l+n)/(l-n),T=-2*l*n/(l-n);else if(h===Ga)y=-l/(l-n),T=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return c[0]=m,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=_,c[9]=v,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,l,h=qi,u=!1){let c=this.elements,m=2/(i-t),_=2/(r-a),d=-(i+t)/(i-t),v=-(r+a)/(r-a),y,T;if(u)y=1/(l-n),T=l/(l-n);else if(h===qi)y=-2/(l-n),T=-(l+n)/(l-n);else if(h===Ga)y=-1/(l-n),T=-n/(l-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return c[0]=m,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=_,c[9]=0,c[13]=v,c[2]=0,c[6]=0,c[10]=y,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Pr.prototype.isMatrix4=!0,Pr),Fr=new k,Oi=new kt,Ku=new k(0,0,0),Ju=new k(1,1,1),pr=new k,ja=new k,bi=new k,Yo=new kt,Zo=new Sr,pa=class gh{constructor(t=0,i=0,r=0,a=gh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],l=a[4],h=a[8],u=a[1],c=a[5],m=a[9],_=a[2],d=a[6],v=a[10];switch(i){case"XYZ":this._y=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-_,n),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,c)):(this._y=0,this._z=Math.atan2(u,n));break;case"ZYX":this._y=Math.asin(-ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(u,n)):(this._x=0,this._z=Math.atan2(-l,c));break;case"YZX":this._z=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,c),this._y=Math.atan2(-_,n)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(h,n)):(this._x=Math.atan2(-m,v),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pa.DEFAULT_ORDER="XYZ";var Io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$u=0,Ko=new k,Br=new Sr,tr=new kt,qa=new k,ya=new k,Qu=new k,ec=new Sr,Jo=new k(1,0,0),$o=new k(0,1,0),Qo=new k(0,0,1),el={type:"added"},tc={type:"removed"},zr={type:"childadded",child:null},es={type:"childremoved",child:null},Mi=class An extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();let t=new k,i=new pa,r=new Sr,a=new k(1,1,1);function n(){r.setFromEuler(i,!1)}function l(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new it}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Br.setFromAxisAngle(t,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,i){return Br.setFromAxisAngle(t,i),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Jo,t)}rotateY(t){return this.rotateOnAxis($o,t)}rotateZ(t){return this.rotateOnAxis(Qo,t)}translateOnAxis(t,i){return Ko.copy(t).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jo,t)}translateY(t){return this.translateOnAxis($o,t)}translateZ(t){return this.translateOnAxis(Qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?qa.copy(t):qa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(ya,qa,this.up):tr.lookAt(qa,ya,this.up),this.quaternion.setFromRotationMatrix(tr),a&&(tr.extractRotation(a.matrixWorld),Br.setFromRotationMatrix(tr),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(St("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),zr.child=t,this.dispatchEvent(zr),zr.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(tc),es.child=t,this.dispatchEvent(es),es.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tr.multiply(t.parent.matrixWorld)),t.applyMatrix4(tr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,l=a.length;n<l;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,ec,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let l=0,h=n.length;l<h;l++)n[l].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let c=0,m=u.length;c<m;c++){let _=u[c];n(t.shapes,_)}else n(t.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,c=this.material.length;u<c;u++)h.push(n(t.materials,this.material[u]));a.material=h}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];a.animations.push(n(t.animations,u))}}if(i){let h=l(t.geometries),u=l(t.materials),c=l(t.textures),m=l(t.images),_=l(t.shapes),d=l(t.skeletons),v=l(t.animations),y=l(t.nodes);h.length>0&&(r.geometries=h),u.length>0&&(r.materials=u),c.length>0&&(r.textures=c),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),d.length>0&&(r.skeletons=d),v.length>0&&(r.animations=v),y.length>0&&(r.nodes=y)}return r.object=a,r;function l(h){let u=[];for(let c in h){let m=h[c];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mi.DEFAULT_UP=new k(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},ic={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,l=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){n=!0;for(let y of e.hand.values()){let T=t.getJointPose(y,i),M=this._getHandJoint(u,y);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}let c=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],_=c.position.distanceTo(m.position),d=.02,v=.005;u.inputState.pinching&&_>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&_<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ic)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),u!==null&&(u.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function is(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=Hu(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=is(n,a,e+1/3),this.g=is(n,a,e),this.b=is(n,a,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Pi){function i(a){a!==void 0&&parseFloat(a)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],l=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pi){let i=_h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return gt.workingToColorSpace(mi.copy(this),e),Math.round(ct(mi.r*255,0,255))*65536+Math.round(ct(mi.g*255,0,255))*256+Math.round(ct(mi.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(mi.copy(this),t);let i=mi.r,r=mi.g,a=mi.b,n=Math.max(i,r,a),l=Math.min(i,r,a),h,u,c=(l+n)/2;if(l===n)h=0,u=0;else{let m=n-l;switch(u=c<=.5?m/(n+l):m/(2-n-l),n){case i:h=(r-a)/m+(r<a?6:0);break;case r:h=(a-i)/m+2;break;case a:h=(i-r)/m+4;break}h/=6}return e.h=h,e.s=u,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(mi.copy(this),t),e.r=mi.r,e.g=mi.g,e.b=mi.b,e}getStyle(e=Pi){gt.workingToColorSpace(mi.copy(this),e);let t=mi.r,i=mi.g,r=mi.b;return e!==Pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(Ya);let i=Zn(fr.h,Ya.h,t),r=Zn(fr.s,Ya.s,t),a=Zn(fr.l,Ya.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mi=new $e;$e.NAMES=_h;var rc=class extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fi=new k,ir=new k,rs=new k,rr=new k,kr=new k,Gr=new k,tl=new k,as=new k,ns=new k,ss=new k,os=new qt,ls=new qt,hs=new qt,ea=class ta{constructor(t=new k,i=new k,r=new k){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Fi.subVectors(t,i),a.cross(Fi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Fi.subVectors(a,i),ir.subVectors(r,i),rs.subVectors(t,i);let l=Fi.dot(Fi),h=Fi.dot(ir),u=Fi.dot(rs),c=ir.dot(ir),m=ir.dot(rs),_=l*c-h*h;if(_===0)return n.set(0,0,0),null;let d=1/_,v=(c*u-h*m)*d,y=(l*m-h*u)*d;return n.set(1-v-y,y,v)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(t,i,r,a,n,l,h,u){return this.getBarycoord(t,i,r,a,rr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(n,rr.x),u.addScaledVector(l,rr.y),u.addScaledVector(h,rr.z),u)}static getInterpolatedAttribute(t,i,r,a,n,l){return os.setScalar(0),ls.setScalar(0),hs.setScalar(0),os.fromBufferAttribute(t,i),ls.fromBufferAttribute(t,r),hs.fromBufferAttribute(t,a),l.setScalar(0),l.addScaledVector(os,n.x),l.addScaledVector(ls,n.y),l.addScaledVector(hs,n.z),l}static isFrontFacing(t,i,r,a){return Fi.subVectors(r,i),ir.subVectors(t,i),Fi.cross(ir).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Fi.cross(ir).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ta.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ta.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return ta.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return ta.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ta.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,l,h;kr.subVectors(a,r),Gr.subVectors(n,r),as.subVectors(t,r);let u=kr.dot(as),c=Gr.dot(as);if(u<=0&&c<=0)return i.copy(r);ns.subVectors(t,a);let m=kr.dot(ns),_=Gr.dot(ns);if(m>=0&&_<=m)return i.copy(a);let d=u*_-m*c;if(d<=0&&u>=0&&m<=0)return l=u/(u-m),i.copy(r).addScaledVector(kr,l);ss.subVectors(t,n);let v=kr.dot(ss),y=Gr.dot(ss);if(y>=0&&v<=y)return i.copy(n);let T=v*c-u*y;if(T<=0&&c>=0&&y<=0)return h=c/(c-y),i.copy(r).addScaledVector(Gr,h);let M=m*y-v*_;if(M<=0&&_-m>=0&&v-y>=0)return tl.subVectors(n,a),h=(_-m)/(_-m+(v-y)),i.copy(a).addScaledVector(tl,h);let f=1/(M+T+d);return l=T*f,h=d*f,i.copy(r).addScaledVector(kr,l).addScaledVector(Gr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ma=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,l=a.count;n<l;n++)e.isMesh===!0?e.getVertexPosition(n,Bi):Bi.fromBufferAttribute(a,n),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Ka.subVectors(this.max,Ta),Hr.subVectors(e.a,Ta),Vr.subVectors(e.b,Ta),Wr.subVectors(e.c,Ta),mr.subVectors(Vr,Hr),gr.subVectors(Wr,Vr),yr.subVectors(Hr,Wr);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-yr.z,yr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,yr.z,0,-yr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-yr.y,yr.x,0];return!us(t,Hr,Vr,Wr,Ka)||(t=[1,0,0,0,1,0,0,0,1],!us(t,Hr,Vr,Wr,Ka))?!1:(Ja.crossVectors(mr,gr),t=[Ja.x,Ja.y,Ja.z],us(t,Hr,Vr,Wr,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new k,new k,new k,new k,new k,new k,new k,new k],Bi=new k,Za=new ma,Hr=new k,Vr=new k,Wr=new k,mr=new k,gr=new k,yr=new k,Ta=new k,Ka=new k,Ja=new k,Tr=new k;function us(e,t,i,r,a){for(let n=0,l=e.length-3;n<=l;n+=3){Tr.fromArray(e,n);let h=a.x*Math.abs(Tr.x)+a.y*Math.abs(Tr.y)+a.z*Math.abs(Tr.z),u=t.dot(Tr),c=i.dot(Tr),m=r.dot(Tr);if(Math.max(-Math.max(u,c,m),Math.min(u,c,m))>h)return!1}return!0}var Zt=new k,$a=new Xe,ac=0,Ii=class extends xr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ac++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},vh=class extends Ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Mh=class extends Ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ii=class extends Ii{constructor(e,t,i){super(new Float32Array(e),t,i)}},nc=new ma,ba=new k,cs=new k,Va=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):nc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(cs)),this.expandByPoint(ba.copy(e.center).sub(cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sc=0,Ci=new kt,ds=new Mi,Xr=new k,wi=new ma,wa=new ma,li=new k,Ei=class Sh extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?Mh:vh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new it().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,r){return Ci.makeTranslation(t,i,r),this.applyMatrix4(Ci),this}scale(t,i,r){return Ci.makeScale(t,i,r),this.applyMatrix4(Ci),this}lookAt(t){return ds.lookAt(t),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let l=t[a];r.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ii(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];wi.setFromBufferAttribute(n),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let r=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),i)for(let n=0,l=i.length;n<l;n++){let h=i[n];wa.setFromBufferAttribute(h),this.morphTargetsRelative?(li.addVectors(wi.min,wa.min),wi.expandByPoint(li),li.addVectors(wi.max,wa.max),wi.expandByPoint(li)):(wi.expandByPoint(wa.min),wi.expandByPoint(wa.max))}wi.getCenter(r);let a=0;for(let n=0,l=t.count;n<l;n++)li.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(li));if(i)for(let n=0,l=i.length;n<l;n++){let h=i[n],u=this.morphTargetsRelative;for(let c=0,m=h.count;c<m;c++)li.fromBufferAttribute(h,c),u&&(Xr.fromBufferAttribute(t,c),li.add(Xr)),a=Math.max(a,r.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==r.count)&&(l=new Ii(new Float32Array(4*r.count),4),this.setAttribute("tangent",l));let h=[],u=[];for(let o=0;o<r.count;o++)h[o]=new k,u[o]=new k;let c=new k,m=new k,_=new k,d=new Xe,v=new Xe,y=new Xe,T=new k,M=new k;function f(o,p,W){c.fromBufferAttribute(r,o),m.fromBufferAttribute(r,p),_.fromBufferAttribute(r,W),d.fromBufferAttribute(n,o),v.fromBufferAttribute(n,p),y.fromBufferAttribute(n,W),m.sub(c),_.sub(c),v.sub(d),y.sub(d);let N=1/(v.x*y.y-y.x*v.y);isFinite(N)&&(T.copy(m).multiplyScalar(y.y).addScaledVector(_,-v.y).multiplyScalar(N),M.copy(_).multiplyScalar(v.x).addScaledVector(m,-y.x).multiplyScalar(N),h[o].add(T),h[p].add(T),h[W].add(T),u[o].add(M),u[p].add(M),u[W].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let o=0,p=C.length;o<p;++o){let W=C[o],N=W.start,z=W.count;for(let J=N,O=N+z;J<O;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let G=new k,s=new k,b=new k,A=new k;function R(o){b.fromBufferAttribute(a,o),A.copy(b);let p=h[o];G.copy(p),G.sub(b.multiplyScalar(b.dot(p))).normalize(),s.crossVectors(A,p);let W=s.dot(u[o])<0?-1:1;l.setXYZW(o,G.x,G.y,G.z,W)}for(let o=0,p=C.length;o<p;++o){let W=C[o],N=W.start,z=W.count;for(let J=N,O=N+z;J<O;J+=3)R(t.getX(J+0)),R(t.getX(J+1)),R(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,v=r.count;d<v;d++)r.setXYZ(d,0,0,0);let a=new k,n=new k,l=new k,h=new k,u=new k,c=new k,m=new k,_=new k;if(t)for(let d=0,v=t.count;d<v;d+=3){let y=t.getX(d+0),T=t.getX(d+1),M=t.getX(d+2);a.fromBufferAttribute(i,y),n.fromBufferAttribute(i,T),l.fromBufferAttribute(i,M),m.subVectors(l,n),_.subVectors(a,n),m.cross(_),h.fromBufferAttribute(r,y),u.fromBufferAttribute(r,T),c.fromBufferAttribute(r,M),h.add(m),u.add(m),c.add(m),r.setXYZ(y,h.x,h.y,h.z),r.setXYZ(T,u.x,u.y,u.z),r.setXYZ(M,c.x,c.y,c.z)}else for(let d=0,v=i.count;d<v;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),l.fromBufferAttribute(i,d+2),m.subVectors(l,n),_.subVectors(a,n),m.cross(_),r.setXYZ(d+0,m.x,m.y,m.z),r.setXYZ(d+1,m.x,m.y,m.z),r.setXYZ(d+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)li.fromBufferAttribute(t,i),li.normalize(),t.setXYZ(i,li.x,li.y,li.z)}toNonIndexed(){function t(h,u){let c=h.array,m=h.itemSize,_=h.normalized,d=new c.constructor(u.length*m),v=0,y=0;for(let T=0,M=u.length;T<M;T++){h.isInterleavedBufferAttribute?v=u[T]*h.data.stride+h.offset:v=u[T]*m;for(let f=0;f<m;f++)d[y++]=c[v++]}return new Ii(d,m,_)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Sh,r=this.index.array,a=this.attributes;for(let h in a){let u=a[h],c=t(u,r);i.setAttribute(h,c)}let n=this.morphAttributes;for(let h in n){let u=[],c=n[h];for(let m=0,_=c.length;m<_;m++){let d=c[m],v=t(d,r);u.push(v)}i.morphAttributes[h]=u}i.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let c=l[h];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let u in r){let c=r[u];t.data.attributes[u]=c.toJSON(t.data)}let a={},n=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],m=[];for(let _=0,d=c.length;_<d;_++){let v=c[_];m.push(v.toJSON(t.data))}m.length>0&&(a[u]=m,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let m=a[c];this.setAttribute(c,m.clone(i))}let n=t.morphAttributes;for(let c in n){let m=[],_=n[c];for(let d=0,v=_.length;d<v;d++)m.push(_[d].clone(i));this.morphAttributes[c]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let c=0,m=l.length;c<m;c++){let _=l[c];this.addGroup(_.start,_.count,_.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_i=new k,il=class xh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)_i.fromBufferAttribute(this,i),_i.applyMatrix4(t),this.setXYZ(i,_i.x,_i.y,_i.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)_i.fromBufferAttribute(this,i),_i.applyNormalMatrix(t),this.setXYZ(i,_i.x,_i.y,_i.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)_i.fromBufferAttribute(this,i),_i.transformDirection(t),this.setXYZ(i,_i.x,_i.y,_i.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Lt(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Lt(i,this.array),r=Lt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Lt(i,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Lt(i,this.array),r=Lt(r,this.array),a=Lt(a,this.array),n=Lt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Nn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Ii(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ps=new k,lc=new k,hc=new it,or=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ps.subVectors(i,t).cross(lc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ps),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hc.getNormalMatrix(e),r=this.coplanarPoint(ps).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},uc=0,dr=class extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Fa,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Jl,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let l in a){let h=a[l];delete h.metadata,n.push(h)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new or().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Eh=class extends dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jr,Ra=new k,qr=new k,Yr=new k,Zr=new Xe,Aa=new Xe,yh=new kt,Qa=new k,Ca=new k,en=new k,rl=new Xe,fs=new Xe,al=new Xe,cc=class extends Mi{constructor(e=new Eh){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Ei;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oc(t,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new il(i,3,0,!1)),jr.setAttribute("uv",new il(i,2,3,!1))}this.geometry=jr,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;tn(Qa.set(-.5,-.5,0),Yr,n,qr,r,a),tn(Ca.set(.5,-.5,0),Yr,n,qr,r,a),tn(en.set(.5,.5,0),Yr,n,qr,r,a),rl.set(0,0),fs.set(1,0),al.set(1,1);let l=e.ray.intersectTriangle(Qa,Ca,en,!1,Ra);if(l===null&&(tn(Ca.set(-.5,.5,0),Yr,n,qr,r,a),fs.set(0,1),l=e.ray.intersectTriangle(Qa,en,Ca,!1,Ra),l===null))return;let h=e.ray.origin.distanceTo(Ra);h<e.near||h>e.far||t.push({distance:h,point:Ra.clone(),uv:ea.getInterpolation(Ra,Qa,Ca,en,rl,fs,al,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function tn(e,t,i,r,a,n){Zr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(Aa.x=n*Zr.x-a*Zr.y,Aa.y=a*Zr.x+n*Zr.y):Aa.copy(Zr),e.copy(t),e.x+=Aa.x,e.y+=Aa.y,e.applyMatrix4(yh)}var nr=new k,ms=new k,rn=new k,an=new k,Wa=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ms.copy(e).add(t).multiplyScalar(.5),rn.copy(t).sub(e).normalize(),an.copy(this.origin).sub(ms);let a=e.distanceTo(t)*.5,n=-this.direction.dot(rn),l=an.dot(this.direction),h=-an.dot(rn),u=an.lengthSq(),c=Math.abs(1-n*n),m,_,d,v;if(c>0)if(m=n*h-l,_=n*l-h,v=a*c,m>=0)if(_>=-v)if(_<=v){let y=1/c;m*=y,_*=y,d=m*(m+n*_+2*l)+_*(n*m+_+2*h)+u}else _=a,m=Math.max(0,-(n*_+l)),d=-m*m+_*(_+2*h)+u;else _=-a,m=Math.max(0,-(n*_+l)),d=-m*m+_*(_+2*h)+u;else _<=-v?(m=Math.max(0,-(-n*a+l)),_=m>0?-a:Math.min(Math.max(-a,-h),a),d=-m*m+_*(_+2*h)+u):_<=v?(m=0,_=Math.min(Math.max(-a,-h),a),d=_*(_+2*h)+u):(m=Math.max(0,-(n*a+l)),_=m>0?a:Math.min(Math.max(-a,-h),a),d=-m*m+_*(_+2*h)+u);else _=n>0?-a:a,m=Math.max(0,-(n*_+l)),d=-m*m+_*(_+2*h)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ms).addScaledVector(rn,_),d}intersectSphere(e,t){if(e.radius<0)return null;nr.subVectors(e.center,this.origin);let i=nr.dot(this.direction),r=nr.dot(nr)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),l=i-n,h=i+n;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,l,h,u=1/this.direction.x,c=1/this.direction.y,m=1/this.direction.z,_=this.origin;return u>=0?(i=(e.min.x-_.x)*u,r=(e.max.x-_.x)*u):(i=(e.max.x-_.x)*u,r=(e.min.x-_.x)*u),c>=0?(a=(e.min.y-_.y)*c,n=(e.max.y-_.y)*c):(a=(e.max.y-_.y)*c,n=(e.min.y-_.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),m>=0?(l=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),i>h||l>r)||((l>i||i!==i)&&(i=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,l=this.direction,h=l.x,u=l.y,c=l.z,m=e.x-n.x,_=e.y-n.y,d=e.z-n.z,v=t.x-n.x,y=t.y-n.y,T=t.z-n.z,M=i.x-n.x,f=i.y-n.y,C=i.z-n.z,G=Math.abs(h),s=Math.abs(u),b=Math.abs(c),A,R,o,p,W,N,z,J,O,H,ae,j;if(G>=s&&G>=b?(o=h,N=m,O=v,j=M,h>=0?(A=u,R=c,p=_,W=d,z=y,J=T,H=f,ae=C):(A=c,R=u,p=d,W=_,z=T,J=y,H=C,ae=f)):s>=b?(o=u,N=_,O=y,j=f,u>=0?(A=c,R=h,p=d,W=m,z=T,J=v,H=C,ae=M):(A=h,R=c,p=m,W=d,z=v,J=T,H=M,ae=C)):(o=c,N=d,O=T,j=C,c>=0?(A=h,R=u,p=m,W=_,z=v,J=y,H=M,ae=f):(A=u,R=h,p=_,W=m,z=y,J=v,H=f,ae=M)),o===0)return null;let _e=A/o,K=R/o,Q=1/o,ne=p-_e*N,Qe=W-K*N,ze=z-_e*O,Ct=J-K*O,Ge=H-_e*j,Y=ae-K*j,he=Ge*Ct-Y*ze,fe=ne*Y-Qe*Ge,He=ze*Qe-Ct*ne;if(r){if(he<0||fe<0||He<0)return null}else if((he<0||fe<0||He<0)&&(he>0||fe>0||He>0))return null;let Ve=he+fe+He;if(Ve===0)return null;let Re=Q*(he*N+fe*O+He*j);return(Ve>0?Re<0:Re>0)?null:this.at(Re/Ve,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nl=new kt,br=new Wa,nn=new Va,sl=new k,sn=new k,on=new k,ln=new k,gs=new k,hn=new k,ol=new k,un=new k,Jt=class extends Mi{constructor(e=new Ei,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(a&&l){hn.set(0,0,0);for(let h=0,u=a.length;h<u;h++){let c=l[h],m=a[h];c!==0&&(gs.fromBufferAttribute(m,e),n?hn.addScaledVector(gs,c):hn.addScaledVector(gs.sub(t),c))}t.add(hn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nn.copy(i.boundingSphere),nn.applyMatrix4(a),br.copy(e.ray).recast(e.near),!(nn.containsPoint(br.origin)===!1&&(br.intersectSphere(nn,sl)===null||br.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(nl.copy(a).invert(),br.copy(e.ray).applyMatrix4(nl),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,l=a.index,h=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,m=a.attributes.normal,_=a.groups,d=a.drawRange;if(l!==null)if(Array.isArray(n))for(let v=0,y=_.length;v<y;v++){let T=_[v],M=n[T.materialIndex],f=Math.max(T.start,d.start),C=Math.min(l.count,Math.min(T.start+T.count,d.start+d.count));for(let G=f,s=C;G<s;G+=3){let b=l.getX(G),A=l.getX(G+1),R=l.getX(G+2);r=cn(this,M,e,i,u,c,m,b,A,R),r&&(r.faceIndex=Math.floor(G/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{let v=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let T=v,M=y;T<M;T+=3){let f=l.getX(T),C=l.getX(T+1),G=l.getX(T+2);r=cn(this,n,e,i,u,c,m,f,C,G),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(n))for(let v=0,y=_.length;v<y;v++){let T=_[v],M=n[T.materialIndex],f=Math.max(T.start,d.start),C=Math.min(h.count,Math.min(T.start+T.count,d.start+d.count));for(let G=f,s=C;G<s;G+=3){let b=G,A=G+1,R=G+2;r=cn(this,M,e,i,u,c,m,b,A,R),r&&(r.faceIndex=Math.floor(G/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{let v=Math.max(0,d.start),y=Math.min(h.count,d.start+d.count);for(let T=v,M=y;T<M;T+=3){let f=T,C=T+1,G=T+2;r=cn(this,n,e,i,u,c,m,f,C,G),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}}};function dc(e,t,i,r,a,n,l,h){let u;if(t.side===xi?u=r.intersectTriangle(l,n,a,!0,h):u=r.intersectTriangle(a,n,l,t.side===Lr,h),u===null)return null;un.copy(h),un.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(un);return c<i.near||c>i.far?null:{distance:c,point:un.clone(),object:e}}function cn(e,t,i,r,a,n,l,h,u,c){e.getVertexPosition(h,sn),e.getVertexPosition(u,on),e.getVertexPosition(c,ln);let m=dc(e,t,i,r,sn,on,ln,ol);if(m){let _=new k;ea.getBarycoord(ol,sn,on,ln,_),a&&(m.uv=ea.getInterpolatedAttribute(a,h,u,c,_,new Xe)),n&&(m.uv1=ea.getInterpolatedAttribute(n,h,u,c,_,new Xe)),l&&(m.normal=ea.getInterpolatedAttribute(l,h,u,c,_,new k),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));let d={a:h,b:u,c,normal:new k,materialIndex:0};ea.getNormal(sn,on,ln,d.normal),m.face=d,m.barycoord=_}return m}var pc=class extends Di{constructor(e=null,t=1,i=1,r,a,n,l,h,u=ui,c=ui,m,_){super(null,n,l,h,u,c,r,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wr=new Va,fc=new Xe(.5,.5),dn=new k,Do=class{constructor(e=new or,t=new or,i=new or,r=new or,a=new or,n=new or){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){let r=this.planes,a=e.elements,n=a[0],l=a[1],h=a[2],u=a[3],c=a[4],m=a[5],_=a[6],d=a[7],v=a[8],y=a[9],T=a[10],M=a[11],f=a[12],C=a[13],G=a[14],s=a[15];if(r[0].setComponents(u-n,d-c,M-v,s-f).normalize(),r[1].setComponents(u+n,d+c,M+v,s+f).normalize(),r[2].setComponents(u+l,d+m,M+y,s+C).normalize(),r[3].setComponents(u-l,d-m,M-y,s-C).normalize(),i)r[4].setComponents(h,_,T,G).normalize(),r[5].setComponents(u-h,d-_,M-T,s-G).normalize();else if(r[4].setComponents(u-h,d-_,M-T,s-G).normalize(),t===qi)r[5].setComponents(u+h,d+_,M+T,s+G).normalize();else if(t===Ga)r[5].setComponents(h,_,T,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);let t=fc.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(dn.x=r.normal.x>0?e.max.x:e.min.x,dn.y=r.normal.y>0?e.max.y:e.min.y,dn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Th=class extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fn=new k,Bn=new k,ll=new kt,Pa=new Wa,pn=new Va,_s=new k,hl=new k,mc=class extends Mi{constructor(e=new Ei,t=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Fn.fromBufferAttribute(t,r-1),Bn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fn.distanceTo(Bn);e.setAttribute("lineDistance",new ii(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pn.copy(i.boundingSphere),pn.applyMatrix4(r),pn.radius+=a,e.ray.intersectsSphere(pn)===!1)return;ll.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(ll);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,c=i.index,m=i.attributes.position;if(c!==null){let _=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let v=_,y=d-1;v<y;v+=u){let T=c.getX(v),M=c.getX(v+1),f=fn(this,e,Pa,h,T,M,v);f&&t.push(f)}if(this.isLineLoop){let v=c.getX(d-1),y=c.getX(_),T=fn(this,e,Pa,h,v,y,d-1);T&&t.push(T)}}else{let _=Math.max(0,n.start),d=Math.min(m.count,n.start+n.count);for(let v=_,y=d-1;v<y;v+=u){let T=fn(this,e,Pa,h,v,v+1,v);T&&t.push(T)}if(this.isLineLoop){let v=fn(this,e,Pa,h,d-1,_,d-1);v&&t.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function fn(e,t,i,r,a,n,l){let h=e.geometry.attributes.position;if(Fn.fromBufferAttribute(h,a),Bn.fromBufferAttribute(h,n),i.distanceSqToSegment(Fn,Bn,_s,hl)>r)return;_s.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(_s);if(!(u<t.near||u>t.far))return{distance:u,point:hl.clone().applyMatrix4(e.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:e}}var ul=new k,cl=new k,gc=class extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)ul.fromBufferAttribute(t,r),cl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ul.distanceTo(cl);e.setAttribute("lineDistance",new ii(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bh=class extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dl=new kt,go=new Wa,mn=new Va,gn=new k,_c=class extends Mi{constructor(e=new Ei,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mn.copy(i.boundingSphere),mn.applyMatrix4(r),mn.radius+=a,e.ray.intersectsSphere(mn)===!1)return;dl.copy(r).invert(),go.copy(e.ray).applyMatrix4(dl);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=i.index,c=i.attributes.position;if(u!==null){let m=Math.max(0,n.start),_=Math.min(u.count,n.start+n.count);for(let d=m,v=_;d<v;d++){let y=u.getX(d);gn.fromBufferAttribute(c,y),pl(gn,y,h,r,e,t,this)}}else{let m=Math.max(0,n.start),_=Math.min(c.count,n.start+n.count);for(let d=m,v=_;d<v;d++)gn.fromBufferAttribute(c,d),pl(gn,d,h,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function pl(e,t,i,r,a,n,l){let h=go.distanceSqToPoint(e);if(h<i){let u=new k;go.closestPointToPoint(e,u),u.applyMatrix4(r);let c=a.ray.origin.distanceTo(u);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var wh=class extends Di{constructor(e=[],t=Ir,i,r,a,n,l,h,u,c){super(e,t,i,r,a,n,l,h,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fl=class extends Di{constructor(e,t,i,r,a,n,l,h,u){super(e,t,i,r,a,n,l,h,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ha=class extends Di{constructor(e,t,i=Zi,r,a,n,l=ui,h=ui,u,c=cr,m=1){if(c!==cr&&c!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:e,height:t,depth:m};super(_,r,a,n,l,h,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vc=class extends Ha{constructor(e,t=Zi,i=Ir,r,a,n=ui,l=ui,h,u=cr){let c={width:e,height:e,depth:1},m=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,l,h,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rh=class extends Di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kn=class Ah extends Ei{constructor(t=1,i=1,r=1,a=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:l};let h=this;a=Math.floor(a),n=Math.floor(n),l=Math.floor(l);let u=[],c=[],m=[],_=[],d=0,v=0;y("z","y","x",-1,-1,r,i,t,l,n,0),y("z","y","x",1,-1,r,i,-t,l,n,1),y("x","z","y",1,1,t,r,i,a,l,2),y("x","z","y",1,-1,t,r,-i,a,l,3),y("x","y","z",1,-1,t,i,r,a,n,4),y("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(u),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(m,3)),this.setAttribute("uv",new ii(_,2));function y(T,M,f,C,G,s,b,A,R,o,p){let W=s/R,N=b/o,z=s/2,J=b/2,O=A/2,H=R+1,ae=o+1,j=0,_e=0,K=new k;for(let Q=0;Q<ae;Q++){let ne=Q*N-J;for(let Qe=0;Qe<H;Qe++){let ze=Qe*W-z;K[T]=ze*C,K[M]=ne*G,K[f]=O,c.push(K.x,K.y,K.z),K[T]=0,K[M]=0,K[f]=A>0?1:-1,m.push(K.x,K.y,K.z),_.push(Qe/R),_.push(1-Q/o),j+=1}}for(let Q=0;Q<o;Q++)for(let ne=0;ne<R;ne++){let Qe=d+ne+H*Q,ze=d+ne+H*(Q+1),Ct=d+(ne+1)+H*(Q+1),Ge=d+(ne+1)+H*Q;u.push(Qe,ze,Ge),u.push(ze,Ct,Ge),_e+=6}h.addGroup(v,_e,p),v+=_e,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},_o=class Ch extends Ei{constructor(t=1,i=1,r=1,a=32,n=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:l,thetaStart:h,thetaLength:u};let c=this;a=Math.floor(a),n=Math.floor(n);let m=[],_=[],d=[],v=[],y=0,T=[],M=r/2,f=0;C(),l===!1&&(t>0&&G(!0),i>0&&G(!1)),this.setIndex(m),this.setAttribute("position",new ii(_,3)),this.setAttribute("normal",new ii(d,3)),this.setAttribute("uv",new ii(v,2));function C(){let s=new k,b=new k,A=0,R=(i-t)/r;for(let o=0;o<=n;o++){let p=[],W=o/n,N=W*(i-t)+t;for(let z=0;z<=a;z++){let J=z/a,O=J*u+h,H=Math.sin(O),ae=Math.cos(O);b.x=N*H,b.y=-W*r+M,b.z=N*ae,_.push(b.x,b.y,b.z),s.set(H,R,ae).normalize(),d.push(s.x,s.y,s.z),v.push(J,1-W),p.push(y++)}T.push(p)}for(let o=0;o<a;o++)for(let p=0;p<n;p++){let W=T[p][o],N=T[p+1][o],z=T[p+1][o+1],J=T[p][o+1];(t>0||p!==0)&&(m.push(W,N,J),A+=3),(i>0||p!==n-1)&&(m.push(N,z,J),A+=3)}c.addGroup(f,A,0),f+=A}function G(s){let b=y,A=new Xe,R=new k,o=0,p=s===!0?t:i,W=s===!0?1:-1;for(let z=1;z<=a;z++)_.push(0,M*W,0),d.push(0,W,0),v.push(.5,.5),y++;let N=y;for(let z=0;z<=a;z++){let J=z/a*u+h,O=Math.cos(J),H=Math.sin(J);R.x=p*H,R.y=M*W,R.z=p*O,_.push(R.x,R.y,R.z),d.push(0,W,0),A.x=O*.5+.5,A.y=H*.5*W+.5,v.push(A.x,A.y),y++}for(let z=0;z<a;z++){let J=b+z,O=N+z;s===!0?m.push(O,O+1,J):m.push(O+1,O,J),o+=3}c.addGroup(f,o,s===!0?1:2),f+=o}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ch(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},La=class Ph extends _o{constructor(t=1,i=1,r=32,a=1,n=!1,l=0,h=Math.PI*2){super(0,t,i,r,a,n,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:l,thetaLength:h}}static fromJSON(t){return new Ph(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Uo=class Lh extends Ei{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,l=i/2,h=Math.floor(r),u=Math.floor(a),c=h+1,m=u+1,_=t/h,d=i/u,v=[],y=[],T=[],M=[];for(let f=0;f<m;f++){let C=f*d-l;for(let G=0;G<c;G++){let s=G*_-n;y.push(s,-C,0),T.push(0,0,1),M.push(G/h),M.push(1-f/u)}}for(let f=0;f<u;f++)for(let C=0;C<h;C++){let G=C+c*f,s=C+c*(f+1),b=C+1+c*(f+1),A=C+1+c*f;v.push(G,s,A),v.push(s,b,A)}this.setIndex(v),this.setAttribute("position",new ii(y,3)),this.setAttribute("normal",new ii(T,3)),this.setAttribute("uv",new ii(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.width,t.height,t.widthSegments,t.heightSegments)}},ml=class Ih extends Ei{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,l=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:l,thetaLength:h},r=Math.floor(r),a=Math.floor(a);let u=[],c=[],m=[],_=[],d=new k,v=new k,y=new k;for(let T=0;T<=r;T++){let M=l+T/r*h;for(let f=0;f<=a;f++){let C=f/a*n;v.x=(t+i*Math.cos(M))*Math.cos(C),v.y=(t+i*Math.cos(M))*Math.sin(C),v.z=i*Math.sin(M),c.push(v.x,v.y,v.z),d.x=t*Math.cos(C),d.y=t*Math.sin(C),y.subVectors(v,d).normalize(),m.push(y.x,y.y,y.z),_.push(f/a),_.push(T/r)}}for(let T=1;T<=r;T++)for(let M=1;M<=a;M++){let f=(a+1)*T+M-1,C=(a+1)*(T-1)+M-1,G=(a+1)*(T-1)+M,s=(a+1)*T+M;u.push(f,C,s),u.push(C,G,s)}this.setIndex(u),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(m,3)),this.setAttribute("uv",new ii(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Mc=class extends dr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function fa(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(gl(a))a.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(gl(a[0])){let n=[];for(let l=0,h=a.length;l<h;l++)n[l]=a[l].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function vi(e){let t={};for(let i=0;i<e.length;i++){let r=fa(e[i]);for(let a in r)t[a]=r[a]}return t}function gl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Sc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Dh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gt.workingColorSpace}var xc={clone:fa,merge:vi},Ec=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ji=class extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ec,this.fragmentShader=yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=Sc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new it().fromArray(r.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tc=class extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zt=class extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bc=class extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},wc=class extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rc=class extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Uh=class extends Mi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vs=new kt,_l=new k,vl=new k,Ac=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vs,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,l=r?r.w/a.y:1,h=r?r.x/a.x:0,u=r?r.y/a.y:0;e.coordinateSystem===Ga||e.reversedDepth?t.set(.5*n,0,0,.5*n+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_n=new k,vn=new Sr,Hi=new k,Nh=class extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_n,vn,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_n,vn,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_n,vn,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_n,vn,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_r=new k,Ml=new Xe,Sl=new Xe,Li=class extends Nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(wn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,Sl),t.subVectors(Sl,Ml)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let h=n.fullWidth,u=n.fullHeight;a+=n.offsetX*r/h,t-=n.offsetY*i/u,r*=n.width/h,i*=n.height/u}let l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},No=class extends Nh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,n=a+u*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cc=class extends Ac{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends Uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mi.DEFAULT_UP),this.updateMatrix(),this.target=new Mi,this.shadow=new Cc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Pc=class extends Uh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Kr=-90,Jr=1,Lc=class extends Mi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Li(Kr,Jr,e,t);r.layers=this.layers,this.add(r);let a=new Li(Kr,Jr,e,t);a.layers=this.layers,this.add(a);let n=new Li(Kr,Jr,e,t);n.layers=this.layers,this.add(n);let l=new Li(Kr,Jr,e,t);l.layers=this.layers,this.add(l);let h=new Li(Kr,Jr,e,t);h.layers=this.layers,this.add(h);let u=new Li(Kr,Jr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,l,h]=t;for(let u of t)this.remove(u);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,l,h,u,c]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(m,_,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Ic=class extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Oh="\\[\\]\\.:\\/",Oo="[^"+Oh+"]",Dc="[^"+Oh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Oo);/(WCOD+)?/.source.replace("WCOD",Dc);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo);var xl=new kt,Uc=class{constructor(e,t,i=0,r=1/0){this.ray=new Wa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xl),this}intersectObject(e,t=!0,i=[]){return vo(e,this,i,t),i.sort(El),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)vo(e[r],this,i,t);return i.sort(El),i}};function El(e,t){return e.distance-t.distance}function vo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let l=0,h=n.length;l<h;l++)vo(n[l],t,i,!0)}}var yl=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ca;ca=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},ca.prototype.isMatrix2=!0;var Nc=class extends gc{constructor(e=10,t=10,i=4473924,r=8947848){i=new $e(i),r=new $e(r);let a=t/2,n=e/t,l=e/2,h=[],u=[];for(let _=0,d=0,v=-l;_<=t;_++,v+=n){h.push(-l,0,v,l,0,v),h.push(v,0,-l,v,0,l);let y=_===a?i:r;y.toArray(u,d),d+=3,y.toArray(u,d),d+=3,y.toArray(u,d),d+=3,y.toArray(u,d),d+=3}let c=new Ei;c.setAttribute("position",new ii(h,3)),c.setAttribute("color",new ii(u,3));let m=new Th({vertexColors:!0,toneMapped:!1});super(c,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Oc=class extends xr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Tl(e,t,i,r){let a=Fc(r);switch(i){case uh:return e*t;case dh:return e*t/a.components*a.byteLength;case wo:return e*t/a.components*a.byteLength;case Dr:return e*t*2/a.components*a.byteLength;case Ro:return e*t*2/a.components*a.byteLength;case ch:return e*t*3/a.components*a.byteLength;case zi:return e*t*4/a.components*a.byteLength;case Ao:return e*t*4/a.components*a.byteLength;case En:case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Tn:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bs:case ks:return Math.max(e,16)*Math.max(t,8)/4;case Fs:case zs:return Math.max(e,8)*Math.max(t,8)/2;case Gs:case Hs:case Ws:case Xs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Pn:case js:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ys:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ks:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Js:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $s:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Qs:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case oo:case lo:case ho:return Math.ceil(e/4)*Math.ceil(t/4)*16;case uo:case co:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ln:case po:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Fc(e){switch(e){case Ri:case sh:return{byteLength:1,components:1};case za:case oh:case Ki:return{byteLength:2,components:1};case To:case bo:return{byteLength:2,components:4};case Zi:case yo:case ji:return{byteLength:4,components:1};case lh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);function Fh(){let e=null,t=!1,i=null,r=null;function a(n,l){r=e.requestAnimationFrame(a),i(n,l)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Bc(e){let t=new WeakMap;function i(h,u){let c=h.array,m=h.usage,_=c.byteLength,d=e.createBuffer();e.bindBuffer(u,d),e.bufferData(u,c,m),h.onUploadCallback();let v;if(c instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)v=e.HALF_FLOAT;else if(c instanceof Uint16Array)h.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=e.SHORT;else if(c instanceof Uint32Array)v=e.UNSIGNED_INT;else if(c instanceof Int32Array)v=e.INT;else if(c instanceof Int8Array)v=e.BYTE;else if(c instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,u,c){let m=u.array,_=u.updateRanges;if(e.bindBuffer(c,h),_.length===0)e.bufferSubData(c,0,m);else{_.sort((v,y)=>v.start-y.start);let d=0;for(let v=1;v<_.length;v++){let y=_[d],T=_[v];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++d,_[d]=T)}_.length=d+1;for(let v=0,y=_.length;v<y;v++){let T=_[v];e.bufferSubData(c,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}u.clearUpdateRanges()}u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function n(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(e.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let c=t.get(h);if(c===void 0)t.set(h,i(h,u));else if(c.version<h.version){if(c.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,h,u),c.version=h.version}}return{get:a,remove:n,update:l}}var zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kc=`#ifdef USE_ALPHAHASH
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
#endif`,Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
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
#endif`,jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qc=`#ifdef USE_BATCHING
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
#endif`,Yc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$c=`#ifdef USE_IRIDESCENCE
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
#endif`,Qc=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ld=`#define PI 3.141592653589793
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
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ud=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Od=`PhysicalMaterial material;
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
#endif`,Fd=`uniform sampler2D dfgLUT;
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
}`,Bd=`
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#define LAMBERT
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
}`,rf=`#define LAMBERT
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
}`,af=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,sf=`#define NORMAL
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
}`,of=`#define NORMAL
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
}`,lf=`#define PHONG
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
}`,hf=`#define PHONG
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
}`,uf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,df=`#define TOON
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
}`,pf=`#define TOON
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
}`,ff=`uniform float size;
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
}`,mf=`uniform vec3 diffuse;
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
}`,gf=`#include <common>
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
}`,_f=`uniform vec3 color;
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
}`,vf=`uniform float rotation;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:zc,alphahash_pars_fragment:kc,alphamap_fragment:Gc,alphamap_pars_fragment:Hc,alphatest_fragment:Vc,alphatest_pars_fragment:Wc,aomap_fragment:Xc,aomap_pars_fragment:jc,batching_pars_vertex:qc,batching_vertex:Yc,begin_vertex:Zc,beginnormal_vertex:Kc,bsdfs:Jc,iridescence_fragment:$c,bumpmap_pars_fragment:Qc,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:id,clipping_planes_vertex:rd,color_fragment:ad,color_pars_fragment:nd,color_pars_vertex:sd,color_vertex:od,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:cd,displacementmap_vertex:dd,emissivemap_fragment:pd,emissivemap_pars_fragment:fd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Ld,envmap_vertex:xd,fog_vertex:Ed,fog_pars_vertex:yd,fog_fragment:Td,fog_pars_fragment:bd,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Rd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Cd,lights_pars_begin:Pd,lights_toon_fragment:Id,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Nd,lights_physical_fragment:Od,lights_physical_pars_fragment:Fd,lights_fragment_begin:Bd,lights_fragment_maps:zd,lights_fragment_end:kd,lightprobes_pars_fragment:Gd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:jd,map_pars_fragment:qd,map_particle_fragment:Yd,map_particle_pars_fragment:Zd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:$d,morphcolor_vertex:Qd,morphnormal_vertex:ep,morphtarget_pars_vertex:tp,morphtarget_vertex:ip,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:np,normal_pars_vertex:sp,normal_vertex:op,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:cp,iridescence_pars_fragment:dp,opaque_fragment:pp,packing:fp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:_p,dithering_pars_fragment:vp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:Ep,shadowmap_vertex:yp,shadowmask_pars_fragment:Tp,skinbase_vertex:bp,skinning_pars_vertex:wp,skinning_vertex:Rp,skinnormal_vertex:Ap,specularmap_fragment:Cp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Dp,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:Op,uv_vertex:Fp,worldpos_vertex:Bp,background_vert:zp,background_frag:kp,backgroundCube_vert:Gp,backgroundCube_frag:Hp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:jp,distance_vert:qp,distance_frag:Yp,equirect_vert:Zp,equirect_frag:Kp,linedashed_vert:Jp,linedashed_frag:$p,meshbasic_vert:Qp,meshbasic_frag:ef,meshlambert_vert:tf,meshlambert_frag:rf,meshmatcap_vert:af,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:of,meshphong_vert:lf,meshphong_frag:hf,meshphysical_vert:uf,meshphysical_frag:cf,meshtoon_vert:df,meshtoon_frag:pf,points_vert:ff,points_frag:mf,shadow_vert:gf,shadow_frag:_f,sprite_vert:vf,sprite_frag:Mf},ye={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Wi={basic:{uniforms:vi([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:vi([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:vi([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:vi([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:vi([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new $e(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:vi([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:vi([ye.points,ye.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:vi([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:vi([ye.common,ye.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:vi([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:vi([ye.sprite,ye.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:vi([ye.common,ye.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:vi([ye.lights,ye.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Wi.physical={uniforms:vi([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Mn={r:0,b:0,g:0},Sf=new kt,Bh=new it;Bh.set(-1,0,0,0,1,0,0,0,1);function xf(e,t,i,r,a,n){let l=new $e(0),h=a===!0?0:1,u,c,m=null,_=0,d=null;function v(C){let G=C.isScene===!0?C.background:null;if(G&&G.isTexture){let s=C.backgroundBlurriness>0;G=t.get(G,s)}return G}function y(C){let G=!1,s=v(C);s===null?M(l,h):s&&s.isColor&&(M(s,1),G=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(C,G){let s=v(G);s&&(s.isCubeTexture||s.mapping===zn)?(c===void 0&&(c=new Jt(new kn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:fa(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=s,c.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(G.backgroundRotation)).transpose(),s.isCubeTexture&&s.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bh),c.material.toneMapped=gt.getTransfer(s.colorSpace)!==Rt,(m!==s||_!==s.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,m=s,_=s.version,d=e.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):s&&s.isTexture&&(u===void 0&&(u=new Jt(new Uo(2,2),new Ji({name:"BackgroundMaterial",uniforms:fa(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=s,u.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,u.material.toneMapped=gt.getTransfer(s.colorSpace)!==Rt,s.matrixAutoUpdate===!0&&s.updateMatrix(),u.material.uniforms.uvTransform.value.copy(s.matrix),(m!==s||_!==s.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,m=s,_=s.version,d=e.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function M(C,G){C.getRGB(Mn,Dh(e)),i.buffers.color.setClear(Mn.r,Mn.g,Mn.b,G,n)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,G=1){l.set(C),h=G,M(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(l,h)},render:y,addToRenderList:T,dispose:f}}function Ef(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,l=!1;function h(N,z,J,O,H){let ae=!1,j=_(N,O,J,z);n!==j&&(n=j,c(n.object)),ae=v(N,O,J,H),ae&&y(N,O,J,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(ae||l)&&(l=!1,s(N,z,J,O),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function u(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function m(N){return e.deleteVertexArray(N)}function _(N,z,J,O){let H=O.wireframe===!0,ae=r[z.id];ae===void 0&&(ae={},r[z.id]=ae);let j=N.isInstancedMesh===!0?N.id:0,_e=ae[j];_e===void 0&&(_e={},ae[j]=_e);let K=_e[J.id];K===void 0&&(K={},_e[J.id]=K);let Q=K[H];return Q===void 0&&(Q=d(u()),K[H]=Q),Q}function d(N){let z=[],J=[],O=[];for(let H=0;H<i;H++)z[H]=0,J[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:O,object:N,attributes:{},index:null}}function v(N,z,J,O){let H=n.attributes,ae=z.attributes,j=0,_e=J.getAttributes();for(let K in _e)if(_e[K].location>=0){let Q=H[K],ne=ae[K];if(ne===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;j++}return n.attributesNum!==j||n.index!==O}function y(N,z,J,O){let H={},ae=z.attributes,j=0,_e=J.getAttributes();for(let K in _e)if(_e[K].location>=0){let Q=ae[K];Q===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),H[K]=ne,j++}n.attributes=H,n.attributesNum=j,n.index=O}function T(){let N=n.newAttributes;for(let z=0,J=N.length;z<J;z++)N[z]=0}function M(N){f(N,0)}function f(N,z){let J=n.newAttributes,O=n.enabledAttributes,H=n.attributeDivisors;J[N]=1,O[N]===0&&(e.enableVertexAttribArray(N),O[N]=1),H[N]!==z&&(e.vertexAttribDivisor(N,z),H[N]=z)}function C(){let N=n.newAttributes,z=n.enabledAttributes;for(let J=0,O=z.length;J<O;J++)z[J]!==N[J]&&(e.disableVertexAttribArray(J),z[J]=0)}function G(N,z,J,O,H,ae,j){j===!0?e.vertexAttribIPointer(N,z,J,H,ae):e.vertexAttribPointer(N,z,J,O,H,ae)}function s(N,z,J,O){T();let H=O.attributes,ae=J.getAttributes(),j=z.defaultAttributeValues;for(let _e in ae){let K=ae[_e];if(K.location>=0){let Q=H[_e];if(Q===void 0&&(_e==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),_e==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let ne=Q.normalized,Qe=Q.itemSize,ze=t.get(Q);if(ze===void 0)continue;let Ct=ze.buffer,Ge=ze.type,Y=ze.bytesPerElement,he=Ge===e.INT||Ge===e.UNSIGNED_INT||Q.gpuType===yo;if(Q.isInterleavedBufferAttribute){let fe=Q.data,He=fe.stride,Ve=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let Re=0;Re<K.locationSize;Re++)f(K.location+Re,fe.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Re=0;Re<K.locationSize;Re++)M(K.location+Re);e.bindBuffer(e.ARRAY_BUFFER,Ct);for(let Re=0;Re<K.locationSize;Re++)G(K.location+Re,Qe/K.locationSize,Ge,ne,He*Y,(Ve+Qe/K.locationSize*Re)*Y,he)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<K.locationSize;fe++)f(K.location+fe,Q.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<K.locationSize;fe++)M(K.location+fe);e.bindBuffer(e.ARRAY_BUFFER,Ct);for(let fe=0;fe<K.locationSize;fe++)G(K.location+fe,Qe/K.locationSize,Ge,ne,Qe*Y,Qe/K.locationSize*fe*Y,he)}}else if(j!==void 0){let ne=j[_e];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(K.location,ne);break;case 3:e.vertexAttrib3fv(K.location,ne);break;case 4:e.vertexAttrib4fv(K.location,ne);break;default:e.vertexAttrib1fv(K.location,ne)}}}}C()}function b(){p();for(let N in r){let z=r[N];for(let J in z){let O=z[J];for(let H in O){let ae=O[H];for(let j in ae)m(ae[j].object),delete ae[j];delete O[H]}}delete r[N]}}function A(N){if(r[N.id]===void 0)return;let z=r[N.id];for(let J in z){let O=z[J];for(let H in O){let ae=O[H];for(let j in ae)m(ae[j].object),delete ae[j];delete O[H]}}delete r[N.id]}function R(N){for(let z in r){let J=r[z];for(let O in J){let H=J[O];if(H[N.id]===void 0)continue;let ae=H[N.id];for(let j in ae)m(ae[j].object),delete ae[j];delete H[N.id]}}}function o(N){for(let z in r){let J=r[z],O=N.isInstancedMesh===!0?N.id:0,H=J[O];if(H!==void 0){for(let ae in H){let j=H[ae];for(let _e in j)m(j[_e].object),delete j[_e];delete H[ae]}delete J[O],Object.keys(J).length===0&&delete r[z]}}}function p(){W(),l=!0,n!==a&&(n=a,c(n.object))}function W(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:p,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:o,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:M,disableUnusedAttributes:C}}function yf(e,t,i){let r;function a(u){r=u}function n(u,c){e.drawArrays(r,u,c),i.update(c,r,1)}function l(u,c,m){m!==0&&(e.drawArraysInstanced(r,u,c,m),i.update(c,r,m))}function h(u,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,c,0,m);let _=0;for(let d=0;d<m;d++)_+=c[d];i.update(_,r,1)}this.setMode=a,this.render=n,this.renderInstances=l,this.renderMultiDraw=h}function Tf(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function l(R){return!(R!==zi&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(R){let o=R===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ri&&R!==ji&&!o&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function u(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",m=u(c);m!==c&&(Ze("WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);let _=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),M=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),C=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),G=e.getParameter(e.MAX_VARYING_VECTORS),s=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:c,logarithmicDepthBuffer:_,reversedDepthBuffer:d,maxTextures:v,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:M,maxAttributes:f,maxVertexUniforms:C,maxVaryings:G,maxFragmentUniforms:s,maxSamples:b,samples:A}}function bf(e){let t=this,i=null,r=0,a=!1,n=!1,l=new or,h=new it,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,d){let v=_.length!==0||d||r!==0||a;return a=d,r=_.length,v},this.beginShadows=function(){n=!0,m(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(_,d){i=m(_,d,0)},this.setState=function(_,d,v){let y=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,f=e.get(_);if(!a||y===null||y.length===0||n&&!M)n?m(null):c();else{let C=n?0:r,G=C*4,s=f.clippingState||null;u.value=s,s=m(y,d,G,v);for(let b=0;b!==G;++b)s[b]=i[b];f.clippingState=s,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function c(){u.value!==i&&(u.value=i,u.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(_,d,v,y){let T=_!==null?_.length:0,M=null;if(T!==0){if(M=u.value,y!==!0||M===null){let f=v+T*4,C=d.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<f)&&(M=new Float32Array(f));for(let G=0,s=v;G!==T;++G,s+=4)l.copy(_[G]).applyMatrix4(C,h),l.normal.toArray(M,s),M[s+3]=l.constant}u.value=M,u.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}var ra=4,wf=6,Rf=20,Af=256,Ia=new No,bl=new $e,Ss=null,xs=0,Es=0,ys=!1,Cf=new k,Rr=new k,wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:l=Cf}=a;Ss=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Es=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,r,h,l),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ss,xs,Es),this._renderer.xr.enabled=ys,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ss=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Es=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Ki,format:zi,colorSpace:In,depthBuffer:!1},r=Rl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pf(a)),this._blurMaterial=If(a,e,t),this._ggxMaterial=Lf(a,e,t)}return r}_compileMaterial(e){let t=new Jt(new Ei,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,i,r,a){let n=new Li(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,m=u.toneMapping;u.getClearColor(bl),u.toneMapping=Yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new kn,new On({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,d=_.material,v=!1,y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,v=!0):(d.color.copy(bl),v=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(n.up.set(0,l[T],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+h[T],a.y,a.z)):M===1?(n.up.set(0,0,l[T]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+h[T],a.z)):(n.up.set(0,l[T],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+h[T]));let f=this._cubeSize;$r(r,M*f,T>2?f:0,f,f),u.setRenderTarget(r),v&&u.render(_,n),u.render(e,n)}u.toneMapping=m,u.autoClear=c,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ir||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let l=a.uniforms;l.envMap.value=e;let h=this._cubeSize;$r(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(n,Ia)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,l=this._lodMeshes[i];l.material=n;let h=n.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-c*c),_=u*1.25,d=m*_,{_lodMax:v}=this,y=this._sizeLods[i],T=3*y*(i>v-ra?i-v+ra:0),M=4*(this._cubeSize-y);h.envMap.value=e.texture,h.roughness.value=d,h.mipInt.value=v-t,$r(a,T,M,3*y,2*y),r.setRenderTarget(a),r.render(l,Ia),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=v-i,$r(e,T,M,3*y,2*y),r.setRenderTarget(e),r.render(l,Ia)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,l=this._blurMaterial,h=this._lodMeshes[r];h.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=a,u.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],m=3*c*(r>this._lodMax-ra?r-this._lodMax+ra:0),_=4*(this._cubeSize-c);$r(t,m,_,3*c,2*c),n.setRenderTarget(t),n.render(h,Ia)}};function Pf(e){let t=[],i=[],r=e,a=e-ra+1+wf;for(let n=0;n<a;n++){let l=Math.pow(2,r);t.push(l);let h=1/(l-2),u=-h,c=1+h,m=[u,u,c,u,c,c,u,u,c,c,u,c],_=6,d=6,v=3,y=new Float32Array(v*d*_),T=new Float32Array(v*d*_);for(let f=0;f<_;f++){let C=f%3*2/3-1,G=f>2?0:-1,s=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];y.set(s,v*d*f);for(let b=0;b<d;b++){let A=m[b*2]*2-1,R=m[b*2+1]*2-1;f===0?Rr.set(1,R,A):f===1?Rr.set(-A,1,-R):f===2?Rr.set(-A,R,1):f===3?Rr.set(-1,R,-A):f===4?Rr.set(-A,-1,R):Rr.set(A,R,-1),Rr.toArray(T,(f*d+b)*v)}}let M=new Ei;M.setAttribute("position",new Ii(y,v)),M.setAttribute("outputDirection",new Ii(T,v)),i.push(new Jt(M,null)),r>ra&&r--}return{lodMeshes:i,sizeLods:t}}function Rl(e,t,i){let r=new ki(e,t,i);return r.texture.mapping=zn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $r(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Lf(e,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Af,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gn(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function If(e,t,i){return new Ji({name:"SphericalGaussianBlur",defines:{SAMPLES:Rf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gn(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Al(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gn(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Cl(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Gn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zh=class extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kn(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xi,blending:hr});a.uniforms.tEquirect.value=t;let n=new Jt(r,a),l=t.minFilter;return t.minFilter===Ar&&(t.minFilter=ci),new Lc(1,10,this).update(e,n),t.minFilter=l,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Df(e){let t=new WeakMap,i=new WeakMap,r=null;function a(d,v=!1){return d==null?null:v?l(d):n(d)}function n(d){if(d&&d.isTexture){let v=d.mapping;if(v===Xn||v===jn)if(t.has(d)){let y=t.get(d).texture;return h(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let T=new zh(y.height);return T.fromEquirectangularTexture(e,d),t.set(d,T),d.addEventListener("dispose",c),h(T.texture,d.mapping)}else return null}}return d}function l(d){if(d&&d.isTexture){let v=d.mapping,y=v===Xn||v===jn,T=v===Ir||v===da;if(y||T){let M=i.get(d),f=M!==void 0?M.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return r===null&&(r=new wl(e)),M=y?r.fromEquirectangular(d,M):r.fromCubemap(d,M),M.texture.pmremVersion=d.pmremVersion,i.set(d,M),M.texture;if(M!==void 0)return M.texture;{let C=d.image;return y&&C&&C.height>0||T&&C&&u(C)?(r===null&&(r=new wl(e)),M=y?r.fromEquirectangular(d):r.fromCubemap(d),M.texture.pmremVersion=d.pmremVersion,i.set(d,M),d.addEventListener("dispose",m),M.texture):null}}}return d}function h(d,v){return v===Xn?d.mapping=Ir:v===jn&&(d.mapping=da),d}function u(d){let v=0,y=6;for(let T=0;T<y;T++)d[T]!==void 0&&v++;return v===y}function c(d){let v=d.target;v.removeEventListener("dispose",c);let y=t.get(v);y!==void 0&&(t.delete(v),y.dispose())}function m(d){let v=d.target;v.removeEventListener("dispose",m);let y=i.get(v);y!==void 0&&(i.delete(v),y.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function Uf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&na("WebGLRenderer: "+r+" extension not supported."),a}}}function Nf(e,t,i,r){let a={},n=new WeakMap;function l(_){let d=_.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",l),delete a[d.id];let v=n.get(d);v&&(t.remove(v),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function h(_,d){return a[d.id]===!0||(d.addEventListener("dispose",l),a[d.id]=!0,i.memory.geometries++),d}function u(_){let d=_.attributes;for(let v in d)t.update(d[v],e.ARRAY_BUFFER)}function c(_){let d=[],v=_.index,y=_.attributes.position,T=0;if(y===void 0)return;if(v!==null){let C=v.array;T=v.version;for(let G=0,s=C.length;G<s;G+=3){let b=C[G+0],A=C[G+1],R=C[G+2];d.push(b,A,A,R,R,b)}}else{let C=y.array;T=y.version;for(let G=0,s=C.length/3-1;G<s;G+=3){let b=G+0,A=G+1,R=G+2;d.push(b,A,A,R,R,b)}}let M=new(y.count>=65535?Mh:vh)(d,1);M.version=T;let f=n.get(_);f&&t.remove(f),n.set(_,M)}function m(_){let d=n.get(_);if(d){let v=_.index;v!==null&&d.version<v.version&&c(_)}else c(_);return n.get(_)}return{get:h,update:u,getWireframeAttribute:m}}function Of(e,t,i){let r;function a(_){r=_}let n,l;function h(_){n=_.type,l=_.bytesPerElement}function u(_,d){e.drawElements(r,d,n,_*l),i.update(d,r,1)}function c(_,d,v){v!==0&&(e.drawElementsInstanced(r,d,n,_*l,v),i.update(d,r,v))}function m(_,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,_,0,v);let y=0;for(let T=0;T<v;T++)y+=d[T];i.update(y,r,1)}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=c,this.renderMultiDraw=m}function Ff(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,l,h){switch(i.calls++,l){case e.TRIANGLES:i.triangles+=h*(n/3);break;case e.LINES:i.lines+=h*(n/2);break;case e.LINE_STRIP:i.lines+=h*(n-1);break;case e.LINE_LOOP:i.lines+=h*n;break;case e.POINTS:i.points+=h*n;break;default:St("WebGLInfo: Unknown draw mode:",l);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Bf(e,t,i){let r=new WeakMap,a=new qt;function n(l,h,u){let c=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,d=r.get(h);if(d===void 0||d.count!==_){let v=function(){o.dispose(),r.delete(h),h.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let y=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,f=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],G=h.morphAttributes.color||[],s=0;y===!0&&(s=1),T===!0&&(s=2),M===!0&&(s=3);let b=h.attributes.position.count*s,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*A*4*_),o=new mh(R,b,A,_);o.type=ji,o.needsUpdate=!0;let p=s*4;for(let W=0;W<_;W++){let N=f[W],z=C[W],J=G[W],O=b*A*4*W;for(let H=0;H<N.count;H++){let ae=H*p;y===!0&&(a.fromBufferAttribute(N,H),R[O+ae+0]=a.x,R[O+ae+1]=a.y,R[O+ae+2]=a.z,R[O+ae+3]=0),T===!0&&(a.fromBufferAttribute(z,H),R[O+ae+4]=a.x,R[O+ae+5]=a.y,R[O+ae+6]=a.z,R[O+ae+7]=0),M===!0&&(a.fromBufferAttribute(J,H),R[O+ae+8]=a.x,R[O+ae+9]=a.y,R[O+ae+10]=a.z,R[O+ae+11]=J.itemSize===4?a.w:1)}}d={count:_,texture:o,size:new Xe(b,A)},r.set(h,d),h.addEventListener("dispose",v)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(e,"morphTexture",l.morphTexture,i);else{let v=0;for(let T=0;T<c.length;T++)v+=c[T];let y=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(e,"morphTargetBaseInfluence",y),u.getUniforms().setValue(e,"morphTargetInfluences",c)}u.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function zf(e,t,i,r,a){let n=new WeakMap;function l(c){let m=a.render.frame,_=c.geometry,d=t.get(c,_);if(n.get(d)!==m&&(t.update(d),n.set(d,m)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),n.get(c)!==m&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,m))),c.isSkinnedMesh){let v=c.skeleton;n.get(v)!==m&&(v.update(),n.set(v,m))}return d}function h(){n=new WeakMap}function u(c){let m=c.target;m.removeEventListener("dispose",u),r.releaseStatesOfObject(m),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:l,dispose:h}}var kf={[Ql]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function Gf(e,t,i,r,a,n){let l=new ki(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,u=null,c=new Ei;c.setAttribute("position",new ii([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ii([0,2,0,0,2,0],2));let m=new Tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Jt(c,m),d=new No(-1,1,1,-1,0,1),v=null,y=null,T=!1,M,f=null,C=[],G=!1;this.setSize=function(s,b){l.setSize(s,b),h!==null&&h.setSize(s,b),u!==null&&u.setSize(s,b);for(let A=0;A<C.length;A++){let R=C[A];R.setSize&&R.setSize(s,b)}},this.setEffects=function(s){C=s,G=C.length>0&&C[0].isRenderPass===!0;let b=l.width,A=l.height;C.length>0&&h===null&&(h=new ki(b,A,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),u=new ki(b,A,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<C.length;R++){let o=C[R];o.setSize&&o.setSize(b,A)}},this.begin=function(s,b){if(T||s.toneMapping===Yi&&C.length===0)return!1;if(f=b,b!==null){let A=b.width,R=b.height;(l.width!==A||l.height!==R)&&this.setSize(A,R)}return G===!1&&s.setRenderTarget(l),M=s.toneMapping,s.toneMapping=Yi,!0},this.hasRenderPass=function(){return G},this.end=function(s,b){s.toneMapping=M,T=!0;let A=l,R=h;for(let o=0;o<C.length;o++){let p=C[o];p.enabled!==!1&&(p.render(s,R,A,b),p.needsSwap!==!1&&(A=R,R=R===h?u:h))}if(v!==s.outputColorSpace||y!==s.toneMapping){v=s.outputColorSpace,y=s.toneMapping,m.defines={},gt.getTransfer(v)===Rt&&(m.defines.SRGB_TRANSFER="");let o=kf[y];o&&(m.defines[o]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=A.texture,s.setRenderTarget(f),s.render(_,d),f=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),u!==null&&u.dispose(),c.dispose(),m.dispose()}}var kh=new Di,Mo=new Ha(1,1),Gh=new mh,Hh=new Zu,Vh=new wh,Pl=[],Ll=[],Il=new Float32Array(16),Dl=new Float32Array(9),Ul=new Float32Array(4);function ga(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Pl[a];if(n===void 0&&(n=new Float32Array(a),Pl[a]=n),t!==0){r.toArray(n,0);for(let l=1,h=0;l!==t;++l)h+=i,e[l].toArray(n,h)}return n}function ri(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ai(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Hn(e,t){let i=Ll[t];i===void 0&&(i=new Int32Array(t),Ll[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Hf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Vf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ri(i,t))return;e.uniform2fv(this.addr,t),ai(i,t)}}function Wf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ri(i,t))return;e.uniform3fv(this.addr,t),ai(i,t)}}function Xf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ri(i,t))return;e.uniform4fv(this.addr,t),ai(i,t)}}function jf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ri(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ai(i,t)}else{if(ri(i,r))return;Ul.set(r),e.uniformMatrix2fv(this.addr,!1,Ul),ai(i,r)}}function qf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ri(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ai(i,t)}else{if(ri(i,r))return;Dl.set(r),e.uniformMatrix3fv(this.addr,!1,Dl),ai(i,r)}}function Yf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ri(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ai(i,t)}else{if(ri(i,r))return;Il.set(r),e.uniformMatrix4fv(this.addr,!1,Il),ai(i,r)}}function Zf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ri(i,t))return;e.uniform2iv(this.addr,t),ai(i,t)}}function Jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ri(i,t))return;e.uniform3iv(this.addr,t),ai(i,t)}}function $f(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ri(i,t))return;e.uniform4iv(this.addr,t),ai(i,t)}}function Qf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ri(i,t))return;e.uniform2uiv(this.addr,t),ai(i,t)}}function tm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ri(i,t))return;e.uniform3uiv(this.addr,t),ai(i,t)}}function im(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ri(i,t))return;e.uniform4uiv(this.addr,t),ai(i,t)}}function rm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Mo.compareFunction=i.isReversedDepthBuffer()?Po:Co,n=Mo):n=kh,i.setTexture2D(t||n,a)}function am(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Hh,a)}function nm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Vh,a)}function sm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Gh,a)}function om(e){switch(e){case 5126:return Hf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return jf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return Zf;case 35667:case 35671:return Kf;case 35668:case 35672:return Jf;case 35669:case 35673:return $f;case 5125:return Qf;case 36294:return em;case 36295:return tm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return sm}}function lm(e,t){e.uniform1fv(this.addr,t)}function hm(e,t){let i=ga(t,this.size,2);e.uniform2fv(this.addr,i)}function um(e,t){let i=ga(t,this.size,3);e.uniform3fv(this.addr,i)}function cm(e,t){let i=ga(t,this.size,4);e.uniform4fv(this.addr,i)}function dm(e,t){let i=ga(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function pm(e,t){let i=ga(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function fm(e,t){let i=ga(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function mm(e,t){e.uniform1iv(this.addr,t)}function gm(e,t){e.uniform2iv(this.addr,t)}function _m(e,t){e.uniform3iv(this.addr,t)}function vm(e,t){e.uniform4iv(this.addr,t)}function Mm(e,t){e.uniform1uiv(this.addr,t)}function Sm(e,t){e.uniform2uiv(this.addr,t)}function xm(e,t){e.uniform3uiv(this.addr,t)}function Em(e,t){e.uniform4uiv(this.addr,t)}function ym(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);ri(r,n)||(e.uniform1iv(this.addr,n),ai(r,n));let l;this.type===e.SAMPLER_2D_SHADOW?l=Mo:l=kh;for(let h=0;h!==a;++h)i.setTexture2D(t[h]||l,n[h])}function Tm(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);ri(r,n)||(e.uniform1iv(this.addr,n),ai(r,n));for(let l=0;l!==a;++l)i.setTexture3D(t[l]||Hh,n[l])}function bm(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);ri(r,n)||(e.uniform1iv(this.addr,n),ai(r,n));for(let l=0;l!==a;++l)i.setTextureCube(t[l]||Vh,n[l])}function wm(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);ri(r,n)||(e.uniform1iv(this.addr,n),ai(r,n));for(let l=0;l!==a;++l)i.setTexture2DArray(t[l]||Gh,n[l])}function Rm(e){switch(e){case 5126:return lm;case 35664:return hm;case 35665:return um;case 35666:return cm;case 35674:return dm;case 35675:return pm;case 35676:return fm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return Mm;case 36294:return Sm;case 36295:return xm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}var Am=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=om(t.type)}},Cm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rm(t.type)}},Pm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let l=r[a];l.setValue(e,t[l.id],i)}}},Ts=/(\w+)(\])?(\[|\.)?/g;function Nl(e,t){e.seq.push(t),e.map[t.id]=t}function Lm(e,t,i){let r=e.name,a=r.length;for(Ts.lastIndex=0;;){let n=Ts.exec(r),l=Ts.lastIndex,h=n[1],u=n[2]==="]",c=n[3];if(u&&(h=h|0),c===void 0||c==="["&&l+2===a){Nl(i,c===void 0?new Am(h,e,t):new Cm(h,e,t));break}else{let m=i.map[h];m===void 0&&(m=new Pm(h),Nl(i,m)),i=m}}}var Cn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let l=e.getActiveUniform(t,n),h=e.getUniformLocation(t,l.name);Lm(l,h,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let l=t[a],h=i[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Ol(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Im=37297,Dm=0;function Um(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let l=a;l<n;l++){let h=l+1;r.push(`${h===t?">":" "} ${h}: ${i[l]}`)}return r.join(`
`)}var Fl=new it;function Nm(e){gt._getMatrix(Fl,gt.workingColorSpace,e);let t=`mat3( ${Fl.elements.map(i=>i.toFixed(4))} )`;switch(gt.getTransfer(e)){case Dn:return[t,"LinearTransferOETF"];case Rt:return[t,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Bl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let l=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Um(e.getShaderSource(t),l)}else return a}function Om(e,t){let i=Nm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Fm={[Ql]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[Eo]:"ACESFilmic",[rh]:"AgX",[ah]:"Neutral",[ih]:"Custom"};function Bm(e,t){let i=Fm[t];return i===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Sn=new k;function zm(){gt.getLuminanceCoefficients(Sn);let e=Sn.x.toFixed(4),t=Sn.y.toFixed(4),i=Sn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function Gm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Hm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),l=n.name,h=1;n.type===e.FLOAT_MAT2&&(h=2),n.type===e.FLOAT_MAT3&&(h=3),n.type===e.FLOAT_MAT4&&(h=4),i[l]={type:n.type,location:e.getAttribLocation(t,l),locationSize:h}}return i}function Na(e){return e!==""}function zl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(e){return e.replace(Vm,Xm)}var Wm=new Map;function Xm(e,t){let i=ot[t];if(i===void 0){let r=Wm.get(t);if(r!==void 0)i=ot[r],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return So(i)}var jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(e){return e.replace(jm,qm)}function qm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Hl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Ym={[Oa]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function Zm(e){return Ym[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Km={[Ir]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[zn]:"ENVMAP_TYPE_CUBE_UV"};function Jm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Km[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var $m={[da]:"ENVMAP_MODE_REFRACTION"};function Qm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":$m[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eg={[$l]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Ru]:"ENVMAP_BLENDING_ADD"};function tg(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":eg[e.combine]||"ENVMAP_BLENDING_NONE"}function ig(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function rg(e,t,i,r){let a=e.getContext(),n=i.defines,l=i.vertexShader,h=i.fragmentShader,u=Zm(i),c=Jm(i),m=Qm(i),_=tg(i),d=ig(i),v=km(i),y=Gm(n),T=a.createProgram(),M,f,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Na).join(`
`),M.length>0&&(M+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Na).join(`
`),f.length>0&&(f+=`
`)):(M=[Hl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),f=[Hl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?ot.tonemapping_pars_fragment:"",i.toneMapping!==Yi?Bm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Om("linearToOutputTexel",i.outputColorSpace),zm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Na).join(`
`)),l=So(l),l=zl(l,i),l=kl(l,i),h=So(h),h=zl(h,i),h=kl(h,i),l=Gl(l),h=Gl(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",i.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let G=C+M+l,s=C+f+h,b=Ol(a,a.VERTEX_SHADER,G),A=Ol(a,a.FRAGMENT_SHADER,s);a.attachShader(T,b),a.attachShader(T,A),i.index0AttributeName!==void 0?a.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function R(N){if(e.debug.checkShaderErrors){let z=a.getProgramInfoLog(T)||"",J=a.getShaderInfoLog(b)||"",O=a.getShaderInfoLog(A)||"",H=z.trim(),ae=J.trim(),j=O.trim(),_e=!0,K=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(_e=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,T,b,A);else{let Q=Bl(a,b,"vertex"),ne=Bl(a,A,"fragment");St("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+Q+`
`+ne)}else H!==""?Ze("WebGLProgram: Program Info Log:",H):(ae===""||j==="")&&(K=!1);K&&(N.diagnostics={runnable:_e,programLog:H,vertexShader:{log:ae,prefix:M},fragmentShader:{log:j,prefix:f}})}a.deleteShader(b),a.deleteShader(A),o=new Cn(a,T),p=Hm(a,T)}let o;this.getUniforms=function(){return o===void 0&&R(this),o};let p;this.getAttributes=function(){return p===void 0&&R(this),p};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=a.getProgramParameter(T,Im)),W},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Dm++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=A,this}var ag=0,ng=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sg(e),t.set(e,i)),i}},sg=class{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}};function og(e){return e===Dr||e===Pn||e===Ln}function lg(e,t,i,r,a,n){let l=new Io,h=new ng,u=new Set,c=[],m=new Map,_=r.logarithmicDepthBuffer,d=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(o){return u.add(o),o===0?"uv":`uv${o}`}function T(o,p,W,N,z,J){let O=N.fog,H=z.geometry,ae=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?N.environment:null,j=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,_e=t.get(o.envMap||ae,j),K=_e&&_e.mapping===zn?_e.image.height:null,Q=v[o.type];o.precision!==null&&(d=r.getMaxPrecision(o.precision),d!==o.precision&&Ze("WebGLProgram.getParameters:",o.precision,"not supported, using",d,"instead."));let ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=ne!==void 0?ne.length:0,ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let Ct,Ge,Y,he;if(Q){let lt=Wi[Q];Ct=lt.vertexShader,Ge=lt.fragmentShader}else{Ct=o.vertexShader,Ge=o.fragmentShader;let lt=h.getVertexShaderStage(o),Et=h.getFragmentShaderStage(o);h.update(o,lt,Et),Y=lt.id,he=Et.id}let fe=e.getRenderTarget(),He=e.state.buffers.depth.getReversed(),Ve=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,yt=!!o.map,pt=!!o.matcap,Je=!!_e,Ft=!!o.aoMap,Gt=!!o.lightMap,di=!!o.bumpMap&&o.wireframe===!1,It=!!o.normalMap,Ht=!!o.displacementMap,Vt=!!o.emissiveMap,Wt=!!o.metalnessMap,L=!!o.roughnessMap,ni=o.anisotropy>0,_t=o.clearcoat>0,Dt=o.dispersion>0,E=o.retroreflectivity>0,S=o.iridescence>0,P=o.sheen>0,q=o.transmission>0,ie=ni&&!!o.anisotropyMap,me=_t&&!!o.clearcoatMap,ve=_t&&!!o.clearcoatNormalMap,F=_t&&!!o.clearcoatRoughnessMap,pe=S&&!!o.iridescenceMap,Me=S&&!!o.iridescenceThicknessMap,Ue=P&&!!o.sheenColorMap,le=P&&!!o.sheenRoughnessMap,Be=!!o.specularMap,ke=!!o.specularColorMap,Ye=!!o.specularIntensityMap,xt=q&&!!o.transmissionMap,U=q&&!!o.thicknessMap,te=!!o.gradientMap,se=!!o.alphaMap,Ce=o.alphaTest>0,Ne=!!o.alphaHash,oe=!!o.extensions,Te=Yi;o.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Te=e.toneMapping);let qe={shaderID:Q,shaderType:o.type,shaderName:o.name,vertexShader:Ct,fragmentShader:Ge,defines:o.defines,customVertexShaderID:Y,customFragmentShaderID:he,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:d,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&z.instanceColor!==null,instancingMorph:Ve&&z.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:yt,matcap:pt,envMap:Je,envMapMode:Je&&_e.mapping,envMapCubeUVHeight:K,aoMap:Ft,lightMap:Gt,bumpMap:di,normalMap:It,displacementMap:Ht,emissiveMap:Vt,normalMapObjectSpace:It&&o.normalMapType===Pu,normalMapTangentSpace:It&&o.normalMapType===fo,packedNormalMap:It&&o.normalMapType===fo&&og(o.normalMap.format),metalnessMap:Wt,roughnessMap:L,anisotropy:ni,anisotropyMap:ie,clearcoat:_t,clearcoatMap:me,clearcoatNormalMap:ve,clearcoatRoughnessMap:F,dispersion:Dt,retroreflection:E,iridescence:S,iridescenceMap:pe,iridescenceThicknessMap:Me,sheen:P,sheenColorMap:Ue,sheenRoughnessMap:le,specularMap:Be,specularColorMap:ke,specularIntensityMap:Ye,transmission:q,transmissionMap:xt,thicknessMap:U,gradientMap:te,opaque:o.transparent===!1&&o.blending===Fa&&o.alphaToCoverage===!1,alphaMap:se,alphaTest:Ce,alphaHash:Ne,combine:o.combine,mapUv:yt&&y(o.map.channel),aoMapUv:Ft&&y(o.aoMap.channel),lightMapUv:Gt&&y(o.lightMap.channel),bumpMapUv:di&&y(o.bumpMap.channel),normalMapUv:It&&y(o.normalMap.channel),displacementMapUv:Ht&&y(o.displacementMap.channel),emissiveMapUv:Vt&&y(o.emissiveMap.channel),metalnessMapUv:Wt&&y(o.metalnessMap.channel),roughnessMapUv:L&&y(o.roughnessMap.channel),anisotropyMapUv:ie&&y(o.anisotropyMap.channel),clearcoatMapUv:me&&y(o.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&y(o.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(o.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&y(o.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(o.sheenColorMap.channel),sheenRoughnessMapUv:le&&y(o.sheenRoughnessMap.channel),specularMapUv:Be&&y(o.specularMap.channel),specularColorMapUv:ke&&y(o.specularColorMap.channel),specularIntensityMapUv:Ye&&y(o.specularIntensityMap.channel),transmissionMapUv:xt&&y(o.transmissionMap.channel),thicknessMapUv:U&&y(o.thicknessMap.channel),alphaMapUv:se&&y(o.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||ni),vertexNormals:!!H.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(yt||se),fog:!!O,useFog:o.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||H.attributes.normal===void 0&&It===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:ze,numSunLights:p.sun.length,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numSunLightShadows:p.sunShadowMap.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&W.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:yt&&o.map.isVideoTexture===!0&&gt.getTransfer(o.map.colorSpace)===Rt,decodeVideoTextureEmissive:Vt&&o.emissiveMap.isVideoTexture===!0&&gt.getTransfer(o.emissiveMap.colorSpace)===Rt,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===Ot,flipSided:o.side===xi,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:oe&&o.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&o.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return qe.vertexUv1s=u.has(1),qe.vertexUv2s=u.has(2),qe.vertexUv3s=u.has(3),u.clear(),qe}function M(o){let p=[];if(o.shaderID?p.push(o.shaderID):(p.push(o.customVertexShaderID),p.push(o.customFragmentShaderID)),o.defines!==void 0)for(let W in o.defines)p.push(W),p.push(o.defines[W]);return o.isRawShaderMaterial===!1&&(f(p,o),C(p,o),p.push(e.outputColorSpace)),p.push(o.customProgramCacheKey),p.join()}function f(o,p){o.push(p.precision),o.push(p.outputColorSpace),o.push(p.envMapMode),o.push(p.envMapCubeUVHeight),o.push(p.mapUv),o.push(p.alphaMapUv),o.push(p.lightMapUv),o.push(p.aoMapUv),o.push(p.bumpMapUv),o.push(p.normalMapUv),o.push(p.displacementMapUv),o.push(p.emissiveMapUv),o.push(p.metalnessMapUv),o.push(p.roughnessMapUv),o.push(p.anisotropyMapUv),o.push(p.clearcoatMapUv),o.push(p.clearcoatNormalMapUv),o.push(p.clearcoatRoughnessMapUv),o.push(p.iridescenceMapUv),o.push(p.iridescenceThicknessMapUv),o.push(p.sheenColorMapUv),o.push(p.sheenRoughnessMapUv),o.push(p.specularMapUv),o.push(p.specularColorMapUv),o.push(p.specularIntensityMapUv),o.push(p.transmissionMapUv),o.push(p.thicknessMapUv),o.push(p.combine),o.push(p.fogExp2),o.push(p.sizeAttenuation),o.push(p.morphTargetsCount),o.push(p.morphAttributeCount),o.push(p.numSunLights),o.push(p.numDirLights),o.push(p.numPointLights),o.push(p.numSpotLights),o.push(p.numSpotLightMaps),o.push(p.numHemiLights),o.push(p.numRectAreaLights),o.push(p.numSunLightShadows),o.push(p.numDirLightShadows),o.push(p.numPointLightShadows),o.push(p.numSpotLightShadows),o.push(p.numSpotLightShadowsWithMaps),o.push(p.numLightProbes),o.push(p.shadowMapType),o.push(p.toneMapping),o.push(p.numClippingPlanes),o.push(p.numClipIntersection),o.push(p.depthPacking)}function C(o,p){l.disableAll(),p.instancing&&l.enable(0),p.instancingColor&&l.enable(1),p.instancingMorph&&l.enable(2),p.matcap&&l.enable(3),p.envMap&&l.enable(4),p.normalMapObjectSpace&&l.enable(5),p.normalMapTangentSpace&&l.enable(6),p.clearcoat&&l.enable(7),p.iridescence&&l.enable(8),p.alphaTest&&l.enable(9),p.vertexColors&&l.enable(10),p.vertexAlphas&&l.enable(11),p.vertexUv1s&&l.enable(12),p.vertexUv2s&&l.enable(13),p.vertexUv3s&&l.enable(14),p.vertexTangents&&l.enable(15),p.anisotropy&&l.enable(16),p.alphaHash&&l.enable(17),p.batching&&l.enable(18),p.dispersion&&l.enable(19),p.retroreflection&&l.enable(24),p.batchingColor&&l.enable(20),p.gradientMap&&l.enable(21),p.packedNormalMap&&l.enable(22),p.vertexNormals&&l.enable(23),o.push(l.mask),l.disableAll(),p.fog&&l.enable(0),p.useFog&&l.enable(1),p.flatShading&&l.enable(2),p.logarithmicDepthBuffer&&l.enable(3),p.reversedDepthBuffer&&l.enable(4),p.skinning&&l.enable(5),p.morphTargets&&l.enable(6),p.morphNormals&&l.enable(7),p.morphColors&&l.enable(8),p.premultipliedAlpha&&l.enable(9),p.shadowMapEnabled&&l.enable(10),p.doubleSided&&l.enable(11),p.flipSided&&l.enable(12),p.useDepthPacking&&l.enable(13),p.dithering&&l.enable(14),p.transmission&&l.enable(15),p.sheen&&l.enable(16),p.opaque&&l.enable(17),p.pointsUvs&&l.enable(18),p.decodeVideoTexture&&l.enable(19),p.decodeVideoTextureEmissive&&l.enable(20),p.alphaToCoverage&&l.enable(21),p.numLightProbeGrids>0&&l.enable(22),p.hasPositionAttribute&&l.enable(23),o.push(l.mask)}function G(o){let p=v[o.type],W;if(p){let N=Wi[p];W=xc.clone(N.uniforms)}else W=o.uniforms;return W}function s(o,p){let W=m.get(p);return W!==void 0?++W.usedTimes:(W=new rg(e,p,o,a),c.push(W),m.set(p,W)),W}function b(o){if(--o.usedTimes===0){let p=c.indexOf(o);c[p]=c[c.length-1],c.pop(),m.delete(o.cacheKey),o.destroy()}}function A(o){h.remove(o)}function R(){h.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:G,acquireProgram:s,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:R}}function hg(){let e=new WeakMap;function t(l){return e.has(l)}function i(l){let h=e.get(l);return h===void 0&&(h={},e.set(l,h)),h}function r(l){e.delete(l)}function a(l,h,u){e.get(l)[h]=u}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function ug(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Vl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Wl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function l(d){let v=0;return d.isInstancedMesh&&(v+=2),d.isSkinnedMesh&&(v+=1),v}function h(d,v,y,T,M,f){let C=e[t];return C===void 0?(C={id:d.id,object:d,geometry:v,material:y,materialVariant:l(d),groupOrder:T,renderOrder:d.renderOrder,z:M,group:f},e[t]=C):(C.id=d.id,C.object=d,C.geometry=v,C.material=y,C.materialVariant=l(d),C.groupOrder=T,C.renderOrder=d.renderOrder,C.z=M,C.group=f),t++,C}function u(d,v,y,T,M,f,C){C.reversedDepth===!0&&(M=-M);let G=h(d,v,y,T,M,f);y.transmission>0?r.push(G):y.transparent===!0?a.push(G):i.push(G)}function c(d,v,y,T,M,f){let C=h(d,v,y,T,M,f);y.transmission>0?r.unshift(C):y.transparent===!0?a.unshift(C):i.unshift(C)}function m(d,v){i.length>1&&i.sort(d||ug),r.length>1&&r.sort(v||Vl),a.length>1&&a.sort(v||Vl)}function _(){for(let d=t,v=e.length;d<v;d++){let y=e[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:u,unshift:c,finish:_,sort:m}}function cg(){let e=new WeakMap;function t(r,a){let n=e.get(r),l;return n===void 0?(l=new Wl,e.set(r,[l])):a>=n.length?(l=new Wl,n.push(l)):l=n[a],l}function i(){e=new WeakMap}return{get:t,dispose:i}}function dg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new k,color:new $e};break;case"SpotLight":i={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":i={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return e[t.id]=i,i}}}function pg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var fg=0;function mg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gg(e){let t=new dg,i=pg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);let a=new k,n=new kt,l=new kt;function h(c){let m=0,_=0,d=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let v=0,y=0,T=0,M=0,f=0,C=0,G=0,s=0,b=0,A=0,R=0,o=0,p=0,W=0;c.sort(mg);for(let z=0,J=c.length;z<J;z++){let O=c[z],H=O.color,ae=O.intensity,j=O.distance,_e=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Dr?_e=O.shadow.map.texture:_e=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)m+=H.r*ae,_+=H.g*ae,d+=H.b*ae;else if(O.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(O.sh.coefficients[K],ae);W++}else if(O.isSunLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Q=O.shadow,ne=i.get(O);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),r.sunShadow[y]=ne,r.sunShadowMap[y]=_e;let Qe=Q.getViewportCount();for(let ze=0;ze<Qe;ze++)r.sunShadowMatrix[T+ze]=Q.getMatrix(ze),r.sunShadowCascade[T+ze]=Q._cascadeData[ze];T+=Qe,y++}r.sun[v]=K,v++}else if(O.isDirectionalLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Q=O.shadow,ne=i.get(O);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,r.directionalShadow[M]=ne,r.directionalShadowMap[M]=_e,r.directionalShadowMatrix[M]=O.shadow.matrix,b++}r.directional[M]=K,M++}else if(O.isSpotLight){let K=t.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(H).multiplyScalar(ae),K.distance=j,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,r.spot[C]=K;let Q=O.shadow;if(O.map&&(r.spotLightMap[o]=O.map,o++,Q.updateMatrices(O),O.castShadow&&p++),r.spotLightMatrix[C]=Q.matrix,O.castShadow){let ne=i.get(O);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,r.spotShadow[C]=ne,r.spotShadowMap[C]=_e,R++}C++}else if(O.isRectAreaLight){let K=t.get(O);K.color.copy(H).multiplyScalar(ae),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),r.rectArea[G]=K,G++}else if(O.isPointLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){let Q=O.shadow,ne=i.get(O);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,r.pointShadow[f]=ne,r.pointShadowMap[f]=_e,r.pointShadowMatrix[f]=O.shadow.matrix,A++}r.point[f]=K,f++}else if(O.isHemisphereLight){let K=t.get(O);K.skyColor.copy(O.color).multiplyScalar(ae),K.groundColor.copy(O.groundColor).multiplyScalar(ae),r.hemi[s]=K,s++}}G>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=d;let N=r.hash;(N.sunLength!==v||N.directionalLength!==M||N.pointLength!==f||N.spotLength!==C||N.rectAreaLength!==G||N.hemiLength!==s||N.numSunShadows!==y||N.numDirectionalShadows!==b||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==o||N.numLightProbes!==W)&&(r.sun.length=v,r.directional.length=M,r.spot.length=C,r.rectArea.length=G,r.point.length=f,r.hemi.length=s,r.sunShadow.length=y,r.sunShadowMap.length=y,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+o-p,r.spotLightMap.length=o,r.numSpotLightShadowsWithMaps=p,r.numLightProbes=W,N.sunLength=v,N.directionalLength=M,N.pointLength=f,N.spotLength=C,N.rectAreaLength=G,N.hemiLength=s,N.numSunShadows=y,N.numDirectionalShadows=b,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=o,N.numLightProbes=W,r.version=fg++)}function u(c,m){let _=0,d=0,v=0,y=0,T=0,M=0,f=m.matrixWorldInverse;for(let C=0,G=c.length;C<G;C++){let s=c[C];if(s.isSunLight){let b=r.sun[_];b.direction.setFromMatrixPosition(s.matrixWorld),b.direction.transformDirection(f),_++}else if(s.isDirectionalLight){let b=r.directional[d];b.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),d++}else if(s.isSpotLight){let b=r.spot[y];b.position.setFromMatrixPosition(s.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),y++}else if(s.isRectAreaLight){let b=r.rectArea[T];b.position.setFromMatrixPosition(s.matrixWorld),b.position.applyMatrix4(f),l.identity(),n.copy(s.matrixWorld),n.premultiply(f),l.extractRotation(n),b.halfWidth.set(s.width*.5,0,0),b.halfHeight.set(0,s.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),T++}else if(s.isPointLight){let b=r.point[v];b.position.setFromMatrixPosition(s.matrixWorld),b.position.applyMatrix4(f),v++}else if(s.isHemisphereLight){let b=r.hemi[M];b.direction.setFromMatrixPosition(s.matrixWorld),b.direction.transformDirection(f),M++}}}return{setup:h,setupView:u,state:r}}function Xl(e){let t=new gg(e),i=[],r=[],a=[];function n(d){_.camera=d,i.length=0,r.length=0,a.length=0}function l(d){i.push(d)}function h(d){r.push(d)}function u(d){a.push(d)}function c(){t.setup(i)}function m(d){t.setupView(i,d)}let _={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:_,setupLights:c,setupLightsView:m,pushLight:l,pushShadow:h,pushLightProbeGrid:u}}function _g(e){let t=new WeakMap;function i(a,n=0){let l=t.get(a),h;return l===void 0?(h=new Xl(e),t.set(a,[h])):n>=l.length?(h=new Xl(e),l.push(h)):h=l[n],h}function r(){t=new WeakMap}return{get:i,dispose:r}}var vg=`void main() {
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
}`,Sg=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],xg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],jl=new kt,Da=new k,bs=new k;function Eg(e,t,i){let r=new Do,a=new Xe,n=new Xe,l=new qt,h=new wc,u=new Rc,c={},m=i.maxTextureSize,_={[Lr]:xi,[xi]:Lr,[Ot]:Ot},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:vg,fragmentShader:Mg}),v=d.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ei;y.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Jt(y,d),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let f=this.type;this.render=function(A,R,o){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||A.length===0)return;this.type===ou&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oa);let p=e.getRenderTarget(),W=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),z=e.state;z.setBlending(hr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let J=f!==this.type;J&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(H=>H.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,H=A.length;O<H;O++){let ae=A[O],j=ae.shadow;if(j===void 0){Ze("WebGLShadowMap:",ae,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);let _e=j.getFrameExtents();a.multiply(_e),n.copy(j.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(n.x=Math.floor(m/_e.x),a.x=n.x*_e.x,j.mapSize.x=n.x),a.y>m&&(n.y=Math.floor(m/_e.y),a.y=n.y*_e.y,j.mapSize.y=n.y));let K=e.state.buffers.depth.getReversed();if(j.camera._reversedDepth=K,j.map===null||J===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ua){if(ae.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ki(a.x,a.y,{format:Dr,type:Ki,minFilter:ci,magFilter:ci,generateMipmaps:!1}),j.map.texture.name=ae.name+".shadowMap",j.map.depthTexture=new Ha(a.x,a.y,ji),j.map.depthTexture.name=ae.name+".shadowMapDepth",j.map.depthTexture.format=cr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=ui,j.map.depthTexture.magFilter=ui}else ae.isPointLight?(j.map=new zh(a.x),j.map.depthTexture=new vc(a.x,Zi)):(j.map=new ki(a.x,a.y),j.map.depthTexture=new Ha(a.x,a.y,Zi)),j.map.depthTexture.name=ae.name+".shadowMap",j.map.depthTexture.format=cr,this.type===Oa?(j.map.depthTexture.compareFunction=K?Po:Co,j.map.depthTexture.minFilter=ci,j.map.depthTexture.magFilter=ci):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=ui,j.map.depthTexture.magFilter=ui);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==a.x||j.map.height!==a.y)&&j.map.setSize(a.x,a.y);let Q=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ae.isPointLight!==!0&&j.updateMatrices(ae,o);for(let ne=0;ne<Q;ne++){let Qe=j.getCamera(ne);if(ae.isPointLight){let ze=j.camera,Ct=j.matrix,Ge=ae.distance||ze.far;Ge!==ze.far&&(ze.far=Ge,ze.updateProjectionMatrix()),Da.setFromMatrixPosition(ae.matrixWorld),ze.position.copy(Da),bs.copy(ze.position),bs.add(Sg[ne]),ze.up.copy(xg[ne]),ze.lookAt(bs),ze.updateMatrixWorld(),Ct.makeTranslation(-Da.x,-Da.y,-Da.z),jl.multiplyMatrices(ze.projectionMatrix,ze.matrixWorldInverse),j._frustum.setFromProjectionMatrix(jl,ze.coordinateSystem,ze.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)e.setRenderTarget(j.map,ne),e.clear();else{ne===0&&(e.setRenderTarget(j.map),e.clear());let ze=j.getViewport(ne);l.set(n.x*ze.x,n.y*ze.y,n.x*ze.z,n.y*ze.w),z.viewport(l)}r=j.getFrustum(ne),s(R,o,Qe,ae,this.type)}j.isPointLightShadow!==!0&&this.type===Ua&&C(j,o),j.needsUpdate=!1}f=this.type,M.needsUpdate=!1,e.setRenderTarget(p,W,N)};function C(A,R){let o=t.update(T);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null?A.mapPass=new ki(a.x,a.y,{format:Dr,type:Ki}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,o,d,T,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value.set(A.map.width,A.map.height),v.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,o,v,T,null)}function G(A,R,o,p){let W=null,N=o.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)W=N;else if(W=o.isPointLight===!0?u:h,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=W.uuid,J=R.uuid,O=c[z];O===void 0&&(O={},c[z]=O);let H=O[J];H===void 0&&(H=W.clone(),O[J]=H,R.addEventListener("dispose",b)),W=H}if(W.visible=R.visible,W.wireframe=R.wireframe,p===Ua?W.side=R.shadowSide!==null?R.shadowSide:R.side:W.side=R.shadowSide!==null?R.shadowSide:_[R.side],W.alphaMap=R.alphaMap,W.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,W.map=R.map,W.clipShadows=R.clipShadows,W.clippingPlanes=R.clippingPlanes,W.clipIntersection=R.clipIntersection,W.displacementMap=R.displacementMap,W.displacementScale=R.displacementScale,W.displacementBias=R.displacementBias,W.wireframeLinewidth=R.wireframeLinewidth,W.linewidth=R.linewidth,o.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let z=e.properties.get(W);z.light=o}return W}function s(A,R,o,p,W){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&W===Ua)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,A.matrixWorld);let z=t.update(A),J=A.material;if(Array.isArray(J)){let O=z.groups;for(let H=0,ae=O.length;H<ae;H++){let j=O[H],_e=J[j.materialIndex];if(_e&&_e.visible){let K=G(A,_e,p,W);A.onBeforeShadow(e,A,R,o,z,K,j),e.renderBufferDirect(o,null,z,K,A,j),A.onAfterShadow(e,A,R,o,z,K,j)}}}else if(J.visible){let O=G(A,J,p,W);A.onBeforeShadow(e,A,R,o,z,O,null),e.renderBufferDirect(o,null,z,O,A,null),A.onAfterShadow(e,A,R,o,z,O,null)}}let N=A.children;for(let z=0,J=N.length;z<J;z++)s(N[z],R,o,p,W)}function b(A){A.target.removeEventListener("dispose",b);for(let R in c){let o=c[R],p=A.target.uuid;p in o&&(o[p].dispose(),delete o[p])}}}function yg(e,t){function i(){let U=!1,te=new qt,se=null,Ce=new qt(0,0,0,0);return{setMask:function(Ne){se!==Ne&&!U&&(e.colorMask(Ne,Ne,Ne,Ne),se=Ne)},setLocked:function(Ne){U=Ne},setClear:function(Ne,oe,Te,qe,lt){lt===!0&&(Ne*=qe,oe*=qe,Te*=qe),te.set(Ne,oe,Te,qe),Ce.equals(te)===!1&&(e.clearColor(Ne,oe,Te,qe),Ce.copy(te))},reset:function(){U=!1,se=null,Ce.set(-1,0,0,0)}}}function r(){let U=!1,te=!1,se=null,Ce=null,Ne=null;return{setReversed:function(oe){if(te!==oe){let Te=t.get("EXT_clip_control");oe?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),te=oe;let qe=Ne;Ne=null,this.setClear(qe)}},getReversed:function(){return te},setTest:function(oe){oe?fe(e.DEPTH_TEST):He(e.DEPTH_TEST)},setMask:function(oe){se!==oe&&!U&&(e.depthMask(oe),se=oe)},setFunc:function(oe){if(te&&(oe=Gu[oe]),Ce!==oe){switch(oe){case As:e.depthFunc(e.NEVER);break;case Cs:e.depthFunc(e.ALWAYS);break;case Ps:e.depthFunc(e.LESS);break;case Ba:e.depthFunc(e.LEQUAL);break;case Ls:e.depthFunc(e.EQUAL);break;case Is:e.depthFunc(e.GEQUAL);break;case Ds:e.depthFunc(e.GREATER);break;case Us:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ce=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Ne!==oe&&(Ne=oe,te&&(oe=1-oe),e.clearDepth(oe))},reset:function(){U=!1,se=null,Ce=null,Ne=null,te=!1}}}function a(){let U=!1,te=null,se=null,Ce=null,Ne=null,oe=null,Te=null,qe=null,lt=null;return{setTest:function(Et){U||(Et?fe(e.STENCIL_TEST):He(e.STENCIL_TEST))},setMask:function(Et){te!==Et&&!U&&(e.stencilMask(Et),te=Et)},setFunc:function(Et,yi,Ti){(se!==Et||Ce!==yi||Ne!==Ti)&&(e.stencilFunc(Et,yi,Ti),se=Et,Ce=yi,Ne=Ti)},setOp:function(Et,yi,Ti){(oe!==Et||Te!==yi||qe!==Ti)&&(e.stencilOp(Et,yi,Ti),oe=Et,Te=yi,qe=Ti)},setLocked:function(Et){U=Et},setClear:function(Et){lt!==Et&&(e.clearStencil(Et),lt=Et)},reset:function(){U=!1,te=null,se=null,Ce=null,Ne=null,oe=null,Te=null,qe=null,lt=null}}}let n=new i,l=new r,h=new a,u=new WeakMap,c=new WeakMap,m={},_={},d={},v=new WeakMap,y=[],T=null,M=!1,f=null,C=null,G=null,s=null,b=null,A=null,R=null,o=new $e(0,0,0),p=0,W=!1,N=null,z=null,J=null,O=null,H=null,ae=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,_e=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=_e>=1):K.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=_e>=2);let Q=null,ne={},Qe=e.getParameter(e.SCISSOR_BOX),ze=e.getParameter(e.VIEWPORT),Ct=new qt().fromArray(Qe),Ge=new qt().fromArray(ze);function Y(U,te,se,Ce){let Ne=new Uint8Array(4),oe=e.createTexture();e.bindTexture(U,oe),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Te=0;Te<se;Te++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,Ce,0,e.RGBA,e.UNSIGNED_BYTE,Ne):e.texImage2D(te+Te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ne);return oe}let he={};he[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),he[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),he[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),l.setClear(1),h.setClear(0),fe(e.DEPTH_TEST),l.setFunc(Ba),di(!1),It(ko),fe(e.CULL_FACE),Ft(hr);function fe(U){m[U]!==!0&&(e.enable(U),m[U]=!0)}function He(U){m[U]!==!1&&(e.disable(U),m[U]=!1)}function Ve(U,te){return d[U]!==te?(e.bindFramebuffer(U,te),d[U]=te,U===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=te),U===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Re(U,te){let se=y,Ce=!1;if(U){se=v.get(te),se===void 0&&(se=[],v.set(te,se));let Ne=U.textures;if(se.length!==Ne.length||se[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Te=Ne.length;oe<Te;oe++)se[oe]=e.COLOR_ATTACHMENT0+oe;se.length=Ne.length,Ce=!0}}else se[0]!==e.BACK&&(se[0]=e.BACK,Ce=!0);Ce&&e.drawBuffers(se)}function yt(U){return T!==U?(e.useProgram(U),T=U,!0):!1}let pt={[Qr]:e.FUNC_ADD,[hu]:e.FUNC_SUBTRACT,[uu]:e.FUNC_REVERSE_SUBTRACT};pt[cu]=e.MIN,pt[du]=e.MAX;let Je={[pu]:e.ZERO,[fu]:e.ONE,[mu]:e.SRC_COLOR,[Kl]:e.SRC_ALPHA,[xu]:e.SRC_ALPHA_SATURATE,[Mu]:e.DST_COLOR,[_u]:e.DST_ALPHA,[gu]:e.ONE_MINUS_SRC_COLOR,[Jl]:e.ONE_MINUS_SRC_ALPHA,[Su]:e.ONE_MINUS_DST_COLOR,[vu]:e.ONE_MINUS_DST_ALPHA,[Eu]:e.CONSTANT_COLOR,[yu]:e.ONE_MINUS_CONSTANT_COLOR,[Tu]:e.CONSTANT_ALPHA,[bu]:e.ONE_MINUS_CONSTANT_ALPHA};function Ft(U,te,se,Ce,Ne,oe,Te,qe,lt,Et){if(U===hr){M===!0&&(He(e.BLEND),M=!1);return}if(M===!1&&(fe(e.BLEND),M=!0),U!==lu){if(U!==f||Et!==W){if((C!==Qr||b!==Qr)&&(e.blendEquation(e.FUNC_ADD),C=Qr,b=Qr),Et)switch(U){case Fa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rs:e.blendFunc(e.ONE,e.ONE);break;case Go:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ho:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:St("WebGLState: Invalid blending: ",U);break}else switch(U){case Fa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Go:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",U);break}G=null,s=null,A=null,R=null,o.set(0,0,0),p=0,f=U,W=Et}return}Ne=Ne||te,oe=oe||se,Te=Te||Ce,(te!==C||Ne!==b)&&(e.blendEquationSeparate(pt[te],pt[Ne]),C=te,b=Ne),(se!==G||Ce!==s||oe!==A||Te!==R)&&(e.blendFuncSeparate(Je[se],Je[Ce],Je[oe],Je[Te]),G=se,s=Ce,A=oe,R=Te),(qe.equals(o)===!1||lt!==p)&&(e.blendColor(qe.r,qe.g,qe.b,lt),o.copy(qe),p=lt),f=U,W=!1}function Gt(U,te){U.side===Ot?He(e.CULL_FACE):fe(e.CULL_FACE);let se=U.side===xi;te&&(se=!se),di(se),U.blending===Fa&&U.transparent===!1?Ft(hr):Ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),n.setMask(U.colorWrite);let Ce=U.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):He(e.SAMPLE_ALPHA_TO_COVERAGE)}function di(U){N!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),N=U)}function It(U){U!==nu?(fe(e.CULL_FACE),U!==z&&(U===ko?e.cullFace(e.BACK):U===su?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):He(e.CULL_FACE),z=U}function Ht(U){U!==J&&(j&&e.lineWidth(U),J=U)}function Vt(U,te,se){U?(fe(e.POLYGON_OFFSET_FILL),(O!==te||H!==se)&&(O=te,H=se,l.getReversed()&&(te=-te),e.polygonOffset(te,se))):He(e.POLYGON_OFFSET_FILL)}function Wt(U){U?fe(e.SCISSOR_TEST):He(e.SCISSOR_TEST)}function L(U){U===void 0&&(U=e.TEXTURE0+ae-1),Q!==U&&(e.activeTexture(U),Q=U)}function ni(U,te,se){se===void 0&&(Q===null?se=e.TEXTURE0+ae-1:se=Q);let Ce=ne[se];Ce===void 0&&(Ce={type:void 0,texture:void 0},ne[se]=Ce),(Ce.type!==U||Ce.texture!==te)&&(Q!==se&&(e.activeTexture(se),Q=se),e.bindTexture(U,te||he[U]),Ce.type=U,Ce.texture=te)}function _t(){let U=ne[Q];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Dt(){try{e.compressedTexImage2D(...arguments)}catch(U){St("WebGLState:",U)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(U){St("WebGLState:",U)}}function S(){try{e.texSubImage2D(...arguments)}catch(U){St("WebGLState:",U)}}function P(){try{e.texSubImage3D(...arguments)}catch(U){St("WebGLState:",U)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(U){St("WebGLState:",U)}}function ie(){try{e.compressedTexSubImage3D(...arguments)}catch(U){St("WebGLState:",U)}}function me(){try{e.texStorage2D(...arguments)}catch(U){St("WebGLState:",U)}}function ve(){try{e.texStorage3D(...arguments)}catch(U){St("WebGLState:",U)}}function F(){try{e.texImage2D(...arguments)}catch(U){St("WebGLState:",U)}}function pe(){try{e.texImage3D(...arguments)}catch(U){St("WebGLState:",U)}}function Me(U){return _[U]!==void 0?_[U]:e.getParameter(U)}function Ue(U,te){_[U]!==te&&(e.pixelStorei(U,te),_[U]=te)}function le(U){Ct.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Ct.copy(U))}function Be(U){Ge.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function ke(U,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let Ce=se.get(U);Ce===void 0&&(Ce=e.getUniformBlockIndex(te,U.name),se.set(U,Ce))}function Ye(U,te){let se=c.get(te).get(U);u.get(te)!==se&&(e.uniformBlockBinding(te,se,U.__bindingPointIndex),u.set(te,se))}function xt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),l.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),m={},_={},Q=null,ne={},d={},v=new WeakMap,y=[],T=null,M=!1,f=null,C=null,G=null,s=null,b=null,A=null,R=null,o=new $e(0,0,0),p=0,W=!1,N=null,z=null,J=null,O=null,H=null,Ct.set(0,0,e.canvas.width,e.canvas.height),Ge.set(0,0,e.canvas.width,e.canvas.height),n.reset(),l.reset(),h.reset()}return{buffers:{color:n,depth:l,stencil:h},enable:fe,disable:He,bindFramebuffer:Ve,drawBuffers:Re,useProgram:yt,setBlending:Ft,setMaterial:Gt,setFlipSided:di,setCullFace:It,setLineWidth:Ht,setPolygonOffset:Vt,setScissorTest:Wt,activeTexture:L,bindTexture:ni,unbindTexture:_t,compressedTexImage2D:Dt,compressedTexImage3D:E,texImage2D:F,texImage3D:pe,pixelStorei:Ue,getParameter:Me,updateUBOMapping:ke,uniformBlockBinding:Ye,texStorage2D:me,texStorage3D:ve,texSubImage2D:S,texSubImage3D:P,compressedTexSubImage2D:q,compressedTexSubImage3D:ie,scissor:le,viewport:Be,reset:xt}}function Tg(e,t,i,r,a,n,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,m=new WeakMap,_=new Set,d,v=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,S){return y?new OffscreenCanvas(E,S):Un("canvas")}function M(E,S,P){let q=1,ie=Dt(E);if((ie.width>P||ie.height>P)&&(q=P/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let me=Math.floor(q*ie.width),ve=Math.floor(q*ie.height);d===void 0&&(d=T(me,ve));let F=S?T(me,ve):d;return F.width=me,F.height=ve,F.getContext("2d").drawImage(E,0,0,me,ve),Ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+me+"x"+ve+")."),F}else return"data"in E&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function f(E){return E.generateMipmaps}function C(E){e.generateMipmap(E)}function G(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function s(E,S,P,q,ie,me=!1){if(E!==null){if(e[E]!==void 0)return e[E];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ve;q&&(ve=t.get("EXT_texture_norm16"),ve||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=S;if(S===e.RED&&(P===e.FLOAT&&(F=e.R32F),P===e.HALF_FLOAT&&(F=e.R16F),P===e.UNSIGNED_BYTE&&(F=e.R8),P===e.UNSIGNED_SHORT&&ve&&(F=ve.R16_EXT),P===e.SHORT&&ve&&(F=ve.R16_SNORM_EXT)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.R8UI),P===e.UNSIGNED_SHORT&&(F=e.R16UI),P===e.UNSIGNED_INT&&(F=e.R32UI),P===e.BYTE&&(F=e.R8I),P===e.SHORT&&(F=e.R16I),P===e.INT&&(F=e.R32I)),S===e.RG&&(P===e.FLOAT&&(F=e.RG32F),P===e.HALF_FLOAT&&(F=e.RG16F),P===e.UNSIGNED_BYTE&&(F=e.RG8),P===e.UNSIGNED_SHORT&&ve&&(F=ve.RG16_EXT),P===e.SHORT&&ve&&(F=ve.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RG8UI),P===e.UNSIGNED_SHORT&&(F=e.RG16UI),P===e.UNSIGNED_INT&&(F=e.RG32UI),P===e.BYTE&&(F=e.RG8I),P===e.SHORT&&(F=e.RG16I),P===e.INT&&(F=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RGB8UI),P===e.UNSIGNED_SHORT&&(F=e.RGB16UI),P===e.UNSIGNED_INT&&(F=e.RGB32UI),P===e.BYTE&&(F=e.RGB8I),P===e.SHORT&&(F=e.RGB16I),P===e.INT&&(F=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),P===e.UNSIGNED_INT&&(F=e.RGBA32UI),P===e.BYTE&&(F=e.RGBA8I),P===e.SHORT&&(F=e.RGBA16I),P===e.INT&&(F=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_SHORT&&ve&&(F=ve.RGB16_EXT),P===e.SHORT&&ve&&(F=ve.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),S===e.RGBA){let pe=me?Dn:gt.getTransfer(ie);P===e.FLOAT&&(F=e.RGBA32F),P===e.HALF_FLOAT&&(F=e.RGBA16F),P===e.UNSIGNED_BYTE&&(F=pe===Rt?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ve&&(F=ve.RGBA16_EXT),P===e.SHORT&&ve&&(F=ve.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function b(E,S){let P;return E?S===null||S===Zi||S===ka?P=e.DEPTH24_STENCIL8:S===ji?P=e.DEPTH32F_STENCIL8:S===za&&(P=e.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zi||S===ka?P=e.DEPTH_COMPONENT24:S===ji?P=e.DEPTH_COMPONENT32F:S===za&&(P=e.DEPTH_COMPONENT16),P}function A(E,S){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==ui&&E.minFilter!==ci?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){let S=E.target;S.removeEventListener("dispose",R),p(S),S.isVideoTexture&&m.delete(S),S.isHTMLTexture&&_.delete(S)}function o(E){let S=E.target;S.removeEventListener("dispose",o),N(S)}function p(E){let S=r.get(E);if(S.__webglInit===void 0)return;let P=E.source,q=v.get(P);if(q){let ie=q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&W(E),Object.keys(q).length===0&&v.delete(P)}r.remove(E)}function W(E){let S=r.get(E);e.deleteTexture(S.__webglTexture);let P=E.source,q=v.get(P);delete q[S.__cacheKey],l.memory.textures--}function N(E){let S=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ie=0;ie<S.__webglFramebuffer[q].length;ie++)e.deleteFramebuffer(S.__webglFramebuffer[q][ie]);else e.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)e.deleteFramebuffer(S.__webglFramebuffer[q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=E.textures;for(let q=0,ie=P.length;q<ie;q++){let me=r.get(P[q]);me.__webglTexture&&(e.deleteTexture(me.__webglTexture),l.memory.textures--),r.remove(P[q])}r.remove(E)}let z=0;function J(){z=0}function O(){return z}function H(E){z=E}function ae(){let E=z;return E>=a.maxTextures&&Ze("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),z+=1,E}function j(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function _e(E,S){let P=r.get(E);if(E.isVideoTexture&&ni(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&P.__version!==E.version){let q=E.image;if(q===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{He(P,E,S);return}}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function K(E,S){let P=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){He(P,E,S);return}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function Q(E,S){let P=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){He(P,E,S);return}i.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function ne(E,S){let P=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&P.__version!==E.version){Ve(P,E,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let Qe={[Ns]:e.REPEAT,[lr]:e.CLAMP_TO_EDGE,[Os]:e.MIRRORED_REPEAT},ze={[ui]:e.NEAREST,[Au]:e.NEAREST_MIPMAP_NEAREST,[Xa]:e.NEAREST_MIPMAP_LINEAR,[ci]:e.LINEAR,[qn]:e.LINEAR_MIPMAP_NEAREST,[Ar]:e.LINEAR_MIPMAP_LINEAR},Ct={[Iu]:e.NEVER,[Fu]:e.ALWAYS,[Du]:e.LESS,[Co]:e.LEQUAL,[Uu]:e.EQUAL,[Po]:e.GEQUAL,[Nu]:e.GREATER,[Ou]:e.NOTEQUAL};function Ge(E,S){if(S.type===ji&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ci||S.magFilter===qn||S.magFilter===Xa||S.magFilter===Ar||S.minFilter===ci||S.minFilter===qn||S.minFilter===Xa||S.minFilter===Ar)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Qe[S.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Qe[S.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Qe[S.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ze[S.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ze[S.minFilter]),S.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ui||S.minFilter!==Xa&&S.minFilter!==Ar||S.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Y(E,S){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",R));let q=S.source,ie=v.get(q);ie===void 0&&(ie={},v.set(q,ie));let me=j(S);if(me!==E.__cacheKey){ie[me]===void 0&&(ie[me]={texture:e.createTexture(),usedTimes:0},l.memory.textures++,P=!0),ie[me].usedTimes++;let ve=ie[E.__cacheKey];ve!==void 0&&(ie[E.__cacheKey].usedTimes--,ve.usedTimes===0&&W(S)),E.__cacheKey=me,E.__webglTexture=ie[me].texture}return P}function he(E,S,P){return Math.floor(Math.floor(E/P)/S)}function fe(E,S,P,q){let ie=E.updateRanges;if(ie.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,q,S.data);else{ie.sort((Me,Ue)=>Me.start-Ue.start);let me=0;for(let Me=1;Me<ie.length;Me++){let Ue=ie[me],le=ie[Me],Be=Ue.start+Ue.count,ke=he(le.start,S.width,4),Ye=he(Ue.start,S.width,4);le.start<=Be+1&&ke===Ye&&he(le.start+le.count-1,S.width,4)===ke?Ue.count=Math.max(Ue.count,le.start+le.count-Ue.start):(++me,ie[me]=le)}ie.length=me+1;let ve=i.getParameter(e.UNPACK_ROW_LENGTH),F=i.getParameter(e.UNPACK_SKIP_PIXELS),pe=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let Me=0,Ue=ie.length;Me<Ue;Me++){let le=ie[Me],Be=Math.floor(le.start/4),ke=Math.ceil(le.count/4),Ye=Be%S.width,xt=Math.floor(Be/S.width),U=ke;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(e.UNPACK_SKIP_ROWS,xt),i.texSubImage2D(e.TEXTURE_2D,0,Ye,xt,U,1,P,q,S.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ve),i.pixelStorei(e.UNPACK_SKIP_PIXELS,F),i.pixelStorei(e.UNPACK_SKIP_ROWS,pe)}}function He(E,S,P){let q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=e.TEXTURE_3D);let ie=Y(E,S),me=S.source;i.bindTexture(q,E.__webglTexture,e.TEXTURE0+P);let ve=r.get(me);if(me.version!==ve.__version||ie===!0){if(i.activeTexture(e.TEXTURE0+P),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let te=gt.getPrimaries(gt.workingColorSpace),se=S.colorSpace===vr?null:gt.getPrimaries(S.colorSpace),Ce=S.colorSpace===vr||te===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let F=M(S.image,!1,a.maxTextureSize);F=_t(S,F);let pe=n.convert(S.format,S.colorSpace),Me=n.convert(S.type),Ue=s(S.internalFormat,pe,Me,S.normalized,S.colorSpace,S.isVideoTexture);Ge(q,S);let le,Be=S.mipmaps,ke=S.isVideoTexture!==!0,Ye=ve.__version===void 0||ie===!0,xt=me.dataReady,U=A(S,F);if(S.isDepthTexture)Ue=b(S.format===Cr,S.type),Ye&&(ke?i.texStorage2D(e.TEXTURE_2D,1,Ue,F.width,F.height):i.texImage2D(e.TEXTURE_2D,0,Ue,F.width,F.height,0,pe,Me,null));else if(S.isDataTexture)if(Be.length>0){ke&&Ye&&i.texStorage2D(e.TEXTURE_2D,U,Ue,Be[0].width,Be[0].height);for(let te=0,se=Be.length;te<se;te++)le=Be[te],ke?xt&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,le.width,le.height,pe,Me,le.data):i.texImage2D(e.TEXTURE_2D,te,Ue,le.width,le.height,0,pe,Me,le.data);S.generateMipmaps=!1}else ke?(Ye&&i.texStorage2D(e.TEXTURE_2D,U,Ue,F.width,F.height),xt&&fe(S,F,pe,Me)):i.texImage2D(e.TEXTURE_2D,0,Ue,F.width,F.height,0,pe,Me,F.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&Ye&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,Ue,Be[0].width,Be[0].height,F.depth);for(let te=0,se=Be.length;te<se;te++)if(le=Be[te],S.format!==zi)if(pe!==null)if(ke){if(xt)if(S.layerUpdates.size>0){let Ce=Tl(le.width,le.height,S.format,S.type);for(let Ne of S.layerUpdates){let oe=le.data.subarray(Ne*Ce/le.data.BYTES_PER_ELEMENT,(Ne+1)*Ce/le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,Ne,le.width,le.height,1,pe,oe)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,F.depth,pe,le.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,te,Ue,le.width,le.height,F.depth,0,le.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?xt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,F.depth,pe,Me,le.data):i.texImage3D(e.TEXTURE_2D_ARRAY,te,Ue,le.width,le.height,F.depth,0,pe,Me,le.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ke&&Ye&&i.texStorage2D(e.TEXTURE_2D,U,Ue,Be[0].width,Be[0].height);for(let te=0,se=Be.length;te<se;te++)le=Be[te],S.format!==zi?pe!==null?ke?xt&&i.compressedTexSubImage2D(e.TEXTURE_2D,te,0,0,le.width,le.height,pe,le.data):i.compressedTexImage2D(e.TEXTURE_2D,te,Ue,le.width,le.height,0,le.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?xt&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,le.width,le.height,pe,Me,le.data):i.texImage2D(e.TEXTURE_2D,te,Ue,le.width,le.height,0,pe,Me,le.data)}else if(S.isDataArrayTexture)if(ke){if(Ye&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,Ue,F.width,F.height,F.depth),xt)if(S.layerUpdates.size>0){let te=Tl(F.width,F.height,S.format,S.type);for(let se of S.layerUpdates){let Ce=F.data.subarray(se*te/F.data.BYTES_PER_ELEMENT,(se+1)*te/F.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,F.width,F.height,1,pe,Me,Ce)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,pe,Me,F.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ue,F.width,F.height,F.depth,0,pe,Me,F.data);else if(S.isData3DTexture)ke?(Ye&&i.texStorage3D(e.TEXTURE_3D,U,Ue,F.width,F.height,F.depth),xt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,pe,Me,F.data)):i.texImage3D(e.TEXTURE_3D,0,Ue,F.width,F.height,F.depth,0,pe,Me,F.data);else if(S.isFramebufferTexture){if(Ye)if(ke)i.texStorage2D(e.TEXTURE_2D,U,Ue,F.width,F.height);else{let te=F.width,se=F.height;for(let Ce=0;Ce<U;Ce++)i.texImage2D(e.TEXTURE_2D,Ce,Ue,te,se,0,pe,Me,null),te>>=1,se>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let te=e.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),F.parentNode!==te){te.appendChild(F),_.add(S),te.onpaint=se=>{let Ce=se.changedElements;for(let Ne of _)Ce.includes(Ne.image)&&(Ne.needsUpdate=!0)},te.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,F);else{let se=e.RGBA,Ce=e.RGBA,Ne=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,se,Ce,Ne,F)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Be.length>0){if(ke&&Ye){let te=Dt(Be[0]);i.texStorage2D(e.TEXTURE_2D,U,Ue,te.width,te.height)}for(let te=0,se=Be.length;te<se;te++)le=Be[te],ke?xt&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,pe,Me,le):i.texImage2D(e.TEXTURE_2D,te,Ue,pe,Me,le);S.generateMipmaps=!1}else if(ke){if(Ye){let te=Dt(F);i.texStorage2D(e.TEXTURE_2D,U,Ue,te.width,te.height)}xt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,pe,Me,F)}else i.texImage2D(e.TEXTURE_2D,0,Ue,pe,Me,F);f(S)&&C(q),ve.__version=me.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Ve(E,S,P){if(S.image.length!==6)return;let q=Y(E,S),ie=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+P);let me=r.get(ie);if(ie.version!==me.__version||q===!0){i.activeTexture(e.TEXTURE0+P);let ve=gt.getPrimaries(gt.workingColorSpace),F=S.colorSpace===vr?null:gt.getPrimaries(S.colorSpace),pe=S.colorSpace===vr||ve===F?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,le=[];for(let oe=0;oe<6;oe++)!Me&&!Ue?le[oe]=M(S.image[oe],!0,a.maxCubemapSize):le[oe]=Ue?S.image[oe].image:S.image[oe],le[oe]=_t(S,le[oe]);let Be=le[0],ke=n.convert(S.format,S.colorSpace),Ye=n.convert(S.type),xt=s(S.internalFormat,ke,Ye,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,te=me.__version===void 0||q===!0,se=ie.dataReady,Ce=A(S,Be);Ge(e.TEXTURE_CUBE_MAP,S);let Ne;if(Me){U&&te&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ce,xt,Be.width,Be.height);for(let oe=0;oe<6;oe++){Ne=le[oe].mipmaps;for(let Te=0;Te<Ne.length;Te++){let qe=Ne[Te];S.format!==zi?ke!==null?U?se&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,qe.width,qe.height,ke,qe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,xt,qe.width,qe.height,0,qe.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,qe.width,qe.height,ke,Ye,qe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,xt,qe.width,qe.height,0,ke,Ye,qe.data)}}}else{if(Ne=S.mipmaps,U&&te){Ne.length>0&&Ce++;let oe=Dt(le[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ce,xt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ue){U?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,le[oe].width,le[oe].height,ke,Ye,le[oe].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xt,le[oe].width,le[oe].height,0,ke,Ye,le[oe].data);for(let Te=0;Te<Ne.length;Te++){let qe=Ne[Te].image[oe].image;U?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,qe.width,qe.height,ke,Ye,qe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,xt,qe.width,qe.height,0,ke,Ye,qe.data)}}else{U?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ke,Ye,le[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xt,ke,Ye,le[oe]);for(let Te=0;Te<Ne.length;Te++){let qe=Ne[Te];U?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,ke,Ye,qe.image[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,xt,ke,Ye,qe.image[oe])}}}f(S)&&C(e.TEXTURE_CUBE_MAP),me.__version=ie.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Re(E,S,P,q,ie,me){let ve=n.convert(P.format,P.colorSpace),F=n.convert(P.type),pe=s(P.internalFormat,ve,F,P.normalized,P.colorSpace),Me=r.get(S),Ue=r.get(P);if(Ue.__renderTarget=S,!Me.__hasExternalTextures){let le=Math.max(1,S.width>>me),Be=Math.max(1,S.height>>me);ie===e.TEXTURE_3D||ie===e.TEXTURE_2D_ARRAY?i.texImage3D(ie,me,pe,le,Be,S.depth,0,ve,F,null):i.texImage2D(ie,me,pe,le,Be,0,ve,F,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),L(S)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,ie,Ue.__webglTexture,0,Wt(S)):(ie===e.TEXTURE_2D||ie>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,ie,Ue.__webglTexture,me),i.bindFramebuffer(e.FRAMEBUFFER,null)}function yt(E,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,E),S.depthBuffer){let q=S.depthTexture,ie=q&&q.isDepthTexture?q.type:null,me=b(S.stencilBuffer,ie),ve=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(S)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Wt(S),me,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Wt(S),me,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,me,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,E)}else{let q=S.textures;for(let ie=0;ie<q.length;ie++){let me=q[ie],ve=n.convert(me.format,me.colorSpace),F=n.convert(me.type),pe=s(me.internalFormat,ve,F,me.normalized,me.colorSpace);L(S)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Wt(S),pe,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Wt(S),pe,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,pe,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pt(E,S,P){let q=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=r.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,S.depthTexture);let Me=n.convert(S.depthTexture.format),Ue=n.convert(S.depthTexture.type),le;S.depthTexture.format===cr?le=e.DEPTH_COMPONENT24:S.depthTexture.format===Cr&&(le=e.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,le,S.width,S.height,0,Me,Ue,null)}}else _e(S.depthTexture,0);let me=ie.__webglTexture,ve=Wt(S),F=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,pe=S.depthTexture.format===Cr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===cr)L(S)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,pe,F,me,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,pe,F,me,0);else if(S.depthTexture.format===Cr)L(S)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,pe,F,me,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,pe,F,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(E){let S=r.get(E),P=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=q}if(E.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let q=0;q<6;q++)pt(S.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?pt(S.__webglFramebuffer[0],E,0):pt(S.__webglFramebuffer,E,0)}else if(P){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=e.createRenderbuffer(),yt(S.__webglDepthbuffer[q],E,!1);else{let ie=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,me)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),yt(S.__webglDepthbuffer,E,!1);else{let ie=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,me)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ft(E,S,P){let q=r.get(E);S!==void 0&&Re(q.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Je(E)}function Gt(E){let S=E.texture,P=r.get(E),q=r.get(S);E.addEventListener("dispose",o);let ie=E.textures,me=E.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=S.version,l.memory.textures++),me){P.__webglFramebuffer=[];for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[F]=[];for(let pe=0;pe<S.mipmaps.length;pe++)P.__webglFramebuffer[F][pe]=e.createFramebuffer()}else P.__webglFramebuffer[F]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let F=0;F<S.mipmaps.length;F++)P.__webglFramebuffer[F]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ve)for(let F=0,pe=ie.length;F<pe;F++){let Me=r.get(ie[F]);Me.__webglTexture===void 0&&(Me.__webglTexture=e.createTexture(),l.memory.textures++)}if(E.samples>0&&L(E)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let F=0;F<ie.length;F++){let pe=ie[F];P.__webglColorRenderbuffer[F]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[F]);let Me=n.convert(pe.format,pe.colorSpace),Ue=n.convert(pe.type),le=s(pe.internalFormat,Me,Ue,pe.normalized,pe.colorSpace,E.isXRRenderTarget===!0),Be=Wt(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Be,le,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+F,e.RENDERBUFFER,P.__webglColorRenderbuffer[F])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),yt(P.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){i.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,S);for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Re(P.__webglFramebuffer[F][pe],E,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe);else Re(P.__webglFramebuffer[F],E,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);f(S)&&C(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ve){for(let F=0,pe=ie.length;F<pe;F++){let Me=ie[F],Ue=r.get(Me),le=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(le,Ue.__webglTexture),Ge(le,Me),Re(P.__webglFramebuffer,E,Me,e.COLOR_ATTACHMENT0+F,le,0),f(Me)&&C(le)}i.unbindTexture()}else{let F=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(F=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(F,q.__webglTexture),Ge(F,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Re(P.__webglFramebuffer[pe],E,S,e.COLOR_ATTACHMENT0,F,pe);else Re(P.__webglFramebuffer,E,S,e.COLOR_ATTACHMENT0,F,0);f(S)&&C(F),i.unbindTexture()}E.depthBuffer&&Je(E)}function di(E){let S=E.textures;for(let P=0,q=S.length;P<q;P++){let ie=S[P];if(f(ie)){let me=G(E),ve=r.get(ie).__webglTexture;i.bindTexture(me,ve),C(me),i.unbindTexture()}}}let It=[],Ht=[];function Vt(E){if(E.samples>0){if(L(E)===!1){let S=E.textures,P=E.width,q=E.height,ie=e.COLOR_BUFFER_BIT,me=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=r.get(E),F=S.length>1;if(F)for(let Me=0;Me<S.length;Me++)i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let pe=E.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=e.STENCIL_BUFFER_BIT)),F){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let Ue=r.get(S[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ue,0)}e.blitFramebuffer(0,0,P,q,0,0,P,q,ie,e.NEAREST),u===!0&&(It.length=0,Ht.length=0,It.push(e.COLOR_ATTACHMENT0+Me),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(It.push(me),Ht.push(me),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),F)for(let Me=0;Me<S.length;Me++){i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let Ue=r.get(S[Me]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,Ue,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&u){let S=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Wt(E){return Math.min(a.maxSamples,E.samples)}function L(E){let S=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ni(E){let S=l.render.frame;m.get(E)!==S&&(m.set(E,S),E.update())}function _t(E,S){let P=E.colorSpace,q=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==In&&P!==vr&&(gt.getTransfer(P)===Rt?(q!==zi||ie!==Ri)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",P)),S}function Dt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=J,this.getTextureUnits=O,this.setTextureUnits=H,this.setTexture2D=_e,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ft,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=di,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function bg(e,t){function i(r,a=vr){let n,l=gt.getTransfer(a);if(r===Ri)return e.UNSIGNED_BYTE;if(r===To)return e.UNSIGNED_SHORT_4_4_4_4;if(r===bo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===lh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===hh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===sh)return e.BYTE;if(r===oh)return e.SHORT;if(r===za)return e.UNSIGNED_SHORT;if(r===yo)return e.INT;if(r===Zi)return e.UNSIGNED_INT;if(r===ji)return e.FLOAT;if(r===Ki)return e.HALF_FLOAT;if(r===uh)return e.ALPHA;if(r===ch)return e.RGB;if(r===zi)return e.RGBA;if(r===cr)return e.DEPTH_COMPONENT;if(r===Cr)return e.DEPTH_STENCIL;if(r===dh)return e.RED;if(r===wo)return e.RED_INTEGER;if(r===Dr)return e.RG;if(r===Ro)return e.RG_INTEGER;if(r===Ao)return e.RGBA_INTEGER;if(r===En||r===yn||r===Tn||r===bn)if(l===Rt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===En)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===En)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fs||r===Bs||r===zs||r===ks)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Fs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zs)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ks)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gs||r===Hs||r===Vs||r===Ws||r===Xs||r===Pn||r===js)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Gs||r===Hs)return l===Rt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Vs)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ws)return n.COMPRESSED_R11_EAC;if(r===Xs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Pn)return n.COMPRESSED_RG11_EAC;if(r===js)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qs||r===Ys||r===Zs||r===Ks||r===Js||r===$s||r===Qs||r===eo||r===to||r===io||r===ro||r===ao||r===no||r===so)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===qs)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ys)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zs)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ks)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Js)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$s)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qs)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eo)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===to)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===io)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ro)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ao)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===no)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===so)return l===Rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oo||r===lo||r===ho)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===oo)return l===Rt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ho)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uo||r===co||r===Ln||r===po)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===uo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===co)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ln)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===po)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ka?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,Ag=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Rh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ji({vertexShader:wg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cg=class extends xr{constructor(e,t){super();let i=this,r=null,a=1,n=null,l="local-floor",h=1,u=null,c=null,m=null,_=null,d=null,v=null,y=typeof XRWebGLBinding<"u",T=new Ag,M={},f=t.getContextAttributes(),C=null,G=null,s=[],b=[],A=new Xe,R=null,o=null,p=new Li;p.viewport=new qt;let W=new Li;W.viewport=new qt;let N=[p,W],z=new Ic,J=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let he=s[Y];return he===void 0&&(he=new ts,s[Y]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Y){let he=s[Y];return he===void 0&&(he=new ts,s[Y]=he),he.getGripSpace()},this.getHand=function(Y){let he=s[Y];return he===void 0&&(he=new ts,s[Y]=he),he.getHandSpace()};function H(Y){let he=b.indexOf(Y.inputSource);if(he===-1)return;let fe=s[he];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,u||n),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ae(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<s.length;Y++){let he=b[Y];he!==null&&(b[Y]=null,s[Y].disconnect(he))}J=null,O=null,T.reset();for(let Y in M)delete M[Y];if(e.setRenderTarget(C),d=null,_=null,m=null,r=null,G=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),o!==null){let Y=o.camera;Y.fov=o.fov,Y.zoom=o.zoom,Y.updateProjectionMatrix(),o=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||n},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return _!==null?_:d},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,fe=null,He=null;f.depth&&(He=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?Cr:cr,fe=f.stencil?ka:Zi);let Ve={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:a};m=this.getBinding(),_=m.createProjectionLayer(Ve),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),G=new ki(_.textureWidth,_.textureHeight,{format:zi,type:Ri,depthTexture:new Ha(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),G=new ki(d.framebufferWidth,d.framebufferHeight,{format:zi,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}G.isXRRenderTarget=!0,this.setFoveation(h),u=null,n=await r.requestReferenceSpace(l),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function j(Y){for(let he=0;he<Y.removed.length;he++){let fe=Y.removed[he],He=b.indexOf(fe);He>=0&&(b[He]=null,s[He].disconnect(fe))}for(let he=0;he<Y.added.length;he++){let fe=Y.added[he],He=b.indexOf(fe);if(He===-1){for(let Re=0;Re<s.length;Re++)if(Re>=b.length){b.push(fe),He=Re;break}else if(b[Re]===null){b[Re]=fe,He=Re;break}if(He===-1)break}let Ve=s[He];Ve&&Ve.connect(fe)}}let _e=new k,K=new k;function Q(Y,he,fe){_e.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);let He=_e.distanceTo(K),Ve=he.projectionMatrix.elements,Re=fe.projectionMatrix.elements,yt=Ve[14]/(Ve[10]-1),pt=Ve[14]/(Ve[10]+1),Je=(Ve[9]+1)/Ve[5],Ft=(Ve[9]-1)/Ve[5],Gt=(Ve[8]-1)/Ve[0],di=(Re[8]+1)/Re[0],It=yt*Gt,Ht=yt*di,Vt=He/(-Gt+di),Wt=Vt*-Gt;if(he.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(Vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ve[10]===-1)Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let L=yt+Vt,ni=pt+Vt,_t=It-Wt,Dt=Ht+(He-Wt),E=Je*pt/ni*L,S=Ft*pt/ni*L;Y.projectionMatrix.makePerspective(_t,Dt,E,S,L,ni),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,he){he===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(he.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let he=Y.near,fe=Y.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(fe=T.depthFar)),z.near=W.near=p.near=he,z.far=W.far=p.far=fe,(J!==z.near||O!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),J=z.near,O=z.far),z.layers.mask=Y.layers.mask|6,p.layers.mask=z.layers.mask&-5,W.layers.mask=z.layers.mask&-3;let He=Y.parent,Ve=z.cameras;ne(z,He);for(let Re=0;Re<Ve.length;Re++)ne(Ve[Re],He);Ve.length===2?Q(z,p,W):z.projectionMatrix.copy(p.projectionMatrix),o===null&&Y.isPerspectiveCamera&&(o={camera:Y,fov:Y.fov,zoom:Y.zoom}),Qe(Y,z,He)};function Qe(Y,he,fe){fe===null?Y.matrix.copy(he.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(he.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(_===null&&d===null))return h},this.setFoveation=function(Y){h=Y,_!==null&&(_.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(z)},this.getCameraTexture=function(Y){return M[Y]};let ze=null;function Ct(Y,he){if(c=he.getViewerPose(u||n),v=he,c!==null){let fe=c.views;d!==null&&(e.setRenderTargetFramebuffer(G,d.framebuffer),e.setRenderTarget(G));let He=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,He=!0);for(let Re=0;Re<fe.length;Re++){let yt=fe[Re],pt=null;if(d!==null)pt=d.getViewport(yt);else{let Ft=m.getViewSubImage(_,yt);pt=Ft.viewport,Re===0&&(e.setRenderTargetTextures(G,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(G))}let Je=N[Re];Je===void 0&&(Je=new Li,Je.layers.enable(Re),Je.viewport=new qt,N[Re]=Je),Je.matrix.fromArray(yt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(yt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(pt.x,pt.y,pt.width,pt.height),Re===0&&(z.matrix.copy(Je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),He===!0&&z.cameras.push(Je)}let Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){m=i.getBinding();let Re=m.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&T.init(Re,r.renderState)}if(Ve&&Ve.includes("camera-access")&&y){e.state.unbindTexture(),m=i.getBinding();for(let Re=0;Re<fe.length;Re++){let yt=fe[Re].camera;if(yt){let pt=M[yt];pt||(pt=new Rh,M[yt]=pt);let Je=m.getCameraImage(yt);pt.sourceTexture=Je}}}}for(let fe=0;fe<s.length;fe++){let He=b[fe],Ve=s[fe];He!==null&&Ve!==void 0&&Ve.update(He,he,u||n)}ze&&ze(Y,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}let Ge=new Fh;Ge.setAnimationLoop(Ct),this.setAnimationLoop=function(Y){ze=Y},this.dispose=function(){}}},Pg=new kt,Wh=new it;Wh.set(-1,0,0,0,1,0,0,0,1);function Lg(e,t){function i(M,f){M.matrixAutoUpdate===!0&&M.updateMatrix(),f.value.copy(M.matrix)}function r(M,f){f.color.getRGB(M.fogColor.value,Dh(e)),f.isFog?(M.fogNear.value=f.near,M.fogFar.value=f.far):f.isFogExp2&&(M.fogDensity.value=f.density)}function a(M,f,C,G,s){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(M,f):f.isMeshLambertMaterial?(n(M,f),f.envMap&&(M.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(M,f),_(M,f)):f.isMeshPhongMaterial?(n(M,f),m(M,f),f.envMap&&(M.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(M,f),d(M,f),f.isMeshPhysicalMaterial&&v(M,f,s)):f.isMeshMatcapMaterial?(n(M,f),y(M,f)):f.isMeshDepthMaterial?n(M,f):f.isMeshDistanceMaterial?(n(M,f),T(M,f)):f.isMeshNormalMaterial?n(M,f):f.isLineBasicMaterial?(l(M,f),f.isLineDashedMaterial&&h(M,f)):f.isPointsMaterial?u(M,f,C,G):f.isSpriteMaterial?c(M,f):f.isShadowMaterial?(M.color.value.copy(f.color),M.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(M,f){M.opacity.value=f.opacity,f.color&&M.diffuse.value.copy(f.color),f.emissive&&M.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(M.map.value=f.map,i(f.map,M.mapTransform)),f.alphaMap&&(M.alphaMap.value=f.alphaMap,i(f.alphaMap,M.alphaMapTransform)),f.bumpMap&&(M.bumpMap.value=f.bumpMap,i(f.bumpMap,M.bumpMapTransform),M.bumpScale.value=f.bumpScale,f.side===xi&&(M.bumpScale.value*=-1)),f.normalMap&&(M.normalMap.value=f.normalMap,i(f.normalMap,M.normalMapTransform),M.normalScale.value.copy(f.normalScale),f.side===xi&&M.normalScale.value.negate()),f.displacementMap&&(M.displacementMap.value=f.displacementMap,i(f.displacementMap,M.displacementMapTransform),M.displacementScale.value=f.displacementScale,M.displacementBias.value=f.displacementBias),f.emissiveMap&&(M.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,M.emissiveMapTransform)),f.specularMap&&(M.specularMap.value=f.specularMap,i(f.specularMap,M.specularMapTransform)),f.alphaTest>0&&(M.alphaTest.value=f.alphaTest);let C=t.get(f),G=C.envMap,s=C.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(s)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Wh),M.reflectivity.value=f.reflectivity,M.ior.value=f.ior,M.refractionRatio.value=f.refractionRatio),f.lightMap&&(M.lightMap.value=f.lightMap,M.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,M.lightMapTransform)),f.aoMap&&(M.aoMap.value=f.aoMap,M.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,M.aoMapTransform))}function l(M,f){M.diffuse.value.copy(f.color),M.opacity.value=f.opacity,f.map&&(M.map.value=f.map,i(f.map,M.mapTransform))}function h(M,f){M.dashSize.value=f.dashSize,M.totalSize.value=f.dashSize+f.gapSize,M.scale.value=f.scale}function u(M,f,C,G){M.diffuse.value.copy(f.color),M.opacity.value=f.opacity,M.size.value=f.size*C,M.scale.value=G*.5,f.map&&(M.map.value=f.map,i(f.map,M.uvTransform)),f.alphaMap&&(M.alphaMap.value=f.alphaMap,i(f.alphaMap,M.alphaMapTransform)),f.alphaTest>0&&(M.alphaTest.value=f.alphaTest)}function c(M,f){M.diffuse.value.copy(f.color),M.opacity.value=f.opacity,M.rotation.value=f.rotation,f.map&&(M.map.value=f.map,i(f.map,M.mapTransform)),f.alphaMap&&(M.alphaMap.value=f.alphaMap,i(f.alphaMap,M.alphaMapTransform)),f.alphaTest>0&&(M.alphaTest.value=f.alphaTest)}function m(M,f){M.specular.value.copy(f.specular),M.shininess.value=Math.max(f.shininess,1e-4)}function _(M,f){f.gradientMap&&(M.gradientMap.value=f.gradientMap)}function d(M,f){M.metalness.value=f.metalness,f.metalnessMap&&(M.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,M.metalnessMapTransform)),M.roughness.value=f.roughness,f.roughnessMap&&(M.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,M.roughnessMapTransform)),f.envMap&&(M.envMapIntensity.value=f.envMapIntensity)}function v(M,f,C){M.ior.value=f.ior,f.sheen>0&&(M.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),M.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(M.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,M.sheenColorMapTransform)),f.sheenRoughnessMap&&(M.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,M.sheenRoughnessMapTransform))),f.clearcoat>0&&(M.clearcoat.value=f.clearcoat,M.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(M.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,M.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(M.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xi&&M.clearcoatNormalScale.value.negate())),f.dispersion>0&&(M.dispersion.value=f.dispersion),f.retroreflectivity>0&&(M.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(M.iridescence.value=f.iridescence,M.iridescenceIOR.value=f.iridescenceIOR,M.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(M.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,M.iridescenceMapTransform)),f.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),f.transmission>0&&(M.transmission.value=f.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(M.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,M.transmissionMapTransform)),M.thickness.value=f.thickness,f.thicknessMap&&(M.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=f.attenuationDistance,M.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(M.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(M.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=f.specularIntensity,M.specularColor.value.copy(f.specularColor),f.specularColorMap&&(M.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,M.specularColorMapTransform)),f.specularIntensityMap&&(M.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,f){f.matcap&&(M.matcap.value=f.matcap)}function T(M,f){let C=t.get(f).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Ig(e,t,i,r){let a={},n={},l=[],h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function u(s,b){let A=b.program;r.uniformBlockBinding(s,A)}function c(s,b){let A=a[s.id];A===void 0&&(M(s),A=m(s),a[s.id]=A,s.addEventListener("dispose",C));let R=b.program;r.updateUBOMapping(s,R);let o=t.render.frame;n[s.id]!==o&&(d(s),n[s.id]=o)}function m(s){let b=_();s.__bindingPointIndex=b;let A=e.createBuffer(),R=s.__size,o=s.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,A),A}function _(){for(let s=0;s<h;s++)if(l.indexOf(s)===-1)return l.push(s),s;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(s){let b=a[s.id],A=s.uniforms,R=s.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let o=0,p=A.length;o<p;o++){let W=A[o];if(Array.isArray(W))for(let N=0,z=W.length;N<z;N++)v(W[N],o,N,R);else v(W,o,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(s,b,A,R){if(T(s,b,A,R)===!0){let o=s.__offset,p=s.value;if(Array.isArray(p)){let W=0;for(let N=0;N<p.length;N++){let z=p[N],J=f(z);y(z,s.__data,W),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(p,s.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,o,s.__data)}}function y(s,b,A){typeof s=="number"||typeof s=="boolean"?b[0]=s:s.isMatrix3?(b[0]=s.elements[0],b[1]=s.elements[1],b[2]=s.elements[2],b[3]=0,b[4]=s.elements[3],b[5]=s.elements[4],b[6]=s.elements[5],b[7]=0,b[8]=s.elements[6],b[9]=s.elements[7],b[10]=s.elements[8],b[11]=0):ArrayBuffer.isView(s)?b.set(new s.constructor(s.buffer,s.byteOffset,b.length)):s.toArray(b,A)}function T(s,b,A,R){let o=s.value,p=b+"_"+A;if(R[p]===void 0)return typeof o=="number"||typeof o=="boolean"?R[p]=o:ArrayBuffer.isView(o)?R[p]=o.slice():R[p]=o.clone(),!0;{let W=R[p];if(typeof o=="number"||typeof o=="boolean"){if(W!==o)return R[p]=o,!0}else{if(ArrayBuffer.isView(o))return!0;if(W.equals(o)===!1)return W.copy(o),!0}}return!1}function M(s){let b=s.uniforms,A=0,R=16;for(let p=0,W=b.length;p<W;p++){let N=Array.isArray(b[p])?b[p]:[b[p]];for(let z=0,J=N.length;z<J;z++){let O=N[z],H=Array.isArray(O.value)?O.value:[O.value];for(let ae=0,j=H.length;ae<j;ae++){let _e=H[ae],K=f(_e),Q=A%R,ne=Q%K.boundary,Qe=Q+ne;A+=ne,Qe!==0&&R-Qe<K.storage&&(A+=R-Qe),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=K.storage}}}let o=A%R;return o>0&&(A+=R-o),s.__size=A,s.__cache={},this}function f(s){let b={boundary:0,storage:0};return typeof s=="number"||typeof s=="boolean"?(b.boundary=4,b.storage=4):s.isVector2?(b.boundary=8,b.storage=8):s.isVector3||s.isColor?(b.boundary=16,b.storage=12):s.isVector4?(b.boundary=16,b.storage=16):s.isMatrix3?(b.boundary=48,b.storage=48):s.isMatrix4?(b.boundary=64,b.storage=64):s.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(s)?(b.boundary=16,b.storage=s.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",s),b}function C(s){let b=s.target;b.removeEventListener("dispose",C);let A=l.indexOf(b.__bindingPointIndex);l.splice(A,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function G(){for(let s in a)e.deleteBuffer(a[s]);l=[],a={},n={}}return{bind:u,update:c,dispose:G}}var Dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function Ug(){return Vi===null&&(Vi=new pc(Dg,16,16,Dr,Ki),Vi.name="DFG_LUT",Vi.minFilter=ci,Vi.magFilter=ci,Vi.wrapS=lr,Vi.wrapT=lr,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var Ng=class{constructor(e={}){let{canvas:t=zu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1,outputBufferType:d=Ri}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=n;let y=d,T=new Set([Ao,Ro,wo]),M=new Set([Ri,Zi,za,ka,To,bo]),f=new Uint32Array(4),C=new Int32Array(4),G=new k,s=null,b=null,A=[],R=[],o=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let p=this,W=!1,N=null,z=null,J=null,O=null;this._outputColorSpace=Pi;let H=0,ae=0,j=null,_e=-1,K=null,Q=new qt,ne=new qt,Qe=null,ze=new $e(0),Ct=0,Ge=t.width,Y=t.height,he=1,fe=null,He=null,Ve=new qt(0,0,Ge,Y),Re=new qt(0,0,Ge,Y),yt=!1,pt=new Do,Je=!1,Ft=!1,Gt=new kt,di=new k,It=new qt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Wt(){return j===null?he:1}let L=i;function ni(x,w){return t.getContext(x,w)}let _t,Dt,E,S,P,q,ie,me,ve,F,pe,Me,Ue,le,Be,ke,Ye,xt,U,te,se,Ce,Ne;try{let x={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xo}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Et,!1),L===null){let w="webgl2";if(L=ni(w,x),L===null)throw ni(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(x){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),St("WebGLRenderer: "+x.message),x}function oe(){_t=new Uf(L),_t.init(),se=new bg(L,_t),Dt=new Tf(L,_t,e,se),E=new yg(L,_t),Dt.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),z=L.createFramebuffer(),J=L.createFramebuffer(),O=L.createFramebuffer(),S=new Ff(L),P=new hg,q=new Tg(L,_t,E,P,Dt,se,S),ie=new Df(p),me=new Bc(L),Ce=new Ef(L,me),ve=new Nf(L,me,S,Ce),F=new zf(L,ve,me,Ce,S),xt=new Bf(L,Dt,q),Be=new bf(P),pe=new lg(p,ie,_t,Dt,Ce,Be),Me=new Lg(p,P),Ue=new cg,le=new _g(_t),Ye=new xf(p,ie,E,F,v,h),ke=new Eg(p,F,Dt),Ne=new Ig(L,S,Dt,E),U=new yf(L,_t,S),te=new Of(L,_t,S),S.programs=pe.programs,p.capabilities=Dt,p.extensions=_t,p.properties=P,p.renderLists=Ue,p.shadowMap=ke,p.state=E,p.info=S}y!==Ri&&(o=new Gf(y,t.width,t.height,l,r,a));let Te=new Cg(p,L);this.xr=Te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=_t.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=_t.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(x){x!==void 0&&(he=x,this.setSize(Ge,Y,!1))},this.getSize=function(x){return x.set(Ge,Y)},this.setSize=function(x,w,I=!0){if(Te.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=x,Y=w,t.width=Math.floor(x*he),t.height=Math.floor(w*he),I===!0&&(t.style.width=x+"px",t.style.height=w+"px"),o!==null&&o.setSize(t.width,t.height),this.setViewport(0,0,x,w)},this.getDrawingBufferSize=function(x){return x.set(Ge*he,Y*he).floor()},this.setDrawingBufferSize=function(x,w,I){Ge=x,Y=w,he=I,t.width=Math.floor(x*I),t.height=Math.floor(w*I),this.setViewport(0,0,x,w)},this.setEffects=function(x){if(y===Ri){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let w=0;w<x.length;w++)if(x[w].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}o.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(Q)},this.getViewport=function(x){return x.copy(Ve)},this.setViewport=function(x,w,I,D){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,w,I,D),E.viewport(Q.copy(Ve).multiplyScalar(he).round())},this.getScissor=function(x){return x.copy(Re)},this.setScissor=function(x,w,I,D){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,w,I,D),E.scissor(ne.copy(Re).multiplyScalar(he).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(x){E.setScissorTest(yt=x)},this.setOpaqueSort=function(x){fe=x},this.setTransparentSort=function(x){He=x},this.getClearColor=function(x){return x.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(x=!0,w=!0,I=!0){let D=0;if(x){let B=!1;if(j!==null){let $=j.texture.format;B=T.has($)}if(B){let $=j.texture.type,ee=M.has($),de=Ye.getClearColor(),ce=Ye.getClearAlpha(),Ae=de.r,We=de.g,je=de.b;ee?(f[0]=Ae,f[1]=We,f[2]=je,f[3]=ce,L.clearBufferuiv(L.COLOR,0,f)):(C[0]=Ae,C[1]=We,C[2]=je,C[3]=ce,L.clearBufferiv(L.COLOR,0,C))}else D|=L.COLOR_BUFFER_BIT}w&&(D|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),I&&(D|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&L.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Ye.dispose(),Ue.dispose(),le.dispose(),P.dispose(),ie.dispose(),F.dispose(),Ce.dispose(),Ne.dispose(),pe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ue),Te.removeEventListener("sessionend",Z),Pe.stop()};function qe(x){x.preventDefault(),Nn("WebGLRenderer: Context Lost."),W=!0}function lt(){Nn("WebGLRenderer: Context Restored."),W=!1;let x=S.autoReset,w=ke.enabled,I=ke.autoUpdate,D=ke.needsUpdate,B=ke.type;oe(),S.autoReset=x,ke.enabled=w,ke.autoUpdate=I,ke.needsUpdate=D,ke.type=B}function Et(x){St("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function yi(x){let w=x.target;w.removeEventListener("dispose",yi),Ti(w)}function Ti(x){g(x),P.remove(x)}function g(x){let w=P.get(x).programs;w!==void 0&&(w.forEach(function(I){pe.releaseProgram(I)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,w,I,D,B,$){w===null&&(w=Ht);let ee=B.isMesh&&B.matrixWorld.determinantAffine()<0,de=De(x,w,I,D,B);E.setMaterial(D,ee);let ce=I.index,Ae=1;if(D.wireframe===!0){if(ce=ve.getWireframeAttribute(I),ce===void 0)return;Ae=2}let We=I.drawRange,je=I.attributes.position,xe=We.start*Ae,at=(We.start+We.count)*Ae;$!==null&&(xe=Math.max(xe,$.start*Ae),at=Math.min(at,($.start+$.count)*Ae)),ce!==null?(xe=Math.max(xe,0),at=Math.min(at,ce.count)):je!=null&&(xe=Math.max(xe,0),at=Math.min(at,je.count));let ft=at-xe;if(ft<0||ft===1/0)return;Ce.setup(B,D,de,I,ce);let vt,mt=U;if(ce!==null&&(vt=me.get(ce),mt=te,mt.setIndex(vt)),B.isMesh)D.wireframe===!0?(E.setLineWidth(D.wireframeLinewidth*Wt()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(B.isLine){let Fe=D.linewidth;Fe===void 0&&(Fe=1),E.setLineWidth(Fe*Wt()),B.isLineSegments?mt.setMode(L.LINES):B.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else B.isPoints?mt.setMode(L.POINTS):B.isSprite&&mt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Fe=B._multiDrawStarts,ge=B._multiDrawCounts,dt=B._multiDrawCount,Tt=ce?me.get(ce).bytesPerElement:1,rt=P.get(D).currentProgram.getUniforms();for(let Yt=0;Yt<dt;Yt++)rt.setValue(L,"_gl_DrawID",Yt),mt.render(Fe[Yt]/Tt,ge[Yt])}else if(B.isInstancedMesh)mt.renderInstances(xe,ft,B.count);else if(I.isInstancedBufferGeometry){let Fe=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,ge=Math.min(I.instanceCount,Fe);mt.renderInstances(xe,ft,ge)}else mt.render(xe,ft)};function X(x,w,I,D){N!==null&&x.isNodeMaterial&&N.setObject(D,x),Je===!0&&Be.setState(x,I,!1),x.transparent===!0&&x.side===Ot&&x.forceSinglePass===!1?(x.side=xi,x.needsUpdate=!0,Pt(x,w,D),x.side=Lr,x.needsUpdate=!0,Pt(x,w,D),x.side=Ot):Pt(x,w,D)}this.compile=function(x,w,I=null){I===null&&(I=x),N!==null&&N.renderStart(x,w,I),b=le.get(I),b.init(w),R.push(b),I.traverseVisible(function(B){B.isLight&&B.layers.test(w.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),x!==I&&x.traverseVisible(function(B){B.isLight&&B.layers.test(w.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),Ft=this.localClippingEnabled,Je=Be.init(this.clippingPlanes,Ft),Je===!0&&Be.setGlobalState(this.clippingPlanes,w),N!==null&&ke.render(b.state.shadowsArray,I,w);let D=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let $=B.material;if($)if(Array.isArray($))for(let ee=0;ee<$.length;ee++){let de=$[ee];X(de,I,w,B),D.add(de)}else X($,I,w,B),D.add($)}),b=R.pop(),N!==null&&N.renderEnd(),D},this.compileAsync=function(x,w,I=null){let D=this.compile(x,w,I);return new Promise(B=>{function $(){if(D.forEach(function(ee){let de=P.get(ee).currentProgram;(de===void 0||de.isReady())&&D.delete(ee)}),D.size===0){B(x);return}setTimeout($,10)}_t.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let V=null;function re(x){V&&V(x)}function ue(){Pe.stop()}function Z(){Pe.start()}let Pe=new Fh;Pe.setAnimationLoop(re),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(x){V=x,Te.setAnimationLoop(x),x===null?Pe.stop():Pe.start()},Te.addEventListener("sessionstart",ue),Te.addEventListener("sessionend",Z),this.render=function(x,w){if(w!==void 0&&w.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;N!==null&&N.renderStart(x,w);let I=Te.enabled===!0&&Te.isPresenting===!0,D=o!==null&&(j===null||I)&&o.begin(p,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(o===null||o.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(w),w=Te.getCamera()),x.isScene===!0&&x.onBeforeRender(p,x,w,j),b=le.get(x,R.length),b.init(w),b.state.textureUnits=q.getTextureUnits(),R.push(b),Gt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),pt.setFromProjectionMatrix(Gt,qi,w.reversedDepth),Ft=this.localClippingEnabled,Je=Be.init(this.clippingPlanes,Ft),s=Ue.get(x,A.length),s.init(),A.push(s),Te.enabled===!0&&Te.isPresenting===!0){let $=p.xr.getDepthSensingMesh();$!==null&&Se($,w,-1/0,p.sortObjects)}Se(x,w,0,p.sortObjects),s.finish(),N!==null&&N.updateLights(b.state.lightsArray),p.sortObjects===!0&&s.sort(fe,He),Vt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Vt&&Ye.addToRenderList(s,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Be.beginShadows();let B=b.state.shadowsArray;if(ke.render(B,x,w),Je===!0&&Be.endShadows(),(D&&o.hasRenderPass())===!1){let $=s.opaque,ee=s.transmissive;if(b.setupLights(),w.isArrayCamera){let de=w.cameras;if(ee.length>0)for(let ce=0,Ae=de.length;ce<Ae;ce++){let We=de[ce];be($,ee,x,We)}Vt&&Ye.render(x);for(let ce=0,Ae=de.length;ce<Ae;ce++){let We=de[ce];we(s,x,We,We.viewport)}}else ee.length>0&&be($,ee,x,w),Vt&&Ye.render(x),we(s,x,w)}j!==null&&ae===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),D&&o.end(p),x.isScene===!0&&x.onAfterRender(p,x,w),Ce.resetDefaultState(),_e=-1,K=null,R.pop(),R.length>0?(b=R[R.length-1],q.setTextureUnits(b.state.textureUnits),Je===!0&&Be.setGlobalState(p.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?s=A[A.length-1]:s=null,N!==null&&N.renderEnd()};function Se(x,w,I,D){if(x.visible===!1)return;if(x.layers.test(w.layers)){if(x.isGroup)I=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(w);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(pt)){D&&It.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Gt);let $=F.update(x),ee=x.material;ee.visible&&s.push(x,$,ee,I,It.z,null,w)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(pt))){let $=F.update(x),ee=x.material;if(D&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),It.copy(x.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),It.copy($.boundingSphere.center)),It.applyMatrix4(x.matrixWorld).applyMatrix4(Gt)),Array.isArray(ee)){let de=$.groups;for(let ce=0,Ae=de.length;ce<Ae;ce++){let We=de[ce],je=ee[We.materialIndex];je&&je.visible&&s.push(x,$,je,I,It.z,We,w)}}else ee.visible&&s.push(x,$,ee,I,It.z,null,w)}}let B=x.children;for(let $=0,ee=B.length;$<ee;$++)Se(B[$],w,I,D)}function we(x,w,I,D){let{opaque:B,transmissive:$,transparent:ee}=x;b.setupLightsView(I),Je===!0&&Be.setGlobalState(p.clippingPlanes,I),D&&E.viewport(Q.copy(D)),B.length>0&&Oe(B,w,I),$.length>0&&Oe($,w,I),ee.length>0&&Oe(ee,w,I),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function be(x,w,I,D){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[D.id]===void 0){let je=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[D.id]=new ki(1,1,{generateMipmaps:!0,type:je?Ki:Ri,minFilter:Ar,samples:Math.max(4,Dt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let B=b.state.transmissionRenderTarget[D.id],$=D.viewport||Q;B.setSize($.z*p.transmissionResolutionScale,$.w*p.transmissionResolutionScale);let ee=p.getRenderTarget(),de=p.getActiveCubeFace(),ce=p.getActiveMipmapLevel();p.setRenderTarget(B),p.getClearColor(ze),Ct=p.getClearAlpha(),Ct<1&&p.setClearColor(16777215,.5),p.clear(),Vt&&Ye.render(I);let Ae=p.toneMapping;p.toneMapping=Yi;let We=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),b.setupLightsView(D),Je===!0&&Be.setGlobalState(p.clippingPlanes,D),Oe(x,I,D),q.updateMultisampleRenderTarget(B),q.updateRenderTargetMipmap(B),_t.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let xe=0,at=w.length;xe<at;xe++){let ft=w[xe],{object:vt,geometry:mt,material:Fe,group:ge}=ft;if(Fe.side===Ot&&vt.layers.test(D.layers)){let dt=Fe.side;Fe.side=xi,Fe.needsUpdate=!0,et(vt,I,D,mt,Fe,ge),Fe.side=dt,Fe.needsUpdate=!0,je=!0}}je===!0&&(q.updateMultisampleRenderTarget(B),q.updateRenderTargetMipmap(B))}p.setRenderTarget(ee,de,ce),p.setClearColor(ze,Ct),We!==void 0&&(D.viewport=We),p.toneMapping=Ae}function Oe(x,w,I){let D=w.isScene===!0?w.overrideMaterial:null;for(let B=0,$=x.length;B<$;B++){let ee=x[B],{object:de,geometry:ce,group:Ae}=ee,We=ee.material;We.allowOverride===!0&&D!==null&&(We=D),de.layers.test(I.layers)&&et(de,w,I,ce,We,Ae)}}function et(x,w,I,D,B,$){N!==null&&B.isNodeMaterial&&N.setObject(x,B),x.onBeforeRender(p,w,I,D,B,$),x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(p,w,I,D,x,$),B.transparent===!0&&B.side===Ot&&B.forceSinglePass===!1?(B.side=xi,B.needsUpdate=!0,p.renderBufferDirect(I,w,D,B,x,$),B.side=Lr,B.needsUpdate=!0,p.renderBufferDirect(I,w,D,B,x,$),B.side=Ot):p.renderBufferDirect(I,w,D,B,x,$),x.onAfterRender(p,w,I,D,B,$)}function Pt(x,w,I){w.isScene!==!0&&(w=Ht);let D=P.get(x),B=b.state.lights,$=b.state.shadowsArray,ee=B.state.version,de=pe.getParameters(x,B.state,$,w,I,b.state.lightProbeGridArray),ce=pe.getProgramCacheKey(de),Ae=D.programs;D.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,D.fog=w.fog;let We=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;D.envMap=ie.get(x.envMap||D.environment,We),D.envMapRotation=D.environment!==null&&x.envMap===null?w.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",yi),Ae=new Map,D.programs=Ae);let je=Ae.get(ce);if(je!==void 0){if(D.currentProgram===je&&D.lightsStateVersion===ee)return bt(x,de),je}else de.uniforms=pe.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,I,de),x.onBeforeCompile(de,p),je=pe.acquireProgram(de,ce),Ae.set(ce,je),D.uniforms=de.uniforms;let xe=D.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Be.uniform),bt(x,de),D.needsLights=Bt(x),D.lightsStateVersion=ee,D.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.sunLights.value=B.state.sun,xe.sunLightShadows.value=B.state.sunShadow,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.sunShadowMatrix.value=B.state.sunShadowMatrix,xe.sunShadowCascade.value=B.state.sunShadowCascade,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),D.lightProbeGrid=b.state.lightProbeGridArray.length>0,D.currentProgram=je,D.uniformsList=null,je}function Ut(x){if(x.uniformsList===null){let w=x.currentProgram.getUniforms();x.uniformsList=Cn.seqWithValue(w.seq,x.uniforms)}return x.uniformsList}function bt(x,w){let I=P.get(x);I.outputColorSpace=w.outputColorSpace,I.batching=w.batching,I.batchingColor=w.batchingColor,I.instancing=w.instancing,I.instancingColor=w.instancingColor,I.instancingMorph=w.instancingMorph,I.skinning=w.skinning,I.morphTargets=w.morphTargets,I.morphNormals=w.morphNormals,I.morphColors=w.morphColors,I.morphTargetsCount=w.morphTargetsCount,I.numClippingPlanes=w.numClippingPlanes,I.numIntersection=w.numClipIntersection,I.vertexAlphas=w.vertexAlphas,I.vertexTangents=w.vertexTangents,I.toneMapping=w.toneMapping}function gi(x,w){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;G.setFromMatrixPosition(w.matrixWorld);for(let I=0,D=x.length;I<D;I++){let B=x[I];if(B.texture!==null&&B.boundingBox.containsPoint(G))return B}return null}function De(x,w,I,D,B){w.isScene!==!0&&(w=Ht),q.resetTextureUnits();let $=w.fog,ee=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?w.environment:null,de=j===null?p.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gt.workingColorSpace,ce=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,Ae=ie.get(D.envMap||ee,ce),We=D.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,je=!!I.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),xe=!!I.morphAttributes.position,at=!!I.morphAttributes.normal,ft=!!I.morphAttributes.color,vt=Yi;D.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(vt=p.toneMapping);let mt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Fe=mt!==void 0?mt.length:0,ge=P.get(D),dt=b.state.lights;if(Je===!0&&(Ft===!0||x!==K)){let Mt=x===K&&D.id===_e;Be.setState(D,x,Mt)}let Tt=!1;D.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==dt.state.version||ge.outputColorSpace!==de||B.isBatchedMesh&&ge.batching===!1||!B.isBatchedMesh&&ge.batching===!0||B.isBatchedMesh&&ge.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&ge.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&ge.instancing===!1||!B.isInstancedMesh&&ge.instancing===!0||B.isSkinnedMesh&&ge.skinning===!1||!B.isSkinnedMesh&&ge.skinning===!0||B.isInstancedMesh&&ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ge.instancingMorph===!1&&B.morphTexture!==null||ge.envMap!==Ae||D.fog===!0&&ge.fog!==$||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Be.numPlanes||ge.numIntersection!==Be.numIntersection)||ge.vertexAlphas!==We||ge.vertexTangents!==je||ge.morphTargets!==xe||ge.morphNormals!==at||ge.morphColors!==ft||ge.toneMapping!==vt||ge.morphTargetsCount!==Fe||!!ge.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,ge.__version=D.version);let rt=ge.currentProgram;Tt===!0&&(rt=Pt(D,w,B),N&&D.isNodeMaterial&&N.onUpdateProgram(D,rt,ge));let Yt=!1,jt=!1,Nt=!1,ht=rt.getUniforms(),wt=ge.uniforms;if(E.useProgram(rt.program)&&(Yt=!0,jt=!0,Nt=!0),D.id!==_e&&(_e=D.id,jt=!0),ge.needsLights){let Mt=gi(b.state.lightProbeGridArray,B);ge.lightProbeGrid!==Mt&&(ge.lightProbeGrid=Mt,jt=!0)}if(Yt||K!==x){E.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(L,"projectionMatrix",x.projectionMatrix),ht.setValue(L,"viewMatrix",x.matrixWorldInverse);let Mt=ht.map.cameraPosition;Mt!==void 0&&Mt.setValue(L,di.setFromMatrixPosition(x.matrixWorld)),Dt.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ht.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),K!==x&&(K=x,jt=!0,Nt=!0)}if(ge.needsLights&&(dt.state.sunShadowMap.length>0&&ht.setValue(L,"sunShadowMap",dt.state.sunShadowMap,q),dt.state.directionalShadowMap.length>0&&ht.setValue(L,"directionalShadowMap",dt.state.directionalShadowMap,q),dt.state.spotShadowMap.length>0&&ht.setValue(L,"spotShadowMap",dt.state.spotShadowMap,q),dt.state.pointShadowMap.length>0&&ht.setValue(L,"pointShadowMap",dt.state.pointShadowMap,q)),B.isSkinnedMesh){ht.setOptional(L,B,"bindMatrix"),ht.setOptional(L,B,"bindMatrixInverse");let Mt=B.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),ht.setValue(L,"boneTexture",Mt.boneTexture,q))}B.isBatchedMesh&&(ht.setOptional(L,B,"batchingTexture"),ht.setValue(L,"batchingTexture",B._matricesTexture,q),ht.setOptional(L,B,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",B._indirectTexture,q),ht.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",B._colorsTexture,q));let Xt=I.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&xt.update(B,I,rt),(jt||ge.receiveShadow!==B.receiveShadow)&&(ge.receiveShadow=B.receiveShadow,ht.setValue(L,"receiveShadow",B.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&w.environment!==null&&(wt.envMapIntensity.value=w.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Ug()),jt){if(ht.setValue(L,"toneMappingExposure",p.toneMappingExposure),ge.needsLights&&si(wt,Nt),$&&D.fog===!0&&Me.refreshFogUniforms(wt,$),Me.refreshMaterialUniforms(wt,D,he,Y,b.state.transmissionRenderTarget[x.id]),ge.needsLights&&ge.lightProbeGrid){let Mt=ge.lightProbeGrid;wt.probesSH.value=Mt.texture,wt.probesMin.value.copy(Mt.boundingBox.min),wt.probesMax.value.copy(Mt.boundingBox.max),wt.probesResolution.value.copy(Mt.resolution)}Cn.upload(L,Ut(ge),wt,q)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Cn.upload(L,Ut(ge),wt,q),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ht.setValue(L,"center",B.center),ht.setValue(L,"modelViewMatrix",B.modelViewMatrix),ht.setValue(L,"normalMatrix",B.normalMatrix),ht.setValue(L,"modelMatrix",B.matrixWorld),D.uniformsGroups!==void 0){let Mt=D.uniformsGroups;for(let Ui=0,Qt=Mt.length;Ui<Qt;Ui++){let pi=Mt[Ui];Ne.update(pi,rt),Ne.bind(pi,rt)}}return rt}function si(x,w){x.ambientLightColor.needsUpdate=w,x.lightProbe.needsUpdate=w,x.sunLights.needsUpdate=w,x.sunLightShadows.needsUpdate=w,x.directionalLights.needsUpdate=w,x.directionalLightShadows.needsUpdate=w,x.pointLights.needsUpdate=w,x.pointLightShadows.needsUpdate=w,x.spotLights.needsUpdate=w,x.spotLightShadows.needsUpdate=w,x.rectAreaLights.needsUpdate=w,x.hemisphereLights.needsUpdate=w}function Bt(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,w,I){let D=P.get(x);D.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),P.get(x.texture).__webglTexture=w,P.get(x.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:I,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,w){let I=P.get(x);I.__webglFramebuffer=w,I.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(x,w=0,I=0){j=x,H=w,ae=I;let D=null,B=!1,$=!1;if(x){let ee=P.get(x);if(ee.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(L.FRAMEBUFFER,ee.__webglFramebuffer),Q.copy(x.viewport),ne.copy(x.scissor),Qe=x.scissorTest,E.viewport(Q),E.scissor(ne),E.setScissorTest(Qe),_e=-1;return}else if(ee.__webglFramebuffer===void 0)q.setupRenderTarget(x);else if(ee.__hasExternalTextures)q.rebindTextures(x,P.get(x.texture).__webglTexture,P.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ae=x.depthTexture;if(ee.__boundDepthTexture!==Ae){if(Ae!==null&&P.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(x)}}let de=x.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&($=!0);let ce=P.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ce[w])?D=ce[w][I]:D=ce[w],B=!0):x.samples>0&&q.useMultisampledRTT(x)===!1?D=P.get(x).__webglMultisampledFramebuffer:Array.isArray(ce)?D=ce[I]:D=ce,Q.copy(x.viewport),ne.copy(x.scissor),Qe=x.scissorTest}else Q.copy(Ve).multiplyScalar(he).floor(),ne.copy(Re).multiplyScalar(he).floor(),Qe=yt;if(I!==0&&(D=z),E.bindFramebuffer(L.FRAMEBUFFER,D)&&E.drawBuffers(x,D),E.viewport(Q),E.scissor(ne),E.setScissorTest(Qe),B){let ee=P.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+w,ee.__webglTexture,I)}else if($){let ee=w;for(let de=0;de<x.textures.length;de++){let ce=P.get(x.textures[de]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+de,ce.__webglTexture,I,ee)}}else if(x!==null&&I!==0){let ee=P.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ee.__webglTexture,I)}_e=-1};function $t(x){let w=P.get(x);return(w.__readFormat!==x.format||w.__readType!==x.type)&&(w.__readFormat=x.format,w.__readType=x.type,w.__formatReadable=Dt.textureFormatReadable(x.format),w.__typeReadable=Dt.textureTypeReadable(x.type)),w}this.readRenderTargetPixels=function(x,w,I,D,B,$,ee,de=0){if(!(x&&x.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ee!==void 0&&(ce=ce[ee]),ce){E.bindFramebuffer(L.FRAMEBUFFER,ce);try{let Ae=x.textures[de],We=Ae.format,je=Ae.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de);let xe=$t(Ae);if(xe.__formatReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=x.width-D&&I>=0&&I<=x.height-B&&L.readPixels(w,I,D,B,se.convert(We),se.convert(je),$)}finally{let Ae=j!==null?P.get(j).__webglFramebuffer:null;E.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,w,I,D,B,$,ee,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=P.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ee!==void 0&&(ce=ce[ee]),ce)if(w>=0&&w<=x.width-D&&I>=0&&I<=x.height-B){E.bindFramebuffer(L.FRAMEBUFFER,ce);let Ae=x.textures[de],We=Ae.format,je=Ae.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de);let xe=$t(Ae);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,at),L.bufferData(L.PIXEL_PACK_BUFFER,$.byteLength,L.STREAM_READ),L.readPixels(w,I,D,B,se.convert(We),se.convert(je),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ft=j!==null?P.get(j).__webglFramebuffer:null;E.bindFramebuffer(L.FRAMEBUFFER,ft);let vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ku(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,at),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,$),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(at),L.deleteSync(vt),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,w=null,I=0){let D=Math.pow(2,-I),B=Math.floor(x.image.width*D),$=Math.floor(x.image.height*D),ee=w!==null?w.x:0,de=w!==null?w.y:0;q.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,I,0,0,ee,de,B,$),E.unbindTexture()},this.copyTextureToTexture=function(x,w,I=null,D=null,B=0,$=0){let ee,de,ce,Ae,We,je,xe,at,ft,vt=x.isCompressedTexture?x.mipmaps[$]:x.image;if(I!==null)ee=I.max.x-I.min.x,de=I.max.y-I.min.y,ce=I.isBox3?I.max.z-I.min.z:1,Ae=I.min.x,We=I.min.y,je=I.isBox3?I.min.z:0;else{let wt=Math.pow(2,-B);ee=Math.floor(vt.width*wt),de=Math.floor(vt.height*wt),x.isDataArrayTexture?ce=vt.depth:x.isData3DTexture?ce=Math.floor(vt.depth*wt):ce=1,Ae=0,We=0,je=0}D!==null?(xe=D.x,at=D.y,ft=D.z):(xe=0,at=0,ft=0);let mt=se.convert(w.format),Fe=se.convert(w.type),ge;w.isData3DTexture?(q.setTexture3D(w,0),ge=L.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(q.setTexture2DArray(w,0),ge=L.TEXTURE_2D_ARRAY):(q.setTexture2D(w,0),ge=L.TEXTURE_2D),E.activeTexture(L.TEXTURE0),E.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,w.flipY),E.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),E.pixelStorei(L.UNPACK_ALIGNMENT,w.unpackAlignment);let dt=E.getParameter(L.UNPACK_ROW_LENGTH),Tt=E.getParameter(L.UNPACK_IMAGE_HEIGHT),rt=E.getParameter(L.UNPACK_SKIP_PIXELS),Yt=E.getParameter(L.UNPACK_SKIP_ROWS),jt=E.getParameter(L.UNPACK_SKIP_IMAGES);E.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),E.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),E.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),E.pixelStorei(L.UNPACK_SKIP_ROWS,We),E.pixelStorei(L.UNPACK_SKIP_IMAGES,je);let Nt=x.isDataArrayTexture||x.isData3DTexture,ht=w.isDataArrayTexture||w.isData3DTexture;if(x.isDepthTexture){let wt=P.get(x),Xt=P.get(w),Mt=P.get(wt.__renderTarget),Ui=P.get(Xt.__renderTarget);E.bindFramebuffer(L.READ_FRAMEBUFFER,Mt.__webglFramebuffer),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Qt=0;Qt<ce;Qt++)Nt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(x).__webglTexture,B,je+Qt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(w).__webglTexture,$,ft+Qt)),L.blitFramebuffer(Ae,We,ee,de,xe,at,ee,de,L.DEPTH_BUFFER_BIT,L.NEAREST);E.bindFramebuffer(L.READ_FRAMEBUFFER,null),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||P.has(x)){let wt=P.get(x),Xt=P.get(w);E.bindFramebuffer(L.READ_FRAMEBUFFER,J),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Mt=0;Mt<ce;Mt++)Nt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,B,je+Mt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,B),ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,$,ft+Mt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,$),B!==0?L.blitFramebuffer(Ae,We,ee,de,xe,at,ee,de,L.COLOR_BUFFER_BIT,L.NEAREST):ht?L.copyTexSubImage3D(ge,$,xe,at,ft+Mt,Ae,We,ee,de):L.copyTexSubImage2D(ge,$,xe,at,Ae,We,ee,de);E.bindFramebuffer(L.READ_FRAMEBUFFER,null),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ht?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(ge,$,xe,at,ft,ee,de,ce,mt,Fe,vt.data):w.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,$,xe,at,ft,ee,de,ce,mt,vt.data):L.texSubImage3D(ge,$,xe,at,ft,ee,de,ce,mt,Fe,vt):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,$,xe,at,ee,de,mt,Fe,vt.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,$,xe,at,vt.width,vt.height,mt,vt.data):L.texSubImage2D(L.TEXTURE_2D,$,xe,at,ee,de,mt,Fe,vt);E.pixelStorei(L.UNPACK_ROW_LENGTH,dt),E.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt),E.pixelStorei(L.UNPACK_SKIP_PIXELS,rt),E.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),E.pixelStorei(L.UNPACK_SKIP_IMAGES,jt),$===0&&w.generateMipmaps&&L.generateMipmap(ge),E.unbindTexture()},this.initRenderTarget=function(x){P.get(x).__webglFramebuffer===void 0&&q.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?q.setTextureCube(x,0):x.isData3DTexture?q.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?q.setTexture2DArray(x,0):q.setTexture2D(x,0),E.unbindTexture()},this.resetState=function(){H=0,ae=0,j=null,E.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}},ql={type:"change"},Fo={type:"start"},Xh={type:"end"},xn=new Wa,Yl=new or,Og=Math.cos(70*Vu.DEG2RAD),ti=new k,Si=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ws=1e-6,Fg=class extends Oc{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:aa.ROTATE,MIDDLE:aa.DOLLY,RIGHT:aa.PAN},this.touches={ONE:ia.ROTATE,TWO:ia.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Sr,this._lastTargetPosition=new k,this._quat=new Sr().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yl,this._sphericalDelta=new yl,this._scale=1,this._panOffset=new k,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new k,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zg.bind(this),this._onPointerDown=Bg.bind(this),this._onPointerUp=kg.bind(this),this._onContextMenu=qg.bind(this),this._onMouseWheel=Vg.bind(this),this._onKeyDown=Wg.bind(this),this._onTouchStart=Xg.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=Gg.bind(this),this._onMouseMove=Hg.bind(this),this._interceptControlDown=Yg.bind(this),this._interceptControlUp=Zg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ql),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ti.copy(t).sub(this.target),ti.applyQuaternion(this._quat),this._spherical.setFromVector3(ti),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Si:i>Math.PI&&(i-=Si),r<-Math.PI?r+=Si:r>Math.PI&&(r-=Si),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(ti.setFromSpherical(this._spherical),ti.applyQuaternion(this._quatInverse),t.copy(this.target).add(ti),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let l=ti.length();n=this._clampDistance(l*this._scale);let h=l-n;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){let l=new k(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;let u=new k(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),n=ti.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(xn.origin.copy(this.object.position),xn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xn.direction))<Og?this.object.lookAt(this.target):(Yl.setFromNormalAndCoplanarPoint(this.object.up,this.target),xn.intersectPlane(Yl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ws||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ws||this._lastTargetPosition.distanceToSquared(this.target)>ws?(this.dispatchEvent(ql),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Si/60*this.autoRotateSpeed*e:Si/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ti.setFromMatrixColumn(t,0),ti.multiplyScalar(-e),this._panOffset.add(ti)}_panUp(e,t){this.screenSpacePanning===!0?ti.setFromMatrixColumn(t,1):(ti.setFromMatrixColumn(t,0),ti.crossVectors(this.object.up,ti)),ti.multiplyScalar(e),this._panOffset.add(ti)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ti.copy(r).sub(this.target);let a=ti.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,l=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/t.clientHeight),this._rotateUp(Si*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/t.clientHeight),this._rotateUp(Si*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(n,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Bg(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zg(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function kg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Gg(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case aa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=At.DOLLY;break;case aa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=At.ROTATE}break;case aa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Fo)}function Hg(e){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Vg(e){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(e.preventDefault(),this.dispatchEvent(Fo),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Xh))}function Wg(e){this.enabled!==!1&&this._handleKeyDown(e)}function Xg(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ia.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=At.TOUCH_ROTATE;break;case ia.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case ia.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=At.TOUCH_DOLLY_PAN;break;case ia.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Fo)}function jg(e){switch(this._trackPointer(e),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=At.NONE}}function qg(e){this.enabled!==!1&&e.preventDefault()}function Yg(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zl(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new rc;a.background=new $e(16777215);let n=t.clientWidth||900,l=t.clientHeight||480,h=new Li(35,n/l,.1,100);h.position.set(8.5,4.2,7.5);let u=new Ng({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setSize(n,l),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=Eo,u.toneMappingExposure=1.15,u.shadowMap.enabled=!0,u.shadowMap.type=Oa,t.appendChild(u.domElement);let c=new Fg(h,u.domElement);c.enableDamping=!0,c.dampingFactor=.05,c.maxPolarAngle=Math.PI/2-.05,c.minDistance=2,c.maxDistance=28,c.target.set(0,0,0),c.autoRotate=!0,c.autoRotateSpeed=.6;let m=null,_=()=>{c.autoRotate=!1,clearTimeout(m),m=setTimeout(()=>{lt.autoRotate&&(c.autoRotate=!0)},6e3)};u.domElement.addEventListener("pointerdown",_),u.domElement.addEventListener("wheel",_,{passive:!0}),u.domElement.addEventListener("touchstart",_,{passive:!0});let d=new Pc(16777215,.9);a.add(d);let v=new Ms(16777215,1.25);v.position.set(12,16,14),v.castShadow=!0,v.shadow.mapSize.width=1024,v.shadow.mapSize.height=1024,v.shadow.bias=-5e-4,a.add(v);let y=new Ms(14412542,.7);y.position.set(-14,8,-10),a.add(y);let T=new Ms(15793652,.6);T.position.set(0,18,0),a.add(T);let M=new Uo(30,30),f=new Mc({opacity:.12}),C=new Jt(M,f);C.rotation.x=-Math.PI/2,C.position.y=-1.65,C.receiveShadow=!0,a.add(C);let G=new Nc(24,24,14870768,15857145);G.position.y=-1.64,a.add(G);let s={aluFrame:new zt({color:13949149,metalness:.8,roughness:.25,side:Ot}),galvSteel:new zt({color:12897749,metalness:.65,roughness:.45,side:Ot}),stainless:new zt({color:14476266,metalness:.55,roughness:.35,side:Ot}),baseSkid:new zt({color:9741240,metalness:.75,roughness:.35,side:Ot}),panelSolid:new zt({color:16317180,metalness:.15,roughness:.35,side:Ot}),panelCutaway:new bc({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:Ot}),fanHousing:new zt({color:165063,metalness:.6,roughness:.3,side:Ot}),fanImpeller:new zt({color:3718648,metalness:.75,roughness:.25,side:Ot}),motorCast:new zt({color:1976635,metalness:.85,roughness:.3,side:Ot}),copperPipe:new zt({color:12730636,metalness:.9,roughness:.2,side:Ot}),coolingFin:new zt({color:3718648,metalness:.55,roughness:.35,side:Ot}),heatingFin:new zt({color:16281969,metalness:.55,roughness:.35,side:Ot}),rotorWheel:new zt({color:6583435,metalness:.7,roughness:.4,side:Ot}),filterCloth:new zt({color:16317180,roughness:.95,metalness:.05,side:Ot}),filterG4:new zt({color:14870768,roughness:.9,metalness:.05,side:Ot}),damperBlade:new zt({color:9741240,metalness:.8,roughness:.25,side:Ot}),actuatorOrange:new zt({color:15357964,metalness:.2,roughness:.4}),drainPan:new zt({color:14476266,metalness:.55,roughness:.35,side:Ot}),doorHandle:new zt({color:988970,metalness:.8,roughness:.3}),rubberBlack:new zt({color:988970,roughness:.85,metalness:.1,side:Ot}),brassGold:new zt({color:14251782,metalness:.85,roughness:.25}),springSilver:new zt({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new zt({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new zt({color:16777215,roughness:.2}),touchscreen:new On({color:165063})},b=[],A=[],R=new Kt;a.add(R);function o(g,X,V,re,ue=0,Z=0,Pe=0,Se=!0,we=!0){let be=new kn(g,X,V),Oe=new Jt(be,re);return Oe.position.set(ue,Z,Pe),Oe.castShadow=Se,Oe.receiveShadow=we,Oe}function p(g,X,V,re,ue,Z=0,Pe=0,Se=0,we=0,be=0,Oe=!1,et=0,Pt=Math.PI*2){let Ut=new _o(g,X,V,re,1,Oe,et,Pt),bt=new Jt(Ut,ue);return bt.position.set(Z,Pe,Se),we&&(bt.rotation.x=we),be&&(bt.rotation.z=be),bt.castShadow=!0,bt.receiveShadow=!0,bt}function W(g,X=s.panelSolid,V=s.panelCutaway){return g.userData.solidMat=X,g.userData.cutawayMat=V,A.push(g),g}function N(g){let X=-1.4100000000000001,V=o(8.4+.2,.22,.1,s.baseSkid,0,X,1-.05),re=o(8.4+.2,.22,.1,s.baseSkid,0,X,-1+.05);g.add(V,re);let ue=[-4.2,-2.5,-.8,.8,2.5,4.2];ue.forEach(Ee=>{g.add(o(.12,.22,2-.2,s.baseSkid,Ee,X,0))}),[-2.5,.8].forEach(Ee=>{g.add(o(.28,.12,.12,s.aluFrame,Ee,X,1-.04)),g.add(o(.28,.12,.12,s.aluFrame,Ee,X,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([Ee,tt])=>{g.add(o(.08,.18,.08,s.yellowSafety,Ee,X+.06,tt))});let Z=.08;g.add(o(8.4,Z,Z,s.aluFrame,0,-1.3+Z/2,1-Z/2),o(8.4,Z,Z,s.aluFrame,0,-1.3+Z/2,-1+Z/2),o(8.4,Z,Z,s.aluFrame,0,1.3-Z/2,1-Z/2),o(8.4,Z,Z,s.aluFrame,0,1.3-Z/2,-1+Z/2)),ue.forEach(Ee=>{g.add(o(Z,2.6,Z,s.aluFrame,Ee,0,1-Z/2),o(Z,2.6,Z,s.aluFrame,Ee,0,-1+Z/2),o(Z,Z,2-Z*2,s.aluFrame,Ee,1.3-Z/2,0),o(Z,Z,2-Z*2,s.aluFrame,Ee,-1.3+Z/2,0))});let Pe=5,Se=o(Pe,.05,2-.16,s.galvSteel,-4.2+Pe/2,0,0);g.add(Se),g.add(o(8.4-.1,2.6-.1,.05,s.panelSolid,0,0,-1+.04)),g.add(o(8.4-.1,.05,2-.16,s.galvSteel,0,-1.3+.03,0)),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,4.2-.03,0,0));let we=o(.18,1.2,1.2,s.galvSteel,4.2+.09,-.2,0);g.add(we),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,-4.2+.03,0,0));let be=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],Oe=[1.7,1.7,1.6,1.7,1.7];be.forEach((Ee,tt)=>{let Ke=Oe[tt]-.08,ei=o(Ke,.04,2-.16,s.panelCutaway,Ee,1.3-.02,0,!1,!1);g.add(ei),W(ei,s.panelSolid,s.panelCutaway);let Ur=o(Ke,2.6-.18,.03,s.panelCutaway,Ee,0,1-.02,!1,!1);g.add(Ur),W(Ur,s.panelSolid,s.panelCutaway);let Ni=.04;g.add(o(Ke,Ni,.02,s.aluFrame,Ee,(2.6-.18)/2,1),o(Ke,Ni,.02,s.aluFrame,Ee,-2.42/2,1),o(Ni,2.6-.18,.02,s.aluFrame,Ee-Ke/2,0,1),o(Ni,2.6-.18,.02,s.aluFrame,Ee+Ke/2,0,1)),[-.45,.45].forEach(xa=>{g.add(o(.04,.14,.05,s.doorHandle,Ee+Ke/2-.1,xa,1+.02))}),[-.55,.55].forEach(xa=>{g.add(o(.03,.1,.03,s.aluFrame,Ee-Ke/2+.04,xa,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([Ee,tt])=>{let Ke=p(.14,.14,.04,24,s.aluFrame,Ee,tt,1,Math.PI/2),ei=p(.11,.11,.045,20,s.panelCutaway,Ee,tt,1,Math.PI/2);g.add(Ke,ei)}),[[-1.65,.1],[3.35,.35]].forEach(([Ee,tt])=>{let Ke=p(.08,.08,.03,20,s.aluFrame,Ee,tt,1.015,Math.PI/2),ei=p(.07,.07,.035,20,s.gaugeFace,Ee,tt,1+.015,Math.PI/2);g.add(Ke,ei),g.add(p(.008,.008,.22,8,s.panelCutaway,Ee-.03,tt-.12,1+.01)),g.add(p(.008,.008,.22,8,s.panelCutaway,Ee+.03,tt-.12,1+.01))});let et=.48,Pt=.68,Ut=.18,bt=o(et,Pt,Ut,s.galvSteel,2.75,.45,1+Ut/2),gi=o(.24,.16,.01,s.touchscreen,2.75,.56,1+Ut+.005),De=p(.014,.014,.02,10,s.coolingFin,2.65,.42,1+Ut+.01,Math.PI/2),si=p(.014,.014,.02,10,s.yellowSafety,2.75,.42,1+Ut+.01,Math.PI/2),Bt=p(.014,.014,.02,10,s.heatingFin,2.85,.42,1+Ut+.01,Math.PI/2),$t=o(.08,.08,.01,s.yellowSafety,2.75,.3,1+Ut+.005),x=o(.04,.06,.03,s.heatingFin,2.75,.3,1+Ut+.02);g.add(bt,gi,De,si,Bt,$t,x);let w=-1.3/2-.05,I=2-.35,D=.85,B=o(.12,D,I,s.aluFrame,-4.2-.06,w,0);g.add(B);for(let Ee=0;Ee<5;Ee++){let tt=w-D/2+.1+Ee*((D-.2)/4),Ke=o(.08,.015,I-.06,s.damperBlade,-4.2-.06,tt,0);Ke.rotation.z=.55,g.add(Ke)}let $=o(.16,.2,.14,s.actuatorOrange,-4.2-.06,w,1+.06);g.add($);let ee=o(.1,1.3-.35,2-.35,s.aluFrame,-3.7,w,0),de=o(.08,1.3-.4,2-.4,s.filterG4,-3.7,w,0);g.add(ee,de);let ce=1.3/2-.05,Ae=o(.12,D,I,s.aluFrame,-4.2-.06,ce,0);g.add(Ae);for(let Ee=0;Ee<5;Ee++){let tt=ce-D/2+.1+Ee*((D-.2)/4),Ke=o(.08,.015,I-.06,s.damperBlade,-4.2-.06,tt,0);Ke.rotation.z=-.55,g.add(Ke)}let We=o(.16,.2,.14,s.actuatorOrange,-4.2-.06,ce,1+.06);g.add(We);let je=new Kt;je.position.set(-2.85,ce,0),g.add(je);let xe=p(.38,.3,.12,24,s.aluFrame,.2,0,0,0,Math.PI/2),at=p(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);je.add(xe,at);let ft=p(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);je.add(ft);let vt=p(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);je.add(vt),b.push(()=>{at.rotation.x+=.14});let mt=o(.1,1.3-.35,2-.35,s.aluFrame,-2.4,w,0);g.add(mt);for(let Ee=0;Ee<2;Ee++)for(let tt=0;tt<3;tt++){let Ke=w-.22+Ee*.44,ei=-1+.35+tt*((2-.7)/2),Ur=new La(.18,.85,4),Ni=new Jt(Ur,s.filterCloth);Ni.position.set(-1.9,Ke,ei),Ni.rotation.z=-Math.PI/2,Ni.scale.set(.9,1.2,.7),g.add(Ni)}let Fe=new Kt;Fe.position.set(0,0,0),g.add(Fe);let ge=o(.38,2.6-.2,2-.2,s.aluFrame,0,0,0);g.add(ge);let dt=p(1.12,1.12,.32,36,s.aluFrame,0,0,0,0,Math.PI/2),Tt=p(1.08,1.08,.3,32,s.rotorWheel,0,0,0,0,Math.PI/2);Fe.add(dt,Tt);for(let Ee=0;Ee<12;Ee++){let tt=Ee/12*Math.PI*2,Ke=o(.025,2.12,.02,s.aluFrame,0,0,0);Ke.rotation.x=tt,Fe.add(Ke)}let rt=p(.09,.09,.22,12,s.motorCast,.22,1.05,.75,0,Math.PI/2),Yt=p(.02,.02,.3,8,s.doorHandle,.22,.95,.75);g.add(rt,Yt),b.push(()=>{Fe.rotation.x+=.01});let jt=2-.35,Nt=1.3-.35,ht=o(.24,Nt,jt,s.coolingFin,1.15,w,0);g.add(ht),[-.5,.5].forEach(Ee=>{let tt=p(.045,.045,Nt+.1,14,s.copperPipe,1.15,w,Ee);g.add(tt)});for(let Ee=0;Ee<8;Ee++){let tt=w-Nt/2+.1+Ee*((Nt-.2)/7),Ke=new Jt(new ml(.032,.012,8,12,Math.PI),s.copperPipe);Ke.position.set(1.15,tt,1-.18),Ke.rotation.y=Math.PI/2,Ke.rotation.x=Math.PI/2,g.add(Ke)}let wt=o(1.3,.09,jt+.1,s.drainPan,1.5,-1.3+.1,0);g.add(wt);let Xt=p(.02,.02,.18,10,s.stainless,1.8,-1.3+.06,1-.05,0,0);g.add(Xt);let Mt=o(.12,Nt,jt,s.aluFrame,1.45,w,0);g.add(Mt);for(let Ee=0;Ee<12;Ee++){let tt=-.7+Ee*((jt-.2)/11),Ke=o(.08,Nt-.05,.012,s.aluFrame,1.45,w,tt);Ke.rotation.y=.35,g.add(Ke)}let Ui=o(.18,Nt,jt,s.heatingFin,1.85,w,0);g.add(Ui),[-.4,.4].forEach(Ee=>{let tt=p(.04,.04,Nt+.1,14,s.copperPipe,1.85,w,Ee);g.add(tt)});let Qt=new Kt;Qt.position.set(2.85,w,0),g.add(Qt);let pi=p(.48,.38,.18,28,s.aluFrame,-.4,0,0,0,Math.PI/2),Ai=p(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);Qt.add(pi,Ai);let $i=p(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),_a=p(.14,.05,.16,16,s.aluFrame,-.25,0,0,0,Math.PI/2);Qt.add($i,_a),b.push(()=>{$i.rotation.x+=.15});let va=p(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),Ma=o(.14,.12,.14,s.motorCast,.32,.26,0);Qt.add(va,Ma);let Sa=o(1.1,.08,.8,s.baseSkid,.05,-Nt/2+.08,0);Qt.add(Sa),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ee,tt])=>{let Ke=o(.12,.03,.12,s.motorCast,Ee,-Nt/2+.02,tt),ei=p(.04,.04,.12,10,s.springSilver,Ee,-Nt/2+.08,tt);Qt.add(Ke,ei)});let Ie=o(.1,Nt,jt,s.rubberBlack,2.35,w,0);g.add(Ie);let nt=o(1.2,.03,.03,s.yellowSafety,2.9,w+.4,1-.25),ut=o(1.2,.03,.03,s.yellowSafety,2.9,w,1-.25);g.add(nt,ut);for(let Ee=-1;Ee<=1;Ee++){let tt=Ee*.45,Ke=o(.65,Nt-.1,.22,s.galvSteel,3.8,w,tt),ei=p(.11,.11,Nt-.1,16,s.aluFrame,3.47,w,tt);g.add(Ke,ei)}}function z(g){let X=-1.4100000000000001,V=o(8.6+.2,.22,.1,s.baseSkid,0,X,1-.05),re=o(8.6+.2,.22,.1,s.baseSkid,0,X,-1+.05);g.add(V,re);let ue=[-4.3,-2.6,-.9,.8,2.6,4.3];ue.forEach(Ie=>{g.add(o(.12,.22,2-.2,s.baseSkid,Ie,X,0))}),[-2.6,.8].forEach(Ie=>{g.add(o(.28,.12,.12,s.stainless,Ie,X,1-.04)),g.add(o(.28,.12,.12,s.stainless,Ie,X,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([Ie,nt])=>{g.add(o(.08,.18,.08,s.yellowSafety,Ie,X+.06,nt))});let Z=.08;g.add(o(8.6,Z,Z,s.stainless,0,-1.3+Z/2,1-Z/2),o(8.6,Z,Z,s.stainless,0,-1.3+Z/2,-1+Z/2),o(8.6,Z,Z,s.stainless,0,1.3-Z/2,1-Z/2),o(8.6,Z,Z,s.stainless,0,1.3-Z/2,-1+Z/2)),ue.forEach(Ie=>{g.add(o(Z,2.6,Z,s.stainless,Ie,0,1-Z/2),o(Z,2.6,Z,s.stainless,Ie,0,-1+Z/2),o(Z,Z,2-Z*2,s.stainless,Ie,1.3-Z/2,0),o(Z,Z,2-Z*2,s.stainless,Ie,-1.3+Z/2,0))});let Pe=5.1,Se=o(Pe,.05,2-.16,s.stainless,-4.3+Pe/2,0,0);g.add(Se),g.add(o(8.6-.1,2.6-.1,.04,s.panelSolid,0,0,-1+.03)),g.add(o(8.6-.12,2.6-.12,.01,s.stainless,0,0,-1+.055)),g.add(o(8.6-.1,.05,2-.16,s.stainless,0,-1.3+.03,0));let we=p(.04,.04,8.6-.2,12,s.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);g.add(we),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,4.3-.03,0,0));let be=o(.18,1.2,1.2,s.stainless,4.3+.09,-.2,0);g.add(be),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,-4.3+.03,0,0));let Oe=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],et=[1.7,1.7,1.7,1.8,1.7];Oe.forEach((Ie,nt)=>{let ut=et[nt]-.08,Ee=o(ut,.04,2-.16,s.panelCutaway,Ie,1.3-.02,0,!1,!1);g.add(Ee),W(Ee,s.panelSolid,s.panelCutaway);let tt=o(ut,2.6-.18,.03,s.panelCutaway,Ie,0,1-.02,!1,!1);g.add(tt),W(tt,s.panelSolid,s.panelCutaway);let Ke=.04;g.add(o(ut,Ke,.02,s.stainless,Ie,(2.6-.18)/2,1),o(ut,Ke,.02,s.stainless,Ie,-2.42/2,1),o(Ke,2.6-.18,.02,s.stainless,Ie-ut/2,0,1),o(Ke,2.6-.18,.02,s.stainless,Ie+ut/2,0,1)),[-.45,.45].forEach(ei=>{g.add(o(.04,.14,.05,s.doorHandle,Ie+ut/2-.1,ei,1+.02))}),[-.55,.55].forEach(ei=>{g.add(o(.03,.1,.03,s.stainless,Ie-ut/2+.04,ei,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([Ie,nt])=>{let ut=p(.14,.14,.04,24,s.stainless,Ie,nt,1,Math.PI/2),Ee=p(.11,.11,.045,20,s.panelCutaway,Ie,nt,1,Math.PI/2);g.add(ut,Ee)}),[[-1.75,.1],[3.45,.35]].forEach(([Ie,nt])=>{let ut=p(.08,.08,.03,20,s.stainless,Ie,nt,1.015,Math.PI/2),Ee=p(.07,.07,.035,20,s.gaugeFace,Ie,nt,1+.015,Math.PI/2);g.add(ut,Ee),g.add(p(.008,.008,.22,8,s.panelCutaway,Ie-.03,nt-.12,1+.01)),g.add(p(.008,.008,.22,8,s.panelCutaway,Ie+.03,nt-.12,1+.01))});let Pt=.48,Ut=.68,bt=.18,gi=o(Pt,Ut,bt,s.stainless,2.85,.45,1+bt/2),De=o(.24,.16,.01,s.touchscreen,2.85,.56,1+bt+.005),si=p(.014,.014,.02,10,s.coolingFin,2.75,.42,1+bt+.01,Math.PI/2),Bt=p(.014,.014,.02,10,s.yellowSafety,2.85,.42,1+bt+.01,Math.PI/2),$t=p(.014,.014,.02,10,s.heatingFin,2.95,.42,1+bt+.01,Math.PI/2),x=o(.08,.08,.01,s.yellowSafety,2.85,.3,1+bt+.005),w=o(.04,.06,.03,s.heatingFin,2.85,.3,1+bt+.02);g.add(gi,De,si,Bt,$t,x,w);let I=-1.3/2-.05,D=2-.35,B=.85,$=o(.12,B,D,s.stainless,-4.3-.06,I,0);g.add($);for(let Ie=0;Ie<5;Ie++){let nt=I-B/2+.1+Ie*((B-.2)/4),ut=o(.08,.015,D-.06,s.damperBlade,-4.3-.06,nt,0);ut.rotation.z=.55,g.add(ut)}let ee=o(.16,.2,.14,s.actuatorOrange,-4.3-.06,I,1+.06);g.add(ee);let de=o(.1,1.3-.35,2-.35,s.stainless,-3.8,I,0),ce=o(.08,1.3-.4,2-.4,s.filterG4,-3.8,I,0);g.add(de,ce);let Ae=1.3/2-.05,We=o(.12,B,D,s.stainless,-4.3-.06,Ae,0);g.add(We);for(let Ie=0;Ie<5;Ie++){let nt=Ae-B/2+.1+Ie*((B-.2)/4),ut=o(.08,.015,D-.06,s.damperBlade,-4.3-.06,nt,0);ut.rotation.z=-.55,g.add(ut)}let je=o(.16,.2,.14,s.actuatorOrange,-4.3-.06,Ae,1+.06);g.add(je);let xe=new Kt;xe.position.set(-2.95,Ae,0),g.add(xe);let at=p(.38,.3,.12,24,s.stainless,.2,0,0,0,Math.PI/2),ft=p(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);xe.add(at,ft);let vt=p(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);xe.add(vt);let mt=p(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);xe.add(mt),b.push(()=>{ft.rotation.x+=.14});let Fe=o(.1,1.3-.35,2-.35,s.stainless,-2.5,I,0);g.add(Fe);for(let Ie=0;Ie<2;Ie++)for(let nt=0;nt<3;nt++){let ut=I-.22+Ie*.44,Ee=-1+.35+nt*((2-.7)/2),tt=new La(.18,.85,4),Ke=new Jt(tt,s.filterCloth);Ke.position.set(-2,ut,Ee),Ke.rotation.z=-Math.PI/2,Ke.scale.set(.9,1.2,.7),g.add(Ke)}let ge=o(1.5,1.4,2-.35,s.stainless,-.05,0,0);ge.rotation.z=Math.PI/4,g.add(ge);let dt=o(2.2,.04,2-.3,s.stainless,-.05,0,0);dt.rotation.z=-Math.PI/4,g.add(dt);let Tt=2-.35,rt=1.3-.35;for(let Ie=0;Ie<3;Ie++){let nt=I-.25+Ie*.25,ut=p(.02,.02,Tt-.1,12,s.coolingFin,.95,nt,0,Math.PI/2);g.add(ut),g.add(o(.04,.04,.04,s.stainless,.95,nt,1-.2)),g.add(o(.04,.04,.04,s.stainless,.95,nt,-1+.2))}let Yt=o(.24,rt,Tt,s.coolingFin,1.25,I,0);g.add(Yt),[-.5,.5].forEach(Ie=>{let nt=p(.045,.045,rt+.1,14,s.copperPipe,1.25,I,Ie);g.add(nt)});for(let Ie=0;Ie<8;Ie++){let nt=I-rt/2+.1+Ie*((rt-.2)/7),ut=new Jt(new ml(.032,.012,8,12,Math.PI),s.copperPipe);ut.position.set(1.25,nt,1-.18),ut.rotation.y=Math.PI/2,ut.rotation.x=Math.PI/2,g.add(ut)}let jt=o(1.3,.09,Tt+.1,s.stainless,1.6,-1.3+.1,0);g.add(jt);let Nt=p(.025,.025,.2,12,s.stainless,1.9,-1.3+.06,1-.05);g.add(Nt);let ht=o(.12,rt,Tt,s.stainless,1.55,I,0);g.add(ht);for(let Ie=0;Ie<12;Ie++){let nt=-.7+Ie*((Tt-.2)/11),ut=o(.08,rt-.05,.012,s.stainless,1.55,I,nt);ut.rotation.y=.35,g.add(ut)}let wt=o(.18,rt,Tt,s.heatingFin,1.95,I,0);g.add(wt),[-.4,.4].forEach(Ie=>{let nt=p(.04,.04,rt+.1,14,s.copperPipe,1.95,I,Ie);g.add(nt)});let Xt=new Kt;Xt.position.set(2.85,I,0),g.add(Xt);let Mt=p(.48,.38,.18,28,s.stainless,-.4,0,0,0,Math.PI/2),Ui=p(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);Xt.add(Mt,Ui);let Qt=p(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),pi=p(.14,.05,.16,16,s.stainless,-.25,0,0,0,Math.PI/2);Xt.add(Qt,pi),b.push(()=>{Qt.rotation.x+=.15});let Ai=p(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),$i=o(.14,.12,.14,s.motorCast,.32,.26,0);Xt.add(Ai,$i);let _a=o(1.1,.08,.8,s.stainless,.05,-rt/2+.08,0);Xt.add(_a),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ie,nt])=>{let ut=o(.12,.03,.12,s.motorCast,Ie,-rt/2+.02,nt),Ee=p(.04,.04,.12,10,s.springSilver,Ie,-rt/2+.08,nt);Xt.add(ut,Ee)});let va=o(.1,rt,Tt,s.rubberBlack,2.35,I,0);g.add(va);let Ma=o(.2,rt-.1,Tt-.1,s.stainless,3.65,I,0),Sa=o(.16,rt-.15,Tt-.15,s.filterCloth,3.65,I,0);g.add(Ma,Sa);for(let Ie=-1;Ie<=1;Ie+=2){let nt=Ie*.4,ut=o(.42,rt-.1,.2,s.stainless,4.05,I,nt);g.add(ut)}}function J(g){let X=-1.2750000000000001,V=6.2+.2,re=2.2+.2,ue=o(V,.45,.08,s.baseSkid,0,X,1.1+.06),Z=o(V,.45,.08,s.baseSkid,0,X,-1.1-.06),Pe=o(.08,.45,re-.16,s.baseSkid,-3.1-.06,X,0),Se=o(.08,.45,re-.16,s.baseSkid,3.1+.06,X,0);g.add(ue,Z,Pe,Se);let we=o(V+.08,.04,.14,s.aluFrame,0,-1.05-.02,1.1+.05),be=o(V+.08,.04,.14,s.aluFrame,0,-1.05-.02,-1.1-.05);g.add(we,be);let Oe=o(V,.02,.04,s.rubberBlack,0,-1.05+.01,1.1),et=o(V,.02,.04,s.rubberBlack,0,-1.05+.01,-1.1);g.add(Oe,et),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([Le,st])=>{let oi=o(.14,.25,.14,s.yellowSafety,Le,X+.1,st),hi=p(.035,.035,.16,16,s.motorCast,Le,X+.16,st,0,Math.PI/2);g.add(oi,hi)});let Pt=o(.9,.18,.9,s.galvSteel,-.1,X-.14,0),Ut=o(.82,.19,.82,s.motorCast,-.1,X-.14,0),bt=o(.9,.18,.9,s.galvSteel,2.3,X-.14,0),gi=o(.82,.19,.82,s.motorCast,2.3,X-.14,0);g.add(Pt,Ut,bt,gi);let De=.08;g.add(o(6.2,De,De,s.aluFrame,0,-1.05+De/2,1.1-De/2),o(6.2,De,De,s.aluFrame,0,-1.05+De/2,-1.1+De/2),o(6.2,De,De,s.aluFrame,0,1.05-De/2,1.1-De/2),o(6.2,De,De,s.aluFrame,0,1.05-De/2,-1.1+De/2)),[-3.1+De/2,-.7,.6,1.8,3.1-De/2].forEach(Le=>{g.add(o(De,2.1-2*De,De,s.aluFrame,Le,0,1.1-De/2),o(De,2.1-2*De,De,s.aluFrame,Le,0,-1.1+De/2))}),[-3.1+De/2,-.7,.6,1.8,3.1-De/2].forEach(Le=>{g.add(o(De,De,2.2-2*De,s.aluFrame,Le,-1.05+De/2,0),o(De,De,2.2-2*De,s.aluFrame,Le,1.05-De/2,0))}),g.add(o(6.2-.1,2.1-.1,.05,s.panelSolid,0,0,-1.1+.04)),g.add(o(6.2-.1,.05,2.2-.1,s.galvSteel,0,-1.05+.04,0)),g.add(o(.05,2.1-.1,2.2-.1,s.panelSolid,3.1-.03,0,0));let si=o(3.8,.06,2.2+.1,s.panelSolid,1.15,1.05+.03,0);g.add(si),g.add(o(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,1.1+.06),o(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,-1.1-.06));let Bt=o(.06,2.1-.12,2.2-.12,s.galvSteel,-.7,0,0);g.add(Bt);let $t=o(2.2,2.1-.25,.12,s.coolingFin,-1.85,.02,-1.1+.15),x=o(.12,2.1-.25,2.2-.3,s.coolingFin,-3.1+.15,.02,0);g.add($t,x);for(let Le=-.8;Le<=.8;Le+=.2){let st=o(2.25,.02,.02,s.aluFrame,-1.85,Le,-1.05);g.add(st)}[-.8,-.2,.4].forEach(Le=>{let st=p(.035,.035,2.1,14,s.copperPipe,-1.85,Le,-.8600000000000001,0,Math.PI/2);g.add(st)}),[-2.2,-1.2].forEach((Le,st)=>{let oi=p(.48,.46,.22,28,s.motorCast,Le,1.1600000000000001,0,0,0,!0),hi=p(.51,.51,.04,28,s.aluFrame,Le,1.05+.22,0);g.add(oi,hi);let Qi=p(.46,.46,.02,24,s.galvSteel,Le,1.05+.22+.01,0,0,0,!0);g.add(Qi);for(let er=0;er<4;er++){let Nr=o(.9,.015,.015,s.galvSteel,Le,1.285,0);Nr.rotation.y=er/4*Math.PI,g.add(Nr)}let Gi=new Kt;Gi.position.set(Le,1.05+.12,0),g.add(Gi);let Ea=p(.12,.12,.08,16,s.aluFrame,0,0,0);Gi.add(Ea);for(let er=0;er<5;er++){let Nr=new Kt;Nr.rotation.y=er/5*Math.PI*2;let zo=o(.34,.02,.11,s.fanImpeller,.24,0,0);zo.rotation.x=.35,Nr.add(zo),Gi.add(Nr)}let Vn=st===0?.18:.17;b.push(()=>{Gi.rotation.y+=Vn});let Wn=p(.15,.15,.3,16,s.motorCast,Le,1.05-.12,0);g.add(Wn)});let w=o(1.5,.06,.6,s.baseSkid,-1.8,-1.05+.1,.1);g.add(w),[-2.15,-1.45].forEach(Le=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([Gi,Ea])=>{g.add(p(.04,.04,.04,12,s.rubberBlack,Le+Gi,-1.05+.14,.1+Ea))});let st=p(.16,.16,.58,24,s.motorCast,Le,-1.05+.45,.1),oi=p(.14,.16,.08,20,s.motorCast,Le,-1.05+.76,.1),hi=o(.1,.14,.08,s.motorCast,Le+.14,-1.05+.5,.1),Qi=p(.165,.165,.05,20,s.heatingFin,Le,-1.05+.22,.1);g.add(st,oi,hi,Qi)});let I=p(.12,.12,.52,20,s.motorCast,-.95,-1.05+.42,.25),D=p(.09,.12,.06,16,s.motorCast,-.95,-1.05+.7,.25);g.add(I,D);let B=p(.04,.04,.8,14,s.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),$=p(.04,.04,.6,14,s.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);g.add(B,$);let ee=p(.03,.03,1.1,14,s.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),de=p(.045,.045,.22,16,s.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);g.add(ee,de);let ce=p(.06,.06,.24,16,s.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),Ae=p(.03,.03,.34,14,s.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),We=o(.09,.12,.09,s.brassGold,-.95,-1.05+.45,-.3),je=p(.01,.01,.2,8,s.rubberBlack,-.95,-1.05+.54,-.3);g.add(ce,Ae,We,je),[-.15,.15].forEach(Le=>{let st=p(.045,.045,.02,16,s.gaugeFace,-.73,-.4,Le,0,Math.PI/2);g.add(st)});let xe=1.1,at=.8,ft=.35,vt=o(xe,at,ft,s.galvSteel,-.1,.2,-1.1-ft/2+.04),mt=o(xe+.06,.03,ft+.08,s.aluFrame,-.1,.2+at/2+.02,-1.1-ft/2);mt.rotation.x=-.12,g.add(vt,mt);for(let Le=-.3;Le<=.3;Le+=.12){let st=o(xe-.06,.02,.18,s.damperBlade,-.1,.2+Le,-1.1-ft/2);st.rotation.x=.45,g.add(st)}let Fe=1,ge=o(Fe,.75,.08,s.aluFrame,-.1,.2,-1.1+.25);g.add(ge);for(let Le=-.25;Le<=.25;Le+=.14){let st=o(Fe-.06,.11,.015,s.damperBlade,-.1,.2+Le,-.8500000000000001);st.rotation.x=.3,g.add(st)}let dt=.9,Tt=o(dt,.08,.9,s.aluFrame,-.1,-1.05+.15,0);g.add(Tt);for(let Le=-.3;Le<=.3;Le+=.15){let st=o(dt-.06,.015,.12,s.damperBlade,-.1,-.9,Le);st.rotation.z=.25,g.add(st)}let rt=o(.16,.22,.14,s.actuatorOrange,-.1,.35,1.1-.2),Yt=p(.04,.04,.06,16,s.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),jt=o(.03,.14,.02,s.motorCast,-.1,.42,1.1-.1);g.add(rt,Yt,jt);let Nt=p(.015,.015,.35,10,s.stainless,.25,.2,0);g.add(Nt);let ht=.6,wt=2.1-.3,Xt=2.2-.3,Mt=o(.18,wt,Xt,s.galvSteel,ht,0,0);g.add(Mt);for(let Le=-Xt/2+.3;Le<=Xt/2-.2;Le+=.5){let st=o(.05,wt-.1,.44,s.filterG4,ht-.05,0,Le),oi=o(.07,wt-.1,.44,s.filterCloth,ht+.05,0,Le);g.add(st,oi)}let Ui=p(.01,.01,.2,8,s.copperPipe,ht-.14,.3,1.1-.15),Qt=p(.01,.01,.2,8,s.copperPipe,ht+.14,.3,1.1-.15);g.add(Ui,Qt);let pi=1.25,Ai=2.1-.35,$i=2.2-.35,_a=o(.32,Ai,$i,s.coolingFin,pi,.02,0);g.add(_a);for(let Le=0;Le<4;Le++)for(let st=0;st<3;st++){let oi=-Ai/2+.2+st*(Ai/3.2),hi=pi-.12+Le*.08,Qi=p(.025,.025,.04,12,s.copperPipe,hi,oi,1.1-.18,Math.PI/2,0);g.add(Qi)}let va=p(.035,.035,.08,14,s.brassGold,pi-.15,-.2,1.1-.22);g.add(va);for(let Le=0;Le<4;Le++){let st=p(.008,.008,.28,8,s.copperPipe,pi-.08,-.2+Le*.1,.8800000000000001,0,Math.PI/4);g.add(st)}let Ma=$i+.15,Sa=.85,Ie=.09,nt=o(Sa,Ie,Ma,s.drainPan,pi,-1.05+Ie/2+.05,0);g.add(nt);let ut=p(.03,.03,.35,12,s.stainless,pi+.1,-1.05-.05,1.1+.02),Ee=p(.03,.03,.22,12,s.stainless,pi+.22,-1.05-.12,1.1+.02),tt=p(.03,.03,.14,12,s.stainless,pi+.16,-1.05-.22,1.1+.02,0,Math.PI/2);g.add(ut,Ee,tt);let Ke=o(.12,Ai-.05,$i,s.aluFrame,pi+.24,.02,0);g.add(Ke);let ei=1.8,Ur=Ai,Ni=$i;for(let Le=-.5;Le<=.5;Le+=.25){let st=p(.045,.045,Ni-.2,16,s.stainless,ei,Le,0,Math.PI/2,0);g.add(st)}let xa=o(.25,Ur-.2,.3,s.galvSteel,ei,0,-1.1+.2);g.add(xa);let Er=new Kt;Er.position.set(2.45,.05,0),g.add(Er);let jh=p(.48,.38,.18,28,s.aluFrame,-.38,0,0,0,Math.PI/2),qh=p(.44,.44,.03,24,s.copperPipe,-.36,0,0,0,Math.PI/2,!0);Er.add(jh,qh);let Bo=p(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),Yh=p(.14,.05,.16,16,s.aluFrame,-.24,0,0,0,Math.PI/2);Er.add(Bo,Yh),b.push(()=>{Bo.rotation.x+=.15});let Zh=p(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),Kh=o(.14,.12,.14,s.motorCast,.32,.26,0);Er.add(Zh,Kh);let Jh=o(1.1,.08,.8,s.baseSkid,.05,-Ai/2+.1,0);Er.add(Jh),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Le,st])=>{let oi=o(.12,.03,.12,s.motorCast,Le,-Ai/2+.04,st),hi=p(.04,.04,.12,10,s.springSilver,Le,-Ai/2+.1,st);Er.add(oi,hi)});let $h=o(.85,.6,.85,s.galvSteel,2.3,-1.05+.3,0),Qh=o(.9,.1,.9,s.rubberBlack,2.3,-1.05+.05,0);g.add($h,Qh),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((Le,st)=>{let oi=Le.maxX-Le.minX,hi=(Le.minX+Le.maxX)/2,Qi=2.1-.22,Gi=o(oi-.04,Qi,.04,s.panelCutaway,hi,0,1.1-.02,!1,!1);g.add(Gi),W(Gi,s.panelSolid,s.panelCutaway);let Ea=o(.04,.14,.04,s.doorHandle,hi+oi*.42,0,1.1+.01),Vn=o(.03,.08,.03,s.stainless,hi-oi*.45,Qi*.35,1.1+.01),Wn=o(.03,.08,.03,s.stainless,hi-oi*.45,-Qi*.35,1.1+.01);if(g.add(Ea,Vn,Wn),st===1||st===2||st===3){let er=p(.12,.12,.04,20,s.aluFrame,hi,.22,1.1,Math.PI/2);g.add(er)}});let eu=o(.42,.65,.18,s.panelSolid,.6,.3,1.1+.08),tu=o(.38,.6,.02,s.aluFrame,.6,.3,1.1+.17),iu=o(.24,.16,.01,s.touchscreen,.6,.4,1.1+.18),ru=o(.09,.09,.02,s.yellowSafety,.6,.18,1.1+.18),au=p(.035,.035,.05,12,s.heatingFin,.6,.18,1.1+.2,Math.PI/2);g.add(eu,tu,iu,ru,au),[-.15,.15].forEach(Le=>{let st=p(.065,.065,.035,20,s.aluFrame,.6,-.25,1.1800000000000002+Le,Math.PI/2),oi=p(.055,.055,.037,20,s.gaugeFace,.6,-.25,1.1+.08+Le,Math.PI/2),hi=p(.008,.008,.3,8,s.panelCutaway,.6,-.42,1.1+.08+Le);g.add(st,oi,hi)})}function O(g,X){if(X==="tks"){N(g);return}if(X==="thks"){z(g);return}if(X==="rooftop"){J(g);return}let V=X==="thks",re=X==="thrv-dx",ue=X==="hrv",Z=X==="rooftop",Pe=ue?4.8:Z?6.2:7.6,Se=ue?1.9:2.6,we=ue?1.8:2,be=Pe/2,Oe=Se/2,et=we/2,Pt=.22,Ut=-Oe-Pt/2,bt=o(Pe+.3,Pt,.12,s.baseSkid,0,Ut,et-.06),gi=o(Pe+.3,Pt,.12,s.baseSkid,0,Ut,-et+.06);g.add(bt,gi),[-be,-be*.5,0,be*.5,be].forEach(w=>{g.add(o(.12,Pt,we-.24,s.baseSkid,w,Ut,0))});let De=.08,si=V?s.stainless:s.aluFrame;g.add(o(Pe,De,De,si,0,-Oe+De/2,et-De/2),o(Pe,De,De,si,0,-Oe+De/2,-et+De/2),o(Pe,De,De,si,0,Oe-De/2,et-De/2),o(Pe,De,De,si,0,Oe-De/2,-et+De/2));let Bt=V?s.stainless:s.galvSteel;g.add(o(Pe-.1,Se-.1,.05,s.panelSolid,0,0,-et+.04),o(Pe-.1,.05,we-.1,s.panelSolid,0,Oe-.03,0),o(Pe-.1,.05,we-.1,Bt,0,-Oe+.03,0),o(.05,Se-.1,we-.1,s.panelSolid,be-.03,0,0));let $t=ue?3:4,x=(Pe-.2)/$t;for(let w=0;w<$t;w++){let I=-be+.1+(w+.5)*x,D=o(x-.04,Se-.18,.03,s.panelCutaway,I,0,et-.02,!1,!1);g.add(D),A.push(D),g.add(o(.04,.12,.04,s.doorHandle,I+x*.4,0,et+.01)),g.add(p(.11,.11,.04,16,s.aluFrame,I,.2,et,Math.PI/2))}if(ue){let w=o(1.5,1.4,we-.35,s.aluFrame,0,0,0);w.rotation.z=Math.PI/4,g.add(w),[-1.4,1.4].forEach((I,D)=>{let B=D===0?-.35:.35,$=p(.35,.35,.25,20,s.fanHousing,I,B,0,0,Math.PI/2);g.add($),b.push(()=>{$.rotation.x+=.1})}),[-1.9,1.9].forEach(I=>{g.add(o(.06,Se-.4,we-.4,s.filterCloth,I,0,0))}),[[-be-.1,.4],[be+.1,-.4]].forEach(([I,D])=>{g.add(p(.32,.32,.22,24,s.galvSteel,I,D,0,0,Math.PI/2,!0))})}else if(Z){[-1.2,1.2].forEach(I=>{let D=p(.55,.55,.18,24,s.motorCast,I,Oe+.09,0,0,0,!0),B=p(.48,.48,.04,4,s.fanImpeller,I,Oe+.12,0);g.add(D,B),b.push(()=>{B.rotation.y+=.15})}),[-1.8,-1].forEach(I=>{let D=p(.2,.2,.7,16,s.motorCast,I,-Oe+.5,-et+.5);g.add(D)});let w=p(.45,.45,.35,20,s.fanHousing,1.8,-.2,0,0,Math.PI/2);g.add(w),b.push(()=>{w.rotation.x+=.12}),g.add(o(.3,Se-.5,we-.4,s.coolingFin,.5,-.1,0))}else{let w=new Kt;w.position.set(0,0,0),g.add(w);let I=p(1.05,1.05,.28,32,s.aluFrame,0,0,0,0,Math.PI/2),D=p(1.01,1.01,.26,28,s.rotorWheel,0,0,0,0,Math.PI/2);w.add(I,D);for(let ee=0;ee<12;ee++){let de=ee/12*Math.PI*2,ce=o(.03,1.98,.02,s.aluFrame,0,0,0);ce.rotation.x=de,w.add(ce)}b.push(()=>{w.rotation.x+=.008});let B=p(.42,.42,.35,24,s.fanHousing,2.8,-Oe/2+.1,0,0,Math.PI/2),$=p(.36,.36,.3,24,s.fanHousing,-1.3,Oe/2-.05,0,0,Math.PI/2);g.add(B,$),b.push(()=>{B.rotation.x+=.12,$.rotation.x+=.12}),g.add(o(.28,Oe-.3,we-.35,V?s.stainless:s.coolingFin,1.35,-Oe/2,0)),g.add(o(.22,Oe-.3,we-.35,s.heatingFin,1.85,-Oe/2,0)),g.add(o(.95,.08,we-.25,s.drainPan,1.6,-Oe+.12,0)),g.add(o(.06,Oe-.25,we-.3,V?s.stainless:s.aluFrame,-2.1,-Oe/2,0));for(let ee=0;ee<4;ee++){let de=-et+.25+(ee+.5)*((we-.4)/4),ce=new Jt(new La(.2,.75,4),s.filterCloth);ce.rotateZ(-Math.PI/2),ce.position.set(-1.7,-Oe/2,de),ce.scale.set(1,1.4,.8),g.add(ce)}if(V){g.add(o(.18,Oe-.3,we-.35,s.stainless,2.15,-Oe/2,0));let ee=p(.03,.03,we-.5,12,s.coolingFin,1.1,-Oe/2+.2,0,Math.PI/2);g.add(ee)}[-Oe/2,Oe/2].forEach(ee=>{g.add(o(.08,Oe-.25,we-.3,s.aluFrame,-be-.04,ee,0)),g.add(o(.14,.18,.12,s.actuatorOrange,-be-.04,ee,et+.05))}),re&&g.add(p(.2,.2,.65,16,s.motorCast,2.5,-Oe/2,-et+.5)),g.add(o(.32,.55,.18,s.motorCast,2.3,.35,et+.09))}}function H(g,X){if(X==="tdf"){g.add(o(3.2,.04,2,s.galvSteel,0,2/2,0),o(3.2,.04,2,s.galvSteel,0,-2/2,0),o(3.2,2,.04,s.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(Z=>{g.add(o(.08,.12,2+.2,s.aluFrame,Z,2/2+.04,0),o(.08,.12,2+.2,s.aluFrame,Z,-2/2-.04,0),o(.08,2,.12,s.aluFrame,Z,0,2/2+.04),o(.08,2,.12,s.aluFrame,Z,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(Pe=>{[-2/2-.04,2/2+.04].forEach(Se=>{g.add(o(.1,.14,.14,s.baseSkid,Z,Pe,Se))})})});let V=o(3.2-.1,2-.1,.03,s.panelCutaway,0,0,2/2,!1,!1);g.add(V),A.push(V),[-.8,.8].forEach(Z=>{g.add(o(.08,.12,.04,s.doorHandle,Z,2/2-.1,2/2+.02))});let re=p(.78,.78,.45,24,s.fanImpeller,0,0,0,0,Math.PI/2),ue=p(.28,.28,.35,16,s.motorCast,.25,0,0,0,Math.PI/2);g.add(re,ue),b.push(()=>{re.rotation.x+=.14}),g.add(o(.24,.18,.16,s.fanHousing,-.6,2/2+.1,.4))}else if(X==="yangin-fani"){let V=p(1.25,1.25,4.2,32,s.galvSteel,0,0,0,0,Math.PI/2,!0);g.add(V),[-4.2/2,4.2/2].forEach(Se=>{let we=p(1.43,1.43,.06,32,s.baseSkid,Se,0,0,0,Math.PI/2,!0);g.add(we);for(let be=0;be<12;be++){let Oe=be/12*Math.PI*2;g.add(o(.08,.04,.04,s.doorHandle,Se,Math.sin(Oe)*(1.25+.09),Math.cos(Oe)*(1.25+.09)))}});let re=p(.46,.46,2,24,s.motorCast,.1,0,0,0,Math.PI/2),ue=new Jt(new La(.46,.6,20),s.motorCast);ue.rotateZ(-Math.PI/2),ue.position.set(-1.2,0,0),g.add(re,ue);let Z=new Kt;Z.position.set(-.6,0,0),g.add(Z);let Pe=p(.48,.48,.2,20,s.fanImpeller,0,0,0,0,Math.PI/2);Z.add(Pe);for(let Se=0;Se<8;Se++){let we=Se/8*Math.PI*2,be=o(.04,.7,.16,s.fanImpeller,0,Math.sin(we)*.78,Math.cos(we)*.78);be.rotation.x=we+.35,Z.add(be)}b.push(()=>{Z.rotation.x+=.15});for(let Se=0;Se<4;Se++){let we=Se/4*Math.PI*2,be=o(.03,1.25-.46,.1,s.baseSkid,.4,Math.sin(we)*(1.25+.46)/2,Math.cos(we)*(1.25+.46)/2);be.rotation.x=we,g.add(be)}g.add(o(2.8,.12,.35,s.baseSkid,0,-1.25-.1,.9),o(2.8,.12,.35,s.baseSkid,0,-1.25-.1,-.9)),g.add(o(.24,.24,.16,s.actuatorOrange,0,1.25+.1,0))}else{let V=p(.62,.62,5.2,28,s.galvSteel,0,0,0,0,Math.PI/2,!0);g.add(V),[-1.7,1.7].forEach(Z=>{g.add(p(.62+.12,.62+.12,1.5,28,s.aluFrame,Z,0,0,0,Math.PI/2,!0))});let re=p(.28,.28,1.2,16,s.motorCast,0,0,0,0,Math.PI/2),ue=p(.62-.05,.62-.05,.12,8,s.fanImpeller,0,0,0,0,Math.PI/2);g.add(re,ue),b.push(()=>{ue.rotation.x+=.16});for(let Z=-.3;Z<=.3;Z+=.2){let Pe=o(.08,.04,.8,s.damperBlade,2.62,Z,0);Pe.rotation.z=-.2,g.add(Pe)}[-5.2/2-.02,5.2/2+.02].forEach(Z=>{g.add(p(.62+.02,.62+.02,.04,16,s.aluFrame,Z,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(Z=>{g.add(o(.08,.55,.25,s.baseSkid,Z,.62+.35,0))})}}function ae(g){let X=o(3,.03,1.3,s.galvSteel,-1.1,.45,0),V=o(3,.03,1.3,s.galvSteel,-1.1,-.45,0),re=o(3,.9,.03,s.galvSteel,-1.1,0,-.65);g.add(X,V,re);let ue=.6,Z=o(ue,.9,.03,s.galvSteel,-2.6+ue/2,0,.65),Pe=o(ue,.9,.03,s.galvSteel,.4-ue/2,0,.65),Se=3-2*ue,we=o(Se,.9-.08,.03,s.panelCutaway,-1.1,0,.65,!1,!1);g.add(Z,Pe,we),W(we,s.galvSteel,s.panelCutaway),[-2.1,-1.6,-1.1,-.6,-.1].forEach(Fe=>{let ge=o(.04,.025,1.22,s.aluFrame,Fe,.47000000000000003,0),dt=o(.04,.025,1.3-.08,s.aluFrame,Fe,-.45-.02,0);g.add(ge,dt)}),[[-1.85,-1.35],[-1.35,-.85],[-.85,-.35]].forEach(([Fe,ge])=>{let dt=(Fe+ge)/2,Tt=o(.015,.015,1.3-.12,s.aluFrame,dt,.45+.015,0);Tt.rotation.y=.35;let rt=o(.015,.015,1.3-.12,s.aluFrame,dt,.45+.015,0);rt.rotation.y=-.35,g.add(Tt,rt)});let be=.035,Oe=o(3,be,be,s.aluFrame,-1.1,.45+be/2,.65+be/2),et=o(3,be,be,s.aluFrame,-1.1,.45+be/2,-.65-be/2),Pt=o(3,be,be,s.aluFrame,-1.1,-.45-be/2,.65+be/2),Ut=o(3,be,be,s.aluFrame,-1.1,-.45-be/2,-.65-be/2);g.add(Oe,et,Pt,Ut);let bt=o(3,.012,.012,s.rubberBlack,-1.1,.45,.65);g.add(bt);let gi=o(Se-.05,.9-.12,.06,s.motorCast,-1.1,0,-.65+.05),De=o(Se-.05,.06,1.3-.12,s.motorCast,-1.1,-.45+.05,0);g.add(gi,De);let si=o(Se-.06,.9-.14,.015,s.galvSteel,-1.1,0,-.65+.08),Bt=o(Se-.06,.015,1.3-.14,s.galvSteel,-1.1,-.45+.08,0);g.add(si,Bt);for(let Fe=-1.1-.6;Fe<=-1.1+.6;Fe+=.4)for(let ge=-.25;ge<=.25;ge+=.25){let dt=p(.005,.005,.08,8,s.copperPipe,Fe,ge,-.6,Math.PI/2),Tt=p(.03,.03,.005,12,s.aluFrame,Fe,ge,-.65+.09,Math.PI/2);g.add(dt,Tt)}let $t=-2.1,x=p(.24,.24,.04,24,s.aluFrame,$t,0,.65+.02,Math.PI/2),w=p(.22,.22,.05,24,s.galvSteel,$t,0,.65+.03,Math.PI/2);g.add(x,w),[-.1,.1].forEach(Fe=>{let ge=o(.04,.08,.05,s.doorHandle,$t+Fe,0,.72);g.add(ge)}),j(g,-2.6,.9,1.3,s),_e(g,.4,.9,1.3,s);let I=1.35,D=1.8,B=o(D,.03,1.3,s.galvSteel,I,.45,0),$=o(D,.03,1.3,s.galvSteel,I,-.45,0),ee=o(D,.9,.03,s.galvSteel,I,0,-.65);g.add(B,$,ee);let de=o(.4,.9,.03,s.galvSteel,.6,0,.65),ce=o(.4,.9,.03,s.galvSteel,2.05,0,.65),Ae=o(1.05,.9-.08,.03,s.panelCutaway,1.32,0,.65,!1,!1);g.add(de,ce,Ae),W(Ae,s.galvSteel,s.panelCutaway);for(let Fe=0;Fe<4;Fe++){let ge=.9+Fe*.28,dt=new Kt;dt.position.set(ge,0,-.15+Fe*.1);let Tt=p(.35,.35,.9-.14,16,s.aluFrame,0,0,0,0,0,!0);Tt.scale.set(.25,1,.55),dt.add(Tt);let rt=o(.04,.02,.18,s.galvSteel,0,.45-.08,0),Yt=o(.04,.02,.18,s.galvSteel,0,-.45+.08,0);dt.add(rt,Yt),g.add(dt)}let We=.55,je=.45,xe=.45,at=o(We,je,xe,s.galvSteel,1.35,.15,-.65-xe/2),ft=o(We+.1,je+.1,.04,s.aluFrame,1.35,.15,-.65-xe);g.add(at,ft),j(g,2.24,.9,1.3,s),[-1.8,1].forEach(Fe=>{let ge=o(.06,.05,1.65,s.baseSkid,Fe,-.49,0),dt=o(.06,.015,.15,s.rubberBlack,Fe,-.45-.01,.65-.1),Tt=o(.06,.015,.15,s.rubberBlack,Fe,-.45-.01,-.65+.1);g.add(ge,dt,Tt),[-1.65/2+.04,1.65/2-.04].forEach(rt=>{let Yt=p(.012,.012,1.35,10,s.stainless,Fe,.20500000000000004,rt),jt=p(.024,.024,.03,6,s.aluFrame,Fe,-.45-.07,rt),Nt=p(.024,.024,.03,6,s.aluFrame,Fe,-.45+1.35-.04,rt);g.add(Yt,jt,Nt)})}),[-.5,-.3].forEach(Fe=>{let ge=p(.018,.018,.04,12,s.brassGold,Fe,.47000000000000003,.2);g.add(ge)});let vt=o(.22,.14,.01,s.aluFrame,-.4,.15,.65+.02),mt=o(.18,.1,.012,s.touchscreen,-.4,.15,.65+.022);g.add(vt,mt)}function j(g,X,V,re,ue){let Z=o(.04,.06,re+.14,ue.aluFrame,X,V/2+.03,0),Pe=o(.04,.06,re+.14,ue.aluFrame,X,-V/2-.06/2,0),Se=o(.04,V+.14,.06,ue.aluFrame,X,0,re/2+.06/2),we=o(.04,V+.14,.06,ue.aluFrame,X,0,-re/2-.06/2);g.add(Z,Pe,Se,we),[[V/2+.06/2,re/2+.06/2],[V/2+.06/2,-re/2-.06/2],[-V/2-.06/2,re/2+.06/2],[-V/2-.06/2,-re/2-.06/2]].forEach(([be,Oe])=>{let et=o(.05,.09,.09,ue.galvSteel,X,be,Oe),Pt=p(.012,.012,.04+.02,8,ue.doorHandle,X,be,Oe,0,Math.PI/2);g.add(et,Pt)})}function _e(g,X,V,re,ue){j(g,X-.025,V,re,ue),j(g,X+.025,V,re,ue);let Z=o(.015,V+.08,re+.08,ue.rubberBlack,X,0,0);g.add(Z),[[V/2+.03,re/2+.03],[V/2+.03,-re/2-.03],[-V/2-.03,re/2+.03],[-V/2-.03,-re/2-.03]].forEach(([Pe,Se])=>{let we=p(.014,.014,.12,10,ue.stainless,X,Pe,Se,0,Math.PI/2),be=p(.022,.022,.03,6,ue.doorHandle,X+.05,Pe,Se,0,Math.PI/2);g.add(we,be)}),[[V/2+.05,0],[-V/2-.05,0],[0,re/2+.05],[0,-re/2-.05]].forEach(([Pe,Se])=>{let we=o(.08,.04,.04,ue.doorHandle,X,Pe,Se),be=p(.01,.01,.06,8,ue.stainless,X,Pe+(Pe!==0?Math.sign(Pe)*.025:0),Se+(Se!==0?Math.sign(Se)*.025:0));g.add(we,be)})}function K(g){let X=p(.75,.75,1.8,36,s.stainless,-1.5,0,0,0,Math.PI/2,!0);g.add(X);let V=1.8,re=p(.75,.75,V,36,s.stainless,2.4-V/2,0,0,0,Math.PI/2,!0);g.add(re);let ue=1.2,Z=p(.75,.75,ue,28,s.stainless,0,0,0,0,Math.PI/2,!0,Math.PI/3,4*Math.PI/3);g.add(Z);let Pe=p(.75+.002,.75+.002,ue,24,s.panelCutaway,0,0,0,0,Math.PI/2,!0,-Math.PI/3,2*Math.PI/3);g.add(Pe),W(Pe,s.stainless,s.panelCutaway);let Se=o(ue,.02,.45,s.stainless,0,-.75+.03,0),we=o(.015,.35,.7,s.stainless,0,-.75+.2,0);g.add(Se,we),[-.58,.58].forEach($=>{let ee=p(.745,.745,.02,32,s.aluFrame,$,0,0,0,Math.PI/2,!0);g.add(ee)});let be=o(4.8-.2,.02,.5,s.stainless,0,-.75+.02,0);g.add(be);let Oe=o(4.8-.02,.02,.035,s.aluFrame,0,.75+.009,0);g.add(Oe);for(let $=-2.4+.2;$<=2.4-.2;$+=.25){let ee=o(.015,.024,.042,s.stainless,$,.761,0);g.add(ee)}[-2.4+.06,2.4-.06].forEach($=>{let ee=p(.762,.762,.03,32,s.aluFrame,$,0,0,0,Math.PI/2,!0);g.add(ee)}),[-2.4,2.4].forEach($=>{let ee=p(.9299999999999999,.9299999999999999,.08,36,s.stainless,$,0,0,0,Math.PI/2,!0),de=p(.75+.18,.75-.02,.06,36,s.aluFrame,$,0,0,0,Math.PI/2);g.add(ee,de);let ce=p(.75+.12,.75,.02,32,s.rubberBlack,$+($<0?-.045:.045),0,0,0,Math.PI/2);g.add(ce);for(let Ae=0;Ae<12;Ae++){let We=Ae/12*Math.PI*2,je=Math.sin(We)*(.75+.09),xe=Math.cos(We)*(.75+.09),at=p(.014,.014,.12,10,s.stainless,$,je,xe,0,Math.PI/2),ft=p(.022,.022,.035,6,s.doorHandle,$+($<0?.05:-.05),je,xe,0,Math.PI/2);g.add(at,ft)}});let et=-1.2,Pt=p(.05,.05,.08,16,s.stainless,et,-.75-.04,0),Ut=p(.03,.03,.08,14,s.stainless,et,-.75-.11,0),bt=o(.09,.09,.08,s.brassGold,et,-.75-.18,0),gi=p(.015,.015,.06,10,s.stainless,et,-.75-.18,.06,Math.PI/2,0),De=o(.18,.025,.015,s.heatingFin,et+.08,-.75-.18,.09),si=p(.025,.025,.06,12,s.brassGold,et,-.75-.25,0);g.add(Pt,Ut,bt,gi,De,si);let Bt=1.3,$t=p(.28,.28,.05,24,s.aluFrame,Bt,0,.75+.02,Math.PI/2),x=p(.25,.25,.06,24,s.stainless,Bt,0,.75+.03,Math.PI/2),w=p(.26,.26,.02,24,s.rubberBlack,Bt,0,.75+.01,Math.PI/2);g.add($t,x,w),[-.11,.11].forEach($=>{let ee=p(.01,.01,.06,8,s.stainless,Bt+$,0,.81,Math.PI/2),de=p(.045,.045,.03,12,s.doorHandle,Bt+$,0,.75+.08,Math.PI/2);g.add(ee,de)});let I=p(.004,.004,.25,6,s.aluFrame,Bt,-.16,.75+.03);g.add(I),[-1.8,1.7].forEach($=>{let ee=p(.81,.81,.08,36,s.baseSkid,$,0,0,0,Math.PI/2,!0),de=o(.08,.08,.04,s.baseSkid,$,.75+.06,0),ce=o(.08,.08,.04,s.baseSkid,$,-.75-.06,0);g.add(ee,de,ce);let Ae=.75,We=p(.012,.012,Ae,10,s.stainless,$,.75+.06+Ae/2,0),je=p(.025,.025,.035,6,s.aluFrame,$,.75+.1,0);g.add(We,je)});let D=o(.2,.12,.01,s.aluFrame,-1.2,.2,.75+.02),B=o(.16,.08,.012,s.touchscreen,-1.2,.2,.75+.022);g.add(D,B)}function Q(g){let X=p(.75,.75,1.8,36,s.galvSteel,-1.5,0,0,0,Math.PI/2,!0);g.add(X);let V=p(.75,.75,.6,36,s.galvSteel,.9,0,0,0,Math.PI/2,!0);g.add(V);let re=1.2,ue=p(.75,.75,re,28,s.galvSteel,0,0,0,0,Math.PI/2,!0,Math.PI/3,4*Math.PI/3);g.add(ue);let Z=p(.75+.002,.75+.002,re,24,s.panelCutaway,0,0,0,0,Math.PI/2,!0,-Math.PI/3,2*Math.PI/3);g.add(Z),W(Z,s.galvSteel,s.panelCutaway),[-2.2,-1.75,-1.3,-.85,-.4,.05,.5,.95].forEach(ee=>{let de=p(.766,.766,.038,36,s.aluFrame,ee,0,0,0,Math.PI/2,!0),ce=p(.75+.024,.75+.024,.014,36,s.galvSteel,ee+.008,0,0,0,Math.PI/2,!0);g.add(de,ce)});let Pe=p(.75+.02,.75+.02,.22,36,s.aluFrame,1.31,0,0,0,Math.PI/2,!0),Se=p(.75+.038,.75+.038,.035,36,s.galvSteel,1.21,0,0,0,Math.PI/2,!0);g.add(Pe,Se);let we=p(.75+.032,.75+.032,.028,36,s.rubberBlack,1.33,0,0,0,Math.PI/2,!0),be=p(.75+.032,.75+.032,.028,36,s.rubberBlack,1.39,0,0,0,Math.PI/2,!0);g.add(we,be);for(let ee=0;ee<8;ee++){let de=ee/8*Math.PI*2,ce=Math.sin(de)*(.75+.028),Ae=Math.cos(de)*(.75+.028),We=p(.009,.009,.025,8,s.stainless,1.36,ce,Ae,0,Math.PI/2);g.add(We)}[{cx:1.6,cy:.12,rotZ:.19},{cx:1.88,cy:.42,rotZ:.58},{cx:2.05,cy:.82,rotZ:.98},{cx:2.12,cy:1.28,rotZ:1.37}].forEach(ee=>{let de=p(.745,.745,.46,28,s.galvSteel,ee.cx,ee.cy,0,0,Math.PI/2-ee.rotZ,!0),ce=p(.75+.018,.75+.018,.025,28,s.aluFrame,ee.cx,ee.cy,0,0,Math.PI/2-ee.rotZ,!0);g.add(de,ce)});let Oe=p(.75-.005,.75-.005,.45,32,s.galvSteel,2.15,1.7,0,0,0,!0),et=p(.75+.018,.75+.018,.03,32,s.aluFrame,2.15,1.92,0,0,0,!0);g.add(Oe,et);let Pt=o(.02,.45,.8,s.aluFrame,1.25,.1,0);g.add(Pt);let Ut=p(.75+.018,.75+.018,.22,36,s.motorTeal,-2.25,0,0,0,Math.PI/2,!0),bt=p(.75+.025,.75+.025,.02,36,s.aluFrame,-2.36,0,0,0,Math.PI/2,!0),gi=p(.75+.025,.75+.025,.02,36,s.aluFrame,-2.14,0,0,0,Math.PI/2,!0);g.add(Ut,bt,gi);let De=o(.24,.15,.01,s.aluFrame,-1.2,.25,.75+.02),si=o(.2,.11,.012,s.touchscreen,-1.2,.25,.75+.022);g.add(De,si);let Bt=-1.2,$t=p(.75+.05,.75+.05,.08,36,s.baseSkid,Bt,0,0,0,Math.PI/2,!0),x=p(.75+.022,.75+.022,.07,36,s.rubberBlack,Bt,0,0,0,Math.PI/2,!0),w=o(.08,.08,.05,s.baseSkid,Bt,.75+.05,0),I=o(.08,.08,.05,s.baseSkid,Bt,-.75-.05,0);g.add($t,x,w,I);let D=.75,B=p(.012,.012,D,10,s.stainless,Bt,.75+.05+D/2,0),$=p(.025,.025,.035,6,s.aluFrame,Bt,.75+.09,0);g.add(B,$)}function ne(g,X){if(X==="menfez"){g.add(o(.24,.14,3.4+.2,s.aluFrame,0,2.2/2+.05,0),o(.24,.14,3.4+.2,s.aluFrame,0,-2.2/2-.05,0),o(.24,2.2,.14,s.aluFrame,0,0,3.4/2+.05),o(.24,2.2,.14,s.aluFrame,0,0,-3.4/2-.05));for(let V=-2.2/2+.2;V<=2.2/2-.15;V+=.24){let re=o(.08,.02,3.3,s.damperBlade,.09,V,0);re.rotation.z=.22,g.add(re)}for(let V=-3.4/2+.25;V<=3.4/2-.2;V+=.28){let re=o(.06,2.1500000000000004,.02,s.damperBlade,0,0,V);re.rotation.y=.2,g.add(re)}g.add(o(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,2.2/2-.04,0),o(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,-2.2/2+.04,0)),g.add(o(.08,.12,.08,s.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(X==="difuzor"){g.add(o(3.4,.03,1.5,s.galvSteel,0,1.3/2+.3,0),o(3.4,1.3,.03,s.galvSteel,0,.3,-1.5/2),o(3.4,1.3,.03,s.galvSteel,0,.3,1.5/2)),g.add(p(.42,.42,.35,24,s.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),g.add(o(3.4+.2,.06,1.5+.2,s.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(re=>{g.add(o(3.4-.1,.04,.06,s.doorHandle,0,-1.3/2+.26,re))});let V=o(1.8,.04,1.8,s.panelSolid,0,-1,0);g.add(V);for(let re=0;re<16;re++){let ue=re/16*Math.PI*2,Z=o(.03,.02,.36,s.doorHandle,Math.sin(ue)*.55,-.98,Math.cos(ue)*.55);Z.rotation.y=ue+.5,g.add(Z)}}else{g.add(o(1.4,.04,2.4,s.galvSteel,0,2.2/2,0),o(1.4,.04,2.4,s.galvSteel,0,-2.2/2,0),o(1.4,2.2,.04,s.galvSteel,0,0,-2.4/2),o(1.4,2.2,.04,s.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(re=>{g.add(o(.08,.14,2.4+.2,s.aluFrame,re,2.2/2+.05,0),o(.08,.14,2.4+.2,s.aluFrame,re,-2.2/2-.05,0),o(.08,2.2,.14,s.aluFrame,re,0,2.4/2+.05),o(.08,2.2,.14,s.aluFrame,re,0,-2.4/2-.05))});for(let re=-2.2/2+.35;re<=2.2/2-.25;re+=.5){let ue=o(.35,.04,2.28,s.damperBlade,0,re,0);ue.rotation.z=.35,g.add(ue)}g.add(o(.03,2.2-.4,.03,s.brassGold,.15,0,2.4/2-.08));let V=o(.22,.34,.18,s.actuatorOrange,.1,.2,2.4/2+.14);g.add(V),g.add(p(.025,.025,.15,12,s.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),g.add(p(.03,.03,.12,12,s.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function Qe(g){g.add(o(4.4,.04,2.2,s.galvSteel,0,2.4/2,0),o(4.4,.04,2.2,s.galvSteel,0,-2.4/2,0),o(4.4,2.4,.04,s.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(Se=>{g.add(o(.08,.12,2.2+.2,s.aluFrame,Se,2.4/2+.04,0),o(.08,.12,2.2+.2,s.aluFrame,Se,-2.4/2-.04,0),o(.08,2.4,.12,s.aluFrame,Se,0,2.2/2+.04),o(.08,2.4,.12,s.aluFrame,Se,0,-2.2/2-.04))});let X=o(4.4-.1,2.4-.1,.03,s.panelCutaway,0,0,2.2/2,!1,!1);g.add(X),A.push(X);let V=o(.12,2.4-.2,2.2-.2,s.aluFrame,-1.4,0,0),re=o(.1,2.4-.25,2.2-.25,s.filterCloth,-1.4,0,0);g.add(V,re),g.add(o(.1,2.4-.2,2.2-.2,s.aluFrame,-.2,0,0));for(let Se=0;Se<4;Se++){let we=-.7+Se*.46,be=new Jt(new La(.2,1.1,4),s.filterCloth);be.rotateZ(-Math.PI/2),be.position.set(.4,0,we),be.scale.set(1,1.3,.75),g.add(be)}let ue=o(.25,2.4-.2,2.2-.2,s.aluFrame,1.4,0,0),Z=o(.22,2.4-.26,2.2-.26,s.filterCloth,1.4,0,0),Pe=o(.26,2.4-.18,.04,s.coolingFin,1.4,0,2.2/2-.1);g.add(ue,Z,Pe),[-1,.6].forEach(Se=>{g.add(p(.09,.09,.04,16,s.aluFrame,Se,.6,2.2/2+.03,Math.PI/2))})}function ze(g,X){if(X==="vrf-dis"){g.add(o(3.2,3.6,.04,s.panelSolid,0,0,-2/2),o(3.2,.04,2,s.panelSolid,0,3.6/2,0),o(3.2,.12,2,s.baseSkid,0,-3.6/2,0),o(.04,3.6-.2,2-.1,s.coolingFin,-3.2/2,.05,0),o(.04,3.6-.2,2-.1,s.coolingFin,3.2/2,.05,0));let V=o(3.2-.1,3.6-.2,.03,s.panelCutaway,0,.05,2/2,!1,!1);g.add(V),A.push(V);let re=p(.82,.82,.22,28,s.fanHousing,0,3.6/2+.11,0,0,0,!0),ue=p(.72,.72,.05,4,s.fanImpeller,0,3.6/2+.14,0);g.add(re,ue),b.push(()=>{ue.rotation.y+=.16}),[-.6,.6].forEach(Z=>{g.add(p(.26,.26,.9,16,s.motorCast,Z,-3.6/2+.6,-.2))}),g.add(p(.22,.22,1.1,16,s.motorCast,-1.1,-3.6/2+.7,.2)),g.add(o(3.2-.2,2.6,.1,s.coolingFin,0,.2,-2/2+.08)),g.add(o(.22,.18,.14,s.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(X==="vrf-ic"){let V=new Kt;V.rotation.x=-Math.PI+.55,g.add(V);let re=o(2.8,.8,2.8,s.galvSteel,0,.5,0),ue=o(3.2,.08,3.2,s.panelSolid,0,.05,0);V.add(re,ue);let Z=o(1.6,.02,1.6,s.filterCloth,0,.02,0);V.add(Z),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([Se,we,be])=>{let Oe=o(1.7,.03,.16,s.doorHandle,Se,.01,we);Oe.rotation.y=be,V.add(Oe)});let Pe=p(.65,.65,.35,20,s.fanImpeller,0,.5,0);V.add(Pe),b.push(()=>{Pe.rotation.y+=.14}),V.add(o(.18,.22,.18,s.actuatorOrange,1.3,.5,.8)),V.add(p(.04,.04,.3,12,s.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let V=o(4.6,.04,2,s.stainless,0,.8,-.3),re=o(4.6,1.6,.04,s.stainless,0,0,-2.6/2),ue=o(.04,1.6,2.6,s.stainless,-4.6/2,0,0),Z=o(.04,1.6,2.6,s.stainless,4.6/2,0,0),Pe=o(4.6,.9,.04,s.stainless,0,.25,2.6/2-.2);Pe.rotation.x=.5,g.add(V,re,ue,Z,Pe),g.add(p(.55,.55,.3,24,s.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let Se=-4.6/2+.6;Se<=4.6/2-.6;Se+=.75){let we=o(.68,.04,1.3,s.aluFrame,Se,-.2,.1);we.rotation.x=-.4,g.add(we)}g.add(p(.1,.08,.18,16,s.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),g.add(p(.02,.02,4.6-.6,12,s.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(Se=>{let we=p(.035,.02,.09,10,s.brassGold,Se,-.12,.85);g.add(we)}),g.add(o(.14,.2,.08,s.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}i==="tks"?N(R):i==="thks"?z(R):i==="rooftop"?J(R):i==="galvaniz-kanal"?ae(R):i==="paslanmaz-kanal"?K(R):i==="spiral-kanal"?Q(R):["thrv-dx","hrv"].includes(i)?O(R,i):["tdf","yangin-fani","jet-fan"].includes(i)?H(R,i):["menfez","difuzor","damper"].includes(i)?ne(R,i):i==="filtre"?Qe(R):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?ze(R,i):N(R),R.updateMatrixWorld(!0);let Ct=new ma().setFromObject(R),Ge=Ct.getSize(new k),Y=Ct.getCenter(new k);R.position.sub(Y);let he=-Ge.y/2;C.position.y=he-.05,G.position.y=he-.04;let fe=Math.max(Ge.x,Ge.y,Ge.z),He=h.fov*(Math.PI/180),Ve=Math.abs(fe/2/Math.tan(He/2))*1.05;Ve=Math.max(Ve,3.8);let Re=new k(Ve*.72,Ve*.38,Ve*.74),yt=new k(0,0,0);h.position.copy(Re),h.lookAt(yt),c.target.copy(yt),c.update();let pt=null;function Je(g,X,V=650){let re=h.position.clone(),ue=c.target.clone(),Z=performance.now();pt={update:Pe=>{let Se=Pe-Z,we=Math.min(1,Se/V),be=we*we*(3-2*we);h.position.lerpVectors(re,g,be),c.target.lerpVectors(ue,X,be),c.update(),we>=1&&(pt=null)}}}let Ft=new Kt;a.add(Ft);let Gt=80,di=[],It=new Float32Array(Gt*3),Ht=new Float32Array(Gt*3),Vt=i==="tks",Wt=i==="thks",L=i==="rooftop",ni=i==="galvaniz-kanal",_t=i==="paslanmaz-kanal",Dt=i==="spiral-kanal",E=Vt||Wt,S=Math.max(2,Ge.x/2+.4),P=Math.max(1,Ge.y*.45),q=Math.max(1,Ge.z*.45);for(let g=0;g<Gt;g++){let X=E?g<Gt*.7:L?g<Gt*.6:g<Gt*.65;di.push({isSupply:X,progress:Math.random(),speed:(E?.006:ni||_t||Dt?.009:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(E?.35:P),offsetZ:(Math.random()-.5)*(E?.7:q)}),X?(Ht[g*3]=.02,Ht[g*3+1]=.65,Ht[g*3+2]=.98):(Ht[g*3]=.95,Ht[g*3+1]=.45,Ht[g*3+2]=.12)}let ie=new Ei;ie.setAttribute("position",new Ii(It,3)),ie.setAttribute("color",new Ii(Ht,3));let me=document.createElement("canvas");me.width=32,me.height=32;let ve=me.getContext("2d"),F=ve.createRadialGradient(16,16,0,16,16,16);F.addColorStop(0,"rgba(255, 255, 255, 1)"),F.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),F.addColorStop(1,"rgba(0, 0, 0, 0)"),ve.fillStyle=F,ve.fillRect(0,0,32,32);let pe=new fl(me),Me=new bh({size:.15,map:pe,transparent:!0,opacity:.85,vertexColors:!0,blending:Rs,depthWrite:!1}),Ue=new _c(ie,Me);Ft.add(Ue),b.push(()=>{if(!lt.cfdEnabled){Ft.visible=!1;return}Ft.visible=!0;let g=ie.attributes.position.array;for(let X=0;X<Gt;X++){let V=di[X];if(V.progress+=V.speed,V.progress>1&&(V.progress=0),E)V.isSupply?(g[X*3]=-4.3+V.progress*8.6,g[X*3+1]=-.65+Math.sin(V.progress*Math.PI*4)*.08+V.offsetY,g[X*3+2]=V.offsetZ):(g[X*3]=1.2-V.progress*5.5,g[X*3+1]=.65+V.offsetY,g[X*3+2]=V.offsetZ);else if(L)if(V.isSupply){let re=-.4+V.progress*2.8;if(g[X*3]=re,V.progress>.8){let ue=(V.progress-.8)/.2;g[X*3+1]=.05-ue*1.35+V.offsetY*.4}else g[X*3+1]=.05+Math.sin(V.progress*Math.PI*3)*.06+V.offsetY*.6;g[X*3+2]=V.offsetZ*.7}else{let re=X%2===0?-2.2:-1.2;g[X*3]=re+Math.sin(X*1.5+V.progress*6.28)*.22,g[X*3+1]=-.2+V.progress*2.1,g[X*3+2]=Math.cos(X*1.5+V.progress*6.28)*.22}else if(ni){let re=-2.7+V.progress*5.1;g[X*3]=re,g[X*3+1]=Math.sin(V.progress*Math.PI*2+X)*.06+V.offsetY*.5,g[X*3+2]=V.progress>.7&&X%3===0?-.3-(V.progress-.7)*1.5:V.offsetZ*.75}else if(_t){let re=-2.5+V.progress*5;g[X*3]=re,g[X*3+1]=-Y.y+Math.sin(V.progress*Math.PI*2+X)*.035+V.offsetY*.22,g[X*3+2]=V.offsetZ*.45}else if(Dt)if(V.progress<.68){let re=V.progress/.68;g[X*3]=-2.5+re*3.7,g[X*3+1]=-Y.y+Math.sin(re*Math.PI*2+X)*.03+V.offsetY*.2,g[X*3+2]=V.offsetZ*.4}else{let re=(V.progress-.68)/.32*(Math.PI/2);g[X*3]=1.2+Math.sin(re)*.95,g[X*3+1]=-Y.y+(1-Math.cos(re))*1.7+V.offsetY*.15,g[X*3+2]=V.offsetZ*.35}else g[X*3]=-S+V.progress*(S*2),g[X*3+1]=(V.isSupply?-.2:.2)+V.offsetY,g[X*3+2]=V.offsetZ}ie.attributes.position.needsUpdate=!0});let le=new Kt;a.add(le);function Be(g){let X=document.createElement("canvas");X.width=64,X.height=64;let V=X.getContext("2d");V.fillStyle="#0284c7",V.beginPath(),V.arc(32,32,28,0,Math.PI*2),V.fill(),V.lineWidth=4,V.strokeStyle="#ffffff",V.stroke(),V.fillStyle="#ffffff",V.font="bold 26px sans-serif",V.textAlign="center",V.textBaseline="middle",V.fillText(g,32,33);let re=new fl(X);return re.minFilter=ci,re}let ke=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],Ye=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],xt=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],U=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],te=[[1.35,.15,.75],[.4,.52,.75],[-.8,.48,.75],[-1.6,.48,.75]],se=[[-1.2,-Y.y+.35,.85],[0,-Y.y+.82,0],[-1.2,-Y.y-.98,.2]],Ce=[[-.85,-Y.y+.82,0],[1.36,-Y.y+.85,0],[0,-Y.y+.15,.85],[-2.25,-Y.y+.82,0]],Ne=[];ke.forEach((g,X)=>{let V=new Kt,re,ue,Z;if(Vt&&Ye[X])[re,ue,Z]=Ye[X];else if(Wt&&xt[X])[re,ue,Z]=xt[X];else if(L&&U[X])[re,ue,Z]=U[X];else if(ni&&te[X])[re,ue,Z]=te[X];else if(_t&&se[X])[re,ue,Z]=se[X];else if(Dt&&Ce[X])[re,ue,Z]=Ce[X];else{let be=ke.length,Oe=Ge.z>Ge.x,et=Oe?Ge.z:Ge.x,Pt=-et/2+.4+X/Math.max(1,be-1)*(et-.8);re=Oe?Ge.x/2+.4:Pt,ue=X%2===0?-.2:.4,Z=Oe?Pt:Ge.z/2+.4}V.position.set(re,ue,Z);let Pe=new Jt(new _o(.012,.012,.25,8),new On({color:165063}));Pe.position.y=-.12;let Se=new Eh({map:Be(g.num||`0${X+1}`),depthTest:!1}),we=new cc(Se);we.scale.set(.42,.42,1),we.position.y=.05,we.userData={hotspot:g,pos:[re,ue,Z]},V.add(Pe,we),le.add(V),V.userData={hotspot:g,pos:[re,ue,Z]},Ne.push(we)});let oe=new Uc,Te=new Xe;function qe(g){let X=u.domElement.getBoundingClientRect();Te.x=(g.clientX-X.left)/X.width*2-1,Te.y=-((g.clientY-X.top)/X.height)*2+1,oe.setFromCamera(Te,h);let V=oe.intersectObjects(Ne,!0);if(V.length>0){let re=V[0].object;for(;re.parent&&!re.userData.hotspot;)re=re.parent;if(re&&re.userData.hotspot){showHotspotCard(re.userData.hotspot);let ue=re.userData.pos;if(ue){let Z=new k(ue[0],ue[1],ue[2]),Pe=new k(ue[0]*.8+1.2,ue[1]+.5,ue[2]+2.8);Je(Pe,Z,700)}}}}u.domElement.addEventListener("click",qe);let lt={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};Kg(),Jg(t,r,{onToggleRotate:()=>{lt.autoRotate=!lt.autoRotate,c.autoRotate=lt.autoRotate,sr("btn-rotate",lt.autoRotate)},onToggleCfd:()=>{lt.cfdEnabled=!lt.cfdEnabled,sr("btn-cfd",lt.cfdEnabled)},onToggleCutaway:()=>{lt.cutawayEnabled=!lt.cutawayEnabled,A.forEach(g=>{let X=g.userData.solidMat||s.panelSolid,V=g.userData.cutawayMat||s.panelCutaway;g.material=lt.cutawayEnabled?V:X}),sr("btn-cutaway",lt.cutawayEnabled)},onToggleView:()=>{let g=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),X=g&&window.getComputedStyle(g).display!=="none";g&&(X?(g.style.display="none",t.style.display="block",lt.viewMode="3d",sr("btn-view",!1),Ti()):(g.style.display="flex",t.style.display="none",lt.viewMode="2d",sr("btn-view",!0)))},onResetCamera:()=>{Je(Re,yt,650),window.closeHotspotCard()}}),sr("btn-rotate",lt.autoRotate),sr("btn-cfd",lt.cfdEnabled),sr("btn-cutaway",lt.cutawayEnabled),sr("btn-view",lt.viewMode==="2d");let Et=null;function yi(){Et=requestAnimationFrame(yi),pt?pt.update(performance.now()):c.update();for(let g=0;g<b.length;g++)b[g]();u.render(a,h)}yi();function Ti(){if(!t)return;let g=t.clientWidth,X=t.clientHeight||480;g>0&&X>0&&(h.aspect=g/X,h.updateProjectionMatrix(),u.setSize(g,X))}return window.addEventListener("resize",Ti),{destroy:()=>{cancelAnimationFrame(Et),window.removeEventListener("resize",Ti),u.dispose()}}}function Kg(){if(document.getElementById("sky-3d-hud-styles"))return;let e=document.createElement("style");e.id="sky-3d-hud-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function Jg(e,t,i){let r=e.closest(".sky-vlog-hero")||e.parentElement||e,a=r.querySelector(".sky-3d-hud-container");a&&a.remove(),a=document.createElement("div"),a.className="sky-3d-hud-container",a.innerHTML=`
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
  `,r.appendChild(n),document.getElementById("btn-rotate").addEventListener("click",i.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",i.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",i.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",i.onToggleView),document.getElementById("btn-reset").addEventListener("click",i.onResetCamera)}function sr(e,t){let i=document.getElementById(e);i&&(t?i.classList.add("active"):i.classList.remove("active"))}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Zl()):Zl();/*! Bundled license information:

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
