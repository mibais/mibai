import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-D8WjjPV0.js";import{E as ue,d as N,aR as ce,Z as re,$ as _e,ah as pe,aA as me,ai as fe,I as ge,l as ve,Q as he,ag as xe,a1 as ke,aS as ye,D as Ce,v as Ie,aB as be,at as we,r as Se}from"./antd-CHYaqX98.js";import{n as $e,_ as Ae,d as Be}from"./edit.vue_vue_type_script_setup_true_lang-DUUnnX0o.js";import{u as De}from"./index-DcB7UUez.js";import{d as Le,f as r,s as H,c as M,r as U,w as Re,o as ze,a5 as p,ac as L,ad as t,k as a,u as n,G as d,H as Ve,a3 as I,F as b,af as w,ag as m,ak as Ye,a8 as Ne}from"./vue-DZ3ObLO4.js";import"./context-CI8FevHi.js";const He=Ne("span",{"text-20px":"","line-height-32px":"","mr-12px":"","mb-0":"",truncate:"","font-600":""},"节点管理",-1),Qe=Le({__name:"index",setup(Me){const k=r(!1),S=r(!1),y=H(!0),$=H([{title:"#",dataIndex:"id"},{title:"节点名称",dataIndex:"name"},{title:"节点地址",dataIndex:"server",width:120,ellipsis:!0},{title:"是否可见",dataIndex:"type"},{title:"流量倍率",dataIndex:"trafficRate"},{title:"节点等级",dataIndex:"nodeClass"},{title:"节点类型",dataIndex:"sort"},{title:"节点限速",dataIndex:"nodeSpeedlimit"},{title:"节点连接数",dataIndex:"nodeConnector"},{title:"节点使用流量",dataIndex:"nodeBandwidth"},{title:"节点总流量",dataIndex:"nodeBandwidthLimit"},{title:"节点流量重置日",dataIndex:"bandwidthlimitResetday"},{title:"上次活动时间",dataIndex:"nodeHeartbeat"},{title:"节点ip",dataIndex:"nodeIp"},{title:"节点分组",dataIndex:"nodeGroup"},{title:"操作",dataIndex:"action",width:200}]),i=M(()=>$.value.map(e=>e.dataIndex)),R=r(),s=U({indeterminate:!1,checkAll:!0,checkList:i.value}),j={0:"Shadowsocks",2:"SSH",5:"Anyconnect",9:"Shadowsocks 单端口多用户",10:"Shadowsocks 中转",11:"V2ray",12:"V2ray 中转",14:"Trojan",999:"系统保留"},F=M(()=>$.value.map(e=>e.dataIndex==="action"?{label:e.title,value:e.dataIndex,disabled:!0}:{label:e.title,value:e.dataIndex})),z=r(),u=U({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40"],showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`${e}条记录`,onChange(e,o){u.pageSize=o,u.current=e,g()}}),c=r({name:"",server:"",nodeClass:void 0}),f=r(!1);async function g(){if(!k.value){k.value=!0;try{const{data:e}=await $e({size:u.pageSize,current:u.current,param:c.value});z.value=e.records,u.total=e.total,u.pageSize=e.size,u.current=e.current}finally{k.value=!1}}}function v(e){return $.value.filter(o=>e.includes(o.dataIndex))}const O=["id","name","nodeClass","sort","type","nodeGroup","action"],h=r(y.value?v(O):v(i.value));function T(e){y.value=!1,Object.assign(s,{checkList:e.target.checked?i.value:[],indeterminate:!0}),h.value=e.target.checked?v(i.value):h.value.filter(o=>o.dataIndex==="action")}Re(()=>s.checkList,e=>{s.indeterminate=!!e.length&&e.length<i.value.length,s.checkAll=e.length===i.value.length});function G(){s.checkList=i.value,h.value=v(i.value),y.value=!0}const Q=r();function E(){g()}function J(e){y.value=!1;const o=v(e);h.value=o}function Z(e){R.value=e.id,f.value=!0}async function q(e){await Be(e),De().success("节点删除成功"),await g()}function K(e){f.value=!1,e&&g()}return ze(()=>{g()}),(e,o)=>{const V=re,A=_e,x=pe,P=me,B=fe,C=ge,Y=ve,W=he,D=xe,X=ke,ee=ye,te=Ce,ae=Ie,ne=be,oe=we,le=Se,se=ie;return p(),L(se,null,{title:t(()=>[He]),default:t(()=>[a(D,{"mb-4":""},{default:t(()=>[a(W,{modal:n(c)},{default:t(()=>[a(B,{gutter:16},{default:t(()=>[a(x,{span:8},{default:t(()=>[a(A,{label:"节点名",name:"name"},{default:t(()=>[a(V,{value:n(c).name,"onUpdate:value":o[0]||(o[0]=l=>n(c).name=l)},null,8,["value"])]),_:1})]),_:1}),a(x,{span:8},{default:t(()=>[a(A,{label:"节点地址",name:"server"},{default:t(()=>[a(V,{value:n(c).server,"onUpdate:value":o[1]||(o[1]=l=>n(c).server=l)},null,8,["value"])]),_:1})]),_:1}),a(x,{span:8},{default:t(()=>[a(A,{label:"节点等级",name:"nodeClass"},{default:t(()=>[a(P,{value:n(c).nodeClass,"onUpdate:value":o[2]||(o[2]=l=>n(c).nodeClass=l),min:0},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(B,{span:24,style:{"text-align":"right"}},{default:t(()=>[a(x,{span:24},{default:t(()=>[a(Y,{flex:"","justify-end":"","w-full":""},{default:t(()=>[a(C,{loading:n(Q),type:"primary",onClick:E},{default:t(()=>[d(" 查询 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modal"])]),_:1}),a(B,{gutter:24},{default:t(()=>[a(x,{span:24},{default:t(()=>[a(D,{title:"节点列表"},{extra:t(()=>[a(ae,{title:"列设置"},{default:t(()=>[a(te,{open:n(S),"onUpdate:open":o[5]||(o[5]=l=>Ve(S)?S.value=l:null),trigger:"click"},{overlay:t(()=>[a(D,null,{title:t(()=>[a(X,{checked:n(s).checkAll,"onUpdate:checked":o[3]||(o[3]=l=>n(s).checkAll=l),indeterminate:n(s).indeterminate,onChange:T},{default:t(()=>[d(" 列选择 ")]),_:1},8,["checked","indeterminate"])]),extra:t(()=>[a(C,{type:"link",onClick:G},{default:t(()=>[d(" 重置 ")]),_:1})]),default:t(()=>[a(ee,{value:n(s).checkList,"onUpdate:value":o[4]||(o[4]=l=>n(s).checkList=l),options:n(F),style:{display:"flex","flex-direction":"column"},onChange:J},null,8,["value","options"])]),_:1})]),default:t(()=>[a(n(ue))]),_:1},8,["open"])]),_:1})]),default:t(()=>[a(oe,{loading:n(k),columns:n(h),"data-source":n(z),pagination:n(u),scroll:{x:100}},{bodyCell:t(({column:l,record:_})=>[l.dataIndex==="sort"?(p(),I(b,{key:0},[d(w(j[_.sort]),1)],64)):m("",!0),l.dataIndex==="bandwidthlimitResetday"?(p(),I(b,{key:1},[d(w(_.bandwidthlimitResetday?n(N)(_.bandwidthlimitResetday).format("YYYY-MM-DD"):""),1)],64)):m("",!0),l.dataIndex==="type"?(p(),I(b,{key:2},[d(w(_.type===1?"可见":"隐藏"),1)],64)):m("",!0),l.dataIndex==="nodeHeartbeat"?(p(),I(b,{key:3},[d(w(n(N)(_.nodeHeartbeat).format("YYYY-MM-DD")),1)],64)):m("",!0),l.dataIndex==="action"?(p(),L(Y,{key:4},{default:t(()=>[a(C,{type:"default",onClick:de=>Z(_)},{default:t(()=>[d(" 修改 ")]),_:2},1032,["onClick"]),a(ne,{title:"确定要删除节点吗？",onConfirm:de=>q(_.id)},{icon:t(()=>[a(n(ce))]),default:t(()=>[a(C,{danger:"",type:"primary"},{default:t(()=>[d(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024)):m("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})]),_:1})]),_:1}),a(le,{title:"编辑节点",width:720,visible:n(f),"body-style":{paddingBottom:"80px"},onClose:o[6]||(o[6]=l=>f.value=!1)},{default:t(()=>[n(f)?(p(),L(Ye(Ae),{key:0,"node-id":n(R),onHandleClose:K},null,40,["node-id"])):m("",!0)]),_:1},8,["visible"])]),_:1})}}});export{Qe as default};
