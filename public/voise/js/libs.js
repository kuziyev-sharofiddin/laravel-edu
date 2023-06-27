/*! crit-tech v0.0.1 | (c) 2020 RUSTAM KHASANOV | https://github.com/icid5post */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)})([(function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,(function(){j(!0)})):document.addEventListener(x.startEvent,(function(){j(!0)})),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)((function(){(0,b.default)(w,x.once)}),x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}}),(function(e,t){}),,,,,(function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,(function(){return this})())}),(function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,(function(){return this})())}),(function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()}))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}}),(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=(function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}})(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=(function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e})();t.default=new s}),(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){n(e,i+o,t)}))};t.default=o}),(function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=a}),(function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a}),(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n}),(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n})])}));
/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)})((function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(c,d){return function(){return d!==b&&a.fn.datepicker.deprecated(d),this[c].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,(function(a,b){b in d&&(c[b]=d[b])})),c}}var j=(function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;c<d;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}})(),k=function(b,c){a.data(b,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",(function(a,b){return Number(b)+1})),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,(function(c,d){if(b===c||-1!==a.inArray(b,d.names))return b=c,!1})),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;return a(c).length>0}catch(a){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),!0!==e.multidate&&(e.multidate=Number(e.multidate)||!1,!1!==e.multidate&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-1/0&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-1/0),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,(function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)}));var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,(function(a){return/^auto|left|right|top|bottom$/.test(a)})),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,(function(a){return/^left|right$/.test(a)})),e.orientation.x=i[0]||"auto",i=a.grep(h,(function(a){return/^top|bottom$/.test(a)})),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=r.parseDate(e.defaultViewDate,g,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy((function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()}),this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};!0===this.o.showOnFocus&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy((function(a){this._focused_from=a.target}),this)}],[this.element,{blur:a.proxy((function(a){this._focused_from=a.target}),this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy((function(a){this.update(a.date)}),this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:a.proxy(this.dayCellClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy((function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()}),this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy((function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)}),this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,(function(a){return new Date(a)}))},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,(function(a){return r.formatDate(a,c,d)})).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=a(this.o.container),e=d.width(),f="body"===this.o.container?a(document).scrollTop():d.scrollTop(),g=d.offset(),h=[0];this.element.parents().each((function(){var b=a(this).css("z-index");"auto"!==b&&0!==Number(b)&&h.push(Number(b))}));var i=Math.max.apply(Math,h)+this.o.zIndexOffset,j=this.component?this.component.parent().offset():this.element.offset(),k=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),m=j.left-g.left,n=j.top-g.top;"body"!==this.o.container&&(n+=f),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(m-=b-l)):j.left<0?(this.picker.addClass("datepicker-orient-left"),m-=j.left-10):m+b>e?(this.picker.addClass("datepicker-orient-right"),m+=l-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var o,p=this.o.orientation.y;if("auto"===p&&(o=-f+n-c,p=o<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?n-=c+parseInt(this.picker.css("padding-top")):n+=k,this.o.rtl){var q=e-(m+l);this.picker.css({top:n,right:q,zIndex:i})}else this.picker.css({top:n,left:m,zIndex:i});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy((function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)}),this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy((function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)}),this)),c=a.grep(c,a.proxy((function(a){return!this.dateWithinRange(a)||!a}),this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)}},fillMonths:function(){for(var a,b=this._utc_to_local(this.viewDate),c="",d=0;d<12;d++)a=b&&b.getMonth()===d?" focused":"",c+='<span class="month'+a+'">'+q[this.o.language].monthsShort[d]+"</span>";this.picker.find(".datepicker-months td").html(c)},setRange:function(b){b&&b.length?this.range=a.map(b,(function(a){return a.valueOf()})):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i){for(var j,k,l,m="",n=e/10,o=this.picker.find(c),p=Math.floor(f/e)*e,q=p+9*n,r=Math.floor(this.viewDate.getFullYear()/n)*n,s=a.map(this.dates,(function(a){return Math.floor(a.getUTCFullYear()/n)*n})),t=p-n;t<=q+n;t+=n)j=[d],k=null,t===p-n?j.push("old"):t===q+n&&j.push("new"),-1!==a.inArray(t,s)&&j.push("active"),(t<g||t>h)&&j.push("disabled"),t===r&&j.push("focused"),i!==a.noop&&(l=i(new Date(t,0,1)),l===b?l={}:"boolean"==typeof l?l={enabled:l}:"string"==typeof l&&(l={classes:l}),!1===l.enabled&&j.push("disabled"),l.classes&&(j=j.concat(l.classes.split(/\s+/))),l.tooltip&&(k=l.tooltip)),m+='<span class="'+j.join(" ")+'"'+(k?' title="'+k+'"':"")+">"+t+"</span>";o.find(".datepicker-switch").text(p+"-"+q),o.find("td").html(m)},fill:function(){var e,f,g=new Date(this.viewDate),h=g.getUTCFullYear(),i=g.getUTCMonth(),j=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,k=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,m=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,n=q[this.o.language].today||q.en.today||"",o=q[this.o.language].clear||q.en.clear||"",p=q[this.o.language].titleFormat||q.en.titleFormat,s=d(),t=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&s>=this.o.startDate&&s<=this.o.endDate&&!this.weekOfDateIsDisabled(s);if(!isNaN(h)&&!isNaN(i)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(g,p,this.o.language)),this.picker.find("tfoot .today").text(n).css("display",t?"table-cell":"none"),this.picker.find("tfoot .clear").text(o).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var u=c(h,i,0),v=u.getUTCDate();u.setUTCDate(v-(u.getUTCDay()-this.o.weekStart+7)%7);var w=new Date(u);u.getUTCFullYear()<100&&w.setUTCFullYear(u.getUTCFullYear()),w.setUTCDate(w.getUTCDate()+42),w=w.valueOf();for(var x,y,z=[];u.valueOf()<w;){if((x=u.getUTCDay())===this.o.weekStart&&(z.push("<tr>"),this.o.calendarWeeks)){var A=new Date(+u+(this.o.weekStart-x-7)%7*864e5),B=new Date(Number(A)+(11-A.getUTCDay())%7*864e5),C=new Date(Number(C=c(B.getUTCFullYear(),0,1))+(11-C.getUTCDay())%7*864e5),D=(B-C)/864e5/7+1;z.push('<td class="cw">'+D+"</td>")}y=this.getClassNames(u),y.push("day");var E=u.getUTCDate();this.o.beforeShowDay!==a.noop&&(f=this.o.beforeShowDay(this._utc_to_local(u)),f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1===f.enabled&&y.push("disabled"),f.classes&&(y=y.concat(f.classes.split(/\s+/))),f.tooltip&&(e=f.tooltip),f.content&&(E=f.content)),y=a.isFunction(a.uniqueSort)?a.uniqueSort(y):a.unique(y),z.push('<td class="'+y.join(" ")+'"'+(e?' title="'+e+'"':"")+' data-date="'+u.getTime().toString()+'">'+E+"</td>"),e=null,x===this.o.weekEnd&&z.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(z.join(""));var F=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",G=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?F:h).end().find("tbody span").removeClass("active");if(a.each(this.dates,(function(a,b){b.getUTCFullYear()===h&&G.eq(b.getUTCMonth()).addClass("active")})),(h<j||h>l)&&G.addClass("disabled"),h===j&&G.slice(0,k).addClass("disabled"),h===l&&G.slice(m+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var H=this;a.each(G,(function(c,d){var e=new Date(h,c,1),f=H.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1!==f.enabled||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)}))}this._fill_yearsView(".datepicker-years","year",10,h,j,l,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,h,j,l,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,h,j,l,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth(),f=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,g=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,i=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,j=1;switch(this.viewMode){case 4:j*=10;case 3:j*=10;case 2:j*=10;case 1:a=Math.floor(d/j)*j<=f,b=Math.floor(d/j)*j+j>h;break;case 0:a=d<=f&&e<=g,b=d>=h&&e>=i}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),f=1,1===this.viewMode?(h=e.parent().find("span").index(e),g=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h)):(h=0,g=Number(e.text()),this.viewDate.setUTCFullYear(g)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(g,h,f)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(b){var c=a(b.currentTarget),d=c.data("date"),e=new Date(d);this.o.updateViewDate&&(e.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),e.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(e)},navArrowsClick:function(b){var c=a(b.currentTarget),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):!1===this.o.multidate?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;j<i;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,(function(a){return e(b,a)})).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(40!==a.keyCode&&27!==a.keyCode||(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"))&&this._trigger("changeYear",this.viewDate):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,(function(a){return a.jquery?a[0]:a})),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,(function(b){return a.data(b,"datepicker")})),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,(function(a){return a.getUTCDate()})),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,(function(a){return a.valueOf()}));a.each(this.pickers,(function(a,c){c.setRange(b)}))},clearDates:function(){a.each(this.pickers,(function(a,b){b.clearDates()}))},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,(function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)})),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;i<j&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,(function(a){a.destroy()})),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each((function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))})),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,e,f,g){function h(a,b){return!0===b&&(b=10),a<100&&(a+=2e3)>(new Date).getFullYear()+b&&(a-=100),a}function i(){var a=this.slice(0,j[n].length),b=j[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!c)return b;if(c instanceof Date)return c;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(c,e,f);var j,l,m,n,o,p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},s={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(c in s&&(c=s[c]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)){for(j=c.match(/([\-+]\d+)([dmwy])/gi),c=new Date,n=0;n<j.length;n++)l=j[n].match(/([\-+]\d+)([dmwy])/i),m=Number(l[1]),o=p[l[2].toLowerCase()],c=k.prototype[o](c,m);return k.prototype._zero_utc_time(c)}j=c&&c.match(this.nonpunctuation)||[];var t,u,v={},w=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(a,b){return a.setUTCFullYear(g?h(b,g):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};x.yy=x.yyyy,x.M=x.MM=x.mm=x.m,x.dd=x.d,c=d();var y=e.parts.slice();if(j.length!==y.length&&(y=a(y).filter((function(b,c){return-1!==a.inArray(c,w)})).toArray()),j.length===y.length){var z;for(n=0,z=y.length;n<z;n++){if(t=parseInt(j[n],10),l=y[n],isNaN(t))switch(l){case"MM":u=a(q[f].months).filter(i),t=a.inArray(u[0],q[f].months)+1;break;case"M":u=a(q[f].monthsShort).filter(i),t=a.inArray(u[0],q[f].monthsShort)+1}v[l]=t}var A,B;for(n=0;n<w.length;n++)(B=w[n])in v&&!isNaN(v[B])&&(A=new Date(c),x[B](A,v[B]),isNaN(A)||(c=A))}return c},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},
headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+o.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+o.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.9.0",a.fn.datepicker.deprecated=function(a){var b=window.console;b&&b.warn&&b.warn("DEPRECATED: "+a)},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',(function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))})),a((function(){n.call(a('[data-provide="datepicker-inline"]'))}))}));
!(function(a){a.fn.datepicker.dates.ru={days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",format:"dd.mm.yyyy",weekStart:1,monthsTitle:"Месяцы"}})(jQuery);
/*!
 * Bootstrap-select v1.13.14 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!(function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e)})):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)})(this,(function(e){!(function(z){"use strict";var d=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],e={"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,a=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function v(e,t){var i=e.nodeName.toLowerCase();if(-1!==z.inArray(i,t))return-1===z.inArray(i,r)||Boolean(e.nodeValue.match(l)||e.nodeValue.match(a));for(var s=z(t).filter((function(e,t){return t instanceof RegExp})),n=0,o=s.length;n<o;n++)if(i.match(s[n]))return!0;return!1}function P(e,t,i){if(i&&"function"==typeof i)return i(e);for(var s=Object.keys(t),n=0,o=e.length;n<o;n++)for(var r=e[n].querySelectorAll("*"),l=0,a=r.length;l<a;l++){var c=r[l],d=c.nodeName.toLowerCase();if(-1!==s.indexOf(d))for(var h=[].slice.call(c.attributes),p=[].concat(t["*"]||[],t[d]||[]),u=0,f=h.length;u<f;u++){var m=h[u];v(m,p)||c.removeAttribute(m.nodeName)}else c.parentNode.removeChild(c)}}"classList"in document.createElement("_")||(function(e){if("Element"in e){var t="classList",i="prototype",s=e.Element[i],n=Object,o=function(){var i=z(this);return{add:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.addClass(e)},remove:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.removeClass(e)},toggle:function(e,t){return i.toggleClass(e,t)},contains:function(e){return i.hasClass(e)}}};if(n.defineProperty){var r={get:o,enumerable:!0,configurable:!0};try{n.defineProperty(s,t,r)}catch(e){void 0!==e.number&&-2146823252!==e.number||(r.enumerable=!1,n.defineProperty(s,t,r))}}else n[i].__defineGetter__&&s.__defineGetter__(t,o)}})(window);var t,c,i=document.createElement("_");if(i.classList.add("c1","c2"),!i.classList.contains("c2")){var s=DOMTokenList.prototype.add,n=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,s.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,n.bind(this))}}if(i.classList.toggle("c3",!1),i.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:o.call(this,e)}}function h(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==c.call(e))throw new TypeError;var i=t.length,s=String(e),n=s.length,o=1<arguments.length?arguments[1]:void 0,r=o?Number(o):0;r!=r&&(r=0);var l=Math.min(Math.max(r,0),i);if(i<n+l)return!1;for(var a=-1;++a<n;)if(t.charCodeAt(l+a)!=s.charCodeAt(a))return!1;return!0}function O(e,t){var i,s=e.selectedOptions,n=[];if(t){for(var o=0,r=s.length;o<r;o++)(i=s[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||n.push(i);return n}return s}function T(e,t){for(var i,s=[],n=t||e.selectedOptions,o=0,r=n.length;o<r;o++)(i=n[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||s.push(i.value);return e.multiple?s:s.length?s[0]:null}i=null,String.prototype.startsWith||(t=(function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i})(),c={}.toString,t?t(String.prototype,"startsWith",{value:h,configurable:!0,writable:!0}):String.prototype.startsWith=h),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),HTMLSelectElement&&!HTMLSelectElement.prototype.hasOwnProperty("selectedOptions")&&Object.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{get:function(){return this.querySelectorAll(":checked")}});var p={useDefault:!1,_set:z.valHooks.select.set};z.valHooks.select.set=function(e,t){return t&&!p.useDefault&&z(e).data("selected",!0),p._set.apply(this,arguments)};var A=null,u=(function(){try{return new Event("change"),!0}catch(e){return!1}})();function k(e,t,i,s){for(var n=["display","subtext","tokens"],o=!1,r=0;r<n.length;r++){var l=n[r],a=e[l];if(a&&(a=a.toString(),"display"===l&&(a=a.replace(/<[^>]+>/g,"")),s&&(a=w(a)),a=a.toUpperCase(),o="contains"===i?0<=a.indexOf(t):a.startsWith(t)))break}return o}function L(e){return parseInt(e,10)||0}z.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(u?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)};var f={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},m=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,g=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function b(e){return f[e]}function w(e){return(e=e.toString())&&e.replace(m,b).replace(g,"")}var I,x,y,$,S=(I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},x="(?:"+Object.keys(I).join("|")+")",y=RegExp(x),$=RegExp(x,"g"),function(e){return e=null==e?"":""+e,y.test(e)?e.replace($,E):e});function E(e){return I[e]}var C={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},N=27,D=13,H=32,W=9,B=38,M=40,R={success:!1,major:"3"};try{R.full=(z.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),R.major=R.full[0],R.success=!0}catch(e){}var U=0,j=".bs.select",V={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},F={MENU:"."+V.MENU},_={span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode("\xa0"),fragment:document.createDocumentFragment()};_.a.setAttribute("role","option"),"4"===R.major&&(_.a.className="dropdown-item"),_.subtext.className="text-muted",_.text=_.span.cloneNode(!1),_.text.className="text",_.checkMark=_.span.cloneNode(!1);var G=new RegExp(B+"|"+M),q=new RegExp("^"+W+"$|"+N),K={li:function(e,t,i){var s=_.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?s.appendChild(e):s.innerHTML=e),void 0!==t&&""!==t&&(s.className=t),null!=i&&s.classList.add("optgroup-"+i),s},a:function(e,t,i){var s=_.a.cloneNode(!0);return e&&(11===e.nodeType?s.appendChild(e):s.insertAdjacentHTML("beforeend",e)),void 0!==t&&""!==t&&s.classList.add.apply(s.classList,t.split(" ")),i&&s.setAttribute("style",i),s},text:function(e,t){var i,s,n=_.text.cloneNode(!1);if(e.content)n.innerHTML=e.content;else{if(n.textContent=e.text,e.icon){var o=_.whitespace.cloneNode(!1);(s=(!0===t?_.i:_.span).cloneNode(!1)).className=this.options.iconBase+" "+e.icon,_.fragment.appendChild(s),_.fragment.appendChild(o)}e.subtext&&((i=_.subtext.cloneNode(!1)).textContent=e.subtext,n.appendChild(i))}if(!0===t)for(;0<n.childNodes.length;)_.fragment.appendChild(n.childNodes[0]);else _.fragment.appendChild(n);return _.fragment},label:function(e){var t,i,s=_.text.cloneNode(!1);if(s.innerHTML=e.display,e.icon){var n=_.whitespace.cloneNode(!1);(i=_.span.cloneNode(!1)).className=this.options.iconBase+" "+e.icon,_.fragment.appendChild(i),_.fragment.appendChild(n)}return e.subtext&&((t=_.subtext.cloneNode(!1)).textContent=e.subtext,s.appendChild(t)),_.fragment.appendChild(s),_.fragment}},Y=function(e,t){var i=this;p.useDefault||(z.valHooks.select.set=p._set,p.useDefault=!0),this.$element=z(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t,this.selectpicker={main:{},search:{},current:{},view:{},isSearching:!1,keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout((function(){i.selectpicker.keydown.keyHistory=""}),800)}}}},this.sizeInfo={},null===this.options.title&&(this.options.title=this.$element.attr("title"));var s=this.options.windowPadding;"number"==typeof s&&(this.options.windowPadding=[s,s,s,s]),this.val=Y.prototype.val,this.render=Y.prototype.render,this.refresh=Y.prototype.refresh,this.setStyle=Y.prototype.setStyle,this.selectAll=Y.prototype.selectAll,this.deselectAll=Y.prototype.deselectAll,this.destroy=Y.prototype.destroy,this.remove=Y.prototype.remove,this.show=Y.prototype.show,this.hide=Y.prototype.hide,this.init()};function Z(e){var l,a=arguments,c=e;if([].shift.apply(a),!R.success){try{R.full=(z.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(e){Y.BootstrapVersion?R.full=Y.BootstrapVersion.split(" ")[0].split("."):(R.full=[R.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e))}R.major=R.full[0],R.success=!0}if("4"===R.major){var t=[];Y.DEFAULTS.style===V.BUTTONCLASS&&t.push({name:"style",className:"BUTTONCLASS"}),Y.DEFAULTS.iconBase===V.ICONBASE&&t.push({name:"iconBase",className:"ICONBASE"}),Y.DEFAULTS.tickIcon===V.TICKICON&&t.push({name:"tickIcon",className:"TICKICON"}),V.DIVIDER="dropdown-divider",V.SHOW="show",V.BUTTONCLASS="btn-light",V.POPOVERHEADER="popover-header",V.ICONBASE="",V.TICKICON="bs-ok-default";for(var i=0;i<t.length;i++){e=t[i];Y.DEFAULTS[e.name]=V[e.className]}}var s=this.each((function(){var e=z(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof c&&c;if(t){if(i)for(var s in i)i.hasOwnProperty(s)&&(t.options[s]=i[s])}else{var n=e.data();for(var o in n)n.hasOwnProperty(o)&&-1!==z.inArray(o,d)&&delete n[o];var r=z.extend({},Y.DEFAULTS,z.fn.selectpicker.defaults||{},n,i);r.template=z.extend({},Y.DEFAULTS.template,z.fn.selectpicker.defaults?z.fn.selectpicker.defaults.template:{},n.template,i.template),e.data("selectpicker",t=new Y(this,r))}"string"==typeof c&&(l=t[c]instanceof Function?t[c].apply(t,a):t.options[c])}}));return void 0!==l?l:s}Y.VERSION="1.13.14",Y.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:V.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:V.ICONBASE,tickIcon:V.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:e},Y.prototype={constructor:Y,init:function(){var i=this,e=this.$element.attr("id");U++,this.selectId="bs-select-"+U,this.$element[0].classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$element[0].classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.buildData(),this.$element.after(this.$newElement).prependTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(F.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element[0].classList.remove("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(V.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.render(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+j,(function(){if(i.isVirtual()){var e=i.$menuInner[0],t=e.firstChild.cloneNode(!1);e.replaceChild(t,e.firstChild),e.scrollTop=0}})),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){i.$element.trigger("hide"+j,e)},"hidden.bs.dropdown":function(e){i.$element.trigger("hidden"+j,e)},"show.bs.dropdown":function(e){i.$element.trigger("show"+j,e)},"shown.bs.dropdown":function(e){i.$element.trigger("shown"+j,e)}}),i.$element[0].hasAttribute("required")&&this.$element.on("invalid"+j,(function(){i.$button[0].classList.add("bs-invalid"),i.$element.on("shown"+j+".invalid",(function(){i.$element.val(i.$element.val()).off("shown"+j+".invalid")})).on("rendered"+j,(function(){this.validity.valid&&i.$button[0].classList.remove("bs-invalid"),i.$element.off("rendered"+j)})),i.$button.on("blur"+j,(function(){i.$element.trigger("focus").trigger("blur"),i.$button.off("blur"+j)}))})),setTimeout((function(){i.buildList(),i.$element.trigger("loaded"+j)}))},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.multiple?' aria-multiselectable="true"':"",i="",s=this.autofocus?" autofocus":"";R.major<4&&this.$element.parent().hasClass("input-group")&&(i=" input-group-btn");var n,o="",r="",l="",a="";return this.options.header&&(o='<div class="'+V.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(r='<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+S(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+V.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+V.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(a='<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+V.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),n='<div class="dropdown bootstrap-select'+e+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+s+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===R.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+V.MENU+" "+("4"===R.major?"":V.SHOW)+'">'+o+r+l+'<div class="inner '+V.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+t+'><ul class="'+V.MENU+" inner "+("4"===R.major?V.SHOW:"")+'" role="presentation"></ul></div>'+a+"</div></div>",z(n)},setPositionData:function(){this.selectpicker.view.canHighlight=[];for(var e=this.selectpicker.view.size=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,t.posinset=this.selectpicker.view.size),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(A,e,t){var L,N,D=this,i=0,H=[];if(this.selectpicker.isSearching=A,this.selectpicker.current=A?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),e)if(t)i=this.$menuInner[0].scrollTop;else if(!D.multiple){var s=D.$element[0],n=(s.options[s.selectedIndex]||{}).liIndex;if("number"==typeof n&&!1!==D.options.size){var o=D.selectpicker.main.data[n],r=o&&o.position;r&&(i=r-(D.sizeInfo.menuInnerHeight+D.sizeInfo.liHeight)/2)}}function l(e,t){var i,s,n,o,r,l,a,c,d=D.selectpicker.current.elements.length,h=[],p=!0,u=D.isVirtual();D.selectpicker.view.scrollTop=e,i=Math.ceil(D.sizeInfo.menuInnerHeight/D.sizeInfo.liHeight*1.5),s=Math.round(d/i)||1;for(var f=0;f<s;f++){var m=(f+1)*i;if(f===s-1&&(m=d),h[f]=[f*i+(f?1:0),m],!d)break;void 0===r&&e-1<=D.selectpicker.current.data[m-1].position-D.sizeInfo.menuInnerHeight&&(r=f)}if(void 0===r&&(r=0),l=[D.selectpicker.view.position0,D.selectpicker.view.position1],n=Math.max(0,r-1),o=Math.min(s-1,r+1),D.selectpicker.view.position0=!1===u?0:Math.max(0,h[n][0])||0,D.selectpicker.view.position1=!1===u?d:Math.min(d,h[o][1])||0,a=l[0]!==D.selectpicker.view.position0||l[1]!==D.selectpicker.view.position1,void 0!==D.activeIndex&&(N=D.selectpicker.main.elements[D.prevActiveIndex],H=D.selectpicker.main.elements[D.activeIndex],L=D.selectpicker.main.elements[D.selectedIndex],t&&(D.activeIndex!==D.selectedIndex&&D.defocusItem(H),D.activeIndex=void 0),D.activeIndex&&D.activeIndex!==D.selectedIndex&&D.defocusItem(L)),void 0!==D.prevActiveIndex&&D.prevActiveIndex!==D.activeIndex&&D.prevActiveIndex!==D.selectedIndex&&D.defocusItem(N),(t||a)&&(c=D.selectpicker.view.visibleElements?D.selectpicker.view.visibleElements.slice():[],D.selectpicker.view.visibleElements=!1===u?D.selectpicker.current.elements:D.selectpicker.current.elements.slice(D.selectpicker.view.position0,D.selectpicker.view.position1),D.setOptionStatus(),(A||!1===u&&t)&&(p=!(function(e,i){return e.length===i.length&&e.every((function(e,t){return e===i[t]}))})(c,D.selectpicker.view.visibleElements)),(t||!0===u)&&p)){var v,g,b=D.$menuInner[0],w=document.createDocumentFragment(),I=b.firstChild.cloneNode(!1),x=D.selectpicker.view.visibleElements,k=[];b.replaceChild(I,b.firstChild);f=0;for(var y=x.length;f<y;f++){var $,S,E=x[f];D.options.sanitize&&($=E.lastChild)&&(S=D.selectpicker.current.data[f+D.selectpicker.view.position0])&&S.content&&!S.sanitized&&(k.push($),S.sanitized=!0),w.appendChild(E)}if(D.options.sanitize&&k.length&&P(k,D.options.whiteList,D.options.sanitizeFn),!0===u?(v=0===D.selectpicker.view.position0?0:D.selectpicker.current.data[D.selectpicker.view.position0-1].position,g=D.selectpicker.view.position1>d-1?0:D.selectpicker.current.data[d-1].position-D.selectpicker.current.data[D.selectpicker.view.position1-1].position,b.firstChild.style.marginTop=v+"px",b.firstChild.style.marginBottom=g+"px"):(b.firstChild.style.marginTop=0,b.firstChild.style.marginBottom=0),b.firstChild.appendChild(w),!0===u&&D.sizeInfo.hasScrollBar){var C=b.firstChild.offsetWidth;if(t&&C<D.sizeInfo.menuInnerInnerWidth&&D.sizeInfo.totalMenuWidth>D.sizeInfo.selectWidth)b.firstChild.style.minWidth=D.sizeInfo.menuInnerInnerWidth+"px";else if(C>D.sizeInfo.menuInnerInnerWidth){D.$menu[0].style.minWidth=0;var O=b.firstChild.offsetWidth;O>D.sizeInfo.menuInnerInnerWidth&&(D.sizeInfo.menuInnerInnerWidth=O,b.firstChild.style.minWidth=D.sizeInfo.menuInnerInnerWidth+"px"),D.$menu[0].style.minWidth=""}}}if(D.prevActiveIndex=D.activeIndex,D.options.liveSearch){if(A&&t){var z,T=0;D.selectpicker.view.canHighlight[T]||(T=1+D.selectpicker.view.canHighlight.slice(1).indexOf(!0)),z=D.selectpicker.view.visibleElements[T],D.defocusItem(D.selectpicker.view.currentActive),D.activeIndex=(D.selectpicker.current.data[T]||{}).index,D.focusItem(z)}}else D.$menuInner.trigger("focus")}l(i,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",(function(e,t){D.noScroll||l(this.scrollTop,t),D.noScroll=!1})),z(window).off("resize"+j+"."+this.selectId+".createView").on("resize"+j+"."+this.selectId+".createView",(function(){D.$newElement.hasClass(V.SHOW)&&l(D.$menuInner[0].scrollTop)}))},focusItem:function(e,t,i){if(e){t=t||this.selectpicker.main.data[this.activeIndex];var s=e.firstChild;s&&(s.setAttribute("aria-setsize",this.selectpicker.view.size),s.setAttribute("aria-posinset",t.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",s.id),e.classList.add("active"),s.classList.add("active")))}},defocusItem:function(e){e&&(e.classList.remove("active"),e.firstChild&&e.firstChild.classList.remove("active"))},setPlaceholder:function(){var e=!1;if(this.options.title&&!this.multiple){this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),e=!0;var t=this.$element[0],i=!1,s=!this.selectpicker.view.titleOption.parentNode;if(s)this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",i=void 0===z(t.options[t.selectedIndex]).attr("selected")&&void 0===this.$element.data("selected");!s&&0===this.selectpicker.view.titleOption.index||t.insertBefore(this.selectpicker.view.titleOption,t.firstChild),i&&(t.selectedIndex=0)}return e},buildData:function(){var p=':not([hidden]):not([data-hidden="true"])',u=[],f=0,e=this.setPlaceholder()?1:0;this.options.hideDisabled&&(p+=":not(:disabled)");var t=this.$element[0].querySelectorAll("select > *"+p);function m(e){var t=u[u.length-1];t&&"divider"===t.type&&(t.optID||e.optID)||((e=e||{}).type="divider",u.push(e))}function v(e,t){if((t=t||{}).divider="true"===e.getAttribute("data-divider"),t.divider)m({optID:t.optID});else{var i=u.length,s=e.style.cssText,n=s?S(s):"",o=(e.className||"")+(t.optgroupClass||"");t.optID&&(o="opt "+o),t.optionClass=o.trim(),t.inlineStyle=n,t.text=e.textContent,t.content=e.getAttribute("data-content"),t.tokens=e.getAttribute("data-tokens"),t.subtext=e.getAttribute("data-subtext"),t.icon=e.getAttribute("data-icon"),e.liIndex=i,t.display=t.content||t.text,t.type="option",t.index=i,t.option=e,t.selected=!!e.selected,t.disabled=t.disabled||!!e.disabled,u.push(t)}}function i(e,t){var i=t[e],s=t[e-1],n=t[e+1],o=i.querySelectorAll("option"+p);if(o.length){var r,l,a={display:S(i.label),subtext:i.getAttribute("data-subtext"),icon:i.getAttribute("data-icon"),type:"optgroup-label",optgroupClass:" "+(i.className||"")};f++,s&&m({optID:f}),a.optID=f,u.push(a);for(var c=0,d=o.length;c<d;c++){var h=o[c];0===c&&(l=(r=u.length-1)+d),v(h,{headerIndex:r,lastIndex:l,optID:a.optID,optgroupClass:a.optgroupClass,disabled:i.disabled})}n&&m({optID:f})}}for(var s=t.length;e<s;e++){var n=t[e];"OPTGROUP"!==n.tagName?v(n,{}):i(e,t)}this.selectpicker.main.data=this.selectpicker.current.data=u},buildList:function(){var s=this,e=this.selectpicker.main.data,n=[],o=0;function t(e){var t,i=0;switch(e.type){case"divider":t=K.li(!1,V.DIVIDER,e.optID?e.optID+"div":void 0);break;case"option":(t=K.li(K.a(K.text.call(s,e),e.optionClass,e.inlineStyle),"",e.optID)).firstChild&&(t.firstChild.id=s.selectId+"-"+e.index);break;case"optgroup-label":t=K.li(K.label.call(s,e),"dropdown-header"+e.optgroupClass,e.optID)}n.push(t),e.display&&(i+=e.display.length),e.subtext&&(i+=e.subtext.length),e.icon&&(i+=1),o<i&&(o=i,s.selectpicker.view.widestOption=n[n.length-1])}!s.options.showTick&&!s.multiple||_.checkMark.parentNode||(_.checkMark.className=this.options.iconBase+" "+s.options.tickIcon+" check-mark",_.a.appendChild(_.checkMark));for(var i=e.length,r=0;r<i;r++){t(e[r])}this.selectpicker.main.elements=this.selectpicker.current.elements=n},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var e,t=this,i=this.$element[0],s=this.setPlaceholder()&&0===i.selectedIndex,n=O(i,this.options.hideDisabled),o=n.length,r=this.$button[0],l=r.querySelector(".filter-option-inner-inner"),a=document.createTextNode(this.options.multipleSeparator),c=_.fragment.cloneNode(!1),d=!1;if(r.classList.toggle("bs-placeholder",t.multiple?!o:!T(i,n)),this.tabIndex(),"static"===this.options.selectedTextFormat)c=K.text.call(this,{text:this.options.title},!0);else if(!1===(this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&1<o&&(1<(e=this.options.selectedTextFormat.split(">")).length&&o>e[1]||1===e.length&&2<=o))){if(!s){for(var h=0;h<o&&h<50;h++){var p=n[h],u=this.selectpicker.main.data[p.liIndex],f={};this.multiple&&0<h&&c.appendChild(a.cloneNode(!1)),p.title?f.text=p.title:u&&(u.content&&t.options.showContent?(f.content=u.content.toString(),d=!0):(t.options.showIcon&&(f.icon=u.icon),t.options.showSubtext&&!t.multiple&&u.subtext&&(f.subtext=" "+u.subtext),f.text=p.textContent.trim())),c.appendChild(K.text.call(this,f,!0))}49<o&&c.appendChild(document.createTextNode("..."))}}else{var m=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled&&(m+=":not(:disabled)");var v=this.$element[0].querySelectorAll("select > option"+m+", optgroup"+m+" option"+m).length,g="function"==typeof this.options.countSelectedText?this.options.countSelectedText(o,v):this.options.countSelectedText;c=K.text.call(this,{text:g.replace("{0}",o.toString()).replace("{1}",v.toString())},!0)}if(null==this.options.title&&(this.options.title=this.$element.attr("title")),c.childNodes.length||(c=K.text.call(this,{text:void 0!==this.options.title?this.options.title:this.options.noneSelectedText},!0)),r.title=c.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&d&&P([c],t.options.whiteList,t.options.sanitizeFn),l.innerHTML="",l.appendChild(c),R.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")){var b=r.querySelector(".filter-expand"),w=l.cloneNode(!0);w.className="filter-expand",b?r.replaceChild(w,b):r.appendChild(w)}this.$element.trigger("rendered"+j)},setStyle:function(e,t){var i,s=this.$button[0],n=this.$newElement[0],o=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),R.major<4&&(n.classList.add("bs3"),n.parentNode.classList.contains("input-group")&&(n.previousElementSibling||n.nextElementSibling)&&(n.previousElementSibling||n.nextElementSibling).classList.contains("input-group-addon")&&n.classList.add("bs3-has-addon")),i=e?e.trim():o,"add"==t?i&&s.classList.add.apply(s.classList,i.split(" ")):"remove"==t?i&&s.classList.remove.apply(s.classList,i.split(" ")):(o&&s.classList.remove.apply(s.classList,o.split(" ")),i&&s.classList.add.apply(s.classList,i.split(" ")))},liHeight:function(e){if(e||!1!==this.options.size&&!Object.keys(this.sizeInfo).length){var t=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),n=document.createElement("ul"),o=document.createElement("li"),r=document.createElement("li"),l=document.createElement("li"),a=document.createElement("a"),c=document.createElement("span"),d=this.options.header&&0<this.$menu.find("."+V.POPOVERHEADER).length?this.$menu.find("."+V.POPOVERHEADER)[0].cloneNode(!0):null,h=this.options.liveSearch?document.createElement("div"):null,p=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,u=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,f=this.$element.find("option")[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,c.className="text",a.className="dropdown-item "+(f?f.className:""),t.className=this.$menu[0].parentNode.className+" "+V.SHOW,t.style.width=0,"auto"===this.options.width&&(i.style.minWidth=0),i.className=V.MENU+" "+V.SHOW,s.className="inner "+V.SHOW,n.className=V.MENU+" inner "+("4"===R.major?V.SHOW:""),o.className=V.DIVIDER,r.className="dropdown-header",c.appendChild(document.createTextNode("\u200b")),a.appendChild(c),l.appendChild(a),r.appendChild(c.cloneNode(!0)),this.selectpicker.view.widestOption&&n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),n.appendChild(l),n.appendChild(o),n.appendChild(r),d&&i.appendChild(d),h){var m=document.createElement("input");h.className="bs-searchbox",m.className="form-control",h.appendChild(m),i.appendChild(h)}p&&i.appendChild(p),s.appendChild(n),i.appendChild(s),u&&i.appendChild(u),t.appendChild(i),document.body.appendChild(t);var v,g=l.offsetHeight,b=r?r.offsetHeight:0,w=d?d.offsetHeight:0,I=h?h.offsetHeight:0,x=p?p.offsetHeight:0,k=u?u.offsetHeight:0,y=z(o).outerHeight(!0),$=!!window.getComputedStyle&&window.getComputedStyle(i),S=i.offsetWidth,E=$?null:z(i),C={vert:L($?$.paddingTop:E.css("paddingTop"))+L($?$.paddingBottom:E.css("paddingBottom"))+L($?$.borderTopWidth:E.css("borderTopWidth"))+L($?$.borderBottomWidth:E.css("borderBottomWidth")),horiz:L($?$.paddingLeft:E.css("paddingLeft"))+L($?$.paddingRight:E.css("paddingRight"))+L($?$.borderLeftWidth:E.css("borderLeftWidth"))+L($?$.borderRightWidth:E.css("borderRightWidth"))},O={vert:C.vert+L($?$.marginTop:E.css("marginTop"))+L($?$.marginBottom:E.css("marginBottom"))+2,horiz:C.horiz+L($?$.marginLeft:E.css("marginLeft"))+L($?$.marginRight:E.css("marginRight"))+2};s.style.overflowY="scroll",v=i.offsetWidth-S,document.body.removeChild(t),this.sizeInfo.liHeight=g,this.sizeInfo.dropdownHeaderHeight=b,this.sizeInfo.headerHeight=w,this.sizeInfo.searchHeight=I,this.sizeInfo.actionsHeight=x,this.sizeInfo.doneButtonHeight=k,this.sizeInfo.dividerHeight=y,this.sizeInfo.menuPadding=C,this.sizeInfo.menuExtras=O,this.sizeInfo.menuWidth=S,this.sizeInfo.menuInnerInnerWidth=S-C.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=v,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,t=z(window),i=this.$newElement.offset(),s=z(this.options.container);this.options.container&&s.length&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0};var n=this.options.windowPadding;this.sizeInfo.selectOffsetTop=i.top-e.top-t.scrollTop(),this.sizeInfo.selectOffsetBot=t.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-n[2],this.sizeInfo.selectOffsetLeft=i.left-e.left-t.scrollLeft(),this.sizeInfo.selectOffsetRight=t.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-n[1],this.sizeInfo.selectOffsetTop-=n[0],this.sizeInfo.selectOffsetLeft-=n[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,s,n,o,r,l,a,c=this.sizeInfo.selectWidth,d=this.sizeInfo.liHeight,h=this.sizeInfo.headerHeight,p=this.sizeInfo.searchHeight,u=this.sizeInfo.actionsHeight,f=this.sizeInfo.doneButtonHeight,m=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,g=0;if(this.options.dropupAuto&&(l=d*this.selectpicker.current.elements.length+v.vert,a=this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&l+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot,!0===this.selectpicker.isSearching&&(a=this.selectpicker.dropup),this.$newElement.toggleClass(V.DROPUP,a),this.selectpicker.dropup=a),"auto"===this.options.size)n=3<this.selectpicker.current.elements.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,s=n+h+p+u+f,r=Math.max(n-v.vert,0),this.$newElement.hasClass(V.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),t=(o=i)-h-p-u-f-v.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var b=0;b<this.options.size;b++)"divider"===this.selectpicker.current.data[b].type&&g++;t=(i=d*this.options.size+g*m+v.vert)-v.vert,o=i+h+p+u+f,s=r=""}this.$menu.css({"max-height":o+"px",overflow:"hidden","min-height":s+"px"}),this.$menuInner.css({"max-height":t+"px","overflow-y":"auto","min-height":r+"px"}),this.sizeInfo.menuInnerHeight=Math.max(t,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(V.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-c),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){if(this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t=this,i=z(window);this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",(function(){return t.setMenuSize()})),"auto"===this.options.size?i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize").on("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize",(function(){return t.setMenuSize()})):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize")}this.createView(!1,!0,e)},setWidth:function(){var i=this;"auto"===this.options.width?requestAnimationFrame((function(){i.$menu.css("min-width","0"),i.$element.on("loaded"+j,(function(){i.liHeight(),i.setMenuSize();var e=i.$newElement.clone().appendTo("body"),t=e.css("width","auto").children("button").outerWidth();e.remove(),i.sizeInfo.selectWidth=Math.max(i.sizeInfo.totalMenuWidth,t),i.$newElement.css("width",i.sizeInfo.selectWidth+"px")}))})):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){this.$bsContainer=z('<div class="bs-container" />');function e(e){var t={},i=r.options.display||!!z.fn.dropdown.Constructor.Default&&z.fn.dropdown.Constructor.Default.display;r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(V.DROPUP,e.hasClass(V.DROPUP)),s=e.offset(),l.is("body")?n={top:0,left:0}:((n=l.offset()).top+=parseInt(l.css("borderTopWidth"))-l.scrollTop(),n.left+=parseInt(l.css("borderLeftWidth"))-l.scrollLeft()),o=e.hasClass(V.DROPUP)?0:e[0].offsetHeight,(R.major<4||"static"===i)&&(t.top=s.top-n.top+o,t.left=s.left-n.left),t.width=e[0].offsetWidth,r.$bsContainer.css(t)}var s,n,o,r=this,l=z(this.options.container);this.$button.on("click.bs.dropdown.data-api",(function(){r.isDisabled()||(e(r.$newElement),r.$bsContainer.appendTo(r.options.container).toggleClass(V.SHOW,!r.$button.hasClass(V.SHOW)).append(r.$menu))})),z(window).off("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId).on("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId,(function(){r.$newElement.hasClass(V.SHOW)&&e(r.$newElement)})),this.$element.on("hide"+j,(function(){r.$menu.data("height",r.$menu.height()),r.$bsContainer.detach()}))},setOptionStatus:function(e){var t=this;if(t.noScroll=!1,t.selectpicker.view.visibleElements&&t.selectpicker.view.visibleElements.length)for(var i=0;i<t.selectpicker.view.visibleElements.length;i++){var s=t.selectpicker.current.data[i+t.selectpicker.view.position0],n=s.option;n&&(!0!==e&&t.setDisabled(s.index,s.disabled),t.setSelected(s.index,n.selected))}},setSelected:function(e,t){var i,s,n=this.selectpicker.main.elements[e],o=this.selectpicker.main.data[e],r=void 0!==this.activeIndex,l=this.activeIndex===e||t&&!this.multiple&&!r;o.selected=t,s=n.firstChild,t&&(this.selectedIndex=e),n.classList.toggle("selected",t),l?(this.focusItem(n,o),this.selectpicker.view.currentActive=n,this.activeIndex=e):this.defocusItem(n),s&&(s.classList.toggle("selected",t),t?s.setAttribute("aria-selected",!0):this.multiple?s.setAttribute("aria-selected",!1):s.removeAttribute("aria-selected")),l||r||!t||void 0===this.prevActiveIndex||(i=this.selectpicker.main.elements[this.prevActiveIndex],this.defocusItem(i))},setDisabled:function(e,t){var i,s=this.selectpicker.main.elements[e];this.selectpicker.main.data[e].disabled=t,i=s.firstChild,s.classList.toggle(V.DISABLED,t),i&&("4"===R.major&&i.classList.toggle(V.DISABLED,t),t?(i.setAttribute("aria-disabled",t),i.setAttribute("tabindex",-1)):(i.removeAttribute("aria-disabled"),i.setAttribute("tabindex",0)))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){this.isDisabled()?(this.$newElement[0].classList.add(V.DISABLED),this.$button.addClass(V.DISABLED).attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button[0].classList.contains(V.DISABLED)&&(this.$newElement[0].classList.remove(V.DISABLED),this.$button.removeClass(V.DISABLED).attr("aria-disabled",!1)),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var C=this,t=z(document);function e(){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$menuInner.trigger("focus")}function i(){C.dropdown&&C.dropdown._popper&&C.dropdown._popper.state.isCreated?e():requestAnimationFrame(i)}t.data("spaceSelect",!1),this.$button.on("keyup",(function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))})),this.$newElement.on("show.bs.dropdown",(function(){3<R.major&&!C.dropdown&&(C.dropdown=C.$button.data("bs.dropdown"),C.dropdown._menu=C.$menu[0])})),this.$button.on("click.bs.dropdown.data-api",(function(){C.$newElement.hasClass(V.SHOW)||C.setSize()})),this.$element.on("shown"+j,(function(){C.$menuInner[0].scrollTop!==C.selectpicker.view.scrollTop&&(C.$menuInner[0].scrollTop=C.selectpicker.view.scrollTop),3<R.major?requestAnimationFrame(i):e()})),this.$menuInner.on("mouseenter","li a",(function(e){var t=this.parentElement,i=C.isVirtual()?C.selectpicker.view.position0:0,s=Array.prototype.indexOf.call(t.parentElement.children,t),n=C.selectpicker.current.data[s+i];C.focusItem(t,n,!0)})),this.$menuInner.on("click","li a",(function(e,t){var i=z(this),s=C.$element[0],n=C.isVirtual()?C.selectpicker.view.position0:0,o=C.selectpicker.current.data[i.parent().index()+n],r=o.index,l=T(s),a=s.selectedIndex,c=s.options[a],d=!0;if(C.multiple&&1!==C.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!C.isDisabled()&&!i.parent().hasClass(V.DISABLED)){var h=o.option,p=z(h),u=h.selected,f=p.parent("optgroup"),m=f.find("option"),v=C.options.maxOptions,g=f.data("maxOptions")||!1;if(r===C.activeIndex&&(t=!0),t||(C.prevActiveIndex=C.activeIndex,C.activeIndex=void 0),C.multiple){if(h.selected=!u,C.setSelected(r,!u),i.trigger("blur"),!1!==v||!1!==g){var b=v<O(s).length,w=g<f.find("option:selected").length;if(v&&b||g&&w)if(v&&1==v)s.selectedIndex=-1,h.selected=!0,C.setOptionStatus(!0);else if(g&&1==g){for(var I=0;I<m.length;I++){var x=m[I];x.selected=!1,C.setSelected(x.liIndex,!1)}h.selected=!0,C.setSelected(r,!0)}else{var k="string"==typeof C.options.maxOptionsText?[C.options.maxOptionsText,C.options.maxOptionsText]:C.options.maxOptionsText,y="function"==typeof k?k(v,g):k,$=y[0].replace("{n}",v),S=y[1].replace("{n}",g),E=z('<div class="notify"></div>');y[2]&&($=$.replace("{var}",y[2][1<v?0:1]),S=S.replace("{var}",y[2][1<g?0:1])),h.selected=!1,C.$menu.append(E),v&&b&&(E.append(z("<div>"+$+"</div>")),d=!1,C.$element.trigger("maxReached"+j)),g&&w&&(E.append(z("<div>"+S+"</div>")),d=!1,C.$element.trigger("maxReachedGrp"+j)),setTimeout((function(){C.setSelected(r,!1)}),10),E[0].classList.add("fadeOut"),setTimeout((function(){E.remove()}),1050)}}}else c&&(c.selected=!1),h.selected=!0,C.setSelected(r,!0);!C.multiple||C.multiple&&1===C.options.maxOptions?C.$button.trigger("focus"):C.options.liveSearch&&C.$searchbox.trigger("focus"),d&&(!C.multiple&&a===s.selectedIndex||(A=[h.index,p.prop("selected"),l],C.$element.triggerNative("change")))}})),this.$menu.on("click","li."+V.DISABLED+" a, ."+V.POPOVERHEADER+", ."+V.POPOVERHEADER+" :not(.close)",(function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),C.options.liveSearch&&!z(e.target).hasClass("close")?C.$searchbox.trigger("focus"):C.$button.trigger("focus"))})),this.$menuInner.on("click",".divider, .dropdown-header",(function(e){e.preventDefault(),e.stopPropagation(),C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus")})),this.$menu.on("click","."+V.POPOVERHEADER+" .close",(function(){C.$button.trigger("click")})),this.$searchbox.on("click",(function(e){e.stopPropagation()})),this.$menu.on("click",".actions-btn",(function(e){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus"),e.preventDefault(),e.stopPropagation(),z(this).hasClass("bs-select-all")?C.selectAll():C.deselectAll()})),this.$element.on("change"+j,(function(){C.render(),C.$element.trigger("changed"+j,A),A=null})).on("focus"+j,(function(){C.options.mobile||C.$button.trigger("focus")}))},liveSearchListener:function(){var u=this,f=document.createElement("li");this.$button.on("click.bs.dropdown.data-api",(function(){u.$searchbox.val()&&u.$searchbox.val("")})),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",(function(e){e.stopPropagation()})),this.$searchbox.on("input propertychange",(function(){var e=u.$searchbox.val();if(u.selectpicker.search.elements=[],u.selectpicker.search.data=[],e){var t=[],i=e.toUpperCase(),s={},n=[],o=u._searchStyle(),r=u.options.liveSearchNormalize;r&&(i=w(i));for(var l=0;l<u.selectpicker.main.data.length;l++){var a=u.selectpicker.main.data[l];s[l]||(s[l]=k(a,i,o,r)),s[l]&&void 0!==a.headerIndex&&-1===n.indexOf(a.headerIndex)&&(0<a.headerIndex&&(s[a.headerIndex-1]=!0,n.push(a.headerIndex-1)),s[a.headerIndex]=!0,n.push(a.headerIndex),s[a.lastIndex+1]=!0),s[l]&&"optgroup-label"!==a.type&&n.push(l)}l=0;for(var c=n.length;l<c;l++){var d=n[l],h=n[l-1],p=(a=u.selectpicker.main.data[d],u.selectpicker.main.data[h]);("divider"!==a.type||"divider"===a.type&&p&&"divider"!==p.type&&c-1!==l)&&(u.selectpicker.search.data.push(a),t.push(u.selectpicker.main.elements[d]))}u.activeIndex=void 0,u.noScroll=!0,u.$menuInner.scrollTop(0),u.selectpicker.search.elements=t,u.createView(!0),t.length||(f.className="no-results",f.innerHTML=u.options.noneResultsText.replace("{0}",'"'+S(e)+'"'),u.$menuInner[0].firstChild.appendChild(f))}else u.$menuInner.scrollTop(0),u.createView(!1)}))},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(e){var t=this.$element[0];if(void 0===e)return this.$element.val();var i=T(t);if(A=[null,null,i],this.$element.val(e).trigger("changed"+j,A),this.$newElement.hasClass(V.SHOW))if(this.multiple)this.setOptionStatus(!0);else{var s=(t.options[t.selectedIndex]||{}).liIndex;"number"==typeof s&&(this.setSelected(this.selectedIndex,!1),this.setSelected(s,!0))}return this.render(),A=null,this.$element},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element[0],i=0,s=0,n=T(t);t.classList.add("bs-select-hidden");for(var o=0,r=this.selectpicker.current.data,l=r.length;o<l;o++){var a=r[o],c=a.option;c&&!a.disabled&&"divider"!==a.type&&(a.selected&&i++,!0===(c.selected=e)&&s++)}t.classList.remove("bs-select-hidden"),i!==s&&(this.setOptionStatus(),A=[null,null,n],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(e){var t,i,s,n,o,r=z(this),l=r.hasClass("dropdown-toggle"),a=(l?r.closest(".dropdown"):r.closest(F.MENU)).data("this"),c=a.findLis(),d=!1,h=e.which===W&&!l&&!a.options.selectOnTab,p=G.test(e.which)||h,u=a.$menuInner[0].scrollTop,f=!0===a.isVirtual()?a.selectpicker.view.position0:0;if(!(112<=e.which&&e.which<=123))if(!(i=a.$newElement.hasClass(V.SHOW))&&(p||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&(a.$button.trigger("click.bs.dropdown.data-api"),a.options.liveSearch))a.$searchbox.trigger("focus");else{if(e.which===N&&i&&(e.preventDefault(),a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),p){if(!c.length)return;-1!==(t=(s=a.selectpicker.main.elements[a.activeIndex])?Array.prototype.indexOf.call(s.parentElement.children,s):-1)&&a.defocusItem(s),e.which===B?(-1!==t&&t--,t+f<0&&(t+=c.length),a.selectpicker.view.canHighlight[t+f]||-1===(t=a.selectpicker.view.canHighlight.slice(0,t+f).lastIndexOf(!0)-f)&&(t=c.length-1)):e.which!==M&&!h||(++t+f>=a.selectpicker.view.canHighlight.length&&(t=0),a.selectpicker.view.canHighlight[t+f]||(t=t+1+a.selectpicker.view.canHighlight.slice(t+f+1).indexOf(!0))),e.preventDefault();var m=f+t;e.which===B?0===f&&t===c.length-1?(a.$menuInner[0].scrollTop=a.$menuInner[0].scrollHeight,m=a.selectpicker.current.elements.length-1):d=(o=(n=a.selectpicker.current.data[m]).position-n.height)<u:e.which!==M&&!h||(0===t?m=a.$menuInner[0].scrollTop=0:d=u<(o=(n=a.selectpicker.current.data[m]).position-a.sizeInfo.menuInnerHeight)),s=a.selectpicker.current.elements[m],a.activeIndex=a.selectpicker.current.data[m].index,a.focusItem(s),a.selectpicker.view.currentActive=s,d&&(a.$menuInner[0].scrollTop=o),a.options.liveSearch?a.$searchbox.trigger("focus"):r.trigger("focus")}else if(!r.is("input")&&!q.test(e.which)||e.which===H&&a.selectpicker.keydown.keyHistory){var v,g,b=[];e.preventDefault(),a.selectpicker.keydown.keyHistory+=C[e.which],a.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),a.selectpicker.keydown.resetKeyHistory.cancel=a.selectpicker.keydown.resetKeyHistory.start(),g=a.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(g)&&(g=g.charAt(0));for(var w=0;w<a.selectpicker.current.data.length;w++){var I=a.selectpicker.current.data[w];k(I,g,"startsWith",!0)&&a.selectpicker.view.canHighlight[w]&&b.push(I.index)}if(b.length){var x=0;c.removeClass("active").find("a").removeClass("active"),1===g.length&&(-1===(x=b.indexOf(a.activeIndex))||x===b.length-1?x=0:x++),v=b[x],d=0<u-(n=a.selectpicker.main.data[v]).position?(o=n.position-n.height,!0):(o=n.position-a.sizeInfo.menuInnerHeight,n.position>u+a.sizeInfo.menuInnerHeight),s=a.selectpicker.main.elements[v],a.activeIndex=b[x],a.focusItem(s),s&&s.firstChild.focus(),d&&(a.$menuInner[0].scrollTop=o),r.trigger("focus")}}i&&(e.which===H&&!a.selectpicker.keydown.keyHistory||e.which===D||e.which===W&&a.options.selectOnTab)&&(e.which!==H&&e.preventDefault(),a.options.liveSearch&&e.which===H||(a.$menuInner.find(".active a").trigger("click",!0),r.trigger("focus"),a.options.liveSearch||(e.preventDefault(),z(document).data("spaceSelect",!0))))}},mobile:function(){this.$element[0].classList.add("mobile-device")},refresh:function(){var e=z.extend({},this.options,this.$element.data());this.options=e,this.checkDisabled(),this.setStyle(),this.render(),this.buildData(),this.buildList(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+j)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(j).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),z(window).off(j+"."+this.selectId)}};var J=z.fn.selectpicker;z.fn.selectpicker=Z,z.fn.selectpicker.Constructor=Y,z.fn.selectpicker.noConflict=function(){return z.fn.selectpicker=J,this};var Q=z.fn.dropdown.Constructor._dataApiKeydownHandler||z.fn.dropdown.Constructor.prototype.keydown;z(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api",':not(.bootstrap-select) > [data-toggle="dropdown"]',Q).on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > .dropdown-menu",Q).on("keydown"+j,'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',Y.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',(function(e){e.stopPropagation()})),z(window).on("load"+j+".data-api",(function(){z(".selectpicker").each((function(){var e=z(this);Z.call(e,e.data())}))}))})(e)}));
//# sourceMappingURL=bootstrap-select.min.js.map
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})((function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,(function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")})).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=(function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}})(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,(function(e,s){return t.isFunction(s)?(r[e]=(function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}})(),void 0):(r[e]=s,void 0)})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each((function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")})):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each((function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))}))),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget,(function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],(function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]})),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each((function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],(function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})})),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{using:r}))}))},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}})(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo((function(e){return function(i){return!!t.data(i,e)}})):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:(function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",(function(t){t.preventDefault()}))}})(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},(function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,(function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e})),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,(function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}})),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,(function(t,e){p[e.idx]=i(n[e.idx],e)})),this):"object"===d?(n instanceof l?f(c,(function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())})):f(c,(function(e,s){var o=s.cache;f(s.props,(function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)})),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))})),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,(function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,(function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e}))),s})),s},_space:function(){var t=[],e=this;return f(c,(function(i,s){e[s.cache]&&t.push(i)})),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,(function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))})),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,(function(t,e){return(1-s)*n[e]+s*t})))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,(function(t,e){return null==t?e>2?1:0:t}));return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),(function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t}));return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,(function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t})).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,(function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,(function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)})),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,(function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})}))})),l.hook=function(e){var i=e.split(" ");f(i,(function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}))},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],(function(i,s){e["border"+s+"Color"]=t})),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(p),(function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}})),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue((function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map((function(){var i=t(this);return{el:i,start:e(this)}})),o=function(){t.each(s,(function(t,e){n[e]&&a[e+"Class"](n[e])}))},o(),l=l.map((function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this})),a.attr("class",r),l=l.map((function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()})),t.when.apply(t,l.get()).done((function(){o(),t.each(arguments,(function(){var e=this.el;t.each(this.diff,(function(t){e.css(t,"")}))})),h.complete.call(a[0])}))}))},t.fn.extend({addClass:(function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}})(t.fn.addClass),removeClass:(function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}})(t.fn.removeClass),toggleClass:(function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}})(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})})(),(function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=(function(e){return function(i){return!!t(i).data(d)||e(i)}})(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],(function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")})),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,(function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])})),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(d,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each((function(){h&&h.call(this)})):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:(function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)
    }})(t.fn.show),hide:(function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}})(t.fn.hide),toggle:(function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}})(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],(function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])})),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,(function(){d.remove(),t.isFunction(i)&&i()}))}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}})(),(function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],(function(t,i){e[i]=function(e){return Math.pow(e,t+2)}})),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,(function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}}))})();var f=t.effects;t.effects.define("blind","hide",(function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("bounce",(function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)})),t.effects.define("clip","hide",(function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("drop","hide",(function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("explode","hide",(function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)})),t.effects.define("fade","toggle",(function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("fold","hide",(function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue((function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()})).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)})),t.effects.define("highlight","show",(function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("size",(function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each((function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,(function(){u&&t.effects.restoreStyle(i)}))}))),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})})),t.effects.define("scale",(function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)})),t.effects.define("puff","hide",(function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)})),t.effects.define("pulsate","show",(function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)})),t.effects.define("shake",(function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)})),t.effects.define("slide","show",(function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}));var f;t.uiBackCompat!==!1&&(f=t.effects.define("transfer",(function(e,i){t(this).transfer(e,i)}))),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout((function(){var i=e.data("ui-form-reset-instances");t.each(i,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],(function(e,i){function s(e,i,s,o){return t.each(n,(function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)})),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each((function(){t(this).css(o,s(this,e)+"px")}))},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each((function(){t(this).css(o,s(this,e,!0,n)+"px")}))}})),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=(function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}})(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter((function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:(function(){var t=0;return function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++t)}))}})(),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")}))}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each((function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)})).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each((function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))})),this.headers.each((function(){e-=t(this).outerHeight(!0)})),this.headers.next().each((function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))})).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each((function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()})).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),(function(t,e){i[e]="_eventHandler"})),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter((function(){return 0===parseInt(t(this).attr("tabIndex"),10)})).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay((function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)}))},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each((function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()}))},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each((function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))})),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each((function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")})),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay((function(){this._close(),this._open(t)}),this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay((function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s}),this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay((function(){this.focus(t,e)})))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each((function(){return i=t(this),0>i.offset().top-s-n})),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each((function(){return i=t(this),i.offset().top-s+n>0})),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))}))}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;
        this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay((function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")}))},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",(function(){t(e.target).trigger(e.originalEvent)})),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay((function(){this.previous=n,this.selectedItem=s}))),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay((function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))}),this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy((function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}),this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,(function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})}))},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,(function(t,i){s._renderItemData(e,i)}))},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,(function(t){return s.test(t.label||t.value||t)}))}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var g=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,(function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each((function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")})),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each((function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}}))),void 0):void 0})),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each((function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()}))},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,(function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(g,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")})),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],(function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)})),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each((function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML})),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter((function(){return 0===t(this).form().length})),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each((function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=(function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}})(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var m;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1})))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),m===n&&(m=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each((function(){this.disabled=!1})).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,(function(t){return t===e?null:t})))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each((function(){this.disabled=!0})).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,(function(t){return t===e?null:t})),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each((function(){return r|="fixed"===t(this).css("position"),!r})),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))
    }},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout((function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null}),0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,(function(t,e){return[[e,t]]})).sort((function(t,e){return-(t[1].length-e[1].length)}));if(t.each(a,(function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0})),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map((function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])}))},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=new Date,B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=X?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each((function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)})):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var _=!1;t(document).on("mouseup",(function(){_=!1})),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,(function(t){return e._mouseDown(t)})).on("click."+this.widgetName,(function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){i.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),_=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,_=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){i._trigger("stop",e)!==!1&&i._clear()})):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}
    },_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each((function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))}))},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,(function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))}))},drag:function(e,i,s){t.each(s.sortables,(function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,(function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n}))),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,(function(){this.refreshPositions()})),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each((function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})}))},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort((function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)}));a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each((function(e){t(this).css("zIndex",n+e)})),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",(function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")})),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){i[t]=h._num(e.css("padding"+s))})),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each((function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})}))},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each((function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,(function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)})),e.css(n)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog
    },disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,(function(){i._trigger("close",e)})))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map((function(){return+t(this).css("z-index")})).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){e._focusTabbable(),e._trigger("focus")})),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay((function(){n.trigger("focus")})),e.preventDefault()):(this._delay((function(){s.trigger("focus")})),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,(function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",(function(){n.apply(e.element[0],arguments)}))})),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,(function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)})),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay((function(){e=!1})),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&v(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0})),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v=t.ui.intersect=(function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1}}})();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),(function(){this.options&&(!this.options.disabled&&this.visible&&v(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))})),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",(function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}))},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=v(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter((function(){return t(this).droppable("instance").options.scope===n})),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}}))},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each((function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})}))},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each((function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))})),t(e.target).parents().addBack().each((function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0})))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each((function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))})),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each((function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})})),t(".ui-selecting",this.element[0]).each((function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})})),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",(function(){i._rendered||i._refreshMenu()}))},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,(function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)}))},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each((function(e,n){s.push(i._parseOption(t(n),e))})),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
    },_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each((function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)}))},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each((function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)})),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each((function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i})):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,(function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")}))},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each((function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0})),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each((function(){this===e.target&&(n=!0)})),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,(function(){s._clear(e)}))}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each((function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))})),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each((function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")})),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,(function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0}))},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each((function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)}))},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;
        this._delay((function(){n===this.counter&&this.refreshPositions(!s)}))},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push((function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))})),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push((function(t){this._trigger("update",t,this._uiHash())})),this!==this.currentContainer&&(e||(n.push((function(t){this._trigger("remove",t,this._uiHash())})),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],(function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)})),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay((function(){this.spinning&&this._stop(t)}),100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay((function(){this.previous=s})))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay((function(){delete this.cancelBlur,i.call(this)})),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay((function(){this._repeat(40,e,i)}),t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r((function(t){this._super(t)})),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r((function(t){this._stepUp(t)})),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r((function(t){this._stepDown(t)})),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r((function(t){this._stepUp((t||1)*this.options.page)})),pageDown:r((function(t){this._stepDown((t||1)*this.options.page)})),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}})(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),(function(t){return e.tabs.index(t)})))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each((function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0})),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay((function(){this.option("active",s)}),this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),(function(t){return i.index(t)})),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",(function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()})).on("focus"+this.eventNamespace,".ui-tabs-anchor",(function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()})),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map((function(){return t("a",this)[0]})).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each((function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)})),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),(function(t,e){i[e]="_eventHandler"})),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each((function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))})),this.element.children().not(this.panels).each((function(){i-=t(this).outerHeight(!0)})),this.panels.each((function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))})).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each((function(){i=Math.max(i,t(this).height("").height())})).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,(function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()})):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter((function(){return 0===t(this).attr("tabIndex")})).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each((function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")})),this.tabs.each((function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")})),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,(function(t){return t!==e?t:null})):t.map(this.tabs,(function(t,i){return i!==e?i:null}))),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done((function(t,e,n){setTimeout((function(){a.html(t),s._trigger("load",i,r),h(n,e)}),1)})).fail((function(t,e){setTimeout((function(){h(t,e)}),1)}))))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,(function(t,e){s._updateContent(e.element)}))},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,(function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)})),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0})))},_enable:function(){this.disabledTitles.each((function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each((function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))})),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],(function(i){n._delay((function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))}))})),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval((function(){a.is(":visible")&&(n(l.of),clearInterval(r))}),t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,(function(){s._removeTooltip(t(this))})),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,(function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]})),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,(function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))})),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}((function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

})));

// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",(function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}}),"es6","es3");
(function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})((function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",(function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap})).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",(function(){setTimeout((function(){b.keydown().keyup()}),
100)})).on("change.mask",(function(){b.data("changed",!0)})).on("blur.mask",(function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)})).on("blur.mask",(function(){f=c.val()})).on("focus.mask",(function(b){!0===e.selectOnFocus&&a(b.target).select()})).on("focusout.mask",(function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")}))},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
(b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout((function(){c.setCaret(c.calculateCaretPosition(g))}),a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
"return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval((function(){a(document).find(e).each(k)}),f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each((function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")}))};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval((function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()}),k.watchInterval)}),window.jQuery,window.Zepto);

/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)})((function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each((function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a})),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,(function(t,e){e.elements=e.elements.not(n)})),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each((function(){var e=t(this);e.data("style-cache",e.attr("style"))})),u.css("display","block"),s.byRow&&!s.target&&(h.each((function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})})),l=a(h),h.each((function(){var e=t(this);e.attr("style",e.data("style-cache")||"")}))),t.each(l,(function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each((function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")}))}a.each((function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))}))})),u.each((function(){var e=t(this);e.attr("style",e.data("style-cache")||null)})),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each((function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o})),t.each(e,(function(){this.matchHeight(!0)}))};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,(function(){r._apply(this.elements,this.options)})),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout((function(){s(a),o=-1}),r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",(function(t){r._update(!1,t)})),t(window)[h]("resize orientationchange",(function(t){r._update(!0,t)}))}));
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)})((function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})}));
!(function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each((function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})}))}})(jQuery);
/*!
* metismenu https://github.com/onokumus/metismenu#readme
* A jQuery menu plugin
* @version 3.0.5
* @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* @license: MIT 
*/
!(function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):(e=e||self).metisMenu=n(e.jQuery)})(this,(function(o){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}o=o&&o.hasOwnProperty("default")?o.default:o;var i,n,r,s=(n="transitionend",r={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(e){i(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)}},(i=o).fn.mmEmulateTransitionEnd=e,i.event.special[r.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(i(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},r);function e(e){var n=this,t=!1;return i(this).one(r.TRANSITION_END,(function(){t=!0})),setTimeout((function(){t||r.triggerTransitionEnd(n)}),e),this}var t="metisMenu",g="metisMenu",l="."+g,h=o.fn[t],f={toggle:!0,preventDefault:!0,triggerElement:"a",parentTrigger:"li",subMenu:"ul"},d={SHOW:"show"+l,SHOWN:"shown"+l,HIDE:"hide"+l,HIDDEN:"hidden"+l,CLICK_DATA_API:"click"+l+".data-api"},u="metismenu",c="mm-active",p="mm-show",m="mm-collapse",T="mm-collapsing",v=(function(){function r(e,n){this.element=e,this.config=a({},f,{},n),this.transitioning=null,this.init()}var e=r.prototype;return e.init=function(){var a=this,s=this.config,e=o(this.element);e.addClass(u),e.find(s.parentTrigger+"."+c).children(s.triggerElement).attr("aria-expanded","true"),e.find(s.parentTrigger+"."+c).parents(s.parentTrigger).addClass(c),e.find(s.parentTrigger+"."+c).parents(s.parentTrigger).children(s.triggerElement).attr("aria-expanded","true"),e.find(s.parentTrigger+"."+c).has(s.subMenu).children(s.subMenu).addClass(m+" "+p),e.find(s.parentTrigger).not("."+c).has(s.subMenu).children(s.subMenu).addClass(m),e.find(s.parentTrigger).children(s.triggerElement).on(d.CLICK_DATA_API,(function(e){var n=o(this);if("true"!==n.attr("aria-disabled")){s.preventDefault&&"#"===n.attr("href")&&e.preventDefault();var t=n.parent(s.parentTrigger),i=t.siblings(s.parentTrigger),r=i.children(s.triggerElement);t.hasClass(c)?(n.attr("aria-expanded","false"),a.removeActive(t)):(n.attr("aria-expanded","true"),a.setActive(t),s.toggle&&(a.removeActive(i),r.attr("aria-expanded","false"))),s.onTransitionStart&&s.onTransitionStart(e)}}))},e.setActive=function(e){o(e).addClass(c);var n=o(e).children(this.config.subMenu);0<n.length&&!n.hasClass(p)&&this.show(n)},e.removeActive=function(e){o(e).removeClass(c);var n=o(e).children(this.config.subMenu+"."+p);0<n.length&&this.hide(n)},e.show=function(e){var n=this;if(!this.transitioning&&!o(e).hasClass(T)){var t=o(e),i=o.Event(d.SHOW);if(t.trigger(i),!i.isDefaultPrevented()){if(t.parent(this.config.parentTrigger).addClass(c),this.config.toggle){var r=t.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+p);this.hide(r)}t.removeClass(m).addClass(T).height(0),this.setTransitioning(!0);t.height(e[0].scrollHeight).one(s.TRANSITION_END,(function(){n.config&&n.element&&(t.removeClass(T).addClass(m+" "+p).height(""),n.setTransitioning(!1),t.trigger(d.SHOWN))})).mmEmulateTransitionEnd(350)}}},e.hide=function(e){var n=this;if(!this.transitioning&&o(e).hasClass(p)){var t=o(e),i=o.Event(d.HIDE);if(t.trigger(i),!i.isDefaultPrevented()){t.parent(this.config.parentTrigger).removeClass(c),t.height(t.height())[0].offsetHeight,t.addClass(T).removeClass(m).removeClass(p),this.setTransitioning(!0);var r=function(){n.config&&n.element&&(n.transitioning&&n.config.onTransitionEnd&&n.config.onTransitionEnd(),n.setTransitioning(!1),t.trigger(d.HIDDEN),t.removeClass(T).addClass(m))};0===t.height()||"none"===t.css("display")?r():t.height(0).one(s.TRANSITION_END,r).mmEmulateTransitionEnd(350)}}},e.setTransitioning=function(e){this.transitioning=e},e.dispose=function(){o.removeData(this.element,g),o(this.element).find(this.config.parentTrigger).children(this.config.triggerElement).off(d.CLICK_DATA_API),this.transitioning=null,this.config=null,this.element=null},r.jQueryInterface=function(i){return this.each((function(){var e=o(this),n=e.data(g),t=a({},f,{},e.data(),{},"object"==typeof i&&i?i:{});if(n||(n=new r(this,t),e.data(g,n)),"string"==typeof i){if(void 0===n[i])throw new Error('No method named "'+i+'"');n[i]()}}))},r})();return o.fn[t]=v.jQueryInterface,o.fn[t].Constructor=v,o.fn[t].noConflict=function(){return o.fn[t]=h,v.jQueryInterface},v}));
//# sourceMappingURL=metisMenu.min.js.map
/* mousetrap v1.6.5 craig.is/killing/mice */
(function(q,u,c){function v(a,b,g){a.addEventListener?a.addEventListener(b,g,!1):a.attachEvent("on"+b,g)}function z(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return n[a.which]?n[a.which]:r[a.which]?r[a.which]:String.fromCharCode(a.which).toLowerCase()}function F(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||
    "meta"==a}function A(a,b){var g,d=[];var e=a;"+"===e?e=["+"]:(e=e.replace(/\+{2}/g,"+plus"),e=e.split("+"));for(g=0;g<e.length;++g){var m=e[g];B[m]&&(m=B[m]);b&&"keypress"!=b&&C[m]&&(m=C[m],d.push("shift"));w(m)&&d.push(m)}e=m;g=b;if(!g){if(!p){p={};for(var c in n)95<c&&112>c||n.hasOwnProperty(c)&&(p[n[c]]=c)}g=p[e]?"keydown":"keypress"}"keypress"==g&&d.length&&(g="keydown");return{key:m,modifiers:d,action:g}}function D(a,b){return null===a||a===u?!1:a===b?!0:D(a.parentNode,b)}function d(a){function b(a){a=
    a||{};var b=!1,l;for(l in p)a[l]?b=!0:p[l]=0;b||(x=!1)}function g(a,b,t,f,g,d){var l,E=[],h=t.type;if(!k._callbacks[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(l=0;l<k._callbacks[a].length;++l){var c=k._callbacks[a][l];if((f||!c.seq||p[c.seq]==c.level)&&h==c.action){var e;(e="keypress"==h&&!t.metaKey&&!t.ctrlKey)||(e=c.modifiers,e=b.sort().join(",")===e.sort().join(","));e&&(e=f&&c.seq==f&&c.level==d,(!f&&c.combo==g||e)&&k._callbacks[a].splice(l,1),E.push(c))}}return E}function c(a,b,c,f){k.stopCallback(b,
    b.target||b.srcElement,c,f)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=z(a);b&&("keyup"==a.type&&y===b?y=!1:k.handleKey(b,F(a),a))}function m(a,g,t,f){function h(c){return function(){x=c;++p[a];clearTimeout(q);q=setTimeout(b,1E3)}}function l(g){c(t,g,a);"keyup"!==f&&(y=z(g));setTimeout(b,10)}for(var d=p[a]=0;d<g.length;++d){var e=d+1===g.length?l:h(f||
    A(g[d+1]).action);n(g[d],e,f,a,d)}}function n(a,b,c,f,d){k._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var e=a.split(" ");1<e.length?m(a,e,b,c):(c=A(a,c),k._callbacks[c.key]=k._callbacks[c.key]||[],g(c.key,c.modifiers,{type:c.action},f,a,d),k._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:d,combo:a}))}var k=this;a=a||u;if(!(k instanceof d))return new d(a);k.target=a;k._callbacks={};k._directMap={};var p={},q,y=!1,r=!1,x=!1;k._handleKey=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d,e){var f=g(a,d,e),h;d={};var k=0,l=!1;for(h=0;h<f.length;++h)f[h].seq&&(k=Math.max(k,f[h].level));for(h=0;h<f.length;++h)f[h].seq?f[h].level==k&&(l=!0,d[f[h].seq]=1,c(f[h].callback,e,f[h].combo,f[h].seq)):l||c(f[h].callback,e,f[h].combo);f="keypress"==e.type&&r;e.type!=x||w(a)||f||b(d);r=l&&"keydown"==e.type};k._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)n(a[d],b,c)};v(a,"keypress",e);v(a,"keydown",e);v(a,"keyup",e)}if(q){var n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
    18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},C={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},B={option:"alt",command:"meta","return":"enter",
    escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p;for(c=1;20>c;++c)n[111+c]="f"+c;for(c=0;9>=c;++c)n[c+96]=c.toString();d.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};d.prototype.unbind=function(a,b){return this.bind.call(this,a,(function(){}),b)};d.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};d.prototype.reset=function(){this._callbacks={};
    this._directMap={};return this};d.prototype.stopCallback=function(a,b){if(-1<(" "+b.className+" ").indexOf(" mousetrap ")||D(b,this.target))return!1;if("composedPath"in a&&"function"===typeof a.composedPath){var c=a.composedPath()[0];c!==a.target&&(b=c)}return"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};d.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};d.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b]);p=null};
    d.init=function(){var a=d(u),b;for(b in a)"_"!==b.charAt(0)&&(d[b]=(function(b){return function(){return a[b].apply(a,arguments)}})(b))};d.init();q.Mousetrap=d;"undefined"!==typeof module&&module.exports&&(module.exports=d);"function"===typeof define&&define.amd&&define((function(){return d}))}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

/**
 * Created by Azamat Mirvosiqov on 20/03/2015.
 */

var ajaxQuery = jQuery.ajax();

var lang = jQuery('html').attr('lang');

jQuery.fn.hoverIntent = function (handlerIn, handlerOut, selector) {

    var cfg = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };

    if (typeof handlerIn === "object") {
        cfg = jQuery.extend(cfg, handlerIn);
    } else if (jQuery.isFunction(handlerOut)) {
        cfg = jQuery.extend(cfg, {mouseenter: handlerIn, out: handlerOut, selector: selector});
    } else {
        cfg = jQuery.extend(cfg, {over: handlerIn, out: handlerIn, selector: handlerOut});
    }

    var cX, cY, pX, pY;

    var track = function (ev) {
        cX = ev.pageX;
        cY = ev.pageY;
    };

    var compare = function (ev, ob) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);

        if (Math.sqrt((pX - cX) * (pX - cX) + (pY - cY) * (pY - cY)) < cfg.sensitivity) {
            jQuery(ob).off("mousemove.hoverIntent", track);

            ob.hoverIntent_s = true;
            return cfg.over.apply(ob, [ev]);
        } else {

            pX = cX;
            pY = cY;

            ob.hoverIntent_t = setTimeout((function () {
                compare(ev, ob);
            }), cfg.interval);
        }
    };

    var delay = function (ev, ob) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
        ob.hoverIntent_s = false;
        return cfg.out.apply(ob, [ev]);
    };

    var handleHover = function (e) {

        var ev = jQuery.extend({}, e);
        var ob = this;

        if (ob.hoverIntent_t) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
        }

        if (e.type === "mouseenter") {
            pX = ev.pageX;
            pY = ev.pageY;
            jQuery(ob).on("mousemove.hoverIntent", track);
            if (!ob.hoverIntent_s) {
                ob.hoverIntent_t = setTimeout((function () {
                    compare(ev, ob);
                }), cfg.interval);
            }

        } else {
            jQuery(ob).off("mousemove.hoverIntent", track);
            if (ob.hoverIntent_s) {
                ob.hoverIntent_t = setTimeout((function () {
                    delay(ev, ob);
                }), cfg.timeout);
            }
        }
    };

    return this.on({'mouseenter.hoverIntent': handleHover, 'mouseleave.hoverIntent': handleHover}, cfg.selector);
};


