(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c57fa942"],{"013f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-center page-login"},[a("div",{staticClass:"login"},[a("div",{staticClass:"company"},[a("div",{staticClass:"company_logo"},[a("svg",[a("use",{attrs:{"xlink:href":"/sprite.svg#logo"}})])]),t._m(0),t._m(1)]),a("form",{staticClass:"login-form"},[a("h2",{staticClass:"login-form_title"},[t._v("\n                Login to our platform\n            ")]),a("UiInput",{attrs:{placeholder:"Email",icon:"svg",errorText:t.errorText},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[t._t("default",[a("svg",[a("use",{attrs:{"xlink:href":"/sprite.svg#letter"}})])])],2),a("UiInputPassword",{attrs:{placeholder:"Password",icon:"svg",errorText:t.errorText},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[t._t("default",[a("svg",[a("use",{attrs:{"xlink:href":"/sprite.svg#lock"}})])])],2),a("UiButton",{attrs:{text:"Login",type:"success",size:"small",width:"stretch"}}),a("button",{staticClass:"login-form_link-password"},[t._v("\n                Forgot password?\n            ")])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"company_title"},[t._v("\n                    Welcome to TrusTech Team\n                ")]),a("p",{staticClass:"company_text"},[t._v("\n                    Let’s grow together! We will make our world better with our professional\n                    skills\n                    and daily moderation support services\n                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company_partner"},[a("div",{staticClass:"company_partner__label"},[t._v("\n                    Main partner\n                ")]),a("img",{attrs:{src:"https://i.gstatvb.com/shpzkl4o2docf2ofr.db9f883c.png",alt:"SocialTech"}})])}],s=a("d225"),i=a("308d"),o=a("6bb5"),c=a("4e2b"),l=a("9ab4"),u=a("60a3"),p=a("d849"),b=a("d474"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input",class:[t.icon,{error:t.errorText}]},[t.icon?a("div",{staticClass:"input_svg"},[t._t("default")],2):t._e(),a("input",{ref:"passwordInput",attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput}}),a("button",{staticClass:"show-password",class:{visible:"password"===t.type},on:{click:function(e){return e.preventDefault(),t.toggleTypeInput(e)}}}),t.errorText?a("div",{staticClass:"input_error"},[t._v("\n        "+t._s(t.errorText)+"\n    ")]):t._e()])},v=[],f=a("b0b4"),h=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.type="password",t}return Object(c["a"])(e,t),Object(f["a"])(e,[{key:"onInput",value:function(t){this.$emit("input",t.target.value)}},{key:"toggleTypeInput",value:function(){"text"===this.type?this.type="password":this.type="text",this.$refs.passwordInput.focus()}}]),e}(u["c"]);l["a"]([Object(u["b"])()],h.prototype,"placeholder",void 0),l["a"]([Object(u["b"])()],h.prototype,"icon",void 0),l["a"]([Object(u["b"])()],h.prototype,"errorText",void 0),l["a"]([Object(u["b"])()],h.prototype,"value",void 0),h=l["a"]([u["a"]],h);var _=h,y=_,m=(a("9d8b"),a("2877")),j=Object(m["a"])(y,d,v,!1,null,null,null),O=j.exports,g=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.email="",t.password="",t.errorText="",t}return Object(c["a"])(e,t),e}(u["c"]);g=l["a"]([Object(u["a"])({components:{UiButton:p["a"],UiInput:b["a"],UiInputPassword:O}})],g);var w=g,x=w,k=(a("50ba"),Object(m["a"])(x,n,r,!1,null,null,null));e["default"]=k.exports},"1c06":function(t,e,a){},"50ba":function(t,e,a){"use strict";var n=a("f87b"),r=a.n(n);r.a},"7d0a":function(t,e,a){},"85f2":function(t,e,a){t.exports=a("ec5b")},"9ab4":function(t,e,a){"use strict";a.d(e,"a",function(){return n});function n(t,e,a,n){var r,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,a,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s<3?r(i):s>3?r(e,a,i):r(e,a))||i);return s>3&&i&&Object.defineProperty(e,a,i),i}},"9d8b":function(t,e,a){"use strict";var n=a("1c06"),r=a.n(n);r.a},ae8b:function(t,e,a){"use strict";var n=a("7d0a"),r=a.n(n);r.a},b0b4:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("85f2"),r=a.n(n);function s(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(t,n.key,n)}}function i(t,e,a){return e&&s(t.prototype,e),a&&s(t,a),t}},d474:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input",class:[t.icon,{error:t.errorText},{disabled:t.disabled},{hits:t.hits},{hitsActive:t.hitsActive}]},[t.hits?a("div",{staticClass:"input_hits"},[t._v("\n        "+t._s(t.hits)+"\n    ")]):t._e(),t.label?a("label",[t._v(t._s(t.label))]):t._e(),t.icon?a("div",{staticClass:"input_svg"},[t._t("default")],2):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",attrs:{disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.onInput],focus:function(e){return t.focusInput()},blur:function(e){return t.blurInput()}}}),t.errorText?a("div",{staticClass:"input_error"},[t._v("\n        "+t._s(t.errorText)+"\n    ")]):t._e()])},r=[],s=a("d225"),i=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),p=a("60a3"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.hitsActive=!1,t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"onInput",value:function(t){this.$emit("input",t.target.value)}},{key:"focusInput",value:function(){this.hitsActive=!0}},{key:"blurInput",value:function(){this.$refs.input.value.length?this.hitsActive=!0:this.hitsActive=!1}}]),e}(p["c"]);u["a"]([Object(p["b"])()],b.prototype,"placeholder",void 0),u["a"]([Object(p["b"])()],b.prototype,"icon",void 0),u["a"]([Object(p["b"])()],b.prototype,"errorText",void 0),u["a"]([Object(p["b"])()],b.prototype,"value",void 0),u["a"]([Object(p["b"])()],b.prototype,"label",void 0),u["a"]([Object(p["b"])()],b.prototype,"disabled",void 0),u["a"]([Object(p["b"])()],b.prototype,"hits",void 0),b=u["a"]([p["a"]],b);var d=b,v=d,f=(a("9d8b"),a("2877")),h=Object(f["a"])(v,n,r,!1,null,null,null);e["a"]=h.exports},d849:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"main-btn",class:[t.type,t.size,t.width,t.disable]},[t._v("\n    "+t._s(t.text)+"\n")])},r=[],s=a("d225"),i=a("308d"),o=a("6bb5"),c=a("4e2b"),l=a("9ab4"),u=a("60a3"),p=function(t){function e(){return Object(s["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(u["c"]);l["a"]([Object(u["b"])()],p.prototype,"text",void 0),l["a"]([Object(u["b"])()],p.prototype,"type",void 0),l["a"]([Object(u["b"])()],p.prototype,"size",void 0),l["a"]([Object(u["b"])()],p.prototype,"width",void 0),l["a"]([Object(u["b"])()],p.prototype,"disable",void 0),p=l["a"]([u["a"]],p);var b=p,d=b,v=(a("ae8b"),a("2877")),f=Object(v["a"])(d,n,r,!1,null,null,null);e["a"]=f.exports},e341:function(t,e,a){var n=a("d13f");n(n.S+n.F*!a("7d95"),"Object",{defineProperty:a("3adc").f})},ec5b:function(t,e,a){a("e341");var n=a("a7d3").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},f87b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c57fa942.567fe46b.js.map