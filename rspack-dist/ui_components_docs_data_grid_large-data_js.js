"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_data_grid_large-data_js"], {
"./ui/components/docs/data_grid/large-data.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.DataGrid();
function createRandomString() {
    var ret = '';
    for(var i = 0; i < 16; i++){
        var letter = String.fromCharCode(Math.floor(65 + Math.random() * 26));
        ret += letter;
    }
    return ret;
}
var rows = [];
for(var i = 0; i < 1000; i++){
    var newRow = {
        cells: [
            {
                columnId: 'key',
                value: "Row ".concat(i + 1)
            },
            {
                columnId: 'value',
                value: createRandomString()
            }
        ]
    };
    rows.push(newRow);
}
component.data = {
    columns: [
        {
            id: 'key',
            title: 'Key',
            widthWeighting: 1,
            visible: true,
            hideable: false,
            sortable: true
        },
        {
            id: 'value',
            title: 'Value',
            widthWeighting: 1,
            visible: true,
            hideable: true
        }
    ],
    rows: rows,
    activeSort: null
};
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component); //# sourceMappingURL=large-data.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);