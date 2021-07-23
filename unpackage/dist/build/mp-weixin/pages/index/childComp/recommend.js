(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/childComp/recommend"],{"0ad4":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return a}));var o=function(){var n=this,t=n.$createElement;n._self._c},c=[]},"0ae5":function(n,t,e){"use strict";e.r(t);var a=e("0ad4"),o=e("bca6");for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e("5e94");var i,u=e("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"7984ae66",null,!1,a["a"],i);t["default"]=r.exports},"5e94":function(n,t,e){"use strict";var a=e("dc1f"),o=e.n(a);o.a},a42c:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"recommend",props:{list:{type:Array,default:[]}},data:function(){return{isLoad:!1}},methods:{onClick:function(t){n.navigateTo({url:"/pages/goods/detail?id="+t,success:function(n){console.log(n)},fail:function(n){console.log(n)}})},imageLoad:function(){this.isLoad||(this.$emit("imageLoad"),this.isLoad=!0)}}};t.default=e}).call(this,e("543d")["default"])},bca6:function(n,t,e){"use strict";e.r(t);var a=e("a42c"),o=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=o.a},dc1f:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/childComp/recommend-create-component',
    {
        'pages/index/childComp/recommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0ae5"))
        })
    },
    [['pages/index/childComp/recommend-create-component']]
]);
