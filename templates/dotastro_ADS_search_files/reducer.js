function _typeof(r){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function ownKeys(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function _defineProperty(r,e,t){return(e=_toPropertyKey(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _toPropertyKey(r){var e=_toPrimitive(r,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(r,e){if("object"!==_typeof(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var o=t.call(r,e||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function _iterableToArrayLimit(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var o,n,a,i,l=[],u=!0,y=!1;try{if(a=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;u=!1}else for(;!(u=(o=a.call(t)).done)&&(l.push(o.value),l.length!==e);u=!0);}catch(r){y=!0,n=r}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(y)throw n}}return l}}function _arrayWithHoles(r){if(Array.isArray(r))return r}define(["redux","./actions"],function(r,e){var t=r.combineReducers,o=e.SET_DOCS,n=e.SET_QUERY,a=e.SET_TAB,i=e.SET_ORACLE_TARGET,l=e.SET_QUERY_PARAMS,u=e.UPDATE_USERNAME,y={GET_RECOMMENDATIONS:{status:null,result:null,error:null},GET_DOCS:{status:null,result:null,error:null}},c=[],p={function:"similar",sort:"entry_date",numDocs:5,cutoffDays:5,topNReads:10},f=null;return t({requests:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;if(/_API_REQUEST_/.test(e.type)){var t=_slicedToArray(e.type.split("_API_REQUEST_"),2),o=t[0],n=t[1],a=e.result,i=void 0===a?null:a,l=e.error,u=void 0===l?null:l;return _objectSpread(_objectSpread({},r),{},_defineProperty({},o,{status:n.toLowerCase(),result:i,error:u}))}if(/_RESET$/.test(e.type)){var c=e.type.replace("_RESET","");return _objectSpread(_objectSpread({},r),{},_defineProperty({},c,y[c]))}return r},docs:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;return e.type===o?e.payload.map(function(r){return _objectSpread(_objectSpread({},r),{},{title:r.title[0],totalAuthors:r.author_count})}):r},query:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;return e.type===n&&e.payload?e.payload:r},tab:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1?arguments[1]:void 0;return e.type===a&&e.payload?e.payload:r},oracleTarget:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"oracle/readhist",e=arguments.length>1?arguments[1]:void 0;return e.type===i&&e.payload?e.payload:r},queryParams:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;return e.type===l&&e.payload?_objectSpread(_objectSpread({},r),e.payload):r},userName:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;return e.type===u&&(f=e.payload),r}})});