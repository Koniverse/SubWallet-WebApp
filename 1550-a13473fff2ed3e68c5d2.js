"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[1550],{11550:(e,s,t)=>{t.r(s),t.d(s,{default:()=>q});var n=t(89335),i=t(51076),r=t(80855),o=t(80588),a=t(59566),l=t(68627),c=t(3612),d=t(5772),h=t(81620),u=t(28973),g=t(28347),m=t(21462),p=t(47088),x=t(92936),j=t(27178),f=t(99656),H=t(12162),v=t(88976),Z=t(12798),b=t(91593),y=t(92280),k=t(72779),w=t.n(k),C=t(18332),S=t(8175),I=t(2784),E=t(96217),N=t(38338),_=t(52322);const A=(0,_.jsx)(f.Z,{phosphorIcon:C.Z,weight:"fill"}),R="import-qr-code-scanner-modal",q=(0,N.ZP)((e=>{(0,m.Z)();const{className:s}=e,{t}=(0,E.$)(),{goHome:k}=(0,p.Z)(),C=(0,h.Z)(),N=(0,d.Z)(),q=(0,u.Z)(l.Rt),{inactiveModal:z}=(0,I.useContext)(H.t),{isWebUI:D}=(0,I.useContext)(c.sG),[L,O]=(0,I.useState)({}),[P,Q]=(0,I.useState)(!1),T=(0,I.useCallback)((e=>{Q(!0),z(R),O({message:"",status:"success"}),setTimeout((()=>{var s;(s=e,new Promise(((e,t)=>{(0,x.kz)(s.genesisHash,s.content).then((({isEthereum:s,isValid:n})=>{n?e(s):t(new Error("Invalid qr"))})).catch((e=>{t(e)}))}))).then((s=>{(0,x.mr)({name:C,isAllow:!0,secretKey:e.content,publicKey:e.genesisHash,isEthereum:s}).then((({errors:e,success:s})=>{s?(O({}),N()):O({message:e[0].message,status:"error"})})).catch((e=>{O({message:e.message,status:"error"})})).finally((()=>{Q(!1)}))})).catch((e=>{O({message:e.message,status:"error"}),Q(!1)}))}),300)}),[C,N,z]),{onClose:W,onError:$,onSuccess:B,openCamera:G}=(0,g.Z)(R,j.jD,O,T),F={children:t(P?"Creating":"Scan the QR code"),icon:A,onClick:G,loading:P};return(0,_.jsx)(i.FE,{className:w()(s),children:(0,_.jsx)(i.Ar.WithSubHeaderOnly,{onBack:q,...!D&&{rightFooterButton:F},subHeaderIcons:[{icon:(0,_.jsx)(r.Z,{}),onClick:k}],title:t("Import your wallet by QR"),children:(0,_.jsxs)("div",{className:w()("container"),children:[(0,_.jsx)("div",{className:"sub-title",children:t("Please make sure that you have granted SubWallet the access to your device's camera.")}),(0,_.jsx)("div",{className:"logo",children:(0,_.jsx)(o.Z,{leftLogo:(0,_.jsx)(v.Z,{height:56,shape:"squircle",src:n.ZP.subwallet,width:56}),linkIcon:(0,_.jsx)(f.Z,{phosphorIcon:S.Z,size:"md"}),rightLogo:(0,_.jsx)(v.Z,{height:56,shape:"squircle",src:n.ss.__qr_code__,width:56})})}),(0,_.jsx)("div",{className:"instruction",children:(0,_.jsxs)("div",{className:"instruction",children:[(0,_.jsxs)("span",{children:[t('Click the "Scan the QR code" button, or read ')," "]}),(0,_.jsx)("a",{className:"link",href:"#",children:t("this instructions")}),(0,_.jsx)("span",{children:", "}),(0,_.jsx)("span",{children:t("for more details.")})]})}),(0,_.jsx)(Z.Z.Item,{help:L.message,validateStatus:L.status}),(0,_.jsx)(b.Z,{className:s,id:R,isError:!!L.status,onClose:W,onError:$,onSuccess:B,overlay:L.message&&(0,_.jsx)(a.Z,{message:L.message})}),D&&(0,_.jsx)(y.Z,{...F,className:"action"})]})})})})).withConfig({displayName:"ImportQrCode",componentId:"sc-1frgihv-0"})((({theme:{token:e}})=>({".container":{padding:e.padding,"& .ant-btn":{width:"100%",marginTop:36}},".sub-title":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".logo":{margin:`${e.controlHeightLG}px 0`,"--logo-size":e.controlHeightLG+e.controlHeightXS},".instruction":{padding:`0 ${e.padding}px`,marginBottom:e.margin,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".link":{color:e.colorLink,textDecoration:"underline"}})))},27178:(e,s,t)=>{t.d(s,{H9:()=>d,IJ:()=>l,jD:()=>c});var n=t(36533),i=t(74076),r=t(68774),o=t(90107),a=t(94175);const l=e=>{const s=e.split(":"),t=s[0];let i="",r="",o=[],a=!1;if(t===n.fD)[i,r,...o]=s.slice(1);else{if(t!==n.jq)return null;[i,...o]=s.slice(1),r=i.split("@")[1]||"",i=i.substring(0,42),a=!0}return{content:i,genesisHash:r,isAddress:!0,isEthereum:a,name:o.length?o.join(":"):void 0,isReadOnly:!1}},c=e=>{const s=e.split(":");let t="",i="",r=[];return s[0]!==n.WI?null:([t,i,...r]=s.slice(1),{content:t,genesisHash:i,isAddress:!1,isEthereum:!1,name:r.length?r.join(":"):void 0,isReadOnly:!1})},d=e=>{if(!e)return null;if((0,r.u)(e))return{content:e,genesisHash:e,isAddress:!0,isEthereum:!0,name:void 0,isReadOnly:!0};try{return(0,i.vq)(e)?null:{content:(0,o.m)((0,a.m)(e)),genesisHash:e,isAddress:!0,isEthereum:!1,name:void 0,isReadOnly:!0}}catch(e){return console.log(e),null}}}}]);