define(["js/widgets/list_of_things/details_widget"],function(e){var t=e.extend({initialize:function(){return this.name="ShowCoreads",e.prototype.initialize.apply(this,arguments)},ingestBroadcastedPayload:function(t){var r=_.isNumber(t.read_count)?t.read_count:0;this.trigger("page-manager-event","widget-ready",{numFound:r,isActive:r>0}),e.prototype.ingestBroadcastedPayload.apply(this,arguments)}});return function(){return new t({queryOperator:"trending",description:"Papers also read by those who read",operator:!0,sortOrder:"score desc",removeSelf:!0})}});