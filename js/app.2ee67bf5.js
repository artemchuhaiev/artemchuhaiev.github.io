(function(e){function n(n){for(var r,c,a=n[0],i=n[1],s=n[2],l=0,f=[];l<a.length;l++)c=a[l],u[c]&&f.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==u[a]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},o=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-27cb60c8":"89f46051","chunk-92092ed8":"55db89fa","chunk-f54ff970":"1b3f11db","chunk-2d212bc4":"2a84d91a","chunk-3625a661":"fb561f4f","chunk-62755e54":"5d46a18d","chunk-62c31718":"3da6fe5b","chunk-5c2b1b86":"e183d89b","chunk-230434ec":"78a9cad0","chunk-1f6ef9b4":"e20b0c95","chunk-7b87e910":"5422c741","chunk-5318c694":"d03e1191"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-27cb60c8":1,"chunk-92092ed8":1,"chunk-f54ff970":1,"chunk-3625a661":1,"chunk-62755e54":1,"chunk-62c31718":1,"chunk-5c2b1b86":1,"chunk-230434ec":1,"chunk-1f6ef9b4":1,"chunk-7b87e910":1,"chunk-5318c694":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-27cb60c8":"92ed5e45","chunk-92092ed8":"1857e24f","chunk-f54ff970":"f363d96a","chunk-2d212bc4":"31d6cfe0","chunk-3625a661":"efb91039","chunk-62755e54":"524155b8","chunk-62c31718":"f8161cd5","chunk-5c2b1b86":"89c7ccc6","chunk-230434ec":"046b9b12","chunk-1f6ef9b4":"3b6e27fe","chunk-7b87e910":"1ffe2ab3","chunk-5318c694":"73c75baf"}[e]+".css",u=i.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var s=o[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],l=s.getAttribute("data-href");if(l===r||l===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete c[e],d.parentNode.removeChild(d),t(o)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){c[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+c+")");o.type=r,o.request=c,t[1](o)}u[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"01c9":function(e,n,t){"use strict";var r=t("565e"),c=t.n(r);c.a},"565e":function(e,n,t){},"79f6":function(e,n,t){"use strict";var r=t("aede"),c=t("9530"),u=t.n(c),o=t("cebc"),a=t("ca94"),i=Object(a["a"])(),s=function(e,n){return i.defaultClient.mutate({mutation:e,variables:{input:Object(o["a"])({},n)}}).catch(function(e){throw e})},l=function(e,n){return i.defaultClient.query({query:e,variables:Object(o["a"])({},n)}).catch(function(e){throw e})};function f(){var e=Object(r["a"])(["mutation ($input: LoginInput!) {\n        login(input: $input) {\n            id,\n            accessToken,\n            refreshToken\n        }\n    }"]);return f=function(){return e},e}var d=function(e){return s(u()(f()),e)};function h(){var e=Object(r["a"])(["query ($id: ID!) {\n    userAccessAttributes(id: $id) {\n        version\n        userId\n        attributes {\n            name\n            value\n        }\n    }\n}"]);return h=function(){return e},e}var p=function(e){return l(u()(h()),{id:e})};t.d(n,"a",function(){return d}),t.d(n,"b",function(){return p})},ca94:function(e,n,t){"use strict";t.d(n,"a",function(){return p}),t.d(n,"b",function(){return b});t("96cf");var r=t("3b8d"),c=t("cebc"),u=t("2b0e"),o=t("522d"),a=t("efe7");u["default"].use(o["a"]);var i="access-token",s="refresh-token",l="user-id",f=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"http://localhost:4000/graphql",d=(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS,Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILES_ROOT||f.substr(0,f.indexOf("/graphql")));u["default"].prototype.$filesRoot=d;var h={httpEndpoint:f,wsEndpoint:null,tokenName:i,persisting:!1,websocketsOnly:!1,ssr:!1};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(a["createApolloClient"])(Object(c["a"])({},h,e)),t=n.apolloClient,r=n.wsClient;t.wsClient=r;var u=new o["a"]({defaultClient:t,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return u}function b(e,n){return k.apply(this,arguments)}function k(){return k=Object(r["a"])(regeneratorRuntime.mark(function e(n,t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&t&&(t.id&&localStorage.setItem(l,t.id),t.accessToken&&localStorage.setItem(i,t.accessToken),t.refreshToken&&localStorage.setItem(s,t.refreshToken)),n.wsClient&&Object(a["restartWebsockets"])(n.wsClient),e.prev=2,e.next=5,n.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (login)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}},e,null,[[2,7]])})),k.apply(this,arguments)}},cd49:function(e,n,t){"use strict";t.r(n);t("14c6"),t("08c1"),t("4842"),t("d9fc");var r=t("2b0e"),c=(t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t("1881")),u=t.n(c),o=t("8c4f"),a=t("2f62"),i={features:{}},s={SET_FEATURES:function(e,n){e.features=n}},l={state:i,mutations:s},f=l;r["default"].use(a["a"]);var d=new a["a"].Store({modules:{feature:f},strict:!0}),h=t("79f6"),p=function(){return Promise.all([t.e("chunk-27cb60c8"),t.e("chunk-92092ed8")]).then(t.bind(null,"80ab"))},b=function(){return Promise.all([t.e("chunk-27cb60c8"),t.e("chunk-f54ff970")]).then(t.bind(null,"0c81"))},k=function(){return Promise.all([t.e("chunk-3625a661"),t.e("chunk-62755e54")]).then(t.bind(null,"9408"))},m=function(){return Promise.all([t.e("chunk-3625a661"),t.e("chunk-62c31718")]).then(t.bind(null,"21a6"))},v=function(){return Promise.all([t.e("chunk-5c2b1b86"),t.e("chunk-5318c694")]).then(t.bind(null,"b61f"))},g=function(){return Promise.all([t.e("chunk-5c2b1b86"),t.e("chunk-230434ec"),t.e("chunk-7b87e910")]).then(t.bind(null,"ec95"))},y=function(){return Promise.all([t.e("chunk-5c2b1b86"),t.e("chunk-230434ec"),t.e("chunk-1f6ef9b4")]).then(t.bind(null,"7d80"))},O=function(){return t.e("chunk-2d212bc4").then(t.bind(null,"aa4b"))};r["default"].use(o["a"]);var w=new o["a"]({mode:"history",base:"/",routes:[{path:"/",component:g},{path:"/login",component:p},{path:"/reset-password",component:b},{path:"/tell-us",component:k},{path:"/new-password",component:m},{path:"/profile-settings",component:v},{path:"/dashboard",component:g},{path:"/female-profile",component:y},{path:"/not-found",component:O}]}),E=function(e,n,t){var r=localStorage.getItem("access-token"),c=localStorage.getItem("user-id");r&&c?Object(h["b"])(c).then(function(e){var n=e.data;n&&n.userAccessAttributes&&d.commit("SET_FEATURES",n.userAccessAttributes),t()}):t()};w.beforeEach(function(e,n,t){setTimeout(E,0,e,n,t)});var j,P=w,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view"),t("modals-container")],1)},S=[],T=t("d225"),A=t("308d"),x=t("6bb5"),C=t("4e2b"),N=t("60a3"),R=Object(N["a"])(j=function(e){function n(){return Object(T["a"])(this,n),Object(A["a"])(this,Object(x["a"])(n).apply(this,arguments))}return Object(C["a"])(n,e),n}(N["d"]))||j,I=R,L=(t("01c9"),t("2877")),q=Object(L["a"])(I,_,S,!1,null,null,null),U=q.exports,$=t("ca94");r["default"].config.productionTip=!1,r["default"].use(u.a,{dynamic:!0}),new r["default"]({store:d,router:P,apolloProvider:Object($["a"])(),render:function(e){return e(U)}}).$mount("#app")}});
//# sourceMappingURL=app.2ee67bf5.js.map