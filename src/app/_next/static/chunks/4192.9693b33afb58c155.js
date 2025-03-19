"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4192],{83238:(e,t,r)=>{r.d(t,{A:()=>b});var a=r(95155),n=r(89142),o=r(68998),i=r(9561),s=r(22282),l=r(78416),d=r(27753),F=r(26214);r(12115);var c=r(13970),m=r(20206),g=r(83737);let u=(0,n.Ay)(o.A)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",alignItems:"center",padding:"1.5rem 1.5rem 0 1.5rem",[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),h=(0,n.Ay)(o.A)(e=>{let{theme:t,type:r}=e;return{width:"3.75rem",height:"3.75rem",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"succ"===r?t.palette.success.light:"error"===r?t.palette.error.light:t.palette.warning.light,[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),A=(0,n.Ay)(i.A)(e=>{let{theme:t,type:r}=e;return{marginTop:"0.625rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:600,color:"succ"===r?t.palette.success.main:"error"===r?t.palette.error.main:t.palette.warning.main,[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),p=(0,n.Ay)(i.A)(e=>{let{theme:t}=e;return{fontSize:"1rem",lineHeight:"1.5rem",color:t.palette.secondary.main,[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),E=(0,n.Ay)(s.A)(e=>{let{theme:t}=e;return{minWidth:68,paddingLeft:0,paddingRight:0,color:"#64748B",fontSize:"12px",fontWeight:600,borderColor:"#64748B",background:"#F1F5F9",".MuiButton-startIcon":{marginRight:"4px"},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),y=(0,n.Ay)(s.A)(e=>{let{theme:t}=e;return{minWidth:68,paddingLeft:0,paddingRight:0,fontSize:"12px",fontWeight:600,".MuiButton-startIcon":{marginRight:"2px"},"&.submit":{".MuiButton-startIcon":{position:"absolute"}},[t.breakpoints.down("xl")]:{},[t.breakpoints.down("md")]:{}}}),b=e=>{let{isOpen:t,onClose:r,content:n,title:o,renderActions:i,onOk:s,onCancel:b,renderTitle:f,type:k,hideCancelButton:x=!1}=e,{t:B}=(0,g.Bd)("common"),C="succ"===k?(0,a.jsx)(c.cxC,{size:26,color:"#039732"}):"warn"===k?(0,a.jsx)(m.xtx,{size:26,color:"#FFBF0F"}):(0,a.jsx)(c.ts_,{size:26,color:"#CF1322"});return(0,a.jsxs)(l.A,{open:t,transitionDuration:100,PaperProps:{sx:{minWidth:"25.625rem"}},onClose:()=>{null==r||r()},children:[f?"function"==typeof f?f():f:(0,a.jsxs)(u,{children:[(0,a.jsx)(h,{type:k,children:C}),(0,a.jsx)(A,{type:k,children:o})]}),(0,a.jsx)(d.A,{sx:{textAlign:"center",padding:"0.8rem 1.5rem 2rem 1.5rem",maxWidth:"100%",whiteSpace:"pre-wrap"},children:"function"==typeof n?n():"string"==typeof n?(0,a.jsx)(p,{children:n}):n}),(0,a.jsx)(F.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:i?"function"==typeof i?i():i:(0,a.jsxs)(a.Fragment,{children:[!x&&(0,a.jsx)(E,{variant:"outlined",size:"small",onClick:()=>{null==b||b()},children:B("button.cancel")}),(0,a.jsx)(y,{size:"small",variant:"contained",autoFocus:!0,onClick:s,children:B("button.ok")})]})})]})}},45196:(e,t,r)=>{r.d(t,{S:()=>n});var a=r(12115);let n=()=>{let[e,t]=(0,a.useState)({message:"",isOpen:!1});return{confirm:e,onConfirm:e=>t(e),onClose:()=>t({isOpen:!1,message:"",flag:"",mode:e.mode})}}},39666:(e,t,r)=>{r.d(t,{s:()=>o});var a=r(76046),n=r(19376);let o=e=>{let t=(0,a.useSearchParams)();return{params:(0,n.zZ)(t),onSetParams:(e,r)=>{let a=new URLSearchParams(t.toString());Object.entries(e).forEach(e=>{let[t,r]=e;"object"!=typeof r&&""!==r&&null!=r?a.set(t,r):"object"==typeof r&&r?a.set(t,JSON.stringify(r)):a.delete(t)}),window.history.replaceState(null,null!=r?r:"","?".concat(a.toString()))}}}},74121:(e,t,r)=>{r.d(t,{d:()=>c,x:()=>F});var a=r(95155),n=r(43463),o=r(11414),i=r(13970),s=r(94908),l=r(20206),d=r(62930),F=function(e){return e.Success="success",e.Warning="warning",e.Information="information",e.Error="error",e}({});let c=()=>(e,t,r)=>{var F;return e&&(0,o.Ay)("string"==typeof e?(0,a.jsx)("span",{className:"title",children:e}):e,{className:(0,n.A)("react-hot-toast",null==r?void 0:r.className,t),...null===(F=null==r?void 0:r.hasIcon)||void 0===F||F?{icon:"success"===t?(0,a.jsx)(i.cxC,{size:13,style:{minWidth:13},color:d.T.green[600]}):"warning"===t?(0,a.jsx)(l.vYr,{size:13,style:{minWidth:13},color:d.T.yellow[600]}):"information"===t?(0,a.jsx)(s.VQq,{size:13,style:{minWidth:13},color:d.T.blue[500]}):(0,a.jsx)(i.ts_,{size:13,style:{minWidth:13},color:d.T.red[600]})}:{},...r})}},62930:(e,t,r)=>{r.d(t,{A:()=>n,T:()=>a});let a={common:{black:"#000",white:"#FFF",brand:"#00E5AB",domain:"#0066FF",caption:"#404040",close:"#737373",trOdd:"#F8FBFF",bgGray:"#EAEBEC",border:"#E2E8F0",hover:"#F1F5F9",gray5:"#94A3B8"},primary:{lighter:"#E8F5E9",light:"#FAF3CA",main:"#2C5FCE",dark:"#21479A",contrastText:"#fff"},secondary:{light:"#9C9FA4",main:"#595959",dark:"#777B82",contrastText:"#FFF"},success:{light:"#D9F5E2",main:"#039732",dark:"#4CB200",contrastText:"#FFF"},error:{light:"#FFF1F0",main:"#CF1322",dark:"#E04347",contrastText:"#FFF"},warning:{light:"#FFF8E5",main:"#FFBF0F",dark:"#E09E00",contrastText:"#FFF"},info:{light:"#f4f1de",main:"#ff7a0a",dark:"#b6a336",contrastText:"#4F4F4F"},grey:{50:"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#D5D5D5",A200:"#AAAAAA",A400:"#616161",A700:"#303030"},blue:{100:"#F0F5FF",500:"#2C5FCE"},green:{100:"#EBFAEF",600:"#2EB553"},yellow:{100:"#FFF8E5",600:"#FFBF0F"},red:{100:"#FFF1F0",600:"#F5222D"},gray:{800:"#334155",900:"#1E293B"}},n=(e,t,r)=>{let a="#ffffff",n="#000000",o="light"===e?a:n;return{customColors:{dark:n,main:o,light:a,darkBg:n,lightBg:a,primaryGradient:"primary"===r?"#C6A7FE":"secondary"===r?"#9C9FA4":"success"===r?"#93DD5C":"error"===r?"#FF8C90":"warning"===r?"#FFCF5C":"#6ACDFF",bodyBg:"light"===e?"#F4F5FA":"#1F1F1F",tableHeaderBg:"light"===e?"#5e6675":"#3D3759",headerBg:"light"===e?a:n,darkLightBg:"light"===e?"#F5F5F5":"#262626",darkLightIcon:"light"===e?"#2C5FCE":"#FFF",darkLineColor:"#333",lightLineColor:"#e3e4e5",darkMoreLineColor:"#3c404a"},common:{black:"#000",white:"#FFF",brand:"#00E5AB",domain:"#0066FF",caption:"#404040",close:"#737373",trOdd:"#F8FBFF",bgGray:"#EAEBEC",border:"#E6ECFA",dark:"#141414",semiDark:"#1f1f1f",borderDark:"#333"},mode:e,primary:{lighter:"#E8F5E9",light:"#FAF3CA",main:"#C5733B",dark:"#61412A",contrastText:"#fff",bgDark:"#1F1F1F"},secondary:{light:"#9C9FA4",main:"#595959",dark:"#777B82",contrastText:"#FFF"},success:{light:"#D9F5E2",main:"#039732",dark:"#4CB200",contrastText:"#FFF"},error:{light:"#FFF1F0",main:"#CF1322",dark:"#E04347",contrastText:"#FFF"},warning:{light:"#FFF8E5",main:"#FFBF0F",dark:"#E09E00",contrastText:"#FFF"},info:{light:"#f4f1de",main:"#ff7a0a",dark:"#b6a336",contrastText:"#4F4F4F"},grey:{50:"#FAFAFA",100:"#F8FAFC",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#1E293B",A100:"#D5D5D5",A200:"#AAAAAA",A400:"#616161",A700:"#303030"},text:{primary:"rgba(".concat(o,", 0.87)"),secondary:"rgba(".concat(o,", 0.68)"),third:"#263238",disabled:"rgba(".concat(o,", 0.38)"),label:"#402BB0",sLabel:"#737373",tLabel:"#404040",link:"#263238",copy:"#6A6A6A",darkGray:"#475569",textBlack:"#1E293B",gray500:"#AFAFAF"},divider:"rgba(".concat(o,", 0.12)"),background:{paper:"light"===e?"#FFF":"#fff",default:"bordered"===t&&"light"===e?"#FFF":"bordered"===t&&"dark"===e?"#312D4B":"light"===e?"#FFFFFF":"#1F1F1F",header:"#004DBF",bgSection:"#F5F7FA",bgHeader:"#E6F0FF",bgSecondary:"#FBFBFB",bgThree:"#00E5AB",bgFour:"#3B82F6",bgFive:"#CCFAEE",bgLightGray:"#F5F5F5",disabled:"#E2E8F0"},action:{active:"rgba(".concat(o,", 0.54)"),hover:"rgba(".concat(o,", 0.04)"),selected:"rgba(".concat(o,", 0.08)"),disabled:"transparent",disabledBackground:"rgba(".concat(o,", 0.18)"),focus:"rgba(".concat(o,", 0.12)"),link:"#0066FF"}}}},30672:(e,t,r)=>{r.d(t,{O:()=>E,c:()=>p});var a=r(95155),n=r(39832),o=r(76046),i=r(12115),s=r(70059),l=r(72441),d=r(59292),F=r(60766),c=r(62246),m=r(86939),g=r(48406),u=r(97491),h=r(4744),A=r(3417);let p=(0,i.createContext)(F.lU),E=e=>{let{children:t}=e;(0,o.useRouter)();let{returnUrl:r}=(0,o.useParams)(),[E,y]=(0,i.useReducer)(d.li,F.lU),[b,f]=(0,i.useState)((0,l.L0)()),[k,x]=(0,i.useState)(null),[B,C]=(0,i.useState)([]),v=(0,A.jL)(),w=async()=>{y({type:c.W.SET_IS_INITIALIZED,payload:!0}),n.A.getItem(m.A.storageAccessTokenKey)&&y({type:c.W.SET_USER,payload:JSON.parse(n.A.getItem(m.A.storeUser))}),y({type:c.W.SET_LOADING,payload:!1})},T=async(e,t)=>await s.Ay.get("/sys/users/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}),S=async(e,t)=>{await s.Ay.post(m.A.loginUrl,e).then(async e=>{let t;let{data:a,status:i}=e.data,{roles:s,userInfo:d,menus:F}=a;(null==(t=await T(null==d?void 0:d.userId,null==a?void 0:a.access_token))?void 0:t.data)&&(t=null==t?void 0:t.data),n.A.setItem(m.A.storageAccessTokenKey,a.access_token),n.A.setItem(m.A.storeRefreshTokenKey,a.refresh_token),y({type:c.W.SET_USER,payload:{...d,role:s,menus:[p,{id:(0,l.lk)(),menuTitleEn:"menu_page.home",menuTitleKr:"menu_page.home",icon:"icon_Dashboard",routFullPath:"/dashboard",routPath:"/dashboard"},...F]}}),n.A.setItem(m.A.storeUser,JSON.stringify({...d,role:s,menus:[{id:(0,l.lk)(),menuTitleEn:"menu_page.home",menuTitleKr:"menu_page.home",icon:"icon_Dashboard",routFullPath:"/dashboard",routPath:"/dashboard"},...F],...null==t?void 0:t.data})),n.A.setItem(m.A.tabLinks,JSON.stringify([{id:(0,l.lk)(),menuTitleEn:"menu_page.home",menuTitleKr:"menu_page.home",icon:"icon_Dashboard",routFullPath:"/dashboard",routPath:"/dashboard",href:"/dashboard"}]));let g=r&&"/"!==r?r:"/";(0,o.redirect)(g)}).catch(e=>{var r;t&&e&&t(null!==(r=null==e?void 0:e.response)&&void 0!==r?r:e)})},I=async e=>{let t=n.A.getItem(m.A.storeUser);if(!t)return;let r={...JSON.parse(t),...e};n.A.setItem(m.A.storeUser,JSON.stringify(r)),y({type:c.W.SET_USER,payload:r})},D=async(e,t)=>{await s.Ay.post(m.A.registerUrl,{...e,phoneNumber:e.phoneNumber.split("-").join(""),fullName:e.bizOrgName}).then(async r=>{var a;let n=r.data;if((null==n?void 0:null===(a=n.status)||void 0===a?void 0:a.success)===!1){t&&t(n);return}await S({username:e.email,password:e.password})}).catch(e=>{t&&t(e)})},_=async()=>{await u.Dv.signOut(),n.A.removeItem(m.A.storageAccessTokenKey),n.A.removeItem(m.A.storeRefreshTokenKey),n.A.removeItem(m.A.storeUser),n.A.removeItem(m.A.tabLinks),n.A.removeItem(g.d5.cachedRoute),n.A.removeItem("navWidth"),y({type:c.W.SET_USER,payload:null}),y({type:c.W.SET_LOADING,payload:!1}),y({type:c.W.SET_IS_INITIALIZED,payload:!1}),v(h.Xp.logout()),f([]),(0,o.redirect)("/login")};return(0,i.useEffect)(()=>{w()},[]),(0,a.jsx)(p.Provider,{value:{...E,login:S,register:D,logout:_,dispatch:y,tabLists:b,setTabListContext:f,updateCachedData:I,tabSelected:k,setTabSelected:x,listMounted:B,setListMounted:C},children:t})}},93297:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(12115),n=r(30672);let o=()=>(0,a.useContext)(n.c)}}]);