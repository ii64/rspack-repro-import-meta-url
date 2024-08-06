"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_timeline_model_TimelineModelFilter_test_js"],{

/***/ "./models/timeline_model/TimelineModelFilter.test.js":
/*!***********************************************************!*\
  !*** ./models/timeline_model/TimelineModelFilter.test.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline_model/timeline_model.js */ "./models/timeline_model/timeline_model.js");
/* harmony import */ var _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('TimelineModelFilter', () => {
    describe('TimelineVisibleEventsFilter', () => {
        it('accepts events that are set in the constructor and rejects other events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const userTimingEvent = (traceData.UserTimings.performanceMeasures).at(0);
            assert.isOk(userTimingEvent);
            const visibleFilter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter([
                "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */,
            ]);
            assert.isTrue(visibleFilter.accept(userTimingEvent));
        });
        describe('eventType', () => {
            it('returns ConsoleTime if the event has the blink.console category', async function () {
                const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'timings-track.json.gz');
                const consoleTimingEvent = (traceData.UserTimings.consoleTimings).at(0);
                assert.isOk(consoleTimingEvent);
                assert.strictEqual(_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter.eventType(consoleTimingEvent), "ConsoleTime" /* TraceEngine.Types.TraceEvents.KnownEventName.ConsoleTime */);
            });
            it('returns UserTiming if the event has the blink.user_timing category', async function () {
                const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'timings-track.json.gz');
                const userTimingEvent = (traceData.UserTimings.performanceMeasures).at(0);
                assert.isOk(userTimingEvent);
                assert.strictEqual(_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter.eventType(userTimingEvent), "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */);
            });
            it('returns the event name if the event is any other category', async function () {
                const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
                const layoutShiftEvent = traceData.LayoutShifts.clusters.at(0)?.events.at(0);
                assert.isOk(layoutShiftEvent);
                assert.strictEqual(_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineVisibleEventsFilter.eventType(layoutShiftEvent), "LayoutShift" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutShift */);
            });
        });
    });
    describe('TimelineInvisibleEventsFilter', () => {
        it('does not accept events that have been set as invisible', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const userTimingEvent = (traceData.UserTimings.performanceMeasures).at(0);
            assert.isOk(userTimingEvent);
            const invisibleFilter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineInvisibleEventsFilter([
                "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */,
            ]);
            assert.isFalse(invisibleFilter.accept(userTimingEvent));
        });
        it('accepts events that have not been set as invisible', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
            const layoutShiftEvent = traceData.LayoutShifts.clusters.at(0)?.events.at(0);
            assert.isOk(layoutShiftEvent);
            const invisibleFilter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.TimelineInvisibleEventsFilter([
                "UserTiming" /* TraceEngine.Types.TraceEvents.KnownEventName.UserTiming */,
            ]);
            assert.isTrue(invisibleFilter.accept(layoutShiftEvent));
        });
    });
    describe('ExclusiveNameFilter', () => {
        it('accepts events that do not match the provided set of names to exclude', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const userTimingEvent = (traceData.UserTimings.performanceMeasures).at(0);
            assert.isOk(userTimingEvent);
            const filter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.ExclusiveNameFilter([
                "LayoutShift" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutShift */,
            ]);
            assert.isTrue(filter.accept(userTimingEvent));
        });
        it('rejects events that match the provided set of names to exclude', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
            const layoutShiftEvent = traceData.LayoutShifts.clusters.at(0)?.events.at(0);
            assert.isOk(layoutShiftEvent);
            const filter = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_1__.TimelineModelFilter.ExclusiveNameFilter([
                "LayoutShift" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutShift */,
            ]);
            assert.isFalse(filter.accept(layoutShiftEvent));
        });
    });
});
//# sourceMappingURL=TimelineModelFilter.test.js.map

/***/ })

}]);