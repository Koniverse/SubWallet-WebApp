"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[2532],{92532:(e,t,n)=>{n.r(t),n.d(t,{GlobalSearchTokenModalId:()=>w,default:()=>S});var s=n(31101),a=n(84341),o=n(3612),i=n(57190),l=n(82887),r=n(91580),c=n(63866),d=n(12162),h=n(2784),u=n(73557),p=n(38338),m=n(90809),x=n(25356),f=n(72779),g=n.n(f),b=n(71605),k=n(52322);const j=(0,p.ZP)((function({className:e}){const{isWebUI:t}=(0,h.useContext)(o.sG),{pathname:n}=(0,u.TH)(),[a,i]=(0,h.useState)(),l=(0,u.s0)(),[r,c]=(0,h.useState)(""),d=["Tokens","NFTs"],p=(0,h.useMemo)((()=>{const e=n.split("/").filter((e=>!!e))[1];return d.map((e=>e.toLowerCase())).indexOf(e)}),[n]),f=(0,h.useMemo)((()=>n.includes("detail")),[n]);return(0,k.jsx)(s.Ar.Base,{headerList:["Controller","Balance"],showWebHeader:!0,children:(0,k.jsxs)("div",{className:g()("home","home-container",e,{"__web-ui":t}),children:[(0,k.jsxs)("div",{className:"menu-bar",children:[f?(0,k.jsx)(m.Z,{title:a,showBackButton:!0,onBack:()=>l(-1),background:"transparent",className:"web-header",center:!1}):(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(b.mQ,{className:e,selectedIndex:p,onSelect:e=>{l(e?"nfts/collections":"tokens")},children:[(0,k.jsx)(b.td,{className:g()("react-tabs__tab-list"),children:d.map((e=>(0,k.jsx)(b.OK,{children:e},e)))}),(0,k.jsxs)("div",{style:{display:"none"},children:[(0,k.jsx)(b.x4,{}),(0,k.jsx)(b.x4,{})]})]})}),(0,k.jsx)("div",{className:"right-section",children:(0,k.jsx)(x.Z.Search,{className:"search-input",size:"md",placeholder:"Token name",onChange:e=>{var t;const n=null==e||null===(t=e.target)||void 0===t?void 0:t.value;c(n)},value:r})})]}),(0,k.jsx)(u.j3,{context:{searchInput:r,setDetailTitle:i}})]})})})).withConfig({displayName:"Porfolio",componentId:"sc-1i25bnp-0"})((({theme:{token:e}})=>({height:"100%",".right-section":{justifySelf:"end",display:"flex",".search-input":{width:360,height:50}},"&.__web-ui":{height:"auto",".react-tabs__tab-list":{display:"flex",borderRadius:e.borderRadiusLG,margin:0,padding:0,"& > li":{paddingBottom:"8px !important"}},".menu-bar":{display:"flex",justifyContent:"space-between",flex:1,background:"transparent",marginBottom:24,".web-header":{flex:1,".header-content":{color:e.colorTextBase,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeHeading4,lineHeight:e.lineHeightHeading4,display:"flex",flexDirection:"row",overflow:"hidden"}},".react-tabs__tab":{textAlign:"center",display:"inline-block",border:"none",outline:"none",position:"relative",listStyle:"none",fontSize:e.fontSize,lineHeight:e.lineHeight,fontWeight:e.fontWeightStrong,cursor:"pointer",flex:"unset",opacity:.45,borderRadius:0,color:"#FFFFFF",padding:0,margin:"0px 8px","&--selected":{background:"transparent",borderBottom:"2px solid #D9D9D9",opacity:1}}}}}))),w="globalSearchToken",S=(0,p.ZP)((function({className:e=""}){const{activeModal:t,inactiveModal:n}=(0,h.useContext)(d.t),p=(0,r.t)(),m=(0,c.Z)(p),x=(0,l.ZP)(m.tokenGroupMap),{isWebUI:f}=(0,h.useContext)(o.sG),{pathname:g}=(0,u.TH)(),b=(0,u.s0)(),S=(0,h.useCallback)((()=>{t(w)}),[t]),v=(0,h.useCallback)((()=>{n(w)}),[n]);(0,h.useEffect)((()=>{g.split("/").filter((e=>!!e)).length<=1&&b("/home/tokens")}),[g]);const y=(0,h.useMemo)((()=>{const e=g.split("/").filter((e=>!!e));return f&&["tokens","nfts"].includes(e[1])?(0,k.jsx)(j,{}):(0,k.jsx)(u.j3,{})}),[f,g]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.Q.Provider,{value:{tokenGroupStructure:m,accountBalance:x},children:(0,k.jsx)("div",{className:`home home-container ${e}`,children:(0,k.jsx)(s.Ar.Home,{onClickSearchIcon:S,showFilterIcon:!0,showSearchIcon:!0,children:y})})}),(0,k.jsx)(a.v,{id:w,onCancel:v,sortedTokenSlugs:m.sortedTokenSlugs,tokenBalanceMap:x.tokenBalanceMap})]})})).withConfig({displayName:"Home",componentId:"sc-pxzema-0"})((({theme:{token:e}})=>({height:"100%"})))}}]);