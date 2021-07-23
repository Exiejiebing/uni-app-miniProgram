(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/childComp/logout"],{"025c":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"468e":function(t,n,e){"use strict";e.r(n);var o=e("025c"),u=e("c39b");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("6897");var c,i=e("f0c5"),r=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"11aaba88",null,!1,o["a"],c);n["default"]=r.exports},6897:function(t,n,e){"use strict";var o=e("ef5a"),u=e.n(o);u.a},c39b:function(t,n,e){"use strict";e.r(n);var o=e("c532"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=u.a},c532:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("8680"),u={name:"logout",methods:{onClick:function(){var n=this;t.showLoading({title:"",mask:!0}),(0,o.logout)().then((function(e){t.removeStorageSync("token"),n.$store.commit("setIsLogin",!1),t.hideLoading(),setTimeout((function(){t.navigateTo({url:"/pages/login/login"})}),500)}))}}};n.default=u}).call(this,e("543d")["default"])},ef5a:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/profile/childComp/logout-create-component',
    {
        'pages/profile/childComp/logout-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("468e"))
        })
    },
    [['pages/profile/childComp/logout-create-component']]
]);
