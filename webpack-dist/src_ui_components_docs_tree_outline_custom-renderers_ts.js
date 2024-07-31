"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_tree_outline_custom-renderers_ts"],{

/***/ "./src/ui/components/docs/tree_outline/custom-renderers.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/components/docs/tree_outline/custom-renderers.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const data = {
    defaultRenderer: (node, state) => {
        const { cssProperty, cssValue } = node.treeNodeData;
        const valueStyles = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.styleMap({
            paddingLeft: '10px',
            fontStyle: 'italic',
            color: 'var(--sys-color-token-property-special)',
        });
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<code>${cssProperty}</code>:${state.isExpanded ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<code style=${valueStyles}>${cssValue}</code>`}`;
    },
    tree: [
        {
            treeNodeData: { cssProperty: 'border', cssValue: '1px solid red' },
            id: '1',
        },
        {
            treeNodeData: { cssProperty: 'font-size', cssValue: '20px' },
            id: '2',
        },
        {
            treeNodeData: { cssProperty: 'margin', cssValue: '10px 5px' },
            id: '3',
            async children() {
                return [
                    { treeNodeData: { cssProperty: 'margin-left', cssValue: '5px' }, id: '4' },
                    { treeNodeData: { cssProperty: 'margin-right', cssValue: '5px' }, id: '5' },
                    { treeNodeData: { cssProperty: 'margin-top', cssValue: '10px' }, id: '6' },
                    { treeNodeData: { cssProperty: 'margin-bottom', cssValue: '10px' }, id: '7' },
                ];
            },
        },
    ],
};
const component = new _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline();
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