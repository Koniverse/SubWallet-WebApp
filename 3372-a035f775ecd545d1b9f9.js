"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[3372],{13372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(31101),a=n(67145),o=n(3612),l=n(86681),i=n(47088),s=n(92936),c=n(48062),d=n(90809),u=n(1072),p=n(58094),h=n(99656),k=n(9130),m=n(72779),g=n.n(m),L=n(93220),f=n(67218),E=n(75336),y=n(17469),b=n(2784),S=n(96217),x=n(35185),j=n(73557),w=n(38338),A=n(52322),C=function(e){return e.WALLET_PASSWORD="wallet-password",e.WEBSITE_ACCESS="website-access",e.CAMERA_ACCESS="camera-access",e}(C||{});const W=[{icon:L.Z,key:C.WALLET_PASSWORD,title:"Change wallet password",url:"/keyring/change-password"},{icon:f.Z,key:C.WEBSITE_ACCESS,title:"Manage website access",url:"/settings/dapp-access"}],M=(0,w.ZP)((e=>{const{className:t}=e,{t:n}=(0,S.$)(),{goBack:m}=(0,i.Z)(),L=(0,j.s0)(),f=!!(0,j.TH)().state,w=(0,l.Z)(),{isWebUI:M}=(0,b.useContext)(o.sG),{accounts:_}=(0,x.v9)((e=>e.accountState)),{camera:v}=(0,x.v9)((e=>e.settings)),Z=(0,b.useMemo)((()=>(0,c.MS)(_)),[_]),[I,N]=(0,b.useState)(!1),T=(0,b.useCallback)((()=>{f?m():L(Z?a.Y:"/settings/list")}),[f,m,L,Z]),$=(0,b.useCallback)((e=>()=>{N(!0);let t=!1;e||w&&(t=!0),(0,s.Cl)(!e).then((()=>{t&&(0,s.MI)("/settings/security").catch((e=>{console.log(e)}))})).catch(console.error).finally((()=>{N(!1)}))}),[w]),B=(0,b.useCallback)((e=>()=>{L(e)}),[L]);return(0,b.useEffect)((()=>{v&&window.navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{e.getTracks().forEach((e=>{e.stop()}))})).catch(console.error)}),[v]),(0,A.jsx)(r.FE,{className:g()(t),children:(0,A.jsxs)(r.Ar.Base,{withSideMenu:!0,onBack:T,title:n("Security settings"),children:[M&&(0,A.jsx)(d.Z,{title:n("Security settings"),background:"transparent",center:!1,onBack:()=>L(-1),showBackButton:!0}),(0,A.jsxs)("div",{className:g()("body-container",{"__web-ui":M}),children:[(0,A.jsx)("div",{className:"items-container",children:W.map((e=>(0,A.jsx)(u.Z,{className:g()("security-item",`security-type-${e.key}`,{disabled:Z}),leftItemIcon:(0,A.jsx)(p.Z,{backgroundColor:"var(--icon-bg-color)",phosphorIcon:e.icon,size:"sm",type:"phosphor",weight:"fill"}),name:n(e.title),onPressItem:Z?void 0:B(e.url),rightItem:(0,A.jsx)(h.Z,{className:"security-item-right-icon",phosphorIcon:E.Z,size:"sm",type:"phosphor"})},e.key)))}),(0,A.jsxs)("div",{className:"camera-access-container",children:[(0,A.jsx)("div",{className:"label",children:n("Camera access")}),(0,A.jsx)(u.Z,{className:g()("security-item",`security-type-${C.CAMERA_ACCESS}`),leftItemIcon:(0,A.jsx)(p.Z,{backgroundColor:"var(--icon-bg-color)",phosphorIcon:y.Z,size:"sm",type:"phosphor",weight:"fill"}),name:n("Allow QR camera access"),rightItem:(0,A.jsx)(k.Z,{checked:v,loading:I,onClick:$(v)})})]})]})]})})})).withConfig({displayName:"Security__SecurityList",componentId:"sc-1od7reo-0"})((({theme:{token:e}})=>({".body-container":{padding:`${e.padding}px ${e.padding}px`,"&.__web-ui":{padding:`${e.padding+24}px ${e.padding}px ${e.padding}px`,maxWidth:"70%",margin:"0 auto"}},".items-container":{display:"flex",flexDirection:"column",gap:e.sizeXS},[`.security-type-${C.WALLET_PASSWORD}`]:{"--icon-bg-color":e["geekblue-6"],"&:hover":{"--icon-bg-color":e["geekblue-7"]}},[`.security-type-${C.WEBSITE_ACCESS}`]:{"--icon-bg-color":e["blue-7"],"&:hover":{"--icon-bg-color":e["blue-8"]}},[`.security-type-${C.CAMERA_ACCESS}`]:{"--icon-bg-color":e["green-6"],"&:hover":{"--icon-bg-color":e["green-7"]}},".security-item":{".ant-web3-block-right-item":{marginRight:e.sizeXXS,color:e["gray-4"]},"&:hover":{".ant-web3-block-right-item":{color:e["gray-6"]}},"&.disabled":{opacity:.4,".ant-setting-item-content":{cursor:"not-allowed"}}},".camera-access-container":{marginTop:e.marginLG,display:"flex",flexDirection:"column",gap:e.size,".label":{fontWeight:e.fontWeightStrong,fontSize:e.fontSizeSM,lineHeight:e.lineHeightSM,color:e.colorTextLabel,textTransform:"uppercase"}}})))},67218:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(2784),a=n(21890),o=n(76712),l=new Map;l.set("bold",(function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M49.6,183.4l12.1-7.3a8.4,8.4,0,0,0,3.8-6.1l3.7-37a7.3,7.3,0,0,1,1.2-3.5L90.1,98.6A8,8,0,0,1,102,96.8l15.4,12.9a7.8,7.8,0,0,0,6.2,1.8l31.2-4.2a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),l.set("duotone",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8h.1a97,97,0,0,1-29.2,38.1Z",opacity:"0.2"}),r.createElement("path",{d:"M49.6,183.4A96,96,0,0,1,182.7,49.1h0l1.1,24.3a8.1,8.1,0,0,1-1.9,5.6l-22.2,25.6a7.8,7.8,0,0,1-4.9,2.7l-31.5,4.3a8.6,8.6,0,0,1-5.8-1.5L97.9,95.9a8.1,8.1,0,0,0-11.5,2.2L66.6,129.2a7.7,7.7,0,0,0-1.3,4.2l-.2,36.1a8,8,0,0,1-3.8,6.8l-11.7,7.1Z",opacity:"0.2"}),r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),l.set("fill",(function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M223.5,169.2a6.1,6.1,0,0,0,.5-1.2A104,104,0,0,0,187.8,42.9l-1.2-.7A103,103,0,0,0,128,24,104,104,0,0,0,42.6,187.3v.2a10.5,10.5,0,0,0,.8,1.1,104,104,0,0,0,147.8,21.9l1.4-1.1A105.3,105.3,0,0,0,223.5,169.2Zm-162,16.4,3.9-2.4a15.8,15.8,0,0,0,7.7-13.6l.2-33.8a8.3,8.3,0,0,1,1.3-4.3l14-22a8,8,0,0,1,11.4-2.2l12.8,9.3a16.5,16.5,0,0,0,11.6,2.9l31.4-4.3a15.8,15.8,0,0,0,10-5.4l22.1-25.6A15.4,15.4,0,0,0,191.8,73l-.2-5.8A87.7,87.7,0,0,1,216,128a86.4,86.4,0,0,1-3.2,23.4l-15.9-14.6a16.1,16.1,0,0,0-16.9-3l-30.5,12.7a16.1,16.1,0,0,0-9.7,12.4l-2.4,16.2A16.2,16.2,0,0,0,149.2,193l21.5,5.6,4,4a88,88,0,0,1-113.2-17Z"}))})),l.set("light",(function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),l.set("thin",(function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),l.set("regular",(function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var i=function(e,t){return(0,a._)(e,t,l)},s=(0,r.forwardRef)((function(e,t){return r.createElement(o.Z,Object.assign({ref:t},e,{renderPath:i}))}));s.displayName="GlobeHemisphereEast";const c=s}}]);