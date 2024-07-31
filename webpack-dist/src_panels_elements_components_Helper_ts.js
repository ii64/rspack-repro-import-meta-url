"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_Helper_ts"],{

/***/ "./src/panels/elements/components/Helper.ts":
/*!**************************************************!*\
  !*** ./src/panels/elements/components/Helper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   legacyNodeToElementsComponentsNode: () => (/* binding */ legacyNodeToElementsComponentsNode)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const legacyNodeToElementsComponentsNode = (node) => {
    return {
        parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,
        id: node.id,
        nodeType: node.nodeType(),
        pseudoType: node.pseudoType(),
        shadowRootType: node.shadowRootType(),
        nodeName: node.nodeName(),
        nodeNameNicelyCased: node.nodeNameInCorrectCase(),
        legacyDomNode: node,
        highlightNode: (mode) => node.highlight(mode),
        clearHighlight: () => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight(),
        getAttribute: node.getAttribute.bind(node),
    };
};


/***/ })

}]);