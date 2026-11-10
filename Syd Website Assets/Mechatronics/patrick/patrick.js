(()=>{var O0=Object.defineProperty;var B0=(i,e)=>{for(var t in e)O0(i,t,{get:e[t],enumerable:!0})};var Sf=0,wu=1,wf=2;var as=1,Ef=2,ia=3,Ds=0,sn=1,Jt=2,Kt=0,sa=1,Eu=2,Tu=3,Au=4,mc=5;var ri=100,Tf=101,Af=102,Rf=103,Cf=104,hr=200,Pf=201,If=202,Lf=203,Ru=204,Cu=205,ho=206,Df=207,uo=208,Nf=209,Uf=210,Ff=211,Of=212,Bf=213,kf=214,Ll=0,Dl=1,Nl=2,Xr=3,Ul=4,Fl=5,Ol=6,Bl=7,Pu=0,zf=1,Hf=2,bi=0,fo=1,po=2,mo=3,os=4,go=5,xo=6,_o=7;var Iu=300,Ns=301,ur=302,gc=303,xc=304,vo=306,wn=1e3,Ii=1001,kl=1002,Zt=1003,Gf=1004;var yo=1005;var fn=1006,_c=1007;var Us=1008;var En=1009,Lu=1010,Du=1011,ra=1012,vc=1013,Mi=1014,Si=1015,Qt=1016,yc=1017,bc=1018,Fs=1020,Nu=35902,Uu=35899,Fu=1021,Ou=1022,Nn=1023,Li=1026,ki=1027,Bu=1028,Mc=1029,Os=1030,Sc=1031;var wc=1033,bo=33776,Mo=33777,So=33778,wo=33779,Ec=35840,Tc=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Ic=37496,Lc=37488,Dc=37489,Eo=37490,Nc=37491,Uc=37808,Fc=37809,Oc=37810,Bc=37811,kc=37812,zc=37813,Hc=37814,Gc=37815,Vc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,Zc=36492,Jc=36494,Kc=36495,jc=36283,Qc=36284,To=36285,eh=36286;var za=2300,zl=2301,Pl=2302,fu=2303,pu=2400,mu=2401,gu=2402;var Vf=3200;var Ao=0,Wf=1,ls="",Gt="srgb",Ha="srgb-linear",Ga="linear",Nt="srgb";var Il=7680;var Xf=519,qf=512,Yf=513,$f=514,th=515,Zf=516,Jf=517,nh=518,Kf=519,jf=35044;var ku="300 es",_i=2e3,qr=2001;function k0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qf(){let i=Va("canvas");return i.style.display="block",i}var Xd={},Yr=null;function zu(...i){let e="THREE."+i.shift();Yr?Yr("log",e,...i):console.log(e,...i)}function ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=ep(i);let e="THREE."+i.shift();if(Yr)Yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=ep(i);let e="THREE."+i.shift();if(Yr)Yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ir(...i){let e=i.join(" ");e in Xd||(Xd[e]=!0,it(...i))}function tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var np={[Ll]:Dl,[Nl]:Ol,[Ul]:Bl,[Xr]:Fl,[Dl]:Ll,[Ol]:Nl,[Bl]:Ul,[Fl]:Xr},Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zh=Math.PI/180,Hl=180/Math.PI;function aa(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function H0(i,e){return(i%e+e)%e}function Hh(i,e,t){return(1-t)*i+t*e}function Ia(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qu=class qu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qu.prototype.isVector2=!0;var Ee=qu,si=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),R=Math.sin(v);p=Math.sin(p*v)/R,o=Math.sin(o*v)/R,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yu=class Yu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gh.copy(this).projectOnVector(e),this.sub(Gh)}reflect(e){return this.sub(Gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yu.prototype.isVector3=!0;var B=Yu,Gh=new B,qd=new si,$u=class $u{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],R=s[4],b=s[7],E=s[2],A=s[5],P=s[8];return r[0]=a*_+o*v+l*E,r[3]=a*m+o*R+l*A,r[6]=a*p+o*b+l*P,r[1]=c*_+h*v+u*E,r[4]=c*m+h*R+u*A,r[7]=c*p+h*b+u*P,r[2]=d*_+f*v+g*E,r[5]=d*m+f*R+g*A,r[8]=d*p+f*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$u.prototype.isMatrix3=!0;var dt=$u,Vh=new dt,Yd=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G0(){let i={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Nt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Nt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?Ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ha]:{primaries:e,whitePoint:n,transfer:Ga,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var wt=G0();function ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Va("canvas")),Ir.width=e.width,Ir.height=e.height;let s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Va("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ns(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V0=0,$r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wh(s[a].image)):r.push(Wh(s[a]))}else r=Wh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var W0=0,Xh=new B,Rn=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=fn,a=Us,o=Nn,l=En,c=i.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=aa(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Iu;Rn.DEFAULT_ANISOTROPY=1;var Zu=class Zu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,b=(f+1)/2,E=(p+1)/2,A=(h+d)/4,P=(u+_)/4,M=(g+m)/4;return R>b&&R>E?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=A/n,r=P/n):b>E?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=P/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zu.prototype.isVector4=!0;var Ht=Zu,Vl=class extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wa=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pc=class pc{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,q0)}lookAt(e,t,n){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ys.crossVectors(n,Vn),ys.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ys.crossVectors(n,Vn)),ys.normalize(),ol.crossVectors(Vn,ys),s[0]=ys.x,s[4]=ol.x,s[8]=Vn.x,s[1]=ys.y,s[5]=ol.y,s[9]=Vn.y,s[2]=ys.z,s[6]=ol.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],R=n[7],b=n[11],E=n[15],A=s[0],P=s[4],M=s[8],T=s[12],I=s[1],L=s[5],O=s[9],k=s[13],U=s[2],W=s[6],q=s[10],K=s[14],pe=s[3],Z=s[7],ne=s[11],he=s[15];return r[0]=a*A+o*I+l*U+c*pe,r[4]=a*P+o*L+l*W+c*Z,r[8]=a*M+o*O+l*q+c*ne,r[12]=a*T+o*k+l*K+c*he,r[1]=h*A+u*I+d*U+f*pe,r[5]=h*P+u*L+d*W+f*Z,r[9]=h*M+u*O+d*q+f*ne,r[13]=h*T+u*k+d*K+f*he,r[2]=g*A+_*I+m*U+p*pe,r[6]=g*P+_*L+m*W+p*Z,r[10]=g*M+_*O+m*q+p*ne,r[14]=g*T+_*k+m*K+p*he,r[3]=v*A+R*I+b*U+E*pe,r[7]=v*P+R*L+b*W+E*Z,r[11]=v*M+R*O+b*q+E*ne,r[15]=v*T+R*k+b*K+E*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*f-c*d,R=o*f-c*u,b=o*d-l*u,E=a*f-c*h,A=a*d-l*h,P=a*u-o*h;return t*(_*v-m*R+p*b)-n*(g*v-m*E+p*A)+s*(g*R-_*E+p*P)-r*(g*b-_*A+m*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=t*o-n*a,R=t*l-s*a,b=t*c-r*a,E=n*l-s*o,A=n*c-r*o,P=s*c-r*l,M=h*_-u*g,T=h*m-d*g,I=h*p-f*g,L=u*m-d*_,O=u*p-f*_,k=d*p-f*m,U=v*k-R*O+b*L+E*I-A*T+P*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/U;return e[0]=(o*k-l*O+c*L)*W,e[1]=(s*O-n*k-r*L)*W,e[2]=(_*P-m*A+p*E)*W,e[3]=(d*A-u*P-f*E)*W,e[4]=(l*I-a*k-c*T)*W,e[5]=(t*k-s*I+r*T)*W,e[6]=(m*b-g*P-p*R)*W,e[7]=(h*P-d*b+f*R)*W,e[8]=(a*O-o*I+c*M)*W,e[9]=(n*I-t*O-r*M)*W,e[10]=(g*A-_*b+p*v)*W,e[11]=(u*b-h*A-f*v)*W,e[12]=(o*T-a*L-l*M)*W,e[13]=(t*L-n*T+s*M)*W,e[14]=(_*R-g*E-m*v)*W,e[15]=(h*E-u*R+d*v)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,v=l*c,R=l*h,b=l*u,E=n.x,A=n.y,P=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+b)*E,s[2]=(g-R)*E,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+R)*P,s[9]=(m-v)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Lr.set(s[0],s[1],s[2]).length(),o=Lr.set(s[4],s[5],s[6]).length(),l=Lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);let c=1/a,h=1/o,u=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=_i,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===_i)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===qr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_i,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===_i)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===qr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pc.prototype.isMatrix4=!0;var Lt=pc,Lr=new B,pi=new Lt,X0=new B(0,0,0),q0=new B(1,1,1),ys=new B,ol=new B,Vn=new B,Zd=new Lt,Jd=new si,vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y0=0,Kd=new B,Dr=new si,Ki=new Lt,ll=new B,La=new B,$0=new B,Z0=new si,jd=new B(1,0,0),Qd=new B(0,1,0),ef=new B(0,0,1),tf={type:"added"},J0={type:"removed"},Nr={type:"childadded",child:null},qh={type:"childremoved",child:null},pn=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new vi,n=new si,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new dt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(La,ll,this.up):Ki.lookAt(ll,La,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(Ki),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new B(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},K0={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=H0(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yh(a,r,e+1/3),this.g=Yh(a,r,e),this.b=Yh(a,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return wt.workingToColorSpace(Sn.copy(this),e),Math.round(St(Sn.r*255,0,255))*65536+Math.round(St(Sn.g*255,0,255))*256+Math.round(St(Sn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Gt){wt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(cl);let n=Hh(bs.h,cl.h,t),s=Hh(bs.s,cl.s,t),r=Hh(bs.l,cl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new je;je.NAMES=ip;var sr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},is=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mi=new B,ji=new B,$h=new B,Qi=new B,Ur=new B,Fr=new B,nf=new B,Zh=new B,Jh=new B,Kh=new B,jh=new Ht,Qh=new Ht,eu=new Ht,Es=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),ji.subVectors(n,t),$h.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(ji),l=mi.dot($h),c=ji.dot(ji),h=ji.dot($h),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return jh.setScalar(0),Qh.setScalar(0),eu.setScalar(0),jh.fromBufferAttribute(e,t),Qh.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jh,r.x),a.addScaledVector(Qh,r.y),a.addScaledVector(eu,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),ji.subVectors(e,t),mi.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),mi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ur.subVectors(s,n),Fr.subVectors(r,n),Zh.subVectors(e,n);let l=Ur.dot(Zh),c=Fr.dot(Zh);if(l<=0&&c<=0)return t.copy(n);Jh.subVectors(e,s);let h=Ur.dot(Jh),u=Fr.dot(Jh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ur,a);Kh.subVectors(e,r);let f=Ur.dot(Kh),g=Fr.dot(Kh);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Fr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(nf,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ur,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hl.copy(n.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),ul.subVectors(this.max,Da),Or.subVectors(e.a,Da),Br.subVectors(e.b,Da),kr.subVectors(e.c,Da),Ms.subVectors(Br,Or),Ss.subVectors(kr,Br),js.subVectors(Or,kr);let t=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-js.z,js.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,js.z,0,-js.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-js.y,js.x,0];return!tu(t,Or,Br,kr,ul)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,Or,Br,kr,ul))?!1:(dl.crossVectors(Ms,Ss),t=[dl.x,dl.y,dl.z],tu(t,Or,Br,kr,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new B,new B,new B,new B,new B,new B,new B,new B],gi=new B,hl=new mn,Or=new B,Br=new B,kr=new B,Ms=new B,Ss=new B,js=new B,Da=new B,ul=new B,dl=new B,Qs=new B;function tu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qs.fromArray(i,r);let o=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=e.dot(Qs),c=t.dot(Qs),h=n.dot(Qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jt=new B,fl=new Ee,j0=0,Ln=class extends Di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),s=In(s,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=class extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qa=class extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},Q0=new mn,Na=new B,nu=new B,rr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Q0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let t=Na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(nu)),this.expandByPoint(Na.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},em=0,ii=new Lt,iu=new pn,zr=new B,Wn=new mn,Ua=new mn,cn=new B,Ft=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k0(e)?qa:Xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ua.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Wn.min,Ua.min),Wn.expandByPoint(cn),cn.addVectors(Wn.max,Ua.max),Wn.expandByPoint(cn)):(Wn.expandByPoint(Ua.min),Wn.expandByPoint(Ua.max))}Wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),cn.add(zr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new B,l[M]=new B;let c=new B,h=new B,u=new B,d=new Ee,f=new Ee,g=new Ee,_=new B,m=new B;function p(M,T,I){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[M].add(_),o[T].add(_),o[I].add(_),l[M].add(m),l[T].add(m),l[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,T=v.length;M<T;++M){let I=v[M],L=I.start,O=I.count;for(let k=L,U=L+O;k<U;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let R=new B,b=new B,E=new B,A=new B;function P(M){E.fromBufferAttribute(s,M),A.copy(E);let T=o[M];R.copy(T),R.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(A,T);let L=b.dot(l[M])<0?-1:1;a.setXYZW(M,R.x,R.y,R.z,L)}for(let M=0,T=v.length;M<T;++M){let I=v[M],L=I.start,O=I.count;for(let k=L,U=L+O;k<U;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ln(d,h,u)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var su=new B,tm=new B,nm=new dt,xi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=su.subVectors(n,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nm.getNormalMatrix(e),s=this.coplanarPoint(su).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},im=0,Ni=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=sa,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Cu,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ts=new B,ru=new B,pl=new B,ml=new B,Kr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ru.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ml.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pl),o=ml.dot(this.direction),l=-ml.dot(pl),c=ml.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ru).addScaledVector(pl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,v=n.y-a.y,R=n.z-a.z,b=Math.abs(l),E=Math.abs(c),A=Math.abs(h),P,M,T,I,L,O,k,U,W,q,K,pe;if(b>=E&&b>=A?(T=l,O=u,W=g,pe=p,l>=0?(P=c,M=h,I=d,L=f,k=_,U=m,q=v,K=R):(P=h,M=c,I=f,L=d,k=m,U=_,q=R,K=v)):E>=A?(T=c,O=d,W=_,pe=v,c>=0?(P=h,M=l,I=f,L=u,k=m,U=g,q=R,K=p):(P=l,M=h,I=u,L=f,k=g,U=m,q=p,K=R)):(T=h,O=f,W=m,pe=R,h>=0?(P=l,M=c,I=u,L=d,k=g,U=_,q=p,K=v):(P=c,M=l,I=d,L=u,k=_,U=g,q=v,K=p)),T===0)return null;let Z=P/T,ne=M/T,he=1/T,Pe=I-Z*O,ve=L-ne*O,qe=k-Z*W,ee=U-ne*W,se=q-Z*pe,D=K-ne*pe,N=se*ee-D*qe,$=Pe*D-ve*se,re=qe*ve-ee*Pe;if(s){if(N<0||$<0||re<0)return null}else if((N<0||$<0||re<0)&&(N>0||$>0||re>0))return null;let oe=N+$+re;if(oe===0)return null;let Se=he*(N*O+$*W+re*pe);return(oe>0?Se<0:Se>0)?null:this.at(Se/oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sf=new Lt,er=new Kr,gl=new rr,rf=new B,xl=new B,_l=new B,vl=new B,au=new B,yl=new B,af=new B,bl=new B,rt=class extends pn{constructor(e=new Ft,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(au.fromBufferAttribute(u,e),a?yl.addScaledVector(au,h):yl.addScaledVector(au.sub(t),h))}t.add(yl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(r),er.copy(e.ray).recast(e.near),!(gl.containsPoint(er.origin)===!1&&(er.intersectSphere(gl,rf)===null||er.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(sf.copy(r).invert(),er.copy(e.ray).applyMatrix4(sf),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,E=R;b<E;b+=3){let A=o.getX(b),P=o.getX(b+1),M=o.getX(b+2);s=Ml(this,p,e,n,c,h,u,A,P,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=o.getX(m),R=o.getX(m+1),b=o.getX(m+2);s=Ml(this,a,e,n,c,h,u,v,R,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,E=R;b<E;b+=3){let A=b,P=b+1,M=b+2;s=Ml(this,p,e,n,c,h,u,A,P,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=m,R=m+1,b=m+2;s=Ml(this,a,e,n,c,h,u,v,R,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function sm(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ds,o),l===null)return null;bl.copy(o),bl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(bl);return c<t.near||c>t.far?null:{distance:c,point:bl.clone(),object:i}}function Ml(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xl),i.getVertexPosition(l,_l),i.getVertexPosition(c,vl);let h=sm(i,e,t,n,xl,_l,vl,af);if(h){let u=new B;Es.getBarycoord(af,xl,_l,vl,u),s&&(h.uv=Es.getInterpolatedAttribute(s,o,l,c,u,new Ee)),r&&(h.uv1=Es.getInterpolatedAttribute(r,o,l,c,u,new Ee)),a&&(h.normal=Es.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};Es.getNormal(xl,_l,vl,d.normal),h.face=d,h.barycoord=u}return h}var Ts=class extends Rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Zt,h=Zt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=new rr,rm=new Ee(.5,.5),Sl=new B,jr=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],R=r[13],b=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-g,E-v).normalize(),s[1].setComponents(c+a,f+h,p+g,E+v).normalize(),s[2].setComponents(c+o,f+u,p+_,E+R).normalize(),s[3].setComponents(c-o,f-u,p-_,E-R).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,E-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,E-b).normalize(),t===_i)s[5].setComponents(c+l,f+d,p+m,E+b).normalize();else if(t===qr)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);let t=rm.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sl.x=s.normal.x>0?e.max.x:e.min.x,Sl.y=s.normal.y>0?e.max.y:e.min.y,Sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qr=class extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xl=new B,ql=new B,of=new Lt,Fa=new Kr,wl=new rr,ou=new B,lf=new B,Ya=class extends pn{constructor(e=new Ft,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xl.fromBufferAttribute(t,s-1),ql.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xl.distanceTo(ql);e.setAttribute("lineDistance",new gt(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;of.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(of);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),v=h.getX(_+1),R=El(this,e,Fa,l,p,v,_);R&&t.push(R)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=El(this,e,Fa,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=El(this,e,Fa,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=El(this,e,Fa,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function El(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Xl.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),t.distanceSqToSegment(Xl,ql,ou,lf)>n)return;ou.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ou);if(!(c<e.near||c>e.far))return{distance:c,point:lf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $a=class extends Rn{constructor(e=[],t=Ns,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends Rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends Rn{constructor(e,t,n=Mi,s,r,a,o=Zt,l=Zt,c,h=Li,u=1){if(h!==Li&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yl=class extends Fi{constructor(e,t=Mi,n=Ns,s,r,a=Zt,o=Zt,l,c=Li){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vt=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function g(_,m,p,v,R,b,E,A,P,M,T){let I=b/P,L=E/M,O=b/2,k=E/2,U=A/2,W=P+1,q=M+1,K=0,pe=0,Z=new B;for(let ne=0;ne<q;ne++){let he=ne*L-k;for(let Pe=0;Pe<W;Pe++){let ve=Pe*I-O;Z[_]=ve*v,Z[m]=he*R,Z[p]=U,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Pe/P),u.push(1-ne/M),K+=1}}for(let ne=0;ne<M;ne++)for(let he=0;he<P;he++){let Pe=d+he+W*ne,ve=d+he+W*(ne+1),qe=d+(he+1)+W*(ne+1),ee=d+(he+1)+W*ne;l.push(Pe,ve,ee),l.push(ve,qe,ee),pe+=6}o.addGroup(f,pe,T),f+=pe,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ja=class i extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,h=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gn=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;v(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function v(){let b=new B,E=new B,A=0,P=(t-e)/n;for(let M=0;M<=r;M++){let T=[],I=M/r,L=I*(t-e)+e;for(let O=0;O<=s;O++){let k=O/s,U=k*l+o,W=Math.sin(U),q=Math.cos(U);E.x=L*W,E.y=-I*n+m,E.z=L*q,u.push(E.x,E.y,E.z),b.set(W,P,q).normalize(),d.push(b.x,b.y,b.z),f.push(k,1-I),T.push(g++)}_.push(T)}for(let M=0;M<s;M++)for(let T=0;T<r;T++){let I=_[T][M],L=_[T+1][M],O=_[T+1][M+1],k=_[T][M+1];(e>0||T!==0)&&(h.push(I,L,k),A+=3),(t>0||T!==r-1)&&(h.push(L,O,k),A+=3)}c.addGroup(p,A,0),p+=A}function R(b){let E=g,A=new Ee,P=new B,M=0,T=b===!0?e:t,I=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let U=O/s*l+o,W=Math.cos(U),q=Math.sin(U);P.x=T*q,P.y=m*I,P.z=T*W,u.push(P.x,P.y,P.z),d.push(0,I,0),A.x=W*.5+.5,A.y=q*.5*I+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let k=E+O,U=L+O;b===!0?h.push(U,U+1,k):h.push(U+1,U,k),M+=3}c.addGroup(p,M,b===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new Lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(St(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(St(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ea=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends ea{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var cf=new B,hf=new B,lu=new Hu,cu=new Hu,hu=new Hu,Oi=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(hf.subVectors(s[0],s[1]).add(s[0]),c=hf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(cf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),lu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),cu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),hu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),cu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),hu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(lu.calc(l),cu.calc(l),hu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function am(i,e){let t=1-i;return t*t*e}function om(i,e){return 2*(1-i)*i*e}function lm(i,e){return i*i*e}function Ba(i,e,t,n){return am(i,e)+om(i,t)+lm(i,n)}function cm(i,e){let t=1-i;return t*t*t*e}function hm(i,e){let t=1-i;return 3*t*t*i*e}function um(i,e){return 3*(1-i)*i*i*e}function dm(i,e){return i*i*i*e}function ka(i,e,t,n,s){return cm(i,e)+hm(i,t)+um(i,n)+dm(i,s)}var Ka=class extends Xn{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,s.x,r.x,a.x,o.x),ka(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zl=class extends Xn{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,s.x,r.x,a.x,o.x),ka(e,s.y,r.y,a.y,o.y),ka(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Xn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends Xn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Xn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ba(e,s.x,r.x,a.x),Ba(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends Xn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ba(e,s.x,r.x,a.x),Ba(e,s.y,r.y,a.y),Ba(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uf(o,l.x,c.x,h.x,u.x),uf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:Oi,CubicBezierCurve:Ka,CubicBezierCurve3:Zl,EllipseCurve:ea,LineCurve:ja,LineCurve3:Jl,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:eo,SplineCurve:to}),jl=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},Bi=class extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ja(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qa(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ka(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new to(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ea(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},As=class extends Bi{constructor(e){super(e),this.uuid=aa(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bi().fromJSON(s))}return this}};function fm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=_m(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return no(r,a,t,o,l,c,0),a}function sp(i,e,t,n,s){let r;if(s===Cm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=df(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=df(a/n|0,i[a],i[a+1],r);return r&&ta(r,r.next)&&(so(r),r=r.next),r}function ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ta(t,t.next)||Vt(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Sm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?mm(i,n,s,r):pm(i)){e.push(l.i,i.i,c.i),so(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gm(ar(i),e),no(i,e,t,n,s,r,2)):a===2&&xm(i,e,t,n,s,r):no(ar(i),e,t,n,s,r,1);break}}}function pm(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Oa(s,o,r,l,a,c,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=xu(f,g,e,t,n),v=xu(_,m,e,t,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=p&&b&&b.z<=v;){if(R.x>=f&&R.x<=_&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Oa(o,h,l,u,c,d,R.x,R.y)&&Vt(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Oa(o,h,l,u,c,d,b.x,b.y)&&Vt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=_&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Oa(o,h,l,u,c,d,R.x,R.y)&&Vt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Oa(o,h,l,u,c,d,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ta(n,s)&&ap(n,t,t.next,s)&&io(n,s)&&io(s,n)&&(e.push(n.i,t.i,s.i),so(t),so(t.next),t=i=s),t=t.next}while(t!==i);return ar(t)}function xm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tm(a,o)){let l=op(a,o);a=ar(a,a.next),l=ar(l,l.next),no(a,e,t,n,s,r,0),no(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _m(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Em(c))}s.sort(vm);for(let r=0;r<s.length;r++)t=ym(s[r],t);return t}function vm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ym(i,e){let t=bm(i,e);if(!t)return e;let n=op(t,i);return ar(n,n.next),ar(t,t.next)}function bm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ta(i,t))return t;do{if(ta(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&rp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);io(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Mm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Mm(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Sm(i,e,t,n){let s=i;do s.z===0&&(s.z=xu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wm(s)}function wm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function xu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Em(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Oa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rp(i,e,t,n,s,r,a,o)}function Tm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Am(i,e)&&(io(i,e)&&io(e,i)&&Rm(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||ta(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ta(i,e){return i.x===e.x&&i.y===e.y}function ap(i,e,t,n){let s=Al(Vt(i,e,t)),r=Al(Vt(i,e,n)),a=Al(Vt(t,n,i)),o=Al(Vt(t,n,e));return!!(s!==r&&a!==o||s===0&&Tl(i,t,e)||r===0&&Tl(i,n,e)||a===0&&Tl(t,i,n)||o===0&&Tl(t,e,n))}function Tl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Al(i){return i>0?1:i<0?-1:0}function Am(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ap(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function io(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Rm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function op(i,e){let t=_u(i.i,i.x,i.y),n=_u(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function df(i,e,t,n){let s=_u(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _u(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vu=class{static triangulate(e,t,n=2){return fm(e,t,n)}},nr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ff(e),pf(n,e);let a=e.length;t.forEach(ff);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,pf(n,t[l]);let o=vu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ff(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var or=class i extends Ft{constructor(e=new As([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Pm,R,b=!1,E,A,P,M;if(p){R=p.getSpacedPoints(h),b=!0,d=!1;let z=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,z),A=new B,P=new B,M=new B}d||(m=0,f=0,g=0,_=0);let T=o.extractPoints(c),I=T.shape,L=T.holes;if(!nr.isClockWise(I)){I=I.reverse();for(let z=0,ae=L.length;z<ae;z++){let Q=L[z];nr.isClockWise(Q)&&(L[z]=Q.reverse())}}function k(z){let Q=10000000000000001e-36,te=z[0];for(let de=1;de<=z.length;de++){let ge=de%z.length,Te=z[ge],Ie=Te.x-te.x,Ye=Te.y-te.y,F=Ie*Ie+Ye*Ye,ht=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(te.x),Math.abs(te.y)),ot=Q*ht*ht;if(F<=ot){z.splice(ge,1),de--;continue}te=Te}}k(I),L.forEach(k);let U=L.length,W=I;for(let z=0;z<U;z++){let ae=L[z];I=I.concat(ae)}function q(z,ae,Q){return ae||st("ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(ae,Q)}let K=I.length;function pe(z,ae,Q){let te,de,ge,Te=z.x-ae.x,Ie=z.y-ae.y,Ye=Q.x-z.x,F=Q.y-z.y,ht=Te*Te+Ie*Ie,ot=Te*F-Ie*Ye;if(Math.abs(ot)>Number.EPSILON){let C=Math.sqrt(ht),y=Math.sqrt(Ye*Ye+F*F),X=ae.x-Ie/C,J=ae.y+Te/C,le=Q.x-F/y,we=Q.y+Ye/y,Le=((le-X)*F-(we-J)*Ye)/(Te*F-Ie*Ye);te=X+Te*Le-z.x,de=J+Ie*Le-z.y;let ce=te*te+de*de;if(ce<=2)return new Ee(te,de);ge=Math.sqrt(ce/2)}else{let C=!1;Te>Number.EPSILON?Ye>Number.EPSILON&&(C=!0):Te<-Number.EPSILON?Ye<-Number.EPSILON&&(C=!0):Math.sign(Ie)===Math.sign(F)&&(C=!0),C?(te=-Ie,de=Te,ge=Math.sqrt(ht)):(te=Te,de=Ie,ge=Math.sqrt(ht/2))}return new Ee(te/ge,de/ge)}let Z=[];for(let z=0,ae=W.length,Q=ae-1,te=z+1;z<ae;z++,Q++,te++)Q===ae&&(Q=0),te===ae&&(te=0),Z[z]=pe(W[z],W[Q],W[te]);let ne=[],he,Pe=Z.concat();for(let z=0,ae=U;z<ae;z++){let Q=L[z];he=[];for(let te=0,de=Q.length,ge=de-1,Te=te+1;te<de;te++,ge++,Te++)ge===de&&(ge=0),Te===de&&(Te=0),he[te]=pe(Q[te],Q[ge],Q[Te]);ne.push(he),Pe=Pe.concat(he)}let ve;if(m===0)ve=nr.triangulateShape(W,L);else{let z=[],ae=[];for(let Q=0;Q<m;Q++){let te=Q/m,de=f*Math.cos(te*Math.PI/2),ge=g*Math.sin(te*Math.PI/2)+_;for(let Te=0,Ie=W.length;Te<Ie;Te++){let Ye=q(W[Te],Z[Te],ge);$(Ye.x,Ye.y,-de),te===0&&z.push(Ye)}for(let Te=0,Ie=U;Te<Ie;Te++){let Ye=L[Te];he=ne[Te];let F=[];for(let ht=0,ot=Ye.length;ht<ot;ht++){let C=q(Ye[ht],he[ht],ge);$(C.x,C.y,-de),te===0&&F.push(C)}te===0&&ae.push(F)}}ve=nr.triangulateShape(z,ae)}let qe=ve.length,ee=g+_;for(let z=0;z<K;z++){let ae=d?q(I[z],Pe[z],ee):I[z];b?(P.copy(E.normals[0]).multiplyScalar(ae.x),A.copy(E.binormals[0]).multiplyScalar(ae.y),M.copy(R[0]).add(P).add(A),$(M.x,M.y,M.z)):$(ae.x,ae.y,0)}for(let z=1;z<=h;z++)for(let ae=0;ae<K;ae++){let Q=d?q(I[ae],Pe[ae],ee):I[ae];b?(P.copy(E.normals[z]).multiplyScalar(Q.x),A.copy(E.binormals[z]).multiplyScalar(Q.y),M.copy(R[z]).add(P).add(A),$(M.x,M.y,M.z)):$(Q.x,Q.y,u/h*z)}for(let z=m-1;z>=0;z--){let ae=z/m,Q=f*Math.cos(ae*Math.PI/2),te=g*Math.sin(ae*Math.PI/2)+_;for(let de=0,ge=W.length;de<ge;de++){let Te=q(W[de],Z[de],te);$(Te.x,Te.y,u+Q)}for(let de=0,ge=L.length;de<ge;de++){let Te=L[de];he=ne[de];for(let Ie=0,Ye=Te.length;Ie<Ye;Ie++){let F=q(Te[Ie],he[Ie],te);b?$(F.x,F.y+R[h-1].y,R[h-1].x+Q):$(F.x,F.y,u+Q)}}}se(),D();function se(){let z=s.length/3;if(d){let ae=0,Q=K*ae;for(let te=0;te<qe;te++){let de=ve[te];re(de[2]+Q,de[1]+Q,de[0]+Q)}ae=h+m*2,Q=K*ae;for(let te=0;te<qe;te++){let de=ve[te];re(de[0]+Q,de[1]+Q,de[2]+Q)}}else{for(let ae=0;ae<qe;ae++){let Q=ve[ae];re(Q[2],Q[1],Q[0])}for(let ae=0;ae<qe;ae++){let Q=ve[ae];re(Q[0]+K*h,Q[1]+K*h,Q[2]+K*h)}}n.addGroup(z,s.length/3-z,0)}function D(){let z=s.length/3,ae=0;N(W,ae),ae+=W.length;for(let Q=0,te=L.length;Q<te;Q++){let de=L[Q];N(de,ae),ae+=de.length}n.addGroup(z,s.length/3-z,1)}function N(z,ae){let Q=z.length;for(;--Q>=0;){let te=Q,de=Q-1;de<0&&(de=z.length-1);for(let ge=0,Te=h+m*2;ge<Te;ge++){let Ie=K*ge,Ye=K*(ge+1),F=ae+te+Ie,ht=ae+de+Ie,ot=ae+de+Ye,C=ae+te+Ye;oe(F,ht,ot,C)}}}function $(z,ae,Q){l.push(z),l.push(ae),l.push(Q)}function re(z,ae,Q){Se(z),Se(ae),Se(Q);let te=s.length/3,de=v.generateTopUV(n,s,te-3,te-2,te-1);Ae(de[0]),Ae(de[1]),Ae(de[2])}function oe(z,ae,Q,te){Se(z),Se(ae),Se(te),Se(ae),Se(Q),Se(te);let de=s.length/3,ge=v.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);Ae(ge[0]),Ae(ge[1]),Ae(ge[3]),Ae(ge[1]),Ae(ge[2]),Ae(ge[3])}function Se(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function Ae(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Im(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Kl[s.type]().fromJSON(s)),new i(n,e.options)}},Pm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ee(r,a),new Ee(o,l),new Ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ee(a,1-l),new Ee(c,1-u),new Ee(d,1-g),new Ee(_,1-p)]:[new Ee(o,1-l),new Ee(h,1-u),new Ee(f,1-g),new Ee(m,1-p)]}};function Im(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Rs=class i extends Ft{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=St(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new B,d=new Ee,f=new B,g=new B,_=new B,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){let R=n+v*h*s,b=Math.sin(R),E=Math.cos(R);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),o.push(d.x,d.y);let P=l[3*A+0]*b,M=l[3*A+1],T=l[3*A+0]*E;c.push(P,M,T)}}for(let v=0;v<t;v++)for(let R=0;R<e.length-1;R++){let b=R+v*e.length,E=b,A=b+e.length,P=b+e.length+1,M=b+1;r.push(E,A,M),r.push(P,M,A)}this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("uv",new gt(o,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var qn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let R=0;R<c;R++){let b=R*u-r;g.push(b,-v,0),_.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let R=v+c*p,b=v+c*(p+1),E=v+1+c*(p+1),A=v+1+c*p;f.push(R,b,A),f.push(b,E,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var un=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,d=new B,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],R=p/n,b=a+R*o,E=e*Math.cos(b),A=Math.sqrt(e*e-E*E),P=0;p===0&&a===0?P=.5/t:p===n&&l===Math.PI&&(P=-.5/t);for(let M=0;M<=t;M++){let T=M/t,I=s+T*r;u.x=-A*Math.cos(I),u.y=E,u.z=A*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+P,1-R),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let R=h[p][v+1],b=h[p][v],E=h[p+1][v],A=h[p+1][v+1];(p!==0||a>0)&&f.push(R,b,A),(p!==n-1||l<Math.PI)&&f.push(b,E,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yi=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new B,f=new B,g=new B;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,R=(s+1)*(_-1)+m,b=(s+1)*_+m;l.push(p,v,b),l.push(v,R,b)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ss=class i extends Ft{constructor(e=new eo(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,l=new B,c=new Ee,h=new B,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function _(){for(let R=0;R<t;R++)m(R);m(r===!1?t:0),v(),p()}function m(R){h=e.getPointAt(R/t,h);let b=a.normals[R],E=a.binormals[R];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,M=Math.sin(P),T=-Math.cos(P);l.x=T*b.x+M*E.x,l.y=T*b.y+M*E.y,l.z=T*b.z+M*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let b=1;b<=s;b++){let E=(s+1)*(R-1)+(b-1),A=(s+1)*R+(b-1),P=(s+1)*R+b,M=(s+1)*(R-1)+b;g.push(E,A,M),g.push(A,P,M)}}function v(){for(let R=0;R<=t;R++)for(let b=0;b<=s;b++)c.x=R/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Kl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mf(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var ai={clone:dr,merge:Tn},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},na=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends Dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends Ni{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ql=class extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function uu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Cs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mu:r=e,o=2*t-n;break;case gu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:a=e,l=2*n-t;break;case gu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,R=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+v*a[c+E]+R*a[l+E]+b*a[u+E];return r}},nc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ic=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sc=class extends Cs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*d+g*2,v=u[p],R=u[p+1],b=e*d+g*2,E=h[b],A=h[b+1],P=Fm(n,t,v,E,s);r[g]=lp(P,_,R,A,m)}return r}};function lp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Um(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Fm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=lp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Um(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),uu(e.settings)&&(n.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case za:t=this.InterpolantFactoryMethodDiscrete;break;case zl:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break;case fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return Pl;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;uu(this.settings)&&(gf(this.settings.inTangents,e),gf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){st("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&z0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,uu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=zl;var Ps=class extends $n{constructor(e,t,n){super(e,t,n)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=za;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};rc.prototype.ValueTypeName="color";var ac=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};ac.prototype.ValueTypeName="number";var oc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)si.slerpFlat(r,0,a,c-o,a,c,l);return r}},ao=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends $n{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=za;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};lc.prototype.ValueTypeName="vector";var cc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cp=new cc,hc=class{constructor(e){this.manager=e!==void 0?e:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var oo=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lr=class extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},du=new Lt,xf=new B,_f=new B,uc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(du,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rl=new B,Cl=new si,Pi=new B,lo=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rl,Cl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Cl,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rl,Cl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Cl,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ws=new B,vf=new Ee,yf=new Ee,hn=class extends lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,vf,yf),t.subVectors(yf,vf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ls=class extends lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yu=class extends uc{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new yu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gr=-90,Vr=1,dc=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Gr,Vr,e,t);s.layers=this.layers,this.add(s);let r=new hn(Gr,Vr,e,t);r.layers=this.layers,this.add(r);let a=new hn(Gr,Vr,e,t);a.layers=this.layers,this.add(a);let o=new hn(Gr,Vr,e,t);o.layers=this.layers,this.add(o);let l=new hn(Gr,Vr,e,t);l.layers=this.layers,this.add(l);let c=new hn(Gr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},co=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Om.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Om(){this._document.hidden===!1&&this.reset()}var Vu="\\[\\]\\.:\\/",Bm=new RegExp("["+Vu+"]","g"),Wu="[^"+Vu+"]",km="[^"+Vu.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",Wu),Hm=/(WCOD+)?/.source.replace("WCOD",km),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),Wm=new RegExp("^"+zm+Hm+Gm+Vm+"$"),Xm=["material","materials","bones","map"],bu=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(e){let t=Wm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=bu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V1=new Float32Array(1);var bf=new Lt,cr=class{constructor(e,t,n=0,s=1/0){this.ray=new Kr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bf),this}intersectObject(e,t=!0,n=[]){return Mu(e,this,n,t),n.sort(Mf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mu(e[s],this,n,t);return n.sort(Mf),n}};function Mf(i,e){return i.distance-e.distance}function Mu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mu(r[a],e,t,!0)}}var Ju=class Ju{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ju.prototype.isMatrix2=!0;var Su=Ju;function Xu(i,e,t,n){let s=qm(n);switch(t){case Fu:return i*e;case Bu:return i*e/s.components*s.byteLength;case Mc:return i*e/s.components*s.byteLength;case Os:return i*e*2/s.components*s.byteLength;case Sc:return i*e*2/s.components*s.byteLength;case Ou:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case wc:return i*e*4/s.components*s.byteLength;case bo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:case Rc:return Math.max(i,16)*Math.max(e,8)/4;case Ec:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Cc:case Pc:case Lc:case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Eo:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zc:case Jc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case To:case eh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qm(i){switch(i){case En:case Lu:return{byteLength:1,components:1};case ra:case Du:case Qt:return{byteLength:2,components:1};case yc:case bc:return{byteLength:2,components:4};case Mi:case vc:case Si:return{byteLength:4,components:1};case Nu:case Uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ip(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function eg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
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
#endif`,ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Qg=`uniform sampler2D dfgLUT;
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
}`,ex=`
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
}`,c_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,__=`#define LAMBERT
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
}`,v_=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,b_=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,S_=`#define PHONG
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
}`,w_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,L_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:sg,alphatest_fragment:rg,alphatest_pars_fragment:ag,aomap_fragment:og,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:hg,begin_vertex:ug,beginnormal_vertex:dg,bsdfs:fg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:gg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:vg,color_fragment:yg,color_pars_fragment:bg,color_pars_vertex:Mg,color_vertex:Sg,common:wg,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Rg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Pg,colorspace_fragment:Ig,colorspace_pars_fragment:Lg,envmap_fragment:Dg,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Ug,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:Yg,envmap_vertex:Og,fog_vertex:Bg,fog_pars_vertex:kg,fog_fragment:zg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Gg,lightmap_pars_fragment:Vg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:qg,lights_toon_fragment:$g,lights_toon_pars_fragment:Zg,lights_phong_fragment:Jg,lights_phong_pars_fragment:Kg,lights_physical_fragment:jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:ex,lights_fragment_maps:tx,lights_fragment_end:nx,lightprobes_pars_fragment:ix,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:ox,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:dx,metalnessmap_pars_fragment:fx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:xx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:yx,normal_pars_fragment:bx,normal_pars_vertex:Mx,normal_vertex:Sx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Ix,project_vertex:Lx,dithering_fragment:Dx,dithering_pars_fragment:Nx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Bx,shadowmap_vertex:kx,shadowmask_pars_fragment:zx,skinbase_vertex:Hx,skinning_pars_vertex:Gx,skinning_vertex:Vx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:$x,transmission_fragment:Zx,transmission_pars_fragment:Jx,uv_pars_fragment:Kx,uv_pars_vertex:jx,uv_vertex:Qx,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:a_,depth_vert:o_,depth_frag:l_,distance_vert:c_,distance_frag:h_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:x_,meshlambert_frag:__,meshmatcap_vert:v_,meshmatcap_frag:y_,meshnormal_vert:b_,meshnormal_frag:M_,meshphong_vert:S_,meshphong_frag:w_,meshphysical_vert:E_,meshphysical_frag:T_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:I_,shadow_frag:L_,sprite_vert:D_,sprite_frag:N_},Ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:Tn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Tn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Tn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Tn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Tn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new je(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Tn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Tn([Ve.points,Ve.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Tn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Tn([Ve.common,Ve.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Tn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Tn([Ve.sprite,Ve.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Tn([Ve.common,Ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Tn([Ve.lights,Ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Hi.physical={uniforms:Tn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};var ih={r:0,b:0,g:0},U_=new Lt,Lp=new dt;Lp.set(-1,0,0,0,1,0,0,0,1);function F_(i,e,t,n,s,r){let a=new je(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let R=v.isScene===!0?v.background:null;if(R&&R.isTexture){let b=v.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(v){let R=!1,b=f(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,R){let b=f(R);b&&(b.isCubeTexture||b.mapping===vo)?(c===void 0&&(c=new rt(new vt(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:dr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lp),c.material.toneMapped=wt.getTransfer(b.colorSpace)!==Nt,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new rt(new qn(2,2),new $t({name:"BackgroundMaterial",uniforms:dr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=wt.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,R){v.getRGB(ih,Gu(i)),t.buffers.color.setClear(ih.r,ih.g,ih.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,R=1){a.set(v),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:p}}function O_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,O,k,U,W){let q=!1,K=u(L,U,k,O);r!==K&&(r=K,c(r.object)),q=f(L,U,k,W),q&&g(L,U,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(L,O,k,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,O,k,U){let W=U.wireframe===!0,q=n[O.id];q===void 0&&(q={},n[O.id]=q);let K=L.isInstancedMesh===!0?L.id:0,pe=q[K];pe===void 0&&(pe={},q[K]=pe);let Z=pe[k.id];Z===void 0&&(Z={},pe[k.id]=Z);let ne=Z[W];return ne===void 0&&(ne=d(l()),Z[W]=ne),ne}function d(L){let O=[],k=[],U=[];for(let W=0;W<t;W++)O[W]=0,k[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:U,object:L,attributes:{},index:null}}function f(L,O,k,U){let W=r.attributes,q=O.attributes,K=0,pe=k.getAttributes();for(let Z in pe)if(pe[Z].location>=0){let he=W[Z],Pe=q[Z];if(Pe===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),he===void 0||he.attribute!==Pe||Pe&&he.data!==Pe.data)return!0;K++}return r.attributesNum!==K||r.index!==U}function g(L,O,k,U){let W={},q=O.attributes,K=0,pe=k.getAttributes();for(let Z in pe)if(pe[Z].location>=0){let he=q[Z];he===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(he=L.instanceColor));let Pe={};Pe.attribute=he,he&&he.data&&(Pe.data=he.data),W[Z]=Pe,K++}r.attributes=W,r.attributesNum=K,r.index=U}function _(){let L=r.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){let k=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;k[L]=1,U[L]===0&&(i.enableVertexAttribArray(L),U[L]=1),W[L]!==O&&(i.vertexAttribDivisor(L,O),W[L]=O)}function v(){let L=r.newAttributes,O=r.enabledAttributes;for(let k=0,U=O.length;k<U;k++)O[k]!==L[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function R(L,O,k,U,W,q,K){K===!0?i.vertexAttribIPointer(L,O,k,W,q):i.vertexAttribPointer(L,O,k,U,W,q)}function b(L,O,k,U){_();let W=U.attributes,q=k.getAttributes(),K=O.defaultAttributeValues;for(let pe in q){let Z=q[pe];if(Z.location>=0){let ne=W[pe];if(ne===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){let he=ne.normalized,Pe=ne.itemSize,ve=e.get(ne);if(ve===void 0)continue;let qe=ve.buffer,ee=ve.type,se=ve.bytesPerElement,D=ee===i.INT||ee===i.UNSIGNED_INT||ne.gpuType===vc;if(ne.isInterleavedBufferAttribute){let N=ne.data,$=N.stride,re=ne.offset;if(N.isInstancedInterleavedBuffer){for(let oe=0;oe<Z.locationSize;oe++)p(Z.location+oe,N.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let oe=0;oe<Z.locationSize;oe++)m(Z.location+oe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let oe=0;oe<Z.locationSize;oe++)R(Z.location+oe,Pe/Z.locationSize,ee,he,$*se,(re+Pe/Z.locationSize*oe)*se,D)}else{if(ne.isInstancedBufferAttribute){for(let N=0;N<Z.locationSize;N++)p(Z.location+N,ne.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let N=0;N<Z.locationSize;N++)m(Z.location+N);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let N=0;N<Z.locationSize;N++)R(Z.location+N,Pe/Z.locationSize,ee,he,Pe*se,Pe/Z.locationSize*N*se,D)}}else if(K!==void 0){let he=K[pe];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Z.location,he);break;case 3:i.vertexAttrib3fv(Z.location,he);break;case 4:i.vertexAttrib4fv(Z.location,he);break;default:i.vertexAttrib1fv(Z.location,he)}}}}v()}function E(){T();for(let L in n){let O=n[L];for(let k in O){let U=O[k];for(let W in U){let q=U[W];for(let K in q)h(q[K].object),delete q[K];delete U[W]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let k in O){let U=O[k];for(let W in U){let q=U[W];for(let K in q)h(q[K].object),delete q[K];delete U[W]}}delete n[L.id]}function P(L){for(let O in n){let k=n[O];for(let U in k){let W=k[U];if(W[L.id]===void 0)continue;let q=W[L.id];for(let K in q)h(q[K].object),delete q[K];delete W[L.id]}}}function M(L){for(let O in n){let k=n[O],U=L.isInstancedMesh===!0?L.id:0,W=k[U];if(W!==void 0){for(let q in W){let K=W[q];for(let pe in K)h(K[pe].object),delete K[pe];delete W[q]}delete k[U],Object.keys(k).length===0&&delete n[O]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function B_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let M=P===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&P!==Si&&!M&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:R,maxFragmentUniforms:b,maxSamples:E,samples:A}}function z_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xi,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,R=v*4,b=p.clippingState||null;l.value=b,b=h(g,d,R,f);for(let E=0;E!==R;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,b=f;R!==_;++R,b+=4)a.copy(u[R]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var la=4,H_=6,G_=20,V_=256,Ro=new Ls,hp=new je,Ku=null,ju=0,Qu=0,ed=!1,W_=new B,fr=new B,Bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=W_}=r;Ku=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,ju,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Qt,format:Nn,colorSpace:Ha,depthBuffer:!1},s=up(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=X_(r)),this._blurMaterial=Y_(r,e,t),this._ggxMaterial=q_(r,e,t)}return s}_compileMaterial(e){let t=new rt(new Ft,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,s,r){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hp),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new vt,new nn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(hp),p=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let E=this._cubeSize;oa(s,b*E,R>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ns||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-la?n-g+la:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,oa(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ro),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,oa(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Ro)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-la?s-this._lodMax+la:0),d=4*(this._cubeSize-h);oa(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Ro)}};function X_(i){let e=[],t=[],n=i,s=i-la+1+H_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,R=p>2?0:-1,b=[v,R,0,v+2/3,R,0,v+2/3,R+1,0,v,R,0,v+2/3,R+1,0,v,R+1,0];g.set(b,f*d*p);for(let E=0;E<d;E++){let A=h[E*2]*2-1,P=h[E*2+1]*2-1;p===0?fr.set(1,P,A):p===1?fr.set(-A,1,-P):p===2?fr.set(-A,P,1):p===3?fr.set(-1,P,-A):p===4?fr.set(-A,-1,P):fr.set(A,P,-1),fr.toArray(_,(p*d+E)*f)}}let m=new Ft;m.setAttribute("position",new Ln(g,f)),m.setAttribute("outputDirection",new Ln(_,f)),t.push(new rt(m,null)),n>la&&n--}return{lodMeshes:t,sizeLods:e}}function up(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function q_(i,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Y_(i,e,t){return new $t({name:"SphericalGaussianBlur",defines:{SAMPLES:G_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function dp(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function fp(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rh=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $a(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vt(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Kt});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===Us&&(t.minFilter=fn),new dc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function $_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===gc||f===xc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new rh(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===gc||f===xc,_=f===Ns||f===ur;if(g||_){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Bs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Bs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===gc?d.mapping=Ns:f===xc&&(d.mapping=ur),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Z_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ir("WebGLRenderer: "+n+" extension not supported."),s}}}function J_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let v=f.array;_=f.version;for(let R=0,b=v.length;R<b;R+=3){let E=v[R+0],A=v[R+1],P=v[R+2];d.push(E,A,A,P,P,E)}}else{let v=g.array;_=g.version;for(let R=0,b=v.length/3-1;R<b;R+=3){let E=R+0,A=R+1,P=R+2;d.push(E,A,A,P,P,E)}}let m=new(g.count>=65535?qa:Xa)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function K_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function j_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Q_(i,e,t){let n=new WeakMap,s=new Ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let b=o.attributes.position.count*R,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*E*4*u),P=new Wa(A,b,E,u);P.type=Si,P.needsUpdate=!0;let M=R*4;for(let I=0;I<u;I++){let L=m[I],O=p[I],k=v[I],U=b*E*4*I;for(let W=0;W<L.count;W++){let q=W*M;f===!0&&(s.fromBufferAttribute(L,W),A[U+q+0]=s.x,A[U+q+1]=s.y,A[U+q+2]=s.z,A[U+q+3]=0),g===!0&&(s.fromBufferAttribute(O,W),A[U+q+4]=s.x,A[U+q+5]=s.y,A[U+q+6]=s.z,A[U+q+7]=0),_===!0&&(s.fromBufferAttribute(k,W),A[U+q+8]=s.x,A[U+q+9]=s.y,A[U+q+10]=s.z,A[U+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Ee(b,E)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ev(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var tv={[fo]:"LINEAR_TONE_MAPPING",[po]:"REINHARD_TONE_MAPPING",[mo]:"CINEON_TONE_MAPPING",[os]:"ACES_FILMIC_TONE_MAPPING",[xo]:"AGX_TONE_MAPPING",[_o]:"NEUTRAL_TONE_MAPPING",[go]:"CUSTOM_TONE_MAPPING"};function nv(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ft;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));let h=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new rt(c,h),d=new Ls(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,v=[],R=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let A=0;A<v.length;A++){let P=v[A];P.setSize&&P.setSize(b,E)}},this.setEffects=function(b){v=b,R=v.length>0&&v[0].isRenderPass===!0;let E=a.width,A=a.height;v.length>0&&o===null&&(o=new Wt(E,A,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(E,A,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<v.length;P++){let M=v[P];M.setSize&&M.setSize(E,A)}},this.begin=function(b,E){if(_||b.toneMapping===bi&&v.length===0)return!1;if(p=E,E!==null){let A=E.width,P=E.height;(a.width!==A||a.height!==P)&&this.setSize(A,P)}return R===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=bi,!0},this.hasRenderPass=function(){return R},this.end=function(b,E){b.toneMapping=m,_=!0;let A=a,P=o;for(let M=0;M<v.length;M++){let T=v[M];T.enabled!==!1&&(T.render(b,P,A,E),T.needsSwap!==!1&&(A=P,P=P===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},wt.getTransfer(f)===Nt&&(h.defines.SRGB_TRANSFER="");let M=tv[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(p),b.render(u,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Dp=new Rn,id=new Fi(1,1),Np=new Wa,Up=new Wl,Fp=new $a,pp=[],mp=[],gp=new Float32Array(16),xp=new Float32Array(9),_p=new Float32Array(4);function ua(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pp[s];if(r===void 0&&(r=new Float32Array(s),pp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oh(i,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;_p.set(n),i.uniformMatrix2fv(this.addr,!1,_p),an(t,n)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;xp.set(n),i.uniformMatrix3fv(this.addr,!1,xp),an(t,n)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;gp.set(n),i.uniformMatrix4fv(this.addr,!1,gp),an(t,n)}}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(id.compareFunction=t.isReversedDepthBuffer()?nh:th,r=id):r=Dp,t.setTexture2D(e||r,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Up,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fp,s)}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Np,s)}function Mv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return bv}}function Sv(i,e){i.uniform1fv(this.addr,e)}function wv(i,e){let t=ua(e,this.size,2);i.uniform2fv(this.addr,t)}function Ev(i,e){let t=ua(e,this.size,3);i.uniform3fv(this.addr,t)}function Tv(i,e){let t=ua(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){let t=ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rv(i,e){let t=ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cv(i,e){let t=ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function Iv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Dv(i,e){i.uniform4iv(this.addr,e)}function Nv(i,e){i.uniform1uiv(this.addr,e)}function Uv(i,e){i.uniform2uiv(this.addr,e)}function Fv(i,e){i.uniform3uiv(this.addr,e)}function Ov(i,e){i.uniform4uiv(this.addr,e)}function Bv(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=id:a=Dp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function kv(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Up,r[a])}function zv(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fp,r[a])}function Hv(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Np,r[a])}function Gv(i){switch(i){case 5126:return Sv;case 35664:return wv;case 35665:return Ev;case 35666:return Tv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}var sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}},rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}},ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},td=/(\w+)(\])?(\[|\.)?/g;function vp(i,e){i.seq.push(e),i.map[e.id]=e}function Vv(i,e,t){let n=i.name,s=n.length;for(td.lastIndex=0;;){let r=td.exec(n),a=td.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vp(t,c===void 0?new sd(o,i,e):new rd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ad(o),vp(t,u)),t=u}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function yp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Wv=37297,Xv=0;function qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bp=new dt;function Yv(i){wt._getMatrix(bp,wt.workingColorSpace,i);let e=`mat3( ${bp.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Ga:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qv(i.getShaderSource(e),o)}else return r}function $v(i,e){let t=Yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Zv={[fo]:"Linear",[po]:"Reinhard",[mo]:"Cineon",[os]:"ACESFilmic",[xo]:"AgX",[_o]:"Neutral",[go]:"Custom"};function Jv(i,e){let t=Zv[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sh=new B;function Kv(){wt.getLuminanceCoefficients(sh);let i=sh.x.toFixed(4),e=sh.y.toFixed(4),t=sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Qv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ey(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Po(i){return i!==""}function Sp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(i){return i.replace(ty,iy)}var ny=new Map;function iy(i,e){let t=bt[e];if(t===void 0){let n=ny.get(e);if(n!==void 0)t=bt[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return od(t)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(i){return i.replace(sy,ry)}function ry(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tp(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ay={[as]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function oy(i){return ay[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ly={[Ns]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ly[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var hy={[ur]:"ENVMAP_MODE_REFRACTION"};function uy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dy={[Pu]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function fy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dy[i.combine]||"ENVMAP_BLENDING_NONE"}function py(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function my(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=oy(t),c=cy(t),h=uy(t),u=fy(t),d=py(t),f=jv(t),g=Qv(r),_=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),p.length>0&&(p+=`
`)):(m=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),p=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?bt.tonemapping_pars_fragment:"",t.toneMapping!==bi?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,$v("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),a=od(a),a=Sp(a,t),a=wp(a,t),o=od(o),o=Sp(o,t),o=wp(o,t),a=Ep(a),o=Ep(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=v+m+a,b=v+p+o,E=yp(s,s.VERTEX_SHADER,R),A=yp(s,s.FRAGMENT_SHADER,b);s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(A)||"",W=O.trim(),q=k.trim(),K=U.trim(),pe=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,A);else{let ne=Mp(s,E,"vertex"),he=Mp(s,A,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ne+`
`+he)}else W!==""?it("WebGLProgram: Program Info Log:",W):(q===""||K==="")&&(Z=!1);Z&&(L.diagnostics={runnable:pe,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(A),M=new ca(s,_),T=ey(s,_)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Wv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}var gy=0,ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cd(e),t.set(e,n)),n}},cd=class{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}};function xy(i){return i===Os||i===Eo||i===To}function _y(i,e,t,n,s,r){let a=new Zr,o=new ld,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function _(M,T,I,L,O,k){let U=L.fog,W=O.geometry,q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,pe=e.get(M.envMap||q,K),Z=pe&&pe.mapping===vo?pe.image.height:null,ne=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&it("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pe=he!==void 0?he.length:0,ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let qe,ee,se,D;if(ne){let Dt=Hi[ne];qe=Dt.vertexShader,ee=Dt.fragmentShader}else{qe=M.vertexShader,ee=M.fragmentShader;let Dt=o.getVertexShaderStage(M),Tt=o.getFragmentShaderStage(M);o.update(M,Dt,Tt),se=Dt.id,D=Tt.id}let N=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),re=O.isInstancedMesh===!0,oe=O.isBatchedMesh===!0,Se=!!M.map,Ae=!!M.matcap,z=!!pe,ae=!!M.aoMap,Q=!!M.lightMap,te=!!M.bumpMap&&M.wireframe===!1,de=!!M.normalMap,ge=!!M.displacementMap,Te=!!M.emissiveMap,Ie=!!M.metalnessMap,Ye=!!M.roughnessMap,F=M.anisotropy>0,ht=M.clearcoat>0,ot=M.dispersion>0,C=M.retroreflectivity>0,y=M.iridescence>0,X=M.sheen>0,J=M.transmission>0,le=F&&!!M.anisotropyMap,we=ht&&!!M.clearcoatMap,Le=ht&&!!M.clearcoatNormalMap,ce=ht&&!!M.clearcoatRoughnessMap,fe=y&&!!M.iridescenceMap,Be=y&&!!M.iridescenceThicknessMap,Ze=X&&!!M.sheenColorMap,Ue=X&&!!M.sheenRoughnessMap,De=!!M.specularMap,Xe=!!M.specularColorMap,Qe=!!M.specularIntensityMap,Ke=J&&!!M.transmissionMap,G=J&&!!M.thicknessMap,Oe=!!M.gradientMap,me=!!M.alphaMap,Me=M.alphaTest>0,Ge=!!M.alphaHash,ye=!!M.extensions,ze=bi;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ze=i.toneMapping);let Je={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:ee,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:D,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:oe,batchingColor:oe&&O._colorsTexture!==null,instancing:re,instancingColor:re&&O.instanceColor!==null,instancingMorph:re&&O.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Se,matcap:Ae,envMap:z,envMapMode:z&&pe.mapping,envMapCubeUVHeight:Z,aoMap:ae,lightMap:Q,bumpMap:te,normalMap:de,displacementMap:ge,emissiveMap:Te,normalMapObjectSpace:de&&M.normalMapType===Wf,normalMapTangentSpace:de&&M.normalMapType===Ao,packedNormalMap:de&&M.normalMapType===Ao&&xy(M.normalMap.format),metalnessMap:Ie,roughnessMap:Ye,anisotropy:F,anisotropyMap:le,clearcoat:ht,clearcoatMap:we,clearcoatNormalMap:Le,clearcoatRoughnessMap:ce,dispersion:ot,retroreflection:C,iridescence:y,iridescenceMap:fe,iridescenceThicknessMap:Be,sheen:X,sheenColorMap:Ze,sheenRoughnessMap:Ue,specularMap:De,specularColorMap:Xe,specularIntensityMap:Qe,transmission:J,transmissionMap:Ke,thicknessMap:G,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===sa&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:Me,alphaHash:Ge,combine:M.combine,mapUv:Se&&g(M.map.channel),aoMapUv:ae&&g(M.aoMap.channel),lightMapUv:Q&&g(M.lightMap.channel),bumpMapUv:te&&g(M.bumpMap.channel),normalMapUv:de&&g(M.normalMap.channel),displacementMapUv:ge&&g(M.displacementMap.channel),emissiveMapUv:Te&&g(M.emissiveMap.channel),metalnessMapUv:Ie&&g(M.metalnessMap.channel),roughnessMapUv:Ye&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:we&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(M.sheenRoughnessMap.channel),specularMapUv:De&&g(M.specularMap.channel),specularColorMapUv:Xe&&g(M.specularColorMap.channel),specularIntensityMapUv:Qe&&g(M.specularIntensityMap.channel),transmissionMapUv:Ke&&g(M.transmissionMap.channel),thicknessMapUv:G&&g(M.thicknessMap.channel),alphaMapUv:me&&g(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(de||F),vertexNormals:!!W.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Se||me),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||W.attributes.normal===void 0&&de===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:$,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ve,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&wt.getTransfer(M.map.colorSpace)===Nt,decodeVideoTextureEmissive:Te&&M.emissiveMap.isVideoTexture===!0&&wt.getTransfer(M.emissiveMap.colorSpace)===Nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)T.push(I),T.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(p(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function p(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function R(M){let T=f[M.type],I;if(T){let L=Hi[T];I=ai.clone(L.uniforms)}else I=M.uniforms;return I}function b(M,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new my(i,T,M,s),c.push(I),h.set(T,I)),I}function E(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function A(M){o.remove(M)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:P}}function vy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function l(d,f,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);let R=o(d,f,g,_,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(d,f,g,_,m,p){let v=o(d,f,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||yy),n.length>1&&n.sort(f||Ap),s.length>1&&s.sort(f||Ap)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function by(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Rp,i.set(n,[a])):s>=r.length?(a=new Rp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function My(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new je};break;case"SpotLight":t={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Sy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wy=0;function Ey(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ty(i){let e=new My,t=Sy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Lt,a=new Lt;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,R=0,b=0,E=0,A=0,P=0,M=0,T=0,I=0;c.sort(Ey);for(let O=0,k=c.length;O<k;O++){let U=c[O],W=U.color,q=U.intensity,K=U.distance,pe=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Os?pe=U.shadow.map.texture:pe=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=W.r*q,u+=W.g*q,d+=W.b*q;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],q);I++}else if(U.isSunLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,he=t.get(U);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[g]=he,n.sunShadowMap[g]=pe;let Pe=ne.getViewportCount();for(let ve=0;ve<Pe;ve++)n.sunShadowMatrix[_+ve]=ne.getMatrix(ve),n.sunShadowCascade[_+ve]=ne._cascadeData[ve];_+=Pe,g++}n.sun[f]=Z,f++}else if(U.isDirectionalLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,he=t.get(U);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,n.directionalShadow[m]=he,n.directionalShadowMap[m]=pe,n.directionalShadowMatrix[m]=U.shadow.matrix,E++}n.directional[m]=Z,m++}else if(U.isSpotLight){let Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(W).multiplyScalar(q),Z.distance=K,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[v]=Z;let ne=U.shadow;if(U.map&&(n.spotLightMap[M]=U.map,M++,ne.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[v]=ne.matrix,U.castShadow){let he=t.get(U);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,n.spotShadow[v]=he,n.spotShadowMap[v]=pe,P++}v++}else if(U.isRectAreaLight){let Z=e.get(U);Z.color.copy(W).multiplyScalar(q),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[R]=Z,R++}else if(U.isPointLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){let ne=U.shadow,he=t.get(U);he.shadowIntensity=ne.intensity,he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,he.shadowCameraNear=ne.camera.near,he.shadowCameraFar=ne.camera.far,n.pointShadow[p]=he,n.pointShadowMap[p]=pe,n.pointShadowMatrix[p]=U.shadow.matrix,A++}n.point[p]=Z,p++}else if(U.isHemisphereLight){let Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(q),Z.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[b]=Z,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==R||L.hemiLength!==b||L.numSunShadows!==g||L.numDirectionalShadows!==E||L.numPointShadows!==A||L.numSpotShadows!==P||L.numSpotMaps!==M||L.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=R,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=R,L.hemiLength=b,L.numSunShadows=g,L.numDirectionalShadows=E,L.numPointShadows=A,L.numSpotShadows=P,L.numSpotMaps=M,L.numLightProbes=I,n.version=wy++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let v=0,R=c.length;v<R;v++){let b=c[v];if(b.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(b.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Cp(i){let e=new Ty(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ay(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cp(i),e.set(s,[o])):r>=a.length?(o=new Cp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`,Py=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Iy=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Pp=new Lt,Co=new B,nd=new B;function Ly(i,e,t){let n=new jr,s=new Ee,r=new Ee,a=new Ht,o=new Ql,l=new ec,c={},h=t.maxTextureSize,u={[Ds]:sn,[sn]:Ds,[Jt]:Jt},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let p=this.type;this.render=function(A,P,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Ef&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Kt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=p!==this.type;k&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(W=>W.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,W=A.length;U<W;U++){let q=A[U],K=q.shadow;if(K===void 0){it("WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let pe=K.getFrameExtents();s.multiply(pe),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,K.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||k===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ia){if(q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Wt(s.x,s.y,{format:Os,type:Qt,minFilter:fn,magFilter:fn,generateMipmaps:!1}),K.map.texture.name=q.name+".shadowMap",K.map.depthTexture=new Fi(s.x,s.y,Si),K.map.depthTexture.name=q.name+".shadowMapDepth",K.map.depthTexture.format=Li,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Zt,K.map.depthTexture.magFilter=Zt}else q.isPointLight?(K.map=new rh(s.x),K.map.depthTexture=new Yl(s.x,Mi)):(K.map=new Wt(s.x,s.y),K.map.depthTexture=new Fi(s.x,s.y,Mi)),K.map.depthTexture.name=q.name+".shadowMap",K.map.depthTexture.format=Li,this.type===as?(K.map.depthTexture.compareFunction=Z?nh:th,K.map.depthTexture.minFilter=fn,K.map.depthTexture.magFilter=fn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Zt,K.map.depthTexture.magFilter=Zt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ne=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();q.isPointLight!==!0&&K.updateMatrices(q,M);for(let he=0;he<ne;he++){let Pe=K.getCamera(he);if(q.isPointLight){let ve=K.camera,qe=K.matrix,ee=q.distance||ve.far;ee!==ve.far&&(ve.far=ee,ve.updateProjectionMatrix()),Co.setFromMatrixPosition(q.matrixWorld),ve.position.copy(Co),nd.copy(ve.position),nd.add(Py[he]),ve.up.copy(Iy[he]),ve.lookAt(nd),ve.updateMatrixWorld(),qe.makeTranslation(-Co.x,-Co.y,-Co.z),Pp.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Pp,ve.coordinateSystem,ve.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,he),i.clear();else{he===0&&(i.setRenderTarget(K.map),i.clear());let ve=K.getViewport(he);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),O.viewport(a)}n=K.getFrustum(he),b(P,M,Pe,q,this.type)}K.isPointLightShadow!==!0&&this.type===ia&&v(K,M),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,I,L)};function v(A,P){let M=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Wt(s.x,s.y,{format:Os,type:Qt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,M,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,M,f,_,null)}function R(A,P,M,T){let I=null,L=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)I=L;else if(I=M.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=I.uuid,k=P.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let W=U[k];W===void 0&&(W=I.clone(),U[k]=W,P.addEventListener("dispose",E)),I=W}if(I.visible=P.visible,I.wireframe=P.wireframe,T===ia?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:u[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=M}return I}function b(A,P,M,T,I){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===ia)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let k=e.update(A),U=A.material;if(Array.isArray(U)){let W=k.groups;for(let q=0,K=W.length;q<K;q++){let pe=W[q],Z=U[pe.materialIndex];if(Z&&Z.visible){let ne=R(A,Z,T,I);A.onBeforeShadow(i,A,P,M,k,ne,pe),i.renderBufferDirect(M,null,k,ne,A,pe),A.onAfterShadow(i,A,P,M,k,ne,pe)}}}else if(U.visible){let W=R(A,U,T,I);A.onBeforeShadow(i,A,P,M,k,W,null),i.renderBufferDirect(M,null,k,W,A,null),A.onAfterShadow(i,A,P,M,k,W,null)}}let O=A.children;for(let k=0,U=O.length;k<U;k++)b(O[k],P,M,T,I)}function E(A){A.target.removeEventListener("dispose",E);for(let M in c){let T=c[M],I=A.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function Dy(i,e){function t(){let G=!1,Oe=new Ht,me=null,Me=new Ht(0,0,0,0);return{setMask:function(Ge){me!==Ge&&!G&&(i.colorMask(Ge,Ge,Ge,Ge),me=Ge)},setLocked:function(Ge){G=Ge},setClear:function(Ge,ye,ze,Je,Dt){Dt===!0&&(Ge*=Je,ye*=Je,ze*=Je),Oe.set(Ge,ye,ze,Je),Me.equals(Oe)===!1&&(i.clearColor(Ge,ye,ze,Je),Me.copy(Oe))},reset:function(){G=!1,me=null,Me.set(-1,0,0,0)}}}function n(){let G=!1,Oe=!1,me=null,Me=null,Ge=null;return{setReversed:function(ye){if(Oe!==ye){let ze=e.get("EXT_clip_control");ye?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Oe=ye;let Je=Ge;Ge=null,this.setClear(Je)}},getReversed:function(){return Oe},setTest:function(ye){ye?N(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ye){me!==ye&&!G&&(i.depthMask(ye),me=ye)},setFunc:function(ye){if(Oe&&(ye=np[ye]),Me!==ye){switch(ye){case Ll:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Nl:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case Ul:i.depthFunc(i.EQUAL);break;case Fl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case Bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ye}},setLocked:function(ye){G=ye},setClear:function(ye){Ge!==ye&&(Ge=ye,Oe&&(ye=1-ye),i.clearDepth(ye))},reset:function(){G=!1,me=null,Me=null,Ge=null,Oe=!1}}}function s(){let G=!1,Oe=null,me=null,Me=null,Ge=null,ye=null,ze=null,Je=null,Dt=null;return{setTest:function(Tt){G||(Tt?N(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(Tt){Oe!==Tt&&!G&&(i.stencilMask(Tt),Oe=Tt)},setFunc:function(Tt,dn,on){(me!==Tt||Me!==dn||Ge!==on)&&(i.stencilFunc(Tt,dn,on),me=Tt,Me=dn,Ge=on)},setOp:function(Tt,dn,on){(ye!==Tt||ze!==dn||Je!==on)&&(i.stencilOp(Tt,dn,on),ye=Tt,ze=dn,Je=on)},setLocked:function(Tt){G=Tt},setClear:function(Tt){Dt!==Tt&&(i.clearStencil(Tt),Dt=Tt)},reset:function(){G=!1,Oe=null,me=null,Me=null,Ge=null,ye=null,ze=null,Je=null,Dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,R=null,b=null,E=null,A=null,P=null,M=new je(0,0,0),T=0,I=!1,L=null,O=null,k=null,U=null,W=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,pe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=pe>=1):Z.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=pe>=2);let ne=null,he={},Pe=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),qe=new Ht().fromArray(Pe),ee=new Ht().fromArray(ve);function se(G,Oe,me,Me){let Ge=new Uint8Array(4),ye=i.createTexture();i.bindTexture(G,ye),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<me;ze++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Oe+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return ye}let D={};D[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),D[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),D[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(i.DEPTH_TEST),a.setFunc(Xr),te(!1),de(wu),N(i.CULL_FACE),ae(Kt);function N(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function $(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function re(G,Oe){return d[G]!==Oe?(i.bindFramebuffer(G,Oe),d[G]=Oe,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Oe),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function oe(G,Oe){let me=g,Me=!1;if(G){me=f.get(Oe),me===void 0&&(me=[],f.set(Oe,me));let Ge=G.textures;if(me.length!==Ge.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,ze=Ge.length;ye<ze;ye++)me[ye]=i.COLOR_ATTACHMENT0+ye;me.length=Ge.length,Me=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Me=!0);Me&&i.drawBuffers(me)}function Se(G){return _!==G?(i.useProgram(G),_=G,!0):!1}let Ae={[ri]:i.FUNC_ADD,[Tf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};Ae[Rf]=i.MIN,Ae[Cf]=i.MAX;let z={[hr]:i.ZERO,[Pf]:i.ONE,[If]:i.SRC_COLOR,[Ru]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[uo]:i.DST_COLOR,[ho]:i.DST_ALPHA,[Lf]:i.ONE_MINUS_SRC_COLOR,[Cu]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[kf]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(G,Oe,me,Me,Ge,ye,ze,Je,Dt,Tt){if(G===Kt){m===!0&&($(i.BLEND),m=!1);return}if(m===!1&&(N(i.BLEND),m=!0),G!==mc){if(G!==p||Tt!==I){if((v!==ri||E!==ri)&&(i.blendEquation(i.FUNC_ADD),v=ri,E=ri),Tt)switch(G){case sa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",G);break}else switch(G){case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tu:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",G);break}R=null,b=null,A=null,P=null,M.set(0,0,0),T=0,p=G,I=Tt}return}Ge=Ge||Oe,ye=ye||me,ze=ze||Me,(Oe!==v||Ge!==E)&&(i.blendEquationSeparate(Ae[Oe],Ae[Ge]),v=Oe,E=Ge),(me!==R||Me!==b||ye!==A||ze!==P)&&(i.blendFuncSeparate(z[me],z[Me],z[ye],z[ze]),R=me,b=Me,A=ye,P=ze),(Je.equals(M)===!1||Dt!==T)&&(i.blendColor(Je.r,Je.g,Je.b,Dt),M.copy(Je),T=Dt),p=G,I=!1}function Q(G,Oe){G.side===Jt?$(i.CULL_FACE):N(i.CULL_FACE);let me=G.side===sn;Oe&&(me=!me),te(me),G.blending===sa&&G.transparent===!1?ae(Kt):ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Me=G.stencilWrite;o.setTest(Me),Me&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Te(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(G){L!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),L=G)}function de(G){G!==Sf?(N(i.CULL_FACE),G!==O&&(G===wu?i.cullFace(i.BACK):G===wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),O=G}function ge(G){G!==k&&(K&&i.lineWidth(G),k=G)}function Te(G,Oe,me){G?(N(i.POLYGON_OFFSET_FILL),(U!==Oe||W!==me)&&(U=Oe,W=me,a.getReversed()&&(Oe=-Oe),i.polygonOffset(Oe,me))):$(i.POLYGON_OFFSET_FILL)}function Ie(G){G?N(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function Ye(G){G===void 0&&(G=i.TEXTURE0+q-1),ne!==G&&(i.activeTexture(G),ne=G)}function F(G,Oe,me){me===void 0&&(ne===null?me=i.TEXTURE0+q-1:me=ne);let Me=he[me];Me===void 0&&(Me={type:void 0,texture:void 0},he[me]=Me),(Me.type!==G||Me.texture!==Oe)&&(ne!==me&&(i.activeTexture(me),ne=me),i.bindTexture(G,Oe||D[G]),Me.type=G,Me.texture=Oe)}function ht(){let G=he[ne];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(G){st("WebGLState:",G)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(G){st("WebGLState:",G)}}function y(){try{i.texSubImage2D(...arguments)}catch(G){st("WebGLState:",G)}}function X(){try{i.texSubImage3D(...arguments)}catch(G){st("WebGLState:",G)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(G){st("WebGLState:",G)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(G){st("WebGLState:",G)}}function we(){try{i.texStorage2D(...arguments)}catch(G){st("WebGLState:",G)}}function Le(){try{i.texStorage3D(...arguments)}catch(G){st("WebGLState:",G)}}function ce(){try{i.texImage2D(...arguments)}catch(G){st("WebGLState:",G)}}function fe(){try{i.texImage3D(...arguments)}catch(G){st("WebGLState:",G)}}function Be(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function Ze(G,Oe){u[G]!==Oe&&(i.pixelStorei(G,Oe),u[G]=Oe)}function Ue(G){qe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),qe.copy(G))}function De(G){ee.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function Xe(G,Oe){let me=c.get(Oe);me===void 0&&(me=new WeakMap,c.set(Oe,me));let Me=me.get(G);Me===void 0&&(Me=i.getUniformBlockIndex(Oe,G.name),me.set(G,Me))}function Qe(G,Oe){let Me=c.get(Oe).get(G);l.get(Oe)!==Me&&(i.uniformBlockBinding(Oe,Me,G.__bindingPointIndex),l.set(Oe,Me))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,he={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,R=null,b=null,E=null,A=null,P=null,M=new je(0,0,0),T=0,I=!1,L=null,O=null,k=null,U=null,W=null,qe.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:$,bindFramebuffer:re,drawBuffers:oe,useProgram:Se,setBlending:ae,setMaterial:Q,setFlipSided:te,setCullFace:de,setLineWidth:ge,setPolygonOffset:Te,setScissorTest:Ie,activeTexture:Ye,bindTexture:F,unbindTexture:ht,compressedTexImage2D:ot,compressedTexImage3D:C,texImage2D:ce,texImage3D:fe,pixelStorei:Ze,getParameter:Be,updateUBOMapping:Xe,uniformBlockBinding:Qe,texStorage2D:we,texStorage3D:Le,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:le,scissor:Ue,viewport:De,reset:Ke}}function Ny(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return g?new OffscreenCanvas(C,y):Va("canvas")}function m(C,y,X){let J=1,le=ot(C);if((le.width>X||le.height>X)&&(J=X/Math.max(le.width,le.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let we=Math.floor(J*le.width),Le=Math.floor(J*le.height);d===void 0&&(d=_(we,Le));let ce=y?_(we,Le):d;return ce.width=we,ce.height=Le,ce.getContext("2d").drawImage(C,0,0,we,Le),it("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+we+"x"+Le+")."),ce}else return"data"in C&&it("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,y,X,J,le,we=!1){if(C!==null){if(i[C]!==void 0)return i[C];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Le;J&&(Le=e.get("EXT_texture_norm16"),Le||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=y;if(y===i.RED&&(X===i.FLOAT&&(ce=i.R32F),X===i.HALF_FLOAT&&(ce=i.R16F),X===i.UNSIGNED_BYTE&&(ce=i.R8),X===i.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),X===i.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.R8UI),X===i.UNSIGNED_SHORT&&(ce=i.R16UI),X===i.UNSIGNED_INT&&(ce=i.R32UI),X===i.BYTE&&(ce=i.R8I),X===i.SHORT&&(ce=i.R16I),X===i.INT&&(ce=i.R32I)),y===i.RG&&(X===i.FLOAT&&(ce=i.RG32F),X===i.HALF_FLOAT&&(ce=i.RG16F),X===i.UNSIGNED_BYTE&&(ce=i.RG8),X===i.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),X===i.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RG8UI),X===i.UNSIGNED_SHORT&&(ce=i.RG16UI),X===i.UNSIGNED_INT&&(ce=i.RG32UI),X===i.BYTE&&(ce=i.RG8I),X===i.SHORT&&(ce=i.RG16I),X===i.INT&&(ce=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),X===i.UNSIGNED_INT&&(ce=i.RGB32UI),X===i.BYTE&&(ce=i.RGB8I),X===i.SHORT&&(ce=i.RGB16I),X===i.INT&&(ce=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),X===i.UNSIGNED_INT&&(ce=i.RGBA32UI),X===i.BYTE&&(ce=i.RGBA8I),X===i.SHORT&&(ce=i.RGBA16I),X===i.INT&&(ce=i.RGBA32I)),y===i.RGB&&(X===i.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),X===i.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),y===i.RGBA){let fe=we?Ga:wt.getTransfer(le);X===i.FLOAT&&(ce=i.RGBA32F),X===i.HALF_FLOAT&&(ce=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ce=fe===Nt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),X===i.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function E(C,y){let X;return C?y===null||y===Mi||y===Fs?X=i.DEPTH24_STENCIL8:y===Si?X=i.DEPTH32F_STENCIL8:y===ra&&(X=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===Fs?X=i.DEPTH_COMPONENT24:y===Si?X=i.DEPTH_COMPONENT32F:y===ra&&(X=i.DEPTH_COMPONENT16),X}function A(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){let y=C.target;y.removeEventListener("dispose",P),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function M(C){let y=C.target;y.removeEventListener("dispose",M),L(y)}function T(C){let y=n.get(C);if(y.__webglInit===void 0)return;let X=C.source,J=f.get(X);if(J){let le=J[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&I(C),Object.keys(J).length===0&&f.delete(X)}n.remove(C)}function I(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let X=C.source,J=f.get(X);delete J[y.__cacheKey],a.memory.textures--}function L(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let le=0;le<y.__webglFramebuffer[J].length;le++)i.deleteFramebuffer(y.__webglFramebuffer[J][le]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=C.textures;for(let J=0,le=X.length;J<le;J++){let we=n.get(X[J]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(C)}let O=0;function k(){O=0}function U(){return O}function W(C){O=C}function q(){let C=O;return C>=s.maxTextures&&it("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function K(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function pe(C,y){let X=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let J=C.image;if(J===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,C,y);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function Z(C,y){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){$(X,C,y);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function ne(C,y){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){$(X,C,y);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function he(C,y){let X=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){re(X,C,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let Pe={[wn]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[kl]:i.MIRRORED_REPEAT},ve={[Zt]:i.NEAREST,[Gf]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[_c]:i.LINEAR_MIPMAP_NEAREST,[Us]:i.LINEAR_MIPMAP_LINEAR},qe={[qf]:i.NEVER,[Kf]:i.ALWAYS,[Yf]:i.LESS,[th]:i.LEQUAL,[$f]:i.EQUAL,[nh]:i.GEQUAL,[Zf]:i.GREATER,[Jf]:i.NOTEQUAL};function ee(C,y){if(y.type===Si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===_c||y.magFilter===yo||y.magFilter===Us||y.minFilter===fn||y.minFilter===_c||y.minFilter===yo||y.minFilter===Us)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Pe[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Pe[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Pe[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ve[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ve[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==yo&&y.minFilter!==Us||y.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function se(C,y){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));let J=y.source,le=f.get(J);le===void 0&&(le={},f.set(J,le));let we=K(y);if(we!==C.__cacheKey){le[we]===void 0&&(le[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[we].usedTimes++;let Le=le[C.__cacheKey];Le!==void 0&&(le[C.__cacheKey].usedTimes--,Le.usedTimes===0&&I(y)),C.__cacheKey=we,C.__webglTexture=le[we].texture}return X}function D(C,y,X){return Math.floor(Math.floor(C/X)/y)}function N(C,y,X,J){let we=C.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,X,J,y.data);else{we.sort((Ze,Ue)=>Ze.start-Ue.start);let Le=0;for(let Ze=1;Ze<we.length;Ze++){let Ue=we[Le],De=we[Ze],Xe=Ue.start+Ue.count,Qe=D(De.start,y.width,4),Ke=D(Ue.start,y.width,4);De.start<=Xe+1&&Qe===Ke&&D(De.start+De.count-1,y.width,4)===Qe?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Le,we[Le]=De)}we.length=Le+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ze=0,Ue=we.length;Ze<Ue;Ze++){let De=we[Ze],Xe=Math.floor(De.start/4),Qe=Math.ceil(De.count/4),Ke=Xe%y.width,G=Math.floor(Xe/y.width),Oe=Qe,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Ke,G,Oe,me,X,J,y.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function $(C,y,X){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let le=se(C,y),we=y.source;t.bindTexture(J,C.__webglTexture,i.TEXTURE0+X);let Le=n.get(we);if(we.version!==Le.__version||le===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let me=wt.getPrimaries(wt.workingColorSpace),Me=y.colorSpace===ls?null:wt.getPrimaries(y.colorSpace),Ge=y.colorSpace===ls||me===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let fe=m(y.image,!1,s.maxTextureSize);fe=ht(y,fe);let Be=r.convert(y.format,y.colorSpace),Ze=r.convert(y.type),Ue=b(y.internalFormat,Be,Ze,y.normalized,y.colorSpace,y.isVideoTexture);ee(J,y);let De,Xe=y.mipmaps,Qe=y.isVideoTexture!==!0,Ke=Le.__version===void 0||le===!0,G=we.dataReady,Oe=A(y,fe);if(y.isDepthTexture)Ue=E(y.format===ki,y.type),Ke&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ue,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Be,Ze,null));else if(y.isDataTexture)if(Xe.length>0){Qe&&Ke&&t.texStorage2D(i.TEXTURE_2D,Oe,Ue,Xe[0].width,Xe[0].height);for(let me=0,Me=Xe.length;me<Me;me++)De=Xe[me],Qe?G&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,De.width,De.height,Be,Ze,De.data):t.texImage2D(i.TEXTURE_2D,me,Ue,De.width,De.height,0,Be,Ze,De.data);y.generateMipmaps=!1}else Qe?(Ke&&t.texStorage2D(i.TEXTURE_2D,Oe,Ue,fe.width,fe.height),G&&N(y,fe,Be,Ze)):t.texImage2D(i.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Be,Ze,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Ue,Xe[0].width,Xe[0].height,fe.depth);for(let me=0,Me=Xe.length;me<Me;me++)if(De=Xe[me],y.format!==Nn)if(Be!==null)if(Qe){if(G)if(y.layerUpdates.size>0){let Ge=Xu(De.width,De.height,y.format,y.type);for(let ye of y.layerUpdates){let ze=De.data.subarray(ye*Ge/De.data.BYTES_PER_ELEMENT,(ye+1)*Ge/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,ye,De.width,De.height,1,Be,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,fe.depth,Be,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ue,De.width,De.height,fe.depth,0,De.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,fe.depth,Be,Ze,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ue,De.width,De.height,fe.depth,0,Be,Ze,De.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Qe&&Ke&&t.texStorage2D(i.TEXTURE_2D,Oe,Ue,Xe[0].width,Xe[0].height);for(let me=0,Me=Xe.length;me<Me;me++)De=Xe[me],y.format!==Nn?Be!==null?Qe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ue,De.width,De.height,0,De.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?G&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,De.width,De.height,Be,Ze,De.data):t.texImage2D(i.TEXTURE_2D,me,Ue,De.width,De.height,0,Be,Ze,De.data)}else if(y.isDataArrayTexture)if(Qe){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Ue,fe.width,fe.height,fe.depth),G)if(y.layerUpdates.size>0){let me=Xu(fe.width,fe.height,y.format,y.type);for(let Me of y.layerUpdates){let Ge=fe.data.subarray(Me*me/fe.data.BYTES_PER_ELEMENT,(Me+1)*me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,fe.width,fe.height,1,Be,Ze,Ge)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Be,Ze,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,Be,Ze,fe.data);else if(y.isData3DTexture)Qe?(Ke&&t.texStorage3D(i.TEXTURE_3D,Oe,Ue,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Be,Ze,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,Be,Ze,fe.data);else if(y.isFramebufferTexture){if(Ke)if(Qe)t.texStorage2D(i.TEXTURE_2D,Oe,Ue,fe.width,fe.height);else{let me=fe.width,Me=fe.height;for(let Ge=0;Ge<Oe;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,Ue,me,Me,0,Be,Ze,null),me>>=1,Me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),fe.parentNode!==me){me.appendChild(fe),u.add(y),me.onpaint=Me=>{let Ge=Me.changedElements;for(let ye of u)Ge.includes(ye.image)&&(ye.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Ge=i.RGBA,ye=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,ye,ze,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Qe&&Ke){let me=ot(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Oe,Ue,me.width,me.height)}for(let me=0,Me=Xe.length;me<Me;me++)De=Xe[me],Qe?G&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Be,Ze,De):t.texImage2D(i.TEXTURE_2D,me,Ue,Be,Ze,De);y.generateMipmaps=!1}else if(Qe){if(Ke){let me=ot(fe);t.texStorage2D(i.TEXTURE_2D,Oe,Ue,me.width,me.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Ze,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Be,Ze,fe);p(y)&&v(J),Le.__version=we.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function re(C,y,X){if(y.image.length!==6)return;let J=se(C,y),le=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);let we=n.get(le);if(le.version!==we.__version||J===!0){t.activeTexture(i.TEXTURE0+X);let Le=wt.getPrimaries(wt.workingColorSpace),ce=y.colorSpace===ls?null:wt.getPrimaries(y.colorSpace),fe=y.colorSpace===ls||Le===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Be=y.isCompressedTexture||y.image[0].isCompressedTexture,Ze=y.image[0]&&y.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Be&&!Ze?Ue[ye]=m(y.image[ye],!0,s.maxCubemapSize):Ue[ye]=Ze?y.image[ye].image:y.image[ye],Ue[ye]=ht(y,Ue[ye]);let De=Ue[0],Xe=r.convert(y.format,y.colorSpace),Qe=r.convert(y.type),Ke=b(y.internalFormat,Xe,Qe,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Oe=we.__version===void 0||J===!0,me=le.dataReady,Me=A(y,De);ee(i.TEXTURE_CUBE_MAP,y);let Ge;if(Be){G&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ke,De.width,De.height);for(let ye=0;ye<6;ye++){Ge=Ue[ye].mipmaps;for(let ze=0;ze<Ge.length;ze++){let Je=Ge[ze];y.format!==Nn?Xe!==null?G?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,0,0,Je.width,Je.height,Xe,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,Ke,Je.width,Je.height,0,Je.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,0,0,Je.width,Je.height,Xe,Qe,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,Ke,Je.width,Je.height,0,Xe,Qe,Je.data)}}}else{if(Ge=y.mipmaps,G&&Oe){Ge.length>0&&Me++;let ye=ot(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ke,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ze){G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,Xe,Qe,Ue[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ke,Ue[ye].width,Ue[ye].height,0,Xe,Qe,Ue[ye].data);for(let ze=0;ze<Ge.length;ze++){let Dt=Ge[ze].image[ye].image;G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,0,0,Dt.width,Dt.height,Xe,Qe,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,Ke,Dt.width,Dt.height,0,Xe,Qe,Dt.data)}}else{G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Xe,Qe,Ue[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ke,Xe,Qe,Ue[ye]);for(let ze=0;ze<Ge.length;ze++){let Je=Ge[ze];G?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,0,0,Xe,Qe,Je.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,Ke,Xe,Qe,Je.image[ye])}}}p(y)&&v(i.TEXTURE_CUBE_MAP),we.__version=le.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function oe(C,y,X,J,le,we){let Le=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),fe=b(X.internalFormat,Le,ce,X.normalized,X.colorSpace),Be=n.get(y),Ze=n.get(X);if(Ze.__renderTarget=y,!Be.__hasExternalTextures){let Ue=Math.max(1,y.width>>we),De=Math.max(1,y.height>>we);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,we,fe,Ue,De,y.depth,0,Le,ce,null):t.texImage2D(le,we,fe,Ue,De,0,Le,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,le,Ze.__webglTexture,0,Ie(y)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,le,Ze.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(C,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let J=y.depthTexture,le=J&&J.isDepthTexture?J.type:null,we=E(y.stencilBuffer,le),Le=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(y),we,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(y),we,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,we,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,C)}else{let J=y.textures;for(let le=0;le<J.length;le++){let we=J[le],Le=r.convert(we.format,we.colorSpace),ce=r.convert(we.type),fe=b(we.internalFormat,Le,ce,we.normalized,we.colorSpace);Ye(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(y),fe,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(y),fe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,fe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(C,y,X){let J=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(y.depthTexture);if(le.__renderTarget=y,(!le.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(le.__webglInit===void 0&&(le.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),le.__webglTexture===void 0){le.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),ee(i.TEXTURE_CUBE_MAP,y.depthTexture);let Be=r.convert(y.depthTexture.format),Ze=r.convert(y.depthTexture.type),Ue;y.depthTexture.format===Li?Ue=i.DEPTH_COMPONENT24:y.depthTexture.format===ki&&(Ue=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,y.width,y.height,0,Be,Ze,null)}}else pe(y.depthTexture,0);let we=le.__webglTexture,Le=Ie(y),ce=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,fe=y.depthTexture.format===ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Li)Ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,we,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,we,0);else if(y.depthTexture.format===ki)Ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,we,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(C){let y=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",le)};J.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)Ae(y.__webglFramebuffer[J],C,J);else{let J=C.texture.mipmaps;J&&J.length>0?Ae(y.__webglFramebuffer[0],C,0):Ae(y.__webglFramebuffer,C,0)}else if(X){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),Se(y.__webglDepthbuffer[J],C,!1);else{let le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,we)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Se(y.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,y,X){let J=n.get(C);y!==void 0&&oe(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&z(C)}function Q(C){let y=C.texture,X=n.get(C),J=n.get(y);C.addEventListener("dispose",M);let le=C.textures,we=C.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,a.memory.textures++),we){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let fe=0;fe<y.mipmaps.length;fe++)X.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else X.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)X.__webglFramebuffer[ce]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ce=0,fe=le.length;ce<fe;ce++){let Be=n.get(le[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ye(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ce=0;ce<le.length;ce++){let fe=le[ce];X.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ce]);let Be=r.convert(fe.format,fe.colorSpace),Ze=r.convert(fe.type),Ue=b(fe.internalFormat,Be,Ze,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),De=Ie(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ue,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,X.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ee(i.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)oe(X.__webglFramebuffer[ce][fe],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else oe(X.__webglFramebuffer[ce],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(y)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ce=0,fe=le.length;ce<fe;ce++){let Be=le[ce],Ze=n.get(Be),Ue=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ze.__webglTexture),ee(Ue,Be),oe(X.__webglFramebuffer,C,Be,i.COLOR_ATTACHMENT0+ce,Ue,0),p(Be)&&v(Ue)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),ee(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)oe(X.__webglFramebuffer[fe],C,y,i.COLOR_ATTACHMENT0,ce,fe);else oe(X.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,ce,0);p(y)&&v(ce),t.unbindTexture()}C.depthBuffer&&z(C)}function te(C){let y=C.textures;for(let X=0,J=y.length;X<J;X++){let le=y[X];if(p(le)){let we=R(C),Le=n.get(le).__webglTexture;t.bindTexture(we,Le),v(we),t.unbindTexture()}}}let de=[],ge=[];function Te(C){if(C.samples>0){if(Ye(C)===!1){let y=C.textures,X=C.width,J=C.height,le=i.COLOR_BUFFER_BIT,we=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(C),ce=y.length>1;if(ce)for(let Be=0;Be<y.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let fe=C.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Be=0;Be<y.length;Be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);let Ze=n.get(y[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,le,i.NEAREST),l===!0&&(de.length=0,ge.length=0,de.push(i.COLOR_ATTACHMENT0+Be),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(de.push(we),ge.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Be=0;Be<y.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);let Ze=n.get(y[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ie(C){return Math.min(s.maxSamples,C.samples)}function Ye(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ht(C,y){let X=C.colorSpace,J=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Ha&&X!==ls&&(wt.getTransfer(X)===Nt?(J!==Nn||le!==En)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",X)),y}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=U,this.setTextureUnits=W,this.setTexture2D=pe,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=he,this.rebindTextures=ae,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Uy(i,e){function t(n,s=ls){let r,a=wt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return i.BYTE;if(n===Du)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===Nn)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Bu)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Os)return i.RG;if(n===Sc)return i.RG_INTEGER;if(n===wc)return i.RGBA_INTEGER;if(n===bo||n===Mo||n===So||n===wo)if(a===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Tc||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Eo||n===Nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Pc)return a===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ic)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return r.COMPRESSED_R11_EAC;if(n===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===Nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Jc||n===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return a===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Qc||n===To||n===eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
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

}`,hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ud=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new hd,p={},v=t.getContextAttributes(),R=null,b=null,E=[],A=[],P=new Ee,M=null,T=null,I=new hn;I.viewport=new Ht;let L=new hn;L.viewport=new Ht;let O=[I,L],k=new fc,U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=E[D];return N===void 0&&(N=new Jr,E[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=E[D];return N===void 0&&(N=new Jr,E[D]=N),N.getGripSpace()},this.getHand=function(D){let N=E[D];return N===void 0&&(N=new Jr,E[D]=N),N.getHandSpace()};function q(D){let N=A.indexOf(D.inputSource);if(N===-1)return;let $=E[N];$!==void 0&&($.update(D.inputSource,D.frame,c||a),$.dispatchEvent({type:D.type,data:D.inputSource}))}function K(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",pe);for(let D=0;D<E.length;D++){let N=A[D];N!==null&&(A[D]=null,E[D].disconnect(N))}U=null,W=null,m.reset();for(let D in p)delete p[D];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,b=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),T!==null){let D=T.camera;D.fov=T.fov,D.zoom=T.zoom,D.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",pe),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,re=null,oe=null;v.depth&&(oe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?ki:Li,re=v.stencil?Fs:Mi);let Se={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Wt(d.textureWidth,d.textureHeight,{format:Nn,type:En,depthTexture:new Fi(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let $={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Wt(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(D){for(let N=0;N<D.removed.length;N++){let $=D.removed[N],re=A.indexOf($);re>=0&&(A[re]=null,E[re].disconnect($))}for(let N=0;N<D.added.length;N++){let $=D.added[N],re=A.indexOf($);if(re===-1){for(let Se=0;Se<E.length;Se++)if(Se>=A.length){A.push($),re=Se;break}else if(A[Se]===null){A[Se]=$,re=Se;break}if(re===-1)break}let oe=E[re];oe&&oe.connect($)}}let Z=new B,ne=new B;function he(D,N,$){Z.setFromMatrixPosition(N.matrixWorld),ne.setFromMatrixPosition($.matrixWorld);let re=Z.distanceTo(ne),oe=N.projectionMatrix.elements,Se=$.projectionMatrix.elements,Ae=oe[14]/(oe[10]-1),z=oe[14]/(oe[10]+1),ae=(oe[9]+1)/oe[5],Q=(oe[9]-1)/oe[5],te=(oe[8]-1)/oe[0],de=(Se[8]+1)/Se[0],ge=Ae*te,Te=Ae*de,Ie=re/(-te+de),Ye=Ie*-te;if(N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ye),D.translateZ(Ie),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),oe[10]===-1)D.projectionMatrix.copy(N.projectionMatrix),D.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let F=Ae+Ie,ht=z+Ie,ot=ge-Ye,C=Te+(re-Ye),y=ae*z/ht*F,X=Q*z/ht*F;D.projectionMatrix.makePerspective(ot,C,y,X,F,ht),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function Pe(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let N=D.near,$=D.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&($=m.depthFar)),k.near=L.near=I.near=N,k.far=L.far=I.far=$,(U!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,W=k.far),k.layers.mask=D.layers.mask|6,I.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let re=D.parent,oe=k.cameras;Pe(k,re);for(let Se=0;Se<oe.length;Se++)Pe(oe[Se],re);oe.length===2?he(k,I,L):k.projectionMatrix.copy(I.projectionMatrix),T===null&&D.isPerspectiveCamera&&(T={camera:D,fov:D.fov,zoom:D.zoom}),ve(D,k,re)};function ve(D,N,$){$===null?D.matrix.copy(N.matrixWorld):(D.matrix.copy($.matrixWorld),D.matrix.invert(),D.matrix.multiply(N.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(N.projectionMatrix),D.projectionMatrixInverse.copy(N.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Hl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(D){return p[D]};let qe=null;function ee(D,N){if(h=N.getViewerPose(c||a),g=N,h!==null){let $=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let re=!1;$.length!==k.cameras.length&&(k.cameras.length=0,re=!0);for(let z=0;z<$.length;z++){let ae=$[z],Q=null;if(f!==null)Q=f.getViewport(ae);else{let de=u.getViewSubImage(d,ae);Q=de.viewport,z===0&&(e.setRenderTargetTextures(b,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(b))}let te=O[z];te===void 0&&(te=new hn,te.layers.enable(z),te.viewport=new Ht,O[z]=te),te.matrix.fromArray(ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Q.x,Q.y,Q.width,Q.height),z===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),re===!0&&k.cameras.push(te)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let z=u.getDepthInformation($[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(oe&&oe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let z=0;z<$.length;z++){let ae=$[z].camera;if(ae){let Q=p[ae];Q||(Q=new Za,p[ae]=Q);let te=u.getCameraImage(ae);Q.sourceTexture=te}}}}for(let $=0;$<E.length;$++){let re=A[$],oe=E[$];re!==null&&oe!==void 0&&oe.update(re,N,c||a)}qe&&qe(D,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let se=new Ip;se.setAnimationLoop(ee),this.setAnimationLoop=function(D){qe=D},this.dispose=function(){}}},By=new Lt,Op=new dt;Op.set(-1,0,0,0,1,0,0,0,1);function ky(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,R,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),R=v.envMap,b=v.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Op),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){let A=E.program;n.uniformBlockBinding(b,A)}function c(b,E){let A=s[b.id];A===void 0&&(m(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",v));let P=E.program;n.updateUBOMapping(b,P);let M=e.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function h(b){let E=u();b.__bindingPointIndex=E;let A=i.createBuffer(),P=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let E=s[b.id],A=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let M=0,T=A.length;M<T;M++){let I=A[M];if(Array.isArray(I))for(let L=0,O=I.length;L<O;L++)f(I[L],M,L,P);else f(I,M,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,E,A,P){if(_(b,E,A,P)===!0){let M=b.__offset,T=b.value;if(Array.isArray(T)){let I=0;for(let L=0;L<T.length;L++){let O=T[L],k=p(O);g(O,b.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function g(b,E,A){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,A)}function _(b,E,A,P){let M=b.value,T=E+"_"+A;if(P[T]===void 0)return typeof M=="number"||typeof M=="boolean"?P[T]=M:ArrayBuffer.isView(M)?P[T]=M.slice():P[T]=M.clone(),!0;{let I=P[T];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return P[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function m(b){let E=b.uniforms,A=0,P=16;for(let T=0,I=E.length;T<I;T++){let L=Array.isArray(E[T])?E[T]:[E[T]];for(let O=0,k=L.length;O<k;O++){let U=L[O],W=Array.isArray(U.value)?U.value:[U.value];for(let q=0,K=W.length;q<K;q++){let pe=W[q],Z=p(pe),ne=A%P,he=ne%Z.boundary,Pe=ne+he;A+=he,Pe!==0&&P-Pe<Z.storage&&(A+=P-Pe),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=Z.storage}}}let M=A%P;return M>0&&(A+=P-M),b.__size=A,b.__cache={},this}function p(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),E}function v(b){let E=b.target;E.removeEventListener("dispose",v);let A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var Hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function Gy(){return zi===null&&(zi=new Ts(Hy,16,16,Os,Qt),zi.name="DFG_LUT",zi.minFilter=fn,zi.magFilter=fn,zi.wrapS=Ii,zi.wrapT=Ii,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var ha=class{constructor(e={}){let{canvas:t=Qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([wc,Sc,Mc]),p=new Set([En,Mi,ra,Fs,yc,bc]),v=new Uint32Array(4),R=new Int32Array(4),b=new B,E=null,A=null,P=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,O=null,k=null,U=null,W=null;this._outputColorSpace=Gt;let q=0,K=0,pe=null,Z=-1,ne=null,he=new Ht,Pe=new Ht,ve=null,qe=new je(0),ee=0,se=t.width,D=t.height,N=1,$=null,re=null,oe=new Ht(0,0,se,D),Se=new Ht(0,0,se,D),Ae=!1,z=new jr,ae=!1,Q=!1,te=new Lt,de=new B,ge=new Ht,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Ye(){return pe===null?N:1}let F=n;function ht(w,H){return t.getContext(w,H)}let ot,C,y,X,J,le,we,Le,ce,fe,Be,Ze,Ue,De,Xe,Qe,Ke,G,Oe,me,Me,Ge,ye;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",dn,!1),F===null){let H="webgl2";if(F=ht(H,w),F===null)throw ht(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(w){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),st("WebGLRenderer: "+w.message),w}function ze(){ot=new Z_(F),ot.init(),Me=new Uy(F,ot),C=new k_(F,ot,e,Me),y=new Dy(F,ot),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),k=F.createFramebuffer(),U=F.createFramebuffer(),W=F.createFramebuffer(),X=new j_(F),J=new vy,le=new Ny(F,ot,y,J,C,Me,X),we=new $_(I),Le=new eg(F),Ge=new O_(F,Le),ce=new J_(F,Le,X,Ge),fe=new ev(F,ce,Le,Ge,X),G=new Q_(F,C,le),Xe=new z_(J),Be=new _y(I,we,ot,C,Ge,Xe),Ze=new ky(I,J),Ue=new by,De=new Ay(ot),Ke=new F_(I,we,y,fe,g,l),Qe=new Ly(I,fe,C),ye=new zy(F,X,C,y),Oe=new B_(F,ot,X),me=new K_(F,ot,X),X.programs=Be.programs,I.capabilities=C,I.extensions=ot,I.properties=J,I.renderLists=Ue,I.shadowMap=Qe,I.state=y,I.info=X}_!==En&&(T=new nv(_,t.width,t.height,o,s,r));let Je=new ud(I,F);this.xr=Je,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(se,D,!1))},this.getSize=function(w){return w.set(se,D)},this.setSize=function(w,H,ie=!0){if(Je.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,D=H,t.width=Math.floor(w*N),t.height=Math.floor(H*N),ie===!0&&(t.style.width=w+"px",t.style.height=H+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(se*N,D*N).floor()},this.setDrawingBufferSize=function(w,H,ie){se=w,D=H,N=ie,t.width=Math.floor(w*ie),t.height=Math.floor(H*ie),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===En){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(he)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,H,ie,x){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,H,ie,x),y.viewport(he.copy(oe).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,H,ie,x){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,H,ie,x),y.scissor(Pe.copy(Se).multiplyScalar(N).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){y.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,ie=!0){let x=0;if(w){let S=!1;if(pe!==null){let V=pe.texture.format;S=m.has(V)}if(S){let V=pe.texture.type,Y=p.has(V),j=Ke.getClearColor(),ue=Ke.getClearAlpha(),be=j.r,Ce=j.g,Re=j.b;Y?(v[0]=be,v[1]=Ce,v[2]=Re,v[3]=ue,F.clearBufferuiv(F.COLOR,0,v)):(R[0]=be,R[1]=Ce,R[2]=Re,R[3]=ue,F.clearBufferiv(F.COLOR,0,R))}else x|=F.COLOR_BUFFER_BIT}H&&(x|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(x|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x!==0&&F.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),Ke.dispose(),Ue.dispose(),De.dispose(),J.dispose(),we.dispose(),fe.dispose(),Ge.dispose(),ye.dispose(),Be.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Ko),Je.removeEventListener("sessionend",jo),Hn.stop()};function Dt(w){w.preventDefault(),zu("WebGLRenderer: Context Lost."),L=!0}function Tt(){zu("WebGLRenderer: Context Restored."),L=!1;let w=X.autoReset,H=Qe.enabled,ie=Qe.autoUpdate,x=Qe.needsUpdate,S=Qe.type;ze(),X.autoReset=w,Qe.enabled=H,Qe.autoUpdate=ie,Qe.needsUpdate=x,Qe.type=S}function dn(w){st("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function on(w){let H=w.target;H.removeEventListener("dispose",on),Ih(H)}function Ih(w){Lh(w),J.remove(w)}function Lh(w){let H=J.get(w).programs;H!==void 0&&(H.forEach(function(ie){Be.releaseProgram(ie)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ie,x,S,V){H===null&&(H=Te);let Y=S.isMesh&&S.matrixWorld.determinantAffine()<0,j=Nh(w,H,ie,x,S);y.setMaterial(x,Y);let ue=ie.index,be=1;if(x.wireframe===!0){if(ue=ce.getWireframeAttribute(ie),ue===void 0)return;be=2}let Ce=ie.drawRange,Re=ie.attributes.position,xe=Ce.start*be,He=(Ce.start+Ce.count)*be;V!==null&&(xe=Math.max(xe,V.start*be),He=Math.min(He,(V.start+V.count)*be)),ue!==null?(xe=Math.max(xe,0),He=Math.min(He,ue.count)):Re!=null&&(xe=Math.max(xe,0),He=Math.min(He,Re.count));let lt=He-xe;if(lt<0||lt===1/0)return;Ge.setup(S,x,j,ie,ue);let ct,et=Oe;if(ue!==null&&(ct=Le.get(ue),et=me,et.setIndex(ct)),S.isMesh)x.wireframe===!0?(y.setLineWidth(x.wireframeLinewidth*Ye()),et.setMode(F.LINES)):et.setMode(F.TRIANGLES);else if(S.isLine){let ft=x.linewidth;ft===void 0&&(ft=1),y.setLineWidth(ft*Ye()),S.isLineSegments?et.setMode(F.LINES):S.isLineLoop?et.setMode(F.LINE_LOOP):et.setMode(F.LINE_STRIP)}else S.isPoints?et.setMode(F.POINTS):S.isSprite&&et.setMode(F.TRIANGLES);if(S.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))et.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{let ft=S._multiDrawStarts,Ne=S._multiDrawCounts,Yt=S._multiDrawCount,_t=ue?Le.get(ue).bytesPerElement:1,ln=J.get(x).currentProgram.getUniforms();for(let yn=0;yn<Yt;yn++)ln.setValue(F,"_gl_DrawID",yn),et.render(ft[yn]/_t,Ne[yn])}else if(S.isInstancedMesh)et.renderInstances(xe,lt,S.count);else if(ie.isInstancedBufferGeometry){let ft=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ne=Math.min(ie.instanceCount,ft);et.renderInstances(xe,lt,Ne)}else et.render(xe,lt)};function Jo(w,H,ie,x){O!==null&&w.isNodeMaterial&&O.setObject(x,w),ae===!0&&Xe.setState(w,ie,!1),w.transparent===!0&&w.side===Jt&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Cr(w,H,x),w.side=Ds,w.needsUpdate=!0,Cr(w,H,x),w.side=Jt):Cr(w,H,x)}this.compile=function(w,H,ie=null){ie===null&&(ie=w),O!==null&&O.renderStart(w,H,ie),A=De.get(ie),A.init(H),M.push(A),ie.traverseVisible(function(S){S.isLight&&S.layers.test(H.layers)&&(A.pushLight(S),S.castShadow&&A.pushShadow(S))}),w!==ie&&w.traverseVisible(function(S){S.isLight&&S.layers.test(H.layers)&&(A.pushLight(S),S.castShadow&&A.pushShadow(S))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),Q=this.localClippingEnabled,ae=Xe.init(this.clippingPlanes,Q),ae===!0&&Xe.setGlobalState(this.clippingPlanes,H),O!==null&&Qe.render(A.state.shadowsArray,ie,H);let x=new Set;return w.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;let V=S.material;if(V)if(Array.isArray(V))for(let Y=0;Y<V.length;Y++){let j=V[Y];Jo(j,ie,H,S),x.add(j)}else Jo(V,ie,H,S),x.add(V)}),A=M.pop(),O!==null&&O.renderEnd(),x},this.compileAsync=function(w,H,ie=null){let x=this.compile(w,H,ie);return new Promise(S=>{function V(){if(x.forEach(function(Y){let ue=J.get(Y).currentProgram;(ue===void 0||ue.isReady())&&x.delete(Y)}),x.size===0){S(w);return}setTimeout(V,10)}ot.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let wa=null;function Dh(w){wa&&wa(w)}function Ko(){Hn.stop()}function jo(){Hn.start()}let Hn=new Ip;Hn.setAnimationLoop(Dh),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){wa=w,Je.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},Je.addEventListener("sessionstart",Ko),Je.addEventListener("sessionend",jo),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(w,H);let ie=Je.enabled===!0&&Je.isPresenting===!0,x=T!==null&&(pe===null||ie)&&T.begin(I,pe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(H),H=Je.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,H,pe),A=De.get(w,M.length),A.init(H),A.state.textureUnits=le.getTextureUnits(),M.push(A),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z.setFromProjectionMatrix(te,_i,H.reversedDepth),Q=this.localClippingEnabled,ae=Xe.init(this.clippingPlanes,Q),E=Ue.get(w,P.length),E.init(),P.push(E),Je.enabled===!0&&Je.isPresenting===!0){let Y=I.xr.getDepthSensingMesh();Y!==null&&Ea(Y,H,-1/0,I.sortObjects)}Ea(w,H,0,I.sortObjects),E.finish(),O!==null&&O.updateLights(A.state.lightsArray),I.sortObjects===!0&&E.sort($,re),Ie=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,Ie&&Ke.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Xe.beginShadows();let S=A.state.shadowsArray;if(Qe.render(S,w,H),ae===!0&&Xe.endShadows(),(x&&T.hasRenderPass())===!1){let Y=E.opaque,j=E.transmissive;if(A.setupLights(),H.isArrayCamera){let ue=H.cameras;if(j.length>0)for(let be=0,Ce=ue.length;be<Ce;be++){let Re=ue[be];el(Y,j,w,Re)}Ie&&Ke.render(w);for(let be=0,Ce=ue.length;be<Ce;be++){let Re=ue[be];Qo(E,w,Re,Re.viewport)}}else j.length>0&&el(Y,j,w,H),Ie&&Ke.render(w),Qo(E,w,H)}pe!==null&&K===0&&(le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe)),x&&T.end(I),w.isScene===!0&&w.onAfterRender(I,w,H),Ge.resetDefaultState(),Z=-1,ne=null,M.pop(),M.length>0?(A=M[M.length-1],le.setTextureUnits(A.state.textureUnits),ae===!0&&Xe.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,O!==null&&O.renderEnd()};function Ea(w,H,ie,x){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(z)){x&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);let Y=fe.update(w),j=w.material;j.visible&&E.push(w,Y,j,ie,ge.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(z))){let Y=fe.update(w),j=w.material;if(x&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),ge.copy(Y.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(j)){let ue=Y.groups;for(let be=0,Ce=ue.length;be<Ce;be++){let Re=ue[be],xe=j[Re.materialIndex];xe&&xe.visible&&E.push(w,Y,xe,ie,ge.z,Re,H)}}else j.visible&&E.push(w,Y,j,ie,ge.z,null,H)}}let V=w.children;for(let Y=0,j=V.length;Y<j;Y++)Ea(V[Y],H,ie,x)}function Qo(w,H,ie,x){let{opaque:S,transmissive:V,transparent:Y}=w;A.setupLightsView(ie),ae===!0&&Xe.setGlobalState(I.clippingPlanes,ie),x&&y.viewport(he.copy(x)),S.length>0&&Rr(S,H,ie),V.length>0&&Rr(V,H,ie),Y.length>0&&Rr(Y,H,ie),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function el(w,H,ie,x){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[x.id]===void 0){let xe=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[x.id]=new Wt(1,1,{generateMipmaps:!0,type:xe?Qt:En,minFilter:Us,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let V=A.state.transmissionRenderTarget[x.id],Y=x.viewport||he;V.setSize(Y.z*I.transmissionResolutionScale,Y.w*I.transmissionResolutionScale);let j=I.getRenderTarget(),ue=I.getActiveCubeFace(),be=I.getActiveMipmapLevel();I.setRenderTarget(V),I.getClearColor(qe),ee=I.getClearAlpha(),ee<1&&I.setClearColor(16777215,.5),I.clear(),Ie&&Ke.render(ie);let Ce=I.toneMapping;I.toneMapping=bi;let Re=x.viewport;if(x.viewport!==void 0&&(x.viewport=void 0),A.setupLightsView(x),ae===!0&&Xe.setGlobalState(I.clippingPlanes,x),Rr(w,ie,x),le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V),ot.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let He=0,lt=H.length;He<lt;He++){let ct=H[He],{object:et,geometry:ft,material:Ne,group:Yt}=ct;if(Ne.side===Jt&&et.layers.test(x.layers)){let _t=Ne.side;Ne.side=sn,Ne.needsUpdate=!0,tl(et,ie,x,ft,Ne,Yt),Ne.side=_t,Ne.needsUpdate=!0,xe=!0}}xe===!0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V))}I.setRenderTarget(j,ue,be),I.setClearColor(qe,ee),Re!==void 0&&(x.viewport=Re),I.toneMapping=Ce}function Rr(w,H,ie){let x=H.isScene===!0?H.overrideMaterial:null;for(let S=0,V=w.length;S<V;S++){let Y=w[S],{object:j,geometry:ue,group:be}=Y,Ce=Y.material;Ce.allowOverride===!0&&x!==null&&(Ce=x),j.layers.test(ie.layers)&&tl(j,H,ie,ue,Ce,be)}}function tl(w,H,ie,x,S,V){O!==null&&S.isNodeMaterial&&O.setObject(w,S),w.onBeforeRender(I,H,ie,x,S,V),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),S.onBeforeRender(I,H,ie,x,w,V),S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,I.renderBufferDirect(ie,H,x,S,w,V),S.side=Ds,S.needsUpdate=!0,I.renderBufferDirect(ie,H,x,S,w,V),S.side=Jt):I.renderBufferDirect(ie,H,x,S,w,V),w.onAfterRender(I,H,ie,x,S,V)}function Cr(w,H,ie){H.isScene!==!0&&(H=Te);let x=J.get(w),S=A.state.lights,V=A.state.shadowsArray,Y=S.state.version,j=Be.getParameters(w,S.state,V,H,ie,A.state.lightProbeGridArray),ue=Be.getProgramCacheKey(j),be=x.programs;x.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,x.fog=H.fog;let Ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;x.envMap=we.get(w.envMap||x.environment,Ce),x.envMapRotation=x.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",on),be=new Map,x.programs=be);let Re=be.get(ue);if(Re!==void 0){if(x.currentProgram===Re&&x.lightsStateVersion===Y)return Pr(w,j),Re}else j.uniforms=Be.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,ie,j),w.onBeforeCompile(j,I),Re=Be.acquireProgram(j,ue),be.set(ue,Re),x.uniforms=j.uniforms;let xe=x.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(xe.clippingPlanes=Xe.uniform),Pr(w,j),x.needsLights=Ta(w),x.lightsStateVersion=Y,x.needsLights&&(xe.ambientLightColor.value=S.state.ambient,xe.lightProbe.value=S.state.probe,xe.sunLights.value=S.state.sun,xe.sunLightShadows.value=S.state.sunShadow,xe.directionalLights.value=S.state.directional,xe.directionalLightShadows.value=S.state.directionalShadow,xe.spotLights.value=S.state.spot,xe.spotLightShadows.value=S.state.spotShadow,xe.rectAreaLights.value=S.state.rectArea,xe.ltc_1.value=S.state.rectAreaLTC1,xe.ltc_2.value=S.state.rectAreaLTC2,xe.pointLights.value=S.state.point,xe.pointLightShadows.value=S.state.pointShadow,xe.hemisphereLights.value=S.state.hemi,xe.sunShadowMatrix.value=S.state.sunShadowMatrix,xe.sunShadowCascade.value=S.state.sunShadowCascade,xe.directionalShadowMatrix.value=S.state.directionalShadowMatrix,xe.spotLightMatrix.value=S.state.spotLightMatrix,xe.spotLightMap.value=S.state.spotLightMap,xe.pointShadowMatrix.value=S.state.pointShadowMatrix),x.lightProbeGrid=A.state.lightProbeGridArray.length>0,x.currentProgram=Re,x.uniformsList=null,Re}function _s(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=ca.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Pr(w,H){let ie=J.get(w);ie.outputColorSpace=H.outputColorSpace,ie.batching=H.batching,ie.batchingColor=H.batchingColor,ie.instancing=H.instancing,ie.instancingColor=H.instancingColor,ie.instancingMorph=H.instancingMorph,ie.skinning=H.skinning,ie.morphTargets=H.morphTargets,ie.morphNormals=H.morphNormals,ie.morphColors=H.morphColors,ie.morphTargetsCount=H.morphTargetsCount,ie.numClippingPlanes=H.numClippingPlanes,ie.numIntersection=H.numClipIntersection,ie.vertexAlphas=H.vertexAlphas,ie.vertexTangents=H.vertexTangents,ie.toneMapping=H.toneMapping}function Bd(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let ie=0,x=w.length;ie<x;ie++){let S=w[ie];if(S.texture!==null&&S.boundingBox.containsPoint(b))return S}return null}function Nh(w,H,ie,x,S){H.isScene!==!0&&(H=Te),le.resetTextureUnits();let V=H.fog,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?H.environment:null,j=pe===null?I.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:wt.workingColorSpace,ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,be=we.get(x.envMap||Y,ue),Ce=x.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Re=!!ie.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),xe=!!ie.morphAttributes.position,He=!!ie.morphAttributes.normal,lt=!!ie.morphAttributes.color,ct=bi;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ct=I.toneMapping);let et=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ft=et!==void 0?et.length:0,Ne=J.get(x),Yt=A.state.lights;if(ae===!0&&(Q===!0||w!==ne)){let Ut=w===ne&&x.id===Z;Xe.setState(x,w,Ut)}let _t=!1;x.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Yt.state.version||Ne.outputColorSpace!==j||S.isBatchedMesh&&Ne.batching===!1||!S.isBatchedMesh&&Ne.batching===!0||S.isBatchedMesh&&Ne.batchingColor===!0&&S._colorsTexture===null||S.isBatchedMesh&&Ne.batchingColor===!1&&S._colorsTexture!==null||S.isInstancedMesh&&Ne.instancing===!1||!S.isInstancedMesh&&Ne.instancing===!0||S.isSkinnedMesh&&Ne.skinning===!1||!S.isSkinnedMesh&&Ne.skinning===!0||S.isInstancedMesh&&Ne.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&Ne.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&Ne.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&Ne.instancingMorph===!1&&S.morphTexture!==null||Ne.envMap!==be||x.fog===!0&&Ne.fog!==V||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Xe.numPlanes||Ne.numIntersection!==Xe.numIntersection)||Ne.vertexAlphas!==Ce||Ne.vertexTangents!==Re||Ne.morphTargets!==xe||Ne.morphNormals!==He||Ne.morphColors!==lt||Ne.toneMapping!==ct||Ne.morphTargetsCount!==ft||!!Ne.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ne.__version=x.version);let ln=Ne.currentProgram;_t===!0&&(ln=Cr(x,H,S),O&&x.isNodeMaterial&&O.onUpdateProgram(x,ln,Ne));let yn=!1,bn=!1,ni=!1,It=ln.getUniforms(),Ot=Ne.uniforms;if(y.useProgram(ln.program)&&(yn=!0,bn=!0,ni=!0),x.id!==Z&&(Z=x.id,bn=!0),Ne.needsLights){let Ut=Bd(A.state.lightProbeGridArray,S);Ne.lightProbeGrid!==Ut&&(Ne.lightProbeGrid=Ut,bn=!0)}if(yn||ne!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(F,"projectionMatrix",w.projectionMatrix),It.setValue(F,"viewMatrix",w.matrixWorldInverse);let qi=It.map.cameraPosition;qi!==void 0&&qi.setValue(F,de.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)&&It.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),ne!==w&&(ne=w,bn=!0,ni=!0)}if(Ne.needsLights&&(Yt.state.sunShadowMap.length>0&&It.setValue(F,"sunShadowMap",Yt.state.sunShadowMap,le),Yt.state.directionalShadowMap.length>0&&It.setValue(F,"directionalShadowMap",Yt.state.directionalShadowMap,le),Yt.state.spotShadowMap.length>0&&It.setValue(F,"spotShadowMap",Yt.state.spotShadowMap,le),Yt.state.pointShadowMap.length>0&&It.setValue(F,"pointShadowMap",Yt.state.pointShadowMap,le)),S.isSkinnedMesh){It.setOptional(F,S,"bindMatrix"),It.setOptional(F,S,"bindMatrixInverse");let Ut=S.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(F,"boneTexture",Ut.boneTexture,le))}S.isBatchedMesh&&(It.setOptional(F,S,"batchingTexture"),It.setValue(F,"batchingTexture",S._matricesTexture,le),It.setOptional(F,S,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",S._indirectTexture,le),It.setOptional(F,S,"batchingColorTexture"),S._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",S._colorsTexture,le));let di=ie.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&G.update(S,ie,ln),(bn||Ne.receiveShadow!==S.receiveShadow)&&(Ne.receiveShadow=S.receiveShadow,It.setValue(F,"receiveShadow",S.receiveShadow)),(x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial)&&x.envMap===null&&H.environment!==null&&(Ot.envMapIntensity.value=H.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Gy()),bn){if(It.setValue(F,"toneMappingExposure",I.toneMappingExposure),Ne.needsLights&&nl(Ot,ni),V&&x.fog===!0&&Ze.refreshFogUniforms(Ot,V),Ze.refreshMaterialUniforms(Ot,x,N,D,A.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.lightProbeGrid){let Ut=Ne.lightProbeGrid;Ot.probesSH.value=Ut.texture,Ot.probesMin.value.copy(Ut.boundingBox.min),Ot.probesMax.value.copy(Ut.boundingBox.max),Ot.probesResolution.value.copy(Ut.resolution)}ca.upload(F,_s(Ne),Ot,le)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0&&(ca.upload(F,_s(Ne),Ot,le),x.uniformsNeedUpdate=!1),x.isSpriteMaterial&&It.setValue(F,"center",S.center),It.setValue(F,"modelViewMatrix",S.modelViewMatrix),It.setValue(F,"normalMatrix",S.normalMatrix),It.setValue(F,"modelMatrix",S.matrixWorld),x.uniformsGroups!==void 0){let Ut=x.uniformsGroups;for(let qi=0,Yi=Ut.length;qi<Yi;qi++){let il=Ut[qi];ye.update(il,ln),ye.bind(il,ln)}}return ln}function nl(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Ta(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(w,H,ie){let x=J.get(w);x.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1&&(x.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=H,J.get(w.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:ie,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let ie=J.get(w);ie.__webglFramebuffer=H,ie.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,ie=0){pe=w,q=H,K=ie;let x=null,S=!1,V=!1;if(w){let j=J.get(w);if(j.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,j.__webglFramebuffer),he.copy(w.viewport),Pe.copy(w.scissor),ve=w.scissorTest,y.viewport(he),y.scissor(Pe),y.setScissorTest(ve),Z=-1;return}else if(j.__webglFramebuffer===void 0)le.setupRenderTarget(w);else if(j.__hasExternalTextures)le.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ce=w.depthTexture;if(j.__boundDepthTexture!==Ce){if(Ce!==null&&J.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(w)}}let ue=w.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(V=!0);let be=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[H])?x=be[H][ie]:x=be[H],S=!0):w.samples>0&&le.useMultisampledRTT(w)===!1?x=J.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?x=be[ie]:x=be,he.copy(w.viewport),Pe.copy(w.scissor),ve=w.scissorTest}else he.copy(oe).multiplyScalar(N).floor(),Pe.copy(Se).multiplyScalar(N).floor(),ve=Ae;if(ie!==0&&(x=k),y.bindFramebuffer(F.FRAMEBUFFER,x)&&y.drawBuffers(w,x),y.viewport(he),y.scissor(Pe),y.setScissorTest(ve),S){let j=J.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,j.__webglTexture,ie)}else if(V){let j=H;for(let ue=0;ue<w.textures.length;ue++){let be=J.get(w.textures[ue]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ue,be.__webglTexture,ie,j)}}else if(w!==null&&ie!==0){let j=J.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,j.__webglTexture,ie)}Z=-1};function vs(w){let H=J.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=C.textureFormatReadable(w.format),H.__typeReadable=C.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,ie,x,S,V,Y,j=0){if(!(w&&w.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Y!==void 0&&(ue=ue[Y]),ue){y.bindFramebuffer(F.FRAMEBUFFER,ue);try{let be=w.textures[j],Ce=be.format,Re=be.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+j);let xe=vs(be);if(xe.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-x&&ie>=0&&ie<=w.height-S&&F.readPixels(H,ie,x,S,Me.convert(Ce),Me.convert(Re),V)}finally{let be=pe!==null?J.get(pe).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,H,ie,x,S,V,Y,j=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Y!==void 0&&(ue=ue[Y]),ue)if(H>=0&&H<=w.width-x&&ie>=0&&ie<=w.height-S){y.bindFramebuffer(F.FRAMEBUFFER,ue);let be=w.textures[j],Ce=be.format,Re=be.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+j);let xe=vs(be);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,He),F.bufferData(F.PIXEL_PACK_BUFFER,V.byteLength,F.STREAM_READ),F.readPixels(H,ie,x,S,Me.convert(Ce),Me.convert(Re),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let lt=pe!==null?J.get(pe).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,lt);let ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tp(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,He),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,V),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(He),F.deleteSync(ct),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,ie=0){let x=Math.pow(2,-ie),S=Math.floor(w.image.width*x),V=Math.floor(w.image.height*x),Y=H!==null?H.x:0,j=H!==null?H.y:0;le.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Y,j,S,V),y.unbindTexture()},this.copyTextureToTexture=function(w,H,ie=null,x=null,S=0,V=0){let Y,j,ue,be,Ce,Re,xe,He,lt,ct=w.isCompressedTexture?w.mipmaps[V]:w.image;if(ie!==null)Y=ie.max.x-ie.min.x,j=ie.max.y-ie.min.y,ue=ie.isBox3?ie.max.z-ie.min.z:1,be=ie.min.x,Ce=ie.min.y,Re=ie.isBox3?ie.min.z:0;else{let Ot=Math.pow(2,-S);Y=Math.floor(ct.width*Ot),j=Math.floor(ct.height*Ot),w.isDataArrayTexture?ue=ct.depth:w.isData3DTexture?ue=Math.floor(ct.depth*Ot):ue=1,be=0,Ce=0,Re=0}x!==null?(xe=x.x,He=x.y,lt=x.z):(xe=0,He=0,lt=0);let et=Me.convert(H.format),ft=Me.convert(H.type),Ne;H.isData3DTexture?(le.setTexture3D(H,0),Ne=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(le.setTexture2DArray(H,0),Ne=F.TEXTURE_2D_ARRAY):(le.setTexture2D(H,0),Ne=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);let Yt=y.getParameter(F.UNPACK_ROW_LENGTH),_t=y.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=y.getParameter(F.UNPACK_SKIP_PIXELS),yn=y.getParameter(F.UNPACK_SKIP_ROWS),bn=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,be),y.pixelStorei(F.UNPACK_SKIP_ROWS,Ce),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Re);let ni=w.isDataArrayTexture||w.isData3DTexture,It=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let Ot=J.get(w),di=J.get(H),Ut=J.get(Ot.__renderTarget),qi=J.get(di.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Ut.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Yi=0;Yi<ue;Yi++)ni&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(w).__webglTexture,S,Re+Yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(H).__webglTexture,V,lt+Yi)),F.blitFramebuffer(be,Ce,Y,j,xe,He,Y,j,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(S!==0||w.isRenderTargetTexture||J.has(w)){let Ot=J.get(w),di=J.get(H);y.bindFramebuffer(F.READ_FRAMEBUFFER,U),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let Ut=0;Ut<ue;Ut++)ni?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.__webglTexture,S,Re+Ut):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ot.__webglTexture,S),It?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,di.__webglTexture,V,lt+Ut):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,di.__webglTexture,V),S!==0?F.blitFramebuffer(be,Ce,Y,j,xe,He,Y,j,F.COLOR_BUFFER_BIT,F.NEAREST):It?F.copyTexSubImage3D(Ne,V,xe,He,lt+Ut,be,Ce,Y,j):F.copyTexSubImage2D(Ne,V,xe,He,be,Ce,Y,j);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else It?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ne,V,xe,He,lt,Y,j,ue,et,ft,ct.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,V,xe,He,lt,Y,j,ue,et,ct.data):F.texSubImage3D(Ne,V,xe,He,lt,Y,j,ue,et,ft,ct):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,xe,He,Y,j,et,ft,ct.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,xe,He,ct.width,ct.height,et,ct.data):F.texSubImage2D(F.TEXTURE_2D,V,xe,He,Y,j,et,ft,ct);y.pixelStorei(F.UNPACK_ROW_LENGTH,Yt),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t),y.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),y.pixelStorei(F.UNPACK_SKIP_ROWS,yn),y.pixelStorei(F.UNPACK_SKIP_IMAGES,bn),V===0&&H.generateMipmaps&&F.generateMipmap(Ne),y.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&le.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?le.setTextureCube(w,0):w.isData3DTexture?le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?le.setTexture2DArray(w,0):le.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){q=0,K=0,pe=null,y.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vy=new Ls(-1,1,1,-1,0,1),dd=class extends Ft{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},Wy=new dd,ks=class{constructor(e){this._mesh=new rt(Wy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ch=class extends Zn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ks(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Io=class extends Zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},hh=class extends Zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var fa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ch(da),this.copyPass.material.blending=Kt,this.timer=new co}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Io!==void 0&&(a instanceof Io?n=!0:a instanceof hh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pa=class extends Zn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Lo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Lt},cameraProjectionMatrixInverse:{value:new Lt},cameraWorldMatrix:{value:new Lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Do={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},uh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Bp(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Xy(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ts(s,e,e);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}function Xy(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var No={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:fd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraProjectionMatrixInverse:{value:new Lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function fd(i,e,t){let n=qy(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function qy(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new B(Math.cos(r),Math.sin(r),a))}return n}var dh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,_=t-f,m,p;g>_?(m=1,p=0):(m=0,p=1);let v=g-m+h,R=_-p+h,b=g-1+2*h,E=_-1+2*h,A=l&255,P=c&255,M=this.perm[A+this.perm[P]]%12,T=this.perm[A+m+this.perm[P+p]]%12,I=this.perm[A+1+this.perm[P+1]]%12,L=.5-g*g-_*_;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[M],g,_));let O=.5-v*v-R*R;O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[T],v,R));let k=.5-b*b-E*E;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[I],b,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,_=h-g,m=u-g,p=d-g,v=e-_,R=t-m,b=n-p,E,A,P,M,T,I;v>=R?R>=b?(E=1,A=0,P=0,M=1,T=1,I=0):v>=b?(E=1,A=0,P=0,M=1,T=0,I=1):(E=0,A=0,P=1,M=1,T=0,I=1):R<b?(E=0,A=0,P=1,M=0,T=1,I=1):v<b?(E=0,A=1,P=0,M=0,T=1,I=1):(E=0,A=1,P=0,M=1,T=1,I=0);let L=v-E+f,O=R-A+f,k=b-P+f,U=v-M+2*f,W=R-T+2*f,q=b-I+2*f,K=v-1+3*f,pe=R-1+3*f,Z=b-1+3*f,ne=h&255,he=u&255,Pe=d&255,ve=this.perm[ne+this.perm[he+this.perm[Pe]]]%12,qe=this.perm[ne+E+this.perm[he+A+this.perm[Pe+P]]]%12,ee=this.perm[ne+M+this.perm[he+T+this.perm[Pe+I]]]%12,se=this.perm[ne+1+this.perm[he+1+this.perm[Pe+1]]]%12,D=.6-v*v-R*R-b*b;D<0?s=0:(D*=D,s=D*D*this._dot3(this.grad3[ve],v,R,b));let N=.6-L*L-O*O-k*k;N<0?r=0:(N*=N,r=N*N*this._dot3(this.grad3[qe],L,O,k));let $=.6-U*U-W*W-q*q;$<0?a=0:($*=$,a=$*$*this._dot3(this.grad3[ee],U,W,q));let re=.6-K*K-pe*pe-Z*Z;return re<0?o=0:(re*=re,o=re*re*this._dot3(this.grad3[se],K,pe,Z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,_=(e+t+n+s)*l,m=Math.floor(e+_),p=Math.floor(t+_),v=Math.floor(n+_),R=Math.floor(s+_),b=(m+p+v+R)*c,E=m-b,A=p-b,P=v-b,M=R-b,T=e-E,I=t-A,L=n-P,O=s-M,k=T>I?32:0,U=T>L?16:0,W=I>L?8:0,q=T>O?4:0,K=I>O?2:0,pe=L>O?1:0,Z=k+U+W+q+K+pe,ne=a[Z][0]>=3?1:0,he=a[Z][1]>=3?1:0,Pe=a[Z][2]>=3?1:0,ve=a[Z][3]>=3?1:0,qe=a[Z][0]>=2?1:0,ee=a[Z][1]>=2?1:0,se=a[Z][2]>=2?1:0,D=a[Z][3]>=2?1:0,N=a[Z][0]>=1?1:0,$=a[Z][1]>=1?1:0,re=a[Z][2]>=1?1:0,oe=a[Z][3]>=1?1:0,Se=T-ne+c,Ae=I-he+c,z=L-Pe+c,ae=O-ve+c,Q=T-qe+2*c,te=I-ee+2*c,de=L-se+2*c,ge=O-D+2*c,Te=T-N+3*c,Ie=I-$+3*c,Ye=L-re+3*c,F=O-oe+3*c,ht=T-1+4*c,ot=I-1+4*c,C=L-1+4*c,y=O-1+4*c,X=m&255,J=p&255,le=v&255,we=R&255,Le=o[X+o[J+o[le+o[we]]]]%32,ce=o[X+ne+o[J+he+o[le+Pe+o[we+ve]]]]%32,fe=o[X+qe+o[J+ee+o[le+se+o[we+D]]]]%32,Be=o[X+N+o[J+$+o[le+re+o[we+oe]]]]%32,Ze=o[X+1+o[J+1+o[le+1+o[we+1]]]]%32,Ue=.6-T*T-I*I-L*L-O*O;Ue<0?h=0:(Ue*=Ue,h=Ue*Ue*this._dot4(r[Le],T,I,L,O));let De=.6-Se*Se-Ae*Ae-z*z-ae*ae;De<0?u=0:(De*=De,u=De*De*this._dot4(r[ce],Se,Ae,z,ae));let Xe=.6-Q*Q-te*te-de*de-ge*ge;Xe<0?d=0:(Xe*=Xe,d=Xe*Xe*this._dot4(r[fe],Q,te,de,ge));let Qe=.6-Te*Te-Ie*Ie-Ye*Ye-F*F;Qe<0?f=0:(Qe*=Qe,f=Qe*Qe*this._dot4(r[Be],Te,Ie,Ye,F));let Ke=.6-ht*ht-ot*ot-C*C-y*y;return Ke<0?g=0:(Ke*=Ke,g=Ke*Ke*this._dot4(r[Ze],ht,ot,C,y)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var cs=class i extends Zn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Bp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:Qt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $t({defines:Object.assign({},Lo.defines),uniforms:ai.clone(Lo.uniforms),vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,blending:Kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ro,this.normalMaterial.blending=Kt,this.pdMaterial=new $t({defines:Object.assign({},No.defines),uniforms:ai.clone(No.uniforms),vertexShader:No.vertexShader,fragmentShader:No.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $t({defines:Object.assign({},Do.defines),uniforms:ai.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,blending:Kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $t({uniforms:ai.clone(da.uniforms),vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:uo,blendDst:hr,blendEquation:ri,blendSrcAlpha:ho,blendDstAlpha:hr,blendEquationAlpha:ri}),this.blendMaterial=new $t({uniforms:ai.clone(uh.uniforms),vertexShader:uh.vertexShader,fragmentShader:uh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:mc,blendSrc:uo,blendDst:hr,blendEquation:ri,blendSrcAlpha:ho,blendDstAlpha:hr,blendEquationAlpha:ri}),this._fsQuad=new ks(null),this._originalClearColor=new je,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Fi,this.depthTexture.format=ki,this.depthTexture.type=Fs,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:Zt,magFilter:Zt,type:Qt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=fd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new dh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ts(s,e,e,Nn,En);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}};cs.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Uo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ma=class extends Zn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ai.clone(Uo.uniforms),this.material=new na({name:Uo.name,uniforms:this.uniforms,vertexShader:Uo.vertexShader,fragmentShader:Uo.fragmentShader}),this._fsQuad=new ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===Nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===po?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===go&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Bo={};B0(Bo,{EGG_AHEAD:()=>fh,G:()=>gr,MOTOR:()=>Rt,PHI_CARRY:()=>ph,PHI_LOW:()=>oi,PHI_STOW:()=>Jn,R:()=>_e,SOUND:()=>pt,STOP_AT:()=>zs,SURF:()=>zp,WALLS:()=>li,WORLD:()=>Un,armSolve:()=>On,armTip:()=>mh,at:()=>fs,budget:()=>Vi,com:()=>ds,echo:()=>gh,envelope:()=>Fo,maxRangeOf:()=>Oo,motor:()=>pr,mu:()=>Hp,muPeak:()=>Cn,powerCurve:()=>Ei,runMission:()=>_h,sideStep:()=>mr,sonarRead:()=>xh,soundSpeed:()=>Gi,stepTest:()=>xr,supplyV:()=>Fn,tractive:()=>wi});var gr=9.80665,hs=(i,e,t)=>Math.min(t,Math.max(e,i)),us=Math.PI/180,_e={wheelR:.0325,bandT:.0013,track:.193,axleX:0,casterX:.125,mBase:.55,xBase:.035,mArm:.085,mEgg:.05,sensorX:.145,sensorY:.038,pivot:[-.045,.085],armLen:.24,armAttach:.05,servo:[.09,.04],horn:.05,rod:.135,gripLen:.085},Rt={Vbat:6,Vdrop:1.4,Rm:6,I0:.19,ke:.2326,etaG:.55,J:4e-4};Rt.tauF=Rt.etaG*Rt.ke*Rt.I0;Rt.w0=(Rt.Vbat-Rt.I0*Rt.Rm)/Rt.ke;function pr(i,e){let t=(i-Rt.ke*e)/Rt.Rm,n=Rt.etaG*Rt.ke*t-Math.sign(e||i)*Rt.tauF*(Math.abs(e)>.05||Math.abs(i)>.3?1:0);return{I:t,tau:n,Pel:i*t,Pmech:n*e}}var Fn=i=>i*(Rt.Vbat-Rt.Vdrop),zp={desk:{name:"Varnished desk",k:1},dusty:{name:"Dusty desk",k:.7},card:{name:"Paper on desk",k:.85}},Cn=(i,e)=>(i?1:.22)*zp[e].k,Hp=(i,e)=>e*Math.sin(1.5*Math.atan(10*i));function ds(i,e){let t=_e.pivot[0]+.6*_e.armLen*Math.cos(i),n=_e.pivot[0]+_e.armLen*Math.cos(i)+.5*_e.gripLen,s=e===!0?_e.mEgg:e||0,r=_e.mBase+_e.mArm+s,a=(_e.mBase*_e.xBase+_e.mArm*t+s*n)/r;return{m:r,x:a,drive:hs((_e.casterX-a)/_e.casterX,.05,1)}}function On(i){let e=[_e.servo[0]+_e.horn*Math.cos(i),_e.servo[1]+_e.horn*Math.sin(i)],t=_e.pivot,n=e[0]-t[0],s=e[1]-t[1],r=Math.hypot(n,s),a=_e.armAttach,o=_e.rod;if(r>a+o||r<Math.abs(o-a))return null;let l=(a*a-o*o+r*r)/(2*r),c=Math.sqrt(Math.max(0,a*a-l*l)),h=n/r,u=s/r,f=[[t[0]+l*h-c*u,t[1]+l*u+c*h],[t[0]+l*h+c*u,t[1]+l*u-c*h]].reduce((g,_)=>_[1]>g[1]?_:g);return{theta:Math.atan2(f[1]-t[1],f[0]-t[0]),A:f,H:e}}var zs=.108,fh=.072,Jn=74*us,ph=46*us,oi=18.4*us;function mh(i){return[_e.pivot[0]+_e.armLen*Math.cos(i),_e.pivot[1]+_e.armLen*Math.sin(i)]}var pt={f:4e4,cycles:8,beam:15*us,absDbPerM:1.3,minRange:.02,maxRange:4,ref:.01,thresh:25e-5},li={hard:{name:"Painted wall",R:.95,scatter:.08},card:{name:"Cardboard box",R:.6,scatter:.12},wood:{name:"Wooden board",R:.8,scatter:.1},cloth:{name:"Soft fabric",R:.2,scatter:.05}},Gi=i=>331.3+.606*i,kp=i=>Math.exp(-Math.pow(i/(pt.beam*1.7),2));function gh(i,e,t,n=1){let s=li[t],r=2*n*i,a=pt.ref/Math.max(r,pt.ref),o=Math.pow(10,-pt.absDbPerM*r/20),l=Math.pow(s.R,n)*Math.pow(.8,n-1),c=Math.pow(kp(0)*kp(2*e),n),h=s.scatter*Math.pow(Math.cos(e),2),u=Math.max(c*l,h*Math.pow(.5,n-1));return a*o*u}function Vi(i,e,t){let n=li[t],s=2*i,r=20*Math.log10(Math.max(s,pt.ref)/pt.ref),a=pt.absDbPerM*s,o=-20*Math.log10(n.R),l=-20*Math.log10(Math.max(Math.exp(-Math.pow(2*e/(pt.beam*1.7),2)),1e-4)),c=r+a+o+l,h=gh(i,e,t,1);return{spread:r,air:a,surf:o,aim:l,total:c,amp:h,detected:h>pt.thresh&&i>=pt.minRange&&i<=pt.maxRange}}function Fo(i,e,t,n=22,s=null){let r=Gi(n),a=480,o=[],l=[];for(let h=1;h<=3;h++)l.push({t:2*h*i/r,a:gh(i,e,t,h)});let c=s??Math.min(.03,Math.max(.006,l[1].t*1.25));for(let h=0;h<=a;h++){let u=c*h/a,d=.9*Math.exp(-u/9e-5)*(u<6e-4?1:.4);for(let f of l)d+=f.a*Math.exp(-Math.pow((u-f.t)/22e-5,2));o.push([u,d])}return{pts:o,echoes:l,tEnd:c,c:r}}function Oo(i){let e=.02,t=6;for(let n=0;n<40;n++){let s=(e+t)/2;gh(s,0,i,1)>pt.thresh?e=s:t=s}return e}function mr(i,e,t,n,s,r,a){let o=_e.wheelR+(i.bands?_e.bandT:0),l=4,c=r/l,h=0,u=0,d=0;for(let g=0;g<l;g++){let _=Math.max(Math.abs(i.w*o),Math.abs(i.v),.02);h=(i.w*o-i.v)/_,u=n*Hp(h,s),t?d=-Rt.etaG*Rt.ke*Rt.ke*i.w/Rt.Rm-Math.sign(i.w)*Rt.tauF*(Math.abs(i.w)>.05?1:0):d=pr(e,i.w).tau;let m=.03*n*(Math.abs(i.v)>.003?Math.sign(i.v):i.v/.003);i.w+=(d-u*o)/Rt.J*c,i.v+=(u-m)/a*c}i.slip=h,i.F=u,i.tau=d,i.Pm=t?0:Math.max(0,d*i.w);let f=t?{I:0,Pel:0}:pr(e,i.w);i.I=t?0:f.I,i.Pel=t?0:f.Pel,i.rEff=o}function xr({bands:i,surf:e,duty:t=1,drive:n=.72,T:s=1}){let a=.5*n*(_e.mBase+_e.mArm)*9.80665,o=Cn(i,e),l=.5*(_e.mBase+_e.mArm),c={w:0,v:0,bands:i},h={t:[],v:[],wr:[],slip:[],F:[]},u=Fn(t);for(let d=0;d*5e-4<=s;d++)mr(c,u,!1,a,o,5e-4,l),d%10===0&&(h.t.push(d*5e-4),h.v.push(c.v),h.wr.push(c.w*c.rEff),h.slip.push(c.slip),h.F.push(2*c.F));return h}function wi({bands:i,surf:e,duty:t=1,drive:n=.72}){let s=n*(_e.mBase+_e.mArm)*9.80665,r=Cn(i,e),a=_e.wheelR+(i?_e.bandT:0),o=Fn(t),l=[];for(let c=0;c<=60;c++){let h=c/60*.8,u=h/a,d=pr(o,u);l.push([h,Math.max(0,2*d.tau/a)])}return{pts:l,limit:r*s,peak:r}}function Ei(i,e=!0){let t=Fn(i),n=_e.wheelR+(e?_e.bandT:0),s=[],r=(t-Rt.I0*Rt.Rm)/Rt.ke;for(let a=0;a<=80;a++){let o=r*a/80,l=pr(t,o);s.push({rpm:o*60/(2*Math.PI),kmh:o*n*3.6,tau:l.tau,I:l.I,Pel:l.Pel,Pm:Math.max(0,l.Pmech),eff:l.Pel>.01?Math.max(0,l.Pmech/l.Pel):0})}return{V:t,w0:r,pts:s}}var Un={crate:{x:.17,z:0,hx:.04,hz:.04,h:.025},tray:{x:-.102,z:.5,hx:.04,hz:.04,h:.025},wall:{x:1.1},start:{x:-.55,z:0}};function Yy(i,e,t,n,s){let r=0,a=1e9;for(let[o,l,c,h]of[[i,t,s.x-s.hx,s.x+s.hx],[e,n,s.z-s.hz,s.z+s.hz]])if(Math.abs(l)<1e-9){if(o<c||o>h)return 1/0}else{let u=(c-o)/l,d=(h-o)/l;if(u>d&&([u,d]=[d,u]),r=Math.max(r,u),a=Math.min(a,d),r>a)return 1/0}return r}function xh(i,e,t,n=[],s=!0){let r=i+Math.cos(t)*_e.sensorX,a=e+Math.sin(t)*_e.sensorX,o=pt.maxRange,l="none";for(let c=-2;c<=2;c++){let h=t+c*6*us,u=Math.cos(h),d=Math.sin(h);for(let[f,g]of[...s?[["crate",Un.crate],["tray",Un.tray]]:[],...n]){let _=Yy(r,a,u,d,g);_<o&&(o=_,l=f)}if(u>1e-6){let f=(Un.wall.x-r)/u;f>0&&f<o&&(o=f,l="wall")}}return{d:o,what:l}}function _h({bands:i=!0,surf:e="desk",duty:t=.7}={}){let r=Cn(i,e),a={bands:i,w:0,v:0},o={bands:i,w:0,v:0},l=Un.start.x,c=Un.start.z,h=0,u=0,d=0,f=0,g=Jn,_=0,m=!1,p=0,v=0,R=0,b=0,E=[0,0],A=!1,P={phi:Jn,rate:60*us},M={v:0,rate:90*us},T={dt:.001*10,n:0,t:[],x:[],z:[],yaw:[],wl:[],wr:[],phi:[],jaw:[],held:[],vL:[],vR:[],slipL:[],slipR:[],sonar:[],what:[],Pel:[],I:[],drive:[],phase:[],eggX:[],eggZ:[],eggY:[],energy:[],Pm:[],w:[]},I=["IDLE","APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","CARRY","BRAKE","PLACE","RETREAT","DONE"],L=0,O=q=>q===1||q===7?t:q===6?.6:q===10?-.5:0,k=q=>{p=q,v=0},U={x:Un.crate.x,z:Un.crate.z,y:Un.crate.h+.0225},W=60;for(let q=0;f<W;q++,f=q*.001){v+=.001;let K=xh(l,c,h),pe=0,Z=0,ne=!1;switch(p){case 0:v>.9&&k(1);break;case 1:{let N=hs(v/.35,0,1);pe=Z=t*N,K.d<=zs&&k(2);break}case 2:ne=!0,(Math.abs(a.v)+Math.abs(o.v)<.006||v>1.2)&&(k(3),P.phi=oi,M.v=1);break;case 3:ne=!0,v>1.5&&k(4);break;case 4:ne=!0,v>.35&&(M.v=0),v>1.1&&(m=!0,k(5),P.phi=ph);break;case 5:ne=!0,v>1.3&&(k(6),b=h);break;case 6:{let N=b+90*us-h,$=(o.v-a.v)/_e.track,re=hs(3*N-.4*$,-.6,.6);Math.abs(re)<.35&&(re=.35*Math.sign(N)),Z=re*hs(v/.25,0,1),pe=-Z,Math.abs(N)<3*us&&Math.abs($)<.35&&k(12);break}case 12:ne=!0,v>.5&&k(7);break;case 7:{let N=hs(v/.35,0,1);pe=Z=t*N,K.d<=zs&&k(8);break}case 8:ne=!0,(Math.abs(a.v)+Math.abs(o.v)<.006||v>1.2)&&(k(9),P.phi=oi);break;case 9:ne=!0,v>1.5&&v<1.51&&(M.v=1),v>1.5&&!A&&(m=!1,A=!0),v>2.4&&(P.phi=Jn,M.v=0,k(10),E=[l,c]);break;case 10:{pe=Z=-.5*hs(v/.2,0,1),Math.hypot(l-E[0],c-E[1])>=.14&&k(11);break}case 11:ne=!0,v>3&&(q=1e9);break;default:break}g+=hs(P.phi-g,-P.rate*.001,P.rate*.001),_+=hs(M.v-_,-M.rate*.001/.6,M.rate*.001/.6);let he=On(g),Pe=he?he.theta:1,ve=ds(Pe,m),qe=.5*ve.drive*ve.m*9.80665,ee=.5*ve.m;mr(a,ne?0:Fn(pe),ne,qe,r,.001,ee),mr(o,ne?0:Fn(Z),ne,qe,r,.001,ee);let se=.5*(a.v+o.v),D=(o.v-a.v)/_e.track;if(h+=D*.001,l+=se*Math.cos(h)*.001,c+=se*Math.sin(h)*.001,u+=a.w*.001,d+=o.w*.001,L+=(a.Pel+o.Pel+.12*Rt.Vbat)*.001,m){let N=mh(Pe),$=N[0]+fh,re=N[1]-.012;U={x:l+Math.cos(h)*$,z:c+Math.sin(h)*$,y:re}}else A&&(U={x:U.x,z:U.z,y:Un.tray.h+.006+.0225});q%10===0&&(T.t.push(f),T.x.push(l),T.z.push(c),T.yaw.push(h),T.wl.push(u),T.wr.push(d),T.phi.push(g),T.jaw.push(_),T.held.push(m?1:0),T.vL.push(a.v),T.vR.push(o.v),T.slipL.push(a.slip||0),T.slipR.push(o.slip||0),T.sonar.push(K.d),T.what.push(K.what),T.Pel.push(a.Pel+o.Pel),T.I.push(a.I+o.I),T.drive.push(ve.drive),T.phase.push(p===12?6:p),T.eggX.push(U.x),T.eggZ.push(U.z),T.eggY.push(U.y),T.energy.push(L),T.Pm.push(a.Pm+o.Pm),T.w.push((Math.abs(a.w)+Math.abs(o.w))/2))}return T.n=T.t.length,T.duration=T.t[T.n-1],T.names=I,T}function fs(i,e){let t=hs(e/i.dt,0,i.n-1),n=Math.floor(t),s=Math.min(n+1,i.n-1),r=t-n,a={i:n};for(let o of["t","x","z","yaw","wl","wr","phi","jaw","vL","vR","slipL","slipR","sonar","Pel","I","drive","eggX","eggZ","eggY","energy","Pm","w"])a[o]=i[o][n]+(i[o][s]-i[o][n])*r;return a.held=i.held[n],a.phase=i.phase[n],a.what=i.what[n],a}var Hs=(i,e,t)=>Math.min(t,Math.max(e,i)),ga=Math.PI/180,at={pantryX:.6,kitchenX:-.62,zs:[-.5,-.25,0,.25,.5],pad:{hx:.04,hz:.04,h:.025},plateT:.004,start:{x:-.05,z:-.5},retreat:.14},xn=[{id:"eggs",name:"Eggs",full:"Egg carton (2 eggs)",w:.034,m:.045},{id:"salt",name:"Salt",full:"Salt shaker",w:.036,m:.055},{id:"spice",name:"Spice",full:"Spice jar",w:.038,m:.05},{id:"sauce",name:"Sauce",full:"Sauce bottle",w:.04,m:.08},{id:"glass",name:"Glass",full:"Drinking glass",w:.042,m:.06}],$y=i=>Math.asin(Hs((i/2-.0165)/.036,0,1))/(28*ga),Zy=.0225,ut={IDLE:0,APPROACH:1,BRAKE:2,REACH:3,GRIP:4,LIFT:5,TURN_CARRY:6,SETTLE_C:7,CARRY:8,BRAKE_C:9,PLACE:10,RETREAT:11,TURN_SHIFT:12,SETTLE_T:13,SHIFT:14,SETTLE_S:15,TURN_PANTRY:16,SETTLE_P:17,DONE:18};var Gp=["APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","CARRY","PLACE","RETREAT","SHIFT"],Vp=[-1,0,1,2,3,4,5,5,6,6,7,8,9,9,9,9,9,9,-1],pd=[];at.zs.forEach((i,e)=>{pd.push(["pad",{x:at.pantryX,z:i,hx:at.pad.hx,hz:at.pad.hz}]),pd.push(["spot",{x:at.kitchenX,z:i,hx:at.pad.hx,hz:at.pad.hz}])});var vh=class{constructor({duty:e=.7,bands:t=!0,surf:n="desk"}={}){this.duty=e,this.bands=t,this.surf=n,this.peak=Cn(t,n),this.dt=.001,this.stride=10,this.reset()}reset(){this.L={bands:this.bands,w:0,v:0},this.Rr={bands:this.bands,w:0,v:0},Object.assign(this,{x:at.start.x,z:at.start.z,yaw:0,wl:0,wr:0,t:0,phi:Jn,jaw:0,held:!1,phase:ut.IDLE,phaseT:0,item:0,yawRef:0,startPos:[0,0],energy:0,armTarget:Jn,jawTarget:0,tick:0,theta:0,stopped:!1}),this.g=0,this.status="READY",this.goal=0,this.items=xn.map((e,t)=>({state:0,x:at.pantryX,z:at.zs[t],y:at.pad.h,yaw:0})),this.sn={d:4,what:"none"},this.Pel=0,this.I=0,this.Pm=0,this.w=0,this.drive=.7,this.slipL=0,this.slipR=0,this.rec={n:0,dt:this.dt*this.stride};for(let e of["t","x","z","yaw","wl","wr","phi","jaw","held","vL","vR","slipL","slipR","sonar","Pel","I","drive","phase","energy","Pm","w","item","g"])this.rec[e]=[];this.next(ut.IDLE)}next(e){this.phase=e,this.phaseT=0}start(){(this.status==="DONE"||this.status==="STOPPED")&&this.reset(),this.goal=1,this.status="RUNNING"}pause(){this.status==="RUNNING"&&(this.goal=0,this.status="PAUSING")}resume(){(this.status==="PAUSING"||this.status==="PAUSED")&&(this.goal=1,this.status="RUNNING")}stop(){this.status!=="READY"&&this.status!=="DONE"&&this.status!=="STOPPED"&&(this.goal=0,this.status="STOPPING")}get active(){return this.g>0||this.goal>0}get done(){return this.phase===ut.DONE}get ge(){return this.g*this.g*(3-2*this.g)}step(){let e=this.dt,t=this.goal>this.g?1/.6:this.status==="STOPPING"?1/.45:1/.8;if(this.g+=Hs(this.goal-this.g,-t*e,t*e),this.g<=0&&this.goal===0&&(this.status==="PAUSING"&&(this.status="PAUSED"),this.status==="STOPPING"&&(this.status="STOPPED")),this.g<=0&&this.goal===0)return!1;let n=this.ge,s=e*n;this.t+=e,this.phaseT+=s;let r=this.L,a=this.Rr,o=this.duty,l=this.sn=xh(this.x,this.z,this.yaw,pd,!1),c=xn[this.item],h=0,u=0,d=!1,f=T=>Hs(this.phaseT/T,0,1),g=()=>{let T=(a.v-r.v)/_e.track,I=Hs(2.5*(this.yawRef-this.yaw)-.35*T,-.15,.15);u+=I,h-=I},_=T=>{let I=this.yawRef-this.yaw,L=(a.v-r.v)/_e.track,O=Hs(3*I-.4*L,-.6,.6);Math.abs(O)<.35&&(O=.35*Math.sign(I)),u=O*f(.25),h=-u,Math.abs(I)<3*ga&&Math.abs(L)<.35&&this.next(T)},m=()=>Math.abs(r.v)+Math.abs(a.v)<.006||this.phaseT>1.2;switch(this.phase){case ut.IDLE:this.phaseT>.9&&this.next(ut.APPROACH);break;case ut.APPROACH:h=u=o*f(.35),g(),l.d<=zs&&this.next(ut.BRAKE);break;case ut.BRAKE:d=!0,m()&&(this.next(ut.REACH),this.armTarget=oi,this.jawTarget=1);break;case ut.REACH:d=!0,this.phaseT>1.5&&this.next(ut.GRIP);break;case ut.GRIP:d=!0,this.phaseT>.35&&(this.jawTarget=$y(c.w)),this.phaseT>1.1&&(this.held=!0,this.items[this.item].state=1,this.next(ut.LIFT),this.armTarget=ph);break;case ut.LIFT:d=!0,this.phaseT>1.3&&(this.next(ut.TURN_CARRY),this.yawRef+=Math.PI);break;case ut.TURN_CARRY:_(ut.SETTLE_C);break;case ut.SETTLE_C:d=!0,this.phaseT>.5&&this.next(ut.CARRY);break;case ut.CARRY:h=u=o*f(.35),g(),l.d<=zs&&this.next(ut.BRAKE_C);break;case ut.BRAKE_C:d=!0,m()&&(this.next(ut.PLACE),this.armTarget=oi);break;case ut.PLACE:if(d=!0,this.phaseT>1.5&&this.held){this.jawTarget=1,this.held=!1;let T=this.items[this.item];T.state=2,T.y=at.pad.h+at.plateT}this.phaseT>2.4&&(this.armTarget=Jn,this.jawTarget=0,this.next(ut.RETREAT),this.startPos=[this.x,this.z]);break;case ut.RETREAT:h=u=-.5*f(.2),g(),Math.hypot(this.x-this.startPos[0],this.z-this.startPos[1])>=at.retreat&&(this.item===xn.length-1?this.next(ut.DONE):(this.next(ut.TURN_SHIFT),this.yawRef-=Math.PI/2));break;case ut.TURN_SHIFT:_(ut.SETTLE_T);break;case ut.SETTLE_T:d=!0,this.phaseT>.4&&this.next(ut.SHIFT);break;case ut.SHIFT:{let T=at.zs[this.item+1]-this.z;h=u=Math.max(.4,o*Hs(T/.12,0,1))*f(.3),g(),T<.004&&this.next(ut.SETTLE_S);break}case ut.SETTLE_S:d=!0,m()&&(this.next(ut.TURN_PANTRY),this.yawRef-=Math.PI/2);break;case ut.TURN_PANTRY:_(ut.SETTLE_P);break;case ut.SETTLE_P:d=!0,this.phaseT>.5&&(this.item++,this.next(ut.APPROACH));break;case ut.DONE:d=!0;break;default:break}let p=n;h*=p,u*=p,this.phi+=Hs(this.armTarget-this.phi,-60*ga*s,60*ga*s),this.jaw+=Hs(this.jawTarget-this.jaw,-90*ga*s/.6,90*ga*s/.6);let v=On(this.phi);this.theta=v?v.theta:1;let R=this.held?c.m:0,b=ds(this.theta,R),E=.5*b.drive*b.m*9.80665,A=.5*b.m;mr(r,d?0:Fn(h),d,E,this.peak,e,A),mr(a,d?0:Fn(u),d,E,this.peak,e,A);let P=.5*(r.v+a.v),M=(a.v-r.v)/_e.track;if(this.yaw+=M*e,this.x+=P*Math.cos(this.yaw)*e,this.z+=P*Math.sin(this.yaw)*e,this.wl+=r.w*e,this.wr+=a.w*e,this.Pel=r.Pel+a.Pel,this.I=r.I+a.I,this.Pm=r.Pm+a.Pm,this.w=(Math.abs(r.w)+Math.abs(a.w))/2,this.drive=b.drive,this.slipL=r.slip||0,this.slipR=a.slip||0,this.energy+=(this.Pel+.12*Rt.Vbat)*e,this.held){let T=mh(this.theta),I=T[0]+.072,L=this.items[this.item];L.x=this.x+Math.cos(this.yaw)*I,L.z=this.z+Math.sin(this.yaw)*I,L.y=T[1]-.012-Zy,L.yaw=this.yaw}return this.tick++%this.stride===0&&this.record(),this.phase===ut.DONE&&this.phaseT>2&&(this.goal=0,this.status="DONE",this.g=0),!0}record(){let e=this.rec;e.t.push(this.t),e.x.push(this.x),e.z.push(this.z),e.yaw.push(this.yaw),e.wl.push(this.wl),e.wr.push(this.wr),e.phi.push(this.phi),e.jaw.push(this.jaw),e.held.push(this.held?1:0),e.vL.push(this.L.v),e.vR.push(this.Rr.v),e.slipL.push(this.slipL),e.slipR.push(this.slipR),e.sonar.push(this.sn.d),e.Pel.push(this.Pel),e.I.push(this.I),e.drive.push(this.drive),e.phase.push(this.phase),e.energy.push(this.energy),e.Pm.push(this.Pm),e.w.push(this.w),e.item.push(this.item),e.g.push(this.g),e.n++}};var ko=new B;function ci(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ko.copy(e),ko[n]=0,ko.normalize();let c=.5*a/(a+o),h=1-ko.angleTo(i)/l;return Math.sign(ko[t])===1?h*c:o/(a+o)+c+c*(1-h)}var hi=class i extends vt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new B,c=new B,h=new B(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new B,m=.5/a;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[v+0]=ci(_,c,"z","y",r,n),f[v+1]=1-ci(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[v+0]=1-ci(_,c,"z","y",r,n),f[v+1]=1-ci(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[v+0]=1-ci(_,c,"x","z",r,e),f[v+1]=ci(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-ci(_,c,"x","z",r,e),f[v+1]=1-ci(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-ci(_,c,"x","y",r,e),f[v+1]=1-ci(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[v+0]=ci(_,c,"x","y",r,e),f[v+1]=1-ci(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Xp(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ft,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Wp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let g=Wp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Wp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ln(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Ct=B,nt={yellow:"#f2b400",black:"#101115",teal:"#17877d",blue:"#2563eb",red:"#b3232a",ard:"#0b66a6",silver:"#cfd4dc",gold:"#d6a62a",mdf:"#b98e5c",band:"#c9923f",tyre:"#0e0f12",white:"#ece9e2",steel:"#aab0b8",alu:"#2a2c31"};function vr(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Ui(s);return n.srgb!==!1&&(r.colorSpace=Gt),r.anisotropy=8,n.repeat&&(r.wrapS=r.wrapT=wn,r.repeat.set(...n.repeat)),r}var md=7,_n=()=>(md=md*16807%2147483647,md/2147483647),Ho=vr(256,256,(i,e,t)=>{i.fillStyle="#808080",i.fillRect(0,0,e,t);for(let n=0;n<14e3;n++){let s=90+_n()*80;i.fillStyle=`rgba(${s},${s},${s},0.5)`,i.fillRect(_n()*e,_n()*t,1.5,1.5)}},{srgb:!1,repeat:[4,4]}),Jy=vr(64,256,(i,e,t)=>{for(let n=0;n<t;n+=4)i.fillStyle=n%8?"#9a9a9a":"#6e6e6e",i.fillRect(0,n,e,4)},{srgb:!1}),Ky=vr(128,64,(i,e,t)=>{i.fillStyle="#777",i.fillRect(0,0,e,t),i.strokeStyle="#bbb",i.lineWidth=1.5;for(let n=-t;n<e+t;n+=6)i.beginPath(),i.moveTo(n,0),i.lineTo(n+t,t),i.stroke(),i.beginPath(),i.moveTo(n+t,0),i.lineTo(n,t),i.stroke()},{srgb:!1,repeat:[6,1]}),qp=vr(256,128,(i,e,t)=>{i.fillStyle=nt.mdf,i.fillRect(0,0,e,t);for(let n=0;n<400;n++)i.fillStyle=`rgba(70,45,20,${_n()*.12})`,i.fillRect(_n()*e,_n()*t,20+_n()*60,1);for(let n=0;n<3e3;n++)i.fillStyle=`rgba(255,235,200,${_n()*.05})`,i.fillRect(_n()*e,_n()*t,2,2)});function gd(i,e,t,n,s={}){return vr(Math.round(i*10),Math.round(e*10),(a,o,l)=>{a.fillStyle=t,a.fillRect(0,0,o,l),a.strokeStyle=s.trace||"rgba(255,255,255,0.07)",a.lineWidth=3,a.lineCap="round",a.lineJoin="round";for(let c=0;c<90;c++){let h=_n()*o,u=_n()*l;a.beginPath(),a.moveTo(h,u);for(let d=0;d<3;d++)_n()<.5?h+=(_n()-.5)*220:u+=(_n()-.5)*220,a.lineTo(h,u);a.stroke()}a.fillStyle="rgba(214,170,90,0.55)";for(let c=0;c<160;c++)a.beginPath(),a.arc(_n()*o,_n()*l,2.4,0,7),a.fill();a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.textBaseline="middle",n(a,10,o,l,{text:(c,h,u,d=22,f="left",g=0)=>{a.save(),a.translate(h*10,u*10),a.rotate(g),a.font=`600 ${d}px "JetBrains Mono", monospace`,a.textAlign=f,a.fillStyle="#fff",a.fillText(c,0,0),a.restore()},hole:(c,h,u=1.6)=>{a.fillStyle="#d6aa5a",a.beginPath(),a.arc(c*10,h*10,(u+.9)*10,0,7),a.fill(),a.fillStyle="#05060a",a.beginPath(),a.arc(c*10,h*10,u*10,0,7),a.fill()},box:(c,h,u,d)=>{a.strokeStyle="#fff",a.lineWidth=2.5,a.strokeRect(c*10,h*10,u*10,d*10)}})},s)}var xd=new Map;function zo(i,e={}){let t=i+"|"+[e.r,e.m,e.cc,e.ccr,e.env,e.bump?.uuid,e.bs,e.map?.uuid,e.sheen,e.sheenColor].join(",");if(xd.has(t))return xd.get(t);let n=new Yn({color:i,roughness:e.r??.5,metalness:e.m??0,envMapIntensity:e.env??1,clearcoat:e.cc??0,clearcoatRoughness:e.ccr??.2,map:e.map??null,bumpMap:e.bump??null,bumpScale:e.bs??.6,sheen:e.sheen??0,sheenRoughness:.6,sheenColor:new je(e.sheenColor??"#ffffff"),emissive:0});return xd.set(t,n),n}var ke={yellow:{r:.42,cc:.5,ccr:.18,bump:Ho,bs:.35},teal:{r:.5,cc:.15,ccr:.35,bump:Jy,bs:.9},acrylic:{r:.2,cc:.8,ccr:.08,env:.75},blackPlastic:{r:.55,cc:.25,ccr:.3,bump:Ho,bs:.5},chip:{r:.45,cc:.2,bump:Ho,bs:.3},steel:{r:.28,m:1,env:1.2},zinc:{r:.4,m:.9,env:1},brass:{r:.3,m:1,env:1.3},gold:{r:.22,m:1,env:1.3},rubber:{r:.88,bump:Ho,bs:1.2},pvc:{r:.32,cc:.5,ccr:.2},alu:{r:.38,m:.85,env:1}},Zp=3,Gs=!1,mt=(i,e,t,n=.0015)=>new hi(i,e,t,Zp,Math.min(n,i/2.2,e/2.2,t/2.2)),yt=(i,e,t=28)=>new gn(i,i,e,Gs?Math.max(10,Math.round(t*.6)):t),_d=(i,e)=>new gn(i,i,e,6),jy=new Lt,Qy=new si,e1=new vi;function $e(i,e=[0,0,0],t=[0,0,0],n=[1,1,1]){let s=i.index?i.toNonIndexed():i;return s.applyMatrix4(jy.compose(new Ct(...e),Qy.setFromEuler(e1.set(...t)),new Ct(...n))),s}var t1=i=>Xp(i.map(e=>e.index?e.toNonIndexed():e),!1),Yp=(i,e,t,n,s,r)=>{let a=Math.min(r??Math.min(n,s)/2.1,n/2.05,s/2.05);i.moveTo(e-n/2+a,t-s/2),i.lineTo(e+n/2-a,t-s/2),i.absarc(e+n/2-a,t-s/2+a,a,-Math.PI/2,0),i.lineTo(e+n/2,t+s/2-a),i.absarc(e+n/2-a,t+s/2-a,a,0,Math.PI/2),i.lineTo(e-n/2+a,t+s/2),i.absarc(e-n/2+a,t+s/2-a,a,Math.PI/2,Math.PI),i.lineTo(e-n/2,t-s/2+a),i.absarc(e-n/2+a,t-s/2+a,a,Math.PI,Math.PI*1.5)};function $p(i,e,t,n=[],s=[],r=.005){let a=new As;Yp(a,0,0,i,e,r);for(let[l,c,h]of n){let u=new Bi;u.absarc(l,-c,h,0,Math.PI*2,!0),a.holes.push(u)}for(let[l,c,h,u]of s){let d=new Bi;Yp(d,l,-c,h,u),a.holes.push(d)}let o=new or(a,{depth:t,bevelEnabled:!0,bevelSize:3e-4,bevelThickness:3e-4,bevelSegments:1,curveSegments:10});return o.rotateX(-Math.PI/2),o}function _r(i,e,t,n=0,s=.0022){let r=new As,a=e/2,o=i/2;r.moveTo(-o+a,-a),r.lineTo(o-a,-a),r.absarc(o-a,0,a,-Math.PI/2,Math.PI/2),r.lineTo(-o+a,a),r.absarc(-o+a,0,a,Math.PI/2,Math.PI*1.5);for(let c=0;c<n;c++){let h=-o+a+c*((i-e)/Math.max(n-1,1)),u=new Bi;u.absarc(h,0,s,0,Math.PI*2,!0),r.holes.push(u)}let l=new or(r,{depth:t,bevelEnabled:!0,bevelSize:2e-4,bevelThickness:2e-4,bevelSegments:1,curveSegments:12});return l.translate(0,0,-t/2),l}function yh(i={}){Gs=!!i.lite,Zp=Gs?1:3;let e=new zt,t=[],n={},s=[];function r(ee,se,D,N,$,re){let oe=new zt;oe.position.copy(D),e.add(oe);let Se={id:ee,name:se,group:oe,base:D.clone(),explode:new Ct(...N),a:$,b:re,mats:[],meshes:[]};return t.push(Se),n[ee]=Se,Se}function a(ee,se,D,N=[0,0,0],$={},re=null,oe=null){let Se=oe||zo(D,$),Ae=Array.isArray(Se)?Se.map(ae=>ae.clone()):Se.clone();(Array.isArray(Ae)?Ae:[Ae]).forEach(ae=>ee.mats.push(ae));let z=new rt(se,Ae);return z.position.set(...N),$.rot&&z.rotation.set(...$.rot),z.castShadow=!0,z.receiveShadow=!0,z.userData.part=ee.id,(re||ee.group).add(z),ee.meshes.push(z),s.push(z),z}let o=(ee,se,D,N={},$=null)=>a(ee,t1(se),D,[0,0,0],N,$),l=(ee,se=[0,0,0])=>{let D=new zt;return D.position.set(...se),ee.group.add(D),D},c={"y+":[[0,0,0],[0,1,0]],"y-":[[Math.PI,0,0],[0,-1,0]],"z+":[[Math.PI/2,0,0],[0,0,1]],"z-":[[-Math.PI/2,0,0],[0,0,-1]],"x+":[[0,0,-Math.PI/2],[1,0,0]],"x-":[[0,0,Math.PI/2],[-1,0,0]]};function h(ee,se,D=.0026){let N=[],$=[];for(let[oe,Se,Ae,z="y+"]of se){let[ae,Q]=c[z],te=ge=>[oe+Q[0]*ge,Se+Q[1]*ge,Ae+Q[2]*ge];N.push($e(yt(D,.0017,14),te(0),ae),$e(new un(D*.95,14,6,0,Math.PI*2,0,Math.PI/2),te(.0017/2),ae,[1,.55,1]));let de=te(.0017/2+D*.52);$.push($e(new vt(D*1.3,4e-4,4e-4),de,ae),$e(new vt(4e-4,4e-4,D*1.3),de,ae))}o(ee,N,nt.steel,ke.zinc),o(ee,$,"#17181c",{r:.7})}let u=(ee,se,D,N)=>[$e(_d(.0035,N),[ee,se,D]),$e(yt(.0016,N+.006,10),[ee,se,D])],d=.0965,f=.035,g=r("base","Base plate",new Ct(0,0,0),[0,0,0],0,1);{let ee=[],se=[];for(let N of[-.04,.115])for(let $ of[-.048,.048])ee.push([N-f,$,.0017]);for(let N of[-.012,.012])ee.push([.115-f+.008,N,.0013]);se.push([-.02-f,-.036,.024,.006],[-.02-f,.036,.024,.006],[.045-f,0,.04,.008],[.098-f,0,.012,.022]),a(g,$p(.2,.116,.003,ee,se,.007),nt.black,[f,.0285,0],ke.acrylic);let D=[];for(let N of[-.04,.115])for(let $ of[-.048,.048])D.push($e(_d(.0035,.0026),[N,.027,$])),D.push($e(yt(.0058,7e-4,18),[N,.0283,$]));o(g,D,nt.steel,ke.zinc)}let _=r("caster","Ball caster",new Ct(0,0,0),[.06,.05,0],.62,.92);a(_,new un(.0112,40,24),nt.steel,[.115,.0125,0],ke.steel),o(_,[$e(yt(.0105,.004,30),[.115,.0178,0]),$e(mt(.026,.0035,.026,.0035),[.115,.0231,0])],"#1e2025",ke.blackPlastic),h(_,[[.1245,.0251,.0095,"y+"],[.1055,.0251,.0095,"y+"],[.1245,.0251,-.0095,"y+"],[.1055,.0251,-.0095,"y+"]],.002);let m=r("deck","Electronics deck",new Ct(0,0,0),[0,.12,0],.46,.82);{let se=[],D=[];for(let Ae of[-.04,.115])for(let z of[-.048,.048])se.push([Ae-.0375,z,.0017]);let N=(Ae,z)=>[.04+(Ae-34.3)/1e3-.0375,-.034+(z-26.7)/1e3,.0016],$=(Ae,z)=>[.085+(Ae-21.5)/1e3-.0375,.034+(z-21.5)/1e3,.0016];se.push(N(14,2.5),N(15.3,50.7),N(66.1,7.6),N(66.1,35.5),$(3,3),$(40,3),$(3,40),$(40,40)),D.push([.062-.0375,0,.1,.014]),a(m,$p(.175,.116,.003,se,D,.007),nt.black,[.0375,.0615,0],ke.acrylic);let re=[];for(let Ae of[-.04,.115])for(let z of[-.048,.048])re.push(...u(Ae,.0465,z,.03));o(m,re,nt.steel,ke.alu),h(m,[[-.04,.0648,-.048],[-.04,.0648,.048],[.115,.0648,-.048],[.115,.0648,.048]]);for(let Ae of[-.0295,.0295])a(m,_r(.068,.017,.003,3,.0022),nt.yellow,[-.045,.0645+.034,Ae],{...ke.yellow,rot:[0,0,Math.PI/2]});let oe=[],Se=[];for(let Ae of[_e.pivot[1],_e.pivot[1]+.035]){oe.push($e(yt(.0022,.066,14),[-.045,Ae,0],[Math.PI/2,0,0]));for(let z of[-.0335,.0335])Se.push($e(new yi(.0034,6e-4,8,18),[-.045,Ae,z]))}o(m,oe,nt.steel,ke.steel),o(m,Se,nt.steel,ke.zinc),h(m,[[-.045-0,.0645+.0095,-.031,"z-"],[-.045,.0645+.0095,.031,"z+"],[-.045,.0645+.0595,-.031,"z-"],[-.045,.0645+.0595,.031,"z+"]].filter((Ae,z)=>z<2),.0021)}let p=r("battery","Battery pack (4 x AA)",new Ct(0,0,0),[-.12,.05,0],.5,.82);{o(p,[$e(mt(.066,.0035,.06,.002),[-.03,.0395-.0062,0]),$e(mt(.0035,.0165,.06,.0012),[-.03-.0313,.0395+2e-4,0]),$e(mt(.0035,.0165,.06,.0012),[-.03+.0313,.0395+2e-4,0]),$e(mt(.066,.0165,.003,.001),[-.03,.0395+2e-4,-.0285]),$e(mt(.066,.0165,.003,.001),[-.03,.0395+2e-4,.0285]),...[-.0145,0,.0145].map(N=>$e(mt(.06,.012,.0014,5e-4),[-.03,.0395+5e-4,N]))],"#17181c",ke.blackPlastic);for(let N=0;N<4;N++){let $=(N-1.5)*.0145,re=N%2?-1:1;a(p,yt(.00705,.049,28),"#1b1c20",[-.03,.0395+.0016,$],{...ke.pvc,rot:[0,0,Math.PI/2]}),a(p,yt(.00708,.0125,28),"#c47a2c",[-.03-.012*re,.0395+.0016,$],{r:.35,m:.5,rot:[0,0,Math.PI/2]}),a(p,yt(.0032,.001,14),nt.steel,[-.03+.025*re,.0395+.0016,$],{...ke.steel,rot:[0,0,Math.PI/2]})}o(p,[-.0218,0,.0218].map(N=>$e(yt(.0036,.0016,12),[-.03+.0297,.0395+.0016,N],[0,0,Math.PI/2])),nt.steel,ke.steel);let D=(N,$)=>a(p,new ss(new Oi([new Ct(-.03-.0315,.0395+.002,$),new Ct(-.03-.04,.0395+.002,$*.8),new Ct(-.03-.046,.0395+.012,$*.4)]),12,9e-4,8),N,[0,0,0],ke.pvc);D("#c62a2a",.0225),D("#161616",-.0225)}for(let ee of[-1,1]){let se=ee<0?"L":"R",D=r("motor"+se,`${ee<0?"Left":"Right"} drive motor (TT 1:48)`,new Ct(0,0,0),[0,0,ee*.12],.6,.9),N=ee*.069,$=.0325,re=ee>0?"z+":"z-";a(D,mt(.062,.0225,.0225,.004),"#f1c027",[.002,$,N],ke.yellow),a(D,mt(.064,.0016,.0234,8e-4),"#c99a12",[.002,$,N],ke.yellow);let oe=[];for(let Ae of[-.018,-.006,.006,.018])oe.push($e(mt(.0035,.0023,.0236,6e-4),[.002+Ae,$+.0124,N]),$e(mt(.0035,.0023,.0236,6e-4),[.002+Ae,$-.0124,N]));o(D,oe,"#e8b81f",ke.yellow);let Se=N+ee*.0112;h(D,[[-.0125,$+.0065,Se,re],[.0165,$+.0065,Se,re],[-.0125,$-.0065,Se,re],[.0165,$-.0065,Se,re]],.0019),a(D,yt(.0098,.028,32),"#a4a9b0",[-.046,$,N],{...ke.steel,rot:[0,0,Math.PI/2]}),a(D,yt(.01,.004,32),"#1a1b20",[-.062,$,N],{...ke.blackPlastic,rot:[0,0,Math.PI/2]}),a(D,yt(.0034,.003,16),"#c9ccd2",[-.0655,$,N],{...ke.steel,rot:[0,0,Math.PI/2]}),o(D,[$e(new vt(.0034,.0016,.003),[-.0665,$+.0049,N-.0034]),$e(new vt(.0034,.0016,.003),[-.0665,$+.0049,N+.0034])],nt.gold,ke.gold);for(let[Ae,z]of[[-1,"#c42b2b"],[1,"#18181a"]])a(D,new ss(new Oi([new Ct(-.067,$+.005,N+Ae*.0034),new Ct(-.078,$+.01,N+Ae*.006),new Ct(-.09,$+.004,N+Ae*.016)]),12,7e-4,6),z,[0,0,0],ke.pvc);a(D,yt(.0027,.027,16),nt.steel,[0,$,ee*.0885],{...ke.steel,rot:[Math.PI/2,0,0]}),a(D,new vt(.0034,.0042,.0075),"#c9ccd2",[0,$,ee*.1005],ke.steel),a(D,yt(.0027,.013,16),nt.steel,[0,$,ee*.0517],{...ke.steel,rot:[Math.PI/2,0,0]})}let v={};for(let ee of[-1,1]){let se=ee<0?"L":"R",D=r("wheel"+se,`${ee<0?"Left":"Right"} drive wheel`,new Ct(0,_e.wheelR,ee*d),[0,0,ee*.2],.72,1),N=l(D),$=new As;$.absarc(0,0,.0286,0,Math.PI*2);for(let ge=0;ge<5;ge++){let Te=ge*Math.PI*2/5,Ie=new Bi,Ye=.0108,F=.0246,ht=.2,ot=.13;Ie.moveTo(Math.cos(Te-ht)*Ye,Math.sin(Te-ht)*Ye),Ie.absarc(0,0,F,Te-ot,Te+ot,!1),Ie.absarc(0,0,Ye,Te+ht,Te-ht,!0),Ie.closePath(),$.holes.push(Ie)}let re=new or($,{depth:.01,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:Gs?1:2,curveSegments:Gs?16:28});re.translate(0,0,-.005),a(D,re,nt.yellow,[0,0,0],ke.yellow,N),a(D,new yi(.0272,.0017,Gs?6:10,Gs?40:64),nt.yellow,[0,0,ee*.0058],ke.yellow,N),a(D,new gn(.0108,.0128,.014,32),nt.yellow,[0,0,0],{...ke.yellow,rot:[Math.PI/2,0,0]},N),a(D,new un(.0072,24,10,0,Math.PI*2,0,Math.PI/2),nt.yellow,[0,0,ee*.0068],{...ke.yellow,rot:[ee*Math.PI/2,0,0]},N),o(D,[$e(_d(.004,.003),[0,0,ee*.0092],[Math.PI/2,0,0]),$e(yt(.0021,.005,12),[0,0,ee*.0108],[Math.PI/2,0,0])],nt.steel,ke.zinc,N);let oe=[],Se=.0128,Ae=.0286,z=.0324,ae=.0018;oe.push([Ae,-Se],[z-ae,-Se],[z-ae*.3,-Se+ae*.4],[z,-Se+ae],[z,Se-ae],[z-ae*.3,Se-ae*.4],[z-ae,Se],[Ae,Se]),a(D,new Rs(oe.map(([ge,Te])=>new Ee(ge,Te)),Gs?48:80),nt.tyre,[0,0,0],{...ke.rubber,rot:[Math.PI/2,0,0]},N);let Q=[];for(let ge=0;ge<44;ge++){let Te=ge/44*Math.PI*2;Q.push($e(mt(.0017,.0017,.02,6e-4),[Math.cos(Te)*.0325,Math.sin(Te)*.0325,0],[0,0,Te]))}o(D,Q,nt.tyre,ke.rubber,N),v[se]=N;let te=r("band"+se,`${ee<0?"Left":"Right"} rubber bands`,new Ct(0,_e.wheelR,ee*d),[0,.1,ee*.3],.78,1),de=l(te);for(let ge of[-.0066,.0066]){let Te=new Rs([[z-2e-4,-.0017],[z+_e.bandT*.8,-.0017],[z+_e.bandT,-.0012],[z+_e.bandT,.0012],[z+_e.bandT*.8,.0017],[z-2e-4,.0017]].map(([Ie,Ye])=>new Ee(Ie,Ye)),80);a(te,Te,nt.band,[0,0,ge],{r:.5,cc:.35,ccr:.5,sheen:.6,sheenColor:"#ffd9a0",rot:[Math.PI/2,0,0]},de)}v[se+"band"]=de,v[se+"bandPart"]=te}let R=r("sonar","Ultrasonic sensor (HC-SR04)",new Ct(0,0,0),[.16,.02,0],.38,.7);{let se=_e.sensorY,D=gd(45,20,"#0d4f9c",(re,oe,Se,Ae,z)=>{z.hole(2.2,2.2),z.hole(42.8,2.2),z.hole(2.2,17.8),z.hole(42.8,17.8),z.text("HC-SR04",22.5,10,26,"center"),z.text("Ultrasonic Sensor",22.5,14.2,11,"center"),z.text("VCC  TRIG  ECHO  GND",22.5,18.6,9,"center")}),N=zo("#0d4f9c",{r:.5,cc:.6,ccr:.15}),$=new Yn({map:D,roughness:.5,clearcoat:.6,clearcoatRoughness:.15});a(R,new vt(.0016,.02,.045),"",[.1375,se,0],{},null,[$,N,N,N,N,N]);for(let re of[-.0105,.0105]){let oe=vr(128,128,(Se,Ae,z)=>{Se.fillStyle="#17181c",Se.fillRect(0,0,Ae,z),Se.fillStyle="#3a3d44";for(let ae=6;ae<z;ae+=9)for(let Q=ae/9%2*4.5+5;Q<Ae;Q+=9)Se.beginPath(),Se.arc(Q,ae,2.4,0,7),Se.fill()});a(R,yt(.0082,.0128,40),nt.silver,[.145,se,re],{...ke.steel,rot:[0,0,Math.PI/2]}),a(R,yt(.0067,.001,40),"#ffffff",[.1517,se,re],{r:.5,map:oe,rot:[0,0,Math.PI/2]}),a(R,new yi(.0074,7e-4,8,40),nt.silver,[.1514,se,re],{...ke.steel,rot:[0,Math.PI/2,0]})}a(R,new gn(.0021,.0021,.009,16),nt.silver,[.1375-.0045,se+0,-.0072],{...ke.steel,rot:[0,0,Math.PI/2]}),o(R,[$e(mt(.0016,.005,.0095,4e-4),[.1375-.0014,se+.0032,.0155]),$e(mt(.0016,.0045,.0085,4e-4),[.1375-.0014,se-.0045,.009]),$e(mt(.0014,.003,.004,3e-4),[.1375-.0013,se-.001,-.002])],"#111216",ke.chip),o(R,[$e(mt(.0026,.0026,.0106,4e-4),[.1375-.002,se-.0098,0])],"#14151a",ke.blackPlastic),["#d33","#e8a31a","#2a9d4a","#161616"].forEach((re,oe)=>a(R,new ss(new Oi([new Ct(.1375-.003,se-.0106,(oe-1.5)*.0025),new Ct(.1375-.007,se-.015,(oe-1.5)*.002),new Ct(.1375-.02,se-.016,(oe-1.5)*.003),new Ct(.1375-.034,se-.01,(oe-1.5)*.006)]),14,7e-4,6),re,[0,0,0],ke.pvc))}let b=r("arduino","Microcontroller board",new Ct(0,0,0),[0,.2,-.09],.18,.5);{let re=[[18,3.3,10],[44.5,3.3,8],[27.9,47.4,8],[50.8,47.4,6]],oe=gd(68.6,53.4,"#0b6aa6",(te,de,ge,Te,Ie)=>{Ie.hole(14,2.5),Ie.hole(15.3,50.7),Ie.hole(66.1,7.6),Ie.hole(66.1,35.5),Ie.text("UNO R3",36,20.5,32,"center"),Ie.text("ATmega328P  16MHz",36,25,13,"center"),Ie.text("DIGITAL (PWM~)",38,7.4,11,"center"),Ie.text("ANALOG IN",57,43.6,11,"center"),Ie.text("POWER",37,43.6,11,"center"),Ie.text("RESET",6.7,11.4,10,"center"),Ie.text("TX RX L",52,13.8,10,"center"),Ie.text("ICSP",63,27,10,"center"),te.font="700 34px sans-serif",te.textAlign="center",te.fillStyle="#fff",te.fillText("\u221E",16*de,31*de);for(let[Ye,F,ht]of re)Ie.box(Ye-1.4,F-1.5,2.54*ht+.3,3)}),Se=zo("#0b6aa6",{r:.5,cc:.6,ccr:.15}),Ae=new Yn({map:oe,roughness:.5,clearcoat:.6,clearcoatRoughness:.15});a(b,new vt(68.6/1e3,.0016,53.4/1e3),"",[.04,.0653,-.034],{},null,[Se,Se,Ae,Se,Se,Se]);let z=(te,de,ge=0)=>[.04+(te-68.6/2)/1e3,.0653+8e-4+ge,-.034+(de-53.4/2)/1e3];a(b,mt(.016,.0115,.0122,6e-4),nt.silver,z(5,15.5,.0058),ke.steel),a(b,mt(.003,.007,.0075,4e-4),"#0a0b0e",z(-3.2,15.5,.0058),{r:.6}),a(b,mt(.014,.0112,.009,8e-4),"#15161a",z(5.5,46.5,.0056),ke.blackPlastic),a(b,yt(.0016,.003,14),"#1d1e22",z(-.8,46.5,.0058),{r:.6,rot:[0,0,Math.PI/2]});let ae=[],Q=[];Q.push($e(mt(.035,.0034,.0078,4e-4),z(45,34,.003)),$e(mt(.0352,.0036,.0098,5e-4),z(45,34,.0014)));for(let te=0;te<14;te++)for(let de of[-1,1])ae.push($e(new vt(6e-4,.0034,6e-4),z(29.1+te*2.54,34+de*4,.001)));o(b,Q,"#14151a",ke.chip),o(b,ae,nt.steel,ke.steel),a(b,mt(.012,.0036,.0045,.0012),nt.silver,z(22,26,.0021),ke.steel),a(b,mt(.007,.0014,.007,3e-4),"#111216",z(33,13,8e-4),ke.chip),o(b,[$e(yt(.0026,.007,16),z(15.5,30,.0035)),$e(yt(.0026,.007,16),z(15.5,36.5,.0035))],"#9aa0a8",ke.alu),o(b,[$e(yt(.0027,.0016,16),z(15.5,30,.0073)),$e(yt(.0027,.0016,16),z(15.5,36.5,.0073))],"#111111",{r:.6}),a(b,mt(.009,.0075,.003,4e-4),"#16171b",z(11.8,40,.0038),ke.blackPlastic),a(b,mt(.009,.001,.009,3e-4),"#c9ccd2",z(11.8,40,.0078),ke.steel),a(b,mt(.0062,.0035,.0062,7e-4),"#8a8d93",z(6.7,6.5,.0018),ke.blackPlastic),a(b,yt(.0019,.001,14),"#d11",z(6.7,6.5,.004),{r:.3,cc:1}),o(b,[0,1,2].map(te=>$e(mt(.0016,8e-4,.001,2e-4),z(52+te*3,16.4,6e-4))),"#ffcb3a",{r:.3,cc:1});for(let[te,de,ge]of re)o(b,[$e(mt(.00254*ge+4e-4,.0085,.0026,4e-4),z(te+1.27*(ge-1),de,.0044))],"#17181c",ke.blackPlastic),o(b,Array.from({length:ge},(Te,Ie)=>$e(new vt(.0016,3e-4,.0016),z(te+Ie*2.54,de,.00885))),"#000000",{r:.9});o(b,Array.from({length:6},(te,de)=>$e(new vt(6e-4,.006,6e-4),z(61.8+de%2*2.54,33+Math.floor(de/2)*2.54,.0028))),nt.gold,ke.gold)}let E=r("l298n","Motor driver (L298N)",new Ct(0,0,0),[.03,.14,.1],.18,.5);{let re=gd(43,43,"#a31e25",(Q,te,de,ge,Te)=>{Te.hole(3,3),Te.hole(40,3),Te.hole(3,40),Te.hole(40,40),Te.text("L298N",21.5,8.5,34,"center"),Te.text("DUAL H-BRIDGE",21.5,12.6,11,"center"),Te.text("OUT1 OUT2",9.5,21.5,9,"center",-Math.PI/2),Te.text("OUT3 OUT4",34,21.5,9,"center",Math.PI/2),Te.text("12V   GND   5V",21.5,36.2,10,"center"),Te.text("ENA IN1 IN2 IN3 IN4 ENB",21.5,6.4,8,"center")},{trace:"rgba(255,200,160,0.10)"}),oe=zo("#a31e25",{r:.5,cc:.6,ccr:.15}),Se=new Yn({map:re,roughness:.5,clearcoat:.6,clearcoatRoughness:.15});a(E,new vt(43/1e3,.0016,43/1e3),"",[.085,.0653,.034],{},null,[oe,oe,Se,oe,oe,oe]);let Ae=(Q,te,de=0)=>[.085+(Q-43/2)/1e3,.0653+8e-4+de,.034+(te-43/2)/1e3],z=[$e(mt(.028,.003,.0172,8e-4),Ae(21.5,21.5,.003))];for(let Q=0;Q<8;Q++)z.push($e(mt(.027,.016,.0011,3e-4),Ae(21.5,21.5-6.4+Q*1.83,.0106)));o(E,z,"#1d1f24",{...ke.alu,r:.45}),a(E,mt(.02,.015,.005,6e-4),"#0f1013",Ae(21.5,29,.0075),ke.chip),o(E,Array.from({length:15},(Q,te)=>$e(new vt(5e-4,.003,5e-4),Ae(14.6+te*1,32.2,.0015))),nt.steel,ke.steel);let ae=(Q,te,de)=>{a(E,mt(de?.01:.015,.01,de?.015:.01,8e-4),"#1e63cf",Ae(Q,te,.0058),{r:.4,cc:.4}),o(E,[0,1].map(ge=>$e(yt(.0024,.0014,14),Ae(Q+(de?0:ge?3.3:-3.3),te+(de?ge?3.3:-3.3:0),.0112))),nt.gold,ke.brass)};ae(4.8,14,!0),ae(4.8,29,!0),ae(38.2,14,!0),ae(38.2,29,!0),ae(21.5,39.5,!1),o(E,[$e(yt(.004,.0105,20),Ae(9,35,.0053)),$e(yt(.004,.0105,20),Ae(33.5,35,.0053))],"#b6bcc4",ke.alu),o(E,[$e(yt(.0041,.001,20),Ae(9,35,.0108)),$e(yt(.0041,.001,20),Ae(33.5,35,.0108))],"#121316",{r:.6}),o(E,Array.from({length:8},(Q,te)=>$e(mt(.005,.0022,.0026,4e-4),Ae(14+te%4*5,te<4?18:25,.0011))),"#14151a",ke.chip),a(E,mt(.0165,.0085,.0025,4e-4),"#17181c",Ae(21.5,3.3,.0043),ke.blackPlastic),o(E,Array.from({length:6},(Q,te)=>$e(new vt(6e-4,.007,6e-4),Ae(14+te*2.54,3.3,.007))),nt.gold,ke.gold),o(E,[$e(mt(.005,.005,.0026,4e-4),Ae(14.2,3.3,.003)),$e(mt(.005,.005,.0026,4e-4),Ae(29.4,3.3,.003))],"#e8b400",ke.blackPlastic)}let A=r("ballast","Brass ballast weight",new Ct(0,0,0),[-.1,.1,.08],.18,.5);a(A,yt(.017,.0235,56),nt.gold,[-.015,.0645+.01175,.036],{...ke.brass,bump:Ky,bs:1.2}),a(A,new gn(.0158,.017,.0016,56),nt.gold,[-.015,.0645+.0243,.036],ke.brass),a(A,new gn(.0156,.014,.0011,56),nt.gold,[-.015,.0645+.0256,.036],ke.brass),h(A,[[-.015,.0645+.0262,.036,"y+"]],.003);let P=vr(128,64,(ee,se,D)=>{ee.fillStyle="#d7d9de",ee.fillRect(0,0,se,D),ee.fillStyle="#1a1c22",ee.font="700 26px sans-serif",ee.textAlign="center",ee.fillText("SG90",64,26),ee.font="11px sans-serif",ee.fillText("9g MICRO SERVO",64,48)}),M=zo("#1f4fc9",{r:.35,cc:.7,ccr:.12,bump:Ho,bs:.3}),T=()=>new Yn({map:P,roughness:.5}),I=r("liftServo","Arm lift servo (SG90)",new Ct(0,0,0),[.06,.04,.16],.28,.6);{let ee=_e.servo[0],se=_e.servo[1],D=-.01;a(I,new vt(.0227,.0227,.0125),"",[ee,se,D],{},null,[M,M,M,M,M,T()]),a(I,mt(.0355,.0026,.0125,5e-4),"#1f4fc9",[ee,se+.006,D],{r:.35,cc:.7}),a(I,mt(.0125,.004,.0125,8e-4),"#f1f3f6",[ee,se+.0132,D],{r:.35,cc:.6}),a(I,new gn(.0043,.0043,.005,24),nt.white,[ee,se,D+.009],{r:.35,rot:[Math.PI/2,0,0]}),o(I,[-.0138,.0138].map(N=>$e(new yi(.0011,5e-4,8,14),[ee+N,se+.0074,D])),nt.steel,ke.steel),["#5b3a1d","#c62a2a","#e69a1a"].forEach((N,$)=>a(I,new ss(new Oi([new Ct(ee-.0113,se-.004,D+($-1)*.003),new Ct(ee-.02,se-.006,D+($-1)*.0034),new Ct(ee-.034,se-.001,D+($-1)*.004)]),12,6e-4,6),N,[0,0,0],ke.pvc))}let L=l(I,[_e.servo[0],_e.servo[1],0]);a(I,yt(.005,.003,24),nt.white,[0,0,-.0013],{r:.35,rot:[Math.PI/2,0,0]},L),a(I,_r(_e.horn+.01,.0075,.0022,4,9e-4),nt.white,[_e.horn/2,0,-.0013],{r:.35,cc:.4},L),a(I,yt(.0016,.005,12),nt.steel,[0,0,-.0013],{...ke.steel,rot:[Math.PI/2,0,0]},L);let O=r("pushrod","Pushrod link",new Ct(0,0,0),[.08,.2,.08],.1,.45);a(O,_r(_e.rod+.01,.0075,.003,9,.0015),nt.yellow,[0,0,.0015],ke.yellow),o(O,[$e(yt(.0021,.007,14),[-_e.rod/2,0,.0015],[Math.PI/2,0,0]),$e(yt(.0021,.007,14),[_e.rod/2,0,.0015],[Math.PI/2,0,0]),$e(yt(.0035,6e-4,16),[-_e.rod/2,0,.0052],[Math.PI/2,0,0]),$e(yt(.0035,6e-4,16),[_e.rod/2,0,.0052],[Math.PI/2,0,0])],nt.steel,ke.steel);let k=r("arm","Arm (parallelogram)",new Ct(0,0,0),[-.03,.2,0],.04,.44),U=l(k,[_e.pivot[0],_e.pivot[1],0]),W=l(k,[_e.pivot[0],_e.pivot[1]+.035,0]);for(let ee of[-.018,.018])a(k,_r(_e.armLen+.012,.0125,.0042,11,.0026),nt.yellow,[_e.armLen/2,0,ee],ke.yellow,U),a(k,_r(_e.armLen+.012,.0105,.0042,11,.0022),nt.yellow,[_e.armLen/2,0,ee],ke.yellow,W);o(k,[$e(yt(.0022,.042,14),[_e.armAttach,0,0],[Math.PI/2,0,0]),...[0,_e.armLen].map(ee=>$e(yt(.0021,.046,14),[ee,0,0],[Math.PI/2,0,0]))],nt.steel,ke.steel,U),o(k,[0,_e.armLen].map(ee=>$e(yt(.0021,.046,14),[ee,0,0],[Math.PI/2,0,0])),nt.steel,ke.steel,W);let q=r("gripper","Gripper (3D-printed claw)",new Ct(0,0,0),[.1,.18,0],0,.36);a(q,mt(.008,.044,.054,.002),nt.teal,[0,.0175,0],ke.teal),a(q,mt(.032,.032,.048,.0035),nt.teal,[.0165,-.003,0],ke.teal),a(q,mt(.005,.03,.038,.0014),"#13706a",[.033,-.003,0],ke.teal),h(q,[[-.0042,.0295,-.0205,"x-"],[-.0042,.0295,.0205,"x-"],[-.0042,.0055,-.0205,"x-"],[-.0042,.0055,.0205,"x-"],[.0165,.013,.0242,"z+"],[.0165,.013,-.0242,"z-"]],.002);let K=l(q,[.036,-.012,-.0165]),pe=l(q,[.036,-.012,.0165]);for(let[ee,se]of[[K,-1],[pe,1]])a(q,_r(.07,.0245,.0034,0,0),nt.teal,[.035,0,se*.0017],ke.teal,ee),a(q,mt(.014,.0235,.002,8e-4),"#101114",[.0645,0,se*-3e-4],ke.rubber,ee),o(q,[$e(yt(.0042,.005,18),[0,0,se*.0017],[Math.PI/2,0,0]),$e(yt(.0021,.005,12),[.034,0,se*.0017],[Math.PI/2,0,0])],nt.steel,ke.steel,ee);let Z={jawL:K,jawR:pe},ne=r("jawServo","Claw servo (SG90)",new Ct(0,0,0),[.05,.3,0],0,.36);a(ne,new vt(.0227,.0125,.0227),"",[0,0,0],{},null,[M,M,T(),M,M,M]),a(ne,mt(.0355,.0026,.0227,5e-4),"#1f4fc9",[0,-.001,0],{r:.35,cc:.7}),a(ne,yt(.0057,.005,24),nt.white,[.0046,.0083,0],{r:.35}),a(ne,_r(.017,.0075,.0022,3,9e-4),nt.white,[.0046,.0112,0],{r:.35,rot:[Math.PI/2,0,0]});let he=r("nameplate","Name plate",new Ct(0,0,0),[-.15,0,0],.36,.7);{let ee=document.createElement("canvas");ee.width=512,ee.height=256;let se=ee.getContext("2d");se.drawImage(qp.image,0,0,512,256),se.fillStyle="#251a10",se.font='600 112px "Segoe Print","Bradley Hand","Comic Sans MS",cursive',se.textAlign="center",se.textBaseline="middle",se.save(),se.translate(256,138),se.rotate(-.025),se.fillText("Patrick",0,0),se.restore();let D=new Ui(ee);D.colorSpace=Gt,D.anisotropy=8;let N=new Yn({color:nt.mdf,roughness:.85,map:qp}),$=new Yn({map:D,roughness:.8}),re=new rt(new hi(.004,.044,.088,3,.0012),[$,$.clone(),N,N.clone(),N.clone(),N.clone()]);re.position.set(-.071,.052,0),re.castShadow=re.receiveShadow=!0,re.userData.part="nameplate",re.material.forEach(oe=>he.mats.push(oe)),he.group.add(re),he.meshes.push(re),s.push(re),h(he,[[-.069,.066,-.037,"x+"],[-.069,.066,.037,"x+"]],.0016)}let Pe=r("wiring","Wiring",new Ct(0,0,0),[0,.1,.04],.1,.4);{let ee=[["#d33",[[-.05,.048,.02],[-.04,.057,.03],[0,.07,.045],[.07,.076,.044]]],["#222",[[-.05,.048,.014],[-.03,.058,.04],[.02,.072,.052],[.065,.075,.05]]],["#2a9d4a",[[.07,.074,.02],[.08,.068,0],[.092,.05,-.006],[.09,.044,-.01]]],["#e8a31a",[[.03,.076,-.012],[.06,.084,0],[.09,.072,.014],[.085,.076,.03]]],["#3b82f6",[[0,.076,-.05],[-.01,.04,-.062],[.01,.046,-.068],[.002,.0325,-.069]]],["#8b5cf6",[[0,.076,-.058],[-.02,.05,-.065],[-.03,.04,.066],[-.04,.034,.069]]],["#dddddd",[[.135,.05,-.01],[.12,.062,-.02],[.09,.072,-.026],[.06,.073,-.03]]],["#d33",[[.135,.048,.01],[.12,.066,.03],[.1,.073,.034]]]],se=[];for(let[D,N]of ee){let $=new Oi(N.map(re=>new Ct(...re)));a(Pe,new ss($,32,95e-5,8),D,[0,0,0],ke.pvc);for(let re of[0,1]){let oe=$.getPoint(re);se.push($e(mt(.0026,.0026,.0026,5e-4),[oe.x,oe.y,oe.z]))}}o(Pe,se,"#17181c",ke.blackPlastic),o(Pe,[[.02,.0725,.0495],[.04,.0735,.0452]].map(([D,N,$])=>$e(new yi(.0026,4e-4,6,16),[D,N,$],[0,Math.PI/2,0])),"#f1f1ee",{r:.5})}let ve={theta:1,tip:[0,0]};function qe({phi:ee,jaw:se,wl:D,wr:N,bands:$,u:re}){let oe=On(ee);if(oe){ve.theta=oe.theta,L.rotation.z=ee;let Q=oe.A,te=oe.H;O.base.set((Q[0]+te[0])/2,(Q[1]+te[1])/2,0),O.group.rotation.z=Math.atan2(Q[1]-te[1],Q[0]-te[0]),U.rotation.z=oe.theta,W.rotation.z=oe.theta;let de=_e.pivot[0]+_e.armLen*Math.cos(oe.theta),ge=_e.pivot[1]+_e.armLen*Math.sin(oe.theta);ve.tip=[de,ge],q.base.set(de,ge,0),ne.base.set(de+.0165,ge+.0205,0)}let Se=se*28*Math.PI/180;Z.jawL.rotation.y=Se,Z.jawR.rotation.y=-Se,v.L.rotation.z=-D,v.R.rotation.z=-N,v.Lband.rotation.z=-D,v.Rband.rotation.z=-N;let Ae=!!$,z=Ae||re>.02;for(let Q of["L","R"]){let te=v[Q+"bandPart"];te.group.visible=z,te.group.traverse(de=>{de.isMesh&&(de.visible=z)})}e.userData.lift=Ae?_e.bandT:0;let ae=(Q,te,de)=>{let ge=Math.min(1,Math.max(0,(Q-te)/(de-te)));return ge*ge*(3-2*ge)};for(let Q of t){let te=ae(re,Q.a,Q.b);Q.group.position.copy(Q.base).addScaledVector(Q.explode,te)}return ve}return{root:e,parts:t,byId:n,meshes:s,pose:qe,state:ve,jaws:Z}}var Bn=i=>-i;var vd=11,kt=()=>(vd=vd*16807%2147483647,vd/2147483647);function ps(i,e,t,n=!0,s){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let a=new Ui(r);return n&&(a.colorSpace=Gt),a.anisotropy=8,s&&(a.wrapS=a.wrapT=wn,a.repeat.set(...s)),a}var Pt=(i,e={})=>new Yn({color:i,roughness:.5,metalness:0,...e});function Wi(i){return i.castShadow=i.receiveShadow=!0,i}function Kn(i,e,t=40){return Wi(new rt(new Rs(i.map(([n,s])=>new Ee(n,s)),t),e))}function bh(i,e,t,n={}){let s=new zt,r=ps(512,Math.round(512*t/e),(l,c,h)=>{l.fillStyle=n.bg||"#161c3e",l.fillRect(0,0,c,h),l.strokeStyle=n.color||"#a78bfa",l.lineWidth=6,l.strokeRect(5,5,c-10,h-10),l.fillStyle=n.color||"#a78bfa",l.font=`700 ${n.px||.52*h}px "Chakra Petch", "JetBrains Mono", sans-serif`,l.textAlign="center",l.textBaseline="middle",n.spacing&&(l.letterSpacing=n.spacing),l.fillText(i,c/2,h/2+3)}),a=Wi(new rt(new vt(e,t,.004),Pt("#2a2f55",{roughness:.6}))),o=new rt(new qn(e-.002,t-.002),new nn({map:r,toneMapped:!1}));return o.rotation.y=Math.PI,o.position.z=-.0022,s.add(a,o),s.position.y=t/2+.002,s}var n1={eggs(){let i=new zt,e=ps(128,128,(s,r,a)=>{s.fillStyle="#a7a094",s.fillRect(0,0,r,a);for(let o=0;o<2600;o++){let l=120+kt()*70;s.fillStyle=`rgba(${l},${l-8},${l-20},0.5)`,s.fillRect(kt()*r,kt()*a,2,2)}},!0,[2,2]),t=Pt("#ffffff",{map:e,roughness:.95}),n=Wi(new rt(new hi(.068,.02,.034,3,.003),t));n.position.y=.01,i.add(n);for(let s of[-.017,.017]){let r=Kn([[0,.02],[.0125,.02],[.0135,.026],[.0128,.0275],[0,.0275]],t,24);r.position.set(s,0,0),i.add(r);let a=Wi(new rt(new un(1,36,28),Pt("#efe0c6",{roughness:.42,clearcoat:.25,clearcoatRoughness:.5})));a.scale.set(.0146,.0212,.0146),a.position.set(s,.0232+.0212*.82,0),i.add(a)}return i.userData.top=.062,i},salt(){let i=new zt,e=Pt("#d8ecff",{transparent:!0,opacity:.28,roughness:.04,clearcoat:1,clearcoatRoughness:.02,side:Jt,depthWrite:!1,envMapIntensity:1.6});i.add(Kn([[0,0],[.0155,0],[.0175,.004],[.018,.012],[.018,.05],[.0165,.057],[.015,.059]],e));let t=Pt("#f4f4f2",{roughness:.95});i.add(Kn([[0,.002],[.0165,.002],[.017,.012],[.017,.042],[0,.044]],t,28));let n=Pt("#c9ced6",{metalness:1,roughness:.22,envMapIntensity:1.4});i.add(Kn([[.015,.056],[.016,.058],[.016,.068],[.0148,.0715],[0,.0715]],n,36));let s=[];for(let a=0;a<7;a++){let o=a/6*Math.PI*2,l=a?.0075:0;s.push(new Ja(.0011,8).rotateX(-Math.PI/2).translate(Math.cos(o)*l,.0717,Math.sin(o)*l))}let r=new rt(i1(s),new nn({color:"#15171b"}));return i.add(r),i.userData.top=.072,i},spice(){let i=new zt,e=Pt("#e4f0ff",{transparent:!0,opacity:.26,roughness:.04,clearcoat:1,side:Jt,depthWrite:!1,envMapIntensity:1.5});i.add(Kn([[0,0],[.0175,0],[.019,.004],[.019,.05],[.0175,.054]],e)),i.add(Kn([[0,.002],[.0178,.002],[.0183,.01],[.0183,.046],[0,.048]],Pt("#c4491a",{roughness:.95}),28));let t=ps(256,96,(s,r,a)=>{s.fillStyle="#f2ead8",s.fillRect(0,0,r,a),s.fillStyle="#9b2c12",s.fillRect(0,0,r,14),s.fillRect(0,a-14,r,14),s.fillStyle="#2a1a10",s.font='700 40px "Chakra Petch", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("PAPRIKA",r/2,a/2+2)}),n=Wi(new rt(new gn(.0194,.0194,.026,40,1,!0),Pt("#ffffff",{map:t,roughness:.7})));return n.position.y=.027,n.rotation.y=Math.PI/2,i.add(n),i.add(Kn([[0,.0535],[.02,.0535],[.0205,.0545],[.0205,.0645],[.019,.066],[0,.066]],Pt("#17181c",{roughness:.35,clearcoat:.6}),36)),i.userData.top=.066,i},sauce(){let i=new zt,e=Pt("#c2181f",{roughness:.28,clearcoat:1,clearcoatRoughness:.12});i.add(Kn([[0,0],[.0175,0],[.02,.005],[.02,.07],[.0185,.082],[.012,.093],[.0085,.098]],e));let t=ps(256,128,(r,a,o)=>{r.fillStyle="#f6efe2",r.fillRect(0,0,a,o),r.fillStyle="#c2181f",r.beginPath(),r.arc(a/2,o/2,40,0,7),r.fill(),r.fillStyle="#fff",r.font='700 26px "Chakra Petch", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText("SAUCE",a/2,o/2+1)}),n=Wi(new rt(new gn(.0204,.0204,.034,40,1,!0),Pt("#ffffff",{map:t,roughness:.6})));n.position.y=.04,n.rotation.y=Math.PI/2,i.add(n);let s=Pt("#f1efe9",{roughness:.4,clearcoat:.5});return i.add(Kn([[0,.0975],[.009,.0975],[.01,.098],[.01,.103],[.007,.11],[.0035,.115],[0,.116]],s,32)),i.userData.top=.116,i},glass(){let i=new zt,e=Pt("#dff0ff",{transparent:!0,opacity:.24,roughness:.02,clearcoat:1,clearcoatRoughness:.01,side:Jt,depthWrite:!1,envMapIntensity:1.8});i.add(Kn([[0,0],[.017,0],[.0188,.003],[.02,.012],[.021,.07],[.0204,.0705]],e)),i.add(Kn([[0,.0045],[.015,.0045],[.0172,.014],[.0182,.044],[0,.044]],Pt("#7ec8ff",{transparent:!0,opacity:.34,roughness:.05,depthWrite:!1}),32));let t=new rt(new yi(.0207,7e-4,8,40),Pt("#ffffff",{transparent:!0,opacity:.5,roughness:.05,depthWrite:!1}));return t.rotation.x=Math.PI/2,t.position.y=.0702,i.add(t),i.userData.top=.071,i}};function i1(i){let e=[],t=[],n=0;for(let r of i){let a=r.attributes.position;for(let o=0;o<a.count;o++)e.push(a.getX(o),a.getY(o),a.getZ(o));for(let o of r.index.array)t.push(o+n);n+=a.count}let s=new Ft;return s.setAttribute("position",new gt(e,3)),s.setIndex(t),s}function Jp(i){let e=n1[i]();return e.userData.id=i,e}function Kp(i){let e=new zt;i.add(e);let t=(v,R,b,E,A)=>{let P=Wi(new rt(v,R));return P.position.set(b,E,A),e.add(P),P},n=ps(512,512,(v,R,b)=>{v.fillStyle="#272d3f",v.fillRect(0,0,R,b);for(let E=0;E<5200;E++){let A=110+kt()*120;v.fillStyle=`rgba(${A},${A+6},${A+24},${.05+kt()*.17})`,v.fillRect(kt()*R,kt()*b,1+kt()*2.4,1+kt()*2.4)}for(let E=0;E<24;E++){v.strokeStyle=`rgba(190,200,255,${.03+kt()*.04})`,v.lineWidth=1,v.beginPath();let A=kt()*R,P=kt()*b;v.moveTo(A,P);for(let M=0;M<5;M++)A+=(kt()-.3)*90,P+=(kt()-.5)*60,v.lineTo(A,P);v.stroke()}},!0,[5,4]),s=t(new vt(2.6,.05,2.1),Pt("#ffffff",{map:n,roughness:.55,clearcoat:.12,clearcoatRoughness:.5,envMapIntensity:.45}),.1,-.025,0),r=ps(256,64,(v,R,b)=>{v.fillStyle="#5a3a24",v.fillRect(0,0,R,b);for(let E=0;E<160;E++)v.fillStyle=`rgba(${20+kt()*40},${10+kt()*20},5,${.1+kt()*.2})`,v.fillRect(kt()*R,kt()*b,30+kt()*120,1)},!0,[8,1]);t(new vt(2.62,.045,.03),Pt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),.1,-.0225,-1.065),t(new vt(2.62,.045,.03),Pt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),.1,-.0225,1.065),t(new vt(.03,.045,2.1),Pt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),-1.215,-.0225,0),t(new vt(.03,.045,2.1),Pt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),1.415,-.0225,0),t(new vt(2.5,1,2),Pt("#141a34",{roughness:.6}),.1,-.55,0);let a=new rt(new qn(14,14),Pt("#0a0e22",{roughness:.4,clearcoat:.3}));a.rotation.x=-Math.PI/2,a.position.y=-1.05,a.receiveShadow=!0,e.add(a);let o=ps(512,512,(v,R,b)=>{v.fillStyle="#232a4c",v.fillRect(0,0,R,b);let E=b/8,A=R/4;for(let P=0;P<8;P++)for(let M=-1;M<5;M++){let T=M*A+(P%2?A/2:0),I=kt()*14;v.fillStyle=`rgb(${62+I},${78+I},${128+I})`,v.fillRect(T+3,P*E+3,A-6,E-6),v.fillStyle="rgba(255,255,255,0.16)",v.fillRect(T+3,P*E+3,A-6,4)}},!0,[5,1.6]),l=1.05;t(new vt(2.62,.62,.03),Pt("#ffffff",{map:o,roughness:.3,clearcoat:.4,clearcoatRoughness:.25,envMapIntensity:.6}),.1,.31,l+.015);let c=new rt(new vt(2.3,.012,.03),new nn({color:new je("#ffd9a0").multiplyScalar(1.6)}));c.position.set(.1,.6,l-.04),e.add(c);for(let v=0;v<4;v++)t(new vt(.62,.55,.32),Pt("#1a2250",{roughness:.4,clearcoat:.6}),-.95+v*.68+(v>1,0),.92,l+.19);for(let v=0;v<4;v++)t(new vt(.012,.16,.012),Pt("#cfd4dc",{metalness:1,roughness:.25}),-.95+v*.68+.26,.74,l+.36);let h=t(new vt(.03,.15,1.5),Pt("#a8825a",{roughness:.8}),1.115,.075,0);for(let v=0;v<8;v++)t(new vt(.005,.15,.004),Pt("#7a5a3a",{roughness:.9}),1.1,.075,-.65+v*.185);let u=ps(128,128,(v,R,b)=>{v.fillStyle="#b98e5c",v.fillRect(0,0,R,b);for(let E=0;E<200;E++)v.fillStyle=`rgba(70,45,20,${kt()*.18})`,v.fillRect(kt()*R,kt()*b,14+kt()*40,1)}),d=Pt("#ffffff",{map:u,roughness:.65,clearcoat:.15}),f=[],g=[];at.zs.forEach((v,R)=>{let b=Wi(new rt(new hi(at.pad.hx*2,at.pad.h,at.pad.hz*2,3,.002),d));b.position.set(at.pantryX,at.pad.h/2,Bn(v)),e.add(b),f.push(b);let E=bh(xn[R].name.toUpperCase(),.07,.026,{color:"#fbbf24"});E.position.set(at.pantryX,0,Bn(v)-.062),e.add(E)});{let v=bh("PANTRY",.34,.07,{color:"#60a5fa",spacing:"10px"});v.position.set(at.pantryX,0,Bn(.76)),e.add(v)}let _=ps(512,512,(v,R,b)=>{v.fillStyle="#e9e2d0",v.fillRect(0,0,R,b);for(let E=0;E<b;E+=3)v.fillStyle=`rgba(120,100,70,${.04+(E%6?0:.04)})`,v.fillRect(0,E,R,1);for(let E=0;E<R;E+=3)v.fillStyle=`rgba(120,100,70,${.03+(E%6?0:.04)})`,v.fillRect(E,0,1,b);v.strokeStyle="rgba(150,40,40,0.55)",v.lineWidth=3,v.setLineDash([10,8]),v.strokeRect(14,14,R-28,b-28)}),m=Wi(new rt(new hi(.5,.006,1.4,3,.002),Pt("#ffffff",{map:_,roughness:.92,sheen:.6,sheenRoughness:.5,sheenColor:new je("#ffffff")})));m.position.set(at.kitchenX-.03,.003,0),e.add(m);let p=Pt("#f4f1ea",{roughness:.18,clearcoat:1,clearcoatRoughness:.06});at.zs.forEach((v,R)=>{let b=Wi(new rt(new hi(at.pad.hx*2,at.pad.h-.002,at.pad.hz*2,3,.002),d));b.position.set(at.kitchenX,(at.pad.h-.002)/2+.003,Bn(v)),e.add(b);let E=Kn([[0,0],[.034,0],[.037,.0025],[.038,at.plateT]],p,48);E.position.set(at.kitchenX,at.pad.h+.001,Bn(v)),e.add(E);let A=bh(xn[R].name.toUpperCase(),.07,.026,{color:"#f4c7c7",bg:"#4a1f27"});A.position.set(at.kitchenX,0,Bn(v)-.062),e.add(A)});{let v=bh("BREAKFAST AREA",.5,.07,{color:"#f4c7c7",bg:"#4a1f27",spacing:"6px"});v.position.set(at.kitchenX,0,Bn(.76)),e.add(v)}t(new hi(.075,.012,.075,3,.004),Pt("#d9a85a",{roughness:.9}),-.95,.006,.78),t(new hi(.075,.012,.075,3,.004),Pt("#cf9c4c",{roughness:.9}),-.94,.017,.78),t(new un(.03,32,22),Pt("#f08a1c",{roughness:.55,clearcoat:.2}),-.95,.03,-.84);{let v=Kn([[0,0],[.032,0],[.036,.004],[.036,.075],[.0345,.075],[.0335,.006],[0,.006]],Pt("#2563eb",{roughness:.2,clearcoat:1}),40);v.position.set(-.55,0,.88),v.material.side=Jt,e.add(v)}return{set:e,pads:f,wallZ:l}}var ms={accent:"#a78bfa",blue:"#60a5fa",pink:"#e879f9",amber:"#fbbf24",green:"#34d399",red:"#f87171",faint:"#5f668f",muted:"#9aa0c3",text:"#e6e8f5"},yr='"JetBrains Mono", monospace';function Ti(i){let e=Math.min(window.devicePixelRatio||1,2),t=i.clientWidth,n=i.clientHeight;(i.width!==Math.round(t*e)||i.height!==Math.round(n*e))&&(i.width=Math.round(t*e),i.height=Math.round(n*e));let s=i.getContext("2d");return s.setTransform(e,0,0,e,0,0),s.clearRect(0,0,t,n),{ctx:s,w:t,h:n}}function xa(i,e,t){let n=(e-i)/t,s=Math.pow(10,Math.floor(Math.log10(n))),r=n/s,a=(r<1.5?1:r<3?2:r<7?5:10)*s,o=[];for(let l=Math.ceil(i/a-1e-9)*a;l<=e+1e-9;l+=a)o.push(Math.abs(l)<a*1e-9?0:+l.toPrecision(10));return o}var jp=i=>String(+i.toPrecision(4)).replace("-","\u2212"),tt=(i,e,t,n,s=ms.muted,r="left",a=10,o="")=>{i.font=`${o} ${a}px ${yr}`,i.fillStyle=s,i.textAlign=r,i.textBaseline="middle",i.fillText(e,t,n)};function vn(i,e,t){let[n,s]=t.xr,[r,a]=t.yr,o=u=>e.x+(u-n)/(s-n)*e.w,l=u=>e.y+e.h-(u-r)/(a-r)*e.h;i.save(),i.font=`10px ${yr}`,i.lineWidth=1;let c=t.xticks||xa(n,s,t.nx||5),h=t.yticks||xa(r,a,t.ny||4);return i.textAlign="center",i.textBaseline="top",c.forEach(u=>{i.strokeStyle="rgba(255,255,255,0.05)",i.beginPath(),i.moveTo(o(u),e.y),i.lineTo(o(u),e.y+e.h),i.stroke(),i.fillStyle=ms.faint,i.fillText(t.xfmt?t.xfmt(u):jp(u),o(u),e.y+e.h+5)}),i.textAlign="right",i.textBaseline="middle",h.forEach(u=>{i.strokeStyle=u===0?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.05)",i.beginPath(),i.moveTo(e.x,l(u)),i.lineTo(e.x+e.w,l(u)),i.stroke(),i.fillStyle=ms.faint,i.fillText(t.yfmt?t.yfmt(u):jp(u),e.x-6,l(u))}),i.strokeStyle="rgba(255,255,255,0.14)",i.strokeRect(e.x,e.y,e.w,e.h),t.xl&&tt(i,t.xl,e.x+e.w/2,e.y+e.h+24,ms.muted,"center"),t.yl&&(i.save(),i.translate(e.x-38,e.y+e.h/2),i.rotate(-Math.PI/2),tt(i,t.yl,0,0,ms.muted,"center"),i.restore()),i.beginPath(),i.rect(e.x,e.y,e.w,e.h),i.clip(),(t.under||[]).forEach(u=>u(o,l)),(t.series||[]).forEach(u=>{let d=u.pts;if(!d||!d.length)return;i.beginPath();let f=!1;for(let g=0;g<d.length;g++){let[_,m]=d[g];if(u.upTo!==void 0&&_>u.upTo)break;if(!Number.isFinite(m))continue;let p=o(_),v=Math.max(-2e3,Math.min(2e3,l(m)));f?i.lineTo(p,v):i.moveTo(p,v),f=!0}i.setLineDash(u.dash||[]),i.lineWidth=u.width||2,i.strokeStyle=u.color,i.lineJoin="round",i.stroke(),i.setLineDash([]),u.fill&&(i.lineTo(o(d[d.length-1][0]),l(0)),i.lineTo(o(d[0][0]),l(0)),i.closePath(),i.fillStyle=u.fill,i.fill())}),(t.over||[]).forEach(u=>u(o,l)),i.restore(),{X:o,Y:l}}var Ai=(i,e,t,n,s=4.5)=>{i.beginPath(),i.arc(e,t,s,0,Math.PI*2),i.fillStyle=n,i.fill(),i.strokeStyle="#070a1a",i.lineWidth=1.5,i.stroke()},br=(i,e,t,n,s,r="rgba(255,255,255,0.35)")=>{i.setLineDash([3,4]),i.strokeStyle=r,i.lineWidth=1,i.beginPath(),i.moveTo(e(t),n),i.lineTo(e(t),s),i.stroke(),i.setLineDash([])};var At=ms,s1=Math.PI/180,Mr=(i,e,t)=>Math.min(t,Math.max(e,i)),gs="#34d399",va="#f87171";function e0(i="desk",e=.7,t=!0){return{stepOn:xr({bands:!0,surf:i,duty:1}),stepOff:xr({bands:!1,surf:i,duty:1}),tracOn:wi({bands:!0,surf:i,duty:1}),tracOff:wi({bands:!1,surf:i,duty:1}),power:[.4,.7,1].map(n=>Ei(n,t)),powerSel:Ei(e,t),ranges:Object.keys(li).map(n=>[n,Oo(n)])}}function Vs(i,e,t=0){let{ctx:n,w:s,h:r}=Ti(i),a=e?{x:30,y:8,w:s-40-t,h:r-24}:{x:52,y:14,w:s-74-t,h:r-50};return{ctx:n,w:s,h:r,r:a}}var _a=i=>i[i.length-1]??0;function r1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=e.cache.stepOn,a=e.cache.stepOff,o=(h,u)=>h.t.map((d,f)=>[d,h[u][f]]),l=Math.max(...r.wr,...a.wr)*1.12;vn(n,s,{xr:[0,1],yr:[0,l],nx:t?2:5,ny:t?3:4,xl:t?"":"time since full throttle (s)",yl:t?"":"speed (m/s)",series:[{pts:o(a,"wr"),color:"rgba(248,113,113,0.55)",width:1.2,dash:[4,4]},{pts:o(r,"wr"),color:"rgba(52,211,153,0.55)",width:1.2,dash:[4,4]},{pts:o(a,"v"),color:va,width:2.4},{pts:o(r,"v"),color:gs,width:2.4}],over:[(h,u)=>{t&&(tt(n,"with bands",h(.98),u(r.v[r.v.length-1])-9,gs,"right",9),tt(n,"bare",h(.98),u(a.v[a.v.length-1])+10,va,"right",9))}]});let c=r.t.findIndex(h=>h>=.3);return`At 0.3 s the banded robot moves at <b>${r.v[c].toFixed(2)} m/s</b>; the bare one at <b>${a.v[c].toFixed(2)} m/s</b> while its wheel surfaces do <b>${a.wr[c].toFixed(2)} m/s</b>. The gap between the dashed and solid red lines is wheel spin.`}function a1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=e.cache.stepOn,a=e.cache.stepOff;return vn(n,s,{xr:[0,1],yr:[-.05,1.05],nx:t?2:5,ny:t?3:4,xl:t?"":"time since full throttle (s)",yl:t?"":"slip ratio",series:[{pts:a.t.map((o,l)=>[o,a.slip[l]]),color:va,width:2.4,fill:"rgba(248,113,113,0.1)"},{pts:r.t.map((o,l)=>[o,r.slip[l]]),color:gs,width:2.4}],over:[(o,l)=>{tt(n,`peak ${Math.max(...a.slip).toFixed(2)} bare`,o(.98),l(Math.max(...a.slip))-8,va,"right",10),tt(n,`peak ${Math.max(...r.slip).toFixed(2)} with bands`,o(.98),l(.12),gs,"right",10)}]}),"Slip ratio = (wheel surface speed \u2212 robot speed) \xF7 wheel surface speed. Zero is pure rolling; one is a wheel spinning on the spot."}function o1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=e.cache.tracOn,a=e.cache.tracOff,o=Math.max(r.pts[0][1],r.limit)*1.2;return vn(n,s,{xr:[0,.8],yr:[0,o],nx:t?2:4,ny:t?3:4,xl:t?"":"robot speed (m/s)",yl:t?"":"force at the ground (N)",series:[{pts:r.pts,color:At.amber,width:2.4},{pts:[[0,r.limit],[.8,r.limit]],color:gs,width:1.6,dash:[6,4]},{pts:[[0,a.limit],[.8,a.limit]],color:va,width:1.6,dash:[6,4]}],over:[(l,c)=>{tt(n,"motor force",l(.42),c(r.pts[Math.round(r.pts.length*.5)][1])-12,At.amber,"left",10),tt(n,"grip, bands",l(.79),c(r.limit)-9,gs,"right",10),tt(n,"grip, bare",l(.79),c(a.limit)-9,va,"right",10)}]}),`At stall the two motors push with <b>${r.pts[0][1].toFixed(1)} N</b>. Bare plastic can pass only <b>${a.limit.toFixed(1)} N</b> to the counter; with bands the limit is <b>${r.limit.toFixed(1)} N</b>, so nearly all of it reaches the ground.`}function l1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=e.sim.rec,a=r.n,o=t?14:30,l=Math.max(o,_a(r.t)),c=l-o,h=0;for(;h<a&&r.t[h]<c;)h++;let u=[],d=[],f=[];for(let _=h;_<a;_++)u.push([r.t[_],(r.vL[_]+r.vR[_])/2]),d.push([r.t[_],0]),f.push([r.t[_],r.g[_]]);let g=.5;return vn(n,s,{xr:[c,l],yr:[-.25,g],nx:t?3:6,ny:4,xl:t?"":"run time (s)",yl:t?"":"speed (m/s)",yticks:[-.2,0,.2,.4],under:[(_,m)=>{n.fillStyle="rgba(167,139,250,0.10)";for(let p=Math.max(1,h);p<a;p++){let v=1-r.g[p];v>.01&&n.fillRect(_(r.t[p-1]),m(g),Math.max(1,_(r.t[p])-_(r.t[p-1]))+.5,(m(-.25)-m(g))*v)}}],series:[{pts:u,color:At.blue,width:2.2},{pts:f.map(([_,m])=>[_,m*.45-.2]),color:"rgba(167,139,250,0.9)",width:1.4,dash:[3,3]}],over:[(_,m)=>{u.length&&Ai(n,_(_a(r.t)),m(u[u.length-1][1]),At.pink,4),tt(n,"speed",s.x+6,s.y+10,At.blue,"left",9.5),tt(n,"go-gain (dashed): 1 running, 0 halted",s.x+50,s.y+10,At.accent,"left",9.5)}]}),"The dashed line is the soft-stop gain. Press <b>PAUSE</b> and it eases from 1 to 0 over 0.8 s, so the speed falls away smoothly instead of dropping to zero in one tick."}function c1(i,e,t){let{ctx:n,r:s}=Vs(i,t,t?0:34),r=e.cache.power,a=r[2],o=e.sim,l=s,c=a.pts[a.pts.length-1].rpm*1.02,h=Math.max(...r.map(m=>Math.max(...m.pts.map(p=>p.Pm))))*1.25,u=Math.max(...r.map(m=>Math.max(...m.pts.map(p=>p.Pel))))*1.05,d=h/u,f=["rgba(251,191,36,0.4)","rgba(251,191,36,0.7)","#fbbf24"],g=[];r.forEach((m,p)=>g.push({pts:m.pts.map(v=>[v.rpm,v.Pel*d]),color:"rgba(154,160,195,"+(.3+p*.2)+")",width:1.2,dash:[4,4]})),r.forEach((m,p)=>g.push({pts:m.pts.map(v=>[v.rpm,v.Pm]),color:f[p],width:p===2?2.6:1.8})),vn(n,l,{xr:[0,c],yr:[0,h],nx:t?3:5,ny:t?3:4,xl:t?"":"wheel speed (rpm)",yl:t?"":"mechanical power out, per motor (W)",series:g,over:[(m,p)=>{t||[.4,.7,1].forEach((E,A)=>{let P=r[A],M=P.pts.reduce((T,I)=>I.Pm>T.Pm?I:T);tt(n,`${Math.round(E*100)} %`,m(M.rpm),p(M.Pm)-9,"#fbbf24","center",10,"600")});let v=o.w*60/(2*Math.PI),R=o.Pm/2,b=o.Pel/2;b>.05&&(Ai(n,m(Math.min(v,c)),p(R),At.pink),Ai(n,m(Math.min(v,c)),p(Math.min(b*d,h)),At.blue,3.5))}]}),t||(n.font=`10px ${yr}`,n.textAlign="left",n.textBaseline="middle",xa(0,u,4).forEach(m=>{let p=l.y+l.h-m*d/h*l.h;n.fillStyle=At.faint,n.fillText(String(+m.toPrecision(2)),l.x+l.w+5,p)}),n.save(),n.translate(l.x+l.w+30,l.y+l.h/2),n.rotate(Math.PI/2),tt(n,"electrical power in (W), dashed",0,0,At.muted,"center"),n.restore());let _=e.cache.powerSel.pts.reduce((m,p)=>p.Pm>m.Pm?p:m);return`At ${Math.round(e.duty*100)} % throttle one motor delivers at most <b>${_.Pm.toFixed(2)} W</b> at <b>${_.rpm.toFixed(0)} rpm</b>, half its free speed, while drawing about <b>${_.Pel.toFixed(1)} W</b> from the battery: the rest is heat in the windings and gearbox. Pink dot: mechanical power now; blue: electrical.`}function h1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=e.cache.powerSel.pts,a=e.sim,o=Math.max(...r.map(u=>u.tau)),l=Math.max(...r.map(u=>u.I)),c=Math.max(...r.map(u=>u.eff)),h=r[r.length-1].rpm;return vn(n,s,{xr:[0,h],yr:[0,105],nx:t?3:5,ny:4,xl:t?"":"wheel speed (rpm)",yl:t?"":"% of maximum",series:[{pts:r.map(u=>[u.rpm,u.I/l*100]),color:"rgba(154,160,195,0.8)",width:1.5,dash:[4,4]},{pts:r.map(u=>[u.rpm,Math.max(0,u.tau)/o*100]),color:At.blue,width:2.2},{pts:r.map(u=>[u.rpm,u.eff/c*100]),color:At.pink,width:2.2}],over:[u=>{tt(n,`torque ${(o*100).toFixed(1)} N\xB7cm at stall`,s.x+8,s.y+12,At.blue,"left",10),tt(n,`peak efficiency ${(c*100).toFixed(0)} %`,s.x+8,s.y+27,At.pink,"left",10),tt(n,`stall current ${l.toFixed(2)} A`,s.x+8,s.y+42,At.muted,"left",10);let d=a.w*60/(2*Math.PI);a.Pel>.05&&br(n,u,Math.min(d,h),s.y,s.y+s.h)}]}),"At the chosen throttle the torque falls in a straight line as the wheel speeds up, so power (torque \xD7 speed) peaks at half the free speed."}function u1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=e.sim.rec,a=r.n,o=Math.max(20,_a(r.t)),l=Math.max(4,...r.Pel)*1.15,c=[],h=Math.max(1,Math.floor(a/600));for(let u=0;u<a;u+=h)c.push([r.t[u],r.Pel[u]]);return vn(n,s,{xr:[0,o],yr:[0,l],nx:t?3:6,ny:4,xl:t?"":"run time (s)",yl:t?"":"electrical power (W)",series:[{pts:c,color:"#fbbf24",width:1.8,fill:"rgba(251,191,36,0.12)"}],over:[(u,d)=>{a&&(br(n,u,_a(r.t),s.y,s.y+s.h),Ai(n,u(_a(r.t)),d(_a(r.Pel)),At.pink)),tt(n,`energy so far ${e.sim.energy.toFixed(0)} J`,s.x+s.w-6,s.y+12,At.muted,"right",10)}]}),"Both motors plus the electronics. The long flat stretches are the brake, reach, grip and place phases: the motors are stopped and the servos are doing the work."}function Sr(i){let e=i.sim,t=Mr(e.sn.d,.05,4),n=e.sn.what;return{d:t,psi:0,wall:n==="wall"?"card":"wood",what:n}}function d1(i,e,t,n){let{ctx:s,w:r,h:a}=Ti(i),o=Sr(e),l=o.d,c=o.psi,h=o.wall,u=14,d=u+(t?6:12),f=a/2,g=(r-d-24)/Math.max(l,.35),_=(Pe,ve)=>[d+Pe*g,f-ve*g];s.fillStyle="rgba(167,139,250,0.25)",s.strokeStyle=At.accent,s.lineWidth=1.5;let[m,p]=_(0,.1),[,v]=_(0,-.1);s.fillRect(d-10,p,10,v-p),s.beginPath(),s.moveTo(m,p),s.lineTo(m,v),s.stroke(),s.setLineDash([3,5]),s.strokeStyle="rgba(96,165,250,0.35)",s.lineWidth=1;for(let Pe of[-1,1])s.beginPath(),s.moveTo(d,f),s.lineTo(d+Math.cos(pt.beam)*g*l*1.4,f-Pe*Math.sin(pt.beam)*g*l*1.4),s.stroke();s.setLineDash([]);let R=Math.max(.9,l*.7),b=-1,E=0,A=0,P=-1,[M,T]=_(l+A*R,P*R),[I,L]=_(l-A*R,-P*R),O={wood:"#b98e5c",card:"#c89a52"}[h];s.strokeStyle=O,s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(M,T),s.lineTo(I,L),s.stroke(),s.lineCap="butt";let k=Math.max(.35,2*l/2.4),U=4.6*l+.7,W=n/1e3%(U/k+.5),q=k*W,K=pt.thresh,pe=pt.ref,Z=li[h],ne=0,he=t?31:61;for(let Pe=0;Pe<he;Pe++){let ve=(Pe/(he-1)*2-1)*42*s1,qe=Math.exp(-Math.pow(ve/(pt.beam*1.7),2)),ee=5e-4,se=0,D=Math.cos(ve),N=Math.sin(ve),$=0,re=0,oe=0;for(let Se=0;Se<5;Se++){let Ae=1/0,z=null,ae=D*b+N*E;if(ae<-1e-9){let ge=((l-ee)*b+(0-se)*E)/ae;if(ge>1e-6){let Te=ee+D*ge,Ie=se+N*ge,Ye=(Te-l)*A+Ie*P;Math.abs(Ye)<=R&&(Ae=ge,z="wall")}}if(D<-1e-9){let ge=(0-ee)/D;if(ge>1e-6){let Te=se+N*ge;Math.abs(Te)<.1&&ge<Ae&&(Ae=ge,z="robot")}}let Q=Number.isFinite(Ae)?Ae:6*l,te=$,de=$+Q;{let[ge,Te]=_(ee,se),[Ie,Ye]=_(ee+D*Q,se+N*Q);s.strokeStyle="rgba(125,211,252,0.05)",s.lineWidth=1,s.beginPath(),s.moveTo(ge,Te),s.lineTo(Ie,Ye),s.stroke()}if(q>te&&q<=de+1e-4){let ge=Math.min(q,de),Te=ee+D*(ge-te),Ie=se+N*(ge-te),Ye=qe*(pe/Math.max(ge,pe))*Math.pow(10,-pt.absDbPerM*ge/20)*Math.pow(Z.R,re)*Math.pow(.8,oe),F=20*Math.log10(Math.max(Ye,1e-9)/K),ht=Mr((F+8)/62,.04,1),[ot,C]=_(Te,Ie),y=Math.min(.08,.5/g+.02),[X,J]=_(Te-D*y,Ie-N*y);s.strokeStyle=`rgba(${F>35?"250,204,21":"96,165,250"},${ht.toFixed(3)})`,s.lineWidth=1.4+ht*1.6,s.beginPath(),s.moveTo(ot,C),s.lineTo(X,J),s.stroke(),Te<.06&&Math.abs(Ie)<.05&&D<0&&re>0&&(ne=Math.max(ne,ht))}if(!z)break;if($=de,ee+=D*Q,se+=N*Q,z==="wall"){let ge=D*b+N*E;D-=2*ge*b,N-=2*ge*E,re++}else D=-D,oe++;if($>7*l+1)break}}if(ne>.04){let[Pe,ve]=_(0,0),qe=s.createRadialGradient(Pe,ve,0,Pe,ve,24);qe.addColorStop(0,`rgba(52,211,153,${ne})`),qe.addColorStop(1,"rgba(52,211,153,0)"),s.fillStyle=qe,s.beginPath(),s.arc(Pe,ve,24,0,7),s.fill()}return tt(s,`${(l*100).toFixed(0)} cm`,(d+_(l,0)[0])/2,f-10,At.muted,"center",10),tt(s,o.what==="wall"?"FAR WALL":o.what==="none"?"NO ECHO":o.what==="spot"?"BREAKFAST SPOT":"PANTRY PAD",r-8,12,O,"right",9),"Dots are the 40 kHz burst travelling, bright when strong. Watch them thin out with distance and dim at the wall; the green glow is the echo reaching the receiver."}function f1(i,e,t){let{ctx:n,r:s}=Vs(i,t),r=Sr(e),a=Fo(r.d,r.psi,r.wall,22),o=h=>20*Math.log10(Math.max(h,1e-9)/pt.thresh),l=a.pts.map(([h,u])=>[h*1e3,Mr(o(u),-12,75)]),c=Vi(r.d,r.psi,r.wall);return vn(n,s,{xr:[0,a.tEnd*1e3],yr:[-12,75],yticks:[-10,0,20,40,60],nx:t?3:6,xl:t?"":"time after the burst (ms)",yl:t?"":"signal (dB above threshold)",series:[{pts:l,color:At.accent,width:2,fill:"rgba(167,139,250,0.12)"}],over:[(h,u)=>{n.setLineDash([5,4]),n.strokeStyle=At.amber,n.lineWidth=1.1,n.beginPath(),n.moveTo(s.x,u(0)),n.lineTo(s.x+s.w,u(0)),n.stroke(),n.setLineDash([]),tt(n,"detection threshold",s.x+8,u(0)+9,At.amber,"left",9),a.echoes.slice(0,2).forEach((d,f)=>{let g=o(d.a);d.t*1e3<a.tEnd*1e3&&(Ai(n,h(d.t*1e3),u(Mr(g,-12,75)),f?At.pink:gs,4),t||tt(n,`${f?"2nd":"1st"} echo ${g.toFixed(0)} dB`,h(d.t*1e3)+8,u(Mr(g,-10,70))-10,f?At.pink:gs,"left",10,"600"))})}]}),c.detected?`The first echo arrives <b>${(a.echoes[0].t*1e3).toFixed(2)} ms</b> after the burst: distance = time \xD7 ${a.c.toFixed(0)} m/s \xF7 2 = <b>${(r.d*100).toFixed(0)} cm</b>. The second, weaker echo has crossed the gap twice.`:"The first echo is <b>below the threshold</b>: the sensor reports nothing."}function p1(i,e,t){let{ctx:n,w:s,h:r}=Ti(i),a=Sr(e),o=Vi(a.d,a.psi,a.wall),l=[["spreading",o.spread,At.blue],["air",o.air,At.amber],["wall absorbs",o.surf,At.pink],["off-axis",o.aim,At.red]],c=Math.max(o.total,1),h=12,u=s-24,d=t?30:40,f=t?18:26,g=h;return l.forEach(([_,m,p])=>{let v=m/c*u;v<=0||(n.fillStyle=p,n.globalAlpha=.85,n.fillRect(g,d,Math.max(v,1),f),n.globalAlpha=1,v>56&&!t&&tt(n,_,g+5,d+f/2-.5,"#0b0820","left",9.5,"600"),tt(n,`${m.toFixed(1)}`,g+v/2,d+f+12,p,"center",9.5),g+=v)}),tt(n,`total loss ${o.total.toFixed(1)} dB: only ${(Math.pow(10,-o.total/10)*100).toExponential(1)} % returns`,h,14,At.text,"left",t?9.5:10.5,"600"),t||tt(n,"blue spreading \xB7 amber air \xB7 pink wall absorbs \xB7 red off-axis",h,d+f+38,At.muted,"left",9.5),"Every 3 dB is half the energy. Spreading dominates: the burst fans out over the surface of a growing sphere."}function m1(i,e,t){let{ctx:n,w:s}=Ti(i),r=Sr(e),a=t?70:96,o=s-a-52,l=t?18:24,c=5;e.cache.ranges.forEach(([u,d],f)=>{let g=8+f*l,_=u===r.wall;n.fillStyle=_?"rgba(167,139,250,0.9)":"rgba(154,160,195,0.35)",n.fillRect(a,g,d/c*o,12),tt(n,li[u].name,6,g+6,_?"#fff":At.muted,"left",9,_?"600":""),tt(n,`${d.toFixed(1)} m`,a+d/c*o+5,g+6,_?At.accent:At.muted,"left",9.5)});let h=a+Mr(r.d,0,c)/c*o;return n.strokeStyle=gs,n.setLineDash([3,4]),n.beginPath(),n.moveTo(h,2),n.lineTo(h,8+4*l-4),n.stroke(),n.setLineDash([]),"The furthest each surface can be seen: the first echo must stay above the detection threshold. The green line is the current reading."}function g1(i,e,t){let{ctx:n,w:s,h:r}=Ti(i),a=e.sim,o=-1,l=.95,c=-.78,h=.78,u=Math.min((s-16)/(l-o),(r-16)/(h-c)),d=(s-u*(l-o))/2,f=(r-u*(h-c))/2,g=(L,O)=>[d+(L-o)*u,f+(h-O)*u];n.fillStyle="rgba(255,255,255,0.03)",n.fillRect(d,f,u*(l-o),u*(h-c));let _=at.pad.hx*u,[m,p]=g(at.kitchenX-.25,.7),[v,R]=g(at.kitchenX+.2,-.7);n.fillStyle="rgba(233,226,208,0.12)",n.fillRect(m,p,v-m,R-p),t||(tt(n,"BREAKFAST AREA",m+6,p+10,"rgba(233,226,208,0.7)","left",9),tt(n,"PANTRY",g(at.pantryX,0)[0]+18,p+10,"rgba(96,165,250,0.8)","left",9)),at.zs.forEach((L,O)=>{for(let[k,U]of[[at.pantryX,"rgba(185,142,92,0.7)"],[at.kitchenX,"rgba(244,241,234,0.5)"]]){let[W,q]=g(k,L);n.fillStyle=U,n.fillRect(W-_,q-_,_*2,_*2)}t||tt(n,xn[O].name,g(at.pantryX,L)[0]+_+4,g(at.pantryX,L)[1],At.amber,"left",9)}),n.strokeStyle="rgba(96,165,250,0.75)",n.lineWidth=1.6,n.beginPath();let b=Math.max(1,Math.floor(a.rec.n/500));for(let L=0;L<a.rec.n;L+=b){let[O,k]=g(a.rec.x[L],a.rec.z[L]);L?n.lineTo(O,k):n.moveTo(O,k)}n.stroke();let E=["#efe0c6","#e8eaee","#c4491a","#c2181f","#9fd3ff"];a.items.forEach((L,O)=>{let[k,U]=g(L.x,L.z);n.fillStyle=E[O],n.beginPath(),n.arc(k,U,L.state===1?5:4,0,7),n.fill(),L.state===1&&(n.strokeStyle=At.pink,n.lineWidth=1.5,n.stroke())});let[A,P]=g(a.x,a.z),M=-a.yaw,T=Mr(a.sn.d,.05,.6)*u;n.save(),n.translate(A,P),n.rotate(M),n.fillStyle="rgba(96,165,250,0.14)",n.beginPath(),n.moveTo(_e.sensorX*u,0),n.arc(_e.sensorX*u,0,T,-pt.beam,pt.beam),n.closePath(),n.fill(),n.fillStyle="#f2b400",n.strokeStyle="#070a1a",n.lineWidth=1.2,n.beginPath(),n.roundRect(-.1*u,-.1*u,.27*u,.2*u,3),n.fill(),n.stroke(),n.fillStyle="#070a1a",n.beginPath(),n.moveTo(.16*u,0),n.lineTo(.09*u,-.035*u),n.lineTo(.09*u,.035*u),n.closePath(),n.fill(),n.restore();let I=a.items.filter(L=>L.state===2).length;return tt(n,`${I} of ${xn.length} on the table`,s-8,12,At.green,"right",10,"600"),`A top view of the counter. The blue line is where Patrick has driven; the cone is what his sonar sees. <b>${I}</b> of ${xn.length} ingredients are laid out so far.`}var yd={speed:r1,slip:a1,trac:o1,runspeed:l1,pow:c1,eff:h1,ptime:u1,rays:d1,env:f1,budget:p1,range:m1,map:g1};var Go=180/Math.PI,xt=(i,e=2)=>i.toFixed(e),t0=()=>pr(Fn(1),0),n0=()=>Ei(1).pts.reduce((i,e)=>e.Pm>i.Pm?e:i),ya={structure:["STRUCTURE","#9aa0c3"],power:["POWER","#fbbf24"],motion:["MOTION","#60a5fa"],sense:["SENSE","#34d399"],control:["CONTROL","#a78bfa"],grip:["MANIPULATION","#e879f9"]},jn={base:{tag:"structure",role:"The black acrylic base every other part is bolted to.",desc:"A 3 mm laser-cut plate. The two motors clamp to its sides, the caster and battery pack sit under the deck, and the HC-SR04 mounts on its front edge. It sets the wheelbase: the drive axle is 115 mm behind the caster, so the robot rolls on three points and cannot rock.",specs:()=>[["Size","200 x 116 x 3 mm"],["Material","Black acrylic"],["Drive axle to caster",`${xt(_e.casterX*1e3,0)} mm`],["Track (wheel to wheel)",`${xt(_e.track*1e3,0)} mm`]]},deck:{tag:"structure",role:"A second plate on four standoffs that carries the electronics.",desc:"Lifting the boards onto a deck keeps them clear of the battery and the lift servo underneath, and keeps wiring short. The slot down its middle is where the pushrod passes through when the arm is lowered. Two tall yellow brackets at the back hold the arm's pivot pins.",specs:()=>[["Standoffs","4 x 30 mm hex"],["Slot","for the pushrod"],["Carries","microcontroller, motor driver, ballast"]]},caster:{tag:"motion",role:"A steel ball that holds the nose up and lets the robot pivot freely.",desc:"With only two driven wheels the robot needs a third point of support. A free-rolling ball adds almost no friction and does not care which way the robot turns. Where it sits decides how much of the weight rides on the drive wheels, and that is the grip the rubber bands have to work with.",specs:()=>[["Position",`${xt(_e.casterX*1e3,0)} mm ahead of the axle`],["Weight on drive wheels (arm stowed)",`${xt(ds(On(Jn).theta,!1).drive*100,0)} %`],["Weight on drive wheels (reaching, egg held)",`${xt(ds(On(oi).theta,!0).drive*100,0)} %`]]},battery:{tag:"power",role:"Four AA cells in series: the whole robot runs from this.",desc:"It is the heaviest single part, so its position matters as much as its capacity. It sits low and just behind the axle, which keeps the centre of mass low and puts weight over the drive wheels. It feeds the motor driver directly; the microcontroller board takes its 5 V from the driver's regulator.",specs:()=>[["Cells","4 x AA, in series"],["Nominal voltage",`${xt(Rt.Vbat,1)} V`],["Reaching the motors",`${xt(Rt.Vbat-Rt.Vdrop,1)} V after the driver's drop`]]},motorL:null,motorR:null,wheelL:null,wheelR:null,bandL:null,bandR:null,l298n:{tag:"power",role:"Turns the microcontroller's weak signals into motor current, in both directions.",desc:"Two H-bridges. A PWM signal switches the battery on and off thousands of times a second; the duty cycle sets the average voltage and so the speed. Reversing the polarity reverses the wheel. Shorting the motor terminals through the bridge makes the motor a generator into a short circuit, which is the electrical brake Patrick uses to stop at the ingredient.",specs:()=>[["Channels","2 (one per wheel)"],["Current","2 A per channel"],["Voltage drop",`about ${xt(Rt.Vdrop,1)} V (bipolar bridge)`],["Motor voltage at full duty",`${xt(Fn(1),1)} V`]]},arduino:{tag:"control",role:"Runs the breakfast routine: read the sensor, decide, drive.",desc:"An Arduino-class board. It fires the ultrasonic pulse, times the echo, turns that into a distance, and runs a small state machine: approach, brake, reach, grip, lift, turn, carry, place, retreat. Each state sets the motor PWM and the two servo angles, and the transitions are driven by what the sensor reads.",specs:()=>[["Controller","ATmega328P, 16 MHz, 5 V logic"],["Reads","HC-SR04 echo time"],["Drives","2 PWM motor channels, 2 servos"],["Brakes when",`sensor reads ${xt(zs*100,0)} cm, then coasts to about 8 cm`]]},ballast:{tag:"structure",role:"A brass weight that pulls the centre of mass back over the wheels.",desc:"An arm that reaches out in front of a robot moves its centre of mass forward and unloads the drive wheels, which is exactly when they need grip. A dense lump of brass at the back moves it the other way. The share of weight on the drive wheels in the table below is what the traction model uses.",specs:()=>[["Material","Brass"],["Weight on drive wheels, stowed",`${xt(ds(On(Jn).theta,!1).drive*100,0)} %`],["Weight on drive wheels, reaching",`${xt(ds(On(oi).theta,!0).drive*100,0)} %`]]},sonar:{tag:"sense",role:"The robot's only eyes: it measures distance by timing an echo.",desc:"The left can sends a burst of eight 40 kHz pulses, the right can listens. The distance is half the round-trip time multiplied by the speed of sound. The beam is about 15 degrees wide, so a wall that is tilted more than that sends the echo away from the receiver, and soft surfaces absorb it. The panels on the right show the echo and where its energy goes.",specs:()=>[["Frequency",`${pt.f/1e3} kHz, ${pt.cycles}-cycle burst`],["Beam",`${xt(pt.beam*Go,0)}\xB0 (-6 dB)`],["Range",`${pt.minRange*100}-${pt.maxRange*100} cm`],["Speed of sound at 22 \xB0C",`${xt(Gi(22),1)} m/s`],["Echo time at 10 cm",`${xt(2*.1/Gi(22)*1e6,0)} \xB5s`]]},liftServo:{tag:"motion",role:"Raises and lowers the arm through a pushrod.",desc:"A micro servo turns a long horn; the pushrod joins the horn to the arm. Because the horn is 50 mm and the attachment point on the arm only 50 mm from the pivot, a modest 56 degrees of servo travel swings the arm through more than 70 degrees. The relation between the two angles is a circle-intersection, solved live in the model.",specs:()=>[["Type","SG90 micro servo"],["Torque","1.8 kg\xB7cm at 4.8 V"],["Horn radius",`${xt(_e.horn*1e3,0)} mm`],["Servo travel used",`${xt(oi*Go,0)}\xB0 to ${xt(Jn*Go,0)}\xB0`],["Arm travel",`${xt(On(oi).theta*Go,0)}\xB0 to ${xt(On(Jn).theta*Go,0)}\xB0`]]},pushrod:{tag:"motion",role:"The link that turns a small servo rotation into a large arm swing.",desc:"A fixed-length yellow link. One end rides the servo horn on a circle, the other is pinned to the arm, which itself swings about the pivot. Both ends move on circles, so the arm angle for a given servo angle is where those two circles meet, and a fixed length makes it a precise, repeatable mapping.",specs:()=>[["Length",`${xt(_e.rod*1e3,0)} mm, pin to pin`],["Pinned to the arm at",`${xt(_e.armAttach*1e3,0)} mm from the pivot`]]},arm:{tag:"grip",role:"Two parallel yellow bars that carry the claw out to the food.",desc:"Two equal bars, one above the other, with the claw bracket hanging between their tips make a parallelogram. As the arm swings, the bracket translates without turning, so the claw stays level whatever the lift angle. That is why an egg can be raised straight up from its crate and carried without tipping.",specs:()=>[["Bar length",`${xt(_e.armLen*1e3,0)} mm`],["Bar spacing","35 mm"],["Claw stays","level at every angle"],["Reach (lowered)",`${xt((_e.pivot[0]+_e.armLen*Math.cos(On(oi).theta))*1e3+40,0)} mm ahead of the axle`]]},gripper:{tag:"grip",role:"A 3D-printed teal claw: two hinged fingers that close on the ingredient.",desc:"Two fingers swing about hinges on a printed body. They open wide enough to straddle the ingredient while the robot is still braking, then close until they feel its width. Rounded pads at the tips spread the grip so a soft food item is held, not crushed.",specs:()=>[["Material","3D-printed, teal"],["Fingers","2, each 66 mm long"],["Opening","28\xB0 each side"],["Holds","up to about 40 mm across"]]},jawServo:{tag:"grip",role:"Opens and closes the claw.",desc:'The second micro servo sits on top of the claw body and drives both fingers. It is the last thing in the chain: the controller commands "open", waits for the arm to arrive, then commands "close". Mounting it on the claw, rather than the base, keeps the wiring short and the arm light.',specs:()=>[["Type","SG90 micro servo"],["Mass","9 g"],["Speed","0.1 s per 60\xB0"]]},nameplate:{tag:"structure",role:'A hand-lettered MDF name tag: "Patrick".',desc:"Reference 1 in the build log. Patrick is the first of the robots on this page, and the tag is the only part that does nothing but identify it, which on a table full of identical-looking chassis is worth a few grams.",specs:()=>[["Material","MDF, hand-lettered"],["Size","88 x 44 mm"]]},wiring:{tag:"control",role:"Jumper wires connecting the boards, motors, servos and sensor.",desc:"Red and black carry battery power, the coloured pairs carry the PWM and direction signals to the driver, and the single wires bring each servo its command and the sensor its trigger and echo. A tidy loom matters in a robot that moves: a loose jumper is the most common way a build fails.",specs:()=>[["Wires","8 runs shown"],["Signal levels","5 V logic"]]}},x1=()=>[["Diameter","65 mm, yellow TT rim"],["Rolling radius",`${xt(_e.wheelR*1e3,1)} mm (${xt((_e.wheelR+_e.bandT)*1e3,1)} mm with bands)`],["Peak grip, bare plastic",`\u03BC \u2248 ${xt(Cn(!1,"desk"),2)}`],["Peak grip, with bands",`\u03BC \u2248 ${xt(Cn(!0,"desk"),2)}`]],_1=()=>[["Type","TT gearmotor, 1:48"],["No-load speed",`${xt(Rt.w0*60/(2*Math.PI),0)} rpm at 6 V, ${xt(Ei(1).w0*60/(2*Math.PI),0)} rpm at ${xt(Fn(1),1)} V`],["Stall torque",`${xt(t0().tau,3)} N\xB7m at ${xt(Fn(1),1)} V`],["Stall current",`${xt(t0().I,2)} A`],["Peak mechanical power",`${xt(n0().Pm,2)} W at ${xt(n0().rpm,0)} rpm`],["Best efficiency",`${xt(Math.max(...Ei(1).pts.map(i=>i.eff))*100,0)} %`]];jn.motorL=jn.motorR={tag:"motion",role:"A yellow TT gearmotor: one per wheel, so the robot steers by differential speed.",desc:"A small DC motor spinning fast, with a 48:1 plastic gearbox that trades speed for torque. Driving the two sides at different speeds turns the robot; driving them in opposite directions pivots it on the spot, which is how Patrick turns toward the breakfast tray. At full throttle the motor can ask for more force than a bare plastic wheel can pass to the desk.",specs:_1};jn.wheelL=jn.wheelR={tag:"motion",role:"A 65 mm wheel: the only place the robot touches the world.",desc:"The motor's torque becomes a push on the desk here, and the desk can only push back as hard as friction allows. A bare plastic rim on a varnished desk grips weakly, which is why the wheels are wrapped in rubber bands. Spin the wheel faster than the robot is travelling and the slip ratio in the dynamics charts rises.",specs:x1};jn.bandL=jn.bandR={tag:"motion",role:"Two rubber bands on each tyre: the cheap fix that stopped the wheels spinning.",desc:"Without them the wheels slipped on the smooth desk, so the robot launched crookedly and stopped late. A rubber band raises the friction coefficient from about 0.2 to about 1, so the drive wheels can use the force the motors make. The dynamics panel compares the same start with and without them; the toggle takes them off the robot itself.",specs:()=>[["Friction, bare plastic",`\u03BC \u2248 ${xt(Cn(!1,"desk"),2)}`],["Friction, with bands",`\u03BC \u2248 ${xt(Cn(!0,"desk"),2)}`],["Grip limit, bare",`${xt(wi({bands:!1,surf:"desk"}).limit,2)} N`],["Grip limit, with bands",`${xt(wi({bands:!0,surf:"desk"}).limit,2)} N`],["Motor force at stall",`${xt(wi({bands:!0,surf:"desk"}).pts[0][1],2)} N`],["Adds to radius",`${xt(_e.bandT*1e3,1)} mm`]]};var Mh=`// ============================================================================================================================\r
//  patrick_mission.cpp  -  Patrick's breakfast run, the whole motion, in one file.\r
//\r
//  This is the program that animates the robot on the website. It simulates, 1000 times a second:\r
//    the two gear motors (voltage -> current -> torque), the tyres (slip -> grip force), the arm and claw servos,\r
//    the ultrasonic sensor, and the controller that decides what to do next.\r
//  Its output is a table (CSV) of where Patrick is, how his arm is angled, and what he is holding, every 10 ms.\r
//  The web page runs the same controller and the same equations in JavaScript (mission.js + model.js) and draws every row\r
//  it computes; both versions were run side by side and agree to rounding error (see "Checking it" at the bottom).\r
//\r
//  Build and run (any C++17 compiler):\r
//      g++ -O2 -std=c++17 patrick_mission.cpp -o patrick\r
//      ./patrick                         > run.csv      # the default run: 70 % throttle, rubber bands on\r
//      ./patrick --duty 1.0 --bands 0    > run.csv      # full throttle on bare plastic wheels\r
//      ./patrick --pause-at 20 --resume-at 23           # soft-stop at t = 20 s, move off again at t = 23 s\r
//\r
//  Coordinates: x forward, z to Patrick's left, y up, metres. yaw is the heading in radians, counter-clockwise from +x.\r
// ============================================================================================================================\r
#include <algorithm>\r
#include <cmath>\r
#include <cstdio>\r
#include <cstdlib>\r
#include <cstring>\r
#include <string>\r
#include <vector>\r
\r
static const double PI = 3.14159265358979323846;\r
static const double D2R = PI / 180.0;\r
static const double GRAV = 9.80665;\r
static double clampd(double x, double a, double b) { return std::min(b, std::max(a, x)); }\r
static double sgn(double x) { return x > 0 ? 1.0 : (x < 0 ? -1.0 : 0.0); }\r
\r
// ---------------------------------------------------------------------------------------------------------------- the robot\r
struct Robot {\r
  double wheelR = 0.0325;                 // 65 mm TT wheel\r
  double bandT = 0.0013;                  // rubber band thickness, added to the rolling radius\r
  double track = 0.193;                   // wheel centre to wheel centre\r
  double casterX = 0.125;                 // the front ball caster, ahead of the drive axle\r
  double mBase = 0.55, xBase = 0.035;     // everything except the arm: kg, and its centre of mass ahead of the axle\r
  double mArm = 0.085;\r
  double sensorX = 0.145;                 // the ultrasonic sensor, ahead of the axle\r
  double pivotX = -0.045, pivotY = 0.085; // arm pivot\r
  double armLen = 0.24, armAttach = 0.05;\r
  double servoX = 0.09, servoY = 0.04, horn = 0.05, rod = 0.135;   // lift servo shaft, horn radius, push-rod length\r
  double gripLen = 0.085;\r
} R;\r
\r
struct Motor {                            // the yellow TT gear motor (1:48), seen at the gearbox output\r
  double Vbat = 6.0, Vdrop = 1.4;         // 4 x AA cells, and the two saturation drops of the L298N H-bridge\r
  double Rm = 6.0, I0 = 0.19, ke = 0.2326, etaG = 0.55, J = 4.0e-4;\r
  double tauF = 0;                        // friction torque\r
} MOT;\r
\r
struct MotorOut { double I, tau, Pel, Pmech; };\r
// Motor at terminal voltage V and output speed w: current, shaft torque and powers.\r
static MotorOut motor(double V, double w) {\r
  double I = (V - MOT.ke * w) / MOT.Rm;\r
  double fric = (std::fabs(w) > 0.05 || std::fabs(V) > 0.3) ? 1.0 : 0.0;\r
  double tau = MOT.etaG * MOT.ke * I - sgn(w != 0 ? w : V) * MOT.tauF * fric;\r
  return {I, tau, V * I, tau * w};\r
}\r
static double supplyV(double duty) { return duty * (MOT.Vbat - MOT.Vdrop); }\r
\r
// ------------------------------------------------------------------------------------------------------------------ tyres\r
// Peak friction coefficient: bare hard plastic is slippery (0.22); wrapped in rubber bands it grips (1.0). 'k' is the surface.\r
static double muPeak(bool bands, double k) { return (bands ? 1.0 : 0.22) * k; }\r
// Brush-style friction curve: rises to its peak near 17 % slip, settles to about 80 % of the peak when the wheel just spins.\r
static double mu(double s, double peak) { return peak * std::sin(1.5 * std::atan(10.0 * s)); }\r
\r
struct ComOut { double m, x, drive; };\r
// Centre of mass and the share of the weight that sits on the drive axle, for an arm angle and a payload (kg).\r
static ComOut com(double theta, double payload) {\r
  double ax = R.pivotX + 0.6 * R.armLen * std::cos(theta);\r
  double tx = R.pivotX + R.armLen * std::cos(theta) + 0.5 * R.gripLen;\r
  double m = R.mBase + R.mArm + payload;\r
  double x = (R.mBase * R.xBase + R.mArm * ax + payload * tx) / m;\r
  return {m, x, clampd((R.casterX - x) / R.casterX, 0.05, 1.0)};\r
}\r
\r
// ------------------------------------------------------------------------------------------------------------- arm linkage\r
// Lift servo angle phi -> arm angle theta, by intersecting two circles (the horn's pin and the arm's attachment point).\r
struct ArmOut { bool ok; double theta; };\r
static ArmOut armSolve(double phi) {\r
  double Hx = R.servoX + R.horn * std::cos(phi), Hy = R.servoY + R.horn * std::sin(phi);\r
  double dx = Hx - R.pivotX, dy = Hy - R.pivotY, dd = std::hypot(dx, dy);\r
  double a = R.armAttach, L = R.rod;\r
  if (dd > a + L || dd < std::fabs(L - a)) return {false, 0};\r
  double k = (a * a - L * L + dd * dd) / (2 * dd), h = std::sqrt(std::max(0.0, a * a - k * k));\r
  double ux = dx / dd, uy = dy / dd;\r
  double c1x = R.pivotX + k * ux - h * uy, c1y = R.pivotY + k * uy + h * ux;\r
  double c2x = R.pivotX + k * ux + h * uy, c2y = R.pivotY + k * uy - h * ux;\r
  double Ax = c2y > c1y ? c2x : c1x, Ay = c2y > c1y ? c2y : c1y;      // the elbow-up solution\r
  return {true, std::atan2(Ay - R.pivotY, Ax - R.pivotX)};\r
}\r
static void armTip(double theta, double& x, double& y) { x = R.pivotX + R.armLen * std::cos(theta); y = R.pivotY + R.armLen * std::sin(theta); }\r
\r
static const double STOP_AT = 0.108;                       // the sonar reading that makes the controller brake, m\r
static const double PHI_STOW = 74 * D2R, PHI_CARRY = 46 * D2R, PHI_LOW = 18.4 * D2R;\r
static const double GRIP_H = 0.0225;                       // the claw holds each item this far above its base, m\r
static const double SENSOR_BEAM = 15 * D2R, SONAR_MAX = 4.0;\r
\r
// ----------------------------------------------------------------------------------------------------------------- kitchen\r
struct Item { const char* name; double w, m; };            // width across the claw, mass\r
static const Item ITEMS[5] = {{"eggs", 0.034, 0.045}, {"salt", 0.036, 0.055}, {"spice", 0.038, 0.050}, {"sauce", 0.040, 0.080}, {"glass", 0.042, 0.060}};\r
static const int NITEM = 5;\r
static const double LANES[5] = {-0.50, -0.25, 0.0, 0.25, 0.50};   // one lane per ingredient (z, to the left)\r
static const double PANTRY_X = 0.60, KITCHEN_X = -0.62;           // centre lines of the pantry pads and of the breakfast spots\r
static const double PAD_HX = 0.04, PAD_HZ = 0.04;\r
static const double START_X = -0.05, START_Z = -0.50;\r
static const double RETREAT = 0.14;\r
\r
// Jaw opening (0 closed .. 1 fully open) at which the fingers touch an item of the given width.\r
static double jawFor(double w) { return std::asin(clampd((w / 2 - 0.0165) / 0.036, 0, 1)) / (28 * D2R); }\r
\r
struct Box { double x, z, hx, hz; };\r
static std::vector<Box> BOXES;                                    // what the sonar can see: every pad and every breakfast spot\r
\r
// Where a ray from (ox,oz) in direction (dx,dz) first enters a box (distance in the ray's own units), or infinity.\r
static double rayBox(double ox, double oz, double dx, double dz, const Box& b) {\r
  double t0 = 0, t1 = 1e9;\r
  double os[2] = {ox, oz}, ds[2] = {dx, dz}, lo[2] = {b.x - b.hx, b.z - b.hz}, hi[2] = {b.x + b.hx, b.z + b.hz};\r
  for (int i = 0; i < 2; i++) {\r
    if (std::fabs(ds[i]) < 1e-9) { if (os[i] < lo[i] || os[i] > hi[i]) return INFINITY; }\r
    else {\r
      double a = (lo[i] - os[i]) / ds[i], c = (hi[i] - os[i]) / ds[i];\r
      if (a > c) std::swap(a, c);\r
      t0 = std::max(t0, a); t1 = std::min(t1, c);\r
      if (t0 > t1) return INFINITY;\r
    }\r
  }\r
  return t0;\r
}\r
// What the ultrasonic sensor reads: the nearest surface in a narrow cone ahead (five rays, 6 degrees apart), metres.\r
static double sonarRead(double x, double z, double yaw) {\r
  double ox = x + std::cos(yaw) * R.sensorX, oz = z + std::sin(yaw) * R.sensorX, best = SONAR_MAX;\r
  for (int i = -2; i <= 2; i++) {\r
    double a = yaw + i * 6 * D2R, dx = std::cos(a), dz = std::sin(a);\r
    for (const Box& b : BOXES) { double t = rayBox(ox, oz, dx, dz, b); if (t < best) best = t; }\r
    if (dx > 1e-6) { double t = (1.10 - ox) / dx; if (t > 0 && t < best) best = t; }   // the far wall of the arena at x = 1.10\r
  }\r
  return best;\r
}\r
\r
// --------------------------------------------------------------------------------------------------------- one drive side\r
struct Side { bool bands = true; double w = 0, v = 0, slip = 0, F = 0, tau = 0, Pm = 0, I = 0, Pel = 0, rEff = 0; };\r
// One side of the robot (one wheel, half the mass) advanced by dt.\r
// The tyre's grip changes very fast with slip at low speed, so one 1 ms step is too coarse (the wheel would chatter): take four.\r
static void sideStep(Side& s, double V, bool shorted, double N, double peak, double dt, double mass) {\r
  double rEff = R.wheelR + (s.bands ? R.bandT : 0);\r
  const int n = 4; double h = dt / n;\r
  double sl = 0, F = 0, tau = 0;\r
  for (int k = 0; k < n; k++) {\r
    double slipDen = std::max({std::fabs(s.w * rEff), std::fabs(s.v), 0.02});\r
    sl = (s.w * rEff - s.v) / slipDen;                            // slip ratio: 0 = pure rolling, 1 = wheel spinning in place\r
    F = N * mu(sl, peak);                                         // the grip force the tyre passes to the table\r
    if (shorted) tau = -MOT.etaG * MOT.ke * MOT.ke * s.w / MOT.Rm - sgn(s.w) * MOT.tauF * (std::fabs(s.w) > 0.05 ? 1.0 : 0.0);   // terminals shorted: electrical brake\r
    else tau = motor(V, s.w).tau;\r
    double roll = 0.03 * N * (std::fabs(s.v) > 0.003 ? sgn(s.v) : s.v / 0.003);      // rolling resistance\r
    s.w += (tau - F * rEff) / MOT.J * h;                          // the wheel: motor torque against the tyre's reaction\r
    s.v += (F - roll) / mass * h;                                 // the robot: grip force minus rolling resistance\r
  }\r
  s.slip = sl; s.F = F; s.tau = tau; s.Pm = shorted ? 0 : std::max(0.0, tau * s.w);\r
  MotorOut m = shorted ? MotorOut{0, 0, 0, 0} : motor(V, s.w);\r
  s.I = shorted ? 0 : m.I; s.Pel = shorted ? 0 : m.Pel; s.rEff = rEff;\r
}\r
\r
// ---------------------------------------------------------------------------------------------------------- the controller\r
enum Phase { IDLE, APPROACH, BRAKE, REACH, GRIP, LIFT, TURN_CARRY, SETTLE_C, CARRY, BRAKE_C, PLACE, RETREAT_P,\r
             TURN_SHIFT, SETTLE_T, SHIFT, SETTLE_S, TURN_PANTRY, SETTLE_P, DONE };\r
\r
struct Placed { int state = 0; double x = 0, z = 0, y = 0, yaw = 0; };   // 0 on the pantry pad, 1 in the claw, 2 on the breakfast table\r
\r
struct Mission {\r
  double duty = 0.7, peak = 1.0, dt = 0.001;\r
  bool bands = true;\r
  Side L, Rr;\r
  double x = START_X, z = START_Z, yaw = 0, wl = 0, wr = 0, t = 0, phi = PHI_STOW, jaw = 0;\r
  bool held = false;\r
  Phase phase = IDLE; double phaseT = 0;\r
  int item = 0; double yawRef = 0, startX = 0, startZ = 0, energy = 0, armTarget = PHI_STOW, jawTarget = 0, theta = 0;\r
  long tick = 0;\r
  double g = 0, goal = 0;                          // "go" gain: 1 = running, 0 = halted. It ramps, so every stop is gradual.\r
  Placed items[NITEM];\r
  double sonar = 4, Pel = 0, Pm = 0, I = 0;\r
  bool finished = false;\r
\r
  Mission(double d, bool b) : duty(d), bands(b) {\r
    peak = muPeak(b, 1.0); L.bands = Rr.bands = b;\r
    for (int i = 0; i < NITEM; i++) { items[i].x = PANTRY_X; items[i].z = LANES[i]; items[i].y = 0.025; }\r
  }\r
  void go(Phase p) { phase = p; phaseT = 0; }\r
  void start() { goal = 1; }\r
  void pause()  { goal = 0; }\r
  void resume() { goal = 1; }\r
  double ge() const { return g * g * (3 - 2 * g); }   // eased go-gain: the very start and end of a stop are gentle too\r
\r
  // One tick (1 ms). Returns false while the robot is halted and nothing moves.\r
  bool step() {\r
    // the go-gain slews towards its goal: 0.6 s to resume, 0.8 s to pause\r
    double rate = goal > g ? 1 / 0.6 : 1 / 0.8;\r
    g += clampd(goal - g, -rate * dt, rate * dt);\r
    if (g <= 0 && goal == 0) return false;\r
    double e = ge(), dtc = dt * e;                   // controller time slows with the gain: timers and servos slow down smoothly\r
    t += dt; phaseT += dtc;\r
    sonar = sonarRead(x, z, yaw);\r
    const Item& it = ITEMS[item];\r
    double uL = 0, uR = 0; bool shortIt = false;\r
    auto ramp = [&](double T) { return clampd(phaseT / T, 0, 1); };\r
    auto hold = [&]() {                              // steer to the reference heading while driving straight\r
      double om = (Rr.v - L.v) / R.track, s = clampd(2.5 * (yawRef - yaw) - 0.35 * om, -0.15, 0.15);\r
      uR += s; uL -= s;\r
    };\r
    auto turn = [&](Phase nextPhase) {               // PD on heading, ease off, hold\r
      double err = yawRef - yaw, om = (Rr.v - L.v) / R.track;\r
      double u = clampd(3.0 * err - 0.4 * om, -0.6, 0.6);\r
      if (std::fabs(u) < 0.35) u = 0.35 * sgn(err);   // below this the gearmotor only hums against stiction\r
      uR = u * ramp(0.25); uL = -uR;\r
      if (std::fabs(err) < 3 * D2R && std::fabs(om) < 0.35) go(nextPhase);\r
    };\r
    auto settled = [&]() { return std::fabs(L.v) + std::fabs(Rr.v) < 0.006 || phaseT > 1.2; };\r
\r
    switch (phase) {\r
      case IDLE:        if (phaseT > 0.9) go(APPROACH); break;\r
      case APPROACH:    uL = uR = duty * ramp(0.35); hold(); if (sonar <= STOP_AT) go(BRAKE); break;\r
      case BRAKE:       shortIt = true; if (settled()) { go(REACH); armTarget = PHI_LOW; jawTarget = 1; } break;\r
      case REACH:       shortIt = true; if (phaseT > 1.5) go(GRIP); break;\r
      case GRIP:        shortIt = true;\r
                        if (phaseT > 0.35) jawTarget = jawFor(it.w);\r
                        if (phaseT > 1.1) { held = true; items[item].state = 1; go(LIFT); armTarget = PHI_CARRY; } break;\r
      case LIFT:        shortIt = true; if (phaseT > 1.3) { go(TURN_CARRY); yawRef += PI; } break;\r
      case TURN_CARRY:  turn(SETTLE_C); break;\r
      case SETTLE_C:    shortIt = true; if (phaseT > 0.5) go(CARRY); break;\r
      case CARRY:       uL = uR = duty * ramp(0.35); hold(); if (sonar <= STOP_AT) go(BRAKE_C); break;\r
      case BRAKE_C:     shortIt = true; if (settled()) { go(PLACE); armTarget = PHI_LOW; } break;\r
      case PLACE:       shortIt = true;\r
                        if (phaseT > 1.5 && held) { jawTarget = 1; held = false; items[item].state = 2; items[item].y = 0.025 + 0.004; }   // let go\r
                        if (phaseT > 2.4) { armTarget = PHI_STOW; jawTarget = 0; go(RETREAT_P); startX = x; startZ = z; } break;\r
      case RETREAT_P:   uL = uR = -0.5 * ramp(0.2); hold();\r
                        if (std::hypot(x - startX, z - startZ) >= RETREAT) {\r
                          if (item == NITEM - 1) go(DONE); else { go(TURN_SHIFT); yawRef -= PI / 2; }\r
                        } break;\r
      case TURN_SHIFT:  turn(SETTLE_T); break;\r
      case SETTLE_T:    shortIt = true; if (phaseT > 0.4) go(SHIFT); break;\r
      case SHIFT: {     // drive along the table to the next lane, slowing as the gap closes\r
                        double rem = LANES[item + 1] - z;\r
                        uL = uR = std::max(0.4, duty * clampd(rem / 0.12, 0, 1)) * ramp(0.3); hold();\r
                        if (rem < 0.004) go(SETTLE_S);\r
                        break; }\r
      case SETTLE_S:    shortIt = true; if (settled()) { go(TURN_PANTRY); yawRef -= PI / 2; } break;\r
      case TURN_PANTRY: turn(SETTLE_P); break;\r
      case SETTLE_P:    shortIt = true; if (phaseT > 0.5) { item++; go(APPROACH); } break;\r
      case DONE:        shortIt = true; break;\r
    }\r
    uL *= e; uR *= e;                                // every drive command is scaled by the soft-stop gain\r
    // the arm and claw servos move at their own rate towards their targets; the gain slows them too\r
    phi += clampd(armTarget - phi, -60 * D2R * dtc, 60 * D2R * dtc);\r
    jaw += clampd(jawTarget - jaw, -90 * D2R * dtc / 0.6, 90 * D2R * dtc / 0.6);\r
    ArmOut sol = armSolve(phi); theta = sol.ok ? sol.theta : 1.0;\r
    ComOut cm = com(theta, held ? it.m : 0.0);\r
    double N = 0.5 * cm.drive * cm.m * GRAV, mass = 0.5 * cm.m;\r
    sideStep(L,  shortIt ? 0 : supplyV(uL), shortIt, N, peak, dt, mass);\r
    sideStep(Rr, shortIt ? 0 : supplyV(uR), shortIt, N, peak, dt, mass);\r
    double v = 0.5 * (L.v + Rr.v), om = (Rr.v - L.v) / R.track;\r
    yaw += om * dt; x += v * std::cos(yaw) * dt; z += v * std::sin(yaw) * dt;\r
    wl += L.w * dt; wr += Rr.w * dt;\r
    Pel = L.Pel + Rr.Pel; Pm = L.Pm + Rr.Pm; I = L.I + Rr.I;\r
    energy += (Pel + 0.12 * MOT.Vbat) * dt;\r
    if (held) {                                      // the item rides in the claw\r
      double tx, ty; armTip(theta, tx, ty); double gx = tx + 0.072;\r
      Placed& q = items[item]; q.x = x + std::cos(yaw) * gx; q.z = z + std::sin(yaw) * gx; q.y = ty - 0.012 - GRIP_H; q.yaw = yaw;\r
    }\r
    tick++;\r
    if (phase == DONE && phaseT > 2.0) { finished = true; goal = 0; g = 0; }\r
    return true;\r
  }\r
};\r
\r
// ------------------------------------------------------------------------------------------------------------------- main\r
int main(int argc, char** argv) {\r
  double duty = 0.7, pauseAt = -1, resumeAt = -1; bool bands = true; const char* out = nullptr;\r
  for (int i = 1; i < argc; i++) {\r
    if (!std::strcmp(argv[i], "--duty") && i + 1 < argc) duty = std::atof(argv[++i]);\r
    else if (!std::strcmp(argv[i], "--bands") && i + 1 < argc) bands = std::atoi(argv[++i]) != 0;\r
    else if (!std::strcmp(argv[i], "--pause-at") && i + 1 < argc) pauseAt = std::atof(argv[++i]);\r
    else if (!std::strcmp(argv[i], "--resume-at") && i + 1 < argc) resumeAt = std::atof(argv[++i]);\r
    else if (!std::strcmp(argv[i], "--out") && i + 1 < argc) out = argv[++i];\r
  }\r
  MOT.tauF = MOT.etaG * MOT.ke * MOT.I0;\r
  for (int i = 0; i < NITEM; i++) { BOXES.push_back({PANTRY_X, LANES[i], PAD_HX, PAD_HZ}); BOXES.push_back({KITCHEN_X, LANES[i], PAD_HX, PAD_HZ}); }\r
\r
  FILE* f = out ? std::fopen(out, "w") : stdout;\r
  std::fprintf(f, "t,x,z,yaw,arm_servo,jaw,phase,item,holding,power_W,energy_J,sonar_m,go_gain\\n");\r
  Mission m(duty, bands);\r
  m.start();\r
  double wall = 0;                                   // wall-clock time of the run, counting the halted time too\r
  for (long k = 0; k < 600000 && !m.finished; k++, wall += m.dt) {\r
    if (pauseAt >= 0 && wall >= pauseAt && wall < pauseAt + 1e-9 + m.dt) m.pause();\r
    if (resumeAt >= 0 && wall >= resumeAt && wall < resumeAt + 1e-9 + m.dt) m.resume();\r
    bool moved = m.step();\r
    if (moved && (m.tick - 1) % 10 == 0)\r
      std::fprintf(f, "%.6f,%.6f,%.6f,%.6f,%.6f,%.6f,%d,%d,%d,%.6f,%.6f,%.6f,%.4f\\n", m.t, m.x, m.z, m.yaw, m.phi, m.jaw, (int)m.phase, m.item, m.held ? 1 : 0, m.Pel, m.energy, m.sonar, m.g);\r
  }\r
  std::fprintf(stderr, "finished at t = %.2f s; items on the table:", m.t);\r
  for (int i = 0; i < NITEM; i++) std::fprintf(stderr, " %s(%.3f,%.3f)", ITEMS[i].name, m.items[i].x, m.items[i].z);\r
  std::fprintf(stderr, "\\n");\r
  if (out) std::fclose(f);\r
  return 0;\r
}\r
\r
// ---------------------------------------------------------------------------------------------------------- Checking it\r
// The same run in JavaScript (the page's mission.js) was written to a CSV with identical columns and compared row by row\r
// with this program's output: every row has the same phase, item and holding state, and the positions agree to < 1e-6 m.\r
`;var Mt=i=>document.getElementById(i),xs=(i,e,t)=>Math.min(t,Math.max(e,i)),Xi=Math.PI/180,Ys=B,u0=matchMedia("(prefers-reduced-motion: reduce)").matches,ui=Mt("k-stage"),ei=Mt("k-gl"),y1=document.querySelector(".k-intro");if(!ui||!ei)throw new Error("kitchen stage markup is missing");var We={speed:1,cam:"cinema",duty:.7,u:0,uT:0,sel:null,iso:!1,hover:null},Fe=new vh({duty:We.duty}),Xo={sim:Fe,cache:e0("desk",We.duty,!0),duty:We.duty},d0=["IDLE","APPROACH","BRAKE","REACH","GRIP","LIFT","TURN_CARRY","SETTLE_C","CARRY","BRAKE_C","PLACE","RETREAT_P","TURN_SHIFT","SETTLE_T","SHIFT","SETTLE_S","TURN_PANTRY","SETTLE_P","DONE"],f0=["READY","APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","SETTLE","CARRY","BRAKE","PLACE","RETREAT","TURN","SETTLE","SHIFT","SETTLE","TURN","SETTLE","DONE"],An=new ha({canvas:ei,antialias:!0,powerPreference:"high-performance"});An.toneMapping=os;An.toneMappingExposure=1;An.outputColorSpace=Gt;An.shadowMap.enabled=!0;An.shadowMap.type=as;var Pn=new is;Pn.background=new je("#0a0f26");Pn.fog=new sr("#0a0f26",3.2,9);var b1=new Bs(An);function M1(){let i=new is;i.add(new rt(new un(12,32,16),new nn({color:new je("#1d2442"),side:sn})));let e=(t,n,s,r,a="#ffffff")=>{let o=new rt(new qn(t,n),new nn({color:new je(a).multiplyScalar(r),side:Jt}));o.position.set(...s),o.lookAt(0,0,0),i.add(o)};return e(7,5,[-4,7,-5],4.2),e(1.4,7,[6,3,4],5.5,"#dbe7ff"),e(3,3,[-6,2,5],3.2,"#ffd9b0"),e(10,10,[0,11,0],1.1),e(12,3,[0,-2.5,-8],.9,"#8aa0ff"),b1.fromScene(i,.015).texture}Pn.environment=M1();Pn.environmentIntensity=.8;var ti=new hn(36,1,.05,14),Qn=new rs("#fff3e0",2.2);Qn.castShadow=!0;Object.assign(Qn.shadow.camera,{left:-.7,right:.7,top:.7,bottom:-.7,near:.2,far:5});Qn.shadow.bias=-4e-4;Qn.shadow.normalBias=.002;Pn.add(Qn,Qn.target);var p0=new rs("#9db7ff",.6);p0.position.set(-1,.8,1);Pn.add(p0);Pn.add(new lr("#aab8ff","#1a1530",.5));var S1=new Wt(4,4,{type:Qt,samples:4}),Ma=new fa(An,S1);Ma.addPass(new pa(Pn,ti));var Yo=new cs(Pn,ti,4,4);Yo.output=cs.OUTPUT.Default;Yo.updateGtaoMaterial({radius:.035,distanceExponent:1.2,thickness:.6,scale:1.2,samples:14,distanceFallOff:1,screenSpaceRadius:!1});Yo.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:12});Ma.addPass(Yo);Ma.addPass(new ma);var m0=!0,sE=Kp(Pn),zn=yh({lite:_0()>=1});Pn.add(zn.root);var Ed=xn.map((i,e)=>{let t=Jp(i.id);return Pn.add(t),t}),$o=new zt;zn.root.add($o);$o.position.set(_e.sensorX+.008,_e.sensorY,0);var w1=(()=>{let i=[0,0,0],e=[],t=16;for(let r=0;r<=t;r++){let a=(r/t*2-1)*pt.beam;i.push(Math.cos(a),0,Math.sin(a))}for(let r=1;r<=t;r++)e.push(0,r,r+1);let n=new Ft;n.setAttribute("position",new gt(i,3)),n.setIndex(e);let s=new rt(n,new nn({color:"#60a5fa",transparent:!0,opacity:.055,side:Jt,depthWrite:!1}));return $o.add(s),s})(),Td=new rt(new un(.005,12,8),new nn({color:"#f472b6"}));$o.add(Td);var Et={az:-88*Xi,el:26*Xi,dist:1.45,t:new Ys(at.start.x,.08,Bn(at.start.z))},qt={az:Et.az,el:Et.el,dist:Et.dist},E1=new Ys(-.05,0,0),i0=new Ys,s0=new Ys;function g0(){return We.cam==="wide"||We.cam==="top"?i0.copy(E1):i0.set(Fe.x+Math.cos(Fe.yaw)*.05,.075,Bn(Fe.z+Math.sin(Fe.yaw)*.05))}var bd=new mn,Sh=new Ys;function T1(i,e){let t=1-Math.exp(-i*3.2),n=qt.az,s=qt.el,r=qt.dist;if(We.cam==="cinema"){let l=[ut.REACH,ut.GRIP,ut.LIFT,ut.PLACE].includes(Fe.phase);n=(-88+34*Math.sin(e/1e3*.06))*Xi,s=(l?16:26)*Xi,r=l?.78:1.45,qt.az=n,qt.el=s,qt.dist=r}else We.cam==="wide"?(n=-78*Xi,s=38*Xi,r=3.3):We.cam==="top"&&(n=-90*Xi,s=84*Xi,r=2.4);let a=g0();We.sel&&Xs[We.sel]?(bd.setFromObject(Xs[We.sel].group),bd.getCenter(s0),bd.getSize(Sh),a=s0,r=xs(Math.max(Sh.x,Sh.y,Sh.z)*3.2+.1,.22,.7),n=Et.az,s=Et.el):We.u>.02&&(r*=1+.5*We.u,n=Et.az,s=Et.el),Et.az+=(n-Et.az)*t,Et.el+=(s-Et.el)*t,Et.dist+=(r-Et.dist)*t,Et.t.lerp(a,1-Math.exp(-i*4));let o=Math.cos(Et.el);ti.position.set(Et.t.x+Et.dist*o*Math.cos(Et.az),Et.t.y+Et.dist*Math.sin(Et.el),Et.t.z+Et.dist*o*Math.sin(Et.az)),ti.lookAt(Et.t)}function qo(i){We.cam=i,i==="follow"&&(qt.az=Et.az,qt.el=Et.el,qt.dist=Et.dist),document.querySelectorAll("#k-cams .chip").forEach(e=>e.classList.toggle("on",e.dataset.cam===i))}document.querySelectorAll("#k-cams .chip").forEach(i=>i.addEventListener("click",()=>qo(i.dataset.cam)));var qs=new Map,Pd=!1,Er=null;ei.addEventListener("pointerdown",i=>{ei.setPointerCapture(i.pointerId),qs.set(i.pointerId,[i.clientX,i.clientY]),ei.classList.add("drag"),Pd=!1});ei.addEventListener("pointermove",i=>{if(Er=[i.clientX,i.clientY],!qs.has(i.pointerId))return;let e=qs.get(i.pointerId);qs.set(i.pointerId,[i.clientX,i.clientY]),Math.abs(i.clientX-e[0])+Math.abs(i.clientY-e[1])>1&&(Pd=!0),qs.size===1&&(We.cam!=="follow"&&(qt.az=Et.az,qt.el=Et.el,qt.dist=Et.dist,qo("follow")),qt.az+=(i.clientX-e[0])*.008,qt.el=xs(qt.el+(i.clientY-e[1])*.006,.04,1.5),Et.az=qt.az,Et.el=qt.el)});var x0=i=>{let e=qs.size===1&&!Pd;if(qs.delete(i.pointerId),ei.classList.remove("drag"),e&&i.type==="pointerup"&&v0()){let t=y0(i.clientX,i.clientY);$s(t===We.sel?null:t)}};ei.addEventListener("pointerleave",()=>{Er=null,We.hover=null,ba.classList.remove("on"),Ch()});ei.addEventListener("pointerup",x0);ei.addEventListener("pointercancel",x0);ei.addEventListener("wheel",i=>{i.preventDefault(),We.cam!=="follow"&&(qt.az=Et.az,qt.el=Et.el,qt.dist=Et.dist,qo("follow")),qt.dist=xs(qt.dist*Math.exp(i.deltaY*.0012),.3,4)},{passive:!1});var Ad=[{pr:1.6,shadow:2048,post:2,lite:!1,shEvery:1,charts:4,idle:1},{pr:1.25,shadow:1024,post:0,lite:!0,shEvery:1,charts:5,idle:2},{pr:1,shadow:512,post:0,lite:!0,shEvery:2,charts:6,idle:2},{pr:.75,shadow:0,post:0,lite:!0,shEvery:0,charts:8,idle:2}];function _0(){let i=new URLSearchParams(location.search).get("tier");if(i!==null&&i!=="")return xs(+i||0,0,3);let e=matchMedia("(pointer: coarse)").matches,t=Math.min(innerWidth,innerHeight)<700,n=navigator.hardwareConcurrency||4,s=navigator.deviceMemory||4,r=innerWidth*innerHeight*(devicePixelRatio||1)**2>55e5;return e||t?2:n<=4||s<=4||r?1:0}var Ar=_0(),Th={W:1,H:1},Tr={introR:0,introB:0,listR:230};function A1(){Th.W=ui.clientWidth,Th.H=ui.clientHeight;let i=y1.getBoundingClientRect(),e=ui.getBoundingClientRect();Tr.introR=i.right-e.left,Tr.introB=i.bottom-e.top}function Rd(){let i=Ad[Ar];An.setPixelRatio(Math.min(devicePixelRatio||1,i.pr)),m0=i.post>0,Yo.enabled=i.post>1,Qn.castShadow=i.shadow>0,An.shadowMap.autoUpdate=i.shEvery===1,i.shadow&&(Qn.shadow.mapSize.set(i.shadow,i.shadow),Qn.shadow.map&&(Qn.shadow.map.dispose(),Qn.shadow.map=null)),ui.classList.toggle("lite",i.lite);for(let e of zn.meshes)e.userData.r===void 0&&(e.geometry.computeBoundingSphere(),e.userData.r=e.geometry.boundingSphere.radius,e.userData.cs=e.castShadow),e.castShadow=e.userData.cs&&(Ar<2||e.userData.r>.012);Id()}function Id(){let i=ui.clientWidth,e=ui.clientHeight;An.setSize(i,e,!1),Ma.setPixelRatio(An.getPixelRatio()),Ma.setSize(i,e),ti.aspect=i/e,ti.fov=i/e<.9?58:36,ti.updateProjectionMatrix(),A1()}addEventListener("resize",Id);var Xs=zn.byId,Ld=Mt("k-lab"),Md=Mt("k-part"),ba=Mt("k-tip"),Vo=Mt("k-seltag"),v0=()=>Ld.classList.contains("on")||We.u>.02,r0=new cr,a0=new Ee,R1=new je("#a78bfa"),C1=i=>{for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0};function y0(i,e){let t=ei.getBoundingClientRect();a0.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),r0.setFromCamera(a0,ti);let n=r0.intersectObjects(zn.meshes.filter(C1),!1).find(s=>!(We.iso&&We.sel&&s.object.userData.part!==We.sel));return n?n.object.userData.part:null}function Ch(){for(let i of zn.parts){let e=We.sel===i.id,t=We.hover===i.id&&!e,n=We.iso&&We.sel&&!e;for(let s of i.mats)s.emissive.copy(R1).multiplyScalar(e?.16:t?.12:0),s.transparent!==!!n&&(s.transparent=!!n,s.needsUpdate=!0),s.opacity=n?.07:1,s.depthWrite=!n}}function b0(){if(!We.sel){Md.classList.remove("on");return}let i=Xs[We.sel],e=jn[We.sel],[t,n]=ya[e.tag];Md.innerHTML=`<div class="tagrow"><span class="tag" style="color:${n};border-color:${n}66">${t}</span><h3>${i.name}</h3><div class="acts"><button class="chip ${We.iso?"on":""}" id="kp-iso" aria-pressed="${We.iso}">ISOLATE</button><button class="chip" id="kp-x">CLOSE</button></div></div>
    <p class="role">${e.role}</p><p class="desc">${e.desc}</p><div class="specs">${e.specs().map(([s,r])=>`<div><span>${s}</span><b>${r}</b></div>`).join("")}</div>`,Mt("kp-iso").onclick=()=>{We.iso=!We.iso,Ch(),b0()},Mt("kp-x").onclick=()=>$s(null),Md.classList.add("on")}function $s(i){We.sel=i,i||(We.iso=!1),Ch(),b0(),document.querySelectorAll("#k-plist .chip").forEach(e=>e.classList.toggle("on",e.dataset.id===i)),i&&We.u<.35&&(We.uT=Math.max(We.uT,.35)),i&&Dd()}function Dd(){Fe.status==="RUNNING"&&Fe.pause()}zn.parts.forEach(i=>{let e=document.createElement("button");e.className="chip",e.dataset.id=i.id,e.textContent=i.name.toUpperCase(),e.style.setProperty("--c",ya[jn[i.id].tag][1]),e.onclick=()=>$s(We.sel===i.id?null:i.id),Mt("k-plist").appendChild(e)});function M0(i){Ld.classList.toggle("on",i),Mt("k-lab-btn").setAttribute("aria-pressed",i),i?(Dd(),We.uT<.01&&(We.uT=.4)):(We.uT=0,$s(null))}Mt("k-lab-btn").addEventListener("click",()=>M0(!Ld.classList.contains("on")));Mt("k-reasm").addEventListener("click",()=>{We.uT=0,$s(null)});Mt("k-u").addEventListener("input",i=>{We.uT=We.u=+i.target.value,We.u>.02&&Dd()});function o0(){We.uT=0,We.sel&&$s(null)}var Ri={start:Mt("k-start"),pause:Mt("k-pause"),stop:Mt("k-stop")};function Sa(i){i==="start"?(o0(),Fe.start()):i==="pause"?Fe.status==="PAUSING"||Fe.status==="PAUSED"?(o0(),Fe.resume()):Fe.pause():i==="stop"&&Fe.stop(),Nd()}var P1={READY:"READY",RUNNING:"RUNNING",PAUSING:"SLOWING TO A HALT",PAUSED:"PAUSED",STOPPING:"STOPPING",STOPPED:"STOPPED",DONE:"BREAKFAST IS SERVED"},l0="";function Nd(){let i=Fe.status;if(i===l0)return;l0=i;let e=i==="PAUSING"||i==="PAUSED";Ri.start.disabled=!(i==="READY"||i==="STOPPED"||i==="DONE"),Ri.start.querySelector("span").textContent=i==="STOPPED"?"RESTART":i==="DONE"?"RUN AGAIN":"START",Ri.pause.disabled=!(i==="RUNNING"||e),Ri.pause.querySelector("span").textContent=e?"RESUME":"PAUSE",Ri.stop.disabled=!(i==="RUNNING"||e);let t=Mt("k-state");t.textContent=P1[i],t.dataset.s=i,Mt("k-hint").classList.toggle("on",i==="READY"),document.querySelectorAll("[data-act]").forEach(n=>{n.dataset.act==="start"?n.disabled=Ri.start.disabled:n.dataset.act==="pause"?(n.disabled=Ri.pause.disabled,n.textContent=e?"RESUME":"PAUSE"):n.disabled=Ri.stop.disabled})}document.addEventListener("click",i=>{let e=i.target.closest("[data-act]");e&&!e.disabled&&Sa(e.dataset.act)});Ri.start.onclick=()=>Sa("start");Ri.pause.onclick=()=>Sa("pause");Ri.stop.onclick=()=>Sa("stop");document.querySelectorAll("#k-speed .chip").forEach(i=>i.addEventListener("click",()=>{We.speed=+i.dataset.x,document.querySelectorAll("#k-speed .chip").forEach(e=>e.classList.toggle("on",e===i))}));Mt("k-full").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():(ui.requestFullscreen?.()||Promise.resolve()).catch(()=>{})});document.addEventListener("fullscreenchange",()=>{Mt("k-full").setAttribute("aria-pressed",!!document.fullscreenElement),setTimeout(Id,50)});addEventListener("keydown",i=>{if(!i.target.closest?.("input, select, textarea")){if(i.key==="Escape"&&Xt.open)Ph();else if(i.key==="Escape"&&We.sel)$s(null);else if(i.code==="Space"&&Fd){i.preventDefault();let e=Fe.status;Sa(e==="READY"||e==="STOPPED"||e==="DONE"?"start":"pause")}}});var Zo=Mh.replace(/\r/g,"").split(`
`),I1="static|const|struct|enum|class|return|if|else|for|while|switch|case|break|default|void|bool|int|long|double|auto|true|false|nullptr|using|namespace|std|sizeof|inline|char|new",L1=new RegExp(`("(?:[^"\\\\]|\\\\.)*")|(\\b\\d[\\d.]*(?:e-?\\d+)?\\b)|(\\b(?:${I1})\\b)|(#\\w+)|(\\b[A-Z][A-Z_0-9]{2,}\\b)`,"g"),c0=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function D1(i){let e=i,t="",n=i.indexOf("//");return n>=0&&!/"[^"]*\/\/[^"]*"/.test(i)&&(e=i.slice(0,n),t=i.slice(n)),c0(e).replace(L1,(r,a,o,l,c,h)=>a?`<i class="s">${r}</i>`:o?`<i class="n">${r}</i>`:l?`<i class="k">${r}</i>`:c?`<i class="p">${r}</i>`:`<i class="c2">${r}</i>`)+(t?`<i class="c">${c0(t)}</i>`:"")}var S0=Zo.map(D1),Ud={};Zo.forEach((i,e)=>{let t=/^\s*case (\w+):/.exec(i);t&&(Ud[t[1]]=e)});var N1=Object.entries(Ud).sort((i,e)=>i[1]-e[1]);function w0(i){let e=d0[i],t=Ud[e];if(t===void 0)return null;let n=N1.find(([,r])=>r>t),s=n?n[1]:t+8;for(;s>t+1&&/^\s*$/.test(Zo[s-1]);)s--;return[t,s]}function U1(){let i=document.createElement("a");i.href=URL.createObjectURL(new Blob([Mh.replace(/\r?\n/g,`\r
`)],{type:"text/plain"})),i.download="patrick_mission.cpp",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}var Ah=()=>Fe.items.filter(i=>i.state===2).length,en=(i,e=1)=>i.toFixed(e),Ci=[{id:"dyn",title:"DYNAMICS",tag:"rubber bands vs bare",col:"#34d399",mini:"speed",ang:-140,rad:330,foot:()=>`slip ${en(Math.max(Math.abs(Fe.slipL),Math.abs(Fe.slipR)),2)} \xB7 grip on drive ${en(Fe.drive*100,0)}%`,cards:[["speed","Speed after a full-throttle start","Same motors, same battery, same robot: the only change is the rubber bands."],["slip","Wheel slip",""],["trac","What the motors ask for vs what the tyres can give","When the motor force is above the grip limit the wheel spins instead of pushing."],["runspeed","Live: Patrick\u2019s speed over the run","Press pause to watch the soft stop."]],reads:()=>{let i=Cn(!0,"desk"),e=Fe.drive*(_e.mBase+_e.mArm)*9.80665;return[["Grip limit now",en(i*e,2)+" N","hl"],["Weight on drive wheels",en(Fe.drive*100,0)+" %"],["Slip, live",en(Math.max(Math.abs(Fe.slipL),Math.abs(Fe.slipR)),2),"mg"],["Go-gain",en(Fe.g,2)]]}},{id:"pow",title:"POWER",tag:"watts and speed",col:"#fbbf24",mini:"ptime",ang:-42,rad:340,foot:()=>`${en(Fe.Pel,1)} W in \xB7 ${en(Fe.energy,0)} J used`,cards:[["pow","Power vs wheel speed","One motor at three throttle settings. The dots are the motor right now."],["eff","Torque, current and efficiency",""],["ptime","Electrical power over the breakfast run","Both motors plus the electronics."]],reads:()=>[["Wheel speed",en(Fe.w*60/(2*Math.PI),0)+" rpm"],["Mech. power / motor",en(Fe.Pm/2,2)+" W","hl"],["Electrical in (both)",en(Fe.Pel,2)+" W"],["Energy used so far",en(Fe.energy,1)+" J","mg"]]},{id:"snd",title:"SOUND",tag:"ultrasonic echo",col:"#60a5fa",mini:"rays",ang:18,rad:360,foot:()=>{let i=Sr(Xo);return Fe.sn.d>=3.99?"no echo":`${en(i.d*100,0)} cm \xB7 ${en(2*i.d/Gi(22)*1e6,0)} \xB5s echo`},cards:[["rays","The burst, the wall and the echo (top view)","Dots are the sound travelling, bright when strong."],["env","What the receiver hears","Signal in dB above the detection threshold."],["budget","Where the energy went","Loss budget of the first echo, in dB."],["range","How far each surface can be seen",""]],reads:()=>{let i=Sr(Xo),e=Vi(i.d,i.psi,i.wall),t=20*Math.log10(Math.max(e.amp,1e-9)/pt.thresh);return[["Reading",Fe.sn.d>=3.99?"no echo":en(i.d*100,0)+" cm","hl"],["Echo time",en(2*i.d/Gi(22)*1e6,0)+" \xB5s"],["Echo vs threshold",(t>=0?"+":"\u2212")+en(Math.abs(t),0)+" dB","mg"],["Returned energy",(Math.pow(10,-e.total/10)*100).toExponential(0)+" %"],["Detected",e.detected?"YES":"NO",e.detected?"ok":"bad"]]}},{id:"map",title:"MISSION MAP",tag:"where everything is",col:"#e879f9",mini:"map",ang:118,rad:300,foot:()=>`${Ah()} of ${xn.length} on the table`,cards:[["map","The counter from above",""]],reads:()=>[["State",f0[Fe.phase]],["Carrying",Fe.held?xn[Fe.item].full:"\u2014","hl"],["On the table",`${Ah()} of ${xn.length}`,"ok"],["Run time",en(Fe.t,1)+" s"],["Sonar",Fe.sn.d>=3.99?"no echo":en(Fe.sn.d*100,1)+" cm","mg"]]},{id:"code",title:"C++ CODE",tag:"patrick_mission.cpp",col:"#a78bfa",mini:"code",ang:172,rad:350,foot:()=>`${Zo.length} lines \xB7 case ${d0[Fe.phase]}`}],E0=Mt("k-bubbles"),T0=Mt("k-leaders"),F1="http://www.w3.org/2000/svg";Ci.forEach((i,e)=>{let t=document.createElement("div");t.className="bub",t.tabIndex=0,t.setAttribute("role","button"),t.setAttribute("aria-label",`${i.title}: ${i.tag}. Press to open full screen`),t.style.setProperty("--c",i.col),t.innerHTML=`<div class="bub-head"><i></i><b>${i.title}</b><span>${i.tag}</span><em aria-hidden="true">\u2922</em></div>`+(i.mini==="code"?'<pre class="bub-code"></pre>':'<canvas class="bub-cv"></canvas>')+'<div class="bub-foot"></div>',E0.appendChild(t),i.el=t,i.cv=t.querySelector("canvas"),i.codeEl=t.querySelector("pre"),i.footEl=t.querySelector(".bub-foot"),i.x=innerWidth/2,i.y=innerHeight/2,i.hover=!1,i.cap="",i.lastPhase=-1,i.phase=e*1.7;let n=document.createElementNS(F1,"line");n.setAttribute("stroke",i.col),n.setAttribute("stroke-opacity","0.45"),n.setAttribute("stroke-width","1"),n.setAttribute("stroke-dasharray","2 4"),T0.appendChild(n),i.line=n,t.addEventListener("pointerenter",()=>{i.hover=!0}),t.addEventListener("pointerleave",()=>{i.hover=!1}),t.addEventListener("focus",()=>{i.hover=!0}),t.addEventListener("blur",()=>{i.hover=!1}),t.addEventListener("click",()=>Cd(i.id)),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),Cd(i.id))})});var Sd=new Ys;function O1(i,e){let t=Th.W,n=Th.H,s=t<760;if(E0.classList.toggle("dock",s),T0.style.display=s?"none":"",s)return;Sd.set(zn.root.position.x,.12,zn.root.position.z).project(ti);let r=(Sd.x*.5+.5)*t,a=(-Sd.y*.5+.5)*n,o=1-Math.exp(-i*3.2);Ci.forEach(l=>{let c=xs(t/1500,.78,1.1),h=r+Math.cos(l.ang*Xi)*l.rad*c+Math.sin(e/1e3*.7+l.phase)*7,u=a+Math.sin(l.ang*Xi)*l.rad*.62*c+Math.cos(e/1e3*.6+l.phase)*6;h=xs(h,112,t-12-100),u=xs(u,166,n-190),h<Tr.introR+110&&u<Tr.introB+80&&(t>1100?h=Tr.introR+110:u=Tr.introB+80),h<Tr.listR+110&&u>n-265&&(u=n-265),l.tx=h,l.ty=u});for(let l=0;l<3;l++)for(let c=0;c<Ci.length;c++)for(let h=c+1;h<Ci.length;h++){let u=Ci[c],d=Ci[h],f=212-Math.abs(u.tx-d.tx),g=160-Math.abs(u.ty-d.ty);if(f>0&&g>0){let _=u.hover?0:1,m=d.hover?0:1,p=_+m||1;if(f<g){let v=Math.sign(u.tx-d.tx)||1;u.tx+=v*f*_/p,d.tx-=v*f*m/p}else{let v=Math.sign(u.ty-d.ty)||1;u.ty+=v*g*_/p,d.ty-=v*g*m/p}}}Ci.forEach(l=>{l.hover||(l.x+=(xs(l.tx,112,t-112)-l.x)*o,l.y+=(xs(l.ty,166,n-190)-l.y)*o),l.el.style.transform=`translate(${l.x}px, ${l.y}px) translate(-50%, -50%)`;let c=l.x-r,h=l.y-a,u=Math.hypot(c,h)||1,d=70;l.line.setAttribute("x1",r),l.line.setAttribute("y1",a),l.line.setAttribute("x2",l.x-c/u*Math.min(d,u*.5)),l.line.setAttribute("y2",l.y-h/u*Math.min(d*.6,u*.5)),l.line.style.opacity=l.hover?.9:1})}function B1(i,e){if(i.mini==="code"){if(i.lastPhase!==Fe.phase){i.lastPhase=Fe.phase;let n=w0(Fe.phase)||[0,8],s=Math.max(0,n[0]-1),r=Math.min(Zo.length,Math.max(n[1],s+9));i.codeEl.innerHTML=S0.slice(s,r).map((a,o)=>`<div class="${s+o>=n[0]&&s+o<n[1]?"act":""}"><u>${s+o+1}</u>${a||" "}</div>`).join("")}}else yd[i.mini](i.cv,Xo,!0,e);let t=i.foot();t!==i.footTxt&&(i.footTxt=t,i.footEl.textContent=t)}var Xt={open:!1,id:null,cards:[],follow:!0,last:-1},Rh=Mt("k-modal"),wr=Mt("k-mbody");function Cd(i){let e=Ci.find(t=>t.id===i);if(Xt.open=!0,Xt.id=i,Xt.cards=[],Xt.last=-1,Mt("k-mtitle").innerHTML=`<i style="background:${e.col}"></i>${e.title}<span>${e.tag}</span>`,i==="code")wr.className="mbody code",wr.innerHTML=`<div class="ctools"><button class="chip" id="c-dl">\u2B07 DOWNLOAD patrick_mission.cpp</button><button class="chip" id="c-cp">COPY</button><button class="chip on" id="c-fl" aria-pressed="true">FOLLOW THE ROBOT</button><span class="cinfo">Highlighted: the controller step Patrick is running right now. Build: <code>g++ -O2 -std=c++17 patrick_mission.cpp -o patrick</code></span></div>
      <div class="cview" id="c-view"><pre>${S0.map((t,n)=>`<div data-l="${n}"><u>${n+1}</u>${t||" "}</div>`).join("")}</pre></div>`,Mt("c-dl").onclick=U1,Mt("c-cp").onclick=async t=>{try{await navigator.clipboard.writeText(Mh),t.target.textContent="COPIED"}catch{t.target.textContent="PRESS CTRL+C"}setTimeout(()=>{t.target.textContent="COPY"},1600)},Mt("c-fl").onclick=t=>{Xt.follow=!Xt.follow,t.target.classList.toggle("on",Xt.follow),t.target.setAttribute("aria-pressed",Xt.follow)},Xt.cards=[];else{wr.className="mbody graphs n"+e.cards.length,wr.innerHTML='<div class="reads" id="m-reads"></div><div class="grid">'+e.cards.map(([s,r,a],o)=>`<div class="card"><h4>${r}</h4>${a?`<div class="sub">${a}</div>`:""}<canvas></canvas><div class="cap"></div></div>`).join("")+"</div>";let t=wr.querySelectorAll("canvas"),n=wr.querySelectorAll(".cap");e.cards.forEach(([s],r)=>Xt.cards.push({g:s,cv:t[r],cap:n[r],txt:""}))}Rh.classList.add("on"),document.body.classList.add("modal-open"),Mt("k-mclose").focus()}function Ph(){Xt.open=!1,Rh.classList.remove("on"),document.body.classList.remove("modal-open"),wr.innerHTML=""}Mt("k-mclose").addEventListener("click",Ph);Rh.addEventListener("click",i=>{i.target===Rh&&Ph()});function k1(i){let e=Ci.find(n=>n.id===Xt.id);if(Xt.id==="code"){if(Xt.last!==Fe.phase){Xt.last=Fe.phase;let n=Mt("c-view");if(!n)return;n.querySelectorAll(".act").forEach(r=>r.classList.remove("act"));let s=w0(Fe.phase);if(!s)return;for(let r=s[0];r<s[1];r++)n.querySelector(`[data-l="${r}"]`)?.classList.add("act");if(Xt.follow){let r=n.querySelector(`[data-l="${s[0]}"]`);r&&n.scrollTo({top:Math.max(0,r.offsetTop-70),behavior:u0?"auto":"smooth"})}}return}Xt.cards.forEach(n=>{let s=yd[n.g](n.cv,Xo,!1,i);s&&s!==n.txt&&(n.txt=s,n.cap.innerHTML=s)});let t=Mt("m-reads");if(t&&e.reads){let n=e.reads().map(([s,r,a])=>`<div class="rd ${a||""}"><span>${s}</span><b>${r}</b></div>`).join("");n!==Xt.rh&&(Xt.rh=n,t.innerHTML=n)}}var A0=Mt("k-steps"),R0=Mt("k-items");Gp.forEach(i=>{let e=document.createElement("span");e.textContent=i,A0.appendChild(e)});xn.forEach(i=>{let e=document.createElement("li");e.innerHTML=`<i></i>${i.name}`,R0.appendChild(e)});var h0="";function z1(){let i=Vp[Fe.phase],e=Fe.phase===ut.DONE,t=`${Fe.status}|${Fe.phase}|${Fe.item}|${Ah()}|${Math.floor(Fe.t*2)}`;t!==h0&&(h0=t,Mt("k-phase").textContent=f0[Fe.phase],Mt("k-time").textContent=en(Fe.t,0)+" s",[...A0.children].forEach((n,s)=>{n.classList.toggle("on",!e&&s===i)}),[...R0.children].forEach((n,s)=>{let r=Fe.items[s];n.dataset.s=r.state,n.classList.toggle("now",s===Fe.item&&Fe.status!=="READY"&&r.state<2)}),Mt("k-prog").style.width=(Ah()+(Fe.held?.5:0))/xn.length*100+"%")}var Wo=0,Ws=0,wh=performance.now(),Fd=!0,kn={sum:0,n:0,slow:0,age:0};new IntersectionObserver(i=>{Fd=i[0].isIntersecting},{threshold:.05}).observe(ui);function H1(i,e){if(Fe.g>0||Fe.goal>0){Wo+=Math.min(i,.05)*We.speed;let s=0;for(;Wo>=Fe.dt&&s<160;)Fe.step(),Wo-=Fe.dt,s++;s>=160&&(Wo=0)}else Wo=0;Nd(),We.u+=(We.uT-We.u)*(1-Math.exp(-i*3)),Math.abs(We.uT-We.u)<5e-4&&(We.u=We.uT),document.activeElement!==Mt("k-u")&&(Mt("k-u").value=We.u),Mt("k-uo").textContent=Math.round(We.u*100)+"%";let t=zn.pose({phi:Fe.phi,jaw:Fe.jaw,wl:Fe.wl,wr:Fe.wr,bands:!0,u:We.u});zn.root.position.set(Fe.x,zn.root.userData.lift||0,Bn(Fe.z)),zn.root.rotation.y=Fe.yaw,Fe.items.forEach((s,r)=>{let a=Ed[r];a.position.set(s.x,s.y,Bn(s.z)),a.rotation.y=s.yaw}),Qn.target.position.set(Fe.x,0,Bn(Fe.z)),Qn.position.set(Fe.x+.9,1.6,Bn(Fe.z)-.7);let n=Math.min(Fe.sn.d,.5);if(w1.scale.set(n,1,n),Td.position.set(n,0,0),Td.visible=Fe.sn.d<.5,$o.visible=Fe.status!=="READY"&&We.u<.3,We.u>.02&&Fe.held&&Ed[Fe.item].position.copy(Xs.gripper.group.localToWorld(new Ys(.072,-.012-.0225,0))),z1(),T1(i,e),O1(i,e),v0()&&Er&&!qs.size&&Ws%2===0){let s=y0(Er[0],Er[1]);s!==We.hover&&(We.hover=s,Ch(),ei.classList.toggle("pick",!!s));let r=ui.getBoundingClientRect();s?(ba.textContent=Xs[s].name,ba.style.left=Er[0]-r.left+"px",ba.style.top=Er[1]-r.top+"px",ba.classList.add("on")):ba.classList.remove("on")}if(We.sel&&Xs[We.sel]){let s=new mn().setFromObject(Xs[We.sel].group),r=s.getCenter(new Ys);r.y=s.max.y,r.project(ti),Vo.style.left=(r.x*.5+.5)*ui.clientWidth+"px",Vo.style.top=(-r.y*.5+.5)*ui.clientHeight+"px",Vo.textContent=Xs[We.sel].name,Vo.classList.add("on")}else Vo.classList.remove("on")}function Eh(i){let e=Ad[Ar];if(document.hidden||!Fd){wh=i,requestAnimationFrame(Eh);return}if(e.idle===2&&!Fe.active&&!Xt.open&&(Ws+1)%2){Ws++,requestAnimationFrame(Eh);return}let t=Math.min((i-wh)/1e3,.1);if(wh=i,Ws++,H1(u0&&Fe.status==="READY"?0:t,i),e.shEvery>1&&Ws%e.shEvery===0&&(An.shadowMap.needsUpdate=!0),m0?Ma.render():An.render(Pn,ti),Ci.forEach(n=>{(Ws%(n.hover?2:e.charts)===n.id.length%2||Ws<4)&&B1(n,i)}),Xt.open&&Ws%2===0&&k1(i),Ar<Ad.length-1&&(kn.age+=t,kn.age>1&&(kn.sum+=t,kn.n++,kn.n>=15))){let n=kn.sum/kn.n;kn.slow=n>.045?2:n>.027?kn.slow+1:0,kn.sum=kn.n=0,kn.slow>=2&&(Ar++,Rd(),kn.slow=0,kn.age=0)}requestAnimationFrame(Eh)}function wd(){Rd(),Nd(),qo("cinema"),Et.t.copy(g0()),(An.compileAsync?An.compileAsync(Pn,ti):Promise.resolve()).catch(()=>{}).finally(()=>{wh=performance.now(),requestAnimationFrame(Eh)}),window.__KITCHEN={tier:()=>Ar,setTier:e=>{Ar=e,Rd()},select:$s,setLab:M0,sim:Fe,S:We,D:Xo,rig:Et,want:qt,robot:zn,scene:Pn,camera:ti,renderer:An,setCam:qo,act:Sa,openModal:Cd,closeModal:Ph,modal:Xt,itemMesh:Ed,BUBBLES:Ci}}document.fonts?.ready?.then(wd,wd)??wd();function Od(){let i=x=>document.getElementById(x),e=(x,S,V)=>Math.min(V,Math.max(S,x)),t=Math.PI/180,n=matchMedia("(prefers-reduced-motion: reduce)").matches,s=B,r=25,a=ms,o={bands:!0,surf:"desk",duty:.7,follow:!0,d:1,psi:0,wall:"card",sonarViz:!0,play:!0,u:0,uT:0,sel:null,hover:null,iso:!1,tab:"dyn"},l=i("stage"),c=i("gl"),h=new ha({canvas:c,antialias:!0,powerPreference:"high-performance"});h.toneMapping=os,h.toneMappingExposure=1,h.outputColorSpace=Gt,h.shadowMap.enabled=!0,h.shadowMap.type=as;let u=new is;u.background=new je("#0a0f26"),u.fog=new sr("#0a0f26",2.2,5.5);let d=new Bs(h);function f(){let x=new is,S=new rt(new un(12,32,16),new nn({color:new je("#1d2442"),side:sn}));x.add(S);let V=(Y,j,ue,be,Ce,Re="#ffffff")=>{let xe=new rt(new qn(Y,j),new nn({color:new je(Re).multiplyScalar(Ce),side:Jt}));xe.position.set(...ue),xe.lookAt(...be),x.add(xe)};return V(7,5,[-4,7,-5],[0,0,0],4.2),V(1.4,7,[6,3,4],[0,0,0],5.5,"#dbe7ff"),V(3,3,[-6,2,5],[0,0,0],3.2,"#ffd9b0"),V(10,10,[0,11,0],[0,0,0],1.1),V(12,3,[0,-2.5,-8],[0,0,0],.9,"#8aa0ff"),d.fromScene(x,.015).texture}u.environment=f(),u.environmentIntensity=.9;let g=new hn(36,1,.05,9),_=new rs("#fff3e0",2.3);_.position.set(.9,1.6,-.7),_.castShadow=!0,_.shadow.camera.left=-.55,_.shadow.camera.right=.55,_.shadow.camera.top=.55,_.shadow.camera.bottom=-.55,_.shadow.camera.near=.2,_.shadow.camera.far=4,_.shadow.bias=-4e-4,_.shadow.normalBias=.002,u.add(_,_.target);let m=new rs("#9db7ff",.7);m.position.set(-1,.8,1),u.add(m),u.add(new lr("#aab8ff","#1a1530",.55));let p=new Wt(4,4,{type:Qt,samples:4}),v=new fa(h,p);v.addPass(new pa(u,g));let R=new cs(u,g,4,4);R.output=cs.OUTPUT.Default,R.updateGtaoMaterial({radius:.035,distanceExponent:1.2,thickness:.6,scale:1.25,samples:14,distanceFallOff:1,screenSpaceRadius:!1}),R.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:12}),v.addPass(R),v.addPass(new ma);let b=!0;function E(){let x=document.createElement("canvas");x.width=x.height=512;let S=x.getContext("2d");S.fillStyle="#171c3a",S.fillRect(0,0,512,512);for(let Y=0;Y<700;Y++)S.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,S.fillRect(Math.random()*512,Math.random()*512,30+Math.random()*70,1);S.strokeStyle="rgba(167,139,250,0.22)",S.lineWidth=2,S.strokeRect(1,1,510,510),S.strokeStyle="rgba(167,139,250,0.08)",S.lineWidth=1;for(let Y=1;Y<5;Y++)S.beginPath(),S.moveTo(Y*102.4,0),S.lineTo(Y*102.4,512),S.moveTo(0,Y*102.4),S.lineTo(512,Y*102.4),S.stroke();let V=new Ui(x);return V.wrapS=V.wrapT=wn,V.repeat.set(10,8),V.colorSpace=Gt,V.anisotropy=4,V}let A=new rt(new qn(2.6,2.08),new Dn({map:E(),color:"#8f96c0",roughness:.6,metalness:.05}));A.rotation.x=-Math.PI/2,A.position.set(.1,0,0),A.receiveShadow=!0,u.add(A);let P=new rt(new vt(2.6,.04,2.08),new Dn({color:"#0e1230",roughness:.8}));P.position.set(.1,-.0205,0),u.add(P);let M=new Dn({color:"#b98e5c",roughness:.75}),T=new zt;u.add(T);let I=x=>-x;function L(x,S,V,Y,j,ue,be){let Ce=new rt(new vt(x,S,V),Y);return Ce.position.set(j,ue,be),Ce.castShadow=Ce.receiveShadow=!0,T.add(Ce),Ce}let O=Un.crate,k=Un.tray;L(O.hx*2,O.h,O.hz*2,M,O.x,O.h/2,I(O.z)),L(k.hx*2,k.h,k.hz*2,M,k.x,k.h/2,I(k.z));{let x=new rt(new gn(.036,.032,.006,40),new Dn({color:"#ece9e2",roughness:.3}));x.position.set(k.x,k.h+.003,I(k.z)),x.castShadow=x.receiveShadow=!0,T.add(x)}L(.05,.008,.05,new Dn({color:"#d9a85a",roughness:.9}),O.x+.01,.004,I(O.z+.17));{let x=new rt(new un(.02,24,16),new Dn({color:"#f08a1c",roughness:.6}));x.position.set(O.x-.03,.02,I(O.z-.16)),x.castShadow=!0,T.add(x)}{let x=new rt(new gn(.02,.016,.04,28),new Dn({color:"#e8e4dc",roughness:.3}));x.position.set(k.x-.09,.02,I(k.z+.05)),x.castShadow=!0,T.add(x)}L(.012,.12,1.4,new Dn({color:"#a8825a",roughness:.9}),Un.wall.x+.006,.06,0);let U=new rt(new un(1,28,20),new Dn({color:"#f1e6cf",roughness:.4}));U.scale.set(.0155,.0225,.0155),U.castShadow=!0,u.add(U);let W=yh();u.add(W.root);let q=W.byId,K=new zt;W.root.add(K),K.position.set(_e.sensorX+.008,_e.sensorY,0);let pe=new Ft;{let S=[0,0,0];for(let Y=0;Y<=16;Y++){let j=(Y/16*2-1)*pt.beam;S.push(Math.cos(j),0,Math.sin(j))}let V=[];for(let Y=1;Y<=16;Y++)V.push(0,Y,Y+1);pe.setAttribute("position",new gt(S,3)),pe.setIndex(V)}let Z=new rt(pe,new nn({color:"#60a5fa",transparent:!0,opacity:.1,side:Jt,depthWrite:!1}));K.add(Z);let ne=(()=>{let x=[];for(let S=0;S<=24;S++){let V=(S/24*2-1)*pt.beam;x.push(new s(Math.cos(V),0,Math.sin(V)))}return new Ft().setFromPoints(x)})(),he=[0,1,2].map(()=>{let x=new Ya(ne,new Qr({color:"#7dd3fc",transparent:!0,opacity:.5,depthWrite:!1}));return K.add(x),x}),Pe=new rt(new un(.006,12,8),new nn({color:"#f472b6"}));K.add(Pe);let ve=_h({bands:o.bands,surf:o.surf,duty:o.duty}),qe=0,ee=0,se={};function D(){se.stepOn=xr({bands:!0,surf:o.surf,duty:1}),se.stepOff=xr({bands:!1,surf:o.surf,duty:1}),se.tracOn=wi({bands:!0,surf:o.surf,duty:1}),se.tracOff=wi({bands:!1,surf:o.surf,duty:1}),se.power=[.4,.7,1].map(x=>Ei(x,o.bands)),se.powerSel=Ei(o.duty,o.bands),se.ranges=Object.keys(li).map(x=>[x,Oo(x)])}function N(){ve=_h({bands:o.bands,surf:o.surf,duty:o.duty}),qe=0,ee=0,i("r-dur").textContent=ve.duration.toFixed(1)+" s",D(),_s(!0)}let $={hero:{az:-50,el:20,dist:.9,at:"robot"},side:{az:-90,el:5,dist:.7,at:"robot"},top:{az:-90,el:84,dist:.78,at:"robot"},front:{az:8,el:10,dist:.5,at:"sonar"},arm:{az:-75,el:14,dist:.5,at:"arm"},wheel:{az:-105,el:9,dist:.3,at:"wheelL"}},re={az:-50*t,el:20*t,dist:.9,t:new s(0,.08,0)},oe={az:re.az,el:re.el,dist:re.dist,mode:"robot"},Se="hero",Ae=null;function z(x,S){let V=$[x];V&&(Se=x,Ae=null,S||(o.sel=o.sel),oe.az=V.az*t,oe.el=V.el*t,oe.dist=V.dist,oe.mode=V.at,document.querySelectorAll("#views .chip").forEach(Y=>Y.classList.toggle("on",Y.dataset.view===x)))}let ae=(x,S)=>{let V=new mn().setFromObject(q[x].group);return V.getCenter(S),V},Q=new s,te=new mn;function de(){let x=W.root.position;if(o.sel&&q[o.sel])return new mn().setFromObject(q[o.sel].group).getCenter(Q),Q;switch(oe.mode){case"sonar":return Q.set(x.x,.05,x.z).add(new s(.07,0,0).applyAxisAngle(new s(0,1,0),W.root.rotation.y));case"arm":return ae("arm",Q),Q;case"wheelL":return ae("wheelL",Q),Q;default:return Q.set(x.x,.115+o.u*.06,x.z).add(new s(.03,0,0).applyAxisAngle(new s(0,1,0),W.root.rotation.y))}}function ge(){if(!o.sel||!q[o.sel])return null;let x=new mn().setFromObject(q[o.sel].group),S=x.getSize(new s);return e(Math.max(S.x,S.y,S.z)*3.2+.1,.22,.7)}function Te(x){let S=1-Math.exp(-x*5.5),Y=ge()??oe.dist*(1+.55*o.u);re.az+=(oe.az-re.az)*S,re.el+=(oe.el-re.el)*S,re.dist+=(Y-re.dist)*S,re.t.lerp(de(),1-Math.exp(-x*6));let j=Math.cos(re.el);g.position.set(re.t.x+re.dist*j*Math.cos(re.az),re.t.y+re.dist*Math.sin(re.el),re.t.z+re.dist*j*Math.sin(re.az)),g.lookAt(re.t)}let Ie=[{pr:1.6,shadow:2048,post:2},{pr:1.3,shadow:1024,post:1},{pr:1,shadow:512,post:0}],Ye=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<700?2:0;function F(){let x=Ie[Ye];h.setPixelRatio(Math.min(devicePixelRatio||1,x.pr)),b=x.post>0,R.enabled=x.post>1,_.shadow.mapSize.set(x.shadow,x.shadow),_.shadow.map&&(_.shadow.map.dispose(),_.shadow.map=null),ht()}function ht(){let x=l.clientWidth,S=l.clientHeight;h.setSize(x,S,!1),v.setPixelRatio(h.getPixelRatio()),v.setSize(x,S),g.aspect=x/S,g.fov=x/S<.9?52:36,g.updateProjectionMatrix()}addEventListener("resize",()=>{ht(),_s(!0)});let ot=new cr,C=new Ee,y=null,X=x=>{for(let S=x;S;S=S.parent)if(!S.visible)return!1;return!0};function J(x,S){let V=c.getBoundingClientRect();C.set((x-V.left)/V.width*2-1,-((S-V.top)/V.height)*2+1),ot.setFromCamera(C,g);let Y=W.meshes.filter(X),j=ot.intersectObjects(Y,!1).find(ue=>!(o.iso&&o.sel&&ue.object.userData.part!==o.sel));return j?j.object.userData.part:null}let le=new je("#a78bfa");function we(){for(let x of W.parts){let S=o.sel===x.id,V=o.hover===x.id&&!S,Y=o.iso&&o.sel&&!S;for(let j of x.mats){j.emissive.copy(le).multiplyScalar(S?.16:V?.12:0);let ue=Y;j.transparent!==ue&&(j.transparent=ue,j.needsUpdate=!0),j.opacity=Y?.07:1,j.depthWrite=!Y}}}let Le=x=>ya[x][1];function ce(){let x=i("pcard");if(!o.sel){x.innerHTML='<div class="empty"><b>Click any part</b> of Patrick, or pick one from the list below, to see what it is and what it does. Slide <b>Disassemble</b> to take the robot apart, and use <b>Isolate</b> on a part to see it alone.</div>';return}let S=q[o.sel],V=jn[o.sel],[Y,j]=ya[V.tag];x.innerHTML=`<div class="tagrow"><span class="tag" style="color:${j};border-color:${j}66">${Y}</span><h3>${S.name}</h3>
    <div class="acts"><button class="chip ${o.iso?"on":""}" id="pc-iso" aria-pressed="${o.iso}">ISOLATE</button><button class="chip" id="pc-close">CLOSE</button></div></div>
    <p class="role">${V.role}</p><p class="desc">${V.desc}</p>
    <div class="specs">${V.specs().map(([ue,be])=>`<div><span>${ue}</span><b>${be}</b></div>`).join("")}</div>`,i("pc-iso").onclick=()=>{o.iso=!o.iso,we(),ce(),ze()},i("pc-close").onclick=()=>{fe(null),ze()}}function fe(x){o.sel=x,x||(o.iso=!1),we(),ce(),document.querySelectorAll("#partlist .chip").forEach(V=>V.classList.toggle("on",V.dataset.id===x));let S=x?jn[x].tag:null;x&&!Me.running&&Xe({sense:"snd",power:"pow",motion:"dyn"}[S]||o.tab),x&&Me.running&&Xe({sense:"snd",power:"pow",motion:"dyn"}[S]||o.tab),x&&o.u<.35&&!Me.running&&(o.uT=o.u)}let Be=i("partlist");W.parts.forEach(x=>{let S=document.createElement("button");S.className="chip",S.dataset.id=x.id,S.textContent=x.name.toUpperCase(),S.style.setProperty("--c",Le(jn[x.id].tag)),S.onclick=()=>{fe(o.sel===x.id?null:x.id),ze()},Be.appendChild(S)});let Ze=i("steps"),Ue=["APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","CARRY","PLACE","RETREAT"],De={1:0,2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:7,10:8};Ue.forEach(x=>{let S=document.createElement("span");S.textContent=x,Ze.appendChild(S)});function Xe(x){o.tab=x,document.querySelectorAll("#tabs button").forEach(S=>S.classList.toggle("on",S.dataset.tab===x)),["dyn","pow","snd"].forEach(S=>i("tab-"+S).classList.toggle("on",S===x)),_s(!0)}document.querySelectorAll("#tabs button").forEach(x=>x.addEventListener("click",()=>{Xe(x.dataset.tab),ze()})),document.querySelectorAll("#views .chip").forEach(x=>x.addEventListener("click",()=>{o.sel=null,o.iso=!1,we(),ce(),document.querySelectorAll("#partlist .chip").forEach(S=>S.classList.remove("on")),z(x.dataset.view),ze()}));function Qe(x){o.bands!==x&&(o.bands=x,i("t-bands").setAttribute("aria-pressed",x),i("t-bands").textContent=x?"RUBBER BANDS ON":"RUBBER BANDS OFF",document.querySelectorAll("#d-bands button").forEach(S=>S.classList.toggle("on",S.dataset.b==="1"===x)),N())}i("t-bands").addEventListener("click",()=>{Qe(!o.bands),ze()}),document.querySelectorAll("#d-bands button").forEach(x=>x.addEventListener("click",()=>{Qe(x.dataset.b==="1"),ze()})),i("t-play").addEventListener("click",()=>{o.play=!o.play,i("t-play").setAttribute("aria-pressed",o.play),i("t-play").textContent=o.play?"PAUSE RUN":"PLAY RUN",ze()}),i("t-replay").addEventListener("click",()=>{qe=0,ee=0,o.play=!0,i("t-play").setAttribute("aria-pressed",!0),i("t-play").textContent="PAUSE RUN",ze()}),i("t-sonar").addEventListener("click",x=>{o.sonarViz=!o.sonarViz,x.currentTarget.setAttribute("aria-pressed",o.sonarViz),ze()}),i("u").addEventListener("input",x=>{o.uT=o.u=+x.target.value,ze()}),i("d-surf").addEventListener("change",x=>{o.surf=x.target.value,N(),ze()}),i("duty").addEventListener("input",x=>{o.duty=+x.target.value,i("duty-out").textContent=Math.round(o.duty*100)+" %",D(),_s(!0),ze()}),i("duty").addEventListener("change",()=>{N()}),document.querySelectorAll("#s-src button").forEach(x=>x.addEventListener("click",()=>{o.follow=x.dataset.f==="1",document.querySelectorAll("#s-src button").forEach(S=>S.classList.toggle("on",S===x)),ze()})),i("s-d").addEventListener("input",x=>{o.d=+x.target.value,o.follow=!1,document.querySelectorAll("#s-src button").forEach(S=>S.classList.toggle("on",S.dataset.f==="0")),ze()}),i("s-psi").addEventListener("input",x=>{o.psi=+x.target.value*t,i("s-psi-out").textContent=x.target.value+"\xB0",ze()}),i("s-wall").addEventListener("change",x=>{o.wall=x.target.value,ze()});let Ke=new Map,G=0,Oe=!1;c.addEventListener("pointerdown",x=>{if(c.setPointerCapture(x.pointerId),Ke.set(x.pointerId,[x.clientX,x.clientY]),Oe=!1,c.classList.add("drag"),ze(),Ke.size===2){let[S,V]=[...Ke.values()];G=Math.hypot(S[0]-V[0],S[1]-V[1])}}),c.addEventListener("pointermove",x=>{if(y=[x.clientX,x.clientY],!Ke.has(x.pointerId))return;let S=Ke.get(x.pointerId);if(Ke.set(x.pointerId,[x.clientX,x.clientY]),Ke.size===1){let V=x.clientX-S[0],Y=x.clientY-S[1];Math.abs(V)+Math.abs(Y)>1&&(Oe=!0),oe.az+=V*.008,oe.el=e(oe.el+Y*.006,.03,1.5),re.az=oe.az,re.el=oe.el}else if(Ke.size===2){let[V,Y]=[...Ke.values()],j=Math.hypot(V[0]-Y[0],V[1]-Y[1]);G&&(oe.dist=e(oe.dist*G/j,.18,1.6),re.dist=oe.dist),G=j,Oe=!0}});let me=x=>{let S=Ke.size===1&&!Oe;if(Ke.delete(x.pointerId),c.classList.remove("drag"),S&&x.type==="pointerup"){let V=J(x.clientX,x.clientY);fe(V===o.sel?null:V)}};c.addEventListener("pointerup",me),c.addEventListener("pointercancel",me),c.addEventListener("pointerleave",()=>{y=null,o.hover=null,i("tip").classList.remove("on"),we()}),c.addEventListener("wheel",x=>{x.preventDefault(),oe.dist=e(oe.dist*Math.exp(x.deltaY*.0012),.18,1.6),ze()},{passive:!1}),addEventListener("keydown",x=>{x.key==="Escape"&&fe(null)});let Me={running:!n,t:0,idx:0,idle:0},Ge=[{t:0,view:"hero",u:0,play:!0,sel:null,tab:"dyn"},{t:7,view:"arm",tab:"dyn"},{t:12,view:"hero",tab:"snd"},{t:16,view:"hero",u:1,play:!1,tab:"dyn"},{t:19,sel:"sonar"},{t:25,sel:"motorL"},{t:31,sel:"bandL",tab:"dyn"},{t:37,sel:"liftServo"},{t:42,sel:"arduino"},{t:47,sel:null,u:0,play:!0,view:"hero",tab:"dyn"},{t:55,end:!0}];function ye(x){"view"in x&&(o.sel=null,o.iso=!1,z(x.view)),"u"in x&&(o.uT=x.u),"play"in x&&(o.play=x.play,i("t-play").setAttribute("aria-pressed",o.play),i("t-play").textContent=o.play?"PAUSE RUN":"PLAY RUN"),"sel"in x&&fe(x.sel),"tab"in x&&Xe(x.tab),x.end&&(Me.t=0,Me.idx=0)}function ze(){Me.running&&(Me.running=!1,i("tourchip").classList.remove("on")),Me.idle=0,i("tourtxt").textContent="REPLAY TOUR"}i("tourchip").addEventListener("click",()=>{Me.running=!0,Me.t=0,Me.idx=0,Me.idle=0,o.sel=null,we(),ce()}),i("tourchip").addEventListener("keydown",x=>{(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),i("tourchip").click())});function Je(x){if(Me.running||(Me.idle+=x,Me.idle>r&&!n&&vs&&(Me.running=!0,Me.t=0,Me.idx=0)),Me.running){for(Me.t+=x;Me.idx<Ge.length&&Ge[Me.idx].t<=Me.t;)ye(Ge[Me.idx++]);i("tourtxt").textContent="AUTO TOUR \xB7 TAP TO STOP"}i("tourchip").classList.toggle("on",Me.running)}let Dt="#34d399",Tt="#f87171",dn={};["c-speed","c-slip","c-trac","c-pow","c-eff","c-ptime","c-rays","c-env","c-budget","c-range"].forEach(x=>{dn[x]=i(x)});let on=x=>{let{ctx:S,w:V,h:Y}=Ti(dn[x]);return{ctx:S,w:V,h:Y,r:{x:46,y:12,w:V-62,h:Y-46}}};function Ih(){let{ctx:x,r:S}=on("c-speed"),V=se.stepOn,Y=se.stepOff,j=(Ce,Re)=>Ce.t.map((xe,He)=>[xe,Ce[Re][He]]),ue=Math.max(...V.wr,...Y.wr)*1.12;vn(x,S,{xr:[0,1],yr:[0,ue],nx:5,ny:4,xl:"time since full throttle (s)",yl:"speed (m/s)",series:[{pts:j(Y,"wr"),color:"rgba(248,113,113,0.55)",width:1.4,dash:[4,4]},{pts:j(V,"wr"),color:"rgba(52,211,153,0.55)",width:1.4,dash:[4,4]},{pts:j(Y,"v"),color:Tt,width:2.6},{pts:j(V,"v"),color:Dt,width:2.6}]});let be=V.t.findIndex(Ce=>Ce>=.3);i("cap-speed").innerHTML=`At 0.3 s the banded robot is moving at <b>${V.v[be].toFixed(2)} m/s</b>; the bare one at <b>${Y.v[be].toFixed(2)} m/s</b> while its wheel surfaces are doing <b>${Y.wr[be].toFixed(2)} m/s</b>. The gap between the dashed and solid red lines is wheel spin.`}function Lh(){let{ctx:x,r:S}=on("c-slip"),V=se.stepOn,Y=se.stepOff;vn(x,S,{xr:[0,1],yr:[-.05,1.05],nx:5,ny:4,xl:"time since full throttle (s)",yl:"slip ratio",series:[{pts:Y.t.map((j,ue)=>[j,Y.slip[ue]]),color:Tt,width:2.6,fill:"rgba(248,113,113,0.1)"},{pts:V.t.map((j,ue)=>[j,V.slip[ue]]),color:Dt,width:2.6}],over:[(j,ue)=>{tt(x,`peak ${Math.max(...Y.slip).toFixed(2)} bare`,j(.98),ue(Math.max(...Y.slip))-8,Tt,"right",10),tt(x,`peak ${Math.max(...V.slip).toFixed(2)} with bands`,j(.98),ue(.12),Dt,"right",10)}]})}function Jo(){let{ctx:x,r:S}=on("c-trac"),V=se.tracOn,Y=se.tracOff,j=Math.max(V.pts[0][1],V.limit)*1.2;vn(x,S,{xr:[0,.8],yr:[0,j],nx:4,ny:4,xl:"robot speed (m/s)",yl:"force at the ground (N)",under:[(ue,be)=>{x.fillStyle="rgba(248,113,113,0.1)",x.beginPath(),V.pts.forEach(([Ce,Re],xe)=>{let He=Math.max(be(Re),be(Y.limit)-0);xe?x.lineTo(ue(Ce),Math.min(be(Y.limit),be(Re))):x.moveTo(ue(Ce),Math.min(be(Y.limit),be(Re)))}),V.pts.slice().reverse().forEach(([Ce])=>x.lineTo(ue(Ce),be(Y.limit))),x.closePath(),x.fill()}],series:[{pts:V.pts,color:a.amber,width:2.6},{pts:[[0,V.limit],[.8,V.limit]],color:Dt,width:1.8,dash:[6,4]},{pts:[[0,Y.limit],[.8,Y.limit]],color:Tt,width:1.8,dash:[6,4]}],over:[(ue,be)=>{tt(x,"motor force",ue(.42),be(V.pts[Math.round(V.pts.length*.5)][1])-12,a.amber,"left",10),tt(x,"grip limit with bands",ue(.79),be(V.limit)-9,Dt,"right",10),tt(x,"grip limit, bare",ue(.79),be(Y.limit)-9,Tt,"right",10)}]}),i("cap-trac").innerHTML=`At stall the two motors push with <b>${V.pts[0][1].toFixed(1)} N</b>. Bare plastic can only pass <b>${Y.limit.toFixed(1)} N</b> to the desk (shaded: wasted as wheel spin); with bands the limit is <b>${V.limit.toFixed(1)} N</b>, so almost all of it reaches the ground.`}function wa(){let{ctx:x,r:S}=on("c-pow"),V={...S,w:S.w-34},Y=se.power,j=Y[2],ue=j.pts[j.pts.length-1].rpm*1.02,be=Math.max(...Y.map(et=>Math.max(...et.pts.map(ft=>ft.Pm))))*1.25,Ce=Math.max(...Y.map(et=>Math.max(...et.pts.map(ft=>ft.Pel))))*1.05,Re=be/Ce,xe=["rgba(251,191,36,0.4)","rgba(251,191,36,0.7)","#fbbf24"],He=[];Y.forEach((et,ft)=>He.push({pts:et.pts.map(Ne=>[Ne.rpm,Ne.Pel*Re]),color:"rgba(154,160,195,"+(.3+ft*.2)+")",width:1.3,dash:[4,4]})),Y.forEach((et,ft)=>He.push({pts:et.pts.map(Ne=>[Ne.rpm,Ne.Pm]),color:xe[ft],width:ft===2?2.8:2}));let lt=fs(ve,qe);vn(x,V,{xr:[0,ue],yr:[0,be],nx:5,ny:4,xl:"wheel speed (rpm)",yl:"mechanical power out, per motor (W)",series:He,over:[(et,ft)=>{[.4,.7,1].forEach((ln,yn)=>{let bn=Y[yn],ni=bn.pts.reduce((It,Ot)=>Ot.Pm>It.Pm?Ot:It);tt(x,`${Math.round(ln*100)} %`,et(ni.rpm),ft(ni.Pm)-9,"#fbbf24","center",10,"600")});let Ne=lt.w*60/(2*Math.PI),Yt=lt.Pm/2,_t=lt.Pel/2;_t>.05&&(Ai(x,et(Math.min(Ne,ue)),ft(Yt),a.pink),Ai(x,et(Math.min(Ne,ue)),ft(Math.min(_t*Re,be)),a.blue,3.5))}]}),x.font=`10px ${yr}`,x.textAlign="left",x.textBaseline="middle",x.fillStyle=a.muted,xa(0,Ce,4).forEach(et=>{let ft=V.y+V.h-et*Re/be*V.h;x.fillStyle=a.faint,x.fillText(String(+et.toPrecision(2)),V.x+V.w+5,ft)}),x.save(),x.translate(V.x+V.w+30,V.y+V.h/2),x.rotate(Math.PI/2),tt(x,"electrical power in (W), dashed",0,0,a.muted,"center"),x.restore();let ct=se.powerSel.pts.reduce((et,ft)=>ft.Pm>et.Pm?ft:et);i("cap-pow").innerHTML=`At ${Math.round(o.duty*100)} % throttle one motor delivers at most <b>${ct.Pm.toFixed(2)} W</b> at <b>${ct.rpm.toFixed(0)} rpm</b>, half its free speed, while drawing about <b>${ct.Pel.toFixed(1)} W</b> from the battery: the rest is heat in the windings and gearbox. Pink dot: mechanical power now; blue: electrical.`}function Dh(){let{ctx:x,r:S}=on("c-eff"),V=se.powerSel,Y=V.pts,j=Math.max(...Y.map(Re=>Re.tau)),ue=Math.max(...Y.map(Re=>Re.I)),be=Math.max(...Y.map(Re=>Re.eff)),Ce=Y[Y.length-1].rpm;vn(x,S,{xr:[0,Ce],yr:[0,105],nx:5,ny:4,xl:"wheel speed (rpm)",yl:"% of maximum",series:[{pts:Y.map(Re=>[Re.rpm,Re.I/ue*100]),color:"rgba(154,160,195,0.8)",width:1.6,dash:[4,4]},{pts:Y.map(Re=>[Re.rpm,Math.max(0,Re.tau)/j*100]),color:a.blue,width:2.4},{pts:Y.map(Re=>[Re.rpm,Re.eff/be*100]),color:a.pink,width:2.4}],over:[(Re,xe)=>{tt(x,`torque ${(j*100).toFixed(1)} N\xB7cm at stall`,S.x+8,S.y+12,a.blue,"left",10),tt(x,`peak efficiency ${(be*100).toFixed(0)} %`,S.x+8,S.y+27,a.pink,"left",10),tt(x,`stall current ${ue.toFixed(2)} A`,S.x+8,S.y+42,a.muted,"left",10);let He=fs(ve,qe),lt=He.w*60/(2*Math.PI);He.Pel>.05&&br(x,Re,Math.min(lt,Ce),S.y,S.y+S.h)}]})}function Ko(){let{ctx:x,r:S}=on("c-ptime"),V=ve.t.map((j,ue)=>[j,ve.Pel[ue]]),Y=Math.max(...ve.Pel)*1.15;vn(x,S,{xr:[0,ve.duration],yr:[0,Y],nx:6,ny:4,xl:"time (s)",yl:"electrical power (W)",series:[{pts:V,color:"rgba(251,191,36,0.9)",width:2,fill:"rgba(251,191,36,0.1)"},{pts:V,color:"#fbbf24",width:2,upTo:qe}],over:[(j,ue)=>{br(x,j,qe,S.y,S.y+S.h);let be=fs(ve,qe);Ai(x,j(qe),ue(be.Pel),a.pink)}]})}function jo(x){let{ctx:S,w:V,h:Y}=Ti(dn["c-rays"]),j=Hn(),ue=j.d,be=j.psi,Ce=j.wall,Re=26,xe=Re,He=Y/2,lt=(V-Re-34)/Math.max(ue,.35),ct=(fi,$i)=>[xe+fi*lt,He-$i*lt];S.fillStyle="rgba(167,139,250,0.25)",S.strokeStyle=a.accent,S.lineWidth=1.5;let[et,ft]=ct(0,.1),[,Ne]=ct(0,-.1);S.fillRect(xe-16,ft,16,Ne-ft),S.beginPath(),S.moveTo(et,ft),S.lineTo(et,Ne),S.stroke(),tt(S,"PATRICK",xe-12,Y-14,a.faint,"left",9),S.setLineDash([3,5]),S.strokeStyle="rgba(96,165,250,0.35)",S.lineWidth=1;for(let fi of[-1,1])S.beginPath(),S.moveTo(xe,He),S.lineTo(xe+Math.cos(pt.beam)*lt*ue*1.4,He-fi*Math.sin(pt.beam)*lt*ue*1.4),S.stroke();S.setLineDash([]);let Yt=-Math.cos(be),_t=-Math.sin(be),ln=Math.sin(be),yn=-Math.cos(be),bn=Math.max(.9,ue*.7),[ni,It]=ct(ue+ln*bn,yn*bn),[Ot,di]=ct(ue-ln*bn,-yn*bn),Ut={hard:"#cfd4dc",wood:"#b98e5c",card:"#c89a52",cloth:"#a78bfa"}[Ce];S.strokeStyle=Ut,S.lineWidth=5,S.lineCap="round",S.beginPath(),S.moveTo(ni,It),S.lineTo(Ot,di),S.stroke(),S.lineCap="butt",tt(S,li[Ce].name.toUpperCase(),Math.min(V-8,ni+6),Math.max(12,Math.min(It,di)-12),Ut,"right",9);let qi=343,Yi=Math.max(.35,2*ue/2.4),il=4.6*ue+.7,P0=x/1e3%(il/Yi+.5),Uh=Yi*P0,I0=pt.thresh,kd=pt.ref,L0=li[Ce],sl=0;for(let fi=0;fi<61;fi++){let $i=(fi/60*2-1)*42*t,Aa=Math.exp(-Math.pow($i/(pt.beam*1.7),2)),Zs=5e-4,Js=0,Gn=Math.cos($i),Zi=Math.sin($i),rl=0,Fh=0,zd=0;for(let Hd=0;Hd<5;Hd++){let Ra=1/0,al=null,Gd=Gn*Yt+Zi*_t;if(Gd<-1e-9){let tn=((ue-Zs)*Yt+(0-Js)*_t)/Gd;if(tn>1e-6){let Ji=Zs+Gn*tn,Ks=Js+Zi*tn,Pa=(Ji-ue)*ln+Ks*yn;Math.abs(Pa)<=bn&&(Ra=tn,al="wall")}}if(Gn<-1e-9){let tn=(0-Zs)/Gn;if(tn>1e-6){let Ji=Js+Zi*tn;Math.abs(Ji)<.1&&tn<Ra&&(Ra=tn,al="robot")}}let Ca=Number.isFinite(Ra)?Ra:6*ue,Oh=rl,Bh=rl+Ca;{let[tn,Ji]=ct(Zs,Js),[Ks,Pa]=ct(Zs+Gn*Ca,Js+Zi*Ca);S.strokeStyle="rgba(125,211,252,0.05)",S.lineWidth=1,S.beginPath(),S.moveTo(tn,Ji),S.lineTo(Ks,Pa),S.stroke()}if(Uh>Oh&&Uh<=Bh+1e-4){let tn=Math.min(Uh,Bh),Ji=Zs+Gn*(tn-Oh),Ks=Js+Zi*(tn-Oh),Pa=Aa*(kd/Math.max(tn,kd))*Math.pow(10,-pt.absDbPerM*tn/20)*Math.pow(L0.R,Fh)*Math.pow(.8,zd),Vd=20*Math.log10(Math.max(Pa,1e-9)/I0),kh=e((Vd+8)/62,.04,1),[D0,N0]=ct(Ji,Ks),Wd=Math.min(.08,.5/lt+.02),[U0,F0]=ct(Ji-Gn*Wd,Ks-Zi*Wd);S.strokeStyle=`rgba(${Vd>35?"250,204,21":"96,165,250"},${kh.toFixed(3)})`,S.lineWidth=1.6+kh*1.6,S.beginPath(),S.moveTo(D0,N0),S.lineTo(U0,F0),S.stroke(),Ji<.06&&Math.abs(Ks)<.05&&Gn<0&&Fh>0&&(sl=Math.max(sl,kh))}if(!al)break;if(rl=Bh,Zs+=Gn*Ca,Js+=Zi*Ca,al==="wall"){let tn=Gn*Yt+Zi*_t;Gn-=2*tn*Yt,Zi-=2*tn*_t,Fh++}else Gn=-Gn,zd++;if(rl>7*ue+1)break}}if(sl>.04){let[fi,$i]=ct(0,0),Aa=S.createRadialGradient(fi,$i,0,fi,$i,26);Aa.addColorStop(0,`rgba(52,211,153,${sl})`),Aa.addColorStop(1,"rgba(52,211,153,0)"),S.fillStyle=Aa,S.beginPath(),S.arc(fi,$i,26,0,7),S.fill()}tt(S,`${(ue*100).toFixed(0)} cm`,(xe+ct(ue,0)[0])/2,He-10,a.muted,"center",10),S.strokeStyle="rgba(255,255,255,0.18)",S.setLineDash([2,4]),S.beginPath(),S.moveTo(xe,He+6),S.lineTo(ct(ue,0)[0],He+6),S.stroke(),S.setLineDash([])}function Hn(){let x=fs(ve,qe),S=o.follow?e(x.sonar,.05,4):o.d,V=o.follow?x.what==="wall"?"card":"wood":o.wall;o.follow&&i("s-wall").value!==V&&(i("s-wall").value=V);let Y=o.follow?0:o.psi;return{d:S,psi:Y,wall:V,what:x.what}}function Ea(){let{ctx:x,r:S}=on("c-env"),V=Hn(),Y=Fo(V.d,V.psi,V.wall,22),j=Ce=>20*Math.log10(Math.max(Ce,1e-9)/pt.thresh),ue=Y.pts.map(([Ce,Re])=>[Ce*1e3,e(j(Re),-12,75)]),be=Vi(V.d,V.psi,V.wall);vn(x,S,{xr:[0,Y.tEnd*1e3],yr:[-12,75],yticks:[-10,0,20,40,60],nx:6,xl:"time after the burst (ms)",yl:"signal (dB above threshold)",series:[{pts:ue,color:a.accent,width:2.2,fill:"rgba(167,139,250,0.12)"}],under:[(Ce,Re)=>{x.fillStyle="rgba(248,113,113,0.07)",x.fillRect(Ce(0),Re(75),Ce(.6)-Ce(0),Re(-12)-Re(75))}],over:[(Ce,Re)=>{br(x,Ce,0,0,0),x.setLineDash([5,4]),x.strokeStyle=a.amber,x.lineWidth=1.2,x.beginPath(),x.moveTo(S.x,Re(0)),x.lineTo(S.x+S.w,Re(0)),x.stroke(),x.setLineDash([]),tt(x,"detection threshold",S.x+8,Re(0)+9,a.amber,"left",9),tt(x,"burst + ring-down",Ce(.62),Re(68),a.red,"left",9),Y.echoes.slice(0,2).forEach((xe,He)=>{let lt=j(xe.a);xe.t*1e3<Y.tEnd*1e3&&(Ai(x,Ce(xe.t*1e3),Re(e(lt,-12,75)),He?a.pink:a.green,4),tt(x,`${He?"2nd":"1st"} echo ${lt.toFixed(0)} dB`,Ce(xe.t*1e3)+8,Re(e(lt,-10,70))-10,He?a.pink:a.green,"left",10,"600"))})}]}),i("cap-env").innerHTML=be.detected?`The first echo arrives <b>${(Y.echoes[0].t*1e3).toFixed(2)} ms</b> after the burst, which is distance = time \xD7 ${Y.c.toFixed(0)} m/s \xF7 2 = <b>${(V.d*100).toFixed(0)} cm</b>. The second, weaker echo has crossed the gap twice.`:`The first echo (<b>${(Y.echoes[0].a?j(Y.echoes[0].a):-99).toFixed(0)} dB</b>) is <b>below the threshold</b>: the sensor reports nothing. Try a harder surface, a straighter wall or a closer distance.`}function Qo(){let{ctx:x,w:S,h:V}=Ti(dn["c-budget"]),Y=Hn(),j=Vi(Y.d,Y.psi,Y.wall),ue=[["spreading",j.spread,a.blue],["air absorption",j.air,a.amber],["wall absorbs",j.surf,a.pink],["off-axis",j.aim,a.red]],be=Math.max(j.total,1),Ce=14,Re=S-28,xe=38,He=26,lt=Ce;x.font=`10px ${yr}`,ue.forEach(([ct,et,ft])=>{let Ne=et/be*Re;Ne<=0||(x.fillStyle=ft,x.globalAlpha=.85,x.fillRect(lt,xe,Math.max(Ne,1),He),x.globalAlpha=1,Ne>54&&tt(x,`${ct}`,lt+5,xe+He/2-.5,"#0b0820","left",9.5,"600"),tt(x,`${et.toFixed(1)} dB`,lt+Ne/2,xe+He+16,ft,"center",9.5),lt+=Ne)}),tt(x,`total loss ${j.total.toFixed(1)} dB  =  only ${(Math.pow(10,-j.total/10)*100).toExponential(1)} % of the burst's energy returns`,Ce,16,a.text,"left",10.5,"600"),tt(x,"spreading dominates: the burst fans out over the surface of a growing sphere (4\u03C0r\xB2)",Ce,xe+He+40,a.muted,"left",9.5),tt(x,"",0,0)}function el(){let{ctx:x,w:S,h:V}=Ti(dn["c-range"]),Y=Hn(),j=96,ue=S-j-56,be=24,Ce=5;se.ranges.forEach(([xe,He],lt)=>{let ct=12+lt*be,et=xe===Y.wall;x.fillStyle=et?"rgba(167,139,250,0.9)":"rgba(154,160,195,0.35)",x.fillRect(j,ct,He/Ce*ue,14),tt(x,li[xe].name,8,ct+7,et?"#fff":a.muted,"left",9.5,et?"600":""),tt(x,`${He.toFixed(1)} m`,j+He/Ce*ue+6,ct+7,et?a.accent:a.muted,"left",10)});let Re=j+e(Y.d,0,Ce)/Ce*ue;x.strokeStyle=a.green,x.setLineDash([3,4]),x.beginPath(),x.moveTo(Re,4),x.lineTo(Re,12+4*be-6),x.stroke(),x.setLineDash([]),tt(x,"now",Re,12+4*be+2,a.green,"center",9)}function Rr(){let x=Hn(),S=Vi(x.d,x.psi,x.wall),V=Gi(22);i("r-dist").textContent=x.d>=3.99&&o.follow?"no echo":(x.d*100).toFixed(0)+" cm",i("r-echo").textContent=(2*x.d/V*1e6).toFixed(0)+" \xB5s";let Y=20*Math.log10(Math.max(S.amp,1e-9)/pt.thresh);i("r-amp").textContent=(Y>=0?"+":"\u2212")+Math.abs(Y).toFixed(0)+" dB",i("r-ret").textContent=(Math.pow(10,-S.total/10)*100).toExponential(0)+" %";let j=i("r-det");j.textContent=S.detected?"YES":"NO",j.parentElement.classList.toggle("ok",S.detected),j.parentElement.classList.toggle("bad",!S.detected),i("s-d-out").textContent=(x.d*100).toFixed(0)+" cm",o.follow&&(i("s-d").value=x.d)}function tl(){let x=fs(ve,qe),S=Cn(o.bands,o.surf),V=x.drive*(_e.mBase+_e.mArm+(x.held?_e.mEgg:0))*9.80665;i("r-lim").textContent=(S*V).toFixed(2)+" N",i("r-drive").textContent=(x.drive*100).toFixed(0)+" %";let Y=Math.max(Math.abs(x.slipL),Math.abs(x.slipR)),j=i("r-slip");j.textContent=Y.toFixed(2),j.parentElement.classList.toggle("bad",Y>.3)}function Cr(){let x=fs(ve,qe);i("r-rpm").textContent=(x.w*60/(2*Math.PI)).toFixed(0)+" rpm",i("r-pm").textContent=(x.Pm/2).toFixed(2)+" W",i("r-pe").textContent=x.Pel.toFixed(2)+" W",i("r-en").textContent=x.energy.toFixed(1)+" J"}function _s(x,S=performance.now()){o.tab==="dyn"?(x&&(Ih(),Lh(),Jo()),tl()):o.tab==="pow"?(wa(),x&&Dh(),Ko(),Cr()):(jo(S),(x||Pr%6===0)&&(Ea(),Qo(),el(),Rr()))}let Pr=0,Bd=new s;function Nh(x){o.u<.002&&o.play&&(qe+=x,qe>=ve.duration&&(ee+=x,qe=ve.duration,ee>1.6&&(qe=0,ee=0))),o.u+=(o.uT-o.u)*(1-Math.exp(-x*3)),Math.abs(o.uT-o.u)<5e-4&&(o.u=o.uT),document.activeElement!==i("u")&&(i("u").value=o.u),i("u-out").textContent=Math.round(o.u*100)+"%";let S=fs(ve,qe),V=W.pose({phi:S.phi,jaw:S.jaw,wl:S.wl,wr:S.wr,bands:o.bands,u:o.u});W.root.position.set(S.x,(W.root.userData.lift||0)+o.u*0,I(S.z)),W.root.rotation.y=S.yaw;let Y=Math.cos(S.yaw),j=Math.sin(S.yaw);U.position.set(S.eggX,S.eggY,I(S.eggZ)),o.u>.02&&S.held&&U.position.copy(q.gripper.group.localToWorld(new s(fh,-.012,0))),_.target.position.set(S.x,0,I(S.z)),_.position.set(S.x+.9,1.6,I(S.z)-.7);let ue=o.sonarViz&&o.u<.3;if(K.visible=ue,ue){let xe=Math.min(S.sonar,.8),He=performance.now()/1e3;Z.scale.set(xe,1,xe),he.forEach((lt,ct)=>{let et=(He*.55+ct/3)%1,ft=Math.max(.01,et*xe);lt.scale.set(ft,1,ft),lt.material.opacity=.55*(1-et)}),Pe.position.set(xe,0,0),Pe.visible=S.sonar<.8}i("h-phase").textContent=ve.names[S.phase],i("h-sonar").textContent=S.sonar>=3.99?"no echo":(S.sonar*100).toFixed(1)+" cm",i("h-speed").textContent=(Math.abs(S.vL+S.vR)/2*100).toFixed(0)+" cm/s",i("m-bar").style.width=qe/ve.duration*100+"%";let be=De[S.phase],Ce=S.phase===11;if([...Ze.children].forEach((xe,He)=>{xe.classList.toggle("on",!Ce&&He===be),xe.classList.toggle("done",Ce||He<be)}),Je(x),Te(x),y&&!Ke.size&&nl%2===0){let xe=J(y[0],y[1]);xe!==o.hover&&(o.hover=xe,we(),c.classList.toggle("pick",!!xe));let He=i("tip"),lt=l.getBoundingClientRect();xe?(He.textContent=q[xe].name,He.style.left=y[0]-lt.left+"px",He.style.top=y[1]-lt.top+"px",He.classList.add("on")):He.classList.remove("on")}let Re=i("sellabel");if(o.sel&&q[o.sel]){let xe=new mn().setFromObject(q[o.sel].group),He=xe.getCenter(new s);He.y=xe.max.y,He.project(g),Re.style.left=(He.x*.5+.5)*l.clientWidth+"px",Re.style.top=(-He.y*.5+.5)*l.clientHeight+"px",Re.textContent=q[o.sel].name,Re.classList.add("on")}else Re.classList.remove("on")}let nl=0,Ta=performance.now(),vs=!0,w={sum:0,n:0,slow:0,age:0};new IntersectionObserver(x=>{vs=x[0].isIntersecting},{threshold:.05}).observe(l);function H(x){let S=Math.min((x-Ta)/1e3,.1);Ta=x,nl++,document.hidden||(vs&&(Nh(n&&!Me.running?0:S),b?v.render():h.render(u,g)),vs&&(Pr++,Pr%2===0&&_s(!1,x)),Ye<Ie.length-1&&vs&&(w.age+=S,w.age>1.2&&(w.sum+=S,w.n++,w.n>=20&&(w.slow=w.sum/w.n>.026?w.slow+1:0,w.sum=w.n=0,w.slow>=2&&(Ye++,F(),w.slow=0,w.age=0))))),requestAnimationFrame(H)}function ie(){F(),ce(),we(),i("duty-out").textContent="70 %",N(),z("hero"),re.t.copy(de()),Me.running&&i("tourchip").classList.add("on"),(h.compileAsync?h.compileAsync(u,g):Promise.resolve()).catch(()=>{}).finally(()=>{Ta=performance.now(),requestAnimationFrame(H)}),window.__PATRICK={seek:S=>{qe=S,ee=0},S:o,run:()=>ve,robot:W,rig:re,scene:u,camera:g,renderer:h,M:Bo,select:fe,setView:z,tour:Me}}document.fonts?.ready?.then(ie,ie)??ie()}var C0=document.getElementById("stage");if(C0&&"IntersectionObserver"in window){let i=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&(i.disconnect(),Od())},{rootMargin:"400px"});i.observe(C0)}else Od();})();
