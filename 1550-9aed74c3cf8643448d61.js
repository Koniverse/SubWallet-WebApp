"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[1550],{11550:(e,s,t)=>{t.r(s),t.d(s,{default:()=>q});var n=t(89335),i=t(53334),r=t(80855),a=t(80588),o=t(59566),l=t(68627),c=t(3612),d=t(5772),h=t(81620),u=t(28973),g=t(28347),m=t(21462),p=t(47088),x=t(92936),j=t(27178),b=t(99656),f=t(12162),H=t(19138),v=t(12798),w=t(91593),Z=t(92280),k=t(72779),S=t.n(k),y=t(18332),C=t(8175),_=t(2784),I=t(21427),E=t(38338),N=t(52322);const R=(0,N.jsx)(b.Z,{phosphorIcon:y.Z,weight:"fill"}),A="import-qr-code-scanner-modal",q=(0,E.ZP)((e=>{(0,m.Z)();const{className:s}=e,{t}=(0,I.$)(),{goHome:k}=(0,p.Z)(),y=(0,h.Z)(),E=(0,d.Z)(),q=(0,u.Z)(l.Rt),{inactiveModal:z}=(0,_.useContext)(f.t),{isWebUI:B}=(0,_.useContext)(c.sG),[D,L]=(0,_.useState)({}),[P,Q]=(0,_.useState)(!1),W=(0,_.useCallback)((e=>{Q(!0),z(A),L({message:"",status:"success"}),setTimeout((()=>{var s;(s=e,new Promise(((e,t)=>{(0,x.kz)(s.genesisHash,s.content).then((({isEthereum:s,isValid:n})=>{n?e(s):t(new Error("Invalid qr"))})).catch((e=>{t(e)}))}))).then((s=>{(0,x.mr)({name:y,isAllow:!0,secretKey:e.content,publicKey:e.genesisHash,isEthereum:s}).then((({errors:e,success:s})=>{s?(L({}),E()):L({message:e[0].message,status:"error"})})).catch((e=>{L({message:e.message,status:"error"})})).finally((()=>{Q(!1)}))})).catch((e=>{L({message:e.message,status:"error"}),Q(!1)}))}),300)}),[y,E,z]),{onClose:O,onError:T,onSuccess:$,openCamera:G}=(0,g.Z)(A,j.jD,L,W),F={children:t(P?"Creating":"Scan the QR code"),icon:R,onClick:G,loading:P};return(0,N.jsx)(i.FE,{className:S()(s),children:(0,N.jsx)(i.Ar.Base,{onBack:q,...B?{headerList:["Simple"],showWebHeader:!0}:{rightFooterButton:F,showBackButton:!0,subHeaderPaddingVertical:!0,showSubHeader:!0,subHeaderCenter:!0,subHeaderBackground:"transparent"},subHeaderIcons:[{icon:(0,N.jsx)(r.Z,{}),onClick:k}],title:t("Import by QR code"),children:(0,N.jsxs)("div",{className:S()("container",{"__web-ui":B}),children:[(0,N.jsx)("div",{className:"sub-title",children:t("Please make sure that you have granted SubWallet the access to your device's camera.")}),(0,N.jsx)("div",{className:"logo",children:(0,N.jsx)(a.Z,{leftLogo:(0,N.jsx)(H.Z,{height:56,shape:"squircle",src:n.ZP.subwallet,width:56}),linkIcon:(0,N.jsx)(b.Z,{phosphorIcon:C.Z,size:"md"}),rightLogo:(0,N.jsx)(H.Z,{height:56,shape:"squircle",src:n.ss.__qr_code__,width:56})})}),(0,N.jsx)("div",{className:"instruction",children:(0,N.jsxs)("div",{className:"instruction",children:[(0,N.jsxs)("span",{children:[t('Click the "Scan QR" button, or read ')," "]}),(0,N.jsx)("a",{className:"link",href:"#",children:t("this instruction")}),(0,N.jsx)("span",{children:", "}),(0,N.jsx)("span",{children:t("for more details.")})]})}),(0,N.jsx)(v.Z.Item,{help:D.message,validateStatus:D.status}),(0,N.jsx)(w.Z,{className:s,id:A,isError:!!D.status,onClose:O,onError:T,onSuccess:$,overlay:D.message&&(0,N.jsx)(o.Z,{message:D.message}),title:t("Scan QR")}),B&&(0,N.jsx)(Z.Z,{...F,className:"action"})]})})})})).withConfig({displayName:"ImportQrCode",componentId:"sc-1frgihv-0"})((({theme:{token:e}})=>({".__web-ui":{maxWidth:"60%",margin:"0 auto"},".container":{padding:e.padding,"& .ant-btn":{width:"100%",marginTop:36}},".sub-title":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".logo":{margin:`${e.controlHeightLG}px 0`,"--logo-size":e.controlHeightLG+e.controlHeightXS},".instruction":{padding:`0 ${e.padding}px`,marginBottom:e.margin,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".link":{color:e.colorLink,textDecoration:"underline"}})))},27178:(e,s,t)=>{t.d(s,{H9:()=>d,IJ:()=>l,jD:()=>c});var n=t(36533),i=t(74076),r=t(68774),a=t(90107),o=t(94175);const l=e=>{const s=e.split(":"),t=s[0];let i="",r="",a=[],o=!1;if(t===n.fD)[i,r,...a]=s.slice(1);else{if(t!==n.jq)return null;[i,...a]=s.slice(1),r=i.split("@")[1]||"",i=i.substring(0,42),o=!0}return{content:i,genesisHash:r,isAddress:!0,isEthereum:o,name:a.length?a.join(":"):void 0,isReadOnly:!1}},c=e=>{const s=e.split(":");let t="",i="",r=[];return s[0]!==n.WI?null:([t,i,...r]=s.slice(1),{content:t,genesisHash:i,isAddress:!1,isEthereum:!1,name:r.length?r.join(":"):void 0,isReadOnly:!1})},d=e=>{if(!e)return null;if((0,r.u)(e))return{content:e,genesisHash:e,isAddress:!0,isEthereum:!0,name:void 0,isReadOnly:!0};try{return(0,i.vq)(e)?null:{content:(0,a.m)((0,o.m)(e)),genesisHash:e,isAddress:!0,isEthereum:!1,name:void 0,isReadOnly:!0}}catch(e){return console.log(e),null}}}}]);