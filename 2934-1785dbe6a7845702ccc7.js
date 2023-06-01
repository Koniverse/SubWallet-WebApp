"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[2934],{24358:(e,t,n)=>{let r;n.d(t,{l:()=>r}),function(e){e.INVALID_INFO_TYPE="invalidInfoType",e.INJECT_SCRIPT_DETECTED="injectScriptDetected",e.EXISTED_CHAIN="existedChain",e.EXISTED_PROVIDER="existedProvider",e.INVALID_PROVIDER="invalidProvider",e.NONE="none",e.CONNECTION_FAILURE="connectionFailure",e.PROVIDER_NOT_SAME_CHAIN="providerNotSameChain"}(r||(r={}))},32934:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(24358),o=n(36926),i=n(56858),a=n(25601),s=n(18488),l=n(75576),d=n(99828),c=n(43246),u=n(71871),p=n(92936),k=n(12798),h=n(99656),m=n(96108),f=n(25356),E=n(50007),L=n(81781),g=n(34878),j=n(34070),x=n(1610),v=n(46106),y=n(2784),A=n(73557),M=n(38338),b=n(52322);const W=(0,M.ZP)((function({className:e=""}){const{t}=(0,c.Z)(),n=(0,A.s0)(),W=(0,y.useContext)(l.R0),{token:C}=(0,M.Fg)(),_=(0,A.TH)(),w=(0,d.Z)(),Z=(0,y.useMemo)((()=>_.state),[_.state]),I=(0,u.Z)(Z),S=(0,y.useCallback)((()=>{let e="";const t=[];(0,o.ie)(I)&&t.push("Substrate"),(0,o.h4)(I)&&t.push("EVM");for(let n=0;n<t.length;n++)e=e.concat(t[n]),n!==t.length-1&&(e=e.concat(", "));return e}),[I]),N=(0,y.useCallback)((()=>({provider:"",name:I.name,chainType:S(),symbol:(0,o.Nm)(I).symbol})),[I,S]),[P]=k.Z.useForm(),[F,T]=(0,y.useState)(!1),[R,H]=(0,y.useState)(!1),[O,D]=(0,y.useState)(!1),[V,B]=(0,y.useState)({status:""}),z=(0,y.useCallback)((()=>{n(-1)}),[n]),U=(0,y.useCallback)((()=>"success"!==V.status),[V.status]),X=(0,y.useCallback)((()=>{H(!0);const e=P.getFieldValue("provider"),{newProviderKey:r,newProviders:i}=function(e,t){let n=0;Object.keys(t).forEach((e=>{(0,o.HU)(e)&&(n+=1)}));const r=(0,o.yH)(n);return{newProviderKey:r,newProviders:{...t,[r]:e}}}(e.replaceAll(" ",""),I.providers),a={mode:"update",chainEditInfo:{slug:I.slug,currentProvider:r,providers:i}};(0,p.YY)(a).then((e=>{H(!1),e?(w({message:t("Added a provider successfully")}),n(-1)):w({message:t("An error occurred, please try again")})})).catch((()=>{H(!1),w({message:t("An error occurred, please try again")})}))}),[I.providers,I.slug,P,n,w,t]),Y=(0,y.useCallback)((()=>{n(-1)}),[n]),K=(0,y.useCallback)((e=>{switch(e){case r.l.CONNECTION_FAILURE:return t("Cannot connect to this provider");case r.l.EXISTED_PROVIDER:return t("This provider has already been added");case r.l.PROVIDER_NOT_SAME_CHAIN:return t("This provider is not for this network");default:return t("Error validating this provider")}}),[t]),G=(0,y.useCallback)((()=>O?"success"===V.status?(0,b.jsx)(h.Z,{customSize:"20px",iconColor:C.colorSuccess,phosphorIcon:g.Z,type:"phosphor",weight:"bold"}):F?(0,b.jsx)(m.Z,{size:"20px"}):"error"===V.status?(0,b.jsx)(h.Z,{customSize:"20px",iconColor:C["gray-4"],phosphorIcon:j.Z,type:"phosphor",weight:"bold"}):(0,b.jsx)(b.Fragment,{}):(0,b.jsx)(b.Fragment,{})),[O,F,V.status,C]),J=(0,y.useCallback)(((e,n)=>new Promise(((e,r)=>{if((0,i.CB)(n)){D(!0),T(!0);const o=n.replaceAll(" ","");(0,p.t6)(o,I.slug).then((t=>{T(!1),t.success&&(e(),B({status:"success"})),t.error&&(r(new Error(K(t.error))),B({status:"error",message:K(t.error)}))})).catch((()=>{T(!1),r(new Error(t("Error validating this provider"))),B({status:"error",message:t("Error validating this provider")})}))}else r(new Error(t("Provider URL is not valid"))),B({status:""}),D(!1)}))),[I.slug,K,t]);return(0,b.jsx)(a.FE,{className:`add_provider ${e}`,resolve:W.awaitStores(["chainStore"]),children:(0,b.jsx)(a.Ar.Base,{leftFooterButton:{onClick:Y,children:"Cancel"},onBack:z,rightFooterButton:{block:!0,disabled:U(),loading:R,onClick:X,children:"Save"},showBackButton:!0,showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!0,subHeaderIcons:[{icon:(0,b.jsx)(s.Z,{})}],subHeaderPaddingVertical:!0,title:t("Add new provider"),children:(0,b.jsxs)("div",{className:"add_provider__container",children:[(0,b.jsx)("div",{className:"description",children:t("Currently support WSS provider for Substrate networks and HTTP provider for EVM network")}),(0,b.jsx)(k.Z,{form:P,initialValues:N(),children:(0,b.jsxs)("div",{className:"add_provider__attributes_container",children:[(0,b.jsx)(k.Z.Item,{name:"provider",rules:[{validator:J}],statusHelpAsTooltip:!0,validateTrigger:["onBlur"],children:(0,b.jsx)(f.Z,{disabled:F,placeholder:t("Provider URL"),prefix:(0,b.jsx)(h.Z,{customSize:"24px",iconColor:C["gray-4"],phosphorIcon:x.Z,type:"phosphor",weight:"bold"}),suffix:G()})}),(0,b.jsxs)(E.Z,{gutter:C.paddingSM,children:[(0,b.jsx)(L.Z,{span:16,children:(0,b.jsx)(k.Z.Item,{name:"name",children:(0,b.jsx)(f.Z,{disabled:!0,placeholder:t("Network name"),prefix:(0,b.jsx)(h.Z,{customSize:"24px",iconColor:C["gray-4"],phosphorIcon:v.Z,type:"phosphor",weight:"bold"}),tooltip:t("Network name"),tooltipPlacement:"topLeft",value:I.name})})}),(0,b.jsx)(L.Z,{span:8,children:(0,b.jsx)(k.Z.Item,{name:"symbol",children:(0,b.jsx)(f.Z,{disabled:!0,placeholder:t("Symbol"),tooltip:t("Symbol"),tooltipPlacement:"topLeft",value:I.slug})})})]}),(0,b.jsx)(k.Z.Item,{name:"chainType",children:(0,b.jsx)(f.Z,{disabled:!0,placeholder:t("Network type"),tooltip:t("Network type"),tooltipPlacement:"topLeft",value:I.slug})})]})})]})})})})).withConfig({displayName:"AddProvider",componentId:"sc-1rrdntg-0"})((({theme:{token:e}})=>({".add_provider__container":{padding:e.padding},".description":{padding:e.padding,paddingTop:0,textAlign:"center",color:e.colorTextDescription,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6},".ant-btn >span":{fontSize:e.fontSizeLG},".add_provider__attributes_container":{display:"flex",flexDirection:"column",gap:e.marginSM},".ant-input-container .ant-input-suffix":{marginRight:0,marginLeft:e.margin+2},".ant-form-item":{marginBottom:0},".ant-input-container .ant-input-affix-wrapper":{overflow:"hidden"},".ant-form-item-with-help .ant-form-item-explain":{paddingBottom:0}})))},34878:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2784),o=n(21890),i=n(76712),a=new Map;a.set("bold",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M92.9,166.1a50.7,50.7,0,0,1,70.2,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M59,132.1a98.8,98.8,0,0,1,138,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M25.1,98.2a146.6,146.6,0,0,1,205.8,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("circle",{cx:"128",cy:"200",r:"16"}))})),a.set("duotone",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z",opacity:"0.2"}),r.createElement("path",{d:"M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M246.9,80.5a15.6,15.6,0,0,0-6.2-10.9c-66.4-50.1-159-50.1-225.3-.1a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3l103,121.3a15.9,15.9,0,0,0,24.2,0l103-121.4A16.4,16.4,0,0,0,246.9,80.5Z"}))})),a.set("light",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M92.9,166.1a50.7,50.7,0,0,1,70.2,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M59,132.1a98.8,98.8,0,0,1,138,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M25.1,98.2a146.6,146.6,0,0,1,205.8,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("circle",{cx:"128",cy:"200",r:"10"}))})),a.set("thin",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M92.9,166.1a50.7,50.7,0,0,1,70.2,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M59,132.1a98.8,98.8,0,0,1,138,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M25.1,98.2a146.6,146.6,0,0,1,205.8,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("circle",{cx:"128",cy:"200",r:"8"}))})),a.set("regular",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M92.9,166.1a50.7,50.7,0,0,1,70.2,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M59,132.1a98.8,98.8,0,0,1,138,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M25.1,98.2a146.6,146.6,0,0,1,205.8,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("circle",{cx:"128",cy:"200",r:"12"}))}));var s=function(e,t){return(0,o._)(e,t,a)},l=(0,r.forwardRef)((function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:s}))}));l.displayName="WifiHigh";const d=l},34070:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2784),o=n(21890),i=n(76712),a=new Map;a.set("bold",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M25,98.2A147.2,147.2,0,0,1,72.4,66.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M59,132.1A98.3,98.3,0,0,1,108,106",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M117,56.4c3.6-.3,7.3-.4,11-.4A145.6,145.6,0,0,1,230.9,98.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M167.8,112.3A99.2,99.2,0,0,1,197,132.1",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("circle",{cx:"128",cy:"200",r:"16"}))})),a.set("duotone",(function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z",opacity:"0.2"}),r.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M166.6,170.5,134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6a8.1,8.1,0,0,1,1.2-11.7A177.8,177.8,0,0,1,60.1,53.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M94.2,43.2A179.3,179.3,0,0,1,235.8,75.9,8,8,0,0,1,237,87.5l-49.5,58.4",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42,45.4l4.7,5.1A182.8,182.8,0,0,0,15.3,69.6,15.6,15.6,0,0,0,9.1,80.5a16.3,16.3,0,0,0,3.8,12.3L115.8,214a15.9,15.9,0,0,0,24.3.1l26.7-31.5,35.3,38.8A8.2,8.2,0,0,0,208,224a7.8,7.8,0,0,0,5.4-2.1,8,8,0,0,0,.6-11.3Z"}),r.createElement("path",{d:"M246.9,80.5a15.6,15.6,0,0,0-6.2-10.9A188,188,0,0,0,92.6,35.3a8.3,8.3,0,0,0-6.1,5.4,8.2,8.2,0,0,0,1.7,7.9l93.4,102.7a8.3,8.3,0,0,0,5.9,2.6h.2a8.3,8.3,0,0,0,5.9-2.8l49.6-58.4A16.4,16.4,0,0,0,246.9,80.5Z"}))})),a.set("light",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M107.1,57.5A143.8,143.8,0,0,1,128,56,145.6,145.6,0,0,1,230.9,98.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M25.1,98.2A145.7,145.7,0,0,1,72.4,66.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M152.1,107A97.5,97.5,0,0,1,197,132.1",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M59,132.1A98.3,98.3,0,0,1,108,106",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("circle",{cx:"128",cy:"200",r:"10"}))})),a.set("thin",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M107.1,57.5A143.8,143.8,0,0,1,128,56,145.6,145.6,0,0,1,230.9,98.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M25.1,98.2A145.7,145.7,0,0,1,72.4,66.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M152.1,107A97.5,97.5,0,0,1,197,132.1",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M59,132.1A98.3,98.3,0,0,1,108,106",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("circle",{cx:"128",cy:"200",r:"8"}))})),a.set("regular",(function(e){return r.createElement(r.Fragment,null,r.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M107.1,57.5A143.8,143.8,0,0,1,128,56,145.6,145.6,0,0,1,230.9,98.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M25.1,98.2A145.7,145.7,0,0,1,72.4,66.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M152.1,107A97.5,97.5,0,0,1,197,132.1",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M59,132.1A98.7,98.7,0,0,1,108,106",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("circle",{cx:"128",cy:"200",r:"12"}))}));var s=function(e,t){return(0,o._)(e,t,a)},l=(0,r.forwardRef)((function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:s}))}));l.displayName="WifiSlash";const d=l}}]);