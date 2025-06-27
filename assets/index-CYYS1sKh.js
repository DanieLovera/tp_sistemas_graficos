var gh=Object.defineProperty;var _h=(i,t,e)=>t in i?gh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var V=(i,t,e)=>_h(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="176",Xi={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vh=0,$a=1,xh=2,vc=1,Mh=2,wn=3,jn=0,Oe=1,pn=2,Yn=0,Yi=1,ja=2,Za=3,Ka=4,yh=5,li=100,Sh=101,Eh=102,bh=103,Ah=104,Th=200,wh=201,Ch=202,Rh=203,uo=204,fo=205,Ph=206,Lh=207,Dh=208,Ih=209,Uh=210,Nh=211,Fh=212,Oh=213,Bh=214,po=0,mo=1,go=2,$i=3,_o=4,vo=5,xo=6,Mo=7,ma=0,zh=1,kh=2,qn=0,Hh=1,Gh=2,Vh=3,Wh=4,Xh=5,Yh=6,qh=7,xc=300,ji=301,Zi=302,yo=303,So=304,Mr=306,dn=1e3,ui=1001,Eo=1002,hn=1003,$h=1004,Ds=1005,mn=1006,Cr=1007,di=1008,_n=1009,Mc=1010,yc=1011,ms=1012,ga=1013,fi=1014,Rn=1015,As=1016,_a=1017,va=1018,gs=1020,Sc=35902,Ec=1021,bc=1022,cn=1023,_s=1026,vs=1027,Ac=1028,xa=1029,Tc=1030,Ma=1031,ya=1033,lr=33776,cr=33777,hr=33778,ur=33779,bo=35840,Ao=35841,To=35842,wo=35843,Co=36196,Ro=37492,Po=37496,Lo=37808,Do=37809,Io=37810,Uo=37811,No=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,ko=37817,Ho=37818,Go=37819,Vo=37820,Wo=37821,dr=36492,Xo=36494,Yo=36495,wc=36283,qo=36284,$o=36285,jo=36286,jh=3200,Zh=3201,Sa=0,Kh=1,Xn="",Ve="srgb",Ki="srgb-linear",mr="linear",ne="srgb",Mi=7680,Ja=519,Jh=512,Qh=513,tu=514,Cc=515,eu=516,nu=517,iu=518,su=519,Qa=35044,tl="300 es",Pn=2e3,gr=2001;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const hs=Math.PI/180,Ji=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Ea(i,t){return(i%t+t)%t}function ru(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ou(i,t,e){return i!==t?(e-i)/(t-i):0}function us(i,t,e){return(1-e)*i+e*t}function au(i,t,e,n){return us(i,t,1-Math.exp(-e*n))}function lu(i,t=1){return t-Math.abs(Ea(i,t*2)-t)}function cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function uu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function du(i,t){return i+Math.random()*(t-i)}function fu(i){return i*(.5-Math.random())}function pu(i){i!==void 0&&(el=i);let t=el+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mu(i){return i*hs}function gu(i){return i*Ji}function _u(i){return(i&i-1)===0&&i!==0}function vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),_=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*_,a*c);break;case"YXY":i.set(l*_,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*_,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:hs,RAD2DEG:Ji,generateUUID:_i,clamp:Wt,euclideanModulo:Ea,mapLinear:ru,inverseLerp:ou,lerp:us,damp:au,pingpong:lu,smoothstep:cu,smootherstep:hu,randInt:uu,randFloat:du,randFloatSpread:fu,seededRandom:pu,degToRad:mu,radToDeg:gu,isPowerOfTwo:_u,ceilPowerOfTwo:vu,floorPowerOfTwo:xu,setQuaternionFromProperEuler:Mu,normalize:Ce,denormalize:Fi};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],_=n[5],x=n[8],S=s[0],p=s[3],d=s[6],M=s[1],T=s[4],b=s[7],z=s[2],B=s[5],F=s[8];return r[0]=o*S+a*M+l*z,r[3]=o*p+a*T+l*B,r[6]=o*d+a*b+l*F,r[1]=c*S+h*M+u*z,r[4]=c*p+h*T+u*B,r[7]=c*d+h*b+u*F,r[2]=f*S+_*M+x*z,r[5]=f*p+_*T+x*B,r[8]=f*d+_*b+x*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,_=c*r-o*l,x=e*u+n*f+s*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=_*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rr.makeScale(t,e)),this}rotate(t){return this.premultiply(Rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Ht;function Pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yu(){const i=xs("canvas");return i.style.display="block",i}const nl={};function fr(i){i in nl||(nl[i]=!0,console.warn(i))}function Su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Eu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const il=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?mr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:t,whitePoint:n,transfer:mr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:il,fromXYZ:sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const Jt=Au();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class Tu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yi===void 0&&(yi=xs("canvas")),yi.width=t.width,yi.height=t.height;const s=yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wu=0;class ba{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pr(s[o].image)):r.push(Pr(s[o]))}else r=Pr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;class Te extends gi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=ui,s=ui,r=mn,o=di,a=cn,l=_n,c=Te.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=_i(),this.name="",this.source=new ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=xc;Te.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],_=l[5],x=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(_+1)/2,z=(d+1)/2,B=(h+f)/4,F=(u+S)/4,v=(x+p)/4;return T>b&&T>z?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=B/n,r=F/n):b>z?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=B/s,r=v/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=F/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-x)*(p-x)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(u-S)/M,this.z=(f-h)/M,this.w=Math.acos((c+_+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ba(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Ru{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lc extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class We{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],_=r[o+1],x=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=_,t[e+2]=x,t[e+3]=S;return}if(u!==S||l!==f||c!==_||h!==x){let p=1-a;const d=l*f+c*_+h*x+u*S,M=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const z=Math.sqrt(T),B=Math.atan2(z,d*M);p=Math.sin(p*B)/z,a=Math.sin(a*B)/z}const b=a*M;if(l=l*p+f*b,c=c*p+_*b,h=h*p+x*b,u=u*p+S*b,p===1-a){const z=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=z,c*=z,h*=z,u*=z}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],_=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*_-c*f,t[e+1]=l*x+h*f+c*u-a*_,t[e+2]=c*x+h*_+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),_=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*_*x,this._y=c*_*u-f*h*x,this._z=c*h*x+f*_*u,this._w=c*h*u-f*_*x;break;case"YXZ":this._x=f*h*u+c*_*x,this._y=c*_*u-f*h*x,this._z=c*h*x-f*_*u,this._w=c*h*u+f*_*x;break;case"ZXY":this._x=f*h*u-c*_*x,this._y=c*_*u+f*h*x,this._z=c*h*x+f*_*u,this._w=c*h*u-f*_*x;break;case"ZYX":this._x=f*h*u-c*_*x,this._y=c*_*u+f*h*x,this._z=c*h*x-f*_*u,this._w=c*h*u+f*_*x;break;case"YZX":this._x=f*h*u+c*_*x,this._y=c*_*u+f*h*x,this._z=c*h*x-f*_*u,this._w=c*h*u-f*_*x;break;case"XZY":this._x=f*h*u-c*_*x,this._y=c*_*u-f*h*x,this._z=c*h*x+f*_*u,this._w=c*h*u+f*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-c)*_,this._z=(o-s)*_}else if(n>a&&n>u){const _=2*Math.sqrt(1+n-a-u);this._w=(h-l)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+c)/_}else if(a>u){const _=2*Math.sqrt(1+a-n-u);this._w=(r-c)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+u-n-a);this._w=(o-s)/_,this._x=(r+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new O,rl=new We;class Ts{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Us.subVectors(this.max,is),Si.subVectors(t.a,is),Ei.subVectors(t.b,is),bi.subVectors(t.c,is),In.subVectors(Ei,Si),Un.subVectors(bi,Ei),Qn.subVectors(Si,bi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Un.z,0,-Un.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Qn.y,Qn.x,0];return!Dr(e,Si,Ei,bi,Us)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,Si,Ei,bi,Us))?!1:(Ns.crossVectors(In,Un),e=[Ns.x,Ns.y,Ns.z],Dr(e,Si,Ei,bi,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new O,new O,new O,new O,new O,new O,new O,new O],sn=new O,Is=new Ts,Si=new O,Ei=new O,bi=new O,In=new O,Un=new O,Qn=new O,is=new O,Us=new O,Ns=new O,ti=new O;function Dr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Lu=new Ts,ss=new O,Ir=new O;class yr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Ir)),this.expandByPoint(ss.copy(t.center).sub(Ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new O,Ur=new O,Fs=new O,Nn=new O,Nr=new O,Os=new O,Fr=new O;class Aa{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ur.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Ur);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fs),a=Nn.dot(this.direction),l=-Nn.dot(Fs),c=Nn.lengthSq(),h=Math.abs(1-o*o);let u,f,_,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const S=1/h;u*=S,f*=S,_=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),_=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),_=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),_=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),_=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),_=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),_=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ur).addScaledVector(Fs,f),_}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Nr.subVectors(e,t),Os.subVectors(n,t),Fr.crossVectors(Nr,Os);let o=this.direction.dot(Fr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(Os.crossVectors(Nn,Os));if(l<0)return null;const c=a*this.direction.dot(Nr.cross(Nn));if(c<0||l+c>o)return null;const h=-a*Nn.dot(Fr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,n,s,r,o,a,l,c,h,u,f,_,x,S,p){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,_,x,S,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,_,x,S,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=_,d[7]=x,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,_=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=_+x*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=x+_*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,_=l*u,x=c*h,S=c*u;e[0]=f+S*a,e[4]=x*a-_,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=_*a-x,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,_=l*u,x=c*h,S=c*u;e[0]=f-S*a,e[4]=-o*u,e[8]=x+_*a,e[1]=_+x*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,_=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=x*c-_,e[8]=f*c+S,e[1]=l*u,e[5]=S*c+f,e[9]=_*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,_=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=S-f*u,e[8]=x*u+_,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=_*u+x,e[10]=f-S*u}else if(t.order==="XZY"){const f=o*l,_=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+S,e[5]=o*h,e[9]=_*u-x,e[2]=x*u-_,e[6]=a*h,e[10]=S*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Du,t,Iu)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Fn.crossVectors(n,ze),Fn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Fn.crossVectors(n,ze)),Fn.normalize(),Bs.crossVectors(ze,Fn),s[0]=Fn.x,s[4]=Bs.x,s[8]=ze.x,s[1]=Fn.y,s[5]=Bs.y,s[9]=ze.y,s[2]=Fn.z,s[6]=Bs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],_=n[13],x=n[2],S=n[6],p=n[10],d=n[14],M=n[3],T=n[7],b=n[11],z=n[15],B=s[0],F=s[4],v=s[8],g=s[12],m=s[1],E=s[5],w=s[9],C=s[13],U=s[2],R=s[6],D=s[10],N=s[14],I=s[3],H=s[7],K=s[11],Q=s[15];return r[0]=o*B+a*m+l*U+c*I,r[4]=o*F+a*E+l*R+c*H,r[8]=o*v+a*w+l*D+c*K,r[12]=o*g+a*C+l*N+c*Q,r[1]=h*B+u*m+f*U+_*I,r[5]=h*F+u*E+f*R+_*H,r[9]=h*v+u*w+f*D+_*K,r[13]=h*g+u*C+f*N+_*Q,r[2]=x*B+S*m+p*U+d*I,r[6]=x*F+S*E+p*R+d*H,r[10]=x*v+S*w+p*D+d*K,r[14]=x*g+S*C+p*N+d*Q,r[3]=M*B+T*m+b*U+z*I,r[7]=M*F+T*E+b*R+z*H,r[11]=M*v+T*w+b*D+z*K,r[15]=M*g+T*C+b*N+z*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],_=t[14],x=t[3],S=t[7],p=t[11],d=t[15];return x*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*_-n*l*_)+S*(+e*l*_-e*c*f+r*o*f-s*o*_+s*c*h-r*l*h)+p*(+e*c*u-e*a*_-r*o*u+n*o*_+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],_=t[11],x=t[12],S=t[13],p=t[14],d=t[15],M=u*p*c-S*f*c+S*l*_-a*p*_-u*l*d+a*f*d,T=x*f*c-h*p*c-x*l*_+o*p*_+h*l*d-o*f*d,b=h*S*c-x*u*c+x*a*_-o*S*_-h*a*d+o*u*d,z=x*u*l-h*S*l-x*a*f+o*S*f+h*a*p-o*u*p,B=e*M+n*T+s*b+r*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return t[0]=M*F,t[1]=(S*f*r-u*p*r-S*s*_+n*p*_+u*s*d-n*f*d)*F,t[2]=(a*p*r-S*l*r+S*s*c-n*p*c-a*s*d+n*l*d)*F,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*_-n*l*_)*F,t[4]=T*F,t[5]=(h*p*r-x*f*r+x*s*_-e*p*_-h*s*d+e*f*d)*F,t[6]=(x*l*r-o*p*r-x*s*c+e*p*c+o*s*d-e*l*d)*F,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*_+e*l*_)*F,t[8]=b*F,t[9]=(x*u*r-h*S*r-x*n*_+e*S*_+h*n*d-e*u*d)*F,t[10]=(o*S*r-x*a*r+x*n*c-e*S*c-o*n*d+e*a*d)*F,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*_-e*a*_)*F,t[12]=z*F,t[13]=(h*S*s-x*u*s+x*n*f-e*S*f-h*n*p+e*u*p)*F,t[14]=(x*a*s-o*S*s-x*n*l+e*S*l+o*n*p-e*a*p)*F,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,_=r*h,x=r*u,S=o*h,p=o*u,d=a*u,M=l*c,T=l*h,b=l*u,z=n.x,B=n.y,F=n.z;return s[0]=(1-(S+d))*z,s[1]=(_+b)*z,s[2]=(x-T)*z,s[3]=0,s[4]=(_-b)*B,s[5]=(1-(f+d))*B,s[6]=(p+M)*B,s[7]=0,s[8]=(x+T)*F,s[9]=(p-M)*F,s[10]=(1-(f+S))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,h=1/o,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let _,x;if(a===Pn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===gr)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,_=(n+s)*h;let x,S;if(a===Pn)x=(o+r)*u,S=-2*u;else if(a===gr)x=r*u,S=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new O,rn=new qt,Du=new O(0,0,0),Iu=new O(1,1,1),Fn=new O,Bs=new O,ze=new O,ol=new qt,al=new We;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return al.setFromEuler(this),this.setFromQuaternion(al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uu=0;const ll=new O,Ti=new We,En=new qt,zs=new O,rs=new O,Nu=new O,Fu=new We,cl=new O(1,0,0),hl=new O(0,1,0),ul=new O(0,0,1),dl={type:"added"},Ou={type:"removed"},wi={type:"childadded",child:null},Or={type:"childremoved",child:null};class me extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new O,e=new Qe,n=new We,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Ht}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(rs,zs,this.up):En.lookAt(zs,rs,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),Or.child=t,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),_=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new O(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new O,bn=new O,Br=new O,An=new O,Ci=new O,Ri=new O,fl=new O,zr=new O,kr=new O,Hr=new O,Gr=new de,Vr=new de,Wr=new de;class ln{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),bn.subVectors(n,e),Br.subVectors(t,e);const o=on.dot(on),a=on.dot(bn),l=on.dot(Br),c=bn.dot(bn),h=bn.dot(Br),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,_=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-_-x,x,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Gr.setScalar(0),Vr.setScalar(0),Wr.setScalar(0),Gr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,n),Wr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Gr,r.x),o.addScaledVector(Vr,r.y),o.addScaledVector(Wr,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),bn.subVectors(t,e),on.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),on.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ci.subVectors(s,n),Ri.subVectors(r,n),zr.subVectors(t,n);const l=Ci.dot(zr),c=Ri.dot(zr);if(l<=0&&c<=0)return e.copy(n);kr.subVectors(t,s);const h=Ci.dot(kr),u=Ri.dot(kr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ci,o);Hr.subVectors(t,r);const _=Ci.dot(Hr),x=Ri.dot(Hr);if(x>=0&&_<=x)return e.copy(r);const S=_*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Ri,a);const p=h*x-_*u;if(p<=0&&u-h>=0&&_-x>=0)return fl.subVectors(r,s),a=(u-h)/(u-h+(_-x)),e.copy(s).addScaledVector(fl,a);const d=1/(p+S+f);return o=S*d,a=f*d,e.copy(n).addScaledVector(Ci,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Xr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Ea(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xr(o,r,t+1/3),this.g=Xr(o,r,t),this.b=Xr(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Jt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Wt(Ee.r*255,0,255))*65536+Math.round(Wt(Ee.g*255,0,255))*256+Math.round(Wt(Ee.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ve){Jt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(ks);const n=us(On.h,ks.h,e),s=us(On.s,ks.s,e),r=us(On.l,ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Yt;Yt.NAMES=Ic;let Bu=0;class vi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Yi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ta extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new O,Hs=new ut;let zu=0;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}}class Uc extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ku=0;const $e=new qt,Yr=new me,Pi=new O,ke=new Ts,os=new Ts,xe=new O;class De extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pc(t)?Nc:Uc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(ke.min,os.min),ke.expandByPoint(xe),xe.addVectors(ke.max,os.max),ke.expandByPoint(xe)):(ke.expandByPoint(os.min),ke.expandByPoint(os.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(t,c),xe.add(Pi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new O,l[v]=new O;const c=new O,h=new O,u=new O,f=new ut,_=new ut,x=new ut,S=new O,p=new O;function d(v,g,m){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),f.fromBufferAttribute(r,v),_.fromBufferAttribute(r,g),x.fromBufferAttribute(r,m),h.sub(c),u.sub(c),_.sub(f),x.sub(f);const E=1/(_.x*x.y-x.x*_.y);isFinite(E)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-_.y).multiplyScalar(E),p.copy(u).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(E),a[v].add(S),a[g].add(S),a[m].add(S),l[v].add(p),l[g].add(p),l[m].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,g=M.length;v<g;++v){const m=M[v],E=m.start,w=m.count;for(let C=E,U=E+w;C<U;C+=3)d(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const T=new O,b=new O,z=new O,B=new O;function F(v){z.fromBufferAttribute(s,v),B.copy(z);const g=a[v];T.copy(g),T.sub(z.multiplyScalar(z.dot(g))).normalize(),b.crossVectors(B,g);const E=b.dot(l[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,E)}for(let v=0,g=M.length;v<g;++v){const m=M[v],E=m.start,w=m.count;for(let C=E,U=E+w;C<U;C+=3)F(t.getX(C+0)),F(t.getX(C+1)),F(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let f=0,_=t.count;f<_;f+=3){const x=t.getX(f+0),S=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,_=e.count;f<_;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let _=0,x=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?_=l[S]*a.data.stride+a.offset:_=l[S]*h;for(let d=0;d<h;d++)f[x++]=c[_++]}return new un(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],_=t(f,n);l.push(_)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const _=c[u];h.push(_.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,_=u.length;f<_;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new qt,ei=new Aa,Gs=new yr,ml=new O,Vs=new O,Ws=new O,Xs=new O,qr=new O,Ys=new O,gl=new O,qs=new O;class se extends me{constructor(t=new De,e=new Ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(qr.fromBufferAttribute(u,t),o?Ys.addScaledVector(qr,h):Ys.addScaledVector(qr.sub(e),h))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Gs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Gs,ml)===null||ei.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){const p=f[x],d=o[p.materialIndex],M=Math.max(p.start,_.start),T=Math.min(a.count,Math.min(p.start+p.count,_.start+_.count));for(let b=M,z=T;b<z;b+=3){const B=a.getX(b),F=a.getX(b+1),v=a.getX(b+2);s=$s(this,d,t,n,c,h,u,B,F,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const x=Math.max(0,_.start),S=Math.min(a.count,_.start+_.count);for(let p=x,d=S;p<d;p+=3){const M=a.getX(p),T=a.getX(p+1),b=a.getX(p+2);s=$s(this,o,t,n,c,h,u,M,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){const p=f[x],d=o[p.materialIndex],M=Math.max(p.start,_.start),T=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let b=M,z=T;b<z;b+=3){const B=b,F=b+1,v=b+2;s=$s(this,d,t,n,c,h,u,B,F,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const x=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let p=x,d=S;p<d;p+=3){const M=p,T=p+1,b=p+2;s=$s(this,o,t,n,c,h,u,M,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Hu(i,t,e,n,s,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function $s(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);const h=Hu(i,t,e,n,Vs,Ws,Xs,gl);if(h){const u=new O;ln.getBarycoord(gl,Vs,Ws,Xs,u),s&&(h.uv=ln.getInterpolatedAttribute(s,a,l,c,u,new ut)),r&&(h.uv1=ln.getInterpolatedAttribute(r,a,l,c,u,new ut)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};ln.getNormal(Vs,Ws,Xs,f.normal),h.face=f,h.barycoord=u}return h}class vn extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,_=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function x(S,p,d,M,T,b,z,B,F,v,g){const m=b/F,E=z/v,w=b/2,C=z/2,U=B/2,R=F+1,D=v+1;let N=0,I=0;const H=new O;for(let K=0;K<D;K++){const Q=K*E-C;for(let ft=0;ft<R;ft++){const At=ft*m-w;H[S]=At*M,H[p]=Q*T,H[d]=U,c.push(H.x,H.y,H.z),H[S]=0,H[p]=0,H[d]=B>0?1:-1,h.push(H.x,H.y,H.z),u.push(ft/F),u.push(1-K/v),N+=1}}for(let K=0;K<v;K++)for(let Q=0;Q<F;Q++){const ft=f+Q+R*K,At=f+Q+R*(K+1),$=f+(Q+1)+R*(K+1),tt=f+(Q+1)+R*K;l.push(ft,At,tt),l.push(At,$,tt),I+=6}a.addGroup(_,I,g),_+=I,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Gu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Vu={clone:Qi,merge:Re};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new O,_l=new ut,vl=new ut;class Le extends Oc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,vl),e.subVectors(vl,_l)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Di=1;class Yu extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(Li,Di,t,e);s.layers=this.layers,this.add(s);const r=new Le(Li,Di,t,e);r.layers=this.layers,this.add(r);const o=new Le(Li,Di,t,e);o.layers=this.layers,this.add(o);const a=new Le(Li,Di,t,e);a.layers=this.layers,this.add(a);const l=new Le(Li,Di,t,e);l.layers=this.layers,this.add(l);const c=new Le(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,_),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class wa extends Te{constructor(t=[],e=ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qu extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Yn});r.uniforms.tEquirect.value=e;const o=new se(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=mn),new Yu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class js extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $u={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,n),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),_=.02,x=.005;c.inputState.pinching&&f>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($u)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new js;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ju extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const jr=new O,Zu=new O,Ku=new Ht;class kn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=jr.subVectors(n,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new yr,Zs=new O;class Ca{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],_=s[8],x=s[9],S=s[10],p=s[11],d=s[12],M=s[13],T=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-_,b-d).normalize(),n[1].setComponents(l+r,f+c,p+_,b+d).normalize(),n[2].setComponents(l+o,f+h,p+x,b+M).normalize(),n[3].setComponents(l-o,f-h,p-x,b-M).normalize(),n[4].setComponents(l-a,f-u,p-S,b-T).normalize(),e===Pn)n[5].setComponents(l+a,f+u,p+S,b+T).normalize();else if(e===gr)n[5].setComponents(a,u,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ra extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _r=new O,vr=new O,xl=new qt,as=new Aa,Ks=new yr,Zr=new O,Ml=new O;class Ju extends me{constructor(t=new De,e=new Ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_r.fromBufferAttribute(e,s-1),vr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_r.distanceTo(vr);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;xl.copy(s).invert(),as.copy(t.ray).applyMatrix4(xl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const _=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let S=_,p=x-1;S<p;S+=c){const d=h.getX(S),M=h.getX(S+1),T=Js(this,t,as,l,d,M,S);T&&e.push(T)}if(this.isLineLoop){const S=h.getX(x-1),p=h.getX(_),d=Js(this,t,as,l,S,p,x-1);d&&e.push(d)}}else{const _=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let S=_,p=x-1;S<p;S+=c){const d=Js(this,t,as,l,S,S+1,S);d&&e.push(d)}if(this.isLineLoop){const S=Js(this,t,as,l,x-1,_,x-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Js(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(_r.fromBufferAttribute(a,s),vr.fromBufferAttribute(a,r),e.distanceSqToSegment(_r,vr,Zr,Ml)>n)return;Zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zr);if(!(c<t.near||c>t.far))return{distance:c,point:Ml.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const yl=new O,Sl=new O;class Bc extends Ju{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yl.fromBufferAttribute(e,s),Sl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yl.distanceTo(Sl);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zc extends Te{constructor(t,e,n=fi,s,r,o,a=hn,l=hn,c,h=_s){if(h!==_s&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ba(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pa extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],_=[];let x=0;const S=[],p=n/2;let d=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(_,2));function M(){const b=new O,z=new O;let B=0;const F=(e-t)/n;for(let v=0;v<=r;v++){const g=[],m=v/r,E=m*(e-t)+t;for(let w=0;w<=s;w++){const C=w/s,U=C*l+a,R=Math.sin(U),D=Math.cos(U);z.x=E*R,z.y=-m*n+p,z.z=E*D,u.push(z.x,z.y,z.z),b.set(R,F,D).normalize(),f.push(b.x,b.y,b.z),_.push(C,1-m),g.push(x++)}S.push(g)}for(let v=0;v<s;v++)for(let g=0;g<r;g++){const m=S[g][v],E=S[g+1][v],w=S[g+1][v+1],C=S[g][v+1];(t>0||g!==0)&&(h.push(m,E,C),B+=3),(e>0||g!==r-1)&&(h.push(E,w,C),B+=3)}c.addGroup(d,B,0),d+=B}function T(b){const z=x,B=new ut,F=new O;let v=0;const g=b===!0?t:e,m=b===!0?1:-1;for(let w=1;w<=s;w++)u.push(0,p*m,0),f.push(0,m,0),_.push(.5,.5),x++;const E=x;for(let w=0;w<=s;w++){const U=w/s*l+a,R=Math.cos(U),D=Math.sin(U);F.x=g*D,F.y=p*m,F.z=g*R,u.push(F.x,F.y,F.z),f.push(0,m,0),B.x=R*.5+.5,B.y=D*.5*m+.5,_.push(B.x,B.y),x++}for(let w=0;w<s;w++){const C=z+w,U=E+w;b===!0?h.push(U,U+1,C):h.push(U+1,U,C),v+=3}c.addGroup(d,v,b===!0?1:2),d+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,_=(o-h)/f;return(s+_)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],o=[],a=new O,l=new qt;for(let _=0;_<=t;_++){const x=_/t;s[_]=this.getTangentAt(x,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let _=1;_<=t;_++){if(r[_]=r[_-1].clone(),o[_]=o[_-1].clone(),a.crossVectors(s[_-1],s[_]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Wt(s[_-1].dot(s[_]),-1,1));r[_].applyMatrix4(l.makeRotationAxis(a,x))}o[_].crossVectors(s[_],r[_])}if(e===!0){let _=Math.acos(Wt(r[0].dot(r[t]),-1,1));_/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(_=-_);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],_*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class La extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,_=c-this.aY;l=f*h-_*u+this.aX,c=f*u+_*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qu extends La{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,_=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,_*=h,s(o,a,f,_)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Qs=new O,Kr=new Da,Jr=new Da,Qr=new Da;class kc extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),c=Qs);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),_),S=Math.pow(u.distanceToSquared(f),_),p=Math.pow(f.distanceToSquared(h),_);S<1e-4&&(S=1),x<1e-4&&(x=S),p<1e-4&&(p=S),Kr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,S,p),Jr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,S,p),Qr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,S,p)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Jr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Kr.calc(l),Jr.calc(l),Qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function El(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function td(i,t){const e=1-i;return e*e*t}function ed(i,t){return 2*(1-i)*i*t}function nd(i,t){return i*i*t}function ds(i,t,e,n){return td(i,t)+ed(i,e)+nd(i,n)}function id(i,t){const e=1-i;return e*e*e*t}function sd(i,t){const e=1-i;return 3*e*e*i*t}function rd(i,t){return 3*(1-i)*i*i*t}function od(i,t){return i*i*i*t}function fs(i,t,e,n,s){return id(i,t)+sd(i,e)+rd(i,n)+od(i,s)}class Hc extends xn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gc extends xn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y),fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vc extends xn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ad extends xn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends xn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends xn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y),ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yc extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(El(a,l.x,c.x,h.x,u.x),El(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:kc,CubicBezierCurve:Hc,CubicBezierCurve3:Gc,EllipseCurve:La,LineCurve:Vc,LineCurve3:ad,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:Xc,SplineCurve:Yc});class qc extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}}class bl extends qc{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Wc(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Hc(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Yc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new La(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ws extends bl{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bl().fromJSON(s))}return this}}function ld(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=$c(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fd(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const _=i[f],x=i[f+1];_<a&&(a=_),x<l&&(l=x),_>h&&(h=_),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ms(r,o,e,a,l,c,0),o}function $c(i,t,e,n,s){let r;if(s===bd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Al(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Al(o/n|0,i[o],i[o+1],r);return r&&ts(r,r.next)&&(Ss(r),r=r.next),r}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||ce(e.prev,e,e.next)===0)){if(Ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ms(i,t,e,n,s,r,o){if(!i)return;!o&&r&&vd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?hd(i,n,s,r):cd(i)){t.push(l.i,i.i,c.i),Ss(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ud(mi(i),t),Ms(i,t,e,n,s,r,2)):o===2&&dd(i,t,e,n,s,r):Ms(mi(i),t,e,n,s,r,1);break}}}function cd(i){const t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),_=Math.max(a,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=_&&ls(s,a,r,l,o,c,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function hd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,_=Math.min(a,l,c),x=Math.min(h,u,f),S=Math.max(a,l,c),p=Math.max(h,u,f),d=Ko(_,x,t,e,n),M=Ko(S,p,t,e,n);let T=i.prevZ,b=i.nextZ;for(;T&&T.z>=d&&b&&b.z<=M;){if(T.x>=_&&T.x<=S&&T.y>=x&&T.y<=p&&T!==s&&T!==o&&ls(a,h,l,u,c,f,T.x,T.y)&&ce(T.prev,T,T.next)>=0||(T=T.prevZ,b.x>=_&&b.x<=S&&b.y>=x&&b.y<=p&&b!==s&&b!==o&&ls(a,h,l,u,c,f,b.x,b.y)&&ce(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;T&&T.z>=d;){if(T.x>=_&&T.x<=S&&T.y>=x&&T.y<=p&&T!==s&&T!==o&&ls(a,h,l,u,c,f,T.x,T.y)&&ce(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;b&&b.z<=M;){if(b.x>=_&&b.x<=S&&b.y>=x&&b.y<=p&&b!==s&&b!==o&&ls(a,h,l,u,c,f,b.x,b.y)&&ce(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ud(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ts(n,s)&&Zc(n,e,e.next,s)&&ys(n,s)&&ys(s,n)&&(t.push(n.i,e.i,s.i),Ss(e),Ss(e.next),e=i=s),e=e.next}while(e!==i);return mi(e)}function dd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yd(o,a)){let l=Kc(o,a);o=mi(o,o.next),l=mi(l,l.next),Ms(o,t,e,n,s,r,0),Ms(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=$c(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Md(c))}s.sort(pd);for(let r=0;r<s.length;r++)e=md(s[r],e);return e}function pd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function md(i,t){const e=gd(i,t);if(!e)return t;const n=Kc(e,i);return mi(n,n.next),mi(e,e.next)}function gd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ts(i,e))return e;do{if(ts(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ys(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_d(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _d(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function vd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ko(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xd(s)}function xd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ko(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Md(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jc(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ls(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&jc(i,t,e,n,s,r,o,a)}function yd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sd(i,t)&&(ys(i,t)&&ys(t,i)&&Ed(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||ts(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ts(i,t){return i.x===t.x&&i.y===t.y}function Zc(i,t,e,n){const s=er(ce(i,t,e)),r=er(ce(i,t,n)),o=er(ce(e,n,i)),a=er(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&tr(i,e,t)||r===0&&tr(i,n,t)||o===0&&tr(e,i,n)||a===0&&tr(e,t,n))}function tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function er(i){return i>0?1:i<0?-1:0}function Sd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ys(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function Ed(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kc(i,t){const e=Jo(i.i,i.x,i.y),n=Jo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Al(i,t,e,n){const s=Jo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ad{static triangulate(t,e,n=2){return ld(t,e,n)}}class Ln{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ln.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Tl(t),wl(n,t);let o=t.length;e.forEach(Tl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wl(n,e[l]);const a=Ad.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Tl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ia extends De{constructor(t=new ws([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,_=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:_-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Td;let T,b=!1,z,B,F,v;d&&(T=d.getSpacedPoints(h),b=!0,f=!1,z=d.computeFrenetFrames(h,!1),B=new O,F=new O,v=new O),f||(p=0,_=0,x=0,S=0);const g=a.extractPoints(c);let m=g.shape;const E=g.holes;if(!Ln.isClockWise(m)){m=m.reverse();for(let P=0,st=E.length;P<st;P++){const rt=E[P];Ln.isClockWise(rt)&&(E[P]=rt.reverse())}}function C(P){const rt=10000000000000001e-36;let dt=P[0];for(let et=1;et<=P.length;et++){const Tt=et%P.length,ot=P[Tt],L=ot.x-dt.x,y=ot.y-dt.y,X=L*L+y*y,J=Math.max(Math.abs(ot.x),Math.abs(ot.y),Math.abs(dt.x),Math.abs(dt.y)),it=rt*J*J;if(X<=it){P.splice(Tt,1),et--;continue}dt=ot}}C(m),E.forEach(C);const U=E.length,R=m;for(let P=0;P<U;P++){const st=E[P];m=m.concat(st)}function D(P,st,rt){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(st,rt)}const N=m.length;function I(P,st,rt){let dt,et,Tt;const ot=P.x-st.x,L=P.y-st.y,y=rt.x-P.x,X=rt.y-P.y,J=ot*ot+L*L,it=ot*X-L*y;if(Math.abs(it)>Number.EPSILON){const j=Math.sqrt(J),bt=Math.sqrt(y*y+X*X),mt=st.x-L/j,Pt=st.y+ot/j,Ut=rt.x-X/bt,at=rt.y+y/bt,Mt=((Ut-mt)*X-(at-Pt)*y)/(ot*X-L*y);dt=mt+ot*Mt-P.x,et=Pt+L*Mt-P.y;const It=dt*dt+et*et;if(It<=2)return new ut(dt,et);Tt=Math.sqrt(It/2)}else{let j=!1;ot>Number.EPSILON?y>Number.EPSILON&&(j=!0):ot<-Number.EPSILON?y<-Number.EPSILON&&(j=!0):Math.sign(L)===Math.sign(X)&&(j=!0),j?(dt=-L,et=ot,Tt=Math.sqrt(J)):(dt=ot,et=L,Tt=Math.sqrt(J/2))}return new ut(dt/Tt,et/Tt)}const H=[];for(let P=0,st=R.length,rt=st-1,dt=P+1;P<st;P++,rt++,dt++)rt===st&&(rt=0),dt===st&&(dt=0),H[P]=I(R[P],R[rt],R[dt]);const K=[];let Q,ft=H.concat();for(let P=0,st=U;P<st;P++){const rt=E[P];Q=[];for(let dt=0,et=rt.length,Tt=et-1,ot=dt+1;dt<et;dt++,Tt++,ot++)Tt===et&&(Tt=0),ot===et&&(ot=0),Q[dt]=I(rt[dt],rt[Tt],rt[ot]);K.push(Q),ft=ft.concat(Q)}let At;if(p===0)At=Ln.triangulateShape(R,E);else{const P=[],st=[];for(let rt=0;rt<p;rt++){const dt=rt/p,et=_*Math.cos(dt*Math.PI/2),Tt=x*Math.sin(dt*Math.PI/2)+S;for(let ot=0,L=R.length;ot<L;ot++){const y=D(R[ot],H[ot],Tt);Ft(y.x,y.y,-et),dt===0&&P.push(y)}for(let ot=0,L=U;ot<L;ot++){const y=E[ot];Q=K[ot];const X=[];for(let J=0,it=y.length;J<it;J++){const j=D(y[J],Q[J],Tt);Ft(j.x,j.y,-et),dt===0&&X.push(j)}dt===0&&st.push(X)}}At=Ln.triangulateShape(P,st)}const $=At.length,tt=x+S;for(let P=0;P<N;P++){const st=f?D(m[P],ft[P],tt):m[P];b?(F.copy(z.normals[0]).multiplyScalar(st.x),B.copy(z.binormals[0]).multiplyScalar(st.y),v.copy(T[0]).add(F).add(B),Ft(v.x,v.y,v.z)):Ft(st.x,st.y,0)}for(let P=1;P<=h;P++)for(let st=0;st<N;st++){const rt=f?D(m[st],ft[st],tt):m[st];b?(F.copy(z.normals[P]).multiplyScalar(rt.x),B.copy(z.binormals[P]).multiplyScalar(rt.y),v.copy(T[P]).add(F).add(B),Ft(v.x,v.y,v.z)):Ft(rt.x,rt.y,u/h*P)}for(let P=p-1;P>=0;P--){const st=P/p,rt=_*Math.cos(st*Math.PI/2),dt=x*Math.sin(st*Math.PI/2)+S;for(let et=0,Tt=R.length;et<Tt;et++){const ot=D(R[et],H[et],dt);Ft(ot.x,ot.y,u+rt)}for(let et=0,Tt=E.length;et<Tt;et++){const ot=E[et];Q=K[et];for(let L=0,y=ot.length;L<y;L++){const X=D(ot[L],Q[L],dt);b?Ft(X.x,X.y+T[h-1].y,T[h-1].x+rt):Ft(X.x,X.y,u+rt)}}}lt(),ct();function lt(){const P=s.length/3;if(f){let st=0,rt=N*st;for(let dt=0;dt<$;dt++){const et=At[dt];Rt(et[2]+rt,et[1]+rt,et[0]+rt)}st=h+p*2,rt=N*st;for(let dt=0;dt<$;dt++){const et=At[dt];Rt(et[0]+rt,et[1]+rt,et[2]+rt)}}else{for(let st=0;st<$;st++){const rt=At[st];Rt(rt[2],rt[1],rt[0])}for(let st=0;st<$;st++){const rt=At[st];Rt(rt[0]+N*h,rt[1]+N*h,rt[2]+N*h)}}n.addGroup(P,s.length/3-P,0)}function ct(){const P=s.length/3;let st=0;wt(R,st),st+=R.length;for(let rt=0,dt=E.length;rt<dt;rt++){const et=E[rt];wt(et,st),st+=et.length}n.addGroup(P,s.length/3-P,1)}function wt(P,st){let rt=P.length;for(;--rt>=0;){const dt=rt;let et=rt-1;et<0&&(et=P.length-1);for(let Tt=0,ot=h+p*2;Tt<ot;Tt++){const L=N*Tt,y=N*(Tt+1),X=st+dt+L,J=st+et+L,it=st+et+y,j=st+dt+y;$t(X,J,it,j)}}}function Ft(P,st,rt){l.push(P),l.push(st),l.push(rt)}function Rt(P,st,rt){Xt(P),Xt(st),Xt(rt);const dt=s.length/3,et=M.generateTopUV(n,s,dt-3,dt-2,dt-1);Ct(et[0]),Ct(et[1]),Ct(et[2])}function $t(P,st,rt,dt){Xt(P),Xt(st),Xt(dt),Xt(st),Xt(rt),Xt(dt);const et=s.length/3,Tt=M.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Ct(Tt[0]),Ct(Tt[1]),Ct(Tt[3]),Ct(Tt[1]),Ct(Tt[2]),Ct(Tt[3])}function Xt(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function Ct(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zo[s.type]().fromJSON(s)),new Ia(n,t.options)}}const Td={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],_=t[s*3+1],x=t[s*3+2],S=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-u),new ut(f,1-x),new ut(S,1-d)]:[new ut(a,1-l),new ut(h,1-u),new ut(_,1-x),new ut(p,1-d)]}};function wd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cs extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,_=[],x=[],S=[],p=[];for(let d=0;d<h;d++){const M=d*f-o;for(let T=0;T<c;T++){const b=T*u-r;x.push(b,-M,0),S.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const T=M+c*d,b=M+c*(d+1),z=M+1+c*(d+1),B=M+1+c*d;_.push(T,b,B),_.push(b,z,B)}this.setIndex(_),this.setAttribute("position",new oe(x,3)),this.setAttribute("normal",new oe(S,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rs extends De{constructor(t=new ws([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let _=f.shape;const x=f.holes;Ln.isClockWise(_)===!1&&(_=_.reverse());for(let p=0,d=x.length;p<d;p++){const M=x[p];Ln.isClockWise(M)===!0&&(x[p]=M.reverse())}const S=Ln.triangulateShape(_,x);for(let p=0,d=x.length;p<d;p++){const M=x[p];_=_.concat(M)}for(let p=0,d=_.length;p<d;p++){const M=_[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,d=S.length;p<d;p++){const M=S[p],T=M[0]+u,b=M[1]+u,z=M[2]+u;n.push(T,b,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Cd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Rs(n,t.curveSegments)}}function Cd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Xe extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qo extends vi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rd extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pd extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ld{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const _=c[u],x=c[u+1];if(_.global&&(_.lastIndex=0),_.test(h))return x}return null}}}const Dd=new Ld;class Sr{constructor(t){this.manager=t!==void 0?t:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jc extends Sr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Cl.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=xs("img");function l(){h(),Cl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Id extends Sr{constructor(t){super(t)}load(t,e,n,s){const r=new wa;r.colorSpace=Ve;const o=new Jc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class Er extends Sr{constructor(t){super(t)}load(t,e,n,s){const r=new Te,o=new Jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ua extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const to=new qt,Rl=new O,Pl=new O;class Qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ud extends Qc{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ji*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Nd extends Ua{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ud}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class th extends Oc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends Qc{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ll extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dl extends Ua{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Od extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Il();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Il(){return performance.now()}class Ul{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nl=new O;class zd extends me{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new De,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new oe(s,3));const r=new Ra({fog:!1,toneMapped:!1});this.cone=new Bc(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Nl.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nl),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class kd extends Bc{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new De;s.setAttribute("position",new oe(e,3)),s.setAttribute("color",new oe(n,3));const r=new Ra({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Yt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class eh extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fl(i,t,e,n){const s=Hd(n);switch(e){case Ec:return i*t;case Ac:return i*t/s.components*s.byteLength;case xa:return i*t/s.components*s.byteLength;case Tc:return i*t*2/s.components*s.byteLength;case Ma:return i*t*2/s.components*s.byteLength;case bc:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case wo:return Math.max(i,16)*Math.max(t,8)/4;case bo:case To:return Math.max(i,8)*Math.max(t,8)/2;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dr:case Xo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wc:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hd(i){switch(i){case _n:case Mc:return{byteLength:1,components:1};case ms:case yc:case As:return{byteLength:2,components:1};case _a:case va:return{byteLength:2,components:4};case fi:case ga:case Rn:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((_,x)=>_.start-x.start);let f=0;for(let _=1;_<u.length;_++){const x=u[f],S=u[_];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,u[f]=S)}u.length=f+1;for(let _=0,x=u.length;_<x;_++){const S=u[_];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ff=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,am=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_m=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ym=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Vd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:Yd,alphatest_fragment:qd,alphatest_pars_fragment:$d,aomap_fragment:jd,aomap_pars_fragment:Zd,batching_pars_vertex:Kd,batching_vertex:Jd,begin_vertex:Qd,beginnormal_vertex:tf,bsdfs:ef,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:af,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:vf,emissivemap_pars_fragment:xf,colorspace_fragment:Mf,colorspace_pars_fragment:yf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:bf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Ff,envmap_vertex:Tf,fog_vertex:wf,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:If,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:kf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:$f,logdepthbuf_vertex:jf,map_fragment:Zf,map_pars_fragment:Kf,map_particle_fragment:Jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ep,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:op,normal_fragment_begin:ap,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:xp,project_vertex:Mp,dithering_fragment:yp,dithering_pars_fragment:Sp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Tp,shadowmap_vertex:wp,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Ip,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:Yp,cube_vert:qp,cube_frag:$p,depth_vert:jp,depth_frag:Zp,distanceRGBA_vert:Kp,distanceRGBA_frag:Jp,equirect_vert:Qp,equirect_frag:tm,linedashed_vert:em,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:om,meshmatcap_vert:am,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:xm,shadow_frag:Mm,sprite_vert:ym,sprite_frag:Sm},pt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},fn={basic:{uniforms:Re([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Re([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Re([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Re([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Re([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Re([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Re([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Re([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Re([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Re([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Re([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Re([pt.common,pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Re([pt.lights,pt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};fn.physical={uniforms:Re([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const nr={r:0,b:0,g:0},ii=new Qe,Em=new qt;function bm(i,t,e,n,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,h,u=null,f=0,_=null;function x(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function S(T){let b=!1;const z=x(T);z===null?d(a,l):z&&z.isColor&&(d(z,1),b=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,b){const z=x(b);z&&(z.isCubeTexture||z.mapping===Mr)?(h===void 0&&(h=new se(new vn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Qi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,F,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(b.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=z,h.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(ii)),h.material.toneMapped=Jt.getTransfer(z.colorSpace)!==ne,(u!==z||f!==z.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,u=z,f=z.version,_=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):z&&z.isTexture&&(c===void 0&&(c=new se(new Cs(2,2),new Zn({name:"BackgroundMaterial",uniforms:Qi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=z,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(z.colorSpace)!==ne,z.matrixAutoUpdate===!0&&z.updateMatrix(),c.material.uniforms.uvTransform.value.copy(z.matrix),(u!==z||f!==z.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,u=z,f=z.version,_=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,b){T.getRGB(nr,Fc(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,b,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:S,addToRenderList:p,dispose:M}}function Am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(m,E,w,C,U){let R=!1;const D=u(C,w,E);r!==D&&(r=D,c(r.object)),R=_(m,C,w,U),R&&x(m,C,w,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,b(m,E,w,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(m){return i.bindVertexArray(m)}function h(m){return i.deleteVertexArray(m)}function u(m,E,w){const C=w.wireframe===!0;let U=n[m.id];U===void 0&&(U={},n[m.id]=U);let R=U[E.id];R===void 0&&(R={},U[E.id]=R);let D=R[C];return D===void 0&&(D=f(l()),R[C]=D),D}function f(m){const E=[],w=[],C=[];for(let U=0;U<e;U++)E[U]=0,w[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:w,attributeDivisors:C,object:m,attributes:{},index:null}}function _(m,E,w,C){const U=r.attributes,R=E.attributes;let D=0;const N=w.getAttributes();for(const I in N)if(N[I].location>=0){const K=U[I];let Q=R[I];if(Q===void 0&&(I==="instanceMatrix"&&m.instanceMatrix&&(Q=m.instanceMatrix),I==="instanceColor"&&m.instanceColor&&(Q=m.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;D++}return r.attributesNum!==D||r.index!==C}function x(m,E,w,C){const U={},R=E.attributes;let D=0;const N=w.getAttributes();for(const I in N)if(N[I].location>=0){let K=R[I];K===void 0&&(I==="instanceMatrix"&&m.instanceMatrix&&(K=m.instanceMatrix),I==="instanceColor"&&m.instanceColor&&(K=m.instanceColor));const Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),U[I]=Q,D++}r.attributes=U,r.attributesNum=D,r.index=C}function S(){const m=r.newAttributes;for(let E=0,w=m.length;E<w;E++)m[E]=0}function p(m){d(m,0)}function d(m,E){const w=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;w[m]=1,C[m]===0&&(i.enableVertexAttribArray(m),C[m]=1),U[m]!==E&&(i.vertexAttribDivisor(m,E),U[m]=E)}function M(){const m=r.newAttributes,E=r.enabledAttributes;for(let w=0,C=E.length;w<C;w++)E[w]!==m[w]&&(i.disableVertexAttribArray(w),E[w]=0)}function T(m,E,w,C,U,R,D){D===!0?i.vertexAttribIPointer(m,E,w,U,R):i.vertexAttribPointer(m,E,w,C,U,R)}function b(m,E,w,C){S();const U=C.attributes,R=w.getAttributes(),D=E.defaultAttributeValues;for(const N in R){const I=R[N];if(I.location>=0){let H=U[N];if(H===void 0&&(N==="instanceMatrix"&&m.instanceMatrix&&(H=m.instanceMatrix),N==="instanceColor"&&m.instanceColor&&(H=m.instanceColor)),H!==void 0){const K=H.normalized,Q=H.itemSize,ft=t.get(H);if(ft===void 0)continue;const At=ft.buffer,$=ft.type,tt=ft.bytesPerElement,lt=$===i.INT||$===i.UNSIGNED_INT||H.gpuType===ga;if(H.isInterleavedBufferAttribute){const ct=H.data,wt=ct.stride,Ft=H.offset;if(ct.isInstancedInterleavedBuffer){for(let Rt=0;Rt<I.locationSize;Rt++)d(I.location+Rt,ct.meshPerAttribute);m.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Rt=0;Rt<I.locationSize;Rt++)p(I.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Rt=0;Rt<I.locationSize;Rt++)T(I.location+Rt,Q/I.locationSize,$,K,wt*tt,(Ft+Q/I.locationSize*Rt)*tt,lt)}else{if(H.isInstancedBufferAttribute){for(let ct=0;ct<I.locationSize;ct++)d(I.location+ct,H.meshPerAttribute);m.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ct=0;ct<I.locationSize;ct++)p(I.location+ct);i.bindBuffer(i.ARRAY_BUFFER,At);for(let ct=0;ct<I.locationSize;ct++)T(I.location+ct,Q/I.locationSize,$,K,Q*tt,Q/I.locationSize*ct*tt,lt)}}else if(D!==void 0){const K=D[N];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(I.location,K);break;case 3:i.vertexAttrib3fv(I.location,K);break;case 4:i.vertexAttrib4fv(I.location,K);break;default:i.vertexAttrib1fv(I.location,K)}}}}M()}function z(){v();for(const m in n){const E=n[m];for(const w in E){const C=E[w];for(const U in C)h(C[U].object),delete C[U];delete E[w]}delete n[m]}}function B(m){if(n[m.id]===void 0)return;const E=n[m.id];for(const w in E){const C=E[w];for(const U in C)h(C[U].object),delete C[U];delete E[w]}delete n[m.id]}function F(m){for(const E in n){const w=n[E];if(w[m.id]===void 0)continue;const C=w[m.id];for(const U in C)h(C[U].object),delete C[U];delete w[m.id]}}function v(){g(),o=!0,r!==s&&(r=s,c(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:v,resetDefaultState:g,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function Tm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];e.update(_,n,1)}function l(c,h,u,f){if(u===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let S=0;S<u;S++)x+=h[S]*f[S];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==cn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const v=F===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==_n&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Rn&&!v)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=x>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:z,maxSamples:B}}function Cm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new kn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const _=u.length!==0||f||n!==0||s;return s=f,n=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,_){const x=u.clippingPlanes,S=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,T=M*4;let b=d.clippingState||null;l.value=b,b=h(x,f,T,_);for(let z=0;z!==T;++z)b[z]=e[z];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,_,x){const S=u!==null?u.length:0;let p=null;if(S!==0){if(p=l.value,x!==!0||p===null){const d=_+S*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,b=_;T!==S;++T,b+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}function Rm(i){let t=new WeakMap;function e(o,a){return a===yo?o.mapping=ji:a===So&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yo||a===So)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Bi=4,Ol=[.125,.215,.35,.446,.526,.582],ci=20,eo=new th,Bl=new Yt;let no=null,io=0,so=0,ro=!1;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,zl=[new O(-oi,Ii,0),new O(oi,Ii,0),new O(-Ii,0,oi),new O(Ii,0,oi),new O(0,oi,-Ii),new O(0,oi,Ii),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Pm=new O;class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Pm}=r;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(no,io,so),this._renderer.xr.enabled=ro,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:As,format:cn,colorSpace:Ki,depthBuffer:!1},s=Hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(r)),this._blurMaterial=Dm(r,t,e)}return s}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,eo)}_sceneToCubeUV(t,e,n,s,r){const l=new Le(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,_=u.toneMapping;u.getClearColor(Bl),u.toneMapping=qn,u.autoClear=!1;const x=new Ta({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),S=new se(new vn,x);let p=!1;const d=t.background;d?d.isColor&&(x.color.copy(d),t.background=null,p=!0):(x.color.copy(Bl),p=!0);for(let M=0;M<6;M++){const T=M%3;T===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):T===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const b=this._cubeSize;ir(s,T*b,M>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(S,l),u.render(t,l)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=_,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ji||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zl[(s-r-1)%zl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[s],c),f=c.uniforms,_=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*ci-1),S=r/x,p=isFinite(r)?1+Math.floor(h*S):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const d=[];let M=0;for(let F=0;F<ci;++F){const v=F/S,g=Math.exp(-v*v/2);d.push(g),F===0?M+=g:F<p&&(M+=2*g)}for(let F=0;F<d.length;F++)d[F]=d[F]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=x,f.mipInt.value=T-n;const b=this._sizeLods[s],z=3*b*(s>T-Bi?s-T+Bi:0),B=4*(this._cubeSize-b);ir(e,z,B,3*b,2*b),l.setRenderTarget(e),l.render(u,eo)}}function Lm(i){const t=[],e=[],n=[];let s=i;const r=i-Bi+1+Ol.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Bi?l=Ol[o-i+Bi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],_=6,x=6,S=3,p=2,d=1,M=new Float32Array(S*x*_),T=new Float32Array(p*x*_),b=new Float32Array(d*x*_);for(let B=0;B<_;B++){const F=B%3*2/3-1,v=B>2?0:-1,g=[F,v,0,F+2/3,v,0,F+2/3,v+1,0,F,v,0,F+2/3,v+1,0,F,v+1,0];M.set(g,S*x*B),T.set(f,p*x*B);const m=[B,B,B,B,B,B];b.set(m,d*x*B)}const z=new De;z.setAttribute("position",new un(M,S)),z.setAttribute("uv",new un(T,p)),z.setAttribute("faceIndex",new un(b,d)),t.push(z),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hl(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dm(i,t,e){const n=new Float32Array(ci),s=new O(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Gl(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Vl(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Im(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yo||l===So,h=l===ji||l===Zi;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new kl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const _=a.image;return c&&_&&_.height>0||h&&_&&s(_)?(e===null&&(e=new kl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Um(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];const _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER)}function c(u){const f=[],_=u.index,x=u.attributes.position;let S=0;if(_!==null){const M=_.array;S=_.version;for(let T=0,b=M.length;T<b;T+=3){const z=M[T+0],B=M[T+1],F=M[T+2];f.push(z,B,B,F,F,z)}}else if(x!==void 0){const M=x.array;S=x.version;for(let T=0,b=M.length/3-1;T<b;T+=3){const z=T+0,B=T+1,F=T+2;f.push(z,B,B,F,F,z)}}else return;const p=new(Pc(f)?Nc:Uc)(f,1);p.version=S;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const _=u.index;_!==null&&f.version<_.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,_){i.drawElements(n,_,r,f*o),e.update(_,n,1)}function c(f,_,x){x!==0&&(i.drawElementsInstanced(n,_,r,f*o,x),e.update(_,n,x))}function h(f,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,f,0,x);let p=0;for(let d=0;d<x;d++)p+=_[d];e.update(p,n,1)}function u(f,_,x,S){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,_[d],S[d]);else{p.multiDrawElementsInstancedWEBGL(n,_,0,r,f,0,S,0,x);let d=0;for(let M=0;M<x;M++)d+=_[M]*S[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bm(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let m=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",m)};var _=m;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;x===!0&&(b=1),S===!0&&(b=2),p===!0&&(b=3);let z=a.attributes.position.count*b,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const F=new Float32Array(z*B*4*u),v=new Lc(F,z,B,u);v.type=Rn,v.needsUpdate=!0;const g=b*4;for(let E=0;E<u;E++){const w=d[E],C=M[E],U=T[E],R=z*B*4*E;for(let D=0;D<w.count;D++){const N=D*g;x===!0&&(s.fromBufferAttribute(w,D),F[R+N+0]=s.x,F[R+N+1]=s.y,F[R+N+2]=s.z,F[R+N+3]=0),S===!0&&(s.fromBufferAttribute(C,D),F[R+N+4]=s.x,F[R+N+5]=s.y,F[R+N+6]=s.z,F[R+N+7]=0),p===!0&&(s.fromBufferAttribute(U,D),F[R+N+8]=s.x,F[R+N+9]=s.y,F[R+N+10]=s.z,F[R+N+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new ut(z,B)},n.set(a,f),a.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ih=new Te,Wl=new zc(1,1),sh=new Lc,rh=new Pu,oh=new wa,Xl=[],Yl=[],ql=new Float32Array(16),$l=new Float32Array(9),jl=new Float32Array(4);function es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function br(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),ve(e,n)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),ve(e,n)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),ve(e,n)}}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=Cc,r=Wl):r=ih,e.setTexture2D(t||r,s)}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rh,s)}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||oh,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sh,s)}function rg(i){switch(i){case 5126:return km;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return qm;case 35667:case 35671:return $m;case 35668:case 35672:return jm;case 35669:case 35673:return Zm;case 5125:return Km;case 36294:return Jm;case 36295:return Qm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function og(i,t){i.uniform1fv(this.addr,t)}function ag(i,t){const e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function lg(i,t){const e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function cg(i,t){const e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function hg(i,t){const e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ug(i,t){const e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){const e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fg(i,t){i.uniform1iv(this.addr,t)}function pg(i,t){i.uniform2iv(this.addr,t)}function mg(i,t){i.uniform3iv(this.addr,t)}function gg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function vg(i,t){i.uniform2uiv(this.addr,t)}function xg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function yg(i,t,e){const n=this.cache,s=t.length,r=br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ih,r[o])}function Sg(i,t,e){const n=this.cache,s=t.length,r=br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rh,r[o])}function Eg(i,t,e){const n=this.cache,s=t.length,r=br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||oh,r[o])}function bg(i,t,e){const n=this.cache,s=t.length,r=br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sh,r[o])}function Ag(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return bg}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}}class wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}}class Cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Zl(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){const n=i.name,s=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),o=oo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zl(e,c===void 0?new Tg(a,i,t):new wg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cg(a),Zl(e,u)),e=u}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Pg=37297;let Lg=0;function Dg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Jl=new Ht;function Ig(i){Jt._getMatrix(Jl,Jt.workingColorSpace,i);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dg(i.getShaderSource(t),o)}else return s}function Ug(i,t){const e=Ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ng(i,t){let e;switch(t){case Hh:e="Linear";break;case Gh:e="Reinhard";break;case Vh:e="Cineon";break;case Wh:e="ACESFilmic";break;case Yh:e="AgX";break;case qh:e="Neutral";break;case Xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sr=new O;function Fg(){Jt.getLuminanceCoefficients(sr);const i=sr.x.toFixed(4),t=sr.y.toFixed(4),e=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Bg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cs(i){return i!==""}function tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(i){return i.replace(kg,Gg)}const Hg=new Map;function Gg(i,t){let e=Vt[t];if(e===void 0){const n=Hg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(Vg,Wg)}function Wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Zi:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case zh:t="ENVMAP_BLENDING_MIX";break;case kh:t="ENVMAP_BLENDING_ADD";break}return t}function jg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Xg(e),c=Yg(e),h=qg(e),u=$g(e),f=jg(e),_=Og(e),x=Bg(r),S=s.createProgram();let p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(p=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==qn?Ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),Fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=ta(o),o=tc(o,e),o=ec(o,e),a=ta(a),a=tc(a,e),a=ec(a,e),o=nc(o),a=nc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=M+p+o,b=M+d+a,z=Kl(s,s.VERTEX_SHADER,T),B=Kl(s,s.FRAGMENT_SHADER,b);s.attachShader(S,z),s.attachShader(S,B),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function F(E){if(i.debug.checkShaderErrors){const w=s.getProgramInfoLog(S).trim(),C=s.getShaderInfoLog(z).trim(),U=s.getShaderInfoLog(B).trim();let R=!0,D=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(R=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,z,B);else{const N=Ql(s,z,"vertex"),I=Ql(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+w+`
`+N+`
`+I)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(C===""||U==="")&&(D=!1);D&&(E.diagnostics={runnable:R,programLog:w,vertexShader:{log:C,prefix:p},fragmentShader:{log:U,prefix:d}})}s.deleteShader(z),s.deleteShader(B),v=new pr(s,S),g=zg(s,S)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let g;this.getAttributes=function(){return g===void 0&&F(this),g};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=s.getProgramParameter(S,Pg)),m},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=z,this.fragmentShader=B,this}let Kg=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qg(t),e.set(t,n)),n}}class Qg{constructor(t){this.id=Kg++,this.code=t,this.usedTimes=0}}function t_(i,t,e,n,s,r,o){const a=new Dc,l=new Jg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,m,E,w,C){const U=w.fog,R=C.geometry,D=g.isMeshStandardMaterial?w.environment:null,N=(g.isMeshStandardMaterial?e:t).get(g.envMap||D),I=N&&N.mapping===Mr?N.image.height:null,H=x[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Q=K!==void 0?K.length:0;let ft=0;R.morphAttributes.position!==void 0&&(ft=1),R.morphAttributes.normal!==void 0&&(ft=2),R.morphAttributes.color!==void 0&&(ft=3);let At,$,tt,lt;if(H){const ee=fn[H];At=ee.vertexShader,$=ee.fragmentShader}else At=g.vertexShader,$=g.fragmentShader,l.update(g),tt=l.getVertexShaderID(g),lt=l.getFragmentShaderID(g);const ct=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ft=C.isInstancedMesh===!0,Rt=C.isBatchedMesh===!0,$t=!!g.map,Xt=!!g.matcap,Ct=!!N,P=!!g.aoMap,st=!!g.lightMap,rt=!!g.bumpMap,dt=!!g.normalMap,et=!!g.displacementMap,Tt=!!g.emissiveMap,ot=!!g.metalnessMap,L=!!g.roughnessMap,y=g.anisotropy>0,X=g.clearcoat>0,J=g.dispersion>0,it=g.iridescence>0,j=g.sheen>0,bt=g.transmission>0,mt=y&&!!g.anisotropyMap,Pt=X&&!!g.clearcoatMap,Ut=X&&!!g.clearcoatNormalMap,at=X&&!!g.clearcoatRoughnessMap,Mt=it&&!!g.iridescenceMap,It=it&&!!g.iridescenceThicknessMap,Ot=j&&!!g.sheenColorMap,St=j&&!!g.sheenRoughnessMap,jt=!!g.specularMap,Gt=!!g.specularColorMap,re=!!g.specularIntensityMap,k=bt&&!!g.transmissionMap,_t=bt&&!!g.thicknessMap,Z=!!g.gradientMap,nt=!!g.alphaMap,xt=g.alphaTest>0,vt=!!g.alphaHash,kt=!!g.extensions;let he=qn;g.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(he=i.toneMapping);const ye={shaderID:H,shaderType:g.type,shaderName:g.name,vertexShader:At,fragmentShader:$,defines:g.defines,customVertexShaderID:tt,customFragmentShaderID:lt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Rt,batchingColor:Rt&&C._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&C.instanceColor!==null,instancingMorph:Ft&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ki,alphaToCoverage:!!g.alphaToCoverage,map:$t,matcap:Xt,envMap:Ct,envMapMode:Ct&&N.mapping,envMapCubeUVHeight:I,aoMap:P,lightMap:st,bumpMap:rt,normalMap:dt,displacementMap:f&&et,emissiveMap:Tt,normalMapObjectSpace:dt&&g.normalMapType===Kh,normalMapTangentSpace:dt&&g.normalMapType===Sa,metalnessMap:ot,roughnessMap:L,anisotropy:y,anisotropyMap:mt,clearcoat:X,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:at,dispersion:J,iridescence:it,iridescenceMap:Mt,iridescenceThicknessMap:It,sheen:j,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:jt,specularColorMap:Gt,specularIntensityMap:re,transmission:bt,transmissionMap:k,thicknessMap:_t,gradientMap:Z,opaque:g.transparent===!1&&g.blending===Yi&&g.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:vt,combine:g.combine,mapUv:$t&&S(g.map.channel),aoMapUv:P&&S(g.aoMap.channel),lightMapUv:st&&S(g.lightMap.channel),bumpMapUv:rt&&S(g.bumpMap.channel),normalMapUv:dt&&S(g.normalMap.channel),displacementMapUv:et&&S(g.displacementMap.channel),emissiveMapUv:Tt&&S(g.emissiveMap.channel),metalnessMapUv:ot&&S(g.metalnessMap.channel),roughnessMapUv:L&&S(g.roughnessMap.channel),anisotropyMapUv:mt&&S(g.anisotropyMap.channel),clearcoatMapUv:Pt&&S(g.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&S(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&S(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&S(g.iridescenceMap.channel),iridescenceThicknessMapUv:It&&S(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&S(g.sheenColorMap.channel),sheenRoughnessMapUv:St&&S(g.sheenRoughnessMap.channel),specularMapUv:jt&&S(g.specularMap.channel),specularColorMapUv:Gt&&S(g.specularColorMap.channel),specularIntensityMapUv:re&&S(g.specularIntensityMap.channel),transmissionMapUv:k&&S(g.transmissionMap.channel),thicknessMapUv:_t&&S(g.thicknessMap.channel),alphaMapUv:nt&&S(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(dt||y),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&($t||nt),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:C.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ft,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:$t&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===ne,decodeVideoTextureEmissive:Tt&&g.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(g.emissiveMap.colorSpace)===ne,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pn,flipSided:g.side===Oe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:kt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&g.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function d(g){const m=[];if(g.shaderID?m.push(g.shaderID):(m.push(g.customVertexShaderID),m.push(g.customFragmentShaderID)),g.defines!==void 0)for(const E in g.defines)m.push(E),m.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(M(m,g),T(m,g),m.push(i.outputColorSpace)),m.push(g.customProgramCacheKey),m.join()}function M(g,m){g.push(m.precision),g.push(m.outputColorSpace),g.push(m.envMapMode),g.push(m.envMapCubeUVHeight),g.push(m.mapUv),g.push(m.alphaMapUv),g.push(m.lightMapUv),g.push(m.aoMapUv),g.push(m.bumpMapUv),g.push(m.normalMapUv),g.push(m.displacementMapUv),g.push(m.emissiveMapUv),g.push(m.metalnessMapUv),g.push(m.roughnessMapUv),g.push(m.anisotropyMapUv),g.push(m.clearcoatMapUv),g.push(m.clearcoatNormalMapUv),g.push(m.clearcoatRoughnessMapUv),g.push(m.iridescenceMapUv),g.push(m.iridescenceThicknessMapUv),g.push(m.sheenColorMapUv),g.push(m.sheenRoughnessMapUv),g.push(m.specularMapUv),g.push(m.specularColorMapUv),g.push(m.specularIntensityMapUv),g.push(m.transmissionMapUv),g.push(m.thicknessMapUv),g.push(m.combine),g.push(m.fogExp2),g.push(m.sizeAttenuation),g.push(m.morphTargetsCount),g.push(m.morphAttributeCount),g.push(m.numDirLights),g.push(m.numPointLights),g.push(m.numSpotLights),g.push(m.numSpotLightMaps),g.push(m.numHemiLights),g.push(m.numRectAreaLights),g.push(m.numDirLightShadows),g.push(m.numPointLightShadows),g.push(m.numSpotLightShadows),g.push(m.numSpotLightShadowsWithMaps),g.push(m.numLightProbes),g.push(m.shadowMapType),g.push(m.toneMapping),g.push(m.numClippingPlanes),g.push(m.numClipIntersection),g.push(m.depthPacking)}function T(g,m){a.disableAll(),m.supportsVertexTextures&&a.enable(0),m.instancing&&a.enable(1),m.instancingColor&&a.enable(2),m.instancingMorph&&a.enable(3),m.matcap&&a.enable(4),m.envMap&&a.enable(5),m.normalMapObjectSpace&&a.enable(6),m.normalMapTangentSpace&&a.enable(7),m.clearcoat&&a.enable(8),m.iridescence&&a.enable(9),m.alphaTest&&a.enable(10),m.vertexColors&&a.enable(11),m.vertexAlphas&&a.enable(12),m.vertexUv1s&&a.enable(13),m.vertexUv2s&&a.enable(14),m.vertexUv3s&&a.enable(15),m.vertexTangents&&a.enable(16),m.anisotropy&&a.enable(17),m.alphaHash&&a.enable(18),m.batching&&a.enable(19),m.dispersion&&a.enable(20),m.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reverseDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),g.push(a.mask)}function b(g){const m=x[g.type];let E;if(m){const w=fn[m];E=Vu.clone(w.uniforms)}else E=g.uniforms;return E}function z(g,m){let E;for(let w=0,C=h.length;w<C;w++){const U=h[w];if(U.cacheKey===m){E=U,++E.usedTimes;break}}return E===void 0&&(E=new Zg(i,m,g,r),h.push(E)),E}function B(g){if(--g.usedTimes===0){const m=h.indexOf(g);h[m]=h[h.length-1],h.pop(),g.destroy()}}function F(g){l.remove(g)}function v(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:z,releaseProgram:B,releaseShaderCache:F,programs:h,dispose:v}}function e_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function n_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,_,x,S,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:_,groupOrder:x,renderOrder:u.renderOrder,z:S,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=_,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=S,d.group=p),t++,d}function a(u,f,_,x,S,p){const d=o(u,f,_,x,S,p);_.transmission>0?n.push(d):_.transparent===!0?s.push(d):e.push(d)}function l(u,f,_,x,S,p){const d=o(u,f,_,x,S,p);_.transmission>0?n.unshift(d):_.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||n_),n.length>1&&n.sort(f||sc),s.length>1&&s.sort(f||sc)}function h(){for(let u=t,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function i_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new rc,i.set(n,[o])):s>=r.length?(o=new rc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function s_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function r_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let o_=0;function a_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l_(i){const t=new s_,e=r_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new qt,o=new qt;function a(c){let h=0,u=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let _=0,x=0,S=0,p=0,d=0,M=0,T=0,b=0,z=0,B=0,F=0;c.sort(a_);for(let g=0,m=c.length;g<m;g++){const E=c[g],w=E.color,C=E.intensity,U=E.distance,R=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=w.r*C,u+=w.g*C,f+=w.b*C;else if(E.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(E.sh.coefficients[D],C);F++}else if(E.isDirectionalLight){const D=t.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const N=E.shadow,I=e.get(E);I.shadowIntensity=N.intensity,I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,n.directionalShadow[_]=I,n.directionalShadowMap[_]=R,n.directionalShadowMatrix[_]=E.shadow.matrix,M++}n.directional[_]=D,_++}else if(E.isSpotLight){const D=t.get(E);D.position.setFromMatrixPosition(E.matrixWorld),D.color.copy(w).multiplyScalar(C),D.distance=U,D.coneCos=Math.cos(E.angle),D.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),D.decay=E.decay,n.spot[S]=D;const N=E.shadow;if(E.map&&(n.spotLightMap[z]=E.map,z++,N.updateMatrices(E),E.castShadow&&B++),n.spotLightMatrix[S]=N.matrix,E.castShadow){const I=e.get(E);I.shadowIntensity=N.intensity,I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,n.spotShadow[S]=I,n.spotShadowMap[S]=R,b++}S++}else if(E.isRectAreaLight){const D=t.get(E);D.color.copy(w).multiplyScalar(C),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=D,p++}else if(E.isPointLight){const D=t.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),D.distance=E.distance,D.decay=E.decay,E.castShadow){const N=E.shadow,I=e.get(E);I.shadowIntensity=N.intensity,I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,I.shadowCameraNear=N.camera.near,I.shadowCameraFar=N.camera.far,n.pointShadow[x]=I,n.pointShadowMap[x]=R,n.pointShadowMatrix[x]=E.shadow.matrix,T++}n.point[x]=D,x++}else if(E.isHemisphereLight){const D=t.get(E);D.skyColor.copy(E.color).multiplyScalar(C),D.groundColor.copy(E.groundColor).multiplyScalar(C),n.hemi[d]=D,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==_||v.pointLength!==x||v.spotLength!==S||v.rectAreaLength!==p||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==z||v.numLightProbes!==F)&&(n.directional.length=_,n.spot.length=S,n.rectArea.length=p,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+z-B,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=F,v.directionalLength=_,v.pointLength=x,v.spotLength=S,v.rectAreaLength=p,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=z,v.numLightProbes=F,n.version=o_++)}function l(c,h){let u=0,f=0,_=0,x=0,S=0;const p=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const T=c[d];if(T.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(T.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(T.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:n}}function oc(i){const t=new l_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function c_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new oc(i),t.set(s,[a])):r>=o.length?(a=new oc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d_(i,t,e){let n=new Ca;const s=new ut,r=new ut,o=new de,a=new Rd({depthPacking:Zh}),l=new Pd,c={},h=e.maxTextureSize,u={[jn]:Oe,[Oe]:jn,[pn]:pn},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const x=new De;x.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new se(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let d=this.type;this.render=function(B,F,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||B.length===0)return;const g=i.getRenderTarget(),m=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Yn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const C=d!==wn&&this.type===wn,U=d===wn&&this.type!==wn;for(let R=0,D=B.length;R<D;R++){const N=B[R],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const H=I.getFrameExtents();if(s.multiply(H),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,I.mapSize.y=r.y)),I.map===null||C===!0||U===!0){const Q=this.type!==wn?{minFilter:hn,magFilter:hn}:{};I.map!==null&&I.map.dispose(),I.map=new pi(s.x,s.y,Q),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const K=I.getViewportCount();for(let Q=0;Q<K;Q++){const ft=I.getViewport(Q);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),w.viewport(o),I.updateMatrices(N,Q),n=I.getFrustum(),b(F,v,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===wn&&M(I,v),I.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(g,m,E)};function M(B,F){const v=t.update(S);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,_.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(F,null,v,f,S,null),_.uniforms.shadow_pass.value=B.mapPass.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(F,null,v,_,S,null)}function T(B,F,v,g){let m=null;const E=v.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(E!==void 0)m=E;else if(m=v.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const w=m.uuid,C=F.uuid;let U=c[w];U===void 0&&(U={},c[w]=U);let R=U[C];R===void 0&&(R=m.clone(),U[C]=R,F.addEventListener("dispose",z)),m=R}if(m.visible=F.visible,m.wireframe=F.wireframe,g===wn?m.side=F.shadowSide!==null?F.shadowSide:F.side:m.side=F.shadowSide!==null?F.shadowSide:u[F.side],m.alphaMap=F.alphaMap,m.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,m.map=F.map,m.clipShadows=F.clipShadows,m.clippingPlanes=F.clippingPlanes,m.clipIntersection=F.clipIntersection,m.displacementMap=F.displacementMap,m.displacementScale=F.displacementScale,m.displacementBias=F.displacementBias,m.wireframeLinewidth=F.wireframeLinewidth,m.linewidth=F.linewidth,v.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const w=i.properties.get(m);w.light=v}return m}function b(B,F,v,g,m){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&m===wn)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,B.matrixWorld);const C=t.update(B),U=B.material;if(Array.isArray(U)){const R=C.groups;for(let D=0,N=R.length;D<N;D++){const I=R[D],H=U[I.materialIndex];if(H&&H.visible){const K=T(B,H,g,m);B.onBeforeShadow(i,B,F,v,C,K,I),i.renderBufferDirect(v,null,C,K,B,I),B.onAfterShadow(i,B,F,v,C,K,I)}}}else if(U.visible){const R=T(B,U,g,m);B.onBeforeShadow(i,B,F,v,C,R,null),i.renderBufferDirect(v,null,C,R,B,null),B.onAfterShadow(i,B,F,v,C,R,null)}}const w=B.children;for(let C=0,U=w.length;C<U;C++)b(w[C],F,v,g,m)}function z(B){B.target.removeEventListener("dispose",z);for(const v in c){const g=c[v],m=B.target.uuid;m in g&&(g[m].dispose(),delete g[m])}}}const f_={[po]:mo,[go]:xo,[_o]:Mo,[$i]:vo,[mo]:po,[xo]:go,[Mo]:_o,[vo]:$i};function p_(i,t){function e(){let k=!1;const _t=new de;let Z=null;const nt=new de(0,0,0,0);return{setMask:function(xt){Z!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){k=xt},setClear:function(xt,vt,kt,he,ye){ye===!0&&(xt*=he,vt*=he,kt*=he),_t.set(xt,vt,kt,he),nt.equals(_t)===!1&&(i.clearColor(xt,vt,kt,he),nt.copy(_t))},reset:function(){k=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let k=!1,_t=!1,Z=null,nt=null,xt=null;return{setReversed:function(vt){if(_t!==vt){const kt=t.get("EXT_clip_control");vt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),_t=vt;const he=xt;xt=null,this.setClear(he)}},getReversed:function(){return _t},setTest:function(vt){vt?ct(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(vt){Z!==vt&&!k&&(i.depthMask(vt),Z=vt)},setFunc:function(vt){if(_t&&(vt=f_[vt]),nt!==vt){switch(vt){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case xo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){xt!==vt&&(_t&&(vt=1-vt),i.clearDepth(vt),xt=vt)},reset:function(){k=!1,Z=null,nt=null,xt=null,_t=!1}}}function s(){let k=!1,_t=null,Z=null,nt=null,xt=null,vt=null,kt=null,he=null,ye=null;return{setTest:function(ee){k||(ee?ct(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ee){_t!==ee&&!k&&(i.stencilMask(ee),_t=ee)},setFunc:function(ee,en,Mn){(Z!==ee||nt!==en||xt!==Mn)&&(i.stencilFunc(ee,en,Mn),Z=ee,nt=en,xt=Mn)},setOp:function(ee,en,Mn){(vt!==ee||kt!==en||he!==Mn)&&(i.stencilOp(ee,en,Mn),vt=ee,kt=en,he=Mn)},setLocked:function(ee){k=ee},setClear:function(ee){ye!==ee&&(i.clearStencil(ee),ye=ee)},reset:function(){k=!1,_t=null,Z=null,nt=null,xt=null,vt=null,kt=null,he=null,ye=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,_=[],x=null,S=!1,p=null,d=null,M=null,T=null,b=null,z=null,B=null,F=new Yt(0,0,0),v=0,g=!1,m=null,E=null,w=null,C=null,U=null;const R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(I)[1]),D=N>=1):I.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),D=N>=2);let H=null,K={};const Q=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),At=new de().fromArray(Q),$=new de().fromArray(ft);function tt(k,_t,Z,nt){const xt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(k,vt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Z;kt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(_t+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return vt}const lt={};lt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc($i),rt(!1),dt($a),ct(i.CULL_FACE),P(Yn);function ct(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function wt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ft(k,_t){return u[k]!==_t?(i.bindFramebuffer(k,_t),u[k]=_t,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Rt(k,_t){let Z=_,nt=!1;if(k){Z=f.get(_t),Z===void 0&&(Z=[],f.set(_t,Z));const xt=k.textures;if(Z.length!==xt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,kt=xt.length;vt<kt;vt++)Z[vt]=i.COLOR_ATTACHMENT0+vt;Z.length=xt.length,nt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Z)}function $t(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const Xt={[li]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[Eh]:i.FUNC_REVERSE_SUBTRACT};Xt[bh]=i.MIN,Xt[Ah]=i.MAX;const Ct={[Th]:i.ZERO,[wh]:i.ONE,[Ch]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(k,_t,Z,nt,xt,vt,kt,he,ye,ee){if(k===Yn){S===!0&&(wt(i.BLEND),S=!1);return}if(S===!1&&(ct(i.BLEND),S=!0),k!==yh){if(k!==p||ee!==g){if((d!==li||b!==li)&&(i.blendEquation(i.FUNC_ADD),d=li,b=li),ee)switch(k){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.ONE,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,T=null,z=null,B=null,F.set(0,0,0),v=0,p=k,g=ee}return}xt=xt||_t,vt=vt||Z,kt=kt||nt,(_t!==d||xt!==b)&&(i.blendEquationSeparate(Xt[_t],Xt[xt]),d=_t,b=xt),(Z!==M||nt!==T||vt!==z||kt!==B)&&(i.blendFuncSeparate(Ct[Z],Ct[nt],Ct[vt],Ct[kt]),M=Z,T=nt,z=vt,B=kt),(he.equals(F)===!1||ye!==v)&&(i.blendColor(he.r,he.g,he.b,ye),F.copy(he),v=ye),p=k,g=!1}function st(k,_t){k.side===pn?wt(i.CULL_FACE):ct(i.CULL_FACE);let Z=k.side===Oe;_t&&(Z=!Z),rt(Z),k.blending===Yi&&k.transparent===!1?P(Yn):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const nt=k.stencilWrite;a.setTest(nt),nt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Tt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){m!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),m=k)}function dt(k){k!==vh?(ct(i.CULL_FACE),k!==E&&(k===$a?i.cullFace(i.BACK):k===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),E=k}function et(k){k!==w&&(D&&i.lineWidth(k),w=k)}function Tt(k,_t,Z){k?(ct(i.POLYGON_OFFSET_FILL),(C!==_t||U!==Z)&&(i.polygonOffset(_t,Z),C=_t,U=Z)):wt(i.POLYGON_OFFSET_FILL)}function ot(k){k?ct(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+R-1),H!==k&&(i.activeTexture(k),H=k)}function y(k,_t,Z){Z===void 0&&(H===null?Z=i.TEXTURE0+R-1:Z=H);let nt=K[Z];nt===void 0&&(nt={type:void 0,texture:void 0},K[Z]=nt),(nt.type!==k||nt.texture!==_t)&&(H!==Z&&(i.activeTexture(Z),H=Z),i.bindTexture(k,_t||lt[k]),nt.type=k,nt.texture=_t)}function X(){const k=K[H];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){At.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function St(k){$.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),$.copy(k))}function jt(k,_t){let Z=c.get(_t);Z===void 0&&(Z=new WeakMap,c.set(_t,Z));let nt=Z.get(k);nt===void 0&&(nt=i.getUniformBlockIndex(_t,k.name),Z.set(k,nt))}function Gt(k,_t){const nt=c.get(_t).get(k);l.get(_t)!==nt&&(i.uniformBlockBinding(_t,nt,k.__bindingPointIndex),l.set(_t,nt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,K={},u={},f=new WeakMap,_=[],x=null,S=!1,p=null,d=null,M=null,T=null,b=null,z=null,B=null,F=new Yt(0,0,0),v=0,g=!1,m=null,E=null,w=null,C=null,U=null,At.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:wt,bindFramebuffer:Ft,drawBuffers:Rt,useProgram:$t,setBlending:P,setMaterial:st,setFlipSided:rt,setCullFace:dt,setLineWidth:et,setPolygonOffset:Tt,setScissorTest:ot,activeTexture:L,bindTexture:y,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:Mt,texImage3D:It,updateUBOMapping:jt,uniformBlockBinding:Gt,texStorage2D:Ut,texStorage3D:at,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Pt,scissor:Ot,viewport:St,reset:re}}function m_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,y){return _?new OffscreenCanvas(L,y):xs("canvas")}function S(L,y,X){let J=1;const it=ot(L);if((it.width>X||it.height>X)&&(J=X/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(J*it.width),bt=Math.floor(J*it.height);u===void 0&&(u=x(j,bt));const mt=y?x(j,bt):u;return mt.width=j,mt.height=bt,mt.getContext("2d").drawImage(L,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+bt+")."),mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function p(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(L,y,X,J,it=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=y;if(y===i.RED&&(X===i.FLOAT&&(j=i.R32F),X===i.HALF_FLOAT&&(j=i.R16F),X===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.R8UI),X===i.UNSIGNED_SHORT&&(j=i.R16UI),X===i.UNSIGNED_INT&&(j=i.R32UI),X===i.BYTE&&(j=i.R8I),X===i.SHORT&&(j=i.R16I),X===i.INT&&(j=i.R32I)),y===i.RG&&(X===i.FLOAT&&(j=i.RG32F),X===i.HALF_FLOAT&&(j=i.RG16F),X===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RG8UI),X===i.UNSIGNED_SHORT&&(j=i.RG16UI),X===i.UNSIGNED_INT&&(j=i.RG32UI),X===i.BYTE&&(j=i.RG8I),X===i.SHORT&&(j=i.RG16I),X===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGB8UI),X===i.UNSIGNED_SHORT&&(j=i.RGB16UI),X===i.UNSIGNED_INT&&(j=i.RGB32UI),X===i.BYTE&&(j=i.RGB8I),X===i.SHORT&&(j=i.RGB16I),X===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),X===i.UNSIGNED_INT&&(j=i.RGBA32UI),X===i.BYTE&&(j=i.RGBA8I),X===i.SHORT&&(j=i.RGBA16I),X===i.INT&&(j=i.RGBA32I)),y===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const bt=it?mr:Jt.getTransfer(J);X===i.FLOAT&&(j=i.RGBA32F),X===i.HALF_FLOAT&&(j=i.RGBA16F),X===i.UNSIGNED_BYTE&&(j=bt===ne?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(L,y){let X;return L?y===null||y===fi||y===gs?X=i.DEPTH24_STENCIL8:y===Rn?X=i.DEPTH32F_STENCIL8:y===ms&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fi||y===gs?X=i.DEPTH_COMPONENT24:y===Rn?X=i.DEPTH_COMPONENT32F:y===ms&&(X=i.DEPTH_COMPONENT16),X}function z(L,y){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==hn&&L.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function B(L){const y=L.target;y.removeEventListener("dispose",B),v(y),y.isVideoTexture&&h.delete(y)}function F(L){const y=L.target;y.removeEventListener("dispose",F),m(y)}function v(L){const y=n.get(L);if(y.__webglInit===void 0)return;const X=L.source,J=f.get(X);if(J){const it=J[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&g(L),Object.keys(J).length===0&&f.delete(X)}n.remove(L)}function g(L){const y=n.get(L);i.deleteTexture(y.__webglTexture);const X=L.source,J=f.get(X);delete J[y.__cacheKey],o.memory.textures--}function m(L){const y=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let it=0;it<y.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(y.__webglFramebuffer[J][it]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=L.textures;for(let J=0,it=X.length;J<it;J++){const j=n.get(X[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(L)}let E=0;function w(){E=0}function C(){const L=E;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),E+=1,L}function U(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function R(L,y){const X=n.get(L);if(L.isVideoTexture&&et(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,L,y);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function D(L,y){const X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function N(L,y){const X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function I(L,y){const X=n.get(L);if(L.version>0&&X.__version!==L.version){tt(X,L,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}const H={[dn]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},K={[hn]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Q={[Jh]:i.NEVER,[su]:i.ALWAYS,[Qh]:i.LESS,[Cc]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function ft(L,y){if(y.type===Rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Cr||y.magFilter===Ds||y.magFilter===di||y.minFilter===mn||y.minFilter===Cr||y.minFilter===Ds||y.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,H[y.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,H[y.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,H[y.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,K[y.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==Ds&&y.minFilter!==di||y.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function At(L,y){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",B));const J=y.source;let it=f.get(J);it===void 0&&(it={},f.set(J,it));const j=U(y);if(j!==L.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[j].usedTimes++;const bt=it[L.__cacheKey];bt!==void 0&&(it[L.__cacheKey].usedTimes--,bt.usedTimes===0&&g(y)),L.__cacheKey=j,L.__webglTexture=it[j].texture}return X}function $(L,y,X){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);const it=At(L,y),j=y.source;e.bindTexture(J,L.__webglTexture,i.TEXTURE0+X);const bt=n.get(j);if(j.version!==bt.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const mt=Jt.getPrimaries(Jt.workingColorSpace),Pt=y.colorSpace===Xn?null:Jt.getPrimaries(y.colorSpace),Ut=y.colorSpace===Xn||mt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let at=S(y.image,!1,s.maxTextureSize);at=Tt(y,at);const Mt=r.convert(y.format,y.colorSpace),It=r.convert(y.type);let Ot=T(y.internalFormat,Mt,It,y.colorSpace,y.isVideoTexture);ft(J,y);let St;const jt=y.mipmaps,Gt=y.isVideoTexture!==!0,re=bt.__version===void 0||it===!0,k=j.dataReady,_t=z(y,at);if(y.isDepthTexture)Ot=b(y.format===vs,y.type),re&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Ot,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ot,at.width,at.height,0,Mt,It,null));else if(y.isDataTexture)if(jt.length>0){Gt&&re&&e.texStorage2D(i.TEXTURE_2D,_t,Ot,jt[0].width,jt[0].height);for(let Z=0,nt=jt.length;Z<nt;Z++)St=jt[Z],Gt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,St.width,St.height,Mt,It,St.data):e.texImage2D(i.TEXTURE_2D,Z,Ot,St.width,St.height,0,Mt,It,St.data);y.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(i.TEXTURE_2D,_t,Ot,at.width,at.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Mt,It,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,at.width,at.height,0,Mt,It,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ot,jt[0].width,jt[0].height,at.depth);for(let Z=0,nt=jt.length;Z<nt;Z++)if(St=jt[Z],y.format!==cn)if(Mt!==null)if(Gt){if(k)if(y.layerUpdates.size>0){const xt=Fl(St.width,St.height,y.format,y.type);for(const vt of y.layerUpdates){const kt=St.data.subarray(vt*xt/St.data.BYTES_PER_ELEMENT,(vt+1)*xt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,vt,St.width,St.height,1,Mt,kt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,at.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ot,St.width,St.height,at.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,at.depth,Mt,It,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ot,St.width,St.height,at.depth,0,Mt,It,St.data)}else{Gt&&re&&e.texStorage2D(i.TEXTURE_2D,_t,Ot,jt[0].width,jt[0].height);for(let Z=0,nt=jt.length;Z<nt;Z++)St=jt[Z],y.format!==cn?Mt!==null?Gt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,St.width,St.height,Mt,It,St.data):e.texImage2D(i.TEXTURE_2D,Z,Ot,St.width,St.height,0,Mt,It,St.data)}else if(y.isDataArrayTexture)if(Gt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ot,at.width,at.height,at.depth),k)if(y.layerUpdates.size>0){const Z=Fl(at.width,at.height,y.format,y.type);for(const nt of y.layerUpdates){const xt=at.data.subarray(nt*Z/at.data.BYTES_PER_ELEMENT,(nt+1)*Z/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,Mt,It,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,It,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,at.width,at.height,at.depth,0,Mt,It,at.data);else if(y.isData3DTexture)Gt?(re&&e.texStorage3D(i.TEXTURE_3D,_t,Ot,at.width,at.height,at.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,It,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,at.width,at.height,at.depth,0,Mt,It,at.data);else if(y.isFramebufferTexture){if(re)if(Gt)e.texStorage2D(i.TEXTURE_2D,_t,Ot,at.width,at.height);else{let Z=at.width,nt=at.height;for(let xt=0;xt<_t;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ot,Z,nt,0,Mt,It,null),Z>>=1,nt>>=1}}else if(jt.length>0){if(Gt&&re){const Z=ot(jt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Ot,Z.width,Z.height)}for(let Z=0,nt=jt.length;Z<nt;Z++)St=jt[Z],Gt?k&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Mt,It,St):e.texImage2D(i.TEXTURE_2D,Z,Ot,Mt,It,St);y.generateMipmaps=!1}else if(Gt){if(re){const Z=ot(at);e.texStorage2D(i.TEXTURE_2D,_t,Ot,Z.width,Z.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,It,at)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Mt,It,at);p(y)&&d(J),bt.__version=j.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function tt(L,y,X){if(y.image.length!==6)return;const J=At(L,y),it=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const j=n.get(it);if(it.version!==j.__version||J===!0){e.activeTexture(i.TEXTURE0+X);const bt=Jt.getPrimaries(Jt.workingColorSpace),mt=y.colorSpace===Xn?null:Jt.getPrimaries(y.colorSpace),Pt=y.colorSpace===Xn||bt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Ut=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let nt=0;nt<6;nt++)!Ut&&!at?Mt[nt]=S(y.image[nt],!0,s.maxCubemapSize):Mt[nt]=at?y.image[nt].image:y.image[nt],Mt[nt]=Tt(y,Mt[nt]);const It=Mt[0],Ot=r.convert(y.format,y.colorSpace),St=r.convert(y.type),jt=T(y.internalFormat,Ot,St,y.colorSpace),Gt=y.isVideoTexture!==!0,re=j.__version===void 0||J===!0,k=it.dataReady;let _t=z(y,It);ft(i.TEXTURE_CUBE_MAP,y);let Z;if(Ut){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,jt,It.width,It.height);for(let nt=0;nt<6;nt++){Z=Mt[nt].mipmaps;for(let xt=0;xt<Z.length;xt++){const vt=Z[xt];y.format!==cn?Ot!==null?Gt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,vt.width,vt.height,Ot,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,jt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,vt.width,vt.height,Ot,St,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,jt,vt.width,vt.height,0,Ot,St,vt.data)}}}else{if(Z=y.mipmaps,Gt&&re){Z.length>0&&_t++;const nt=ot(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Mt[nt].width,Mt[nt].height,Ot,St,Mt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,jt,Mt[nt].width,Mt[nt].height,0,Ot,St,Mt[nt].data);for(let xt=0;xt<Z.length;xt++){const kt=Z[xt].image[nt].image;Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,kt.width,kt.height,Ot,St,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,jt,kt.width,kt.height,0,Ot,St,kt.data)}}else{Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,St,Mt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,jt,Ot,St,Mt[nt]);for(let xt=0;xt<Z.length;xt++){const vt=Z[xt];Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Ot,St,vt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,jt,Ot,St,vt.image[nt])}}}p(y)&&d(i.TEXTURE_CUBE_MAP),j.__version=it.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function lt(L,y,X,J,it,j){const bt=r.convert(X.format,X.colorSpace),mt=r.convert(X.type),Pt=T(X.internalFormat,bt,mt,X.colorSpace),Ut=n.get(y),at=n.get(X);if(at.__renderTarget=y,!Ut.__hasExternalTextures){const Mt=Math.max(1,y.width>>j),It=Math.max(1,y.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,Pt,Mt,It,y.depth,0,bt,mt,null):e.texImage2D(it,j,Pt,Mt,It,0,bt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,at.__webglTexture,0,rt(y)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,at.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(L,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),y.depthBuffer){const J=y.depthTexture,it=J&&J.isDepthTexture?J.type:null,j=b(y.stencilBuffer,it),bt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=rt(y);dt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,j,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,L)}else{const J=y.textures;for(let it=0;it<J.length;it++){const j=J[it],bt=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),Pt=T(j.internalFormat,bt,mt,j.colorSpace),Ut=rt(y);X&&dt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Pt,y.width,y.height):dt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,Pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(L,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),R(y.depthTexture,0);const it=J.__webglTexture,j=rt(y);if(y.depthTexture.format===_s)dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(y.depthTexture.format===vs)dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ft(L){const y=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=J}if(L.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?wt(y.__webglFramebuffer[0],L):wt(y.__webglFramebuffer,L)}else if(X){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),ct(y.__webglDepthbuffer[J],L,!1);else{const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ct(y.__webglDepthbuffer,L,!1);else{const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(L,y,X){const J=n.get(L);y!==void 0&&lt(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ft(L)}function $t(L){const y=L.texture,X=n.get(L),J=n.get(y);L.addEventListener("dispose",F);const it=L.textures,j=L.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),j){X.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[mt]=[];for(let Pt=0;Pt<y.mipmaps.length;Pt++)X.__webglFramebuffer[mt][Pt]=i.createFramebuffer()}else X.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)X.__webglFramebuffer[mt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(bt)for(let mt=0,Pt=it.length;mt<Pt;mt++){const Ut=n.get(it[mt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&dt(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const Pt=it[mt];X.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[mt]);const Ut=r.convert(Pt.format,Pt.colorSpace),at=r.convert(Pt.type),Mt=T(Pt.internalFormat,Ut,at,Pt.colorSpace,L.isXRRenderTarget===!0),It=rt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Mt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,X.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ft(i.TEXTURE_CUBE_MAP,y);for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)lt(X.__webglFramebuffer[mt][Pt],L,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt);else lt(X.__webglFramebuffer[mt],L,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(y)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let mt=0,Pt=it.length;mt<Pt;mt++){const Ut=it[mt],at=n.get(Ut);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ft(i.TEXTURE_2D,Ut),lt(X.__webglFramebuffer,L,Ut,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(Ut)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(mt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),ft(mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)lt(X.__webglFramebuffer[Pt],L,y,i.COLOR_ATTACHMENT0,mt,Pt);else lt(X.__webglFramebuffer,L,y,i.COLOR_ATTACHMENT0,mt,0);p(y)&&d(mt),e.unbindTexture()}L.depthBuffer&&Ft(L)}function Xt(L){const y=L.textures;for(let X=0,J=y.length;X<J;X++){const it=y[X];if(p(it)){const j=M(L),bt=n.get(it).__webglTexture;e.bindTexture(j,bt),d(j),e.unbindTexture()}}}const Ct=[],P=[];function st(L){if(L.samples>0){if(dt(L)===!1){const y=L.textures,X=L.width,J=L.height;let it=i.COLOR_BUFFER_BIT;const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(L),mt=y.length>1;if(mt)for(let Ut=0;Ut<y.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Pt=L.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ut=0;Ut<y.length;Ut++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ut]);const at=n.get(y[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,it,i.NEAREST),l===!0&&(Ct.length=0,P.length=0,Ct.push(i.COLOR_ATTACHMENT0+Ut),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ct.push(j),P.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Ut=0;Ut<y.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ut]);const at=n.get(y[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function rt(L){return Math.min(s.maxSamples,L.samples)}function dt(L){const y=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(L){const y=o.render.frame;h.get(L)!==y&&(h.set(L,y),L.update())}function Tt(L,y){const X=L.colorSpace,J=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ki&&X!==Xn&&(Jt.getTransfer(X)===ne?(J!==cn||it!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=w,this.setTexture2D=R,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=I,this.rebindTextures=Rt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=dt}function g_(i,t){function e(n,s=Xn){let r;const o=Jt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===yc)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===bc)return i.RGB;if(n===cn)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===Tc)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===Ao||n===To||n===wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Ro||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Ro)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===Xo||n===Yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===qo||n===$o||n===jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const __=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`;class x_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:__,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M_ extends gi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,_=null,x=null;const S=new x_,p=e.getContextAttributes();let d=null,M=null;const T=[],b=[],z=new ut;let B=null;const F=new Le;F.viewport=new de;const v=new Le;v.viewport=new de;const g=[F,v],m=new Od;let E=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=T[$];return tt===void 0&&(tt=new $r,T[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=T[$];return tt===void 0&&(tt=new $r,T[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=T[$];return tt===void 0&&(tt=new $r,T[$]=tt),tt.getHandSpace()};function C($){const tt=b.indexOf($.inputSource);if(tt===-1)return;const lt=T[tt];lt!==void 0&&(lt.update($.inputSource,$.frame,c||o),lt.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",R);for(let $=0;$<T.length;$++){const tt=b[$];tt!==null&&(b[$]=null,T[$].disconnect(tt))}E=null,w=null,S.reset(),t.setRenderTarget(d),_=null,f=null,u=null,s=null,M=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",U),s.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,ct=null,wt=null;p.depth&&(wt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?vs:_s,ct=p.stencil?gs:fi);const Ft={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new pi(f.textureWidth,f.textureHeight,{format:cn,type:_n,depthTexture:new zc(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),M=new pi(_.framebufferWidth,_.framebufferHeight,{format:cn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function R($){for(let tt=0;tt<$.removed.length;tt++){const lt=$.removed[tt],ct=b.indexOf(lt);ct>=0&&(b[ct]=null,T[ct].disconnect(lt))}for(let tt=0;tt<$.added.length;tt++){const lt=$.added[tt];let ct=b.indexOf(lt);if(ct===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=b.length){b.push(lt),ct=Ft;break}else if(b[Ft]===null){b[Ft]=lt,ct=Ft;break}if(ct===-1)break}const wt=T[ct];wt&&wt.connect(lt)}}const D=new O,N=new O;function I($,tt,lt){D.setFromMatrixPosition(tt.matrixWorld),N.setFromMatrixPosition(lt.matrixWorld);const ct=D.distanceTo(N),wt=tt.projectionMatrix.elements,Ft=lt.projectionMatrix.elements,Rt=wt[14]/(wt[10]-1),$t=wt[14]/(wt[10]+1),Xt=(wt[9]+1)/wt[5],Ct=(wt[9]-1)/wt[5],P=(wt[8]-1)/wt[0],st=(Ft[8]+1)/Ft[0],rt=Rt*P,dt=Rt*st,et=ct/(-P+st),Tt=et*-P;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const ot=Rt+et,L=$t+et,y=rt-Tt,X=dt+(ct-Tt),J=Xt*$t/L*ot,it=Ct*$t/L*ot;$.projectionMatrix.makePerspective(y,X,J,it,ot,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function H($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,lt=$.far;S.texture!==null&&(S.depthNear>0&&(tt=S.depthNear),S.depthFar>0&&(lt=S.depthFar)),m.near=v.near=F.near=tt,m.far=v.far=F.far=lt,(E!==m.near||w!==m.far)&&(s.updateRenderState({depthNear:m.near,depthFar:m.far}),E=m.near,w=m.far),F.layers.mask=$.layers.mask|2,v.layers.mask=$.layers.mask|4,m.layers.mask=F.layers.mask|v.layers.mask;const ct=$.parent,wt=m.cameras;H(m,ct);for(let Ft=0;Ft<wt.length;Ft++)H(wt[Ft],ct);wt.length===2?I(m,F,v):m.projectionMatrix.copy(F.projectionMatrix),K($,m,ct)};function K($,tt,lt){lt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(lt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ji*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(m)};let Q=null;function ft($,tt){if(h=tt.getViewerPose(c||o),x=tt,h!==null){const lt=h.views;_!==null&&(t.setRenderTargetFramebuffer(M,_.framebuffer),t.setRenderTarget(M));let ct=!1;lt.length!==m.cameras.length&&(m.cameras.length=0,ct=!0);for(let Rt=0;Rt<lt.length;Rt++){const $t=lt[Rt];let Xt=null;if(_!==null)Xt=_.getViewport($t);else{const P=u.getViewSubImage(f,$t);Xt=P.viewport,Rt===0&&(t.setRenderTargetTextures(M,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(M))}let Ct=g[Rt];Ct===void 0&&(Ct=new Le,Ct.layers.enable(Rt),Ct.viewport=new de,g[Rt]=Ct),Ct.matrix.fromArray($t.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray($t.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Rt===0&&(m.matrix.copy(Ct.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),ct===!0&&m.cameras.push(Ct)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Rt=u.getDepthInformation(lt[0]);Rt&&Rt.isValid&&Rt.texture&&S.init(t,Rt,s.renderState)}}for(let lt=0;lt<T.length;lt++){const ct=b[lt],wt=T[lt];ct!==null&&wt!==void 0&&wt.update(ct,tt,c||o)}Q&&Q($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),x=null}const At=new nh;At.setAnimationLoop(ft),this.setAnimationLoop=function($){Q=$},this.dispose=function(){}}}const si=new Qe,y_=new qt;function S_(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Fc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&_(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Oe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Oe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=t.get(d),T=M.envMap,b=M.envMapRotation;T&&(p.envMap.value=T,si.copy(b),si.x*=-1,si.y*=-1,si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),p.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(si)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=T*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function _(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const b=T.program;n.uniformBlockBinding(M,b)}function c(M,T){let b=s[M.id];b===void 0&&(x(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",p));const z=T.program;n.updateUBOMapping(M,z);const B=t.render.frame;r[M.id]!==B&&(f(M),r[M.id]=B)}function h(M){const T=u();M.__bindingPointIndex=T;const b=i.createBuffer(),z=M.__size,B=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,z,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=s[M.id],b=M.uniforms,z=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let B=0,F=b.length;B<F;B++){const v=Array.isArray(b[B])?b[B]:[b[B]];for(let g=0,m=v.length;g<m;g++){const E=v[g];if(_(E,B,g,z)===!0){const w=E.__offset,C=Array.isArray(E.value)?E.value:[E.value];let U=0;for(let R=0;R<C.length;R++){const D=C[R],N=S(D);typeof D=="number"||typeof D=="boolean"?(E.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,w+U,E.__data)):D.isMatrix3?(E.__data[0]=D.elements[0],E.__data[1]=D.elements[1],E.__data[2]=D.elements[2],E.__data[3]=0,E.__data[4]=D.elements[3],E.__data[5]=D.elements[4],E.__data[6]=D.elements[5],E.__data[7]=0,E.__data[8]=D.elements[6],E.__data[9]=D.elements[7],E.__data[10]=D.elements[8],E.__data[11]=0):(D.toArray(E.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(M,T,b,z){const B=M.value,F=T+"_"+b;if(z[F]===void 0)return typeof B=="number"||typeof B=="boolean"?z[F]=B:z[F]=B.clone(),!0;{const v=z[F];if(typeof B=="number"||typeof B=="boolean"){if(v!==B)return z[F]=B,!0}else if(v.equals(B)===!1)return v.copy(B),!0}return!1}function x(M){const T=M.uniforms;let b=0;const z=16;for(let F=0,v=T.length;F<v;F++){const g=Array.isArray(T[F])?T[F]:[T[F]];for(let m=0,E=g.length;m<E;m++){const w=g[m],C=Array.isArray(w.value)?w.value:[w.value];for(let U=0,R=C.length;U<R;U++){const D=C[U],N=S(D),I=b%z,H=I%N.boundary,K=I+H;b+=H,K!==0&&z-K<N.storage&&(b+=z-K),w.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,b+=N.storage}}}const B=b%z;return B>0&&(b+=z-B),M.__size=b,M.__cache={},this}function S(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function p(M){const T=M.target;T.removeEventListener("dispose",p);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class b_{constructor(t={}){const{canvas:e=yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const x=new Uint32Array(4),S=new Int32Array(4);let p=null,d=null;const M=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let z=!1;this._outputColorSpace=Ve;let B=0,F=0,v=null,g=-1,m=null;const E=new de,w=new de;let C=null;const U=new Yt(0);let R=0,D=e.width,N=e.height,I=1,H=null,K=null;const Q=new de(0,0,D,N),ft=new de(0,0,D,N);let At=!1;const $=new Ca;let tt=!1,lt=!1;const ct=new qt,wt=new qt,Ft=new O,Rt=new de,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Ct(){return v===null?I:1}let P=n;function st(A,G){return e.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),P===null){const G="webgl2";if(P=st(G,A),P===null)throw st(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,dt,et,Tt,ot,L,y,X,J,it,j,bt,mt,Pt,Ut,at,Mt,It,Ot,St,jt,Gt,re,k;function _t(){rt=new Um(P),rt.init(),Gt=new g_(P,rt),dt=new wm(P,rt,t,Gt),et=new p_(P,rt),dt.reverseDepthBuffer&&f&&et.buffers.depth.setReversed(!0),Tt=new Om(P),ot=new e_,L=new m_(P,rt,et,ot,dt,Gt,Tt),y=new Rm(b),X=new Im(b),J=new Gd(P),re=new Am(P,J),it=new Nm(P,J,Tt,re),j=new zm(P,it,J,Tt),Ot=new Bm(P,dt,L),at=new Cm(ot),bt=new t_(b,y,X,rt,dt,re,at),mt=new S_(b,ot),Pt=new i_,Ut=new c_(rt),It=new bm(b,y,X,et,j,_,l),Mt=new d_(b,j,dt),k=new E_(P,Tt,dt,et),St=new Tm(P,rt,Tt),jt=new Fm(P,rt,Tt),Tt.programs=bt.programs,b.capabilities=dt,b.extensions=rt,b.properties=ot,b.renderLists=Pt,b.shadowMap=Mt,b.state=et,b.info=Tt}_t();const Z=new M_(b,P);this.xr=Z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(D,N,!1))},this.getSize=function(A){return A.set(D,N)},this.setSize=function(A,G,Y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,N=G,e.width=Math.floor(A*I),e.height=Math.floor(G*I),Y===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(D*I,N*I).floor()},this.setDrawingBufferSize=function(A,G,Y){D=A,N=G,I=Y,e.width=Math.floor(A*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,G,Y,q){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,G,Y,q),et.viewport(E.copy(Q).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,G,Y,q){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,G,Y,q),et.scissor(w.copy(ft).multiplyScalar(I).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){et.setScissorTest(At=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Y=!0){let q=0;if(A){let W=!1;if(v!==null){const ht=v.texture.format;W=ht===ya||ht===Ma||ht===xa}if(W){const ht=v.texture.type,gt=ht===_n||ht===fi||ht===ms||ht===gs||ht===_a||ht===va,yt=It.getClearColor(),Et=It.getClearAlpha(),Bt=yt.r,Nt=yt.g,Lt=yt.b;gt?(x[0]=Bt,x[1]=Nt,x[2]=Lt,x[3]=Et,P.clearBufferuiv(P.COLOR,0,x)):(S[0]=Bt,S[1]=Nt,S[2]=Lt,S[3]=Et,P.clearBufferiv(P.COLOR,0,S))}else q|=P.COLOR_BUFFER_BIT}G&&(q|=P.DEPTH_BUFFER_BIT),Y&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),It.dispose(),Pt.dispose(),Ut.dispose(),ot.dispose(),y.dispose(),X.dispose(),j.dispose(),re.dispose(),k.dispose(),bt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ha),Z.removeEventListener("sessionend",Ga),Kn.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Tt.autoReset,G=Mt.enabled,Y=Mt.autoUpdate,q=Mt.needsUpdate,W=Mt.type;_t(),Tt.autoReset=A,Mt.enabled=G,Mt.autoUpdate=Y,Mt.needsUpdate=q,Mt.type=W}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kt(A){const G=A.target;G.removeEventListener("dispose",kt),he(G)}function he(A){ye(A),ot.remove(A)}function ye(A){const G=ot.get(A).programs;G!==void 0&&(G.forEach(function(Y){bt.releaseProgram(Y)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Y,q,W,ht){G===null&&(G=$t);const gt=W.isMesh&&W.matrixWorld.determinant()<0,yt=hh(A,G,Y,q,W);et.setMaterial(q,gt);let Et=Y.index,Bt=1;if(q.wireframe===!0){if(Et=it.getWireframeAttribute(Y),Et===void 0)return;Bt=2}const Nt=Y.drawRange,Lt=Y.attributes.position;let Zt=Nt.start*Bt,Qt=(Nt.start+Nt.count)*Bt;ht!==null&&(Zt=Math.max(Zt,ht.start*Bt),Qt=Math.min(Qt,(ht.start+ht.count)*Bt)),Et!==null?(Zt=Math.max(Zt,0),Qt=Math.min(Qt,Et.count)):Lt!=null&&(Zt=Math.max(Zt,0),Qt=Math.min(Qt,Lt.count));const fe=Qt-Zt;if(fe<0||fe===1/0)return;re.setup(W,q,yt,Y,Et);let ue,Kt=St;if(Et!==null&&(ue=J.get(Et),Kt=jt,Kt.setIndex(ue)),W.isMesh)q.wireframe===!0?(et.setLineWidth(q.wireframeLinewidth*Ct()),Kt.setMode(P.LINES)):Kt.setMode(P.TRIANGLES);else if(W.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),et.setLineWidth(Dt*Ct()),W.isLineSegments?Kt.setMode(P.LINES):W.isLineLoop?Kt.setMode(P.LINE_LOOP):Kt.setMode(P.LINE_STRIP)}else W.isPoints?Kt.setMode(P.POINTS):W.isSprite&&Kt.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Dt=W._multiDrawStarts,Me=W._multiDrawCounts,te=W._multiDrawCount,nn=Et?J.get(Et).bytesPerElement:1,xi=ot.get(q).currentProgram.getUniforms();for(let Be=0;Be<te;Be++)xi.setValue(P,"_gl_DrawID",Be),Kt.render(Dt[Be]/nn,Me[Be])}else if(W.isInstancedMesh)Kt.renderInstances(Zt,fe,W.count);else if(Y.isInstancedBufferGeometry){const Dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,Dt);Kt.renderInstances(Zt,fe,Me)}else Kt.render(Zt,fe)};function ee(A,G,Y){A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=Oe,A.needsUpdate=!0,Ls(A,G,Y),A.side=jn,A.needsUpdate=!0,Ls(A,G,Y),A.side=pn):Ls(A,G,Y)}this.compile=function(A,G,Y=null){Y===null&&(Y=A),d=Ut.get(Y),d.init(G),T.push(d),Y.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const q=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ht=W.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const yt=ht[gt];ee(yt,Y,W),q.add(yt)}else ee(ht,Y,W),q.add(ht)}),d=T.pop(),q},this.compileAsync=function(A,G,Y=null){const q=this.compile(A,G,Y);return new Promise(W=>{function ht(){if(q.forEach(function(gt){ot.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){W(A);return}setTimeout(ht,10)}rt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let en=null;function Mn(A){en&&en(A)}function Ha(){Kn.stop()}function Ga(){Kn.start()}const Kn=new nh;Kn.setAnimationLoop(Mn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(A){en=A,Z.setAnimationLoop(A),A===null?Kn.stop():Kn.start()},Z.addEventListener("sessionstart",Ha),Z.addEventListener("sessionend",Ga),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(G),G=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,G,v),d=Ut.get(A,T.length),d.init(G),T.push(d),wt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(wt),lt=this.localClippingEnabled,tt=at.init(this.clippingPlanes,lt),p=Pt.get(A,M.length),p.init(),M.push(p),Z.enabled===!0&&Z.isPresenting===!0){const ht=b.xr.getDepthSensingMesh();ht!==null&&Tr(ht,G,-1/0,b.sortObjects)}Tr(A,G,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(H,K),Xt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Xt&&It.addToRenderList(p,A),this.info.render.frame++,tt===!0&&at.beginShadows();const Y=d.state.shadowsArray;Mt.render(Y,A,G),tt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,W=p.transmissive;if(d.setupLights(),G.isArrayCamera){const ht=G.cameras;if(W.length>0)for(let gt=0,yt=ht.length;gt<yt;gt++){const Et=ht[gt];Wa(q,W,A,Et)}Xt&&It.render(A);for(let gt=0,yt=ht.length;gt<yt;gt++){const Et=ht[gt];Va(p,A,Et,Et.viewport)}}else W.length>0&&Wa(q,W,A,G),Xt&&It.render(A),Va(p,A,G);v!==null&&F===0&&(L.updateMultisampleRenderTarget(v),L.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(b,A,G),re.resetDefaultState(),g=-1,m=null,T.pop(),T.length>0?(d=T[T.length-1],tt===!0&&at.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Tr(A,G,Y,q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){q&&Rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const gt=j.update(A),yt=A.material;yt.visible&&p.push(A,gt,yt,Y,Rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const gt=j.update(A),yt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Rt.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Rt.copy(gt.boundingSphere.center)),Rt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(yt)){const Et=gt.groups;for(let Bt=0,Nt=Et.length;Bt<Nt;Bt++){const Lt=Et[Bt],Zt=yt[Lt.materialIndex];Zt&&Zt.visible&&p.push(A,gt,Zt,Y,Rt.z,Lt)}}else yt.visible&&p.push(A,gt,yt,Y,Rt.z,null)}}const ht=A.children;for(let gt=0,yt=ht.length;gt<yt;gt++)Tr(ht[gt],G,Y,q)}function Va(A,G,Y,q){const W=A.opaque,ht=A.transmissive,gt=A.transparent;d.setupLightsView(Y),tt===!0&&at.setGlobalState(b.clippingPlanes,Y),q&&et.viewport(E.copy(q)),W.length>0&&Ps(W,G,Y),ht.length>0&&Ps(ht,G,Y),gt.length>0&&Ps(gt,G,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Wa(A,G,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new pi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?As:_n,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ht=d.state.transmissionRenderTarget[q.id],gt=q.viewport||E;ht.setSize(gt.z*b.transmissionResolutionScale,gt.w*b.transmissionResolutionScale);const yt=b.getRenderTarget();b.setRenderTarget(ht),b.getClearColor(U),R=b.getClearAlpha(),R<1&&b.setClearColor(16777215,.5),b.clear(),Xt&&It.render(Y);const Et=b.toneMapping;b.toneMapping=qn;const Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),tt===!0&&at.setGlobalState(b.clippingPlanes,q),Ps(A,Y,q),L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Lt=0,Zt=G.length;Lt<Zt;Lt++){const Qt=G[Lt],fe=Qt.object,ue=Qt.geometry,Kt=Qt.material,Dt=Qt.group;if(Kt.side===pn&&fe.layers.test(q.layers)){const Me=Kt.side;Kt.side=Oe,Kt.needsUpdate=!0,Xa(fe,Y,q,ue,Kt,Dt),Kt.side=Me,Kt.needsUpdate=!0,Nt=!0}}Nt===!0&&(L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht))}b.setRenderTarget(yt),b.setClearColor(U,R),Bt!==void 0&&(q.viewport=Bt),b.toneMapping=Et}function Ps(A,G,Y){const q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ht=A.length;W<ht;W++){const gt=A[W],yt=gt.object,Et=gt.geometry,Bt=gt.group;let Nt=gt.material;Nt.allowOverride===!0&&q!==null&&(Nt=q),yt.layers.test(Y.layers)&&Xa(yt,G,Y,Et,Nt,Bt)}}function Xa(A,G,Y,q,W,ht){A.onBeforeRender(b,G,Y,q,W,ht),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(b,G,Y,q,A,ht),W.transparent===!0&&W.side===pn&&W.forceSinglePass===!1?(W.side=Oe,W.needsUpdate=!0,b.renderBufferDirect(Y,G,q,W,A,ht),W.side=jn,W.needsUpdate=!0,b.renderBufferDirect(Y,G,q,W,A,ht),W.side=pn):b.renderBufferDirect(Y,G,q,W,A,ht),A.onAfterRender(b,G,Y,q,W,ht)}function Ls(A,G,Y){G.isScene!==!0&&(G=$t);const q=ot.get(A),W=d.state.lights,ht=d.state.shadowsArray,gt=W.state.version,yt=bt.getParameters(A,W.state,ht,G,Y),Et=bt.getProgramCacheKey(yt);let Bt=q.programs;q.environment=A.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(A.isMeshStandardMaterial?X:y).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",kt),Bt=new Map,q.programs=Bt);let Nt=Bt.get(Et);if(Nt!==void 0){if(q.currentProgram===Nt&&q.lightsStateVersion===gt)return qa(A,yt),Nt}else yt.uniforms=bt.getUniforms(A),A.onBeforeCompile(yt,b),Nt=bt.acquireProgram(yt,Et),Bt.set(Et,Nt),q.uniforms=yt.uniforms;const Lt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=at.uniform),qa(A,yt),q.needsLights=dh(A),q.lightsStateVersion=gt,q.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.directionalShadowMap.value=W.state.directionalShadowMap,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotShadowMap.value=W.state.spotShadowMap,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMap.value=W.state.pointShadowMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Nt,q.uniformsList=null,Nt}function Ya(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=pr.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function qa(A,G){const Y=ot.get(A);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function hh(A,G,Y,q,W){G.isScene!==!0&&(G=$t),L.resetTextureUnits();const ht=G.fog,gt=q.isMeshStandardMaterial?G.environment:null,yt=v===null?b.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Ki,Et=(q.isMeshStandardMaterial?X:y).get(q.envMap||gt),Bt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Nt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Y.morphAttributes.position,Zt=!!Y.morphAttributes.normal,Qt=!!Y.morphAttributes.color;let fe=qn;q.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(fe=b.toneMapping);const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=ue!==void 0?ue.length:0,Dt=ot.get(q),Me=d.state.lights;if(tt===!0&&(lt===!0||A!==m)){const we=A===m&&q.id===g;at.setState(q,A,we)}let te=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Me.state.version||Dt.outputColorSpace!==yt||W.isBatchedMesh&&Dt.batching===!1||!W.isBatchedMesh&&Dt.batching===!0||W.isBatchedMesh&&Dt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Dt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Dt.instancing===!1||!W.isInstancedMesh&&Dt.instancing===!0||W.isSkinnedMesh&&Dt.skinning===!1||!W.isSkinnedMesh&&Dt.skinning===!0||W.isInstancedMesh&&Dt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Dt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Dt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Dt.instancingMorph===!1&&W.morphTexture!==null||Dt.envMap!==Et||q.fog===!0&&Dt.fog!==ht||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Bt||Dt.vertexTangents!==Nt||Dt.morphTargets!==Lt||Dt.morphNormals!==Zt||Dt.morphColors!==Qt||Dt.toneMapping!==fe||Dt.morphTargetsCount!==Kt)&&(te=!0):(te=!0,Dt.__version=q.version);let nn=Dt.currentProgram;te===!0&&(nn=Ls(q,G,W));let xi=!1,Be=!1,ns=!1;const ae=nn.getUniforms(),Ye=Dt.uniforms;if(et.useProgram(nn.program)&&(xi=!0,Be=!0,ns=!0),q.id!==g&&(g=q.id,Be=!0),xi||m!==A){et.buffers.depth.getReversed()?(ct.copy(A.projectionMatrix),Eu(ct),bu(ct),ae.setValue(P,"projectionMatrix",ct)):ae.setValue(P,"projectionMatrix",A.projectionMatrix),ae.setValue(P,"viewMatrix",A.matrixWorldInverse);const Ie=ae.map.cameraPosition;Ie!==void 0&&Ie.setValue(P,Ft.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&ae.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ae.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),m!==A&&(m=A,Be=!0,ns=!0)}if(W.isSkinnedMesh){ae.setOptional(P,W,"bindMatrix"),ae.setOptional(P,W,"bindMatrixInverse");const we=W.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ae.setValue(P,"boneTexture",we.boneTexture,L))}W.isBatchedMesh&&(ae.setOptional(P,W,"batchingTexture"),ae.setValue(P,"batchingTexture",W._matricesTexture,L),ae.setOptional(P,W,"batchingIdTexture"),ae.setValue(P,"batchingIdTexture",W._indirectTexture,L),ae.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&ae.setValue(P,"batchingColorTexture",W._colorsTexture,L));const qe=Y.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Ot.update(W,Y,nn),(Be||Dt.receiveShadow!==W.receiveShadow)&&(Dt.receiveShadow=W.receiveShadow,ae.setValue(P,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ye.envMap.value=Et,Ye.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(Ye.envMapIntensity.value=G.environmentIntensity),Be&&(ae.setValue(P,"toneMappingExposure",b.toneMappingExposure),Dt.needsLights&&uh(Ye,ns),ht&&q.fog===!0&&mt.refreshFogUniforms(Ye,ht),mt.refreshMaterialUniforms(Ye,q,I,N,d.state.transmissionRenderTarget[A.id]),pr.upload(P,Ya(Dt),Ye,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(pr.upload(P,Ya(Dt),Ye,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ae.setValue(P,"center",W.center),ae.setValue(P,"modelViewMatrix",W.modelViewMatrix),ae.setValue(P,"normalMatrix",W.normalMatrix),ae.setValue(P,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const we=q.uniformsGroups;for(let Ie=0,wr=we.length;Ie<wr;Ie++){const Jn=we[Ie];k.update(Jn,nn),k.bind(Jn,nn)}}return nn}function uh(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function dh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,G,Y){const q=ot.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ot.get(A.texture).__webglTexture=G,ot.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Y=ot.get(A);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const fh=P.createFramebuffer();this.setRenderTarget=function(A,G=0,Y=0){v=A,B=G,F=Y;let q=!0,W=null,ht=!1,gt=!1;if(A){const Et=ot.get(A);if(Et.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Et.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Et.__hasExternalTextures)L.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(Et.__boundDepthTexture!==Lt){if(Lt!==null&&ot.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const Nt=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[G])?W=Nt[G][Y]:W=Nt[G],ht=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?W=Nt[Y]:W=Nt,E.copy(A.viewport),w.copy(A.scissor),C=A.scissorTest}else E.copy(Q).multiplyScalar(I).floor(),w.copy(ft).multiplyScalar(I).floor(),C=At;if(Y!==0&&(W=fh),et.bindFramebuffer(P.FRAMEBUFFER,W)&&q&&et.drawBuffers(A,W),et.viewport(E),et.scissor(w),et.setScissorTest(C),ht){const Et=ot.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,Et.__webglTexture,Y)}else if(gt){const Et=ot.get(A.texture),Bt=G;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,Y,Bt)}else if(A!==null&&Y!==0){const Et=ot.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Et.__webglTexture,Y)}g=-1},this.readRenderTargetPixels=function(A,G,Y,q,W,ht,gt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt){et.bindFramebuffer(P.FRAMEBUFFER,yt);try{const Et=A.texture,Bt=Et.format,Nt=Et.type;if(!dt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-q&&Y>=0&&Y<=A.height-W&&P.readPixels(G,Y,q,W,Gt.convert(Bt),Gt.convert(Nt),ht)}finally{const Et=v!==null?ot.get(v).__webglFramebuffer:null;et.bindFramebuffer(P.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(A,G,Y,q,W,ht,gt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt)if(G>=0&&G<=A.width-q&&Y>=0&&Y<=A.height-W){et.bindFramebuffer(P.FRAMEBUFFER,yt);const Et=A.texture,Bt=Et.format,Nt=Et.type;if(!dt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.bufferData(P.PIXEL_PACK_BUFFER,ht.byteLength,P.STREAM_READ),P.readPixels(G,Y,q,W,Gt.convert(Bt),Gt.convert(Nt),0);const Zt=v!==null?ot.get(v).__webglFramebuffer:null;et.bindFramebuffer(P.FRAMEBUFFER,Zt);const Qt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Su(P,Qt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ht),P.deleteBuffer(Lt),P.deleteSync(Qt),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Y=0){const q=Math.pow(2,-Y),W=Math.floor(A.image.width*q),ht=Math.floor(A.image.height*q),gt=G!==null?G.x:0,yt=G!==null?G.y:0;L.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,gt,yt,W,ht),et.unbindTexture()};const ph=P.createFramebuffer(),mh=P.createFramebuffer();this.copyTextureToTexture=function(A,G,Y=null,q=null,W=0,ht=null){ht===null&&(W!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=W,W=0):ht=0);let gt,yt,Et,Bt,Nt,Lt,Zt,Qt,fe;const ue=A.isCompressedTexture?A.mipmaps[ht]:A.image;if(Y!==null)gt=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Bt=Y.min.x,Nt=Y.min.y,Lt=Y.isBox3?Y.min.z:0;else{const qe=Math.pow(2,-W);gt=Math.floor(ue.width*qe),yt=Math.floor(ue.height*qe),A.isDataArrayTexture?Et=ue.depth:A.isData3DTexture?Et=Math.floor(ue.depth*qe):Et=1,Bt=0,Nt=0,Lt=0}q!==null?(Zt=q.x,Qt=q.y,fe=q.z):(Zt=0,Qt=0,fe=0);const Kt=Gt.convert(G.format),Dt=Gt.convert(G.type);let Me;G.isData3DTexture?(L.setTexture3D(G,0),Me=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Me=P.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const te=P.getParameter(P.UNPACK_ROW_LENGTH),nn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xi=P.getParameter(P.UNPACK_SKIP_PIXELS),Be=P.getParameter(P.UNPACK_SKIP_ROWS),ns=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Bt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt);const ae=A.isDataArrayTexture||A.isData3DTexture,Ye=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const qe=ot.get(A),we=ot.get(G),Ie=ot.get(qe.__renderTarget),wr=ot.get(we.__renderTarget);et.bindFramebuffer(P.READ_FRAMEBUFFER,Ie.__webglFramebuffer),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Jn=0;Jn<Et;Jn++)ae&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ot.get(A).__webglTexture,W,Lt+Jn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ot.get(G).__webglTexture,ht,fe+Jn)),P.blitFramebuffer(Bt,Nt,gt,yt,Zt,Qt,gt,yt,P.DEPTH_BUFFER_BIT,P.NEAREST);et.bindFramebuffer(P.READ_FRAMEBUFFER,null),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||ot.has(A)){const qe=ot.get(A),we=ot.get(G);et.bindFramebuffer(P.READ_FRAMEBUFFER,ph),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,mh);for(let Ie=0;Ie<Et;Ie++)ae?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qe.__webglTexture,W,Lt+Ie):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qe.__webglTexture,W),Ye?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.__webglTexture,ht,fe+Ie):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,we.__webglTexture,ht),W!==0?P.blitFramebuffer(Bt,Nt,gt,yt,Zt,Qt,gt,yt,P.COLOR_BUFFER_BIT,P.NEAREST):Ye?P.copyTexSubImage3D(Me,ht,Zt,Qt,fe+Ie,Bt,Nt,gt,yt):P.copyTexSubImage2D(Me,ht,Zt,Qt,Bt,Nt,gt,yt);et.bindFramebuffer(P.READ_FRAMEBUFFER,null),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ye?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Me,ht,Zt,Qt,fe,gt,yt,Et,Kt,Dt,ue.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,ht,Zt,Qt,fe,gt,yt,Et,Kt,ue.data):P.texSubImage3D(Me,ht,Zt,Qt,fe,gt,yt,Et,Kt,Dt,ue):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ht,Zt,Qt,gt,yt,Kt,Dt,ue.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ht,Zt,Qt,ue.width,ue.height,Kt,ue.data):P.texSubImage2D(P.TEXTURE_2D,ht,Zt,Qt,gt,yt,Kt,Dt,ue);P.pixelStorei(P.UNPACK_ROW_LENGTH,te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ns),ht===0&&G.generateMipmaps&&P.generateMipmap(Me),et.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Y=null,q=null,W=0){return fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,Y,q,W)},this.initRenderTarget=function(A){ot.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),et.unbindTexture()},this.resetState=function(){B=0,F=0,v=null,et.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const ac={type:"change"},Fa={type:"start"},ah={type:"end"},rr=new Aa,lc=new kn,A_=Math.cos(70*Rc.DEG2RAD),ge=new O,Ue=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ao=1e-6;class T_ extends eh{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new We,this._lastTargetPosition=new O,this._quat=new We().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ul,this._sphericalDelta=new Ul,this._scale=1,this._panOffset=new O,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new O,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C_.bind(this),this._onPointerDown=w_.bind(this),this._onPointerUp=R_.bind(this),this._onContextMenu=F_.bind(this),this._onMouseWheel=D_.bind(this),this._onKeyDown=I_.bind(this),this._onTouchStart=U_.bind(this),this._onTouchMove=N_.bind(this),this._onMouseDown=P_.bind(this),this._onMouseMove=L_.bind(this),this._interceptControlDown=O_.bind(this),this._interceptControlUp=B_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ac),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ue:n>Math.PI&&(n-=Ue),s<-Math.PI?s+=Ue:s>Math.PI&&(s-=Ue),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rr.origin.copy(this.object.position),rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rr.direction))<A_?this.object.lookAt(this.target):(lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),rr.intersectPlane(lc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ao||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ao||this._lastTargetPosition.distanceToSquared(this.target)>ao?(this.dispatchEvent(ac),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ue/60*this.autoRotateSpeed*t:Ue/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ue*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ue*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ue*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ue*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function w_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function C_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function R_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ah),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function P_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Fa)}function L_(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function D_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Fa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ah))}function I_(i){this.enabled!==!1&&this._handleKeyDown(i)}function U_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Fa)}function N_(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function F_(i){this.enabled!==!1&&i.preventDefault()}function O_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function B_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ui=new Qe(0,0,0,"YXZ"),Ni=new O,z_={type:"change"},k_={type:"lock"},H_={type:"unlock"},cc=.002,hc=Math.PI/2;class G_ extends eh{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=V_.bind(this),this._onPointerlockChange=W_.bind(this),this._onPointerlockError=X_.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(t){super.connect(t),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Ni.setFromMatrixColumn(e.matrix,0),Ni.crossVectors(e.up,Ni),e.position.addScaledVector(Ni,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Ni.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ni,t)}lock(t=!1){this.domElement.requestPointerLock({unadjustedMovement:t})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function V_(i){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;Ui.setFromQuaternion(t.quaternion),Ui.y-=i.movementX*cc*this.pointerSpeed,Ui.x-=i.movementY*cc*this.pointerSpeed,Ui.x=Math.max(hc-this.maxPolarAngle,Math.min(hc-this.minPolarAngle,Ui.x)),t.quaternion.setFromEuler(Ui),this.dispatchEvent(z_)}function W_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(k_),this.isLocked=!0):(this.dispatchEvent(H_),this.isLocked=!1)}function X_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class Ar extends De{constructor(t=(s,r,o)=>o.set(s,r,Math.cos(s)*Math.sin(r)),e=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};const s=[],r=[],o=[],a=[],l=1e-5,c=new O,h=new O,u=new O,f=new O,_=new O,x=e+1;for(let S=0;S<=n;S++){const p=S/n;for(let d=0;d<=e;d++){const M=d/e;t(M,p,h),r.push(h.x,h.y,h.z),M-l>=0?(t(M-l,p,u),f.subVectors(h,u)):(t(M+l,p,u),f.subVectors(u,h)),p-l>=0?(t(M,p-l,u),_.subVectors(h,u)):(t(M,p+l,u),_.subVectors(u,h)),c.crossVectors(f,_).normalize(),o.push(c.x,c.y,c.z),a.push(M,p)}}for(let S=0;S<n;S++)for(let p=0;p<e;p++){const d=S*x+p,M=S*x+p+1,T=(S+1)*x+p+1,b=(S+1)*x+p;s.push(d,M,b),s.push(M,T,b)}this.setIndex(s),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Je(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new De;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in u.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(u.attributes[_]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in u.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[_]===void 0&&(o[_]=[]),o[_].push(u.morphAttributes[_])}if(t){let _;if(e)_=u.index.count;else if(u.attributes.position!==void 0)_=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,h),c+=_}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const _=i[f].index;for(let x=0;x<_.count;++x)u.push(_.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=uc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const _=[];for(let S=0;S<o[h].length;++S)_.push(o[h][S][f]);const x=uc(_);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function uc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new un(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,_=h.count;f<_;f++)for(let x=0;x<e;x++){const S=h.getComponent(f,x);a.setComponent(f+u,x,S)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Y_="modulepreload",q_=function(i){return"/tp_sistemas_graficos/"+i},dc={},$_=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(c=>{if(c=q_(c),c in dc)return;dc[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Y_,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((_,x)=>{f.addEventListener("load",_),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},j_="https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.12.0",Z_=60,K_=new O(1,1,1),fc=new O;let Fe=null;function J_(i){const t=i.parameters;if(i.type==="BoxGeometry"){const e=t.width!==void 0?t.width/2:.5,n=t.height!==void 0?t.height/2:.5,s=t.depth!==void 0?t.depth/2:.5;return Fe.ColliderDesc.cuboid(e,n,s)}else if(i.type==="SphereGeometry"||i.type==="IcosahedronGeometry"){const e=t.radius!==void 0?t.radius:1;return Fe.ColliderDesc.ball(e)}else if(i.type==="CylinderGeometry"){const e=t.radiusBottom!==void 0?t.radiusBottom:.5,n=t.height!==void 0?t.height:.5;return Fe.ColliderDesc.cylinder(n/2,e)}else if(i.type==="CapsuleGeometry"){const e=t.radius!==void 0?t.radius:.5,n=t.height!==void 0?t.height:.5;return Fe.ColliderDesc.capsule(n/2,e)}else if(i.type==="BufferGeometry"){const e=[],n=new O,s=i.getAttribute("position");for(let o=0;o<s.count;o++)n.fromBufferAttribute(s,o),e.push(n.x,n.y,n.z);const r=i.getIndex()===null?Uint32Array.from(Array(parseInt(e.length/3)).keys()):i.getIndex().array;return Fe.ColliderDesc.trimesh(e,r)}return null}async function Q_(){Fe===null&&(Fe=await $_(()=>import(`${j_}`),[]),await Fe.init());const i=new O(0,-9.81,0),t=new Fe.World(i),e=[],n=new WeakMap,s=new O,r=new We,o=new qt;function a(p){p.traverse(function(d){if(d.isMesh){const M=d.userData.physics;M&&l(d,M.mass,M.restitution)}})}function l(p,d=0,M=0){const T=J_(p.geometry);if(T===null)return;T.setMass(d),T.setRestitution(M);const b=p.isInstancedMesh?c(p,d,T):h(p.position,p.quaternion,d,T);p.userData.physics||(p.userData.physics={}),p.userData.physics.body=b,d>0&&(e.push(p),n.set(p,b))}function c(p,d,M){const T=p.instanceMatrix.array,b=[];for(let z=0;z<p.count;z++){const B=s.fromArray(T,z*16+12);b.push(h(B,null,d,M))}return b}function h(p,d,M,T){const b=M>0?Fe.RigidBodyDesc.dynamic():Fe.RigidBodyDesc.fixed();b.setTranslation(...p),d!==null&&b.setRotation(d);const z=t.createRigidBody(b);return t.createCollider(T,z),z}function u(p,d,M=0){let T=n.get(p);p.isInstancedMesh&&(T=T[M]),T.setAngvel(fc),T.setLinvel(fc),T.setTranslation(d)}function f(p,d,M=0){let T=n.get(p);p.isInstancedMesh&&(T=T[M]),T.setLinvel(d)}function _(p,d,M,T,b){const z=Fe.ColliderDesc.heightfield(d,M,T,b),B=Fe.RigidBodyDesc.fixed();B.setTranslation(p.position.x,p.position.y,p.position.z),B.setRotation(p.quaternion);const F=t.createRigidBody(B);return t.createCollider(z,F),p.userData.physics||(p.userData.physics={}),p.userData.physics.body=F,F}const x=new Bd;function S(){t.timestep=x.getDelta(),t.step();for(let p=0,d=e.length;p<d;p++){const M=e[p];if(M.isInstancedMesh){const T=M.instanceMatrix.array,b=n.get(M);for(let z=0;z<b.length;z++){const B=b[z],F=B.translation();r.copy(B.rotation()),o.compose(F,r,K_).toArray(T,z*16)}M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere()}else{const T=n.get(M);M.position.copy(T.translation()),M.quaternion.copy(T.rotation())}}}return setInterval(S,1e3/Z_),{RAPIER:Fe,world:t,addScene:a,addMesh:l,setMeshPosition:u,setMeshVelocity:f,addHeightfield:_}}const ai={segments:1e3,width:4,height:.05,controlPoints:[[-40,0,14],[-24,0,16],[-14,0,-6],[-4,0,6],[-14,0,80],[40,0,68],[52,0,30],[50,0,24],[76,0,0],[72,0,-30],[46,0,-38],[-10,0,-50],[-18,0,-40],[-38,0,-64],[-72,0,-36],[-78,0,28],[-42,0,28]]},t0=[{width:4,height:8,radius:6,from:.3,to:.4},{width:4,height:8,radius:6,from:.8,to:.9}],e0=[{width:8,height:2,from:.14,to:.15,reverse:!1},{width:8,height:2,from:.165,to:.175,reverse:!0},{width:8,height:2,from:.56,to:.57,reverse:!1},{width:8,height:2,from:.585,to:.595,reverse:!1}],n0=[{from:.01,to:.015},{from:.02,to:.025},{from:.03,to:.035},{from:.47,to:.475},{from:.48,to:.485},{from:.49,to:.495},{from:.65,to:.655},{from:.66,to:.665},{from:.67,to:.675}],i0={postWidth:1,postHeight:4,postLampWidth:2,postLampHeight:.25,postLampDepth:.5,distance:1,steps:.05,inners:[{from:.025,to:.275},{from:.45,to:.75},{from:.95,to:.95}],outers:[{from:.05,to:.25},{from:.425,to:.775},{from:.925,to:.975}]};var s0=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,lo=Math.ceil,Ze=Math.floor,Ne="[BigNumber Error] ",pc=Ne+"Number primitive has more than 15 significant digits: ",an=1e14,zt=14,mc=9007199254740991,co=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],zn=1e7,He=1e9;function lh(i){var t,e,n,s=M.prototype={constructor:M,toString:null,valueOf:null},r=new M(1),o=20,a=4,l=-7,c=21,h=-1e7,u=1e7,f=!1,_=1,x=0,S={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},p="0123456789abcdefghijklmnopqrstuvwxyz",d=!0;function M(v,g){var m,E,w,C,U,R,D,N,I=this;if(!(I instanceof M))return new M(v,g);if(g==null){if(v&&v._isBigNumber===!0){I.s=v.s,!v.c||v.e>u?I.c=I.e=null:v.e<h?I.c=[I.e=0]:(I.e=v.e,I.c=v.c.slice());return}if((R=typeof v=="number")&&v*0==0){if(I.s=1/v<0?(v=-v,-1):1,v===~~v){for(C=0,U=v;U>=10;U/=10,C++);C>u?I.c=I.e=null:(I.e=C,I.c=[v]);return}N=String(v)}else{if(!s0.test(N=String(v)))return n(I,N,R);I.s=N.charCodeAt(0)==45?(N=N.slice(1),-1):1}(C=N.indexOf("."))>-1&&(N=N.replace(".","")),(U=N.search(/e/i))>0?(C<0&&(C=U),C+=+N.slice(U+1),N=N.substring(0,U)):C<0&&(C=N.length)}else{if(le(g,2,p.length,"Base"),g==10&&d)return I=new M(v),B(I,o+I.e+1,a);if(N=String(v),R=typeof v=="number"){if(v*0!=0)return n(I,N,R,g);if(I.s=1/v<0?(N=N.slice(1),-1):1,M.DEBUG&&N.replace(/^0\.0*|\./,"").length>15)throw Error(pc+v)}else I.s=N.charCodeAt(0)===45?(N=N.slice(1),-1):1;for(m=p.slice(0,g),C=U=0,D=N.length;U<D;U++)if(m.indexOf(E=N.charAt(U))<0){if(E=="."){if(U>C){C=D;continue}}else if(!w&&(N==N.toUpperCase()&&(N=N.toLowerCase())||N==N.toLowerCase()&&(N=N.toUpperCase()))){w=!0,U=-1,C=0;continue}return n(I,String(v),R,g)}R=!1,N=e(N,g,10,I.s),(C=N.indexOf("."))>-1?N=N.replace(".",""):C=N.length}for(U=0;N.charCodeAt(U)===48;U++);for(D=N.length;N.charCodeAt(--D)===48;);if(N=N.slice(U,++D)){if(D-=U,R&&M.DEBUG&&D>15&&(v>mc||v!==Ze(v)))throw Error(pc+I.s*v);if((C=C-U-1)>u)I.c=I.e=null;else if(C<h)I.c=[I.e=0];else{if(I.e=C,I.c=[],U=(C+1)%zt,C<0&&(U+=zt),U<D){for(U&&I.c.push(+N.slice(0,U)),D-=zt;U<D;)I.c.push(+N.slice(U,U+=zt));U=zt-(N=N.slice(U)).length}else U-=D;for(;U--;N+="0");I.c.push(+N)}}else I.c=[I.e=0]}M.clone=lh,M.ROUND_UP=0,M.ROUND_DOWN=1,M.ROUND_CEIL=2,M.ROUND_FLOOR=3,M.ROUND_HALF_UP=4,M.ROUND_HALF_DOWN=5,M.ROUND_HALF_EVEN=6,M.ROUND_HALF_CEIL=7,M.ROUND_HALF_FLOOR=8,M.EUCLID=9,M.config=M.set=function(v){var g,m;if(v!=null)if(typeof v=="object"){if(v.hasOwnProperty(g="DECIMAL_PLACES")&&(m=v[g],le(m,0,He,g),o=m),v.hasOwnProperty(g="ROUNDING_MODE")&&(m=v[g],le(m,0,8,g),a=m),v.hasOwnProperty(g="EXPONENTIAL_AT")&&(m=v[g],m&&m.pop?(le(m[0],-1e9,0,g),le(m[1],0,He,g),l=m[0],c=m[1]):(le(m,-1e9,He,g),l=-(c=m<0?-m:m))),v.hasOwnProperty(g="RANGE"))if(m=v[g],m&&m.pop)le(m[0],-1e9,-1,g),le(m[1],1,He,g),h=m[0],u=m[1];else if(le(m,-1e9,He,g),m)h=-(u=m<0?-m:m);else throw Error(Ne+g+" cannot be zero: "+m);if(v.hasOwnProperty(g="CRYPTO"))if(m=v[g],m===!!m)if(m)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))f=m;else throw f=!m,Error(Ne+"crypto unavailable");else f=m;else throw Error(Ne+g+" not true or false: "+m);if(v.hasOwnProperty(g="MODULO_MODE")&&(m=v[g],le(m,0,9,g),_=m),v.hasOwnProperty(g="POW_PRECISION")&&(m=v[g],le(m,0,He,g),x=m),v.hasOwnProperty(g="FORMAT"))if(m=v[g],typeof m=="object")S=m;else throw Error(Ne+g+" not an object: "+m);if(v.hasOwnProperty(g="ALPHABET"))if(m=v[g],typeof m=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(m))d=m.slice(0,10)=="0123456789",p=m;else throw Error(Ne+g+" invalid: "+m)}else throw Error(Ne+"Object expected: "+v);return{DECIMAL_PLACES:o,ROUNDING_MODE:a,EXPONENTIAL_AT:[l,c],RANGE:[h,u],CRYPTO:f,MODULO_MODE:_,POW_PRECISION:x,FORMAT:S,ALPHABET:p}},M.isBigNumber=function(v){if(!v||v._isBigNumber!==!0)return!1;if(!M.DEBUG)return!0;var g,m,E=v.c,w=v.e,C=v.s;t:if({}.toString.call(E)=="[object Array]"){if((C===1||C===-1)&&w>=-1e9&&w<=He&&w===Ze(w)){if(E[0]===0){if(w===0&&E.length===1)return!0;break t}if(g=(w+1)%zt,g<1&&(g+=zt),String(E[0]).length==g){for(g=0;g<E.length;g++)if(m=E[g],m<0||m>=an||m!==Ze(m))break t;if(m!==0)return!0}}}else if(E===null&&w===null&&(C===null||C===1||C===-1))return!0;throw Error(Ne+"Invalid BigNumber: "+v)},M.maximum=M.max=function(){return b(arguments,-1)},M.minimum=M.min=function(){return b(arguments,1)},M.random=function(){var v=9007199254740992,g=Math.random()*v&2097151?function(){return Ze(Math.random()*v)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(m){var E,w,C,U,R,D=0,N=[],I=new M(r);if(m==null?m=o:le(m,0,He),U=lo(m/zt),f)if(crypto.getRandomValues){for(E=crypto.getRandomValues(new Uint32Array(U*=2));D<U;)R=E[D]*131072+(E[D+1]>>>11),R>=9e15?(w=crypto.getRandomValues(new Uint32Array(2)),E[D]=w[0],E[D+1]=w[1]):(N.push(R%1e14),D+=2);D=U/2}else if(crypto.randomBytes){for(E=crypto.randomBytes(U*=7);D<U;)R=(E[D]&31)*281474976710656+E[D+1]*1099511627776+E[D+2]*4294967296+E[D+3]*16777216+(E[D+4]<<16)+(E[D+5]<<8)+E[D+6],R>=9e15?crypto.randomBytes(7).copy(E,D):(N.push(R%1e14),D+=7);D=U/7}else throw f=!1,Error(Ne+"crypto unavailable");if(!f)for(;D<U;)R=g(),R<9e15&&(N[D++]=R%1e14);for(U=N[--D],m%=zt,U&&m&&(R=co[zt-m],N[D]=Ze(U/R)*R);N[D]===0;N.pop(),D--);if(D<0)N=[C=0];else{for(C=-1;N[0]===0;N.splice(0,1),C-=zt);for(D=1,R=N[0];R>=10;R/=10,D++);D<zt&&(C-=zt-D)}return I.e=C,I.c=N,I}}(),M.sum=function(){for(var v=1,g=arguments,m=new M(g[0]);v<g.length;)m=m.plus(g[v++]);return m},e=function(){var v="0123456789";function g(m,E,w,C){for(var U,R=[0],D,N=0,I=m.length;N<I;){for(D=R.length;D--;R[D]*=E);for(R[0]+=C.indexOf(m.charAt(N++)),U=0;U<R.length;U++)R[U]>w-1&&(R[U+1]==null&&(R[U+1]=0),R[U+1]+=R[U]/w|0,R[U]%=w)}return R.reverse()}return function(m,E,w,C,U){var R,D,N,I,H,K,Q,ft,At=m.indexOf("."),$=o,tt=a;for(At>=0&&(I=x,x=0,m=m.replace(".",""),ft=new M(E),K=ft.pow(m.length-At),x=I,ft.c=g(Tn(je(K.c),K.e,"0"),10,w,v),ft.e=ft.c.length),Q=g(m,E,w,U?(R=p,v):(R=v,p)),N=I=Q.length;Q[--I]==0;Q.pop());if(!Q[0])return R.charAt(0);if(At<0?--N:(K.c=Q,K.e=N,K.s=C,K=t(K,ft,$,tt,w),Q=K.c,H=K.r,N=K.e),D=N+$+1,At=Q[D],I=w/2,H=H||D<0||Q[D+1]!=null,H=tt<4?(At!=null||H)&&(tt==0||tt==(K.s<0?3:2)):At>I||At==I&&(tt==4||H||tt==6&&Q[D-1]&1||tt==(K.s<0?8:7)),D<1||!Q[0])m=H?Tn(R.charAt(1),-$,R.charAt(0)):R.charAt(0);else{if(Q.length=D,H)for(--w;++Q[--D]>w;)Q[D]=0,D||(++N,Q=[1].concat(Q));for(I=Q.length;!Q[--I];);for(At=0,m="";At<=I;m+=R.charAt(Q[At++]));m=Tn(m,N,R.charAt(0))}return m}}(),t=function(){function v(E,w,C){var U,R,D,N,I=0,H=E.length,K=w%zn,Q=w/zn|0;for(E=E.slice();H--;)D=E[H]%zn,N=E[H]/zn|0,U=Q*D+N*K,R=K*D+U%zn*zn+I,I=(R/C|0)+(U/zn|0)+Q*N,E[H]=R%C;return I&&(E=[I].concat(E)),E}function g(E,w,C,U){var R,D;if(C!=U)D=C>U?1:-1;else for(R=D=0;R<C;R++)if(E[R]!=w[R]){D=E[R]>w[R]?1:-1;break}return D}function m(E,w,C,U){for(var R=0;C--;)E[C]-=R,R=E[C]<w[C]?1:0,E[C]=R*U+E[C]-w[C];for(;!E[0]&&E.length>1;E.splice(0,1));}return function(E,w,C,U,R){var D,N,I,H,K,Q,ft,At,$,tt,lt,ct,wt,Ft,Rt,$t,Xt,Ct=E.s==w.s?1:-1,P=E.c,st=w.c;if(!P||!P[0]||!st||!st[0])return new M(!E.s||!w.s||(P?st&&P[0]==st[0]:!st)?NaN:P&&P[0]==0||!st?Ct*0:Ct/0);for(At=new M(Ct),$=At.c=[],N=E.e-w.e,Ct=C+N+1,R||(R=an,N=Ke(E.e/zt)-Ke(w.e/zt),Ct=Ct/zt|0),I=0;st[I]==(P[I]||0);I++);if(st[I]>(P[I]||0)&&N--,Ct<0)$.push(1),H=!0;else{for(Ft=P.length,$t=st.length,I=0,Ct+=2,K=Ze(R/(st[0]+1)),K>1&&(st=v(st,K,R),P=v(P,K,R),$t=st.length,Ft=P.length),wt=$t,tt=P.slice(0,$t),lt=tt.length;lt<$t;tt[lt++]=0);Xt=st.slice(),Xt=[0].concat(Xt),Rt=st[0],st[1]>=R/2&&Rt++;do{if(K=0,D=g(st,tt,$t,lt),D<0){if(ct=tt[0],$t!=lt&&(ct=ct*R+(tt[1]||0)),K=Ze(ct/Rt),K>1)for(K>=R&&(K=R-1),Q=v(st,K,R),ft=Q.length,lt=tt.length;g(Q,tt,ft,lt)==1;)K--,m(Q,$t<ft?Xt:st,ft,R),ft=Q.length,D=1;else K==0&&(D=K=1),Q=st.slice(),ft=Q.length;if(ft<lt&&(Q=[0].concat(Q)),m(tt,Q,lt,R),lt=tt.length,D==-1)for(;g(st,tt,$t,lt)<1;)K++,m(tt,$t<lt?Xt:st,lt,R),lt=tt.length}else D===0&&(K++,tt=[0]);$[I++]=K,tt[0]?tt[lt++]=P[wt]||0:(tt=[P[wt]],lt=1)}while((wt++<Ft||tt[0]!=null)&&Ct--);H=tt[0]!=null,$[0]||$.splice(0,1)}if(R==an){for(I=1,Ct=$[0];Ct>=10;Ct/=10,I++);B(At,C+(At.e=I+N*zt-1)+1,U,H)}else At.e=N,At.r=+H;return At}}();function T(v,g,m,E){var w,C,U,R,D;if(m==null?m=a:le(m,0,8),!v.c)return v.toString();if(w=v.c[0],U=v.e,g==null)D=je(v.c),D=E==1||E==2&&(U<=l||U>=c)?ar(D,U):Tn(D,U,"0");else if(v=B(new M(v),g,m),C=v.e,D=je(v.c),R=D.length,E==1||E==2&&(g<=C||C<=l)){for(;R<g;D+="0",R++);D=ar(D,C)}else if(g-=U,D=Tn(D,C,"0"),C+1>R){if(--g>0)for(D+=".";g--;D+="0");}else if(g+=C-R,g>0)for(C+1==R&&(D+=".");g--;D+="0");return v.s<0&&w?"-"+D:D}function b(v,g){for(var m,E,w=1,C=new M(v[0]);w<v.length;w++)E=new M(v[w]),(!E.s||(m=ri(C,E))===g||m===0&&C.s===g)&&(C=E);return C}function z(v,g,m){for(var E=1,w=g.length;!g[--w];g.pop());for(w=g[0];w>=10;w/=10,E++);return(m=E+m*zt-1)>u?v.c=v.e=null:m<h?v.c=[v.e=0]:(v.e=m,v.c=g),v}n=function(){var v=/^(-?)0([xbo])(?=\w[\w.]*$)/i,g=/^([^.]+)\.$/,m=/^\.([^.]+)$/,E=/^-?(Infinity|NaN)$/,w=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(C,U,R,D){var N,I=R?U:U.replace(w,"");if(E.test(I))C.s=isNaN(I)?null:I<0?-1:1;else{if(!R&&(I=I.replace(v,function(H,K,Q){return N=(Q=Q.toLowerCase())=="x"?16:Q=="b"?2:8,!D||D==N?K:H}),D&&(N=D,I=I.replace(g,"$1").replace(m,"0.$1")),U!=I))return new M(I,N);if(M.DEBUG)throw Error(Ne+"Not a"+(D?" base "+D:"")+" number: "+U);C.s=null}C.c=C.e=null}}();function B(v,g,m,E){var w,C,U,R,D,N,I,H=v.c,K=co;if(H){t:{for(w=1,R=H[0];R>=10;R/=10,w++);if(C=g-w,C<0)C+=zt,U=g,D=H[N=0],I=Ze(D/K[w-U-1]%10);else if(N=lo((C+1)/zt),N>=H.length)if(E){for(;H.length<=N;H.push(0));D=I=0,w=1,C%=zt,U=C-zt+1}else break t;else{for(D=R=H[N],w=1;R>=10;R/=10,w++);C%=zt,U=C-zt+w,I=U<0?0:Ze(D/K[w-U-1]%10)}if(E=E||g<0||H[N+1]!=null||(U<0?D:D%K[w-U-1]),E=m<4?(I||E)&&(m==0||m==(v.s<0?3:2)):I>5||I==5&&(m==4||E||m==6&&(C>0?U>0?D/K[w-U]:0:H[N-1])%10&1||m==(v.s<0?8:7)),g<1||!H[0])return H.length=0,E?(g-=v.e+1,H[0]=K[(zt-g%zt)%zt],v.e=-g||0):H[0]=v.e=0,v;if(C==0?(H.length=N,R=1,N--):(H.length=N+1,R=K[zt-C],H[N]=U>0?Ze(D/K[w-U]%K[U])*R:0),E)for(;;)if(N==0){for(C=1,U=H[0];U>=10;U/=10,C++);for(U=H[0]+=R,R=1;U>=10;U/=10,R++);C!=R&&(v.e++,H[0]==an&&(H[0]=1));break}else{if(H[N]+=R,H[N]!=an)break;H[N--]=0,R=1}for(C=H.length;H[--C]===0;H.pop());}v.e>u?v.c=v.e=null:v.e<h&&(v.c=[v.e=0])}return v}function F(v){var g,m=v.e;return m===null?v.toString():(g=je(v.c),g=m<=l||m>=c?ar(g,m):Tn(g,m,"0"),v.s<0?"-"+g:g)}return s.absoluteValue=s.abs=function(){var v=new M(this);return v.s<0&&(v.s=1),v},s.comparedTo=function(v,g){return ri(this,new M(v,g))},s.decimalPlaces=s.dp=function(v,g){var m,E,w,C=this;if(v!=null)return le(v,0,He),g==null?g=a:le(g,0,8),B(new M(C),v+C.e+1,g);if(!(m=C.c))return null;if(E=((w=m.length-1)-Ke(this.e/zt))*zt,w=m[w])for(;w%10==0;w/=10,E--);return E<0&&(E=0),E},s.dividedBy=s.div=function(v,g){return t(this,new M(v,g),o,a)},s.dividedToIntegerBy=s.idiv=function(v,g){return t(this,new M(v,g),0,1)},s.exponentiatedBy=s.pow=function(v,g){var m,E,w,C,U,R,D,N,I,H=this;if(v=new M(v),v.c&&!v.isInteger())throw Error(Ne+"Exponent not an integer: "+F(v));if(g!=null&&(g=new M(g)),R=v.e>14,!H.c||!H.c[0]||H.c[0]==1&&!H.e&&H.c.length==1||!v.c||!v.c[0])return I=new M(Math.pow(+F(H),R?v.s*(2-or(v)):+F(v))),g?I.mod(g):I;if(D=v.s<0,g){if(g.c?!g.c[0]:!g.s)return new M(NaN);E=!D&&H.isInteger()&&g.isInteger(),E&&(H=H.mod(g))}else{if(v.e>9&&(H.e>0||H.e<-1||(H.e==0?H.c[0]>1||R&&H.c[1]>=24e7:H.c[0]<8e13||R&&H.c[0]<=9999975e7)))return C=H.s<0&&or(v)?-0:0,H.e>-1&&(C=1/C),new M(D?1/C:C);x&&(C=lo(x/zt+2))}for(R?(m=new M(.5),D&&(v.s=1),N=or(v)):(w=Math.abs(+F(v)),N=w%2),I=new M(r);;){if(N){if(I=I.times(H),!I.c)break;C?I.c.length>C&&(I.c.length=C):E&&(I=I.mod(g))}if(w){if(w=Ze(w/2),w===0)break;N=w%2}else if(v=v.times(m),B(v,v.e+1,1),v.e>14)N=or(v);else{if(w=+F(v),w===0)break;N=w%2}H=H.times(H),C?H.c&&H.c.length>C&&(H.c.length=C):E&&(H=H.mod(g))}return E?I:(D&&(I=r.div(I)),g?I.mod(g):C?B(I,x,a,U):I)},s.integerValue=function(v){var g=new M(this);return v==null?v=a:le(v,0,8),B(g,g.e+1,v)},s.isEqualTo=s.eq=function(v,g){return ri(this,new M(v,g))===0},s.isFinite=function(){return!!this.c},s.isGreaterThan=s.gt=function(v,g){return ri(this,new M(v,g))>0},s.isGreaterThanOrEqualTo=s.gte=function(v,g){return(g=ri(this,new M(v,g)))===1||g===0},s.isInteger=function(){return!!this.c&&Ke(this.e/zt)>this.c.length-2},s.isLessThan=s.lt=function(v,g){return ri(this,new M(v,g))<0},s.isLessThanOrEqualTo=s.lte=function(v,g){return(g=ri(this,new M(v,g)))===-1||g===0},s.isNaN=function(){return!this.s},s.isNegative=function(){return this.s<0},s.isPositive=function(){return this.s>0},s.isZero=function(){return!!this.c&&this.c[0]==0},s.minus=function(v,g){var m,E,w,C,U=this,R=U.s;if(v=new M(v,g),g=v.s,!R||!g)return new M(NaN);if(R!=g)return v.s=-g,U.plus(v);var D=U.e/zt,N=v.e/zt,I=U.c,H=v.c;if(!D||!N){if(!I||!H)return I?(v.s=-g,v):new M(H?U:NaN);if(!I[0]||!H[0])return H[0]?(v.s=-g,v):new M(I[0]?U:a==3?-0:0)}if(D=Ke(D),N=Ke(N),I=I.slice(),R=D-N){for((C=R<0)?(R=-R,w=I):(N=D,w=H),w.reverse(),g=R;g--;w.push(0));w.reverse()}else for(E=(C=(R=I.length)<(g=H.length))?R:g,R=g=0;g<E;g++)if(I[g]!=H[g]){C=I[g]<H[g];break}if(C&&(w=I,I=H,H=w,v.s=-v.s),g=(E=H.length)-(m=I.length),g>0)for(;g--;I[m++]=0);for(g=an-1;E>R;){if(I[--E]<H[E]){for(m=E;m&&!I[--m];I[m]=g);--I[m],I[E]+=an}I[E]-=H[E]}for(;I[0]==0;I.splice(0,1),--N);return I[0]?z(v,I,N):(v.s=a==3?-1:1,v.c=[v.e=0],v)},s.modulo=s.mod=function(v,g){var m,E,w=this;return v=new M(v,g),!w.c||!v.s||v.c&&!v.c[0]?new M(NaN):!v.c||w.c&&!w.c[0]?new M(w):(_==9?(E=v.s,v.s=1,m=t(w,v,0,3),v.s=E,m.s*=E):m=t(w,v,0,_),v=w.minus(m.times(v)),!v.c[0]&&_==1&&(v.s=w.s),v)},s.multipliedBy=s.times=function(v,g){var m,E,w,C,U,R,D,N,I,H,K,Q,ft,At,$,tt=this,lt=tt.c,ct=(v=new M(v,g)).c;if(!lt||!ct||!lt[0]||!ct[0])return!tt.s||!v.s||lt&&!lt[0]&&!ct||ct&&!ct[0]&&!lt?v.c=v.e=v.s=null:(v.s*=tt.s,!lt||!ct?v.c=v.e=null:(v.c=[0],v.e=0)),v;for(E=Ke(tt.e/zt)+Ke(v.e/zt),v.s*=tt.s,D=lt.length,H=ct.length,D<H&&(ft=lt,lt=ct,ct=ft,w=D,D=H,H=w),w=D+H,ft=[];w--;ft.push(0));for(At=an,$=zn,w=H;--w>=0;){for(m=0,K=ct[w]%$,Q=ct[w]/$|0,U=D,C=w+U;C>w;)N=lt[--U]%$,I=lt[U]/$|0,R=Q*N+I*K,N=K*N+R%$*$+ft[C]+m,m=(N/At|0)+(R/$|0)+Q*I,ft[C--]=N%At;ft[C]=m}return m?++E:ft.splice(0,1),z(v,ft,E)},s.negated=function(){var v=new M(this);return v.s=-v.s||null,v},s.plus=function(v,g){var m,E=this,w=E.s;if(v=new M(v,g),g=v.s,!w||!g)return new M(NaN);if(w!=g)return v.s=-g,E.minus(v);var C=E.e/zt,U=v.e/zt,R=E.c,D=v.c;if(!C||!U){if(!R||!D)return new M(w/0);if(!R[0]||!D[0])return D[0]?v:new M(R[0]?E:w*0)}if(C=Ke(C),U=Ke(U),R=R.slice(),w=C-U){for(w>0?(U=C,m=D):(w=-w,m=R),m.reverse();w--;m.push(0));m.reverse()}for(w=R.length,g=D.length,w-g<0&&(m=D,D=R,R=m,g=w),w=0;g;)w=(R[--g]=R[g]+D[g]+w)/an|0,R[g]=an===R[g]?0:R[g]%an;return w&&(R=[w].concat(R),++U),z(v,R,U)},s.precision=s.sd=function(v,g){var m,E,w,C=this;if(v!=null&&v!==!!v)return le(v,1,He),g==null?g=a:le(g,0,8),B(new M(C),v,g);if(!(m=C.c))return null;if(w=m.length-1,E=w*zt+1,w=m[w]){for(;w%10==0;w/=10,E--);for(w=m[0];w>=10;w/=10,E++);}return v&&C.e+1>E&&(E=C.e+1),E},s.shiftedBy=function(v){return le(v,-9007199254740991,mc),this.times("1e"+v)},s.squareRoot=s.sqrt=function(){var v,g,m,E,w,C=this,U=C.c,R=C.s,D=C.e,N=o+4,I=new M("0.5");if(R!==1||!U||!U[0])return new M(!R||R<0&&(!U||U[0])?NaN:U?C:1/0);if(R=Math.sqrt(+F(C)),R==0||R==1/0?(g=je(U),(g.length+D)%2==0&&(g+="0"),R=Math.sqrt(+g),D=Ke((D+1)/2)-(D<0||D%2),R==1/0?g="5e"+D:(g=R.toExponential(),g=g.slice(0,g.indexOf("e")+1)+D),m=new M(g)):m=new M(R+""),m.c[0]){for(D=m.e,R=D+N,R<3&&(R=0);;)if(w=m,m=I.times(w.plus(t(C,w,N,1))),je(w.c).slice(0,R)===(g=je(m.c)).slice(0,R))if(m.e<D&&--R,g=g.slice(R-3,R+1),g=="9999"||!E&&g=="4999"){if(!E&&(B(w,w.e+o+2,0),w.times(w).eq(C))){m=w;break}N+=4,R+=4,E=1}else{(!+g||!+g.slice(1)&&g.charAt(0)=="5")&&(B(m,m.e+o+2,1),v=!m.times(m).eq(C));break}}return B(m,m.e+o+1,a,v)},s.toExponential=function(v,g){return v!=null&&(le(v,0,He),v++),T(this,v,g,1)},s.toFixed=function(v,g){return v!=null&&(le(v,0,He),v=v+this.e+1),T(this,v,g)},s.toFormat=function(v,g,m){var E,w=this;if(m==null)v!=null&&g&&typeof g=="object"?(m=g,g=null):v&&typeof v=="object"?(m=v,v=g=null):m=S;else if(typeof m!="object")throw Error(Ne+"Argument not an object: "+m);if(E=w.toFixed(v,g),w.c){var C,U=E.split("."),R=+m.groupSize,D=+m.secondaryGroupSize,N=m.groupSeparator||"",I=U[0],H=U[1],K=w.s<0,Q=K?I.slice(1):I,ft=Q.length;if(D&&(C=R,R=D,D=C,ft-=C),R>0&&ft>0){for(C=ft%R||R,I=Q.substr(0,C);C<ft;C+=R)I+=N+Q.substr(C,R);D>0&&(I+=N+Q.slice(C)),K&&(I="-"+I)}E=H?I+(m.decimalSeparator||"")+((D=+m.fractionGroupSize)?H.replace(new RegExp("\\d{"+D+"}\\B","g"),"$&"+(m.fractionGroupSeparator||"")):H):I}return(m.prefix||"")+E+(m.suffix||"")},s.toFraction=function(v){var g,m,E,w,C,U,R,D,N,I,H,K,Q=this,ft=Q.c;if(v!=null&&(R=new M(v),!R.isInteger()&&(R.c||R.s!==1)||R.lt(r)))throw Error(Ne+"Argument "+(R.isInteger()?"out of range: ":"not an integer: ")+F(R));if(!ft)return new M(Q);for(g=new M(r),N=m=new M(r),E=D=new M(r),K=je(ft),C=g.e=K.length-Q.e-1,g.c[0]=co[(U=C%zt)<0?zt+U:U],v=!v||R.comparedTo(g)>0?C>0?g:N:R,U=u,u=1/0,R=new M(K),D.c[0]=0;I=t(R,g,0,1),w=m.plus(I.times(E)),w.comparedTo(v)!=1;)m=E,E=w,N=D.plus(I.times(w=N)),D=w,g=R.minus(I.times(w=g)),R=w;return w=t(v.minus(m),E,0,1),D=D.plus(w.times(N)),m=m.plus(w.times(E)),D.s=N.s=Q.s,C=C*2,H=t(N,E,C,a).minus(Q).abs().comparedTo(t(D,m,C,a).minus(Q).abs())<1?[N,E]:[D,m],u=U,H},s.toNumber=function(){return+F(this)},s.toPrecision=function(v,g){return v!=null&&le(v,1,He),T(this,v,g,2)},s.toString=function(v){var g,m=this,E=m.s,w=m.e;return w===null?E?(g="Infinity",E<0&&(g="-"+g)):g="NaN":(v==null?g=w<=l||w>=c?ar(je(m.c),w):Tn(je(m.c),w,"0"):v===10&&d?(m=B(new M(m),o+w+1,a),g=Tn(je(m.c),m.e,"0")):(le(v,2,p.length,"Base"),g=e(Tn(je(m.c),w,"0"),10,v,E,!0)),E<0&&m.c[0]&&(g="-"+g)),g},s.valueOf=s.toJSON=function(){return F(this)},s._isBigNumber=!0,s[Symbol.toStringTag]="BigNumber",s[Symbol.for("nodejs.util.inspect.custom")]=s.valueOf,i!=null&&M.set(i),M}function Ke(i){var t=i|0;return i>0||i===t?t:t-1}function je(i){for(var t,e,n=1,s=i.length,r=i[0]+"";n<s;){for(t=i[n++]+"",e=zt-t.length;e--;t="0"+t);r+=t}for(s=r.length;r.charCodeAt(--s)===48;);return r.slice(0,s+1||1)}function ri(i,t){var e,n,s=i.c,r=t.c,o=i.s,a=t.s,l=i.e,c=t.e;if(!o||!a)return null;if(e=s&&!s[0],n=r&&!r[0],e||n)return e?n?0:-a:o;if(o!=a)return o;if(e=o<0,n=l==c,!s||!r)return n?0:!s^e?1:-1;if(!n)return l>c^e?1:-1;for(a=(l=s.length)<(c=r.length)?l:c,o=0;o<a;o++)if(s[o]!=r[o])return s[o]>r[o]^e?1:-1;return l==c?0:l>c^e?1:-1}function le(i,t,e,n){if(i<t||i>e||i!==Ze(i))throw Error(Ne+(n||"Argument")+(typeof i=="number"?i<t||i>e?" out of range: ":" not an integer: ":" not a primitive number: ")+String(i))}function or(i){var t=i.c.length-1;return Ke(i.e/zt)==t&&i.c[t]%2!=0}function ar(i,t){return(i.length>1?i.charAt(0)+"."+i.slice(1):i)+(t<0?"e":"e+")+t}function Tn(i,t,e){var n,s;if(t<0){for(s=e+".";++t;s+=e);i=s+i}else if(n=i.length,++t>n){for(s=e,t-=n;--t;s+=e);i+=s}else t<n&&(i=i.slice(0,t)+"."+i.slice(t));return i}var Cn=lh(),$n=(i=>(i[i.Outside=-1]="Outside",i[i.Inside=1]="Inside",i))($n||{});const zi=class zi{constructor(t){V(this,"segments");V(this,"closed");V(this,"tangents");V(this,"binormals");V(this,"normals");V(this,"curve");const e=this.setParams(t);this.segments=e.segments,this.closed=e.closed,this.curve=this.createPath(e);const n=this.curve.computeFrenetFrames(this.segments,this.closed);this.tangents=n.tangents,this.binormals=n.binormals,this.normals=n.normals}setParams(t){return{controlPoints:t.controlPoints,segments:t.segments??zi.DEFAULT_SEGMENTS,closed:t.closed??zi.DEFAULT_CLOSED}}createPath(t){const e=t.controlPoints.map(s=>new O(...s));return new kc(e,t.closed,"chordal")}extrude(t,e){return new Ia(t,{...e,steps:this.segments,extrudePath:this.curve})}parametricSwept(t,e){const n=(r,o,a)=>{const l=Math.floor(o*this.segments),c=this.tangents[l],h=this.normals[l],u=this.binormals[l],f=this.curve.getPointAt(o),_=new qt;_.makeBasis(h,u,c),_.setPosition(f);const[x,S,p]=t(r,o),d=new O(x,S,p);d.applyMatrix4(_),a.set(d.x,d.y,d.z)};return new Ar(n,e,this.segments)}getSweptMatrix(t,e=0,n){const s=Math.floor(t*this.segments),r=this.binormals[s],o=this.normals[s],a=this.tangents[s],l=new qt;l.makeBasis(o,r,a);const h=this.curve.getPointAt(t).add(r.clone().multiplyScalar(n*Math.abs(e)));l.setPosition(h);const u=new qt;return u.makeRotationZ(Math.PI/2),l.multiply(u),l}getPointAt(t){return this.curve.getPointAt(t)}getLength(){return this.curve.getLength()}};V(zi,"DEFAULT_CLOSED",!0),V(zi,"DEFAULT_SEGMENTS",200);let xr=zi;const Hn=class Hn{constructor(t){V(this,"width");V(this,"segments");V(this,"curve");V(this,"geometry");const e=this.setParams(t);this.width=e.width,this.segments=e.segments,this.curve=new xr({controlPoints:e.controlPoints,segments:e.segments}),this.geometry=this.createGeometry(e.width,e.height)}setParams(t){return{controlPoints:t.controlPoints,width:t.width??Hn.DEFAULT_WIDTH,height:t.height??Hn.DEFAULT_HEIGHT,segments:t.segments??Hn.DEFAULT_SEGMENTS}}createGeometry(t,e){const n=(r,o)=>[0,2*-(r-.5)*t,0],s=this.curve.parametricSwept(n,2);return s.translate(0,e,0),s}createSubroad(t,e){const n=e-t,s=Math.ceil(n*this.segments),r=[];for(let a=0;a<=s;++a){const l=t+a*((e-t)/s),c=this.curve.getPointAt(l).toArray();r.push(c)}return new xr({controlPoints:r,segments:s,closed:!1})}getSweptMatrixFromInside(t,e=0){return this.getSweptMatrix(t,$n.Inside,this.width+e)}getSweptMatrixFromOutside(t,e=0){return this.getSweptMatrix(t,$n.Outside,this.width+e)}getSweptMatrix(t,e,n=0){return this.curve.getSweptMatrix(t,n,e)}};V(Hn,"DEFAULT_WIDTH",4),V(Hn,"DEFAULT_HEIGHT",.2),V(Hn,"DEFAULT_SEGMENTS",200);let ea=Hn;const Gn=class Gn{constructor(t){V(this,"geometry");const e=this.setParams(t),n=this.createShapeForExtrusion(e.width,e.height,e.radius);this.geometry=this.createExtrudeGeometry(n,e.curve,{bevelEnabled:!1})}setParams(t){return{curve:t.curve,width:t.width??Gn.DEFAULT_WIDTH,height:t.height??Gn.DEFAULT_HEIGHT,radius:t.radius??Gn.DEFAULT_RADIUS}}createShapeForExtrusion(t,e,n){const s=new ws;return s.moveTo(0,n+t),s.lineTo(0,n+t-t),s.absarc(0,0,n,Math.PI/2,-Math.PI/2,!1),s.lineTo(0,-(n+t)),s.lineTo(-e,-(n+t)),s.lineTo(-e,n+t),s.lineTo(0,n+t),s}createExtrudeGeometry(t,e,n){return e.extrude(t,n)}};V(Gn,"DEFAULT_WIDTH",2),V(Gn,"DEFAULT_HEIGHT",4),V(Gn,"DEFAULT_RADIUS",3);let na=Gn;var ps=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++i%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var u=0;u<t.children.length;u++)t.children[u].style.display=u===h?"block":"none";i=h}var s=(performance||Date).now(),r=s,o=0,a=e(new ps.Panel("FPS","#0ff","#002")),l=e(new ps.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new ps.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-s,200),h>=r+1e3&&(a.update(o*1e3/(h-r),100),r=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){s=this.end()},domElement:t,setMode:n}};ps.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,h=2*o,u=3*o,f=15*o,_=74*o,x=30*o,S=document.createElement("canvas");S.width=a,S.height=l,S.style.cssText="width:80px;height:48px";var p=S.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,a,l),p.fillStyle=t,p.fillText(i,c,h),p.fillRect(u,f,_,x),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(u,f,_,x),{dom:S,update:function(d,M){n=Math.min(n,d),s=Math.max(s,d),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,a,f),p.fillStyle=t,p.fillText(r(d)+" "+i+" ("+r(n)+"-"+r(s)+")",c,h),p.drawImage(S,u+o,f,_-o,x,u,f,_-o,x),p.fillRect(u+_-o,f,o,x),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(u+_-o,f,o,r((1-d/M)*x))}}};const hi=class hi{constructor(){V(this,"renderer");V(this,"scene");V(this,"stats");this.renderer=new b_,this.scene=new ju,this.insertCanvas(this.renderer)}static getInstance(){return hi.instance||(hi.instance=new hi),hi.instance}insertCanvas(t){const e=t.domElement,n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.appendChild(e),document.body.prepend(n);const s=new ps;n.appendChild(s.dom),this.stats=s}};V(hi,"instance");let tn=hi;class r0{constructor(t){V(this,"meshes");V(this,"scene");const e=tn.getInstance(),n=this.createGeometries(t);this.meshes=this.createMeshes(n),this.scene=e.scene}createGeometries(t){const e=t0,n=[];for(const s of e){const r=t.createSubroad(s.from,s.to),o=new na({curve:r,width:s.width,height:s.height,radius:s.radius});n.push(o)}return n}createMeshes(t){const e=new Er,n=e.load("/tp_sistemas_graficos/textures/Concrete008_4K-JPG_Color.jpg"),s=e.load("/tp_sistemas_graficos/textures/Concrete008_4K-JPG_AmbientOcclusion.jpg"),r=e.load("/tp_sistemas_graficos/textures/Concrete008_4K-JPG_NormalGL.jpg"),o=e.load("/tp_sistemas_graficos/textures/Concrete008_4K-JPG_Roughness.jpg");[n,r,s,o].forEach(f=>{f&&(f.wrapS=dn,f.wrapT=dn,f.repeat.set(.1,.1))});const l=new Xe({map:n,aoMap:s,normalMap:r,roughnessMap:o,roughness:1,normalScale:new ut(1,1),color:7106418}),c=[];for(const f of t)c.push(f.geometry);const h=Je(c);return[new se(h,l)]}render(){this.scene.add(...this.meshes)}}function Oa(i){return 0}function Ba(i){return 1}function ch(i,t=0){return e=>i*(1-e)+t}function o0(i,t){return e=>Math.pow(i*(e-.5),2)+t}function a0(i,t,e){return n=>i*Math.cos(2*Math.PI*t*n)+e}function l0(i){return t=>t*Math.PI*i}class za{constructor(t){V(this,"shape");const e=this.createPointsProfile(t.mappingFn,t.segments);this.shape=this.createShape(e)}createPointsProfile(t,e){const n=[];for(let s=0;s<=e;++s){const[r,o]=t(s/e);n.push({x:r,y:o})}return n}createShape(t){const e=new ws;e.moveTo(t[0].x,t[0].y);for(let n=1;n<t.length;n++)e.lineTo(t[n].x,t[n].y);return e}}const Ge=class Ge{constructor(t){V(this,"reverse");V(this,"geometry");V(this,"rectangularProfile",(t,e)=>n=>{const s=n*Ge.PROFILE_SIDES;return s<1?[-t/2,e*s]:s<2?[-t/2+t*(s-1),e]:s<3?[t/2,e-e*(-s+2)]:[t/2-t*(s-3),0]});const e=this.setParams(t);this.reverse=e.reverse;const n=this.createParametricGeometry(e.width,e.height,e.curve),s=this.createCapGeometry(e.curve,e.width,e.height);this.geometry=Je([n,s])}setParams(t){return{curve:t.curve,width:t.width??Ge.DEFAULT_WIDTH,height:t.height??Ge.DEFAULT_HEIGHT,reverse:t.reverse??Ge.DEFAULT_REVERSE}}createParametricGeometry(t,e,n){const s=(o,a)=>{const[l,c]=(()=>{const h=o*Ge.PROFILE_SIDES,u=ch(e),f=this.reverse?u(a):u(1-a);return h<1?[-f*h,-t/2]:h<2?[-f,-t/2+t*(h-1)]:h<3?[-f+f*(h-2),t/2]:[0,t/2-t*(h-3)]})();return[l,c,0]};return n.parametricSwept(s,Ge.PROFILE_SIDES)}createCapGeometry(t,e,n){const s=new za({mappingFn:this.rectangularProfile(e,n),segments:Ge.PROFILE_SIDES}),r=new Rs(s.shape),o=t.getSweptMatrix(this.reverse?0:1,0,$n.Inside);return r.applyMatrix4(o),r}};V(Ge,"PROFILE_SIDES",4),V(Ge,"DEFAULT_WIDTH",4),V(Ge,"DEFAULT_HEIGHT",1),V(Ge,"DEFAULT_REVERSE",!1);let ia=Ge;class c0{constructor(t,e){V(this,"meshes");V(this,"scene");const n=tn.getInstance();this.scene=n.scene;const s=this.createGeometries(t,e);this.meshes=this.createMeshes(s)}createGeometries(t,e){const n=e0,s=[];for(const r of n){const o=t.createSubroad(r.from,r.to),a=new ia({curve:o,width:r.width,height:r.height,reverse:r.reverse});s.push(a);const l=o.getLength(),c=r.reverse?1:-1,h=Math.atan(r.height/l)*c,u=new vn(r.width,.2,l),f=new Qo({transparent:!0,opacity:0}),_=new se(u,f),x=o.getSweptMatrix(.5,0,$n.Inside),S=new qt().makeRotationX(h),p=new qt().makeTranslation(0,r.height/2,-.4*c),d=x.multiply(S).multiply(p);_.applyMatrix4(d),this.scene.add(_),e.addRigidBody(_)}return s}createMeshes(t){const e=[];for(const n of t){const s=new Xe({color:65535,side:pn}),r=new se(n.geometry,s);e.push(r)}return e}render(){this.scene.add(...this.meshes)}}const ki=class ki{constructor(t){V(this,"geometry");const e=this.setParams(t),n=this.createShapeForExtrusion(e.radius);this.geometry=this.createExtrudeGeometry(n,e.curve,{bevelEnabled:!1})}setParams(t){return{curve:t.curve,radius:t.radius??ki.DEFAULT_RADIUS}}createShapeForExtrusion(t){const e=new ws,n=ki.DELTA;return e.moveTo(0,t-n),e.absarc(0,0,t+n,Math.PI/2,-Math.PI/2,!1),e.lineTo(0,-t),e.absarc(0,0,t,-Math.PI/2,Math.PI/2,!0),e.lineTo(0,t+n),e}createExtrudeGeometry(t,e,n){return e.extrude(t,n)}};V(ki,"DEFAULT_RADIUS",2),V(ki,"DELTA",.01);let sa=ki;class h0{constructor(t){V(this,"meshes");V(this,"scene");const e=tn.getInstance(),n=this.createGeometries(t);this.meshes=this.createMeshes(n),this.scene=e.scene}createGeometries(t){const e=n0,n=[];for(const s of e){const r=t.createSubroad(s.from,s.to),o=new sa({curve:r,radius:ai.width});n.push(o)}return n}createMeshes(t){const e=[];for(const o of t)e.push(o.geometry);const n=Je(e),s=new Xe({color:65535});return[new se(n,s)]}render(){this.scene.add(...this.meshes)}}const Hi=class Hi{constructor(t){V(this,"segments");V(this,"closed");V(this,"path");const e=this.setParams(t);this.segments=e.segments,this.closed=e.closed,this.path=this.createPath(e.points)}setParams(t){return{points:t.points,segments:t.segments??Hi.DEFAULT_SEGMENTS,closed:t.closed??Hi.DEFAULT_CLOSED}}createPath(t){const e=new qc;for(const n of t){if(n.length<3||n.length>4)throw new Error(`Unexpected number of control points: ${n.length}. Expected 3 or 4.`);if(n.length===4){const[s,r,o,a]=n,l=new Gc(new O(...s),new O(...r),new O(...o),new O(...a));e.add(l)}else{const[s,r,o]=n,a=new Xc(new O(...s),new O(...r),new O(...o));e.add(a)}}return e}parametricSwept(t,e){const{tangents:n,normals:s,binormals:r}=this.path.computeFrenetFrames(this.segments,this.closed),o=(l,c,h)=>{const u=Math.floor(c*this.segments),f=n[u],_=s[u],x=r[u],S=this.path.getPointAt(c),p=new qt;p.makeBasis(_,x,f),p.setPosition(S);const[d,M,T]=t(l,c),b=new O(d,M,T);b.applyMatrix4(p),h.set(b.x,b.y,b.z)};return new Ar(o,e,this.segments)}};V(Hi,"DEFAULT_CLOSED",!0),V(Hi,"DEFAULT_SEGMENTS",200);let ra=Hi;const be=class be{constructor(t){V(this,"width");V(this,"height");V(this,"radius");V(this,"geometry");const e=this.setParams(t);this.width=e.width,this.height=e.height,this.radius=e.radius;const n=this.createPostCurve(e.width,e.height),s=this.createParametricGeometry(e.radius,n);this.geometry=s}setParams(t){return{width:t.width??be.DEFAULT_WIDTH,height:t.height??be.DEFAULT_HEIGHT,radius:t.radius??be.RADIUS}}createPostCurve(t,e){const n=[[[0,0,0],[0,e*be.K,0],[0,e*be.K,0]],[[0,e*be.K,0],[0,e,0],[0,e,0],[t,e,0]]];return new ra({points:n,segments:be.CURVE_SEGMENTS,closed:!1})}createParametricGeometry(t,e){const n=(r,o)=>{const a=t*Math.cos(2*Math.PI*r),l=t*Math.sin(2*Math.PI*r);return[a,l,0]};return e.parametricSwept(n,be.RADIAL_SEGMENTS)}};V(be,"K",.8),V(be,"RADIUS",.1),V(be,"RADIAL_SEGMENTS",10),V(be,"CURVE_SEGMENTS",50),V(be,"DEFAULT_WIDTH",1),V(be,"DEFAULT_HEIGHT",4);let oa=be;const Vn=class Vn{constructor(t){V(this,"width");V(this,"height");V(this,"depth");V(this,"geometry");const e=this.setParams(t);this.width=e.width,this.height=e.height,this.depth=e.depth,this.geometry=new vn(e.width,e.height,e.depth)}setParams(t){return{width:t.width??Vn.DEFAULT_WIDTH,height:t.height??Vn.DEFAULT_HEIGHT,depth:t.depth??Vn.DEFAULT_DEPTH}}};V(Vn,"DEFAULT_WIDTH",2),V(Vn,"DEFAULT_HEIGHT",.25),V(Vn,"DEFAULT_DEPTH",.5);let aa=Vn;class gc{constructor(t){V(this,"geometry");const e=this.createPostGeometry(t),n=this.createPostLampGeometry(t,e);this.geometry={postGeometry:e.geometry,postLampGeometry:n.geometry}}createPostGeometry(t){return new oa({width:t.postWidth,height:t.postHeight,radius:t.postRadius})}createPostLampGeometry(t,e){const n=new aa({width:t.postLampWidth,height:t.postLampHeight,depth:t.postLampDepth});return n.geometry.translate(e.width+n.width/2,e.height,0),n}applyMatrix(t){for(const e of Object.values(this.geometry))e.applyMatrix4(t)}}class u0{constructor(t){V(this,"scene");V(this,"meshes");V(this,"daylightMeshes");V(this,"nightlightMeshes");V(this,"pointLights");const e=tn.getInstance();this.scene=e.scene;const n=this.createGeometries(t);this.setPointLights(n),this.daylightMeshes=this.createDaylightMeshes(n),this.nightlightMeshes=this.createNightlightMeshes(n),this.meshes=this.daylightMeshes}createGeometries(t){const e=i0,n=[];for(const s of e.inners){const r=new Cn(s.from),o=new Cn(s.to),a=new Cn(e.steps);for(let l=r;l.isLessThanOrEqualTo(o);l=l.plus(a)){const c=new gc({postWidth:e.postWidth,postHeight:e.postHeight,postLampWidth:e.postLampWidth,postLampHeight:e.postLampHeight,postLampDepth:e.postLampDepth}),h=new qt;h.makeRotationY(Math.PI);const u=t.getSweptMatrixFromInside(l.toNumber(),e.distance);c.applyMatrix(u.multiply(h)),n.push(c)}}for(const s of e.outers){const r=new Cn(s.from),o=new Cn(s.to),a=new Cn(e.steps);for(let l=r;l.isLessThanOrEqualTo(o);l=l.plus(a)){const c=new gc({postWidth:e.postWidth,postHeight:e.postHeight,postLampWidth:e.postLampWidth,postLampHeight:e.postLampHeight,postLampDepth:e.postLampDepth}),h=t.getSweptMatrixFromOutside(l.toNumber(),e.distance);c.applyMatrix(h),n.push(c)}}return n}createDaylightMeshes(t){const e=new Xe({color:2236962}),n=new Xe({color:16777215}),s=[],r=[],o=[];for(const{geometry:c}of t)r.push(c.postGeometry),o.push(c.postLampGeometry);const a=new se(Je(r),e),l=new se(Je(o),n);return s.push(a,l),s}createNightlightMeshes(t){const e=new Xe({color:2236962}),n=new Xe({color:16776960,emissive:16776960,emissiveIntensity:1}),s=[],r=[],o=[];for(const{geometry:c}of t)r.push(c.postGeometry),o.push(c.postLampGeometry);const a=new se(Je(r),e),l=new se(Je(o),n);return s.push(a,l),s}setPointLights(t){const e=[];for(const{geometry:n}of t){n.postLampGeometry.computeBoundingBox();const s=new O;n.postLampGeometry.boundingBox&&n.postLampGeometry.boundingBox.getCenter(s)}this.pointLights=e}setDaylightTheme(){this.scene.remove(...this.meshes),this.scene.remove(...this.pointLights),this.meshes=this.daylightMeshes,this.render()}setNightlightTheme(){this.scene.remove(...this.meshes),this.scene.add(...this.pointLights),this.meshes=this.nightlightMeshes,this.render()}render(){this.scene.add(...this.meshes)}}class d0{constructor(t,e){V(this,"scene");V(this,"tunnelsManager");V(this,"rampsManager");V(this,"archsManager");V(this,"streetlightsManager");V(this,"geometry");const n=tn.getInstance();this.scene=n.scene,this.geometry=this.createRoadGeometry(t),this.tunnelsManager=new r0(this.geometry),this.rampsManager=new c0(this.geometry,e),this.archsManager=new h0(this.geometry),this.streetlightsManager=new u0(this.geometry)}createRoadGeometry(t){const e=new ea({controlPoints:ai.controlPoints,width:ai.width,height:ai.height,segments:ai.segments}),n=new Cn(0),s=new Cn(1),r=new Cn(1/1e3);for(let o=n;o.isLessThanOrEqualTo(s);o=o.plus(r)){{const a=new O,l=e.getSweptMatrix(o.toNumber(),$n.Inside,ai.width+3);a.applyMatrix4(l),t.markLot(a.x,a.z)}{const a=new O,l=e.getSweptMatrix(o.toNumber(),$n.Inside);a.applyMatrix4(l),t.markLot(a.x,a.z)}{const a=new O,l=e.getSweptMatrix(o.toNumber(),$n.Outside,ai.width+3);a.applyMatrix4(l),t.markLot(a.x,a.z)}}return e}setDaylightTheme(){this.streetlightsManager.setDaylightTheme()}setNightlightTheme(){this.streetlightsManager.setNightlightTheme()}render(){const t=new Er,e=t.load("/tp_sistemas_graficos/textures/Road007_4K-JPG_Color.jpg"),n=t.load("/tp_sistemas_graficos/textures/Road007_4K-JPG_NormalGL.jpg"),s=t.load("/tp_sistemas_graficos/textures/Road007_4K-JPG_Roughness.jpg");[e,n,s].forEach(l=>{l.wrapS=dn,l.wrapT=dn,l.repeat.set(1,50)});const o=new Xe({map:e,normalMap:n,roughnessMap:s,normalScale:new ut(1,1),roughness:1}),a=new se(this.geometry.geometry,o);this.scene.add(a),this.tunnelsManager.render(),this.rampsManager.render(),this.archsManager.render(),this.streetlightsManager.render()}}class f0{constructor(t,e,n){V(this,"size");V(this,"empty");V(this,"center");this.size=t,this.empty=!0,this.center={x:e,y:0,z:n}}mark(){this.empty=!1}placeGeometry(t,e){if(!this.empty)throw new Error("Cannot place an object, lot is not empty");const n=this.makeTransformMatrix(t,e);for(const s of t)s.applyMatrix4(n);this.mark()}makeTransformMatrix(t,e){const n=new qt,s=new qt,r=new qt,o=this.calculateScale(t,e);return o<1&&s.makeScale(o,1,o),r.makeTranslation(this.center.x,this.center.y,this.center.z),n.multiplyMatrices(r,s),n}calculateScale(t,e){const n=Je(t);n.computeBoundingBox();const s=new O,r=n.boundingBox;r&&r.getSize(s);const o=this.size*e/s.x,a=this.size*e/s.z;return Math.min(o,a)}isEmpty(){return this.empty}}class p0{constructor(t,e){V(this,"scene");V(this,"gridSize");V(this,"gridDivisions");V(this,"lots");V(this,"groundGeometry");if(t%e!=0)throw new Error(`Number of gridDivisions (${e}) must be multiple of gridSize (${t})`);const n=tn.getInstance();this.scene=n.scene,this.gridSize=t,this.gridDivisions=e,this.lots=this.createLots(t,e),this.groundGeometry=new Cs(t,t)}createLots(t,e){const n=[],s=t/e;for(let r=0;r<e;++r){const o=[];for(let a=0;a<e;++a){const{x:l,z:c}=this.indexToPosition(a,r),h=l+s/2,u=c+s/2;o.push(new f0(s,h,u))}n.push(o)}return n}indexToPosition(t,e){const n=this.gridDivisions-1;if(t>n||e>n)throw new Error(`Index out of range [${t}, ${e}]`);const s=this.gridSize/2,r=this.gridSize/this.gridDivisions,o=t*r-s,a=e*r-s;return{x:o,z:a}}positionToIndex(t,e){const n=this.gridSize/2;if(t<-n||t>n||e<-n||e>n)throw new Error(`Position out of range [${t}, ${e}]`);const s=this.gridDivisions-1,r=this.gridDivisions/this.gridSize,o=Math.min(Math.floor((t+n)*r),s);return{i:Math.min(Math.floor((e+n)*r),s),j:o}}getLot(t,e){const{i:n,j:s}=this.positionToIndex(t,e);return this.lots[n][s]}markLot(t,e){this.getLot(t,e).mark()}getEmptyLots(){return this.lots.flat().filter(t=>t.isEmpty())}createMesh(){const t=new Er,e=t.load("/tp_sistemas_graficos/textures/PavingStones126A_4K-JPG_Color.jpg"),n=t.load("/tp_sistemas_graficos/textures/PavingStones126A_4K-JPG_AmbientOcclusion.jpg"),s=t.load("/tp_sistemas_graficos/textures/PavingStones126A_4K-JPG_NormalGL.jpg"),r=t.load("/tp_sistemas_graficos/textures/PavingStones126A_4K-JPG_Roughness.jpg");[e,s,n,r].forEach(c=>{c&&(c.wrapS=dn,c.wrapT=dn,c.repeat.set(2,1))});const a=new Xe({map:e,aoMap:n,normalMap:s,roughnessMap:r,roughness:1,color:16777215}),l=new se(this.groundGeometry,a);return l.rotation.x=-Math.PI/2,l}render(){const t=this.createMesh();this.scene.add(t)}}const Pe=class Pe{constructor(t){V(this,"a");V(this,"b");V(this,"axialSegments");V(this,"axialSegmentsHeight");V(this,"scaleFn");V(this,"torsionFn");V(this,"bodyGeometry");V(this,"capGeometry");V(this,"ellipticalProfile",t=>{const e=this.a*Math.cos(-2*Math.PI*t),n=this.b*Math.sin(-2*Math.PI*t);return[e,n]});const e=this.setParams(t);this.a=e.a,this.b=e.b,this.axialSegments=e.axialSegments,this.axialSegmentsHeight=e.axialSegmentsHeight,this.scaleFn=e.scaleFn,this.torsionFn=e.torsionFn;const n=this.createBodyGeometry(e.radialSegments,e.axialSegments),s=this.createCapGeometry(e.radialSegments,e.axialSegments,e.axialSegmentsHeight);this.bodyGeometry=n,this.capGeometry=s}setParams(t){return{a:t.a??Pe.DEFAULT_A,b:t.b??Pe.DEFAULT_B,axialSegmentsHeight:t.axialSegmentsHeight??Pe.DEFAULT_AXIAL_SEGMENTS_HEIGHT,radialSegments:t.radialSegments??Pe.DEFAULT_RADIAL_SEGMENTS,axialSegments:t.axialSegments??Pe.DEFAULT_AXIAL_SEGMENTS,scaleFn:t.scaleFn??Ba,torsionFn:t.torsionFn??Oa}}createBodyGeometry(t,e){const n=(r,o,a)=>{const[l,c]=this.ellipticalProfile(r),h=this.scaleFn(o),u=this.torsionFn(o),f=h*(l*Math.cos(u)-c*Math.sin(u)),_=h*(l*Math.sin(u)+c*Math.cos(u)),x=o*this.axialSegments*this.axialSegmentsHeight;a.set(f,x,_)};return new Ar(n,t,e)}createCapGeometry(t,e,n){const s=new za({mappingFn:this.ellipticalProfile,segments:t}),r=new Rs(s.shape),o=this.scaleFn(Pe.PARAMETER_END),a=this.torsionFn(Pe.PARAMETER_END);return r.rotateX(-Math.PI/2),r.rotateY(-a),r.scale(o,o,o),r.translate(0,e*n,0),this.setUVsCoordinates(r),r}setUVsCoordinates(t){t.computeBoundingBox();const e=t.boundingBox;if(e){const n=e.max,s=e.min,r=[0-s.x,0-s.z],o=[n.x-s.x,n.z-s.z],a=t.attributes.position.array,l=[];for(let c=0;c<a.length;c+=3){const h=a[c],u=a[c+2];l.push((h+r[0])/o[0],1-(u+r[1])/o[1])}t.setAttribute("uv",new oe(l,2))}}};V(Pe,"PARAMETER_END",1),V(Pe,"DEFAULT_A",1),V(Pe,"DEFAULT_B",1),V(Pe,"DEFAULT_RADIAL_SEGMENTS",10),V(Pe,"DEFAULT_AXIAL_SEGMENTS",5),V(Pe,"DEFAULT_AXIAL_SEGMENTS_HEIGHT",1);let Es=Pe;const Gi=class Gi{constructor(t){V(this,"bodyGeometry");V(this,"capGeometry");const e=this.setParams(t),n=new Es({a:e.radius,b:e.radius,radialSegments:Gi.RADIAL_SEGMENTS,axialSegments:e.axialSegments,axialSegmentsHeight:e.axialSegmentsHeight,scaleFn:e.scaleFn,torsionFn:e.torsionFn});this.bodyGeometry=n.bodyGeometry,this.capGeometry=n.capGeometry}setParams(t){return{radius:t.radius??Gi.DEFAULT_RADIUS,...t}}};V(Gi,"DEFAULT_RADIUS",1),V(Gi,"RADIAL_SEGMENTS",1e3);let la=Gi;const Wn=class Wn{constructor(t){V(this,"bodyGeometry");V(this,"capGeometry");const e=this.setParams(t),n=new Es({a:e.a,b:e.b,radialSegments:Wn.RADIAL_SEGMENTS,axialSegments:e.axialSegments,axialSegmentsHeight:e.axialSegmentsHeight,scaleFn:e.scaleFn,torsionFn:e.torsionFn});this.bodyGeometry=n.bodyGeometry,this.capGeometry=n.capGeometry}setParams(t){return{a:t.a??Wn.DEFAULT_A,b:t.b??Wn.DEFAULT_B,...t}}};V(Wn,"DEFAULT_A",1),V(Wn,"DEFAULT_B",2),V(Wn,"RADIAL_SEGMENTS",1e3);let ca=Wn;const Vi=class Vi{constructor(t){V(this,"bodyGeometry");V(this,"capGeometry");const e=this.setParams(t),n=new Es({a:e.radius,b:e.radius,radialSegments:Vi.RADIAL_SEGMENTS,axialSegments:e.axialSegments,axialSegmentsHeight:e.axialSegmentsHeight,scaleFn:e.scaleFn,torsionFn:e.torsionFn});this.bodyGeometry=n.bodyGeometry,this.capGeometry=n.capGeometry}setParams(t){return{radius:t.radius??Vi.DEFAULT_RADIUS,...t}}};V(Vi,"DEFAULT_RADIUS",1),V(Vi,"RADIAL_SEGMENTS",6);let ha=Vi;const Ae=class Ae{constructor(t){V(this,"width");V(this,"depth");V(this,"axialSegments");V(this,"axialSegmentsHeight");V(this,"scaleFn");V(this,"torsionFn");V(this,"bodyGeometry");V(this,"capGeometry");V(this,"rectangularProfile",t=>{const n=this.width,s=this.depth,r=t*4;return r<1?[-n/2+n*r,s/2]:r<2?[n/2,s/2-s*(r-1)]:r<3?[n/2-n*(r-2),-s/2]:[-n/2,-s/2+s*(r-3)]});const e=this.setParams(t);this.width=e.width,this.depth=e.depth,this.axialSegments=e.axialSegments,this.axialSegmentsHeight=e.axialSegmentsHeight,this.scaleFn=e.scaleFn,this.torsionFn=e.torsionFn;const n=this.createBodyGeometry(Ae.RADIAL_SEGMENTS,e.axialSegments),s=this.createCapGeometry(Ae.RADIAL_SEGMENTS,e.axialSegments,e.axialSegmentsHeight);this.bodyGeometry=n,this.capGeometry=s}setParams(t){return{width:t.width??Ae.DEFAULT_WIDTH,depth:t.depth??Ae.DEFAULT_HEIGHT,axialSegments:t.axialSegments??Ae.DEFAULT_AXIAL_SEGMENTS,axialSegmentsHeight:t.axialSegmentsHeight??Ae.DEFAULT_AXIAL_SEGMENTS_HEIGHT,scaleFn:t.scaleFn??Ba,torsionFn:t.torsionFn??Oa}}createBodyGeometry(t,e){const n=(r,o,a)=>{const[l,c]=this.rectangularProfile(r),h=this.scaleFn(o),u=this.torsionFn(o),f=h*(l*Math.cos(u)-c*Math.sin(u)),_=h*(l*Math.sin(u)+c*Math.cos(u)),x=o*this.axialSegments*this.axialSegmentsHeight;a.set(f,x,_)};return new Ar(n,t,e)}createCapGeometry(t,e,n){const s=new za({mappingFn:this.rectangularProfile,segments:t}),r=new Rs(s.shape),o=this.scaleFn(Ae.PARAMETER_END),a=this.torsionFn(Ae.PARAMETER_END);return r.rotateX(-Math.PI/2),r.rotateY(-a),r.scale(o,o,o),r.translate(0,e*n,0),this.setUVsCoordinates(r),r}setUVsCoordinates(t){t.computeBoundingBox();const e=t.boundingBox;if(e){const n=e.max,s=e.min,r=[0-s.x,0-s.z],o=[n.x-s.x,n.z-s.z],a=t.attributes.position.array,l=[];for(let c=0;c<a.length;c+=3){const h=a[c],u=a[c+2];l.push((h+r[0])/o[0],1-(u+r[1])/o[1])}t.setAttribute("uv",new oe(l,2))}}};V(Ae,"PARAMETER_END",1),V(Ae,"DEFAULT_WIDTH",1),V(Ae,"DEFAULT_HEIGHT",1),V(Ae,"RADIAL_SEGMENTS",4),V(Ae,"DEFAULT_AXIAL_SEGMENTS",5),V(Ae,"DEFAULT_AXIAL_SEGMENTS_HEIGHT",1);let ua=Ae;const m0=[{colorMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_Color.png",emmisionMapPath:null,normalMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_NormalGL.png",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_Roughness.png",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_Metalness.png",color:"0xffffff"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_Color.png",emmisionMapPath:null,normalMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_NormalGL.png",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_Roughness.png",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/daylight_Metalness.png",color:"#4d4d4d"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_Color.jpg",emmisionMapPath:null,normalMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_NormalGL.jpg",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_Roughness.jpg",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_Metalness.jpg",color:"#667a4e"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_Color.jpg",emmisionMapPath:null,normalMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_NormalGL.jpg",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_Roughness.jpg",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/daylight_Metalness.jpg",color:"#f2f2ec"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building03/daylight_Color.png",emmisionMapPath:null,normalMapPath:null,roughnessMapPath:null,metalnessMapPath:null}],g0=[{colorMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Color.png",emmisionMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Emission.png",normalMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_NormalGL.png",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Roughness.png",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Metalness.png",color:"0xffffff"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Color.png",emmisionMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Emission.png",normalMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_NormalGL.png",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Roughness.png",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building01/nightlight_Metalness.png",color:"#4d4d4d"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Color.jpg",emmisionMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Emission.jpg",normalMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_NormalGL.jpg",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Roughness.jpg",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Metalness.jpg",color:"#667a4e"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Color.jpg",emmisionMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Emission.jpg",normalMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_NormalGL.jpg",roughnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Roughness.jpg",metalnessMapPath:"/tp_sistemas_graficos/textures/facades/building02/nightlight_Metalness.jpg",color:"#f2f2ec"},{colorMapPath:"/tp_sistemas_graficos/textures/facades/building03/nightlight_Color.png",emmisionMapPath:null,normalMapPath:null,roughnessMapPath:null,metalnessMapPath:null}];class _0{constructor(t){V(this,"scene");V(this,"meshes");V(this,"buildingTextures");V(this,"buildingsBuffer");const e=tn.getInstance();this.buildingTextures=this.createBuildingTextures(),this.buildingsBuffer=this.createBuildingsGeometry(t),this.meshes=this.createDaylightMeshes(),this.scene=e.scene}createBuildingsGeometry(t){const e=this.shuffle(t.getEmptyLots()),n={bodies:[],caps:[]};for(const s of e){const r=this.generateRandomBuildingParams(),o=this.createBuildingGeometry(r);if(!o)continue;const a=o.bodyGeometry,l=o.capGeometry;s.placeGeometry([a,l],.8),n.bodies.push(a),n.caps.push(l)}return n}generateRandomBuildingParams(){const t=[5,6,7,8,9,10],e=[5,6,7,8,9,10],n=[3,4,5,6],s=[20*.06,20*.07,20*.08,20*.09,20*.1,20*.11,20*.12,20*.13],r=["circular","elliptical","hexagonal","rectangular","none"],o=[ch(1,.5),a0(1,1,4),Ba],a=[l0(.5),o0(2,0),Oa];return{type:this.getRandomElement(r),width:this.getRandomElement(t),depth:this.getRandomElement(e),radius:this.getRandomElement(n),floors:50,floorsHeight:this.getRandomElement(s),scaleFn:this.getRandomElement(o),torsionFn:this.getRandomElement(a)}}getRandomElement(t){const e=Math.floor(Math.random()*t.length);return t[e]}createBuildingGeometry(t){if(t.type==="circular")return new la({radius:t.radius,axialSegments:t.floors,axialSegmentsHeight:t.floorsHeight,scaleFn:t.scaleFn,torsionFn:t.torsionFn});if(t.type==="elliptical")return new ca({a:t.width,b:t.depth,axialSegments:t.floors,axialSegmentsHeight:t.floorsHeight,scaleFn:t.scaleFn,torsionFn:t.torsionFn});if(t.type==="hexagonal")return new ha({radius:t.radius,axialSegments:t.floors,axialSegmentsHeight:t.floorsHeight,scaleFn:t.scaleFn,torsionFn:t.torsionFn});if(t.type==="rectangular")return new ua({width:t.width,depth:t.depth,axialSegments:t.floors,axialSegmentsHeight:t.floorsHeight,scaleFn:t.scaleFn,torsionFn:t.torsionFn})}createBuildingTextures(){const t={daylight:[],nightlight:[]},e=new Er;for(const s of m0){const r=s.colorMapPath?e.load(s.colorMapPath):void 0,o=s.emmisionMapPath?e.load(s.emmisionMapPath):void 0,a=s.normalMapPath?e.load(s.normalMapPath):void 0,l=s.roughnessMapPath?e.load(s.roughnessMapPath):void 0,c=s.roughnessMapPath?e.load(s.roughnessMapPath):void 0,h=new Yt(s.color);t.daylight.push({colorMap:r,emissionMap:o,normalMap:a,roughnessMap:l,metalnessMap:c,color:h})}for(const s of g0){const r=s.colorMapPath?e.load(s.colorMapPath):void 0,o=s.emmisionMapPath?e.load(s.emmisionMapPath):void 0,a=s.normalMapPath?e.load(s.normalMapPath):void 0,l=s.roughnessMapPath?e.load(s.roughnessMapPath):void 0,c=s.roughnessMapPath?e.load(s.roughnessMapPath):void 0,h=new Yt(s.color);t.nightlight.push({colorMap:r,emissionMap:o,normalMap:a,roughnessMap:l,metalnessMap:c,color:h})}return[...t.daylight,...t.nightlight].forEach(s=>{for(const r of Object.values(s))r instanceof Te&&(r.wrapS=dn,r.wrapT=dn,r.repeat.set(2,7))}),t}createDaylightMeshes(){const t=this.buildingTextures.daylight,e=[];for(const c of t){const h=new Xe({map:c.colorMap,normalMap:c.normalMap,roughnessMap:c.roughnessMap,metalnessMap:c.metalnessMap,color:c.color});e.push(h)}const n=[];for(const c of t){const h=new Xe({color:c.color});n.push(h)}const s=t.length,r=[],o=this.subarray(this.buildingsBuffer.bodies,s);for(let c=0;c<s;++c){const h=new se(Je(o[c]),e[c]);r.push(h)}const a=[],l=this.subarray(this.buildingsBuffer.caps,s);for(let c=0;c<s;++c){const h=new se(Je(l[c]),n[c]);a.push(h)}return[...r,...a]}createNightlightMeshes(){const t=this.buildingTextures.nightlight,e=[];for(const c of t){const h=new Xe({map:c.colorMap,emissiveMap:c.emissionMap,normalMap:c.normalMap,roughnessMap:c.roughnessMap,metalnessMap:c.metalnessMap,color:c.color,emissive:c.emissionMap?16777215:void 0,emissiveIntensity:c.emissionMap?.7:void 0});e.push(h)}const n=[];for(const c of t){const h=new Xe({color:c.color});n.push(h)}const s=t.length,r=[],o=this.subarray(this.buildingsBuffer.bodies,s);for(let c=0;c<s;++c){const h=new se(Je(o[c]),e[c]);r.push(h)}const a=[],l=this.subarray(this.buildingsBuffer.caps,s);for(let c=0;c<s;++c){const h=new se(Je(l[c]),n[c]);a.push(h)}return[...r,...a]}subarray(t,e){const n=[],s=Math.ceil(t.length/e);for(let r=0;r<t.length;r+=s)n.push(t.slice(r,r+s));return n}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}setDaylightTheme(){this.clearBuildings(),this.meshes=this.createDaylightMeshes(),this.render()}setNightlightTheme(){this.clearBuildings(),this.meshes=this.createNightlightMeshes(),this.render()}clearBuildings(){this.scene.remove(...this.meshes)}render(){this.scene.add(...this.meshes)}}class v0{constructor(){V(this,"scene");V(this,"directionalLight");V(this,"ambientLight");V(this,"skyTexture");V(this,"daylightTexture");V(this,"nightlightTexture");const t=tn.getInstance();this.scene=t.scene,this.setSkyTextures(),this.setDaylights()}setSkyTextures(){const t=new Id;this.daylightTexture=t.load(["/tp_sistemas_graficos/textures/skies/daylight_px.png","/tp_sistemas_graficos/textures/skies/daylight_nx.png","/tp_sistemas_graficos/textures/skies/daylight_py.png","/tp_sistemas_graficos/textures/skies/daylight_ny.png","/tp_sistemas_graficos/textures/skies/daylight_pz.png","/tp_sistemas_graficos/textures/skies/daylight_nz.png"]),this.nightlightTexture=t.load(["/tp_sistemas_graficos/textures/skies/nightlight_px.png","/tp_sistemas_graficos/textures/skies/nightlight_nx.png","/tp_sistemas_graficos/textures/skies/nightlight_py.png","/tp_sistemas_graficos/textures/skies/nightlight_ny.png","/tp_sistemas_graficos/textures/skies/nightlight_pz.png","/tp_sistemas_graficos/textures/skies/nightlight_nz.png"]),this.skyTexture=this.daylightTexture}setDaylightTheme(){this.clearLights(),this.setDaylights(),this.skyTexture=this.daylightTexture,this.render()}setNightlightTheme(){this.clearLights(),this.setNightlights(),this.skyTexture=this.nightlightTexture,this.render()}clearLights(){this.scene.remove(this.directionalLight),this.scene.remove(this.ambientLight)}setDaylights(){this.directionalLight=new Ll(16777215,1),this.directionalLight.position.set(-100,25,200),this.ambientLight=new Dl(16774112,.4)}setNightlights(){this.directionalLight=new Ll(13421823,1),this.directionalLight.position.set(-100,25,200),this.ambientLight=new Dl(1710656,.1)}render(){this.scene.add(this.directionalLight),this.scene.add(this.ambientLight),this.scene.background=this.skyTexture,this.scene.environment=this.skyTexture}}class x0{constructor(t){V(this,"chassis");V(this,"wheels");V(this,"physicsSimulator");V(this,"scene");V(this,"camera");V(this,"cameraOffset");const e=tn.getInstance();this.scene=e.scene,this.physicsSimulator=t,this.setOutsideCamera(),this.createCamera(),this.createCarModel()}createCarModel(){const t=new vn(2,1,4),e=new Qo({color:16711680}),n=new se(t,e),s=new kd(5);n.add(s);const r=new Nd(16768409,100);r.decay=1,r.penumbra=.5,r.position.set(0,0,-2),r.target.position.set(0,0,-10),n.add(r.target);const o=new zd(r);r.add(o),n.add(r);const a=new Pa(.6,.6,.4,16);a.rotateZ(Math.PI*.5);const l=new Qo({color:0,wireframe:!0}),c=[];for(let h=0;h<4;h++){const u=new se(a,l);n.add(u),u.position.set(10*h,2,20*h),c.push(u)}this.wheels=c,this.chassis=n}updateVehicleTransforms(){const t=this.physicsSimulator.getVehicleTransform();if(this.chassis&&t){const{position:e,quaternion:n}=t;this.chassis.position.set(e.x,e.y,e.z),this.chassis.quaternion.set(n.x,n.y,n.z,n.w),this.wheels.forEach((s,r)=>{const o=this.physicsSimulator.getWheelTransform(r);if(o){const{position:a,quaternion:l}=o;s.position.set(a.x,a.y,a.z),s.quaternion.set(l.x,l.y,l.z,l.w)}})}}createCamera(){const s=window.innerWidth/window.innerHeight,r=new Le(75,s,.1,1e3);this.camera=r}updateCamera(){const t=this.physicsSimulator.getVehicleTransform();if(t){const{position:e,quaternion:n}=t,s=new O(e.x,e.y,e.z),r=new We(n.x,n.y,n.z,n.w),o=this.cameraOffset.clone().applyQuaternion(r).add(s);this.camera.position.copy(o);const a=new O(0,0,-1).applyQuaternion(r).normalize(),l=s.clone().add(a.multiplyScalar(10));this.camera.lookAt(l)}}animate(){this.physicsSimulator.update(),this.updateVehicleTransforms(),this.updateCamera()}render(){this.scene.add(this.chassis)}setInsideCamera(){const t=new O(0,1.5,.3);this.cameraOffset=t}setOutsideCamera(){const t=new O(0,5,10);this.cameraOffset=t}getCamera(){return this.camera}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class M0 extends gn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function da(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const y0={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:da,toHexString:da},bs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},S0={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=bs.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return bs.toHexString(s)}},E0={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=bs.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return bs.toHexString(s)}},b0=[y0,bs,S0,E0];function A0(i){return b0.find(t=>t.match(i))}class T0 extends gn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=A0(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=da(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ho extends gn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class w0 extends gn{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,h,u;const f=5,_=M=>{a=M.clientX,l=c=M.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",S)},x=M=>{if(o){const T=M.clientX-a,b=M.clientY-l;Math.abs(b)>f?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>f&&S()}if(!o){const T=M.clientY-c;u-=T*this._step*this._arrowKeyMultiplier(M),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=M.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",S)},p=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(d,M,T,b,z)=>(d-M)/(T-M)*(z-b)+b,e=d=>{const M=this.$slider.getBoundingClientRect();let T=t(d,M.left,M.right,this._min,this._max);this._snapClampSetValue(T)},n=d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=d=>{e(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),o=!1},h=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,l=d.touches[0].clientY,o=!0):c(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=d=>{if(o){const M=d.touches[0].clientX-a,T=d.touches[0].clientY-l;Math.abs(M)>Math.abs(T)?c(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else d.preventDefault(),e(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},_=this._callOnFinishChange.bind(this),x=400;let S;const p=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const T=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(_,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class C0 extends gn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class R0 extends gn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var P0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function L0(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let _c=!1;class ka{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!_c&&a&&(L0(P0),_c=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new C0(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new w0(this,t,e,n,s,r);case"boolean":return new M0(this,t,e);case"string":return new R0(this,t,e);case"function":return new ho(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new T0(this,t,e,n)}addFolder(t){const e=new ka({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ho||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ho)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Wi=class Wi{constructor(t){V(this,"orbitCamera");V(this,"fpCamera");V(this,"camera");V(this,"renderer");V(this,"scene");V(this,"controls");V(this,"fpControls");V(this,"fpMove",{forward:!1,backward:!1,left:!1,right:!1});V(this,"skyManager");V(this,"buildingsManager");V(this,"roadStructureManager");V(this,"carManager");V(this,"physicsSimulator");V(this,"stats");V(this,"camaraMenu");V(this,"camaraController");V(this,"render",()=>{this.renderer.render(this.scene,this.camera),this.resize(),this.animate(),window.requestAnimationFrame(this.render)});V(this,"resize",()=>{const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)});V(this,"animate",()=>{this.carManager.animate(),this.camera===this.fpCamera?this.updateFirstPersonMovement():this.controls.update(),this.renderer.render(this.scene,this.camera),this.stats.update()});const e=tn.getInstance();this.orbitCamera=this.createCamera(),this.camera=this.orbitCamera,this.controls=this.createOrbitControls(this.orbitCamera,e.renderer),this.renderer=e.renderer,this.scene=e.scene,this.stats=e.stats,this.physicsSimulator=t,this.createFirstPersonCamera(),this.createMenu();const n=new p0(Wi.GRID_SIZE,Wi.LOT_SIZE);this.skyManager=new v0,this.roadStructureManager=new d0(n,this.physicsSimulator),this.buildingsManager=new _0(n),this.carManager=new x0(this.physicsSimulator),n.render(),this.skyManager.render(),this.roadStructureManager.render(),this.buildingsManager.render(),this.carManager.render(),window.addEventListener("keydown",s=>this.handleCameraSwitchKeys(s))}handleCameraSwitchKeys(t){if(!t.repeat)switch(t.key){case"1":this.setCameraInteriorVehiculo();break;case"2":this.setCameraSeguimientoVehiculo();break;case"3":this.setCameraOrbital();break;case"4":this.setCameraPeaton();break}}setCameraInteriorVehiculo(){this.controls.enabled=!1,this.carManager.setInsideCamera(),this.camera=this.carManager.getCamera(),this.physicsSimulator.enableVehicleControls(),this.fpControls.isLocked&&this.fpControls.unlock(),this.camaraMenu.Camara="Interior vehiculo",this.camaraController.updateDisplay()}setCameraSeguimientoVehiculo(){this.controls.enabled=!1,this.carManager.setOutsideCamera(),this.camera=this.carManager.getCamera(),this.physicsSimulator.enableVehicleControls(),this.fpControls.isLocked&&this.fpControls.unlock(),this.camaraMenu.Camara="Seguimiento vehiculo",this.camaraController.updateDisplay()}setCameraOrbital(){this.controls.enabled=!0,this.controls.update(),this.camera=this.orbitCamera,this.physicsSimulator.enableVehicleControls(),this.fpControls.isLocked&&this.fpControls.unlock(),this.camaraMenu.Camara="Orbital",this.camaraController.updateDisplay()}setCameraPeaton(){this.controls.enabled=!1,this.camera=this.fpCamera,this.physicsSimulator.disableVehicleControls(),this.fpControls.lock(),this.camaraMenu.Camara="Peaton",this.camaraController.updateDisplay()}createCamera(){const s=window.innerWidth/window.innerHeight,r=new Le(75,s,.1,1e3);return r.position.set(0,6,6),r.lookAt(0,0,0),r}createOrbitControls(t,e){const n=e.domElement,s=new T_(t,n);return s.target=new O(0,2,0),s.update(),s}createFirstPersonCamera(){const t=window.innerWidth/window.innerHeight;this.fpCamera=new Le(75,t,.1,1e3),this.fpCamera.position.set(0,1.6,0),this.fpControls=new G_(this.fpCamera,this.renderer.domElement),this.scene.add(this.fpControls.getObject()),this.renderer.domElement.addEventListener("click",()=>{this.camera===this.fpCamera&&this.fpControls.lock()}),window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("keyup",e=>this.onKeyUp(e))}onKeyDown(t){switch(t.code){case"KeyW":this.fpMove.forward=!0;break;case"KeyS":this.fpMove.backward=!0;break;case"KeyA":this.fpMove.left=!0;break;case"KeyD":this.fpMove.right=!0;break}}onKeyUp(t){switch(t.code){case"KeyW":this.fpMove.forward=!1;break;case"KeyS":this.fpMove.backward=!1;break;case"KeyA":this.fpMove.left=!1;break;case"KeyD":this.fpMove.right=!1;break}}updateFirstPersonMovement(){const n=new O;this.fpMove.forward&&(n.z+=1),this.fpMove.backward&&(n.z-=1),this.fpMove.left&&(n.x-=1),this.fpMove.right&&(n.x+=1),n.normalize().multiplyScalar(5*.016),this.fpControls.moveRight(n.x),this.fpControls.moveForward(n.z)}createMenu(){const t=new ka,e="Modo",n={[e]:"Día"},s=["Día","Noche"];t.add(n,e,s).onChange(a=>{a==="Día"?(this.skyManager.setDaylightTheme(),this.buildingsManager.setDaylightTheme(),this.roadStructureManager.setDaylightTheme()):(this.skyManager.setNightlightTheme(),this.buildingsManager.setNightlightTheme(),this.roadStructureManager.setNightlightTheme())});const r="Camara";this.camaraMenu={[r]:"Orbital"};const o=["Interior vehiculo","Seguimiento vehiculo","Orbital","Peaton"];this.camaraController=t.add(this.camaraMenu,r,o),this.camaraController.onChange(a=>{a==="Interior vehiculo"?this.setCameraInteriorVehiculo():a==="Seguimiento vehiculo"?this.setCameraSeguimientoVehiculo():a==="Orbital"?this.setCameraOrbital():a==="Peaton"&&this.setCameraPeaton()})}};V(Wi,"GRID_SIZE",300),V(Wi,"LOT_SIZE",10);let fa=Wi;const D0={wheelSeparation:2.5,axesSeparation:3,wheelRadius:.6,wheelWidth:.4,suspensionRestLength:.8,initialPosition:new O(0,2,0),initialYRotation:0,steeringReaction:.1,maxSteeringAngle:Math.PI/16,mass:10,accelerateForce:{min:-15,max:40,step:2},brakeForce:{min:0,max:1,step:.05}},I0={width:1e3,height:1,length:1e3};class U0{constructor(t={},e={}){V(this,"params",{});V(this,"initComplete",!1);V(this,"physics",null);V(this,"vehicleController",null);V(this,"chassis",null);V(this,"wheels",[]);V(this,"wheelPositions",[]);V(this,"vehicleState",{forward:0,right:0,brake:0,reset:!1,accelerateForce:0,brakeForce:0});V(this,"_keydownHandler",t=>{(t.key==="w"||t.key==="ArrowUp")&&(this.vehicleState.forward=1),(t.key==="s"||t.key==="ArrowDown")&&(this.vehicleState.forward=-1),(t.key==="a"||t.key==="ArrowLeft")&&(this.vehicleState.right=1),(t.key==="d"||t.key==="ArrowRight")&&(this.vehicleState.right=-1),t.key==="r"&&(this.vehicleState.reset=!0),t.key===" "&&(this.vehicleState.brake=1)});V(this,"_keyupHandler",t=>{(t.key==="w"||t.key==="s"||t.key==="ArrowUp"||t.key==="ArrowDown")&&(this.vehicleState.forward=0),(t.key==="a"||t.key==="d"||t.key==="ArrowLeft"||t.key==="ArrowRight")&&(this.vehicleState.right=0),t.key==="r"&&(this.vehicleState.reset=!1),t.key===" "&&(this.vehicleState.brake=0)});this.params.vehicle=Object.assign(D0,t),this.params.ground=Object.assign(I0,e);const n=this.params.vehicle.wheelSeparation,s=this.params.vehicle.axesSeparation;this.wheelPositions=[{x:-n/2,y:0,z:-s/2},{x:n/2,y:0,z:-s/2},{x:-n/2,y:0,z:s/2},{x:n/2,y:0,z:s/2}]}async initSimulation(){this.physics=await Q_(),this.physics.world.gravity.set(0,-9.81,0);const t=new Ta({color:16777215});let e=this.params.ground,n=e==null?void 0:e.width,s=e==null?void 0:e.height,r=e==null?void 0:e.length;if(!n||!s||!r)throw Error("Invalid ground parameters");let o;o=new vn(e.width,e.height,e.length);const a=new se(o,t);a.userData.physics={mass:0},this.physics.addMesh(a),o=new vn(2,.1,4);const l=new se(o,t);l.position.copy(this.params.vehicle.initialPosition),l.rotation.y=this.params.vehicle.initialYRotation,this.physics.addMesh(l,this.params.vehicle.mass,.8),this.chassis=l.userData.physics.body,this.vehicleController=this.physics.world.createVehicleController(this.chassis),this.addWheels(),this.setupEventListeners(),this.initComplete=!0}addRigidBody(t,e=0,n=.8){this.physics.addMesh(t,e,n)}addWheels(){const{wheelRadius:t,suspensionRestLength:e}=this.params.vehicle;this.wheelPositions.forEach((n,s)=>{const r={x:0,y:-1,z:0},o={x:-1,y:0,z:0};this.vehicleController.addWheel(n,r,o,e,t),this.vehicleController.setWheelSuspensionStiffness(s,24),this.vehicleController.setWheelFrictionSlip(s,1e3),this.vehicleController.setWheelSteering(s,n.z<0)})}resetVehicle(){this.chassis.setTranslation(this.params.vehicle.initialPosition,!0);const t=this.params.vehicle.initialYRotation,e=new O(0,1,0),n=new We;n.setFromAxisAngle(e,t),this.chassis.setRotation(n,!0),this.chassis.setLinvel(new this.physics.RAPIER.Vector3(0,0,0),!0),this.chassis.setAngvel(new this.physics.RAPIER.Vector3(0,0,0),!0),this.vehicleState.accelerateForce=0,this.vehicleState.brakeForce=0}updateCarControl(){if(!this.initComplete)return;if(this.vehicleState.reset){this.resetVehicle();return}const t=this.params.vehicle;let e=0;this.vehicleState.forward>0?(e=this.vehicleState.accelerateForce+t.accelerateForce.step,e>t.accelerateForce.max&&(e=t.accelerateForce.max)):this.vehicleState.forward<0&&(e=this.vehicleState.accelerateForce-t.accelerateForce.step,e<t.accelerateForce.min&&(e=t.accelerateForce.min)),this.vehicleState.accelerateForce=e;let n=0;this.vehicleState.brake>0&&(n=this.vehicleState.brakeForce+t.brakeForce.step,n>t.brakeForce.max&&(n=t.brakeForce.max)),this.vehicleState.brakeForce=n;const s=-e;this.vehicleController.setWheelEngineForce(0,s),this.vehicleController.setWheelEngineForce(1,s);const r=this.vehicleController.wheelSteering(0),o=this.vehicleState.right,a=this.params.vehicle.maxSteeringAngle,l=this.params.vehicle.steeringReaction,c=Rc.lerp(r,a*o,l);this.vehicleController.setWheelSteering(0,c),this.vehicleController.setWheelSteering(1,c);const h=this.vehicleState.brake*n;this.vehicleController.setWheelBrake(0,h),this.vehicleController.setWheelBrake(1,h),this.vehicleController.setWheelBrake(2,h),this.vehicleController.setWheelBrake(3,h)}enableVehicleControls(){this.setupEventListeners()}disableVehicleControls(){this.removeEventListeners()}setupEventListeners(){window.addEventListener("keydown",this._keydownHandler),window.addEventListener("keyup",this._keyupHandler)}removeEventListeners(){window.removeEventListener("keydown",this._keydownHandler),window.removeEventListener("keyup",this._keyupHandler)}getVehicleTransform(){return this.initComplete?{position:this.chassis.translation(),quaternion:this.chassis.rotation()}:null}getWheelTransform(t){if(!this.vehicleController)return;const e=new We,n=new We,s=new O(0,1,0),r=this.vehicleController.wheelAxleCs(t),o=this.vehicleController.wheelChassisConnectionPointCs(t).y,a=this.vehicleController.wheelSuspensionLength(t),l=this.vehicleController.wheelSteering(t),c=this.vehicleController.wheelRotation(t);let h=new O;h.x=this.wheelPositions[t].x,h.y=o-a,h.z=this.wheelPositions[t].z,e.setFromAxisAngle(s,l),n.setFromAxisAngle(r,c);let u=new We(0,0,0,1).multiplyQuaternions(e,n);return{position:h,quaternion:u}}update(t=1/60){this.vehicleController&&(this.updateCarControl(),this.vehicleController.updateVehicle(t))}}const N0=async()=>{const i=new U0;await i.initSimulation(),new fa(i).render()};N0();
