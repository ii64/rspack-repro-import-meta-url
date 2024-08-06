"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_tree_outline_basic_js"],{

/***/ "./ui/components/docs/tree_outline/basic.js":
/*!**************************************************!*\
  !*** ./ui/components/docs/tree_outline/basic.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */ var _sample_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-data.js */ "./ui/components/docs/tree_outline/sample-data.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const component = new _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutline();
component.data = {
    defaultRenderer: _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.defaultRenderer,
    tree: _sample_data_js__WEBPACK_IMPORTED_MODULE_3__.officesAndProductsData,
};
component.setAttribute('animated', 'animated');
component.addEventListener('treenodemouseover', (event) => {
    const evt = event;
    // eslint-disable-next-line no-console
    console.log('Node', evt.data.node, 'mouseover');
});
component.addEventListener('treenodemouseout', (event) => {
    const evt = event;
    // eslint-disable-next-line no-console
    console.log('Node', evt.data.node, 'mouseout');
});
document.getElementById('container')?.appendChild(component);
document.getElementById('recursively-expand')?.addEventListener('click', () => {
    void component.expandRecursively();
});
document.getElementById('expand-to-belgrave-house')?.addEventListener('click', () => {
    void component.expandToAndSelectTreeNode(_sample_data_js__WEBPACK_IMPORTED_MODULE_3__.belgraveHouse);
});
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./ui/components/docs/tree_outline/sample-data.js":
/*!********************************************************!*\
  !*** ./ui/components/docs/tree_outline/sample-data.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   belgraveHouse: () => (/* binding */ belgraveHouse),
/* harmony export */   officesAndProductsData: () => (/* binding */ officesAndProductsData)
/* harmony export */ });
/* harmony import */ var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const belgraveHouse = {
    treeNodeData: 'BEL',
    id: 'BEL',
};
const officesAndProductsData = [
    {
        treeNodeData: 'Offices',
        id: 'Offices',
        children: () => Promise.resolve([
            {
                treeNodeData: 'Europe',
                id: 'Europe',
                children: () => Promise.resolve([
                    {
                        treeNodeData: 'UK',
                        id: 'UK',
                        children: () => Promise.resolve([
                            {
                                treeNodeData: 'LON',
                                id: 'LON',
                                children: () => Promise.resolve([{ treeNodeData: '6PS', id: '6PS' }, { treeNodeData: 'CSG', id: 'CSG' }, belgraveHouse]),
                            },
                        ]),
                    },
                    {
                        treeNodeData: 'Germany',
                        id: 'Germany',
                        children: () => Promise.resolve([
                            { treeNodeData: 'MUC', id: 'MUC' },
                            { treeNodeData: 'BER', id: 'BER' },
                        ]),
                    },
                ]),
            },
        ]),
    },
    {
        treeNodeData: 'Products',
        id: 'Products',
        children: () => Promise.resolve([
            {
                treeNodeData: 'Chrome',
                id: 'Chrome',
            },
            {
                treeNodeData: 'YouTube',
                id: 'YouTube',
            },
            {
                treeNodeData: 'Drive',
                id: 'Drive',
            },
            {
                treeNodeData: 'Calendar',
                id: 'Calendar',
            },
        ]),
    },
];
//# sourceMappingURL=sample-data.js.map

/***/ }),

/***/ "./ui/components/tree_outline/tree_outline.js":
/*!****************************************************!*\
  !*** ./ui/components/tree_outline/tree_outline.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeOutline: () => (/* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TreeOutlineUtils: () => (/* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./ui/components/tree_outline/TreeOutline.js");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=tree_outline.js.map

/***/ })

}]);