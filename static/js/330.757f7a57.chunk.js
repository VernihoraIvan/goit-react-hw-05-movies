"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[330],{449:function(r,t,e){e.d(t,{PY:function(){return i},Y5:function(){return o},mv:function(){return l},r7:function(){return p},uV:function(){return f}});var n=e(861),a=e(757),c=e.n(a),u=e(243),s="34a3f3c9cce4f4b9cc46f3708ad7a6e9";u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:s,language:"en-US"},u.Z.defaults.headers="Access-Control-Allow-Origin";var i=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/trending/movie/day");case 3:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 8:r.prev=8,r.t0=r.catch(0),window.alert("fetch trend");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(t));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),window.alert(r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(t,"/reviews"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),window.alert(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(t,"/credits"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 8:r.prev=8,r.t0=r.catch(0),window.alert(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie?query=".concat(t));case 3:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 8:r.prev=8,r.t0=r.catch(0),window.alert(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},639:function(r,t,e){e.d(t,{a:function(){return u}});var n=e(691),a="Loader_loader__+lRPl",c=e(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},330:function(r,t,e){e.r(t),e.d(t,{default:function(){return d}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(87),i={trendingList:"Trending_trendingList__Yl5Ur"},o=e(184),p=function(r){var t=r.movies;return(0,o.jsx)("ul",{className:i.trendingList,children:t.map((function(r){var t=r.id,e=r.title;return(0,o.jsx)("li",{className:i.trendingEl,children:(0,o.jsx)(s.rU,{to:"movies/".concat(t),children:e})},t)}))})},f=e(791),l=e(449),v=e(639),d=function(){var r=(0,f.useState)([]),t=(0,a.Z)(r,2),e=t[0],c=t[1],s=(0,f.useState)(!1),i=(0,a.Z)(s,2),d=i[0],h=i[1];return(0,f.useEffect)((function(){h(!0);var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.PY)();case 3:t=r.sent,c(t),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("error",r.t0),c([]);case 11:return r.prev=11,h(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,7,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),d?(0,o.jsx)(v.a,{}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p,{movies:e})})}}}]);
//# sourceMappingURL=330.757f7a57.chunk.js.map