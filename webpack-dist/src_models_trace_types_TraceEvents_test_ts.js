"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_types_TraceEvents_test_ts"],{

/***/ "./src/models/trace/types/TraceEvents.test.ts":
/*!****************************************************!*\
  !*** ./src/models/trace/types/TraceEvents.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TraceEvent types', function () {
    const { Phase, isNestableAsyncPhase, isAsyncPhase, isFlowPhase } = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents;
    it('is able to determine if a phase is a nestable async phase', function () {
        assert.isTrue(isNestableAsyncPhase(Phase.ASYNC_NESTABLE_START));
        assert.isTrue(isNestableAsyncPhase(Phase.ASYNC_NESTABLE_END));
        assert.isTrue(isNestableAsyncPhase(Phase.ASYNC_NESTABLE_INSTANT));
    });
    it('is able to determine if a phase is not a nestable async phase', function () {
        assert.isFalse(isNestableAsyncPhase(Phase.BEGIN));
        assert.isFalse(isNestableAsyncPhase(Phase.END));
        assert.isFalse(isNestableAsyncPhase(Phase.ASYNC_BEGIN));
    });
    it('is able to determine if a phase is an async phase', function () {
        assert.isTrue(isAsyncPhase(Phase.ASYNC_NESTABLE_START));
        assert.isTrue(isAsyncPhase(Phase.ASYNC_NESTABLE_END));
        assert.isTrue(isAsyncPhase(Phase.ASYNC_NESTABLE_INSTANT));
        assert.isTrue(isAsyncPhase(Phase.ASYNC_BEGIN));
        assert.isTrue(isAsyncPhase(Phase.ASYNC_STEP_INTO));
        assert.isTrue(isAsyncPhase(Phase.ASYNC_STEP_PAST));
        assert.isTrue(isAsyncPhase(Phase.ASYNC_END));
    });
    it('is able to determine if a phase is not an async phase', function () {
        assert.isFalse(isAsyncPhase(Phase.BEGIN));
        assert.isFalse(isAsyncPhase(Phase.METADATA));
        assert.isFalse(isAsyncPhase(Phase.OBJECT_CREATED));
    });
    it('is able to determine if a phase is a flow phase', function () {
        assert.isTrue(isFlowPhase(Phase.FLOW_START));
        assert.isTrue(isFlowPhase(Phase.FLOW_STEP));
        assert.isTrue(isFlowPhase(Phase.FLOW_END));
    });
    it('is able to determine if a phase is not a flow phase', function () {
        assert.isFalse(isFlowPhase(Phase.ASYNC_STEP_INTO));
        assert.isFalse(isFlowPhase(Phase.ASYNC_NESTABLE_START));
        assert.isFalse(isFlowPhase(Phase.BEGIN));
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


/***/ })

}]);