(this.webpackJsonpeasy_purchase=this.webpackJsonpeasy_purchase||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/auchan.5a911c8b.png"},109:function(e,t,a){e.exports=a.p+"static/media/velmart.bcee6b19.png"},110:function(e,t,a){e.exports=a.p+"static/media/silpo.6402b432.png"},111:function(e,t,a){e.exports=a.p+"static/media/novus.7931c6a4.png"},115:function(e,t,a){e.exports=a(240)},120:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(43),c=a.n(o),m=(a(120),a(17)),l=a(6),i=a(45),s=a(46),u=a(50),d=a(47),p=a(51),b=a(9),f=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand ".concat(e.bgColorClass)},r.a.createElement(m.b,{className:"navbar-brand",to:"/".concat(e.market)},e.logo),r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("div",{className:"nav-item dropdown"},r.a.createElement(m.b,{className:"nav-link active dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Show markets   "),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},r.a.createElement(m.b,{className:"dropdown-item",to:"/auchan"},"Auchan"),r.a.createElement(m.b,{className:"dropdown-item",to:"/velmart"},"Velmart"),r.a.createElement(m.b,{className:"dropdown-item",to:"/silpo"},"Silpo"),r.a.createElement(m.b,{className:"dropdown-item",to:"/novus"},"Novus"),r.a.createElement(m.b,{className:"dropdown-item",to:"/fair"},"Market")))))},k=a(49),v=function(e){var t,a=Object(n.useState)(!1),o=Object(k.a)(a,2),c=o[0],m=o[1];Object(n.useEffect)((function(){c&&setTimeout((function(){return m(!1)}),5e3)}),[c,m]);var l=Object(n.useMemo)((function(){return e.market.reduce((function(e,t){var a=t.value;return e+Number(a)}),0)}),[e.market]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toast d-flex align-items-center ".concat(c?"show":""),role:"alert","aria-live":"assertive","aria-atomic":"true",animation:"true"},r.a.createElement("div",{className:"toast-body"},"Sum: ",l),r.a.createElement("span",{type:"button",className:"btn-close toast__close ms-auto me-2 px-3 py-1","data-bs-dismiss":"toast","aria-label":"Close",onClick:function(){return m(!1)}},"\xd7")),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("input",{type:"submit",className:"dropdown-item",value:"Submit"}),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{type:"button",className:"dropdown-item",onClick:function(){return m(!0)},disabled:!(null===(t=e.market)||void 0===t?void 0:t.length)},"Total sum"),r.a.createElement("button",{type:"button",className:"dropdown-item",onClick:function(){return e.setCompletedAll(e.marketName,e.market)}},"Completed all"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{type:"button",className:"dropdown-item",onClick:function(){e.removeTodo(e.marketName)}},"Clear todos")))},O=function(e){var t=e.addTodo,a=e.input,o=e.onSubmitTodoAC,c=e.marketName,m=e.onChangeAC,l=e.removeTodo,i=e.saveToLSAC,s=e.market,u=e.setCompletedAll,d=Object(n.useCallback)((function(e){e.preventDefault(),t(c,a.form.title,a.form.value),o()}),[t,o,a,c]);return r.a.createElement("form",{className:"form row justify-content-around",onSubmit:d},r.a.createElement("input",{type:"text",className:"form-control col",placeholder:"Product",value:a.form.title,onChange:function(e){return m("title",e.target.value)},required:!0}),r.a.createElement("input",{type:"number",className:"form-control col-2",placeholder:"Value",min:"0",value:a.form.value||"",onChange:function(e){return m("value",e.target.value)}}),r.a.createElement("button",{type:"button",className:"form-control col-2 col-md-1 btn btn-outline-secondary dropdown-toggle dropdown-toggle-split","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Toggle Dropdown")),r.a.createElement(v,{removeTodo:l,saveToLSAC:i,marketName:c,market:s,setCompletedAll:u}))},N=a(8),g=a(242),E=a(241),h=a(5),j=Object(h.d)(Object(b.b)((function(e,t){return{initialValues:Object(N.a)({},t.name,t.val)}})),Object(E.a)({form:"itemElement",enableReinitialize:!0}))((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(g.a,{onBlur:e.submit,component:"input",name:e.name,type:e.type,className:"w-100 h-100",autoFocus:!0}))})),T=function(e){var t=Object(n.useState)({}),a=Object(k.a)(t,2),o=a[0],c=a[1],m=function(t,a){return o[t]?r.a.createElement(j,{type:a,name:t,val:e.todo[t],onSubmit:function(a){return function(t,a){t[a]&&e.editTodo(e.marketName,e.todo.id,Object(N.a)({},a,t[a].trim())),c(Object(N.a)({},a,!1))}(a,t)}}):e.todo[t]};return r.a.createElement("li",{className:"list-group-item bg-light ".concat(e.todo.completed&&"todo-completed")},r.a.createElement("div",{className:"row justify-content-around align-items-center"},r.a.createElement("input",{type:"checkbox",className:"item-element check col-1",checked:e.todo.completed,onChange:function(){return e.setCompleted(e.marketName,e.todo)}}),r.a.createElement("div",{className:"item-element text col",onClick:function(){!e.todo.completed&&c({title:!0})}},m("title","text")),r.a.createElement("div",{className:"item-element value col-3",onClick:function(){!e.todo.completed&&c({value:!0})}},m("value","number")),r.a.createElement("div",{className:"item-element col-2 col-md-1 row justify-content-center"},r.a.createElement("i",{className:"fas fa-times remove-item",onClick:function(){e.removeTodo(e.marketName,e.todo.id)}}))))},C=a(113),y=a(11),w=a(107).create({baseURL:"https://easy-purchase-e225b.firebaseio.com/"}),D={getTodos:function(){return w.get("/markets.json").then((function(e){return e.data}))},postTodo:function(e,t,a){return w.post("markets/".concat(e,".json"),{title:t,value:a,completed:!1}).then((function(e){return e.data}))},deleteTodo:function(e,t){return w.delete("markets/".concat(e,"/").concat(t,".json"))},toggleCompleted:function(e,t,a){return w.put("markets/".concat(e,"/").concat(t,"/completed.json"),a)},editTodo:function(e,t,a){var n=Object.keys(a)[0];return w.put("markets/".concat(e,"/").concat(t,"/").concat(n,".json"),JSON.stringify(a[n]))}},S="SAVE_TO_LOCAL_STORAGE",_={auchan:[],velmart:[],novus:[],silpo:[],fair:[],fetching:!0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOS":return Object(y.a)({},e,{},t.markets);case"ADD_TODO":return Object(y.a)({},e,Object(N.a)({},t.marketName,[].concat(Object(C.a)(e[t.marketName]),[t.todo])));case S:return localStorage.setItem("todos",JSON.stringify(e)),e;case"CLEAR_TODO_LIST":return Object(y.a)({},e,Object(N.a)({},t.marketName,[]));case"REMOVE_TODO":return Object(y.a)({},e,Object(N.a)({},t.marketName,e[t.marketName].filter((function(e){return e.id!==t.id}))));case"SET_TODO_ID":return Object(y.a)({},e,Object(N.a)({},t.marketName,e[t.marketName].map((function(e,t){return e.id=t,e}))));case"SET_TODO_COMPLETED":return Object(y.a)({},e,Object(N.a)({},t.marketName,e[t.marketName].map((function(e){return e.id===t.id&&(e.completed=!e.completed),e}))));case"TOGGLE_FETCHING":return Object(y.a)({},e,{fetching:!e.fetching});case"COMPLETED_ALL":return Object(y.a)({},e,Object(N.a)({},t.marketName,e[t.marketName].map((function(e){return e.completed=t.completed,e}))));case"EDIT_TODO_AC":return Object(y.a)({},e,Object(N.a)({},t.marketName,e[t.marketName].map((function(e){return t.id===e.id&&(e=Object(y.a)({},e,{},t.data)),e}))));default:return e}},L=function(e){return{type:"CLEAR_TODO_LIST",marketName:e}},x=function(e,t){return{type:"REMOVE_TODO",marketName:e,id:t}},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(a){D.deleteTodo(e,t),a(t?x(e,t):L(e))}},M=Object(b.b)((function(e,t){return{markets:e.markets,market:e.markets[t.marketName],marketName:t.marketName,todo:t.todo}}),{removeTodo:I,setCompleted:function(e,t){return function(a){D.toggleCompleted(e,t.id,!t.completed),a(function(e,t){return{type:"SET_TODO_COMPLETED",marketName:e,id:t}}(e,t.id))}},editTodo:function(e,t,a){return function(n){D.editTodo(e,t,a),n(function(e,t,a){return{type:"EDIT_TODO_AC",marketName:e,id:t,data:a}}(e,t,a))}}})(T),R=function(e){return r.a.createElement("ul",{className:"list-group"},e.market.map((function(t){return r.a.createElement(M,{todo:t,key:t.id,marketName:e.marketName})})))},G=function(){return r.a.createElement("div",{className:"d-flex justify-content-center mt-4"},r.a.createElement("div",{className:"spinner-border text-secondary",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.markets.fetching?r.a.createElement(G,null):r.a.createElement(r.a.Fragment,null,this.props.market.length?r.a.createElement(R,{market:this.props.market,marketName:this.props.marketName}):r.a.createElement("h1",{className:"display-4"},"No todos"))}}]),t}(r.a.Component),V=Object(b.b)((function(e,t){return{markets:e.markets,market:e.markets[t.marketName],marketName:t.marketName}}))(F),B=function(e){return r.a.createElement("div",{className:"market-content container"},r.a.createElement(O,e),r.a.createElement(V,{market:e.market,marketName:e.marketName}))},P={form:{title:"",value:0}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON-CHANGE-FORM":return Object(y.a)({},e,{form:Object(y.a)({},e.form,Object(N.a)({},t.dataName,t.data))});case"ON-SUBMIT-TODO":return Object(y.a)({},e,{form:{title:"",value:0}});default:return e}},J=Object(b.b)((function(e,t){return{marketName:t.market,market:e.markets[t.market],markets:e.markets,input:e.input}}),{onChangeAC:function(e,t){return{type:"ON-CHANGE-FORM",dataName:e,data:t}},removeTodo:I,onSubmitTodoAC:function(){return{type:"ON-SUBMIT-TODO"}},addTodo:function(e,t,a){return function(n){D.postTodo(e,t,a).then((function(r){n(function(e,t){return{type:"ADD_TODO",marketName:e,todo:t}}(e,{title:t,value:a,id:r.name,completed:!1}))}))}},setCompletedAll:function(e,t){return function(a){var n=t.filter((function(e){return!e.completed})).length;a(function(e,t){return{type:"COMPLETED_ALL",marketName:e,completed:t}}(e,n)),t.map((function(t){return D.toggleCompleted(e,t.id,n)}))}}})(B),U=function(e){return r.a.createElement("div",{className:"home"},r.a.createElement(f,{market:e.market,bgColorClass:e.bgColorClass,logo:e.logo}),r.a.createElement(J,{market:e.market}))},W=a(108),q=a.n(W),z=a(109),K=a.n(z),$=a(110),Q=a.n($),X=a(111),Y=a.n(X),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).createImg=function(e,t){return r.a.createElement("img",{className:"logo",src:e,alt:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.setTodos()}},{key:"render",value:function(){switch(this.props.match.params.market){case"auchan":return r.a.createElement(U,{market:this.props.match.params.market,bgColorClass:"navbar-dark bg-danger",logo:this.createImg(q.a,"Auchan")});case"velmart":return r.a.createElement(U,{market:this.props.match.params.market,bgColorClass:"navbar-light bg-light",logo:this.createImg(K.a,"Velmart")});case"silpo":return r.a.createElement(U,{market:this.props.match.params.market,bgColorClass:"navbar-light bg-warning",logo:this.createImg(Q.a,"Silpo")});case"fair":return r.a.createElement(U,{market:this.props.match.params.market,bgColorClass:"navbar-dark bg-secondary",logo:"MARKET"});default:return r.a.createElement(U,{market:"novus",bgColorClass:"navbar-dark bg-success",logo:this.createImg(Y.a,"Novus")})}}}]),t}(r.a.Component),ee=Object(h.d)(Object(b.b)((function(e){return{markets:e.markets}}),{setTodos:function(){return function(e){D.getTodos().then((function(t){if(null!==t){var a={},n=function(e){a[e]=Object.keys(t[e]).map((function(a){return Object(y.a)({},t[e][a],{id:a})}))};for(var r in t)n(r);e({type:"SET_TODOS",markets:a})}e({type:"TOGGLE_FETCHING"})}))}}}),l.e)(Z);var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(l.a,{path:"/:market?",component:ee})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(112),ne=a(243),re=Object(h.c)({markets:A,input:H,form:ne.a}),oe=Object(h.e)(re,Object(h.a)(ae.a));c.a.render(r.a.createElement(b.a,{store:oe},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.23bd76b9.chunk.js.map