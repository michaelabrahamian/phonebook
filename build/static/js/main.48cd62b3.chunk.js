(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),u=(t(5),t(2)),l=t(3),i=t.n(l),s="/api/persons",m=function(){return i.a.get(s).then((function(e){return e.data}))},d=function(e){return i.a.post(s,e).then((function(e){return e.data}))},f=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},b=function(e){return o.a.createElement("div",null,"Filter shown with ",o.a.createElement("input",{value:e.filterStr,onChange:e.handleChange}))},g=function(e){return o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},p=function(e){var n=e.persons,t=e.filter,a=e.handleRemovePerson;return o.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return o.a.createElement("p",{key:e.id},e.name," ",e.number,o.a.createElement("button",{onClick:function(){return a(e.id)}},"Delete"))})))},v=function(e){var n=e.message,t=e.type;return null===n?null:o.a.createElement("div",{className:t},n)},E=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],s=l[1],E=Object(a.useState)(""),w=Object(u.a)(E,2),j=w[0],O=w[1],C=Object(a.useState)(""),S=Object(u.a)(C,2),k=S[0],N=S[1],y=Object(a.useState)(null),D=Object(u.a)(y,2),P=D[0],R=D[1],A=Object(a.useState)(""),B=Object(u.a)(A,2),J=B[0],L=B[1];Object(a.useEffect)((function(){console.log("effect"),m().then((function(e){r(e)}))}),[]);var W=function(e){s(""),O(""),R("Added ".concat(e)),L("success"),setTimeout((function(){R(null)}),5e3)};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(v,{message:P,type:J}),o.a.createElement(b,{filterStr:k,handleChange:function(e){console.log(e.target.value),N(e.target.value)}}),o.a.createElement("h3",null,"Add a new contact:"),o.a.createElement(g,{onSubmit:function(e){e.preventDefault(),console.log(t);var n=t.find((function(e){return e.name===i}));if(n){if(window.confirm("".concat(n.name," is already added to the phonebook. Replace the old number with a new one?"))){var a={name:i,number:j};f(n.id,a).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),W(i)})).catch((function(e){R("Error: ".concat(e.response.data.error)),L("error"),console.log(e.response.data)}))}}else d({name:i,number:j}).then((function(e){r(t.concat(e)),W(i)})).catch((function(e){R("Error: ".concat(e.response.data.error)),L("error"),console.log(e.response.data)}))},newName:i,handleNameChange:function(e){console.log(e.target.value),s(e.target.value)},newNumber:j,handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(p,{persons:t,filter:k,handleRemovePerson:function(e){console.log("person with id ".concat(e," needs to be deleted"));var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&h(e).then((function(n){r(t.filter((function(n){return n.id!==e})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.48cd62b3.chunk.js.map