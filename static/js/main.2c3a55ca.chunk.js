(this.webpackJsonpeasy_purchase=this.webpackJsonpeasy_purchase||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/auchan.5a911c8b.png"},40:function(e,t,a){e.exports=a.p+"static/media/velmart.bcee6b19.png"},41:function(e,t,a){e.exports=a.p+"static/media/silpo.6402b432.png"},42:function(e,t,a){e.exports=a.p+"static/media/novus.7931c6a4.png"},45:function(e,t,a){e.exports=a(73)},50:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),m=(a(50),a(6)),l=a(11),s=a(17),i=a(18),u=a(20),d=a(19),p=a(21),f=a(9),k=function(e){return n.a.createElement("nav",{className:"navbar navbar-expand ".concat(e.bgColorClass)},n.a.createElement(m.b,{className:"navbar-brand",to:"/".concat(e.market)},e.logo),n.a.createElement("div",{className:"navbar-nav ml-auto"},n.a.createElement("div",{className:"nav-item dropdown"},n.a.createElement(m.b,{className:"nav-link active dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Show markets   "),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},n.a.createElement(m.b,{className:"dropdown-item",to:"/auchan"},"Auchan"),n.a.createElement(m.b,{className:"dropdown-item ",to:"/velmart"},"Velmart"),n.a.createElement(m.b,{className:"dropdown-item ",to:"/silpo"},"Silpo"),n.a.createElement(m.b,{className:"dropdown-item ",to:"/novus"},"Novus"),n.a.createElement(m.b,{className:"dropdown-item ",to:"/fair"},"\u042f\u0440\u043c\u0430\u0440\u043a\u0430"),n.a.createElement(m.b,{className:"dropdown-item ",to:"/other"},"Other")))))},b=function(e){return n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("input",{type:"submit",className:"dropdown-item",value:"Submit"}),n.a.createElement("div",{role:"separator",className:"dropdown-divider"}),n.a.createElement("button",{type:"button",className:"dropdown-item",onClick:function(){return e.calcSum(e.marketName)}},"Total sum"),n.a.createElement("button",{type:"button",className:"dropdown-item",onClick:function(){return e.setCompletedAll(e.marketName,e.market)}},"Completed all"),n.a.createElement("div",{role:"separator",className:"dropdown-divider"}),n.a.createElement("button",{type:"button",className:"dropdown-item",onClick:function(){e.removeTodo(e.marketName)}},"Clear todos"))},h=function(e){var t=e.props;return n.a.createElement("form",{className:"form row justify-content-around",onSubmit:function(e){e.preventDefault(),t.addTodo(t.marketName,t.input.form.title,t.input.form.value),t.onSubmitTodoAC()}},n.a.createElement("input",{type:"text",className:"form-control col",placeholder:"Product",required:!0,value:t.input.form.title,onChange:function(e){return t.onChangeAC("title",e.target.value)}}),n.a.createElement("input",{type:"number",className:"form-control col-2",placeholder:"Value",value:t.input.form.value,onChange:function(e){return t.onChangeAC("value",e.target.value)}}),n.a.createElement("button",{type:"button",className:"form-control col-2 col-md-1 btn btn-outline-secondary dropdown-toggle dropdown-toggle-split","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("span",{className:"sr-only"},"Toggle Dropdown")),n.a.createElement(b,{removeTodo:t.removeTodo,saveToLSAC:t.saveToLSAC,marketName:t.marketName,market:t.market,calcSum:t.calcSum,setCompletedAll:t.setCompletedAll}))},g=function(e){return n.a.createElement("li",{className:"list-group-item bg-light ".concat(e.todo.completed&&"todo-completed")},n.a.createElement("div",{className:"row justify-content-around align-items-center"},n.a.createElement("input",{type:"checkbox",className:"item-element check col-1",checked:e.todo.completed,onChange:function(){e.setCompleted(e.marketName,e.todo)}}),n.a.createElement("div",{className:"item-element text col"},e.todo.title),n.a.createElement("div",{className:"item-element value col-3"},e.todo.value),n.a.createElement("div",{className:"item-element col-2 col-md-1 row justify-content-center"},n.a.createElement("i",{className:"fas fa-times remove-item",onClick:function(){e.removeTodo(e.marketName,e.todo.id)}})," ")))},v=a(8),N=a(44),E=a(3),O=a(38).create({baseURL:"https://easy-purchase-e225b.firebaseio.com/"}),C={getTodos:function(){return O.get("/markets.json").then((function(e){return e.data}))},postTodo:function(e,t,a){return O.post("markets/".concat(e,".json"),{title:t,value:a,completed:!1}).then((function(e){return e.data}))},deleteTodo:function(e,t){return O.delete("markets/".concat(e,"/").concat(t,".json"))},toggleCompleted:function(e,t,a){return O.put("markets/".concat(e,"/").concat(t,"/completed.json"),a)}},T="SAVE_TO_LOCAL_STORAGE",y={auchan:[],velmart:[],novus:[],silpo:[],fair:[],other:[],fetching:!0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOS":return Object(E.a)({},e,{},t.markets);case"ADD_TODO":return Object(E.a)({},e,Object(v.a)({},t.marketName,[].concat(Object(N.a)(e[t.marketName]),[t.todo])));case T:return localStorage.setItem("todos",JSON.stringify(e)),e;case"CLEAR_TODO_LIST":return Object(E.a)({},e,Object(v.a)({},t.marketName,[]));case"REMOVE_TODO":return Object(E.a)({},e,Object(v.a)({},t.marketName,e[t.marketName].filter((function(e){return e.id!==t.id}))));case"SET_TODO_ID":return Object(E.a)({},e,Object(v.a)({},t.marketName,e[t.marketName].map((function(e,t){return e.id=t,e}))));case"SET_TODO_COMPLETED":return Object(E.a)({},e,Object(v.a)({},t.marketName,e[t.marketName].map((function(e){return e.id===t.id&&(e.completed=!e.completed),e}))));case"CALC_SUM":return alert(e[t.marketName].reduce((function(e,t){return e+ +t.value}),0)),e;case"TOGGLE_FETCHING":return Object(E.a)({},e,{fetching:!e.fetching});case"COMPLETED_ALL":return Object(E.a)({},e,Object(v.a)({},t.marketName,e[t.marketName].map((function(e){return e.completed=t.completed,e}))));default:return e}},w=function(e){return{type:"CLEAR_TODO_LIST",marketName:e}},S=function(e,t){return{type:"REMOVE_TODO",marketName:e,id:t}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(a){C.deleteTodo(e,t),a(t?S(e,t):w(e))}},_=Object(f.b)((function(e,t){return{markets:e.markets,market:e.markets[t.marketName],marketName:t.marketName,todo:t.todo}}),{removeTodo:D,setCompleted:function(e,t){return function(a){C.toggleCompleted(e,t.id,!t.completed),a(function(e,t){return{type:"SET_TODO_COMPLETED",marketName:e,id:t}}(e,t.id))}}})(g),A=function(e){return n.a.createElement("ul",{className:"list-group mt-3"},e.market.map((function(t){return n.a.createElement(_,{todo:t,key:t.id,marketName:e.marketName})})))},L=function(){return n.a.createElement("div",{className:"d-flex justify-content-center mt-4"},n.a.createElement("div",{className:"spinner-border text-secondary",style:{width:"3rem",height:"3rem"},role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))},x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.markets.fetching?n.a.createElement(L,null):n.a.createElement(n.a.Fragment,null,this.props.market.length?n.a.createElement(A,{market:this.props.market,marketName:this.props.marketName}):n.a.createElement("h1",{className:"display-4"},"No todos"))}}]),t}(n.a.Component),M=Object(f.b)((function(e,t){return{markets:e.markets,market:e.markets[t.marketName],marketName:t.marketName}}))(x),G=function(e){return n.a.createElement("div",{className:"market-content container"},n.a.createElement(h,{props:e}),n.a.createElement(M,{market:e.market,marketName:e.marketName}))},I={form:{title:"",value:0}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON-CHANGE-FORM":return Object(E.a)({},e,{form:Object(E.a)({},e.form,Object(v.a)({},t.dataName,t.data))});case"ON-SUBMIT-TODO":return Object(E.a)({},e,{form:{title:"",value:0}});default:return e}},R=Object(f.b)((function(e,t){return{marketName:t.market,market:e.markets[t.market],markets:e.markets,input:e.input}}),{onChangeAC:function(e,t){return{type:"ON-CHANGE-FORM",dataName:e,data:t}},removeTodo:D,onSubmitTodoAC:function(){return{type:"ON-SUBMIT-TODO"}},calcSum:function(e){return{type:"CALC_SUM",marketName:e}},addTodo:function(e,t,a){return function(r){C.postTodo(e,t,a).then((function(n){r(function(e,t){return{type:"ADD_TODO",marketName:e,todo:t}}(e,{title:t,value:a,id:n.name,completed:!1}))}))}},setCompletedAll:function(e,t){return function(a){var r=t.filter((function(e){return!e.completed})).length;a(function(e,t){return{type:"COMPLETED_ALL",marketName:e,completed:t}}(e,r)),t.map((function(t){C.toggleCompleted(e,t.id,r)}))}}})(G),V=function(e){return n.a.createElement("div",{className:"home"},n.a.createElement(k,{market:e.market,bgColorClass:e.bgColorClass,logo:e.logo}),n.a.createElement(R,{market:e.market}))},F=function(e){return n.a.createElement("div",{className:"home"},n.a.createElement(k,{title:"Easy Purchase",bgColorClass:"navbar-dark bg-secondary",logo:"Easy Purchase"}),n.a.createElement("h1",{className:"display-3"},"Easy Purchase v1.0"))},U=a(39),B=a.n(U),H=a(40),J=a.n(H),W=a(41),q=a.n(W),$=a(42),z=a.n($),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.setTodos()}},{key:"render",value:function(){var e=function(e,t){return n.a.createElement("img",{className:"logo",src:e,alt:t})};switch(this.props.match.params.market){case"auchan":return n.a.createElement(V,{market:this.props.match.params.market,bgColorClass:"navbar-dark bg-danger",logo:e(B.a,"Auchan")});case"velmart":return n.a.createElement(V,{market:this.props.match.params.market,bgColorClass:"navbar-light bg-light",logo:e(J.a,"Velmart")});case"silpo":return n.a.createElement(V,{market:this.props.match.params.market,bgColorClass:"navbar-light bg-warning",logo:e(q.a,"Silpo")});case"novus":return n.a.createElement(V,{market:this.props.match.params.market,bgColorClass:"navbar-dark bg-success",logo:e(z.a,"Novus")});case"fair":return n.a.createElement(V,{market:this.props.match.params.market,bgColorClass:"navbar-dark bg-secondary",logo:"\u042f\u0420\u041c\u0410\u0420\u041a\u0410"});case"other":return n.a.createElement(V,{market:this.props.match.params.market,bgColorClass:"navbar-dark bg-dark",logo:""});default:return n.a.createElement(F,null)}}}]),t}(n.a.Component),Q=Object(f.b)((function(e){return{markets:e.markets}}),{setTodos:function(){return function(e){C.getTodos().then((function(t){if(null!==t){var a={},r=function(e){a[e]=Object.keys(t[e]).map((function(a){return Object(E.a)({},t[e][a],{id:a})}))};for(var n in t)r(n);e({type:"SET_TODOS",markets:a})}e({type:"TOGGLE_FETCHING"})}))}}})(Object(l.e)(K));var X=function(){return n.a.createElement(m.a,null,n.a.createElement(l.a,{path:"/:market?",component:Q}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(13),Z=a(43),ee=Object(Y.c)({markets:j,input:P}),te=Object(Y.d)(ee,Object(Y.a)(Z.a));c.a.render(n.a.createElement(f.a,{store:te},n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.2c3a55ca.chunk.js.map