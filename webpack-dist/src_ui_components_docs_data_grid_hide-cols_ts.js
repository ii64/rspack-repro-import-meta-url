"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_data_grid_hide-cols_ts"],{

/***/ "./src/ui/components/docs/data_grid/hide-cols.ts":
/*!*******************************************************!*\
  !*** ./src/ui/components/docs/data_grid/hide-cols.ts ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
const component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid();
component.data = {
    columns: [
        { id: 'key', title: 'Key', sortable: true, widthWeighting: 2, visible: true, hideable: false },
        { id: 'value', title: 'Value', sortable: false, widthWeighting: 2, visible: true, hideable: true },
        { id: 'number', title: 'Number', sortable: false, widthWeighting: 1, visible: true, hideable: false },
    ],
    rows: [
        {
            cells: [
                { columnId: 'key', value: 'Bravo' },
                { columnId: 'value', value: 'Letter B' },
                { columnId: 'number', value: '1' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Alpha' },
                { columnId: 'value', value: 'Letter A' },
                { columnId: 'number', value: '2' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Charlie' },
                { columnId: 'value', value: 'Letter C' },
                { columnId: 'number', value: '3' },
            ],
        },
    ],
    activeSort: null,
};
document.getElementById('container')?.appendChild(component);
const btn = document.querySelector('button');
btn?.addEventListener('click', () => {
    const { columns } = component.data;
    const isVisible = columns[1].visible === true;
    const newColumns = [...columns];
    newColumns[1].visible = !isVisible;
    component.data = {
        ...component.data,
        columns: newColumns,
        rows: component.data.rows,
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);