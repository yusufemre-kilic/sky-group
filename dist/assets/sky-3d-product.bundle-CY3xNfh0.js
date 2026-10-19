var Ys="186",wr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mh=0,uo=1,gh=2,$r=1,_h=2,Zr=3,$i=0,Wt=1,bi=2,wi=0,Qr=1,es=2,co=3,po=4,vh=5,xr=100,Mh=101,Sh=102,xh=103,Eh=104,yh=200,bh=201,Th=202,wh=203,Sl=204,xl=205,Ah=206,Rh=207,Ch=208,Ph=209,Lh=210,Dh=211,Uh=212,Nh=213,Ih=214,ts=0,is=1,rs=2,ta=3,as=4,ns=5,ss=6,os=7,El=0,Oh=1,Fh=2,pi=0,yl=1,bl=2,Tl=3,qs=4,wl=5,Al=6,Rl=7,Cl=300,Qi=301,Nr=302,vn=303,Mn=304,dn=306,ls=1e3,Ti=1001,hs=1002,Dt=1003,Bh=1004,Ma=1005,Ut=1006,Sn=1007,Ki=1008,Yt=1009,Pl=1010,Ll=1011,ia=1012,Ks=1013,fi=1014,ci=1015,mi=1016,Zs=1017,Js=1018,ra=1020,Dl=35902,Ul=35899,Nl=1021,Il=1022,ni=1023,Ri=1026,Zi=1027,Ol=1028,$s=1029,er=1030,Qs=1031,eo=1033,Ka=33776,Za=33777,Ja=33778,$a=33779,us=35840,cs=35841,ds=35842,ps=35843,fs=36196,ms=37492,gs=37496,_s=37488,vs=37489,an=37490,Ms=37491,Ss=37808,xs=37809,Es=37810,ys=37811,bs=37812,Ts=37813,ws=37814,As=37815,Rs=37816,Cs=37817,Ps=37818,Ls=37819,Ds=37820,Us=37821,Ns=36492,Is=36494,Os=36495,Fs=36283,Bs=36284,nn=36285,zs=36286,zh=3200,Hs=0,Hh=1,Oi="",Jt="srgb",sn="srgb-linear",on="linear",it="srgb",xn=7680,Vh=519,kh=512,Gh=513,Wh=514,to=515,Xh=516,jh=517,io=518,Yh=519,Fl=35044,fo="300 es",di=2e3,aa=2001;function qh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ln(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Kh(){let e=ln("canvas");return e.style.display="block",e}var mo={};function hn(...e){let t="THREE."+e.shift();console.log(t,...e)}function Bl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ne(...e){e=Bl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Je(...e){e=Bl(e);let t="THREE."+e.shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ar(...e){let t=e.join(" ");t in mo||(mo[t]=!0,Ne(...e))}function Zh(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Jh={[ts]:is,[rs]:ss,[as]:os,[ta]:ns,[is]:ts,[ss]:rs,[os]:as,[ns]:ta},zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Vs=180/Math.PI;function Fi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[e&255]+Ot[e>>8&255]+Ot[e>>16&255]+Ot[e>>24&255]+"-"+Ot[t&255]+Ot[t>>8&255]+"-"+Ot[t>>16&15|64]+Ot[t>>24&255]+"-"+Ot[i&63|128]+Ot[i>>8&255]+"-"+Ot[i>>16&255]+Ot[i>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function We(e,t,i){return Math.max(t,Math.min(i,e))}function $h(e,t){return(e%t+t)%t}function En(e,t,i){return(1-i)*e+i*t}function ui(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qh={DEG2RAD:Qa},Cr,Le=(Cr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cr.prototype.isVector2=!0,Cr),Bi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],p=a[n+0],u=a[n+1],m=a[n+2],E=a[n+3];if(c!==E||o!==p||l!==u||h!==m){let y=o*p+l*u+h*m+c*E;y<0&&(p=-p,u=-u,m=-m,E=-E,y=-y);let g=1-s;if(y<.9995){let d=Math.acos(y),R=Math.sin(d);g=Math.sin(g*d)/R,s=Math.sin(s*d)/R,o=o*g+p*s,l=l*g+u*s,h=h*g+m*s,c=c*g+E*s}else{o=o*g+p*s,l=l*g+u*s,h=h*g+m*s,c=c*g+E*s;let d=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=d,l*=d,h*=d,c*=d}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],p=a[n+1],u=a[n+2],m=a[n+3];return e[t]=s*m+h*c+o*u-l*p,e[t+1]=o*m+h*p+l*c-s*u,e[t+2]=l*m+h*u+s*p-o*c,e[t+3]=h*m-s*c-o*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),p=o(i/2),u=o(r/2),m=o(a/2);switch(n){case"XYZ":this._x=p*h*c+l*u*m,this._y=l*u*c-p*h*m,this._z=l*h*m+p*u*c,this._w=l*h*c-p*u*m;break;case"YXZ":this._x=p*h*c+l*u*m,this._y=l*u*c-p*h*m,this._z=l*h*m-p*u*c,this._w=l*h*c+p*u*m;break;case"ZXY":this._x=p*h*c-l*u*m,this._y=l*u*c+p*h*m,this._z=l*h*m+p*u*c,this._w=l*h*c-p*u*m;break;case"ZYX":this._x=p*h*c-l*u*m,this._y=l*u*c+p*h*m,this._z=l*h*m-p*u*c,this._w=l*h*c+p*u*m;break;case"YZX":this._x=p*h*c+l*u*m,this._y=l*u*c+p*h*m,this._z=l*h*m-p*u*c,this._w=l*h*c-p*u*m;break;case"XZY":this._x=p*h*c-l*u*m,this._y=l*u*c-p*h*m,this._z=l*h*m+p*u*c,this._w=l*h*c+p*u*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],p=i+s+c;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pr,B=(Pr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(go.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(go.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*h+s*p-o*c,this.y=r+l*c+o*h-n*p,this.z=a+l*p+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yn.copy(this).projectOnVector(t),this.sub(yn)}reflect(t){return this.sub(yn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pr.prototype.isVector3=!0,Pr),yn=new B,go=new Bi,Lr,Ve=(Lr=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],p=r[7],u=r[2],m=r[5],E=r[8],y=a[0],g=a[3],d=a[6],R=a[1],O=a[4],M=a[7],b=a[2],w=a[5],T=a[8];return n[0]=s*y+o*R+l*b,n[3]=s*g+o*O+l*w,n[6]=s*d+o*M+l*T,n[1]=h*y+c*R+p*b,n[4]=h*g+c*O+p*w,n[7]=h*d+c*M+p*T,n[2]=u*y+m*R+E*b,n[5]=u*g+m*O+E*w,n[8]=u*d+m*M+E*T,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],p=c*s-o*h,u=o*l-c*n,m=h*n-s*l,E=i*p+r*u+a*m;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/E;return t[0]=p*y,t[1]=(a*h-c*r)*y,t[2]=(o*r-a*s)*y,t[3]=u*y,t[4]=(c*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=m*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bn.makeScale(t,i)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bn.makeRotation(-t)),this}translate(t,i){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lr.prototype.isMatrix3=!0,Lr),bn=new Ve,_o=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vo=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let e={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===it&&(a.r=Ai(a.r),a.g=Ai(a.g),a.b=Ai(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===it&&(a.r=Rr(a.r),a.g=Rr(a.g),a.b=Rr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Oi?on:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[sn]:{primaries:t,whitePoint:r,transfer:on,toXYZ:_o,fromXYZ:vo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:t,whitePoint:r,transfer:it,toXYZ:_o,fromXYZ:vo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),e}var Ke=eu();function Ai(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Rr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ar,tu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=ln("canvas")),ar.width=e.width,ar.height=e.height;let r=ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ln("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ai(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iu=0,ro=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Tn(r[n].image)):a.push(Tn(r[n]))}else a=Tn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Tn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var ru=0,wn=new B,ei=class en extends zi{constructor(t=en.DEFAULT_IMAGE,i=en.DEFAULT_MAPPING,r=Ti,a=Ti,n=Ut,s=Ki,o=ni,l=Yt,h=en.DEFAULT_ANISOTROPY,c=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Fi(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wn).x}get height(){return this.source.getSize(wn).y}get depth(){return this.source.getSize(wn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ne(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case hs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case hs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Cl;ei.DEFAULT_ANISOTROPY=1;var Dr,vt=(Dr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],p=s[5],u=s[9],m=s[2],E=s[6],y=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-m)<.01&&Math.abs(u-E)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+m)<.1&&Math.abs(u+E)<.1&&Math.abs(o+p+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,R=(p+1)/2,O=(y+1)/2,M=(l+c)/4,b=(h+m)/4,w=(u+E)/4;return d>R&&d>O?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=M/r,n=b/r):R>O?R<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(R),r=M/a,n=w/a):O<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(O),r=b/n,a=w/n),this.set(r,a,n,i),this}let g=Math.sqrt((E-u)*(E-u)+(h-m)*(h-m)+(c-l)*(c-l));return Math.abs(g)<.001&&(g=1),this.x=(E-u)/g,this.y=(h-m)/g,this.z=(c-l)/g,this.w=Math.acos((o+p+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this.w=We(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this.w=We(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dr.prototype.isVector4=!0,Dr),au=class extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new ei(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ro(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends au{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},zl=class extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nu=class extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ji,pt=(Ji=class{constructor(t,i,r,a,n,s,o,l,h,c,p,u,m,E,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,p,u,m,E,y,g)}set(t,i,r,a,n,s,o,l,h,c,p,u,m,E,y,g){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=l,d[2]=h,d[6]=c,d[10]=p,d[14]=u,d[3]=m,d[7]=E,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ji().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/nr.setFromMatrixColumn(t,0).length(),n=1/nr.setFromMatrixColumn(t,1).length(),s=1/nr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let u=s*c,m=s*p,E=o*c,y=o*p;i[0]=l*c,i[4]=-l*p,i[8]=h,i[1]=m+E*h,i[5]=u-y*h,i[9]=-o*l,i[2]=y-u*h,i[6]=E+m*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,m=l*p,E=h*c,y=h*p;i[0]=u+y*o,i[4]=E*o-m,i[8]=s*h,i[1]=s*p,i[5]=s*c,i[9]=-o,i[2]=m*o-E,i[6]=y+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,m=l*p,E=h*c,y=h*p;i[0]=u-y*o,i[4]=-s*p,i[8]=E+m*o,i[1]=m+E*o,i[5]=s*c,i[9]=y-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,m=s*p,E=o*c,y=o*p;i[0]=l*c,i[4]=E*h-m,i[8]=u*h+y,i[1]=l*p,i[5]=y*h+u,i[9]=m*h-E,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,m=s*h,E=o*l,y=o*h;i[0]=l*c,i[4]=y-u*p,i[8]=E*p+m,i[1]=p,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=m*p+E,i[10]=u-y*p}else if(t.order==="XZY"){let u=s*l,m=s*h,E=o*l,y=o*h;i[0]=l*c,i[4]=-p,i[8]=h*c,i[1]=u*p+y,i[5]=s*c,i[9]=m*p-E,i[2]=E*p-m,i[6]=o*c,i[10]=y*p+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ou)}lookAt(t,i,r){let a=this.elements;return Xt.subVectors(t,i),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Li.crossVectors(r,Xt),Li.lengthSq()===0&&(Math.abs(r.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Li.crossVectors(r,Xt)),Li.normalize(),Sa.crossVectors(Xt,Li),a[0]=Li.x,a[4]=Sa.x,a[8]=Xt.x,a[1]=Li.y,a[5]=Sa.y,a[9]=Xt.y,a[2]=Li.z,a[6]=Sa.z,a[10]=Xt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],p=r[5],u=r[9],m=r[13],E=r[2],y=r[6],g=r[10],d=r[14],R=r[3],O=r[7],M=r[11],b=r[15],w=a[0],T=a[4],f=a[8],S=a[12],I=a[1],N=a[5],F=a[9],z=a[13],A=a[2],k=a[6],J=a[10],W=a[14],le=a[3],q=a[7],K=a[11],j=a[15];return n[0]=s*w+o*I+l*A+h*le,n[4]=s*T+o*N+l*k+h*q,n[8]=s*f+o*F+l*J+h*K,n[12]=s*S+o*z+l*W+h*j,n[1]=c*w+p*I+u*A+m*le,n[5]=c*T+p*N+u*k+m*q,n[9]=c*f+p*F+u*J+m*K,n[13]=c*S+p*z+u*W+m*j,n[2]=E*w+y*I+g*A+d*le,n[6]=E*T+y*N+g*k+d*q,n[10]=E*f+y*F+g*J+d*K,n[14]=E*S+y*z+g*W+d*j,n[3]=R*w+O*I+M*A+b*le,n[7]=R*T+O*N+M*k+b*q,n[11]=R*f+O*F+M*J+b*K,n[15]=R*S+O*z+M*W+b*j,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],p=t[6],u=t[10],m=t[14],E=t[3],y=t[7],g=t[11],d=t[15],R=l*m-h*u,O=o*m-h*p,M=o*u-l*p,b=s*m-h*c,w=s*u-l*c,T=s*p-o*c;return i*(y*R-g*O+d*M)-r*(E*R-g*b+d*w)+a*(E*O-y*b+d*T)-n*(E*M-y*w+g*T)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],p=t[9],u=t[10],m=t[11],E=t[12],y=t[13],g=t[14],d=t[15],R=i*o-r*s,O=i*l-a*s,M=i*h-n*s,b=r*l-a*o,w=r*h-n*o,T=a*h-n*l,f=c*y-p*E,S=c*g-u*E,I=c*d-m*E,N=p*g-u*y,F=p*d-m*y,z=u*d-m*g,A=R*z-O*F+M*N+b*I-w*S+T*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/A;return t[0]=(o*z-l*F+h*N)*k,t[1]=(a*F-r*z-n*N)*k,t[2]=(y*T-g*w+d*b)*k,t[3]=(u*w-p*T-m*b)*k,t[4]=(l*I-s*z-h*S)*k,t[5]=(i*z-a*I+n*S)*k,t[6]=(g*M-E*T-d*O)*k,t[7]=(c*T-u*M+m*O)*k,t[8]=(s*F-o*I+h*f)*k,t[9]=(r*I-i*F-n*f)*k,t[10]=(E*w-y*M+d*R)*k,t[11]=(p*M-c*w-m*R)*k,t[12]=(o*S-s*N-l*f)*k,t[13]=(i*N-r*S+a*f)*k,t[14]=(y*O-E*b-g*R)*k,t[15]=(c*b-p*O+u*R)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,p=o+o,u=n*h,m=n*c,E=n*p,y=s*c,g=s*p,d=o*p,R=l*h,O=l*c,M=l*p,b=r.x,w=r.y,T=r.z;return a[0]=(1-(y+d))*b,a[1]=(m+M)*b,a[2]=(E-O)*b,a[3]=0,a[4]=(m-M)*w,a[5]=(1-(u+d))*w,a[6]=(g+R)*w,a[7]=0,a[8]=(E+O)*T,a[9]=(g-R)*T,a[10]=(1-(u+y))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=nr.set(a[0],a[1],a[2]).length(),o=nr.set(a[4],a[5],a[6]).length(),l=nr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),ii.copy(this);let h=1/s,c=1/o,p=1/l;return ii.elements[0]*=h,ii.elements[1]*=h,ii.elements[2]*=h,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=p,ii.elements[9]*=p,ii.elements[10]*=p,i.setFromRotationMatrix(ii),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=di,l=!1){let h=this.elements,c=2*n/(i-t),p=2*n/(r-a),u=(i+t)/(i-t),m=(r+a)/(r-a),E,y;if(l)E=n/(s-n),y=s*n/(s-n);else if(o===di)E=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===aa)E=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=di,l=!1){let h=this.elements,c=2/(i-t),p=2/(r-a),u=-(i+t)/(i-t),m=-(r+a)/(r-a),E,y;if(l)E=1/(s-n),y=s/(s-n);else if(o===di)E=-2/(s-n),y=-(s+n)/(s-n);else if(o===aa)E=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=p,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=E,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Ji.prototype.isMatrix4=!0,Ji),nr=new B,ii=new pt,su=new B(0,0,0),ou=new B(1,1,1),Li=new B,Sa=new B,Xt=new B,Mo=new pt,So=new Bi,Ir=class Hl{constructor(t=0,i=0,r=0,a=Hl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],p=a[2],u=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return So.setFromEuler(this),this.setFromQuaternion(So,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ir.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lu=0,xo=new B,sr=new Bi,vi=new pt,xa=new B,Hr=new B,hu=new B,uu=new Bi,Eo=new B(1,0,0),yo=new B(0,1,0),bo=new B(0,0,1),To={type:"added"},cu={type:"removed"},or={type:"childadded",child:null},An={type:"childremoved",child:null},kt=class tn extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();let t=new B,i=new Ir,r=new Bi,a=new B(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return sr.setFromAxisAngle(t,i),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,i){return sr.setFromAxisAngle(t,i),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(Eo,t)}rotateY(t){return this.rotateOnAxis(yo,t)}rotateZ(t){return this.rotateOnAxis(bo,t)}translateOnAxis(t,i){return xo.copy(t).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Eo,t)}translateY(t){return this.translateOnAxis(yo,t)}translateZ(t){return this.translateOnAxis(bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?xa.copy(t):xa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Hr,xa,this.up):vi.lookAt(xa,Hr,this.up),this.quaternion.setFromRotationMatrix(vi),a&&(vi.extractRotation(a.matrixWorld),sr.setFromRotationMatrix(vi),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Je("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(To),or.child=t,this.dispatchEvent(or),or.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cu),An.child=t,this.dispatchEvent(An),An.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(To),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let p=l[h];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),p=s(t.shapes),u=s(t.skeletons),m=s(t.animations),E=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),p.length>0&&(r.shapes=p),u.length>0&&(r.skeletons=u),m.length>0&&(r.animations=m),E.length>0&&(r.nodes=E)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new B(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _t=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},du={type:"move"},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let E of e.hand.values()){let y=t.getJointPose(E,i),g=this._getHandJoint(l,E);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],p=h.position.distanceTo(c.position),u=.02,m=.005;l.inputState.pinching&&p>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(du)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Cn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=$h(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Cn(n,a,e+1/3),this.g=Cn(n,a,e),this.b=Cn(n,a,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function i(a){a!==void 0&&parseFloat(a)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=Vl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(We(Ft.r*255,0,255))*65536+Math.round(We(Ft.g*255,0,255))*256+Math.round(We(Ft.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),t);let i=Ft.r,r=Ft.g,a=Ft.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Jt){Ke.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,r=Ft.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ea);let i=En(Di.h,Ea.h,t),r=En(Di.s,Ea.s,t),a=En(Di.l,Ea.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Be;Be.NAMES=Vl;var pu=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new B,Mi=new B,Pn=new B,Si=new B,lr=new B,hr=new B,wo=new B,Ln=new B,Dn=new B,Un=new B,Nn=new vt,In=new vt,On=new vt,Er=class yr{constructor(t=new B,i=new B,r=new B){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ri.subVectors(t,i),a.cross(ri);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ri.subVectors(a,i),Mi.subVectors(r,i),Pn.subVectors(t,i);let s=ri.dot(ri),o=ri.dot(Mi),l=ri.dot(Pn),h=Mi.dot(Mi),c=Mi.dot(Pn),p=s*h-o*o;if(p===0)return n.set(0,0,0),null;let u=1/p,m=(h*l-o*c)*u,E=(s*c-o*l)*u;return n.set(1-m-E,E,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Si.x),l.addScaledVector(s,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Nn.setScalar(0),In.setScalar(0),On.setScalar(0),Nn.fromBufferAttribute(t,i),In.fromBufferAttribute(t,r),On.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Nn,n.x),s.addScaledVector(In,n.y),s.addScaledVector(On,n.z),s}static isFrontFacing(t,i,r,a){return ri.subVectors(r,i),Mi.subVectors(t,i),ri.cross(Mi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ri.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return yr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return yr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;lr.subVectors(a,r),hr.subVectors(n,r),Ln.subVectors(t,r);let l=lr.dot(Ln),h=hr.dot(Ln);if(l<=0&&h<=0)return i.copy(r);Dn.subVectors(t,a);let c=lr.dot(Dn),p=hr.dot(Dn);if(c>=0&&p<=c)return i.copy(a);let u=l*p-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(lr,s);Un.subVectors(t,n);let m=lr.dot(Un),E=hr.dot(Un);if(E>=0&&m<=E)return i.copy(n);let y=m*h-l*E;if(y<=0&&h>=0&&E<=0)return o=h/(h-E),i.copy(r).addScaledVector(hr,o);let g=c*E-m*p;if(g<=0&&p-c>=0&&m-E>=0)return wo.subVectors(n,a),o=(p-c)/(p-c+(m-E)),i.copy(a).addScaledVector(wo,o);let d=1/(g+y+u);return s=y*d,o=u*d,i.copy(r).addScaledVector(lr,s).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oa=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,ai):ai.fromBufferAttribute(a,n),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),ba.subVectors(this.max,Vr),ur.subVectors(e.a,Vr),cr.subVectors(e.b,Vr),dr.subVectors(e.c,Vr),Ui.subVectors(cr,ur),Ni.subVectors(dr,cr),Wi.subVectors(ur,dr);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-Wi.z,Wi.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,Wi.z,0,-Wi.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-Wi.y,Wi.x,0];return!Fn(t,ur,cr,dr,ba)||(t=[1,0,0,0,1,0,0,0,1],!Fn(t,ur,cr,dr,ba))?!1:(Ta.crossVectors(Ui,Ni),t=[Ta.x,Ta.y,Ta.z],Fn(t,ur,cr,dr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new B,new B,new B,new B,new B,new B,new B,new B],ai=new B,ya=new oa,ur=new B,cr=new B,dr=new B,Ui=new B,Ni=new B,Wi=new B,Vr=new B,ba=new B,Ta=new B,Xi=new B;function Fn(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Xi.fromArray(e,n);let o=a.x*Math.abs(Xi.x)+a.y*Math.abs(Xi.y)+a.z*Math.abs(Xi.z),l=t.dot(Xi),h=i.dot(Xi),c=r.dot(Xi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var xt=new B,wa=new Le,fu=0,Qt=class extends zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),a=st(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},kl=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Gl=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Bt=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},mu=new oa,kr=new B,Bn=new B,la=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Bn)),this.expandByPoint(kr.copy(e.center).sub(Bn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gu=0,Zt=new pt,zn=new kt,pr=new B,jt=new oa,Gr=new oa,Rt=new B,qt=class Wl extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Gl:kl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ve().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zt.makeRotationFromQuaternion(t),this.applyMatrix4(Zt),this}rotateX(t){return Zt.makeRotationX(t),this.applyMatrix4(Zt),this}rotateY(t){return Zt.makeRotationY(t),this.applyMatrix4(Zt),this}rotateZ(t){return Zt.makeRotationZ(t),this.applyMatrix4(Zt),this}translate(t,i,r){return Zt.makeTranslation(t,i,r),this.applyMatrix4(Zt),this}scale(t,i,r){return Zt.makeScale(t,i,r),this.applyMatrix4(Zt),this}lookAt(t){return zn.lookAt(t),zn.updateMatrix(),this.applyMatrix4(zn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Bt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let r=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(jt.min,Gr.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,Gr.max),jt.expandByPoint(Rt)):(jt.expandByPoint(Gr.min),jt.expandByPoint(Gr.max))}jt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Rt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Rt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Rt.fromBufferAttribute(o,h),l&&(pr.fromBufferAttribute(t,h),Rt.add(pr)),a=Math.max(a,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Qt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let f=0;f<r.count;f++)o[f]=new B,l[f]=new B;let h=new B,c=new B,p=new B,u=new Le,m=new Le,E=new Le,y=new B,g=new B;function d(f,S,I){h.fromBufferAttribute(r,f),c.fromBufferAttribute(r,S),p.fromBufferAttribute(r,I),u.fromBufferAttribute(n,f),m.fromBufferAttribute(n,S),E.fromBufferAttribute(n,I),c.sub(h),p.sub(h),m.sub(u),E.sub(u);let N=1/(m.x*E.y-E.x*m.y);isFinite(N)&&(y.copy(c).multiplyScalar(E.y).addScaledVector(p,-m.y).multiplyScalar(N),g.copy(p).multiplyScalar(m.x).addScaledVector(c,-E.x).multiplyScalar(N),o[f].add(y),o[S].add(y),o[I].add(y),l[f].add(g),l[S].add(g),l[I].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let f=0,S=R.length;f<S;++f){let I=R[f],N=I.start,F=I.count;for(let z=N,A=N+F;z<A;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let O=new B,M=new B,b=new B,w=new B;function T(f){b.fromBufferAttribute(a,f),w.copy(b);let S=o[f];O.copy(S),O.sub(b.multiplyScalar(b.dot(S))).normalize(),M.crossVectors(w,S);let I=M.dot(l[f])<0?-1:1;s.setXYZW(f,O.x,O.y,O.z,I)}for(let f=0,S=R.length;f<S;++f){let I=R[f],N=I.start,F=I.count;for(let z=N,A=N+F;z<A;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Qt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,m=r.count;u<m;u++)r.setXYZ(u,0,0,0);let a=new B,n=new B,s=new B,o=new B,l=new B,h=new B,c=new B,p=new B;if(t)for(let u=0,m=t.count;u<m;u+=3){let E=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(i,E),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,g),c.subVectors(s,n),p.subVectors(a,n),c.cross(p),o.fromBufferAttribute(r,E),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,g),o.add(c),l.add(c),h.add(c),r.setXYZ(E,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,m=i.count;u<m;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),p.subVectors(a,n),c.cross(p),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rt.fromBufferAttribute(t,i),Rt.normalize(),t.setXYZ(i,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,p=o.normalized,u=new h.constructor(l.length*c),m=0,E=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*c;for(let d=0;d<c;d++)u[E++]=h[m++]}return new Qt(u,c,p)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Wl,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,p=h.length;c<p;c++){let u=h[c],m=t(u,r);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let p=0,u=h.length;p<u;p++){let m=h[p];c.push(m.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],p=n[h];for(let u=0,m=p.length;u<m;u++)c.push(p[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let p=s[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_u=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},zt=new B,Ao=class Xl{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)zt.fromBufferAttribute(this,i),zt.applyMatrix4(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)zt.fromBufferAttribute(this,i),zt.applyNormalMatrix(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)zt.fromBufferAttribute(this,i),zt.transformDirection(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=ui(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=st(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ui(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ui(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ui(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ui(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=st(i,this.array),r=st(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=st(i,this.array),r=st(r,this.array),a=st(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=st(i,this.array),r=st(r,this.array),a=st(a,this.array),n=st(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){hn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Qt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hn=new B,vu=new B,Mu=new Ve,yi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Hn.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Hn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Mu.getNormalMatrix(e),r=this.coplanarPoint(Hn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Su=0,Ci=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Qr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=xl,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jl=class extends Ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,Wr=new B,mr=new B,gr=new B,_r=new Le,Xr=new Le,Yl=new pt,Aa=new B,jr=new B,Ra=new B,Ro=new Le,Vn=new Le,Co=new Le,xu=class extends kt{constructor(e=new jl){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _u(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Ao(i,3,0,!1)),fr.setAttribute("uv",new Ao(i,2,3,!1))}this.geometry=fr,this.material=e,this.center=new Le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),Yl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let n=this.center;Ca(Aa.set(-.5,-.5,0),gr,n,mr,r,a),Ca(jr.set(.5,-.5,0),gr,n,mr,r,a),Ca(Ra.set(.5,.5,0),gr,n,mr,r,a),Ro.set(0,0),Vn.set(1,0),Co.set(1,1);let s=e.ray.intersectTriangle(Aa,jr,Ra,!1,Wr);if(s===null&&(Ca(jr.set(-.5,.5,0),gr,n,mr,r,a),Vn.set(0,1),s=e.ray.intersectTriangle(Aa,Ra,jr,!1,Wr),s===null))return;let o=e.ray.origin.distanceTo(Wr);o<e.near||o>e.far||t.push({distance:o,point:Wr.clone(),uv:Er.getInterpolation(Wr,Aa,jr,Ra,Ro,Vn,Co,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ca(e,t,i,r,a,n){_r.subVectors(e,i).addScalar(.5).multiply(r),a!==void 0?(Xr.x=n*_r.x-a*_r.y,Xr.y=a*_r.x+n*_r.y):Xr.copy(_r),e.copy(t),e.x+=Xr.x,e.y+=Xr.y,e.applyMatrix4(Yl)}var Ei=new B,kn=new B,Pa=new B,La=new B,ha=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kn.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),La.copy(this.origin).sub(kn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Pa),s=La.dot(this.direction),o=-La.dot(Pa),l=La.lengthSq(),h=Math.abs(1-n*n),c,p,u,m;if(h>0)if(c=n*o-s,p=n*s-o,m=a*h,c>=0)if(p>=-m)if(p<=m){let E=1/h;c*=E,p*=E,u=c*(c+n*p+2*s)+p*(n*c+p+2*o)+l}else p=a,c=Math.max(0,-(n*p+s)),u=-c*c+p*(p+2*o)+l;else p=-a,c=Math.max(0,-(n*p+s)),u=-c*c+p*(p+2*o)+l;else p<=-m?(c=Math.max(0,-(-n*a+s)),p=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+p*(p+2*o)+l):p<=m?(c=0,p=Math.min(Math.max(-a,-o),a),u=p*(p+2*o)+l):(c=Math.max(0,-(n*a+s)),p=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+p*(p+2*o)+l);else p=n>0?-a:a,c=Math.max(0,-(n*p+s)),u=-c*c+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(kn).addScaledVector(Pa,p),u}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,n=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,n=(e.min.y-p.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-p.z)*c,o=(e.max.z-p.z)*c):(s=(e.max.z-p.z)*c,o=(e.min.z-p.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,p=e.y-n.y,u=e.z-n.z,m=t.x-n.x,E=t.y-n.y,y=t.z-n.z,g=i.x-n.x,d=i.y-n.y,R=i.z-n.z,O=Math.abs(o),M=Math.abs(l),b=Math.abs(h),w,T,f,S,I,N,F,z,A,k,J,W;if(O>=M&&O>=b?(f=o,N=c,A=m,W=g,o>=0?(w=l,T=h,S=p,I=u,F=E,z=y,k=d,J=R):(w=h,T=l,S=u,I=p,F=y,z=E,k=R,J=d)):M>=b?(f=l,N=p,A=E,W=d,l>=0?(w=h,T=o,S=u,I=c,F=y,z=m,k=R,J=g):(w=o,T=h,S=c,I=u,F=m,z=y,k=g,J=R)):(f=h,N=u,A=y,W=R,h>=0?(w=o,T=l,S=c,I=p,F=m,z=E,k=g,J=d):(w=l,T=o,S=p,I=c,F=E,z=m,k=d,J=g)),f===0)return null;let le=w/f,q=T/f,K=1/f,j=S-le*N,ze=I-q*N,we=F-le*A,ot=z-q*A,Fe=k-le*W,Y=J-q*W,ie=Fe*ot-Y*we,se=j*Y-ze*Fe,Re=we*ze-ot*j;if(r){if(ie<0||se<0||Re<0)return null}else if((ie<0||se<0||Re<0)&&(ie>0||se>0||Re>0))return null;let Ue=ie+se+Re;if(Ue===0)return null;let ge=K*(ie*N+se*A+Re*W);return(Ue>0?ge<0:ge>0)?null:this.at(ge/Ue,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ea=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Po=new pt,ji=new ha,Da=new la,Lo=new B,Ua=new B,Na=new B,Ia=new B,Gn=new B,Oa=new B,Do=new B,Fa=new B,Vt=class extends kt{constructor(e=new qt,t=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Oa.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(Gn.fromBufferAttribute(c,e),n?Oa.addScaledVector(Gn,h):Oa.addScaledVector(Gn.sub(t),h))}t.add(Oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(a),ji.copy(e.ray).recast(e.near),!(Da.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Da,Lo)===null||ji.origin.distanceToSquared(Lo)>(e.far-e.near)**2))&&(Po.copy(a).invert(),ji.copy(e.ray).applyMatrix4(Po),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,p=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let m=0,E=p.length;m<E;m++){let y=p[m],g=n[y.materialIndex],d=Math.max(y.start,u.start),R=Math.min(s.count,Math.min(y.start+y.count,u.start+u.count));for(let O=d,M=R;O<M;O+=3){let b=s.getX(O),w=s.getX(O+1),T=s.getX(O+2);r=Ba(this,g,e,i,l,h,c,b,w,T),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),E=Math.min(s.count,u.start+u.count);for(let y=m,g=E;y<g;y+=3){let d=s.getX(y),R=s.getX(y+1),O=s.getX(y+2);r=Ba(this,n,e,i,l,h,c,d,R,O),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let m=0,E=p.length;m<E;m++){let y=p[m],g=n[y.materialIndex],d=Math.max(y.start,u.start),R=Math.min(o.count,Math.min(y.start+y.count,u.start+u.count));for(let O=d,M=R;O<M;O+=3){let b=O,w=O+1,T=O+2;r=Ba(this,g,e,i,l,h,c,b,w,T),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),E=Math.min(o.count,u.start+u.count);for(let y=m,g=E;y<g;y+=3){let d=y,R=y+1,O=y+2;r=Ba(this,n,e,i,l,h,c,d,R,O),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function Eu(e,t,i,r,a,n,s,o){let l;if(t.side===Wt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===$i,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Fa);return h<i.near||h>i.far?null:{distance:h,point:Fa.clone(),object:e}}function Ba(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,Ua),e.getVertexPosition(l,Na),e.getVertexPosition(h,Ia);let c=Eu(e,t,i,r,Ua,Na,Ia,Do);if(c){let p=new B;Er.getBarycoord(Do,Ua,Na,Ia,p),a&&(c.uv=Er.getInterpolatedAttribute(a,o,l,h,p,new Le)),n&&(c.uv1=Er.getInterpolatedAttribute(n,o,l,h,p,new Le)),s&&(c.normal=Er.getInterpolatedAttribute(s,o,l,h,p,new B),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new B,materialIndex:0};Er.getNormal(Ua,Na,Ia,u.normal),c.face=u,c.barycoord=p}return c}var yu=class extends ei{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Dt,h=Dt,c,p){super(null,n,s,o,l,h,r,a,c,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yi=new la,bu=new Le(.5,.5),za=new B,no=class{constructor(e=new yi,t=new yi,i=new yi,r=new yi,a=new yi,n=new yi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],p=a[6],u=a[7],m=a[8],E=a[9],y=a[10],g=a[11],d=a[12],R=a[13],O=a[14],M=a[15];if(r[0].setComponents(l-n,u-h,g-m,M-d).normalize(),r[1].setComponents(l+n,u+h,g+m,M+d).normalize(),r[2].setComponents(l+s,u+c,g+E,M+R).normalize(),r[3].setComponents(l-s,u-c,g-E,M-R).normalize(),i)r[4].setComponents(o,p,y,O).normalize(),r[5].setComponents(l-o,u-p,g-y,M-O).normalize();else if(r[4].setComponents(l-o,u-p,g-y,M-O).normalize(),t===di)r[5].setComponents(l+o,u+p,g+y,M+O).normalize();else if(t===aa)r[5].setComponents(o,p,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=bu.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ql=class extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},un=new B,cn=new B,Uo=new pt,Yr=new ha,Ha=new la,Wn=new B,No=new B,Tu=class extends kt{constructor(e=new qt,t=new ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)un.fromBufferAttribute(t,r-1),cn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=un.distanceTo(cn);e.setAttribute("lineDistance",new Bt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=a,e.ray.intersectsSphere(Ha)===!1)return;Uo.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(Uo);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let p=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let m=p,E=u-1;m<E;m+=l){let y=h.getX(m),g=h.getX(m+1),d=Va(this,e,Yr,o,y,g,m);d&&t.push(d)}if(this.isLineLoop){let m=h.getX(u-1),E=h.getX(p),y=Va(this,e,Yr,o,m,E,u-1);y&&t.push(y)}}else{let p=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let m=p,E=u-1;m<E;m+=l){let y=Va(this,e,Yr,o,m,m+1,m);y&&t.push(y)}if(this.isLineLoop){let m=Va(this,e,Yr,o,u-1,p,u-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Va(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(un.fromBufferAttribute(o,a),cn.fromBufferAttribute(o,n),i.distanceSqToSegment(un,cn,Wn,No)>r)return;Wn.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Wn);if(!(l<t.near||l>t.far))return{distance:l,point:No.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Io=new B,Oo=new B,wu=class extends Tu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Io.fromBufferAttribute(t,r),Oo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Io.distanceTo(Oo);e.setAttribute("lineDistance",new Bt(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Kl=class extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fo=new pt,ks=new ha,ka=new la,Ga=new B,Au=class extends kt{constructor(e=new qt,t=new Kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=a,e.ray.intersectsSphere(ka)===!1)return;Fo.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Fo);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let u=c,m=p;u<m;u++){let E=l.getX(u);Ga.fromBufferAttribute(h,E),Bo(Ga,E,o,r,e,t,this)}}else{let c=Math.max(0,n.start),p=Math.min(h.count,n.start+n.count);for(let u=c,m=p;u<m;u++)Ga.fromBufferAttribute(h,u),Bo(Ga,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Bo(e,t,i,r,a,n,s){let o=ks.distanceSqToPoint(e);if(o<i){let l=new B;ks.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Zl=class extends ei{constructor(e=[],t=Qi,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zo=class extends ei{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},na=class extends ei{constructor(e,t,i=fi,r,a,n,s=Dt,o=Dt,l,h=Ri,c=1){if(h!==Ri&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:c};super(p,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ru=class extends na{constructor(e,t=fi,i=Qi,r,a,n=Dt,s=Dt,o,l=Ri){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jl=class extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sa=class $l extends qt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],p=[],u=0,m=0;E("z","y","x",-1,-1,r,i,t,s,n,0),E("z","y","x",1,-1,r,i,-t,s,n,1),E("x","z","y",1,1,t,r,i,a,s,2),E("x","z","y",1,-1,t,r,-i,a,s,3),E("x","y","z",1,-1,t,i,r,a,n,4),E("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(p,2));function E(y,g,d,R,O,M,b,w,T,f,S){let I=M/T,N=b/f,F=M/2,z=b/2,A=w/2,k=T+1,J=f+1,W=0,le=0,q=new B;for(let K=0;K<J;K++){let j=K*N-z;for(let ze=0;ze<k;ze++){let we=ze*I-F;q[y]=we*R,q[g]=j*O,q[d]=A,h.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[d]=w>0?1:-1,c.push(q.x,q.y,q.z),p.push(ze/T),p.push(1-K/f),W+=1}}for(let K=0;K<f;K++)for(let j=0;j<T;j++){let ze=u+j+k*K,we=u+j+k*(K+1),ot=u+(j+1)+k*(K+1),Fe=u+(j+1)+k*K;l.push(ze,we,Fe),l.push(we,ot,Fe),le+=6}o.addGroup(m,le,S),m+=le,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Gs=class Ql extends qt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],p=[],u=[],m=[],E=0,y=[],g=r/2,d=0;R(),s===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(c),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(m,2));function R(){let M=new B,b=new B,w=0,T=(i-t)/r;for(let f=0;f<=n;f++){let S=[],I=f/n,N=I*(i-t)+t;for(let F=0;F<=a;F++){let z=F/a,A=z*l+o,k=Math.sin(A),J=Math.cos(A);b.x=N*k,b.y=-I*r+g,b.z=N*J,p.push(b.x,b.y,b.z),M.set(k,T,J).normalize(),u.push(M.x,M.y,M.z),m.push(z,1-I),S.push(E++)}y.push(S)}for(let f=0;f<a;f++)for(let S=0;S<n;S++){let I=y[S][f],N=y[S+1][f],F=y[S+1][f+1],z=y[S][f+1];(t>0||S!==0)&&(c.push(I,N,z),w+=3),(i>0||S!==n-1)&&(c.push(N,F,z),w+=3)}h.addGroup(d,w,0),d+=w}function O(M){let b=E,w=new Le,T=new B,f=0,S=M===!0?t:i,I=M===!0?1:-1;for(let F=1;F<=a;F++)p.push(0,g*I,0),u.push(0,I,0),m.push(.5,.5),E++;let N=E;for(let F=0;F<=a;F++){let z=F/a*l+o,A=Math.cos(z),k=Math.sin(z);T.x=S*k,T.y=g*I,T.z=S*A,p.push(T.x,T.y,T.z),u.push(0,I,0),w.x=A*.5+.5,w.y=k*.5*I+.5,m.push(w.x,w.y),E++}for(let F=0;F<a;F++){let z=b+F,A=N+F;M===!0?c.push(A,A+1,z):c.push(A+1,A,z),f+=3}h.addGroup(d,f,M===!0?1:2),d+=f}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cu=class eh extends Gs{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new eh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class th extends qt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,p=t/o,u=i/l,m=[],E=[],y=[],g=[];for(let d=0;d<c;d++){let R=d*u-s;for(let O=0;O<h;O++){let M=O*p-n;E.push(M,-R,0),y.push(0,0,1),g.push(O/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){let O=R+h*d,M=R+h*(d+1),b=R+1+h*(d+1),w=R+1+h*d;m.push(O,M,w),m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new Bt(E,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.width,t.height,t.widthSegments,t.heightSegments)}},Pu=class extends Ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Or(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Ho(a))a.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Ho(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Ht(e){let t={};for(let i=0;i<e.length;i++){let r=Or(e[i]);for(let a in r)t[a]=r[a]}return t}function Ho(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Lu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ih(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ke.workingColorSpace}var Du={clone:Or,merge:Ht},Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(r.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Iu=class extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lt=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hs,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ou=class extends Lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Fu=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bu=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rh=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xn=new pt,Vo=new B,ko=new B,zu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ko),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Xn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xn,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===aa||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Xn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wa=new B,Xa=new Bi,oi=new B,ah=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,Xa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wa,Xa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new B,Go=new Le,Wo=new Le,$t=class extends ah{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Go,Wo),t.subVectors(Wo,Go)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oo=class extends ah{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hu=class extends zu{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Hu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Vu=class extends rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},vr=-90,Mr=1,ku=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(vr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new $t(vr,Mr,e,t);a.layers=this.layers,this.add(a);let n=new $t(vr,Mr,e,t);n.layers=this.layers,this.add(n);let s=new $t(vr,Mr,e,t);s.layers=this.layers,this.add(s);let o=new $t(vr,Mr,e,t);o.layers=this.layers,this.add(o);let l=new $t(vr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,p,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Gu=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nh="\\[\\]\\.:\\/",lo="[^"+nh+"]",Wu="[^"+nh.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",lo);/(WCOD+)?/.source.replace("WCOD",Wu);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lo);var Xo=new pt,Xu=class{constructor(e,t,i=0,r=1/0){this.ray=new ha(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xo),this}intersectObject(e,t=!0,i=[]){return Ws(e,this,i,t),i.sort(jo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Ws(e[r],this,i,t);return i.sort(jo),i}};function jo(e,t){return e.distance-t.distance}function Ws(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Ws(n[s],t,i,!0)}}var Yo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ur;Ur=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Ur.prototype.isMatrix2=!0;var ju=class extends wu{constructor(e=10,t=10,i=4473924,r=8947848){i=new Be(i),r=new Be(r);let a=t/2,n=e/t,s=e/2,o=[],l=[];for(let p=0,u=0,m=-s;p<=t;p++,m+=n){o.push(-s,0,m,s,0,m),o.push(m,0,-s,m,0,s);let E=p===a?i:r;E.toArray(l,u),u+=3,E.toArray(l,u),u+=3,E.toArray(l,u),u+=3,E.toArray(l,u),u+=3}let h=new qt;h.setAttribute("position",new Bt(o,3)),h.setAttribute("color",new Bt(l,3));let c=new ql({vertexColors:!0,toneMapped:!1});super(h,c),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Yu=class extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function qo(e,t,i,r){let a=qu(r);switch(i){case Nl:return e*t;case Ol:return e*t/a.components*a.byteLength;case $s:return e*t/a.components*a.byteLength;case er:return e*t*2/a.components*a.byteLength;case Qs:return e*t*2/a.components*a.byteLength;case Il:return e*t*3/a.components*a.byteLength;case ni:return e*t*4/a.components*a.byteLength;case eo:return e*t*4/a.components*a.byteLength;case Ka:case Za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ja:case $a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cs:case ps:return Math.max(e,16)*Math.max(t,8)/4;case us:case ds:return Math.max(e,8)*Math.max(t,8)/2;case fs:case ms:case _s:case vs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gs:case an:case Ms:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ss:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Es:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ys:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bs:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ts:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ws:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case As:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Rs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Cs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ps:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ls:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ds:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Us:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ns:case Is:case Os:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Fs:case Bs:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nn:case zs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qu(e){switch(e){case Yt:case Pl:return{byteLength:1,components:1};case ia:case Ll:case mi:return{byteLength:2,components:1};case Zs:case Js:return{byteLength:2,components:4};case fi:case Ks:case ci:return{byteLength:4,components:1};case Dl:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);function sh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Ku(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,p=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let m;if(h instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=e.SHORT;else if(h instanceof Uint32Array)m=e.UNSIGNED_INT;else if(h instanceof Int32Array)m=e.INT;else if(h instanceof Int8Array)m=e.BYTE;else if(h instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,h){let c=l.array,p=l.updateRanges;if(e.bindBuffer(h,o),p.length===0)e.bufferSubData(h,0,c);else{p.sort((m,E)=>m.start-E.start);let u=0;for(let m=1;m<p.length;m++){let E=p[u],y=p[m];y.start<=E.start+E.count+1?E.count=Math.max(E.count,y.start+y.count-E.start):(++u,p[u]=y)}p.length=u+1;for(let m=0,E=p.length;m<E;m++){let y=p[m];e.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Zu=`#ifdef USE_ALPHAHASH
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
#endif`,Mc=`#define PI 3.141592653589793
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
} // validated`,Sc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xc=`vec3 transformedNormal = objectNormal;
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
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ac=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rc=`#ifdef USE_ENVMAP
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
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
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
#endif`,Gc=`ToonMaterial material;
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
#endif`,qc=`uniform sampler2D dfgLUT;
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
}`,Kc=`
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
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Mp=`#define PHONG
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
}`,Sp=`#define STANDARD
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
}`,xp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,yp=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Ge={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:$u,alphamap_pars_fragment:Qu,alphatest_fragment:ec,alphatest_pars_fragment:tc,aomap_fragment:ic,aomap_pars_fragment:rc,batching_pars_vertex:ac,batching_vertex:nc,begin_vertex:sc,beginnormal_vertex:oc,bsdfs:lc,iridescence_fragment:hc,bumpmap_pars_fragment:uc,clipping_planes_fragment:cc,clipping_planes_pars_fragment:dc,clipping_planes_pars_vertex:pc,clipping_planes_vertex:fc,color_fragment:mc,color_pars_fragment:gc,color_pars_vertex:_c,color_vertex:vc,common:Mc,cube_uv_reflection_fragment:Sc,defaultnormal_vertex:xc,displacementmap_pars_vertex:Ec,displacementmap_vertex:yc,emissivemap_fragment:bc,emissivemap_pars_fragment:Tc,colorspace_fragment:wc,colorspace_pars_fragment:Ac,envmap_fragment:Rc,envmap_common_pars_fragment:Cc,envmap_pars_fragment:Pc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:kc,envmap_vertex:Dc,fog_vertex:Uc,fog_pars_vertex:Nc,fog_fragment:Ic,fog_pars_fragment:Oc,gradientmap_pars_fragment:Fc,lightmap_pars_fragment:Bc,lights_lambert_fragment:zc,lights_lambert_pars_fragment:Hc,lights_pars_begin:Vc,lights_toon_fragment:Gc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:jc,lights_physical_fragment:Yc,lights_physical_pars_fragment:qc,lights_fragment_begin:Kc,lights_fragment_maps:Zc,lights_fragment_end:Jc,lightprobes_pars_fragment:$c,logdepthbuf_fragment:Qc,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:td,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:ad,map_particle_fragment:nd,map_particle_pars_fragment:sd,metalnessmap_fragment:od,metalnessmap_pars_fragment:ld,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:cd,morphtarget_pars_vertex:dd,morphtarget_vertex:pd,normal_fragment_begin:fd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:vd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:yd,opaque_fragment:bd,packing:Td,premultiplied_alpha_fragment:wd,project_vertex:Ad,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Dd,shadowmap_pars_vertex:Ud,shadowmap_vertex:Nd,shadowmask_pars_fragment:Id,skinbase_vertex:Od,skinning_pars_vertex:Fd,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:Hd,specularmap_pars_fragment:Vd,tonemapping_fragment:kd,tonemapping_pars_fragment:Gd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:jd,uv_pars_vertex:Yd,uv_vertex:qd,worldpos_vertex:Kd,background_vert:Zd,background_frag:Jd,backgroundCube_vert:$d,backgroundCube_frag:Qd,cube_vert:ep,cube_frag:tp,depth_vert:ip,depth_frag:rp,distance_vert:ap,distance_frag:np,equirect_vert:sp,equirect_frag:op,linedashed_vert:lp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:cp,meshlambert_vert:dp,meshlambert_frag:pp,meshmatcap_vert:fp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:vp,meshphong_frag:Mp,meshphysical_vert:Sp,meshphysical_frag:xp,meshtoon_vert:Ep,meshtoon_frag:yp,points_vert:bp,points_frag:Tp,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},hi={basic:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ht([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ht([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ht([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Ht([ce.common,ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Ht([ce.lights,ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hi.physical={uniforms:Ht([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var ja={r:0,b:0,g:0},Pp=new pt,oh=new Ve;oh.set(-1,0,0,0,1,0,0,0,1);function Lp(e,t,i,r,a,n){let s=new Be(0),o=a===!0?0:1,l,h,c=null,p=0,u=null;function m(R){let O=R.isScene===!0?R.background:null;if(O&&O.isTexture){let M=R.backgroundBlurriness>0;O=t.get(O,M)}return O}function E(R){let O=!1,M=m(R);M===null?g(s,o):M&&M.isColor&&(g(M,1),O=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(R,O){let M=m(O);M&&(M.isCubeTexture||M.mapping===dn)?(h===void 0&&(h=new Vt(new sa(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Or(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(O.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(oh),h.material.toneMapped=Ke.getTransfer(M.colorSpace)!==it,(c!==M||p!==M.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=M,p=M.version,u=e.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Vt(new so(2,2),new gi({name:"BackgroundMaterial",uniforms:Or(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||p!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=M,p=M.version,u=e.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function g(R,O){R.getRGB(ja,ih(e)),i.buffers.color.setClear(ja.r,ja.g,ja.b,O,n)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(R,O=1){s.set(R),o=O,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,g(s,o)},render:E,addToRenderList:y,dispose:d}}function Dp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(N,F,z,A,k){let J=!1,W=p(N,A,z,F);n!==W&&(n=W,h(n.object)),J=m(N,A,z,k),J&&E(N,A,z,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,M(N,F,z,A),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function h(N){return e.bindVertexArray(N)}function c(N){return e.deleteVertexArray(N)}function p(N,F,z,A){let k=A.wireframe===!0,J=r[F.id];J===void 0&&(J={},r[F.id]=J);let W=N.isInstancedMesh===!0?N.id:0,le=J[W];le===void 0&&(le={},J[W]=le);let q=le[z.id];q===void 0&&(q={},le[z.id]=q);let K=q[k];return K===void 0&&(K=u(l()),q[k]=K),K}function u(N){let F=[],z=[],A=[];for(let k=0;k<i;k++)F[k]=0,z[k]=0,A[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:A,object:N,attributes:{},index:null}}function m(N,F,z,A){let k=n.attributes,J=F.attributes,W=0,le=z.getAttributes();for(let q in le)if(le[q].location>=0){let K=k[q],j=J[q];if(j===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),K===void 0||K.attribute!==j||j&&K.data!==j.data)return!0;W++}return n.attributesNum!==W||n.index!==A}function E(N,F,z,A){let k={},J=F.attributes,W=0,le=z.getAttributes();for(let q in le)if(le[q].location>=0){let K=J[q];K===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let j={};j.attribute=K,K&&K.data&&(j.data=K.data),k[q]=j,W++}n.attributes=k,n.attributesNum=W,n.index=A}function y(){let N=n.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function g(N){d(N,0)}function d(N,F){let z=n.newAttributes,A=n.enabledAttributes,k=n.attributeDivisors;z[N]=1,A[N]===0&&(e.enableVertexAttribArray(N),A[N]=1),k[N]!==F&&(e.vertexAttribDivisor(N,F),k[N]=F)}function R(){let N=n.newAttributes,F=n.enabledAttributes;for(let z=0,A=F.length;z<A;z++)F[z]!==N[z]&&(e.disableVertexAttribArray(z),F[z]=0)}function O(N,F,z,A,k,J,W){W===!0?e.vertexAttribIPointer(N,F,z,k,J):e.vertexAttribPointer(N,F,z,A,k,J)}function M(N,F,z,A){y();let k=A.attributes,J=z.getAttributes(),W=F.defaultAttributeValues;for(let le in J){let q=J[le];if(q.location>=0){let K=k[le];if(K===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let j=K.normalized,ze=K.itemSize,we=t.get(K);if(we===void 0)continue;let ot=we.buffer,Fe=we.type,Y=we.bytesPerElement,ie=Fe===e.INT||Fe===e.UNSIGNED_INT||K.gpuType===Ks;if(K.isInterleavedBufferAttribute){let se=K.data,Re=se.stride,Ue=K.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)d(q.location+ge,se.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<q.locationSize;ge++)g(q.location+ge);e.bindBuffer(e.ARRAY_BUFFER,ot);for(let ge=0;ge<q.locationSize;ge++)O(q.location+ge,ze/q.locationSize,Fe,j,Re*Y,(Ue+ze/q.locationSize*ge)*Y,ie)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)d(q.location+se,K.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<q.locationSize;se++)g(q.location+se);e.bindBuffer(e.ARRAY_BUFFER,ot);for(let se=0;se<q.locationSize;se++)O(q.location+se,ze/q.locationSize,Fe,j,ze*Y,ze/q.locationSize*se*Y,ie)}}else if(W!==void 0){let j=W[le];if(j!==void 0)switch(j.length){case 2:e.vertexAttrib2fv(q.location,j);break;case 3:e.vertexAttrib3fv(q.location,j);break;case 4:e.vertexAttrib4fv(q.location,j);break;default:e.vertexAttrib1fv(q.location,j)}}}}R()}function b(){S();for(let N in r){let F=r[N];for(let z in F){let A=F[z];for(let k in A){let J=A[k];for(let W in J)c(J[W].object),delete J[W];delete A[k]}}delete r[N]}}function w(N){if(r[N.id]===void 0)return;let F=r[N.id];for(let z in F){let A=F[z];for(let k in A){let J=A[k];for(let W in J)c(J[W].object),delete J[W];delete A[k]}}delete r[N.id]}function T(N){for(let F in r){let z=r[F];for(let A in z){let k=z[A];if(k[N.id]===void 0)continue;let J=k[N.id];for(let W in J)c(J[W].object),delete J[W];delete k[N.id]}}}function f(N){for(let F in r){let z=r[F],A=N.isInstancedMesh===!0?N.id:0,k=z[A];if(k!==void 0){for(let J in k){let W=k[J];for(let le in W)c(W[le].object),delete W[le];delete k[J]}delete z[A],Object.keys(z).length===0&&delete r[F]}}}function S(){I(),s=!0,n!==a&&(n=a,h(n.object))}function I(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:S,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:f,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:R}}function Up(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let p=0;for(let u=0;u<c;u++)p+=h[u];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Np(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(T){return!(T!==ni&&r.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let f=T===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yt&&T!==ci&&!f&&r.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Ne("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let p=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),R=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),O=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:E,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:R,maxVaryings:O,maxFragmentUniforms:M,maxSamples:b,samples:w}}function Ip(e){let t=this,i=null,r=0,a=!1,n=!1,s=new yi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||r!==0||a;return a=u,r=p.length,m},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,u){i=c(p,u,0)},this.setState=function(p,u,m){let E=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=e.get(p);if(!a||E===null||E.length===0||n&&!g)n?c(null):h();else{let R=n?0:r,O=R*4,M=d.clippingState||null;l.value=M,M=c(E,u,O,m);for(let b=0;b!==O;++b)M[b]=i[b];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(p,u,m,E){let y=p!==null?p.length:0,g=null;if(y!==0){if(g=l.value,E!==!0||g===null){let d=m+y*4,R=u.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<d)&&(g=new Float32Array(d));for(let O=0,M=m;O!==y;++O,M+=4)s.copy(p[O]).applyMatrix4(R,o),s.normal.toArray(g,M),g[M+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Tr=4,Op=6,Fp=20,Bp=256,qr=new oo,Ko=new Be,Yn=null,qn=0,Kn=0,Zn=!1,zp=new B,qi=new B,Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=zp}=a;Yn=this._renderer.getRenderTarget(),qn=this._renderer.getActiveCubeFace(),Kn=this._renderer.getActiveMipmapLevel(),Zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yn,qn,Kn),this._renderer.xr.enabled=Zn,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yn=this._renderer.getRenderTarget(),qn=this._renderer.getActiveCubeFace(),Kn=this._renderer.getActiveMipmapLevel(),Zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:mi,format:ni,colorSpace:sn,depthBuffer:!1},r=Jo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hp(a)),this._blurMaterial=kp(a,e,t),this._ggxMaterial=Vp(a,e,t)}return r}_compileMaterial(e){let t=new Vt(new qt,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,i,r,a){let n=new $t(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Ko),l.toneMapping=pi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new sa,new ea({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,u=p.material,m=!1,E=e.background;E?E.isColor&&(u.color.copy(E),e.background=null,m=!0):(u.color.copy(Ko),m=!0);for(let y=0;y<6;y++){let g=y%3;g===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):g===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let d=this._cubeSize;Sr(r,g*d,y>2?d:0,d,d),l.setRenderTarget(r),m&&l.render(p,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qi||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Sr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,qr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),p=l*1.25,u=c*p,{_lodMax:m}=this,E=this._sizeLods[i],y=3*E*(i>m-Tr?i-m+Tr:0),g=4*(this._cubeSize-E);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=m-t,Sr(a,y,g,3*E,2*E),r.setRenderTarget(a),r.render(s,qr),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=m-i,Sr(e,y,g,3*E,2*E),r.setRenderTarget(e),r.render(s,qr)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-Tr?r-this._lodMax+Tr:0),p=4*(this._cubeSize-h);Sr(t,c,p,3*h,2*h),n.setRenderTarget(t),n.render(o,qr)}};function Hp(e){let t=[],i=[],r=e,a=e-Tr+1+Op;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,u=6,m=3,E=new Float32Array(m*u*p),y=new Float32Array(m*u*p);for(let d=0;d<p;d++){let R=d%3*2/3-1,O=d>2?0:-1,M=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];E.set(M,m*u*d);for(let b=0;b<u;b++){let w=c[b*2]*2-1,T=c[b*2+1]*2-1;d===0?qi.set(1,T,w):d===1?qi.set(-w,1,-T):d===2?qi.set(-w,T,1):d===3?qi.set(-1,T,-w):d===4?qi.set(-w,-1,T):qi.set(w,T,-1),qi.toArray(y,(d*u+b)*m)}}let g=new qt;g.setAttribute("position",new Qt(E,m)),g.setAttribute("outputDirection",new Qt(y,m)),i.push(new Vt(g,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:t}}function Jo(e,t,i){let r=new si(e,t,i);return r.texture.mapping=dn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Vp(e,t,i){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pn(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function kp(e,t,i){return new gi({name:"SphericalGaussianBlur",defines:{SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pn(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function $o(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pn(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Qo(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function pn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lh=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sa(5,5,5),a=new gi({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:wi});a.uniforms.tEquirect.value=t;let n=new Vt(r,a),s=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Ut),new ku(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Gp(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,m=!1){return u==null?null:m?s(u):n(u)}function n(u){if(u&&u.isTexture){let m=u.mapping;if(m===vn||m===Mn)if(t.has(u)){let E=t.get(u).texture;return o(E,u.mapping)}else{let E=u.image;if(E&&E.height>0){let y=new lh(E.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",h),o(y.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let m=u.mapping,E=m===vn||m===Mn,y=m===Qi||m===Nr;if(E||y){let g=i.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return r===null&&(r=new Zo(e)),g=E?r.fromEquirectangular(u,g):r.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),g.texture;if(g!==void 0)return g.texture;{let R=u.image;return E&&R&&R.height>0||y&&R&&l(R)?(r===null&&(r=new Zo(e)),g=E?r.fromEquirectangular(u):r.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),u.addEventListener("dispose",c),g.texture):null}}}return u}function o(u,m){return m===vn?u.mapping=Qi:m===Mn&&(u.mapping=Nr),u}function l(u){let m=0,E=6;for(let y=0;y<E;y++)u[y]!==void 0&&m++;return m===E}function h(u){let m=u.target;m.removeEventListener("dispose",h);let E=t.get(m);E!==void 0&&(t.delete(m),E.dispose())}function c(u){let m=u.target;m.removeEventListener("dispose",c);let E=i.get(m);E!==void 0&&(i.delete(m),E.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function Wp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Ar("WebGLRenderer: "+r+" extension not supported."),a}}}function Xp(e,t,i,r){let a={},n=new WeakMap;function s(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let E in u.attributes)t.remove(u.attributes[E]);u.removeEventListener("dispose",s),delete a[u.id];let m=n.get(u);m&&(t.remove(m),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],e.ARRAY_BUFFER)}function h(p){let u=[],m=p.index,E=p.attributes.position,y=0;if(E===void 0)return;if(m!==null){let R=m.array;y=m.version;for(let O=0,M=R.length;O<M;O+=3){let b=R[O+0],w=R[O+1],T=R[O+2];u.push(b,w,w,T,T,b)}}else{let R=E.array;y=E.version;for(let O=0,M=R.length/3-1;O<M;O+=3){let b=O+0,w=O+1,T=O+2;u.push(b,w,w,T,T,b)}}let g=new(E.count>=65535?Gl:kl)(u,1);g.version=y;let d=n.get(p);d&&t.remove(d),n.set(p,g)}function c(p){let u=n.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&h(p)}else h(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function jp(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,u){e.drawElements(r,u,n,p*s),i.update(u,r,1)}function h(p,u,m){m!==0&&(e.drawElementsInstanced(r,u,n,p*s,m),i.update(u,r,m))}function c(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,p,0,m);let E=0;for(let y=0;y<m;y++)E+=u[y];i.update(E,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Yp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Je("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function qp(e,t,i){let r=new WeakMap,a=new vt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==p){let m=function(){f.dispose(),r.delete(o),o.removeEventListener("dispose",m)};u!==void 0&&u.texture.dispose();let E=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],O=o.morphAttributes.color||[],M=0;E===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*w*4*p),f=new zl(T,b,w,p);f.type=ci,f.needsUpdate=!0;let S=M*4;for(let I=0;I<p;I++){let N=d[I],F=R[I],z=O[I],A=b*w*4*I;for(let k=0;k<N.count;k++){let J=k*S;E===!0&&(a.fromBufferAttribute(N,k),T[A+J+0]=a.x,T[A+J+1]=a.y,T[A+J+2]=a.z,T[A+J+3]=0),y===!0&&(a.fromBufferAttribute(F,k),T[A+J+4]=a.x,T[A+J+5]=a.y,T[A+J+6]=a.z,T[A+J+7]=0),g===!0&&(a.fromBufferAttribute(z,k),T[A+J+8]=a.x,T[A+J+9]=a.y,T[A+J+10]=a.z,T[A+J+11]=z.itemSize===4?a.w:1)}}u={count:p,texture:f,size:new Le(b,w)},r.set(o,u),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let m=0;for(let y=0;y<h.length;y++)m+=h[y];let E=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Kp(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,p=h.geometry,u=t.get(h,p);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let m=h.skeleton;n.get(m)!==c&&(m.update(),n.set(m,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var Zp={[yl]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Rl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function Jp(e,t,i,r,a,n){let s=new si(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new qt;h.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let c=new Iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Vt(h,c),u=new oo(-1,1,1,-1,0,1),m=null,E=null,y=!1,g,d=null,R=[],O=!1;this.setSize=function(M,b){s.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let w=0;w<R.length;w++){let T=R[w];T.setSize&&T.setSize(M,b)}},this.setEffects=function(M){R=M,O=R.length>0&&R[0].isRenderPass===!0;let b=s.width,w=s.height;R.length>0&&o===null&&(o=new si(b,w,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new si(b,w,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<R.length;T++){let f=R[T];f.setSize&&f.setSize(b,w)}},this.begin=function(M,b){if(y||M.toneMapping===pi&&R.length===0)return!1;if(d=b,b!==null){let w=b.width,T=b.height;(s.width!==w||s.height!==T)&&this.setSize(w,T)}return O===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=pi,!0},this.hasRenderPass=function(){return O},this.end=function(M,b){M.toneMapping=g,y=!0;let w=s,T=o;for(let f=0;f<R.length;f++){let S=R[f];S.enabled!==!1&&(S.render(M,T,w,b),S.needsSwap!==!1&&(w=T,T=T===o?l:o))}if(m!==M.outputColorSpace||E!==M.toneMapping){m=M.outputColorSpace,E=M.toneMapping,c.defines={},Ke.getTransfer(m)===it&&(c.defines.SRGB_TRANSFER="");let f=Zp[E];f&&(c.defines[f]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(d),M.render(p,u),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var hh=new ei,Xs=new na(1,1),uh=new zl,ch=new nu,dh=new Zl,el=[],tl=[],il=new Float32Array(16),rl=new Float32Array(9),al=new Float32Array(4);function Fr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=el[a];if(n===void 0&&(n=new Float32Array(a),el[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function bt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Tt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function fn(e,t){let i=tl[t];i===void 0&&(i=new Int32Array(t),tl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function $p(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2fv(this.addr,t),Tt(i,t)}}function ef(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bt(i,t))return;e.uniform3fv(this.addr,t),Tt(i,t)}}function tf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4fv(this.addr,t),Tt(i,t)}}function rf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Tt(i,t)}else{if(bt(i,r))return;al.set(r),e.uniformMatrix2fv(this.addr,!1,al),Tt(i,r)}}function af(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Tt(i,t)}else{if(bt(i,r))return;rl.set(r),e.uniformMatrix3fv(this.addr,!1,rl),Tt(i,r)}}function nf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(bt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Tt(i,t)}else{if(bt(i,r))return;il.set(r),e.uniformMatrix4fv(this.addr,!1,il),Tt(i,r)}}function sf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function of(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2iv(this.addr,t),Tt(i,t)}}function lf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bt(i,t))return;e.uniform3iv(this.addr,t),Tt(i,t)}}function hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4iv(this.addr,t),Tt(i,t)}}function uf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function cf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bt(i,t))return;e.uniform2uiv(this.addr,t),Tt(i,t)}}function df(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bt(i,t))return;e.uniform3uiv(this.addr,t),Tt(i,t)}}function pf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bt(i,t))return;e.uniform4uiv(this.addr,t),Tt(i,t)}}function ff(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Xs.compareFunction=i.isReversedDepthBuffer()?io:to,n=Xs):n=hh,i.setTexture2D(t||n,a)}function mf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||ch,a)}function gf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||dh,a)}function _f(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||uh,a)}function vf(e){switch(e){case 5126:return $p;case 35664:return Qp;case 35665:return ef;case 35666:return tf;case 35674:return rf;case 35675:return af;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return cf;case 36295:return df;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function Mf(e,t){e.uniform1fv(this.addr,t)}function Sf(e,t){let i=Fr(t,this.size,2);e.uniform2fv(this.addr,i)}function xf(e,t){let i=Fr(t,this.size,3);e.uniform3fv(this.addr,i)}function Ef(e,t){let i=Fr(t,this.size,4);e.uniform4fv(this.addr,i)}function yf(e,t){let i=Fr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function bf(e,t){let i=Fr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Tf(e,t){let i=Fr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function wf(e,t){e.uniform1iv(this.addr,t)}function Af(e,t){e.uniform2iv(this.addr,t)}function Rf(e,t){e.uniform3iv(this.addr,t)}function Cf(e,t){e.uniform4iv(this.addr,t)}function Pf(e,t){e.uniform1uiv(this.addr,t)}function Lf(e,t){e.uniform2uiv(this.addr,t)}function Df(e,t){e.uniform3uiv(this.addr,t)}function Uf(e,t){e.uniform4uiv(this.addr,t)}function Nf(e,t,i){let r=this.cache,a=t.length,n=fn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Xs:s=hh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function If(e,t,i){let r=this.cache,a=t.length,n=fn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||ch,n[s])}function Of(e,t,i){let r=this.cache,a=t.length,n=fn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||dh,n[s])}function Ff(e,t,i){let r=this.cache,a=t.length,n=fn(i,a);bt(r,n)||(e.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||uh,n[s])}function Bf(e){switch(e){case 5126:return Mf;case 35664:return Sf;case 35665:return xf;case 35666:return Ef;case 35674:return yf;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Lf;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}var zf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}},Hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Jn=/(\w+)(\])?(\[|\.)?/g;function nl(e,t){e.seq.push(t),e.map[t.id]=t}function kf(e,t,i){let r=e.name,a=r.length;for(Jn.lastIndex=0;;){let n=Jn.exec(r),s=Jn.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){nl(i,h===void 0?new zf(o,e,t):new Hf(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Vf(o),nl(i,c)),i=c}}}var rn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);kf(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function sl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Gf=37297,Wf=0;function Xf(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var ol=new Ve;function jf(e){Ke._getMatrix(ol,Ke.workingColorSpace,e);let t=`mat3( ${ol.elements.map(i=>i.toFixed(4))} )`;switch(Ke.getTransfer(e)){case on:return[t,"LinearTransferOETF"];case it:return[t,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ll(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Xf(e.getShaderSource(t),s)}else return a}function Yf(e,t){let i=jf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var qf={[yl]:"Linear",[bl]:"Reinhard",[Tl]:"Cineon",[qs]:"ACESFilmic",[Al]:"AgX",[Rl]:"Neutral",[wl]:"Custom"};function Kf(e,t){let i=qf[t];return i===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ya=new B;function Zf(){Ke.getLuminanceCoefficients(Ya);let e=Ya.x.toFixed(4),t=Ya.y.toFixed(4),i=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function $f(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Qf(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Jr(e){return e!==""}function hl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var em=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(e){return e.replace(em,im)}var tm=new Map;function im(e,t){let i=Ge[t];if(i===void 0){let r=tm.get(t);if(r!==void 0)i=Ge[r],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return js(i)}var rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(e){return e.replace(rm,am)}function am(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function dl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var nm={[$r]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function sm(e){return nm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var om={[Qi]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[dn]:"ENVMAP_TYPE_CUBE_UV"};function lm(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":om[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var hm={[Nr]:"ENVMAP_MODE_REFRACTION"};function um(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":hm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cm={[El]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Fh]:"ENVMAP_BLENDING_ADD"};function dm(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":cm[e.combine]||"ENVMAP_BLENDING_NONE"}function pm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function fm(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=sm(i),h=lm(i),c=um(i),p=dm(i),u=pm(i),m=Jf(i),E=$f(n),y=a.createProgram(),g,d,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jr).join(`
`),d.length>0&&(d+=`
`)):(g=[dl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),d=[dl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pi?"#define TONE_MAPPING":"",i.toneMapping!==pi?Ge.tonemapping_pars_fragment:"",i.toneMapping!==pi?Kf("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Yf("linearToOutputTexel",i.outputColorSpace),Zf(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jr).join(`
`)),s=js(s),s=hl(s,i),s=ul(s,i),o=js(o),o=hl(o,i),o=ul(o,i),s=cl(s),o=cl(o),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",i.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let O=R+g+s,M=R+d+o,b=sl(a,a.VERTEX_SHADER,O),w=sl(a,a.FRAGMENT_SHADER,M);a.attachShader(y,b),a.attachShader(y,w),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function T(N){if(e.debug.checkShaderErrors){let F=a.getProgramInfoLog(y)||"",z=a.getShaderInfoLog(b)||"",A=a.getShaderInfoLog(w)||"",k=F.trim(),J=z.trim(),W=A.trim(),le=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(le=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,b,w);else{let K=ll(a,b,"vertex"),j=ll(a,w,"fragment");Je("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+K+`
`+j)}else k!==""?Ne("WebGLProgram: Program Info Log:",k):(J===""||W==="")&&(q=!1);q&&(N.diagnostics={runnable:le,programLog:k,vertexShader:{log:J,prefix:g},fragmentShader:{log:W,prefix:d}})}a.deleteShader(b),a.deleteShader(w),f=new rn(a,y),S=Qf(a,y)}let f;this.getUniforms=function(){return f===void 0&&T(this),f};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(y,Gf)),I},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Wf++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=w,this}var mm=0,gm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _m(e),t.set(e,i)),i}},_m=class{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}};function vm(e){return e===er||e===an||e===nn}function Mm(e,t,i,r,a,n){let s=new ao,o=new gm,l=new Set,h=[],c=new Map,p=r.logarithmicDepthBuffer,u=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(f){return l.add(f),f===0?"uv":`uv${f}`}function y(f,S,I,N,F,z){let A=N.fog,k=F.geometry,J=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?N.environment:null,W=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,le=t.get(f.envMap||J,W),q=le&&le.mapping===dn?le.image.height:null,K=m[f.type];f.precision!==null&&(u=r.getMaxPrecision(f.precision),u!==f.precision&&Ne("WebGLProgram.getParameters:",f.precision,"not supported, using",u,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ze=j!==void 0?j.length:0,we=0;k.morphAttributes.position!==void 0&&(we=1),k.morphAttributes.normal!==void 0&&(we=2),k.morphAttributes.color!==void 0&&(we=3);let ot,Fe,Y,ie;if(K){let gt=hi[K];ot=gt.vertexShader,Fe=gt.fragmentShader}else{ot=f.vertexShader,Fe=f.fragmentShader;let gt=o.getVertexShaderStage(f),et=o.getFragmentShaderStage(f);o.update(f,gt,et),Y=gt.id,ie=et.id}let se=e.getRenderTarget(),Re=e.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,tt=!!f.map,$e=!!f.matcap,Oe=!!le,ht=!!f.aoMap,wt=!!f.lightMap,Nt=!!f.bumpMap&&f.wireframe===!1,lt=!!f.normalMap,It=!!f.displacementMap,ut=!!f.emissiveMap,mt=!!f.metalnessMap,D=!!f.roughnessMap,Ct=f.anisotropy>0,Qe=f.clearcoat>0,ct=f.dispersion>0,x=f.retroreflectivity>0,_=f.iridescence>0,P=f.sheen>0,X=f.transmission>0,$=Ct&&!!f.anisotropyMap,oe=Qe&&!!f.clearcoatMap,de=Qe&&!!f.clearcoatNormalMap,U=Qe&&!!f.clearcoatRoughnessMap,re=_&&!!f.iridescenceMap,ue=_&&!!f.iridescenceThicknessMap,xe=P&&!!f.sheenColorMap,te=P&&!!f.sheenRoughnessMap,Te=!!f.specularMap,Ae=!!f.specularColorMap,Ie=!!f.specularIntensityMap,Xe=X&&!!f.transmissionMap,C=X&&!!f.thicknessMap,Z=!!f.gradientMap,Q=!!f.alphaMap,_e=f.alphaTest>0,ye=!!f.alphaHash,ee=!!f.extensions,fe=pi;f.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(fe=e.toneMapping);let De={shaderID:K,shaderType:f.type,shaderName:f.name,vertexShader:ot,fragmentShader:Fe,defines:f.defines,customVertexShaderID:Y,customFragmentShaderID:ie,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:u,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:se===null?e.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:tt,matcap:$e,envMap:Oe,envMapMode:Oe&&le.mapping,envMapCubeUVHeight:q,aoMap:ht,lightMap:wt,bumpMap:Nt,normalMap:lt,displacementMap:It,emissiveMap:ut,normalMapObjectSpace:lt&&f.normalMapType===Hh,normalMapTangentSpace:lt&&f.normalMapType===Hs,packedNormalMap:lt&&f.normalMapType===Hs&&vm(f.normalMap.format),metalnessMap:mt,roughnessMap:D,anisotropy:Ct,anisotropyMap:$,clearcoat:Qe,clearcoatMap:oe,clearcoatNormalMap:de,clearcoatRoughnessMap:U,dispersion:ct,retroreflection:x,iridescence:_,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:P,sheenColorMap:xe,sheenRoughnessMap:te,specularMap:Te,specularColorMap:Ae,specularIntensityMap:Ie,transmission:X,transmissionMap:Xe,thicknessMap:C,gradientMap:Z,opaque:f.transparent===!1&&f.blending===Qr&&f.alphaToCoverage===!1,alphaMap:Q,alphaTest:_e,alphaHash:ye,combine:f.combine,mapUv:tt&&E(f.map.channel),aoMapUv:ht&&E(f.aoMap.channel),lightMapUv:wt&&E(f.lightMap.channel),bumpMapUv:Nt&&E(f.bumpMap.channel),normalMapUv:lt&&E(f.normalMap.channel),displacementMapUv:It&&E(f.displacementMap.channel),emissiveMapUv:ut&&E(f.emissiveMap.channel),metalnessMapUv:mt&&E(f.metalnessMap.channel),roughnessMapUv:D&&E(f.roughnessMap.channel),anisotropyMapUv:$&&E(f.anisotropyMap.channel),clearcoatMapUv:oe&&E(f.clearcoatMap.channel),clearcoatNormalMapUv:de&&E(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&E(f.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&E(f.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&E(f.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&E(f.sheenColorMap.channel),sheenRoughnessMapUv:te&&E(f.sheenRoughnessMap.channel),specularMapUv:Te&&E(f.specularMap.channel),specularColorMapUv:Ae&&E(f.specularColorMap.channel),specularIntensityMapUv:Ie&&E(f.specularIntensityMap.channel),transmissionMapUv:Xe&&E(f.transmissionMap.channel),thicknessMapUv:C&&E(f.thicknessMap.channel),alphaMapUv:Q&&E(f.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(lt||Ct),vertexNormals:!!k.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(tt||Q),fog:!!A,useFog:f.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||k.attributes.normal===void 0&&lt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Re,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:we,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:fe,decodeVideoTexture:tt&&f.map.isVideoTexture===!0&&Ke.getTransfer(f.map.colorSpace)===it,decodeVideoTextureEmissive:ut&&f.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(f.emissiveMap.colorSpace)===it,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===bi,flipSided:f.side===Wt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ee&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&f.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function g(f){let S=[];if(f.shaderID?S.push(f.shaderID):(S.push(f.customVertexShaderID),S.push(f.customFragmentShaderID)),f.defines!==void 0)for(let I in f.defines)S.push(I),S.push(f.defines[I]);return f.isRawShaderMaterial===!1&&(d(S,f),R(S,f),S.push(e.outputColorSpace)),S.push(f.customProgramCacheKey),S.join()}function d(f,S){f.push(S.precision),f.push(S.outputColorSpace),f.push(S.envMapMode),f.push(S.envMapCubeUVHeight),f.push(S.mapUv),f.push(S.alphaMapUv),f.push(S.lightMapUv),f.push(S.aoMapUv),f.push(S.bumpMapUv),f.push(S.normalMapUv),f.push(S.displacementMapUv),f.push(S.emissiveMapUv),f.push(S.metalnessMapUv),f.push(S.roughnessMapUv),f.push(S.anisotropyMapUv),f.push(S.clearcoatMapUv),f.push(S.clearcoatNormalMapUv),f.push(S.clearcoatRoughnessMapUv),f.push(S.iridescenceMapUv),f.push(S.iridescenceThicknessMapUv),f.push(S.sheenColorMapUv),f.push(S.sheenRoughnessMapUv),f.push(S.specularMapUv),f.push(S.specularColorMapUv),f.push(S.specularIntensityMapUv),f.push(S.transmissionMapUv),f.push(S.thicknessMapUv),f.push(S.combine),f.push(S.fogExp2),f.push(S.sizeAttenuation),f.push(S.morphTargetsCount),f.push(S.morphAttributeCount),f.push(S.numSunLights),f.push(S.numDirLights),f.push(S.numPointLights),f.push(S.numSpotLights),f.push(S.numSpotLightMaps),f.push(S.numHemiLights),f.push(S.numRectAreaLights),f.push(S.numSunLightShadows),f.push(S.numDirLightShadows),f.push(S.numPointLightShadows),f.push(S.numSpotLightShadows),f.push(S.numSpotLightShadowsWithMaps),f.push(S.numLightProbes),f.push(S.shadowMapType),f.push(S.toneMapping),f.push(S.numClippingPlanes),f.push(S.numClipIntersection),f.push(S.depthPacking)}function R(f,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),f.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),f.push(s.mask)}function O(f){let S=m[f.type],I;if(S){let N=hi[S];I=Du.clone(N.uniforms)}else I=f.uniforms;return I}function M(f,S){let I=c.get(S);return I!==void 0?++I.usedTimes:(I=new fm(e,S,f,a),h.push(I),c.set(S,I)),I}function b(f){if(--f.usedTimes===0){let S=h.indexOf(f);h[S]=h[h.length-1],h.pop(),c.delete(f.cacheKey),f.destroy()}}function w(f){o.remove(f)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:O,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:T}}function Sm(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function xm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function pl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function fl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,E,y,g,d){let R=e[t];return R===void 0?(R={id:u.id,object:u,geometry:m,material:E,materialVariant:s(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:d},e[t]=R):(R.id=u.id,R.object=u,R.geometry=m,R.material=E,R.materialVariant=s(u),R.groupOrder=y,R.renderOrder=u.renderOrder,R.z=g,R.group=d),t++,R}function l(u,m,E,y,g,d,R){R.reversedDepth===!0&&(g=-g);let O=o(u,m,E,y,g,d);E.transmission>0?r.push(O):E.transparent===!0?a.push(O):i.push(O)}function h(u,m,E,y,g,d){let R=o(u,m,E,y,g,d);E.transmission>0?r.unshift(R):E.transparent===!0?a.unshift(R):i.unshift(R)}function c(u,m){i.length>1&&i.sort(u||xm),r.length>1&&r.sort(m||pl),a.length>1&&a.sort(m||pl)}function p(){for(let u=t,m=e.length;u<m;u++){let E=e[u];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:p,sort:c}}function Em(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new fl,e.set(r,[s])):a>=n.length?(s=new fl,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function ym(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new B,color:new Be};break;case"SpotLight":i={position:new B,direction:new B,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new B,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new B,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=i,i}}}function bm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Tm=0;function wm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Am(e){let t=new ym,i=bm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new B);let a=new B,n=new pt,s=new pt;function o(h){let c=0,p=0,u=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let m=0,E=0,y=0,g=0,d=0,R=0,O=0,M=0,b=0,w=0,T=0,f=0,S=0,I=0;h.sort(wm);for(let F=0,z=h.length;F<z;F++){let A=h[F],k=A.color,J=A.intensity,W=A.distance,le=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===er?le=A.shadow.map.texture:le=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)c+=k.r*J,p+=k.g*J,u+=k.b*J;else if(A.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(A.sh.coefficients[q],J);I++}else if(A.isSunLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,j=i.get(A);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[E]=j,r.sunShadowMap[E]=le;let ze=K.getViewportCount();for(let we=0;we<ze;we++)r.sunShadowMatrix[y+we]=K.getMatrix(we),r.sunShadowCascade[y+we]=K._cascadeData[we];y+=ze,E++}r.sun[m]=q,m++}else if(A.isDirectionalLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,j=i.get(A);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=le,r.directionalShadowMatrix[g]=A.shadow.matrix,b++}r.directional[g]=q,g++}else if(A.isSpotLight){let q=t.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(k).multiplyScalar(J),q.distance=W,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,r.spot[R]=q;let K=A.shadow;if(A.map&&(r.spotLightMap[f]=A.map,f++,K.updateMatrices(A),A.castShadow&&S++),r.spotLightMatrix[R]=K.matrix,A.castShadow){let j=i.get(A);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=le,T++}R++}else if(A.isRectAreaLight){let q=t.get(A);q.color.copy(k).multiplyScalar(J),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),r.rectArea[O]=q,O++}else if(A.isPointLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),q.distance=A.distance,q.decay=A.decay,A.castShadow){let K=A.shadow,j=i.get(A);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,r.pointShadow[d]=j,r.pointShadowMap[d]=le,r.pointShadowMatrix[d]=A.shadow.matrix,w++}r.point[d]=q,d++}else if(A.isHemisphereLight){let q=t.get(A);q.skyColor.copy(A.color).multiplyScalar(J),q.groundColor.copy(A.groundColor).multiplyScalar(J),r.hemi[M]=q,M++}}O>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=p,r.ambient[2]=u;let N=r.hash;(N.sunLength!==m||N.directionalLength!==g||N.pointLength!==d||N.spotLength!==R||N.rectAreaLength!==O||N.hemiLength!==M||N.numSunShadows!==E||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==T||N.numSpotMaps!==f||N.numLightProbes!==I)&&(r.sun.length=m,r.directional.length=g,r.spot.length=R,r.rectArea.length=O,r.point.length=d,r.hemi.length=M,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+f-S,r.spotLightMap.length=f,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=I,N.sunLength=m,N.directionalLength=g,N.pointLength=d,N.spotLength=R,N.rectAreaLength=O,N.hemiLength=M,N.numSunShadows=E,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=T,N.numSpotMaps=f,N.numLightProbes=I,r.version=Tm++)}function l(h,c){let p=0,u=0,m=0,E=0,y=0,g=0,d=c.matrixWorldInverse;for(let R=0,O=h.length;R<O;R++){let M=h[R];if(M.isSunLight){let b=r.sun[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),p++}else if(M.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(d),u++}else if(M.isSpotLight){let b=r.spot[E];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(d),E++}else if(M.isRectAreaLight){let b=r.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),s.identity(),n.copy(M.matrixWorld),n.premultiply(d),s.extractRotation(n),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),y++}else if(M.isPointLight){let b=r.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let b=r.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:r}}function ml(e){let t=new Am(e),i=[],r=[],a=[];function n(u){p.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let p={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:p,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Rm(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new ml(e),t.set(a,[o])):n>=s.length?(o=new ml(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Cm=`void main() {
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
}`,Lm=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Dm=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],gl=new pt,Kr=new B,$n=new B;function Um(e,t,i){let r=new no,a=new Le,n=new Le,s=new vt,o=new Fu,l=new Bu,h={},c=i.maxTextureSize,p={[$i]:Wt,[Wt]:$i,[bi]:bi},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Cm,fragmentShader:Pm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let E=new qt;E.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Vt(E,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let d=this.type;this.render=function(w,T,f){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===_h&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let S=e.getRenderTarget(),I=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),F=e.state;F.setBlending(wi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=d!==this.type;z&&T.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(k=>k.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,k=w.length;A<k;A++){let J=w[A],W=J.shadow;if(W===void 0){Ne("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let le=W.getFrameExtents();a.multiply(le),n.copy(W.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/le.x),a.x=n.x*le.x,W.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/le.y),a.y=n.y*le.y,W.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Zr){if(J.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new si(a.x,a.y,{format:er,type:mi,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new na(a.x,a.y,ci),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=Ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt}else J.isPointLight?(W.map=new lh(a.x),W.map.depthTexture=new Ru(a.x,fi)):(W.map=new si(a.x,a.y),W.map.depthTexture=new na(a.x,a.y,fi)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=Ri,this.type===$r?(W.map.depthTexture.compareFunction=q?io:to,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);let K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,f);for(let j=0;j<K;j++){let ze=W.getCamera(j);if(J.isPointLight){let we=W.camera,ot=W.matrix,Fe=J.distance||we.far;Fe!==we.far&&(we.far=Fe,we.updateProjectionMatrix()),Kr.setFromMatrixPosition(J.matrixWorld),we.position.copy(Kr),$n.copy(we.position),$n.add(Lm[j]),we.up.copy(Dm[j]),we.lookAt($n),we.updateMatrixWorld(),ot.makeTranslation(-Kr.x,-Kr.y,-Kr.z),gl.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(gl,we.coordinateSystem,we.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,j),e.clear();else{j===0&&(e.setRenderTarget(W.map),e.clear());let we=W.getViewport(j);s.set(n.x*we.x,n.y*we.y,n.x*we.z,n.y*we.w),F.viewport(s)}r=W.getFrustum(j),M(T,f,ze,J,this.type)}W.isPointLightShadow!==!0&&this.type===Zr&&R(W,f),W.needsUpdate=!1}d=this.type,g.needsUpdate=!1,e.setRenderTarget(S,I,N)};function R(w,T){let f=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new si(a.x,a.y,{format:er,type:mi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(T,null,f,u,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(T,null,f,m,y,null)}function O(w,T,f,S){let I=null,N=f.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)I=N;else if(I=f.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=I.uuid,z=T.uuid,A=h[F];A===void 0&&(A={},h[F]=A);let k=A[z];k===void 0&&(k=I.clone(),A[z]=k,T.addEventListener("dispose",b)),I=k}if(I.visible=T.visible,I.wireframe=T.wireframe,S===Zr?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:p[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,f.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=e.properties.get(I);F.light=f}return I}function M(w,T,f,S,I){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Zr)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,w.matrixWorld);let F=t.update(w),z=w.material;if(Array.isArray(z)){let A=F.groups;for(let k=0,J=A.length;k<J;k++){let W=A[k],le=z[W.materialIndex];if(le&&le.visible){let q=O(w,le,S,I);w.onBeforeShadow(e,w,T,f,F,q,W),e.renderBufferDirect(f,null,F,q,w,W),w.onAfterShadow(e,w,T,f,F,q,W)}}}else if(z.visible){let A=O(w,z,S,I);w.onBeforeShadow(e,w,T,f,F,A,null),e.renderBufferDirect(f,null,F,A,w,null),w.onAfterShadow(e,w,T,f,F,A,null)}}let N=w.children;for(let F=0,z=N.length;F<z;F++)M(N[F],T,f,S,I)}function b(w){w.target.removeEventListener("dispose",b);for(let T in h){let f=h[T],S=w.target.uuid;S in f&&(f[S].dispose(),delete f[S])}}}function Nm(e,t){function i(){let C=!1,Z=new vt,Q=null,_e=new vt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!C&&(e.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){C=ye},setClear:function(ye,ee,fe,De,gt){gt===!0&&(ye*=De,ee*=De,fe*=De),Z.set(ye,ee,fe,De),_e.equals(Z)===!1&&(e.clearColor(ye,ee,fe,De),_e.copy(Z))},reset:function(){C=!1,Q=null,_e.set(-1,0,0,0)}}}function r(){let C=!1,Z=!1,Q=null,_e=null,ye=null;return{setReversed:function(ee){if(Z!==ee){let fe=t.get("EXT_clip_control");ee?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Z=ee;let De=ye;ye=null,this.setClear(De)}},getReversed:function(){return Z},setTest:function(ee){ee?se(e.DEPTH_TEST):Re(e.DEPTH_TEST)},setMask:function(ee){Q!==ee&&!C&&(e.depthMask(ee),Q=ee)},setFunc:function(ee){if(Z&&(ee=Jh[ee]),_e!==ee){switch(ee){case ts:e.depthFunc(e.NEVER);break;case is:e.depthFunc(e.ALWAYS);break;case rs:e.depthFunc(e.LESS);break;case ta:e.depthFunc(e.LEQUAL);break;case as:e.depthFunc(e.EQUAL);break;case ns:e.depthFunc(e.GEQUAL);break;case ss:e.depthFunc(e.GREATER);break;case os:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_e=ee}},setLocked:function(ee){C=ee},setClear:function(ee){ye!==ee&&(ye=ee,Z&&(ee=1-ee),e.clearDepth(ee))},reset:function(){C=!1,Q=null,_e=null,ye=null,Z=!1}}}function a(){let C=!1,Z=null,Q=null,_e=null,ye=null,ee=null,fe=null,De=null,gt=null;return{setTest:function(et){C||(et?se(e.STENCIL_TEST):Re(e.STENCIL_TEST))},setMask:function(et){Z!==et&&!C&&(e.stencilMask(et),Z=et)},setFunc:function(et,Kt,ti){(Q!==et||_e!==Kt||ye!==ti)&&(e.stencilFunc(et,Kt,ti),Q=et,_e=Kt,ye=ti)},setOp:function(et,Kt,ti){(ee!==et||fe!==Kt||De!==ti)&&(e.stencilOp(et,Kt,ti),ee=et,fe=Kt,De=ti)},setLocked:function(et){C=et},setClear:function(et){gt!==et&&(e.clearStencil(et),gt=et)},reset:function(){C=!1,Z=null,Q=null,_e=null,ye=null,ee=null,fe=null,De=null,gt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},p={},u={},m=new WeakMap,E=[],y=null,g=!1,d=null,R=null,O=null,M=null,b=null,w=null,T=null,f=new Be(0,0,0),S=0,I=!1,N=null,F=null,z=null,A=null,k=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,le=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=le>=1):q.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=le>=2);let K=null,j={},ze=e.getParameter(e.SCISSOR_BOX),we=e.getParameter(e.VIEWPORT),ot=new vt().fromArray(ze),Fe=new vt().fromArray(we);function Y(C,Z,Q,_e){let ye=new Uint8Array(4),ee=e.createTexture();e.bindTexture(C,ee),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let fe=0;fe<Q;fe++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(Z,0,e.RGBA,1,1,_e,0,e.RGBA,e.UNSIGNED_BYTE,ye):e.texImage2D(Z+fe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ye);return ee}let ie={};ie[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(e.DEPTH_TEST),s.setFunc(ta),Nt(!1),lt(uo),se(e.CULL_FACE),ht(wi);function se(C){c[C]!==!0&&(e.enable(C),c[C]=!0)}function Re(C){c[C]!==!1&&(e.disable(C),c[C]=!1)}function Ue(C,Z){return u[C]!==Z?(e.bindFramebuffer(C,Z),u[C]=Z,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Z),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Z),!0):!1}function ge(C,Z){let Q=E,_e=!1;if(C){Q=m.get(Z),Q===void 0&&(Q=[],m.set(Z,Q));let ye=C.textures;if(Q.length!==ye.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let ee=0,fe=ye.length;ee<fe;ee++)Q[ee]=e.COLOR_ATTACHMENT0+ee;Q.length=ye.length,_e=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,_e=!0);_e&&e.drawBuffers(Q)}function tt(C){return y!==C?(e.useProgram(C),y=C,!0):!1}let $e={[xr]:e.FUNC_ADD,[Mh]:e.FUNC_SUBTRACT,[Sh]:e.FUNC_REVERSE_SUBTRACT};$e[xh]=e.MIN,$e[Eh]=e.MAX;let Oe={[yh]:e.ZERO,[bh]:e.ONE,[Th]:e.SRC_COLOR,[Sl]:e.SRC_ALPHA,[Lh]:e.SRC_ALPHA_SATURATE,[Ch]:e.DST_COLOR,[Ah]:e.DST_ALPHA,[wh]:e.ONE_MINUS_SRC_COLOR,[xl]:e.ONE_MINUS_SRC_ALPHA,[Ph]:e.ONE_MINUS_DST_COLOR,[Rh]:e.ONE_MINUS_DST_ALPHA,[Dh]:e.CONSTANT_COLOR,[Uh]:e.ONE_MINUS_CONSTANT_COLOR,[Nh]:e.CONSTANT_ALPHA,[Ih]:e.ONE_MINUS_CONSTANT_ALPHA};function ht(C,Z,Q,_e,ye,ee,fe,De,gt,et){if(C===wi){g===!0&&(Re(e.BLEND),g=!1);return}if(g===!1&&(se(e.BLEND),g=!0),C!==vh){if(C!==d||et!==I){if((R!==xr||b!==xr)&&(e.blendEquation(e.FUNC_ADD),R=xr,b=xr),et)switch(C){case Qr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case es:e.blendFunc(e.ONE,e.ONE);break;case co:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case po:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Je("WebGLState: Invalid blending: ",C);break}else switch(C){case Qr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case es:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case co:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case po:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",C);break}O=null,M=null,w=null,T=null,f.set(0,0,0),S=0,d=C,I=et}return}ye=ye||Z,ee=ee||Q,fe=fe||_e,(Z!==R||ye!==b)&&(e.blendEquationSeparate($e[Z],$e[ye]),R=Z,b=ye),(Q!==O||_e!==M||ee!==w||fe!==T)&&(e.blendFuncSeparate(Oe[Q],Oe[_e],Oe[ee],Oe[fe]),O=Q,M=_e,w=ee,T=fe),(De.equals(f)===!1||gt!==S)&&(e.blendColor(De.r,De.g,De.b,gt),f.copy(De),S=gt),d=C,I=!1}function wt(C,Z){C.side===bi?Re(e.CULL_FACE):se(e.CULL_FACE);let Q=C.side===Wt;Z&&(Q=!Q),Nt(Q),C.blending===Qr&&C.transparent===!1?ht(wi):ht(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),n.setMask(C.colorWrite);let _e=C.stencilWrite;o.setTest(_e),_e&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ut(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):Re(e.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(C){N!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),N=C)}function lt(C){C!==mh?(se(e.CULL_FACE),C!==F&&(C===uo?e.cullFace(e.BACK):C===gh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Re(e.CULL_FACE),F=C}function It(C){C!==z&&(W&&e.lineWidth(C),z=C)}function ut(C,Z,Q){C?(se(e.POLYGON_OFFSET_FILL),(A!==Z||k!==Q)&&(A=Z,k=Q,s.getReversed()&&(Z=-Z),e.polygonOffset(Z,Q))):Re(e.POLYGON_OFFSET_FILL)}function mt(C){C?se(e.SCISSOR_TEST):Re(e.SCISSOR_TEST)}function D(C){C===void 0&&(C=e.TEXTURE0+J-1),K!==C&&(e.activeTexture(C),K=C)}function Ct(C,Z,Q){Q===void 0&&(K===null?Q=e.TEXTURE0+J-1:Q=K);let _e=j[Q];_e===void 0&&(_e={type:void 0,texture:void 0},j[Q]=_e),(_e.type!==C||_e.texture!==Z)&&(K!==Q&&(e.activeTexture(Q),K=Q),e.bindTexture(C,Z||ie[C]),_e.type=C,_e.texture=Z)}function Qe(){let C=j[K];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ct(){try{e.compressedTexImage2D(...arguments)}catch(C){Je("WebGLState:",C)}}function x(){try{e.compressedTexImage3D(...arguments)}catch(C){Je("WebGLState:",C)}}function _(){try{e.texSubImage2D(...arguments)}catch(C){Je("WebGLState:",C)}}function P(){try{e.texSubImage3D(...arguments)}catch(C){Je("WebGLState:",C)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Je("WebGLState:",C)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Je("WebGLState:",C)}}function oe(){try{e.texStorage2D(...arguments)}catch(C){Je("WebGLState:",C)}}function de(){try{e.texStorage3D(...arguments)}catch(C){Je("WebGLState:",C)}}function U(){try{e.texImage2D(...arguments)}catch(C){Je("WebGLState:",C)}}function re(){try{e.texImage3D(...arguments)}catch(C){Je("WebGLState:",C)}}function ue(C){return p[C]!==void 0?p[C]:e.getParameter(C)}function xe(C,Z){p[C]!==Z&&(e.pixelStorei(C,Z),p[C]=Z)}function te(C){ot.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),ot.copy(C))}function Te(C){Fe.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),Fe.copy(C))}function Ae(C,Z){let Q=h.get(Z);Q===void 0&&(Q=new WeakMap,h.set(Z,Q));let _e=Q.get(C);_e===void 0&&(_e=e.getUniformBlockIndex(Z,C.name),Q.set(C,_e))}function Ie(C,Z){let Q=h.get(Z).get(C);l.get(Z)!==Q&&(e.uniformBlockBinding(Z,Q,C.__bindingPointIndex),l.set(Z,Q))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},p={},K=null,j={},u={},m=new WeakMap,E=[],y=null,g=!1,d=null,R=null,O=null,M=null,b=null,w=null,T=null,f=new Be(0,0,0),S=0,I=!1,N=null,F=null,z=null,A=null,k=null,ot.set(0,0,e.canvas.width,e.canvas.height),Fe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:se,disable:Re,bindFramebuffer:Ue,drawBuffers:ge,useProgram:tt,setBlending:ht,setMaterial:wt,setFlipSided:Nt,setCullFace:lt,setLineWidth:It,setPolygonOffset:ut,setScissorTest:mt,activeTexture:D,bindTexture:Ct,unbindTexture:Qe,compressedTexImage2D:ct,compressedTexImage3D:x,texImage2D:U,texImage3D:re,pixelStorei:xe,getParameter:ue,updateUBOMapping:Ae,uniformBlockBinding:Ie,texStorage2D:oe,texStorage3D:de,texSubImage2D:_,texSubImage3D:P,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:te,viewport:Te,reset:Xe}}function Im(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Le,c=new WeakMap,p=new Set,u,m=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(x,_){return E?new OffscreenCanvas(x,_):ln("canvas")}function g(x,_,P){let X=1,$=ct(x);if(($.width>P||$.height>P)&&(X=P/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let oe=Math.floor(X*$.width),de=Math.floor(X*$.height);u===void 0&&(u=y(oe,de));let U=_?y(oe,de):u;return U.width=oe,U.height=de,U.getContext("2d").drawImage(x,0,0,oe,de),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+de+")."),U}else return"data"in x&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),x;return x}function d(x){return x.generateMipmaps}function R(x){e.generateMipmap(x)}function O(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(x,_,P,X,$,oe=!1){if(x!==null){if(e[x]!==void 0)return e[x];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let de;X&&(de=t.get("EXT_texture_norm16"),de||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=_;if(_===e.RED&&(P===e.FLOAT&&(U=e.R32F),P===e.HALF_FLOAT&&(U=e.R16F),P===e.UNSIGNED_BYTE&&(U=e.R8),P===e.UNSIGNED_SHORT&&de&&(U=de.R16_EXT),P===e.SHORT&&de&&(U=de.R16_SNORM_EXT)),_===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.R8UI),P===e.UNSIGNED_SHORT&&(U=e.R16UI),P===e.UNSIGNED_INT&&(U=e.R32UI),P===e.BYTE&&(U=e.R8I),P===e.SHORT&&(U=e.R16I),P===e.INT&&(U=e.R32I)),_===e.RG&&(P===e.FLOAT&&(U=e.RG32F),P===e.HALF_FLOAT&&(U=e.RG16F),P===e.UNSIGNED_BYTE&&(U=e.RG8),P===e.UNSIGNED_SHORT&&de&&(U=de.RG16_EXT),P===e.SHORT&&de&&(U=de.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.RG8UI),P===e.UNSIGNED_SHORT&&(U=e.RG16UI),P===e.UNSIGNED_INT&&(U=e.RG32UI),P===e.BYTE&&(U=e.RG8I),P===e.SHORT&&(U=e.RG16I),P===e.INT&&(U=e.RG32I)),_===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.RGB8UI),P===e.UNSIGNED_SHORT&&(U=e.RGB16UI),P===e.UNSIGNED_INT&&(U=e.RGB32UI),P===e.BYTE&&(U=e.RGB8I),P===e.SHORT&&(U=e.RGB16I),P===e.INT&&(U=e.RGB32I)),_===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(U=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(U=e.RGBA16UI),P===e.UNSIGNED_INT&&(U=e.RGBA32UI),P===e.BYTE&&(U=e.RGBA8I),P===e.SHORT&&(U=e.RGBA16I),P===e.INT&&(U=e.RGBA32I)),_===e.RGB&&(P===e.UNSIGNED_SHORT&&de&&(U=de.RGB16_EXT),P===e.SHORT&&de&&(U=de.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(U=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(U=e.R11F_G11F_B10F)),_===e.RGBA){let re=oe?on:Ke.getTransfer($);P===e.FLOAT&&(U=e.RGBA32F),P===e.HALF_FLOAT&&(U=e.RGBA16F),P===e.UNSIGNED_BYTE&&(U=re===it?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&de&&(U=de.RGBA16_EXT),P===e.SHORT&&de&&(U=de.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(U=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(U=e.RGB5_A1)}return(U===e.R16F||U===e.R32F||U===e.RG16F||U===e.RG32F||U===e.RGBA16F||U===e.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function b(x,_){let P;return x?_===null||_===fi||_===ra?P=e.DEPTH24_STENCIL8:_===ci?P=e.DEPTH32F_STENCIL8:_===ia&&(P=e.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===ra?P=e.DEPTH_COMPONENT24:_===ci?P=e.DEPTH_COMPONENT32F:_===ia&&(P=e.DEPTH_COMPONENT16),P}function w(x,_){return d(x)===!0||x.isFramebufferTexture&&x.minFilter!==Dt&&x.minFilter!==Ut?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function T(x){let _=x.target;_.removeEventListener("dispose",T),S(_),_.isVideoTexture&&c.delete(_),_.isHTMLTexture&&p.delete(_)}function f(x){let _=x.target;_.removeEventListener("dispose",f),N(_)}function S(x){let _=r.get(x);if(_.__webglInit===void 0)return;let P=x.source,X=m.get(P);if(X){let $=X[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(x),Object.keys(X).length===0&&m.delete(P)}r.remove(x)}function I(x){let _=r.get(x);e.deleteTexture(_.__webglTexture);let P=x.source,X=m.get(P);delete X[_.__cacheKey],s.memory.textures--}function N(x){let _=r.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),r.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let $=0;$<_.__webglFramebuffer[X].length;$++)e.deleteFramebuffer(_.__webglFramebuffer[X][$]);else e.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)e.deleteFramebuffer(_.__webglFramebuffer[X]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let P=x.textures;for(let X=0,$=P.length;X<$;X++){let oe=r.get(P[X]);oe.__webglTexture&&(e.deleteTexture(oe.__webglTexture),s.memory.textures--),r.remove(P[X])}r.remove(x)}let F=0;function z(){F=0}function A(){return F}function k(x){F=x}function J(){let x=F;return x>=a.maxTextures&&Ne("WebGLTextures: Trying to use "+(x+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,x}function W(x){let _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function le(x,_){let P=r.get(x);if(x.isVideoTexture&&Ct(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&P.__version!==x.version){let X=x.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(P,x,_);return}}else x.isExternalTexture&&(P.__webglTexture=x.sourceTexture?x.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+_)}function q(x,_){let P=r.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&P.__version!==x.version){Re(P,x,_);return}else x.isExternalTexture&&(P.__webglTexture=x.sourceTexture?x.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+_)}function K(x,_){let P=r.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&P.__version!==x.version){Re(P,x,_);return}i.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+_)}function j(x,_){let P=r.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&P.__version!==x.version){Ue(P,x,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+_)}let ze={[ls]:e.REPEAT,[Ti]:e.CLAMP_TO_EDGE,[hs]:e.MIRRORED_REPEAT},we={[Dt]:e.NEAREST,[Bh]:e.NEAREST_MIPMAP_NEAREST,[Ma]:e.NEAREST_MIPMAP_LINEAR,[Ut]:e.LINEAR,[Sn]:e.LINEAR_MIPMAP_NEAREST,[Ki]:e.LINEAR_MIPMAP_LINEAR},ot={[kh]:e.NEVER,[Yh]:e.ALWAYS,[Gh]:e.LESS,[to]:e.LEQUAL,[Wh]:e.EQUAL,[io]:e.GEQUAL,[Xh]:e.GREATER,[jh]:e.NOTEQUAL};function Fe(x,_){if(_.type===ci&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ut||_.magFilter===Sn||_.magFilter===Ma||_.magFilter===Ki||_.minFilter===Ut||_.minFilter===Sn||_.minFilter===Ma||_.minFilter===Ki)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,ze[_.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,ze[_.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,ze[_.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,we[_.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Dt||_.minFilter!==Ma&&_.minFilter!==Ki||_.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(x,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Y(x,_){let P=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",T));let X=_.source,$=m.get(X);$===void 0&&($={},m.set(X,$));let oe=W(_);if(oe!==x.__cacheKey){$[oe]===void 0&&($[oe]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,P=!0),$[oe].usedTimes++;let de=$[x.__cacheKey];de!==void 0&&($[x.__cacheKey].usedTimes--,de.usedTimes===0&&I(_)),x.__cacheKey=oe,x.__webglTexture=$[oe].texture}return P}function ie(x,_,P){return Math.floor(Math.floor(x/P)/_)}function se(x,_,P,X){let $=x.updateRanges;if($.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,P,X,_.data);else{$.sort((ue,xe)=>ue.start-xe.start);let oe=0;for(let ue=1;ue<$.length;ue++){let xe=$[oe],te=$[ue],Te=xe.start+xe.count,Ae=ie(te.start,_.width,4),Ie=ie(xe.start,_.width,4);te.start<=Te+1&&Ae===Ie&&ie(te.start+te.count-1,_.width,4)===Ae?xe.count=Math.max(xe.count,te.start+te.count-xe.start):(++oe,$[oe]=te)}$.length=oe+1;let de=i.getParameter(e.UNPACK_ROW_LENGTH),U=i.getParameter(e.UNPACK_SKIP_PIXELS),re=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let ue=0,xe=$.length;ue<xe;ue++){let te=$[ue],Te=Math.floor(te.start/4),Ae=Math.ceil(te.count/4),Ie=Te%_.width,Xe=Math.floor(Te/_.width),C=Ae;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(e.UNPACK_SKIP_ROWS,Xe),i.texSubImage2D(e.TEXTURE_2D,0,Ie,Xe,C,1,P,X,_.data)}x.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,de),i.pixelStorei(e.UNPACK_SKIP_PIXELS,U),i.pixelStorei(e.UNPACK_SKIP_ROWS,re)}}function Re(x,_,P){let X=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=e.TEXTURE_3D);let $=Y(x,_),oe=_.source;i.bindTexture(X,x.__webglTexture,e.TEXTURE0+P);let de=r.get(oe);if(oe.version!==de.__version||$===!0){if(i.activeTexture(e.TEXTURE0+P),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let Z=Ke.getPrimaries(Ke.workingColorSpace),Q=_.colorSpace===Oi?null:Ke.getPrimaries(_.colorSpace),_e=_.colorSpace===Oi||Z===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let U=g(_.image,!1,a.maxTextureSize);U=Qe(_,U);let re=n.convert(_.format,_.colorSpace),ue=n.convert(_.type),xe=M(_.internalFormat,re,ue,_.normalized,_.colorSpace,_.isVideoTexture);Fe(X,_);let te,Te=_.mipmaps,Ae=_.isVideoTexture!==!0,Ie=de.__version===void 0||$===!0,Xe=oe.dataReady,C=w(_,U);if(_.isDepthTexture)xe=b(_.format===Zi,_.type),Ie&&(Ae?i.texStorage2D(e.TEXTURE_2D,1,xe,U.width,U.height):i.texImage2D(e.TEXTURE_2D,0,xe,U.width,U.height,0,re,ue,null));else if(_.isDataTexture)if(Te.length>0){Ae&&Ie&&i.texStorage2D(e.TEXTURE_2D,C,xe,Te[0].width,Te[0].height);for(let Z=0,Q=Te.length;Z<Q;Z++)te=Te[Z],Ae?Xe&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,te.width,te.height,re,ue,te.data):i.texImage2D(e.TEXTURE_2D,Z,xe,te.width,te.height,0,re,ue,te.data);_.generateMipmaps=!1}else Ae?(Ie&&i.texStorage2D(e.TEXTURE_2D,C,xe,U.width,U.height),Xe&&se(_,U,re,ue)):i.texImage2D(e.TEXTURE_2D,0,xe,U.width,U.height,0,re,ue,U.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ae&&Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,C,xe,Te[0].width,Te[0].height,U.depth);for(let Z=0,Q=Te.length;Z<Q;Z++)if(te=Te[Z],_.format!==ni)if(re!==null)if(Ae){if(Xe)if(_.layerUpdates.size>0){let _e=qo(te.width,te.height,_.format,_.type);for(let ye of _.layerUpdates){let ee=te.data.subarray(ye*_e/te.data.BYTES_PER_ELEMENT,(ye+1)*_e/te.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,ye,te.width,te.height,1,re,ee)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,te.width,te.height,U.depth,re,te.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,xe,te.width,te.height,U.depth,0,te.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Xe&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,te.width,te.height,U.depth,re,ue,te.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Z,xe,te.width,te.height,U.depth,0,re,ue,te.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ae&&Ie&&i.texStorage2D(e.TEXTURE_2D,C,xe,Te[0].width,Te[0].height);for(let Z=0,Q=Te.length;Z<Q;Z++)te=Te[Z],_.format!==ni?re!==null?Ae?Xe&&i.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,te.width,te.height,re,te.data):i.compressedTexImage2D(e.TEXTURE_2D,Z,xe,te.width,te.height,0,te.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Xe&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,te.width,te.height,re,ue,te.data):i.texImage2D(e.TEXTURE_2D,Z,xe,te.width,te.height,0,re,ue,te.data)}else if(_.isDataArrayTexture)if(Ae){if(Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,C,xe,U.width,U.height,U.depth),Xe)if(_.layerUpdates.size>0){let Z=qo(U.width,U.height,_.format,_.type);for(let Q of _.layerUpdates){let _e=U.data.subarray(Q*Z/U.data.BYTES_PER_ELEMENT,(Q+1)*Z/U.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,U.width,U.height,1,re,ue,_e)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,re,ue,U.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,U.width,U.height,U.depth,0,re,ue,U.data);else if(_.isData3DTexture)Ae?(Ie&&i.texStorage3D(e.TEXTURE_3D,C,xe,U.width,U.height,U.depth),Xe&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,re,ue,U.data)):i.texImage3D(e.TEXTURE_3D,0,xe,U.width,U.height,U.depth,0,re,ue,U.data);else if(_.isFramebufferTexture){if(Ie)if(Ae)i.texStorage2D(e.TEXTURE_2D,C,xe,U.width,U.height);else{let Z=U.width,Q=U.height;for(let _e=0;_e<C;_e++)i.texImage2D(e.TEXTURE_2D,_e,xe,Z,Q,0,re,ue,null),Z>>=1,Q>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),U.parentNode!==Z){Z.appendChild(U),p.add(_),Z.onpaint=Q=>{let _e=Q.changedElements;for(let ye of p)_e.includes(ye.image)&&(ye.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,U);else{let Q=e.RGBA,_e=e.RGBA,ye=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Q,_e,ye,U)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ae&&Ie){let Z=ct(Te[0]);i.texStorage2D(e.TEXTURE_2D,C,xe,Z.width,Z.height)}for(let Z=0,Q=Te.length;Z<Q;Z++)te=Te[Z],Ae?Xe&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,re,ue,te):i.texImage2D(e.TEXTURE_2D,Z,xe,re,ue,te);_.generateMipmaps=!1}else if(Ae){if(Ie){let Z=ct(U);i.texStorage2D(e.TEXTURE_2D,C,xe,Z.width,Z.height)}Xe&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,re,ue,U)}else i.texImage2D(e.TEXTURE_2D,0,xe,re,ue,U);d(_)&&R(X),de.__version=oe.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Ue(x,_,P){if(_.image.length!==6)return;let X=Y(x,_),$=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+P);let oe=r.get($);if($.version!==oe.__version||X===!0){i.activeTexture(e.TEXTURE0+P);let de=Ke.getPrimaries(Ke.workingColorSpace),U=_.colorSpace===Oi?null:Ke.getPrimaries(_.colorSpace),re=_.colorSpace===Oi||de===U?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ue=_.isCompressedTexture||_.image[0].isCompressedTexture,xe=_.image[0]&&_.image[0].isDataTexture,te=[];for(let ee=0;ee<6;ee++)!ue&&!xe?te[ee]=g(_.image[ee],!0,a.maxCubemapSize):te[ee]=xe?_.image[ee].image:_.image[ee],te[ee]=Qe(_,te[ee]);let Te=te[0],Ae=n.convert(_.format,_.colorSpace),Ie=n.convert(_.type),Xe=M(_.internalFormat,Ae,Ie,_.normalized,_.colorSpace),C=_.isVideoTexture!==!0,Z=oe.__version===void 0||X===!0,Q=$.dataReady,_e=w(_,Te);Fe(e.TEXTURE_CUBE_MAP,_);let ye;if(ue){C&&Z&&i.texStorage2D(e.TEXTURE_CUBE_MAP,_e,Xe,Te.width,Te.height);for(let ee=0;ee<6;ee++){ye=te[ee].mipmaps;for(let fe=0;fe<ye.length;fe++){let De=ye[fe];_.format!==ni?Ae!==null?C?Q&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,De.width,De.height,Ae,De.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Xe,De.width,De.height,0,De.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,De.width,De.height,Ae,Ie,De.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Xe,De.width,De.height,0,Ae,Ie,De.data)}}}else{if(ye=_.mipmaps,C&&Z){ye.length>0&&_e++;let ee=ct(te[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,_e,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(xe){C?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,te[ee].width,te[ee].height,Ae,Ie,te[ee].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,te[ee].width,te[ee].height,0,Ae,Ie,te[ee].data);for(let fe=0;fe<ye.length;fe++){let De=ye[fe].image[ee].image;C?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,De.width,De.height,Ae,Ie,De.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Xe,De.width,De.height,0,Ae,Ie,De.data)}}else{C?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,Ie,te[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ae,Ie,te[ee]);for(let fe=0;fe<ye.length;fe++){let De=ye[fe];C?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ae,Ie,De.image[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Xe,Ae,Ie,De.image[ee])}}}d(_)&&R(e.TEXTURE_CUBE_MAP),oe.__version=$.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ge(x,_,P,X,$,oe){let de=n.convert(P.format,P.colorSpace),U=n.convert(P.type),re=M(P.internalFormat,de,U,P.normalized,P.colorSpace),ue=r.get(_),xe=r.get(P);if(xe.__renderTarget=_,!ue.__hasExternalTextures){let te=Math.max(1,_.width>>oe),Te=Math.max(1,_.height>>oe);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?i.texImage3D($,oe,re,te,Te,_.depth,0,de,U,null):i.texImage2D($,oe,re,te,Te,0,de,U,null)}i.bindFramebuffer(e.FRAMEBUFFER,x),D(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,$,xe.__webglTexture,0,mt(_)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,$,xe.__webglTexture,oe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(x,_,P){if(e.bindRenderbuffer(e.RENDERBUFFER,x),_.depthBuffer){let X=_.depthTexture,$=X&&X.isDepthTexture?X.type:null,oe=b(_.stencilBuffer,$),de=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;D(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,mt(_),oe,_.width,_.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,mt(_),oe,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,oe,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,x)}else{let X=_.textures;for(let $=0;$<X.length;$++){let oe=X[$],de=n.convert(oe.format,oe.colorSpace),U=n.convert(oe.type),re=M(oe.internalFormat,de,U,oe.normalized,oe.colorSpace);D(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,mt(_),re,_.width,_.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,mt(_),re,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,re,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $e(x,_,P){let X=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=r.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Fe(e.TEXTURE_CUBE_MAP,_.depthTexture);let ue=n.convert(_.depthTexture.format),xe=n.convert(_.depthTexture.type),te;_.depthTexture.format===Ri?te=e.DEPTH_COMPONENT24:_.depthTexture.format===Zi&&(te=e.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,te,_.width,_.height,0,ue,xe,null)}}else le(_.depthTexture,0);let oe=$.__webglTexture,de=mt(_),U=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,re=_.depthTexture.format===Zi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ri)D(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,U,oe,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,re,U,oe,0);else if(_.depthTexture.format===Zi)D(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,U,oe,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,re,U,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(x){let _=r.get(x),P=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){let X=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=X}if(x.depthTexture&&!_.__autoAllocateDepthBuffer)if(P)for(let X=0;X<6;X++)$e(_.__webglFramebuffer[X],x,X);else{let X=x.texture.mipmaps;X&&X.length>0?$e(_.__webglFramebuffer[0],x,0):$e(_.__webglFramebuffer,x,0)}else if(P){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=e.createRenderbuffer(),tt(_.__webglDepthbuffer[X],x,!1);else{let $=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,oe)}}else{let X=x.texture.mipmaps;if(X&&X.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),tt(_.__webglDepthbuffer,x,!1);else{let $=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,oe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ht(x,_,P){let X=r.get(x);_!==void 0&&ge(X.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Oe(x)}function wt(x){let _=x.texture,P=r.get(x),X=r.get(_);x.addEventListener("dispose",f);let $=x.textures,oe=x.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=_.version,s.memory.textures++),oe){P.__webglFramebuffer=[];for(let U=0;U<6;U++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[U]=[];for(let re=0;re<_.mipmaps.length;re++)P.__webglFramebuffer[U][re]=e.createFramebuffer()}else P.__webglFramebuffer[U]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let U=0;U<_.mipmaps.length;U++)P.__webglFramebuffer[U]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(de)for(let U=0,re=$.length;U<re;U++){let ue=r.get($[U]);ue.__webglTexture===void 0&&(ue.__webglTexture=e.createTexture(),s.memory.textures++)}if(x.samples>0&&D(x)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let U=0;U<$.length;U++){let re=$[U];P.__webglColorRenderbuffer[U]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[U]);let ue=n.convert(re.format,re.colorSpace),xe=n.convert(re.type),te=M(re.internalFormat,ue,xe,re.normalized,re.colorSpace,x.isXRRenderTarget===!0),Te=mt(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,te,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+U,e.RENDERBUFFER,P.__webglColorRenderbuffer[U])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),tt(P.__webglDepthRenderbuffer,x,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(oe){i.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(e.TEXTURE_CUBE_MAP,_);for(let U=0;U<6;U++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)ge(P.__webglFramebuffer[U][re],x,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,re);else ge(P.__webglFramebuffer[U],x,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);d(_)&&R(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(de){for(let U=0,re=$.length;U<re;U++){let ue=$[U],xe=r.get(ue),te=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(te=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(te,xe.__webglTexture),Fe(te,ue),ge(P.__webglFramebuffer,x,ue,e.COLOR_ATTACHMENT0+U,te,0),d(ue)&&R(te)}i.unbindTexture()}else{let U=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(U=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(U,X.__webglTexture),Fe(U,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)ge(P.__webglFramebuffer[re],x,_,e.COLOR_ATTACHMENT0,U,re);else ge(P.__webglFramebuffer,x,_,e.COLOR_ATTACHMENT0,U,0);d(_)&&R(U),i.unbindTexture()}x.depthBuffer&&Oe(x)}function Nt(x){let _=x.textures;for(let P=0,X=_.length;P<X;P++){let $=_[P];if(d($)){let oe=O(x),de=r.get($).__webglTexture;i.bindTexture(oe,de),R(oe),i.unbindTexture()}}}let lt=[],It=[];function ut(x){if(x.samples>0){if(D(x)===!1){let _=x.textures,P=x.width,X=x.height,$=e.COLOR_BUFFER_BIT,oe=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=r.get(x),U=_.length>1;if(U)for(let ue=0;ue<_.length;ue++)i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let re=x.texture.mipmaps;re&&re.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(x.resolveDepthBuffer&&(x.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),U){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let xe=r.get(_[ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xe,0)}e.blitFramebuffer(0,0,P,X,0,0,P,X,$,e.NEAREST),l===!0&&(lt.length=0,It.length=0,lt.push(e.COLOR_ATTACHMENT0+ue),x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&(lt.push(oe),It.push(oe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,It)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),U)for(let ue=0;ue<_.length;ue++){i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let xe=r.get(_[ue]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,xe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&l){let _=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function mt(x){return Math.min(a.maxSamples,x.samples)}function D(x){let _=r.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(x){let _=s.render.frame;c.get(x)!==_&&(c.set(x,_),x.update())}function Qe(x,_){let P=x.colorSpace,X=x.format,$=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||P!==sn&&P!==Oi&&(Ke.getTransfer(P)===it?(X!==ni||$!==Yt)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",P)),_}function ct(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(h.width=x.naturalWidth||x.width,h.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(h.width=x.displayWidth,h.height=x.displayHeight):(h.width=x.width,h.height=x.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=A,this.setTextureUnits=k,this.setTexture2D=le,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=ht,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Om(e,t){function i(r,a=Oi){let n,s=Ke.getTransfer(a);if(r===Yt)return e.UNSIGNED_BYTE;if(r===Zs)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Js)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Dl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ul)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Pl)return e.BYTE;if(r===Ll)return e.SHORT;if(r===ia)return e.UNSIGNED_SHORT;if(r===Ks)return e.INT;if(r===fi)return e.UNSIGNED_INT;if(r===ci)return e.FLOAT;if(r===mi)return e.HALF_FLOAT;if(r===Nl)return e.ALPHA;if(r===Il)return e.RGB;if(r===ni)return e.RGBA;if(r===Ri)return e.DEPTH_COMPONENT;if(r===Zi)return e.DEPTH_STENCIL;if(r===Ol)return e.RED;if(r===$s)return e.RED_INTEGER;if(r===er)return e.RG;if(r===Qs)return e.RG_INTEGER;if(r===eo)return e.RGBA_INTEGER;if(r===Ka||r===Za||r===Ja||r===$a)if(s===it)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Ka)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Za)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ja)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$a)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Ka)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Za)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ja)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$a)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===us||r===cs||r===ds||r===ps)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===us)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ds)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ps)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fs||r===ms||r===gs||r===_s||r===vs||r===an||r===Ms)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===fs||r===ms)return s===it?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===gs)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===_s)return n.COMPRESSED_R11_EAC;if(r===vs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===an)return n.COMPRESSED_RG11_EAC;if(r===Ms)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ss||r===xs||r===Es||r===ys||r===bs||r===Ts||r===ws||r===As||r===Rs||r===Cs||r===Ps||r===Ls||r===Ds||r===Us)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Ss)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xs)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Es)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ys)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bs)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ts)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ws)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===As)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rs)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cs)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ps)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ls)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ds)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Us)return s===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ns||r===Is||r===Os)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Ns)return s===it?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Is)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Os)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fs||r===Bs||r===nn||r===zs)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Fs)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Bs)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ra?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Fm=`
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

}`,zm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Jl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gi({vertexShader:Fm,fragmentShader:Bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hm=class extends zi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,p=null,u=null,m=null,E=typeof XRWebGLBinding<"u",y=new zm,g={},d=t.getContextAttributes(),R=null,O=null,M=[],b=[],w=new Le,T=null,f=null,S=new $t;S.viewport=new vt;let I=new $t;I.viewport=new vt;let N=[S,I],F=new Gu,z=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=M[Y];return ie===void 0&&(ie=new Rn,M[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=M[Y];return ie===void 0&&(ie=new Rn,M[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=M[Y];return ie===void 0&&(ie=new Rn,M[Y]=ie),ie.getHandSpace()};function k(Y){let ie=b.indexOf(Y.inputSource);if(ie===-1)return;let se=M[ie];se!==void 0&&(se.update(Y.inputSource,Y.frame,l||n),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<M.length;Y++){let ie=b[Y];ie!==null&&(b[Y]=null,M[Y].disconnect(ie))}z=null,A=null,y.reset();for(let Y in g)delete g[Y];if(e.setRenderTarget(R),u=null,p=null,c=null,r=null,O=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),f!==null){let Y=f.camera;Y.fov=f.fov,Y.zoom=f.zoom,Y.updateProjectionMatrix(),f=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return c===null&&E&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",J),r.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,se=null,Re=null;d.depth&&(Re=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=d.stencil?Zi:Ri,se=d.stencil?ra:fi);let Ue={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};c=this.getBinding(),p=c.createProjectionLayer(Ue),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),O=new si(p.textureWidth,p.textureHeight,{format:ni,type:Yt,depthTexture:new na(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ie={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),O=new si(u.framebufferWidth,u.framebufferHeight,{format:ni,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Y){for(let ie=0;ie<Y.removed.length;ie++){let se=Y.removed[ie],Re=b.indexOf(se);Re>=0&&(b[Re]=null,M[Re].disconnect(se))}for(let ie=0;ie<Y.added.length;ie++){let se=Y.added[ie],Re=b.indexOf(se);if(Re===-1){for(let ge=0;ge<M.length;ge++)if(ge>=b.length){b.push(se),Re=ge;break}else if(b[ge]===null){b[ge]=se,Re=ge;break}if(Re===-1)break}let Ue=M[Re];Ue&&Ue.connect(se)}}let le=new B,q=new B;function K(Y,ie,se){le.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);let Re=le.distanceTo(q),Ue=ie.projectionMatrix.elements,ge=se.projectionMatrix.elements,tt=Ue[14]/(Ue[10]-1),$e=Ue[14]/(Ue[10]+1),Oe=(Ue[9]+1)/Ue[5],ht=(Ue[9]-1)/Ue[5],wt=(Ue[8]-1)/Ue[0],Nt=(ge[8]+1)/ge[0],lt=tt*wt,It=tt*Nt,ut=Re/(-wt+Nt),mt=ut*-wt;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let D=tt+ut,Ct=$e+ut,Qe=lt-mt,ct=It+(Re-mt),x=Oe*$e/Ct*D,_=ht*$e/Ct*D;Y.projectionMatrix.makePerspective(Qe,ct,x,_,D,Ct),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ie=Y.near,se=Y.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(se=y.depthFar)),F.near=I.near=S.near=ie,F.far=I.far=S.far=se,(z!==F.near||A!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,A=F.far),F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Re=Y.parent,Ue=F.cameras;j(F,Re);for(let ge=0;ge<Ue.length;ge++)j(Ue[ge],Re);Ue.length===2?K(F,S,I):F.projectionMatrix.copy(S.projectionMatrix),f===null&&Y.isPerspectiveCamera&&(f={camera:Y,fov:Y.fov,zoom:Y.zoom}),ze(Y,F,Re)};function ze(Y,ie,se){se===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&u===null))return o},this.setFoveation=function(Y){o=Y,p!==null&&(p.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(F)},this.getCameraTexture=function(Y){return g[Y]};let we=null;function ot(Y,ie){if(h=ie.getViewerPose(l||n),m=ie,h!==null){let se=h.views;u!==null&&(e.setRenderTargetFramebuffer(O,u.framebuffer),e.setRenderTarget(O));let Re=!1;se.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let ge=0;ge<se.length;ge++){let tt=se[ge],$e=null;if(u!==null)$e=u.getViewport(tt);else{let ht=c.getViewSubImage(p,tt);$e=ht.viewport,ge===0&&(e.setRenderTargetTextures(O,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(O))}let Oe=N[ge];Oe===void 0&&(Oe=new $t,Oe.layers.enable(ge),Oe.viewport=new vt,N[ge]=Oe),Oe.matrix.fromArray(tt.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(tt.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set($e.x,$e.y,$e.width,$e.height),ge===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(Oe)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){c=i.getBinding();let ge=c.getDepthInformation(se[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,r.renderState)}if(Ue&&Ue.includes("camera-access")&&E){e.state.unbindTexture(),c=i.getBinding();for(let ge=0;ge<se.length;ge++){let tt=se[ge].camera;if(tt){let $e=g[tt];$e||($e=new Jl,g[tt]=$e);let Oe=c.getCameraImage(tt);$e.sourceTexture=Oe}}}}for(let se=0;se<M.length;se++){let Re=b[se],Ue=M[se];Re!==null&&Ue!==void 0&&Ue.update(Re,ie,l||n)}we&&we(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}let Fe=new sh;Fe.setAnimationLoop(ot),this.setAnimationLoop=function(Y){we=Y},this.dispose=function(){}}},Vm=new pt,ph=new Ve;ph.set(-1,0,0,0,1,0,0,0,1);function km(e,t){function i(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function r(g,d){d.color.getRGB(g.fogColor.value,ih(e)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function a(g,d,R,O,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(g,d):d.isMeshLambertMaterial?(n(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(g,d),p(g,d)):d.isMeshPhongMaterial?(n(g,d),c(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(n(g,d),E(g,d)):d.isMeshDepthMaterial?n(g,d):d.isMeshDistanceMaterial?(n(g,d),y(g,d)):d.isMeshNormalMaterial?n(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,R,O):d.isSpriteMaterial?h(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,i(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,i(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,i(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Wt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,i(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Wt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,i(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,i(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let R=t.get(d),O=R.envMap,M=R.envMapRotation;O&&(g.envMap.value=O,g.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(M)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ph),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,i(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,R,O){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*R,g.scale.value=O*.5,d.map&&(g.map.value=d.map,i(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,i(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,i(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,i(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,R){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){let R=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Gm(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let w=b.program;r.uniformBlockBinding(M,w)}function h(M,b){let w=a[M.id];w===void 0&&(g(M),w=c(M),a[M.id]=w,M.addEventListener("dispose",R));let T=b.program;r.updateUBOMapping(M,T);let f=t.render.frame;n[M.id]!==f&&(u(M),n[M.id]=f)}function c(M){let b=p();M.__bindingPointIndex=b;let w=e.createBuffer(),T=M.__size,f=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,T,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,w),w}function p(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=a[M.id],w=M.uniforms,T=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let f=0,S=w.length;f<S;f++){let I=w[f];if(Array.isArray(I))for(let N=0,F=I.length;N<F;N++)m(I[N],f,N,T);else m(I,f,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(M,b,w,T){if(y(M,b,w,T)===!0){let f=M.__offset,S=M.value;if(Array.isArray(S)){let I=0;for(let N=0;N<S.length;N++){let F=S[N],z=d(F);E(F,M.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(S,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,M.__data)}}function E(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function y(M,b,w,T){let f=M.value,S=b+"_"+w;if(T[S]===void 0)return typeof f=="number"||typeof f=="boolean"?T[S]=f:ArrayBuffer.isView(f)?T[S]=f.slice():T[S]=f.clone(),!0;{let I=T[S];if(typeof f=="number"||typeof f=="boolean"){if(I!==f)return T[S]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(I.equals(f)===!1)return I.copy(f),!0}}return!1}function g(M){let b=M.uniforms,w=0,T=16;for(let S=0,I=b.length;S<I;S++){let N=Array.isArray(b[S])?b[S]:[b[S]];for(let F=0,z=N.length;F<z;F++){let A=N[F],k=Array.isArray(A.value)?A.value:[A.value];for(let J=0,W=k.length;J<W;J++){let le=k[J],q=d(le),K=w%T,j=K%q.boundary,ze=K+j;w+=j,ze!==0&&T-ze<q.storage&&(w+=T-ze),A.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,w+=q.storage}}}let f=w%T;return f>0&&(w+=T-f),M.__size=w,M.__cache={},this}function d(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),b}function R(M){let b=M.target;b.removeEventListener("dispose",R);let w=s.indexOf(b.__bindingPointIndex);s.splice(w,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function O(){for(let M in a)e.deleteBuffer(a[M]);s=[],a={},n={}}return{bind:l,update:h,dispose:O}}var Wm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Xm(){return li===null&&(li=new yu(Wm,16,16,er,mi),li.name="DFG_LUT",li.minFilter=Ut,li.magFilter=Ut,li.wrapS=Ti,li.wrapT=Ti,li.generateMipmaps=!1,li.needsUpdate=!0),li}var jm=class{constructor(e={}){let{canvas:t=Kh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:p=!1,outputBufferType:u=Yt}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=n;let E=u,y=new Set([eo,Qs,$s]),g=new Set([Yt,fi,ia,ra,Zs,Js]),d=new Uint32Array(4),R=new Int32Array(4),O=new B,M=null,b=null,w=[],T=[],f=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,I=!1,N=null,F=null,z=null,A=null;this._outputColorSpace=Jt;let k=0,J=0,W=null,le=-1,q=null,K=new vt,j=new vt,ze=null,we=new Be(0),ot=0,Fe=t.width,Y=t.height,ie=1,se=null,Re=null,Ue=new vt(0,0,Fe,Y),ge=new vt(0,0,Fe,Y),tt=!1,$e=new no,Oe=!1,ht=!1,wt=new pt,Nt=new B,lt=new vt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function mt(){return W===null?ie:1}let D=i;function Ct(v,L){return t.getContext(v,L)}let Qe,ct,x,_,P,X,$,oe,de,U,re,ue,xe,te,Te,Ae,Ie,Xe,C,Z,Q,_e,ye;try{let v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ys}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",et,!1),D===null){let L="webgl2";if(D=Ct(L,v),D===null)throw Ct(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(v){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Je("WebGLRenderer: "+v.message),v}function ee(){Qe=new Wp(D),Qe.init(),Q=new Om(D,Qe),ct=new Np(D,Qe,e,Q),x=new Nm(D,Qe),ct.reversedDepthBuffer&&p&&x.buffers.depth.setReversed(!0),F=D.createFramebuffer(),z=D.createFramebuffer(),A=D.createFramebuffer(),_=new Yp(D),P=new Sm,X=new Im(D,Qe,x,P,ct,Q,_),$=new Gp(S),oe=new Ku(D),_e=new Dp(D,oe),de=new Xp(D,oe,_,_e),U=new Kp(D,de,oe,_e,_),Xe=new qp(D,ct,X),Te=new Ip(P),re=new Mm(S,$,Qe,ct,_e,Te),ue=new km(S,P),xe=new Em,te=new Rm(Qe),Ie=new Lp(S,$,x,U,m,o),Ae=new Um(S,U,ct),ye=new Gm(D,_,ct,x),C=new Up(D,Qe,_),Z=new jp(D,Qe,_),_.programs=re.programs,S.capabilities=ct,S.extensions=Qe,S.properties=P,S.renderLists=xe,S.shadowMap=Ae,S.state=x,S.info=_}E!==Yt&&(f=new Jp(E,t.width,t.height,s,r,a));let fe=new Hm(S,D);this.xr=fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=Qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(v){v!==void 0&&(ie=v,this.setSize(Fe,Y,!1))},this.getSize=function(v){return v.set(Fe,Y)},this.setSize=function(v,L,G=!0){if(fe.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=v,Y=L,t.width=Math.floor(v*ie),t.height=Math.floor(L*ie),G===!0&&(t.style.width=v+"px",t.style.height=L+"px"),f!==null&&f.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Fe*ie,Y*ie).floor()},this.setDrawingBufferSize=function(v,L,G){Fe=v,Y=L,ie=G,t.width=Math.floor(v*G),t.height=Math.floor(L*G),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(E===Yt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}f.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(K)},this.getViewport=function(v){return v.copy(Ue)},this.setViewport=function(v,L,G,V){v.isVector4?Ue.set(v.x,v.y,v.z,v.w):Ue.set(v,L,G,V),x.viewport(K.copy(Ue).multiplyScalar(ie).round())},this.getScissor=function(v){return v.copy(ge)},this.setScissor=function(v,L,G,V){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,L,G,V),x.scissor(j.copy(ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(v){x.setScissorTest(tt=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){Re=v},this.getClearColor=function(v){return v.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,G=!0){let V=0;if(v){let H=!1;if(W!==null){let ae=W.texture.format;H=y.has(ae)}if(H){let ae=W.texture.type,pe=g.has(ae),ve=Ie.getClearColor(),Se=Ie.getClearAlpha(),Ce=ve.r,ke=ve.g,Ye=ve.b;pe?(d[0]=Ce,d[1]=ke,d[2]=Ye,d[3]=Se,D.clearBufferuiv(D.COLOR,0,d)):(R[0]=Ce,R[1]=ke,R[2]=Ye,R[3]=Se,D.clearBufferiv(D.COLOR,0,R))}else V|=D.COLOR_BUFFER_BIT}L&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Ie.dispose(),xe.dispose(),te.dispose(),P.dispose(),$.dispose(),U.dispose(),_e.dispose(),ye.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",da),fe.removeEventListener("sessionend",pa),_i.stop()};function De(v){v.preventDefault(),hn("WebGLRenderer: Context Lost."),I=!0}function gt(){hn("WebGLRenderer: Context Restored."),I=!1;let v=_.autoReset,L=Ae.enabled,G=Ae.autoUpdate,V=Ae.needsUpdate,H=Ae.type;ee(),_.autoReset=v,Ae.enabled=L,Ae.autoUpdate=G,Ae.needsUpdate=V,Ae.type=H}function et(v){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Kt(v){let L=v.target;L.removeEventListener("dispose",Kt),ti(L)}function ti(v){mn(v),P.remove(v)}function mn(v){let L=P.get(v).programs;L!==void 0&&(L.forEach(function(G){re.releaseProgram(G)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,G,V,H,ae){L===null&&(L=It);let pe=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=rr(v,L,G,V,H);x.setMaterial(V,pe);let Se=G.index,Ce=1;if(V.wireframe===!0){if(Se=de.getWireframeAttribute(G),Se===void 0)return;Ce=2}let ke=G.drawRange,Ye=G.attributes.position,be=ke.start*Ce,qe=(ke.start+ke.count)*Ce;ae!==null&&(be=Math.max(be,ae.start*Ce),qe=Math.min(qe,(ae.start+ae.count)*Ce)),Se!==null?(be=Math.max(be,0),qe=Math.min(qe,Se.count)):Ye!=null&&(be=Math.max(be,0),qe=Math.min(qe,Ye.count));let ft=qe-be;if(ft<0||ft===1/0)return;_e.setup(H,V,ve,G,Se);let at,nt=C;if(Se!==null&&(at=oe.get(Se),nt=Z,nt.setIndex(at)),H.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*mt()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(H.isLine){let dt=V.linewidth;dt===void 0&&(dt=1),x.setLineWidth(dt*mt()),H.isLineSegments?nt.setMode(D.LINES):H.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else H.isPoints?nt.setMode(D.POINTS):H.isSprite&&nt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let dt=H._multiDrawStarts,Ee=H._multiDrawCounts,Et=H._multiDrawCount,ne=Se?oe.get(Se).bytesPerElement:1,me=P.get(V).currentProgram.getUniforms();for(let Me=0;Me<Et;Me++)me.setValue(D,"_gl_DrawID",Me),nt.render(dt[Me]/ne,Ee[Me])}else if(H.isInstancedMesh)nt.renderInstances(be,ft,H.count);else if(G.isInstancedBufferGeometry){let dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,dt);nt.renderInstances(be,ft,Ee)}else nt.render(be,ft)};function ua(v,L,G,V){N!==null&&v.isNodeMaterial&&N.setObject(V,v),Oe===!0&&Te.setState(v,G,!1),v.transparent===!0&&v.side===bi&&v.forceSinglePass===!1?(v.side=Wt,v.needsUpdate=!0,ir(v,L,V),v.side=$i,v.needsUpdate=!0,ir(v,L,V),v.side=bi):ir(v,L,V)}this.compile=function(v,L,G=null){G===null&&(G=v),N!==null&&N.renderStart(v,L,G),b=te.get(G),b.init(L),T.push(b),G.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),v!==G&&v.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ht=this.localClippingEnabled,Oe=Te.init(this.clippingPlanes,ht),Oe===!0&&Te.setGlobalState(this.clippingPlanes,L),N!==null&&Ae.render(b.state.shadowsArray,G,L);let V=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ae=H.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){let ve=ae[pe];ua(ve,G,L,H),V.add(ve)}else ua(ae,G,L,H),V.add(ae)}),b=T.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(v,L,G=null){let V=this.compile(v,L,G);return new Promise(H=>{function ae(){if(V.forEach(function(pe){let ve=P.get(pe).currentProgram;(ve===void 0||ve.isReady())&&V.delete(pe)}),V.size===0){H(v);return}setTimeout(ae,10)}Qe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Hi=null;function ca(v){Hi&&Hi(v)}function da(){_i.stop()}function pa(){_i.start()}let _i=new sh;_i.setAnimationLoop(ca),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(v){Hi=v,fe.setAnimationLoop(v),v===null?_i.stop():_i.start()},fe.addEventListener("sessionstart",da),fe.addEventListener("sessionend",pa),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(v,L);let G=fe.enabled===!0&&fe.isPresenting===!0,V=f!==null&&(W===null||G)&&f.begin(S,W);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(f===null||f.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(L),L=fe.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,W),b=te.get(v,T.length),b.init(L),b.state.textureUnits=X.getTextureUnits(),T.push(b),wt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$e.setFromProjectionMatrix(wt,di,L.reversedDepth),ht=this.localClippingEnabled,Oe=Te.init(this.clippingPlanes,ht),M=xe.get(v,w.length),M.init(),w.push(M),fe.enabled===!0&&fe.isPresenting===!0){let ae=S.xr.getDepthSensingMesh();ae!==null&&Vi(ae,L,-1/0,S.sortObjects)}Vi(v,L,0,S.sortObjects),M.finish(),N!==null&&N.updateLights(b.state.lightsArray),S.sortObjects===!0&&M.sort(se,Re),ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ut&&Ie.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Te.beginShadows();let H=b.state.shadowsArray;if(Ae.render(H,v,L),Oe===!0&&Te.endShadows(),(V&&f.hasRenderPass())===!1){let ae=M.opaque,pe=M.transmissive;if(b.setupLights(),L.isArrayCamera){let ve=L.cameras;if(pe.length>0)for(let Se=0,Ce=ve.length;Se<Ce;Se++){let ke=ve[Se];ma(ae,pe,v,ke)}ut&&Ie.render(v);for(let Se=0,Ce=ve.length;Se<Ce;Se++){let ke=ve[Se];fa(M,v,ke,ke.viewport)}}else pe.length>0&&ma(ae,pe,v,L),ut&&Ie.render(v),fa(M,v,L)}W!==null&&J===0&&(X.updateMultisampleRenderTarget(W),X.updateRenderTargetMipmap(W)),V&&f.end(S),v.isScene===!0&&v.onAfterRender(S,v,L),_e.resetDefaultState(),le=-1,q=null,T.pop(),T.length>0?(b=T[T.length-1],X.setTextureUnits(b.state.textureUnits),Oe===!0&&Te.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,N!==null&&N.renderEnd()};function Vi(v,L,G,V){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum($e)){V&&lt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(wt);let ae=U.update(v),pe=v.material;pe.visible&&M.push(v,ae,pe,G,lt.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum($e))){let ae=U.update(v),pe=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),lt.copy(v.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),lt.copy(ae.boundingSphere.center)),lt.applyMatrix4(v.matrixWorld).applyMatrix4(wt)),Array.isArray(pe)){let ve=ae.groups;for(let Se=0,Ce=ve.length;Se<Ce;Se++){let ke=ve[Se],Ye=pe[ke.materialIndex];Ye&&Ye.visible&&M.push(v,ae,Ye,G,lt.z,ke,L)}}else pe.visible&&M.push(v,ae,pe,G,lt.z,null,L)}}let H=v.children;for(let ae=0,pe=H.length;ae<pe;ae++)Vi(H[ae],L,G,V)}function fa(v,L,G,V){let{opaque:H,transmissive:ae,transparent:pe}=v;b.setupLightsView(G),Oe===!0&&Te.setGlobalState(S.clippingPlanes,G),V&&x.viewport(K.copy(V)),H.length>0&&tr(H,L,G),ae.length>0&&tr(ae,L,G),pe.length>0&&tr(pe,L,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ma(v,L,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Ye=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new si(1,1,{generateMipmaps:!0,type:Ye?mi:Yt,minFilter:Ki,samples:Math.max(4,ct.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let H=b.state.transmissionRenderTarget[V.id],ae=V.viewport||K;H.setSize(ae.z*S.transmissionResolutionScale,ae.w*S.transmissionResolutionScale);let pe=S.getRenderTarget(),ve=S.getActiveCubeFace(),Se=S.getActiveMipmapLevel();S.setRenderTarget(H),S.getClearColor(we),ot=S.getClearAlpha(),ot<1&&S.setClearColor(16777215,.5),S.clear(),ut&&Ie.render(G);let Ce=S.toneMapping;S.toneMapping=pi;let ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Oe===!0&&Te.setGlobalState(S.clippingPlanes,V),tr(v,G,V),X.updateMultisampleRenderTarget(H),X.updateRenderTargetMipmap(H),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let be=0,qe=L.length;be<qe;be++){let ft=L[be],{object:at,geometry:nt,material:dt,group:Ee}=ft;if(dt.side===bi&&at.layers.test(V.layers)){let Et=dt.side;dt.side=Wt,dt.needsUpdate=!0,ga(at,G,V,nt,dt,Ee),dt.side=Et,dt.needsUpdate=!0,Ye=!0}}Ye===!0&&(X.updateMultisampleRenderTarget(H),X.updateRenderTargetMipmap(H))}S.setRenderTarget(pe,ve,Se),S.setClearColor(we,ot),ke!==void 0&&(V.viewport=ke),S.toneMapping=Ce}function tr(v,L,G){let V=L.isScene===!0?L.overrideMaterial:null;for(let H=0,ae=v.length;H<ae;H++){let pe=v[H],{object:ve,geometry:Se,group:Ce}=pe,ke=pe.material;ke.allowOverride===!0&&V!==null&&(ke=V),ve.layers.test(G.layers)&&ga(ve,L,G,Se,ke,Ce)}}function ga(v,L,G,V,H,ae){N!==null&&H.isNodeMaterial&&N.setObject(v,H),v.onBeforeRender(S,L,G,V,H,ae),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(S,L,G,V,v,ae),H.transparent===!0&&H.side===bi&&H.forceSinglePass===!1?(H.side=Wt,H.needsUpdate=!0,S.renderBufferDirect(G,L,V,H,v,ae),H.side=$i,H.needsUpdate=!0,S.renderBufferDirect(G,L,V,H,v,ae),H.side=bi):S.renderBufferDirect(G,L,V,H,v,ae),v.onAfterRender(S,L,G,V,H,ae)}function ir(v,L,G){L.isScene!==!0&&(L=It);let V=P.get(v),H=b.state.lights,ae=b.state.shadowsArray,pe=H.state.version,ve=re.getParameters(v,H.state,ae,L,G,b.state.lightProbeGridArray),Se=re.getProgramCacheKey(ve),Ce=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,V.fog=L.fog;let ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=$.get(v.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Kt),Ce=new Map,V.programs=Ce);let Ye=Ce.get(Se);if(Ye!==void 0){if(V.currentProgram===Ye&&V.lightsStateVersion===pe)return Pi(v,ve),Ye}else ve.uniforms=re.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,G,ve),v.onBeforeCompile(ve,S),Ye=re.acquireProgram(ve,Se),Ce.set(Se,Ye),V.uniforms=ve.uniforms;let be=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=Te.uniform),Pi(v,ve),V.needsLights=Gi(v),V.lightsStateVersion=pe,V.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.sunLights.value=H.state.sun,be.sunLightShadows.value=H.state.sunShadow,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.sunShadowMatrix.value=H.state.sunShadowMatrix,be.sunShadowCascade.value=H.state.sunShadowCascade,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Ye,V.uniformsList=null,Ye}function ki(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=rn.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Pi(v,L){let G=P.get(v);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function _a(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;O.setFromMatrixPosition(L.matrixWorld);for(let G=0,V=v.length;G<V;G++){let H=v[G];if(H.texture!==null&&H.boundingBox.containsPoint(O))return H}return null}function rr(v,L,G,V,H){L.isScene!==!0&&(L=It),X.resetTextureUnits();let ae=L.fog,pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?L.environment:null,ve=W===null?S.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ke.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=$.get(V.envMap||pe,Se),ke=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ye=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color,at=pi;V.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(at=S.toneMapping);let nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=nt!==void 0?nt.length:0,Ee=P.get(V),Et=b.state.lights;if(Oe===!0&&(ht===!0||v!==q)){let je=v===q&&V.id===le;Te.setState(V,v,je)}let ne=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Et.state.version||Ee.outputColorSpace!==ve||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==Ce||V.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Te.numPlanes||Ee.numIntersection!==Te.numIntersection)||Ee.vertexAlphas!==ke||Ee.vertexTangents!==Ye||Ee.morphTargets!==be||Ee.morphNormals!==qe||Ee.morphColors!==ft||Ee.toneMapping!==at||Ee.morphTargetsCount!==dt||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Ee.__version=V.version);let me=Ee.currentProgram;ne===!0&&(me=ir(V,L,H),N&&V.isNodeMaterial&&N.onUpdateProgram(V,me,Ee));let Me=!1,he=!1,Ze=!1,Pe=me.getUniforms(),He=Ee.uniforms;if(x.useProgram(me.program)&&(Me=!0,he=!0,Ze=!0),V.id!==le&&(le=V.id,he=!0),Ee.needsLights){let je=_a(b.state.lightProbeGridArray,H);Ee.lightProbeGrid!==je&&(Ee.lightProbeGrid=je,he=!0)}if(Me||q!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Pe.setValue(D,"projectionMatrix",v.projectionMatrix),Pe.setValue(D,"viewMatrix",v.matrixWorldInverse);let je=Pe.map.cameraPosition;je!==void 0&&je.setValue(D,Nt.setFromMatrixPosition(v.matrixWorld)),ct.logarithmicDepthBuffer&&Pe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),q!==v&&(q=v,he=!0,Ze=!0)}if(Ee.needsLights&&(Et.state.sunShadowMap.length>0&&Pe.setValue(D,"sunShadowMap",Et.state.sunShadowMap,X),Et.state.directionalShadowMap.length>0&&Pe.setValue(D,"directionalShadowMap",Et.state.directionalShadowMap,X),Et.state.spotShadowMap.length>0&&Pe.setValue(D,"spotShadowMap",Et.state.spotShadowMap,X),Et.state.pointShadowMap.length>0&&Pe.setValue(D,"pointShadowMap",Et.state.pointShadowMap,X)),H.isSkinnedMesh){Pe.setOptional(D,H,"bindMatrix"),Pe.setOptional(D,H,"bindMatrixInverse");let je=H.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Pe.setValue(D,"boneTexture",je.boneTexture,X))}H.isBatchedMesh&&(Pe.setOptional(D,H,"batchingTexture"),Pe.setValue(D,"batchingTexture",H._matricesTexture,X),Pe.setOptional(D,H,"batchingIdTexture"),Pe.setValue(D,"batchingIdTexture",H._indirectTexture,X),Pe.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Pe.setValue(D,"batchingColorTexture",H._colorsTexture,X));let Mt=G.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&Xe.update(H,G,me),(he||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,Pe.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&L.environment!==null&&(He.envMapIntensity.value=L.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=Xm()),he){if(Pe.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Br(He,Ze),ae&&V.fog===!0&&ue.refreshFogUniforms(He,ae),ue.refreshMaterialUniforms(He,V,ie,Y,b.state.transmissionRenderTarget[v.id]),Ee.needsLights&&Ee.lightProbeGrid){let je=Ee.lightProbeGrid;He.probesSH.value=je.texture,He.probesMin.value.copy(je.boundingBox.min),He.probesMax.value.copy(je.boundingBox.max),He.probesResolution.value.copy(je.resolution)}rn.upload(D,ki(Ee),He,X)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rn.upload(D,ki(Ee),He,X),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pe.setValue(D,"center",H.center),Pe.setValue(D,"modelViewMatrix",H.modelViewMatrix),Pe.setValue(D,"normalMatrix",H.normalMatrix),Pe.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let je=V.uniformsGroups;for(let St=0,Pt=je.length;St<Pt;St++){let At=je[St];ye.update(At,me),ye.bind(At,me)}}return me}function Br(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Gi(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(v,L,G){let V=P.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),P.get(v.texture).__webglTexture=L,P.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let G=P.get(v);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,G=0){W=v,k=L,J=G;let V=null,H=!1,ae=!1;if(v){let pe=P.get(v);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),K.copy(v.viewport),j.copy(v.scissor),ze=v.scissorTest,x.viewport(K),x.scissor(j),x.setScissorTest(ze),le=-1;return}else if(pe.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(pe.__hasExternalTextures)X.rebindTextures(v,P.get(v.texture).__webglTexture,P.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ce=v.depthTexture;if(pe.__boundDepthTexture!==Ce){if(Ce!==null&&P.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let ve=v.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ae=!0);let Se=P.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Se[L])?V=Se[L][G]:V=Se[L],H=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?V=P.get(v).__webglMultisampledFramebuffer:Array.isArray(Se)?V=Se[G]:V=Se,K.copy(v.viewport),j.copy(v.scissor),ze=v.scissorTest}else K.copy(Ue).multiplyScalar(ie).floor(),j.copy(ge).multiplyScalar(ie).floor(),ze=tt;if(G!==0&&(V=F),x.bindFramebuffer(D.FRAMEBUFFER,V)&&x.drawBuffers(v,V),x.viewport(K),x.scissor(j),x.setScissorTest(ze),H){let pe=P.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,G)}else if(ae){let pe=L;for(let ve=0;ve<v.textures.length;ve++){let Se=P.get(v.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Se.__webglTexture,G,pe)}}else if(v!==null&&G!==0){let pe=P.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,G)}le=-1};function va(v){let L=P.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=ct.textureFormatReadable(v.format),L.__typeReadable=ct.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,G,V,H,ae,pe,ve=0){if(!(v&&v.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=P.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){x.bindFramebuffer(D.FRAMEBUFFER,Se);try{let Ce=v.textures[ve],ke=Ce.format,Ye=Ce.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);let be=va(Ce);if(be.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-V&&G>=0&&G<=v.height-H&&D.readPixels(L,G,V,H,Q.convert(ke),Q.convert(Ye),ae)}finally{let Ce=W!==null?P.get(W).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,L,G,V,H,ae,pe,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=P.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se)if(L>=0&&L<=v.width-V&&G>=0&&G<=v.height-H){x.bindFramebuffer(D.FRAMEBUFFER,Se);let Ce=v.textures[ve],ke=Ce.format,Ye=Ce.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve);let be=va(Ce);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(L,G,V,H,Q.convert(ke),Q.convert(Ye),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let ft=W!==null?P.get(W).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,ft);let at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zh(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(qe),D.deleteSync(at),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,G=0){let V=Math.pow(2,-G),H=Math.floor(v.image.width*V),ae=Math.floor(v.image.height*V),pe=L!==null?L.x:0,ve=L!==null?L.y:0;X.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,ve,H,ae),x.unbindTexture()},this.copyTextureToTexture=function(v,L,G=null,V=null,H=0,ae=0){let pe,ve,Se,Ce,ke,Ye,be,qe,ft,at=v.isCompressedTexture?v.mipmaps[ae]:v.image;if(G!==null)pe=G.max.x-G.min.x,ve=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,ke=G.min.y,Ye=G.isBox3?G.min.z:0;else{let He=Math.pow(2,-H);pe=Math.floor(at.width*He),ve=Math.floor(at.height*He),v.isDataArrayTexture?Se=at.depth:v.isData3DTexture?Se=Math.floor(at.depth*He):Se=1,Ce=0,ke=0,Ye=0}V!==null?(be=V.x,qe=V.y,ft=V.z):(be=0,qe=0,ft=0);let nt=Q.convert(L.format),dt=Q.convert(L.type),Ee;L.isData3DTexture?(X.setTexture3D(L,0),Ee=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(X.setTexture2DArray(L,0),Ee=D.TEXTURE_2D_ARRAY):(X.setTexture2D(L,0),Ee=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let Et=x.getParameter(D.UNPACK_ROW_LENGTH),ne=x.getParameter(D.UNPACK_IMAGE_HEIGHT),me=x.getParameter(D.UNPACK_SKIP_PIXELS),Me=x.getParameter(D.UNPACK_SKIP_ROWS),he=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(D.UNPACK_SKIP_ROWS,ke),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye);let Ze=v.isDataArrayTexture||v.isData3DTexture,Pe=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let He=P.get(v),Mt=P.get(L),je=P.get(He.__renderTarget),St=P.get(Mt.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,je.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Pt=0;Pt<Se;Pt++)Ze&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(v).__webglTexture,H,Ye+Pt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(L).__webglTexture,ae,ft+Pt)),D.blitFramebuffer(Ce,ke,pe,ve,be,qe,pe,ve,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||P.has(v)){let He=P.get(v),Mt=P.get(L);x.bindFramebuffer(D.READ_FRAMEBUFFER,z),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,A);for(let je=0;je<Se;je++)Ze?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,He.__webglTexture,H,Ye+je):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,He.__webglTexture,H),Pe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,ae,ft+je):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,ae),H!==0?D.blitFramebuffer(Ce,ke,pe,ve,be,qe,pe,ve,D.COLOR_BUFFER_BIT,D.NEAREST):Pe?D.copyTexSubImage3D(Ee,ae,be,qe,ft+je,Ce,ke,pe,ve):D.copyTexSubImage2D(Ee,ae,be,qe,Ce,ke,pe,ve);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Ee,ae,be,qe,ft,pe,ve,Se,nt,dt,at.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,ae,be,qe,ft,pe,ve,Se,nt,at.data):D.texSubImage3D(Ee,ae,be,qe,ft,pe,ve,Se,nt,dt,at):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ae,be,qe,pe,ve,nt,dt,at.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ae,be,qe,at.width,at.height,nt,at.data):D.texSubImage2D(D.TEXTURE_2D,ae,be,qe,pe,ve,nt,dt,at);x.pixelStorei(D.UNPACK_ROW_LENGTH,Et),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ne),x.pixelStorei(D.UNPACK_SKIP_PIXELS,me),x.pixelStorei(D.UNPACK_SKIP_ROWS,Me),x.pixelStorei(D.UNPACK_SKIP_IMAGES,he),ae===0&&L.generateMipmaps&&D.generateMipmap(Ee),x.unbindTexture()},this.initRenderTarget=function(v){P.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){k=0,J=0,W=null,x.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}},_l={type:"change"},ho={type:"start"},fh={type:"end"},qa=new ha,vl=new yi,Ym=Math.cos(70*Qh.DEG2RAD),yt=new B,Gt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qn=1e-6,qm=class extends Yu{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Bi,this._lastTargetPosition=new B,this._quat=new Bi().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yo,this._sphericalDelta=new Yo,this._scale=1,this._panOffset=new B,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new B,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zm.bind(this),this._onPointerDown=Km.bind(this),this._onPointerUp=Jm.bind(this),this._onContextMenu=ag.bind(this),this._onMouseWheel=eg.bind(this),this._onKeyDown=tg.bind(this),this._onTouchStart=ig.bind(this),this._onTouchMove=rg.bind(this),this._onMouseDown=$m.bind(this),this._onMouseMove=Qm.bind(this),this._interceptControlDown=ng.bind(this),this._interceptControlUp=sg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_l),this.update(),this.state=rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),r<-Math.PI?r+=Gt:r>Math.PI&&(r-=Gt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=yt.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new B(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(s),this.object.updateMatrixWorld(),n=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(qa.origin.copy(this.object.position),qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qa.direction))<Ym?this.object.lookAt(this.target):(vl.setFromNormalAndCoplanarPoint(this.object.up,this.target),qa.intersectPlane(vl,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Qn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qn||this._lastTargetPosition.distanceToSquared(this.target)>Qn?(this.dispatchEvent(_l),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;yt.copy(r).sub(this.target);let a=yt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Km(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Zm(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Jm(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fh),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $m(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=rt.DOLLY;break;case wr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=rt.ROTATE}break;case wr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(ho)}function Qm(e){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function eg(e){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(e.preventDefault(),this.dispatchEvent(ho),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(fh))}function tg(e){this.enabled!==!1&&this._handleKeyDown(e)}function ig(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=rt.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=rt.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(ho)}function rg(e){switch(this._trackPointer(e),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=rt.NONE}}function ag(e){this.enabled!==!1&&e.preventDefault()}function ng(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sg(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ml(e="sky-product-3d-canvas"){let t=document.getElementById(e);if(!t)return null;let i=(t.getAttribute("data-product")||"tks")==="thks";for(;t.firstChild;)t.removeChild(t.firstChild);let r=new pu;r.background=new Be(16777215);let a=t.clientWidth||900,n=t.clientHeight||480,s=new $t(36,a/n,.1,100);s.position.set(9.5,4.2,7.8);let o=new jm({antialias:!0,alpha:!1,powerPreference:"high-performance"});o.setSize(a,n),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=qs,o.toneMappingExposure=1.15,o.shadowMap.enabled=!0,o.shadowMap.type=$r,t.appendChild(o.domElement);let l=new qm(s,o.domElement);l.enableDamping=!0,l.dampingFactor=.05,l.maxPolarAngle=Math.PI/2-.05,l.minDistance=3.5,l.maxDistance=24,l.target.set(0,0,0),l.autoRotate=!0,l.autoRotateSpeed=.6;let h=null,c=()=>{l.autoRotate=!1,clearTimeout(h),h=setTimeout(()=>{qe.autoRotate&&(l.autoRotate=!0)},6e3)};o.domElement.addEventListener("pointerdown",c),o.domElement.addEventListener("wheel",c,{passive:!0}),o.domElement.addEventListener("touchstart",c,{passive:!0});let p=new Vu(16777215,.85);r.add(p);let u=new jn(16777215,1.25);u.position.set(12,16,14),u.castShadow=!0,u.shadow.mapSize.width=1024,u.shadow.mapSize.height=1024,u.shadow.bias=-5e-4,r.add(u);let m=new jn(14412542,.7);m.position.set(-14,8,-10),r.add(m);let E=new jn(15793652,.6);E.position.set(0,18,0),r.add(E);let y=new so(30,30),g=new Pu({opacity:.12}),d=new Vt(y,g);d.rotation.x=-Math.PI/2,d.position.y=-1.55,d.receiveShadow=!0,r.add(d);let R=new ju(24,24,14870768,15857145);R.position.y=-1.54,r.add(R);let O=new _t;r.add(O);let M={aluFrame:new Lt({color:13949149,metalness:.75,roughness:.3,name:"AluFrame"}),galvSteel:new Lt({color:12897749,metalness:.65,roughness:.45,name:"GalvSteel"}),baseSkid:new Lt({color:9741240,metalness:.8,roughness:.35,name:"BaseSkid"}),panelSolid:new Lt({color:16317180,metalness:.15,roughness:.4,name:"PanelSolid"}),panelCutaway:new Ou({color:14742270,transparent:!0,opacity:.22,roughness:.08,metalness:.1,transmission:.85,ior:1.45,name:"PanelCutaway"}),fanHousing:new Lt({color:165063,metalness:.5,roughness:.35,name:"FanHousing"}),fanImpeller:new Lt({color:3718648,metalness:.7,roughness:.25,name:"FanImpeller"}),motorCast:new Lt({color:1976635,metalness:.8,roughness:.3,name:"MotorCast"}),copperPipe:new Lt({color:11817737,metalness:.85,roughness:.25,name:"CopperPipe"}),coolingFin:new Lt({color:3718648,metalness:.55,roughness:.4,name:"CoolingFin"}),heatingFin:new Lt({color:16281969,metalness:.55,roughness:.4,name:"HeatingFin"}),rotorWheel:new Lt({color:9741240,metalness:.7,roughness:.35,name:"RotorWheel"}),filterCloth:new Lt({color:15857145,roughness:.9,metalness:.05,name:"FilterCloth"}),damperBlade:new Lt({color:10592682,metalness:.8,roughness:.3,name:"DamperBlade"}),actuatorOrange:new Lt({color:15357964,metalness:.3,roughness:.4,name:"ActuatorOrange"}),drainPan:new Lt({color:14870768,metalness:.9,roughness:.2,name:"DrainPan"}),doorHandle:new Lt({color:988970,metalness:.7,roughness:.3,name:"DoorHandle"})},b=7.6,w=2.6,T=2,f=b/2,S=w/2,I=T/2,N=[],F=[];function z(ne,me,Me,he,Ze,Pe,He,Mt=!0,je=!0){let St=new sa(ne,me,Me),Pt=new Vt(St,he);return Pt.position.set(Ze,Pe,He),Pt.castShadow=Mt,Pt.receiveShadow=je,Pt}function A(ne,me,Me,he,Ze,Pe,He,Mt,je=0,St=0){let Pt=new Gs(ne,me,Me,he),At=new Vt(Pt,Ze);return At.position.set(Pe,He,Mt),je&&(At.rotation.x=je),St&&(At.rotation.z=St),At.castShadow=!0,At.receiveShadow=!0,At}let k=new _t;O.add(k);let J=.24,W=-S-J/2,le=z(b+.3,J,.12,M.baseSkid,0,W,I-.06),q=z(b+.3,J,.12,M.baseSkid,0,W,-I+.06);k.add(le,q),[-f,-f*.6,-f*.2,f*.2,f*.6,f].forEach(ne=>{let me=z(.12,J,T-.24,M.baseSkid,ne,W,0);k.add(me)}),[-1.6,1.6].forEach(ne=>{let me=z(.36,.14,.14,M.aluFrame,ne,W,I-.05);k.add(me)}),[[-f-.1,-I+.06],[-f-.1,I-.06],[f+.1,-I+.06],[f+.1,I-.06]].forEach(([ne,me])=>{let Me=z(.08,.32,.08,M.baseSkid,ne,W+.06,me);k.add(Me)});let K=new _t;O.add(K);let j=.08,ze=z(b,j,j,M.aluFrame,0,-S+j/2,I-j/2),we=z(b,j,j,M.aluFrame,0,-S+j/2,-I+j/2),ot=z(b,j,j,M.aluFrame,0,S-j/2,I-j/2),Fe=z(b,j,j,M.aluFrame,0,S-j/2,-I+j/2);K.add(ze,we,ot,Fe);let Y=0,ie=z(b,j,j,M.aluFrame,0,Y,I-j/2),se=z(b,j,j,M.aluFrame,0,Y,-I+j/2);K.add(ie,se),[-f+j/2,-2.2,-.9,.9,2.3,f-j/2].forEach(ne=>{let me=z(j,w,j,M.aluFrame,ne,0,I-j/2),Me=z(j,w,j,M.aluFrame,ne,0,-I+j/2),he=z(j,j,T-j*2,M.aluFrame,ne,S-j/2,0),Ze=z(j,j,T-j*2,M.aluFrame,ne,Y,0),Pe=z(j,j,T-j*2,M.aluFrame,ne,-S+j/2,0);K.add(me,Me,he,Ze,Pe)});let Re=z(2.8,.04,T-.16,M.galvSteel,-2.4,Y,0),Ue=z(2.8,.04,T-.16,M.galvSteel,2.4,Y,0);K.add(Re,Ue);let ge=z(b-.1,w-.1,.05,M.panelSolid,0,0,-I+.04),tt=z(b-.1,.05,T-.1,M.panelSolid,0,S-.03,0),$e=z(b-.1,.05,T-.1,M.panelSolid,0,-S+.03,0),Oe=z(.05,w-.1,T-.1,M.panelSolid,f-.03,0,0);K.add(ge,tt,$e,Oe);let ht=new _t;O.add(ht),[{x1:-f+j,x2:-2.2,label:"Damper & Filtre"},{x1:-2.2,x2:-.9,label:"Ön Filtre Hücresi"},{x1:-.9,x2:.9,label:"Rotor Bölmesi"},{x1:.9,x2:2.3,label:"Serpantin Hücresi"},{x1:2.3,x2:f-j,label:"Fan & Motor"}].forEach((ne,me)=>{let Me=ne.x2-ne.x1-.04,he=(ne.x1+ne.x2)/2,Ze=z(Me,S-.1,.03,M.panelCutaway,he,-S/2,I-.02,!1,!1),Pe=z(Me,S-.1,.03,M.panelCutaway,he,S/2,I-.02,!1,!1);ht.add(Ze,Pe),F.push(Ze,Pe),[-.35,.35].forEach(He=>{let Mt=z(.04,.12,.04,M.doorHandle,ne.x2-.08,He,I+.01);ht.add(Mt)}),[-S/2+.1,S/2-.1].forEach(He=>{let Mt=A(.12,.12,.04,16,M.aluFrame,he,He,I,Math.PI/2);ht.add(Mt)})});let wt=new _t;O.add(wt);function Nt(ne,me,Me){let he=new _t,Ze=z(.08,me,T-.3,M.aluFrame,-f-.04,ne,0);he.add(Ze);let Pe=4,He=(me-.2)/Pe;for(let St=0;St<Pe;St++){let Pt=ne-(me-.2)/2+(St+.5)*He,At=z(.12,.02,T-.38,M.damperBlade,-f-.04,Pt,0);At.rotation.z=Math.PI/6,he.add(At)}let Mt=z(.14,.18,.12,M.actuatorOrange,-f-.04,ne,I+.05),je=A(.03,.03,.04,12,M.motorCast,-f-.04,ne,I+.12,Math.PI/2);return he.add(Mt,je),he}let lt=Nt(-S/2,S-.2),It=Nt(S/2,S-.2);wt.add(lt,It);let ut=new _t;O.add(ut);let mt=z(.06,S-.25,T-.3,M.aluFrame,-2.1,-S/2,0);ut.add(mt);let D=4,Ct=(T-.4)/D;for(let ne=0;ne<D;ne++){let me=-I+.25+(ne+.5)*Ct,Me=new Cu(Ct*.45,.75,4);Me.rotateZ(-Math.PI/2);let he=new Vt(Me,M.filterCloth);he.position.set(-1.7,-S/2,me),he.scale.set(1,1.4,.8),ut.add(he)}let Qe=z(.06,S-.25,T-.3,M.aluFrame,-2.1,S/2,0),ct=z(.04,S-.3,T-.36,M.damperBlade,-2.1,S/2,0);ut.add(Qe,ct);let x=A(.09,.09,.04,16,M.aluFrame,-2.2,Y+.3,I+.03,Math.PI/2),_=A(.075,.075,.042,16,M.panelSolid,-2.2,Y+.3,I+.03,Math.PI/2);ut.add(x,_);let P=new ea({color:988970}),X=A(.008,.008,.4,8,P,-2.1,Y+.15,I+.02);ut.add(X);let $=new _t;O.add($);let oe=z(.45,w-.2,T-.2,M.galvSteel,0,0,0);oe.visible=!1;let de=z(.04,.35,T-.25,M.galvSteel,0,0,0);$.add(de);let U=new _t;U.position.set(0,0,0),$.add(U);let re=1.05,ue=.28,xe=A(re,re,ue,32,M.aluFrame,0,0,0,0,Math.PI/2);U.add(xe);let te=A(re-.04,re-.04,ue-.02,28,M.rotorWheel,0,0,0,0,Math.PI/2);U.add(te);let Te=A(.2,.2,ue+.06,16,M.baseSkid,0,0,0,0,Math.PI/2);U.add(Te);for(let ne=0;ne<12;ne++){let me=ne/12*Math.PI*2,Me=z(.03,re*1.9,.02,M.aluFrame,0,0,0);Me.rotation.x=me,U.add(Me)}let Ae=z(.18,.22,.18,M.motorCast,0,S-.25,.6),Ie=z(.04,.45,.02,M.doorHandle,0,S-.45,.6);$.add(Ae,Ie),N.push(()=>{U.rotation.x+=.008});let Xe=new _t;O.add(Xe);let C=-S/2,Z=S-.3,Q=T-.35,_e=z(.28,Z,Q,M.coolingFin,1.35,C,0);Xe.add(_e);let ye=A(.035,.035,Z+.1,12,M.copperPipe,1.35,C,I-.25),ee=A(.035,.035,Z+.1,12,M.copperPipe,1.35,C,I-.15),fe=A(.06,.06,.12,12,M.copperPipe,1.35,C+.3,I,Math.PI/2),De=A(.06,.06,.12,12,M.copperPipe,1.35,C-.3,I,Math.PI/2);Xe.add(ye,ee,fe,De);let gt=z(.22,Z,Q,M.heatingFin,1.85,C,0),et=A(.03,.03,Z+.08,12,M.copperPipe,1.85,C,I-.25),Kt=A(.03,.03,Z+.08,12,M.copperPipe,1.85,C,I-.15);Xe.add(gt,et,Kt);let ti=z(.08,Z,Q,M.damperBlade,1.55,C,0);Xe.add(ti);let mn=z(.95,.08,Q+.1,M.drainPan,1.6,-S+.12,0),ua=A(.025,.025,.22,10,M.drainPan,1.6,-S+.08,I-.1,Math.PI/2);Xe.add(mn,ua);let Hi=new _t;O.add(Hi);function ca(ne,me,Me,he=1){let Ze=new _t;Ze.position.set(ne,me,Me);let Pe=z(.6*he,.04,.6*he,M.galvSteel,0,-.45*he,0);Ze.add(Pe),[-.22*he,.22*he].forEach(At=>{[-.22*he,.22*he].forEach(zr=>{let gn=A(.03*he,.03*he,.1*he,8,M.aluFrame,At,-.4*he,zr);Ze.add(gn)})});let He=A(.42*he,.35*he,.12*he,24,M.fanHousing,-.25*he,0,0,0,Math.PI/2);Ze.add(He);let Mt=A(.18*he,.18*he,.32*he,16,M.motorCast,.18*he,0,0,0,Math.PI/2),je=z(.12*he,.1*he,.1*he,M.fanHousing,.18*he,.18*he,0);Ze.add(Mt,je);let St=new _t;St.position.set(-.05*he,0,0),Ze.add(St);let Pt=A(.38*he,.38*he,.04*he,24,M.fanImpeller,0,0,0,0,Math.PI/2);St.add(Pt);for(let At=0;At<7;At++){let zr=At/7*Math.PI*2,gn=new sa(.03*he,.14*he,.16*he),_n=new Vt(gn,M.fanImpeller);_n.position.set(0,Math.cos(zr)*.24*he,Math.sin(zr)*.24*he),_n.rotation.x=zr+.4,St.add(_n)}return N.push(()=>{St.rotation.x+=.12}),Ze}let da=ca(3,-S/2+.1,0,1.15),pa=ca(-1.2,S/2-.05,0,.95);Hi.add(da,pa);let _i=z(.08,S-.3,T-.4,M.actuatorOrange,f+.02,-S/2,0);Hi.add(_i);let Vi=new _t;O.add(Vi);let fa=z(.32,.55,.18,M.motorCast,2.3,Y+.35,I+.09),ma=z(.18,.12,.02,M.coolingFin,2.3,Y+.45,I+.185),tr=A(.03,.03,.03,12,M.actuatorOrange,2.3,Y+.22,I+.19,Math.PI/2);Vi.add(fa,ma,tr);let ga=new ea({color:3359061}),ir=A(.012,.012,.6,8,ga,2.3,Y+.05,I+.04);Vi.add(ir);let ki=new _t;O.add(ki);let Pi=120,_a=[],rr=document.createElement("canvas");rr.width=32,rr.height=32;let Br=rr.getContext("2d"),Gi=Br.createRadialGradient(16,16,0,16,16,16);Gi.addColorStop(0,"rgba(255, 255, 255, 1)"),Gi.addColorStop(.3,"rgba(2, 132, 199, 0.8)"),Gi.addColorStop(.7,"rgba(2, 132, 199, 0.2)"),Gi.addColorStop(1,"rgba(0, 0, 0, 0)"),Br.fillStyle=Gi,Br.fillRect(0,0,32,32);let va=new zo(rr),v=new Kl({size:.14,map:va,transparent:!0,opacity:.8,vertexColors:!0,blending:es,depthWrite:!1}),L=new Float32Array(Pi*3),G=new Float32Array(Pi*3);for(let ne=0;ne<Pi;ne++){let me=ne<Pi*.65,Me=Math.random();_a.push({isSupply:me,progress:Me,speed:.004+Math.random()*.003,offsetY:(Math.random()-.5)*.6,offsetZ:(Math.random()-.5)*1.2}),me?(G[ne*3]=.02,G[ne*3+1]=.65,G[ne*3+2]=.98):(G[ne*3]=.95,G[ne*3+1]=.45,G[ne*3+2]=.12)}let V=new qt;V.setAttribute("position",new Qt(L,3)),V.setAttribute("color",new Qt(G,3));let H=new Au(V,v);ki.add(H),N.push(()=>{if(!qe.cfdEnabled){ki.visible=!1;return}ki.visible=!0;let ne=V.attributes.position.array;for(let me=0;me<Pi;me++){let Me=_a[me];Me.progress+=Me.speed,Me.progress>1&&(Me.progress=0);let he,Ze,Pe;Me.isSupply?(he=-f+Me.progress*(b+.3),Ze=-S/2+Me.offsetY,Pe=Me.offsetZ):(he=1.5-Me.progress*(b*.7),Ze=S/2+Me.offsetY,Pe=Me.offsetZ),ne[me*3]=he,ne[me*3+1]=Ze,ne[me*3+2]=Pe}V.attributes.position.needsUpdate=!0});let ae=new _t;O.add(ae);let pe=[{id:"damper",num:"01",title:"Hava Ayar Damperi",pos:[-f+.2,-S/2+.2,I+.25],desc:i?"DIN 1946-4 normunda, sızdırmaz contalı, antibakteriyel kasetli ve Belimo oransal servomotorlu taze hava damperi.":"EN 1751 Class 4 sızdırmazlık normunda, aerodinamik alüminyum kanatlı ve Belimo oransal servomotorlu taze hava damperi."},{id:"filter",num:"02",title:i?"H14 HEPA Sızdırmaz Filtre":"G4 + F7/F9 Filtre Hücresi",pos:[-1.8,-S/2+.4,I+.25],desc:i?"EN 1822 normunda %99.995 sızdırmazlıkta jel contalı H14 HEPA filtre hücresi ve aerosol DOP test portları.":"ISO 16890 / EN 779 standartlarında yüksek toz tutma kapasiteli sentetik torba filtre ve diferansiyel manometre izleme."},{id:"rotor",num:"03",title:i?"Epoksi Kaplı Isı Geri Kazanım":"Döner Isı Geri Kazanım Rotoru",pos:[0,.4,I+.25],desc:i?"VDI 6022 hijyen standartlarına uygun, çapraz bulaşmasız epoksi kaplamalı hava ayrıştırmalı ısı geri kazanım eşanjörü.":"%82-85 ısıl verimlilikte higroskopik alüminyum petek rotor. Egzoz havasının gizli ve duyulur enerjisini taze havaya aktarır."},{id:"coil",num:"04",title:i?"AISI 304 Paslanmaz Serpantin":"Isıtma & Soğutma Serpantinleri",pos:[1.6,-S/2+.3,I+.25],desc:i?"AISI 304 paslanmaz çelik kasetli, hidrofilik antibakteriyel lamelli ve sökülebilir eğimli yoğuşma tavalı batarya.":"Dikişsiz bakır boru ve hidrofilik alüminyum lameller. 25 bar basınç testli, paslanmaz yoğuşma tavalı ve damla tutuculu."},{id:"fan",num:"05",title:"EC Plug Fan & Motor",pos:[3,-S/2+.4,I+.25],desc:"Geriye eğik kanatlı radyal alüminyum çark, fırçasız EC daimi mıknatıslı motor ve titreşim sönümleyici yaylı izolatörler."},{id:"panel",num:"06",title:"Otomasyon & Kumanda Panosu",pos:[2.3,Y+.65,I+.25],desc:"IP55 sızdırmaz korumalı DDC mikroişlemcili pano, BACnet/Modbus bina otomasyonu entegrasyonu ve dijital durum ekranı."}];function ve(ne){let me=document.createElement("canvas");me.width=64,me.height=64;let Me=me.getContext("2d");Me.fillStyle="#0284c7",Me.beginPath(),Me.arc(32,32,28,0,Math.PI*2),Me.fill(),Me.lineWidth=4,Me.strokeStyle="#ffffff",Me.stroke(),Me.fillStyle="#ffffff",Me.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',Me.textAlign="center",Me.textBaseline="middle",Me.fillText(ne,32,33);let he=new zo(me);return he.minFilter=Ut,he}let Se=[];pe.forEach(ne=>{let me=new _t;me.position.set(...ne.pos);let Me=new Gs(.012,.012,.25,8),he=new ea({color:165063}),Ze=new Vt(Me,he);Ze.position.y=-.12;let Pe=new jl({map:ve(ne.num),depthTest:!1}),He=new xu(Pe);He.scale.set(.32,.32,1),He.position.y=.05,He.userData={hotspot:ne},me.add(Ze,He),me.userData={hotspot:ne},ae.add(me),Se.push(He)}),N.push(()=>{let ne=Date.now()*.003,me=.32+Math.sin(ne)*.025;Se.forEach(Me=>{Me.scale.set(me,me,1)})});let Ce=new Xu,ke=new Le;function Ye(ne){let me=o.domElement.getBoundingClientRect();ke.x=(ne.clientX-me.left)/me.width*2-1,ke.y=-((ne.clientY-me.top)/me.height)*2+1,Ce.setFromCamera(ke,s);let Me=Ce.intersectObjects(ae.children,!0);if(Me.length>0){let he=Me[0].object;for(;he.parent&&!he.userData.hotspot;)he=he.parent;he&&he.userData.hotspot&&(showHotspotCard(he.userData.hotspot),be(he.userData.hotspot.pos))}}o.domElement.addEventListener("click",Ye);function be(ne){l.autoRotate=!1;let me=new B(ne[0]+3,ne[1]+1.5,ne[2]+4),Me=s.position.clone(),he=l.target.clone(),Ze=new B(ne[0],ne[1],ne[2]),Pe=0;function He(){Pe+=.04,Pe<=1&&(s.position.lerpVectors(Me,me,Pe),l.target.lerpVectors(he,Ze,Pe),requestAnimationFrame(He))}He()}let qe={autoRotate:!0,cfdEnabled:!0,isCutaway:!0,isExploded:!1};function ft(ne){qe.isCutaway=ne,F.forEach(me=>{me.material=ne?M.panelCutaway:M.panelSolid})}function at(ne){qe.isExploded=ne;let me=ne?I+.8:I-.02;F.forEach(Me=>{Me.position.z=me})}function nt(){l.autoRotate=qe.autoRotate,l.target.set(0,0,0),s.position.set(9.5,4.2,7.8),hideHotspotCard()}og(t,{state:qe,controls:l,isHygienic:i,setCutawayMode:ft,setExplodedMode:at,resetCamera:nt,onResize:Et});let dt=null;function Ee(){dt=requestAnimationFrame(Ee),l.update(),N.forEach(ne=>ne()),o.render(r,s)}Ee();function Et(){if(!t)return;let ne=t.clientWidth,me=t.clientHeight;s.aspect=ne/me,s.updateProjectionMatrix(),o.setSize(ne,me)}return window.addEventListener("resize",Et),{scene:r,camera:s,renderer:o,destroy:()=>{for(cancelAnimationFrame(dt),window.removeEventListener("resize",Et),o.dispose();t.firstChild;)t.removeChild(t.firstChild)}}}function og(e,t){if(e.parentElement.querySelector(".sky-3d-hud"))return;let i=document.createElement("div");i.className="sky-3d-hud",i.innerHTML=`
    <!-- Top Left Status Badge -->
    <div class="sky-3d-badge-bar">
      <span class="sky-3d-pill">
        <span class="sky-3d-dot live"></span>
        ${t.isHygienic?"THKS Hijyenik AHU (DIN 1946-4)":"TKS Standart AHU (EN 1886)"} 3D CAD İkiz
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
  `,e.parentElement.style.position="relative",e.parentElement.appendChild(i);let r=i.querySelector("#sky-btn-rotate");r.addEventListener("click",()=>{t.state.autoRotate=!t.state.autoRotate,t.controls.autoRotate=t.state.autoRotate,r.classList.toggle("active",t.state.autoRotate)});let a=i.querySelector("#sky-btn-cfd");a.addEventListener("click",()=>{t.state.cfdEnabled=!t.state.cfdEnabled,a.classList.toggle("active",t.state.cfdEnabled)});let n=i.querySelector("#sky-btn-casing"),s=i.querySelector("#sky-casing-text");n.addEventListener("click",()=>{t.state.isCutaway=!t.state.isCutaway,t.setCutawayMode(t.state.isCutaway),s.textContent=t.state.isCutaway?"Şeffaf Gövde":"Kapalı Gövde",n.classList.toggle("active",!t.state.isCutaway)});let o=i.querySelector("#sky-btn-toggle-view"),l=i.querySelector("#sky-view-toggle-text"),h=document.getElementById("sky-product-3d-canvas"),c=document.getElementById("sky-product-2d-view");o.addEventListener("click",()=>{c&&h&&(window.getComputedStyle(c).display!=="none"?(c.style.display="none",h.style.display="block",l.textContent="2D Çizim",o.classList.remove("active"),t.onResize&&t.onResize()):(c.style.display="flex",h.style.display="none",l.textContent="3D Model",o.classList.add("active")))}),i.querySelector("#sky-btn-reset").addEventListener("click",()=>{t.resetCamera()})}window.showHotspotCard=function(e){let t=document.getElementById("sky-3d-hotspot-card");t&&(document.getElementById("sky-card-num").textContent=e.num,document.getElementById("sky-card-title").textContent=e.title,document.getElementById("sky-card-desc").textContent=e.desc,t.style.display="block")};window.hideHotspotCard=function(){let e=document.getElementById("sky-3d-hotspot-card");e&&(e.style.display="none")};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Ml()):Ml());/*! Bundled license information:

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
