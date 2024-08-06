"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_ElementsBreadcrumbsUtils_js"], {
"./panels/elements/components/ElementsBreadcrumbsUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  crumbsToRender: function() { return crumbsToRender; },
  determineElementTitle: function() { return determineElementTitle; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var UIStrings = {
    /**
     * @description Text in Elements Breadcrumbs of the Elements panel. Indicates that a HTML element
     * is a text node, meaning it contains text only and no other HTML elements. Should be translatd.
     */ text: '(text)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbsUtils.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var crumbsToRender = function(crumbs, selectedNode) {
    if (!selectedNode) {
        return [];
    }
    return crumbs.filter(function(crumb) {
        return crumb.nodeType !== Node.DOCUMENT_NODE;
    }).map(function(crumb) {
        return {
            title: determineElementTitle(crumb),
            selected: crumb.id === selectedNode.id,
            node: crumb,
            originalNode: crumb.legacyDomNode
        };
    }).reverse();
};
var makeCrumbTitle = function(main) {
    var extras = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        main: main,
        extras: extras
    };
};
var determineElementTitle = function(domNode) {
    switch(domNode.nodeType){
        case Node.ELEMENT_NODE:
            {
                if (domNode.pseudoType) {
                    return makeCrumbTitle('::' + domNode.pseudoType);
                }
                var crumbTitle = makeCrumbTitle(domNode.nodeNameNicelyCased);
                var id = domNode.getAttribute('id');
                if (id) {
                    crumbTitle.extras.id = id;
                }
                var classAttribute = domNode.getAttribute('class');
                if (classAttribute) {
                    var classes = new Set(classAttribute.split(/\s+/));
                    crumbTitle.extras.classes = Array.from(classes);
                }
                return crumbTitle;
            }
        case Node.TEXT_NODE:
            return makeCrumbTitle(i18nString(UIStrings.text));
        case Node.COMMENT_NODE:
            return makeCrumbTitle('<!-->');
        case Node.DOCUMENT_TYPE_NODE:
            return makeCrumbTitle('<!doctype>');
        case Node.DOCUMENT_FRAGMENT_NODE:
            return makeCrumbTitle(domNode.shadowRootType ? '#shadow-root' : domNode.nodeNameNicelyCased);
        default:
            return makeCrumbTitle(domNode.nodeNameNicelyCased);
    }
}; //# sourceMappingURL=ElementsBreadcrumbsUtils.js.map


}),

}]);