"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_elements_breadcrumbs_scroll_js"],{

/***/ "./ui/components/docs/elements_breadcrumbs/helpers.js":
/*!************************************************************!*\
  !*** ./ui/components/docs/elements_breadcrumbs/helpers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeCrumb: () => (/* binding */ makeCrumb)
/* harmony export */ });
let id = 0;
const makeCrumb = (overrides = {}) => {
    const attributes = overrides.attributes || {};
    const newCrumb = {
        nodeType: Node.ELEMENT_NODE,
        id: id++,
        pseudoType: '',
        parentNode: null,
        shadowRootType: '',
        nodeName: 'body',
        nodeNameNicelyCased: 'body',
        legacyDomNode: {},
        highlightNode: () => { },
        clearHighlight: () => { },
        getAttribute: (x) => attributes[x] || '',
        ...overrides,
    };
    return newCrumb;
};
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./ui/components/docs/elements_breadcrumbs/scroll.js":
/*!***********************************************************!*\
  !*** ./ui/components/docs/elements_breadcrumbs/scroll.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/elements/components/components.js */ "./panels/elements/components/components.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./ui/components/docs/elements_breadcrumbs/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
const component = new _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__.ElementsBreadcrumbs.ElementsBreadcrumbs();
const bodyCrumb = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCrumb)({
    nodeType: Node.ELEMENT_NODE,
    nodeName: 'body',
    nodeNameNicelyCased: 'body',
    attributes: {
        class: 'body-class1 body-class2',
    },
});
const divCrumb = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCrumb)({
    nodeType: Node.ELEMENT_NODE,
    nodeName: 'div',
    nodeNameNicelyCased: 'div',
    attributes: {
        id: 'test-id',
        class: 'wrapper-div',
    },
});
const spanCrumb = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCrumb)({
    nodeType: Node.ELEMENT_NODE,
    nodeName: 'span',
    nodeNameNicelyCased: 'span',
    attributes: {
        id: 'my-span-has-a-long-id',
    },
});
const emCrumb = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCrumb)({
    nodeType: Node.ELEMENT_NODE,
    nodeName: 'em',
    nodeNameNicelyCased: 'em',
    attributes: {
        id: 'my-em-has-a-long-id',
    },
});
document.getElementById('container')?.appendChild(component);
component.data = {
    crumbs: [emCrumb, spanCrumb, divCrumb, bodyCrumb],
    selectedNode: bodyCrumb,
};
document.getElementById('focus-body')?.addEventListener('click', () => {
    component.data = {
        crumbs: [bodyCrumb],
        selectedNode: bodyCrumb,
    };
});
//# sourceMappingURL=scroll.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);