"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[8614],{18614:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var r=t(53334),o=t(87574),s=t(33283),a=t(95798),l=t(12162),i=t(99656),c=t(17446),d=t(53828),u=t(72779),k=t.n(u),h=t(50094),p=t(39359),m=t(2784),f=t(96217),g=t(73557),x=t(38338),C=t(61162),E=t(52322),y=function(e){return e.CONTACT="contact",e.RECENT="recent",e}(y||{});const b=(e,n)=>{const t=n.toLowerCase();return e.address.toLowerCase().includes(t)||!!e.name&&e.name.toLowerCase().includes(t)},j=e=>{switch(e.group){case y.CONTACT:return 1;case y.RECENT:default:return 0}},L=()=>(0,E.jsx)(r.$_,{}),T="manage-address-book-filter-modal",w=(0,x.ZP)((e=>{const{className:n}=e,{t}=(0,f.$)(),u=(0,g.s0)(),{activeModal:x}=(0,m.useContext)(l.t),{contacts:w,recent:N}=(0,s.v9)((e=>e.accountState)),M=(0,m.useRef)(null),{filterSelectionMap:S,onApplyFilter:v,onChangeFilterOption:A,onCloseFilterModal:F,selectedFilters:R}=(0,s.RK)(T),W=(0,s.dB)(),B=(0,m.useMemo)((()=>{const e=[];return(!R.length||R.includes(y.CONTACT))&&w.forEach((n=>{const t=(0,C.U)(n.address)?(0,a.k1)(n.address):n.address;e.push({...n,address:t,group:y.CONTACT})})),(!R.length||R.includes(y.RECENT))&&N.forEach((n=>{const t=(0,C.U)(n.address)?(0,a.k1)(n.address):n.address;e.push({...n,address:t,group:y.RECENT})})),e.sort(a.TR).sort(((e,n)=>j(n)-j(e)))}),[w,N,R]),O=(0,m.useMemo)((()=>[{label:t("My contacts"),value:y.CONTACT},{label:t("Recent"),value:y.RECENT}]),[t]),[Z,_]=(0,m.useState)(),H=(0,m.useCallback)((()=>{x(o.UE)}),[x]),I=(0,m.useMemo)((()=>[{icon:(0,E.jsx)(i.Z,{phosphorIcon:h.Z,size:"md"}),onClick:H}]),[H]),z=(0,m.useCallback)((()=>{x(T)}),[x]),P=(0,m.useCallback)(((e,n,r)=>{let o="";switch(r){case y.CONTACT:o=t("My contacts");break;case y.RECENT:o=t("Recent")}return(0,E.jsxs)("div",{className:"address-book-group-separator",children:[(0,E.jsx)("span",{className:"address-book-group-label",children:o}),(0,E.jsxs)("span",{className:"address-book-group-counter",children:[" (",e.length,")"]})]})}),[t]),G=(0,m.useCallback)((e=>()=>{_(e),setTimeout((()=>{x(o.GE)}),10)}),[x]),U=(0,m.useCallback)((e=>{const n=W(e);return e.group===y.RECENT?(0,E.jsx)(r.MG,{address:n,addressPreLength:8,addressSufLength:8,avatarSize:24,onClick:G(e)},e.address):(0,E.jsx)(r.HL,{accountName:e.name,address:n,avatarSize:24,onClick:G(e)},e.address)}),[W,G]),D=(0,m.useCallback)((()=>{u("/settings/list")}),[u]);return(0,E.jsx)(r.FE,{className:k()(n),children:(0,E.jsxs)(r.Ar.WithSubHeaderOnly,{onBack:D,subHeaderIcons:I,title:t("Manage address book"),children:[(0,E.jsx)(c.Z.Section,{actionBtnIcon:(0,E.jsx)(d.Z,{dot:!!R.length,children:(0,E.jsx)(i.Z,{phosphorIcon:p.Z,size:"sm",type:"phosphor",weight:"fill"})}),displayRow:!0,enableSearchInput:!0,groupBy:"group",groupSeparator:P,list:B,onClickActionBtn:z,ref:M,renderItem:U,renderWhenEmpty:L,rowGap:"var(--row-gap)",searchFunction:b,searchMinCharactersCount:2,searchPlaceholder:t("Account name"),showActionBtn:!0}),(0,E.jsx)(r.Dd,{closeIcon:(0,E.jsx)(r.xC,{}),id:T,onApplyFilter:v,onCancel:F,onChangeOption:A,optionSelectionMap:S,options:O,title:t("Filter address")}),(0,E.jsx)(r.xf,{}),Z&&(0,E.jsx)(r.vg,{addressJson:Z})]})})})).withConfig({displayName:"AddressBook__ManageAddressBook",componentId:"sc-1g9lssa-0"})((({theme:{token:e}})=>({"--row-gap":e.sizeXS,".ant-sw-screen-layout-body":{paddingTop:e.padding,height:"100%",display:"flex",flexDirection:"column"},".ant-sw-list-section":{flex:1,marginBottom:e.margin},".ant-account-item-address":{fontWeight:e.fontWeightStrong,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextBase}})))},50094:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(2784),o=t(21890),s=t(76712),a=new Map;a.set("bold",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),a.set("duotone",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))})),a.set("light",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),a.set("thin",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),a.set("regular",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var l=function(e,n){return(0,o._)(e,n,a)},i=(0,r.forwardRef)((function(e,n){return r.createElement(s.Z,Object.assign({ref:n},e,{renderPath:l}))}));i.displayName="Plus";const c=i}}]);