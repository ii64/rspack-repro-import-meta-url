"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_extras_MainThreadActivity_test_ts"],{

/***/ "./src/models/trace/extras/MainThreadActivity.test.ts":
/*!************************************************************!*\
  !*** ./src/models/trace/extras/MainThreadActivity.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const DEVTOOLS_CATEGORY = 'disabled-by-default-devtools.timeline';
function milliToMicro(x) {
    return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Timing.millisecondsToMicroseconds(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(x));
}
function makeFakeBounds(min, max) {
    return {
        min: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(min),
        max: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(max),
        range: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(max - min),
    };
}
describe('MainThreadActivity', function () {
    it('will use the trace bounds if there is no period of low utilitisation', async () => {
        const events = [
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(100), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(200), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(300), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(400), milliToMicro(50), DEVTOOLS_CATEGORY),
        ];
        const bounds = makeFakeBounds(milliToMicro(100), milliToMicro(450));
        const win = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.MainThreadActivity.calculateWindow(bounds, events);
        assert.strictEqual(win.min, bounds.min);
        assert.strictEqual(win.max, bounds.max);
    });
    it('focuses the window to avoid periods of low utilisation', async () => {
        const events = [
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(1), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(200), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(210), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(240), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(230), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(1000), milliToMicro(50), DEVTOOLS_CATEGORY),
        ];
        const bounds = makeFakeBounds(milliToMicro(1), milliToMicro(1050));
        const win = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.MainThreadActivity.calculateWindow(bounds, events);
        // This trace has:
        // 1 event at 1
        // 4 events between 200 and 230ms
        // 1 event at 1000ms
        // Therefore, the window focuses on the time period of 1 to 280ms (280 is
        // the end time of the event that starts at 230ms).
        // The right number looks odd because when we zoom the window we adjust it
        // postively by 5% for the upper bound to give it some breathing room.
        assert.strictEqual(win.min, milliToMicro(1));
        assert.strictEqual(win.max, milliToMicro(293.95));
    });
    it('uses the entire trace window if the period of low utilisation makes up the majority of the trace', async () => {
        const events = [
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(100), milliToMicro(50), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(200000), milliToMicro(50000), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(300000), milliToMicro(50000), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(400000), milliToMicro(50000), DEVTOOLS_CATEGORY),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeCompleteEvent)('Program', milliToMicro(4000000), milliToMicro(50000), DEVTOOLS_CATEGORY),
        ];
        // These events are very spaced out!
        // 1 at 100ms
        // 1 at 200,000ms
        // 1 at 300,000ms
        // 1 at 400,000ms
        // 1 at 4million ms!
        // This means that the area the autozoom picks is less than 10% of the
        // total time span, meaning that we fallback to just showing the entire
        // trace window.
        const bounds = makeFakeBounds(milliToMicro(100), milliToMicro(4050000));
        const win = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.MainThreadActivity.calculateWindow(bounds, events);
        // We expect the window to equal the entire trace bounds.
        assert.deepEqual(win, bounds);
    });
});


/***/ })

}]);