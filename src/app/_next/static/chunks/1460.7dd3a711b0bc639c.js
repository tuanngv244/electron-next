"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1460],{26677:(e,t,n)=>{n.d(t,{A:()=>C});var o=n(95155),r=n(62562),i=n(89142),l=n(68998),a=n(10979),s=n(35761),d=n(894),c=n(22282),p=n(43463),u=n(83737),m=n(46280);let h=(0,i.Ay)("div")(e=>{let{theme:t}=e;return{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,visibility:"hidden",transition:"all 0.3s cubic-bezier(0.81, 0.2, 0.32, 0.93)",zIndex:1200,".overlay":{cursor:"pointer",width:"100vw",height:"100%",position:"fixed",top:0,left:0,zIndex:1,opacity:0,visibility:"hidden",backgroundColor:(0,r.z)(t.palette.common.black,.6),transition:"all 0.3s cubic-bezier(0.81, 0.2, 0.32, 0.93)"},"&.active":{".wrap":{transform:"translateX(0)",transition:"all 0.3s cubic-bezier(0.81, 0.2, 0.32, 0.93)"},".overlay":{visibility:"visible",opacity:1,transition:"all 0.3s cubic-bezier(0.81, 0.2, 0.32, 0.93)"},visibility:"visible",transition:"all 0.3s cubic-bezier(0.81, 0.2, 0.32, 0.93)"},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),f=(0,i.Ay)(l.A)(e=>{let{theme:t}=e;return{maxWidth:"80%",minWidth:1e3,height:"100vh",padding:"0 1rem",display:"flex",flexDirection:"column",backgroundColor:t.palette.common.dark,top:0,right:0,transform:"translateX(100%)",position:"fixed",zIndex:2,transition:"all 0.3s cubic-bezier(0.81, 0.2, 0.32, 0.93)",[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),v=(0,i.Ay)(a.A)(e=>{let{theme:t}=e;return{position:"relative",borderBottom:"1px solid ".concat(t.palette.grey[500]),padding:"1rem",".title":{fontSize:"var(--font-size-4)",lineHeight:"var(--font-line-height-4)",fontWeight:600,color:t.palette.common.white},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),x=(0,i.Ay)(l.A)(e=>{let{theme:t}=e;return{position:"relative",padding:"1rem",maxHeight:"calc(100vh - 124px)",overflowY:"auto",[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),g=(0,i.Ay)(l.A)(e=>{let{theme:t}=e;return{padding:"1rem",display:"flex",alignItems:"center",gap:"0 0.5rem",justifyContent:"flex-end",marginTop:"auto",borderTop:"1px solid ".concat(t.palette.grey[500]),[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),C=e=>{let{isOpen:t,onClose:n,panelStyles:r,title:i,children:l,wrapStyles:a,footerContent:C,onSave:b,onCancel:y}=e,A=(0,s.A)(),{t:j}=(0,u.Bd)("common");return(0,o.jsxs)(h,{className:(0,p.A)({active:t}),sx:r,children:[(0,o.jsxs)(f,{className:"wrap",sx:a,children:[(0,o.jsxs)(v,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,o.jsxs)("h6",{className:"title",children:[" ",i]}),(0,o.jsx)(d.A,{sx:{cursor:"pointer"},onClick:n,children:(0,o.jsx)(m.$8F,{size:20,color:A.palette.common.white})})]}),(0,o.jsx)(x,{className:"custom-scrollbar",children:l}),(0,o.jsx)(g,{children:C||(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{variant:"outlined",className:"cancel",onClick:y,children:j("button.cancel")}),(0,o.jsx)(c.A,{variant:"contained",onClick:b,children:j("button.save")})]})})]}),(0,o.jsx)("div",{onClick:n,className:"overlay"})]})}},95801:(e,t,n)=>{n.d(t,{e:()=>c});var o=n(93297),r=n(3417),i=n(76046),l=n(12115),a=n(4867),s=n(39666),d=function(e){return e.Create="B1",e.Update="B2",e.Delete="B3",e.Detail="B4",e.List="B5",e.Upload="B6",e.Export="B7",e.Import="B8",e.Download="B9",e}({});let c=()=>{var e;let t=(0,i.usePathname)(),{params:n}=(0,s.s)(),c=null===(e=(0,o.A)())||void 0===e?void 0:e.user,p=(0,r.GV)(e=>e.common.progBtnList),u=!!Object.values(n).length,m=(0,l.useMemo)(()=>(0,a.dn)((null==c?void 0:c.menus)||[]),[null==c?void 0:c.menus]),h=(0,l.useMemo)(()=>{let e=null==m?void 0:m.find(e=>u?t.includes(e.routPath):t===e.routPath);return null==p?void 0:p.find(t=>t.progId===(null==e?void 0:e.progId))},[m,null==c?void 0:c.menus,p,t]),f=(0,l.useMemo)(()=>{let e=(null==h?void 0:h.buttons)||[];return Object.entries(d).reduce((t,n)=>{var o;let[r,i]=n;return t[r]=(null==e?void 0:null===(o=e.find(e=>e.btnCd===i))||void 0===o?void 0:o.useYn)==="Y",t},{})},[h]);return{prog:h,buttons:(null==h?void 0:h.buttons)||[],acceptButtons:f}}},53476:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(89142),r=n(68998);let i=(0,o.Ay)(r.A)(e=>{let{theme:t}=e;return{boxShadow:"none",padding:"5px",paddingLeft:"5px",paddingRight:"10px",marginTop:"0.5rem"}})},90212:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(89142),r=n(68998);let i=(0,o.Ay)(r.A)(e=>{let{theme:t,wInput:n}=e;return{"input::placeholder":{color:"#757575",fontWeight:400,opacity:1},"input:::-ms-input-placeholder":{color:"#757575",fontWeight:400},"input::-ms-input-placeholder":{color:"#757575",fontWeight:400},".MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root":{paddingRight:"39px !important"},".input-select":{borderColor:"dark"===t.palette.mode?"#333":"#E2E8F0",background:"".concat("dark"===t.palette.mode?"#141414":"#e3e4e5"),height:"28px",fontSize:"12px",color:"dark"===t.palette.mode?"#fff":"#333",paddingRight:8,borderRadius:"4px",width:"100%",minWidth:"180px",svg:{width:20},".MuiSelect-select":{paddingRight:5}},".react-datepicker-wrapper":{background:"".concat("dark"===t.palette.mode?"#141414":"#fff")},".input-text":{overflow:"hidden",textOverflow:"ellipsis",borderColor:"#333",background:"".concat("dark"===t.palette.mode?"#141414":"#fff"),color:"".concat("dark"===t.palette.mode?"#fff":"#2F2B0F"),height:"28px",fontSize:"12px",borderRadius:"4px",fontWeight:"400",minWidth:"".concat(null!=n?n:180,"px"),width:"100%",".MuiAutocomplete-inputRoot .MuiAutocomplete-input":{minWidth:"180px",fontSize:"12px",color:"#2F2B0F",borderColor:"#333",height:"11px"}},".MuiTypography-root":{color:"#2F2B0F",fontWeight:500,fontSize:"12px"},".MuiOutlinedInput-input":{width:"100%",minWidth:"".concat(null!=n?n:180,"px !important"),padding:"8.5px 10px"},".MuiSelect-select[aria-expanded=false] ~ svg":{transform:"rotate(0deg)",transition:"transform 0.2s linear"},".MuiSelect-select[aria-expanded=true] ~ svg":{transform:"rotate(180deg)",transition:"transform 0.2s linear"}}})},37893:(e,t,n)=>{n.d(t,{r:()=>o});var o=function(e){return e.DomesicOverseas="FCM_DOM_OVS",e.AssetClassification="FCM_ASST_CLASS",e.Category="FCM_CATE",e.CustodianBank="FCM_CUSTDN_BANK",e.TransactionCurrency="FCM_SELL_CURR",e.DenominatedCurrency="FCM_BUY_CURR",e.TrandingCountry="FCM_TRADE_CTRY",e.IssuingCountry="FCM_ISS_CTRY",e.FcmReg1="FCM_REG1",e.FcmReg2="FCM_REG2",e.FcmReg3="FCM_REG3",e.FcmFundType1="FCM_FUND_TYPE1",e.FcmFundType2="FCM_FUND_TYPE2",e.FcmFundType3="FCM_FUND_TYPE3",e.RedemptionFee="FCM_REDM_FEE",e.FcmCurrency="FCM_CURR",e.FcmTicker="FCM_TICKER",e.FcmPeerGrp="FCM_PEER_GRP",e.FcmPeerComp="FCM_PEER_COMP",e.FcmCountryCode="FCM_COUNTRY_CD",e.FcmEmplTeam="FCM_EMPL_TEAM",e}({})},31460:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var o=n(95155),r=n(41265),i=n(12115),l=n(83391),a=n(78011),s=n(7674),d=n(83458),c=n(3835),p=n(68324),u=n(53476),m=n(90212),h=n(37893),f=n(44561),v=n(3417),x=n(89142),g=n(35761),C=n(68998),b=n(22282),y=n(9561),A=n(69606),j=n(56833);let k=(0,x.Ay)(C.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",paddingTop:"2px",paddingBottom:"2px",justifyContent:"space-between",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),w=(0,x.Ay)(C.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",gap:"0 0.5rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),F=(0,x.Ay)(y.A)(e=>{let{theme:t}=e;return{fontSize:"14px !important",lineHeight:"1.25rem",fontWeight:"600 !important",color:t.palette.primary.main+"!important",display:"inline-flex",alignItems:"center",gap:"0 0.5rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),P=(0,x.Ay)(y.A)(e=>{let{theme:t}=e;return{whiteSpace:"nowrap",color:t.palette.common.white+"!important",fontWeight:"600 !important",fontSize:"0.75rem",marginBottom:"0.25rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),S=(0,x.Ay)(r.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",gap:"0 0.5rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),T={fundCds:[],fundNm:"",integTypeCd:"",astClassCd:"",cateCd:"",tickerCd:"",sellCurcCd:"",tradeCtryCd:"",issCtryCd:"",useYn:"",procDt:new Date(Date.now()-864e5)},z=()=>{let{t:e,i18n:t}=(0,j.Bd)(),n=(0,v.GV)(e=>e.portfolio),i=n.fundCodeData,{control:x,handleSubmit:C,reset:y,setValue:z}=(0,A.mN)({defaultValues:{...T,...n.filterParams}}),N=(0,g.A)(),I=(0,l.wA)();return(0,o.jsx)(m.A,{children:(0,o.jsxs)("form",{onSubmit:C(e=>{I(f.s4.setParams({...n.filterParams,...e,...p.Cu}))}),children:[(0,o.jsxs)(k,{children:[(0,o.jsxs)(F,{children:[e("common.search"),(0,o.jsx)(c.A,{})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(b.A,{startIcon:n.loading?(0,o.jsx)(s.b,{width:13}):void 0,type:"submit",variant:"contained",size:"small",children:e("common.search")}),(0,o.jsx)(b.A,{startIcon:(0,o.jsx)(d.A,{color:N.palette.primary.main}),variant:"outlined",size:"small",sx:{fontWeight:600},onClick:()=>{y({...T,...p.Cu}),I(f.s4.setParams({...n.filterParams,...T,...p.Cu}))},children:e("common.reset")})]})]}),(0,o.jsx)(u.A,{children:(0,o.jsxs)(r.A,{container:!0,columnSpacing:4,rowSpacing:2,children:[(0,o.jsxs)(S,{size:{md:6,lg:4,xl:3},spacing:2,children:[(0,o.jsx)(P,{variant:"body2",children:e("bosIntergration.fundCode")}),(0,o.jsx)(a.A,{name:"fundCds",control:x,controlType:"check-funds"})]}),(0,o.jsxs)(S,{size:{md:6,lg:4,xl:3},spacing:2,children:[(0,o.jsx)(P,{variant:"body2",children:e("bosIntergration.referenceDate")}),(0,o.jsx)(a.A,{name:"procDt",control:x,controlType:"date"})]}),(0,o.jsxs)(S,{size:{md:6,lg:4,xl:3},spacing:2,children:[(0,o.jsx)(P,{variant:"body2",children:e("bosIntergration.catAsset")}),(0,o.jsx)(a.A,{name:"astClassCd",control:x,controlType:"select",selectOptions:null==i?void 0:i[h.r.AssetClassification]})]}),(0,o.jsxs)(S,{size:{md:6,lg:4,xl:3},spacing:2,children:[(0,o.jsx)(P,{variant:"body2",children:e("bosIntergration.transactionCurrency")}),(0,o.jsx)(a.A,{name:"sellCurcCd",control:x,controlType:"select",selectOptions:null==i?void 0:i[h.r.TransactionCurrency]})]})]})})]})})};var N=n(19307),I=n(83238),M=n(73490),D=n(48406),R=n(41596),_=n(45196),E=n(75376),O=n(74121),W=n(4867),B=n(19376),V=n(10979),G=n(52515),H=n(83737);n(57028);var Y=n(26677);let L={procDt:"",fundCd:"",fundNm:"",astClassCd:"",astClassNm:"",buySell:"",tickerCd:"",tickerNm:"",bblTiker:"",sellCurcCd:"",numOfShareHeldPr:"",clsPr:"",bokValPr:"",makValPr:"",valGolPr:"",accrIntPr:"",dlExchRt:""},U=(0,x.Ay)(y.A)(e=>{let{theme:t}=e;return{whiteSpace:"nowrap",color:t.palette.common.white+"!important",fontWeight:"600 !important",fontSize:"0.75rem",marginBottom:"0.25rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),K=e=>{var t,n;let{isOpen:l,onClose:s,onSubmitData:d,data:c}=e,{t:p}=(0,H.Bd)("common"),u=(0,v.GV)(e=>e.portfolio).fundCodeData,{control:m,getValues:f,handleSubmit:x,reset:g,setValue:C}=(0,A.mN)({defaultValues:L}),b=()=>{g(),s()};return(0,i.useEffect)(()=>{l&&c&&g({...c,procDt:(0,W.r6)(null==c?void 0:c.procDt,D.Kn.DISPLAY)})},[l,c]),(0,o.jsx)(Y.A,{isOpen:l,title:p("common.updateTheInformation"),onClose:b,onCancel:b,onSave:x(e=>d(f())),wrapStyles:{minWidth:"50vw",maxWidth:"60vw"},children:(0,o.jsxs)(r.A,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.referenceDate")}),(0,o.jsx)(a.A,{name:"procDt",control:m,controlType:"date",disabled:!0})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.fundCode")}),(0,o.jsx)(a.A,{name:"fundCd",control:m,controlType:"input",disabled:!0})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.koreanFundName")}),(0,o.jsx)(a.A,{name:"fundNm",control:m,controlType:"input",disabled:!0})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.catAsset")}),(0,o.jsx)(a.A,{name:"astClassCd",control:m,controlType:"select",selectOptions:null==u?void 0:u[h.r.AssetClassification]})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.buySell")}),(0,o.jsx)(a.A,{name:"buySell",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.secCode")}),(0,o.jsx)(a.A,{name:"tickerCd",control:m,controlType:"select",selectOptions:null!==(n=null==u?void 0:null===(t=u[h.r.FcmTicker])||void 0===t?void 0:t.map(e=>{var t;return{value:e.value,label:null===(t=e.value)||void 0===t?void 0:t.toString()}}))&&void 0!==n?n:[],selectProps:{onChange:e=>{let t=null==u?void 0:u[h.r.FcmTicker].find(t=>t.value===e.target.value);C("tickerCd",null==t?void 0:t.value),C("tickerNm",null==t?void 0:t.label)}}})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.secName")}),(0,o.jsx)(a.A,{name:"tickerNm",control:m,controlType:"input",disabled:!0})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.tiker")}),(0,o.jsx)(a.A,{name:"bblTiker",control:m,controlType:"input"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.ccy")}),(0,o.jsx)(a.A,{name:"sellCurcCd",control:m,controlType:"select",selectOptions:null==u?void 0:u[h.r.TransactionCurrency]})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.quantity")}),(0,o.jsx)(a.A,{name:"numOfShareHeldPr",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.price")}),(0,o.jsx)(a.A,{name:"clsPr",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.bookValueKRW")}),(0,o.jsx)(a.A,{name:"bokValPr",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.markerValueKRW")}),(0,o.jsx)(a.A,{name:"makValPr",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.plKRW")}),(0,o.jsx)(a.A,{name:"valGolPr",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.accrdiInterestKRW")}),(0,o.jsx)(a.A,{name:"accrIntPr",control:m,controlType:"input-price"})]}),(0,o.jsxs)(r.A,{size:{md:4},spacing:2,children:[(0,o.jsx)(U,{variant:"body2",children:p("portfolio.fxRate")}),(0,o.jsx)(a.A,{name:"dlExchRt",control:m,controlType:"input",inputProps:{type:"number"}})]})]})})};var Q=n(48948),X=n(95801);let q=(0,x.Ay)("h3")(e=>{let{theme:t}=e;return{fontSize:"var(--font-size-2)",lineHeight:"var(--font-line-height-2)",fontWeight:600,color:t.palette.primary.main,span:{fontSize:"var(--font-size-1)",lineHeight:"var(--font-line-height-1)",color:t.palette.common.white,fontWeight:400},["@media (min-width: ".concat(M.pv,"px) and (max-width: 1439px)")]:{},[t.breakpoints.down("lg")]:{fontSize:"2.5rem",lineHeight:"2.75rem"},[t.breakpoints.down("md")]:{fontSize:"1.75rem",lineHeight:"2rem"},[t.breakpoints.down("sm")]:{fontSize:"2rem",lineHeight:"2.5rem"}}}),J=()=>{let{t:e,i18n:t}=(0,H.Bd)("common"),n=t.language,r=(0,O.d)(),a=(0,i.useRef)(null),s=(0,v.GV)(e=>e.portfolio.data),d=(0,v.GV)(e=>e.portfolio.meta),c=(0,v.GV)(e=>e.portfolio.filterParams),u=(0,v.GV)(e=>e.portfolio.loading),m=(0,l.wA)(),{height:h,wHalfMain:x}=(0,E.A)(),C=(0,i.useRef)(x),{confirm:y,onConfirm:A,onClose:j}=(0,_.S)();(0,g.A)();let{acceptButtons:k}=(0,X.e)(),[w,{on:F,off:P}]=(0,R.C)(),S=(0,i.useRef)(null),T=(0,i.useMemo)(()=>[{headerName:e("common.no"),maxWidth:60,width:60,cellClass:"text-center",cellRenderer:e=>{var t;return(0,B.hi)(d,Number(null==e?void 0:null===(t=e.node)||void 0===t?void 0:t.rowIndex),{hasPagin:!0})},valueGetter:e=>{var t;return(0,B.hi)(d,Number(null==e?void 0:null===(t=e.node)||void 0===t?void 0:t.rowIndex))}},{field:"procDt",headerName:e("portfolio.referenceDate"),cellClass:"text-center",valueFormatter:e=>(0,W.r6)(null==e?void 0:e.value,D.Kn.DISPLAY)},{field:"fundCd",headerName:e("portfolio.fundCode"),cellClass:"text-center"},{field:"fundNm",headerName:e("portfolio.koreanFundName"),cellClass:"text-center",minWidth:200},{field:"astClassNm",headerName:e("portfolio.catAsset"),cellClass:"text-center"},{field:"buySell",headerName:e("portfolio.buySell"),valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value),cellClass:"text-center"},{field:"tickerCd",headerName:e("portfolio.secCode"),cellClass:"text-center"},{field:"tickerNm",headerName:e("portfolio.secName"),cellClass:"text-center"},{field:"bblTiker",headerName:e("portfolio.tiker"),cellClass:"text-center"},{field:"sellCurcCd",headerName:e("bosIntergration.transactionCurrencySellingCurrency"),cellClass:"text-center",minWidth:250},{field:"numOfShareHeldPr",headerName:e("bosIntergration.numberOfShareHeld"),cellClass:"text-center",valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value)},{field:"clsPr",headerName:e("bosIntergration.closingPrice"),cellClass:"text-center",valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value)},{field:"bokValPr",headerName:e("bosIntergration.bookValue"),cellClass:"text-center",valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value)},{field:"makValPr",headerName:e("bosIntergration.marketValue"),cellClass:"text-center",valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value)},{field:"valGolPr",headerName:e("bosIntergration.valuationGainOrLossCurrentMarketValueOfHoldings"),cellClass:"text-center",minWidth:250,valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value)},{field:"accrIntPr",headerName:e("bosIntergration.accumulatedInterest"),cellClass:"text-center",valueFormatter:e=>(0,W.vv)(null==e?void 0:e.value)},{field:"dlExchRt",headerName:e("bosIntergration.dailyExchangeRate"),cellClass:"text-center"}],[e,n,d]),z=(0,i.useCallback)(async()=>{var e;await m(f.s4.getList({...p.Cu,...c,procDt:(null==c?void 0:c.procDt)?(0,G.default)(null==c?void 0:c.procDt,D.Kn.BE):"",fundCds:null==c?void 0:null===(e=c.fundCds)||void 0===e?void 0:e.join(",")}))},[m,c]),M=async()=>{var t,n,o,r,i,l;if(!(null==s?void 0:s.length))return;let d=await m(f.s4.getListAll({...c,procDt:(null==c?void 0:c.procDt)?(0,G.default)(null==c?void 0:c.procDt,D.Kn.BE):"",fundCds:null==c?void 0:null===(t=c.fundCds)||void 0===t?void 0:t.join(",")})),p=null==d?void 0:null===(o=d.payload)||void 0===o?void 0:null===(n=o[1])||void 0===n?void 0:n.data;null===(r=a.current)||void 0===r||r.api.setGridOption("rowData",p),null===(i=a.current)||void 0===i||i.api.exportDataAsCsv({fileName:e("portfolio.title.portfolio")+".csv"}),null===(l=a.current)||void 0===l||l.api.setGridOption("rowData",s)},Y=async t=>{var n;let o=await m(f.s4.addUpdatePortfolio({id:null==t?void 0:t.id,formData:{...t,procDt:(0,B.QM)(null==t?void 0:t.procDt,"/"),valGolPr:(0,B.QM)(null==t?void 0:t.valGolPr,","),makValPr:(0,B.QM)(null==t?void 0:t.makValPr,","),bokValPr:(0,B.QM)(null==t?void 0:t.bokValPr,","),clsPr:(0,B.QM)(null==t?void 0:t.clsPr,","),buySell:(0,B.QM)(null==t?void 0:t.buySell,","),accrIntPr:(0,B.QM)(null==t?void 0:t.accrIntPr,","),numOfShareHeldPr:(0,B.QM)(null==t?void 0:t.numOfShareHeldPr,",")}})),i=(0,B.FT)(o);if(null==i?void 0:i.isFailed)return r(null!==(n=null==i?void 0:i.resultMsg)&&void 0!==n?n:e("portfolio.msg.updatePortfolioFailed"),O.x.Error,{hasIcon:!0});r(e("portfolio.msg.updatePortfolioSuccess"),O.x.Success,{hasIcon:!0}),P(),j()},L=async e=>{m(f.s4.setParams({...c,pageNo:(null==e?void 0:e.page)+1,pageSize:null==e?void 0:e.size}))};return(0,i.useEffect)(()=>{z()},[JSON.stringify(c)]),(0,i.useEffect)(()=>{C.current=x},[x]),(0,o.jsxs)("div",{style:{height:h+"px"},children:[(0,o.jsxs)(V.A,{direction:"row",alignItems:"center",justifyContent:"space-between",padding:"1.25rem 0 0.75rem 0",children:[(0,o.jsx)(q,{dangerouslySetInnerHTML:{__html:e("portfolio.title.portfolioCount",{count:null==d?void 0:d.totalRows})}}),k.Export&&(0,o.jsx)(b.A,{startIcon:(0,o.jsx)(Q.A,{size:14}),onClick:M,variant:"outlined",children:e("button.export")})]}),(0,o.jsx)(N.A,{ref:a,columnDefs:T,rowData:s,containerStyle:{height:h-80.6+"px"},defaultColDef:{flex:1,minWidth:150},loading:u,onRowDoubleClicked:e=>{F(),S.current=null==e?void 0:e.data},hasPagination:!0,metadata:d,onPaginationChange:L,showActionInfo:!0}),(0,o.jsx)(I.A,{isOpen:y.isOpen,onOk:()=>Y(y.data),onCancel:j,type:"warn",title:y.title,content:y.message}),(0,o.jsx)(K,{isOpen:w,onClose:P,data:S.current,onSubmitData:t=>{A({isOpen:!0,mode:"update",title:e("portfolio.title.updatePortfolio"),message:e("portfolio.msg.areYouSureWantToUpdatePortfolio"),data:t})}})]})},$=()=>{let e=(0,l.wA)();return(0,i.useEffect)(()=>{e(f.s4.getCmCdSrchData())},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.A,{container:!0,spacing:4,children:[(0,o.jsx)(r.A,{size:{xs:12},children:(0,o.jsx)(z,{})}),(0,o.jsx)(r.A,{size:{xs:12},children:(0,o.jsx)(J,{})})]})})}}}]);