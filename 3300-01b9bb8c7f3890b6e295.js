"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[3300,3738],{15875:(e,n,t)=>{t.d(n,{D1:()=>u,Ff:()=>c,Kn:()=>h,VN:()=>d,k2:()=>m,tA:()=>l});var a=t(9661),r=t(54533),o=t(62197),s=t.n(o),i=t(95292);function l(e){return r.H_.amplitude.includes(e)?"showByValue":r.H_.astar.includes(e)?"mixed":r.H_.para.includes(e)?"showByValidator":"showByValue"}let c=function(e){return e.STAKE="STAKE",e.UNSTAKE="UNSTAKE",e.WITHDRAW="WITHDRAW",e.CLAIM_REWARD="CLAIM_REWARD",e.CANCEL_UNSTAKE="CANCEL_UNSTAKE",e}({});function d(e,n){return n===a.WQ.POOLED?[c.STAKE,c.UNSTAKE,c.WITHDRAW,c.CLAIM_REWARD]:r.H_.para.includes(e)?[c.STAKE,c.UNSTAKE,c.WITHDRAW,c.CANCEL_UNSTAKE]:r.H_.astar.includes(e)?[c.STAKE,c.UNSTAKE,c.WITHDRAW,c.CLAIM_REWARD]:r.H_.amplitude.includes(e)?[c.STAKE,c.UNSTAKE,c.WITHDRAW]:[c.STAKE,c.UNSTAKE,c.WITHDRAW,c.CANCEL_UNSTAKE]}function u(e,n){const t=[c.STAKE],o=new(s())(e.activeStake);if(e.activeStake&&o.gt(i.nw)){t.push(c.UNSTAKE);const o=r.H_.astar.includes(e.chain),l=r.H_.amplitude.includes(e.chain),d=new(s())(n||"0");((e.type===a.WQ.POOLED||l)&&d.gt(i.nw)||o)&&t.push(c.CLAIM_REWARD)}if(e.unstakings.length>0){t.push(c.CANCEL_UNSTAKE);let n=!1;for(const t of e.unstakings)if(t.status===a.lz.CLAIMABLE){n=!0;break}n&&t.push(c.WITHDRAW)}return t}function m(e,n){return!(e===a.WQ.POOLED||!r.H_.astar.includes(n)&&!r.H_.amplitude.includes(n)&&!r.H_.para.includes(n))}function h(e){const n=e.unstakings;let t;for(const e of n)if(e.status===a.lz.CLAIMABLE){t=e;break}return t}},13738:(e,n,t)=>{t.r(n),t.d(n,{TransactionContext:()=>A,default:()=>T});var a=t(9661),r=t(3401),o=t(11637),s=t(87574),i=t(75576),l=t(33283),c=t(12162),d=t(90809),u=t(72779),m=t.n(u),h=t(2784),f=t(35185),p=t(73557),k=t(38338),g=t(68774),x=t(52322);const A=h.createContext({transactionType:a.Vv.TRANSFER_BALANCE,from:"",setFrom:e=>{},chain:"",setChain:e=>{},asset:"",setAsset:e=>{},onDone:e=>{},onClickRightBtn:()=>{},setShowRightBtn:e=>{},setDisabledRightBtn:e=>{}}),T=(0,k.ZP)((function({className:e}){const{t:n}=(0,l.$G)(),t=(0,p.TH)(),u=(0,p.s0)(),{activeModal:k}=(0,h.useContext)(c.t),T=(0,h.useContext)(i.R0),{currentAccount:E,isAllAccount:v}=(0,f.v9)((e=>e.accountState)),y=(0,h.useMemo)((()=>{switch(t.pathname.split("/")[2]||""){case"stake":return a.Vv.STAKING_JOIN_POOL;case"unstake":return a.Vv.STAKING_LEAVE_POOL;case"cancel-unstake":return a.Vv.STAKING_CANCEL_UNSTAKE;case"claim-reward":return a.Vv.STAKING_CLAIM_REWARD;case"withdraw":return a.Vv.STAKING_WITHDRAW;case"compound":return a.Vv.STAKING_COMPOUNDING;case"send-nft":return a.Vv.SEND_NFT;default:return a.Vv.TRANSFER_BALANCE}}),[t.pathname]),S=(0,h.useMemo)((()=>{switch(t.pathname.split("/")[2]||""){case"stake":case"unstake":case"cancel-unstake":case"claim-reward":case"withdraw":case"compound":return"/home/staking";case"send-nft":return"/home/nfts/collections";default:return"/home/tokens"}}),[t.pathname]),C=(0,h.useMemo)((()=>{const e={};for(const[t,a]of Object.entries(s.mG))e[t]=n(a);return e}),[n]);(0,l.qg)(S);const[N,b]=(0,h.useState)(v?"":(null==E?void 0:E.address)||""),[w,L]=(0,h.useState)(""),[I,j]=(0,h.useState)(""),[_,R]=(0,h.useState)(!1),[W,D]=(0,h.useState)(!1),O=(0,l.xC)(),M=(0,h.useCallback)((()=>{u(S)}),[S,u]),K=(0,h.useCallback)((e=>{const n=(0,g.u)(N)?"ethereum":"substrate";u(`/transaction-done/${n}/${w}/${e}`,{replace:!0})}),[N,w,u]),Z=(0,h.useCallback)((()=>{y===a.Vv.STAKING_JOIN_POOL&&k(o.p)}),[k,y]),B=(0,h.useMemo)((()=>_?[{disabled:W,icon:(0,x.jsx)(r.sz,{}),onClick:()=>Z()}]:[]),[W,Z,_]);return(0,h.useEffect)((()=>{""!==I&&O(I)}),[I,O]),(0,x.jsx)(r.Ar.Home,{showFilterIcon:!0,showTabBar:!1,children:(0,x.jsx)(A.Provider,{value:{transactionType:y,from:N,setFrom:b,chain:w,setChain:L,onDone:K,onClickRightBtn:Z,setShowRightBtn:R,setDisabledRightBtn:D,asset:I,setAsset:j},children:(0,x.jsx)(r.FE,{resolve:T.awaitStores(["chainStore","assetRegistry","balance"]),children:(0,x.jsxs)("div",{className:m()(e,"transaction-wrapper"),children:[(0,x.jsx)(d.Z,{background:"transparent",center:!0,className:"transaction-header",onBack:M,rightButtons:B,showBackButton:!0,title:C[y]}),(0,x.jsx)(p.j3,{})]})})})})})).withConfig({displayName:"Transaction",componentId:"sc-1qz55vb-0"})((({theme:e})=>{const n=e.token;return{height:"100%",display:"flex",flexDirection:"column",".transaction-header":{paddingTop:n.paddingSM,paddingBottom:n.paddingSM,flexShrink:0},".transaction-content":{flex:"1 1 400px",paddingLeft:n.padding,paddingRight:n.padding,overflow:"auto"},".transaction-footer":{display:"flex",flexWrap:"wrap",padding:`${n.paddingMD}px ${n.padding}px ${n.padding}px`,marginBottom:n.padding,gap:n.paddingXS,".error-messages":{width:"100%",color:n.colorError},".warning-messages":{width:"100%",color:n.colorWarning},".ant-btn":{flex:1},".full-width":{minWidth:"100%"}}}}))},52274:(e,n,t)=>{t.d(n,{nC:()=>f,x1:()=>p.x1,bO:()=>i});var a=t(80949),r=t(54533);const o="RMRK",s="SEND";function i(e,n){return e.type===a.Ym.ERC721?function(e){return{contractAddress:e.collectionId,tokenId:parseInt(e.id)}}(e):e.type===a.Ym.PSP34?function(e){return{contractAddress:e.collectionId,onChainOption:e.onChainOption,isPsp34:!0,networkKey:e.chain}}(e):r.r$.acala.includes(n)||r.r$.karura.includes(n)||r.r$.bitcountry.includes(n)?function(e){return{collectionId:parseInt(e.collectionId),itemId:parseInt(e.id),networkKey:e.chain}}(e):r.r$.rmrk.includes(n)?function(e){return e.rmrk_ver?{remark:`${o}::${s}::${e.rmrk_ver}::${e.id}::`,networkKey:e.chain}:{}}(e):r.r$.statemine.includes(n)||r.r$.unique_network.includes(n)?function(e){return{collectionId:parseInt(e.collectionId),itemId:parseInt(e.id),networkKey:e.chain}}(e):{}}var l=t(9661),c=t(36926),d=t(95110),u=t(95798),m=t(68774);const h=(e,n)=>t=>!(t.originGenesisHash&&n&&(0,c.zb)(n)!==t.originGenesisHash||(0,u.W_)(t.address)||t.isReadOnly||e===l.WQ.POOLED&&(0,m.u)(t.address)),f=(e,n,t)=>a=>{if(t&&t!==d.EN){const r=e[t],o=h(n,r),s=(0,c.h4)(r);return o(a)&&s===(0,m.u)(a.address)}return h(n)(a)};var p=t(11164)},94684:(e,n,t)=>{t.d(n,{gy:()=>u,ZL:()=>f,tc:()=>p,Xd:()=>k});var a=t(43246),r=t(96562),o=t(25690),s=t(72779),i=t.n(s),l=t(2784),c=t(38338),d=t(52322);const u=(0,c.ZP)((({bondedBalance:e,className:n,decimals:t,label:s,symbol:l})=>{const{t:u}=(0,a.Z)(),{token:m}=(0,c.Fg)();return(0,d.jsxs)(r.Z.Paragraph,{className:i()(n,"bonded-balance"),children:[(0,d.jsx)(o.Z,{decimal:t,decimalColor:m.colorTextTertiary,intColor:m.colorTextTertiary,size:14,suffix:l,unitColor:m.colorTextTertiary,value:e||0}),s||u("Bonded")]})})).withConfig({displayName:"BondedBalance",componentId:"sc-15arqr7-0"})((({theme:{token:e}})=>({display:"flex",color:e.colorTextTertiary,"&.ant-typography":{marginBottom:0},".ant-number":{marginRight:"0.3em"}})));var m=t(33283),h=t(96108);const f=(0,c.ZP)((({address:e,chain:n,className:t,label:s,onBalanceReady:u,tokenSlug:f})=>{const{t:p}=(0,a.Z)(),{token:k}=(0,c.Fg)(),{error:g,isLoading:x,nativeTokenBalance:A,nativeTokenSlug:T,tokenBalance:E}=(0,m.L5)(n,e,f);return(0,l.useEffect)((()=>{null==u||u(!x&&!g)}),[g,x,u]),e||n?(0,d.jsxs)(r.Z.Paragraph,{className:i()(t,"free-balance"),children:[s||p("Sender available balance:")," ",x&&(0,d.jsx)(h.Z,{size:14}),g&&(0,d.jsx)(r.Z.Text,{className:"error-message",children:g}),!x&&!g&&!!T&&(0,d.jsx)(o.Z,{decimal:A.decimals||18,decimalColor:k.colorTextTertiary,intColor:k.colorTextTertiary,size:14,suffix:A.symbol,unitColor:k.colorTextTertiary,value:A.value}),!x&&!g&&!!f&&f!==T&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("span",{className:"__name",children:[" ",p("and")," "]}),(0,d.jsx)(o.Z,{decimal:(null==E?void 0:E.decimals)||18,decimalColor:k.colorTextTertiary,intColor:k.colorTextTertiary,size:14,suffix:null==E?void 0:E.symbol,unitColor:k.colorTextTertiary,value:E.value})]})]}):(0,d.jsx)(d.Fragment,{})})).withConfig({displayName:"FreeBalance",componentId:"sc-f3bkwa-0"})((({theme:{token:e}})=>({display:"flex",flexWrap:"wrap",color:e.colorTextTertiary,".error-message":{color:e.colorError},"&.ant-typography":{marginBottom:0}}))),p=(0,c.ZP)((({children:e,className:n=""})=>(0,d.jsx)("div",{className:`transaction-content ${n}`,children:e}))).withConfig({displayName:"TransactionContent",componentId:"sc-17nushy-0"})((({theme:e})=>({}))),k=(0,c.ZP)((({children:e,className:n="",errors:t,warnings:a})=>(0,d.jsxs)("div",{className:`transaction-footer ${n}`,children:[t.length>0&&(0,d.jsx)("div",{className:"error-messages",children:t.map(((e,n)=>(0,d.jsx)("div",{children:e},n)))}),a.length>0&&(0,d.jsx)("div",{className:"warning-messages",children:a.map(((e,n)=>(0,d.jsx)("div",{children:e},n)))}),e]}))).withConfig({displayName:"TransactionFooter",componentId:"sc-bpci6r-0"})((({theme:e})=>({})))},53300:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var a=t(9661),r=t(15875),o=t(3401),s=t(87574),i=t(75576),l=t(33283),c=t(92936),d=t(95798),u=t(12798),m=t(92280),h=t(99656),f=t(72558),p=t(72779),k=t.n(p),g=t(96777),x=t(2784),A=t(96217),T=t(73557),E=t(38338),v=t(52274),y=t(94684),S=t(13738),C=t(52322),N=function(e){return e.VALUE="value",e.VALIDATOR="validator",e}(N||{});const b=(e,n,t,a)=>r=>{const o=e.find((e=>e.address.toLowerCase()===r.address.toLowerCase()));return new f.Z((null==o?void 0:o.activeStake)||s.nw).gt(s.nw)&&(0,v.nC)(n,t,a)(r)},w=(0,E.ZP)((e=>{const{className:n=""}=e,{chain:t,type:s}=(0,T.UO)(),p=s,{t:E}=(0,A.$)(),v=(0,x.useContext)(i.R0),{chain:w,from:L,onDone:I,setChain:j,setFrom:_}=(0,x.useContext)(S.TransactionContext),R=(0,l.v9)((e=>e.accountState.currentAccount)),W=(0,l.v9)((e=>e.chainStore.chainInfoMap)),D=(0,d.W_)((null==R?void 0:R.address)||""),[O]=u.Z.useForm(),[M,K]=(0,x.useState)(!0),Z=(0,x.useMemo)((()=>({from:L,chain:w,asset:"",[N.VALIDATOR]:"",[N.VALUE]:"0"})),[w,L]),{decimals:B,symbol:$}=(0,l.cR)(t||""),F=(0,l.aJ)(t),H=(0,l._y)(t,p),V=(0,l._y)(t,p,L)[0],P=u.Z.useWatch(N.VALIDATOR,O),U=(0,x.useMemo)((()=>V?V.nominations.find((e=>e.validatorAddress===P)):void 0),[P,V]),G=(0,x.useMemo)((()=>(0,r.k2)(p,t||"")),[t,p]),z=(0,x.useMemo)((()=>G?(null==U?void 0:U.activeStake)||"0":(null==V?void 0:V.activeStake)||"0"),[G,null==V?void 0:V.activeStake,null==U?void 0:U.activeStake]),q=(0,x.useMemo)((()=>{if(p===a.WQ.POOLED)return(null==F?void 0:F.minJoinNominationPool)||"0";{const e=new f.Z((null==F?void 0:F.minStake)||"0"),n=new f.Z((null==U?void 0:U.validatorMinStake)||"0");return e.gt(n)?e.toString():n.toString()}}),[null==F?void 0:F.minJoinNominationPool,null==F?void 0:F.minStake,null==U?void 0:U.validatorMinStake,p]),Q=(0,x.useMemo)((()=>{if(F){const e=F.unstakingPeriod;if(e>=24){const n=Math.floor(e/24),t=e-24*n;return`${n} ${E("days")}${t?` ${t} ${E("hours")}`:""}`}return`${e} ${E("hours")}`}return E("unknown time")}),[F,E]),[J,X]=(0,x.useState)(!1),[Y,ee]=(0,x.useState)(!0),{onError:ne,onSuccess:te}=(0,l.Ls)(I),ae=(0,x.useCallback)(((e,n)=>{const{error:t}=(0,d.ij)(n),a=(0,d.eW)(n),r=(0,d.eW)(e),{from:o}=r;o&&_(o);const s={};for(const[e,n]of Object.entries(a))s[e]=!!n;G||(s[N.VALIDATOR]=!0),ee(t||Object.values(s).some((e=>!e)))}),[G,_]),re=(0,x.useCallback)((e=>{const{[N.VALUE]:n,[N.VALIDATOR]:t}=e;let r;if(V.type===a.WQ.POOLED){const e={amount:n,chain:V.chain,nominatorMetadata:V};r=(0,c.kG)(e)}else{const e={amount:n,chain:V.chain,nominatorMetadata:V};G&&(e.validatorAddress=t||""),r=(0,c.Hb)(e)}X(!0),setTimeout((()=>{r.then(te).catch(ne).finally((()=>{X(!1)}))}),300)}),[G,V,ne,te]),oe=(0,x.useCallback)((()=>(0,C.jsx)(y.gy,{bondedBalance:z,className:"bonded-balance",decimals:B,symbol:$})),[z,B,$]),se=(0,l.Ey)(L);return(0,x.useEffect)((()=>{const e=(null==R?void 0:R.address)||"";e&&((0,d.W_)(e)||_(e))}),[null==R?void 0:R.address,_]),(0,x.useEffect)((()=>{j(t||"")}),[j,t]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y.tc,{children:(0,C.jsx)(o.FE,{resolve:v.awaitStores(["staking"]),children:(0,C.jsxs)(u.Z,{className:`${n} form-container form-space-xxs`,form:O,initialValues:Z,name:"unstake-form",onFieldsChange:ae,onFinish:re,children:[(0,C.jsx)(u.Z.Item,{hidden:!D,name:"from",children:(0,C.jsx)(o.pK,{filter:b(H,W,p,t),label:E("Unstake from account")})}),(0,C.jsx)(y.ZL,{address:L,chain:w,className:"free-balance",label:E("Available balance:"),onBalanceReady:K}),G&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u.Z.Item,{name:N.VALIDATOR,children:(0,C.jsx)(o.cq,{disabled:!L,label:E("Select collator"),nominators:L&&(null==V?void 0:V.nominations)||[]})}),oe()]}),(0,C.jsx)(u.Z.Item,{name:N.VALUE,rules:[{required:!0,message:"Amount is required"},(0,d.e6)(q,z,B)],statusHelpAsTooltip:!0,children:(0,C.jsx)(o._Z,{decimals:B,maxValue:z})}),!G&&oe(),(0,C.jsx)("div",{className:k()("text-light-4",{mt:G}),children:E("Once unbonded, your funds would be available after {{time}}.",{replace:{time:Q}})})]})})}),(0,C.jsx)(y.Xd,{errors:[],warnings:[],children:(0,C.jsx)(m.Z,{disabled:Y||!M,icon:(0,C.jsx)(h.Z,{phosphorIcon:g.Z,weight:"fill"}),loading:J,onClick:se(O.submit),children:E("Submit")})})]})})).withConfig({displayName:"Unbond",componentId:"sc-1wm67x9-0"})((({theme:{token:e}})=>({".bonded-balance, .free-balance":{marginBottom:e.margin},".meta-info":{marginTop:e.paddingSM},".mt":{marginTop:e.marginSM}})))},96777:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(2784),r=t(21890),o=t(76712),s=new Map;s.set("bold",(function(e){return a.createElement(a.Fragment,null,a.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),a.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),s.set("duotone",(function(e){return a.createElement(a.Fragment,null,a.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),a.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),a.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),s.set("fill",(function(){return a.createElement(a.Fragment,null,a.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"}))})),s.set("light",(function(e){return a.createElement(a.Fragment,null,a.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),a.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),s.set("thin",(function(e){return a.createElement(a.Fragment,null,a.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),a.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),s.set("regular",(function(e){return a.createElement(a.Fragment,null,a.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),a.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var i=function(e,n){return(0,r._)(e,n,s)},l=(0,a.forwardRef)((function(e,n){return a.createElement(o.Z,Object.assign({ref:n},e,{renderPath:i}))}));l.displayName="MinusCircle";const c=l}}]);