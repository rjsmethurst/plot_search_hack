requirejs.config({deps:["config/landing-page.bundle"],waitSeconds:7,config:{es6:{},"js/components/persistent_storage":{namespace:"bumblebee"},"js/apps/discovery/main":{core:{controllers:{FeedbackMediator:"js/wraps/discovery_mediator",QueryMediator:"js/components/query_mediator",Diagnostics:"js/bugutils/diagnostics",AlertsController:"js/wraps/alerts_mediator",Orcid:"js/modules/orcid/module",SecondOrderController:"js/components/second_order_controller",HotkeysController:"js/components/hotkeys_controller",Experiments:"js/components/experiments"},services:{Api:"js/services/api",PubSub:"js/services/pubsub",Navigator:"js/apps/discovery/navigator",PersistentStorage:"js/services/storage",HistoryManager:"js/components/history_manager"},objects:{User:"js/components/user",Session:"js/components/session",DynamicConfig:"config/discovery.vars",MasterPageManager:"js/page_managers/master",AppStorage:"js/components/app_storage",RecaptchaManager:"recaptcha!js/components/recaptcha_manager",CSRFManager:"js/components/csrf_manager",LibraryController:"js/components/library_controller",DocStashController:"js/components/doc_stash_controller",Utils:"utils"},modules:{FacetFactory:"js/widgets/facet/factory"}},widgets:{LandingPage:"js/wraps/landing_page_manager/landing_page_manager",SearchPage:"js/wraps/results_page_manager",DetailsPage:"js/wraps/abstract_page_manager/abstract_page_manager",AuthenticationPage:"js/wraps/authentication_page_manager",SettingsPage:"js/wraps/user_settings_page_manager/user_page_manager",OrcidPage:"js/wraps/orcid_page_manager/orcid_page_manager",OrcidInstructionsPage:"js/wraps/orcid-instructions-page-manager/manager",ReactPageManager:"js/react/PageManager",LibrariesPage:"js/wraps/libraries_page_manager/libraries_page_manager",HomePage:"js/wraps/home_page_manager/home_page_manager",PublicLibrariesPage:"js/wraps/public_libraries_page_manager/public_libraries_manager",ErrorPage:"js/wraps/error_page_manager/error_page_manager",Authentication:"js/widgets/authentication/widget",UserSettings:"js/widgets/user_settings/widget",UserPreferences:"js/widgets/preferences/widget",LibraryImport:"js/widgets/library_import/widget",BreadcrumbsWidget:"js/widgets/filter_visualizer/widget",NavbarWidget:"js/widgets/navbar/widget",UserNavbarWidget:"js/widgets/user_navbar/widget",AlertsWidget:"js/widgets/alerts/widget",ClassicSearchForm:"js/widgets/classic_form/widget",SearchWidget:"js/widgets/search_bar/search_bar_widget",PaperSearchForm:"js/widgets/paper_search_form/widget",Results:"js/widgets/results/widget",QueryInfo:"js/widgets/query_info/query_info_widget",QueryDebugInfo:"js/widgets/api_query/widget",ExportWidget:"js/widgets/export/widget.jsx",Sort:"js/widgets/sort/widget.jsx",ExportDropdown:"js/wraps/export_dropdown",VisualizationDropdown:"js/wraps/visualization_dropdown",AuthorNetwork:"js/wraps/author_network",PaperNetwork:"js/wraps/paper_network",ConceptCloud:"js/widgets/wordcloud/widget",BubbleChart:"js/widgets/bubble_chart/widget",AuthorAffiliationTool:"js/widgets/author_affiliation_tool/widget.jsx",Metrics:"js/widgets/metrics/widget",CitationHelper:"js/widgets/citation_helper/widget",OrcidBigWidget:"js/modules/orcid/widget/widget",OrcidSelector:"js/widgets/orcid-selector/widget.jsx",AffiliationFacet:"js/wraps/affiliation_facet",AuthorFacet:"js/wraps/author_facet",BibgroupFacet:"js/wraps/bibgroup_facet",BibstemFacet:"js/wraps/bibstem_facet",DataFacet:"js/wraps/data_facet",DatabaseFacet:"js/wraps/database_facet",GrantsFacet:"js/wraps/grants_facet",KeywordFacet:"js/wraps/keyword_facet",ObjectFacet:"js/wraps/simbad_object_facet",NedObjectFacet:"js/wraps/ned_object_facet",RefereedFacet:"js/wraps/refereed_facet",VizierFacet:"js/wraps/vizier_facet",GraphTabs:"js/wraps/graph_tabs",FooterWidget:"js/widgets/footer/widget",PubtypeFacet:"js/wraps/pubtype_facet",ShowAbstract:"js/widgets/abstract/widget",ShowGraphics:"js/widgets/graphics/widget",ShowGraphicsSidebar:"js/wraps/sidebar-graphics-widget",ShowReferences:"js/wraps/references",ShowCitations:"js/wraps/citations",ShowCoreads:"js/wraps/coreads",ShowSimilar:"js/wraps/similar",MetaTagsWidget:"js/widgets/meta_tags/widget",ShowToc:"js/wraps/table_of_contents",ShowResources:"js/widgets/resources/widget.jsx",ShowAssociated:"js/widgets/associated/widget.jsx",ShowRecommender:"js/widgets/recommender/widget",ShowMetrics:"js/wraps/paper_metrics",ShowExportcitation:"js/wraps/paper_export",ShowFeedback:"reactify!js/react/BumblebeeWidget?FeedbackForms",ShowLibraryAdd:"js/wraps/abstract_page_library_add/widget",IndividualLibraryWidget:"js/widgets/library_individual/widget",LibraryActionsWidget:"js/widgets/library_actions/widget.jsx",AllLibrariesWidget:"js/widgets/libraries_all/widget",LibraryListWidget:"js/widgets/library_list/widget",MyAdsFreeform:"reactify!js/react/BumblebeeWidget?MyAdsFreeform",MyAdsDashboard:"reactify!js/react/BumblebeeWidget?MyAdsDashboard",RecommenderWidget:"reactify!js/react/BumblebeeWidget?Recommender"},plugins:{}}},map:{"*":{pubsub_service_impl:"js/services/default_pubsub"}},paths:{router:"js/apps/discovery/router",analytics:"js/components/analytics",utils:"js/utils",recaptcha:"js/plugins/recaptcha",reactify:"js/plugins/reactify",es6:"js/plugins/es6",suit:"shared/dist/index.umd.production.min",babel:"libs/babel",async:"libs/requirejs-plugins/async",hbs:"libs/requirejs-plugins/hbs",sprintf:"libs/sprintf",sinon:"libs/sinon",enzyme:"libs/enzyme",mocha:"libs/mocha/mocha",chai:"libs/chai",underscore:["https://cdn.jsdelivr.net/npm/lodash@2.4.2/dist/lodash.compat.min","https://unpkg.com/lodash@2.4.2/dist/lodash.compat.min","libs/lodash"],backbone:["https://cdn.jsdelivr.net/npm/backbone@1.1.2/backbone-min","https://unpkg.com/backbone@1.1.2/backbone-min","libs/backbone"],"backbone-validation":["https://cdn.jsdelivr.net/npm/backbone-validation@0.11.3/dist/backbone-validation-amd-min","https://unpkg.com/backbone-validation@0.11.3/dist/backbone-validation-amd-min","libs/backbone-validation"],"backbone.stickit":["https://cdn.jsdelivr.net/npm/backbone.stickit@0.9.2/backbone.stickit","https://unpkg.com/backbone.stickit@0.9.2/backbone.stickit","libs/backbone.stickit"],"backbone.wreqr":["https://cdn.jsdelivr.net/npm/backbone.wreqr@1.4.0/lib/backbone.wreqr.min","https://unpkg.com/backbone.wreqr@1.4.0/lib/backbone.wreqr.min","libs/backbone.wreqr"],bootstrap:["https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min","https://unpkg.com/bootstrap@3.3.7/dist/js/bootstrap.min","libs/bootstrap/bootstrap"],bowser:["https://cdn.jsdelivr.net/npm/bowser@2.11.0/es5","https://unpkg.com/bowser@2.11.0/es5","libs/bowser"],clipboard:["https://cdn.jsdelivr.net/npm/clipboard@1.7.1/dist/clipboard.min","https://unpkg.com/clipboard@1.7.1/dist/clipboard.min","libs/clipboard"],d3:["https://cdn.jsdelivr.net/npm/d3@3.5.17/d3.min","https://unpkg.com/d3@3.5.17/d3.min","libs/d3"],"d3-cloud":["https://cdn.jsdelivr.net/npm/d3-cloud@1.2.5/build/d3.layout.cloud","https://unpkg.com/d3-cloud@1.2.5/build/d3.layout.cloud","libs/d3-cloud"],filesaver:["https://cdn.jsdelivr.net/npm/file-saver@1.3.8/FileSaver.min","https://unpkg.com/file-saver@1.3.8/FileSaver.min","libs/file-saver"],hotkeys:["https://cdn.jsdelivr.net/npm/hotkeys-js@3.8.7/dist/hotkeys.min","https://unpkg.com/hotkeys-js@3.8.7/dist/hotkeys.min","libs/hotkeys"],jquery:["https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min","https://unpkg.com/jquery@2.2.4/dist/jquery.min","libs/jquery"],"jquery-ui":["https://code.jquery.com/ui/1.12.1/jquery-ui.min","https://code.jquery.com/ui/1.12.1/jquery-ui.min","libs/jquery-ui"],jsonpath:["https://cdn.jsdelivr.net/npm/jsonpath@0.2.12/jsonpath.min","https://unpkg.com/jsonpath@0.2.12/jsonpath.min","libs/jsonpath"],marionette:["https://cdn.jsdelivr.net/npm/backbone.marionette@2.4.5/lib/backbone.marionette.min","https://unpkg.com/backbone.marionette@2.4.5/lib/backbone.marionette.min","libs/backbone.marionette"],mathjax:["https://cdn.jsdelivr.net/npm/mathjax@2.7.4/MathJax.js?config=TeX-AMS_HTML&amp;delayStartupUntil=configured","https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML&amp;delayStartupUntil=configured","libs/mathjax/mathjax"],moment:["https://cdn.jsdelivr.net/npm/moment@2.22.2/min/moment.min","https://unpkg.com/moment@2.22.2/min/moment.min","libs/moment"],"persist-js":["https://cdn.jsdelivr.net/npm/persist-js@0.3.1/persist-min","https://unpkg.com/persist-js@0.3.1/persist-min","libs/persist-js"],react:["https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min","https://unpkg.com/react@16/umd/react.production.min","libs/react"],"react-bootstrap":["https://cdn.jsdelivr.net/npm/react-bootstrap@0.33.0/dist/react-bootstrap.min","https://unpkg.com/react-bootstrap@0.33.0/dist/react-bootstrap.min","libs/react-bootstrap"],"react-dom":["https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min","https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min","libs/react-dom"],"prop-types":["https://cdn.jsdelivr.net/npm/prop-types@15.6/prop-types.min","https://unpkg.com/prop-types@15.6/prop-types.min","libs/prop-types"],"react-redux":["https://cdn.jsdelivr.net/npm/react-redux@7.2.4/dist/react-redux.min","https://unpkg.com/react-redux@7.2.4/dist/react-redux.min","libs/react-redux"],"react-transition-group":["https://cdn.jsdelivr.net/npm/react-transition-group@2.4.0/dist/react-transition-group.min","https://unpkg.com/react-transition-group@2.4.0/dist/react-transition-group.min","libs/react-transition-group"],redux:["https://cdn.jsdelivr.net/npm/redux@4.0.5/dist/redux.min","https://unpkg.com/redux@4.0.5/dist/redux.min","libs/redux"],"redux-thunk":["https://cdn.jsdelivr.net/npm/redux-thunk@2.3.0/dist/redux-thunk.min","https://unpkg.com/redux-thunk@2.3.0/dist/redux-thunk.min","libs/redux-thunk"],select2:["https://cdn.jsdelivr.net/npm/select2@4.0.3/dist/js/select2.min","https://unpkg.com/select2@4.0.3/dist/js/select2.min","libs/select2/select2"],"react-aria-menubutton":["https://cdn.jsdelivr.net/npm/react-aria-menubutton@7.0.3/umd/ReactAriaMenuButton","https://unpkg.com/react-aria-menubutton@7.0.3/umd/ReactAriaMenuButton","libs/react-aria-menubutton"],"react-hook-form":["https://cdn.jsdelivr.net/npm/react-hook-form@6.11.0/dist/index.umd.production.min","https://unpkg.com/react-hook-form@6.11.0/dist/index.umd.production.min","libs/react-hook-form"],"react-is":["https://cdn.jsdelivr.net/npm/react-is@17.0.2/umd/react-is.production.min","https://unpkg.com/react-is@17.0.2/umd/react-is.production.min","libs/react-is"],"react-data-table-component":["https://cdn.jsdelivr.net/npm/react-data-table-component@6.11.7/dist/react-data-table-component.umd","https://unpkg.com/react-data-table-component@6.11.7/dist/react-data-table-component.umd","libs/react-data-table-component"],"react-window":["https://cdn.jsdelivr.net/npm/react-window@1.8.6/dist/index-prod.umd","https://unpkg.com/react-window@1.8.6/dist/index-prod.umd","libs/react-window"],"react-async":["https://cdn.jsdelivr.net/npm/react-async@10.0.1/dist-umd/index","https://unpkg.com/react-async@10.0.1/dist-umd/index","libs/react-async"],"regenerator-runtime":["https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.9/runtime","https://unpkg.com/regenerator-runtime@0.13.9/runtime","libs/regenerator-runtime"],diff:["https://cdn.jsdelivr.net/npm/diff@4.0.2/dist/diff.min","https://unpkg.com/diff@4.0.2/dist/diff.min","libs/diff"],"styled-components":["https://cdn.jsdelivr.net/npm/styled-components@5.1.0/dist/styled-components.min","https://unpkg.com/styled-components@5.1.0/dist/styled-components.min","libs/styled-components"],"@hookform/resolvers":["https://cdn.jsdelivr.net/npm/@hookform/resolvers@0.1.0/dist/index.umd.production.min","https://unpkg.com/@hookform/resolvers@0.1.0/dist/index.umd.production.min","libs/hookform"],"google-analytics":["libs/g","data:application/javascript,"],yup:"libs/yup",cache:"libs/cache",polyfill:"libs/polyfill","react-flexview":"libs/react-flexview","array-flat-polyfill":"libs/array-flat-polyfill","js/wraps/affiliation_facet":"config/landing-page.bundle","js/wraps/author_facet":"config/landing-page.bundle","js/wraps/bibgroup_facet":"config/landing-page.bundle","js/wraps/bibstem_facet":"config/landing-page.bundle","js/wraps/data_facet":"config/landing-page.bundle","js/wraps/database_facet":"config/landing-page.bundle","js/wraps/grants_facet":"config/landing-page.bundle","js/wraps/keyword_facet":"config/landing-page.bundle","js/wraps/ned_object_facet":"config/landing-page.bundle","js/wraps/pubtype_facet":"config/landing-page.bundle","js/wraps/refereed_facet":"config/landing-page.bundle","js/wraps/simbad_object_facet":"config/landing-page.bundle","js/wraps/vizier_facet":"config/landing-page.bundle","js/widgets/metrics/d3-tip":"config/landing-page.bundle","js/widgets/metrics/extractor_functions":"config/landing-page.bundle","js/widgets/metrics/widget":"config/landing-page.bundle","js/widgets/list_of_things/details_widget":"config/landing-page.bundle","js/widgets/list_of_things/infinite_view":"config/landing-page.bundle","js/widgets/list_of_things/item_view":"config/landing-page.bundle","js/widgets/list_of_things/model":"config/landing-page.bundle","js/widgets/list_of_things/paginated_view":"config/landing-page.bundle","js/widgets/list_of_things/widget":"config/landing-page.bundle","js/widgets/search_bar/autocomplete":"config/landing-page.bundle","js/widgets/search_bar/quick-field-desc":"config/landing-page.bundle","js/widgets/search_bar/search_bar_widget":"config/landing-page.bundle","js/widgets/facet/actions":"config/landing-page.bundle","js/widgets/facet/create_store":"config/landing-page.bundle","js/widgets/facet/factory":"config/landing-page.bundle","js/widgets/facet/graph-facet/base_graph":"config/landing-page.bundle","js/widgets/facet/graph-facet/h_index_graph":"config/landing-page.bundle","js/widgets/facet/graph-facet/widget":"config/landing-page.bundle","js/widgets/facet/graph-facet/year_graph":"config/landing-page.bundle","js/widgets/facet/reducers":"config/landing-page.bundle","js/widgets/facet/widget":"config/landing-page.bundle","js/widgets/alerts/modal_view":"config/landing-page.bundle","js/widgets/alerts/page_top_alert":"config/landing-page.bundle","js/widgets/alerts/widget":"config/landing-page.bundle","js/widgets/abstract/widget":"config/landing-page.bundle","js/widgets/api_query/widget":"config/landing-page.bundle","js/widgets/base/base_widget":"config/landing-page.bundle","js/widgets/bubble_chart/widget":"config/landing-page.bundle","js/widgets/citation_helper/widget":"config/landing-page.bundle","js/widgets/dropdown-menu/widget":"config/landing-page.bundle","js/widgets/filter_visualizer/widget":"config/landing-page.bundle","js/widgets/footer/widget":"config/landing-page.bundle","js/widgets/navbar/widget":"config/landing-page.bundle","js/widgets/network_vis/network_widget":"config/landing-page.bundle","js/widgets/query_info/query_info_widget":"config/landing-page.bundle","js/widgets/results/widget":"config/landing-page.bundle","js/widgets/tabs/tabs_widget":"config/landing-page.bundle","js/widgets/widget_states":"config/landing-page.bundle","js/widgets/wordcloud/widget":"config/landing-page.bundle","js/wraps/alerts_mediator":"config/landing-page.bundle","js/wraps/discovery_mediator":"config/landing-page.bundle","js/wraps/export_dropdown":"config/landing-page.bundle","js/wraps/graph_tabs":"config/landing-page.bundle","js/wraps/results_page_manager":"config/landing-page.bundle","js/wraps/visualization_dropdown":"config/landing-page.bundle","libs/select2/matcher":"config/landing-page.bundle","discovery.config":"config/landing-page.bundle"},hbs:{templateExtension:"html",helpers:!1},babel:{presets:["env","react"]},shim:{Backbone:{deps:["backbone"],exports:"Backbone"},"backbone.stickit":{deps:["backbone"]},"backbone-validation":{deps:["backbone"]},bootstrap:{deps:["jquery","jquery-ui"]},backbone:{deps:["jquery","underscore"],exports:"Backbone"},marionette:{deps:["jquery","underscore","backbone"],exports:"Marionette"},cache:{exports:"Cache"},mocha:{exports:"mocha"},sinon:{exports:"sinon"},filesaver:{exports:"saveAs"},d3:{exports:"d3"},"d3-cloud":{deps:["d3"]},"google-analytics":{exports:"__ga__"},"jquery-ui":{deps:["jquery"]},"jquery-querybuilder":{deps:["jquery"]},sprintf:{exports:"sprintf"},"persist-js":{exports:"Persist"}}});