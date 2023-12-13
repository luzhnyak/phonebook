"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[560],{9560:(e,n,r)=>{r.r(n),r.d(n,{default:()=>Y});var a=r(4420),o=r(8016),l=r(677),t=r(4852),i=r(653),s=r(9900),c=r(3044),d=r(7247),h=r(9860),x=r(501),m=r(43),u=r(2129),j=r(2716),p=r(6314),g=r(4721),v=r(3329);const Z=e=>{let{id:n,name:r,phone:a,email:o,avatarURL:Z}=e;const[b,f]=(0,l.Nt)();return(0,v.jsxs)(t.ZP,{secondaryAction:(0,v.jsx)(h.Z,{"aria-label":"delete",onClick:()=>b(n),title:"Delete ".concat(r),loading:f.isLoading,variant:"outlined",color:"success",children:(0,v.jsx)(d.Z,{})}),sx:{borderBottom:"1px solid lightGreen"},children:[(0,v.jsx)(i.Z,{children:(0,v.jsx)(c.Z,{sx:{backgroundColor:"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))},src:Z,children:(0,v.jsx)(x.Z,{})})}),(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(s.Z,{primary:r}),(0,v.jsxs)(p.Z,{direction:{xs:"column",sm:"row"},spacing:{xs:0,sm:2},divider:(0,v.jsx)(g.Z,{orientation:"vertical",flexItem:!0}),children:[(0,v.jsx)(m.Z,{href:"tel:"+a,underline:"hover",sx:{color:"green"},children:(0,v.jsxs)(p.Z,{direction:"row",spacing:1,children:[(0,v.jsx)(j.Z,{fontSize:"small"}),(0,v.jsx)("span",{children:a})]})}),o&&(0,v.jsx)(m.Z,{href:"mailto:"+o,underline:"hover",sx:{color:"green"},children:(0,v.jsxs)(p.Z,{direction:"row",spacing:1,children:[(0,v.jsx)(u.Z,{fontSize:"small"}),(0,v.jsx)("span",{children:o})]})})]})]})]})};var b=r(6934),f=r(493),C=r(9643),y=r(697),k=r(8308);const w=()=>{const e=(0,a.I0)(),n=(0,a.v9)(o.zK);return(0,v.jsx)(y.Z,{m:1,children:(0,v.jsx)(k.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Filter",type:"text",name:"filter",placeholder:"Find contacts by name",value:n,onChange:n=>e((0,C.T)(n.target.value)),color:"success"})})};var L=r(1621),P=r(2791),S=r(5218),A=r(890);const I=()=>(0,v.jsx)(y.Z,{sx:{textAlign:"center",marginTop:"24px",color:"green"},children:(0,v.jsx)(A.Z,{variant:"h6",children:"The contact list is empty! "})}),B=()=>{const{data:e,isLoading:n,error:r}=(0,l.wY)(null),t=((e,n)=>null===e||void 0===e?void 0:e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase()))))(e,(0,a.v9)(o.zK));(0,P.useEffect)((()=>{r&&S.ZP.error("Error contacts")}),[r]);const i=(0,b.ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.paper}}));return(0,v.jsxs)(v.Fragment,{children:[n&&(0,v.jsx)(L.a,{}),!n&&(null===e||void 0===e?void 0:e.length)>1&&(0,v.jsx)(w,{}),!n&&(null===e||void 0===e?void 0:e.length)<1&&(0,v.jsx)(I,{}),!n&&e&&(0,v.jsx)(i,{children:(0,v.jsx)(f.Z,{component:"ul",children:null===t||void 0===t?void 0:t.map((e=>(0,v.jsx)(Z,{id:e._id,name:e.name,phone:e.phone,email:e.email,avatarURL:e.avatarURL},e._id)))})})]})};var z=r(5289),F=r(5661),T=r(3400),E=r(9157),R=r(9823),W=r(8763),q=r(9508),M=r(5705);const N=()=>{const{data:e}=(0,l.wY)(null),[n,{isLoading:r}]=(0,l.Tn)(),o=(0,a.I0)(),t=r=>{const{name:a,phone:l,email:t}=r;if((n=>e.some((e=>e.name===n)))(a))S.ZP.error("".concat(a," is already in contacts."));else try{n({name:a,phone:l,email:t}),o((0,q.i)(!1))}catch(i){S.ZP.error("Some error.")}};return(0,v.jsx)(y.Z,{m:1,children:(0,v.jsx)(M.J9,{initialValues:{name:"",phone:"",email:""},onSubmit:e=>{t(e)},children:e=>{let{values:n,handleChange:a,handleBlur:o,handleSubmit:l}=e;return(0,v.jsxs)("form",{onSubmit:l,children:[(0,v.jsx)(k.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:a,onBlur:o,value:n.name||""}),(0,v.jsx)(k.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Phone",type:"text",name:"phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:a,onBlur:o,value:n.phone||""}),(0,v.jsx)(k.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Email",type:"text",name:"email",title:"Email",required:!0,onChange:a,onBlur:o,value:n.email||""}),(0,v.jsx)(y.Z,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"16px"},children:(0,v.jsx)(h.Z,{variant:"contained",type:"submit",color:"success",loading:r,loadingPosition:"end",endIcon:(0,v.jsx)(W.Z,{}),children:"Add contact"})})]})}})})},U=()=>{const e=(0,a.v9)(o.Qe),n=(0,a.I0)(),r=()=>{n((0,q.i)(!1))};return(0,v.jsx)("div",{children:(0,v.jsxs)(z.Z,{open:e,onClose:r,children:[(0,v.jsx)(F.Z,{children:"Add contact"}),(0,v.jsx)(T.Z,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,v.jsx)(R.Z,{})}),(0,v.jsx)(E.Z,{children:(0,v.jsx)(N,{})})]})})};var G=r(9877),J=r(2419);const K=()=>{const e=(0,a.I0)();return(0,v.jsx)(G.Z,{sx:{position:"absolute",display:{xs:"flex",md:"none"},bottom:16,right:16,color:"common.white",bgcolor:"green","&:hover":{bgcolor:"darkGreen"}},"aria-label":"Add contacts",color:"success",onClick:()=>{e((0,q.i)(!0))},children:(0,v.jsx)(J.Z,{})})},Y=()=>{const{isLoggedIn:e}=(0,a.v9)(o.PR);return(0,v.jsxs)(v.Fragment,{children:[e&&(0,v.jsx)(B,{}),(0,v.jsx)(U,{}),(0,v.jsx)(K,{})]})}}}]);
//# sourceMappingURL=560.047e95ce.chunk.js.map