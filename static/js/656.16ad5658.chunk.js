"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[656],{7656:(e,n,o)=>{o.r(n),o.d(n,{default:()=>Z});var r=o(9860),t=o(697),a=o(890),i=o(8308),s=o(43),l=o(1686),c=o(5705),u=(o(2791),o(677)),d=o(6789),m=o(4420),p=o(1087),h=o(5218),x=o(3329);const Z=()=>{const[e,{isLoading:n}]=(0,u.YA)(),o=(0,m.I0)();return(0,x.jsxs)(t.Z,{m:1,children:[(0,x.jsx)(a.Z,{variant:"h4",component:"h1",sx:{marginTop:"16px",color:"green"},children:"Login"}),(0,x.jsx)(c.J9,{initialValues:{email:"",password:""},validate:e=>{const n={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Invalid email address"):n.email="Required",n},onSubmit:n=>{(async n=>{try{const{data:r}=await e(n),t={name:r.user.name,token:r.token,isLoggedIn:!0};o((0,d.D)(t))}catch(r){h.ZP.error("The email or password is incorrect!")}})(n)},children:e=>{let{values:o,handleChange:a,handleBlur:s,handleSubmit:c}=e;return(0,x.jsxs)("form",{onSubmit:c,children:[(0,x.jsx)(i.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Email",type:"email",name:"email",onChange:a,onBlur:s,value:o.email,color:"success"}),(0,x.jsx)(i.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Password",type:"password",name:"password",onChange:a,onBlur:s,value:o.password,color:"success"}),(0,x.jsx)(t.Z,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"16px"},children:(0,x.jsx)(r.Z,{variant:"contained",type:"submit",color:"success",loading:n,loadingPosition:"end",endIcon:(0,x.jsx)(l.Z,{}),children:"Login"})})]})}}),(0,x.jsxs)(t.Z,{sx:{textAlign:"center",marginTop:"24px",color:"green"},children:[(0,x.jsx)(a.Z,{variant:"h6",children:"Don't have an acount?"}),(0,x.jsx)(s.Z,{component:p.OL,to:"/register",sx:{color:"green"},children:"Registration here"})]})]})}},1686:(e,n,o)=>{var r=o(4836);n.Z=void 0;var t=r(o(5649)),a=o(3329),i=(0,t.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.Z=i},43:(e,n,o)=>{o.d(n,{Z:()=>C});var r=o(3366),t=o(7462),a=o(2791),i=o(3733),s=o(4419),l=o(4036),c=o(6934),u=o(1402),d=o(3031),m=o(2071),p=o(890),h=o(5878),x=o(1217);function Z(e){return(0,x.Z)("MuiLink",e)}const v=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=o(8529),g=o(2065);const y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=e=>{let{theme:n,ownerState:o}=e;const r=(e=>y[e]||e)(o.color),t=(0,b.DW)(n,"palette.".concat(r),!1)||o.color,a=(0,b.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,g.Fq)(t,.4)};var w=o(3329);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n["underline".concat((0,l.Z)(o.underline))],"button"===o.component&&n.button]}})((e=>{let{theme:n,ownerState:o}=e;return(0,t.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,t.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:f({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(v.focusVisible)]:{outline:"auto"}})})),C=a.forwardRef((function(e,n){const o=(0,u.Z)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:h="a",onBlur:x,onFocus:v,TypographyClasses:b,underline:g="always",variant:f="inherit",sx:C}=o,S=(0,r.Z)(o,j),{isFocusVisibleRef:A,onBlur:D,onFocus:L,ref:B}=(0,d.Z)(),[R,T]=a.useState(!1),V=(0,m.Z)(n,B),F=(0,t.Z)({},o,{color:p,component:h,focusVisible:R,underline:g,variant:f}),M=(e=>{const{classes:n,component:o,focusVisible:r,underline:t}=e,a={root:["root","underline".concat((0,l.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,s.Z)(a,Z,n)})(F);return(0,w.jsx)(k,(0,t.Z)({color:p,className:(0,i.Z)(M.root,c),classes:b,component:h,onBlur:e=>{D(e),!1===A.current&&T(!1),x&&x(e)},onFocus:e=>{L(e),!0===A.current&&T(!0),v&&v(e)},ref:V,ownerState:F,variant:f,sx:[...Object.keys(y).includes(p)?[]:[{color:p}],...Array.isArray(C)?C:[C]]},S))}))}}]);
//# sourceMappingURL=656.16ad5658.chunk.js.map