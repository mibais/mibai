import{i as x,j as A}from"./shop-DaZxHBIe.js";import{u as B}from"./index-E9vVtGBC.js";import{b7 as N,aF as h,S as q,aw as D,K as M,N as O,F as S,am as T}from"./antd-ClWK_BPx.js";import{d as U,f as m,w as V,a5 as _,a3 as $,u as t,ac as f,ad as o,k as a,G as i,af as j,H as E,F as G}from"./vue-DIvP5FMT.js";const J=U({__name:"coupon",props:{shopId:{type:Number,require:!0}},emits:["applyCoupon"],setup(C,{emit:v}){const d=C,r=v,u=m({coupon:""}),p=m(!1),n=m({couponCode:"",discountedPrice:-1});async function y(){const{data:l}=await x(u.value.coupon,d.shopId);n.value={couponCode:u.value.coupon,discountedPrice:l};const e=B();r("applyCoupon",n.value),e.success("优惠码使用成功 😄",3),p.value=!1}async function k(){const{data:l}=await A(u.value.coupon,d.shopId);n.value.discountedPrice=l,r("applyCoupon",n.value)}function g(){u.value.coupon="",n.value.discountedPrice=-1,r("applyCoupon",n.value)}return V(()=>d.shopId,()=>{n.value.couponCode&&k()}),(l,e)=>{const c=q,w=D,F=M,I=O,P=S,b=T;return _(),$(G,null,[t(n).discountedPrice<0?(_(),f(c,{key:0,onClick:e[0]||(e[0]=s=>p.value=!0)},{icon:o(()=>[a(t(N))]),default:o(()=>[i(" 使用优惠码 ")]),_:1})):(_(),f(w,{key:1,title:"确定要取消使用优惠码？",onConfirm:g},{default:o(()=>[a(c,{type:"dashed"},{icon:o(()=>[a(t(h))]),default:o(()=>[i(" "+j(t(n).couponCode),1)]),_:1})]),_:1})),a(b,{open:t(p),"onUpdate:open":e[3]||(e[3]=s=>E(p)?p.value=s:null),closable:!1,title:"使用优惠码",width:400},{footer:o(()=>[a(c,{type:"primary",onClick:y},{default:o(()=>[i("使用")]),_:1}),a(c,{onClick:e[1]||(e[1]=s=>p.value=!1)},{default:o(()=>[i("取消")]),_:1})]),default:o(()=>[a(P,{model:t(u)},{default:o(()=>[a(I,{name:"coupon",rules:[{required:!0,message:"请输入优惠码"}]},{default:o(()=>[a(F,{value:t(u).coupon,"onUpdate:value":e[2]||(e[2]=s=>t(u).coupon=s)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}});export{J as _};
