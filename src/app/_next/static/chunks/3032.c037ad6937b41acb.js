"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651,3032],{68998:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(12115),o=r(43463),i=r(73166),l=r(51157),a=r(2611),s=r(66307),d=r(95155),u=r(82795),c=r(93717),f=r(26366);let p=(0,r(81045).A)("MuiBox",["root"]),h=(0,c.A)(),A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t,defaultTheme:r,defaultClassName:u="MuiBox-root",generateClassName:c}=e,f=(0,i.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.A);return n.forwardRef(function(e,n){let i=(0,s.A)(r),{className:l,component:p="div",...h}=(0,a.A)(e);return(0,d.jsx)(f,{as:p,ref:n,className:(0,o.A)(l,c?c(u):u),theme:t&&i[t]||i,...h})})}({themeId:f.A,defaultTheme:h,defaultClassName:p.root,generateClassName:u.A.generate})},12567:(e,t,r)=>{r.d(t,{b:()=>o}),r(12115);var n=r(81087);function o(e){return(0,n.b)(e)}r(95155)},10979:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(12115),o=r(43463),i=r(62181),l=r(37157),a=r(7123),s=r(4577),d=r(14413),u=r(2611),c=r(55212),f=r(77365),p=r(35374),h=r(95155);let A=(0,c.A)(),m=(0,s.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function v(e){return(0,d.A)({props:e,name:"MuiStack",defaultTheme:A})}let y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],g=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,f.NI)({theme:t},(0,f.kW)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let n=(0,p.LX)(t),o=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),l=(0,f.kW)({values:e.direction,base:o}),a=(0,f.kW)({values:e.spacing,base:o});"object"==typeof l&&Object.keys(l).forEach((e,t,r)=>{if(!l[e]){let n=t>0?l[r[t-1]]:"column";l[e]=n}}),r=(0,i.A)(r,(0,f.NI)({theme:t},a,(t,r)=>e.useFlexGap?{gap:(0,p._W)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${y(r?l[r]:e.direction)}`]:(0,p._W)(n,t)}}))}return(0,f.iZ)(t.breakpoints,r)};var x=r(89142),b=r(12567);let k=function(e={}){let{createStyledComponent:t=m,useThemeProps:r=v,componentName:i="MuiStack"}=e,s=()=>(0,a.A)({root:["root"]},e=>(0,l.Ay)(i,e),{}),d=t(g);return n.forwardRef(function(e,t){let i=r(e),{component:l="div",direction:a="column",spacing:c=0,divider:f,children:p,className:A,useFlexGap:m=!1,...v}=(0,u.A)(i),y=s();return(0,h.jsx)(d,{as:l,ownerState:{direction:a,spacing:c,useFlexGap:m},ref:t,className:(0,o.A)(y.root,A),...v,children:f?function(e,t){let r=n.Children.toArray(e).filter(Boolean);return r.reduce((e,o,i)=>(e.push(o),i<r.length-1&&e.push(n.cloneElement(t,{key:`separator-${i}`})),e),[])}(p,f):p})})}({createStyledComponent:(0,x.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,b.b)({props:e,name:"MuiStack"})})},35761:(e,t,r)=>{r.d(t,{A:()=>l}),r(12115);var n=r(66307),o=r(92739),i=r(26366);function l(){let e=(0,n.A)(o.A);return e[i.A]||e}},81087:(e,t,r)=>{r.d(t,{A:()=>s,b:()=>a});var n=r(12115),o=r(44151),i=r(95155);let l=n.createContext(void 0);function a(e){let{props:t,name:r}=e;return function(e){let{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;let i=t.components[r];return i.defaultProps?(0,o.A)(i.defaultProps,n):i.styleOverrides||i.variants?n:(0,o.A)(i,n)}({props:t,name:r,theme:{components:n.useContext(l)}})}let s=function(e){let{value:t,children:r}=e;return(0,i.jsx)(l.Provider,{value:t,children:r})}},2611:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(62181),o=r(93943);let i=e=>{let t={systemProps:{},otherProps:{}},r=e?.theme?.unstable_sxConfig??o.A;return Object.keys(e).forEach(n=>{r[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]}),t};function l(e){let t;let{sx:r,...o}=e,{systemProps:l,otherProps:a}=i(o);return t=Array.isArray(r)?[l,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,n.Q)(t)?{...l,...t}:l}:{...l,...r},{...a,sx:t}}},4577:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(29225).Ay)()},92326:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(44151);function o(e){let{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,n.A)(t.components[r].defaultProps,o):o}},14413:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(92326),o=r(66307);function i(e){let{props:t,name:r,defaultTheme:i,themeId:l}=e,a=(0,o.A)(i);return l&&(a=a[l]||a),(0,n.A)({theme:a,name:r,props:t})}},82795:(e,t,r)=>{r.d(t,{A:()=>o});let n=e=>e,o=(()=>{let e=n;return{configure(t){e=t},generate:t=>e(t),reset(){e=n}}})()},7123:(e,t,r)=>{r.d(t,{A:()=>n});function n(e,t,r){let n={};for(let o in e){let i=e[o],l="",a=!0;for(let e=0;e<i.length;e+=1){let n=i[e];n&&(l+=(!0===a?"":" ")+t(n),a=!1,r&&r[n]&&(l+=" "+r[n]))}n[o]=l}return n}},37157:(e,t,r)=>{r.d(t,{Ay:()=>i});var n=r(82795);let o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function i(e,t,r="Mui"){let l=o[t];return l?`${r}-${l}`:`${n.A.generate(e)}-${t}`}},81045:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(37157);function o(e,t,r="Mui"){let i={};return t.forEach(t=>{i[t]=(0,n.Ay)(e,t,r)}),i}},75376:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(12115);let o=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let[e,t]=(0,n.useState)(0),[r,o]=(0,n.useState)(0),[i,l]=(0,n.useState)(0),a=(0,n.useCallback)(()=>{let e=window.innerHeight-307,r=document.querySelector(".layout-page-content"),n=window.innerHeight-268;o(null==r?void 0:r.clientWidth),t(e),l(n)},[]);return(0,n.useEffect)(()=>(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[a]),{height:e,wHalfMain:Math.round(r/2),mMain:Math.round(Math.round(2*r)/3),heightContent:i}}},73032:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(95155),o=r(35761),i=r(10979),l=r(68998);r(12115);var a=r(81719),s=r(77711),d=r(75376);let u=(0,s.default)(()=>Promise.all([r.e(266),r.e(9465),r.e(9094),r.e(1414),r.e(8912),r.e(3368),r.e(1265),r.e(9748),r.e(2255),r.e(3014),r.e(3417),r.e(6629),r.e(7188)]).then(r.bind(r,17188))),c=(0,s.default)(()=>Promise.all([r.e(266),r.e(5760),r.e(4506),r.e(6446),r.e(9465),r.e(9094),r.e(1414),r.e(8912),r.e(3368),r.e(1265),r.e(9748),r.e(2255),r.e(2848),r.e(7795),r.e(3014),r.e(3417),r.e(6629),r.e(4192),r.e(9615)]).then(r.bind(r,19615))),f=()=>{let{height:e}=(0,d.A)(),t=(0,o.A)();return(0,n.jsx)("div",{children:(0,n.jsxs)(i.A,{flexDirection:"row",overflow:"hidden",children:[(0,n.jsx)(a.c,{handleWrapperStyle:{paddingRight:16},handleStyles:{bottom:{display:"none"},bottomLeft:{display:"none"},bottomRight:{display:"none"},left:{display:"none"},right:{backgroundColor:"dark"===t.palette.mode?"#333":"#eee",width:"3px",right:0},top:{display:"none"},topLeft:{display:"none"},topRight:{display:"none"}},minWidth:"5%",maxWidth:"95%",defaultSize:{width:"50%"},style:{paddingRight:"0.75rem",overflow:"hidden"},bounds:"parent",minHeight:e+"px",children:(0,n.jsx)(l.A,{sx:{overflowX:"auto"},children:(0,n.jsx)(l.A,{minWidth:"768px",children:(0,n.jsx)(u,{})})})}),(0,n.jsx)(l.A,{width:"100%",sx:{overflowX:"auto"},paddingLeft:"0.5rem",children:(0,n.jsx)(l.A,{minWidth:"768px",children:(0,n.jsx)(c,{})})})]})})}},43463:(e,t,r)=>{r.d(t,{A:()=>n});let n=function(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=t);return n}}}]);