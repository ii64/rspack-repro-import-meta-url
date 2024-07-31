"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_data_grid_controller_filter_ts"],{

/***/ "./src/ui/components/docs/data_grid_controller/filter.ts":
/*!***************************************************************!*\
  !*** ./src/ui/components/docs/data_grid_controller/filter.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
const component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController();
const filterParser = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.FilterParser(['key', 'value']);
component.data = {
    columns: [
        { id: 'key', title: 'Method', sortable: true, widthWeighting: 1, visible: true, hideable: false },
        { id: 'value', title: 'Value', sortable: false, widthWeighting: 1, visible: true, hideable: false },
    ],
    rows: [
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.showOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
        {
            cells: [
                { columnId: 'key', value: 'Overlay.hideOverlay', title: 'Bravo' },
                { columnId: 'value', value: 'foobar', title: 'foobar' },
            ],
        },
    ],
};
document.getElementById('container')?.appendChild(component);
const filterTextInput = document.querySelector('input');
filterTextInput?.addEventListener('input', event => {
    const newText = event.target.value;
    const filters = filterParser.parse(newText);
    component.data = {
        ...component.data,
        filters: filters,
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);