function testVoice(e) {
    e.preventDefault();

}


jQuery(document).on('click', '#testVoice', (function(e){
    e.preventDefault();
//	alert(window.speechSynthesis)

//	var synth = window.speechSynthesis;
//
//	var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
//

//	synth.speak(utterance1);
}))

var narrator = {

    init: function(){
        if (jQuery("#speech").length < 1) {
            jQuery('body').append('<audio id="speech" src=""></audio>');
        }
    },

    player : function(){
        return document.getElementById('speech');
    },

    speak: function(text){
        if(responsiveVoice.voiceSupport() || versionIE >= 11 || versionIE >= 10 || versionIE >= 9) {
            responsiveVoice.setDefaultVoice("Russian Female");
            if(jQuery.cookie("narrator") == 'on'){
                responsiveVoice.speak(text);
            } else {
                responsiveVoice.cancel();
            }
            return false;
        } else {
            alert('Ваш браузер не поддерживает синтез речи.')
        }
    },

    play: function(){
        // responsiveVoice.play();
    },

    stop: function(){
        responsiveVoice.pause();
    }
};


jQuery(document).ready((function(){

    jQuery.fn.narrator = '1.0.0';


    jQuery('p, a, span, h1, h2, h3, h4, h5, h6, .panel-heading').hoverIntent({
        over: function(){
            if (jQuery("#speech").length == 1 && jQuery('.narratorBox').length == 0) {
                var text = jQuery(this).text();
                if (jQuery.trim(text).length > 0) {
                    jQuery(this).addClass('narratorBox loadingCursor');
                    jQuery('.narratorBox').append('<div class="loading-text"><i class="fas fa-volume-up"></i></div>');
                    narrator.speak(text);
                }
            }
        },
        timeout: 0,
        interval: 500,
        out: function(){
            jQuery('.narratorBox').removeClass('loadingCursor');
            jQuery('.narratorBox .loading-text').remove();
            jQuery(this).removeClass('narratorBox');
            narrator.stop();
            ajaxQuery.abort();
        }
    });
}));
/*
 ResponsiveVoice JS v1.5.12

 (c) 2015-2019 LearnBrite

 License: http://responsivevoice.org/license
*/
if("undefined"!=typeof responsiveVoice)console.log("ResponsiveVoice already loaded"),console.log(responsiveVoice);else var ResponsiveVoice=function(){var a=this;a.version="1.5.12";console.log("ResponsiveVoice r"+a.version);a.responsivevoices=[{name:"UK English Female",flag:"gb",gender:"f",lang:"en-GB",voiceIDs:[3,7,171,278,201,5,1,257,286,342,258,287,343,8]},{name:"UK English Male",flag:"gb",gender:"m",lang:"en-GB",voiceIDs:[0,277,202,75,4,2,256,285,341,159,6,7]},{name:"US English Female",flag:"us",
    gender:"f",lang:"en-US",voiceIDs:[39,40,41,42,383,205,204,43,173,235,283,339,408,44]},{name:"US English Male",flag:"us",gender:"m",lang:"en-US",voiceIDs:[234,282,338,236,284,340,237,382,2,4,0,6,7,75,195,169]},{name:"Arabic Male",flag:"ar",gender:"m",lang:"ar-SA",voiceIDs:[96,95,97,196,388]},{name:"Arabic Female",flag:"ar",gender:"f",lang:"ar-SA",voiceIDs:[98]},{name:"Armenian Male",flag:"hy",gender:"f",lang:"hy-AM",voiceIDs:[99]},{name:"Australian Female",flag:"au",gender:"f",lang:"en-AU",voiceIDs:[276,
        201,87,5,88]},{name:"Australian Male",flag:"au",gender:"m",lang:"en-AU",voiceIDs:[86,381,386]},{name:"Brazilian Portuguese Female",flag:"br",gender:"f",lang:"pt-BR",voiceIDs:[245,124,123,125,186,223,126]},{name:"Brazilian Portuguese Male",flag:"br",gender:"m",lang:"pt-BR",voiceIDs:[315,332,371,399]},{name:"Chinese Female",flag:"cn",gender:"f",lang:"zh-CN",voiceIDs:[249,58,59,380,281,231,155,60,191,268,297,353,269,298,354,409,61]},{name:"Chinese Male",flag:"cn",gender:"m",lang:"zh-CN",voiceIDs:[317,
        334,373,389]},{name:"Chinese (Hong Kong) Female",flag:"hk",gender:"f",lang:"zh-HK",voiceIDs:[192,193,232,250,251,270,299,355,409,252]},{name:"Chinese (Hong Kong) Male",flag:"hk",gender:"m",lang:"zh-HK",voiceIDs:[318,335,374,390]},{name:"Chinese Taiwan Female",flag:"tw",gender:"f",lang:"zh-TW",voiceIDs:[194,233,253,254,305,322,361,384,319,336,375,409,255]},{name:"Chinese Taiwan Male",flag:"tw",gender:"m",lang:"zh-TW",voiceIDs:[320,337,376,391]},{name:"Czech Female",flag:"cz",gender:"f",lang:"cs-CZ",
    voiceIDs:[101,100,102,197,103]},{name:"Czech Male",flag:"cz",gender:"m",lang:"cs-CZ",voiceIDs:[161]},{name:"Danish Female",flag:"dk",gender:"f",lang:"da-DK",voiceIDs:[105,104,106,198,107]},{name:"Danish Male",flag:"da",gender:"m",lang:"da-DK",voiceIDs:[162]},{name:"Deutsch Female",flag:"de",gender:"f",lang:"de-DE",voiceIDs:[27,28,29,30,78,170,275,199,31,261,290,346,262,291,347,32]},{name:"Deutsch Male",flag:"de",gender:"m",lang:"de-DE",voiceIDs:[307,324,363,377,393]},{name:"Dutch Female",flag:"nl",
    gender:"f",lang:"nl-NL",voiceIDs:[243,219,84,157,158,184,45]},{name:"Dutch Male",flag:"nl",gender:"m",lang:"nl-NL",voiceIDs:[157,220,407]},{name:"Finnish Female",flag:"fi",gender:"f",lang:"fi-FI",voiceIDs:[90,89,91,209,92]},{name:"Finnish Male",flag:"fi",gender:"m",lang:"fi-FI",voiceIDs:[160]},{name:"French Female",flag:"fr",gender:"f",lang:"fr-FR",voiceIDs:[240,21,22,23,77,178,279,210,266,295,351,304,321,360,26]},{name:"French Male",flag:"fr",gender:"m",lang:"fr-FR",voiceIDs:[311,328,367,378,392]},
    {name:"Greek Female",flag:"gr",gender:"f",lang:"el-GR",voiceIDs:[62,63,80,200,64]},{name:"Greek Male",flag:"gr",gender:"m",lang:"el-GR",voiceIDs:[163]},{name:"Hindi Female",flag:"hi",gender:"f",lang:"hi-IN",voiceIDs:[247,66,154,179,213,259,288,344,67]},{name:"Hindi Male",flag:"hi",gender:"m",lang:"hi-IN",voiceIDs:[394]},{name:"Hungarian Female",flag:"hu",gender:"f",lang:"hu-HU",voiceIDs:[9,10,81,214,11]},{name:"Hungarian Male",flag:"hu",gender:"m",lang:"hu-HU",voiceIDs:[164]},{name:"Indonesian Female",
        flag:"id",gender:"f",lang:"id-ID",voiceIDs:[241,111,112,180,215,113]},{name:"Indonesian Male",flag:"id",gender:"m",lang:"id-ID",voiceIDs:[395]},{name:"Italian Female",flag:"it",gender:"f",lang:"it-IT",voiceIDs:[242,33,34,35,36,37,79,181,216,271,300,356,38]},{name:"Italian Male",flag:"it",gender:"m",lang:"it-IT",voiceIDs:[312,329,368,406]},{name:"Japanese Female",flag:"jp",gender:"f",lang:"ja-JP",voiceIDs:[248,50,51,280,217,52,153,182,273,302,358,274,303,359,53]},{name:"Japanese Male",flag:"jp",gender:"m",
        lang:"ja-JP",voiceIDs:[313,330,369,379,396]},{name:"Korean Female",flag:"kr",gender:"f",lang:"ko-KR",voiceIDs:[54,55,56,156,183,218,306,323,362,384,57]},{name:"Korean Male",flag:"kr",gender:"m",lang:"ko-KR",voiceIDs:[397]},{name:"Latin Female",flag:"va",gender:"f",lang:"la",voiceIDs:[114],deprecated:!0},{name:"Latin Male",flag:"va",gender:"m",lang:"la",voiceIDs:[165]},{name:"Norwegian Female",flag:"no",gender:"f",lang:"nb-NO",voiceIDs:[72,73,221,74]},{name:"Norwegian Male",flag:"no",gender:"m",lang:"nb-NO",
        voiceIDs:[166]},{name:"Polish Female",flag:"pl",gender:"f",lang:"pl-PL",voiceIDs:[244,120,119,121,185,222,267,296,352,122]},{name:"Polish Male",flag:"pl",gender:"m",lang:"pl-PL",voiceIDs:[314,331,370,398]},{name:"Portuguese Female",flag:"br",gender:"f",lang:"pt-BR",voiceIDs:[128,127,129,187,224,272,301,357,130]},{name:"Portuguese Male",flag:"br",gender:"m",lang:"pt-BR",voiceIDs:[400]},{name:"Romanian Female",flag:"ro",gender:"f",lang:"ro-RO",voiceIDs:[151,150,152,225,46]},{name:"Russian Female",flag:"ru",
        gender:"f",lang:"ru-RU",voiceIDs:[246,47,48,83,188,226,260,289,345,49]},{name:"Russian Male",flag:"ru",gender:"m",lang:"ru-RU",voiceIDs:[316,333,372,387]},{name:"Slovak Female",flag:"sk",gender:"f",lang:"sk-SK",voiceIDs:[133,132,134,227,135]},{name:"Slovak Male",flag:"sk",gender:"m",lang:"sk-SK",voiceIDs:[167],deprecated:!0},{name:"Spanish Female",flag:"es",gender:"f",lang:"es-ES",voiceIDs:[19,238,16,17,18,20,76,174,207,263,292,348,264,293,349,15]},{name:"Spanish Male",flag:"es",gender:"m",lang:"es-ES",
        voiceIDs:[309,326,365,401]},{name:"Spanish Latin American Female",flag:"es",gender:"f",lang:"es-MX",voiceIDs:[239,137,136,138,175,208,265,294,350,139]},{name:"Spanish Latin American Male",flag:"es",gender:"m",lang:"es-MX",voiceIDs:[136,310,327,366,402]},{name:"Swedish Female",flag:"sv",gender:"f",lang:"sv-SE",voiceIDs:[85,149,228,65]},{name:"Swedish Male",flag:"sv",gender:"m",lang:"sv-SE",voiceIDs:[148,168]},{name:"Tamil Male",flag:"hi",gender:"m",lang:"hi-IN",voiceIDs:[141]},{name:"Thai Female",
        flag:"th",gender:"f",lang:"th-TH",voiceIDs:[143,142,144,189,229,145]},{name:"Thai Male",flag:"th",gender:"m",lang:"th-TH",voiceIDs:[403]},{name:"Turkish Female",flag:"tr",gender:"f",lang:"tr-TR",voiceIDs:[69,70,82,190,230,71]},{name:"Turkish Male",flag:"tr",gender:"m",lang:"tr-TR",voiceIDs:[404]},{name:"Vietnamese Female",flag:"vi",gender:"f",lang:"vi-VN",voiceIDs:[405]},{name:"Vietnamese Male",flag:"vi",gender:"m",lang:"vi-VN",voiceIDs:[146]},{name:"Afrikaans Male",flag:"af",gender:"m",lang:"af-ZA",
        voiceIDs:[93]},{name:"Albanian Male",flag:"sq",gender:"m",lang:"sq-AL",voiceIDs:[94]},{name:"Bosnian Male",flag:"bs",gender:"m",lang:"bs",voiceIDs:[14]},{name:"Catalan Male",flag:"catalonia",gender:"m",lang:"ca-ES",voiceIDs:[68]},{name:"Croatian Male",flag:"hr",gender:"m",lang:"hr-HR",voiceIDs:[13]},{name:"Esperanto Male",flag:"eo",gender:"m",lang:"eo",voiceIDs:[108]},{name:"Icelandic Male",flag:"is",gender:"m",lang:"is-IS",voiceIDs:[110]},{name:"Latvian Male",flag:"lv",gender:"m",lang:"lv-LV",voiceIDs:[115]},
    {name:"Macedonian Male",flag:"mk",gender:"m",lang:"mk-MK",voiceIDs:[116]},{name:"Moldavian Female",flag:"md",gender:"f",lang:"md",voiceIDs:[117]},{name:"Moldavian Male",flag:"md",gender:"m",lang:"md",voiceIDs:[117],deprecated:!0},{name:"Montenegrin Male",flag:"me",gender:"m",lang:"me",voiceIDs:[118]},{name:"Serbian Male",flag:"sr",gender:"m",lang:"sr-RS",voiceIDs:[12]},{name:"Serbo-Croatian Male",flag:"hr",gender:"m",lang:"hr-HR",voiceIDs:[131]},{name:"Swahili Male",flag:"sw",gender:"m",lang:"sw-KE",
        voiceIDs:[140]},{name:"Welsh Male",flag:"cy",gender:"m",lang:"cy",voiceIDs:[147]},{name:"Fallback UK Female",flag:"gb",gender:"f",lang:"en-GB",voiceIDs:[8]}];a.voicecollection=[{name:"Google UK English Male"},{name:"Agnes"},{name:"Daniel Compact"},{name:"Google UK English Female"},{name:"en-GB",rate:.25,pitch:1},{name:"en-AU",rate:.25,pitch:1},{name:"ingl\u00e9s Reino Unido"},{name:"English United Kingdom"},{name:"Fallback en-GB Female",lang:"en-GB",fallbackvoice:!0,service:"g1",gender:"female"},
    {name:"Eszter Compact"},{name:"hu-HU",rate:.4},{name:"Fallback Hungarian Female",lang:"hu",fallbackvoice:!0,service:"g1"},{name:"Fallback Serbian Male",lang:"sr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Croatian Male",lang:"hr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Bosnian Male",lang:"bs",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish Female",lang:"es",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Spanish Spain"},{name:"espa\u00f1ol Espa\u00f1a"},
    {name:"Diego Compact",rate:.3},{name:"Google Espa\u00f1ol"},{name:"es-ES",rate:.2},{name:"Google Fran\u00e7ais"},{name:"French France"},{name:"franc\u00e9s Francia"},{name:"Virginie Compact",rate:.5},{name:"fr-FR",rate:.25},{name:"Fallback French Female",lang:"fr",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google Deutsch"},{name:"German Germany"},{name:"alem\u00e1n Alemania"},{name:"Yannick Compact",rate:.5},{name:"de-DE",rate:.25},{name:"Fallback Deutsch Female",lang:"de",fallbackvoice:!0,
        service:"g1",gender:"female"},{name:"Google Italiano"},{name:"Italian Italy"},{name:"italiano Italia"},{name:"Paolo Compact",rate:.5},{name:"it-IT",rate:.25},{name:"Fallback Italian Female",lang:"it",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google US English",timerSpeed:1},{name:"English United States"},{name:"ingl\u00e9s Estados Unidos"},{name:"Vicki"},{name:"en-US",rate:.2,pitch:1,timerSpeed:1.3},{name:"Fallback US English",lang:"en-US",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"female"},
    {name:"Fallback Dutch Female",lang:"nl",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"female"},{name:"Fallback Romanian",lang:"ro",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Milena Compact"},{name:"ru-RU",rate:.25},{name:"Fallback Russian",lang:"ru",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u65e5\u672c\u4eba",timerSpeed:1},{name:"Kyoko Compact"},{name:"ja-JP",rate:.25},{name:"Fallback Japanese Female",lang:"ja",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \ud55c\uad6d\uc758",
        timerSpeed:1},{name:"Narae Compact"},{name:"ko-KR",rate:.25},{name:"Fallback Korean Female",lang:"ko",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u4e2d\u56fd\u7684",timerSpeed:1},{name:"Ting-Ting Compact"},{name:"zh-CN",rate:.25},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Alexandros Compact"},{name:"el-GR",rate:.25},{name:"Fallback Greek",lang:"el",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Swedish",lang:"sv",fallbackvoice:!0,
        service:"g2",gender:"female"},{name:"hi-IN",rate:.25},{name:"Fallback Hindi Female",lang:"hi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Catalan",lang:"ca",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Aylin Compact"},{name:"tr-TR",rate:.25},{name:"Fallback Turkish",lang:"tr",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Stine Compact"},{name:"no-NO",rate:.25},{name:"Fallback Norwegian",lang:"no",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Daniel"},{name:"Monica"},
    {name:"Amelie"},{name:"Anna"},{name:"Alice"},{name:"Melina"},{name:"Mariska"},{name:"Yelda"},{name:"Milena"},{name:"Xander"},{name:"Alva"},{name:"Lee Compact"},{name:"Karen"},{name:"Fallback Australian Female",lang:"en-AU",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Mikko Compact"},{name:"Satu"},{name:"fi-FI",rate:.25},{name:"Fallback Finnish",lang:"fi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Afrikans",lang:"af",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Albanian",
        lang:"sq",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Maged Compact"},{name:"Tarik"},{name:"ar-SA",rate:.25},{name:"Fallback Arabic",lang:"ar",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Armenian",lang:"hy",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Zuzana Compact"},{name:"Zuzana"},{name:"cs-CZ",rate:.25},{name:"Fallback Czech",lang:"cs",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Ida Compact"},{name:"Sara"},{name:"da-DK",rate:.25},{name:"Fallback Danish",
        lang:"da",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Esperanto",lang:"eo",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Haitian Creole",lang:"ht",fallbackvoice:!0},{name:"Fallback Icelandic",lang:"is",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Damayanti"},{name:"id-ID",rate:.25},{name:"Fallback Indonesian Female",lang:"id",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Latin Female",lang:"la",fallbackvoice:!0,service:"g2",gender:"female"},
    {name:"Fallback Latvian Male",lang:"lv",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Macedonian Male",lang:"mk",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Moldavian Female",lang:"mo",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Montenegrin Male",lang:"sr-ME",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Agata Compact"},{name:"Zosia"},{name:"pl-PL",rate:.25},{name:"Fallback Polish Female",lang:"pl",fallbackvoice:!0,service:"g1",gender:"female"},
    {name:"Raquel Compact"},{name:"Luciana"},{name:"pt-BR",rate:.25},{name:"Fallback Brazilian Portuguese Female",lang:"pt-BR",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Joana Compact"},{name:"Joana"},{name:"pt-PT",rate:.25},{name:"Fallback Portuguese",lang:"pt-PT",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Serbo-Croation",lang:"sh",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Laura Compact"},{name:"Laura"},{name:"sk-SK",rate:.25},{name:"Fallback Slovak",lang:"sk",
        fallbackvoice:!0,service:"g1",gender:"female"},{name:"Javier Compact"},{name:"Paulina"},{name:"es-MX",rate:.25},{name:"Fallback Spanish (Latin American) Female",lang:"es-419",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Swahili",lang:"sw",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Tamil",lang:"ta",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Narisa Compact"},{name:"Kanya"},{name:"th-TH",rate:.25},{name:"Fallback Thai Female",lang:"th",fallbackvoice:!0,service:"g1",
        gender:"female"},{name:"Fallback Vietnamese Male",lang:"vi",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Welsh",lang:"cy",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Oskar Compact"},{name:"sv-SE",rate:.25},{name:"Simona Compact"},{name:"Ioana"},{name:"ro-RO",rate:.25},{name:"Kyoko"},{name:"Lekha"},{name:"Ting-Ting"},{name:"Yuna"},{name:"Xander Compact"},{name:"nl-NL",rate:.25},{name:"Fallback UK English Male",lang:"en-GB",fallbackvoice:!0,service:"g1",voicename:"rjs",gender:"male"},
    {name:"Finnish Male",lang:"fi",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Czech Male",lang:"cs",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Danish Male",lang:"da",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Greek Male",lang:"el",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Hungarian Male",lang:"hu",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Latin Male",lang:"la",fallbackvoice:!0,service:"g2",
        voicename:"",gender:"male"},{name:"Norwegian Male",lang:"no",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Slovak Male",lang:"sk",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Swedish Male",lang:"sv",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Fallback US English Male",lang:"en-US",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"German Germany",lang:"de_DE"},{name:"English United Kingdom",lang:"en_GB"},{name:"English India",
        lang:"en_IN"},{name:"English United States",lang:"en_US"},{name:"Spanish Spain",lang:"es_ES"},{name:"Spanish Mexico",lang:"es_MX"},{name:"Spanish United States",lang:"es_US"},{name:"French Belgium",lang:"fr_BE"},{name:"French France",lang:"fr_FR"},{name:"Hindi India",lang:"hi_IN"},{name:"Indonesian Indonesia",lang:"in_ID"},{name:"Italian Italy",lang:"it_IT"},{name:"Japanese Japan",lang:"ja_JP"},{name:"Korean South Korea",lang:"ko_KR"},{name:"Dutch Netherlands",lang:"nl_NL"},{name:"Polish Poland",
        lang:"pl_PL"},{name:"Portuguese Brazil",lang:"pt_BR"},{name:"Portuguese Portugal",lang:"pt_PT"},{name:"Russian Russia",lang:"ru_RU"},{name:"Thai Thailand",lang:"th_TH"},{name:"Turkish Turkey",lang:"tr_TR"},{name:"Chinese China",lang:"zh_CN_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hant"},{name:"Chinese Taiwan",lang:"zh_TW_#Hant"},{name:"Alex"},{name:"Maged",lang:"ar-SA"},{name:"Zuzana",lang:"cs-CZ"},{name:"Sara",lang:"da-DK"},{name:"Anna",lang:"de-DE"},
    {name:"Melina",lang:"el-GR"},{name:"Karen",lang:"en-AU"},{name:"Daniel",lang:"en-GB"},{name:"Moira",lang:"en-IE"},{name:"Samantha (Enhanced)",lang:"en-US"},{name:"Samantha",lang:"en-US"},{name:"Tessa",lang:"en-ZA"},{name:"Monica",lang:"es-ES"},{name:"Paulina",lang:"es-MX"},{name:"Satu",lang:"fi-FI"},{name:"Amelie",lang:"fr-CA"},{name:"Thomas",lang:"fr-FR"},{name:"Carmit",lang:"he-IL"},{name:"Lekha",lang:"hi-IN"},{name:"Mariska",lang:"hu-HU"},{name:"Damayanti",lang:"id-ID"},{name:"Alice",lang:"it-IT"},
    {name:"Kyoko",lang:"ja-JP"},{name:"Yuna",lang:"ko-KR"},{name:"Ellen",lang:"nl-BE"},{name:"Xander",lang:"nl-NL"},{name:"Nora",lang:"no-NO"},{name:"Zosia",lang:"pl-PL"},{name:"Luciana",lang:"pt-BR"},{name:"Joana",lang:"pt-PT"},{name:"Ioana",lang:"ro-RO"},{name:"Milena",lang:"ru-RU"},{name:"Laura",lang:"sk-SK"},{name:"Alva",lang:"sv-SE"},{name:"Kanya",lang:"th-TH"},{name:"Yelda",lang:"tr-TR"},{name:"Ting-Ting",lang:"zh-CN"},{name:"Sin-Ji",lang:"zh-HK"},{name:"Mei-Jia",lang:"zh-TW"},{name:"Microsoft David Mobile - English (United States)",
        lang:"en-US"},{name:"Microsoft Zira Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Mark Mobile - English (United States)",lang:"en-US"},{name:"native",lang:""},{name:"Google espa\u00f1ol"},{name:"Google espa\u00f1ol de Estados Unidos"},{name:"Google fran\u00e7ais"},{name:"Google Bahasa Indonesia"},{name:"Google italiano"},{name:"Google Nederlands"},{name:"Google polski"},{name:"Google portugu\u00eas do Brasil"},{name:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"},{name:"Google \u0939\u093f\u0928\u094d\u0926\u0940"},
    {name:"Google \u65e5\u672c\u8a9e"},{name:"Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-HK",rate:.25},{name:"Fallback Chinese (Hong Kong) Female",lang:"zh-HK",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-TW",rate:.25},{name:"Fallback Chinese (Taiwan) Female",lang:"zh-TW",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Microsoft George Mobile - English (United Kingdom)",
        lang:"en-GB"},{name:"Microsoft Susan Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Mobile - English (India)",lang:"en-In"},{name:"Microsoft Irina Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Mobile - Spanish (Spain)",
        lang:"es-ES"},{name:"Microsoft Sabina Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa Mobile - Italian (Italy)",lang:"it-IT"},
    {name:"Microsoft Maria Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Helena",lang:"de-DE"},{name:"Catherine",lang:"en-AU"},{name:"Arthur",lang:"en-GB"},{name:"Martha",lang:"en-GB"},{name:"Marie",lang:"fr-FR"},{name:"O-ren",lang:"ja-JP"},{name:"Yu-shu",lang:"zh-CN"},{name:"Microsoft David - English (United States)",lang:"en-US"},{name:"Microsoft Zira - English (United States)",
        lang:"en-US"},{name:"Microsoft Mark - English (United States)",lang:"en-US"},{name:"Microsoft George - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera - English (India)",lang:"en-In"},{name:"Microsoft Irina - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena - Spanish (Spain)",
        lang:"es-ES"},{name:"Microsoft Laura - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa - Italian (Italy)",lang:"it-IT"},
    {name:"Microsoft Maria - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi - English (India)",lang:"en-IN"},{name:"Microsoft Pablo - Spanish (Spain)",
        lang:"es-ES"},{name:"Microsoft Raul - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",
        lang:"zh-HK"},{name:"Microsoft Yating - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Hortense Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Mobile - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi Mobile - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Mobile - Spanish (Spain)",
        lang:"es-ES"},{name:"Microsoft Raul Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",
        lang:"zh-CN"},{name:"Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft David Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Zira Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Mark Desktop - English (United States)",lang:"en-US"},{name:"Microsoft George Desktop - English (United Kingdom)",
        lang:"en-GB"},{name:"Microsoft Susan Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Desktop - English (India)",lang:"en-In"},{name:"Microsoft Irina Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Desktop - Spanish (Spain)",
        lang:"es-ES"},{name:"Microsoft Sabina Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa Desktop - Italian (Italy)",lang:"it-IT"},
    {name:"Microsoft Maria Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi Desktop - English (India)",
        lang:"en-IN"},{name:"Microsoft Pablo Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel Desktop - Russian (Russia)",
        lang:"ru-RU"},{name:"Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Martin",lang:"de-DE"},{name:"Daniel",lang:"fr-FR"},{name:"Hattori",lang:"ja-JP"},{name:"Li-mu",lang:"zh-CN"},{name:"Gordon",lang:"en-AU"},{name:"Aaron",lang:"en-US"},
    {name:"Nicky",lang:"en-US"},{name:"Microsoft Hanhan Desktop - Chinese (Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean",lang:"ko-KR"},{name:"Fallback Australian Male",lang:"en-AU",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Russian Male",lang:"ru",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Arabic Male",lang:"ar",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Chinese HK",
        lang:"zh-HK",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Chinese TW",lang:"zh-TW",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback French Male",lang:"fr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Deutsch Male",lang:"de",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Hindi Male",lang:"hi",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Indonesian Male",lang:"id",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Japanese Male",
        lang:"ja",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Korean Male",lang:"ko",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Polish Male",lang:"pl",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Brazilian Portuguese Male",lang:"pt-BR",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Portuguese Male",lang:"pt-PT",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish Male",lang:"es",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish (Latin American) Male",
        lang:"es-419",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Thai Male",lang:"th",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Turkish Male",lang:"tr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Vietnamese Female",lang:"vi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Italian Male",lang:"it",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Dutch Male",lang:"nl",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"male"},{name:"Microsoft Anna - English (United States)",
        lang:"en-US",gender:"female"},{name:"Microsoft Lili - Chinese (China)",lang:"zh-CN",gender:"female"}];a.iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);a.iOS9=/(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());a.iOS10=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());a.iOS11=/(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());a.iOS9plus=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase())||/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
    a.iOS12_0=/(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());a.iOS12=/(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());a.is_chrome=-1<navigator.userAgent.indexOf("Chrome");a.is_safari=-1<navigator.userAgent.indexOf("Safari");a.is_chrome&&a.is_safari&&(a.is_safari=!1);a.is_opera=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/");a.is_android=-1<navigator.userAgent.toLowerCase().indexOf("android");a.iOS_initialized=!1;a.iOS9_initialized=!1;a.iOS10_initialized=
        !1;a.iOS11_initialized=!1;a.cache_ios_voices=[{name:"he-IL",voiceURI:"he-IL",lang:"he-IL"},{name:"th-TH",voiceURI:"th-TH",lang:"th-TH"},{name:"pt-BR",voiceURI:"pt-BR",lang:"pt-BR"},{name:"sk-SK",voiceURI:"sk-SK",lang:"sk-SK"},{name:"fr-CA",voiceURI:"fr-CA",lang:"fr-CA"},{name:"ro-RO",voiceURI:"ro-RO",lang:"ro-RO"},{name:"no-NO",voiceURI:"no-NO",lang:"no-NO"},{name:"fi-FI",voiceURI:"fi-FI",lang:"fi-FI"},{name:"pl-PL",voiceURI:"pl-PL",lang:"pl-PL"},{name:"de-DE",voiceURI:"de-DE",lang:"de-DE"},{name:"nl-NL",
        voiceURI:"nl-NL",lang:"nl-NL"},{name:"id-ID",voiceURI:"id-ID",lang:"id-ID"},{name:"tr-TR",voiceURI:"tr-TR",lang:"tr-TR"},{name:"it-IT",voiceURI:"it-IT",lang:"it-IT"},{name:"pt-PT",voiceURI:"pt-PT",lang:"pt-PT"},{name:"fr-FR",voiceURI:"fr-FR",lang:"fr-FR"},{name:"ru-RU",voiceURI:"ru-RU",lang:"ru-RU"},{name:"es-MX",voiceURI:"es-MX",lang:"es-MX"},{name:"zh-HK",voiceURI:"zh-HK",lang:"zh-HK"},{name:"sv-SE",voiceURI:"sv-SE",lang:"sv-SE"},{name:"hu-HU",voiceURI:"hu-HU",lang:"hu-HU"},{name:"zh-TW",voiceURI:"zh-TW",
        lang:"zh-TW"},{name:"es-ES",voiceURI:"es-ES",lang:"es-ES"},{name:"zh-CN",voiceURI:"zh-CN",lang:"zh-CN"},{name:"nl-BE",voiceURI:"nl-BE",lang:"nl-BE"},{name:"en-GB",voiceURI:"en-GB",lang:"en-GB"},{name:"ar-SA",voiceURI:"ar-SA",lang:"ar-SA"},{name:"ko-KR",voiceURI:"ko-KR",lang:"ko-KR"},{name:"cs-CZ",voiceURI:"cs-CZ",lang:"cs-CZ"},{name:"en-ZA",voiceURI:"en-ZA",lang:"en-ZA"},{name:"en-AU",voiceURI:"en-AU",lang:"en-AU"},{name:"da-DK",voiceURI:"da-DK",lang:"da-DK"},{name:"en-US",voiceURI:"en-US",lang:"en-US"},
        {name:"en-IE",voiceURI:"en-IE",lang:"en-IE"},{name:"hi-IN",voiceURI:"hi-IN",lang:"hi-IN"},{name:"el-GR",voiceURI:"el-GR",lang:"el-GR"},{name:"ja-JP",voiceURI:"ja-JP",lang:"ja-JP"}];a.cache_ios9_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA",localService:!0,"default":!0},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ",localService:!0,"default":!0},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK",localService:!0,"default":!0},
        {name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE",localService:!0,"default":!0},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR",localService:!0,"default":!0},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU",localService:!0,"default":!0},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB",localService:!0,"default":!0},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE",localService:!0,"default":!0},
        {name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US",localService:!0,"default":!0},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US",localService:!0,"default":!0},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA",localService:!0,"default":!0},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES",localService:!0,"default":!0},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX",
            localService:!0,"default":!0},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI",localService:!0,"default":!0},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA",localService:!0,"default":!0},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR",localService:!0,"default":!0},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL",localService:!0,"default":!0},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",
            lang:"hi-IN",localService:!0,"default":!0},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU",localService:!0,"default":!0},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID",localService:!0,"default":!0},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT",localService:!0,"default":!0},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP",localService:!0,"default":!0},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",
            lang:"ko-KR",localService:!0,"default":!0},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE",localService:!0,"default":!0},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL",localService:!0,"default":!0},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO",localService:!0,"default":!0},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL",localService:!0,"default":!0},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",
            lang:"pt-BR",localService:!0,"default":!0},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT",localService:!0,"default":!0},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO",localService:!0,"default":!0},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU",localService:!0,"default":!0},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK",localService:!0,"default":!0},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",
            lang:"sv-SE",localService:!0,"default":!0},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH",localService:!0,"default":!0},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR",localService:!0,"default":!0},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN",localService:!0,"default":!0},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK",localService:!0,"default":!0},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",
            lang:"zh-TW",localService:!0,"default":!0}];a.cache_ios10_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ"},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",
        lang:"de-DE"},{name:"Nikos (Enhanced)",voiceURI:"com.apple.ttsbundle.Nikos-premium",lang:"el-GR"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Nikos",voiceURI:"com.apple.ttsbundle.Nikos-compact",lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Daniel (Enhanced)",
        voiceURI:"com.apple.ttsbundle.Daniel-premium",lang:"en-GB"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Nicky (Enhanced)",voiceURI:"com.apple.ttsbundle.siri_female_en-US_premium",lang:"en-US"},{name:"Samantha (Enhanced)",
        voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",
        lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",
        lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU"},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",
        lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",
        lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",
        lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.cache_ios11_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ"},
        {name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",lang:"de-DE"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",
            lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",
            voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",
            lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",
            lang:"hu-HU"},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",
            lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",
            lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",
            lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.systemvoices=null;a.CHARACTER_LIMIT=100;a.VOICESUPPORT_ATTEMPTLIMIT=5;a.voicesupport_attempts=0;a.fallbackMode=!1;a.WORDS_PER_MINUTE=130;a.fallback_audio=null;a.fallback_playbackrate=1;a.def_fallback_playbackrate=a.fallback_playbackrate;a.fallback_audiopool=[];a.msgparameters=null;a.timeoutId=null;a.OnLoad_callbacks=[];a.useTimer=
        !1;a.utterances=[];a.userInteractionEvents=["mousedown","mouseup","mousewheel","keydown"];a.fallbackBufferLength=5;a.tstCompiled=function(a){return eval("typeof xy === 'undefined'")};a.fallbackServicePath="https://code.responsivevoice.org/"+(a.tstCompiled()?"":"develop/")+"getvoice.php";a.default_rv=a.responsivevoices[0];a.debug=!1;a.rvsMapped=!1;a.forcedFallbackMode=!1;a.speechAllowedByUser=!0;a.log=function(b){a.debug&&console.log(b)};a.init=function(){a.is_android&&(a.useTimer=!0);a.is_opera||
    "undefined"===typeof speechSynthesis?(console.log("RV: Voice synthesis not supported"),a.enableFallbackMode()):setTimeout((function(){var b=setInterval((function(){var c=window.speechSynthesis.getVoices();0!=c.length||null!=a.systemvoices&&0!=a.systemvoices.length?(console.log("RV: Voice support ready"),a.systemVoicesReady(c),clearInterval(b)):(console.log("Voice support NOT ready"),a.voicesupport_attempts++,a.voicesupport_attempts>a.VOICESUPPORT_ATTEMPTLIMIT&&(clearInterval(b),null!=window.speechSynthesis?
        a.iOS?(a.iOS11?a.systemVoicesReady(a.cache_ios11_voices):a.iOS10?a.systemVoicesReady(a.cache_ios10_voices):a.iOS9?a.systemVoicesReady(a.cache_ios9_voices):a.systemVoicesReady(a.cache_ios_voices),console.log("RV: Voice support ready (cached)")):(console.log("RV: speechSynthesis present but no system voices found"),a.enableFallbackMode()):a.enableFallbackMode()))}),100)}),100);(a.iOS||a.is_android||a.is_safari)&&a.enableWindowClickHook();a.Dispatch("OnLoad")};a.systemVoicesReady=function(b){a.systemvoices=
        b;a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.enableFallbackMode=function(){a.fallbackMode=!0;a.forcedFallbackMode=!0;console.log("RV: Enabling fallback mode");a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));a.Dispatch("OnServiceSwitched")};
    a.getVoices=function(){for(var b=[],c=0;c<a.responsivevoices.length;c++)b.push({name:a.responsivevoices[c].name});return b};a.speak=function(b,c,d){if(a.rvsMapped){var h=null;if(a.isPlaying())a.log("Cancelling previous speech"),a.cancel(),setTimeout((function(){a.speak(b,c,d)}),50);else{b=b.replace(/["`]/gm,"'");a.msgparameters=d||{};a.msgtext=b;a.msgvoicename=c;a.onstartFired=!1;var k=[];if(b.length>a.CHARACTER_LIMIT){for(var f=b;f.length>a.CHARACTER_LIMIT;){var g=f.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/),
        e="";if(-1==g||g>=a.CHARACTER_LIMIT)g=f.search(/,[^0-9]+/);if(-1==g||g>=a.CHARACTER_LIMIT){var l=f.split(" ");for(g=0;g<l.length;g++){if(e.length+l[g].length+1>a.CHARACTER_LIMIT){l[g].length>=a.CHARACTER_LIMIT&&(e+=l[g].substr(0,a.CHARACTER_LIMIT-e.length-1));break}e+=(0!=g?" ":"")+l[g]}}else e=f.substr(0,g+1);f=f.substr(e.length,f.length-e.length);k.push(e)}0<f.length&&k.push(f)}else k.push(b);console.log(k);a.multipartText=k;null==c?(g=a.default_rv,a.setDefaultVoice(g.name)):g=a.getResponsiveVoice(c);
        !0===g.deprecated&&console.warn("ResponsiveVoice: Voice "+g.name+" is deprecated and will be removed in future releases");f={};if(null!=g.mappedProfile)f=g.mappedProfile;else if(f.systemvoice=a.getMatchedVoice(g),f.collectionvoice={},null==f.systemvoice){console.log("RV: ERROR: No voice found for: "+c);return}if(a.checkSpeechAllowed()){a.fallbackMode&&0<a.fallback_audiopool.length&&a.clearFallbackPool();a.msgprofile=f;a.log("Voice picked: "+a.msgprofile.systemvoice.name);a.utterances=[];a.fallbackChunks=
            [];for(g=0;g<k.length;g++)if(!a.fallbackMode&&a.getServiceEnabled(a.services.NATIVE_TTS))a.log("Using SpeechSynthesis"),h=a.services.NATIVE_TTS,e=new SpeechSynthesisUtterance,e.voiceURI=f.systemvoice.voiceURI,e.volume=a.selectBest([f.collectionvoice.volume,f.systemvoice.volume,1]),e.rate=a.selectBest([a.iOS9plus?1:null,f.collectionvoice.rate,f.systemvoice.rate,1]),e.pitch=a.selectBest([f.collectionvoice.pitch,f.systemvoice.pitch,1]),e.text=k[g],e.lang=a.selectBest([f.collectionvoice.lang,f.systemvoice.lang]),
            e.rvIndex=g,e.rvTotal=k.length,0==g&&(e.onstart=a.speech_onstart),a.msgparameters.onendcalled=!1,null!=d?(e.voice="undefined"!==typeof d.voice?d.voice:f.systemvoice,g<k.length-1&&1<k.length?(e.onend=a.onPartEnd,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.onPartEnd)):(e.onend=a.speech_onend,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.speech_onend)),e.onerror=d.onerror||function(b){a.log("RV: Unknow Error");a.log(b)},d.rate=a.validateParameters(d,"rate"),d.pitch=
            a.validateParameters(d,"pitch"),d.volume=a.validateParameters(d,"volume"),e.onpause=d.onpause,e.onresume=d.onresume,e.onmark=d.onmark,e.onboundary=d.onboundary||a.onboundary,e.pitch=null!=d.pitch?d.pitch:e.pitch,e.rate=a.iOS?(null!=d.rate?d.rate*d.rate:1)*e.rate:(null!=d.rate?d.rate:1)*e.rate,e.volume=null!=d.volume?d.volume:e.volume):(a.log("No Params received for current Utterance"),e.voice=f.systemvoice,e.onend=a.speech_onend,e.onboundary=a.onboundary,e.onerror=function(b){a.log("RV: Unknow Error");
            a.log(b)}),a.utterances.push(e),0==g&&(a.currentMsg=e),console.log(e),a.tts_speak(e);else if(a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)){h=a.services.FALLBACK_AUDIO;a.fallback_playbackrate=a.def_fallback_playbackrate;e=a.selectBest([f.collectionvoice.pitch,f.systemvoice.pitch,1]);l=a.selectBest([a.iOS9plus?1:null,f.collectionvoice.rate,f.systemvoice.rate,1]);var m=a.selectBest([f.collectionvoice.volume,f.systemvoice.volume,1]);if(null!=d){e*=null!=d.pitch?d.pitch:1;l*=null!=d.rate?
            d.rate:1;m*=null!=d.volume?d.volume:1;var n=d.extraParams||null}e/=2;l/=2;m*=2;e=Math.min(Math.max(e,0),1);l=Math.min(Math.max(l,0),1);m=Math.min(Math.max(m,0),1);e=a.fallbackServicePath+"?t="+encodeURIComponent(k[g])+"&tl="+(f.collectionvoice.lang||f.systemvoice.lang||"en-US")+"&sv="+(f.collectionvoice.service||f.systemvoice.service||"")+"&vn="+(f.collectionvoice.voicename||f.systemvoice.voicename||"")+"&pitch="+e.toString()+"&rate="+l.toString()+"&vol="+m.toString();void 0!==f.collectionvoice.gender&&
        (e+="&gender="+f.collectionvoice.gender);n&&(e+="&extraParams="+JSON.stringify(n));a.fallbackChunks.push({text:k[g],url:e,audio:null})}a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)&&(a.fallbackChunkIndex=0,a.fallback_startPart());a.log("Service used: "+h)}else a.scheduledSpeak={text:b,voicename:c,parameters:d}}}else setTimeout((function(){a.speak(b,c,d)}),15)};a.startTimeout=function(b,c){var d=a.msgprofile.collectionvoice.timerSpeed;null==a.msgprofile.collectionvoice.timerSpeed&&(d=
        1);0>=d||(a.timeoutId=setTimeout(c,a.getEstimatedTimeLength(b,d)),a.log("Timeout ID: "+a.timeoutId))};a.checkAndCancelTimeout=function(){null!=a.timeoutId&&(clearTimeout(a.timeoutId),a.timeoutId=null)};a.speech_timedout=function(){a.cancel();a.cancelled=!1;a.speech_onend()};a.speech_onend=function(){a.checkAndCancelTimeout();!0===a.cancelled?a.cancelled=!1:(a.log("on end fired"),null!=a.msgparameters&&null!=a.msgparameters.onend&&1!=a.msgparameters.onendcalled&&(a.log("Speech on end called  -"+a.msgtext),
        a.msgparameters.onendcalled=!0,a.msgparameters.onend()))};a.speech_onstart=function(){if(!a.onstartFired){a.onstartFired=!0;a.log("Speech start");if(a.iOS||a.is_safari||a.useTimer)a.fallbackMode||a.startTimeout(a.msgtext,a.speech_timedout);a.msgparameters.onendcalled=!1;if(null!=a.msgparameters&&null!=a.msgparameters.onstart)a.msgparameters.onstart()}};a.fallback_startPart=function(){0==a.fallbackChunkIndex&&a.speech_onstart();a.fallback_updateChunksBuffer();a.fallback_audio=a.fallbackChunks[a.fallbackChunkIndex].audio;
        null==a.fallback_audio?a.log("RV: Fallback Audio is not available"):(function(){var b=a.fallback_audio;setTimeout((function(){b.playbackRate=a.fallback_playbackrate}),50);b.onloadedmetadata=function(){b.playbackRate=a.fallback_playbackrate};if(2<=b.readyState)b.play();else{var c=function(){b.play();b.removeEventListener("canplaythrough",c)};b.addEventListener("canplaythrough",c,!1)}}(),a.fallback_errors&&(a.log("RV: Speech cancelled due to errors"),a.speech_onend()),a.fallback_audio.addEventListener("ended",
            a.fallback_finishPart),a.useTimer&&a.startTimeout(a.multipartText[a.fallbackChunkIndex],a.fallback_finishPart))};a.isFallbackAudioPlaying=function(){var b;for(b=0;b<a.fallback_audiopool.length;b++){var c=a.fallback_audiopool[b];if(!c.paused&&!c.ended&&c.currentTime!=c.duration)return!0}return!1};a.fallback_finishPart=function(b){a.isFallbackAudioPlaying()?(a.checkAndCancelTimeout(),a.timeoutId=setTimeout(a.fallback_finishPart,1E3*(a.fallback_audio.duration-a.fallback_audio.currentTime))):(a.checkAndCancelTimeout(),
        a.fallbackChunkIndex<a.fallbackChunks.length-1?(a.fallbackChunkIndex++,a.fallback_startPart()):a.speech_onend())};a.cancel=function(){a.checkAndCancelTimeout();a.fallbackMode?(null!=a.fallback_audio&&a.fallback_audio.pause(),a.clearFallbackPool()):(a.cancelled=!0,speechSynthesis.cancel())};a.voiceSupport=function(){return"speechSynthesis"in window};a.OnFinishedPlaying=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onend)a.msgparameters.onend()};a.setDefaultVoice=function(b){if(a.rvsMapped){var c=
        a.getResponsiveVoice(b);null!=c&&(a.default_rv=c)}else setTimeout((function(){a.setDefaultVoice(b)}),15)};a.mapRVs=function(){if("object"==typeof navigator){var b,c="anguage";var d=navigator;d=(b=d["l"+c+"s"],b&&b.length?b:(c=d["l"+c]||d["browserL"+c]||d["userL"+c])?[c]:c)}else d=void 0;b=d[0];for(c=0;c<a.responsivevoices.length;c++){d=a.responsivevoices[c];for(var h=0;h<d.voiceIDs.length;h++){var k=a.voicecollection[d.voiceIDs[h]];if(1!=k.fallbackvoice){var f=a.getSystemVoice(k.name);a.forcedFallbackMode&&
    (f=null);a.iOS12_0&&d.lang.toLowerCase()!=b.toLowerCase()&&d.lang.toLowerCase().split("-")[0]!=b.toLowerCase()&&(f=null);if(null!=f){d.mappedProfile={systemvoice:f,collectionvoice:k};break}}else{d.mappedProfile={systemvoice:{},collectionvoice:k};break}}}a.rvsMapped=!0};a.getMatchedVoice=function(b){for(var c=0;c<b.voiceIDs.length;c++){var d=a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);if(null!=d)return d}return null};a.getSystemVoice=function(b){var c=String.fromCharCode(160);var d=b.replace(new RegExp("\\s+|"+
        c,"g"),"");if("undefined"===typeof a.systemvoices||null===a.systemvoices)return null;for(var h=0;h<a.systemvoices.length;h++)if(0===a.systemvoices[h].name.localeCompare(b)||0===a.systemvoices[h].name.replace(new RegExp("\\s+|"+c,"g"),"").replace(/ *\([^)]*\) */g,"").localeCompare(d))return a.systemvoices[h];return null};a.getResponsiveVoice=function(b){for(var c=0;c<a.responsivevoices.length;c++)if(a.responsivevoices[c].name==b)return b=a.fallbackMode,a.fallbackMode=!0===a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice||
    !0===a.forcedFallbackMode?!0:!1,b!=a.fallbackMode&&(a.mapRVs(),a.Dispatch("OnServiceSwitched")),a.responsivevoices[c];return null};a.Dispatch=function(b){if(a.hasOwnProperty(b+"_callbacks")&&null!=a[b+"_callbacks"]&&0<a[b+"_callbacks"].length){for(var c=a[b+"_callbacks"],d=0;d<c.length;d++)c[d]();return!0}var h=b+"_callbacks_timeout",k=b+"_callbacks_timeoutCount";a.hasOwnProperty(h)||(a[k]=10,a[h]=setInterval((function(){--a[k];(a.Dispatch(b)||0>a[k])&&clearTimeout(a[h])}),50));return!1};a.AddEventListener=
        function(b,c){a.hasOwnProperty(b+"_callbacks")||(a[b+"_callbacks"]=[]);a[b+"_callbacks"].push(c)};a.addEventListener=a.AddEventListener;a.RemoveEventListener=function(b,c){a[b+"_callbacks"]&&-1!=a[b+"_callbacks"].indexOf(c)&&a[b+"_callbacks"].splice(a[b+"_callbacks"].indexOf(c),1)};a.clickEvent=function(){a.log("Click event");a.click_event_detected=!0;a.initializePermissions();a.userInteractionEvents.forEach((function(b){window.removeEventListener(b,a.clickEvent,!1)}));a.Dispatch("OnClickEvent")};a.initializePermissions=
        function(){if(a.iOS&&!a.iOS_initialized){a.log("Initializing iOS click event");var b=new SpeechSynthesisUtterance(" ");speechSynthesis.speak(b);a.iOS_initialized=!0}a.is_android&&!a.android_initialized&&(a.log("Initializing Android click event"),b=new SpeechSynthesisUtterance(" "),speechSynthesis.speak(b));a.initFallbackPool()};a.isPlaying=function(){return a.fallbackMode?null!=a.fallback_audio&&!a.fallback_audio.ended&&!a.fallback_audio.paused:speechSynthesis.speaking};a.clearFallbackPool=function(){for(var b=
        0;b<a.fallback_audiopool.length;b++)null!=a.fallback_audiopool[b]&&(a.fallback_audiopool[b].pause(),a.fallback_audiopool[b].src="");a.fallback_audiopool_index=0;a.fallbackChunks=[]};a.initFallbackPool=function(){if(!a.fallback_audiopool||0==a.fallback_audiopool.length){for(var b=0;10>b;b++){var c=b,d=document.createElement("AUDIO");d.preload="auto";a.is_android&&(d.src="",d.load(),9==c&&(a.log("Android HTML audio initialized"),a.android_initialized=!0));a.iOS&&(d.src="",d.load(),9==c&&(a.log("iOS HTML audio initialized"),
        a.iOS_initialized=!0));a.fallback_audiopool.push(d)}a.fallback_audiopool_index=0}};a.allowSpeechClicked=function(b){a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv);a.allowSpeechDiv=null;if(a.speechAllowedByUser=b)a.clickEvent(),a.scheduledSpeak&&(a.speak(a.scheduledSpeak.text,a.scheduledSpeak.voicename,a.scheduledSpeak.parameters),a.scheduledSpeak=null);a.Dispatch("OnAllowSpeechClicked")};a.checkSpeechAllowed=function(b){if(0==a.speechAllowedByUser)return!1;if((a.is_android||a.iOS||a.is_safari&&
        (a.fallbackMode||a.forcedFallbackMode))&&!a.click_event_detected){if(a.allowSpeechDiv)return;a.allowSpeechDiv_appearances=null==a.allowSpeechDiv_appearances?1:++a.allowSpeechDiv_appearances;if(2<a.allowSpeechDiv_appearances)return console.log("ResponsiveVoice: Speech not allowed by user"),!1;var c=document.createElement("style");c.innerHTML='.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';
        document.body.appendChild(c);a.allowSpeechDiv=document.createElement("div");a.allowSpeechDiv.classList.add("rvNotification");void 0==b&&(b={});a.allowSpeechDiv.innerHTML='<div class="rvTextRow"><strong>'+(void 0!=b.urlOverride?b.urlOverride:window.location.hostname)+"</strong> "+(void 0!=b.textOverride?b.textOverride:"wants to play speech")+'</div><div class="rvButtonRow"><div onclick="responsiveVoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsiveVoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>';
        document.body.appendChild(a.allowSpeechDiv);return!1}return!0};a.fallback_audioPool_getAudio=function(){a.initFallbackPool();a.fallback_audiopool_index>=a.fallback_audiopool.length&&(a.fallback_audiopool_index=0);return a.fallback_audiopool[a.fallback_audiopool_index++]};a.fallback_updateChunksBuffer=function(){for(var b=a.fallbackChunkIndex;b<Math.min(a.fallbackChunks.length,a.fallbackChunkIndex+a.fallbackBufferLength);b++){var c=a.fallbackChunks[b];null==c.audio&&(c.audio=a.fallback_audioPool_getAudio(),
        c.audio.src=c.url,c.audio.playbackRate=a.fallback_playbackrate,c.audio.preload="auto",c.audio.load())}};a.selectBest=function(a){for(var b=0;b<a.length;b++)if(null!=a[b])return a[b];return null};a.pause=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.pause():speechSynthesis.pause()};a.resume=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.play():speechSynthesis.resume()};a.tts_speak=function(b){setTimeout((function(){a.cancelled=!1;speechSynthesis.speak(b)}),.01)};
    a.setVolume=function(b){if(a.isPlaying())if(a.fallbackMode){for(var c=0;c<a.fallback_audiopool.length;c++)a.fallback_audiopool[c].volume=b;a.fallback_audio.volume=b}else for(c=0;c<a.utterances.length;c++)a.utterances[c].volume=b};a.onPartEnd=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onchuckend)a.msgparameters.onchuckend();a.Dispatch("OnPartEnd");b=a.utterances.indexOf(b.utterance);a.currentMsg=a.utterances[b+1]};a.onboundary=function(b){a.log("On Boundary");a.iOS&&!a.onstartFired&&
    a.speech_onstart()};a.numToWords=function(b){function c(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var d=(function(){return function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g=a[Symbol.iterator](),h;!(d=(h=g.next()).done)&&(c.push(h.value),!b||c.length!==b);d=!0);}catch(r){e=!0,f=r}finally{try{if(!d&&g["return"])g["return"]()}finally{if(e)throw f;}}return c}throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }})(),h=function(a){return 0===a.length},k=function(a){return function(b){return b.slice(0,a)}},f=function(a){return function(b){return b.slice(a)}},g=function(a){return a.slice(0).reverse()},e=function(a){return function(b){return function(c){return a(b(c))}}},l=function(a){return!a},m=function q(a){return function(b){return h(b)?[]:[k(a)(b)].concat(c(q(a)(f(a)(b))))}},n=" one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),
        p="  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),t=" thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" "),u=function(a){var b=d(a,3);a=b[0];var c=b[1];b=b[2];return[0===(Number(b)||0)?"":n[b]+" hundred ",0===(Number(a)||0)?p[c]:p[c]&&p[c]+" "||"",n[c+a]||n[a]].join("")},v=function(a,b){return""===a?a:a+" "+t[b]};return"number"===typeof b?a.numToWords(String(b)):"0"===b?"zero":e(m(3))(g)(Array.from(b)).map(u).map(v).filter(e(l)(h)).reverse().join(" ").trim()};
    a.getWords=function(b){b=b.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi," dummy currency ");var c=b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);c=c.filter((function(a){return/[^\s]/.test(a)}));for(var d=0;d<c.length;d++)null!=(b=c[d].toString().match(/\d+/))&&(c.splice(d,1),a.numToWords(+b[0]).split(/\s+/).map((function(a){c.push(a)})));return c};a.getEstimatedTimeLength=function(b,c){var d=a.getWords(b),h=0,k=a.fallbackMode?1300:700;c=c||1;d.map((function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     b){h+=(a.toString().match(/[^ ]/igm)||a).length}));var f=d.length,g=60/a.WORDS_PER_MINUTE*c*1E3*f;5>f&&(g=c*(k+50*h));a.log("Estimated time length: "+g+" ms, words: ["+d+"], charsCount: "+h);return g};a.validateParameters=function(a,c){if("undefined"===typeof a[c])return a[c];switch(c){case "rate":case "pitch":case "volume":var b=Number(a[c]);isNaN(b)&&console.warn("ResponsiveVoice: the parameter "+c+' has a wrong value "'+a[c]+'". Defaults were used.');a[c]=isNaN(b)?"1":a[c]}return a[c]};a.services=
        {NATIVE_TTS:0,FALLBACK_AUDIO:1};a.servicesPriority=[0,1];a.servicesEnabled=[];a.setServiceEnabled=function(b,c){a.servicesEnabled[b]=c};a.getServiceEnabled=function(b){return a.servicesEnabled[b]||!1};a.setServiceEnabled(a.services.NATIVE_TTS,!0);a.setServiceEnabled(a.services.FALLBACK_AUDIO,!0);a.forceFallbackMode=function(b){a.forcedFallbackMode=b;a.fallbackMode=b;a.mapRVs();a.Dispatch("OnServiceSwitched")};a.enableWindowClickHook=function(){a.userInteractionEvents.forEach((function(b){window.addEventListener(b,
        a.clickEvent,!1)}))};"interactive"===document.readyState?a.init():document.addEventListener("DOMContentLoaded",(function(){a.init()}))},responsiveVoice=new ResponsiveVoice;
