"use strict";var p=function(r,v){return function(){try{return v||r((v={exports:{}}).exports,v),v.exports}catch(i){throw (v=0, i)}};};var l=p(function(C,k){
function j(r,v,i,u,b){var s,t,y,f,q,a,e,c,n,o;if(s=i.data,t=i.accessors[0],r===1||u===0)return e=t(s,b),e===e&&r-v>0?0:NaN;for(f=b,o=0;o<r&&(e=t(s,f),e!==e);o++)f+=u;if(o===r)return NaN;for(f+=u,y=e,a=0,o+=1,n=1,o;o<r;o++)e=t(s,f),e===e&&(n+=1,y+=e,c=n*e-y,a+=1/(n*(n-1))*c*c),f+=u;return q=n-v,q<=0?NaN:a/q}k.exports=j
});var x=p(function(D,m){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=l();function R(r,v,i,u,b){var s,t,y,f,q,a,e,c,n;if(r<=0)return NaN;if(q=O(i),q.accessorProtocol)return P(r,v,q,u,b);if(r===1||u===0)return a=i[b],a===a&&r-v>0?0:NaN;for(t=b,n=0;n<r&&(a=i[t],a!==a);n++)t+=u;if(n===r)return NaN;for(t+=u,s=a,f=0,n+=1,c=1,n;n<r;n++)a=i[t],a===a&&(c+=1,s+=a,e=c*a-s,f+=1/(c*(c-1))*e*e),t+=u;return y=c-v,y<=0?NaN:f/y}m.exports=R
});var S=p(function(E,N){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=x();function w(r,v,i,u){return h(r,v,i,u,d(r,u))}N.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=S(),A=x();z(g,"ndarray",A);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
