(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e957bec"],{"10a1":function(c,e,s){"use strict";var t=s("2032"),o=s.n(t);o.a},2032:function(c,e,s){},f6da:function(c,e,s){"use strict";s.r(e);var t=function(){var c=this,e=c.$createElement,s=c._self._c||e;return s("div",{staticClass:"sun-demo-checkbox"},[s("sun-nav-bar",{attrs:{title:"Checkbox","left-arrow":""},on:{"click-left":function(e){return c.$router.back()}}}),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("common.basicUsage")))]),s("sun-checkbox",{model:{value:c.checked1,callback:function(e){c.checked1=e},expression:"checked1"}},[c._v(c._s(c.$t("sunCheckbox.checkbox")))])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("common.disabled")))]),s("sun-checkbox",{attrs:{disabled:""},model:{value:c.checked2,callback:function(e){c.checked2=e},expression:"checked2"}},[c._v(c._s(c.$t("sunCheckbox.checkbox")))]),s("sun-checkbox",{attrs:{disabled:""},model:{value:c.checked3,callback:function(e){c.checked3=e},expression:"checked3"}},[c._v(c._s(c.$t("sunCheckbox.checkbox")))])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.customShape")))]),s("sun-checkbox",{attrs:{shape:"square"},model:{value:c.checked4,callback:function(e){c.checked4=e},expression:"checked4"}},[c._v(c._s(c.$t("sunCheckbox.customShape")))])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.customColor")))]),s("sun-checkbox",{attrs:{"checked-color":"#07c160"},model:{value:c.checked5,callback:function(e){c.checked5=e},expression:"checked5"}},[c._v(c._s(c.$t("sunCheckbox.customColor")))])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.customIconSize")))]),s("sun-checkbox",{attrs:{"icon-size":"24px"},model:{value:c.checked6,callback:function(e){c.checked6=e},expression:"checked6"}},[c._v(c._s(c.$t("sunCheckbox.customIconSize")))])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.customIcon")))]),s("sun-checkbox",{scopedSlots:c._u([{key:"icon",fn:function(){return[s("sun-icon",{attrs:{name:"plus"}})]},proxy:!0}]),model:{value:c.checked7,callback:function(e){c.checked7=e},expression:"checked7"}},[c._v(" "+c._s(c.$t("sunCheckbox.customIcon"))+" ")])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.disableLabel")))]),s("sun-checkbox",{attrs:{"label-disabled":""},model:{value:c.checked8,callback:function(e){c.checked8=e},expression:"checked8"}},[c._v(c._s(c.$t("sunCheckbox.checkbox")))])],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.title3")))]),s("sun-checkbox-group",{model:{value:c.result1,callback:function(e){c.result1=e},expression:"result1"}},[s("sun-checkbox",{attrs:{name:"a"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" a")]),s("sun-checkbox",{attrs:{name:"b"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" b")]),s("sun-checkbox",{attrs:{name:"c"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" c")])],1)],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.horizontal")))]),s("sun-checkbox-group",{attrs:{direction:"horizontal"},model:{value:c.result2,callback:function(e){c.result2=e},expression:"result2"}},[s("sun-checkbox",{attrs:{name:"a"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" a")]),s("sun-checkbox",{attrs:{name:"b"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" b")]),s("sun-checkbox",{attrs:{name:"c"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" c")])],1)],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.title4")))]),s("sun-checkbox-group",{attrs:{max:2},model:{value:c.result3,callback:function(e){c.result3=e},expression:"result3"}},[s("sun-checkbox",{attrs:{name:"a"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" a")]),s("sun-checkbox",{attrs:{name:"b"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" b")]),s("sun-checkbox",{attrs:{name:"c"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" c")])],1)],1),s("div",{staticClass:"sun-demo-block"},[s("h2",{staticClass:"sun-demo-nav-title"},[c._v(c._s(c.$t("sunCheckbox.toggleAll")))]),s("sun-checkbox-group",{ref:"checkboxGroup",model:{value:c.result4,callback:function(e){c.result4=e},expression:"result4"}},[s("sun-checkbox",{attrs:{name:"a"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" a")]),s("sun-checkbox",{attrs:{name:"b"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" b")]),s("sun-checkbox",{attrs:{name:"c"}},[c._v(c._s(c.$t("sunCheckbox.checkbox"))+" c")])],1),s("div",{staticStyle:{"margin-top":"10px"}},[s("sun-button",{attrs:{type:"primary"},on:{click:c.checkAll}},[c._v(c._s(c.$t("sunCheckbox.checkAll")))]),s("sun-button",{attrs:{type:"info"},on:{click:c.toggleAll}},[c._v(c._s(c.$t("sunCheckbox.inverse")))])],1)],1)],1)},o=[],n={data:function(){return{checked1:!1,checked2:!1,checked3:!0,checked4:!1,checked5:!1,checked6:!1,checked7:!1,checked8:!1,result1:[],result2:[],result3:[],result4:[]}},methods:{checkAll:function(){this.$refs.checkboxGroup.toggleAll(!0)},toggleAll:function(){this.$refs.checkboxGroup.toggleAll()}}},a=n,u=(s("10a1"),s("2877")),l=Object(u["a"])(a,t,o,!1,null,null,null);e["default"]=l.exports}}]);