require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({3:[function(require,module,exports) {
"use strict";function e(){var e=$(".pswp")[0],t=[];$(".picture").each(function(){var i=$(this),n=function(){var e=[];return i.find("a").each(function(){var t=$(this).attr("href"),i=$(this).data("size").split("x"),n={src:t,w:i[0],h:i[1]};e.push(n)}),e}();$.each(n,function(e,i){t[e]=new Image,t[e].src=i.src}),i.on("click","figure",function(t){t.preventDefault();var i=$(this).index();new PhotoSwipe(e,PhotoSwipeUI_Default,n,{index:i,bgOpacity:.7,showHideOpacity:!0}).init()})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],2:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var d=require("./comic"),o=e(d);function e(d){return d&&d.__esModule?d:{default:d}}function s(){$(document).ready(function(){var d=$(window),e=d.height()/d.width(),s=$("#top-bar"),l=$("#top-bar-logo"),a=$("#left-bar-logo"),i=e>1.2?150:800;$(window).resize(function(){e=d.height()/d.width(),i=e>1.2?150:800}),$(window).scroll(function(){$(window).scrollTop()>=i?(l.hasClass("logo-hidden")||l.addClass("logo-hidden"),a.hasClass("logo-hidden")&&a.removeClass("logo-hidden"),s.hasClass("hidden")&&s.removeClass("hidden")):(l.hasClass("logo-hidden")&&l.removeClass("logo-hidden"),a.hasClass("logo-hidden")||a.addClass("logo-hidden"),s.hasClass("hidden")||s.addClass("hidden"))}),(0,o.default)()})}
},{"./comic":3}],1:[function(require,module,exports) {
"use strict";var e=require("./main"),u=r(e);function r(e){return e&&e.__esModule?e:{default:e}}(0,u.default)();
},{"./main":2}]},{},[1])