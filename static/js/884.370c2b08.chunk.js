"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(183),u=e(689),i=e(87),o=e(393),s=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],f=n[1],p=(0,u.UO)().id,d=(0,u.TH)(),l=(0,u.s0)();(0,a.useEffect)((function(){(0,c.FP)(p).then((function(t){f(t)}))}),[p]);return e?(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)("button",{onClick:function(){l(d.state.from)},style:{display:"flex",width:"50",marginRight:"auto"},children:"go back"}),(0,s.jsx)("img",{src:o.Y+e.poster_path,alt:"",width:"300"}),(0,s.jsx)("h1",{children:"Additional information"}),(0,s.jsx)(i.OL,{to:"cast",state:{from:d.state.from},style:{marginLeft:"10"},children:"cast"}),(0,s.jsx)(i.OL,{to:"reviews",state:{from:d.state.from},children:"reviews"}),(0,s.jsx)(u.j3,{})]}):(0,s.jsx)("div",{children:(0,s.jsx)("h1",{children:"Loadind data..."})})}},183:function(t,n,e){e.d(n,{FP:function(){return f},LC:function(){return p},WE:function(){return o},Xn:function(){return d},mv:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3f22dcea9933d1a88e76ca43d3c13944",o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",e=a.length>1?a[1]:void 0,t.next=4,u.Z.get("".concat(n,"?api_key=").concat(i),e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:"",r=o.length>2?o[2]:void 0,t.next=4,u.Z.get("movie/".concat(n).concat(e,"?api_key=").concat(i,"&language=en-US"),r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},393:function(t,n,e){e.d(n,{Y:function(){return r}});var r="https://image.tmdb.org/t/p/w400"}}]);
//# sourceMappingURL=884.370c2b08.chunk.js.map