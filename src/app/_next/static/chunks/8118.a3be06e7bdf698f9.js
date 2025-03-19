"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8118],{55231:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(95155);r(12115);let o=function(e){return(0,a.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,a.jsx)("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#475569",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}},48406:(e,t,r)=>{r.d(t,{J6:()=>i,Kn:()=>o,VL:()=>n,d5:()=>a});let a={cachedRoute:"cachedRoute"},o={DISPLAY:"yyyy/MM/dd",DISPLAY_DATE_TIME:"yyyy/MM/dd HH:mm:ss",BE:"yyyyMMdd",CLIENT:"yyyy-MM-dd"},n={PDF:{"application/pdf":[".pdf"]},CSV:{"text/csv":[".csv"]},EXCEL:{"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"text/csv":[".csv"]},IMAGES:{"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"]},DOCUMENT:{"application/pdf":[".pdf"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"]},ALL:{"application/pdf":[".pdf"],"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"text/plain":[".txt"],"application/rtf":[".rtf"],"application/vnd.oasis.opendocument.text":[".odt"]}},i=["sheetPr","sheetViews","dimension","sheetFormatPr","cols","autoFilter","mergeCells ","rowBreaks","hyperlinks","pageMargins","dataValidations","pageSetup","headerFooter","printOptions","picture","drawing","sheetProtection","tableParts","conditionalFormatting"]},53800:(e,t,r)=>{r.d(t,{C:()=>g,Z6:()=>u,lj:()=>m});var a=r(95155),o=r(12115),n=r(3024),i=r(39832),d=r(65944);let l={themeColor:n.A.defaultColor,mode:n.A.mode,footer:n.A.footer,layout:n.A.layout,lastLayout:n.A.layout,direction:n.A.direction,navHidden:n.A.navHidden,appBarBlur:n.A.appBarBlur,navCollapsed:n.A.navCollapsed,contentWidth:n.A.contentWidth,toastPosition:n.A.toastPosition,verticalNavToggleType:n.A.verticalNavToggleType,skin:"horizontal"===n.A.layout&&"semi-dark"===n.A.skin?"default":n.A.skin,appBar:"horizontal"===n.A.layout&&"hidden"===n.A.appBar?"fixed":n.A.appBar,gridSystem:d.D.LEFT,navCollapsedRight:n.A.navCollapsedRight},c={appBar:l.appBar,footer:l.footer,layout:l.layout,navHidden:l.navHidden,lastLayout:l.lastLayout,toastPosition:l.toastPosition},p=()=>{let e=null;try{let t=i.A.getItem("settings");t?((e={...JSON.parse(t),...c}).gridSystem===d.D.LEFT&&(e.navCollapsed=!1,e.navCollapsedRight=!0),e.gridSystem===d.D.FULL&&(e.navCollapsed=!0,e.navCollapsedRight=!0),e.gridSystem===d.D.RIGHT&&(e.navCollapsed=!0,e.navCollapsedRight=!1)):e=l}catch(e){console.log(e)}return e},s=e=>{let t=Object.assign({},e);delete t.appBar,delete t.footer,delete t.layout,delete t.navHidden,delete t.lastLayout,delete t.toastPosition,i.A.setItem("settings",JSON.stringify(t))},m=(0,o.createContext)({saveSettings:e=>Promise.resolve(),settings:l}),u=e=>{let{children:t,pageSettings:r}=e,n=i.A.getItem("settings"),d=n?JSON.parse(n):l,[c,u]=(0,o.useState)(d);(0,o.useEffect)(()=>{let e=p();e&&u({...e}),r&&u({...c,...r})},[r]),(0,o.useEffect)(()=>{"horizontal"===c.layout&&"semi-dark"===c.skin&&g({...c,skin:"default"}),"horizontal"===c.layout&&"hidden"===c.appBar&&g({...c,appBar:"fixed"})},[c.layout]);let g=async e=>{s(e),u(e)};return(0,a.jsx)(m.Provider,{value:{settings:c,saveSettings:g},children:t})},g=m.Consumer},75376:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(12115);let o=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let[e,t]=(0,a.useState)(0),[r,o]=(0,a.useState)(0),[n,i]=(0,a.useState)(0),d=(0,a.useCallback)(()=>{let e=window.innerHeight-307,r=document.querySelector(".layout-page-content"),a=window.innerHeight-268;o(null==r?void 0:r.clientWidth),t(e),i(a)},[]);return(0,a.useEffect)(()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[d]),{height:e,wHalfMain:Math.round(r/2),mMain:Math.round(Math.round(2*r)/3),heightContent:n}}},8175:(e,t,r)=>{r.d(t,{t:()=>n});var a=r(12115),o=r(53800);let n=()=>(0,a.useContext)(o.lj)},53476:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(89142),o=r(68998);let n=(0,a.Ay)(o.A)(e=>{let{theme:t}=e;return{boxShadow:"none",padding:"5px",paddingLeft:"5px",paddingRight:"10px",marginTop:"0.5rem"}})},90212:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(89142),o=r(68998);let n=(0,a.Ay)(o.A)(e=>{let{theme:t,wInput:r}=e;return{"input::placeholder":{color:"#757575",fontWeight:400,opacity:1},"input:::-ms-input-placeholder":{color:"#757575",fontWeight:400},"input::-ms-input-placeholder":{color:"#757575",fontWeight:400},".MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root":{paddingRight:"39px !important"},".input-select":{borderColor:"dark"===t.palette.mode?"#333":"#E2E8F0",background:"".concat("dark"===t.palette.mode?"#141414":"#e3e4e5"),height:"28px",fontSize:"12px",color:"dark"===t.palette.mode?"#fff":"#333",paddingRight:8,borderRadius:"4px",width:"100%",minWidth:"180px",svg:{width:20},".MuiSelect-select":{paddingRight:5}},".react-datepicker-wrapper":{background:"".concat("dark"===t.palette.mode?"#141414":"#fff")},".input-text":{overflow:"hidden",textOverflow:"ellipsis",borderColor:"#333",background:"".concat("dark"===t.palette.mode?"#141414":"#fff"),color:"".concat("dark"===t.palette.mode?"#fff":"#2F2B0F"),height:"28px",fontSize:"12px",borderRadius:"4px",fontWeight:"400",minWidth:"".concat(null!=r?r:180,"px"),width:"100%",".MuiAutocomplete-inputRoot .MuiAutocomplete-input":{minWidth:"180px",fontSize:"12px",color:"#2F2B0F",borderColor:"#333",height:"11px"}},".MuiTypography-root":{color:"#2F2B0F",fontWeight:500,fontSize:"12px"},".MuiOutlinedInput-input":{width:"100%",minWidth:"".concat(null!=r?r:180,"px !important"),padding:"8.5px 10px"},".MuiSelect-select[aria-expanded=false] ~ svg":{transform:"rotate(0deg)",transition:"transform 0.2s linear"},".MuiSelect-select[aria-expanded=true] ~ svg":{transform:"rotate(180deg)",transition:"transform 0.2s linear"}}})},24570:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(89142),o=r(68998),n=r(8175),i=r(62562);let d=(0,a.Ay)(o.A)(e=>{let{theme:t}=e,{settings:r}=(0,n.t)();return{width:"100%","& .react-datepicker-popper":{zIndex:101},"& .react-datepicker-wrapper":{width:"100%"},"& .react-datepicker":{color:t.palette.text.primary,borderRadius:t.shape.borderRadius,fontFamily:t.typography.fontFamily,backgroundColor:t.palette.background.paper,boxShadow:t.shadows["bordered"===r.skin?0:7],border:"bordered"===r.skin?"1px solid ".concat(t.palette.divider):"none","& .react-datepicker__header":{padding:0,border:"none",fontWeight:"normal",backgroundColor:t.palette.background.paper,"& .react-datepicker__day-name":{margin:0}},"& .react-datepicker-year-header":{lineHeight:2.1,marginBottom:"0.5rem",color:t.palette.text.primary},"& .react-datepicker__triangle":{display:"none"},"& > .react-datepicker__navigation":{top:"0.55rem","&.react-datepicker__navigation--previous":{border:"none",backgroundImage:"".concat("url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\\' /%3E%3C/svg%3E')".replace("currentColor",t.palette.text.secondary).replace("#","%23")),height:"24px",width:"24px","& .react-datepicker__navigation-icon":{display:"none"}},"&.react-datepicker__navigation--next":{border:"none",backgroundImage:"".concat("url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\\' /%3E%3C/svg%3E')".replace("currentColor",t.palette.text.secondary).replace("#","%23")),height:"24px",width:"24px","& .react-datepicker__navigation-icon":{display:"none"}},"&.react-datepicker__navigation--next--with-time":{right:"122px"},"&:focus, &:active":{outline:0}},"& .react-datepicker__current-month":{lineHeight:"1rem",fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.15px",color:t.palette.text.primary,padding:"0.75rem",borderBottom:"1px solid #e6ecfa",marginBottom:"0.5rem"},"& .react-datepicker__day-name":{lineHeight:"1rem",fontSize:"0.75rem",width:"2.25rem",letterSpacing:"0.4px",color:t.palette.text.secondary},"& .react-datepicker__day":{margin:0,width:"2.25rem",fontSize:"0.75rem",lineHeight:2.75,height:"2.25rem",borderRadius:"0.25rem",color:t.palette.text.primary,"&.react-datepicker__day--selected, &.react-datepicker__day--keyboard-selected":{color:t.palette.common.white,backgroundColor:"".concat(t.palette.primary.main," !important")},"&.react-datepicker__day--in-range, &.react-datepicker__day--in-selecting-range":{borderRadius:0,color:t.palette.primary.main,backgroundColor:"".concat((0,i.z)(t.palette.primary.main,.06)," !important"),"&:empty":{backgroundColor:"transparent !important"}},"&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start":{borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",color:t.palette.common.white,backgroundColor:"".concat(t.palette.primary.main," !important")},"&.react-datepicker__day--range-end":{borderTopRightRadius:"50%",borderBottomRightRadius:"50%",color:t.palette.common.white,backgroundColor:"".concat(t.palette.primary.main," !important")},"&:focus, &:active":{outline:0},"&.react-datepicker__day--outside-month":{height:"auto"},"&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)":{color:t.palette.text.disabled,"&:hover":{backgroundColor:"transparent"}},"&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover":{color:t.palette.success.main,backgroundColor:(0,i.z)(t.palette.success.main,.12)},"&.react-datepicker__day--today":{fontWeight:"normal"}},"& .react-datepicker__header__dropdown":{"& .react-datepicker__month-dropdown-container:not(:last-child)":{marginRight:t.spacing(8)},"& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container":{marginBottom:t.spacing(4)},"& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year":{fontSize:"0.875rem",marginRight:t.spacing(1),color:t.palette.text.primary},"& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow":{borderTopColor:t.palette.text.secondary,borderRightColor:t.palette.text.secondary},"& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow":{top:4,borderTopColor:t.palette.text.disabled,borderRightColor:t.palette.text.disabled},"& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown":{paddingTop:t.spacing(1.5),paddingBottom:t.spacing(1.5),borderColor:t.palette.divider,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper,boxShadow:"light"===t.palette.mode?t.shadows[8]:t.shadows[9]},"& .react-datepicker__month-option, & .react-datepicker__year-option":{paddingTop:t.spacing(.5),paddingBottom:t.spacing(.5),"&:hover":{backgroundColor:t.palette.action.hover}},"& .react-datepicker__month-option.react-datepicker__month-option--selected_month":{backgroundColor:(0,i.z)(t.palette.primary.main,.08),"&:hover":{backgroundColor:(0,i.z)(t.palette.primary.main,.12)},"& .react-datepicker__month-option--selected":{display:"none"}},"& .react-datepicker__year-option.react-datepicker__year-option--selected_year":{backgroundColor:(0,i.z)(t.palette.primary.main,.08),"&:hover":{backgroundColor:(0,i.z)(t.palette.primary.main,.12)},"& .react-datepicker__year-option--selected":{display:"none"}},"& .react-datepicker__year-option":{"& .react-datepicker__navigation--years-upcoming":{width:9,height:9,borderStyle:"solid",borderWidth:"3px 3px 0 0",transform:"rotate(-45deg)",borderTopColor:t.palette.text.disabled,borderRightColor:t.palette.text.disabled,margin:"".concat(t.spacing(2.75)," auto ").concat(t.spacing(0))},"&:hover .react-datepicker__navigation--years-upcoming":{borderTopColor:t.palette.text.secondary,borderRightColor:t.palette.text.secondary},"& .react-datepicker__navigation--years-previous":{width:9,height:9,borderStyle:"solid",borderWidth:"0 0 3px 3px",transform:"rotate(-45deg)",borderLeftColor:t.palette.text.disabled,borderBottomColor:t.palette.text.disabled,margin:"".concat(t.spacing(0)," auto ").concat(t.spacing(2.75))},"&:hover .react-datepicker__navigation--years-previous":{borderLeftColor:t.palette.text.secondary,borderBottomColor:t.palette.text.secondary}}},"& .react-datepicker__month":{marginTop:t.spacing(3)},[t.breakpoints.down("sm")]:{"& .react-datepicker__month":{marginLeft:0,marginRight:0,marginBottom:0}},"& .react-datepicker__month, & .react-datepicker__year":{"& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text":{height:"2rem",alignItems:"center",display:"inline-flex",justifyContent:"center","&:hover":{borderRadius:t.shape.borderRadius},"&:focus, &:active":{outline:0}},"& .react-datepicker__quarter--selected, & .react-datepicker__year-text--selected, & .react-datepicker__month--selected, & .react-datepicker__quarter-text--keyboard-selected, & .react-datepicker__month-text--keyboard-selected, & .react-datepicker__year-text--keyboard-selected":{color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:"".concat(t.palette.primary.main," !important")},"& .react-datepicker__week-number":{fontWeight:600,color:t.palette.text.primary}},"& .react-datepicker__year-wrapper":{maxWidth:205,justifyContent:"center"},"& .react-datepicker__input-time-container":{display:"flex",alignItems:"center",..."rtl"===t.direction?{flexDirection:"row-reverse"}:{}},"& .react-datepicker__today-button":{borderRadius:"1rem",margin:"0 1rem 0.3rem",color:t.palette.common.white,backgroundColor:t.palette.primary.main},"& .react-datepicker__time-container":{borderLeftColor:t.palette.divider},"&.react-datepicker--time-only, & .react-datepicker__time-container":{width:"7rem",padding:t.spacing(1.2,0),"& .react-datepicker-time__header":{marginBottom:t.spacing(3),color:t.palette.text.primary,fontSize:t.typography.body2.fontSize},"& .react-datepicker__time":{background:t.palette.background.paper,"& .react-datepicker__time-box .react-datepicker__time-list-item--disabled":{color:t.palette.text.disabled}},"& .react-datepicker__time-list-item":{lineHeight:1.75,height:"auto !important",marginLeft:t.spacing(3.2),marginRight:t.spacing(1.2),color:t.palette.text.primary,borderRadius:t.shape.borderRadius,"&:focus, &:active":{outline:0},"&:hover":{backgroundColor:"".concat(t.palette.action.hover," !important")},"&.react-datepicker__time-list-item--selected":{color:"".concat(t.palette.common.white," !important"),backgroundColor:"".concat(t.palette.primary.main," !important")}},"& .react-datepicker__time-box":{width:"100%"},"& .react-datepicker__time-list":{"&::-webkit-scrollbar":{width:8},"&::-webkit-scrollbar-track":{background:t.palette.background.paper},"&::-webkit-scrollbar-thumb":{background:"#aaa",borderRadius:"10px"},"&::-webkit-scrollbar-thumb:hover":{background:"#999"}}},"&.react-datepicker--time-only .react-datepicker__time-container":{width:"calc(7rem - 2px)"},"& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover":{backgroundColor:t.palette.action.hover}},"& .react-datepicker__close-icon":{paddingRight:t.spacing(4),..."rtl"===t.direction?{right:0,left:"auto"}:{},"&:after":{width:"unset",height:"unset",fontSize:"1.5rem",color:t.palette.text.primary,backgroundColor:"transparent !important"}}}})},62562:(e,t,r)=>{r.d(t,{z:()=>a});let a=(e,t)=>{let r=e.replace("#","");3===r.length&&(r="".concat(r[0]).concat(r[0]).concat(r[1]).concat(r[1]).concat(r[2]).concat(r[2]));let a=parseInt(r.substring(0,2),16),o=parseInt(r.substring(2,4),16),n=parseInt(r.substring(4,6),16);return"rgba(".concat(a,", ").concat(o,", ").concat(n,", ").concat(t,")")}},55065:(e,t,r)=>{r.d(t,{Ay:()=>w,lV:()=>y,Ec:()=>x,lP:()=>b,du:()=>k});var a=r(72212),o=r(60766),n=r(70059),i=r(11414),d=r(4867),l=r(72441),c=r(32748);let p="".concat("/sys/file"),s=async e=>{try{return(await n.Ay.get("".concat(p),{params:(0,d.QV)(e),paramsSerializer:d.g3})).data}catch(e){return Promise.reject(e)}},m=async e=>{try{return(await n.Ay.get("".concat(p,"/").concat(e))).data}catch(e){return Promise.reject(e)}},u=async e=>{var t,r;try{let r=await n.Ay.get("".concat(p,"/download/").concat(e.id),{responseType:"blob",headers:{}}),{data:a}=r;if((null===(t=a.status)||void 0===t?void 0:t.success)===!1)return Promise.reject(a.status);return(0,l.eF)(a,e.fileName+"."+e.fileExtension),r.data}catch(e){return(null==e?void 0:null===(r=e.response)||void 0===r?void 0:r.status)===403&&i.Ay.error("For bidden"),Promise.reject(e)}},g=async e=>{try{let{files:t}=e;if(!(null==t?void 0:t.length))return;let r=new FormData;t.forEach(e=>{r.append("files",e)});let a=await n.Ay.post("".concat(p,"/upload"),r,{headers:{"Content-Type":"multipart/form-data"}}),{data:o}=a;if(![c.BR.Success,c.BR.Success201].includes(o.resultStatCd))return Promise.reject(o);return a.data}catch(e){return Promise.reject(e)}},h=async e=>{try{var t;let r=await n.Ay.delete("".concat(p,"/").concat(e)),{data:a}=r;if((null===(t=a.status)||void 0===t?void 0:t.success)===!1)return Promise.reject(a.status);return r.data}catch(e){return Promise.reject(e)}},x=(0,a.zD)("appDocFiles/fetchDocFiles",async e=>s(e));(0,a.zD)("appDocFiles/getDocFileById",async e=>await m(e));let y=(0,a.zD)("appDocFiles/downloadDocFile",async e=>u(e));(0,a.zD)("appDocFiles/uploadDocFile",async e=>await g(e)),(0,a.zD)("appDocFiles/deleteDocFile",async(e,t)=>{let r=await h(e);return await t.dispatch(x({...t.getState().docFiles.params,pageNo:1===t.getState().docFiles.params.pageNo?t.getState().docFiles.params.pageNo:t.getState().docFiles.params.pageNo+1})),r});let f=(0,a.Z0)({name:"appDocFiles",initialState:o.nQ,reducers:{selectDocFile:(e,t)=>{e.selectedDocFile=t.payload},setParams:(e,t)=>{e.params=t.payload}},extraReducers:e=>{e.addCase(x.fulfilled,(e,t)=>{e.docFiles=t.payload.data.map((e,t)=>({...e,index:t})),e.total=t.payload.meta.totalRows,e.meta=t.payload.meta})}}),{selectDocFile:b,setParams:k}=f.actions,w=f.reducer},65944:(e,t,r)=>{r.d(t,{D:()=>a});var a=function(e){return e.FULL="Full",e.LEFT="Left",e.RIGHT="Right",e}({})},32782:(e,t,r)=>{r.d(t,{o:()=>o,u:()=>a});var a=function(e){return e.WEB="Web",e.ADMIN="Admin",e}({}),o=function(e){return e.Top="top",e.Left="left",e.Bottom="bottom",e.Right="right",e}({})},3024:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(90668),o=r(32782),n=r(65944);let i={defaultLanguage:"en",displaySettingIcon:"none",defaultColor:"primary",templateName:"KIM FUND",layout:"vertical",mode:"dark",direction:"ltr",skin:"default",contentWidth:"boxed",footer:"static",routingLoader:!0,navHidden:!1,menuTextTruncate:!0,navSubItemIcon:a.A,verticalNavToggleType:"accordion",navCollapsed:!1,navigationSize:"100%",collapsedNavigationSize:56,afterVerticalNavMenuContentPosition:"fixed",beforeVerticalNavMenuContentPosition:"fixed",horizontalMenuToggle:"hover",horizontalMenuAnimation:!0,appBar:"static",appBarBlur:!1,responsiveFontSizes:!0,disableRipple:!1,disableCustomizer:!0,toastPosition:"top-right",type:o.u.ADMIN,defaultNavPos:o.o.Left,navigationSizeAdmin:258,navigationSizeMenu:130,navigationTopHeader:40,isHoverNavigation:!1,gridSystem:n.D.LEFT,maxResize:500,sidebarRight:240,navCollapsedRight:!1}},70879:(e,t,r)=>{r.d(t,{Ki:()=>T,YA:()=>M});var a=r(95155),o=r(24570),n=r(89142),i=r(68998),d=r(22282),l=r(39905),c=r(12115),p=r(40842),s=r.n(p),m=r(94908),u=r(30648),g=r(55231),h=r(56833),x=r(68284),y=r(80436);let f=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem",borderBottom:"1px solid ".concat(t.palette.common.border),marginBottom:"0.5rem","& .modify-date":{width:"1rem",height:"1rem",cursor:"pointer",userSelect:"none"},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),b=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",gap:"0.25rem",[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),k=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",gap:"0.375rem",span:{color:t.palette.common.black,fontSize:"0.75rem",lineHeight:"1rem",fontWeight:600},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),w=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{"&:after":{content:'""',width:"100%",height:"1px",backgroundColor:t.palette.common.border,bottom:"2.025rem",left:0,position:"absolute"},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),v=(0,n.Ay)(d.A)(e=>{let{theme:t}=e;return{marginBottom:"0.25rem",transform:"translateX(5.938rem)",color:t.palette.primary.main,[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),_=(0,c.forwardRef)((e,t)=>{let{showIcon:r=!0,onClearValue:o,...n}=e,i=(0,c.useRef)(null);return(0,c.useEffect)(()=>{!n.value&&i.current&&(i.current.value="")},[n.value]),(0,a.jsx)(l.A,{fullWidth:!0,placeholder:null==n?void 0:n.placeholder,...n,value:n.value?n.value:null,inputRef:i,sx:{width:"100%"},error:n.error,InputProps:{endAdornment:r?(null==n?void 0:n.value)?(0,a.jsx)(g.A,{style:{cursor:"pointer"},onClick:n.disabled?()=>{}:o}):(0,a.jsx)(m.JNw,{style:{color:"#fff"}}):void 0}})});_.displayName="PickersComponent";var A=r(35417),C=r(10979),S=r(20283),j=r(60615),R=r(61033),D=r(20257),F=r(97975),z=r(95739),I=r(72325),L=r(5565);(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.grey[100],padding:"12px 10px",fontSize:"12px",fontWeight:600,lineHeight:"1rem",borderBottom:"solid 1px ".concat(t.palette.common.border),color:t.palette.primary.main}}),(0,n.Ay)(A.Ay)(e=>{let{theme:t}=e;return{flexDirection:"row",[t.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"flex-start"}}}),(0,n.Ay)(C.A)(e=>{let{theme:t}=e;return{marginBottom:"0.75rem",[t.breakpoints.down("sm")]:{alignItems:"flex-start",gap:4,flexDirection:"column"}}}),(0,n.Ay)(S.A)(e=>{let{theme:t}=e;return{}});let M=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{".MuiInputBase-root":{"&.Mui-disabled":{border:"1px solid #333",backgroundColor:t.palette.common.semiDark+" !important"}}}}),B=(0,n.Ay)("span")(e=>{let{theme:t}=e;return{borderRadius:"50%",width:14,height:14,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5",...t.applyStyles("dark",{backgroundColor:"#30404d"})},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)",...t.applyStyles("dark",{background:"rgba(57,75,89,.5)"})},...t.applyStyles("dark",{boxShadow:"0 0 0 1px rgb(16 22 26 / 40%)",backgroundColor:"#394b59",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"})}});(0,n.Ay)(B)({backgroundColor:"#2C5FCE",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&::before":{display:"block",width:14,height:14,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}),(0,n.Ay)("span")(e=>{let{theme:t}=e;return{color:t.palette.error.main}});let T=(0,n.Ay)(e=>{let{selected:t,dateFormat:r,placeholder:n,name:i,onChange:d,selectsStart:l,onClearValue:p,...m}=e,{t:g}=(0,h.Bd)("common"),A=(0,c.useRef)(null),C=(0,c.useRef)(null),S=(0,c.useRef)(null),j=(0,c.useRef)(!1),[R,D]=(0,c.useState)(t?new Date(t):null),F=(0,c.useCallback)(e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:"react-datepicker",children:[t,(0,a.jsx)(w,{children:(0,a.jsx)(v,{onClick:()=>{var e;d(new Date),null===(e=A.current)||void 0===e||e.setOpen(!1)},size:"small",variant:"text",children:g("common.today")})})]})},[t,A.current]),z=(0,c.useCallback)(e=>{let{date:t,decreaseMonth:r,increaseMonth:o,increaseYear:n,decreaseYear:i,prevMonthButtonDisabled:d,nextMonthButtonDisabled:l}=e,c={className:"modify-date",color:"#949699"},p=t.toLocaleString("en-US",{month:"short"}),s=t.getFullYear();return(0,a.jsxs)(f,{children:[(0,a.jsxs)(b,{children:[(0,a.jsx)(u.YvZ,{onClick:i,...c}),(0,a.jsx)(u.pyl,{onClick:r,...c})]}),(0,a.jsxs)(k,{children:[(0,a.jsx)("span",{children:p}),(0,a.jsxs)("span",{children:[" ",s]})]}),(0,a.jsxs)(b,{children:[(0,a.jsx)(u.mf,{onClick:o,...c}),(0,a.jsx)(u.B_2,{onClick:n,...c})]})]})},[]),I=()=>{C.current&&(C.current.value="")},L=e=>(null==e?void 0:e.length)===8?(0,x.default)(e,"yyyyMMdd",new Date):(null==e?void 0:e.length)===6?(0,x.default)(e+"01","yyyyMMdd",new Date):(0,x.default)(e+"0101","yyyyMMdd",new Date),M=(0,c.useCallback)(e=>{let t=e.currentTarget.value,r=null==t?void 0:t.replaceAll(/[\/-]/g,"");if(!t)return;j.current=!0;let a=()=>{D(null),d(null),I()};if(![4,6,8].includes(r.length))return a();let o=L(r);if(!(0,y.default)(o))return a();S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{var e;D(o),d(o),null===(e=A.current)||void 0===e||e.setOpen(!1),j.current=!1},500)},[j.current,S.current,I]);return(0,c.useEffect)(()=>{if(!t){D(null),I();return}D(new Date(t))},[JSON.stringify(t),C.current]),(0,a.jsx)(o.A,{children:(0,a.jsx)(s(),{ref:A,selectsStart:l||!0,selected:R||null,dateFormat:r||"yyyy-MM-dd",dropdownMode:"select",className:"datepicker",onChangeRaw:M,calendarContainer:F,renderCustomHeader:z,placeholderText:n,customInput:(0,a.jsx)(_,{placeholder:n,registername:i,showIcon:m.showIcon,onClearValue:e=>{e.stopPropagation(),p(),setTimeout(()=>{var e;null===(e=A.current)||void 0===e||e.setOpen(!1)},100)},ref:C}),onChange:e=>{if(j.current){j.current=!1;return}D(e),d(e)},...m})})})(e=>{let{theme:t}=e;return{width:"100%",flex:1,".MuiOutlinedInput-input":{minWidth:"auto"}}});(0,n.Ay)(j.A)(e=>{let{theme:t}=e;return{"&.MuiFormControlLabel-root":{margin:0},".MuiFormControlLabel-label":{fontSize:"12px",fontWeight:600,userSelect:"none"},".MuiRadio-root":{padding:0,paddingRight:"9px"}}}),(0,n.Ay)(R.A)(()=>({padding:0})),(0,n.Ay)(D.A)(()=>({display:"flex",flexDirection:"row",gap:"1rem"})),(0,n.Ay)("label")(e=>{let{theme:t}=e;return{fontSize:"0.75rem",lineHeight:"1rem",textAlign:"right",fontWeight:600,color:t.palette.grey[900],minWidth:"82px"}}),(0,n.Ay)(C.A)(e=>{let{theme:t}=e;return{padding:"0.5rem",gap:"0.5rem"}}),(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{border:"1px solid ".concat(t.palette.common.border),borderRadius:"0.25rem",marginTop:"1rem"}}),(0,n.Ay)("p")(e=>{let{theme:t}=e;return{fontSize:"14px",cursor:"pointer",color:t.palette.grey[500],fontWeight:600}}),(0,n.Ay)("span")(e=>{let{theme:t}=e;return{display:"inline-block",fontSize:"14px",color:t.palette.primary.main,fontWeight:600}}),(0,n.Ay)("form")(()=>({border:"solid 1px #E6ECFA",borderRadius:"0.25rem"})),(0,n.Ay)(i.A)(()=>({padding:"0.5rem",boxShadow:"0px 1px 4px 0px #0616401A",borderRadius:"6px"})),(0,n.Ay)(A.Ay)(e=>{let{theme:t}=e;return{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"1rem",rowGap:"0.5rem",alignItems:"center",[t.breakpoints.down("xl")]:{gridTemplateColumns:"repeat(9, 1fr)"},[t.breakpoints.down("md")]:{gridTemplateColumns:"repeat(6, 1fr)"},[t.breakpoints.down("sm")]:{display:"flex",flexDirection:"column",alignItems:"flex-start"}}}),(0,n.Ay)(A.Ay)(()=>({display:"flex",alignItems:"center",gap:"0.25rem",gridColumn:"span 3",width:"100%"})),(0,n.Ay)(F.A)(()=>({height:"auto"})),(0,n.Ay)("label")(()=>({width:"80px",cursor:"pointer",overflow:"hidden",height:"60px",borderRadius:"4px",border:"dashed 1px #E2E8F0",display:"inline-flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"#475569",fontSize:"12px",".file-icon":{fontSize:"1rem"}})),(0,n.Ay)(L.default)(()=>({width:"100%",height:"100%",objectPosition:"center center",objectFit:"cover"})),(0,n.Ay)(z.A)(()=>({backgroundColor:"white",width:"100%",maxWidth:"100%",borderColor:"#E2E8F0",borderRadius:"0.25rem",minHeight:"auto!important","&:disabled":{backgroundColor:"#F1F5F9!important",borderColor:"transparent"}})),(0,n.Ay)(I.A)(()=>({fontSize:"0.75rem"}))},5907:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var a=r(95155),o=r(12115),n=r(89142),i=r(41265),d=r(10979),l=r(97975),c=r(9561),p=r(68998),s=r(83737),m=r(69606),u=r(22282),g=r(83391),h=r(90212),x=r(55065),y=r(3835),f=r(7674),b=r(83458),k=r(53476),w=r(70879),v=r(4867),_=r(73490);let A=(0,n.Ay)(p.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",paddingTop:"2px",paddingBottom:"2px",justifyContent:"space-between",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),C=(0,n.Ay)(p.A)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",gap:"0 0.5rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),S=(0,n.Ay)(d.A)(e=>{let{theme:t}=e;return{[t.breakpoints.up("xl")]:{paddingLeft:"0"},[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),j=(0,n.Ay)(d.A)(e=>{let{theme:t}=e;return{paddingTop:"5px",paddingBottom:"5px",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),R=(0,n.Ay)(c.A)(e=>{let{theme:t}=e;return{fontSize:"14px !important",lineHeight:"1.25rem",fontWeight:"600 !important",color:"dark"===t.palette.mode?"#fff !important":t.palette.primary.main+"!important",display:"inline-flex",alignItems:"center",gap:"0 0.5rem",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),D=(0,n.Ay)(c.A)(e=>{let{theme:t}=e;return{color:"dark"===t.palette.mode?"#fff !important":"#1E293B",[t.breakpoints.down("lg")]:{},[t.breakpoints.down("md")]:{}}}),F={fileNm:"",uploadDtFrom:new Date,uploadDtTo:new Date},z=e=>{let{setIsSubmit:t}=e,{t:r}=(0,s.Bd)("common"),{control:o,handleSubmit:n,reset:i,watch:c}=(0,m.mN)({defaultValues:F}),z=(0,g.wA)(),I=(0,g.d4)(e=>e.docFiles);return(0,a.jsx)(h.A,{children:(0,a.jsxs)("form",{onSubmit:n(e=>{z((0,x.du)({...I.params,...e,uploadDtFrom:(0,v.r6)(e.uploadDtFrom,_.Fr),uploadDtTo:(0,v.r6)(e.uploadDtTo,_.Fr)})),t(!0)}),children:[(0,a.jsxs)(A,{children:[(0,a.jsxs)(R,{children:[r("common.search"),(0,a.jsx)(y.A,{})]}),(0,a.jsxs)(C,{children:[(0,a.jsx)(u.A,{startIcon:I.loading?(0,a.jsx)(f.b,{width:13}):void 0,type:"submit",variant:"contained",size:"small",children:r("common.search")}),(0,a.jsx)(u.A,{startIcon:(0,a.jsx)(b.A,{}),variant:"outlined",size:"small",sx:{fontWeight:600},onClick:()=>{i(F),z((0,x.du)({...I.params,...F}))},children:r("common.reset")})]})]}),(0,a.jsx)(k.A,{children:(0,a.jsxs)(S,{direction:"row",alignItems:"center",flexWrap:"wrap",spacing:{xs:0,sm:5,md:10,xl:15},children:[(0,a.jsxs)(j,{direction:"row",alignItems:"center",spacing:2,children:[(0,a.jsx)(D,{variant:"body2",sx:{whiteSpace:"nowrap",fontWeight:"600 !important",fontSize:"12px"},children:"Name"}),(0,a.jsx)(m.xI,{name:"fileNm",control:o,render:e=>{let{field:t}=e;return(0,a.jsx)(l.A,{...t,size:"small",className:"input-text",placeholder:"Enter"})}})]}),(0,a.jsxs)(j,{direction:"row",alignItems:"center",spacing:2,children:[(0,a.jsx)(D,{variant:"body2",sx:{whiteSpace:"nowrap",fontWeight:"600 !important",fontSize:"12px"},children:"Date range"}),(0,a.jsxs)(d.A,{flexDirection:"row",alignItems:"center",gap:1,width:"100%",children:[(0,a.jsx)(p.A,{sx:{flex:1},children:(0,a.jsx)(m.xI,{name:"uploadDtFrom",control:o,render:e=>{let{field:{onChange:t,value:r}}=e;return(0,a.jsx)(w.Ki,{selected:null!=r?r:null,onChange:t,maxDate:c("uploadDtTo")})}})}),(0,a.jsx)(D,{children:"~"}),(0,a.jsx)(p.A,{sx:{flex:1},children:(0,a.jsx)(m.xI,{name:"uploadDtTo",control:o,render:e=>{let{field:{onChange:t,value:r}}=e;return(0,a.jsx)(w.Ki,{selected:null!=r?r:null,minDate:c("uploadDtFrom"),onChange:t})}})})]})]})]})})]})})};var I=r(75376),L=r(19307);let M=(0,n.Ay)(d.A)(e=>{let{theme:t}=e;return{paddingBottom:"10px",[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),B=(0,n.Ay)(c.A)(e=>{let{theme:t}=e;return{fontSize:"14px",lineHeight:"1.25rem",fontWeight:600,color:null==t?void 0:t.palette.primary.main,[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),T=e=>{let[t,r]=(0,o.useState)(!1),n=(0,g.wA)(),i=async()=>{r(!0),await n((0,x.lV)(e.data)),r(!1)};return(0,a.jsx)(u.A,{disabled:t,onClick:i,startIcon:t&&(0,a.jsx)(f.b,{width:13}),variant:"contained",size:"small",children:"Download"})},E=e=>{let{setIsSubmit:t,isSubmit:r}=e,n=(0,g.wA)(),{t:l}=(0,s.Bd)("common"),c=(0,g.d4)(e=>e.docFiles),m=(0,o.useRef)(!1),[u,h]=(0,o.useState)({pageSize:_.WU,page:0}),y=(0,o.useRef)(null),{height:f,wHalfMain:b}=(0,I.A)(),k=(0,o.useRef)(b),w=(0,o.useMemo)(()=>[{headerName:"#",maxWidth:60,width:60,cellClass:"text-center",valueGetter:e=>{var t,r;return(null!==(r=null===(t=e.node)||void 0===t?void 0:t.rowIndex)&&void 0!==r?r:0)+1}},{field:"fileName",headerName:"Name",cellClass:"text-center",minWidth:250},{field:"fileSize",headerName:"File size",cellClass:"text-center"},{field:"createdName",headerName:"Username",cellClass:"text-center"},{field:"createdAt",headerName:"Date & Time",cellClass:"text-center"},{field:"httpMethod",headerName:"Action",cellClass:"text-center",cellRenderer:T}],[]),v=async e=>{h({page:null==e?void 0:e.page,pageSize:null==e?void 0:e.size})},A=(0,o.useCallback)(async()=>{await n((0,x.Ec)({pageNo:u.page+1,pageSize:u.pageSize,sortDirection:"DESC"})),m.current=!1},[n,u]);return(0,o.useEffect)(()=>{if(!m.current){m.current=!0;return}A()},[u]),(0,o.useEffect)(()=>{if(!r&&!m.current){m.current=!0;return}n((0,x.Ec)({...c.params}))},[c.params]),(0,o.useEffect)(()=>{k.current=b},[b]),(0,a.jsx)(i.A,{container:!0,spacing:2,children:(0,a.jsxs)(i.A,{size:{xs:12,md:12},sx:{width:k.current},children:[(0,a.jsxs)(M,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(B,{children:"Files & Document Management"}),(0,a.jsx)(d.A,{direction:"row",alignItems:"center",spacing:2.4,children:"\xa0"})]}),(0,a.jsx)(p.A,{sx:{height:f+40+"px",position:"relative"},children:(0,a.jsx)(L.A,{ref:y,columnDefs:w,rowData:c.docFiles,defaultColDef:{flex:1},containerStyle:{height:f-40+"px"},onRowDoubleClicked:e=>{n((0,x.lP)({...null==e?void 0:e.data}))},hasPagination:!0,metadata:null==c?void 0:c.meta,onPaginationChange:v})})]})})},N=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{marginLeft:-20,marginRight:-20,borderBottom:"1px solid ".concat("dark"===t.palette.mode?t.palette.customColors.darkLineColor:t.palette.customColors.lightLineColor)}}),W=()=>{let[e,t]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{container:!0,mb:4,children:(0,a.jsx)(i.A,{size:{xs:12},sx:{paddingLeft:4.5,paddingRight:4.5},children:(0,a.jsx)(z,{setIsSubmit:t})})}),(0,a.jsx)(i.A,{container:!0,spacing:4,children:(0,a.jsx)(i.A,{size:{xs:12},children:(0,a.jsx)(E,{isSubmit:e,setIsSubmit:t})})})]})}}}]);