(this["webpackJsonpcrm-shool-app"]=this["webpackJsonpcrm-shool-app"]||[]).push([[3],{672:function(n,e,t){"use strict";t.r(e);var r,c=t(2),i=t(9),a=t(18),s=t.n(a),o=t(35),d=t(3),l=t(0),u=t(670),j=t(71),b=t(300),p=t(24),h=t(10),f=t(1),O=h.a.div(r||(r=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: ",";\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #001529;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #001529 transparent transparent transparent;\n  }\n  .lds-ring div:nth-of-type(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-of-type(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-of-type(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n"])),(function(n){return n.precentage?"100%":"100vh"})),x=function(n){var e=n.precentage;return Object(f.jsx)(O,{precentage:e,children:Object(f.jsxs)("div",{className:"lds-ring",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})})},m=t(83),v=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return n+t.length>r?Object(f.jsx)(m.a,{placement:"leftTop",title:"".concat(i).concat(""!==i?" ":"").concat(e),children:Object(f.jsxs)(j.h,{width:c,children:[t," ",e]})}):Object(f.jsxs)(j.h,{children:[t," ",e]})},g=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return n+t.length>r?Object(f.jsx)(m.a,{placement:"leftTop",title:"".concat(i).concat(""!==i?" ":"").concat(e.surname," ").concat(e.name," ").concat(e.midname),children:Object(f.jsxs)(j.h,{width:c,children:[e.surname," ",e.name," ",e.midname]})}):Object(f.jsxs)(j.h,{children:[e.surname," ",e.name," ",e.midname]})},k=t(14),y=t(33),S=t(384),w=t(223),_=t(22),P=t.n(_),I=function(n){var e,t,r,c=n.closestTask;return Object(f.jsxs)(j.a,{children:[Object(f.jsx)("p",{className:"name",children:null===c||void 0===c?void 0:c.name}),Object(f.jsxs)("p",{children:["\u0414\u043e: ",P()(null===c||void 0===c?void 0:c.deadline).format("DD/MM/YYYY | HH:mm")]}),Object(f.jsxs)("p",{children:["\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u0435\u043d: ",null===c||void 0===c||null===(e=c.responsible[0])||void 0===e?void 0:e.surname," ",null===c||void 0===c||null===(t=c.responsible[0])||void 0===t?void 0:t.name," ",null===c||void 0===c||null===(r=c.responsible[0])||void 0===r?void 0:r.midname]}),Object(f.jsx)("div",{children:null===c||void 0===c?void 0:c.text})]})},T=function(n){n.Url;var e=n.card,t=n.pupils,r=(n.pageSize,t.pupilsList),i=Object(l.useState)(!1),a=Object(d.a)(i,1)[0];return Object(f.jsx)(f.Fragment,{children:a?Object(f.jsx)(x,{precentage:!0}):r.filter((function(n){return n.salesFunnelStep===e._id})).map((function(n,t){return Object(f.jsx)(u.b,{draggableId:"".concat(n._id),index:t,children:function(t){return Object(f.jsx)(j.g,Object(c.a)(Object(c.a)(Object(c.a)({background:e.background},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(f.jsxs)("div",{className:"funnelStepStudent__first--info",children:[Object(f.jsx)("div",{children:Object(f.jsx)(y.c,{to:"/student/".concat(n._id),children:g("".concat(n.surname," ").concat(n.name," ").concat(n.midname).length,n,"",25,"230px","\u0424\u0418\u041e:")})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(j.m,{children:"\u0422\u0435\u043b.\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044f:"})," ",n.parentPhone]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(j.m,{children:"\u041c\u0438\u043d.\u0410\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442:"})," ",n.minPaidSubscription||0,"\u20bd"]}),Object(f.jsx)(j.j,{portable:!0,contains:n.statuses.length,children:n.statuses.map((function(n){return Object(f.jsx)(S.a,{color:n.color,children:n.name},n._id)}))}),n.closestTask.length?Object(f.jsx)(w.a,{overlay:Object(f.jsx)(I,{closestTask:n.closestTask[0]}),children:Object(f.jsx)(j.i,{children:"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})}):""]})}))}},n._id)}))})},F=t(133);e.default=function(){var n=k.a,e=Object(l.useState)(!0),t=Object(d.a)(e,2),r=t[0],a=t[1],p=Object(l.useState)([]),h=Object(d.a)(p,2),O=h[0],m=h[1],g=Object(l.useState)([]),y=Object(d.a)(g,2),S=y[0],w=y[1];Object(l.useEffect)((function(){return function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.b)(n);case 2:t=e.sent,m((function(n){return t})),w((function(n){return t.map((function(n){return n.pupils})).flat(2)})),a((function(n){return!1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){m((function(n){return[]})),w((function(n){return[]}))}}),[n]);var _=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,c,a,o,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.destination){e.next=2;break}return e.abrupt("return",w((function(n){return n})));case 2:if(r=S.filter((function(n){return n.salesFunnelStep===t.source.droppableId})),c=S.filter((function(n){return n.salesFunnelStep===t.destination.droppableId})),a=r.splice(t.source.index,1),o=Object(d.a)(a,1),l=o[0],t.source.droppableId!==t.destination.droppableId){e.next=8;break}return r.splice(t.destination.index,0,l),e.abrupt("return",w((function(n){return Array.from(new Set([].concat(Object(i.a)(n),Object(i.a)(r),Object(i.a)(c))))})));case 8:return u=l.statuses,l.statuses=l.statuses.map((function(n){return n._id})),l.salesFunnelStep=t.destination.droppableId,e.next=13,Object(F.c)(n,l._id,l);case 13:return l.statuses=u,c.splice(t.destination.index,0,l),e.abrupt("return",w((function(n){return Array.from(new Set([].concat(Object(i.a)(n),Object(i.a)(r),Object(i.a)(c))))})));case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(f.jsx)(j.n,{children:r?Object(f.jsx)(x,{}):Object(f.jsx)(j.c,{jstctn:O.length<6,children:Object(f.jsx)(u.a,{onDragEnd:_,children:O.map((function(e){return Object(f.jsxs)(j.d,{style:"\u0417\u0430\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f"===e.name||"\u0417\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f"===e.name?{display:"none"}:{display:"block"},className:"card",children:[Object(f.jsxs)(j.f,{background:e.background,children:[v(e.name.length,e.name,"",30,"220px"),1===e.order?Object(f.jsx)(b.a,{setLoaded:a,status:1,funnel:O,Url:n,setPupilsList:w}):""]}),Object(f.jsxs)(j.e,{background:e.background,children:[e.minPaidSubscriptionsAmount||0,"\u0440\u0443\u0431."]}),Object(f.jsx)(u.c,{droppableId:"".concat(e._id),children:function(t){return Object(f.jsxs)("div",Object(c.a)(Object(c.a)({className:"droppable-container"},t.droppableProps),{},{ref:t.innerRef,children:[Object(f.jsx)(T,{card:e,pupils:{pupilsList:S,setPupilsList:w},Url:n}),t.placeholder]}))}})]},e._id)}))})})})}}}]);
//# sourceMappingURL=3.6baa984d.chunk.js.map