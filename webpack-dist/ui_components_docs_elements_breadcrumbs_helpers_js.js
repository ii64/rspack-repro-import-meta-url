"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_elements_breadcrumbs_helpers_js"],{

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

/***/ })

}]);