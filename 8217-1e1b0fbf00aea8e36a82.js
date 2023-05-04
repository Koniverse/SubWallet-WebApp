"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[8217],{88217:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var o=t(36926),r=t(31101),i=t(53101),a=t(92662),s=t(50886),l=t(75576),c=t(42997),d=t(43246),u=t(53483),p=t(12162),h=t(99656),m=t(90809),k=t(17446),f=t(31967),g=t(50094),x=t(39359),b=t(2784),E=t(73557),w=t(38338),y=t(72779),L=t.n(y),S=t(3612),C=t(52322);const B="filterTokenModal";var M=function(e){return e.ENABLED="enabled",e.DISABLED="disabled",e.CUSTOM="custom",e.SUBSTRATE="substrate",e.EVM="evm",e}(M||{});const _=[{label:"EVM chains",value:M.EVM},{label:"Substrate chains",value:M.SUBSTRATE},{label:"Custom chains",value:M.CUSTOM},{label:"Enabled chains",value:M.ENABLED},{label:"Disabled chains",value:M.DISABLED}],j=(0,w.ZP)((function({className:e=""}){const{t:n}=(0,d.Z)(),t=(0,E.s0)(),w=(0,b.useContext)(l.R0),{isWebUI:y}=(0,b.useContext)(S.sG),{activeModal:j}=(0,b.useContext)(p.t),v=(0,c.Z)(),{filterSelectionMap:I,onApplyFilter:Z,onChangeFilterOption:A,onCloseFilterModal:F,selectedFilters:T}=(0,u.R)(B),W=(0,b.useMemo)((()=>e=>{if(!T.length)return!0;for(const n of T)if(n===M.CUSTOM){if((0,o._G)(e.slug))return!0}else if(n===M.ENABLED){if(e.active)return!0}else if(n===M.DISABLED){if(!e.active)return!0}else if(n===M.SUBSTRATE){if((0,o.ie)(e))return!0}else if(n===M.EVM&&(0,o.h4)(e))return!0;return!1}),[T]),D=(0,b.useCallback)(((e,n)=>{const t=n.toLowerCase();return e.name.toLowerCase().includes(t)}),[]),R=(0,b.useCallback)((e=>(0,C.jsx)(s.Z,{chainInfo:e,isShowSubLogo:!0},e.slug)),[]),N=(0,b.useCallback)((()=>(0,C.jsx)(i.Z,{emptyMessage:n("Your chain will appear here."),emptyTitle:n("No chain found"),phosphorIcon:f.Z})),[n]),H=(0,b.useMemo)((()=>[{icon:(0,C.jsx)(h.Z,{phosphorIcon:g.Z,size:"md",type:"phosphor"}),onClick:()=>{t("/settings/chains/import",{state:{isExternalRequest:!1}})}}]),[t]),U=(0,b.useCallback)((()=>{t(-1)}),[t]),V=(0,b.useCallback)((e=>{e&&e.stopPropagation(),j(B)}),[j]);return(0,C.jsx)(r.FE,{className:`manage_chains ${e}`,resolve:w.awaitStores(["chainStore"]),children:(0,C.jsxs)(r.Ar.Base,{onBack:U,showBackButton:!0,showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!0,subHeaderIcons:H,subHeaderPaddingVertical:!0,title:n("Manage chains"),withSideMenu:!0,children:[y&&(0,C.jsx)(m.Z,{title:n("Manage chains"),background:"transparent",center:!1,onBack:()=>t(-1),showBackButton:!0}),(0,C.jsx)("div",{className:L()("container",{"__web-ui":y}),children:(0,C.jsx)(k.Z.Section,{actionBtnIcon:(0,C.jsx)(h.Z,{phosphorIcon:x.Z,size:"sm",weight:"fill"}),className:"manage_chains__container",enableSearchInput:!0,filterBy:W,list:v,mode:"boxed",onClickActionBtn:V,renderItem:R,renderWhenEmpty:N,searchFunction:D,searchMinCharactersCount:2,searchPlaceholder:n("Search chain"),showActionBtn:!0})}),(0,C.jsx)(a.D,{id:B,onApplyFilter:Z,onCancel:F,onChangeOption:A,optionSelectionMap:I,options:_})]})})})).withConfig({displayName:"ManageChains",componentId:"sc-lwqocc-0"})((({theme:{token:e}})=>({".ant-sw-screen-layout-body":{display:"flex"},".container":{width:"100%","&.__web-ui":{padding:`${e.padding+24}px ${e.padding}px ${e.padding}px`,maxWidth:"70%",margin:"0 auto"}},".ant-sw-list-wrapper.ant-sw-list-wrapper:before":{zIndex:0,borderRadius:e.borderRadiusLG},".ant-sw-list-section.-boxed-mode .ant-sw-list":{paddingLeft:e.padding,paddingTop:e.paddingXS,paddingBottom:e.paddingXS},".ant-sw-list-section.-boxed-mode .ant-sw-list.-ignore-scrollbar":{paddingRight:e.padding+6},".ant-network-item.-with-divider":{position:"relative",zIndex:1},"&__inner":{display:"flex",flexDirection:"column",overflow:"hidden"},".manage_chains__container":{paddingTop:e.padding,paddingBottom:e.paddingSM,flex:1},".ant-network-item-content .__toggle-area":{marginRight:-e.marginXXS,"button + button":{marginLeft:e.marginXS}}})))},50094:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),r=t(21890),i=t(76712),a=new Map;a.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),a.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))})),a.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),a.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),a.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var s=function(e,n){return(0,r._)(e,n,a)},l=(0,o.forwardRef)((function(e,n){return o.createElement(i.Z,Object.assign({ref:n},e,{renderPath:s}))}));l.displayName="Plus";const c=l}}]);