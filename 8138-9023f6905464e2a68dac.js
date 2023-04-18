"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[8138],{88138:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var i=s(51076),a=s(80855),n=s(48118),r=s(57343),o=s(68627),l=s(3612),c=s(5772),d=s(81620),u=s(28973),p=s(43246),m=s(70497),h=s(21462),g=s(47088),f=s(92936),x=s(99656),y=s(12798),v=s(25356),b=s(92280),k=s(72779),w=s.n(k),Z=s(90837),j=s(2784),S=s(38338),C=s(52322);const I=(0,C.jsx)(x.Z,{phosphorIcon:Z.Z,weight:"fill"}),N="private-key",_=[{title:"What is a private key?",description:"A private key is like a password — a string of letters and numbers — that can be used to restore your wallet."},{title:"Is it safe to enter it into SubWallet?",description:"Yes. It will be stored locally and never leave your device without your explicit permission."}],H=(0,S.ZP)((({className:e})=>{(0,h.Z)();const{t}=(0,p.Z)(),{goHome:s}=(0,g.Z)(),x=(0,c.Z)(),k=(0,u.Z)(o.Rt),{isWebUI:Z}=(0,j.useContext)(l.sG),S=(0,j.useRef)(),[H,A]=(0,j.useState)({}),[T,E]=(0,j.useState)(!1),[P,z]=(0,j.useState)(!1),[F,W]=(0,j.useState)(!1),[$,q]=(0,j.useState)(""),[B,D]=(0,j.useState)(""),[G]=y.Z.useForm(),K=(0,d.Z)();(0,m.Z)(G,N);const R=(0,j.useCallback)((e=>{W(!0),D("");const t=e.target.value;q(t)}),[]),L=(0,j.useCallback)((()=>{$&&(z(!0),(0,f.u$)({name:K,suri:$,isAllowed:!0,types:[r.E]}).then((()=>{x()})).catch((e=>{A({status:"error",message:e.message})})).finally((()=>{z(!1)})))}),[$,K,x]);(0,j.useEffect)((()=>{let e=!0;return S.current&&clearTimeout(S.current),e&&($?(E(!0),A({status:"validating",message:""}),S.current=setTimeout((()=>{(0,f.Sh)($,[r.E]).then((({addressMap:t,autoAddPrefix:s})=>{e&&(s&&D(`0x${$}`),A({}))})).catch((t=>{e&&A({status:"error",message:t.message})})).finally((()=>{e&&E(!1)}))}),300)):F&&A({status:"error",message:"Seed phrase is required"})),()=>{e=!1}}),[$,F]);const M={children:t(T?"Validating":"Import account"),icon:I,onClick:L,disabled:!$||!!H.status,loading:T||P};return(0,C.jsx)(i.FE,{className:w()(e),children:(0,C.jsx)(i.Ar.WithSubHeaderOnly,{onBack:k,...!Z&&{rightFooterButton:M},subHeaderIcons:[{icon:(0,C.jsx)(a.Z,{}),onClick:s}],title:t("Import via Private Key"),children:(0,C.jsxs)("div",{className:w()("container",{"__web-ui":Z}),children:[(0,C.jsxs)("div",{className:"import-container",children:[(0,C.jsx)("div",{className:"description",children:t("To import an existing wallet, please enter the private key here")}),(0,C.jsxs)(y.Z,{className:"form-container",form:G,name:"import-private-key-form",children:[(0,C.jsx)(y.Z.Item,{name:N,validateStatus:H.status,children:(0,C.jsx)(v.Z.TextArea,{className:"private-key-input",onChange:R,placeholder:t("Enter or paste private key"),statusHelp:H.message,value:B||$||""})}),Z&&(0,C.jsx)(b.Z,{...M,className:"action"})]})]}),Z&&(0,C.jsx)(n.Z,{contents:_})]})})})})).withConfig({displayName:"ImportPrivateKey",componentId:"sc-1bax2qa-0"})((({theme:{token:e}})=>({".container":{"&.__web-ui":{display:"flex",justifyContent:"center","& > *":{flex:1},"& .ant-btn":{width:"100%"}},".import-container":{padding:e.padding},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".form-container":{marginTop:e.margin},".private-key-input":{textarea:{resize:"none",height:6*e.sizeLG+"px !important"}}}})))},48118:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(51076),a=s(72779),n=s.n(a),r=s(96217),o=s(38338),l=s(52322);const c=(0,o.ZP)((({className:e,contents:t})=>{const{t:s}=(0,r.$)();return t.length<=0?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)("div",{className:n()("instruction-container",e),children:t.map(((e,t)=>(0,l.jsx)(i.e3,{title:s(e.title),description:"string"==typeof e.description?s(e.description):e.description,type:e.type||"warning"})))})})).withConfig({displayName:"InstructionContainer",componentId:"sc-1tjn6f7-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",gap:10})))}}]);