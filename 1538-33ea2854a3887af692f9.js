"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[1538,5839,7346,9815],{19815:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var o=t(3401),r=t(75576),i=t(3612),a=t(33283),l=t(92936),s=t(37586),c=t(99656),d=t(96108),u=t(17446),p=t(72779),h=t.n(p),m=t(16418),k=t(50094),f=t(82524),g=t(2784),x=t(73557),y=t(38338),j=t(52322);const b=(0,j.jsx)(c.Z,{phosphorIcon:m.Z,size:"sm",type:"phosphor"}),L=(0,j.jsx)(c.Z,{phosphorIcon:k.Z,size:"sm",type:"phosphor"}),_=(0,y.ZP)((function({className:e=""}){const{t:n}=(0,a.$G)(),t=(0,x.s0)(),c=(0,g.useContext)(r.R0),{isWebUI:p}=(0,g.useContext)(i.sG),{nftCollections:m,nftItems:k}=(0,a.Nw)(),[y,_]=g.useState(!1),C=(0,a.lm)(),v=[{icon:b,disabled:y,size:"sm",onClick:()=>{_(!0),C({icon:(0,j.jsx)(d.Z,{size:32}),style:{top:210},direction:"vertical",duration:1.8,message:n("Reloading")}),(0,l.TU)({data:"nft"}).then((()=>{_(!1)})).catch(console.error)}},{icon:L,onClick:()=>{t("/settings/tokens/import-nft",{state:{isExternalRequest:!1}})}}],w=(0,g.useCallback)(((e,n)=>{var t;const o=n.toLowerCase();return(null===(t=e.collectionName)||void 0===t?void 0:t.toLowerCase().includes(o))||e.collectionId.toLowerCase().includes(o)}),[]),E=(0,g.useCallback)((e=>{const n=[];return k.forEach((t=>{t.collectionId===e.collectionId&&t.chain===e.chain&&n.push(t)})),n}),[k]),S=(0,g.useCallback)((e=>{t("/home/nfts/collection-detail",{state:e})}),[t]),I=(0,g.useCallback)((e=>{const n=E(e);let t;for(const e of n)if(e.image){t=e.image;break}const o={collectionInfo:e,nftList:n};return(0,j.jsx)(s.n,{fallbackImage:t,handleOnClick:S,image:e.image,itemCount:n.length,routingParams:o,title:e.collectionName||e.collectionId},`${e.collectionId}_${e.chain}`)}),[E,S]),Z=(0,g.useCallback)((()=>(0,j.jsx)(o.rf,{emptyMessage:n("Your NFT collectible will appear here!"),emptyTitle:n("No NFT collectible"),phosphorIcon:f.Z})),[n]);return(0,j.jsx)(o.FE,{className:`nft_container ${e}`,resolve:c.awaitStores(["nft"]),children:(0,j.jsx)(o.Ar.Base,{showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!1,subHeaderIcons:v,subHeaderPaddingVertical:!0,title:n("Collectibles"),children:(0,j.jsx)(u.Z.Section,{className:h()("nft_collection_list__container"),displayGrid:!0,enableSearchInput:!0,gridGap:"14px",list:m,minColumnWidth:"160px",renderItem:I,renderOnScroll:!0,renderWhenEmpty:Z,searchFunction:w,searchMinCharactersCount:2,searchPlaceholder:n("Search collection name")})})})})).withConfig({displayName:"NftCollections",componentId:"sc-3r07z1-0"})((({theme:{token:e}})=>({color:e.colorTextLight1,fontSize:e.fontSizeLG,"&__inner":{display:"flex",flexDirection:"column"},".nft_collection_list__container":{height:"100%",flex:1,".ant-sw-list":{paddingBottom:1,marginBottom:-1}}})))},37586:(e,n,t)=>{t.d(n,{n:()=>c});var o=t(96108),r=t(97730),i=t(2784),a=t(47176),l=t(38338),s=t(52322);const c=(0,l.ZP)((function({className:e="",fallbackImage:n,handleOnClick:t,image:c,itemCount:d,routingParams:u,title:p}){const{extendToken:h}=(0,l.Fg)(),[m,k]=(0,i.useState)(!0),[f,g]=(0,i.useState)(!1),x=(0,i.useCallback)((()=>{t&&t(u)}),[t,u]),y=(0,i.useCallback)((()=>{k(!1),g(!0)}),[]),j=(0,i.useCallback)((()=>{g(!1)}),[]),b=(0,i.useCallback)((()=>c||n||h.defaultImagePlaceholder),[h.defaultImagePlaceholder,n,c]),L=(0,i.useCallback)((()=>(0,s.jsx)("div",{className:"nft_gallery_wrapper__loading",children:(0,s.jsx)(o.Z,{existIcon:!0,prefixCls:""})})),[]),_=(0,i.useCallback)((()=>m?(0,s.jsx)(a.LazyLoadImage,{delayTime:1e4,height:"100%",onError:y,placeholder:L(),src:b(),width:"100%"}):f?(0,s.jsx)(a.LazyLoadComponent,{children:(0,s.jsx)("video",{autoPlay:!0,height:"124",loop:!0,muted:!0,onError:j,width:"124",children:(0,s.jsx)("source",{src:b(),type:"video/mp4"})})}):(0,s.jsx)(a.LazyLoadImage,{src:h.defaultImagePlaceholder,visibleByDefault:!0})),[m,f,h.defaultImagePlaceholder,y,L,b,j]);return(0,s.jsx)(r.Z,{className:`nft_gallery_wrapper ${e}`,count:d,customImageNode:_(),onClick:x,title:p})})).withConfig({displayName:"NftGalleryWrapper",componentId:"sc-o2t73q-0"})((({theme:{token:e}})=>({color:e.colorTextLight1,fontSize:e.fontSizeLG,".__image-wrapper":{overflow:"hidden"},".nft_gallery_wrapper__loading":{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})))},37346:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var o=t(3401),r=t(64483),i=t(41803),a=t(26754),l=t(31343),s=t(75576),c=t(57190),d=t(3612),u=t(99828),p=t(43246),h=t(56547),m=t(25690),k=t(14993),f=t(92280),g=t(99656),x=t(4762),y=t(62982),j=t(90766),b=t(2784),L=t(38338),_=t(52322);const C=(0,L.ZP)((function({className:e="",isPriceDecrease:n,isShrink:t,onOpenBuyTokens:o,onOpenReceive:r,onOpenSendFund:i,totalChangePercent:a,totalChangeValue:l,totalValue:s}){return(0,_.jsxs)("div",{className:`tokens-upper-block ${e} ${t?"-shrink":""}`,children:[(0,_.jsx)(m.Z,{className:"__total-balance-value",decimal:0,decimalOpacity:.45,prefix:"$",size:38,subFloatNumber:!0,value:s}),!t&&(0,_.jsxs)("div",{className:"__balance-change-container",children:[(0,_.jsx)(m.Z,{className:"__balance-change-value",decimal:0,decimalOpacity:1,prefix:n?"- $":"+ $",value:l}),(0,_.jsx)(k.Z,{className:"__balance-change-percent "+(n?"-decrease":""),shape:"round",children:(0,_.jsx)(m.Z,{decimal:0,decimalOpacity:1,prefix:n?"-":"+",suffix:"%",value:a,weight:700})})]}),(0,_.jsxs)("div",{className:"__action-button-container",children:[(0,_.jsx)(f.Z,{icon:(0,_.jsx)(g.Z,{phosphorIcon:x.Z,size:t?"sm":"md",weight:"duotone"}),onClick:r,shape:"squircle",size:t?"xs":"sm"}),(0,_.jsx)("div",{className:"__button-space"}),(0,_.jsx)(f.Z,{icon:(0,_.jsx)(g.Z,{phosphorIcon:y.Z,size:t?"sm":"md",weight:"duotone"}),onClick:i,shape:"squircle",size:t?"xs":"sm"}),(0,_.jsx)("div",{className:"__button-space"}),(0,_.jsx)(f.Z,{icon:(0,_.jsx)(g.Z,{phosphorIcon:j.Z,size:t?"sm":"md",weight:"duotone"}),onClick:o,shape:"squircle",size:t?"xs":"sm"})]})]})})).withConfig({displayName:"UpperBlock",componentId:"sc-12e0a6v-0"})((({theme:{token:e}})=>({padding:"0px 8px 24px 8px",display:"flex",flexDirection:"column",".__total-balance-value":{textAlign:"center",padding:"0px 8px",lineHeight:e.lineHeightHeading1,fontSize:e.fontSizeHeading1,whiteSpace:"nowrap",overflow:"hidden",".ant-typography":{lineHeight:"inherit"}},".ant-btn":{transition:"width, height, padding 0s"},".__balance-change-container":{display:"flex",justifyContent:"center",alignItems:"flex-end",paddingTop:e.sizeSM,".ant-typography":{lineHeight:"inherit",color:"inherit !important",fontSize:"inherit !important"}},".__balance-change-value":{marginRight:e.sizeSM,lineHeight:e.lineHeight},".__balance-change-percent":{backgroundColor:e["cyan-6"],color:e["green-1"],marginInlineEnd:0,display:"flex","&.-decrease":{backgroundColor:e.colorError,color:e.colorTextLight1},".ant-number":{fontSize:e.fontSizeXS}},".__action-button-container":{display:"flex",justifyContent:"center",padding:"26px 8px 0 8px"},".__button-space":{width:e.size},"&.-shrink":{paddingBottom:32,flexDirection:"row",".__total-balance-value":{textAlign:"left",lineHeight:e.lineHeightHeading2,fontSize:e.fontSizeHeading2,flex:1,".ant-number-prefix, .ant-number-integer":{fontSize:"inherit !important"}},".__balance-change-container":{display:"none"},".__action-button-container":{paddingTop:0},".__button-space":{width:e.sizeXS}}})));var v=t(72779),w=t.n(v),E=t(75679),S=t(39359),I=t(35185),Z=t(73557),N=t(63220);const z=({columns:e,dataSource:n})=>(console.log("dataSource",n),(0,_.jsx)(N.Z,{dataSource:n,columns:e,pagination:!1})),W=()=>{const{t:e}=(0,p.Z)(),[n,t]=(0,b.useState)(!1),s=(0,Z.s0)(),m=(0,b.useRef)(null),k=(0,b.useRef)(null),{accountBalance:{tokenGroupBalanceMap:x,totalBalanceInfo:y},tokenGroupStructure:{sortedTokenGroups:j}}=(0,b.useContext)(c.Q),L=(0,I.v9)((e=>e.accountState.currentAccount));console.log("==TOKEN tokenGroupBalanceMap",x),console.log("==TOKEN totalBalanceInfo",y);const v=(0,u.Z)(),{accountSelectorItems:N,onOpenReceive:W,openSelectAccount:T,openSelectToken:M,selectedAccount:F,selectedNetwork:P,tokenSelectorItems:H}=(0,h.Z)(),{isWebUI:B}=(0,b.useContext)(d.sG),$=(0,b.useCallback)((e=>{const n=e.currentTarget.scrollTop;t(n>80?e=>{if(!e&&k.current&&m.current){const e=m.current.getBoundingClientRect();k.current.style.position="fixed",k.current.style.top=`${e.top}px`,k.current.style.left=`${e.left}px`,k.current.style.right=`${e.right}px`,k.current.style.width=`${e.width}px`,k.current.style.opacity="0",k.current.style.paddingTop="0",setTimeout((()=>{k.current&&(k.current.style.opacity="1",k.current.style.paddingTop="32px")}),100)}return!0}:e=>(e&&k.current&&(k.current.style.position="absolute",k.current.style.top="0",k.current.style.left="0",k.current.style.right="0",k.current.style.width="100%",k.current.style.opacity="0",k.current.style.paddingTop="0",setTimeout((()=>{k.current&&(k.current.style.opacity="1",k.current.style.paddingTop="32px")}),100)),!1))}),[]),G=(0,b.useCallback)((()=>{var e;if(((null===(e=m.current)||void 0===e?void 0:e.scrollTop)||0)>80){if(k.current&&m.current){const e=m.current.getBoundingClientRect();k.current.style.top=`${e.top}px`,k.current.style.left=`${e.left}px`,k.current.style.right=`${e.right}px`,k.current.style.width=`${e.width}px`}}else k.current&&(k.current.style.top="0",k.current.style.left="0",k.current.style.right="0",k.current.style.width="100%")}),[]),O="decrease"===y.change.status,R=(0,b.useCallback)((e=>()=>{s(`/home/tokens/detail/${e.slug}`)}),[s]),V=(0,b.useCallback)((()=>{s("/settings/tokens/manage")}),[s]),A=(0,b.useCallback)((()=>{L&&L.isReadOnly?v({message:e("The account you are using is read-only, you cannot send assets with it"),type:"info",duration:3}):s("/transaction/send-fund")}),[L,s,v,e]),D=(0,b.useCallback)((()=>{s("/buy-tokens")}),[s]),U=(0,b.useMemo)((()=>{const e=[];return j.forEach((n=>{x[n]&&e.push(x[n])})),e}),[j,x]);return(0,b.useEffect)((()=>(window.addEventListener("resize",G),()=>{window.removeEventListener("resize",G)})),[G]),B?(0,_.jsx)(z,{columns:[{title:"Token name",dataIndex:"name",key:"name",render:(e,n)=>(0,_.jsx)(o.J9,{...n})},{title:"Portfolio %",dataIndex:"percentage",key:"percentage"},{title:"Price",dataIndex:"price",key:"price",render:(e,n)=>(0,_.jsx)(o.GI,{...n})},{title:"Balance",dataIndex:"balance",key:"balance",render:(e,n)=>(0,_.jsx)(o.F5,{...n})}],dataSource:U}):(0,_.jsxs)("div",{className:"tokens-screen-container",onScroll:$,ref:m,children:[(0,_.jsx)("div",{className:w()("__upper-block-wrapper",{"-is-shrink":n,"-decrease":O}),ref:k,children:(0,_.jsx)(C,{isPriceDecrease:O,isShrink:n,onOpenBuyTokens:D,onOpenReceive:W,onOpenSendFund:A,totalChangePercent:y.change.percent,totalChangeValue:y.change.value,totalValue:y.convertedValue})}),(0,_.jsxs)("div",{className:"__scroll-container",children:[U.map((e=>(0,_.jsx)(l.b,{...e,onPressItem:R(e)},e.slug))),!U.length&&(0,_.jsx)(o.rf,{className:"__empty-list",emptyMessage:e("Add tokens to get started."),emptyTitle:e("No tokens found"),phosphorIcon:E.Z}),(0,_.jsx)("div",{className:"__scroll-footer",children:(0,_.jsx)(f.Z,{icon:(0,_.jsx)(g.Z,{phosphorIcon:S.Z}),onClick:V,size:"xs",type:"ghost",children:e("Manage token list")})})]}),(0,_.jsx)(r.C,{items:N,onSelectItem:T}),(0,_.jsx)(a.F,{address:F,items:H,onSelectItem:M}),(0,_.jsx)(i.Z,{address:F,selectedNetwork:P})]})},T=(0,L.ZP)((({className:e=""})=>{const n=(0,b.useContext)(s.R0);return(0,_.jsx)(o.FE,{className:`tokens ${e}`,resolve:n.awaitStores(["price","chainStore","assetRegistry","balance"]),children:(0,_.jsx)(W,{})})})).withConfig({displayName:"Tokens",componentId:"sc-xas0kf-0"})((({theme:{extendToken:e,token:n}})=>({overflow:"hidden",".__empty-list":{marginTop:n.marginSM,marginBottom:n.marginSM},".tokens-screen-container":{height:"100%",color:n.colorTextLight1,fontSize:n.fontSizeLG,position:"relative",display:"flex",flexDirection:"column",overflowY:"auto",overflowX:"hidden",paddingTop:210},".__scroll-container":{paddingLeft:n.size,paddingRight:n.size},".__upper-block-wrapper":{backgroundColor:n.colorBgDefault,position:"absolute",paddingTop:"32px",height:210,zIndex:10,top:0,left:0,width:"100%",display:"flex",alignItems:"center",backgroundImage:e.tokensScreenSuccessBackgroundColor,transition:"opacity, padding-top 0.27s ease","&.-is-shrink":{height:104},"&.-decrease":{backgroundImage:e.tokensScreenDangerBackgroundColor}},".tokens-upper-block":{flex:1},".__scroll-footer":{display:"flex",justifyContent:"center",marginBottom:n.size},".token-group-balance-item":{marginBottom:n.sizeXS},".__upper-block-wrapper.-is-shrink":{".__static-block":{display:"none"},".__scrolling-block":{display:"flex"}}})))},94947:(e,n,t)=>{t.r(n),t.d(n,{GlobalSearchTokenModalId:()=>f,default:()=>g});var o=t(3401),r=t(84341),i=t(3612),a=t(57190),l=t(82887),s=t(91580),c=t(63866),d=t(12162),u=t(2784),p=t(73557),h=t(38338),m=t(45839),k=t(52322);const f="globalSearchToken",g=(0,h.ZP)((function({className:e=""}){const{activeModal:n,inactiveModal:t}=(0,u.useContext)(d.t),{isWebUI:h}=(0,u.useContext)(i.sG),g=(0,s.t)(),x=(0,c.Z)(g),y=(0,l.ZP)(x.tokenGroupMap),j=(0,u.useCallback)((()=>{n(f)}),[n]),b=(0,u.useCallback)((()=>{t(f)}),[t]),L=(0,u.useMemo)((()=>h?(0,k.jsx)(o.Ar.WithSideMenu,{withBalanceHeader:!0,withWebHeader:!0,children:(0,k.jsx)(m.default,{})}):(0,k.jsx)("div",{className:`home home-container ${e}`,children:(0,k.jsx)(o.Ar.Home,{onClickSearchIcon:j,showFilterIcon:!0,showSearchIcon:!0,children:(0,k.jsx)(p.j3,{})})})),[h]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a.Q.Provider,{value:{tokenGroupStructure:x,accountBalance:y},children:L}),(0,k.jsx)(r.v,{id:f,onCancel:b,sortedTokenSlugs:x.sortedTokenSlugs,tokenBalanceMap:y.tokenBalanceMap})]})})).withConfig({displayName:"Home",componentId:"sc-pxzema-0"})((({theme:{token:e}})=>({height:"100%"})))},45839:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var o=t(2784),r=t(38338),i=t(3401),a=t(92280),l=t(99656),s=t(25356),c=t(13739),d=t(86267),u=t(37346),p=t(19815),h=t(3612),m=t(72779),k=t.n(m),f=t(52322);const g=(0,r.ZP)((function({className:e}){const{isWebUI:n}=(0,o.useContext)(h.sG),t=(0,f.jsxs)("div",{className:"right-section",children:[(0,f.jsx)(a.Z,{type:"ghost",icon:(0,f.jsx)(l.Z,{phosphorIcon:c.Z,size:"sm"})}),(0,f.jsx)(s.Z,{className:"search-input",size:"md",placeholder:"Token name",prefix:(0,f.jsx)(l.Z,{phosphorIcon:d.Z})})]});return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:k()("home","home-container",e,{"__web-ui":n}),children:(0,f.jsxs)(i.Ln,{rightSection:t,children:[(0,f.jsx)(i.Ln.SwTabPanel,{label:"Tokens",children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(u.default,{})})},"tokens"),(0,f.jsx)(i.Ln.SwTabPanel,{label:"Collections",children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(p.default,{})})},"collections")]})})})})).withConfig({displayName:"Porfolio",componentId:"sc-1i25bnp-0"})((()=>({height:"100%",".__web-ui":{height:"auto"},".right-section":{display:"flex",alignItems:"center"}})))},16418:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),r=t(21890),i=t(76712),a=new Map;a.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"176.2 99.7 224.2 99.7 224.2 51.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),a.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"176.2 99.7 224.2 99.7 224.2 51.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80,80,0,1,0,0,113.2,7.9,7.9,0,0,1,11.3,0,8,8,0,0,1,0,11.3,96,96,0,1,1,0-135.8l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7Z"}))})),a.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"176.2 99.7 224.2 99.7 224.2 51.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),a.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"176.2 99.7 224.2 99.7 224.2 51.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),a.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"176.2 99.7 224.2 99.7 224.2 51.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var l=function(e,n){return(0,r._)(e,n,a)},s=(0,o.forwardRef)((function(e,n){return o.createElement(i.Z,Object.assign({ref:n},e,{renderPath:l}))}));s.displayName="ArrowClockwise";const c=s},13739:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),r=t(21890),i=t(76712),a=new Map;a.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),a.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M80.3,115.7a8.2,8.2,0,0,1-1.7-8.7,8,8,0,0,1,7.4-5h34V40a8,8,0,0,1,16,0v62h34a8,8,0,0,1,7.4,5,8.2,8.2,0,0,1-1.7,8.7l-42,42a8.2,8.2,0,0,1-11.4,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z"}))})),a.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),a.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),a.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"86 110 128 152 170 110",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("path",{d:"M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var l=function(e,n){return(0,r._)(e,n,a)},s=(0,o.forwardRef)((function(e,n){return o.createElement(i.Z,Object.assign({ref:n},e,{renderPath:l}))}));s.displayName="DownloadSimple";const c=s},50094:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),r=t(21890),i=t(76712),a=new Map;a.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),a.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))})),a.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),a.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),a.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var l=function(e,n){return(0,r._)(e,n,a)},s=(0,o.forwardRef)((function(e,n){return o.createElement(i.Z,Object.assign({ref:n},e,{renderPath:l}))}));s.displayName="Plus";const c=s}}]);