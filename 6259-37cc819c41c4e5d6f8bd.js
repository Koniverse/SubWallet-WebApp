"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[6259],{66259:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var o=t(36926),r=t(53334),i=t(53101),s=t(92662),a=t(85362),l=t(75576),d=t(3612),u=t(43246),c=t(53483),p=t(47088),k=t(12162),m=t(99656),g=t(90809),h=t(17446),f=t(72779),x=t.n(f),b=t(1780),y=t(50094),w=t(39359),E=t(2784),L=t(35185),C=t(73557),_=t(38338),j=t(52322);const B="filterTokenModal";var M;!function(e){e.ENABLED="enabled",e.DISABLED="disabled",e.CUSTOM="custom"}(M||(M={}));const S=[{label:"Enabled tokens",value:M.ENABLED},{label:"Disabled tokens",value:M.DISABLED},{label:"Custom tokens",value:M.CUSTOM}],v=(0,_.ZP)((function({className:e=""}){const{t:n}=(0,u.Z)(),t=(0,C.s0)(),f=(0,p.Z)().goBack,{isWebUI:_}=(0,E.useContext)(d.sG),v=(0,E.useContext)(l.R0),{activeModal:I}=(0,E.useContext)(k.t),{assetRegistry:Z,assetSettingMap:W}=(0,L.v9)((e=>e.assetRegistry)),D=(0,E.useMemo)((()=>{const e=[];return Object.values(Z).forEach((n=>{(0,o.Dh)(n)&&e.push(n)})),e}),[Z]),{filterSelectionMap:F,onApplyFilter:A,onChangeFilterOption:N,onCloseFilterModal:R,selectedFilters:T}=(0,c.R)(B),H=(0,E.useMemo)((()=>e=>{if(!T.length)return!0;for(const n of T)if(n===M.CUSTOM){if((0,o.Nn)(e.slug))return!0}else if(n===M.ENABLED){if(W[e.slug]&&W[e.slug].visible)return!0}else if(!(n!==M.DISABLED||W[e.slug]&&W[e.slug].visible))return!0;return!1}),[W,T]),O=(0,E.useCallback)(((e,n)=>{const t=n.toLowerCase();return e.name.toLowerCase().includes(t)||e.symbol.toLowerCase().includes(t)}),[]),z=(0,E.useCallback)((e=>(0,j.jsx)(a.Z,{assetSettingMap:W,tokenInfo:e},e.slug)),[W]),P=(0,E.useCallback)((()=>(0,j.jsx)(i.Z,{emptyMessage:n("Your token will appear here."),emptyTitle:n("No token"),phosphorIcon:b.Z})),[n]),X=(0,E.useMemo)((()=>[{icon:(0,j.jsx)(m.Z,{phosphorIcon:y.Z,size:"sm",type:"phosphor"}),onClick:()=>{t("/settings/tokens/import-token",{state:{isExternalRequest:!1}})}}]),[t]),U=(0,E.useCallback)((e=>{e&&e.stopPropagation(),I(B)}),[I]);return(0,j.jsx)(r.FE,{className:`manage_tokens ${e}`,resolve:v.awaitStores(["assetRegistry"]),children:(0,j.jsxs)(r.Ar.Base,{onBack:f,showBackButton:!0,showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!0,subHeaderIcons:X,subHeaderPaddingVertical:!0,title:n("Manage tokens"),withSideMenu:!0,children:[_&&(0,j.jsx)(g.Z,{background:"transparent",center:!1,onBack:()=>t(-1),rightButtons:X,showBackButton:!0,title:n("Manage tokens")}),(0,j.jsx)("div",{className:x()("container",{"__web-ui":_}),children:(0,j.jsx)(h.Z.Section,{actionBtnIcon:(0,j.jsx)(m.Z,{customSize:"20px",phosphorIcon:w.Z,size:"sm",type:"phosphor",weight:"fill"}),className:"manage_tokens__container",enableSearchInput:!0,filterBy:H,gridGap:"14px",list:D,minColumnWidth:"172px",mode:"boxed",onClickActionBtn:U,renderItem:z,renderWhenEmpty:P,searchFunction:O,searchMinCharactersCount:2,searchPlaceholder:n("Search token"),showActionBtn:!0})}),(0,j.jsx)(s.D,{id:B,onApplyFilter:A,onCancel:R,onChangeOption:N,optionSelectionMap:F,options:S})]})})})).withConfig({displayName:"ManageTokens",componentId:"sc-c8azj0-0"})((({theme:{token:e}})=>({".ant-sw-screen-layout-body":{display:"flex"},".container":{width:"100%","&.__web-ui":{padding:`${e.padding+24}px ${e.padding}px ${e.padding}px`,maxWidth:"70%",margin:"0 auto"}},".ant-sw-list-wrapper.ant-sw-list-wrapper:before":{zIndex:0,borderRadius:e.borderRadiusLG},".ant-sw-list-section.-boxed-mode .ant-sw-list":{paddingLeft:e.padding,paddingTop:e.paddingXS,paddingBottom:e.paddingXS},".ant-sw-list-section.-boxed-mode .ant-sw-list.-ignore-scrollbar":{paddingRight:e.padding+6},".ant-network-item.-with-divider":{position:"relative",zIndex:1},"&__inner":{display:"flex",flexDirection:"column",overflow:"hidden"},".manage_tokens__container":{paddingTop:e.padding,paddingBottom:e.paddingSM,flex:1,"button + button":{marginLeft:e.marginXS}},".manage_tokens__right_item_container":{marginRight:-e.marginXXS}})))},50094:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(2784),r=t(21890),i=t(76712),s=new Map;s.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),s.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),s.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))})),s.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),s.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),s.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var a=function(e,n){return(0,r._)(e,n,s)},l=(0,o.forwardRef)((function(e,n){return o.createElement(i.Z,Object.assign({ref:n},e,{renderPath:a}))}));l.displayName="Plus";const d=l}}]);