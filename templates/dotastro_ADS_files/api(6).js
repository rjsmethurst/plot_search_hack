define(["underscore","../modules/api","../modules/ui"],function(t,e,n){var r=e.actions,i=r.RECEIVED_RESPONSE,u=r.SEND_ANALYTICS,c=r.FALLBACK_ON_ERROR,a=n.actions,o=a.SET_LOADING,l=a.SET_HAS_ERROR,d=a.SET_ITEMS,f=function(e,n){return t.map(e,function(e){var r=function(t){try{return t.indexOf("http")>=0?decodeURIComponent(t):decodeURIComponent(t.slice(t.indexOf(":")+1)).replace(/^\//,"#")}catch(e){return t}}(e.url);return{rawUrl:e.url,url:r,circular:r.indexOf(n,r.indexOf(":"))>-1,external:r.indexOf("http")>-1,name:e.title,id:t.uniqueId()}})};return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){return n.map(function(n){return t.partial(n,e)})}}(function(e,n){var r=n.dispatch,u=n.getState;return function(e){return function(n){if(e(n),n.type===i){var c=n.result,a=u().api.bibcode;if(t.isPlainObject(c)){var s=c.links&&c.links.records;t.isArray(s)&&s.length>0?(r({type:o,result:!1}),r({type:d,result:f(s,a)})):r({type:l,result:"did not receive docs"})}else r({type:l,result:"did not receive docs"})}}}},function(t,e){e.dispatch,e.getState;return function(e){return function(n){e(n),n.type===u&&t.emitAnalytics(n.result)}}},function(e,n){var r=n.dispatch,i=n.getState;return function(e){return function(n){if(e(n),n.type===c){var u=i().api.bibcode,a=i().ui.items;t.isArray(a)&&a.length>0&&r({type:d,result:f(a.map(function(t){return{url:t.rawUrl,title:t.name}}),u)})}}}})});