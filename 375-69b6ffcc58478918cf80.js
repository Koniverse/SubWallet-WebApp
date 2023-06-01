"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[375],{80375:(e,s,n)=>{n.r(s),n.d(s,{default:()=>E});var t=n(25601),a=n(32623),i=n(80855),r=n(68627),o=n(3612),l=n(5772),c=n(81620),d=n(28973),u=n(7688),h=n(21462),m=n(47088),g=n(92936),p=n(96701),f=n(27178),b=n(99656),y=n(12798),H=n(95023),j=n(92280),w=n(72779),x=n.n(w),k=n(80205),v=n(2784),Z=n(21427),A=n(35185),C=n(38338),S=n(52322);const _=(0,S.jsx)(b.Z,{phosphorIcon:k.Z,weight:"fill"}),I="attach-read-only-scanner-modal",B="address",E=(0,C.ZP)((({className:e})=>{(0,h.Z)();const{t:s}=(0,Z.$)(),{goHome:n}=(0,m.Z)(),{isWebUI:b}=(0,v.useContext)(o.sG),w=(0,l.Z)(),C=(0,c.Z)(),E=(0,A.v9)((e=>e.accountState.accounts)),F=(0,d.Z)(r.kc),[N]=y.Z.useForm(),[P,O]=(0,v.useState)(""),[R,q]=(0,v.useState)(!1),[T,W]=(0,v.useState)(!1),[z,D]=(0,v.useState)(!0),L=(0,v.useCallback)((e=>{const s=(0,f.H9)(e);s&&(O(s.content),W(s.isEthereum))}),[]),G=(0,v.useCallback)(((e,s)=>{const{empty:n,error:t}=(0,p.ij)(s);D(t||n);const a=(0,p.eW)(e);a.address&&L(a.address)}),[L]),J=(0,v.useCallback)(((e,n)=>{const t=(0,f.H9)(n);if(t){for(const e of E)if(e.address===t.content)return O(""),Promise.reject(s("Account already exists"))}else if(O(""),""!==n)return Promise.reject(s("Invalid address"));return Promise.resolve()}),[E,s]),V=(0,v.useCallback)((()=>{q(!0),P?(0,g.mK)({name:C,address:P,genesisHash:"",isEthereum:T,isAllowed:!1,isReadOnly:!0}).then((e=>{e.length?N.setFields([{name:B,errors:e.map((e=>e.message))}]):w()})).catch((e=>{N.setFields([{name:B,errors:[e.message]}])})).finally((()=>{q(!1)})):q(!1)}),[N,P,C,T,w]);(0,u.Z)(I);const X={children:s("Attach read-only account"),icon:_,disabled:z,onClick:V,loading:R};return(0,S.jsx)(t.FE,{className:x()(e),children:(0,S.jsx)(t.Ar.Base,{onBack:F,...b?{headerList:["Simple"],showWebHeader:!0}:{rightFooterButton:X,showBackButton:!0,subHeaderPaddingVertical:!0,showSubHeader:!0,subHeaderCenter:!0,subHeaderBackground:"transparent"},subHeaderIcons:[{icon:(0,S.jsx)(i.Z,{}),onClick:n}],title:s("Attach watch-only account"),children:(0,S.jsxs)("div",{className:x()("container",{"__web-ui":b}),children:[(0,S.jsx)("div",{className:"description",children:s("Track the activity of any wallet without a private key")}),(0,S.jsx)("div",{className:"page-icon",children:(0,S.jsx)(H.Z,{color:"var(--page-icon-color)",iconProps:{weight:"fill",phosphorIcon:k.Z}})}),(0,S.jsxs)(y.Z,{form:N,initialValues:{address:""},name:"attach-read-only-form",onFieldsChange:G,onFinish:V,children:[(0,S.jsx)(y.Z.Item,{name:B,rules:[{message:s("Account address is required"),required:!0},{validator:J}],statusHelpAsTooltip:!0,children:(0,S.jsx)(a.J,{id:I,placeholder:s("Please type or paste account address"),showScanner:!0})}),b&&(0,S.jsx)(j.Z,{...X,className:"submit-button"})]})]})})})})).withConfig({displayName:"AttachReadOnly",componentId:"sc-1s88dfq-0"})((({theme:{token:e}})=>({".__web-ui":{maxWidth:"60%",margin:"0 auto"},".container":{padding:e.padding,"& .submit-button":{width:"100%",marginTop:36}},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".page-icon":{display:"flex",justifyContent:"center",marginTop:e.controlHeightLG,marginBottom:e.sizeXXL,"--page-icon-color":e.colorSecondary}})))},27178:(e,s,n)=>{n.d(s,{H9:()=>d,IJ:()=>l,jD:()=>c});var t=n(36533),a=n(74076),i=n(68774),r=n(90107),o=n(94175);const l=e=>{const s=e.split(":"),n=s[0];let a="",i="",r=[],o=!1;if(n===t.fD)[a,i,...r]=s.slice(1);else{if(n!==t.jq)return null;[a,...r]=s.slice(1),i=a.split("@")[1]||"",a=a.substring(0,42),o=!0}return{content:a,genesisHash:i,isAddress:!0,isEthereum:o,name:r.length?r.join(":"):void 0,isReadOnly:!1}},c=e=>{const s=e.split(":");let n="",a="",i=[];return s[0]!==t.WI?null:([n,a,...i]=s.slice(1),{content:n,genesisHash:a,isAddress:!1,isEthereum:!1,name:i.length?i.join(":"):void 0,isReadOnly:!1})},d=e=>{if(!e)return null;if((0,i.u)(e))return{content:e,genesisHash:e,isAddress:!0,isEthereum:!0,name:void 0,isReadOnly:!0};try{return(0,a.vq)(e)?null:{content:(0,r.m)((0,o.m)(e)),genesisHash:e,isAddress:!0,isEthereum:!1,name:void 0,isReadOnly:!0}}catch(e){return console.log(e),null}}}}]);