function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _iterableToArrayLimit(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=i.call(t)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(e){var r=_toPrimitive(e,"string");return"symbol"===_typeof(r)?r:String(r)}function _toPrimitive(e,r){if("object"!==_typeof(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}define([],function(){return{withContext:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){var t=r.reduce(function(e,r){return _objectSpread(_objectSpread({},e),r)},{});return Object.keys(t).map(function(r){return t[r].bind(null,e)})}},escape:function(e){return e.replace(/(['"])/g,"\\$1")},unescape:function(e){return e.replace(/\\(["'])/g,"$1")},middleware:function(e){return function(r,t){var n=r.trigger,o=t.dispatch,i=t.getState;return function(r){return function(t){return e({trigger:n,dispatch:o,getState:i,next:r,action:t})}}}},isEmpty:function(e){return!("string"==typeof e&&e.length>0)},apiSuccess:_.memoize(function(e){return"".concat(e,"_API_REQUEST_SUCCESS")}),apiPending:_.memoize(function(e){return"".concat(e,"_API_REQUEST_PENDING")}),apiFailure:_.memoize(function(e){return"".concat(e,"_API_REQUEST_FAILURE")}),parseScope:function(e){var r=_slicedToArray(e.split("_API_REQUEST_"),2);return{scope:r[0],status:r[1]}},delay:function(e){e.toKey&&window.clearTimeout(e.toKey),e.toKey=setTimeout(e,3e3)}}});