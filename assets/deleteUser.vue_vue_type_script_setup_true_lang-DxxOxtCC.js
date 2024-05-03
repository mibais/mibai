import{i as E,j as G}from"./index-DL2icI96.js";import{d as S,aq as x,f as P,a5 as U,a3 as $,k as e,ad as t,G as o,u as s,H as C,F,a8 as L}from"./vue-CP9fVXMC.js";import{u as M}from"./multi-tab-BVn9P3Rl.js";import{b as T,u as B,a as N}from"./index-CRpV0laT.js";import{E as R,S as q,a1 as z,a2 as O,O as j,N as D,m as V,F as H,am as h,aF as I,az as J,ao as K,aG as Q}from"./antd-Do4zFXs5.js";const te=S({__name:"updatePasswd",setup(A){const y=x(),u=P(!1),g=M(),c=T(),_=B(),l=P({newPasswd:"",oldPasswd:""});async function d(){const{data:n}=await E(l.value);if(n){const a=N();try{await a.logout()}finally{_.success("密码修改成功，请重新登陆...",2),y.push({path:"/login"}).then(()=>{g.clear(),c.clear()})}}}return(n,a)=>{const p=q,w=z,v=O,f=j,m=D,b=V,k=H,i=h;return U(),$(F,null,[e(v,null,{extra:t(()=>[e(p,{type:"primary",onClick:a[0]||(a[0]=r=>{u.value=!0})},{default:t(()=>[o(" 修改密码 ")]),_:1})]),default:t(()=>[e(w,{description:"设置一个高强度密码，以防止他人未经授权访问您的账户"},{title:t(()=>[o(" 密码 ")]),avatar:t(()=>[e(s(R),{style:{fontSize:"2.6em"}})]),_:1})]),_:1}),e(i,{open:s(u),"onUpdate:open":a[4]||(a[4]=r=>C(u)?u.value=r:null),closable:!1,"mask-closable":!1,footer:null},{default:t(()=>[e(k,{model:s(l),name:"basic","label-col":{span:8},"wrapper-col":{span:16},onFinish:d},{default:t(()=>[e(m,{label:"输入旧密码",name:"oldPasswd","has-feedback":!0,rules:[{required:!0,message:"请输入旧密码"}]},{default:t(()=>[e(f,{value:s(l).oldPasswd,"onUpdate:value":a[1]||(a[1]=r=>s(l).oldPasswd=r)},null,8,["value"])]),_:1}),e(m,{label:"输入新密码",name:"newPasswd","has-feedback":!0,rules:[{required:!0,message:"请输入新密码"},{min:8,max:64,message:"密码长度在8-64之间"}]},{default:t(()=>[e(f,{value:s(l).newPasswd,"onUpdate:value":a[2]||(a[2]=r=>s(l).newPasswd=r)},null,8,["value"])]),_:1}),e(m,{"wrapper-col":{offset:8,span:16}},{default:t(()=>[e(b,null,{default:t(()=>[e(p,{type:"primary","html-type":"submit"},{default:t(()=>[o(" 修改 ")]),_:1}),e(p,{type:"default",onClick:a[3]||(a[3]=r=>u.value=!1)},{default:t(()=>[o(" 取消 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}}),ae=S({__name:"deleteUser",emits:["close"],setup(A){const y=x(),u=M(),g=T(),c=B(),_=P(!1);async function l(){const{data:d}=await G();if(d){const n=N();try{await n.logout()}finally{c.success("账号注销成功，再见 👋...",2),y.push({path:"/login"}).then(()=>{u.clear(),g.clear()})}}else c.error("注销失效，请稍后再试")}return(d,n)=>{const a=q,p=z,w=O,v=J,f=K,m=Q,b=V,k=h;return U(),$(F,null,[e(w,null,{extra:t(()=>[e(a,{type:"primary",danger:"",onClick:n[0]||(n[0]=i=>_.value=!0)},{default:t(()=>[o(" 删除账户 ")]),_:1})]),default:t(()=>[e(p,{description:"这将删除你所有的账号数据，请谨慎操作！"},{title:t(()=>[o(" 注销 ")]),avatar:t(()=>[e(s(I),{style:{fontSize:"2.6em"}})]),_:1})]),_:1}),e(k,{open:s(_),"onUpdate:open":n[2]||(n[2]=i=>C(_)?_.value=i:null),closable:!1,"mask-closable":!1,footer:null},{default:t(()=>[L("div",null,[e(m,null,{default:t(()=>[e(v,{level:4},{default:t(()=>[o(" 确定注销吗？ ")]),_:1}),e(f,null,{default:t(()=>[o(" 注销操作无法恢复，你将丢失所有数据，请谨慎操作！ ")]),_:1})]),_:1}),e(b,{align:"center"},{default:t(()=>[e(a,{danger:"",type:"primary",onClick:l},{default:t(()=>[o(" 注销 ")]),_:1}),e(a,{type:"default",onClick:n[1]||(n[1]=i=>_.value=!1)},{default:t(()=>[o(" 取消 ")]),_:1})]),_:1})])]),_:1},8,["open"])],64)}}});export{te as _,ae as a};
