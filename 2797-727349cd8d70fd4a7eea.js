"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[2797,3738],{13738:(e,n,s)=>{s.r(n),s.d(n,{TransactionContext:()=>C,default:()=>b});var t=s(9661),a=s(31101),i=s(11637),r=s(87574),o=s(75576),l=s(33283),c=s(12162),u=s(90809),d=s(72779),h=s.n(d),m=s(2784),g=s(35185),f=s(73557),p=s(38338),x=s(68774),v=s(52322);const C=m.createContext({transactionType:t.Vv.TRANSFER_BALANCE,from:"",setFrom:e=>{},chain:"",setChain:e=>{},asset:"",setAsset:e=>{},onDone:e=>{},onClickRightBtn:()=>{},setShowRightBtn:e=>{},setDisabledRightBtn:e=>{}}),b=(0,p.ZP)((function({className:e}){const{t:n}=(0,l.$G)(),s=(0,f.TH)(),d=(0,f.s0)(),{activeModal:p}=(0,m.useContext)(c.t),b=(0,m.useContext)(o.R0),{currentAccount:T,isAllAccount:w}=(0,g.v9)((e=>e.accountState)),y=(0,m.useMemo)((()=>{switch(s.pathname.split("/")[2]||""){case"stake":return t.Vv.STAKING_JOIN_POOL;case"unstake":return t.Vv.STAKING_LEAVE_POOL;case"cancel-unstake":return t.Vv.STAKING_CANCEL_UNSTAKE;case"claim-reward":return t.Vv.STAKING_CLAIM_REWARD;case"withdraw":return t.Vv.STAKING_WITHDRAW;case"compound":return t.Vv.STAKING_COMPOUNDING;case"send-nft":return t.Vv.SEND_NFT;default:return t.Vv.TRANSFER_BALANCE}}),[s.pathname]),j=(0,m.useMemo)((()=>{switch(s.pathname.split("/")[2]||""){case"stake":case"unstake":case"cancel-unstake":case"claim-reward":case"withdraw":case"compound":return"/home/staking";case"send-nft":return"/home/nfts/collections";default:return"/home/tokens"}}),[s.pathname]),k=(0,m.useMemo)((()=>{const e={};for(const[s,t]of Object.entries(r.mG))e[s]=n(t);return e}),[n]);(0,l.qg)(j);const[N,S]=(0,m.useState)(w?"":(null==T?void 0:T.address)||""),[A,Z]=(0,m.useState)(""),[_,B]=(0,m.useState)(""),[I,E]=(0,m.useState)(!1),[F,P]=(0,m.useState)(!1),M=(0,l.xC)(),R=(0,m.useCallback)((()=>{d(j)}),[j,d]),V=(0,m.useCallback)((e=>{const n=(0,x.u)(N)?"ethereum":"substrate";d(`/transaction-done/${n}/${A}/${e}`,{replace:!0})}),[N,A,d]),L=(0,m.useCallback)((()=>{y===t.Vv.STAKING_JOIN_POOL&&p(i.p)}),[p,y]),D=(0,m.useMemo)((()=>I?[{disabled:F,icon:(0,v.jsx)(a.sz,{}),onClick:()=>L()}]:[]),[F,L,I]);return(0,m.useEffect)((()=>{""!==_&&M(_)}),[_,M]),(0,v.jsx)(a.Ar.Home,{showFilterIcon:!0,showTabBar:!1,children:(0,v.jsx)(C.Provider,{value:{transactionType:y,from:N,setFrom:S,chain:A,setChain:Z,onDone:V,onClickRightBtn:L,setShowRightBtn:E,setDisabledRightBtn:P,asset:_,setAsset:B},children:(0,v.jsx)(a.FE,{resolve:b.awaitStores(["chainStore","assetRegistry","balance"]),children:(0,v.jsxs)("div",{className:h()(e,"transaction-wrapper"),children:[(0,v.jsx)(u.Z,{background:"transparent",center:!0,className:"transaction-header",onBack:R,rightButtons:D,showBackButton:!0,title:k[y]}),(0,v.jsx)(f.j3,{})]})})})})})).withConfig({displayName:"Transaction",componentId:"sc-1qz55vb-0"})((({theme:e})=>{const n=e.token;return{height:"100%",display:"flex",flexDirection:"column",".transaction-header":{paddingTop:n.paddingSM,paddingBottom:n.paddingSM,flexShrink:0},".transaction-content":{flex:"1 1 400px",paddingLeft:n.padding,paddingRight:n.padding,overflow:"auto"},".transaction-footer":{display:"flex",flexWrap:"wrap",padding:`${n.paddingMD}px ${n.padding}px ${n.padding}px`,marginBottom:n.padding,gap:n.paddingXS,".error-messages":{width:"100%",color:n.colorError},".warning-messages":{width:"100%",color:n.colorWarning},".ant-btn":{flex:1},".full-width":{minWidth:"100%"}}}}))},94684:(e,n,s)=>{s.d(n,{gy:()=>d,ZL:()=>g,tc:()=>f,Xd:()=>p});var t=s(43246),a=s(96562),i=s(25690),r=s(72779),o=s.n(r),l=s(2784),c=s(38338),u=s(52322);const d=(0,c.ZP)((({bondedBalance:e,className:n,decimals:s,label:r,symbol:l})=>{const{t:d}=(0,t.Z)(),{token:h}=(0,c.Fg)();return(0,u.jsxs)(a.Z.Paragraph,{className:o()(n,"bonded-balance"),children:[(0,u.jsx)(i.Z,{decimal:s,decimalColor:h.colorTextTertiary,intColor:h.colorTextTertiary,size:14,suffix:l,unitColor:h.colorTextTertiary,value:e||0}),r||d("Bonded")]})})).withConfig({displayName:"BondedBalance",componentId:"sc-15arqr7-0"})((({theme:{token:e}})=>({display:"flex",color:e.colorTextTertiary,"&.ant-typography":{marginBottom:0},".ant-number":{marginRight:"0.3em"}})));var h=s(33283),m=s(96108);const g=(0,c.ZP)((({address:e,chain:n,className:s,label:r,onBalanceReady:d,tokenSlug:g})=>{const{t:f}=(0,t.Z)(),{token:p}=(0,c.Fg)(),{error:x,isLoading:v,nativeTokenBalance:C,nativeTokenSlug:b,tokenBalance:T}=(0,h.L5)(n,e,g);return(0,l.useEffect)((()=>{null==d||d(!v&&!x)}),[x,v,d]),e||n?(0,u.jsxs)(a.Z.Paragraph,{className:o()(s,"free-balance"),children:[r||f("Sender available balance:")," ",v&&(0,u.jsx)(m.Z,{size:14}),x&&(0,u.jsx)(a.Z.Text,{className:"error-message",children:x}),!v&&!x&&!!b&&(0,u.jsx)(i.Z,{decimal:C.decimals||18,decimalColor:p.colorTextTertiary,intColor:p.colorTextTertiary,size:14,suffix:C.symbol,unitColor:p.colorTextTertiary,value:C.value}),!v&&!x&&!!g&&g!==b&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("span",{className:"__name",children:[" ",f("and")," "]}),(0,u.jsx)(i.Z,{decimal:(null==T?void 0:T.decimals)||18,decimalColor:p.colorTextTertiary,intColor:p.colorTextTertiary,size:14,suffix:null==T?void 0:T.symbol,unitColor:p.colorTextTertiary,value:T.value})]})]}):(0,u.jsx)(u.Fragment,{})})).withConfig({displayName:"FreeBalance",componentId:"sc-f3bkwa-0"})((({theme:{token:e}})=>({display:"flex",flexWrap:"wrap",color:e.colorTextTertiary,".error-message":{color:e.colorError},"&.ant-typography":{marginBottom:0}}))),f=(0,c.ZP)((({children:e,className:n=""})=>(0,u.jsx)("div",{className:`transaction-content ${n}`,children:e}))).withConfig({displayName:"TransactionContent",componentId:"sc-17nushy-0"})((({theme:e})=>({}))),p=(0,c.ZP)((({children:e,className:n="",errors:s,warnings:t})=>(0,u.jsxs)("div",{className:`transaction-footer ${n}`,children:[s.length>0&&(0,u.jsx)("div",{className:"error-messages",children:s.map(((e,n)=>(0,u.jsx)("div",{children:e},n)))}),t.length>0&&(0,u.jsx)("div",{className:"warning-messages",children:t.map(((e,n)=>(0,u.jsx)("div",{children:e},n)))}),e]}))).withConfig({displayName:"TransactionFooter",componentId:"sc-bpci6r-0"})((({theme:e})=>({})))},42797:(e,n,s)=>{s.r(n),s.d(n,{default:()=>R});var t=s(80949),a=s(36926),i=s(56858),r=s(76806),o=s(32623),l=s(92323),c=s(23214),u=s(11638),d=s(33283),h=s(92936),m=s(95798),g=s(32897),f=s(12798),p=s(25356),x=s(92280),v=s(99656),C=s(72558),b=s(72779),T=s.n(b),w=s(62982),y=s(2784),j=s(96217),k=s(73557),N=s(38338),S=s(62197),A=s.n(S),Z=s(95292),_=s(68774),B=s(61162),I=s(94684),E=s(13738),F=s(52322);function P(e,n,s){return(0,a.h4)(n[e.originChain])===s}const M=e=>!((0,m.W_)(e.address)||e.isReadOnly),R=(0,N.ZP)((({className:e=""})=>{const{t:n}=(0,j.$)(),s=(0,d.lm)(),b=(0,k.TH)().state,[N]=(0,y.useState)(null==b?void 0:b.slug),{asset:S,chain:R,from:V,onDone:L,setAsset:D,setChain:O,setFrom:G}=(0,y.useContext)(E.TransactionContext),{chainInfoMap:$,chainStateMap:H}=(0,d.v9)((e=>e.chainStore)),{assetRegistry:K,assetSettingMap:W,multiChainAssetMap:q,xcmRefMap:z}=(0,d.v9)((e=>e.assetRegistry)),{accounts:J,isAllAccount:X}=(0,d.v9)((e=>e.accountState)),[U,Y]=(0,y.useState)("0"),Q=(0,d.Ey)(V,"The account you are using is read-only, you cannot send assets with it"),[ee,ne]=(0,y.useState)(!1),[se,te]=(0,y.useState)(!1),[,ae]=(0,y.useState)({}),[ie,re]=(0,y.useState)(!0),[oe,le]=(0,y.useState)(void 0),ce=(0,y.useCallback)((e=>{le({}),te(e)}),[]),{onError:ue,onSuccess:de}=(0,d.Ls)(L,ce),[he]=f.Z.useForm(),me=(0,y.useMemo)((()=>({from:V,chain:R,destChain:"",asset:"",to:"",value:""})),[R,V]),ge=f.Z.useWatch("destChain",he),fe=f.Z.useWatch("value",he),pe=(0,y.useMemo)((()=>function(e,n,s){if(!e)return[];const t=[],i=s[(0,a.QJ)(e)];return t.push({name:i.name,slug:i.slug}),Object.values(n).forEach((n=>{if(n.srcAsset===e){const e=s[n.destChain];t.push({name:e.name,slug:e.slug})}})),t}(S,z,$)),[$,S,z]),xe=(0,y.useMemo)((()=>S?K[S]:void 0),[K,S]),ve=(0,y.useMemo)((()=>xe?(0,a.eH)(xe):0),[xe]),Ce=(0,d.xo)(R),be=(0,d.xo)(ge),Te=(0,y.useMemo)((()=>function(e,n,s,t,i,r,o,l){var c;const u=(0,m.Jd)(n,e);if(!u)return[];const d=null===(c=(0,g.E_)(s,u.originGenesisHash))||void 0===c?void 0:c.slug,h=(0,_.u)(e),f=!!l&&!!i[l],p=!!l&&!!o[l];if(l){if(!f&&!p)return[];const e=i[l],n=!d||d===(null==e?void 0:e.originChain);if(f){if(P(e,s,h)&&n){const{name:e,originChain:n,slug:s,symbol:t}=i[l];return[{name:e,slug:s,symbol:t,originChain:n}]}return[]}}const x=[];return Object.values(i).forEach((e=>{const n=!d||d===e.originChain;(0,a.Dh)(e)&&P(e,s,h)&&n&&(p?e.multiChainAsset===l&&x.push({name:e.name,slug:e.slug,symbol:e.symbol,originChain:e.originChain}):x.push({name:e.name,slug:e.slug,symbol:e.symbol,originChain:e.originChain}))})),x}(V,J,$,0,K,0,q,N)),[J,K,W,$,H,V,q,N]),we=(0,y.useCallback)(((e,s)=>{if(!s)return Promise.reject(n("Recipient address is required"));if(!(0,B.U)(s))return Promise.reject(n("Invalid Recipient address"));const{chain:t,destChain:r,from:o,to:l}=he.getFieldsValue();if(!o||!t||!r)return Promise.resolve();if(t===r){if((0,i.Wr)(o,s))return Promise.reject(n("The recipient address can not be the same as the sender address"));if((0,_.u)(o)&&s&&!(0,_.u)(s)||!(0,_.u)(o)&&s&&(0,_.u)(s))return Promise.reject(n("The recipient address must be same type as the current account address."))}else{const e=(0,a.h4)($[r]);if(e!==(0,_.u)(l))return Promise.reject(n(`The recipient address must be ${e?"EVM":"substrate"} type`))}return Promise.resolve()}),[$,he,n]),ye=(0,y.useCallback)(((e,s)=>{if(!s)return Promise.reject(n("Amount is required"));if(new C.Z(s).eq(new C.Z(0)))return Promise.reject(n("Amount must be greater than 0"));if(new C.Z(s).gt(new C.Z(U))){const e=(0,m.az)(U,ve);return Promise.reject(n("Amount must be equal or less than {{number}}",{replace:{number:e}}))}return Promise.resolve()}),[ve,U,n]),je=(0,y.useCallback)(((e,n)=>{const s=[];if(e.from&&(G(e.from),le(void 0),he.resetFields(["asset"])),e.asset){const t=K[e.asset].originChain;n.value&&s.push("value"),he.setFieldsValue({chain:t,destChain:t}),n.to&&s.push("to"),O(t),D(e.asset),te(!1),le(void 0)}var a;e.destChain&&(e.destChain!==n.chain&&(null===(a=K[n.asset])||void 0===a?void 0:a.assetType)===t.Ym.NATIVE&&te(!1),n.to&&s.push("to")),s.length&&he.validateFields(s).catch(m.ZT)}),[he,G,K,O,D]),ke=(0,y.useCallback)((e=>{ne(!0);const{destChain:t,to:a,value:i}=e;let r;if(R===t)r=(0,h.LV)({from:V,networkKey:R,to:a,tokenSlug:S,value:i,transferAll:se});else{const e=(0,m.Jd)(J,V);if(null!=e&&e.isHardware)return ne(!1),void s({message:n("This feature is not available for Ledger account"),type:"warning"});r=(0,h.X_)({destinationNetworkKey:t,from:V,originNetworkKey:R,tokenSlug:S,to:a,value:i,transferAll:se})}setTimeout((()=>{r.then(de).catch(ue).finally((()=>{ne(!1)}))}),300)}),[R,V,S,se,J,s,n,de,ue]),Ne=(0,y.useMemo)((()=>((e,n,s,t)=>{const i=!!t&&!!n[t],r=!!t&&!!s[t];if(!t)return M;const o=Object.values(n).filter((e=>!!(0,a.Dh)(e)&&(i?e.slug===t:!!r&&e.multiChainAsset===t)));return n=>{var s;const t=null===(s=(0,g.E_)(e,n.originGenesisHash))||void 0===s?void 0:s.slug,a=(0,_.u)(n.address);return!!M(n)&&o.some((n=>{const s=!t||t===(null==n?void 0:n.originChain);return P(n,e,a)&&s}))}})($,K,q,N)),[K,$,q,N]),Se=(0,y.useCallback)((e=>{new(A())(U).isZero()||te(e)}),[U]);return(0,y.useEffect)((()=>{const{asset:e,from:n}=he.getFieldsValue();if(Te.length)if(e)Te.some((n=>n.slug===e))||(he.setFieldsValue({asset:Te[0].slug,chain:K[Te[0].slug].originChain,destChain:K[Te[0].slug].originChain}),O(K[Te[0].slug].originChain));else{const e=(0,m.Jd)(J,n);let s=!1;if(null!=e&&e.originGenesisHash){const n=(0,g.E_)($,e.originGenesisHash);if(n){const e=Te.find((e=>e.originChain===n.slug));e&&(he.setFieldsValue({asset:e.slug,chain:K[e.slug].originChain,destChain:K[e.slug].originChain}),O(K[e.slug].originChain),s=!0)}}s||(he.setFieldsValue({asset:Te[0].slug,chain:K[Te[0].slug].originChain,destChain:K[Te[0].slug].originChain}),O(K[Te[0].slug].originChain))}}),[J,Te,K,he,O,$]),(0,y.useEffect)((()=>{let e=!1;return V&&S&&(0,h.bp)({address:V,networkKey:K[S].originChain,token:S,isXcmTransfer:R!==ge,destChain:ge}).then((n=>{!e&&Y(n.value)})).catch((()=>{!e&&Y("0")})).finally((()=>{e||he.getFieldValue("value")&&setTimeout((()=>{he.validateFields(["value"]).finally((()=>ae({})))}),100)})),()=>{e=!0}}),[S,K,W,R,ge,he,V]),(0,y.useEffect)((()=>{const e=new(A())(fe||"0"),n=new(A())(U||"0");e.gt(Z.nw)&&e.eq(n)&&te(!0)}),[U,fe]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(I.tc,{className:T()(`${e} -transaction-content`),children:[(0,F.jsx)("div",{className:"__brief common-text text-light-4 text-center",children:n("You are doing a token transfer with the following information")}),(0,F.jsxs)(f.Z,{className:"form-container form-space-sm",form:he,initialValues:me,onFinish:ke,onValuesChange:je,children:[(0,F.jsx)(f.Z.Item,{className:T()({hidden:!X}),name:"from",children:(0,F.jsx)(r.p,{addressPrefix:Ce,disabled:!X,filter:Ne,label:n("Send from account")})}),(0,F.jsxs)("div",{className:"form-row",children:[(0,F.jsx)(f.Z.Item,{name:"asset",children:(0,F.jsx)(u.k,{disabled:!Te.length,items:Te,placeholder:n("Select token"),showChainInSelected:!0,tooltip:n("Token")})}),(0,F.jsx)(f.Z.Item,{name:"value",rules:[{validator:ye}],statusHelpAsTooltip:!0,validateTrigger:"onBlur",children:(0,F.jsx)(l.ZP,{decimals:ve,forceUpdateMaxValue:oe,maxValue:U,onSetMax:Se,showMaxButton:!0,tooltip:n("Amount")})})]}),(0,F.jsx)(f.Z.Item,{className:"hidden",name:"chain",children:(0,F.jsx)(p.Z,{placeholder:n("value")})}),(0,F.jsx)(f.Z.Item,{name:"to",rules:[{validator:we}],statusHelpAsTooltip:!0,validateTrigger:"onBlur",children:(0,F.jsx)(o.J,{addressPrefix:be,label:n("Send to account"),showAddressBook:!0,showScanner:!0})}),(0,F.jsx)(f.Z.Item,{name:"destChain",children:(0,F.jsx)(c.o,{disabled:!pe.length,items:pe,title:n("Select destination chain"),tooltip:n("Destination chain")})})]}),(0,F.jsx)(I.ZL,{address:V,chain:R,onBalanceReady:re,tokenSlug:S})]}),(0,F.jsx)(I.Xd,{className:`${e} -transaction-footer`,errors:[],warnings:[],children:(0,F.jsx)(x.Z,{disabled:!ie,icon:(0,F.jsx)(v.Z,{phosphorIcon:w.Z,weight:"fill"}),loading:ee,onClick:Q(he.submit),schema:se?"warning":void 0,children:n(se?"Transfer the full account balance":"Transfer")})})]})})).withConfig({displayName:"SendFund",componentId:"sc-wyykvt-0"})((({theme:e})=>{const n=e.token;return{".__brief":{paddingLeft:n.padding,paddingRight:n.padding,marginBottom:n.marginMD},"&.-transaction-content.-is-zero-balance":{".free-balance .ant-number":{".ant-number-integer, .ant-number-decimal":{color:`${n.colorError} !important`}}}}}))}}]);