define(["js/widgets/list_of_things/details_widget"],function(t){var i=t.extend({initialize:function(){return this.name="ShowCitations",t.prototype.initialize.apply(this,arguments)},ingestBroadcastedPayload:function(i){var e=_.isNumber(i.citation_count)?i.citation_count:0;this.trigger("page-manager-event","widget-ready",{numFound:e,isActive:e>0}),t.prototype.ingestBroadcastedPayload.apply(this,arguments)}});return function(){return new i({queryOperator:"citations",sortOrder:"date desc",description:"Papers that cite",operator:!0})}});