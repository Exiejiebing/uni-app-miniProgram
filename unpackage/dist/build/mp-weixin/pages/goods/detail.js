(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/detail"],{"0fec":function(t,n,o){},"3ef6":function(t,n,o){"use strict";o.r(n);var e=o("fe1f"),c=o("ceda");for(var r in c)"default"!==r&&function(t){o.d(n,t,(function(){return c[t]}))}(r);o("6179");var i,a=o("f0c5"),s=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,"c23dc20e",null,!1,e["a"],i);n["default"]=s.exports},6179:function(t,n,o){"use strict";var e=o("0fec"),c=o.n(e);c.a},ceda:function(t,n,o){"use strict";o.r(n);var e=o("e39d"),c=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=c.a},e39d:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("10a2"),c=o("906d");function r(t){return l(t)||s(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return u(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(t,n):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}var d=function(){o.e("components/swiper/swiper").then(function(){return resolve(o("f3fa"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/tabbar/tabbar").then(function(){return resolve(o("2481"))}.bind(null,o)).catch(o.oe)},p=function(){o.e("components/backtop/backtop").then(function(){return resolve(o("145f"))}.bind(null,o)).catch(o.oe)},h=function(){o.e("pages/goods/childComp/info").then(function(){return resolve(o("ecd2"))}.bind(null,o)).catch(o.oe)},m=function(){o.e("pages/goods/childComp/content").then(function(){return resolve(o("33f2"))}.bind(null,o)).catch(o.oe)},b=function(){o.e("pages/goods/childComp/recommends").then(function(){return resolve(o("9fdd"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("pages/goods/childComp/comments").then(function(){return resolve(o("d01e"))}.bind(null,o)).catch(o.oe)},v=function(){o.e("pages/goods/childComp/bottomnav").then(function(){return resolve(o("c5c2"))}.bind(null,o)).catch(o.oe)},T={name:"detail",onLoad:function(t){this.goods_id=t.id},data:function(){return{goods_id:"",goods:{},recommends:[],comments:[],titles:["概述","评论","相关推荐"],isFixedTabBar:!1,tabbarScrollTop:0,contentScrollTop:0,commentsScrollTop:0,recommendsScrollTop:0,isShowBackTop:!1}},components:{swiper:d,tabbar:f,backtop:p,info:h,content:m,recommends:b,comments:g,bottomnav:v},methods:{_geGoodsData:function(t){var n=this;(0,e.getGoodsDetail)(t).then((function(t){var o,e;n.goods=t.goods,t.goods.pics_url.length||n.goods.pics_url.push({img_url:t.goods.cover_url}),(o=n.recommends).push.apply(o,r(t.like_goods)),(e=n.comments).push.apply(e,r(t.goods.comments))}))},_addCart:function(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.goods_id;(0,c.addCart)(e,o).then((function(o){t.showToast({title:"加入购物车成功"}),n.$store.dispatch("setCartCount")}))},_DOMTop:function(){var n=this;t.createSelectorQuery().in(this).select("#content").boundingClientRect((function(t){n.contentScrollTop=t&&t.top})).exec(),t.createSelectorQuery().in(this).select("#comments").boundingClientRect((function(t){n.commentsScrollTop=t&&t.top})).exec(),t.createSelectorQuery().in(this).select("#recommends").boundingClientRect((function(t){n.recommendsScrollTop=t&&t.top})).exec(),t.createSelectorQuery().in(this).select("#tabbar").boundingClientRect((function(t){n.tabbarScrollTop=t&&t.top})).exec()},tabBarOnClick:function(n){var o=[this.contentScrollTop,this.commentsScrollTop,this.recommendsScrollTop];t.pageScrollTo({scrollTop:parseInt(o[n])-40,duration:300})},imageLoad:function(){var t=this;this.$nextTick((function(){t._DOMTop()}))},addCartOnClick:function(){this._addCart()}},created:function(){this.$store.dispatch("setCartCount")},mounted:function(){var t=this;this._geGoodsData(this.goods_id),this.$nextTick((function(){t._DOMTop()}))},onPageScroll:function(t){var n=t.scrollTop,o=0,e=0,c=0;n>=this.tabbarScrollTop?(this.isFixedTabBar=!0,o=this.contentScrollTop-40,e=this.commentsScrollTop-40,c=this.recommendsScrollTop-40):(this.isFixedTabBar=!1,o=this.contentScrollTop,e=this.commentsScrollTop,c=this.recommendsScrollTop);var r=this.$refs.tabbar.currentIndex;n>=o&&n<e?r=0:n>=e&&n<c?r=1:n>=c&&(r=2),this.$refs.tabbar.currentIndex!=r&&(this.$refs.tabbar.currentIndex=r),this.isShowBackTop=n>=1e3}};n.default=T}).call(this,o("543d")["default"])},e839:function(t,n,o){"use strict";(function(t){o("144a");e(o("66fd"));var n=e(o("3ef6"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},fe1f:function(t,n,o){"use strict";o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return e}));var e={tabbar:function(){return o.e("components/tabbar/tabbar").then(o.bind(null,"2481"))},backtop:function(){return o.e("components/backtop/backtop").then(o.bind(null,"145f"))}},c=function(){var t=this,n=t.$createElement,o=(t._self._c,Object.keys(t.goods));t.$mp.data=Object.assign({},{$root:{g0:o}})},r=[]}},[["e839","common/runtime","common/vendor"]]]);