"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{6895:function(e,r,n){n.d(r,{IQ:function(){return p},Jh:function(){return l},Pg:function(){return u},XT:function(){return c},z1:function(){return h}});var t=n(5861),a=n(7757),o=n.n(a),s=n(2388);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="3413619603c71871ad15e482a73e3df2",c=function(){var e=(0,t.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(i));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Please, try againe!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),console.log(e.t0.config),!e.t0.response){e.next=16;break}throw Error("Ooops. Something went wrong... Try  again!");case 16:if(!e.t0.request){e.next=20;break}throw Error("Ooops. Something went wrong... Try  again!");case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 3:if(0!==(n=e.sent).data.length){e.next=6;break}throw Error("No movies found!");case 6:return e.abrupt("return",n.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:if((n=e.sent).data.cast.length){e.next=6;break}throw Error("No casts found!");case 6:return e.abrupt("return",n.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:if((n=e.sent).data.results.length){e.next=6;break}throw Error("No reviews found!");case 6:return e.abrupt("return",n.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 3:if((n=e.sent).data.results.length){e.next=6;break}throw Error("No movies found!!");case 6:return e.abrupt("return",n.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.response){e.next=15;break}throw Error("Ooops. Something went wrong... Try  again!");case 15:if(!e.t0.request){e.next=19;break}throw Error("Ooops. Something went wrong... Try  again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}()},4305:function(e,r,n){n.r(r),n.d(r,{default:function(){return z}});var t,a,o,s,i,c,u,p=n(5861),l=n(9439),h=n(7757),f=n.n(h),d=n(1087),g=n(7689),x=n(168),v=n(9128),w=n(6444),m=n(184),b=(0,w.ZP)(d.rU)(t||(t=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-left: 100px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),k=function(e){var r=e.to,n=e.children;return(0,m.jsxs)(b,{to:r,children:[(0,m.jsx)(v.jTe,{size:"24"}),n]})},y=n(2791),j=n(7596),Z=n(6895),S=n(653),E=n(4608),_=w.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  gap: 40px;\n  padding-left: 100px;\n"]))),T=w.ZP.h2(o||(o=(0,x.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),O=w.ZP.p(s||(s=(0,x.Z)(["\n  font-size: 18px;\n  margin-bottom: 20px;\n"]))),P=w.ZP.h3(i||(i=(0,x.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),U=w.ZP.div(c||(c=(0,x.Z)(["\n  padding: 40px 0 40px 100px;\n  border-bottom: solid #e6b0aa;\n"]))),q=w.ZP.li(u||(u=(0,x.Z)(["\n  padding-bottom: 10px;\n  font-size: 20px;\n\n  :hover {\n    text-decoration: underline;\n    color: #e6b0aa;\n  }\n"]))),z=function(){var e,r,n=null!==(e=null===(r=(0,g.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",t=(0,g.UO)().movieId,a=(0,y.useState)([]),o=(0,l.Z)(a,2),s=o[0],i=o[1];return(0,y.useEffect)((function(){function e(){return(e=(0,p.Z)(f().mark((function e(){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.Pg)(t);case 3:r=e.sent,i(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,j.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,m.jsxs)("main",{children:[(0,m.jsx)(k,{to:n,children:"Go back"}),(0,m.jsxs)(_,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w300"+s.poster_path:S,width:300,alt:s.title})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(T,{children:[s.title," (",s.release_date?s.release_date.slice(0,4):" No year",")"]}),(0,m.jsxs)(O,{children:["User Score:"," ",s.vote_average?Math.floor(10*s.vote_average).toFixed(0):"","%"]}),(0,m.jsx)(P,{children:" Overview"}),(0,m.jsx)(O,{children:s.overview}),(0,m.jsx)(P,{children:"Genres"}),(0,m.jsx)(O,{children:s.genres?s.genres.map((function(e){return e.name})).join(" "):"Genre not specified"})]})]}),(0,m.jsxs)(U,{children:[(0,m.jsx)(T,{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)(q,{children:(0,m.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)(q,{children:(0,m.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,m.jsx)(y.Suspense,{fallback:(0,m.jsx)(E.a,{}),children:(0,m.jsx)(g.j3,{})})]})}},653:function(e,r,n){e.exports=n.p+"static/media/posterMovie.6b8cde30e3594f24c7af.png"}}]);
//# sourceMappingURL=305.2ae1a7eb.chunk.js.map