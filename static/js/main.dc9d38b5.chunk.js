(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{26:function(e,t,n){e.exports={common:"ContactsAlphabet_common__3ciW0"}},28:function(e,t,n){e.exports={container:"ContactsContainer_container__3Vt1i"}},29:function(e,t,n){e.exports={contact_button:"AddContact_contact_button__3f77F"}},35:function(e,t,n){},4:function(e,t,n){e.exports={edit_container:"AddContactForm_edit_container__1OPf6",modal:"AddContactForm_modal__1B_Mg",form:"AddContactForm_form__19h-U",submit:"AddContactForm_submit__1Ovw-",title:"AddContactForm_title__2HdNa",discard:"AddContactForm_discard__bp3Zv"}},48:function(e,t,n){"use strict";n.r(t);var a=n(25),c=n.n(a),i=(n(35),n(22)),r=n(2),s=n(10),d=n.n(s),o=n(20),l=n(3),j=n(1),u=n(6),b=n.n(u),h=n(26),p=n.n(h),m=n(0),O=function(e){return Object(m.jsx)("div",{className:p.a.common,children:e.initials})},x=n(7),f=n.n(x),y=function(e){var t=Object(j.createRef)();return Object(j.useEffect)((function(){return setTimeout((function(){t.current.previousSibling.scrollIntoView({behavior:"smooth"})}),500)}),[t]),Object(m.jsx)("div",{ref:t,className:f.a.table_container,children:Object(m.jsx)("table",{className:f.a.table,children:Object(m.jsxs)("tbody",{children:[Object(m.jsx)("tr",{className:f.a.heading,children:Object(m.jsx)("td",{colSpan:2,children:"Basic Details"})}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Username:"}),Object(m.jsx)("td",{children:e.data.username})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Email:"}),Object(m.jsx)("td",{children:e.data.email})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Phone:"}),Object(m.jsx)("td",{children:e.data.phone})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Website:"}),Object(m.jsx)("td",{children:e.data.website})]}),Object(m.jsx)("tr",{className:f.a.heading,children:Object(m.jsx)("td",{colSpan:2,children:"Address"})}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Suite:"}),Object(m.jsx)("td",{children:e.data.address.suite})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Street:"}),Object(m.jsx)("td",{children:e.data.address.street})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"City:"}),Object(m.jsx)("td",{children:e.data.address.city})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"ZipCode:"}),Object(m.jsx)("td",{children:e.data.address.zipcode})]}),Object(m.jsx)("tr",{className:f.a.heading,children:Object(m.jsx)("td",{colSpan:2,children:"Company Details"})}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Name:"}),Object(m.jsx)("td",{children:e.data.company.name})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Catch-Phrase:"}),Object(m.jsx)("td",{children:e.data.company.catchPhrase})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"BS:"}),Object(m.jsx)("td",{children:e.data.company.bs})]})]})})})},v=n(30),_=void 0,C=function(e){var t=e.data.name.split(" ").reduce((function(e,t){return e+t.charAt(0)}),"");return Object(m.jsxs)(m.Fragment,{children:[e.start&&Object(m.jsx)(O,{initials:e.data.name.charAt(0)}),Object(m.jsxs)("div",{id:"user".concat(e.data.id),className:"".concat(b.a.common," ").concat(e.expandFor===e.data.id?b.a.selected:""),onClick:e.onExpand.bind(_,e.data.id),children:[Object(m.jsx)("div",{className:b.a.circle,children:Object(m.jsx)("span",{children:t})}),Object(m.jsxs)("div",{className:b.a.names,children:[Object(m.jsx)("h3",{children:e.data.name}),Object(m.jsxs)(v.a,{children:[Object(m.jsx)("h6",{children:e.data.email}),Object(m.jsx)("h6",{children:e.data.username}),Object(m.jsx)("h6",{children:e.data.phone}),Object(m.jsx)("h6",{children:e.data.website})]})]}),Object(m.jsxs)("p",{className:b.a.actionspace,children:[Object(m.jsx)("span",{children:Object(m.jsx)("i",{className:"fas fa-edit",onClick:e.onEdit.bind(_,e.data.id)})}),Object(m.jsxs)("span",{children:[" \xa0\xa0 ",Object(m.jsx)("i",{className:"fas fa-trash-alt",onClick:e.onDelete.bind(_,e.data.id)})]})]})]}),e.expandFor===e.data.id&&Object(m.jsx)(y,{data:e.data})]})},g=n(28),w=n.n(g),E=function(e){var t=e.data.map((function(t,n){var a=e.data.findIndex((function(e){return e.name.charAt(0)===t.name.charAt(0)}));return Object(m.jsx)(C,{data:t,start:a===n,onDelete:e.onDelete,onEdit:e.onEdit,onExpand:e.onExpand,expandFor:e.expandFor},t.id)}));return Object(m.jsx)("div",{className:w.a.container,children:t})},N=function(e,t){return t.filter((function(t){return t.id!==e}))},S=n(5),V=n.n(S),A=void 0,P=function(e){var t=Object(j.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(r.a)({},e.user);var s=Object(j.useReducer)((function(e,t){if("name"===t.type){var n=Object(r.a)({},e);return n.name=t.item,n}if("email"===t.type){var a=Object(r.a)({},e);return a.email=t.item,a}if("phone"===t.type){var c=Object(r.a)({},e);return c.phone=t.item,c}if("company"===t.type){var s=Object(r.a)({},e);return s.company.name=t.item,s}if("city"===t.type){var d=Object(r.a)({},e);return d.address.city=t.item,d}if("street"===t.type){var o=Object(r.a)({},e);return o.address.street=t.item,o}if("zipcode"===t.type){var l=Object(r.a)({},e);return l.address.zipcode=t.item,l}return i}),i),d=Object(l.a)(s,2),o=d[0],u=d[1];function b(e,t){u({type:e,item:t.target.value})}return Object(m.jsx)("div",{className:V.a.edit_container,children:Object(m.jsxs)("div",{className:V.a.modal,children:[Object(m.jsx)("br",{}),Object(m.jsxs)("form",{className:V.a.form,onSubmit:function(t){t.preventDefault(),e.submit(o)},children:[Object(m.jsx)("h5",{children:"Name:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.name,onChange:b.bind(A,"name")}),Object(m.jsx)("h5",{children:"Email:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.email,onChange:b.bind(A,"email")}),Object(m.jsx)("h5",{children:"Phone:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.phone,onChange:b.bind(A,"phone")}),Object(m.jsx)("h5",{children:"Company:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.company.name,onChange:b.bind(A,"company")}),Object(m.jsxs)("h5",{className:V.a.title,onClick:function(){c(!a)},children:["Address ",a?"\ud83d\udd3c":"\ud83d\udd3d"]}),a&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"City:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.address.city,onChange:b.bind(A,"city")}),Object(m.jsx)("h5",{children:"Street:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.address.street,onChange:b.bind(A,"street")}),Object(m.jsx)("h5",{children:"ZipCode:"}),Object(m.jsx)("input",{type:"text",defaultValue:o.address.zipcode,onChange:b.bind(A,"zipcode")})]}),Object(m.jsx)("p",{className:V.a.submit,children:Object(m.jsx)("button",{type:"submit",children:"Edit Changes"})}),Object(m.jsx)("p",{className:V.a.submit,children:Object(m.jsx)("button",{onClick:function(t,n){n.preventDefault(),e.submit(o,t)}.bind(A,!0),className:V.a.discard,children:"Discard Changes"})})]})]})})},D=n(29),F=n.n(D),k=n(4),R=n.n(k),U=void 0,T={address:{city:null,geo:{lat:"40.783386",lng:"-74.04485"},street:"Longview Avenue",suite:"Suite 879",zipcode:"10004"},company:{bs:"synergize scalable supply-chains",catchPhrase:"Proactive didactic contingency",name:"Sounds of Soul Records & Tapes"},email:"MildredLGarcia@dayrep.com",id:null,name:null,phone:"718-569-8769",username:"Frethe",website:"quiiri.com"},z=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:!(null===t.val||0===t.val.length)}:{value:"",isValid:!1}},I=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:null!==t.val||0!==t.val.length}:{value:"",isValid:!1}};function B(e,t){if("name"===t.type){var n=Object(r.a)({},e);return n.name=t.item,n}if("email"===t.type){var a=Object(r.a)({},e);return a.email=t.item,a}if("phone"===t.type){var c=Object(r.a)({},e);return c.phone=t.item,c}if("username"===t.type){var i=Object(r.a)({},e);return i.username=t.item,i}if("web"===t.type){var s=Object(r.a)({},e);return s.website=t.item,s}if("company"===t.type){var d=Object(r.a)({},e);return d.company.name=t.item,d}if("bs"===t.type){var o=Object(r.a)({},e);return o.company.bs=t.item,o}if("catch"===t.type){var l=Object(r.a)({},e);return l.company.catchPhrase=t.item,l}if("city"===t.type){var j=Object(r.a)({},e);return j.address.city=t.item,j}if("lat"===t.type){var u=Object(r.a)({},e);return u.address.geo.lat=t.item,u}if("lng"===t.type){var b=Object(r.a)({},e);return b.address.geo.lng=t.item,b}if("street"===t.type){var h=Object(r.a)({},e);return h.address.street=t.item,h}if("suite"===t.type){var p=Object(r.a)({},e);return p.address.suite=t.item,p}if("zipcode"===t.type){var m=Object(r.a)({},e);return m.address.zipcode=t.item,m}return T}var q=function(e){var t=Object(j.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(j.useState)(!1),r=Object(l.a)(i,2),s=r[0],d=r[1],o=Object(j.useReducer)(B,T),u=Object(l.a)(o,2),b=u[0],h=u[1],p=Object(j.useRef)(),O=Object(j.useRef)(),x=Object(j.useReducer)(z,{value:"",isValid:null}),f=Object(l.a)(x,2),y=f[0],v=f[1],_=Object(j.useReducer)(I,{value:"",isValid:null}),C=Object(l.a)(_,2),g=C[0],w=C[1];function E(e,t){"name"===e&&v({type:"USER_INPUT",val:t.target.value}),"city"===e&&w({type:"USER_INPUT",val:t.target.city}),h({type:e,item:t.target.value})}return Object(m.jsx)("div",{className:R.a.edit_container,children:Object(m.jsxs)("div",{className:R.a.modal,children:[Object(m.jsx)("br",{}),Object(m.jsxs)("form",{className:R.a.form,onSubmit:function(t){t.preventDefault(),y.isValid&&g.isValid?(e.onCancelForm(),e.submit(b)):y.isValid?(c(!0),setTimeout((function(){O.current.focus()}),1e3)):p.current.focus()},children:[Object(m.jsx)("h5",{children:"Name:"}),Object(m.jsx)("input",{ref:p,type:"text",placeholder:"Your Name",defaultValue:b.name,onChange:E.bind(U,"name")}),Object(m.jsx)("h5",{children:"Username:"}),Object(m.jsx)("input",{type:"text",placeholder:"Select Username",defaultValue:b.username,onChange:E.bind(U,"username")}),Object(m.jsx)("h5",{children:"Email:"}),Object(m.jsx)("input",{type:"text",placeholder:"Email",defaultValue:b.email,onChange:E.bind(U,"email")}),Object(m.jsx)("h5",{children:"Website:"}),Object(m.jsx)("input",{type:"text",placeholder:"Website",defaultValue:b.website,onChange:E.bind(U,"web")}),Object(m.jsx)("h5",{children:"Phone:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter Phone Number",defaultValue:b.phone,onChange:E.bind(U,"phone")}),Object(m.jsxs)("h5",{className:R.a.title,onClick:function(){c(!a),d(!1)},children:["Address ",a?"\ud83d\udd3c":"\ud83d\udd3d"]}),a&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Suite:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter Suite",defaultValue:b.address.suite,onChange:E.bind(U,"suite")}),Object(m.jsx)("h5",{children:"Street:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter Street",defaultValue:b.address.street,onChange:E.bind(U,"street")}),Object(m.jsx)("h5",{children:"City:"}),Object(m.jsx)("input",{ref:O,type:"text",placeholder:"Enter City",defaultValue:b.address.city,onChange:E.bind(U,"city"),required:!0}),Object(m.jsx)("h5",{children:"ZipCode:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter ZipCode",defaultValue:b.address.zipcode,onChange:E.bind(U,"zipcode")}),Object(m.jsx)("h5",{children:"Lat:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter coordinates",defaultValue:b.address.geo.lat,onChange:E.bind(U,"lat")}),Object(m.jsx)("h5",{children:"Long:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter coordinates",defaultValue:b.address.geo.lng,onChange:E.bind(U,"lng")})]}),Object(m.jsxs)("h5",{className:R.a.title,onClick:function(){d(!s),c(!1)},children:["Company ",s?"\ud83d\udd3c":"\ud83d\udd3d"]}),s&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Name:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter company name",defaultValue:b.company.name,onChange:E.bind(U,"company")}),Object(m.jsx)("h5",{children:"CatchPhrase:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter CatchPhrase",defaultValue:b.company.catchPhrase,onChange:E.bind(U,"catch")}),Object(m.jsx)("h5",{children:"BS:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter BS",defaultValue:b.company.bs,onChange:E.bind(U,"bs")})]}),Object(m.jsx)("p",{className:R.a.submit,children:Object(m.jsx)("button",{type:"submit",children:"Add Contact"})}),Object(m.jsx)("p",{className:R.a.submit,children:Object(m.jsx)("button",{type:"button",onClick:e.onCancelForm,className:R.a.discard,children:"Discard Changes"})})]})]})})},J=function(e){var t=Object(j.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],i=function(){c(!a)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:F.a.contact_button,children:Object(m.jsxs)("p",{children:[" ",Object(m.jsx)("button",{type:"button",onClick:i,children:"Add Contact \u2795"})]})}),a&&Object(m.jsx)(q,{onCancelForm:i,submit:e.submit})]})};var L=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(j.useState)(!1),s=Object(l.a)(c,2),u=s[0],b=s[1],h=Object(j.useState)({}),p=Object(l.a)(h,2),O=p[0],x=p[1],f=Object(j.useState)(-1),y=Object(l.a)(f,2),v=y[0],_=y[1],C=Object(j.useCallback)(Object(o.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,t.json();case 8:(n=e.sent).sort((function(e,t){return e.name<t.name?-1:1})),a(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]);function g(){return(g=Object(o.a)(d.a.mark((function e(t,c){var i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c&&c.stopPropagation(),i=n.filter((function(e){return e.id===t})),window.confirm("Are you sure you want to delete ".concat(i[0].name,"'s details?"))){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch("https://jsonplaceholder.typicode.com/posts/".concat(t),{method:"DELETE"});case 7:if(e.sent.ok){e.next=10;break}throw new Error("Something went wrong!");case 10:r=N(t,n),a(r),console.log(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}Object(j.useEffect)((function(){C()}),[C]);var w=function(e,t){t&&t.stopPropagation();var a=u;if(b(!a),!a){var c=n.filter((function(t){return t.id===e}));x(c[0])}};return Object(m.jsxs)(m.Fragment,{children:[u&&Object(m.jsx)(P,{user:O,submit:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!t&&window.confirm("Are you sure you want to apply changes?")?fetch("https://jsonplaceholder.typicode.com/posts/".concat(e.id),{method:"PUT",body:JSON.stringify(Object(r.a)({},e)),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){w();var t=n.findIndex((function(t){return t.id===e.id})),c=Object(i.a)(n);c[t]=e,c.sort((function(e,t){return e.name<t.name?-1:1})),a(c)})):w()}}),Object(m.jsx)(E,{data:n,onDelete:function(e,t){return g.apply(this,arguments)},onEdit:w,onExpand:function(e){_(v!==e?e:-1)},expandFor:v}),Object(m.jsx)(J,{submit:function(e){window.confirm("Are you sure you want to add '".concat(e.name,"' to the list?"))&&fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(Object(r.a)({},e)),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){var t=n.reduce((function(e,t){return e.id>t.id?e:t}));e.id=t.id+1;var c=Object(i.a)(n);c.push(e),c.sort((function(e,t){return e.name<t.name?-1:1})),a(c)}))}})]})};c.a.render(Object(m.jsx)(L,{}),document.getElementById("root"))},5:function(e,t,n){e.exports={edit_container:"EditDisplay_edit_container__3v1mM",modal:"EditDisplay_modal__1whwQ",form:"EditDisplay_form__yq96s",submit:"EditDisplay_submit__2AjrP",title:"EditDisplay_title__3qbyT",discard:"EditDisplay_discard__1W5IS"}},6:function(e,t,n){e.exports={common:"ContactsRow_common__1QjMS",selected:"ContactsRow_selected__30GiK",circle:"ContactsRow_circle__1IzPF",names:"ContactsRow_names__hEijh",actionspace:"ContactsRow_actionspace__20y5g"}},7:function(e,t,n){e.exports={table_container:"ContactsRowAllDetails_table_container__3-fie",dropdown:"ContactsRowAllDetails_dropdown__2rY2J",table:"ContactsRowAllDetails_table__3q1pU",heading:"ContactsRowAllDetails_heading__3vou8"}}},[[48,1,2]]]);
//# sourceMappingURL=main.dc9d38b5.chunk.js.map