if ("undefined" != typeof responsiveVoice) {
    console.log("ResponsiveVoice already loaded"), console.log(responsiveVoice)
} else {
    var synth = window.speechSynthesis;
    var ResponsiveVoice = function() {
            var a = this;
            a.version = "1.5.12";
            console.log("ResponsiveVoice r" + a.version);
            a.responsivevoices = [{
                name: "UK English Female",
                flag: "gb",
                gender: "f",
                lang: "en-GB",
                voiceIDs: [3, 7, 171, 278, 201, 5, 1, 257, 286, 342, 258, 287, 343, 8]
            }, {
                name: "UK English Male",
                flag: "gb",
                gender: "m",
                lang: "en-GB",
                voiceIDs: [0, 277, 202, 75, 4, 2, 256, 285, 341, 159, 6, 7]
            }, {
                name: "US English Female",
                flag: "us",
                gender: "f",
                lang: "en-US",
                voiceIDs: [39, 40, 41, 42, 383, 205, 204, 43, 173, 235, 283, 339, 408, 44]
            }, {
                name: "US English Male",
                flag: "us",
                gender: "m",
                lang: "en-US",
                voiceIDs: [234, 282, 338, 236, 284, 340, 237, 382, 2, 4, 0, 6, 7, 75, 195, 169]
            }, {
                name: "Arabic Male",
                flag: "ar",
                gender: "m",
                lang: "ar-SA",
                voiceIDs: [96, 95, 97, 196, 388]
            }, {
                name: "Arabic Female",
                flag: "ar",
                gender: "f",
                lang: "ar-SA",
                voiceIDs: [98]
            }, {
                name: "Armenian Male",
                flag: "hy",
                gender: "f",
                lang: "hy-AM",
                voiceIDs: [99]
            }, {
                name: "Australian Female",
                flag: "au",
                gender: "f",
                lang: "en-AU",
                voiceIDs: [276, 201, 87, 5, 88]
            }, {
                name: "Australian Male",
                flag: "au",
                gender: "m",
                lang: "en-AU",
                voiceIDs: [86, 381, 386]
            }, {
                name: "Brazilian Portuguese Female",
                flag: "br",
                gender: "f",
                lang: "pt-BR",
                voiceIDs: [245, 124, 123, 125, 186, 223, 126]
            }, {
                name: "Brazilian Portuguese Male",
                flag: "br",
                gender: "m",
                lang: "pt-BR",
                voiceIDs: [315, 332, 371, 399]
            }, {
                name: "Chinese Female",
                flag: "cn",
                gender: "f",
                lang: "zh-CN",
                voiceIDs: [249, 58, 59, 380, 281, 231, 155, 60, 191, 268, 297, 353, 269, 298, 354, 409, 61]
            }, {
                name: "Chinese Male",
                flag: "cn",
                gender: "m",
                lang: "zh-CN",
                voiceIDs: [317, 334, 373, 389]
            }, {
                name: "Chinese (Hong Kong) Female",
                flag: "hk",
                gender: "f",
                lang: "zh-HK",
                voiceIDs: [192, 193, 232, 250, 251, 270, 299, 355, 409, 252]
            }, {
                name: "Chinese (Hong Kong) Male",
                flag: "hk",
                gender: "m",
                lang: "zh-HK",
                voiceIDs: [318, 335, 374, 390]
            }, {
                name: "Chinese Taiwan Female",
                flag: "tw",
                gender: "f",
                lang: "zh-TW",
                voiceIDs: [194, 233, 253, 254, 305, 322, 361, 384, 319, 336, 375, 409, 255]
            }, {
                name: "Chinese Taiwan Male",
                flag: "tw",
                gender: "m",
                lang: "zh-TW",
                voiceIDs: [320, 337, 376, 391]
            }, {
                name: "Czech Female",
                flag: "cz",
                gender: "f",
                lang: "cs-CZ",
                voiceIDs: [101, 100, 102, 197, 103]
            }, {
                name: "Czech Male",
                flag: "cz",
                gender: "m",
                lang: "cs-CZ",
                voiceIDs: [161]
            }, {
                name: "Danish Female",
                flag: "dk",
                gender: "f",
                lang: "da-DK",
                voiceIDs: [105, 104, 106, 198, 107]
            }, {
                name: "Danish Male",
                flag: "da",
                gender: "m",
                lang: "da-DK",
                voiceIDs: [162]
            }, {
                name: "Deutsch Female",
                flag: "de",
                gender: "f",
                lang: "de-DE",
                voiceIDs: [27, 28, 29, 30, 78, 170, 275, 199, 31, 261, 290, 346, 262, 291, 347, 32]
            }, {
                name: "Deutsch Male",
                flag: "de",
                gender: "m",
                lang: "de-DE",
                voiceIDs: [307, 324, 363, 377, 393]
            }, {
                name: "Dutch Female",
                flag: "nl",
                gender: "f",
                lang: "nl-NL",
                voiceIDs: [243, 219, 84, 157, 158, 184, 45]
            }, {
                name: "Dutch Male",
                flag: "nl",
                gender: "m",
                lang: "nl-NL",
                voiceIDs: [157, 220, 407]
            }, {
                name: "Finnish Female",
                flag: "fi",
                gender: "f",
                lang: "fi-FI",
                voiceIDs: [90, 89, 91, 209, 92]
            }, {
                name: "Finnish Male",
                flag: "fi",
                gender: "m",
                lang: "fi-FI",
                voiceIDs: [160]
            }, {
                name: "French Female",
                flag: "fr",
                gender: "f",
                lang: "fr-FR",
                voiceIDs: [240, 21, 22, 23, 77, 178, 279, 210, 266, 295, 351, 304, 321, 360, 26]
            }, {
                name: "French Male",
                flag: "fr",
                gender: "m",
                lang: "fr-FR",
                voiceIDs: [311, 328, 367, 378, 392]
            }, {
                name: "Greek Female",
                flag: "gr",
                gender: "f",
                lang: "el-GR",
                voiceIDs: [62, 63, 80, 200, 64]
            }, {
                name: "Greek Male",
                flag: "gr",
                gender: "m",
                lang: "el-GR",
                voiceIDs: [163]
            }, {
                name: "Hindi Female",
                flag: "hi",
                gender: "f",
                lang: "hi-IN",
                voiceIDs: [247, 66, 154, 179, 213, 259, 288, 344, 67]
            }, {
                name: "Hindi Male",
                flag: "hi",
                gender: "m",
                lang: "hi-IN",
                voiceIDs: [394]
            }, {
                name: "Hungarian Female",
                flag: "hu",
                gender: "f",
                lang: "hu-HU",
                voiceIDs: [9, 10, 81, 214, 11]
            }, {
                name: "Hungarian Male",
                flag: "hu",
                gender: "m",
                lang: "hu-HU",
                voiceIDs: [164]
            }, {
                name: "Indonesian Female",
                flag: "id",
                gender: "f",
                lang: "id-ID",
                voiceIDs: [241, 111, 112, 180, 215, 113]
            }, {
                name: "Indonesian Male",
                flag: "id",
                gender: "m",
                lang: "id-ID",
                voiceIDs: [395]
            }, {
                name: "Italian Female",
                flag: "it",
                gender: "f",
                lang: "it-IT",
                voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 271, 300, 356, 38]
            }, {
                name: "Italian Male",
                flag: "it",
                gender: "m",
                lang: "it-IT",
                voiceIDs: [312, 329, 368, 406]
            }, {
                name: "Japanese Female",
                flag: "jp",
                gender: "f",
                lang: "ja-JP",
                voiceIDs: [248, 50, 51, 280, 217, 52, 153, 182, 273, 302, 358, 274, 303, 359, 53]
            }, {
                name: "Japanese Male",
                flag: "jp",
                gender: "m",
                lang: "ja-JP",
                voiceIDs: [313, 330, 369, 379, 396]
            }, {
                name: "Korean Female",
                flag: "kr",
                gender: "f",
                lang: "ko-KR",
                voiceIDs: [54, 55, 56, 156, 183, 218, 306, 323, 362, 384, 57]
            }, {
                name: "Korean Male",
                flag: "kr",
                gender: "m",
                lang: "ko-KR",
                voiceIDs: [397]
            }, {
                name: "Latin Female",
                flag: "va",
                gender: "f",
                lang: "la",
                voiceIDs: [114],
                deprecated: !0
            }, {
                name: "Latin Male",
                flag: "va",
                gender: "m",
                lang: "la",
                voiceIDs: [165]
            }, {
                name: "Norwegian Female",
                flag: "no",
                gender: "f",
                lang: "nb-NO",
                voiceIDs: [72, 73, 221, 74]
            }, {
                name: "Norwegian Male",
                flag: "no",
                gender: "m",
                lang: "nb-NO",
                voiceIDs: [166]
            }, {
                name: "Polish Female",
                flag: "pl",
                gender: "f",
                lang: "pl-PL",
                voiceIDs: [244, 120, 119, 121, 185, 222, 267, 296, 352, 122]
            }, {
                name: "Polish Male",
                flag: "pl",
                gender: "m",
                lang: "pl-PL",
                voiceIDs: [314, 331, 370, 398]
            }, {
                name: "Portuguese Female",
                flag: "br",
                gender: "f",
                lang: "pt-BR",
                voiceIDs: [128, 127, 129, 187, 224, 272, 301, 357, 130]
            }, {
                name: "Portuguese Male",
                flag: "br",
                gender: "m",
                lang: "pt-BR",
                voiceIDs: [400]
            }, {
                name: "Romanian Female",
                flag: "ro",
                gender: "f",
                lang: "ro-RO",
                voiceIDs: [151, 150, 152, 225, 46]
            }, {
                name: "Russian Female",
                flag: "ru",
                gender: "f",
                lang: "ru-RU",
                voiceIDs: [246, 47, 48, 83, 188, 226, 260, 289, 345, 49]
            }, {
                name: "Russian Male",
                flag: "ru",
                gender: "m",
                lang: "ru-RU",
                voiceIDs: [316, 333, 372, 387]
            }, {
                name: "Slovak Female",
                flag: "sk",
                gender: "f",
                lang: "sk-SK",
                voiceIDs: [133, 132, 134, 227, 135]
            }, {
                name: "Slovak Male",
                flag: "sk",
                gender: "m",
                lang: "sk-SK",
                voiceIDs: [167],
                deprecated: !0
            }, {
                name: "Spanish Female",
                flag: "es",
                gender: "f",
                lang: "es-ES",
                voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 263, 292, 348, 264, 293, 349, 15]
            }, {
                name: "Spanish Male",
                flag: "es",
                gender: "m",
                lang: "es-ES",
                voiceIDs: [309, 326, 365, 401]
            }, {
                name: "Spanish Latin American Female",
                flag: "es",
                gender: "f",
                lang: "es-MX",
                voiceIDs: [239, 137, 136, 138, 175, 208, 265, 294, 350, 139]
            }, {
                name: "Spanish Latin American Male",
                flag: "es",
                gender: "m",
                lang: "es-MX",
                voiceIDs: [136, 310, 327, 366, 402]
            }, {
                name: "Swedish Female",
                flag: "sv",
                gender: "f",
                lang: "sv-SE",
                voiceIDs: [85, 149, 228, 65]
            }, {
                name: "Swedish Male",
                flag: "sv",
                gender: "m",
                lang: "sv-SE",
                voiceIDs: [148, 168]
            }, {
                name: "Tamil Male",
                flag: "hi",
                gender: "m",
                lang: "hi-IN",
                voiceIDs: [141]
            }, {
                name: "Thai Female",
                flag: "th",
                gender: "f",
                lang: "th-TH",
                voiceIDs: [143, 142, 144, 189, 229, 145]
            }, {
                name: "Thai Male",
                flag: "th",
                gender: "m",
                lang: "th-TH",
                voiceIDs: [403]
            }, {
                name: "Turkish Female",
                flag: "tr",
                gender: "f",
                lang: "tr-TR",
                voiceIDs: [69, 70, 82, 190, 230, 71]
            }, {
                name: "Turkish Male",
                flag: "tr",
                gender: "m",
                lang: "tr-TR",
                voiceIDs: [404]
            }, {
                name: "Vietnamese Female",
                flag: "vi",
                gender: "f",
                lang: "vi-VN",
                voiceIDs: [405]
            }, {
                name: "Vietnamese Male",
                flag: "vi",
                gender: "m",
                lang: "vi-VN",
                voiceIDs: [146]
            }, {
                name: "Afrikaans Male",
                flag: "af",
                gender: "m",
                lang: "af-ZA",
                voiceIDs: [93]
            }, {
                name: "Albanian Male",
                flag: "sq",
                gender: "m",
                lang: "sq-AL",
                voiceIDs: [94]
            }, {
                name: "Bosnian Male",
                flag: "bs",
                gender: "m",
                lang: "bs",
                voiceIDs: [14]
            }, {
                name: "Catalan Male",
                flag: "catalonia",
                gender: "m",
                lang: "ca-ES",
                voiceIDs: [68]
            }, {
                name: "Croatian Male",
                flag: "hr",
                gender: "m",
                lang: "hr-HR",
                voiceIDs: [13]
            }, {
                name: "Esperanto Male",
                flag: "eo",
                gender: "m",
                lang: "eo",
                voiceIDs: [108]
            }, {
                name: "Icelandic Male",
                flag: "is",
                gender: "m",
                lang: "is-IS",
                voiceIDs: [110]
            }, {
                name: "Latvian Male",
                flag: "lv",
                gender: "m",
                lang: "lv-LV",
                voiceIDs: [115]
            }, {
                name: "Macedonian Male",
                flag: "mk",
                gender: "m",
                lang: "mk-MK",
                voiceIDs: [116]
            }, {
                name: "Moldavian Female",
                flag: "md",
                gender: "f",
                lang: "md",
                voiceIDs: [117]
            }, {
                name: "Moldavian Male",
                flag: "md",
                gender: "m",
                lang: "md",
                voiceIDs: [117],
                deprecated: !0
            }, {
                name: "Montenegrin Male",
                flag: "me",
                gender: "m",
                lang: "me",
                voiceIDs: [118]
            }, {
                name: "Serbian Male",
                flag: "sr",
                gender: "m",
                lang: "sr-RS",
                voiceIDs: [12]
            }, {
                name: "Serbo-Croatian Male",
                flag: "hr",
                gender: "m",
                lang: "hr-HR",
                voiceIDs: [131]
            }, {
                name: "Swahili Male",
                flag: "sw",
                gender: "m",
                lang: "sw-KE",
                voiceIDs: [140]
            }, {
                name: "Welsh Male",
                flag: "cy",
                gender: "m",
                lang: "cy",
                voiceIDs: [147]
            }, {
                name: "Fallback UK Female",
                flag: "gb",
                gender: "f",
                lang: "en-GB",
                voiceIDs: [8]
            }];
            a.voicecollection = [{
                name: "Google UK English Male"
            }, {
                name: "Agnes"
            }, {
                name: "Daniel Compact"
            }, {
                name: "Google UK English Female"
            }, {
                name: "en-GB",
                rate: 0.25,
                pitch: 1
            }, {
                name: "en-AU",
                rate: 0.25,
                pitch: 1
            }, {
                name: "ingl\u00e9s Reino Unido"
            }, {
                name: "English United Kingdom"
            }, {
                name: "Fallback en-GB Female",
                lang: "en-GB",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Eszter Compact"
            }, {
                name: "hu-HU",
                rate: 0.4
            }, {
                name: "Fallback Hungarian Female",
                lang: "hu",
                fallbackvoice: !0,
                service: "g1"
            }, {
                name: "Fallback Serbian Male",
                lang: "sr",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Croatian Male",
                lang: "hr",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Bosnian Male",
                lang: "bs",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Spanish Female",
                lang: "es",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Spanish Spain"
            }, {
                name: "espa\u00f1ol Espa\u00f1a"
            }, {
                name: "Diego Compact",
                rate: 0.3
            }, {
                name: "Google Espa\u00f1ol"
            }, {
                name: "es-ES",
                rate: 0.2
            }, {
                name: "Google Fran\u00e7ais"
            }, {
                name: "French France"
            }, {
                name: "franc\u00e9s Francia"
            }, {
                name: "Virginie Compact",
                rate: 0.5
            }, {
                name: "fr-FR",
                rate: 0.25
            }, {
                name: "Fallback French Female",
                lang: "fr",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google Deutsch"
            }, {
                name: "German Germany"
            }, {
                name: "alem\u00e1n Alemania"
            }, {
                name: "Yannick Compact",
                rate: 0.5
            }, {
                name: "de-DE",
                rate: 0.25
            }, {
                name: "Fallback Deutsch Female",
                lang: "de",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google Italiano"
            }, {
                name: "Italian Italy"
            }, {
                name: "italiano Italia"
            }, {
                name: "Paolo Compact",
                rate: 0.5
            }, {
                name: "it-IT",
                rate: 0.25
            }, {
                name: "Fallback Italian Female",
                lang: "it",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google US English",
                timerSpeed: 1
            }, {
                name: "English United States"
            }, {
                name: "ingl\u00e9s Estados Unidos"
            }, {
                name: "Vicki"
            }, {
                name: "en-US",
                rate: 0.2,
                pitch: 1,
                timerSpeed: 1.3
            }, {
                name: "Fallback US English",
                lang: "en-US",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Dutch Female",
                lang: "nl",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Romanian",
                lang: "ro",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Milena Compact"
            }, {
                name: "ru-RU",
                rate: 0.25
            }, {
                name: "Fallback Russian",
                lang: "ru",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \u65e5\u672c\u4eba",
                timerSpeed: 1
            }, {
                name: "Kyoko Compact"
            }, {
                name: "ja-JP",
                rate: 0.25
            }, {
                name: "Fallback Japanese Female",
                lang: "ja",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \ud55c\uad6d\uc758",
                timerSpeed: 1
            }, {
                name: "Narae Compact"
            }, {
                name: "ko-KR",
                rate: 0.25
            }, {
                name: "Fallback Korean Female",
                lang: "ko",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \u4e2d\u56fd\u7684",
                timerSpeed: 1
            }, {
                name: "Ting-Ting Compact"
            }, {
                name: "zh-CN",
                rate: 0.25
            }, {
                name: "Fallback Chinese",
                lang: "zh-CN",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Alexandros Compact"
            }, {
                name: "el-GR",
                rate: 0.25
            }, {
                name: "Fallback Greek",
                lang: "el",
                fallbackvoice: !0,
                service: "g2",
                gender: "female"
            }, {
                name: "Fallback Swedish",
                lang: "sv",
                fallbackvoice: !0,
                service: "g2",
                gender: "female"
            }, {
                name: "hi-IN",
                rate: 0.25
            }, {
                name: "Fallback Hindi Female",
                lang: "hi",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Catalan",
                lang: "ca",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Aylin Compact"
            }, {
                name: "tr-TR",
                rate: 0.25
            }, {
                name: "Fallback Turkish",
                lang: "tr",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Stine Compact"
            }, {
                name: "no-NO",
                rate: 0.25
            }, {
                name: "Fallback Norwegian",
                lang: "no",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Daniel"
            }, {
                name: "Monica"
            }, {
                name: "Amelie"
            }, {
                name: "Anna"
            }, {
                name: "Alice"
            }, {
                name: "Melina"
            }, {
                name: "Mariska"
            }, {
                name: "Yelda"
            }, {
                name: "Milena"
            }, {
                name: "Xander"
            }, {
                name: "Alva"
            }, {
                name: "Lee Compact"
            }, {
                name: "Karen"
            }, {
                name: "Fallback Australian Female",
                lang: "en-AU",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Mikko Compact"
            }, {
                name: "Satu"
            }, {
                name: "fi-FI",
                rate: 0.25
            }, {
                name: "Fallback Finnish",
                lang: "fi",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Afrikans",
                lang: "af",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Albanian",
                lang: "sq",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Maged Compact"
            }, {
                name: "Tarik"
            }, {
                name: "ar-SA",
                rate: 0.25
            }, {
                name: "Fallback Arabic",
                lang: "ar",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Armenian",
                lang: "hy",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Zuzana Compact"
            }, {
                name: "Zuzana"
            }, {
                name: "cs-CZ",
                rate: 0.25
            }, {
                name: "Fallback Czech",
                lang: "cs",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Ida Compact"
            }, {
                name: "Sara"
            }, {
                name: "da-DK",
                rate: 0.25
            }, {
                name: "Fallback Danish",
                lang: "da",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Esperanto",
                lang: "eo",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Haitian Creole",
                lang: "ht",
                fallbackvoice: !0
            }, {
                name: "Fallback Icelandic",
                lang: "is",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Damayanti"
            }, {
                name: "id-ID",
                rate: 0.25
            }, {
                name: "Fallback Indonesian Female",
                lang: "id",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Latin Female",
                lang: "la",
                fallbackvoice: !0,
                service: "g2",
                gender: "female"
            }, {
                name: "Fallback Latvian Male",
                lang: "lv",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Macedonian Male",
                lang: "mk",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Moldavian Female",
                lang: "mo",
                fallbackvoice: !0,
                service: "g2",
                gender: "female"
            }, {
                name: "Fallback Montenegrin Male",
                lang: "sr-ME",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Agata Compact"
            }, {
                name: "Zosia"
            }, {
                name: "pl-PL",
                rate: 0.25
            }, {
                name: "Fallback Polish Female",
                lang: "pl",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Raquel Compact"
            }, {
                name: "Luciana"
            }, {
                name: "pt-BR",
                rate: 0.25
            }, {
                name: "Fallback Brazilian Portuguese Female",
                lang: "pt-BR",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Joana Compact"
            }, {
                name: "Joana"
            }, {
                name: "pt-PT",
                rate: 0.25
            }, {
                name: "Fallback Portuguese",
                lang: "pt-PT",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Serbo-Croation",
                lang: "sh",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Laura Compact"
            }, {
                name: "Laura"
            }, {
                name: "sk-SK",
                rate: 0.25
            }, {
                name: "Fallback Slovak",
                lang: "sk",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Javier Compact"
            }, {
                name: "Paulina"
            }, {
                name: "es-MX",
                rate: 0.25
            }, {
                name: "Fallback Spanish (Latin American) Female",
                lang: "es-419",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Swahili",
                lang: "sw",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Tamil",
                lang: "ta",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Narisa Compact"
            }, {
                name: "Kanya"
            }, {
                name: "th-TH",
                rate: 0.25
            }, {
                name: "Fallback Thai Female",
                lang: "th",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Vietnamese Male",
                lang: "vi",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Welsh",
                lang: "cy",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Oskar Compact"
            }, {
                name: "sv-SE",
                rate: 0.25
            }, {
                name: "Simona Compact"
            }, {
                name: "Ioana"
            }, {
                name: "ro-RO",
                rate: 0.25
            }, {
                name: "Kyoko"
            }, {
                name: "Lekha"
            }, {
                name: "Ting-Ting"
            }, {
                name: "Yuna"
            }, {
                name: "Xander Compact"
            }, {
                name: "nl-NL",
                rate: 0.25
            }, {
                name: "Fallback UK English Male",
                lang: "en-GB",
                fallbackvoice: !0,
                service: "g1",
                voicename: "rjs",
                gender: "male"
            }, {
                name: "Finnish Male",
                lang: "fi",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Czech Male",
                lang: "cs",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Danish Male",
                lang: "da",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Greek Male",
                lang: "el",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Hungarian Male",
                lang: "hu",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Latin Male",
                lang: "la",
                fallbackvoice: !0,
                service: "g2",
                voicename: "",
                gender: "male"
            }, {
                name: "Norwegian Male",
                lang: "no",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Slovak Male",
                lang: "sk",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Swedish Male",
                lang: "sv",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Fallback US English Male",
                lang: "en-US",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "German Germany",
                lang: "de_DE"
            }, {
                name: "English United Kingdom",
                lang: "en_GB"
            }, {
                name: "English India",
                lang: "en_IN"
            }, {
                name: "English United States",
                lang: "en_US"
            }, {
                name: "Spanish Spain",
                lang: "es_ES"
            }, {
                name: "Spanish Mexico",
                lang: "es_MX"
            }, {
                name: "Spanish United States",
                lang: "es_US"
            }, {
                name: "French Belgium",
                lang: "fr_BE"
            }, {
                name: "French France",
                lang: "fr_FR"
            }, {
                name: "Hindi India",
                lang: "hi_IN"
            }, {
                name: "Indonesian Indonesia",
                lang: "in_ID"
            }, {
                name: "Italian Italy",
                lang: "it_IT"
            }, {
                name: "Japanese Japan",
                lang: "ja_JP"
            }, {
                name: "Korean South Korea",
                lang: "ko_KR"
            }, {
                name: "Dutch Netherlands",
                lang: "nl_NL"
            }, {
                name: "Polish Poland",
                lang: "pl_PL"
            }, {
                name: "Portuguese Brazil",
                lang: "pt_BR"
            }, {
                name: "Portuguese Portugal",
                lang: "pt_PT"
            }, {
                name: "Russian Russia",
                lang: "ru_RU"
            }, {
                name: "Thai Thailand",
                lang: "th_TH"
            }, {
                name: "Turkish Turkey",
                lang: "tr_TR"
            }, {
                name: "Chinese China",
                lang: "zh_CN_#Hans"
            }, {
                name: "Chinese Hong Kong",
                lang: "zh_HK_#Hans"
            }, {
                name: "Chinese Hong Kong",
                lang: "zh_HK_#Hant"
            }, {
                name: "Chinese Taiwan",
                lang: "zh_TW_#Hant"
            }, {
                name: "Alex"
            }, {
                name: "Maged",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                lang: "da-DK"
            }, {
                name: "Anna",
                lang: "de-DE"
            }, {
                name: "Melina",
                lang: "el-GR"
            }, {
                name: "Karen",
                lang: "en-AU"
            }, {
                name: "Daniel",
                lang: "en-GB"
            }, {
                name: "Moira",
                lang: "en-IE"
            }, {
                name: "Samantha (Enhanced)",
                lang: "en-US"
            }, {
                name: "Samantha",
                lang: "en-US"
            }, {
                name: "Tessa",
                lang: "en-ZA"
            }, {
                name: "Monica",
                lang: "es-ES"
            }, {
                name: "Paulina",
                lang: "es-MX"
            }, {
                name: "Satu",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                lang: "fr-CA"
            }, {
                name: "Thomas",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                lang: "he-IL"
            }, {
                name: "Lekha",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                lang: "id-ID"
            }, {
                name: "Alice",
                lang: "it-IT"
            }, {
                name: "Kyoko",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                lang: "nl-BE"
            }, {
                name: "Xander",
                lang: "nl-NL"
            }, {
                name: "Nora",
                lang: "no-NO"
            }, {
                name: "Zosia",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                lang: "pt-BR"
            }, {
                name: "Joana",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                lang: "ro-RO"
            }, {
                name: "Milena",
                lang: "ru-RU"
            }, {
                name: "Laura",
                lang: "sk-SK"
            }, {
                name: "Alva",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                lang: "th-TH"
            }, {
                name: "Yelda",
                lang: "tr-TR"
            }, {
                name: "Ting-Ting",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                lang: "zh-TW"
            }, {
                name: "Microsoft David Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "native",
                lang: ""
            }, {
                name: "Google espa\u00f1ol"
            }, {
                name: "Google espa\u00f1ol de Estados Unidos"
            }, {
                name: "Google fran\u00e7ais"
            }, {
                name: "Google Bahasa Indonesia"
            }, {
                name: "Google italiano"
            }, {
                name: "Google Nederlands"
            }, {
                name: "Google polski"
            }, {
                name: "Google portugu\u00eas do Brasil"
            }, {
                name: "Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"
            }, {
                name: "Google \u0939\u093f\u0928\u094d\u0926\u0940"
            }, {
                name: "Google \u65e5\u672c\u8a9e"
            }, {
                name: "Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"
            }, {
                name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
            }, {
                name: "zh-HK",
                rate: 0.25
            }, {
                name: "Fallback Chinese (Hong Kong) Female",
                lang: "zh-HK",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
            }, {
                name: "zh-TW",
                rate: 0.25
            }, {
                name: "Fallback Chinese (Taiwan) Female",
                lang: "zh-TW",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Microsoft George Mobile - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Susan Mobile - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Hazel Mobile - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Heera Mobile - English (India)",
                lang: "en-In"
            }, {
                name: "Microsoft Irina Mobile - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Hedda Mobile - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Katja Mobile - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Helena Mobile - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Laura Mobile - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Sabina Mobile - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Julie Mobile - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Paulina Mobile - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Huihui Mobile - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Elsa Mobile - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Maria Mobile - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Ayumi Mobile - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Haruka Mobile - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Helena",
                lang: "de-DE"
            }, {
                name: "Catherine",
                lang: "en-AU"
            }, {
                name: "Arthur",
                lang: "en-GB"
            }, {
                name: "Martha",
                lang: "en-GB"
            }, {
                name: "Marie",
                lang: "fr-FR"
            }, {
                name: "O-ren",
                lang: "ja-JP"
            }, {
                name: "Yu-shu",
                lang: "zh-CN"
            }, {
                name: "Microsoft David - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft George - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Susan - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Hazel - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Heera - English (India)",
                lang: "en-In"
            }, {
                name: "Microsoft Irina - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Hedda - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Katja - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Helena - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Laura - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Sabina - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Julie - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Paulina - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Huihui - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Yaoyao - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Elsa - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Maria - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Ayumi - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Haruka - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Hortense - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Hanhan - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami - Korean (Korean)",
                lang: "ko-KR"
            }, {
                name: "Microsoft Stefan - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Ravi - English (India)",
                lang: "en-IN"
            }, {
                name: "Microsoft Pablo - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Raul - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Paul - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Cosimo - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Ichiro - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Adam - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Daniel - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Pavel - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Kangkang - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",
                lang: "zh-HK"
            }, {
                name: "Microsoft Yating - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Zhiwei - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Hortense Mobile - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami Mobile - Korean (Korean)",
                lang: "ko-KR"
            }, {
                name: "Microsoft Stefan Mobile - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Ravi Mobile - English (India)",
                lang: "en-IN"
            }, {
                name: "Microsoft Pablo Mobile - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Raul Mobile - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Paul Mobile - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Cosimo Mobile - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Ichiro Mobile - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Adam Mobile - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Daniel Mobile - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Pavel Mobile - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",
                lang: "zh-HK"
            }, {
                name: "Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft David Desktop - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira Desktop - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark Desktop - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft George Desktop - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Susan Desktop - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Hazel Desktop - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Heera Desktop - English (India)",
                lang: "en-In"
            }, {
                name: "Microsoft Irina Desktop - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Hedda Desktop - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Katja Desktop - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Helena Desktop - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Laura Desktop - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Sabina Desktop - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Julie Desktop - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Paulina Desktop - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Huihui Desktop - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Elsa Desktop - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Maria Desktop - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Ayumi Desktop - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Haruka Desktop - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Hortense Desktop - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami Desktop - Korean (Korean)",
                lang: "ko-KR"
            }, {
                name: "Microsoft Stefan Desktop - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Ravi Desktop - English (India)",
                lang: "en-IN"
            }, {
                name: "Microsoft Pablo Desktop - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Raul Desktop - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Paul Desktop - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Cosimo Desktop - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Ichiro Desktop - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Adam Desktop - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Daniel Desktop - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Pavel Desktop - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)",
                lang: "zh-HK"
            }, {
                name: "Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Martin",
                lang: "de-DE"
            }, {
                name: "Daniel",
                lang: "fr-FR"
            }, {
                name: "Hattori",
                lang: "ja-JP"
            }, {
                name: "Li-mu",
                lang: "zh-CN"
            }, {
                name: "Gordon",
                lang: "en-AU"
            }, {
                name: "Aaron",
                lang: "en-US"
            }, {
                name: "Nicky",
                lang: "en-US"
            }, {
                name: "Microsoft Hanhan Desktop - Chinese (Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami Desktop - Korean",
                lang: "ko-KR"
            }, {
                name: "Fallback Australian Male",
                lang: "en-AU",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Russian Male",
                lang: "ru",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Arabic Male",
                lang: "ar",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Chinese",
                lang: "zh-CN",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Chinese HK",
                lang: "zh-HK",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Chinese TW",
                lang: "zh-TW",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback French Male",
                lang: "fr",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Deutsch Male",
                lang: "de",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Hindi Male",
                lang: "hi",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Indonesian Male",
                lang: "id",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Japanese Male",
                lang: "ja",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Korean Male",
                lang: "ko",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Polish Male",
                lang: "pl",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Brazilian Portuguese Male",
                lang: "pt-BR",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Portuguese Male",
                lang: "pt-PT",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Spanish Male",
                lang: "es",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Spanish (Latin American) Male",
                lang: "es-419",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Thai Male",
                lang: "th",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Turkish Male",
                lang: "tr",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Vietnamese Female",
                lang: "vi",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Italian Male",
                lang: "it",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Dutch Male",
                lang: "nl",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g1",
                gender: "male"
            }, {
                name: "Microsoft Anna - English (United States)",
                lang: "en-US",
                gender: "female"
            }, {
                name: "Microsoft Lili - Chinese (China)",
                lang: "zh-CN",
                gender: "female"
            }];
            a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
            a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());
            a.iOS10 = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
            a.iOS11 = /(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());
            a.iOS9plus = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()) || /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
            a.iOS12_0 = /(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());
            a.iOS12 = /(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());
            a.is_chrome = -1 < navigator.userAgent.indexOf("Chrome");
            a.is_safari = -1 < navigator.userAgent.indexOf("Safari");
            a.is_chrome && a.is_safari && (a.is_safari = !1);
            a.is_opera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
            a.is_android = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            a.iOS_initialized = !1;
            a.iOS9_initialized = !1;
            a.iOS10_initialized = !1;
            a.iOS11_initialized = !1;
            a.cache_ios_voices = [{
                name: "he-IL",
                voiceURI: "he-IL",
                lang: "he-IL"
            }, {
                name: "th-TH",
                voiceURI: "th-TH",
                lang: "th-TH"
            }, {
                name: "pt-BR",
                voiceURI: "pt-BR",
                lang: "pt-BR"
            }, {
                name: "sk-SK",
                voiceURI: "sk-SK",
                lang: "sk-SK"
            }, {
                name: "fr-CA",
                voiceURI: "fr-CA",
                lang: "fr-CA"
            }, {
                name: "ro-RO",
                voiceURI: "ro-RO",
                lang: "ro-RO"
            }, {
                name: "no-NO",
                voiceURI: "no-NO",
                lang: "no-NO"
            }, {
                name: "fi-FI",
                voiceURI: "fi-FI",
                lang: "fi-FI"
            }, {
                name: "pl-PL",
                voiceURI: "pl-PL",
                lang: "pl-PL"
            }, {
                name: "de-DE",
                voiceURI: "de-DE",
                lang: "de-DE"
            }, {
                name: "nl-NL",
                voiceURI: "nl-NL",
                lang: "nl-NL"
            }, {
                name: "id-ID",
                voiceURI: "id-ID",
                lang: "id-ID"
            }, {
                name: "tr-TR",
                voiceURI: "tr-TR",
                lang: "tr-TR"
            }, {
                name: "it-IT",
                voiceURI: "it-IT",
                lang: "it-IT"
            }, {
                name: "pt-PT",
                voiceURI: "pt-PT",
                lang: "pt-PT"
            }, {
                name: "fr-FR",
                voiceURI: "fr-FR",
                lang: "fr-FR"
            }, {
                name: "ru-RU",
                voiceURI: "ru-RU",
                lang: "ru-RU"
            }, {
                name: "es-MX",
                voiceURI: "es-MX",
                lang: "es-MX"
            }, {
                name: "zh-HK",
                voiceURI: "zh-HK",
                lang: "zh-HK"
            }, {
                name: "sv-SE",
                voiceURI: "sv-SE",
                lang: "sv-SE"
            }, {
                name: "hu-HU",
                voiceURI: "hu-HU",
                lang: "hu-HU"
            }, {
                name: "zh-TW",
                voiceURI: "zh-TW",
                lang: "zh-TW"
            }, {
                name: "es-ES",
                voiceURI: "es-ES",
                lang: "es-ES"
            }, {
                name: "zh-CN",
                voiceURI: "zh-CN",
                lang: "zh-CN"
            }, {
                name: "nl-BE",
                voiceURI: "nl-BE",
                lang: "nl-BE"
            }, {
                name: "en-GB",
                voiceURI: "en-GB",
                lang: "en-GB"
            }, {
                name: "ar-SA",
                voiceURI: "ar-SA",
                lang: "ar-SA"
            }, {
                name: "ko-KR",
                voiceURI: "ko-KR",
                lang: "ko-KR"
            }, {
                name: "cs-CZ",
                voiceURI: "cs-CZ",
                lang: "cs-CZ"
            }, {
                name: "en-ZA",
                voiceURI: "en-ZA",
                lang: "en-ZA"
            }, {
                name: "en-AU",
                voiceURI: "en-AU",
                lang: "en-AU"
            }, {
                name: "da-DK",
                voiceURI: "da-DK",
                lang: "da-DK"
            }, {
                name: "en-US",
                voiceURI: "en-US",
                lang: "en-US"
            }, {
                name: "en-IE",
                voiceURI: "en-IE",
                lang: "en-IE"
            }, {
                name: "hi-IN",
                voiceURI: "hi-IN",
                lang: "hi-IN"
            }, {
                name: "el-GR",
                voiceURI: "el-GR",
                lang: "el-GR"
            }, {
                name: "ja-JP",
                voiceURI: "ja-JP",
                lang: "ja-JP"
            }];
            a.cache_ios9_voices = [{
                name: "Maged",
                voiceURI: "com.apple.ttsbundle.Maged-compact",
                lang: "ar-SA",
                localService: !0,
                "default": !0
            }, {
                name: "Zuzana",
                voiceURI: "com.apple.ttsbundle.Zuzana-compact",
                lang: "cs-CZ",
                localService: !0,
                "default": !0
            }, {
                name: "Sara",
                voiceURI: "com.apple.ttsbundle.Sara-compact",
                lang: "da-DK",
                localService: !0,
                "default": !0
            }, {
                name: "Anna",
                voiceURI: "com.apple.ttsbundle.Anna-compact",
                lang: "de-DE",
                localService: !0,
                "default": !0
            }, {
                name: "Melina",
                voiceURI: "com.apple.ttsbundle.Melina-compact",
                lang: "el-GR",
                localService: !0,
                "default": !0
            }, {
                name: "Karen",
                voiceURI: "com.apple.ttsbundle.Karen-compact",
                lang: "en-AU",
                localService: !0,
                "default": !0
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.Daniel-compact",
                lang: "en-GB",
                localService: !0,
                "default": !0
            }, {
                name: "Moira",
                voiceURI: "com.apple.ttsbundle.Moira-compact",
                lang: "en-IE",
                localService: !0,
                "default": !0
            }, {
                name: "Samantha (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Samantha-premium",
                lang: "en-US",
                localService: !0,
                "default": !0
            }, {
                name: "Samantha",
                voiceURI: "com.apple.ttsbundle.Samantha-compact",
                lang: "en-US",
                localService: !0,
                "default": !0
            }, {
                name: "Tessa",
                voiceURI: "com.apple.ttsbundle.Tessa-compact",
                lang: "en-ZA",
                localService: !0,
                "default": !0
            }, {
                name: "Monica",
                voiceURI: "com.apple.ttsbundle.Monica-compact",
                lang: "es-ES",
                localService: !0,
                "default": !0
            }, {
                name: "Paulina",
                voiceURI: "com.apple.ttsbundle.Paulina-compact",
                lang: "es-MX",
                localService: !0,
                "default": !0
            }, {
                name: "Satu",
                voiceURI: "com.apple.ttsbundle.Satu-compact",
                lang: "fi-FI",
                localService: !0,
                "default": !0
            }, {
                name: "Amelie",
                voiceURI: "com.apple.ttsbundle.Amelie-compact",
                lang: "fr-CA",
                localService: !0,
                "default": !0
            }, {
                name: "Thomas",
                voiceURI: "com.apple.ttsbundle.Thomas-compact",
                lang: "fr-FR",
                localService: !0,
                "default": !0
            }, {
                name: "Carmit",
                voiceURI: "com.apple.ttsbundle.Carmit-compact",
                lang: "he-IL",
                localService: !0,
                "default": !0
            }, {
                name: "Lekha",
                voiceURI: "com.apple.ttsbundle.Lekha-compact",
                lang: "hi-IN",
                localService: !0,
                "default": !0
            }, {
                name: "Mariska",
                voiceURI: "com.apple.ttsbundle.Mariska-compact",
                lang: "hu-HU",
                localService: !0,
                "default": !0
            }, {
                name: "Damayanti",
                voiceURI: "com.apple.ttsbundle.Damayanti-compact",
                lang: "id-ID",
                localService: !0,
                "default": !0
            }, {
                name: "Alice",
                voiceURI: "com.apple.ttsbundle.Alice-compact",
                lang: "it-IT",
                localService: !0,
                "default": !0
            }, {
                name: "Kyoko",
                voiceURI: "com.apple.ttsbundle.Kyoko-compact",
                lang: "ja-JP",
                localService: !0,
                "default": !0
            }, {
                name: "Yuna",
                voiceURI: "com.apple.ttsbundle.Yuna-compact",
                lang: "ko-KR",
                localService: !0,
                "default": !0
            }, {
                name: "Ellen",
                voiceURI: "com.apple.ttsbundle.Ellen-compact",
                lang: "nl-BE",
                localService: !0,
                "default": !0
            }, {
                name: "Xander",
                voiceURI: "com.apple.ttsbundle.Xander-compact",
                lang: "nl-NL",
                localService: !0,
                "default": !0
            }, {
                name: "Nora",
                voiceURI: "com.apple.ttsbundle.Nora-compact",
                lang: "no-NO",
                localService: !0,
                "default": !0
            }, {
                name: "Zosia",
                voiceURI: "com.apple.ttsbundle.Zosia-compact",
                lang: "pl-PL",
                localService: !0,
                "default": !0
            }, {
                name: "Luciana",
                voiceURI: "com.apple.ttsbundle.Luciana-compact",
                lang: "pt-BR",
                localService: !0,
                "default": !0
            }, {
                name: "Joana",
                voiceURI: "com.apple.ttsbundle.Joana-compact",
                lang: "pt-PT",
                localService: !0,
                "default": !0
            }, {
                name: "Ioana",
                voiceURI: "com.apple.ttsbundle.Ioana-compact",
                lang: "ro-RO",
                localService: !0,
                "default": !0
            }, {
                name: "Milena",
                voiceURI: "com.apple.ttsbundle.Milena-compact",
                lang: "ru-RU",
                localService: !0,
                "default": !0
            }, {
                name: "Laura",
                voiceURI: "com.apple.ttsbundle.Laura-compact",
                lang: "sk-SK",
                localService: !0,
                "default": !0
            }, {
                name: "Alva",
                voiceURI: "com.apple.ttsbundle.Alva-compact",
                lang: "sv-SE",
                localService: !0,
                "default": !0
            }, {
                name: "Kanya",
                voiceURI: "com.apple.ttsbundle.Kanya-compact",
                lang: "th-TH",
                localService: !0,
                "default": !0
            }, {
                name: "Yelda",
                voiceURI: "com.apple.ttsbundle.Yelda-compact",
                lang: "tr-TR",
                localService: !0,
                "default": !0
            }, {
                name: "Ting-Ting",
                voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
                lang: "zh-CN",
                localService: !0,
                "default": !0
            }, {
                name: "Sin-Ji",
                voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
                lang: "zh-HK",
                localService: !0,
                "default": !0
            }, {
                name: "Mei-Jia",
                voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
                lang: "zh-TW",
                localService: !0,
                "default": !0
            }];
            a.cache_ios10_voices = [{
                name: "Maged",
                voiceURI: "com.apple.ttsbundle.Maged-compact",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                voiceURI: "com.apple.ttsbundle.Zuzana-compact",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                voiceURI: "com.apple.ttsbundle.Sara-compact",
                lang: "da-DK"
            }, {
                name: "Anna",
                voiceURI: "com.apple.ttsbundle.Anna-compact",
                lang: "de-DE"
            }, {
                name: "Helena",
                voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Martin",
                voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Nikos (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Nikos-premium",
                lang: "el-GR"
            }, {
                name: "Melina",
                voiceURI: "com.apple.ttsbundle.Melina-compact",
                lang: "el-GR"
            }, {
                name: "Nikos",
                voiceURI: "com.apple.ttsbundle.Nikos-compact",
                lang: "el-GR"
            }, {
                name: "Catherine",
                voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Gordon",
                voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Karen",
                voiceURI: "com.apple.ttsbundle.Karen-compact",
                lang: "en-AU"
            }, {
                name: "Daniel (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Daniel-premium",
                lang: "en-GB"
            }, {
                name: "Arthur",
                voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.Daniel-compact",
                lang: "en-GB"
            }, {
                name: "Martha",
                voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Moira",
                voiceURI: "com.apple.ttsbundle.Moira-compact",
                lang: "en-IE"
            }, {
                name: "Nicky (Enhanced)",
                voiceURI: "com.apple.ttsbundle.siri_female_en-US_premium",
                lang: "en-US"
            }, {
                name: "Samantha (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Samantha-premium",
                lang: "en-US"
            }, {
                name: "Aaron",
                voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact",
                lang: "en-US"
            }, {
                name: "Fred",
                voiceURI: "com.apple.speech.synthesis.voice.Fred",
                lang: "en-US"
            }, {
                name: "Nicky",
                voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact",
                lang: "en-US"
            }, {
                name: "Samantha",
                voiceURI: "com.apple.ttsbundle.Samantha-compact",
                lang: "en-US"
            }, {
                name: "Tessa",
                voiceURI: "com.apple.ttsbundle.Tessa-compact",
                lang: "en-ZA"
            }, {
                name: "Monica",
                voiceURI: "com.apple.ttsbundle.Monica-compact",
                lang: "es-ES"
            }, {
                name: "Paulina",
                voiceURI: "com.apple.ttsbundle.Paulina-compact",
                lang: "es-MX"
            }, {
                name: "Satu",
                voiceURI: "com.apple.ttsbundle.Satu-compact",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                voiceURI: "com.apple.ttsbundle.Amelie-compact",
                lang: "fr-CA"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Marie",
                voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Thomas",
                voiceURI: "com.apple.ttsbundle.Thomas-compact",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                voiceURI: "com.apple.ttsbundle.Carmit-compact",
                lang: "he-IL"
            }, {
                name: "Lekha",
                voiceURI: "com.apple.ttsbundle.Lekha-compact",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                voiceURI: "com.apple.ttsbundle.Mariska-compact",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                voiceURI: "com.apple.ttsbundle.Damayanti-compact",
                lang: "id-ID"
            }, {
                name: "Alice",
                voiceURI: "com.apple.ttsbundle.Alice-compact",
                lang: "it-IT"
            }, {
                name: "Hattori",
                voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Kyoko",
                voiceURI: "com.apple.ttsbundle.Kyoko-compact",
                lang: "ja-JP"
            }, {
                name: "O-ren",
                voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                voiceURI: "com.apple.ttsbundle.Yuna-compact",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                voiceURI: "com.apple.ttsbundle.Ellen-compact",
                lang: "nl-BE"
            }, {
                name: "Xander",
                voiceURI: "com.apple.ttsbundle.Xander-compact",
                lang: "nl-NL"
            }, {
                name: "Nora",
                voiceURI: "com.apple.ttsbundle.Nora-compact",
                lang: "no-NO"
            }, {
                name: "Zosia",
                voiceURI: "com.apple.ttsbundle.Zosia-compact",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                voiceURI: "com.apple.ttsbundle.Luciana-compact",
                lang: "pt-BR"
            }, {
                name: "Joana",
                voiceURI: "com.apple.ttsbundle.Joana-compact",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                voiceURI: "com.apple.ttsbundle.Ioana-compact",
                lang: "ro-RO"
            }, {
                name: "Milena",
                voiceURI: "com.apple.ttsbundle.Milena-compact",
                lang: "ru-RU"
            }, {
                name: "Laura",
                voiceURI: "com.apple.ttsbundle.Laura-compact",
                lang: "sk-SK"
            }, {
                name: "Alva",
                voiceURI: "com.apple.ttsbundle.Alva-compact",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                voiceURI: "com.apple.ttsbundle.Kanya-compact",
                lang: "th-TH"
            }, {
                name: "Yelda",
                voiceURI: "com.apple.ttsbundle.Yelda-compact",
                lang: "tr-TR"
            }, {
                name: "Li-mu",
                voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Ting-Ting",
                voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
                lang: "zh-CN"
            }, {
                name: "Yu-shu",
                voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
                lang: "zh-TW"
            }];
            a.cache_ios11_voices = [{
                name: "Maged",
                voiceURI: "com.apple.ttsbundle.Maged-compact",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                voiceURI: "com.apple.ttsbundle.Zuzana-compact",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                voiceURI: "com.apple.ttsbundle.Sara-compact",
                lang: "da-DK"
            }, {
                name: "Anna",
                voiceURI: "com.apple.ttsbundle.Anna-compact",
                lang: "de-DE"
            }, {
                name: "Helena",
                voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Martin",
                voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Melina",
                voiceURI: "com.apple.ttsbundle.Melina-compact",
                lang: "el-GR"
            }, {
                name: "Catherine",
                voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Gordon",
                voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Karen",
                voiceURI: "com.apple.ttsbundle.Karen-compact",
                lang: "en-AU"
            }, {
                name: "Arthur",
                voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.Daniel-compact",
                lang: "en-GB"
            }, {
                name: "Martha",
                voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Moira",
                voiceURI: "com.apple.ttsbundle.Moira-compact",
                lang: "en-IE"
            }, {
                name: "Aaron",
                voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact",
                lang: "en-US"
            }, {
                name: "Fred",
                voiceURI: "com.apple.speech.synthesis.voice.Fred",
                lang: "en-US"
            }, {
                name: "Nicky",
                voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact",
                lang: "en-US"
            }, {
                name: "Samantha",
                voiceURI: "com.apple.ttsbundle.Samantha-compact",
                lang: "en-US"
            }, {
                name: "Tessa",
                voiceURI: "com.apple.ttsbundle.Tessa-compact",
                lang: "en-ZA"
            }, {
                name: "Monica",
                voiceURI: "com.apple.ttsbundle.Monica-compact",
                lang: "es-ES"
            }, {
                name: "Paulina",
                voiceURI: "com.apple.ttsbundle.Paulina-compact",
                lang: "es-MX"
            }, {
                name: "Satu",
                voiceURI: "com.apple.ttsbundle.Satu-compact",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                voiceURI: "com.apple.ttsbundle.Amelie-compact",
                lang: "fr-CA"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Marie",
                voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Thomas",
                voiceURI: "com.apple.ttsbundle.Thomas-compact",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                voiceURI: "com.apple.ttsbundle.Carmit-compact",
                lang: "he-IL"
            }, {
                name: "Lekha",
                voiceURI: "com.apple.ttsbundle.Lekha-compact",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                voiceURI: "com.apple.ttsbundle.Mariska-compact",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                voiceURI: "com.apple.ttsbundle.Damayanti-compact",
                lang: "id-ID"
            }, {
                name: "Alice",
                voiceURI: "com.apple.ttsbundle.Alice-compact",
                lang: "it-IT"
            }, {
                name: "Hattori",
                voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Kyoko",
                voiceURI: "com.apple.ttsbundle.Kyoko-compact",
                lang: "ja-JP"
            }, {
                name: "O-ren",
                voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                voiceURI: "com.apple.ttsbundle.Yuna-compact",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                voiceURI: "com.apple.ttsbundle.Ellen-compact",
                lang: "nl-BE"
            }, {
                name: "Xander",
                voiceURI: "com.apple.ttsbundle.Xander-compact",
                lang: "nl-NL"
            }, {
                name: "Nora",
                voiceURI: "com.apple.ttsbundle.Nora-compact",
                lang: "no-NO"
            }, {
                name: "Zosia",
                voiceURI: "com.apple.ttsbundle.Zosia-compact",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                voiceURI: "com.apple.ttsbundle.Luciana-compact",
                lang: "pt-BR"
            }, {
                name: "Joana",
                voiceURI: "com.apple.ttsbundle.Joana-compact",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                voiceURI: "com.apple.ttsbundle.Ioana-compact",
                lang: "ro-RO"
            }, {
                name: "Milena",
                voiceURI: "com.apple.ttsbundle.Milena-compact",
                lang: "ru-RU"
            }, {
                name: "Laura",
                voiceURI: "com.apple.ttsbundle.Laura-compact",
                lang: "sk-SK"
            }, {
                name: "Alva",
                voiceURI: "com.apple.ttsbundle.Alva-compact",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                voiceURI: "com.apple.ttsbundle.Kanya-compact",
                lang: "th-TH"
            }, {
                name: "Yelda",
                voiceURI: "com.apple.ttsbundle.Yelda-compact",
                lang: "tr-TR"
            }, {
                name: "Li-mu",
                voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Ting-Ting",
                voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
                lang: "zh-CN"
            }, {
                name: "Yu-shu",
                voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
                lang: "zh-TW"
            }];
            a.systemvoices = null;
            a.CHARACTER_LIMIT = 100;
            a.VOICESUPPORT_ATTEMPTLIMIT = 5;
            a.voicesupport_attempts = 0;
            a.fallbackMode = !1;
            a.WORDS_PER_MINUTE = 130;
            a.fallback_audio = null;
            a.fallback_playbackrate = 1;
            a.def_fallback_playbackrate = a.fallback_playbackrate;
            a.fallback_audiopool = [];
            a.msgparameters = null;
            a.timeoutId = null;
            a.OnLoad_callbacks = [];
            a.useTimer = !1;
            a.utterances = [];
            a.userInteractionEvents = ["mousedown", "mouseup", "mousewheel", "keydown"];
            a.fallbackBufferLength = 5;
            a.tstCompiled = function(a) {
                return eval("typeof xy === 'undefined'")
            };
            a.fallbackServicePath = "https://code.responsivevoice.org/" + (a.tstCompiled() ? "" : "develop/") + "getvoice.php";
            a.default_rv = a.responsivevoices[0];
            a.debug = !1;
            a.rvsMapped = !1;
            a.forcedFallbackMode = !1;
            a.speechAllowedByUser = !0;
            a.log = function(b) {
                a.debug && console.log(b)
            };
            a.init = function() {
                a.is_android && (a.useTimer = !0);
                a.is_opera || "undefined" === typeof speechSynthesis ? (console.log("RV: Voice synthesis not supported"), a.enableFallbackMode()) : setTimeout((function() {
                    var b = setInterval((function() {
                        var c = window.speechSynthesis.getVoices();
                        0 != c.length || null != a.systemvoices && 0 != a.systemvoices.length ? (console.log("RV: Voice support ready"), a.systemVoicesReady(c), clearInterval(b)) : (console.log("Voice support NOT ready"), a.voicesupport_attempts++, a.voicesupport_attempts > a.VOICESUPPORT_ATTEMPTLIMIT && (clearInterval(b), null != window.speechSynthesis ? a.iOS ? (a.iOS11 ? a.systemVoicesReady(a.cache_ios11_voices) : a.iOS10 ? a.systemVoicesReady(a.cache_ios10_voices) : a.iOS9 ? a.systemVoicesReady(a.cache_ios9_voices) : a.systemVoicesReady(a.cache_ios_voices), console.log("RV: Voice support ready (cached)")) : (console.log("RV: speechSynthesis present but no system voices found"), a.enableFallbackMode()) : a.enableFallbackMode()))
                    }), 100)
                }), 100);
                (a.iOS || a.is_android || a.is_safari) && a.enableWindowClickHook();
                a.Dispatch("OnLoad")
            };
            a.systemVoicesReady = function(b) {
                a.systemvoices = b;
                a.mapRVs();
                null != a.OnVoiceReady && a.OnVoiceReady.call();
                a.Dispatch("OnReady");
                window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
            };
            a.enableFallbackMode = function() {
                a.fallbackMode = !0;
                a.forcedFallbackMode = !0;
                console.log("RV: Enabling fallback mode");
                a.mapRVs();
                null != a.OnVoiceReady && a.OnVoiceReady.call();
                a.Dispatch("OnReady");
                window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));
                a.Dispatch("OnServiceSwitched")
            };
            a.getVoices = function() {
                for (var b = [], c = 0; c < a.responsivevoices.length; c++) {
                    b.push({
                        name: a.responsivevoices[c].name
                    })
                }
                return b
            };
            a.speak = function(b, c, d) {
                if (a.rvsMapped) {
                    var h = null;
                    if (a.isPlaying()) {
                        a.log("Cancelling previous speech"), a.cancel(), setTimeout((function() {
                            a.speak(b, c, d)
                        }), 50)
                    } else {
                        b = b.replace(/["`]/gm, "'");
                        a.msgparameters = d || {};
                        a.msgtext = b;
                        a.msgvoicename = c;
                        a.onstartFired = !1;
                        var k = [];
                        if (b.length > a.CHARACTER_LIMIT) {
                            for (var f = b; f.length > a.CHARACTER_LIMIT;) {
                                var g = f.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/),
                                    e = "";
                                if (-1 == g || g >= a.CHARACTER_LIMIT) {
                                    g = f.search(/,[^0-9]+/)
                                }
                                if (-1 == g || g >= a.CHARACTER_LIMIT) {
                                    var l = f.split(" ");
                                    for (g = 0; g < l.length; g++) {
                                        if (e.length + l[g].length + 1 > a.CHARACTER_LIMIT) {
                                            l[g].length >= a.CHARACTER_LIMIT && (e += l[g].substr(0, a.CHARACTER_LIMIT - e.length - 1));
                                            break
                                        }
                                        e += (0 != g ? " " : "") + l[g]
                                    }
                                } else {
                                    e = f.substr(0, g + 1)
                                }
                                f = f.substr(e.length, f.length - e.length);
                                k.push(e)
                            }
                            0 < f.length && k.push(f)
                        } else {
                            k.push(b)
                        }
                        console.log(k, 'test-rk');
                        a.multipartText = k;
                        null == c ? (g = a.default_rv, a.setDefaultVoice(g.name)) : g = a.getResponsiveVoice(c);
                        !0 === g.deprecated && console.warn("ResponsiveVoice: Voice " + g.name + " is deprecated and will be removed in future releases");
                        f = {};
                        if (null != g.mappedProfile) {
                            f = g.mappedProfile
                        } else {
                            if (f.systemvoice = a.getMatchedVoice(g), f.collectionvoice = {}, null == f.systemvoice) {
                                console.log("RV: ERROR: No voice found for: " + c);
                                return
                            }
                        }
                        if (a.checkSpeechAllowed()) {

                            a.fallbackMode && 0 < a.fallback_audiopool.length && a.clearFallbackPool();
                            a.msgprofile = f;
                            a.log("Voice picked: " + a.msgprofile.systemvoice.name);
                            a.utterances = [];
                            a.fallbackChunks = [];

                            for (g = 0; g < k.length; g++) {
                                if (!a.fallbackMode && a.getServiceEnabled(a.services.NATIVE_TTS)) {

                                    a.log("Using SpeechSynthesis"), h = a.services.NATIVE_TTS, e = new SpeechSynthesisUtterance, e.voiceURI = f.systemvoice.voiceURI, e.volume = a.selectBest([f.collectionvoice.volume, f.systemvoice.volume, 1]), e.rate = a.selectBest([a.iOS9plus ? 1 : null, f.collectionvoice.rate, f.systemvoice.rate, 1]), e.pitch = a.selectBest([f.collectionvoice.pitch, f.systemvoice.pitch, 1]), e.text = k[g], e.lang = a.selectBest([f.collectionvoice.lang, f.systemvoice.lang]), e.rvIndex = g, e.rvTotal = k.length, 0 == g && (e.onstart = a.speech_onstart), a.msgparameters.onendcalled = !1, null != d ? (e.voice = "undefined" !== typeof d.voice ? d.voice : f.systemvoice, g < k.length - 1 && 1 < k.length ? (e.onend = a.onPartEnd, e.hasOwnProperty("addEventListener") && e.addEventListener("end", a.onPartEnd)) : (e.onend = a.speech_onend, e.hasOwnProperty("addEventListener") && e.addEventListener("end", a.speech_onend)), e.onerror = d.onerror || function(b) {
                                        a.log("RV: Unknow Error");
                                        a.log(b)
                                    }, d.rate = a.validateParameters(d, "rate"), d.pitch = a.validateParameters(d, "pitch"), d.volume = a.validateParameters(d, "volume"), e.onpause = d.onpause, e.onresume = d.onresume, e.onmark = d.onmark, e.onboundary = d.onboundary || a.onboundary, e.pitch = null != d.pitch ? d.pitch : e.pitch, e.rate = a.iOS ? (null != d.rate ? d.rate * d.rate : 1) * e.rate : (null != d.rate ? d.rate : 1) * e.rate, e.volume = null != d.volume ? d.volume : e.volume) : (a.log("No Params received for current Utterance"), e.voice = f.systemvoice, e.onend = a.speech_onend, e.onboundary = a.onboundary, e.onerror = function(b) {
                                        a.log("RV: Unknow Error");
                                        a.log(b)
                                    }), a.utterances.push(e), 0 == g && (a.currentMsg = e), console.log(e), a.tts_speak(e)
                                } else {
                                    if (a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO)) {
                                        h = a.services.FALLBACK_AUDIO;
                                        a.fallback_playbackrate = a.def_fallback_playbackrate;
                                        e = a.selectBest([f.collectionvoice.pitch, f.systemvoice.pitch, 1]);
                                        l = a.selectBest([a.iOS9plus ? 1 : null, f.collectionvoice.rate, f.systemvoice.rate, 1]);
                                        var m = a.selectBest([f.collectionvoice.volume, f.systemvoice.volume, 1]);
                                        if (null != d) {
                                            e *= null != d.pitch ? d.pitch : 1;
                                            l *= null != d.rate ? d.rate : 1;
                                            m *= null != d.volume ? d.volume : 1;
                                            var n = d.extraParams || null
                                        }
                                        e /= 2;
                                        l /= 2;
                                        m *= 2;
                                        e = Math.min(Math.max(e, 0), 1);
                                        l = Math.min(Math.max(l, 0), 1);
                                        m = Math.min(Math.max(m, 0), 1);
                                        e = a.fallbackServicePath + "?t=" + encodeURIComponent(k[g]) + "&tl=" + (f.collectionvoice.lang || f.systemvoice.lang || "en-US") + "&sv=" + (f.collectionvoice.service || f.systemvoice.service || "") + "&vn=" + (f.collectionvoice.voicename || f.systemvoice.voicename || "") + "&pitch=" + e.toString() + "&rate=" + l.toString() + "&vol=" + m.toString();
                                        void 0 !== f.collectionvoice.gender && (e += "&gender=" + f.collectionvoice.gender);
                                        n && (e += "&extraParams=" + JSON.stringify(n));
                                        a.fallbackChunks.push({
                                            text: k[g],
                                            url: e,
                                            audio: null
                                        })
                                    }
                                }
                            }

                            if(a.fallbackMode){

                                var utterance = new SpeechSynthesisUtterance(k.join(' '));

                                synth.speak(utterance);
                            }
                            a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO) && (a.fallbackChunkIndex = 0, a.fallback_startPart());
                            a.log("Service used: " + h)
                        } else {
                            a.scheduledSpeak = {
                                text: b,
                                voicename: c,
                                parameters: d
                            }
                        }
                    }
                } else {
                    setTimeout((function() {
                        a.speak(b, c, d)
                    }), 15)
                }
            };
            a.startTimeout = function(b, c) {
                var d = a.msgprofile.collectionvoice.timerSpeed;
                null == a.msgprofile.collectionvoice.timerSpeed && (d = 1);
                0 >= d || (a.timeoutId = setTimeout(c, a.getEstimatedTimeLength(b, d)), a.log("Timeout ID: " + a.timeoutId))
            };
            a.checkAndCancelTimeout = function() {
                null != a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = null)
            };
            a.speech_timedout = function() {
                a.cancel();
                a.cancelled = !1;
                a.speech_onend()
            };
            a.speech_onend = function() {
                a.checkAndCancelTimeout();
                !0 === a.cancelled ? a.cancelled = !1 : (a.log("on end fired"), null != a.msgparameters && null != a.msgparameters.onend && 1 != a.msgparameters.onendcalled && (a.log("Speech on end called  -" + a.msgtext), a.msgparameters.onendcalled = !0, a.msgparameters.onend()))
            };
            a.speech_onstart = function() {
                if (!a.onstartFired) {
                    a.onstartFired = !0;
                    a.log("Speech start");
                    if (a.iOS || a.is_safari || a.useTimer) {
                        a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout)
                    }
                    a.msgparameters.onendcalled = !1;
                    if (null != a.msgparameters && null != a.msgparameters.onstart) {
                        a.msgparameters.onstart()
                    }
                }
            };
            a.fallback_startPart = function() {
                0 == a.fallbackChunkIndex && a.speech_onstart();
                a.fallback_updateChunksBuffer();
                a.fallback_audio = a.fallbackChunks[a.fallbackChunkIndex].audio;
                null == a.fallback_audio ? a.log("RV: Fallback Audio is not available") : (function() {
                    var b = a.fallback_audio;
                    setTimeout((function() {
                        b.playbackRate = a.fallback_playbackrate
                    }), 50);
                    b.onloadedmetadata = function() {
                        b.playbackRate = a.fallback_playbackrate
                    };
                    if (2 <= b.readyState) {
                        b.play()
                    } else {
                        var c = function() {
                            b.play();
                            b.removeEventListener("canplaythrough", c)
                        };
                        b.addEventListener("canplaythrough", c, !1)
                    }
                }(), a.fallback_errors && (a.log("RV: Speech cancelled due to errors"), a.speech_onend()), a.fallback_audio.addEventListener("ended", a.fallback_finishPart), a.useTimer && a.startTimeout(a.multipartText[a.fallbackChunkIndex], a.fallback_finishPart))
            };
            a.isFallbackAudioPlaying = function() {
                var b;
                for (b = 0; b < a.fallback_audiopool.length; b++) {
                    var c = a.fallback_audiopool[b];
                    if (!c.paused && !c.ended && c.currentTime != c.duration) {
                        return !0
                    }
                }
                return !1
            };
            a.fallback_finishPart = function(b) {
                a.isFallbackAudioPlaying() ? (a.checkAndCancelTimeout(), a.timeoutId = setTimeout(a.fallback_finishPart, 1000 * (a.fallback_audio.duration - a.fallback_audio.currentTime))) : (a.checkAndCancelTimeout(), a.fallbackChunkIndex < a.fallbackChunks.length - 1 ? (a.fallbackChunkIndex++, a.fallback_startPart()) : a.speech_onend())
            };
            a.cancel = function() {

                synth.cancel();
                a.checkAndCancelTimeout();
                a.fallbackMode ? (null != a.fallback_audio && a.fallback_audio.pause(), a.clearFallbackPool()) : (a.cancelled = !0, speechSynthesis.cancel())
            };
            a.voiceSupport = function() {
                return "speechSynthesis" in window
            };
            a.OnFinishedPlaying = function(b) {
                if (null != a.msgparameters && null != a.msgparameters.onend) {
                    a.msgparameters.onend()
                }
            };
            a.setDefaultVoice = function(b) {
                if (a.rvsMapped) {
                    var c = a.getResponsiveVoice(b);
                    null != c && (a.default_rv = c)
                } else {
                    setTimeout((function() {
                        a.setDefaultVoice(b)
                    }), 15)
                }
            };
            a.mapRVs = function() {
                if ("object" == typeof navigator) {
                    var b, c = "anguage";
                    var d = navigator;
                    d = (b = d["l" + c + "s"], b && b.length ? b : (c = d["l" + c] || d["browserL" + c] || d["userL" + c]) ? [c] : c)
                } else {
                    d = void 0
                }
                b = d[0];
                for (c = 0; c < a.responsivevoices.length; c++) {
                    d = a.responsivevoices[c];
                    for (var h = 0; h < d.voiceIDs.length; h++) {
                        var k = a.voicecollection[d.voiceIDs[h]];
                        if (1 != k.fallbackvoice) {
                            var f = a.getSystemVoice(k.name);
                            a.forcedFallbackMode && (f = null);
                            a.iOS12_0 && d.lang.toLowerCase() != b.toLowerCase() && d.lang.toLowerCase().split("-")[0] != b.toLowerCase() && (f = null);
                            if (null != f) {
                                d.mappedProfile = {
                                    systemvoice: f,
                                    collectionvoice: k
                                };
                                break
                            }
                        } else {
                            d.mappedProfile = {
                                systemvoice: {},
                                collectionvoice: k
                            };
                            break
                        }
                    }
                }
                a.rvsMapped = !0
            };
            a.getMatchedVoice = function(b) {
                for (var c = 0; c < b.voiceIDs.length; c++) {
                    var d = a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);
                    if (null != d) {
                        return d
                    }
                }
                return null
            };
            a.getSystemVoice = function(b) {
                var c = String.fromCharCode(160);
                var d = b.replace(new RegExp("\\s+|" + c, "g"), "");
                if ("undefined" === typeof a.systemvoices || null === a.systemvoices) {
                    return null
                }
                for (var h = 0; h < a.systemvoices.length; h++) {
                    if (0 === a.systemvoices[h].name.localeCompare(b) || 0 === a.systemvoices[h].name.replace(new RegExp("\\s+|" + c, "g"), "").replace(/ *\([^)]*\) */g, "").localeCompare(d)) {
                        return a.systemvoices[h]
                    }
                }
                return null
            };
            a.getResponsiveVoice = function(b) {
                for (var c = 0; c < a.responsivevoices.length; c++) {
                    if (a.responsivevoices[c].name == b) {
                        return b = a.fallbackMode, a.fallbackMode = !0 === a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice || !0 === a.forcedFallbackMode ? !0 : !1, b != a.fallbackMode && (a.mapRVs(), a.Dispatch("OnServiceSwitched")), a.responsivevoices[c]
                    }
                }
                return null
            };
            a.Dispatch = function(b) {
                if (a.hasOwnProperty(b + "_callbacks") && null != a[b + "_callbacks"] && 0 < a[b + "_callbacks"].length) {
                    for (var c = a[b + "_callbacks"], d = 0; d < c.length; d++) {
                        c[d]()
                    }
                    return !0
                }
                var h = b + "_callbacks_timeout",
                    k = b + "_callbacks_timeoutCount";
                a.hasOwnProperty(h) || (a[k] = 10, a[h] = setInterval((function() {
                    --a[k];
                    (a.Dispatch(b) || 0 > a[k]) && clearTimeout(a[h])
                }), 50));
                return !1
            };
            a.AddEventListener = function(b, c) {
                a.hasOwnProperty(b + "_callbacks") || (a[b + "_callbacks"] = []);
                a[b + "_callbacks"].push(c)
            };
            a.addEventListener = a.AddEventListener;
            a.RemoveEventListener = function(b, c) {
                a[b + "_callbacks"] && -1 != a[b + "_callbacks"].indexOf(c) && a[b + "_callbacks"].splice(a[b + "_callbacks"].indexOf(c), 1)
            };
            a.clickEvent = function() {
                a.log("Click event");
                a.click_event_detected = !0;
                a.initializePermissions();
                a.userInteractionEvents.forEach((function(b) {
                    window.removeEventListener(b, a.clickEvent, !1)
                }));
                a.Dispatch("OnClickEvent")
            };
            a.initializePermissions = function() {
                if (a.iOS && !a.iOS_initialized) {
                    a.log("Initializing iOS click event");
                    var b = new SpeechSynthesisUtterance(" ");
                    speechSynthesis.speak(b);
                    a.iOS_initialized = !0
                }
                a.is_android && !a.android_initialized && (a.log("Initializing Android click event"), b = new SpeechSynthesisUtterance(" "), speechSynthesis.speak(b));
                a.initFallbackPool()
            };
            a.isPlaying = function() {
                return a.fallbackMode ? null != a.fallback_audio && !a.fallback_audio.ended && !a.fallback_audio.paused : speechSynthesis.speaking
            };
            a.clearFallbackPool = function() {
                for (var b = 0; b < a.fallback_audiopool.length; b++) {
                    null != a.fallback_audiopool[b] && (a.fallback_audiopool[b].pause(), a.fallback_audiopool[b].src = "")
                }
                a.fallback_audiopool_index = 0;
                a.fallbackChunks = []
            };
            a.initFallbackPool = function() {
                if (!a.fallback_audiopool || 0 == a.fallback_audiopool.length) {
                    for (var b = 0; 10 > b; b++) {
                        var c = b,
                            d = document.createElement("AUDIO");
                        d.preload = "auto";
                        a.is_android && (d.src = "", d.load(), 9 == c && (a.log("Android HTML audio initialized"), a.android_initialized = !0));
                        a.iOS && (d.src = "", d.load(), 9 == c && (a.log("iOS HTML audio initialized"), a.iOS_initialized = !0));
                        a.fallback_audiopool.push(d)
                    }
                    a.fallback_audiopool_index = 0
                }
            };
            a.allowSpeechClicked = function(b) {
                a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv);
                a.allowSpeechDiv = null;
                if (a.speechAllowedByUser = b) {
                    a.clickEvent(), a.scheduledSpeak && (a.speak(a.scheduledSpeak.text, a.scheduledSpeak.voicename, a.scheduledSpeak.parameters), a.scheduledSpeak = null)
                }
                a.Dispatch("OnAllowSpeechClicked")
            };
            a.checkSpeechAllowed = function(b) {
                if (0 == a.speechAllowedByUser) {
                    return !1
                }
                if ((a.is_android || a.iOS || a.is_safari && (a.fallbackMode || a.forcedFallbackMode)) && !a.click_event_detected) {
                    if (a.allowSpeechDiv) {
                        return
                    }
                    a.allowSpeechDiv_appearances = null == a.allowSpeechDiv_appearances ? 1 : ++a.allowSpeechDiv_appearances;
                    if (2 < a.allowSpeechDiv_appearances) {
                        return console.log("ResponsiveVoice: Speech not allowed by user"), !1
                    }
                    var c = document.createElement("style");
                    c.innerHTML = '.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';
                    document.body.appendChild(c);
                    a.allowSpeechDiv = document.createElement("div");
                    a.allowSpeechDiv.classList.add("rvNotification");
                    void 0 == b && (b = {});
                    a.allowSpeechDiv.innerHTML = '<div class="rvTextRow"><strong>' + (void 0 != b.urlOverride ? b.urlOverride : window.location.hostname) + "</strong> " + (void 0 != b.textOverride ? b.textOverride : "wants to play speech") + '</div><div class="rvButtonRow"><div onclick="responsiveVoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsiveVoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>';
                    document.body.appendChild(a.allowSpeechDiv);
                    return !1
                }
                return !0
            };
            a.fallback_audioPool_getAudio = function() {
                a.initFallbackPool();
                a.fallback_audiopool_index >= a.fallback_audiopool.length && (a.fallback_audiopool_index = 0);
                return a.fallback_audiopool[a.fallback_audiopool_index++]
            };
            a.fallback_updateChunksBuffer = function() {
                for (var b = a.fallbackChunkIndex; b < Math.min(a.fallbackChunks.length, a.fallbackChunkIndex + a.fallbackBufferLength); b++) {
                    var c = a.fallbackChunks[b];
                    null == c.audio && (c.audio = a.fallback_audioPool_getAudio(), c.audio.src = c.url, c.audio.playbackRate = a.fallback_playbackrate, c.audio.preload = "auto", c.audio.load())
                }
            };
            a.selectBest = function(a) {
                for (var b = 0; b < a.length; b++) {
                    if (null != a[b]) {
                        return a[b]
                    }
                }
                return null
            };
            a.pause = function() {
                a.fallbackMode ? null != a.fallback_audio && a.fallback_audio.pause() : speechSynthesis.pause()
            };
            a.resume = function() {
                a.fallbackMode ? null != a.fallback_audio && a.fallback_audio.play() : speechSynthesis.resume()
            };
            a.tts_speak = function(b) {
                setTimeout((function() {
                    a.cancelled = !1;
                    speechSynthesis.speak(b)
                }), 0.01)
            };
            a.setVolume = function(b) {
                if (a.isPlaying()) {
                    if (a.fallbackMode) {
                        for (var c = 0; c < a.fallback_audiopool.length; c++) {
                            a.fallback_audiopool[c].volume = b
                        }
                        a.fallback_audio.volume = b
                    } else {
                        for (c = 0; c < a.utterances.length; c++) {
                            a.utterances[c].volume = b
                        }
                    }
                }
            };
            a.onPartEnd = function(b) {
                if (null != a.msgparameters && null != a.msgparameters.onchuckend) {
                    a.msgparameters.onchuckend()
                }
                a.Dispatch("OnPartEnd");
                b = a.utterances.indexOf(b.utterance);
                a.currentMsg = a.utterances[b + 1]
            };
            a.onboundary = function(b) {
                a.log("On Boundary");
                a.iOS && !a.onstartFired && a.speech_onstart()
            };
            a.numToWords = function(b) {
                function c(a) {
                    if (Array.isArray(a)) {
                        for (var b = 0, c = Array(a.length); b < a.length; b++) {
                            c[b] = a[b]
                        }
                        return c
                    }
                    return Array.from(a)
                }
                var d = (function() {
                        return function(a, b) {
                            if (Array.isArray(a)) {
                                return a
                            }
                            if (Symbol.iterator in Object(a)) {
                                var c = [],
                                    d = !0,
                                    e = !1,
                                    f = void 0;
                                try {
                                    for (var g = a[Symbol.iterator](), h; !(d = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); d = !0) {}
                                } catch (r) {
                                    e = !0, f = r
                                } finally {
                                    try {
                                        if (!d && g["return"]) {
                                            g["return"]()
                                        }
                                    } finally {
                                        if (e) {
                                            throw f
                                        }
                                    }
                                }
                                return c
                            }
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    })(),
                    h = function(a) {
                        return 0 === a.length
                    },
                    k = function(a) {
                        return function(b) {
                            return b.slice(0, a)
                        }
                    },
                    f = function(a) {
                        return function(b) {
                            return b.slice(a)
                        }
                    },
                    g = function(a) {
                        return a.slice(0).reverse()
                    },
                    e = function(a) {
                        return function(b) {
                            return function(c) {
                                return a(b(c))
                            }
                        }
                    },
                    l = function(a) {
                        return !a
                    },
                    m = function q(a) {
                        return function(b) {
                            return h(b) ? [] : [k(a)(b)].concat(c(q(a)(f(a)(b))))
                        }
                    },
                    n = " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),
                    p = "  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),
                    t = " thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" "),
                    u = function(a) {
                        var b = d(a, 3);
                        a = b[0];
                        var c = b[1];
                        b = b[2];
                        return [0 === (Number(b) || 0) ? "" : n[b] + " hundred ", 0 === (Number(a) || 0) ? p[c] : p[c] && p[c] + " " || "", n[c + a] || n[a]].join("")
                    },
                    v = function(a, b) {
                        return "" === a ? a : a + " " + t[b]
                    };
                return "number" === typeof b ? a.numToWords(String(b)) : "0" === b ? "zero" : e(m(3))(g)(Array.from(b)).map(u).map(v).filter(e(l)(h)).reverse().join(" ").trim()
            };
            a.getWords = function(b) {
                b = b.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi, " dummy currency ");
                var c = b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);
                c = c.filter((function(a) {
                    return /[^\s]/.test(a)
                }));
                for (var d = 0; d < c.length; d++) {
                    null != (b = c[d].toString().match(/\d+/)) && (c.splice(d, 1), a.numToWords(+b[0]).split(/\s+/).map((function(a) {
                        c.push(a)
                    })))
                }
                return c
            };
            a.getEstimatedTimeLength = function(b, c) {
                var d = a.getWords(b),
                    h = 0,
                    k = a.fallbackMode ? 1300 : 700;
                c = c || 1;
                d.map((function(a, b) {
                    h += (a.toString().match(/[^ ]/igm) || a).length
                }));
                var f = d.length,
                    g = 60 / a.WORDS_PER_MINUTE * c * 1000 * f;
                5 > f && (g = c * (k + 50 * h));
                a.log("Estimated time length: " + g + " ms, words: [" + d + "], charsCount: " + h);
                return g
            };
            a.validateParameters = function(a, c) {
                if ("undefined" === typeof a[c]) {
                    return a[c]
                }
                switch (c) {
                    case "rate":
                    case "pitch":
                    case "volume":
                        var b = Number(a[c]);
                        isNaN(b) && console.warn("ResponsiveVoice: the parameter " + c + ' has a wrong value "' + a[c] + '". Defaults were used.');
                        a[c] = isNaN(b) ? "1" : a[c]
                }
                return a[c]
            };
            a.services = {
                NATIVE_TTS: 0,
                FALLBACK_AUDIO: 1
            };
            a.servicesPriority = [0, 1];
            a.servicesEnabled = [];
            a.setServiceEnabled = function(b, c) {
                a.servicesEnabled[b] = c
            };
            a.getServiceEnabled = function(b) {
                return a.servicesEnabled[b] || !1
            };
            a.setServiceEnabled(a.services.NATIVE_TTS, !0);
            a.setServiceEnabled(a.services.FALLBACK_AUDIO, !0);
            a.forceFallbackMode = function(b) {
                a.forcedFallbackMode = b;
                a.fallbackMode = b;
                a.mapRVs();
                a.Dispatch("OnServiceSwitched")
            };
            a.enableWindowClickHook = function() {
                a.userInteractionEvents.forEach((function(b) {
                    window.addEventListener(b, a.clickEvent, !1)
                }))
            };
            "interactive" === document.readyState ? a.init() : document.addEventListener("DOMContentLoaded", (function() {
                a.init()
            }))
        },
        responsiveVoice = new ResponsiveVoice
};
!(function(t,e){"object"==typeof exports?module.exports=e(window,document):t.SimpleScrollbar=e(window,document)})(this,(function(t,e){function s(t){Object.prototype.hasOwnProperty.call(t,"data-simple-scrollbar")||Object.defineProperty(t,"data-simple-scrollbar",{value:new o(t)})}function i(t,s){function i(t){var e=t.pageY-a;a=t.pageY,n((function(){s.el.scrollTop+=e/s.scrollRatio}))}function r(){t.classList.remove("ss-grabbed"),e.body.classList.remove("ss-grabbed"),e.removeEventListener("mousemove",i),e.removeEventListener("mouseup",r)}var a;t.addEventListener("mousedown",(function(s){return a=s.pageY,t.classList.add("ss-grabbed"),e.body.classList.add("ss-grabbed"),e.addEventListener("mousemove",i),e.addEventListener("mouseup",r),!1}))}function r(t){for(this.target=t,this.direction=window.getComputedStyle(this.target).direction,this.bar='<div class="ss-scroll">',this.wrapper=e.createElement("div"),this.wrapper.setAttribute("class","ss-wrapper"),this.el=e.createElement("div"),this.el.setAttribute("class","ss-content"),"rtl"===this.direction&&this.el.classList.add("rtl"),this.wrapper.appendChild(this.el);this.target.firstChild;)this.el.appendChild(this.target.firstChild);this.target.appendChild(this.wrapper),this.target.insertAdjacentHTML("beforeend",this.bar),this.bar=this.target.lastChild,i(this.bar,this),this.moveBar(),this.el.addEventListener("scroll",this.moveBar.bind(this)),this.el.addEventListener("mouseenter",this.moveBar.bind(this)),this.target.classList.add("ss-container");var s=window.getComputedStyle(t);"0px"===s.height&&"0px"!==s["max-height"]&&(t.style.height=s["max-height"])}function a(){for(var t=e.querySelectorAll("*[ss-container]"),i=0;i<t.length;i++)s(t[i])}var n=t.requestAnimationFrame||t.setImmediate||function(t){return setTimeout(t,0)};r.prototype={moveBar:function(t){var e=this.el.scrollHeight,s=this.el.clientHeight,i=this;this.scrollRatio=s/e;var r="rtl"===i.direction,a=r?i.target.clientWidth-i.bar.clientWidth+18:-1*(i.target.clientWidth-i.bar.clientWidth);n((function(){i.scrollRatio>=1?i.bar.classList.add("ss-hidden"):(i.bar.classList.remove("ss-hidden"),i.bar.style.cssText="height:"+Math.max(100*i.scrollRatio,10)+"%; top:"+i.el.scrollTop/e*100+"%;right:"+a+"px;")}))}},e.addEventListener("DOMContentLoaded",a),r.initEl=s,r.initAll=a;var o=r;return o}));

