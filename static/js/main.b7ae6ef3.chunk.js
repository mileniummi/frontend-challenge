(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(t,e,r){t.exports=r(83)},48:function(t,e,r){},50:function(t,e,r){},52:function(t,e,r){},78:function(t,e,r){},80:function(t,e,r){t.exports=r.p+"static/media/error-cat.5e0f3f3b.jpg"},81:function(t,e,r){},83:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),o=r(31),i=r.n(o),c=r(0),u=(r(48),r(7)),l=function(){return a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"header__wrapper"},a.a.createElement(u.b,{to:"/",className:"header__item"},"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"),a.a.createElement(u.b,{to:"/favourites",className:"header__item"},"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438")))},s=function(){return a.a.createElement("div",null,a.a.createElement(l,null),a.a.createElement(c.a,null))},h=r(5),f=(r(50),r(12)),p=n.createContext(null),v=function(t){var e=t.children,r=localStorage.getItem("favouriteCats"),a=r?JSON.parse(r):[],o=Object(n.useState)(a),i=Object(h.a)(o,2),c=i[0],u=i[1];return Object(n.useEffect)(function(){localStorage.setItem("favouriteCats",JSON.stringify(c))},[c]),n.createElement(p.Provider,{value:{favouriteCats:c,addToFavourite:function(t){u(function(e){return[].concat(Object(f.a)(e),[t])})},removeFromFavourite:function(t){u(function(e){return e.filter(function(e){return e.id!==t.id})})}}},e)},d=function(t){var e=t.imageUrl,r=t.imageId,o=t.isFavouriteCat,i=Object(n.useState)(o),c=Object(h.a)(i,2),u=c[0],l=c[1],s=Object(n.useContext)(p),f=s.addToFavourite,v=s.removeFromFavourite;return a.a.createElement("div",{className:"cat"},a.a.createElement("div",{className:"cat__wrapper"},a.a.createElement("img",{alt:"cat",className:"cat__image",src:e}),u?a.a.createElement("svg",{onClick:function(){l(!1),v({id:r,url:e})},className:"cat__heart",width:"40",height:"37",viewBox:"0 0 40 37",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z",fill:"var(--bright-orange)"})):a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{className:"cat__heart",width:"40",height:"37",viewBox:"0 0 40 37",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z",fill:"var(--orange)"})),a.a.createElement("svg",{className:"cat__heart--on-hover",display:"block",width:"40",height:"37",viewBox:"0 0 40 37",xmlns:"http://www.w3.org/2000/svg",onClick:function(){l(!0),f({id:r,url:e})}},a.a.createElement("path",{d:"M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z",fill:"var(--orange)"})))))},m=r(95),y=(r(52),function(){return a.a.createElement("div",{className:"loader"},a.a.createElement(m.a,null),a.a.createElement("div",{className:"loader__text"},"... \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ..."))}),g=r(9),w=r(37),E=r(38),b=r(16),x=r.n(b);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var v={};c(v,a,function(){return this});var d=Object.getPrototypeOf,m=d&&d(d(j([])));m&&m!==e&&r.call(m,a)&&(v=m);var y=p.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e(function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://api.thecatapi.com",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"5683e96f-a755-4589-893f-bb8aecdc8c5e";Object(w.a)(this,t),this.apiPath=e,this.apiKey=r}return Object(E.a)(t,[{key:"fetch",value:function(){var t=Object(g.a)(L().mark(function t(e,r){var n;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("".concat(this.apiPath,"/v1/images/search"),{params:{limit:e,page:r}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",new Error);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"addToFavourite",value:function(){var t=Object(g.a)(L().mark(function t(e){return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("".concat(this.apiPath,"/v1/favourites"),{image_id:e},{headers:{"Content-Type":"application/json","x-api-key":this.apiKey?this.apiKey:""}});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getFavourites",value:function(){var t=Object(g.a)(L().mark(function t(){var e;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(this.apiPath,"/v1/favourites"),{headers:{"x-api-key":this.apiKey?this.apiKey:""}});case 2:return e=t.sent,t.abrupt("return",e.data.map(function(t){return t.image}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),t}();function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var v={};c(v,a,function(){return this});var d=Object.getPrototypeOf,m=d&&d(d(O([])));m&&m!==e&&r.call(m,a)&&(v=m);var y=p.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e(function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var _=function(t){var e=Object(n.useState)(!0),r=Object(h.a)(e,2),a=r[0],o=r[1],i=Object(n.useState)([]),c=Object(h.a)(i,2),u=c[0],l=c[1],s=Object(n.useState)(!1),p=Object(h.a)(s,2),v=p[0],d=p[1],m=new O;return Object(n.useEffect)(function(){o(!0),function(){var e=Object(g.a)(j().mark(function e(){var r;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.fetch(10,t);case 2:(r=e.sent)instanceof Error?(o(!1),d("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432")):(l(function(t){return[].concat(Object(f.a)(t),Object(f.a)(r))}),o(!1));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),{isLoading:a,cats:u,error:v}},C=r(13),N=(r(78),function(t){var e=t.text;return a.a.createElement("div",{className:"error"},a.a.createElement("img",{src:r(80),alt:"error",className:"error__image"}),a.a.createElement("div",{className:"error__text"},e))}),k=function(){var t=Object(n.useState)(1),e=Object(h.a)(t,2),r=e[0],o=e[1],i=_(r),c=i.cats,u=i.isLoading,l=i.error,s=Object(n.useRef)(),f=Object(n.useCallback)(function(t){u||(s.current&&s.current.disconnect(),s.current=new IntersectionObserver(function(t){t[0].isIntersecting&&o(function(t){return t+1})}),t&&s.current.observe(t))},[u]),p=c.map(function(t,e){return c.length===e+1?a.a.createElement("div",{ref:f,key:Object(C.a)()},a.a.createElement(d,{imageUrl:t.url,imageId:t.id,isFavouriteCat:!1})):a.a.createElement(d,{key:Object(C.a)(),imageUrl:t.url,imageId:t.id,isFavouriteCat:!1})});return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"cats"},p),u&&a.a.createElement(y,null),l&&a.a.createElement(N,{text:l}))},S=function(){var t=Object(n.useContext)(p).favouriteCats.map(function(t){return a.a.createElement(d,{key:Object(C.a)(),imageUrl:t.url,imageId:t.id,isFavouriteCat:!0})});return a.a.createElement("div",{className:"wrapper"},t.length?a.a.createElement("div",{className:"cats"},t):a.a.createElement("div",{className:"nothing-to-show"},a.a.createElement("img",{src:"https://cdn2.thecatapi.com/images/1hd.gif",alt:"cat-nothing-to-show"}),"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ...("))},F=function(){return a.a.createElement(v,null,a.a.createElement(c.d,null,a.a.createElement(c.b,{path:"/",element:a.a.createElement(s,null)},a.a.createElement(c.b,{index:!0,element:a.a.createElement(k,null)}),a.a.createElement(c.b,{path:"/favourites",element:a.a.createElement(S,null)}))))};r(81);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,null,a.a.createElement(F,null))))}},[[40,2,1]]]);
//# sourceMappingURL=main.b7ae6ef3.chunk.js.map