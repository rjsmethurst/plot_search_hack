define(["underscore","backbone","analytics","react","react-redux","react-dom","./redux/configure-store","./redux/modules/sort-app","js/components/api_query","js/widgets/base/base_widget","js/components/api_feedback","./containers/sort-container"],function(e,t,i,s,r,n,o,a,c,d,u,h){var S=t.View.extend({initialize:function(t){e.assign(this,t)},render:function(){return n.render(s.createElement(r.Provider,{store:this.store},s.createElement(h,null)),this.el),this},destroy:function(){n.unmountComponentAtNode(this.el)}});return d.extend({initialize:function(){this.store=o(this),this.view=new S({store:this.store}),this.onSortChange=e.debounce(this.onSortChange,500),this.handleFeedback=e.bind(this.handleFeedback,this)},activate:function(e){this.setBeeHive(e),this.activateWidget();var t=this.getPubSub();t.subscribe(t.FEEDBACK,this.handleFeedback)},onSortChange:function(){var t=this.getPubSub(),s=this.store.getState(),r=s.sort.id,n=s.direction,o=s.query,a=r+" "+n;if(e.isNull(o)&&(o=this.getBeeHive().getObject("AppStorage").getCurrentQuery()),!e.isUndefined(o.sort)&&!e.isEmpty(o.sort)){var d=o.sort[0].split(/,\s?/).slice(1);d.unshift(a),a=d.join(", ")}o&&(o.sort=[a],t.publish(t.NAVIGATE,"search-page",{q:new c(o)}),i("send","event","interaction","sort-applied",a))},handleFeedback:function(e){var t=this.store.dispatch,i=a.setQuery,s=a.setSort,r=a.setDirection,n=a.setLocked;switch(e.code){case u.CODES.SEARCH_CYCLE_STARTED:var o=e&&e.query&&e.query.toJSON();if(o){var c=this.extractSort(o.sort[0]);t(i(o)),t(s(c.sort,!0)),t(r(c.direction,!0)),t(n(!0))}break;case u.CODES.SEARCH_CYCLE_PROGRESS:t(n(!0));break;case u.CODES.SEARCH_CYCLE_FAILED_TO_START:case u.CODES.SEARCH_CYCLE_FINISHED:t(n(!1))}},extractSort:function(e){var t=e.split(/,\s?/)[0]||"date desc";return{sort:(t=t.split(" "))[0],direction:t[1]}}})});