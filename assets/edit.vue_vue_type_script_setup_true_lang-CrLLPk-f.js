import{a5 as $,d as y,a0 as j,a1 as q,ai as O,aj as P,aB as T,a_ as W,W as F,aU as H,K,m as R,a2 as J,at as L}from"./antd-BiDZImxE.js";import{v as b,w as k,u as w}from"./index-BfKtmSYb.js";import{d as Q,f as _,o as X,a5 as Z,a3 as h,k as e,ad as a,u as l,a8 as ee,G as I,af as ae,H as ne}from"./vue-CP9fVXMC.js";function ie(s){return b("/admin/user/list",{current:s.current,size:s.size,...s.param},{customDev:!0})}function te(s){return b("/admin/user/view",{userId:s},{customDev:!0})}function pe(s){return b("/admin/user/delete",{userId:s},{customDev:!0})}function le(s){return k("/admin/user/update",s,{customDev:!0})}function ue(s){return k("/admin/user/add",s,{customDev:!0})}const se={style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},me=Q({__name:"edit",props:{userId:{type:Number,default:0}},emits:["handleClose"],setup(s,{emit:C}){const x=s,D=C,v=_(!0),n=_({id:void 0,userName:"",email:"",transferEnable:0,port:void 0,money:0,expireIn:void 0,grade:0,classExpire:void 0,group:0,nodeConnector:0});function c(r){D("handleClose",r)}async function E(){await le(n.value),w().success("修改成功"),c(1)}const g=_({email:"",pass:""}),p=_(!1);async function N(){const{data:r}=await ue(n.value);w().success("用户添加成功🎉",3),g.value=r,p.value=!0}function A(){p.value=!1,c(1)}async function M(){const{data:r}=await te(x.userId);n.value=r,n.value.expireIn=y(n.value.expireIn),n.value.classExpire=y(n.value.classExpire),v.value=!1}return X(()=>{x.userId&&M(),v.value=!1}),(r,t)=>{const m=j,o=q,d=O,i=P,f=T,B=W,z=F,S=H,U=K,V=R,Y=J,G=L;return Z(),h("div",null,[e(S,{spinning:l(v)},{default:a(()=>[e(z,{model:l(n),layout:"vertical"},{default:a(()=>[e(i,{gutter:16},{default:a(()=>[e(d,{span:12},{default:a(()=>[e(o,{label:"用户名",name:"userName",rules:[{required:!0,message:"用户名不能为空"}]},{default:a(()=>[e(m,{value:l(n).userName,"onUpdate:value":t[0]||(t[0]=u=>l(n).userName=u)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(o,{label:"邮箱",name:"email",rules:[{required:!0,message:"邮箱不能为空"}]},{default:a(()=>[e(m,{value:l(n).email,"onUpdate:value":t[1]||(t[1]=u=>l(n).email=u)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:a(()=>[e(d,{span:12},{default:a(()=>[e(o,{label:"总流量",name:"transferEnable"},{default:a(()=>[e(m,{value:l(n).transferEnable,"onUpdate:value":t[2]||(t[2]=u=>l(n).transferEnable=u),"addon-after":"GB",min:0},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:a(()=>[e(d,{span:12},{default:a(()=>[e(o,{label:"余额",name:"money"},{default:a(()=>[e(f,{value:l(n).money,"onUpdate:value":t[3]||(t[3]=u=>l(n).money=u),"addon-after":"元"},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(o,{label:"账号过期",name:"expireIn"},{default:a(()=>[e(B,{value:l(n).expireIn,"onUpdate:value":t[4]||(t[4]=u=>l(n).expireIn=u),format:"YYYY-MM-DD"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:a(()=>[e(d,{span:12},{default:a(()=>[e(o,{label:"限速",name:"sort"},{default:a(()=>[e(f,{value:l(n).nodeSpeedlimit,"onUpdate:value":t[5]||(t[5]=u=>l(n).nodeSpeedlimit=u),"addon-after":"Mb"},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(o,{label:"设备在线数",name:"nodeConnector"},{default:a(()=>[e(m,{value:l(n).nodeConnector,"onUpdate:value":t[6]||(t[6]=u=>l(n).nodeConnector=u),"addon-after":"台"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:a(()=>[e(d,{span:12},{default:a(()=>[e(o,{label:"用户等级",name:"grade"},{default:a(()=>[e(f,{value:l(n).grade,"onUpdate:value":t[7]||(t[7]=u=>l(n).grade=u),min:0},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(o,{label:"用户分组",name:"group"},{default:a(()=>[e(f,{value:l(n).group,"onUpdate:value":t[8]||(t[8]=u=>l(n).group=u),"default-value":0},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"]),ee("div",se,[e(V,{size:"middle"},{default:a(()=>[e(U,{onClick:t[9]||(t[9]=u=>c(0))},{default:a(()=>[I(" 取消 ")]),_:1}),e(U,{type:"primary",onClick:t[10]||(t[10]=u=>s.userId?E():N())},{default:a(()=>[I(ae(s.userId?"保存":"添加"),1)]),_:1})]),_:1}),e(G,{open:l(p),"onUpdate:open":t[11]||(t[11]=u=>ne(p)?p.value=u:null),"mask-closable":!1,closable:!1,keyboard:!1,title:"新用户信息",onOk:A},{default:a(()=>[e(i,{"mt-5":"",gutter:16},{default:a(()=>[e(d,{offset:4,span:24},{default:a(()=>[e(o,{label:"邮箱"},{default:a(()=>[e(m,{readonly:"",value:l(g).email,style:{width:"calc(100% - 200px)"}},{prefix:a(()=>[e(l($))]),_:1},8,["value"])]),_:1})]),_:1}),e(d,{offset:4,span:24},{default:a(()=>[e(o,{label:"密码"},{default:a(()=>[e(Y,{readonly:"",value:l(g).pass,style:{width:"calc(100% - 200px)"}},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])])}}});export{me as _,pe as d,ie as u};
