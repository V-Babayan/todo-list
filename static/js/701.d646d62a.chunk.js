"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[701],{1297:function(n,e,t){t.d(e,{Z:function(){return f}});var r,o=t(1413),i=t(5987),c=t(2791),a=t(168),u=t(6444).ZP.input(r||(r=(0,a.Z)(["\n  width: 100%;\n\n  border-radius: 3px;\n  border: 1px solid #7aa7c7;\n  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;\n  padding: 8px 0.8em;\n\n  font-size: 13px;\n  line-height: 1.15385;\n  color: #39739d;\n\n  transition: all 0.2s linear;\n\n  background-color: #e1ecf4;\n\n  &:hover,\n  &:focus {\n    background-color: #b3d3ea;\n    color: #2c5777;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n  }\n\n  &:active {\n    background-color: #a0c7e4;\n    box-shadow: none;\n    color: #2c5777;\n  }\n"]))),l=t(184),s=["value"],d=function(n){var e=n.value,t=void 0===e?"":e,r=(0,i.Z)(n,s);return(0,l.jsx)(u,(0,o.Z)({value:t},r))},f=(0,c.memo)(d)},5330:function(n,e,t){t.d(e,{Z:function(){return v}});var r,o,i=t(1413),c=t(2791),a=t(1297),u=t(168),l=t(6444),s=l.ZP.select(r||(r=(0,u.Z)(["\n  border-radius: 3px;\n  border: 1px solid #7aa7c7;\n  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;\n  padding: 8px 0.8em;\n\n  font-size: 13px;\n  line-height: 1.15385;\n  color: #39739d;\n  text-align: center;\n\n  transition: all 0.2s linear;\n\n  background-color: #e1ecf4;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #b3d3ea;\n    color: #2c5777;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n  }\n\n  &:active {\n    background-color: #a0c7e4;\n    box-shadow: none;\n    color: #2c5777;\n  }\n"]))),d=t(184),f=function(n){var e=n.defaultTitle,t=n.options,r=void 0===t?[]:t,o=n.setValue,i=n.value;return(0,d.jsxs)(s,{value:i,onChange:function(n){return o(n.target.value)},children:[(0,d.jsx)("option",{disabled:!0,children:e}),r.map((function(n){var e=n.value,t=n.name;return(0,d.jsx)("option",{value:e,children:t},e)}))]})},p=(0,c.memo)(f),x=l.ZP.form(o||(o=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n  margin: 20px 0;\n  align-items: center;\n"]))),h=t(191),g=function(n){var e=n.filter,t=n.setFilter,r=(0,c.useCallback)((function(n){return t((function(e){return(0,i.Z)((0,i.Z)({},e),{},{query:n.target.value})}))}),[t]),o=(0,c.useCallback)((function(n){return t((function(e){return(0,i.Z)((0,i.Z)({},e),{},{sort:n})}))}),[t]);return(0,d.jsxs)(x,{onSubmit:function(n){return n.preventDefault()},children:[(0,d.jsx)(a.Z,{value:e.query,onChange:r,placeholder:"Search..."}),(0,d.jsx)(p,{options:h.YM,defaultTitle:"Sorting by",value:e.sort,setValue:o})]})},v=(0,c.memo)(g)},6720:function(n,e,t){t.d(e,{EH:function(){return f},Gb:function(){return h},Gq:function(){return d},LP:function(){return p},Or:function(){return g},wJ:function(){return x}});var r,o,i,c,a,u,l=t(168),s=t(6444),d=s.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),f=s.ZP.fieldset(o||(o=(0,l.Z)(["\n  border: 1px solid #39739d;\n  border-radius: 5px;\n  padding: 10px;\n"]))),p=s.ZP.legend(i||(i=(0,l.Z)(["\n  color: #39739d;\n"]))),x=s.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),h=s.ZP.div(a||(a=(0,l.Z)(["\n  align-self: stretch;\n  display: flex;\n  justify-content: space-around;\n"]))),g=s.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n"])))},8547:function(n,e,t){t.d(e,{Z:function(){return m}});var r,o,i,c,a=t(2791),u=t(168),l=t(6444),s=(0,l.F4)(r||(r=(0,u.Z)(["\n  0%{\n    opacity: 0;\n  }\n  100%{\n    opacity: 1;\n  }\n"]))),d=(0,l.F4)(o||(o=(0,u.Z)(["\n  0%{\n    transform: scale(0);\n  }\n  100%{\n    transform: scale(1);\n  }\n"]))),f=l.ZP.div(i||(i=(0,u.Z)(["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #00000088;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &.entering {\n    animation: "," 0.5s linear;\n  }\n\n  &.entering > div {\n    animation: "," 0.5s linear;\n  }\n  &.exiting {\n    animation: "," 0.5s linear reverse;\n  }\n  &.exiting > div {\n    animation: "," 0.5s linear reverse;\n  }\n"])),s,d,s,d),p=l.ZP.div(c||(c=(0,u.Z)(["\n  padding: 20px;\n  border-radius: 12px;\n  width: 50vw;\n  opacity: 1;\n\n  background: #ffffff;\n"]))),x=t(5090),h=t(2381),g=t(7340),v=t(184),Z=function(n){var e=n.children,t=(0,a.useRef)(null),r=(0,g.d)(),o=r.modal,i=r.toggleModal,c=function(n){n.stopPropagation(),i(),h.Z.setCurrentTodo({})};return(0,v.jsx)(x.ZP,{nodeRef:t,in:o,timeout:500,mountOnEnter:!0,unmountOnExit:!0,children:function(n){return(0,v.jsx)(f,{ref:t,onClick:c,className:"".concat(n),children:(0,v.jsx)(p,{onClick:function(n){return n.stopPropagation()},children:e})})}})},m=(0,a.memo)(Z)},4625:function(n,e,t){t.d(e,{Z:function(){return B}});var r,o,i,c,a,u,l,s=t(2791),d=t(7689),f=t(191),p=t(32),x=t(168),h=t(6444),g=h.ZP.li(r||(r=(0,x.Z)(['\n  padding: 10px;\n  padding-left: 30px;\n\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 10px;\n  background: #fff;\n  border-radius: 8px;\n  position: relative;\n  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 20px;\n    border-radius: 8px 0 0 8px;\n\n    background: ',";\n  }\n"])),(function(n){var e=n.priority,t=n.theme;return t.priorityColors[e]||t.primary.violet})),v=h.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n  flex: 1 1 auto;\n  justify-content: space-between;\n"]))),Z=h.ZP.h2(i||(i=(0,x.Z)(["\n  font-size: 2em;\n  font-weight: 600;\n  color: #000000;\n  ","\n\n  margin-bottom: 5px;\n"])),(function(n){return n.completed?"text-decoration: line-through;":""})),m=h.ZP.p(c||(c=(0,x.Z)(["\n  color: #2e2e2e;\n  ","\n"])),(function(n){return n.completed?"text-decoration: line-through;":""})),b=h.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  flex: 0 0 auto;\n  gap: 10px;\n  align-items: flex-end;\n"]))),j=h.ZP.p(u||(u=(0,x.Z)(['\n  color: #de1f85;\n\n  &:before {\n    content: "','";\n    color: #2e2e2e;\n  }\n'])),(function(n){return n.content||""})),y=t(1413),k=t(5987),w=h.ZP.div(l||(l=(0,x.Z)(["\n  position: relative;\n  height: 20px;\n  flex: 0 0 20px;\n\n  border: 2px solid #000000;\n  border-radius: 5px;\n\n  cursor: pointer;\n  transition: background 0.2s linear;\n\n  & > svg {\n    position: absolute;\n    bottom: 3px;\n    left: 2px;\n  }\n\n  &:hover {\n    background: #c4c4c4;\n  }\n"]))),C=t(184),P=function(){return(0,C.jsx)("svg",{viewBox:"180 70 128 99",fill:"#1fde78",strokeWidth:"5",width:"20",stroke:"#000000",children:(0,C.jsx)("path",{d:"M 185.333 118 L 180 130.667 L 216.333 169 L 308 76 L 302.333 70 L 216.333 143.333 L 185.333 118 Z"})})},L=["completed"],T=function(n){var e=n.completed,t=(0,k.Z)(n,L);return(0,C.jsx)(w,(0,y.Z)((0,y.Z)({},t),{},{children:e&&(0,C.jsx)(P,{})}))},S=(0,s.memo)(T),M=t(1454),O=t(9968),q=t(2381),D=t(7340),z=(0,p.Pi)((function(n){var e=n.item;console.log("Item: ",e.id);var t=(0,d.TH)(),r=e.title,o=e.completed,i=e.description,c=e.created,a=e.expected,u=e.priority,l=(0,D.d)().toggleModal,p=(0,s.useCallback)((function(){q.Z.setCurrentTodo(e),l()}),[e]),x=(0,s.useCallback)((function(){q.Z.setCurrentTodo(e),q.Z.recoverTodo(t.pathname)}),[e,t.pathname]),h=(0,s.useCallback)((function(){return q.Z.toggleCompleted(e)}),[e]);return(0,C.jsxs)(g,{priority:u,children:[(0,C.jsx)(S,{onClick:h,completed:o}),(0,C.jsxs)(v,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(Z,{completed:o,children:r}),(0,C.jsx)(m,{completed:o,children:i})]}),(c||a)&&(0,C.jsxs)(b,{children:[c&&(0,C.jsx)(j,{content:"Created by: ",children:(0,O.L)(c)}),a&&(0,C.jsx)(j,{content:"Expected by: ",children:(0,O.L)(a)})]})]}),(0,C.jsx)(M.Z,{onClick:p,children:t.pathname===f.nB.TRASH?"Delete":"Change"}),t.pathname!==f.nB.TODOS&&(0,C.jsx)(M.Z,{onClick:x,children:"Recover"})]})})),E=t(7894),F=function(n){var e=n.todos,t=(0,d.TH)();return Object.keys(e).length?(0,C.jsx)("ul",{children:e.map((function(n){return(0,C.jsx)(z,{item:n},n.id)}))}):(0,C.jsx)(E.X,{children:f.ty[t.pathname]})},B=(0,s.memo)(F)},7894:function(n,e,t){t.d(e,{X:function(){return i}});var r,o=t(168),i=t(6444).ZP.h1(r||(r=(0,o.Z)(["\n  text-align: center;\n  font-size: 2em;\n  font-weight: 700;\n"])))},9968:function(n,e,t){t.d(e,{L:function(){return o},U:function(){return r}});var r=function(n){if(!n)throw new Error("Date is required for converting process.");return n.toISOString().slice(0,10)},o=function(n){return n.toLocaleString("en-GB").slice(0,10)}},8052:function(n,e,t){t.d(e,{k:function(){return c}});var r=t(3433),o=t(2791),i=function(n){var e={high:1,medium:2,low:3};return e[n]?e[n]:0},c=function(n,e){var t=n.sort,c=n.query,a=function(n,e){return(0,o.useMemo)((function(){switch(n){case"title":case"description":return(0,r.Z)(e).sort((function(e,t){var r;return null===(r=e[n])||void 0===r?void 0:r.localeCompare(t[n])}));case"created":case"expected":return(0,r.Z)(e).sort((function(e,t){return Date.parse(e[n])-Date.parse(t[n])}));case"priority":return(0,r.Z)(e).sort((function(e,t){return i(e[n])-i(t[n])}));default:return e}}),[n,e])}(t,e);return(0,o.useMemo)((function(){return a.filter((function(n){var e;return null===(e=n.title)||void 0===e?void 0:e.toLowerCase().includes(c.toLowerCase())}))}),[c,a])}},6701:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o=t(9439),i=t(2791),c=t(8052),a=t(5330),u=t(2381),l=t(4625),s=t(8547),d=t(6720),f=t(1454),p=t(168),x=t(6444).ZP.h2(r||(r=(0,p.Z)(["\n  text-align: center;\n  margin: 10px 0 50px;\n  font-size: 30px;\n"]))),h=t(7340),g=t(184),v=function(){var n=(0,h.d)().toggleModal;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{children:"Are you sure you want to delete?"}),(0,g.jsxs)(d.Gb,{children:[(0,g.jsx)(f.Z,{onClick:function(){u.Z.delete(),n()},children:"Yes"}),(0,g.jsx)(f.Z,{onClick:function(){return n()},children:"No"})]})]})},Z=(0,t(32).Pi)((function(){var n=(0,i.useState)({sort:"",query:""}),e=(0,o.Z)(n,2),t=e[0],r=e[1],d=(0,c.k)(t,u.Z.trash);return(0,g.jsxs)("div",{children:[(0,g.jsx)(a.Z,{filter:t,setFilter:r}),(0,g.jsx)(l.Z,{todos:d}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(v,{})})]})}))}}]);
//# sourceMappingURL=701.d646d62a.chunk.js.map