!(function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Slideout=t()}})((function(){var t,e,n;return (function i(t,e,n){function o(r,a){if(!e[r]){if(!t[r]){var u=typeof require=="function"&&require;if(!a&&u)return u(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var f=e[r]={exports:{}};t[r][0].call(f.exports,(function(e){var n=t[r][1][e];return o(n?n:e)}),f,f.exports,i,t,e,n)}return e[r].exports}var s=typeof require=="function"&&require;for(var r=0;r<n.length;r++)o(n[r]);return o})({1:[(function(t,e,n){"use strict";var i=t("decouple");var o=t("emitter");var s;var r=false;var a=window.document;var u=a.documentElement;var l=window.navigator.msPointerEnabled;var f={start:l?"MSPointerDown":"touchstart",move:l?"MSPointerMove":"touchmove",end:l?"MSPointerUp":"touchend"};var h=(function v(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;var e=a.getElementsByTagName("script")[0].style;for(var n in e){if(t.test(n)){return"-"+n.match(t)[0].toLowerCase()+"-"}}if("WebkitOpacity"in e){return"-webkit-"}if("KhtmlOpacity"in e){return"-khtml-"}return""})();function c(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function p(t,e){t.prototype=c(t.prototype||{},e.prototype)}function d(t){while(t.parentNode){if(t.getAttribute("data-slideout-ignore")!==null){return t}t=t.parentNode}return null}function _(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this._touch=t.touch===undefined?true:t.touch&&true;this._side=t.side||"left";this.panel=t.panel;this.menu=t.menu;if(!this.panel.classList.contains("slideout-panel")){this.panel.classList.add("slideout-panel")}if(!this.panel.classList.contains("slideout-panel-"+this._side)){this.panel.classList.add("slideout-panel-"+this._side)}if(!this.menu.classList.contains("slideout-menu")){this.menu.classList.add("slideout-menu")}if(!this.menu.classList.contains("slideout-menu-"+this._side)){this.menu.classList.add("slideout-menu-"+this._side)}this._fx=t.fx||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=this._side==="right"?-1:1;this._translateTo*=this._orientation;if(this._touch){this._initTouchEvents()}}p(_,o);_.prototype.open=function(){var t=this;this.emit("beforeopen");if(!u.classList.contains("slideout-open")){u.classList.add("slideout-open")}this._setTransition();this._translateXTo(this._translateTo);this._opened=true;setTimeout((function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="";t.emit("open")}),this._duration+50);return this};_.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._setTransition();this._translateXTo(0);this._opened=false;setTimeout((function(){u.classList.remove("slideout-open");t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[h+"transform"]=t.panel.style.transform="";t.emit("close")}),this._duration+50);return this};_.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};_.prototype.isOpen=function(){return this._opened};_.prototype._translateXTo=function(t){this._currentOffsetX=t;this.panel.style[h+"transform"]=this.panel.style.transform="translateX("+t+"px)";return this};_.prototype._setTransition=function(){this.panel.style[h+"transition"]=this.panel.style.transition=h+"transform "+this._duration+"ms "+this._fx;return this};_.prototype._initTouchEvents=function(){var t=this;this._onScrollFn=i(a,"scroll",(function(){if(!t._moved){clearTimeout(s);r=true;s=setTimeout((function(){r=false}),250)}}));this._preventMove=function(e){if(t._moved){e.preventDefault()}};a.addEventListener(f.move,this._preventMove);this._resetTouchFn=function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;t._preventOpen=!t._touch||!t.isOpen()&&t.menu.clientWidth!==0};this.panel.addEventListener(f.start,this._resetTouchFn);this._onTouchCancelFn=function(){t._moved=false;t._opening=false};this.panel.addEventListener("touchcancel",this._onTouchCancelFn);this._onTouchEndFn=function(){if(t._moved){t.emit("translateend");t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false};this.panel.addEventListener(f.end,this._onTouchEndFn);this._onTouchMoveFn=function(e){if(r||t._preventOpen||typeof e.touches==="undefined"||d(e.target)){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var o=n*t._orientation;if(t._opened&&o>0||!t._opened&&o<0){return}if(!t._moved){t.emit("translatestart")}if(o<=0){i=n+t._padding*t._orientation;t._opening=false}if(!(t._moved&&u.classList.contains("slideout-open"))){u.classList.add("slideout-open")}t.panel.style[h+"transform"]=t.panel.style.transform="translateX("+i+"px)";t.emit("translate",i);t._moved=true}};this.panel.addEventListener(f.move,this._onTouchMoveFn);return this};_.prototype.enableTouch=function(){this._touch=true;return this};_.prototype.disableTouch=function(){this._touch=false;return this};_.prototype.destroy=function(){this.close();a.removeEventListener(f.move,this._preventMove);this.panel.removeEventListener(f.start,this._resetTouchFn);this.panel.removeEventListener("touchcancel",this._onTouchCancelFn);this.panel.removeEventListener(f.end,this._onTouchEndFn);this.panel.removeEventListener(f.move,this._onTouchMoveFn);a.removeEventListener("scroll",this._onScrollFn);this.open=this.close=function(){};return this};e.exports=_}),{decouple:2,emitter:3}],2:[(function(t,e,n){"use strict";var i=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}})();function o(t,e,n){var o,s=false;function r(t){o=t;a()}function a(){if(!s){i(u);s=true}}function u(){n.call(t,o);s=false}t.addEventListener(e,r,false);return r}e.exports=o}),{}],3:[(function(t,e,n){"use strict";var i=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};n.__esModule=true;var o=(function(){function t(){i(this,t)}t.prototype.on=function e(t,n){this._eventCollection=this._eventCollection||{};this._eventCollection[t]=this._eventCollection[t]||[];this._eventCollection[t].push(n);return this};t.prototype.once=function n(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};t.prototype.off=function o(t,e){var n=undefined;if(!this._eventCollection||!(n=this._eventCollection[t])){return this}n.forEach((function(t,i){if(t===e||t.listener===e){n.splice(i,1)}}));if(n.length===0){delete this._eventCollection[t]}return this};t.prototype.emit=function s(t){var e=this;for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++){i[o-1]=arguments[o]}var s=undefined;if(!this._eventCollection||!(s=this._eventCollection[t])){return this}s=s.slice(0);s.forEach((function(t){return t.apply(e,i)}));return this};return t})();n["default"]=o;e.exports=n["default"]}),{}]},{},[1])(1)}));
/**
 * Created by Azamat Mirvosiqov on 29.01.2015.
 */

