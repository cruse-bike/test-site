import{y as u,s as h}from"./scheduler.iX6lbBTW.js";const i=[];function q(e,r){return{subscribe:p(e,r).subscribe}}function p(e,r=u){let n;const o=new Set;function b(t){if(h(e,t)&&(e=t,n)){const c=!i.length;for(const s of o)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return o.add(s),o.size===1&&(n=r(b,a)||u),t(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1sy46oj)==null?void 0:f.base)??"/cruse";var l;const y=((l=globalThis.__sveltekit_1sy46oj)==null?void 0:l.assets)??d;export{y as a,d as b,q as r,p as w};
