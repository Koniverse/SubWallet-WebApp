"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[4075,3738],{13738:(e,n,a)=>{a.r(n),a.d(n,{TransactionContext:()=>N,default:()=>b});var t=a(9661),s=a(51076),r=a(11637),o=a(63470),i=a(75576),l=a(29709),c=a(12162),d=a(90809),u=a(72779),m=a.n(u),h=a(2784),f=a(35185),p=a(73557),g=a(38338),x=a(68774),v=a(52322);const N=h.createContext({transactionType:t.Vv.TRANSFER_BALANCE,from:"",setFrom:e=>{},chain:"",setChain:e=>{},asset:"",setAsset:e=>{},onDone:e=>{},onClickRightBtn:()=>{},setShowRightBtn:e=>{},setDisabledRightBtn:e=>{}}),b=(0,g.ZP)((function({className:e}){const{t:n}=(0,l.$G)(),a=(0,p.TH)(),u=(0,p.s0)(),{activeModal:g}=(0,h.useContext)(c.t),b=(0,h.useContext)(i.R0),{currentAccount:T,isAllAccount:E}=(0,f.v9)((e=>e.accountState)),k=(0,h.useMemo)((()=>{switch(a.pathname.split("/")[2]||""){case"stake":return t.Vv.STAKING_JOIN_POOL;case"unstake":return t.Vv.STAKING_LEAVE_POOL;case"cancel-unstake":return t.Vv.STAKING_CANCEL_UNSTAKE;case"claim-reward":return t.Vv.STAKING_CLAIM_REWARD;case"withdraw":return t.Vv.STAKING_WITHDRAW;case"compound":return t.Vv.STAKING_COMPOUNDING;case"send-nft":return t.Vv.SEND_NFT;default:return t.Vv.TRANSFER_BALANCE}}),[a.pathname]),y=(0,h.useMemo)((()=>{switch(a.pathname.split("/")[2]||""){case"stake":case"unstake":case"cancel-unstake":case"claim-reward":case"withdraw":case"compound":return"/home/staking";case"send-nft":return"/home/nfts/collections";default:return"/home/tokens"}}),[a.pathname]),j=(0,h.useMemo)((()=>{const e={};for(const[a,t]of Object.entries(o.mG))e[a]=n(t);return e}),[n]);(0,l.qg)(y);const[O,C]=(0,h.useState)(E?"":(null==T?void 0:T.address)||""),[S,w]=(0,h.useState)(""),[I,P]=(0,h.useState)(""),[A,B]=(0,h.useState)(!1),[M,Z]=(0,h.useState)(!1),R=(0,l.xC)(),_=(0,h.useCallback)((()=>{u(y)}),[y,u]),L=(0,h.useCallback)((e=>{const n=(0,x.u)(O)?"ethereum":"substrate";u(`/transaction-done/${n}/${S}/${e}`,{replace:!0})}),[O,S,u]),D=(0,h.useCallback)((()=>{k===t.Vv.STAKING_JOIN_POOL&&g(r.p)}),[g,k]),W=(0,h.useMemo)((()=>A?[{disabled:M,icon:(0,v.jsx)(s.sz,{}),onClick:()=>D()}]:[]),[M,D,A]);return(0,h.useEffect)((()=>{""!==I&&R(I)}),[I,R]),(0,v.jsx)(s.Ar.Home,{showFilterIcon:!0,showTabBar:!1,children:(0,v.jsx)(N.Provider,{value:{transactionType:k,from:O,setFrom:C,chain:S,setChain:w,onDone:L,onClickRightBtn:D,setShowRightBtn:B,setDisabledRightBtn:Z,asset:I,setAsset:P},children:(0,v.jsx)(s.FE,{resolve:b.awaitStores(["chainStore","assetRegistry","balance"]),children:(0,v.jsxs)("div",{className:m()(e,"transaction-wrapper"),children:[(0,v.jsx)(d.Z,{background:"transparent",center:!0,className:"transaction-header",onBack:_,rightButtons:W,showBackButton:!0,title:j[k]}),(0,v.jsx)(p.j3,{})]})})})})})).withConfig({displayName:"Transaction",componentId:"sc-1qz55vb-0"})((({theme:e})=>{const n=e.token;return{height:"100%",display:"flex",flexDirection:"column",".transaction-header":{paddingTop:n.paddingSM,paddingBottom:n.paddingSM,flexShrink:0},".transaction-content":{flex:"1 1 400px",paddingLeft:n.padding,paddingRight:n.padding,overflow:"auto"},".transaction-footer":{display:"flex",flexWrap:"wrap",padding:`${n.paddingMD}px ${n.padding}px ${n.padding}px`,marginBottom:n.padding,gap:n.paddingXS,".error-messages":{width:"100%",color:n.colorError},".warning-messages":{width:"100%",color:n.colorWarning},".ant-btn":{flex:1},".full-width":{minWidth:"100%"}}}}))},52274:(e,n,a)=>{a.d(n,{nC:()=>f,x1:()=>p.x1,bO:()=>i});var t=a(80949),s=a(54533);const r="RMRK",o="SEND";function i(e,n){return e.type===t.Ym.ERC721?function(e){return{contractAddress:e.collectionId,tokenId:parseInt(e.id)}}(e):e.type===t.Ym.PSP34?function(e){return{contractAddress:e.collectionId,onChainOption:e.onChainOption,isPsp34:!0,networkKey:e.chain}}(e):s.r$.acala.includes(n)||s.r$.karura.includes(n)||s.r$.bitcountry.includes(n)?function(e){return{collectionId:parseInt(e.collectionId),itemId:parseInt(e.id),networkKey:e.chain}}(e):s.r$.rmrk.includes(n)?function(e){return e.rmrk_ver?{remark:`${r}::${o}::${e.rmrk_ver}::${e.id}::`,networkKey:e.chain}:{}}(e):s.r$.statemine.includes(n)||s.r$.unique_network.includes(n)?function(e){return{collectionId:parseInt(e.collectionId),itemId:parseInt(e.id),networkKey:e.chain}}(e):{}}var l=a(9661),c=a(36926),d=a(95110),u=a(95798),m=a(68774);const h=(e,n)=>a=>!(a.originGenesisHash&&n&&(0,c.zb)(n)!==a.originGenesisHash||(0,u.W_)(a.address)||a.isReadOnly||e===l.WQ.POOLED&&(0,m.u)(a.address)),f=(e,n,a)=>t=>{if(a&&a!==d.EN){const s=e[a],r=h(n,s),o=(0,c.h4)(s);return r(t)&&o===(0,m.u)(t.address)}return h(n)(t)};var p=a(11164)},94684:(e,n,a)=>{a.d(n,{gy:()=>u,ZL:()=>f,tc:()=>p,Xd:()=>g});var t=a(43246),s=a(96562),r=a(25690),o=a(72779),i=a.n(o),l=a(2784),c=a(38338),d=a(52322);const u=(0,c.ZP)((({bondedBalance:e,className:n,decimals:a,label:o,symbol:l})=>{const{t:u}=(0,t.Z)(),{token:m}=(0,c.Fg)();return(0,d.jsxs)(s.Z.Paragraph,{className:i()(n,"bonded-balance"),children:[(0,d.jsx)(r.Z,{decimal:a,decimalColor:m.colorTextTertiary,intColor:m.colorTextTertiary,size:14,suffix:l,unitColor:m.colorTextTertiary,value:e||0}),o||u("Bonded")]})})).withConfig({displayName:"BondedBalance",componentId:"sc-15arqr7-0"})((({theme:{token:e}})=>({display:"flex",color:e.colorTextTertiary,"&.ant-typography":{marginBottom:0},".ant-number":{marginRight:"0.3em"}})));var m=a(29709),h=a(96108);const f=(0,c.ZP)((({address:e,chain:n,className:a,label:o,onBalanceReady:u,tokenSlug:f})=>{const{t:p}=(0,t.Z)(),{token:g}=(0,c.Fg)(),{error:x,isLoading:v,nativeTokenBalance:N,nativeTokenSlug:b,tokenBalance:T}=(0,m.L5)(n,e,f);return(0,l.useEffect)((()=>{console.log("onBalanceReady",!v&&!x),null==u||u(!v&&!x)}),[x,v,u]),e||n?(0,d.jsxs)(s.Z.Paragraph,{className:i()(a,"free-balance"),children:[o||p("Sender available balance:")," ",v&&(0,d.jsx)(h.Z,{size:14}),x&&(0,d.jsx)(s.Z.Text,{className:"error-message",children:x}),!v&&!x&&!!b&&(0,d.jsx)(r.Z,{decimal:N.decimals||18,decimalColor:g.colorTextTertiary,intColor:g.colorTextTertiary,size:14,suffix:N.symbol,unitColor:g.colorTextTertiary,value:N.value}),!v&&!x&&!!f&&f!==b&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("span",{className:"__name",children:[" ",p("and")," "]}),(0,d.jsx)(r.Z,{decimal:(null==T?void 0:T.decimals)||18,decimalColor:g.colorTextTertiary,intColor:g.colorTextTertiary,size:14,suffix:null==T?void 0:T.symbol,unitColor:g.colorTextTertiary,value:T.value})]})]}):(0,d.jsx)(d.Fragment,{})})).withConfig({displayName:"FreeBalance",componentId:"sc-f3bkwa-0"})((({theme:{token:e}})=>({display:"flex",flexWrap:"wrap",color:e.colorTextTertiary,".error-message":{color:e.colorError},"&.ant-typography":{marginBottom:0}}))),p=(0,c.ZP)((({children:e,className:n=""})=>(0,d.jsx)("div",{className:`transaction-content ${n}`,children:e}))).withConfig({displayName:"TransactionContent",componentId:"sc-17nushy-0"})((({theme:e})=>({}))),g=(0,c.ZP)((({children:e,className:n="",errors:a,warnings:t})=>(0,d.jsxs)("div",{className:`transaction-footer ${n}`,children:[a.length>0&&(0,d.jsx)("div",{className:"error-messages",children:a.map(((e,n)=>(0,d.jsx)("div",{children:e},n)))}),t.length>0&&(0,d.jsx)("div",{className:"warning-messages",children:t.map(((e,n)=>(0,d.jsx)("div",{children:e},n)))}),e]}))).withConfig({displayName:"TransactionFooter",componentId:"sc-bpci6r-0"})((({theme:e})=>({})))},14075:(e,n,a)=>{a.r(n),a.d(n,{default:()=>S});var t=a(9661),s=a(54533),r=a(36926),o=a(51076),i=a(63470),l=a(75576),c=a(29709),d=a(92936),u=a(95798),m=a(12798),h=a(81345),f=a(92280),p=a(99656),g=a(72558),x=a(94344),v=a(2784),N=a(96217),b=a(73557),T=a(38338),E=a(68774),k=a(52274),y=a(94684),j=a(13738),O=a(52322),C=function(e){return e.VALUE="value",e.NOMINATE="nominate",e.POOL="pool",e.TYPE="type",e}(C||{});const S=(0,T.ZP)((e=>{const{className:n}=e,{t:a}=(0,N.$)(),{chain:T,type:S}=(0,b.UO)(),w=(0,v.useContext)(l.R0),{asset:I,chain:P,from:A,onDone:B,setAsset:M,setChain:Z,setDisabledRightBtn:R,setFrom:_,setShowRightBtn:L}=(0,v.useContext)(j.TransactionContext),{nominationPoolInfoMap:D,validatorInfoMap:W}=(0,c.v9)((e=>e.bonding)),{chainInfoMap:V}=(0,c.v9)((e=>e.chainStore)),{currentAccount:F}=(0,c.v9)((e=>e.accountState)),{assetRegistry:$}=(0,c.v9)((e=>e.assetRegistry)),Q=(0,E.u)(null==F?void 0:F.address),K=(0,v.useMemo)((()=>{if(Q)return t.WQ.NOMINATED;switch(S){case t.WQ.POOLED:return t.WQ.POOLED;case t.WQ.NOMINATED:return t.WQ.NOMINATED;default:return t.WQ.POOLED}}),[S,Q]),[G]=m.Z.useForm(),[z,Y]=(0,v.useState)(!0),q=m.Z.useWatch(C.TYPE,G),H=(0,c.aJ)(P),U=(0,c._y)(P,q,A),J=(0,v.useMemo)((()=>U[0]),[U]),{nativeTokenBalance:X}=(0,c.L5)(P,A),ee=(0,c.O_)(q,A,T),ne=(0,v.useMemo)((()=>s.H_.relay.includes(P)),[P]),[ae,te]=(0,v.useState)(!1),[se,re]=(0,v.useState)(!1),[oe,ie]=(0,v.useState)(!1),[le,ce]=(0,v.useState)(!0),de=(0,v.useMemo)((()=>{const e=$[I];return e&&e.minAmount||"0"}),[$,I]),ue=(0,v.useMemo)((()=>{const e=new g.Z(X.value),n=new g.Z(de);return n.gte(e)?"0":e.minus(n).toString()}),[de,X.value]),{decimals:me,symbol:he}=(0,c.cR)(P),fe=(0,u.W_)((null==F?void 0:F.address)||""),pe=(0,c.uH)(T||""),ge=(0,v.useMemo)((()=>({asset:pe,from:A,chain:P,[C.VALUE]:"0",[C.POOL]:"",[C.NOMINATE]:"",[C.TYPE]:K})),[pe,A,K,P]),xe=(0,v.useMemo)((()=>q===t.WQ.POOLED?(null==H?void 0:H.minPoolBonding)||"0":(null==H?void 0:H.minStake)||"0"),[null==H?void 0:H.minPoolBonding,null==H?void 0:H.minStake,q]),{onError:ve,onSuccess:Ne}=(0,c.Ls)(B),be=(0,v.useCallback)(((e,n)=>{const{error:a}=(0,u.ij)(n),s=(0,u.eW)(n),o=(0,u.eW)(e),{asset:i,from:l}=o;if(l&&_(l),void 0!==i){const e=(0,r.QJ)(i);M(i),Z(e)}const c={},d=s[C.TYPE];for(const[e,n]of Object.entries(s))c[e]=!!n;d===t.WQ.NOMINATED?c.pool=!0:d===t.WQ.POOLED&&(c.nominate=!0),Y(a||Object.values(c).some((e=>!e)))}),[M,Z,_]),Te=(0,v.useCallback)((e=>{const n=W[P];if(!n)return[];const a=[];return n.forEach((n=>{e.includes((0,u.k1)(n.address,42))&&a.push(n)})),a}),[P,W]),Ee=(0,v.useCallback)((e=>{const n=D[P];for(const a of n)if(String(a.id)===e)return a}),[D,P]),ke=(0,v.useCallback)((e=>{te(!0);const{from:n,[C.NOMINATE]:a,[C.POOL]:s,[C.VALUE]:r,[C.TYPE]:o}=e;let i;if(s&&o===t.WQ.POOLED){const e=Ee(s);i=(0,d.qg)({amount:r,chain:P,nominatorMetadata:J,selectedPool:e,address:n})}else{const e=Te((0,u.in)(a));i=(0,d.Qx)({amount:r,chain:P,nominatorMetadata:J,selectedValidators:e,address:n,type:t.WQ.NOMINATED})}setTimeout((()=>{i.then(Ne).catch(ve).finally((()=>{te(!1)}))}),300)}),[Ee,P,J,Te,Ne,ve]),ye=(0,v.useCallback)((()=>H?(0,O.jsxs)(o.oB,{className:"meta-info",labelColorScheme:"gray",spaceSize:"xs",valueColorScheme:"light",children:[H.expectedReturn&&(0,O.jsx)(o.oB.Number,{label:a("Estimated earnings:"),suffix:"% / year",value:H.expectedReturn}),H.minStake&&(0,O.jsx)(o.oB.Number,{decimals:me,label:a("Minimum active:"),suffix:he,value:xe,valueColorSchema:"success"})]}):null),[H,me,he,a,xe]),je=(0,c.Ey)(A);return(0,v.useEffect)((()=>{const e=(null==F?void 0:F.address)||"";e&&((0,u.W_)(e)||_(e))}),[null==F?void 0:F.address,_]),(0,v.useEffect)((()=>{T&&T!==i.EN&&Z(T)}),[Z,T]),(0,v.useEffect)((()=>{M(pe)}),[pe,M]),(0,v.useEffect)((()=>{L(!0)}),[L]),(0,v.useEffect)((()=>{R(!H)}),[H,R]),(0,v.useEffect)((()=>{let e=!1;return P&&A&&(0,k.x1)(P,S||i.EN,e,re,ie),()=>{e=!0}}),[A,S,P]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y.tc,{children:(0,O.jsxs)(o.FE,{className:n,resolve:w.awaitStores(["staking"]),children:[(0,O.jsxs)(m.Z,{className:"form-container form-space-sm",form:G,initialValues:ge,onFieldsChange:be,onFinish:ke,children:[(0,O.jsx)(m.Z.Item,{className:"staking-type",hidden:S!==i.EN,name:C.TYPE,children:(0,O.jsx)(o.Ee,{optionType:"button",options:[{label:"Pools",value:t.WQ.POOLED,disabled:Q},{label:"Nominate",value:t.WQ.NOMINATED}]})}),(0,O.jsx)(m.Z.Item,{hidden:!fe,name:"from",children:(0,O.jsx)(o.pK,{filter:(0,k.nC)(V,q,T)})}),!fe&&(0,O.jsx)(m.Z.Item,{name:"asset",children:(0,O.jsx)(o.kB,{disabled:T!==i.EN||!A,items:ee,prefixShape:"circle"})}),(0,O.jsx)(y.ZL,{address:A,chain:P,className:"account-free-balance",label:a("Available balance:"),onBalanceReady:ce}),(0,O.jsxs)("div",{className:"form-row",children:[fe&&(0,O.jsx)(m.Z.Item,{name:"asset",children:(0,O.jsx)(o.kB,{disabled:T!==i.EN||!A,items:ee,prefixShape:"circle"})}),(0,O.jsx)(m.Z.Item,{name:C.VALUE,rules:[{required:!0},({getFieldValue:e})=>({validator:(n,s)=>{const r=e(C.TYPE),o=new g.Z(s);if(r===t.WQ.POOLED){if(o.lte(0))return Promise.reject(new Error("Value must be greater than 0"))}else if((null==J||!J.isBondedBefore||!ne)&&o.lte(0))return Promise.reject(new Error("Value must be greater than 0"));if(o.gt(X.value)){const e=new g.Z(X.value).div(i.aP.pow(me)).toFixed(6);return Promise.reject(a("Value must be equal or less than {{number}}",{replace:{number:e}}))}return Promise.resolve()}})],statusHelpAsTooltip:!0,children:(0,O.jsx)(o._Z,{decimals:P&&A?me:-1,maxValue:ue,showMaxButton:!1})})]}),(0,O.jsx)(m.Z.Item,{hidden:q!==t.WQ.POOLED,name:C.POOL,children:(0,O.jsx)(o.Tz,{chain:P,from:A,label:a("Select pool"),loading:se})}),(0,O.jsx)(m.Z.Item,{hidden:q!==t.WQ.NOMINATED,name:C.NOMINATE,children:(0,O.jsx)(o.OF,{chain:I?P:"",from:I?A:"",loading:oe})})]}),H&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(h.Z,{className:"staking-divider"}),ye()]})]})}),(0,O.jsx)(y.Xd,{errors:[],warnings:[],children:(0,O.jsx)(f.Z,{disabled:z||!le,icon:(0,O.jsx)(p.Z,{phosphorIcon:x.Z,weight:"fill"}),loading:ae,onClick:je(G.submit),children:a("Stake")})}),H&&(0,O.jsx)(o.R5,{activeNominators:H.nominatorCount,estimatedEarning:H.expectedReturn,inflation:H.inflation,maxValidatorPerNominator:H.maxValidatorPerNominator,minimumActive:{decimals:me,value:xe,symbol:he},stakingType:q,unstakingPeriod:H.unstakingPeriod})]})})).withConfig({displayName:"Stake",componentId:"sc-abqz0v-0"})((({theme:{token:e}})=>({".staking-type":{marginBottom:e.margin},".account-free-balance":{marginBottom:e.marginXS},".meta-info":{marginTop:e.paddingSM},".react-tabs__tab-list":{marginLeft:0,marginRight:0},".staking-divider":{marginTop:e.margin+2,marginBottom:e.marginSM}})))}}]);