var curUrl = window.location.href;
var arCurUrl = curUrl.split('/');
var noImageTitle = 'Без картинки';
var setImageTitle = 'С картинкой';
switch (arCurUrl[3]){
    case 'uz':
        noImageTitle = 'Расмсиз';
        setImageTitle = 'Расмли';
        break;
    case 'oz':
        noImageTitle = 'Rasmsiz';
        setImageTitle = 'Rasmli';
        break;
    case 'en':
        noImageTitle = 'Without a picture';
        setImageTitle = 'With a picture';
        break;
}

var min = 16,
    max = 20;

function makeNormal() {
    jQuery('html').removeClass('blackAndWhite blackAndWhiteInvert');
    jQuery.removeCookie('specialView', {path: '/'});
}

function makeBlackAndWhite() {
    makeNormal();
    jQuery('html').addClass('blackAndWhite');
    jQuery.cookie("specialView", 'blackAndWhite', {path: '/'});
}

function makeBlackAndWhiteDark() {
    makeNormal();
    jQuery('html').addClass('blackAndWhiteInvert');
    jQuery.cookie("specialView", 'blackAndWhiteInvert', {path: '/'});
}

function makeSetImage() {
    jQuery('html').removeClass( "noImage" );
    jQuery('.spcNoImage').removeClass( "spcSetImage" );
    jQuery('.spcNoImage').attr('data-original-title', setImageTitle);
    jQuery.removeCookie('specialViewImage', {path: '/'});
}

