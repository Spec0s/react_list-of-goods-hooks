(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),u=Object(r.a)(o,2),d=u[0],j=u[1],N=function(t){j(t)},O=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);switch(n){case s.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o.sort((function(t,e){return t.length-e.length}));break;case s.NONE:break;default:throw new Error("Invalid sortType: ".concat(n))}return c&&o.reverse(),o}(h,{isReversed:n,sortType:d}),E=d!==s.NONE||n;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":d!==s.ALPHABET}),onClick:function(){return N(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":d!==s.LENGTH}),onClick:function(){return N(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!n}),onClick:function(){c((function(t){return!t}))},children:"Reverse"}),E&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),j(s.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:O.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.16546870.chunk.js.map