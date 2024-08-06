"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_TimelineFilters_test_js"],{

/***/ "./panels/timeline/TimelineFilters.test.js":
/*!*************************************************!*\
  !*** ./panels/timeline/TimelineFilters.test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineFilters', () => {
    describe('IsLong', () => {
        it('returns true if the event is longer than the defined duration for a new engine event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
            const longEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer).entries.find(event => {
                return event.dur &&
                    event.dur >
                        _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(50));
            });
            if (!longEvent) {
                throw new Error('Could not find expected long event.');
            }
            const filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.IsLong();
            filter.setMinimumRecordDuration(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(50));
            assert.isTrue(filter.accept(longEvent));
        });
        it('returns false if the event is shorter than the defined duration for a new engine event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
            const longEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer).entries.find(event => {
                return event.dur &&
                    event.dur >
                        _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(50)) &&
                    event.dur <
                        _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(100));
            });
            if (!longEvent) {
                throw new Error('Could not find expected long event.');
            }
            const filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.IsLong();
            filter.setMinimumRecordDuration(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(101));
            assert.isFalse(filter.accept(longEvent));
        });
    });
    describe('Category', () => {
        it('returns false for a new event if it has a category that is hidden', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            // These events are usually visible, so make the category hidden before
            // running this test.
            _timeline_js__WEBPACK_IMPORTED_MODULE_4__.EventUICategory.getCategoryStyles()['scripting'].hidden = true;
            const userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
            if (!userTimingEvent) {
                throw new Error('Could not find expected event.');
            }
            const filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.Category();
            assert.isFalse(filter.accept(userTimingEvent));
            _timeline_js__WEBPACK_IMPORTED_MODULE_4__.EventUICategory.getCategoryStyles()['scripting'].hidden = false;
        });
        it('returns true for a new event if it has a category that is visible', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const userTimingEvent = traceData.UserTimings.performanceMeasures.at(0);
            if (!userTimingEvent) {
                throw new Error('Could not find expected event.');
            }
            const filter = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.TimelineFilters.Category();
            assert.isTrue(filter.accept(userTimingEvent));
            _timeline_js__WEBPACK_IMPORTED_MODULE_4__.EventUICategory.getCategoryStyles()['scripting'].hidden = false;
        });
    });
});
//# sourceMappingURL=TimelineFilters.test.js.map

/***/ })

}]);