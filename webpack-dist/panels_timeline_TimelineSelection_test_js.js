"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_TimelineSelection_test_js"],{

/***/ "./panels/timeline/TimelineSelection.test.js":
/*!***************************************************!*\
  !*** ./panels/timeline/TimelineSelection.test.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineSelection', function () {
    it('can be created with a frame', function () {
        const frame = new _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.Frames.TimelineFrame(
        /* seqId */ 1, /* startTime */ _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000), 
        /* start offset */ _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0));
        const selection = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.fromFrame(frame);
        assert.strictEqual(selection.object, frame);
        assert.strictEqual(selection.startTime, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(frame.startTime));
        assert.strictEqual(selection.endTime, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(frame.endTime));
        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.isFrameObject(selection.object));
    });
    it('can be created with a network request', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const request = traceData.NetworkRequests.byTime[0];
        const selection = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.fromTraceEvent(request);
        assert.strictEqual(selection.object, request);
        assert.strictEqual(selection.startTime, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(request.ts));
        assert.strictEqual(selection.endTime, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds((request.ts + request.dur)));
        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.isSyntheticNetworkRequestDetailsEventSelection(selection.object));
    });
    it('can be created with a TraceEngine event', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const firstLCPEvent = traceData.PageLoadMetrics.allMarkerEvents.find(event => {
            return event.name === 'largestContentfulPaint::Candidate';
        });
        if (!firstLCPEvent) {
            throw new Error('Could not find LCP event');
        }
        const selection = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.fromTraceEvent(firstLCPEvent);
        assert.strictEqual(selection.object, firstLCPEvent);
        assert.strictEqual(selection.startTime, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMilliSeconds(firstLCPEvent).startTime);
        assert.strictEqual(selection.endTime, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMilliSeconds(firstLCPEvent).endTime);
        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.isTraceEventSelection(selection.object));
    });
    it('can be created with a range', async function () {
        const selection = _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.fromRange(0, 10);
        assert.strictEqual(selection.startTime, 0);
        assert.strictEqual(selection.endTime, 10);
        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineSelection.TimelineSelection.isRangeSelection(selection.object));
    });
});
//# sourceMappingURL=TimelineSelection.test.js.map

/***/ })

}]);