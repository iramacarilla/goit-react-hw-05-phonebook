(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={contactList:"ContactList_contactList__1KQMM",contactData:"ContactList_contactData__3J4iC",enter:"ContactList_enter__X_Pjb",enterActive:"ContactList_enterActive__2bgKv",exit:"ContactList_exit__1v8an",exitActive:"ContactList_exitActive__1pVlQ"}},17:function(t,e,n){t.exports={contact:"ContactEditorElement_contact__1ZGRs",form:"ContactEditorElement_form__512lm"}},18:function(t,e,n){t.exports={appear:"ContactEditor_appear__1LDmw",appearActive:"ContactEditor_appearActive__epxpc"}},19:function(t,e,n){t.exports={notification:"Notification_notification__J51AU",enter:"Notification_enter__2nLPt",enterActive:"Notification_enterActive__iI3sW",exit:"Notification_exit__1vUki",exitActive:"Notification_exitActive__Qeaen"}},20:function(t,e,n){t.exports={search:"Filter_search__1bo2U"}},21:function(t,e,n){t.exports={enter:"App_enter__3RlQg",enterActive:"App_enterActive__wKHjl",exit:"App_exit__WW_aw",exitActive:"App_exitActive__djMPn"}},28:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n(5),o=n.n(i),r=(n(28),n(2)),s=n(12),u=n(7),j=n(34),l=n(16),b=n.n(l),m=n(35),_=n(33),O=function(t){var e=t.idx,n=t.number,a=t.name,i=t.id,o=t.onDelete;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{children:[e+1,".  Name: ",a]}),Object(c.jsxs)("p",{children:["  ",n]}),Object(c.jsx)("button",{type:"button",onClick:o,"data-id":i,children:"Delete"})]})},x=function(t){var e=t.contacts,n=t.onDelete;return Object(c.jsx)(m.a,{component:"ul",className:b.a.contactData,children:e.map((function(t,e){var a=t.id,i=t.name,o=t.number;return Object(c.jsx)(_.a,{timeout:1e3,classNames:b.a,children:Object(c.jsx)(O,{id:a,name:i,number:o,idx:e,onDelete:n})},a)}))})},d=n(20),p=n.n(d);function f(t){var e=t.value,n=t.onChange;return Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:p.a.search,type:"text",value:e,placeholder:"Search by name",onChange:n})})}var h=n(9),v=n(17),g=n.n(v),C=function(t){var e=t.name,n=t.number,a=t.onChange,i=t.onHandelChange;return Object(c.jsx)("div",{className:g.a.contact,children:Object(c.jsxs)("form",{className:g.a.form,onSubmit:a,children:[Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Name",onChange:i})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"tel",name:"number",value:n,placeholder:"Number",onChange:i})}),Object(c.jsx)("button",{type:"submit",children:"Add contact "})]})})},A=function(){return Object(c.jsx)("h2",{className:"title",children:"PHONEBOOK"})},N=n(18),E=n.n(N),L={name:"",number:""},S=function(t){var e=t.onAddForm,n=Object(a.useState)(Object(r.a)({},L)),i=Object(u.a)(n,2),o=i[0],s=i[1];return Object(c.jsxs)("div",{className:E.a.phoneBook,children:[Object(c.jsx)(_.a,{in:!0,appear:!0,classNames:E.a,timeout:500,unmountOnExit:!0,children:Object(c.jsx)(A,{})}),Object(c.jsx)(C,{name:o.name,number:o.number,onChange:function(t){t.preventDefault(),e({name:o.name,number:o.number}),s(Object(r.a)({},L))},onHandelChange:function(t){var e=t.target.name;s(Object(r.a)(Object(r.a)({},o),{},Object(h.a)({},e,t.target.value)))}})]})},D=n(21),w=n.n(D),y=n(19),k=n.n(y),J=function(t){var e=t.isVisible;return Object(c.jsx)(_.a,{in:e,timeout:250,classNames:k.a,unmountOnExit:!0,children:Object(c.jsx)("div",{className:k.a.notification,children:"Contact already exists"})})},I=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),b=l[0],m=l[1],O=Object(a.useState)(!1),d=Object(u.a)(O,2),p=d[0],h=d[1];Object(a.useEffect)((function(){localStorage.getItem("contacts")&&i(JSON.parse(localStorage.getItem("contacts")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(J,{isVisible:p}),Object(c.jsx)(S,{onAddForm:function(t){n.map((function(t){return t.name})).includes(t.name)?(setTimeout((function(){return h(!0)}),500),setTimeout((function(){return h(!1)}),2e3)):i([].concat(Object(s.a)(n),[Object(r.a)({id:Object(j.a)()},t)]))}}),Object(c.jsx)(_.a,{in:n.length>1,timeout:300,classNames:w.a,unmountOnExit:!0,children:Object(c.jsx)(f,{value:b,onChange:function(t){m(t.target.value)}})}),Object(c.jsx)(x,{contacts:Object(s.a)(n.filter((function(t){return t.name.toLowerCase().includes(b.toLowerCase())}))),onDelete:function(t){var e=t.target.dataset.id;i(Object(s.a)(n.filter((function(t){return t.id!==e}))))}})]})};o.a.render(Object(c.jsx)(I,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c28cd5a9.chunk.js.map