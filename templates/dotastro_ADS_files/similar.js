define(["js/widgets/list_of_things/details_widget"],function(t){var e=t.extend({initialize:function(){return this.name="ShowSimilar",t.prototype.initialize.apply(this,arguments)},ingestBroadcastedPayload:function(e){var i=e.abstract;this.trigger("page-manager-event","widget-ready",{numFound:i?1:0,isActive:!!i}),t.prototype.ingestBroadcastedPayload.apply(this,arguments)}});return function(){return new e({queryOperator:"similar",description:"Papers similar to",operator:!0,sortOrder:"score desc"})}});