function makeNoImage() {
    jQuery('html').stop().addClass( "noImage" );
    jQuery('.spcNoImage').addClass( "spcSetImage" );
    jQuery('.spcNoImage').attr('data-original-title', noImageTitle);
    jQuery.cookie("specialViewImage", 'noImage', {path: '/'});
}

function offImages(){
    if (jQuery.cookie("specialViewImage") == 'noImage'){
        makeSetImage();
    } else {
        makeNoImage();
    }
}

function setFontSize(size) {
    if (size < min) {
        size = min;
    }
    if (size > max) {
        size = max;
    }
    if (size == 16){
        jQuery('html').removeAttr("style");
        return false
    }
    jQuery('html').css({'font-size': parseInt(size) + 'px'});
    jQuery('.accordion li a, table td, .verticalMenu li a, .copyright').css({'font-size': parseInt(size) + 2 + 'px'});
    jQuery('.main-news h1').css({'font-size': parseInt(size) + 4 + 'px'});
    jQuery('.link_list a, .expmenu li a, .main-news p a').css({'font-size': parseInt(size) - 2 + 'px'});
    jQuery('.smallText, .caption, .minif').css({'font-size': parseInt(size) - 4 + 'px'});

    jQuery('.fontChangeable, .panel-classic .panel-heading, .menu li a, .breadcrumbs li, .classicGridViewListtext, .selectArea, .selectArea li a, .list .listItem').css({'font-size': size + 'px'});

    if (size > max - 7) {
        jQuery('.news-container .main-news').hide();
        jQuery('.news-container .listData').removeClass('col-md-6').addClass('col-md-12');
    } else {
        jQuery('.news-container .main-news').show();
        jQuery('.news-container .listData').removeClass('col-md-12').addClass('col-md-6');
    }
}

