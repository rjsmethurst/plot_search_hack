define(["marionette","js/widgets/base/base_widget","js/components/api_request","js/components/api_response","js/components/api_query","hbs!js/widgets/graphics/templates/grid","hbs!js/widgets/graphics/templates/sidebar","js/components/api_targets","analytics"],function(e,t,i,s,r,n,a,o,d){var c=Backbone.Model.extend({defaults:function(){return{graphics:void 0,title:void 0,linkSentence:void 0}}}),h=e.ItemView.extend({template:n,className:"s-graphics-grid",events:{"click .graphics-external-link":"fireAnalyticsEvent"},modelEvents:{change:"render"},fireAnalyticsEvent:function(e){d("send","event","interaction","graphics-link-followed",e.currentTarget.href,{transport:"beacon"})}}),l=e.ItemView.extend({template:a,className:"s-graphics-sidebar graphics-sidebar",modelEvents:{"change:graphics":"render"},triggers:{"click .graphics-container":"showGraphicsGrid"},serializeData:function(){var e=this.model.toJSON().graphics;return e?{sampleGraphic:e[_.keys(e)[0]].thumbnail}:{sampleGraphic:void 0}}});return t.extend({initialize:function(e){e=e||{},this.model=new c,this.view=!0===e.sidebar?new l({model:this.model}):new h({model:this.model}),t.prototype.initialize.apply(this,arguments)},activate:function(e){this.setBeeHive(e);var t=this.getPubSub();_.bindAll(this,["processResponse","onDisplayDocuments"]),t.subscribe(t.DISPLAY_DOCUMENTS,this.onDisplayDocuments),t.subscribe(t.DELIVERING_RESPONSE,this.processResponse)},onDisplayDocuments:function(e){var t=this,i=this.parseIdentifierFromQuery(e);"null"!==i&&(this.loadBibcodeData(i).done(function(){t.trigger("page-manager-event","widget-ready",{isActive:!0,widget:t})}),this.getResponseDeferred().fail(function(){t.trigger("page-manager-event","widget-ready",{shouldReset:i!==this._bibcode,isActive:!1,widget:t}),this._bibcode=i}))},loadBibcodeData:function(t){if(t===this._bibcode)return this.deferredObject=$.Deferred(),this.deferredObject.resolve(this.model),this.deferredObject.promise();this._bibcode=t,this.deferredObject=$.Deferred();var s=new i({target:o.GRAPHICS+"/"+this._bibcode,query:new r});if(this.getPubSub().publish(this.getPubSub().DELIVERING_REQUEST,s),!e.getOption(this,"sidebar")){var n=this.getCurrentQuery().clone();n.unlock(),n.set("q","bibcode:"+t),n.set("fl","title");s=new i({target:o.SEARCH,query:n});this.getPubSub().publish(this.getPubSub().DELIVERING_REQUEST,s)}return this.deferredObject.promise()},getResponseDeferred:function(){return this._deferred&&"resolved"!==this._deferred.state()||(this._deferred=$.Deferred()),this._deferred},processResponse:function(e){if(e instanceof s){var t=e.get("response.docs[0]['title']",!1,"");t=t&&t.length?t[0]:"",this.model.set("title",t)}else{var i=this.getResponseDeferred();if(e.toJSON().Error){this.model.clear();var r=e.get("Error");return i.reject(r)}var n={};_.each(e.get("figures"),function(e){n[e.figure_label]=e.images[0],"interactive"===e.figure_type&&(n[e.figure_label].interactive=!0)},this),this.model.set({graphics:n,linkSentence:e.get("header")})}this.model.get("title")&&this.model.get("graphics")&&(this.deferredObject&&this.deferredObject.resolve(),i&&i.resolve())},viewEvents:{showGraphicsGrid:"triggerShowGrid"},triggerShowGrid:function(){this.getPubSub().publish(this.getPubSub().NAVIGATE,"ShowGraphics",{href:"#abs/"+encodeURIComponent(this._bibcode)+"/graphics",bibcode:this._bibcode})}})});