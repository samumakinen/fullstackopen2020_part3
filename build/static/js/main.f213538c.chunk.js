(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t(2),a=t.n(o),u=t(14),i=t.n(u),r=t(3),s=t(4),l=t.n(s),d="/api/persons",b=function(){return l.a.get(d)},j=function(e){return l.a.post(d,e)},f=function(e,n){return l.a.put("".concat(d,"/").concat(e),n)},h=function(e){return l.a.delete("".concat(d,"/").concat(e))},m=function(e){return Object(c.jsx)("ul",{children:e.persons.map((function(n){return Object(c.jsxs)("li",{children:[Object(c.jsx)("button",{onClick:function(){return e.onClick(n)},children:"delete"})," ",n.name," ",n.number]},n.id)}))})},O=function(e){return Object(c.jsxs)("div",{children:["Search name: ",Object(c.jsx)("input",{value:e.value,onChange:e.onChange})]})},p=function(e){return Object(c.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.nameValue,onChange:e.nameOnChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.numberValue,onChange:e.numberOnChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){return null===e.message?null:Object(c.jsx)("div",{className:e.class,children:e.message})},g=function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],u=Object(o.useState)(""),i=Object(r.a)(u,2),s=i[0],l=i[1],d=Object(o.useState)(""),g=Object(r.a)(d,2),v=g[0],w=g[1],C=Object(o.useState)(""),k=Object(r.a)(C,2),S=k[0],y=k[1],L=Object(o.useState)(),T=Object(r.a)(L,2),V=T[0],A=T[1],E=Object(o.useState)(),J=Object(r.a)(E,2),N=J[0],B=J[1];Object(o.useEffect)((function(){b().then((function(e){a(e.data)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(x,{message:V,class:N}),Object(c.jsx)(O,{keyvalue:S,onChange:function(e){y(e.target.value)}}),Object(c.jsx)("h2",{children:"Add a new contact"}),Object(c.jsx)(p,{onSubmit:function(e){e.preventDefault();var n={name:s,number:v},c=t.filter((function(e){return e.name.toLocaleLowerCase()===n.name.toLowerCase()}));c.length>0?window.confirm("".concat(s," is already added to phonebook, would you like to replace the old number ").concat(c[0].number," with the new one?"))&&f(c[0].id,n).then((function(e){a(t.map((function(n){return n.id!==e.data.id?n:e.data}))),l(""),w(""),A("Number for ".concat(e.data.name," updated!")),B("notification-success"),setTimeout((function(){A(null),B(null)}),5e3)})).catch((function(e){A(e.response.data),B("notification-error"),setTimeout((function(){A(null),B(null)}),5e3)})):j(n).then((function(e){a(t.concat(e.data)),l(""),w(""),A("".concat(e.data.name," was added to the phonebook!")),B("notification-success"),setTimeout((function(){A(null),B(null)}),5e3)})).catch((function(e){A(e.response.data),B("notification-error"),setTimeout((function(){A(null),B(null)}),5e3)}))},nameValue:s,nameOnChange:function(e){l(e.target.value)},numberValue:v,numberOnChange:function(e){w(e.target.value)}}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(m,{persons:t.filter((function(e){return e.name.toLowerCase().includes(S.toLocaleLowerCase())})),onClick:function(e){window.confirm("Are you sure you want to delete ".concat(e.name," from the phonebook?"))&&h(e.id).then((function(){a(t.filter((function(n){return n.id!==e.id}))),A("".concat(e.name," was deleted from the phonebook!")),B("notification-success"),setTimeout((function(){A(null),B(null)}),5e3)})).catch((function(e){A(e.response.data),B("notification-error"),setTimeout((function(){A(null),B(null)}),5e3)}))}})]})};t(37);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f213538c.chunk.js.map