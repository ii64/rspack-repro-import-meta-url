"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_perf_ui_TimelineGrid_test_ts"],{

/***/ "./src/ui/legacy/components/perf_ui/TimelineGrid.test.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/perf_ui/TimelineGrid.test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { MilliSeconds } = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('TimelineGrid', () => {
    it('calculates a set of dividers for the grid', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(200));
        const dividers = _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(calculator);
        assert.deepEqual(dividers, {
            offsets: [
                {
                    position: 0,
                    time: 0,
                },
                {
                    position: 100,
                    time: 100,
                },
                {
                    position: 200,
                    time: 200,
                },
            ],
            precision: 0,
        });
    });
    it('ups the precision if it is showing decimal values', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(1000);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(2));
        const dividers = _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(calculator);
        assert.deepEqual(dividers, {
            offsets: [
                {
                    position: 0,
                    time: 0,
                },
                {
                    position: 100,
                    time: 0.2,
                },
                {
                    position: 200,
                    time: 0.4,
                },
                {
                    position: 300,
                    time: 0.6,
                },
                {
                    position: 400,
                    time: 0.8,
                },
                {
                    position: 500,
                    time: 1,
                },
                {
                    position: 600,
                    time: 1.2,
                },
                {
                    position: 700,
                    time: 1.4,
                },
                {
                    position: 800,
                    time: 1.6,
                },
                {
                    position: 900,
                    time: 1.8,
                },
                {
                    position: 1000,
                    time: 2,
                },
            ],
            precision: 1,
        });
    });
    it('generates more dividers if there is more pixel room', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(1000);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(200));
        const dividers = _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(calculator);
        assert.deepEqual(dividers, {
            offsets: [
                {
                    position: 0,
                    time: 0,
                },
                {
                    position: 100,
                    time: 20,
                },
                {
                    position: 200,
                    time: 40,
                },
                {
                    position: 300,
                    time: 60,
                },
                {
                    position: 400,
                    time: 80,
                },
                {
                    position: 500,
                    time: 100,
                },
                {
                    position: 600,
                    time: 120,
                },
                {
                    position: 700,
                    time: 140,
                },
                {
                    position: 800,
                    time: 160,
                },
                {
                    position: 900,
                    time: 180,
                },
                {
                    position: 1000,
                    time: 200,
                },
            ],
            precision: 0,
        });
    });
});


/***/ })

}]);