function saveFontSize(size) {
    jQuery.cookie("fontSize", size, {path: '/'});
}
function changeSliderText(sliderId, value) {
    var position = Math.round(Math.abs((value - min) * (100 / (max - min))));
    jQuery('.fontRange').text(position);
}

function setNarrator() {
    // jQuery('head').append(jQuery('<script type="text/javascript"><\/script>').attr('src', '/wp-content/themes/crit-site/assets/js/narrator.js'));
    if(window.speechSynthesis == undefined){
        alert('Чтение речи не поддерживается в данном браузере');
        return
    }
    narrator.init();
    jQuery('#speechToggle').html('<i class="fas fa-volume-mute"></i>');
    jQuery('#speechToggle').addClass('active');
    jQuery.cookie("narrator", 'on', {path: '/'});
    if (typeof(jQuery.cookie("speechVolume")) == 'undefined') {
        jQuery("#speechVolume").slider('value', 500);
        jQuery('#speechOptions .sliderText .range').text(100);
    } else {
        var speechVolume = jQuery.cookie("speechVolume");
        jQuery("#speechVolume").slider('value', speechVolume);
        jQuery('#speechOptions .sliderText .range').text(speechVolume);
    }
}

function unsetNarrator() {
    jQuery.cookie("narrator", null, { path: '/' });
    jQuery('#speech').remove();
    jQuery('#speechToggle').removeClass('active');
    jQuery('#speechToggle').html('<i class="fas fa-volume-up"></i>');
    responsiveVoice.cancel();
    // removeJsCssFile('narrator.js', 'js');
}

