function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}define([],function(){var e={responseJSON:{error:"Server-side issue occurred"}};return{request:function(t,r){var o=t.trigger,n=r.dispatch;return function(t){return function(r){if(t(r),"API_REQUEST"===r.type&&r.scope){var i=r.options,c=i.target,p=i.query,u=void 0===p?{}:p,s=i.type,y=void 0===s?"GET":s,f=i.data,a=i.headers;if(!c)return;n({type:"".concat(r.scope,"_API_REQUEST_PENDING")}),o("sendRequest",{target:c,query:u,options:{type:y,done:function(e){n({type:"".concat(r.scope,"_API_REQUEST_SUCCESS"),result:e})},fail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=t.responseJSON,i=t.statusText,c=e.responseJSON.error;o?c=o.error||o.message||o.msg:i&&(c=i),n({type:"".concat(r.scope,"_API_REQUEST_FAILURE"),error:c,result:o})},data:JSON.stringify(f),headers:_objectSpread({Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8"},a)}})}}}}}});