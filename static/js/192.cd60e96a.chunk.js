"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[192],{6895:function(e,n,t){t.d(n,{IQ:function(){return p},Jh:function(){return f},Pg:function(){return u},XT:function(){return c},z1:function(){return h}});var r=t(5861),a=t(7757),o=t.n(a),i=t(2388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="3413619603c71871ad15e482a73e3df2",c=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day?api_key=".concat(s));case 3:if(0!==(n=e.sent).data.results.length){e.next=6;break}throw Error("Please, try againe!");case 6:return e.abrupt("return",n.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),console.log(e.t0.config),!e.t0.response){e.next=16;break}throw Error("Ooops. Something went wrong... Try  again!");case 16:if(!e.t0.request){e.next=20;break}throw Error("Ooops. Something went wrong... Try  again!");case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("No movies found!");case 6:return e.abrupt("return",t.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("No casts found!");case 6:return e.abrupt("return",t.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("No reviews found!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("No movies found!!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},1111:function(e,n,t){t.d(n,{e:function(){return i}});var r=t(7689),a=t(1087),o=t(184),i=function(e){var n=e.movies,t=(0,r.TH)();return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})})}},6192:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r,a,o,i,s=t(5861),c=t(9439),u=t(7757),p=t.n(u),f=t(2791),h=t(1087),l=t(7596),g=t(6895),d=t(168),w=t(6444),v=w.ZP.div(r||(r=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),x=w.ZP.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  // border: none;\n  // outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=w.ZP.form(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=w.ZP.button(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/711/711319.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),k=t(184),y=function(e){var n=e.onChange,t=(0,f.useState)(""),r=(0,c.Z)(t,2),a=r[0],o=r[1];return(0,k.jsx)(v,{children:(0,k.jsxs)(m,{onSubmit:function(e){e.preventDefault(),n(a),o("")},children:[(0,k.jsx)(x,{type:"text",name:"searchQuery",value:a,placeholder:"Search movies",autoComplete:"off",autoFocus:!0,onChange:function(e){o(e.target.value)}}),(0,k.jsx)(b,{type:"submit"})]})})},Z=t(1111),S=t(4608),E=function(){var e,n=(0,f.useState)([]),t=(0,c.Z)(n,2),r=t[0],a=t[1],o=(0,f.useState)(!1),i=(0,c.Z)(o,2),u=i[0],d=i[1],w=(0,h.lr)(),v=(0,c.Z)(w,2),x=v[0],m=v[1],b=null!==(e=x.get("query"))&&void 0!==e?e:"";(0,f.useEffect)((function(){function e(){return(e=(0,s.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,g.z1)(b);case 4:n=e.sent,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,l.Am)(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}b&&function(){e.apply(this,arguments)}()}),[b]);return(0,k.jsxs)("div",{children:[u&&(0,k.jsx)(S.a,{}),(0,k.jsx)(y,{onChange:function(e){m(""!==e?{query:e}:{})}}),r&&(0,k.jsx)(Z.e,{movies:r})]})}}}]);
//# sourceMappingURL=192.cd60e96a.chunk.js.map