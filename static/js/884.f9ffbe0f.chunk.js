"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(A,t,e){e.r(t);var n=e(861),r=e(439),a=e(757),c=e.n(a),u=e(791),s=e(183),o=e(689),i=e(87),f=e(393),p=e(323),d=e(596),h=e(184);t.default=function(){var A=(0,u.useState)(null),t=(0,r.Z)(A,2),a=t[0],l=t[1],x=(0,o.UO)().id,g=(0,o.TH)(),Q=(0,o.s0)(),E=(0,u.useState)(!1),w=(0,r.Z)(E,2),m=w[0],v=w[1],B=(0,u.useState)(""),k=(0,r.Z)(B,2),b=k[0],D=k[1];(0,u.useEffect)((function(){(0,n.Z)(c().mark((function A(){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return v(!0),A.prev=1,A.next=4,(0,s.FP)(x);case 4:t=A.sent,l(t),console.log(t),A.next=12;break;case 9:A.prev=9,A.t0=A.catch(1),D(A.t0);case 12:return A.prev=12,v(!1),A.finish(12);case 15:case"end":return A.stop()}}),A,null,[[1,9,12,15]])})))()}),[x]);return a?(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,h.jsx)("button",{onClick:function(){Q(g.state.from)},style:{display:"flex",width:"50",marginRight:"auto"},children:"go back"}),(0,h.jsx)("img",{src:a.poster_path?f.Y+a.poster_path:e(509),alt:"",width:"200"}),(0,h.jsx)("h1",{children:"Additional information"}),(0,h.jsx)(i.OL,{to:"cast",state:{from:g.state.from},style:{marginLeft:"10"},children:"cast"}),(0,h.jsx)(i.OL,{to:"reviews",state:{from:g.state.from},children:"reviews"}),(0,h.jsx)(o.j3,{}),m&&(0,h.jsx)(p.a,{}),b&&d.Am.error("\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...")]}):(0,h.jsx)("div",{children:(0,h.jsx)("h1",{children:"Loadind data..."})})}},183:function(A,t,e){e.d(t,{FP:function(){return i},LC:function(){return f},WE:function(){return s},Xn:function(){return p},mv:function(){return o}});var n=e(861),r=e(757),a=e.n(r),c=e(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="3f22dcea9933d1a88e76ca43d3c13944",s=function(){var A=(0,n.Z)(a().mark((function A(){var t,e,n,r=arguments;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"trending/movie/day",e=r.length>1?r[1]:void 0,A.next=4,c.Z.get("".concat(t,"?api_key=").concat(u),e);case 4:return n=A.sent,A.abrupt("return",n.data);case 6:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),o=function(){var A=(0,n.Z)(a().mark((function A(t,e){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e);case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(t,e){return A.apply(this,arguments)}}(),i=function(){var A=(0,n.Z)(a().mark((function A(t){var e,n,r,s=arguments;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"",n=s.length>2?s[2]:void 0,A.next=4,c.Z.get("movie/".concat(t).concat(e,"?api_key=").concat(u,"&language=en-US"),n);case 4:return r=A.sent,A.abrupt("return",r.data);case 6:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),f=function(){var A=(0,n.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=A.sent,A.abrupt("return",e.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),p=function(){var A=(0,n.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()},393:function(A,t,e){e.d(t,{Y:function(){return n}});var n="https://image.tmdb.org/t/p/w400"},509:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=884.f9ffbe0f.chunk.js.map