function saveSpeechVolume(val) {
    if (val > 100 || val < 25) {
        val = 100;
    }
    narrator.setVolume(val);
    jQuery.cookie("speechVolume", val, {path: '/'});
}

jQuery(document).ready((function () {
    var appearance = jQuery.cookie("specialView");
    switch (appearance) {
        case 'blackAndWhite':
            makeBlackAndWhite();
            break;
        case 'blackAndWhiteInvert':
            makeBlackAndWhiteDark();
            break;
    }
    var noimage = jQuery.cookie("specialViewImage");
    switch (noimage) {
        case 'noImage':
            makeNoImage();
            break;
        case 'setImage':
            makeSetImage();
            break;
    }

    jQuery('.no-propagation').click((function (e) {

        e.stopPropagation();

    }));

    jQuery('#mode-default').click((function () {
        makeNormal();
    }));
    jQuery('#mode-whiteBlack').click((function () {
        makeBlackAndWhite();

    }));
    jQuery('#mode-dark').click((function () {
        makeBlackAndWhiteDark();
    }));

    jQuery('#mode-noimage').click((function () {
        offImages();
    }));


    jQuery('#speechSwitcher').change((function () {
        if (this.checked) {
            var narratorStatus = jQuery.cookie("narrator");
            jQuery('#speechOptions').slideDown(100);
            setNarrator();
            if (narratorStatus != 'on')
                narrator.speak(jQuery(this).attr('title'));
            jQuery(this).addClass('active')
            jQuery(".speech").stop().animate({opacity:1}, "fast").addClass('speechHover');
        } else {
            jQuery('#speechOptions').slideUp(100);
            unsetNarrator();
            jQuery(this).removeClass('active')
            jQuery(".speech").stop().removeClass('speechHover');
        }
    }));

    var specVersion = false;
    jQuery('#speechToggle').on('click', (function(){
        if(!specVersion){
            var narratorStatus = jQuery.cookie("narrator");
//          jQuery('#speechOptions').slideDown(100);
            setNarrator();

            if (narratorStatus != 'on')
                narrator.speak(jQuery(this).attr('title'));
            jQuery(".speech").stop().animate({opacity:1}, "fast").addClass('speechHover');
            specVersion = true;
        } else {
//    		jQuery('#speechOptions').slideUp(100);
            unsetNarrator();

            jQuery(".speech").stop().removeClass('speechHover');
            specVersion = false;
        }
    }))

    jQuery('#speechVersionToggle').on('click', (function(){
        jQuery(this).parent().toggleClass('active');
        jQuery(this).toggleClass('active');
    }))

    jQuery('#fontSizer').slider({
        min: min,
        max: max,
        range: "min",
        slide: function (event, ui) {
            setFontSize(ui.value);
            changeSliderText('fontSizer', ui.value);
        },
        change: function (event, ui) {
            saveFontSize(ui.value);
        }
    });

//    jQuery('.special-fixed-container').click(function(){
//    	jQuery(this).toggleClass('active')
//    })

    jQuery('#speechVolume').slider({
        min: 25,
        max: 100,
        range: "min",
        slide: function (event, ui) {
            jQuery('#speechVolume').prev('.sliderText').children('.range').text(ui.value);
        },
        change: function (event, ui) {
            saveSpeechVolume(ui.value);
        }
    });

    var fontSize = jQuery.cookie("fontSize");
    if (typeof(fontSize) != 'undefined') {
        jQuery("#fontSizer").slider('value', fontSize);
        setFontSize(fontSize);
        changeSliderText('fontSizer', fontSize);
    }

    Mousetrap.bind(['shift+return'], (function() {
        jQuery('#speechSwitcher').prop('checked', !jQuery('#speechSwitcher').prop('checked'));
        jQuery('#speechSwitcher').trigger('change');
        return false;
    }));

    if (jQuery.cookie("narrator") == 'on' && typeof(jQuery.cookie("narrator")) != 'undefined'){
        jQuery('#speechSwitcher').prop('checked', true);
        jQuery('#speechToggle').trigger('click');
        var speechVolume = jQuery.cookie("speechVolume");
        if (typeof(speechVolume) != 'undefined') {
            jQuery("#speechVolume").slider('value', speechVolume);
            jQuery('#speechOptions .sliderText .range').text(speechVolume);
        }
        if (typeof(speechNotification) != 'undefined'){
            narrator.speak(speechNotification);
        }

        Mousetrap.bind(['ctrl+shift'], (function() {
            narrator.stop();
            jQuery('#speechArea').removeClass('narratorBox');
            return false;
        }));

        Mousetrap.bind(['ctrl+alt'], (function() {
            if (typeof(jQuery('#speechArea')) != 'undefined'){
                jQuery('#speechArea').addClass('narratorBox');
                jQuery('#speechArea').append('<div class="loading"></div>');
                narrator.speak(jQuery('#speechArea').text());
            }
            return false;
        }));
        console.log('SPEC ON')
    } else {
        console.log('SPEC OF')
    }
}));
!(function(e,t,o,n){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sticky=function(i){var s,r=e(this),c=r.selector||"",l=(new Date).getTime(),a=[],f=arguments[0],m="string"==typeof f,u=[].slice.call(arguments,1);return r.each((function(){var r,d,h,g,p,b=e.isPlainObject(i)?e.extend(!0,{},e.fn.sticky.settings,i):e.extend({},e.fn.sticky.settings),v=b.className,x=b.namespace,C=b.error,S="."+x,y="module-"+x,k=e(this),z=e(t),T=e(b.scrollContext),w=(k.selector,k.data(y)),B=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},P=this;p={initialize:function(){p.determineContainer(),p.determineContext(),p.verbose("Initializing sticky",b,r),p.save.positions(),p.checkErrors(),p.bind.events(),b.observeChanges&&p.observeChanges(),p.instantiate()},instantiate:function(){p.verbose("Storing instance of module",p),w=p,k.data(y,p)},destroy:function(){p.verbose("Destroying previous instance"),p.reset(),h&&h.disconnect(),g&&g.disconnect(),z.off("load"+S,p.event.load).off("resize"+S,p.event.resize),T.off("scrollchange"+S,p.event.scrollchange),k.removeData(y)},observeChanges:function(){"MutationObserver"in t&&(h=new MutationObserver(p.event.documentChanged),g=new MutationObserver(p.event.changed),h.observe(o,{childList:!0,subtree:!0}),g.observe(P,{childList:!0,subtree:!0}),g.observe(d[0],{childList:!0,subtree:!0}),p.debug("Setting up mutation observer",g))},determineContainer:function(){r=b.container?e(b.container):k.offsetParent()},determineContext:function(){0!==(d=b.context?e(b.context):r).length||p.error(C.invalidContext,b.context,k)},checkErrors:function(){if(p.is.hidden()&&p.error(C.visible,k),p.cache.element.height>p.cache.context.height)return p.reset(),void p.error(C.elementSize,k)},bind:{events:function(){z.on("load"+S,p.event.load).on("resize"+S,p.event.resize),T.off("scroll"+S).on("scroll"+S,p.event.scroll).on("scrollchange"+S,p.event.scrollchange)}},event:{changed:function(e){clearTimeout(p.timer),p.timer=setTimeout((function(){p.verbose("DOM tree modified, updating sticky menu",e),p.refresh()}),100)},documentChanged:function(t){[].forEach.call(t,(function(t){t.removedNodes&&[].forEach.call(t.removedNodes,(function(t){(t==P||e(t).find(P).length>0)&&(p.debug("Element removed from DOM, tearing down events"),p.destroy())}))}))},load:function(){p.verbose("Page contents finished loading"),B(p.refresh)},resize:function(){p.verbose("Window resized"),B(p.refresh)},scroll:function(){B((function(){T.triggerHandler("scrollchange"+S,T.scrollTop())}))},scrollchange:function(e,t){p.stick(t),b.onScroll.call(P)}},refresh:function(e){p.reset(),b.context||p.determineContext(),e&&p.determineContainer(),p.save.positions(),p.stick(),b.onReposition.call(P)},supports:{sticky:function(){var t=e("<div/>");t[0];return t.addClass(v.supported),t.css("position").match("sticky")}},save:{lastScroll:function(e){p.lastScroll=e},elementScroll:function(e){p.elementScroll=e},positions:function(){var e={height:T.height()},t={margin:{top:parseInt(k.css("margin-top"),10),bottom:parseInt(k.css("margin-bottom"),10)},offset:k.offset(),width:k.outerWidth(),height:k.outerHeight()},o={offset:d.offset(),height:d.outerHeight()};r.outerHeight();p.is.standardScroll()||(p.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=T.scrollTop(),e.left=T.scrollLeft(),t.offset.top+=e.top,o.offset.top+=e.top,t.offset.left+=e.left,o.offset.left+=e.left),p.cache={fits:t.height+b.offset<=e.height,sameHeight:t.height==o.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:o.offset.top,height:o.height,bottom:o.offset.top+o.height}},p.set.containerSize(),p.stick(),p.debug("Caching element positions",p.cache)}},get:{direction:function(e){var t="down";return e=e||T.scrollTop(),p.lastScroll!==n&&(p.lastScroll<e?t="down":p.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||T.scrollTop(),p.lastScroll?e-p.lastScroll:0},currentElementScroll:function(){return p.elementScroll?p.elementScroll:p.is.top()?Math.abs(parseInt(k.css("top"),10))||0:Math.abs(parseInt(k.css("bottom"),10))||0},elementScroll:function(e){e=e||T.scrollTop();var t=p.cache.element,o=p.cache.scrollContext,n=p.get.scrollChange(e),i=t.height-o.height+b.offset,s=p.get.currentElementScroll(),r=s+n;return s=p.cache.fits||r<0?0:r>i?i:r}},remove:{lastScroll:function(){delete p.lastScroll},elementScroll:function(e){delete p.elementScroll},minimumSize:function(){r.css("min-height","")},offset:function(){k.css("margin-top","")}},set:{offset:function(){p.verbose("Setting offset on element",b.offset),k.css("margin-top",b.offset)},containerSize:function(){var e=r.get(0).tagName;"HTML"===e||"body"==e?p.determineContainer():Math.abs(r.outerHeight()-p.cache.context.height)>b.jitter&&(p.debug("Context has padding, specifying exact height for container",p.cache.context.height),r.css({height:p.cache.context.height}))},minimumSize:function(){var e=p.cache.element;r.css("min-height",e.height)},scroll:function(e){p.debug("Setting scroll on element",e),p.elementScroll!=e&&(p.is.top()&&k.css("bottom","").css("top",-e),p.is.bottom()&&k.css("top","").css("bottom",e))},size:function(){0!==p.cache.element.height&&0!==p.cache.element.width&&(P.style.setProperty("width",p.cache.element.width+"px","important"),P.style.setProperty("height",p.cache.element.height+"px","important"))}},is:{standardScroll:function(){return T[0]==t},top:function(){return k.hasClass(v.top)},bottom:function(){return k.hasClass(v.bottom)},initialPosition:function(){return!p.is.fixed()&&!p.is.bound()},hidden:function(){return!k.is(":visible")},bound:function(){return k.hasClass(v.bound)},fixed:function(){return k.hasClass(v.fixed)}},stick:function(e){var t=e||T.scrollTop(),o=p.cache,n=o.fits,i=o.sameHeight,s=o.element,r=o.scrollContext,c=o.context,l=p.is.bottom()&&b.pushing?b.bottomOffset:b.offset,a=(e={top:t+l,bottom:t+l+r.height},p.get.direction(e.top),n?0:p.get.elementScroll(e.top)),f=!n;0!==s.height&&!i&&(p.is.initialPosition()?e.top>=c.bottom?(p.debug("Initial element position is bottom of container"),p.bindBottom()):e.top>s.top&&(s.height+e.top-a>=c.bottom?(p.debug("Initial element position is bottom of container"),p.bindBottom()):(p.debug("Initial element position is fixed"),p.fixTop())):p.is.fixed()?p.is.top()?e.top<=s.top?(p.debug("Fixed element reached top of container"),p.setInitialPosition()):s.height+e.top-a>=c.bottom?(p.debug("Fixed element reached bottom of container"),p.bindBottom()):f&&(p.set.scroll(a),p.save.lastScroll(e.top),p.save.elementScroll(a)):p.is.bottom()&&(e.bottom-s.height<=s.top?(p.debug("Bottom fixed rail has reached top of container"),p.setInitialPosition()):e.bottom>=c.bottom?(p.debug("Bottom fixed rail has reached bottom of container"),p.bindBottom()):f&&(p.set.scroll(a),p.save.lastScroll(e.top),p.save.elementScroll(a))):p.is.bottom()&&(e.top<=s.top?(p.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),p.setInitialPosition()):b.pushing?p.is.bound()&&e.bottom<=c.bottom&&(p.debug("Fixing bottom attached element to bottom of browser."),p.fixBottom()):p.is.bound()&&e.top<=c.bottom-s.height&&(p.debug("Fixing bottom attached element to top of browser."),p.fixTop())))},bindTop:function(){p.debug("Binding element to top of parent container"),p.remove.offset(),k.css({left:"",top:"",marginBottom:""}).removeClass(v.fixed).removeClass(v.bottom).addClass(v.bound).addClass(v.top),b.onTop.call(P),b.onUnstick.call(P)},bindBottom:function(){p.debug("Binding element to bottom of parent container"),p.remove.offset(),k.css({left:"",top:""}).removeClass(v.fixed).removeClass(v.top).addClass(v.bound).addClass(v.bottom),b.onBottom.call(P),b.onUnstick.call(P)},setInitialPosition:function(){p.debug("Returning to initial position"),p.unfix(),p.unbind()},fixTop:function(){p.debug("Fixing element to top of page"),b.setSize&&p.set.size(),p.set.minimumSize(),p.set.offset(),k.css({left:p.cache.element.left,bottom:"",marginBottom:""}).removeClass(v.bound).removeClass(v.bottom).addClass(v.fixed).addClass(v.top),b.onStick.call(P)},fixBottom:function(){p.debug("Sticking element to bottom of page"),b.setSize&&p.set.size(),p.set.minimumSize(),p.set.offset(),k.css({left:p.cache.element.left,bottom:"",marginBottom:""}).removeClass(v.bound).removeClass(v.top).addClass(v.fixed).addClass(v.bottom),b.onStick.call(P)},unbind:function(){p.is.bound()&&(p.debug("Removing container bound position on element"),p.remove.offset(),k.removeClass(v.bound).removeClass(v.top).removeClass(v.bottom))},unfix:function(){p.is.fixed()&&(p.debug("Removing fixed position on element"),p.remove.minimumSize(),p.remove.offset(),k.removeClass(v.fixed).removeClass(v.top).removeClass(v.bottom),b.onUnstick.call(P))},reset:function(){p.debug("Resetting elements position"),p.unbind(),p.unfix(),p.resetCSS(),p.remove.offset(),p.remove.lastScroll()},resetCSS:function(){k.css({width:"",height:""}),r.css({height:""})},setting:function(t,o){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(o===n)return b[t];b[t]=o}},internal:function(t,o){if(e.isPlainObject(t))e.extend(!0,p,t);else{if(o===n)return p[t];p[t]=o}},debug:function(){!b.silent&&b.debug&&(b.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,b.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!b.silent&&b.verbose&&b.debug&&(b.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,b.name+":"),p.verbose.apply(console,arguments)))},error:function(){b.silent||(p.error=Function.prototype.bind.call(console.error,console,b.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,o;b.performance&&(o=(t=(new Date).getTime())-(l||t),l=t,a.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:P,"Execution Time":o})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,0)},display:function(){var t=b.name+":",o=0;l=!1,clearTimeout(p.performance.timer),e.each(a,(function(e,t){o+=t["Execution Time"]})),t+=" "+o+"ms",c&&(t+=" '"+c+"'"),(console.group!==n||console.table!==n)&&a.length>0&&(console.groupCollapsed(t),console.table?console.table(a):e.each(a,(function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")})),console.groupEnd()),a=[]}},invoke:function(t,o,i){var r,c,l,a=w;return o=o||u,i=P||i,"string"==typeof t&&a!==n&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,(function(o,i){var s=o!=r?i+t[o+1].charAt(0).toUpperCase()+t[o+1].slice(1):t;if(e.isPlainObject(a[s])&&o!=r)a=a[s];else{if(a[s]!==n)return c=a[s],!1;if(!e.isPlainObject(a[i])||o==r)return a[i]!==n&&(c=a[i],!1);a=a[i]}}))),e.isFunction(c)?l=c.apply(i,o):c!==n&&(l=c),e.isArray(s)?s.push(l):s!==n?s=[s,l]:l!==n&&(s=l),c}},m?(w===n&&p.initialize(),p.invoke(f)):(w!==n&&w.invoke("destroy"),p.initialize())})),s!==n?s:this},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}})(jQuery,window,document);
/*!
 * Validator v0.11.5 for Bootstrap 3, by @1000hz
 * Copyright 2016 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+(function(a){"use strict";function b(b){return b.is('[type="checkbox"]')?b.prop("checked"):b.is('[type="radio"]')?!!a('[name="'+b.attr("name")+'"]:checked').length:b.val()}function c(b){return this.each((function(){var c=a(this),e=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b),f=c.data("bs.validator");(f||"destroy"!=b)&&(f||c.data("bs.validator",f=new d(this,e)),"string"==typeof b&&f[b]())}))}var d=function(c,e){this.options=e,this.validators=a.extend({},d.VALIDATORS,e.custom),this.$element=a(c),this.$btn=a('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),this.update(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",a.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",a.proxy(this.onSubmit,this)),this.$element.on("reset.bs.validator",a.proxy(this.reset,this)),this.$element.find("[data-match]").each((function(){var c=a(this),d=c.data("match");a(d).on("input.bs.validator",(function(){b(c)&&c.trigger("input.bs.validator")}))})),this.$inputs.filter((function(){return b(a(this))})).trigger("focusout"),this.$element.attr("novalidate",!0),this.toggleSubmit()};d.VERSION="0.11.5",d.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)',d.FOCUS_OFFSET=20,d.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},d.VALIDATORS={"native":function(a){var b=a[0];return b.checkValidity?!b.checkValidity()&&!b.validity.valid&&(b.validationMessage||"error!"):void 0},match:function(b){var c=b.data("match");return b.val()!==a(c).val()&&d.DEFAULTS.errors.match},minlength:function(a){var b=a.data("minlength");return a.val().length<b&&d.DEFAULTS.errors.minlength}},d.prototype.update=function(){return this.$inputs=this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')),this},d.prototype.onInput=function(b){var c=this,d=a(b.target),e="focusout"!==b.type;this.$inputs.is(d)&&this.validateInput(d,e).done((function(){c.toggleSubmit()}))},d.prototype.validateInput=function(c,d){var e=(b(c),c.data("bs.validator.errors"));c.is('[type="radio"]')&&(c=this.$element.find('input[name="'+c.attr("name")+'"]'));var f=a.Event("validate.bs.validator",{relatedTarget:c[0]});if(this.$element.trigger(f),!f.isDefaultPrevented()){var g=this;return this.runValidators(c).done((function(b){c.data("bs.validator.errors",b),b.length?d?g.defer(c,g.showErrors):g.showErrors(c):g.clearErrors(c),e&&b.toString()===e.toString()||(f=b.length?a.Event("invalid.bs.validator",{relatedTarget:c[0],detail:b}):a.Event("valid.bs.validator",{relatedTarget:c[0],detail:e}),g.$element.trigger(f)),g.toggleSubmit(),g.$element.trigger(a.Event("validated.bs.validator",{relatedTarget:c[0]}))}))}},d.prototype.runValidators=function(c){function d(a){return c.data(a+"-error")}function e(){var a=c[0].validity;return a.typeMismatch?c.data("type-error"):a.patternMismatch?c.data("pattern-error"):a.stepMismatch?c.data("step-error"):a.rangeOverflow?c.data("max-error"):a.rangeUnderflow?c.data("min-error"):a.valueMissing?c.data("required-error"):null}function f(){return c.data("error")}function g(a){return d(a)||e()||f()}var h=[],i=a.Deferred();return c.data("bs.validator.deferred")&&c.data("bs.validator.deferred").reject(),c.data("bs.validator.deferred",i),a.each(this.validators,a.proxy((function(a,d){var e=null;(b(c)||c.attr("required"))&&(c.data(a)||"native"==a)&&(e=d.call(this,c))&&(e=g(a)||e,!~h.indexOf(e)&&h.push(e))}),this)),!h.length&&b(c)&&c.data("remote")?this.defer(c,(function(){var d={};d[c.attr("name")]=b(c),a.get(c.data("remote"),d).fail((function(a,b,c){h.push(g("remote")||c)})).always((function(){i.resolve(h)}))})):i.resolve(h),i.promise()},d.prototype.validate=function(){var b=this;return a.when(this.$inputs.map((function(){return b.validateInput(a(this),!1)}))).then((function(){b.toggleSubmit(),b.focusError()})),this},d.prototype.focusError=function(){if(this.options.focus){var b=a(".has-error:first :input");0!==b.length&&(a("html, body").animate({scrollTop:b.offset().top-d.FOCUS_OFFSET},250),b.focus())}},d.prototype.showErrors=function(b){var c=this.options.html?"html":"text",d=b.data("bs.validator.errors"),e=b.closest(".form-group"),f=e.find(".help-block.with-errors"),g=e.find(".form-control-feedback");d.length&&(d=a("<ul/>").addClass("list-unstyled").append(a.map(d,(function(b){return a("<li/>")[c](b)}))),void 0===f.data("bs.validator.originalContent")&&f.data("bs.validator.originalContent",f.html()),f.empty().append(d),e.addClass("has-error has-danger"),e.hasClass("has-feedback")&&g.removeClass(this.options.feedback.success)&&g.addClass(this.options.feedback.error)&&e.removeClass("has-success"))},d.prototype.clearErrors=function(a){var c=a.closest(".form-group"),d=c.find(".help-block.with-errors"),e=c.find(".form-control-feedback");d.html(d.data("bs.validator.originalContent")),c.removeClass("has-error has-danger has-success"),c.hasClass("has-feedback")&&e.removeClass(this.options.feedback.error)&&e.removeClass(this.options.feedback.success)&&b(a)&&e.addClass(this.options.feedback.success)&&c.addClass("has-success")},d.prototype.hasErrors=function(){function b(){return!!(a(this).data("bs.validator.errors")||[]).length}return!!this.$inputs.filter(b).length},d.prototype.isIncomplete=function(){function c(){var c=b(a(this));return!("string"==typeof c?a.trim(c):c)}return!!this.$inputs.filter("[required]").filter(c).length},d.prototype.onSubmit=function(a){this.validate(),(this.isIncomplete()||this.hasErrors())&&a.preventDefault()},d.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},d.prototype.defer=function(b,c){return c=a.proxy(c,this,b),this.options.delay?(window.clearTimeout(b.data("bs.validator.timeout")),void b.data("bs.validator.timeout",window.setTimeout(c,this.options.delay))):c()},d.prototype.reset=function(){return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each((function(){var b=a(this),c=b.data("bs.validator.timeout");window.clearTimeout(c)&&b.removeData("bs.validator.timeout")})),this.$element.find(".help-block.with-errors").each((function(){var b=a(this),c=b.data("bs.validator.originalContent");b.removeData("bs.validator.originalContent").html(c)})),this.$btn.removeClass("disabled"),this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),this},d.prototype.destroy=function(){return this.reset(),this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$inputs.off(".bs.validator"),this.options=null,this.validators=null,this.$element=null,this.$btn=null,this};var e=a.fn.validator;a.fn.validator=c,a.fn.validator.Constructor=d,a.fn.validator.noConflict=function(){return a.fn.validator=e,this},a(window).on("load",(function(){a('form[data-toggle="validator"]').each((function(){var b=a(this);c.call(b,b.data())}))}))})(jQuery);