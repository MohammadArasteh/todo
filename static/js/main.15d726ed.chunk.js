(this["webpackJsonpdump-todo"]=this["webpackJsonpdump-todo"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n(8),r=n.n(i),s=n(2),o=n(4),u=n(3);!function(e){e[e.LOWEST=0]="LOWEST",e[e.LOW=1]="LOW",e[e.NORMAL=2]="NORMAL",e[e.HIGH=3]="HIGH",e[e.HIGHEST=4]="HIGHEST"}(c||(c={}));n(21);var l=n(1),d=function(e){var t=e.event,n=e.cancel,c=e.add,i=0,r=0;t&&(i=null===t||void 0===t?void 0:t.clientX,r=null===t||void 0===t?void 0:t.clientY);var s=Object(a.useState)(""),o=Object(u.a)(s,2),d=o[0],j=o[1];return Object(l.jsx)("div",{className:"new-task-container",onClick:function(){return n({isAddingNewTask:!1,event:null})},children:Object(l.jsxs)("div",{className:"new-task",style:{left:i,top:r},onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("h3",{children:"new task"}),Object(l.jsx)("input",{className:"new-task-input",autoFocus:!0,onChange:function(e){return j(e.currentTarget.value)}}),Object(l.jsxs)("div",{className:"new-task-btns",children:[Object(l.jsx)("button",{className:"new-task-cancel new-task-btn",onClick:function(){return n({isAddingNewTask:!1,event:null})},children:"Cancel"}),Object(l.jsx)("button",{className:"new-task-add new-task-btn",onClick:function(){return c(d)},children:"Add"})]})]})})},j=n.p+"static/media/delete.356d50ac.png",b=(n(23),function(e){var t=e.id,n=e.title,i=e.isDone,r=e.onRemove,s=e.onCheck,o=e.onUncheck,d=e.onChangePriority,b=Object(a.useState)(c.NORMAL),O=Object(u.a)(b,2),f=O[0],v=O[1];return Object(l.jsxs)("div",{className:"task-container",children:[Object(l.jsxs)("div",{className:"".concat(i?"task-done":""),children:[Object(l.jsx)("p",{className:"task-title unselectable",onClick:function(){return i?o(t):s(t)},style:{textDecoration:i?"line-through":"none"},children:n}),Object(l.jsx)("p",{className:"task-priority unselectable ".concat(c[f]),onClick:function(){var e=c.NORMAL;switch(f){case c.NORMAL:e=c.HIGH;break;case c.HIGH:e=c.HIGHEST;break;case c.HIGHEST:e=c.LOWEST;break;case c.LOWEST:e=c.LOW;break;case c.LOW:e=c.NORMAL}d(t,e),v(e)},children:c[f]})]}),Object(l.jsx)("img",{className:"task-delete-btn",src:j,onClick:function(){return r(t)}})]})}),O=(n(24),function(e){var t=e.title,n=(e.id,e.onDelete),i=Object(a.useState)([]),r=Object(u.a)(i,2),j=r[0],O=r[1],f=Object(a.useState)(0),v=Object(u.a)(f,2),h=v[0],m=v[1],p=Object(a.useState)(0),N=Object(u.a)(p,2),k=(N[0],N[1],Object(a.useState)(0)),x=Object(u.a)(k,2),C=x[0],g=x[1],w=Object(a.useState)(t),I=Object(u.a)(w,2),S=I[0],y=I[1],D=Object(a.useState)(15*t.length),L=Object(u.a)(D,2),T=L[0],A=L[1],E=Object(a.useState)({isAddingNewTask:!1,event:null}),H=Object(u.a)(E,2),R=H[0],W=H[1],G=Object(a.useRef)(null),M=function(e){var t=j.reduce((function(t,n){return n.id===e?[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},n),{},{isDone:!0})]):[].concat(Object(o.a)(t),[n])}),[]);O(B(t))},_=function(e){var t=j.reduce((function(t,n){return n.id===e?[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},n),{},{isDone:!1})]):[].concat(Object(o.a)(t),[n])}),[]);O(B(t))},P=function(e){O((function(t){return t.reduce((function(t,n){return n.id===e?t:[].concat(Object(o.a)(t),[n])}),[])}))},U=function(e,t){var n=j.reduce((function(n,c){return c.id===e?[].concat(Object(o.a)(n),[Object(s.a)(Object(s.a)({},c),{},{priority:t})]):[].concat(Object(o.a)(n),[c])}),[]);O(B(n))},B=function(e){return e.sort((function(e,t){return e.priority-t.priority-1})).sort((function(e,t){return e.isDone&&t.isDone?0:e.isDone?1:-1}))};return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsx)("input",{className:"card-title",style:{width:T},ref:G,value:S,onChange:function(){var e,t=null===(e=G.current)||void 0===e?void 0:e.value.replace(" ","");t&&(null===t||void 0===t?void 0:t.length)>13||(y(t),A(t?15*t.length:15))}}),Object(l.jsx)("button",{className:"delete-card",onClick:n,children:"Delete"})]}),j.map((function(e){return Object(l.jsx)(b,{title:e.title,id:e.id,isDone:e.isDone,onRemove:P,onCheck:M,onUncheck:_,onChangePriority:U},e.id)})),Object(l.jsx)("button",{className:"add-task",onClick:function(e){return W({isAddingNewTask:!0,event:e})},children:"Add Task"}),R.isAddingNewTask&&Object(l.jsx)(d,{event:R.event,cancel:W,add:function(e){O([].concat(Object(o.a)(j),[{title:e,id:C,isDone:!1,priority:c.NORMAL}])),W({isAddingNewTask:!1,event:null}),m(h+1),g(C+1)}})]})}),f=(n(25),n(26),function(e){var t=e.title,n=e.text,c=e.yes,a=e.no;return Object(l.jsxs)("div",{className:"confirm-container",children:[Object(l.jsx)("h3",{className:"confirm-title",children:t}),Object(l.jsx)("p",{className:"confirm-text",children:n}),Object(l.jsxs)("div",{className:"confirm-buttons",children:[Object(l.jsx)("button",{onClick:c,className:"yes-btn confirm-btn",children:"Yes"}),Object(l.jsx)("button",{onClick:a,className:"no-btn confirm-btn",children:"No"})]})]})}),v=(n(27),function(e){var t=e.text,n=e.addList,c=Object(a.useState)(""),i=Object(u.a)(c,2),r=i[0],s=i[1];return Object(l.jsx)("div",{className:"input-container",children:Object(l.jsxs)("form",{className:"input-elements",onSubmit:function(e){e.preventDefault(),n(void 0===r?"":r)},children:[Object(l.jsx)("h3",{className:"input-text",children:t}),Object(l.jsx)("input",{autoFocus:!0,value:r,className:"input-field",onChange:function(e){return function(e){var t=e.target.value;t&&(null===t||void 0===t?void 0:t.length)>13||s(t)}(e)}}),Object(l.jsx)("button",{type:"submit",className:"input-button",children:"Ok"})]})})}),h="ADD_LIST",m="REMOVE_LIST",p="INCREASE_COUNT",N="DECREASE_COUNT",k="SET_TEMP_ID",x="SHOW_DIALOG",C="SHOW_INPUT";var g=n(5),w=function(e){return{type:x,value:e}},I=function(e){return{type:C,value:e}},S=function(){var e=Object(g.c)((function(e){return e.CardsList})),t=Object(g.c)((function(e){return e.Counters.currentCardId})),n=Object(g.c)((function(e){return e.Counters.tempID})),c=Object(g.c)((function(e){return e.Booleans.showDialog})),a=Object(g.c)((function(e){return e.Booleans.showInput})),i=Object(g.b)(),r=function(e){i(w(!0)),i({type:k,value:e})},s=function(e){return i({type:m,card:{title:"",id:e}})};return Object(l.jsxs)("div",{className:"container",children:[e.map((function(e){return Object(l.jsx)(O,{title:e.title,id:e.id,onDelete:function(){return r(e.id)}},e.id)})),Object(l.jsx)("button",{className:"add-card-button",onClick:function(){return i(I(!0))},children:"Add new card"}),c&&Object(l.jsx)(f,{title:"deleting list",text:"are you sure ?",yes:function(){s(n),i(w(!1))},no:function(){i(w(!1))}}),a&&Object(l.jsx)(v,{text:"enter list name",addList:function(e){i(I(!1)),i({type:h,card:{title:e,id:t}}),i({type:p,value:1})}})]})},y=n(6),D={currentCardId:0,tempID:0},L={showDialog:!1,showInput:!1},T=Object(y.c)({Counters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(s.a)(Object(s.a)({},e),{},{currentCardId:e.currentCardId+t.value});case N:return Object(s.a)(Object(s.a)({},e),{},{currentCardId:e.currentCardId-t.value});case k:return Object(s.a)(Object(s.a)({},e),{},{tempID:t.value})}return e},CardsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return null==t.card.title||t.card.title.match("^\\s+$")||""==t.card.title?e:[].concat(Object(o.a)(e),[{title:t.card.title,id:t.card.id}]);case m:return e.reduce((function(e,n){return n.id===t.card.id?Object(o.a)(e):[].concat(Object(o.a)(e),[n])}),[])}return e},Booleans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(s.a)(Object(s.a)({},e),{},{showDialog:t.value});case C:return Object(s.a)(Object(s.a)({},e),{},{showInput:t.value});default:return e}}}),A=n(16),E=Object(y.d)(T,Object(y.a)(Object(A.createLogger)()));r.a.render(Object(l.jsx)(g.a,{store:E,children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.15d726ed.chunk.js.map