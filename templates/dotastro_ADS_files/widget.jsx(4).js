define(["underscore","backbone","react","react-dom","react-redux","analytics","js/components/api_query","js/widgets/base/base_widget","js/mixins/link_generator_mixin","./redux/configure-store","./redux/modules/api","./redux/modules/ui","./containers/app"],function(e,t,i,r,s,n,o,a,c,u,d,l,p){var h=t.View.extend({initialize:function(t){e.assign(this,t)},render:function(){return r.render(i.createElement(s.Provider,{store:this.store},i.createElement(p,null)),this.el),this},destroy:function(){r.unmountComponentAtNode(this.el)}}),v=a.extend({initialize:function(){this.store=u(this),this.view=new h({store:this.store})},defaultQueryArguments:{fl:"bibcode,data,doctype,doi,esources,first_author,genre,isbn,issn,issue,page,property,pub,title,volume,year,links_data"},activate:function(t){var i=this.store.dispatch,r=this;this.setBeeHive(t),this.activateWidget();var s=this.getPubSub();s.subscribe(s.DISPLAY_DOCUMENTS,function(t){var s=r.store.getState().api.query;if(t&&e.isFunction(t.toJSON)){var n=t.toJSON();if(e.isEqual(s,n))return;i(l.reset()),i(d.displayDocuments(n))}else i(l.setError("did not receive query"))}),s.subscribe(s.DELIVERING_RESPONSE,function(t){t&&e.isFunction(t.toJSON)?i(d.processResponse(t.toJSON())):i(l.setError("did not receive response from server"))}),this.attachGeneralHandler(this.onApiFeedback),this._updateLinkServer()},_updateLinkServer:function(){var t=this.store.dispatch,i=this.getBeeHive();if(e.isPlainObject(i)){var r=i.getObject("User");if(e.isPlainObject(r)&&r.getUserData){var s=r.getUserData();e.isString(s.link_server)&&t(d.setLinkServer(s.link_server))}}},dispatchRequest:function(e){var t=new o(e);a.prototype.dispatchRequest.call(this,t)},emitAnalytics:function(e){n("send","event","interaction","full-text-link-followed",e,{transport:"beacon"})},onApiFeedback:function(t){var i=this.store.dispatch;e.isPlainObject(t.error)&&i(l.setError(t.error))}});return e.extend(v.prototype,c),v});