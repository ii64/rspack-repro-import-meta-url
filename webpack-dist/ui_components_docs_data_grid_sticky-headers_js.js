"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_data_grid_sticky-headers_js"],{

/***/ "./ui/components/docs/data_grid/sticky-headers.js":
/*!********************************************************!*\
  !*** ./ui/components/docs/data_grid/sticky-headers.js ***!
  \********************************************************/
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
        { id: 'key', title: 'Key', sortable: true, widthWeighting: 1, visible: true, hideable: false },
        { id: 'value', title: 'Value', sortable: false, widthWeighting: 1, visible: true, hideable: false },
    ],
    rows: [
        // Each key is the ID of a column, and the value is the value for that column
        { cells: [{ columnId: 'key', value: 'Bravo' }, { columnId: 'value', value: 'foobar' }] },
        { cells: [{ columnId: 'key', value: 'Alpha' }, { columnId: 'value', value: 'bazbar' }] },
        { cells: [{ columnId: 'key', value: 'Charlie' }, { columnId: 'value', value: 'bazbar' }] },
        { cells: [{ columnId: 'key', value: 'Delta' }, { columnId: 'value', value: 'bazbar' }] },
        { cells: [{ columnId: 'key', value: 'Echo' }, { columnId: 'value', value: 'bazbar' }] },
        { cells: [{ columnId: 'key', value: 'Foxtrot' }, { columnId: 'value', value: 'bazbar' }] },
    ],
    activeSort: null,
};
document.getElementById('container')?.appendChild(component);
window.setInterval(() => {
    const key = Math.floor(Math.random() * 10);
    const value = Math.floor(Math.random() * 10);
    const randomDataRow = {
        cells: [
            { columnId: 'key', value: `Key: ${key}`, title: `Key: ${key}` },
            { columnId: 'value', value: `Value: ${value}`, title: `Value: ${value}` },
        ],
    };
    component.data = {
        ...component.data,
        rows: [...component.data.rows, randomDataRow],
    };
}, 2000);
//# sourceMappingURL=sticky-headers.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);