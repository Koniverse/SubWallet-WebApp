"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[6917],{16917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var o=n(25601),l=n(53101),i=n(76412),a=n(61224),c=n(53483),s=n(47088),r=n(92936),u=n(11383),d=n(12162),p=n(90809),h=n(99656),g=n(17446),C=n(90727),f=n(77180),b=n(59513),m=n(55436),k=n(12574),A=n(39359),w=n(2784),M=n(21427),y=n(35185),B=n(73557),v=n(38338),T=n(68774),E=n(52322);function j(e){const t=e.accountAuthType;return"evm"===t?e.isAllowedMap?Object.entries(e.isAllowedMap).filter((([e,t])=>t&&(0,T.u)(e))).length:0:"substrate"===t?e.isAllowedMap?Object.entries(e.isAllowedMap).filter((([e,t])=>t&&!(0,T.u)(e))).length:0:Object.values(e.isAllowedMap).filter((e=>e)).length}const x="actionModalId",S="manage-website-access-filter-id";var Z;!function(e){e.SUBSTRATE="substrate",e.ETHEREUM="ethereum",e.BLOCKED="blocked",e.Connected="connected"}(Z||(Z={}));const _=(0,v.ZP)((function({className:e=""}){const t=(0,y.v9)((e=>e.settings.authUrls)),{activeModal:n,inactiveModal:T}=(0,w.useContext)(d.t),{t:_}=(0,M.$)(),F=(0,B.s0)(),I=(0,s.Z)().goBack,{token:N}=(0,v.Fg)(),{filterSelectionMap:O,onApplyFilter:D,onChangeFilterOption:R,onCloseFilterModal:U,selectedFilters:L}=(0,c.R)(S),W=(0,w.useMemo)((()=>e=>{if(!L.length)return!0;for(const t of L)if(t===Z.SUBSTRATE){if("substrate"===e.accountAuthType||"both"===e.accountAuthType)return!0}else if(t===Z.ETHEREUM){if("evm"===e.accountAuthType||"both"===e.accountAuthType)return!0}else if(t===Z.BLOCKED){if(!e.isAllowed)return!0}else if(t===Z.Connected&&e.isAllowed)return!0;return!1}),[L]),Y=(0,w.useCallback)((()=>{n(S)}),[n]),z=(0,w.useMemo)((()=>[{label:_("Substrate dApp"),value:Z.SUBSTRATE},{label:_("Ethereum dApp"),value:Z.ETHEREUM},{label:_("Blocked dApp"),value:Z.BLOCKED},{label:_("Connected dApp"),value:Z.Connected}]),[_]),H=(0,w.useMemo)((()=>function(e){return Object.values(e)}(t)),[t]),K=(0,w.useCallback)((()=>{n(x)}),[n]),P=(0,w.useCallback)((()=>{T(x)}),[T]),$=(0,w.useMemo)((()=>[{key:"forget-all",icon:C.Z,iconBackgroundColor:N.colorWarning,title:_("Forget all"),onClick:()=>{(0,r.jO)(u.NY).catch(console.error),P()}},{key:"disconnect-all",icon:f.Z,iconBackgroundColor:N["gray-3"],title:_("Disconnect all"),onClick:()=>{(0,r.Io)(!1,u.NY).catch(console.error),P()}},{key:"connect-all",icon:b.Z,iconBackgroundColor:N["green-6"],title:_("Connect all"),onClick:()=>{(0,r.Io)(!0,u.NY).catch(console.error),P()}}]),[P,_,N]),V=(0,w.useCallback)((e=>()=>{F("/settings/dapp-access-edit",{state:{siteName:e.origin,origin:e.id,accountAuthType:e.accountAuthType||""}})}),[F]),X=(0,w.useCallback)((e=>(0,E.jsx)(a.M,{accountCount:j(e),className:"__item",domain:e.id,onClick:V(e),siteName:e.origin||e.id},e.id)),[V]),q=(0,w.useCallback)((()=>(0,E.jsx)(l.Z,{emptyMessage:_("Your list of approved dApps will appear here."),emptyTitle:_("No dApps found"),phosphorIcon:m.Z})),[_]),G=(0,w.useCallback)(((e,t)=>{var n,o;const l=t.toLowerCase();return(null===(n=e.origin)||void 0===n?void 0:n.toLowerCase().includes(l))||(null===(o=e.id)||void 0===o?void 0:o.toLowerCase().includes(l))}),[]);return(0,E.jsxs)(o.FE,{className:`manage-website-access ${e}`,children:[(0,E.jsx)(p.Z,{background:"transparent",center:!0,onBack:I,paddingVertical:!0,rightButtons:[{icon:(0,E.jsx)(h.Z,{customSize:"24px",phosphorIcon:k.Z,type:"phosphor",weight:"bold"}),onClick:K}],showBackButton:!0,title:_("Manage website access")}),(0,E.jsx)(g.Z.Section,{actionBtnIcon:(0,E.jsx)(h.Z,{phosphorIcon:A.Z}),enableSearchInput:!0,filterBy:W,list:H,onClickActionBtn:Y,renderItem:X,renderWhenEmpty:q,searchFunction:G,searchMinCharactersCount:2,searchPlaceholder:_("Search or enter a website"),showActionBtn:!0}),(0,E.jsx)(i.W,{actions:$,id:x,onCancel:P,title:_("Access configuration")}),(0,E.jsx)(o.Dd,{id:S,onApplyFilter:D,onCancel:U,onChangeOption:R,optionSelectionMap:O,options:z,title:_("Filter")})]})})).withConfig({displayName:"ManageWebsiteAccess",componentId:"sc-mezssz-0"})((({theme:{token:e}})=>({height:"100%",backgroundColor:e.colorBgDefault,display:"flex",flexDirection:"column",".ant-sw-list-section":{paddingTop:e.padding,flex:1,marginBottom:e.margin},".ant-sw-list-section .ant-sw-list":{paddingBottom:0},".__item + .__item":{marginTop:e.marginXS}})))}}]);