!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/js",n(n.s=2)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,u=void 0,u=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(u)?u:String(u)),o)}var i,u}function i(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function u(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}(e,t,"set"),n),n}n.r(t);var a=new WeakMap,s=new WeakMap,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,a,{writable:!0,value:void 0}),i(this,s,{writable:!0,value:void 0}),u(this,a,void 0),u(this,s,void 0),this.isMenuactive=!1,this.handleMenuButtonClick=this.handleMenuButtonClick.bind(this)}var t,n,r;return t=e,(n=[{key:"header",set:function(e){u(this,a,e),this.menu=e.querySelector(".menu")}},{key:"handleMenuButtonClick",value:function(e){var t,n;this.isMenuactive?(e.currentTarget.classList.remove("header__menu-btn_active"),null===(t=this.menu)||void 0===t||t.classList.replace("menu_active","menu_nonactive"),this.isMenuactive=!1):(e.currentTarget.classList.add("header__menu-btn_active"),null===(n=this.menu)||void 0===n||n.classList.replace("menu_nonactive","menu_active"),this.isMenuactive=!0)}}])&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=c},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,u=void 0,u=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(u)?u:String(u)),o)}var i,u}function i(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function u(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,s(e,t,"get"))}function a(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,s(e,t,"set"),n),n}function s(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}n.r(t);var c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap,v=new WeakMap,m=new WeakMap,b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,c,{writable:!0,value:void 0}),i(this,l,{writable:!0,value:void 0}),i(this,f,{writable:!0,value:void 0}),i(this,d,{writable:!0,value:void 0}),i(this,v,{writable:!0,value:100}),i(this,m,{writable:!0,value:150}),this.basketGoods=[{id:"goods_1",name:"Amet minim mollit non deserunt ullamco est sit",sprite:"jacket",price:525,count:1},{id:"goods_2",name:"Amet minim mollit non",sprite:"sneakers",price:525,count:1}]}var t,n,r;return t=e,(n=[{key:"basket",set:function(e){a(this,c,e),a(this,l,e.querySelectorAll(".goods")),a(this,f,e.querySelector("#sub-sum")),a(this,d,e.querySelector("#total-sum")),this.addListeners()}},{key:"addListeners",value:function(){var e=this;Array.from(u(this,l)).forEach((function(t){var n=t.querySelector(".i-number--plus"),r=t.querySelector(".i-number--minus"),o=t.querySelector(".goods__delete-btn");n.addEventListener("click",e.countPlus.bind(e,t)),r.addEventListener("click",e.countMinus.bind(e,t)),o.addEventListener("click",e.deleteGoods.bind(e,t))}))}},{key:"countPlus",value:function(e){var t=e.getAttribute("id"),n=e.querySelector(".i-number");n.value=+n.value+1,this.basketGoods.find((function(e){return e.id===t})).count+=1,this.countGoodsSum(e),this.countTotalSum()}},{key:"countMinus",value:function(e){var t=e.getAttribute("id"),n=e.querySelector(".i-number");n.value=+n.value-1,this.basketGoods.find((function(e){return e.id===t})).count-=1,this.countGoodsSum(e),this.countTotalSum()}},{key:"countGoodsSum",value:function(e){var t=e.getAttribute("id"),n=e.querySelector(".goods__price--sum"),r=this.basketGoods.find((function(e){return e.id===t}));n.innerText="$"+r.count*r.price}},{key:"countTotalSum",value:function(){var e=this.basketGoods.reduce((function(e,t){return e+t.count*t.price}),0);u(this,f).innerText="$"+e,u(this,d).innerText="$"+(e+u(this,v)+u(this,m))}},{key:"deleteGoods",value:function(e){var t=e.getAttribute("id");this.basketGoods=this.basketGoods.filter((function(e){return e.id!==t})),this.countTotalSum(),e.parentNode.removeChild(e)}}])&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=b},function(e,t,n){e.exports=n(3)},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,u=void 0,u=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"),"symbol"===t(u)?u:String(u)),o)}var i,u}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=o((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.env=n(5).default,this.utils=n(6).default,this.classes={HeaderActive:n(0).default,BasketActive:n(1).default},this.components={header:n(7).default,basket:n(8).default},this.helpers={},this.modules={},document.addEventListener("DOMContentLoaded",(function(){document.documentElement.classList.remove("_loading")}))}));e.ProjectApp=new i,e.ProjectApp.components.header(),e.ProjectApp.components.basket()}).call(this,n(4))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=window.environmentObject,o={isMobile:"_mobile"===r.platform,isDesktop:"_desktop"===r.platform,isMac:"_mac"===r.os,isWin:"_win"===r.os,isLinux:"_linux"===r.os,isAndroid:"_android"===r.os,isIOS:"_ios"===r.os,isFF:"_ff"===r.browser,isOpera:"_opera"===r.browser,isYandex:"_yandex"===r.browser,isIE:"_ie"===r.browser,isEdge:"_edge"===r.browser,isChrome:"_chrome"===r.browser,isSafari:"_safari"===r.browser,isLocal:r.isLocal};window.environmentObject=null,delete window.environmentObject,t.default=o},function(e,t,n){"use strict";n.r(t);var r={now:function(){return window.performance&&window.performance.now?this.now=function(){return window.performance.now()}:this.now=function(){return+new Date},this.now()},cubicProgress:function(e){return e=(e=e<0?0:e)>1?1:e,(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},debounce:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var o=this,i=arguments,u=function(){t=null,!r&&e.apply(o,i)},a=r&&!t;clearTimeout(t),t=setTimeout(u,n),a&&e.apply(o,i)}},throttle:function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=!1;function i(){o?(t=arguments,n=this):(e.apply(this,arguments),o=!0,setTimeout((function(){o=!1,t&&(i.apply(n,t),t=n=null)}),r))}return i},formatNumber:function(e){for(var t="",n=(e=e.toString()).length-1,r=0;n>=0;n--,r++)3===r?(r=0,t=e.substr(n,1)+" "+t):t=e.substr(n,1)+t;return t},declOfNum:function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}};t.default=r},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=function(){var e=document.querySelector(".header"),t=new r.default;t.header=e,e.querySelector(".header__menu-btn").addEventListener("click",t.handleMenuButtonClick)}},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=function(){var e=document.querySelector(".basket"),t=new r.default;return t.basket=e,t}}]);