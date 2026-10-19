var go="186",ia={ROTATE:0,DOLLY:1,PAN:2},ea={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ec=0,Uo=1,tc=2,Ia=1,ic=2,Ca=3,Cr=0,vi=1,It=2,sr=0,Da=1,Es=2,Oo=3,Fo=4,rc=5,Jr=100,ac=101,nc=102,sc=103,oc=104,lc=200,hc=201,cc=202,uc=203,Xl=204,jl=205,dc=206,pc=207,fc=208,mc=209,gc=210,_c=211,vc=212,Mc=213,xc=214,ys=0,bs=1,Ts=2,La=3,ws=4,As=5,Rs=6,Cs=7,Yl=0,Sc=1,Ec=2,ji=0,ql=1,Kl=2,Zl=3,_o=4,Jl=5,$l=6,Ql=7,eh=300,Pr=301,ca=302,kn=303,Hn=304,Nn=306,Ps=1e3,nr=1001,Is=1002,si=1003,yc=1004,ka=1005,oi=1006,Gn=1007,wr=1008,yi=1009,th=1010,ih=1011,Na=1012,vo=1013,Yi=1014,Wi=1015,qi=1016,Mo=1017,xo=1018,Ua=1020,rh=35902,ah=35899,nh=1021,sh=1022,Fi=1023,lr=1026,Ar=1027,oh=1028,So=1029,Ir=1030,Eo=1031,yo=1033,_n=33776,vn=33777,Mn=33778,xn=33779,Ds=35840,Ls=35841,Ns=35842,Us=35843,Os=36196,Fs=37492,Bs=37496,zs=37488,ks=37489,Tn=37490,Hs=37491,Gs=37808,Vs=37809,Ws=37810,Xs=37811,js=37812,Ys=37813,qs=37814,Ks=37815,Zs=37816,Js=37817,$s=37818,Qs=37819,eo=37820,to=37821,io=36492,ro=36494,ao=36495,no=36283,so=36284,wn=36285,oo=36286,bc=3200,lo=0,Tc=1,gr="",Ri="srgb",An="srgb-linear",Rn="linear",At="srgb",Vn=7680,wc=519,Ac=512,Rc=513,Cc=514,bo=515,Pc=516,Ic=517,To=518,Dc=519,lh=35044,Bo="300 es",Xi=2e3,Oa=2001;function Lc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Cn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Nc(){let e=Cn("canvas");return e.style.display="block",e}var zo={};function Pn(...e){let t="THREE."+e.shift();console.log(t,...e)}function hh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ke(...e){e=hh(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function vt(...e){e=hh(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function ra(...e){let t=e.join(" ");t in zo||(zo[t]=!0,Ke(...e))}function Uc(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Oc={[ys]:bs,[Ts]:Rs,[ws]:Cs,[La]:As,[bs]:ys,[Rs]:Ts,[Cs]:ws,[As]:La},Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sn=Math.PI/180,ho=180/Math.PI;function _r(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(li[e&255]+li[e>>8&255]+li[e>>16&255]+li[e>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[i&63|128]+li[i>>8&255]+"-"+li[i>>16&255]+li[i>>24&255]+li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]).toLowerCase()}function ft(e,t,i){return Math.max(t,Math.min(i,e))}function Fc(e,t){return(e%t+t)%t}function Wn(e,t,i){return(1-i)*e+i*t}function Vi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bc={DEG2RAD:Sn},na,Ge=(na=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ft(this.x,t.x,i.x),this.y=ft(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ft(this.x,t,i),this.y=ft(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ft(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,l=this.y-t.y;return this.x=n*r-l*a+t.x,this.y=n*a+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},na.prototype.isVector2=!0,na),vr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,l){let h=i[r+0],c=i[r+1],u=i[r+2],m=i[r+3],_=a[n+0],d=a[n+1],v=a[n+2],E=a[n+3];if(m!==E||h!==_||c!==d||u!==v){let b=h*_+c*d+u*v+m*E;b<0&&(_=-_,d=-d,v=-v,E=-E,b=-b);let M=1-l;if(b<.9995){let p=Math.acos(b),R=Math.sin(p);M=Math.sin(M*p)/R,l=Math.sin(l*p)/R,h=h*M+_*l,c=c*M+d*l,u=u*M+v*l,m=m*M+E*l}else{h=h*M+_*l,c=c*M+d*l,u=u*M+v*l,m=m*M+E*l;let p=1/Math.sqrt(h*h+c*c+u*u+m*m);h*=p,c*=p,u*=p,m*=p}}e[t]=h,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,a,n){let l=i[r],h=i[r+1],c=i[r+2],u=i[r+3],m=a[n],_=a[n+1],d=a[n+2],v=a[n+3];return e[t]=l*v+u*m+h*d-c*_,e[t+1]=h*v+u*_+c*m-l*d,e[t+2]=c*v+u*d+l*_-h*m,e[t+3]=u*v-l*m-h*_-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,l=Math.cos,h=Math.sin,c=l(i/2),u=l(r/2),m=l(a/2),_=h(i/2),d=h(r/2),v=h(a/2);switch(n){case"XYZ":this._x=_*u*m+c*d*v,this._y=c*d*m-_*u*v,this._z=c*u*v+_*d*m,this._w=c*u*m-_*d*v;break;case"YXZ":this._x=_*u*m+c*d*v,this._y=c*d*m-_*u*v,this._z=c*u*v-_*d*m,this._w=c*u*m+_*d*v;break;case"ZXY":this._x=_*u*m-c*d*v,this._y=c*d*m+_*u*v,this._z=c*u*v+_*d*m,this._w=c*u*m-_*d*v;break;case"ZYX":this._x=_*u*m-c*d*v,this._y=c*d*m+_*u*v,this._z=c*u*v-_*d*m,this._w=c*u*m+_*d*v;break;case"YZX":this._x=_*u*m+c*d*v,this._y=c*d*m+_*u*v,this._z=c*u*v-_*d*m,this._w=c*u*m-_*d*v;break;case"XZY":this._x=_*u*m-c*d*v,this._y=c*d*m-_*u*v,this._z=c*u*v+_*d*m,this._w=c*u*m+_*d*v;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],l=t[5],h=t[9],c=t[2],u=t[6],m=t[10],_=i+l+m;if(_>0){let d=.5/Math.sqrt(_+1);this._w=.25/d,this._x=(u-h)*d,this._y=(a-c)*d,this._z=(n-r)*d}else if(i>l&&i>m){let d=2*Math.sqrt(1+i-l-m);this._w=(u-h)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+c)/d}else if(l>m){let d=2*Math.sqrt(1+l-i-m);this._w=(a-c)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(h+u)/d}else{let d=2*Math.sqrt(1+m-i-l);this._w=(n-r)/d,this._x=(a+c)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,l=t._x,h=t._y,c=t._z,u=t._w;return this._x=i*u+n*l+r*c-a*h,this._y=r*u+n*h+a*l-i*c,this._z=a*u+n*c+i*h-r*l,this._w=n*u-i*l-r*h-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,a=-a,n=-n,l=-l);let h=1-t;if(l<.9995){let c=Math.acos(l),u=Math.sin(c);h=Math.sin(h*c)/u,t=Math.sin(t*c)/u,this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sa,F=(sa=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ko.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ko.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,l=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*l,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*l,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*l,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,l=t.y,h=t.z,c=t.w,u=2*(l*a-h*r),m=2*(h*i-n*a),_=2*(n*r-l*i);return this.x=i+c*u+l*_-h*m,this.y=r+c*m+h*u-n*_,this.z=a+c*_+n*m-l*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ft(this.x,t.x,i.x),this.y=ft(this.y,t.y,i.y),this.z=ft(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ft(this.x,t,i),this.y=ft(this.y,t,i),this.z=ft(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,l=i.x,h=i.y,c=i.z;return this.x=a*c-n*h,this.y=n*l-r*c,this.z=r*h-a*l,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Xn.copy(this).projectOnVector(t),this.sub(Xn)}reflect(t){return this.sub(Xn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ft(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa.prototype.isVector3=!0,sa),Xn=new F,ko=new vr,oa,nt=(oa=class{constructor(t,i,r,a,n,l,h,c,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,l,h,c,u)}set(t,i,r,a,n,l,h,c,u){let m=this.elements;return m[0]=t,m[1]=a,m[2]=h,m[3]=i,m[4]=n,m[5]=c,m[6]=r,m[7]=l,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,l=r[0],h=r[3],c=r[6],u=r[1],m=r[4],_=r[7],d=r[2],v=r[5],E=r[8],b=a[0],M=a[3],p=a[6],R=a[1],B=a[4],s=a[7],T=a[2],A=a[5],w=a[8];return n[0]=l*b+h*R+c*T,n[3]=l*M+h*B+c*A,n[6]=l*p+h*s+c*w,n[1]=u*b+m*R+_*T,n[4]=u*M+m*B+_*A,n[7]=u*p+m*s+_*w,n[2]=d*b+v*R+E*T,n[5]=d*M+v*B+E*A,n[8]=d*p+v*s+E*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],c=t[6],u=t[7],m=t[8];return i*l*m-i*h*u-r*n*m+r*h*c+a*n*u-a*l*c}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],c=t[6],u=t[7],m=t[8],_=m*l-h*u,d=h*c-m*n,v=u*n-l*c,E=i*_+r*d+a*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/E;return t[0]=_*b,t[1]=(a*u-m*r)*b,t[2]=(h*r-a*l)*b,t[3]=d*b,t[4]=(m*i-a*c)*b,t[5]=(a*n-h*i)*b,t[6]=v*b,t[7]=(r*c-u*i)*b,t[8]=(l*i-r*n)*b,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,l,h){let c=Math.cos(n),u=Math.sin(n);return this.set(r*c,r*u,-r*(c*l+u*h)+l+t,-a*u,a*c,-a*(-u*l+c*h)+h+i,0,0,1),this}scale(t,i){return ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jn.makeScale(t,i)),this}rotate(t){return ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jn.makeRotation(-t)),this}translate(t,i){return ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oa.prototype.isMatrix3=!0,oa),jn=new nt,Ho=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zc(){let e={enabled:!0,workingColorSpace:An,spaces:{},convert:function(a,n,l){return this.enabled===!1||n===l||!n||!l||(this.spaces[n].transfer===At&&(a.r=or(a.r),a.g=or(a.g),a.b=or(a.b)),this.spaces[n].primaries!==this.spaces[l].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===At&&(a.r=aa(a.r),a.g=aa(a.g),a.b=aa(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?Rn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,l){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[An]:{primaries:t,whitePoint:r,transfer:Rn,toXYZ:Ho,fromXYZ:Go,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:t,whitePoint:r,transfer:At,toXYZ:Ho,fromXYZ:Go,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),e}var _t=zc();function or(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function aa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Nr,kc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=Cn("canvas")),Nr.width=e.width,Nr.height=e.height;let r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=or(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hc=0,wo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,l=r.length;n<l;n++)r[n].isDataTexture?a.push(Yn(r[n].image)):a.push(Yn(r[n]))}else a=Yn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Yn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?kc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Gc=0,qn=new F,Ii=class En extends Mr{constructor(t=En.DEFAULT_IMAGE,i=En.DEFAULT_MAPPING,r=nr,a=nr,n=oi,l=wr,h=Fi,c=yi,u=En.DEFAULT_ANISOTROPY,m=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=_r(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=l,this.anisotropy=u,this.format=h,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qn).x}get height(){return this.source.getSize(qn).y}get depth(){return this.source.getSize(qn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ke(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ke(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case nr:t.x=t.x<0?0:1;break;case Is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case nr:t.y=t.y<0?0:1;break;case Is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=eh;Ii.DEFAULT_ANISOTROPY=1;var la,Ht=(la=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,l=t.elements;return this.x=l[0]*i+l[4]*r+l[8]*a+l[12]*n,this.y=l[1]*i+l[5]*r+l[9]*a+l[13]*n,this.z=l[2]*i+l[6]*r+l[10]*a+l[14]*n,this.w=l[3]*i+l[7]*r+l[11]*a+l[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,l=t.elements,h=l[0],c=l[4],u=l[8],m=l[1],_=l[5],d=l[9],v=l[2],E=l[6],b=l[10];if(Math.abs(c-m)<.01&&Math.abs(u-v)<.01&&Math.abs(d-E)<.01){if(Math.abs(c+m)<.1&&Math.abs(u+v)<.1&&Math.abs(d+E)<.1&&Math.abs(h+_+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(h+1)/2,R=(_+1)/2,B=(b+1)/2,s=(c+m)/4,T=(u+v)/4,A=(d+E)/4;return p>R&&p>B?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=s/r,n=T/r):R>B?R<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(R),r=s/a,n=A/a):B<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(B),r=T/n,a=A/n),this.set(r,a,n,i),this}let M=Math.sqrt((E-d)*(E-d)+(u-v)*(u-v)+(m-c)*(m-c));return Math.abs(M)<.001&&(M=1),this.x=(E-d)/M,this.y=(u-v)/M,this.z=(m-c)/M,this.w=Math.acos((h+_+b-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ft(this.x,t.x,i.x),this.y=ft(this.y,t.y,i.y),this.z=ft(this.z,t.z,i.z),this.w=ft(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ft(this.x,t,i),this.y=ft(this.y,t,i),this.z=ft(this.z,t,i),this.w=ft(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la.prototype.isVector4=!0,la),Vc=class extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Ii(r),n=i.count;for(let l=0;l<n;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new wo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends Vc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ch=class extends Ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Wc=class extends Ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Rr,Ut=(Rr=class{constructor(t,i,r,a,n,l,h,c,u,m,_,d,v,E,b,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,l,h,c,u,m,_,d,v,E,b,M)}set(t,i,r,a,n,l,h,c,u,m,_,d,v,E,b,M){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=l,p[9]=h,p[13]=c,p[2]=u,p[6]=m,p[10]=_,p[14]=d,p[3]=v,p[7]=E,p[11]=b,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Ur.setFromMatrixColumn(t,0).length(),n=1/Ur.setFromMatrixColumn(t,1).length(),l=1/Ur.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*l,i[9]=r[9]*l,i[10]=r[10]*l,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,l=Math.cos(r),h=Math.sin(r),c=Math.cos(a),u=Math.sin(a),m=Math.cos(n),_=Math.sin(n);if(t.order==="XYZ"){let d=l*m,v=l*_,E=h*m,b=h*_;i[0]=c*m,i[4]=-c*_,i[8]=u,i[1]=v+E*u,i[5]=d-b*u,i[9]=-h*c,i[2]=b-d*u,i[6]=E+v*u,i[10]=l*c}else if(t.order==="YXZ"){let d=c*m,v=c*_,E=u*m,b=u*_;i[0]=d+b*h,i[4]=E*h-v,i[8]=l*u,i[1]=l*_,i[5]=l*m,i[9]=-h,i[2]=v*h-E,i[6]=b+d*h,i[10]=l*c}else if(t.order==="ZXY"){let d=c*m,v=c*_,E=u*m,b=u*_;i[0]=d-b*h,i[4]=-l*_,i[8]=E+v*h,i[1]=v+E*h,i[5]=l*m,i[9]=b-d*h,i[2]=-l*u,i[6]=h,i[10]=l*c}else if(t.order==="ZYX"){let d=l*m,v=l*_,E=h*m,b=h*_;i[0]=c*m,i[4]=E*u-v,i[8]=d*u+b,i[1]=c*_,i[5]=b*u+d,i[9]=v*u-E,i[2]=-u,i[6]=h*c,i[10]=l*c}else if(t.order==="YZX"){let d=l*c,v=l*u,E=h*c,b=h*u;i[0]=c*m,i[4]=b-d*_,i[8]=E*_+v,i[1]=_,i[5]=l*m,i[9]=-h*m,i[2]=-u*m,i[6]=v*_+E,i[10]=d-b*_}else if(t.order==="XZY"){let d=l*c,v=l*u,E=h*c,b=h*u;i[0]=c*m,i[4]=-_,i[8]=u*m,i[1]=d*_+b,i[5]=l*m,i[9]=v*_-E,i[2]=E*_-v,i[6]=h*m,i[10]=b*_+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xc,t,jc)}lookAt(t,i,r){let a=this.elements;return Si.subVectors(t,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ur.crossVectors(r,Si),ur.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ur.crossVectors(r,Si)),ur.normalize(),Ha.crossVectors(Si,ur),a[0]=ur.x,a[4]=Ha.x,a[8]=Si.x,a[1]=ur.y,a[5]=Ha.y,a[9]=Si.y,a[2]=ur.z,a[6]=Ha.z,a[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,l=r[0],h=r[4],c=r[8],u=r[12],m=r[1],_=r[5],d=r[9],v=r[13],E=r[2],b=r[6],M=r[10],p=r[14],R=r[3],B=r[7],s=r[11],T=r[15],A=a[0],w=a[4],o=a[8],f=a[12],X=a[1],L=a[5],O=a[9],J=a[13],N=a[2],G=a[6],ie=a[10],j=a[14],_e=a[3],K=a[7],$=a[11],ae=a[15];return n[0]=l*A+h*X+c*N+u*_e,n[4]=l*w+h*L+c*G+u*K,n[8]=l*o+h*O+c*ie+u*$,n[12]=l*f+h*J+c*j+u*ae,n[1]=m*A+_*X+d*N+v*_e,n[5]=m*w+_*L+d*G+v*K,n[9]=m*o+_*O+d*ie+v*$,n[13]=m*f+_*J+d*j+v*ae,n[2]=E*A+b*X+M*N+p*_e,n[6]=E*w+b*L+M*G+p*K,n[10]=E*o+b*O+M*ie+p*$,n[14]=E*f+b*J+M*j+p*ae,n[3]=R*A+B*X+s*N+T*_e,n[7]=R*w+B*L+s*G+T*K,n[11]=R*o+B*O+s*ie+T*$,n[15]=R*f+B*J+s*j+T*ae,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],l=t[1],h=t[5],c=t[9],u=t[13],m=t[2],_=t[6],d=t[10],v=t[14],E=t[3],b=t[7],M=t[11],p=t[15],R=c*v-u*d,B=h*v-u*_,s=h*d-c*_,T=l*v-u*m,A=l*d-c*m,w=l*_-h*m;return i*(b*R-M*B+p*s)-r*(E*R-M*T+p*A)+a*(E*B-b*T+p*w)-n*(E*s-b*A+M*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],l=t[5],h=t[9],c=t[2],u=t[6],m=t[10];return i*(l*m-h*u)-r*(n*m-h*c)+a*(n*u-l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],l=t[4],h=t[5],c=t[6],u=t[7],m=t[8],_=t[9],d=t[10],v=t[11],E=t[12],b=t[13],M=t[14],p=t[15],R=i*h-r*l,B=i*c-a*l,s=i*u-n*l,T=r*c-a*h,A=r*u-n*h,w=a*u-n*c,o=m*b-_*E,f=m*M-d*E,X=m*p-v*E,L=_*M-d*b,O=_*p-v*b,J=d*p-v*M,N=R*J-B*O+s*L+T*X-A*f+w*o;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return t[0]=(h*J-c*O+u*L)*G,t[1]=(a*O-r*J-n*L)*G,t[2]=(b*w-M*A+p*T)*G,t[3]=(d*A-_*w-v*T)*G,t[4]=(c*X-l*J-u*f)*G,t[5]=(i*J-a*X+n*f)*G,t[6]=(M*s-E*w-p*B)*G,t[7]=(m*w-d*s+v*B)*G,t[8]=(l*O-h*X+u*o)*G,t[9]=(r*X-i*O-n*o)*G,t[10]=(E*A-b*s+p*R)*G,t[11]=(_*s-m*A-v*R)*G,t[12]=(h*f-l*L-c*o)*G,t[13]=(i*L-r*f+a*o)*G,t[14]=(b*B-E*T-M*R)*G,t[15]=(m*T-_*B+d*R)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,l=t.x,h=t.y,c=t.z,u=n*l,m=n*h;return this.set(u*l+r,u*h-a*c,u*c+a*h,0,u*h+a*c,m*h+r,m*c-a*l,0,u*c-a*h,m*c+a*l,n*c*c+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,l){return this.set(1,r,n,0,t,1,l,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,l=i._y,h=i._z,c=i._w,u=n+n,m=l+l,_=h+h,d=n*u,v=n*m,E=n*_,b=l*m,M=l*_,p=h*_,R=c*u,B=c*m,s=c*_,T=r.x,A=r.y,w=r.z;return a[0]=(1-(b+p))*T,a[1]=(v+s)*T,a[2]=(E-B)*T,a[3]=0,a[4]=(v-s)*A,a[5]=(1-(d+p))*A,a[6]=(M+R)*A,a[7]=0,a[8]=(E+B)*w,a[9]=(M-R)*w,a[10]=(1-(d+b))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let l=Ur.set(a[0],a[1],a[2]).length(),h=Ur.set(a[4],a[5],a[6]).length(),c=Ur.set(a[8],a[9],a[10]).length();n<0&&(l=-l),Ni.copy(this);let u=1/l,m=1/h,_=1/c;return Ni.elements[0]*=u,Ni.elements[1]*=u,Ni.elements[2]*=u,Ni.elements[4]*=m,Ni.elements[5]*=m,Ni.elements[6]*=m,Ni.elements[8]*=_,Ni.elements[9]*=_,Ni.elements[10]*=_,i.setFromRotationMatrix(Ni),r.x=l,r.y=h,r.z=c,this}makePerspective(t,i,r,a,n,l,h=Xi,c=!1){let u=this.elements,m=2*n/(i-t),_=2*n/(r-a),d=(i+t)/(i-t),v=(r+a)/(r-a),E,b;if(c)E=n/(l-n),b=l*n/(l-n);else if(h===Xi)E=-(l+n)/(l-n),b=-2*l*n/(l-n);else if(h===Oa)E=-l/(l-n),b=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=m,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=_,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=E,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,i,r,a,n,l,h=Xi,c=!1){let u=this.elements,m=2/(i-t),_=2/(r-a),d=-(i+t)/(i-t),v=-(r+a)/(r-a),E,b;if(c)E=1/(l-n),b=l/(l-n);else if(h===Xi)E=-2/(l-n),b=-(l+n)/(l-n);else if(h===Oa)E=-1/(l-n),b=-n/(l-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=m,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=_,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=E,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Rr.prototype.isMatrix4=!0,Rr),Ur=new F,Ni=new Ut,Xc=new F(0,0,0),jc=new F(1,1,1),ur=new F,Ha=new F,Si=new F,Vo=new Ut,Wo=new vr,ua=class uh{constructor(t=0,i=0,r=0,a=uh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],l=a[4],h=a[8],c=a[1],u=a[5],m=a[9],_=a[2],d=a[6],v=a[10];switch(i){case"XYZ":this._y=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-_,n),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-ft(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-_,n)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(h,n)):(this._x=Math.atan2(-m,v),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ua.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yc=0,Xo=new F,Or=new vr,$i=new Ut,Ga=new F,va=new F,qc=new F,Kc=new vr,jo=new F(1,0,0),Yo=new F(0,1,0),qo=new F(0,0,1),Ko={type:"added"},Zc={type:"removed"},Fr={type:"childadded",child:null},Kn={type:"childremoved",child:null},fi=class yn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();let t=new F,i=new ua,r=new vr,a=new F(1,1,1);function n(){r.setFromEuler(i,!1)}function l(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ut},normalMatrix:{value:new nt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(qo,t)}translateOnAxis(t,i){return Xo.copy(t).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ga.copy(t):Ga.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(va,Ga,this.up):$i.lookAt(Ga,va,this.up),this.quaternion.setFromRotationMatrix($i),a&&($i.extractRotation(a.matrixWorld),Or.setFromRotationMatrix($i),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Zc),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,l=a.length;n<l;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,qc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,Kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let l=0,h=n.length;l<h;l++)n[l].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(h,c){return h[c.uuid]===void 0&&(h[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let c=h.shapes;if(Array.isArray(c))for(let u=0,m=c.length;u<m;u++){let _=c[u];n(t.shapes,_)}else n(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let c=0,u=this.material.length;c<u;c++)h.push(n(t.materials,this.material[c]));a.material=h}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){let c=this.animations[h];a.animations.push(n(t.animations,c))}}if(i){let h=l(t.geometries),c=l(t.materials),u=l(t.textures),m=l(t.images),_=l(t.shapes),d=l(t.skeletons),v=l(t.animations),E=l(t.nodes);h.length>0&&(r.geometries=h),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),d.length>0&&(r.skeletons=d),v.length>0&&(r.animations=v),E.length>0&&(r.nodes=E)}return r.object=a,r;function l(h){let c=[];for(let u in h){let m=h[u];delete m.metadata,c.push(m)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fi.DEFAULT_UP=new F(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jc={type:"move"},Zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,l=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(let E of e.hand.values()){let b=t.getJointPose(E,i),M=this._getHandJoint(c,E);b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=b.radius),M.visible=b!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],_=u.position.distanceTo(m.position),d=.02,v=.005;c.inputState.pinching&&_>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&_<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Jc)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Jn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=Fc(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Jn(n,a,e+1/3),this.g=Jn(n,a,e),this.b=Jn(n,a,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ri){function i(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],l=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){let i=dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return _t.workingToColorSpace(hi.copy(this),e),Math.round(ft(hi.r*255,0,255))*65536+Math.round(ft(hi.g*255,0,255))*256+Math.round(ft(hi.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(hi.copy(this),t);let i=hi.r,r=hi.g,a=hi.b,n=Math.max(i,r,a),l=Math.min(i,r,a),h,c,u=(l+n)/2;if(l===n)h=0,c=0;else{let m=n-l;switch(c=u<=.5?m/(n+l):m/(2-n-l),n){case i:h=(r-a)/m+(r<a?6:0);break;case r:h=(a-i)/m+2;break;case a:h=(i-r)/m+4;break}h/=6}return e.h=h,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(hi.copy(this),t),e.r=hi.r,e.g=hi.g,e.b=hi.b,e}getStyle(e=Ri){_t.workingToColorSpace(hi.copy(this),e);let t=hi.r,i=hi.g,r=hi.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Va);let i=Wn(dr.h,Va.h,t),r=Wn(dr.s,Va.s,t),a=Wn(dr.l,Va.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new tt;tt.NAMES=dh;var $c=class extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ui=new F,Qi=new F,$n=new F,er=new F,Br=new F,zr=new F,Zo=new F,Qn=new F,es=new F,ts=new F,is=new Ht,rs=new Ht,as=new Ht,$r=class Qr{constructor(t=new F,i=new F,r=new F){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Ui.subVectors(t,i),a.cross(Ui);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Ui.subVectors(a,i),Qi.subVectors(r,i),$n.subVectors(t,i);let l=Ui.dot(Ui),h=Ui.dot(Qi),c=Ui.dot($n),u=Qi.dot(Qi),m=Qi.dot($n),_=l*u-h*h;if(_===0)return n.set(0,0,0),null;let d=1/_,v=(u*c-h*m)*d,E=(l*m-h*c)*d;return n.set(1-v-E,E,v)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,i,r,a,n,l,h,c){return this.getBarycoord(t,i,r,a,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,er.x),c.addScaledVector(l,er.y),c.addScaledVector(h,er.z),c)}static getInterpolatedAttribute(t,i,r,a,n,l){return is.setScalar(0),rs.setScalar(0),as.setScalar(0),is.fromBufferAttribute(t,i),rs.fromBufferAttribute(t,r),as.fromBufferAttribute(t,a),l.setScalar(0),l.addScaledVector(is,n.x),l.addScaledVector(rs,n.y),l.addScaledVector(as,n.z),l}static isFrontFacing(t,i,r,a){return Ui.subVectors(r,i),Qi.subVectors(t,i),Ui.cross(Qi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ui.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Qr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Qr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Qr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,l,h;Br.subVectors(a,r),zr.subVectors(n,r),Qn.subVectors(t,r);let c=Br.dot(Qn),u=zr.dot(Qn);if(c<=0&&u<=0)return i.copy(r);es.subVectors(t,a);let m=Br.dot(es),_=zr.dot(es);if(m>=0&&_<=m)return i.copy(a);let d=c*_-m*u;if(d<=0&&c>=0&&m<=0)return l=c/(c-m),i.copy(r).addScaledVector(Br,l);ts.subVectors(t,n);let v=Br.dot(ts),E=zr.dot(ts);if(E>=0&&v<=E)return i.copy(n);let b=v*u-c*E;if(b<=0&&u>=0&&E<=0)return h=u/(u-E),i.copy(r).addScaledVector(zr,h);let M=m*E-v*_;if(M<=0&&_-m>=0&&v-E>=0)return Zo.subVectors(n,a),h=(_-m)/(_-m+(v-E)),i.copy(a).addScaledVector(Zo,h);let p=1/(M+b+d);return l=b*p,h=d*p,i.copy(r).addScaledVector(Br,l).addScaledVector(zr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pa=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,l=a.count;n<l;n++)e.isMesh===!0?e.getVertexPosition(n,Oi):Oi.fromBufferAttribute(a,n),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Xa.subVectors(this.max,Ma),kr.subVectors(e.a,Ma),Hr.subVectors(e.b,Ma),Gr.subVectors(e.c,Ma),pr.subVectors(Hr,kr),fr.subVectors(Gr,Hr),Sr.subVectors(kr,Gr);let t=[0,-pr.z,pr.y,0,-fr.z,fr.y,0,-Sr.z,Sr.y,pr.z,0,-pr.x,fr.z,0,-fr.x,Sr.z,0,-Sr.x,-pr.y,pr.x,0,-fr.y,fr.x,0,-Sr.y,Sr.x,0];return!ns(t,kr,Hr,Gr,Xa)||(t=[1,0,0,0,1,0,0,0,1],!ns(t,kr,Hr,Gr,Xa))?!1:(ja.crossVectors(pr,fr),t=[ja.x,ja.y,ja.z],ns(t,kr,Hr,Gr,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new F,new F,new F,new F,new F,new F,new F,new F],Oi=new F,Wa=new pa,kr=new F,Hr=new F,Gr=new F,pr=new F,fr=new F,Sr=new F,Ma=new F,Xa=new F,ja=new F,Er=new F;function ns(e,t,i,r,a){for(let n=0,l=e.length-3;n<=l;n+=3){Er.fromArray(e,n);let h=a.x*Math.abs(Er.x)+a.y*Math.abs(Er.y)+a.z*Math.abs(Er.z),c=t.dot(Er),u=i.dot(Er),m=r.dot(Er);if(Math.max(-Math.max(c,u,m),Math.min(c,u,m))>h)return!1}return!0}var Wt=new F,Ya=new Ge,Qc=0,Pi=class extends Mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lh,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},ph=class extends Pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},fh=class extends Pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Zt=class extends Pi{constructor(e,t,i){super(new Float32Array(e),t,i)}},eu=new pa,xa=new F,ss=new F,Ba=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):eu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(ss)),this.expandByPoint(xa.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tu=0,Ai=new Ut,os=new fi,Vr=new F,Ei=new pa,Sa=new pa,ti=new F,Mi=class mh extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lc(t)?fh:ph)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new nt().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,i,r){return Ai.makeTranslation(t,i,r),this.applyMatrix4(Ai),this}scale(t,i,r){return Ai.makeScale(t,i,r),this.applyMatrix4(Ai),this}lookAt(t){return os.lookAt(t),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let l=t[a];r.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Zt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ei.setFromBufferAttribute(n),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let r=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),i)for(let n=0,l=i.length;n<l;n++){let h=i[n];Sa.setFromBufferAttribute(h),this.morphTargetsRelative?(ti.addVectors(Ei.min,Sa.min),Ei.expandByPoint(ti),ti.addVectors(Ei.max,Sa.max),Ei.expandByPoint(ti)):(Ei.expandByPoint(Sa.min),Ei.expandByPoint(Sa.max))}Ei.getCenter(r);let a=0;for(let n=0,l=t.count;n<l;n++)ti.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(ti));if(i)for(let n=0,l=i.length;n<l;n++){let h=i[n],c=this.morphTargetsRelative;for(let u=0,m=h.count;u<m;u++)ti.fromBufferAttribute(h,u),c&&(Vr.fromBufferAttribute(t,u),ti.add(Vr)),a=Math.max(a,r.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==r.count)&&(l=new Pi(new Float32Array(4*r.count),4),this.setAttribute("tangent",l));let h=[],c=[];for(let o=0;o<r.count;o++)h[o]=new F,c[o]=new F;let u=new F,m=new F,_=new F,d=new Ge,v=new Ge,E=new Ge,b=new F,M=new F;function p(o,f,X){u.fromBufferAttribute(r,o),m.fromBufferAttribute(r,f),_.fromBufferAttribute(r,X),d.fromBufferAttribute(n,o),v.fromBufferAttribute(n,f),E.fromBufferAttribute(n,X),m.sub(u),_.sub(u),v.sub(d),E.sub(d);let L=1/(v.x*E.y-E.x*v.y);isFinite(L)&&(b.copy(m).multiplyScalar(E.y).addScaledVector(_,-v.y).multiplyScalar(L),M.copy(_).multiplyScalar(v.x).addScaledVector(m,-E.x).multiplyScalar(L),h[o].add(b),h[f].add(b),h[X].add(b),c[o].add(M),c[f].add(M),c[X].add(M))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let o=0,f=R.length;o<f;++o){let X=R[o],L=X.start,O=X.count;for(let J=L,N=L+O;J<N;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let B=new F,s=new F,T=new F,A=new F;function w(o){T.fromBufferAttribute(a,o),A.copy(T);let f=h[o];B.copy(f),B.sub(T.multiplyScalar(T.dot(f))).normalize(),s.crossVectors(A,f);let X=s.dot(c[o])<0?-1:1;l.setXYZW(o,B.x,B.y,B.z,X)}for(let o=0,f=R.length;o<f;++o){let X=R[o],L=X.start,O=X.count;for(let J=L,N=L+O;J<N;J+=3)w(t.getX(J+0)),w(t.getX(J+1)),w(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,v=r.count;d<v;d++)r.setXYZ(d,0,0,0);let a=new F,n=new F,l=new F,h=new F,c=new F,u=new F,m=new F,_=new F;if(t)for(let d=0,v=t.count;d<v;d+=3){let E=t.getX(d+0),b=t.getX(d+1),M=t.getX(d+2);a.fromBufferAttribute(i,E),n.fromBufferAttribute(i,b),l.fromBufferAttribute(i,M),m.subVectors(l,n),_.subVectors(a,n),m.cross(_),h.fromBufferAttribute(r,E),c.fromBufferAttribute(r,b),u.fromBufferAttribute(r,M),h.add(m),c.add(m),u.add(m),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,c.x,c.y,c.z),r.setXYZ(M,u.x,u.y,u.z)}else for(let d=0,v=i.count;d<v;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),l.fromBufferAttribute(i,d+2),m.subVectors(l,n),_.subVectors(a,n),m.cross(_),r.setXYZ(d+0,m.x,m.y,m.z),r.setXYZ(d+1,m.x,m.y,m.z),r.setXYZ(d+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)ti.fromBufferAttribute(t,i),ti.normalize(),t.setXYZ(i,ti.x,ti.y,ti.z)}toNonIndexed(){function t(h,c){let u=h.array,m=h.itemSize,_=h.normalized,d=new u.constructor(c.length*m),v=0,E=0;for(let b=0,M=c.length;b<M;b++){h.isInterleavedBufferAttribute?v=c[b]*h.data.stride+h.offset:v=c[b]*m;for(let p=0;p<m;p++)d[E++]=u[v++]}return new Pi(d,m,_)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new mh,r=this.index.array,a=this.attributes;for(let h in a){let c=a[h],u=t(c,r);i.setAttribute(h,u)}let n=this.morphAttributes;for(let h in n){let c=[],u=n[h];for(let m=0,_=u.length;m<_;m++){let d=u[m],v=t(d,r);c.push(v)}i.morphAttributes[h]=c}i.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,c=l.length;h<c;h++){let u=l[h];i.addGroup(u.start,u.count,u.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let c in r){let u=r[c];t.data.attributes[c]=u.toJSON(t.data)}let a={},n=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],m=[];for(let _=0,d=u.length;_<d;_++){let v=u[_];m.push(v.toJSON(t.data))}m.length>0&&(a[c]=m,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let u in a){let m=a[u];this.setAttribute(u,m.clone(i))}let n=t.morphAttributes;for(let u in n){let m=[],_=n[u];for(let d=0,v=_.length;d<v;d++)m.push(_[d].clone(i));this.morphAttributes[u]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let u=0,m=l.length;u<m;u++){let _=l[u];this.addGroup(_.start,_.count,_.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=_r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},di=new F,Jo=class gh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)di.fromBufferAttribute(this,i),di.applyMatrix4(t),this.setXYZ(i,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)di.fromBufferAttribute(this,i),di.applyNormalMatrix(t),this.setXYZ(i,di.x,di.y,di.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)di.fromBufferAttribute(this,i),di.transformDirection(t),this.setXYZ(i,di.x,di.y,di.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Pt(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Vi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Vi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Vi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Vi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Pt(i,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Pt(i,this.array),r=Pt(r,this.array),a=Pt(a,this.array),n=Pt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Pn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Pi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ls=new F,ru=new F,au=new nt,ar=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ls.subVectors(i,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ls),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||au.getNormalMatrix(e),r=this.coplanarPoint(ls).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nu=0,hr=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Da,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=jl,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let l in a){let h=a[l];delete h.metadata,n.push(h)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ar().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_h=class extends hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,Ea=new F,Xr=new F,jr=new F,Yr=new Ge,ya=new Ge,vh=new Ut,qa=new F,ba=new F,Ka=new F,$o=new Ge,hs=new Ge,Qo=new Ge,su=class extends fi{constructor(e=new _h){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new Mi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iu(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new Jo(i,3,0,!1)),Wr.setAttribute("uv",new Jo(i,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-jr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;Za(qa.set(-.5,-.5,0),jr,n,Xr,r,a),Za(ba.set(.5,-.5,0),jr,n,Xr,r,a),Za(Ka.set(.5,.5,0),jr,n,Xr,r,a),$o.set(0,0),hs.set(1,0),Qo.set(1,1);let l=e.ray.intersectTriangle(qa,ba,Ka,!1,Ea);if(l===null&&(Za(ba.set(-.5,.5,0),jr,n,Xr,r,a),hs.set(0,1),l=e.ray.intersectTriangle(qa,Ka,ba,!1,Ea),l===null))return;let h=e.ray.origin.distanceTo(Ea);h<e.near||h>e.far||t.push({distance:h,point:Ea.clone(),uv:$r.getInterpolation(Ea,qa,ba,Ka,$o,hs,Qo,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Za(e,t,i,r,a,n){Yr.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(ya.x=n*Yr.x-a*Yr.y,ya.y=a*Yr.x+n*Yr.y):ya.copy(Yr),e.copy(t),e.x+=ya.x,e.y+=ya.y,e.applyMatrix4(vh)}var ir=new F,cs=new F,Ja=new F,$a=new F,za=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cs.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),$a.copy(this.origin).sub(cs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Ja),l=$a.dot(this.direction),h=-$a.dot(Ja),c=$a.lengthSq(),u=Math.abs(1-n*n),m,_,d,v;if(u>0)if(m=n*h-l,_=n*l-h,v=a*u,m>=0)if(_>=-v)if(_<=v){let E=1/u;m*=E,_*=E,d=m*(m+n*_+2*l)+_*(n*m+_+2*h)+c}else _=a,m=Math.max(0,-(n*_+l)),d=-m*m+_*(_+2*h)+c;else _=-a,m=Math.max(0,-(n*_+l)),d=-m*m+_*(_+2*h)+c;else _<=-v?(m=Math.max(0,-(-n*a+l)),_=m>0?-a:Math.min(Math.max(-a,-h),a),d=-m*m+_*(_+2*h)+c):_<=v?(m=0,_=Math.min(Math.max(-a,-h),a),d=_*(_+2*h)+c):(m=Math.max(0,-(n*a+l)),_=m>0?a:Math.min(Math.max(-a,-h),a),d=-m*m+_*(_+2*h)+c);else _=n>0?-a:a,m=Math.max(0,-(n*_+l)),d=-m*m+_*(_+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(cs).addScaledVector(Ja,_),d}intersectSphere(e,t){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);let i=ir.dot(this.direction),r=ir.dot(ir)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),l=i-n,h=i+n;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,l,h,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,_=this.origin;return c>=0?(i=(e.min.x-_.x)*c,r=(e.max.x-_.x)*c):(i=(e.max.x-_.x)*c,r=(e.min.x-_.x)*c),u>=0?(a=(e.min.y-_.y)*u,n=(e.max.y-_.y)*u):(a=(e.max.y-_.y)*u,n=(e.min.y-_.y)*u),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),m>=0?(l=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),i>h||l>r)||((l>i||i!==i)&&(i=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,l=this.direction,h=l.x,c=l.y,u=l.z,m=e.x-n.x,_=e.y-n.y,d=e.z-n.z,v=t.x-n.x,E=t.y-n.y,b=t.z-n.z,M=i.x-n.x,p=i.y-n.y,R=i.z-n.z,B=Math.abs(h),s=Math.abs(c),T=Math.abs(u),A,w,o,f,X,L,O,J,N,G,ie,j;if(B>=s&&B>=T?(o=h,L=m,N=v,j=M,h>=0?(A=c,w=u,f=_,X=d,O=E,J=b,G=p,ie=R):(A=u,w=c,f=d,X=_,O=b,J=E,G=R,ie=p)):s>=T?(o=c,L=_,N=E,j=p,c>=0?(A=u,w=h,f=d,X=m,O=b,J=v,G=R,ie=M):(A=h,w=u,f=m,X=d,O=v,J=b,G=M,ie=R)):(o=u,L=d,N=b,j=R,u>=0?(A=h,w=c,f=m,X=_,O=v,J=E,G=M,ie=p):(A=c,w=h,f=_,X=m,O=E,J=v,G=p,ie=M)),o===0)return null;let _e=A/o,K=w/o,$=1/o,ae=f-_e*L,it=X-K*L,Fe=O-_e*N,ct=J-K*N,Qe=G-_e*j,Z=ie-K*j,le=Qe*ct-Z*Fe,pe=ae*Z-it*Qe,Be=Fe*it-ct*ae;if(r){if(le<0||pe<0||Be<0)return null}else if((le<0||pe<0||Be<0)&&(le>0||pe>0||Be>0))return null;let We=le+pe+Be;if(We===0)return null;let Te=$*(le*L+pe*N+Be*j);return(We>0?Te<0:Te>0)?null:this.at(Te/We,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},el=new Ut,yr=new za,Qa=new Ba,tl=new F,en=new F,tn=new F,rn=new F,us=new F,an=new F,il=new F,nn=new F,jt=class extends fi{constructor(e=new Mi,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(a&&l){an.set(0,0,0);for(let h=0,c=a.length;h<c;h++){let u=l[h],m=a[h];u!==0&&(us.fromBufferAttribute(m,e),n?an.addScaledVector(us,u):an.addScaledVector(us.sub(t),u))}t.add(an)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(a),yr.copy(e.ray).recast(e.near),!(Qa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Qa,tl)===null||yr.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(a).invert(),yr.copy(e.ray).applyMatrix4(el),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,l=a.index,h=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,m=a.attributes.normal,_=a.groups,d=a.drawRange;if(l!==null)if(Array.isArray(n))for(let v=0,E=_.length;v<E;v++){let b=_[v],M=n[b.materialIndex],p=Math.max(b.start,d.start),R=Math.min(l.count,Math.min(b.start+b.count,d.start+d.count));for(let B=p,s=R;B<s;B+=3){let T=l.getX(B),A=l.getX(B+1),w=l.getX(B+2);r=sn(this,M,e,i,c,u,m,T,A,w),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let v=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let b=v,M=E;b<M;b+=3){let p=l.getX(b),R=l.getX(b+1),B=l.getX(b+2);r=sn(this,n,e,i,c,u,m,p,R,B),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(n))for(let v=0,E=_.length;v<E;v++){let b=_[v],M=n[b.materialIndex],p=Math.max(b.start,d.start),R=Math.min(h.count,Math.min(b.start+b.count,d.start+d.count));for(let B=p,s=R;B<s;B+=3){let T=B,A=B+1,w=B+2;r=sn(this,M,e,i,c,u,m,T,A,w),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let v=Math.max(0,d.start),E=Math.min(h.count,d.start+d.count);for(let b=v,M=E;b<M;b+=3){let p=b,R=b+1,B=b+2;r=sn(this,n,e,i,c,u,m,p,R,B),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}}};function ou(e,t,i,r,a,n,l,h){let c;if(t.side===vi?c=r.intersectTriangle(l,n,a,!0,h):c=r.intersectTriangle(a,n,l,t.side===Cr,h),c===null)return null;nn.copy(h),nn.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(nn);return u<i.near||u>i.far?null:{distance:u,point:nn.clone(),object:e}}function sn(e,t,i,r,a,n,l,h,c,u){e.getVertexPosition(h,en),e.getVertexPosition(c,tn),e.getVertexPosition(u,rn);let m=ou(e,t,i,r,en,tn,rn,il);if(m){let _=new F;$r.getBarycoord(il,en,tn,rn,_),a&&(m.uv=$r.getInterpolatedAttribute(a,h,c,u,_,new Ge)),n&&(m.uv1=$r.getInterpolatedAttribute(n,h,c,u,_,new Ge)),l&&(m.normal=$r.getInterpolatedAttribute(l,h,c,u,_,new F),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));let d={a:h,b:c,c:u,normal:new F,materialIndex:0};$r.getNormal(en,tn,rn,d.normal),m.face=d,m.barycoord=_}return m}var lu=class extends Ii{constructor(e=null,t=1,i=1,r,a,n,l,h,c=si,u=si,m,_){super(null,n,l,h,c,u,r,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},br=new Ba,hu=new Ge(.5,.5),on=new F,Ro=class{constructor(e=new ar,t=new ar,i=new ar,r=new ar,a=new ar,n=new ar){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi,i=!1){let r=this.planes,a=e.elements,n=a[0],l=a[1],h=a[2],c=a[3],u=a[4],m=a[5],_=a[6],d=a[7],v=a[8],E=a[9],b=a[10],M=a[11],p=a[12],R=a[13],B=a[14],s=a[15];if(r[0].setComponents(c-n,d-u,M-v,s-p).normalize(),r[1].setComponents(c+n,d+u,M+v,s+p).normalize(),r[2].setComponents(c+l,d+m,M+E,s+R).normalize(),r[3].setComponents(c-l,d-m,M-E,s-R).normalize(),i)r[4].setComponents(h,_,b,B).normalize(),r[5].setComponents(c-h,d-_,M-b,s-B).normalize();else if(r[4].setComponents(c-h,d-_,M-b,s-B).normalize(),t===Xi)r[5].setComponents(c+h,d+_,M+b,s+B).normalize();else if(t===Oa)r[5].setComponents(h,_,b,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);let t=hu.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(on.x=r.normal.x>0?e.max.x:e.min.x,on.y=r.normal.y>0?e.max.y:e.min.y,on.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(on)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mh=class extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dn=new F,Ln=new F,rl=new Ut,Ta=new za,ln=new Ba,ds=new F,al=new F,cu=class extends fi{constructor(e=new Mi,t=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Dn.fromBufferAttribute(t,r-1),Ln.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Dn.distanceTo(Ln);e.setAttribute("lineDistance",new Zt(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ln.copy(i.boundingSphere),ln.applyMatrix4(r),ln.radius+=a,e.ray.intersectsSphere(ln)===!1)return;rl.copy(r).invert(),Ta.copy(e.ray).applyMatrix4(rl);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,c=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){let _=Math.max(0,n.start),d=Math.min(u.count,n.start+n.count);for(let v=_,E=d-1;v<E;v+=c){let b=u.getX(v),M=u.getX(v+1),p=hn(this,e,Ta,h,b,M,v);p&&t.push(p)}if(this.isLineLoop){let v=u.getX(d-1),E=u.getX(_),b=hn(this,e,Ta,h,v,E,d-1);b&&t.push(b)}}else{let _=Math.max(0,n.start),d=Math.min(m.count,n.start+n.count);for(let v=_,E=d-1;v<E;v+=c){let b=hn(this,e,Ta,h,v,v+1,v);b&&t.push(b)}if(this.isLineLoop){let v=hn(this,e,Ta,h,d-1,_,d-1);v&&t.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function hn(e,t,i,r,a,n,l){let h=e.geometry.attributes.position;if(Dn.fromBufferAttribute(h,a),Ln.fromBufferAttribute(h,n),i.distanceSqToSegment(Dn,Ln,ds,al)>r)return;ds.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ds);if(!(c<t.near||c>t.far))return{distance:c,point:al.clone().applyMatrix4(e.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:e}}var nl=new F,sl=new F,uu=class extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)nl.fromBufferAttribute(t,r),sl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nl.distanceTo(sl);e.setAttribute("lineDistance",new Zt(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xh=class extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ol=new Ut,co=new za,cn=new Ba,un=new F,du=class extends fi{constructor(e=new Mi,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(r),cn.radius+=a,e.ray.intersectsSphere(cn)===!1)return;ol.copy(r).invert(),co.copy(e.ray).applyMatrix4(ol);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,c=i.index,u=i.attributes.position;if(c!==null){let m=Math.max(0,n.start),_=Math.min(c.count,n.start+n.count);for(let d=m,v=_;d<v;d++){let E=c.getX(d);un.fromBufferAttribute(u,E),ll(un,E,h,r,e,t,this)}}else{let m=Math.max(0,n.start),_=Math.min(u.count,n.start+n.count);for(let d=m,v=_;d<v;d++)un.fromBufferAttribute(u,d),ll(un,d,h,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function ll(e,t,i,r,a,n,l){let h=co.distanceSqToPoint(e);if(h<i){let c=new F;co.closestPointToPoint(e,c),c.applyMatrix4(r);let u=a.ray.origin.distanceTo(c);if(u<a.near||u>a.far)return;n.push({distance:u,distanceToRay:Math.sqrt(h),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var Sh=class extends Ii{constructor(e=[],t=Pr,i,r,a,n,l,h,c,u){super(e,t,i,r,a,n,l,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hl=class extends Ii{constructor(e,t,i,r,a,n,l,h,c){super(e,t,i,r,a,n,l,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fa=class extends Ii{constructor(e,t,i=Yi,r,a,n,l=si,h=si,c,u=lr,m=1){if(u!==lr&&u!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:e,height:t,depth:m};super(_,r,a,n,l,h,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},pu=class extends Fa{constructor(e,t=Yi,i=Pr,r,a,n=si,l=si,h,c=lr){let u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,i,r,a,n,l,h,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eh=class extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Un=class yh extends Mi{constructor(t=1,i=1,r=1,a=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:l};let h=this;a=Math.floor(a),n=Math.floor(n),l=Math.floor(l);let c=[],u=[],m=[],_=[],d=0,v=0;E("z","y","x",-1,-1,r,i,t,l,n,0),E("z","y","x",1,-1,r,i,-t,l,n,1),E("x","z","y",1,1,t,r,i,a,l,2),E("x","z","y",1,-1,t,r,-i,a,l,3),E("x","y","z",1,-1,t,i,r,a,n,4),E("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(c),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(_,2));function E(b,M,p,R,B,s,T,A,w,o,f){let X=s/w,L=T/o,O=s/2,J=T/2,N=A/2,G=w+1,ie=o+1,j=0,_e=0,K=new F;for(let $=0;$<ie;$++){let ae=$*L-J;for(let it=0;it<G;it++){let Fe=it*X-O;K[b]=Fe*R,K[M]=ae*B,K[p]=N,u.push(K.x,K.y,K.z),K[b]=0,K[M]=0,K[p]=A>0?1:-1,m.push(K.x,K.y,K.z),_.push(it/w),_.push(1-$/o),j+=1}}for(let $=0;$<o;$++)for(let ae=0;ae<w;ae++){let it=d+ae+G*$,Fe=d+ae+G*($+1),ct=d+(ae+1)+G*($+1),Qe=d+(ae+1)+G*$;c.push(it,Fe,Qe),c.push(Fe,ct,Qe),_e+=6}h.addGroup(v,_e,f),v+=_e,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},uo=class bh extends Mi{constructor(t=1,i=1,r=1,a=32,n=1,l=!1,h=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:l,thetaStart:h,thetaLength:c};let u=this;a=Math.floor(a),n=Math.floor(n);let m=[],_=[],d=[],v=[],E=0,b=[],M=r/2,p=0;R(),l===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(v,2));function R(){let s=new F,T=new F,A=0,w=(i-t)/r;for(let o=0;o<=n;o++){let f=[],X=o/n,L=X*(i-t)+t;for(let O=0;O<=a;O++){let J=O/a,N=J*c+h,G=Math.sin(N),ie=Math.cos(N);T.x=L*G,T.y=-X*r+M,T.z=L*ie,_.push(T.x,T.y,T.z),s.set(G,w,ie).normalize(),d.push(s.x,s.y,s.z),v.push(J,1-X),f.push(E++)}b.push(f)}for(let o=0;o<a;o++)for(let f=0;f<n;f++){let X=b[f][o],L=b[f+1][o],O=b[f+1][o+1],J=b[f][o+1];(t>0||f!==0)&&(m.push(X,L,J),A+=3),(i>0||f!==n-1)&&(m.push(L,O,J),A+=3)}u.addGroup(p,A,0),p+=A}function B(s){let T=E,A=new Ge,w=new F,o=0,f=s===!0?t:i,X=s===!0?1:-1;for(let O=1;O<=a;O++)_.push(0,M*X,0),d.push(0,X,0),v.push(.5,.5),E++;let L=E;for(let O=0;O<=a;O++){let J=O/a*c+h,N=Math.cos(J),G=Math.sin(J);w.x=f*G,w.y=M*X,w.z=f*N,_.push(w.x,w.y,w.z),d.push(0,X,0),A.x=N*.5+.5,A.y=G*.5*X+.5,v.push(A.x,A.y),E++}for(let O=0;O<a;O++){let J=T+O,N=L+O;s===!0?m.push(N,N+1,J):m.push(N+1,N,J),o+=3}u.addGroup(p,o,s===!0?1:2),p+=o}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wa=class Th extends uo{constructor(t=1,i=1,r=32,a=1,n=!1,l=0,h=Math.PI*2){super(0,t,i,r,a,n,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:l,thetaLength:h}}static fromJSON(t){return new Th(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Co=class wh extends Mi{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,l=i/2,h=Math.floor(r),c=Math.floor(a),u=h+1,m=c+1,_=t/h,d=i/c,v=[],E=[],b=[],M=[];for(let p=0;p<m;p++){let R=p*d-l;for(let B=0;B<u;B++){let s=B*_-n;E.push(s,-R,0),b.push(0,0,1),M.push(B/h),M.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<h;R++){let B=R+u*p,s=R+u*(p+1),T=R+1+u*(p+1),A=R+1+u*p;v.push(B,s,A),v.push(s,T,A)}this.setIndex(v),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(b,3)),this.setAttribute("uv",new Zt(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.width,t.height,t.widthSegments,t.heightSegments)}},cl=class Ah extends Mi{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,l=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:l,thetaLength:h},r=Math.floor(r),a=Math.floor(a);let c=[],u=[],m=[],_=[],d=new F,v=new F,E=new F;for(let b=0;b<=r;b++){let M=l+b/r*h;for(let p=0;p<=a;p++){let R=p/a*n;v.x=(t+i*Math.cos(M))*Math.cos(R),v.y=(t+i*Math.cos(M))*Math.sin(R),v.z=i*Math.sin(M),u.push(v.x,v.y,v.z),d.x=t*Math.cos(R),d.y=t*Math.sin(R),E.subVectors(v,d).normalize(),m.push(E.x,E.y,E.z),_.push(p/a),_.push(b/r)}}for(let b=1;b<=r;b++)for(let M=1;M<=a;M++){let p=(a+1)*b+M-1,R=(a+1)*(b-1)+M-1,B=(a+1)*(b-1)+M,s=(a+1)*b+M;c.push(p,R,s),c.push(R,B,s)}this.setIndex(c),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},fu=class extends hr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new tt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function da(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(ul(a))a.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(ul(a[0])){let n=[];for(let l=0,h=a.length;l<h;l++)n[l]=a[l].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function pi(e){let t={};for(let i=0;i<e.length;i++){let r=da(e[i]);for(let a in r)t[a]=r[a]}return t}function ul(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function mu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Rh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_t.workingColorSpace}var gu={clone:da,merge:pi},_u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ki=class extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mu=class extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nt=class extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xu=class extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Su=class extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eu=class extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ch=class extends fi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ps=new Ut,dl=new F,pl=new F,yu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(dl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ps.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ps,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,l=r?r.w/a.y:1,h=r?r.x/a.x:0,c=r?r.y/a.y:0;e.coordinateSystem===Oa||e.reversedDepth?t.set(.5*n,0,0,.5*n+h,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+h,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dn=new F,pn=new vr,ki=new F,Ph=class extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dn,pn,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dn,pn,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(dn,pn,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dn,pn,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mr=new F,fl=new Ge,ml=new Ge,Ci=class extends Ph{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Sn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,fl,ml),t.subVectors(ml,fl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let h=n.fullWidth,c=n.fullHeight;a+=n.offsetX*r/h,t-=n.offsetY*i/c,r*=n.width/h,i*=n.height/c}let l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Po=class extends Ph{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,n=a+c*this.view.width,l-=u*this.view.offsetY,h=l-u*this.view.height}this.projectionMatrix.makeOrthographic(a,n,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bu=class extends yu{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends Ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fi.DEFAULT_UP),this.updateMatrix(),this.target=new fi,this.shadow=new bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Tu=class extends Ch{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},qr=-90,Kr=1,wu=class extends fi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ci(qr,Kr,e,t);r.layers=this.layers,this.add(r);let a=new Ci(qr,Kr,e,t);a.layers=this.layers,this.add(a);let n=new Ci(qr,Kr,e,t);n.layers=this.layers,this.add(n);let l=new Ci(qr,Kr,e,t);l.layers=this.layers,this.add(l);let h=new Ci(qr,Kr,e,t);h.layers=this.layers,this.add(h);let c=new Ci(qr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,l,h]=t;for(let c of t)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,l,h,c,u]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,_,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Au=class extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ih="\\[\\]\\.:\\/",Io="[^"+Ih+"]",Ru="[^"+Ih.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Io);/(WCOD+)?/.source.replace("WCOD",Ru);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Io);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Io);var gl=new Ut,Cu=class{constructor(e,t,i=0,r=1/0){this.ray=new za(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gl),this}intersectObject(e,t=!0,i=[]){return po(e,this,i,t),i.sort(_l),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)po(e[r],this,i,t);return i.sort(_l),i}};function _l(e,t){return e.distance-t.distance}function po(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let l=0,h=n.length;l<h;l++)po(n[l],t,i,!0)}}var vl=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ha;ha=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},ha.prototype.isMatrix2=!0;var Pu=class extends uu{constructor(e=10,t=10,i=4473924,r=8947848){i=new tt(i),r=new tt(r);let a=t/2,n=e/t,l=e/2,h=[],c=[];for(let _=0,d=0,v=-l;_<=t;_++,v+=n){h.push(-l,0,v,l,0,v),h.push(v,0,-l,v,0,l);let E=_===a?i:r;E.toArray(c,d),d+=3,E.toArray(c,d),d+=3,E.toArray(c,d),d+=3,E.toArray(c,d),d+=3}let u=new Mi;u.setAttribute("position",new Zt(h,3)),u.setAttribute("color",new Zt(c,3));let m=new Mh({vertexColors:!0,toneMapped:!1});super(u,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Iu=class extends Mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ml(e,t,i,r){let a=Du(r);switch(i){case nh:return e*t;case oh:return e*t/a.components*a.byteLength;case So:return e*t/a.components*a.byteLength;case Ir:return e*t*2/a.components*a.byteLength;case Eo:return e*t*2/a.components*a.byteLength;case sh:return e*t*3/a.components*a.byteLength;case Fi:return e*t*4/a.components*a.byteLength;case yo:return e*t*4/a.components*a.byteLength;case _n:case vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Mn:case xn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ls:case Us:return Math.max(e,16)*Math.max(t,8)/4;case Ds:case Ns:return Math.max(e,8)*Math.max(t,8)/2;case Os:case Fs:case zs:case ks:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Bs:case Tn:case Hs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ws:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Xs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case js:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case qs:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ks:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Zs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Js:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case $s:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Qs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case to:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case io:case ro:case ao:return Math.ceil(e/4)*Math.ceil(t/4)*16;case no:case so:return Math.ceil(e/4)*Math.ceil(t/4)*8;case wn:case oo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Du(e){switch(e){case yi:case th:return{byteLength:1,components:1};case Na:case ih:case qi:return{byteLength:2,components:1};case Mo:case xo:return{byteLength:2,components:4};case Yi:case vo:case Wi:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function Dh(){let e=null,t=!1,i=null,r=null;function a(n,l){r=e.requestAnimationFrame(a),i(n,l)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Lu(e){let t=new WeakMap;function i(h,c){let u=h.array,m=h.usage,_=u.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,u,m),h.onUploadCallback();let v;if(u instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=e.HALF_FLOAT;else if(u instanceof Uint16Array)h.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=e.SHORT;else if(u instanceof Uint32Array)v=e.UNSIGNED_INT;else if(u instanceof Int32Array)v=e.INT;else if(u instanceof Int8Array)v=e.BYTE;else if(u instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,c,u){let m=c.array,_=c.updateRanges;if(e.bindBuffer(u,h),_.length===0)e.bufferSubData(u,0,m);else{_.sort((v,E)=>v.start-E.start);let d=0;for(let v=1;v<_.length;v++){let E=_[d],b=_[v];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++d,_[d]=b)}_.length=d+1;for(let v=0,E=_.length;v<E;v++){let b=_[v];e.bufferSubData(u,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function n(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=t.get(h);c&&(e.deleteBuffer(c.buffer),t.delete(h))}function l(h,c){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let u=t.get(h);if(u===void 0)t.set(h,i(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,c),u.version=h.version}}return{get:a,remove:n,update:l}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nd=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Dd=`uniform sampler2D dfgLUT;
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
}`,Ld=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Vp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,$p=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,ef=`#define NORMAL
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
}`,tf=`#define NORMAL
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
}`,rf=`#define PHONG
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
}`,af=`#define PHONG
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
}`,nf=`#define STANDARD
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
}`,sf=`#define STANDARD
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
}`,of=`#define TOON
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
}`,lf=`#define TOON
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
}`,hf=`uniform float size;
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
}`,cf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 color;
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
}`,pf=`uniform float rotation;
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
}`,ff=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Nu,alphahash_pars_fragment:Uu,alphamap_fragment:Ou,alphamap_pars_fragment:Fu,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:ku,aomap_pars_fragment:Hu,batching_pars_vertex:Gu,batching_vertex:Vu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:ju,iridescence_fragment:Yu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:$u,color_fragment:Qu,color_pars_fragment:ed,color_pars_vertex:td,color_vertex:id,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:nd,displacementmap_pars_vertex:sd,displacementmap_vertex:od,emissivemap_fragment:ld,emissivemap_pars_fragment:hd,colorspace_fragment:cd,colorspace_pars_fragment:ud,envmap_fragment:dd,envmap_common_pars_fragment:pd,envmap_pars_fragment:fd,envmap_pars_vertex:md,envmap_physical_pars_fragment:wd,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:vd,fog_fragment:Md,fog_pars_fragment:xd,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:Ed,lights_lambert_fragment:yd,lights_lambert_pars_fragment:bd,lights_pars_begin:Td,lights_toon_fragment:Ad,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Id,lights_physical_pars_fragment:Dd,lights_fragment_begin:Ld,lights_fragment_maps:Nd,lights_fragment_end:Ud,lightprobes_pars_fragment:Od,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:kd,map_fragment:Hd,map_pars_fragment:Gd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:jd,morphinstance_vertex:Yd,morphcolor_vertex:qd,morphnormal_vertex:Kd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Jd,normal_fragment_begin:$d,normal_fragment_maps:Qd,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:ip,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:sp,iridescence_pars_fragment:op,opaque_fragment:lp,packing:hp,premultiplied_alpha_fragment:cp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:pp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:vp,shadowmask_pars_fragment:Mp,skinbase_vertex:xp,skinning_pars_vertex:Sp,skinning_vertex:Ep,skinnormal_vertex:yp,specularmap_fragment:bp,specularmap_pars_fragment:Tp,tonemapping_fragment:wp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Pp,uv_pars_vertex:Ip,uv_vertex:Dp,worldpos_vertex:Lp,background_vert:Np,background_frag:Up,backgroundCube_vert:Op,backgroundCube_frag:Fp,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Hp,distance_vert:Gp,distance_frag:Vp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:jp,linedashed_frag:Yp,meshbasic_vert:qp,meshbasic_frag:Kp,meshlambert_vert:Zp,meshlambert_frag:Jp,meshmatcap_vert:$p,meshmatcap_frag:Qp,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:rf,meshphong_frag:af,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:of,meshtoon_frag:lf,points_vert:hf,points_frag:cf,shadow_vert:uf,shadow_frag:df,sprite_vert:pf,sprite_frag:ff},xe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Gi={basic:{uniforms:pi([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:pi([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:pi([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:pi([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:pi([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:pi([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:pi([xe.points,xe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:pi([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:pi([xe.common,xe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:pi([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:pi([xe.sprite,xe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:pi([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:pi([xe.lights,xe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gi.physical={uniforms:pi([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var fn={r:0,b:0,g:0},mf=new Ut,Lh=new nt;Lh.set(-1,0,0,0,1,0,0,0,1);function gf(e,t,i,r,a,n){let l=new tt(0),h=a===!0?0:1,c,u,m=null,_=0,d=null;function v(R){let B=R.isScene===!0?R.background:null;if(B&&B.isTexture){let s=R.backgroundBlurriness>0;B=t.get(B,s)}return B}function E(R){let B=!1,s=v(R);s===null?M(l,h):s&&s.isColor&&(M(s,1),B=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(R,B){let s=v(B);s&&(s.isCubeTexture||s.mapping===Nn)?(u===void 0&&(u=new jt(new Un(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:da(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=s,u.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(B.backgroundRotation)).transpose(),s.isCubeTexture&&s.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Lh),u.material.toneMapped=_t.getTransfer(s.colorSpace)!==At,(m!==s||_!==s.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,m=s,_=s.version,d=e.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):s&&s.isTexture&&(c===void 0&&(c=new jt(new Co(2,2),new Ki({name:"BackgroundMaterial",uniforms:da(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=s,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=_t.getTransfer(s.colorSpace)!==At,s.matrixAutoUpdate===!0&&s.updateMatrix(),c.material.uniforms.uvTransform.value.copy(s.matrix),(m!==s||_!==s.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,m=s,_=s.version,d=e.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function M(R,B){R.getRGB(fn,Rh(e)),i.buffers.color.setClear(fn.r,fn.g,fn.b,B,n)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(R,B=1){l.set(R),h=B,M(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,M(l,h)},render:E,addToRenderList:b,dispose:p}}function _f(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,l=!1;function h(L,O,J,N,G){let ie=!1,j=_(L,N,J,O);n!==j&&(n=j,u(n.object)),ie=v(L,N,J,G),ie&&E(L,N,J,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(ie||l)&&(l=!1,s(L,O,J,N),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return e.createVertexArray()}function u(L){return e.bindVertexArray(L)}function m(L){return e.deleteVertexArray(L)}function _(L,O,J,N){let G=N.wireframe===!0,ie=r[O.id];ie===void 0&&(ie={},r[O.id]=ie);let j=L.isInstancedMesh===!0?L.id:0,_e=ie[j];_e===void 0&&(_e={},ie[j]=_e);let K=_e[J.id];K===void 0&&(K={},_e[J.id]=K);let $=K[G];return $===void 0&&($=d(c()),K[G]=$),$}function d(L){let O=[],J=[],N=[];for(let G=0;G<i;G++)O[G]=0,J[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:N,object:L,attributes:{},index:null}}function v(L,O,J,N){let G=n.attributes,ie=O.attributes,j=0,_e=J.getAttributes();for(let K in _e)if(_e[K].location>=0){let $=G[K],ae=ie[K];if(ae===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;j++}return n.attributesNum!==j||n.index!==N}function E(L,O,J,N){let G={},ie=O.attributes,j=0,_e=J.getAttributes();for(let K in _e)if(_e[K].location>=0){let $=ie[K];$===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),G[K]=ae,j++}n.attributes=G,n.attributesNum=j,n.index=N}function b(){let L=n.newAttributes;for(let O=0,J=L.length;O<J;O++)L[O]=0}function M(L){p(L,0)}function p(L,O){let J=n.newAttributes,N=n.enabledAttributes,G=n.attributeDivisors;J[L]=1,N[L]===0&&(e.enableVertexAttribArray(L),N[L]=1),G[L]!==O&&(e.vertexAttribDivisor(L,O),G[L]=O)}function R(){let L=n.newAttributes,O=n.enabledAttributes;for(let J=0,N=O.length;J<N;J++)O[J]!==L[J]&&(e.disableVertexAttribArray(J),O[J]=0)}function B(L,O,J,N,G,ie,j){j===!0?e.vertexAttribIPointer(L,O,J,G,ie):e.vertexAttribPointer(L,O,J,N,G,ie)}function s(L,O,J,N){b();let G=N.attributes,ie=J.getAttributes(),j=O.defaultAttributeValues;for(let _e in ie){let K=ie[_e];if(K.location>=0){let $=G[_e];if($===void 0&&(_e==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),_e==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let ae=$.normalized,it=$.itemSize,Fe=t.get($);if(Fe===void 0)continue;let ct=Fe.buffer,Qe=Fe.type,Z=Fe.bytesPerElement,le=Qe===e.INT||Qe===e.UNSIGNED_INT||$.gpuType===vo;if($.isInterleavedBufferAttribute){let pe=$.data,Be=pe.stride,We=$.offset;if(pe.isInstancedInterleavedBuffer){for(let Te=0;Te<K.locationSize;Te++)p(K.location+Te,pe.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Te=0;Te<K.locationSize;Te++)M(K.location+Te);e.bindBuffer(e.ARRAY_BUFFER,ct);for(let Te=0;Te<K.locationSize;Te++)B(K.location+Te,it/K.locationSize,Qe,ae,Be*Z,(We+it/K.locationSize*Te)*Z,le)}else{if($.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)p(K.location+pe,$.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pe=0;pe<K.locationSize;pe++)M(K.location+pe);e.bindBuffer(e.ARRAY_BUFFER,ct);for(let pe=0;pe<K.locationSize;pe++)B(K.location+pe,it/K.locationSize,Qe,ae,it*Z,it/K.locationSize*pe*Z,le)}}else if(j!==void 0){let ae=j[_e];if(ae!==void 0)switch(ae.length){case 2:e.vertexAttrib2fv(K.location,ae);break;case 3:e.vertexAttrib3fv(K.location,ae);break;case 4:e.vertexAttrib4fv(K.location,ae);break;default:e.vertexAttrib1fv(K.location,ae)}}}}R()}function T(){f();for(let L in r){let O=r[L];for(let J in O){let N=O[J];for(let G in N){let ie=N[G];for(let j in ie)m(ie[j].object),delete ie[j];delete N[G]}}delete r[L]}}function A(L){if(r[L.id]===void 0)return;let O=r[L.id];for(let J in O){let N=O[J];for(let G in N){let ie=N[G];for(let j in ie)m(ie[j].object),delete ie[j];delete N[G]}}delete r[L.id]}function w(L){for(let O in r){let J=r[O];for(let N in J){let G=J[N];if(G[L.id]===void 0)continue;let ie=G[L.id];for(let j in ie)m(ie[j].object),delete ie[j];delete G[L.id]}}}function o(L){for(let O in r){let J=r[O],N=L.isInstancedMesh===!0?L.id:0,G=J[N];if(G!==void 0){for(let ie in G){let j=G[ie];for(let _e in j)m(j[_e].object),delete j[_e];delete G[ie]}delete J[N],Object.keys(J).length===0&&delete r[O]}}}function f(){X(),l=!0,n!==a&&(n=a,u(n.object))}function X(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:f,resetDefaultState:X,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:o,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:M,disableUnusedAttributes:R}}function vf(e,t,i){let r;function a(c){r=c}function n(c,u){e.drawArrays(r,c,u),i.update(u,r,1)}function l(c,u,m){m!==0&&(e.drawArraysInstanced(r,c,u,m),i.update(u,r,m))}function h(c,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,m);let _=0;for(let d=0;d<m;d++)_+=u[d];i.update(_,r,1)}this.setMode=a,this.render=n,this.renderInstances=l,this.renderMultiDraw=h}function Mf(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function l(w){return!(w!==Fi&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(w){let o=w===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yi&&w!==Wi&&!o&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=i.precision!==void 0?i.precision:"highp",m=c(u);m!==u&&(Ke("WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);let _=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),M=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),R=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),B=e.getParameter(e.MAX_VARYING_VECTORS),s=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:l,textureTypeReadable:h,precision:u,logarithmicDepthBuffer:_,reversedDepthBuffer:d,maxTextures:v,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:R,maxVaryings:B,maxFragmentUniforms:s,maxSamples:T,samples:A}}function xf(e){let t=this,i=null,r=0,a=!1,n=!1,l=new ar,h=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,d){let v=_.length!==0||d||r!==0||a;return a=d,r=_.length,v},this.beginShadows=function(){n=!0,m(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(_,d){i=m(_,d,0)},this.setState=function(_,d,v){let E=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,p=e.get(_);if(!a||E===null||E.length===0||n&&!M)n?m(null):u();else{let R=n?0:r,B=R*4,s=p.clippingState||null;c.value=s,s=m(E,d,B,v);for(let T=0;T!==B;++T)s[T]=i[T];p.clippingState=s,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function u(){c.value!==i&&(c.value=i,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(_,d,v,E){let b=_!==null?_.length:0,M=null;if(b!==0){if(M=c.value,E!==!0||M===null){let p=v+b*4,R=d.matrixWorldInverse;h.getNormalMatrix(R),(M===null||M.length<p)&&(M=new Float32Array(p));for(let B=0,s=v;B!==b;++B,s+=4)l.copy(_[B]).applyMatrix4(R,h),l.normal.toArray(M,s),M[s+3]=l.constant}c.value=M,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}var ta=4,Sf=6,Ef=20,yf=256,Aa=new Po,xl=new tt,ms=null,gs=0,_s=0,vs=!1,bf=new F,Tr=new F,Sl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:l=bf}=a;ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,r,h,l),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ms,gs,_s),this._renderer.xr.enabled=vs,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ms=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:qi,format:Fi,colorSpace:An,depthBuffer:!1},r=El(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tf(a)),this._blurMaterial=Af(a,e,t),this._ggxMaterial=wf(a,e,t)}return r}_compileMaterial(e){let t=new jt(new Mi,e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,r,a){let n=new Ci(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,m=c.toneMapping;c.getClearColor(xl),c.toneMapping=ji,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Un,new In({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,d=_.material,v=!1,E=e.background;E?E.isColor&&(d.color.copy(E),e.background=null,v=!0):(d.color.copy(xl),v=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(n.up.set(0,l[b],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+h[b],a.y,a.z)):M===1?(n.up.set(0,0,l[b]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+h[b],a.z)):(n.up.set(0,l[b],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+h[b]));let p=this._cubeSize;Zr(r,M*p,b>2?p:0,p,p),c.setRenderTarget(r),v&&c.render(_,n),c.render(e,n)}c.toneMapping=m,c.autoClear=u,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Pr||e.mapping===ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let l=a.uniforms;l.envMap.value=e;let h=this._cubeSize;Zr(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(n,Aa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,l=this._lodMeshes[i];l.material=n;let h=n.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),_=c*1.25,d=m*_,{_lodMax:v}=this,E=this._sizeLods[i],b=3*E*(i>v-ta?i-v+ta:0),M=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=d,h.mipInt.value=v-t,Zr(a,b,M,3*E,2*E),r.setRenderTarget(a),r.render(l,Aa),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=v-i,Zr(e,b,M,3*E,2*E),r.setRenderTarget(e),r.render(l,Aa)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,l=this._blurMaterial,h=this._lodMeshes[r];h.material=l;let c=l.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[r],m=3*u*(r>this._lodMax-ta?r-this._lodMax+ta:0),_=4*(this._cubeSize-u);Zr(t,m,_,3*u,2*u),n.setRenderTarget(t),n.render(h,Aa)}};function Tf(e){let t=[],i=[],r=e,a=e-ta+1+Sf;for(let n=0;n<a;n++){let l=Math.pow(2,r);t.push(l);let h=1/(l-2),c=-h,u=1+h,m=[c,c,u,c,u,u,c,c,u,u,c,u],_=6,d=6,v=3,E=new Float32Array(v*d*_),b=new Float32Array(v*d*_);for(let p=0;p<_;p++){let R=p%3*2/3-1,B=p>2?0:-1,s=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];E.set(s,v*d*p);for(let T=0;T<d;T++){let A=m[T*2]*2-1,w=m[T*2+1]*2-1;p===0?Tr.set(1,w,A):p===1?Tr.set(-A,1,-w):p===2?Tr.set(-A,w,1):p===3?Tr.set(-1,w,-A):p===4?Tr.set(-A,-1,w):Tr.set(A,w,-1),Tr.toArray(b,(p*d+T)*v)}}let M=new Mi;M.setAttribute("position",new Pi(E,v)),M.setAttribute("outputDirection",new Pi(b,v)),i.push(new jt(M,null)),r>ta&&r--}return{lodMeshes:i,sizeLods:t}}function El(e,t,i){let r=new Bi(e,t,i);return r.texture.mapping=Nn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function wf(e,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:On(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Af(e,t,i){return new Ki({name:"SphericalGaussianBlur",defines:{SAMPLES:Ef,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:On(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function yl(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:On(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function bl(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:On(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function On(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nh=class extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),a=new Ki({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:sr});a.uniforms.tEquirect.value=t;let n=new jt(r,a),l=t.minFilter;return t.minFilter===wr&&(t.minFilter=oi),new wu(1,10,this).update(e,n),t.minFilter=l,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Rf(e){let t=new WeakMap,i=new WeakMap,r=null;function a(d,v=!1){return d==null?null:v?l(d):n(d)}function n(d){if(d&&d.isTexture){let v=d.mapping;if(v===kn||v===Hn)if(t.has(d)){let E=t.get(d).texture;return h(E,d.mapping)}else{let E=d.image;if(E&&E.height>0){let b=new Nh(E.height);return b.fromEquirectangularTexture(e,d),t.set(d,b),d.addEventListener("dispose",u),h(b.texture,d.mapping)}else return null}}return d}function l(d){if(d&&d.isTexture){let v=d.mapping,E=v===kn||v===Hn,b=v===Pr||v===ca;if(E||b){let M=i.get(d),p=M!==void 0?M.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return r===null&&(r=new Sl(e)),M=E?r.fromEquirectangular(d,M):r.fromCubemap(d,M),M.texture.pmremVersion=d.pmremVersion,i.set(d,M),M.texture;if(M!==void 0)return M.texture;{let R=d.image;return E&&R&&R.height>0||b&&R&&c(R)?(r===null&&(r=new Sl(e)),M=E?r.fromEquirectangular(d):r.fromCubemap(d),M.texture.pmremVersion=d.pmremVersion,i.set(d,M),d.addEventListener("dispose",m),M.texture):null}}}return d}function h(d,v){return v===kn?d.mapping=Pr:v===Hn&&(d.mapping=ca),d}function c(d){let v=0,E=6;for(let b=0;b<E;b++)d[b]!==void 0&&v++;return v===E}function u(d){let v=d.target;v.removeEventListener("dispose",u);let E=t.get(v);E!==void 0&&(t.delete(v),E.dispose())}function m(d){let v=d.target;v.removeEventListener("dispose",m);let E=i.get(v);E!==void 0&&(i.delete(v),E.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function Cf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&ra("WebGLRenderer: "+r+" extension not supported."),a}}}function Pf(e,t,i,r){let a={},n=new WeakMap;function l(_){let d=_.target;d.index!==null&&t.remove(d.index);for(let E in d.attributes)t.remove(d.attributes[E]);d.removeEventListener("dispose",l),delete a[d.id];let v=n.get(d);v&&(t.remove(v),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function h(_,d){return a[d.id]===!0||(d.addEventListener("dispose",l),a[d.id]=!0,i.memory.geometries++),d}function c(_){let d=_.attributes;for(let v in d)t.update(d[v],e.ARRAY_BUFFER)}function u(_){let d=[],v=_.index,E=_.attributes.position,b=0;if(E===void 0)return;if(v!==null){let R=v.array;b=v.version;for(let B=0,s=R.length;B<s;B+=3){let T=R[B+0],A=R[B+1],w=R[B+2];d.push(T,A,A,w,w,T)}}else{let R=E.array;b=E.version;for(let B=0,s=R.length/3-1;B<s;B+=3){let T=B+0,A=B+1,w=B+2;d.push(T,A,A,w,w,T)}}let M=new(E.count>=65535?fh:ph)(d,1);M.version=b;let p=n.get(_);p&&t.remove(p),n.set(_,M)}function m(_){let d=n.get(_);if(d){let v=_.index;v!==null&&d.version<v.version&&u(_)}else u(_);return n.get(_)}return{get:h,update:c,getWireframeAttribute:m}}function If(e,t,i){let r;function a(_){r=_}let n,l;function h(_){n=_.type,l=_.bytesPerElement}function c(_,d){e.drawElements(r,d,n,_*l),i.update(d,r,1)}function u(_,d,v){v!==0&&(e.drawElementsInstanced(r,d,n,_*l,v),i.update(d,r,v))}function m(_,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,_,0,v);let E=0;for(let b=0;b<v;b++)E+=d[b];i.update(E,r,1)}this.setMode=a,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=m}function Df(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,l,h){switch(i.calls++,l){case e.TRIANGLES:i.triangles+=h*(n/3);break;case e.LINES:i.lines+=h*(n/2);break;case e.LINE_STRIP:i.lines+=h*(n-1);break;case e.LINE_LOOP:i.lines+=h*n;break;case e.POINTS:i.points+=h*n;break;default:vt("WebGLInfo: Unknown draw mode:",l);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Lf(e,t,i){let r=new WeakMap,a=new Ht;function n(l,h,c){let u=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,d=r.get(h);if(d===void 0||d.count!==_){let v=function(){o.dispose(),r.delete(h),h.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],B=h.morphAttributes.color||[],s=0;E===!0&&(s=1),b===!0&&(s=2),M===!0&&(s=3);let T=h.attributes.position.count*s,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let w=new Float32Array(T*A*4*_),o=new ch(w,T,A,_);o.type=Wi,o.needsUpdate=!0;let f=s*4;for(let X=0;X<_;X++){let L=p[X],O=R[X],J=B[X],N=T*A*4*X;for(let G=0;G<L.count;G++){let ie=G*f;E===!0&&(a.fromBufferAttribute(L,G),w[N+ie+0]=a.x,w[N+ie+1]=a.y,w[N+ie+2]=a.z,w[N+ie+3]=0),b===!0&&(a.fromBufferAttribute(O,G),w[N+ie+4]=a.x,w[N+ie+5]=a.y,w[N+ie+6]=a.z,w[N+ie+7]=0),M===!0&&(a.fromBufferAttribute(J,G),w[N+ie+8]=a.x,w[N+ie+9]=a.y,w[N+ie+10]=a.z,w[N+ie+11]=J.itemSize===4?a.w:1)}}d={count:_,texture:o,size:new Ge(T,A)},r.set(h,d),h.addEventListener("dispose",v)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",l.morphTexture,i);else{let v=0;for(let b=0;b<u.length;b++)v+=u[b];let E=h.morphTargetsRelative?1:1-v;c.getUniforms().setValue(e,"morphTargetBaseInfluence",E),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function Nf(e,t,i,r,a){let n=new WeakMap;function l(u){let m=a.render.frame,_=u.geometry,d=t.get(u,_);if(n.get(d)!==m&&(t.update(d),n.set(d,m)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),n.get(u)!==m&&(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&i.update(u.instanceColor,e.ARRAY_BUFFER),n.set(u,m))),u.isSkinnedMesh){let v=u.skeleton;n.get(v)!==m&&(v.update(),n.set(v,m))}return d}function h(){n=new WeakMap}function c(u){let m=u.target;m.removeEventListener("dispose",c),r.releaseStatesOfObject(m),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:l,dispose:h}}var Uf={[ql]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[_o]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function Of(e,t,i,r,a,n){let l=new Bi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,c=null,u=new Mi;u.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let m=new Mu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new jt(u,m),d=new Po(-1,1,1,-1,0,1),v=null,E=null,b=!1,M,p=null,R=[],B=!1;this.setSize=function(s,T){l.setSize(s,T),h!==null&&h.setSize(s,T),c!==null&&c.setSize(s,T);for(let A=0;A<R.length;A++){let w=R[A];w.setSize&&w.setSize(s,T)}},this.setEffects=function(s){R=s,B=R.length>0&&R[0].isRenderPass===!0;let T=l.width,A=l.height;R.length>0&&h===null&&(h=new Bi(T,A,{type:qi,depthBuffer:!1,stencilBuffer:!1}),c=new Bi(T,A,{type:qi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<R.length;w++){let o=R[w];o.setSize&&o.setSize(T,A)}},this.begin=function(s,T){if(b||s.toneMapping===ji&&R.length===0)return!1;if(p=T,T!==null){let A=T.width,w=T.height;(l.width!==A||l.height!==w)&&this.setSize(A,w)}return B===!1&&s.setRenderTarget(l),M=s.toneMapping,s.toneMapping=ji,!0},this.hasRenderPass=function(){return B},this.end=function(s,T){s.toneMapping=M,b=!0;let A=l,w=h;for(let o=0;o<R.length;o++){let f=R[o];f.enabled!==!1&&(f.render(s,w,A,T),f.needsSwap!==!1&&(A=w,w=w===h?c:h))}if(v!==s.outputColorSpace||E!==s.toneMapping){v=s.outputColorSpace,E=s.toneMapping,m.defines={},_t.getTransfer(v)===At&&(m.defines.SRGB_TRANSFER="");let o=Uf[E];o&&(m.defines[o]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=A.texture,s.setRenderTarget(p),s.render(_,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){l.dispose(),h!==null&&h.dispose(),c!==null&&c.dispose(),u.dispose(),m.dispose()}}var Uh=new Ii,fo=new Fa(1,1),Oh=new ch,Fh=new Wc,Bh=new Sh,Tl=[],wl=[],Al=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function fa(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Tl[a];if(n===void 0&&(n=new Float32Array(a),Tl[a]=n),t!==0){r.toArray(n,0);for(let l=1,h=0;l!==t;++l)h+=i,e[l].toArray(n,h)}return n}function Jt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function $t(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Fn(e,t){let i=wl[t];i===void 0&&(i=new Int32Array(t),wl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Ff(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Bf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Jt(i,t))return;e.uniform2fv(this.addr,t),$t(i,t)}}function zf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Jt(i,t))return;e.uniform3fv(this.addr,t),$t(i,t)}}function kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Jt(i,t))return;e.uniform4fv(this.addr,t),$t(i,t)}}function Hf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Jt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),$t(i,t)}else{if(Jt(i,r))return;Cl.set(r),e.uniformMatrix2fv(this.addr,!1,Cl),$t(i,r)}}function Gf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Jt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),$t(i,t)}else{if(Jt(i,r))return;Rl.set(r),e.uniformMatrix3fv(this.addr,!1,Rl),$t(i,r)}}function Vf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Jt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),$t(i,t)}else{if(Jt(i,r))return;Al.set(r),e.uniformMatrix4fv(this.addr,!1,Al),$t(i,r)}}function Wf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Xf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Jt(i,t))return;e.uniform2iv(this.addr,t),$t(i,t)}}function jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Jt(i,t))return;e.uniform3iv(this.addr,t),$t(i,t)}}function Yf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Jt(i,t))return;e.uniform4iv(this.addr,t),$t(i,t)}}function qf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Jt(i,t))return;e.uniform2uiv(this.addr,t),$t(i,t)}}function Zf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Jt(i,t))return;e.uniform3uiv(this.addr,t),$t(i,t)}}function Jf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Jt(i,t))return;e.uniform4uiv(this.addr,t),$t(i,t)}}function $f(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(fo.compareFunction=i.isReversedDepthBuffer()?To:bo,n=fo):n=Uh,i.setTexture2D(t||n,a)}function Qf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Fh,a)}function em(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Bh,a)}function tm(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Oh,a)}function im(e){switch(e){case 5126:return Ff;case 35664:return Bf;case 35665:return zf;case 35666:return kf;case 35674:return Hf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return Wf;case 35667:case 35671:return Xf;case 35668:case 35672:return jf;case 35669:case 35673:return Yf;case 5125:return qf;case 36294:return Kf;case 36295:return Zf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function rm(e,t){e.uniform1fv(this.addr,t)}function am(e,t){let i=fa(t,this.size,2);e.uniform2fv(this.addr,i)}function nm(e,t){let i=fa(t,this.size,3);e.uniform3fv(this.addr,i)}function sm(e,t){let i=fa(t,this.size,4);e.uniform4fv(this.addr,i)}function om(e,t){let i=fa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function lm(e,t){let i=fa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function hm(e,t){let i=fa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function cm(e,t){e.uniform1iv(this.addr,t)}function um(e,t){e.uniform2iv(this.addr,t)}function dm(e,t){e.uniform3iv(this.addr,t)}function pm(e,t){e.uniform4iv(this.addr,t)}function fm(e,t){e.uniform1uiv(this.addr,t)}function mm(e,t){e.uniform2uiv(this.addr,t)}function gm(e,t){e.uniform3uiv(this.addr,t)}function _m(e,t){e.uniform4uiv(this.addr,t)}function vm(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);Jt(r,n)||(e.uniform1iv(this.addr,n),$t(r,n));let l;this.type===e.SAMPLER_2D_SHADOW?l=fo:l=Uh;for(let h=0;h!==a;++h)i.setTexture2D(t[h]||l,n[h])}function Mm(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);Jt(r,n)||(e.uniform1iv(this.addr,n),$t(r,n));for(let l=0;l!==a;++l)i.setTexture3D(t[l]||Fh,n[l])}function xm(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);Jt(r,n)||(e.uniform1iv(this.addr,n),$t(r,n));for(let l=0;l!==a;++l)i.setTextureCube(t[l]||Bh,n[l])}function Sm(e,t,i){let r=this.cache,a=t.length,n=Fn(i,a);Jt(r,n)||(e.uniform1iv(this.addr,n),$t(r,n));for(let l=0;l!==a;++l)i.setTexture2DArray(t[l]||Oh,n[l])}function Em(e){switch(e){case 5126:return rm;case 35664:return am;case 35665:return nm;case 35666:return sm;case 35674:return om;case 35675:return lm;case 35676:return hm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return fm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Sm}}var ym=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=im(t.type)}},bm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Em(t.type)}},Tm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let l=r[a];l.setValue(e,t[l.id],i)}}},Ms=/(\w+)(\])?(\[|\.)?/g;function Pl(e,t){e.seq.push(t),e.map[t.id]=t}function wm(e,t,i){let r=e.name,a=r.length;for(Ms.lastIndex=0;;){let n=Ms.exec(r),l=Ms.lastIndex,h=n[1],c=n[2]==="]",u=n[3];if(c&&(h=h|0),u===void 0||u==="["&&l+2===a){Pl(i,u===void 0?new ym(h,e,t):new bm(h,e,t));break}else{let m=i.map[h];m===void 0&&(m=new Tm(h),Pl(i,m)),i=m}}}var bn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let l=e.getActiveUniform(t,n),h=e.getUniformLocation(t,l.name);wm(l,h,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let l=t[a],h=i[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Il(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Am=37297,Rm=0;function Cm(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let l=a;l<n;l++){let h=l+1;r.push(`${h===t?">":" "} ${h}: ${i[l]}`)}return r.join(`
`)}var Dl=new nt;function Pm(e){_t._getMatrix(Dl,_t.workingColorSpace,e);let t=`mat3( ${Dl.elements.map(i=>i.toFixed(4))} )`;switch(_t.getTransfer(e)){case Rn:return[t,"LinearTransferOETF"];case At:return[t,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ll(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let l=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Cm(e.getShaderSource(t),l)}else return a}function Im(e,t){let i=Pm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Dm={[ql]:"Linear",[Kl]:"Reinhard",[Zl]:"Cineon",[_o]:"ACESFilmic",[$l]:"AgX",[Ql]:"Neutral",[Jl]:"Custom"};function Lm(e,t){let i=Dm[t];return i===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var mn=new F;function Nm(){_t.getLuminanceCoefficients(mn);let e=mn.x.toFixed(4),t=mn.y.toFixed(4),i=mn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function Om(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Fm(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),l=n.name,h=1;n.type===e.FLOAT_MAT2&&(h=2),n.type===e.FLOAT_MAT3&&(h=3),n.type===e.FLOAT_MAT4&&(h=4),i[l]={type:n.type,location:e.getAttribLocation(t,l),locationSize:h}}return i}function Pa(e){return e!==""}function Nl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(e){return e.replace(Bm,km)}var zm=new Map;function km(e,t){let i=ht[t];if(i===void 0){let r=zm.get(t);if(r!==void 0)i=ht[r],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mo(i)}var Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(e){return e.replace(Hm,Gm)}function Gm(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Fl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Vm={[Ia]:"SHADOWMAP_TYPE_PCF",[Ca]:"SHADOWMAP_TYPE_VSM"};function Wm(e){return Vm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xm={[Pr]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE",[Nn]:"ENVMAP_TYPE_CUBE_UV"};function jm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Xm[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ym={[ca]:"ENVMAP_MODE_REFRACTION"};function qm(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Ym[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Km={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[Ec]:"ENVMAP_BLENDING_ADD"};function Zm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Km[e.combine]||"ENVMAP_BLENDING_NONE"}function Jm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function $m(e,t,i,r){let a=e.getContext(),n=i.defines,l=i.vertexShader,h=i.fragmentShader,c=Wm(i),u=jm(i),m=qm(i),_=Zm(i),d=Jm(i),v=Um(i),E=Om(n),b=a.createProgram(),M,p,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Pa).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(M=[Fl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[Fl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ht.tonemapping_pars_fragment:"",i.toneMapping!==ji?Lm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Im("linearToOutputTexel",i.outputColorSpace),Nm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pa).join(`
`)),l=mo(l),l=Nl(l,i),l=Ul(l,i),h=mo(h),h=Nl(h,i),h=Ul(h,i),l=Ol(l),h=Ol(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",i.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let B=R+M+l,s=R+p+h,T=Il(a,a.VERTEX_SHADER,B),A=Il(a,a.FRAGMENT_SHADER,s);a.attachShader(b,T),a.attachShader(b,A),i.index0AttributeName!==void 0?a.bindAttribLocation(b,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function w(L){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(b)||"",J=a.getShaderInfoLog(T)||"",N=a.getShaderInfoLog(A)||"",G=O.trim(),ie=J.trim(),j=N.trim(),_e=!0,K=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(_e=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,b,T,A);else{let $=Ll(a,T,"vertex"),ae=Ll(a,A,"fragment");vt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+$+`
`+ae)}else G!==""?Ke("WebGLProgram: Program Info Log:",G):(ie===""||j==="")&&(K=!1);K&&(L.diagnostics={runnable:_e,programLog:G,vertexShader:{log:ie,prefix:M},fragmentShader:{log:j,prefix:p}})}a.deleteShader(T),a.deleteShader(A),o=new bn(a,b),f=Fm(a,b)}let o;this.getUniforms=function(){return o===void 0&&w(this),o};let f;this.getAttributes=function(){return f===void 0&&w(this),f};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=a.getProgramParameter(b,Am)),X},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}var Qm=0,eg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tg(e),t.set(e,i)),i}},tg=class{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}};function ig(e){return e===Ir||e===Tn||e===wn}function rg(e,t,i,r,a,n){let l=new Ao,h=new eg,c=new Set,u=[],m=new Map,_=r.logarithmicDepthBuffer,d=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(o){return c.add(o),o===0?"uv":`uv${o}`}function b(o,f,X,L,O,J){let N=L.fog,G=O.geometry,ie=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?L.environment:null,j=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,_e=t.get(o.envMap||ie,j),K=_e&&_e.mapping===Nn?_e.image.height:null,$=v[o.type];o.precision!==null&&(d=r.getMaxPrecision(o.precision),d!==o.precision&&Ke("WebGLProgram.getParameters:",o.precision,"not supported, using",d,"instead."));let ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=ae!==void 0?ae.length:0,Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let ct,Qe,Z,le;if($){let W=Gi[$];ct=W.vertexShader,Qe=W.fragmentShader}else{ct=o.vertexShader,Qe=o.fragmentShader;let W=h.getVertexShaderStage(o),H=h.getFragmentShaderStage(o);h.update(o,W,H),Z=W.id,le=H.id}let pe=e.getRenderTarget(),Be=e.state.buffers.depth.getReversed(),We=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,Mt=!!o.map,xt=!!o.matcap,Ye=!!_e,wt=!!o.aoMap,Qt=!!o.lightMap,ci=!!o.bumpMap&&o.wireframe===!1,St=!!o.normalMap,ii=!!o.displacementMap,Bt=!!o.emissiveMap,Ot=!!o.metalnessMap,I=!!o.roughnessMap,Gt=o.anisotropy>0,Et=o.clearcoat>0,Dt=o.dispersion>0,y=o.retroreflectivity>0,x=o.iridescence>0,P=o.sheen>0,Y=o.transmission>0,te=Gt&&!!o.anisotropyMap,me=Et&&!!o.clearcoatMap,Se=Et&&!!o.clearcoatNormalMap,U=Et&&!!o.clearcoatRoughnessMap,ue=x&&!!o.iridescenceMap,ve=x&&!!o.iridescenceThicknessMap,Ie=P&&!!o.sheenColorMap,oe=P&&!!o.sheenRoughnessMap,Oe=!!o.specularMap,ke=!!o.specularColorMap,qe=!!o.specularIntensityMap,yt=Y&&!!o.transmissionMap,D=Y&&!!o.thicknessMap,Q=!!o.gradientMap,ne=!!o.alphaMap,de=o.alphaTest>0,De=!!o.alphaHash,se=!!o.extensions,Ee=ji;o.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let g={shaderID:$,shaderType:o.type,shaderName:o.name,vertexShader:ct,fragmentShader:Qe,defines:o.defines,customVertexShaderID:Z,customFragmentShaderID:le,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:d,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:We,instancingColor:We&&O.instanceColor!==null,instancingMorph:We&&O.morphTexture!==null,outputColorSpace:pe===null?e.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:Mt,matcap:xt,envMap:Ye,envMapMode:Ye&&_e.mapping,envMapCubeUVHeight:K,aoMap:wt,lightMap:Qt,bumpMap:ci,normalMap:St,displacementMap:ii,emissiveMap:Bt,normalMapObjectSpace:St&&o.normalMapType===Tc,normalMapTangentSpace:St&&o.normalMapType===lo,packedNormalMap:St&&o.normalMapType===lo&&ig(o.normalMap.format),metalnessMap:Ot,roughnessMap:I,anisotropy:Gt,anisotropyMap:te,clearcoat:Et,clearcoatMap:me,clearcoatNormalMap:Se,clearcoatRoughnessMap:U,dispersion:Dt,retroreflection:y,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:ve,sheen:P,sheenColorMap:Ie,sheenRoughnessMap:oe,specularMap:Oe,specularColorMap:ke,specularIntensityMap:qe,transmission:Y,transmissionMap:yt,thicknessMap:D,gradientMap:Q,opaque:o.transparent===!1&&o.blending===Da&&o.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:De,combine:o.combine,mapUv:Mt&&E(o.map.channel),aoMapUv:wt&&E(o.aoMap.channel),lightMapUv:Qt&&E(o.lightMap.channel),bumpMapUv:ci&&E(o.bumpMap.channel),normalMapUv:St&&E(o.normalMap.channel),displacementMapUv:ii&&E(o.displacementMap.channel),emissiveMapUv:Bt&&E(o.emissiveMap.channel),metalnessMapUv:Ot&&E(o.metalnessMap.channel),roughnessMapUv:I&&E(o.roughnessMap.channel),anisotropyMapUv:te&&E(o.anisotropyMap.channel),clearcoatMapUv:me&&E(o.clearcoatMap.channel),clearcoatNormalMapUv:Se&&E(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&E(o.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&E(o.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(o.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(o.sheenColorMap.channel),sheenRoughnessMapUv:oe&&E(o.sheenRoughnessMap.channel),specularMapUv:Oe&&E(o.specularMap.channel),specularColorMapUv:ke&&E(o.specularColorMap.channel),specularIntensityMapUv:qe&&E(o.specularIntensityMap.channel),transmissionMapUv:yt&&E(o.transmissionMap.channel),thicknessMapUv:D&&E(o.thicknessMap.channel),alphaMapUv:ne&&E(o.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(St||Gt),vertexNormals:!!G.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Mt||ne),fog:!!N,useFog:o.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||G.attributes.normal===void 0&&St===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Be,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Fe,numSunLights:f.sun.length,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numSunLightShadows:f.sunShadowMap.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&X.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Mt&&o.map.isVideoTexture===!0&&_t.getTransfer(o.map.colorSpace)===At,decodeVideoTextureEmissive:Bt&&o.emissiveMap.isVideoTexture===!0&&_t.getTransfer(o.emissiveMap.colorSpace)===At,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===It,flipSided:o.side===vi,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:se&&o.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&o.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return g.vertexUv1s=c.has(1),g.vertexUv2s=c.has(2),g.vertexUv3s=c.has(3),c.clear(),g}function M(o){let f=[];if(o.shaderID?f.push(o.shaderID):(f.push(o.customVertexShaderID),f.push(o.customFragmentShaderID)),o.defines!==void 0)for(let X in o.defines)f.push(X),f.push(o.defines[X]);return o.isRawShaderMaterial===!1&&(p(f,o),R(f,o),f.push(e.outputColorSpace)),f.push(o.customProgramCacheKey),f.join()}function p(o,f){o.push(f.precision),o.push(f.outputColorSpace),o.push(f.envMapMode),o.push(f.envMapCubeUVHeight),o.push(f.mapUv),o.push(f.alphaMapUv),o.push(f.lightMapUv),o.push(f.aoMapUv),o.push(f.bumpMapUv),o.push(f.normalMapUv),o.push(f.displacementMapUv),o.push(f.emissiveMapUv),o.push(f.metalnessMapUv),o.push(f.roughnessMapUv),o.push(f.anisotropyMapUv),o.push(f.clearcoatMapUv),o.push(f.clearcoatNormalMapUv),o.push(f.clearcoatRoughnessMapUv),o.push(f.iridescenceMapUv),o.push(f.iridescenceThicknessMapUv),o.push(f.sheenColorMapUv),o.push(f.sheenRoughnessMapUv),o.push(f.specularMapUv),o.push(f.specularColorMapUv),o.push(f.specularIntensityMapUv),o.push(f.transmissionMapUv),o.push(f.thicknessMapUv),o.push(f.combine),o.push(f.fogExp2),o.push(f.sizeAttenuation),o.push(f.morphTargetsCount),o.push(f.morphAttributeCount),o.push(f.numSunLights),o.push(f.numDirLights),o.push(f.numPointLights),o.push(f.numSpotLights),o.push(f.numSpotLightMaps),o.push(f.numHemiLights),o.push(f.numRectAreaLights),o.push(f.numSunLightShadows),o.push(f.numDirLightShadows),o.push(f.numPointLightShadows),o.push(f.numSpotLightShadows),o.push(f.numSpotLightShadowsWithMaps),o.push(f.numLightProbes),o.push(f.shadowMapType),o.push(f.toneMapping),o.push(f.numClippingPlanes),o.push(f.numClipIntersection),o.push(f.depthPacking)}function R(o,f){l.disableAll(),f.instancing&&l.enable(0),f.instancingColor&&l.enable(1),f.instancingMorph&&l.enable(2),f.matcap&&l.enable(3),f.envMap&&l.enable(4),f.normalMapObjectSpace&&l.enable(5),f.normalMapTangentSpace&&l.enable(6),f.clearcoat&&l.enable(7),f.iridescence&&l.enable(8),f.alphaTest&&l.enable(9),f.vertexColors&&l.enable(10),f.vertexAlphas&&l.enable(11),f.vertexUv1s&&l.enable(12),f.vertexUv2s&&l.enable(13),f.vertexUv3s&&l.enable(14),f.vertexTangents&&l.enable(15),f.anisotropy&&l.enable(16),f.alphaHash&&l.enable(17),f.batching&&l.enable(18),f.dispersion&&l.enable(19),f.retroreflection&&l.enable(24),f.batchingColor&&l.enable(20),f.gradientMap&&l.enable(21),f.packedNormalMap&&l.enable(22),f.vertexNormals&&l.enable(23),o.push(l.mask),l.disableAll(),f.fog&&l.enable(0),f.useFog&&l.enable(1),f.flatShading&&l.enable(2),f.logarithmicDepthBuffer&&l.enable(3),f.reversedDepthBuffer&&l.enable(4),f.skinning&&l.enable(5),f.morphTargets&&l.enable(6),f.morphNormals&&l.enable(7),f.morphColors&&l.enable(8),f.premultipliedAlpha&&l.enable(9),f.shadowMapEnabled&&l.enable(10),f.doubleSided&&l.enable(11),f.flipSided&&l.enable(12),f.useDepthPacking&&l.enable(13),f.dithering&&l.enable(14),f.transmission&&l.enable(15),f.sheen&&l.enable(16),f.opaque&&l.enable(17),f.pointsUvs&&l.enable(18),f.decodeVideoTexture&&l.enable(19),f.decodeVideoTextureEmissive&&l.enable(20),f.alphaToCoverage&&l.enable(21),f.numLightProbeGrids>0&&l.enable(22),f.hasPositionAttribute&&l.enable(23),o.push(l.mask)}function B(o){let f=v[o.type],X;if(f){let L=Gi[f];X=gu.clone(L.uniforms)}else X=o.uniforms;return X}function s(o,f){let X=m.get(f);return X!==void 0?++X.usedTimes:(X=new $m(e,f,o,a),u.push(X),m.set(f,X)),X}function T(o){if(--o.usedTimes===0){let f=u.indexOf(o);u[f]=u[u.length-1],u.pop(),m.delete(o.cacheKey),o.destroy()}}function A(o){h.remove(o)}function w(){h.dispose()}return{getParameters:b,getProgramCacheKey:M,getUniforms:B,acquireProgram:s,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:w}}function ag(){let e=new WeakMap;function t(l){return e.has(l)}function i(l){let h=e.get(l);return h===void 0&&(h={},e.set(l,h)),h}function r(l){e.delete(l)}function a(l,h,c){e.get(l)[h]=c}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function ng(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Bl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function zl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function l(d){let v=0;return d.isInstancedMesh&&(v+=2),d.isSkinnedMesh&&(v+=1),v}function h(d,v,E,b,M,p){let R=e[t];return R===void 0?(R={id:d.id,object:d,geometry:v,material:E,materialVariant:l(d),groupOrder:b,renderOrder:d.renderOrder,z:M,group:p},e[t]=R):(R.id=d.id,R.object=d,R.geometry=v,R.material=E,R.materialVariant=l(d),R.groupOrder=b,R.renderOrder=d.renderOrder,R.z=M,R.group=p),t++,R}function c(d,v,E,b,M,p,R){R.reversedDepth===!0&&(M=-M);let B=h(d,v,E,b,M,p);E.transmission>0?r.push(B):E.transparent===!0?a.push(B):i.push(B)}function u(d,v,E,b,M,p){let R=h(d,v,E,b,M,p);E.transmission>0?r.unshift(R):E.transparent===!0?a.unshift(R):i.unshift(R)}function m(d,v){i.length>1&&i.sort(d||ng),r.length>1&&r.sort(v||Bl),a.length>1&&a.sort(v||Bl)}function _(){for(let d=t,v=e.length;d<v;d++){let E=e[d];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:c,unshift:u,finish:_,sort:m}}function sg(){let e=new WeakMap;function t(r,a){let n=e.get(r),l;return n===void 0?(l=new zl,e.set(r,[l])):a>=n.length?(l=new zl,n.push(l)):l=n[a],l}function i(){e=new WeakMap}return{get:t,dispose:i}}function og(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new tt};break;case"SpotLight":i={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":i={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=i,i}}}function lg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var hg=0;function cg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ug(e){let t=new og,i=lg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let a=new F,n=new Ut,l=new Ut;function h(u){let m=0,_=0,d=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let v=0,E=0,b=0,M=0,p=0,R=0,B=0,s=0,T=0,A=0,w=0,o=0,f=0,X=0;u.sort(cg);for(let O=0,J=u.length;O<J;O++){let N=u[O],G=N.color,ie=N.intensity,j=N.distance,_e=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ir?_e=N.shadow.map.texture:_e=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)m+=G.r*ie,_+=G.g*ie,d+=G.b*ie;else if(N.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(N.sh.coefficients[K],ie);X++}else if(N.isSunLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,ae=i.get(N);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[E]=ae,r.sunShadowMap[E]=_e;let it=$.getViewportCount();for(let Fe=0;Fe<it;Fe++)r.sunShadowMatrix[b+Fe]=$.getMatrix(Fe),r.sunShadowCascade[b+Fe]=$._cascadeData[Fe];b+=it,E++}r.sun[v]=K,v++}else if(N.isDirectionalLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,ae=i.get(N);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,r.directionalShadow[M]=ae,r.directionalShadowMap[M]=_e,r.directionalShadowMatrix[M]=N.shadow.matrix,T++}r.directional[M]=K,M++}else if(N.isSpotLight){let K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(G).multiplyScalar(ie),K.distance=j,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,r.spot[R]=K;let $=N.shadow;if(N.map&&(r.spotLightMap[o]=N.map,o++,$.updateMatrices(N),N.castShadow&&f++),r.spotLightMatrix[R]=$.matrix,N.castShadow){let ae=i.get(N);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,r.spotShadow[R]=ae,r.spotShadowMap[R]=_e,w++}R++}else if(N.isRectAreaLight){let K=t.get(N);K.color.copy(G).multiplyScalar(ie),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),r.rectArea[B]=K,B++}else if(N.isPointLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let $=N.shadow,ae=i.get(N);ae.shadowIntensity=$.intensity,ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,ae.shadowCameraNear=$.camera.near,ae.shadowCameraFar=$.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=_e,r.pointShadowMatrix[p]=N.shadow.matrix,A++}r.point[p]=K,p++}else if(N.isHemisphereLight){let K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(ie),K.groundColor.copy(N.groundColor).multiplyScalar(ie),r.hemi[s]=K,s++}}B>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=d;let L=r.hash;(L.sunLength!==v||L.directionalLength!==M||L.pointLength!==p||L.spotLength!==R||L.rectAreaLength!==B||L.hemiLength!==s||L.numSunShadows!==E||L.numDirectionalShadows!==T||L.numPointShadows!==A||L.numSpotShadows!==w||L.numSpotMaps!==o||L.numLightProbes!==X)&&(r.sun.length=v,r.directional.length=M,r.spot.length=R,r.rectArea.length=B,r.point.length=p,r.hemi.length=s,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+o-f,r.spotLightMap.length=o,r.numSpotLightShadowsWithMaps=f,r.numLightProbes=X,L.sunLength=v,L.directionalLength=M,L.pointLength=p,L.spotLength=R,L.rectAreaLength=B,L.hemiLength=s,L.numSunShadows=E,L.numDirectionalShadows=T,L.numPointShadows=A,L.numSpotShadows=w,L.numSpotMaps=o,L.numLightProbes=X,r.version=hg++)}function c(u,m){let _=0,d=0,v=0,E=0,b=0,M=0,p=m.matrixWorldInverse;for(let R=0,B=u.length;R<B;R++){let s=u[R];if(s.isSunLight){let T=r.sun[_];T.direction.setFromMatrixPosition(s.matrixWorld),T.direction.transformDirection(p),_++}else if(s.isDirectionalLight){let T=r.directional[d];T.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),d++}else if(s.isSpotLight){let T=r.spot[E];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(s.matrixWorld),a.setFromMatrixPosition(s.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),E++}else if(s.isRectAreaLight){let T=r.rectArea[b];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(p),l.identity(),n.copy(s.matrixWorld),n.premultiply(p),l.extractRotation(n),T.halfWidth.set(s.width*.5,0,0),T.halfHeight.set(0,s.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),b++}else if(s.isPointLight){let T=r.point[v];T.position.setFromMatrixPosition(s.matrixWorld),T.position.applyMatrix4(p),v++}else if(s.isHemisphereLight){let T=r.hemi[M];T.direction.setFromMatrixPosition(s.matrixWorld),T.direction.transformDirection(p),M++}}}return{setup:h,setupView:c,state:r}}function kl(e){let t=new ug(e),i=[],r=[],a=[];function n(d){_.camera=d,i.length=0,r.length=0,a.length=0}function l(d){i.push(d)}function h(d){r.push(d)}function c(d){a.push(d)}function u(){t.setup(i)}function m(d){t.setupView(i,d)}let _={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:_,setupLights:u,setupLightsView:m,pushLight:l,pushShadow:h,pushLightProbeGrid:c}}function dg(e){let t=new WeakMap;function i(a,n=0){let l=t.get(a),h;return l===void 0?(h=new kl(e),t.set(a,[h])):n>=l.length?(h=new kl(e),l.push(h)):h=l[n],h}function r(){t=new WeakMap}return{get:i,dispose:r}}var pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`,mg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],gg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Hl=new Ut,Ra=new F,xs=new F;function _g(e,t,i){let r=new Ro,a=new Ge,n=new Ge,l=new Ht,h=new Su,c=new Eu,u={},m=i.maxTextureSize,_={[Cr]:vi,[vi]:Cr,[It]:It},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:pg,fragmentShader:fg}),v=d.clone();v.defines.HORIZONTAL_PASS=1;let E=new Mi;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new jt(E,d),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let p=this.type;this.render=function(A,w,o){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||A.length===0)return;this.type===ic&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ia);let f=e.getRenderTarget(),X=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),O=e.state;O.setBlending(sr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=p!==this.type;J&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=A.length;N<G;N++){let ie=A[N],j=ie.shadow;if(j===void 0){Ke("WebGLShadowMap:",ie,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);let _e=j.getFrameExtents();a.multiply(_e),n.copy(j.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(n.x=Math.floor(m/_e.x),a.x=n.x*_e.x,j.mapSize.x=n.x),a.y>m&&(n.y=Math.floor(m/_e.y),a.y=n.y*_e.y,j.mapSize.y=n.y));let K=e.state.buffers.depth.getReversed();if(j.camera._reversedDepth=K,j.map===null||J===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ca){if(ie.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Bi(a.x,a.y,{format:Ir,type:qi,minFilter:oi,magFilter:oi,generateMipmaps:!1}),j.map.texture.name=ie.name+".shadowMap",j.map.depthTexture=new Fa(a.x,a.y,Wi),j.map.depthTexture.name=ie.name+".shadowMapDepth",j.map.depthTexture.format=lr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=si,j.map.depthTexture.magFilter=si}else ie.isPointLight?(j.map=new Nh(a.x),j.map.depthTexture=new pu(a.x,Yi)):(j.map=new Bi(a.x,a.y),j.map.depthTexture=new Fa(a.x,a.y,Yi)),j.map.depthTexture.name=ie.name+".shadowMap",j.map.depthTexture.format=lr,this.type===Ia?(j.map.depthTexture.compareFunction=K?To:bo,j.map.depthTexture.minFilter=oi,j.map.depthTexture.magFilter=oi):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=si,j.map.depthTexture.magFilter=si);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==a.x||j.map.height!==a.y)&&j.map.setSize(a.x,a.y);let $=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ie.isPointLight!==!0&&j.updateMatrices(ie,o);for(let ae=0;ae<$;ae++){let it=j.getCamera(ae);if(ie.isPointLight){let Fe=j.camera,ct=j.matrix,Qe=ie.distance||Fe.far;Qe!==Fe.far&&(Fe.far=Qe,Fe.updateProjectionMatrix()),Ra.setFromMatrixPosition(ie.matrixWorld),Fe.position.copy(Ra),xs.copy(Fe.position),xs.add(mg[ae]),Fe.up.copy(gg[ae]),Fe.lookAt(xs),Fe.updateMatrixWorld(),ct.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Hl.multiplyMatrices(Fe.projectionMatrix,Fe.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Hl,Fe.coordinateSystem,Fe.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)e.setRenderTarget(j.map,ae),e.clear();else{ae===0&&(e.setRenderTarget(j.map),e.clear());let Fe=j.getViewport(ae);l.set(n.x*Fe.x,n.y*Fe.y,n.x*Fe.z,n.y*Fe.w),O.viewport(l)}r=j.getFrustum(ae),s(w,o,it,ie,this.type)}j.isPointLightShadow!==!0&&this.type===Ca&&R(j,o),j.needsUpdate=!1}p=this.type,M.needsUpdate=!1,e.setRenderTarget(f,X,L)};function R(A,w){let o=t.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null?A.mapPass=new Bi(a.x,a.y,{format:Ir,type:qi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,o,d,b,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value.set(A.map.width,A.map.height),v.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,o,v,b,null)}function B(A,w,o,f){let X=null,L=o.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)X=L;else if(X=o.isPointLight===!0?c:h,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=X.uuid,J=w.uuid,N=u[O];N===void 0&&(N={},u[O]=N);let G=N[J];G===void 0&&(G=X.clone(),N[J]=G,w.addEventListener("dispose",T)),X=G}if(X.visible=w.visible,X.wireframe=w.wireframe,f===Ca?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:_[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,X.map=w.map,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,o.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let O=e.properties.get(X);O.light=o}return X}function s(A,w,o,f,X){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&X===Ca)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,A.matrixWorld);let O=t.update(A),J=A.material;if(Array.isArray(J)){let N=O.groups;for(let G=0,ie=N.length;G<ie;G++){let j=N[G],_e=J[j.materialIndex];if(_e&&_e.visible){let K=B(A,_e,f,X);A.onBeforeShadow(e,A,w,o,O,K,j),e.renderBufferDirect(o,null,O,K,A,j),A.onAfterShadow(e,A,w,o,O,K,j)}}}else if(J.visible){let N=B(A,J,f,X);A.onBeforeShadow(e,A,w,o,O,N,null),e.renderBufferDirect(o,null,O,N,A,null),A.onAfterShadow(e,A,w,o,O,N,null)}}let L=A.children;for(let O=0,J=L.length;O<J;O++)s(L[O],w,o,f,X)}function T(A){A.target.removeEventListener("dispose",T);for(let w in u){let o=u[w],f=A.target.uuid;f in o&&(o[f].dispose(),delete o[f])}}}function vg(e,t){function i(){let D=!1,Q=new Ht,ne=null,de=new Ht(0,0,0,0);return{setMask:function(De){ne!==De&&!D&&(e.colorMask(De,De,De,De),ne=De)},setLocked:function(De){D=De},setClear:function(De,se,Ee,g,W){W===!0&&(De*=g,se*=g,Ee*=g),Q.set(De,se,Ee,g),de.equals(Q)===!1&&(e.clearColor(De,se,Ee,g),de.copy(Q))},reset:function(){D=!1,ne=null,de.set(-1,0,0,0)}}}function r(){let D=!1,Q=!1,ne=null,de=null,De=null;return{setReversed:function(se){if(Q!==se){let Ee=t.get("EXT_clip_control");se?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Q=se;let g=De;De=null,this.setClear(g)}},getReversed:function(){return Q},setTest:function(se){se?pe(e.DEPTH_TEST):Be(e.DEPTH_TEST)},setMask:function(se){ne!==se&&!D&&(e.depthMask(se),ne=se)},setFunc:function(se){if(Q&&(se=Oc[se]),de!==se){switch(se){case ys:e.depthFunc(e.NEVER);break;case bs:e.depthFunc(e.ALWAYS);break;case Ts:e.depthFunc(e.LESS);break;case La:e.depthFunc(e.LEQUAL);break;case ws:e.depthFunc(e.EQUAL);break;case As:e.depthFunc(e.GEQUAL);break;case Rs:e.depthFunc(e.GREATER);break;case Cs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}de=se}},setLocked:function(se){D=se},setClear:function(se){De!==se&&(De=se,Q&&(se=1-se),e.clearDepth(se))},reset:function(){D=!1,ne=null,de=null,De=null,Q=!1}}}function a(){let D=!1,Q=null,ne=null,de=null,De=null,se=null,Ee=null,g=null,W=null;return{setTest:function(H){D||(H?pe(e.STENCIL_TEST):Be(e.STENCIL_TEST))},setMask:function(H){Q!==H&&!D&&(e.stencilMask(H),Q=H)},setFunc:function(H,ee,re){(ne!==H||de!==ee||De!==re)&&(e.stencilFunc(H,ee,re),ne=H,de=ee,De=re)},setOp:function(H,ee,re){(se!==H||Ee!==ee||g!==re)&&(e.stencilOp(H,ee,re),se=H,Ee=ee,g=re)},setLocked:function(H){D=H},setClear:function(H){W!==H&&(e.clearStencil(H),W=H)},reset:function(){D=!1,Q=null,ne=null,de=null,De=null,se=null,Ee=null,g=null,W=null}}}let n=new i,l=new r,h=new a,c=new WeakMap,u=new WeakMap,m={},_={},d={},v=new WeakMap,E=[],b=null,M=!1,p=null,R=null,B=null,s=null,T=null,A=null,w=null,o=new tt(0,0,0),f=0,X=!1,L=null,O=null,J=null,N=null,G=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,_e=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=_e>=1):K.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=_e>=2);let $=null,ae={},it=e.getParameter(e.SCISSOR_BOX),Fe=e.getParameter(e.VIEWPORT),ct=new Ht().fromArray(it),Qe=new Ht().fromArray(Fe);function Z(D,Q,ne,de){let De=new Uint8Array(4),se=e.createTexture();e.bindTexture(D,se),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ee=0;Ee<ne;Ee++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(Q,0,e.RGBA,1,1,de,0,e.RGBA,e.UNSIGNED_BYTE,De):e.texImage2D(Q+Ee,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,De);return se}let le={};le[e.TEXTURE_2D]=Z(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=Z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=Z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=Z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),l.setClear(1),h.setClear(0),pe(e.DEPTH_TEST),l.setFunc(La),ci(!1),St(Uo),pe(e.CULL_FACE),wt(sr);function pe(D){m[D]!==!0&&(e.enable(D),m[D]=!0)}function Be(D){m[D]!==!1&&(e.disable(D),m[D]=!1)}function We(D,Q){return d[D]!==Q?(e.bindFramebuffer(D,Q),d[D]=Q,D===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=Q),D===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=Q),!0):!1}function Te(D,Q){let ne=E,de=!1;if(D){ne=v.get(Q),ne===void 0&&(ne=[],v.set(Q,ne));let De=D.textures;if(ne.length!==De.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let se=0,Ee=De.length;se<Ee;se++)ne[se]=e.COLOR_ATTACHMENT0+se;ne.length=De.length,de=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,de=!0);de&&e.drawBuffers(ne)}function Mt(D){return b!==D?(e.useProgram(D),b=D,!0):!1}let xt={[Jr]:e.FUNC_ADD,[ac]:e.FUNC_SUBTRACT,[nc]:e.FUNC_REVERSE_SUBTRACT};xt[sc]=e.MIN,xt[oc]=e.MAX;let Ye={[lc]:e.ZERO,[hc]:e.ONE,[cc]:e.SRC_COLOR,[Xl]:e.SRC_ALPHA,[gc]:e.SRC_ALPHA_SATURATE,[fc]:e.DST_COLOR,[dc]:e.DST_ALPHA,[uc]:e.ONE_MINUS_SRC_COLOR,[jl]:e.ONE_MINUS_SRC_ALPHA,[mc]:e.ONE_MINUS_DST_COLOR,[pc]:e.ONE_MINUS_DST_ALPHA,[_c]:e.CONSTANT_COLOR,[vc]:e.ONE_MINUS_CONSTANT_COLOR,[Mc]:e.CONSTANT_ALPHA,[xc]:e.ONE_MINUS_CONSTANT_ALPHA};function wt(D,Q,ne,de,De,se,Ee,g,W,H){if(D===sr){M===!0&&(Be(e.BLEND),M=!1);return}if(M===!1&&(pe(e.BLEND),M=!0),D!==rc){if(D!==p||H!==X){if((R!==Jr||T!==Jr)&&(e.blendEquation(e.FUNC_ADD),R=Jr,T=Jr),H)switch(D){case Da:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Es:e.blendFunc(e.ONE,e.ONE);break;case Oo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:vt("WebGLState: Invalid blending: ",D);break}else switch(D){case Da:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Es:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Oo:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fo:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",D);break}B=null,s=null,A=null,w=null,o.set(0,0,0),f=0,p=D,X=H}return}De=De||Q,se=se||ne,Ee=Ee||de,(Q!==R||De!==T)&&(e.blendEquationSeparate(xt[Q],xt[De]),R=Q,T=De),(ne!==B||de!==s||se!==A||Ee!==w)&&(e.blendFuncSeparate(Ye[ne],Ye[de],Ye[se],Ye[Ee]),B=ne,s=de,A=se,w=Ee),(g.equals(o)===!1||W!==f)&&(e.blendColor(g.r,g.g,g.b,W),o.copy(g),f=W),p=D,X=!1}function Qt(D,Q){D.side===It?Be(e.CULL_FACE):pe(e.CULL_FACE);let ne=D.side===vi;Q&&(ne=!ne),ci(ne),D.blending===Da&&D.transparent===!1?wt(sr):wt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),n.setMask(D.colorWrite);let de=D.stencilWrite;h.setTest(de),de&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):Be(e.SAMPLE_ALPHA_TO_COVERAGE)}function ci(D){L!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),L=D)}function St(D){D!==ec?(pe(e.CULL_FACE),D!==O&&(D===Uo?e.cullFace(e.BACK):D===tc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Be(e.CULL_FACE),O=D}function ii(D){D!==J&&(j&&e.lineWidth(D),J=D)}function Bt(D,Q,ne){D?(pe(e.POLYGON_OFFSET_FILL),(N!==Q||G!==ne)&&(N=Q,G=ne,l.getReversed()&&(Q=-Q),e.polygonOffset(Q,ne))):Be(e.POLYGON_OFFSET_FILL)}function Ot(D){D?pe(e.SCISSOR_TEST):Be(e.SCISSOR_TEST)}function I(D){D===void 0&&(D=e.TEXTURE0+ie-1),$!==D&&(e.activeTexture(D),$=D)}function Gt(D,Q,ne){ne===void 0&&($===null?ne=e.TEXTURE0+ie-1:ne=$);let de=ae[ne];de===void 0&&(de={type:void 0,texture:void 0},ae[ne]=de),(de.type!==D||de.texture!==Q)&&($!==ne&&(e.activeTexture(ne),$=ne),e.bindTexture(D,Q||le[D]),de.type=D,de.texture=Q)}function Et(){let D=ae[$];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Dt(){try{e.compressedTexImage2D(...arguments)}catch(D){vt("WebGLState:",D)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(D){vt("WebGLState:",D)}}function x(){try{e.texSubImage2D(...arguments)}catch(D){vt("WebGLState:",D)}}function P(){try{e.texSubImage3D(...arguments)}catch(D){vt("WebGLState:",D)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(D){vt("WebGLState:",D)}}function te(){try{e.compressedTexSubImage3D(...arguments)}catch(D){vt("WebGLState:",D)}}function me(){try{e.texStorage2D(...arguments)}catch(D){vt("WebGLState:",D)}}function Se(){try{e.texStorage3D(...arguments)}catch(D){vt("WebGLState:",D)}}function U(){try{e.texImage2D(...arguments)}catch(D){vt("WebGLState:",D)}}function ue(){try{e.texImage3D(...arguments)}catch(D){vt("WebGLState:",D)}}function ve(D){return _[D]!==void 0?_[D]:e.getParameter(D)}function Ie(D,Q){_[D]!==Q&&(e.pixelStorei(D,Q),_[D]=Q)}function oe(D){ct.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function Oe(D){Qe.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function ke(D,Q){let ne=u.get(Q);ne===void 0&&(ne=new WeakMap,u.set(Q,ne));let de=ne.get(D);de===void 0&&(de=e.getUniformBlockIndex(Q,D.name),ne.set(D,de))}function qe(D,Q){let ne=u.get(Q).get(D);c.get(Q)!==ne&&(e.uniformBlockBinding(Q,ne,D.__bindingPointIndex),c.set(Q,ne))}function yt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),l.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),m={},_={},$=null,ae={},d={},v=new WeakMap,E=[],b=null,M=!1,p=null,R=null,B=null,s=null,T=null,A=null,w=null,o=new tt(0,0,0),f=0,X=!1,L=null,O=null,J=null,N=null,G=null,ct.set(0,0,e.canvas.width,e.canvas.height),Qe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),l.reset(),h.reset()}return{buffers:{color:n,depth:l,stencil:h},enable:pe,disable:Be,bindFramebuffer:We,drawBuffers:Te,useProgram:Mt,setBlending:wt,setMaterial:Qt,setFlipSided:ci,setCullFace:St,setLineWidth:ii,setPolygonOffset:Bt,setScissorTest:Ot,activeTexture:I,bindTexture:Gt,unbindTexture:Et,compressedTexImage2D:Dt,compressedTexImage3D:y,texImage2D:U,texImage3D:ue,pixelStorei:Ie,getParameter:ve,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:me,texStorage3D:Se,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:Y,compressedTexSubImage3D:te,scissor:oe,viewport:Oe,reset:yt}}function Mg(e,t,i,r,a,n,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,m=new WeakMap,_=new Set,d,v=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,x){return E?new OffscreenCanvas(y,x):Cn("canvas")}function M(y,x,P){let Y=1,te=Dt(y);if((te.width>P||te.height>P)&&(Y=P/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let me=Math.floor(Y*te.width),Se=Math.floor(Y*te.height);d===void 0&&(d=b(me,Se));let U=x?b(me,Se):d;return U.width=me,U.height=Se,U.getContext("2d").drawImage(y,0,0,me,Se),Ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+me+"x"+Se+")."),U}else return"data"in y&&Ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),y;return y}function p(y){return y.generateMipmaps}function R(y){e.generateMipmap(y)}function B(y){return y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?e.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function s(y,x,P,Y,te,me=!1){if(y!==null){if(e[y]!==void 0)return e[y];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Se;Y&&(Se=t.get("EXT_texture_norm16"),Se||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=x;if(x===e.RED&&(P===e.FLOAT&&(U=e.R32F),P===e.HALF_FLOAT&&(U=e.R16F),P===e.UNSIGNED_BYTE&&(U=e.R8),P===e.UNSIGNED_SHORT&&Se&&(U=Se.R16_EXT),P===e.SHORT&&Se&&(U=Se.R16_SNORM_EXT)),x===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.R8UI),P===e.UNSIGNED_SHORT&&(U=e.R16UI),P===e.UNSIGNED_INT&&(U=e.R32UI),P===e.BYTE&&(U=e.R8I),P===e.SHORT&&(U=e.R16I),P===e.INT&&(U=e.R32I)),x===e.RG&&(P===e.FLOAT&&(U=e.RG32F),P===e.HALF_FLOAT&&(U=e.RG16F),P===e.UNSIGNED_BYTE&&(U=e.RG8),P===e.UNSIGNED_SHORT&&Se&&(U=Se.RG16_EXT),P===e.SHORT&&Se&&(U=Se.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.RG8UI),P===e.UNSIGNED_SHORT&&(U=e.RG16UI),P===e.UNSIGNED_INT&&(U=e.RG32UI),P===e.BYTE&&(U=e.RG8I),P===e.SHORT&&(U=e.RG16I),P===e.INT&&(U=e.RG32I)),x===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.RGB8UI),P===e.UNSIGNED_SHORT&&(U=e.RGB16UI),P===e.UNSIGNED_INT&&(U=e.RGB32UI),P===e.BYTE&&(U=e.RGB8I),P===e.SHORT&&(U=e.RGB16I),P===e.INT&&(U=e.RGB32I)),x===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(U=e.RGBA16UI),P===e.UNSIGNED_INT&&(U=e.RGBA32UI),P===e.BYTE&&(U=e.RGBA8I),P===e.SHORT&&(U=e.RGBA16I),P===e.INT&&(U=e.RGBA32I)),x===e.RGB&&(P===e.UNSIGNED_SHORT&&Se&&(U=Se.RGB16_EXT),P===e.SHORT&&Se&&(U=Se.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(U=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(U=e.R11F_G11F_B10F)),x===e.RGBA){let ue=me?Rn:_t.getTransfer(te);P===e.FLOAT&&(U=e.RGBA32F),P===e.HALF_FLOAT&&(U=e.RGBA16F),P===e.UNSIGNED_BYTE&&(U=ue===At?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&Se&&(U=Se.RGBA16_EXT),P===e.SHORT&&Se&&(U=Se.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(U=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(U=e.RGB5_A1)}return(U===e.R16F||U===e.R32F||U===e.RG16F||U===e.RG32F||U===e.RGBA16F||U===e.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function T(y,x){let P;return y?x===null||x===Yi||x===Ua?P=e.DEPTH24_STENCIL8:x===Wi?P=e.DEPTH32F_STENCIL8:x===Na&&(P=e.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yi||x===Ua?P=e.DEPTH_COMPONENT24:x===Wi?P=e.DEPTH_COMPONENT32F:x===Na&&(P=e.DEPTH_COMPONENT16),P}function A(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==si&&y.minFilter!==oi?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function w(y){let x=y.target;x.removeEventListener("dispose",w),f(x),x.isVideoTexture&&m.delete(x),x.isHTMLTexture&&_.delete(x)}function o(y){let x=y.target;x.removeEventListener("dispose",o),L(x)}function f(y){let x=r.get(y);if(x.__webglInit===void 0)return;let P=y.source,Y=v.get(P);if(Y){let te=Y[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&X(y),Object.keys(Y).length===0&&v.delete(P)}r.remove(y)}function X(y){let x=r.get(y);e.deleteTexture(x.__webglTexture);let P=y.source,Y=v.get(P);delete Y[x.__cacheKey],l.memory.textures--}function L(y){let x=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let te=0;te<x.__webglFramebuffer[Y].length;te++)e.deleteFramebuffer(x.__webglFramebuffer[Y][te]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=y.textures;for(let Y=0,te=P.length;Y<te;Y++){let me=r.get(P[Y]);me.__webglTexture&&(e.deleteTexture(me.__webglTexture),l.memory.textures--),r.remove(P[Y])}r.remove(y)}let O=0;function J(){O=0}function N(){return O}function G(y){O=y}function ie(){let y=O;return y>=a.maxTextures&&Ke("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,y}function j(y){let x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function _e(y,x){let P=r.get(y);if(y.isVideoTexture&&Gt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&P.__version!==y.version){let Y=y.image;if(Y===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(P,y,x);return}}else y.isExternalTexture&&(P.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+x)}function K(y,x){let P=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){Be(P,y,x);return}else y.isExternalTexture&&(P.__webglTexture=y.sourceTexture?y.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+x)}function $(y,x){let P=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){Be(P,y,x);return}i.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+x)}function ae(y,x){let P=r.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&P.__version!==y.version){We(P,y,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+x)}let it={[Ps]:e.REPEAT,[nr]:e.CLAMP_TO_EDGE,[Is]:e.MIRRORED_REPEAT},Fe={[si]:e.NEAREST,[yc]:e.NEAREST_MIPMAP_NEAREST,[ka]:e.NEAREST_MIPMAP_LINEAR,[oi]:e.LINEAR,[Gn]:e.LINEAR_MIPMAP_NEAREST,[wr]:e.LINEAR_MIPMAP_LINEAR},ct={[Ac]:e.NEVER,[Dc]:e.ALWAYS,[Rc]:e.LESS,[bo]:e.LEQUAL,[Cc]:e.EQUAL,[To]:e.GEQUAL,[Pc]:e.GREATER,[Ic]:e.NOTEQUAL};function Qe(y,x){if(x.type===Wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===oi||x.magFilter===Gn||x.magFilter===ka||x.magFilter===wr||x.minFilter===oi||x.minFilter===Gn||x.minFilter===ka||x.minFilter===wr)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,it[x.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,it[x.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,it[x.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,Fe[x.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,Fe[x.minFilter]),x.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===si||x.minFilter!==ka&&x.minFilter!==wr||x.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function Z(y,x){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",w));let Y=x.source,te=v.get(Y);te===void 0&&(te={},v.set(Y,te));let me=j(x);if(me!==y.__cacheKey){te[me]===void 0&&(te[me]={texture:e.createTexture(),usedTimes:0},l.memory.textures++,P=!0),te[me].usedTimes++;let Se=te[y.__cacheKey];Se!==void 0&&(te[y.__cacheKey].usedTimes--,Se.usedTimes===0&&X(x)),y.__cacheKey=me,y.__webglTexture=te[me].texture}return P}function le(y,x,P){return Math.floor(Math.floor(y/P)/x)}function pe(y,x,P,Y){let te=y.updateRanges;if(te.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,P,Y,x.data);else{te.sort((ve,Ie)=>ve.start-Ie.start);let me=0;for(let ve=1;ve<te.length;ve++){let Ie=te[me],oe=te[ve],Oe=Ie.start+Ie.count,ke=le(oe.start,x.width,4),qe=le(Ie.start,x.width,4);oe.start<=Oe+1&&ke===qe&&le(oe.start+oe.count-1,x.width,4)===ke?Ie.count=Math.max(Ie.count,oe.start+oe.count-Ie.start):(++me,te[me]=oe)}te.length=me+1;let Se=i.getParameter(e.UNPACK_ROW_LENGTH),U=i.getParameter(e.UNPACK_SKIP_PIXELS),ue=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let ve=0,Ie=te.length;ve<Ie;ve++){let oe=te[ve],Oe=Math.floor(oe.start/4),ke=Math.ceil(oe.count/4),qe=Oe%x.width,yt=Math.floor(Oe/x.width),D=ke;i.pixelStorei(e.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(e.UNPACK_SKIP_ROWS,yt),i.texSubImage2D(e.TEXTURE_2D,0,qe,yt,D,1,P,Y,x.data)}y.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Se),i.pixelStorei(e.UNPACK_SKIP_PIXELS,U),i.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function Be(y,x,P){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);let te=Z(y,x),me=x.source;i.bindTexture(Y,y.__webglTexture,e.TEXTURE0+P);let Se=r.get(me);if(me.version!==Se.__version||te===!0){if(i.activeTexture(e.TEXTURE0+P),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let Q=_t.getPrimaries(_t.workingColorSpace),ne=x.colorSpace===gr?null:_t.getPrimaries(x.colorSpace),de=x.colorSpace===gr||Q===ne?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let U=M(x.image,!1,a.maxTextureSize);U=Et(x,U);let ue=n.convert(x.format,x.colorSpace),ve=n.convert(x.type),Ie=s(x.internalFormat,ue,ve,x.normalized,x.colorSpace,x.isVideoTexture);Qe(Y,x);let oe,Oe=x.mipmaps,ke=x.isVideoTexture!==!0,qe=Se.__version===void 0||te===!0,yt=me.dataReady,D=A(x,U);if(x.isDepthTexture)Ie=T(x.format===Ar,x.type),qe&&(ke?i.texStorage2D(e.TEXTURE_2D,1,Ie,U.width,U.height):i.texImage2D(e.TEXTURE_2D,0,Ie,U.width,U.height,0,ue,ve,null));else if(x.isDataTexture)if(Oe.length>0){ke&&qe&&i.texStorage2D(e.TEXTURE_2D,D,Ie,Oe[0].width,Oe[0].height);for(let Q=0,ne=Oe.length;Q<ne;Q++)oe=Oe[Q],ke?yt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,oe.width,oe.height,ue,ve,oe.data):i.texImage2D(e.TEXTURE_2D,Q,Ie,oe.width,oe.height,0,ue,ve,oe.data);x.generateMipmaps=!1}else ke?(qe&&i.texStorage2D(e.TEXTURE_2D,D,Ie,U.width,U.height),yt&&pe(x,U,ue,ve)):i.texImage2D(e.TEXTURE_2D,0,Ie,U.width,U.height,0,ue,ve,U.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&qe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,Ie,Oe[0].width,Oe[0].height,U.depth);for(let Q=0,ne=Oe.length;Q<ne;Q++)if(oe=Oe[Q],x.format!==Fi)if(ue!==null)if(ke){if(yt)if(x.layerUpdates.size>0){let de=Ml(oe.width,oe.height,x.format,x.type);for(let De of x.layerUpdates){let se=oe.data.subarray(De*de/oe.data.BYTES_PER_ELEMENT,(De+1)*de/oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,De,oe.width,oe.height,1,ue,se)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,U.depth,ue,oe.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,Ie,oe.width,oe.height,U.depth,0,oe.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?yt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,U.depth,ue,ve,oe.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,Ie,oe.width,oe.height,U.depth,0,ue,ve,oe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ke&&qe&&i.texStorage2D(e.TEXTURE_2D,D,Ie,Oe[0].width,Oe[0].height);for(let Q=0,ne=Oe.length;Q<ne;Q++)oe=Oe[Q],x.format!==Fi?ue!==null?ke?yt&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,oe.width,oe.height,ue,oe.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,Ie,oe.width,oe.height,0,oe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?yt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,oe.width,oe.height,ue,ve,oe.data):i.texImage2D(e.TEXTURE_2D,Q,Ie,oe.width,oe.height,0,ue,ve,oe.data)}else if(x.isDataArrayTexture)if(ke){if(qe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,Ie,U.width,U.height,U.depth),yt)if(x.layerUpdates.size>0){let Q=Ml(U.width,U.height,x.format,x.type);for(let ne of x.layerUpdates){let de=U.data.subarray(ne*Q/U.data.BYTES_PER_ELEMENT,(ne+1)*Q/U.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ne,U.width,U.height,1,ue,ve,de)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,ue,ve,U.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ie,U.width,U.height,U.depth,0,ue,ve,U.data);else if(x.isData3DTexture)ke?(qe&&i.texStorage3D(e.TEXTURE_3D,D,Ie,U.width,U.height,U.depth),yt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,ue,ve,U.data)):i.texImage3D(e.TEXTURE_3D,0,Ie,U.width,U.height,U.depth,0,ue,ve,U.data);else if(x.isFramebufferTexture){if(qe)if(ke)i.texStorage2D(e.TEXTURE_2D,D,Ie,U.width,U.height);else{let Q=U.width,ne=U.height;for(let de=0;de<D;de++)i.texImage2D(e.TEXTURE_2D,de,Ie,Q,ne,0,ue,ve,null),Q>>=1,ne>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),U.parentNode!==Q){Q.appendChild(U),_.add(x),Q.onpaint=ne=>{let de=ne.changedElements;for(let De of _)de.includes(De.image)&&(De.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,U);else{let ne=e.RGBA,de=e.RGBA,De=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ne,de,De,U)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ke&&qe){let Q=Dt(Oe[0]);i.texStorage2D(e.TEXTURE_2D,D,Ie,Q.width,Q.height)}for(let Q=0,ne=Oe.length;Q<ne;Q++)oe=Oe[Q],ke?yt&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,ue,ve,oe):i.texImage2D(e.TEXTURE_2D,Q,Ie,ue,ve,oe);x.generateMipmaps=!1}else if(ke){if(qe){let Q=Dt(U);i.texStorage2D(e.TEXTURE_2D,D,Ie,Q.width,Q.height)}yt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,ve,U)}else i.texImage2D(e.TEXTURE_2D,0,Ie,ue,ve,U);p(x)&&R(Y),Se.__version=me.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function We(y,x,P){if(x.image.length!==6)return;let Y=Z(y,x),te=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+P);let me=r.get(te);if(te.version!==me.__version||Y===!0){i.activeTexture(e.TEXTURE0+P);let Se=_t.getPrimaries(_t.workingColorSpace),U=x.colorSpace===gr?null:_t.getPrimaries(x.colorSpace),ue=x.colorSpace===gr||Se===U?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let se=0;se<6;se++)!ve&&!Ie?oe[se]=M(x.image[se],!0,a.maxCubemapSize):oe[se]=Ie?x.image[se].image:x.image[se],oe[se]=Et(x,oe[se]);let Oe=oe[0],ke=n.convert(x.format,x.colorSpace),qe=n.convert(x.type),yt=s(x.internalFormat,ke,qe,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,Q=me.__version===void 0||Y===!0,ne=te.dataReady,de=A(x,Oe);Qe(e.TEXTURE_CUBE_MAP,x);let De;if(ve){D&&Q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,de,yt,Oe.width,Oe.height);for(let se=0;se<6;se++){De=oe[se].mipmaps;for(let Ee=0;Ee<De.length;Ee++){let g=De[Ee];x.format!==Fi?ke!==null?D?ne&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,g.width,g.height,ke,g.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,yt,g.width,g.height,0,g.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,g.width,g.height,ke,qe,g.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,yt,g.width,g.height,0,ke,qe,g.data)}}}else{if(De=x.mipmaps,D&&Q){De.length>0&&de++;let se=Dt(oe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,de,yt,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){D?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,oe[se].width,oe[se].height,ke,qe,oe[se].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,yt,oe[se].width,oe[se].height,0,ke,qe,oe[se].data);for(let Ee=0;Ee<De.length;Ee++){let g=De[Ee].image[se].image;D?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,g.width,g.height,ke,qe,g.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,yt,g.width,g.height,0,ke,qe,g.data)}}else{D?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke,qe,oe[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,yt,ke,qe,oe[se]);for(let Ee=0;Ee<De.length;Ee++){let g=De[Ee];D?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,ke,qe,g.image[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,yt,ke,qe,g.image[se])}}}p(x)&&R(e.TEXTURE_CUBE_MAP),me.__version=te.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Te(y,x,P,Y,te,me){let Se=n.convert(P.format,P.colorSpace),U=n.convert(P.type),ue=s(P.internalFormat,Se,U,P.normalized,P.colorSpace),ve=r.get(x),Ie=r.get(P);if(Ie.__renderTarget=x,!ve.__hasExternalTextures){let oe=Math.max(1,x.width>>me),Oe=Math.max(1,x.height>>me);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?i.texImage3D(te,me,ue,oe,Oe,x.depth,0,Se,U,null):i.texImage2D(te,me,ue,oe,Oe,0,Se,U,null)}i.bindFramebuffer(e.FRAMEBUFFER,y),I(x)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,te,Ie.__webglTexture,0,Ot(x)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,te,Ie.__webglTexture,me),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Mt(y,x,P){if(e.bindRenderbuffer(e.RENDERBUFFER,y),x.depthBuffer){let Y=x.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,me=T(x.stencilBuffer,te),Se=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(x)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ot(x),me,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ot(x),me,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,me,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,y)}else{let Y=x.textures;for(let te=0;te<Y.length;te++){let me=Y[te],Se=n.convert(me.format,me.colorSpace),U=n.convert(me.type),ue=s(me.internalFormat,Se,U,me.normalized,me.colorSpace);I(x)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ot(x),ue,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ot(x),ue,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ue,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xt(y,x,P){let Y=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=r.get(x.depthTexture);if(te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(te.__webglInit===void 0&&(te.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),Qe(e.TEXTURE_CUBE_MAP,x.depthTexture);let ve=n.convert(x.depthTexture.format),Ie=n.convert(x.depthTexture.type),oe;x.depthTexture.format===lr?oe=e.DEPTH_COMPONENT24:x.depthTexture.format===Ar&&(oe=e.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,oe,x.width,x.height,0,ve,Ie,null)}}else _e(x.depthTexture,0);let me=te.__webglTexture,Se=Ot(x),U=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,ue=x.depthTexture.format===Ar?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===lr)I(x)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,U,me,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,ue,U,me,0);else if(x.depthTexture.format===Ar)I(x)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,U,me,0,Se):e.framebufferTexture2D(e.FRAMEBUFFER,ue,U,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(y){let x=r.get(y),P=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){let Y=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=Y}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(P)for(let Y=0;Y<6;Y++)xt(x.__webglFramebuffer[Y],y,Y);else{let Y=y.texture.mipmaps;Y&&Y.length>0?xt(x.__webglFramebuffer[0],y,0):xt(x.__webglFramebuffer,y,0)}else if(P){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),Mt(x.__webglDepthbuffer[Y],y,!1);else{let te=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,me)}}else{let Y=y.texture.mipmaps;if(Y&&Y.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Mt(x.__webglDepthbuffer,y,!1);else{let te=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,me)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function wt(y,x,P){let Y=r.get(y);x!==void 0&&Te(Y.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Ye(y)}function Qt(y){let x=y.texture,P=r.get(y),Y=r.get(x);y.addEventListener("dispose",o);let te=y.textures,me=y.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,l.memory.textures++),me){P.__webglFramebuffer=[];for(let U=0;U<6;U++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[U]=[];for(let ue=0;ue<x.mipmaps.length;ue++)P.__webglFramebuffer[U][ue]=e.createFramebuffer()}else P.__webglFramebuffer[U]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let U=0;U<x.mipmaps.length;U++)P.__webglFramebuffer[U]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Se)for(let U=0,ue=te.length;U<ue;U++){let ve=r.get(te[U]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),l.memory.textures++)}if(y.samples>0&&I(y)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let U=0;U<te.length;U++){let ue=te[U];P.__webglColorRenderbuffer[U]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[U]);let ve=n.convert(ue.format,ue.colorSpace),Ie=n.convert(ue.type),oe=s(ue.internalFormat,ve,Ie,ue.normalized,ue.colorSpace,y.isXRRenderTarget===!0),Oe=Ot(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe,oe,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+U,e.RENDERBUFFER,P.__webglColorRenderbuffer[U])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Mt(P.__webglDepthRenderbuffer,y,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Qe(e.TEXTURE_CUBE_MAP,x);for(let U=0;U<6;U++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Te(P.__webglFramebuffer[U][ue],y,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue);else Te(P.__webglFramebuffer[U],y,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);p(x)&&R(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Se){for(let U=0,ue=te.length;U<ue;U++){let ve=te[U],Ie=r.get(ve),oe=e.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(oe=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(oe,Ie.__webglTexture),Qe(oe,ve),Te(P.__webglFramebuffer,y,ve,e.COLOR_ATTACHMENT0+U,oe,0),p(ve)&&R(oe)}i.unbindTexture()}else{let U=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(U=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(U,Y.__webglTexture),Qe(U,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Te(P.__webglFramebuffer[ue],y,x,e.COLOR_ATTACHMENT0,U,ue);else Te(P.__webglFramebuffer,y,x,e.COLOR_ATTACHMENT0,U,0);p(x)&&R(U),i.unbindTexture()}y.depthBuffer&&Ye(y)}function ci(y){let x=y.textures;for(let P=0,Y=x.length;P<Y;P++){let te=x[P];if(p(te)){let me=B(y),Se=r.get(te).__webglTexture;i.bindTexture(me,Se),R(me),i.unbindTexture()}}}let St=[],ii=[];function Bt(y){if(y.samples>0){if(I(y)===!1){let x=y.textures,P=y.width,Y=y.height,te=e.COLOR_BUFFER_BIT,me=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=r.get(y),U=x.length>1;if(U)for(let ve=0;ve<x.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ue=y.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),U){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let Ie=r.get(x[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ie,0)}e.blitFramebuffer(0,0,P,Y,0,0,P,Y,te,e.NEAREST),c===!0&&(St.length=0,ii.length=0,St.push(e.COLOR_ATTACHMENT0+ve),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(St.push(me),ii.push(me),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ii)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,St))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),U)for(let ve=0;ve<x.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let Ie=r.get(x[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,Ie,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){let x=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Ot(y){return Math.min(a.maxSamples,y.samples)}function I(y){let x=r.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Gt(y){let x=l.render.frame;m.get(y)!==x&&(m.set(y,x),y.update())}function Et(y,x){let P=y.colorSpace,Y=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==An&&P!==gr&&(_t.getTransfer(P)===At?(Y!==Fi||te!==yi)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",P)),x}function Dt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(u.width=y.naturalWidth||y.width,u.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(u.width=y.displayWidth,u.height=y.displayHeight):(u.width=y.width,u.height=y.height),u}this.allocateTextureUnit=ie,this.resetTextureUnits=J,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=_e,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=ae,this.rebindTextures=wt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=ci,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function xg(e,t){function i(r,a=gr){let n,l=_t.getTransfer(a);if(r===yi)return e.UNSIGNED_BYTE;if(r===Mo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===xo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===rh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===ah)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===th)return e.BYTE;if(r===ih)return e.SHORT;if(r===Na)return e.UNSIGNED_SHORT;if(r===vo)return e.INT;if(r===Yi)return e.UNSIGNED_INT;if(r===Wi)return e.FLOAT;if(r===qi)return e.HALF_FLOAT;if(r===nh)return e.ALPHA;if(r===sh)return e.RGB;if(r===Fi)return e.RGBA;if(r===lr)return e.DEPTH_COMPONENT;if(r===Ar)return e.DEPTH_STENCIL;if(r===oh)return e.RED;if(r===So)return e.RED_INTEGER;if(r===Ir)return e.RG;if(r===Eo)return e.RG_INTEGER;if(r===yo)return e.RGBA_INTEGER;if(r===_n||r===vn||r===Mn||r===xn)if(l===At)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===_n)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===_n)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ds||r===Ls||r===Ns||r===Us)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Ds)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ls)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ns)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Us)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Os||r===Fs||r===Bs||r===zs||r===ks||r===Tn||r===Hs)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Os||r===Fs)return l===At?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Bs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===zs)return n.COMPRESSED_R11_EAC;if(r===ks)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Tn)return n.COMPRESSED_RG11_EAC;if(r===Hs)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Gs||r===Vs||r===Ws||r===Xs||r===js||r===Ys||r===qs||r===Ks||r===Zs||r===Js||r===$s||r===Qs||r===eo||r===to)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Gs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ws)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===js)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ys)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ks)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Js)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$s)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qs)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eo)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===to)return l===At?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===io||r===ro||r===ao)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===io)return l===At?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ro)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ao)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===no||r===so||r===wn||r===oo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===no)return n.COMPRESSED_RED_RGTC1_EXT;if(r===so)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ua?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
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

}`,yg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ki({vertexShader:Sg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bg=class extends Mr{constructor(e,t){super();let i=this,r=null,a=1,n=null,l="local-floor",h=1,c=null,u=null,m=null,_=null,d=null,v=null,E=typeof XRWebGLBinding<"u",b=new yg,M={},p=t.getContextAttributes(),R=null,B=null,s=[],T=[],A=new Ge,w=null,o=null,f=new Ci;f.viewport=new Ht;let X=new Ci;X.viewport=new Ht;let L=[f,X],O=new Au,J=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=s[Z];return le===void 0&&(le=new Zn,s[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=s[Z];return le===void 0&&(le=new Zn,s[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=s[Z];return le===void 0&&(le=new Zn,s[Z]=le),le.getHandSpace()};function G(Z){let le=T.indexOf(Z.inputSource);if(le===-1)return;let pe=s[le];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,c||n),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<s.length;Z++){let le=T[Z];le!==null&&(T[Z]=null,s[Z].disconnect(le))}J=null,N=null,b.reset();for(let Z in M)delete M[Z];if(e.setRenderTarget(R),d=null,_=null,m=null,r=null,B=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),o!==null){let Z=o.camera;Z.fov=o.fov,Z.zoom=o.zoom,Z.updateProjectionMatrix(),o=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return _!==null?_:d},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,pe=null,Be=null;p.depth&&(Be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?Ar:lr,pe=p.stencil?Ua:Yi);let We={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:a};m=this.getBinding(),_=m.createProjectionLayer(We),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),B=new Bi(_.textureWidth,_.textureHeight,{format:Fi,type:yi,depthTexture:new Fa(_.textureWidth,_.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),B=new Bi(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(h),c=null,n=await r.requestReferenceSpace(l),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(Z){for(let le=0;le<Z.removed.length;le++){let pe=Z.removed[le],Be=T.indexOf(pe);Be>=0&&(T[Be]=null,s[Be].disconnect(pe))}for(let le=0;le<Z.added.length;le++){let pe=Z.added[le],Be=T.indexOf(pe);if(Be===-1){for(let Te=0;Te<s.length;Te++)if(Te>=T.length){T.push(pe),Be=Te;break}else if(T[Te]===null){T[Te]=pe,Be=Te;break}if(Be===-1)break}let We=s[Be];We&&We.connect(pe)}}let _e=new F,K=new F;function $(Z,le,pe){_e.setFromMatrixPosition(le.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);let Be=_e.distanceTo(K),We=le.projectionMatrix.elements,Te=pe.projectionMatrix.elements,Mt=We[14]/(We[10]-1),xt=We[14]/(We[10]+1),Ye=(We[9]+1)/We[5],wt=(We[9]-1)/We[5],Qt=(We[8]-1)/We[0],ci=(Te[8]+1)/Te[0],St=Mt*Qt,ii=Mt*ci,Bt=Be/(-Qt+ci),Ot=Bt*-Qt;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(Bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),We[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let I=Mt+Bt,Gt=xt+Bt,Et=St-Ot,Dt=ii+(Be-Ot),y=Ye*xt/Gt*I,x=wt*xt/Gt*I;Z.projectionMatrix.makePerspective(Et,Dt,y,x,I,Gt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,pe=Z.far;b.texture!==null&&(b.depthNear>0&&(le=b.depthNear),b.depthFar>0&&(pe=b.depthFar)),O.near=X.near=f.near=le,O.far=X.far=f.far=pe,(J!==O.near||N!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,N=O.far),O.layers.mask=Z.layers.mask|6,f.layers.mask=O.layers.mask&-5,X.layers.mask=O.layers.mask&-3;let Be=Z.parent,We=O.cameras;ae(O,Be);for(let Te=0;Te<We.length;Te++)ae(We[Te],Be);We.length===2?$(O,f,X):O.projectionMatrix.copy(f.projectionMatrix),o===null&&Z.isPerspectiveCamera&&(o={camera:Z,fov:Z.fov,zoom:Z.zoom}),it(Z,O,Be)};function it(Z,le,pe){pe===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ho*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(_===null&&d===null))return h},this.setFoveation=function(Z){h=Z,_!==null&&(_.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(O)},this.getCameraTexture=function(Z){return M[Z]};let Fe=null;function ct(Z,le){if(u=le.getViewerPose(c||n),v=le,u!==null){let pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(B,d.framebuffer),e.setRenderTarget(B));let Be=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let Te=0;Te<pe.length;Te++){let Mt=pe[Te],xt=null;if(d!==null)xt=d.getViewport(Mt);else{let wt=m.getViewSubImage(_,Mt);xt=wt.viewport,Te===0&&(e.setRenderTargetTextures(B,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(B))}let Ye=L[Te];Ye===void 0&&(Ye=new Ci,Ye.layers.enable(Te),Ye.viewport=new Ht,L[Te]=Ye),Ye.matrix.fromArray(Mt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Mt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(xt.x,xt.y,xt.width,xt.height),Te===0&&(O.matrix.copy(Ye.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(Ye)}let We=r.enabledFeatures;if(We&&We.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=i.getBinding();let Te=m.getDepthInformation(pe[0]);Te&&Te.isValid&&Te.texture&&b.init(Te,r.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),m=i.getBinding();for(let Te=0;Te<pe.length;Te++){let Mt=pe[Te].camera;if(Mt){let xt=M[Mt];xt||(xt=new Eh,M[Mt]=xt);let Ye=m.getCameraImage(Mt);xt.sourceTexture=Ye}}}}for(let pe=0;pe<s.length;pe++){let Be=T[pe],We=s[pe];Be!==null&&We!==void 0&&We.update(Be,le,c||n)}Fe&&Fe(Z,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}let Qe=new Dh;Qe.setAnimationLoop(ct),this.setAnimationLoop=function(Z){Fe=Z},this.dispose=function(){}}},Tg=new Ut,zh=new nt;zh.set(-1,0,0,0,1,0,0,0,1);function wg(e,t){function i(M,p){M.matrixAutoUpdate===!0&&M.updateMatrix(),p.value.copy(M.matrix)}function r(M,p){p.color.getRGB(M.fogColor.value,Rh(e)),p.isFog?(M.fogNear.value=p.near,M.fogFar.value=p.far):p.isFogExp2&&(M.fogDensity.value=p.density)}function a(M,p,R,B,s){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(M,p):p.isMeshLambertMaterial?(n(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(M,p),_(M,p)):p.isMeshPhongMaterial?(n(M,p),m(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(M,p),d(M,p),p.isMeshPhysicalMaterial&&v(M,p,s)):p.isMeshMatcapMaterial?(n(M,p),E(M,p)):p.isMeshDepthMaterial?n(M,p):p.isMeshDistanceMaterial?(n(M,p),b(M,p)):p.isMeshNormalMaterial?n(M,p):p.isLineBasicMaterial?(l(M,p),p.isLineDashedMaterial&&h(M,p)):p.isPointsMaterial?c(M,p,R,B):p.isSpriteMaterial?u(M,p):p.isShadowMaterial?(M.color.value.copy(p.color),M.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(M,p){M.opacity.value=p.opacity,p.color&&M.diffuse.value.copy(p.color),p.emissive&&M.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(M.map.value=p.map,i(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,i(p.alphaMap,M.alphaMapTransform)),p.bumpMap&&(M.bumpMap.value=p.bumpMap,i(p.bumpMap,M.bumpMapTransform),M.bumpScale.value=p.bumpScale,p.side===vi&&(M.bumpScale.value*=-1)),p.normalMap&&(M.normalMap.value=p.normalMap,i(p.normalMap,M.normalMapTransform),M.normalScale.value.copy(p.normalScale),p.side===vi&&M.normalScale.value.negate()),p.displacementMap&&(M.displacementMap.value=p.displacementMap,i(p.displacementMap,M.displacementMapTransform),M.displacementScale.value=p.displacementScale,M.displacementBias.value=p.displacementBias),p.emissiveMap&&(M.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,M.emissiveMapTransform)),p.specularMap&&(M.specularMap.value=p.specularMap,i(p.specularMap,M.specularMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest);let R=t.get(p),B=R.envMap,s=R.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(s)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(zh),M.reflectivity.value=p.reflectivity,M.ior.value=p.ior,M.refractionRatio.value=p.refractionRatio),p.lightMap&&(M.lightMap.value=p.lightMap,M.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,M.lightMapTransform)),p.aoMap&&(M.aoMap.value=p.aoMap,M.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,M.aoMapTransform))}function l(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,p.map&&(M.map.value=p.map,i(p.map,M.mapTransform))}function h(M,p){M.dashSize.value=p.dashSize,M.totalSize.value=p.dashSize+p.gapSize,M.scale.value=p.scale}function c(M,p,R,B){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.size.value=p.size*R,M.scale.value=B*.5,p.map&&(M.map.value=p.map,i(p.map,M.uvTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,i(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function u(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.rotation.value=p.rotation,p.map&&(M.map.value=p.map,i(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,i(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function m(M,p){M.specular.value.copy(p.specular),M.shininess.value=Math.max(p.shininess,1e-4)}function _(M,p){p.gradientMap&&(M.gradientMap.value=p.gradientMap)}function d(M,p){M.metalness.value=p.metalness,p.metalnessMap&&(M.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,M.metalnessMapTransform)),M.roughness.value=p.roughness,p.roughnessMap&&(M.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,M.roughnessMapTransform)),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)}function v(M,p,R){M.ior.value=p.ior,p.sheen>0&&(M.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),M.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(M.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,M.sheenColorMapTransform)),p.sheenRoughnessMap&&(M.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,M.sheenRoughnessMapTransform))),p.clearcoat>0&&(M.clearcoat.value=p.clearcoat,M.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(M.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,M.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(M.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vi&&M.clearcoatNormalScale.value.negate())),p.dispersion>0&&(M.dispersion.value=p.dispersion),p.retroreflectivity>0&&(M.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(M.iridescence.value=p.iridescence,M.iridescenceIOR.value=p.iridescenceIOR,M.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(M.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,M.iridescenceMapTransform)),p.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),p.transmission>0&&(M.transmission.value=p.transmission,M.transmissionSamplerMap.value=R.texture,M.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(M.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,M.transmissionMapTransform)),M.thickness.value=p.thickness,p.thicknessMap&&(M.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=p.attenuationDistance,M.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(M.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(M.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=p.specularIntensity,M.specularColor.value.copy(p.specularColor),p.specularColorMap&&(M.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,M.specularColorMapTransform)),p.specularIntensityMap&&(M.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,p){p.matcap&&(M.matcap.value=p.matcap)}function b(M,p){let R=t.get(p).light;M.referencePosition.value.setFromMatrixPosition(R.matrixWorld),M.nearDistance.value=R.shadow.camera.near,M.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Ag(e,t,i,r){let a={},n={},l=[],h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(s,T){let A=T.program;r.uniformBlockBinding(s,A)}function u(s,T){let A=a[s.id];A===void 0&&(M(s),A=m(s),a[s.id]=A,s.addEventListener("dispose",R));let w=T.program;r.updateUBOMapping(s,w);let o=t.render.frame;n[s.id]!==o&&(d(s),n[s.id]=o)}function m(s){let T=_();s.__bindingPointIndex=T;let A=e.createBuffer(),w=s.__size,o=s.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,w,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function _(){for(let s=0;s<h;s++)if(l.indexOf(s)===-1)return l.push(s),s;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(s){let T=a[s.id],A=s.uniforms,w=s.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let o=0,f=A.length;o<f;o++){let X=A[o];if(Array.isArray(X))for(let L=0,O=X.length;L<O;L++)v(X[L],o,L,w);else v(X,o,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(s,T,A,w){if(b(s,T,A,w)===!0){let o=s.__offset,f=s.value;if(Array.isArray(f)){let X=0;for(let L=0;L<f.length;L++){let O=f[L],J=p(O);E(O,s.__data,X),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(f,s.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,o,s.__data)}}function E(s,T,A){typeof s=="number"||typeof s=="boolean"?T[0]=s:s.isMatrix3?(T[0]=s.elements[0],T[1]=s.elements[1],T[2]=s.elements[2],T[3]=0,T[4]=s.elements[3],T[5]=s.elements[4],T[6]=s.elements[5],T[7]=0,T[8]=s.elements[6],T[9]=s.elements[7],T[10]=s.elements[8],T[11]=0):ArrayBuffer.isView(s)?T.set(new s.constructor(s.buffer,s.byteOffset,T.length)):s.toArray(T,A)}function b(s,T,A,w){let o=s.value,f=T+"_"+A;if(w[f]===void 0)return typeof o=="number"||typeof o=="boolean"?w[f]=o:ArrayBuffer.isView(o)?w[f]=o.slice():w[f]=o.clone(),!0;{let X=w[f];if(typeof o=="number"||typeof o=="boolean"){if(X!==o)return w[f]=o,!0}else{if(ArrayBuffer.isView(o))return!0;if(X.equals(o)===!1)return X.copy(o),!0}}return!1}function M(s){let T=s.uniforms,A=0,w=16;for(let f=0,X=T.length;f<X;f++){let L=Array.isArray(T[f])?T[f]:[T[f]];for(let O=0,J=L.length;O<J;O++){let N=L[O],G=Array.isArray(N.value)?N.value:[N.value];for(let ie=0,j=G.length;ie<j;ie++){let _e=G[ie],K=p(_e),$=A%w,ae=$%K.boundary,it=$+ae;A+=ae,it!==0&&w-it<K.storage&&(A+=w-it),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=K.storage}}}let o=A%w;return o>0&&(A+=w-o),s.__size=A,s.__cache={},this}function p(s){let T={boundary:0,storage:0};return typeof s=="number"||typeof s=="boolean"?(T.boundary=4,T.storage=4):s.isVector2?(T.boundary=8,T.storage=8):s.isVector3||s.isColor?(T.boundary=16,T.storage=12):s.isVector4?(T.boundary=16,T.storage=16):s.isMatrix3?(T.boundary=48,T.storage=48):s.isMatrix4?(T.boundary=64,T.storage=64):s.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(s)?(T.boundary=16,T.storage=s.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",s),T}function R(s){let T=s.target;T.removeEventListener("dispose",R);let A=l.indexOf(T.__bindingPointIndex);l.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function B(){for(let s in a)e.deleteBuffer(a[s]);l=[],a={},n={}}return{bind:c,update:u,dispose:B}}var Rg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function Cg(){return Hi===null&&(Hi=new lu(Rg,16,16,Ir,qi),Hi.name="DFG_LUT",Hi.minFilter=oi,Hi.magFilter=oi,Hi.wrapS=nr,Hi.wrapT=nr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Pg=class{constructor(e={}){let{canvas:t=Nc(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1,outputBufferType:d=yi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=n;let E=d,b=new Set([yo,Eo,So]),M=new Set([yi,Yi,Na,Ua,Mo,xo]),p=new Uint32Array(4),R=new Int32Array(4),B=new F,s=null,T=null,A=[],w=[],o=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let f=this,X=!1,L=null,O=null,J=null,N=null;this._outputColorSpace=Ri;let G=0,ie=0,j=null,_e=-1,K=null,$=new Ht,ae=new Ht,it=null,Fe=new tt(0),ct=0,Qe=t.width,Z=t.height,le=1,pe=null,Be=null,We=new Ht(0,0,Qe,Z),Te=new Ht(0,0,Qe,Z),Mt=!1,xt=new Ro,Ye=!1,wt=!1,Qt=new Ut,ci=new F,St=new Ht,ii={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function Ot(){return j===null?le:1}let I=i;function Gt(S,C){return t.getContext(S,C)}let Et,Dt,y,x,P,Y,te,me,Se,U,ue,ve,Ie,oe,Oe,ke,qe,yt,D,Q,ne,de,De;try{let S={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",g,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",H,!1),I===null){let C="webgl2";if(I=Gt(C,S),I===null)throw Gt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(S){throw t.removeEventListener("webglcontextlost",g,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",H,!1),vt("WebGLRenderer: "+S.message),S}function se(){Et=new Cf(I),Et.init(),ne=new xg(I,Et),Dt=new Mf(I,Et,e,ne),y=new vg(I,Et),Dt.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),O=I.createFramebuffer(),J=I.createFramebuffer(),N=I.createFramebuffer(),x=new Df(I),P=new ag,Y=new Mg(I,Et,y,P,Dt,ne,x),te=new Rf(f),me=new Lu(I),de=new _f(I,me),Se=new Pf(I,me,x,de),U=new Nf(I,Se,me,de,x),yt=new Lf(I,Dt,Y),Oe=new xf(P),ue=new rg(f,te,Et,Dt,de,Oe),ve=new wg(f,P),Ie=new sg,oe=new dg(Et),qe=new gf(f,te,y,U,v,h),ke=new _g(f,U,Dt),De=new Ag(I,x,Dt,y),D=new vf(I,Et,x),Q=new If(I,Et,x),x.programs=ue.programs,f.capabilities=Dt,f.extensions=Et,f.properties=P,f.renderLists=Ie,f.shadowMap=ke,f.state=y,f.info=x}E!==yi&&(o=new Of(E,t.width,t.height,l,r,a));let Ee=new bg(f,I);this.xr=Ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(S){S!==void 0&&(le=S,this.setSize(Qe,Z,!1))},this.getSize=function(S){return S.set(Qe,Z)},this.setSize=function(S,C,V=!0){if(Ee.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=S,Z=C,t.width=Math.floor(S*le),t.height=Math.floor(C*le),V===!0&&(t.style.width=S+"px",t.style.height=C+"px"),o!==null&&o.setSize(t.width,t.height),this.setViewport(0,0,S,C)},this.getDrawingBufferSize=function(S){return S.set(Qe*le,Z*le).floor()},this.setDrawingBufferSize=function(S,C,V){Qe=S,Z=C,le=V,t.width=Math.floor(S*V),t.height=Math.floor(C*V),this.setViewport(0,0,S,C)},this.setEffects=function(S){if(E===yi){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let C=0;C<S.length;C++)if(S[C].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}o.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(We)},this.setViewport=function(S,C,V,k){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,C,V,k),y.viewport($.copy(We).multiplyScalar(le).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,C,V,k){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,C,V,k),y.scissor(ae.copy(Te).multiplyScalar(le).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){y.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){pe=S},this.setTransparentSort=function(S){Be=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(S=!0,C=!0,V=!0){let k=0;if(S){let z=!1;if(j!==null){let ce=j.texture.format;z=b.has(ce)}if(z){let ce=j.texture.type,fe=M.has(ce),ge=qe.getClearColor(),we=qe.getClearAlpha(),Le=ge.r,$e=ge.g,et=ge.b;fe?(p[0]=Le,p[1]=$e,p[2]=et,p[3]=we,I.clearBufferuiv(I.COLOR,0,p)):(R[0]=Le,R[1]=$e,R[2]=et,R[3]=we,I.clearBufferiv(I.COLOR,0,R))}else k|=I.COLOR_BUFFER_BIT}C&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",g,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",H,!1),qe.dispose(),Ie.dispose(),oe.dispose(),P.dispose(),te.dispose(),U.dispose(),de.dispose(),De.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ae),Ee.removeEventListener("sessionend",ze),ut.stop()};function g(S){S.preventDefault(),Pn("WebGLRenderer: Context Lost."),X=!0}function W(){Pn("WebGLRenderer: Context Restored."),X=!1;let S=x.autoReset,C=ke.enabled,V=ke.autoUpdate,k=ke.needsUpdate,z=ke.type;se(),x.autoReset=S,ke.enabled=C,ke.autoUpdate=V,ke.needsUpdate=k,ke.type=z}function H(S){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){let C=S.target;C.removeEventListener("dispose",ee),re(C)}function re(S){q(S),P.remove(S)}function q(S){let C=P.get(S).programs;C!==void 0&&(C.forEach(function(V){ue.releaseProgram(V)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,C,V,k,z,ce){C===null&&(C=ii);let fe=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=Je(S,C,V,k,z);y.setMaterial(k,fe);let we=V.index,Le=1;if(k.wireframe===!0){if(we=Se.getWireframeAttribute(V),we===void 0)return;Le=2}let $e=V.drawRange,et=V.attributes.position,he=$e.start*Le,Ve=($e.start+$e.count)*Le;ce!==null&&(he=Math.max(he,ce.start*Le),Ve=Math.min(Ve,(ce.start+ce.count)*Le)),we!==null?(he=Math.max(he,0),Ve=Math.min(Ve,we.count)):et!=null&&(he=Math.max(he,0),Ve=Math.min(Ve,et.count));let rt=Ve-he;if(rt<0||rt===1/0)return;de.setup(z,k,ge,V,we);let je,He=D;if(we!==null&&(je=me.get(we),He=Q,He.setIndex(je)),z.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*Ot()),He.setMode(I.LINES)):He.setMode(I.TRIANGLES);else if(z.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),y.setLineWidth(Tt*Ot()),z.isLineSegments?He.setMode(I.LINES):z.isLineLoop?He.setMode(I.LINE_LOOP):He.setMode(I.LINE_STRIP)}else z.isPoints?He.setMode(I.POINTS):z.isSprite&&He.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))He.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Tt=z._multiDrawStarts,be=z._multiDrawCounts,mt=z._multiDrawCount,ai=we?me.get(we).bytesPerElement:1,Vt=P.get(k).currentProgram.getUniforms();for(let Lt=0;Lt<mt;Lt++)Vt.setValue(I,"_gl_DrawID",Lt),He.render(Tt[Lt]/ai,be[Lt])}else if(z.isInstancedMesh)He.renderInstances(he,rt,z.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,be=Math.min(V.instanceCount,Tt);He.renderInstances(he,rt,be)}else He.render(he,rt)};function Ne(S,C,V,k){L!==null&&S.isNodeMaterial&&L.setObject(k,S),Ye===!0&&Oe.setState(S,V,!1),S.transparent===!0&&S.side===It&&S.forceSinglePass===!1?(S.side=vi,S.needsUpdate=!0,ri(S,C,k),S.side=Cr,S.needsUpdate=!0,ri(S,C,k),S.side=It):ri(S,C,k)}this.compile=function(S,C,V=null){V===null&&(V=S),L!==null&&L.renderStart(S,C,V),T=oe.get(V),T.init(C),w.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),wt=this.localClippingEnabled,Ye=Oe.init(this.clippingPlanes,wt),Ye===!0&&Oe.setGlobalState(this.clippingPlanes,C),L!==null&&ke.render(T.state.shadowsArray,V,C);let k=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ce=z.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){let ge=ce[fe];Ne(ge,V,C,z),k.add(ge)}else Ne(ce,V,C,z),k.add(ce)}),T=w.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(S,C,V=null){let k=this.compile(S,C,V);return new Promise(z=>{function ce(){if(k.forEach(function(fe){let ge=P.get(fe).currentProgram;(ge===void 0||ge.isReady())&&k.delete(fe)}),k.size===0){z(S);return}setTimeout(ce,10)}Et.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ye=null;function Ce(S){ye&&ye(S)}function Ae(){ut.stop()}function ze(){ut.start()}let ut=new Dh;ut.setAnimationLoop(Ce),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(S){ye=S,Ee.setAnimationLoop(S),S===null?ut.stop():ut.start()},Ee.addEventListener("sessionstart",Ae),Ee.addEventListener("sessionend",ze),this.render=function(S,C){if(C!==void 0&&C.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;L!==null&&L.renderStart(S,C);let V=Ee.enabled===!0&&Ee.isPresenting===!0,k=o!==null&&(j===null||V)&&o.begin(f,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(o===null||o.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(C),C=Ee.getCamera()),S.isScene===!0&&S.onBeforeRender(f,S,C,j),T=oe.get(S,w.length),T.init(C),T.state.textureUnits=Y.getTextureUnits(),w.push(T),Qt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),xt.setFromProjectionMatrix(Qt,Xi,C.reversedDepth),wt=this.localClippingEnabled,Ye=Oe.init(this.clippingPlanes,wt),s=Ie.get(S,A.length),s.init(),A.push(s),Ee.enabled===!0&&Ee.isPresenting===!0){let ce=f.xr.getDepthSensingMesh();ce!==null&&Ct(ce,C,-1/0,f.sortObjects)}Ct(S,C,0,f.sortObjects),s.finish(),L!==null&&L.updateLights(T.state.lightsArray),f.sortObjects===!0&&s.sort(pe,Be),Bt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Bt&&qe.addToRenderList(s,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Oe.beginShadows();let z=T.state.shadowsArray;if(ke.render(z,S,C),Ye===!0&&Oe.endShadows(),(k&&o.hasRenderPass())===!1){let ce=s.opaque,fe=s.transmissive;if(T.setupLights(),C.isArrayCamera){let ge=C.cameras;if(fe.length>0)for(let we=0,Le=ge.length;we<Le;we++){let $e=ge[we];Yt(ce,fe,S,$e)}Bt&&qe.render(S);for(let we=0,Le=ge.length;we<Le;we++){let $e=ge[we];zt(s,S,$e,$e.viewport)}}else fe.length>0&&Yt(ce,fe,S,C),Bt&&qe.render(S),zt(s,S,C)}j!==null&&ie===0&&(Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j)),k&&o.end(f),S.isScene===!0&&S.onAfterRender(f,S,C),de.resetDefaultState(),_e=-1,K=null,w.pop(),w.length>0?(T=w[w.length-1],Y.setTextureUnits(T.state.textureUnits),Ye===!0&&Oe.setGlobalState(f.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?s=A[A.length-1]:s=null,L!==null&&L.renderEnd()};function Ct(S,C,V,k){if(S.visible===!1)return;if(S.layers.test(C.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(C);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(xt)){k&&St.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Qt);let ce=U.update(S),fe=S.material;fe.visible&&s.push(S,ce,fe,V,St.z,null,C)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(xt))){let ce=U.update(S),fe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),St.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),St.copy(ce.boundingSphere.center)),St.applyMatrix4(S.matrixWorld).applyMatrix4(Qt)),Array.isArray(fe)){let ge=ce.groups;for(let we=0,Le=ge.length;we<Le;we++){let $e=ge[we],et=fe[$e.materialIndex];et&&et.visible&&s.push(S,ce,et,V,St.z,$e,C)}}else fe.visible&&s.push(S,ce,fe,V,St.z,null,C)}}let z=S.children;for(let ce=0,fe=z.length;ce<fe;ce++)Ct(z[ce],C,V,k)}function zt(S,C,V,k){let{opaque:z,transmissive:ce,transparent:fe}=S;T.setupLightsView(V),Ye===!0&&Oe.setGlobalState(f.clippingPlanes,V),k&&y.viewport($.copy(k)),z.length>0&&mi(z,C,V),ce.length>0&&mi(ce,C,V),fe.length>0&&mi(fe,C,V),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Yt(S,C,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Bi(1,1,{generateMipmaps:!0,type:et?qi:yi,minFilter:wr,samples:Math.max(4,Dt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let z=T.state.transmissionRenderTarget[k.id],ce=k.viewport||$;z.setSize(ce.z*f.transmissionResolutionScale,ce.w*f.transmissionResolutionScale);let fe=f.getRenderTarget(),ge=f.getActiveCubeFace(),we=f.getActiveMipmapLevel();f.setRenderTarget(z),f.getClearColor(Fe),ct=f.getClearAlpha(),ct<1&&f.setClearColor(16777215,.5),f.clear(),Bt&&qe.render(V);let Le=f.toneMapping;f.toneMapping=ji;let $e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Ye===!0&&Oe.setGlobalState(f.clippingPlanes,k),mi(S,V,k),Y.updateMultisampleRenderTarget(z),Y.updateRenderTargetMipmap(z),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let he=0,Ve=C.length;he<Ve;he++){let rt=C[he],{object:je,geometry:He,material:Tt,group:be}=rt;if(Tt.side===It&&je.layers.test(k.layers)){let mt=Tt.side;Tt.side=vi,Tt.needsUpdate=!0,Ue(je,V,k,He,Tt,be),Tt.side=mt,Tt.needsUpdate=!0,et=!0}}et===!0&&(Y.updateMultisampleRenderTarget(z),Y.updateRenderTargetMipmap(z))}f.setRenderTarget(fe,ge,we),f.setClearColor(Fe,ct),$e!==void 0&&(k.viewport=$e),f.toneMapping=Le}function mi(S,C,V){let k=C.isScene===!0?C.overrideMaterial:null;for(let z=0,ce=S.length;z<ce;z++){let fe=S[z],{object:ge,geometry:we,group:Le}=fe,$e=fe.material;$e.allowOverride===!0&&k!==null&&($e=k),ge.layers.test(V.layers)&&Ue(ge,C,V,we,$e,Le)}}function Ue(S,C,V,k,z,ce){L!==null&&z.isNodeMaterial&&L.setObject(S,z),S.onBeforeRender(f,C,V,k,z,ce),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(f,C,V,k,S,ce),z.transparent===!0&&z.side===It&&z.forceSinglePass===!1?(z.side=vi,z.needsUpdate=!0,f.renderBufferDirect(V,C,k,z,S,ce),z.side=Cr,z.needsUpdate=!0,f.renderBufferDirect(V,C,k,z,S,ce),z.side=It):f.renderBufferDirect(V,C,k,z,S,ce),S.onAfterRender(f,C,V,k,z,ce)}function ri(S,C,V){C.isScene!==!0&&(C=ii);let k=P.get(S),z=T.state.lights,ce=T.state.shadowsArray,fe=z.state.version,ge=ue.getParameters(S,z.state,ce,C,V,T.state.lightProbeGridArray),we=ue.getProgramCacheKey(ge),Le=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,k.fog=C.fog;let $e=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=te.get(S.envMap||k.environment,$e),k.envMapRotation=k.environment!==null&&S.envMap===null?C.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",ee),Le=new Map,k.programs=Le);let et=Le.get(we);if(et!==void 0){if(k.currentProgram===et&&k.lightsStateVersion===fe)return ui(S,ge),et}else ge.uniforms=ue.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,V,ge),S.onBeforeCompile(ge,f),et=ue.acquireProgram(ge,we),Le.set(we,et),k.uniforms=ge.uniforms;let he=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(he.clippingPlanes=Oe.uniform),ui(S,ge),k.needsLights=bt(S),k.lightsStateVersion=fe,k.needsLights&&(he.ambientLightColor.value=z.state.ambient,he.lightProbe.value=z.state.probe,he.sunLights.value=z.state.sun,he.sunLightShadows.value=z.state.sunShadow,he.directionalLights.value=z.state.directional,he.directionalLightShadows.value=z.state.directionalShadow,he.spotLights.value=z.state.spot,he.spotLightShadows.value=z.state.spotShadow,he.rectAreaLights.value=z.state.rectArea,he.ltc_1.value=z.state.rectAreaLTC1,he.ltc_2.value=z.state.rectAreaLTC2,he.pointLights.value=z.state.point,he.pointLightShadows.value=z.state.pointShadow,he.hemisphereLights.value=z.state.hemi,he.sunShadowMatrix.value=z.state.sunShadowMatrix,he.sunShadowCascade.value=z.state.sunShadowCascade,he.directionalShadowMatrix.value=z.state.directionalShadowMatrix,he.spotLightMatrix.value=z.state.spotLightMatrix,he.spotLightMap.value=z.state.spotLightMap,he.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=et,k.uniformsList=null,et}function bi(S){if(S.uniformsList===null){let C=S.currentProgram.getUniforms();S.uniformsList=bn.seqWithValue(C.seq,S.uniforms)}return S.uniformsList}function ui(S,C){let V=P.get(S);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function xi(S,C){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;B.setFromMatrixPosition(C.matrixWorld);for(let V=0,k=S.length;V<k;V++){let z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(B))return z}return null}function Je(S,C,V,k,z){C.isScene!==!0&&(C=ii),Y.resetTextureUnits();let ce=C.fog,fe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?C.environment:null,ge=j===null?f.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_t.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Le=te.get(k.envMap||fe,we),$e=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,et=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),he=!!V.morphAttributes.position,Ve=!!V.morphAttributes.normal,rt=!!V.morphAttributes.color,je=ji;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=f.toneMapping);let He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=He!==void 0?He.length:0,be=P.get(k),mt=T.state.lights;if(Ye===!0&&(wt===!0||S!==K)){let dt=S===K&&k.id===_e;Oe.setState(k,S,dt)}let ai=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==mt.state.version||be.outputColorSpace!==ge||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Le||k.fog===!0&&be.fog!==ce||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Oe.numPlanes||be.numIntersection!==Oe.numIntersection)||be.vertexAlphas!==$e||be.vertexTangents!==et||be.morphTargets!==he||be.morphNormals!==Ve||be.morphColors!==rt||be.toneMapping!==je||be.morphTargetsCount!==Tt||!!be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ai=!0):(ai=!0,be.__version=k.version);let Vt=be.currentProgram;ai===!0&&(Vt=ri(k,C,z),L&&k.isNodeMaterial&&L.onUpdateProgram(k,Vt,be));let Lt=!1,gi=!1,Ti=!1,st=Vt.getUniforms(),gt=be.uniforms;if(y.useProgram(Vt.program)&&(Lt=!0,gi=!0,Ti=!0),k.id!==_e&&(_e=k.id,gi=!0),be.needsLights){let dt=xi(T.state.lightProbeGridArray,z);be.lightProbeGrid!==dt&&(be.lightProbeGrid=dt,gi=!0)}if(Lt||K!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),st.setValue(I,"projectionMatrix",S.projectionMatrix),st.setValue(I,"viewMatrix",S.matrixWorldInverse);let dt=st.map.cameraPosition;dt!==void 0&&dt.setValue(I,ci.setFromMatrixPosition(S.matrixWorld)),Dt.logarithmicDepthBuffer&&st.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&st.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,gi=!0,Ti=!0)}if(be.needsLights&&(mt.state.sunShadowMap.length>0&&st.setValue(I,"sunShadowMap",mt.state.sunShadowMap,Y),mt.state.directionalShadowMap.length>0&&st.setValue(I,"directionalShadowMap",mt.state.directionalShadowMap,Y),mt.state.spotShadowMap.length>0&&st.setValue(I,"spotShadowMap",mt.state.spotShadowMap,Y),mt.state.pointShadowMap.length>0&&st.setValue(I,"pointShadowMap",mt.state.pointShadowMap,Y)),z.isSkinnedMesh){st.setOptional(I,z,"bindMatrix"),st.setOptional(I,z,"bindMatrixInverse");let dt=z.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),st.setValue(I,"boneTexture",dt.boneTexture,Y))}z.isBatchedMesh&&(st.setOptional(I,z,"batchingTexture"),st.setValue(I,"batchingTexture",z._matricesTexture,Y),st.setOptional(I,z,"batchingIdTexture"),st.setValue(I,"batchingIdTexture",z._indirectTexture,Y),st.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&st.setValue(I,"batchingColorTexture",z._colorsTexture,Y));let kt=V.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&yt.update(z,V,Vt),(gi||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,st.setValue(I,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&C.environment!==null&&(gt.envMapIntensity.value=C.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=Cg()),gi){if(st.setValue(I,"toneMappingExposure",f.toneMappingExposure),be.needsLights&&Xe(gt,Ti),ce&&k.fog===!0&&ve.refreshFogUniforms(gt,ce),ve.refreshMaterialUniforms(gt,k,le,Z,T.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){let dt=be.lightProbeGrid;gt.probesSH.value=dt.texture,gt.probesMin.value.copy(dt.boundingBox.min),gt.probesMax.value.copy(dt.boundingBox.max),gt.probesResolution.value.copy(dt.resolution)}bn.upload(I,bi(be),gt,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(bn.upload(I,bi(be),gt,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&st.setValue(I,"center",z.center),st.setValue(I,"modelViewMatrix",z.modelViewMatrix),st.setValue(I,"normalMatrix",z.normalMatrix),st.setValue(I,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let dt=k.uniformsGroups;for(let Di=0,wi=dt.length;Di<wi;Di++){let cr=dt[Di];De.update(cr,Vt),De.bind(cr,Vt)}}return Vt}function Xe(S,C){S.ambientLightColor.needsUpdate=C,S.lightProbe.needsUpdate=C,S.sunLights.needsUpdate=C,S.sunLightShadows.needsUpdate=C,S.directionalLights.needsUpdate=C,S.directionalLightShadows.needsUpdate=C,S.pointLights.needsUpdate=C,S.pointLightShadows.needsUpdate=C,S.spotLights.needsUpdate=C,S.spotLightShadows.needsUpdate=C,S.rectAreaLights.needsUpdate=C,S.hemisphereLights.needsUpdate=C}function bt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,C,V){let k=P.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),P.get(S.texture).__webglTexture=C,P.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,C){let V=P.get(S);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(S,C=0,V=0){j=S,G=C,ie=V;let k=null,z=!1,ce=!1;if(S){let fe=P.get(S);if(fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),$.copy(S.viewport),ae.copy(S.scissor),it=S.scissorTest,y.viewport($),y.scissor(ae),y.setScissorTest(it),_e=-1;return}else if(fe.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(fe.__hasExternalTextures)Y.rebindTextures(S,P.get(S.texture).__webglTexture,P.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Le=S.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&P.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let ge=S.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ce=!0);let we=P.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[C])?k=we[C][V]:k=we[C],z=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?k=P.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[V]:k=we,$.copy(S.viewport),ae.copy(S.scissor),it=S.scissorTest}else $.copy(We).multiplyScalar(le).floor(),ae.copy(Te).multiplyScalar(le).floor(),it=Mt;if(V!==0&&(k=O),y.bindFramebuffer(I.FRAMEBUFFER,k)&&y.drawBuffers(S,k),y.viewport($),y.scissor(ae),y.setScissorTest(it),z){let fe=P.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,V)}else if(ce){let fe=C;for(let ge=0;ge<S.textures.length;ge++){let we=P.get(S.textures[ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ge,we.__webglTexture,V,fe)}}else if(S!==null&&V!==0){let fe=P.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,V)}_e=-1};function Ft(S){let C=P.get(S);return(C.__readFormat!==S.format||C.__readType!==S.type)&&(C.__readFormat=S.format,C.__readType=S.type,C.__formatReadable=Dt.textureFormatReadable(S.format),C.__typeReadable=Dt.textureTypeReadable(S.type)),C}this.readRenderTargetPixels=function(S,C,V,k,z,ce,fe,ge=0){if(!(S&&S.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(we=we[fe]),we){y.bindFramebuffer(I.FRAMEBUFFER,we);try{let Le=S.textures[ge],$e=Le.format,et=Le.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);let he=Ft(Le);if(he.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(he.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=S.width-k&&V>=0&&V<=S.height-z&&I.readPixels(C,V,k,z,ne.convert($e),ne.convert(et),ce)}finally{let Le=j!==null?P.get(j).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,C,V,k,z,ce,fe,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(we=we[fe]),we)if(C>=0&&C<=S.width-k&&V>=0&&V<=S.height-z){y.bindFramebuffer(I.FRAMEBUFFER,we);let Le=S.textures[ge],$e=Le.format,et=Le.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);let he=Ft(Le);if(he.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(he.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(C,V,k,z,ne.convert($e),ne.convert(et),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let rt=j!==null?P.get(j).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,rt);let je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Uc(I,je,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Ve),I.deleteSync(je),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,C=null,V=0){let k=Math.pow(2,-V),z=Math.floor(S.image.width*k),ce=Math.floor(S.image.height*k),fe=C!==null?C.x:0,ge=C!==null?C.y:0;Y.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,fe,ge,z,ce),y.unbindTexture()},this.copyTextureToTexture=function(S,C,V=null,k=null,z=0,ce=0){let fe,ge,we,Le,$e,et,he,Ve,rt,je=S.isCompressedTexture?S.mipmaps[ce]:S.image;if(V!==null)fe=V.max.x-V.min.x,ge=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,$e=V.min.y,et=V.isBox3?V.min.z:0;else{let gt=Math.pow(2,-z);fe=Math.floor(je.width*gt),ge=Math.floor(je.height*gt),S.isDataArrayTexture?we=je.depth:S.isData3DTexture?we=Math.floor(je.depth*gt):we=1,Le=0,$e=0,et=0}k!==null?(he=k.x,Ve=k.y,rt=k.z):(he=0,Ve=0,rt=0);let He=ne.convert(C.format),Tt=ne.convert(C.type),be;C.isData3DTexture?(Y.setTexture3D(C,0),be=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Y.setTexture2DArray(C,0),be=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(C,0),be=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);let mt=y.getParameter(I.UNPACK_ROW_LENGTH),ai=y.getParameter(I.UNPACK_IMAGE_HEIGHT),Vt=y.getParameter(I.UNPACK_SKIP_PIXELS),Lt=y.getParameter(I.UNPACK_SKIP_ROWS),gi=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,je.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),y.pixelStorei(I.UNPACK_SKIP_ROWS,$e),y.pixelStorei(I.UNPACK_SKIP_IMAGES,et);let Ti=S.isDataArrayTexture||S.isData3DTexture,st=C.isDataArrayTexture||C.isData3DTexture;if(S.isDepthTexture){let gt=P.get(S),kt=P.get(C),dt=P.get(gt.__renderTarget),Di=P.get(kt.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,dt.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let wi=0;wi<we;wi++)Ti&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,P.get(S).__webglTexture,z,et+wi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,P.get(C).__webglTexture,ce,rt+wi)),I.blitFramebuffer(Le,$e,fe,ge,he,Ve,fe,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||P.has(S)){let gt=P.get(S),kt=P.get(C);y.bindFramebuffer(I.READ_FRAMEBUFFER,J),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let dt=0;dt<we;dt++)Ti?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,z,et+dt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gt.__webglTexture,z),st?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,ce,rt+dt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,ce),z!==0?I.blitFramebuffer(Le,$e,fe,ge,he,Ve,fe,ge,I.COLOR_BUFFER_BIT,I.NEAREST):st?I.copyTexSubImage3D(be,ce,he,Ve,rt+dt,Le,$e,fe,ge):I.copyTexSubImage2D(be,ce,he,Ve,Le,$e,fe,ge);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else st?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(be,ce,he,Ve,rt,fe,ge,we,He,Tt,je.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(be,ce,he,Ve,rt,fe,ge,we,He,je.data):I.texSubImage3D(be,ce,he,Ve,rt,fe,ge,we,He,Tt,je):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ce,he,Ve,fe,ge,He,Tt,je.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ce,he,Ve,je.width,je.height,He,je.data):I.texSubImage2D(I.TEXTURE_2D,ce,he,Ve,fe,ge,He,Tt,je);y.pixelStorei(I.UNPACK_ROW_LENGTH,mt),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ai),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Vt),y.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),y.pixelStorei(I.UNPACK_SKIP_IMAGES,gi),ce===0&&C.generateMipmaps&&I.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(S){P.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){G=0,ie=0,j=null,y.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}},Gl={type:"change"},Do={type:"start"},kh={type:"end"},gn=new za,Vl=new ar,Ig=Math.cos(70*Bc.DEG2RAD),Kt=new F,_i=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ss=1e-6,Dg=class extends Iu{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ia.ROTATE,MIDDLE:ia.DOLLY,RIGHT:ia.PAN},this.touches={ONE:ea.ROTATE,TWO:ea.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new vr,this._lastTargetPosition=new F,this._quat=new vr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vl,this._sphericalDelta=new vl,this._scale=1,this._panOffset=new F,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new F,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ng.bind(this),this._onPointerDown=Lg.bind(this),this._onPointerUp=Ug.bind(this),this._onContextMenu=Gg.bind(this),this._onMouseWheel=Bg.bind(this),this._onKeyDown=zg.bind(this),this._onTouchStart=kg.bind(this),this._onTouchMove=Hg.bind(this),this._onMouseDown=Og.bind(this),this._onMouseMove=Fg.bind(this),this._interceptControlDown=Vg.bind(this),this._interceptControlUp=Wg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gl),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_i:i>Math.PI&&(i-=_i),r<-Math.PI?r+=_i:r>Math.PI&&(r-=_i),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let l=Kt.length();n=this._clampDistance(l*this._scale);let h=l-n;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),n=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(gn.origin.copy(this.object.position),gn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gn.direction))<Ig?this.object.lookAt(this.target):(Vl.setFromNormalAndCoplanarPoint(this.object.up,this.target),gn.intersectPlane(Vl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ss||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ss||this._lastTargetPosition.distanceToSquared(this.target)>Ss?(this.dispatchEvent(Gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_i/60*this.autoRotateSpeed*e:_i/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Kt.copy(r).sub(this.target);let a=Kt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,l=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/t.clientHeight),this._rotateUp(_i*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/t.clientHeight),this._rotateUp(_i*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(n,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Lg(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ng(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Ug(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kh),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Og(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ia.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Rt.DOLLY;break;case ia.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Rt.ROTATE}break;case ia.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Do)}function Fg(e){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Bg(e){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(e.preventDefault(),this.dispatchEvent(Do),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(kh))}function zg(e){this.enabled!==!1&&this._handleKeyDown(e)}function kg(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ea.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Rt.TOUCH_ROTATE;break;case ea.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case ea.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Rt.TOUCH_DOLLY_PAN;break;case ea.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Do)}function Hg(e){switch(this._trackPointer(e),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Rt.NONE}}function Gg(e){this.enabled!==!1&&e.preventDefault()}function Vg(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wl(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);let i=t.getAttribute("data-product")||"tks",r=window.SKY_PRODUCTS_DATA&&window.SKY_PRODUCTS_DATA[i]||{title:"Sky Group Mühendislik Ürünü",hotspots:[]},a=new $c;a.background=new tt(16777215);let n=t.clientWidth||900,l=t.clientHeight||480,h=new Ci(35,n/l,.1,100);h.position.set(8.5,4.2,7.5);let c=new Pg({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setSize(n,l),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=_o,c.toneMappingExposure=1.15,c.shadowMap.enabled=!0,c.shadowMap.type=Ia,t.appendChild(c.domElement);let u=new Dg(h,c.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.maxPolarAngle=Math.PI/2-.05,u.minDistance=2,u.maxDistance=28,u.target.set(0,0,0),u.autoRotate=!0,u.autoRotateSpeed=.6;let m=null,_=()=>{u.autoRotate=!1,clearTimeout(m),m=setTimeout(()=>{de.autoRotate&&(u.autoRotate=!0)},6e3)};c.domElement.addEventListener("pointerdown",_),c.domElement.addEventListener("wheel",_,{passive:!0}),c.domElement.addEventListener("touchstart",_,{passive:!0});let d=new Tu(16777215,.9);a.add(d);let v=new fs(16777215,1.25);v.position.set(12,16,14),v.castShadow=!0,v.shadow.mapSize.width=1024,v.shadow.mapSize.height=1024,v.shadow.bias=-5e-4,a.add(v);let E=new fs(14412542,.7);E.position.set(-14,8,-10),a.add(E);let b=new fs(15793652,.6);b.position.set(0,18,0),a.add(b);let M=new Co(30,30),p=new fu({opacity:.12}),R=new jt(M,p);R.rotation.x=-Math.PI/2,R.position.y=-1.65,R.receiveShadow=!0,a.add(R);let B=new Pu(24,24,14870768,15857145);B.position.y=-1.64,a.add(B);let s={aluFrame:new Nt({color:13949149,metalness:.8,roughness:.25,side:It}),galvSteel:new Nt({color:12897749,metalness:.65,roughness:.45,side:It}),stainless:new Nt({color:14870768,metalness:.95,roughness:.15,side:It}),baseSkid:new Nt({color:9741240,metalness:.75,roughness:.35,side:It}),panelSolid:new Nt({color:16317180,metalness:.15,roughness:.35,side:It}),panelCutaway:new xu({color:14742270,transparent:!0,opacity:.2,roughness:.08,metalness:.1,transmission:.85,ior:1.45,depthWrite:!1,side:It}),fanHousing:new Nt({color:165063,metalness:.6,roughness:.3,side:It}),fanImpeller:new Nt({color:3718648,metalness:.75,roughness:.25,side:It}),motorCast:new Nt({color:1976635,metalness:.85,roughness:.3,side:It}),copperPipe:new Nt({color:12730636,metalness:.9,roughness:.2,side:It}),coolingFin:new Nt({color:3718648,metalness:.55,roughness:.35,side:It}),heatingFin:new Nt({color:16281969,metalness:.55,roughness:.35,side:It}),rotorWheel:new Nt({color:6583435,metalness:.7,roughness:.4,side:It}),filterCloth:new Nt({color:16317180,roughness:.95,metalness:.05,side:It}),filterG4:new Nt({color:14870768,roughness:.9,metalness:.05,side:It}),damperBlade:new Nt({color:9741240,metalness:.8,roughness:.25,side:It}),actuatorOrange:new Nt({color:15357964,metalness:.2,roughness:.4}),drainPan:new Nt({color:14870768,metalness:.95,roughness:.15,side:It}),doorHandle:new Nt({color:988970,metalness:.8,roughness:.3}),rubberBlack:new Nt({color:988970,roughness:.85,metalness:.1,side:It}),brassGold:new Nt({color:14251782,metalness:.85,roughness:.25}),springSilver:new Nt({color:14870768,metalness:.95,roughness:.2}),yellowSafety:new Nt({color:15381256,metalness:.2,roughness:.4}),gaugeFace:new Nt({color:16777215,roughness:.2}),touchscreen:new In({color:165063})},T=[],A=[],w=new Xt;a.add(w);function o(g,W,H,ee,re=0,q=0,Ne=0,ye=!0,Ce=!0){let Ae=new Un(g,W,H),ze=new jt(Ae,ee);return ze.position.set(re,q,Ne),ze.castShadow=ye,ze.receiveShadow=Ce,ze}function f(g,W,H,ee,re,q=0,Ne=0,ye=0,Ce=0,Ae=0,ze=!1){let ut=new uo(g,W,H,ee,1,ze),Ct=new jt(ut,re);return Ct.position.set(q,Ne,ye),Ce&&(Ct.rotation.x=Ce),Ae&&(Ct.rotation.z=Ae),Ct.castShadow=!0,Ct.receiveShadow=!0,Ct}function X(g,W=s.panelSolid,H=s.panelCutaway){return g.userData.solidMat=W,g.userData.cutawayMat=H,A.push(g),g}function L(g){let W=-1.4100000000000001,H=o(8.4+.2,.22,.1,s.baseSkid,0,W,1-.05),ee=o(8.4+.2,.22,.1,s.baseSkid,0,W,-1+.05);g.add(H,ee);let re=[-4.2,-2.5,-.8,.8,2.5,4.2];re.forEach(Me=>{g.add(o(.12,.22,2-.2,s.baseSkid,Me,W,0))}),[-2.5,.8].forEach(Me=>{g.add(o(.28,.12,.12,s.aluFrame,Me,W,1-.04)),g.add(o(.28,.12,.12,s.aluFrame,Me,W,-1+.04))}),[[-4.2-.05,1-.02],[-4.2-.05,-1+.02],[4.2+.05,1-.02],[4.2+.05,-1+.02]].forEach(([Me,at])=>{g.add(o(.08,.18,.08,s.yellowSafety,Me,W+.06,at))});let q=.08;g.add(o(8.4,q,q,s.aluFrame,0,-1.3+q/2,1-q/2),o(8.4,q,q,s.aluFrame,0,-1.3+q/2,-1+q/2),o(8.4,q,q,s.aluFrame,0,1.3-q/2,1-q/2),o(8.4,q,q,s.aluFrame,0,1.3-q/2,-1+q/2)),re.forEach(Me=>{g.add(o(q,2.6,q,s.aluFrame,Me,0,1-q/2),o(q,2.6,q,s.aluFrame,Me,0,-1+q/2),o(q,q,2-q*2,s.aluFrame,Me,1.3-q/2,0),o(q,q,2-q*2,s.aluFrame,Me,-1.3+q/2,0))});let Ne=5,ye=o(Ne,.05,2-.16,s.galvSteel,-4.2+Ne/2,0,0);g.add(ye),g.add(o(8.4-.1,2.6-.1,.05,s.panelSolid,0,0,-1+.04)),g.add(o(8.4-.1,.05,2-.16,s.galvSteel,0,-1.3+.03,0)),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,4.2-.03,0,0));let Ce=o(.18,1.2,1.2,s.galvSteel,4.2+.09,-.2,0);g.add(Ce),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,-4.2+.03,0,0));let Ae=[(-4.2+-2.5)/2,(-2.5+-.8)/2,(-.8+.8)/2,(.8+2.5)/2,(2.5+4.2)/2],ze=[1.7,1.7,1.6,1.7,1.7];Ae.forEach((Me,at)=>{let Ze=ze[at]-.08,qt=o(Ze,.04,2-.16,s.panelCutaway,Me,1.3-.02,0,!1,!1);g.add(qt),X(qt,s.panelSolid,s.panelCutaway);let Dr=o(Ze,2.6-.18,.03,s.panelCutaway,Me,0,1-.02,!1,!1);g.add(Dr),X(Dr,s.panelSolid,s.panelCutaway);let Li=.04;g.add(o(Ze,Li,.02,s.aluFrame,Me,(2.6-.18)/2,1),o(Ze,Li,.02,s.aluFrame,Me,-2.42/2,1),o(Li,2.6-.18,.02,s.aluFrame,Me-Ze/2,0,1),o(Li,2.6-.18,.02,s.aluFrame,Me+Ze/2,0,1)),[-.45,.45].forEach(ga=>{g.add(o(.04,.14,.05,s.doorHandle,Me+Ze/2-.1,ga,1+.02))}),[-.55,.55].forEach(ga=>{g.add(o(.03,.1,.03,s.aluFrame,Me-Ze/2+.04,ga,1+.01))})}),[[-3.35,.55],[0,.2],[3.35,-.45]].forEach(([Me,at])=>{let Ze=f(.14,.14,.04,24,s.aluFrame,Me,at,1,Math.PI/2),qt=f(.11,.11,.045,20,s.panelCutaway,Me,at,1,Math.PI/2);g.add(Ze,qt)}),[[-1.65,.1],[3.35,.35]].forEach(([Me,at])=>{let Ze=f(.08,.08,.03,20,s.aluFrame,Me,at,1.015,Math.PI/2),qt=f(.07,.07,.035,20,s.gaugeFace,Me,at,1+.015,Math.PI/2);g.add(Ze,qt),g.add(f(.008,.008,.22,8,s.panelCutaway,Me-.03,at-.12,1+.01)),g.add(f(.008,.008,.22,8,s.panelCutaway,Me+.03,at-.12,1+.01))});let ut=.48,Ct=.68,zt=.18,Yt=o(ut,Ct,zt,s.galvSteel,2.75,.45,1+zt/2),mi=o(.24,.16,.01,s.touchscreen,2.75,.56,1+zt+.005),Ue=f(.014,.014,.02,10,s.coolingFin,2.65,.42,1+zt+.01,Math.PI/2),ri=f(.014,.014,.02,10,s.yellowSafety,2.75,.42,1+zt+.01,Math.PI/2),bi=f(.014,.014,.02,10,s.heatingFin,2.85,.42,1+zt+.01,Math.PI/2),ui=o(.08,.08,.01,s.yellowSafety,2.75,.3,1+zt+.005),xi=o(.04,.06,.03,s.heatingFin,2.75,.3,1+zt+.02);g.add(Yt,mi,Ue,ri,bi,ui,xi);let Je=-1.3/2-.05,Xe=2-.35,bt=.85,Ft=o(.12,bt,Xe,s.aluFrame,-4.2-.06,Je,0);g.add(Ft);for(let Me=0;Me<5;Me++){let at=Je-bt/2+.1+Me*((bt-.2)/4),Ze=o(.08,.015,Xe-.06,s.damperBlade,-4.2-.06,at,0);Ze.rotation.z=.55,g.add(Ze)}let S=o(.16,.2,.14,s.actuatorOrange,-4.2-.06,Je,1+.06);g.add(S);let C=o(.1,1.3-.35,2-.35,s.aluFrame,-3.7,Je,0),V=o(.08,1.3-.4,2-.4,s.filterG4,-3.7,Je,0);g.add(C,V);let k=1.3/2-.05,z=o(.12,bt,Xe,s.aluFrame,-4.2-.06,k,0);g.add(z);for(let Me=0;Me<5;Me++){let at=k-bt/2+.1+Me*((bt-.2)/4),Ze=o(.08,.015,Xe-.06,s.damperBlade,-4.2-.06,at,0);Ze.rotation.z=-.55,g.add(Ze)}let ce=o(.16,.2,.14,s.actuatorOrange,-4.2-.06,k,1+.06);g.add(ce);let fe=new Xt;fe.position.set(-2.85,k,0),g.add(fe);let ge=f(.38,.3,.12,24,s.aluFrame,.2,0,0,0,Math.PI/2),we=f(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);fe.add(ge,we);let Le=f(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);fe.add(Le);let $e=f(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);fe.add($e),T.push(()=>{we.rotation.x+=.14});let et=o(.1,1.3-.35,2-.35,s.aluFrame,-2.4,Je,0);g.add(et);for(let Me=0;Me<2;Me++)for(let at=0;at<3;at++){let Ze=Je-.22+Me*.44,qt=-1+.35+at*((2-.7)/2),Dr=new wa(.18,.85,4),Li=new jt(Dr,s.filterCloth);Li.position.set(-1.9,Ze,qt),Li.rotation.z=-Math.PI/2,Li.scale.set(.9,1.2,.7),g.add(Li)}let he=new Xt;he.position.set(0,0,0),g.add(he);let Ve=o(.38,2.6-.2,2-.2,s.aluFrame,0,0,0);g.add(Ve);let rt=f(1.12,1.12,.32,36,s.aluFrame,0,0,0,0,Math.PI/2),je=f(1.08,1.08,.3,32,s.rotorWheel,0,0,0,0,Math.PI/2);he.add(rt,je);for(let Me=0;Me<12;Me++){let at=Me/12*Math.PI*2,Ze=o(.025,2.12,.02,s.aluFrame,0,0,0);Ze.rotation.x=at,he.add(Ze)}let He=f(.09,.09,.22,12,s.motorCast,.22,1.05,.75,0,Math.PI/2),Tt=f(.02,.02,.3,8,s.doorHandle,.22,.95,.75);g.add(He,Tt),T.push(()=>{he.rotation.x+=.01});let be=2-.35,mt=1.3-.35,ai=o(.24,mt,be,s.coolingFin,1.15,Je,0);g.add(ai),[-.5,.5].forEach(Me=>{let at=f(.045,.045,mt+.1,14,s.copperPipe,1.15,Je,Me);g.add(at)});for(let Me=0;Me<8;Me++){let at=Je-mt/2+.1+Me*((mt-.2)/7),Ze=new jt(new cl(.032,.012,8,12,Math.PI),s.copperPipe);Ze.position.set(1.15,at,1-.18),Ze.rotation.y=Math.PI/2,Ze.rotation.x=Math.PI/2,g.add(Ze)}let Vt=o(1.3,.09,be+.1,s.drainPan,1.5,-1.3+.1,0);g.add(Vt);let Lt=f(.02,.02,.18,10,s.stainless,1.8,-1.3+.06,1-.05,0,0);g.add(Lt);let gi=o(.12,mt,be,s.aluFrame,1.45,Je,0);g.add(gi);for(let Me=0;Me<12;Me++){let at=-.7+Me*((be-.2)/11),Ze=o(.08,mt-.05,.012,s.aluFrame,1.45,Je,at);Ze.rotation.y=.35,g.add(Ze)}let Ti=o(.18,mt,be,s.heatingFin,1.85,Je,0);g.add(Ti),[-.4,.4].forEach(Me=>{let at=f(.04,.04,mt+.1,14,s.copperPipe,1.85,Je,Me);g.add(at)});let st=new Xt;st.position.set(2.85,Je,0),g.add(st);let gt=f(.48,.38,.18,28,s.aluFrame,-.4,0,0,0,Math.PI/2),kt=f(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);st.add(gt,kt);let dt=f(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),Di=f(.14,.05,.16,16,s.aluFrame,-.25,0,0,0,Math.PI/2);st.add(dt,Di),T.push(()=>{dt.rotation.x+=.15});let wi=f(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),cr=o(.14,.12,.14,s.motorCast,.32,.26,0);st.add(wi,cr);let ma=o(1.1,.08,.8,s.baseSkid,.05,-mt/2+.08,0);st.add(ma),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Me,at])=>{let Ze=o(.12,.03,.12,s.motorCast,Me,-mt/2+.02,at),qt=f(.04,.04,.12,10,s.springSilver,Me,-mt/2+.08,at);st.add(Ze,qt)});let Pe=o(.1,mt,be,s.rubberBlack,2.35,Je,0);g.add(Pe);let ot=o(1.2,.03,.03,s.yellowSafety,2.9,Je+.4,1-.25),pt=o(1.2,.03,.03,s.yellowSafety,2.9,Je,1-.25);g.add(ot,pt);for(let Me=-1;Me<=1;Me++){let at=Me*.45,Ze=o(.65,mt-.1,.22,s.galvSteel,3.8,Je,at),qt=f(.11,.11,mt-.1,16,s.aluFrame,3.47,Je,at);g.add(Ze,qt)}}function O(g){let W=-1.4100000000000001,H=o(8.6+.2,.22,.1,s.baseSkid,0,W,1-.05),ee=o(8.6+.2,.22,.1,s.baseSkid,0,W,-1+.05);g.add(H,ee);let re=[-4.3,-2.6,-.9,.8,2.6,4.3];re.forEach(Pe=>{g.add(o(.12,.22,2-.2,s.baseSkid,Pe,W,0))}),[-2.6,.8].forEach(Pe=>{g.add(o(.28,.12,.12,s.stainless,Pe,W,1-.04)),g.add(o(.28,.12,.12,s.stainless,Pe,W,-1+.04))}),[[-4.3-.05,1-.02],[-4.3-.05,-1+.02],[4.3+.05,1-.02],[4.3+.05,-1+.02]].forEach(([Pe,ot])=>{g.add(o(.08,.18,.08,s.yellowSafety,Pe,W+.06,ot))});let q=.08;g.add(o(8.6,q,q,s.stainless,0,-1.3+q/2,1-q/2),o(8.6,q,q,s.stainless,0,-1.3+q/2,-1+q/2),o(8.6,q,q,s.stainless,0,1.3-q/2,1-q/2),o(8.6,q,q,s.stainless,0,1.3-q/2,-1+q/2)),re.forEach(Pe=>{g.add(o(q,2.6,q,s.stainless,Pe,0,1-q/2),o(q,2.6,q,s.stainless,Pe,0,-1+q/2),o(q,q,2-q*2,s.stainless,Pe,1.3-q/2,0),o(q,q,2-q*2,s.stainless,Pe,-1.3+q/2,0))});let Ne=5.1,ye=o(Ne,.05,2-.16,s.stainless,-4.3+Ne/2,0,0);g.add(ye),g.add(o(8.6-.1,2.6-.1,.04,s.panelSolid,0,0,-1+.03)),g.add(o(8.6-.12,2.6-.12,.01,s.stainless,0,0,-1+.055)),g.add(o(8.6-.1,.05,2-.16,s.stainless,0,-1.3+.03,0));let Ce=f(.04,.04,8.6-.2,12,s.stainless,0,-1.3+.07,-1+.07,0,Math.PI/2);g.add(Ce),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,4.3-.03,0,0));let Ae=o(.18,1.2,1.2,s.stainless,4.3+.09,-.2,0);g.add(Ae),g.add(o(.05,2.6-.1,2-.16,s.panelSolid,-4.3+.03,0,0));let ze=[(-4.3+-2.6)/2,(-2.6+-.9)/2,(-.9+.8)/2,(.8+2.6)/2,(2.6+4.3)/2],ut=[1.7,1.7,1.7,1.8,1.7];ze.forEach((Pe,ot)=>{let pt=ut[ot]-.08,Me=o(pt,.04,2-.16,s.panelCutaway,Pe,1.3-.02,0,!1,!1);g.add(Me),X(Me,s.panelSolid,s.panelCutaway);let at=o(pt,2.6-.18,.03,s.panelCutaway,Pe,0,1-.02,!1,!1);g.add(at),X(at,s.panelSolid,s.panelCutaway);let Ze=.04;g.add(o(pt,Ze,.02,s.stainless,Pe,(2.6-.18)/2,1),o(pt,Ze,.02,s.stainless,Pe,-2.42/2,1),o(Ze,2.6-.18,.02,s.stainless,Pe-pt/2,0,1),o(Ze,2.6-.18,.02,s.stainless,Pe+pt/2,0,1)),[-.45,.45].forEach(qt=>{g.add(o(.04,.14,.05,s.doorHandle,Pe+pt/2-.1,qt,1+.02))}),[-.55,.55].forEach(qt=>{g.add(o(.03,.1,.03,s.stainless,Pe-pt/2+.04,qt,1+.01))})}),[[-3.45,.55],[-.05,.2],[3.45,-.45]].forEach(([Pe,ot])=>{let pt=f(.14,.14,.04,24,s.stainless,Pe,ot,1,Math.PI/2),Me=f(.11,.11,.045,20,s.panelCutaway,Pe,ot,1,Math.PI/2);g.add(pt,Me)}),[[-1.75,.1],[3.45,.35]].forEach(([Pe,ot])=>{let pt=f(.08,.08,.03,20,s.stainless,Pe,ot,1.015,Math.PI/2),Me=f(.07,.07,.035,20,s.gaugeFace,Pe,ot,1+.015,Math.PI/2);g.add(pt,Me),g.add(f(.008,.008,.22,8,s.panelCutaway,Pe-.03,ot-.12,1+.01)),g.add(f(.008,.008,.22,8,s.panelCutaway,Pe+.03,ot-.12,1+.01))});let Ct=.48,zt=.68,Yt=.18,mi=o(Ct,zt,Yt,s.stainless,2.85,.45,1+Yt/2),Ue=o(.24,.16,.01,s.touchscreen,2.85,.56,1+Yt+.005),ri=f(.014,.014,.02,10,s.coolingFin,2.75,.42,1+Yt+.01,Math.PI/2),bi=f(.014,.014,.02,10,s.yellowSafety,2.85,.42,1+Yt+.01,Math.PI/2),ui=f(.014,.014,.02,10,s.heatingFin,2.95,.42,1+Yt+.01,Math.PI/2),xi=o(.08,.08,.01,s.yellowSafety,2.85,.3,1+Yt+.005),Je=o(.04,.06,.03,s.heatingFin,2.85,.3,1+Yt+.02);g.add(mi,Ue,ri,bi,ui,xi,Je);let Xe=-1.3/2-.05,bt=2-.35,Ft=.85,S=o(.12,Ft,bt,s.stainless,-4.3-.06,Xe,0);g.add(S);for(let Pe=0;Pe<5;Pe++){let ot=Xe-Ft/2+.1+Pe*((Ft-.2)/4),pt=o(.08,.015,bt-.06,s.damperBlade,-4.3-.06,ot,0);pt.rotation.z=.55,g.add(pt)}let C=o(.16,.2,.14,s.actuatorOrange,-4.3-.06,Xe,1+.06);g.add(C);let V=o(.1,1.3-.35,2-.35,s.stainless,-3.8,Xe,0),k=o(.08,1.3-.4,2-.4,s.filterG4,-3.8,Xe,0);g.add(V,k);let z=1.3/2-.05,ce=o(.12,Ft,bt,s.stainless,-4.3-.06,z,0);g.add(ce);for(let Pe=0;Pe<5;Pe++){let ot=z-Ft/2+.1+Pe*((Ft-.2)/4),pt=o(.08,.015,bt-.06,s.damperBlade,-4.3-.06,ot,0);pt.rotation.z=-.55,g.add(pt)}let fe=o(.16,.2,.14,s.actuatorOrange,-4.3-.06,z,1+.06);g.add(fe);let ge=new Xt;ge.position.set(-2.95,z,0),g.add(ge);let we=f(.38,.3,.12,24,s.stainless,.2,0,0,0,Math.PI/2),Le=f(.42,.42,.28,20,s.fanImpeller,0,0,0,0,Math.PI/2);ge.add(we,Le);let $e=f(.18,.18,.34,16,s.motorCast,-.32,0,0,0,Math.PI/2);ge.add($e);let et=f(.46,.46,.1,16,s.yellowSafety,.28,0,0,0,Math.PI/2,!0);ge.add(et),T.push(()=>{Le.rotation.x+=.14});let he=o(.1,1.3-.35,2-.35,s.stainless,-2.5,Xe,0);g.add(he);for(let Pe=0;Pe<2;Pe++)for(let ot=0;ot<3;ot++){let pt=Xe-.22+Pe*.44,Me=-1+.35+ot*((2-.7)/2),at=new wa(.18,.85,4),Ze=new jt(at,s.filterCloth);Ze.position.set(-2,pt,Me),Ze.rotation.z=-Math.PI/2,Ze.scale.set(.9,1.2,.7),g.add(Ze)}let Ve=o(1.5,1.4,2-.35,s.stainless,-.05,0,0);Ve.rotation.z=Math.PI/4,g.add(Ve);let rt=o(2.2,.04,2-.3,s.stainless,-.05,0,0);rt.rotation.z=-Math.PI/4,g.add(rt);let je=2-.35,He=1.3-.35;for(let Pe=0;Pe<3;Pe++){let ot=Xe-.25+Pe*.25,pt=f(.02,.02,je-.1,12,s.coolingFin,.95,ot,0,Math.PI/2);g.add(pt),g.add(o(.04,.04,.04,s.stainless,.95,ot,1-.2)),g.add(o(.04,.04,.04,s.stainless,.95,ot,-1+.2))}let Tt=o(.24,He,je,s.coolingFin,1.25,Xe,0);g.add(Tt),[-.5,.5].forEach(Pe=>{let ot=f(.045,.045,He+.1,14,s.copperPipe,1.25,Xe,Pe);g.add(ot)});for(let Pe=0;Pe<8;Pe++){let ot=Xe-He/2+.1+Pe*((He-.2)/7),pt=new jt(new cl(.032,.012,8,12,Math.PI),s.copperPipe);pt.position.set(1.25,ot,1-.18),pt.rotation.y=Math.PI/2,pt.rotation.x=Math.PI/2,g.add(pt)}let be=o(1.3,.09,je+.1,s.stainless,1.6,-1.3+.1,0);g.add(be);let mt=f(.025,.025,.2,12,s.stainless,1.9,-1.3+.06,1-.05);g.add(mt);let ai=o(.12,He,je,s.stainless,1.55,Xe,0);g.add(ai);for(let Pe=0;Pe<12;Pe++){let ot=-.7+Pe*((je-.2)/11),pt=o(.08,He-.05,.012,s.stainless,1.55,Xe,ot);pt.rotation.y=.35,g.add(pt)}let Vt=o(.18,He,je,s.heatingFin,1.95,Xe,0);g.add(Vt),[-.4,.4].forEach(Pe=>{let ot=f(.04,.04,He+.1,14,s.copperPipe,1.95,Xe,Pe);g.add(ot)});let Lt=new Xt;Lt.position.set(2.85,Xe,0),g.add(Lt);let gi=f(.48,.38,.18,28,s.stainless,-.4,0,0,0,Math.PI/2),Ti=f(.44,.44,.03,24,s.copperPipe,-.38,0,0,0,Math.PI/2,!0);Lt.add(gi,Ti);let st=f(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),gt=f(.14,.05,.16,16,s.stainless,-.25,0,0,0,Math.PI/2);Lt.add(st,gt),T.push(()=>{st.rotation.x+=.15});let kt=f(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),dt=o(.14,.12,.14,s.motorCast,.32,.26,0);Lt.add(kt,dt);let Di=o(1.1,.08,.8,s.stainless,.05,-He/2+.08,0);Lt.add(Di),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Pe,ot])=>{let pt=o(.12,.03,.12,s.motorCast,Pe,-He/2+.02,ot),Me=f(.04,.04,.12,10,s.springSilver,Pe,-He/2+.08,ot);Lt.add(pt,Me)});let wi=o(.1,He,je,s.rubberBlack,2.35,Xe,0);g.add(wi);let cr=o(.2,He-.1,je-.1,s.stainless,3.65,Xe,0),ma=o(.16,He-.15,je-.15,s.filterCloth,3.65,Xe,0);g.add(cr,ma);for(let Pe=-1;Pe<=1;Pe+=2){let ot=Pe*.4,pt=o(.42,He-.1,.2,s.stainless,4.05,Xe,ot);g.add(pt)}}function J(g){let W=-1.2750000000000001,H=6.2+.2,ee=2.2+.2,re=o(H,.45,.08,s.baseSkid,0,W,1.1+.06),q=o(H,.45,.08,s.baseSkid,0,W,-1.1-.06),Ne=o(.08,.45,ee-.16,s.baseSkid,-3.1-.06,W,0),ye=o(.08,.45,ee-.16,s.baseSkid,3.1+.06,W,0);g.add(re,q,Ne,ye);let Ce=o(H+.08,.04,.14,s.aluFrame,0,-1.05-.02,1.1+.05),Ae=o(H+.08,.04,.14,s.aluFrame,0,-1.05-.02,-1.1-.05);g.add(Ce,Ae);let ze=o(H,.02,.04,s.rubberBlack,0,-1.05+.01,1.1),ut=o(H,.02,.04,s.rubberBlack,0,-1.05+.01,-1.1);g.add(ze,ut),[[-3.1-.08,1.1+.08],[-3.1-.08,-1.1-.08],[3.1+.08,1.1+.08],[3.1+.08,-1.1-.08]].forEach(([Re,lt])=>{let ei=o(.14,.25,.14,s.yellowSafety,Re,W+.1,lt),ni=f(.035,.035,.16,16,s.motorCast,Re,W+.16,lt,0,Math.PI/2);g.add(ei,ni)});let Ct=o(.9,.18,.9,s.galvSteel,-.1,W-.14,0),zt=o(.82,.19,.82,s.motorCast,-.1,W-.14,0),Yt=o(.9,.18,.9,s.galvSteel,2.3,W-.14,0),mi=o(.82,.19,.82,s.motorCast,2.3,W-.14,0);g.add(Ct,zt,Yt,mi);let Ue=.08;g.add(o(6.2,Ue,Ue,s.aluFrame,0,-1.05+Ue/2,1.1-Ue/2),o(6.2,Ue,Ue,s.aluFrame,0,-1.05+Ue/2,-1.1+Ue/2),o(6.2,Ue,Ue,s.aluFrame,0,1.05-Ue/2,1.1-Ue/2),o(6.2,Ue,Ue,s.aluFrame,0,1.05-Ue/2,-1.1+Ue/2)),[-3.1+Ue/2,-.7,.6,1.8,3.1-Ue/2].forEach(Re=>{g.add(o(Ue,2.1-2*Ue,Ue,s.aluFrame,Re,0,1.1-Ue/2),o(Ue,2.1-2*Ue,Ue,s.aluFrame,Re,0,-1.1+Ue/2))}),[-3.1+Ue/2,-.7,.6,1.8,3.1-Ue/2].forEach(Re=>{g.add(o(Ue,Ue,2.2-2*Ue,s.aluFrame,Re,-1.05+Ue/2,0),o(Ue,Ue,2.2-2*Ue,s.aluFrame,Re,1.05-Ue/2,0))}),g.add(o(6.2-.1,2.1-.1,.05,s.panelSolid,0,0,-1.1+.04)),g.add(o(6.2-.1,.05,2.2-.1,s.galvSteel,0,-1.05+.04,0)),g.add(o(.05,2.1-.1,2.2-.1,s.panelSolid,3.1-.03,0,0));let ri=o(3.8,.06,2.2+.1,s.panelSolid,1.15,1.05+.03,0);g.add(ri),g.add(o(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,1.1+.06),o(3.84,.04,.04,s.aluFrame,1.15,1.05+.01,-1.1-.06));let bi=o(.06,2.1-.12,2.2-.12,s.galvSteel,-.7,0,0);g.add(bi);let ui=o(2.2,2.1-.25,.12,s.coolingFin,-1.85,.02,-1.1+.15),xi=o(.12,2.1-.25,2.2-.3,s.coolingFin,-3.1+.15,.02,0);g.add(ui,xi);for(let Re=-.8;Re<=.8;Re+=.2){let lt=o(2.25,.02,.02,s.aluFrame,-1.85,Re,-1.05);g.add(lt)}[-.8,-.2,.4].forEach(Re=>{let lt=f(.035,.035,2.1,14,s.copperPipe,-1.85,Re,-.8600000000000001,0,Math.PI/2);g.add(lt)}),[-2.2,-1.2].forEach((Re,lt)=>{let ei=f(.48,.46,.22,28,s.motorCast,Re,1.1600000000000001,0,0,0,!0),ni=f(.51,.51,.04,28,s.aluFrame,Re,1.05+.22,0);g.add(ei,ni);let Zi=f(.46,.46,.02,24,s.galvSteel,Re,1.05+.22+.01,0,0,0,!0);g.add(Zi);for(let Ji=0;Ji<4;Ji++){let Lr=o(.9,.015,.015,s.galvSteel,Re,1.285,0);Lr.rotation.y=Ji/4*Math.PI,g.add(Lr)}let zi=new Xt;zi.position.set(Re,1.05+.12,0),g.add(zi);let _a=f(.12,.12,.08,16,s.aluFrame,0,0,0);zi.add(_a);for(let Ji=0;Ji<5;Ji++){let Lr=new Xt;Lr.rotation.y=Ji/5*Math.PI*2;let No=o(.34,.02,.11,s.fanImpeller,.24,0,0);No.rotation.x=.35,Lr.add(No),zi.add(Lr)}let Bn=lt===0?.18:.17;T.push(()=>{zi.rotation.y+=Bn});let zn=f(.15,.15,.3,16,s.motorCast,Re,1.05-.12,0);g.add(zn)});let Je=o(1.5,.06,.6,s.baseSkid,-1.8,-1.05+.1,.1);g.add(Je),[-2.15,-1.45].forEach(Re=>{[[-.12,-.12],[-.12,.12],[.12,-.12],[.12,.12]].forEach(([zi,_a])=>{g.add(f(.04,.04,.04,12,s.rubberBlack,Re+zi,-1.05+.14,.1+_a))});let lt=f(.16,.16,.58,24,s.motorCast,Re,-1.05+.45,.1),ei=f(.14,.16,.08,20,s.motorCast,Re,-1.05+.76,.1),ni=o(.1,.14,.08,s.motorCast,Re+.14,-1.05+.5,.1),Zi=f(.165,.165,.05,20,s.heatingFin,Re,-1.05+.22,.1);g.add(lt,ei,ni,Zi)});let Xe=f(.12,.12,.52,20,s.motorCast,-.95,-1.05+.42,.25),bt=f(.09,.12,.06,16,s.motorCast,-.95,-1.05+.7,.25);g.add(Xe,bt);let Ft=f(.04,.04,.8,14,s.copperPipe,-1.8,-1.05+.62,.1,0,Math.PI/2),S=f(.04,.04,.6,14,s.copperPipe,-1.2,-1.05+.62,.18,Math.PI/4,0);g.add(Ft,S);let C=f(.03,.03,1.1,14,s.copperPipe,-1.8,-1.05+.78,-.15,0,Math.PI/2),V=f(.045,.045,.22,16,s.springSilver,-1.35,-1.05+.78,-.15,0,Math.PI/2);g.add(C,V);let k=f(.06,.06,.24,16,s.fanHousing,-.95,-1.05+.28,-.3,0,Math.PI/2),z=f(.03,.03,.34,14,s.brassGold,-.95,-1.05+.28,-.3,0,Math.PI/2),ce=o(.09,.12,.09,s.brassGold,-.95,-1.05+.45,-.3),fe=f(.01,.01,.2,8,s.rubberBlack,-.95,-1.05+.54,-.3);g.add(k,z,ce,fe),[-.15,.15].forEach(Re=>{let lt=f(.045,.045,.02,16,s.gaugeFace,-.73,-.4,Re,0,Math.PI/2);g.add(lt)});let ge=1.1,we=.8,Le=.35,$e=o(ge,we,Le,s.galvSteel,-.1,.2,-1.1-Le/2+.04),et=o(ge+.06,.03,Le+.08,s.aluFrame,-.1,.2+we/2+.02,-1.1-Le/2);et.rotation.x=-.12,g.add($e,et);for(let Re=-.3;Re<=.3;Re+=.12){let lt=o(ge-.06,.02,.18,s.damperBlade,-.1,.2+Re,-1.1-Le/2);lt.rotation.x=.45,g.add(lt)}let he=1,Ve=o(he,.75,.08,s.aluFrame,-.1,.2,-1.1+.25);g.add(Ve);for(let Re=-.25;Re<=.25;Re+=.14){let lt=o(he-.06,.11,.015,s.damperBlade,-.1,.2+Re,-.8500000000000001);lt.rotation.x=.3,g.add(lt)}let rt=.9,je=o(rt,.08,.9,s.aluFrame,-.1,-1.05+.15,0);g.add(je);for(let Re=-.3;Re<=.3;Re+=.15){let lt=o(rt-.06,.015,.12,s.damperBlade,-.1,-.9,Re);lt.rotation.z=.25,g.add(lt)}let He=o(.16,.22,.14,s.actuatorOrange,-.1,.35,1.1-.2),Tt=f(.04,.04,.06,16,s.aluFrame,-.1,.35,1.1-.12,Math.PI/2,0),be=o(.03,.14,.02,s.motorCast,-.1,.42,1.1-.1);g.add(He,Tt,be);let mt=f(.015,.015,.35,10,s.stainless,.25,.2,0);g.add(mt);let ai=.6,Vt=2.1-.3,Lt=2.2-.3,gi=o(.18,Vt,Lt,s.galvSteel,ai,0,0);g.add(gi);for(let Re=-Lt/2+.3;Re<=Lt/2-.2;Re+=.5){let lt=o(.05,Vt-.1,.44,s.filterG4,ai-.05,0,Re),ei=o(.07,Vt-.1,.44,s.filterCloth,ai+.05,0,Re);g.add(lt,ei)}let Ti=f(.01,.01,.2,8,s.copperPipe,ai-.14,.3,1.1-.15),st=f(.01,.01,.2,8,s.copperPipe,ai+.14,.3,1.1-.15);g.add(Ti,st);let gt=1.25,kt=2.1-.35,dt=2.2-.35,Di=o(.32,kt,dt,s.coolingFin,gt,.02,0);g.add(Di);for(let Re=0;Re<4;Re++)for(let lt=0;lt<3;lt++){let ei=-kt/2+.2+lt*(kt/3.2),ni=gt-.12+Re*.08,Zi=f(.025,.025,.04,12,s.copperPipe,ni,ei,1.1-.18,Math.PI/2,0);g.add(Zi)}let wi=f(.035,.035,.08,14,s.brassGold,gt-.15,-.2,1.1-.22);g.add(wi);for(let Re=0;Re<4;Re++){let lt=f(.008,.008,.28,8,s.copperPipe,gt-.08,-.2+Re*.1,.8800000000000001,0,Math.PI/4);g.add(lt)}let cr=dt+.15,ma=.85,Pe=.09,ot=o(ma,Pe,cr,s.drainPan,gt,-1.05+Pe/2+.05,0);g.add(ot);let pt=f(.03,.03,.35,12,s.stainless,gt+.1,-1.05-.05,1.1+.02),Me=f(.03,.03,.22,12,s.stainless,gt+.22,-1.05-.12,1.1+.02),at=f(.03,.03,.14,12,s.stainless,gt+.16,-1.05-.22,1.1+.02,0,Math.PI/2);g.add(pt,Me,at);let Ze=o(.12,kt-.05,dt,s.aluFrame,gt+.24,.02,0);g.add(Ze);let qt=1.8,Dr=kt,Li=dt;for(let Re=-.5;Re<=.5;Re+=.25){let lt=f(.045,.045,Li-.2,16,s.stainless,qt,Re,0,Math.PI/2,0);g.add(lt)}let ga=o(.25,Dr-.2,.3,s.galvSteel,qt,0,-1.1+.2);g.add(ga);let xr=new Xt;xr.position.set(2.45,.05,0),g.add(xr);let Hh=f(.48,.38,.18,28,s.aluFrame,-.38,0,0,0,Math.PI/2),Gh=f(.44,.44,.03,24,s.copperPipe,-.36,0,0,0,Math.PI/2,!0);xr.add(Hh,Gh);let Lo=f(.52,.52,.36,24,s.fanHousing,-.05,0,0,0,Math.PI/2),Vh=f(.14,.05,.16,16,s.aluFrame,-.24,0,0,0,Math.PI/2);xr.add(Lo,Vh),T.push(()=>{Lo.rotation.x+=.15});let Wh=f(.24,.24,.45,18,s.motorCast,.32,0,0,0,Math.PI/2),Xh=o(.14,.12,.14,s.motorCast,.32,.26,0);xr.add(Wh,Xh);let jh=o(1.1,.08,.8,s.baseSkid,.05,-kt/2+.1,0);xr.add(jh),[[-.4,-.3],[-.4,.3],[.4,-.3],[.4,.3]].forEach(([Re,lt])=>{let ei=o(.12,.03,.12,s.motorCast,Re,-kt/2+.04,lt),ni=f(.04,.04,.12,10,s.springSilver,Re,-kt/2+.1,lt);xr.add(ei,ni)});let Yh=o(.85,.6,.85,s.galvSteel,2.3,-1.05+.3,0),qh=o(.9,.1,.9,s.rubberBlack,2.3,-1.05+.05,0);g.add(Yh,qh),[{name:"Condenser & Compressor",minX:-2.85,maxX:-.85},{name:"Economizer & Filter",minX:-.65,maxX:.55},{name:"DX Evaporator & Heater",minX:.65,maxX:1.85},{name:"Supply Plug Fan",minX:1.95,maxX:2.85}].forEach((Re,lt)=>{let ei=Re.maxX-Re.minX,ni=(Re.minX+Re.maxX)/2,Zi=2.1-.22,zi=o(ei-.04,Zi,.04,s.panelCutaway,ni,0,1.1-.02,!1,!1);g.add(zi),X(zi,s.panelSolid,s.panelCutaway);let _a=o(.04,.14,.04,s.doorHandle,ni+ei*.42,0,1.1+.01),Bn=o(.03,.08,.03,s.stainless,ni-ei*.45,Zi*.35,1.1+.01),zn=o(.03,.08,.03,s.stainless,ni-ei*.45,-Zi*.35,1.1+.01);if(g.add(_a,Bn,zn),lt===1||lt===2||lt===3){let Ji=f(.12,.12,.04,20,s.aluFrame,ni,.22,1.1,Math.PI/2);g.add(Ji)}});let Kh=o(.42,.65,.18,s.panelSolid,.6,.3,1.1+.08),Zh=o(.38,.6,.02,s.aluFrame,.6,.3,1.1+.17),Jh=o(.24,.16,.01,s.touchscreen,.6,.4,1.1+.18),$h=o(.09,.09,.02,s.yellowSafety,.6,.18,1.1+.18),Qh=f(.035,.035,.05,12,s.heatingFin,.6,.18,1.1+.2,Math.PI/2);g.add(Kh,Zh,Jh,$h,Qh),[-.15,.15].forEach(Re=>{let lt=f(.065,.065,.035,20,s.aluFrame,.6,-.25,1.1800000000000002+Re,Math.PI/2),ei=f(.055,.055,.037,20,s.gaugeFace,.6,-.25,1.1+.08+Re,Math.PI/2),ni=f(.008,.008,.3,8,s.panelCutaway,.6,-.42,1.1+.08+Re);g.add(lt,ei,ni)})}function N(g,W){if(W==="tks"){L(g);return}if(W==="thks"){O(g);return}if(W==="rooftop"){J(g);return}let H=W==="thks",ee=W==="thrv-dx",re=W==="hrv",q=W==="rooftop",Ne=re?4.8:q?6.2:7.6,ye=re?1.9:2.6,Ce=re?1.8:2,Ae=Ne/2,ze=ye/2,ut=Ce/2,Ct=.22,zt=-ze-Ct/2,Yt=o(Ne+.3,Ct,.12,s.baseSkid,0,zt,ut-.06),mi=o(Ne+.3,Ct,.12,s.baseSkid,0,zt,-ut+.06);g.add(Yt,mi),[-Ae,-Ae*.5,0,Ae*.5,Ae].forEach(Je=>{g.add(o(.12,Ct,Ce-.24,s.baseSkid,Je,zt,0))});let Ue=.08,ri=H?s.stainless:s.aluFrame;g.add(o(Ne,Ue,Ue,ri,0,-ze+Ue/2,ut-Ue/2),o(Ne,Ue,Ue,ri,0,-ze+Ue/2,-ut+Ue/2),o(Ne,Ue,Ue,ri,0,ze-Ue/2,ut-Ue/2),o(Ne,Ue,Ue,ri,0,ze-Ue/2,-ut+Ue/2));let bi=H?s.stainless:s.galvSteel;g.add(o(Ne-.1,ye-.1,.05,s.panelSolid,0,0,-ut+.04),o(Ne-.1,.05,Ce-.1,s.panelSolid,0,ze-.03,0),o(Ne-.1,.05,Ce-.1,bi,0,-ze+.03,0),o(.05,ye-.1,Ce-.1,s.panelSolid,Ae-.03,0,0));let ui=re?3:4,xi=(Ne-.2)/ui;for(let Je=0;Je<ui;Je++){let Xe=-Ae+.1+(Je+.5)*xi,bt=o(xi-.04,ye-.18,.03,s.panelCutaway,Xe,0,ut-.02,!1,!1);g.add(bt),A.push(bt),g.add(o(.04,.12,.04,s.doorHandle,Xe+xi*.4,0,ut+.01)),g.add(f(.11,.11,.04,16,s.aluFrame,Xe,.2,ut,Math.PI/2))}if(re){let Je=o(1.5,1.4,Ce-.35,s.aluFrame,0,0,0);Je.rotation.z=Math.PI/4,g.add(Je),[-1.4,1.4].forEach((Xe,bt)=>{let Ft=bt===0?-.35:.35,S=f(.35,.35,.25,20,s.fanHousing,Xe,Ft,0,0,Math.PI/2);g.add(S),T.push(()=>{S.rotation.x+=.1})}),[-1.9,1.9].forEach(Xe=>{g.add(o(.06,ye-.4,Ce-.4,s.filterCloth,Xe,0,0))}),[[-Ae-.1,.4],[Ae+.1,-.4]].forEach(([Xe,bt])=>{g.add(f(.32,.32,.22,24,s.galvSteel,Xe,bt,0,0,Math.PI/2,!0))})}else if(q){[-1.2,1.2].forEach(Xe=>{let bt=f(.55,.55,.18,24,s.motorCast,Xe,ze+.09,0,0,0,!0),Ft=f(.48,.48,.04,4,s.fanImpeller,Xe,ze+.12,0);g.add(bt,Ft),T.push(()=>{Ft.rotation.y+=.15})}),[-1.8,-1].forEach(Xe=>{let bt=f(.2,.2,.7,16,s.motorCast,Xe,-ze+.5,-ut+.5);g.add(bt)});let Je=f(.45,.45,.35,20,s.fanHousing,1.8,-.2,0,0,Math.PI/2);g.add(Je),T.push(()=>{Je.rotation.x+=.12}),g.add(o(.3,ye-.5,Ce-.4,s.coolingFin,.5,-.1,0))}else{let Je=new Xt;Je.position.set(0,0,0),g.add(Je);let Xe=f(1.05,1.05,.28,32,s.aluFrame,0,0,0,0,Math.PI/2),bt=f(1.01,1.01,.26,28,s.rotorWheel,0,0,0,0,Math.PI/2);Je.add(Xe,bt);for(let C=0;C<12;C++){let V=C/12*Math.PI*2,k=o(.03,1.98,.02,s.aluFrame,0,0,0);k.rotation.x=V,Je.add(k)}T.push(()=>{Je.rotation.x+=.008});let Ft=f(.42,.42,.35,24,s.fanHousing,2.8,-ze/2+.1,0,0,Math.PI/2),S=f(.36,.36,.3,24,s.fanHousing,-1.3,ze/2-.05,0,0,Math.PI/2);g.add(Ft,S),T.push(()=>{Ft.rotation.x+=.12,S.rotation.x+=.12}),g.add(o(.28,ze-.3,Ce-.35,H?s.stainless:s.coolingFin,1.35,-ze/2,0)),g.add(o(.22,ze-.3,Ce-.35,s.heatingFin,1.85,-ze/2,0)),g.add(o(.95,.08,Ce-.25,s.drainPan,1.6,-ze+.12,0)),g.add(o(.06,ze-.25,Ce-.3,H?s.stainless:s.aluFrame,-2.1,-ze/2,0));for(let C=0;C<4;C++){let V=-ut+.25+(C+.5)*((Ce-.4)/4),k=new jt(new wa(.2,.75,4),s.filterCloth);k.rotateZ(-Math.PI/2),k.position.set(-1.7,-ze/2,V),k.scale.set(1,1.4,.8),g.add(k)}if(H){g.add(o(.18,ze-.3,Ce-.35,s.stainless,2.15,-ze/2,0));let C=f(.03,.03,Ce-.5,12,s.coolingFin,1.1,-ze/2+.2,0,Math.PI/2);g.add(C)}[-ze/2,ze/2].forEach(C=>{g.add(o(.08,ze-.25,Ce-.3,s.aluFrame,-Ae-.04,C,0)),g.add(o(.14,.18,.12,s.actuatorOrange,-Ae-.04,C,ut+.05))}),ee&&g.add(f(.2,.2,.65,16,s.motorCast,2.5,-ze/2,-ut+.5)),g.add(o(.32,.55,.18,s.motorCast,2.3,.35,ut+.09))}}function G(g,W){if(W==="tdf"){g.add(o(3.2,.04,2,s.galvSteel,0,2/2,0),o(3.2,.04,2,s.galvSteel,0,-2/2,0),o(3.2,2,.04,s.galvSteel,0,0,-2/2)),[-3.2/2,3.2/2].forEach(q=>{g.add(o(.08,.12,2+.2,s.aluFrame,q,2/2+.04,0),o(.08,.12,2+.2,s.aluFrame,q,-2/2-.04,0),o(.08,2,.12,s.aluFrame,q,0,2/2+.04),o(.08,2,.12,s.aluFrame,q,0,-2/2-.04)),[-2/2-.04,2/2+.04].forEach(Ne=>{[-2/2-.04,2/2+.04].forEach(ye=>{g.add(o(.1,.14,.14,s.baseSkid,q,Ne,ye))})})});let H=o(3.2-.1,2-.1,.03,s.panelCutaway,0,0,2/2,!1,!1);g.add(H),A.push(H),[-.8,.8].forEach(q=>{g.add(o(.08,.12,.04,s.doorHandle,q,2/2-.1,2/2+.02))});let ee=f(.78,.78,.45,24,s.fanImpeller,0,0,0,0,Math.PI/2),re=f(.28,.28,.35,16,s.motorCast,.25,0,0,0,Math.PI/2);g.add(ee,re),T.push(()=>{ee.rotation.x+=.14}),g.add(o(.24,.18,.16,s.fanHousing,-.6,2/2+.1,.4))}else if(W==="yangin-fani"){let H=f(1.25,1.25,4.2,32,s.galvSteel,0,0,0,0,Math.PI/2,!0);g.add(H),[-4.2/2,4.2/2].forEach(ye=>{let Ce=f(1.43,1.43,.06,32,s.baseSkid,ye,0,0,0,Math.PI/2,!0);g.add(Ce);for(let Ae=0;Ae<12;Ae++){let ze=Ae/12*Math.PI*2;g.add(o(.08,.04,.04,s.doorHandle,ye,Math.sin(ze)*(1.25+.09),Math.cos(ze)*(1.25+.09)))}});let ee=f(.46,.46,2,24,s.motorCast,.1,0,0,0,Math.PI/2),re=new jt(new wa(.46,.6,20),s.motorCast);re.rotateZ(-Math.PI/2),re.position.set(-1.2,0,0),g.add(ee,re);let q=new Xt;q.position.set(-.6,0,0),g.add(q);let Ne=f(.48,.48,.2,20,s.fanImpeller,0,0,0,0,Math.PI/2);q.add(Ne);for(let ye=0;ye<8;ye++){let Ce=ye/8*Math.PI*2,Ae=o(.04,.7,.16,s.fanImpeller,0,Math.sin(Ce)*.78,Math.cos(Ce)*.78);Ae.rotation.x=Ce+.35,q.add(Ae)}T.push(()=>{q.rotation.x+=.15});for(let ye=0;ye<4;ye++){let Ce=ye/4*Math.PI*2,Ae=o(.03,1.25-.46,.1,s.baseSkid,.4,Math.sin(Ce)*(1.25+.46)/2,Math.cos(Ce)*(1.25+.46)/2);Ae.rotation.x=Ce,g.add(Ae)}g.add(o(2.8,.12,.35,s.baseSkid,0,-1.25-.1,.9),o(2.8,.12,.35,s.baseSkid,0,-1.25-.1,-.9)),g.add(o(.24,.24,.16,s.actuatorOrange,0,1.25+.1,0))}else{let H=f(.62,.62,5.2,28,s.galvSteel,0,0,0,0,Math.PI/2,!0);g.add(H),[-1.7,1.7].forEach(q=>{g.add(f(.62+.12,.62+.12,1.5,28,s.aluFrame,q,0,0,0,Math.PI/2,!0))});let ee=f(.28,.28,1.2,16,s.motorCast,0,0,0,0,Math.PI/2),re=f(.62-.05,.62-.05,.12,8,s.fanImpeller,0,0,0,0,Math.PI/2);g.add(ee,re),T.push(()=>{re.rotation.x+=.16});for(let q=-.3;q<=.3;q+=.2){let Ne=o(.08,.04,.8,s.damperBlade,2.62,q,0);Ne.rotation.z=-.2,g.add(Ne)}[-5.2/2-.02,5.2/2+.02].forEach(q=>{g.add(f(.62+.02,.62+.02,.04,16,s.aluFrame,q,0,0,0,Math.PI/2,!0))}),[-1.4,1.4].forEach(q=>{g.add(o(.08,.55,.25,s.baseSkid,q,.62+.35,0))})}}function ie(g){let W=o(3,.03,1.3,s.galvSteel,-1.1,.45,0),H=o(3,.03,1.3,s.galvSteel,-1.1,-.45,0),ee=o(3,.9,.03,s.galvSteel,-1.1,0,-.65);g.add(W,H,ee);let re=.6,q=o(re,.9,.03,s.galvSteel,-2.6+re/2,0,.65),Ne=o(re,.9,.03,s.galvSteel,.4-re/2,0,.65),ye=3-2*re,Ce=o(ye,.9-.08,.03,s.panelCutaway,-1.1,0,.65,!1,!1);g.add(q,Ne,Ce),X(Ce,s.galvSteel,s.panelCutaway),[-2.1,-1.6,-1.1,-.6,-.1].forEach(he=>{let Ve=o(.04,.025,1.22,s.aluFrame,he,.47000000000000003,0),rt=o(.04,.025,1.3-.08,s.aluFrame,he,-.45-.02,0);g.add(Ve,rt)}),[[-1.85,-1.35],[-1.35,-.85],[-.85,-.35]].forEach(([he,Ve])=>{let rt=(he+Ve)/2,je=o(.015,.015,1.3-.12,s.aluFrame,rt,.45+.015,0);je.rotation.y=.35;let He=o(.015,.015,1.3-.12,s.aluFrame,rt,.45+.015,0);He.rotation.y=-.35,g.add(je,He)});let Ae=.035,ze=o(3,Ae,Ae,s.aluFrame,-1.1,.45+Ae/2,.65+Ae/2),ut=o(3,Ae,Ae,s.aluFrame,-1.1,.45+Ae/2,-.65-Ae/2),Ct=o(3,Ae,Ae,s.aluFrame,-1.1,-.45-Ae/2,.65+Ae/2),zt=o(3,Ae,Ae,s.aluFrame,-1.1,-.45-Ae/2,-.65-Ae/2);g.add(ze,ut,Ct,zt);let Yt=o(3,.012,.012,s.rubberBlack,-1.1,.45,.65);g.add(Yt);let mi=o(ye-.05,.9-.12,.06,s.motorCast,-1.1,0,-.65+.05),Ue=o(ye-.05,.06,1.3-.12,s.motorCast,-1.1,-.45+.05,0);g.add(mi,Ue);let ri=o(ye-.06,.9-.14,.015,s.galvSteel,-1.1,0,-.65+.08),bi=o(ye-.06,.015,1.3-.14,s.galvSteel,-1.1,-.45+.08,0);g.add(ri,bi);for(let he=-1.1-.6;he<=-1.1+.6;he+=.4)for(let Ve=-.25;Ve<=.25;Ve+=.25){let rt=f(.005,.005,.08,8,s.copperPipe,he,Ve,-.6,Math.PI/2),je=f(.03,.03,.005,12,s.aluFrame,he,Ve,-.65+.09,Math.PI/2);g.add(rt,je)}let ui=-2.1,xi=f(.24,.24,.04,24,s.aluFrame,ui,0,.65+.02,Math.PI/2),Je=f(.22,.22,.05,24,s.galvSteel,ui,0,.65+.03,Math.PI/2);g.add(xi,Je),[-.1,.1].forEach(he=>{let Ve=o(.04,.08,.05,s.doorHandle,ui+he,0,.72);g.add(Ve)}),j(g,-2.6,.9,1.3,s),_e(g,.4,.9,1.3,s);let Xe=1.35,bt=1.8,Ft=o(bt,.03,1.3,s.galvSteel,Xe,.45,0),S=o(bt,.03,1.3,s.galvSteel,Xe,-.45,0),C=o(bt,.9,.03,s.galvSteel,Xe,0,-.65);g.add(Ft,S,C);let V=o(.4,.9,.03,s.galvSteel,.6,0,.65),k=o(.4,.9,.03,s.galvSteel,2.05,0,.65),z=o(1.05,.9-.08,.03,s.panelCutaway,1.32,0,.65,!1,!1);g.add(V,k,z),X(z,s.galvSteel,s.panelCutaway);for(let he=0;he<4;he++){let Ve=.9+he*.28,rt=new Xt;rt.position.set(Ve,0,-.15+he*.1);let je=f(.35,.35,.9-.14,16,s.aluFrame,0,0,0,0,0,!0);je.scale.set(.25,1,.55),rt.add(je);let He=o(.04,.02,.18,s.galvSteel,0,.45-.08,0),Tt=o(.04,.02,.18,s.galvSteel,0,-.45+.08,0);rt.add(He,Tt),g.add(rt)}let ce=.55,fe=.45,ge=.45,we=o(ce,fe,ge,s.galvSteel,1.35,.15,-.65-ge/2),Le=o(ce+.1,fe+.1,.04,s.aluFrame,1.35,.15,-.65-ge);g.add(we,Le),j(g,2.24,.9,1.3,s),[-1.8,1].forEach(he=>{let Ve=o(.06,.05,1.65,s.baseSkid,he,-.49,0),rt=o(.06,.015,.15,s.rubberBlack,he,-.45-.01,.65-.1),je=o(.06,.015,.15,s.rubberBlack,he,-.45-.01,-.65+.1);g.add(Ve,rt,je),[-1.65/2+.04,1.65/2-.04].forEach(He=>{let Tt=f(.012,.012,1.35,10,s.stainless,he,.20500000000000004,He),be=f(.024,.024,.03,6,s.aluFrame,he,-.45-.07,He),mt=f(.024,.024,.03,6,s.aluFrame,he,-.45+1.35-.04,He);g.add(Tt,be,mt)})}),[-.5,-.3].forEach(he=>{let Ve=f(.018,.018,.04,12,s.brassGold,he,.47000000000000003,.2);g.add(Ve)});let $e=o(.22,.14,.01,s.aluFrame,-.4,.15,.65+.02),et=o(.18,.1,.012,s.touchscreen,-.4,.15,.65+.022);g.add($e,et)}function j(g,W,H,ee,re){let q=o(.04,.06,ee+.14,re.aluFrame,W,H/2+.03,0),Ne=o(.04,.06,ee+.14,re.aluFrame,W,-H/2-.06/2,0),ye=o(.04,H+.14,.06,re.aluFrame,W,0,ee/2+.06/2),Ce=o(.04,H+.14,.06,re.aluFrame,W,0,-ee/2-.06/2);g.add(q,Ne,ye,Ce),[[H/2+.06/2,ee/2+.06/2],[H/2+.06/2,-ee/2-.06/2],[-H/2-.06/2,ee/2+.06/2],[-H/2-.06/2,-ee/2-.06/2]].forEach(([Ae,ze])=>{let ut=o(.05,.09,.09,re.galvSteel,W,Ae,ze),Ct=f(.012,.012,.04+.02,8,re.doorHandle,W,Ae,ze,0,Math.PI/2);g.add(ut,Ct)})}function _e(g,W,H,ee,re){j(g,W-.025,H,ee,re),j(g,W+.025,H,ee,re);let q=o(.015,H+.08,ee+.08,re.rubberBlack,W,0,0);g.add(q),[[H/2+.03,ee/2+.03],[H/2+.03,-ee/2-.03],[-H/2-.03,ee/2+.03],[-H/2-.03,-ee/2-.03]].forEach(([Ne,ye])=>{let Ce=f(.014,.014,.12,10,re.stainless,W,Ne,ye,0,Math.PI/2),Ae=f(.022,.022,.03,6,re.doorHandle,W+.05,Ne,ye,0,Math.PI/2);g.add(Ce,Ae)}),[[H/2+.05,0],[-H/2-.05,0],[0,ee/2+.05],[0,-ee/2-.05]].forEach(([Ne,ye])=>{let Ce=o(.08,.04,.04,re.doorHandle,W,Ne,ye),Ae=f(.01,.01,.06,8,re.stainless,W,Ne+(Ne!==0?Math.sign(Ne)*.025:0),ye+(ye!==0?Math.sign(ye)*.025:0));g.add(Ce,Ae)})}function K(g,W){if(W==="galvaniz-kanal"){ie(g);return}if(W==="spiral-kanal"){let H=f(.75,.75,4.4,32,s.galvSteel,-.6,0,0,0,Math.PI/2,!0);g.add(H);for(let re=-2.6;re<=1.2;re+=.45)g.add(f(.75+.015,.75+.015,.025,32,s.aluFrame,re,0,0,0,Math.PI/2,!0));g.add(f(.75+.025,.75+.025,.12,32,s.rubberBlack,1.65,0,0,0,Math.PI/2,!0));let ee=f(.75-.01,.75-.01,1.8,28,s.galvSteel,2.2,.9,0,0,0,!0);g.add(ee),g.add(f(.75+.06,.75+.06,.08,32,s.baseSkid,-.8,0,0,0,Math.PI/2,!0)),g.add(f(.02,.02,1.4,8,s.baseSkid,-.8,.75+.7,0))}else if(W==="paslanmaz-kanal"){let H=f(.85,.85,4.6,32,s.stainless,0,0,0,0,Math.PI/2,!0);g.add(H),g.add(o(4.6-.02,.02,.03,s.aluFrame,0,.85,0)),[-4.6/2,4.6/2].forEach(ee=>{g.add(f(.85+.2,.85+.2,.08,32,s.stainless,ee,0,0,0,Math.PI/2,!0));for(let re=0;re<8;re++){let q=re/8*Math.PI*2;g.add(o(.12,.04,.04,s.doorHandle,ee,Math.sin(q)*(.85+.1),Math.cos(q)*(.85+.1)))}}),g.add(f(.32,.32,.06,16,s.stainless,0,0,.85+.02,Math.PI/2)),[-.15,.15].forEach(ee=>{g.add(o(.04,.08,.06,s.doorHandle,ee,0,.85+.07))})}else{g.add(o(4.6,.04,2.4,s.galvSteel,0,2/2,0),o(4.6,.04,2.4,s.galvSteel,0,-2/2,0),o(4.6,2,.04,s.galvSteel,0,0,-2.4/2));let H=o(.9,2,.04,s.galvSteel,-4.6/2+.45,0,2.4/2),ee=o(.9,2,.04,s.galvSteel,4.6/2-.45,0,2.4/2),re=o(4.6-1.8,2-.3,.03,s.panelCutaway,0,0,2.4/2,!1,!1);g.add(H,ee,re),A.push(re),g.add(o(4.6-1.9,2-.4,.08,s.filterCloth,0,0,2.4/2-.06)),[-4.6/2,4.6/2].forEach(q=>{g.add(o(.08,.14,2.4+.24,s.aluFrame,q,2/2+.05,0),o(.08,.14,2.4+.24,s.aluFrame,q,-2/2-.05,0),o(.08,2,.14,s.aluFrame,q,0,2.4/2+.05),o(.08,2,.14,s.aluFrame,q,0,-2.4/2-.05)),[-2/2-.05,2/2+.05].forEach(Ne=>{[-2.4/2-.05,2.4/2+.05].forEach(ye=>{g.add(o(.1,.16,.16,s.baseSkid,q,Ne,ye))})})}),g.add(o(4.6-.8,.02,.02,s.aluFrame,0,2/2+.02,0))}}function $(g,W){if(W==="menfez"){g.add(o(.24,.14,3.4+.2,s.aluFrame,0,2.2/2+.05,0),o(.24,.14,3.4+.2,s.aluFrame,0,-2.2/2-.05,0),o(.24,2.2,.14,s.aluFrame,0,0,3.4/2+.05),o(.24,2.2,.14,s.aluFrame,0,0,-3.4/2-.05));for(let H=-2.2/2+.2;H<=2.2/2-.15;H+=.24){let ee=o(.08,.02,3.3,s.damperBlade,.09,H,0);ee.rotation.z=.22,g.add(ee)}for(let H=-3.4/2+.25;H<=3.4/2-.2;H+=.28){let ee=o(.06,2.1500000000000004,.02,s.damperBlade,0,0,H);ee.rotation.y=.2,g.add(ee)}g.add(o(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,2.2/2-.04,0),o(.12,.08,3.4-.1,s.motorCast,-.24/2-.04,-2.2/2+.04,0)),g.add(o(.08,.12,.08,s.brassGold,.24/2+.02,2.2/2-.1,3.4/2-.1))}else if(W==="difuzor"){g.add(o(3.4,.03,1.5,s.galvSteel,0,1.3/2+.3,0),o(3.4,1.3,.03,s.galvSteel,0,.3,-1.5/2),o(3.4,1.3,.03,s.galvSteel,0,.3,1.5/2)),g.add(f(.42,.42,.35,24,s.galvSteel,-3.4/2-.15,.3,0,0,Math.PI/2,!0)),g.add(o(3.4+.2,.06,1.5+.2,s.aluFrame,0,-1.3/2+.3,0)),[-.35,0,.35].forEach(ee=>{g.add(o(3.4-.1,.04,.06,s.doorHandle,0,-1.3/2+.26,ee))});let H=o(1.8,.04,1.8,s.panelSolid,0,-1,0);g.add(H);for(let ee=0;ee<16;ee++){let re=ee/16*Math.PI*2,q=o(.03,.02,.36,s.doorHandle,Math.sin(re)*.55,-.98,Math.cos(re)*.55);q.rotation.y=re+.5,g.add(q)}}else{g.add(o(1.4,.04,2.4,s.galvSteel,0,2.2/2,0),o(1.4,.04,2.4,s.galvSteel,0,-2.2/2,0),o(1.4,2.2,.04,s.galvSteel,0,0,-2.4/2),o(1.4,2.2,.04,s.galvSteel,0,0,2.4/2)),[-1.4/2,1.4/2].forEach(ee=>{g.add(o(.08,.14,2.4+.2,s.aluFrame,ee,2.2/2+.05,0),o(.08,.14,2.4+.2,s.aluFrame,ee,-2.2/2-.05,0),o(.08,2.2,.14,s.aluFrame,ee,0,2.4/2+.05),o(.08,2.2,.14,s.aluFrame,ee,0,-2.4/2-.05))});for(let ee=-2.2/2+.35;ee<=2.2/2-.25;ee+=.5){let re=o(.35,.04,2.28,s.damperBlade,0,ee,0);re.rotation.z=.35,g.add(re)}g.add(o(.03,2.2-.4,.03,s.brassGold,.15,0,2.4/2-.08));let H=o(.22,.34,.18,s.actuatorOrange,.1,.2,2.4/2+.14);g.add(H),g.add(f(.025,.025,.15,12,s.motorCast,.1,.2,2.4/2+.04,Math.PI/2)),g.add(f(.03,.03,.12,12,s.brassGold,-.2,.2,2.4/2+.08,Math.PI/2))}}function ae(g){g.add(o(4.4,.04,2.2,s.galvSteel,0,2.4/2,0),o(4.4,.04,2.2,s.galvSteel,0,-2.4/2,0),o(4.4,2.4,.04,s.galvSteel,0,0,-2.2/2)),[-4.4/2,4.4/2].forEach(ye=>{g.add(o(.08,.12,2.2+.2,s.aluFrame,ye,2.4/2+.04,0),o(.08,.12,2.2+.2,s.aluFrame,ye,-2.4/2-.04,0),o(.08,2.4,.12,s.aluFrame,ye,0,2.2/2+.04),o(.08,2.4,.12,s.aluFrame,ye,0,-2.2/2-.04))});let W=o(4.4-.1,2.4-.1,.03,s.panelCutaway,0,0,2.2/2,!1,!1);g.add(W),A.push(W);let H=o(.12,2.4-.2,2.2-.2,s.aluFrame,-1.4,0,0),ee=o(.1,2.4-.25,2.2-.25,s.filterCloth,-1.4,0,0);g.add(H,ee),g.add(o(.1,2.4-.2,2.2-.2,s.aluFrame,-.2,0,0));for(let ye=0;ye<4;ye++){let Ce=-.7+ye*.46,Ae=new jt(new wa(.2,1.1,4),s.filterCloth);Ae.rotateZ(-Math.PI/2),Ae.position.set(.4,0,Ce),Ae.scale.set(1,1.3,.75),g.add(Ae)}let re=o(.25,2.4-.2,2.2-.2,s.aluFrame,1.4,0,0),q=o(.22,2.4-.26,2.2-.26,s.filterCloth,1.4,0,0),Ne=o(.26,2.4-.18,.04,s.coolingFin,1.4,0,2.2/2-.1);g.add(re,q,Ne),[-1,.6].forEach(ye=>{g.add(f(.09,.09,.04,16,s.aluFrame,ye,.6,2.2/2+.03,Math.PI/2))})}function it(g,W){if(W==="vrf-dis"){g.add(o(3.2,3.6,.04,s.panelSolid,0,0,-2/2),o(3.2,.04,2,s.panelSolid,0,3.6/2,0),o(3.2,.12,2,s.baseSkid,0,-3.6/2,0),o(.04,3.6-.2,2-.1,s.coolingFin,-3.2/2,.05,0),o(.04,3.6-.2,2-.1,s.coolingFin,3.2/2,.05,0));let H=o(3.2-.1,3.6-.2,.03,s.panelCutaway,0,.05,2/2,!1,!1);g.add(H),A.push(H);let ee=f(.82,.82,.22,28,s.fanHousing,0,3.6/2+.11,0,0,0,!0),re=f(.72,.72,.05,4,s.fanImpeller,0,3.6/2+.14,0);g.add(ee,re),T.push(()=>{re.rotation.y+=.16}),[-.6,.6].forEach(q=>{g.add(f(.26,.26,.9,16,s.motorCast,q,-3.6/2+.6,-.2))}),g.add(f(.22,.22,1.1,16,s.motorCast,-1.1,-3.6/2+.7,.2)),g.add(o(3.2-.2,2.6,.1,s.coolingFin,0,.2,-2/2+.08)),g.add(o(.22,.18,.14,s.brassGold,1.1,-3.6/2+.4,2/2+.05))}else if(W==="vrf-ic"){let H=new Xt;H.rotation.x=-Math.PI+.55,g.add(H);let ee=o(2.8,.8,2.8,s.galvSteel,0,.5,0),re=o(3.2,.08,3.2,s.panelSolid,0,.05,0);H.add(ee,re);let q=o(1.6,.02,1.6,s.filterCloth,0,.02,0);H.add(q),[[0,1.35,0],[0,-1.35,0],[1.35,0,Math.PI/2],[-1.35,0,Math.PI/2]].forEach(([ye,Ce,Ae])=>{let ze=o(1.7,.03,.16,s.doorHandle,ye,.01,Ce);ze.rotation.y=Ae,H.add(ze)});let Ne=f(.65,.65,.35,20,s.fanImpeller,0,.5,0);H.add(Ne),T.push(()=>{Ne.rotation.y+=.14}),H.add(o(.18,.22,.18,s.actuatorOrange,1.3,.5,.8)),H.add(f(.04,.04,.3,12,s.copperPipe,1.45,.5,-.4,0,Math.PI/2))}else{let H=o(4.6,.04,2,s.stainless,0,.8,-.3),ee=o(4.6,1.6,.04,s.stainless,0,0,-2.6/2),re=o(.04,1.6,2.6,s.stainless,-4.6/2,0,0),q=o(.04,1.6,2.6,s.stainless,4.6/2,0,0),Ne=o(4.6,.9,.04,s.stainless,0,.25,2.6/2-.2);Ne.rotation.x=.5,g.add(H,ee,re,q,Ne),g.add(f(.55,.55,.3,24,s.stainless,0,1.6/2+.15,-.3,0,0,!0));for(let ye=-4.6/2+.6;ye<=4.6/2-.6;ye+=.75){let Ce=o(.68,.04,1.3,s.aluFrame,ye,-.2,.1);Ce.rotation.x=-.4,g.add(Ce)}g.add(f(.1,.08,.18,16,s.stainless,4.6/2-.3,-1.6/2-.08,2.6/2-.2)),g.add(f(.02,.02,4.6-.6,12,s.stainless,0,-.05,.85,0,Math.PI/2)),[-1.4,-.5,.5,1.4].forEach(ye=>{let Ce=f(.035,.02,.09,10,s.brassGold,ye,-.12,.85);g.add(Ce)}),g.add(o(.14,.2,.08,s.actuatorOrange,4.6/2+.03,-.3,2.6/2-.2))}}i==="tks"?L(w):i==="thks"?O(w):i==="rooftop"?J(w):i==="galvaniz-kanal"?ie(w):["thrv-dx","hrv"].includes(i)?N(w,i):["tdf","yangin-fani","jet-fan"].includes(i)?G(w,i):["spiral-kanal","paslanmaz-kanal"].includes(i)?K(w,i):["menfez","difuzor","damper"].includes(i)?$(w,i):i==="filtre"?ae(w):["vrf-dis","vrf-ic","davlumbaz"].includes(i)?it(w,i):L(w),w.updateMatrixWorld(!0);let Fe=new pa().setFromObject(w),ct=Fe.getSize(new F),Qe=Fe.getCenter(new F);w.position.sub(Qe);let Z=-ct.y/2;R.position.y=Z-.05,B.position.y=Z-.04;let le=Math.max(ct.x,ct.y,ct.z),pe=h.fov*(Math.PI/180),Be=Math.abs(le/2/Math.tan(pe/2))*1.05;Be=Math.max(Be,3.8);let We=new F(Be*.72,Be*.38,Be*.74),Te=new F(0,0,0);h.position.copy(We),h.lookAt(Te),u.target.copy(Te),u.update();let Mt=null;function xt(g,W,H=650){let ee=h.position.clone(),re=u.target.clone(),q=performance.now();Mt={update:Ne=>{let ye=Ne-q,Ce=Math.min(1,ye/H),Ae=Ce*Ce*(3-2*Ce);h.position.lerpVectors(ee,g,Ae),u.target.lerpVectors(re,W,Ae),u.update(),Ce>=1&&(Mt=null)}}}let Ye=new Xt;a.add(Ye);let wt=80,Qt=[],ci=new Float32Array(wt*3),St=new Float32Array(wt*3),ii=i==="tks",Bt=i==="thks",Ot=i==="rooftop",I=i==="galvaniz-kanal",Gt=ii||Bt,Et=Math.max(2,ct.x/2+.4),Dt=Math.max(1,ct.y*.45),y=Math.max(1,ct.z*.45);for(let g=0;g<wt;g++){let W=Gt?g<wt*.7:Ot?g<wt*.6:g<wt*.65;Qt.push({isSupply:W,progress:Math.random(),speed:(Gt?.006:I?.009:.005)+Math.random()*.004,offsetY:(Math.random()-.5)*(Gt?.35:Dt),offsetZ:(Math.random()-.5)*(Gt?.7:y)}),W?(St[g*3]=.02,St[g*3+1]=.65,St[g*3+2]=.98):(St[g*3]=.95,St[g*3+1]=.45,St[g*3+2]=.12)}let x=new Mi;x.setAttribute("position",new Pi(ci,3)),x.setAttribute("color",new Pi(St,3));let P=document.createElement("canvas");P.width=32,P.height=32;let Y=P.getContext("2d"),te=Y.createRadialGradient(16,16,0,16,16,16);te.addColorStop(0,"rgba(255, 255, 255, 1)"),te.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),te.addColorStop(1,"rgba(0, 0, 0, 0)"),Y.fillStyle=te,Y.fillRect(0,0,32,32);let me=new hl(P),Se=new xh({size:.15,map:me,transparent:!0,opacity:.85,vertexColors:!0,blending:Es,depthWrite:!1}),U=new du(x,Se);Ye.add(U),T.push(()=>{if(!de.cfdEnabled){Ye.visible=!1;return}Ye.visible=!0;let g=x.attributes.position.array;for(let W=0;W<wt;W++){let H=Qt[W];if(H.progress+=H.speed,H.progress>1&&(H.progress=0),Gt)H.isSupply?(g[W*3]=-4.3+H.progress*8.6,g[W*3+1]=-.65+Math.sin(H.progress*Math.PI*4)*.08+H.offsetY,g[W*3+2]=H.offsetZ):(g[W*3]=1.2-H.progress*5.5,g[W*3+1]=.65+H.offsetY,g[W*3+2]=H.offsetZ);else if(Ot)if(H.isSupply){let ee=-.4+H.progress*2.8;if(g[W*3]=ee,H.progress>.8){let re=(H.progress-.8)/.2;g[W*3+1]=.05-re*1.35+H.offsetY*.4}else g[W*3+1]=.05+Math.sin(H.progress*Math.PI*3)*.06+H.offsetY*.6;g[W*3+2]=H.offsetZ*.7}else{let ee=W%2===0?-2.2:-1.2;g[W*3]=ee+Math.sin(W*1.5+H.progress*6.28)*.22,g[W*3+1]=-.2+H.progress*2.1,g[W*3+2]=Math.cos(W*1.5+H.progress*6.28)*.22}else if(I){let ee=-2.7+H.progress*5.1;g[W*3]=ee,g[W*3+1]=Math.sin(H.progress*Math.PI*2+W)*.06+H.offsetY*.5,g[W*3+2]=H.progress>.7&&W%3===0?-.3-(H.progress-.7)*1.5:H.offsetZ*.75}else g[W*3]=-Et+H.progress*(Et*2),g[W*3+1]=(H.isSupply?-.2:.2)+H.offsetY,g[W*3+2]=H.offsetZ}x.attributes.position.needsUpdate=!0});let ue=new Xt;a.add(ue);function ve(g){let W=document.createElement("canvas");W.width=64,W.height=64;let H=W.getContext("2d");H.fillStyle="#0284c7",H.beginPath(),H.arc(32,32,28,0,Math.PI*2),H.fill(),H.lineWidth=4,H.strokeStyle="#ffffff",H.stroke(),H.fillStyle="#ffffff",H.font="bold 26px sans-serif",H.textAlign="center",H.textBaseline="middle",H.fillText(g,32,33);let ee=new hl(W);return ee.minFilter=oi,ee}let Ie=r&&r.hotspots&&r.hotspots.length>0?r.hotspots:[{num:"01",title:"Gövde & Taşıyıcı Mimarisi",desc:"Eurovent ve TSE standartlarında yüksek mukavemetli karkas."},{num:"02",title:"Yüksek Verimli İç Aksam",desc:"Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi."},{num:"03",title:"Hava Dağıtım & Kontrol",desc:"Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları."}],oe=[[-3.8,1.1,1.08],[-1.8,-.4,1.08],[0,.2,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08],[-3.8,-.5,1.08]],Oe=[[-3.6,1.1,1.08],[-1.8,-.4,1.08],[1.3,-.4,1.08],[2.8,-.4,1.08]],ke=[[-1.8,-.4,1.18],[-1.7,1.32,.2],[-.1,.25,1.18],[2.3,-1.25,1.18]],qe=[[1.35,.15,.75],[.4,.52,.75],[-.8,.48,.75],[-1.6,.48,.75]],yt=[];Ie.forEach((g,W)=>{let H=new Xt,ee,re,q;if(ii&&oe[W])[ee,re,q]=oe[W];else if(Bt&&Oe[W])[ee,re,q]=Oe[W];else if(Ot&&ke[W])[ee,re,q]=ke[W];else if(I&&qe[W])[ee,re,q]=qe[W];else{let Ae=Ie.length,ze=ct.z>ct.x,ut=ze?ct.z:ct.x,Ct=-ut/2+.4+W/Math.max(1,Ae-1)*(ut-.8);ee=ze?ct.x/2+.4:Ct,re=W%2===0?-.2:.4,q=ze?Ct:ct.z/2+.4}H.position.set(ee,re,q);let Ne=new jt(new uo(.012,.012,.25,8),new In({color:165063}));Ne.position.y=-.12;let ye=new _h({map:ve(g.num||`0${W+1}`),depthTest:!1}),Ce=new su(ye);Ce.scale.set(.42,.42,1),Ce.position.y=.05,Ce.userData={hotspot:g,pos:[ee,re,q]},H.add(Ne,Ce),ue.add(H),H.userData={hotspot:g,pos:[ee,re,q]},yt.push(Ce)});let D=new Cu,Q=new Ge;function ne(g){let W=c.domElement.getBoundingClientRect();Q.x=(g.clientX-W.left)/W.width*2-1,Q.y=-((g.clientY-W.top)/W.height)*2+1,D.setFromCamera(Q,h);let H=D.intersectObjects(yt,!0);if(H.length>0){let ee=H[0].object;for(;ee.parent&&!ee.userData.hotspot;)ee=ee.parent;if(ee&&ee.userData.hotspot){showHotspotCard(ee.userData.hotspot);let re=ee.userData.pos;if(re){let q=new F(re[0],re[1],re[2]),Ne=new F(re[0]*.8+1.2,re[1]+.5,re[2]+2.8);xt(Ne,q,700)}}}}c.domElement.addEventListener("click",ne);let de={autoRotate:!0,cfdEnabled:!0,cutawayEnabled:!0,viewMode:"3d"};Xg(),jg(t,r,{onToggleRotate:()=>{de.autoRotate=!de.autoRotate,u.autoRotate=de.autoRotate,rr("btn-rotate",de.autoRotate)},onToggleCfd:()=>{de.cfdEnabled=!de.cfdEnabled,rr("btn-cfd",de.cfdEnabled)},onToggleCutaway:()=>{de.cutawayEnabled=!de.cutawayEnabled,A.forEach(g=>{let W=g.userData.solidMat||s.panelSolid,H=g.userData.cutawayMat||s.panelCutaway;g.material=de.cutawayEnabled?H:W}),rr("btn-cutaway",de.cutawayEnabled)},onToggleView:()=>{let g=(t.closest(".sky-vlog-hero")||t.parentElement||t).querySelector("#sky-product-2d-view")||document.getElementById("sky-product-2d-view"),W=g&&window.getComputedStyle(g).display!=="none";g&&(W?(g.style.display="none",t.style.display="block",de.viewMode="3d",rr("btn-view",!1),Ee()):(g.style.display="flex",t.style.display="none",de.viewMode="2d",rr("btn-view",!0)))},onResetCamera:()=>{xt(We,Te,650),window.closeHotspotCard()}}),rr("btn-rotate",de.autoRotate),rr("btn-cfd",de.cfdEnabled),rr("btn-cutaway",de.cutawayEnabled),rr("btn-view",de.viewMode==="2d");let De=null;function se(){De=requestAnimationFrame(se),Mt?Mt.update(performance.now()):u.update();for(let g=0;g<T.length;g++)T[g]();c.render(a,h)}se();function Ee(){if(!t)return;let g=t.clientWidth,W=t.clientHeight||480;g>0&&W>0&&(h.aspect=g/W,h.updateProjectionMatrix(),c.setSize(g,W))}return window.addEventListener("resize",Ee),{destroy:()=>{cancelAnimationFrame(De),window.removeEventListener("resize",Ee),c.dispose()}}}function Xg(){if(document.getElementById("sky-3d-hud-styles"))return;let e=document.createElement("style");e.id="sky-3d-hud-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function jg(e,t,i){let r=e.closest(".sky-vlog-hero")||e.parentElement||e,a=r.querySelector(".sky-3d-hud-container");a&&a.remove(),a=document.createElement("div"),a.className="sky-3d-hud-container",a.innerHTML=`
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
  `,r.appendChild(n),document.getElementById("btn-rotate").addEventListener("click",i.onToggleRotate),document.getElementById("btn-cfd").addEventListener("click",i.onToggleCfd),document.getElementById("btn-cutaway").addEventListener("click",i.onToggleCutaway),document.getElementById("btn-view").addEventListener("click",i.onToggleView),document.getElementById("btn-reset").addEventListener("click",i.onResetCamera)}function rr(e,t){let i=document.getElementById(e);i&&(t?i.classList.add("active"):i.classList.remove("active"))}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num||"01",document.getElementById("sky-card-title").textContent=e.title||"",document.getElementById("sky-card-desc").textContent=e.desc||"",t.style.display="block")};window.closeHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Wl()):Wl();/*! Bundled license information:

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
