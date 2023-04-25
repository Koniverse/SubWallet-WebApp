"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[2561],{42561:(e,t,s)=>{s.r(t),s.d(t,{default:()=>W});var a=s(3401),n=s(45868),o=s(80855),i=s(68627),r=s(5772),l=s(28973),c=s(43246),d=s(21462),m=s(47088),u=s(92936),p=s(64165),h=s(99656),g=s(12162),f=s(12798),x=s(76495),y=s(1072),j=s(25356),w=s(92280),b=s(80039),S=s(17446),k=s(40674),I=s(72779),Z=s.n(I),N=s(90837),v=s(89537),C=s(2784),P=s(73557),H=s(38338),J=s(56623),_=s(48118),B=s(3612),$=s(52322),O=s(48834).Buffer;const T=(0,$.jsx)(h.Z,{phosphorIcon:N.Z,weight:"fill"}),F="account-json-modal",z="restore-json-file-form",D="password",R=[{title:"What is a JSON?",description:"The JSON backup file stores your account's information encrypted with the account's password. It's a second recovery method additionally to the mnemonic phrase. "},{title:"What is a JSON?",description:(0,$.jsxs)("span",{children:["When you create your account directly on Polkadot-JS UI the JSON file is automatically downloaded to your Downloads folder.",(0,$.jsx)("br",{}),"If you create your account in the Polkadot extension, you need to manually export the JSON file.",(0,$.jsx)("br",{}),"In ",(0,$.jsx)("a",{href:"#",children:"this article"})," you will learn how to manually export your JSON backup file in the Polkadot extension and Polkadot-JS UI."]})}],W=(0,H.ZP)((function({className:e}){(0,d.Z)();const{t}=(0,c.Z)(),s=(0,r.Z)(),I=(0,P.s0)(),N=(0,l.Z)(i.Rt),{goHome:H}=(0,m.Z)(),{activeModal:W,inactiveModal:A}=(0,C.useContext)(g.t),{isWebUI:E}=(0,C.useContext)(B.sG),[U]=f.Z.useForm(),[G,L]=(0,C.useState)({}),[M,X]=(0,C.useState)({}),[q,K]=(0,C.useState)(!1),[V,Q]=(0,C.useState)(!1),[Y,ee]=(0,C.useState)(!1),[te,se]=(0,C.useState)(""),[ae,ne]=(0,C.useState)(void 0),[oe,ie]=(0,C.useState)([]),re=(0,C.useCallback)((()=>{A(F)}),[A]),le=(0,C.useCallback)((()=>{W(F)}),[W]),ce=(0,C.useCallback)((e=>{var s;q||(K(!0),null===(s=e.file.originFileObj)||void 0===s||s.arrayBuffer().then((e=>{let s;try{if(s=JSON.parse((0,J.z)(Uint8Array.from(O.from(e)))),JSON.stringify(ae)===JSON.stringify(s))return void K(!1);ie([]),se(""),ne(s)}catch(e){return L({status:"error",message:e.message}),K(!1),void ee(!1)}try{if(X({}),(0,p.R)(s)){const e=s.accounts.map((e=>({address:e.address,genesisHash:e.meta.genesisHash,name:e.meta.name})));ee(!0),ie(e),L({}),K(!1)}else(0,u.$G)(s).then((e=>{ee(!0),ie([e]),L({}),K(!1)})).catch((e=>{ee(!1),L({status:"error",message:e.message}),K(!1)}))}catch(e){L({status:"error",message:t("Invalid Json file")}),K(!1),ee(!1)}})).catch((e=>{L({status:"error",message:e.message}),K(!1)})))}),[t,ae,q]),de=(0,C.useCallback)((()=>{ae&&(Y&&!te||(Q(!0),setTimeout((()=>{const e=(0,p.R)(ae);(e?(0,u.K)(ae,te,oe,!0):(0,u.k1)({file:ae,password:te,address:oe[0].address,isAllowed:!0,withMasterPassword:!0})).then((()=>{setTimeout((()=>{e?I("/keyring/migrate-password"):s()}),1e3)})).catch((e=>{X({message:e.message,status:"error"}),setTimeout((()=>{const e=document.getElementById(`${z}_${D}`);e&&e.select()}),10)})).finally((()=>{Q(!1)}))}),500)))}),[ae,Y,te,oe,I,s]),me=(0,C.useCallback)((e=>(0,$.jsx)(k.Z,{accountName:e.name,address:e.address,addressPreLength:4,addressSufLength:5,avatarIdentPrefix:42,avatarTheme:"ethereum"===e.type?"ethereum":"polkadot",className:"account-item"},e.address)),[]),ue=(0,C.useCallback)((e=>{const t=e.target.value;X(t?{}:{message:"Password is required",status:"error"}),se(t)}),[]);(0,C.useEffect)((()=>{Y&&setTimeout((()=>{const e=document.getElementById(`${z}_${D}`);e&&e.focus()}),10)}),[Y]);const pe={children:t("Import from Json"),icon:T,onClick:U.submit,disabled:!!G.status||!!M.status||!te,loading:q||V};return(0,$.jsx)(a.FE,{className:Z()(e),children:(0,$.jsx)(a.Ar.Base,{onBack:N,...E?{headerList:["Simple"]}:{rightFooterButton:pe,showBackButton:!0,subHeaderPaddingVertical:!0,showSubHeader:!0,subHeaderCenter:!0,subHeaderBackground:"transparent"},subHeaderIcons:[{icon:(0,$.jsx)(o.Z,{}),onClick:H}],title:t("Import from Json"),children:(0,$.jsxs)("div",{className:Z()("container",{"__web-ui":E}),children:[(0,$.jsxs)("div",{className:Z()("import-container"),children:[(0,$.jsx)("div",{className:"description",children:t("Please drag an drop the .json file you exported from Polkadot.js")}),(0,$.jsxs)(f.Z,{className:"form-container",form:U,name:z,onFinish:de,children:[(0,$.jsx)(f.Z.Item,{validateStatus:G.status,children:(0,$.jsx)(x.Z.SingleFileDragger,{accept:"application/json",className:"file-selector",disabled:q,hint:t("Please drag an drop the .json file you exported from Polkadot.js"),onChange:ce,statusHelp:G.message,title:t("Import from Polkadot.js")})}),!!oe.length&&(0,$.jsx)(f.Z.Item,{children:oe.length>1?(0,$.jsx)(y.Z,{className:"account-list-item",leftItemIcon:(0,$.jsx)(n.Z,{accounts:oe}),name:t(`Import ${String(oe.length).padStart(2,"0")} accounts`),onPressItem:le,rightItem:(0,$.jsx)(h.Z,{phosphorIcon:v.Z,size:"sm"})}):(0,$.jsx)(y.Z,{className:"account-list-item",leftItemIcon:(0,$.jsx)(n.Z,{accounts:oe}),name:oe[0].name})}),Y&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(f.Z.Item,{validateStatus:M.status,children:[(0,$.jsx)("div",{className:"input-label",children:t("Please enter the password you set when creating your polkadot.js account")}),(0,$.jsx)(j.Z,{id:`${z}_${D}`,onChange:ue,placeholder:t("Current password"),statusHelp:M.message,type:"password",value:te})]}),E&&(0,$.jsx)(w.Z,{...pe,className:"action"})]})]}),(0,$.jsx)(b.ZP,{className:e,id:F,onCancel:re,title:t("Import list"),children:(0,$.jsx)(S.Z.Section,{displayRow:!0,list:oe,renderItem:me,rowGap:"var(--row-gap)"})})]}),E&&(0,$.jsx)(_.Z,{contents:R})]})})})})).withConfig({displayName:"RestoreJson__ImportJson",componentId:"sc-owdwlk-0"})((({theme:{token:e}})=>({"--row-gap":e.sizeXS,".container":{"&.__web-ui":{display:"flex",justifyContent:"center",maxWidth:"60%",margin:"0 auto"},".import-container":{padding:e.padding,paddingBottom:0,flex:1,"& .ant-btn":{width:"100%"}},".instruction-container":{flex:1},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".form-container":{marginTop:e.margin},".ant-form-item:last-child":{marginBottom:0},".input-label":{fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,marginBottom:e.margin},".account-list-item":{marginTop:-e.marginXS,".account-item":{cursor:"default"},".ant-web3-block-right-item":{marginRight:0}},".ant-web3-block":{display:"flex !important"},".ant-sw-modal-body":{padding:`${e.padding}px 0 ${e.padding}px`,flexDirection:"column",display:"flex"},".ant-sw-list-wrapper":{overflow:"hidden",height:"100%",display:"flex",flexDirection:"column"},".file-selector":{".ant-upload-drag-single":{height:168}}}})))},48118:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(3401),n=s(72779),o=s.n(n),i=s(96217),r=s(38338),l=s(52322);const c=(0,r.ZP)((({className:e,contents:t})=>{const{t:s}=(0,i.$)();return t.length<=0?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)("div",{className:o()("instruction-container",e),children:t.map(((e,t)=>(0,l.jsx)(a.e3,{title:s(e.title),description:"string"==typeof e.description?s(e.description):e.description,type:e.type||"warning"})))})})).withConfig({displayName:"InstructionContainer",componentId:"sc-1tjn6f7-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",gap:10})))}}]);