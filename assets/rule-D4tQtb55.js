import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-D8WjjPV0.js";import{a as z}from"./index-DMOKg2AD.js";import{au as S,H as y,at as v,ag as C,ah as I,ai as k}from"./antd-CHYaqX98.js";import{d as $,f as c,r as B,o as b,a5 as N,ac as V,ad as e,k as n,u as s,a8 as i}from"./vue-DZ3ObLO4.js";import"./index-DcB7UUez.js";import"./context-CI8FevHi.js";const A=i("span",{"text-20px":"","line-height-32px":"","mr-12px":"","mb-0":"",truncate:"","font-600":""},"审计规则",-1),D=i("ul",null,[i("li",null,"系统中所有审计记录。"),i("li",null,"关于隐私：注意，我们仅用以下规则进行实时匹配和记录匹配到的规则，您的通信方向和通信内容我们不会做任何记录，请您放心。也请您理解我们对于这些不当行为的管理，谢谢")],-1),j=$({__name:"rule",setup(H){const o=c(!1),u=c([{title:"ID",dataIndex:"id",width:10},{title:"名称",dataIndex:"name",width:20},{title:"描述",dataIndex:"text",width:20},{title:"正则表达式",dataIndex:"regex",width:50}]),_=c(),a=B({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40"],showSizeChanger:!0,showQuickJumper:!0,showTotal:t=>`${t}条记录`,onChange(t,l){a.pageSize=l,a.current=t,r()}});async function r(){if(!o.value){o.value=!0;try{const{data:t}=await z({size:a.pageSize,current:a.current});_.value=t.records,a.total=t.total,a.pageSize=t.size,a.current=t.current}finally{o.value=!1}}}return b(()=>{r()}),(t,l)=>{const p=S,d=y,m=v,g=C,f=I,h=k,x=w;return N(),V(x,null,{title:e(()=>[A]),default:e(()=>[n(d,{message:"提示",type:"info","show-icon":""},{description:e(()=>[n(p,null,{default:e(()=>[D]),_:1})]),_:1}),n(h,{"mt-5":""},{default:e(()=>[n(f,{span:24},{default:e(()=>[n(g,{title:"规则明细"},{default:e(()=>[n(m,{loading:s(o),columns:s(u),"data-source":s(_),pagination:s(a),scroll:{x:100}},null,8,["loading","columns","data-source","pagination"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{j as default};
