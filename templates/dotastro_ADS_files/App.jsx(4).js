define(["underscore","react","prop-types"],function(e,t,a){var r=function(){return t.createElement("h3",{className:"s-right-col-widget-title"},"No Sources Found")},n=function(){return t.createElement("div",{className:"text-center text-muted"},t.createElement("i",{className:"fa fa-spinner fa-spin fa-2x","aria-hidden":"true"}),t.createElement("span",{className:"sr-only"},"Loading"))},c=function(a){var r=a.items,n=a.onClick;return t.createElement("div",{className:"resources__full__list"},t.createElement("div",{className:"resources__header__row"},t.createElement("i",{className:"fa fa-file-text-o","aria-hidden":"true"}),t.createElement("div",{className:"resources__header__title"},"full text sources")),e.map(r,function(a,r){return t.createElement("div",{className:"resources__content",key:r},t.createElement("div",{className:"resources__content__title"},r),t.createElement("div",{className:"resources__content__links"},e.map(a,function(e,r){return t.createElement("span",{key:e.type+r},t.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",onClick:function(){return n(e)},title:"".concat(e.description," ").concat(e.open?"OPEN ACCESS":"INSTITUTION"===e.type?"":"SIGN IN REQUIRED"),className:"resources__content__link ".concat(e.open?"unlock":"")},t.createElement("span",{className:"sr-only"},e.description),"PDF"===e.type&&t.createElement("i",{className:"fa fa-file-pdf-o","aria-hidden":"true"}),"HTML"===e.type&&t.createElement("i",{className:"fa fa-file-text","aria-hidden":"true"}),"SCAN"===e.type&&t.createElement("i",{className:"fa fa-file-image-o","aria-hidden":"true"}),"INSTITUTION"===e.type&&t.createElement("i",{className:"fa fa-university","aria-hidden":"true"})),r<a.length-1&&t.createElement("div",{className:"resources__content__link__separator"},"|"))})))}))};c.propTypes={items:a.array,onClick:a.func},c.defaultProps={items:[],onClick:function(){}};var s=function(a){var r=a.items,n=a.onClick;return t.createElement("div",{className:"resources__data__list"},t.createElement("div",{className:"resources__header__row"},t.createElement("i",{className:"fa fa-database"}),t.createElement("div",{className:"resources__header__title"},"data products")),t.createElement("div",{className:"resources__content"},e.map(r,function(e){return t.createElement("a",{key:e.name,href:e.url,target:"_blank",rel:"noreferrer noopener",onClick:function(){return n(e)},title:e.description,className:"resources__content__link"},e.name," (",e.count,")")})))};s.propTypes={items:a.array,onClick:a.func},s.defaultProps={items:[],onClick:function(){}};var l=function(a){return t.createElement("div",null,a.loading&&t.createElement(n,null),a.noResults&&!a.loading&&t.createElement(r,null),!a.loading&&!a.hasError&&t.createElement(t.Fragment,null,t.createElement("div",{className:"resources__container"},!e.isEmpty(a.fullTextSources)&&t.createElement(c,{items:a.fullTextSources,onClick:a.onLinkClick})),t.createElement("div",{className:"resources__container"},!e.isEmpty(a.dataProducts)&&t.createElement(s,{items:a.dataProducts,onClick:a.onLinkClick}))))};return l.propTypes={loading:a.bool,noResults:a.bool,fullTextSources:a.array,dataProducts:a.array,onLinkClick:a.func,hasError:a.string},l.defaultProps={loading:!1,noResults:!1,fullTextSources:[],dataProducts:[],onLinkClick:function(){},hasError:null},l});