var Mo="186",ia={ROTATE:0,DOLLY:1,PAN:2},ea={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ru=0,Bo=1,au=2,Ua=1,nu=2,Da=3,Cr=0,yi=1,Dt=2,or=0,Na=1,Ts=2,zo=3,Ho=4,su=5,Jr=100,ou=101,lu=102,hu=103,uu=104,du=200,cu=201,pu=202,fu=203,ql=204,Zl=205,mu=206,gu=207,_u=208,vu=209,Mu=210,xu=211,Su=212,Eu=213,yu=214,ws=0,As=1,Rs=2,Fa=3,Cs=4,Ps=5,Is=6,Ds=7,Kl=0,bu=1,Tu=2,Yi=0,Jl=1,$l=2,Ql=3,xo=4,eh=5,th=6,ih=7,rh=300,Pr=301,ua=302,Vn=303,Wn=304,On=306,Ls=1e3,sr=1001,Us=1002,li=1003,wu=1004,Va=1005,hi=1006,Xn=1007,wr=1008,Ai=1009,ah=1010,nh=1011,Oa=1012,So=1013,qi=1014,Xi=1015,Zi=1016,Eo=1017,yo=1018,Ba=1020,sh=35902,oh=35899,lh=1021,hh=1022,Bi=1023,hr=1026,Ar=1027,uh=1028,bo=1029,Ir=1030,To=1031,wo=1033,xn=33776,Sn=33777,En=33778,yn=33779,Ns=35840,Fs=35841,Os=35842,Bs=35843,zs=36196,Hs=37492,Gs=37496,ks=37488,Vs=37489,Rn=37490,Ws=37491,Xs=37808,js=37809,Ys=37810,qs=37811,Zs=37812,Ks=37813,Js=37814,$s=37815,Qs=37816,eo=37817,to=37818,io=37819,ro=37820,ao=37821,no=36492,so=36494,oo=36495,lo=36283,ho=36284,Cn=36285,uo=36286,Au=3200,co=0,Ru=1,gr="",Pi="srgb",Pn="srgb-linear",In="linear",wt="srgb",jn=7680,Cu=519,Pu=512,Iu=513,Du=514,Ao=515,Lu=516,Uu=517,Ro=518,Nu=519,dh=35044,Go="300 es",ji=2e3,za=2001;function Fu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Dn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ou(){let e=Dn("canvas");return e.style.display="block",e}var ko={};function Ln(...e){let t="THREE."+e.shift();console.log(t,...e)}function ch(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ke(...e){e=ch(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Mt(...e){e=ch(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function ra(...e){let t=e.join(" ");t in ko||(ko[t]=!0,Ke(...e))}function Bu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var zu={[ws]:As,[Rs]:Is,[Cs]:Ds,[Fa]:Ps,[As]:ws,[Is]:Rs,[Ds]:Cs,[Ps]:Fa},Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bn=Math.PI/180,po=180/Math.PI;function _r(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pi[e&255]+pi[e>>8&255]+pi[e>>16&255]+pi[e>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]).toLowerCase()}function pt(e,t,i){return Math.max(t,Math.min(i,e))}function Hu(e,t){return(e%t+t)%t}function Yn(e,t,i){return(1-i)*e+i*t}function Wi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gu={DEG2RAD:bn},na,Xe=(na=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pt(this.x,t.x,i.x),this.y=pt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pt(this.x,t,i),this.y=pt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(pt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,l=this.y-t.y;return this.x=n*r-l*a+t.x,this.y=n*a+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},na.prototype.isVector2=!0,na),vr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,l){let h=i[r+0],u=i[r+1],d=i[r+2],m=i[r+3],v=a[n+0],c=a[n+1],M=a[n+2],E=a[n+3];if(m!==E||h!==v||u!==c||d!==M){let b=h*v+u*c+d*M+m*E;b<0&&(v=-v,c=-c,M=-M,E=-E,b=-b);let x=1-l;if(b<.9995){let f=Math.acos(b),C=Math.sin(f);x=Math.sin(x*f)/C,l=Math.sin(l*f)/C,h=h*x+v*l,u=u*x+c*l,d=d*x+M*l,m=m*x+E*l}else{h=h*x+v*l,u=u*x+c*l,d=d*x+M*l,m=m*x+E*l;let f=1/Math.sqrt(h*h+u*u+d*d+m*m);h*=f,u*=f,d*=f,m*=f}}e[t]=h,e[t+1]=u,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,a,n){let l=i[r],h=i[r+1],u=i[r+2],d=i[r+3],m=a[n],v=a[n+1],c=a[n+2],M=a[n+3];return e[t]=l*M+d*m+h*c-u*v,e[t+1]=h*M+d*v+u*m-l*c,e[t+2]=u*M+d*c+l*v-h*m,e[t+3]=d*M-l*m-h*v-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,l=Math.cos,h=Math.sin,u=l(i/2),d=l(r/2),m=l(a/2),v=h(i/2),c=h(r/2),M=h(a/2);switch(n){case"XYZ":this._x=v*d*m+u*c*M,this._y=u*c*m-v*d*M,this._z=u*d*M+v*c*m,this._w=u*d*m-v*c*M;break;case"YXZ":this._x=v*d*m+u*c*M,this._y=u*c*m-v*d*M,this._z=u*d*M-v*c*m,this._w=u*d*m+v*c*M;break;case"ZXY":this._x=v*d*m-u*c*M,this._y=u*c*m+v*d*M,this._z=u*d*M+v*c*m,this._w=u*d*m-v*c*M;break;case"ZYX":this._x=v*d*m-u*c*M,this._y=u*c*m+v*d*M,this._z=u*d*M-v*c*m,this._w=u*d*m+v*c*M;break;case"YZX":this._x=v*d*m+u*c*M,this._y=u*c*m+v*d*M,this._z=u*d*M-v*c*m,this._w=u*d*m-v*c*M;break;case"XZY":this._x=v*d*m-u*c*M,this._y=u*c*m-v*d*M,this._z=u*d*M+v*c*m,this._w=u*d*m+v*c*M;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],l=t[5],h=t[9],u=t[2],d=t[6],m=t[10],v=i+l+m;if(v>0){let c=.5/Math.sqrt(v+1);this._w=.25/c,this._x=(d-h)*c,this._y=(a-u)*c,this._z=(n-r)*c}else if(i>l&&i>m){let c=2*Math.sqrt(1+i-l-m);this._w=(d-h)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+u)/c}else if(l>m){let c=2*Math.sqrt(1+l-i-m);this._w=(a-u)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(h+d)/c}else{let c=2*Math.sqrt(1+m-i-l);this._w=(n-r)/c,this._x=(a+u)/c,this._y=(h+d)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,l=t._x,h=t._y,u=t._z,d=t._w;return this._x=i*d+n*l+r*u-a*h,this._y=r*d+n*h+a*l-i*u,this._z=a*d+n*u+i*h-r*l,this._w=n*d-i*l-r*h-a*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,a=-a,n=-n,l=-l);let h=1-t;if(l<.9995){let u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,t=Math.sin(t*u)/d,this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sa,z=(sa=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Vo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Vo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,l=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*l,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*l,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*l,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,l=t.y,h=t.z,u=t.w,d=2*(l*a-h*r),m=2*(h*i-n*a),v=2*(n*r-l*i);return this.x=i+u*d+l*v-h*m,this.y=r+u*m+h*d-n*v,this.z=a+u*v+n*m-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pt(this.x,t.x,i.x),this.y=pt(this.y,t.y,i.y),this.z=pt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pt(this.x,t,i),this.y=pt(this.y,t,i),this.z=pt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,l=i.x,h=i.y,u=i.z;return this.x=a*u-n*h,this.y=n*l-r*u,this.z=r*h-a*l,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return qn.copy(this).projectOnVector(t),this.sub(qn)}reflect(t){return this.sub(qn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(pt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa.prototype.isVector3=!0,sa),qn=new z,Vo=new vr,oa,st=(oa=class{constructor(t,i,r,a,n,l,h,u,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,l,h,u,d)}set(t,i,r,a,n,l,h,u,d){let m=this.elements;return m[0]=t,m[1]=a,m[2]=h,m[3]=i,m[4]=n,m[5]=u,m[6]=r,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,l=r[0],h=r[3],u=r[6],d=r[1],m=r[4],v=r[7],c=r[2],M=r[5],E=r[8],b=a[0],x=a[3],f=a[6],C=a[1],H=a[4],s=a[7],T=a[2],R=a[5],w=a[8];return n[0]=l*b+h*C+u*T,n[3]=l*x+h*H+u*R,n[6]=l*f+h*s+u*w,n[1]=d*b+m*C+v*T,n[4]=d*x+m*H+v*R,n[7]=d*f+m*s+v*w,n[2]=c*b+M*C+E*T,n[5]=c*x+M*H+E*R,n[8]=c*f+M*s+E*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],u=t[6],d=t[7],m=t[8];return i*l*m-i*h*d-r*n*m+r*h*u+a*n*d-a*l*u}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],u=t[6],d=t[7],m=t[8],v=m*l-h*d,c=h*u-m*n,M=d*n-l*u,E=i*v+r*c+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/E;return t[0]=v*b,t[1]=(a*d-m*r)*b,t[2]=(h*r-a*l)*b,t[3]=c*b,t[4]=(m*i-a*u)*b,t[5]=(a*n-h*i)*b,t[6]=M*b,t[7]=(r*u-d*i)*b,t[8]=(l*i-r*n)*b,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,l,h){let u=Math.cos(n),d=Math.sin(n);return this.set(r*u,r*d,-r*(u*l+d*h)+l+t,-a*d,a*u,-a*(-d*l+u*h)+h+i,0,0,1),this}scale(t,i){return ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zn.makeScale(t,i)),this}rotate(t){return ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zn.makeRotation(-t)),this}translate(t,i){return ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oa.prototype.isMatrix3=!0,oa),Zn=new st,Wo=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){let e={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(a,n,l){return this.enabled===!1||n===l||!n||!l||(this.spaces[n].transfer===wt&&(a.r=lr(a.r),a.g=lr(a.g),a.b=lr(a.b)),this.spaces[n].primaries!==this.spaces[l].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===wt&&(a.r=aa(a.r),a.g=aa(a.g),a.b=aa(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?In:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,l){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Pn]:{primaries:t,whitePoint:r,transfer:In,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:r,transfer:wt,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),e}var gt=ku();function lr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function aa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ur,Vu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=Dn("canvas")),Ur.width=e.width,Ur.height=e.height;let r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=lr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wu=0,Co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,l=r.length;n<l;n++)r[n].isDataTexture?a.push(Kn(r[n].image)):a.push(Kn(r[n]))}else a=Kn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Kn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Vu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Xu=0,Jn=new z,Li=class Tn extends Mr{constructor(t=Tn.DEFAULT_IMAGE,i=Tn.DEFAULT_MAPPING,r=sr,a=sr,n=hi,l=wr,h=Bi,u=Ai,d=Tn.DEFAULT_ANISOTROPY,m=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=_r(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=l,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jn).x}get height(){return this.source.getSize(Jn).y}get depth(){return this.source.getSize(Jn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ke(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ke(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case sr:t.x=t.x<0?0:1;break;case Us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case sr:t.y=t.y<0?0:1;break;case Us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Li.DEFAULT_IMAGE=null;Li.DEFAULT_MAPPING=rh;Li.DEFAULT_ANISOTROPY=1;var la,Wt=(la=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,l=t.elements;return this.x=l[0]*i+l[4]*r+l[8]*a+l[12]*n,this.y=l[1]*i+l[5]*r+l[9]*a+l[13]*n,this.z=l[2]*i+l[6]*r+l[10]*a+l[14]*n,this.w=l[3]*i+l[7]*r+l[11]*a+l[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,l=t.elements,h=l[0],u=l[4],d=l[8],m=l[1],v=l[5],c=l[9],M=l[2],E=l[6],b=l[10];if(Math.abs(u-m)<.01&&Math.abs(d-M)<.01&&Math.abs(c-E)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+M)<.1&&Math.abs(c+E)<.1&&Math.abs(h+v+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(h+1)/2,C=(v+1)/2,H=(b+1)/2,s=(u+m)/4,T=(d+M)/4,R=(c+E)/4;return f>C&&f>H?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=s/r,n=T/r):C>H?C<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(C),r=s/a,n=R/a):H<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(H),r=T/n,a=R/n),this.set(r,a,n,i),this}let x=Math.sqrt((E-c)*(E-c)+(d-M)*(d-M)+(m-u)*(m-u));return Math.abs(x)<.001&&(x=1),this.x=(E-c)/x,this.y=(d-M)/x,this.z=(m-u)/x,this.w=Math.acos((h+v+b-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pt(this.x,t.x,i.x),this.y=pt(this.y,t.y,i.y),this.z=pt(this.z,t.z,i.z),this.w=pt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pt(this.x,t,i),this.y=pt(this.y,t,i),this.z=pt(this.z,t,i),this.w=pt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la.prototype.isVector4=!0,la),ju=class extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Li(r),n=i.count;for(let l=0;l<n;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends ju{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ph=class extends Li{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yu=class extends Li{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Rr,Bt=(Rr=class{constructor(t,i,r,a,n,l,h,u,d,m,v,c,M,E,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,l,h,u,d,m,v,c,M,E,b,x)}set(t,i,r,a,n,l,h,u,d,m,v,c,M,E,b,x){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=l,f[9]=h,f[13]=u,f[2]=d,f[6]=m,f[10]=v,f[14]=c,f[3]=M,f[7]=E,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Nr.setFromMatrixColumn(t,0).length(),n=1/Nr.setFromMatrixColumn(t,1).length(),l=1/Nr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*l,i[9]=r[9]*l,i[10]=r[10]*l,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,l=Math.cos(r),h=Math.sin(r),u=Math.cos(a),d=Math.sin(a),m=Math.cos(n),v=Math.sin(n);if(t.order==="XYZ"){let c=l*m,M=l*v,E=h*m,b=h*v;i[0]=u*m,i[4]=-u*v,i[8]=d,i[1]=M+E*d,i[5]=c-b*d,i[9]=-h*u,i[2]=b-c*d,i[6]=E+M*d,i[10]=l*u}else if(t.order==="YXZ"){let c=u*m,M=u*v,E=d*m,b=d*v;i[0]=c+b*h,i[4]=E*h-M,i[8]=l*d,i[1]=l*v,i[5]=l*m,i[9]=-h,i[2]=M*h-E,i[6]=b+c*h,i[10]=l*u}else if(t.order==="ZXY"){let c=u*m,M=u*v,E=d*m,b=d*v;i[0]=c-b*h,i[4]=-l*v,i[8]=E+M*h,i[1]=M+E*h,i[5]=l*m,i[9]=b-c*h,i[2]=-l*d,i[6]=h,i[10]=l*u}else if(t.order==="ZYX"){let c=l*m,M=l*v,E=h*m,b=h*v;i[0]=u*m,i[4]=E*d-M,i[8]=c*d+b,i[1]=u*v,i[5]=b*d+c,i[9]=M*d-E,i[2]=-d,i[6]=h*u,i[10]=l*u}else if(t.order==="YZX"){let c=l*u,M=l*d,E=h*u,b=h*d;i[0]=u*m,i[4]=b-c*v,i[8]=E*v+M,i[1]=v,i[5]=l*m,i[9]=-h*m,i[2]=-d*m,i[6]=M*v+E,i[10]=c-b*v}else if(t.order==="XZY"){let c=l*u,M=l*d,E=h*u,b=h*d;i[0]=u*m,i[4]=-v,i[8]=d*m,i[1]=c*v+b,i[5]=l*m,i[9]=M*v-E,i[2]=E*v-M,i[6]=h*m,i[10]=b*v+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Zu)}lookAt(t,i,r){let a=this.elements;return Ti.subVectors(t,i),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),dr.crossVectors(r,Ti),dr.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),dr.crossVectors(r,Ti)),dr.normalize(),Wa.crossVectors(Ti,dr),a[0]=dr.x,a[4]=Wa.x,a[8]=Ti.x,a[1]=dr.y,a[5]=Wa.y,a[9]=Ti.y,a[2]=dr.z,a[6]=Wa.z,a[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,l=r[0],h=r[4],u=r[8],d=r[12],m=r[1],v=r[5],c=r[9],M=r[13],E=r[2],b=r[6],x=r[10],f=r[14],C=r[3],H=r[7],s=r[11],T=r[15],R=a[0],w=a[4],o=a[8],p=a[12],V=a[1],N=a[5],B=a[9],J=a[13],F=a[2],k=a[6],te=a[10],j=a[14],_e=a[3],Z=a[7],$=a[11],re=a[15];return n[0]=l*R+h*V+u*F+d*_e,n[4]=l*w+h*N+u*k+d*Z,n[8]=l*o+h*B+u*te+d*$,n[12]=l*p+h*J+u*j+d*re,n[1]=m*R+v*V+c*F+M*_e,n[5]=m*w+v*N+c*k+M*Z,n[9]=m*o+v*B+c*te+M*$,n[13]=m*p+v*J+c*j+M*re,n[2]=E*R+b*V+x*F+f*_e,n[6]=E*w+b*N+x*k+f*Z,n[10]=E*o+b*B+x*te+f*$,n[14]=E*p+b*J+x*j+f*re,n[3]=C*R+H*V+s*F+T*_e,n[7]=C*w+H*N+s*k+T*Z,n[11]=C*o+H*B+s*te+T*$,n[15]=C*p+H*J+s*j+T*re,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],l=t[1],h=t[5],u=t[9],d=t[13],m=t[2],v=t[6],c=t[10],M=t[14],E=t[3],b=t[7],x=t[11],f=t[15],C=u*M-d*c,H=h*M-d*v,s=h*c-u*v,T=l*M-d*m,R=l*c-u*m,w=l*v-h*m;return i*(b*C-x*H+f*s)-r*(E*C-x*T+f*R)+a*(E*H-b*T+f*w)-n*(E*s-b*R+x*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],l=t[5],h=t[9],u=t[2],d=t[6],m=t[10];return i*(l*m-h*d)-r*(n*m-h*u)+a*(n*d-l*u)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],u=t[6],d=t[7],m=t[8],v=t[9],c=t[10],M=t[11],E=t[12],b=t[13],x=t[14],f=t[15],C=i*h-r*l,H=i*u-a*l,s=i*d-n*l,T=r*u-a*h,R=r*d-n*h,w=a*d-n*u,o=m*b-v*E,p=m*x-c*E,V=m*f-M*E,N=v*x-c*b,B=v*f-M*b,J=c*f-M*x,F=C*J-H*B+s*N+T*V-R*p+w*o;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/F;return t[0]=(h*J-u*B+d*N)*k,t[1]=(a*B-r*J-n*N)*k,t[2]=(b*w-x*R+f*T)*k,t[3]=(c*R-v*w-M*T)*k,t[4]=(u*V-l*J-d*p)*k,t[5]=(i*J-a*V+n*p)*k,t[6]=(x*s-E*w-f*H)*k,t[7]=(m*w-c*s+M*H)*k,t[8]=(l*B-h*V+d*o)*k,t[9]=(r*V-i*B-n*o)*k,t[10]=(E*R-b*s+f*C)*k,t[11]=(v*s-m*R-M*C)*k,t[12]=(h*p-l*N-u*o)*k,t[13]=(i*N-r*p+a*o)*k,t[14]=(b*H-E*T-x*C)*k,t[15]=(m*T-v*H+c*C)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,l=t.x,h=t.y,u=t.z,d=n*l,m=n*h;return this.set(d*l+r,d*h-a*u,d*u+a*h,0,d*h+a*u,m*h+r,m*u-a*l,0,d*u-a*h,m*u+a*l,n*u*u+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,l){return this.set(1,r,n,0,t,1,l,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,l=i._y,h=i._z,u=i._w,d=n+n,m=l+l,v=h+h,c=n*d,M=n*m,E=n*v,b=l*m,x=l*v,f=h*v,C=u*d,H=u*m,s=u*v,T=r.x,R=r.y,w=r.z;return a[0]=(1-(b+f))*T,a[1]=(M+s)*T,a[2]=(E-H)*T,a[3]=0,a[4]=(M-s)*R,a[5]=(1-(c+f))*R,a[6]=(x+C)*R,a[7]=0,a[8]=(E+H)*w,a[9]=(x-C)*w,a[10]=(1-(c+b))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let l=Nr.set(a[0],a[1],a[2]).length(),h=Nr.set(a[4],a[5],a[6]).length(),u=Nr.set(a[8],a[9],a[10]).length();n<0&&(l=-l),Ni.copy(this);let d=1/l,m=1/h,v=1/u;return Ni.elements[0]*=d,Ni.elements[1]*=d,Ni.elements[2]*=d,Ni.elements[4]*=m,Ni.elements[5]*=m,Ni.elements[6]*=m,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,i.setFromRotationMatrix(Ni),r.x=l,r.y=h,r.z=u,this}makePerspective(t,i,r,a,n,l,h=ji,u=!1){let d=this.elements,m=2*n/(i-t),v=2*n/(r-a),c=(i+t)/(i-t),M=(r+a)/(r-a),E,b;if(u)E=n/(l-n),b=l*n/(l-n);else if(h===ji)E=-(l+n)/(l-n),b=-2*l*n/(l-n);else if(h===za)E=-l/(l-n),b=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=c,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,a,n,l,h=ji,u=!1){let d=this.elements,m=2/(i-t),v=2/(r-a),c=-(i+t)/(i-t),M=-(r+a)/(r-a),E,b;if(u)E=1/(l-n),b=l/(l-n);else if(h===ji)E=-2/(l-n),b=-(l+n)/(l-n);else if(h===za)E=-1/(l-n),b=-n/(l-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=0,d[12]=c,d[1]=0,d[5]=v,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Rr.prototype.isMatrix4=!0,Rr),Nr=new z,Ni=new Bt,qu=new z(0,0,0),Zu=new z(1,1,1),dr=new z,Wa=new z,Ti=new z,jo=new Bt,Yo=new vr,da=class fh{constructor(t=0,i=0,r=0,a=fh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],l=a[4],h=a[8],u=a[1],d=a[5],m=a[9],v=a[2],c=a[6],M=a[10];switch(i){case"XYZ":this._y=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(c,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-v,n),this._z=0);break;case"ZXY":this._x=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(u,n));break;case"ZYX":this._y=Math.asin(-pt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(c,M),this._z=Math.atan2(u,n)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-v,n)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(c,d),this._y=Math.atan2(h,n)):(this._x=Math.atan2(-m,M),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};da.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ku=0,qo=new z,Fr=new vr,Qi=new Bt,Xa=new z,Sa=new z,Ju=new z,$u=new vr,Zo=new z(1,0,0),Ko=new z(0,1,0),Jo=new z(0,0,1),$o={type:"added"},Qu={type:"removed"},Or={type:"childadded",child:null},$n={type:"childremoved",child:null},vi=class wn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();let t=new z,i=new da,r=new vr,a=new z(1,1,1);function n(){r.setFromEuler(i,!1)}function l(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Fr.setFromAxisAngle(t,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,i){return Fr.setFromAxisAngle(t,i),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(Zo,t)}rotateY(t){return this.rotateOnAxis(Ko,t)}rotateZ(t){return this.rotateOnAxis(Jo,t)}translateOnAxis(t,i){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Zo,t)}translateY(t){return this.translateOnAxis(Ko,t)}translateZ(t){return this.translateOnAxis(Jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Xa.copy(t):Xa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Sa,Xa,this.up):Qi.lookAt(Xa,Sa,this.up),this.quaternion.setFromRotationMatrix(Qi),a&&(Qi.extractRotation(a.matrixWorld),Fr.setFromRotationMatrix(Qi),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Mt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),Or.child=t,this.dispatchEvent(Or),Or.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Qu),$n.child=t,this.dispatchEvent($n),$n.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,l=a.length;n<l;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,$u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let l=0,h=n.length;l<h;l++)n[l].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let d=0,m=u.length;d<m;d++){let v=u[d];n(t.shapes,v)}else n(t.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(n(t.materials,this.material[u]));a.material=h}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];a.animations.push(n(t.animations,u))}}if(i){let h=l(t.geometries),u=l(t.materials),d=l(t.textures),m=l(t.images),v=l(t.shapes),c=l(t.skeletons),M=l(t.animations),E=l(t.nodes);h.length>0&&(r.geometries=h),u.length>0&&(r.materials=u),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),c.length>0&&(r.skeletons=c),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function l(h){let u=[];for(let d in h){let m=h[d];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vi.DEFAULT_UP=new z(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}},ed={type:"move"},Qn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,l=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){n=!0;for(let E of e.hand.values()){let b=t.getJointPose(E,i),x=this._getHandJoint(u,E);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}let d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],v=d.position.distanceTo(m.position),c=.02,M=.005;u.inputState.pinching&&v>c+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&v<=c-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),u!==null&&(u.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},ja={h:0,s:0,l:0};function es(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=Hu(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=es(n,a,e+1/3),this.g=es(n,a,e),this.b=es(n,a,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Pi){function i(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],l=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pi){let i=mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return gt.workingToColorSpace(fi.copy(this),e),Math.round(pt(fi.r*255,0,255))*65536+Math.round(pt(fi.g*255,0,255))*256+Math.round(pt(fi.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(fi.copy(this),t);let i=fi.r,r=fi.g,a=fi.b,n=Math.max(i,r,a),l=Math.min(i,r,a),h,u,d=(l+n)/2;if(l===n)h=0,u=0;else{let m=n-l;switch(u=d<=.5?m/(n+l):m/(2-n-l),n){case i:h=(r-a)/m+(r<a?6:0);break;case r:h=(a-i)/m+2;break;case a:h=(i-r)/m+4;break}h/=6}return e.h=h,e.s=u,e.l=d,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(fi.copy(this),t),e.r=fi.r,e.g=fi.g,e.b=fi.b,e}getStyle(e=Pi){gt.workingToColorSpace(fi.copy(this),e);let t=fi.r,i=fi.g,r=fi.b;return e!==Pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(ja);let i=Yn(cr.h,ja.h,t),r=Yn(cr.s,ja.s,t),a=Yn(cr.l,ja.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fi=new it;it.NAMES=mh;var td=class extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fi=new z,er=new z,ts=new z,tr=new z,Br=new z,zr=new z,Qo=new z,is=new z,rs=new z,as=new z,ns=new Wt,ss=new Wt,os=new Wt,$r=class Qr{constructor(t=new z,i=new z,r=new z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Fi.subVectors(t,i),a.cross(Fi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Fi.subVectors(a,i),er.subVectors(r,i),ts.subVectors(t,i);let l=Fi.dot(Fi),h=Fi.dot(er),u=Fi.dot(ts),d=er.dot(er),m=er.dot(ts),v=l*d-h*h;if(v===0)return n.set(0,0,0),null;let c=1/v,M=(d*u-h*m)*c,E=(l*m-h*u)*c;return n.set(1-M-E,E,M)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(t,i,r,a,n,l,h,u){return this.getBarycoord(t,i,r,a,tr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(n,tr.x),u.addScaledVector(l,tr.y),u.addScaledVector(h,tr.z),u)}static getInterpolatedAttribute(t,i,r,a,n,l){return ns.setScalar(0),ss.setScalar(0),os.setScalar(0),ns.fromBufferAttribute(t,i),ss.fromBufferAttribute(t,r),os.fromBufferAttribute(t,a),l.setScalar(0),l.addScaledVector(ns,n.x),l.addScaledVector(ss,n.y),l.addScaledVector(os,n.z),l}static isFrontFacing(t,i,r,a){return Fi.subVectors(r,i),er.subVectors(t,i),Fi.cross(er).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Fi.cross(er).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Qr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Qr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Qr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,l,h;Br.subVectors(a,r),zr.subVectors(n,r),is.subVectors(t,r);let u=Br.dot(is),d=zr.dot(is);if(u<=0&&d<=0)return i.copy(r);rs.subVectors(t,a);let m=Br.dot(rs),v=zr.dot(rs);if(m>=0&&v<=m)return i.copy(a);let c=u*v-m*d;if(c<=0&&u>=0&&m<=0)return l=u/(u-m),i.copy(r).addScaledVector(Br,l);as.subVectors(t,n);let M=Br.dot(as),E=zr.dot(as);if(E>=0&&M<=E)return i.copy(n);let b=M*d-u*E;if(b<=0&&d>=0&&E<=0)return h=d/(d-E),i.copy(r).addScaledVector(zr,h);let x=m*E-M*v;if(x<=0&&v-m>=0&&M-E>=0)return Qo.subVectors(n,a),h=(v-m)/(v-m+(M-E)),i.copy(a).addScaledVector(Qo,h);let f=1/(x+b+c);return l=b*f,h=c*f,i.copy(r).addScaledVector(Br,l).addScaledVector(zr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pa=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,l=a.count;n<l;n++)e.isMesh===!0?e.getVertexPosition(n,Oi):Oi.fromBufferAttribute(a,n),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),qa.subVectors(this.max,Ea),Hr.subVectors(e.a,Ea),Gr.subVectors(e.b,Ea),kr.subVectors(e.c,Ea),pr.subVectors(Gr,Hr),fr.subVectors(kr,Gr),Sr.subVectors(Hr,kr);let t=[0,-pr.z,pr.y,0,-fr.z,fr.y,0,-Sr.z,Sr.y,pr.z,0,-pr.x,fr.z,0,-fr.x,Sr.z,0,-Sr.x,-pr.y,pr.x,0,-fr.y,fr.x,0,-Sr.y,Sr.x,0];return!ls(t,Hr,Gr,kr,qa)||(t=[1,0,0,0,1,0,0,0,1],!ls(t,Hr,Gr,kr,qa))?!1:(Za.crossVectors(pr,fr),t=[Za.x,Za.y,Za.z],ls(t,Hr,Gr,kr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new z,new z,new z,new z,new z,new z,new z,new z],Oi=new z,Ya=new pa,Hr=new z,Gr=new z,kr=new z,pr=new z,fr=new z,Sr=new z,Ea=new z,qa=new z,Za=new z,Er=new z;function ls(e,t,i,r,a){for(let n=0,l=e.length-3;n<=l;n+=3){Er.fromArray(e,n);let h=a.x*Math.abs(Er.x)+a.y*Math.abs(Er.y)+a.z*Math.abs(Er.z),u=t.dot(Er),d=i.dot(Er),m=r.dot(Er);if(Math.max(-Math.max(u,d,m),Math.min(u,d,m))>h)return!1}return!0}var Xt=new z,Ka=new Xe,id=0,Di=class extends Mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dh,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},gh=class extends Di{constructor(e,t,i){super(new Uint16Array(e),t,i)}},_h=class extends Di{constructor(e,t,i){super(new Uint32Array(e),t,i)}},$t=class extends Di{constructor(e,t,i){super(new Float32Array(e),t,i)}},rd=new pa,ya=new z,hs=new z,Ga=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):rd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(hs)),this.expandByPoint(ya.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ad=0,Ci=new Bt,us=new vi,Vr=new z,wi=new pa,ba=new pa,ni=new z,bi=class vh extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?_h:gh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new st().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,r){return Ci.makeTranslation(t,i,r),this.applyMatrix4(Ci),this}scale(t,i,r){return Ci.makeScale(t,i,r),this.applyMatrix4(Ci),this}lookAt(t){return us.lookAt(t),us.updateMatrix(),this.applyMatrix4(us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let l=t[a];r.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $t(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];wi.setFromBufferAttribute(n),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let r=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),i)for(let n=0,l=i.length;n<l;n++){let h=i[n];ba.setFromBufferAttribute(h),this.morphTargetsRelative?(ni.addVectors(wi.min,ba.min),wi.expandByPoint(ni),ni.addVectors(wi.max,ba.max),wi.expandByPoint(ni)):(wi.expandByPoint(ba.min),wi.expandByPoint(ba.max))}wi.getCenter(r);let a=0;for(let n=0,l=t.count;n<l;n++)ni.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(ni));if(i)for(let n=0,l=i.length;n<l;n++){let h=i[n],u=this.morphTargetsRelative;for(let d=0,m=h.count;d<m;d++)ni.fromBufferAttribute(h,d),u&&(Vr.fromBufferAttribute(t,d),ni.add(Vr)),a=Math.max(a,r.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==r.count)&&(l=new Di(new Float32Array(4*r.count),4),this.setAttribute("tangent",l));let h=[],u=[];for(let o=0;o<r.count;o++)h[o]=new z,u[o]=new z;let d=new z,m=new z,v=new z,c=new Xe,M=new Xe,E=new Xe,b=new z,x=new z;function f(o,p,V){d.fromBufferAttribute(r,o),m.fromBufferAttribute(r,p),v.fromBufferAttribute(r,V),c.fromBufferAttribute(n,o),M.fromBufferAttribute(n,p),E.fromBufferAttribute(n,V),m.sub(d),v.sub(d),M.sub(c),E.sub(c);let N=1/(M.x*E.y-E.x*M.y);isFinite(N)&&(b.copy(m).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(N),x.copy(v).multiplyScalar(M.x).addScaledVector(m,-E.x).multiplyScalar(N),h[o].add(b),h[p].add(b),h[V].add(b),u[o].add(x),u[p].add(x),u[V].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let o=0,p=C.length;o<p;++o){let V=C[o],N=V.start,B=V.count;for(let J=N,F=N+B;J<F;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let H=new z,s=new z,T=new z,R=new z;function w(o){T.fromBufferAttribute(a,o),R.copy(T);let p=h[o];H.copy(p),H.sub(T.multiplyScalar(T.dot(p))).normalize(),s.crossVectors(R,p);let V=s.dot(u[o])<0?-1:1;l.setXYZW(o,H.x,H.y,H.z,V)}for(let o=0,p=C.length;o<p;++o){let V=C[o],N=V.start,B=V.count;for(let J=N,F=N+B;J<F;J+=3)w(t.getX(J+0)),w(t.getX(J+1)),w(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,M=r.count;c<M;c++)r.setXYZ(c,0,0,0);let a=new z,n=new z,l=new z,h=new z,u=new z,d=new z,m=new z,v=new z;if(t)for(let c=0,M=t.count;c<M;c+=3){let E=t.getX(c+0),b=t.getX(c+1),x=t.getX(c+2);a.fromBufferAttribute(i,E),n.fromBufferAttribute(i,b),l.fromBufferAttribute(i,x),m.subVectors(l,n),v.subVectors(a,n),m.cross(v),h.fromBufferAttribute(r,E),u.fromBufferAttribute(r,b),d.fromBufferAttribute(r,x),h.add(m),u.add(m),d.add(m),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,u.x,u.y,u.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let c=0,M=i.count;c<M;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),l.fromBufferAttribute(i,c+2),m.subVectors(l,n),v.subVectors(a,n),m.cross(v),r.setXYZ(c+0,m.x,m.y,m.z),r.setXYZ(c+1,m.x,m.y,m.z),r.setXYZ(c+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)ni.fromBufferAttribute(t,i),ni.normalize(),t.setXYZ(i,ni.x,ni.y,ni.z)}toNonIndexed(){function t(h,u){let d=h.array,m=h.itemSize,v=h.normalized,c=new d.constructor(u.length*m),M=0,E=0;for(let b=0,x=u.length;b<x;b++){h.isInterleavedBufferAttribute?M=u[b]*h.data.stride+h.offset:M=u[b]*m;for(let f=0;f<m;f++)c[E++]=d[M++]}return new Di(c,m,v)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new vh,r=this.index.array,a=this.attributes;for(let h in a){let u=a[h],d=t(u,r);i.setAttribute(h,d)}let n=this.morphAttributes;for(let h in n){let u=[],d=n[h];for(let m=0,v=d.length;m<v;m++){let c=d[m],M=t(c,r);u.push(M)}i.morphAttributes[h]=u}i.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let d=l[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let u in r){let d=r[u];t.data.attributes[u]=d.toJSON(t.data)}let a={},n=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],m=[];for(let v=0,c=d.length;v<c;v++){let M=d[v];m.push(M.toJSON(t.data))}m.length>0&&(a[u]=m,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let d in a){let m=a[d];this.setAttribute(d,m.clone(i))}let n=t.morphAttributes;for(let d in n){let m=[],v=n[d];for(let c=0,M=v.length;c<M;c++)m.push(v[c].clone(i));this.morphAttributes[d]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,m=l.length;d<m;d++){let v=l[d];this.addGroup(v.start,v.count,v.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=_r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},gi=new z,el=class Mh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)gi.fromBufferAttribute(this,i),gi.applyMatrix4(t),this.setXYZ(i,gi.x,gi.y,gi.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)gi.fromBufferAttribute(this,i),gi.applyNormalMatrix(t),this.setXYZ(i,gi.x,gi.y,gi.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)gi.fromBufferAttribute(this,i),gi.transformDirection(t),this.setXYZ(i,gi.x,gi.y,gi.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ct(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Wi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ct(i,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ct(i,this.array),r=Ct(r,this.array),a=Ct(a,this.array),n=Ct(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Ln("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Di(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ln("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ds=new z,sd=new z,od=new st,nr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ds.subVectors(i,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ds),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||od.getNormalMatrix(e),r=this.coplanarPoint(ds).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ld=0,ur=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Na,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Zl,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let l in a){let h=a[l];delete h.metadata,n.push(h)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new nr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xh=class extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,Ta=new z,Xr=new z,jr=new z,Yr=new Xe,wa=new Xe,Sh=new Bt,Ja=new z,Aa=new z,$a=new z,tl=new Xe,cs=new Xe,il=new Xe,hd=class extends vi{constructor(e=new xh){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new bi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nd(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new el(i,3,0,!1)),Wr.setAttribute("uv",new el(i,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),Sh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-jr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;Qa(Ja.set(-.5,-.5,0),jr,n,Xr,r,a),Qa(Aa.set(.5,-.5,0),jr,n,Xr,r,a),Qa($a.set(.5,.5,0),jr,n,Xr,r,a),tl.set(0,0),cs.set(1,0),il.set(1,1);let l=e.ray.intersectTriangle(Ja,Aa,$a,!1,Ta);if(l===null&&(Qa(Aa.set(-.5,.5,0),jr,n,Xr,r,a),cs.set(0,1),l=e.ray.intersectTriangle(Ja,$a,Aa,!1,Ta),l===null))return;let h=e.ray.origin.distanceTo(Ta);h<e.near||h>e.far||t.push({distance:h,point:Ta.clone(),uv:$r.getInterpolation(Ta,Ja,Aa,$a,tl,cs,il,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qa(e,t,i,r,a,n){Yr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(wa.x=n*Yr.x-a*Yr.y,wa.y=a*Yr.x+n*Yr.y):wa.copy(Yr),e.copy(t),e.x+=wa.x,e.y+=wa.y,e.applyMatrix4(Sh)}var rr=new z,ps=new z,en=new z,tn=new z,ka=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ps.copy(e).add(t).multiplyScalar(.5),en.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(ps);let a=e.distanceTo(t)*.5,n=-this.direction.dot(en),l=tn.dot(this.direction),h=-tn.dot(en),u=tn.lengthSq(),d=Math.abs(1-n*n),m,v,c,M;if(d>0)if(m=n*h-l,v=n*l-h,M=a*d,m>=0)if(v>=-M)if(v<=M){let E=1/d;m*=E,v*=E,c=m*(m+n*v+2*l)+v*(n*m+v+2*h)+u}else v=a,m=Math.max(0,-(n*v+l)),c=-m*m+v*(v+2*h)+u;else v=-a,m=Math.max(0,-(n*v+l)),c=-m*m+v*(v+2*h)+u;else v<=-M?(m=Math.max(0,-(-n*a+l)),v=m>0?-a:Math.min(Math.max(-a,-h),a),c=-m*m+v*(v+2*h)+u):v<=M?(m=0,v=Math.min(Math.max(-a,-h),a),c=v*(v+2*h)+u):(m=Math.max(0,-(n*a+l)),v=m>0?a:Math.min(Math.max(-a,-h),a),c=-m*m+v*(v+2*h)+u);else v=n>0?-a:a,m=Math.max(0,-(n*v+l)),c=-m*m+v*(v+2*h)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ps).addScaledVector(en,v),c}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),r=rr.dot(rr)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),l=i-n,h=i+n;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,l,h,u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,v=this.origin;return u>=0?(i=(e.min.x-v.x)*u,r=(e.max.x-v.x)*u):(i=(e.max.x-v.x)*u,r=(e.min.x-v.x)*u),d>=0?(a=(e.min.y-v.y)*d,n=(e.max.y-v.y)*d):(a=(e.max.y-v.y)*d,n=(e.min.y-v.y)*d),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),m>=0?(l=(e.min.z-v.z)*m,h=(e.max.z-v.z)*m):(l=(e.max.z-v.z)*m,h=(e.min.z-v.z)*m),i>h||l>r)||((l>i||i!==i)&&(i=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,l=this.direction,h=l.x,u=l.y,d=l.z,m=e.x-n.x,v=e.y-n.y,c=e.z-n.z,M=t.x-n.x,E=t.y-n.y,b=t.z-n.z,x=i.x-n.x,f=i.y-n.y,C=i.z-n.z,H=Math.abs(h),s=Math.abs(u),T=Math.abs(d),R,w,o,p,V,N,B,J,F,k,te,j;if(H>=s&&H>=T?(o=h,N=m,F=M,j=x,h>=0?(R=u,w=d,p=v,V=c,B=E,J=b,k=f,te=C):(R=d,w=u,p=c,V=v,B=b,J=E,k=C,te=f)):s>=T?(o=u,N=v,F=E,j=f,u>=0?(R=d,w=h,p=c,V=m,B=b,J=M,k=C,te=x):(R=h,w=d,p=m,V=c,B=M,J=b,k=x,te=C)):(o=d,N=c,F=b,j=C,d>=0?(R=h,w=u,p=m,V=v,B=M,J=E,k=x,te=f):(R=u,w=h,p=v,V=m,B=E,J=M,k=f,te=x)),o===0)return null;let _e=R/o,Z=w/o,$=1/o,re=p-_e*N,rt=V-Z*N,ze=B-_e*F,Rt=J-Z*F,ke=k-_e*j,K=te-Z*j,he=ke*Rt-K*ze,pe=re*K-rt*ke,Ve=ze*rt-Rt*re;if(r){if(he<0||pe<0||Ve<0)return null}else if((he<0||pe<0||Ve<0)&&(he>0||pe>0||Ve>0))return null;let We=he+pe+Ve;if(We===0)return null;let we=$*(he*N+pe*F+Ve*j);return(We>0?we<0:we>0)?null:this.at(we/We,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rl=new Bt,yr=new ka,rn=new Ga,al=new z,an=new z,nn=new z,sn=new z,fs=new z,on=new z,nl=new z,ln=new z,Yt=class extends vi{constructor(e=new bi,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(a&&l){on.set(0,0,0);for(let h=0,u=a.length;h<u;h++){let d=l[h],m=a[h];d!==0&&(fs.fromBufferAttribute(m,e),n?on.addScaledVector(fs,d):on.addScaledVector(fs.sub(t),d))}t.add(on)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rn.copy(i.boundingSphere),rn.applyMatrix4(a),yr.copy(e.ray).recast(e.near),!(rn.containsPoint(yr.origin)===!1&&(yr.intersectSphere(rn,al)===null||yr.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(a).invert(),yr.copy(e.ray).applyMatrix4(rl),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,l=a.index,h=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,v=a.groups,c=a.drawRange;if(l!==null)if(Array.isArray(n))for(let M=0,E=v.length;M<E;M++){let b=v[M],x=n[b.materialIndex],f=Math.max(b.start,c.start),C=Math.min(l.count,Math.min(b.start+b.count,c.start+c.count));for(let H=f,s=C;H<s;H+=3){let T=l.getX(H),R=l.getX(H+1),w=l.getX(H+2);r=hn(this,x,e,i,u,d,m,T,R,w),r&&(r.faceIndex=Math.floor(H/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let M=Math.max(0,c.start),E=Math.min(l.count,c.start+c.count);for(let b=M,x=E;b<x;b+=3){let f=l.getX(b),C=l.getX(b+1),H=l.getX(b+2);r=hn(this,n,e,i,u,d,m,f,C,H),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(n))for(let M=0,E=v.length;M<E;M++){let b=v[M],x=n[b.materialIndex],f=Math.max(b.start,c.start),C=Math.min(h.count,Math.min(b.start+b.count,c.start+c.count));for(let H=f,s=C;H<s;H+=3){let T=H,R=H+1,w=H+2;r=hn(this,x,e,i,u,d,m,T,R,w),r&&(r.faceIndex=Math.floor(H/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let M=Math.max(0,c.start),E=Math.min(h.count,c.start+c.count);for(let b=M,x=E;b<x;b+=3){let f=b,C=b+1,H=b+2;r=hn(this,n,e,i,u,d,m,f,C,H),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}}};function ud(e,t,i,r,a,n,l,h){let u;if(t.side===yi?u=r.intersectTriangle(l,n,a,!0,h):u=r.intersectTriangle(a,n,l,t.side===Cr,h),u===null)return null;ln.copy(h),ln.applyMatrix4(e.matrixWorld);let d=i.ray.origin.distanceTo(ln);return d<i.near||d>i.far?null:{distance:d,point:ln.clone(),object:e}}function hn(e,t,i,r,a,n,l,h,u,d){e.getVertexPosition(h,an),e.getVertexPosition(u,nn),e.getVertexPosition(d,sn);let m=ud(e,t,i,r,an,nn,sn,nl);if(m){let v=new z;$r.getBarycoord(nl,an,nn,sn,v),a&&(m.uv=$r.getInterpolatedAttribute(a,h,u,d,v,new Xe)),n&&(m.uv1=$r.getInterpolatedAttribute(n,h,u,d,v,new Xe)),l&&(m.normal=$r.getInterpolatedAttribute(l,h,u,d,v,new z),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));let c={a:h,b:u,c:d,normal:new z,materialIndex:0};$r.getNormal(an,nn,sn,c.normal),m.face=c,m.barycoord=v}return m}var dd=class extends Li{constructor(e=null,t=1,i=1,r,a,n,l,h,u=li,d=li,m,v){super(null,n,l,h,u,d,r,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},br=new Ga,cd=new Xe(.5,.5),un=new z,Io=class{constructor(e=new nr,t=new nr,i=new nr,r=new nr,a=new nr,n=new nr){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji,i=!1){let r=this.planes,a=e.elements,n=a[0],l=a[1],h=a[2],u=a[3],d=a[4],m=a[5],v=a[6],c=a[7],M=a[8],E=a[9],b=a[10],x=a[11],f=a[12],C=a[13],H=a[14],s=a[15];if(r[0].setComponents(u-n,c-d,x-M,s-f).normalize(),r[1].setComponents(u+n,c+d,x+M,s+f).normalize(),r[2].setComponents(u+l,c+m,x+E,s+C).normalize(),r[3].setComponents(u-l,c-m,x-E,s-C).normalize(),i)r[4].setComponents(h,v,b,H).normalize(),r[5].setComponents(u-h,c-v,x-b,s-H).normalize();else if(r[4].setComponents(u-h,c-v,x-b,s-H).normalize(),t===ji)r[5].setComponents(u+h,c+v,x+b,s+H).normalize();else if(t===za)r[5].setComponents(h,v,b,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);let t=cd.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(un.x=r.normal.x>0?e.max.x:e.min.x,un.y=r.normal.y>0?e.max.y:e.min.y,un.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(un)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eh=class extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nn=new z,Fn=new z,sl=new Bt,Ra=new ka,dn=new Ga,ms=new z,ol=new z,pd=class extends vi{constructor(e=new bi,t=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Nn.fromBufferAttribute(t,r-1),Fn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Nn.distanceTo(Fn);e.setAttribute("lineDistance",new $t(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dn.copy(i.boundingSphere),dn.applyMatrix4(r),dn.radius+=a,e.ray.intersectsSphere(dn)===!1)return;sl.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(sl);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){let v=Math.max(0,n.start),c=Math.min(d.count,n.start+n.count);for(let M=v,E=c-1;M<E;M+=u){let b=d.getX(M),x=d.getX(M+1),f=cn(this,e,Ra,h,b,x,M);f&&t.push(f)}if(this.isLineLoop){let M=d.getX(c-1),E=d.getX(v),b=cn(this,e,Ra,h,M,E,c-1);b&&t.push(b)}}else{let v=Math.max(0,n.start),c=Math.min(m.count,n.start+n.count);for(let M=v,E=c-1;M<E;M+=u){let b=cn(this,e,Ra,h,M,M+1,M);b&&t.push(b)}if(this.isLineLoop){let M=cn(this,e,Ra,h,c-1,v,c-1);M&&t.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function cn(e,t,i,r,a,n,l){let h=e.geometry.attributes.position;if(Nn.fromBufferAttribute(h,a),Fn.fromBufferAttribute(h,n),i.distanceSqToSegment(Nn,Fn,ms,ol)>r)return;ms.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(ms);if(!(u<t.near||u>t.far))return{distance:u,point:ol.clone().applyMatrix4(e.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:e}}var ll=new z,hl=new z,fd=class extends pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)ll.fromBufferAttribute(t,r),hl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ll.distanceTo(hl);e.setAttribute("lineDistance",new $t(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yh=class extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ul=new Bt,fo=new ka,pn=new Ga,fn=new z,md=class extends vi{constructor(e=new bi,t=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pn.copy(i.boundingSphere),pn.applyMatrix4(r),pn.radius+=a,e.ray.intersectsSphere(pn)===!1)return;ul.copy(r).invert(),fo.copy(e.ray).applyMatrix4(ul);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=i.index,d=i.attributes.position;if(u!==null){let m=Math.max(0,n.start),v=Math.min(u.count,n.start+n.count);for(let c=m,M=v;c<M;c++){let E=u.getX(c);fn.fromBufferAttribute(d,E),dl(fn,E,h,r,e,t,this)}}else{let m=Math.max(0,n.start),v=Math.min(d.count,n.start+n.count);for(let c=m,M=v;c<M;c++)fn.fromBufferAttribute(d,c),dl(fn,c,h,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function dl(e,t,i,r,a,n,l){let h=fo.distanceSqToPoint(e);if(h<i){let u=new z;fo.closestPointToPoint(e,u),u.applyMatrix4(r);let d=a.ray.origin.distanceTo(u);if(d<a.near||d>a.far)return;n.push({distance:d,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var bh=class extends Li{constructor(e=[],t=Pr,i,r,a,n,l,h,u,d){super(e,t,i,r,a,n,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cl=class extends Li{constructor(e,t,i,r,a,n,l,h,u){super(e,t,i,r,a,n,l,h,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ha=class extends Li{constructor(e,t,i=qi,r,a,n,l=li,h=li,u,d=hr,m=1){if(d!==hr&&d!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let v={width:e,height:t,depth:m};super(v,r,a,n,l,h,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gd=class extends Ha{constructor(e,t=qi,i=Pr,r,a,n=li,l=li,h,u=hr){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,i,r,a,n,l,h,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Th=class extends Li{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bn=class wh extends bi{constructor(t=1,i=1,r=1,a=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:l};let h=this;a=Math.floor(a),n=Math.floor(n),l=Math.floor(l);let u=[],d=[],m=[],v=[],c=0,M=0;E("z","y","x",-1,-1,r,i,t,l,n,0),E("z","y","x",1,-1,r,i,-t,l,n,1),E("x","z","y",1,1,t,r,i,a,l,2),E("x","z","y",1,-1,t,r,-i,a,l,3),E("x","y","z",1,-1,t,i,r,a,n,4),E("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(v,2));function E(b,x,f,C,H,s,T,R,w,o,p){let V=s/w,N=T/o,B=s/2,J=T/2,F=R/2,k=w+1,te=o+1,j=0,_e=0,Z=new z;for(let $=0;$<te;$++){let re=$*N-J;for(let rt=0;rt<k;rt++){let ze=rt*V-B;Z[b]=ze*C,Z[x]=re*H,Z[f]=F,d.push(Z.x,Z.y,Z.z),Z[b]=0,Z[x]=0,Z[f]=R>0?1:-1,m.push(Z.x,Z.y,Z.z),v.push(rt/w),v.push(1-$/o),j+=1}}for(let $=0;$<o;$++)for(let re=0;re<w;re++){let rt=c+re+k*$,ze=c+re+k*($+1),Rt=c+(re+1)+k*($+1),ke=c+(re+1)+k*$;u.push(rt,ze,ke),u.push(ze,Rt,ke),_e+=6}h.addGroup(M,_e,p),M+=_e,c+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mo=class Ah extends bi{constructor(t=1,i=1,r=1,a=32,n=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:l,thetaStart:h,thetaLength:u};let d=this;a=Math.floor(a),n=Math.floor(n);let m=[],v=[],c=[],M=[],E=0,b=[],x=r/2,f=0;C(),l===!1&&(t>0&&H(!0),i>0&&H(!1)),this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(M,2));function C(){let s=new z,T=new z,R=0,w=(i-t)/r;for(let o=0;o<=n;o++){let p=[],V=o/n,N=V*(i-t)+t;for(let B=0;B<=a;B++){let J=B/a,F=J*u+h,k=Math.sin(F),te=Math.cos(F);T.x=N*k,T.y=-V*r+x,T.z=N*te,v.push(T.x,T.y,T.z),s.set(k,w,te).normalize(),c.push(s.x,s.y,s.z),M.push(J,1-V),p.push(E++)}b.push(p)}for(let o=0;o<a;o++)for(let p=0;p<n;p++){let V=b[p][o],N=b[p+1][o],B=b[p+1][o+1],J=b[p][o+1];(t>0||p!==0)&&(m.push(V,N,J),R+=3),(i>0||p!==n-1)&&(m.push(N,B,J),R+=3)}d.addGroup(f,R,0),f+=R}function H(s){let T=E,R=new Xe,w=new z,o=0,p=s===!0?t:i,V=s===!0?1:-1;for(let B=1;B<=a;B++)v.push(0,x*V,0),c.push(0,V,0),M.push(.5,.5),E++;let N=E;for(let B=0;B<=a;B++){let J=B/a*u+h,F=Math.cos(J),k=Math.sin(J);w.x=p*k,w.y=x*V,w.z=p*F,v.push(w.x,w.y,w.z),c.push(0,V,0),R.x=F*.5+.5,R.y=k*.5*V+.5,M.push(R.x,R.y),E++}for(let B=0;B<a;B++){let J=T+B,F=N+B;s===!0?m.push(F,F+1,J):m.push(F+1,F,J),o+=3}d.addGroup(f,o,s===!0?1:2),f+=o}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class Rh extends mo{constructor(t=1,i=1,r=32,a=1,n=!1,l=0,h=Math.PI*2){super(0,t,i,r,a,n,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:l,thetaLength:h}}static fromJSON(t){return new Rh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Do=class Ch extends bi{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,l=i/2,h=Math.floor(r),u=Math.floor(a),d=h+1,m=u+1,v=t/h,c=i/u,M=[],E=[],b=[],x=[];for(let f=0;f<m;f++){let C=f*c-l;for(let H=0;H<d;H++){let s=H*v-n;E.push(s,-C,0),b.push(0,0,1),x.push(H/h),x.push(1-f/u)}}for(let f=0;f<u;f++)for(let C=0;C<h;C++){let H=C+d*f,s=C+d*(f+1),T=C+1+d*(f+1),R=C+1+d*f;M.push(H,s,R),M.push(s,T,R)}this.setIndex(M),this.setAttribute("position",new $t(E,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ch(t.width,t.height,t.widthSegments,t.heightSegments)}},pl=class Ph extends bi{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,l=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:l,thetaLength:h},r=Math.floor(r),a=Math.floor(a);let u=[],d=[],m=[],v=[],c=new z,M=new z,E=new z;for(let b=0;b<=r;b++){let x=l+b/r*h;for(let f=0;f<=a;f++){let C=f/a*n;M.x=(t+i*Math.cos(x))*Math.cos(C),M.y=(t+i*Math.cos(x))*Math.sin(C),M.z=i*Math.sin(x),d.push(M.x,M.y,M.z),c.x=t*Math.cos(C),c.y=t*Math.sin(C),E.subVectors(M,c).normalize(),m.push(E.x,E.y,E.z),v.push(f/a),v.push(b/r)}}for(let b=1;b<=r;b++)for(let x=1;x<=a;x++){let f=(a+1)*b+x-1,C=(a+1)*(b-1)+x-1,H=(a+1)*(b-1)+x,s=(a+1)*b+x;u.push(f,C,s),u.push(C,H,s)}this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ph(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},_d=class extends ur{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ca(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(fl(a))a.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(fl(a[0])){let n=[];for(let l=0,h=a.length;l<h;l++)n[l]=a[l].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function _i(e){let t={};for(let i=0;i<e.length;i++){let r=ca(e[i]);for(let a in r)t[a]=r[a]}return t}function fl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function vd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Ih(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gt.workingColorSpace}var Md={clone:ca,merge:_i},xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ki=class extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new st().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ed=class extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ot=class extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yd=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},bd=class extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Td=class extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Dh=class extends vi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gs=new Bt,ml=new z,gl=new z,wd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(ml),gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){gs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gs,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,l=r?r.w/a.y:1,h=r?r.x/a.x:0,u=r?r.y/a.y:0;e.coordinateSystem===za||e.reversedDepth?t.set(.5*n,0,0,.5*n+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mn=new z,gn=new vr,Gi=new z,Lh=class extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mn,gn,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mn,gn,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(mn,gn,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mn,gn,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mr=new z,_l=new Xe,vl=new Xe,Ii=class extends Lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(bn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,_l,vl),t.subVectors(vl,_l)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let h=n.fullWidth,u=n.fullHeight;a+=n.offsetX*r/h,t-=n.offsetY*i/u,r*=n.width/h,i*=n.height/u}let l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lo=class extends Lh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,n=a+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,n,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ad=class extends wd{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vi.DEFAULT_UP),this.updateMatrix(),this.target=new vi,this.shadow=new Ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Rd=class extends Dh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},qr=-90,Zr=1,Cd=class extends vi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ii(qr,Zr,e,t);r.layers=this.layers,this.add(r);let a=new Ii(qr,Zr,e,t);a.layers=this.layers,this.add(a);let n=new Ii(qr,Zr,e,t);n.layers=this.layers,this.add(n);let l=new Ii(qr,Zr,e,t);l.layers=this.layers,this.add(l);let h=new Ii(qr,Zr,e,t);h.layers=this.layers,this.add(h);let u=new Ii(qr,Zr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,l,h]=t;for(let u of t)this.remove(u);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,l,h,u,d]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,v,c),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},Pd=class extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uh="\\[\\]\\.:\\/",Uo="[^"+Uh+"]",Id="[^"+Uh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Uo);/(WCOD+)?/.source.replace("WCOD",Id);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo);var Ml=new Bt,Dd=class{constructor(e,t,i=0,r=1/0){this.ray=new ka(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ml.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ml),this}intersectObject(e,t=!0,i=[]){return go(e,this,i,t),i.sort(xl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)go(e[r],this,i,t);return i.sort(xl),i}};function xl(e,t){return e.distance-t.distance}function go(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let l=0,h=n.length;l<h;l++)go(n[l],t,i,!0)}}var Sl=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ha;ha=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},ha.prototype.isMatrix2=!0;var Ld=class extends fd{constructor(e=10,t=10,i=4473924,r=8947848){i=new it(i),r=new it(r);let a=t/2,n=e/t,l=e/2,h=[],u=[];for(let v=0,c=0,M=-l;v<=t;v++,M+=n){h.push(-l,0,M,l,0,M),h.push(M,0,-l,M,0,l);let E=v===a?i:r;E.toArray(u,c),c+=3,E.toArray(u,c),c+=3,E.toArray(u,c),c+=3,E.toArray(u,c),c+=3}let d=new bi;d.setAttribute("position",new $t(h,3)),d.setAttribute("color",new $t(u,3));let m=new Eh({vertexColors:!0,toneMapped:!1});super(d,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ud=class extends Mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function El(e,t,i,r){let a=Nd(r);switch(i){case lh:return e*t;case uh:return e*t/a.components*a.byteLength;case bo:return e*t/a.components*a.byteLength;case Ir:return e*t*2/a.components*a.byteLength;case To:return e*t*2/a.components*a.byteLength;case hh:return e*t*3/a.components*a.byteLength;case Bi:return e*t*4/a.components*a.byteLength;case wo:return e*t*4/a.components*a.byteLength;case xn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case En:case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fs:case Bs:return Math.max(e,16)*Math.max(t,8)/4;case Ns:case Os:return Math.max(e,8)*Math.max(t,8)/2;case zs:case Hs:case ks:case Vs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Rn:case Ws:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case js:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ys:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case qs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Zs:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ks:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Js:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case $s:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Qs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case no:case so:case oo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case lo:case ho:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Cn:case uo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nd(e){switch(e){case Ai:case ah:return{byteLength:1,components:1};case Oa:case nh:case Zi:return{byteLength:2,components:1};case Eo:case yo:return{byteLength:2,components:4};case qi:case So:case Xi:return{byteLength:4,components:1};case sh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);function Nh(){let e=null,t=!1,i=null,r=null;function a(n,l){r=e.requestAnimationFrame(a),i(n,l)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Fd(e){let t=new WeakMap;function i(h,u){let d=h.array,m=h.usage,v=d.byteLength,c=e.createBuffer();e.bindBuffer(u,c),e.bufferData(u,d,m),h.onUploadCallback();let M;if(d instanceof Float32Array)M=e.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=e.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?M=e.HALF_FLOAT:M=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=e.SHORT;else if(d instanceof Uint32Array)M=e.UNSIGNED_INT;else if(d instanceof Int32Array)M=e.INT;else if(d instanceof Int8Array)M=e.BYTE;else if(d instanceof Uint8Array)M=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:c,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,u,d){let m=u.array,v=u.updateRanges;if(e.bindBuffer(d,h),v.length===0)e.bufferSubData(d,0,m);else{v.sort((M,E)=>M.start-E.start);let c=0;for(let M=1;M<v.length;M++){let E=v[c],b=v[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++c,v[c]=b)}v.length=c+1;for(let M=0,E=v.length;M<E;M++){let b=v[M];e.bufferSubData(d,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function n(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(e.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let d=t.get(h);if(d===void 0)t.set(h,i(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,u),d.version=h.version}}return{get:a,remove:n,update:l}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ic=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ac=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sc=`#define PI 3.141592653589793
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
} // validated`,oc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lc=`vec3 transformedNormal = objectNormal;
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
#endif`,hc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pc="gl_FragColor = linearToOutputTexel( gl_FragColor );",fc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mc=`#ifdef USE_ENVMAP
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
#endif`,gc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_c=`#ifdef USE_ENVMAP
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
#endif`,vc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mc=`#ifdef USE_ENVMAP
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
#endif`,xc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ec=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bc=`#ifdef USE_GRADIENTMAP
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
}`,Tc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ac=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rc=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cc=`#ifdef USE_ENVMAP
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
#endif`,Pc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uc=`PhysicalMaterial material;
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
#endif`,Nc=`uniform sampler2D dfgLUT;
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
}`,Fc=`
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
#endif`,Oc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zc=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yc=`#if defined( USE_POINTS_UV )
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
#endif`,qc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$c=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qc=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,rf=`#define MATCAP
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
}`,af=`#define NORMAL
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
}`,nf=`#define NORMAL
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
}`,sf=`#define PHONG
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
}`,of=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,hf=`#define STANDARD
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
}`,uf=`#define TOON
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
}`,df=`#define TOON
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
}`,cf=`uniform float size;
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
}`,pf=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:Hd,alphatest_fragment:Gd,alphatest_pars_fragment:kd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:jd,begin_vertex:Yd,beginnormal_vertex:qd,bsdfs:Zd,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ec,clipping_planes_vertex:tc,color_fragment:ic,color_pars_fragment:rc,color_pars_vertex:ac,color_vertex:nc,common:sc,cube_uv_reflection_fragment:oc,defaultnormal_vertex:lc,displacementmap_pars_vertex:hc,displacementmap_vertex:uc,emissivemap_fragment:dc,emissivemap_pars_fragment:cc,colorspace_fragment:pc,colorspace_pars_fragment:fc,envmap_fragment:mc,envmap_common_pars_fragment:gc,envmap_pars_fragment:_c,envmap_pars_vertex:vc,envmap_physical_pars_fragment:Cc,envmap_vertex:Mc,fog_vertex:xc,fog_pars_vertex:Sc,fog_fragment:Ec,fog_pars_fragment:yc,gradientmap_pars_fragment:bc,lightmap_pars_fragment:Tc,lights_lambert_fragment:wc,lights_lambert_pars_fragment:Ac,lights_pars_begin:Rc,lights_toon_fragment:Pc,lights_toon_pars_fragment:Ic,lights_phong_fragment:Dc,lights_phong_pars_fragment:Lc,lights_physical_fragment:Uc,lights_physical_pars_fragment:Nc,lights_fragment_begin:Fc,lights_fragment_maps:Oc,lights_fragment_end:Bc,lightprobes_pars_fragment:zc,logdepthbuf_fragment:Hc,logdepthbuf_pars_fragment:Gc,logdepthbuf_pars_vertex:kc,logdepthbuf_vertex:Vc,map_fragment:Wc,map_pars_fragment:Xc,map_particle_fragment:jc,map_particle_pars_fragment:Yc,metalnessmap_fragment:qc,metalnessmap_pars_fragment:Zc,morphinstance_vertex:Kc,morphcolor_vertex:Jc,morphnormal_vertex:$c,morphtarget_pars_vertex:Qc,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:ip,normal_pars_fragment:rp,normal_pars_vertex:ap,normal_vertex:np,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:cp,premultiplied_alpha_fragment:pp,project_vertex:fp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:xp,shadowmap_vertex:Sp,shadowmask_pars_fragment:Ep,skinbase_vertex:yp,skinning_pars_vertex:bp,skinning_vertex:Tp,skinnormal_vertex:wp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Ip,transmission_pars_fragment:Dp,uv_pars_fragment:Lp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:Hp,cube_vert:Gp,cube_frag:kp,depth_vert:Vp,depth_frag:Wp,distance_vert:Xp,distance_frag:jp,equirect_vert:Yp,equirect_frag:qp,linedashed_vert:Zp,linedashed_frag:Kp,meshbasic_vert:Jp,meshbasic_frag:$p,meshlambert_vert:Qp,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:rf,meshnormal_vert:af,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:hf,meshtoon_vert:uf,meshtoon_frag:df,points_vert:cf,points_frag:pf,shadow_vert:ff,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vi={basic:{uniforms:_i([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:_i([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:_i([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:_i([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:_i([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new it(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:_i([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:_i([be.points,be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:_i([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:_i([be.common,be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:_i([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:_i([be.sprite,be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:_i([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:_i([be.lights,be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Vi.physical={uniforms:_i([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var _n={r:0,b:0,g:0},vf=new Bt,Fh=new st;Fh.set(-1,0,0,0,1,0,0,0,1);function Mf(e,t,i,r,a,n){let l=new it(0),h=a===!0?0:1,u,d,m=null,v=0,c=null;function M(C){let H=C.isScene===!0?C.background:null;if(H&&H.isTexture){let s=C.backgroundBlurriness>0;H=t.get(H,s)}return H}function E(C){let H=!1,s=M(C);s===null?x(l,h):s&&s.isColor&&(x(s,1),H=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(C,H){let s=M(H);s&&(s.isCubeTexture||s.mapping===On)?(d===void 0&&(d=new Yt(new Bn(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ca(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=s,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(H.backgroundRotation)).transpose(),s.isCubeTexture&&s.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Fh),d.material.toneMapped=gt.getTransfer(s.colorSpace)!==wt,(m!==s||v!==s.version||c!==e.toneMapping)&&(d.material.needsUpdate=!0,m=s,v=s.version,c=e.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):s&&s.isTexture&&(u===void 0&&(u=new Yt(new Do(2,2),new Ki({name:"BackgroundMaterial",uniforms:ca(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=s,u.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,u.material.toneMapped=gt.getTransfer(s.colorSpace)!==wt,s.matrixAutoUpdate===!0&&s.updateMatrix(),u.material.uniforms.uvTransform.value.copy(s.matrix),(m!==s||v!==s.version||c!==e.toneMapping)&&(u.material.needsUpdate=!0,m=s,v=s.version,c=e.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function x(C,H){C.getRGB(_n,Ih(e)),i.buffers.color.setClear(_n.r,_n.g,_n.b,H,n)}function f(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,H=1){l.set(C),h=H,x(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,x(l,h)},render:E,addToRenderList:b,dispose:f}}function xf(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,l=!1;function h(N,B,J,F,k){let te=!1,j=v(N,F,J,B);n!==j&&(n=j,d(n.object)),te=M(N,F,J,k),te&&E(N,F,J,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(te||l)&&(l=!1,s(N,B,J,F),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function u(){return e.createVertexArray()}function d(N){return e.bindVertexArray(N)}function m(N){return e.deleteVertexArray(N)}function v(N,B,J,F){let k=F.wireframe===!0,te=r[B.id];te===void 0&&(te={},r[B.id]=te);let j=N.isInstancedMesh===!0?N.id:0,_e=te[j];_e===void 0&&(_e={},te[j]=_e);let Z=_e[J.id];Z===void 0&&(Z={},_e[J.id]=Z);let $=Z[k];return $===void 0&&($=c(u()),Z[k]=$),$}function c(N){let B=[],J=[],F=[];for(let k=0;k<i;k++)B[k]=0,J[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:F,object:N,attributes:{},index:null}}function M(N,B,J,F){let k=n.attributes,te=B.attributes,j=0,_e=J.getAttributes();for(let Z in _e)if(_e[Z].location>=0){let $=k[Z],re=te[Z];if(re===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;j++}return n.attributesNum!==j||n.index!==F}function E(N,B,J,F){let k={},te=B.attributes,j=0,_e=J.getAttributes();for(let Z in _e)if(_e[Z].location>=0){let $=te[Z];$===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let re={};re.attribute=$,$&&$.data&&(re.data=$.data),k[Z]=re,j++}n.attributes=k,n.attributesNum=j,n.index=F}function b(){let N=n.newAttributes;for(let B=0,J=N.length;B<J;B++)N[B]=0}function x(N){f(N,0)}function f(N,B){let J=n.newAttributes,F=n.enabledAttributes,k=n.attributeDivisors;J[N]=1,F[N]===0&&(e.enableVertexAttribArray(N),F[N]=1),k[N]!==B&&(e.vertexAttribDivisor(N,B),k[N]=B)}function C(){let N=n.newAttributes,B=n.enabledAttributes;for(let J=0,F=B.length;J<F;J++)B[J]!==N[J]&&(e.disableVertexAttribArray(J),B[J]=0)}function H(N,B,J,F,k,te,j){j===!0?e.vertexAttribIPointer(N,B,J,k,te):e.vertexAttribPointer(N,B,J,F,k,te)}function s(N,B,J,F){b();let k=F.attributes,te=J.getAttributes(),j=B.defaultAttributeValues;for(let _e in te){let Z=te[_e];if(Z.location>=0){let $=k[_e];if($===void 0&&(_e==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),_e==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){let re=$.normalized,rt=$.itemSize,ze=t.get($);if(ze===void 0)continue;let Rt=ze.buffer,ke=ze.type,K=ze.bytesPerElement,he=ke===e.INT||ke===e.UNSIGNED_INT||$.gpuType===So;if($.isInterleavedBufferAttribute){let pe=$.data,Ve=pe.stride,We=$.offset;if(pe.isInstancedInterleavedBuffer){for(let we=0;we<Z.locationSize;we++)f(Z.location+we,pe.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<Z.locationSize;we++)x(Z.location+we);e.bindBuffer(e.ARRAY_BUFFER,Rt);for(let we=0;we<Z.locationSize;we++)H(Z.location+we,rt/Z.locationSize,ke,re,Ve*K,(We+rt/Z.locationSize*we)*K,he)}else{if($.isInstancedBufferAttribute){for(let pe=0;pe<Z.locationSize;pe++)f(Z.location+pe,$.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pe=0;pe<Z.locationSize;pe++)x(Z.location+pe);e.bindBuffer(e.ARRAY_BUFFER,Rt);for(let pe=0;pe<Z.locationSize;pe++)H(Z.location+pe,rt/Z.locationSize,ke,re,rt*K,rt/Z.locationSize*pe*K,he)}}else if(j!==void 0){let re=j[_e];if(re!==void 0)switch(re.length){case 2:e.vertexAttrib2fv(Z.location,re);break;case 3:e.vertexAttrib3fv(Z.location,re);break;case 4:e.vertexAttrib4fv(Z.location,re);break;default:e.vertexAttrib1fv(Z.location,re)}}}}C()}function T(){p();for(let N in r){let B=r[N];for(let J in B){let F=B[J];for(let k in F){let te=F[k];for(let j in te)m(te[j].object),delete te[j];delete F[k]}}delete r[N]}}function R(N){if(r[N.id]===void 0)return;let B=r[N.id];for(let J in B){let F=B[J];for(let k in F){let te=F[k];for(let j in te)m(te[j].object),delete te[j];delete F[k]}}delete r[N.id]}function w(N){for(let B in r){let J=r[B];for(let F in J){let k=J[F];if(k[N.id]===void 0)continue;let te=k[N.id];for(let j in te)m(te[j].object),delete te[j];delete k[N.id]}}}function o(N){for(let B in r){let J=r[B],F=N.isInstancedMesh===!0?N.id:0,k=J[F];if(k!==void 0){for(let te in k){let j=k[te];for(let _e in j)m(j[_e].object),delete j[_e];delete k[te]}delete J[F],Object.keys(J).length===0&&delete r[B]}}}function p(){V(),l=!0,n!==a&&(n=a,d(n.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:p,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:o,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:x,disableUnusedAttributes:C}}function Sf(e,t,i){let r;function a(u){r=u}function n(u,d){e.drawArrays(r,u,d),i.update(d,r,1)}function l(u,d,m){m!==0&&(e.drawArraysInstanced(r,u,d,m),i.update(d,r,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,d,0,m);let v=0;for(let c=0;c<m;c++)v+=d[c];i.update(v,r,1)}this.setMode=a,this.render=n,this.renderInstances=l,this.renderMultiDraw=h}function Ef(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function l(w){return!(w!==Bi&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(w){let o=w===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ai&&w!==Xi&&!o&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function u(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp",m=u(d);m!==d&&(Ke("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);let v=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),C=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),H=e.getParameter(e.MAX_VARYING_VECTORS),s=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:c,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:C,maxVaryings:H,maxFragmentUniforms:s,maxSamples:T,samples:R}}function yf(e){let t=this,i=null,r=0,a=!1,n=!1,l=new nr,h=new st,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,c){let M=v.length!==0||c||r!==0||a;return a=c,r=v.length,M},this.beginShadows=function(){n=!0,m(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(v,c){i=m(v,c,0)},this.setState=function(v,c,M){let E=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,f=e.get(v);if(!a||E===null||E.length===0||n&&!x)n?m(null):d();else{let C=n?0:r,H=C*4,s=f.clippingState||null;u.value=s,s=m(E,c,H,M);for(let T=0;T!==H;++T)s[T]=i[T];f.clippingState=s,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function d(){u.value!==i&&(u.value=i,u.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(v,c,M,E){let b=v!==null?v.length:0,x=null;if(b!==0){if(x=u.value,E!==!0||x===null){let f=M+b*4,C=c.matrixWorldInverse;h.getNormalMatrix(C),(x===null||x.length<f)&&(x=new Float32Array(f));for(let H=0,s=M;H!==b;++H,s+=4)l.copy(v[H]).applyMatrix4(C,h),l.normal.toArray(x,s),x[s+3]=l.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}var ta=4,bf=6,Tf=20,wf=256,Pa=new Lo,yl=new it,vs=null,Ms=0,xs=0,Ss=!1,Af=new z,Tr=new z,bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:l=Af}=a;vs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,r,h,l),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vs,Ms,xs),this._renderer.xr.enabled=Ss,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Zi,format:Bi,colorSpace:Pn,depthBuffer:!1},r=Tl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Rf(a)),this._blurMaterial=Pf(a,e,t),this._ggxMaterial=Cf(a,e,t)}return r}_compileMaterial(e){let t=new Yt(new bi,e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r,a){let n=new Ii(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(yl),u.toneMapping=Yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Bn,new Un({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,c=v.material,M=!1,E=e.background;E?E.isColor&&(c.color.copy(E),e.background=null,M=!0):(c.color.copy(yl),M=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(n.up.set(0,l[b],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+h[b],a.y,a.z)):x===1?(n.up.set(0,0,l[b]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+h[b],a.z)):(n.up.set(0,l[b],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+h[b]));let f=this._cubeSize;Kr(r,x*f,b>2?f:0,f,f),u.setRenderTarget(r),M&&u.render(v,n),u.render(e,n)}u.toneMapping=m,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Pr||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let l=a.uniforms;l.envMap.value=e;let h=this._cubeSize;Kr(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(n,Pa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,l=this._lodMeshes[i];l.material=n;let h=n.uniforms,u=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-d*d),v=u*1.25,c=m*v,{_lodMax:M}=this,E=this._sizeLods[i],b=3*E*(i>M-ta?i-M+ta:0),x=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=c,h.mipInt.value=M-t,Kr(a,b,x,3*E,2*E),r.setRenderTarget(a),r.render(l,Pa),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=M-i,Kr(e,b,x,3*E,2*E),r.setRenderTarget(e),r.render(l,Pa)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,l=this._blurMaterial,h=this._lodMeshes[r];h.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=a,u.mipInt.value=this._lodMax-i;let d=this._sizeLods[r],m=3*d*(r>this._lodMax-ta?r-this._lodMax+ta:0),v=4*(this._cubeSize-d);Kr(t,m,v,3*d,2*d),n.setRenderTarget(t),n.render(h,Pa)}};function Rf(e){let t=[],i=[],r=e,a=e-ta+1+bf;for(let n=0;n<a;n++){let l=Math.pow(2,r);t.push(l);let h=1/(l-2),u=-h,d=1+h,m=[u,u,d,u,d,d,u,u,d,d,u,d],v=6,c=6,M=3,E=new Float32Array(M*c*v),b=new Float32Array(M*c*v);for(let f=0;f<v;f++){let C=f%3*2/3-1,H=f>2?0:-1,s=[C,H,0,C+2/3,H,0,C+2/3,H+1,0,C,H,0,C+2/3,H+1,0,C,H+1,0];E.set(s,M*c*f);for(let T=0;T<c;T++){let R=m[T*2]*2-1,w=m[T*2+1]*2-1;f===0?Tr.set(1,w,R):f===1?Tr.set(-R,1,-w):f===2?Tr.set(-R,w,1):f===3?Tr.set(-1,w,-R):f===4?Tr.set(-R,-1,w):Tr.set(R,w,-1),Tr.toArray(b,(f*c+T)*M)}}let x=new bi;x.setAttribute("position",new Di(E,M)),x.setAttribute("outputDirection",new Di(b,M)),i.push(new Yt(x,null)),r>ta&&r--}return{lodMeshes:i,sizeLods:t}}function Tl(e,t,i){let r=new zi(e,t,i);return r.texture.mapping=On,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Kr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Cf(e,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zn(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Pf(e,t,i){return new Ki({name:"SphericalGaussianBlur",defines:{SAMPLES:Tf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zn(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function wl(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zn(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Al(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function zn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oh=class extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bn(5,5,5),a=new Ki({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yi,blending:or});a.uniforms.tEquirect.value=t;let n=new Yt(r,a),l=t.minFilter;return t.minFilter===wr&&(t.minFilter=hi),new Cd(1,10,this).update(e,n),t.minFilter=l,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function If(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,M=!1){return c==null?null:M?l(c):n(c)}function n(c){if(c&&c.isTexture){let M=c.mapping;if(M===Vn||M===Wn)if(t.has(c)){let E=t.get(c).texture;return h(E,c.mapping)}else{let E=c.image;if(E&&E.height>0){let b=new Oh(E.height);return b.fromEquirectangularTexture(e,c),t.set(c,b),c.addEventListener("dispose",d),h(b.texture,c.mapping)}else return null}}return c}function l(c){if(c&&c.isTexture){let M=c.mapping,E=M===Vn||M===Wn,b=M===Pr||M===ua;if(E||b){let x=i.get(c),f=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return r===null&&(r=new bl(e)),x=E?r.fromEquirectangular(c,x):r.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,i.set(c,x),x.texture;if(x!==void 0)return x.texture;{let C=c.image;return E&&C&&C.height>0||b&&C&&u(C)?(r===null&&(r=new bl(e)),x=E?r.fromEquirectangular(c):r.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,i.set(c,x),c.addEventListener("dispose",m),x.texture):null}}}return c}function h(c,M){return M===Vn?c.mapping=Pr:M===Wn&&(c.mapping=ua),c}function u(c){let M=0,E=6;for(let b=0;b<E;b++)c[b]!==void 0&&M++;return M===E}function d(c){let M=c.target;M.removeEventListener("dispose",d);let E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function m(c){let M=c.target;M.removeEventListener("dispose",m);let E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:v}}function Df(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&ra("WebGLRenderer: "+r+" extension not supported."),a}}}function Lf(e,t,i,r){let a={},n=new WeakMap;function l(v){let c=v.target;c.index!==null&&t.remove(c.index);for(let E in c.attributes)t.remove(c.attributes[E]);c.removeEventListener("dispose",l),delete a[c.id];let M=n.get(c);M&&(t.remove(M),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function h(v,c){return a[c.id]===!0||(c.addEventListener("dispose",l),a[c.id]=!0,i.memory.geometries++),c}function u(v){let c=v.attributes;for(let M in c)t.update(c[M],e.ARRAY_BUFFER)}function d(v){let c=[],M=v.index,E=v.attributes.position,b=0;if(E===void 0)return;if(M!==null){let C=M.array;b=M.version;for(let H=0,s=C.length;H<s;H+=3){let T=C[H+0],R=C[H+1],w=C[H+2];c.push(T,R,R,w,w,T)}}else{let C=E.array;b=E.version;for(let H=0,s=C.length/3-1;H<s;H+=3){let T=H+0,R=H+1,w=H+2;c.push(T,R,R,w,w,T)}}let x=new(E.count>=65535?_h:gh)(c,1);x.version=b;let f=n.get(v);f&&t.remove(f),n.set(v,x)}function m(v){let c=n.get(v);if(c){let M=v.index;M!==null&&c.version<M.version&&d(v)}else d(v);return n.get(v)}return{get:h,update:u,getWireframeAttribute:m}}function Uf(e,t,i){let r;function a(v){r=v}let n,l;function h(v){n=v.type,l=v.bytesPerElement}function u(v,c){e.drawElements(r,c,n,v*l),i.update(c,r,1)}function d(v,c,M){M!==0&&(e.drawElementsInstanced(r,c,n,v*l,M),i.update(c,r,M))}function m(v,c,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,v,0,M);let E=0;for(let b=0;b<M;b++)E+=c[b];i.update(E,r,1)}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=m}function Nf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,l,h){switch(i.calls++,l){case e.TRIANGLES:i.triangles+=h*(n/3);break;case e.LINES:i.lines+=h*(n/2);break;case e.LINE_STRIP:i.lines+=h*(n-1);break;case e.LINE_LOOP:i.lines+=h*n;break;case e.POINTS:i.points+=h*n;break;default:Mt("WebGLInfo: Unknown draw mode:",l);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Ff(e,t,i){let r=new WeakMap,a=new Wt;function n(l,h,u){let d=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0,c=r.get(h);if(c===void 0||c.count!==v){let M=function(){o.dispose(),r.delete(h),h.removeEventListener("dispose",M)};c!==void 0&&c.texture.dispose();let E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,f=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],H=h.morphAttributes.color||[],s=0;E===!0&&(s=1),b===!0&&(s=2),x===!0&&(s=3);let T=h.attributes.position.count*s,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*R*4*v),o=new ph(w,T,R,v);o.type=Xi,o.needsUpdate=!0;let p=s*4;for(let V=0;V<v;V++){let N=f[V],B=C[V],J=H[V],F=T*R*4*V;for(let k=0;k<N.count;k++){let te=k*p;E===!0&&(a.fromBufferAttribute(N,k),w[F+te+0]=a.x,w[F+te+1]=a.y,w[F+te+2]=a.z,w[F+te+3]=0),b===!0&&(a.fromBufferAttribute(B,k),w[F+te+4]=a.x,w[F+te+5]=a.y,w[F+te+6]=a.z,w[F+te+7]=0),x===!0&&(a.fromBufferAttribute(J,k),w[F+te+8]=a.x,w[F+te+9]=a.y,w[F+te+10]=a.z,w[F+te+11]=J.itemSize===4?a.w:1)}}c={count:v,texture:o,size:new Xe(T,R)},r.set(h,c),h.addEventListener("dispose",M)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(e,"morphTexture",l.morphTexture,i);else{let M=0;for(let b=0;b<d.length;b++)M+=d[b];let E=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(e,"morphTargetBaseInfluence",E),u.getUniforms().setValue(e,"morphTargetInfluences",d)}u.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function Of(e,t,i,r,a){let n=new WeakMap;function l(d){let m=a.render.frame,v=d.geometry,c=t.get(d,v);if(n.get(c)!==m&&(t.update(c),n.set(c,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),n.get(d)!==m&&(i.update(d.instanceMatrix,e.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,e.ARRAY_BUFFER),n.set(d,m))),d.isSkinnedMesh){let M=d.skeleton;n.get(M)!==m&&(M.update(),n.set(M,m))}return c}function h(){n=new WeakMap}function u(d){let m=d.target;m.removeEventListener("dispose",u),r.releaseStatesOfObject(m),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:l,dispose:h}}var Bf={[Jl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[ih]:"NEUTRAL_TONE_MAPPING",[eh]:"CUSTOM_TONE_MAPPING"};function zf(e,t,i,r,a,n){let l=new zi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,u=null,d=new bi;d.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $t([0,2,0,0,2,0],2));let m=new Ed({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Yt(d,m),c=new Lo(-1,1,1,-1,0,1),M=null,E=null,b=!1,x,f=null,C=[],H=!1;this.setSize=function(s,T){l.setSize(s,T),h!==null&&h.setSize(s,T),u!==null&&u.setSize(s,T);for(let R=0;R<C.length;R++){let w=C[R];w.setSize&&w.setSize(s,T)}},this.setEffects=function(s){C=s,H=C.length>0&&C[0].isRenderPass===!0;let T=l.width,R=l.height;C.length>0&&h===null&&(h=new zi(T,R,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),u=new zi(T,R,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<C.length;w++){let o=C[w];o.setSize&&o.setSize(T,R)}},this.begin=function(s,T){if(b||s.toneMapping===Yi&&C.length===0)return!1;if(f=T,T!==null){let R=T.width,w=T.height;(l.width!==R||l.height!==w)&&this.setSize(R,w)}return H===!1&&s.setRenderTarget(l),x=s.toneMapping,s.toneMapping=Yi,!0},this.hasRenderPass=function(){return H},this.end=function(s,T){s.toneMapping=x,b=!0;let R=l,w=h;for(let o=0;o<C.length;o++){let p=C[o];p.enabled!==!1&&(p.render(s,w,R,T),p.needsSwap!==!1&&(R=w,w=w===h?u:h))}if(M!==s.outputColorSpace||E!==s.toneMapping){M=s.outputColorSpace,E=s.toneMapping,m.defines={},gt.getTransfer(M)===wt&&(m.defines.SRGB_TRANSFER="");let o=Bf[E];o&&(m.defines[o]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=R.texture,s.setRenderTarget(f),s.render(v,c),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),u!==null&&u.dispose(),d.dispose(),m.dispose()}}var Bh=new Li,_o=new Ha(1,1),zh=new ph,Hh=new Yu,Gh=new bh,Rl=[],Cl=[],Pl=new Float32Array(16),Il=new Float32Array(9),Dl=new Float32Array(4);function fa(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Rl[a];if(n===void 0&&(n=new Float32Array(a),Rl[a]=n),t!==0){r.toArray(n,0);for(let l=1,h=0;l!==t;++l)h+=i,e[l].toArray(n,h)}return n}function Qt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ei(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Hn(e,t){let i=Cl[t];i===void 0&&(i=new Int32Array(t),Cl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Hf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Gf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qt(i,t))return;e.uniform2fv(this.addr,t),ei(i,t)}}function kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Qt(i,t))return;e.uniform3fv(this.addr,t),ei(i,t)}}function Vf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qt(i,t))return;e.uniform4fv(this.addr,t),ei(i,t)}}function Wf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Qt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ei(i,t)}else{if(Qt(i,r))return;Dl.set(r),e.uniformMatrix2fv(this.addr,!1,Dl),ei(i,r)}}function Xf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Qt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ei(i,t)}else{if(Qt(i,r))return;Il.set(r),e.uniformMatrix3fv(this.addr,!1,Il),ei(i,r)}}function jf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Qt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ei(i,t)}else{if(Qt(i,r))return;Pl.set(r),e.uniformMatrix4fv(this.addr,!1,Pl),ei(i,r)}}function Yf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function qf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qt(i,t))return;e.uniform2iv(this.addr,t),ei(i,t)}}function Zf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Qt(i,t))return;e.uniform3iv(this.addr,t),ei(i,t)}}function Kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qt(i,t))return;e.uniform4iv(this.addr,t),ei(i,t)}}function Jf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function $f(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Qt(i,t))return;e.uniform2uiv(this.addr,t),ei(i,t)}}function Qf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Qt(i,t))return;e.uniform3uiv(this.addr,t),ei(i,t)}}function em(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Qt(i,t))return;e.uniform4uiv(this.addr,t),ei(i,t)}}function tm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(_o.compareFunction=i.isReversedDepthBuffer()?Ro:Ao,n=_o):n=Bh,i.setTexture2D(t||n,a)}function im(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Hh,a)}function rm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Gh,a)}function am(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||zh,a)}function nm(e){switch(e){case 5126:return Hf;case 35664:return Gf;case 35665:return kf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return jf;case 5124:case 35670:return Yf;case 35667:case 35671:return qf;case 35668:case 35672:return Zf;case 35669:case 35673:return Kf;case 5125:return Jf;case 36294:return $f;case 36295:return Qf;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return am}}function sm(e,t){e.uniform1fv(this.addr,t)}function om(e,t){let i=fa(t,this.size,2);e.uniform2fv(this.addr,i)}function lm(e,t){let i=fa(t,this.size,3);e.uniform3fv(this.addr,i)}function hm(e,t){let i=fa(t,this.size,4);e.uniform4fv(this.addr,i)}function um(e,t){let i=fa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function dm(e,t){let i=fa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function cm(e,t){let i=fa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function pm(e,t){e.uniform1iv(this.addr,t)}function fm(e,t){e.uniform2iv(this.addr,t)}function mm(e,t){e.uniform3iv(this.addr,t)}function gm(e,t){e.uniform4iv(this.addr,t)}function _m(e,t){e.uniform1uiv(this.addr,t)}function vm(e,t){e.uniform2uiv(this.addr,t)}function Mm(e,t){e.uniform3uiv(this.addr,t)}function xm(e,t){e.uniform4uiv(this.addr,t)}function Sm(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Qt(r,n)||(e.uniform1iv(this.addr,n),ei(r,n));let l;this.type===e.SAMPLER_2D_SHADOW?l=_o:l=Bh;for(let h=0;h!==a;++h)i.setTexture2D(t[h]||l,n[h])}function Em(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Qt(r,n)||(e.uniform1iv(this.addr,n),ei(r,n));for(let l=0;l!==a;++l)i.setTexture3D(t[l]||Hh,n[l])}function ym(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Qt(r,n)||(e.uniform1iv(this.addr,n),ei(r,n));for(let l=0;l!==a;++l)i.setTextureCube(t[l]||Gh,n[l])}function bm(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Qt(r,n)||(e.uniform1iv(this.addr,n),ei(r,n));for(let l=0;l!==a;++l)i.setTexture2DArray(t[l]||zh,n[l])}function Tm(e){switch(e){case 5126:return sm;case 35664:return om;case 35665:return lm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return cm;case 5124:case 35670:return pm;case 35667:case 35671:return fm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return vm;case 36295:return Mm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return bm}}var wm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nm(t.type)}},Am=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}},Rm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let l=r[a];l.setValue(e,t[l.id],i)}}},Es=/(\w+)(\])?(\[|\.)?/g;function Ll(e,t){e.seq.push(t),e.map[t.id]=t}function Cm(e,t,i){let r=e.name,a=r.length;for(Es.lastIndex=0;;){let n=Es.exec(r),l=Es.lastIndex,h=n[1],u=n[2]==="]",d=n[3];if(u&&(h=h|0),d===void 0||d==="["&&l+2===a){Ll(i,d===void 0?new wm(h,e,t):new Am(h,e,t));break}else{let m=i.map[h];m===void 0&&(m=new Rm(h),Ll(i,m)),i=m}}}var An=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let l=e.getActiveUniform(t,n),h=e.getUniformLocation(t,l.name);Cm(l,h,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let l=t[a],h=i[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Ul(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Pm=37297,Im=0;function Dm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let l=a;l<n;l++){let h=l+1;r.push(`${h===t?">":" "} ${h}: ${i[l]}`)}return r.join(`
`)}var Nl=new st;function Lm(e){gt._getMatrix(Nl,gt.workingColorSpace,e);let t=`mat3( ${Nl.elements.map(i=>i.toFixed(4))} )`;switch(gt.getTransfer(e)){case In:return[t,"LinearTransferOETF"];case wt:return[t,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Fl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let l=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Dm(e.getShaderSource(t),l)}else return a}function Um(e,t){let i=Lm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Nm={[Jl]:"Linear",[$l]:"Reinhard",[Ql]:"Cineon",[xo]:"ACESFilmic",[th]:"AgX",[ih]:"Neutral",[eh]:"Custom"};function Fm(e,t){let i=Nm[t];return i===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var vn=new z;function Om(){gt.getLuminanceCoefficients(vn);let e=vn.x.toFixed(4),t=vn.y.toFixed(4),i=vn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function zm(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Hm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),l=n.name,h=1;n.type===e.FLOAT_MAT2&&(h=2),n.type===e.FLOAT_MAT3&&(h=3),n.type===e.FLOAT_MAT4&&(h=4),i[l]={type:n.type,location:e.getAttribLocation(t,l),locationSize:h}}return i}function La(e){return e!==""}function Ol(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(e){return e.replace(Gm,Vm)}var km=new Map;function Vm(e,t){let i=dt[t];if(i===void 0){let r=km.get(t);if(r!==void 0)i=dt[r],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vo(i)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(e){return e.replace(Wm,Xm)}function Xm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Hl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var jm={[Ua]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function Ym(e){return jm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qm={[Pr]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[On]:"ENVMAP_TYPE_CUBE_UV"};function Zm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":qm[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Km={[ua]:"ENVMAP_MODE_REFRACTION"};function Jm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Km[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $m={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[Tu]:"ENVMAP_BLENDING_ADD"};function Qm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":$m[e.combine]||"ENVMAP_BLENDING_NONE"}function eg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function tg(e,t,i,r){let a=e.getContext(),n=i.defines,l=i.vertexShader,h=i.fragmentShader,u=Ym(i),d=Zm(i),m=Jm(i),v=Qm(i),c=eg(i),M=Bm(i),E=zm(n),b=a.createProgram(),x,f,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(La).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(La).join(`
`),f.length>0&&(f+=`
`)):(x=[Hl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),f=[Hl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?Fm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Um("linearToOutputTexel",i.outputColorSpace),Om(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(La).join(`
`)),l=vo(l),l=Ol(l,i),l=Bl(l,i),h=vo(h),h=Ol(h,i),h=Bl(h,i),l=zl(l),h=zl(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",i.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let H=C+x+l,s=C+f+h,T=Ul(a,a.VERTEX_SHADER,H),R=Ul(a,a.FRAGMENT_SHADER,s);a.attachShader(b,T),a.attachShader(b,R),i.index0AttributeName!==void 0?a.bindAttribLocation(b,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function w(N){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(b)||"",J=a.getShaderInfoLog(T)||"",F=a.getShaderInfoLog(R)||"",k=B.trim(),te=J.trim(),j=F.trim(),_e=!0,Z=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(_e=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,b,T,R);else{let $=Fl(a,T,"vertex"),re=Fl(a,R,"fragment");Mt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+$+`
`+re)}else k!==""?Ke("WebGLProgram: Program Info Log:",k):(te===""||j==="")&&(Z=!1);Z&&(N.diagnostics={runnable:_e,programLog:k,vertexShader:{log:te,prefix:x},fragmentShader:{log:j,prefix:f}})}a.deleteShader(T),a.deleteShader(R),o=new An(a,b),p=Hm(a,b)}let o;this.getUniforms=function(){return o===void 0&&w(this),o};let p;this.getAttributes=function(){return p===void 0&&w(this),p};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(b,Pm)),V},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=R,this}var ig=0,rg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ag(e),t.set(e,i)),i}},ag=class{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}};function ng(e){return e===Ir||e===Rn||e===Cn}function sg(e,t,i,r,a,n){let l=new Po,h=new rg,u=new Set,d=[],m=new Map,v=r.logarithmicDepthBuffer,c=r.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(o){return u.add(o),o===0?"uv":`uv${o}`}function b(o,p,V,N,B,J){let F=N.fog,k=B.geometry,te=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?N.environment:null,j=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,_e=t.get(o.envMap||te,j),Z=_e&&_e.mapping===On?_e.image.height:null,$=M[o.type];o.precision!==null&&(c=r.getMaxPrecision(o.precision),c!==o.precision&&Ke("WebGLProgram.getParameters:",o.precision,"not supported, using",c,"instead."));let re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=re!==void 0?re.length:0,ze=0;k.morphAttributes.position!==void 0&&(ze=1),k.morphAttributes.normal!==void 0&&(ze=2),k.morphAttributes.color!==void 0&&(ze=3);let Rt,ke,K,he;if($){let Vt=Vi[$];Rt=Vt.vertexShader,ke=Vt.fragmentShader}else{Rt=o.vertexShader,ke=o.fragmentShader;let Vt=h.getVertexShaderStage(o),vt=h.getFragmentShaderStage(o);h.update(o,Vt,vt),K=Vt.id,he=vt.id}let pe=e.getRenderTarget(),Ve=e.state.buffers.depth.getReversed(),We=B.isInstancedMesh===!0,we=B.isBatchedMesh===!0,St=!!o.map,mt=!!o.matcap,$e=!!_e,Lt=!!o.aoMap,zt=!!o.lightMap,ui=!!o.bumpMap&&o.wireframe===!1,Pt=!!o.normalMap,Ht=!!o.displacementMap,Gt=!!o.emissiveMap,kt=!!o.metalnessMap,D=!!o.roughnessMap,ti=o.anisotropy>0,_t=o.clearcoat>0,bt=o.dispersion>0,y=o.retroreflectivity>0,S=o.iridescence>0,P=o.sheen>0,Y=o.transmission>0,ee=ti&&!!o.anisotropyMap,ge=_t&&!!o.clearcoatMap,ve=_t&&!!o.clearcoatNormalMap,O=_t&&!!o.clearcoatRoughnessMap,ce=S&&!!o.iridescenceMap,xe=S&&!!o.iridescenceThicknessMap,De=P&&!!o.sheenColorMap,le=P&&!!o.sheenRoughnessMap,Be=!!o.specularMap,He=!!o.specularColorMap,Ze=!!o.specularIntensityMap,xt=Y&&!!o.transmissionMap,U=Y&&!!o.thicknessMap,Q=!!o.gradientMap,ne=!!o.alphaMap,Re=o.alphaTest>0,Le=!!o.alphaHash,oe=!!o.extensions,de=Yi;o.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(de=e.toneMapping);let je={shaderID:$,shaderType:o.type,shaderName:o.name,vertexShader:Rt,fragmentShader:ke,defines:o.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:c,batching:we,batchingColor:we&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,outputColorSpace:pe===null?e.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:St,matcap:mt,envMap:$e,envMapMode:$e&&_e.mapping,envMapCubeUVHeight:Z,aoMap:Lt,lightMap:zt,bumpMap:ui,normalMap:Pt,displacementMap:Ht,emissiveMap:Gt,normalMapObjectSpace:Pt&&o.normalMapType===Ru,normalMapTangentSpace:Pt&&o.normalMapType===co,packedNormalMap:Pt&&o.normalMapType===co&&ng(o.normalMap.format),metalnessMap:kt,roughnessMap:D,anisotropy:ti,anisotropyMap:ee,clearcoat:_t,clearcoatMap:ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:O,dispersion:bt,retroreflection:y,iridescence:S,iridescenceMap:ce,iridescenceThicknessMap:xe,sheen:P,sheenColorMap:De,sheenRoughnessMap:le,specularMap:Be,specularColorMap:He,specularIntensityMap:Ze,transmission:Y,transmissionMap:xt,thicknessMap:U,gradientMap:Q,opaque:o.transparent===!1&&o.blending===Na&&o.alphaToCoverage===!1,alphaMap:ne,alphaTest:Re,alphaHash:Le,combine:o.combine,mapUv:St&&E(o.map.channel),aoMapUv:Lt&&E(o.aoMap.channel),lightMapUv:zt&&E(o.lightMap.channel),bumpMapUv:ui&&E(o.bumpMap.channel),normalMapUv:Pt&&E(o.normalMap.channel),displacementMapUv:Ht&&E(o.displacementMap.channel),emissiveMapUv:Gt&&E(o.emissiveMap.channel),metalnessMapUv:kt&&E(o.metalnessMap.channel),roughnessMapUv:D&&E(o.roughnessMap.channel),anisotropyMapUv:ee&&E(o.anisotropyMap.channel),clearcoatMapUv:ge&&E(o.clearcoatMap.channel),clearcoatNormalMapUv:ve&&E(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&E(o.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(o.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&E(o.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(o.sheenColorMap.channel),sheenRoughnessMapUv:le&&E(o.sheenRoughnessMap.channel),specularMapUv:Be&&E(o.specularMap.channel),specularColorMapUv:He&&E(o.specularColorMap.channel),specularIntensityMapUv:Ze&&E(o.specularIntensityMap.channel),transmissionMapUv:xt&&E(o.transmissionMap.channel),thicknessMapUv:U&&E(o.thicknessMap.channel),alphaMapUv:ne&&E(o.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pt||ti),vertexNormals:!!k.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(St||ne),fog:!!F,useFog:o.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||k.attributes.normal===void 0&&Pt===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ve,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ze,numSunLights:p.sun.length,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numSunLightShadows:p.sunShadowMap.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&V.length>0,shadowMapType:e.shadowMap.type,toneMapping:de,decodeVideoTexture:St&&o.map.isVideoTexture===!0&&gt.getTransfer(o.map.colorSpace)===wt,decodeVideoTextureEmissive:Gt&&o.emissiveMap.isVideoTexture===!0&&gt.getTransfer(o.emissiveMap.colorSpace)===wt,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===Dt,flipSided:o.side===yi,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:oe&&o.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&o.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return je.vertexUv1s=u.has(1),je.vertexUv2s=u.has(2),je.vertexUv3s=u.has(3),u.clear(),je}function x(o){let p=[];if(o.shaderID?p.push(o.shaderID):(p.push(o.customVertexShaderID),p.push(o.customFragmentShaderID)),o.defines!==void 0)for(let V in o.defines)p.push(V),p.push(o.defines[V]);return o.isRawShaderMaterial===!1&&(f(p,o),C(p,o),p.push(e.outputColorSpace)),p.push(o.customProgramCacheKey),p.join()}function f(o,p){o.push(p.precision),o.push(p.outputColorSpace),o.push(p.envMapMode),o.push(p.envMapCubeUVHeight),o.push(p.mapUv),o.push(p.alphaMapUv),o.push(p.lightMapUv),o.push(p.aoMapUv),o.push(p.bumpMapUv),o.push(p.normalMapUv),o.push(p.displacementMapUv),o.push(p.emissiveMapUv),o.push(p.metalnessMapUv),o.push(p.roughnessMapUv),o.push(p.anisotropyMapUv),o.push(p.clearcoatMapUv),o.push(p.clearcoatNormalMapUv),o.push(p.clearcoatRoughnessMapUv),o.push(p.iridescenceMapUv),o.push(p.iridescenceThicknessMapUv),o.push(p.sheenColorMapUv),o.push(p.sheenRoughnessMapUv),o.push(p.specularMapUv),o.push(p.specularColorMapUv),o.push(p.specularIntensityMapUv),o.push(p.transmissionMapUv),o.push(p.thicknessMapUv),o.push(p.combine),o.push(p.fogExp2),o.push(p.sizeAttenuation),o.push(p.morphTargetsCount),o.push(p.morphAttributeCount),o.push(p.numSunLights),o.push(p.numDirLights),o.push(p.numPointLights),o.push(p.numSpotLights),o.push(p.numSpotLightMaps),o.push(p.numHemiLights),o.push(p.numRectAreaLights),o.push(p.numSunLightShadows),o.push(p.numDirLightShadows),o.push(p.numPointLightShadows),o.push(p.numSpotLightShadows),o.push(p.numSpotLightShadowsWithMaps),o.push(p.numLightProbes),o.push(p.shadowMapType),o.push(p.toneMapping),o.push(p.numClippingPlanes),o.push(p.numClipIntersection),o.push(p.depthPacking)}function C(o,p){l.disableAll(),p.instancing&&l.enable(0),p.instancingColor&&l.enable(1),p.instancingMorph&&l.enable(2),p.matcap&&l.enable(3),p.envMap&&l.enable(4),p.normalMapObjectSpace&&l.enable(5),p.normalMapTangentSpace&&l.enable(6),p.clearcoat&&l.enable(7),p.iridescence&&l.enable(8),p.alphaTest&&l.enable(9),p.vertexColors&&l.enable(10),p.vertexAlphas&&l.enable(11),p.vertexUv1s&&l.enable(12),p.vertexUv2s&&l.enable(13),p.vertexUv3s&&l.enable(14),p.vertexTangents&&l.enable(15),p.anisotropy&&l.enable(16),p.alphaHash&&l.enable(17),p.batching&&l.enable(18),p.dispersion&&l.enable(19),p.retroreflection&&l.enable(24),p.batchingColor&&l.enable(20),p.gradientMap&&l.enable(21),p.packedNormalMap&&l.enable(22),p.vertexNormals&&l.enable(23),o.push(l.mask),l.disableAll(),p.fog&&l.enable(0),p.useFog&&l.enable(1),p.flatShading&&l.enable(2),p.logarithmicDepthBuffer&&l.enable(3),p.reversedDepthBuffer&&l.enable(4),p.skinning&&l.enable(5),p.morphTargets&&l.enable(6),p.morphNormals&&l.enable(7),p.morphColors&&l.enable(8),p.premultipliedAlpha&&l.enable(9),p.shadowMapEnabled&&l.enable(10),p.doubleSided&&l.enable(11),p.flipSided&&l.enable(12),p.useDepthPacking&&l.enable(13),p.dithering&&l.enable(14),p.transmission&&l.enable(15),p.sheen&&l.enable(16),p.opaque&&l.enable(17),p.pointsUvs&&l.enable(18),p.decodeVideoTexture&&l.enable(19),p.decodeVideoTextureEmissive&&l.enable(20),p.alphaToCoverage&&l.enable(21),p.numLightProbeGrids>0&&l.enable(22),p.hasPositionAttribute&&l.enable(23),o.push(l.mask)}function H(o){let p=M[o.type],V;if(p){let N=Vi[p];V=Md.clone(N.uniforms)}else V=o.uniforms;return V}function s(o,p){let V=m.get(p);return V!==void 0?++V.usedTimes:(V=new tg(e,p,o,a),d.push(V),m.set(p,V)),V}function T(o){if(--o.usedTimes===0){let p=d.indexOf(o);d[p]=d[d.length-1],d.pop(),m.delete(o.cacheKey),o.destroy()}}function R(o){h.remove(o)}function w(){h.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:H,acquireProgram:s,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:w}}function og(){let e=new WeakMap;function t(l){return e.has(l)}function i(l){let h=e.get(l);return h===void 0&&(h={},e.set(l,h)),h}function r(l){e.delete(l)}function a(l,h,u){e.get(l)[h]=u}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function lg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Gl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function kl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function l(c){let M=0;return c.isInstancedMesh&&(M+=2),c.isSkinnedMesh&&(M+=1),M}function h(c,M,E,b,x,f){let C=e[t];return C===void 0?(C={id:c.id,object:c,geometry:M,material:E,materialVariant:l(c),groupOrder:b,renderOrder:c.renderOrder,z:x,group:f},e[t]=C):(C.id=c.id,C.object=c,C.geometry=M,C.material=E,C.materialVariant=l(c),C.groupOrder=b,C.renderOrder=c.renderOrder,C.z=x,C.group=f),t++,C}function u(c,M,E,b,x,f,C){C.reversedDepth===!0&&(x=-x);let H=h(c,M,E,b,x,f);E.transmission>0?r.push(H):E.transparent===!0?a.push(H):i.push(H)}function d(c,M,E,b,x,f){let C=h(c,M,E,b,x,f);E.transmission>0?r.unshift(C):E.transparent===!0?a.unshift(C):i.unshift(C)}function m(c,M){i.length>1&&i.sort(c||lg),r.length>1&&r.sort(M||Gl),a.length>1&&a.sort(M||Gl)}function v(){for(let c=t,M=e.length;c<M;c++){let E=e[c];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:u,unshift:d,finish:v,sort:m}}function hg(){let e=new WeakMap;function t(r,a){let n=e.get(r),l;return n===void 0?(l=new kl,e.set(r,[l])):a>=n.length?(l=new kl,n.push(l)):l=n[a],l}function i(){e=new WeakMap}return{get:t,dispose:i}}function ug(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new z,color:new it};break;case"SpotLight":i={position:new z,direction:new z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new z,color:new it,distance:0,decay:0};break;case"HemisphereLight":i={direction:new z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":i={color:new it,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=i,i}}}function dg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var cg=0;function pg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function fg(e){let t=new ug,i=dg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new z);let a=new z,n=new Bt,l=new Bt;function h(d){let m=0,v=0,c=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let M=0,E=0,b=0,x=0,f=0,C=0,H=0,s=0,T=0,R=0,w=0,o=0,p=0,V=0;d.sort(pg);for(let B=0,J=d.length;B<J;B++){let F=d[B],k=F.color,te=F.intensity,j=F.distance,_e=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ir?_e=F.shadow.map.texture:_e=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=k.r*te,v+=k.g*te,c+=k.b*te;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(F.sh.coefficients[Z],te);V++}else if(F.isSunLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,re=i.get(F);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[E]=re,r.sunShadowMap[E]=_e;let rt=$.getViewportCount();for(let ze=0;ze<rt;ze++)r.sunShadowMatrix[b+ze]=$.getMatrix(ze),r.sunShadowCascade[b+ze]=$._cascadeData[ze];b+=rt,E++}r.sun[M]=Z,M++}else if(F.isDirectionalLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,re=i.get(F);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,r.directionalShadow[x]=re,r.directionalShadowMap[x]=_e,r.directionalShadowMatrix[x]=F.shadow.matrix,T++}r.directional[x]=Z,x++}else if(F.isSpotLight){let Z=t.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(k).multiplyScalar(te),Z.distance=j,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,r.spot[C]=Z;let $=F.shadow;if(F.map&&(r.spotLightMap[o]=F.map,o++,$.updateMatrices(F),F.castShadow&&p++),r.spotLightMatrix[C]=$.matrix,F.castShadow){let re=i.get(F);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,r.spotShadow[C]=re,r.spotShadowMap[C]=_e,w++}C++}else if(F.isRectAreaLight){let Z=t.get(F);Z.color.copy(k).multiplyScalar(te),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),r.rectArea[H]=Z,H++}else if(F.isPointLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let $=F.shadow,re=i.get(F);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,re.shadowCameraNear=$.camera.near,re.shadowCameraFar=$.camera.far,r.pointShadow[f]=re,r.pointShadowMap[f]=_e,r.pointShadowMatrix[f]=F.shadow.matrix,R++}r.point[f]=Z,f++}else if(F.isHemisphereLight){let Z=t.get(F);Z.skyColor.copy(F.color).multiplyScalar(te),Z.groundColor.copy(F.groundColor).multiplyScalar(te),r.hemi[s]=Z,s++}}H>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=c;let N=r.hash;(N.sunLength!==M||N.directionalLength!==x||N.pointLength!==f||N.spotLength!==C||N.rectAreaLength!==H||N.hemiLength!==s||N.numSunShadows!==E||N.numDirectionalShadows!==T||N.numPointShadows!==R||N.numSpotShadows!==w||N.numSpotMaps!==o||N.numLightProbes!==V)&&(r.sun.length=M,r.directional.length=x,r.spot.length=C,r.rectArea.length=H,r.point.length=f,r.hemi.length=s,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+o-p,r.spotLightMap.length=o,r.numSpotLightShadowsWithMaps=p,r.numLightProbes=V,N.sunLength=M,N.directionalLength=x,N.pointLength=f,N.spotLength=C,N.rectAreaLength=H,N.hemiLength=s,N.numSunShadows=E,N.numDirectionalShadows=T,N.numPointShadows=R,N.numSpotShadows=w,N.numSpotMaps=o,N.numLightProbes=V,r.version=cg++)}function u(d,m){let v=0,c=0,M=0,E=0,b=0,x=0,f=m.matrixWorldInverse;for(let C=0,H=d.length;C<H;C++){let s=d[C];if(s.isSunLight){let T=r.sun[v];T.direction.setFromMatrixPosition(s.matrixWorld),T.direction.transformDirection(f),v++}else if(s.isDirectionalLight){let T=r.directional[c];T.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),c++}else if(s.isSpotLight){let T=r.spot[E];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),E++}else if(s.isRectAreaLight){let T=r.rectArea[b];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(f),l.identity(),n.copy(s.matrixWorld),n.premultiply(f),l.extractRotation(n),T.halfWidth.set(s.width*.5,0,0),T.halfHeight.set(0,s.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),b++}else if(s.isPointLight){let T=r.point[M];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(f),M++}else if(s.isHemisphereLight){let T=r.hemi[x];T.direction.setFromMatrixPosition(s.matrixWorld),T.direction.transformDirection(f),x++}}}return{setup:h,setupView:u,state:r}}function Vl(e){let t=new fg(e),i=[],r=[],a=[];function n(c){v.camera=c,i.length=0,r.length=0,a.length=0}function l(c){i.push(c)}function h(c){r.push(c)}function u(c){a.push(c)}function d(){t.setup(i)}function m(c){t.setupView(i,c)}let v={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:v,setupLights:d,setupLightsView:m,pushLight:l,pushShadow:h,pushLightProbeGrid:u}}function mg(e){let t=new WeakMap;function i(a,n=0){let l=t.get(a),h;return l===void 0?(h=new Vl(e),t.set(a,[h])):n>=l.length?(h=new Vl(e),l.push(h)):h=l[n],h}function r(){t=new WeakMap}return{get:i,dispose:r}}var gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
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
}`,vg=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Mg=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Wl=new Bt,Ia=new z,ys=new z;function xg(e,t,i){let r=new Io,a=new Xe,n=new Xe,l=new Wt,h=new bd,u=new Td,d={},m=i.maxTextureSize,v={[Cr]:yi,[yi]:Cr,[Dt]:Dt},c=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:gg,fragmentShader:_g}),M=c.clone();M.defines.HORIZONTAL_PASS=1;let E=new bi;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Yt(E,c),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let f=this.type;this.render=function(R,w,o){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===nu&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let p=e.getRenderTarget(),V=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),B=e.state;B.setBlending(or),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=f!==this.type;J&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=R.length;F<k;F++){let te=R[F],j=te.shadow;if(j===void 0){Ke("WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);let _e=j.getFrameExtents();a.multiply(_e),n.copy(j.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(n.x=Math.floor(m/_e.x),a.x=n.x*_e.x,j.mapSize.x=n.x),a.y>m&&(n.y=Math.floor(m/_e.y),a.y=n.y*_e.y,j.mapSize.y=n.y));let Z=e.state.buffers.depth.getReversed();if(j.camera._reversedDepth=Z,j.map===null||J===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Da){if(te.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new zi(a.x,a.y,{format:Ir,type:Zi,minFilter:hi,magFilter:hi,generateMipmaps:!1}),j.map.texture.name=te.name+".shadowMap",j.map.depthTexture=new Ha(a.x,a.y,Xi),j.map.depthTexture.name=te.name+".shadowMapDepth",j.map.depthTexture.format=hr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=li,j.map.depthTexture.magFilter=li}else te.isPointLight?(j.map=new Oh(a.x),j.map.depthTexture=new gd(a.x,qi)):(j.map=new zi(a.x,a.y),j.map.depthTexture=new Ha(a.x,a.y,qi)),j.map.depthTexture.name=te.name+".shadowMap",j.map.depthTexture.format=hr,this.type===Ua?(j.map.depthTexture.compareFunction=Z?Ro:Ao,j.map.depthTexture.minFilter=hi,j.map.depthTexture.magFilter=hi):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=li,j.map.depthTexture.magFilter=li);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==a.x||j.map.height!==a.y)&&j.map.setSize(a.x,a.y);let $=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();te.isPointLight!==!0&&j.updateMatrices(te,o);for(let re=0;re<$;re++){let rt=j.getCamera(re);if(te.isPointLight){let ze=j.camera,Rt=j.matrix,ke=te.distance||ze.far;ke!==ze.far&&(ze.far=ke,ze.updateProjectionMatrix()),Ia.setFromMatrixPosition(te.matrixWorld),ze.position.copy(Ia),ys.copy(ze.position),ys.add(vg[re]),ze.up.copy(Mg[re]),ze.lookAt(ys),ze.updateMatrixWorld(),Rt.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Wl.multiplyMatrices(ze.projectionMatrix,ze.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Wl,ze.coordinateSystem,ze.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)e.setRenderTarget(j.map,re),e.clear();else{re===0&&(e.setRenderTarget(j.map),e.clear());let ze=j.getViewport(re);l.set(n.x*ze.x,n.y*ze.y,n.x*ze.z,n.y*ze.w),B.viewport(l)}r=j.getFrustum(re),s(w,o,rt,te,this.type)}j.isPointLightShadow!==!0&&this.type===Da&&C(j,o),j.needsUpdate=!1}f=this.type,x.needsUpdate=!1,e.setRenderTarget(p,V,N)};function C(R,w){let o=t.update(b);c.defines.VSM_SAMPLES!==R.blurSamples&&(c.defines.VSM_SAMPLES=R.blurSamples,M.defines.VSM_SAMPLES=R.blurSamples,c.needsUpdate=!0,M.needsUpdate=!0),R.mapPass===null?R.mapPass=new zi(a.x,a.y,{format:Ir,type:Zi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),c.uniforms.shadow_pass.value=R.map.depthTexture,c.uniforms.resolution.value.set(R.map.width,R.map.height),c.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,o,c,b,null),M.uniforms.shadow_pass.value=R.mapPass.texture,M.uniforms.resolution.value.set(R.map.width,R.map.height),M.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,o,M,b,null)}function H(R,w,o,p){let V=null,N=o.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)V=N;else if(V=o.isPointLight===!0?u:h,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=V.uuid,J=w.uuid,F=d[B];F===void 0&&(F={},d[B]=F);let k=F[J];k===void 0&&(k=V.clone(),F[J]=k,w.addEventListener("dispose",T)),V=k}if(V.visible=w.visible,V.wireframe=w.wireframe,p===Da?V.side=w.shadowSide!==null?w.shadowSide:w.side:V.side=w.shadowSide!==null?w.shadowSide:v[w.side],V.alphaMap=w.alphaMap,V.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,V.map=w.map,V.clipShadows=w.clipShadows,V.clippingPlanes=w.clippingPlanes,V.clipIntersection=w.clipIntersection,V.displacementMap=w.displacementMap,V.displacementScale=w.displacementScale,V.displacementBias=w.displacementBias,V.wireframeLinewidth=w.wireframeLinewidth,V.linewidth=w.linewidth,o.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let B=e.properties.get(V);B.light=o}return V}function s(R,w,o,p,V){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&V===Da)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,R.matrixWorld);let B=t.update(R),J=R.material;if(Array.isArray(J)){let F=B.groups;for(let k=0,te=F.length;k<te;k++){let j=F[k],_e=J[j.materialIndex];if(_e&&_e.visible){let Z=H(R,_e,p,V);R.onBeforeShadow(e,R,w,o,B,Z,j),e.renderBufferDirect(o,null,B,Z,R,j),R.onAfterShadow(e,R,w,o,B,Z,j)}}}else if(J.visible){let F=H(R,J,p,V);R.onBeforeShadow(e,R,w,o,B,F,null),e.renderBufferDirect(o,null,B,F,R,null),R.onAfterShadow(e,R,w,o,B,F,null)}}let N=R.children;for(let B=0,J=N.length;B<J;B++)s(N[B],w,o,p,V)}function T(R){R.target.removeEventListener("dispose",T);for(let w in d){let o=d[w],p=R.target.uuid;p in o&&(o[p].dispose(),delete o[p])}}}function Sg(e,t){function i(){let U=!1,Q=new Wt,ne=null,Re=new Wt(0,0,0,0);return{setMask:function(Le){ne!==Le&&!U&&(e.colorMask(Le,Le,Le,Le),ne=Le)},setLocked:function(Le){U=Le},setClear:function(Le,oe,de,je,Vt){Vt===!0&&(Le*=je,oe*=je,de*=je),Q.set(Le,oe,de,je),Re.equals(Q)===!1&&(e.clearColor(Le,oe,de,je),Re.copy(Q))},reset:function(){U=!1,ne=null,Re.set(-1,0,0,0)}}}function r(){let U=!1,Q=!1,ne=null,Re=null,Le=null;return{setReversed:function(oe){if(Q!==oe){let de=t.get("EXT_clip_control");oe?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),Q=oe;let je=Le;Le=null,this.setClear(je)}},getReversed:function(){return Q},setTest:function(oe){oe?pe(e.DEPTH_TEST):Ve(e.DEPTH_TEST)},setMask:function(oe){ne!==oe&&!U&&(e.depthMask(oe),ne=oe)},setFunc:function(oe){if(Q&&(oe=zu[oe]),Re!==oe){switch(oe){case ws:e.depthFunc(e.NEVER);break;case As:e.depthFunc(e.ALWAYS);break;case Rs:e.depthFunc(e.LESS);break;case Fa:e.depthFunc(e.LEQUAL);break;case Cs:e.depthFunc(e.EQUAL);break;case Ps:e.depthFunc(e.GEQUAL);break;case Is:e.depthFunc(e.GREATER);break;case Ds:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Le!==oe&&(Le=oe,Q&&(oe=1-oe),e.clearDepth(oe))},reset:function(){U=!1,ne=null,Re=null,Le=null,Q=!1}}}function a(){let U=!1,Q=null,ne=null,Re=null,Le=null,oe=null,de=null,je=null,Vt=null;return{setTest:function(vt){U||(vt?pe(e.STENCIL_TEST):Ve(e.STENCIL_TEST))},setMask:function(vt){Q!==vt&&!U&&(e.stencilMask(vt),Q=vt)},setFunc:function(vt,g,W){(ne!==vt||Re!==g||Le!==W)&&(e.stencilFunc(vt,g,W),ne=vt,Re=g,Le=W)},setOp:function(vt,g,W){(oe!==vt||de!==g||je!==W)&&(e.stencilOp(vt,g,W),oe=vt,de=g,je=W)},setLocked:function(vt){U=vt},setClear:function(vt){Vt!==vt&&(e.clearStencil(vt),Vt=vt)},reset:function(){U=!1,Q=null,ne=null,Re=null,Le=null,oe=null,de=null,je=null,Vt=null}}}let n=new i,l=new r,h=new a,u=new WeakMap,d=new WeakMap,m={},v={},c={},M=new WeakMap,E=[],b=null,x=!1,f=null,C=null,H=null,s=null,T=null,R=null,w=null,o=new it(0,0,0),p=0,V=!1,N=null,B=null,J=null,F=null,k=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,_e=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=_e>=1):Z.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=_e>=2);let $=null,re={},rt=e.getParameter(e.SCISSOR_BOX),ze=e.getParameter(e.VIEWPORT),Rt=new Wt().fromArray(rt),ke=new Wt().fromArray(ze);function K(U,Q,ne,Re){let Le=new Uint8Array(4),oe=e.createTexture();e.bindTexture(U,oe),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<ne;de++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(Q,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,Le):e.texImage2D(Q+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Le);return oe}let he={};he[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),he[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),he[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),l.setClear(1),h.setClear(0),pe(e.DEPTH_TEST),l.setFunc(Fa),ui(!1),Pt(Bo),pe(e.CULL_FACE),Lt(or);function pe(U){m[U]!==!0&&(e.enable(U),m[U]=!0)}function Ve(U){m[U]!==!1&&(e.disable(U),m[U]=!1)}function We(U,Q){return c[U]!==Q?(e.bindFramebuffer(U,Q),c[U]=Q,U===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=Q),U===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=Q),!0):!1}function we(U,Q){let ne=E,Re=!1;if(U){ne=M.get(Q),ne===void 0&&(ne=[],M.set(Q,ne));let Le=U.textures;if(ne.length!==Le.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,de=Le.length;oe<de;oe++)ne[oe]=e.COLOR_ATTACHMENT0+oe;ne.length=Le.length,Re=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,Re=!0);Re&&e.drawBuffers(ne)}function St(U){return b!==U?(e.useProgram(U),b=U,!0):!1}let mt={[Jr]:e.FUNC_ADD,[ou]:e.FUNC_SUBTRACT,[lu]:e.FUNC_REVERSE_SUBTRACT};mt[hu]=e.MIN,mt[uu]=e.MAX;let $e={[du]:e.ZERO,[cu]:e.ONE,[pu]:e.SRC_COLOR,[ql]:e.SRC_ALPHA,[Mu]:e.SRC_ALPHA_SATURATE,[_u]:e.DST_COLOR,[mu]:e.DST_ALPHA,[fu]:e.ONE_MINUS_SRC_COLOR,[Zl]:e.ONE_MINUS_SRC_ALPHA,[vu]:e.ONE_MINUS_DST_COLOR,[gu]:e.ONE_MINUS_DST_ALPHA,[xu]:e.CONSTANT_COLOR,[Su]:e.ONE_MINUS_CONSTANT_COLOR,[Eu]:e.CONSTANT_ALPHA,[yu]:e.ONE_MINUS_CONSTANT_ALPHA};function Lt(U,Q,ne,Re,Le,oe,de,je,Vt,vt){if(U===or){x===!0&&(Ve(e.BLEND),x=!1);return}if(x===!1&&(pe(e.BLEND),x=!0),U!==su){if(U!==f||vt!==V){if((C!==Jr||T!==Jr)&&(e.blendEquation(e.FUNC_ADD),C=Jr,T=Jr),vt)switch(U){case Na:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ts:e.blendFunc(e.ONE,e.ONE);break;case zo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ho:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Mt("WebGLState: Invalid blending: ",U);break}else switch(U){case Na:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ts:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case zo:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",U);break}H=null,s=null,R=null,w=null,o.set(0,0,0),p=0,f=U,V=vt}return}Le=Le||Q,oe=oe||ne,de=de||Re,(Q!==C||Le!==T)&&(e.blendEquationSeparate(mt[Q],mt[Le]),C=Q,T=Le),(ne!==H||Re!==s||oe!==R||de!==w)&&(e.blendFuncSeparate($e[ne],$e[Re],$e[oe],$e[de]),H=ne,s=Re,R=oe,w=de),(je.equals(o)===!1||Vt!==p)&&(e.blendColor(je.r,je.g,je.b,Vt),o.copy(je),p=Vt),f=U,V=!1}function zt(U,Q){U.side===Dt?Ve(e.CULL_FACE):pe(e.CULL_FACE);let ne=U.side===yi;Q&&(ne=!ne),ui(ne),U.blending===Na&&U.transparent===!1?Lt(or):Lt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),n.setMask(U.colorWrite);let Re=U.stencilWrite;h.setTest(Re),Re&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):Ve(e.SAMPLE_ALPHA_TO_COVERAGE)}function ui(U){N!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),N=U)}function Pt(U){U!==ru?(pe(e.CULL_FACE),U!==B&&(U===Bo?e.cullFace(e.BACK):U===au?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ve(e.CULL_FACE),B=U}function Ht(U){U!==J&&(j&&e.lineWidth(U),J=U)}function Gt(U,Q,ne){U?(pe(e.POLYGON_OFFSET_FILL),(F!==Q||k!==ne)&&(F=Q,k=ne,l.getReversed()&&(Q=-Q),e.polygonOffset(Q,ne))):Ve(e.POLYGON_OFFSET_FILL)}function kt(U){U?pe(e.SCISSOR_TEST):Ve(e.SCISSOR_TEST)}function D(U){U===void 0&&(U=e.TEXTURE0+te-1),$!==U&&(e.activeTexture(U),$=U)}function ti(U,Q,ne){ne===void 0&&($===null?ne=e.TEXTURE0+te-1:ne=$);let Re=re[ne];Re===void 0&&(Re={type:void 0,texture:void 0},re[ne]=Re),(Re.type!==U||Re.texture!==Q)&&($!==ne&&(e.activeTexture(ne),$=ne),e.bindTexture(U,Q||he[U]),Re.type=U,Re.texture=Q)}function _t(){let U=re[$];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function bt(){try{e.compressedTexImage2D(...arguments)}catch(U){Mt("WebGLState:",U)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(U){Mt("WebGLState:",U)}}function S(){try{e.texSubImage2D(...arguments)}catch(U){Mt("WebGLState:",U)}}function P(){try{e.texSubImage3D(...arguments)}catch(U){Mt("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Mt("WebGLState:",U)}}function ee(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Mt("WebGLState:",U)}}function ge(){try{e.texStorage2D(...arguments)}catch(U){Mt("WebGLState:",U)}}function ve(){try{e.texStorage3D(...arguments)}catch(U){Mt("WebGLState:",U)}}function O(){try{e.texImage2D(...arguments)}catch(U){Mt("WebGLState:",U)}}function ce(){try{e.texImage3D(...arguments)}catch(U){Mt("WebGLState:",U)}}function xe(U){return v[U]!==void 0?v[U]:e.getParameter(U)}function De(U,Q){v[U]!==Q&&(e.pixelStorei(U,Q),v[U]=Q)}function le(U){Rt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function Be(U){ke.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function He(U,Q){let ne=d.get(Q);ne===void 0&&(ne=new WeakMap,d.set(Q,ne));let Re=ne.get(U);Re===void 0&&(Re=e.getUniformBlockIndex(Q,U.name),ne.set(U,Re))}function Ze(U,Q){let ne=d.get(Q).get(U);u.get(Q)!==ne&&(e.uniformBlockBinding(Q,ne,U.__bindingPointIndex),u.set(Q,ne))}function xt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),l.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),m={},v={},$=null,re={},c={},M=new WeakMap,E=[],b=null,x=!1,f=null,C=null,H=null,s=null,T=null,R=null,w=null,o=new it(0,0,0),p=0,V=!1,N=null,B=null,J=null,F=null,k=null,Rt.set(0,0,e.canvas.width,e.canvas.height),ke.set(0,0,e.canvas.width,e.canvas.height),n.reset(),l.reset(),h.reset()}return{buffers:{color:n,depth:l,stencil:h},enable:pe,disable:Ve,bindFramebuffer:We,drawBuffers:we,useProgram:St,setBlending:Lt,setMaterial:zt,setFlipSided:ui,setCullFace:Pt,setLineWidth:Ht,setPolygonOffset:Gt,setScissorTest:kt,activeTexture:D,bindTexture:ti,unbindTexture:_t,compressedTexImage2D:bt,compressedTexImage3D:y,texImage2D:O,texImage3D:ce,pixelStorei:De,getParameter:xe,updateUBOMapping:He,uniformBlockBinding:Ze,texStorage2D:ge,texStorage3D:ve,texSubImage2D:S,texSubImage3D:P,compressedTexSubImage2D:Y,compressedTexSubImage3D:ee,scissor:le,viewport:Be,reset:xt}}function Eg(e,t,i,r,a,n,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,m=new WeakMap,v=new Set,c,M=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,S){return E?new OffscreenCanvas(y,S):Dn("canvas")}function x(y,S,P){let Y=1,ee=bt(y);if((ee.width>P||ee.height>P)&&(Y=P/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let ge=Math.floor(Y*ee.width),ve=Math.floor(Y*ee.height);c===void 0&&(c=b(ge,ve));let O=S?b(ge,ve):c;return O.width=ge,O.height=ve,O.getContext("2d").drawImage(y,0,0,ge,ve),Ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+ve+")."),O}else return"data"in y&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),y;return y}function f(y){return y.generateMipmaps}function C(y){e.generateMipmap(y)}function H(y){return y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?e.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function s(y,S,P,Y,ee,ge=!1){if(y!==null){if(e[y]!==void 0)return e[y];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ve;Y&&(ve=t.get("EXT_texture_norm16"),ve||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=S;if(S===e.RED&&(P===e.FLOAT&&(O=e.R32F),P===e.HALF_FLOAT&&(O=e.R16F),P===e.UNSIGNED_BYTE&&(O=e.R8),P===e.UNSIGNED_SHORT&&ve&&(O=ve.R16_EXT),P===e.SHORT&&ve&&(O=ve.R16_SNORM_EXT)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(O=e.R8UI),P===e.UNSIGNED_SHORT&&(O=e.R16UI),P===e.UNSIGNED_INT&&(O=e.R32UI),P===e.BYTE&&(O=e.R8I),P===e.SHORT&&(O=e.R16I),P===e.INT&&(O=e.R32I)),S===e.RG&&(P===e.FLOAT&&(O=e.RG32F),P===e.HALF_FLOAT&&(O=e.RG16F),P===e.UNSIGNED_BYTE&&(O=e.RG8),P===e.UNSIGNED_SHORT&&ve&&(O=ve.RG16_EXT),P===e.SHORT&&ve&&(O=ve.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(O=e.RG8UI),P===e.UNSIGNED_SHORT&&(O=e.RG16UI),P===e.UNSIGNED_INT&&(O=e.RG32UI),P===e.BYTE&&(O=e.RG8I),P===e.SHORT&&(O=e.RG16I),P===e.INT&&(O=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(O=e.RGB8UI),P===e.UNSIGNED_SHORT&&(O=e.RGB16UI),P===e.UNSIGNED_INT&&(O=e.RGB32UI),P===e.BYTE&&(O=e.RGB8I),P===e.SHORT&&(O=e.RGB16I),P===e.INT&&(O=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),P===e.UNSIGNED_INT&&(O=e.RGBA32UI),P===e.BYTE&&(O=e.RGBA8I),P===e.SHORT&&(O=e.RGBA16I),P===e.INT&&(O=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_SHORT&&ve&&(O=ve.RGB16_EXT),P===e.SHORT&&ve&&(O=ve.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),S===e.RGBA){let ce=ge?In:gt.getTransfer(ee);P===e.FLOAT&&(O=e.RGBA32F),P===e.HALF_FLOAT&&(O=e.RGBA16F),P===e.UNSIGNED_BYTE&&(O=ce===wt?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ve&&(O=ve.RGBA16_EXT),P===e.SHORT&&ve&&(O=ve.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function T(y,S){let P;return y?S===null||S===qi||S===Ba?P=e.DEPTH24_STENCIL8:S===Xi?P=e.DEPTH32F_STENCIL8:S===Oa&&(P=e.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===Ba?P=e.DEPTH_COMPONENT24:S===Xi?P=e.DEPTH_COMPONENT32F:S===Oa&&(P=e.DEPTH_COMPONENT16),P}function R(y,S){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==li&&y.minFilter!==hi?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function w(y){let S=y.target;S.removeEventListener("dispose",w),p(S),S.isVideoTexture&&m.delete(S),S.isHTMLTexture&&v.delete(S)}function o(y){let S=y.target;S.removeEventListener("dispose",o),N(S)}function p(y){let S=r.get(y);if(S.__webglInit===void 0)return;let P=y.source,Y=M.get(P);if(Y){let ee=Y[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&V(y),Object.keys(Y).length===0&&M.delete(P)}r.remove(y)}function V(y){let S=r.get(y);e.deleteTexture(S.__webglTexture);let P=y.source,Y=M.get(P);delete Y[S.__cacheKey],l.memory.textures--}function N(y){let S=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ee=0;ee<S.__webglFramebuffer[Y].length;ee++)e.deleteFramebuffer(S.__webglFramebuffer[Y][ee]);else e.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)e.deleteFramebuffer(S.__webglFramebuffer[Y]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=y.textures;for(let Y=0,ee=P.length;Y<ee;Y++){let ge=r.get(P[Y]);ge.__webglTexture&&(e.deleteTexture(ge.__webglTexture),l.memory.textures--),r.remove(P[Y])}r.remove(y)}let B=0;function J(){B=0}function F(){return B}function k(y){B=y}function te(){let y=B;return y>=a.maxTextures&&Ke("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,y}function j(y){let S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function _e(y,S){let P=r.get(y);if(y.isVideoTexture&&ti(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&P.__version!==y.version){let Y=y.image;if(Y===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(P,y,S);return}}else y.isExternalTexture&&(P.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function Z(y,S){let P=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){Ve(P,y,S);return}else y.isExternalTexture&&(P.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function $(y,S){let P=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){Ve(P,y,S);return}i.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function re(y,S){let P=r.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&P.__version!==y.version){We(P,y,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let rt={[Ls]:e.REPEAT,[sr]:e.CLAMP_TO_EDGE,[Us]:e.MIRRORED_REPEAT},ze={[li]:e.NEAREST,[wu]:e.NEAREST_MIPMAP_NEAREST,[Va]:e.NEAREST_MIPMAP_LINEAR,[hi]:e.LINEAR,[Xn]:e.LINEAR_MIPMAP_NEAREST,[wr]:e.LINEAR_MIPMAP_LINEAR},Rt={[Pu]:e.NEVER,[Nu]:e.ALWAYS,[Iu]:e.LESS,[Ao]:e.LEQUAL,[Du]:e.EQUAL,[Ro]:e.GEQUAL,[Lu]:e.GREATER,[Uu]:e.NOTEQUAL};function ke(y,S){if(S.type===Xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hi||S.magFilter===Xn||S.magFilter===Va||S.magFilter===wr||S.minFilter===hi||S.minFilter===Xn||S.minFilter===Va||S.minFilter===wr)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,rt[S.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,rt[S.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,rt[S.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,ze[S.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,ze[S.minFilter]),S.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===li||S.minFilter!==Va&&S.minFilter!==wr||S.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function K(y,S){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",w));let Y=S.source,ee=M.get(Y);ee===void 0&&(ee={},M.set(Y,ee));let ge=j(S);if(ge!==y.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:e.createTexture(),usedTimes:0},l.memory.textures++,P=!0),ee[ge].usedTimes++;let ve=ee[y.__cacheKey];ve!==void 0&&(ee[y.__cacheKey].usedTimes--,ve.usedTimes===0&&V(S)),y.__cacheKey=ge,y.__webglTexture=ee[ge].texture}return P}function he(y,S,P){return Math.floor(Math.floor(y/P)/S)}function pe(y,S,P,Y){let ee=y.updateRanges;if(ee.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,Y,S.data);else{ee.sort((xe,De)=>xe.start-De.start);let ge=0;for(let xe=1;xe<ee.length;xe++){let De=ee[ge],le=ee[xe],Be=De.start+De.count,He=he(le.start,S.width,4),Ze=he(De.start,S.width,4);le.start<=Be+1&&He===Ze&&he(le.start+le.count-1,S.width,4)===He?De.count=Math.max(De.count,le.start+le.count-De.start):(++ge,ee[ge]=le)}ee.length=ge+1;let ve=i.getParameter(e.UNPACK_ROW_LENGTH),O=i.getParameter(e.UNPACK_SKIP_PIXELS),ce=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let xe=0,De=ee.length;xe<De;xe++){let le=ee[xe],Be=Math.floor(le.start/4),He=Math.ceil(le.count/4),Ze=Be%S.width,xt=Math.floor(Be/S.width),U=He;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(e.UNPACK_SKIP_ROWS,xt),i.texSubImage2D(e.TEXTURE_2D,0,Ze,xt,U,1,P,Y,S.data)}y.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ve),i.pixelStorei(e.UNPACK_SKIP_PIXELS,O),i.pixelStorei(e.UNPACK_SKIP_ROWS,ce)}}function Ve(y,S,P){let Y=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=e.TEXTURE_3D);let ee=K(y,S),ge=S.source;i.bindTexture(Y,y.__webglTexture,e.TEXTURE0+P);let ve=r.get(ge);if(ge.version!==ve.__version||ee===!0){if(i.activeTexture(e.TEXTURE0+P),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let Q=gt.getPrimaries(gt.workingColorSpace),ne=S.colorSpace===gr?null:gt.getPrimaries(S.colorSpace),Re=S.colorSpace===gr||Q===ne?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let O=x(S.image,!1,a.maxTextureSize);O=_t(S,O);let ce=n.convert(S.format,S.colorSpace),xe=n.convert(S.type),De=s(S.internalFormat,ce,xe,S.normalized,S.colorSpace,S.isVideoTexture);ke(Y,S);let le,Be=S.mipmaps,He=S.isVideoTexture!==!0,Ze=ve.__version===void 0||ee===!0,xt=ge.dataReady,U=R(S,O);if(S.isDepthTexture)De=T(S.format===Ar,S.type),Ze&&(He?i.texStorage2D(e.TEXTURE_2D,1,De,O.width,O.height):i.texImage2D(e.TEXTURE_2D,0,De,O.width,O.height,0,ce,xe,null));else if(S.isDataTexture)if(Be.length>0){He&&Ze&&i.texStorage2D(e.TEXTURE_2D,U,De,Be[0].width,Be[0].height);for(let Q=0,ne=Be.length;Q<ne;Q++)le=Be[Q],He?xt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,le.width,le.height,ce,xe,le.data):i.texImage2D(e.TEXTURE_2D,Q,De,le.width,le.height,0,ce,xe,le.data);S.generateMipmaps=!1}else He?(Ze&&i.texStorage2D(e.TEXTURE_2D,U,De,O.width,O.height),xt&&pe(S,O,ce,xe)):i.texImage2D(e.TEXTURE_2D,0,De,O.width,O.height,0,ce,xe,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&Ze&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,De,Be[0].width,Be[0].height,O.depth);for(let Q=0,ne=Be.length;Q<ne;Q++)if(le=Be[Q],S.format!==Bi)if(ce!==null)if(He){if(xt)if(S.layerUpdates.size>0){let Re=El(le.width,le.height,S.format,S.type);for(let Le of S.layerUpdates){let oe=le.data.subarray(Le*Re/le.data.BYTES_PER_ELEMENT,(Le+1)*Re/le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,Le,le.width,le.height,1,ce,oe)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,O.depth,ce,le.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,De,le.width,le.height,O.depth,0,le.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?xt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,O.depth,ce,xe,le.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,De,le.width,le.height,O.depth,0,ce,xe,le.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{He&&Ze&&i.texStorage2D(e.TEXTURE_2D,U,De,Be[0].width,Be[0].height);for(let Q=0,ne=Be.length;Q<ne;Q++)le=Be[Q],S.format!==Bi?ce!==null?He?xt&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,le.width,le.height,ce,le.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,De,le.width,le.height,0,le.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?xt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,le.width,le.height,ce,xe,le.data):i.texImage2D(e.TEXTURE_2D,Q,De,le.width,le.height,0,ce,xe,le.data)}else if(S.isDataArrayTexture)if(He){if(Ze&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,De,O.width,O.height,O.depth),xt)if(S.layerUpdates.size>0){let Q=El(O.width,O.height,S.format,S.type);for(let ne of S.layerUpdates){let Re=O.data.subarray(ne*Q/O.data.BYTES_PER_ELEMENT,(ne+1)*Q/O.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ne,O.width,O.height,1,ce,xe,Re)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ce,xe,O.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,De,O.width,O.height,O.depth,0,ce,xe,O.data);else if(S.isData3DTexture)He?(Ze&&i.texStorage3D(e.TEXTURE_3D,U,De,O.width,O.height,O.depth),xt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ce,xe,O.data)):i.texImage3D(e.TEXTURE_3D,0,De,O.width,O.height,O.depth,0,ce,xe,O.data);else if(S.isFramebufferTexture){if(Ze)if(He)i.texStorage2D(e.TEXTURE_2D,U,De,O.width,O.height);else{let Q=O.width,ne=O.height;for(let Re=0;Re<U;Re++)i.texImage2D(e.TEXTURE_2D,Re,De,Q,ne,0,ce,xe,null),Q>>=1,ne>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),O.parentNode!==Q){Q.appendChild(O),v.add(S),Q.onpaint=ne=>{let Re=ne.changedElements;for(let Le of v)Re.includes(Le.image)&&(Le.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,O);else{let ne=e.RGBA,Re=e.RGBA,Le=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ne,Re,Le,O)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Be.length>0){if(He&&Ze){let Q=bt(Be[0]);i.texStorage2D(e.TEXTURE_2D,U,De,Q.width,Q.height)}for(let Q=0,ne=Be.length;Q<ne;Q++)le=Be[Q],He?xt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,ce,xe,le):i.texImage2D(e.TEXTURE_2D,Q,De,ce,xe,le);S.generateMipmaps=!1}else if(He){if(Ze){let Q=bt(O);i.texStorage2D(e.TEXTURE_2D,U,De,Q.width,Q.height)}xt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,xe,O)}else i.texImage2D(e.TEXTURE_2D,0,De,ce,xe,O);f(S)&&C(Y),ve.__version=ge.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function We(y,S,P){if(S.image.length!==6)return;let Y=K(y,S),ee=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+P);let ge=r.get(ee);if(ee.version!==ge.__version||Y===!0){i.activeTexture(e.TEXTURE0+P);let ve=gt.getPrimaries(gt.workingColorSpace),O=S.colorSpace===gr?null:gt.getPrimaries(S.colorSpace),ce=S.colorSpace===gr||ve===O?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let xe=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,le=[];for(let oe=0;oe<6;oe++)!xe&&!De?le[oe]=x(S.image[oe],!0,a.maxCubemapSize):le[oe]=De?S.image[oe].image:S.image[oe],le[oe]=_t(S,le[oe]);let Be=le[0],He=n.convert(S.format,S.colorSpace),Ze=n.convert(S.type),xt=s(S.internalFormat,He,Ze,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,Q=ge.__version===void 0||Y===!0,ne=ee.dataReady,Re=R(S,Be);ke(e.TEXTURE_CUBE_MAP,S);let Le;if(xe){U&&Q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Re,xt,Be.width,Be.height);for(let oe=0;oe<6;oe++){Le=le[oe].mipmaps;for(let de=0;de<Le.length;de++){let je=Le[de];S.format!==Bi?He!==null?U?ne&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,0,0,je.width,je.height,He,je.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,xt,je.width,je.height,0,je.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,0,0,je.width,je.height,He,Ze,je.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,xt,je.width,je.height,0,He,Ze,je.data)}}}else{if(Le=S.mipmaps,U&&Q){Le.length>0&&Re++;let oe=bt(le[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Re,xt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(De){U?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,le[oe].width,le[oe].height,He,Ze,le[oe].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xt,le[oe].width,le[oe].height,0,He,Ze,le[oe].data);for(let de=0;de<Le.length;de++){let je=Le[de].image[oe].image;U?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,0,0,je.width,je.height,He,Ze,je.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,xt,je.width,je.height,0,He,Ze,je.data)}}else{U?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,He,Ze,le[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xt,He,Ze,le[oe]);for(let de=0;de<Le.length;de++){let je=Le[de];U?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,0,0,He,Ze,je.image[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,xt,He,Ze,je.image[oe])}}}f(S)&&C(e.TEXTURE_CUBE_MAP),ge.__version=ee.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function we(y,S,P,Y,ee,ge){let ve=n.convert(P.format,P.colorSpace),O=n.convert(P.type),ce=s(P.internalFormat,ve,O,P.normalized,P.colorSpace),xe=r.get(S),De=r.get(P);if(De.__renderTarget=S,!xe.__hasExternalTextures){let le=Math.max(1,S.width>>ge),Be=Math.max(1,S.height>>ge);ee===e.TEXTURE_3D||ee===e.TEXTURE_2D_ARRAY?i.texImage3D(ee,ge,ce,le,Be,S.depth,0,ve,O,null):i.texImage2D(ee,ge,ce,le,Be,0,ve,O,null)}i.bindFramebuffer(e.FRAMEBUFFER,y),D(S)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,ee,De.__webglTexture,0,kt(S)):(ee===e.TEXTURE_2D||ee>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,ee,De.__webglTexture,ge),i.bindFramebuffer(e.FRAMEBUFFER,null)}function St(y,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,y),S.depthBuffer){let Y=S.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,ge=T(S.stencilBuffer,ee),ve=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;D(S)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,kt(S),ge,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,kt(S),ge,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ge,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,y)}else{let Y=S.textures;for(let ee=0;ee<Y.length;ee++){let ge=Y[ee],ve=n.convert(ge.format,ge.colorSpace),O=n.convert(ge.type),ce=s(ge.internalFormat,ve,O,ge.normalized,ge.colorSpace);D(S)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,kt(S),ce,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,kt(S),ce,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ce,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function mt(y,S,P){let Y=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=r.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture),ke(e.TEXTURE_CUBE_MAP,S.depthTexture);let xe=n.convert(S.depthTexture.format),De=n.convert(S.depthTexture.type),le;S.depthTexture.format===hr?le=e.DEPTH_COMPONENT24:S.depthTexture.format===Ar&&(le=e.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,le,S.width,S.height,0,xe,De,null)}}else _e(S.depthTexture,0);let ge=ee.__webglTexture,ve=kt(S),O=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,ce=S.depthTexture.format===Ar?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===hr)D(S)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,O,ge,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,ce,O,ge,0);else if(S.depthTexture.format===Ar)D(S)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,O,ge,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,ce,O,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(y){let S=r.get(y),P=y.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==y.depthTexture){let Y=y.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Y}if(y.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let Y=0;Y<6;Y++)mt(S.__webglFramebuffer[Y],y,Y);else{let Y=y.texture.mipmaps;Y&&Y.length>0?mt(S.__webglFramebuffer[0],y,0):mt(S.__webglFramebuffer,y,0)}else if(P){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=e.createRenderbuffer(),St(S.__webglDepthbuffer[Y],y,!1);else{let ee=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,ge),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,ge)}}else{let Y=y.texture.mipmaps;if(Y&&Y.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),St(S.__webglDepthbuffer,y,!1);else{let ee=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ge),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,ge)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(y,S,P){let Y=r.get(y);S!==void 0&&we(Y.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&$e(y)}function zt(y){let S=y.texture,P=r.get(y),Y=r.get(S);y.addEventListener("dispose",o);let ee=y.textures,ge=y.isWebGLCubeRenderTarget===!0,ve=ee.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=S.version,l.memory.textures++),ge){P.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[O]=[];for(let ce=0;ce<S.mipmaps.length;ce++)P.__webglFramebuffer[O][ce]=e.createFramebuffer()}else P.__webglFramebuffer[O]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)P.__webglFramebuffer[O]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ve)for(let O=0,ce=ee.length;O<ce;O++){let xe=r.get(ee[O]);xe.__webglTexture===void 0&&(xe.__webglTexture=e.createTexture(),l.memory.textures++)}if(y.samples>0&&D(y)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let O=0;O<ee.length;O++){let ce=ee[O];P.__webglColorRenderbuffer[O]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[O]);let xe=n.convert(ce.format,ce.colorSpace),De=n.convert(ce.type),le=s(ce.internalFormat,xe,De,ce.normalized,ce.colorSpace,y.isXRRenderTarget===!0),Be=kt(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,Be,le,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+O,e.RENDERBUFFER,P.__webglColorRenderbuffer[O])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),St(P.__webglDepthRenderbuffer,y,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ge){i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(e.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)we(P.__webglFramebuffer[O][ce],y,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ce);else we(P.__webglFramebuffer[O],y,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);f(S)&&C(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ve){for(let O=0,ce=ee.length;O<ce;O++){let xe=ee[O],De=r.get(xe),le=e.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(le=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(le,De.__webglTexture),ke(le,xe),we(P.__webglFramebuffer,y,xe,e.COLOR_ATTACHMENT0+O,le,0),f(xe)&&C(le)}i.unbindTexture()}else{let O=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(O=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(O,Y.__webglTexture),ke(O,S),S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)we(P.__webglFramebuffer[ce],y,S,e.COLOR_ATTACHMENT0,O,ce);else we(P.__webglFramebuffer,y,S,e.COLOR_ATTACHMENT0,O,0);f(S)&&C(O),i.unbindTexture()}y.depthBuffer&&$e(y)}function ui(y){let S=y.textures;for(let P=0,Y=S.length;P<Y;P++){let ee=S[P];if(f(ee)){let ge=H(y),ve=r.get(ee).__webglTexture;i.bindTexture(ge,ve),C(ge),i.unbindTexture()}}}let Pt=[],Ht=[];function Gt(y){if(y.samples>0){if(D(y)===!1){let S=y.textures,P=y.width,Y=y.height,ee=e.COLOR_BUFFER_BIT,ge=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=r.get(y),O=S.length>1;if(O)for(let xe=0;xe<S.length;xe++)i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let ce=y.texture.mipmaps;ce&&ce.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ee|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ee|=e.STENCIL_BUFFER_BIT)),O){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let De=r.get(S[xe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,De,0)}e.blitFramebuffer(0,0,P,Y,0,0,P,Y,ee,e.NEAREST),u===!0&&(Pt.length=0,Ht.length=0,Pt.push(e.COLOR_ATTACHMENT0+xe),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(Pt.push(ge),Ht.push(ge),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),O)for(let xe=0;xe<S.length;xe++){i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let De=r.get(S[xe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,De,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&u){let S=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function kt(y){return Math.min(a.maxSamples,y.samples)}function D(y){let S=r.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ti(y){let S=l.render.frame;m.get(y)!==S&&(m.set(y,S),y.update())}function _t(y,S){let P=y.colorSpace,Y=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==Pn&&P!==gr&&(gt.getTransfer(P)===wt?(Y!==Bi||ee!==Ai)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",P)),S}function bt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(d.width=y.naturalWidth||y.width,d.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(d.width=y.displayWidth,d.height=y.displayHeight):(d.width=y.width,d.height=y.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=J,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=_e,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=re,this.rebindTextures=Lt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ui,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=we,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yg(e,t){function i(r,a=gr){let n,l=gt.getTransfer(a);if(r===Ai)return e.UNSIGNED_BYTE;if(r===Eo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===yo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===sh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===oh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===ah)return e.BYTE;if(r===nh)return e.SHORT;if(r===Oa)return e.UNSIGNED_SHORT;if(r===So)return e.INT;if(r===qi)return e.UNSIGNED_INT;if(r===Xi)return e.FLOAT;if(r===Zi)return e.HALF_FLOAT;if(r===lh)return e.ALPHA;if(r===hh)return e.RGB;if(r===Bi)return e.RGBA;if(r===hr)return e.DEPTH_COMPONENT;if(r===Ar)return e.DEPTH_STENCIL;if(r===uh)return e.RED;if(r===bo)return e.RED_INTEGER;if(r===Ir)return e.RG;if(r===To)return e.RG_INTEGER;if(r===wo)return e.RGBA_INTEGER;if(r===xn||r===Sn||r===En||r===yn)if(l===wt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===xn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===En)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===xn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===En)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ns||r===Fs||r===Os||r===Bs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Ns)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Os)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zs||r===Hs||r===Gs||r===ks||r===Vs||r===Rn||r===Ws)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===zs||r===Hs)return l===wt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Gs)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===ks)return n.COMPRESSED_R11_EAC;if(r===Vs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Rn)return n.COMPRESSED_RG11_EAC;if(r===Ws)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Xs||r===js||r===Ys||r===qs||r===Zs||r===Ks||r===Js||r===$s||r===Qs||r===eo||r===to||r===io||r===ro||r===ao)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Xs)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===js)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ys)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qs)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zs)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ks)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Js)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$s)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qs)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eo)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===to)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===io)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ro)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ao)return l===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===no||r===so||r===oo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===no)return l===wt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===so)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lo||r===ho||r===Cn||r===uo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===lo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===ho)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ba?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`,wg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ki({vertexShader:bg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Do(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ag=class extends Mr{constructor(e,t){super();let i=this,r=null,a=1,n=null,l="local-floor",h=1,u=null,d=null,m=null,v=null,c=null,M=null,E=typeof XRWebGLBinding<"u",b=new wg,x={},f=t.getContextAttributes(),C=null,H=null,s=[],T=[],R=new Xe,w=null,o=null,p=new Ii;p.viewport=new Wt;let V=new Ii;V.viewport=new Wt;let N=[p,V],B=new Pd,J=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=s[K];return he===void 0&&(he=new Qn,s[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=s[K];return he===void 0&&(he=new Qn,s[K]=he),he.getGripSpace()},this.getHand=function(K){let he=s[K];return he===void 0&&(he=new Qn,s[K]=he),he.getHandSpace()};function k(K){let he=T.indexOf(K.inputSource);if(he===-1)return;let pe=s[he];pe!==void 0&&(pe.update(K.inputSource,K.frame,u||n),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function te(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",j);for(let K=0;K<s.length;K++){let he=T[K];he!==null&&(T[K]=null,s[K].disconnect(he))}J=null,F=null,b.reset();for(let K in x)delete x[K];if(e.setRenderTarget(C),c=null,v=null,m=null,r=null,H=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),o!==null){let K=o.camera;K.fov=o.fov,K.zoom=o.zoom,K.updateProjectionMatrix(),o=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||n},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return v!==null?v:c},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",te),r.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,pe=null,Ve=null;f.depth&&(Ve=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?Ar:hr,pe=f.stencil?Ba:qi);let We={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:a};m=this.getBinding(),v=m.createProjectionLayer(We),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),H=new zi(v.textureWidth,v.textureHeight,{format:Bi,type:Ai,depthTexture:new Ha(v.textureWidth,v.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{let he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),H=new zi(c.framebufferWidth,c.framebufferHeight,{format:Bi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(h),u=null,n=await r.requestReferenceSpace(l),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(K){for(let he=0;he<K.removed.length;he++){let pe=K.removed[he],Ve=T.indexOf(pe);Ve>=0&&(T[Ve]=null,s[Ve].disconnect(pe))}for(let he=0;he<K.added.length;he++){let pe=K.added[he],Ve=T.indexOf(pe);if(Ve===-1){for(let we=0;we<s.length;we++)if(we>=T.length){T.push(pe),Ve=we;break}else if(T[we]===null){T[we]=pe,Ve=we;break}if(Ve===-1)break}let We=s[Ve];We&&We.connect(pe)}}let _e=new z,Z=new z;function $(K,he,pe){_e.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);let Ve=_e.distanceTo(Z),We=he.projectionMatrix.elements,we=pe.projectionMatrix.elements,St=We[14]/(We[10]-1),mt=We[14]/(We[10]+1),$e=(We[9]+1)/We[5],Lt=(We[9]-1)/We[5],zt=(We[8]-1)/We[0],ui=(we[8]+1)/we[0],Pt=St*zt,Ht=St*ui,Gt=Ve/(-zt+ui),kt=Gt*-zt;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(kt),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),We[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let D=St+Gt,ti=mt+Gt,_t=Pt-kt,bt=Ht+(Ve-kt),y=$e*mt/ti*D,S=Lt*mt/ti*D;K.projectionMatrix.makePerspective(_t,bt,y,S,D,ti),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let he=K.near,pe=K.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(pe=b.depthFar)),B.near=V.near=p.near=he,B.far=V.far=p.far=pe,(J!==B.near||F!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),J=B.near,F=B.far),B.layers.mask=K.layers.mask|6,p.layers.mask=B.layers.mask&-5,V.layers.mask=B.layers.mask&-3;let Ve=K.parent,We=B.cameras;re(B,Ve);for(let we=0;we<We.length;we++)re(We[we],Ve);We.length===2?$(B,p,V):B.projectionMatrix.copy(p.projectionMatrix),o===null&&K.isPerspectiveCamera&&(o={camera:K,fov:K.fov,zoom:K.zoom}),rt(K,B,Ve)};function rt(K,he,pe){pe===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=po*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(v===null&&c===null))return h},this.setFoveation=function(K){h=K,v!==null&&(v.fixedFoveation=K),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(B)},this.getCameraTexture=function(K){return x[K]};let ze=null;function Rt(K,he){if(d=he.getViewerPose(u||n),M=he,d!==null){let pe=d.views;c!==null&&(e.setRenderTargetFramebuffer(H,c.framebuffer),e.setRenderTarget(H));let Ve=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Ve=!0);for(let we=0;we<pe.length;we++){let St=pe[we],mt=null;if(c!==null)mt=c.getViewport(St);else{let Lt=m.getViewSubImage(v,St);mt=Lt.viewport,we===0&&(e.setRenderTargetTextures(H,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(H))}let $e=N[we];$e===void 0&&($e=new Ii,$e.layers.enable(we),$e.viewport=new Wt,N[we]=$e),$e.matrix.fromArray(St.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(St.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(mt.x,mt.y,mt.width,mt.height),we===0&&(B.matrix.copy($e.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ve===!0&&B.cameras.push($e)}let We=r.enabledFeatures;if(We&&We.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=i.getBinding();let we=m.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&b.init(we,r.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),m=i.getBinding();for(let we=0;we<pe.length;we++){let St=pe[we].camera;if(St){let mt=x[St];mt||(mt=new Th,x[St]=mt);let $e=m.getCameraImage(St);mt.sourceTexture=$e}}}}for(let pe=0;pe<s.length;pe++){let Ve=T[pe],We=s[pe];Ve!==null&&We!==void 0&&We.update(Ve,he,u||n)}ze&&ze(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}let ke=new Nh;ke.setAnimationLoop(Rt),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}},Rg=new Bt,kh=new st;kh.set(-1,0,0,0,1,0,0,0,1);function Cg(e,t){function i(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function r(x,f){f.color.getRGB(x.fogColor.value,Ih(e)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function a(x,f,C,H,s){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(x,f):f.isMeshLambertMaterial?(n(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(x,f),v(x,f)):f.isMeshPhongMaterial?(n(x,f),m(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(x,f),c(x,f),f.isMeshPhysicalMaterial&&M(x,f,s)):f.isMeshMatcapMaterial?(n(x,f),E(x,f)):f.isMeshDepthMaterial?n(x,f):f.isMeshDistanceMaterial?(n(x,f),b(x,f)):f.isMeshNormalMaterial?n(x,f):f.isLineBasicMaterial?(l(x,f),f.isLineDashedMaterial&&h(x,f)):f.isPointsMaterial?u(x,f,C,H):f.isSpriteMaterial?d(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,i(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,i(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,i(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===yi&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,i(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===yi&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,i(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,i(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let C=t.get(f),H=C.envMap,s=C.envMapRotation;H&&(x.envMap.value=H,x.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(s)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(kh),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,x.aoMapTransform))}function l(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,i(f.map,x.mapTransform))}function h(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function u(x,f,C,H){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*C,x.scale.value=H*.5,f.map&&(x.map.value=f.map,i(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,i(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function d(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,i(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,i(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function m(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function v(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function c(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function M(x,f,C){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yi&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){let C=t.get(f).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Pg(e,t,i,r){let a={},n={},l=[],h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function u(s,T){let R=T.program;r.uniformBlockBinding(s,R)}function d(s,T){let R=a[s.id];R===void 0&&(x(s),R=m(s),a[s.id]=R,s.addEventListener("dispose",C));let w=T.program;r.updateUBOMapping(s,w);let o=t.render.frame;n[s.id]!==o&&(c(s),n[s.id]=o)}function m(s){let T=v();s.__bindingPointIndex=T;let R=e.createBuffer(),w=s.__size,o=s.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,w,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,R),R}function v(){for(let s=0;s<h;s++)if(l.indexOf(s)===-1)return l.push(s),s;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(s){let T=a[s.id],R=s.uniforms,w=s.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let o=0,p=R.length;o<p;o++){let V=R[o];if(Array.isArray(V))for(let N=0,B=V.length;N<B;N++)M(V[N],o,N,w);else M(V,o,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function M(s,T,R,w){if(b(s,T,R,w)===!0){let o=s.__offset,p=s.value;if(Array.isArray(p)){let V=0;for(let N=0;N<p.length;N++){let B=p[N],J=f(B);E(B,s.__data,V),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(p,s.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,o,s.__data)}}function E(s,T,R){typeof s=="number"||typeof s=="boolean"?T[0]=s:s.isMatrix3?(T[0]=s.elements[0],T[1]=s.elements[1],T[2]=s.elements[2],T[3]=0,T[4]=s.elements[3],T[5]=s.elements[4],T[6]=s.elements[5],T[7]=0,T[8]=s.elements[6],T[9]=s.elements[7],T[10]=s.elements[8],T[11]=0):ArrayBuffer.isView(s)?T.set(new s.constructor(s.buffer,s.byteOffset,T.length)):s.toArray(T,R)}function b(s,T,R,w){let o=s.value,p=T+"_"+R;if(w[p]===void 0)return typeof o=="number"||typeof o=="boolean"?w[p]=o:ArrayBuffer.isView(o)?w[p]=o.slice():w[p]=o.clone(),!0;{let V=w[p];if(typeof o=="number"||typeof o=="boolean"){if(V!==o)return w[p]=o,!0}else{if(ArrayBuffer.isView(o))return!0;if(V.equals(o)===!1)return V.copy(o),!0}}return!1}function x(s){let T=s.uniforms,R=0,w=16;for(let p=0,V=T.length;p<V;p++){let N=Array.isArray(T[p])?T[p]:[T[p]];for(let B=0,J=N.length;B<J;B++){let F=N[B],k=Array.isArray(F.value)?F.value:[F.value];for(let te=0,j=k.length;te<j;te++){let _e=k[te],Z=f(_e),$=R%w,re=$%Z.boundary,rt=$+re;R+=re,rt!==0&&w-rt<Z.storage&&(R+=w-rt),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=R,R+=Z.storage}}}let o=R%w;return o>0&&(R+=w-o),s.__size=R,s.__cache={},this}function f(s){let T={boundary:0,storage:0};return typeof s=="number"||typeof s=="boolean"?(T.boundary=4,T.storage=4):s.isVector2?(T.boundary=8,T.storage=8):s.isVector3||s.isColor?(T.boundary=16,T.storage=12):s.isVector4?(T.boundary=16,T.storage=16):s.isMatrix3?(T.boundary=48,T.storage=48):s.isMatrix4?(T.boundary=64,T.storage=64):s.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(s)?(T.boundary=16,T.storage=s.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",s),T}function C(s){let T=s.target;T.removeEventListener("dispose",C);let R=l.indexOf(T.__bindingPointIndex);l.splice(R,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function H(){for(let s in a)e.deleteBuffer(a[s]);l=[],a={},n={}}return{bind:u,update:d,dispose:H}}var Ig=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function Dg(){return ki===null&&(ki=new dd(Ig,16,16,Ir,Zi),ki.name="DFG_LUT",ki.minFilter=hi,ki.magFilter=hi,ki.wrapS=sr,ki.wrapT=sr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Lg=class{constructor(e={}){let{canvas:t=Ou(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:c=Ai}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=n;let E=c,b=new Set([wo,To,bo]),x=new Set([Ai,qi,Oa,Ba,Eo,yo]),f=new Uint32Array(4),C=new Int32Array(4),H=new z,s=null,T=null,R=[],w=[],o=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let p=this,V=!1,N=null,B=null,J=null,F=null;this._outputColorSpace=Pi;let k=0,te=0,j=null,_e=-1,Z=null,$=new Wt,re=new Wt,rt=null,ze=new it(0),Rt=0,ke=t.width,K=t.height,he=1,pe=null,Ve=null,We=new Wt(0,0,ke,K),we=new Wt(0,0,ke,K),St=!1,mt=new Io,$e=!1,Lt=!1,zt=new Bt,ui=new z,Pt=new Wt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function kt(){return j===null?he:1}let D=i;function ti(_,A){return t.getContext(_,A)}let _t,bt,y,S,P,Y,ee,ge,ve,O,ce,xe,De,le,Be,He,Ze,xt,U,Q,ne,Re,Le;try{let _={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mo}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",Vt,!1),t.addEventListener("webglcontextcreationerror",vt,!1),D===null){let A="webgl2";if(D=ti(A,_),D===null)throw ti(A)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(_){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",Vt,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Mt("WebGLRenderer: "+_.message),_}function oe(){_t=new Df(D),_t.init(),ne=new yg(D,_t),bt=new Ef(D,_t,e,ne),y=new Sg(D,_t),bt.reversedDepthBuffer&&v&&y.buffers.depth.setReversed(!0),B=D.createFramebuffer(),J=D.createFramebuffer(),F=D.createFramebuffer(),S=new Nf(D),P=new og,Y=new Eg(D,_t,y,P,bt,ne,S),ee=new If(p),ge=new Fd(D),Re=new xf(D,ge),ve=new Lf(D,ge,S,Re),O=new Of(D,ve,ge,Re,S),xt=new Ff(D,bt,Y),Be=new yf(P),ce=new sg(p,ee,_t,bt,Re,Be),xe=new Cg(p,P),De=new hg,le=new mg(_t),Ze=new Mf(p,ee,y,O,M,h),He=new xg(p,O,bt),Le=new Pg(D,S,bt,y),U=new Sf(D,_t,S),Q=new Uf(D,_t,S),S.programs=ce.programs,p.capabilities=bt,p.extensions=_t,p.properties=P,p.renderLists=De,p.shadowMap=He,p.state=y,p.info=S}E!==Ai&&(o=new zf(E,t.width,t.height,l,r,a));let de=new Ag(p,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=_t.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=_t.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(_){_!==void 0&&(he=_,this.setSize(ke,K,!1))},this.getSize=function(_){return _.set(ke,K)},this.setSize=function(_,A,G=!0){if(de.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=_,K=A,t.width=Math.floor(_*he),t.height=Math.floor(A*he),G===!0&&(t.style.width=_+"px",t.style.height=A+"px"),o!==null&&o.setSize(t.width,t.height),this.setViewport(0,0,_,A)},this.getDrawingBufferSize=function(_){return _.set(ke*he,K*he).floor()},this.setDrawingBufferSize=function(_,A,G){ke=_,K=A,he=G,t.width=Math.floor(_*G),t.height=Math.floor(A*G),this.setViewport(0,0,_,A)},this.setEffects=function(_){if(E===Ai){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let A=0;A<_.length;A++)if(_[A].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}o.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy($)},this.getViewport=function(_){return _.copy(We)},this.setViewport=function(_,A,G,L){_.isVector4?We.set(_.x,_.y,_.z,_.w):We.set(_,A,G,L),y.viewport($.copy(We).multiplyScalar(he).round())},this.getScissor=function(_){return _.copy(we)},this.setScissor=function(_,A,G,L){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,A,G,L),y.scissor(re.copy(we).multiplyScalar(he).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(_){y.setScissorTest(St=_)},this.setOpaqueSort=function(_){pe=_},this.setTransparentSort=function(_){Ve=_},this.getClearColor=function(_){return _.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(_=!0,A=!0,G=!0){let L=0;if(_){let I=!1;if(j!==null){let se=j.texture.format;I=b.has(se)}if(I){let se=j.texture.type,ue=x.has(se),fe=Ze.getClearColor(),Me=Ze.getClearAlpha(),Pe=fe.r,Ge=fe.g,Qe=fe.b;ue?(f[0]=Pe,f[1]=Ge,f[2]=Qe,f[3]=Me,D.clearBufferuiv(D.COLOR,0,f)):(C[0]=Pe,C[1]=Ge,C[2]=Qe,C[3]=Me,D.clearBufferiv(D.COLOR,0,C))}else L|=D.COLOR_BUFFER_BIT}A&&(L|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(L|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&D.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),N=_},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",Vt,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Ze.dispose(),De.dispose(),le.dispose(),P.dispose(),ee.dispose(),O.dispose(),Re.dispose(),Le.dispose(),ce.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ue),de.removeEventListener("sessionend",ye),Se.stop()};function je(_){_.preventDefault(),Ln("WebGLRenderer: Context Lost."),V=!0}function Vt(){Ln("WebGLRenderer: Context Restored."),V=!1;let _=S.autoReset,A=He.enabled,G=He.autoUpdate,L=He.needsUpdate,I=He.type;oe(),S.autoReset=_,He.enabled=A,He.autoUpdate=G,He.needsUpdate=L,He.type=I}function vt(_){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function g(_){let A=_.target;A.removeEventListener("dispose",g),W(A)}function W(_){X(_),P.remove(_)}function X(_){let A=P.get(_).programs;A!==void 0&&(A.forEach(function(G){ce.releaseProgram(G)}),_.isShaderMaterial&&ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,A,G,L,I,se){A===null&&(A=Ht);let ue=I.isMesh&&I.matrixWorld.determinantAffine()<0,fe=ii(_,A,G,L,I);y.setMaterial(L,ue);let Me=G.index,Pe=1;if(L.wireframe===!0){if(Me=ve.getWireframeAttribute(G),Me===void 0)return;Pe=2}let Ge=G.drawRange,Qe=G.attributes.position,Ae=Ge.start*Pe,ft=(Ge.start+Ge.count)*Pe;se!==null&&(Ae=Math.max(Ae,se.start*Pe),ft=Math.min(ft,(se.start+se.count)*Pe)),Me!==null?(Ae=Math.max(Ae,0),ft=Math.min(ft,Me.count)):Qe!=null&&(Ae=Math.max(Ae,0),ft=Math.min(ft,Qe.count));let Tt=ft-Ae;if(Tt<0||Tt===1/0)return;Re.setup(I,L,fe,G,Me);let Fe,Ye=U;if(Me!==null&&(Fe=ge.get(Me),Ye=Q,Ye.setIndex(Fe)),I.isMesh)L.wireframe===!0?(y.setLineWidth(L.wireframeLinewidth*kt()),Ye.setMode(D.LINES)):Ye.setMode(D.TRIANGLES);else if(I.isLine){let et=L.linewidth;et===void 0&&(et=1),y.setLineWidth(et*kt()),I.isLineSegments?Ye.setMode(D.LINES):I.isLineLoop?Ye.setMode(D.LINE_LOOP):Ye.setMode(D.LINE_STRIP)}else I.isPoints?Ye.setMode(D.POINTS):I.isSprite&&Ye.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Ye.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let et=I._multiDrawStarts,me=I._multiDrawCounts,tt=I._multiDrawCount,si=Me?ge.get(Me).bytesPerElement:1,Ft=P.get(L).currentProgram.getUniforms();for(let Et=0;Et<tt;Et++)Ft.setValue(D,"_gl_DrawID",Et),Ye.render(et[Et]/si,me[Et])}else if(I.isInstancedMesh)Ye.renderInstances(Ae,Tt,I.count);else if(G.isInstancedBufferGeometry){let et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,me=Math.min(G.instanceCount,et);Ye.renderInstances(Ae,Tt,me)}else Ye.render(Ae,Tt)};function ie(_,A,G,L){N!==null&&_.isNodeMaterial&&N.setObject(L,_),$e===!0&&Be.setState(_,G,!1),_.transparent===!0&&_.side===Dt&&_.forceSinglePass===!1?(_.side=yi,_.needsUpdate=!0,yt(_,A,L),_.side=Cr,_.needsUpdate=!0,yt(_,A,L),_.side=Dt):yt(_,A,L)}this.compile=function(_,A,G=null){G===null&&(G=_),N!==null&&N.renderStart(_,A,G),T=le.get(G),T.init(A),w.push(T),G.traverseVisible(function(I){I.isLight&&I.layers.test(A.layers)&&(T.pushLight(I),I.castShadow&&T.pushShadow(I))}),_!==G&&_.traverseVisible(function(I){I.isLight&&I.layers.test(A.layers)&&(T.pushLight(I),I.castShadow&&T.pushShadow(I))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Lt=this.localClippingEnabled,$e=Be.init(this.clippingPlanes,Lt),$e===!0&&Be.setGlobalState(this.clippingPlanes,A),N!==null&&He.render(T.state.shadowsArray,G,A);let L=new Set;return _.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let se=I.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){let fe=se[ue];ie(fe,G,A,I),L.add(fe)}else ie(se,G,A,I),L.add(se)}),T=w.pop(),N!==null&&N.renderEnd(),L},this.compileAsync=function(_,A,G=null){let L=this.compile(_,A,G);return new Promise(I=>{function se(){if(L.forEach(function(ue){let fe=P.get(ue).currentProgram;(fe===void 0||fe.isReady())&&L.delete(ue)}),L.size===0){I(_);return}setTimeout(se,10)}_t.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ae=null;function q(_){ae&&ae(_)}function Ue(){Se.stop()}function ye(){Se.start()}let Se=new Nh;Se.setAnimationLoop(q),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(_){ae=_,de.setAnimationLoop(_),_===null?Se.stop():Se.start()},de.addEventListener("sessionstart",Ue),de.addEventListener("sessionend",ye),this.render=function(_,A){if(A!==void 0&&A.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;N!==null&&N.renderStart(_,A);let G=de.enabled===!0&&de.isPresenting===!0,L=o!==null&&(j===null||G)&&o.begin(p,j);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(o===null||o.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(A),A=de.getCamera()),_.isScene===!0&&_.onBeforeRender(p,_,A,j),T=le.get(_,w.length),T.init(A),T.state.textureUnits=Y.getTextureUnits(),w.push(T),zt.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),mt.setFromProjectionMatrix(zt,ji,A.reversedDepth),Lt=this.localClippingEnabled,$e=Be.init(this.clippingPlanes,Lt),s=De.get(_,R.length),s.init(),R.push(s),de.enabled===!0&&de.isPresenting===!0){let se=p.xr.getDepthSensingMesh();se!==null&&Te(se,A,-1/0,p.sortObjects)}Te(_,A,0,p.sortObjects),s.finish(),N!==null&&N.updateLights(T.state.lightsArray),p.sortObjects===!0&&s.sort(pe,Ve),Gt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Gt&&Ze.addToRenderList(s,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Be.beginShadows();let I=T.state.shadowsArray;if(He.render(I,_,A),$e===!0&&Be.endShadows(),(L&&o.hasRenderPass())===!1){let se=s.opaque,ue=s.transmissive;if(T.setupLights(),A.isArrayCamera){let fe=A.cameras;if(ue.length>0)for(let Me=0,Pe=fe.length;Me<Pe;Me++){let Ge=fe[Me];lt(se,ue,_,Ge)}Gt&&Ze.render(_);for(let Me=0,Pe=fe.length;Me<Pe;Me++){let Ge=fe[Me];Oe(s,_,Ge,Ge.viewport)}}else ue.length>0&&lt(se,ue,_,A),Gt&&Ze.render(_),Oe(s,_,A)}j!==null&&te===0&&(Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j)),L&&o.end(p),_.isScene===!0&&_.onAfterRender(p,_,A),Re.resetDefaultState(),_e=-1,Z=null,w.pop(),w.length>0?(T=w[w.length-1],Y.setTextureUnits(T.state.textureUnits),$e===!0&&Be.setGlobalState(p.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?s=R[R.length-1]:s=null,N!==null&&N.renderEnd()};function Te(_,A,G,L){if(_.visible===!1)return;if(_.layers.test(A.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(A);else if(_.isLightProbeGrid)T.pushLightProbeGrid(_);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(mt)){L&&Pt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(zt);let se=O.update(_),ue=_.material;ue.visible&&s.push(_,se,ue,G,Pt.z,null,A)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(mt))){let se=O.update(_),ue=_.material;if(L&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Pt.copy(_.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Pt.copy(se.boundingSphere.center)),Pt.applyMatrix4(_.matrixWorld).applyMatrix4(zt)),Array.isArray(ue)){let fe=se.groups;for(let Me=0,Pe=fe.length;Me<Pe;Me++){let Ge=fe[Me],Qe=ue[Ge.materialIndex];Qe&&Qe.visible&&s.push(_,se,Qe,G,Pt.z,Ge,A)}}else ue.visible&&s.push(_,se,ue,G,Pt.z,null,A)}}let I=_.children;for(let se=0,ue=I.length;se<ue;se++)Te(I[se],A,G,L)}function Oe(_,A,G,L){let{opaque:I,transmissive:se,transparent:ue}=_;T.setupLightsView(G),$e===!0&&Be.setGlobalState(p.clippingPlanes,G),L&&y.viewport($.copy(L)),I.length>0&&Ut(I,A,G),se.length>0&&Ut(se,A,G),ue.length>0&&Ut(ue,A,G),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function lt(_,A,G,L){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[L.id]===void 0){let Qe=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[L.id]=new zi(1,1,{generateMipmaps:!0,type:Qe?Zi:Ai,minFilter:wr,samples:Math.max(4,bt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let I=T.state.transmissionRenderTarget[L.id],se=L.viewport||$;I.setSize(se.z*p.transmissionResolutionScale,se.w*p.transmissionResolutionScale);let ue=p.getRenderTarget(),fe=p.getActiveCubeFace(),Me=p.getActiveMipmapLevel();p.setRenderTarget(I),p.getClearColor(ze),Rt=p.getClearAlpha(),Rt<1&&p.setClearColor(16777215,.5),p.clear(),Gt&&Ze.render(G);let Pe=p.toneMapping;p.toneMapping=Yi;let Ge=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),T.setupLightsView(L),$e===!0&&Be.setGlobalState(p.clippingPlanes,L),Ut(_,G,L),Y.updateMultisampleRenderTarget(I),Y.updateRenderTargetMipmap(I),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ae=0,ft=A.length;Ae<ft;Ae++){let Tt=A[Ae],{object:Fe,geometry:Ye,material:et,group:me}=Tt;if(et.side===Dt&&Fe.layers.test(L.layers)){let tt=et.side;et.side=yi,et.needsUpdate=!0,Nt(Fe,G,L,Ye,et,me),et.side=tt,et.needsUpdate=!0,Qe=!0}}Qe===!0&&(Y.updateMultisampleRenderTarget(I),Y.updateRenderTargetMipmap(I))}p.setRenderTarget(ue,fe,Me),p.setClearColor(ze,Rt),Ge!==void 0&&(L.viewport=Ge),p.toneMapping=Pe}function Ut(_,A,G){let L=A.isScene===!0?A.overrideMaterial:null;for(let I=0,se=_.length;I<se;I++){let ue=_[I],{object:fe,geometry:Me,group:Pe}=ue,Ge=ue.material;Ge.allowOverride===!0&&L!==null&&(Ge=L),fe.layers.test(G.layers)&&Nt(fe,A,G,Me,Ge,Pe)}}function Nt(_,A,G,L,I,se){N!==null&&I.isNodeMaterial&&N.setObject(_,I),_.onBeforeRender(p,A,G,L,I,se),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),I.onBeforeRender(p,A,G,L,_,se),I.transparent===!0&&I.side===Dt&&I.forceSinglePass===!1?(I.side=yi,I.needsUpdate=!0,p.renderBufferDirect(G,A,L,I,_,se),I.side=Cr,I.needsUpdate=!0,p.renderBufferDirect(G,A,L,I,_,se),I.side=Dt):p.renderBufferDirect(G,A,L,I,_,se),_.onAfterRender(p,A,G,L,I,se)}function yt(_,A,G){A.isScene!==!0&&(A=Ht);let L=P.get(_),I=T.state.lights,se=T.state.shadowsArray,ue=I.state.version,fe=ce.getParameters(_,I.state,se,A,G,T.state.lightProbeGridArray),Me=ce.getProgramCacheKey(fe),Pe=L.programs;L.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,L.fog=A.fog;let Ge=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;L.envMap=ee.get(_.envMap||L.environment,Ge),L.envMapRotation=L.environment!==null&&_.envMap===null?A.environmentRotation:_.envMapRotation,Pe===void 0&&(_.addEventListener("dispose",g),Pe=new Map,L.programs=Pe);let Qe=Pe.get(Me);if(Qe!==void 0){if(L.currentProgram===Qe&&L.lightsStateVersion===ue)return Ne(_,fe),Qe}else fe.uniforms=ce.getUniforms(_),N!==null&&_.isNodeMaterial&&N.build(_,G,fe),_.onBeforeCompile(fe,p),Qe=ce.acquireProgram(fe,Me),Pe.set(Me,Qe),L.uniforms=fe.uniforms;let Ae=L.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=Be.uniform),Ne(_,fe),L.needsLights=mi(_),L.lightsStateVersion=ue,L.needsLights&&(Ae.ambientLightColor.value=I.state.ambient,Ae.lightProbe.value=I.state.probe,Ae.sunLights.value=I.state.sun,Ae.sunLightShadows.value=I.state.sunShadow,Ae.directionalLights.value=I.state.directional,Ae.directionalLightShadows.value=I.state.directionalShadow,Ae.spotLights.value=I.state.spot,Ae.spotLightShadows.value=I.state.spotShadow,Ae.rectAreaLights.value=I.state.rectArea,Ae.ltc_1.value=I.state.rectAreaLTC1,Ae.ltc_2.value=I.state.rectAreaLTC2,Ae.pointLights.value=I.state.point,Ae.pointLightShadows.value=I.state.pointShadow,Ae.hemisphereLights.value=I.state.hemi,Ae.sunShadowMatrix.value=I.state.sunShadowMatrix,Ae.sunShadowCascade.value=I.state.sunShadowCascade,Ae.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ae.spotLightMatrix.value=I.state.spotLightMatrix,Ae.spotLightMap.value=I.state.spotLightMap,Ae.pointShadowMatrix.value=I.state.pointShadowMatrix),L.lightProbeGrid=T.state.lightProbeGridArray.length>0,L.currentProgram=Qe,L.uniformsList=null,Qe}function Mi(_){if(_.uniformsList===null){let A=_.currentProgram.getUniforms();_.uniformsList=An.seqWithValue(A.seq,_.uniforms)}return _.uniformsList}function Ne(_,A){let G=P.get(_);G.outputColorSpace=A.outputColorSpace,G.batching=A.batching,G.batchingColor=A.batchingColor,G.instancing=A.instancing,G.instancingColor=A.instancingColor,G.instancingMorph=A.instancingMorph,G.skinning=A.skinning,G.morphTargets=A.morphTargets,G.morphNormals=A.morphNormals,G.morphColors=A.morphColors,G.morphTargetsCount=A.morphTargetsCount,G.numClippingPlanes=A.numClippingPlanes,G.numIntersection=A.numClipIntersection,G.vertexAlphas=A.vertexAlphas,G.vertexTangents=A.vertexTangents,G.toneMapping=A.toneMapping}function di(_,A){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;H.setFromMatrixPosition(A.matrixWorld);for(let G=0,L=_.length;G<L;G++){let I=_[G];if(I.texture!==null&&I.boundingBox.containsPoint(H))return I}return null}function ii(_,A,G,L,I){A.isScene!==!0&&(A=Ht),Y.resetTextureUnits();let se=A.fog,ue=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?A.environment:null,fe=j===null?p.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gt.workingColorSpace,Me=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,Pe=ee.get(L.envMap||ue,Me),Ge=L.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qe=!!G.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Ae=!!G.morphAttributes.position,ft=!!G.morphAttributes.normal,Tt=!!G.morphAttributes.color,Fe=Yi;L.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=p.toneMapping);let Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=Ye!==void 0?Ye.length:0,me=P.get(L),tt=T.state.lights;if($e===!0&&(Lt===!0||_!==Z)){let ot=_===Z&&L.id===_e;Be.setState(L,_,ot)}let si=!1;L.version===me.__version?(me.needsLights&&me.lightsStateVersion!==tt.state.version||me.outputColorSpace!==fe||I.isBatchedMesh&&me.batching===!1||!I.isBatchedMesh&&me.batching===!0||I.isBatchedMesh&&me.batchingColor===!0&&I._colorsTexture===null||I.isBatchedMesh&&me.batchingColor===!1&&I._colorsTexture!==null||I.isInstancedMesh&&me.instancing===!1||!I.isInstancedMesh&&me.instancing===!0||I.isSkinnedMesh&&me.skinning===!1||!I.isSkinnedMesh&&me.skinning===!0||I.isInstancedMesh&&me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&me.instancingMorph===!1&&I.morphTexture!==null||me.envMap!==Pe||L.fog===!0&&me.fog!==se||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Be.numPlanes||me.numIntersection!==Be.numIntersection)||me.vertexAlphas!==Ge||me.vertexTangents!==Qe||me.morphTargets!==Ae||me.morphNormals!==ft||me.morphColors!==Tt||me.toneMapping!==Fe||me.morphTargetsCount!==et||!!me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(si=!0):(si=!0,me.__version=L.version);let Ft=me.currentProgram;si===!0&&(Ft=yt(L,A,I),N&&L.isNodeMaterial&&N.onUpdateProgram(L,Ft,me));let Et=!1,ri=!1,xi=!1,at=Ft.getUniforms(),It=me.uniforms;if(y.useProgram(Ft.program)&&(Et=!0,ri=!0,xi=!0),L.id!==_e&&(_e=L.id,ri=!0),me.needsLights){let ot=di(T.state.lightProbeGridArray,I);me.lightProbeGrid!==ot&&(me.lightProbeGrid=ot,ri=!0)}if(Et||Z!==_){y.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",_.projectionMatrix),at.setValue(D,"viewMatrix",_.matrixWorldInverse);let ot=at.map.cameraPosition;ot!==void 0&&ot.setValue(D,ui.setFromMatrixPosition(_.matrixWorld)),bt.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&at.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),Z!==_&&(Z=_,ri=!0,xi=!0)}if(me.needsLights&&(tt.state.sunShadowMap.length>0&&at.setValue(D,"sunShadowMap",tt.state.sunShadowMap,Y),tt.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",tt.state.directionalShadowMap,Y),tt.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",tt.state.spotShadowMap,Y),tt.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",tt.state.pointShadowMap,Y)),I.isSkinnedMesh){at.setOptional(D,I,"bindMatrix"),at.setOptional(D,I,"bindMatrixInverse");let ot=I.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),at.setValue(D,"boneTexture",ot.boneTexture,Y))}I.isBatchedMesh&&(at.setOptional(D,I,"batchingTexture"),at.setValue(D,"batchingTexture",I._matricesTexture,Y),at.setOptional(D,I,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",I._indirectTexture,Y),at.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",I._colorsTexture,Y));let Si=G.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&xt.update(I,G,Ft),(ri||me.receiveShadow!==I.receiveShadow)&&(me.receiveShadow=I.receiveShadow,at.setValue(D,"receiveShadow",I.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&A.environment!==null&&(It.envMapIntensity.value=A.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Dg()),ri){if(at.setValue(D,"toneMappingExposure",p.toneMappingExposure),me.needsLights&&ci(It,xi),se&&L.fog===!0&&xe.refreshFogUniforms(It,se),xe.refreshMaterialUniforms(It,L,he,K,T.state.transmissionRenderTarget[_.id]),me.needsLights&&me.lightProbeGrid){let ot=me.lightProbeGrid;It.probesSH.value=ot.texture,It.probesMin.value.copy(ot.boundingBox.min),It.probesMax.value.copy(ot.boundingBox.max),It.probesResolution.value.copy(ot.resolution)}An.upload(D,Mi(me),It,Y)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(An.upload(D,Mi(me),It,Y),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&at.setValue(D,"center",I.center),at.setValue(D,"modelViewMatrix",I.modelViewMatrix),at.setValue(D,"normalMatrix",I.normalMatrix),at.setValue(D,"modelMatrix",I.matrixWorld),L.uniformsGroups!==void 0){let ot=L.uniformsGroups;for(let qt=0,Zt=ot.length;qt<Zt;qt++){let Ri=ot[qt];Le.update(Ri,Ft),Le.bind(Ri,Ft)}}return Ft}function ci(_,A){_.ambientLightColor.needsUpdate=A,_.lightProbe.needsUpdate=A,_.sunLights.needsUpdate=A,_.sunLightShadows.needsUpdate=A,_.directionalLights.needsUpdate=A,_.directionalLightShadows.needsUpdate=A,_.pointLights.needsUpdate=A,_.pointLightShadows.needsUpdate=A,_.spotLights.needsUpdate=A,_.spotLightShadows.needsUpdate=A,_.rectAreaLights.needsUpdate=A,_.hemisphereLights.needsUpdate=A}function mi(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(_,A,G){let L=P.get(_);L.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),P.get(_.texture).__webglTexture=A,P.get(_.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:G,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,A){let G=P.get(_);G.__webglFramebuffer=A,G.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(_,A=0,G=0){j=_,k=A,te=G;let L=null,I=!1,se=!1;if(_){let ue=P.get(_);if(ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),$.copy(_.viewport),re.copy(_.scissor),rt=_.scissorTest,y.viewport($),y.scissor(re),y.setScissorTest(rt),_e=-1;return}else if(ue.__webglFramebuffer===void 0)Y.setupRenderTarget(_);else if(ue.__hasExternalTextures)Y.rebindTextures(_,P.get(_.texture).__webglTexture,P.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Pe=_.depthTexture;if(ue.__boundDepthTexture!==Pe){if(Pe!==null&&P.has(Pe)&&(_.width!==Pe.image.width||_.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(_)}}let fe=_.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(se=!0);let Me=P.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Me[A])?L=Me[A][G]:L=Me[A],I=!0):_.samples>0&&Y.useMultisampledRTT(_)===!1?L=P.get(_).__webglMultisampledFramebuffer:Array.isArray(Me)?L=Me[G]:L=Me,$.copy(_.viewport),re.copy(_.scissor),rt=_.scissorTest}else $.copy(We).multiplyScalar(he).floor(),re.copy(we).multiplyScalar(he).floor(),rt=St;if(G!==0&&(L=B),y.bindFramebuffer(D.FRAMEBUFFER,L)&&y.drawBuffers(_,L),y.viewport($),y.scissor(re),y.setScissorTest(rt),I){let ue=P.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+A,ue.__webglTexture,G)}else if(se){let ue=A;for(let fe=0;fe<_.textures.length;fe++){let Me=P.get(_.textures[fe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+fe,Me.__webglTexture,G,ue)}}else if(_!==null&&G!==0){let ue=P.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,G)}_e=-1};function qe(_){let A=P.get(_);return(A.__readFormat!==_.format||A.__readType!==_.type)&&(A.__readFormat=_.format,A.__readType=_.type,A.__formatReadable=bt.textureFormatReadable(_.format),A.__typeReadable=bt.textureTypeReadable(_.type)),A}this.readRenderTargetPixels=function(_,A,G,L,I,se,ue,fe=0){if(!(_&&_.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=P.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){y.bindFramebuffer(D.FRAMEBUFFER,Me);try{let Pe=_.textures[fe],Ge=Pe.format,Qe=Pe.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe);let Ae=qe(Pe);if(Ae.__formatReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=_.width-L&&G>=0&&G<=_.height-I&&D.readPixels(A,G,L,I,ne.convert(Ge),ne.convert(Qe),se)}finally{let Pe=j!==null?P.get(j).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(_,A,G,L,I,se,ue,fe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=P.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me)if(A>=0&&A<=_.width-L&&G>=0&&G<=_.height-I){y.bindFramebuffer(D.FRAMEBUFFER,Me);let Pe=_.textures[fe],Ge=Pe.format,Qe=Pe.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe);let Ae=qe(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ft),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(A,G,L,I,ne.convert(Ge),ne.convert(Qe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Tt=j!==null?P.get(j).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Tt);let Fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bu(D,Fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ft),D.deleteSync(Fe),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,A=null,G=0){let L=Math.pow(2,-G),I=Math.floor(_.image.width*L),se=Math.floor(_.image.height*L),ue=A!==null?A.x:0,fe=A!==null?A.y:0;Y.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ue,fe,I,se),y.unbindTexture()},this.copyTextureToTexture=function(_,A,G=null,L=null,I=0,se=0){let ue,fe,Me,Pe,Ge,Qe,Ae,ft,Tt,Fe=_.isCompressedTexture?_.mipmaps[se]:_.image;if(G!==null)ue=G.max.x-G.min.x,fe=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Ge=G.min.y,Qe=G.isBox3?G.min.z:0;else{let It=Math.pow(2,-I);ue=Math.floor(Fe.width*It),fe=Math.floor(Fe.height*It),_.isDataArrayTexture?Me=Fe.depth:_.isData3DTexture?Me=Math.floor(Fe.depth*It):Me=1,Pe=0,Ge=0,Qe=0}L!==null?(Ae=L.x,ft=L.y,Tt=L.z):(Ae=0,ft=0,Tt=0);let Ye=ne.convert(A.format),et=ne.convert(A.type),me;A.isData3DTexture?(Y.setTexture3D(A,0),me=D.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(Y.setTexture2DArray(A,0),me=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(A,0),me=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,A.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,A.unpackAlignment);let tt=y.getParameter(D.UNPACK_ROW_LENGTH),si=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Ft=y.getParameter(D.UNPACK_SKIP_PIXELS),Et=y.getParameter(D.UNPACK_SKIP_ROWS),ri=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,Fe.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fe.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),y.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe);let xi=_.isDataArrayTexture||_.isData3DTexture,at=A.isDataArrayTexture||A.isData3DTexture;if(_.isDepthTexture){let It=P.get(_),Si=P.get(A),ot=P.get(It.__renderTarget),qt=P.get(Si.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,ot.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Zt=0;Zt<Me;Zt++)xi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(_).__webglTexture,I,Qe+Zt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(A).__webglTexture,se,Tt+Zt)),D.blitFramebuffer(Pe,Ge,ue,fe,Ae,ft,ue,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(I!==0||_.isRenderTargetTexture||P.has(_)){let It=P.get(_),Si=P.get(A);y.bindFramebuffer(D.READ_FRAMEBUFFER,J),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let ot=0;ot<Me;ot++)xi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,I,Qe+ot):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,I),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Si.__webglTexture,se,Tt+ot):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Si.__webglTexture,se),I!==0?D.blitFramebuffer(Pe,Ge,ue,fe,Ae,ft,ue,fe,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(me,se,Ae,ft,Tt+ot,Pe,Ge,ue,fe):D.copyTexSubImage2D(me,se,Ae,ft,Pe,Ge,ue,fe);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(me,se,Ae,ft,Tt,ue,fe,Me,Ye,et,Fe.data):A.isCompressedArrayTexture?D.compressedTexSubImage3D(me,se,Ae,ft,Tt,ue,fe,Me,Ye,Fe.data):D.texSubImage3D(me,se,Ae,ft,Tt,ue,fe,Me,Ye,et,Fe):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Ae,ft,ue,fe,Ye,et,Fe.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Ae,ft,Fe.width,Fe.height,Ye,Fe.data):D.texSubImage2D(D.TEXTURE_2D,se,Ae,ft,ue,fe,Ye,et,Fe);y.pixelStorei(D.UNPACK_ROW_LENGTH,tt),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,si),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),y.pixelStorei(D.UNPACK_SKIP_ROWS,Et),y.pixelStorei(D.UNPACK_SKIP_IMAGES,ri),se===0&&A.generateMipmaps&&D.generateMipmap(me),y.unbindTexture()},this.initRenderTarget=function(_){P.get(_).__webglFramebuffer===void 0&&Y.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Y.setTextureCube(_,0):_.isData3DTexture?Y.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Y.setTexture2DArray(_,0):Y.setTexture2D(_,0),y.unbindTexture()},this.resetState=function(){k=0,te=0,j=null,y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}},Xl={type:"change"},No={type:"start"},Vh={type:"end"},Mn=new ka,jl=new nr,Ug=Math.cos(70*Gu.DEG2RAD),Jt=new z,Ei=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bs=1e-6,Ng=class extends Ud{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ia.ROTATE,MIDDLE:ia.DOLLY,RIGHT:ia.PAN},this.touches={ONE:ea.ROTATE,TWO:ea.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new vr,this._lastTargetPosition=new z,this._quat=new vr().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sl,this._sphericalDelta=new Sl,this._scale=1,this._panOffset=new z,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new z,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Og.bind(this),this._onPointerDown=Fg.bind(this),this._onPointerUp=Bg.bind(this),this._onContextMenu=Xg.bind(this),this._onMouseWheel=Gg.bind(this),this._onKeyDown=kg.bind(this),this._onTouchStart=Vg.bind(this),this._onTouchMove=Wg.bind(this),this._onMouseDown=zg.bind(this),this._onMouseMove=Hg.bind(this),this._interceptControlDown=jg.bind(this),this._interceptControlUp=Yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xl),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ei:i>Math.PI&&(i-=Ei),r<-Math.PI?r+=Ei:r>Math.PI&&(r-=Ei),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let l=Jt.length();n=this._clampDistance(l*this._scale);let h=l-n;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){let l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;let u=new z(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),n=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Mn.origin.copy(this.object.position),Mn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mn.direction))<Ug?this.object.lookAt(this.target):(jl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mn.intersectPlane(jl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>bs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bs||this._lastTargetPosition.distanceToSquared(this.target)>bs?(this.dispatchEvent(Xl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ei/60*this.autoRotateSpeed*e:Ei/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Jt.copy(r).sub(this.target);let a=Jt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,l=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(n,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Fg(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Og(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Bg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vh),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function zg(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ia.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=At.DOLLY;break;case ia.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=At.ROTATE}break;case ia.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(No)}function Hg(e){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Gg(e){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(e.preventDefault(),this.dispatchEvent(No),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Vh))}function kg(e){this.enabled!==!1&&this._handleKeyDown(e)}function Vg(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ea.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=At.TOUCH_ROTATE;break;case ea.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case ea.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=At.TOUCH_DOLLY_PAN;break;case ea.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(No)}function Wg(e){switch(this._trackPointer(e),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=At.NONE}}function Xg(e){this.enabled!==!1&&e.preventDefault()}function jg(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yl(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new td;a.background=new it(16777215);let n=t.clientWidth||900,l=t.clientHeight||480,h=new Ii(35,n/l,.1,100);h.position.set(8.5,4.2,7.5);let u=new Lg({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setSize(n,l),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=xo,u.toneMappingExposure=1.15,u.shadowMap.enabled=!0,u.shadowMap.type=Ua,t.appendChild(u.domElement);let d=new Ng(h,u.domElement);d.enableDamping=!0,d.dampingFactor=.05,d.maxPolarAngle=Math.PI/2-.05,d.minDistance=2,d.maxDistance=28,d.target.set(0,0,0),d.autoRotate=!0,d.autoRotateSpeed=.6;let m=null,v=()=>{d.autoRotate=!1,clearTimeout(m),m=setTimeout(()=>{de.autoRotate&&(d.autoRotate=!0)},6e3)};u.domElement.addEventListener("pointerdown",v),u.domElement.addEventListener("wheel",v,{passive:!0}),u.domElement.addEventListener("touchstart",v,{passive:!0});let c=new Rd(16777215,.9);a.add(c);let M=new _s(16777215,1.25);M.position.set(12,16,14),M.castShadow=!0,M.shadow.mapSize.width=1024,M.shadow.mapSize.height=1024,M.shadow.bias=-5e-4,a.add(M);let E=new _s(14412542,.7);E.position.set(-14,8,-10),a.add(E);let b=new _s(15793652,.6);b.position.set(0,18,0),a.add(b);let x=new Do(30,30),f=new _d({opacity:.12}),C=new Yt(x,f);C.rotation.x=-Math.PI/2,C.position.y=-1.65,C.receiveShadow=!0,a.add(C);let H=new Ld(24,24,14870768,15857145);H.position.y=-1.64,a.add(H);let s={aluFrame:new Ot({color:13949149,metalness:.8,roughness:.25,side:Dt}),galvSteel:new Ot({color:12897749,metalness:.65,roughness:.45,side:Dt}),stainless:new Ot({color:14476266,metalness:.55,roughness:.35,side:Dt}),baseSkid:new Ot({color:9741240,metalness:.75,roughness:.35,side:Dt}),panelSolid:new Ot({color:16317180,metalness:.15,roughness:.35,side:Dt}),panelCutaway:new yd({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:Dt}),fanHousing:new Ot({color:165063,metalness:.6,roughness:.3,side:Dt}),fanImpeller:new Ot({color:3718648,metalness:.75,roughness:.25,side:Dt}),motorCast:new Ot({color:1976635,metalness:.85,roughness:.3,side:Dt}),copperPipe:new Ot({color:12730636,metalness:.9,roughness:.2,side:Dt}),coolingFin:new Ot({color:3718648,metalness:.55,roughness:.35,side:Dt}),heatingFin:new Ot({color:16281969,metalness:.55,roughness:.35,side:Dt}),rotorWheel:new Ot({color:6583435,metalness:.7,roughness:.4,side:Dt}),filterCloth:new Ot({color:16317180,roughness:.95,metalness:.05,side:Dt}),filterG4:new Ot({color:14870768,roughness:.9,metalness:.05,side:Dt}),damperBlade:new Ot({color:9741240,metalness:.8,roughness:.25,side:Dt}),actuatorOrange:new Ot({color:15357964,metalness:.2,roughness:.4}),drainPan:new Ot({color:14476266,metalness:.55,roughness:.35,side:Dt}),doorHandle:new Ot({color:988970,metalness:.8,roughness:.3}),rubberBlack:new Ot({color:988970,roughness:.85,metalness:.1,side:Dt}),brassGold:new Ot({color:14251782,metalness:.85,roughness:.25}),springSilver:new Ot({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new Ot({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new Ot({color:16777215,roughness:.2}),touchscreen:new Un({color:165063})},T=[],R=[],w=new jt;a.add(w);function o(g,W,X,ie,ae=0,q=0,Ue=0,ye=!0,Se=!0){let Te=new Bn(g,W,X),Oe=new Yt(Te,ie);return Oe.position.set(ae,q,Ue),Oe.castShadow=ye,Oe.receiveShadow=Se,Oe}function p(g,W,X,ie,ae,q=0,Ue=0,ye=0,Se=0,Te=0,Oe=!1,lt=0,Ut=Math.PI*2){let Nt=new mo(g,W,X,ie,1,Oe,lt,Ut),yt=new Yt(Nt,ae);return yt.position.set(q,Ue,ye),Se&&(yt.rotation.x=Se),Te&&(yt.rotation.z=Te),yt.castShadow=!0,yt.receiveShadow=!0,yt}function V(g,W=s.panelSolid,X=s.panelCutaway){return g.userData.solidMat=W,g.userData.cutawayMat=X,R.push(g),g}function N(g){let W=-1.4100000000000001,X=o(8.4+.2,.22,.1,s.baseSkid,0,W,1-.05),ie=o(8.4+.2,.22,.1,s.baseSkid,0,W,-1+.05);g.add(X,ie);let ae=[-4.2,-2.5,-.8,.8,2.5,4.2];ae.forEach(Ee=>{g.add(o(.12,.22,2-.2,s.baseSkid,Ee,W,0))}),[-2.5,.8].forEach(Ee=>{g.add(o(.28,.12,.12,s.aluFrame,Ee,W,1-.04)),g.add(o(.28,.12,.12,s.aluFrame,Ee,W,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([Ee,nt])=>{g.add(o(.08,.18,.08,s.yellowSafety,Ee,W+.06,nt))});let q=.08;g.add(o(8.4,q,q,s.aluFrame,0,-1.3+q/2,1-q/2),o(8.4,q,q,s.aluFrame,0,-1.3+q/2,-1+q/2),o(8.4,q,q,s.aluFrame,0,1.3-q/2,1-q/2),o(8.4,q,q,s.aluFrame,0,1.3-q/2,-1+q/2)),ae.forEach(Ee=>{g.add(o(q,2.6,q,s.aluFrame,Ee,0,1-q/2),o(q,2.6,q,s.aluFrame,Ee,0,-1+q/2),o(q,q,2-q*2,s.aluFrame,Ee,1.3-q/2,0),o(q,q,2-q*2,s.aluFrame,Ee,-1.3+q/2,0))});let Ue=5,ye=o(Ue,.05,2-.16,s.galvSteel,-4.2+Ue/2,0,0);g.add(ye),g.add(o(8.4-.1,2.6-.1,.05,s.panelSolid,0,0,-1+.04)),g.add(o(8.4-.1,.05,2-.16,s.galvSteel,0,-1.3+.03,0)),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,4.2-.03,0,0));let Se=o(.18,1.2,1.2,s.galvSteel,4.2+.09,-.2,0);g.add(Se),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,-4.2+.03,0,0));let Te=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],Oe=[1.7,1.7,1.6,1.7,1.7];Te.forEach((Ee,nt)=>{let Je=Oe[nt]-.08,Kt=o(Je,.04,2-.16,s.panelCutaway,Ee,1.3-.02,0,!1,!1);g.add(Kt),V(Kt,s.panelSolid,s.panelCutaway);let Dr=o(Je,2.6-.18,.03,s.panelCutaway,Ee,0,1-.02,!1,!1);g.add(Dr),V(Dr,s.panelSolid,s.panelCutaway);let Ui=.04;g.add(o(Je,Ui,.02,s.aluFrame,Ee,(2.6-.18)/2,1),o(Je,Ui,.02,s.aluFrame,Ee,-2.42/2,1),o(Ui,2.6-.18,.02,s.aluFrame,Ee-Je/2,0,1),o(Ui,2.6-.18,.02,s.aluFrame,Ee+Je/2,0,1)),[-.45,.45].forEach(Ma=>{g.add(o(.04,.14,.05,s.doorHandle,Ee+Je/2-.1,Ma,1+.02))}),[-.55,.55].forEach(Ma=>{g.add(o(.03,.1,.03,s.aluFrame,Ee-Je/2+.04,Ma,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([Ee,nt])=>{let Je=p(.14,.14,.04,24,s.aluFrame,Ee,nt,1,Math.PI/2),Kt=p(.11,.11,.045,20,s.panelCutaway,Ee,nt,1,Math.PI/2);g.add(Je,Kt)}),[[-1.65,.1],[3.35,.35]].forEach(([Ee,nt])=>{let Je=p(.08,.08,.03,20,s.aluFrame,Ee,nt,1.015,Math.PI/2),Kt=p(.07,.07,.035,20,s.gaugeFace,Ee,nt,1+.015,Math.PI/2);g.add(Je,Kt),g.add(p(.008,.008,.22,8,s.panelCutaway,Ee-.03,nt-.12,1+.01)),g.add(p(.008,.008,.22,8,s.panelCutaway,Ee+.03,nt-.12,1+.01))});let lt=.48,Ut=.68,Nt=.18,yt=o(lt,Ut,Nt,s.galvSteel,2.75,.45,1+Nt/2),Mi=o(.24,.16,.01,s.touchscreen,2.75,.56,1+Nt+.005),Ne=p(.014,.014,.02,10,s.coolingFin,2.65,.42,1+Nt+.01,Math.PI/2),di=p(.014,.014,.02,10,s.yellowSafety,2.75,.42,1+Nt+.01,Math.PI/2),ii=p(.014,.014,.02,10,s.heatingFin,2.85,.42,1+Nt+.01,Math.PI/2),ci=o(.08,.08,.01,s.yellowSafety,2.75,.3,1+Nt+.005),mi=o(.04,.06,.03,s.heatingFin,2.75,.3,1+Nt+.02);g.add(yt,Mi,Ne,di,ii,ci,mi);let qe=-1.3/2-.05,_=2-.35,A=.85,G=o(.12,A,_,s.aluFrame,-4.2-.06,qe,0);g.add(G);for(let Ee=0;Ee<5;Ee++){let nt=qe-A/2+.1+Ee*((A-.2)/4),Je=o(.08,.015,_-.06,s.damperBlade,-4.2-.06,nt,0);Je.rotation.z=.55,g.add(Je)}let L=o(.16,.2,.14,s.actuatorOrange,-4.2-.06,qe,1+.06);g.add(L);let I=o(.1,1.3-.35,2-.35,s.aluFrame,-3.7,qe,0),se=o(.08,1.3-.4,2-.4,s.filterG4,-3.7,qe,0);g.add(I,se);let ue=1.3/2-.05,fe=o(.12,A,_,s.aluFrame,-4.2-.06,ue,0);g.add(fe);for(let Ee=0;Ee<5;Ee++){let nt=ue-A/2+.1+Ee*((A-.2)/4),Je=o(.08,.015,_-.06,s.damperBlade,-4.2-.06,nt,0);Je.rotation.z=-.55,g.add(Je)}let Me=o(.16,.2,.14,s.actuatorOrange,-4.2-.06,ue,1+.06);g.add(Me);let Pe=new jt;Pe.position.set(-2.85,ue,0),g.add(Pe);let Ge=p(.38,.3,.12,24,s.aluFrame,.2,0,0,0,Math.PI/2),Qe=p(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);Pe.add(Ge,Qe);let Ae=p(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);Pe.add(Ae);let ft=p(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);Pe.add(ft),T.push(()=>{Qe.rotation.x+=.14});let Tt=o(.1,1.3-.35,2-.35,s.aluFrame,-2.4,qe,0);g.add(Tt);for(let Ee=0;Ee<2;Ee++)for(let nt=0;nt<3;nt++){let Je=qe-.22+Ee*.44,Kt=-1+.35+nt*((2-.7)/2),Dr=new Ca(.18,.85,4),Ui=new Yt(Dr,s.filterCloth);Ui.position.set(-1.9,Je,Kt),Ui.rotation.z=-Math.PI/2,Ui.scale.set(.9,1.2,.7),g.add(Ui)}let Fe=new jt;Fe.position.set(0,0,0),g.add(Fe);let Ye=o(.38,2.6-.2,2-.2,s.aluFrame,0,0,0);g.add(Ye);let et=p(1.12,1.12,.32,36,s.aluFrame,0,0,0,0,Math.PI/2),me=p(1.08,1.08,.3,32,s.rotorWheel,0,0,0,0,Math.PI/2);Fe.add(et,me);for(let Ee=0;Ee<12;Ee++){let nt=Ee/12*Math.PI*2,Je=o(.025,2.12,.02,s.aluFrame,0,0,0);Je.rotation.x=nt,Fe.add(Je)}let tt=p(.09,.09,.22,12,s.motorCast,.22,1.05,.75,0,Math.PI/2),si=p(.02,.02,.3,8,s.doorHandle,.22,.95,.75);g.add(tt,si),T.push(()=>{Fe.rotation.x+=.01});let Ft=2-.35,Et=1.3-.35,ri=o(.24,Et,Ft,s.coolingFin,1.15,qe,0);g.add(ri),[-.5,.5].forEach(Ee=>{let nt=p(.045,.045,Et+.1,14,s.copperPipe,1.15,qe,Ee);g.add(nt)});for(let Ee=0;Ee<8;Ee++){let nt=qe-Et/2+.1+Ee*((Et-.2)/7),Je=new Yt(new pl(.032,.012,8,12,Math.PI),s.copperPipe);Je.position.set(1.15,nt,1-.18),Je.rotation.y=Math.PI/2,Je.rotation.x=Math.PI/2,g.add(Je)}let xi=o(1.3,.09,Ft+.1,s.drainPan,1.5,-1.3+.1,0);g.add(xi);let at=p(.02,.02,.18,10,s.stainless,1.8,-1.3+.06,1-.05,0,0);g.add(at);let It=o(.12,Et,Ft,s.aluFrame,1.45,qe,0);g.add(It);for(let Ee=0;Ee<12;Ee++){let nt=-.7+Ee*((Ft-.2)/11),Je=o(.08,Et-.05,.012,s.aluFrame,1.45,qe,nt);Je.rotation.y=.35,g.add(Je)}let Si=o(.18,Et,Ft,s.heatingFin,1.85,qe,0);g.add(Si),[-.4,.4].forEach(Ee=>{let nt=p(.04,.04,Et+.1,14,s.copperPipe,1.85,qe,Ee);g.add(nt)});let ot=new jt;ot.position.set(2.85,qe,0),g.add(ot);let qt=p(.48,.38,.18,28,s.aluFrame,-.4,0,0,0,Math.PI/2),Zt=p(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);ot.add(qt,Zt);let Ri=p(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),ma=p(.14,.05,.16,16,s.aluFrame,-.25,0,0,0,Math.PI/2);ot.add(Ri,ma),T.push(()=>{Ri.rotation.x+=.15});let ga=p(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),_a=o(.14,.12,.14,s.motorCast,.32,.26,0);ot.add(ga,_a);let va=o(1.1,.08,.8,s.baseSkid,.05,-Et/2+.08,0);ot.add(va),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ee,nt])=>{let Je=o(.12,.03,.12,s.motorCast,Ee,-Et/2+.02,nt),Kt=p(.04,.04,.12,10,s.springSilver,Ee,-Et/2+.08,nt);ot.add(Je,Kt)});let Ie=o(.1,Et,Ft,s.rubberBlack,2.35,qe,0);g.add(Ie);let ht=o(1.2,.03,.03,s.yellowSafety,2.9,qe+.4,1-.25),ct=o(1.2,.03,.03,s.yellowSafety,2.9,qe,1-.25);g.add(ht,ct);for(let Ee=-1;Ee<=1;Ee++){let nt=Ee*.45,Je=o(.65,Et-.1,.22,s.galvSteel,3.8,qe,nt),Kt=p(.11,.11,Et-.1,16,s.aluFrame,3.47,qe,nt);g.add(Je,Kt)}}function B(g){let W=-1.4100000000000001,X=o(8.6+.2,.22,.1,s.baseSkid,0,W,1-.05),ie=o(8.6+.2,.22,.1,s.baseSkid,0,W,-1+.05);g.add(X,ie);let ae=[-4.3,-2.6,-.9,.8,2.6,4.3];ae.forEach(Ie=>{g.add(o(.12,.22,2-.2,s.baseSkid,Ie,W,0))}),[-2.6,.8].forEach(Ie=>{g.add(o(.28,.12,.12,s.stainless,Ie,W,1-.04)),g.add(o(.28,.12,.12,s.stainless,Ie,W,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([Ie,ht])=>{g.add(o(.08,.18,.08,s.yellowSafety,Ie,W+.06,ht))});let q=.08;g.add(o(8.6,q,q,s.stainless,0,-1.3+q/2,1-q/2),o(8.6,q,q,s.stainless,0,-1.3+q/2,-1+q/2),o(8.6,q,q,s.stainless,0,1.3-q/2,1-q/2),o(8.6,q,q,s.stainless,0,1.3-q/2,-1+q/2)),ae.forEach(Ie=>{g.add(o(q,2.6,q,s.stainless,Ie,0,1-q/2),o(q,2.6,q,s.stainless,Ie,0,-1+q/2),o(q,q,2-q*2,s.stainless,Ie,1.3-q/2,0),o(q,q,2-q*2,s.stainless,Ie,-1.3+q/2,0))});let Ue=5.1,ye=o(Ue,.05,2-.16,s.stainless,-4.3+Ue/2,0,0);g.add(ye),g.add(o(8.6-.1,2.6-.1,.04,s.panelSolid,0,0,-1+.03)),g.add(o(8.6-.12,2.6-.12,.01,s.stainless,0,0,-1+.055)),g.add(o(8.6-.1,.05,2-.16,s.stainless,0,-1.3+.03,0));let Se=p(.04,.04,8.6-.2,12,s.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);g.add(Se),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,4.3-.03,0,0));let Te=o(.18,1.2,1.2,s.stainless,4.3+.09,-.2,0);g.add(Te),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,-4.3+.03,0,0));let Oe=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],lt=[1.7,1.7,1.7,1.8,1.7];Oe.forEach((Ie,ht)=>{let ct=lt[ht]-.08,Ee=o(ct,.04,2-.16,s.panelCutaway,Ie,1.3-.02,0,!1,!1);g.add(Ee),V(Ee,s.panelSolid,s.panelCutaway);let nt=o(ct,2.6-.18,.03,s.panelCutaway,Ie,0,1-.02,!1,!1);g.add(nt),V(nt,s.panelSolid,s.panelCutaway);let Je=.04;g.add(o(ct,Je,.02,s.stainless,Ie,(2.6-.18)/2,1),o(ct,Je,.02,s.stainless,Ie,-2.42/2,1),o(Je,2.6-.18,.02,s.stainless,Ie-ct/2,0,1),o(Je,2.6-.18,.02,s.stainless,Ie+ct/2,0,1)),[-.45,.45].forEach(Kt=>{g.add(o(.04,.14,.05,s.doorHandle,Ie+ct/2-.1,Kt,1+.02))}),[-.55,.55].forEach(Kt=>{g.add(o(.03,.1,.03,s.stainless,Ie-ct/2+.04,Kt,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([Ie,ht])=>{let ct=p(.14,.14,.04,24,s.stainless,Ie,ht,1,Math.PI/2),Ee=p(.11,.11,.045,20,s.panelCutaway,Ie,ht,1,Math.PI/2);g.add(ct,Ee)}),[[-1.75,.1],[3.45,.35]].forEach(([Ie,ht])=>{let ct=p(.08,.08,.03,20,s.stainless,Ie,ht,1.015,Math.PI/2),Ee=p(.07,.07,.035,20,s.gaugeFace,Ie,ht,1+.015,Math.PI/2);g.add(ct,Ee),g.add(p(.008,.008,.22,8,s.panelCutaway,Ie-.03,ht-.12,1+.01)),g.add(p(.008,.008,.22,8,s.panelCutaway,Ie+.03,ht-.12,1+.01))});let Ut=.48,Nt=.68,yt=.18,Mi=o(Ut,Nt,yt,s.stainless,2.85,.45,1+yt/2),Ne=o(.24,.16,.01,s.touchscreen,2.85,.56,1+yt+.005),di=p(.014,.014,.02,10,s.coolingFin,2.75,.42,1+yt+.01,Math.PI/2),ii=p(.014,.014,.02,10,s.yellowSafety,2.85,.42,1+yt+.01,Math.PI/2),ci=p(.014,.014,.02,10,s.heatingFin,2.95,.42,1+yt+.01,Math.PI/2),mi=o(.08,.08,.01,s.yellowSafety,2.85,.3,1+yt+.005),qe=o(.04,.06,.03,s.heatingFin,2.85,.3,1+yt+.02);g.add(Mi,Ne,di,ii,ci,mi,qe);let _=-1.3/2-.05,A=2-.35,G=.85,L=o(.12,G,A,s.stainless,-4.3-.06,_,0);g.add(L);for(let Ie=0;Ie<5;Ie++){let ht=_-G/2+.1+Ie*((G-.2)/4),ct=o(.08,.015,A-.06,s.damperBlade,-4.3-.06,ht,0);ct.rotation.z=.55,g.add(ct)}let I=o(.16,.2,.14,s.actuatorOrange,-4.3-.06,_,1+.06);g.add(I);let se=o(.1,1.3-.35,2-.35,s.stainless,-3.8,_,0),ue=o(.08,1.3-.4,2-.4,s.filterG4,-3.8,_,0);g.add(se,ue);let fe=1.3/2-.05,Me=o(.12,G,A,s.stainless,-4.3-.06,fe,0);g.add(Me);for(let Ie=0;Ie<5;Ie++){let ht=fe-G/2+.1+Ie*((G-.2)/4),ct=o(.08,.015,A-.06,s.damperBlade,-4.3-.06,ht,0);ct.rotation.z=-.55,g.add(ct)}let Pe=o(.16,.2,.14,s.actuatorOrange,-4.3-.06,fe,1+.06);g.add(Pe);let Ge=new jt;Ge.position.set(-2.95,fe,0),g.add(Ge);let Qe=p(.38,.3,.12,24,s.stainless,.2,0,0,0,Math.PI/2),Ae=p(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);Ge.add(Qe,Ae);let ft=p(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);Ge.add(ft);let Tt=p(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);Ge.add(Tt),T.push(()=>{Ae.rotation.x+=.14});let Fe=o(.1,1.3-.35,2-.35,s.stainless,-2.5,_,0);g.add(Fe);for(let Ie=0;Ie<2;Ie++)for(let ht=0;ht<3;ht++){let ct=_-.22+Ie*.44,Ee=-1+.35+ht*((2-.7)/2),nt=new Ca(.18,.85,4),Je=new Yt(nt,s.filterCloth);Je.position.set(-2,ct,Ee),Je.rotation.z=-Math.PI/2,Je.scale.set(.9,1.2,.7),g.add(Je)}let Ye=o(1.5,1.4,2-.35,s.stainless,-.05,0,0);Ye.rotation.z=Math.PI/4,g.add(Ye);let et=o(2.2,.04,2-.3,s.stainless,-.05,0,0);et.rotation.z=-Math.PI/4,g.add(et);let me=2-.35,tt=1.3-.35;for(let Ie=0;Ie<3;Ie++){let ht=_-.25+Ie*.25,ct=p(.02,.02,me-.1,12,s.coolingFin,.95,ht,0,Math.PI/2);g.add(ct),g.add(o(.04,.04,.04,s.stainless,.95,ht,1-.2)),g.add(o(.04,.04,.04,s.stainless,.95,ht,-1+.2))}let si=o(.24,tt,me,s.coolingFin,1.25,_,0);g.add(si),[-.5,.5].forEach(Ie=>{let ht=p(.045,.045,tt+.1,14,s.copperPipe,1.25,_,Ie);g.add(ht)});for(let Ie=0;Ie<8;Ie++){let ht=_-tt/2+.1+Ie*((tt-.2)/7),ct=new Yt(new pl(.032,.012,8,12,Math.PI),s.copperPipe);ct.position.set(1.25,ht,1-.18),ct.rotation.y=Math.PI/2,ct.rotation.x=Math.PI/2,g.add(ct)}let Ft=o(1.3,.09,me+.1,s.stainless,1.6,-1.3+.1,0);g.add(Ft);let Et=p(.025,.025,.2,12,s.stainless,1.9,-1.3+.06,1-.05);g.add(Et);let ri=o(.12,tt,me,s.stainless,1.55,_,0);g.add(ri);for(let Ie=0;Ie<12;Ie++){let ht=-.7+Ie*((me-.2)/11),ct=o(.08,tt-.05,.012,s.stainless,1.55,_,ht);ct.rotation.y=.35,g.add(ct)}let xi=o(.18,tt,me,s.heatingFin,1.95,_,0);g.add(xi),[-.4,.4].forEach(Ie=>{let ht=p(.04,.04,tt+.1,14,s.copperPipe,1.95,_,Ie);g.add(ht)});let at=new jt;at.position.set(2.85,_,0),g.add(at);let It=p(.48,.38,.18,28,s.stainless,-.4,0,0,0,Math.PI/2),Si=p(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);at.add(It,Si);let ot=p(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),qt=p(.14,.05,.16,16,s.stainless,-.25,0,0,0,Math.PI/2);at.add(ot,qt),T.push(()=>{ot.rotation.x+=.15});let Zt=p(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),Ri=o(.14,.12,.14,s.motorCast,.32,.26,0);at.add(Zt,Ri);let ma=o(1.1,.08,.8,s.stainless,.05,-tt/2+.08,0);at.add(ma),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ie,ht])=>{let ct=o(.12,.03,.12,s.motorCast,Ie,-tt/2+.02,ht),Ee=p(.04,.04,.12,10,s.springSilver,Ie,-tt/2+.08,ht);at.add(ct,Ee)});let ga=o(.1,tt,me,s.rubberBlack,2.35,_,0);g.add(ga);let _a=o(.2,tt-.1,me-.1,s.stainless,3.65,_,0),va=o(.16,tt-.15,me-.15,s.filterCloth,3.65,_,0);g.add(_a,va);for(let Ie=-1;Ie<=1;Ie+=2){let ht=Ie*.4,ct=o(.42,tt-.1,.2,s.stainless,4.05,_,ht);g.add(ct)}}function J(g){let W=-1.2750000000000001,X=6.2+.2,ie=2.2+.2,ae=o(X,.45,.08,s.baseSkid,0,W,1.1+.06),q=o(X,.45,.08,s.baseSkid,0,W,-1.1-.06),Ue=o(.08,.45,ie-.16,s.baseSkid,-3.1-.06,W,0),ye=o(.08,.45,ie-.16,s.baseSkid,3.1+.06,W,0);g.add(ae,q,Ue,ye);let Se=o(X+.08,.04,.14,s.aluFrame,0,-1.05-.02,1.1+.05),Te=o(X+.08,.04,.14,s.aluFrame,0,-1.05-.02,-1.1-.05);g.add(Se,Te);let Oe=o(X,.02,.04,s.rubberBlack,0,-1.05+.01,1.1),lt=o(X,.02,.04,s.rubberBlack,0,-1.05+.01,-1.1);g.add(Oe,lt),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([Ce,ut])=>{let ai=o(.14,.25,.14,s.yellowSafety,Ce,W+.1,ut),oi=p(.035,.035,.16,16,s.motorCast,Ce,W+.16,ut,0,Math.PI/2);g.add(ai,oi)});let Ut=o(.9,.18,.9,s.galvSteel,-.1,W-.14,0),Nt=o(.82,.19,.82,s.motorCast,-.1,W-.14,0),yt=o(.9,.18,.9,s.galvSteel,2.3,W-.14,0),Mi=o(.82,.19,.82,s.motorCast,2.3,W-.14,0);g.add(Ut,Nt,yt,Mi);let Ne=.08;g.add(o(6.2,Ne,Ne,s.aluFrame,0,-1.05+Ne/2,1.1-Ne/2),o(6.2,Ne,Ne,s.aluFrame,0,-1.05+Ne/2,-1.1+Ne/2),o(6.2,Ne,Ne,s.aluFrame,0,1.05-Ne/2,1.1-Ne/2),o(6.2,Ne,Ne,s.aluFrame,0,1.05-Ne/2,-1.1+Ne/2)),[-3.1+Ne/2,-.7,.6,1.8,3.1-Ne/2].forEach(Ce=>{g.add(o(Ne,2.1-2*Ne,Ne,s.aluFrame,Ce,0,1.1-Ne/2),o(Ne,2.1-2*Ne,Ne,s.aluFrame,Ce,0,-1.1+Ne/2))}),[-3.1+Ne/2,-.7,.6,1.8,3.1-Ne/2].forEach(Ce=>{g.add(o(Ne,Ne,2.2-2*Ne,s.aluFrame,Ce,-1.05+Ne/2,0),o(Ne,Ne,2.2-2*Ne,s.aluFrame,Ce,1.05-Ne/2,0))}),g.add(o(6.2-.1,2.1-.1,.05,s.panelSolid,0,0,-1.1+.04)),g.add(o(6.2-.1,.05,2.2-.1,s.galvSteel,0,-1.05+.04,0)),g.add(o(.05,2.1-.1,2.2-.1,s.panelSolid,3.1-.03,0,0));let di=o(3.8,.06,2.2+.1,s.panelSolid,1.15,1.05+.03,0);g.add(di),g.add(o(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,1.1+.06),o(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,-1.1-.06));let ii=o(.06,2.1-.12,2.2-.12,s.galvSteel,-.7,0,0);g.add(ii);let ci=o(2.2,2.1-.25,.12,s.coolingFin,-1.85,.02,-1.1+.15),mi=o(.12,2.1-.25,2.2-.3,s.coolingFin,-3.1+.15,.02,0);g.add(ci,mi);for(let Ce=-.8;Ce<=.8;Ce+=.2){let ut=o(2.25,.02,.02,s.aluFrame,-1.85,Ce,-1.05);g.add(ut)}[-.8,-.2,.4].forEach(Ce=>{let ut=p(.035,.035,2.1,14,s.copperPipe,-1.85,Ce,-.8600000000000001,0,Math.PI/2);g.add(ut)}),[-2.2,-1.2].forEach((Ce,ut)=>{let ai=p(.48,.46,.22,28,s.motorCast,Ce,1.1600000000000001,0,0,0,!0),oi=p(.51,.51,.04,28,s.aluFrame,Ce,1.05+.22,0);g.add(ai,oi);let Ji=p(.46,.46,.02,24,s.galvSteel,Ce,1.05+.22+.01,0,0,0,!0);g.add(Ji);for(let $i=0;$i<4;$i++){let Lr=o(.9,.015,.015,s.galvSteel,Ce,1.285,0);Lr.rotation.y=$i/4*Math.PI,g.add(Lr)}let Hi=new jt;Hi.position.set(Ce,1.05+.12,0),g.add(Hi);let xa=p(.12,.12,.08,16,s.aluFrame,0,0,0);Hi.add(xa);for(let $i=0;$i<5;$i++){let Lr=new jt;Lr.rotation.y=$i/5*Math.PI*2;let Oo=o(.34,.02,.11,s.fanImpeller,.24,0,0);Oo.rotation.x=.35,Lr.add(Oo),Hi.add(Lr)}let Gn=ut===0?.18:.17;T.push(()=>{Hi.rotation.y+=Gn});let kn=p(.15,.15,.3,16,s.motorCast,Ce,1.05-.12,0);g.add(kn)});let qe=o(1.5,.06,.6,s.baseSkid,-1.8,-1.05+.1,.1);g.add(qe),[-2.15,-1.45].forEach(Ce=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([Hi,xa])=>{g.add(p(.04,.04,.04,12,s.rubberBlack,Ce+Hi,-1.05+.14,.1+xa))});let ut=p(.16,.16,.58,24,s.motorCast,Ce,-1.05+.45,.1),ai=p(.14,.16,.08,20,s.motorCast,Ce,-1.05+.76,.1),oi=o(.1,.14,.08,s.motorCast,Ce+.14,-1.05+.5,.1),Ji=p(.165,.165,.05,20,s.heatingFin,Ce,-1.05+.22,.1);g.add(ut,ai,oi,Ji)});let _=p(.12,.12,.52,20,s.motorCast,-.95,-1.05+.42,.25),A=p(.09,.12,.06,16,s.motorCast,-.95,-1.05+.7,.25);g.add(_,A);let G=p(.04,.04,.8,14,s.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),L=p(.04,.04,.6,14,s.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);g.add(G,L);let I=p(.03,.03,1.1,14,s.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),se=p(.045,.045,.22,16,s.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);g.add(I,se);let ue=p(.06,.06,.24,16,s.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),fe=p(.03,.03,.34,14,s.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),Me=o(.09,.12,.09,s.brassGold,-.95,-1.05+.45,-.3),Pe=p(.01,.01,.2,8,s.rubberBlack,-.95,-1.05+.54,-.3);g.add(ue,fe,Me,Pe),[-.15,.15].forEach(Ce=>{let ut=p(.045,.045,.02,16,s.gaugeFace,-.73,-.4,Ce,0,Math.PI/2);g.add(ut)});let Ge=1.1,Qe=.8,Ae=.35,ft=o(Ge,Qe,Ae,s.galvSteel,-.1,.2,-1.1-Ae/2+.04),Tt=o(Ge+.06,.03,Ae+.08,s.aluFrame,-.1,.2+Qe/2+.02,-1.1-Ae/2);Tt.rotation.x=-.12,g.add(ft,Tt);for(let Ce=-.3;Ce<=.3;Ce+=.12){let ut=o(Ge-.06,.02,.18,s.damperBlade,-.1,.2+Ce,-1.1-Ae/2);ut.rotation.x=.45,g.add(ut)}let Fe=1,Ye=o(Fe,.75,.08,s.aluFrame,-.1,.2,-1.1+.25);g.add(Ye);for(let Ce=-.25;Ce<=.25;Ce+=.14){let ut=o(Fe-.06,.11,.015,s.damperBlade,-.1,.2+Ce,-.8500000000000001);ut.rotation.x=.3,g.add(ut)}let et=.9,me=o(et,.08,.9,s.aluFrame,-.1,-1.05+.15,0);g.add(me);for(let Ce=-.3;Ce<=.3;Ce+=.15){let ut=o(et-.06,.015,.12,s.damperBlade,-.1,-.9,Ce);ut.rotation.z=.25,g.add(ut)}let tt=o(.16,.22,.14,s.actuatorOrange,-.1,.35,1.1-.2),si=p(.04,.04,.06,16,s.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),Ft=o(.03,.14,.02,s.motorCast,-.1,.42,1.1-.1);g.add(tt,si,Ft);let Et=p(.015,.015,.35,10,s.stainless,.25,.2,0);g.add(Et);let ri=.6,xi=2.1-.3,at=2.2-.3,It=o(.18,xi,at,s.galvSteel,ri,0,0);g.add(It);for(let Ce=-at/2+.3;Ce<=at/2-.2;Ce+=.5){let ut=o(.05,xi-.1,.44,s.filterG4,ri-.05,0,Ce),ai=o(.07,xi-.1,.44,s.filterCloth,ri+.05,0,Ce);g.add(ut,ai)}let Si=p(.01,.01,.2,8,s.copperPipe,ri-.14,.3,1.1-.15),ot=p(.01,.01,.2,8,s.copperPipe,ri+.14,.3,1.1-.15);g.add(Si,ot);let qt=1.25,Zt=2.1-.35,Ri=2.2-.35,ma=o(.32,Zt,Ri,s.coolingFin,qt,.02,0);g.add(ma);for(let Ce=0;Ce<4;Ce++)for(let ut=0;ut<3;ut++){let ai=-Zt/2+.2+ut*(Zt/3.2),oi=qt-.12+Ce*.08,Ji=p(.025,.025,.04,12,s.copperPipe,oi,ai,1.1-.18,Math.PI/2,0);g.add(Ji)}let ga=p(.035,.035,.08,14,s.brassGold,qt-.15,-.2,1.1-.22);g.add(ga);for(let Ce=0;Ce<4;Ce++){let ut=p(.008,.008,.28,8,s.copperPipe,qt-.08,-.2+Ce*.1,.8800000000000001,0,Math.PI/4);g.add(ut)}let _a=Ri+.15,va=.85,Ie=.09,ht=o(va,Ie,_a,s.drainPan,qt,-1.05+Ie/2+.05,0);g.add(ht);let ct=p(.03,.03,.35,12,s.stainless,qt+.1,-1.05-.05,1.1+.02),Ee=p(.03,.03,.22,12,s.stainless,qt+.22,-1.05-.12,1.1+.02),nt=p(.03,.03,.14,12,s.stainless,qt+.16,-1.05-.22,1.1+.02,0,Math.PI/2);g.add(ct,Ee,nt);let Je=o(.12,Zt-.05,Ri,s.aluFrame,qt+.24,.02,0);g.add(Je);let Kt=1.8,Dr=Zt,Ui=Ri;for(let Ce=-.5;Ce<=.5;Ce+=.25){let ut=p(.045,.045,Ui-.2,16,s.stainless,Kt,Ce,0,Math.PI/2,0);g.add(ut)}let Ma=o(.25,Dr-.2,.3,s.galvSteel,Kt,0,-1.1+.2);g.add(Ma);let xr=new jt;xr.position.set(2.45,.05,0),g.add(xr);let Wh=p(.48,.38,.18,28,s.aluFrame,-.38,0,0,0,Math.PI/2),Xh=p(.44,.44,.03,24,s.copperPipe,-.36,0,0,0,Math.PI/2,!0);xr.add(Wh,Xh);let Fo=p(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),jh=p(.14,.05,.16,16,s.aluFrame,-.24,0,0,0,Math.PI/2);xr.add(Fo,jh),T.push(()=>{Fo.rotation.x+=.15});let Yh=p(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),qh=o(.14,.12,.14,s.motorCast,.32,.26,0);xr.add(Yh,qh);let Zh=o(1.1,.08,.8,s.baseSkid,.05,-Zt/2+.1,0);xr.add(Zh),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Ce,ut])=>{let ai=o(.12,.03,.12,s.motorCast,Ce,-Zt/2+.04,ut),oi=p(.04,.04,.12,10,s.springSilver,Ce,-Zt/2+.1,ut);xr.add(ai,oi)});let Kh=o(.85,.6,.85,s.galvSteel,2.3,-1.05+.3,0),Jh=o(.9,.1,.9,s.rubberBlack,2.3,-1.05+.05,0);g.add(Kh,Jh),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((Ce,ut)=>{let ai=Ce.maxX-Ce.minX,oi=(Ce.minX+Ce.maxX)/2,Ji=2.1-.22,Hi=o(ai-.04,Ji,.04,s.panelCutaway,oi,0,1.1-.02,!1,!1);g.add(Hi),V(Hi,s.panelSolid,s.panelCutaway);let xa=o(.04,.14,.04,s.doorHandle,oi+ai*.42,0,1.1+.01),Gn=o(.03,.08,.03,s.stainless,oi-ai*.45,Ji*.35,1.1+.01),kn=o(.03,.08,.03,s.stainless,oi-ai*.45,-Ji*.35,1.1+.01);if(g.add(xa,Gn,kn),ut===1||ut===2||ut===3){let $i=p(.12,.12,.04,20,s.aluFrame,oi,.22,1.1,Math.PI/2);g.add($i)}});let $h=o(.42,.65,.18,s.panelSolid,.6,.3,1.1+.08),Qh=o(.38,.6,.02,s.aluFrame,.6,.3,1.1+.17),eu=o(.24,.16,.01,s.touchscreen,.6,.4,1.1+.18),tu=o(.09,.09,.02,s.yellowSafety,.6,.18,1.1+.18),iu=p(.035,.035,.05,12,s.heatingFin,.6,.18,1.1+.2,Math.PI/2);g.add($h,Qh,eu,tu,iu),[-.15,.15].forEach(Ce=>{let ut=p(.065,.065,.035,20,s.aluFrame,.6,-.25,1.1800000000000002+Ce,Math.PI/2),ai=p(.055,.055,.037,20,s.gaugeFace,.6,-.25,1.1+.08+Ce,Math.PI/2),oi=p(.008,.008,.3,8,s.panelCutaway,.6,-.42,1.1+.08+Ce);g.add(ut,ai,oi)})}function F(g,W){if(W==="tks"){N(g);return}if(W==="thks"){B(g);return}if(W==="rooftop"){J(g);return}let X=W==="thks",ie=W==="thrv-dx",ae=W==="hrv",q=W==="rooftop",Ue=ae?4.8:q?6.2:7.6,ye=ae?1.9:2.6,Se=ae?1.8:2,Te=Ue/2,Oe=ye/2,lt=Se/2,Ut=.22,Nt=-Oe-Ut/2,yt=o(Ue+.3,Ut,.12,s.baseSkid,0,Nt,lt-.06),Mi=o(Ue+.3,Ut,.12,s.baseSkid,0,Nt,-lt+.06);g.add(yt,Mi),[-Te,-Te*.5,0,Te*.5,Te].forEach(qe=>{g.add(o(.12,Ut,Se-.24,s.baseSkid,qe,Nt,0))});let Ne=.08,di=X?s.stainless:s.aluFrame;g.add(o(Ue,Ne,Ne,di,0,-Oe+Ne/2,lt-Ne/2),o(Ue,Ne,Ne,di,0,-Oe+Ne/2,-lt+Ne/2),o(Ue,Ne,Ne,di,0,Oe-Ne/2,lt-Ne/2),o(Ue,Ne,Ne,di,0,Oe-Ne/2,-lt+Ne/2));let ii=X?s.stainless:s.galvSteel;g.add(o(Ue-.1,ye-.1,.05,s.panelSolid,0,0,-lt+.04),o(Ue-.1,.05,Se-.1,s.panelSolid,0,Oe-.03,0),o(Ue-.1,.05,Se-.1,ii,0,-Oe+.03,0),o(.05,ye-.1,Se-.1,s.panelSolid,Te-.03,0,0));let ci=ae?3:4,mi=(Ue-.2)/ci;for(let qe=0;qe<ci;qe++){let _=-Te+.1+(qe+.5)*mi,A=o(mi-.04,ye-.18,.03,s.panelCutaway,_,0,lt-.02,!1,!1);g.add(A),R.push(A),g.add(o(.04,.12,.04,s.doorHandle,_+mi*.4,0,lt+.01)),g.add(p(.11,.11,.04,16,s.aluFrame,_,.2,lt,Math.PI/2))}if(ae){let qe=o(1.5,1.4,Se-.35,s.aluFrame,0,0,0);qe.rotation.z=Math.PI/4,g.add(qe),[-1.4,1.4].forEach((_,A)=>{let G=A===0?-.35:.35,L=p(.35,.35,.25,20,s.fanHousing,_,G,0,0,Math.PI/2);g.add(L),T.push(()=>{L.rotation.x+=.1})}),[-1.9,1.9].forEach(_=>{g.add(o(.06,ye-.4,Se-.4,s.filterCloth,_,0,0))}),[[-Te-.1,.4],[Te+.1,-.4]].forEach(([_,A])=>{g.add(p(.32,.32,.22,24,s.galvSteel,_,A,0,0,Math.PI/2,!0))})}else if(q){[-1.2,1.2].forEach(_=>{let A=p(.55,.55,.18,24,s.motorCast,_,Oe+.09,0,0,0,!0),G=p(.48,.48,.04,4,s.fanImpeller,_,Oe+.12,0);g.add(A,G),T.push(()=>{G.rotation.y+=.15})}),[-1.8,-1].forEach(_=>{let A=p(.2,.2,.7,16,s.motorCast,_,-Oe+.5,-lt+.5);g.add(A)});let qe=p(.45,.45,.35,20,s.fanHousing,1.8,-.2,0,0,Math.PI/2);g.add(qe),T.push(()=>{qe.rotation.x+=.12}),g.add(o(.3,ye-.5,Se-.4,s.coolingFin,.5,-.1,0))}else{let qe=new jt;qe.position.set(0,0,0),g.add(qe);let _=p(1.05,1.05,.28,32,s.aluFrame,0,0,0,0,Math.PI/2),A=p(1.01,1.01,.26,28,s.rotorWheel,0,0,0,0,Math.PI/2);qe.add(_,A);for(let I=0;I<12;I++){let se=I/12*Math.PI*2,ue=o(.03,1.98,.02,s.aluFrame,0,0,0);ue.rotation.x=se,qe.add(ue)}T.push(()=>{qe.rotation.x+=.008});let G=p(.42,.42,.35,24,s.fanHousing,2.8,-Oe/2+.1,0,0,Math.PI/2),L=p(.36,.36,.3,24,s.fanHousing,-1.3,Oe/2-.05,0,0,Math.PI/2);g.add(G,L),T.push(()=>{G.rotation.x+=.12,L.rotation.x+=.12}),g.add(o(.28,Oe-.3,Se-.35,X?s.stainless:s.coolingFin,1.35,-Oe/2,0)),g.add(o(.22,Oe-.3,Se-.35,s.heatingFin,1.85,-Oe/2,0)),g.add(o(.95,.08,Se-.25,s.drainPan,1.6,-Oe+.12,0)),g.add(o(.06,Oe-.25,Se-.3,X?s.stainless:s.aluFrame,-2.1,-Oe/2,0));for(let I=0;I<4;I++){let se=-lt+.25+(I+.5)*((Se-.4)/4),ue=new Yt(new Ca(.2,.75,4),s.filterCloth);ue.rotateZ(-Math.PI/2),ue.position.set(-1.7,-Oe/2,se),ue.scale.set(1,1.4,.8),g.add(ue)}if(X){g.add(o(.18,Oe-.3,Se-.35,s.stainless,2.15,-Oe/2,0));let I=p(.03,.03,Se-.5,12,s.coolingFin,1.1,-Oe/2+.2,0,Math.PI/2);g.add(I)}[-Oe/2,Oe/2].forEach(I=>{g.add(o(.08,Oe-.25,Se-.3,s.aluFrame,-Te-.04,I,0)),g.add(o(.14,.18,.12,s.actuatorOrange,-Te-.04,I,lt+.05))}),ie&&g.add(p(.2,.2,.65,16,s.motorCast,2.5,-Oe/2,-lt+.5)),g.add(o(.32,.55,.18,s.motorCast,2.3,.35,lt+.09))}}function k(g,W){if(W==="tdf"){g.add(o(3.2,.04,2,s.galvSteel,0,2/2,0),o(3.2,.04,2,s.galvSteel,0,-2/2,0),o(3.2,2,.04,s.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(q=>{g.add(o(.08,.12,2+.2,s.aluFrame,q,2/2+.04,0),o(.08,.12,2+.2,s.aluFrame,q,-2/2-.04,0),o(.08,2,.12,s.aluFrame,q,0,2/2+.04),o(.08,2,.12,s.aluFrame,q,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(Ue=>{[-2/2-.04,2/2+.04].forEach(ye=>{g.add(o(.1,.14,.14,s.baseSkid,q,Ue,ye))})})});let X=o(3.2-.1,2-.1,.03,s.panelCutaway,0,0,2/2,!1,!1);g.add(X),R.push(X),[-.8,.8].forEach(q=>{g.add(o(.08,.12,.04,s.doorHandle,q,2/2-.1,2/2+.02))});let ie=p(.78,.78,.45,24,s.fanImpeller,0,0,0,0,Math.PI/2),ae=p(.28,.28,.35,16,s.motorCast,.25,0,0,0,Math.PI/2);g.add(ie,ae),T.push(()=>{ie.rotation.x+=.14}),g.add(o(.24,.18,.16,s.fanHousing,-.6,2/2+.1,.4))}else if(W==="yangin-fani"){let X=p(1.25,1.25,4.2,32,s.galvSteel,0,0,0,0,Math.PI/2,!0);g.add(X),[-4.2/2,4.2/2].forEach(ye=>{let Se=p(1.43,1.43,.06,32,s.baseSkid,ye,0,0,0,Math.PI/2,!0);g.add(Se);for(let Te=0;Te<12;Te++){let Oe=Te/12*Math.PI*2;g.add(o(.08,.04,.04,s.doorHandle,ye,Math.sin(Oe)*(1.25+.09),Math.cos(Oe)*(1.25+.09)))}});let ie=p(.46,.46,2,24,s.motorCast,.1,0,0,0,Math.PI/2),ae=new Yt(new Ca(.46,.6,20),s.motorCast);ae.rotateZ(-Math.PI/2),ae.position.set(-1.2,0,0),g.add(ie,ae);let q=new jt;q.position.set(-.6,0,0),g.add(q);let Ue=p(.48,.48,.2,20,s.fanImpeller,0,0,0,0,Math.PI/2);q.add(Ue);for(let ye=0;ye<8;ye++){let Se=ye/8*Math.PI*2,Te=o(.04,.7,.16,s.fanImpeller,0,Math.sin(Se)*.78,Math.cos(Se)*.78);Te.rotation.x=Se+.35,q.add(Te)}T.push(()=>{q.rotation.x+=.15});for(let ye=0;ye<4;ye++){let Se=ye/4*Math.PI*2,Te=o(.03,1.25-.46,.1,s.baseSkid,.4,Math.sin(Se)*(1.25+.46)/2,Math.cos(Se)*(1.25+.46)/2);Te.rotation.x=Se,g.add(Te)}g.add(o(2.8,.12,.35,s.baseSkid,0,-1.25-.1,.9),o(2.8,.12,.35,s.baseSkid,0,-1.25-.1,-.9)),g.add(o(.24,.24,.16,s.actuatorOrange,0,1.25+.1,0))}else{let X=p(.62,.62,5.2,28,s.galvSteel,0,0,0,0,Math.PI/2,!0);g.add(X),[-1.7,1.7].forEach(q=>{g.add(p(.62+.12,.62+.12,1.5,28,s.aluFrame,q,0,0,0,Math.PI/2,!0))});let ie=p(.28,.28,1.2,16,s.motorCast,0,0,0,0,Math.PI/2),ae=p(.62-.05,.62-.05,.12,8,s.fanImpeller,0,0,0,0,Math.PI/2);g.add(ie,ae),T.push(()=>{ae.rotation.x+=.16});for(let q=-.3;q<=.3;q+=.2){let Ue=o(.08,.04,.8,s.damperBlade,2.62,q,0);Ue.rotation.z=-.2,g.add(Ue)}[-5.2/2-.02,5.2/2+.02].forEach(q=>{g.add(p(.62+.02,.62+.02,.04,16,s.aluFrame,q,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(q=>{g.add(o(.08,.55,.25,s.baseSkid,q,.62+.35,0))})}}function te(g){let W=o(3,.03,1.3,s.galvSteel,-1.1,.45,0),X=o(3,.03,1.3,s.galvSteel,-1.1,-.45,0),ie=o(3,.9,.03,s.galvSteel,-1.1,0,-.65);g.add(W,X,ie);let ae=.6,q=o(ae,.9,.03,s.galvSteel,-2.6+ae/2,0,.65),Ue=o(ae,.9,.03,s.galvSteel,.4-ae/2,0,.65),ye=3-2*ae,Se=o(ye,.9-.08,.03,s.panelCutaway,-1.1,0,.65,!1,!1);g.add(q,Ue,Se),V(Se,s.galvSteel,s.panelCutaway),[-2.1,-1.6,-1.1,-.6,-.1].forEach(Fe=>{let Ye=o(.04,.025,1.22,s.aluFrame,Fe,.47000000000000003,0),et=o(.04,.025,1.3-.08,s.aluFrame,Fe,-.45-.02,0);g.add(Ye,et)}),[[-1.85,-1.35],[-1.35,-.85],[-.85,-.35]].forEach(([Fe,Ye])=>{let et=(Fe+Ye)/2,me=o(.015,.015,1.3-.12,s.aluFrame,et,.45+.015,0);me.rotation.y=.35;let tt=o(.015,.015,1.3-.12,s.aluFrame,et,.45+.015,0);tt.rotation.y=-.35,g.add(me,tt)});let Te=.035,Oe=o(3,Te,Te,s.aluFrame,-1.1,.45+Te/2,.65+Te/2),lt=o(3,Te,Te,s.aluFrame,-1.1,.45+Te/2,-.65-Te/2),Ut=o(3,Te,Te,s.aluFrame,-1.1,-.45-Te/2,.65+Te/2),Nt=o(3,Te,Te,s.aluFrame,-1.1,-.45-Te/2,-.65-Te/2);g.add(Oe,lt,Ut,Nt);let yt=o(3,.012,.012,s.rubberBlack,-1.1,.45,.65);g.add(yt);let Mi=o(ye-.05,.9-.12,.06,s.motorCast,-1.1,0,-.65+.05),Ne=o(ye-.05,.06,1.3-.12,s.motorCast,-1.1,-.45+.05,0);g.add(Mi,Ne);let di=o(ye-.06,.9-.14,.015,s.galvSteel,-1.1,0,-.65+.08),ii=o(ye-.06,.015,1.3-.14,s.galvSteel,-1.1,-.45+.08,0);g.add(di,ii);for(let Fe=-1.1-.6;Fe<=-1.1+.6;Fe+=.4)for(let Ye=-.25;Ye<=.25;Ye+=.25){let et=p(.005,.005,.08,8,s.copperPipe,Fe,Ye,-.6,Math.PI/2),me=p(.03,.03,.005,12,s.aluFrame,Fe,Ye,-.65+.09,Math.PI/2);g.add(et,me)}let ci=-2.1,mi=p(.24,.24,.04,24,s.aluFrame,ci,0,.65+.02,Math.PI/2),qe=p(.22,.22,.05,24,s.galvSteel,ci,0,.65+.03,Math.PI/2);g.add(mi,qe),[-.1,.1].forEach(Fe=>{let Ye=o(.04,.08,.05,s.doorHandle,ci+Fe,0,.72);g.add(Ye)}),j(g,-2.6,.9,1.3,s),_e(g,.4,.9,1.3,s);let _=1.35,A=1.8,G=o(A,.03,1.3,s.galvSteel,_,.45,0),L=o(A,.03,1.3,s.galvSteel,_,-.45,0),I=o(A,.9,.03,s.galvSteel,_,0,-.65);g.add(G,L,I);let se=o(.4,.9,.03,s.galvSteel,.6,0,.65),ue=o(.4,.9,.03,s.galvSteel,2.05,0,.65),fe=o(1.05,.9-.08,.03,s.panelCutaway,1.32,0,.65,!1,!1);g.add(se,ue,fe),V(fe,s.galvSteel,s.panelCutaway);for(let Fe=0;Fe<4;Fe++){let Ye=.9+Fe*.28,et=new jt;et.position.set(Ye,0,-.15+Fe*.1);let me=p(.35,.35,.9-.14,16,s.aluFrame,0,0,0,0,0,!0);me.scale.set(.25,1,.55),et.add(me);let tt=o(.04,.02,.18,s.galvSteel,0,.45-.08,0),si=o(.04,.02,.18,s.galvSteel,0,-.45+.08,0);et.add(tt,si),g.add(et)}let Me=.55,Pe=.45,Ge=.45,Qe=o(Me,Pe,Ge,s.galvSteel,1.35,.15,-.65-Ge/2),Ae=o(Me+.1,Pe+.1,.04,s.aluFrame,1.35,.15,-.65-Ge);g.add(Qe,Ae),j(g,2.24,.9,1.3,s),[-1.8,1].forEach(Fe=>{let Ye=o(.06,.05,1.65,s.baseSkid,Fe,-.49,0),et=o(.06,.015,.15,s.rubberBlack,Fe,-.45-.01,.65-.1),me=o(.06,.015,.15,s.rubberBlack,Fe,-.45-.01,-.65+.1);g.add(Ye,et,me),[-1.65/2+.04,1.65/2-.04].forEach(tt=>{let si=p(.012,.012,1.35,10,s.stainless,Fe,.20500000000000004,tt),Ft=p(.024,.024,.03,6,s.aluFrame,Fe,-.45-.07,tt),Et=p(.024,.024,.03,6,s.aluFrame,Fe,-.45+1.35-.04,tt);g.add(si,Ft,Et)})}),[-.5,-.3].forEach(Fe=>{let Ye=p(.018,.018,.04,12,s.brassGold,Fe,.47000000000000003,.2);g.add(Ye)});let ft=o(.22,.14,.01,s.aluFrame,-.4,.15,.65+.02),Tt=o(.18,.1,.012,s.touchscreen,-.4,.15,.65+.022);g.add(ft,Tt)}function j(g,W,X,ie,ae){let q=o(.04,.06,ie+.14,ae.aluFrame,W,X/2+.03,0),Ue=o(.04,.06,ie+.14,ae.aluFrame,W,-X/2-.06/2,0),ye=o(.04,X+.14,.06,ae.aluFrame,W,0,ie/2+.06/2),Se=o(.04,X+.14,.06,ae.aluFrame,W,0,-ie/2-.06/2);g.add(q,Ue,ye,Se),[[X/2+.06/2,ie/2+.06/2],[X/2+.06/2,-ie/2-.06/2],[-X/2-.06/2,ie/2+.06/2],[-X/2-.06/2,-ie/2-.06/2]].forEach(([Te,Oe])=>{let lt=o(.05,.09,.09,ae.galvSteel,W,Te,Oe),Ut=p(.012,.012,.04+.02,8,ae.doorHandle,W,Te,Oe,0,Math.PI/2);g.add(lt,Ut)})}function _e(g,W,X,ie,ae){j(g,W-.025,X,ie,ae),j(g,W+.025,X,ie,ae);let q=o(.015,X+.08,ie+.08,ae.rubberBlack,W,0,0);g.add(q),[[X/2+.03,ie/2+.03],[X/2+.03,-ie/2-.03],[-X/2-.03,ie/2+.03],[-X/2-.03,-ie/2-.03]].forEach(([Ue,ye])=>{let Se=p(.014,.014,.12,10,ae.stainless,W,Ue,ye,0,Math.PI/2),Te=p(.022,.022,.03,6,ae.doorHandle,W+.05,Ue,ye,0,Math.PI/2);g.add(Se,Te)}),[[X/2+.05,0],[-X/2-.05,0],[0,ie/2+.05],[0,-ie/2-.05]].forEach(([Ue,ye])=>{let Se=o(.08,.04,.04,ae.doorHandle,W,Ue,ye),Te=p(.01,.01,.06,8,ae.stainless,W,Ue+(Ue!==0?Math.sign(Ue)*.025:0),ye+(ye!==0?Math.sign(ye)*.025:0));g.add(Se,Te)})}function Z(g){let W=p(.75,.75,1.8,36,s.stainless,-1.5,0,0,0,Math.PI/2,!0);g.add(W);let X=1.8,ie=p(.75,.75,X,36,s.stainless,2.4-X/2,0,0,0,Math.PI/2,!0);g.add(ie);let ae=1.2,q=p(.75,.75,ae,28,s.stainless,0,0,0,0,Math.PI/2,!0,Math.PI/3,4*Math.PI/3);g.add(q);let Ue=p(.75+.002,.75+.002,ae,24,s.panelCutaway,0,0,0,0,Math.PI/2,!0,-Math.PI/3,2*Math.PI/3);g.add(Ue),V(Ue,s.stainless,s.panelCutaway);let ye=o(ae,.02,.45,s.stainless,0,-.75+.03,0),Se=o(.015,.35,.7,s.stainless,0,-.75+.2,0);g.add(ye,Se),[-.58,.58].forEach(L=>{let I=p(.745,.745,.02,32,s.aluFrame,L,0,0,0,Math.PI/2,!0);g.add(I)});let Te=o(4.8-.2,.02,.5,s.stainless,0,-.75+.02,0);g.add(Te);let Oe=o(4.8-.02,.02,.035,s.aluFrame,0,.75+.009,0);g.add(Oe);for(let L=-2.4+.2;L<=2.4-.2;L+=.25){let I=o(.015,.024,.042,s.stainless,L,.761,0);g.add(I)}[-2.4+.06,2.4-.06].forEach(L=>{let I=p(.762,.762,.03,32,s.aluFrame,L,0,0,0,Math.PI/2,!0);g.add(I)}),[-2.4,2.4].forEach(L=>{let I=p(.9299999999999999,.9299999999999999,.08,36,s.stainless,L,0,0,0,Math.PI/2,!0),se=p(.75+.18,.75-.02,.06,36,s.aluFrame,L,0,0,0,Math.PI/2);g.add(I,se);let ue=p(.75+.12,.75,.02,32,s.rubberBlack,L+(L<0?-.045:.045),0,0,0,Math.PI/2);g.add(ue);for(let fe=0;fe<12;fe++){let Me=fe/12*Math.PI*2,Pe=Math.sin(Me)*(.75+.09),Ge=Math.cos(Me)*(.75+.09),Qe=p(.014,.014,.12,10,s.stainless,L,Pe,Ge,0,Math.PI/2),Ae=p(.022,.022,.035,6,s.doorHandle,L+(L<0?.05:-.05),Pe,Ge,0,Math.PI/2);g.add(Qe,Ae)}});let lt=-1.2,Ut=p(.05,.05,.08,16,s.stainless,lt,-.75-.04,0),Nt=p(.03,.03,.08,14,s.stainless,lt,-.75-.11,0),yt=o(.09,.09,.08,s.brassGold,lt,-.75-.18,0),Mi=p(.015,.015,.06,10,s.stainless,lt,-.75-.18,.06,Math.PI/2,0),Ne=o(.18,.025,.015,s.heatingFin,lt+.08,-.75-.18,.09),di=p(.025,.025,.06,12,s.brassGold,lt,-.75-.25,0);g.add(Ut,Nt,yt,Mi,Ne,di);let ii=1.3,ci=p(.28,.28,.05,24,s.aluFrame,ii,0,.75+.02,Math.PI/2),mi=p(.25,.25,.06,24,s.stainless,ii,0,.75+.03,Math.PI/2),qe=p(.26,.26,.02,24,s.rubberBlack,ii,0,.75+.01,Math.PI/2);g.add(ci,mi,qe),[-.11,.11].forEach(L=>{let I=p(.01,.01,.06,8,s.stainless,ii+L,0,.81,Math.PI/2),se=p(.045,.045,.03,12,s.doorHandle,ii+L,0,.75+.08,Math.PI/2);g.add(I,se)});let _=p(.004,.004,.25,6,s.aluFrame,ii,-.16,.75+.03);g.add(_),[-1.8,1.7].forEach(L=>{let I=p(.81,.81,.08,36,s.baseSkid,L,0,0,0,Math.PI/2,!0),se=o(.08,.08,.04,s.baseSkid,L,.75+.06,0),ue=o(.08,.08,.04,s.baseSkid,L,-.75-.06,0);g.add(I,se,ue);let fe=1.4,Me=p(.012,.012,fe,10,s.stainless,L,.75+.06+fe/2,0),Pe=p(.025,.025,.035,6,s.aluFrame,L,.75+.1,0);g.add(Me,Pe)});let A=o(.2,.12,.01,s.aluFrame,-1.2,.2,.75+.02),G=o(.16,.08,.012,s.touchscreen,-1.2,.2,.75+.022);g.add(A,G)}function $(g,W){if(W==="galvaniz-kanal"){te(g);return}if(W==="paslanmaz-kanal"){Z(g);return}if(W==="spiral-kanal"){let X=p(.75,.75,4.4,32,s.galvSteel,-.6,0,0,0,Math.PI/2,!0);g.add(X);for(let ae=-2.6;ae<=1.2;ae+=.45)g.add(p(.75+.015,.75+.015,.025,32,s.aluFrame,ae,0,0,0,Math.PI/2,!0));g.add(p(.75+.025,.75+.025,.12,32,s.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let ie=p(.75-.01,.75-.01,1.8,28,s.galvSteel,2.2,.9,0,0,0,!0);g.add(ie),g.add(p(.75+.06,.75+.06,.08,32,s.baseSkid,-.8,0,0,0,Math.PI/2,!0)),g.add(p(.02,.02,1.4,8,s.baseSkid,-.8,.75+.7,0))}else if(W==="paslanmaz-kanal"){let X=p(.85,.85,4.6,32,s.stainless,0,0,0,0,Math.PI/2,!0);g.add(X),g.add(o(4.6-.02,.02,.03,s.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(ie=>{g.add(p(.85+.2,.85+.2,.08,32,s.stainless,ie,0,0,0,Math.PI/2,!0));for(let ae=0;ae<8;ae++){let q=ae/8*Math.PI*2;g.add(o(.12,.04,.04,s.doorHandle,ie,Math.sin(q)*(.85+.1),Math.cos(q)*(.85+.1)))}}),g.add(p(.32,.32,.06,16,s.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(ie=>{g.add(o(.04,.08,.06,s.doorHandle,ie,0,.85+.07))})}else{g.add(o(4.6,.04,2.4,s.galvSteel,0,2/2,0),o(4.6,.04,2.4,s.galvSteel,0,-2/2,0),o(4.6,2,.04,s.galvSteel,0,0,-2.4/2));let X=o(.9,2,.04,s.galvSteel,-4.6/2+.45,0,2.4/2),ie=o(.9,2,.04,s.galvSteel,4.6/2-.45,0,2.4/2),ae=o(4.6-1.8,2-.3,.03,s.panelCutaway,0,0,2.4/2,!1,!1);g.add(X,ie,ae),R.push(ae),g.add(o(4.6-1.9,2-.4,.08,s.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(q=>{g.add(o(.08,.14,2.4+.24,s.aluFrame,q,2/2+.05,0),o(.08,.14,2.4+.24,s.aluFrame,q,-2/2-.05,0),o(.08,2,.14,s.aluFrame,q,0,2.4/2+.05),o(.08,2,.14,s.aluFrame,q,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(Ue=>{[-2.4/2-.05,2.4/2+.05].forEach(ye=>{g.add(o(.1,.16,.16,s.baseSkid,q,Ue,ye))})})}),g.add(o(4.6-.8,.02,.02,s.aluFrame,0,2/2+.02,0))}}function re(g,W){if(W==="menfez"){g.add(o(.24,.14,3.4+.2,s.aluFrame,0,2.2/2+.05,0),o(.24,.14,3.4+.2,s.aluFrame,0,-2.2/2-.05,0),o(.24,2.2,.14,s.aluFrame,0,0,3.4/2+.05),o(.24,2.2,.14,s.aluFrame,0,0,-3.4/2-.05));for(let X=-2.2/2+.2;X<=2.2/2-.15;X+=.24){let ie=o(.08,.02,3.3,s.damperBlade,.09,X,0);ie.rotation.z=.22,g.add(ie)}for(let X=-3.4/2+.25;X<=3.4/2-.2;X+=.28){let ie=o(.06,2.1500000000000004,.02,s.damperBlade,0,0,X);ie.rotation.y=.2,g.add(ie)}g.add(o(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,2.2/2-.04,0),o(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,-2.2/2+.04,0)),g.add(o(.08,.12,.08,s.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(W==="difuzor"){g.add(o(3.4,.03,1.5,s.galvSteel,0,1.3/2+.3,0),o(3.4,1.3,.03,s.galvSteel,0,.3,-1.5/2),o(3.4,1.3,.03,s.galvSteel,0,.3,1.5/2)),g.add(p(.42,.42,.35,24,s.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),g.add(o(3.4+.2,.06,1.5+.2,s.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(ie=>{g.add(o(3.4-.1,.04,.06,s.doorHandle,0,-1.3/2+.26,ie))});let X=o(1.8,.04,1.8,s.panelSolid,0,-1,0);g.add(X);for(let ie=0;ie<16;ie++){let ae=ie/16*Math.PI*2,q=o(.03,.02,.36,s.doorHandle,Math.sin(ae)*.55,-.98,Math.cos(ae)*.55);q.rotation.y=ae+.5,g.add(q)}}else{g.add(o(1.4,.04,2.4,s.galvSteel,0,2.2/2,0),o(1.4,.04,2.4,s.galvSteel,0,-2.2/2,0),o(1.4,2.2,.04,s.galvSteel,0,0,-2.4/2),o(1.4,2.2,.04,s.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(ie=>{g.add(o(.08,.14,2.4+.2,s.aluFrame,ie,2.2/2+.05,0),o(.08,.14,2.4+.2,s.aluFrame,ie,-2.2/2-.05,0),o(.08,2.2,.14,s.aluFrame,ie,0,2.4/2+.05),o(.08,2.2,.14,s.aluFrame,ie,0,-2.4/2-.05))});for(let ie=-2.2/2+.35;ie<=2.2/2-.25;ie+=.5){let ae=o(.35,.04,2.28,s.damperBlade,0,ie,0);ae.rotation.z=.35,g.add(ae)}g.add(o(.03,2.2-.4,.03,s.brassGold,.15,0,2.4/2-.08));let X=o(.22,.34,.18,s.actuatorOrange,.1,.2,2.4/2+.14);g.add(X),g.add(p(.025,.025,.15,12,s.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),g.add(p(.03,.03,.12,12,s.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function rt(g){g.add(o(4.4,.04,2.2,s.galvSteel,0,2.4/2,0),o(4.4,.04,2.2,s.galvSteel,0,-2.4/2,0),o(4.4,2.4,.04,s.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(ye=>{g.add(o(.08,.12,2.2+.2,s.aluFrame,ye,2.4/2+.04,0),o(.08,.12,2.2+.2,s.aluFrame,ye,-2.4/2-.04,0),o(.08,2.4,.12,s.aluFrame,ye,0,2.2/2+.04),o(.08,2.4,.12,s.aluFrame,ye,0,-2.2/2-.04))});let W=o(4.4-.1,2.4-.1,.03,s.panelCutaway,0,0,2.2/2,!1,!1);g.add(W),R.push(W);let X=o(.12,2.4-.2,2.2-.2,s.aluFrame,-1.4,0,0),ie=o(.1,2.4-.25,2.2-.25,s.filterCloth,-1.4,0,0);g.add(X,ie),g.add(o(.1,2.4-.2,2.2-.2,s.aluFrame,-.2,0,0));for(let ye=0;ye<4;ye++){let Se=-.7+ye*.46,Te=new Yt(new Ca(.2,1.1,4),s.filterCloth);Te.rotateZ(-Math.PI/2),Te.position.set(.4,0,Se),Te.scale.set(1,1.3,.75),g.add(Te)}let ae=o(.25,2.4-.2,2.2-.2,s.aluFrame,1.4,0,0),q=o(.22,2.4-.26,2.2-.26,s.filterCloth,1.4,0,0),Ue=o(.26,2.4-.18,.04,s.coolingFin,1.4,0,2.2/2-.1);g.add(ae,q,Ue),[-1,.6].forEach(ye=>{g.add(p(.09,.09,.04,16,s.aluFrame,ye,.6,2.2/2+.03,Math.PI/2))})}function ze(g,W){if(W==="vrf-dis"){g.add(o(3.2,3.6,.04,s.panelSolid,0,0,-2/2),o(3.2,.04,2,s.panelSolid,0,3.6/2,0),o(3.2,.12,2,s.baseSkid,0,-3.6/2,0),o(.04,3.6-.2,2-.1,s.coolingFin,-3.2/2,.05,0),o(.04,3.6-.2,2-.1,s.coolingFin,3.2/2,.05,0));let X=o(3.2-.1,3.6-.2,.03,s.panelCutaway,0,.05,2/2,!1,!1);g.add(X),R.push(X);let ie=p(.82,.82,.22,28,s.fanHousing,0,3.6/2+.11,0,0,0,!0),ae=p(.72,.72,.05,4,s.fanImpeller,0,3.6/2+.14,0);g.add(ie,ae),T.push(()=>{ae.rotation.y+=.16}),[-.6,.6].forEach(q=>{g.add(p(.26,.26,.9,16,s.motorCast,q,-3.6/2+.6,-.2))}),g.add(p(.22,.22,1.1,16,s.motorCast,-1.1,-3.6/2+.7,.2)),g.add(o(3.2-.2,2.6,.1,s.coolingFin,0,.2,-2/2+.08)),g.add(o(.22,.18,.14,s.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(W==="vrf-ic"){let X=new jt;X.rotation.x=-Math.PI+.55,g.add(X);let ie=o(2.8,.8,2.8,s.galvSteel,0,.5,0),ae=o(3.2,.08,3.2,s.panelSolid,0,.05,0);X.add(ie,ae);let q=o(1.6,.02,1.6,s.filterCloth,0,.02,0);X.add(q),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([ye,Se,Te])=>{let Oe=o(1.7,.03,.16,s.doorHandle,ye,.01,Se);Oe.rotation.y=Te,X.add(Oe)});let Ue=p(.65,.65,.35,20,s.fanImpeller,0,.5,0);X.add(Ue),T.push(()=>{Ue.rotation.y+=.14}),X.add(o(.18,.22,.18,s.actuatorOrange,1.3,.5,.8)),X.add(p(.04,.04,.3,12,s.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let X=o(4.6,.04,2,s.stainless,0,.8,-.3),ie=o(4.6,1.6,.04,s.stainless,0,0,-2.6/2),ae=o(.04,1.6,2.6,s.stainless,-4.6/2,0,0),q=o(.04,1.6,2.6,s.stainless,4.6/2,0,0),Ue=o(4.6,.9,.04,s.stainless,0,.25,2.6/2-.2);Ue.rotation.x=.5,g.add(X,ie,ae,q,Ue),g.add(p(.55,.55,.3,24,s.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let ye=-4.6/2+.6;ye<=4.6/2-.6;ye+=.75){let Se=o(.68,.04,1.3,s.aluFrame,ye,-.2,.1);Se.rotation.x=-.4,g.add(Se)}g.add(p(.1,.08,.18,16,s.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),g.add(p(.02,.02,4.6-.6,12,s.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(ye=>{let Se=p(.035,.02,.09,10,s.brassGold,ye,-.12,.85);g.add(Se)}),g.add(o(.14,.2,.08,s.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}i==="tks"?N(w):i==="thks"?B(w):i==="rooftop"?J(w):i==="galvaniz-kanal"?te(w):i==="paslanmaz-kanal"?Z(w):["thrv-dx","hrv"].includes(i)?F(w,i):["tdf","yangin-fani","jet-fan"].includes(i)?k(w,i):["spiral-kanal"].includes(i)?$(w,i):["menfez","difuzor","damper"].includes(i)?re(w,i):i==="filtre"?rt(w):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?ze(w,i):N(w),w.updateMatrixWorld(!0);let Rt=new pa().setFromObject(w),ke=Rt.getSize(new z),K=Rt.getCenter(new z);w.position.sub(K);let he=-ke.y/2;C.position.y=he-.05,H.position.y=he-.04;let pe=Math.max(ke.x,ke.y,ke.z),Ve=h.fov*(Math.PI/180),We=Math.abs(pe/2/Math.tan(Ve/2))*1.05;We=Math.max(We,3.8);let we=new z(We*.72,We*.38,We*.74),St=new z(0,0,0);h.position.copy(we),h.lookAt(St),d.target.copy(St),d.update();let mt=null;function $e(g,W,X=650){let ie=h.position.clone(),ae=d.target.clone(),q=performance.now();mt={update:Ue=>{let ye=Ue-q,Se=Math.min(1,ye/X),Te=Se*Se*(3-2*Se);h.position.lerpVectors(ie,g,Te),d.target.lerpVectors(ae,W,Te),d.update(),Se>=1&&(mt=null)}}}let Lt=new jt;a.add(Lt);let zt=80,ui=[],Pt=new Float32Array(zt*3),Ht=new Float32Array(zt*3),Gt=i==="tks",kt=i==="thks",D=i==="rooftop",ti=i==="galvaniz-kanal",_t=i==="paslanmaz-kanal",bt=Gt||kt,y=Math.max(2,ke.x/2+.4),S=Math.max(1,ke.y*.45),P=Math.max(1,ke.z*.45);for(let g=0;g<zt;g++){let W=bt?g<zt*.7:D?g<zt*.6:g<zt*.65;ui.push({isSupply:W,progress:Math.random(),speed:(bt?.006:ti||_t?.009:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(bt?.35:S),offsetZ:(Math.random()-.5)*(bt?.7:P)}),W?(Ht[g*3]=.02,Ht[g*3+1]=.65,Ht[g*3+2]=.98):(Ht[g*3]=.95,Ht[g*3+1]=.45,Ht[g*3+2]=.12)}let Y=new bi;Y.setAttribute("position",new Di(Pt,3)),Y.setAttribute("color",new Di(Ht,3));let ee=document.createElement("canvas");ee.width=32,ee.height=32;let ge=ee.getContext("2d"),ve=ge.createRadialGradient(16,16,0,16,16,16);ve.addColorStop(0,"rgba(255, 255, 255, 1)"),ve.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),ve.addColorStop(1,"rgba(0, 0, 0, 0)"),ge.fillStyle=ve,ge.fillRect(0,0,32,32);let O=new cl(ee),ce=new yh({size:.15,map:O,transparent:!0,opacity:.85,vertexColors:!0,blending:Ts,depthWrite:!1}),xe=new md(Y,ce);Lt.add(xe),T.push(()=>{if(!de.cfdEnabled){Lt.visible=!1;return}Lt.visible=!0;let g=Y.attributes.position.array;for(let W=0;W<zt;W++){let X=ui[W];if(X.progress+=X.speed,X.progress>1&&(X.progress=0),bt)X.isSupply?(g[W*3]=-4.3+X.progress*8.6,g[W*3+1]=-.65+Math.sin(X.progress*Math.PI*4)*.08+X.offsetY,g[W*3+2]=X.offsetZ):(g[W*3]=1.2-X.progress*5.5,g[W*3+1]=.65+X.offsetY,g[W*3+2]=X.offsetZ);else if(D)if(X.isSupply){let ie=-.4+X.progress*2.8;if(g[W*3]=ie,X.progress>.8){let ae=(X.progress-.8)/.2;g[W*3+1]=.05-ae*1.35+X.offsetY*.4}else g[W*3+1]=.05+Math.sin(X.progress*Math.PI*3)*.06+X.offsetY*.6;g[W*3+2]=X.offsetZ*.7}else{let ie=W%2===0?-2.2:-1.2;g[W*3]=ie+Math.sin(W*1.5+X.progress*6.28)*.22,g[W*3+1]=-.2+X.progress*2.1,g[W*3+2]=Math.cos(W*1.5+X.progress*6.28)*.22}else if(ti){let ie=-2.7+X.progress*5.1;g[W*3]=ie,g[W*3+1]=Math.sin(X.progress*Math.PI*2+W)*.06+X.offsetY*.5,g[W*3+2]=X.progress>.7&&W%3===0?-.3-(X.progress-.7)*1.5:X.offsetZ*.75}else if(_t){let ie=-2.5+X.progress*5;g[W*3]=ie,g[W*3+1]=Math.sin(X.progress*Math.PI*2+W)*.05+X.offsetY*.45,g[W*3+2]=X.offsetZ*.65}else g[W*3]=-y+X.progress*(y*2),g[W*3+1]=(X.isSupply?-.2:.2)+X.offsetY,g[W*3+2]=X.offsetZ}Y.attributes.position.needsUpdate=!0});let De=new jt;a.add(De);function le(g){let W=document.createElement("canvas");W.width=64,W.height=64;let X=W.getContext("2d");X.fillStyle="#0284c7",X.beginPath(),X.arc(32,32,28,0,Math.PI*2),X.fill(),X.lineWidth=4,X.strokeStyle="#ffffff",X.stroke(),X.fillStyle="#ffffff",X.font="bold 26px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(g,32,33);let ie=new cl(W);return ie.minFilter=hi,ie}let Be=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],He=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],Ze=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],xt=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],U=[[1.35,.15,.75],[.4,.52,.75],[-.8,.48,.75],[-1.6,.48,.75]],Q=[[-1.2,.45,.85],[0,.88,0],[-1.2,-.98,.2]],ne=[];Be.forEach((g,W)=>{let X=new jt,ie,ae,q;if(Gt&&He[W])[ie,ae,q]=He[W];else if(kt&&Ze[W])[ie,ae,q]=Ze[W];else if(D&&xt[W])[ie,ae,q]=xt[W];else if(ti&&U[W])[ie,ae,q]=U[W];else if(_t&&Q[W])[ie,ae,q]=Q[W];else{let Te=Be.length,Oe=ke.z>ke.x,lt=Oe?ke.z:ke.x,Ut=-lt/2+.4+W/Math.max(1,Te-1)*(lt-.8);ie=Oe?ke.x/2+.4:Ut,ae=W%2===0?-.2:.4,q=Oe?Ut:ke.z/2+.4}X.position.set(ie,ae,q);let Ue=new Yt(new mo(.012,.012,.25,8),new Un({color:165063}));Ue.position.y=-.12;let ye=new xh({map:le(g.num||`0${W+1}`),depthTest:!1}),Se=new hd(ye);Se.scale.set(.42,.42,1),Se.position.y=.05,Se.userData={hotspot:g,pos:[ie,ae,q]},X.add(Ue,Se),De.add(X),X.userData={hotspot:g,pos:[ie,ae,q]},ne.push(Se)});let Re=new Dd,Le=new Xe;function oe(g){let W=u.domElement.getBoundingClientRect();Le.x=(g.clientX-W.left)/W.width*2-1,Le.y=-((g.clientY-W.top)/W.height)*2+1,Re.setFromCamera(Le,h);let X=Re.intersectObjects(ne,!0);if(X.length>0){let ie=X[0].object;for(;ie.parent&&!ie.userData.hotspot;)ie=ie.parent;if(ie&&ie.userData.hotspot){showHotspotCard(ie.userData.hotspot);let ae=ie.userData.pos;if(ae){let q=new z(ae[0],ae[1],ae[2]),Ue=new z(ae[0]*.8+1.2,ae[1]+.5,ae[2]+2.8);$e(Ue,q,700)}}}}u.domElement.addEventListener("click",oe);let de={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};qg(),Zg(t,r,{onToggleRotate:()=>{de.autoRotate=!de.autoRotate,d.autoRotate=de.autoRotate,ar("btn-rotate",de.autoRotate)},onToggleCfd:()=>{de.cfdEnabled=!de.cfdEnabled,ar("btn-cfd",de.cfdEnabled)},onToggleCutaway:()=>{de.cutawayEnabled=!de.cutawayEnabled,R.forEach(g=>{let W=g.userData.solidMat||s.panelSolid,X=g.userData.cutawayMat||s.panelCutaway;g.material=de.cutawayEnabled?X:W}),ar("btn-cutaway",de.cutawayEnabled)},onToggleView:()=>{let g=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),W=g&&window.getComputedStyle(g).display!=="none";g&&(W?(g.style.display="none",t.style.display="block",de.viewMode="3d",ar("btn-view",!1),vt()):(g.style.display="flex",t.style.display="none",de.viewMode="2d",ar("btn-view",!0)))},onResetCamera:()=>{$e(we,St,650),window.closeHotspotCard()}}),ar("btn-rotate",de.autoRotate),ar("btn-cfd",de.cfdEnabled),ar("btn-cutaway",de.cutawayEnabled),ar("btn-view",de.viewMode==="2d");let je=null;function Vt(){je=requestAnimationFrame(Vt),mt?mt.update(performance.now()):d.update();for(let g=0;g<T.length;g++)T[g]();u.render(a,h)}Vt();function vt(){if(!t)return;let g=t.clientWidth,W=t.clientHeight||480;g>0&&W>0&&(h.aspect=g/W,h.updateProjectionMatrix(),u.setSize(g,W))}return window.addEventListener("resize",vt),{destroy:()=>{cancelAnimationFrame(je),window.removeEventListener("resize",vt),u.dispose()}}}function qg(){if(document.getElementById("sky-3d-hud-styles"))return;let e=document.createElement("style");e.id="sky-3d-hud-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function Zg(e,t,i){let r=e.closest(".sky-vlog-hero")||e.parentElement||e,a=r.querySelector(".sky-3d-hud-container");a&&a.remove(),a=document.createElement("div"),a.className="sky-3d-hud-container",a.innerHTML=`
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
  `,r.appendChild(n),document.getElementById("btn-rotate").addEventListener("click",i.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",i.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",i.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",i.onToggleView),document.getElementById("btn-reset").addEventListener("click",i.onResetCamera)}function ar(e,t){let i=document.getElementById(e);i&&(t?i.classList.add("active"):i.classList.remove("active"))}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Yl()):Yl();/*! Bundled license information:

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
