(this.webpackJsonpKeeper=this.webpackJsonpKeeper||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(8),i=n.n(r),j=n(9),o=n(5),a=n(0);function u(){return Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"Keeper"})})}function l(){var e=(new Date).getFullYear();return Object(a.jsx)("footer",{children:Object(a.jsxs)("p",{children:["Copyright \u24d2 ",e]})})}function s(e){return Object(a.jsxs)("div",{className:"note",children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsx)("p",{children:e.content})]})}var b=n(4),d=n(7);var O=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(o.a)(t,2),r=n[0],i=n[1];function j(e){var t=e.target,n=t.name,c=t.value;i((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},n,c))}))}return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{name:"title",onChange:j,value:r.title,placeholder:"Title"}),Object(a.jsx)("textarea",{name:"content",onChange:j,value:r.content,placeholder:"Take a note...",rows:"3"}),Object(a.jsx)("button",{onClick:function(t){e.onAdd(r),i({title:"",content:""}),t.preventDefault()},children:"Add"})]})})};function h(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function i(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{}),Object(a.jsx)(O,{onAdd:function(e){r((function(t){return[].concat(Object(j.a)(t),[e])}))}}),n.map((function(e,t){return Object(a.jsx)(s,{id:t,title:e.title,content:e.content,onDelete:i},t)})),Object(a.jsx)(l,{})]})}i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.374aca87.chunk.js.map