"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_data_grid_basic_ts"],{

/***/ "./src/ui/components/docs/data_grid/basic.ts":
/*!***************************************************!*\
  !*** ./src/ui/components/docs/data_grid/basic.ts ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.DataGrid();
component.data = {
    columns: [
        { id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false, sortable: true },
        { id: 'value', title: 'Value', widthWeighting: 1, visible: true, hideable: true },
    ],
    rows: [
        { cells: [{ columnId: 'key', value: 'Bravo', title: 'Bravo' }, { columnId: 'value', value: 'Letter B' }] },
        { cells: [{ columnId: 'key', value: 'Alpha', title: 'Alpha' }, { columnId: 'value', value: 'Letter A' }] },
        { cells: [{ columnId: 'key', value: 'Charlie', title: 'Charlie' }, { columnId: 'value', value: 'Letter C' }] },
    ],
    activeSort: null,
};
document.getElementById('container')?.appendChild(component);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);