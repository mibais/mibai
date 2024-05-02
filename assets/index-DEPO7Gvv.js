import{u as M,_ as U}from"./index-BfKtmSYb.js";import{a0 as j,a1 as R,K as V,W as D,aN as O,ah as G}from"./antd-BiDZImxE.js";import{d as W,f as v,w as k,a5 as g,ac as h,ad as n,U as w,k as f,u,a3 as q,F as z,al as A,G as C,af as I,ag as H,n as N}from"./vue-CP9fVXMC.js";const J=W({__name:"index",props:{length:{type:Number,default:6},warningMessage:{type:String,default:"请补全验证码"},countdown:{type:Number,default:60},resend:{type:Boolean,default:!1},verifyLoading:{type:Boolean,default:!0},immediate:{type:Number,default:0},sendText:{type:String,default:"提交"}},emits:["handleSubmit","handleResend"],setup(p,{emit:S}){const a=p,y=S,o=v({}),l=v(!1),B=M();let _=null;const i=v(0);k(()=>a.length,()=>{for(let e=0;e<a.length;e++)o.value[`code${e}`]=""},{immediate:!0});async function $(){const e=Object.values(o.value).join("");if(e.length!==a.length){B.warning(a.warningMessage);return}y("handleSubmit",e)}function x(e,t){var r;const s=(r=t.target)==null?void 0:r.value;if(o.value[`code${e}`]=s,s&&e<a.length-1){const c=t.target.nextElementSibling;c&&N(()=>{c.focus()})}}function T(e,t){if(t.key==="Backspace"&&!t.target.value&&e>0){const s=t.target.previousElementSibling;s&&N(()=>{s.focus()})}}function b(e){const t=e;i.value=t,_||(_=setInterval(()=>{i.value>0&&i.value<=t?i.value--:(l.value=!1,clearInterval(_),_=null)},1e3))}function E(){if(!l.value){l.value=!0;try{y("handleResend"),b(a.countdown)}catch{l.value=!1}}}return k(()=>a.immediate,e=>{a.resend&&e>0&&(l.value=!0,b(a.immediate))},{immediate:!0}),(e,t)=>{const s=j,r=R,c=V,F=D,K=O,L=G;return g(),h(L,{hoverable:""},{title:n(()=>[w(e.$slots,"title",{},void 0,!0)]),default:n(()=>[f(K,{vertical:"",justify:"center",align:"center",gap:"small"},{default:n(()=>[w(e.$slots,"head",{},void 0,!0),f(F,{"mt-5":"","label-align":"right",model:u(o),onFinish:$},{default:n(()=>[f(r,null,{default:n(()=>[(g(!0),q(z,null,A(u(o),(P,Q,d)=>(g(),h(s,{key:d,value:u(o)[`code${d}`],"onUpdate:value":m=>u(o)[`code${d}`]=m,controls:!1,maxlength:1,class:"verification-input",onInput:m=>x(d,m),onKeydown:m=>T(d,m)},null,8,["value","onUpdate:value","onInput","onKeydown"]))),128))]),_:1}),f(r,null,{default:n(()=>[f(c,{loading:p.verifyLoading,"mb-3":"",block:"","html-type":"submit",type:"primary"},{default:n(()=>[C(I(p.sendText),1)]),_:1},8,["loading"]),p.resend?(g(),h(c,{key:0,block:"",disabled:u(l),type:"dashed",onClick:E},{default:n(()=>[C(I(u(l)?`${u(i)}秒后重发`:"发送"),1)]),_:1},8,["disabled"])):H("",!0)]),_:1})]),_:1},8,["model"])]),_:3})]),_:3})}}}),ee=U(J,[["__scopeId","data-v-e2da1db4"]]);export{ee as v};
