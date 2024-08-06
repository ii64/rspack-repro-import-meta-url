"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_perf_ui_TimelineOverviewCalculator_test_js"],{

/***/ "./ui/legacy/components/perf_ui/TimelineOverviewCalculator.test.js":
/*!*************************************************************************!*\
  !*** ./ui/legacy/components/perf_ui/TimelineOverviewCalculator.test.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { MilliSeconds } = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('TimelineOverviewCalculator', () => {
    it('can calculate pixels for a given time', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
        assert.strictEqual(calculator.computePosition(MilliSeconds(50)), 100);
    });
    it('can calculate the time position for a pixel value', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
        assert.strictEqual(calculator.positionToTime(100), 50);
    });
    it('formats time values', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
        const result = calculator.formatValue(55.234);
        assert.deepEqual(result, '55\u00A0ms');
    });
    it('formats time values with custom precision', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
        const result = calculator.formatValue(55.234, 2);
        assert.deepEqual(result, '55.23\u00A0ms');
    });
    it('adjusts times based on navigaton start times', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
        const fakeNavStart = {
            // TraceEngine events are in microseconds
            ts: 100_000,
        };
        calculator.setNavStartTimes([fakeNavStart]);
        // There is a navigation at 100ms, so this time gets changed to 5ms
        const result = calculator.formatValue(105);
        assert.deepEqual(result, '5\u00A0ms');
    });
    it('returns the correct range', async () => {
        const calculator = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineOverviewCalculator.TimelineOverviewCalculator();
        calculator.setDisplayWidth(200);
        calculator.setBounds(MilliSeconds(0), MilliSeconds(100));
        assert.strictEqual(calculator.boundarySpan(), 100);
    });
});
//# sourceMappingURL=TimelineOverviewCalculator.test.js.map

/***/ })

}]);