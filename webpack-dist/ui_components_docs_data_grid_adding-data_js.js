"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_data_grid_adding-data_js"],{

/***/ "./ui/components/docs/data_grid/adding-data.js":
/*!*****************************************************!*\
  !*** ./ui/components/docs/data_grid/adding-data.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
const component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid();
component.data = {
    columns: [
        { id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false },
        { id: 'value', title: 'Value', widthWeighting: 1, visible: true, hideable: false },
    ],
    rows: Array.from({ length: 10 }, () => {
        return getRandomRow();
    }),
    activeSort: null,
};
document.getElementById('container')?.appendChild(component);
function getRandomRow() {
    const key = Math.floor(Math.random() * 10);
    const value = Math.floor(Math.random() * 10);
    const randomDataRow = {
        cells: [
            { columnId: 'key', value: `Key: ${key}`, title: `Key: ${key}` },
            { columnId: 'value', value: `Value: ${value}`, title: `Value: ${value}` },
        ],
    };
    return randomDataRow;
}
/**
 * Set so we can call this from an interaction test to emulate the user
 * interacting with the data grid whilst something is populating the grid with
 * new data - e.g. like the protocol monitor.
 */
// @ts-expect-error
window.addNewRow = function () {
    addNewRow();
};
function addNewRow() {
    const newRow = getRandomRow();
    component.data = {
        ...component.data,
        rows: [...component.data.rows, newRow],
    };
}
document.querySelector('#add')?.addEventListener('click', (event) => {
    event.preventDefault();
    addNewRow();
});
//# sourceMappingURL=adding-data.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);