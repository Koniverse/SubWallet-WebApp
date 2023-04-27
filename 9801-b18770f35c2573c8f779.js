"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner=("undefined"!=typeof self?self:this).webpackChunk_subwallet_web_runner||[]).push([[9801],{29801:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var n=s(80949),l=s(36926),a=s(56858),c=s(31101),o=s(75576),i=s(33283),r=s(92936),d=s(95798),m=s(12798),u=s(99656),h=s(25356),p=s(94344),f=s(2784),g=s(73557),b=s(38338),y=s(61162),N=s(68774),x=s(52322);function _(e){if(!e)return[];const t=(0,l.g6)(e),s=[];return t.forEach((e=>{s.push({label:e.toString(),value:e})})),s}const F=(0,b.ZP)((function({className:e=""}){const{t}=(0,i.$G)(),s=(0,i.lm)(),b=(0,g.s0)(),F=(0,f.useContext)(o.R0),w=(0,i.c_)(),[j]=m.Z.useForm(),k=m.Z.useWatch("chain",j),C=m.Z.useWatch("type",j),A=m.Z.useWatch("collectionName",j),I=(0,f.useMemo)((()=>Object.values(w)),[w]),[T,v]=(0,f.useState)(!1),[S,Z]=(0,f.useState)(!0),[E,R]=(0,f.useState)(!0),W=(0,f.useMemo)((()=>_(w[k])),[w,k]),P=(0,i.vI)(),V=(0,f.useCallback)((()=>{b("/home/nfts/collections")}),[b]),H=(0,f.useCallback)(((e,t)=>{const{error:s}=(0,d.ij)(t),n=(0,d.eW)(e),l=(0,d.eW)(t),a=(0,d.s_)(t),c=Object.entries(l).some((([e,t])=>"symbol"!==e&&!t)),{chain:o,type:i}=n;if(o){const e=_(w[o]);1===e.length?j.setFieldValue("type",e[0].value):j.resetFields(["type"]),j.resetFields(["contractAddress","collectionName"])}i&&j.resetFields(["contractAddress","collectionName"]),a.contractAddress.length>0&&j.resetFields(["collectionName"]),R(!l.chain||!l.type||a.contractAddress.length>0),Z(c||s)}),[w,j]),O=(0,f.useCallback)((e=>{const{chain:n,contractAddress:a,symbol:c,type:o}=e,i=A.replaceAll(" ","").toUpperCase();v(!0),setTimeout((()=>{(0,r.fx)({originChain:n,slug:"",name:A,symbol:""!==c?c:i,decimals:null,priceId:null,minAmount:null,assetType:o,metadata:(0,l.ST)(a),multiChainAsset:null,hasValue:(0,l.nO)(w[n])}).then((e=>{e?(s({message:t("Imported NFT successfully")}),V()):s({message:t("An error occurred, please try again")})})).catch((()=>{s({message:t("An error occurred, please try again")})})).finally((()=>{v(!1)}))}),300)}),[A,w,s,t,V]),U=(0,f.useCallback)(((e,s)=>new Promise(((e,n)=>{s.length>=3?e():n(new Error(t("Collection name must have at least 3 characters")))}))),[t]),B=(0,f.useCallback)(((e,s)=>new Promise(((e,l)=>{if((0,y.U)(s)){const c=[n.Ym.ERC721].includes(C)&&(0,N.u)(s),o=[n.Ym.PSP34].includes(C)&&(0,a.NJ)(s);c||o?(v(!0),(0,r.Uj)({contractAddress:s,originChain:k,type:C}).then((s=>{v(!1),s.isExist&&l(t("Existed NFT")),s.contractError&&l(t("Invalid contract for the selected chain")),s.isExist||s.contractError||(j.setFieldValue("collectionName",s.name),j.setFieldValue("symbol",s.symbol),e())})).catch((()=>{v(!1),l(t("Invalid contract for the selected chain"))}))):l(t("Invalid contract address"))}else l(t("Invalid contract address"))}))),[j,k,C,t]);return(0,f.useEffect)((()=>{k&&P(k)}),[k,P]),(0,x.jsx)(c.FE,{className:e,resolve:F.awaitStores(["nft"]),children:(0,x.jsx)(c.Ar.WithSubHeaderOnly,{onBack:V,rightFooterButton:{disabled:S,icon:(0,x.jsx)(u.Z,{phosphorIcon:p.Z,weight:"fill"}),loading:T,onClick:j.submit,children:t("Import")},title:t("Import NFT"),children:(0,x.jsx)("div",{className:"nft_import__container",children:(0,x.jsxs)(m.Z,{className:"form-space-xs",form:j,initialValues:{contractAddress:"",chain:"",collectionName:"",type:""},name:"nft-import",onFieldsChange:H,onFinish:O,children:[(0,x.jsx)(m.Z.Item,{name:"chain",children:(0,x.jsx)(c.oT,{items:I,label:t("Network"),placeholder:t("Select network"),title:t("Select network")})}),(0,x.jsx)(m.Z.Item,{name:"type",children:(0,x.jsx)(c.Rf,{className:e,disabled:!k,items:W,label:t("NFT type"),placeholder:t("Select NFT type"),title:t("Select NFT type")})}),(0,x.jsx)(m.Z.Item,{name:"contractAddress",rules:[{validator:B}],statusHelpAsTooltip:!0,children:(0,x.jsx)(c.Jg,{disabled:!C,label:t("NFT contract address"),showScanner:!0})}),(0,x.jsx)(m.Z.Item,{name:"collectionName",required:!0,rules:[{validator:U}],statusHelpAsTooltip:!0,children:(0,x.jsx)(h.Z,{disabled:E,label:t("NFT collection name")})})]})})})})})).withConfig({displayName:"NftImport",componentId:"sc-h8ppt5-0"})((({theme:{token:e}})=>({".nft_import__container":{marginTop:e.margin,paddingLeft:e.padding,paddingRight:e.padding},".nft_import__Qr":{cursor:"pointer"},".ant-web3-block-right-item":{marginRight:0},".ant-input-suffix":{marginRight:0},".nft_import__selected_option":{color:e.colorTextHeading},".nft-type-item":{"--nft-type-icon-bg-color":e["orange-6"],"--nft-type-icon-color":e.colorWhite,"--nft-selected-icon-color":e.colorSuccess,".ant-web3-block-right-item":{marginRight:0}}})))}}]);