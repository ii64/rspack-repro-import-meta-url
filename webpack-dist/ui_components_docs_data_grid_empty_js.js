"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_data_grid_empty_js"],{

/***/ "./ui/components/docs/data_grid/empty.js":
/*!***********************************************!*\
  !*** ./ui/components/docs/data_grid/empty.js ***!
  \***********************************************/
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
    rows: [],
    activeSort: null,
};
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=empty.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);