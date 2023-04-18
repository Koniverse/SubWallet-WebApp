"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[5839,7346,9815,1538],{19815:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var o=t(51076),r=t(75576),a=t(3612),i=t(29709),l=t(92936),s=t(37586),c=t(99656),d=t(96108),u=t(17446),p=t(72779),h=t.n(p),m=t(16418),k=t(50094),g=t(82524),f=t(2784),x=t(73557),y=t(38338),j=t(52322);const b=(0,j.jsx)(c.Z,{phosphorIcon:m.Z,size:"sm",type:"phosphor"}),_=(0,j.jsx)(c.Z,{phosphorIcon:k.Z,size:"sm",type:"phosphor"}),C=(0,y.ZP)((function({className:e=""}){const{t:n}=(0,i.$G)(),t=(0,x.s0)(),c=(0,f.useContext)(r.R0),{isWebUI:p}=(0,f.useContext)(a.sG),{nftCollections:m,nftItems:k}=(0,i.Nw)(),[y,C]=f.useState(!1),v=(0,i.lm)(),w=[{icon:b,disabled:y,size:"sm",onClick:()=>{C(!0),v({icon:(0,j.jsx)(d.Z,{size:32}),style:{top:210},direction:"vertical",duration:1.8,message:n("Reloading")}),(0,l.TU)({data:"nft"}).then((()=>{C(!1)})).catch(console.error)}},{icon:_,onClick:()=>{t("/settings/tokens/import-nft",{state:{isExternalRequest:!1}})}}],L=(0,f.useCallback)(((e,n)=>{var t;const o=n.toLowerCase();return(null===(t=e.collectionName)||void 0===t?void 0:t.toLowerCase().includes(o))||e.collectionId.toLowerCase().includes(o)}),[]),S=(0,f.useCallback)((e=>{const n=[];return k.forEach((t=>{t.collectionId===e.collectionId&&t.chain===e.chain&&n.push(t)})),n}),[k]),I=(0,f.useCallback)((e=>{t("/home/nfts/collection-detail",{state:e})}),[t]),E=(0,f.useCallback)((e=>{const n=S(e);let t;for(const e of n)if(e.image){t=e.image;break}const o={collectionInfo:e,nftList:n};return(0,j.jsx)(s.n,{fallbackImage:t,handleOnClick:I,image:e.image,itemCount:n.length,routingParams:o,title:e.collectionName||e.collectionId},`${e.collectionId}_${e.chain}`)}),[S,I]),Z=(0,f.useCallback)((()=>(0,j.jsx)(o.rf,{emptyMessage:n("Your NFT collectible will appear here!"),emptyTitle:n("No NFT collectible"),phosphorIcon:g.Z})),[n]);return(0,j.jsx)(o.FE,{className:`nft_container ${e}`,resolve:c.awaitStores(["nft"]),children:(0,j.jsx)(o.Ar.Base,{showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!1,subHeaderIcons:w,subHeaderPaddingVertical:!0,title:n("Collectibles"),children:(0,j.jsx)(u.Z.Section,{className:h()("nft_collection_list__container"),displayGrid:!0,enableSearchInput:!0,gridGap:"14px",list:m,minColumnWidth:"160px",renderItem:E,renderOnScroll:!0,renderWhenEmpty:Z,searchFunction:L,searchMinCharactersCount:2,searchPlaceholder:n("Search collection name")})})})})).withConfig({displayName:"NftCollections",componentId:"sc-3r07z1-0"})((({theme:{token:e}})=>({color:e.colorTextLight1,fontSize:e.fontSizeLG,"&__inner":{display:"flex",flexDirection:"column"},".nft_collection_list__container":{height:"100%",flex:1,".ant-sw-list":{paddingBottom:1,marginBottom:-1}}})))},37586:(e,n,t)=>{t.d(n,{n:()=>c});var o=t(96108),r=t(97730),a=t(2784),i=t(47176),l=t(38338),s=t(52322);const c=(0,l.ZP)((function({className:e="",fallbackImage:n,handleOnClick:t,image:c,itemCount:d,routingParams:u,title:p}){const{extendToken:h}=(0,l.Fg)(),[m,k]=(0,a.useState)(!0),[g,f]=(0,a.useState)(!1),x=(0,a.useCallback)((()=>{t&&t(u)}),[t,u]),y=(0,a.useCallback)((()=>{k(!1),f(!0)}),[]),j=(0,a.useCallback)((()=>{f(!1)}),[]),b=(0,a.useCallback)((()=>c||n||h.defaultImagePlaceholder),[h.defaultImagePlaceholder,n,c]),_=(0,a.useCallback)((()=>(0,s.jsx)("div",{className:"nft_gallery_wrapper__loading",children:(0,s.jsx)(o.Z,{existIcon:!0,prefixCls:""})})),[]),C=(0,a.useCallback)((()=>m?(0,s.jsx)(i.LazyLoadImage,{delayTime:1e4,height:"100%",onError:y,placeholder:_(),src:b(),width:"100%"}):g?(0,s.jsx)(i.LazyLoadComponent,{children:(0,s.jsx)("video",{autoPlay:!0,height:"124",loop:!0,muted:!0,onError:j,width:"124",children:(0,s.jsx)("source",{src:b(),type:"video/mp4"})})}):(0,s.jsx)(i.LazyLoadImage,{src:h.defaultImagePlaceholder,visibleByDefault:!0})),[m,g,h.defaultImagePlaceholder,y,_,b,j]);return(0,s.jsx)(r.Z,{className:`nft_gallery_wrapper ${e}`,count:d,customImageNode:C(),onClick:x,title:p})})).withConfig({displayName:"NftGalleryWrapper",componentId:"sc-o2t73q-0"})((({theme:{token:e}})=>({color:e.colorTextLight1,fontSize:e.fontSizeLG,".__image-wrapper":{overflow:"hidden"},".nft_gallery_wrapper__loading":{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})))},37346:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var o=t(51076),r=t(64483),a=t(41803),i=t(26754),l=t(31343),s=t(75576),c=t(57190),d=t(3612),u=t(99828),p=t(43246),h=t(56547),m=t(25690),k=t(14993),g=t(92280),f=t(99656),x=t(4762),y=t(62982),j=t(90766),b=t(2784),_=t(38338),C=t(52322);const v=(0,_.ZP)((function({className:e="",isPriceDecrease:n,isShrink:t,onOpenBuyTokens:o,onOpenReceive:r,onOpenSendFund:a,totalChangePercent:i,totalChangeValue:l,totalValue:s}){return(0,C.jsxs)("div",{className:`tokens-upper-block ${e} ${t?"-shrink":""}`,children:[(0,C.jsx)(m.Z,{className:"__total-balance-value",decimal:0,decimalOpacity:.45,prefix:"$",size:38,subFloatNumber:!0,value:s}),!t&&(0,C.jsxs)("div",{className:"__balance-change-container",children:[(0,C.jsx)(m.Z,{className:"__balance-change-value",decimal:0,decimalOpacity:1,prefix:n?"- $":"+ $",value:l}),(0,C.jsx)(k.Z,{className:"__balance-change-percent "+(n?"-decrease":""),shape:"round",children:(0,C.jsx)(m.Z,{decimal:0,decimalOpacity:1,prefix:n?"-":"+",suffix:"%",value:i,weight:700})})]}),(0,C.jsxs)("div",{className:"__action-button-container",children:[(0,C.jsx)(g.Z,{icon:(0,C.jsx)(f.Z,{phosphorIcon:x.Z,size:t?"sm":"md",weight:"duotone"}),onClick:r,shape:"squircle",size:t?"xs":"sm"}),(0,C.jsx)("div",{className:"__button-space"}),(0,C.jsx)(g.Z,{icon:(0,C.jsx)(f.Z,{phosphorIcon:y.Z,size:t?"sm":"md",weight:"duotone"}),onClick:a,shape:"squircle",size:t?"xs":"sm"}),(0,C.jsx)("div",{className:"__button-space"}),(0,C.jsx)(g.Z,{icon:(0,C.jsx)(f.Z,{phosphorIcon:j.Z,size:t?"sm":"md",weight:"duotone"}),onClick:o,shape:"squircle",size:t?"xs":"sm"})]})]})})).withConfig({displayName:"UpperBlock",componentId:"sc-12e0a6v-0"})((({theme:{token:e}})=>({padding:"0px 8px 24px 8px",display:"flex",flexDirection:"column",".__total-balance-value":{textAlign:"center",padding:"0px 8px",lineHeight:e.lineHeightHeading1,fontSize:e.fontSizeHeading1,whiteSpace:"nowrap",overflow:"hidden",".ant-typography":{lineHeight:"inherit"}},".ant-btn":{transition:"width, height, padding 0s"},".__balance-change-container":{display:"flex",justifyContent:"center",alignItems:"flex-end",paddingTop:e.sizeSM,".ant-typography":{lineHeight:"inherit",color:"inherit !important",fontSize:"inherit !important"}},".__balance-change-value":{marginRight:e.sizeSM,lineHeight:e.lineHeight},".__balance-change-percent":{backgroundColor:e["cyan-6"],color:e["green-1"],marginInlineEnd:0,display:"flex","&.-decrease":{backgroundColor:e.colorError,color:e.colorTextLight1},".ant-number":{fontSize:e.fontSizeXS}},".__action-button-container":{display:"flex",justifyContent:"center",padding:"26px 8px 0 8px"},".__button-space":{width:e.size},"&.-shrink":{paddingBottom:32,flexDirection:"row",".__total-balance-value":{textAlign:"left",lineHeight:e.lineHeightHeading2,fontSize:e.fontSizeHeading2,flex:1,".ant-number-prefix, .ant-number-integer":{fontSize:"inherit !important"}},".__balance-change-container":{display:"none"},".__action-button-container":{paddingTop:0},".__button-space":{width:e.sizeXS}}})));var w=t(72779),L=t.n(w),S=t(75679),I=t(39359),E=t(35185),Z=t(73557),N=t(63220);const T=({columns:e,dataSource:n})=>(console.log("dataSource",n),(0,C.jsx)(N.Z,{dataSource:n,columns:e,pagination:!1})),z=()=>{const{t:e}=(0,p.Z)(),[n,t]=(0,b.useState)(!1),s=(0,Z.s0)(),m=(0,b.useRef)(null),k=(0,b.useRef)(null),{accountBalance:{tokenGroupBalanceMap:x,totalBalanceInfo:y},tokenGroupStructure:{sortedTokenGroups:j}}=(0,b.useContext)(c.Q),_=(0,E.v9)((e=>e.accountState.currentAccount)),w=(0,u.Z)(),{accountSelectorItems:N,onOpenReceive:z,openSelectAccount:M,openSelectToken:P,selectedAccount:W,selectedNetwork:F,tokenSelectorItems:H}=(0,h.Z)(),{isWebUI:B}=(0,b.useContext)(d.sG),G=(0,b.useCallback)((e=>{const n=e.currentTarget.scrollTop;t(n>80?e=>{if(!e&&k.current&&m.current){const e=m.current.getBoundingClientRect();k.current.style.position="fixed",k.current.style.top=`${e.top}px`,k.current.style.left=`${e.left}px`,k.current.style.right=`${e.right}px`,k.current.style.width=`${e.width}px`,k.current.style.opacity="0",k.current.style.paddingTop="0",setTimeout((()=>{k.current&&(k.current.style.opacity="1",k.current.style.paddingTop="32px")}),100)}return!0}:e=>(e&&k.current&&(k.current.style.position="absolute",k.current.style.top="0",k.current.style.left="0",k.current.style.right="0",k.current.style.width="100%",k.current.style.opacity="0",k.current.style.paddingTop="0",setTimeout((()=>{k.current&&(k.current.style.opacity="1",k.current.style.paddingTop="32px")}),100)),!1))}),[]),$=(0,b.useCallback)((()=>{var e;if(((null===(e=m.current)||void 0===e?void 0:e.scrollTop)||0)>80){if(k.current&&m.current){const e=m.current.getBoundingClientRect();k.current.style.top=`${e.top}px`,k.current.style.left=`${e.left}px`,k.current.style.right=`${e.right}px`,k.current.style.width=`${e.width}px`}}else k.current&&(k.current.style.top="0",k.current.style.left="0",k.current.style.right="0",k.current.style.width="100%")}),[]),R="decrease"===y.change.status,O=(0,b.useCallback)((e=>()=>{s(`/home/tokens/detail/${e.slug}`)}),[s]),V=(0,b.useCallback)((()=>{s("/settings/tokens/manage")}),[s]),A=(0,b.useCallback)((()=>{_&&_.isReadOnly?w({message:e("The account you are using is read-only, you cannot send assets with it"),type:"info",duration:3}):s("/transaction/send-fund")}),[_,s,w,e]),D=(0,b.useCallback)((()=>{s("/buy-tokens")}),[s]),q=(0,b.useMemo)((()=>{const e=[];return j.forEach((n=>{x[n]&&e.push(x[n])})),e}),[j,x]);return(0,b.useEffect)((()=>(window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)})),[$]),B?(0,C.jsx)(T,{columns:[{title:"Token name",dataIndex:"name",key:"name",render:(e,n)=>(0,C.jsx)(o.J9,{...n})},{title:"Portfolio %",dataIndex:"percentage",key:"percentage",render:()=>(0,C.jsx)(C.Fragment,{children:"85%"})},{title:"Price",dataIndex:"price",key:"price",render:(e,n)=>(0,C.jsx)(o.GI,{...n})},{title:"Balance",dataIndex:"balance",key:"balance",render:(e,n)=>(0,C.jsx)(o.F5,{...n})}],dataSource:q}):(0,C.jsxs)("div",{className:"tokens-screen-container",onScroll:G,ref:m,children:[(0,C.jsx)("div",{className:L()("__upper-block-wrapper",{"-is-shrink":n,"-decrease":R}),ref:k,children:(0,C.jsx)(v,{isPriceDecrease:R,isShrink:n,onOpenBuyTokens:D,onOpenReceive:z,onOpenSendFund:A,totalChangePercent:y.change.percent,totalChangeValue:y.change.value,totalValue:y.convertedValue})}),(0,C.jsxs)("div",{className:"__scroll-container",children:[q.map((e=>(0,C.jsx)(l.b,{...e,onPressItem:O(e)},e.slug))),!q.length&&(0,C.jsx)(o.rf,{className:"__empty-list",emptyMessage:e("Add tokens to get started."),emptyTitle:e("No tokens found"),phosphorIcon:S.Z}),(0,C.jsx)("div",{className:"__scroll-footer",children:(0,C.jsx)(g.Z,{icon:(0,C.jsx)(f.Z,{phosphorIcon:I.Z}),onClick:V,size:"xs",type:"ghost",children:e("Manage token list")})})]}),(0,C.jsx)(r.C,{items:N,onSelectItem:M}),(0,C.jsx)(i.F,{address:W,items:H,onSelectItem:P}),(0,C.jsx)(a.Z,{address:W,selectedNetwork:F})]})},M=(0,_.ZP)((({className:e=""})=>{const n=(0,b.useContext)(s.R0);return(0,C.jsx)(o.FE,{className:`tokens ${e}`,resolve:n.awaitStores(["price","chainStore","assetRegistry","balance"]),children:(0,C.jsx)(z,{})})})).withConfig({displayName:"Tokens",componentId:"sc-xas0kf-0"})((({theme:{extendToken:e,token:n}})=>({overflow:"hidden",".__empty-list":{marginTop:n.marginSM,marginBottom:n.marginSM},".tokens-screen-container":{height:"100%",color:n.colorTextLight1,fontSize:n.fontSizeLG,position:"relative",display:"flex",flexDirection:"column",overflowY:"auto",overflowX:"hidden",paddingTop:210},".__scroll-container":{paddingLeft:n.size,paddingRight:n.size},".__upper-block-wrapper":{backgroundColor:n.colorBgDefault,position:"absolute",paddingTop:"32px",height:210,zIndex:10,top:0,left:0,width:"100%",display:"flex",alignItems:"center",backgroundImage:e.tokensScreenSuccessBackgroundColor,transition:"opacity, padding-top 0.27s ease","&.-is-shrink":{height:104},"&.-decrease":{backgroundImage:e.tokensScreenDangerBackgroundColor}},".tokens-upper-block":{flex:1},".__scroll-footer":{display:"flex",justifyContent:"center",marginBottom:n.size},".token-group-balance-item":{marginBottom:n.sizeXS},".__upper-block-wrapper.-is-shrink":{".__static-block":{display:"none"},".__scrolling-block":{display:"flex"}}})))},94947:(e,n,t)=>{t.r(n),t.d(n,{GlobalSearchTokenModalId:()=>m,default:()=>k});var o=t(51076),r=t(84341),a=t(57190),i=t(82887),l=t(91580),s=t(63866),c=t(12162),d=t(2784),u=t(73557),p=t(38338),h=t(52322);const m="globalSearchToken",k=(0,p.ZP)((function({className:e=""}){const{activeModal:n,inactiveModal:t}=(0,d.useContext)(c.t),p=(0,l.t)(),k=(0,s.Z)(p),g=(0,i.ZP)(k.tokenGroupMap),f=(0,d.useCallback)((()=>{n(m)}),[n]),x=(0,d.useCallback)((()=>{t(m)}),[t]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Q.Provider,{value:{tokenGroupStructure:k,accountBalance:g},children:(0,h.jsx)("div",{className:`home home-container ${e}`,children:(0,h.jsx)(o.Ar.Home,{onClickSearchIcon:f,showFilterIcon:!0,showSearchIcon:!0,children:(0,h.jsx)(u.j3,{})})})}),(0,h.jsx)(r.v,{id:m,onCancel:x,sortedTokenSlugs:k.sortedTokenSlugs,tokenBalanceMap:g.tokenBalanceMap})]})})).withConfig({displayName:"Home",componentId:"sc-pxzema-0"})((({theme:{token:e}})=>({height:"100%"})))},45839:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var o=t(2784),r=t(38338),a=t(51076),i=t(57190),l=t(73557),s=t(94947),c=t(29709),d=t(12162),u=t(92280),p=t(99656),h=t(25356),m=t(13739),k=t(86267),g=t(37346),f=t(19815),x=t(3612),y=t(72779),j=t.n(y),b=t(52322);const _=(0,r.ZP)((function({className:e}){const{activeModal:n,inactiveModal:t}=(0,o.useContext)(d.t),r=(0,c.tC)(),y=(0,c.Y9)(r),_=(0,c.r4)(y.tokenGroupMap),{isWebUI:C}=(0,o.useContext)(x.sG),v=(0,b.jsxs)("div",{className:"right-section",children:[(0,b.jsx)(u.Z,{type:"ghost",icon:(0,b.jsx)(p.Z,{phosphorIcon:m.Z,size:"sm"})}),(0,b.jsx)(h.Z,{className:"search-input",size:"md",placeholder:"Token name",prefix:(0,b.jsx)(p.Z,{phosphorIcon:k.Z})})]}),w=(0,o.useCallback)((()=>{n(s.GlobalSearchTokenModalId)}),[n]),L=(0,o.useCallback)((()=>{t(s.GlobalSearchTokenModalId)}),[t]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.Q.Provider,{value:{tokenGroupStructure:y,accountBalance:_},children:(0,b.jsx)("div",{className:j()("home","home-container",e,{"__web-ui":C}),children:C?(0,b.jsxs)(a.Ln,{rightSection:v,children:[(0,b.jsx)(a.Ln.SwTabPanel,{label:"Tokens",children:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g.default,{})})},"tokens"),(0,b.jsx)(a.Ln.SwTabPanel,{label:"Collections",children:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(f.default,{})})},"collections")]}):(0,b.jsx)(a.Ar.Home,{onClickSearchIcon:w,showFilterIcon:!0,showSearchIcon:!0,children:(0,b.jsx)(l.j3,{})})})}),(0,b.jsx)(a.v0,{id:s.GlobalSearchTokenModalId,onCancel:L,sortedTokenSlugs:y.sortedTokenSlugs,tokenBalanceMap:_.tokenBalanceMap})]})})).withConfig({displayName:"Porfolio",componentId:"sc-1i25bnp-0"})((()=>({height:"100%",".__web-ui":{height:"auto"},".right-section":{display:"flex",alignItems:"center"}})))},13739:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),r=t(21890),a=t(76712),i=new Map;i.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),i.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),i.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M80.3,115.7a8.2,8.2,0,0,1-1.7-8.7,8,8,0,0,1,7.4-5h34V40a8,8,0,0,1,16,0v62h34a8,8,0,0,1,7.4,5,8.2,8.2,0,0,1-1.7,8.7l-42,42a8.2,8.2,0,0,1-11.4,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z"}))})),i.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),i.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),i.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var l=function(e,n){return(0,r._)(e,n,i)},s=(0,o.forwardRef)((function(e,n){return o.createElement(a.Z,Object.assign({ref:n},e,{renderPath:l}))}));s.displayName="DownloadSimple";const c=s},50094:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),r=t(21890),a=t(76712),i=new Map;i.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),i.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),i.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))})),i.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),i.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),i.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var l=function(e,n){return(0,r._)(e,n,i)},s=(0,o.forwardRef)((function(e,n){return o.createElement(a.Z,Object.assign({ref:n},e,{renderPath:l}))}));s.displayName="Plus";const c=s}}]);