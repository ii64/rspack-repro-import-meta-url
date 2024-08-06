"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_data_grid_controller_custom-context-menu-items_js"],{

/***/ "./ui/components/docs/data_grid_controller/custom-context-menu-items.js":
/*!******************************************************************************!*\
  !*** ./ui/components/docs/data_grid_controller/custom-context-menu-items.js ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
const component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController();
component.data = {
    columns: [
        { id: 'key', title: 'Key', sortable: true, widthWeighting: 1, visible: true, hideable: false },
        { id: 'value', title: 'Value', sortable: true, widthWeighting: 1, visible: true, hideable: true },
    ],
    rows: [
        // Each key is the ID of a column, and the value is the value for that column
        { cells: [{ columnId: 'key', value: 'Bravo', title: 'Bravo' }, { columnId: 'value', value: 'Letter B' }] },
        { cells: [{ columnId: 'key', value: 'Alpha', title: 'Alpha' }, { columnId: 'value', value: 'Letter A' }] },
        { cells: [{ columnId: 'key', value: 'Charlie', title: 'Charlie' }, { columnId: 'value', value: 'Letter C' }] },
    ],
    contextMenus: {
        bodyRow: menu => {
            menu.defaultSection().appendItem('Hello World', () => {
                alert('You clicked!');
            });
        },
    },
};
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=custom-context-menu-items.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);