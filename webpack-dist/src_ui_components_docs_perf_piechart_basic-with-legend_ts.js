"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_perf_piechart_basic-with-legend_ts"],{

/***/ "./src/ui/components/docs/perf_piechart/basic-with-legend.ts":
/*!*******************************************************************!*\
  !*** ./src/ui/components/docs/perf_piechart/basic-with-legend.ts ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const chart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_1__.PieChart.PieChart();
document.getElementById('container')?.appendChild(chart);
chart.data = {
    chartName: 'Nice Chart',
    size: 110,
    formatter: value => String(value) + ' %',
    showLegend: true,
    total: 100,
    slices: [{ value: 75, color: 'crimson', title: 'Filling' }, { value: 25, color: 'burlywood', title: 'Crust' }],
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);