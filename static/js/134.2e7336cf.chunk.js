"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{368:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(689),a=n(87),c=n(184),u=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{className:"render_List",children:t.map((function(e){return(0,c.jsx)("li",{className:"renderCard",children:(0,c.jsx)(a.OL,{to:"/movies/".concat(e.id),state:{from:n},children:e.title||e.name})},e.id)}))})}},134:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(323),i=n(368),o=n(791),p=n(87),f=n(183),l=n(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,p.lr)(),d=(0,a.Z)(v,2),h=d[0],m=d[1],x=h.get("query"),g=(0,o.useState)([]),k=(0,a.Z)(g,2),w=k[0],Z=k[1],y=(0,o.useState)(!1),b=(0,a.Z)(y,2),_=b[0],j=b[1],S=(0,o.useState)(""),C=(0,a.Z)(S,2),U=C[0],L=C[1];(0,o.useEffect)((function(){x&&(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,(0,f.mv)(x);case 4:t=e.sent,n=t.results,Z(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),L(e.t0);case 12:return e.prev=12,c(x),j(!1),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[1,9,12,16]])})))()}),[x]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Movies"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({query:n})},className:"form",children:[(0,l.jsx)("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;c(t)},placeholder:"Search"}),(0,l.jsx)("button",{type:"submit",className:"imput_button",children:"search"})]}),0!==w.length&&(0,l.jsx)(i.O,{movies:w}),_&&(0,l.jsx)(s.a,{}),U&&(0,l.jsx)("p",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})]})}},183:function(e,t,n){n.d(t,{FP:function(){return p},LC:function(){return f},WE:function(){return i},Xn:function(){return l},mv:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3f22dcea9933d1a88e76ca43d3c13944",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",n=a.length>1?a[1]:void 0,e.next=4,u.Z.get("".concat(t,"?api_key=").concat(s),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2?i[2]:void 0,e.next=4,u.Z.get("movie/".concat(t).concat(n,"?api_key=").concat(s,"&language=en-US"),r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.2e7336cf.chunk.js.map