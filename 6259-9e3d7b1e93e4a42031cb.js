"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[6259],{66259:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var o=t(36926),r=t(3401),s=t(53101),i=t(92662),a=t(85362),l=t(75576),d=t(43246),u=t(53483),c=t(47088),p=t(12162),k=t(99656),m=t(17446),h=t(1780),g=t(50094),f=t(39359),x=t(2784),y=t(35185),b=t(73557),E=t(38338),L=t(52322);const w="filterTokenModal";var C=function(e){return e.ENABLED="enabled",e.DISABLED="disabled",e.CUSTOM="custom",e}(C||{});const j=[{label:"Enabled tokens",value:C.ENABLED},{label:"Disabled tokens",value:C.DISABLED},{label:"Custom tokens",value:C.CUSTOM}],S=(0,E.ZP)((function({className:e=""}){const{t:n}=(0,d.Z)(),t=(0,b.s0)(),E=(0,c.Z)().goBack,S=(0,x.useContext)(l.R0),{activeModal:_}=(0,x.useContext)(p.t),{assetRegistry:M,assetSettingMap:v}=(0,y.v9)((e=>e.assetRegistry)),B=(0,x.useMemo)((()=>{const e=[];return Object.values(M).forEach((n=>{(0,o.Dh)(n)&&e.push(n)})),e}),[M]),{filterSelectionMap:I,onApplyFilter:Z,onChangeFilterOption:D,onCloseFilterModal:F,selectedFilters:W}=(0,u.R)(w),A=(0,x.useMemo)((()=>e=>{if(!W.length)return!0;for(const n of W)if(n===C.CUSTOM){if((0,o.Nn)(e.slug))return!0}else if(n===C.ENABLED){if(v[e.slug]&&v[e.slug].visible)return!0}else if(!(n!==C.DISABLED||v[e.slug]&&v[e.slug].visible))return!0;return!1}),[v,W]),R=(0,x.useCallback)(((e,n)=>{const t=n.toLowerCase();return e.name.toLowerCase().includes(t)||e.symbol.toLowerCase().includes(t)}),[]),N=(0,x.useCallback)((e=>(0,L.jsx)(a.Z,{assetSettingMap:v,tokenInfo:e},e.slug)),[v]),T=(0,x.useCallback)((()=>(0,L.jsx)(s.Z,{emptyMessage:n("Your token will appear here."),emptyTitle:n("No token"),phosphorIcon:h.Z})),[n]),H=(0,x.useMemo)((()=>[{icon:(0,L.jsx)(k.Z,{phosphorIcon:g.Z,size:"sm",type:"phosphor"}),onClick:()=>{t("/settings/tokens/import-token",{state:{isExternalRequest:!1}})}}]),[t]),O=(0,x.useCallback)((e=>{e&&e.stopPropagation(),_(w)}),[_]);return(0,L.jsx)(r.FE,{className:`manage_tokens ${e}`,resolve:S.awaitStores(["assetRegistry"]),children:(0,L.jsxs)(r.Ar.Base,{onBack:E,showBackButton:!0,showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!0,subHeaderIcons:H,subHeaderPaddingVertical:!0,title:n("Manage tokens"),children:[(0,L.jsx)(m.Z.Section,{actionBtnIcon:(0,L.jsx)(k.Z,{customSize:"20px",phosphorIcon:f.Z,size:"sm",type:"phosphor",weight:"fill"}),className:"manage_tokens__container",enableSearchInput:!0,filterBy:A,gridGap:"14px",list:B,minColumnWidth:"172px",mode:"boxed",onClickActionBtn:O,renderItem:N,renderWhenEmpty:T,searchFunction:R,searchMinCharactersCount:2,searchPlaceholder:n("Search token"),showActionBtn:!0}),(0,L.jsx)(i.D,{id:w,onApplyFilter:Z,onCancel:F,onChangeOption:D,optionSelectionMap:I,options:j})]})})})).withConfig({displayName:"ManageTokens",componentId:"sc-c8azj0-0"})((({theme:{token:e}})=>({".ant-sw-screen-layout-body":{display:"flex"},".ant-sw-list-wrapper.ant-sw-list-wrapper:before":{zIndex:0,borderRadius:e.borderRadiusLG},".ant-sw-list-section.-boxed-mode .ant-sw-list":{paddingLeft:e.padding,paddingTop:e.paddingXS,paddingBottom:e.paddingXS},".ant-sw-list-section.-boxed-mode .ant-sw-list.-ignore-scrollbar":{paddingRight:e.padding+6},".ant-network-item.-with-divider":{position:"relative",zIndex:1},"&__inner":{display:"flex",flexDirection:"column",overflow:"hidden"},".manage_tokens__container":{paddingTop:e.padding,paddingBottom:e.paddingSM,flex:1,"button + button":{marginLeft:e.marginXS}},".manage_tokens__right_item_container":{marginRight:-e.marginXXS}})))},50094:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(2784),r=t(21890),s=t(76712),i=new Map;i.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),i.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),i.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))})),i.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),i.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),i.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var a=function(e,n){return(0,r._)(e,n,i)},l=(0,o.forwardRef)((function(e,n){return o.createElement(s.Z,Object.assign({ref:n},e,{renderPath:a}))}));l.displayName="Plus";const d=l}}]);