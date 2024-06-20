"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[622],{6622:(e,n,r)=>{r.r(n),r.d(n,{default:()=>V});var a=r(3003),o=r(1645),l=r(6888),t=r(1322),i=r(3851),s=r(8734),c=r(8613),d=r(3471),h=r(9529),x=r(2177),m=r(8446),u=r(4789),j=r(9466),p=r(8911),A=r(9336),g=r(579);const v=e=>{let{id:n,name:r,phone:a,email:o,avatarURL:v}=e;const[b,f]=(0,l.ql)();return(0,g.jsxs)(t.Ay,{secondaryAction:(0,g.jsx)(h.A,{"aria-label":"delete",onClick:()=>{n&&b(+n)},title:"Delete ".concat(r),loading:f.isLoading,variant:"outlined",color:"success",children:(0,g.jsx)(d.A,{})}),sx:{borderBottom:"1px solid lightGreen"},children:[(0,g.jsx)(i.A,{children:(0,g.jsx)(c.A,{sx:{backgroundColor:"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))},src:v,children:(0,g.jsx)(x.A,{})})}),(0,g.jsxs)(p.A,{children:[(0,g.jsx)(s.A,{primary:r}),(0,g.jsxs)(p.A,{direction:{xs:"column",sm:"row"},spacing:{xs:0,sm:2},divider:(0,g.jsx)(A.A,{orientation:"vertical",flexItem:!0}),children:[(0,g.jsx)(m.A,{href:"tel:"+a,underline:"hover",sx:{color:"green"},children:(0,g.jsxs)(p.A,{direction:"row",spacing:1,children:[(0,g.jsx)(j.A,{fontSize:"small"}),(0,g.jsx)("span",{children:a})]})}),o&&(0,g.jsx)(m.A,{href:"mailto:"+o,underline:"hover",sx:{color:"green"},children:(0,g.jsxs)(p.A,{direction:"row",spacing:1,children:[(0,g.jsx)(u.A,{fontSize:"small"}),(0,g.jsx)("span",{children:o})]})})]})]})]})};var b=r(4535),f=r(5721),y=r(1295),C=r(6446),k=r(2097);const w=()=>{const e=(0,a.wA)(),n=(0,a.d4)(o.vD);return(0,g.jsx)(C.A,{m:1,children:(0,g.jsx)(k.A,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Filter",type:"text",name:"filter",placeholder:"Find contacts by name",value:n,onChange:n=>e((0,y.R)(n.target.value)),color:"success"})})};var L=r(8687),S=r(5043),B=r(3768),E=r(5865);const F=()=>(0,g.jsx)(C.A,{sx:{textAlign:"center",marginTop:"24px",color:"green"},children:(0,g.jsx)(E.A,{variant:"h6",children:"The contact list is empty! "})}),T=()=>{const{data:e,isLoading:n,error:r}=(0,l.TE)(null),t=((e,n)=>null===e||void 0===e?void 0:e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase()))))(e,(0,a.d4)(o.vD));(0,S.useEffect)((()=>{r&&B.Ay.error("Error contacts")}),[r]);const i=(0,b.Ay)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.paper}}));return(0,g.jsxs)(g.Fragment,{children:[n&&(0,g.jsx)(L.a,{}),!n&&(null===e||void 0===e?void 0:e.length)>1&&(0,g.jsx)(w,{}),!n&&(null===e||void 0===e?void 0:e.length)<1&&(0,g.jsx)(F,{}),!n&&e&&(0,g.jsx)(i,{children:(0,g.jsx)(f.A,{component:"ul",children:null===t||void 0===t?void 0:t.map((e=>(0,g.jsx)(v,{id:e._id,name:e.name,phone:e.phone,email:e.email,avatarURL:e.avatarURL},e._id)))})})]})};var q=r(35),z=r(6600),R=r(7392),W=r(5316),D=r(4802),I=r(4329),M=r(9018),N=r(3516);const P=()=>{const{data:e}=(0,l.TE)(null),[n,{isLoading:r}]=(0,l.ev)(),o=(0,a.wA)(),t=r=>{const{name:a,phone:l,email:t}=r;if((n=>e.some((e=>e.name===n)))(a))B.Ay.error("".concat(a," is already in contacts."));else try{n({name:a,phone:l,email:t}),o((0,M.a)(!1))}catch(i){B.Ay.error("Some error.")}};return(0,g.jsx)(C.A,{m:1,children:(0,g.jsx)(N.l1,{initialValues:{name:"",phone:"",email:""},onSubmit:e=>{t(e)},children:e=>{let{values:n,handleChange:a,handleBlur:o,handleSubmit:l}=e;return(0,g.jsxs)("form",{onSubmit:l,children:[(0,g.jsx)(k.A,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:a,onBlur:o,value:n.name||""}),(0,g.jsx)(k.A,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Phone",type:"text",name:"phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:a,onBlur:o,value:n.phone||""}),(0,g.jsx)(k.A,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Email",type:"text",name:"email",title:"Email",required:!0,onChange:a,onBlur:o,value:n.email||""}),(0,g.jsx)(C.A,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"16px"},children:(0,g.jsx)(h.A,{variant:"contained",type:"submit",color:"success",loading:r,loadingPosition:"end",endIcon:(0,g.jsx)(I.A,{}),children:"Add contact"})})]})}})})},U=()=>{const e=(0,a.d4)(o.kN),n=(0,a.wA)(),r=()=>{n((0,M.a)(!1))};return(0,g.jsx)("div",{children:(0,g.jsxs)(q.A,{open:e,onClose:r,children:[(0,g.jsx)(z.A,{children:"Add contact"}),(0,g.jsx)(R.A,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,g.jsx)(D.A,{})}),(0,g.jsx)(W.A,{children:(0,g.jsx)(P,{})})]})})};var G=r(4010),_=r(2505);const J=()=>{const e=(0,a.wA)();return(0,g.jsx)(G.A,{sx:{position:"absolute",display:{xs:"flex",md:"none"},bottom:16,right:16,color:"common.white",bgcolor:"green","&:hover":{bgcolor:"darkGreen"}},"aria-label":"Add contacts",color:"success",onClick:()=>{e((0,M.a)(!0))},children:(0,g.jsx)(_.A,{})})},V=()=>{const{isLoggedIn:e}=(0,a.d4)(o.wz);return(0,g.jsxs)(g.Fragment,{children:[e&&(0,g.jsx)(T,{}),(0,g.jsx)(U,{}),(0,g.jsx)(J,{})]})}}}]);
//# sourceMappingURL=622.bb9b5648.chunk.js.map