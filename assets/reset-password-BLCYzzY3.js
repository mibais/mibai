import{l as k}from"./login-slot-CiOMP230.js";import{r as y}from"./index-DL2icI96.js";import{g as o}from"./tools-BSGzA3Ot.js";import{d as b,f as w,r as C,o as x,ac as F,ad as s,aq as N,a5 as j,G as p,k as t,ao as B}from"./vue-CP9fVXMC.js";import{f as R}from"./index-CRpV0laT.js";import{K as S,N as q,S as U,F as V}from"./antd-Do4zFXs5.js";import"./index.vue_vue_type_script_setup_true_lang-DBv8UxrX.js";import"./login-left-COMFGRfE.js";import"./logo-CmUnSVuR.js";const H=b({__name:"reset-password",setup(A){const l=N(),m=R(),i=w(),a=C({pass:"",checkPass:""});async function f(c,e){return e===""?Promise.reject("请输入密码"):(a.checkPass!==""&&i.value.validateFields("checkPass"),Promise.resolve())}async function d(c,e){return e===""?Promise.reject("你再次输入密码"):e!==a.pass?Promise.reject("两次密码不一样"):Promise.resolve()}const _={pass:[{required:!0,validator:f,trigger:"change"}],checkPass:[{validator:d,trigger:"change"}]},P={labelCol:{span:8},wrapperCol:{span:16}};async function h(){await y({email:o("email"),code:o("code"),newPassword:a.pass}),m.success({message:"密码重置成功",description:"你现在可以使用新密码登陆",duration:3,onClose(){l.push({path:"/login",replace:!0})}})}return x(()=>{(!o("email")||!o("code"))&&l.push({path:"/login",replace:!0})}),(c,e)=>{const u=S,r=q,v=U,g=V;return j(),F(k,null,{title:s(()=>[p(" 正在重置密码 ")]),default:s(()=>[t(g,B({ref_key:"formRef",ref:i,name:"custom-validation",model:a,rules:_},P,{onFinish:h}),{default:s(()=>[t(r,{"has-feedback":"",label:"新密码",name:"pass"},{default:s(()=>[t(u,{value:a.pass,"onUpdate:value":e[0]||(e[0]=n=>a.pass=n),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),t(r,{"has-feedback":"",label:"确认密码",name:"checkPass"},{default:s(()=>[t(u,{value:a.checkPass,"onUpdate:value":e[1]||(e[1]=n=>a.checkPass=n),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),t(r,null,{default:s(()=>[t(v,{block:"","html-type":"submit",type:"primary"},{default:s(()=>[p(" 确认重置 ")]),_:1})]),_:1})]),_:1},16,["model"])]),_:1})}}});export{H as default};
