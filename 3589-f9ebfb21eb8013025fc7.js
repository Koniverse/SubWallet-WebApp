"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[3589],{52274:(e,n,t)=>{t.d(n,{nC:()=>h,x1:()=>E.x1,bO:()=>o});var a=t(80949),s=t(54533);const i="RMRK",r="SEND";function o(e,n){return e.type===a.Ym.ERC721?function(e){return{contractAddress:e.collectionId,tokenId:parseInt(e.id)}}(e):e.type===a.Ym.PSP34?function(e){return{contractAddress:e.collectionId,onChainOption:e.onChainOption,isPsp34:!0,networkKey:e.chain}}(e):s.r$.acala.includes(n)||s.r$.karura.includes(n)||s.r$.bitcountry.includes(n)?function(e){return{collectionId:parseInt(e.collectionId),itemId:parseInt(e.id),networkKey:e.chain}}(e):s.r$.rmrk.includes(n)?function(e){return e.rmrk_ver?{remark:`${i}::${r}::${e.rmrk_ver}::${e.id}::`,networkKey:e.chain}:{}}(e):s.r$.statemine.includes(n)||s.r$.unique_network.includes(n)?function(e){return{collectionId:parseInt(e.collectionId),itemId:parseInt(e.id),networkKey:e.chain}}(e):{}}var l=t(9661),c=t(36926),u=t(95110),d=t(95798),m=t(68774);const f=(e,n)=>t=>!(t.originGenesisHash&&n&&(0,c.zb)(n)!==t.originGenesisHash||(0,d.W_)(t.address)||t.isReadOnly||e===l.WQ.POOLED&&(0,m.u)(t.address)),h=(e,n,t)=>a=>{if(t&&t!==u.EN){const s=e[t],i=f(n,s),r=(0,c.h4)(s);return i(a)&&r===(0,m.u)(a.address)}return f(n)(a)};var E=t(11164)},63589:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var a=t(9661),s=t(54533),i=t(36926),r=t(53334),o=t(87574),l=t(75576),c=t(33283),u=t(2784),d=t(35185),m=t(92936),f=t(95798),h=t(12798),E=t(81345),g=t(92280),p=t(99656),x=t(72558),v=t(94344),O=t(96217),b=t(73557),N=t(38338),k=t(68774),P=t(52274),I=t(94684),j=t(13738),y=t(52322),S=function(e){return e.VALUE="amount",e.NOMINATE="nominate",e.POOL="pool",e.TYPE="type",e}(S||{});const M=(0,N.ZP)((e=>{const{className:n}=e,{t}=(0,O.$)(),{chain:N,type:M}=(0,b.UO)(),T=(0,u.useContext)(l.R0),{asset:A,chain:w,from:C,onDone:L,setAsset:W,setChain:D,setDisabledRightBtn:Z,setFrom:Q,setShowRightBtn:_}=(0,u.useContext)(j.TransactionContext),{nominationPoolInfoMap:B,validatorInfoMap:R}=(0,c.v9)((e=>e.bonding)),V=(0,c.v9)((e=>e.chainStore.chainInfoMap)),$=(0,c.wE)(w),F=(0,c.v9)((e=>e.accountState.currentAccount)),Y=function(e){const n=(0,d.v9)((e=>e.assetRegistry.assetRegistry));return(0,u.useMemo)((()=>n[e]),[n,e])}(A),K=(0,k.u)(null==F?void 0:F.address),U=(0,u.useMemo)((()=>{if(K)return a.WQ.NOMINATED;switch(M){case a.WQ.POOLED:return a.WQ.POOLED;case a.WQ.NOMINATED:return a.WQ.NOMINATED;default:return a.WQ.POOLED}}),[M,K]),[H]=h.Z.useForm(),[q,z]=(0,u.useState)(!0),G=h.Z.useWatch(S.TYPE,H),J=(0,c.aJ)(w),X=(0,c._y)(w,G,C),ee=(0,u.useMemo)((()=>X[0]),[X]),{nativeTokenBalance:ne}=(0,c.L5)(w,C),te=(0,c.O_)(G,C,N),ae=(0,u.useMemo)((()=>s.H_.relay.includes(w)),[w]),[se,ie]=(0,u.useState)(!1),[re,oe]=(0,u.useState)(!1),[le,ce]=(0,u.useState)(!1),[ue,de]=(0,u.useState)(!0),[me,fe]=(0,u.useState)(!1),[,he]=(0,u.useState)({}),Ee=(0,u.useMemo)((()=>Y&&Y.minAmount||"0"),[Y]),ge=(0,u.useMemo)((()=>{const e=new x.Z(ne.value),n=new x.Z(Ee);return n.gte(e)?"0":e.minus(n).toString()}),[Ee,ne.value]),{decimals:pe,symbol:xe}=(0,c.cR)(w),ve=(0,f.W_)((null==F?void 0:F.address)||""),Oe=(0,c.uH)(N||""),be=(0,u.useMemo)((()=>({asset:Oe,from:C,chain:w,[S.VALUE]:"0",[S.POOL]:"",[S.NOMINATE]:"",[S.TYPE]:U})),[Oe,C,U,w]),Ne=(0,u.useMemo)((()=>G===a.WQ.POOLED?(null==J?void 0:J.minPoolBonding)||"0":(null==J?void 0:J.minStake)||"0"),[null==J?void 0:J.minPoolBonding,null==J?void 0:J.minStake,G]),{onError:ke,onSuccess:Pe}=(0,c.Ls)(L),Ie=(0,u.useCallback)(((e,n)=>{const{error:t}=(0,f.ij)(n),s=(0,f.eW)(n),r=(0,f.eW)(e),{amount:o,asset:l,from:c}=r;if(o&&fe(!0),c&&Q(c),void 0!==l){const e=(0,i.QJ)(l);W(l),D(e)}const u={},d=s[S.TYPE];for(const[e,n]of Object.entries(s))u[e]=!!n;d===a.WQ.NOMINATED?u.pool=!0:d===a.WQ.POOLED&&(u.nominate=!0),z(t||Object.values(u).some((e=>!e)))}),[W,D,Q]),je=(0,u.useCallback)((e=>{const n=R[w];if(!n)return[];const t=[];return n.forEach((n=>{e.includes((0,f.k1)(n.address,42))&&t.push(n)})),t}),[w,R]),ye=(0,u.useCallback)((e=>{const n=B[w];for(const t of n)if(String(t.id)===e)return t}),[B,w]),Se=(0,u.useCallback)((e=>{ie(!0);const{from:n,[S.NOMINATE]:t,[S.POOL]:s,[S.VALUE]:i,[S.TYPE]:r}=e;let o;if(s&&r===a.WQ.POOLED){const e=ye(s);o=(0,m.qg)({amount:i,chain:w,nominatorMetadata:ee,selectedPool:e,address:n})}else{const e=je((0,f.in)(t));o=(0,m.Qx)({amount:i,chain:w,nominatorMetadata:ee,selectedValidators:e,address:n,type:a.WQ.NOMINATED})}setTimeout((()=>{o.then(Pe).catch(ke).finally((()=>{ie(!1)}))}),300)}),[ye,w,ee,je,Pe,ke]),Me=(0,u.useCallback)((()=>J?(0,y.jsxs)(r.oB,{className:"meta-info",labelColorScheme:"gray",spaceSize:"xs",valueColorScheme:"light",children:[J.expectedReturn&&(0,y.jsx)(r.oB.Number,{label:t("Estimated earnings:"),suffix:"% / year",value:J.expectedReturn}),J.minStake&&(0,y.jsx)(r.oB.Number,{decimals:pe,label:t("Minimum active:"),suffix:xe,value:Ne,valueColorSchema:"success"})]}):null),[J,pe,xe,t,Ne]),Te=(0,c.Ey)(C);return(0,u.useEffect)((()=>{const e=(null==F?void 0:F.address)||"";e&&((0,f.W_)(e)||Q(e))}),[null==F?void 0:F.address,Q]),(0,u.useEffect)((()=>{N&&N!==o.EN&&D(N)}),[D,N]),(0,u.useEffect)((()=>{W(Oe)}),[Oe,W]),(0,u.useEffect)((()=>{_(!0)}),[_]),(0,u.useEffect)((()=>{Z(!J)}),[J,Z]),(0,u.useEffect)((()=>{let e=!1;return w&&C&&null!=$&&$.active&&(0,P.x1)(w,M||o.EN,e,oe,ce),()=>{e=!0}}),[C,M,w,null==$?void 0:$.active]),(0,u.useEffect)((()=>{let e=!1;return me&&(e||setTimeout((()=>{H.validateFields([S.VALUE]).finally((()=>he({})))}),100)),()=>{e=!0}}),[H,ne.value]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(I.tc,{children:(0,y.jsxs)(r.FE,{className:n,resolve:T.awaitStores(["staking"]),children:[(0,y.jsxs)(h.Z,{className:"form-container form-space-sm",form:H,initialValues:be,onFieldsChange:Ie,onFinish:Se,children:[(0,y.jsx)(h.Z.Item,{className:"staking-type",hidden:M!==o.EN,name:S.TYPE,children:(0,y.jsx)(r.Ee,{optionType:"button",options:[{label:"Pools",value:a.WQ.POOLED,disabled:K},{label:"Nominate",value:a.WQ.NOMINATED}]})}),(0,y.jsx)(h.Z.Item,{hidden:!ve,name:"from",children:(0,y.jsx)(r.pK,{filter:(0,P.nC)(V,G,N)})}),!ve&&(0,y.jsx)(h.Z.Item,{name:"asset",children:(0,y.jsx)(r.kB,{disabled:N!==o.EN||!C,items:te,prefixShape:"circle"})}),(0,y.jsx)(I.ZL,{address:C,chain:w,className:"account-free-balance",label:t("Available balance:"),onBalanceReady:de}),(0,y.jsxs)("div",{className:"form-row",children:[ve&&(0,y.jsx)(h.Z.Item,{name:"asset",children:(0,y.jsx)(r.kB,{disabled:N!==o.EN||!C,items:te,prefixShape:"circle"})}),(0,y.jsx)(h.Z.Item,{name:S.VALUE,rules:[{required:!0},({getFieldValue:e})=>({validator:(n,s)=>{const i=e(S.TYPE),r=new x.Z(s);if(i===a.WQ.POOLED){if(r.lte(0))return Promise.reject(new Error("Amount must be greater than 0"))}else if((null==ee||!ee.isBondedBefore||!ae)&&r.lte(0))return Promise.reject(new Error("Amount must be greater than 0"));return r.gt(ne.value)?Promise.reject(t("Amount cannot exceed your balance")):Promise.resolve()}})],statusHelpAsTooltip:!0,children:(0,y.jsx)(r._Z,{decimals:w&&C?pe:-1,maxValue:ge,showMaxButton:!1})})]}),(0,y.jsx)(h.Z.Item,{hidden:G!==a.WQ.POOLED,name:S.POOL,children:(0,y.jsx)(r.Tz,{chain:w,from:C,label:t("Select pool"),loading:re})}),(0,y.jsx)(h.Z.Item,{hidden:G!==a.WQ.NOMINATED,name:S.NOMINATE,children:(0,y.jsx)(r.OF,{chain:A?w:"",from:A?C:"",loading:le})})]}),J&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E.Z,{className:"staking-divider"}),Me()]})]})}),(0,y.jsx)(I.Xd,{errors:[],warnings:[],children:(0,y.jsx)(g.Z,{disabled:q||!ue,icon:(0,y.jsx)(p.Z,{phosphorIcon:v.Z,weight:"fill"}),loading:se,onClick:Te(H.submit),children:t("Stake")})}),J&&(0,y.jsx)(r.R5,{activeNominators:J.nominatorCount,estimatedEarning:J.expectedReturn,inflation:J.inflation,maxValidatorPerNominator:J.maxValidatorPerNominator,minimumActive:{decimals:pe,value:Ne,symbol:xe},stakingType:G,unstakingPeriod:J.unstakingPeriod})]})})).withConfig({displayName:"Stake",componentId:"sc-abqz0v-0"})((({theme:{token:e}})=>({".staking-type":{marginBottom:e.margin},".account-free-balance":{marginBottom:e.marginXS},".meta-info":{marginTop:e.paddingSM},".react-tabs__tab-list":{marginLeft:0,marginRight:0},".staking-divider":{marginTop:e.margin+2,marginBottom:e.marginSM}})))}}]);