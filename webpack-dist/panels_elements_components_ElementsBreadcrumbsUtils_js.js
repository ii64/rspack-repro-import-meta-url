"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ElementsBreadcrumbsUtils_js"],{

/***/ "./panels/elements/components/ElementsBreadcrumbsUtils.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/ElementsBreadcrumbsUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crumbsToRender: () => (/* binding */ crumbsToRender),
/* harmony export */   determineElementTitle: () => (/* binding */ determineElementTitle)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const UIStrings = {
    /**
     * @description Text in Elements Breadcrumbs of the Elements panel. Indicates that a HTML element
     * is a text node, meaning it contains text only and no other HTML elements. Should be translatd.
     */
    text: '(text)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbsUtils.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const crumbsToRender = (crumbs, selectedNode) => {
    if (!selectedNode) {
        return [];
    }
    return crumbs
        .filter(crumb => {
        return crumb.nodeType !== Node.DOCUMENT_NODE;
    })
        .map(crumb => {
        return {
            title: determineElementTitle(crumb),
            selected: crumb.id === selectedNode.id,
            node: crumb,
            originalNode: crumb.legacyDomNode,
        };
    })
        .reverse();
};
const makeCrumbTitle = (main, extras = {}) => {
    return {
        main,
        extras,
    };
};
const determineElementTitle = (domNode) => {
    switch (domNode.nodeType) {
        case Node.ELEMENT_NODE: {
            if (domNode.pseudoType) {
                return makeCrumbTitle('::' + domNode.pseudoType);
            }
            const crumbTitle = makeCrumbTitle(domNode.nodeNameNicelyCased);
            const id = domNode.getAttribute('id');
            if (id) {
                crumbTitle.extras.id = id;
            }
            const classAttribute = domNode.getAttribute('class');
            if (classAttribute) {
                const classes = new Set(classAttribute.split(/\s+/));
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
};
//# sourceMappingURL=ElementsBreadcrumbsUtils.js.map

/***/ })

}]);