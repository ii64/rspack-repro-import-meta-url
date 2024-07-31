"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_tree_outline_lazy-children_ts"],{

/***/ "./src/ui/components/docs/tree_outline/lazy-children.ts":
/*!**************************************************************!*\
  !*** ./src/ui/components/docs/tree_outline/lazy-children.ts ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
async function loadInSomeNodes() {
    const europeanOffices = [
        {
            treeNodeData: 'UK',
            id: 'UK',
            children: () => Promise.resolve([
                {
                    treeNodeData: 'LON',
                    id: 'LON',
                    children: () => Promise.resolve([{ treeNodeData: '6PS', id: '6PS' }, { treeNodeData: 'CSG', id: 'CSG' }, { treeNodeData: 'BEL', id: 'BEL' }]),
                },
            ]),
        },
        {
            treeNodeData: 'Germany',
            id: 'Germany',
            children: () => Promise.resolve([
                { treeNodeData: 'MUC', id: 'MUC' },
                { treeNodeData: 'BER', id: 'MUC' },
            ]),
        },
    ];
    return new Promise(resolve => {
        setTimeout(() => resolve(europeanOffices), 250);
    });
}
const data = {
    defaultRenderer: _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.defaultRenderer,
    tree: [
        {
            treeNodeData: 'Offices',
            id: 'Offices',
            children: () => Promise.resolve([
                {
                    treeNodeData: 'Europe',
                    id: 'Europe',
                    async children() {
                        const children = await loadInSomeNodes();
                        return children;
                    },
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
    ],
};
const component = new _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutline();
component.setAttribute('toplevelbordercolor', 'var(--sys-color-token-property-special)');
component.data = data;
document.getElementById('container')?.appendChild(component);
document.getElementById('recursively-expand')?.addEventListener('click', () => {
    void component.expandRecursively();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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