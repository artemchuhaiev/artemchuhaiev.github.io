(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11322738"],{"0a53":function(t,e,a){},"1c06":function(t,e,a){},"3b2c":function(t,e,a){},"9d8b":function(t,e,a){"use strict";var i=a("1c06"),s=a.n(i);s.a},b61f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-wrap"},[a("div",[a("Nav")],1),a("div",{staticClass:"settings flex-grow"},[a("div",{staticClass:"settings_top row"}),a("div",{staticClass:"settings_bot row"},[a("form",{staticClass:"settings_form col-4 offset-4",attrs:{action:""}},[a("h2",{staticClass:"settings_title"},[t._v("\n                    Welcome Lina\n                ")]),a("p",{staticClass:"settings_text"},[t._v("\n                    Setting your details here\n                ")]),t._m(0),a("UiInput",{attrs:{placeholder:"First Name",label:"First Name"}}),a("UiInput",{attrs:{placeholder:"Last Name",label:"Last Name"}}),a("UiInput",{attrs:{placeholder:"Region",label:"Region",disabled:"disabled"},model:{value:t.region,callback:function(e){t.region=e},expression:"region"}}),a("UiInput",{attrs:{placeholder:"Email",label:"Email"}})],1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings_avatar"},[a("div",{staticClass:"settings_avatar__label"},[t._v("\n                        Your Photo\n                    ")]),a("img",{staticClass:"settings_avatar__img",attrs:{src:"https://i.gstatvb.com/shpzkl6fl8bs8mcab.75de6a78.png",alt:""}})])}],n=a("d225"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),o=a("9ab4"),u=a("60a3"),b=a("216c"),v=a("b6c6"),p=a("d474"),d=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.region="CIS",t}return Object(l["a"])(e,t),e}(u["c"]);d=o["a"]([Object(u["a"])({components:{Breadcrumbs:v["a"],Nav:b["a"],UiInput:p["a"]}})],d);var h=d,f=h,_=(a("dd8a"),a("2877")),g=Object(_["a"])(f,i,s,!1,null,"778c6f7d",null);e["default"]=g.exports},b6c6:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"back-btn",style:{height:t.height},on:{click:t.onClick}},[a("svg",[a("use",{attrs:{"xlink:href":"/sprite.svg#arrowBack"}})]),a("span",[t._v("\n        "+t._s(t.text)+"\n    ")])])},s=[],n=a("d225"),c=a("b0b4"),r=a("308d"),l=a("6bb5"),o=a("4e2b"),u=a("9ab4"),b=a("60a3"),v=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(c["a"])(e,[{key:"onClick",value:function(){this.$router.back()}}]),e}(b["c"]);u["a"]([Object(b["b"])()],v.prototype,"text",void 0),u["a"]([Object(b["b"])()],v.prototype,"height",void 0),v=u["a"]([b["a"]],v);var p=v,d=p,h=(a("e7ab"),a("2877")),f=Object(h["a"])(d,i,s,!1,null,null,null);e["a"]=f.exports},d474:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input",class:[t.icon,{error:t.errorText},{disabled:t.disabled},{hits:t.hits},{hitsActive:t.hitsActive}]},[t.hits?a("div",{staticClass:"input_hits"},[t._v("\n        "+t._s(t.hits)+"\n    ")]):t._e(),t.label?a("label",[t._v(t._s(t.label))]):t._e(),t.icon?a("div",{staticClass:"input_svg"},[t._t("default")],2):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",attrs:{disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.onInput],focus:function(e){return t.focusInput()},blur:function(e){return t.blurInput()}}}),t.errorText?a("div",{staticClass:"input_error"},[t._v("\n        "+t._s(t.errorText)+"\n    ")]):t._e()])},s=[],n=a("d225"),c=a("b0b4"),r=a("308d"),l=a("6bb5"),o=a("4e2b"),u=a("9ab4"),b=a("60a3"),v=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.hitsActive=!1,t}return Object(o["a"])(e,t),Object(c["a"])(e,[{key:"onInput",value:function(t){this.$emit("input",t.target.value)}},{key:"focusInput",value:function(){this.hitsActive=!0}},{key:"blurInput",value:function(){this.$refs.input.value.length?this.hitsActive=!0:this.hitsActive=!1}}]),e}(b["c"]);u["a"]([Object(b["b"])()],v.prototype,"placeholder",void 0),u["a"]([Object(b["b"])()],v.prototype,"icon",void 0),u["a"]([Object(b["b"])()],v.prototype,"errorText",void 0),u["a"]([Object(b["b"])()],v.prototype,"value",void 0),u["a"]([Object(b["b"])()],v.prototype,"label",void 0),u["a"]([Object(b["b"])()],v.prototype,"disabled",void 0),u["a"]([Object(b["b"])()],v.prototype,"hits",void 0),v=u["a"]([b["a"]],v);var p=v,d=p,h=(a("9d8b"),a("2877")),f=Object(h["a"])(d,i,s,!1,null,null,null);e["a"]=f.exports},dd8a:function(t,e,a){"use strict";var i=a("0a53"),s=a.n(i);s.a},e7ab:function(t,e,a){"use strict";var i=a("3b2c"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-11322738.1c5b3d5a.js.map