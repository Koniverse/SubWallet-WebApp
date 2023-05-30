"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[3589],{63589:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a,s=n(9661),i=n(54533),o=n(36926),r=n(56858),l=n(53334),c=n(13825),u=n(75576),m=n(3612),d=n(33283),f=n(2784),h=n(35185),E=n(92936),x=n(95798),g=n(12798),b=n(81345),N=n(92280),v=n(99656),O=n(72558),p=n(94344),j=n(21427),P=n(73557),S=n(38338),T=n(68774),k=n(52274),M=n(94684),A=n(55446),y=n(52322);!function(e){e.VALUE="amount",e.NOMINATE="nominate",e.POOL="pool",e.TYPE="type"}(a||(a={}));const I=(0,S.ZP)((e=>{const{className:t}=e,{t:n}=(0,j.$)(),{chain:S,type:I}=(0,P.UO)(),W=(0,f.useContext)(u.R0),{isWebUI:L}=(0,f.useContext)(m.sG),{setStakingType:w}=(0,P.bx)(),{asset:C,chain:Z,from:D,onDone:Q,setAsset:B,setChain:_,setDisabledRightBtn:R,setFrom:V,setShowRightBtn:F}=(0,f.useContext)(A.TransactionContext),{nominationPoolInfoMap:U,validatorInfoMap:Y}=(0,d.v9)((e=>e.bonding)),J=(0,d.v9)((e=>e.chainStore.chainInfoMap)),q=(0,d.wE)(Z),z=(0,d.v9)((e=>e.accountState.currentAccount)),H=function(e){const t=(0,h.v9)((e=>e.assetRegistry.assetRegistry));return(0,f.useMemo)((()=>t[e]),[t,e])}(C),X=(0,T.u)(null==z?void 0:z.address),G=(0,f.useMemo)((()=>{if(X)return s.WQ.NOMINATED;switch(I){case s.WQ.POOLED:return s.WQ.POOLED;case s.WQ.NOMINATED:return s.WQ.NOMINATED;default:return s.WQ.POOLED}}),[I,X]),[K]=g.Z.useForm(),[$,ee]=(0,f.useState)(!0),te=g.Z.useWatch(a.TYPE,K);(0,f.useEffect)((()=>{w&&w(te)}),[te]);const ne=(0,d.aJ)(Z),ae=(0,d._y)(Z,te,D),se=(0,f.useMemo)((()=>ae[0]),[ae]),{nativeTokenBalance:ie}=(0,d.L5)(Z,D),oe=(0,d.O_)(te,D,S),re=(0,f.useMemo)((()=>i.H_.relay.includes(Z)),[Z]),[le,ce]=(0,f.useState)(!1),[ue,me]=(0,f.useState)(!1),[de,fe]=(0,f.useState)(!1),[he,Ee]=(0,f.useState)(!0),[xe,ge]=(0,f.useState)(!1),[,be]=(0,f.useState)({}),Ne=(0,f.useMemo)((()=>H&&H.minAmount||"0"),[H]),ve=(0,f.useMemo)((()=>{const e=new O.Z(ie.value),t=new O.Z(Ne);return t.gte(e)?"0":e.minus(t).toString()}),[Ne,ie.value]),{decimals:Oe,symbol:pe}=(0,d.cR)(Z),je=(0,x.W_)((null==z?void 0:z.address)||""),Pe=(0,d.uH)(S||""),Se=(0,f.useMemo)((()=>({asset:Pe,from:D,chain:Z,[a.VALUE]:"0",[a.POOL]:"",[a.NOMINATE]:"",[a.TYPE]:G})),[Pe,D,G,Z]),Te=(0,f.useMemo)((()=>te===s.WQ.POOLED?(null==ne?void 0:ne.minJoinNominationPool)||"0":(null==ne?void 0:ne.minStake)||"0"),[null==ne?void 0:ne.minJoinNominationPool,null==ne?void 0:ne.minStake,te]),{onError:ke,onSuccess:Me}=(0,d.Ls)(Q),Ae=(0,f.useCallback)(((e,t)=>{const{error:n}=(0,x.ij)(t),i=(0,x.eW)(t),r=(0,x.eW)(e),{amount:l,asset:c,from:u}=r;if(l&&ge(!0),u&&V(u),void 0!==c){const e=(0,o.QJ)(c);B(c),_(e)}const m={},d=i[a.TYPE];for(const[e,t]of Object.entries(i))m[e]=!!t;d===s.WQ.NOMINATED?m.pool=!0:d===s.WQ.POOLED&&(m.nominate=!0),ee(n||Object.values(m).some((e=>!e)))}),[B,_,V]),ye=(0,f.useCallback)((e=>{const t=Y[Z];if(!t)return[];const n=[];return t.forEach((t=>{e.some((e=>(0,r.Wr)(e,t.address)))&&n.push(t)})),n}),[Z,Y]),Ie=(0,f.useCallback)((e=>{const t=U[Z];for(const n of t)if(String(n.id)===e)return n}),[U,Z]),We=(0,f.useCallback)((e=>{ce(!0);const{from:t,[a.NOMINATE]:n,[a.POOL]:i,[a.VALUE]:o,[a.TYPE]:r}=e;let l;if(i&&r===s.WQ.POOLED){const e=Ie(i);l=(0,E.qg)({amount:o,chain:Z,nominatorMetadata:se,selectedPool:e,address:t})}else{const e=ye((0,x.in)(n));l=(0,E.Qx)({amount:o,chain:Z,nominatorMetadata:se,selectedValidators:e,address:t,type:s.WQ.NOMINATED})}setTimeout((()=>{l.then(Me).catch(ke).finally((()=>{ce(!1)}))}),300)}),[Ie,Z,se,ye,Me,ke]),Le=(0,f.useCallback)((()=>ne?(0,y.jsxs)(l.oB,{className:"meta-info",labelColorScheme:"gray",spaceSize:"xs",valueColorScheme:"light",children:[ne.expectedReturn&&(0,y.jsx)(l.oB.Number,{label:n("Estimated earnings:"),suffix:"% / year",value:ne.expectedReturn}),ne.minStake&&(0,y.jsx)(l.oB.Number,{decimals:Oe,label:n("Minimum active:"),suffix:pe,value:Te,valueColorSchema:"success"})]}):null),[ne,Oe,pe,n,Te]),we=(0,d.Ey)(D);return(0,f.useEffect)((()=>{const e=(null==z?void 0:z.address)||"";e&&((0,x.W_)(e)||V(e))}),[null==z?void 0:z.address,V]),(0,f.useEffect)((()=>{S&&S!==c.EN&&_(S)}),[_,S]),(0,f.useEffect)((()=>{B(Pe)}),[Pe,B]),(0,f.useEffect)((()=>{F(!0)}),[F]),(0,f.useEffect)((()=>{R(!ne)}),[ne,R]),(0,f.useEffect)((()=>{let e=!1;return Z&&D&&null!=q&&q.active&&(0,k.x1)(Z,I||c.EN,e,me,fe),()=>{e=!0}}),[D,I,Z,null==q?void 0:q.active]),(0,f.useEffect)((()=>{let e=!1;return xe&&(e||setTimeout((()=>{K.validateFields([a.VALUE]).finally((()=>be({})))}),100)),()=>{e=!0}}),[K,ie.value]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M.tc,{children:(0,y.jsxs)(l.FE,{className:t,resolve:W.awaitStores(["staking"]),children:[(0,y.jsxs)(g.Z,{className:"form-container form-space-sm",form:K,initialValues:Se,onFieldsChange:Ae,onFinish:We,children:[(0,y.jsx)(g.Z.Item,{className:"staking-type",hidden:I!==c.EN,name:a.TYPE,children:(0,y.jsx)(l.Ee,{optionType:"button",options:[{label:"Pools",value:s.WQ.POOLED,disabled:X},{label:"Nominate",value:s.WQ.NOMINATED}]})}),(0,y.jsx)(g.Z.Item,{hidden:!je,name:"from",children:(0,y.jsx)(l.pK,{filter:(0,k.nC)(J,te,S)})}),!je&&(0,y.jsx)(g.Z.Item,{name:"asset",children:(0,y.jsx)(l.kB,{disabled:S!==c.EN||!D,items:oe,prefixShape:"circle"})}),(0,y.jsx)(M.ZL,{address:D,chain:Z,className:"account-free-balance",label:n("Available balance:"),onBalanceReady:Ee}),(0,y.jsxs)("div",{className:"form-row",children:[je&&(0,y.jsx)(g.Z.Item,{name:"asset",children:(0,y.jsx)(l.kB,{disabled:S!==c.EN||!D,items:oe,prefixShape:"circle"})}),(0,y.jsx)(g.Z.Item,{name:a.VALUE,rules:[{required:!0},({getFieldValue:e})=>({validator:(t,i)=>{const o=e(a.TYPE),r=new O.Z(i);if(o===s.WQ.POOLED){if(r.lte(0))return Promise.reject(new Error("Amount must be greater than 0"))}else if((null==se||!se.isBondedBefore||!re)&&r.lte(0))return Promise.reject(new Error("Amount must be greater than 0"));return r.gt(ie.value)?Promise.reject(n("Amount cannot exceed your balance")):Promise.resolve()}})],statusHelpAsTooltip:!0,children:(0,y.jsx)(l._Z,{decimals:Z&&D?Oe:-1,maxValue:ve,showMaxButton:!1})})]}),(0,y.jsx)(g.Z.Item,{hidden:te!==s.WQ.POOLED,name:a.POOL,children:(0,y.jsx)(l.Tz,{chain:Z,from:D,label:n("Select pool"),loading:ue})}),(0,y.jsx)(g.Z.Item,{hidden:te!==s.WQ.NOMINATED,name:a.NOMINATE,children:(0,y.jsx)(l.OF,{chain:C?Z:"",from:C?D:"",loading:de})})]}),ne&&!L&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b.Z,{className:"staking-divider"}),Le()]})]})}),(0,y.jsx)(M.Xd,{errors:[],warnings:[],children:(0,y.jsx)(N.Z,{disabled:$||!he,icon:(0,y.jsx)(v.Z,{phosphorIcon:p.Z,weight:"fill"}),loading:le,onClick:we(K.submit),children:n("Stake")})}),ne&&(0,y.jsx)(l.R5,{activeNominators:ne.nominatorCount,estimatedEarning:ne.expectedReturn,inflation:ne.inflation,maxValidatorPerNominator:ne.maxValidatorPerNominator,minimumActive:{decimals:Oe,value:Te,symbol:pe},stakingType:te,unstakingPeriod:ne.unstakingPeriod})]})})).withConfig({displayName:"Stake",componentId:"sc-abqz0v-0"})((({theme:{token:e}})=>({".staking-type":{marginBottom:e.margin},".account-free-balance":{marginBottom:e.marginXS},".meta-info":{marginTop:e.paddingSM},".react-tabs__tab-list":{marginLeft:0,marginRight:0},".staking-divider":{marginTop:e.margin+2,marginBottom:e.marginSM}})))}}]);