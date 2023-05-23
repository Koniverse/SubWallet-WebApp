"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[3772],{13772:(e,t,s)=>{s.r(t),s.d(t,{default:()=>B});var n=s(53334),a=s(83135),i=s(80855),r=s(48118),o=s(57343),c=s(68627),l=s(3612),d=s(5772),m=s(81620),p=s(28973),u=s(43246),h=s(70497),g=s(21462),x=s(47088),f=s(92936),w=s(99656),b=s(12798),j=s(25356),Z=s(55204),y=s(92280),I=s(72779),S=s.n(I),k=s(90837),v=s(2784),C=s(38338),N=s(52322);const H=(0,N.jsx)(w.Z,{phosphorIcon:k.Z,weight:"fill"}),_="seed-phrase",T=[{title:"What is a seed phrase?",description:"Seed phrase is a 12- or 24-word phrase that can be used to restore your wallet.",type:"warning"},{title:"Is it safe to enter it into SubWallet?",description:"Yes. It will be stored locally and never leave your device without your explicit permission.",type:"warning"}],B=(0,C.ZP)((({className:e})=>{(0,g.Z)();const{t}=(0,u.Z)(),{goHome:s}=(0,x.Z)(),{isWebUI:w}=(0,v.useContext)(l.sG),I=(0,d.Z)(),k=(0,p.Z)(c.Rt),C=(0,m.Z)(),B=(0,v.useRef)(),[E]=b.Z.useForm(),[F,P]=(0,v.useState)([o.Q,o.E]),[W,z]=(0,v.useState)({}),[A,L]=(0,v.useState)(!1),[$,D]=(0,v.useState)(!1),[G,Q]=(0,v.useState)(!1),[R,V]=(0,v.useState)(""),q=(0,v.useCallback)((e=>{Q(!0);const t=e.target.value;V(t)}),[]),M=(0,v.useCallback)((()=>{const e=R.trimStart().trimEnd();e&&(D(!0),setTimeout((()=>{(0,f.u$)({name:C,suri:e,isAllowed:!0,types:F}).then((()=>{I()})).catch((e=>{z({status:"error",message:e.message})})).finally((()=>{D(!1)}))}),300))}),[R,C,F,I]);(0,v.useEffect)((()=>{let e=!0;B.current&&clearTimeout(B.current);const s=R.trimStart().trimEnd();return e&&(s?(L(!0),z({status:"validating",message:""}),B.current=setTimeout((()=>{(0,f.yq)(s,[o.Q,o.E]).then((t=>{e&&z({})})).catch((s=>{e&&z({status:"error",message:t("Invalid mnemonic seed")})})).finally((()=>{e&&L(!1)}))}),300)):G&&z({status:"error",message:t("Mnemonic needs to contain 12, 15, 18, 21, 24 words")})),()=>{e=!1}}),[R,G,t]),(0,h.Z)(E,_);const U={children:t(A?"Validating":"Import account"),icon:H,onClick:M,disabled:!R||!!W.status||!F.length,loading:A||$};return(0,N.jsx)(n.FE,{className:S()(e),children:(0,N.jsx)(n.Ar.Base,{onBack:k,...w?{headerList:["Simple"],showWebHeader:!0}:{rightFooterButton:U,showBackButton:!0,subHeaderPaddingVertical:!0,showSubHeader:!0,subHeaderCenter:!0,subHeaderBackground:"transparent"},subHeaderIcons:[{icon:(0,N.jsx)(i.Z,{}),onClick:s}],title:t("Import from seed phrase"),children:(0,N.jsxs)("div",{className:S()("container",{"__web-ui":w}),children:[(0,N.jsxs)("div",{className:"secret-phrase-container",children:[(0,N.jsx)("div",{className:"description",children:t("To import an existing Polkdot wallet, please enter the recovery seed phrase here:")}),(0,N.jsxs)(b.Z,{className:"form-container",form:E,name:"import-seed-phrase-form",children:[(0,N.jsx)(b.Z.Item,{name:_,validateStatus:W.status,children:(0,N.jsx)(j.Z.TextArea,{className:"seed-phrase-input",onChange:q,placeholder:t("Secret phrase"),statusHelp:W.message})}),(0,N.jsx)(b.Z.Item,{children:(0,N.jsx)(a.Z,{selectedItems:F,setSelectedItems:P,withLabel:!0})}),w&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(b.Z.Item,{children:(0,N.jsx)(Z.Z,{children:(0,N.jsx)("span",{className:"__option-label",children:"Import multiple accounts from this seed phrase"})})}),(0,N.jsx)(y.Z,{...U,className:"action"})]})]})]}),w&&(0,N.jsx)(r.Z,{contents:T})]})})})})).withConfig({displayName:"ImportSeedPhrase",componentId:"sc-30xyr2-0"})((({theme:{token:e}})=>({".container":{"&.__web-ui":{display:"flex",justifyContent:"center",maxWidth:"60%",margin:"0 auto","& .ant-btn":{width:"100%",marginTop:24}},".secret-phrase-container":{padding:e.padding},".ant-form-item:last-child":{marginBottom:0},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".form-container":{marginTop:e.margin},".seed-phrase-input":{textarea:{resize:"none",height:6*e.sizeLG+"px !important"}}}})))},48118:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(53334),a=s(72779),i=s.n(a),r=s(21427),o=s(38338),c=s(52322);const l=(0,o.ZP)((({className:e,contents:t})=>{const{t:s}=(0,r.$)();return t.length<=0?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("div",{className:i()("instruction-container",e),children:t.map(((e,t)=>(0,c.jsx)(n.e3,{description:"string"==typeof e.description?s(e.description):e.description,title:s(e.title),type:e.type||"warning"})))})})).withConfig({displayName:"InstructionContainer",componentId:"sc-1tjn6f7-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",gap:10})))}}]);