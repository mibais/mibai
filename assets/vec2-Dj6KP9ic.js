var x=1e-6,l=typeof Float32Array<"u"?Float32Array:Array,z=Math.random;Math.hypot||(Math.hypot=function(){for(var r=0,n=arguments.length;n--;)r+=arguments[n]*arguments[n];return Math.sqrt(r)});function p(){var r=new l(3);return l!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r}function _(r){var n=new l(3);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n}function $(r){var n=r[0],a=r[1],t=r[2];return Math.hypot(n,a,t)}function D(r,n,a){var t=new l(3);return t[0]=r,t[1]=n,t[2]=a,t}function O(r,n){return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function P(r,n,a,t){return r[0]=n,r[1]=a,r[2]=t,r}function S(r,n,a){return r[0]=n[0]+a[0],r[1]=n[1]+a[1],r[2]=n[2]+a[2],r}function q(r,n,a){return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r[2]=n[2]-a[2],r}function d(r,n,a){return r[0]=n[0]*a[0],r[1]=n[1]*a[1],r[2]=n[2]*a[2],r}function w(r,n,a){return r[0]=n[0]/a[0],r[1]=n[1]/a[1],r[2]=n[2]/a[2],r}function j(r,n){return r[0]=Math.ceil(n[0]),r[1]=Math.ceil(n[1]),r[2]=Math.ceil(n[2]),r}function L(r,n){return r[0]=Math.floor(n[0]),r[1]=Math.floor(n[1]),r[2]=Math.floor(n[2]),r}function R(r,n,a){return r[0]=Math.min(n[0],a[0]),r[1]=Math.min(n[1],a[1]),r[2]=Math.min(n[2],a[2]),r}function V(r,n,a){return r[0]=Math.max(n[0],a[0]),r[1]=Math.max(n[1],a[1]),r[2]=Math.max(n[2],a[2]),r}function Y(r,n){return r[0]=Math.round(n[0]),r[1]=Math.round(n[1]),r[2]=Math.round(n[2]),r}function I(r,n,a){return r[0]=n[0]*a,r[1]=n[1]*a,r[2]=n[2]*a,r}function N(r,n,a,t){return r[0]=n[0]+a[0]*t,r[1]=n[1]+a[1]*t,r[2]=n[2]+a[2]*t,r}function A(r,n){var a=n[0]-r[0],t=n[1]-r[1],e=n[2]-r[2];return Math.hypot(a,t,e)}function E(r,n){var a=n[0]-r[0],t=n[1]-r[1],e=n[2]-r[2];return a*a+t*t+e*e}function F(r){var n=r[0],a=r[1],t=r[2];return n*n+a*a+t*t}function k(r,n){return r[0]=-n[0],r[1]=-n[1],r[2]=-n[2],r}function B(r,n){return r[0]=1/n[0],r[1]=1/n[1],r[2]=1/n[2],r}function C(r,n){var a=n[0],t=n[1],e=n[2],i=a*a+t*t+e*e;return i>0&&(i=1/Math.sqrt(i)),r[0]=n[0]*i,r[1]=n[1]*i,r[2]=n[2]*i,r}function T(r,n){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]}function Q(r,n,a){var t=n[0],e=n[1],i=n[2],s=a[0],c=a[1],v=a[2];return r[0]=e*v-i*c,r[1]=i*s-t*v,r[2]=t*c-e*s,r}function X(r,n,a,t){var e=n[0],i=n[1],s=n[2];return r[0]=e+t*(a[0]-e),r[1]=i+t*(a[1]-i),r[2]=s+t*(a[2]-s),r}function Z(r,n,a,t,e,i){var s=i*i,c=s*(2*i-3)+1,v=s*(i-2)+i,h=s*(i-1),f=s*(3-2*i);return r[0]=n[0]*c+a[0]*v+t[0]*h+e[0]*f,r[1]=n[1]*c+a[1]*v+t[1]*h+e[1]*f,r[2]=n[2]*c+a[2]*v+t[2]*h+e[2]*f,r}function G(r,n,a,t,e,i){var s=1-i,c=s*s,v=i*i,h=c*s,f=3*i*c,M=3*v*s,u=v*i;return r[0]=n[0]*h+a[0]*f+t[0]*M+e[0]*u,r[1]=n[1]*h+a[1]*f+t[1]*M+e[1]*u,r[2]=n[2]*h+a[2]*f+t[2]*M+e[2]*u,r}function H(r,n){n=n||1;var a=z()*2*Math.PI,t=z()*2-1,e=Math.sqrt(1-t*t)*n;return r[0]=Math.cos(a)*e,r[1]=Math.sin(a)*e,r[2]=t*n,r}function J(r,n,a){var t=n[0],e=n[1],i=n[2],s=a[3]*t+a[7]*e+a[11]*i+a[15];return s=s||1,r[0]=(a[0]*t+a[4]*e+a[8]*i+a[12])/s,r[1]=(a[1]*t+a[5]*e+a[9]*i+a[13])/s,r[2]=(a[2]*t+a[6]*e+a[10]*i+a[14])/s,r}function K(r,n,a){var t=n[0],e=n[1],i=n[2];return r[0]=t*a[0]+e*a[3]+i*a[6],r[1]=t*a[1]+e*a[4]+i*a[7],r[2]=t*a[2]+e*a[5]+i*a[8],r}function U(r,n,a){var t=a[0],e=a[1],i=a[2],s=a[3],c=n[0],v=n[1],h=n[2],f=e*h-i*v,M=i*c-t*h,u=t*v-e*c,o=e*u-i*M,g=i*f-t*u,m=t*M-e*f,y=s*2;return f*=y,M*=y,u*=y,o*=2,g*=2,m*=2,r[0]=c+f+o,r[1]=v+M+g,r[2]=h+u+m,r}function W(r,n,a,t){var e=[],i=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],i[0]=e[0],i[1]=e[1]*Math.cos(t)-e[2]*Math.sin(t),i[2]=e[1]*Math.sin(t)+e[2]*Math.cos(t),r[0]=i[0]+a[0],r[1]=i[1]+a[1],r[2]=i[2]+a[2],r}function b(r,n,a,t){var e=[],i=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],i[0]=e[2]*Math.sin(t)+e[0]*Math.cos(t),i[1]=e[1],i[2]=e[2]*Math.cos(t)-e[0]*Math.sin(t),r[0]=i[0]+a[0],r[1]=i[1]+a[1],r[2]=i[2]+a[2],r}function rr(r,n,a,t){var e=[],i=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],i[0]=e[0]*Math.cos(t)-e[1]*Math.sin(t),i[1]=e[0]*Math.sin(t)+e[1]*Math.cos(t),i[2]=e[2],r[0]=i[0]+a[0],r[1]=i[1]+a[1],r[2]=i[2]+a[2],r}function nr(r,n){var a=r[0],t=r[1],e=r[2],i=n[0],s=n[1],c=n[2],v=Math.sqrt(a*a+t*t+e*e),h=Math.sqrt(i*i+s*s+c*c),f=v*h,M=f&&T(r,n)/f;return Math.acos(Math.min(Math.max(M,-1),1))}function ar(r){return r[0]=0,r[1]=0,r[2]=0,r}function tr(r){return"vec3("+r[0]+", "+r[1]+", "+r[2]+")"}function er(r,n){return r[0]===n[0]&&r[1]===n[1]&&r[2]===n[2]}function ir(r,n){var a=r[0],t=r[1],e=r[2],i=n[0],s=n[1],c=n[2];return Math.abs(a-i)<=x*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(t-s)<=x*Math.max(1,Math.abs(t),Math.abs(s))&&Math.abs(e-c)<=x*Math.max(1,Math.abs(e),Math.abs(c))}var cr=q,sr=d,vr=w,fr=A,hr=E,Mr=$,ur=F,lr=function(){var r=p();return function(n,a,t,e,i,s){var c,v;for(a||(a=3),t||(t=0),e?v=Math.min(e*a+t,n.length):v=n.length,c=t;c<v;c+=a)r[0]=n[c],r[1]=n[c+1],r[2]=n[c+2],i(r,r,s),n[c]=r[0],n[c+1]=r[1],n[c+2]=r[2];return n}}();const or=Object.freeze(Object.defineProperty({__proto__:null,add:S,angle:nr,bezier:G,ceil:j,clone:_,copy:O,create:p,cross:Q,dist:fr,distance:A,div:vr,divide:w,dot:T,equals:ir,exactEquals:er,floor:L,forEach:lr,fromValues:D,hermite:Z,inverse:B,len:Mr,length:$,lerp:X,max:V,min:R,mul:sr,multiply:d,negate:k,normalize:C,random:H,rotateX:W,rotateY:b,rotateZ:rr,round:Y,scale:I,scaleAndAdd:N,set:P,sqrDist:hr,sqrLen:ur,squaredDistance:E,squaredLength:F,str:tr,sub:cr,subtract:q,transformMat3:K,transformMat4:J,transformQuat:U,zero:ar},Symbol.toStringTag,{value:"Module"}));function yr(){var r=new l(2);return l!=Float32Array&&(r[0]=0,r[1]=0),r}function gr(r,n){var a=new l(2);return a[0]=r,a[1]=n,a}function mr(r,n){return r[0]=n[0],r[1]=n[1],r}function zr(r,n,a){return r[0]=n,r[1]=a,r}function pr(r,n,a){return r[0]=n[0]+a[0],r[1]=n[1]+a[1],r}function xr(r,n,a){return r[0]=n[0]-a[0],r[1]=n[1]-a[1],r}function $r(r,n,a){return r[0]=Math.min(n[0],a[0]),r[1]=Math.min(n[1],a[1]),r}function qr(r,n,a){return r[0]=Math.max(n[0],a[0]),r[1]=Math.max(n[1],a[1]),r}function dr(r,n,a){return r[0]=n[0]*a,r[1]=n[1]*a,r}function wr(r,n){var a=n[0]-r[0],t=n[1]-r[1];return Math.hypot(a,t)}function Ar(r){var n=r[0],a=r[1];return Math.hypot(n,a)}function Er(r,n){return r[0]=-n[0],r[1]=-n[1],r}function Fr(r,n){var a=n[0],t=n[1],e=a*a+t*t;return e>0&&(e=1/Math.sqrt(e)),r[0]=n[0]*e,r[1]=n[1]*e,r}function Tr(r,n){return r[0]*n[0]+r[1]*n[1]}function _r(r,n,a,t){var e=n[0],i=n[1];return r[0]=e+t*(a[0]-e),r[1]=i+t*(a[1]-i),r}function Dr(r,n,a){var t=n[0],e=n[1];return r[0]=a[0]*t+a[3]*e+a[6],r[1]=a[1]*t+a[4]*e+a[7],r}function Or(r,n){var a=r[0],t=r[1],e=n[0],i=n[1],s=Math.sqrt(a*a+t*t)*Math.sqrt(e*e+i*i),c=s&&(a*e+t*i)/s;return Math.acos(Math.min(Math.max(c,-1),1))}function Pr(r,n){return r[0]===n[0]&&r[1]===n[1]}var Sr=xr;(function(){var r=yr();return function(n,a,t,e,i,s){var c,v;for(a||(a=2),t||(t=0),e?v=Math.min(e*a+t,n.length):v=n.length,c=t;c<v;c+=a)r[0]=n[c],r[1]=n[c+1],i(r,r,s),n[c]=r[0],n[c+1]=r[1];return n}})();export{l as A,C as B,nr as C,J as D,x as E,Or as a,qr as b,dr as c,Tr as d,Pr as e,wr as f,pr as g,xr as h,Dr as i,k as j,_r as k,Ar as l,$r as m,Fr as n,Er as o,D as p,yr as q,mr as r,Sr as s,K as t,gr as u,zr as v,p as w,or as x,cr as y,Q as z};
