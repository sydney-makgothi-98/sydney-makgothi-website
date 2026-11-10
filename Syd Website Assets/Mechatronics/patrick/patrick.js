(()=>{var tm=Object.defineProperty;var nm=(n,e)=>{for(var t in e)tm(n,t,{get:e[t],enumerable:!0})};var Cf=0,Eu=1,Pf=2;var gs=1,If=2,la=3,Ws=0,rn=1,Kt=2,jt=0,ca=1,Tu=2,Au=3,Ru=4,_c=5;var oi=100,Lf=101,Df=102,Nf=103,Uf=104,mr=200,Ff=201,Of=202,Bf=203,Cu=204,Pu=205,mo=206,kf=207,go=208,zf=209,Hf=210,Gf=211,Vf=212,Wf=213,Xf=214,Ul=0,Fl=1,Ol=2,Jr=3,Bl=4,kl=5,zl=6,Hl=7,Iu=0,qf=1,Yf=2,Ei=0,xo=1,_o=2,vo=3,xs=4,yo=5,Mo=6,bo=7;var Lu=300,Xs=301,gr=302,vc=303,yc=304,So=306,An=1e3,Hi=1001,Gl=1002,Jt=1003,$f=1004;var wo=1005;var gn=1006,Mc=1007;var qs=1008;var Rn=1009,Du=1010,Nu=1011,ha=1012,bc=1013,Ti=1014,Ai=1015,tn=1016,Sc=1017,wc=1018,Ys=1020,Uu=35902,Fu=35899,Ou=1021,Bu=1022,Bn=1023,Gi=1026,Zi=1027,ku=1028,Ec=1029,$s=1030,Tc=1031;var Ac=1033,Eo=33776,To=33777,Ao=33778,Ro=33779,Rc=35840,Cc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Nc=37496,Uc=37488,Fc=37489,Co=37490,Oc=37491,Bc=37808,kc=37809,zc=37810,Hc=37811,Gc=37812,Vc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,$c=37818,Zc=37819,Jc=37820,Kc=37821,jc=36492,Qc=36494,eh=36495,th=36283,nh=36284,Po=36285,ih=36286;var Va=2300,Vl=2301,Dl=2302,pu=2303,mu=2400,gu=2401,xu=2402;var Zf=3200;var Io=0,Jf=1,_s="",Vt="srgb",Wa="srgb-linear",Xa="linear",At="srgb";var Nl=7680;var Kf=519,jf=512,Qf=513,ep=514,sh=515,tp=516,np=517,rh=518,ip=519,sp=35044;var zu="300 es",bi=2e3,Kr=2001;function im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rp(){let n=qa("canvas");return n.style.display="block",n}var Kd={},jr=null;function Hu(...n){let e="THREE."+n.shift();jr?jr("log",e,...n):console.log(e,...n)}function ap(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=ap(n);let e="THREE."+n.shift();if(jr)jr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=ap(n);let e="THREE."+n.shift();if(jr)jr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cr(...n){let e=n.join(" ");e in Kd||(Kd[e]=!0,Qe(...n))}function op(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var lp={[Ul]:Fl,[Ol]:zl,[Bl]:Hl,[Jr]:kl,[Fl]:Ul,[zl]:Ol,[Hl]:Bl,[kl]:Jr},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hh=Math.PI/180,Wl=180/Math.PI;function ua(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function rm(n,e){return(n%e+e)%e}function Gh(n,e,t){return(1-t)*n+t*e}function Na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yu=class Yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yu.prototype.isVector2=!0;var ve=Yu,ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$u=class $u{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vh.copy(this).projectOnVector(e),this.sub(Vh)}reflect(e){return this.sub(Vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$u.prototype.isVector3=!0;var U=$u,Vh=new U,jd=new ai,Zu=class Zu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],v=s[1],T=s[4],_=s[7],w=s[2],E=s[5],A=s[8];return r[0]=a*x+o*v+l*w,r[3]=a*g+o*T+l*E,r[6]=a*p+o*_+l*A,r[1]=c*x+h*v+u*w,r[4]=c*g+h*T+u*E,r[7]=c*p+h*_+u*A,r[2]=d*x+f*v+m*w,r[5]=d*g+f*T+m*E,r[8]=d*p+f*_+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wh.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wh.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zu.prototype.isMatrix3=!0;var at=Zu,Wh=new at,Qd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let n={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=Zr(s.r),s.g=Zr(s.g),s.b=Zr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?Xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wa]:{primaries:e,whitePoint:i,transfer:Xa,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:At,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}var xt=am();function ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fr,Xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=qa("canvas")),Fr.width=e.width,Fr.height=e.height;let s=Fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ds(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ds(t[i]/255)*255):t[i]=ds(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},om=0,Qr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xh(s[a].image)):r.push(Xh(s[a]))}else r=Xh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var lm=0,qh=new U,In=class n extends Vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Hi,s=Hi,r=gn,a=qs,o=Bn,l=Rn,c=n.DEFAULT_ANISOTROPY,h=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=ua(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qh).x}get height(){return this.source.getSize(qh).y}get depth(){return this.source.getSize(qh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Lu;In.DEFAULT_ANISOTROPY=1;var Ju=class Ju{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,_=(f+1)/2,w=(p+1)/2,E=(h+d)/4,A=(u+x)/4,M=(m+g)/4;return T>_&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=A/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=M/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ju.prototype.isVector4=!0;var Gt=Ju,ql=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new In(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends ql{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ya=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xc=class xc{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,m,x,g)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Or.setFromMatrixColumn(e,0).length(),r=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,hm)}lookAt(e,t,i){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Is.crossVectors(i,Zn),Is.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Is.crossVectors(i,Zn)),Is.normalize(),hl.crossVectors(Zn,Is),s[0]=Is.x,s[4]=hl.x,s[8]=Zn.x,s[1]=Is.y,s[5]=hl.y,s[9]=Zn.y,s[2]=Is.z,s[6]=hl.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],v=i[3],T=i[7],_=i[11],w=i[15],E=s[0],A=s[4],M=s[8],b=s[12],C=s[1],P=s[5],F=s[9],B=s[13],D=s[2],z=s[6],W=s[10],J=s[14],le=s[3],G=s[7],Z=s[11],se=s[15];return r[0]=a*E+o*C+l*D+c*le,r[4]=a*A+o*P+l*z+c*G,r[8]=a*M+o*F+l*W+c*Z,r[12]=a*b+o*B+l*J+c*se,r[1]=h*E+u*C+d*D+f*le,r[5]=h*A+u*P+d*z+f*G,r[9]=h*M+u*F+d*W+f*Z,r[13]=h*b+u*B+d*J+f*se,r[2]=m*E+x*C+g*D+p*le,r[6]=m*A+x*P+g*z+p*G,r[10]=m*M+x*F+g*W+p*Z,r[14]=m*b+x*B+g*J+p*se,r[3]=v*E+T*C+_*D+w*le,r[7]=v*A+T*P+_*z+w*G,r[11]=v*M+T*F+_*W+w*Z,r[15]=v*b+T*B+_*J+w*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=l*f-c*d,T=o*f-c*u,_=o*d-l*u,w=a*f-c*h,E=a*d-l*h,A=a*u-o*h;return t*(x*v-g*T+p*_)-i*(m*v-g*w+p*E)+s*(m*T-x*w+p*A)-r*(m*_-x*E+g*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*o-i*a,T=t*l-s*a,_=t*c-r*a,w=i*l-s*o,E=i*c-r*o,A=s*c-r*l,M=h*x-u*m,b=h*g-d*m,C=h*p-f*m,P=u*g-d*x,F=u*p-f*x,B=d*p-f*g,D=v*B-T*F+_*P+w*C-E*b+A*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return e[0]=(o*B-l*F+c*P)*z,e[1]=(s*F-i*B-r*P)*z,e[2]=(x*A-g*E+p*w)*z,e[3]=(d*E-u*A-f*w)*z,e[4]=(l*C-a*B-c*b)*z,e[5]=(t*B-s*C+r*b)*z,e[6]=(g*_-m*A-p*T)*z,e[7]=(h*A-d*_+f*T)*z,e[8]=(a*F-o*C+c*M)*z,e[9]=(i*C-t*F-r*M)*z,e[10]=(m*E-x*_+p*v)*z,e[11]=(u*_-h*E-f*v)*z,e[12]=(o*b-a*P-l*M)*z,e[13]=(t*P-i*b+s*M)*z,e[14]=(x*T-m*w-g*v)*z,e[15]=(h*w-u*T+d*v)*z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,v=l*c,T=l*h,_=l*u,w=i.x,E=i.y,A=i.z;return s[0]=(1-(x+p))*w,s[1]=(f+_)*w,s[2]=(m-T)*w,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+T)*A,s[9]=(g-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Or.set(s[0],s[1],s[2]).length(),o=Or.set(s[4],s[5],s[6]).length(),l=Or.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let c=1/a,h=1/o,u=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=bi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===bi)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Kr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=bi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===bi)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Kr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};xc.prototype.isMatrix4=!0;var wt=xc,Or=new U,_i=new wt,cm=new U(0,0,0),hm=new U(1,1,1),Is=new U,hl=new U,Zn=new U,tf=new wt,nf=new ai,Si=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},um=0,sf=new U,Br=new ai,os=new wt,ul=new U,Ua=new U,dm=new U,fm=new ai,rf=new U(1,0,0),af=new U(0,1,0),of=new U(0,0,1),lf={type:"added"},pm={type:"removed"},kr={type:"childadded",child:null},Yh={type:"childremoved",child:null},xn=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Si,i=new ai,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new at}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Ua,ul,this.up):os.lookAt(ul,Ua,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(os),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),kr.child=e,this.dispatchEvent(kr),kr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pm),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new U(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},dl={h:0,s:0,l:0};function $h(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=rm(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=$h(a,r,e+1/3),this.g=$h(a,r,e),this.b=$h(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return xt.workingToColorSpace(Tn.copy(this),e),Math.round(gt(Tn.r*255,0,255))*65536+Math.round(gt(Tn.g*255,0,255))*256+Math.round(gt(Tn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Vt){xt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(dl);let i=Gh(Ls.h,dl.h,t),s=Gh(Ls.s,dl.s,t),r=Gh(Ls.l,dl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new qe;qe.NAMES=cp;var hr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vi=new U,ls=new U,Zh=new U,cs=new U,zr=new U,Hr=new U,cf=new U,Jh=new U,Kh=new U,jh=new U,Qh=new Gt,eu=new Gt,tu=new Gt,Fs=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vi.subVectors(e,t),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vi.subVectors(s,t),ls.subVectors(i,t),Zh.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(ls),l=vi.dot(Zh),c=ls.dot(ls),h=ls.dot(Zh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(a,cs.y),l.addScaledVector(o,cs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Qh.setScalar(0),eu.setScalar(0),tu.setScalar(0),Qh.fromBufferAttribute(e,t),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qh,r.x),a.addScaledVector(eu,r.y),a.addScaledVector(tu,r.z),a}static isFrontFacing(e,t,i,s){return vi.subVectors(i,t),ls.subVectors(e,t),vi.cross(ls).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),vi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;zr.subVectors(s,i),Hr.subVectors(r,i),Jh.subVectors(e,i);let l=zr.dot(Jh),c=Hr.dot(Jh);if(l<=0&&c<=0)return t.copy(i);Kh.subVectors(e,s);let h=zr.dot(Kh),u=Hr.dot(Kh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(zr,a);jh.subVectors(e,r);let f=zr.dot(jh),m=Hr.dot(jh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Hr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return cf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(cf,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(zr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),pl.subVectors(this.max,Fa),Gr.subVectors(e.a,Fa),Vr.subVectors(e.b,Fa),Wr.subVectors(e.c,Fa),Ds.subVectors(Vr,Gr),Ns.subVectors(Wr,Vr),sr.subVectors(Gr,Wr);let t=[0,-Ds.z,Ds.y,0,-Ns.z,Ns.y,0,-sr.z,sr.y,Ds.z,0,-Ds.x,Ns.z,0,-Ns.x,sr.z,0,-sr.x,-Ds.y,Ds.x,0,-Ns.y,Ns.x,0,-sr.y,sr.x,0];return!nu(t,Gr,Vr,Wr,pl)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,Gr,Vr,Wr,pl))?!1:(ml.crossVectors(Ds,Ns),t=[ml.x,ml.y,ml.z],nu(t,Gr,Vr,Wr,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hs=[new U,new U,new U,new U,new U,new U,new U,new U],yi=new U,fl=new Fn,Gr=new U,Vr=new U,Wr=new U,Ds=new U,Ns=new U,sr=new U,Fa=new U,pl=new U,ml=new U,rr=new U;function nu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){rr.fromArray(n,r);let o=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=i.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var en=new U,gl=new ve,gm=0,Un=class extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sp,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var $a=class extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Za=class extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}},xm=new Fn,Oa=new U,iu=new U,ur=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);let t=Oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Oa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(iu)),this.expandByPoint(Oa.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_m=0,ri=new wt,su=new xn,Xr=new U,Jn=new Fn,Ba=new Fn,cn=new U,Pt=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?Za:$a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Jn.min,Ba.min),Jn.expandByPoint(cn),cn.addVectors(Jn.max,Ba.max),Jn.expandByPoint(cn)):(Jn.expandByPoint(Ba.min),Jn.expandByPoint(Ba.max))}Jn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),cn.add(Xr)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<i.count;M++)o[M]=new U,l[M]=new U;let c=new U,h=new U,u=new U,d=new ve,f=new ve,m=new ve,x=new U,g=new U;function p(M,b,C){c.fromBufferAttribute(i,M),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[M].add(x),o[b].add(x),o[C].add(x),l[M].add(g),l[b].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,b=v.length;M<b;++M){let C=v[M],P=C.start,F=C.count;for(let B=P,D=P+F;B<D;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let T=new U,_=new U,w=new U,E=new U;function A(M){w.fromBufferAttribute(s,M),E.copy(w);let b=o[M];T.copy(b),T.sub(w.multiplyScalar(w.dot(b))).normalize(),_.crossVectors(E,b);let P=_.dot(l[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,P)}for(let M=0,b=v.length;M<b;++M){let C=v[M],P=C.start,F=C.count;for(let B=P,D=P+F;B<D;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Un(d,h,u)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ru=new U,vm=new U,ym=new at,Mi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ru.subVectors(i,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ru),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ym.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mm=0,Wi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=ca,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Pu,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var us=new U,au=new U,xl=new U,_l=new U,na=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){au.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),_l.copy(this.origin).sub(au);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xl),o=_l.dot(this.direction),l=-_l.dot(xl),c=_l.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(au).addScaledVector(xl,d),f}intersectSphere(e,t){if(e.radius<0)return null;us.subVectors(e.center,this.origin);let i=us.dot(this.direction),s=us.dot(us)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=i.x-a.x,v=i.y-a.y,T=i.z-a.z,_=Math.abs(l),w=Math.abs(c),E=Math.abs(h),A,M,b,C,P,F,B,D,z,W,J,le;if(_>=w&&_>=E?(b=l,F=u,z=m,le=p,l>=0?(A=c,M=h,C=d,P=f,B=x,D=g,W=v,J=T):(A=h,M=c,C=f,P=d,B=g,D=x,W=T,J=v)):w>=E?(b=c,F=d,z=x,le=v,c>=0?(A=h,M=l,C=f,P=u,B=g,D=m,W=T,J=p):(A=l,M=h,C=u,P=f,B=m,D=g,W=p,J=T)):(b=h,F=f,z=g,le=T,h>=0?(A=l,M=c,C=u,P=d,B=m,D=x,W=p,J=v):(A=c,M=l,C=d,P=u,B=x,D=m,W=v,J=p)),b===0)return null;let G=A/b,Z=M/b,se=1/b,Me=C-G*F,be=P-Z*F,j=B-G*z,ne=D-Z*z,re=W-G*le,I=J-Z*le,N=re*ne-I*j,ee=Me*I-be*re,ue=j*be-ne*Me;if(s){if(N<0||ee<0||ue<0)return null}else if((N<0||ee<0||ue<0)&&(N>0||ee>0||ue>0))return null;let ce=N+ee+ue;if(ce===0)return null;let me=se*(N*F+ee*z+ue*le);return(ce>0?me<0:me>0)?null:this.at(me/ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hf=new wt,ar=new na,vl=new ur,uf=new U,yl=new U,Ml=new U,bl=new U,ou=new U,Sl=new U,df=new U,wl=new U,tt=class extends xn{constructor(e=new Pt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ou.fromBufferAttribute(u,e),a?Sl.addScaledVector(ou,h):Sl.addScaledVector(ou.sub(t),h))}t.add(Sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),ar.copy(e.ray).recast(e.near),!(vl.containsPoint(ar.origin)===!1&&(ar.intersectSphere(vl,uf)===null||ar.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),ar.copy(e.ray).applyMatrix4(hf),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,w=T;_<w;_+=3){let E=o.getX(_),A=o.getX(_+1),M=o.getX(_+2);s=El(this,p,e,i,c,h,u,E,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),T=o.getX(g+1),_=o.getX(g+2);s=El(this,a,e,i,c,h,u,v,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,w=T;_<w;_+=3){let E=_,A=_+1,M=_+2;s=El(this,p,e,i,c,h,u,E,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,T=g+1,_=g+2;s=El(this,a,e,i,c,h,u,v,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function bm(n,e,t,i,s,r,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ws,o),l===null)return null;wl.copy(o),wl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(wl);return c<t.near||c>t.far?null:{distance:c,point:wl.clone(),object:n}}function El(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,yl),n.getVertexPosition(l,Ml),n.getVertexPosition(c,bl);let h=bm(n,e,t,i,yl,Ml,bl,df);if(h){let u=new U;Fs.getBarycoord(df,yl,Ml,bl,u),s&&(h.uv=Fs.getInterpolatedAttribute(s,o,l,c,u,new ve)),r&&(h.uv1=Fs.getInterpolatedAttribute(r,o,l,c,u,new ve)),a&&(h.normal=Fs.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Fs.getNormal(yl,Ml,bl,d.normal),h.face=d,h.barycoord=u}return h}var Os=class extends In{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Jt,h=Jt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=new ur,Sm=new ve(.5,.5),Tl=new U,ia=class{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],T=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-m,w-v).normalize(),s[1].setComponents(c+a,f+h,p+m,w+v).normalize(),s[2].setComponents(c+o,f+u,p+x,w+T).normalize(),s[3].setComponents(c-o,f-u,p-x,w-T).normalize(),i)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,p-g,w-_).normalize();else if(s[4].setComponents(c-l,f-d,p-g,w-_).normalize(),t===bi)s[5].setComponents(c+l,f+d,p+g,w+_).normalize();else if(t===Kr)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);let t=Sm.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sa=class extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$l=new U,Zl=new U,ff=new wt,ka=new na,Al=new ur,lu=new U,pf=new U,Ja=class extends xn{constructor(e=new Pt,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$l.fromBufferAttribute(t,s-1),Zl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$l.distanceTo(Zl);e.setAttribute("lineDistance",new ht(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;ff.copy(s).invert(),ka.copy(e.ray).applyMatrix4(ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),v=h.getX(x+1),T=Rl(this,e,ka,l,p,v,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Rl(this,e,ka,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=Rl(this,e,ka,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Rl(this,e,ka,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if($l.fromBufferAttribute(o,s),Zl.fromBufferAttribute(o,r),t.distanceSqToSegment($l,Zl,lu,pf)>i)return;lu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(lu);if(!(c<e.near||c>e.far))return{distance:c,point:pf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ka=class extends In{constructor(e=[],t=Xs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xi=class extends In{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends In{constructor(e,t,i=Ti,s,r,a,o=Jt,l=Jt,c,h=Gi,u=1){if(h!==Gi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jl=class extends qi{constructor(e,t=Ti,i=Xs,s,r,a=Jt,o=Jt,l,c=Gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ja=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dt=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function m(x,g,p,v,T,_,w,E,A,M,b){let C=_/A,P=w/M,F=_/2,B=w/2,D=E/2,z=A+1,W=M+1,J=0,le=0,G=new U;for(let Z=0;Z<W;Z++){let se=Z*P-B;for(let Me=0;Me<z;Me++){let be=Me*C-F;G[x]=be*v,G[g]=se*T,G[p]=D,c.push(G.x,G.y,G.z),G[x]=0,G[g]=0,G[p]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(Me/A),u.push(1-Z/M),J+=1}}for(let Z=0;Z<M;Z++)for(let se=0;se<A;se++){let Me=d+se+z*Z,be=d+se+z*(Z+1),j=d+(se+1)+z*(Z+1),ne=d+(se+1)+z*Z;l.push(Me,be,ne),l.push(be,j,ne),le+=6}o.addGroup(f,le,b),f+=le,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Qa=class n extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_n=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=i/2,p=0;v(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function v(){let _=new U,w=new U,E=0,A=(t-e)/i;for(let M=0;M<=r;M++){let b=[],C=M/r,P=C*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,D=B*l+o,z=Math.sin(D),W=Math.cos(D);w.x=P*z,w.y=-C*i+g,w.z=P*W,u.push(w.x,w.y,w.z),_.set(z,A,W).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-C),b.push(m++)}x.push(b)}for(let M=0;M<s;M++)for(let b=0;b<r;b++){let C=x[b][M],P=x[b+1][M],F=x[b+1][M+1],B=x[b][M+1];(e>0||b!==0)&&(h.push(C,P,B),E+=3),(t>0||b!==r-1)&&(h.push(P,F,B),E+=3)}c.addGroup(p,E,0),p+=E}function T(_){let w=m,E=new ve,A=new U,M=0,b=_===!0?e:t,C=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let F=0;F<=s;F++){let D=F/s*l+o,z=Math.cos(D),W=Math.sin(D);A.x=b*W,A.y=g*C,A.z=b*z,u.push(A.x,A.y,A.z),d.push(0,C,0),E.x=z*.5+.5,E.y=W*.5*C+.5,f.push(E.x,E.y),m++}for(let F=0;F<s;F++){let B=w+F,D=P+F;_===!0?h.push(D,D+1,B):h.push(D+1,D,B),M+=3}c.addGroup(p,M,_===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,s=[],r=[],a=[],o=new U,l=new wt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ra=class extends Kn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kl=class extends ra{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var mf=new U,gf=new U,cu=new Gu,hu=new Gu,uu=new Gu,Yi=class extends Kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gf.subVectors(s[0],s[1]).add(s[0]),c=gf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),cu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),hu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),uu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),hu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),uu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(cu.calc(l),hu.calc(l),uu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xf(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function wm(n,e){let t=1-n;return t*t*e}function Em(n,e){return 2*(1-n)*n*e}function Tm(n,e){return n*n*e}function Ha(n,e,t,i){return wm(n,e)+Em(n,t)+Tm(n,i)}function Am(n,e){let t=1-n;return t*t*t*e}function Rm(n,e){let t=1-n;return 3*t*t*n*e}function Cm(n,e){return 3*(1-n)*n*n*e}function Pm(n,e){return n*n*n*e}function Ga(n,e,t,i,s){return Am(n,e)+Rm(n,t)+Cm(n,i)+Pm(n,s)}var eo=class extends Kn{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ga(e,s.x,r.x,a.x,o.x),Ga(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends Kn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ga(e,s.x,r.x,a.x,o.x),Ga(e,s.y,r.y,a.y,o.y),Ga(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends Kn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends Kn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends Kn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ha(e,s.x,r.x,a.x),Ha(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Kn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ha(e,s.x,r.x,a.x),Ha(e,s.y,r.y,a.y),Ha(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(xf(o,l.x,c.x,h.x,u.x),xf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},ec=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Yi,CubicBezierCurve:eo,CubicBezierCurve3:jl,EllipseCurve:ra,LineCurve:to,LineCurve3:Ql,QuadraticBezierCurve:no,QuadraticBezierCurve3:io,SplineCurve:so}),tc=class extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ec[s.type]().fromJSON(s))}return this}},$i=class extends tc{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new to(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new no(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new eo(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new so(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ra(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bs=class extends $i{constructor(e){super(e),this.uuid=ua(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $i().fromJSON(s))}return this}};function Im(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=hp(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Fm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=n[d],m=n[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ro(r,a,t,o,l,c,0),a}function hp(n,e,t,i,s){let r;if(s===Ym(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=_f(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=_f(a/i|0,n[a],n[a+1],r);return r&&aa(r,r.next)&&(oo(r),r=r.next),r}function dr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(aa(t,t.next)||Wt(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ro(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Hm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Dm(n,i,s,r):Lm(n)){e.push(l.i,n.i,c.i),oo(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Nm(dr(n),e),ro(n,e,t,i,s,r,2)):a===2&&Um(n,e,t,i,s,r):ro(dr(n),e,t,i,s,r,1);break}}}function Lm(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&za(s,o,r,l,a,c,m.x,m.y)&&Wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Dm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),g=Math.max(h,u,d),p=_u(f,m,e,t,i),v=_u(x,g,e,t,i),T=n.prevZ,_=n.nextZ;for(;T&&T.z>=p&&_&&_.z<=v;){if(T.x>=f&&T.x<=x&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&za(o,h,l,u,c,d,T.x,T.y)&&Wt(T.prev,T,T.next)>=0||(T=T.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&za(o,h,l,u,c,d,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=x&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&za(o,h,l,u,c,d,T.x,T.y)&&Wt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&za(o,h,l,u,c,d,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Nm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!aa(i,s)&&dp(i,t,t.next,s)&&ao(i,s)&&ao(s,i)&&(e.push(i.i,t.i,s.i),oo(t),oo(t.next),t=n=s),t=t.next}while(t!==n);return dr(t)}function Um(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wm(a,o)){let l=fp(a,o);a=dr(a,a.next),l=dr(l,l.next),ro(a,e,t,i,s,r,0),ro(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Fm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=hp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Vm(c))}s.sort(Om);for(let r=0;r<s.length;r++)t=Bm(s[r],t);return t}function Om(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Bm(n,e){let t=km(n,e);if(!t)return e;let i=fp(t,n);return dr(i,i.next),dr(t,t.next)}function km(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(aa(n,t))return t;do{if(aa(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&up(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ao(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&zm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function zm(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function Hm(n,e,t,i){let s=n;do s.z===0&&(s.z=_u(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Gm(s)}function Gm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function _u(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Vm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function up(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function za(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&up(n,e,t,i,s,r,a,o)}function Wm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Xm(n,e)&&(ao(n,e)&&ao(e,n)&&qm(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||aa(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function aa(n,e){return n.x===e.x&&n.y===e.y}function dp(n,e,t,i){let s=Pl(Wt(n,e,t)),r=Pl(Wt(n,e,i)),a=Pl(Wt(t,i,n)),o=Pl(Wt(t,i,e));return!!(s!==r&&a!==o||s===0&&Cl(n,t,e)||r===0&&Cl(n,i,e)||a===0&&Cl(t,n,i)||o===0&&Cl(t,e,i))}function Cl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Pl(n){return n>0?1:n<0?-1:0}function Xm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ao(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function qm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function fp(n,e){let t=vu(n.i,n.x,n.y),i=vu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function _f(n,e,t,i){let s=vu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var yu=class{static triangulate(e,t,i=2){return Im(e,t,i)}},lr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];vf(e),yf(i,e);let a=e.length;t.forEach(vf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,yf(i,t[l]);let o=yu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function vf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var fr=class n extends Pt{constructor(e=new Bs([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:$m,T,_=!1,w,E,A,M;if(p){T=p.getSpacedPoints(h),_=!0,d=!1;let q=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,q),E=new U,A=new U,M=new U}d||(g=0,f=0,m=0,x=0);let b=o.extractPoints(c),C=b.shape,P=b.holes;if(!lr.isClockWise(C)){C=C.reverse();for(let q=0,K=P.length;q<K;q++){let V=P[q];lr.isClockWise(V)&&(P[q]=V.reverse())}}function B(q){let V=10000000000000001e-36,te=q[0];for(let oe=1;oe<=q.length;oe++){let xe=oe%q.length,ye=q[xe],Ue=ye.x-te.x,We=ye.y-te.y,L=Ue*Ue+We*We,ot=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(te.x),Math.abs(te.y)),rt=V*ot*ot;if(L<=rt){q.splice(xe,1),oe--;continue}te=ye}}B(C),P.forEach(B);let D=P.length,z=C;for(let q=0;q<D;q++){let K=P[q];C=C.concat(K)}function W(q,K,V){return K||et("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(K,V)}let J=C.length;function le(q,K,V){let te,oe,xe,ye=q.x-K.x,Ue=q.y-K.y,We=V.x-q.x,L=V.y-q.y,ot=ye*ye+Ue*Ue,rt=ye*L-Ue*We;if(Math.abs(rt)>Number.EPSILON){let R=Math.sqrt(ot),y=Math.sqrt(We*We+L*L),H=K.x-Ue/R,X=K.y+ye/R,ie=V.x-L/y,Se=V.y+We/y,we=((ie-H)*L-(Se-X)*We)/(ye*L-Ue*We);te=H+ye*we-q.x,oe=X+Ue*we-q.y;let ae=te*te+oe*oe;if(ae<=2)return new ve(te,oe);xe=Math.sqrt(ae/2)}else{let R=!1;ye>Number.EPSILON?We>Number.EPSILON&&(R=!0):ye<-Number.EPSILON?We<-Number.EPSILON&&(R=!0):Math.sign(Ue)===Math.sign(L)&&(R=!0),R?(te=-Ue,oe=ye,xe=Math.sqrt(ot)):(te=ye,oe=Ue,xe=Math.sqrt(ot/2))}return new ve(te/xe,oe/xe)}let G=[];for(let q=0,K=z.length,V=K-1,te=q+1;q<K;q++,V++,te++)V===K&&(V=0),te===K&&(te=0),G[q]=le(z[q],z[V],z[te]);let Z=[],se,Me=G.concat();for(let q=0,K=D;q<K;q++){let V=P[q];se=[];for(let te=0,oe=V.length,xe=oe-1,ye=te+1;te<oe;te++,xe++,ye++)xe===oe&&(xe=0),ye===oe&&(ye=0),se[te]=le(V[te],V[xe],V[ye]);Z.push(se),Me=Me.concat(se)}let be;if(g===0)be=lr.triangulateShape(z,P);else{let q=[],K=[];for(let V=0;V<g;V++){let te=V/g,oe=f*Math.cos(te*Math.PI/2),xe=m*Math.sin(te*Math.PI/2)+x;for(let ye=0,Ue=z.length;ye<Ue;ye++){let We=W(z[ye],G[ye],xe);ee(We.x,We.y,-oe),te===0&&q.push(We)}for(let ye=0,Ue=D;ye<Ue;ye++){let We=P[ye];se=Z[ye];let L=[];for(let ot=0,rt=We.length;ot<rt;ot++){let R=W(We[ot],se[ot],xe);ee(R.x,R.y,-oe),te===0&&L.push(R)}te===0&&K.push(L)}}be=lr.triangulateShape(q,K)}let j=be.length,ne=m+x;for(let q=0;q<J;q++){let K=d?W(C[q],Me[q],ne):C[q];_?(A.copy(w.normals[0]).multiplyScalar(K.x),E.copy(w.binormals[0]).multiplyScalar(K.y),M.copy(T[0]).add(A).add(E),ee(M.x,M.y,M.z)):ee(K.x,K.y,0)}for(let q=1;q<=h;q++)for(let K=0;K<J;K++){let V=d?W(C[K],Me[K],ne):C[K];_?(A.copy(w.normals[q]).multiplyScalar(V.x),E.copy(w.binormals[q]).multiplyScalar(V.y),M.copy(T[q]).add(A).add(E),ee(M.x,M.y,M.z)):ee(V.x,V.y,u/h*q)}for(let q=g-1;q>=0;q--){let K=q/g,V=f*Math.cos(K*Math.PI/2),te=m*Math.sin(K*Math.PI/2)+x;for(let oe=0,xe=z.length;oe<xe;oe++){let ye=W(z[oe],G[oe],te);ee(ye.x,ye.y,u+V)}for(let oe=0,xe=P.length;oe<xe;oe++){let ye=P[oe];se=Z[oe];for(let Ue=0,We=ye.length;Ue<We;Ue++){let L=W(ye[Ue],se[Ue],te);_?ee(L.x,L.y+T[h-1].y,T[h-1].x+V):ee(L.x,L.y,u+V)}}}re(),I();function re(){let q=s.length/3;if(d){let K=0,V=J*K;for(let te=0;te<j;te++){let oe=be[te];ue(oe[2]+V,oe[1]+V,oe[0]+V)}K=h+g*2,V=J*K;for(let te=0;te<j;te++){let oe=be[te];ue(oe[0]+V,oe[1]+V,oe[2]+V)}}else{for(let K=0;K<j;K++){let V=be[K];ue(V[2],V[1],V[0])}for(let K=0;K<j;K++){let V=be[K];ue(V[0]+J*h,V[1]+J*h,V[2]+J*h)}}i.addGroup(q,s.length/3-q,0)}function I(){let q=s.length/3,K=0;N(z,K),K+=z.length;for(let V=0,te=P.length;V<te;V++){let oe=P[V];N(oe,K),K+=oe.length}i.addGroup(q,s.length/3-q,1)}function N(q,K){let V=q.length;for(;--V>=0;){let te=V,oe=V-1;oe<0&&(oe=q.length-1);for(let xe=0,ye=h+g*2;xe<ye;xe++){let Ue=J*xe,We=J*(xe+1),L=K+te+Ue,ot=K+oe+Ue,rt=K+oe+We,R=K+te+We;ce(L,ot,rt,R)}}}function ee(q,K,V){l.push(q),l.push(K),l.push(V)}function ue(q,K,V){me(q),me(K),me(V);let te=s.length/3,oe=v.generateTopUV(i,s,te-3,te-2,te-1);he(oe[0]),he(oe[1]),he(oe[2])}function ce(q,K,V,te){me(q),me(K),me(te),me(K),me(V),me(te);let oe=s.length/3,xe=v.generateSideWallUV(i,s,oe-6,oe-3,oe-2,oe-1);he(xe[0]),he(xe[1]),he(xe[3]),he(xe[1]),he(xe[2]),he(xe[3])}function me(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function he(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Zm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ec[s.type]().fromJSON(s)),new n(i,e.options)}},$m={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,a),new ve(o,l),new ve(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-u),new ve(d,1-m),new ve(x,1-p)]:[new ve(o,1-l),new ve(h,1-u),new ve(f,1-m),new ve(g,1-p)]}};function Zm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ks=class n extends Pt{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=gt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new U,d=new ve,f=new U,m=new U,x=new U,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let T=i+v*h*s,_=Math.sin(T),w=Math.cos(T);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*w,a.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),o.push(d.x,d.y);let A=l[3*E+0]*_,M=l[3*E+1],b=l[3*E+0]*w;c.push(A,M,b)}}for(let v=0;v<t;v++)for(let T=0;T<e.length-1;T++){let _=T+v*e.length,w=_,E=_+e.length,A=_+e.length+1,M=_+1;r.push(w,E,M),r.push(A,M,E)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var jn=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-a;for(let T=0;T<c;T++){let _=T*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let T=v+c*p,_=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;f.push(T,_,E),f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var un=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let v=[],T=p/i,_=a+T*o,w=e*Math.cos(_),E=Math.sqrt(e*e-w*w),A=0;p===0&&a===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let b=M/t,C=s+b*r;u.x=-E*Math.cos(C),u.y=w,u.z=E*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(b+A,1-T),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let T=h[p][v+1],_=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(T,_,E),(p!==i-1||l<Math.PI)&&f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wi=class n extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,f=new U,m=new U;for(let x=0;x<=i;x++){let g=a+x/i*o;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,T=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(p,v,_),l.push(v,T,_)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ps=class n extends Pt{constructor(e=new io(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new ve,h=new U,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function x(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),v(),p()}function g(T){h=e.getPointAt(T/t,h);let _=a.normals[T],w=a.binormals[T];for(let E=0;E<=s;E++){let A=E/s*Math.PI*2,M=Math.sin(A),b=-Math.cos(A);l.x=b*_.x+M*w.x,l.y=b*_.y+M*w.y,l.z=b*_.z+M*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let _=1;_<=s;_++){let w=(s+1)*(T-1)+(_-1),E=(s+1)*T+(_-1),A=(s+1)*T+_,M=(s+1)*(T-1)+_;m.push(w,E,M),m.push(E,A,M)}}function v(){for(let T=0;T<=t;T++)for(let _=0;_<=s;_++)c.x=T/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ec[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Mf(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=xr(n[t]);for(let s in i)e[s]=i[s]}return e}function Mf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var li={clone:xr,merge:Cn},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oa=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},On=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qn=class extends On{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends Wi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var nc=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ic=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function du(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var zs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sc=class extends zs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gu:r=e,o=2*t-i;break;case xu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:a=e,l=2*i-t;break;case xu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+v*a[c+w]+T*a[l+w]+_*a[u+w];return r}},rc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ac=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oc=class extends zs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(i-t)/(s-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*d+m*2,v=u[p],T=u[p+1],_=e*d+m*2,w=h[_],E=h[_+1],A=eg(i,t,v,w,s);r[m]=pp(A,x,T,E,g)}return r}};function pp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Qm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function eg(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=pp(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Qm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ei=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),du(e.settings)&&(i.settings={inTangents:qr(e.settings.inTangents,Array),outTangents:qr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new oc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Va:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break;case pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Dl;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;du(this.settings)&&(bf(this.settings.inTangents,e),bf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&sm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Dl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,du(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Vl;var Hs=class extends ei{constructor(e,t,i){super(e,t,i)}};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Va;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}};lc.prototype.ValueTypeName="color";var cc=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}};cc.prototype.ValueTypeName="number";var hc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ai.slerpFlat(r,0,a,c-o,a,c,l);return r}},co=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends ei{constructor(e,t,i){super(e,t,i)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Va;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}};uc.prototype.ValueTypeName="vector";var dc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mp=new dc,fc=class{constructor(e){this.manager=e!==void 0?e:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ho=class extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pr=class extends ho{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fu=new wt,Sf=new U,wf=new U,pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sf),wf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Kr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Il=new U,Ll=new ai,zi=new U,uo=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ll,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Il,Ll,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Us=new U,Ef=new ve,Tf=new ve,hn=class extends uo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(Hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,Ef,Tf),t.subVectors(Tf,Ef)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vs=class extends uo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mu=class extends pc{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Yr=-90,$r=1,mc=class extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Yr,$r,e,t);s.layers=this.layers,this.add(s);let r=new hn(Yr,$r,e,t);r.layers=this.layers,this.add(r);let a=new hn(Yr,$r,e,t);a.layers=this.layers,this.add(a);let o=new hn(Yr,$r,e,t);o.layers=this.layers,this.add(o);let l=new hn(Yr,$r,e,t);l.layers=this.layers,this.add(l);let c=new hn(Yr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},gc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=tg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tg(){this._document.hidden===!1&&this.reset()}var Wu="\\[\\]\\.:\\/",ng=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",ig="[^"+Wu.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",Xu),rg=/(WCOD+)?/.source.replace("WCOD",ig),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),lg=new RegExp("^"+sg+rg+ag+og+"$"),cg=["material","materials","bones","map"],bu=class{constructor(e,t,i){let s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(e){let t=lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=bu;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BM=new Float32Array(1);var Af=new wt,po=class{constructor(e,t,i=0,s=1/0){this.ray=new na(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Af),this}intersectObject(e,t=!0,i=[]){return Su(e,this,i,t),i.sort(Rf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Su(e[s],this,i,t);return i.sort(Rf),i}};function Rf(n,e){return n.distance-e.distance}function Su(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Su(r[a],e,t,!0)}}var Ku=class Ku{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Ku.prototype.isMatrix2=!0;var wu=Ku;function qu(n,e,t,i){let s=hg(i);switch(t){case Ou:return n*e;case ku:return n*e/s.components*s.byteLength;case Ec:return n*e/s.components*s.byteLength;case $s:return n*e*2/s.components*s.byteLength;case Tc:return n*e*2/s.components*s.byteLength;case Bu:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Ac:return n*e*4/s.components*s.byteLength;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Ic:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(n,8)*Math.max(e,8)/2;case Lc:case Dc:case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Co:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Po:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hg(n){switch(n){case Rn:case Du:return{byteLength:1,components:1};case ha:case Nu:case tn:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case Ti:case bc:case Ai:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Op(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _g(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
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
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,xx=`uniform sampler2D dfgLUT;
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
}`,_x=`
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s_=`float getShadowMask() {
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
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,A_=`#define DISTANCE
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
}`,R_=`#define DISTANCE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,U_=`#define LAMBERT
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
}`,F_=`#define LAMBERT
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
}`,O_=`#define MATCAP
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
}`,B_=`#define MATCAP
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
}`,k_=`#define NORMAL
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
}`,z_=`#define NORMAL
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
}`,H_=`#define PHONG
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
}`,G_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,W_=`#define STANDARD
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
}`,X_=`#define TOON
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
}`,q_=`#define TOON
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
}`,Y_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,J_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,j_=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:vg,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:bg,alphatest_fragment:Sg,alphatest_pars_fragment:wg,aomap_fragment:Eg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:kg,color_pars_vertex:zg,color_vertex:Hg,common:Gg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:$g,colorspace_fragment:Zg,colorspace_pars_fragment:Jg,envmap_fragment:Kg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Qg,envmap_pars_vertex:ex,envmap_physical_pars_fragment:ux,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ax,lightmap_pars_fragment:ox,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:hx,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:yx,lightprobes_pars_fragment:Mx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:Bx,normal_pars_fragment:kx,normal_pars_vertex:zx,normal_vertex:Hx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:$x,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Kx,dithering_pars_fragment:jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:a_,skinning_vertex:o_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:x_,worldpos_vertex:__,background_vert:v_,background_frag:y_,backgroundCube_vert:M_,backgroundCube_frag:b_,cube_vert:S_,cube_frag:w_,depth_vert:E_,depth_frag:T_,distance_vert:A_,distance_frag:R_,equirect_vert:C_,equirect_frag:P_,linedashed_vert:I_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:N_,meshlambert_vert:U_,meshlambert_frag:F_,meshmatcap_vert:O_,meshmatcap_frag:B_,meshnormal_vert:k_,meshnormal_frag:z_,meshphong_vert:H_,meshphong_frag:G_,meshphysical_vert:V_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:q_,points_vert:Y_,points_frag:$_,shadow_vert:Z_,shadow_frag:J_,sprite_vert:K_,sprite_frag:j_},Le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ki={basic:{uniforms:Cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Cn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Cn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new qe(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Cn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Cn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Cn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Cn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Cn([Le.common,Le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Cn([Le.lights,Le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ki.physical={uniforms:Cn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var ah={r:0,b:0,g:0},Q_=new wt,Bp=new at;Bp.set(-1,0,0,0,1,0,0,0,1);function ev(n,e,t,i,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let _=v.backgroundBlurriness>0;T=e.get(T,_)}return T}function m(v){let T=!1,_=f(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,T){let _=f(T);_&&(_.isCubeTexture||_.mapping===So)?(c===void 0&&(c=new tt(new dt(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:xr(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bp),c.material.toneMapped=xt.getTransfer(_.colorSpace)!==At,(h!==_||u!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new tt(new jn(2,2),new Yt({name:"BackgroundMaterial",uniforms:xr(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=xt.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,T){v.getRGB(ah,Vu(n)),t.buffers.color.setClear(ah.r,ah.g,ah.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function tv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(P,F,B,D,z){let W=!1,J=u(P,D,B,F);r!==J&&(r=J,c(r.object)),W=f(P,D,B,z),W&&m(P,D,B,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(P,F,B,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,F,B,D){let z=D.wireframe===!0,W=i[F.id];W===void 0&&(W={},i[F.id]=W);let J=P.isInstancedMesh===!0?P.id:0,le=W[J];le===void 0&&(le={},W[J]=le);let G=le[B.id];G===void 0&&(G={},le[B.id]=G);let Z=G[z];return Z===void 0&&(Z=d(l()),G[z]=Z),Z}function d(P){let F=[],B=[],D=[];for(let z=0;z<t;z++)F[z]=0,B[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,F,B,D){let z=r.attributes,W=F.attributes,J=0,le=B.getAttributes();for(let G in le)if(le[G].location>=0){let se=z[G],Me=W[G];if(Me===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(Me=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(Me=P.instanceColor)),se===void 0||se.attribute!==Me||Me&&se.data!==Me.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function m(P,F,B,D){let z={},W=F.attributes,J=0,le=B.getAttributes();for(let G in le)if(le[G].location>=0){let se=W[G];se===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let Me={};Me.attribute=se,se&&se.data&&(Me.data=se.data),z[G]=Me,J++}r.attributes=z,r.attributesNum=J,r.index=D}function x(){let P=r.newAttributes;for(let F=0,B=P.length;F<B;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){let B=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;B[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),z[P]!==F&&(n.vertexAttribDivisor(P,F),z[P]=F)}function v(){let P=r.newAttributes,F=r.enabledAttributes;for(let B=0,D=F.length;B<D;B++)F[B]!==P[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function T(P,F,B,D,z,W,J){J===!0?n.vertexAttribIPointer(P,F,B,z,W):n.vertexAttribPointer(P,F,B,D,z,W)}function _(P,F,B,D){x();let z=D.attributes,W=B.getAttributes(),J=F.defaultAttributeValues;for(let le in W){let G=W[le];if(G.location>=0){let Z=z[le];if(Z===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let se=Z.normalized,Me=Z.itemSize,be=e.get(Z);if(be===void 0)continue;let j=be.buffer,ne=be.type,re=be.bytesPerElement,I=ne===n.INT||ne===n.UNSIGNED_INT||Z.gpuType===bc;if(Z.isInterleavedBufferAttribute){let N=Z.data,ee=N.stride,ue=Z.offset;if(N.isInstancedInterleavedBuffer){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,N.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<G.locationSize;ce++)g(G.location+ce);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ce=0;ce<G.locationSize;ce++)T(G.location+ce,Me/G.locationSize,ne,se,ee*re,(ue+Me/G.locationSize*ce)*re,I)}else{if(Z.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)p(G.location+N,Z.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let N=0;N<G.locationSize;N++)g(G.location+N);n.bindBuffer(n.ARRAY_BUFFER,j);for(let N=0;N<G.locationSize;N++)T(G.location+N,Me/G.locationSize,ne,se,Me*re,Me/G.locationSize*N*re,I)}}else if(J!==void 0){let se=J[le];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(G.location,se);break;case 3:n.vertexAttrib3fv(G.location,se);break;case 4:n.vertexAttrib4fv(G.location,se);break;default:n.vertexAttrib1fv(G.location,se)}}}}v()}function w(){b();for(let P in i){let F=i[P];for(let B in F){let D=F[B];for(let z in D){let W=D[z];for(let J in W)h(W[J].object),delete W[J];delete D[z]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let F=i[P.id];for(let B in F){let D=F[B];for(let z in D){let W=D[z];for(let J in W)h(W[J].object),delete W[J];delete D[z]}}delete i[P.id]}function A(P){for(let F in i){let B=i[F];for(let D in B){let z=B[D];if(z[P.id]===void 0)continue;let W=z[P.id];for(let J in W)h(W[J].object),delete W[J];delete z[P.id]}}}function M(P){for(let F in i){let B=i[F],D=P.isInstancedMesh===!0?P.id:0,z=B[D];if(z!==void 0){for(let W in z){let J=z[W];for(let le in J)h(J[le].object),delete J[le];delete z[W]}delete B[D],Object.keys(B).length===0&&delete i[F]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function nv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function iv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let M=A===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rn&&A!==Ai&&!M&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:_,maxSamples:w,samples:E}}function sv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Mi,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,T=v*4,_=p.clippingState||null;l.value=_,_=h(m,d,T,f);for(let w=0;w!==T;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,_=f;T!==x;++T,_+=4)a.copy(u[T]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var fa=4,rv=6,av=20,ov=256,Lo=new Vs,gp=new qe,ju=null,Qu=0,ed=0,td=!1,lv=new U,_r=new U,Zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=lv}=r;ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Qu,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:tn,format:Bn,colorSpace:Wa,depthBuffer:!1},s=xp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cv(r)),this._blurMaterial=uv(r,e,t),this._ggxMaterial=hv(r,e,t)}return s}_compileMaterial(e){let t=new tt(new Pt,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s,r){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gp),u.toneMapping=Ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new dt,new sn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(gp),p=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):_===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;da(s,_*w,T>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Xs||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;da(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-fa?i-m+fa:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,da(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,da(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Lo)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-fa?s-this._lodMax+fa:0),d=4*(this._cubeSize-h);da(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Lo)}};function cv(n){let e=[],t=[],i=n,s=n-fa+1+rv;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,T=p>2?0:-1,_=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];m.set(_,f*d*p);for(let w=0;w<d;w++){let E=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?_r.set(1,A,E):p===1?_r.set(-E,1,-A):p===2?_r.set(-E,A,1):p===3?_r.set(-1,A,-E):p===4?_r.set(-E,-1,A):_r.set(E,A,-1),_r.toArray(x,(p*d+w)*f)}}let g=new Pt;g.setAttribute("position",new Un(m,f)),g.setAttribute("outputDirection",new Un(x,f)),t.push(new tt(g,null)),i>fa&&i--}return{lodMeshes:t,sizeLods:e}}function xp(n,e,t){let i=new Xt(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hv(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ov,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function uv(n,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function _p(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function vp(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lh=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ka(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:jt});r.uniforms.tEquirect.value=t;let a=new tt(s,r),o=t.minFilter;return t.minFilter===qs&&(t.minFilter=gn),new mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function dv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===vc||f===yc)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new lh(m.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===vc||f===yc,x=f===Xs||f===gr;if(m||x){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Zs(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let v=d.image;return m&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Zs(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===vc?d.mapping=Xs:f===yc&&(d.mapping=gr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function fv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&cr("WebGLRenderer: "+i+" extension not supported."),s}}}function pv(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let T=0,_=v.length;T<_;T+=3){let w=v[T+0],E=v[T+1],A=v[T+2];d.push(w,E,E,A,A,w)}}else{let v=m.array;x=m.version;for(let T=0,_=v.length/3-1;T<_;T+=3){let w=T+0,E=T+1,A=T+2;d.push(w,E,E,A,A,w)}}let g=new(m.count>=65535?Za:$a)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mv(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xv(n,e,t){let i=new WeakMap,s=new Gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let _=o.attributes.position.count*T,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*w*4*u),A=new Ya(E,_,w,u);A.type=Ai,A.needsUpdate=!0;let M=T*4;for(let C=0;C<u;C++){let P=g[C],F=p[C],B=v[C],D=_*w*4*C;for(let z=0;z<P.count;z++){let W=z*M;f===!0&&(s.fromBufferAttribute(P,z),E[D+W+0]=s.x,E[D+W+1]=s.y,E[D+W+2]=s.z,E[D+W+3]=0),m===!0&&(s.fromBufferAttribute(F,z),E[D+W+4]=s.x,E[D+W+5]=s.y,E[D+W+6]=s.z,E[D+W+7]=0),x===!0&&(s.fromBufferAttribute(B,z),E[D+W+8]=s.x,E[D+W+9]=s.y,E[D+W+10]=s.z,E[D+W+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ve(_,w)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function _v(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var vv={[xo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[bo]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function yv(n,e,t,i,s,r){let a=new Xt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pt;c.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ht([0,2,0,0,2,0],2));let h=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new tt(c,h),d=new Vs(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,v=[],T=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let E=0;E<v.length;E++){let A=v[E];A.setSize&&A.setSize(_,w)}},this.setEffects=function(_){v=_,T=v.length>0&&v[0].isRenderPass===!0;let w=a.width,E=a.height;v.length>0&&o===null&&(o=new Xt(w,E,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(w,E,{type:tn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let M=v[A];M.setSize&&M.setSize(w,E)}},this.begin=function(_,w){if(x||_.toneMapping===Ei&&v.length===0)return!1;if(p=w,w!==null){let E=w.width,A=w.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return T===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Ei,!0},this.hasRenderPass=function(){return T},this.end=function(_,w){_.toneMapping=g,x=!0;let E=a,A=o;for(let M=0;M<v.length;M++){let b=v[M];b.enabled!==!1&&(b.render(_,A,E,w),b.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},xt.getTransfer(f)===At&&(h.defines.SRGB_TRANSFER="");let M=vv[m];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var kp=new In,sd=new qi(1,1),zp=new Ya,Hp=new Yl,Gp=new Ka,yp=[],Mp=[],bp=new Float32Array(16),Sp=new Float32Array(9),wp=new Float32Array(4);function ga(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=yp[s];if(r===void 0&&(r=new Float32Array(s),yp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hh(n,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;wp.set(i),n.uniformMatrix2fv(this.addr,!1,wp),on(t,i)}}function Tv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Sp.set(i),n.uniformMatrix3fv(this.addr,!1,Sp),on(t,i)}}function Av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;bp.set(i),n.uniformMatrix4fv(this.addr,!1,bp),on(t,i)}}function Rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function Pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function Iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function Lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function Fv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sd.compareFunction=t.isReversedDepthBuffer()?rh:sh,r=sd):r=kp,t.setTexture2D(e||r,s)}function Ov(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hp,s)}function Bv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gp,s)}function kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zp,s)}function zv(n){switch(n){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return wv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return kv}}function Hv(n,e){n.uniform1fv(this.addr,e)}function Gv(n,e){let t=ga(e,this.size,2);n.uniform2fv(this.addr,t)}function Vv(n,e){let t=ga(e,this.size,3);n.uniform3fv(this.addr,t)}function Wv(n,e){let t=ga(e,this.size,4);n.uniform4fv(this.addr,t)}function Xv(n,e){let t=ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qv(n,e){let t=ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yv(n,e){let t=ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $v(n,e){n.uniform1iv(this.addr,e)}function Zv(n,e){n.uniform2iv(this.addr,e)}function Jv(n,e){n.uniform3iv(this.addr,e)}function Kv(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Qv(n,e){n.uniform2uiv(this.addr,e)}function ey(n,e){n.uniform3uiv(this.addr,e)}function ty(n,e){n.uniform4uiv(this.addr,e)}function ny(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=sd:a=kp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function iy(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hp,r[a])}function sy(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gp,r[a])}function ry(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zp,r[a])}function ay(n){switch(n){case 5126:return Hv;case 35664:return Gv;case 35665:return Vv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Kv;case 5125:return jv;case 36294:return Qv;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}var rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}},ad=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ay(t.type)}},od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},nd=/(\w+)(\])?(\[|\.)?/g;function Ep(n,e){n.seq.push(e),n.map[e.id]=e}function oy(n,e,t){let i=n.name,s=i.length;for(nd.lastIndex=0;;){let r=nd.exec(i),a=nd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ep(t,c===void 0?new rd(o,n,e):new ad(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new od(o),Ep(t,u)),t=u}}}var pa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);oy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Tp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ly=37297,cy=0;function hy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Ap=new at;function uy(n){xt._getMatrix(Ap,xt.workingColorSpace,n);let e=`mat3( ${Ap.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Xa:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hy(n.getShaderSource(e),o)}else return r}function dy(n,e){let t=uy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var fy={[xo]:"Linear",[_o]:"Reinhard",[vo]:"Cineon",[xs]:"ACESFilmic",[Mo]:"AgX",[bo]:"Neutral",[yo]:"Custom"};function py(n,e){let t=fy[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oh=new U;function my(){xt.getLuminanceCoefficients(oh);let n=oh.x.toFixed(4),e=oh.y.toFixed(4),t=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function xy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _y(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function No(n){return n!==""}function Cp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(n){return n.replace(vy,My)}var yy=new Map;function My(n,e){let t=mt[e];if(t===void 0){let i=yy.get(e);if(i!==void 0)t=mt[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ld(t)}var by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(n){return n.replace(by,Sy)}function Sy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var wy={[gs]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function Ey(n){return wy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[Xs]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE_UV"};function Ay(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ry={[gr]:"ENVMAP_MODE_REFRACTION"};function Cy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Py={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[qf]:"ENVMAP_BLENDING_MIX",[Yf]:"ENVMAP_BLENDING_ADD"};function Iy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Py[n.combine]||"ENVMAP_BLENDING_NONE"}function Ly(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Dy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ey(t),c=Ay(t),h=Cy(t),u=Iy(t),d=Ly(t),f=gy(t),m=xy(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),p.length>0&&(p+=`
`)):(g=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),p=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),a=ld(a),a=Cp(a,t),a=Pp(a,t),o=ld(o),o=Cp(o,t),o=Pp(o,t),a=Ip(a),o=Ip(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=v+g+a,_=v+p+o,w=Tp(s,s.VERTEX_SHADER,T),E=Tp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(E)||"",z=F.trim(),W=B.trim(),J=D.trim(),le=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,E);else{let Z=Rp(s,w,"vertex"),se=Rp(s,E,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Z+`
`+se)}else z!==""?Qe("WebGLProgram: Program Info Log:",z):(W===""||J==="")&&(G=!1);G&&(P.diagnostics={runnable:le,programLog:z,vertexShader:{log:W,prefix:g},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(E),M=new pa(s,x),b=_y(s,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,ly)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var Ny=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hd(e),t.set(e,i)),i}},hd=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};function Uy(n){return n===$s||n===Co||n===Po}function Fy(n,e,t,i,s,r){let a=new ea,o=new cd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,b,C,P,F,B){let D=P.fog,z=F.geometry,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,le=e.get(M.envMap||W,J),G=le&&le.mapping===So?le.image.height:null,Z=f[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&Qe("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=se!==void 0?se.length:0,be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let j,ne,re,I;if(Z){let Nt=Ki[Z];j=Nt.vertexShader,ne=Nt.fragmentShader}else{j=M.vertexShader,ne=M.fragmentShader;let Nt=o.getVertexShaderStage(M),Rt=o.getFragmentShaderStage(M);o.update(M,Nt,Rt),re=Nt.id,I=Rt.id}let N=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),ue=F.isInstancedMesh===!0,ce=F.isBatchedMesh===!0,me=!!M.map,he=!!M.matcap,q=!!le,K=!!M.aoMap,V=!!M.lightMap,te=!!M.bumpMap&&M.wireframe===!1,oe=!!M.normalMap,xe=!!M.displacementMap,ye=!!M.emissiveMap,Ue=!!M.metalnessMap,We=!!M.roughnessMap,L=M.anisotropy>0,ot=M.clearcoat>0,rt=M.dispersion>0,R=M.retroreflectivity>0,y=M.iridescence>0,H=M.sheen>0,X=M.transmission>0,ie=L&&!!M.anisotropyMap,Se=ot&&!!M.clearcoatMap,we=ot&&!!M.clearcoatNormalMap,ae=ot&&!!M.clearcoatRoughnessMap,fe=y&&!!M.iridescenceMap,Re=y&&!!M.iridescenceThicknessMap,Ye=H&&!!M.sheenColorMap,Te=H&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,He=!!M.specularColorMap,Ze=!!M.specularIntensityMap,it=X&&!!M.transmissionMap,k=X&&!!M.thicknessMap,Pe=!!M.gradientMap,de=!!M.alphaMap,Ie=M.alphaTest>0,Fe=!!M.alphaHash,_e=!!M.extensions,Ke=Ei;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let Xe={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:ne,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:I,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ce,batchingColor:ce&&F._colorsTexture!==null,instancing:ue,instancingColor:ue&&F.instanceColor!==null,instancingMorph:ue&&F.morphTexture!==null,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:me,matcap:he,envMap:q,envMapMode:q&&le.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:V,bumpMap:te,normalMap:oe,displacementMap:xe,emissiveMap:ye,normalMapObjectSpace:oe&&M.normalMapType===Jf,normalMapTangentSpace:oe&&M.normalMapType===Io,packedNormalMap:oe&&M.normalMapType===Io&&Uy(M.normalMap.format),metalnessMap:Ue,roughnessMap:We,anisotropy:L,anisotropyMap:ie,clearcoat:ot,clearcoatMap:Se,clearcoatNormalMap:we,clearcoatRoughnessMap:ae,dispersion:rt,retroreflection:R,iridescence:y,iridescenceMap:fe,iridescenceThicknessMap:Re,sheen:H,sheenColorMap:Ye,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:He,specularIntensityMap:Ze,transmission:X,transmissionMap:it,thicknessMap:k,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===ca&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:Fe,combine:M.combine,mapUv:me&&m(M.map.channel),aoMapUv:K&&m(M.aoMap.channel),lightMapUv:V&&m(M.lightMap.channel),bumpMapUv:te&&m(M.bumpMap.channel),normalMapUv:oe&&m(M.normalMap.channel),displacementMapUv:xe&&m(M.displacementMap.channel),emissiveMapUv:ye&&m(M.emissiveMap.channel),metalnessMapUv:Ue&&m(M.metalnessMap.channel),roughnessMapUv:We&&m(M.roughnessMap.channel),anisotropyMapUv:ie&&m(M.anisotropyMap.channel),clearcoatMapUv:Se&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(M.sheenRoughnessMap.channel),specularMapUv:Ee&&m(M.specularMap.channel),specularColorMapUv:He&&m(M.specularColorMap.channel),specularIntensityMapUv:Ze&&m(M.specularIntensityMap.channel),transmissionMapUv:it&&m(M.transmissionMap.channel),thicknessMapUv:k&&m(M.thicknessMap.channel),alphaMapUv:de&&m(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(oe||L),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(me||de),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&oe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ee,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:be,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:me&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===At,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&xt.getTransfer(M.emissiveMap.colorSpace)===At,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kt,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function g(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(p(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function p(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let b=f[M.type],C;if(b){let P=Ki[b];C=li.clone(P.uniforms)}else C=M.uniforms;return C}function _(M,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Dy(n,b,M,s),c.push(C),h.set(b,C)),C}function w(M){if(--M.usedTimes===0){let b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function E(M){o.remove(M)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:_,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:A}}function Oy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function By(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Dp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Np(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=g,v.group=p),e++,v}function l(d,f,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let T=o(d,f,m,x,g,p);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):t.push(T)}function c(d,f,m,x,g,p){let v=o(d,f,m,x,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||By),i.length>1&&i.sort(f||Dp),s.length>1&&s.sort(f||Dp)}function u(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function ky(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Np,n.set(i,[a])):s>=r.length?(a=new Np,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Hy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Gy=0;function Vy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wy(n){let e=new zy,t=Hy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new wt,a=new wt;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,T=0,_=0,w=0,E=0,A=0,M=0,b=0,C=0;c.sort(Vy);for(let F=0,B=c.length;F<B;F++){let D=c[F],z=D.color,W=D.intensity,J=D.distance,le=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$s?le=D.shadow.map.texture:le=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*W,u+=z.g*W,d+=z.b*W;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],W);C++}else if(D.isSunLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,se=t.get(D);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[m]=se,i.sunShadowMap[m]=le;let Me=Z.getViewportCount();for(let be=0;be<Me;be++)i.sunShadowMatrix[x+be]=Z.getMatrix(be),i.sunShadowCascade[x+be]=Z._cascadeData[be];x+=Me,m++}i.sun[f]=G,f++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,se=t.get(D);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,i.directionalShadow[g]=se,i.directionalShadowMap[g]=le,i.directionalShadowMatrix[g]=D.shadow.matrix,w++}i.directional[g]=G,g++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(z).multiplyScalar(W),G.distance=J,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[v]=G;let Z=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,Z.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[v]=Z.matrix,D.castShadow){let se=t.get(D);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=le,A++}v++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(z).multiplyScalar(W),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=G,T++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let Z=D.shadow,se=t.get(D);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,se.shadowCameraNear=Z.camera.near,se.shadowCameraFar=Z.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=le,i.pointShadowMatrix[p]=D.shadow.matrix,E++}i.point[p]=G,p++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(W),G.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[_]=G,_++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==_||P.numSunShadows!==m||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==M||P.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=T,i.point.length=p,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+M-b,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=_,P.numSunShadows=m,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=M,P.numLightProbes=C,i.version=Gy++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let _=c[v];if(_.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(_.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Up(n){let e=new Wy(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Xy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Up(n),e.set(s,[o])):r>=a.length?(o=new Up(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,$y=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Zy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Fp=new wt,Do=new U,id=new U;function Jy(n,e,t){let i=new ia,s=new ve,r=new ve,a=new Gt,o=new nc,l=new ic,c={},h=t.maxTextureSize,u={[Ws]:rn,[rn]:Ws,[Kt]:Kt},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Pt;m.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(E,A,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===If&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let b=n.getRenderTarget(),C=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(jt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=E.length;D<z;D++){let W=E[D],J=W.shadow;if(J===void 0){Qe("WebGLShadowMap:",W,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let le=J.getFrameExtents();s.multiply(le),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,J.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=G,J.map===null||B===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===la){if(W.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Xt(s.x,s.y,{format:$s,type:tn,minFilter:gn,magFilter:gn,generateMipmaps:!1}),J.map.texture.name=W.name+".shadowMap",J.map.depthTexture=new qi(s.x,s.y,Ai),J.map.depthTexture.name=W.name+".shadowMapDepth",J.map.depthTexture.format=Gi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jt,J.map.depthTexture.magFilter=Jt}else W.isPointLight?(J.map=new lh(s.x),J.map.depthTexture=new Jl(s.x,Ti)):(J.map=new Xt(s.x,s.y),J.map.depthTexture=new qi(s.x,s.y,Ti)),J.map.depthTexture.name=W.name+".shadowMap",J.map.depthTexture.format=Gi,this.type===gs?(J.map.depthTexture.compareFunction=G?rh:sh,J.map.depthTexture.minFilter=gn,J.map.depthTexture.magFilter=gn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jt,J.map.depthTexture.magFilter=Jt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Z=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();W.isPointLight!==!0&&J.updateMatrices(W,M);for(let se=0;se<Z;se++){let Me=J.getCamera(se);if(W.isPointLight){let be=J.camera,j=J.matrix,ne=W.distance||be.far;ne!==be.far&&(be.far=ne,be.updateProjectionMatrix()),Do.setFromMatrixPosition(W.matrixWorld),be.position.copy(Do),id.copy(be.position),id.add($y[se]),be.up.copy(Zy[se]),be.lookAt(id),be.updateMatrixWorld(),j.makeTranslation(-Do.x,-Do.y,-Do.z),Fp.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Fp,be.coordinateSystem,be.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,se),n.clear();else{se===0&&(n.setRenderTarget(J.map),n.clear());let be=J.getViewport(se);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),F.viewport(a)}i=J.getFrustum(se),_(A,M,Me,W,this.type)}J.isPointLightShadow!==!0&&this.type===la&&v(J,M),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,C,P)};function v(E,A){let M=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Xt(s.x,s.y,{format:$s,type:tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,M,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,M,f,x,null)}function T(E,A,M,b){let C=null,P=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=M.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,B=A.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let z=D[B];z===void 0&&(z=C.clone(),D[B]=z,A.addEventListener("dispose",w)),C=z}if(C.visible=A.visible,C.wireframe=A.wireframe,b===la?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=M}return C}function _(E,A,M,b,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===la)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let B=e.update(E),D=E.material;if(Array.isArray(D)){let z=B.groups;for(let W=0,J=z.length;W<J;W++){let le=z[W],G=D[le.materialIndex];if(G&&G.visible){let Z=T(E,G,b,C);E.onBeforeShadow(n,E,A,M,B,Z,le),n.renderBufferDirect(M,null,B,Z,E,le),E.onAfterShadow(n,E,A,M,B,Z,le)}}}else if(D.visible){let z=T(E,D,b,C);E.onBeforeShadow(n,E,A,M,B,z,null),n.renderBufferDirect(M,null,B,z,E,null),E.onAfterShadow(n,E,A,M,B,z,null)}}let F=E.children;for(let B=0,D=F.length;B<D;B++)_(F[B],A,M,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(let M in c){let b=c[M],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Ky(n,e){function t(){let k=!1,Pe=new Gt,de=null,Ie=new Gt(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!k&&(n.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,_e,Ke,Xe,Nt){Nt===!0&&(Fe*=Xe,_e*=Xe,Ke*=Xe),Pe.set(Fe,_e,Ke,Xe),Ie.equals(Pe)===!1&&(n.clearColor(Fe,_e,Ke,Xe),Ie.copy(Pe))},reset:function(){k=!1,de=null,Ie.set(-1,0,0,0)}}}function i(){let k=!1,Pe=!1,de=null,Ie=null,Fe=null;return{setReversed:function(_e){if(Pe!==_e){let Ke=e.get("EXT_clip_control");_e?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Pe=_e;let Xe=Fe;Fe=null,this.setClear(Xe)}},getReversed:function(){return Pe},setTest:function(_e){_e?N(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(_e){de!==_e&&!k&&(n.depthMask(_e),de=_e)},setFunc:function(_e){if(Pe&&(_e=lp[_e]),Ie!==_e){switch(_e){case Ul:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case kl:n.depthFunc(n.GEQUAL);break;case zl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=_e}},setLocked:function(_e){k=_e},setClear:function(_e){Fe!==_e&&(Fe=_e,Pe&&(_e=1-_e),n.clearDepth(_e))},reset:function(){k=!1,de=null,Ie=null,Fe=null,Pe=!1}}}function s(){let k=!1,Pe=null,de=null,Ie=null,Fe=null,_e=null,Ke=null,Xe=null,Nt=null;return{setTest:function(Rt){k||(Rt?N(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(Rt){Pe!==Rt&&!k&&(n.stencilMask(Rt),Pe=Rt)},setFunc:function(Rt,xi,Bi){(de!==Rt||Ie!==xi||Fe!==Bi)&&(n.stencilFunc(Rt,xi,Bi),de=Rt,Ie=xi,Fe=Bi)},setOp:function(Rt,xi,Bi){(_e!==Rt||Ke!==xi||Xe!==Bi)&&(n.stencilOp(Rt,xi,Bi),_e=Rt,Ke=xi,Xe=Bi)},setLocked:function(Rt){k=Rt},setClear:function(Rt){Nt!==Rt&&(n.clearStencil(Rt),Nt=Rt)},reset:function(){k=!1,Pe=null,de=null,Ie=null,Fe=null,_e=null,Ke=null,Xe=null,Nt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,T=null,_=null,w=null,E=null,A=null,M=new qe(0,0,0),b=0,C=!1,P=null,F=null,B=null,D=null,z=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,le=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=le>=1):G.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=le>=2);let Z=null,se={},Me=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),j=new Gt().fromArray(Me),ne=new Gt().fromArray(be);function re(k,Pe,de,Ie){let Fe=new Uint8Array(4),_e=n.createTexture();n.bindTexture(k,_e),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<de;Ke++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Pe,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Pe+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return _e}let I={};I[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),I[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),I[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(n.DEPTH_TEST),a.setFunc(Jr),te(!1),oe(Eu),N(n.CULL_FACE),K(jt);function N(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function ee(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function ue(k,Pe){return d[k]!==Pe?(n.bindFramebuffer(k,Pe),d[k]=Pe,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Pe),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ce(k,Pe){let de=m,Ie=!1;if(k){de=f.get(Pe),de===void 0&&(de=[],f.set(Pe,de));let Fe=k.textures;if(de.length!==Fe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ke=Fe.length;_e<Ke;_e++)de[_e]=n.COLOR_ATTACHMENT0+_e;de.length=Fe.length,Ie=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(de)}function me(k){return x!==k?(n.useProgram(k),x=k,!0):!1}let he={[oi]:n.FUNC_ADD,[Lf]:n.FUNC_SUBTRACT,[Df]:n.FUNC_REVERSE_SUBTRACT};he[Nf]=n.MIN,he[Uf]=n.MAX;let q={[mr]:n.ZERO,[Ff]:n.ONE,[Of]:n.SRC_COLOR,[Cu]:n.SRC_ALPHA,[Hf]:n.SRC_ALPHA_SATURATE,[go]:n.DST_COLOR,[mo]:n.DST_ALPHA,[Bf]:n.ONE_MINUS_SRC_COLOR,[Pu]:n.ONE_MINUS_SRC_ALPHA,[zf]:n.ONE_MINUS_DST_COLOR,[kf]:n.ONE_MINUS_DST_ALPHA,[Gf]:n.CONSTANT_COLOR,[Vf]:n.ONE_MINUS_CONSTANT_COLOR,[Wf]:n.CONSTANT_ALPHA,[Xf]:n.ONE_MINUS_CONSTANT_ALPHA};function K(k,Pe,de,Ie,Fe,_e,Ke,Xe,Nt,Rt){if(k===jt){g===!0&&(ee(n.BLEND),g=!1);return}if(g===!1&&(N(n.BLEND),g=!0),k!==_c){if(k!==p||Rt!==C){if((v!==oi||w!==oi)&&(n.blendEquation(n.FUNC_ADD),v=oi,w=oi),Rt)switch(k){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",k);break}else switch(k){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Au:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",k);break}T=null,_=null,E=null,A=null,M.set(0,0,0),b=0,p=k,C=Rt}return}Fe=Fe||Pe,_e=_e||de,Ke=Ke||Ie,(Pe!==v||Fe!==w)&&(n.blendEquationSeparate(he[Pe],he[Fe]),v=Pe,w=Fe),(de!==T||Ie!==_||_e!==E||Ke!==A)&&(n.blendFuncSeparate(q[de],q[Ie],q[_e],q[Ke]),T=de,_=Ie,E=_e,A=Ke),(Xe.equals(M)===!1||Nt!==b)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Nt),M.copy(Xe),b=Nt),p=k,C=!1}function V(k,Pe){k.side===Kt?ee(n.CULL_FACE):N(n.CULL_FACE);let de=k.side===rn;Pe&&(de=!de),te(de),k.blending===ca&&k.transparent===!1?K(jt):K(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ie=k.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){P!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),P=k)}function oe(k){k!==Cf?(N(n.CULL_FACE),k!==F&&(k===Eu?n.cullFace(n.BACK):k===Pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),F=k}function xe(k){k!==B&&(J&&n.lineWidth(k),B=k)}function ye(k,Pe,de){k?(N(n.POLYGON_OFFSET_FILL),(D!==Pe||z!==de)&&(D=Pe,z=de,a.getReversed()&&(Pe=-Pe),n.polygonOffset(Pe,de))):ee(n.POLYGON_OFFSET_FILL)}function Ue(k){k?N(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function We(k){k===void 0&&(k=n.TEXTURE0+W-1),Z!==k&&(n.activeTexture(k),Z=k)}function L(k,Pe,de){de===void 0&&(Z===null?de=n.TEXTURE0+W-1:de=Z);let Ie=se[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},se[de]=Ie),(Ie.type!==k||Ie.texture!==Pe)&&(Z!==de&&(n.activeTexture(de),Z=de),n.bindTexture(k,Pe||I[k]),Ie.type=k,Ie.texture=Pe)}function ot(){let k=se[Z];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function y(){try{n.texSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function H(){try{n.texSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Se(){try{n.texStorage2D(...arguments)}catch(k){et("WebGLState:",k)}}function we(){try{n.texStorage3D(...arguments)}catch(k){et("WebGLState:",k)}}function ae(){try{n.texImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function fe(){try{n.texImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Re(k){return u[k]!==void 0?u[k]:n.getParameter(k)}function Ye(k,Pe){u[k]!==Pe&&(n.pixelStorei(k,Pe),u[k]=Pe)}function Te(k){j.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),j.copy(k))}function Ee(k){ne.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function He(k,Pe){let de=c.get(Pe);de===void 0&&(de=new WeakMap,c.set(Pe,de));let Ie=de.get(k);Ie===void 0&&(Ie=n.getUniformBlockIndex(Pe,k.name),de.set(k,Ie))}function Ze(k,Pe){let Ie=c.get(Pe).get(k);l.get(Pe)!==Ie&&(n.uniformBlockBinding(Pe,Ie,k.__bindingPointIndex),l.set(Pe,Ie))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,se={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,T=null,_=null,w=null,E=null,A=null,M=new qe(0,0,0),b=0,C=!1,P=null,F=null,B=null,D=null,z=null,j.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:ee,bindFramebuffer:ue,drawBuffers:ce,useProgram:me,setBlending:K,setMaterial:V,setFlipSided:te,setCullFace:oe,setLineWidth:xe,setPolygonOffset:ye,setScissorTest:Ue,activeTexture:We,bindTexture:L,unbindTexture:ot,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:ae,texImage3D:fe,pixelStorei:Ye,getParameter:Re,updateUBOMapping:He,uniformBlockBinding:Ze,texStorage2D:Se,texStorage3D:we,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:ie,scissor:Te,viewport:Ee,reset:it}}function jy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,y){return m?new OffscreenCanvas(R,y):qa("canvas")}function g(R,y,H){let X=1,ie=rt(R);if((ie.width>H||ie.height>H)&&(X=H/Math.max(ie.width,ie.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Se=Math.floor(X*ie.width),we=Math.floor(X*ie.height);d===void 0&&(d=x(Se,we));let ae=y?x(Se,we):d;return ae.width=Se,ae.height=we,ae.getContext("2d").drawImage(R,0,0,Se,we),Qe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Se+"x"+we+")."),ae}else return"data"in R&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,y,H,X,ie,Se=!1){if(R!==null){if(n[R]!==void 0)return n[R];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let we;X&&(we=e.get("EXT_texture_norm16"),we||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=y;if(y===n.RED&&(H===n.FLOAT&&(ae=n.R32F),H===n.HALF_FLOAT&&(ae=n.R16F),H===n.UNSIGNED_BYTE&&(ae=n.R8),H===n.UNSIGNED_SHORT&&we&&(ae=we.R16_EXT),H===n.SHORT&&we&&(ae=we.R16_SNORM_EXT)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ae=n.R8UI),H===n.UNSIGNED_SHORT&&(ae=n.R16UI),H===n.UNSIGNED_INT&&(ae=n.R32UI),H===n.BYTE&&(ae=n.R8I),H===n.SHORT&&(ae=n.R16I),H===n.INT&&(ae=n.R32I)),y===n.RG&&(H===n.FLOAT&&(ae=n.RG32F),H===n.HALF_FLOAT&&(ae=n.RG16F),H===n.UNSIGNED_BYTE&&(ae=n.RG8),H===n.UNSIGNED_SHORT&&we&&(ae=we.RG16_EXT),H===n.SHORT&&we&&(ae=we.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ae=n.RG8UI),H===n.UNSIGNED_SHORT&&(ae=n.RG16UI),H===n.UNSIGNED_INT&&(ae=n.RG32UI),H===n.BYTE&&(ae=n.RG8I),H===n.SHORT&&(ae=n.RG16I),H===n.INT&&(ae=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),H===n.UNSIGNED_INT&&(ae=n.RGB32UI),H===n.BYTE&&(ae=n.RGB8I),H===n.SHORT&&(ae=n.RGB16I),H===n.INT&&(ae=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),H===n.UNSIGNED_INT&&(ae=n.RGBA32UI),H===n.BYTE&&(ae=n.RGBA8I),H===n.SHORT&&(ae=n.RGBA16I),H===n.INT&&(ae=n.RGBA32I)),y===n.RGB&&(H===n.UNSIGNED_SHORT&&we&&(ae=we.RGB16_EXT),H===n.SHORT&&we&&(ae=we.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),y===n.RGBA){let fe=Se?Xa:xt.getTransfer(ie);H===n.FLOAT&&(ae=n.RGBA32F),H===n.HALF_FLOAT&&(ae=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ae=fe===At?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&we&&(ae=we.RGBA16_EXT),H===n.SHORT&&we&&(ae=we.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function w(R,y){let H;return R?y===null||y===Ti||y===Ys?H=n.DEPTH24_STENCIL8:y===Ai?H=n.DEPTH32F_STENCIL8:y===ha&&(H=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===Ys?H=n.DEPTH_COMPONENT24:y===Ai?H=n.DEPTH_COMPONENT32F:y===ha&&(H=n.DEPTH_COMPONENT16),H}function E(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==gn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function M(R){let y=R.target;y.removeEventListener("dispose",M),P(y)}function b(R){let y=i.get(R);if(y.__webglInit===void 0)return;let H=R.source,X=f.get(H);if(X){let ie=X[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(R),Object.keys(X).length===0&&f.delete(H)}i.remove(R)}function C(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let H=R.source,X=f.get(H);delete X[y.__cacheKey],a.memory.textures--}function P(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let ie=0;ie<y.__webglFramebuffer[X].length;ie++)n.deleteFramebuffer(y.__webglFramebuffer[X][ie]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=R.textures;for(let X=0,ie=H.length;X<ie;X++){let Se=i.get(H[X]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(H[X])}i.remove(R)}let F=0;function B(){F=0}function D(){return F}function z(R){F=R}function W(){let R=F;return R>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function J(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function le(R,y){let H=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let X=R.image;if(X===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(H,R,y);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function G(R,y){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ee(H,R,y);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function Z(R,y){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ee(H,R,y);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function se(R,y){let H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){ue(H,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}let Me={[An]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[Gl]:n.MIRRORED_REPEAT},be={[Jt]:n.NEAREST,[$f]:n.NEAREST_MIPMAP_NEAREST,[wo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Mc]:n.LINEAR_MIPMAP_NEAREST,[qs]:n.LINEAR_MIPMAP_LINEAR},j={[jf]:n.NEVER,[ip]:n.ALWAYS,[Qf]:n.LESS,[sh]:n.LEQUAL,[ep]:n.EQUAL,[rh]:n.GEQUAL,[tp]:n.GREATER,[np]:n.NOTEQUAL};function ne(R,y){if(y.type===Ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===gn||y.magFilter===Mc||y.magFilter===wo||y.magFilter===qs||y.minFilter===gn||y.minFilter===Mc||y.minFilter===wo||y.minFilter===qs)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Me[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Me[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Me[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,be[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,j[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==wo&&y.minFilter!==qs||y.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function re(R,y){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let X=y.source,ie=f.get(X);ie===void 0&&(ie={},f.set(X,ie));let Se=J(y);if(Se!==R.__cacheKey){ie[Se]===void 0&&(ie[Se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[Se].usedTimes++;let we=ie[R.__cacheKey];we!==void 0&&(ie[R.__cacheKey].usedTimes--,we.usedTimes===0&&C(y)),R.__cacheKey=Se,R.__webglTexture=ie[Se].texture}return H}function I(R,y,H){return Math.floor(Math.floor(R/H)/y)}function N(R,y,H,X){let Se=R.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,H,X,y.data);else{Se.sort((Ye,Te)=>Ye.start-Te.start);let we=0;for(let Ye=1;Ye<Se.length;Ye++){let Te=Se[we],Ee=Se[Ye],He=Te.start+Te.count,Ze=I(Ee.start,y.width,4),it=I(Te.start,y.width,4);Ee.start<=He+1&&Ze===it&&I(Ee.start+Ee.count-1,y.width,4)===Ze?Te.count=Math.max(Te.count,Ee.start+Ee.count-Te.start):(++we,Se[we]=Ee)}Se.length=we+1;let ae=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ye=0,Te=Se.length;Ye<Te;Ye++){let Ee=Se[Ye],He=Math.floor(Ee.start/4),Ze=Math.ceil(Ee.count/4),it=He%y.width,k=Math.floor(He/y.width),Pe=Ze,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,it),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,it,k,Pe,de,H,X,y.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function ee(R,y,H){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);let ie=re(R,y),Se=y.source;t.bindTexture(X,R.__webglTexture,n.TEXTURE0+H);let we=i.get(Se);if(Se.version!==we.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let de=xt.getPrimaries(xt.workingColorSpace),Ie=y.colorSpace===_s?null:xt.getPrimaries(y.colorSpace),Fe=y.colorSpace===_s||de===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let fe=g(y.image,!1,s.maxTextureSize);fe=ot(y,fe);let Re=r.convert(y.format,y.colorSpace),Ye=r.convert(y.type),Te=_(y.internalFormat,Re,Ye,y.normalized,y.colorSpace,y.isVideoTexture);ne(X,y);let Ee,He=y.mipmaps,Ze=y.isVideoTexture!==!0,it=we.__version===void 0||ie===!0,k=Se.dataReady,Pe=E(y,fe);if(y.isDepthTexture)Te=w(y.format===Zi,y.type),it&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Te,fe.width,fe.height,0,Re,Ye,null));else if(y.isDataTexture)if(He.length>0){Ze&&it&&t.texStorage2D(n.TEXTURE_2D,Pe,Te,He[0].width,He[0].height);for(let de=0,Ie=He.length;de<Ie;de++)Ee=He[de],Ze?k&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Re,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,de,Te,Ee.width,Ee.height,0,Re,Ye,Ee.data);y.generateMipmaps=!1}else Ze?(it&&t.texStorage2D(n.TEXTURE_2D,Pe,Te,fe.width,fe.height),k&&N(y,fe,Re,Ye)):t.texImage2D(n.TEXTURE_2D,0,Te,fe.width,fe.height,0,Re,Ye,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Te,He[0].width,He[0].height,fe.depth);for(let de=0,Ie=He.length;de<Ie;de++)if(Ee=He[de],y.format!==Bn)if(Re!==null)if(Ze){if(k)if(y.layerUpdates.size>0){let Fe=qu(Ee.width,Ee.height,y.format,y.type);for(let _e of y.layerUpdates){let Ke=Ee.data.subarray(_e*Fe/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Fe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,_e,Ee.width,Ee.height,1,Re,Ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,fe.depth,Re,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Te,Ee.width,Ee.height,fe.depth,0,Ee.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,fe.depth,Re,Ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Te,Ee.width,Ee.height,fe.depth,0,Re,Ye,Ee.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ze&&it&&t.texStorage2D(n.TEXTURE_2D,Pe,Te,He[0].width,He[0].height);for(let de=0,Ie=He.length;de<Ie;de++)Ee=He[de],y.format!==Bn?Re!==null?Ze?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Te,Ee.width,Ee.height,0,Ee.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?k&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Re,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,de,Te,Ee.width,Ee.height,0,Re,Ye,Ee.data)}else if(y.isDataArrayTexture)if(Ze){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Te,fe.width,fe.height,fe.depth),k)if(y.layerUpdates.size>0){let de=qu(fe.width,fe.height,y.format,y.type);for(let Ie of y.layerUpdates){let Fe=fe.data.subarray(Ie*de/fe.data.BYTES_PER_ELEMENT,(Ie+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,fe.width,fe.height,1,Re,Ye,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ye,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,Re,Ye,fe.data);else if(y.isData3DTexture)Ze?(it&&t.texStorage3D(n.TEXTURE_3D,Pe,Te,fe.width,fe.height,fe.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ye,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,Re,Ye,fe.data);else if(y.isFramebufferTexture){if(it)if(Ze)t.texStorage2D(n.TEXTURE_2D,Pe,Te,fe.width,fe.height);else{let de=fe.width,Ie=fe.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Te,de,Ie,0,Re,Ye,null),de>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),fe.parentNode!==de){de.appendChild(fe),u.add(y),de.onpaint=Ie=>{let Fe=Ie.changedElements;for(let _e of u)Fe.includes(_e.image)&&(_e.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,fe);else{let Fe=n.RGBA,_e=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Fe,_e,Ke,fe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(Ze&&it){let de=rt(He[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Te,de.width,de.height)}for(let de=0,Ie=He.length;de<Ie;de++)Ee=He[de],Ze?k&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Re,Ye,Ee):t.texImage2D(n.TEXTURE_2D,de,Te,Re,Ye,Ee);y.generateMipmaps=!1}else if(Ze){if(it){let de=rt(fe);t.texStorage2D(n.TEXTURE_2D,Pe,Te,de.width,de.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ye,fe)}else t.texImage2D(n.TEXTURE_2D,0,Te,Re,Ye,fe);p(y)&&v(X),we.__version=Se.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ue(R,y,H){if(y.image.length!==6)return;let X=re(R,y),ie=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let Se=i.get(ie);if(ie.version!==Se.__version||X===!0){t.activeTexture(n.TEXTURE0+H);let we=xt.getPrimaries(xt.workingColorSpace),ae=y.colorSpace===_s?null:xt.getPrimaries(y.colorSpace),fe=y.colorSpace===_s||we===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Re=y.isCompressedTexture||y.image[0].isCompressedTexture,Ye=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!Re&&!Ye?Te[_e]=g(y.image[_e],!0,s.maxCubemapSize):Te[_e]=Ye?y.image[_e].image:y.image[_e],Te[_e]=ot(y,Te[_e]);let Ee=Te[0],He=r.convert(y.format,y.colorSpace),Ze=r.convert(y.type),it=_(y.internalFormat,He,Ze,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Pe=Se.__version===void 0||X===!0,de=ie.dataReady,Ie=E(y,Ee);ne(n.TEXTURE_CUBE_MAP,y);let Fe;if(Re){k&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,it,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Fe=Te[_e].mipmaps;for(let Ke=0;Ke<Fe.length;Ke++){let Xe=Fe[Ke];y.format!==Bn?He!==null?k?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke,0,0,Xe.width,Xe.height,He,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke,it,Xe.width,Xe.height,0,Xe.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke,0,0,Xe.width,Xe.height,He,Ze,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke,it,Xe.width,Xe.height,0,He,Ze,Xe.data)}}}else{if(Fe=y.mipmaps,k&&Pe){Fe.length>0&&Ie++;let _e=rt(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ye){k?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,He,Ze,Te[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Te[_e].width,Te[_e].height,0,He,Ze,Te[_e].data);for(let Ke=0;Ke<Fe.length;Ke++){let Nt=Fe[Ke].image[_e].image;k?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke+1,0,0,Nt.width,Nt.height,He,Ze,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke+1,it,Nt.width,Nt.height,0,He,Ze,Nt.data)}}else{k?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,He,Ze,Te[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,He,Ze,Te[_e]);for(let Ke=0;Ke<Fe.length;Ke++){let Xe=Fe[Ke];k?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke+1,0,0,He,Ze,Xe.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ke+1,it,He,Ze,Xe.image[_e])}}}p(y)&&v(n.TEXTURE_CUBE_MAP),Se.__version=ie.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ce(R,y,H,X,ie,Se){let we=r.convert(H.format,H.colorSpace),ae=r.convert(H.type),fe=_(H.internalFormat,we,ae,H.normalized,H.colorSpace),Re=i.get(y),Ye=i.get(H);if(Ye.__renderTarget=y,!Re.__hasExternalTextures){let Te=Math.max(1,y.width>>Se),Ee=Math.max(1,y.height>>Se);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Se,fe,Te,Ee,y.depth,0,we,ae,null):t.texImage2D(ie,Se,fe,Te,Ee,0,we,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ie,Ye.__webglTexture,0,Ue(y)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ie,Ye.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(R,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let X=y.depthTexture,ie=X&&X.isDepthTexture?X.type:null,Se=w(y.stencilBuffer,ie),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;We(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(y),Se,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(y),Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,R)}else{let X=y.textures;for(let ie=0;ie<X.length;ie++){let Se=X[ie],we=r.convert(Se.format,Se.colorSpace),ae=r.convert(Se.type),fe=_(Se.internalFormat,we,ae,Se.normalized,Se.colorSpace);We(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(y),fe,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(y),fe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,fe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(R,y,H){let X=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(y.depthTexture);if(ie.__renderTarget=y,(!ie.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ne(n.TEXTURE_CUBE_MAP,y.depthTexture);let Re=r.convert(y.depthTexture.format),Ye=r.convert(y.depthTexture.type),Te;y.depthTexture.format===Gi?Te=n.DEPTH_COMPONENT24:y.depthTexture.format===Zi&&(Te=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,y.width,y.height,0,Re,Ye,null)}}else le(y.depthTexture,0);let Se=ie.__webglTexture,we=Ue(y),ae=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,fe=y.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Gi)We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ae,Se,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ae,Se,0);else if(y.depthTexture.format===Zi)We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ae,Se,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ae,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(R){let y=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",ie)};X.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)he(y.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?he(y.__webglFramebuffer[0],R,0):he(y.__webglFramebuffer,R,0)}else if(H){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=n.createRenderbuffer(),me(y.__webglDepthbuffer[X],R,!1);else{let ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Se)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),me(y.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(R,y,H){let X=i.get(R);y!==void 0&&ce(X.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&q(R)}function V(R){let y=R.texture,H=i.get(R),X=i.get(y);R.addEventListener("dispose",M);let ie=R.textures,Se=R.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,a.memory.textures++),Se){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let fe=0;fe<y.mipmaps.length;fe++)H.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else H.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)H.__webglFramebuffer[ae]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(we)for(let ae=0,fe=ie.length;ae<fe;ae++){let Re=i.get(ie[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&We(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){let fe=ie[ae];H.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);let Re=r.convert(fe.format,fe.colorSpace),Ye=r.convert(fe.type),Te=_(fe.internalFormat,Re,Ye,fe.normalized,fe.colorSpace,R.isXRRenderTarget===!0),Ee=Ue(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),me(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ne(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)ce(H.__webglFramebuffer[ae][fe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ce(H.__webglFramebuffer[ae],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ae=0,fe=ie.length;ae<fe;ae++){let Re=ie[ae],Ye=i.get(Re),Te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ye.__webglTexture),ne(Te,Re),ce(H.__webglFramebuffer,R,Re,n.COLOR_ATTACHMENT0+ae,Te,0),p(Re)&&v(Te)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),ne(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)ce(H.__webglFramebuffer[fe],R,y,n.COLOR_ATTACHMENT0,ae,fe);else ce(H.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ae,0);p(y)&&v(ae),t.unbindTexture()}R.depthBuffer&&q(R)}function te(R){let y=R.textures;for(let H=0,X=y.length;H<X;H++){let ie=y[H];if(p(ie)){let Se=T(R),we=i.get(ie).__webglTexture;t.bindTexture(Se,we),v(Se),t.unbindTexture()}}}let oe=[],xe=[];function ye(R){if(R.samples>0){if(We(R)===!1){let y=R.textures,H=R.width,X=R.height,ie=n.COLOR_BUFFER_BIT,Se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(R),ae=y.length>1;if(ae)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let fe=R.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);let Ye=i.get(y[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,H,X,0,0,H,X,ie,n.NEAREST),l===!0&&(oe.length=0,xe.length=0,oe.push(n.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(oe.push(Se),xe.push(Se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);let Ye=i.get(y[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ue(R){return Math.min(s.maxSamples,R.samples)}function We(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ot(R,y){let H=R.colorSpace,X=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Wa&&H!==_s&&(xt.getTransfer(H)===At?(X!==Bn||ie!==Rn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",H)),y}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=le,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=se,this.rebindTextures=K,this.setupRenderTarget=V,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qy(n,e){function t(i,s=_s){let r,a=xt.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Du)return n.BYTE;if(i===Nu)return n.SHORT;if(i===ha)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===tn)return n.HALF_FLOAT;if(i===Ou)return n.ALPHA;if(i===Bu)return n.RGB;if(i===Bn)return n.RGBA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===ku)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===$s)return n.RG;if(i===Tc)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===Eo||i===To||i===Ao||i===Ro)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Co||i===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lc||i===Dc)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uc)return r.COMPRESSED_R11_EAC;if(i===Fc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Co)return r.COMPRESSED_RG11_EAC;if(i===Oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bc||i===kc||i===zc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Jc||i===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$c)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Qc||i===eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jc)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===th||i===nh||i===Po||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===th)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
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

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Yt({vertexShader:e1,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dd=class extends Vi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new ud,p={},v=t.getContextAttributes(),T=null,_=null,w=[],E=[],A=new ve,M=null,b=null,C=new hn;C.viewport=new Gt;let P=new hn;P.viewport=new Gt;let F=[C,P],B=new gc,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=w[I];return N===void 0&&(N=new ta,w[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=w[I];return N===void 0&&(N=new ta,w[I]=N),N.getGripSpace()},this.getHand=function(I){let N=w[I];return N===void 0&&(N=new ta,w[I]=N),N.getHandSpace()};function W(I){let N=E.indexOf(I.inputSource);if(N===-1)return;let ee=w[N];ee!==void 0&&(ee.update(I.inputSource,I.frame,c||a),ee.dispatchEvent({type:I.type,data:I.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",le);for(let I=0;I<w.length;I++){let N=E[I];N!==null&&(E[I]=null,w[I].disconnect(N))}D=null,z=null,g.reset();for(let I in p)delete p[I];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,_=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),b!==null){let I=b.camera;I.fov=b.fov,I.zoom=b.zoom,I.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,ue=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Zi:Gi,ue=v.stencil?Ys:Ti);let me={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Xt(d.textureWidth,d.textureHeight,{format:Bn,type:Rn,depthTexture:new qi(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xt(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function le(I){for(let N=0;N<I.removed.length;N++){let ee=I.removed[N],ue=E.indexOf(ee);ue>=0&&(E[ue]=null,w[ue].disconnect(ee))}for(let N=0;N<I.added.length;N++){let ee=I.added[N],ue=E.indexOf(ee);if(ue===-1){for(let me=0;me<w.length;me++)if(me>=E.length){E.push(ee),ue=me;break}else if(E[me]===null){E[me]=ee,ue=me;break}if(ue===-1)break}let ce=w[ue];ce&&ce.connect(ee)}}let G=new U,Z=new U;function se(I,N,ee){G.setFromMatrixPosition(N.matrixWorld),Z.setFromMatrixPosition(ee.matrixWorld);let ue=G.distanceTo(Z),ce=N.projectionMatrix.elements,me=ee.projectionMatrix.elements,he=ce[14]/(ce[10]-1),q=ce[14]/(ce[10]+1),K=(ce[9]+1)/ce[5],V=(ce[9]-1)/ce[5],te=(ce[8]-1)/ce[0],oe=(me[8]+1)/me[0],xe=he*te,ye=he*oe,Ue=ue/(-te+oe),We=Ue*-te;if(N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(We),I.translateZ(Ue),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ce[10]===-1)I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let L=he+Ue,ot=q+Ue,rt=xe-We,R=ye+(ue-We),y=K*q/ot*L,H=V*q/ot*L;I.projectionMatrix.makePerspective(rt,R,y,H,L,ot),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Me(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let N=I.near,ee=I.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),B.near=P.near=C.near=N,B.far=P.far=C.far=ee,(D!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,z=B.far),B.layers.mask=I.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let ue=I.parent,ce=B.cameras;Me(B,ue);for(let me=0;me<ce.length;me++)Me(ce[me],ue);ce.length===2?se(B,C,P):B.projectionMatrix.copy(C.projectionMatrix),b===null&&I.isPerspectiveCamera&&(b={camera:I,fov:I.fov,zoom:I.zoom}),be(I,B,ue)};function be(I,N,ee){ee===null?I.matrix.copy(N.matrixWorld):(I.matrix.copy(ee.matrixWorld),I.matrix.invert(),I.matrix.multiply(N.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Wl*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(I){return p[I]};let j=null;function ne(I,N){if(h=N.getViewerPose(c||a),m=N,h!==null){let ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;ee.length!==B.cameras.length&&(B.cameras.length=0,ue=!0);for(let q=0;q<ee.length;q++){let K=ee[q],V=null;if(f!==null)V=f.getViewport(K);else{let oe=u.getViewSubImage(d,K);V=oe.viewport,q===0&&(e.setRenderTargetTextures(_,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(_))}let te=F[q];te===void 0&&(te=new hn,te.layers.enable(q),te.viewport=new Gt,F[q]=te),te.matrix.fromArray(K.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(K.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(V.x,V.y,V.width,V.height),q===0&&(B.matrix.copy(te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ue===!0&&B.cameras.push(te)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let q=u.getDepthInformation(ee[0]);q&&q.isValid&&q.texture&&g.init(q,s.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let q=0;q<ee.length;q++){let K=ee[q].camera;if(K){let V=p[K];V||(V=new ja,p[K]=V);let te=u.getCameraImage(K);V.sourceTexture=te}}}}for(let ee=0;ee<w.length;ee++){let ue=E[ee],ce=w[ee];ue!==null&&ce!==void 0&&ce.update(ue,N,c||a)}j&&j(I,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),m=null}let re=new Op;re.setAnimationLoop(ne),this.setAnimationLoop=function(I){j=I},this.dispose=function(){}}},n1=new wt,Vp=new at;Vp.set(-1,0,0,0,1,0,0,0,1);function i1(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Vu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),T=v.envMap,_=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(n1.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function s1(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let E=w.program;i.uniformBlockBinding(_,E)}function c(_,w){let E=s[_.id];E===void 0&&(g(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",v));let A=w.program;i.updateUBOMapping(_,A);let M=e.render.frame;r[_.id]!==M&&(d(_),r[_.id]=M)}function h(_){let w=u();_.__bindingPointIndex=w;let E=n.createBuffer(),A=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=s[_.id],E=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let M=0,b=E.length;M<b;M++){let C=E[M];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)f(C[P],M,P,A);else f(C,M,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,w,E,A){if(x(_,w,E,A)===!0){let M=_.__offset,b=_.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){let F=b[P],B=p(F);m(F,_.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,_.__data)}}function m(_,w,E){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,E)}function x(_,w,E,A){let M=_.value,b=w+"_"+E;if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let C=A[b];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(_){let w=_.uniforms,E=0,A=16;for(let b=0,C=w.length;b<C;b++){let P=Array.isArray(w[b])?w[b]:[w[b]];for(let F=0,B=P.length;F<B;F++){let D=P[F],z=Array.isArray(D.value)?D.value:[D.value];for(let W=0,J=z.length;W<J;W++){let le=z[W],G=p(le),Z=E%A,se=Z%G.boundary,Me=Z+se;E+=se,Me!==0&&A-Me<G.storage&&(E+=A-Me),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=G.storage}}}let M=E%A;return M>0&&(E+=A-M),_.__size=E,_.__cache={},this}function p(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",_),w}function v(_){let w=_.target;w.removeEventListener("dispose",v);let E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var r1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function a1(){return Ji===null&&(Ji=new Os(r1,16,16,$s,tn),Ji.name="DFG_LUT",Ji.minFilter=gn,Ji.magFilter=gn,Ji.wrapS=Hi,Ji.wrapT=Hi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var ma=class{constructor(e={}){let{canvas:t=rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=f,g=new Set([Ac,Tc,Ec]),p=new Set([Rn,Ti,ha,Ys,Sc,wc]),v=new Uint32Array(4),T=new Int32Array(4),_=new U,w=null,E=null,A=[],M=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,B=null,D=null,z=null;this._outputColorSpace=Vt;let W=0,J=0,le=null,G=-1,Z=null,se=new Gt,Me=new Gt,be=null,j=new qe(0),ne=0,re=t.width,I=t.height,N=1,ee=null,ue=null,ce=new Gt(0,0,re,I),me=new Gt(0,0,re,I),he=!1,q=new ia,K=!1,V=!1,te=new wt,oe=new U,xe=new Gt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function We(){return le===null?N:1}let L=i;function ot(S,O){return t.getContext(S,O)}let rt,R,y,H,X,ie,Se,we,ae,fe,Re,Ye,Te,Ee,He,Ze,it,k,Pe,de,Ie,Fe,_e;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",xi,!1),L===null){let O="webgl2";if(L=ot(O,S),L===null)throw ot(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(S){throw t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",xi,!1),et("WebGLRenderer: "+S.message),S}function Ke(){rt=new fv(L),rt.init(),Ie=new Qy(L,rt),R=new iv(L,rt,e,Ie),y=new Ky(L,rt),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),B=L.createFramebuffer(),D=L.createFramebuffer(),z=L.createFramebuffer(),H=new gv(L),X=new Oy,ie=new jy(L,rt,y,X,R,Ie,H),Se=new dv(C),we=new _g(L),Fe=new tv(L,we),ae=new pv(L,we,H,Fe),fe=new _v(L,ae,we,Fe,H),k=new xv(L,R,ie),He=new sv(X),Re=new Fy(C,Se,rt,R,Fe,He),Ye=new i1(C,X),Te=new ky,Ee=new Xy(rt),it=new ev(C,Se,y,fe,m,l),Ze=new Jy(C,fe,R),_e=new s1(L,H,R,y),Pe=new nv(L,rt,H),de=new mv(L,rt,H),H.programs=Re.programs,C.capabilities=R,C.extensions=rt,C.properties=X,C.renderLists=Te,C.shadowMap=Ze,C.state=y,C.info=H}x!==Rn&&(b=new yv(x,t.width,t.height,o,s,r));let Xe=new dd(C,L);this.xr=Xe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(S){S!==void 0&&(N=S,this.setSize(re,I,!1))},this.getSize=function(S){return S.set(re,I)},this.setSize=function(S,O,Q=!0){if(Xe.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,I=O,t.width=Math.floor(S*N),t.height=Math.floor(O*N),Q===!0&&(t.style.width=S+"px",t.style.height=O+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(re*N,I*N).floor()},this.setDrawingBufferSize=function(S,O,Q){re=S,I=O,N=Q,t.width=Math.floor(S*Q),t.height=Math.floor(O*Q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(x===Rn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,O,Q,Y){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,O,Q,Y),y.viewport(se.copy(ce).multiplyScalar(N).round())},this.getScissor=function(S){return S.copy(me)},this.setScissor=function(S,O,Q,Y){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,O,Q,Y),y.scissor(Me.copy(me).multiplyScalar(N).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){y.setScissorTest(he=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,Q=!0){let Y=0;if(S){let $=!1;if(le!==null){let Ne=le.texture.format;$=g.has(Ne)}if($){let Ne=le.texture.type,ke=p.has(Ne),De=it.getClearColor(),Ge=it.getClearAlpha(),$e=De.r,pt=De.g,_t=De.b;ke?(v[0]=$e,v[1]=pt,v[2]=_t,v[3]=Ge,L.clearBufferuiv(L.COLOR,0,v)):(T[0]=$e,T[1]=pt,T[2]=_t,T[3]=Ge,L.clearBufferiv(L.COLOR,0,T))}else Y|=L.COLOR_BUFFER_BIT}O&&(Y|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",xi,!1),it.dispose(),Te.dispose(),Ee.dispose(),X.dispose(),Se.dispose(),fe.dispose(),Fe.dispose(),_e.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Gd),Xe.removeEventListener("sessionend",Vd),ir.stop()};function Nt(S){S.preventDefault(),Hu("WebGLRenderer: Context Lost."),P=!0}function Rt(){Hu("WebGLRenderer: Context Restored."),P=!1;let S=H.autoReset,O=Ze.enabled,Q=Ze.autoUpdate,Y=Ze.needsUpdate,$=Ze.type;Ke(),H.autoReset=S,Ze.enabled=O,Ze.autoUpdate=Q,Ze.needsUpdate=Y,Ze.type=$}function xi(S){et("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Bi(S){let O=S.target;O.removeEventListener("dispose",Bi),$0(O)}function $0(S){Z0(S),X.remove(S)}function Z0(S){let O=X.get(S).programs;O!==void 0&&(O.forEach(function(Q){Re.releaseProgram(Q)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Q,Y,$,Ne){O===null&&(O=ye);let ke=$.isMesh&&$.matrixWorld.determinantAffine()<0,De=j0(S,O,Q,Y,$);y.setMaterial(Y,ke);let Ge=Q.index,$e=1;if(Y.wireframe===!0){if(Ge=ae.getWireframeAttribute(Q),Ge===void 0)return;$e=2}let pt=Q.drawRange,_t=Q.attributes.position,Ve=pt.start*$e,Ct=(pt.start+pt.count)*$e;Ne!==null&&(Ve=Math.max(Ve,Ne.start*$e),Ct=Math.min(Ct,(Ne.start+Ne.count)*$e)),Ge!==null?(Ve=Math.max(Ve,0),Ct=Math.min(Ct,Ge.count)):_t!=null&&(Ve=Math.max(Ve,0),Ct=Math.min(Ct,_t.count));let Qt=Ct-Ve;if(Qt<0||Qt===1/0)return;Fe.setup($,Y,De,Q,Ge);let Bt,Dt=Pe;if(Ge!==null&&(Bt=we.get(Ge),Dt=de,Dt.setIndex(Bt)),$.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*We()),Dt.setMode(L.LINES)):Dt.setMode(L.TRIANGLES);else if($.isLine){let wn=Y.linewidth;wn===void 0&&(wn=1),y.setLineWidth(wn*We()),$.isLineSegments?Dt.setMode(L.LINES):$.isLineLoop?Dt.setMode(L.LINE_LOOP):Dt.setMode(L.LINE_STRIP)}else $.isPoints?Dt.setMode(L.POINTS):$.isSprite&&Dt.setMode(L.TRIANGLES);if($.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let wn=$._multiDrawStarts,Be=$._multiDrawCounts,Pn=$._multiDrawCount,Tt=Ge?we.get(Ge).bytesPerElement:1,si=X.get(Y).currentProgram.getUniforms();for(let ki=0;ki<Pn;ki++)si.setValue(L,"_gl_DrawID",ki),Dt.render(wn[ki]/Tt,Be[ki])}else if($.isInstancedMesh)Dt.renderInstances(Ve,Qt,$.count);else if(Q.isInstancedBufferGeometry){let wn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Be=Math.min(Q.instanceCount,wn);Dt.renderInstances(Ve,Qt,Be)}else Dt.render(Ve,Qt)};function Hd(S,O,Q,Y){F!==null&&S.isNodeMaterial&&F.setObject(Y,S),K===!0&&He.setState(S,Q,!1),S.transparent===!0&&S.side===Kt&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,cl(S,O,Y),S.side=Ws,S.needsUpdate=!0,cl(S,O,Y),S.side=Kt):cl(S,O,Y)}this.compile=function(S,O,Q=null){Q===null&&(Q=S),F!==null&&F.renderStart(S,O,Q),E=Ee.get(Q),E.init(O),M.push(E),Q.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),S!==Q&&S.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),V=this.localClippingEnabled,K=He.init(this.clippingPlanes,V),K===!0&&He.setGlobalState(this.clippingPlanes,O),F!==null&&Ze.render(E.state.shadowsArray,Q,O);let Y=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ne=$.material;if(Ne)if(Array.isArray(Ne))for(let ke=0;ke<Ne.length;ke++){let De=Ne[ke];Hd(De,Q,O,$),Y.add(De)}else Hd(Ne,Q,O,$),Y.add(Ne)}),E=M.pop(),F!==null&&F.renderEnd(),Y},this.compileAsync=function(S,O,Q=null){let Y=this.compile(S,O,Q);return new Promise($=>{function Ne(){if(Y.forEach(function(ke){let Ge=X.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&Y.delete(ke)}),Y.size===0){$(S);return}setTimeout(Ne,10)}rt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let kh=null;function J0(S){kh&&kh(S)}function Gd(){ir.stop()}function Vd(){ir.start()}let ir=new Op;ir.setAnimationLoop(J0),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(S){kh=S,Xe.setAnimationLoop(S),S===null?ir.stop():ir.start()},Xe.addEventListener("sessionstart",Gd),Xe.addEventListener("sessionend",Vd),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(S,O);let Q=Xe.enabled===!0&&Xe.isPresenting===!0,Y=b!==null&&(le===null||Q)&&b.begin(C,le);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(O),O=Xe.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,O,le),E=Ee.get(S,M.length),E.init(O),E.state.textureUnits=ie.getTextureUnits(),M.push(E),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(te,bi,O.reversedDepth),V=this.localClippingEnabled,K=He.init(this.clippingPlanes,V),w=Te.get(S,A.length),w.init(),A.push(w),Xe.enabled===!0&&Xe.isPresenting===!0){let ke=C.xr.getDepthSensingMesh();ke!==null&&zh(ke,O,-1/0,C.sortObjects)}zh(S,O,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(ee,ue),Ue=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ue&&it.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&He.beginShadows();let $=E.state.shadowsArray;if(Ze.render($,S,O),K===!0&&He.endShadows(),(Y&&b.hasRenderPass())===!1){let ke=w.opaque,De=w.transmissive;if(E.setupLights(),O.isArrayCamera){let Ge=O.cameras;if(De.length>0)for(let $e=0,pt=Ge.length;$e<pt;$e++){let _t=Ge[$e];Xd(ke,De,S,_t)}Ue&&it.render(S);for(let $e=0,pt=Ge.length;$e<pt;$e++){let _t=Ge[$e];Wd(w,S,_t,_t.viewport)}}else De.length>0&&Xd(ke,De,S,O),Ue&&it.render(S),Wd(w,S,O)}le!==null&&J===0&&(ie.updateMultisampleRenderTarget(le),ie.updateRenderTargetMipmap(le)),Y&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,O),Fe.resetDefaultState(),G=-1,Z=null,M.pop(),M.length>0?(E=M[M.length-1],ie.setTextureUnits(E.state.textureUnits),K===!0&&He.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,F!==null&&F.renderEnd()};function zh(S,O,Q,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(q)){Y&&xe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(te);let ke=fe.update(S),De=S.material;De.visible&&w.push(S,ke,De,Q,xe.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(q))){let ke=fe.update(S),De=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),xe.copy(S.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),xe.copy(ke.boundingSphere.center)),xe.applyMatrix4(S.matrixWorld).applyMatrix4(te)),Array.isArray(De)){let Ge=ke.groups;for(let $e=0,pt=Ge.length;$e<pt;$e++){let _t=Ge[$e],Ve=De[_t.materialIndex];Ve&&Ve.visible&&w.push(S,ke,Ve,Q,xe.z,_t,O)}}else De.visible&&w.push(S,ke,De,Q,xe.z,null,O)}}let Ne=S.children;for(let ke=0,De=Ne.length;ke<De;ke++)zh(Ne[ke],O,Q,Y)}function Wd(S,O,Q,Y){let{opaque:$,transmissive:Ne,transparent:ke}=S;E.setupLightsView(Q),K===!0&&He.setGlobalState(C.clippingPlanes,Q),Y&&y.viewport(se.copy(Y)),$.length>0&&ll($,O,Q),Ne.length>0&&ll(Ne,O,Q),ke.length>0&&ll(ke,O,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Xd(S,O,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let Ve=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new Xt(1,1,{generateMipmaps:!0,type:Ve?tn:Rn,minFilter:qs,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Ne=E.state.transmissionRenderTarget[Y.id],ke=Y.viewport||se;Ne.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);let De=C.getRenderTarget(),Ge=C.getActiveCubeFace(),$e=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(j),ne=C.getClearAlpha(),ne<1&&C.setClearColor(16777215,.5),C.clear(),Ue&&it.render(Q);let pt=C.toneMapping;C.toneMapping=Ei;let _t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),K===!0&&He.setGlobalState(C.clippingPlanes,Y),ll(S,Q,Y),ie.updateMultisampleRenderTarget(Ne),ie.updateRenderTargetMipmap(Ne),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ct=0,Qt=O.length;Ct<Qt;Ct++){let Bt=O[Ct],{object:Dt,geometry:wn,material:Be,group:Pn}=Bt;if(Be.side===Kt&&Dt.layers.test(Y.layers)){let Tt=Be.side;Be.side=rn,Be.needsUpdate=!0,qd(Dt,Q,Y,wn,Be,Pn),Be.side=Tt,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(ie.updateMultisampleRenderTarget(Ne),ie.updateRenderTargetMipmap(Ne))}C.setRenderTarget(De,Ge,$e),C.setClearColor(j,ne),_t!==void 0&&(Y.viewport=_t),C.toneMapping=pt}function ll(S,O,Q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Ne=S.length;$<Ne;$++){let ke=S[$],{object:De,geometry:Ge,group:$e}=ke,pt=ke.material;pt.allowOverride===!0&&Y!==null&&(pt=Y),De.layers.test(Q.layers)&&qd(De,O,Q,Ge,pt,$e)}}function qd(S,O,Q,Y,$,Ne){F!==null&&$.isNodeMaterial&&F.setObject(S,$),S.onBeforeRender(C,O,Q,Y,$,Ne),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(C,O,Q,Y,S,Ne),$.transparent===!0&&$.side===Kt&&$.forceSinglePass===!1?($.side=rn,$.needsUpdate=!0,C.renderBufferDirect(Q,O,Y,$,S,Ne),$.side=Ws,$.needsUpdate=!0,C.renderBufferDirect(Q,O,Y,$,S,Ne),$.side=Kt):C.renderBufferDirect(Q,O,Y,$,S,Ne),S.onAfterRender(C,O,Q,Y,$,Ne)}function cl(S,O,Q){O.isScene!==!0&&(O=ye);let Y=X.get(S),$=E.state.lights,Ne=E.state.shadowsArray,ke=$.state.version,De=Re.getParameters(S,$.state,Ne,O,Q,E.state.lightProbeGridArray),Ge=Re.getProgramCacheKey(De),$e=Y.programs;Y.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let pt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Y.envMap=Se.get(S.envMap||Y.environment,pt),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,$e===void 0&&(S.addEventListener("dispose",Bi),$e=new Map,Y.programs=$e);let _t=$e.get(Ge);if(_t!==void 0){if(Y.currentProgram===_t&&Y.lightsStateVersion===ke)return $d(S,De),_t}else De.uniforms=Re.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,Q,De),S.onBeforeCompile(De,C),_t=Re.acquireProgram(De,Ge),$e.set(Ge,_t),Y.uniforms=De.uniforms;let Ve=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=He.uniform),$d(S,De),Y.needsLights=em(S),Y.lightsStateVersion=ke,Y.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.sunLights.value=$.state.sun,Ve.sunLightShadows.value=$.state.sunShadow,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.sunShadowMatrix.value=$.state.sunShadowMatrix,Ve.sunShadowCascade.value=$.state.sunShadowCascade,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=_t,Y.uniformsList=null,_t}function Yd(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=pa.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function $d(S,O){let Q=X.get(S);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.batchingColor=O.batchingColor,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.instancingMorph=O.instancingMorph,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function K0(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Q=0,Y=S.length;Q<Y;Q++){let $=S[Q];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function j0(S,O,Q,Y,$){O.isScene!==!0&&(O=ye),ie.resetTextureUnits();let Ne=O.fog,ke=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,De=le===null?C.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:xt.workingColorSpace,Ge=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,$e=Se.get(Y.envMap||ke,Ge),pt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,_t=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!Q.morphAttributes.position,Ct=!!Q.morphAttributes.normal,Qt=!!Q.morphAttributes.color,Bt=Ei;Y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Bt=C.toneMapping);let Dt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,wn=Dt!==void 0?Dt.length:0,Be=X.get(Y),Pn=E.state.lights;if(K===!0&&(V===!0||S!==Z)){let Ut=S===Z&&Y.id===G;He.setState(Y,S,Ut)}let Tt=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Pn.state.version||Be.outputColorSpace!==De||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isBatchedMesh&&Be.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Be.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==$e||Y.fog===!0&&Be.fog!==Ne||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==He.numPlanes||Be.numIntersection!==He.numIntersection)||Be.vertexAlphas!==pt||Be.vertexTangents!==_t||Be.morphTargets!==Ve||Be.morphNormals!==Ct||Be.morphColors!==Qt||Be.toneMapping!==Bt||Be.morphTargetsCount!==wn||!!Be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Be.__version=Y.version);let si=Be.currentProgram;Tt===!0&&(si=cl(Y,O,$),F&&Y.isNodeMaterial&&F.onUpdateProgram(Y,si,Be));let ki=!1,Rs=!1,Nr=!1,It=si.getUniforms(),Zt=Be.uniforms;if(y.useProgram(si.program)&&(ki=!0,Rs=!0,Nr=!0),Y.id!==G&&(G=Y.id,Rs=!0),Be.needsLights){let Ut=K0(E.state.lightProbeGridArray,$);Be.lightProbeGrid!==Ut&&(Be.lightProbeGrid=Ut,Rs=!0)}if(ki||Z!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),It.setValue(L,"projectionMatrix",S.projectionMatrix),It.setValue(L,"viewMatrix",S.matrixWorldInverse);let Ps=It.map.cameraPosition;Ps!==void 0&&Ps.setValue(L,oe.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&It.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),Z!==S&&(Z=S,Rs=!0,Nr=!0)}if(Be.needsLights&&(Pn.state.sunShadowMap.length>0&&It.setValue(L,"sunShadowMap",Pn.state.sunShadowMap,ie),Pn.state.directionalShadowMap.length>0&&It.setValue(L,"directionalShadowMap",Pn.state.directionalShadowMap,ie),Pn.state.spotShadowMap.length>0&&It.setValue(L,"spotShadowMap",Pn.state.spotShadowMap,ie),Pn.state.pointShadowMap.length>0&&It.setValue(L,"pointShadowMap",Pn.state.pointShadowMap,ie)),$.isSkinnedMesh){It.setOptional(L,$,"bindMatrix"),It.setOptional(L,$,"bindMatrixInverse");let Ut=$.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(L,"boneTexture",Ut.boneTexture,ie))}$.isBatchedMesh&&(It.setOptional(L,$,"batchingTexture"),It.setValue(L,"batchingTexture",$._matricesTexture,ie),It.setOptional(L,$,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",$._indirectTexture,ie),It.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",$._colorsTexture,ie));let Cs=Q.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&k.update($,Q,si),(Rs||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,It.setValue(L,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Zt.envMapIntensity.value=O.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=a1()),Rs){if(It.setValue(L,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&Q0(Zt,Nr),Ne&&Y.fog===!0&&Ye.refreshFogUniforms(Zt,Ne),Ye.refreshMaterialUniforms(Zt,Y,N,I,E.state.transmissionRenderTarget[S.id]),Be.needsLights&&Be.lightProbeGrid){let Ut=Be.lightProbeGrid;Zt.probesSH.value=Ut.texture,Zt.probesMin.value.copy(Ut.boundingBox.min),Zt.probesMax.value.copy(Ut.boundingBox.max),Zt.probesResolution.value.copy(Ut.resolution)}pa.upload(L,Yd(Be),Zt,ie)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(pa.upload(L,Yd(Be),Zt,ie),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&It.setValue(L,"center",$.center),It.setValue(L,"modelViewMatrix",$.modelViewMatrix),It.setValue(L,"normalMatrix",$.normalMatrix),It.setValue(L,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Ut=Y.uniformsGroups;for(let Ps=0,Ur=Ut.length;Ps<Ur;Ps++){let Jd=Ut[Ps];_e.update(Jd,si),_e.bind(Jd,si)}}return si}function Q0(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function em(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(S,O,Q){let Y=X.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=O,X.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let Q=X.get(S);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Q=0){le=S,W=O,J=Q;let Y=null,$=!1,Ne=!1;if(S){let De=X.get(S);if(De.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,De.__webglFramebuffer),se.copy(S.viewport),Me.copy(S.scissor),be=S.scissorTest,y.viewport(se),y.scissor(Me),y.setScissorTest(be),G=-1;return}else if(De.__webglFramebuffer===void 0)ie.setupRenderTarget(S);else if(De.__hasExternalTextures)ie.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let pt=S.depthTexture;if(De.__boundDepthTexture!==pt){if(pt!==null&&X.has(pt)&&(S.width!==pt.image.width||S.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(S)}}let Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ne=!0);let $e=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray($e[O])?Y=$e[O][Q]:Y=$e[O],$=!0):S.samples>0&&ie.useMultisampledRTT(S)===!1?Y=X.get(S).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[Q]:Y=$e,se.copy(S.viewport),Me.copy(S.scissor),be=S.scissorTest}else se.copy(ce).multiplyScalar(N).floor(),Me.copy(me).multiplyScalar(N).floor(),be=he;if(Q!==0&&(Y=B),y.bindFramebuffer(L.FRAMEBUFFER,Y)&&y.drawBuffers(S,Y),y.viewport(se),y.scissor(Me),y.setScissorTest(be),$){let De=X.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,Q)}else if(Ne){let De=O;for(let Ge=0;Ge<S.textures.length;Ge++){let $e=X.get(S.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,$e.__webglTexture,Q,De)}}else if(S!==null&&Q!==0){let De=X.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,Q)}G=-1};function Zd(S){let O=X.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=R.textureFormatReadable(S.format),O.__typeReadable=R.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,Q,Y,$,Ne,ke,De=0){if(!(S&&S.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){y.bindFramebuffer(L.FRAMEBUFFER,Ge);try{let $e=S.textures[De],pt=$e.format,_t=$e.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De);let Ve=Zd($e);if(Ve.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&Q>=0&&Q<=S.height-$&&L.readPixels(O,Q,Y,$,Ie.convert(pt),Ie.convert(_t),Ne)}finally{let $e=le!==null?X.get(le).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(S,O,Q,Y,$,Ne,ke,De=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(O>=0&&O<=S.width-Y&&Q>=0&&Q<=S.height-$){y.bindFramebuffer(L.FRAMEBUFFER,Ge);let $e=S.textures[De],pt=$e.format,_t=$e.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De);let Ve=Zd($e);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.bufferData(L.PIXEL_PACK_BUFFER,Ne.byteLength,L.STREAM_READ),L.readPixels(O,Q,Y,$,Ie.convert(pt),Ie.convert(_t),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Qt=le!==null?X.get(le).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Qt);let Bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await op(L,Bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ne),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ct),L.deleteSync(Bt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,Q=0){let Y=Math.pow(2,-Q),$=Math.floor(S.image.width*Y),Ne=Math.floor(S.image.height*Y),ke=O!==null?O.x:0,De=O!==null?O.y:0;ie.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,ke,De,$,Ne),y.unbindTexture()},this.copyTextureToTexture=function(S,O,Q=null,Y=null,$=0,Ne=0){let ke,De,Ge,$e,pt,_t,Ve,Ct,Qt,Bt=S.isCompressedTexture?S.mipmaps[Ne]:S.image;if(Q!==null)ke=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Ge=Q.isBox3?Q.max.z-Q.min.z:1,$e=Q.min.x,pt=Q.min.y,_t=Q.isBox3?Q.min.z:0;else{let Zt=Math.pow(2,-$);ke=Math.floor(Bt.width*Zt),De=Math.floor(Bt.height*Zt),S.isDataArrayTexture?Ge=Bt.depth:S.isData3DTexture?Ge=Math.floor(Bt.depth*Zt):Ge=1,$e=0,pt=0,_t=0}Y!==null?(Ve=Y.x,Ct=Y.y,Qt=Y.z):(Ve=0,Ct=0,Qt=0);let Dt=Ie.convert(O.format),wn=Ie.convert(O.type),Be;O.isData3DTexture?(ie.setTexture3D(O,0),Be=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ie.setTexture2DArray(O,0),Be=L.TEXTURE_2D_ARRAY):(ie.setTexture2D(O,0),Be=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let Pn=y.getParameter(L.UNPACK_ROW_LENGTH),Tt=y.getParameter(L.UNPACK_IMAGE_HEIGHT),si=y.getParameter(L.UNPACK_SKIP_PIXELS),ki=y.getParameter(L.UNPACK_SKIP_ROWS),Rs=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),y.pixelStorei(L.UNPACK_SKIP_ROWS,pt),y.pixelStorei(L.UNPACK_SKIP_IMAGES,_t);let Nr=S.isDataArrayTexture||S.isData3DTexture,It=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Zt=X.get(S),Cs=X.get(O),Ut=X.get(Zt.__renderTarget),Ps=X.get(Cs.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Ut.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let Ur=0;Ur<Ge;Ur++)Nr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(S).__webglTexture,$,_t+Ur),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(O).__webglTexture,Ne,Qt+Ur)),L.blitFramebuffer($e,pt,ke,De,Ve,Ct,ke,De,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||X.has(S)){let Zt=X.get(S),Cs=X.get(O);y.bindFramebuffer(L.READ_FRAMEBUFFER,D),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let Ut=0;Ut<Ge;Ut++)Nr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,$,_t+Ut):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,$),It?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cs.__webglTexture,Ne,Qt+Ut):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cs.__webglTexture,Ne),$!==0?L.blitFramebuffer($e,pt,ke,De,Ve,Ct,ke,De,L.COLOR_BUFFER_BIT,L.NEAREST):It?L.copyTexSubImage3D(Be,Ne,Ve,Ct,Qt+Ut,$e,pt,ke,De):L.copyTexSubImage2D(Be,Ne,Ve,Ct,$e,pt,ke,De);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else It?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Be,Ne,Ve,Ct,Qt,ke,De,Ge,Dt,wn,Bt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Be,Ne,Ve,Ct,Qt,ke,De,Ge,Dt,Bt.data):L.texSubImage3D(Be,Ne,Ve,Ct,Qt,ke,De,Ge,Dt,wn,Bt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ne,Ve,Ct,ke,De,Dt,wn,Bt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ne,Ve,Ct,Bt.width,Bt.height,Dt,Bt.data):L.texSubImage2D(L.TEXTURE_2D,Ne,Ve,Ct,ke,De,Dt,wn,Bt);y.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt),y.pixelStorei(L.UNPACK_SKIP_PIXELS,si),y.pixelStorei(L.UNPACK_SKIP_ROWS,ki),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Rs),Ne===0&&O.generateMipmaps&&L.generateMipmap(Be),y.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){W=0,J=0,le=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},o1=new Vs(-1,1,1,-1,0,1),fd=class extends Pt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},l1=new fd,Js=class{constructor(e){this._mesh=new tt(l1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var dh=class extends ti{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Js(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Uo=class extends ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fh=class extends ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _a=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ve);this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dh(xa),this.copyPass.material.blending=jt,this.timer=new fo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(a instanceof Uo?i=!0:a instanceof fh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var va=class extends ti{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Fo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new wt},cameraProjectionMatrixInverse:{value:new wt},cameraWorldMatrix:{value:new wt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Oo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ph={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Wp(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=c1(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new U(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Os(s,e,e);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}function c1(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}var Bo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraProjectionMatrixInverse:{value:new wt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function pd(n,e,t){let i=h1(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function h1(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new U(Math.cos(r),Math.sin(r),a))}return i}var mh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,m=e-d,x=t-f,g,p;m>x?(g=1,p=0):(g=0,p=1);let v=m-g+h,T=x-p+h,_=m-1+2*h,w=x-1+2*h,E=l&255,A=c&255,M=this.perm[E+this.perm[A]]%12,b=this.perm[E+g+this.perm[A+p]]%12,C=this.perm[E+1+this.perm[A+1]]%12,P=.5-m*m-x*x;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[M],m,x));let F=.5-v*v-T*T;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[b],v,T));let B=.5-_*_-w*w;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[C],_,w)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(i+c),f=1/6,m=(h+u+d)*f,x=h-m,g=u-m,p=d-m,v=e-x,T=t-g,_=i-p,w,E,A,M,b,C;v>=T?T>=_?(w=1,E=0,A=0,M=1,b=1,C=0):v>=_?(w=1,E=0,A=0,M=1,b=0,C=1):(w=0,E=0,A=1,M=1,b=0,C=1):T<_?(w=0,E=0,A=1,M=0,b=1,C=1):v<_?(w=0,E=1,A=0,M=0,b=1,C=1):(w=0,E=1,A=0,M=1,b=1,C=0);let P=v-w+f,F=T-E+f,B=_-A+f,D=v-M+2*f,z=T-b+2*f,W=_-C+2*f,J=v-1+3*f,le=T-1+3*f,G=_-1+3*f,Z=h&255,se=u&255,Me=d&255,be=this.perm[Z+this.perm[se+this.perm[Me]]]%12,j=this.perm[Z+w+this.perm[se+E+this.perm[Me+A]]]%12,ne=this.perm[Z+M+this.perm[se+b+this.perm[Me+C]]]%12,re=this.perm[Z+1+this.perm[se+1+this.perm[Me+1]]]%12,I=.6-v*v-T*T-_*_;I<0?s=0:(I*=I,s=I*I*this._dot3(this.grad3[be],v,T,_));let N=.6-P*P-F*F-B*B;N<0?r=0:(N*=N,r=N*N*this._dot3(this.grad3[j],P,F,B));let ee=.6-D*D-z*z-W*W;ee<0?a=0:(ee*=ee,a=ee*ee*this._dot3(this.grad3[ne],D,z,W));let ue=.6-J*J-le*le-G*G;return ue<0?o=0:(ue*=ue,o=ue*ue*this._dot3(this.grad3[re],J,le,G)),32*(s+r+a+o)}noise4d(e,t,i,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,m,x=(e+t+i+s)*l,g=Math.floor(e+x),p=Math.floor(t+x),v=Math.floor(i+x),T=Math.floor(s+x),_=(g+p+v+T)*c,w=g-_,E=p-_,A=v-_,M=T-_,b=e-w,C=t-E,P=i-A,F=s-M,B=b>C?32:0,D=b>P?16:0,z=C>P?8:0,W=b>F?4:0,J=C>F?2:0,le=P>F?1:0,G=B+D+z+W+J+le,Z=a[G][0]>=3?1:0,se=a[G][1]>=3?1:0,Me=a[G][2]>=3?1:0,be=a[G][3]>=3?1:0,j=a[G][0]>=2?1:0,ne=a[G][1]>=2?1:0,re=a[G][2]>=2?1:0,I=a[G][3]>=2?1:0,N=a[G][0]>=1?1:0,ee=a[G][1]>=1?1:0,ue=a[G][2]>=1?1:0,ce=a[G][3]>=1?1:0,me=b-Z+c,he=C-se+c,q=P-Me+c,K=F-be+c,V=b-j+2*c,te=C-ne+2*c,oe=P-re+2*c,xe=F-I+2*c,ye=b-N+3*c,Ue=C-ee+3*c,We=P-ue+3*c,L=F-ce+3*c,ot=b-1+4*c,rt=C-1+4*c,R=P-1+4*c,y=F-1+4*c,H=g&255,X=p&255,ie=v&255,Se=T&255,we=o[H+o[X+o[ie+o[Se]]]]%32,ae=o[H+Z+o[X+se+o[ie+Me+o[Se+be]]]]%32,fe=o[H+j+o[X+ne+o[ie+re+o[Se+I]]]]%32,Re=o[H+N+o[X+ee+o[ie+ue+o[Se+ce]]]]%32,Ye=o[H+1+o[X+1+o[ie+1+o[Se+1]]]]%32,Te=.6-b*b-C*C-P*P-F*F;Te<0?h=0:(Te*=Te,h=Te*Te*this._dot4(r[we],b,C,P,F));let Ee=.6-me*me-he*he-q*q-K*K;Ee<0?u=0:(Ee*=Ee,u=Ee*Ee*this._dot4(r[ae],me,he,q,K));let He=.6-V*V-te*te-oe*oe-xe*xe;He<0?d=0:(He*=He,d=He*He*this._dot4(r[fe],V,te,oe,xe));let Ze=.6-ye*ye-Ue*Ue-We*We-L*L;Ze<0?f=0:(Ze*=Ze,f=Ze*Ze*this._dot4(r[Re],ye,Ue,We,L));let it=.6-ot*ot-rt*rt-R*R-y*y;return it<0?m=0:(it*=it,m=it*it*this._dot4(r[Ye],ot,rt,R,y)),27*(h+u+d+f+m)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}};var vs=class n extends ti{constructor(e,t,i=512,s=512,r,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Wp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:tn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Yt({defines:Object.assign({},Fo.defines),uniforms:li.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new lo,this.normalMaterial.blending=jt,this.pdMaterial=new Yt({defines:Object.assign({},Bo.defines),uniforms:li.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Yt({defines:Object.assign({},Oo.defines),uniforms:li.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Yt({uniforms:li.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:go,blendDst:mr,blendEquation:oi,blendSrcAlpha:mo,blendDstAlpha:mr,blendEquationAlpha:oi}),this.blendMaterial=new Yt({uniforms:li.clone(ph.uniforms),vertexShader:ph.vertexShader,fragmentShader:ph.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:_c,blendSrc:go,blendDst:mr,blendEquation:oi,blendSrcAlpha:mo,blendDstAlpha:mr,blendEquationAlpha:oi}),this._fsQuad=new Js(null),this._originalClearColor=new qe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new qi,this.depthTexture.format=Zi,this.depthTexture.type=Ys,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:tn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new mh,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Os(s,e,e,Bn,Rn);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}};vs.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ya=class extends ti{constructor(){super(),this.isOutputPass=!0,this.uniforms=li.clone(ko.uniforms),this.material=new oa({name:ko.name,uniforms:this.uniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader}),this._fsQuad=new Js(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Go={};nm(Go,{EGG_AHEAD:()=>gh,G:()=>Mr,MOTOR:()=>yt,PHI_CARRY:()=>xh,PHI_LOW:()=>ci,PHI_STOW:()=>ni,R:()=>ge,SOUND:()=>lt,STOP_AT:()=>Ks,SURF:()=>qp,WALLS:()=>hi,WORLD:()=>kn,armSolve:()=>Hn,armTip:()=>_h,at:()=>Ss,budget:()=>Qi,com:()=>bs,echo:()=>vh,envelope:()=>zo,maxRangeOf:()=>Ho,motor:()=>vr,mu:()=>Yp,muPeak:()=>Ln,powerCurve:()=>Ci,runMission:()=>Mh,sideStep:()=>yr,sonarRead:()=>yh,soundSpeed:()=>ji,stepTest:()=>br,supplyV:()=>zn,tractive:()=>Ri});var Mr=9.80665,ys=(n,e,t)=>Math.min(t,Math.max(e,n)),Ms=Math.PI/180,ge={wheelR:.0325,bandT:.0013,track:.193,axleX:0,casterX:.125,mBase:.55,xBase:.035,mArm:.085,mEgg:.05,sensorX:.145,sensorY:.038,pivot:[-.045,.085],armLen:.24,armAttach:.05,servo:[.09,.04],horn:.05,rod:.135,gripLen:.085},yt={Vbat:6,Vdrop:1.4,Rm:6,I0:.19,ke:.2326,etaG:.55,J:4e-4};yt.tauF=yt.etaG*yt.ke*yt.I0;yt.w0=(yt.Vbat-yt.I0*yt.Rm)/yt.ke;function vr(n,e){let t=(n-yt.ke*e)/yt.Rm,i=yt.etaG*yt.ke*t-Math.sign(e||n)*yt.tauF*(Math.abs(e)>.05||Math.abs(n)>.3?1:0);return{I:t,tau:i,Pel:n*t,Pmech:i*e}}var zn=n=>n*(yt.Vbat-yt.Vdrop),qp={desk:{name:"Varnished desk",k:1},dusty:{name:"Dusty desk",k:.7},card:{name:"Paper on desk",k:.85}},Ln=(n,e)=>(n?1:.22)*qp[e].k,Yp=(n,e)=>e*Math.sin(1.5*Math.atan(10*n));function bs(n,e){let t=ge.pivot[0]+.6*ge.armLen*Math.cos(n),i=ge.pivot[0]+ge.armLen*Math.cos(n)+.5*ge.gripLen,s=e===!0?ge.mEgg:e||0,r=ge.mBase+ge.mArm+s,a=(ge.mBase*ge.xBase+ge.mArm*t+s*i)/r;return{m:r,x:a,drive:ys((ge.casterX-a)/ge.casterX,.05,1)}}function Hn(n){let e=[ge.servo[0]+ge.horn*Math.cos(n),ge.servo[1]+ge.horn*Math.sin(n)],t=ge.pivot,i=e[0]-t[0],s=e[1]-t[1],r=Math.hypot(i,s),a=ge.armAttach,o=ge.rod;if(r>a+o||r<Math.abs(o-a))return null;let l=(a*a-o*o+r*r)/(2*r),c=Math.sqrt(Math.max(0,a*a-l*l)),h=i/r,u=s/r,f=[[t[0]+l*h-c*u,t[1]+l*u+c*h],[t[0]+l*h+c*u,t[1]+l*u-c*h]].reduce((m,x)=>x[1]>m[1]?x:m);return{theta:Math.atan2(f[1]-t[1],f[0]-t[0]),A:f,H:e}}var Ks=.108,gh=.072,ni=74*Ms,xh=46*Ms,ci=18.4*Ms;function _h(n){return[ge.pivot[0]+ge.armLen*Math.cos(n),ge.pivot[1]+ge.armLen*Math.sin(n)]}var lt={f:4e4,cycles:8,beam:15*Ms,absDbPerM:1.3,minRange:.02,maxRange:4,ref:.01,thresh:25e-5},hi={hard:{name:"Painted wall",R:.95,scatter:.08},card:{name:"Cardboard box",R:.6,scatter:.12},wood:{name:"Wooden board",R:.8,scatter:.1},cloth:{name:"Soft fabric",R:.2,scatter:.05}},ji=n=>331.3+.606*n,Xp=n=>Math.exp(-Math.pow(n/(lt.beam*1.7),2));function vh(n,e,t,i=1){let s=hi[t],r=2*i*n,a=lt.ref/Math.max(r,lt.ref),o=Math.pow(10,-lt.absDbPerM*r/20),l=Math.pow(s.R,i)*Math.pow(.8,i-1),c=Math.pow(Xp(0)*Xp(2*e),i),h=s.scatter*Math.pow(Math.cos(e),2),u=Math.max(c*l,h*Math.pow(.5,i-1));return a*o*u}function Qi(n,e,t){let i=hi[t],s=2*n,r=20*Math.log10(Math.max(s,lt.ref)/lt.ref),a=lt.absDbPerM*s,o=-20*Math.log10(i.R),l=-20*Math.log10(Math.max(Math.exp(-Math.pow(2*e/(lt.beam*1.7),2)),1e-4)),c=r+a+o+l,h=vh(n,e,t,1);return{spread:r,air:a,surf:o,aim:l,total:c,amp:h,detected:h>lt.thresh&&n>=lt.minRange&&n<=lt.maxRange}}function zo(n,e,t,i=22,s=null){let r=ji(i),a=480,o=[],l=[];for(let h=1;h<=3;h++)l.push({t:2*h*n/r,a:vh(n,e,t,h)});let c=s??Math.min(.03,Math.max(.006,l[1].t*1.25));for(let h=0;h<=a;h++){let u=c*h/a,d=.9*Math.exp(-u/9e-5)*(u<6e-4?1:.4);for(let f of l)d+=f.a*Math.exp(-Math.pow((u-f.t)/22e-5,2));o.push([u,d])}return{pts:o,echoes:l,tEnd:c,c:r}}function Ho(n){let e=.02,t=6;for(let i=0;i<40;i++){let s=(e+t)/2;vh(s,0,n,1)>lt.thresh?e=s:t=s}return e}function yr(n,e,t,i,s,r,a){let o=ge.wheelR+(n.bands?ge.bandT:0),l=4,c=r/l,h=0,u=0,d=0;for(let m=0;m<l;m++){let x=Math.max(Math.abs(n.w*o),Math.abs(n.v),.02);h=(n.w*o-n.v)/x,u=i*Yp(h,s),t?d=-yt.etaG*yt.ke*yt.ke*n.w/yt.Rm-Math.sign(n.w)*yt.tauF*(Math.abs(n.w)>.05?1:0):d=vr(e,n.w).tau;let g=.03*i*(Math.abs(n.v)>.003?Math.sign(n.v):n.v/.003);n.w+=(d-u*o)/yt.J*c,n.v+=(u-g)/a*c}n.slip=h,n.F=u,n.tau=d,n.Pm=t?0:Math.max(0,d*n.w);let f=t?{I:0,Pel:0}:vr(e,n.w);n.I=t?0:f.I,n.Pel=t?0:f.Pel,n.rEff=o}function br({bands:n,surf:e,duty:t=1,drive:i=.72,T:s=1}){let a=.5*i*(ge.mBase+ge.mArm)*9.80665,o=Ln(n,e),l=.5*(ge.mBase+ge.mArm),c={w:0,v:0,bands:n},h={t:[],v:[],wr:[],slip:[],F:[]},u=zn(t);for(let d=0;d*5e-4<=s;d++)yr(c,u,!1,a,o,5e-4,l),d%10===0&&(h.t.push(d*5e-4),h.v.push(c.v),h.wr.push(c.w*c.rEff),h.slip.push(c.slip),h.F.push(2*c.F));return h}function Ri({bands:n,surf:e,duty:t=1,drive:i=.72}){let s=i*(ge.mBase+ge.mArm)*9.80665,r=Ln(n,e),a=ge.wheelR+(n?ge.bandT:0),o=zn(t),l=[];for(let c=0;c<=60;c++){let h=c/60*.8,u=h/a,d=vr(o,u);l.push([h,Math.max(0,2*d.tau/a)])}return{pts:l,limit:r*s,peak:r}}function Ci(n,e=!0){let t=zn(n),i=ge.wheelR+(e?ge.bandT:0),s=[],r=(t-yt.I0*yt.Rm)/yt.ke;for(let a=0;a<=80;a++){let o=r*a/80,l=vr(t,o);s.push({rpm:o*60/(2*Math.PI),kmh:o*i*3.6,tau:l.tau,I:l.I,Pel:l.Pel,Pm:Math.max(0,l.Pmech),eff:l.Pel>.01?Math.max(0,l.Pmech/l.Pel):0})}return{V:t,w0:r,pts:s}}var kn={crate:{x:.17,z:0,hx:.04,hz:.04,h:.025},tray:{x:-.102,z:.5,hx:.04,hz:.04,h:.025},wall:{x:1.1},start:{x:-.55,z:0}};function u1(n,e,t,i,s){let r=0,a=1e9;for(let[o,l,c,h]of[[n,t,s.x-s.hx,s.x+s.hx],[e,i,s.z-s.hz,s.z+s.hz]])if(Math.abs(l)<1e-9){if(o<c||o>h)return 1/0}else{let u=(c-o)/l,d=(h-o)/l;if(u>d&&([u,d]=[d,u]),r=Math.max(r,u),a=Math.min(a,d),r>a)return 1/0}return r}function yh(n,e,t,i=[],s=!0){let r=n+Math.cos(t)*ge.sensorX,a=e+Math.sin(t)*ge.sensorX,o=lt.maxRange,l="none";for(let c=-2;c<=2;c++){let h=t+c*6*Ms,u=Math.cos(h),d=Math.sin(h);for(let[f,m]of[...s?[["crate",kn.crate],["tray",kn.tray]]:[],...i]){let x=u1(r,a,u,d,m);x<o&&(o=x,l=f)}if(u>1e-6){let f=(kn.wall.x-r)/u;f>0&&f<o&&(o=f,l="wall")}}return{d:o,what:l}}function Mh({bands:n=!0,surf:e="desk",duty:t=.7}={}){let r=Ln(n,e),a={bands:n,w:0,v:0},o={bands:n,w:0,v:0},l=kn.start.x,c=kn.start.z,h=0,u=0,d=0,f=0,m=ni,x=0,g=!1,p=0,v=0,T=0,_=0,w=[0,0],E=!1,A={phi:ni,rate:60*Ms},M={v:0,rate:90*Ms},b={dt:.001*10,n:0,t:[],x:[],z:[],yaw:[],wl:[],wr:[],phi:[],jaw:[],held:[],vL:[],vR:[],slipL:[],slipR:[],sonar:[],what:[],Pel:[],I:[],drive:[],phase:[],eggX:[],eggZ:[],eggY:[],energy:[],Pm:[],w:[]},C=["IDLE","APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","CARRY","BRAKE","PLACE","RETREAT","DONE"],P=0,F=W=>W===1||W===7?t:W===6?.6:W===10?-.5:0,B=W=>{p=W,v=0},D={x:kn.crate.x,z:kn.crate.z,y:kn.crate.h+.0225},z=60;for(let W=0;f<z;W++,f=W*.001){v+=.001;let J=yh(l,c,h),le=0,G=0,Z=!1;switch(p){case 0:v>.9&&B(1);break;case 1:{let N=ys(v/.35,0,1);le=G=t*N,J.d<=Ks&&B(2);break}case 2:Z=!0,(Math.abs(a.v)+Math.abs(o.v)<.006||v>1.2)&&(B(3),A.phi=ci,M.v=1);break;case 3:Z=!0,v>1.5&&B(4);break;case 4:Z=!0,v>.35&&(M.v=0),v>1.1&&(g=!0,B(5),A.phi=xh);break;case 5:Z=!0,v>1.3&&(B(6),_=h);break;case 6:{let N=_+90*Ms-h,ee=(o.v-a.v)/ge.track,ue=ys(3*N-.4*ee,-.6,.6);Math.abs(ue)<.35&&(ue=.35*Math.sign(N)),G=ue*ys(v/.25,0,1),le=-G,Math.abs(N)<3*Ms&&Math.abs(ee)<.35&&B(12);break}case 12:Z=!0,v>.5&&B(7);break;case 7:{let N=ys(v/.35,0,1);le=G=t*N,J.d<=Ks&&B(8);break}case 8:Z=!0,(Math.abs(a.v)+Math.abs(o.v)<.006||v>1.2)&&(B(9),A.phi=ci);break;case 9:Z=!0,v>1.5&&v<1.51&&(M.v=1),v>1.5&&!E&&(g=!1,E=!0),v>2.4&&(A.phi=ni,M.v=0,B(10),w=[l,c]);break;case 10:{le=G=-.5*ys(v/.2,0,1),Math.hypot(l-w[0],c-w[1])>=.14&&B(11);break}case 11:Z=!0,v>3&&(W=1e9);break;default:break}m+=ys(A.phi-m,-A.rate*.001,A.rate*.001),x+=ys(M.v-x,-M.rate*.001/.6,M.rate*.001/.6);let se=Hn(m),Me=se?se.theta:1,be=bs(Me,g),j=.5*be.drive*be.m*9.80665,ne=.5*be.m;yr(a,Z?0:zn(le),Z,j,r,.001,ne),yr(o,Z?0:zn(G),Z,j,r,.001,ne);let re=.5*(a.v+o.v),I=(o.v-a.v)/ge.track;if(h+=I*.001,l+=re*Math.cos(h)*.001,c+=re*Math.sin(h)*.001,u+=a.w*.001,d+=o.w*.001,P+=(a.Pel+o.Pel+.12*yt.Vbat)*.001,g){let N=_h(Me),ee=N[0]+gh,ue=N[1]-.012;D={x:l+Math.cos(h)*ee,z:c+Math.sin(h)*ee,y:ue}}else E&&(D={x:D.x,z:D.z,y:kn.tray.h+.006+.0225});W%10===0&&(b.t.push(f),b.x.push(l),b.z.push(c),b.yaw.push(h),b.wl.push(u),b.wr.push(d),b.phi.push(m),b.jaw.push(x),b.held.push(g?1:0),b.vL.push(a.v),b.vR.push(o.v),b.slipL.push(a.slip||0),b.slipR.push(o.slip||0),b.sonar.push(J.d),b.what.push(J.what),b.Pel.push(a.Pel+o.Pel),b.I.push(a.I+o.I),b.drive.push(be.drive),b.phase.push(p===12?6:p),b.eggX.push(D.x),b.eggZ.push(D.z),b.eggY.push(D.y),b.energy.push(P),b.Pm.push(a.Pm+o.Pm),b.w.push((Math.abs(a.w)+Math.abs(o.w))/2))}return b.n=b.t.length,b.duration=b.t[b.n-1],b.names=C,b}function Ss(n,e){let t=ys(e/n.dt,0,n.n-1),i=Math.floor(t),s=Math.min(i+1,n.n-1),r=t-i,a={i};for(let o of["t","x","z","yaw","wl","wr","phi","jaw","vL","vR","slipL","slipR","sonar","Pel","I","drive","eggX","eggZ","eggY","energy","Pm","w"])a[o]=n[o][i]+(n[o][s]-n[o][i])*r;return a.held=n.held[i],a.phase=n.phase[i],a.what=n.what[i],a}var js=(n,e,t)=>Math.min(t,Math.max(e,n)),Ma=Math.PI/180,nt={pantryX:.6,kitchenX:-.62,zs:[-.5,-.25,0,.25,.5],pad:{hx:.04,hz:.04,h:.025},plateT:.004,start:{x:-.05,z:-.5},retreat:.14},vn=[{id:"eggs",name:"Eggs",full:"Egg carton (2 eggs)",w:.034,m:.045},{id:"salt",name:"Salt",full:"Salt shaker",w:.036,m:.055},{id:"spice",name:"Spice",full:"Spice jar",w:.038,m:.05},{id:"sauce",name:"Sauce",full:"Sauce bottle",w:.04,m:.08},{id:"glass",name:"Glass",full:"Drinking glass",w:.042,m:.06}],d1=n=>Math.asin(js((n/2-.0165)/.036,0,1))/(28*Ma),f1=.0225,st={IDLE:0,APPROACH:1,BRAKE:2,REACH:3,GRIP:4,LIFT:5,TURN_CARRY:6,SETTLE_C:7,CARRY:8,BRAKE_C:9,PLACE:10,RETREAT:11,TURN_SHIFT:12,SETTLE_T:13,SHIFT:14,SETTLE_S:15,TURN_PANTRY:16,SETTLE_P:17,DONE:18};var $p=["APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","CARRY","PLACE","RETREAT","SHIFT"],Zp=[-1,0,1,2,3,4,5,5,6,6,7,8,9,9,9,9,9,9,-1],md=[];nt.zs.forEach((n,e)=>{md.push(["pad",{x:nt.pantryX,z:n,hx:nt.pad.hx,hz:nt.pad.hz}]),md.push(["spot",{x:nt.kitchenX,z:n,hx:nt.pad.hx,hz:nt.pad.hz}])});var bh=class{constructor({duty:e=.7,bands:t=!0,surf:i="desk"}={}){this.duty=e,this.bands=t,this.surf=i,this.peak=Ln(t,i),this.dt=.001,this.stride=10,this.reset()}reset(){this.L={bands:this.bands,w:0,v:0},this.Rr={bands:this.bands,w:0,v:0},Object.assign(this,{x:nt.start.x,z:nt.start.z,yaw:0,wl:0,wr:0,t:0,phi:ni,jaw:0,held:!1,phase:st.IDLE,phaseT:0,item:0,yawRef:0,startPos:[0,0],energy:0,armTarget:ni,jawTarget:0,tick:0,theta:0,stopped:!1}),this.g=0,this.status="READY",this.goal=0,this.items=vn.map((e,t)=>({state:0,x:nt.pantryX,z:nt.zs[t],y:nt.pad.h,yaw:0})),this.sn={d:4,what:"none"},this.Pel=0,this.I=0,this.Pm=0,this.w=0,this.drive=.7,this.slipL=0,this.slipR=0,this.rec={n:0,dt:this.dt*this.stride};for(let e of["t","x","z","yaw","wl","wr","phi","jaw","held","vL","vR","slipL","slipR","sonar","Pel","I","drive","phase","energy","Pm","w","item","g"])this.rec[e]=[];this.next(st.IDLE)}next(e){this.phase=e,this.phaseT=0}start(){(this.status==="DONE"||this.status==="STOPPED")&&this.reset(),this.goal=1,this.status="RUNNING"}pause(){this.status==="RUNNING"&&(this.goal=0,this.status="PAUSING")}resume(){(this.status==="PAUSING"||this.status==="PAUSED")&&(this.goal=1,this.status="RUNNING")}stop(){this.status!=="READY"&&this.status!=="DONE"&&this.status!=="STOPPED"&&(this.goal=0,this.status="STOPPING")}get active(){return this.g>0||this.goal>0}get done(){return this.phase===st.DONE}get ge(){return this.g*this.g*(3-2*this.g)}step(){let e=this.dt,t=this.goal>this.g?1/.6:this.status==="STOPPING"?1/.45:1/.8;if(this.g+=js(this.goal-this.g,-t*e,t*e),this.g<=0&&this.goal===0&&(this.status==="PAUSING"&&(this.status="PAUSED"),this.status==="STOPPING"&&(this.status="STOPPED")),this.g<=0&&this.goal===0)return!1;let i=this.ge,s=e*i;this.t+=e,this.phaseT+=s;let r=this.L,a=this.Rr,o=this.duty,l=this.sn=yh(this.x,this.z,this.yaw,md,!1),c=vn[this.item],h=0,u=0,d=!1,f=b=>js(this.phaseT/b,0,1),m=()=>{let b=(a.v-r.v)/ge.track,C=js(2.5*(this.yawRef-this.yaw)-.35*b,-.15,.15);u+=C,h-=C},x=b=>{let C=this.yawRef-this.yaw,P=(a.v-r.v)/ge.track,F=js(3*C-.4*P,-.6,.6);Math.abs(F)<.35&&(F=.35*Math.sign(C)),u=F*f(.25),h=-u,Math.abs(C)<3*Ma&&Math.abs(P)<.35&&this.next(b)},g=()=>Math.abs(r.v)+Math.abs(a.v)<.006||this.phaseT>1.2;switch(this.phase){case st.IDLE:this.phaseT>.9&&this.next(st.APPROACH);break;case st.APPROACH:h=u=o*f(.35),m(),l.d<=Ks&&this.next(st.BRAKE);break;case st.BRAKE:d=!0,g()&&(this.next(st.REACH),this.armTarget=ci,this.jawTarget=1);break;case st.REACH:d=!0,this.phaseT>1.5&&this.next(st.GRIP);break;case st.GRIP:d=!0,this.phaseT>.35&&(this.jawTarget=d1(c.w)),this.phaseT>1.1&&(this.held=!0,this.items[this.item].state=1,this.next(st.LIFT),this.armTarget=xh);break;case st.LIFT:d=!0,this.phaseT>1.3&&(this.next(st.TURN_CARRY),this.yawRef+=Math.PI);break;case st.TURN_CARRY:x(st.SETTLE_C);break;case st.SETTLE_C:d=!0,this.phaseT>.5&&this.next(st.CARRY);break;case st.CARRY:h=u=o*f(.35),m(),l.d<=Ks&&this.next(st.BRAKE_C);break;case st.BRAKE_C:d=!0,g()&&(this.next(st.PLACE),this.armTarget=ci);break;case st.PLACE:if(d=!0,this.phaseT>1.5&&this.held){this.jawTarget=1,this.held=!1;let b=this.items[this.item];b.state=2,b.y=nt.pad.h+nt.plateT}this.phaseT>2.4&&(this.armTarget=ni,this.jawTarget=0,this.next(st.RETREAT),this.startPos=[this.x,this.z]);break;case st.RETREAT:h=u=-.5*f(.2),m(),Math.hypot(this.x-this.startPos[0],this.z-this.startPos[1])>=nt.retreat&&(this.item===vn.length-1?this.next(st.DONE):(this.next(st.TURN_SHIFT),this.yawRef-=Math.PI/2));break;case st.TURN_SHIFT:x(st.SETTLE_T);break;case st.SETTLE_T:d=!0,this.phaseT>.4&&this.next(st.SHIFT);break;case st.SHIFT:{let b=nt.zs[this.item+1]-this.z;h=u=Math.max(.4,o*js(b/.12,0,1))*f(.3),m(),b<.004&&this.next(st.SETTLE_S);break}case st.SETTLE_S:d=!0,g()&&(this.next(st.TURN_PANTRY),this.yawRef-=Math.PI/2);break;case st.TURN_PANTRY:x(st.SETTLE_P);break;case st.SETTLE_P:d=!0,this.phaseT>.5&&(this.item++,this.next(st.APPROACH));break;case st.DONE:d=!0;break;default:break}let p=i;h*=p,u*=p,this.phi+=js(this.armTarget-this.phi,-60*Ma*s,60*Ma*s),this.jaw+=js(this.jawTarget-this.jaw,-90*Ma*s/.6,90*Ma*s/.6);let v=Hn(this.phi);this.theta=v?v.theta:1;let T=this.held?c.m:0,_=bs(this.theta,T),w=.5*_.drive*_.m*9.80665,E=.5*_.m;yr(r,d?0:zn(h),d,w,this.peak,e,E),yr(a,d?0:zn(u),d,w,this.peak,e,E);let A=.5*(r.v+a.v),M=(a.v-r.v)/ge.track;if(this.yaw+=M*e,this.x+=A*Math.cos(this.yaw)*e,this.z+=A*Math.sin(this.yaw)*e,this.wl+=r.w*e,this.wr+=a.w*e,this.Pel=r.Pel+a.Pel,this.I=r.I+a.I,this.Pm=r.Pm+a.Pm,this.w=(Math.abs(r.w)+Math.abs(a.w))/2,this.drive=_.drive,this.slipL=r.slip||0,this.slipR=a.slip||0,this.energy+=(this.Pel+.12*yt.Vbat)*e,this.held){let b=_h(this.theta),C=b[0]+.072,P=this.items[this.item];P.x=this.x+Math.cos(this.yaw)*C,P.z=this.z+Math.sin(this.yaw)*C,P.y=b[1]-.012-f1,P.yaw=this.yaw}return this.tick++%this.stride===0&&this.record(),this.phase===st.DONE&&this.phaseT>2&&(this.goal=0,this.status="DONE",this.g=0),!0}record(){let e=this.rec;e.t.push(this.t),e.x.push(this.x),e.z.push(this.z),e.yaw.push(this.yaw),e.wl.push(this.wl),e.wr.push(this.wr),e.phi.push(this.phi),e.jaw.push(this.jaw),e.held.push(this.held?1:0),e.vL.push(this.L.v),e.vR.push(this.Rr.v),e.slipL.push(this.slipL),e.slipR.push(this.slipR),e.sonar.push(this.sn.d),e.Pel.push(this.Pel),e.I.push(this.I),e.drive.push(this.drive),e.phase.push(this.phase),e.energy.push(this.energy),e.Pm.push(this.Pm),e.w.push(this.w),e.item.push(this.item),e.g.push(this.g),e.n++}};var Vo=new U;function ui(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Vo.copy(e),Vo[i]=0,Vo.normalize();let c=.5*a/(a+o),h=1-Vo.angleTo(n)/l;return Math.sign(Vo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var di=class n extends dt{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new U,c=new U,h=new U(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new U,g=.5/a;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[v+0]=ui(x,c,"z","y",r,i),f[v+1]=1-ui(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[v+0]=1-ui(x,c,"z","y",r,i),f[v+1]=1-ui(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[v+0]=1-ui(x,c,"x","z",r,e),f[v+1]=ui(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[v+0]=1-ui(x,c,"x","z",r,e),f[v+1]=1-ui(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[v+0]=1-ui(x,c,"x","y",r,e),f[v+1]=1-ui(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[v+0]=ui(x,c,"x","y",r,e),f[v+1]=1-ui(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Kp(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Pt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=Jp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Jp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Un(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Mt=U,je={yellow:"#f2b400",black:"#101115",teal:"#17877d",blue:"#2563eb",red:"#b3232a",ard:"#0b66a6",silver:"#cfd4dc",gold:"#d6a62a",mdf:"#b98e5c",band:"#c9923f",tyre:"#0e0f12",white:"#ece9e2",steel:"#aab0b8",alu:"#2a2c31"};function wr(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Xi(s);return i.srgb!==!1&&(r.colorSpace=Vt),r.anisotropy=8,i.repeat&&(r.wrapS=r.wrapT=An,r.repeat.set(...i.repeat)),r}var gd=7,yn=()=>(gd=gd*16807%2147483647,gd/2147483647),Xo=wr(256,256,(n,e,t)=>{n.fillStyle="#808080",n.fillRect(0,0,e,t);for(let i=0;i<14e3;i++){let s=90+yn()*80;n.fillStyle=`rgba(${s},${s},${s},0.5)`,n.fillRect(yn()*e,yn()*t,1.5,1.5)}},{srgb:!1,repeat:[4,4]}),p1=wr(64,256,(n,e,t)=>{for(let i=0;i<t;i+=4)n.fillStyle=i%8?"#9a9a9a":"#6e6e6e",n.fillRect(0,i,e,4)},{srgb:!1}),m1=wr(128,64,(n,e,t)=>{n.fillStyle="#777",n.fillRect(0,0,e,t),n.strokeStyle="#bbb",n.lineWidth=1.5;for(let i=-t;i<e+t;i+=6)n.beginPath(),n.moveTo(i,0),n.lineTo(i+t,t),n.stroke(),n.beginPath(),n.moveTo(i+t,0),n.lineTo(i,t),n.stroke()},{srgb:!1,repeat:[6,1]}),jp=wr(256,128,(n,e,t)=>{n.fillStyle=je.mdf,n.fillRect(0,0,e,t);for(let i=0;i<400;i++)n.fillStyle=`rgba(70,45,20,${yn()*.12})`,n.fillRect(yn()*e,yn()*t,20+yn()*60,1);for(let i=0;i<3e3;i++)n.fillStyle=`rgba(255,235,200,${yn()*.05})`,n.fillRect(yn()*e,yn()*t,2,2)});function xd(n,e,t,i,s={}){return wr(Math.round(n*10),Math.round(e*10),(a,o,l)=>{a.fillStyle=t,a.fillRect(0,0,o,l),a.strokeStyle=s.trace||"rgba(255,255,255,0.07)",a.lineWidth=3,a.lineCap="round",a.lineJoin="round";for(let c=0;c<90;c++){let h=yn()*o,u=yn()*l;a.beginPath(),a.moveTo(h,u);for(let d=0;d<3;d++)yn()<.5?h+=(yn()-.5)*220:u+=(yn()-.5)*220,a.lineTo(h,u);a.stroke()}a.fillStyle="rgba(214,170,90,0.55)";for(let c=0;c<160;c++)a.beginPath(),a.arc(yn()*o,yn()*l,2.4,0,7),a.fill();a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.textBaseline="middle",i(a,10,o,l,{text:(c,h,u,d=22,f="left",m=0)=>{a.save(),a.translate(h*10,u*10),a.rotate(m),a.font=`600 ${d}px "JetBrains Mono", monospace`,a.textAlign=f,a.fillStyle="#fff",a.fillText(c,0,0),a.restore()},hole:(c,h,u=1.6)=>{a.fillStyle="#d6aa5a",a.beginPath(),a.arc(c*10,h*10,(u+.9)*10,0,7),a.fill(),a.fillStyle="#05060a",a.beginPath(),a.arc(c*10,h*10,u*10,0,7),a.fill()},box:(c,h,u,d)=>{a.strokeStyle="#fff",a.lineWidth=2.5,a.strokeRect(c*10,h*10,u*10,d*10)}})},s)}var _d=new Map;function Wo(n,e={}){let t=n+"|"+[e.r,e.m,e.cc,e.ccr,e.env,e.bump?.uuid,e.bs,e.map?.uuid,e.sheen,e.sheenColor].join(",");if(_d.has(t))return _d.get(t);let i=new Qn({color:n,roughness:e.r??.5,metalness:e.m??0,envMapIntensity:e.env??1,clearcoat:e.cc??0,clearcoatRoughness:e.ccr??.2,map:e.map??null,bumpMap:e.bump??null,bumpScale:e.bs??.6,sheen:e.sheen??0,sheenRoughness:.6,sheenColor:new qe(e.sheenColor??"#ffffff"),emissive:0});return _d.set(t,i),i}var Ae={yellow:{r:.42,cc:.5,ccr:.18,bump:Xo,bs:.35},teal:{r:.5,cc:.15,ccr:.35,bump:p1,bs:.9},acrylic:{r:.2,cc:.8,ccr:.08,env:.75},blackPlastic:{r:.55,cc:.25,ccr:.3,bump:Xo,bs:.5},chip:{r:.45,cc:.2,bump:Xo,bs:.3},steel:{r:.28,m:1,env:1.2},zinc:{r:.4,m:.9,env:1},brass:{r:.3,m:1,env:1.3},gold:{r:.22,m:1,env:1.3},rubber:{r:.88,bump:Xo,bs:1.2},pvc:{r:.32,cc:.5,ccr:.2},alu:{r:.38,m:.85,env:1}},ct=(n,e,t,i=.0015)=>new di(n,e,t,3,Math.min(i,n/2.2,e/2.2,t/2.2)),ft=(n,e,t=28)=>new _n(n,n,e,t),vd=(n,e)=>new _n(n,n,e,6),g1=new wt,x1=new ai,_1=new Si;function ze(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){let s=n.index?n.toNonIndexed():n;return s.applyMatrix4(g1.compose(new Mt(...e),x1.setFromEuler(_1.set(...t)),new Mt(...i))),s}var v1=n=>Kp(n.map(e=>e.index?e.toNonIndexed():e),!1),Qp=(n,e,t,i,s,r)=>{let a=Math.min(r??Math.min(i,s)/2.1,i/2.05,s/2.05);n.moveTo(e-i/2+a,t-s/2),n.lineTo(e+i/2-a,t-s/2),n.absarc(e+i/2-a,t-s/2+a,a,-Math.PI/2,0),n.lineTo(e+i/2,t+s/2-a),n.absarc(e+i/2-a,t+s/2-a,a,0,Math.PI/2),n.lineTo(e-i/2+a,t+s/2),n.absarc(e-i/2+a,t+s/2-a,a,Math.PI/2,Math.PI),n.lineTo(e-i/2,t-s/2+a),n.absarc(e-i/2+a,t-s/2+a,a,Math.PI,Math.PI*1.5)};function e0(n,e,t,i=[],s=[],r=.005){let a=new Bs;Qp(a,0,0,n,e,r);for(let[l,c,h]of i){let u=new $i;u.absarc(l,-c,h,0,Math.PI*2,!0),a.holes.push(u)}for(let[l,c,h,u]of s){let d=new $i;Qp(d,l,-c,h,u),a.holes.push(d)}let o=new fr(a,{depth:t,bevelEnabled:!0,bevelSize:3e-4,bevelThickness:3e-4,bevelSegments:1,curveSegments:10});return o.rotateX(-Math.PI/2),o}function Sr(n,e,t,i=0,s=.0022){let r=new Bs,a=e/2,o=n/2;r.moveTo(-o+a,-a),r.lineTo(o-a,-a),r.absarc(o-a,0,a,-Math.PI/2,Math.PI/2),r.lineTo(-o+a,a),r.absarc(-o+a,0,a,Math.PI/2,Math.PI*1.5);for(let c=0;c<i;c++){let h=-o+a+c*((n-e)/Math.max(i-1,1)),u=new $i;u.absarc(h,0,s,0,Math.PI*2,!0),r.holes.push(u)}let l=new fr(r,{depth:t,bevelEnabled:!0,bevelSize:2e-4,bevelThickness:2e-4,bevelSegments:1,curveSegments:12});return l.translate(0,0,-t/2),l}function Sh(){let n=new Ht,e=[],t={},i=[];function s(j,ne,re,I,N,ee){let ue=new Ht;ue.position.copy(re),n.add(ue);let ce={id:j,name:ne,group:ue,base:re.clone(),explode:new Mt(...I),a:N,b:ee,mats:[],meshes:[]};return e.push(ce),t[j]=ce,ce}function r(j,ne,re,I=[0,0,0],N={},ee=null,ue=null){let ce=ue||Wo(re,N),me=Array.isArray(ce)?ce.map(q=>q.clone()):ce.clone();(Array.isArray(me)?me:[me]).forEach(q=>j.mats.push(q));let he=new tt(ne,me);return he.position.set(...I),N.rot&&he.rotation.set(...N.rot),he.castShadow=!0,he.receiveShadow=!0,he.userData.part=j.id,(ee||j.group).add(he),j.meshes.push(he),i.push(he),he}let a=(j,ne,re,I={},N=null)=>r(j,v1(ne),re,[0,0,0],I,N),o=(j,ne=[0,0,0])=>{let re=new Ht;return re.position.set(...ne),j.group.add(re),re},l={"y+":[[0,0,0],[0,1,0]],"y-":[[Math.PI,0,0],[0,-1,0]],"z+":[[Math.PI/2,0,0],[0,0,1]],"z-":[[-Math.PI/2,0,0],[0,0,-1]],"x+":[[0,0,-Math.PI/2],[1,0,0]],"x-":[[0,0,Math.PI/2],[-1,0,0]]};function c(j,ne,re=.0026){let I=[],N=[];for(let[ue,ce,me,he="y+"]of ne){let[q,K]=l[he],V=oe=>[ue+K[0]*oe,ce+K[1]*oe,me+K[2]*oe];I.push(ze(ft(re,.0017,14),V(0),q),ze(new un(re*.95,14,6,0,Math.PI*2,0,Math.PI/2),V(.0017/2),q,[1,.55,1]));let te=V(.0017/2+re*.52);N.push(ze(new dt(re*1.3,4e-4,4e-4),te,q),ze(new dt(4e-4,4e-4,re*1.3),te,q))}a(j,I,je.steel,Ae.zinc),a(j,N,"#17181c",{r:.7})}let h=(j,ne,re,I)=>[ze(vd(.0035,I),[j,ne,re]),ze(ft(.0016,I+.006,10),[j,ne,re])],u=.0965,d=.035,f=s("base","Base plate",new Mt(0,0,0),[0,0,0],0,1);{let j=[],ne=[];for(let I of[-.04,.115])for(let N of[-.048,.048])j.push([I-d,N,.0017]);for(let I of[-.012,.012])j.push([.115-d+.008,I,.0013]);ne.push([-.02-d,-.036,.024,.006],[-.02-d,.036,.024,.006],[.045-d,0,.04,.008],[.098-d,0,.012,.022]),r(f,e0(.2,.116,.003,j,ne,.007),je.black,[d,.0285,0],Ae.acrylic);let re=[];for(let I of[-.04,.115])for(let N of[-.048,.048])re.push(ze(vd(.0035,.0026),[I,.027,N])),re.push(ze(ft(.0058,7e-4,18),[I,.0283,N]));a(f,re,je.steel,Ae.zinc)}let m=s("caster","Ball caster",new Mt(0,0,0),[.06,.05,0],.62,.92);r(m,new un(.0112,40,24),je.steel,[.115,.0125,0],Ae.steel),a(m,[ze(ft(.0105,.004,30),[.115,.0178,0]),ze(ct(.026,.0035,.026,.0035),[.115,.0231,0])],"#1e2025",Ae.blackPlastic),c(m,[[.1245,.0251,.0095,"y+"],[.1055,.0251,.0095,"y+"],[.1245,.0251,-.0095,"y+"],[.1055,.0251,-.0095,"y+"]],.002);let x=s("deck","Electronics deck",new Mt(0,0,0),[0,.12,0],.46,.82);{let ne=[],re=[];for(let me of[-.04,.115])for(let he of[-.048,.048])ne.push([me-.0375,he,.0017]);let I=(me,he)=>[.04+(me-34.3)/1e3-.0375,-.034+(he-26.7)/1e3,.0016],N=(me,he)=>[.085+(me-21.5)/1e3-.0375,.034+(he-21.5)/1e3,.0016];ne.push(I(14,2.5),I(15.3,50.7),I(66.1,7.6),I(66.1,35.5),N(3,3),N(40,3),N(3,40),N(40,40)),re.push([.062-.0375,0,.1,.014]),r(x,e0(.175,.116,.003,ne,re,.007),je.black,[.0375,.0615,0],Ae.acrylic);let ee=[];for(let me of[-.04,.115])for(let he of[-.048,.048])ee.push(...h(me,.0465,he,.03));a(x,ee,je.steel,Ae.alu),c(x,[[-.04,.0648,-.048],[-.04,.0648,.048],[.115,.0648,-.048],[.115,.0648,.048]]);for(let me of[-.0295,.0295])r(x,Sr(.068,.017,.003,3,.0022),je.yellow,[-.045,.0645+.034,me],{...Ae.yellow,rot:[0,0,Math.PI/2]});let ue=[],ce=[];for(let me of[ge.pivot[1],ge.pivot[1]+.035]){ue.push(ze(ft(.0022,.066,14),[-.045,me,0],[Math.PI/2,0,0]));for(let he of[-.0335,.0335])ce.push(ze(new wi(.0034,6e-4,8,18),[-.045,me,he]))}a(x,ue,je.steel,Ae.steel),a(x,ce,je.steel,Ae.zinc),c(x,[[-.045-0,.0645+.0095,-.031,"z-"],[-.045,.0645+.0095,.031,"z+"],[-.045,.0645+.0595,-.031,"z-"],[-.045,.0645+.0595,.031,"z+"]].filter((me,he)=>he<2),.0021)}let g=s("battery","Battery pack (4 x AA)",new Mt(0,0,0),[-.12,.05,0],.5,.82);{a(g,[ze(ct(.066,.0035,.06,.002),[-.03,.0395-.0062,0]),ze(ct(.0035,.0165,.06,.0012),[-.03-.0313,.0395+2e-4,0]),ze(ct(.0035,.0165,.06,.0012),[-.03+.0313,.0395+2e-4,0]),ze(ct(.066,.0165,.003,.001),[-.03,.0395+2e-4,-.0285]),ze(ct(.066,.0165,.003,.001),[-.03,.0395+2e-4,.0285]),...[-.0145,0,.0145].map(I=>ze(ct(.06,.012,.0014,5e-4),[-.03,.0395+5e-4,I]))],"#17181c",Ae.blackPlastic);for(let I=0;I<4;I++){let N=(I-1.5)*.0145,ee=I%2?-1:1;r(g,ft(.00705,.049,28),"#1b1c20",[-.03,.0395+.0016,N],{...Ae.pvc,rot:[0,0,Math.PI/2]}),r(g,ft(.00708,.0125,28),"#c47a2c",[-.03-.012*ee,.0395+.0016,N],{r:.35,m:.5,rot:[0,0,Math.PI/2]}),r(g,ft(.0032,.001,14),je.steel,[-.03+.025*ee,.0395+.0016,N],{...Ae.steel,rot:[0,0,Math.PI/2]})}a(g,[-.0218,0,.0218].map(I=>ze(ft(.0036,.0016,12),[-.03+.0297,.0395+.0016,I],[0,0,Math.PI/2])),je.steel,Ae.steel);let re=(I,N)=>r(g,new ps(new Yi([new Mt(-.03-.0315,.0395+.002,N),new Mt(-.03-.04,.0395+.002,N*.8),new Mt(-.03-.046,.0395+.012,N*.4)]),12,9e-4,8),I,[0,0,0],Ae.pvc);re("#c62a2a",.0225),re("#161616",-.0225)}for(let j of[-1,1]){let ne=j<0?"L":"R",re=s("motor"+ne,`${j<0?"Left":"Right"} drive motor (TT 1:48)`,new Mt(0,0,0),[0,0,j*.12],.6,.9),I=j*.069,N=.0325,ee=j>0?"z+":"z-";r(re,ct(.062,.0225,.0225,.004),"#f1c027",[.002,N,I],Ae.yellow),r(re,ct(.064,.0016,.0234,8e-4),"#c99a12",[.002,N,I],Ae.yellow);let ue=[];for(let me of[-.018,-.006,.006,.018])ue.push(ze(ct(.0035,.0023,.0236,6e-4),[.002+me,N+.0124,I]),ze(ct(.0035,.0023,.0236,6e-4),[.002+me,N-.0124,I]));a(re,ue,"#e8b81f",Ae.yellow);let ce=I+j*.0112;c(re,[[-.0125,N+.0065,ce,ee],[.0165,N+.0065,ce,ee],[-.0125,N-.0065,ce,ee],[.0165,N-.0065,ce,ee]],.0019),r(re,ft(.0098,.028,32),"#a4a9b0",[-.046,N,I],{...Ae.steel,rot:[0,0,Math.PI/2]}),r(re,ft(.01,.004,32),"#1a1b20",[-.062,N,I],{...Ae.blackPlastic,rot:[0,0,Math.PI/2]}),r(re,ft(.0034,.003,16),"#c9ccd2",[-.0655,N,I],{...Ae.steel,rot:[0,0,Math.PI/2]}),a(re,[ze(new dt(.0034,.0016,.003),[-.0665,N+.0049,I-.0034]),ze(new dt(.0034,.0016,.003),[-.0665,N+.0049,I+.0034])],je.gold,Ae.gold);for(let[me,he]of[[-1,"#c42b2b"],[1,"#18181a"]])r(re,new ps(new Yi([new Mt(-.067,N+.005,I+me*.0034),new Mt(-.078,N+.01,I+me*.006),new Mt(-.09,N+.004,I+me*.016)]),12,7e-4,6),he,[0,0,0],Ae.pvc);r(re,ft(.0027,.027,16),je.steel,[0,N,j*.0885],{...Ae.steel,rot:[Math.PI/2,0,0]}),r(re,new dt(.0034,.0042,.0075),"#c9ccd2",[0,N,j*.1005],Ae.steel),r(re,ft(.0027,.013,16),je.steel,[0,N,j*.0517],{...Ae.steel,rot:[Math.PI/2,0,0]})}let p={};for(let j of[-1,1]){let ne=j<0?"L":"R",re=s("wheel"+ne,`${j<0?"Left":"Right"} drive wheel`,new Mt(0,ge.wheelR,j*u),[0,0,j*.2],.72,1),I=o(re),N=new Bs;N.absarc(0,0,.0286,0,Math.PI*2);for(let oe=0;oe<5;oe++){let xe=oe*Math.PI*2/5,ye=new $i,Ue=.0108,We=.0246,L=.2,ot=.13;ye.moveTo(Math.cos(xe-L)*Ue,Math.sin(xe-L)*Ue),ye.absarc(0,0,We,xe-ot,xe+ot,!1),ye.absarc(0,0,Ue,xe+L,xe-L,!0),ye.closePath(),N.holes.push(ye)}let ee=new fr(N,{depth:.01,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28});ee.translate(0,0,-.005),r(re,ee,je.yellow,[0,0,0],Ae.yellow,I),r(re,new wi(.0272,.0017,10,64),je.yellow,[0,0,j*.0058],Ae.yellow,I),r(re,new _n(.0108,.0128,.014,32),je.yellow,[0,0,0],{...Ae.yellow,rot:[Math.PI/2,0,0]},I),r(re,new un(.0072,24,10,0,Math.PI*2,0,Math.PI/2),je.yellow,[0,0,j*.0068],{...Ae.yellow,rot:[j*Math.PI/2,0,0]},I),a(re,[ze(vd(.004,.003),[0,0,j*.0092],[Math.PI/2,0,0]),ze(ft(.0021,.005,12),[0,0,j*.0108],[Math.PI/2,0,0])],je.steel,Ae.zinc,I);let ue=[],ce=.0128,me=.0286,he=.0324,q=.0018;ue.push([me,-ce],[he-q,-ce],[he-q*.3,-ce+q*.4],[he,-ce+q],[he,ce-q],[he-q*.3,ce-q*.4],[he-q,ce],[me,ce]),r(re,new ks(ue.map(([oe,xe])=>new ve(oe,xe)),80),je.tyre,[0,0,0],{...Ae.rubber,rot:[Math.PI/2,0,0]},I);let K=[];for(let oe=0;oe<44;oe++){let xe=oe/44*Math.PI*2;K.push(ze(ct(.0017,.0017,.02,6e-4),[Math.cos(xe)*.0325,Math.sin(xe)*.0325,0],[0,0,xe]))}a(re,K,je.tyre,Ae.rubber,I),p[ne]=I;let V=s("band"+ne,`${j<0?"Left":"Right"} rubber bands`,new Mt(0,ge.wheelR,j*u),[0,.1,j*.3],.78,1),te=o(V);for(let oe of[-.0066,.0066]){let xe=new ks([[he-2e-4,-.0017],[he+ge.bandT*.8,-.0017],[he+ge.bandT,-.0012],[he+ge.bandT,.0012],[he+ge.bandT*.8,.0017],[he-2e-4,.0017]].map(([ye,Ue])=>new ve(ye,Ue)),80);r(V,xe,je.band,[0,0,oe],{r:.5,cc:.35,ccr:.5,sheen:.6,sheenColor:"#ffd9a0",rot:[Math.PI/2,0,0]},te)}p[ne+"band"]=te,p[ne+"bandPart"]=V}let v=s("sonar","Ultrasonic sensor (HC-SR04)",new Mt(0,0,0),[.16,.02,0],.38,.7);{let ne=ge.sensorY,re=xd(45,20,"#0d4f9c",(ee,ue,ce,me,he)=>{he.hole(2.2,2.2),he.hole(42.8,2.2),he.hole(2.2,17.8),he.hole(42.8,17.8),he.text("HC-SR04",22.5,10,26,"center"),he.text("Ultrasonic Sensor",22.5,14.2,11,"center"),he.text("VCC  TRIG  ECHO  GND",22.5,18.6,9,"center")}),I=Wo("#0d4f9c",{r:.5,cc:.6,ccr:.15}),N=new Qn({map:re,roughness:.5,clearcoat:.6,clearcoatRoughness:.15});r(v,new dt(.0016,.02,.045),"",[.1375,ne,0],{},null,[N,I,I,I,I,I]);for(let ee of[-.0105,.0105]){let ue=wr(128,128,(ce,me,he)=>{ce.fillStyle="#17181c",ce.fillRect(0,0,me,he),ce.fillStyle="#3a3d44";for(let q=6;q<he;q+=9)for(let K=q/9%2*4.5+5;K<me;K+=9)ce.beginPath(),ce.arc(K,q,2.4,0,7),ce.fill()});r(v,ft(.0082,.0128,40),je.silver,[.145,ne,ee],{...Ae.steel,rot:[0,0,Math.PI/2]}),r(v,ft(.0067,.001,40),"#ffffff",[.1517,ne,ee],{r:.5,map:ue,rot:[0,0,Math.PI/2]}),r(v,new wi(.0074,7e-4,8,40),je.silver,[.1514,ne,ee],{...Ae.steel,rot:[0,Math.PI/2,0]})}r(v,new _n(.0021,.0021,.009,16),je.silver,[.1375-.0045,ne+0,-.0072],{...Ae.steel,rot:[0,0,Math.PI/2]}),a(v,[ze(ct(.0016,.005,.0095,4e-4),[.1375-.0014,ne+.0032,.0155]),ze(ct(.0016,.0045,.0085,4e-4),[.1375-.0014,ne-.0045,.009]),ze(ct(.0014,.003,.004,3e-4),[.1375-.0013,ne-.001,-.002])],"#111216",Ae.chip),a(v,[ze(ct(.0026,.0026,.0106,4e-4),[.1375-.002,ne-.0098,0])],"#14151a",Ae.blackPlastic),["#d33","#e8a31a","#2a9d4a","#161616"].forEach((ee,ue)=>r(v,new ps(new Yi([new Mt(.1375-.003,ne-.0106,(ue-1.5)*.0025),new Mt(.1375-.007,ne-.015,(ue-1.5)*.002),new Mt(.1375-.02,ne-.016,(ue-1.5)*.003),new Mt(.1375-.034,ne-.01,(ue-1.5)*.006)]),14,7e-4,6),ee,[0,0,0],Ae.pvc))}let T=s("arduino","Microcontroller board",new Mt(0,0,0),[0,.2,-.09],.18,.5);{let ee=[[18,3.3,10],[44.5,3.3,8],[27.9,47.4,8],[50.8,47.4,6]],ue=xd(68.6,53.4,"#0b6aa6",(V,te,oe,xe,ye)=>{ye.hole(14,2.5),ye.hole(15.3,50.7),ye.hole(66.1,7.6),ye.hole(66.1,35.5),ye.text("UNO R3",36,20.5,32,"center"),ye.text("ATmega328P  16MHz",36,25,13,"center"),ye.text("DIGITAL (PWM~)",38,7.4,11,"center"),ye.text("ANALOG IN",57,43.6,11,"center"),ye.text("POWER",37,43.6,11,"center"),ye.text("RESET",6.7,11.4,10,"center"),ye.text("TX RX L",52,13.8,10,"center"),ye.text("ICSP",63,27,10,"center"),V.font="700 34px sans-serif",V.textAlign="center",V.fillStyle="#fff",V.fillText("\u221E",16*te,31*te);for(let[Ue,We,L]of ee)ye.box(Ue-1.4,We-1.5,2.54*L+.3,3)}),ce=Wo("#0b6aa6",{r:.5,cc:.6,ccr:.15}),me=new Qn({map:ue,roughness:.5,clearcoat:.6,clearcoatRoughness:.15});r(T,new dt(68.6/1e3,.0016,53.4/1e3),"",[.04,.0653,-.034],{},null,[ce,ce,me,ce,ce,ce]);let he=(V,te,oe=0)=>[.04+(V-68.6/2)/1e3,.0653+8e-4+oe,-.034+(te-53.4/2)/1e3];r(T,ct(.016,.0115,.0122,6e-4),je.silver,he(5,15.5,.0058),Ae.steel),r(T,ct(.003,.007,.0075,4e-4),"#0a0b0e",he(-3.2,15.5,.0058),{r:.6}),r(T,ct(.014,.0112,.009,8e-4),"#15161a",he(5.5,46.5,.0056),Ae.blackPlastic),r(T,ft(.0016,.003,14),"#1d1e22",he(-.8,46.5,.0058),{r:.6,rot:[0,0,Math.PI/2]});let q=[],K=[];K.push(ze(ct(.035,.0034,.0078,4e-4),he(45,34,.003)),ze(ct(.0352,.0036,.0098,5e-4),he(45,34,.0014)));for(let V=0;V<14;V++)for(let te of[-1,1])q.push(ze(new dt(6e-4,.0034,6e-4),he(29.1+V*2.54,34+te*4,.001)));a(T,K,"#14151a",Ae.chip),a(T,q,je.steel,Ae.steel),r(T,ct(.012,.0036,.0045,.0012),je.silver,he(22,26,.0021),Ae.steel),r(T,ct(.007,.0014,.007,3e-4),"#111216",he(33,13,8e-4),Ae.chip),a(T,[ze(ft(.0026,.007,16),he(15.5,30,.0035)),ze(ft(.0026,.007,16),he(15.5,36.5,.0035))],"#9aa0a8",Ae.alu),a(T,[ze(ft(.0027,.0016,16),he(15.5,30,.0073)),ze(ft(.0027,.0016,16),he(15.5,36.5,.0073))],"#111111",{r:.6}),r(T,ct(.009,.0075,.003,4e-4),"#16171b",he(11.8,40,.0038),Ae.blackPlastic),r(T,ct(.009,.001,.009,3e-4),"#c9ccd2",he(11.8,40,.0078),Ae.steel),r(T,ct(.0062,.0035,.0062,7e-4),"#8a8d93",he(6.7,6.5,.0018),Ae.blackPlastic),r(T,ft(.0019,.001,14),"#d11",he(6.7,6.5,.004),{r:.3,cc:1}),a(T,[0,1,2].map(V=>ze(ct(.0016,8e-4,.001,2e-4),he(52+V*3,16.4,6e-4))),"#ffcb3a",{r:.3,cc:1});for(let[V,te,oe]of ee)a(T,[ze(ct(.00254*oe+4e-4,.0085,.0026,4e-4),he(V+1.27*(oe-1),te,.0044))],"#17181c",Ae.blackPlastic),a(T,Array.from({length:oe},(xe,ye)=>ze(new dt(.0016,3e-4,.0016),he(V+ye*2.54,te,.00885))),"#000000",{r:.9});a(T,Array.from({length:6},(V,te)=>ze(new dt(6e-4,.006,6e-4),he(61.8+te%2*2.54,33+Math.floor(te/2)*2.54,.0028))),je.gold,Ae.gold)}let _=s("l298n","Motor driver (L298N)",new Mt(0,0,0),[.03,.14,.1],.18,.5);{let ee=xd(43,43,"#a31e25",(K,V,te,oe,xe)=>{xe.hole(3,3),xe.hole(40,3),xe.hole(3,40),xe.hole(40,40),xe.text("L298N",21.5,8.5,34,"center"),xe.text("DUAL H-BRIDGE",21.5,12.6,11,"center"),xe.text("OUT1 OUT2",9.5,21.5,9,"center",-Math.PI/2),xe.text("OUT3 OUT4",34,21.5,9,"center",Math.PI/2),xe.text("12V   GND   5V",21.5,36.2,10,"center"),xe.text("ENA IN1 IN2 IN3 IN4 ENB",21.5,6.4,8,"center")},{trace:"rgba(255,200,160,0.10)"}),ue=Wo("#a31e25",{r:.5,cc:.6,ccr:.15}),ce=new Qn({map:ee,roughness:.5,clearcoat:.6,clearcoatRoughness:.15});r(_,new dt(43/1e3,.0016,43/1e3),"",[.085,.0653,.034],{},null,[ue,ue,ce,ue,ue,ue]);let me=(K,V,te=0)=>[.085+(K-43/2)/1e3,.0653+8e-4+te,.034+(V-43/2)/1e3],he=[ze(ct(.028,.003,.0172,8e-4),me(21.5,21.5,.003))];for(let K=0;K<8;K++)he.push(ze(ct(.027,.016,.0011,3e-4),me(21.5,21.5-6.4+K*1.83,.0106)));a(_,he,"#1d1f24",{...Ae.alu,r:.45}),r(_,ct(.02,.015,.005,6e-4),"#0f1013",me(21.5,29,.0075),Ae.chip),a(_,Array.from({length:15},(K,V)=>ze(new dt(5e-4,.003,5e-4),me(14.6+V*1,32.2,.0015))),je.steel,Ae.steel);let q=(K,V,te)=>{r(_,ct(te?.01:.015,.01,te?.015:.01,8e-4),"#1e63cf",me(K,V,.0058),{r:.4,cc:.4}),a(_,[0,1].map(oe=>ze(ft(.0024,.0014,14),me(K+(te?0:oe?3.3:-3.3),V+(te?oe?3.3:-3.3:0),.0112))),je.gold,Ae.brass)};q(4.8,14,!0),q(4.8,29,!0),q(38.2,14,!0),q(38.2,29,!0),q(21.5,39.5,!1),a(_,[ze(ft(.004,.0105,20),me(9,35,.0053)),ze(ft(.004,.0105,20),me(33.5,35,.0053))],"#b6bcc4",Ae.alu),a(_,[ze(ft(.0041,.001,20),me(9,35,.0108)),ze(ft(.0041,.001,20),me(33.5,35,.0108))],"#121316",{r:.6}),a(_,Array.from({length:8},(K,V)=>ze(ct(.005,.0022,.0026,4e-4),me(14+V%4*5,V<4?18:25,.0011))),"#14151a",Ae.chip),r(_,ct(.0165,.0085,.0025,4e-4),"#17181c",me(21.5,3.3,.0043),Ae.blackPlastic),a(_,Array.from({length:6},(K,V)=>ze(new dt(6e-4,.007,6e-4),me(14+V*2.54,3.3,.007))),je.gold,Ae.gold),a(_,[ze(ct(.005,.005,.0026,4e-4),me(14.2,3.3,.003)),ze(ct(.005,.005,.0026,4e-4),me(29.4,3.3,.003))],"#e8b400",Ae.blackPlastic)}let w=s("ballast","Brass ballast weight",new Mt(0,0,0),[-.1,.1,.08],.18,.5);r(w,ft(.017,.0235,56),je.gold,[-.015,.0645+.01175,.036],{...Ae.brass,bump:m1,bs:1.2}),r(w,new _n(.0158,.017,.0016,56),je.gold,[-.015,.0645+.0243,.036],Ae.brass),r(w,new _n(.0156,.014,.0011,56),je.gold,[-.015,.0645+.0256,.036],Ae.brass),c(w,[[-.015,.0645+.0262,.036,"y+"]],.003);let E=wr(128,64,(j,ne,re)=>{j.fillStyle="#d7d9de",j.fillRect(0,0,ne,re),j.fillStyle="#1a1c22",j.font="700 26px sans-serif",j.textAlign="center",j.fillText("SG90",64,26),j.font="11px sans-serif",j.fillText("9g MICRO SERVO",64,48)}),A=Wo("#1f4fc9",{r:.35,cc:.7,ccr:.12,bump:Xo,bs:.3}),M=()=>new Qn({map:E,roughness:.5}),b=s("liftServo","Arm lift servo (SG90)",new Mt(0,0,0),[.06,.04,.16],.28,.6);{let j=ge.servo[0],ne=ge.servo[1],re=-.01;r(b,new dt(.0227,.0227,.0125),"",[j,ne,re],{},null,[A,A,A,A,A,M()]),r(b,ct(.0355,.0026,.0125,5e-4),"#1f4fc9",[j,ne+.006,re],{r:.35,cc:.7}),r(b,ct(.0125,.004,.0125,8e-4),"#f1f3f6",[j,ne+.0132,re],{r:.35,cc:.6}),r(b,new _n(.0043,.0043,.005,24),je.white,[j,ne,re+.009],{r:.35,rot:[Math.PI/2,0,0]}),a(b,[-.0138,.0138].map(I=>ze(new wi(.0011,5e-4,8,14),[j+I,ne+.0074,re])),je.steel,Ae.steel),["#5b3a1d","#c62a2a","#e69a1a"].forEach((I,N)=>r(b,new ps(new Yi([new Mt(j-.0113,ne-.004,re+(N-1)*.003),new Mt(j-.02,ne-.006,re+(N-1)*.0034),new Mt(j-.034,ne-.001,re+(N-1)*.004)]),12,6e-4,6),I,[0,0,0],Ae.pvc))}let C=o(b,[ge.servo[0],ge.servo[1],0]);r(b,ft(.005,.003,24),je.white,[0,0,-.0013],{r:.35,rot:[Math.PI/2,0,0]},C),r(b,Sr(ge.horn+.01,.0075,.0022,4,9e-4),je.white,[ge.horn/2,0,-.0013],{r:.35,cc:.4},C),r(b,ft(.0016,.005,12),je.steel,[0,0,-.0013],{...Ae.steel,rot:[Math.PI/2,0,0]},C);let P=s("pushrod","Pushrod link",new Mt(0,0,0),[.08,.2,.08],.1,.45);r(P,Sr(ge.rod+.01,.0075,.003,9,.0015),je.yellow,[0,0,.0015],Ae.yellow),a(P,[ze(ft(.0021,.007,14),[-ge.rod/2,0,.0015],[Math.PI/2,0,0]),ze(ft(.0021,.007,14),[ge.rod/2,0,.0015],[Math.PI/2,0,0]),ze(ft(.0035,6e-4,16),[-ge.rod/2,0,.0052],[Math.PI/2,0,0]),ze(ft(.0035,6e-4,16),[ge.rod/2,0,.0052],[Math.PI/2,0,0])],je.steel,Ae.steel);let F=s("arm","Arm (parallelogram)",new Mt(0,0,0),[-.03,.2,0],.04,.44),B=o(F,[ge.pivot[0],ge.pivot[1],0]),D=o(F,[ge.pivot[0],ge.pivot[1]+.035,0]);for(let j of[-.018,.018])r(F,Sr(ge.armLen+.012,.0125,.0042,11,.0026),je.yellow,[ge.armLen/2,0,j],Ae.yellow,B),r(F,Sr(ge.armLen+.012,.0105,.0042,11,.0022),je.yellow,[ge.armLen/2,0,j],Ae.yellow,D);a(F,[ze(ft(.0022,.042,14),[ge.armAttach,0,0],[Math.PI/2,0,0]),...[0,ge.armLen].map(j=>ze(ft(.0021,.046,14),[j,0,0],[Math.PI/2,0,0]))],je.steel,Ae.steel,B),a(F,[0,ge.armLen].map(j=>ze(ft(.0021,.046,14),[j,0,0],[Math.PI/2,0,0])),je.steel,Ae.steel,D);let z=s("gripper","Gripper (3D-printed claw)",new Mt(0,0,0),[.1,.18,0],0,.36);r(z,ct(.008,.044,.054,.002),je.teal,[0,.0175,0],Ae.teal),r(z,ct(.032,.032,.048,.0035),je.teal,[.0165,-.003,0],Ae.teal),r(z,ct(.005,.03,.038,.0014),"#13706a",[.033,-.003,0],Ae.teal),c(z,[[-.0042,.0295,-.0205,"x-"],[-.0042,.0295,.0205,"x-"],[-.0042,.0055,-.0205,"x-"],[-.0042,.0055,.0205,"x-"],[.0165,.013,.0242,"z+"],[.0165,.013,-.0242,"z-"]],.002);let W=o(z,[.036,-.012,-.0165]),J=o(z,[.036,-.012,.0165]);for(let[j,ne]of[[W,-1],[J,1]])r(z,Sr(.07,.0245,.0034,0,0),je.teal,[.035,0,ne*.0017],Ae.teal,j),r(z,ct(.014,.0235,.002,8e-4),"#101114",[.0645,0,ne*-3e-4],Ae.rubber,j),a(z,[ze(ft(.0042,.005,18),[0,0,ne*.0017],[Math.PI/2,0,0]),ze(ft(.0021,.005,12),[.034,0,ne*.0017],[Math.PI/2,0,0])],je.steel,Ae.steel,j);let le={jawL:W,jawR:J},G=s("jawServo","Claw servo (SG90)",new Mt(0,0,0),[.05,.3,0],0,.36);r(G,new dt(.0227,.0125,.0227),"",[0,0,0],{},null,[A,A,M(),A,A,A]),r(G,ct(.0355,.0026,.0227,5e-4),"#1f4fc9",[0,-.001,0],{r:.35,cc:.7}),r(G,ft(.0057,.005,24),je.white,[.0046,.0083,0],{r:.35}),r(G,Sr(.017,.0075,.0022,3,9e-4),je.white,[.0046,.0112,0],{r:.35,rot:[Math.PI/2,0,0]});let Z=s("nameplate","Name plate",new Mt(0,0,0),[-.15,0,0],.36,.7);{let j=document.createElement("canvas");j.width=512,j.height=256;let ne=j.getContext("2d");ne.drawImage(jp.image,0,0,512,256),ne.fillStyle="#251a10",ne.font='600 112px "Segoe Print","Bradley Hand","Comic Sans MS",cursive',ne.textAlign="center",ne.textBaseline="middle",ne.save(),ne.translate(256,138),ne.rotate(-.025),ne.fillText("Patrick",0,0),ne.restore();let re=new Xi(j);re.colorSpace=Vt,re.anisotropy=8;let I=new Qn({color:je.mdf,roughness:.85,map:jp}),N=new Qn({map:re,roughness:.8}),ee=new tt(new di(.004,.044,.088,3,.0012),[N,N.clone(),I,I.clone(),I.clone(),I.clone()]);ee.position.set(-.071,.052,0),ee.castShadow=ee.receiveShadow=!0,ee.userData.part="nameplate",ee.material.forEach(ue=>Z.mats.push(ue)),Z.group.add(ee),Z.meshes.push(ee),i.push(ee),c(Z,[[-.069,.066,-.037,"x+"],[-.069,.066,.037,"x+"]],.0016)}let se=s("wiring","Wiring",new Mt(0,0,0),[0,.1,.04],.1,.4);{let j=[["#d33",[[-.05,.048,.02],[-.04,.057,.03],[0,.07,.045],[.07,.076,.044]]],["#222",[[-.05,.048,.014],[-.03,.058,.04],[.02,.072,.052],[.065,.075,.05]]],["#2a9d4a",[[.07,.074,.02],[.08,.068,0],[.092,.05,-.006],[.09,.044,-.01]]],["#e8a31a",[[.03,.076,-.012],[.06,.084,0],[.09,.072,.014],[.085,.076,.03]]],["#3b82f6",[[0,.076,-.05],[-.01,.04,-.062],[.01,.046,-.068],[.002,.0325,-.069]]],["#8b5cf6",[[0,.076,-.058],[-.02,.05,-.065],[-.03,.04,.066],[-.04,.034,.069]]],["#dddddd",[[.135,.05,-.01],[.12,.062,-.02],[.09,.072,-.026],[.06,.073,-.03]]],["#d33",[[.135,.048,.01],[.12,.066,.03],[.1,.073,.034]]]],ne=[];for(let[re,I]of j){let N=new Yi(I.map(ee=>new Mt(...ee)));r(se,new ps(N,32,95e-5,8),re,[0,0,0],Ae.pvc);for(let ee of[0,1]){let ue=N.getPoint(ee);ne.push(ze(ct(.0026,.0026,.0026,5e-4),[ue.x,ue.y,ue.z]))}}a(se,ne,"#17181c",Ae.blackPlastic),a(se,[[.02,.0725,.0495],[.04,.0735,.0452]].map(([re,I,N])=>ze(new wi(.0026,4e-4,6,16),[re,I,N],[0,Math.PI/2,0])),"#f1f1ee",{r:.5})}let Me={theta:1,tip:[0,0]};function be({phi:j,jaw:ne,wl:re,wr:I,bands:N,u:ee}){let ue=Hn(j);if(ue){Me.theta=ue.theta,C.rotation.z=j;let K=ue.A,V=ue.H;P.base.set((K[0]+V[0])/2,(K[1]+V[1])/2,0),P.group.rotation.z=Math.atan2(K[1]-V[1],K[0]-V[0]),B.rotation.z=ue.theta,D.rotation.z=ue.theta;let te=ge.pivot[0]+ge.armLen*Math.cos(ue.theta),oe=ge.pivot[1]+ge.armLen*Math.sin(ue.theta);Me.tip=[te,oe],z.base.set(te,oe,0),G.base.set(te+.0165,oe+.0205,0)}let ce=ne*28*Math.PI/180;le.jawL.rotation.y=ce,le.jawR.rotation.y=-ce,p.L.rotation.z=-re,p.R.rotation.z=-I,p.Lband.rotation.z=-re,p.Rband.rotation.z=-I;let me=!!N,he=me||ee>.02;for(let K of["L","R"]){let V=p[K+"bandPart"];V.group.visible=he,V.group.traverse(te=>{te.isMesh&&(te.visible=he)})}n.userData.lift=me?ge.bandT:0;let q=(K,V,te)=>{let oe=Math.min(1,Math.max(0,(K-V)/(te-V)));return oe*oe*(3-2*oe)};for(let K of e){let V=q(ee,K.a,K.b);K.group.position.copy(K.base).addScaledVector(K.explode,V)}return Me}return{root:n,parts:e,byId:t,meshes:i,pose:be,state:Me,jaws:le}}var Gn=n=>-n;var yd=11,zt=()=>(yd=yd*16807%2147483647,yd/2147483647);function ws(n,e,t,i=!0,s){let r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);let a=new Xi(r);return i&&(a.colorSpace=Vt),a.anisotropy=8,s&&(a.wrapS=a.wrapT=An,a.repeat.set(...s)),a}var bt=(n,e={})=>new Qn({color:n,roughness:.5,metalness:0,...e});function es(n){return n.castShadow=n.receiveShadow=!0,n}function ii(n,e,t=40){return es(new tt(new ks(n.map(([i,s])=>new ve(i,s)),t),e))}function wh(n,e,t,i={}){let s=new Ht,r=ws(512,Math.round(512*t/e),(l,c,h)=>{l.fillStyle=i.bg||"#161c3e",l.fillRect(0,0,c,h),l.strokeStyle=i.color||"#a78bfa",l.lineWidth=6,l.strokeRect(5,5,c-10,h-10),l.fillStyle=i.color||"#a78bfa",l.font=`700 ${i.px||.52*h}px "Chakra Petch", "JetBrains Mono", sans-serif`,l.textAlign="center",l.textBaseline="middle",i.spacing&&(l.letterSpacing=i.spacing),l.fillText(n,c/2,h/2+3)}),a=es(new tt(new dt(e,t,.004),bt("#2a2f55",{roughness:.6}))),o=new tt(new jn(e-.002,t-.002),new sn({map:r,toneMapped:!1}));return o.rotation.y=Math.PI,o.position.z=-.0022,s.add(a,o),s.position.y=t/2+.002,s}var y1={eggs(){let n=new Ht,e=ws(128,128,(s,r,a)=>{s.fillStyle="#a7a094",s.fillRect(0,0,r,a);for(let o=0;o<2600;o++){let l=120+zt()*70;s.fillStyle=`rgba(${l},${l-8},${l-20},0.5)`,s.fillRect(zt()*r,zt()*a,2,2)}},!0,[2,2]),t=bt("#ffffff",{map:e,roughness:.95}),i=es(new tt(new di(.068,.02,.034,3,.003),t));i.position.y=.01,n.add(i);for(let s of[-.017,.017]){let r=ii([[0,.02],[.0125,.02],[.0135,.026],[.0128,.0275],[0,.0275]],t,24);r.position.set(s,0,0),n.add(r);let a=es(new tt(new un(1,36,28),bt("#efe0c6",{roughness:.42,clearcoat:.25,clearcoatRoughness:.5})));a.scale.set(.0146,.0212,.0146),a.position.set(s,.0232+.0212*.82,0),n.add(a)}return n.userData.top=.062,n},salt(){let n=new Ht,e=bt("#d8ecff",{transparent:!0,opacity:.28,roughness:.04,clearcoat:1,clearcoatRoughness:.02,side:Kt,depthWrite:!1,envMapIntensity:1.6});n.add(ii([[0,0],[.0155,0],[.0175,.004],[.018,.012],[.018,.05],[.0165,.057],[.015,.059]],e));let t=bt("#f4f4f2",{roughness:.95});n.add(ii([[0,.002],[.0165,.002],[.017,.012],[.017,.042],[0,.044]],t,28));let i=bt("#c9ced6",{metalness:1,roughness:.22,envMapIntensity:1.4});n.add(ii([[.015,.056],[.016,.058],[.016,.068],[.0148,.0715],[0,.0715]],i,36));let s=[];for(let a=0;a<7;a++){let o=a/6*Math.PI*2,l=a?.0075:0;s.push(new Qa(.0011,8).rotateX(-Math.PI/2).translate(Math.cos(o)*l,.0717,Math.sin(o)*l))}let r=new tt(M1(s),new sn({color:"#15171b"}));return n.add(r),n.userData.top=.072,n},spice(){let n=new Ht,e=bt("#e4f0ff",{transparent:!0,opacity:.26,roughness:.04,clearcoat:1,side:Kt,depthWrite:!1,envMapIntensity:1.5});n.add(ii([[0,0],[.0175,0],[.019,.004],[.019,.05],[.0175,.054]],e)),n.add(ii([[0,.002],[.0178,.002],[.0183,.01],[.0183,.046],[0,.048]],bt("#c4491a",{roughness:.95}),28));let t=ws(256,96,(s,r,a)=>{s.fillStyle="#f2ead8",s.fillRect(0,0,r,a),s.fillStyle="#9b2c12",s.fillRect(0,0,r,14),s.fillRect(0,a-14,r,14),s.fillStyle="#2a1a10",s.font='700 40px "Chakra Petch", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("PAPRIKA",r/2,a/2+2)}),i=es(new tt(new _n(.0194,.0194,.026,40,1,!0),bt("#ffffff",{map:t,roughness:.7})));return i.position.y=.027,i.rotation.y=Math.PI/2,n.add(i),n.add(ii([[0,.0535],[.02,.0535],[.0205,.0545],[.0205,.0645],[.019,.066],[0,.066]],bt("#17181c",{roughness:.35,clearcoat:.6}),36)),n.userData.top=.066,n},sauce(){let n=new Ht,e=bt("#c2181f",{roughness:.28,clearcoat:1,clearcoatRoughness:.12});n.add(ii([[0,0],[.0175,0],[.02,.005],[.02,.07],[.0185,.082],[.012,.093],[.0085,.098]],e));let t=ws(256,128,(r,a,o)=>{r.fillStyle="#f6efe2",r.fillRect(0,0,a,o),r.fillStyle="#c2181f",r.beginPath(),r.arc(a/2,o/2,40,0,7),r.fill(),r.fillStyle="#fff",r.font='700 26px "Chakra Petch", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText("SAUCE",a/2,o/2+1)}),i=es(new tt(new _n(.0204,.0204,.034,40,1,!0),bt("#ffffff",{map:t,roughness:.6})));i.position.y=.04,i.rotation.y=Math.PI/2,n.add(i);let s=bt("#f1efe9",{roughness:.4,clearcoat:.5});return n.add(ii([[0,.0975],[.009,.0975],[.01,.098],[.01,.103],[.007,.11],[.0035,.115],[0,.116]],s,32)),n.userData.top=.116,n},glass(){let n=new Ht,e=bt("#dff0ff",{transparent:!0,opacity:.24,roughness:.02,clearcoat:1,clearcoatRoughness:.01,side:Kt,depthWrite:!1,envMapIntensity:1.8});n.add(ii([[0,0],[.017,0],[.0188,.003],[.02,.012],[.021,.07],[.0204,.0705]],e)),n.add(ii([[0,.0045],[.015,.0045],[.0172,.014],[.0182,.044],[0,.044]],bt("#7ec8ff",{transparent:!0,opacity:.34,roughness:.05,depthWrite:!1}),32));let t=new tt(new wi(.0207,7e-4,8,40),bt("#ffffff",{transparent:!0,opacity:.5,roughness:.05,depthWrite:!1}));return t.rotation.x=Math.PI/2,t.position.y=.0702,n.add(t),n.userData.top=.071,n}};function M1(n){let e=[],t=[],i=0;for(let r of n){let a=r.attributes.position;for(let o=0;o<a.count;o++)e.push(a.getX(o),a.getY(o),a.getZ(o));for(let o of r.index.array)t.push(o+i);i+=a.count}let s=new Pt;return s.setAttribute("position",new ht(e,3)),s.setIndex(t),s}function t0(n){let e=y1[n]();return e.userData.id=n,e}function n0(n){let e=new Ht;n.add(e);let t=(v,T,_,w,E)=>{let A=es(new tt(v,T));return A.position.set(_,w,E),e.add(A),A},i=ws(512,512,(v,T,_)=>{v.fillStyle="#272d3f",v.fillRect(0,0,T,_);for(let w=0;w<5200;w++){let E=110+zt()*120;v.fillStyle=`rgba(${E},${E+6},${E+24},${.05+zt()*.17})`,v.fillRect(zt()*T,zt()*_,1+zt()*2.4,1+zt()*2.4)}for(let w=0;w<24;w++){v.strokeStyle=`rgba(190,200,255,${.03+zt()*.04})`,v.lineWidth=1,v.beginPath();let E=zt()*T,A=zt()*_;v.moveTo(E,A);for(let M=0;M<5;M++)E+=(zt()-.3)*90,A+=(zt()-.5)*60,v.lineTo(E,A);v.stroke()}},!0,[5,4]),s=t(new dt(2.6,.05,2.1),bt("#ffffff",{map:i,roughness:.55,clearcoat:.12,clearcoatRoughness:.5,envMapIntensity:.45}),.1,-.025,0),r=ws(256,64,(v,T,_)=>{v.fillStyle="#5a3a24",v.fillRect(0,0,T,_);for(let w=0;w<160;w++)v.fillStyle=`rgba(${20+zt()*40},${10+zt()*20},5,${.1+zt()*.2})`,v.fillRect(zt()*T,zt()*_,30+zt()*120,1)},!0,[8,1]);t(new dt(2.62,.045,.03),bt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),.1,-.0225,-1.065),t(new dt(2.62,.045,.03),bt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),.1,-.0225,1.065),t(new dt(.03,.045,2.1),bt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),-1.215,-.0225,0),t(new dt(.03,.045,2.1),bt("#ffffff",{map:r,roughness:.55,clearcoat:.3}),1.415,-.0225,0),t(new dt(2.5,1,2),bt("#141a34",{roughness:.6}),.1,-.55,0);let a=new tt(new jn(14,14),bt("#0a0e22",{roughness:.4,clearcoat:.3}));a.rotation.x=-Math.PI/2,a.position.y=-1.05,a.receiveShadow=!0,e.add(a);let o=ws(512,512,(v,T,_)=>{v.fillStyle="#232a4c",v.fillRect(0,0,T,_);let w=_/8,E=T/4;for(let A=0;A<8;A++)for(let M=-1;M<5;M++){let b=M*E+(A%2?E/2:0),C=zt()*14;v.fillStyle=`rgb(${62+C},${78+C},${128+C})`,v.fillRect(b+3,A*w+3,E-6,w-6),v.fillStyle="rgba(255,255,255,0.16)",v.fillRect(b+3,A*w+3,E-6,4)}},!0,[5,1.6]),l=1.05;t(new dt(2.62,.62,.03),bt("#ffffff",{map:o,roughness:.3,clearcoat:.4,clearcoatRoughness:.25,envMapIntensity:.6}),.1,.31,l+.015);let c=new tt(new dt(2.3,.012,.03),new sn({color:new qe("#ffd9a0").multiplyScalar(1.6)}));c.position.set(.1,.6,l-.04),e.add(c);for(let v=0;v<4;v++)t(new dt(.62,.55,.32),bt("#1a2250",{roughness:.4,clearcoat:.6}),-.95+v*.68+(v>1,0),.92,l+.19);for(let v=0;v<4;v++)t(new dt(.012,.16,.012),bt("#cfd4dc",{metalness:1,roughness:.25}),-.95+v*.68+.26,.74,l+.36);let h=t(new dt(.03,.15,1.5),bt("#a8825a",{roughness:.8}),1.115,.075,0);for(let v=0;v<8;v++)t(new dt(.005,.15,.004),bt("#7a5a3a",{roughness:.9}),1.1,.075,-.65+v*.185);let u=ws(128,128,(v,T,_)=>{v.fillStyle="#b98e5c",v.fillRect(0,0,T,_);for(let w=0;w<200;w++)v.fillStyle=`rgba(70,45,20,${zt()*.18})`,v.fillRect(zt()*T,zt()*_,14+zt()*40,1)}),d=bt("#ffffff",{map:u,roughness:.65,clearcoat:.15}),f=[],m=[];nt.zs.forEach((v,T)=>{let _=es(new tt(new di(nt.pad.hx*2,nt.pad.h,nt.pad.hz*2,3,.002),d));_.position.set(nt.pantryX,nt.pad.h/2,Gn(v)),e.add(_),f.push(_);let w=wh(vn[T].name.toUpperCase(),.07,.026,{color:"#fbbf24"});w.position.set(nt.pantryX,0,Gn(v)-.062),e.add(w)});{let v=wh("PANTRY",.34,.07,{color:"#60a5fa",spacing:"10px"});v.position.set(nt.pantryX,0,Gn(.76)),e.add(v)}let x=ws(512,512,(v,T,_)=>{v.fillStyle="#e9e2d0",v.fillRect(0,0,T,_);for(let w=0;w<_;w+=3)v.fillStyle=`rgba(120,100,70,${.04+(w%6?0:.04)})`,v.fillRect(0,w,T,1);for(let w=0;w<T;w+=3)v.fillStyle=`rgba(120,100,70,${.03+(w%6?0:.04)})`,v.fillRect(w,0,1,_);v.strokeStyle="rgba(150,40,40,0.55)",v.lineWidth=3,v.setLineDash([10,8]),v.strokeRect(14,14,T-28,_-28)}),g=es(new tt(new di(.5,.006,1.4,3,.002),bt("#ffffff",{map:x,roughness:.92,sheen:.6,sheenRoughness:.5,sheenColor:new qe("#ffffff")})));g.position.set(nt.kitchenX-.03,.003,0),e.add(g);let p=bt("#f4f1ea",{roughness:.18,clearcoat:1,clearcoatRoughness:.06});nt.zs.forEach((v,T)=>{let _=es(new tt(new di(nt.pad.hx*2,nt.pad.h-.002,nt.pad.hz*2,3,.002),d));_.position.set(nt.kitchenX,(nt.pad.h-.002)/2+.003,Gn(v)),e.add(_);let w=ii([[0,0],[.034,0],[.037,.0025],[.038,nt.plateT]],p,48);w.position.set(nt.kitchenX,nt.pad.h+.001,Gn(v)),e.add(w);let E=wh(vn[T].name.toUpperCase(),.07,.026,{color:"#f4c7c7",bg:"#4a1f27"});E.position.set(nt.kitchenX,0,Gn(v)-.062),e.add(E)});{let v=wh("BREAKFAST AREA",.5,.07,{color:"#f4c7c7",bg:"#4a1f27",spacing:"6px"});v.position.set(nt.kitchenX,0,Gn(.76)),e.add(v)}t(new di(.075,.012,.075,3,.004),bt("#d9a85a",{roughness:.9}),-.95,.006,.78),t(new di(.075,.012,.075,3,.004),bt("#cf9c4c",{roughness:.9}),-.94,.017,.78),t(new un(.03,32,22),bt("#f08a1c",{roughness:.55,clearcoat:.2}),-.95,.03,-.84);{let v=ii([[0,0],[.032,0],[.036,.004],[.036,.075],[.0345,.075],[.0335,.006],[0,.006]],bt("#2563eb",{roughness:.2,clearcoat:1}),40);v.position.set(-.55,0,.88),v.material.side=Kt,e.add(v)}return{set:e,pads:f,wallZ:l}}var Es={accent:"#a78bfa",blue:"#60a5fa",pink:"#e879f9",amber:"#fbbf24",green:"#34d399",red:"#f87171",faint:"#5f668f",muted:"#9aa0c3",text:"#e6e8f5"},Er='"JetBrains Mono", monospace';function Pi(n){let e=Math.min(window.devicePixelRatio||1,2),t=n.clientWidth,i=n.clientHeight;(n.width!==Math.round(t*e)||n.height!==Math.round(i*e))&&(n.width=Math.round(t*e),n.height=Math.round(i*e));let s=n.getContext("2d");return s.setTransform(e,0,0,e,0,0),s.clearRect(0,0,t,i),{ctx:s,w:t,h:i}}function ba(n,e,t){let i=(e-n)/t,s=Math.pow(10,Math.floor(Math.log10(i))),r=i/s,a=(r<1.5?1:r<3?2:r<7?5:10)*s,o=[];for(let l=Math.ceil(n/a-1e-9)*a;l<=e+1e-9;l+=a)o.push(Math.abs(l)<a*1e-9?0:+l.toPrecision(10));return o}var i0=n=>String(+n.toPrecision(4)).replace("-","\u2212"),Je=(n,e,t,i,s=Es.muted,r="left",a=10,o="")=>{n.font=`${o} ${a}px ${Er}`,n.fillStyle=s,n.textAlign=r,n.textBaseline="middle",n.fillText(e,t,i)};function Mn(n,e,t){let[i,s]=t.xr,[r,a]=t.yr,o=u=>e.x+(u-i)/(s-i)*e.w,l=u=>e.y+e.h-(u-r)/(a-r)*e.h;n.save(),n.font=`10px ${Er}`,n.lineWidth=1;let c=t.xticks||ba(i,s,t.nx||5),h=t.yticks||ba(r,a,t.ny||4);return n.textAlign="center",n.textBaseline="top",c.forEach(u=>{n.strokeStyle="rgba(255,255,255,0.05)",n.beginPath(),n.moveTo(o(u),e.y),n.lineTo(o(u),e.y+e.h),n.stroke(),n.fillStyle=Es.faint,n.fillText(t.xfmt?t.xfmt(u):i0(u),o(u),e.y+e.h+5)}),n.textAlign="right",n.textBaseline="middle",h.forEach(u=>{n.strokeStyle=u===0?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.05)",n.beginPath(),n.moveTo(e.x,l(u)),n.lineTo(e.x+e.w,l(u)),n.stroke(),n.fillStyle=Es.faint,n.fillText(t.yfmt?t.yfmt(u):i0(u),e.x-6,l(u))}),n.strokeStyle="rgba(255,255,255,0.14)",n.strokeRect(e.x,e.y,e.w,e.h),t.xl&&Je(n,t.xl,e.x+e.w/2,e.y+e.h+24,Es.muted,"center"),t.yl&&(n.save(),n.translate(e.x-38,e.y+e.h/2),n.rotate(-Math.PI/2),Je(n,t.yl,0,0,Es.muted,"center"),n.restore()),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip(),(t.under||[]).forEach(u=>u(o,l)),(t.series||[]).forEach(u=>{let d=u.pts;if(!d||!d.length)return;n.beginPath();let f=!1;for(let m=0;m<d.length;m++){let[x,g]=d[m];if(u.upTo!==void 0&&x>u.upTo)break;if(!Number.isFinite(g))continue;let p=o(x),v=Math.max(-2e3,Math.min(2e3,l(g)));f?n.lineTo(p,v):n.moveTo(p,v),f=!0}n.setLineDash(u.dash||[]),n.lineWidth=u.width||2,n.strokeStyle=u.color,n.lineJoin="round",n.stroke(),n.setLineDash([]),u.fill&&(n.lineTo(o(d[d.length-1][0]),l(0)),n.lineTo(o(d[0][0]),l(0)),n.closePath(),n.fillStyle=u.fill,n.fill())}),(t.over||[]).forEach(u=>u(o,l)),n.restore(),{X:o,Y:l}}var Ii=(n,e,t,i,s=4.5)=>{n.beginPath(),n.arc(e,t,s,0,Math.PI*2),n.fillStyle=i,n.fill(),n.strokeStyle="#070a1a",n.lineWidth=1.5,n.stroke()},Tr=(n,e,t,i,s,r="rgba(255,255,255,0.35)")=>{n.setLineDash([3,4]),n.strokeStyle=r,n.lineWidth=1,n.beginPath(),n.moveTo(e(t),i),n.lineTo(e(t),s),n.stroke(),n.setLineDash([])};var vt=Es,b1=Math.PI/180,Ar=(n,e,t)=>Math.min(t,Math.max(e,n)),Ts="#34d399",wa="#f87171";function r0(n="desk",e=.7,t=!0){return{stepOn:br({bands:!0,surf:n,duty:1}),stepOff:br({bands:!1,surf:n,duty:1}),tracOn:Ri({bands:!0,surf:n,duty:1}),tracOff:Ri({bands:!1,surf:n,duty:1}),power:[.4,.7,1].map(i=>Ci(i,t)),powerSel:Ci(e,t),ranges:Object.keys(hi).map(i=>[i,Ho(i)])}}function Qs(n,e,t=0){let{ctx:i,w:s,h:r}=Pi(n),a=e?{x:30,y:8,w:s-40-t,h:r-24}:{x:52,y:14,w:s-74-t,h:r-50};return{ctx:i,w:s,h:r,r:a}}var Sa=n=>n[n.length-1]??0;function S1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=e.cache.stepOn,a=e.cache.stepOff,o=(h,u)=>h.t.map((d,f)=>[d,h[u][f]]),l=Math.max(...r.wr,...a.wr)*1.12;Mn(i,s,{xr:[0,1],yr:[0,l],nx:t?2:5,ny:t?3:4,xl:t?"":"time since full throttle (s)",yl:t?"":"speed (m/s)",series:[{pts:o(a,"wr"),color:"rgba(248,113,113,0.55)",width:1.2,dash:[4,4]},{pts:o(r,"wr"),color:"rgba(52,211,153,0.55)",width:1.2,dash:[4,4]},{pts:o(a,"v"),color:wa,width:2.4},{pts:o(r,"v"),color:Ts,width:2.4}],over:[(h,u)=>{t&&(Je(i,"with bands",h(.98),u(r.v[r.v.length-1])-9,Ts,"right",9),Je(i,"bare",h(.98),u(a.v[a.v.length-1])+10,wa,"right",9))}]});let c=r.t.findIndex(h=>h>=.3);return`At 0.3 s the banded robot moves at <b>${r.v[c].toFixed(2)} m/s</b>; the bare one at <b>${a.v[c].toFixed(2)} m/s</b> while its wheel surfaces do <b>${a.wr[c].toFixed(2)} m/s</b>. The gap between the dashed and solid red lines is wheel spin.`}function w1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=e.cache.stepOn,a=e.cache.stepOff;return Mn(i,s,{xr:[0,1],yr:[-.05,1.05],nx:t?2:5,ny:t?3:4,xl:t?"":"time since full throttle (s)",yl:t?"":"slip ratio",series:[{pts:a.t.map((o,l)=>[o,a.slip[l]]),color:wa,width:2.4,fill:"rgba(248,113,113,0.1)"},{pts:r.t.map((o,l)=>[o,r.slip[l]]),color:Ts,width:2.4}],over:[(o,l)=>{Je(i,`peak ${Math.max(...a.slip).toFixed(2)} bare`,o(.98),l(Math.max(...a.slip))-8,wa,"right",10),Je(i,`peak ${Math.max(...r.slip).toFixed(2)} with bands`,o(.98),l(.12),Ts,"right",10)}]}),"Slip ratio = (wheel surface speed \u2212 robot speed) \xF7 wheel surface speed. Zero is pure rolling; one is a wheel spinning on the spot."}function E1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=e.cache.tracOn,a=e.cache.tracOff,o=Math.max(r.pts[0][1],r.limit)*1.2;return Mn(i,s,{xr:[0,.8],yr:[0,o],nx:t?2:4,ny:t?3:4,xl:t?"":"robot speed (m/s)",yl:t?"":"force at the ground (N)",series:[{pts:r.pts,color:vt.amber,width:2.4},{pts:[[0,r.limit],[.8,r.limit]],color:Ts,width:1.6,dash:[6,4]},{pts:[[0,a.limit],[.8,a.limit]],color:wa,width:1.6,dash:[6,4]}],over:[(l,c)=>{Je(i,"motor force",l(.42),c(r.pts[Math.round(r.pts.length*.5)][1])-12,vt.amber,"left",10),Je(i,"grip, bands",l(.79),c(r.limit)-9,Ts,"right",10),Je(i,"grip, bare",l(.79),c(a.limit)-9,wa,"right",10)}]}),`At stall the two motors push with <b>${r.pts[0][1].toFixed(1)} N</b>. Bare plastic can pass only <b>${a.limit.toFixed(1)} N</b> to the counter; with bands the limit is <b>${r.limit.toFixed(1)} N</b>, so nearly all of it reaches the ground.`}function T1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=e.sim.rec,a=r.n,o=t?14:30,l=Math.max(o,Sa(r.t)),c=l-o,h=0;for(;h<a&&r.t[h]<c;)h++;let u=[],d=[],f=[];for(let x=h;x<a;x++)u.push([r.t[x],(r.vL[x]+r.vR[x])/2]),d.push([r.t[x],0]),f.push([r.t[x],r.g[x]]);let m=.5;return Mn(i,s,{xr:[c,l],yr:[-.25,m],nx:t?3:6,ny:4,xl:t?"":"run time (s)",yl:t?"":"speed (m/s)",yticks:[-.2,0,.2,.4],under:[(x,g)=>{i.fillStyle="rgba(167,139,250,0.10)";for(let p=Math.max(1,h);p<a;p++){let v=1-r.g[p];v>.01&&i.fillRect(x(r.t[p-1]),g(m),Math.max(1,x(r.t[p])-x(r.t[p-1]))+.5,(g(-.25)-g(m))*v)}}],series:[{pts:u,color:vt.blue,width:2.2},{pts:f.map(([x,g])=>[x,g*.45-.2]),color:"rgba(167,139,250,0.9)",width:1.4,dash:[3,3]}],over:[(x,g)=>{u.length&&Ii(i,x(Sa(r.t)),g(u[u.length-1][1]),vt.pink,4),Je(i,"speed",s.x+6,s.y+10,vt.blue,"left",9.5),Je(i,"go-gain (dashed): 1 running, 0 halted",s.x+50,s.y+10,vt.accent,"left",9.5)}]}),"The dashed line is the soft-stop gain. Press <b>PAUSE</b> and it eases from 1 to 0 over 0.8 s, so the speed falls away smoothly instead of dropping to zero in one tick."}function A1(n,e,t){let{ctx:i,r:s}=Qs(n,t,t?0:34),r=e.cache.power,a=r[2],o=e.sim,l=s,c=a.pts[a.pts.length-1].rpm*1.02,h=Math.max(...r.map(g=>Math.max(...g.pts.map(p=>p.Pm))))*1.25,u=Math.max(...r.map(g=>Math.max(...g.pts.map(p=>p.Pel))))*1.05,d=h/u,f=["rgba(251,191,36,0.4)","rgba(251,191,36,0.7)","#fbbf24"],m=[];r.forEach((g,p)=>m.push({pts:g.pts.map(v=>[v.rpm,v.Pel*d]),color:"rgba(154,160,195,"+(.3+p*.2)+")",width:1.2,dash:[4,4]})),r.forEach((g,p)=>m.push({pts:g.pts.map(v=>[v.rpm,v.Pm]),color:f[p],width:p===2?2.6:1.8})),Mn(i,l,{xr:[0,c],yr:[0,h],nx:t?3:5,ny:t?3:4,xl:t?"":"wheel speed (rpm)",yl:t?"":"mechanical power out, per motor (W)",series:m,over:[(g,p)=>{t||[.4,.7,1].forEach((w,E)=>{let A=r[E],M=A.pts.reduce((b,C)=>C.Pm>b.Pm?C:b);Je(i,`${Math.round(w*100)} %`,g(M.rpm),p(M.Pm)-9,"#fbbf24","center",10,"600")});let v=o.w*60/(2*Math.PI),T=o.Pm/2,_=o.Pel/2;_>.05&&(Ii(i,g(Math.min(v,c)),p(T),vt.pink),Ii(i,g(Math.min(v,c)),p(Math.min(_*d,h)),vt.blue,3.5))}]}),t||(i.font=`10px ${Er}`,i.textAlign="left",i.textBaseline="middle",ba(0,u,4).forEach(g=>{let p=l.y+l.h-g*d/h*l.h;i.fillStyle=vt.faint,i.fillText(String(+g.toPrecision(2)),l.x+l.w+5,p)}),i.save(),i.translate(l.x+l.w+30,l.y+l.h/2),i.rotate(Math.PI/2),Je(i,"electrical power in (W), dashed",0,0,vt.muted,"center"),i.restore());let x=e.cache.powerSel.pts.reduce((g,p)=>p.Pm>g.Pm?p:g);return`At ${Math.round(e.duty*100)} % throttle one motor delivers at most <b>${x.Pm.toFixed(2)} W</b> at <b>${x.rpm.toFixed(0)} rpm</b>, half its free speed, while drawing about <b>${x.Pel.toFixed(1)} W</b> from the battery: the rest is heat in the windings and gearbox. Pink dot: mechanical power now; blue: electrical.`}function R1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=e.cache.powerSel.pts,a=e.sim,o=Math.max(...r.map(u=>u.tau)),l=Math.max(...r.map(u=>u.I)),c=Math.max(...r.map(u=>u.eff)),h=r[r.length-1].rpm;return Mn(i,s,{xr:[0,h],yr:[0,105],nx:t?3:5,ny:4,xl:t?"":"wheel speed (rpm)",yl:t?"":"% of maximum",series:[{pts:r.map(u=>[u.rpm,u.I/l*100]),color:"rgba(154,160,195,0.8)",width:1.5,dash:[4,4]},{pts:r.map(u=>[u.rpm,Math.max(0,u.tau)/o*100]),color:vt.blue,width:2.2},{pts:r.map(u=>[u.rpm,u.eff/c*100]),color:vt.pink,width:2.2}],over:[u=>{Je(i,`torque ${(o*100).toFixed(1)} N\xB7cm at stall`,s.x+8,s.y+12,vt.blue,"left",10),Je(i,`peak efficiency ${(c*100).toFixed(0)} %`,s.x+8,s.y+27,vt.pink,"left",10),Je(i,`stall current ${l.toFixed(2)} A`,s.x+8,s.y+42,vt.muted,"left",10);let d=a.w*60/(2*Math.PI);a.Pel>.05&&Tr(i,u,Math.min(d,h),s.y,s.y+s.h)}]}),"At the chosen throttle the torque falls in a straight line as the wheel speeds up, so power (torque \xD7 speed) peaks at half the free speed."}function C1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=e.sim.rec,a=r.n,o=Math.max(20,Sa(r.t)),l=Math.max(4,...r.Pel)*1.15,c=[],h=Math.max(1,Math.floor(a/600));for(let u=0;u<a;u+=h)c.push([r.t[u],r.Pel[u]]);return Mn(i,s,{xr:[0,o],yr:[0,l],nx:t?3:6,ny:4,xl:t?"":"run time (s)",yl:t?"":"electrical power (W)",series:[{pts:c,color:"#fbbf24",width:1.8,fill:"rgba(251,191,36,0.12)"}],over:[(u,d)=>{a&&(Tr(i,u,Sa(r.t),s.y,s.y+s.h),Ii(i,u(Sa(r.t)),d(Sa(r.Pel)),vt.pink)),Je(i,`energy so far ${e.sim.energy.toFixed(0)} J`,s.x+s.w-6,s.y+12,vt.muted,"right",10)}]}),"Both motors plus the electronics. The long flat stretches are the brake, reach, grip and place phases: the motors are stopped and the servos are doing the work."}function Rr(n){let e=n.sim,t=Ar(e.sn.d,.05,4),i=e.sn.what;return{d:t,psi:0,wall:i==="wall"?"card":"wood",what:i}}function P1(n,e,t,i){let{ctx:s,w:r,h:a}=Pi(n),o=Rr(e),l=o.d,c=o.psi,h=o.wall,u=14,d=u+(t?6:12),f=a/2,m=(r-d-24)/Math.max(l,.35),x=(Me,be)=>[d+Me*m,f-be*m];s.fillStyle="rgba(167,139,250,0.25)",s.strokeStyle=vt.accent,s.lineWidth=1.5;let[g,p]=x(0,.1),[,v]=x(0,-.1);s.fillRect(d-10,p,10,v-p),s.beginPath(),s.moveTo(g,p),s.lineTo(g,v),s.stroke(),s.setLineDash([3,5]),s.strokeStyle="rgba(96,165,250,0.35)",s.lineWidth=1;for(let Me of[-1,1])s.beginPath(),s.moveTo(d,f),s.lineTo(d+Math.cos(lt.beam)*m*l*1.4,f-Me*Math.sin(lt.beam)*m*l*1.4),s.stroke();s.setLineDash([]);let T=Math.max(.9,l*.7),_=-1,w=0,E=0,A=-1,[M,b]=x(l+E*T,A*T),[C,P]=x(l-E*T,-A*T),F={wood:"#b98e5c",card:"#c89a52"}[h];s.strokeStyle=F,s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(M,b),s.lineTo(C,P),s.stroke(),s.lineCap="butt";let B=Math.max(.35,2*l/2.4),D=4.6*l+.7,z=i/1e3%(D/B+.5),W=B*z,J=lt.thresh,le=lt.ref,G=hi[h],Z=0,se=t?31:61;for(let Me=0;Me<se;Me++){let be=(Me/(se-1)*2-1)*42*b1,j=Math.exp(-Math.pow(be/(lt.beam*1.7),2)),ne=5e-4,re=0,I=Math.cos(be),N=Math.sin(be),ee=0,ue=0,ce=0;for(let me=0;me<5;me++){let he=1/0,q=null,K=I*_+N*w;if(K<-1e-9){let xe=((l-ne)*_+(0-re)*w)/K;if(xe>1e-6){let ye=ne+I*xe,Ue=re+N*xe,We=(ye-l)*E+Ue*A;Math.abs(We)<=T&&(he=xe,q="wall")}}if(I<-1e-9){let xe=(0-ne)/I;if(xe>1e-6){let ye=re+N*xe;Math.abs(ye)<.1&&xe<he&&(he=xe,q="robot")}}let V=Number.isFinite(he)?he:6*l,te=ee,oe=ee+V;{let[xe,ye]=x(ne,re),[Ue,We]=x(ne+I*V,re+N*V);s.strokeStyle="rgba(125,211,252,0.05)",s.lineWidth=1,s.beginPath(),s.moveTo(xe,ye),s.lineTo(Ue,We),s.stroke()}if(W>te&&W<=oe+1e-4){let xe=Math.min(W,oe),ye=ne+I*(xe-te),Ue=re+N*(xe-te),We=j*(le/Math.max(xe,le))*Math.pow(10,-lt.absDbPerM*xe/20)*Math.pow(G.R,ue)*Math.pow(.8,ce),L=20*Math.log10(Math.max(We,1e-9)/J),ot=Ar((L+8)/62,.04,1),[rt,R]=x(ye,Ue),y=Math.min(.08,.5/m+.02),[H,X]=x(ye-I*y,Ue-N*y);s.strokeStyle=`rgba(${L>35?"250,204,21":"96,165,250"},${ot.toFixed(3)})`,s.lineWidth=1.4+ot*1.6,s.beginPath(),s.moveTo(rt,R),s.lineTo(H,X),s.stroke(),ye<.06&&Math.abs(Ue)<.05&&I<0&&ue>0&&(Z=Math.max(Z,ot))}if(!q)break;if(ee=oe,ne+=I*V,re+=N*V,q==="wall"){let xe=I*_+N*w;I-=2*xe*_,N-=2*xe*w,ue++}else I=-I,ce++;if(ee>7*l+1)break}}if(Z>.04){let[Me,be]=x(0,0),j=s.createRadialGradient(Me,be,0,Me,be,24);j.addColorStop(0,`rgba(52,211,153,${Z})`),j.addColorStop(1,"rgba(52,211,153,0)"),s.fillStyle=j,s.beginPath(),s.arc(Me,be,24,0,7),s.fill()}return Je(s,`${(l*100).toFixed(0)} cm`,(d+x(l,0)[0])/2,f-10,vt.muted,"center",10),Je(s,o.what==="wall"?"FAR WALL":o.what==="none"?"NO ECHO":o.what==="spot"?"BREAKFAST SPOT":"PANTRY PAD",r-8,12,F,"right",9),"Dots are the 40 kHz burst travelling, bright when strong. Watch them thin out with distance and dim at the wall; the green glow is the echo reaching the receiver."}function I1(n,e,t){let{ctx:i,r:s}=Qs(n,t),r=Rr(e),a=zo(r.d,r.psi,r.wall,22),o=h=>20*Math.log10(Math.max(h,1e-9)/lt.thresh),l=a.pts.map(([h,u])=>[h*1e3,Ar(o(u),-12,75)]),c=Qi(r.d,r.psi,r.wall);return Mn(i,s,{xr:[0,a.tEnd*1e3],yr:[-12,75],yticks:[-10,0,20,40,60],nx:t?3:6,xl:t?"":"time after the burst (ms)",yl:t?"":"signal (dB above threshold)",series:[{pts:l,color:vt.accent,width:2,fill:"rgba(167,139,250,0.12)"}],over:[(h,u)=>{i.setLineDash([5,4]),i.strokeStyle=vt.amber,i.lineWidth=1.1,i.beginPath(),i.moveTo(s.x,u(0)),i.lineTo(s.x+s.w,u(0)),i.stroke(),i.setLineDash([]),Je(i,"detection threshold",s.x+8,u(0)+9,vt.amber,"left",9),a.echoes.slice(0,2).forEach((d,f)=>{let m=o(d.a);d.t*1e3<a.tEnd*1e3&&(Ii(i,h(d.t*1e3),u(Ar(m,-12,75)),f?vt.pink:Ts,4),t||Je(i,`${f?"2nd":"1st"} echo ${m.toFixed(0)} dB`,h(d.t*1e3)+8,u(Ar(m,-10,70))-10,f?vt.pink:Ts,"left",10,"600"))})}]}),c.detected?`The first echo arrives <b>${(a.echoes[0].t*1e3).toFixed(2)} ms</b> after the burst: distance = time \xD7 ${a.c.toFixed(0)} m/s \xF7 2 = <b>${(r.d*100).toFixed(0)} cm</b>. The second, weaker echo has crossed the gap twice.`:"The first echo is <b>below the threshold</b>: the sensor reports nothing."}function L1(n,e,t){let{ctx:i,w:s,h:r}=Pi(n),a=Rr(e),o=Qi(a.d,a.psi,a.wall),l=[["spreading",o.spread,vt.blue],["air",o.air,vt.amber],["wall absorbs",o.surf,vt.pink],["off-axis",o.aim,vt.red]],c=Math.max(o.total,1),h=12,u=s-24,d=t?30:40,f=t?18:26,m=h;return l.forEach(([x,g,p])=>{let v=g/c*u;v<=0||(i.fillStyle=p,i.globalAlpha=.85,i.fillRect(m,d,Math.max(v,1),f),i.globalAlpha=1,v>56&&!t&&Je(i,x,m+5,d+f/2-.5,"#0b0820","left",9.5,"600"),Je(i,`${g.toFixed(1)}`,m+v/2,d+f+12,p,"center",9.5),m+=v)}),Je(i,`total loss ${o.total.toFixed(1)} dB: only ${(Math.pow(10,-o.total/10)*100).toExponential(1)} % returns`,h,14,vt.text,"left",t?9.5:10.5,"600"),t||Je(i,"blue spreading \xB7 amber air \xB7 pink wall absorbs \xB7 red off-axis",h,d+f+38,vt.muted,"left",9.5),"Every 3 dB is half the energy. Spreading dominates: the burst fans out over the surface of a growing sphere."}function D1(n,e,t){let{ctx:i,w:s}=Pi(n),r=Rr(e),a=t?70:96,o=s-a-52,l=t?18:24,c=5;e.cache.ranges.forEach(([u,d],f)=>{let m=8+f*l,x=u===r.wall;i.fillStyle=x?"rgba(167,139,250,0.9)":"rgba(154,160,195,0.35)",i.fillRect(a,m,d/c*o,12),Je(i,hi[u].name,6,m+6,x?"#fff":vt.muted,"left",9,x?"600":""),Je(i,`${d.toFixed(1)} m`,a+d/c*o+5,m+6,x?vt.accent:vt.muted,"left",9.5)});let h=a+Ar(r.d,0,c)/c*o;return i.strokeStyle=Ts,i.setLineDash([3,4]),i.beginPath(),i.moveTo(h,2),i.lineTo(h,8+4*l-4),i.stroke(),i.setLineDash([]),"The furthest each surface can be seen: the first echo must stay above the detection threshold. The green line is the current reading."}function N1(n,e,t){let{ctx:i,w:s,h:r}=Pi(n),a=e.sim,o=-1,l=.95,c=-.78,h=.78,u=Math.min((s-16)/(l-o),(r-16)/(h-c)),d=(s-u*(l-o))/2,f=(r-u*(h-c))/2,m=(P,F)=>[d+(P-o)*u,f+(h-F)*u];i.fillStyle="rgba(255,255,255,0.03)",i.fillRect(d,f,u*(l-o),u*(h-c));let x=nt.pad.hx*u,[g,p]=m(nt.kitchenX-.25,.7),[v,T]=m(nt.kitchenX+.2,-.7);i.fillStyle="rgba(233,226,208,0.12)",i.fillRect(g,p,v-g,T-p),t||(Je(i,"BREAKFAST AREA",g+6,p+10,"rgba(233,226,208,0.7)","left",9),Je(i,"PANTRY",m(nt.pantryX,0)[0]+18,p+10,"rgba(96,165,250,0.8)","left",9)),nt.zs.forEach((P,F)=>{for(let[B,D]of[[nt.pantryX,"rgba(185,142,92,0.7)"],[nt.kitchenX,"rgba(244,241,234,0.5)"]]){let[z,W]=m(B,P);i.fillStyle=D,i.fillRect(z-x,W-x,x*2,x*2)}t||Je(i,vn[F].name,m(nt.pantryX,P)[0]+x+4,m(nt.pantryX,P)[1],vt.amber,"left",9)}),i.strokeStyle="rgba(96,165,250,0.75)",i.lineWidth=1.6,i.beginPath();let _=Math.max(1,Math.floor(a.rec.n/500));for(let P=0;P<a.rec.n;P+=_){let[F,B]=m(a.rec.x[P],a.rec.z[P]);P?i.lineTo(F,B):i.moveTo(F,B)}i.stroke();let w=["#efe0c6","#e8eaee","#c4491a","#c2181f","#9fd3ff"];a.items.forEach((P,F)=>{let[B,D]=m(P.x,P.z);i.fillStyle=w[F],i.beginPath(),i.arc(B,D,P.state===1?5:4,0,7),i.fill(),P.state===1&&(i.strokeStyle=vt.pink,i.lineWidth=1.5,i.stroke())});let[E,A]=m(a.x,a.z),M=-a.yaw,b=Ar(a.sn.d,.05,.6)*u;i.save(),i.translate(E,A),i.rotate(M),i.fillStyle="rgba(96,165,250,0.14)",i.beginPath(),i.moveTo(ge.sensorX*u,0),i.arc(ge.sensorX*u,0,b,-lt.beam,lt.beam),i.closePath(),i.fill(),i.fillStyle="#f2b400",i.strokeStyle="#070a1a",i.lineWidth=1.2,i.beginPath(),i.roundRect(-.1*u,-.1*u,.27*u,.2*u,3),i.fill(),i.stroke(),i.fillStyle="#070a1a",i.beginPath(),i.moveTo(.16*u,0),i.lineTo(.09*u,-.035*u),i.lineTo(.09*u,.035*u),i.closePath(),i.fill(),i.restore();let C=a.items.filter(P=>P.state===2).length;return Je(i,`${C} of ${vn.length} on the table`,s-8,12,vt.green,"right",10,"600"),`A top view of the counter. The blue line is where Patrick has driven; the cone is what his sonar sees. <b>${C}</b> of ${vn.length} ingredients are laid out so far.`}var Md={speed:S1,slip:w1,trac:E1,runspeed:T1,pow:A1,eff:R1,ptime:C1,rays:P1,env:I1,budget:L1,range:D1,map:N1};var Eh=`// ============================================================================================================================\r
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
`;var Ft=n=>document.getElementById(n),Pr=(n,e,t)=>Math.min(t,Math.max(e,n)),ts=Math.PI/180,Ch=U,h0=matchMedia("(prefers-reduced-motion: reduce)").matches,tr=Ft("k-stage"),ns=Ft("k-gl");if(!tr||!ns)throw new Error("kitchen stage markup is missing");var Wn={speed:1,cam:"cinema",duty:.7},Ce=new bh({duty:Wn.duty}),Yo={sim:Ce,cache:r0("desk",Wn.duty,!0),duty:Wn.duty},u0=["IDLE","APPROACH","BRAKE","REACH","GRIP","LIFT","TURN_CARRY","SETTLE_C","CARRY","BRAKE_C","PLACE","RETREAT_P","TURN_SHIFT","SETTLE_T","SHIFT","SETTLE_S","TURN_PANTRY","SETTLE_P","DONE"],d0=["READY","APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","SETTLE","CARRY","BRAKE","PLACE","RETREAT","TURN","SETTLE","SHIFT","SETTLE","TURN","SETTLE","DONE"],Xn=new ma({canvas:ns,antialias:!0,powerPreference:"high-performance"});Xn.toneMapping=xs;Xn.toneMappingExposure=1;Xn.outputColorSpace=Vt;Xn.shadowMap.enabled=!0;Xn.shadowMap.type=gs;var Dn=new fs;Dn.background=new qe("#0a0f26");Dn.fog=new hr("#0a0f26",3.2,9);var F1=new Zs(Xn);function O1(){let n=new fs;n.add(new tt(new un(12,32,16),new sn({color:new qe("#1d2442"),side:rn})));let e=(t,i,s,r,a="#ffffff")=>{let o=new tt(new jn(t,i),new sn({color:new qe(a).multiplyScalar(r),side:Kt}));o.position.set(...s),o.lookAt(0,0,0),n.add(o)};return e(7,5,[-4,7,-5],4.2),e(1.4,7,[6,3,4],5.5,"#dbe7ff"),e(3,3,[-6,2,5],3.2,"#ffd9b0"),e(10,10,[0,11,0],1.1),e(12,3,[0,-2.5,-8],.9,"#8aa0ff"),F1.fromScene(n,.015).texture}Dn.environment=O1();Dn.environmentIntensity=.8;var Ni=new hn(36,1,.05,14),fi=new ms("#fff3e0",2.2);fi.castShadow=!0;Object.assign(fi.shadow.camera,{left:-.7,right:.7,top:.7,bottom:-.7,near:.2,far:5});fi.shadow.bias=-4e-4;fi.shadow.normalBias=.002;Dn.add(fi,fi.target);var f0=new ms("#9db7ff",.6);f0.position.set(-1,.8,1);Dn.add(f0);Dn.add(new pr("#aab8ff","#1a1530",.5));var B1=new Xt(4,4,{type:tn,samples:4}),Ta=new _a(Xn,B1);Ta.addPass(new va(Dn,Ni));var Zo=new vs(Dn,Ni,4,4);Zo.output=vs.OUTPUT.Default;Zo.updateGtaoMaterial({radius:.035,distanceExponent:1.2,thickness:.6,scale:1.2,samples:14,distanceFallOff:1,screenSpaceRadius:!1});Zo.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:12});Ta.addPass(Zo);Ta.addPass(new ya);var p0=!0,YE=n0(Dn),As=Sh();Dn.add(As.root);var m0=vn.map((n,e)=>{let t=t0(n.id);return Dn.add(t),t}),Jo=new Ht;As.root.add(Jo);Jo.position.set(ge.sensorX+.008,ge.sensorY,0);var k1=(()=>{let n=[0,0,0],e=[],t=16;for(let r=0;r<=t;r++){let a=(r/t*2-1)*lt.beam;n.push(Math.cos(a),0,Math.sin(a))}for(let r=1;r<=t;r++)e.push(0,r,r+1);let i=new Pt;i.setAttribute("position",new ht(n,3)),i.setIndex(e);let s=new tt(i,new sn({color:"#60a5fa",transparent:!0,opacity:.055,side:Kt,depthWrite:!1}));return Jo.add(s),s})(),wd=new tt(new un(.005,12,8),new sn({color:"#f472b6"}));Jo.add(wd);var Et={az:-88*ts,el:26*ts,dist:1.45,t:new Ch(nt.start.x,.08,Gn(nt.start.z))},qt={az:Et.az,el:Et.el,dist:Et.dist},z1=new Ch(-.05,0,0),a0=new Ch;function g0(){return Wn.cam==="wide"||Wn.cam==="top"?a0.copy(z1):a0.set(Ce.x+Math.cos(Ce.yaw)*.05,.075,Gn(Ce.z+Math.sin(Ce.yaw)*.05))}function H1(n,e){let t=1-Math.exp(-n*3.2),i=qt.az,s=qt.el,r=qt.dist;if(Wn.cam==="cinema"){let o=[st.REACH,st.GRIP,st.LIFT,st.PLACE].includes(Ce.phase);i=(-88+34*Math.sin(e/1e3*.06))*ts,s=(o?16:26)*ts,r=o?.78:1.45,qt.az=i,qt.el=s,qt.dist=r}else Wn.cam==="wide"?(i=-78*ts,s=38*ts,r=3.3):Wn.cam==="top"&&(i=-90*ts,s=84*ts,r=2.4);Et.az+=(i-Et.az)*t,Et.el+=(s-Et.el)*t,Et.dist+=(r-Et.dist)*t,Et.t.lerp(g0(),1-Math.exp(-n*4));let a=Math.cos(Et.el);Ni.position.set(Et.t.x+Et.dist*a*Math.cos(Et.az),Et.t.y+Et.dist*Math.sin(Et.el),Et.t.z+Et.dist*a*Math.sin(Et.az)),Ni.lookAt(Et.t)}function $o(n){Wn.cam=n,n==="follow"&&(qt.az=Et.az,qt.el=Et.el,qt.dist=Et.dist),document.querySelectorAll("#k-cams .chip").forEach(e=>e.classList.toggle("on",e.dataset.cam===n))}document.querySelectorAll("#k-cams .chip").forEach(n=>n.addEventListener("click",()=>$o(n.dataset.cam)));var Ea=new Map;ns.addEventListener("pointerdown",n=>{ns.setPointerCapture(n.pointerId),Ea.set(n.pointerId,[n.clientX,n.clientY]),ns.classList.add("drag")});ns.addEventListener("pointermove",n=>{if(!Ea.has(n.pointerId))return;let e=Ea.get(n.pointerId);Ea.set(n.pointerId,[n.clientX,n.clientY]),Ea.size===1&&(Wn.cam!=="follow"&&(qt.az=Et.az,qt.el=Et.el,qt.dist=Et.dist,$o("follow")),qt.az+=(n.clientX-e[0])*.008,qt.el=Pr(qt.el+(n.clientY-e[1])*.006,.04,1.5),Et.az=qt.az,Et.el=qt.el)});var x0=n=>{Ea.delete(n.pointerId),ns.classList.remove("drag")};ns.addEventListener("pointerup",x0);ns.addEventListener("pointercancel",x0);ns.addEventListener("wheel",n=>{n.preventDefault(),Wn.cam!=="follow"&&(qt.az=Et.az,qt.el=Et.el,qt.dist=Et.dist,$o("follow")),qt.dist=Pr(qt.dist*Math.exp(n.deltaY*.0012),.3,4)},{passive:!1});var _0=[{pr:1.6,shadow:2048,post:2},{pr:1.3,shadow:1024,post:1},{pr:1,shadow:512,post:0}],Ed=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<700?2:0;function v0(){let n=_0[Ed];Xn.setPixelRatio(Math.min(devicePixelRatio||1,n.pr)),p0=n.post>0,Zo.enabled=n.post>1,fi.shadow.mapSize.set(n.shadow,n.shadow),fi.shadow.map&&(fi.shadow.map.dispose(),fi.shadow.map=null),Rd()}function Rd(){let n=tr.clientWidth,e=tr.clientHeight;Xn.setSize(n,e,!1),Ta.setPixelRatio(Xn.getPixelRatio()),Ta.setSize(n,e),Ni.aspect=n/e,Ni.fov=n/e<.9?58:36,Ni.updateProjectionMatrix()}addEventListener("resize",Rd);var Li={start:Ft("k-start"),pause:Ft("k-pause"),stop:Ft("k-stop")};function Aa(n){n==="start"?Ce.start():n==="pause"?Ce.status==="PAUSING"||Ce.status==="PAUSED"?Ce.resume():Ce.pause():n==="stop"&&Ce.stop(),Cd()}var G1={READY:"READY",RUNNING:"RUNNING",PAUSING:"SLOWING TO A HALT",PAUSED:"PAUSED",STOPPING:"STOPPING",STOPPED:"STOPPED",DONE:"BREAKFAST IS SERVED"},o0="";function Cd(){let n=Ce.status;if(n===o0)return;o0=n;let e=n==="PAUSING"||n==="PAUSED";Li.start.disabled=!(n==="READY"||n==="STOPPED"||n==="DONE"),Li.start.querySelector("span").textContent=n==="STOPPED"?"RESTART":n==="DONE"?"RUN AGAIN":"START",Li.pause.disabled=!(n==="RUNNING"||e),Li.pause.querySelector("span").textContent=e?"RESUME":"PAUSE",Li.stop.disabled=!(n==="RUNNING"||e);let t=Ft("k-state");t.textContent=G1[n],t.dataset.s=n,Ft("k-hint").classList.toggle("on",n==="READY"),document.querySelectorAll("[data-act]").forEach(i=>{i.dataset.act==="start"?i.disabled=Li.start.disabled:i.dataset.act==="pause"?(i.disabled=Li.pause.disabled,i.textContent=e?"RESUME":"PAUSE"):i.disabled=Li.stop.disabled})}document.addEventListener("click",n=>{let e=n.target.closest("[data-act]");e&&!e.disabled&&Aa(e.dataset.act)});Li.start.onclick=()=>Aa("start");Li.pause.onclick=()=>Aa("pause");Li.stop.onclick=()=>Aa("stop");document.querySelectorAll("#k-speed .chip").forEach(n=>n.addEventListener("click",()=>{Wn.speed=+n.dataset.x,document.querySelectorAll("#k-speed .chip").forEach(e=>e.classList.toggle("on",e===n))}));Ft("k-full").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():(tr.requestFullscreen?.()||Promise.resolve()).catch(()=>{})});document.addEventListener("fullscreenchange",()=>{Ft("k-full").setAttribute("aria-pressed",!!document.fullscreenElement),setTimeout(Rd,50)});addEventListener("keydown",n=>{if(!n.target.closest?.("input, select, textarea")){if(n.key==="Escape"&&$t.open)Ph();else if(n.code==="Space"&&Id){n.preventDefault();let e=Ce.status;Aa(e==="READY"||e==="STOPPED"||e==="DONE"?"start":"pause")}}});var Ko=Eh.replace(/\r/g,"").split(`
`),V1="static|const|struct|enum|class|return|if|else|for|while|switch|case|break|default|void|bool|int|long|double|auto|true|false|nullptr|using|namespace|std|sizeof|inline|char|new",W1=new RegExp(`("(?:[^"\\\\]|\\\\.)*")|(\\b\\d[\\d.]*(?:e-?\\d+)?\\b)|(\\b(?:${V1})\\b)|(#\\w+)|(\\b[A-Z][A-Z_0-9]{2,}\\b)`,"g"),l0=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function X1(n){let e=n,t="",i=n.indexOf("//");return i>=0&&!/"[^"]*\/\/[^"]*"/.test(n)&&(e=n.slice(0,i),t=n.slice(i)),l0(e).replace(W1,(r,a,o,l,c,h)=>a?`<i class="s">${r}</i>`:o?`<i class="n">${r}</i>`:l?`<i class="k">${r}</i>`:c?`<i class="p">${r}</i>`:`<i class="c2">${r}</i>`)+(t?`<i class="c">${l0(t)}</i>`:"")}var y0=Ko.map(X1),Pd={};Ko.forEach((n,e)=>{let t=/^\s*case (\w+):/.exec(n);t&&(Pd[t[1]]=e)});var q1=Object.entries(Pd).sort((n,e)=>n[1]-e[1]);function M0(n){let e=u0[n],t=Pd[e];if(t===void 0)return null;let i=q1.find(([,r])=>r>t),s=i?i[1]:t+8;for(;s>t+1&&/^\s*$/.test(Ko[s-1]);)s--;return[t,s]}function Y1(){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([Eh.replace(/\r?\n/g,`\r
`)],{type:"text/plain"})),n.download="patrick_mission.cpp",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var Ah=()=>Ce.items.filter(n=>n.state===2).length,nn=(n,e=1)=>n.toFixed(e),Di=[{id:"dyn",title:"DYNAMICS",tag:"rubber bands vs bare",col:"#34d399",mini:"speed",ang:-140,rad:330,foot:()=>`slip ${nn(Math.max(Math.abs(Ce.slipL),Math.abs(Ce.slipR)),2)} \xB7 grip on drive ${nn(Ce.drive*100,0)}%`,cards:[["speed","Speed after a full-throttle start","Same motors, same battery, same robot: the only change is the rubber bands."],["slip","Wheel slip",""],["trac","What the motors ask for vs what the tyres can give","When the motor force is above the grip limit the wheel spins instead of pushing."],["runspeed","Live: Patrick\u2019s speed over the run","Press pause to watch the soft stop."]],reads:()=>{let n=Ln(!0,"desk"),e=Ce.drive*(ge.mBase+ge.mArm)*9.80665;return[["Grip limit now",nn(n*e,2)+" N","hl"],["Weight on drive wheels",nn(Ce.drive*100,0)+" %"],["Slip, live",nn(Math.max(Math.abs(Ce.slipL),Math.abs(Ce.slipR)),2),"mg"],["Go-gain",nn(Ce.g,2)]]}},{id:"pow",title:"POWER",tag:"watts and speed",col:"#fbbf24",mini:"ptime",ang:-42,rad:340,foot:()=>`${nn(Ce.Pel,1)} W in \xB7 ${nn(Ce.energy,0)} J used`,cards:[["pow","Power vs wheel speed","One motor at three throttle settings. The dots are the motor right now."],["eff","Torque, current and efficiency",""],["ptime","Electrical power over the breakfast run","Both motors plus the electronics."]],reads:()=>[["Wheel speed",nn(Ce.w*60/(2*Math.PI),0)+" rpm"],["Mech. power / motor",nn(Ce.Pm/2,2)+" W","hl"],["Electrical in (both)",nn(Ce.Pel,2)+" W"],["Energy used so far",nn(Ce.energy,1)+" J","mg"]]},{id:"snd",title:"SOUND",tag:"ultrasonic echo",col:"#60a5fa",mini:"rays",ang:18,rad:360,foot:()=>{let n=Rr(Yo);return Ce.sn.d>=3.99?"no echo":`${nn(n.d*100,0)} cm \xB7 ${nn(2*n.d/ji(22)*1e6,0)} \xB5s echo`},cards:[["rays","The burst, the wall and the echo (top view)","Dots are the sound travelling, bright when strong."],["env","What the receiver hears","Signal in dB above the detection threshold."],["budget","Where the energy went","Loss budget of the first echo, in dB."],["range","How far each surface can be seen",""]],reads:()=>{let n=Rr(Yo),e=Qi(n.d,n.psi,n.wall),t=20*Math.log10(Math.max(e.amp,1e-9)/lt.thresh);return[["Reading",Ce.sn.d>=3.99?"no echo":nn(n.d*100,0)+" cm","hl"],["Echo time",nn(2*n.d/ji(22)*1e6,0)+" \xB5s"],["Echo vs threshold",(t>=0?"+":"\u2212")+nn(Math.abs(t),0)+" dB","mg"],["Returned energy",(Math.pow(10,-e.total/10)*100).toExponential(0)+" %"],["Detected",e.detected?"YES":"NO",e.detected?"ok":"bad"]]}},{id:"map",title:"MISSION MAP",tag:"where everything is",col:"#e879f9",mini:"map",ang:118,rad:300,foot:()=>`${Ah()} of ${vn.length} on the table`,cards:[["map","The counter from above",""]],reads:()=>[["State",d0[Ce.phase]],["Carrying",Ce.held?vn[Ce.item].full:"\u2014","hl"],["On the table",`${Ah()} of ${vn.length}`,"ok"],["Run time",nn(Ce.t,1)+" s"],["Sonar",Ce.sn.d>=3.99?"no echo":nn(Ce.sn.d*100,1)+" cm","mg"]]},{id:"code",title:"C++ CODE",tag:"patrick_mission.cpp",col:"#a78bfa",mini:"code",ang:172,rad:350,foot:()=>`${Ko.length} lines \xB7 case ${u0[Ce.phase]}`}],b0=Ft("k-bubbles"),S0=Ft("k-leaders"),$1="http://www.w3.org/2000/svg";Di.forEach((n,e)=>{let t=document.createElement("div");t.className="bub",t.tabIndex=0,t.setAttribute("role","button"),t.setAttribute("aria-label",`${n.title}: ${n.tag}. Press to open full screen`),t.style.setProperty("--c",n.col),t.innerHTML=`<div class="bub-head"><i></i><b>${n.title}</b><span>${n.tag}</span><em aria-hidden="true">\u2922</em></div>`+(n.mini==="code"?'<pre class="bub-code"></pre>':'<canvas class="bub-cv"></canvas>')+'<div class="bub-foot"></div>',b0.appendChild(t),n.el=t,n.cv=t.querySelector("canvas"),n.codeEl=t.querySelector("pre"),n.footEl=t.querySelector(".bub-foot"),n.x=innerWidth/2,n.y=innerHeight/2,n.hover=!1,n.cap="",n.lastPhase=-1,n.phase=e*1.7;let i=document.createElementNS($1,"line");i.setAttribute("stroke",n.col),i.setAttribute("stroke-opacity","0.45"),i.setAttribute("stroke-width","1"),i.setAttribute("stroke-dasharray","2 4"),S0.appendChild(i),n.line=i,t.addEventListener("pointerenter",()=>{n.hover=!0}),t.addEventListener("pointerleave",()=>{n.hover=!1}),t.addEventListener("focus",()=>{n.hover=!0}),t.addEventListener("blur",()=>{n.hover=!1}),t.addEventListener("click",()=>Td(n.id)),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),Td(n.id))})});var bd=new Ch,er={introR:0,introB:0,listR:230},Z1=document.querySelector(".k-intro");function J1(n,e){let t=tr.clientWidth,i=tr.clientHeight,s=t<760;if(b0.classList.toggle("dock",s),S0.style.display=s?"none":"",s)return;let r=Z1.getBoundingClientRect(),a=tr.getBoundingClientRect();er.introR=r.right-a.left,er.introB=r.bottom-a.top,er.listR=230,bd.set(As.root.position.x,.12,As.root.position.z).project(Ni);let o=(bd.x*.5+.5)*t,l=(-bd.y*.5+.5)*i,c=1-Math.exp(-n*3.2);Di.forEach(h=>{let u=Pr(t/1500,.78,1.1),d=o+Math.cos(h.ang*ts)*h.rad*u+Math.sin(e/1e3*.7+h.phase)*7,f=l+Math.sin(h.ang*ts)*h.rad*.62*u+Math.cos(e/1e3*.6+h.phase)*6;d=Pr(d,112,t-12-100),f=Pr(f,166,i-190),d<er.introR+110&&f<er.introB+80&&(t>1100?d=er.introR+110:f=er.introB+80),d<er.listR+110&&f>i-265&&(f=i-265),h.tx=d,h.ty=f});for(let h=0;h<3;h++)for(let u=0;u<Di.length;u++)for(let d=u+1;d<Di.length;d++){let f=Di[u],m=Di[d],x=212-Math.abs(f.tx-m.tx),g=160-Math.abs(f.ty-m.ty);if(x>0&&g>0){let p=f.hover?0:1,v=m.hover?0:1,T=p+v||1;if(x<g){let _=Math.sign(f.tx-m.tx)||1;f.tx+=_*x*p/T,m.tx-=_*x*v/T}else{let _=Math.sign(f.ty-m.ty)||1;f.ty+=_*g*p/T,m.ty-=_*g*v/T}}}Di.forEach(h=>{h.hover||(h.x+=(Pr(h.tx,112,t-112)-h.x)*c,h.y+=(Pr(h.ty,166,i-190)-h.y)*c),h.el.style.transform=`translate(${h.x}px, ${h.y}px) translate(-50%, -50%)`;let u=h.x-o,d=h.y-l,f=Math.hypot(u,d)||1,m=70;h.line.setAttribute("x1",o),h.line.setAttribute("y1",l),h.line.setAttribute("x2",h.x-u/f*Math.min(m,f*.5)),h.line.setAttribute("y2",h.y-d/f*Math.min(m*.6,f*.5)),h.line.style.opacity=h.hover?.9:1})}function K1(n,e){if(n.mini==="code"){if(n.lastPhase!==Ce.phase){n.lastPhase=Ce.phase;let i=M0(Ce.phase)||[0,8],s=Math.max(0,i[0]-1),r=Math.min(Ko.length,Math.max(i[1],s+9));n.codeEl.innerHTML=y0.slice(s,r).map((a,o)=>`<div class="${s+o>=i[0]&&s+o<i[1]?"act":""}"><u>${s+o+1}</u>${a||" "}</div>`).join("")}}else Md[n.mini](n.cv,Yo,!0,e);let t=n.foot();t!==n.footTxt&&(n.footTxt=t,n.footEl.textContent=t)}var $t={open:!1,id:null,cards:[],follow:!0,last:-1},Rh=Ft("k-modal"),Cr=Ft("k-mbody");function Td(n){let e=Di.find(t=>t.id===n);if($t.open=!0,$t.id=n,$t.cards=[],$t.last=-1,Ft("k-mtitle").innerHTML=`<i style="background:${e.col}"></i>${e.title}<span>${e.tag}</span>`,n==="code")Cr.className="mbody code",Cr.innerHTML=`<div class="ctools"><button class="chip" id="c-dl">\u2B07 DOWNLOAD patrick_mission.cpp</button><button class="chip" id="c-cp">COPY</button><button class="chip on" id="c-fl" aria-pressed="true">FOLLOW THE ROBOT</button><span class="cinfo">Highlighted: the controller step Patrick is running right now. Build: <code>g++ -O2 -std=c++17 patrick_mission.cpp -o patrick</code></span></div>
      <div class="cview" id="c-view"><pre>${y0.map((t,i)=>`<div data-l="${i}"><u>${i+1}</u>${t||" "}</div>`).join("")}</pre></div>`,Ft("c-dl").onclick=Y1,Ft("c-cp").onclick=async t=>{try{await navigator.clipboard.writeText(Eh),t.target.textContent="COPIED"}catch{t.target.textContent="PRESS CTRL+C"}setTimeout(()=>{t.target.textContent="COPY"},1600)},Ft("c-fl").onclick=t=>{$t.follow=!$t.follow,t.target.classList.toggle("on",$t.follow),t.target.setAttribute("aria-pressed",$t.follow)},$t.cards=[];else{Cr.className="mbody graphs n"+e.cards.length,Cr.innerHTML='<div class="reads" id="m-reads"></div><div class="grid">'+e.cards.map(([s,r,a],o)=>`<div class="card"><h4>${r}</h4>${a?`<div class="sub">${a}</div>`:""}<canvas></canvas><div class="cap"></div></div>`).join("")+"</div>";let t=Cr.querySelectorAll("canvas"),i=Cr.querySelectorAll(".cap");e.cards.forEach(([s],r)=>$t.cards.push({g:s,cv:t[r],cap:i[r],txt:""}))}Rh.classList.add("on"),document.body.classList.add("modal-open"),Ft("k-mclose").focus()}function Ph(){$t.open=!1,Rh.classList.remove("on"),document.body.classList.remove("modal-open"),Cr.innerHTML=""}Ft("k-mclose").addEventListener("click",Ph);Rh.addEventListener("click",n=>{n.target===Rh&&Ph()});function j1(n){let e=Di.find(i=>i.id===$t.id);if($t.id==="code"){if($t.last!==Ce.phase){$t.last=Ce.phase;let i=Ft("c-view");if(!i)return;i.querySelectorAll(".act").forEach(r=>r.classList.remove("act"));let s=M0(Ce.phase);if(!s)return;for(let r=s[0];r<s[1];r++)i.querySelector(`[data-l="${r}"]`)?.classList.add("act");if($t.follow){let r=i.querySelector(`[data-l="${s[0]}"]`);r&&i.scrollTo({top:Math.max(0,r.offsetTop-70),behavior:h0?"auto":"smooth"})}}return}$t.cards.forEach(i=>{let s=Md[i.g](i.cv,Yo,!1,n);s&&s!==i.txt&&(i.txt=s,i.cap.innerHTML=s)});let t=Ft("m-reads");if(t&&e.reads){let i=e.reads().map(([s,r,a])=>`<div class="rd ${a||""}"><span>${s}</span><b>${r}</b></div>`).join("");i!==$t.rh&&($t.rh=i,t.innerHTML=i)}}var w0=Ft("k-steps"),E0=Ft("k-items");$p.forEach(n=>{let e=document.createElement("span");e.textContent=n,w0.appendChild(e)});vn.forEach(n=>{let e=document.createElement("li");e.innerHTML=`<i></i>${n.name}`,E0.appendChild(e)});var c0="";function Q1(){let n=Zp[Ce.phase],e=Ce.phase===st.DONE,t=`${Ce.status}|${Ce.phase}|${Ce.item}|${Ah()}|${Math.floor(Ce.t*2)}`;t!==c0&&(c0=t,Ft("k-phase").textContent=d0[Ce.phase],Ft("k-time").textContent=nn(Ce.t,0)+" s",[...w0.children].forEach((i,s)=>{i.classList.toggle("on",!e&&s===n)}),[...E0.children].forEach((i,s)=>{let r=Ce.items[s];i.dataset.s=r.state,i.classList.toggle("now",s===Ce.item&&Ce.status!=="READY"&&r.state<2)}),Ft("k-prog").style.width=(Ah()+(Ce.held?.5:0))/vn.length*100+"%")}var qo=0,Th=0,Ad=performance.now(),Id=!0,Vn={sum:0,n:0,slow:0,age:0};new IntersectionObserver(n=>{Id=n[0].isIntersecting},{threshold:.05}).observe(tr);function eM(n,e){if(Ce.g>0||Ce.goal>0){qo+=Math.min(n,.05)*Wn.speed;let s=0;for(;qo>=Ce.dt&&s<160;)Ce.step(),qo-=Ce.dt,s++;s>=160&&(qo=0)}else qo=0;Cd();let t=As.pose({phi:Ce.phi,jaw:Ce.jaw,wl:Ce.wl,wr:Ce.wr,bands:!0,u:0});As.root.position.set(Ce.x,As.root.userData.lift||0,Gn(Ce.z)),As.root.rotation.y=Ce.yaw,Ce.items.forEach((s,r)=>{let a=m0[r];a.position.set(s.x,s.y,Gn(s.z)),a.rotation.y=s.yaw}),fi.target.position.set(Ce.x,0,Gn(Ce.z)),fi.position.set(Ce.x+.9,1.6,Gn(Ce.z)-.7);let i=Math.min(Ce.sn.d,.5);k1.scale.set(i,1,i),wd.position.set(i,0,0),wd.visible=Ce.sn.d<.5,Jo.visible=Ce.status!=="READY",Q1(),H1(n,e),J1(n,e)}function T0(n){let e=Math.min((n-Ad)/1e3,.1);Ad=n,Th++,!document.hidden&&Id&&(eM(h0&&Ce.status==="READY"?0:e,n),p0?Ta.render():Xn.render(Dn,Ni),Di.forEach(t=>{(Th%(t.hover?2:4)===t.id.length%2||Th<4)&&K1(t,n)}),$t.open&&Th%2===0&&j1(n),Ed<_0.length-1&&(Vn.age+=e,Vn.age>1.5&&(Vn.sum+=e,Vn.n++,Vn.n>=20&&(Vn.slow=Vn.sum/Vn.n>.026?Vn.slow+1:0,Vn.sum=Vn.n=0,Vn.slow>=2&&(Ed++,v0(),Vn.slow=0,Vn.age=0))))),requestAnimationFrame(T0)}function Sd(){v0(),Cd(),$o("cinema"),Et.t.copy(g0()),(Xn.compileAsync?Xn.compileAsync(Dn,Ni):Promise.resolve()).catch(()=>{}).finally(()=>{Ad=performance.now(),requestAnimationFrame(T0)}),window.__KITCHEN={sim:Ce,S:Wn,D:Yo,rig:Et,want:qt,robot:As,scene:Dn,camera:Ni,renderer:Xn,setCam:$o,act:Aa,openModal:Td,closeModal:Ph,modal:$t,itemMesh:m0,BUBBLES:Di}}document.fonts?.ready?.then(Sd,Sd)??Sd();var jo=180/Math.PI,ut=(n,e=2)=>n.toFixed(e),A0=()=>vr(zn(1),0),R0=()=>Ci(1).pts.reduce((n,e)=>e.Pm>n.Pm?e:n),Ld={structure:["STRUCTURE","#9aa0c3"],power:["POWER","#fbbf24"],motion:["MOTION","#60a5fa"],sense:["SENSE","#34d399"],control:["CONTROL","#a78bfa"],grip:["MANIPULATION","#e879f9"]},is={base:{tag:"structure",role:"The black acrylic base every other part is bolted to.",desc:"A 3 mm laser-cut plate. The two motors clamp to its sides, the caster and battery pack sit under the deck, and the HC-SR04 mounts on its front edge. It sets the wheelbase: the drive axle is 115 mm behind the caster, so the robot rolls on three points and cannot rock.",specs:()=>[["Size","200 x 116 x 3 mm"],["Material","Black acrylic"],["Drive axle to caster",`${ut(ge.casterX*1e3,0)} mm`],["Track (wheel to wheel)",`${ut(ge.track*1e3,0)} mm`]]},deck:{tag:"structure",role:"A second plate on four standoffs that carries the electronics.",desc:"Lifting the boards onto a deck keeps them clear of the battery and the lift servo underneath, and keeps wiring short. The slot down its middle is where the pushrod passes through when the arm is lowered. Two tall yellow brackets at the back hold the arm's pivot pins.",specs:()=>[["Standoffs","4 x 30 mm hex"],["Slot","for the pushrod"],["Carries","microcontroller, motor driver, ballast"]]},caster:{tag:"motion",role:"A steel ball that holds the nose up and lets the robot pivot freely.",desc:"With only two driven wheels the robot needs a third point of support. A free-rolling ball adds almost no friction and does not care which way the robot turns. Where it sits decides how much of the weight rides on the drive wheels, and that is the grip the rubber bands have to work with.",specs:()=>[["Position",`${ut(ge.casterX*1e3,0)} mm ahead of the axle`],["Weight on drive wheels (arm stowed)",`${ut(bs(Hn(ni).theta,!1).drive*100,0)} %`],["Weight on drive wheels (reaching, egg held)",`${ut(bs(Hn(ci).theta,!0).drive*100,0)} %`]]},battery:{tag:"power",role:"Four AA cells in series: the whole robot runs from this.",desc:"It is the heaviest single part, so its position matters as much as its capacity. It sits low and just behind the axle, which keeps the centre of mass low and puts weight over the drive wheels. It feeds the motor driver directly; the microcontroller board takes its 5 V from the driver's regulator.",specs:()=>[["Cells","4 x AA, in series"],["Nominal voltage",`${ut(yt.Vbat,1)} V`],["Reaching the motors",`${ut(yt.Vbat-yt.Vdrop,1)} V after the driver's drop`]]},motorL:null,motorR:null,wheelL:null,wheelR:null,bandL:null,bandR:null,l298n:{tag:"power",role:"Turns the microcontroller's weak signals into motor current, in both directions.",desc:"Two H-bridges. A PWM signal switches the battery on and off thousands of times a second; the duty cycle sets the average voltage and so the speed. Reversing the polarity reverses the wheel. Shorting the motor terminals through the bridge makes the motor a generator into a short circuit, which is the electrical brake Patrick uses to stop at the ingredient.",specs:()=>[["Channels","2 (one per wheel)"],["Current","2 A per channel"],["Voltage drop",`about ${ut(yt.Vdrop,1)} V (bipolar bridge)`],["Motor voltage at full duty",`${ut(zn(1),1)} V`]]},arduino:{tag:"control",role:"Runs the breakfast routine: read the sensor, decide, drive.",desc:"An Arduino-class board. It fires the ultrasonic pulse, times the echo, turns that into a distance, and runs a small state machine: approach, brake, reach, grip, lift, turn, carry, place, retreat. Each state sets the motor PWM and the two servo angles, and the transitions are driven by what the sensor reads.",specs:()=>[["Controller","ATmega328P, 16 MHz, 5 V logic"],["Reads","HC-SR04 echo time"],["Drives","2 PWM motor channels, 2 servos"],["Brakes when",`sensor reads ${ut(Ks*100,0)} cm, then coasts to about 8 cm`]]},ballast:{tag:"structure",role:"A brass weight that pulls the centre of mass back over the wheels.",desc:"An arm that reaches out in front of a robot moves its centre of mass forward and unloads the drive wheels, which is exactly when they need grip. A dense lump of brass at the back moves it the other way. The share of weight on the drive wheels in the table below is what the traction model uses.",specs:()=>[["Material","Brass"],["Weight on drive wheels, stowed",`${ut(bs(Hn(ni).theta,!1).drive*100,0)} %`],["Weight on drive wheels, reaching",`${ut(bs(Hn(ci).theta,!0).drive*100,0)} %`]]},sonar:{tag:"sense",role:"The robot's only eyes: it measures distance by timing an echo.",desc:"The left can sends a burst of eight 40 kHz pulses, the right can listens. The distance is half the round-trip time multiplied by the speed of sound. The beam is about 15 degrees wide, so a wall that is tilted more than that sends the echo away from the receiver, and soft surfaces absorb it. The panels on the right show the echo and where its energy goes.",specs:()=>[["Frequency",`${lt.f/1e3} kHz, ${lt.cycles}-cycle burst`],["Beam",`${ut(lt.beam*jo,0)}\xB0 (-6 dB)`],["Range",`${lt.minRange*100}-${lt.maxRange*100} cm`],["Speed of sound at 22 \xB0C",`${ut(ji(22),1)} m/s`],["Echo time at 10 cm",`${ut(2*.1/ji(22)*1e6,0)} \xB5s`]]},liftServo:{tag:"motion",role:"Raises and lowers the arm through a pushrod.",desc:"A micro servo turns a long horn; the pushrod joins the horn to the arm. Because the horn is 50 mm and the attachment point on the arm only 50 mm from the pivot, a modest 56 degrees of servo travel swings the arm through more than 70 degrees. The relation between the two angles is a circle-intersection, solved live in the model.",specs:()=>[["Type","SG90 micro servo"],["Torque","1.8 kg\xB7cm at 4.8 V"],["Horn radius",`${ut(ge.horn*1e3,0)} mm`],["Servo travel used",`${ut(ci*jo,0)}\xB0 to ${ut(ni*jo,0)}\xB0`],["Arm travel",`${ut(Hn(ci).theta*jo,0)}\xB0 to ${ut(Hn(ni).theta*jo,0)}\xB0`]]},pushrod:{tag:"motion",role:"The link that turns a small servo rotation into a large arm swing.",desc:"A fixed-length yellow link. One end rides the servo horn on a circle, the other is pinned to the arm, which itself swings about the pivot. Both ends move on circles, so the arm angle for a given servo angle is where those two circles meet, and a fixed length makes it a precise, repeatable mapping.",specs:()=>[["Length",`${ut(ge.rod*1e3,0)} mm, pin to pin`],["Pinned to the arm at",`${ut(ge.armAttach*1e3,0)} mm from the pivot`]]},arm:{tag:"grip",role:"Two parallel yellow bars that carry the claw out to the food.",desc:"Two equal bars, one above the other, with the claw bracket hanging between their tips make a parallelogram. As the arm swings, the bracket translates without turning, so the claw stays level whatever the lift angle. That is why an egg can be raised straight up from its crate and carried without tipping.",specs:()=>[["Bar length",`${ut(ge.armLen*1e3,0)} mm`],["Bar spacing","35 mm"],["Claw stays","level at every angle"],["Reach (lowered)",`${ut((ge.pivot[0]+ge.armLen*Math.cos(Hn(ci).theta))*1e3+40,0)} mm ahead of the axle`]]},gripper:{tag:"grip",role:"A 3D-printed teal claw: two hinged fingers that close on the ingredient.",desc:"Two fingers swing about hinges on a printed body. They open wide enough to straddle the ingredient while the robot is still braking, then close until they feel its width. Rounded pads at the tips spread the grip so a soft food item is held, not crushed.",specs:()=>[["Material","3D-printed, teal"],["Fingers","2, each 66 mm long"],["Opening","28\xB0 each side"],["Holds","up to about 40 mm across"]]},jawServo:{tag:"grip",role:"Opens and closes the claw.",desc:'The second micro servo sits on top of the claw body and drives both fingers. It is the last thing in the chain: the controller commands "open", waits for the arm to arrive, then commands "close". Mounting it on the claw, rather than the base, keeps the wiring short and the arm light.',specs:()=>[["Type","SG90 micro servo"],["Mass","9 g"],["Speed","0.1 s per 60\xB0"]]},nameplate:{tag:"structure",role:'A hand-lettered MDF name tag: "Patrick".',desc:"Reference 1 in the build log. Patrick is the first of the robots on this page, and the tag is the only part that does nothing but identify it, which on a table full of identical-looking chassis is worth a few grams.",specs:()=>[["Material","MDF, hand-lettered"],["Size","88 x 44 mm"]]},wiring:{tag:"control",role:"Jumper wires connecting the boards, motors, servos and sensor.",desc:"Red and black carry battery power, the coloured pairs carry the PWM and direction signals to the driver, and the single wires bring each servo its command and the sensor its trigger and echo. A tidy loom matters in a robot that moves: a loose jumper is the most common way a build fails.",specs:()=>[["Wires","8 runs shown"],["Signal levels","5 V logic"]]}},tM=()=>[["Diameter","65 mm, yellow TT rim"],["Rolling radius",`${ut(ge.wheelR*1e3,1)} mm (${ut((ge.wheelR+ge.bandT)*1e3,1)} mm with bands)`],["Peak grip, bare plastic",`\u03BC \u2248 ${ut(Ln(!1,"desk"),2)}`],["Peak grip, with bands",`\u03BC \u2248 ${ut(Ln(!0,"desk"),2)}`]],nM=()=>[["Type","TT gearmotor, 1:48"],["No-load speed",`${ut(yt.w0*60/(2*Math.PI),0)} rpm at 6 V, ${ut(Ci(1).w0*60/(2*Math.PI),0)} rpm at ${ut(zn(1),1)} V`],["Stall torque",`${ut(A0().tau,3)} N\xB7m at ${ut(zn(1),1)} V`],["Stall current",`${ut(A0().I,2)} A`],["Peak mechanical power",`${ut(R0().Pm,2)} W at ${ut(R0().rpm,0)} rpm`],["Best efficiency",`${ut(Math.max(...Ci(1).pts.map(n=>n.eff))*100,0)} %`]];is.motorL=is.motorR={tag:"motion",role:"A yellow TT gearmotor: one per wheel, so the robot steers by differential speed.",desc:"A small DC motor spinning fast, with a 48:1 plastic gearbox that trades speed for torque. Driving the two sides at different speeds turns the robot; driving them in opposite directions pivots it on the spot, which is how Patrick turns toward the breakfast tray. At full throttle the motor can ask for more force than a bare plastic wheel can pass to the desk.",specs:nM};is.wheelL=is.wheelR={tag:"motion",role:"A 65 mm wheel: the only place the robot touches the world.",desc:"The motor's torque becomes a push on the desk here, and the desk can only push back as hard as friction allows. A bare plastic rim on a varnished desk grips weakly, which is why the wheels are wrapped in rubber bands. Spin the wheel faster than the robot is travelling and the slip ratio in the dynamics charts rises.",specs:tM};is.bandL=is.bandR={tag:"motion",role:"Two rubber bands on each tyre: the cheap fix that stopped the wheels spinning.",desc:"Without them the wheels slipped on the smooth desk, so the robot launched crookedly and stopped late. A rubber band raises the friction coefficient from about 0.2 to about 1, so the drive wheels can use the force the motors make. The dynamics panel compares the same start with and without them; the toggle takes them off the robot itself.",specs:()=>[["Friction, bare plastic",`\u03BC \u2248 ${ut(Ln(!1,"desk"),2)}`],["Friction, with bands",`\u03BC \u2248 ${ut(Ln(!0,"desk"),2)}`],["Grip limit, bare",`${ut(Ri({bands:!1,surf:"desk"}).limit,2)} N`],["Grip limit, with bands",`${ut(Ri({bands:!0,surf:"desk"}).limit,2)} N`],["Motor force at stall",`${ut(Ri({bands:!0,surf:"desk"}).pts[0][1],2)} N`],["Adds to radius",`${ut(ge.bandT*1e3,1)} mm`]]};var Oe=n=>document.getElementById(n),as=(n,e,t)=>Math.min(t,Math.max(e,n)),Pa=Math.PI/180,zd=matchMedia("(prefers-reduced-motion: reduce)").matches,Oi=U,iM=25,St=Es,pe={bands:!0,surf:"desk",duty:.7,follow:!0,d:1,psi:0,wall:"card",sonarViz:!0,play:!0,u:0,uT:0,sel:null,hover:null,iso:!1,tab:"dyn"},Ra=Oe("stage"),mi=Oe("gl"),$n=new ma({canvas:mi,antialias:!0,powerPreference:"high-performance"});$n.toneMapping=xs;$n.toneMappingExposure=1;$n.outputColorSpace=Vt;$n.shadowMap.enabled=!0;$n.shadowMap.type=gs;var Sn=new fs;Sn.background=new qe("#0a0f26");Sn.fog=new hr("#0a0f26",2.2,5.5);var sM=new Zs($n);function rM(){let n=new fs,e=new tt(new un(12,32,16),new sn({color:new qe("#1d2442"),side:rn}));n.add(e);let t=(i,s,r,a,o,l="#ffffff")=>{let c=new tt(new jn(i,s),new sn({color:new qe(l).multiplyScalar(o),side:Kt}));c.position.set(...r),c.lookAt(...a),n.add(c)};return t(7,5,[-4,7,-5],[0,0,0],4.2),t(1.4,7,[6,3,4],[0,0,0],5.5,"#dbe7ff"),t(3,3,[-6,2,5],[0,0,0],3.2,"#ffd9b0"),t(10,10,[0,11,0],[0,0,0],1.1),t(12,3,[0,-2.5,-8],[0,0,0],.9,"#8aa0ff"),sM.fromScene(n,.015).texture}Sn.environment=rM();Sn.environmentIntensity=.9;var gi=new hn(36,1,.05,9),mn=new ms("#fff3e0",2.3);mn.position.set(.9,1.6,-.7);mn.castShadow=!0;mn.shadow.camera.left=-.55;mn.shadow.camera.right=.55;mn.shadow.camera.top=.55;mn.shadow.camera.bottom=-.55;mn.shadow.camera.near=.2;mn.shadow.camera.far=4;mn.shadow.bias=-4e-4;mn.shadow.normalBias=.002;Sn.add(mn,mn.target);var L0=new ms("#9db7ff",.7);L0.position.set(-1,.8,1);Sn.add(L0);Sn.add(new pr("#aab8ff","#1a1530",.55));var aM=new Xt(4,4,{type:tn,samples:4}),Ia=new _a($n,aM);Ia.addPass(new va(Sn,gi));var nl=new vs(Sn,gi,4,4);nl.output=vs.OUTPUT.Default;nl.updateGtaoMaterial({radius:.035,distanceExponent:1.2,thickness:.6,scale:1.25,samples:14,distanceFallOff:1,screenSpaceRadius:!1});nl.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,radiusExponent:1,rings:2,samples:12});Ia.addPass(nl);Ia.addPass(new ya);var D0=!0;function oM(){let n=document.createElement("canvas");n.width=n.height=512;let e=n.getContext("2d");e.fillStyle="#171c3a",e.fillRect(0,0,512,512);for(let i=0;i<700;i++)e.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,e.fillRect(Math.random()*512,Math.random()*512,30+Math.random()*70,1);e.strokeStyle="rgba(167,139,250,0.22)",e.lineWidth=2,e.strokeRect(1,1,510,510),e.strokeStyle="rgba(167,139,250,0.08)",e.lineWidth=1;for(let i=1;i<5;i++)e.beginPath(),e.moveTo(i*102.4,0),e.lineTo(i*102.4,512),e.moveTo(0,i*102.4),e.lineTo(512,i*102.4),e.stroke();let t=new Xi(n);return t.wrapS=t.wrapT=An,t.repeat.set(10,8),t.colorSpace=Vt,t.anisotropy=4,t}var Fh=new tt(new jn(2.6,2.08),new On({map:oM(),color:"#8f96c0",roughness:.6,metalness:.05}));Fh.rotation.x=-Math.PI/2;Fh.position.set(.1,0,0);Fh.receiveShadow=!0;Sn.add(Fh);var N0=new tt(new dt(2.6,.04,2.08),new On({color:"#0e1230",roughness:.8}));N0.position.set(.1,-.0205,0);Sn.add(N0);var U0=new On({color:"#b98e5c",roughness:.75}),il=new Ht;Sn.add(il);var rs=n=>-n;function Oh(n,e,t,i,s,r,a){let o=new tt(new dt(n,e,t),i);return o.position.set(s,r,a),o.castShadow=o.receiveShadow=!0,il.add(o),o}var ss=kn.crate,Ui=kn.tray;Oh(ss.hx*2,ss.h,ss.hz*2,U0,ss.x,ss.h/2,rs(ss.z));Oh(Ui.hx*2,Ui.h,Ui.hz*2,U0,Ui.x,Ui.h/2,rs(Ui.z));{let n=new tt(new _n(.036,.032,.006,40),new On({color:"#ece9e2",roughness:.3}));n.position.set(Ui.x,Ui.h+.003,rs(Ui.z)),n.castShadow=n.receiveShadow=!0,il.add(n)}Oh(.05,.008,.05,new On({color:"#d9a85a",roughness:.9}),ss.x+.01,.004,rs(ss.z+.17));{let n=new tt(new un(.02,24,16),new On({color:"#f08a1c",roughness:.6}));n.position.set(ss.x-.03,.02,rs(ss.z-.16)),n.castShadow=!0,il.add(n)}{let n=new tt(new _n(.02,.016,.04,28),new On({color:"#e8e4dc",roughness:.3}));n.position.set(Ui.x-.09,.02,rs(Ui.z+.05)),n.castShadow=!0,il.add(n)}Oh(.012,.12,1.4,new On({color:"#a8825a",roughness:.9}),kn.wall.x+.006,.06,0);var Qo=new tt(new un(1,28,20),new On({color:"#f1e6cf",roughness:.4}));Qo.scale.set(.0155,.0225,.0155);Qo.castShadow=!0;Sn.add(Qo);var Yn=Sh();Sn.add(Yn.root);var Fi=Yn.byId,La=new Ht;Yn.root.add(La);La.position.set(ge.sensorX+.008,ge.sensorY,0);var Ud=new Pt;{let e=[0,0,0];for(let i=0;i<=16;i++){let s=(i/16*2-1)*lt.beam;e.push(Math.cos(s),0,Math.sin(s))}let t=[];for(let i=1;i<=16;i++)t.push(0,i,i+1);Ud.setAttribute("position",new ht(e,3)),Ud.setIndex(t)}var F0=new tt(Ud,new sn({color:"#60a5fa",transparent:!0,opacity:.1,side:Kt,depthWrite:!1}));La.add(F0);var lM=(()=>{let n=[];for(let e=0;e<=24;e++){let t=(e/24*2-1)*lt.beam;n.push(new Oi(Math.cos(t),0,Math.sin(t)))}return new Pt().setFromPoints(n)})(),cM=[0,1,2].map(()=>{let n=new Ja(lM,new sa({color:"#7dd3fc",transparent:!0,opacity:.5,depthWrite:!1}));return La.add(n),n}),Fd=new tt(new un(.006,12,8),new sn({color:"#f472b6"}));La.add(Fd);var pn=Mh({bands:pe.bands,surf:pe.surf,duty:pe.duty}),fn=0,Ca=0,bn={};function O0(){bn.stepOn=br({bands:!0,surf:pe.surf,duty:1}),bn.stepOff=br({bands:!1,surf:pe.surf,duty:1}),bn.tracOn=Ri({bands:!0,surf:pe.surf,duty:1}),bn.tracOff=Ri({bands:!1,surf:pe.surf,duty:1}),bn.power=[.4,.7,1].map(n=>Ci(n,pe.bands)),bn.powerSel=Ci(pe.duty,pe.bands),bn.ranges=Object.keys(hi).map(n=>[n,Ho(n)])}function Bh(){pn=Mh({bands:pe.bands,surf:pe.surf,duty:pe.duty}),fn=0,Ca=0,Oe("r-dur").textContent=pn.duration.toFixed(1)+" s",O0(),ol(!0)}var hM={hero:{az:-50,el:20,dist:.9,at:"robot"},side:{az:-90,el:5,dist:.7,at:"robot"},top:{az:-90,el:84,dist:.78,at:"robot"},front:{az:8,el:10,dist:.5,at:"sonar"},arm:{az:-75,el:14,dist:.5,at:"arm"},wheel:{az:-105,el:9,dist:.3,at:"wheelL"}},Ot={az:-50*Pa,el:20*Pa,dist:.9,t:new Oi(0,.08,0)},dn={az:Ot.az,el:Ot.el,dist:Ot.dist,mode:"robot"},uM="hero",dM=null;function Lh(n,e){let t=hM[n];t&&(uM=n,dM=null,e||(pe.sel=pe.sel),dn.az=t.az*Pa,dn.el=t.el*Pa,dn.dist=t.dist,dn.mode=t.at,document.querySelectorAll("#views .chip").forEach(i=>i.classList.toggle("on",i.dataset.view===n)))}var C0=(n,e)=>{let t=new Fn().setFromObject(Fi[n].group);return t.getCenter(e),t},nr=new Oi,aT=new Fn;function B0(){let n=Yn.root.position;if(pe.sel&&Fi[pe.sel])return new Fn().setFromObject(Fi[pe.sel].group).getCenter(nr),nr;switch(dn.mode){case"sonar":return nr.set(n.x,.05,n.z).add(new Oi(.07,0,0).applyAxisAngle(new Oi(0,1,0),Yn.root.rotation.y));case"arm":return C0("arm",nr),nr;case"wheelL":return C0("wheelL",nr),nr;default:return nr.set(n.x,.115+pe.u*.06,n.z).add(new Oi(.03,0,0).applyAxisAngle(new Oi(0,1,0),Yn.root.rotation.y))}}function fM(){if(!pe.sel||!Fi[pe.sel])return null;let n=new Fn().setFromObject(Fi[pe.sel].group),e=n.getSize(new Oi);return as(Math.max(e.x,e.y,e.z)*3.2+.1,.22,.7)}function pM(n){let e=1-Math.exp(-n*5.5),i=fM()??dn.dist*(1+.55*pe.u);Ot.az+=(dn.az-Ot.az)*e,Ot.el+=(dn.el-Ot.el)*e,Ot.dist+=(i-Ot.dist)*e,Ot.t.lerp(B0(),1-Math.exp(-n*6));let s=Math.cos(Ot.el);gi.position.set(Ot.t.x+Ot.dist*s*Math.cos(Ot.az),Ot.t.y+Ot.dist*Math.sin(Ot.el),Ot.t.z+Ot.dist*s*Math.sin(Ot.az)),gi.lookAt(Ot.t)}var k0=[{pr:1.6,shadow:2048,post:2},{pr:1.3,shadow:1024,post:1},{pr:1,shadow:512,post:0}],Od=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<700?2:0;function z0(){let n=k0[Od];$n.setPixelRatio(Math.min(devicePixelRatio||1,n.pr)),D0=n.post>0,nl.enabled=n.post>1,mn.shadow.mapSize.set(n.shadow,n.shadow),mn.shadow.map&&(mn.shadow.map.dispose(),mn.shadow.map=null),H0()}function H0(){let n=Ra.clientWidth,e=Ra.clientHeight;$n.setSize(n,e,!1),Ia.setPixelRatio($n.getPixelRatio()),Ia.setSize(n,e),gi.aspect=n/e,gi.fov=n/e<.9?52:36,gi.updateProjectionMatrix()}addEventListener("resize",()=>{H0(),ol(!0)});var P0=new po,I0=new ve,Ir=null,mM=n=>{for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0};function G0(n,e){let t=mi.getBoundingClientRect();I0.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),P0.setFromCamera(I0,gi);let i=Yn.meshes.filter(mM),s=P0.intersectObjects(i,!1).find(r=>!(pe.iso&&pe.sel&&r.object.userData.part!==pe.sel));return s?s.object.userData.part:null}var gM=new qe("#a78bfa");function Lr(){for(let n of Yn.parts){let e=pe.sel===n.id,t=pe.hover===n.id&&!e,i=pe.iso&&pe.sel&&!e;for(let s of n.mats){s.emissive.copy(gM).multiplyScalar(e?.16:t?.12:0);let r=i;s.transparent!==r&&(s.transparent=r,s.needsUpdate=!0),s.opacity=i?.07:1,s.depthWrite=!i}}}var xM=n=>Ld[n][1];function sl(){let n=Oe("pcard");if(!pe.sel){n.innerHTML='<div class="empty"><b>Click any part</b> of Patrick, or pick one from the list below, to see what it is and what it does. Slide <b>Disassemble</b> to take the robot apart, and use <b>Isolate</b> on a part to see it alone.</div>';return}let e=Fi[pe.sel],t=is[pe.sel],[i,s]=Ld[t.tag];n.innerHTML=`<div class="tagrow"><span class="tag" style="color:${s};border-color:${s}66">${i}</span><h3>${e.name}</h3>
    <div class="acts"><button class="chip ${pe.iso?"on":""}" id="pc-iso" aria-pressed="${pe.iso}">ISOLATE</button><button class="chip" id="pc-close">CLOSE</button></div></div>
    <p class="role">${t.role}</p><p class="desc">${t.desc}</p>
    <div class="specs">${t.specs().map(([r,a])=>`<div><span>${r}</span><b>${a}</b></div>`).join("")}</div>`,Oe("pc-iso").onclick=()=>{pe.iso=!pe.iso,Lr(),sl(),ln()},Oe("pc-close").onclick=()=>{Da(null),ln()}}function Da(n){pe.sel=n,n||(pe.iso=!1),Lr(),sl(),document.querySelectorAll("#partlist .chip").forEach(t=>t.classList.toggle("on",t.dataset.id===n));let e=n?is[n].tag:null;n&&!Lt.running&&Dh({sense:"snd",power:"pow",motion:"dyn"}[e]||pe.tab),n&&Lt.running&&Dh({sense:"snd",power:"pow",motion:"dyn"}[e]||pe.tab),n&&pe.u<.35&&!Lt.running&&(pe.uT=pe.u)}var _M=Oe("partlist");Yn.parts.forEach(n=>{let e=document.createElement("button");e.className="chip",e.dataset.id=n.id,e.textContent=n.name.toUpperCase(),e.style.setProperty("--c",xM(is[n.id].tag)),e.onclick=()=>{Da(pe.sel===n.id?null:n.id),ln()},_M.appendChild(e)});var V0=Oe("steps"),vM=["APPROACH","BRAKE","REACH","GRIP","LIFT","TURN","CARRY","PLACE","RETREAT"],yM={1:0,2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:7,10:8};vM.forEach(n=>{let e=document.createElement("span");e.textContent=n,V0.appendChild(e)});function Dh(n){pe.tab=n,document.querySelectorAll("#tabs button").forEach(e=>e.classList.toggle("on",e.dataset.tab===n)),["dyn","pow","snd"].forEach(e=>Oe("tab-"+e).classList.toggle("on",e===n)),ol(!0)}document.querySelectorAll("#tabs button").forEach(n=>n.addEventListener("click",()=>{Dh(n.dataset.tab),ln()}));document.querySelectorAll("#views .chip").forEach(n=>n.addEventListener("click",()=>{pe.sel=null,pe.iso=!1,Lr(),sl(),document.querySelectorAll("#partlist .chip").forEach(e=>e.classList.remove("on")),Lh(n.dataset.view),ln()}));function W0(n){pe.bands!==n&&(pe.bands=n,Oe("t-bands").setAttribute("aria-pressed",n),Oe("t-bands").textContent=n?"RUBBER BANDS ON":"RUBBER BANDS OFF",document.querySelectorAll("#d-bands button").forEach(e=>e.classList.toggle("on",e.dataset.b==="1"===n)),Bh())}Oe("t-bands").addEventListener("click",()=>{W0(!pe.bands),ln()});document.querySelectorAll("#d-bands button").forEach(n=>n.addEventListener("click",()=>{W0(n.dataset.b==="1"),ln()}));Oe("t-play").addEventListener("click",()=>{pe.play=!pe.play,Oe("t-play").setAttribute("aria-pressed",pe.play),Oe("t-play").textContent=pe.play?"PAUSE RUN":"PLAY RUN",ln()});Oe("t-replay").addEventListener("click",()=>{fn=0,Ca=0,pe.play=!0,Oe("t-play").setAttribute("aria-pressed",!0),Oe("t-play").textContent="PAUSE RUN",ln()});Oe("t-sonar").addEventListener("click",n=>{pe.sonarViz=!pe.sonarViz,n.currentTarget.setAttribute("aria-pressed",pe.sonarViz),ln()});Oe("u").addEventListener("input",n=>{pe.uT=pe.u=+n.target.value,ln()});Oe("d-surf").addEventListener("change",n=>{pe.surf=n.target.value,Bh(),ln()});Oe("duty").addEventListener("input",n=>{pe.duty=+n.target.value,Oe("duty-out").textContent=Math.round(pe.duty*100)+" %",O0(),ol(!0),ln()});Oe("duty").addEventListener("change",()=>{Bh()});document.querySelectorAll("#s-src button").forEach(n=>n.addEventListener("click",()=>{pe.follow=n.dataset.f==="1",document.querySelectorAll("#s-src button").forEach(e=>e.classList.toggle("on",e===n)),ln()}));Oe("s-d").addEventListener("input",n=>{pe.d=+n.target.value,pe.follow=!1,document.querySelectorAll("#s-src button").forEach(e=>e.classList.toggle("on",e.dataset.f==="0")),ln()});Oe("s-psi").addEventListener("input",n=>{pe.psi=+n.target.value*Pa,Oe("s-psi-out").textContent=n.target.value+"\xB0",ln()});Oe("s-wall").addEventListener("change",n=>{pe.wall=n.target.value,ln()});var pi=new Map,Ih=0,Nh=!1;mi.addEventListener("pointerdown",n=>{if(mi.setPointerCapture(n.pointerId),pi.set(n.pointerId,[n.clientX,n.clientY]),Nh=!1,mi.classList.add("drag"),ln(),pi.size===2){let[e,t]=[...pi.values()];Ih=Math.hypot(e[0]-t[0],e[1]-t[1])}});mi.addEventListener("pointermove",n=>{if(Ir=[n.clientX,n.clientY],!pi.has(n.pointerId))return;let e=pi.get(n.pointerId);if(pi.set(n.pointerId,[n.clientX,n.clientY]),pi.size===1){let t=n.clientX-e[0],i=n.clientY-e[1];Math.abs(t)+Math.abs(i)>1&&(Nh=!0),dn.az+=t*.008,dn.el=as(dn.el+i*.006,.03,1.5),Ot.az=dn.az,Ot.el=dn.el}else if(pi.size===2){let[t,i]=[...pi.values()],s=Math.hypot(t[0]-i[0],t[1]-i[1]);Ih&&(dn.dist=as(dn.dist*Ih/s,.18,1.6),Ot.dist=dn.dist),Ih=s,Nh=!0}});var X0=n=>{let e=pi.size===1&&!Nh;if(pi.delete(n.pointerId),mi.classList.remove("drag"),e&&n.type==="pointerup"){let t=G0(n.clientX,n.clientY);Da(t===pe.sel?null:t)}};mi.addEventListener("pointerup",X0);mi.addEventListener("pointercancel",X0);mi.addEventListener("pointerleave",()=>{Ir=null,pe.hover=null,Oe("tip").classList.remove("on"),Lr()});mi.addEventListener("wheel",n=>{n.preventDefault(),dn.dist=as(dn.dist*Math.exp(n.deltaY*.0012),.18,1.6),ln()},{passive:!1});addEventListener("keydown",n=>{n.key==="Escape"&&Da(null)});var Lt={running:!zd,t:0,idx:0,idle:0},Dd=[{t:0,view:"hero",u:0,play:!0,sel:null,tab:"dyn"},{t:7,view:"arm",tab:"dyn"},{t:12,view:"hero",tab:"snd"},{t:16,view:"hero",u:1,play:!1,tab:"dyn"},{t:19,sel:"sonar"},{t:25,sel:"motorL"},{t:31,sel:"bandL",tab:"dyn"},{t:37,sel:"liftServo"},{t:42,sel:"arduino"},{t:47,sel:null,u:0,play:!0,view:"hero",tab:"dyn"},{t:55,end:!0}];function MM(n){"view"in n&&(pe.sel=null,pe.iso=!1,Lh(n.view)),"u"in n&&(pe.uT=n.u),"play"in n&&(pe.play=n.play,Oe("t-play").setAttribute("aria-pressed",pe.play),Oe("t-play").textContent=pe.play?"PAUSE RUN":"PLAY RUN"),"sel"in n&&Da(n.sel),"tab"in n&&Dh(n.tab),n.end&&(Lt.t=0,Lt.idx=0)}function ln(){Lt.running&&(Lt.running=!1,Oe("tourchip").classList.remove("on")),Lt.idle=0,Oe("tourtxt").textContent="REPLAY TOUR"}Oe("tourchip").addEventListener("click",()=>{Lt.running=!0,Lt.t=0,Lt.idx=0,Lt.idle=0,pe.sel=null,Lr(),sl()});Oe("tourchip").addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),Oe("tourchip").click())});function bM(n){if(Lt.running||(Lt.idle+=n,Lt.idle>iM&&!zd&&Uh&&(Lt.running=!0,Lt.t=0,Lt.idx=0)),Lt.running){for(Lt.t+=n;Lt.idx<Dd.length&&Dd[Lt.idx].t<=Lt.t;)MM(Dd[Lt.idx++]);Oe("tourtxt").textContent="AUTO TOUR \xB7 TAP TO STOP"}Oe("tourchip").classList.toggle("on",Lt.running)}var el="#34d399",tl="#f87171",rl={};["c-speed","c-slip","c-trac","c-pow","c-eff","c-ptime","c-rays","c-env","c-budget","c-range"].forEach(n=>{rl[n]=Oe(n)});var Dr=n=>{let{ctx:e,w:t,h:i}=Pi(rl[n]);return{ctx:e,w:t,h:i,r:{x:46,y:12,w:t-62,h:i-46}}};function SM(){let{ctx:n,r:e}=Dr("c-speed"),t=bn.stepOn,i=bn.stepOff,s=(o,l)=>o.t.map((c,h)=>[c,o[l][h]]),r=Math.max(...t.wr,...i.wr)*1.12;Mn(n,e,{xr:[0,1],yr:[0,r],nx:5,ny:4,xl:"time since full throttle (s)",yl:"speed (m/s)",series:[{pts:s(i,"wr"),color:"rgba(248,113,113,0.55)",width:1.4,dash:[4,4]},{pts:s(t,"wr"),color:"rgba(52,211,153,0.55)",width:1.4,dash:[4,4]},{pts:s(i,"v"),color:tl,width:2.6},{pts:s(t,"v"),color:el,width:2.6}]});let a=t.t.findIndex(o=>o>=.3);Oe("cap-speed").innerHTML=`At 0.3 s the banded robot is moving at <b>${t.v[a].toFixed(2)} m/s</b>; the bare one at <b>${i.v[a].toFixed(2)} m/s</b> while its wheel surfaces are doing <b>${i.wr[a].toFixed(2)} m/s</b>. The gap between the dashed and solid red lines is wheel spin.`}function wM(){let{ctx:n,r:e}=Dr("c-slip"),t=bn.stepOn,i=bn.stepOff;Mn(n,e,{xr:[0,1],yr:[-.05,1.05],nx:5,ny:4,xl:"time since full throttle (s)",yl:"slip ratio",series:[{pts:i.t.map((s,r)=>[s,i.slip[r]]),color:tl,width:2.6,fill:"rgba(248,113,113,0.1)"},{pts:t.t.map((s,r)=>[s,t.slip[r]]),color:el,width:2.6}],over:[(s,r)=>{Je(n,`peak ${Math.max(...i.slip).toFixed(2)} bare`,s(.98),r(Math.max(...i.slip))-8,tl,"right",10),Je(n,`peak ${Math.max(...t.slip).toFixed(2)} with bands`,s(.98),r(.12),el,"right",10)}]})}function EM(){let{ctx:n,r:e}=Dr("c-trac"),t=bn.tracOn,i=bn.tracOff,s=Math.max(t.pts[0][1],t.limit)*1.2;Mn(n,e,{xr:[0,.8],yr:[0,s],nx:4,ny:4,xl:"robot speed (m/s)",yl:"force at the ground (N)",under:[(r,a)=>{n.fillStyle="rgba(248,113,113,0.1)",n.beginPath(),t.pts.forEach(([o,l],c)=>{let h=Math.max(a(l),a(i.limit)-0);c?n.lineTo(r(o),Math.min(a(i.limit),a(l))):n.moveTo(r(o),Math.min(a(i.limit),a(l)))}),t.pts.slice().reverse().forEach(([o])=>n.lineTo(r(o),a(i.limit))),n.closePath(),n.fill()}],series:[{pts:t.pts,color:St.amber,width:2.6},{pts:[[0,t.limit],[.8,t.limit]],color:el,width:1.8,dash:[6,4]},{pts:[[0,i.limit],[.8,i.limit]],color:tl,width:1.8,dash:[6,4]}],over:[(r,a)=>{Je(n,"motor force",r(.42),a(t.pts[Math.round(t.pts.length*.5)][1])-12,St.amber,"left",10),Je(n,"grip limit with bands",r(.79),a(t.limit)-9,el,"right",10),Je(n,"grip limit, bare",r(.79),a(i.limit)-9,tl,"right",10)}]}),Oe("cap-trac").innerHTML=`At stall the two motors push with <b>${t.pts[0][1].toFixed(1)} N</b>. Bare plastic can only pass <b>${i.limit.toFixed(1)} N</b> to the desk (shaded: wasted as wheel spin); with bands the limit is <b>${t.limit.toFixed(1)} N</b>, so almost all of it reaches the ground.`}function TM(){let{ctx:n,r:e}=Dr("c-pow"),t={...e,w:e.w-34},i=bn.power,s=i[2],r=s.pts[s.pts.length-1].rpm*1.02,a=Math.max(...i.map(f=>Math.max(...f.pts.map(m=>m.Pm))))*1.25,o=Math.max(...i.map(f=>Math.max(...f.pts.map(m=>m.Pel))))*1.05,l=a/o,c=["rgba(251,191,36,0.4)","rgba(251,191,36,0.7)","#fbbf24"],h=[];i.forEach((f,m)=>h.push({pts:f.pts.map(x=>[x.rpm,x.Pel*l]),color:"rgba(154,160,195,"+(.3+m*.2)+")",width:1.3,dash:[4,4]})),i.forEach((f,m)=>h.push({pts:f.pts.map(x=>[x.rpm,x.Pm]),color:c[m],width:m===2?2.8:2}));let u=Ss(pn,fn);Mn(n,t,{xr:[0,r],yr:[0,a],nx:5,ny:4,xl:"wheel speed (rpm)",yl:"mechanical power out, per motor (W)",series:h,over:[(f,m)=>{[.4,.7,1].forEach((v,T)=>{let _=i[T],w=_.pts.reduce((E,A)=>A.Pm>E.Pm?A:E);Je(n,`${Math.round(v*100)} %`,f(w.rpm),m(w.Pm)-9,"#fbbf24","center",10,"600")});let x=u.w*60/(2*Math.PI),g=u.Pm/2,p=u.Pel/2;p>.05&&(Ii(n,f(Math.min(x,r)),m(g),St.pink),Ii(n,f(Math.min(x,r)),m(Math.min(p*l,a)),St.blue,3.5))}]}),n.font=`10px ${Er}`,n.textAlign="left",n.textBaseline="middle",n.fillStyle=St.muted,ba(0,o,4).forEach(f=>{let m=t.y+t.h-f*l/a*t.h;n.fillStyle=St.faint,n.fillText(String(+f.toPrecision(2)),t.x+t.w+5,m)}),n.save(),n.translate(t.x+t.w+30,t.y+t.h/2),n.rotate(Math.PI/2),Je(n,"electrical power in (W), dashed",0,0,St.muted,"center"),n.restore();let d=bn.powerSel.pts.reduce((f,m)=>m.Pm>f.Pm?m:f);Oe("cap-pow").innerHTML=`At ${Math.round(pe.duty*100)} % throttle one motor delivers at most <b>${d.Pm.toFixed(2)} W</b> at <b>${d.rpm.toFixed(0)} rpm</b>, half its free speed, while drawing about <b>${d.Pel.toFixed(1)} W</b> from the battery: the rest is heat in the windings and gearbox. Pink dot: mechanical power now; blue: electrical.`}function AM(){let{ctx:n,r:e}=Dr("c-eff"),t=bn.powerSel,i=t.pts,s=Math.max(...i.map(l=>l.tau)),r=Math.max(...i.map(l=>l.I)),a=Math.max(...i.map(l=>l.eff)),o=i[i.length-1].rpm;Mn(n,e,{xr:[0,o],yr:[0,105],nx:5,ny:4,xl:"wheel speed (rpm)",yl:"% of maximum",series:[{pts:i.map(l=>[l.rpm,l.I/r*100]),color:"rgba(154,160,195,0.8)",width:1.6,dash:[4,4]},{pts:i.map(l=>[l.rpm,Math.max(0,l.tau)/s*100]),color:St.blue,width:2.4},{pts:i.map(l=>[l.rpm,l.eff/a*100]),color:St.pink,width:2.4}],over:[(l,c)=>{Je(n,`torque ${(s*100).toFixed(1)} N\xB7cm at stall`,e.x+8,e.y+12,St.blue,"left",10),Je(n,`peak efficiency ${(a*100).toFixed(0)} %`,e.x+8,e.y+27,St.pink,"left",10),Je(n,`stall current ${r.toFixed(2)} A`,e.x+8,e.y+42,St.muted,"left",10);let h=Ss(pn,fn),u=h.w*60/(2*Math.PI);h.Pel>.05&&Tr(n,l,Math.min(u,o),e.y,e.y+e.h)}]})}function RM(){let{ctx:n,r:e}=Dr("c-ptime"),t=pn.t.map((s,r)=>[s,pn.Pel[r]]),i=Math.max(...pn.Pel)*1.15;Mn(n,e,{xr:[0,pn.duration],yr:[0,i],nx:6,ny:4,xl:"time (s)",yl:"electrical power (W)",series:[{pts:t,color:"rgba(251,191,36,0.9)",width:2,fill:"rgba(251,191,36,0.1)"},{pts:t,color:"#fbbf24",width:2,upTo:fn}],over:[(s,r)=>{Tr(n,s,fn,e.y,e.y+e.h);let a=Ss(pn,fn);Ii(n,s(fn),r(a.Pel),St.pink)}]})}function CM(n){let{ctx:e,w:t,h:i}=Pi(rl["c-rays"]),s=al(),r=s.d,a=s.psi,o=s.wall,l=26,c=l,h=i/2,u=(t-l-34)/Math.max(r,.35),d=(G,Z)=>[c+G*u,h-Z*u];e.fillStyle="rgba(167,139,250,0.25)",e.strokeStyle=St.accent,e.lineWidth=1.5;let[f,m]=d(0,.1),[,x]=d(0,-.1);e.fillRect(c-16,m,16,x-m),e.beginPath(),e.moveTo(f,m),e.lineTo(f,x),e.stroke(),Je(e,"PATRICK",c-12,i-14,St.faint,"left",9),e.setLineDash([3,5]),e.strokeStyle="rgba(96,165,250,0.35)",e.lineWidth=1;for(let G of[-1,1])e.beginPath(),e.moveTo(c,h),e.lineTo(c+Math.cos(lt.beam)*u*r*1.4,h-G*Math.sin(lt.beam)*u*r*1.4),e.stroke();e.setLineDash([]);let g=-Math.cos(a),p=-Math.sin(a),v=Math.sin(a),T=-Math.cos(a),_=Math.max(.9,r*.7),[w,E]=d(r+v*_,T*_),[A,M]=d(r-v*_,-T*_),b={hard:"#cfd4dc",wood:"#b98e5c",card:"#c89a52",cloth:"#a78bfa"}[o];e.strokeStyle=b,e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(w,E),e.lineTo(A,M),e.stroke(),e.lineCap="butt",Je(e,hi[o].name.toUpperCase(),Math.min(t-8,w+6),Math.max(12,Math.min(E,M)-12),b,"right",9);let C=343,P=Math.max(.35,2*r/2.4),F=4.6*r+.7,B=n/1e3%(F/P+.5),D=P*B,z=lt.thresh,W=lt.ref,J=hi[o],le=0;for(let G=0;G<61;G++){let Z=(G/60*2-1)*42*Pa,se=Math.exp(-Math.pow(Z/(lt.beam*1.7),2)),Me=5e-4,be=0,j=Math.cos(Z),ne=Math.sin(Z),re=0,I=0,N=0;for(let ee=0;ee<5;ee++){let ue=1/0,ce=null,me=j*g+ne*p;if(me<-1e-9){let V=((r-Me)*g+(0-be)*p)/me;if(V>1e-6){let te=Me+j*V,oe=be+ne*V,xe=(te-r)*v+oe*T;Math.abs(xe)<=_&&(ue=V,ce="wall")}}if(j<-1e-9){let V=(0-Me)/j;if(V>1e-6){let te=be+ne*V;Math.abs(te)<.1&&V<ue&&(ue=V,ce="robot")}}let he=Number.isFinite(ue)?ue:6*r,q=re,K=re+he;{let[V,te]=d(Me,be),[oe,xe]=d(Me+j*he,be+ne*he);e.strokeStyle="rgba(125,211,252,0.05)",e.lineWidth=1,e.beginPath(),e.moveTo(V,te),e.lineTo(oe,xe),e.stroke()}if(D>q&&D<=K+1e-4){let V=Math.min(D,K),te=Me+j*(V-q),oe=be+ne*(V-q),xe=se*(W/Math.max(V,W))*Math.pow(10,-lt.absDbPerM*V/20)*Math.pow(J.R,I)*Math.pow(.8,N),ye=20*Math.log10(Math.max(xe,1e-9)/z),Ue=as((ye+8)/62,.04,1),[We,L]=d(te,oe),ot=Math.min(.08,.5/u+.02),[rt,R]=d(te-j*ot,oe-ne*ot);e.strokeStyle=`rgba(${ye>35?"250,204,21":"96,165,250"},${Ue.toFixed(3)})`,e.lineWidth=1.6+Ue*1.6,e.beginPath(),e.moveTo(We,L),e.lineTo(rt,R),e.stroke(),te<.06&&Math.abs(oe)<.05&&j<0&&I>0&&(le=Math.max(le,Ue))}if(!ce)break;if(re=K,Me+=j*he,be+=ne*he,ce==="wall"){let V=j*g+ne*p;j-=2*V*g,ne-=2*V*p,I++}else j=-j,N++;if(re>7*r+1)break}}if(le>.04){let[G,Z]=d(0,0),se=e.createRadialGradient(G,Z,0,G,Z,26);se.addColorStop(0,`rgba(52,211,153,${le})`),se.addColorStop(1,"rgba(52,211,153,0)"),e.fillStyle=se,e.beginPath(),e.arc(G,Z,26,0,7),e.fill()}Je(e,`${(r*100).toFixed(0)} cm`,(c+d(r,0)[0])/2,h-10,St.muted,"center",10),e.strokeStyle="rgba(255,255,255,0.18)",e.setLineDash([2,4]),e.beginPath(),e.moveTo(c,h+6),e.lineTo(d(r,0)[0],h+6),e.stroke(),e.setLineDash([])}function al(){let n=Ss(pn,fn),e=pe.follow?as(n.sonar,.05,4):pe.d,t=pe.follow?n.what==="wall"?"card":"wood":pe.wall;pe.follow&&Oe("s-wall").value!==t&&(Oe("s-wall").value=t);let i=pe.follow?0:pe.psi;return{d:e,psi:i,wall:t,what:n.what}}function PM(){let{ctx:n,r:e}=Dr("c-env"),t=al(),i=zo(t.d,t.psi,t.wall,22),s=o=>20*Math.log10(Math.max(o,1e-9)/lt.thresh),r=i.pts.map(([o,l])=>[o*1e3,as(s(l),-12,75)]),a=Qi(t.d,t.psi,t.wall);Mn(n,e,{xr:[0,i.tEnd*1e3],yr:[-12,75],yticks:[-10,0,20,40,60],nx:6,xl:"time after the burst (ms)",yl:"signal (dB above threshold)",series:[{pts:r,color:St.accent,width:2.2,fill:"rgba(167,139,250,0.12)"}],under:[(o,l)=>{n.fillStyle="rgba(248,113,113,0.07)",n.fillRect(o(0),l(75),o(.6)-o(0),l(-12)-l(75))}],over:[(o,l)=>{Tr(n,o,0,0,0),n.setLineDash([5,4]),n.strokeStyle=St.amber,n.lineWidth=1.2,n.beginPath(),n.moveTo(e.x,l(0)),n.lineTo(e.x+e.w,l(0)),n.stroke(),n.setLineDash([]),Je(n,"detection threshold",e.x+8,l(0)+9,St.amber,"left",9),Je(n,"burst + ring-down",o(.62),l(68),St.red,"left",9),i.echoes.slice(0,2).forEach((c,h)=>{let u=s(c.a);c.t*1e3<i.tEnd*1e3&&(Ii(n,o(c.t*1e3),l(as(u,-12,75)),h?St.pink:St.green,4),Je(n,`${h?"2nd":"1st"} echo ${u.toFixed(0)} dB`,o(c.t*1e3)+8,l(as(u,-10,70))-10,h?St.pink:St.green,"left",10,"600"))})}]}),Oe("cap-env").innerHTML=a.detected?`The first echo arrives <b>${(i.echoes[0].t*1e3).toFixed(2)} ms</b> after the burst, which is distance = time \xD7 ${i.c.toFixed(0)} m/s \xF7 2 = <b>${(t.d*100).toFixed(0)} cm</b>. The second, weaker echo has crossed the gap twice.`:`The first echo (<b>${(i.echoes[0].a?s(i.echoes[0].a):-99).toFixed(0)} dB</b>) is <b>below the threshold</b>: the sensor reports nothing. Try a harder surface, a straighter wall or a closer distance.`}function IM(){let{ctx:n,w:e,h:t}=Pi(rl["c-budget"]),i=al(),s=Qi(i.d,i.psi,i.wall),r=[["spreading",s.spread,St.blue],["air absorption",s.air,St.amber],["wall absorbs",s.surf,St.pink],["off-axis",s.aim,St.red]],a=Math.max(s.total,1),o=14,l=e-28,c=38,h=26,u=o;n.font=`10px ${Er}`,r.forEach(([d,f,m])=>{let x=f/a*l;x<=0||(n.fillStyle=m,n.globalAlpha=.85,n.fillRect(u,c,Math.max(x,1),h),n.globalAlpha=1,x>54&&Je(n,`${d}`,u+5,c+h/2-.5,"#0b0820","left",9.5,"600"),Je(n,`${f.toFixed(1)} dB`,u+x/2,c+h+16,m,"center",9.5),u+=x)}),Je(n,`total loss ${s.total.toFixed(1)} dB  =  only ${(Math.pow(10,-s.total/10)*100).toExponential(1)} % of the burst's energy returns`,o,16,St.text,"left",10.5,"600"),Je(n,"spreading dominates: the burst fans out over the surface of a growing sphere (4\u03C0r\xB2)",o,c+h+40,St.muted,"left",9.5),Je(n,"",0,0)}function LM(){let{ctx:n,w:e,h:t}=Pi(rl["c-range"]),i=al(),s=96,r=e-s-56,a=24,o=5;bn.ranges.forEach(([c,h],u)=>{let d=12+u*a,f=c===i.wall;n.fillStyle=f?"rgba(167,139,250,0.9)":"rgba(154,160,195,0.35)",n.fillRect(s,d,h/o*r,14),Je(n,hi[c].name,8,d+7,f?"#fff":St.muted,"left",9.5,f?"600":""),Je(n,`${h.toFixed(1)} m`,s+h/o*r+6,d+7,f?St.accent:St.muted,"left",10)});let l=s+as(i.d,0,o)/o*r;n.strokeStyle=St.green,n.setLineDash([3,4]),n.beginPath(),n.moveTo(l,4),n.lineTo(l,12+4*a-6),n.stroke(),n.setLineDash([]),Je(n,"now",l,12+4*a+2,St.green,"center",9)}function DM(){let n=al(),e=Qi(n.d,n.psi,n.wall),t=ji(22);Oe("r-dist").textContent=n.d>=3.99&&pe.follow?"no echo":(n.d*100).toFixed(0)+" cm",Oe("r-echo").textContent=(2*n.d/t*1e6).toFixed(0)+" \xB5s";let i=20*Math.log10(Math.max(e.amp,1e-9)/lt.thresh);Oe("r-amp").textContent=(i>=0?"+":"\u2212")+Math.abs(i).toFixed(0)+" dB",Oe("r-ret").textContent=(Math.pow(10,-e.total/10)*100).toExponential(0)+" %";let s=Oe("r-det");s.textContent=e.detected?"YES":"NO",s.parentElement.classList.toggle("ok",e.detected),s.parentElement.classList.toggle("bad",!e.detected),Oe("s-d-out").textContent=(n.d*100).toFixed(0)+" cm",pe.follow&&(Oe("s-d").value=n.d)}function NM(){let n=Ss(pn,fn),e=Ln(pe.bands,pe.surf),t=n.drive*(ge.mBase+ge.mArm+(n.held?ge.mEgg:0))*9.80665;Oe("r-lim").textContent=(e*t).toFixed(2)+" N",Oe("r-drive").textContent=(n.drive*100).toFixed(0)+" %";let i=Math.max(Math.abs(n.slipL),Math.abs(n.slipR)),s=Oe("r-slip");s.textContent=i.toFixed(2),s.parentElement.classList.toggle("bad",i>.3)}function UM(){let n=Ss(pn,fn);Oe("r-rpm").textContent=(n.w*60/(2*Math.PI)).toFixed(0)+" rpm",Oe("r-pm").textContent=(n.Pm/2).toFixed(2)+" W",Oe("r-pe").textContent=n.Pel.toFixed(2)+" W",Oe("r-en").textContent=n.energy.toFixed(1)+" J"}function ol(n,e=performance.now()){pe.tab==="dyn"?(n&&(SM(),wM(),EM()),NM()):pe.tab==="pow"?(TM(),n&&AM(),RM(),UM()):(CM(e),(n||Bd%6===0)&&(PM(),IM(),LM(),DM()))}var Bd=0,oT=new Oi;function FM(n){pe.u<.002&&pe.play&&(fn+=n,fn>=pn.duration&&(Ca+=n,fn=pn.duration,Ca>1.6&&(fn=0,Ca=0))),pe.u+=(pe.uT-pe.u)*(1-Math.exp(-n*3)),Math.abs(pe.uT-pe.u)<5e-4&&(pe.u=pe.uT),document.activeElement!==Oe("u")&&(Oe("u").value=pe.u),Oe("u-out").textContent=Math.round(pe.u*100)+"%";let e=Ss(pn,fn),t=Yn.pose({phi:e.phi,jaw:e.jaw,wl:e.wl,wr:e.wr,bands:pe.bands,u:pe.u});Yn.root.position.set(e.x,(Yn.root.userData.lift||0)+pe.u*0,rs(e.z)),Yn.root.rotation.y=e.yaw;let i=Math.cos(e.yaw),s=Math.sin(e.yaw);Qo.position.set(e.eggX,e.eggY,rs(e.eggZ)),pe.u>.02&&e.held&&Qo.position.copy(Fi.gripper.group.localToWorld(new Oi(gh,-.012,0))),mn.target.position.set(e.x,0,rs(e.z)),mn.position.set(e.x+.9,1.6,rs(e.z)-.7);let r=pe.sonarViz&&pe.u<.3;if(La.visible=r,r){let c=Math.min(e.sonar,.8),h=performance.now()/1e3;F0.scale.set(c,1,c),cM.forEach((u,d)=>{let f=(h*.55+d/3)%1,m=Math.max(.01,f*c);u.scale.set(m,1,m),u.material.opacity=.55*(1-f)}),Fd.position.set(c,0,0),Fd.visible=e.sonar<.8}Oe("h-phase").textContent=pn.names[e.phase],Oe("h-sonar").textContent=e.sonar>=3.99?"no echo":(e.sonar*100).toFixed(1)+" cm",Oe("h-speed").textContent=(Math.abs(e.vL+e.vR)/2*100).toFixed(0)+" cm/s",Oe("m-bar").style.width=fn/pn.duration*100+"%";let a=yM[e.phase],o=e.phase===11;if([...V0.children].forEach((c,h)=>{c.classList.toggle("on",!o&&h===a),c.classList.toggle("done",o||h<a)}),bM(n),pM(n),Ir&&!pi.size&&q0%2===0){let c=G0(Ir[0],Ir[1]);c!==pe.hover&&(pe.hover=c,Lr(),mi.classList.toggle("pick",!!c));let h=Oe("tip"),u=Ra.getBoundingClientRect();c?(h.textContent=Fi[c].name,h.style.left=Ir[0]-u.left+"px",h.style.top=Ir[1]-u.top+"px",h.classList.add("on")):h.classList.remove("on")}let l=Oe("sellabel");if(pe.sel&&Fi[pe.sel]){let c=new Fn().setFromObject(Fi[pe.sel].group),h=c.getCenter(new Oi);h.y=c.max.y,h.project(gi),l.style.left=(h.x*.5+.5)*Ra.clientWidth+"px",l.style.top=(-h.y*.5+.5)*Ra.clientHeight+"px",l.textContent=Fi[pe.sel].name,l.classList.add("on")}else l.classList.remove("on")}var q0=0,kd=performance.now(),Uh=!0,qn={sum:0,n:0,slow:0,age:0};new IntersectionObserver(n=>{Uh=n[0].isIntersecting},{threshold:.05}).observe(Ra);function Y0(n){let e=Math.min((n-kd)/1e3,.1);kd=n,q0++,document.hidden||(Uh&&(FM(zd&&!Lt.running?0:e),D0?Ia.render():$n.render(Sn,gi)),Bd++,Bd%2===0&&ol(!1,n),Od<k0.length-1&&Uh&&(qn.age+=e,qn.age>1.2&&(qn.sum+=e,qn.n++,qn.n>=20&&(qn.slow=qn.sum/qn.n>.026?qn.slow+1:0,qn.sum=qn.n=0,qn.slow>=2&&(Od++,z0(),qn.slow=0,qn.age=0))))),requestAnimationFrame(Y0)}function Nd(){z0(),sl(),Lr(),Oe("duty-out").textContent="70 %",Bh(),Lh("hero"),Ot.t.copy(B0()),Lt.running&&Oe("tourchip").classList.add("on"),($n.compileAsync?$n.compileAsync(Sn,gi):Promise.resolve()).catch(()=>{}).finally(()=>{kd=performance.now(),requestAnimationFrame(Y0)}),window.__PATRICK={seek:e=>{fn=e,Ca=0},S:pe,run:()=>pn,robot:Yn,rig:Ot,scene:Sn,camera:gi,renderer:$n,M:Go,select:Da,setView:Lh,tour:Lt}}document.fonts?.ready?.then(Nd,Nd)??Nd();})();
