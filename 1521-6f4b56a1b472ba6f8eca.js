"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[1521],{11521:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var n=s(53334),a=s(80855),i=s(5769),o=s(57343),r=s(68627),c=s(67145),l=s(5772),d=s(81620),h=s(99828),u=s(43246),p=s(21462),y=s(47088),f=s(92936),m=s(48062),g=s(99656),w=s(12162),x=s(92280),v=s(72779),b=s.n(v),k=s(75720),j=s(2784),Z=s(35185),C=s(73557),H=s(38338),N=s(3612),S=s(48118),_=s(52322);const I=(0,_.jsx)(g.Z,{phosphorIcon:k.Z,weight:"fill"}),B=[{title:"What is a recovery phrase?",description:"Recovery phrase is a 12- or 24-word phrase that can be used to restore your wallet. The recovery phrase alone can give anyone full access to your wallet and the funds.",type:"warning"},{title:"What if I lose the recovery phrase?",description:"There is no way to get back your recovery phrase if you lose it. Make sure you store them at someplace safe which is accessible only to you.",type:"warning"}],T=(0,H.ZP)((({className:e})=>{var t;(0,p.Z)();const{t:s}=(0,u.Z)(),g=(0,C.TH)(),v=(0,h.Z)(),k=(0,C.s0)(),{goHome:H}=(0,y.Z)(),{activeModal:T}=(0,j.useContext)(w.t),{isWebUI:P}=(0,j.useContext)(N.sG),W=(0,l.Z)(),A=(0,d.Z)(),{accounts:M}=(0,Z.v9)((e=>e.accountState)),[$]=(0,j.useState)((null===(t=g.state)||void 0===t?void 0:t.accountTypes)||[]),[D,E]=(0,j.useState)(""),[F,z]=(0,j.useState)(!1),Y=(0,j.useMemo)((()=>(0,m.MS)(M)),[M]),G=(0,j.useCallback)((()=>{k(c.Y),Y||T(r.S$)}),[k,T,Y]),K=(0,j.useCallback)((()=>{D&&(z(!0),setTimeout((()=>{(0,f.u$)({name:A,suri:D,types:$,isAllowed:!0}).then((()=>{W()})).catch((e=>{v({message:e.message,type:"error"})})).finally((()=>{z(!1)}))}),500))}),[D,A,$,W,v]);(0,j.useEffect)((()=>{(0,f.Ok)(void 0,void 0,[o.Q,o.E]).then((e=>{const t=e.seed;E(t)})).catch((e=>{console.error(e)}))}),[]);const L={children:s("I have saved it somewhere safe"),icon:I,onClick:K,disabled:!D,loading:F};return(0,_.jsx)(n.FE,{className:b()(e),resolve:new Promise((e=>!!D&&e(!0))),children:(0,_.jsx)(n.Ar.Base,{onBack:G,...P?{headerList:["Simple"],showWebHeader:!0}:{rightFooterButton:L,showBackButton:!0,subHeaderPaddingVertical:!0,showSubHeader:!0,subHeaderCenter:!0,subHeaderBackground:"transparent"},subHeaderIcons:[{icon:(0,_.jsx)(a.Z,{}),onClick:H}],title:s("Your recovery phrase"),children:(0,_.jsxs)("div",{className:b()("container",{"__web-ui":P}),children:[(0,_.jsxs)("div",{className:"seed-phrase-container",children:[(0,_.jsx)("div",{className:"description",children:s("Keep your recovery phrase in a safe place, and never disclose it. Anyone with this phrase can take control of your assets.")}),(0,_.jsx)(i.Z,{seedPhrase:D}),P&&(0,_.jsx)(x.Z,{...L,className:"action"})]}),P&&(0,_.jsx)(S.Z,{contents:B})]})})})})).withConfig({displayName:"NewSeedPhrase",componentId:"sc-1kgbkpw-0"})((({theme:{token:e}})=>({".container":{".seed-phrase-container":{padding:e.padding,textAlign:"center",flex:1},"&.__web-ui":{display:"flex",justifyContent:"center",maxWidth:"60%",margin:"0 auto",".action":{marginTop:40,width:"100%"},".instruction-container":{flex:1,display:"flex",flexDirection:"column",gap:10}}},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,marginBottom:e.margin}})))},48118:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(53334),a=s(72779),i=s.n(a),o=s(96217),r=s(38338),c=s(52322);const l=(0,r.ZP)((({className:e,contents:t})=>{const{t:s}=(0,o.$)();return t.length<=0?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("div",{className:i()("instruction-container",e),children:t.map(((e,t)=>(0,c.jsx)(n.e3,{title:s(e.title),description:"string"==typeof e.description?s(e.description):e.description,type:e.type||"warning"})))})})).withConfig({displayName:"InstructionContainer",componentId:"sc-1tjn6f7-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",gap:10})))}}]);