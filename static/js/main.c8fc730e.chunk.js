(this["webpackJsonpshowwcase-education"]=this["webpackJsonpshowwcase-education"]||[]).push([[0],{54:function(e){e.exports=JSON.parse("{}")},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n.n(c),r=n(10),o=n.n(r),s=n(7),d=n(13),u=n(5),l=n(2),j=n(3),b=n(4);function O(){var e=Object(j.a)(["\n  display: flex;\n"]);return O=function(){return e},e}function p(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return e},e}function m(){var e=Object(j.a)(["\n  display: inline;\n  margin: 10px 20px 10px 0;\n  width: 100px;\n  height: 100px;\n"]);return m=function(){return e},e}var h=b.a.img(m()),x=b.a.div(p()),f=b.a.div(O()),g=function(e){return Object(a.jsxs)(f,{children:[Object(a.jsx)(h,{src:"ShowwcasLogo100x100.png"}),e.loggedIn?Object(a.jsxs)(x,{children:[Object(a.jsx)("h1",{children:e.name}),Object(a.jsxs)("h4",{children:["@",e.name.toLowerCase().split(" ").join("")]}),Object(a.jsxs)("p",{children:[e.name,"'s Education Showwcase"]})]}):Object(a.jsxs)(x,{children:[Object(a.jsx)("h1",{children:"Welcome"}),Object(a.jsx)("p",{children:"Welcome to your Education Showwcase. Please enter your name below to begin."})]})]})},v=function(e){return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.inputName(e.name)},children:[Object(a.jsx)("label",{htmlFor:"nameField",children:"Name: "}),Object(a.jsx)("input",{type:"text",name:"nameField",value:e.name,placeholder:"Name",onChange:function(t){e.setName(t.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Let's Go!"})]})},y=function(e){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("ul",{children:e.educations.map((function(t){return Object(a.jsx)("li",{className:"ed-list-item",onClick:function(){return e.setEducation(t)},children:t.name},t.id)}))})})},E=function(e){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.education.name}),Object(a.jsxs)("p",{children:[e.education.startYear," - ",e.education.endYear]}),Object(a.jsxs)("p",{children:[e.education.degree,Object(a.jsx)(a.Fragment,{children:" "}),e.education.field,e.education.grade?Object(a.jsxs)("span",{children:[" (",e.education.grade,")"]}):Object(a.jsx)(a.Fragment,{})]}),Object(a.jsx)("p",{children:e.education.description}),Object(a.jsx)("button",{onClick:e.editEducation,children:"Edit"})]})})},w=n(19),N=n.n(w),C=n(9),S=n(30);n(54);function A(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: justify;\n"]);return A=function(){return e},e}function F(){var e=Object(j.a)(["\n  display: block;\n  margin: 2px 2px 2px 0;\n"]);return F=function(){return e},e}function I(){var e=Object(j.a)(["\n  width: 100%;\n"]);return I=function(){return e},e}function k(){var e=Object(j.a)(["\n  width: 95%;\n  margin: auto;\n  padding: 5px;\n  min-height: 200px;\n  min-width: 300px;\n"]);return k=function(){return e},e}var D=b.a.textarea(k()),_=b.a.div(I()),Y=b.a.div(F()),R=b.a.form(A()),M=function(e){var t=Object(c.useState)(e.education.id||e.counter),n=Object(l.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(e.education.name||""),d=Object(l.a)(s,2),u=d[0],j=d[1],b=Object(c.useState)(e.education.startYear||2020),O=Object(l.a)(b,2),p=O[0],m=O[1],h=Object(c.useState)(e.education.endYear||2021),x=Object(l.a)(h,2),f=x[0],g=x[1],v=Object(c.useState)(e.education.degree||""),y=Object(l.a)(v,2),E=y[0],w=y[1],N=Object(c.useState)(e.education.field||""),A=Object(l.a)(N,2),F=A[0],I=A[1],k=Object(c.useState)(e.education.grade||""),M=Object(l.a)(k,2),U=M[0],T=M[1],P=Object(c.useState)(e.education.description||""),q=Object(l.a)(P,2),L=q[0],z=q[1],B=Object(c.useState)(e.education.subjects||[]),V=Object(l.a)(B,2),G=V[0],J=V[1],W=Object(c.useState)([]),H=Object(l.a)(W,2),K=H[0],Q=H[1];Object(c.useEffect)((function(){fetch("world_universities_and_domains.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){Q(e.map((function(e){return e.name})))}))}),[]);var X=function(e){switch(e.target.name){case"university":j(e.target.value);break;case"startYear":m(parseInt(e.target.value));break;case"endYear":g(parseInt(e.target.value));break;case"degree":w(e.target.value);break;case"field":I(e.target.value);break;case"grade":T(e.target.value);break;case"subjects":J([].concat(Object(C.a)(G),[e.target.value]));break;default:console.log(e.target)}};return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(_,{children:Object(a.jsxs)(R,{onSubmit:function(t){t.preventDefault(),e.isNew&&o(e.counter);var n={id:r,name:u,startYear:p,endYear:f,degree:E,field:F,grade:U,description:L,subjects:G};e.isNew?e.addEducation(n):e.updateEducation(n),e.closeModal()},children:[Object(a.jsx)(Y,{children:e.education.name}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"university",className:"nameLabel",children:"Institution Name: "}),Object(a.jsx)(S.a,{name:"university",value:u,options:K,className:"select-css",maxVisible:10,allowCustomValues:!0,onOptionSelected:function(e){void 0!=e&&j(null===e||void 0===e?void 0:e.toString())},customClasses:{results:"list-group",listItem:"list-group-item"}})]}),Object(a.jsx)(Y,{children:Object(a.jsx)("span",{className:"spacer"})}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"startYear",children:"Year you started: "}),Object(a.jsx)("input",{type:"text",name:"startYear",value:p,onChange:X,size:4})]}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"endYear",children:"Year you finished or anticipate finishing: "}),Object(a.jsx)("input",{type:"text",name:"endYear",value:f,onChange:X,size:4})]}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"degree",children:"Degree (B.A., M.S., Ph.D., etc): "}),Object(a.jsx)("input",{type:"text",name:"degree",value:E,onChange:X,size:10})]}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"field",children:"Field of study: "}),Object(a.jsx)("input",{type:"text",name:"field",value:F,onChange:X,size:50})]}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"grade",children:"Grade/GPA: "}),Object(a.jsx)("input",{type:"text",name:"grade",value:U,onChange:X,size:5})]}),Object(a.jsxs)(Y,{children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(a.jsx)(D,{name:"description",value:L,onChange:function(e){z(e.target.value)}})]}),Object(a.jsxs)(Y,{children:[Object(a.jsx)(a.Fragment,{children:" "}),e.isNew?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{type:"submit",children:"Add"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"submit",children:"Save"})," ",Object(a.jsx)("button",{onClick:function(){return e.removeEducation(r)},children:"Delete"})]}),Object(a.jsx)(a.Fragment,{children:" "}),Object(a.jsx)("button",{onClick:function(){return e.closeModal()},children:"Cancel"})]})]})})})};N.a.setAppElement("#root");var U=function(e){return Object(a.jsx)(N.a,{isOpen:e.isOpen,style:{overlay:{background:"white",width:"50%",border:"1px solid black",margin:"auto"},content:{padding:"3vh 3vw"}},contentLabel:"Add Education",portalClassName:"ReactModalPortal",overlayClassName:"ReactModal__Overlay",id:"ed-form-modal",className:"ReactModal__Content",bodyOpenClassName:"ReactModal__Body--open",htmlOpenClassName:"ReactModal__Html--open",ariaHideApp:!0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!1,shouldCloseOnEsc:!0,onRequestClose:e.closeModal,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body},children:Object(a.jsx)(M,Object(u.a)({},e))})},T={name:"",educations:[{id:0,name:"Sample University",degree:"B.S.",field:"Underwater Basket-Weaving",startYear:2015,endYear:2019,grade:"3.82",description:"A rigorous course of study that proved I have the grit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],loggedIn:!1,error:""},P={id:-1,name:"",degree:"",field:"",startYear:2020,endYear:2021,grade:"",description:""};function q(){var e=Object(j.a)(["\n  width: 75%;\n  height: 100%;\n  padding: 10px;\n"]);return q=function(){return e},e}function L(){var e=Object(j.a)(["\n  height: 100%;\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n  margin-top: 25px;\n"]);return L=function(){return e},e}function z(){var e=Object(j.a)(["\n  display: flex;\n  width: 100%;\n"]);return z=function(){return e},e}function B(){var e=Object(j.a)(["\n  margin: auto;\n  width: 100%;\n  padding: 10px;\n"]);return B=function(){return e},e}function V(){var e=Object(j.a)(["\n  justify-content: center;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n"]);return V=function(){return e},e}var G=b.a.div(V()),J=b.a.div(B()),W=b.a.div(z()),H=b.a.div(L()),K=b.a.div(q()),Q=Object(d.b)((function(e){return{name:e.userReducer.name,educations:e.userReducer.educations,loggedIn:e.userReducer.loggedIn,error:e.userReducer.error}}),{inputName:function(e){return{type:"INPUT_NAME",payload:e}},addEducation:function(e){return{type:"ADD_EDUCATION",payload:e}},removeEducation:function(e){return{type:"REMOVE_EDUCATION",payload:e}},updateEducation:function(e){return{type:"UPDATE_EDUCATION",payload:e}}})((function(e){var t=Object(c.useState)(e.name),n=Object(l.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(!1),s=Object(l.a)(o,2),d=s[0],j=s[1],b=Object(c.useState)("page"),O=Object(l.a)(b,2),p=O[0],m=O[1],h=Object(c.useState)(P),x=Object(l.a)(h,2),f=x[0],w=x[1],N=Object(c.useState)(!0),C=Object(l.a)(N,2),S=C[0],A=C[1],F=Object(c.useState)(!1),I=Object(l.a)(F,2),k=I[0],D=I[1],_=Object(c.useState)(0),Y=Object(l.a)(_,2),R=Y[0],M=Y[1],T=function(){A(!1),j(!0),m("page faded")};return Object(a.jsx)("div",{className:p,children:Object(a.jsxs)(G,{className:"boxes",children:[Object(a.jsx)(J,{className:"box",children:Object(a.jsx)(g,{name:e.name,loggedIn:e.loggedIn})}),e.loggedIn?Object(a.jsxs)(W,{children:[Object(a.jsxs)(H,{children:[Object(a.jsx)("button",{onClick:function(){M(R+1),A(!0),w(Object(u.a)(Object(u.a)({},P),{},{id:R})),j(!0),m("page faded")},children:"Add Education"}),Object(a.jsx)(y,{educations:e.educations,setEducation:function(e){w(e),D(!0)},editEducation:T})]}),Object(a.jsx)(K,{children:k?Object(a.jsx)(E,{education:f,editEducation:T}):Object(a.jsx)(a.Fragment,{})})]}):Object(a.jsx)(J,{className:"box",children:Object(a.jsx)(v,{name:i,setName:r,inputName:e.inputName})}),Object(a.jsx)(J,{children:Object(a.jsx)(U,{isOpen:d,isNew:S,counter:R,closeModal:function(){j(!1),M(R+1),m("page"),D(!1)},education:f,addEducation:e.addEducation,setEducation:w,updateEducation:e.updateEducation,removeEducation:function(t){j(!1),m("page"),e.removeEducation(f.id),D(!1)}})})]})})})),X=Object(s.b)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e,t),t.type){case"INPUT_NAME":return Object(u.a)(Object(u.a)({},e),{},{name:t.payload,loggedIn:!0});case"ADD_EDUCATION":return Object(u.a)(Object(u.a)({},e),{},{educations:[].concat(Object(C.a)(e.educations),[t.payload])});case"UPDATE_EDUCATION":return Object(u.a)(Object(u.a)({},e),{},{educations:Object(C.a)(e.educations.map((function(e){return e.id==t.payload.id?t.payload:e})))});case"REMOVE_EDUCATION":return Object(u.a)(Object(u.a)({},e),{},{educations:Object(C.a)(e.educations.filter((function(e){return e.id!==t.payload})))});default:return e}}}),Z=(n(55),Object(s.c)(X)),$=document.getElementById("root");o.a.render(Object(a.jsx)(d.a,{store:Z,children:Object(a.jsx)(Q,{})}),$)}},[[56,1,2]]]);
//# sourceMappingURL=main.c8fc730e.chunk.js.map