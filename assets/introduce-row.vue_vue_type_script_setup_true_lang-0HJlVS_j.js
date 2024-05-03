import{T as A,a as V,P as z}from"./index-DNQlJJ0k.js";import{a9 as D,bi as g,ag as E,aa as H,ab as I}from"./antd-Do4zFXs5.js";import{d as k,a5 as N,ac as R,ad as t,a8 as a,af as d,U as h,ai as U,f as w,s as T,o as W,j,k as e,aw as v,ax as m,u as y,G as C}from"./vue-CP9fVXMC.js";import{_ as G}from"./index-CRpV0laT.js";import{F as B}from"./field-DS1CR33R.js";import b from"./trend-DPL0-xzu.js";const L={class:"chartCard"},M={class:"chartTop"},O={class:"metaWrap"},q={class:"meta"},J={class:"title"},K={class:"action"},Q={class:"total"},X={class:"contentFixed"},Y={class:"footer"},Z=k({__name:"chart-card",props:{loading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},title:{type:String,default:""},total:{type:Number},contentHeight:{type:Number}},setup(l){const i=l;return(n,$)=>{const c=D;return N(),R(c,{bind:i,"body-style":{padding:"20px 24px 8px 24px"}},{default:t(()=>[a("div",L,[a("div",M,[a("div",O,[a("div",q,[a("span",J,d(l.title),1),a("span",K,[h(n.$slots,"action",{},void 0,!0)])]),a("div",Q,[h(n.$slots,"total",{},void 0,!0)])])]),a("div",{class:"content",style:U({height:`${l.contentHeight}px`||"auto"})},[a("div",X,[h(n.$slots,"default",{},void 0,!0)])],4),a("div",Y,[h(n.$slots,"footer",{},void 0,!0)])])]),_:3},8,["bind"])}}}),x=G(Z,[["__scopeId","data-v-00509e27"]]),tt=a("span",{class:"trendText"},"12%",-1),et=a("span",{class:"trendText"},"11%",-1),at=a("span",null,d("78%"),-1),ot={style:{whiteSpace:"nowrap",overflow:"hidden"}},nt=a("span",{class:"trendText"},"12%",-1),lt=a("span",{class:"trendText"},"11%",-1),_t=k({__name:"introduce-row",props:{loading:{type:Boolean,default:!1}},setup(l){function i(s){return s.toLocaleString()}const n={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:"24px"}},$=w(),c=w(),F=w(),S=[7,5,4,2,4,7,5,6,5,9,6,3,1,5,3,6,5],u=T(),_=T(),f=T();return W(()=>{var s,r,o;u.value=new A($.value,{height:46,data:S,smooth:!0,autoFit:!0,areaStyle:{fill:"l(270) 0:#ffffff 0.5:#d4bcf2 1:#975FE4"},line:{color:"#975FE4"}}),(s=u.value)==null||s.render(),_.value=new V(c.value,{height:46,autoFit:!0,data:S}),(r=_.value)==null||r.render(),f.value=new z(F.value,{height:46,autoFit:!0,percent:.78,barWidthRatio:.2,color:"#13C2C2"}),(o=f.value)==null||o.render()}),j(()=>{var s,r,o;(s=u.value)==null||s.destroy(),u.value=void 0,(r=_.value)==null||r.destroy(),_.value=void 0,(o=f.value)==null||o.destroy(),f.value=void 0}),(s,r)=>{const o=E,p=H,P=I;return N(),R(P,{gutter:24},{default:t(()=>[e(p,v(m({...n})),{default:t(()=>[e(x,{bordered:!1,title:"总销售额",loading:l.loading,"content-height":46},{action:t(()=>[e(o,{title:"指标说明"},{default:t(()=>[e(y(g))]),_:1})]),total:t(()=>[a("span",null,d(`¥${i(126560)}`),1)]),footer:t(()=>[e(B,{label:"日销售额",value:"￥12,423"})]),default:t(()=>[e(b,{flag:"up",style:{marginRight:"16px"}},{default:t(()=>[C(" 周同比 "),tt]),_:1}),e(b,{flag:"down"},{default:t(()=>[C(" 日同比 "),et]),_:1})]),_:1},8,["loading"])]),_:1},16),e(p,v(m({...n})),{default:t(()=>[e(x,{bordered:!1,title:"访问量",loading:l.loading,"content-height":46},{action:t(()=>[e(o,{title:"指标说明"},{default:t(()=>[e(y(g))]),_:1})]),total:t(()=>[a("span",null,d(`${i(8846)}`),1)]),footer:t(()=>[e(B,{label:"日访问量",value:i(1234)},null,8,["value"])]),default:t(()=>[a("div",{ref_key:"tinyAreaContainer",ref:$},null,512)]),_:1},8,["loading"])]),_:1},16),e(p,v(m({...n})),{default:t(()=>[e(x,{bordered:!1,title:"支付笔数",loading:l.loading,"content-height":46},{action:t(()=>[e(o,{title:"指标说明"},{default:t(()=>[e(y(g))]),_:1})]),total:t(()=>[a("span",null,d(`${i(6560)}`),1)]),footer:t(()=>[e(B,{label:"转化率",value:"60%"})]),default:t(()=>[a("div",{ref_key:"tinyColumnContainer",ref:c},null,512)]),_:1},8,["loading"])]),_:1},16),e(p,v(m({...n})),{default:t(()=>[e(x,{bordered:!1,title:"运营活动效果",loading:l.loading,"content-height":46},{action:t(()=>[e(o,{title:"指标说明"},{default:t(()=>[e(y(g))]),_:1})]),total:t(()=>[at]),footer:t(()=>[a("div",ot,[e(b,{flag:"up",style:{marginRight:"16px"}},{default:t(()=>[C(" 周同比 "),nt]),_:1}),e(b,{flag:"down"},{default:t(()=>[C(" 日同比 "),lt]),_:1})])]),default:t(()=>[a("div",{ref_key:"progressContainer",ref:F},null,512)]),_:1},8,["loading"])]),_:1},16)]),_:1})}}});export{_t as _};
