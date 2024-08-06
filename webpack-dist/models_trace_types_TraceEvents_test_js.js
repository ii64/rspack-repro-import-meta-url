"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_types_TraceEvents_test_js"],{

/***/ "./models/trace/types/TraceEvents.test.js":
/*!************************************************!*\
  !*** ./models/trace/types/TraceEvents.test.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TraceEvent types', function () {
    const { Phase, isNestableAsyncPhase, isAsyncPhase, isFlowPhase } = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents;
    it('is able to determine if a phase is a nestable async phase', function () {
        assert.isTrue(isNestableAsyncPhase("b" /* Phase.ASYNC_NESTABLE_START */));
        assert.isTrue(isNestableAsyncPhase("e" /* Phase.ASYNC_NESTABLE_END */));
        assert.isTrue(isNestableAsyncPhase("n" /* Phase.ASYNC_NESTABLE_INSTANT */));
    });
    it('is able to determine if a phase is not a nestable async phase', function () {
        assert.isFalse(isNestableAsyncPhase("B" /* Phase.BEGIN */));
        assert.isFalse(isNestableAsyncPhase("E" /* Phase.END */));
        assert.isFalse(isNestableAsyncPhase("S" /* Phase.ASYNC_BEGIN */));
    });
    it('is able to determine if a phase is an async phase', function () {
        assert.isTrue(isAsyncPhase("b" /* Phase.ASYNC_NESTABLE_START */));
        assert.isTrue(isAsyncPhase("e" /* Phase.ASYNC_NESTABLE_END */));
        assert.isTrue(isAsyncPhase("n" /* Phase.ASYNC_NESTABLE_INSTANT */));
        assert.isTrue(isAsyncPhase("S" /* Phase.ASYNC_BEGIN */));
        assert.isTrue(isAsyncPhase("T" /* Phase.ASYNC_STEP_INTO */));
        assert.isTrue(isAsyncPhase("p" /* Phase.ASYNC_STEP_PAST */));
        assert.isTrue(isAsyncPhase("F" /* Phase.ASYNC_END */));
    });
    it('is able to determine if a phase is not an async phase', function () {
        assert.isFalse(isAsyncPhase("B" /* Phase.BEGIN */));
        assert.isFalse(isAsyncPhase("M" /* Phase.METADATA */));
        assert.isFalse(isAsyncPhase("N" /* Phase.OBJECT_CREATED */));
    });
    it('is able to determine if a phase is a flow phase', function () {
        assert.isTrue(isFlowPhase("s" /* Phase.FLOW_START */));
        assert.isTrue(isFlowPhase("t" /* Phase.FLOW_STEP */));
        assert.isTrue(isFlowPhase("f" /* Phase.FLOW_END */));
    });
    it('is able to determine if a phase is not a flow phase', function () {
        assert.isFalse(isFlowPhase("T" /* Phase.ASYNC_STEP_INTO */));
        assert.isFalse(isFlowPhase("b" /* Phase.ASYNC_NESTABLE_START */));
        assert.isFalse(isFlowPhase("B" /* Phase.BEGIN */));
    });
    it('is able to determine that an event is a synthetic user timing event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'timings-track.json.gz');
        const timingEvent = traceData.UserTimings.performanceMeasures[0];
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticUserTiming(timingEvent));
        const consoleEvent = traceData.UserTimings.consoleTimings[0];
        assert.isFalse(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticUserTiming(consoleEvent));
    });
    it('is able to determine that an event is a synthetic console event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'timings-track.json.gz');
        const consoleEvent = traceData.UserTimings.consoleTimings[0];
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticConsoleTiming(consoleEvent));
        const timingEvent = traceData.UserTimings.performanceMeasures[0];
        assert.isFalse(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticConsoleTiming(timingEvent));
    });
    it('is able to detemrine that an event is a synthetic network request event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'lcp-images.json.gz');
        const networkEvent = traceData.NetworkRequests.byTime[0];
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticNetworkRequestEvent(networkEvent));
        const otherEvent = traceData.Renderer.allTraceEntries[0];
        assert.isFalse(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticNetworkRequestEvent(otherEvent));
    });
    it('is able to determine that an event is a synthetic layout shift event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
        const syntheticLayoutShift = traceData.LayoutShifts.clusters[0].events[0];
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isSyntheticLayoutShift(syntheticLayoutShift));
    });
});
//# sourceMappingURL=TraceEvents.test.js.map

/***/ })

}]);