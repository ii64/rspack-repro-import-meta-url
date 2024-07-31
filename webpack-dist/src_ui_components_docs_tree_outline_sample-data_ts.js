"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_tree_outline_sample-data_ts"],{

/***/ "./src/ui/components/docs/tree_outline/sample-data.ts":
/*!************************************************************!*\
  !*** ./src/ui/components/docs/tree_outline/sample-data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   belgraveHouse: () => (/* binding */ belgraveHouse),
/* harmony export */   officesAndProductsData: () => (/* binding */ officesAndProductsData)
/* harmony export */ });
/* harmony import */ var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
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


/***/ }),

/***/ "./src/ui/components/tree_outline/tree_outline.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/tree_outline/tree_outline.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeOutline: () => (/* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TreeOutlineUtils: () => (/* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./src/ui/components/tree_outline/TreeOutline.ts");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./src/ui/components/tree_outline/TreeOutlineUtils.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);