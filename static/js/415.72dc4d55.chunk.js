"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{368:function(e,n,t){t.d(n,{O:function(){return s}});var r=t(689),a=t(87),c=t(184),u=function(e){var n=e.isActive;return n?"active_card":"card"},s=function(e){var n=e.movies,t=(0,r.TH)();return(0,c.jsx)("ul",{className:"render_List",children:n.map((function(e){return(0,c.jsx)("li",{className:"renderCard",children:(0,c.jsx)(a.OL,{to:"/movies/".concat(e.id),state:{from:t},className:u,children:e.title||e.name})},e.id)}))})}},415:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(183),o=t(368),f=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],p=(0,s.useState)(!1),d=(0,a.Z)(p,2),v=d[0],l=d[1],h=(0,s.useState)(""),m=(0,a.Z)(h,2),g=m[0],x=m[1];return(0,s.useEffect)((function(){(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,(0,i.WE)();case 4:n=e.sent,t=n.results,c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x(e.t0);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Nranding today"}),0!==t.length&&(0,f.jsx)(o.O,{movies:t}),v&&(0,f.jsx)("p",{children:"Loading"}),g&&(0,f.jsx)("p",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})]})}},183:function(e,n,t){t.d(n,{FP:function(){return f},LC:function(){return p},WE:function(){return i},Xn:function(){return d},mv:function(){return o}});var r=t(861),a=t(757),c=t.n(a),u=t(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3f22dcea9933d1a88e76ca43d3c13944",i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",t=a.length>1?a[1]:void 0,e.next=4,u.Z.get("".concat(n,"?api_key=").concat(s),t);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2?i[2]:void 0,e.next=4,u.Z.get("movie/".concat(n).concat(t,"?api_key=").concat(s,"&language=en-US"),r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.72dc4d55.chunk.js.map