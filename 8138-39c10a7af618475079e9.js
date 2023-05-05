"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[8138],{88138:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var a=s(53334),i=s(80855),n=s(48118),r=s(57343),o=s(68627),l=s(3612),c=s(5772),d=s(81620),u=s(28973),p=s(43246),m=s(70497),h=s(21462),g=s(47088),f=s(92936),x=s(99656),y=s(12798),b=s(25356),v=s(92280),k=s(72779),w=s.n(k),Z=s(90837),j=s(2784),S=s(38338),C=s(52322);const H=(0,C.jsx)(x.Z,{phosphorIcon:Z.Z,weight:"fill"}),I="private-key",N=[{title:"What is a private key?",description:"A private key is like a password — a string of letters and numbers — that can be used to restore your wallet."},{title:"Is it safe to enter it into SubWallet?",description:"Yes. It will be stored locally and never leave your device without your explicit permission."}],_=(0,S.ZP)((({className:e})=>{(0,h.Z)();const{t}=(0,p.Z)(),{goHome:s}=(0,g.Z)(),x=(0,c.Z)(),k=(0,u.Z)(o.Rt),{isWebUI:Z}=(0,j.useContext)(l.sG),S=(0,j.useRef)(),[_,A]=(0,j.useState)({}),[B,P]=(0,j.useState)(!1),[T,E]=(0,j.useState)(!1),[W,z]=(0,j.useState)(!1),[F,$]=(0,j.useState)(""),[q,D]=(0,j.useState)(""),[G]=y.Z.useForm(),K=(0,d.Z)();(0,m.Z)(G,I);const L=(0,j.useCallback)((e=>{z(!0),D("");const t=e.target.value;$(t)}),[]),R=(0,j.useCallback)((()=>{F&&(E(!0),(0,f.u$)({name:K,suri:F,isAllowed:!0,types:[r.E]}).then((()=>{x()})).catch((e=>{A({status:"error",message:e.message})})).finally((()=>{E(!1)})))}),[F,K,x]);(0,j.useEffect)((()=>{let e=!0;return S.current&&clearTimeout(S.current),e&&(F?(P(!0),A({status:"validating",message:""}),S.current=setTimeout((()=>{(0,f.Sh)(F,[r.E]).then((({addressMap:t,autoAddPrefix:s})=>{e&&(s&&D(`0x${F}`),A({}))})).catch((t=>{e&&A({status:"error",message:t.message})})).finally((()=>{e&&P(!1)}))}),300)):W&&A({status:"error",message:"Seed phrase is required"})),()=>{e=!1}}),[F,W]);const V={children:t(B?"Validating":"Import account"),icon:H,onClick:R,disabled:!F||!!_.status,loading:B||T};return(0,C.jsx)(a.FE,{className:w()(e),children:(0,C.jsx)(a.Ar.Base,{onBack:k,...Z?{headerList:["Simple"],showWebHeader:!0}:{rightFooterButton:V,showBackButton:!0,subHeaderPaddingVertical:!0,showSubHeader:!0,subHeaderCenter:!0,subHeaderBackground:"transparent"},subHeaderIcons:[{icon:(0,C.jsx)(i.Z,{}),onClick:s}],title:t("Import via Private Key"),children:(0,C.jsxs)("div",{className:w()("container",{"__web-ui":Z}),children:[(0,C.jsxs)("div",{className:"import-container",children:[(0,C.jsx)("div",{className:"description",children:t("To import an existing wallet, please enter the private key here")}),(0,C.jsxs)(y.Z,{className:"form-container",form:G,name:"import-private-key-form",children:[(0,C.jsx)(y.Z.Item,{name:I,validateStatus:_.status,children:(0,C.jsx)(b.Z.TextArea,{className:"private-key-input",onChange:L,placeholder:t("Enter or paste private key"),statusHelp:_.message,value:q||F||""})}),Z&&(0,C.jsx)(v.Z,{...V,className:"action"})]})]}),Z&&(0,C.jsx)(n.Z,{contents:N})]})})})})).withConfig({displayName:"ImportPrivateKey",componentId:"sc-1bax2qa-0"})((({theme:{token:e}})=>({".container":{"&.__web-ui":{display:"flex",justifyContent:"center",maxWidth:"60%",margin:"0 auto","& > *":{flex:1},"& .ant-btn":{width:"100%"}},".import-container":{padding:e.padding},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".form-container":{marginTop:e.margin},".private-key-input":{textarea:{resize:"none",height:6*e.sizeLG+"px !important"}}}})))},48118:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(53334),i=s(72779),n=s.n(i),r=s(96217),o=s(38338),l=s(52322);const c=(0,o.ZP)((({className:e,contents:t})=>{const{t:s}=(0,r.$)();return t.length<=0?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)("div",{className:n()("instruction-container",e),children:t.map(((e,t)=>(0,l.jsx)(a.e3,{title:s(e.title),description:"string"==typeof e.description?s(e.description):e.description,type:e.type||"warning"})))})})).withConfig({displayName:"InstructionContainer",componentId:"sc-1tjn6f7-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",gap:10})))}}]);