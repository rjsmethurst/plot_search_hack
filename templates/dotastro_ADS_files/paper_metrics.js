define(["js/widgets/metrics/widget","js/components/api_feedback"],function(e,i){return e.extend({initialize:function(i){var t=function(e,i){"broadcast-payload"===e&&(this.payload=i,this.canLoad&&this.ingestBroadcastedPayload(this.payload),this.canLoad=!1),"widget-selected"!==e||"ShowMetrics"!==i.idAttribute||this.canLoad||(this.canLoad=!0,this.payload&&this.ingestBroadcastedPayload(this.payload))};this.on("page-manager-message",t),this.on("page-manager-event",t),e.prototype.initialize.apply(this,arguments)},ingestBroadcastedPayload:function(e){if(this._bibcode!==e.bibcode){this._bibcode=e.bibcode;var i=this;this.containerModel.set("title",e.title),this.getMetrics([this._bibcode]).done(function(){i._closed=!1,i.trigger("page-manager-event","widget-ready",{isActive:!0,widget:i}),i._waiting&&(i.onShow(),i._waiting=!1)}).fail(function(){i._closed=!0,i.trigger("page-manager-event","widget-ready",{isActive:!1,widget:i,shouldReset:!0})})}},onShow:function(){var e=this.containerModel.get("data");e?(this.createTableViews(e,1),this.createGraphViewsForOnePaper(e),this.insertViewsForOnePaper(e)):this._waiting=!0}})});