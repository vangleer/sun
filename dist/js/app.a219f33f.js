(function(e){function n(n){for(var o,a,c=n[0],i=n[1],p=n[2],l=0,s=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(n);while(s.length)s.shift()();return u.push.apply(u,p||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==r[i]&&(o=!1)}o&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c0acc":"8c3ed1cf","chunk-2d0cc098":"71a5f328","chunk-2d0d7626":"5042b93a","chunk-2d0d7684":"f15fdb75","chunk-2d0deeee":"3428a558","chunk-2d0df46a":"47af493f","chunk-2d0e1db0":"46e98e8c","chunk-2d0e9575":"f5656eec","chunk-2d0e9752":"a6f2c07f","chunk-2d0f0f58":"2d067bcc","chunk-2d2133e2":"a9bbff2b","chunk-2d225828":"b12a077b","chunk-2d229d4b":"cd93cff6","chunk-2d22cebf":"0d3d1694","chunk-2d22d603":"551879ab"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var p=new Error;u=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",p.name="ChunkLoadError",p.type=o,p.request=u,t[1](p)}r[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var d=p;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2e11":function(e,n,t){},"3aff":function(e,n,t){},"3e0c":function(e,n,t){"use strict";var o=t("2e11"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("router-view")],1)},u=[],a={},c=a,i=t("2877"),p=Object(i["a"])(c,r,u,!1,null,null,null),l=p.exports,d=(t("d3b7"),t("8c4f")),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"sun-demo-home"},[e._m(0),t("div",{staticClass:"sun-demo-home-nav"},e._l(e.homeList,(function(n,o){return t("div",{key:o},[t("div",{staticClass:"sun-demo-home-nav-title"},[e._v(e._s(n.desc))]),e._l(n.group,(function(n,o){return t("div",{key:o,staticClass:"sun-demo-home-nav-group"},[t("div",{staticClass:"sun-demo-home-nav-block",on:{click:function(t){return e.$router.push(n.path)}}},[t("span",[e._v(e._s(n.text))]),t("sun-icon",{attrs:{name:"arrow-right",color:"rgba(69, 90, 100, 0.6)"}})],1)])}))],2)})),0)])},h=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"sun-demo-header"},[t("h1",[t("img",{attrs:{src:"https://img.yzcdn.cn/vant/logo.png",alt:"阳光"}}),t("span",[e._v("Sun")])]),t("p",{staticClass:"sun-demo-home-desc"},[e._v("轻量、可靠的移动端 Vue 组件库")])])}],f={homeList:[{desc:"基础组件",group:[{text:"Button 按钮",path:"/button"},{text:"Cell 单元格",path:"/cell"},{text:"Icon 图标",path:"/icon"},{text:"Layout 布局",path:"/layout"},{text:"Popup 弹出层",path:"/popup"},{text:"Toast 轻提示",path:"/toast"}]},{desc:"表单组件",group:[{text:"Checkbox 复选框",path:"/checkbox"},{text:"Rate 评分",path:"/rate"},{text:"Switch 开关",path:"/switch"},{text:"Message 消息提示",path:"/message"},{text:"PullRefresh 下拉刷新",path:"/pullRefresh"},{text:"Stepper 进步器",path:"/stepper"}]},{desc:"展示组件",group:[{text:"Swipe 轮播图",path:"/swipe"}]},{desc:"导航组件",group:[{text:"NavBar 导航栏",path:"/navBar"},{text:"TabBar 标签栏",path:"/tabBar"}]}]},m=f,b={data:function(){return{homeList:[]}},created:function(){this.homeList=m.homeList}},v=b,k=(t("3e0c"),Object(i["a"])(v,s,h,!1,null,null,null)),g=k.exports;o["default"].use(d["a"]);var x=[{path:"/",name:"Index",component:g},{path:"/button",name:"Button",component:function(){return t.e("chunk-2d0cc098").then(t.bind(null,"4be9"))}},{path:"/cell",name:"Cell",component:function(){return t.e("chunk-2d0e1db0").then(t.bind(null,"7be4"))}},{path:"/icon",name:"Icon",component:function(){return t.e("chunk-2d0d7626").then(t.bind(null,"771a"))}},{path:"/layout",name:"Layout",component:function(){return t.e("chunk-2d0df46a").then(t.bind(null,"88e9"))}},{path:"/popup",name:"Popup",component:function(){return t.e("chunk-2d229d4b").then(t.bind(null,"deb6"))}},{path:"/toast",name:"Toast",component:function(){return t.e("chunk-2d2133e2").then(t.bind(null,"ac9c"))}},{path:"/checkbox",name:"Checkbox",component:function(){return t.e("chunk-2d22d603").then(t.bind(null,"f6da"))}},{path:"/rate",name:"Rate",component:function(){return t.e("chunk-2d0deeee").then(t.bind(null,"8880"))}},{path:"/switch",name:"Switch",component:function(){return t.e("chunk-2d22cebf").then(t.bind(null,"f4fa"))}},{path:"/message",name:"Message",component:function(){return t.e("chunk-2d0e9752").then(t.bind(null,"8e2a"))}},{path:"/pullRefresh",name:"PullRefresh",component:function(){return t.e("chunk-2d0d7684").then(t.bind(null,"774b"))}},{path:"/stepper",name:"Stepper",component:function(){return t.e("chunk-2d0f0f58").then(t.bind(null,"9f1f"))}},{path:"/swipe",name:"Swipe",component:function(){return t.e("chunk-2d225828").then(t.bind(null,"e568"))}},{path:"/navBar",name:"NavBar",component:function(){return t.e("chunk-2d0e9575").then(t.bind(null,"8cb6"))}},{path:"/tabBar",name:"TabBar",component:function(){return t.e("chunk-2d0c0acc").then(t.bind(null,"4390"))}}],y=new d["a"]({routes:x}),w=y,_=t("495e"),C=t.n(_);t("5e29"),t("3aff");o["default"].config.productionTip=!1,o["default"].use(C.a),new o["default"]({router:w,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.a219f33f.js.map