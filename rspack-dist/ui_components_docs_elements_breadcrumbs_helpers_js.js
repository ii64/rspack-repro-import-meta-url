"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_elements_breadcrumbs_helpers_js"], {
"./ui/components/docs/elements_breadcrumbs/helpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeCrumb: function() { return makeCrumb; }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var id = 0;
var makeCrumb = function() {
    var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var attributes = overrides.attributes || {};
    var newCrumb = _object_spread({
        nodeType: Node.ELEMENT_NODE,
        id: id++,
        pseudoType: '',
        parentNode: null,
        shadowRootType: '',
        nodeName: 'body',
        nodeNameNicelyCased: 'body',
        legacyDomNode: {},
        highlightNode: function() {},
        clearHighlight: function() {},
        getAttribute: function(x) {
            return attributes[x] || '';
        }
    }, overrides);
    return newCrumb;
}; //# sourceMappingURL=helpers.js.map


}),

}]);